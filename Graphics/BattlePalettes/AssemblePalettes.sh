#!/bin/bash

# Calls png2dmp, PaletteCondenser, and compress from the tools_dir passed as an argument for all .png files in folder & subfolders
# Does not call tools for files where the existing .dmp file is newer than the .png file

# Check if the tools directory is passed as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <tools_dir>"
  exit 1
fi

tools_dir="$1"
png2dmp="$tools_dir/Png2Dmp"
compress_exe="$tools_dir/compress"

# Define the pattern to search for PNG files
FILE_MATCH="*.png"
script_dir="$(dirname "$0")"

# Create cache directory if it doesn't exist
[ ! -d "$script_dir/cache" ] && mkdir "$script_dir/cache"

# Find all .png files recursively
find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  # Get the directory, basename, and filename
  dir="$(dirname "$F")"
  basename="$(basename "$F")"
  filename="${basename%.*}"

  DUMP_FILE="$dir/cache/${filename}.dmp"     # .dmp file in the cache directory
  TOP_LEVEL_DUMP_FILE="$dir/${filename}.dmp" # .dmp file in the top-level directory (to be deleted)
  INPUT_PNG="$F"

  # Check if the .dmp file needs to be recompiled
  if [ -e "$DUMP_FILE" ]; then
    if [ "$INPUT_PNG" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi

  # If the .png file is newer than .dmp or the .dmp file doesn't exist
  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$basename\"..."

    # Run png2dmp with absolute paths
    "$png2dmp" "$INPUT_PNG" -po "$dir/temp.dmp"

    # Remove any existing .dmp file in the cache directory
    rm -f "$DUMP_FILE"

    # Run PaletteCondenser using absolute paths
    python "$script_dir/PaletteCondenser.py" "$dir/temp.dmp" "$dir/temp.dmp"

    # Run compress and append output to DUMP_FILE in cache directory
    "$compress_exe" "$dir/temp.dmp" >>"$DUMP_FILE"

    # Remove temp.dmp
    rm -f "$dir/temp.dmp"

    # Remove the top-level .dmp file (to keep only the one in cache/)
    rm -f "$TOP_LEVEL_DUMP_FILE"
  fi
done

echo "Assembling Palettes Complete"
