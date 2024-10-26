import "jsr:@std/dotenv/load";
import { generateObject } from "ai";
import { openai } from "@ai-sdk/openai";
import {
  CharacterIdeaSchema,
  type CharacterIdea,
} from "../types/ai/CharacterIdea.ts";

export default async function generateMainCharacterIdea(): Promise<CharacterIdea> {
  const prompt = "Generate a main character idea for a fantasy novel.";

  const { object: result } = await generateObject({
    model: openai("gpt-4-turbo"),
    schema: CharacterIdeaSchema,
    prompt,
  });

  return result;
}

if (import.meta.main) {
  generateMainCharacterIdea().then(console.log);
}

