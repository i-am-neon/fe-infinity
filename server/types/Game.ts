import { RomChapter } from "@/types/RomChapter.ts";
import { RomCharacter } from "@/types/RomCharacter.ts";

export type Game = {
  chapters: RomChapter[];
  characters: RomCharacter[];
};
