#!/bin/bash

# png2dmp: Calls ./Png2DmpMac for all .png files in folder & subfolders
# Does not call png2dmp for files where the existing .dmp file is newer than the .png file

FILE_MATCH="*.png"
script_dir="$(dirname "$0")"
png2dmp="$script_dir/Png2DmpMac"

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
    # Run the Mac version of png2dmp
    "$png2dmp" "$F"
  fi
done

echo "Assembling Icons Complete"
