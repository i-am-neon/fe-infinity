#!/bin/bash

# png2dmp.exe: Calls png2dmp.exe for all .png files in folder & subfolders
# Does not call png2dmp for files where the existing .dmp file is newer than the .png file

FILE_MATCH="*.png"
script_dir="$(dirname "$0")"
png2dmp="$script_dir/Png2Dmp.exe"

# Create cache directory if it doesn't exist
[ ! -d "$script_dir/cache" ] && mkdir "$script_dir/cache"

# Find all .png files recursively
find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  # Get directory and basename
  dir="$(dirname "$F")"
  basename="$(basename "$F")"
  filename="${basename%.*}"

  DUMP_FILE="$dir/cache/${filename}.dmp"

  if [ -e "$DUMP_FILE" ]; then
    # Compare modification times
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
  fi
done

echo "Assembling Sprites Complete"
