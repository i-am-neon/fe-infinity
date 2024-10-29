import { worldIdeaExample } from "@/testData/ai.ts";
import allAI from "@/ai/_all.ts";
import assembleAndWriteWholeChapter from "@/write-chapter/assemble-and-write-whole-chapter.ts";

export async function doEverything({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<void> {
  const romChapters = await allAI({ worldIdea });

  console.log("romChapters", JSON.stringify(romChapters, null, 2));

  romChapters.forEach((romChapter) => {
    assembleAndWriteWholeChapter(romChapter);
  });
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const startTime = performance.now();

  await doEverything({ worldIdea: worldIdeaExample });

  const endTime = performance.now();
  console.log(
    `Execution time: ${(endTime - startTime).toFixed(2)} milliseconds`
  );
}

