import { RomCharacter } from "@/types/RomCharacter.ts";
import getAllCharacterIdeasWithChapterJoined from "@/ai/get-all-character-ideas-with-chapter-joined.ts";
import assignAllCharacterPortraits from "@/ai/portraits/assign-all-character-portraits.ts";
import generateCharacterClass from "@/ai/assemble-rom-character/assemble-character-csv-data/generate-character-class.ts";
import assembleRomCharacter from "@/ai/assemble-rom-character/assemble-rom-character.ts";
import { StoryArc } from "@/types/ai/StoryArc.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export default async function assembleAllRomCharacters({
  storyArc,
  mainCharacterIdea,
}: {
  storyArc: StoryArc;
  mainCharacterIdea: CharacterIdea;
}): Promise<RomCharacter[]> {
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
  return await Promise.all(romCharacterPromises);
}

