#!/bin/bash

# Enable error reporting
set -e

echo "---------------------------"

# Get the current directory
currDir="$(cd "$(dirname "$0")" && pwd)"

# Copy Clean.gba to WithAnimations.gba
cp "$currDir/Clean.gba" "$currDir/WithAnimations.gba"

echo "--------------------------------------"
echo "Assembling ROM animations. Please wait..."
echo "--------------------------------------"

# Run ColorzCore.exe using mono
mono "$currDir/EA/ColorzCore.exe" A FE8 "-output:$currDir/WithAnimations.gba" "-input:$currDir/Animations.event"
