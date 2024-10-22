import type { CharacterDataForCsv } from "./CharacterDataForCsv.ts";
import type { PortraitMetadata } from "./PortraitMetadata.ts";

export type Character = {
  name: string;
  csvData: CharacterDataForCsv;
  formattedDescription: string;
  portraitMetadata: PortraitMetadata;
};

