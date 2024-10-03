#!/bin/bash

# Check if "Clean.gba" file exists
if [ ! -f "Clean.gba" ]; then
  echo "Error: Clean.gba file not found!"
  exit 1
fi

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

# Run the .bat file using Wine
wine cmd /c AssembleAll.bat

# To run individually, do:
# WINEDEBUG=-all wine cmd /c AssembleMusic.bat noPause noRefs
# WINEDEBUG=-all wine cmd /c AssembleDefs.bat noPause
