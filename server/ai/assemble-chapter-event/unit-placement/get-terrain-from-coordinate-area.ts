import { MapLocation } from "@/types/map-location.ts";

interface GetTerrainFromCoordinateAreaParams {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  terrainGrid: MapLocation[];
}

export default function getTerrainFromCoordinateArea({
  fromX,
  fromY,
  toX,
  toY,
  terrainGrid,
}: GetTerrainFromCoordinateAreaParams): MapLocation[] {
  const results: MapLocation[] = [];
  for (let y = fromY; y <= toY; y++) {
    for (let x = fromX; x <= toX; x++) {
      const terrain = terrainGrid.find((t) => t.x === x && t.y === y);
      if (terrain) {
        results.push(terrain);
      }
    }
  }
  return results;
}

if (import.meta.main) {
  const terrainGrid: MapLocation[] = [
    {
      terrain: "Desert",
      x: 0,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 1,
      y: 0,
    },
    {
      terrain: "--",
      x: 2,
      y: 0,
    },
    {
      terrain: "--",
      x: 3,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 6,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 7,
      y: 0,
    },
    {
      terrain: "Cliff",
      x: 8,
      y: 0,
    },
    {
      terrain: "Cliff",
      x: 9,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 0,
    },
    {
      terrain: "Desert",
      x: 0,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 1,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 2,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 3,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 5,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 6,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 7,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 1,
    },
    {
      terrain: "Fort",
      x: 11,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 13,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 16,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 1,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 1,
    },
    {
      terrain: "Cliff",
      x: 0,
      y: 2,
    },
    {
      terrain: "Cliff",
      x: 1,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 2,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 3,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 6,
      y: 2,
    },
    {
      terrain: "--",
      x: 7,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 2,
    },
    {
      terrain: "Cliff",
      x: 13,
      y: 2,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 2,
    },
    {
      terrain: "Cliff",
      x: 16,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 2,
    },
    {
      terrain: "Desert",
      x: 0,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 1,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 2,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 3,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 6,
      y: 3,
    },
    {
      terrain: "--",
      x: 7,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 3,
    },
    {
      terrain: "Fort",
      x: 11,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 3,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 3,
    },
    {
      terrain: "Cliff",
      x: 16,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 3,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 3,
    },
    {
      terrain: "--",
      x: 0,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 1,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 2,
      y: 4,
    },
    {
      terrain: "Forest",
      x: 3,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 6,
      y: 4,
    },
    {
      terrain: "--",
      x: 7,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 4,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 4,
    },
    {
      terrain: "Cliff",
      x: 17,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 4,
    },
    {
      terrain: "Desert",
      x: 0,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 1,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 2,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 3,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 6,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 7,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 5,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 5,
    },
    {
      terrain: "Sand",
      x: 0,
      y: 6,
    },
    {
      terrain: "Sand",
      x: 1,
      y: 6,
    },
    {
      terrain: "Sand",
      x: 2,
      y: 6,
    },
    {
      terrain: "Sand",
      x: 3,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 4,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 5,
      y: 6,
    },
    {
      terrain: "Sand",
      x: 6,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 7,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 6,
    },
    {
      terrain: "Cliff",
      x: 16,
      y: 6,
    },
    {
      terrain: "Cliff",
      x: 17,
      y: 6,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 6,
    },
    {
      terrain: "Wall",
      x: 0,
      y: 7,
    },
    {
      terrain: "Wall",
      x: 1,
      y: 7,
    },
    {
      terrain: "Wall",
      x: 2,
      y: 7,
    },
    {
      terrain: "Wall",
      x: 3,
      y: 7,
    },
    {
      terrain: "Sand",
      x: 4,
      y: 7,
    },
    {
      terrain: "Sand",
      x: 5,
      y: 7,
    },
    {
      terrain: "Sand",
      x: 6,
      y: 7,
    },
    {
      terrain: "Forest",
      x: 7,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 8,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 7,
    },
    {
      terrain: "Cliff",
      x: 11,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 7,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 7,
    },
    {
      terrain: "Cliff",
      x: 17,
      y: 7,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 7,
    },
    {
      terrain: "Road",
      x: 0,
      y: 8,
    },
    {
      terrain: "House",
      x: 1,
      y: 8,
    },
    {
      terrain: "Road",
      x: 2,
      y: 8,
    },
    {
      terrain: "Wall",
      x: 3,
      y: 8,
    },
    {
      terrain: "Wall",
      x: 4,
      y: 8,
    },
    {
      terrain: "Wall",
      x: 5,
      y: 8,
    },
    {
      terrain: "Road",
      x: 6,
      y: 8,
    },
    {
      terrain: "Sand",
      x: 7,
      y: 8,
    },
    {
      terrain: "Sand",
      x: 8,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 8,
    },
    {
      terrain: "Cliff",
      x: 10,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 8,
    },
    {
      terrain: "Fort",
      x: 12,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 8,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 8,
    },
    {
      terrain: "Cliff",
      x: 17,
      y: 8,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 8,
    },
    {
      terrain: "Road",
      x: 0,
      y: 9,
    },
    {
      terrain: "Road",
      x: 1,
      y: 9,
    },
    {
      terrain: "Road",
      x: 2,
      y: 9,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 9,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 9,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 9,
    },
    {
      terrain: "Road",
      x: 6,
      y: 9,
    },
    {
      terrain: "Sand",
      x: 7,
      y: 9,
    },
    {
      terrain: "Fort",
      x: 8,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 9,
      y: 9,
    },
    {
      terrain: "Cliff",
      x: 10,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 9,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 9,
    },
    {
      terrain: "Armory",
      x: 0,
      y: 10,
    },
    {
      terrain: "Road",
      x: 1,
      y: 10,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 10,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 10,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 10,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 10,
    },
    {
      terrain: "Road",
      x: 6,
      y: 10,
    },
    {
      terrain: "Sand",
      x: 7,
      y: 10,
    },
    {
      terrain: "Sand",
      x: 8,
      y: 10,
    },
    {
      terrain: "Sand",
      x: 9,
      y: 10,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 10,
    },
    {
      terrain: "Cliff",
      x: 11,
      y: 10,
    },
    {
      terrain: "Cliff",
      x: 12,
      y: 10,
    },
    {
      terrain: "Cliff",
      x: 13,
      y: 10,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 10,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 10,
    },
    {
      terrain: "Cliff",
      x: 16,
      y: 10,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 10,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 10,
    },
    {
      terrain: "Plains",
      x: 0,
      y: 11,
    },
    {
      terrain: "Plains",
      x: 1,
      y: 11,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 11,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 11,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 11,
    },
    {
      terrain: "Sand",
      x: 5,
      y: 11,
    },
    {
      terrain: "Vendor",
      x: 6,
      y: 11,
    },
    {
      terrain: "Road",
      x: 7,
      y: 11,
    },
    {
      terrain: "Wall",
      x: 8,
      y: 11,
    },
    {
      terrain: "Sand",
      x: 9,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 10,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 11,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 11,
    },
    {
      terrain: "Plains",
      x: 0,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 1,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 12,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 12,
    },
    {
      terrain: "House",
      x: 7,
      y: 12,
    },
    {
      terrain: "Wall",
      x: 8,
      y: 12,
    },
    {
      terrain: "Sand",
      x: 9,
      y: 12,
    },
    {
      terrain: "Forest",
      x: 10,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 12,
    },
    {
      terrain: "Cliff",
      x: 13,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 12,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 12,
    },
    {
      terrain: "Lake",
      x: 0,
      y: 13,
    },
    {
      terrain: "Lake",
      x: 1,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 7,
      y: 13,
    },
    {
      terrain: "Wall",
      x: 8,
      y: 13,
    },
    {
      terrain: "Wall",
      x: 9,
      y: 13,
    },
    {
      terrain: "Sand",
      x: 10,
      y: 13,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 13,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 13,
    },
    {
      terrain: "Cliff",
      x: 13,
      y: 13,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 13,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 13,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 13,
    },
    {
      terrain: "--",
      x: 17,
      y: 13,
    },
    {
      terrain: "--",
      x: 18,
      y: 13,
    },
    {
      terrain: "Plains",
      x: 0,
      y: 14,
    },
    {
      terrain: "Lake",
      x: 1,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 7,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 8,
      y: 14,
    },
    {
      terrain: "Wall",
      x: 9,
      y: 14,
    },
    {
      terrain: "Sand",
      x: 10,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 14,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 14,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 14,
    },
    {
      terrain: "--",
      x: 18,
      y: 14,
    },
    {
      terrain: "Plains",
      x: 0,
      y: 15,
    },
    {
      terrain: "Lake",
      x: 1,
      y: 15,
    },
    {
      terrain: "Lake",
      x: 2,
      y: 15,
    },
    {
      terrain: "Bridge",
      x: 3,
      y: 15,
    },
    {
      terrain: "Bridge",
      x: 4,
      y: 15,
    },
    {
      terrain: "Lake",
      x: 5,
      y: 15,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 15,
    },
    {
      terrain: "Plains",
      x: 7,
      y: 15,
    },
    {
      terrain: "Plains",
      x: 8,
      y: 15,
    },
    {
      terrain: "Wall",
      x: 9,
      y: 15,
    },
    {
      terrain: "Sand",
      x: 10,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 11,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 15,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 15,
    },
    {
      terrain: "--",
      x: 18,
      y: 15,
    },
    {
      terrain: "Village Wall",
      x: 0,
      y: 16,
    },
    {
      terrain: "Village Wall",
      x: 1,
      y: 16,
    },
    {
      terrain: "Village Wall",
      x: 2,
      y: 16,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 16,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 16,
    },
    {
      terrain: "Lake",
      x: 5,
      y: 16,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 16,
    },
    {
      terrain: "Plains",
      x: 7,
      y: 16,
    },
    {
      terrain: "Plains",
      x: 8,
      y: 16,
    },
    {
      terrain: "Wall",
      x: 9,
      y: 16,
    },
    {
      terrain: "Wall",
      x: 10,
      y: 16,
    },
    {
      terrain: "Sand",
      x: 11,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 16,
    },
    {
      terrain: "Cliff",
      x: 15,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 16,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 16,
    },
    {
      terrain: "Village Wall",
      x: 0,
      y: 17,
    },
    {
      terrain: "Village Wall",
      x: 1,
      y: 17,
    },
    {
      terrain: "Village Wall",
      x: 2,
      y: 17,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 17,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 17,
    },
    {
      terrain: "Lake",
      x: 5,
      y: 17,
    },
    {
      terrain: "Lake",
      x: 6,
      y: 17,
    },
    {
      terrain: "Plains",
      x: 7,
      y: 17,
    },
    {
      terrain: "Plains",
      x: 8,
      y: 17,
    },
    {
      terrain: "Plains",
      x: 9,
      y: 17,
    },
    {
      terrain: "Wall",
      x: 10,
      y: 17,
    },
    {
      terrain: "Sand",
      x: 11,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 12,
      y: 17,
    },
    {
      terrain: "Forest",
      x: 13,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 14,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 15,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 16,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 17,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 17,
    },
    {
      terrain: "Village Wall",
      x: 0,
      y: 18,
    },
    {
      terrain: "Village Entrance",
      x: 1,
      y: 18,
    },
    {
      terrain: "Village Wall",
      x: 2,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 18,
    },
    {
      terrain: "Lake",
      x: 6,
      y: 18,
    },
    {
      terrain: "Lake",
      x: 7,
      y: 18,
    },
    {
      terrain: "Lake",
      x: 8,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 9,
      y: 18,
    },
    {
      terrain: "Wall",
      x: 10,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 11,
      y: 18,
    },
    {
      terrain: "Sand",
      x: 12,
      y: 18,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 18,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 15,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 16,
      y: 18,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 18,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 18,
    },
    {
      terrain: "Plains",
      x: 0,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 1,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 2,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 3,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 4,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 5,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 6,
      y: 19,
    },
    {
      terrain: "Lake",
      x: 7,
      y: 19,
    },
    {
      terrain: "Lake",
      x: 8,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 9,
      y: 19,
    },
    {
      terrain: "Wall",
      x: 10,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 11,
      y: 19,
    },
    {
      terrain: "Forest",
      x: 12,
      y: 19,
    },
    {
      terrain: "Desert",
      x: 13,
      y: 19,
    },
    {
      terrain: "Cliff",
      x: 14,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 15,
      y: 19,
    },
    {
      terrain: "Plains",
      x: 16,
      y: 19,
    },
    {
      terrain: "Desert",
      x: 17,
      y: 19,
    },
    {
      terrain: "Desert",
      x: 18,
      y: 19,
    },
  ];

  const res = getTerrainFromCoordinateArea({
    fromX: 0,
    fromY: 16,
    toX: 2,
    toY: 18,
    terrainGrid,
  });
  console.log("res", JSON.stringify(res, null, 2));
}

