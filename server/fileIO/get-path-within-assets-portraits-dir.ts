import { join } from "node:path";
import getPathToAssetsPortraitsDir from "./get-path-to-assets-portraits-dir.ts";

export default function getPathWithinAssetsPortraitsDir(
  subPath: string
): string {
  return join(getPathToAssetsPortraitsDir(), subPath);
}

if (import.meta.main) {
  console.log(
    "Path within assets/portraits dir:",
    getPathWithinAssetsPortraitsDir("SomePortrait.png")
  );
}

