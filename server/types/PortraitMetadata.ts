export type PortraitMetadata = {
  originalImageName: string;
  gender: "male" | "female";
  age: "child" | "young adult" | "mature adult" | "elderly";
  hairColor: string;
  eyeColor: string;
  headgear?: string;
  facialHair?: string;
  jewelry?: string;
};

