import { StoryArc } from "@/types/ai/StoryArc.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";

export default function getAllCharacterIdeasWithChapterJoinedAndIsLord({
  storyArc,
  mainCharacterIdea,
}: {
  storyArc: StoryArc;
  mainCharacterIdea: CharacterIdea;
}): {
  idea: CharacterIdea;
  chapterJoined: number;
  isLord: boolean;
}[] {
  const allCharacterIdeasWithChapterJoined: {
    idea: CharacterIdea;
    chapterJoined: number;
    isLord: boolean;
  }[] = [];
  storyArc.chapterIdeas.forEach((chapterIdea, chapterIndex) => {
    (chapterIdea.newPlayableCharacters || []).forEach((characterIdea) => {
      allCharacterIdeasWithChapterJoined.push({
        idea: characterIdea,
        chapterJoined: chapterIndex,
        isLord: false,
      });
    });
    allCharacterIdeasWithChapterJoined.push({
      idea: chapterIdea.boss,
      chapterJoined: chapterIndex,
      isLord: false,
    });
  });
  allCharacterIdeasWithChapterJoined.push({
    idea: mainCharacterIdea,
    chapterJoined: 0,
    isLord: true,
  });
  return allCharacterIdeasWithChapterJoined;
}

