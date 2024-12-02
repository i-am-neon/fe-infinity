import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { CharacterDataForCsv } from "./CharacterDataForCsv.ts";
import type { PortraitMetadata } from "./PortraitMetadata.ts";

export type RomCharacter = Omit<
  CharacterIdea,
  "physicalDescription" | "inGameDescription" | "deathQuote"
> & {
  name: string;
  csvData: CharacterDataForCsv;
  formattedDescription: string;
  formattedDeathQuote: string;
  portraitMetadata: PortraitMetadata;
  chapterJoined: number;
};

