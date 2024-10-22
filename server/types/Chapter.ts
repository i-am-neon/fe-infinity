import type { ChapterDataForCsv } from "./ChapterDataForCsv.ts";
import type { ChapterEvent } from "./ChapterEvent.ts";
import type { ChapterMap } from "./ChapterMap.ts";

export type Chapter = {
  name: string;
  chapterDataForCsv: ChapterDataForCsv;
  chapterEvent: ChapterEvent;
  chapterMap: ChapterMap;
};

