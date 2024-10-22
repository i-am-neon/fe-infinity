import type { Character } from "../../types/Character.ts";
import writeCharacterNameText from "./write-character-name-text.ts";

export default async function writeAllCharacterData(
  character: Character
): Promise<void> {
  writeCharacterNameText(character.displayName);
}

