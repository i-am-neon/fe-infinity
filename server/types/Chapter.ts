import type { ChapterDataForCsv } from "./ChapterDataForCsv.ts";
import type { ChapterEvent } from "./ChapterEvent.ts";

export type Chapter = {
  name: string;
  chapterDataForCsv: ChapterDataForCsv;
  chapterEvent: ChapterEvent;
};
