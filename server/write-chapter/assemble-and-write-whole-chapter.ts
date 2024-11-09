import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import writeFileToRomBuilder from "@/fileIO/write-file-to-rom-builder.ts";
import type { RomChapter } from "../types/RomChapter.ts";
import initializeCharacterTableCsv from "@/write-chapter/characters/character-table-csv/initialize-character-table-csv.ts";
import writeAllCharacterData from "@/write-chapter/characters/write-all-character-data.ts";
import assembleAndWriteChapterDataCsv from "@/write-chapter/chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import initializeChapterDataCsv from "@/write-chapter/chapter-data-csv/initialize-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "@/write-chapter/chapter-event/assemble-and-write-chapter-event-and-text.ts";
import writeChapterMap from "@/write-chapter/map/write-chapter-map.ts";
import initializeChaptersDotS from "@/write-chapter/initialize-chapters-dot-s.ts";
import writeChapterName from "@/write-chapter/write-chapter-name.ts";
import { TEST_CHAPTER } from "@/testData/test-data.ts";
import initializeMapDirectory from "@/write-chapter/map/initialize-map-directory.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: RomChapter
): Promise<void> {
  // DO THESE BEFORE WRITING ALL CHAPTERS:
  await initializeCharacterTableCsv();
  await initializeChapterDataCsv();
  // Initialize Chapter Data files
  await initializeChaptersDotS();
  await initializeMapDirectory();
  await writeFileToRomBuilder("Text/Chapters/DeathQuotes.s", "");
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

#include "REDAs.event"
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
    "Graphics/Portraits/PortraitInstaller.event",
    `ALIGN 4
PortraitTable:
#incbin "VanillaPortraitTable.dmp"
`
  );

  /////////////////////////////////////////////

  writeChapterName(chapter.name);
  await assembleAndWriteChapterDataCsv({
    chapterDatas: [chapter.chapterDataForCsv],
  });
  await assembleAndWriteChapterEventAndText({
    chapterName: chapter.name,
    chapterEvent: chapter.chapterEvent,
  });
  await writeChapterMap({
    chapterMap: chapter.chapterMap,
    chapterName: chapter.name,
  });

  for (const character of [
    ...chapter.characters,
    ...chapter.genericCharacters,
  ]) {
    writeAllCharacterData(character);
  }

  /////////////////////////////////////////////
  // DO THESE AFTER ALL CHAPTERS
  // Finalize Chapter data files
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Events/build/MasterEventInstaller.event",
    content: `EndMainPointer:
END_MAIN`,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

