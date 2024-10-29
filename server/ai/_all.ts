import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { allPortraitOptions, worldIdeaExample } from "@/testData/ai.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import choosePortrait from "./portraits/choose-portrait.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";
import type { RomChapter } from "@/types/RomChapter.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";
import { assignMultiplePortraits } from "@/ai/portraits/assign-multiple-portraits.ts";
import assembleRomCharacter from "@/ai/assemble-rom-character/assemble-rom-character.ts";
import assembleChapterEvent from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import { TEST_CHAPTER } from "@/testData/test-data.ts";

export default async function allAI({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<RomChapter[]> {
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const [mainCharacterChosenPortrait, storyArc] = await Promise.all([
    choosePortrait({
      portraitOptions: allPortraitOptions,
      characterIdea: mainCharacterIdea,
    }),
    generateStoryArc({
      worldSummary,
      mainCharacterIdea,
      numberOfChapters: 1,
    }),
  ]);

  const allCharacterIdeas = storyArc.chapterIdeas
    .map((chapterIdea) => [
      ...(chapterIdea.newPlayableCharacters || []),
      chapterIdea.boss,
    ])
    .flat();

  const remainingPortraitOptions = allPortraitOptions.filter(
    (p) => p.originalImageName !== mainCharacterChosenPortrait.originalImageName
  );

  // TODO: could speed up assigning portraits by separating streams by gender and age and running those in parallel, only feeding in filtered options from the appropriate gender and age
  const [allCharacterPortraits, mainRomCharacter] = await Promise.all([
    assignMultiplePortraits({
      portraitOptions: remainingPortraitOptions,
      characterIdeas: allCharacterIdeas,
    }),
    assembleRomCharacter({
      characterIdea: mainCharacterIdea,
      portraitMetadata: mainCharacterChosenPortrait,
    }),
  ]);

  // Map each character idea with corresponding portrait metadata and run in parallel
  const romCharacterPromises = allCharacterPortraits.map(
    ({ character, portrait }) =>
      assembleRomCharacter({
        characterIdea: character,
        portraitMetadata: portrait,
      })
  );

  // Wait for all promises to resolve and return the results
  const romCharacters = await Promise.all(romCharacterPromises);
  const allRomCharacters = [mainRomCharacter, ...romCharacters];

  // TODO: put this in a loop to do over multiple chapters
  const chapterEvent = await assembleChapterEvent({
    storyArc,
    chapterNumberToAssemble: 0,
    existingPartyCharacters: [mainCharacterIdea],
    allRomCharacters,
  });

  const romChapter: RomChapter = {
    name: "Prologue",
    chapterDataForCsv: TEST_CHAPTER.chapterDataForCsv,
    chapterEvent,
    chapterMap: TEST_CHAPTER.chapterMap,
    characters: allRomCharacters,
    genericCharacters: [],
  };
  return [romChapter];
}

if (import.meta.main) {
  await allAI({ worldIdea: worldIdeaExample });
}

