import { allMapOptions } from "@/map-processing/all-map-options.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { CharacterIdea } from "@/types/ai/CharacterIdea.ts";
import { MapArea } from "@/types/ai/MapAreas.ts";
import generateCharacterStartingAreas from "./generate-character-starting-areas.ts";
import generateGenericStartingAreas from "./generate-generic-starting-areas.ts";
import generateNpcUnitCoords from "./generate-npc-unit-coords.ts";
import generatePlayerUnitCoords from "./generate-player-unit-coords.ts";
import getTerrainFromCoordinateArea from "@/ai/assemble-chapter-event/unit-placement/get-terrain-from-coordinate-area.ts";
import { MapLocation } from "@/types/map-location.ts";
import generateGenericUnitCoords from "@/ai/assemble-chapter-event/unit-placement/generate-generic-unit-coords.ts";
import generateUnitLine from "@/ai/assemble-chapter-event/unit-placement/generate-unit-line.ts";
import generateBossUnitCoords from "@/ai/assemble-chapter-event/unit-placement/generate-boss-unit-coords.ts";

export default async function getUnitsArray({
  characters,
  map,
  chapterData,
}: {
  characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "enemy" | "npc";
  }[];
  map: MapData;
  chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss">;
}): Promise<string[]> {
  const characterStartingAreas = await generateCharacterStartingAreas({
    characters,
    map,
    chapterData,
  });

  const genericStartingAreas = await generateGenericStartingAreas({
    characterStartingAreas,
    map,
    chapterData,
  });

  const playerMapArea = map.areas.find(
    (a) => a.name === characterStartingAreas.playerCharactersStartingAreaName
  )!;

  const npcMapAreas: MapArea[] =
    characterStartingAreas.npcStartingAreaNames.map(
      (characterArea) =>
        map.areas.find((a) => a.name === characterArea.areaName)!
    );
  const areaNameToAreaTerrainForNpc: Record<string, MapLocation[]> =
    npcMapAreas.reduce((acc, area) => {
      acc[area.name] = getTerrainFromCoordinateArea({
        terrainGrid: map.terrainGrid,
        fromX: area.coordinateArea.from.x,
        fromY: area.coordinateArea.from.y,
        toX: area.coordinateArea.to.x,
        toY: area.coordinateArea.to.y,
      });
      return acc;
    }, {} as Record<string, MapLocation[]>);

  const areaNameToAreaTerrainForGenericEnemies: Record<string, MapLocation[]> =
    genericStartingAreas.reduce((acc, area) => {
      acc[area.areaName] = getTerrainFromCoordinateArea({
        terrainGrid: map.terrainGrid,
        fromX: map.areas.find((a) => a.name === area.areaName)!.coordinateArea
          .from.x,
        fromY: map.areas.find((a) => a.name === area.areaName)!.coordinateArea
          .from.y,
        toX: map.areas.find((a) => a.name === area.areaName)!.coordinateArea.to
          .x,
        toY: map.areas.find((a) => a.name === area.areaName)!.coordinateArea.to
          .y,
      });
      return acc;
    }, {} as Record<string, MapLocation[]>);

  const boss = characters.find(
    (c) =>
      c.startingAllegiance === "enemy" && c.characterIdea.firstSeenAs === "boss"
  )!;
  const [playerCoords, npcCoords, genericEnemyCoords, bossCoords] =
    await Promise.all([
      generatePlayerUnitCoords({
        numberOfCharacters: characters.filter(
          (c) => c.startingAllegiance === "ally"
        ).length,
        mapArea: playerMapArea,
        areaTerrain: getTerrainFromCoordinateArea({
          terrainGrid: map.terrainGrid,
          fromX: playerMapArea.coordinateArea.from.x,
          fromY: playerMapArea.coordinateArea.from.y,
          toX: playerMapArea.coordinateArea.to.x,
          toY: playerMapArea.coordinateArea.to.y,
        }),
      }),
      generateNpcUnitCoords({
        characters: characters
          .filter(
            (c) =>
              c.startingAllegiance === "npc" ||
              (c.startingAllegiance === "enemy" &&
                c.characterIdea.firstSeenAs === "enemy non-boss")
          )
          .map((c) => ({
            characterName: c.characterIdea.name,
            characterClass: c.characterClass,
            startingAllegiance: c.startingAllegiance,
          })),
        npcStartingAreaNames: characterStartingAreas.npcStartingAreaNames,
        mapAreas: npcMapAreas,
        areaNameToAreaTerrain: areaNameToAreaTerrainForNpc,
      }),
      generateGenericUnitCoords({
        battleOverview: chapterData.battleOverview,
        genericStartingAreas: genericStartingAreas.map((area) => ({
          area: map.areas.find((a) => a.name === area.areaName)!,
          unitTypes: area.unitTypes,
        })),
        areaNameToAreaTerrain: areaNameToAreaTerrainForGenericEnemies,
      }),
      generateBossUnitCoords({
        areaTerrain: getTerrainFromCoordinateArea({
          terrainGrid: map.terrainGrid,
          fromX: map.areas.find(
            (a) => a.name === genericStartingAreas[0].areaName
          )!.coordinateArea.from.x,
          fromY: map.areas.find(
            (a) => a.name === genericStartingAreas[0].areaName
          )!.coordinateArea.from.y,
          toX: map.areas.find(
            (a) => a.name === genericStartingAreas[0].areaName
          )!.coordinateArea.to.x,
          toY: map.areas.find(
            (a) => a.name === genericStartingAreas[0].areaName
          )!.coordinateArea.to.y,
        }),
        boss: {
          characterName: boss.characterIdea.name,
          characterClass: boss.characterClass,
          startingAllegiance: boss.startingAllegiance,
        },
        mapArea: map.areas.find(
          (a) => a.name === genericStartingAreas[0].areaName
        )!,
      }),
    ]);

  // playerCoords aren't specific to the characters, so randomly assign.
  const playerCharacters = characters.filter(
    (c) => c.startingAllegiance === "ally"
  );
  const unitLinePromises = [];

  unitLinePromises.push(
    generateUnitLine({
      characterClass: boss.characterClass,
      startingAllegiance: boss.startingAllegiance,
      characterIdea: boss.characterIdea,
      xCoord: bossCoords.xCoord,
      yCoord: bossCoords.yCoord,
    })
  );

  for (const p of playerCharacters) {
    const coords = playerCoords.pop();
    unitLinePromises.push(
      generateUnitLine({
        characterClass: p.characterClass,
        startingAllegiance: p.startingAllegiance,
        characterIdea: p.characterIdea,
        xCoord: coords!.xCoord,
        yCoord: coords!.yCoord,
      })
    );
  }

  for (const n of npcCoords) {
    unitLinePromises.push(
      generateUnitLine({
        characterClass: n.characterClass,
        startingAllegiance: "npc",
        characterIdea: characters.find(
          (c) => c.characterIdea.name === n.characterName
        )!.characterIdea,
        xCoord: n.xCoord,
        yCoord: n.yCoord,
      })
    );
  }

  for (const g of genericEnemyCoords) {
    unitLinePromises.push(
      generateUnitLine({
        characterClass: g.characterClass,
        startingAllegiance: "ally",
        characterIdea: {
          name: "Soldier",
          age: "mature adult",
          backstory: "A generic enemy unit.",
          deathQuote: "",
          firstSeenAs: "enemy non-boss",
          // random between "male" and "female"
          gender: Math.random() > 0.5 ? "female" : "male",
          inGameDescription: "",
          personality: "None.",
          physicalDescription: "",
        },
        xCoord: g.xCoord,
        yCoord: g.yCoord,
      })
    );
  }

  const unitLines = await Promise.all(unitLinePromises);

  return unitLines;
}

