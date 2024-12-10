import { interactableTerrainNames } from "@/map-processing/lookup-tables/interactable-terrain-names.ts";
import { MapLocation } from "@/types/map-location.ts";

export default function getInteractableTilesFromTerrainGrid(
  tileData: MapLocation[]
): MapLocation[] {
  const visitable: MapLocation[] = [];

  for (const tile of tileData) {
    if (interactableTerrainNames.includes(tile.terrain)) {
      visitable.push({ x: tile.x, y: tile.y, terrain: tile.terrain });
    }
  }

  return visitable;
}
