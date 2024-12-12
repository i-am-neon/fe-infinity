import "jsr:@std/dotenv/load";
import { generateObject } from "ai";
import { z } from "zod";
import { openai } from "@ai-sdk/openai";
import { MapArea, MapAreaSchema } from "@/types/ai/MapAreas.ts";
import { MapDataPreAI } from "@/map-processing/types/MapDataPreAI.ts";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const systemMessage = `You are an expert in Fire Emblem map design and analysis.
Given a terrain grid and a description of the map, your task is to divide the map into Areas.

Each Area is a distinct section of the map (e.g., a town area, a field, treasure room, hallway to throne room, etc).
If it is an indoor map, each area should be rooms, hallways, etc.
If it is an outdoor map, each area should be distinct sections of the map.
If it is a mixed indoor/outdoor map, you will know what's indoor or outdoor by the tiles. If you see floor, it's indoor. Plains, sand, etc are outdoor.

Areas should be small, self-contained areas. Each map should have 4-8 Areas.

The terrain grid will give you terrain tiles from Fire Emblem 8. This means that stairways are common points for enemy reinforcements, forts give extra defense and healing, etc.

`;

export default async function defineMapAreas(
  mapData: MapDataPreAI
): Promise<{ description: string; areas: MapArea[] }> {
  const thisScriptDir = new URL("../", import.meta.url).pathname;
  const imagePath =
    thisScriptDir + "avenir-maps/data/" + mapData.mapName + ".png";
  const imageBase64 = readFileSync(imagePath, { encoding: "base64" });

  const { object } = await generateObject({
    model: openai("gpt-4o"),
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
            image: `data:image/png;base64,${imageBase64}`,
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
  const mapData: MapDataPreAI = {
    width: 25,
    height: 23,
    terrainGrid: [
      {
        terrain: "Forest",
        x: 0,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 0,
      },
      {
        terrain: "Road",
        x: 12,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 1,
      },
      {
        terrain: "Road",
        x: 12,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 1,
      },
      {
        terrain: "Village Entrance",
        x: 16,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 1,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 2,
      },
      {
        terrain: "Road",
        x: 12,
        y: 2,
      },
      {
        terrain: "Road",
        x: 13,
        y: 2,
      },
      {
        terrain: "Road",
        x: 14,
        y: 2,
      },
      {
        terrain: "Road",
        x: 15,
        y: 2,
      },
      {
        terrain: "Road",
        x: 16,
        y: 2,
      },
      {
        terrain: "Road",
        x: 17,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 2,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Road",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Road",
        x: 13,
        y: 3,
      },
      {
        terrain: "Road",
        x: 14,
        y: 3,
      },
      {
        terrain: "Road",
        x: 15,
        y: 3,
      },
      {
        terrain: "Road",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 23,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 3,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Road",
        x: 8,
        y: 4,
      },
      {
        terrain: "Road",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 13,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 4,
      },
      {
        terrain: "Road",
        x: 0,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Road",
        x: 8,
        y: 5,
      },
      {
        terrain: "Road",
        x: 9,
        y: 5,
      },
      {
        terrain: "Road",
        x: 10,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 5,
      },
      {
        terrain: "Road",
        x: 0,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Road",
        x: 7,
        y: 6,
      },
      {
        terrain: "Road",
        x: 8,
        y: 6,
      },
      {
        terrain: "Road",
        x: 9,
        y: 6,
      },
      {
        terrain: "Road",
        x: 10,
        y: 6,
      },
      {
        terrain: "Road",
        x: 11,
        y: 6,
      },
      {
        terrain: "Road",
        x: 12,
        y: 6,
      },
      {
        terrain: "Road",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 6,
      },
      {
        terrain: "Road",
        x: 0,
        y: 7,
      },
      {
        terrain: "Road",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Ruins",
        x: 7,
        y: 7,
      },
      {
        terrain: "Ruins",
        x: 8,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 7,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 7,
      },
      {
        terrain: "Road",
        x: 0,
        y: 8,
      },
      {
        terrain: "Road",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Ruins",
        x: 7,
        y: 8,
      },
      {
        terrain: "Ruins",
        x: 8,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 8,
      },
      {
        terrain: "Village Entrance",
        x: 12,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 8,
      },
      {
        terrain: "Road",
        x: 14,
        y: 8,
      },
      {
        terrain: "Road",
        x: 15,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 8,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 8,
      },
      {
        terrain: "Plains",
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
        terrain: "Road",
        x: 3,
        y: 9,
      },
      {
        terrain: "Road",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Road",
        x: 7,
        y: 9,
      },
      {
        terrain: "Road",
        x: 8,
        y: 9,
      },
      {
        terrain: "Road",
        x: 9,
        y: 9,
      },
      {
        terrain: "Road",
        x: 10,
        y: 9,
      },
      {
        terrain: "Road",
        x: 11,
        y: 9,
      },
      {
        terrain: "Road",
        x: 12,
        y: 9,
      },
      {
        terrain: "Road",
        x: 13,
        y: 9,
      },
      {
        terrain: "Road",
        x: 14,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 9,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 9,
      },
      {
        terrain: "Road",
        x: 0,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Road",
        x: 4,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 10,
      },
      {
        terrain: "Road",
        x: 9,
        y: 10,
      },
      {
        terrain: "Road",
        x: 10,
        y: 10,
      },
      {
        terrain: "Road",
        x: 11,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Road",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 10,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 10,
      },
      {
        terrain: "Gunnel",
        x: 24,
        y: 10,
      },
      {
        terrain: "Road",
        x: 0,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 11,
      },
      {
        terrain: "Village Entrance",
        x: 2,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Road",
        x: 6,
        y: 11,
      },
      {
        terrain: "Road",
        x: 7,
        y: 11,
      },
      {
        terrain: "Road",
        x: 8,
        y: 11,
      },
      {
        terrain: "Road",
        x: 9,
        y: 11,
      },
      {
        terrain: "Road",
        x: 10,
        y: 11,
      },
      {
        terrain: "Road",
        x: 11,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 11,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 11,
      },
      {
        terrain: "Gunnel",
        x: 23,
        y: 11,
      },
      {
        terrain: "Gunnel",
        x: 24,
        y: 11,
      },
      {
        terrain: "Forest",
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
        terrain: "Village Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Road",
        x: 11,
        y: 12,
      },
      {
        terrain: "Road",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 12,
      },
      {
        terrain: "Vendor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 12,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 12,
      },
      {
        terrain: "Gunnel",
        x: 23,
        y: 12,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 13,
      },
      {
        terrain: "Village Wall",
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
        terrain: "Village Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 13,
      },
      {
        terrain: "Village Entrance",
        x: 9,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 13,
      },
      {
        terrain: "Road",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 13,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 13,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 13,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 13,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 14,
      },
      {
        terrain: "Armory",
        x: 1,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Road",
        x: 5,
        y: 14,
      },
      {
        terrain: "Road",
        x: 6,
        y: 14,
      },
      {
        terrain: "Road",
        x: 7,
        y: 14,
      },
      {
        terrain: "Road",
        x: 8,
        y: 14,
      },
      {
        terrain: "Road",
        x: 9,
        y: 14,
      },
      {
        terrain: "Road",
        x: 10,
        y: 14,
      },
      {
        terrain: "Road",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Road",
        x: 19,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 14,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 14,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 14,
      },
      {
        terrain: "Barrel",
        x: 23,
        y: 14,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Road",
        x: 5,
        y: 15,
      },
      {
        terrain: "Road",
        x: 6,
        y: 15,
      },
      {
        terrain: "Road",
        x: 7,
        y: 15,
      },
      {
        terrain: "Road",
        x: 8,
        y: 15,
      },
      {
        terrain: "Road",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Road",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 15,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 15,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 15,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Road",
        x: 6,
        y: 16,
      },
      {
        terrain: "Road",
        x: 7,
        y: 16,
      },
      {
        terrain: "Road",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 16,
      },
      {
        terrain: "Road",
        x: 18,
        y: 16,
      },
      {
        terrain: "Road",
        x: 19,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 20,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 22,
        y: 16,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 16,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 17,
      },
      {
        terrain: "Forest",
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
        terrain: "Plains",
        x: 5,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 17,
      },
      {
        terrain: "Road",
        x: 7,
        y: 17,
      },
      {
        terrain: "Road",
        x: 8,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 17,
      },
      {
        terrain: "Road",
        x: 14,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Inn",
        x: 16,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 17,
      },
      {
        terrain: "Road",
        x: 18,
        y: 17,
      },
      {
        terrain: "Road",
        x: 19,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 20,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 22,
        y: 17,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 17,
      },
      {
        terrain: "Mast",
        x: 24,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 18,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 18,
      },
      {
        terrain: "Plains",
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
        terrain: "Plains",
        x: 6,
        y: 18,
      },
      {
        terrain: "Road",
        x: 7,
        y: 18,
      },
      {
        terrain: "Road",
        x: 8,
        y: 18,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 18,
      },
      {
        terrain: "House",
        x: 10,
        y: 18,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 18,
      },
      {
        terrain: "Road",
        x: 15,
        y: 18,
      },
      {
        terrain: "Road",
        x: 16,
        y: 18,
      },
      {
        terrain: "Road",
        x: 17,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 18,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 18,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 18,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 18,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 18,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 19,
      },
      {
        terrain: "Fence",
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
        terrain: "Fence",
        x: 5,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 19,
      },
      {
        terrain: "Road",
        x: 8,
        y: 19,
      },
      {
        terrain: "Road",
        x: 9,
        y: 19,
      },
      {
        terrain: "Road",
        x: 10,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 19,
      },
      {
        terrain: "Plains",
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
        terrain: "Plains",
        x: 17,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 19,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 19,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 19,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 19,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 20,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 20,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 20,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 20,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 21,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 10,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 21,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 21,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 21,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 21,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 21,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 22,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 10,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 22,
      },
      {
        terrain: "Stairs",
        x: 13,
        y: 22,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 22,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 22,
      },
      {
        terrain: "Sea",
        x: 20,
        y: 22,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 22,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 22,
      },
      {
        terrain: "Barrel",
        x: 23,
        y: 22,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 22,
      },
    ],
    pointsOfInterest: [
      {
        x: 16,
        y: 1,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 8,
        terrain: "Village Entrance",
      },
      {
        x: 2,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 17,
        y: 12,
        terrain: "Vendor",
      },
      {
        x: 9,
        y: 13,
        terrain: "Village Entrance",
      },
      {
        x: 1,
        y: 14,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 17,
        terrain: "Inn",
      },
      {
        x: 10,
        y: 18,
        terrain: "House",
      },
      {
        x: 3,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 13,
        y: 22,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 22,
        terrain: "Stairs",
      },
    ],
    mapName: "Aegris",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="23" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E000F10" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E000F10.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="23">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Aegris_Changes"/>\n   <property name="MapID" value="Aegris_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x0F"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx9lstOFEEUhqu6GQhgom6RDSzACOLCFTEuFEQQwbXRmEhQcaEv4ArCNfgSXMSJ8BLDVYGoL+BixoAwXvdDov+f+itdNI2LLzVVfeqcOpc6NV+tMc2RMTFYNcbkwAgogQ9gGxQhsw5exPgOuccYh0ALmAcXwRXreA35GTBl3LwR30oYi5j3g1vgHmgHO6AH38oYm6yzTxt5/B7FOAZ6wCroBX+kczrQT/7aRHeHaDFO3zfJTWpu5UfZOl9oa8+6sR/zrijZ46EPFevOzdg04/dN60bKH2JtT3vaIhc72qCtO5jfFdRf1Bm2UjY6ZeNlnM1g7M5fBx31ytXAf2Q/n+JDRX4PY/4EPAUHig194dlogzL0ZVF+cp1+vUnpzdLvbYxjbQJMgiqsfcLeDdaUvns49/Dcm6AWv8+CH/h9LkN/JThnHjI1mMc2qZE9rO8zF9HxWl0IanVF9X5GfnVm2GD+NjC+Ny7PZcWJ8jnIV4MI1Aa1ugZale8C5J6BXjAL7mfY8Hn1sWDcfX35+snbk7AOmlSDbar5rVNsXILMXBCDetU6z1eQT3XyNZeSbYuS+igqH+lYHRl31kIQA8a4T7bbhc85z1/QHafsEvbPYX0eLOgOhn5Qf2PGffMMBz2pVT0ppxyUVN+kQF/AGljG/Chy+i9Yp/86dTG/YAm02sSWr2fm+bZ6Ur1i4ntBaKuku/7FOBvXpP8RdTHWYFN58DXge5Ef2af69L1b95F9k7W+LruMr7fxAAzJRpfqg7XEsaAchXeP8Wm2iRz3zMpf3sWPxvlXF9h4BcZk4zlrVcTStWqSe8P4TJjkXu+CG+p/7xC/ZbASJz1hCuMImAYPZWOG+bLuHeEZ2eerjfvt703Yz87bpPduY74DdoN6SNsYBlU6P/fVQvcguCrffcyY/331M8ZnU/0sjOeB9vhYNcjGuD3en2tkw/fwjtjZOVTOw9reh9xv8FZ5+SXf0zYYq5XIsQsmrWNHa3yTuK9bNftd94jxKup+My959bnTbFibvBUDehN9v8p6k+jvZdXrgHwN3wPf20MbRd2dXPB/YVHr3p+QtL/09ac5+TY1BPfjH0BADuk=\n  </data>\n </layer>\n <layer name="Destroy South" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILhAR4zMTA8A+LnTLSzg5mZgYENiNmZaWfHKBgFo4C2AACsBgLQ\n  </data>\n </layer>\n <layer name="Close South" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQApQHGgHjIJRMAooAgCFQAAi\n  </data>\n </layer>\n <layer name="Destroy West" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJztzcEJACAMwMBQUfcfUl3D7iB9mYO8A5J+sAJ2dqLu0RuMbLa6hyS9ukAHAtQ=\n  </data>\n </layer>\n <layer name="Close West" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjALqAcWBdsAoGAWjYBQQAACipAAi\n  </data>\n </layer>\n <layer name="Destroy Center" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2D4g8dMDAzPgPg5E+3sYGZmYGADYnZm2tkxCkbBKBgFo4ByAAAG+ALQ\n  </data>\n </layer>\n <layer name="Close Center" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUUAsoDrQDRsEoGAWjYBQQBADEKAAi\n  </data>\n </layer>\n <layer name="Destroy North" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCAfPGZiYHgGxM+ZKDCEAGBmZmBgA2J2ZtrZMQpGwSgYBaNgFIyCkQMAiHUC0A==\n  </data>\n </layer>\n <layer name="Close North" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBj8QHGgHTAKRsEoGAWjYBSMgmEDABxjACI=\n  </data>\n </layer>\n</map>\n',
  };
  const res = await defineMapAreas(mapData);
  console.log("res", JSON.stringify(res, null, 2));
}

