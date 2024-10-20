#!/bin/bash

# Navigate to the script directory
script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/CSV/Tables"

echo "Assembling Tables..."

python TableManager.py TableOptions.s TableInstaller.event --error_on_missing

echo "Assembling Tables Complete"
