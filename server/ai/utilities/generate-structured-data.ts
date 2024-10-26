import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import "jsr:@std/dotenv/load";
import { ZodSchema } from "zod";

export default async function generateStructuredData<T>({
  schema,
  systemMessage,
  prompt,
}: {
  schema: ZodSchema<T>;
  systemMessage: string;
  prompt: string;
}): Promise<T> {
  const { object: result } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema,
    system: systemMessage,
    prompt,
  });
  return result;
}

