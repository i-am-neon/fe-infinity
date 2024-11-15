import { join } from "node:path";

export default function getPathToAssetsDir(): string {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;

  const parentDir = join(thisScriptDir, "../..");
  const romBuilderDir = join(parentDir, "assets");

  return romBuilderDir;
}

if (import.meta.main) {
  console.log("Path to assets dir:", getPathToAssetsDir());
}

