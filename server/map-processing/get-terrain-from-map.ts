import tileConfigToTerrain from "@/map-processing/tile-config-to-terrain.ts";
import decompressMapData from "@/map-processing/decompress-map-data.ts";
import terrainIdToName from "@/map-processing/terrain-id-to-name.ts";
import mapNameToData from "@/map-processing/map-name-to-data.ts";

export default function getTerrainFromMap() {
  const mapData = mapNameToData["Knights10"];
  const { width, height } = mapData;

  const terrainTags = tileConfigToTerrain["3E"];
  const terrainTagsArray = terrainTags.split(" ");

  const mapTiles: number[] = decompressMapData(mapData.encodedTiles);

  // Initialize the 2D array
  const terrainMap: (string | null)[][] = Array.from({ length: height }, () =>
    Array(width).fill(null)
  );

  // Populate the 2D array with terrain names
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tileIndex = y * width + x;
      const terrainTag = terrainTagsArray[mapTiles[tileIndex] - 1];
      const terrainName = terrainIdToName[parseInt(terrainTag)];
      terrainMap[y][x] = terrainName ?? null;
    }
  }

  return terrainMap;
}

if (import.meta.main) {
  const terrainMap = getTerrainFromMap();
  console.log("Terrain Map:", terrainMap);
}

