#!/bin/bash

# Check if the tools directory is passed as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <tools_dir>"
  exit 1
fi

tools_dir="$(cd "$1" && pwd)" # Convert tools_dir to an absolute path
script_dir="$(dirname "$(readlink -f "$0")")"
cd "$script_dir"

echo "Assembling world map..."

# Define paths
smallwm_s="$script_dir/SmallWM.s"
smallwm_graphics_dmp="$script_dir/SmallWMGraphics.dmp"
smallwm_palette_dmp="$script_dir/SmallWMPalette.dmp"
smallwm_tsa_dmp="$script_dir/SmallWMTSA.dmp"
png2dmp="$tools_dir/Png2Dmp"
compress="$tools_dir/compress"

# Run the assembler using Python with absolute paths for tools
python SmallWMAssembler.py "$smallwm_s" "$smallwm_graphics_dmp" "$smallwm_palette_dmp" "$smallwm_tsa_dmp" "$png2dmp" "$compress"

echo "Assembling glowy regions..."

# Change directory to Glowy
cd "$script_dir/Glowy"

# Process all .png files in the current directory
for F in *.png; do
  if [ -f "$F" ]; then
    echo "Assembling \"$F\""
    full_path="$PWD/$F"
    filename="${F%.*}"
    output_dmp="$PWD/${filename}_palette.dmp"
    # Use png2dmp directly with absolute path
    "$png2dmp" "$full_path" --lz77 -po "$output_dmp"
  fi
done

echo "Assembling Small World Map Complete"
