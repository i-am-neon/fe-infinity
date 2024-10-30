import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allPortraitOptions } from "@/testData/ai.ts";
import {
  AIPortraitMetadataSchema,
  type PortraitMetadata,
} from "@/types/PortraitMetadata.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { z } from "zod";

export default async function choosePortrait({
  portraitOptions,
  characterIdea,
}: {
  portraitOptions: PortraitMetadata[];
  characterIdea: CharacterIdea;
}): Promise<PortraitMetadata> {
  const systemMessage = `Given a character idea and a list of portrait options, choose the portrait that best fits the character idea.
Return the index of the chosen portrait option.`;

  const prompt = `Character Idea: ${characterIdea.description}

Portrait Options:
${portraitOptions
  .map(
    (portrait, index) => `Index ${index}:
${JSON.stringify(AIPortraitMetadataSchema.parse(portrait), null, 2)}`
  )
  .join("\n")}`;
  // ^ AIPortraitMetadataSchema.parse turns the PortraitMetadata into an AIPortraitMetadata (omits properties we don't need the AI to see)

  const { chosenPortraitIndex } = await generateStructuredData({
    systemMessage,
    prompt,
    schema: z.object({
      chosenPortraitIndex: z
        .number()
        .min(0)
        .max(portraitOptions.length - 1),
    }),
  });

  return portraitOptions[chosenPortraitIndex];
}

if (import.meta.main) {
  const portraitOptions: PortraitMetadata[] = allPortraitOptions;
  const characterIdea: CharacterIdea = {
    name: "Elara",
    gender: "female",
    personality: "determined and compassionate",
    age: "young adult",
    backstory:
      "Elara hails from the Kingdom of Aetheria, known for its mastery of wind magic. Growing up as the daughter of a renowned mage, she was trained in the arts of elemental manipulation from a young age. However, her life took a tragic turn when her village was attacked by the dark cult seeking the Nexus Crystals. In the chaos, she lost her family and her home, igniting a fierce determination within her to protect the remaining crystals and prevent the cult from unleashing the ancient curse. Elara's strengths lie in her mastery of wind magic, allowing her to manipulate the battlefield and support her allies. However, her emotional scars make her hesitant to trust others, often leading her to take on burdens alone. Her motivation is fueled by a desire for justice and to honor her family's memory, pushing her on a personal journey of healing and unity as she learns to rely on her companions and embrace the strength of friendship.",
    firstSeenAs: "ally",
    description:
      "Elara is a young woman with flowing silver hair and piercing blue eyes, often adorned in robes that shimmer like the sky. She carries a staff topped with a crystal that glows with elemental energy, symbolizing her connection to the winds.",
  };

  choosePortrait({ portraitOptions, characterIdea }).then(console.log);
}

