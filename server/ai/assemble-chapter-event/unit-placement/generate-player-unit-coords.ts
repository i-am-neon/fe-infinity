import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import { z } from "zod";
import { MapLocation } from "@/types/map-location.ts";

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
  numberOfCharacters,
  mapArea,
  areaTerrain,
}: {
  numberOfCharacters: number;
  mapArea: MapArea;
  areaTerrain: MapLocation[];
}): Promise<
  {
    xCoord: number;
    yCoord: number;
  }[]
> {
  const { characterCoords } = await generateStructuredData({
    systemMessage,
    prompt: `Number of Characters: ${numberOfCharacters}\n\nMap Area: ${JSON.stringify(
      mapArea,
      null,
      2
    )}\n\nArea Terrain: ${JSON.stringify(areaTerrain, null, 2)}`,
    schema: z.object({
      characterCoords: z.array(
        z.object({
          xCoord: z.number(),
          yCoord: z.number(),
          terrain: z.string(),
          reasoning: z.string(),
        })
      ),
    }),
    model: "gpt-4o",
  });

  console.log("characterCoords :>> ", characterCoords);
  return characterCoords.map((coord) => ({
    xCoord: coord.xCoord,
    yCoord: coord.yCoord,
  }));
}

if (import.meta.main) {
  const res = await generatePlayerUnitCoords({
    numberOfCharacters: 6,
    mapArea: {
      name: "Northern Desert",
      description:
        "A vast desert area with scattered cliffs and a fort, providing strategic defense points.",
      coordinateArea: {
        from: {
          x: 0,
          y: 0,
        },
        to: {
          x: 18,
          y: 5,
        },
      },
    },
    areaTerrain: [
      {
        terrain: "Desert",
        x: 0,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 0,
      },
      {
        terrain: "--",
        x: 2,
        y: 0,
      },
      {
        terrain: "--",
        x: 3,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 7,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 0,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 2,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 8,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 9,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 1,
      },
      {
        terrain: "Fort",
        x: 11,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 2,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 2,
      },
      {
        terrain: "--",
        x: 7,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 8,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 9,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 0,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 2,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 3,
      },
      {
        terrain: "--",
        x: 7,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 8,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 9,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 3,
      },
      {
        terrain: "Fort",
        x: 11,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 3,
      },
      {
        terrain: "--",
        x: 0,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 2,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 4,
      },
      {
        terrain: "--",
        x: 7,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 8,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 9,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 4,
      },
      {
        terrain: "Desert",
        x: 0,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 2,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 7,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 8,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 9,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 10,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 5,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 5,
      },
    ],
  });
  console.log(JSON.stringify(res, null, 2));
}

