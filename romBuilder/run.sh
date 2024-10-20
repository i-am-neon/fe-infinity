#!/bin/bash

# Check if "Clean.gba" file exists
if [ ! -f "Clean.gba" ]; then
  echo "Error: Clean.gba file not found!"
  exit 1
fi

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

# Run the AssembleAll.sh, display its output, and capture the real time
real_time=$({ /usr/bin/time -p ./AssembleAll.sh 2>&1 | tee /dev/tty; } 2>&1 | grep real | awk '{print $2 "s"}')

# Output the time in the desired format
echo "Time to run: $real_time"
