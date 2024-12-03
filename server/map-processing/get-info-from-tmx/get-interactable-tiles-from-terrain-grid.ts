import { interactableTerrainNames } from "@/map-processing/lookup-tables/interactable-terrain-names.ts";
import { MapLocation } from "@/types/map-location.ts";

export default function getInteractableTilesFromTerrainGrid(
  terrainGrid: string[][]
): MapLocation[] {
  const visitable: MapLocation[] = [];

  for (let y = 0; y < terrainGrid.length; y++) {
    for (let x = 0; x < terrainGrid[y].length; x++) {
      const terrainType = terrainGrid[y][x];

      // Check if the terrain type is a point of interest
      if (interactableTerrainNames.includes(terrainType)) {
        visitable.push({ x, y, type: terrainType });
      }
    }
  }

  return visitable;
}

