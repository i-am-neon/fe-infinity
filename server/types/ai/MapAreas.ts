import { z } from "zod";

export const MapAreaSchema = z.object({
  name: z
    .string()
    .describe("A short, thematic name for the area, e.g. 'Upper Throne Room'"),
  description: z
    .string()
    .describe(
      "1-2 sentences describing the purpose or notable features of this area."
    ),
  coordinateArea: z
    .object({
      from: z.object({ x: z.number(), y: z.number() }),
      to: z.object({ x: z.number(), y: z.number() }),
    })
    .describe("The rectangular bounds covering the entire area."),
  // pointsOfInterest: z.array(
  //   z.object({
  //     name: z.string(),
  //     type: z
  //       .string()
  //       .describe(
  //         'The strategic importance. Eg. "choke point", "defensive position", "objective tile" (like a village or visitable place)'
  //       ),
  //     description: z.string(),
  //     coordinates: z.object({ x: z.number(), y: z.number() }),
  //   })
  // ),
});

// Inferred TypeScript Type
export type MapArea = z.infer<typeof MapAreaSchema>;

