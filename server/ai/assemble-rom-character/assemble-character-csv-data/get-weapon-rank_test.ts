import { assertEquals } from "@std/assert";
import type { WeaponRank } from "@/types/CharacterDataForCsv.ts";
import getWeaponRank from "@/ai/assemble-rom-character/assemble-character-csv-data/get-weapon-rank.ts";

Deno.test("getWeaponRank - sword user returns Drank", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Myrmidon",
    weaponType: "sword",
  });
  assertEquals(result, "Drank");
});

Deno.test("getWeaponRank - lance user returns Drank", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Cavalier",
    weaponType: "lance",
  });
  assertEquals(result, "Drank");
});

Deno.test("getWeaponRank - axe user returns Drank", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Fighter",
    weaponType: "axe",
  });
  assertEquals(result, "Drank");
});

Deno.test("getWeaponRank - bow user returns Drank", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Archer",
    weaponType: "bow",
  });
  assertEquals(result, "Drank");
});

Deno.test("getWeaponRank - staff user returns Drank", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Cleric",
    weaponType: "staff",
  });
  assertEquals(result, "Drank");
});

Deno.test("getWeaponRank - non-user returns 0", () => {
  const result: WeaponRank = getWeaponRank({
    romClassName: "Archer",
    weaponType: "axe",
  });
  assertEquals(result, "0");
});
