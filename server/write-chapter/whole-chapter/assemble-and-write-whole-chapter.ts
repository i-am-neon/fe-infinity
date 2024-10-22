import asssembleAndWriteChapterDataCsv from "../chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import asssembleAndWriteChapterEventAndText from "../chapter-event/assemble-and-write-chapter-event-and-text";
import type { Chapter } from "../../types/Chapter.ts";
import { TEST_CHAPTER } from "./test-data.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: Chapter
): Promise<void> {
  // TODO: writing appends to the last row in the CSV. At the beginning write the header row.
  await asssembleAndWriteChapterDataCsv({
    chapterDatas: [chapter.chapterDataForCsv],
  });
  await asssembleAndWriteChapterEventAndText({
    chapterName: chapter.name,
    chapterEvent: chapter.chapterEvent,
  });
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

