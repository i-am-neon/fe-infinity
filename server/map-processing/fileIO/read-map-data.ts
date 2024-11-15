import { MapData } from "@/map-processing/types/MapData.ts";
import { parse } from "jsr:@std/yaml";
import getPathWithinAssetsDir from "@/fileIO/get-path-within-assets-dir.ts";

export default async function readMapData(filePath: string): Promise<MapData> {
  const fileContent = await Deno.readTextFile(filePath);
  const parsedData = parse(fileContent) as MapData;

  return parsedData;
}

if (import.meta.main) {
  const filePath = getPathWithinAssetsDir(
    "maps/Knights-Villagers-Bandits-10-3C-00-CE-3E.yaml"
  );
  const mapData = await readMapData(filePath);
  console.log("mapData", JSON.stringify(mapData, null, 2));
}
