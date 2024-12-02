import { TEST_CHAPTER } from "@/testData/test-data.ts";
import assembleAndWriteChapterDataCsv from "@/write-chapter/chapter-data-csv/assemble-and-write-chapter-data-csv.ts";
import assembleAndWriteChapterEventAndText from "@/write-chapter/chapter-event/assemble-and-write-chapter-event-and-text.ts";
import writeAllCharacterData from "@/write-chapter/characters/write-all-character-data.ts";
import writeChapterMap from "@/write-chapter/map/write-chapter-map.ts";
import writeChapterName from "@/write-chapter/write-chapter-name.ts";
import type { RomChapter } from "../types/RomChapter.ts";
import writeBattleQuotes from "@/write-chapter/write-battle-quotes.ts";

export default async function assembleAndWriteWholeChapter(
  chapter: RomChapter
): Promise<void> {
  writeChapterName(chapter.chapterId);
  await assembleAndWriteChapterDataCsv({
    chapterDatas: [chapter.chapterDataForCsv],
  });
  await assembleAndWriteChapterEventAndText({
    chapterId: chapter.chapterId,
    chapterTitle: chapter.displayName,
    chapterEvent: chapter.chapterEvent,
    objectiveTextPointer: chapter.chapterDataForCsv.statusObjectiveTextPointer,
    formattedObjectiveText: "TODO CHAPTER OBJECTIVE[X]",
    isPrologue: chapter.number === 0,
  });
  await writeChapterMap({
    chapterMap: chapter.chapterMap,
  });

  writeBattleQuotes(chapter.battleQuotes);

  // TODO: move generic characters to Character array? not sure
  for (const character of chapter.genericCharacters) {
    writeAllCharacterData(character);
  }
}

if (import.meta.main) {
  await assembleAndWriteWholeChapter(TEST_CHAPTER);
}

