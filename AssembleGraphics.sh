#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Get the directory where the script is located
currDir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

cd "$currDir/Graphics/ItemIcons"

echo "Assembling icons..."

./AssembleIcons.sh

cd "$currDir/Graphics/BattlePalettes"

echo "Assembling battle palettes..."

./AssemblePalettes.sh

cd "$currDir/Graphics/ClassCards"

echo "Assembling class cards..."

./AssembleCards.sh

cd "$currDir/Graphics/MapSprites"

echo "Assembling map sprites..."

./AssembleSprites.sh

cd "$currDir/Graphics/Portraits"

echo "Assembling portraits..."

./AssemblePortraits.sh

cd "$currDir/Graphics/WorldMap"

./AssembleSmallWM.sh
