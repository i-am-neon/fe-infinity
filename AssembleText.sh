#!/bin/bash

# Navigate to the Text directory relative to the script's location
script_dir="$(cd "$(dirname "$0")" && pwd)"
cd "$script_dir/Text"

echo "Assembling text..."

python3 ./textprocess-classic-narrow.py "TextBuildfile.s" --parser-exe "./ParseFileMac" --installer InstallTextData.event --definitions TextDefinitions.event

echo "Assembling Text Complete"
