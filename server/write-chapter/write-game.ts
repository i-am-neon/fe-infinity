import { Game } from "@/types/Game.ts";
import assembleAndWriteWholeChapter from "@/write-chapter/assemble-and-write-whole-chapter.ts";
import writeAllCharacterData from "@/write-chapter/characters/write-all-character-data.ts";
import finalizeFiles from "@/write-chapter/setup-and-finalize/finalize-files.ts";
import initializeFiles from "@/write-chapter/setup-and-finalize/initialize-files.ts";
import { TEST_CHAPTER, TEST_CHARACTERS } from "@/testData/test-data.ts";

export default async function writeGame(game: Game): Promise<void> {
  await initializeFiles();

  game.chapters.forEach((romChapter) => {
    assembleAndWriteWholeChapter(romChapter);
  });

  game.characters.forEach((character) => {
    writeAllCharacterData(character);
  });

  finalizeFiles();
}

if (import.meta.main) {
  await writeGame({
    chapters: [TEST_CHAPTER],
    characters: TEST_CHARACTERS,
  });
}
