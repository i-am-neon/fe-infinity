import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapLocation } from "@/types/map-location.ts";
import getChestItems from "@/ai/assemble-chapter-event/location-based-events/get-chest-items.ts";
import getShopItems from "@/ai/assemble-chapter-event/location-based-events/get-shop-items.ts";
import getVisitableEvent from "@/ai/assemble-chapter-event/location-based-events/get-visitable-event.ts";

export default async function getAllLocationBasedEvents({
  chapterIdea,
  interactableTiles,
}: {
  chapterIdea: ChapterIdea;
  interactableTiles: MapLocation[];
}): Promise<{
  locationBasedEvents: string;
  localDefinitions: string[];
  text: string[];
}> {
  /*
  Types:
  Chest
  Door
  Visitable (Village, House, etc.)
  Shop (Armory, Vendor, secret shop, etc.)
*/

  const locationBasedEvents: string[] = [];
  const localDefinitions: string[] = [];
  const text: string[] = [];

  for (const tile of interactableTiles) {
    if (tile.terrain === "Chest") {
      locationBasedEvents.push(
        getChestItems({ xCoord: tile.x, yCoord: tile.y })
      );
    } else if (tile.terrain === "Door") {
      locationBasedEvents.push(`Door(${tile.x},${tile.y})`);
      // Visitable
    } else if (
      tile.terrain === "Village Entrance" ||
      tile.terrain === "House" ||
      tile.terrain === "Inn" ||
      tile.terrain === "Visitable Ruins"
    ) {
      const {
        locationBasedEvent,
        localDefinition,
        text: _text,
      } = await getVisitableEvent({ chapterIdea, mapLocation: tile });
      locationBasedEvents.push(locationBasedEvent);
      localDefinitions.push(localDefinition);
      text.push(_text);
      // Shops
    } else if (tile.terrain === "Armory" || tile.terrain === "Vendor") {
      const {
        locationBasedEvents: _locationBasedEvents,
        localDefinitions: _localDefinitions,
      } = getShopItems({
        xCoord: tile.x,
        yCoord: tile.y,
        tileType: tile.terrain,
      });
      locationBasedEvents.push(_locationBasedEvents);
      localDefinitions.push(_localDefinitions);
    }
  }

  return {
    locationBasedEvents: locationBasedEvents.join("\n"),
    localDefinitions,
    text,
  };
}

