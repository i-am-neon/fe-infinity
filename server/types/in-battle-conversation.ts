import { z } from "zod";

export const InBattleConversationSchema = z.array(
  z.object({
    characterName: z.string(),
    dialogue: z.string(),
  })
);

export type InBattleConversation = z.infer<typeof InBattleConversationSchema>;
