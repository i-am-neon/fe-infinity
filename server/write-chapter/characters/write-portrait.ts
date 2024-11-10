import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import getPathWithinAssetsPortraitsDir from "@/fileIO/get-path-within-assets-portraits-dir.ts";
import getPathWithinRomBuilderDir from "@/fileIO/get-path-within-rom-builder-dir.ts";
import { seraphinaPortraitMetadata } from "@/testData/test-characters.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";

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

  const { mouthX, mouthY, eyeX, eyeY } = portraitMetadata.eyeMouthOffsets;

  // Write to PortraitInstaller.event
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Graphics/Portraits/build/PortraitInstaller.event",
    content: `
${characterName}Portrait:
#incbin "dmp/${characterName}.dmp"
setMugEntry(${characterName}Mug,${characterName}Portrait,${mouthX},${mouthY},${eyeX},${eyeY})`,
    // setMugEntry(mugEntry, mugLocation, mouthX, mouthY, eyeX, eyeY)
    isOnNewLine: true,
  });

  // copy portrait image from assets to rom builder and rename
  await Deno.copyFile(
    getPathWithinAssetsPortraitsDir(
      "images/" + portraitMetadata.originalImageName
    ),
    getPathWithinRomBuilderDir(
      `Graphics/Portraits/build/images/${characterName}.png`
    )
  );
}

if (import.meta.main) {
  await writePortrait({
    characterName: "Seraphina",
    portraitMetadata: {
      originalImageName: "0.png",
      gender: "female",
      age: "young adult",
      hairColor: "blue",
      eyeColor: "red",
      vibe: "mystical, serene, wise",
      headgear: "hood",
      clothing: "hooded cloak",
      eyeMouthOffsets: {
        mouthX: 3,
        mouthY: 5,
        eyeX: 3,
        eyeY: 3,
      },
    },
  });
}

