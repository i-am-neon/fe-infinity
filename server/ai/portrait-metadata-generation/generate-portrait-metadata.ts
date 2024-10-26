import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import "jsr:@std/dotenv/load";
import {
  AIPortraitMetadataSchema,
  type AIPortraitMetadata,
} from "../../types/PortraitMetadata.ts";

const systemMessage = `Generate metadata for a portrait of this character.
Guidelines:
- "vibe" should be a three-word description of the character's vibe separated by commas.
- "accessories" should include any eye wear, jewelry, etc.`;

async function generatePortraitMetadata({
  url,
}: {
  url: string;
}): Promise<AIPortraitMetadata> {
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    maxTokens: 512,
    system: systemMessage,
    schema: AIPortraitMetadataSchema,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            image: new URL(url),
          },
        ],
      },
    ],
  });

  return object;
}

if (import.meta.main) {
  const characters = [
    {
      name: "Seraphina",
      url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Ghostblade/%7BGhostblade%7D%20OC%201%20%5BF2E%5D.png",
    },
    // {
    //   name: "Lira",
    //   url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Kanna/%7BKanna%7D%20%5BF2E%5D%20OC%2015.png",
    // },
    // {
    //   name: "Igor",
    //   url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Ghostblade/%7BGhostblade%7D%20OC%20Miyas%20Lord%20%5BF2E%5D.png",
    // },
    // {
    //   name: "Ligma",
    //   url: "https://raw.githubusercontent.com/Klokinator/FE-Repo/main/Portrait%20Repository/Spriting%20Community%20OC's%20(Grouped%20by%20Artist)/Goldblitzx/%7BGoldblitzx%7D%20%5BF2U%5D%20OC%201.png",
    // },
  ];

  const results = await Promise.all(
    characters.map(async ({ name, url }) => {
      try {
        const metadata = await generatePortraitMetadata({ url });
        return { name, metadata };
      } catch (error) {
        return { name, error };
      }
    })
  );

  results.forEach(({ name, metadata, error }) => {
    console.log(`${name}:`);
    if (error) {
      console.error(error);
    } else {
      console.log(metadata);
    }
    console.log("=====================");
  });
}

