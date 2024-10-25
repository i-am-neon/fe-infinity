import appendToFileInRomBuilderSync from "../../fileIO/append-to-file-in-rom-builder-sync.ts";
import type { Character } from "../../types/Character.ts";
import type { GenericCharacter } from "../../types/GenericCharacter.ts";
import writeCharacterDataToCsv from "./character-table-csv/write-character-data-to-csv.ts";
import writeCharacterDescriptionText from "./write-character-description-text.ts";
import writeCharacterNameText from "./write-character-name-text.ts";
import writeDeathQuote from "./write-death-quote.ts";
import writePortrait from "./write-portrait.ts";

export default function writeAllCharacterData(
  character: Character | GenericCharacter
): void {
  writeCharacterNameText({ name: character.name });
  writeCharacterDescriptionText({
    characterName: character.name,
    formattedDescription: character.formattedDescription,
  });
  writeCharacterDataToCsv(character.csvData);

  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Definitions/Characters.s",
    content: `${character.name}`,
    isOnNewLine: true,
  });

  const isNonGenericCharacter = "portraitMetadata" in character;
  if (isNonGenericCharacter) {
    writePortrait({
      characterName: character.name,
      portraitMetadata: character.portraitMetadata,
    });
    writeDeathQuote({
      characterName: character.name,
      formattedDeathQuote: character.formattedDeathQuote,
    });
  }
}

