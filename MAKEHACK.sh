#!/bin/bash

# Enable error reporting
set -e

echo "---------------------------"

# Get the current directory
currDir="$(cd "$(dirname "$0")" && pwd)"

# Copy WithAnimations.gba to hack.gba
cp "$currDir/WithAnimations.gba" "$currDir/hack.gba"

echo "---------------------------"
echo "Assembling ROM. Please wait..."
echo "---------------------------"

# Run ColorzCore.exe using mono
mono "$currDir/EA/ColorzCore.exe" A FE8 "-output:$currDir/hack.gba" "-input:$currDir/Ultrafile.event" "--nocash-sym"

# Run SymCombo.exe to combine the sym files
mono "$currDir/sym/SymCombo.exe" "$currDir/hack.sym" "$currDir/hack.sym" "$currDir/Clean.sym"

# The UPS patch part is commented out as it's marked TODO and noted to cause corruption
# mono "$currDir/ups/ups.exe" diff -b "$currDir/Clean.gba" -m "$currDir/hack.gba" -o "$currDir/hack.ups"
