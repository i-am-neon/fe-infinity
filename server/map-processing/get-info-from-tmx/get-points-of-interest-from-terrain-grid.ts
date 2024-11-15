import { pointsOfInterestNames } from "@/map-processing/lookup-tables/points-of-interest-names.ts";
import { PointOfInterest } from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";

export default function getPointsOfInterestFromTerrainGrid(
  terrainGrid: string[][]
): PointOfInterest[] {
  const pointsOfInterest: PointOfInterest[] = [];

  for (let y = 0; y < terrainGrid.length; y++) {
    for (let x = 0; x < terrainGrid[y].length; x++) {
      const terrainType = terrainGrid[y][x];

      // Check if the terrain type is a point of interest
      if (pointsOfInterestNames.includes(terrainType)) {
        pointsOfInterest.push({ x, y, type: terrainType });
      }
    }
  }

  return pointsOfInterest;
}

