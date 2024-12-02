export default function formatDeathQuote({
  rawDeathQuote,
  characterName,
}: {
  rawDeathQuote: string;
  characterName: string;
}): string {
  const maxLength = 30;

  function formatWithNewLinesAndReplacements(text: string): string {
    // Replace special characters
    let processedText = text.replace(/’/g, "'").replace(/\.{3}/g, "...[....]");

    const words = processedText.split(" ");
    let currentLine = "";
    const lines: string[] = [];

    for (const word of words) {
      if ((currentLine + word).length + (currentLine ? 1 : 0) > maxLength) {
        lines.push(currentLine.trim() + "[NL]");
        currentLine = word;
      } else {
        currentLine += (currentLine ? " " : "") + word;
      }
    }

    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }

    return lines.join("");
  }

  const formattedQuote = formatWithNewLinesAndReplacements(rawDeathQuote);

  return `
## ${characterName}DeathText
[ConversationText]
[FarRight][Load${characterName}]
${formattedQuote}[A][X]`;
}

if (import.meta.main) {
  console.log(
    formatDeathQuote({
      rawDeathQuote:
        "The roots of the earth run deep... I’ll find peace among them.",
      characterName: "TestCharacter",
    })
  );
}

