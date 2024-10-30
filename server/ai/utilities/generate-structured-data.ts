import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import "jsr:@std/dotenv/load";
import { ZodSchema } from "zod";

export default async function generateStructuredData<T>({
  schema,
  systemMessage,
  prompt,
  temperature = 0,
}: {
  schema: ZodSchema<T>;
  systemMessage: string;
  prompt: string;
  temperature?: number;
}): Promise<T> {
  const { object: result } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema,
    system: systemMessage,
    prompt,
    temperature,
  });
  return result;
}

