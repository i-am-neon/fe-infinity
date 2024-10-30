import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";

export default async function countFilesInDirectory(
  dirPath: string
): Promise<number> {
  let count = 0;
  for await (const entry of Deno.readDir(dirPath)) {
    if (entry.isFile) count++; // Only count files, not directories
  }
  return count;
}

if (import.meta.main) {
  const dirPath = getPathWithinAssetsPortraitsDir("images/");
  countFilesInDirectory(dirPath)
    .then((count) => console.log(`Total files in "${dirPath}": ${count}`))
    .catch((error) => console.error("Error counting files:", error));
}

