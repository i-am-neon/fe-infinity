import assembleAndWriteChapterDataCsv from "../chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "../chapter-event/assemble-and-write-chapter-event-and-text.ts";
import type { Chapter } from "../../types/Chapter.ts";
import { TEST_CHAPTER } from "./test-data.ts";
import writeChapterMap from "../chapter-map/write-chapter-map.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: Chapter
): Promise<void> {
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
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

