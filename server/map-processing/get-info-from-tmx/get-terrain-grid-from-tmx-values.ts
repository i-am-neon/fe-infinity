import decompressMapData from "@/map-processing/decompress-map-data.ts";
import terrainIdToName from "@/map-processing/lookup-tables/terrain-id-to-name.ts";
import tileConfigToTerrain from "@/map-processing/lookup-tables/tile-config-to-terrain.ts";
import { MapLocation } from "@/types/map-location.ts";

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
}): MapLocation[] {
  const mapTiles: number[] = decompressMapData(mainLayerEncoded);
  const terrainTags = tileConfigToTerrain[tileConfigId];
  if (!terrainTags) {
    throw new Error("Invalid tile config id: " + tileConfigId);
  }
  const terrainTagsArray = terrainTags.split(" ");

  const tileDataArray: MapLocation[] = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const tileIndex = y * width + x;
      const terrainTag = terrainTagsArray[mapTiles[tileIndex] - 1];
      const terrainName = terrainIdToName[parseInt(terrainTag)];
      tileDataArray.push({ terrain: terrainName ?? "--", x, y });
    }
  }

  return tileDataArray;
}

