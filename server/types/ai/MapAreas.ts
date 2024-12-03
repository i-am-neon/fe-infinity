import { z } from "zod";

export const MapAreaSchema = z.object({
  name: z.string(),
  description: z.string(),
  coordinates: z.object({
    from: z.object({
      x: z.number(),
      y: z.number(),
    }),
    to: z.object({
      x: z.number(),
      y: z.number(),
    }),
  }),
  subAreas: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
      centerCoordinate: z.object({ x: z.number(), y: z.number() }),
    })
  ),
});

// Inferred TypeScript Type
export type MapArea = z.infer<typeof MapAreaSchema>;

