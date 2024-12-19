import cleanText from "@/lib/clean-text/clean-text.ts";

export default function formatCharacterDescription(
  description: string
): string {
  const maxLength = 30;
  const words = description.split(" ");
  let currentLine = "";
  const lines: string[] = [];

  for (const word of words) {
    // Check if adding the next word exceeds the limit
    if ((currentLine + word).length + (currentLine ? 1 : 0) > maxLength) {
      lines.push(currentLine.trim() + "[NL]");
      currentLine = word;
    } else {
      currentLine += (currentLine ? " " : "") + word;
    }
  }

  // Push the last line if it exists
  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  const resultPreClean = lines.join("").trim() + "[X]";
  return cleanText(resultPreClean);
}

if (import.meta.main) {
  console.log(
    formatCharacterDescription(
      "A determined young woman navigating the allure of power in Eldralis."
    )
  );
}

