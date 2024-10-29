import assembleChapterEvent from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import assembleRomCharacter from "@/ai/assemble-rom-character/assemble-rom-character.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";
import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { assignMultiplePortraits } from "@/ai/portraits/assign-multiple-portraits.ts";
import { allPortraitOptions, worldIdeaExample } from "@/testData/ai.ts";
import { TEST_CHAPTER } from "@/testData/test-data.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { RomChapter } from "@/types/RomChapter.ts";
import choosePortrait from "./portraits/choose-portrait.ts";

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

  const allCharacterIdeasWithChapterJoined: {
    idea: CharacterIdea;
    chapterJoined: number;
  }[] = [];
  storyArc.chapterIdeas.forEach((chapterIdea, chapterIndex) => {
    (chapterIdea.newPlayableCharacters || []).forEach((characterIdea) => {
      allCharacterIdeasWithChapterJoined.push({
        idea: characterIdea,
        chapterJoined: chapterIndex,
      });
    });
    allCharacterIdeasWithChapterJoined.push({
      idea: chapterIdea.boss,
      chapterJoined: chapterIndex,
    });
  });
  allCharacterIdeasWithChapterJoined.push({
    idea: mainCharacterIdea,
    chapterJoined: 0,
  });

  const remainingPortraitOptions = allPortraitOptions.filter(
    (p) => p.originalImageName !== mainCharacterChosenPortrait.originalImageName
  );

  // TODO: could speed up assigning portraits by separating streams by gender and age and running those in parallel, only feeding in filtered options from the appropriate gender and age
  const [allCharacterIdeasAndPortraits, mainRomCharacter] = await Promise.all([
    assignMultiplePortraits({
      portraitOptions: remainingPortraitOptions,
      characterIdeas: allCharacterIdeasWithChapterJoined.map((c) => c.idea),
    }),
    assembleRomCharacter({
      characterIdea: mainCharacterIdea,
      portraitMetadata: mainCharacterChosenPortrait,
      chapterJoined: 0,
    }),
  ]);

  // Map each character idea with corresponding portrait metadata and run in parallel
  const romCharacterPromises = allCharacterIdeasAndPortraits.map(
    ({ characterIdea, portrait }) =>
      assembleRomCharacter({
        characterIdea: characterIdea,
        portraitMetadata: portrait,
        chapterJoined: allCharacterIdeasWithChapterJoined.find(
          (c) => c.idea === characterIdea
        )!.chapterJoined,
      })
  );

  // Wait for all promises to resolve and return the results
  const romCharacters = await Promise.all(romCharacterPromises);
  const allRomCharacters = [mainRomCharacter, ...romCharacters];

  // TODO: put this in a loop to do over multiple chapters
  const chapterNumberToAssemble = 0;
  const chapterEvent = await assembleChapterEvent({
    storyArc,
    chapterNumberToAssemble: chapterNumberToAssemble,
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

