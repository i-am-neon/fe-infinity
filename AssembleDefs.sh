#!/bin/bash

# Change directory to the "Definitions" folder relative to the script location
cd "$(dirname "$0")/Definitions" || exit

# Run the MakeSkillDefs script or command
python3 MakeSkillDefs.py

# Run Enumerate with its arguments
python3 Enumerate.py DefinitionsAssembler.s Definitions.event --clean

# Run MakeParseDefs with its arguments
python3 MakeParseDefs.py Definitions.event ParseDefinitions.txt ../Text/ParseDefinitions.txt Mug
