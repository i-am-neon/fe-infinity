import type { RomCharacter } from "@/types/RomCharacter.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";

export default async function assembleRomCharacter({
  characterIdea,
  characterClass,
  portraitMetadata,
  chapterJoined,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
  portraitMetadata: PortraitMetadata;
  chapterJoined: number;
}): Promise<RomCharacter> {
  const csvData = await assembleCharacterCsvData({
    characterIdea,
    characterClass,
  });

  return {
    ...characterIdea,
    portraitMetadata,
    csvData,
    formattedDescription: "TODO: Desc text[X]",
    formattedDeathQuote: "TODO: death quote[X]",
    chapterJoined,
  };
}

