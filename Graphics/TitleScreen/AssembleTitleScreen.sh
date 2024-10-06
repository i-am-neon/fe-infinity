#!/bin/bash

# This script should be run if any of these files change, but because they aren't I'm not running it for now.

# Need to include the .dmp files in the Graphics/TitleScreen/titlebackgroundinstaller.event with an #incbin
./Png2DmpMac titlebackgroundimage.png --palette-only -po titlebackgroundimage_palette.dmp

./Png2DmpMac Scroll.png -o Scroll.dmp
