import { BattleQuote } from "@/types/BattleQuote.ts";
import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import formatBattleQuoteText from "@/ai/assemble-rom-character/format-battle-quote-text.ts";

export default function writeBattleQuotes(battleQuotes: BattleQuote[]): void {
  for (const battleQuote of battleQuotes) {
    const { character1, character2, chapterId, conversationTextPointer } =
      battleQuote;
    appendToFileInRomBuilderSync({
      pathWithinRomBuilder: "CSV/EAFiles/BattleQuotes.event",
      content: `SpecifiedBattleConvo(${character1},${character2},${chapterId},0x0,${conversationTextPointer})`,
      isOnNewLine: true,
    });
    appendToFileInRomBuilderSync({
      pathWithinRomBuilder: `Text/Chapters/build/${chapterId}.s`,
      content: `\n## ${conversationTextPointer}\n${formatBattleQuoteText(
        battleQuote.conversation
      )}`,
      isOnNewLine: true,
    });
  }
}

