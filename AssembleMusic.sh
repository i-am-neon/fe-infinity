#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Get the directory where the script is located
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Define the file match pattern
FILE_MATCH="*.s"

echo "Assembling music..."

# Find all .s files recursively in the Music directory
find "$script_dir/Music" -type f -name "$FILE_MATCH" -print0 | while IFS= read -r -d '' F; do
  SHOULD_COMPILE=0
  dir="$(dirname "$F")"
  filename="$(basename "$F" .s)"
  EVENT_FILE="$dir/cache/${filename}.event"

  # Create the cache directory if it doesn't exist
  mkdir -p "$dir/cache"

  if [ ! -e "$EVENT_FILE" ]; then
    SHOULD_COMPILE=1
  elif [ "$F" -nt "$EVENT_FILE" ]; then
    SHOULD_COMPILE=1
  fi

  if [ "$SHOULD_COMPILE" -eq 1 ]; then
    echo "Assembling \"$filename.s\"..."
    # Change to the directory of the .s file
    cd "$dir" || exit

    # Run s2ea.exe via wine, specifying the full path to s2ea.exe
    wine "$script_dir/Music/s2ea.exe" "$filename.s"

    # Move the new .event file to the cache directory
    mv "$filename.event" "$dir/cache/"
  fi
done

# Run MusicRef.py script
cd "$script_dir/Music"

# Ensure that Python is installed and accessible
if command -v python3 &>/dev/null; then
  python_cmd="python3"
elif command -v python &>/dev/null; then
  python_cmd="python"
else
  echo "Python is not installed. Please install Python to continue."
  exit 1
fi

echo "Generating music references..."

$python_cmd "MusicRef.py" "../Events" "../CSV/Tables/ChapterData/ChapterDataTable.csv" "../ASM/PersonalMusic/PersonalMusic.event" "OtherRefs.txt" "../Definitions/Music.s" "MusicRefs.txt"

echo "Assembling Music Complete"
