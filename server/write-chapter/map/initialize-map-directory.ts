import getPathWithinRomBuilderDir from "@/fileIO/get-path-within-rom-builder-dir.ts";

export default async function initializeMapDirectory(): Promise<void> {
  const mapDirectory = getPathWithinRomBuilderDir("Maps/data");

  try {
    // Remove the directory and its contents
    await Deno.remove(mapDirectory, { recursive: true });

    // Recreate the empty directory after clearing it
    await Deno.mkdir(mapDirectory, { recursive: true });

    console.log(`Cleared all files within: ${mapDirectory}`);
  } catch (error) {
    console.error(`Failed to clear the directory: ${mapDirectory}`, error);
  }
}

if (import.meta.main) {
  await initializeMapDirectory();
}
