import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import {
  CharacterStatsSchema,
  type CharacterStats,
} from "@/types/ai/CharacterStats.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { characterIdeaExample } from "@/testData/ai.ts";

export default async function generateCharacterStats({
  characterIdea,
  characterClass,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
}): Promise<CharacterStats> {
  const systemMessage = `You are a Fire Emblem Fangame Unit Stats Generator!
Based on the information provided, you will generate the base stats for the character, assuming they are level 1.
These should be in line with Fire Emblem 8 stats and growths based on the character's class, with slight modifications based on the character idea.

Pwr and Magic have been separated in this fangame. Magic users will use "Magic" for their damage, while physical attackers will use "Pwr". Magic users will likely have very low Pwr, and physical attackers will likely have very low Magic.

Some classes may end in "F2" or "_F" to indicate that they are female.`;

  return await generateStructuredData({
    systemMessage,
    prompt: `Character Idea:
${JSON.stringify(characterIdea, null, 2)}

Character Class: ${characterClass}`,
    schema: CharacterStatsSchema,
  });
}

if (import.meta.main) {
  generateCharacterStats({
    characterIdea: characterIdeaExample,
    characterClass: "Cleric",
  }).then(console.log);
}

