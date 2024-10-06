#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the Maps directory relative to the script's location
script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/Maps"

echo | wine tmx2ea --scanfolders --noheader -O MasterMapInstaller.event

# Replace all '\' with '/' in the file and save changes
sed -i '' 's|\\|/|g' "MasterMapInstaller.event"

# tmx2ea.py DOES NOT WORK (I got it from the Sacred Echoes repo)
# python3 tmx2ea.py --scanfolders --noheader -O MasterMapInstaller.event

echo "Map assembly complete."
