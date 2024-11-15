import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import generateUnitCoords from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-coords.ts";

export default async function getUnitsArray({
  characters,
  map,
  chapterData,
}: {
  characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
  }[];
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}): Promise<string[]> {
  const charactersWithCoords = await generateUnitCoords({
    characters,
    map,
    chapterData,
  });

  return await Promise.all(
    charactersWithCoords.map(async (c) => {
      return await generateUnitLine(c);
    })
  );
}

