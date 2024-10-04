#!/bin/bash

script_dir="$(dirname "$(readlink -f "$0")")"
cd "$script_dir"

echo "Assembling world map..."

# Define paths
smallwmassembler="$script_dir/SmallWMAssembler.exe"
smallwm_s="$script_dir/SmallWM.s"
smallwm_graphics_dmp="$script_dir/SmallWMGraphics.dmp"
smallwm_palette_dmp="$script_dir/SmallWMPalette.dmp"
smallwm_tsa_dmp="$script_dir/SmallWMTSA.dmp"
png2dmp="$script_dir/Png2Dmp.exe"
compress="$script_dir/compress.exe"

# Convert paths to Windows format
smallwmassembler_win=$(winepath -w "$smallwmassembler")
smallwm_s_win=$(winepath -w "$smallwm_s")
smallwm_graphics_dmp_win=$(winepath -w "$smallwm_graphics_dmp")
smallwm_palette_dmp_win=$(winepath -w "$smallwm_palette_dmp")
smallwm_tsa_dmp_win=$(winepath -w "$smallwm_tsa_dmp")
png2dmp_win=$(winepath -w "$png2dmp")
compress_win=$(winepath -w "$compress")

# Run the assembler
wine "$smallwmassembler_win" "$smallwm_s_win" "$smallwm_graphics_dmp_win" "$smallwm_palette_dmp_win" "$smallwm_tsa_dmp_win" "$png2dmp_win" "$compress_win"

echo "Assembling glowy regions..."

# Change directory to Glowy
cd "$script_dir/Glowy"

# Process all .png files in the current directory
for F in *.png; do
  if [ -f "$F" ]; then
    echo "Assembling \"$F\""
    full_path="$PWD/$F"
    input_png_win=$(winepath -w "$full_path")
    filename="${F%.*}"
    output_dmp="$PWD/${filename}_palette.dmp"
    output_dmp_win=$(winepath -w "$output_dmp")
    # Use the Windows path to Png2Dmp.exe
    wine "$png2dmp_win" "$input_png_win" --lz77 -po "$output_dmp_win"
  fi
done

echo "Assembling Small World Map Complete"
