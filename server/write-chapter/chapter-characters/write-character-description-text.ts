import appendToFileInRomBuilderSync from "../../fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeCharacterDescriptionText({
  characterDisplayName,
  formattedDescription,
}: {
  characterDisplayName: string;
  formattedDescription: string;
}): void {
  const characterNameText = `
## ${characterDisplayName}DescText
${formattedDescription}`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Characters/Descriptions.s",
    content: characterNameText,
    isOnNewLine: true,
    createIfFileDoesNotExist: true,
  });
}

if (import.meta.main) {
  writeCharacterDescriptionText({
    characterDisplayName: "TestCharacter",
    formattedDescription: `The Captain of the Tiger Brigade,[NL]
a bold and skilled strategist.[X]`,
  });
}

