import getYamlFilesInDir from "@/map-processing/fileIO/get-yaml-files-in-dir.ts";
import getPathWithinAssetsDir from "@/fileIO/get-path-within-assets-dir.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import readMapData from "@/map-processing/fileIO/read-map-data.ts";
import { join } from "node:path";

export default async function writeAllMapOptions(): Promise<void> {
  const yamlFilesFullPaths = await getYamlFilesInDir(
    getPathWithinAssetsDir("maps")
  );
  const mapDataArray: MapData[] = [];

  for (const filePath of yamlFilesFullPaths) {
    const mapData = await readMapData(filePath);
    mapDataArray.push(mapData);
  }

  const thisScriptDir = new URL(".", import.meta.url).pathname;
  const mapProcessingDir = join(thisScriptDir, "..");
  const outputPath = join(mapProcessingDir, "all-map-options.ts");
  const outputContent = `import { MapData } from "@/map-processing/types/MapData.ts";

  export const allMapOptions: MapData[] = ${JSON.stringify(
    mapDataArray,
    null,
    2
  )};`;

  await Deno.writeTextFile(outputPath, outputContent);
}

if (import.meta.main) {
  await writeAllMapOptions();
}

