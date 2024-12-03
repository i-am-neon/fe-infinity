import getVisitableFromTerrainGrid from "@/map-processing/get-info-from-tmx/get-visitable-from-terrain-grid.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test(
  "getVisitableFromTerrainGrid - should return correct points of interest",
  () => {
    const mockTerrainGrid = [
      ["Plains", "House", "Plains"],
      ["Vendor", "Plains", "Castle Gate"],
      ["Plains", "Fort", "Plains"],
    ];

    const expectedPointsOfInterest = [
      { x: 1, y: 0, type: "House" },
      { x: 0, y: 1, type: "Vendor" },
    ];

    const result = getVisitableFromTerrainGrid(mockTerrainGrid);
    assertEquals(result, expectedPointsOfInterest);
  }
);

