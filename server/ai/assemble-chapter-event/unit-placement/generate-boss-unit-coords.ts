import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { igorCharacter } from "@/testData/test-characters.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import { z } from "zod";

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
}: {
  boss: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  };
  mapArea: MapArea;
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
    )}\n\nMap Area: ${JSON.stringify(mapArea, null, 2)}`,
    schema: z.object({
      bossCoords: z.object({
        xCoord: z.number(),
        yCoord: z.number(),
        terrain: z.string(),
        reasoning: z.string(),
      }),
    }),
    model: "gpt-4o",
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
  });
  console.log(JSON.stringify(res, null, 2));
}

