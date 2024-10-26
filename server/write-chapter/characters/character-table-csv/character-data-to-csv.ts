import type { CharacterDataForCsv } from "@/types/CharacterDataForCsv.ts";

export default function characterDataToCsv(data: CharacterDataForCsv): string {
  const values = [
    data.name,
    data.nameTextPointer,
    data.descriptionTextPointer,
    data.characterNumber,
    data.defaultClass,
    data.portrait,
    data.isGeneric ? "0x3" : "0x0", // "Mini Portrait" - 0x0 for non-generic characters, 0x3 for generic characters
    data.affinity,
    "", // empty
    data.baseLevel.toString(),
    data.baseHP.toString(),
    data.basePwr.toString(),
    data.baseMagic.toString(),
    data.baseSkl.toString(),
    data.baseSpd.toString(),
    data.baseDef.toString(),
    data.baseRes.toString(),
    data.baseLck.toString(),
    data.baseCon.toString(),
    data.swordRank || "0",
    data.lanceRank || "0",
    data.axeRank || "0",
    data.bowRank || "0",
    data.staffRank || "0",
    data.animaRank || "0",
    data.lightRank || "0",
    data.darkRank || "0",
    data.hpGrowth.toString(),
    data.pwrGrowth.toString(),
    data.magicGrowth.toString(),
    data.sklGrowth.toString(),
    data.spdGrowth.toString(),
    data.defGrowth.toString(),
    data.resGrowth.toString(),
    data.lckGrowth.toString(),
    data.levelUpSkillList || "0",
    data.personalSkill || "0x0",
    "0x0", // "Escape Quote"
    "", // empty
    data.characterAbility1 || "0x0",
    data.characterAbility2 || "0x0",
    data.characterAbility3 || "0x0",
    data.characterAbility4 || "0x0",
    data.supportDataPointer || "0x0",
    "", // empty
    "", // empty
    "", // empty
    "0x0", // UnknownData
    "0x0", // UnknownData
    "0x0", // UnknownData
  ];

  return values.join(",");
}

