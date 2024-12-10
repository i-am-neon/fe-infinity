import { MapLocation } from "@/types/map-location.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";

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

if (import.meta.main) {
  const terrainGrid: MapLocation[] = allMapOptions[0].terrainGrid;
  const mapArea = allMapOptions[0].areas.find(
    (a) => a.name === "Southern Plains"
  )!;

  const res = getTerrainFromCoordinateArea({
    fromX: mapArea.coordinateArea.from.x,
    fromY: mapArea.coordinateArea.from.y,
    toX: mapArea.coordinateArea.to.x,
    toY: mapArea.coordinateArea.to.y,
    terrainGrid,
  });
  console.log("res", JSON.stringify(res, null, 2));
}

