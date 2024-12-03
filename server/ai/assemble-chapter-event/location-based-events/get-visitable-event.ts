import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapLocation } from "@/types/map-location.ts";
import { ALL_ITEMS } from "@/ai/assemble-chapter-event/generate-unit-line/item-options.ts";
import getRandomHex from "@/lib/get-random-hex.ts";
import terrainNameToEventFnName from "@/ai/assemble-chapter-event/location-based-events/terrain-name-to-event-fn-name.ts";
import generateVisitingInBattleScene from "@/ai/assemble-chapter-event/generate-scene/generate-visiting-in-battle-scene.ts";

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

  const { background, sceneTextContent } = await generateVisitingInBattleScene({
    sceneOverview: chapterIdea.battleOverview,
    newPlayableCharacters: chapterIdea.newPlayableCharacters,
    boss: chapterIdea.boss,
    buildingType: mapLocation.type,
    reward: mapLocation.type !== "House" ? rewardText : undefined,
  });

  return {
    locationBasedEvent: `${terrainNameToEventFnName(
      mapLocation.type
    )}(${getRandomHex()},${locationName},${mapLocation.x},${mapLocation.y})`,
    localDefinition: `${locationName}:
MUSI
Text(${background},${textId})${
      mapLocation.type !== "House" ? "\n" + rewardText : ""
    }
MUNO
NoFade
ENDA`,
    text: `## ${textId}\n[ConversationText]\n${sceneTextContent}\n[A][X]`,
  };
}

