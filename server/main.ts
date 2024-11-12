import generateGame from "@/ai/generate-game.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import writeGame from "@/write-chapter/write-game.ts";

export async function doEverything({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<void> {
  const game = await generateGame({ worldIdea });

  console.log("game", JSON.stringify(game, null, 2));

  await writeGame(game);

  // TODO: if no errors, run `./run.sh` in romBuilder
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const startTime = performance.now();

  await doEverything({ worldIdea: worldIdeaExample });

  const endTime = performance.now();
  console.log(
    `Execution time: ${((endTime - startTime) / 1000).toFixed(2)} seconds`
  );
}

