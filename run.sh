#!/bin/bash

# Check if "Clean.gba" file exists
if [ ! -f "Clean.gba" ]; then
  echo "Error: Clean.gba file not found!"
  exit 1
fi

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

# Capture only the real time
real_time=$({ time ./AssembleAll.sh; } 2>&1 | grep real | sed 's/real[[:space:]]*//')

# Output the time in the desired format
echo "Time to run: $real_time"
