#!/bin/bash

# Calls portraitformatter from the tools_dir passed as an argument for all .png files in folder & subfolders
# Does not call portraitformatter for files where the existing .dmp file is newer than the .png file

# Check if the tools directory is passed as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <tools_dir>"
  exit 1
fi

tools_dir="$1"
portraitformatter="$tools_dir/PortraitFormatter"

# Define the pattern to search for PNG files
FILE_MATCH="*.png"
script_dir="$(dirname "$0")"

# Find all .png files recursively
find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  # Get directory, basename, and filename
  dir="$(dirname "$F")"
  basename="$(basename "$F")"
  filename="${basename%.*}"

  # Construct DUMP_FILE in the cache directory within the same folder as the .png file
  DUMP_DIR="$dir/cache"
  DUMP_FILE="$DUMP_DIR/${filename}.dmp"

  # Create cache directory if it doesn't exist
  [ ! -d "$DUMP_DIR" ] && mkdir -p "$DUMP_DIR"

  # Check if the DUMP_FILE needs to be recompiled
  if [ -e "$DUMP_FILE" ]; then
    # Compare modification times
    if [ "$F" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi

  # If the .png file is newer than .dmp or the .dmp file doesn't exist
  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$basename\"..."

    # Run portraitformatter and store the output in the cache directory
    "$portraitformatter" "$F" -o "$DUMP_FILE"
  fi
done

echo "Assembling Portraits Complete"
