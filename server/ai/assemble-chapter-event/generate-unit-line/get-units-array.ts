import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import generateUnitCoords from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-coords.ts";
import generateCharacterStartingAreas from "@/ai/assemble-chapter-event/generate-unit-line/generate-character-starting-areas.ts";

export default async function getUnitsArray({
  characters,
  map,
  chapterData,
}: {
  characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "enemy" | "npc";
  }[];
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}): Promise<string[]> {
  const characterStartingAreas = await generateCharacterStartingAreas({
    characters,
    map,
    chapterData,
  });

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

