import generateCharacterStartingAreas from "@/ai/assemble-chapter-event/generate-unit-line/generate-character-starting-areas.ts";
import generateGenericStartingAreas from "@/ai/assemble-chapter-event/generate-unit-line/generate-generic-starting-areas.ts";
import generateUnitCoords from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-coords.ts";
import generateUnitLine from "@/ai/assemble-chapter-event/generate-unit-line/generate-unit-line.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

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

  const genericStartingAreas = await generateGenericStartingAreas({
    characterStartingAreas,
    map,
    chapterData,
  });

  const charactersWithCoords = await generateUnitCoords({
    characters: characters.map((c) => ({
      characterName: c.characterIdea.name,
      characterClass: c.characterClass,
      startingAllegiance: c.startingAllegiance,
    })),
    map,
    chapterData,
    characterStartingAreas,
  });

  // NEXT: implement generateGenericUnitCoords, then call generateUnitLine on each.

  return await Promise.all(
    charactersWithCoords.map(async (c) => {
      return await generateUnitLine({
        characterIdea: characters.find(
          (char) => char.characterIdea.name === c.characterName
        )?.characterIdea!,
        characterClass: c.characterClass,
        xCoord: c.xCoord,
        yCoord: c.yCoord,
      });
    })
  );
}

