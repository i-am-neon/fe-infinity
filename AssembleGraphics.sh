#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Trap SIGINT (Ctrl+C) and kill all background processes
trap 'kill 0' SIGINT

# Get the directory where the script is located
currDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# AssembleGraphics is at the top level
tools_dir="$currDir/MacOSTools"

# Assemble icons in parallel
cd "$currDir/Graphics/ItemIcons"
echo "Assembling icons..."
./AssembleIcons.sh "$tools_dir" &

# Assemble battle palettes in parallel
cd "$currDir/Graphics/BattlePalettes"
echo "Assembling battle palettes..."
./AssemblePalettes.sh "$tools_dir" &

# Assemble class cards in parallel
cd "$currDir/Graphics/ClassCards"
echo "Assembling class cards..."
./AssembleCards.sh "$tools_dir" &

# Assemble map sprites in parallel
cd "$currDir/Graphics/MapSprites"
echo "Assembling map sprites..."
./AssembleSprites.sh "$tools_dir" &

# Assemble portraits in parallel
cd "$currDir/Graphics/Portraits"
echo "Assembling portraits..."
./AssemblePortraits.sh "$tools_dir" &

# Assemble world map in parallel
cd "$currDir/Graphics/WorldMap"
./AssembleSmallWM.sh "$tools_dir" &

# Wait for all background jobs to finish
wait

echo "All assemblies complete!"
