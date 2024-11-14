import "jsr:@std/dotenv/load";
import mapNameToData, { MapData } from "@/map-processing/map-name-to-data.ts";
import { generateObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";

const systemMessage = `You are an expert in Fire Emblem map design and analysis. Given a terrain grid and a description of the map, your task is to divide the map into Areas and Sub-Areas. Each Area is a larger, distinct section of the map (e.g., a building, an outdoor field), while Sub-Areas are smaller, specific regions within each Area (e.g., a treasure room, a corridor).

Follow these steps:
	1.	Analyze the Map: Review the grid and identify distinct features or thematic sections (e.g., indoor sections, outdoor sections, pathways).
	2.	Define Areas: Create Areas based on these features (e.g., Northern Building, Western Wing, Southern Plains, Treasure Room, Hallway leading to Throne Room, Beach, etc). Each map typically has three or more areas. Assume the top of the map is the north, the bottom is the south, the left is the west, and the right is the east.
	3.	List Coordinates: For each Sub-Area, provide a list of (x, y) coordinates that it encompasses. Assume the top-left corner of the grid is (0, 0).`;

export default async function defineMapAreas(mapData: MapData) {
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
    // maxTokens: 512,
    schema: z.object({
      areas: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          coordinates: z.array(
            z.object({
              x: z.number(),
              y: z.number(),
            })
          ),
        })
      ),
    }),
  });

  return object;
}

if (import.meta.main) {
  const res = await defineMapAreas(mapNameToData["Knights10"]);
  console.log("res", JSON.stringify(res, null, 2));
}

