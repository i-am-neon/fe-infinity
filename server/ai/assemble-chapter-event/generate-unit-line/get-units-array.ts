import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export default async function getUnitsArray(
  characters: { characterIdea: CharacterIdea; characterClass: string }[]
): Promise<string[]> {
  return await Promise.all(
    characters.map(async (c) => {
      return await generateUnitLine(c);
    })
  );
}

