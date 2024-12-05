import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { igorCharacter, liraCharacter } from "@/testData/test-characters.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import { z } from "zod";

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

export default async function generatePlayerUnitCoords({
  characters,
  npcStartingAreaNames,
  mapAreas,
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
    )}\n\nCharacter Starting Area: ${npcStartingAreaNames}\\n\nMap Areas: ${JSON.stringify(
      mapAreas,
      null,
      2
    )}`,
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
      areaName: "Fortified Areas",
    },
  ];

  const res = await generatePlayerUnitCoords({
    characters,
    npcStartingAreaNames,
    // chapterData,
    mapAreas: [
      {
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
            description:
              "The entrance to the village, marked by a village wall.",
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
      {
        name: "Fortified Areas",
        description:
          "Regions containing forts and strategic points for defense.",
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
    ],
  });
  console.log(JSON.stringify(res, null, 2));
}

