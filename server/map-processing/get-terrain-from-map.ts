import tileConfigToTerrain from "./lookup-tables/tile-config-to-terrain.ts";
import decompressMapData from "@/map-processing/decompress-map-data.ts";
import terrainIdToName from "./lookup-tables/terrain-id-to-name.ts";
import mapNameToData from "./lookup-tables/map-name-to-data.ts";

export default function getTerrainFromMap(mapName: string): string[][] {
  const mapData = mapNameToData[mapName];
  const { width, height, tileConfigId, encodedTiles } = mapData;

  const terrainTags = tileConfigToTerrain[tileConfigId];
  const terrainTagsArray = terrainTags.split(" ");

  const mapTiles: number[] = decompressMapData(encodedTiles);

  // Initialize the 2D array
  const terrainMap: string[][] = Array.from({ length: height }, () =>
    Array(width).fill("--")
  );

  // Populate the 2D array with terrain names
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tileIndex = y * width + x;
      const terrainTag = terrainTagsArray[mapTiles[tileIndex] - 1];
      const terrainName = terrainIdToName[parseInt(terrainTag)];
      terrainMap[y][x] = terrainName ?? "--";
    }
  }

  return terrainMap;
}

if (import.meta.main) {
  const terrainMap = getTerrainFromMap("Knights10");
  console.log("Terrain Map:", terrainMap);
}

