import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import "jsr:@std/dotenv/load";
import { ZodSchema } from "zod";

export default async function generateStructuredData<T>({
  schema,
  systemMessage,
  prompt,
  temperature = 0,
  model = "gpt-4o-mini",
}: {
  schema: ZodSchema<T>;
  systemMessage: string;
  prompt: string;
  temperature?: number;
  model?: "gpt-4o-mini" | "gpt-4o";
}): Promise<T> {
  const { object: result } = await generateObject({
    model: openai(model),
    schema,
    system: systemMessage,
    prompt,
    temperature,
  });
  return result;
}

