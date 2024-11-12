#!/bin/bash

# Get the directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Change to the script's directory
cd "$SCRIPT_DIR"

# Check if "hack.gba" file exists
if [ ! -f "hack.gba" ]; then
  echo "Error: hack.gba file not found!"
  exit 1
fi

# Path to VisualBoyAdvance-M app
EMULATOR_PATH="/Users/silver/Documents/Games/GBA/Utilities/visualboyadvance-m.app"

# Get the full path to "hack.gba"
ROM_PATH="$(pwd)/hack.gba"

# Open the ROM file with VisualBoyAdvance-M using the full path
open -a "$EMULATOR_PATH" --args "$ROM_PATH"
