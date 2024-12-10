import { z } from "zod";
import { CharacterIdeaSchema } from "@/types/ai/CharacterIdea.ts";

export const ChapterIdeaSchema = z.object({
  chapterTitle: z.string(),
  premise: z.string(),
  newPlayableCharacters: CharacterIdeaSchema.array().optional(),
  boss: CharacterIdeaSchema,
  preChapterScene: z.string(),
  battleOverview: z.string(),
  postChapterScene: z.string(),
});

export type ChapterIdea = z.infer<typeof ChapterIdeaSchema>;

