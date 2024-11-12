import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import getNameText from "@/lib/get-name-text.ts";

export default function writeCharacterNameText({
  name,
}: {
  name: string;
}): void {
  const characterNameText = `
## ${getNameText(name)}
${name}[X]`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Characters/Names.s",
    content: characterNameText,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  writeCharacterNameText({ name: "TestCharacter" });
}

