import mapNameToData, { MapData } from "@/map-processing/map-name-to-data.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { z } from "zod";

const systemMessage = `You are an expert in Fire Emblem map design and analysis. Given a terrain grid and a description of the map, your task is to divide the map into Areas and Sub-Areas. Each Area is a larger, distinct section of the map (e.g., a building, an outdoor field), while Sub-Areas are smaller, specific regions within each Area (e.g., a treasure room, a corridor).

Follow these steps:
	1.	Analyze the Map: Review the grid and identify distinct features or thematic sections (e.g., indoor sections, outdoor sections, pathways).
	2.	Define Areas: Create broad Areas based on these features (e.g., Northern Building, Western Wing, Southern Plains).
	3.	Create Sub-Areas: Within each Area, define smaller Sub-Areas that correspond to specific rooms, paths, or key locations (e.g., Throne Room, Treasure Room, Corridor).
	4.	List Coordinates: For each Sub-Area, provide a list of (x, y) coordinates that it encompasses. Assume the top-left corner of the grid is (0, 0).
	5.	Return Structured Output: Format your response in a structured format with clear hierarchies: Area -> Sub-Areas -> Coordinates.`;

export default async function defineMapAreas(mapData: MapData) {
  const { areas } = await generateStructuredData({
    systemMessage,
    prompt: JSON.stringify(mapData, null, 2),
    schema: z.object({
      areas: z.array(
        z.object({
          name: z.string(),
          subAreas: z.array(
            z.object({
              name: z.string(),
              coordinates: z.array(
                z.object({
                  x: z.number(),
                  y: z.number(),
                })
              ),
            })
          ),
        })
      ),
    }),
  });

  return areas;
}

if (import.meta.main) {
  const res = await defineMapAreas(mapNameToData["Knights10"]);
  console.log("res", JSON.stringify(res, null, 2));
}
