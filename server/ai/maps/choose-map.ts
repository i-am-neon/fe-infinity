import { allMapOptions } from "@/ai/maps/map-metadata-creation/all-map-options.ts";
import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { MapMetadata } from "@/types/MapMetadata.ts";
import { z } from "zod";

export default async function chooseMap({
  mapOptions,
  battleOverview,
}: {
  mapOptions: MapMetadata[];
  battleOverview: string;
}): Promise<MapMetadata> {
  const systemMessage = `Given a chapter's battle overview and a list of map options, choose the map that best fits the chapter idea.
Return the name of the chosen map option.`;

  const prompt = `Chapter Battle Overview: ${battleOverview}

Portrait Options:
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

  const chosenMapMetadata = mapOptions.find(
    ({ name }) => name === chosenMapName
  );
  if (!chosenMapMetadata) {
    throw new Error(`Could not find map with name "${chosenMapName}"`);
  }

  return chosenMapMetadata;
}

if (import.meta.main) {
  const battleOverview =
    "Defend the abandoned fortress against waves of incoming enemies, using narrow corridors and fortified chambers to hold the line and control chokepoints.";

  chooseMap({ mapOptions: allMapOptions, battleOverview }).then(console.log);
}

