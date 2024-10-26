import type { ChapterDataForCsv } from "./ChapterDataForCsv.ts";
import type { ChapterEvent } from "./ChapterEvent.ts";
import type { ChapterMap } from "./ChapterMap.ts";
import type { RomCharacter } from "./RomCharacter.ts";
import type { GenericCharacter } from "./GenericCharacter.ts";

export type Chapter = {
  name: string;
  chapterDataForCsv: ChapterDataForCsv;
  chapterEvent: ChapterEvent;
  chapterMap: ChapterMap;
  characters: RomCharacter[];
  genericCharacters: GenericCharacter[];
};

