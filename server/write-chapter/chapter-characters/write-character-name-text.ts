import appendToFileInRomBuilderSync from "../../fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeCharacterNameText(
  characterDisplayName: string
): void {
  const characterNameText = `
## ${characterDisplayName}NameText
${characterDisplayName}[X]`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Characters/Names.s",
    content: characterNameText,
    isOnNewLine: true,
    createIfFileDoesNotExist: true,
  });
}

if (import.meta.main) {
  writeCharacterNameText("TestCharacter");
}

