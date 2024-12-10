import { MapLocation } from "@/types/map-location.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import z from "zod";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";

interface GenerateGenericUnitCoordsParams {
  genericStartingAreas: {
    area: MapArea;
    unitTypes: string[];
  }[];
  areaNameToAreaTerrain: Record<string, MapLocation[]>;
  battleOverview: string;
}

export default async function generateGenericUnitCoords({
  areaNameToAreaTerrain,
  genericStartingAreas,
  battleOverview,
}: GenerateGenericUnitCoordsParams) {
  const systemMessage = `You are choosing the starting generic enemy positions for a Fire Emblem chapter.

Given the areas the generic characters should be, use the map data to determine the coordinates for each character on the map.

The genericStartingAreas will give you a general direction, but it's up to you to determine how many generic enemies and their coordinates.

## Guidelines for enemy placement

Unless they are flyers, enemies must NOT be placed on these types of tiles:
- Wall
- Sea
- Lake
- Water
- Thicket
- Peak
- Door
- Village Wall
- Castle Wall

## Unit Classes

You will be given the general type of unit. You must choose from this list for the specific class to use.

The following are the unit classes that can be placed on the map:

Mage
Shaman
Archer
Myrmidon
Mercenary
Cavalier
WyvernRider
Knight
Thief
Soldier
Priest
Journeyman
Pirate
Fighter
Cleric
Troubadour
PegasusKnight

For example, if the given unit type is "Infantry", you might choose two soldiers and a knight.

In your return value, include the terrain type of that tile and why you decided to put the character there.`;

  const { enemyAndCoords } = await generateStructuredData({
    systemMessage,
    prompt: `genericStartingAreas: ${JSON.stringify(
      genericStartingAreas,
      null,
      2
    )}\n\nareaNameToAreaTerrain: ${areaNameToAreaTerrain}\n\nareaNameToAreaTerrain: ${JSON.stringify(
      areaNameToAreaTerrain,
      null,
      2
    )}\n\nMap Areas: ${JSON.stringify(
      areaNameToAreaTerrain,
      null,
      2
    )}\n\nBattle Overview: ${battleOverview}`,
    schema: z.object({
      enemyAndCoords: z.array(
        z.object({
          characterClass: z.string(),
          xCoord: z.number(),
          yCoord: z.number(),
          terrain: z.string(),
          reasoning: z.string(),
        })
      ),
    }),
    model: "gpt-4o",
  });

  return enemyAndCoords.map((e) => ({
    characterClass: e.characterClass,
    xCoord: e.xCoord,
    yCoord: e.yCoord,
  }));
}

if (import.meta.main) {
  const params: GenerateGenericUnitCoordsParams = {
    genericStartingAreas: [
      {
        unitTypes: ["Infantry", "Mages"],
        area: {
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
      },
      {
        unitTypes: ["Cavalry", "Archers"],
        area: {
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
      },
      {
        unitTypes: ["Snipers", "Mages"],
        area: {
          name: "Southern Plains",
          description:
            "A region of plains with a lake and a bridge, leading to a village entrance.",
          coordinateArea: {
            from: {
              x: 0,
              y: 12,
            },
            to: {
              x: 18,
              y: 19,
            },
          },
        },
      },
    ],
    areaNameToAreaTerrain: {
      "Northern Desert": [
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
      "Southern Plains": [
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
    },
    battleOverview:
      "The battle unfolds in the mixed terrain of the Elderwood Thicket, where Zynra and Elysia must defend against the Chosen of Nihilus soldiers attempting to breach the sacred grove. The Northern Plains and Castle Wall area provides a strategic defensive position, allowing Zynra to utilize the castle walls for cover while engaging the enemy. The Central Cliffs and Forest area offers high ground and natural cover, which can be advantageous for ambushing the advancing foes. \n\nAs the battle progresses, Zynra and Elysia will need to navigate through the Western Village, where they can find refuge and resources to bolster their defenses. The Eastern Fort and Sea area serves as a stronghold for the Chosen, and Zynra must be cautious as she approaches this fortified position. \n\nUltimately, Zynra will confront Kieran in the heart of the battlefield, where the sigils' power is most concentrated. The terrain will play a crucial role in this final confrontation, as Zynra must harness the ancient sigils' true nature to thwart Kieran's ambitions and protect the grove from corruption.",
  };

  const res = await generateGenericUnitCoords(params);

  console.log("res", JSON.stringify(res, null, 2));
}

