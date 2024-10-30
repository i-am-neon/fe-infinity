import { _internals, assignMultiplePortraits } from "@/ai/portraits/assign-multiple-portraits.ts";
import type { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import type { PortraitMetadata } from "@/types/PortraitMetadata.ts";
import { assertEquals } from "@std/assert/equals";
import { assertRejects } from "@std/assert/rejects";
import { assertSpyCallAsync, assertSpyCalls, resolvesNext, stub } from "@std/testing/mock";

// Mock data for testing
const mockCharacterIdeas: CharacterIdea[] = [
  {
    name: "Elara",
    gender: "female",
    personality: "determined and compassionate",
    age: "young adult",
    backstory: "Elara hails from the Kingdom of Aetheria...",
    firstSeenAs: "ally",
    description: "Elara is a young woman with silver hair and blue eyes.",
  },
  {
    name: "Thalen",
    gender: "male",
    personality: "stoic and brave",
    age: "mature adult",
    backstory: "A seasoned warrior from Eldoria...",
    firstSeenAs: "enemy non-boss",
    description: "Thalen is a tall man with grizzled features.",
  },
];

const mockPortraitOptions: PortraitMetadata[] = [
  {
    originalImageName: "portrait1.png",
    gender: "female",
    age: "young adult",
    hairColor: "silver",
    eyeColor: "blue",
    vibe: "determined",
    clothing: "mage robes",
    eyeMouthOffsets: { mouthX: 10, mouthY: 20, eyeX: 15, eyeY: 25 },
  },
  {
    originalImageName: "portrait2.png",
    gender: "male",
    age: "mature adult",
    hairColor: "brown",
    eyeColor: "green",
    vibe: "stoic",
    clothing: "warrior armor",
    eyeMouthOffsets: { mouthX: 12, mouthY: 22, eyeX: 17, eyeY: 27 },
  },
];

Deno.test(
  "assignMultiplePortraits should assign unique portraits to each character",
  async () => {
    // Stub `choosePortrait` to alternate return values, simulating unique selections for each character
    using choosePortraitStub = stub(
      _internals,
      "choosePortrait",
      resolvesNext([mockPortraitOptions[0], mockPortraitOptions[1]])
    );

    const assignedPortraits = await assignMultiplePortraits({
      characterIdeas: mockCharacterIdeas,
      portraitOptions: [...mockPortraitOptions],
    });

    assertEquals(assignedPortraits.length, mockCharacterIdeas.length);

    // Verify each character received a unique portrait
    const assignedPortraitNames = assignedPortraits.map(
      (assignment) => assignment.portrait.originalImageName
    );
    assertEquals(
      new Set(assignedPortraitNames).size,
      assignedPortraitNames.length
    );

    // Verify `choosePortrait` was called correctly for each character
    assertSpyCalls(choosePortraitStub, mockCharacterIdeas.length);
    assertSpyCallAsync(choosePortraitStub, 0, {
      args: [{ portraitOptions: mockPortraitOptions, characterIdea: mockCharacterIdeas[0] }],
      returned: mockPortraitOptions[0],
    });

    // asserts stub was only called twice
    assertSpyCalls(choosePortraitStub, 2);
  }
);

Deno.test(
  "assignMultiplePortraits should throw an error if there are not enough portraits for all characters",
  async () => {
    // Stub `choosePortrait` to always return the first portrait, simulating limited options
    using choosePortraitStub = stub(
      _internals,
      "choosePortrait",
      resolvesNext([]) // Empty array since it should never be called
    );

    await assertRejects(
      () =>
        assignMultiplePortraits({
          characterIdeas: mockCharacterIdeas,
          portraitOptions: [mockPortraitOptions[0]], // Insufficient options
        }),
      Error,
      "Not enough portraits to assign to each character"
    );

    // Verify `choosePortrait` was never called because there were not enough portraits
    assertSpyCalls(choosePortraitStub, 0);
  }
);

