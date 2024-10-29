import choosePortrait from "@/ai/portraits/choose-portrait.ts";
import { type PortraitMetadata } from "@/types/PortraitMetadata.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export async function assignMultiplePortraits({
  characterIdeas,
  portraitOptions,
}: {
  characterIdeas: CharacterIdea[];
  portraitOptions: PortraitMetadata[];
}): Promise<{ character: CharacterIdea; portrait: PortraitMetadata }[]> {
  if (characterIdeas.length > portraitOptions.length) {
    throw new Error("Not enough portraits to assign to each character");
  }

  const assignedPortraits: {
    character: CharacterIdea;
    portrait: PortraitMetadata;
  }[] = [];

  for (const characterIdea of characterIdeas) {
    const chosenPortrait = await _internals.choosePortrait({
      portraitOptions,
      characterIdea,
    });

    assignedPortraits.push({
      character: characterIdea,
      portrait: chosenPortrait,
    });

    // Remove the chosen portrait from the options
    portraitOptions = portraitOptions.filter(
      (portrait) => portrait !== chosenPortrait
    );
  }

  return assignedPortraits;
}

export const _internals = { choosePortrait };
