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
    content: `${characterName}Mug`,
    isOnNewLine: true,
  });

  // Write character name to Definitions/Characters.s so the script will generate a [LoadFace] definition for the portrait
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Definitions/Characters.s",
    content: `${characterName}`,
    isOnNewLine: true,
  });

  const { mouthX, mouthY, eyeX, eyeY } = portraitMetadata.eyeMouthOffsets;

  // Write to PortraitInstaller.event
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Graphics/Portraits/PortraitInstaller.event",
    content: `
${characterName}Portrait:
#incbin "cache/${characterName}.dmp"
setMugEntry(${characterName}Mug,${characterName}Portrait,${mouthX},${mouthY},${eyeX},${eyeY})`,
    // setMugEntry(mugEntry, mugLocation, mouthX, mouthY, eyeX, eyeY)
    isOnNewLine: true,
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

