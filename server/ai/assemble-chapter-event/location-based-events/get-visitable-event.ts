import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapLocation } from "@/types/map-location.ts";
import { ALL_ITEMS } from "@/ai/assemble-chapter-event/generate-unit-line/item-options.ts";
import getRandomHex from "@/lib/get-random-hex.ts";
import terrainNameToEventFnName from "@/ai/assemble-chapter-event/location-based-events/terrain-name-to-event-fn-name.ts";

export default async function getVisitableEvent({
  chapterIdea,
  mapLocation,
}: {
  chapterIdea: ChapterIdea;
  mapLocation: MapLocation;
}): Promise<{
  locationBasedEvent: string;
  localDefinition: string;
  text: string;
}> {
  const isMoneyReward = Math.random() < 1 / 5;

  let rewardText = "";
  const locationName = `${terrainNameToEventFnName(mapLocation.type)}_${crypto
    .randomUUID()
    .replace(/-/g, "")
    .slice(0, 8)}`;
  const textId = locationName + "_Text";

  if (isMoneyReward) {
    const goldAmount = Math.floor(Math.random() * 9 + 2) * 500;
    rewardText = `GiveGold(${goldAmount})`;
  } else {
    const items = ALL_ITEMS;
    const randomItem = items[Math.floor(Math.random() * items.length)];
    rewardText = `GiveItem(${randomItem},0xFFFF)`;
  }

  return {
    locationBasedEvent: `${terrainNameToEventFnName(
      mapLocation.type
    )}(${getRandomHex()},${locationName},${mapLocation.x},${mapLocation.y})`,
    localDefinition: `${locationName}:
MUSI
Text(0x1,${textId})${mapLocation.type !== "House" ? "\n" + rewardText : ""}
MUNO
NoFade
ENDA`,
    text: `## ${textId}
[MidRight][LoadCurrent][MidLeft][LoadVillagerMan3]
I moved to Shizon to get away from the[NL]
mainland strife... Now it's found its[A][NL]
way here... Take this, and end this[NL]
fight. I want to get back to my peace.[A][X]`,
  };
}

