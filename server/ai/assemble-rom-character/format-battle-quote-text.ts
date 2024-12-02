import { InBattleConversation } from "@/types/in-battle-conversation.ts";

export default function formatBattleQuoteText(
  battleQuoteText: InBattleConversation
): string {
  const MAX_LINE_LENGTH = 30;
  let formattedText = "";

  const wrapText = (text: string): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      if ((currentLine + word).length <= MAX_LINE_LENGTH) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines;
  };

  battleQuoteText.forEach((entry, index) => {
    const { characterName, dialogue } = entry;
    const isLastEntry = index === battleQuoteText.length - 1;

    // Determine face position and load tag
    const faceTag = index % 2 === 0 ? "[FarRight]" : "[FarLeft]";
    const loadTag = `[Load${characterName}]`;

    // Add character's face and load tags
    formattedText += `${faceTag}${loadTag}\n`;

    // Wrap dialogue and format with [NL] and [A]
    const wrappedLines = wrapText(dialogue);
    wrappedLines.forEach((line, i) => {
      formattedText += `${line}${i < wrappedLines.length - 1 ? "[NL]" : ""}\n`;
      if (i % 2 !== 0 || i === wrappedLines.length - 1) {
        formattedText += "[A]";
      }
    });

    // For last entry, end with [A][X], otherwise add [ClearFace]
    if (isLastEntry) {
      formattedText = formattedText.trimEnd(); // Remove trailing newline
      if (!formattedText.endsWith("[A]")) {
        formattedText += "[A]";
      }
      formattedText += "[X]";
    } else {
      formattedText += "[ClearFace]\n";
    }
  });

  // Ensure [A] always appears before [NL] in all cases
  formattedText = formattedText.replace(/(\[NL\]\s*)(\[A\])/g, "$2$1");

  return formattedText.trim();
}

if (import.meta.main) {
  const conversation: InBattleConversation = [
    { characterName: "Lyra", dialogue: "Garrick! Why are you here?" },
    {
      characterName: "Garrick",
      dialogue:
        "This is my calling, Lyra! None of you here ever cared about me. You threw me to the wind after one simple mistake!",
    },
    {
      characterName: "Lyra",
      dialogue:
        "You committed a crime, Garrick. I don't have any regrets. Do you?",
    },
    {
      characterName: "Garrick",
      dialogue: "I regret letting you live... That changes now!",
    },
    { characterName: "Lyra", dialogue: "I see you won't be swayed..." },
  ];

  console.log(formatBattleQuoteText(conversation));
}

