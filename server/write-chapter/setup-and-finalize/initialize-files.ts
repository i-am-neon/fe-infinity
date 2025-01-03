import writeFileToRomBuilder from "@/fileIO/write-file-to-rom-builder.ts";
import initializeChapterDataCsv from "@/write-chapter/chapter-data-csv/initialize-chapter-data-csv.ts";
import initializeCharacterTableCsv from "@/write-chapter/characters/character-table-csv/initialize-character-table-csv.ts";
import initializeMapDirectory from "@/write-chapter/map/initialize-map-directory.ts";
import initializeTextChaptersDotS from "./initialize-chapters-dot-s.ts";
import clearDir from "@/fileIO/clear-dir.ts";
import getPathWithinRomBuilderDir from "@/fileIO/get-path-within-rom-builder-dir.ts";

export default async function initializeFiles(): Promise<void> {
  // Clear previously generated files
  await clearDir(getPathWithinRomBuilderDir("Events/build"));
  await clearDir(getPathWithinRomBuilderDir("Text/Chapters/build"));
  await clearDir(getPathWithinRomBuilderDir("Graphics/Portraits/build/images"));
  await clearDir(getPathWithinRomBuilderDir("Graphics/Portraits/build/dmp"));

  await initializeCharacterTableCsv();
  await initializeChapterDataCsv();
  // Initialize Chapter Data files
  await initializeTextChaptersDotS();
  await initializeMapDirectory();
  await writeFileToRomBuilder(
    "Definitions/Chapters.s",
    `.avoid 0x27 0x3A
.avoid 0x4A
`
  );
  await writeFileToRomBuilder(
    `Text/Chapters/build/Objectives.s`,
    `
## DefeatBossText
Defeat Boss[X]

## DefeatBossesText
Defeat Bosses[X]

## DefendText
Defend[X]

## DefeatAllText
Defeat All[X]

## UnknownText
???[X]

## EscapeText
Escape[X]
`
  );
  await writeFileToRomBuilder(
    `CSV/EAFiles/BattleQuotes.event`,
    `
//UnspecifiedBattleConvo(Character,Chapter,EventID,TextID)
//SpecifiedBattleConvo(Character1,Character2,Chapter,EventID,TextID)

`
  );
  await writeFileToRomBuilder(`Text/Chapters/build/Names.s`, "");
  await writeFileToRomBuilder("Text/Chapters/build/DeathQuotes.s", "");
  await writeFileToRomBuilder(
    "CSV/EAFiles/DeathQuotes.event",
    "//DeathQuote(Character,Chapter,EventID,TextID)\n"
  );
  await writeFileToRomBuilder(
    "Events/build/MasterEventInstaller.event",
    `
ALIGN 4
GameOverStart:
ASMC 0x800D391
NoFade
ENDB

#include "../REDAs.event"
`
  );
  await writeFileToRomBuilder(
    "Definitions/EventPointers.s",
    `
.avoid 0x00 0x03
.avoid 0x05
.avoid 0x0E 0x10
.avoid 0x12
.avoid 0x18 0x1A
.avoid 0x1C
.avoid 0x2E 0x30
.avoid 0x34
.avoid 0x38
.avoid 0x3C 0x3E
.avoid 0x42 0x44
.avoid 0x48
.avoid 0x4C
.avoid 0x50 0x52
.avoid 0x54
.avoid 0x57
.avoid 0x5B
.avoid 0x5F 0x61
.avoid 0x68
.avoid 0x6C 0x6E
.avoid 0x72
.avoid 0x79 0x7B
.avoid 0x7D
.avoid 0x88 0x8A
.avoid 0xA3
.avoid 0xB9
.avoid 0xC9
.avoid 0xCE
.avoid 0xE6
.avoid 0xEA
.avoid 0xED

DesertTempleObjectSet
DesertTemplePalette
DesertTempleTileConfig
OutdoorSnowyObjectSet
OutdoorSnowyPalette
OutdoorSnowyTileConfig
IndoorSnowyObjectSet
IndoorSnowyPalette
IndoorSnowyTileConfig
WesternIslesObjectSet
WesternIslesPalette
WesternIslesTileConfig
ImprovedCastleObjectSet
ImprovedCastlePalette
ImprovedCastleTileConfig
FE6WaterAnimations
ImprovedCastleAnims
`
  );
  await writeFileToRomBuilder("Definitions/Maps.s", "Dummy 0x04");
  // Initialize character data files
  await writeFileToRomBuilder("Text/Characters/Names.s", "");
  await writeFileToRomBuilder("Text/Characters/Descriptions.s", "");
  // Initialize portrait data files
  await writeFileToRomBuilder(
    "Definitions/Portraits.s",
    `BattleSageMCard
BattleSageFCard
DreadFighterMCard
DreadFighterFCard
MaligKnightCard
AssassinCard
HalberdierCard
SentinelCard
SpellswordMCard
SpellswordFCard
`
  );
  await writeFileToRomBuilder(
    "Definitions/Characters.s",
    `
// For some reason the first two character data pointers can't be used
Dummy1
Dummy2
`
  );
  await writeFileToRomBuilder(
    "Graphics/Portraits/build/PortraitInstaller.event",
    `ALIGN 4
PortraitTable:
#incbin "../VanillaPortraitTable.dmp"
`
  );
}

