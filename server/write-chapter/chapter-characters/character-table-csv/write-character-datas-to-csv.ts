import appendToFileInRomBuilderSync from "../../../fileIO/append-to-file-in-rom-builder-sync.ts";
import type { CharacterDataForCsv } from "../../../types/CharacterDataForCsv.ts";
import characterDataToCsv from "./character-data-to-csv.ts";
import { TEST_CHAPTER } from "../../whole-chapter/test-data.ts";
import initializeCharacterTableCsv from "./initialize-character-table-csv.ts";

export default function writeCharacterDatasToCsv(
  characterDatas: CharacterDataForCsv[]
): void {
  characterDatas.forEach((characterData) => {
    appendToFileInRomBuilderSync({
      pathWithinRomBuilder: "CSV/Tables/Characters/CharacterTable.csv",
      content: characterDataToCsv(characterData),
      isOnNewLine: true,
    });
  });
}

if (import.meta.main) {
  // await initializeCharacterTableCsv();
  // writeCharacterDatasToCsv(TEST_CHAPTER.characters);
}

