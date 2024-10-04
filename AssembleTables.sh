#!/bin/bash

# Navigate to the script directory
script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/CSV/Tables"

echo "Assembling Tables..."

# Run the TableManager.exe via wine, piping an empty line to it
echo | wine ./TableManager.exe TableOptions.s TableInstaller.event --error_on_missing

echo "Assembling Tables Complete"
