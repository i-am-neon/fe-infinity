import type { Chapter } from "../../types/Chapter.ts";
import initializeCharacterTableCsv from "../chapter-characters/character-table-csv/initialize-character-table-csv.ts";
import writeAllCharacterData from "../chapter-characters/write-all-character-data.ts";
import assembleAndWriteChapterDataCsv from "../chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "../chapter-event/assemble-and-write-chapter-event-and-text.ts";
import writeChapterMap from "../chapter-map/write-chapter-map.ts";
import { TEST_CHAPTER } from "./test-data.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: Chapter
): Promise<void> {
  // DO THESE BEFORE WRITING ALL CHAPTERS:
  await initializeCharacterTableCsv();

  // TODO: writing appends to the last row in the CSV. At the beginning write the header row.
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
  await writeAllCharacterData(chapter.characters[0]);
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}
