import assembleChapterEvent from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import assembleAllRomCharacters from "@/ai/assemble-rom-character/assemble-all-rom-characters.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";
import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { assignMultipleMaps } from "@/ai/maps/assign-multiple-maps.ts";
import { allMapOptions } from "@/ai/maps/map-metadata-creation/all-map-options.ts";
import getChapterDataForCsv from "@/ai/utilities/get-chapter-data-for-csv.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import { ChapterMap } from "@/types/ChapterMap.ts";
import type { RomChapter } from "@/types/RomChapter.ts";

export default async function allAI({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<RomChapter[]> {
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const storyArc = await generateStoryArc({
    worldSummary,
    mainCharacterIdea,
    numberOfChapters: 1,
  });

  const allRomCharacters = await assembleAllRomCharacters({
    storyArc,
    mainCharacterIdea,
  });

  const chapterNameToMap = await assignMultipleMaps({
    chapterNameToBattleOverview: storyArc.chapterIdeas.reduce(
      (acc, chapterIdea) => {
        acc[chapterIdea.chapterTitle] = chapterIdea.battleOverview;
        return acc;
      },
      {} as Record<string, string>
    ),
    allMapOptions,
  });

  // TODO: put this in a loop to do over multiple chapters
  const chapterNumberToAssemble = 0;
  // TODO: generate chapterName
  const chapterEvent = await assembleChapterEvent({
    storyArc,
    chapterNumberToAssemble,
    existingPartyCharacters: allRomCharacters.filter(
      (c) => c.chapterJoined < chapterNumberToAssemble
    ),
    newPlayableCharacters: allRomCharacters.filter(
      (c) =>
        c.chapterJoined === chapterNumberToAssemble && c.firstSeenAs !== "boss"
    ),
    boss: allRomCharacters.find(
      (c) =>
        c.chapterJoined === chapterNumberToAssemble && c.firstSeenAs === "boss"
    )!,
  });

  const chapterName = storyArc.chapterIdeas[0].chapterTitle;
  const chapterMap: ChapterMap = chapterNameToMap[chapterName];

  const chapterDataForCsv = getChapterDataForCsv({
    chapterName,
    mapName: chapterMap.name,
  });

  const romChapter: RomChapter = {
    name: chapterName,
    number: chapterNumberToAssemble,
    chapterDataForCsv,
    chapterEvent,
    chapterMap: chapterMap,
    characters: allRomCharacters,
    genericCharacters: [],
  };
  return [romChapter];
}

if (import.meta.main) {
  await allAI({ worldIdea: worldIdeaExample });
}

