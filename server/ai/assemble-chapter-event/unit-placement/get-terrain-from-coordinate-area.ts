import { MapLocation } from "@/types/map-location.ts";

interface GetTerrainFromCoordinateAreaParams {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  terrainGrid: MapLocation[];
}

export default function getTerrainFromCoordinateArea({
  fromX,
  fromY,
  toX,
  toY,
  terrainGrid,
}: GetTerrainFromCoordinateAreaParams): MapLocation[] {
  const results: MapLocation[] = [];
  for (let y = fromY; y <= toY; y++) {
    for (let x = fromX; x <= toX; x++) {
      const terrain = terrainGrid.find((t) => t.x === x && t.y === y);
      if (terrain) {
        results.push(terrain);
      }
    }
  }
  return results;
}

