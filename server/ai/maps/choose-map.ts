import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { z } from "zod";

export default async function chooseMap({
  mapOptions,
  battleOverview,
}: {
  mapOptions: { name: string; description: string }[];
  battleOverview: string;
}): Promise<string> {
  const systemMessage = `Given a chapter's battle overview and a list of map options, choose the map that best fits the chapter idea.
Return the name of the chosen map option.`;

  const prompt = `Chapter Battle Overview: ${battleOverview}

Map Options:
${mapOptions
  .map(({ name, description }) => `Name: ${name}\nDescription:${description}`)
  .join("\n---\n")}`;

  const { chosenMapName } = await generateStructuredData({
    systemMessage,
    prompt,
    schema: z.object({
      chosenMapName: z.string(),
    }),
  });

  return chosenMapName;
}

if (import.meta.main) {
  const battleOverview =
    "Defend the abandoned fortress against waves of incoming enemies, using narrow corridors and fortified chambers to hold the line and control chokepoints.";

  chooseMap({ mapOptions: allMapOptions, battleOverview }).then(console.log);
}

