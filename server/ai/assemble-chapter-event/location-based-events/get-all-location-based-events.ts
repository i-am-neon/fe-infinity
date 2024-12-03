import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapLocation } from "@/types/map-location.ts";
import getChestItems from "@/ai/assemble-chapter-event/location-based-events/get-chest-items.ts";

export default async function getAllLocationBasedEvents({
  chapterIdea,
  interactableTiles,
}: {
  chapterIdea: ChapterIdea;
  interactableTiles: MapLocation[];
}): Promise<string> {
  /*
  Types:
  Chest
  Door
  Visitable (Village, House, etc.)
  Shop (Armory, Vendor, secret shop, etc.)
*/

  const locationBasedEvents: string[] = [];

  for (const tile of interactableTiles) {
    if (tile.type === "Chest") {
      locationBasedEvents.push(
        getChestItems({ xCoord: tile.x, yCoord: tile.y })
      );
    } else if (tile.type === "Door") {
      // Visitable
    } else if (
      tile.type === "Village Entrance" ||
      tile.type === "House" ||
      tile.type === "Inn" ||
      tile.type === "Visitable Ruins"
    ) {
      // Shops
    } else if (tile.type === "Armory" || tile.type === "Vendor") {
    }
  }

  return locationBasedEvents.join("\n");
}

