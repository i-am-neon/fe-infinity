import type { RomCharacter } from "@/types/RomCharacter.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";
import formatCharacterDescription from "@/ai/assemble-rom-character/format-character-description.ts";
import formatDeathQuote from "@/ai/assemble-rom-character/format-death-quote.ts";

export default async function assembleRomCharacter({
  characterIdea,
  characterClass,
  portraitMetadata,
  chapterJoined,
  isLord,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
  portraitMetadata: PortraitMetadata;
  chapterJoined: number;
  isLord: boolean;
}): Promise<RomCharacter> {
  const csvData = await assembleCharacterCsvData({
    characterIdea,
    characterClass,
    isLord,
  });

  return {
    ...characterIdea,
    portraitMetadata,
    csvData,
    formattedDescription: formatCharacterDescription(
      characterIdea.inGameDescription
    ),
    formattedDeathQuote: formatDeathQuote({
      rawDeathQuote: characterIdea.deathQuote,
      characterName: characterIdea.name,
    }),
    chapterJoined,
  };
}

