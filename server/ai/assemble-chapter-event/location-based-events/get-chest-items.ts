import { ALL_ITEMS } from "@/ai/assemble-chapter-event/generate-unit-line/item-options.ts";

export default function getChestItems({
  xCoord,
  yCoord,
}: {
  xCoord: number;
  yCoord: number;
}): string {
  const isMoneyChest = Math.random() < 1 / 3;

  if (isMoneyChest) {
    const goldAmount = Math.floor(Math.random() * 9 + 2) * 500;
    return `ChestMoney(${goldAmount},${xCoord},${yCoord})`;
  } else {
    const items = ALL_ITEMS;
    const randomItem = items[Math.floor(Math.random() * items.length)];
    return `Chest(${randomItem},${xCoord},${yCoord})`;
  }
}

if (import.meta.main) {
  console.log(getChestItems({ xCoord: 5, yCoord: 5 }));
}

