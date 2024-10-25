import appendToFileInRomBuilderSync from "../fileIO/append-to-file-in-rom-builder-sync.ts";
import writeFileToRomBuilder from "../fileIO/write-file-to-rom-builder.ts";
import type { Chapter } from "../types/Chapter.ts";
import initializeCharacterTableCsv from "./chapter-characters/character-table-csv/initialize-character-table-csv.ts";
import writeAllCharacterData from "./chapter-characters/write-all-character-data.ts";
import assembleAndWriteChapterDataCsv from "./chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import initializeChapterDataCsv from "./chapter-data-csv/initialize-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "./chapter-event/assemble-and-write-chapter-event-and-text.ts";
import writeChapterMap from "./chapter-map/write-chapter-map.ts";
import initializeChaptersDotS from "./initialize-chapters-dot-s.ts";
import writeChapterName from "./write-chapter-name.ts";
import { TEST_CHAPTER } from "../testData/test-data.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: Chapter
): Promise<void> {
  // DO THESE BEFORE WRITING ALL CHAPTERS:
  await initializeCharacterTableCsv();
  await initializeChapterDataCsv();
  // Initialize Chapter Data files
  await initializeChaptersDotS();
  await writeFileToRomBuilder("Text/Chapters/DeathQuotes.s", "");
  await writeFileToRomBuilder(
    "CSV/EAFiles/DeathQuotes.event",
    "//DeathQuote(Character,Chapter,EventID,TextID)\n"
  );
  await writeFileToRomBuilder(
    "Events/MasterEventInstaller.event",
    `
ALIGN 4
GameOverStart:
ASMC 0x800D391
NoFade
ENDB

#include "REDAs.event"
`
  );
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
    pathWithinRomBuilder: "Events/MasterEventInstaller.event",
    content: `EndMainPointer:
END_MAIN`,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

