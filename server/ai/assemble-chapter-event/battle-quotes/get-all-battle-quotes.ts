import { InBattleConversation } from "@/types/in-battle-conversation.ts";
import getBattleConversationPairs from "@/ai/assemble-chapter-event/battle-quotes/get-battle-conversation-pairs.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import generateBattleQuote from "@/ai/assemble-chapter-event/battle-quotes/generate-battle-quote.ts";
import { BattleQuote } from "@/types/BattleQuote.ts";

export default async function getAllBattleQuotes({
  existingPartyCharacters,
  newPlayableCharacters,
  boss,
  chapterId,
}: {
  existingPartyCharacters: CharacterIdea[];
  newPlayableCharacters: CharacterIdea[];
  boss: CharacterIdea;
  chapterId: string;
}): Promise<BattleQuote[]> {
  const conversationPairs = getBattleConversationPairs({
    existingPartyCharacters,
    newPlayableCharacters,
    boss,
  });
  const battleConversations: InBattleConversation[] = await Promise.all(
    conversationPairs.map(async ({ character1, character2 }) => {
      const battleOverview = `The battle begins! ${character1.name} and ${character2.name} face off on the battlefield.`;
      const preChapterScene = `The two warriors meet on the battlefield. ${character1.name} is ready to fight.`;
      return await generateBattleQuote({
        character1,
        character2,
        preChapterScene,
        battleOverview,
      });
    })
  );

  return conversationPairs.map(({ character1, character2 }, index) => ({
    character1: character1.name,
    character2: character2.name,
    chapterId,
    conversationTextPointer: `battle_quote_${character1.name}_${character2.name}`,
    conversation: battleConversations[index],
  }));
}

