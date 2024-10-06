#!/bin/bash

# This script should be run if any of these files change, but because they aren't I'm not running it for now.

# Suppress fixme and other Wine debug messages
export WINEDEBUG=-all

wine compress.exe DesertTemple.mapchip_config >DesertTemple.mapchip_config.dmp
wine compress.exe SnowyTilesetOutdoorTileConfiguration.mapchip_config >SnowyTilesetOutdoorTileConfiguration.mapchip_config.dmp
wine compress.exe SnowyTilesetIndoorTileConfiguration.mapchip_config >SnowyTilesetIndoorTileConfiguration.mapchip_config.dmp
wine compress.exe WesternIsles-Extended-Config.mapchip_config >WesternIsles-Extended-Config.mapchip_config.dmp
wine compress.exe ImprovedCastle.mapchip_config >ImprovedCastle.mapchip_config.dmp
