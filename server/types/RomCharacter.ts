import type { CharacterDataForCsv } from "./CharacterDataForCsv.ts";
import type { PortraitMetadata } from "./PortraitMetadata.ts";

export type RomCharacter = {
  name: string;
  csvData: CharacterDataForCsv;
  formattedDescription: string;
  formattedDeathQuote: string;
  portraitMetadata: PortraitMetadata;
};

