import type { StoryArc } from "@/types/ai/StoryArc.ts";
import type { ChapterEvent } from "@/types/ChapterEvent.ts";
import { storyArcExample } from "@/testData/ai.ts";

export default async function assembleChapterEvent({
  storyArc,
  chapterNumberToAssemble,
}: {
  storyArc: StoryArc;
  chapterNumberToAssemble: number;
}): Promise<ChapterEvent> {
  return {
    eventDataReference:
      chapterNumberToAssemble === 0
        ? "PrologueEvent"
        : `Chapter${chapterNumberToAssemble}Event`,
    turnBasedEvents: undefined,
    characterBasedEvents: undefined,
    locationBasedEvents: undefined,
    miscBasedEvents: undefined,
    trapData: undefined,
    units: undefined,
    beginningScene: "",
    endingScene: "",
    localDefinitions: [""],
    text: "",
  };
}

if (import.meta.main) {
  const res = await assembleChapterEvent({
    storyArc: storyArcExample,
    chapterNumberToAssemble: 0,
  });
  console.log(JSON.stringify(res, null, 2));
}

