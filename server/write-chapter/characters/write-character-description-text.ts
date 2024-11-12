import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import getDescText from "@/lib/get-desc-text.ts";

export default function writeCharacterDescriptionText({
  characterName,
  formattedDescription,
}: {
  characterName: string;
  formattedDescription: string;
}): void {
  const characterNameText = `
## ${getDescText(characterName)}
${formattedDescription}`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Characters/Descriptions.s",
    content: characterNameText,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  writeCharacterDescriptionText({
    characterName: "TestCharacter",
    formattedDescription: `The Captain of the Tiger Brigade,[NL]
a bold and skilled strategist.[X]`,
  });
}

