#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Delete "hack.sav" if it exists in the script's directory
TARGET_FILE="$SCRIPT_DIR/hack.sav"

if [[ -f "$TARGET_FILE" ]]; then
  rm "$TARGET_FILE"
  echo "Deleted: $TARGET_FILE"
else
  echo "Attempt to delete failed. File not found: $TARGET_FILE"
fi
