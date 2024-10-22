import { assertEquals } from "@std/assert";
import characterDataToCsv from "./character-data-to-csv.ts";
import type { CharacterDataForCsv } from "../../types/CharacterDataForCsv.ts";

Deno.test("Jasper characterDataToCsv", () => {
  const jasperCharacterData: CharacterDataForCsv = {
    name: "Jasper",
    nameTextPointer: "JasperNameText",
    descriptionTextPointer: "JasperDescText",
    characterNumber: "Jasper",
    defaultClass: "Cavalier",
    portrait: "JasperMug",
    affinity: "WaterAff",
    baseLevel: 5,
    baseHP: 9,
    basePwr: 5,
    baseMagic: 0,
    baseSkl: 5,
    baseSpd: 4,
    baseDef: 2,
    baseRes: 2,
    baseLck: 7,
    baseCon: 3,
    swordRank: "Crank",
    lanceRank: "Crank",
    hpGrowth: 90,
    pwrGrowth: 35,
    magicGrowth: 10,
    sklGrowth: 40,
    spdGrowth: 40,
    defGrowth: 30,
    resGrowth: 20,
    lckGrowth: 50,
    levelUpSkillList: "JasperSkillList|IsPointer",
  };

  const csvResult = characterDataToCsv(jasperCharacterData);

  const expectedCsvValues =
    "Jasper,JasperNameText,JasperDescText,Jasper,Cavalier,JasperMug,0x0,WaterAff,,5,9,5,0,5,4,2,2,7,3,Crank,Crank,0,0,0,0,0,0,90,35,10,40,40,30,20,50,JasperSkillList|IsPointer,0x0,0x0,,0x0,0x0,0x0,0x0,0x0,,,,0x0,0x0,0x0";
  assertEquals(csvResult, expectedCsvValues);
});

Deno.test("Derek characterDataToCsv", () => {
  const derekCharacterData: CharacterDataForCsv = {
    name: "Derek",
    nameTextPointer: "DerekNameText",
    descriptionTextPointer: "DerekDescText",
    characterNumber: "Derek",
    defaultClass: "Knight",
    portrait: "DerekMug",
    affinity: "AnimaAff",
    baseLevel: 5,
    baseHP: 6,
    basePwr: 5,
    baseMagic: 1,
    baseSkl: 4,
    baseSpd: 2,
    baseDef: 4,
    baseRes: 3,
    baseLck: 5,
    baseCon: 2,
    lanceRank: "Crank",
    hpGrowth: 90,
    pwrGrowth: 35,
    magicGrowth: 10,
    sklGrowth: 35,
    spdGrowth: 25,
    defGrowth: 35,
    resGrowth: 20,
    lckGrowth: 25,
    levelUpSkillList: "DerekSkillList|IsPointer",
  };

  const csvResult = characterDataToCsv(derekCharacterData);

  const expectedCsvValues =
    "Derek,DerekNameText,DerekDescText,Derek,Knight,DerekMug,0x0,AnimaAff,,5,6,5,1,4,2,4,3,5,2,0,Crank,0,0,0,0,0,0,90,35,10,35,25,35,20,25,DerekSkillList|IsPointer,0x0,0x0,,0x0,0x0,0x0,0x0,0x0,,,,0x0,0x0,0x0";
  assertEquals(csvResult, expectedCsvValues);
});

Deno.test("Forrest characterDataToCsv", () => {
  const bossForrestCharacterData: CharacterDataForCsv = {
    name: "BossForrest",
    nameTextPointer: "ForrestNameText",
    descriptionTextPointer: "ForrestDescText",
    characterNumber: "BossForrest",
    defaultClass: "Cavalier",
    portrait: "ForrestMug",
    affinity: "WindAff",
    baseLevel: 1,
    baseHP: 6,
    basePwr: 5,
    baseMagic: 1,
    baseSkl: 5,
    baseSpd: 3,
    baseDef: 1,
    baseRes: 2,
    baseLck: 6,
    baseCon: 3,
    swordRank: "Srank",
    lanceRank: "Srank",
    hpGrowth: 90,
    pwrGrowth: 35,
    magicGrowth: 5,
    sklGrowth: 50,
    spdGrowth: 45,
    defGrowth: 20,
    resGrowth: 10,
    lckGrowth: 40,
    levelUpSkillList: "ForrestSkillList|IsPointer",
    characterAbility2: "IsBoss",
  };
  const csvResult = characterDataToCsv(bossForrestCharacterData);

  const expectedCsvValues =
    "BossForrest,ForrestNameText,ForrestDescText,BossForrest,Cavalier,ForrestMug,0x0,WindAff,,1,6,5,1,5,3,1,2,6,3,Srank,Srank,0,0,0,0,0,0,90,35,5,50,45,20,10,40,ForrestSkillList|IsPointer,0x0,0x0,,0x0,IsBoss,0x0,0x0,0x0,,,,0x0,0x0,0x0";
  assertEquals(csvResult, expectedCsvValues);
});

Deno.test("Christina characterDataToCsv", () => {
  const bossChristinaCharacterData: CharacterDataForCsv = {
    name: "BossChristina",
    nameTextPointer: "ChristinaNameText",
    descriptionTextPointer: "ChristinaDescText",
    characterNumber: "BossChristina",
    defaultClass: "Cavalier_F",
    portrait: "ChristinaMug",
    affinity: "FireAff",
    baseLevel: 1,
    baseHP: 5,
    basePwr: 5,
    baseMagic: 0,
    baseSkl: 4,
    baseSpd: 2,
    baseDef: 0,
    baseRes: 5,
    baseLck: 4,
    baseCon: 4,
    swordRank: "Drank",
    lanceRank: "Brank",
    hpGrowth: 95,
    pwrGrowth: 40,
    magicGrowth: 10,
    sklGrowth: 45,
    spdGrowth: 40,
    defGrowth: 30,
    resGrowth: 30,
    lckGrowth: 45,
    levelUpSkillList: "ChristinaSkillList|IsPointer",
    characterAbility2: "IsBoss",
  };
  const csvResult = characterDataToCsv(bossChristinaCharacterData);

  const expectedCsvValues =
    "BossChristina,ChristinaNameText,ChristinaDescText,BossChristina,Cavalier_F,ChristinaMug,0x0,FireAff,,1,5,5,0,4,2,0,5,4,4,Drank,Brank,0,0,0,0,0,0,95,40,10,45,40,30,30,45,ChristinaSkillList|IsPointer,0x0,0x0,,0x0,IsBoss,0x0,0x0,0x0,,,,0x0,0x0,0x0";
  assertEquals(csvResult, expectedCsvValues);
});

