import countFilesInDirectory from "@/ai/portraits/portrait-metadata-creation/count-files-in-directory.ts";
import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";

export default async function writeAllPortraitOptions(): Promise<void> {
  const imageCount = await countFilesInDirectory(
    getPathWithinAssetsPortraitsDir("images/")
  );

  const allMetadata: Array<
    Omit<PortraitMetadata, "originalImageName" | "eyeMouthOffsets">
  > = [];

  for (let index = 0; index < imageCount; index++) {
    const metadataPath = getPathWithinAssetsPortraitsDir(
      `metadata/${index}.json`
    );
    try {
      const metadataText = await Deno.readTextFile(metadataPath);
      const metadata: Omit<
        PortraitMetadata,
        "originalImageName" | "eyeMouthOffsets"
      > = JSON.parse(metadataText);
      const portraitMetadata: PortraitMetadata = {
        originalImageName: index.toString() + ".png",
        eyeMouthOffsets: {
          eyeX: 3,
          eyeY: 5,
          mouthX: 3,
          mouthY: 5,
        },
        ...metadata,
      };
      allMetadata.push(portraitMetadata);
    } catch (error) {
      console.error(`Error reading metadata for image ${index}:`, error);
    }
  }

  const outputFilePath =
    "./ai/portraits/portrait-metadata-creation/all-portrait-options.ts";
  await Deno.writeTextFile(
    outputFilePath,
    `export const allPortraitOptions = ${JSON.stringify(allMetadata, null, 2)}`
  );

  console.log(`Concatenated metadata written to ${outputFilePath}`);
}

if (import.meta.main) {
  writeAllPortraitOptions().catch((error) =>
    console.error("Error writing all portrait options:", error)
  );
}

