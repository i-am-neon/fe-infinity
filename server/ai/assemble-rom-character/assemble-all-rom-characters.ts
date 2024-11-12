import { RomCharacter } from "@/types/RomCharacter.ts";
import getAllCharacterIdeasWithChapterJoinedAndIsLord from "@/ai/get-all-character-ideas-with-chapter-joined.ts";
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
  const allCharacterIdeasWithChapterJoinedAndIsLord =
    getAllCharacterIdeasWithChapterJoinedAndIsLord({
      storyArc,
      mainCharacterIdea,
    });

  const [
    allCharacterIdeasWithChapterJoinedAndClassAndIsLord,
    allCharacterIdeasAndPortraitsAndChapterJoined,
  ] = await Promise.all([
    Promise.all(
      allCharacterIdeasWithChapterJoinedAndIsLord.map(
        async ({ idea, chapterJoined, isLord }) => {
          const characterClass = await generateCharacterClass({
            characterIdea: idea,
          });
          return {
            characterIdea: idea,
            characterClass,
            chapterJoined,
            isLord,
          };
        }
      )
    ),
    assignAllCharacterPortraits({
      allCharacterIdeasWithChapterJoined:
        allCharacterIdeasWithChapterJoinedAndIsLord,
    }),
  ]);

  const allCharacterIdeasWithChapterJoinedAndClassAndIsLordAndPortraits =
    allCharacterIdeasWithChapterJoinedAndClassAndIsLord.map(
      ({ characterIdea, characterClass, chapterJoined, isLord }) => {
        const portrait = allCharacterIdeasAndPortraitsAndChapterJoined.find(
          (c) => c.characterIdea === characterIdea
        )!.portrait;
        return {
          characterIdea,
          characterClass,
          portrait,
          chapterJoined,
          isLord,
        };
      }
    );

  const romCharacterPromises =
    allCharacterIdeasWithChapterJoinedAndClassAndIsLordAndPortraits.map(
      ({ characterIdea, characterClass, portrait, chapterJoined, isLord }) =>
        assembleRomCharacter({
          characterIdea,
          characterClass,
          portraitMetadata: portrait,
          chapterJoined,
          isLord,
        })
    );
  return await Promise.all(romCharacterPromises);
}

