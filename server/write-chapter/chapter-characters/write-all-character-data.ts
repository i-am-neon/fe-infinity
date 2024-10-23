import type { Character } from "../../types/Character.ts";
import writeCharacterDataToCsv from "./character-table-csv/write-character-data-to-csv.ts";
import writeCharacterDescriptionText from "./write-character-description-text.ts";
import writeCharacterNameText from "./write-character-name-text.ts";
import writeDeathQuote from "./write-death-quote.ts";
import writePortrait from "./write-portrait.ts";

export default function writeAllCharacterData(character: Character): void {
  writeCharacterNameText({ name: character.name });
  writeCharacterDescriptionText({
    characterName: character.name,
    formattedDescription: character.formattedDescription,
  });
  writeCharacterDataToCsv(character.csvData);
  writePortrait({
    characterName: character.name,
    portraitMetadata: character.portraitMetadata,
  });
  writeDeathQuote({
    characterName: character.name,
    formattedDeathQuote: character.formattedDeathQuote,
  });
}

