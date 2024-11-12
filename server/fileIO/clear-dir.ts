import getPathWithinRomBuilderDir from "@/fileIO/get-path-within-rom-builder-dir.ts";

export default async function clearDir(directoryPath: string): Promise<void> {
  try {
    // Read the directory contents
    for await (const entry of Deno.readDir(directoryPath)) {
      // Skip `.gitkeep`
      if (entry.name === ".gitkeep") continue;

      // Construct the full path
      const entryPath = `${directoryPath}/${entry.name}`;

      // Check if the entry is a file or directory and remove it accordingly
      if (entry.isFile || entry.isSymlink) {
        await Deno.remove(entryPath);
      } else if (entry.isDirectory) {
        await Deno.remove(entryPath, { recursive: true });
      }
    }
  } catch (error) {
    console.error(`Failed to clear directory ${directoryPath}:`, error);
    throw error;
  }
}

if (import.meta.main) {
  const directoryPath = getPathWithinRomBuilderDir("Events/build");
  await clearDir(directoryPath);
}

