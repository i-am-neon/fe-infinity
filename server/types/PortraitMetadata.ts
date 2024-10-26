import { z } from "zod";

export const PortraitMetadataSchema = z.object({
  originalImageName: z.string(),
  gender: z.union([z.literal("male"), z.literal("female")]),
  age: z.union([
    z.literal("child"),
    z.literal("young adult"),
    z.literal("mature adult"),
    z.literal("elderly"),
  ]),
  hairColor: z.string(),
  eyeColor: z.string(),
  vibe: z.string(),
  // .describe("A three-word description of the character's vibe."),
  eyeMouthOffsets: z.object({
    mouthX: z.number(),
    mouthY: z.number(),
    eyeX: z.number(),
    eyeY: z.number(),
  }),
  headgear: z.string().optional(),
  facialHair: z.string().optional(),
  accessories: z.string().optional(), // e.g. eye wear, jewelry, etc.
});

export type PortraitMetadata = z.infer<typeof PortraitMetadataSchema>;

export const AIPortraitMetadataSchema = PortraitMetadataSchema.omit({
  originalImageName: true,
  eyeMouthOffsets: true,
});

export type AIPortraitMetadata = z.infer<typeof AIPortraitMetadataSchema>;