if (import.meta.main) {
  const characters: {
    characterIdea: CharacterIdea;
    characterClass: string;
    startingAllegiance: "ally" | "npc" | "enemy";
  }[] = [
    {
      characterIdea: {
        name: "Zynra",
        gender: "female",
        personality:
          "Curious and empathetic, driven by a deep sense of justice.",
        age: "young adult",
        backstory:
          "Zynra grew up in the outskirts of the Elderwood Thicket, where ancient sigils whispered through the trees. She witnessed a close friend fall into corruption due to forbidden magic, which fueled her resolve to understand and protect against such dangers. Over the years, she studied these sigils, striving to grasp their nature and prevent their misuse. Guided by compassion and courage, she now ventures forth to unite the fractured kingdoms and avert the awakening of Noxareth.",
        firstSeenAs: "ally",
        physicalDescription:
          "A slender woman with flowing silver hair and vibrant green eyes, dressed in forest garb adorned with subtle sigils.",
        inGameDescription:
          "A seeker of truth and unity, battling to protect the realm from dark influences.",
        deathQuote:
          "This can't be how it ends... for Eldralis. The truth must live on.",
      },
      characterClass: "Mage",
      startingAllegiance: "ally",
    },
    {
      characterIdea: {
        name: "Elysia",
        gender: "female",
        personality:
          "Wise and nurturing, Elysia is deeply connected to the forest and its spirits.",
        age: "mature adult",
        backstory:
          "Elysia has spent decades as a guardian of the Elderwood Thicket, learning the ancient ways of the druids. She witnessed the corruption of many sigil wielders and has dedicated her life to protecting the grove from those who would exploit its power. Her wisdom and connection to nature make her a valuable ally to Zynra, as she seeks to guide the young hero on her quest.",
        firstSeenAs: "allied NPC",
        physicalDescription:
          "A tall woman with long, braided brown hair and deep-set amber eyes, often wearing robes made of leaves and vines.",
        inGameDescription:
          "A guardian of the Elderwood, she protects the ancient sigils and their secrets.",
        deathQuote:
          "The forest... must remain safe. Do not let my sacrifice be in vain.",
      },
      characterClass: "Shaman",
      startingAllegiance: "npc",
    },
    {
      characterIdea: {
        name: "Kieran",
        gender: "male",
        personality:
          "Ambitious and ruthless, Kieran is willing to do anything to achieve his goals, including sacrificing others.",
        age: "young adult",
        backstory:
          "Once a promising scholar at the Sigil Academy, Kieran became disillusioned with the limitations of knowledge and sought power through the Chosen of Nihilus. He believes that awakening Noxareth will grant him the strength to reshape Eldralis according to his vision. His mastery of corrupted sigils makes him a formidable foe, as he wields their power without regard for the consequences.",
        firstSeenAs: "boss",
        physicalDescription:
          "A tall man with short black hair and piercing blue eyes, clad in dark armor adorned with sigils that pulse with a sinister glow.",
        inGameDescription:
          "A former scholar turned dark enforcer, he seeks to awaken the slumbering god.",
        deathQuote: "You... will never understand the power I sought...!",
      },
      characterClass: "Shaman",
      startingAllegiance: "enemy",
    },
  ];

  const chapterData: Omit<ChapterIdea, "newPlayableCharacters" | "boss"> = {
    chapterTitle: "The Awakening Shadows",
    premise:
      "Zynra arrives at the Elderwood Thicket, where she discovers that the Chosen of Nihilus are attempting to harness the power of the ancient sigils to awaken Noxareth. She must rally the druids of Ryndor to protect the sacred grove and confront the leader of the Chosen, who seeks to corrupt the sigils for their own gain. The battle will test Zynra's resolve and her understanding of the sigils' true nature.",
    preChapterScene:
      "Zynra arrives at the Elderwood Thicket, feeling the weight of the ancient sigils' presence. The druids are on high alert, sensing a disturbance as the Chosen of Nihilus encroach upon their sacred ground. Determined to protect the grove and uncover the truth, Zynra prepares to confront the dark forces threatening to awaken Noxareth.",
    battleOverview:
      "The battle unfolds in the mixed terrain of the Elderwood Thicket, where Zynra and Elysia must defend against the Chosen of Nihilus soldiers attempting to breach the sacred grove. The Northern Plains and Castle Wall area provides a strategic defensive position, allowing Zynra to utilize the castle walls for cover while engaging the enemy. The Central Cliffs and Forest area offers high ground and natural cover, which can be advantageous for ambushing the advancing foes. \n\nAs the battle progresses, Zynra and Elysia will need to navigate through the Western Village, where they can find refuge and resources to bolster their defenses. The Eastern Fort and Sea area serves as a stronghold for the Chosen, and Zynra must be cautious as she approaches this fortified position. \n\nUltimately, Zynra will confront Kieran in the heart of the battlefield, where the sigils' power is most concentrated. The terrain will play a crucial role in this final confrontation, as Zynra must harness the ancient sigils' true nature to thwart Kieran's ambitions and protect the grove from corruption.",
    postChapterScene:
      "With Kieran defeated, Zynra and Elysia stand amidst the remnants of the battle, the grove still intact but the threat of the Chosen of Nihilus looming larger than ever. Elysia shares her knowledge of the sigils, revealing their true nature and the importance of protecting them from corruption. Zynra vows to continue her quest, determined to unite the kingdoms and prevent the awakening of Noxareth.",
  };

  const mapData = allMapOptions[0];

  const res = await getUnitsArray({
    characters,
    chapterData,
    map: mapData,
  });
  console.log(JSON.stringify(res, null, 2));
}

