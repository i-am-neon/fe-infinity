import { InBattleConversation } from "@/types/in-battle-conversation.ts";

export type BattleQuote = {
  character1: string;
  character2: string;
  chapterId: string;
  conversationTextPointer: string;
  conversation: InBattleConversation;
};

