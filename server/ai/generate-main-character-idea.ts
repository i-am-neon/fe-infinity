import "jsr:@std/dotenv/load";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import {
  CharacterIdeaSchema,
  type CharacterIdea,
} from "../types/ai/CharacterIdea.ts";

const systemMessage = `You are a Fire Emblem Fangame Main Character Builder!

Based on the world provided, create a compelling protagonist.
Within their "backstory" property, define their strengths, weaknesses, motivations, and personal journey.
Ensure the character fits within the world's and history and societies.

The "firstSeenAs" property will always be set to "ally" for the main character.`;

export default async function generateMainCharacterIdea(): Promise<CharacterIdea> {
  const prompt = "Generate a main character idea for a fantasy novel.";

  const { object: result } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: CharacterIdeaSchema,
    system: systemMessage,
    prompt,
  });

  return result;
}

if (import.meta.main) {
  generateMainCharacterIdea().then(console.log);
}

