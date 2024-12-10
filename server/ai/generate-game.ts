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
import reDoAllBattleOverviews from "@/ai/maps/re-do-all-battle-overviews.ts";
import { StoryArc } from "@/types/ai/StoryArc.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { GenericCharacter } from "@/types/GenericCharacter.ts";
import getDescText from "@/lib/get-desc-text.ts";
import getNameText from "@/lib/get-name-text.ts";

export default async function generateGame({
  worldIdea,
  numberOfChapters,
}: {
  worldIdea: string;
  numberOfChapters: number;
}): Promise<Game> {
  console.log("generating world summary, main character idea, and story arc");
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const storyArc = await generateStoryArc({
    worldSummary,
    mainCharacterIdea,
    numberOfChapters,
  });
  console.log("✅ generated world summary, main character idea, and story arc");

  console.log("generating characters and maps");

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

  const chapterIdToIdeaAndMap: Record<
    string,
    { idea: ChapterIdea; map: MapData }
  > = storyArc.chapterIdeas.reduce((acc, chapterIdea) => {
    const chapterId = chapterTitleToChapterId(chapterIdea.chapterTitle);
    acc[chapterId] = {
      idea: chapterIdea,
      map: chapterIdToMap[chapterId],
    };
    return acc;
  }, {} as Record<string, { idea: ChapterIdea; map: MapData }>);
  const updatedChapters = await reDoAllBattleOverviews(chapterIdToIdeaAndMap);
  const updatedStoryArc: StoryArc = {
    ...storyArc,
    chapterIdeas: storyArc.chapterIdeas.map((chapterIdea) => {
      const chapterId = chapterTitleToChapterId(chapterIdea.chapterTitle);
      return updatedChapters[chapterId].idea;
    }),
  };
  console.log("updatedStoryArc 🔥", JSON.stringify(updatedStoryArc, null, 2));
  console.log("🔥🔥🔥");
  console.log("✅ generated characters and maps");

  console.log("generating chapter events and battle quotes");

  const chapterEventPromises = updatedStoryArc.chapterIdeas.map(
    async (chapterIdea, index) => {
      const chapterNumberToAssemble = index;
      const nextChapterId =
        chapterNumberToAssemble < updatedStoryArc.chapterIdeas.length - 1
          ? chapterTitleToChapterId(
              updatedStoryArc.chapterIdeas[chapterNumberToAssemble + 1]
                .chapterTitle
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
        isPrologue: chapterNumberToAssemble === 0,
      });
    }
  );

  const chapterIdToBattleQuotesPromises = updatedStoryArc.chapterIdeas.map(
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

  const [chapterEvents, chapterIdToBattleQuotes] = await Promise.all([
    Promise.all(chapterEventPromises),
    Promise.all(chapterIdToBattleQuotesPromises),
  ]);
  console.log("✅ generated chapter events and battle quotes");

  const allRomChapters: RomChapter[] = chapterEvents.map(
    (chapterEvent, chapterNumber) => {
      const thisChapterTitle =
        updatedStoryArc.chapterIdeas[chapterNumber].chapterTitle;
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

      const genericCharacters: GenericCharacter[] = [
        {
          name: "Soldier",
          age: "mature adult",
          backstory: "A generic enemy unit.",
          firstSeenAs: "enemy non-boss",
          // random between "male" and "female"
          gender: Math.random() > 0.5 ? "female" : "male",
          inGameDescription: "A generic enemy unit.",
          personality: "None.",
          physicalDescription: "",
          chapterJoined: chapterNumber,
          formattedDescription: "An enemy unit[X]",
          csvData: {
            name: "Soldier",
            nameTextPointer: getNameText("Soldier"),
            descriptionTextPointer: getDescText("Soldier"),
            characterNumber: "Soldier",
            defaultClass: "0x0",
            portrait: "0x0",
            isGeneric: true,
            affinity: "NoAff",
            baseLevel: 1,
            baseHP: 5,
            basePwr: 3,
            baseMagic: 1,
            baseSkl: 3,
            baseSpd: 2,
            baseDef: 3,
            baseRes: 2,
            baseLck: 5,
            baseCon: 1,
            hpGrowth: 75,
            pwrGrowth: 30,
            magicGrowth: 10,
            sklGrowth: 20,
            spdGrowth: 25,
            defGrowth: 10,
            resGrowth: 20,
            lckGrowth: 0,
          },
        },
      ];

      return {
        chapterId,
        displayName: `${getChapterNumberDisplayText(
          chapterNumber
        )}: ${thisChapterTitle}`,
        number: chapterNumber,
        chapterDataForCsv,
        chapterEvent,
        chapterMap: chapterMap,
        genericCharacters,
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

