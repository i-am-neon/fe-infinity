import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import cleanText from "@/lib/clean-text/clean-text.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import {
  InBattleConversation,
  InBattleConversationSchema,
} from "@/types/in-battle-conversation.ts";
import { z } from "zod";

export default async function generateBattleQuote({
  character1,
  character2,
  preChapterScene,
  battleOverview,
}: {
  character1: CharacterIdea;
  character2: CharacterIdea;
  preChapterScene: string;
  battleOverview: string;
}): Promise<InBattleConversation> {
  const systemMessage = `You are creating in-battle conversations for a Fire Emblem fan game.
You will be given two characters and a chapter idea. You must generate a conversation between the two characters
that fits the chapter idea.

The conversation should be a brief back and forth, with each character speaking at least once. and maximum three separate turns.`;
  const { conversation } = await generateStructuredData({
    systemMessage,
    prompt: `Character 1: ${JSON.stringify(
      character1
    )}\n\nCharacter 2: ${JSON.stringify(
      character2
    )}\n\nPre-Chapter Scene: ${preChapterScene}\n\nBattle Overview: ${battleOverview}`,
    schema: z.object({ conversation: InBattleConversationSchema }),
    temperature: 1,
  });

  return conversation.map((c) => ({
    characterName: c.characterName,
    dialogue: cleanText(c.dialogue),
  }));
}

if (import.meta.main) {
  const character1: CharacterIdea = {
    name: "Elara",
    gender: "female",
    age: "young adult",
    personality: "Kind-hearted but fierce in battle.",
    backstory:
      "Elara was raised in a remote village where she learned archery from her father. Despite her peaceful upbringing, she always felt a calling to help those in need. When her village was attacked, she joined the resistance as an archer, using her skills to protect the innocent.",
    firstSeenAs: "ally",
    physicalDescription: "",
    inGameDescription: "",
    deathQuote: "",
  };

  const character2: CharacterIdea = {
    name: "Sorren",
    gender: "male",
    personality: "Cunning and manipulative, with a thirst for power.",
    age: "mature adult",
    backstory:
      "Once a respected scholar in Aeloria, Sorren became obsessed with the sigils and their power. He turned to dark magic, seeking to awaken the slumbering god to gain ultimate strength. Now, he leads the Veil's efforts to plunge Eldralis into chaos.",
    firstSeenAs: "boss",
    physicalDescription:
      "A tall man with long, flowing robes and piercing eyes, exuding an aura of dark magic.",
    inGameDescription: "A cunning sorcerer seeking ultimate power.",
    deathQuote: "You... will regret this... the darkness will rise.",
  };

  const preChapterScene =
    "Elara receives word that the dark sorcerer Sorren has been spotted near her village, corrupting the land. Determined to protect her home, she sets out to confront him, hoping to gather allies along the way. Kiran, a brash warrior from Drakthar, joins her on this perilous journey.";
  const battleOverview =
    "Elara and Kiran must navigate through the corrupted Whispering Woods, battling Sorren's minions and facing the sorcerer himself. The objective is to defeat Sorren and cleanse the land of his dark magic.";

  const result = await generateBattleQuote({
    character1,
    character2,
    preChapterScene,
    battleOverview,
  });

  console.log("result", JSON.stringify(result, null, 2));
}

