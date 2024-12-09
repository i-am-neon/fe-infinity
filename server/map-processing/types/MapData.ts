import { MapArea } from "@/types/ai/MapAreas.ts";
import { MapLocation } from "@/types/map-location.ts";

export type MapData = {
  name: string;
  description: string;
  tmx: string;
  height: number;
  width: number;
  terrainGrid: MapLocation[];
  pointsOfInterest: MapLocation[];
  interactableTiles: MapLocation[];
  areas: MapArea[];
};

