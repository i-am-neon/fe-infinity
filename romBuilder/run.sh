#!/bin/bash

# Check if "Clean.gba" file exists
if [ ! -f "Clean.gba" ]; then
  echo "Error: Clean.gba file not found!"
  exit 1
fi

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

# Run the AssembleAll.sh, display its output, and capture the real time
output=$({ /usr/bin/time -p ./AssembleAll.sh 2>&1 | tee /dev/tty; })
real_time=$(echo "$output" | grep real | awk '{print $2 "s"}')

# Output the time in the desired format
echo "Time to run: $real_time"

# Check for the error message and log if it is found
if echo "$output" | grep -q "Errors occurred; no changes written."; then
  echo "❌❌❌❌❌ Errors when building ROM ❌❌❌❌❌"
else
  echo "✅✅✅✅✅ ROM built successfully ✅✅✅✅✅"
fi
