import type { CharacterDataForCsv } from "./CharacterDataForCsv.ts";

export type Character = {
  displayName: string;
  fullName: string;
  csvData: CharacterDataForCsv;
  age: "child" | "young adult" | "mature adult" | "elderly";
  eyeColor: string;
};

