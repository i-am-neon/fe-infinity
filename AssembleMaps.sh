#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Navigate to the Maps directory relative to the script's location
script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/Maps"

# Run tmx2ea.py with the required arguments
python3 tmx2ea.py --scanfolders --noheader -O MasterMapInstaller.event

echo "Map assembly complete."
