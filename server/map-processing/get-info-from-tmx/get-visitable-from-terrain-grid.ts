import { MapLocation } from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import { visitableTerrainNames } from "@/map-processing/lookup-tables/visitable-terrain-names.ts";

export default function getVisitableFromTerrainGrid(
  terrainGrid: string[][]
): MapLocation[] {
  const visitable: MapLocation[] = [];

  for (let y = 0; y < terrainGrid.length; y++) {
    for (let x = 0; x < terrainGrid[y].length; x++) {
      const terrainType = terrainGrid[y][x];

      // Check if the terrain type is a point of interest
      if (visitableTerrainNames.includes(terrainType)) {
        visitable.push({ x, y, type: terrainType });
      }
    }
  }

  return visitable;
}

