import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { allPortraitOptions, worldIdeaExample } from "@/testData/ai.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import choosePortrait from "@/ai/choose-portrait.ts";
import assembleCharacterCsvData from "@/ai/assemble-rom-character/assemble-character-csv-data/assemble-character-csv-data.ts";

export default async function allAI(): Promise<void> {
  const worldSummary = await generateWorldSummary(worldIdeaExample);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });

  const [mainCharacterChosenPortrait, mainCharacterCsvData] = await Promise.all(
    [
      choosePortrait({
        portraitOptions: allPortraitOptions,
        characterIdea: mainCharacterIdea,
      }),
      assembleCharacterCsvData(mainCharacterIdea),
    ]
  );

  console.log(JSON.stringify(mainCharacterChosenPortrait, null, 2));
  console.log(JSON.stringify(mainCharacterCsvData, null, 2));
}

if (import.meta.main) {
  await allAI();
}

