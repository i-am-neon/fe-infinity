import { extname, join } from "node:path";
import getPathWithinAssetsDir from "@/fileIO/get-path-within-assets-dir.ts";

export default async function getYamlFilesInDir(
  dirPath: string
): Promise<string[]> {
  const yamlFiles: string[] = [];

  for await (const entry of Deno.readDir(dirPath)) {
    if (
      entry.isFile &&
      (extname(entry.name) === ".yaml" || extname(entry.name) === ".yml")
    ) {
      yamlFiles.push(join(dirPath, entry.name));
    }
  }

  return yamlFiles;
}

if (import.meta.main) {
  console.log(await getYamlFilesInDir(getPathWithinAssetsDir("maps")));
}
