import generateGame from "@/ai/generate-game.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import writeGame from "@/write-chapter/write-game.ts";

export async function doEverything({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<void> {
  const startTime = performance.now();

  const game = await generateGame({ worldIdea });

  console.log("game", JSON.stringify(game, null, 2));

  await writeGame(game);

  const endTime = performance.now();

  console.log(
    `✅✅✅ AI time: ${((endTime - startTime) / 1000).toFixed(2)} seconds`
  );

  console.log("==================");
  console.log("==================");
  console.log("Building Rom...");
  console.log("==================");
  console.log("==================");

  // Save the current working directory
  const originalDir = Deno.cwd();

  try {
    // Change to the romBuilder directory
    Deno.chdir("../romBuilder");

    const deleteRomSaveFileCommand = new Deno.Command("bash", {
      args: ["./delete-sav.sh"],
      stdout: "inherit",
      stderr: "inherit",
    });
    await deleteRomSaveFileCommand.output();

    const runCommand = new Deno.Command("bash", {
      args: ["./run.sh"],
      stdout: "inherit",
      stderr: "inherit",
    });
    await runCommand.output();
  } finally {
    // Change back to the original directory
    Deno.chdir(originalDir);
  }
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const startTime = performance.now();

  await doEverything({ worldIdea: worldIdeaExample });

  const endTime = performance.now();
  console.log(
    `TOTAL time: ${((endTime - startTime) / 1000).toFixed(2)} seconds`
  );
}

