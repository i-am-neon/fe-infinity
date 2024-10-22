import type { Character } from "../../types/Character.ts";
import writeCharacterDataToCsv from "./character-table-csv/write-character-data-to-csv.ts";
import writeCharacterDescriptionText from "./write-character-description-text.ts";
import writeCharacterNameText from "./write-character-name-text.ts";

export default function writeAllCharacterData(character: Character): void {
  writeCharacterNameText({ name: character.name });
  writeCharacterDescriptionText({
    characterName: character.name,
    formattedDescription: character.formattedDescription,
  });
  writeCharacterDataToCsv(character.csvData);
}

