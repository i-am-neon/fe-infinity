import { BattleQuote } from "@/types/BattleQuote.ts";
import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";

export default function writeBattleQuotes(battleQuotes: BattleQuote[]): void {
  for (const battleQuote of battleQuotes) {
    const {
      character1,
      character2,
      chapterEventPointer,
      conversationTextPointer,
    } = battleQuote;
    appendToFileInRomBuilderSync({
      pathWithinRomBuilder: "CSV/EAFiles/BattleQuotes.event",
      content: `SpecifiedBattleConvo(${character1},${character2},${chapterEventPointer},0x0,${conversationTextPointer})`,
      isOnNewLine: true,
    });
  }
}

