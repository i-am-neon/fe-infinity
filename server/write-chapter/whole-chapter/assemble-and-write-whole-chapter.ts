import assembleAndWriteChapterDataCsv from "../chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "../chapter-event/assemble-and-write-chapter-event-and-text.ts";
import type { Chapter } from "../../types/Chapter.ts";
import { TEST_CHAPTER } from "./test-data.ts";
import writeChapterMap from "../chapter-map/write-chapter-map.ts";
import initializeCharacterTableCsv from "../chapter-characters/initialize-character-table-csv.ts";
import writeCharacterDatasToCsv from "../chapter-characters/write-character-datas-to-csv.ts";

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
  writeCharacterDatasToCsv(chapter.characters);
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

