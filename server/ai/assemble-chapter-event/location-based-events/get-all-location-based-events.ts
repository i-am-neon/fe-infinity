import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { MapLocation } from "@/types/map-location.ts";

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
      locationBasedEvents.push(`A chest is hidden in the corner of the room.`);
    } else if (tile.type === "Door") {
      locationBasedEvents.push(`A door is locked.`);
      // Visitable
    } else if (
      tile.type === "Village Entrance" ||
      tile.type === "House" ||
      tile.type === "Inn" ||
      tile.type === "Visitable Ruins"
    ) {
      locationBasedEvents.push(`A village is nearby.`);
      // Shops
    } else if (tile.type === "Armory" || tile.type === "Vendor") {
      locationBasedEvents.push(`A shop is nearby.`);
    }
  }

  return locationBasedEvents.join("\n");
}

