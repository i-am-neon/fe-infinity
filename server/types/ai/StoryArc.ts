import { ChapterIdeaSchema } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";

export const StoryArcSchema = z.object({
  premise: z.string(),
  chapterIdeas: ChapterIdeaSchema.array(),
});

export type StoryArc = z.infer<typeof StoryArcSchema>;

