import { MapLocation } from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";

export type MapData = {
  name: string;
  description: string;
  tmx: string;
  height: number;
  width: number;
  terrainGrid: string[][];
  pointsOfInterest: MapLocation[];
  interactableTiles: MapLocation[];
  areas: MapArea[];
};

