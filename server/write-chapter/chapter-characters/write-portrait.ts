import appendToFileInRomBuilderSync from "../../fileIO/append-to-file-in-rom-builder-sync.ts";
import getPathWithinAssetsPortraitsDir from "../../fileIO/get-path-within-assets-portraits-dir.ts";
import getPathWithinRomBuilderDir from "../../fileIO/get-path-within-rom-builder-dir.ts";
import { seraphinaPortraitMetadata } from "../../testData/characters.ts";
import type { PortraitMetadata } from "../../types/PortraitMetadata.ts";

export default async function writePortrait({
  characterName,
  portraitMetadata,
}: {
  characterName: string;
  portraitMetadata: PortraitMetadata;
}): Promise<void> {
  // Write portrait name text
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Definitions/Portraits.s",
    content: `${characterName}Portrait`,
    isOnNewLine: true,
    createIfFileDoesNotExist: true,
  });

  // copy portrait image from assets to rom builder and rename
  await Deno.copyFile(
    getPathWithinAssetsPortraitsDir(portraitMetadata.originalImageName),
    getPathWithinRomBuilderDir(`Graphics/Portraits/${characterName}.png`)
  );
}

if (import.meta.main) {
  await writePortrait({
    characterName: "Seraphina",
    portraitMetadata: seraphinaPortraitMetadata,
  });
}

