export type PortraitMetadata = {
  originalImageName: string;
  gender: "male" | "female";
  age: "child" | "young adult" | "mature adult" | "elderly";
  hairColor: string;
  eyeColor: string;
  eyeMouthOffsets: {
    mouthX: number;
    mouthY: number;
    eyeX: number;
    eyeY: number;
  };
  headgear?: string;
  facialHair?: string;
  jewelry?: string;
};

