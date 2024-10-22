import { join } from "node:path";

export default function getPathToRomBuilderDir(): string {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;

  // Navigate one level up to the parent directory and join it with "romBuilder"
  const parentDir = join(thisScriptDir, "../..");
  const romBuilderDir = join(parentDir, "romBuilder");

  // console.log("thisScriptDir :>> ", thisScriptDir);
  // console.log("romBuilderDir :>> ", romBuilderDir);

  return romBuilderDir;
}

// This gets run if the script is run directly: `deno run get-path-to-rom-builder-dir.ts`
if (import.meta.main) {
  console.log("Path to rom builder dir:", getPathToRomBuilderDir());
}

