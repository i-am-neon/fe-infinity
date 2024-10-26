import "jsr:@std/dotenv/load";
import {
  CharacterIdeaSchema,
  type CharacterIdea,
} from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";

const systemMessage = `You are a Fire Emblem Fangame Main Character Builder!

Based on the world provided, create a compelling protagonist.
Within their "backstory" property, define their strengths, weaknesses, motivations, and personal journey.
Ensure the character fits within the world's and history and societies.

The "firstSeenAs" property will always be set to "ally" for the main character.`;

export default async function generateMainCharacterIdea({
  worldIdea,
}: {
  worldIdea: string;
}): Promise<CharacterIdea> {
  return await generateStructuredData({
    schema: CharacterIdeaSchema,
    systemMessage,
    prompt: worldIdea,
  });
}

if (import.meta.main) {
  generateMainCharacterIdea({
    worldIdea:
      "In the land of Valdoria, five elemental kingdoms vie for control over the ancient Nexus Crystals, powerful relics that bind their world together, but a dark cult threatens to shatter this balance, awakening an ancient curse.",
  }).then(console.log);
}

