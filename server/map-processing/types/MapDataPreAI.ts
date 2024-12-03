import { MapLocation } from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";

export type MapDataPreAI = {
  width: number;
  height: number;
  terrainGrid: string[][];
  pointsOfInterest: MapLocation[];
  mapName: string;
  tmx: string;
};

