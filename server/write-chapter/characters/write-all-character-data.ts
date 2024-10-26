import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import type { RomCharacter } from "../../types/RomCharacter.ts";
import type { GenericCharacter } from "@/types/GenericCharacter.ts";
import writeCharacterDataToCsv from "@/write-chapter/characters/character-table-csv/write-character-data-to-csv.ts";
import writeCharacterDescriptionText from "@/write-chapter/characters/write-character-description-text.ts";
import writeCharacterNameText from "@/write-chapter/characters/write-character-name-text.ts";
import writeDeathQuote from "@/write-chapter/characters/write-death-quote.ts";
import writePortrait from "@/write-chapter/characters/write-portrait.ts";

export default function writeAllCharacterData(
  character: RomCharacter | GenericCharacter
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

