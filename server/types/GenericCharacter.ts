import type { RomCharacter } from "./RomCharacter.ts";

export type GenericCharacter = Omit<
  RomCharacter,
  "deathQuote" | "portraitMetadata"
>;

