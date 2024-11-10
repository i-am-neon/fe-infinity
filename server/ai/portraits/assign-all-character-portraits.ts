import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { StoryArc } from "@/types/ai/StoryArc.ts";
import { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import { assignMultiplePortraits } from "@/ai/portraits/assign-multiple-portraits.ts";
import { allPortraitOptions } from "@/ai/portraits/portrait-metadata-creation/all-portrait-options.ts";

export default async function assignAllCharacterPortraits({
  storyArc,
  mainCharacterIdea,
}: {
  storyArc: StoryArc;
  mainCharacterIdea: CharacterIdea;
}): Promise<
  {
    characterIdea: CharacterIdea;
    portrait: PortraitMetadata;
    chapterJoined: number;
  }[]
> {
  const allCharacterIdeasWithChapterJoined: {
    idea: CharacterIdea;
    chapterJoined: number;
  }[] = [];
  storyArc.chapterIdeas.forEach((chapterIdea, chapterIndex) => {
    (chapterIdea.newPlayableCharacters || []).forEach((characterIdea) => {
      allCharacterIdeasWithChapterJoined.push({
        idea: characterIdea,
        chapterJoined: chapterIndex,
      });
    });
    allCharacterIdeasWithChapterJoined.push({
      idea: chapterIdea.boss,
      chapterJoined: chapterIndex,
    });
  });
  allCharacterIdeasWithChapterJoined.push({
    idea: mainCharacterIdea,
    chapterJoined: 0,
  });

  // TODO: could speed up assigning portraits by separating streams by gender and age and running those in parallel, only feeding in filtered options from the appropriate gender and age
  const allCharacterIdeasAndPortraits = await assignMultiplePortraits({
    portraitOptions: allPortraitOptions,
    characterIdeas: allCharacterIdeasWithChapterJoined.map((c) => c.idea),
  });

  return allCharacterIdeasAndPortraits.map(
    (characterIdeaAndPortrait, index) => ({
      characterIdea: allCharacterIdeasWithChapterJoined[index].idea,
      portrait: characterIdeaAndPortrait.portrait,
      chapterJoined: allCharacterIdeasWithChapterJoined[index].chapterJoined,
    })
  );
}

