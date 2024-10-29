import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { z } from "zod";
import { mainCharacterIdeaExample } from "@/testData/ai.ts";
import type { Affinity } from "@/types/CharacterDataForCsv.ts";

export default async function generateAffinity({
  characterIdea,
}: {
  characterIdea: CharacterIdea;
}): Promise<Affinity> {
  const systemMessage = `You are an affinity chooser for a fire emblem 8 character. Given a character idea, you must choose one affinity.
`;

  const { affinity } = await generateStructuredData({
    systemMessage,
    prompt: JSON.stringify(characterIdea, null, 2),
    schema: z.object({
      affinity: z.union([
        z.literal("FireAff"),
        z.literal("ThunderAff"),
        z.literal("WindAff"),
        z.literal("WaterAff"),
        z.literal("DarkAff"),
        z.literal("LightAff"),
        z.literal("AnimaAff"),
      ]),
    }),
  });

  return affinity;
}

if (import.meta.main) {
  generateAffinity({ characterIdea: mainCharacterIdeaExample }).then(
    console.log
  );
}

