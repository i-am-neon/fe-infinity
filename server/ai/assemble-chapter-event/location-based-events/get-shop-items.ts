import {
  ARMORY_MAINSTAYS,
  ITEMS,
  WEAPON_OPTIONS,
} from "../unit-placement/item-options.ts";

type TileType = "Armory" | "Vendor";

export default function getShopItems({
  xCoord,
  yCoord,
  tileType,
}: {
  xCoord: number;
  yCoord: number;
  tileType: TileType;
}): { locationBasedEvents: string; localDefinitions: string } {
  const getRandomItems = (itemPool: string[], count: number) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const randomItem = itemPool[Math.floor(Math.random() * itemPool.length)];
      items.push(randomItem);
    }
    return items;
  };

  let items: string[];

  if (tileType === "Armory") {
    const armoryItems = [
      ...WEAPON_OPTIONS.Sword,
      ...WEAPON_OPTIONS.Lance,
      ...WEAPON_OPTIONS.Axe,
      ...WEAPON_OPTIONS.Bow,
    ];
    items = [...ARMORY_MAINSTAYS, ...getRandomItems(armoryItems, 5)];
  } else {
    const vendorItems = [
      ...WEAPON_OPTIONS.Anima,
      ...WEAPON_OPTIONS.Light,
      ...WEAPON_OPTIONS.Dark,
      ...WEAPON_OPTIONS.Staff,
      ...ITEMS,
    ];
    items = [...ARMORY_MAINSTAYS, ...getRandomItems(vendorItems, 5)];
  }

  return {
    locationBasedEvents: `${tileType}(${tileType}List,${xCoord},${yCoord})`,
    localDefinitions: `${tileType}List:\nSHLI ${items.join(" ")}\nALIGN 4`,
  };
}

if (import.meta.main) {
  console.log(getShopItems({ xCoord: 5, yCoord: 5, tileType: "Armory" }));
  console.log(getShopItems({ xCoord: 5, yCoord: 5, tileType: "Vendor" }));
}

