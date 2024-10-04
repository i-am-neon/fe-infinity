#!/bin/bash

# png2dmp.exe: Calls png2dmp.exe for all .png files in folder & subfolders
# Does not call png2dmp for files where the existing .dmp file is newer than the .png file

FILE_MATCH="*.png"
script_dir="$(dirname "$0")"
png2dmp="$script_dir/Png2Dmp.exe"
palette_condenser="$script_dir/PaletteCondenser.exe"
compress_exe="$script_dir/compress.exe"

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
    if [ "$F" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi

  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$basename\"..."
    # Change to directory of the .png file
    cd "$dir" || exit

    # Convert paths to Windows format
    png2dmp_win=$(winepath -w "$png2dmp")
    input_png_win=$(winepath -w "$basename")
    temp_dmp_win=$(winepath -w "temp.dmp")
    palette_condenser_win=$(winepath -w "$palette_condenser")
    compress_win=$(winepath -w "$compress_exe")
    DUMP_FILE_WIN=$(winepath -w "$DUMP_FILE")

    # Run png2dmp
    wine "$png2dmp_win" "$input_png_win" -po "$temp_dmp_win"

    # Remove any existing .dmp file in the same directory
    rm -f "${filename}.dmp"

    # Run PaletteCondenser
    wine "$palette_condenser_win" "$temp_dmp_win" "$temp_dmp_win"

    # Run compress and append output to DUMP_FILE
    wine "$compress_win" "$temp_dmp_win" >>"$DUMP_FILE"

    # Remove temp.dmp
    rm -f "temp.dmp"
  fi
done

echo "Assembling Palettes Complete"
