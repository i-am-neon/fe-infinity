import { _internals, assignMultipleMaps } from "@/ai/maps/assign-multiple-maps.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { assertEquals } from "@std/assert/equals";
import { assertRejects } from "@std/assert/rejects";
import { assertSpyCallAsync, assertSpyCalls, resolvesNext, stub } from "@std/testing/mock";

// Mock data for testing
const mockChapterNameToBattleOverview: Record<string, string> = {
  "Chapter 1": "intro battle",
  "Chapter 2": "desert skirmish",
};

const mockMapOptions: MapData[] = [
  {
    name: "Map 1",
    tmx: "<CHAPTERID>-map1.tmx",
    description: "intro battle",
    areas: [],
    height: 0,
    width: 0,
    pointsOfInterest: [],
    terrainGrid: [],
  },
  {
    name: "Map 2",
    tmx: "<CHAPTERID>-map2.tmx",
    description: "desert skirmish",
    areas: [],
    height: 0,
    width: 0,
    pointsOfInterest: [],
    terrainGrid: [],
  },
];

Deno.test(
  "assignMultipleMaps should assign unique maps to each chapter",
  async () => {
    // Stub `chooseMap` to alternate return values, simulating unique selections for each chapter
    using chooseMapStub = stub(
      _internals,
      "chooseMap",
      resolvesNext([mockMapOptions[0].name, mockMapOptions[1].name])
    );

    const assignedMaps = await assignMultipleMaps({
      chapterNameToBattleOverview: mockChapterNameToBattleOverview,
      allMapOptions: [...mockMapOptions],
    });

    assertEquals(Object.keys(assignedMaps).length, Object.keys(mockChapterNameToBattleOverview).length);

    // Verify each chapter received a unique map
    const assignedMapNames = Object.values(assignedMaps).map((map) => map.name);
    assertEquals(new Set(assignedMapNames).size, assignedMapNames.length);

    // Verify the `chooseMap` function was called correctly for each chapter
    assertSpyCalls(chooseMapStub, Object.keys(mockChapterNameToBattleOverview).length);

    assertSpyCallAsync(chooseMapStub, 0, {
      args: [{ mapOptions: mockMapOptions, battleOverview: "intro battle" }],
      returned: mockMapOptions[0].name,
    });

    assertSpyCallAsync(chooseMapStub, 1, {
      args: [{ mapOptions: [mockMapOptions[1]], battleOverview: "desert skirmish" }],
      returned: mockMapOptions[1].name,
    });
  }
);

Deno.test(
  "assignMultipleMaps should throw an error if there are not enough maps for all chapters",
  async () => {
    // Stub `chooseMap` to ensure it is not called when there are insufficient options
    using chooseMapStub = stub(
      _internals,
      "chooseMap",
      resolvesNext([]) // Empty array since it should not be called
    );

    await assertRejects(
      () =>
        assignMultipleMaps({
          chapterNameToBattleOverview: mockChapterNameToBattleOverview,
          allMapOptions: [mockMapOptions[0]], // Insufficient options
        }),
      Error,
      "Not enough maps to assign to each character"
    );

    // Verify `chooseMap` was never called because there were not enough maps
    assertSpyCalls(chooseMapStub, 0);
  }
);

Deno.test(
  "assignMultipleMaps should replace <CHAPTERID> in the rawTmx field with the correct chapter key",
  async () => {
    const assignedMaps = await assignMultipleMaps({
      chapterNameToBattleOverview: { "Chapter 1": "intro battle" },
      allMapOptions: [...mockMapOptions],
    });

    assertEquals(assignedMaps["Chapter 1"].tmx, "Chapter 1-map1.tmx");
  }
);