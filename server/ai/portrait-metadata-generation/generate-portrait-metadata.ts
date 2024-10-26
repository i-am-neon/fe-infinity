import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import "jsr:@std/dotenv/load";
import { AIPortraitMetadataSchema } from "../../types/PortraitMetadata.ts";

async function generatePortraitMetadata({
  url,
}: {
  url: string;
}): Promise<void> {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    maxTokens: 512,
    schema: AIPortraitMetadataSchema,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "Generate metadata for a portrait of this character.",
          },
          {
            type: "image",
            image: new URL(url),
          },
        ],
      },
    ],
  });

  console.log(object);
}

if (import.meta.main) {
  generatePortraitMetadata({
    url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Ghostblade/%7BGhostblade%7D%20OC%201%20%5BF2E%5D.png",
  }).catch(console.error);
}

