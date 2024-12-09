import { MapLocation } from "@/types/map-location.ts";

export type MapDataPreAI = {
  width: number;
  height: number;
  terrainGrid: MapLocation[];
  pointsOfInterest: MapLocation[];
  mapName: string;
  tmx: string;
};

