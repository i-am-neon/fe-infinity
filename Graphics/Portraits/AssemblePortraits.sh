#!/bin/bash

# portraitformatter.exe: Calls portraitformatter.exe for all .png files in folder & subfolders
# Does not call portraitformatter for files where the existing .dmp file is newer than the .png file

FILE_MATCH="*.png"
script_dir="$(dirname "$0")"
portraitformatter="$script_dir/PortraitFormatter.exe"

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

  # Create cache directory if it doesn't exist
  [ ! -d "$DUMP_DIR" ] && mkdir -p "$DUMP_DIR"

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
    # Change to directory of the .png file
    cd "$dir" || exit

    # Convert paths to Windows format
    portraitformatter_win=$(winepath -w "$portraitformatter")
    input_png_win=$(winepath -w "$F")
    DUMP_FILE_WIN=$(winepath -w "$DUMP_FILE")

    # Run portraitformatter via wine
    wine "$portraitformatter_win" "$input_png_win" -o "$DUMP_FILE_WIN"
  fi
done

echo "Assembling Portraits Complete"
