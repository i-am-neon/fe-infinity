import { TileData } from "@/map-processing/types/TileData.ts";

interface GetTerrainFromCoordinateAreaParams {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

export default function getTerrainFromCoordinateArea(
  { fromX, fromY, toX, toY }: GetTerrainFromCoordinateAreaParams,
  terrainGrid: string[][]
): TileData[] {
  const results: TileData[] = [];
  for (let y = fromY; y <= toY; y++) {
    for (let x = fromX; x <= toX; x++) {
      const terrain = terrainGrid[y]?.[x];
      if (terrain) {
        results.push({ terrain, x, y });
      }
    }
  }
  return results;
}

