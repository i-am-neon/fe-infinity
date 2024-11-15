import { assertEquals } from "@std/assert/equals";
import getPointsOfInterestFromTerrainGrid from "@/map-processing/get-info-from-tmx/get-points-of-interest-from-terrain-grid.ts";

Deno.test(
  "getPointsOfInterestFromTerrainGrid - should return correct points of interest",
  () => {
    const mockTerrainGrid = [
      ["Plains", "House", "Plains"],
      ["Vendor", "Plains", "Castle Gate"],
      ["Plains", "Fort", "Plains"],
    ];

    const expectedPointsOfInterest = [
      { x: 1, y: 0, type: "House" },
      { x: 0, y: 1, type: "Vendor" },
      { x: 2, y: 1, type: "Castle Gate" },
      { x: 1, y: 2, type: "Fort" },
    ];

    const result = getPointsOfInterestFromTerrainGrid(mockTerrainGrid);
    assertEquals(result, expectedPointsOfInterest);
  }
);
