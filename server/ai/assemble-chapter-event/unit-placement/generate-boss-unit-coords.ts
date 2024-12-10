import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { igorCharacter } from "@/testData/test-characters.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import { z } from "zod";
import { MapLocation } from "@/types/map-location.ts";

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

export default async function generateBossUnitCoords({
  boss,
  mapArea,
  areaTerrain,
}: {
  boss: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  };
  mapArea: MapArea;
  areaTerrain: MapLocation[];
}): Promise<{
  characterName: string;
  characterClass: string;
  xCoord: number;
  yCoord: number;
}> {
  const { bossCoords } = await generateStructuredData({
    systemMessage,
    prompt: `boss: ${JSON.stringify(
      boss,
      null,
      2
    )}\n\nMap Area: ${JSON.stringify(
      mapArea,
      null,
      2
    )}\n\nArea Terrain: ${JSON.stringify(areaTerrain, null, 2)}`,
    schema: z.object({
      bossCoords: z.object({
        xCoord: z.number(),
        yCoord: z.number(),
        terrain: z.string(),
        reasoning: z.string(),
      }),
    }),
  });

  return {
    characterName: boss.characterName,
    characterClass: boss.characterClass,
    xCoord: bossCoords.xCoord,
    yCoord: bossCoords.yCoord,
  };
}

if (import.meta.main) {
  const boss: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  } = {
    characterName: "Igor",
    characterClass: igorCharacter.csvData.defaultClass,
    startingAllegiance: "enemy",
  };
  const res = await generateBossUnitCoords({
    boss,
    mapArea: {
      name: "Southern Plains",
      description:
        "A region with plains and a lake, bordered by village walls and a bridge.",
      coordinateArea: {
        from: {
          x: 0,
          y: 11,
        },
        to: {
          x: 18,
          y: 15,
        },
      },
    },
    areaTerrain: [
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "House",
        x: 7,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 12,
      },
      {
        terrain: "Lake",
        x: 0,
        y: 13,
      },
      {
        terrain: "Lake",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 13,
      },
      {
        terrain: "--",
        x: 17,
        y: 13,
      },
      {
        terrain: "--",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Lake",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 14,
      },
      {
        terrain: "--",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Lake",
        x: 1,
        y: 15,
      },
      {
        terrain: "Lake",
        x: 2,
        y: 15,
      },
      {
        terrain: "Bridge",
        x: 3,
        y: 15,
      },
      {
        terrain: "Bridge",
        x: 4,
        y: 15,
      },
      {
        terrain: "Lake",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 15,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 15,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 15,
      },
      {
        terrain: "--",
        x: 18,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Lake",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 16,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 17,
      },
      {
        terrain: "Lake",
        x: 5,
        y: 17,
      },
      {
        terrain: "Lake",
        x: 6,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 17,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 18,
      },
      {
        terrain: "Village Entrance",
        x: 1,
        y: 18,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 18,
      },
      {
        terrain: "Lake",
        x: 6,
        y: 18,
      },
      {
        terrain: "Lake",
        x: 7,
        y: 18,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 18,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 18,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 18,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 18,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 18,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 19,
      },
      {
        terrain: "Lake",
        x: 7,
        y: 19,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 19,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 19,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 19,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 19,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 19,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 19,
      },
    ],
  });
  console.log(JSON.stringify(res, null, 2));
}

