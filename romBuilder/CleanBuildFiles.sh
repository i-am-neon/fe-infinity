#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Remove all .dmp files from Graphics/WorldMap directory, excluding Glowy and its subdirectories
# Can't get the excluded dir to work
# find Graphics/WorldMap \( -type d -name Glowy -prune \) -o -type f -name "*.dmp" -delete

# Remove all .dmp files from Graphics/ItemIcons directory
find Graphics/ItemIcons/ -type f -name "*.dmp" -delete

# Remove all .event files from CSV/Tables/ directory except TableDefinitions.event
find CSV/Tables/ -type f -name "*.event" ! -name "TableDefinitions.event" -delete

# List of directories to clean (remove all files from these directories)
DIRS_TO_CLEAN=(
  "Text/.TextEntries"
  "Music/cache"
  "Graphics/BattlePalettes/cache"
  "Graphics/ClassCards/cache"
  "Graphics/MapSprites/cache"
  "Graphics/Portraits/cache"
  "Maps/data"
)

# List of specific files to remove
FILES_TO_REMOVE=(
  "hack.gba"
  "hack.sav"
  "hack.sym"
  "WithAnimations.gba"
  "Text/InstallTextData.event"
  "Text/TextDefinitions.event"
  "Definitions/Definitions.event"
  "Definitions/Skills.s"
  "Maps/MasterMapInstaller.event"
)

# Clean directories: remove all files from each directory listed
for dir in "${DIRS_TO_CLEAN[@]}"; do
  if [ -d "$dir" ]; then
    rm -rf "$dir"/*
  fi
done

# Remove specific files
for file in "${FILES_TO_REMOVE[@]}"; do
  if [ -f "$file" ]; then
    rm -f "$file"
  fi
done

echo "Clean up complete."
