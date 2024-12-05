import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import {
  ligmaCharacter,
  seraphinaCharacter,
} from "@/testData/test-characters.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";
import { MapArea } from "@/types/ai/MapAreas.ts";

const systemMessage = `You are choosing the starting allied character positions for a Fire Emblem chapter.

Given the areas the character should be, use the map data to determine the coordinates for each character on the map.

## Guidelines for ally placement

Allies should be placed at least diagonal from one another or have one tile between them.

Allies must NOT be placed on these types of tiles:
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
    )}\\n\nMap Area: ${JSON.stringify(mapArea, null, 2)}`,
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
      characterName: "Seraphina",
      characterClass: seraphinaCharacter.csvData.defaultClass,
      startingAllegiance: "ally",
    },
    {
      characterName: "Ligma",
      characterClass: ligmaCharacter.csvData.defaultClass,
      startingAllegiance: "ally",
    },
  ];

  const res = await generatePlayerUnitCoords({
    characters,
    mapArea: {
      name: "Village Area",
      description:
        "A small area containing a village with houses and a vendor.",
      coordinates: {
        from: {
          x: 1,
          y: 8,
        },
        to: {
          x: 12,
          y: 18,
        },
      },
      subAreas: [
        {
          name: "Village Entrance",
          description: "The entrance to the village, marked by a village wall.",
          centerCoordinate: {
            x: 1,
            y: 18,
          },
        },
        {
          name: "Vendor Area",
          description: "The area where the vendor is located.",
          centerCoordinate: {
            x: 6,
            y: 11,
          },
        },
        {
          name: "House Area",
          description: "The area containing houses.",
          centerCoordinate: {
            x: 7,
            y: 12,
          },
        },
      ],
    },
  });
  console.log(JSON.stringify(res, null, 2));
}

