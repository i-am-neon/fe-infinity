import { CharacterIdeaWithChapterJoinedAndClassAndPortrait } from "@/ai/assemble-chapter-event/assemble-chapter-event.ts";
import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";

export default async function getUnitsArray(
  characters: CharacterIdeaWithChapterJoinedAndClassAndPortrait[]
): Promise<string[]> {
  return await Promise.all(
    characters.map(async (c) => {
      return await generateUnitLine(c);
    })
  );
}

