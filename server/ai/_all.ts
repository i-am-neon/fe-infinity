import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { allPortraitOptions, worldIdeaExample } from "@/testData/ai.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";
import choosePortrait from "@/ai/choose-portrait.ts";

export default async function allAI(): Promise<void> {
  const worldSummary = await generateWorldSummary(worldIdeaExample);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });
  const chosenPortrait = await choosePortrait({
    portraitOptions: allPortraitOptions,
    characterIdea: mainCharacterIdea,
  });
}

if (import.meta.main) {
  await allAI();
}

