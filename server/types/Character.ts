import type { CharacterDataForCsv } from "./CharacterDataForCsv.ts";

export type Character = {
  name: string;
  csvData: CharacterDataForCsv;
  age: "child" | "young adult" | "mature adult" | "elderly";
  eyeColor: string;
  formattedDescription: string;
};

