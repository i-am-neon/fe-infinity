import "jsr:@std/dotenv/load";
import mapNameToData, { MapData } from "@/map-processing/map-name-to-data.ts";
import { generateObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";
import { MapArea, MapAreaSchema } from "@/types/ai/MapAreas.ts";

const systemMessage = `You are an expert in Fire Emblem map design and analysis. Given a terrain grid and a description of the map, your task is to divide the map into Areas and Sub-Areas. Each Area is a larger, distinct section of the map (e.g., a building, an outdoor field), while Sub-Areas are smaller, specific regions within each Area (e.g., a treasure room, a corridor).

Follow these steps:
 - Analyze the Map: Review the grid and identify distinct features or thematic sections (e.g., indoor sections, outdoor sections, pathways).
 - Define Areas: Create Areas based on these features (e.g., Northern Building, Western Wing, Southern Plains, Beach, Southeastern Forest, etc). Each map typically has three or more areas. Assume the top of the map is the north, the bottom is the south, the left is the west, and the right is the east.
 - Create Sub-Areas: Within each Area, define smaller Sub-Areas that correspond to specific rooms, paths, or key locations (e.g., Throne Room, Treasure Room, Corridor).
 - List Coordinates: For each Area, provide a range of (x, y) coordinates that it encompasses. Assume the top-left corner of the grid is (0, 0). As X increases, it moves more right on the map. As Y increases, it moves more down on the map.`;

export default async function defineMapAreas(
  mapData: MapData
): Promise<{ description: string; areas: MapArea[] }> {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    system: systemMessage,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: JSON.stringify(mapData, null, 2),
          },
          {
            type: "image",
            image: new URL(
              "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2010%20(3C%2000%20CE%203E).png?raw=true"
            ),
          },
        ],
      },
    ],
    schema: z.object({
      description: z
        .string()
        .describe("1 sentence text overview/Description of the map"),
      areas: z.array(MapAreaSchema),
    }),
  });

  return object;
}

if (import.meta.main) {
  const res = await defineMapAreas(mapNameToData["Knights10"]);
  console.log("res", JSON.stringify(res, null, 2));
}

