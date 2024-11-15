import { PointOfInterest } from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";

export type MapDataPreAI = {
  width: number;
  height: number;
  terrainGrid: string[][];
  pointsOfInterest: PointOfInterest[];
  mapName: string;
  tmx: string;
};

