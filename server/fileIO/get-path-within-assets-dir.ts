import { join } from "node:path";
import getPathToAssetsDir from "@/fileIO/get-path-to-assets-dir.ts";

export default function getPathWithinAssetsDir(subPath: string): string {
  return join(getPathToAssetsDir(), subPath);
}

if (import.meta.main) {
  console.log(
    "Path within assets dir:",
    getPathWithinAssetsDir("maps/Knights10.tmx")
  );
}

