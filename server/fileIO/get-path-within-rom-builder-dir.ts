import { join } from "node:path";
import getPathToRomBuilderDir from "@/fileIO/get-path-to-rom-builder-dir.ts";

export default function getPathWithinRomBuilderDir(subPath: string): string {
  return join(getPathToRomBuilderDir(), subPath);
}

// This gets run if the script is run directly: `deno run get-path-to-rom-builder-dir.ts`
if (import.meta.main) {
  console.log(
    "Path to rom builder dir:",
    getPathWithinRomBuilderDir("CSV/Tables/ChapterData/ChapterDataTable.csv")
  );
}

