import writeFileToRomBuilder from "../../fileIO/write-file-to-rom-builder.ts";
import type { Chapter } from "../../types/Chapter.ts";
import initializeCharacterTableCsv from "../chapter-characters/character-table-csv/initialize-character-table-csv.ts";
import writeAllCharacterData from "../chapter-characters/write-all-character-data.ts";
import assembleAndWriteChapterDataCsv from "../chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import initializeChapterDataCsv from "../chapter-data-csv/initialize-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "../chapter-event/assemble-and-write-chapter-event-and-text.ts";
import writeChapterMap from "../chapter-map/write-chapter-map.ts";
import initializeChaptersDotS from "../initialize-chapters-dot-s.ts";
import writeChapterName from "../write-chapter-name.ts";
import { TEST_CHAPTER } from "./test-data.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: Chapter
): Promise<void> {
  // DO THESE BEFORE WRITING ALL CHAPTERS:
  await initializeCharacterTableCsv();
  await initializeChapterDataCsv();
  // Initialize Chapter Data files
  await initializeChaptersDotS();
  await writeFileToRomBuilder("Text/Chapters/DeathQuotes.s", "");
  // Initialize character data files
  await writeFileToRomBuilder("Text/Characters/Names.s", "");
  await writeFileToRomBuilder("Text/Characters/Descriptions.s", "");
  // Initialize portrait data files
  await writeFileToRomBuilder("Definitions/Portraits.s", "");
  await writeFileToRomBuilder("Definitions/Characters.s", "");
  await writeFileToRomBuilder(
    "Graphics/Portraits/PortraitInstaller.event",
    "ALIGN 4"
  );
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
  // TODO: write all characters in a loop?
  writeAllCharacterData(chapter.characters[0]);
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

