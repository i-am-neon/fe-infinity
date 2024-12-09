import { assertEquals } from "@std/assert/equals";
import getTerrainFromCoordinateArea from "@/ai/assemble-chapter-event/unit-placement/get-terrain-from-coordinate-area.ts";

Deno.test("should return correct terrain within the specified area", () => {
  const terrainGrid = [
    ["Desert", "Desert", "Cliff"],
    ["Plains", "Forest", "Sand"],
    ["Road", "House", "Fort"],
  ];

  const result = getTerrainFromCoordinateArea(
    {
      fromX: 0,
      fromY: 0,
      toX: 1,
      toY: 1,
    },
    terrainGrid
  );

  assertEquals(result, [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
  ]);
});

Deno.test("should handle areas out of range gracefully", () => {
  const terrainGrid = [
    ["Desert", "Desert"],
    ["Plains", "Forest"],
  ];

  const result = getTerrainFromCoordinateArea(
    {
      fromX: 0,
      fromY: 0,
      toX: 2,
      toY: 2,
    },
    terrainGrid
  );

  assertEquals(result, [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
  ]);
});

Deno.test("should return empty array if no terrain matches", () => {
  const terrainGrid: string[][] = [];

  const result = getTerrainFromCoordinateArea(
    {
      fromX: 0,
      fromY: 0,
      toX: 1,
      toY: 1,
    },
    terrainGrid
  );

  assertEquals(result, []);
});
