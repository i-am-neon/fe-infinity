import chooseMap from "@/ai/maps/choose-map.ts";
import { MapData } from "@/map-processing/types/MapData.ts";

export async function assignMultipleMaps({
  chapterNameToBattleOverview,
  allMapOptions,
}: {
  chapterNameToBattleOverview: Record<string, string>;
  allMapOptions: MapData[];
}): Promise<Record<string, MapData>> {
  if (
    Object.entries(chapterNameToBattleOverview).length > allMapOptions.length
  ) {
    throw new Error("Not enough maps to assign to each character");
  }

  const assignedMaps: Record<string, MapData> = {};

  for (const [chapterName, battleOverview] of Object.entries(
    chapterNameToBattleOverview
  )) {
    const chosenMapName = await _internals.chooseMap({
      mapOptions: allMapOptions,
      battleOverview: battleOverview,
    });

    const chosenMap = allMapOptions.find((map) => map.name === chosenMapName);

    if (!chosenMap) {
      throw new Error(`Could not find map with name ${chosenMapName}`);
    }

    chosenMap.tmx = chosenMap.tmx.replace(/<CHAPTERID>/g, chapterName);
    assignedMaps[chapterName] = chosenMap;

    // Remove the chosen map from the options
    allMapOptions = allMapOptions.filter((map) => map !== chosenMap);
  }

  return assignedMaps;
}

export const _internals = { chooseMap };

