import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { allPortraitOptions, worldIdeaExample } from "@/testData/ai.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import choosePortrait from "@/ai/choose-portrait.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";
import type { RomChapter } from "@/types/RomChapter.ts";
import generateStoryArc from "@/ai/generate-story-arc.ts";

export default async function allAI({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<RomChapter[]> {
  const worldSummary = await generateWorldSummary(worldIdea);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const [mainCharacterChosenPortrait, mainCharacterCsvData, storyArc] =
    await Promise.all([
      choosePortrait({
        portraitOptions: allPortraitOptions,
        characterIdea: mainCharacterIdea,
      }),
      assembleCharacterCsvData(mainCharacterIdea),
      generateStoryArc({
        worldSummary,
        mainCharacterIdea,
        numberOfChapters: 3,
      }),
    ]);

  console.log(JSON.stringify(mainCharacterChosenPortrait, null, 2));
  console.log(JSON.stringify(mainCharacterCsvData, null, 2));
  console.log(JSON.stringify(storyArc, null, 2));

  return [];
}

if (import.meta.main) {
  await allAI({ worldIdea: worldIdeaExample });
}

