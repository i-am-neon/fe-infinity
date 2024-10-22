import { join } from "node:path";

export default function getPathToAssetsPortraitsDir(): string {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;

  const parentDir = join(thisScriptDir, "../..");
  const romBuilderDir = join(parentDir, "assets/portraits");

  // console.log("thisScriptDir :>> ", thisScriptDir);
  // console.log("romBuilderDir :>> ", romBuilderDir);

  return romBuilderDir;
}

if (import.meta.main) {
  console.log("Path to assets/portraits dir:", getPathToAssetsPortraitsDir());
}

