import extractValuesFromTmx from "@/map-processing/get-info-from-tmx/extract-values-from-tmx.ts";
import getTerrainGridFromTmxValues from "@/map-processing/get-info-from-tmx/get-terrain-grid-from-tmx-values.ts";
import getPointsOfInterestFromTerrainGrid from "@/map-processing/get-info-from-tmx/get-points-of-interest-from-terrain-grid.ts";
import getInteractableTilesFromTerrainGrid from "@/map-processing/get-info-from-tmx/get-interactable-tiles-from-terrain-grid.ts";

export type MapLocation = { x: number; y: number; type: string };

export default function getInfoFromTmx(tmx: string): {
  tileset: string;
  width: number;
  height: number;
  terrainGrid: string[][];
  pointsOfInterest: MapLocation[];
  interactableTiles: MapLocation[];
} {
  const { tileset, height, width, mainLayerEncoded } =
    extractValuesFromTmx(tmx);

  // last two digits
  const tileConfigId = tileset.slice(-2);

  const terrainGrid = getTerrainGridFromTmxValues({
    mainLayerEncoded,
    tileConfigId,
    height,
    width,
  });

  const pointsOfInterest = getPointsOfInterestFromTerrainGrid(terrainGrid);
  const interactableTiles = getInteractableTilesFromTerrainGrid(terrainGrid);

  return {
    tileset,
    width,
    height,
    terrainGrid,
    pointsOfInterest,
    interactableTiles,
  };
}

