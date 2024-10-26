import "jsr:@std/dotenv/load";
import {
  CharacterIdeaSchema,
  type CharacterIdea,
} from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import type { WorldSummary } from "@/types/ai/WorldSummary.ts";
import { worldSummaryExample } from "@/testData/ai.ts";

const systemMessage = `You are a Fire Emblem Fangame Main Character Builder!

Based on the world provided, create a compelling protagonist.
Within their "backstory" property, define their strengths, weaknesses, motivations, and personal journey.
Ensure the character fits within the world's and history and societies.

The "firstSeenAs" property will always be set to "ally" for the main character.`;

export default async function generateMainCharacterIdea({
  worldSummary,
}: {
  worldSummary: WorldSummary;
}): Promise<CharacterIdea> {
  const prompt = `World Summary: ${JSON.stringify(worldSummary, null, 2)}`;

  return await generateStructuredData({
    schema: CharacterIdeaSchema,
    systemMessage,
    prompt,
  });
}

if (import.meta.main) {
  generateMainCharacterIdea({
    worldSummary: worldSummaryExample,
  }).then(console.log);
}

