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
import generateCharacterClass from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-class.ts";

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

  const [
    allCharacterIdeasWithChapterJoinedAndClass,
    allCharacterIdeasAndPortraitsAndChapterJoined,
  ] = await Promise.all([
    Promise.all(
      allCharacterIdeasWithChapterJoined.map(async ({ idea }) => {
        const characterClass = await generateCharacterClass({
          characterIdea: idea,
        });
        return {
          characterIdea: idea,
          characterClass,
        };
      })
    ),
    assignAllCharacterPortraits({ allCharacterIdeasWithChapterJoined }),
  ]);

  const allCharacterIdeasWithChapterJoinedAndClassAndPortraits =
    allCharacterIdeasWithChapterJoinedAndClass.map(
      ({ characterIdea, characterClass }) => {
        const portrait = allCharacterIdeasAndPortraitsAndChapterJoined.find(
          (c) => c.characterIdea === characterIdea
        )!.portrait;
        const chapterJoined =
          allCharacterIdeasAndPortraitsAndChapterJoined.find(
            (c) => c.characterIdea === characterIdea
          )!.chapterJoined;
        return { characterIdea, characterClass, portrait, chapterJoined };
      }
    );

  const romCharacterPromises =
    allCharacterIdeasWithChapterJoinedAndClassAndPortraits.map(
      ({ characterIdea, characterClass, portrait, chapterJoined }) =>
        assembleRomCharacter({
          characterIdea,
          characterClass,
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
    existingPartyCharacters:
      allCharacterIdeasWithChapterJoinedAndClassAndPortraits.filter(
        (c) => c.chapterJoined < chapterNumberToAssemble
      ),
    newPlayableCharacters:
      allCharacterIdeasWithChapterJoinedAndClassAndPortraits.filter(
        (c) =>
          c.chapterJoined === chapterNumberToAssemble &&
          c.characterIdea.firstSeenAs !== "boss"
      ),
    boss: allCharacterIdeasWithChapterJoinedAndClassAndPortraits.find(
      (c) =>
        c.chapterJoined === chapterNumberToAssemble &&
        c.characterIdea.firstSeenAs === "boss"
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

