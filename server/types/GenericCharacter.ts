import type { Character } from "./Character.ts";

export type GenericCharacter = Omit<
  Character,
  "formattedDeathQuote" | "portraitMetadata"
>;

