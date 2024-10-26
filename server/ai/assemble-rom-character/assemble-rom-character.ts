import type { RomCharacter } from "@/types/RomCharacter.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";

export default async function assembleRomCharacter({
  characterIdea,
  portraitMetadata,
}: {
  characterIdea: CharacterIdea;
  portraitMetadata: PortraitMetadata;
}): Promise<RomCharacter> {
  const csvData = await assembleCharacterCsvData(characterIdea);

  return {
    name: characterIdea.name,
    portraitMetadata,
    csvData,
    formattedDescription: "",
    formattedDeathQuote: "",
  };
}

