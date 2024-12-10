import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { igorCharacter, liraCharacter } from "@/testData/test-characters.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import { z } from "zod";
import { MapLocation } from "@/types/map-location.ts";

const systemMessage = `You are choosing the starting allied character positions for a Fire Emblem chapter.

Given the areas the character should be, use the map data to determine the coordinates for each character on the map.

"startingAllegiance" property should be handled as such:
"npc" means they start as a green character and can be recruited.
"enemy" means they start as an enemy unit and they can be recruited.

You must include all characters in the return value.

## Guidelines for NPC placement

NPCs must NOT be placed on these types of tiles:
- Wall
- Sea
- Lake
- Water
- Thicket
- Peak
- Door
- Village Wall
- Castle Wall

In your return value, include the terrain type of that tile and why you decided to put the character there.`;

export default async function generateNpcUnitCoords({
  characters,
  npcStartingAreaNames,
  mapAreas,
  areaNameToAreaTerrain,
}: {
  characters: {
    characterName: string;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[];
  npcStartingAreaNames: {
    characterName: string;
    areaName: string;
  }[];
  mapAreas: MapArea[];
  areaNameToAreaTerrain: Record<string, MapLocation[]>;
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
    )}\n\nCharacter Starting Area: ${npcStartingAreaNames}\n\nMap Areas: ${JSON.stringify(
      mapAreas,
      null,
      2
    )}\n\nMap Areas: ${JSON.stringify(areaNameToAreaTerrain, null, 2)}`,
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
      characterName: "Lira",
      characterClass: liraCharacter.csvData.defaultClass,
      startingAllegiance: "npc",
    },
    {
      characterName: "Igor",
      characterClass: igorCharacter.csvData.defaultClass,
      startingAllegiance: "enemy",
    },
  ];

  const npcStartingAreaNames = [
    {
      characterName: "Lira",
      areaName: "Village Area",
    },
    {
      characterName: "Igor",
      areaName: "Central Desert",
    },
  ];

  const res = await generateNpcUnitCoords({
    characters,
    npcStartingAreaNames,
    mapAreas: [
      {
        name: "Village Area",
        description:
          "A small village with walls and a house, providing a safe haven and strategic point.",
        coordinateArea: {
          from: {
            x: 0,
            y: 16,
          },
          to: {
            x: 2,
            y: 18,
          },
        },
      },
      {
        name: "Central Desert",
        description:
          "An open desert area with a mix of sand and desert terrain, featuring a fort and a vendor.",
        coordinateArea: {
          from: {
            x: 0,
            y: 6,
          },
          to: {
            x: 18,
            y: 11,
          },
        },
      },
    ],
    areaNameToAreaTerrain: {
      "Village Area": [
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
      ],
      "Central Desert": [
        {
          terrain: "Sand",
          x: 0,
          y: 6,
        },
        {
          terrain: "Sand",
          x: 1,
          y: 6,
        },
        {
          terrain: "Sand",
          x: 2,
          y: 6,
        },
        {
          terrain: "Sand",
          x: 3,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 4,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 5,
          y: 6,
        },
        {
          terrain: "Sand",
          x: 6,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 7,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 8,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 9,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 10,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 11,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 12,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 13,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 14,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 6,
        },
        {
          terrain: "Cliff",
          x: 16,
          y: 6,
        },
        {
          terrain: "Cliff",
          x: 17,
          y: 6,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 6,
        },
        {
          terrain: "Wall",
          x: 0,
          y: 7,
        },
        {
          terrain: "Wall",
          x: 1,
          y: 7,
        },
        {
          terrain: "Wall",
          x: 2,
          y: 7,
        },
        {
          terrain: "Wall",
          x: 3,
          y: 7,
        },
        {
          terrain: "Sand",
          x: 4,
          y: 7,
        },
        {
          terrain: "Sand",
          x: 5,
          y: 7,
        },
        {
          terrain: "Sand",
          x: 6,
          y: 7,
        },
        {
          terrain: "Forest",
          x: 7,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 8,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 9,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 10,
          y: 7,
        },
        {
          terrain: "Cliff",
          x: 11,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 12,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 13,
          y: 7,
        },
        {
          terrain: "Cliff",
          x: 14,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 16,
          y: 7,
        },
        {
          terrain: "Cliff",
          x: 17,
          y: 7,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 7,
        },
        {
          terrain: "Road",
          x: 0,
          y: 8,
        },
        {
          terrain: "House",
          x: 1,
          y: 8,
        },
        {
          terrain: "Road",
          x: 2,
          y: 8,
        },
        {
          terrain: "Wall",
          x: 3,
          y: 8,
        },
        {
          terrain: "Wall",
          x: 4,
          y: 8,
        },
        {
          terrain: "Wall",
          x: 5,
          y: 8,
        },
        {
          terrain: "Road",
          x: 6,
          y: 8,
        },
        {
          terrain: "Sand",
          x: 7,
          y: 8,
        },
        {
          terrain: "Sand",
          x: 8,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 9,
          y: 8,
        },
        {
          terrain: "Cliff",
          x: 10,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 11,
          y: 8,
        },
        {
          terrain: "Fort",
          x: 12,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 13,
          y: 8,
        },
        {
          terrain: "Cliff",
          x: 14,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 16,
          y: 8,
        },
        {
          terrain: "Cliff",
          x: 17,
          y: 8,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 8,
        },
        {
          terrain: "Road",
          x: 0,
          y: 9,
        },
        {
          terrain: "Road",
          x: 1,
          y: 9,
        },
        {
          terrain: "Road",
          x: 2,
          y: 9,
        },
        {
          terrain: "Plains",
          x: 3,
          y: 9,
        },
        {
          terrain: "Plains",
          x: 4,
          y: 9,
        },
        {
          terrain: "Plains",
          x: 5,
          y: 9,
        },
        {
          terrain: "Road",
          x: 6,
          y: 9,
        },
        {
          terrain: "Sand",
          x: 7,
          y: 9,
        },
        {
          terrain: "Fort",
          x: 8,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 9,
          y: 9,
        },
        {
          terrain: "Cliff",
          x: 10,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 11,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 12,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 13,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 14,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 16,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 17,
          y: 9,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 9,
        },
        {
          terrain: "Armory",
          x: 0,
          y: 10,
        },
        {
          terrain: "Road",
          x: 1,
          y: 10,
        },
        {
          terrain: "Plains",
          x: 2,
          y: 10,
        },
        {
          terrain: "Plains",
          x: 3,
          y: 10,
        },
        {
          terrain: "Plains",
          x: 4,
          y: 10,
        },
        {
          terrain: "Plains",
          x: 5,
          y: 10,
        },
        {
          terrain: "Road",
          x: 6,
          y: 10,
        },
        {
          terrain: "Sand",
          x: 7,
          y: 10,
        },
        {
          terrain: "Sand",
          x: 8,
          y: 10,
        },
        {
          terrain: "Sand",
          x: 9,
          y: 10,
        },
        {
          terrain: "Desert",
          x: 10,
          y: 10,
        },
        {
          terrain: "Cliff",
          x: 11,
          y: 10,
        },
        {
          terrain: "Cliff",
          x: 12,
          y: 10,
        },
        {
          terrain: "Cliff",
          x: 13,
          y: 10,
        },
        {
          terrain: "Desert",
          x: 14,
          y: 10,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 10,
        },
        {
          terrain: "Cliff",
          x: 16,
          y: 10,
        },
        {
          terrain: "Desert",
          x: 17,
          y: 10,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 10,
        },
        {
          terrain: "Plains",
          x: 0,
          y: 11,
        },
        {
          terrain: "Plains",
          x: 1,
          y: 11,
        },
        {
          terrain: "Plains",
          x: 2,
          y: 11,
        },
        {
          terrain: "Plains",
          x: 3,
          y: 11,
        },
        {
          terrain: "Plains",
          x: 4,
          y: 11,
        },
        {
          terrain: "Sand",
          x: 5,
          y: 11,
        },
        {
          terrain: "Vendor",
          x: 6,
          y: 11,
        },
        {
          terrain: "Road",
          x: 7,
          y: 11,
        },
        {
          terrain: "Wall",
          x: 8,
          y: 11,
        },
        {
          terrain: "Sand",
          x: 9,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 10,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 11,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 12,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 13,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 14,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 15,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 16,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 17,
          y: 11,
        },
        {
          terrain: "Desert",
          x: 18,
          y: 11,
        },
      ],
    },
  });
  console.log(JSON.stringify(res, null, 2));
}

