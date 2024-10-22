import appendToFileInRomBuilderSync from "../../../fileIO/append-to-file-in-rom-builder-sync.ts";
import type { CharacterDataForCsv } from "../../../types/CharacterDataForCsv.ts";
import { TEST_CHAPTER } from "../../whole-chapter/test-data.ts";
import characterDataToCsv from "./character-data-to-csv.ts";
import initializeCharacterTableCsv from "./initialize-character-table-csv.ts";

export default function writeCharacterDataToCsv(
  characterData: CharacterDataForCsv
): void {
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "CSV/Tables/Characters/CharacterTable.csv",
    content: characterDataToCsv(characterData),
    isOnNewLine: true,
    createIfFileDoesNotExist: false,
  });
}

if (import.meta.main) {
  // await initializeCharacterTableCsv();
  // writeCharacterDataToCsv(TEST_CHAPTER.characters[0]);
}

