#!/bin/bash

# Calls png2dmp and other tools from the tools_dir passed as an argument for all .png files in folder & subfolders
# Does not call png2dmp for files where the existing .dmp file is newer than the .png file

# Check if the tools directory is passed as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <tools_dir>"
  exit 1
fi

tools_dir="$1"
png2dmp="$tools_dir/Png2Dmp"

# Define the pattern to search for PNG files
FILE_MATCH="*.png"
script_dir="$(dirname "$0")"

# Find all .png files recursively
find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  # Get the directory, basename, and filename
  dir="$(dirname "$F")"
  basename="$(basename "$F")"
  filename="${basename%.*}"

  # Construct DUMP_FILE in the cache directory within the same folder as the .png file
  DUMP_DIR="$dir/cache"
  DUMP_FILE="$DUMP_DIR/${filename}.dmp"
  PALETTE_DMP_FILE="$DUMP_DIR/${filename}Palette.dmp"

  # Create cache directory if it doesn't exist
  [ ! -d "$DUMP_DIR" ] && mkdir -p "$DUMP_DIR"

  # Check if the .dmp file needs to be recompiled
  if [ -e "$DUMP_FILE" ]; then
    if [ "$F" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi

  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$basename\"..."

    # Run png2dmp with --lz77 option and store the output in the cache directory
    "$png2dmp" "$F" --lz77 -o "$DUMP_FILE"

    # Run png2dmp with --palette-only option and redirect output to the palette .dmp file
    "$png2dmp" "$F" --palette-only >"$PALETTE_DMP_FILE"
  fi
done

echo "Assembling Cards Complete"
