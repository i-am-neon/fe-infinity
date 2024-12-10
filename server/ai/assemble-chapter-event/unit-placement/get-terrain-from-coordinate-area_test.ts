import { assertEquals } from "@std/assert/equals";
import getTerrainFromCoordinateArea from "@/ai/assemble-chapter-event/unit-placement/get-terrain-from-coordinate-area.ts";
import { MapLocation } from "@/types/map-location.ts";

Deno.test("should return correct terrain within the specified area", () => {
  const terrainGrid: MapLocation[] = [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Cliff", x: 2, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
    { terrain: "Sand", x: 2, y: 1 },
    { terrain: "Road", x: 0, y: 2 },
    { terrain: "House", x: 1, y: 2 },
    { terrain: "Fort", x: 2, y: 2 },
  ];

  const result = getTerrainFromCoordinateArea({
    fromX: 0,
    fromY: 0,
    toX: 1,
    toY: 1,
    terrainGrid,
  });

  assertEquals(result, [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
  ]);
});

Deno.test("should handle areas out of range gracefully", () => {
  const terrainGrid: MapLocation[] = [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
  ];

  const result = getTerrainFromCoordinateArea({
    fromX: 0,
    fromY: 0,
    toX: 2,
    toY: 2,
    terrainGrid,
  });

  // Even though we asked for more area than exists, we only get what's available
  assertEquals(result, [
    { terrain: "Desert", x: 0, y: 0 },
    { terrain: "Desert", x: 1, y: 0 },
    { terrain: "Plains", x: 0, y: 1 },
    { terrain: "Forest", x: 1, y: 1 },
  ]);
});

Deno.test("should return empty array if no terrain matches", () => {
  const terrainGrid: MapLocation[] = [];

  const result = getTerrainFromCoordinateArea({
    fromX: 0,
    fromY: 0,
    toX: 1,
    toY: 1,
    terrainGrid,
  });

  assertEquals(result, []);
});
