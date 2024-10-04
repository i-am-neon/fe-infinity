#!/bin/bash

# png2dmp.exe: Calls png2dmp.exe for all .png files in folder & subfolders
# Does not call png2dmp for files where the existing .dmp file is newer than the .png file

FILE_MATCH="*.png"
script_dir="$(dirname "$0")"
png2dmp="$script_dir/Png2Dmp.exe"

# Find all .png files recursively
find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  # Get directory and basename
  dir="$(dirname "$F")"
  basename="$(basename "$F")"
  filename="${basename%.*}"

  # Construct DUMP_FILE in the cache directory within the same folder as the .png file
  DUMP_DIR="$dir/cache"
  DUMP_FILE="$DUMP_DIR/${filename}.dmp"
  PALETTE_DMP_FILE="$DUMP_DIR/${filename}Palette.dmp"

  # Create cache directory if it doesn't exist
  [ ! -d "$DUMP_DIR" ] && mkdir -p "$DUMP_DIR"

  if [ -e "$DUMP_FILE" ]; then
    if [ "$F" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi

  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$basename\"..."
    # Convert paths to Windows format
    png2dmp_win=$(winepath -w "$png2dmp")
    input_png_win=$(winepath -w "$F")
    DUMP_FILE_WIN=$(winepath -w "$DUMP_FILE")

    # Run png2dmp with --lz77 option
    wine "$png2dmp_win" "$input_png_win" --lz77 -o "$DUMP_FILE_WIN"

    # Run png2dmp with --palette-only option and redirect output to palette .dmp file
    PALETTE_DMP_FILE_WIN=$(winepath -w "$PALETTE_DMP_FILE")
    wine "$png2dmp_win" "$input_png_win" --palette-only >"$PALETTE_DMP_FILE"
  fi
done

echo "Assembling Cards Complete"
