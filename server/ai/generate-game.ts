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
import chapterTitleToChapterId from "@/ai/utilities/chapter-title-to-chapter-id.ts";
import { Game } from "@/types/Game.ts";
import getChapterNumberDisplayText from "@/ai/utilities/get-chapter-number-display-text.ts";

export default async function generateGame({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<Game> {
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const storyArc = await generateStoryArc({
    worldSummary,
    mainCharacterIdea,
    numberOfChapters: 2,
  });

  const [allRomCharacters, chapterIdToMap] = await Promise.all([
    assembleAllRomCharacters({ storyArc, mainCharacterIdea }),
    assignMultipleMaps({
      chapterNameToBattleOverview: storyArc.chapterIdeas.reduce(
        (acc, chapterIdea) => {
          acc[chapterTitleToChapterId(chapterIdea.chapterTitle)] =
            chapterIdea.battleOverview;
          return acc;
        },
        {} as Record<string, string>
      ),
      allMapOptions,
    }),
  ]);

  const chapterEventPromises = storyArc.chapterIdeas.map(
    async (chapterIdea, index) => {
      const chapterNumberToAssemble = index;
      const nextChapterId =
        chapterNumberToAssemble < storyArc.chapterIdeas.length - 1
          ? chapterTitleToChapterId(
              storyArc.chapterIdeas[chapterNumberToAssemble + 1].chapterTitle
            )
          : undefined;
      return await assembleChapterEvent({
        chapterIdea,
        existingPartyCharacters: allRomCharacters.filter(
          (c) => c.chapterJoined < chapterNumberToAssemble
        ),
        newPlayableCharacters: allRomCharacters.filter(
          (c) =>
            c.chapterJoined === chapterNumberToAssemble &&
            c.firstSeenAs !== "boss"
        ),
        boss: allRomCharacters.find(
          (c) =>
            c.chapterJoined === chapterNumberToAssemble &&
            c.firstSeenAs === "boss"
        )!,
        nextChapterId,
      });
    }
  );
  const chapterEvents = await Promise.all(chapterEventPromises);

  const allRomChapters: RomChapter[] = chapterEvents.map(
    (chapterEvent, chapterNumber) => {
      const thisChapterTitle =
        storyArc.chapterIdeas[chapterNumber].chapterTitle;
      const chapterId = chapterTitleToChapterId(thisChapterTitle);
      const chapterMap: ChapterMap = chapterIdToMap[chapterId];
      const chapterDataForCsv = getChapterDataForCsv({
        chapterId,
        mapName: chapterMap.name,
      });

      return {
        chapterId,
        displayName: `${getChapterNumberDisplayText(
          chapterNumber
        )}: ${thisChapterTitle}`,
        number: chapterNumber,
        chapterDataForCsv,
        chapterEvent,
        chapterMap: chapterMap,
        genericCharacters: [],
      };
    }
  );

  return {
    chapters: allRomChapters,
    characters: allRomCharacters,
  };
}

if (import.meta.main) {
  await generateGame({ worldIdea: worldIdeaExample });
}

