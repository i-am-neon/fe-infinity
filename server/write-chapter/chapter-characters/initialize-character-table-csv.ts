import writeFileToRomBuilder from "../../fileIO/write-file-to-rom-builder.ts";
import { characterTableCsvHeaders } from "./character-table-csv-headers.ts";

export default async function initializeCharacterTableCsv(): Promise<void> {
  const csvHeadersString = characterTableCsvHeaders.join(",") + "\n";
  await writeFileToRomBuilder(
    "CSV/Tables/Characters/CharacterTable.csv",
    csvHeadersString
  );
}

if (import.meta.main) {
  await initializeCharacterTableCsv();
}
