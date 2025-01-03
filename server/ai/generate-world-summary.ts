import {
  worldSummarySchema,
  type WorldSummary,
} from "@/types/ai/WorldSummary.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";

export default async function generateWorldSummary(
  worldIdea: string
): Promise<WorldSummary> {
  const systemMessage = `You are a Fire Emblem Fangame World Builder!

Your task is to create a detailed, unique, and inventive world and storyline for a Fire Emblem fangame,
ensuring it is original and distinct from existing games. The user will provide a few words
describing the general direction of the world or storyline they envision.

Based on their input, generate a rich and immersive setting tailored to their vision.

In your response, you must return these sections:

- World Description
- Geography with a breakdown of each region
- Overview of world history/mythology
- Factions: list the world's factions/nations/societies

Notes:
- The name of the world must not be "Aetheria" or anything similar. Choose something unique!
- The world will be used in a Fire Emblem 8 engine. It should not be similar to any existing Fire Emblem game, but it should be feasible within the constraints of the engine. This means:
  - No futuristic settings
  - No new forms of magic or weapons
  - All characters must be human
  - The only available mounts are horses, pegasi, and wyverns
`;

  return await generateStructuredData({
    systemMessage,
    prompt: worldIdea,
    schema: worldSummarySchema,
    temperature: 1,
  });
}

if (import.meta.main) {
  const worldIdea =
    "In the fractured realm of Eldralis, rival kingdoms wield ancient sigils that grant immense power but corrupt the soul, forcing unlikely heroes to unite against a shadowy order seeking to awaken a slumbering god and plunge the world into eternal darkness.";
  generateWorldSummary(worldIdea).then((summary) =>
    console.log(JSON.stringify(summary, null, 2))
  );
}

