import type { RomCharacter } from "./RomCharacter.ts";

export type GenericCharacter = Omit<
  RomCharacter,
  "formattedDeathQuote" | "deathQuote" | "portraitMetadata"
>;

