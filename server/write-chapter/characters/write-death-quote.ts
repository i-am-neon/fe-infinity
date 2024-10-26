import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeDeathQuote({
  characterName,
  formattedDeathQuote,
}: {
  characterName: string;
  formattedDeathQuote: string;
}): void {
  const characterDeathQuote = `
## ${characterName}DeathText
[FarRight][Load${characterName}]
${formattedDeathQuote}`;

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Text/Chapters/DeathQuotes.s",
    content: characterDeathQuote,
    isOnNewLine: true,
  });

  // Add the macro to DeathQuotes.event
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "CSV/EAFiles/DeathQuotes.event",
    // DeathQuote(Character,Chapter,EventID,TextID)
    content: `DeathQuote(${characterName},AllChapters,0x00,${characterName}DeathText)`,
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  writeDeathQuote({
    characterName: "TestCharacter",
    formattedDeathQuote: `I'm dead![X]`,
  });
}

