import assembleChapterEvent from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import assembleRomCharacter from "@/ai/assemble-rom-character/assemble-rom-character.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";
import generateWorldSummary from "@/ai/generate-world-summary.ts";
import assignAllCharacterPortraits from "@/ai/portraits/assign-all-character-portraits.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import { TEST_CHAPTER } from "@/testData/test-data.ts";
import type { RomChapter } from "@/types/RomChapter.ts";
import getAllCharacterIdeasWithChapterJoined from "@/ai/get-all-character-ideas-with-chapter-joined.ts";

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

  const allCharacterIdeasWithChapterJoined =
    getAllCharacterIdeasWithChapterJoined({
      storyArc,
      mainCharacterIdea,
    });

  // Technically choosing the portraits and creating RomCharacters can be done at the same time as each chapter event gets generated.
  // So a TODO is make the chapter event generation not need a RomCharacter (a simpler object will do) and run in parallel
  // WAIT actually the chapter event generation needs to know the character's class which is only created in the CSV right now.
  // TODO: choose character's class before generating CSV
  const allCharacterIdeasAndPortraitsAndChapterJoined =
    await assignAllCharacterPortraits({ allCharacterIdeasWithChapterJoined });

  const romCharacterPromises =
    allCharacterIdeasAndPortraitsAndChapterJoined.map(
      ({ characterIdea, portrait, chapterJoined }) =>
        assembleRomCharacter({
          characterIdea: characterIdea,
          portraitMetadata: portrait,
          chapterJoined,
        })
    );
  const allRomCharacters = await Promise.all(romCharacterPromises);

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

