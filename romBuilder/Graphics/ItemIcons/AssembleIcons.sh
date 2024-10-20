#!/bin/bash

# Calls Png2DmpMac from the tools_dir passed as an argument for all .png files in folder & subfolders
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

find "$script_dir" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  DUMP_FILE="${F%.png}.dmp"
  if [ -e "$DUMP_FILE" ]; then
    if [ "$F" -nt "$DUMP_FILE" ]; then
      SHOULD_COMPILE=1
    fi
  else
    SHOULD_COMPILE=1
  fi
  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$(basename "$F")\"..."
    # Run the Mac version of png2dmp from the provided tools directory
    "$png2dmp" "$F"
  fi
done

echo "Assembling Icons Complete"
