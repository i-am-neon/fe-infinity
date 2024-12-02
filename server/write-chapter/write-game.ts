import { TEST_GAME } from "@/testData/test-game-obj.ts";
import { Game } from "@/types/Game.ts";
import assembleAndWriteWholeChapter from "@/write-chapter/assemble-and-write-whole-chapter.ts";
import writeAllCharacterData from "@/write-chapter/characters/write-all-character-data.ts";
import finalizeFiles from "@/write-chapter/setup-and-finalize/finalize-files.ts";
import initializeFiles from "@/write-chapter/setup-and-finalize/initialize-files.ts";

export default async function writeGame(game: Game): Promise<void> {
  await initializeFiles();

  // Create arrays of promises for chapters and characters
  const chapterPromises = game.chapters.map((romChapter) =>
    assembleAndWriteWholeChapter(romChapter)
  );

  const characterPromises = game.characters.map((character) =>
    writeAllCharacterData(character)
  );

  // Wait for all promises to complete
  await Promise.all([...chapterPromises, ...characterPromises]);

  // Finalize files after all async operations are complete
  finalizeFiles();
}

if (import.meta.main) {
  await writeGame(TEST_GAME);
}
