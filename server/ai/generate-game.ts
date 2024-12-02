import assembleChapterEvent from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import assembleAllRomCharacters from "@/ai/assemble-rom-character/assemble-all-rom-characters.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";
import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { assignMultipleMaps } from "@/ai/maps/assign-multiple-maps.ts";
import getChapterDataForCsv from "@/ai/utilities/get-chapter-data-for-csv.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import { ChapterMap } from "@/types/ChapterMap.ts";
import type { RomChapter } from "@/types/RomChapter.ts";
import chapterTitleToChapterId from "@/ai/utilities/chapter-title-to-chapter-id.ts";
import { Game } from "@/types/Game.ts";
import getChapterNumberDisplayText from "@/ai/utilities/get-chapter-number-display-text.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import getAllBattleQuotes from "@/ai/assemble-chapter-event/battle-quotes/get-all-battle-quotes.ts";

export default async function generateGame({
  worldIdea,
  numberOfChapters,
}: {
  worldIdea: string;
  numberOfChapters: number;
}): Promise<Game> {
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const storyArc = await generateStoryArc({
    worldSummary,
    mainCharacterIdea,
    numberOfChapters,
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
          (c) =>
            c.firstSeenAs !== "boss" &&
            c.chapterJoined < chapterNumberToAssemble
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
        map: chapterIdToMap[chapterTitleToChapterId(chapterIdea.chapterTitle)],
        nextChapterId,
      });
    }
  );
  const chapterEvents = await Promise.all(chapterEventPromises);

  const chapterIdToBattleQuotesPromises = storyArc.chapterIdeas.map(
    async (chapterIdea, index) => {
      const chapterNumberToAssemble = index;
      const chapterId = chapterTitleToChapterId(chapterIdea.chapterTitle);
      const _battleQuotes = await getAllBattleQuotes({
        existingPartyCharacters: allRomCharacters.filter(
          (c) =>
            c.firstSeenAs !== "boss" &&
            c.chapterJoined < chapterNumberToAssemble
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
        chapterId,
      });

      return {
        chapterId,
        battleQuotes: _battleQuotes,
      };
    }
  );
  const chapterIdToBattleQuotes = await Promise.all(
    chapterIdToBattleQuotesPromises
  );

  const allRomChapters: RomChapter[] = chapterEvents.map(
    (chapterEvent, chapterNumber) => {
      const thisChapterTitle =
        storyArc.chapterIdeas[chapterNumber].chapterTitle;
      const chapterId = chapterTitleToChapterId(thisChapterTitle);
      const chapterMap: ChapterMap = {
        name: chapterIdToMap[chapterId].name,
        tmx: chapterIdToMap[chapterId].tmx,
      };
      const chapterDataForCsv = getChapterDataForCsv({
        chapterId,
        mapName: chapterMap.name,
      });
      const battleQuotes = chapterIdToBattleQuotes.find(
        (chapterIdToBattleQuote) =>
          chapterIdToBattleQuote.chapterId === chapterId
      )?.battleQuotes;

      if (!battleQuotes) {
        throw new Error(`No battle quotes found for chapterId ${chapterId}`);
      }

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
        battleQuotes,
      };
    }
  );

  return {
    chapters: allRomChapters,
    characters: allRomCharacters,
  };
}

if (import.meta.main) {
  await generateGame({ worldIdea: worldIdeaExample, numberOfChapters: 1 });
}

