import generateWorldSummary from "@/ai/generate-world-summary.ts";
import { worldIdeaExample } from "@/testData/ai.ts";
import generateMainCharacterIdea from "@/ai/generate-main-character-idea.ts";

export default async function allAI(): Promise<void> {
  const worldSummary = await generateWorldSummary(worldIdeaExample);
  const mainCharacterIdea = await generateMainCharacterIdea({ worldSummary });
}

if (import.meta.main) {
  await allAI();
}

