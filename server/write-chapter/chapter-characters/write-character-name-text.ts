import appendToFileInRomBuilderSync from "../../fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeCharacterNameText({
  name,
}: {
  name: string;
}): void {
  const characterNameText = `
## ${name}NameText
${name}[X]`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Characters/Names.s",
    content: characterNameText,
    isOnNewLine: true,
    createIfFileDoesNotExist: true,
  });
}

if (import.meta.main) {
  writeCharacterNameText({ name: "TestCharacter" });
}

