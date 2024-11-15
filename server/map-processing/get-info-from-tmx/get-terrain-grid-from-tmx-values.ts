import decompressMapData from "@/map-processing/decompress-map-data.ts";
import terrainIdToName from "@/map-processing/lookup-tables/terrain-id-to-name.ts";
import tileConfigToTerrain from "@/map-processing/lookup-tables/tile-config-to-terrain.ts";

export default function getTerrainGridFromTmxValues({
  mainLayerEncoded,
  tileConfigId,
  height,
  width,
}: {
  mainLayerEncoded: string;
  tileConfigId: string;
  height: number;
  width: number;
}): string[][] {
  // Decompress the base64-encoded main layer data
  const mapTiles: number[] = decompressMapData(mainLayerEncoded);

  // Get the terrain tags for the given tileConfigId
  const terrainTags = tileConfigToTerrain[tileConfigId];
  const terrainTagsArray = terrainTags.split(" ");

  // Initialize the 2D array for the terrain grid
  const terrainGrid: string[][] = Array.from({ length: height }, () =>
    Array(width).fill("--")
  );

  // Populate the terrain grid based on the decompressed map data
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tileIndex = y * width + x;
      const terrainTag = terrainTagsArray[mapTiles[tileIndex] - 1];
      const terrainName = terrainIdToName[parseInt(terrainTag)];
      terrainGrid[y][x] = terrainName ?? "--";
    }
  }

  return terrainGrid;
}

