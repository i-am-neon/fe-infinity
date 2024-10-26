import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";
import characterDataToCsv from "@/write-chapter/characters/character-table-csv/character-data-to-csv.ts";

export default function writeCharacterDataToCsv(
  characterData: CharacterDataForCsv
): void {
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "CSV/Tables/Characters/CharacterTable.csv",
    content: characterDataToCsv(characterData),
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  // await initializeCharacterTableCsv();
  // writeCharacterDataToCsv(TEST_CHAPTER.characters[0]);
}

