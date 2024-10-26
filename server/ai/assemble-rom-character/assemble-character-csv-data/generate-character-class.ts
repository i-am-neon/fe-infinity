import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { z } from "zod";
import { characterIdeaExample } from "@/testData/ai.ts";
import {
  classOptionsMaleOnly,
  classOptionsFemaleOnly,
  classOptionsAllGenders,
} from "@/ai/assemble-rom-character/assemble-character-csv-data/class-options.ts";

export default async function generateCharacterClass({
  characterIdea,
}: {
  characterIdea: CharacterIdea;
}): Promise<string> {
  const systemMessage = `You are a Fire Emblem Fangame Unit Class Chooser!
Based on the information provided, you will choose the most likely class for the character, returning the class name.`;

  const genderSpecificClasses =
    characterIdea.gender === "male"
      ? classOptionsMaleOnly
      : classOptionsFemaleOnly;
  const genderedClassOptions = [
    ...classOptionsAllGenders,
    ...genderSpecificClasses,
  ];

  const prompt = `Character Idea: ${JSON.stringify(characterIdea, null, 2)}

Class options:
${JSON.stringify(genderedClassOptions, null, 2)}`;

  const { className } = await generateStructuredData({
    systemMessage,
    prompt,
    schema: z.object({
      className: z.string(),
    }),
  });

  return className;
}

if (import.meta.main) {
  generateCharacterClass({ characterIdea: characterIdeaExample }).then(
    console.log
  );
}

