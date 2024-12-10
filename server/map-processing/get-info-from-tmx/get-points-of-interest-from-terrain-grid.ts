import { pointsOfInterestNames } from "@/map-processing/lookup-tables/points-of-interest-names.ts";
import { MapLocation } from "@/types/map-location.ts";

export default function getPointsOfInterestFromTerrainGrid(
  tileData: MapLocation[]
): MapLocation[] {
  const pointsOfInterest: MapLocation[] = [];

  for (const tile of tileData) {
    if (pointsOfInterestNames.includes(tile.terrain)) {
      pointsOfInterest.push({ x: tile.x, y: tile.y, terrain: tile.terrain });
    }
  }

  return pointsOfInterest;
}

