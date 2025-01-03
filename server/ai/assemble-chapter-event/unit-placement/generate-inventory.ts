import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import z from "zod";
import { mainCharacterIdeaExample } from "@/testData/ai.ts";
import type { WeaponType } from "@/types/WeaponType.ts";
import { WEAPON_OPTIONS, ITEMS } from "./item-options.ts";

export default async function generateInventory({
  characterIdea,
  characterClass,
  availableWeaponTypes,
  level,
}: {
  characterIdea: CharacterIdea;
  characterClass: string;
  availableWeaponTypes: WeaponType[];
  level: number;
}): Promise<string[]> {
  // Filter weapon options based on the availableWeaponTypes
  const relevantWeaponOptions = availableWeaponTypes
    .map((type) => {
      const options = WEAPON_OPTIONS[type] || [];
      return options.length > 0
        ? `${type}:\n  • ${options.join("\n  • ")}`
        : "";
    })
    .filter(Boolean)
    .join("\n\n");

  const systemMessage = `You will decide the inventory of a given Fire Emblem 8 fangame character as they are first seen in the game.
You will be given the character's idea, class, and level. You will return an array of strings representing the items in the character's inventory.
  
You must return a list of item names that does not exceed 4. In most cases the character will have fewer than 4 items.

Occasionally you can get creative and add in a special item.

Weapon options:

${relevantWeaponOptions}

Item options:

  • ${ITEMS.join("\n  • ")}`;
  const prompt = `CharacterIdea: ${JSON.stringify(
    characterIdea,
    null,
    2
  )}\n CharacterClass: ${characterClass}\n Available Weapon Types: ${availableWeaponTypes}\n Level: ${level}`;

  const { inventory } = await generateStructuredData({
    systemMessage,
    prompt,
    schema: z.object({
      inventory: z
        .array(z.string())
        .max(4, "Inventory must not exceed 4 items."),
    }),
    temperature: 0.5,
  });

  // Take out all spaces from the items
  return inventory.map((item) => item.replace(/\s+/g, ""));
}

if (import.meta.main) {
  generateInventory({
    characterIdea: mainCharacterIdeaExample,
    characterClass: "Valkyrie",
    availableWeaponTypes: ["Light", "Staff"],
    level: 10,
  }).then(console.log);
}

