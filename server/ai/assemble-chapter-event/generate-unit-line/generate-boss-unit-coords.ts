import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { igorCharacter } from "@/testData/test-characters.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";
import { MapArea } from "@/types/ai/MapAreas.ts";

const systemMessage = `You are choosing the starting boss character position for a Fire Emblem chapter.

Given the areas the character should be, use the map data to determine the coordinates for each character on the map.

## Guidelines for boss placement

Bosses should be placed on these types of tiles. This is an ordered list of priority:
1. Throne
2. Castle Gate
3. Fort Gate

If none of these tiles are available, place the boss on a tile that makes sense for a boss unit. It could be a tile like:
- Ruins
- Fort
- Forest

Or none of those. Do what makes the most sense for the chapter data.

Boss must NOT be placed on these types of tiles:
- Wall
- Sea
- Lake
- Water
- Thicket
- Peak
- Door
- Village Wall
- Castle Wall

In your return value, include the terrain type of that tile and why you decided to put the character there.
`;

export default async function generatePlayerUnitCoords({
  characters,
  mapArea,
}: {
  characters: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[];
  mapArea: MapArea;
}): Promise<
  {
    characterName: string;
    characterClass: string;
    xCoord: number;
    yCoord: number;
  }[]
> {
  const { characterNameAndCoords } = await generateStructuredData({
    systemMessage,
    prompt: `Characters: ${JSON.stringify(
      characters,
      null,
      2
    )}\n\nMap Area: ${JSON.stringify(mapArea, null, 2)}`,
    schema: z.object({
      characterNameAndCoords: z.array(
        z.object({
          characterName: z.string(),
          xCoord: z.number(),
          yCoord: z.number(),
          terrain: z.string(),
          reasoning: z.string(),
        })
      ),
    }),
    model: "gpt-4o",
  });
  console.log(
    "characterNameAndCoords",
    JSON.stringify(characterNameAndCoords, null, 2)
  );
  return characterNameAndCoords.map(({ characterName, xCoord, yCoord }) => {
    const character = characters.find((c) => c.characterName === characterName);
    if (!character) {
      throw new Error(`Character not found: ${characterName}`);
    }
    return {
      characterName: character.characterName,
      characterClass: character.characterClass,
      xCoord,
      yCoord,
    };
  });
}

if (import.meta.main) {
  const characters: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[] = [
    {
      characterName: "Igor",
      characterClass: igorCharacter.csvData.defaultClass,
      startingAllegiance: "enemy",
    },
  ];

  const bossStartingAreaName = "Fortified Areas";

  const res = await generatePlayerUnitCoords({
    characters,
    mapArea: {
      name: "Fortified Areas",
      description: "Regions containing forts and strategic points for defense.",
      coordinates: {
        from: {
          x: 8,
          y: 1,
        },
        to: {
          x: 12,
          y: 3,
        },
      },
      subAreas: [
        {
          name: "Northern Forts",
          description: "The northern forts located at (11, 1) and (11, 3).",
          centerCoordinate: {
            x: 11,
            y: 2,
          },
        },
        {
          name: "Central Fort",
          description: "The central fort located at (12, 8).",
          centerCoordinate: {
            x: 12,
            y: 8,
          },
        },
        {
          name: "Southern Fort",
          description: "The southern fort located at (8, 9).",
          centerCoordinate: {
            x: 8,
            y: 9,
          },
        },
      ],
    },
  });
  console.log(JSON.stringify(res, null, 2));
}

