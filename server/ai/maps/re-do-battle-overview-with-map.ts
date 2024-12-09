import generateStructuredData from "@/ai/utilities/generate-structured-data.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { ChapterIdea } from "@/types/ai/ChapterIdea.ts";
import { z } from "zod";

export default async function reDoBattleOverviewWithMap({
  chapterIdea,
  mapData,
}: {
  chapterIdea: ChapterIdea;
  mapData: MapData;
}): Promise<string> {
  const systemMessage = `You will decide the battle overview for a given chapter in a Fire Emblem 8 fangame.
The map was chosen based on the chapter idea, meaning the battle overview was created before the map was chosen.
This means that the battle overview may not perfectly match the map.

It is your job to re-write the battle overview of the Chapter Idea to match the given map.

The new battle overview should be a tactical overview of the battle, including specific Areas from the MapData and how they relate to general unit positions.
`;
  const { battleOverview } = await generateStructuredData({
    systemMessage,
    prompt: `ChapterIdea: ${JSON.stringify(
      chapterIdea,
      null,
      2
    )}\n MapData: ${JSON.stringify(mapData, null, 2)}`,
    schema: z.object({ battleOverview: z.string() }),
  });
  return battleOverview;
}

if (import.meta.main) {
  const chapterIdea: ChapterIdea = {
    chapterTitle: "The Trials of Trust",
    premise:
      "With the Council's support, Elara and Kira venture into the Dragon's Roost to seek the aid of the Dragon Riders of Drakthar. However, they must prove their worth by facing a series of trials set by the dragon riders, testing their strength and resolve. As they navigate the trials, they uncover a plot by the Veil to sabotage their efforts and awaken the slumbering god.",
    newPlayableCharacters: [
      {
        name: "Ronan",
        gender: "male",
        personality: "Brave and loyal, with a strong sense of honor.",
        age: "young adult",
        backstory:
          "Ronan is a dragon rider from Drakthar, known for his fierce loyalty to his comrades and his bond with his dragon, Ember. He has trained for years to protect his homeland from outside threats, but he is also haunted by the loss of friends in battle. His determination to protect those he cares about drives him to join Elara's quest.",
        firstSeenAs: "ally",
        physicalDescription:
          "A tall, muscular man with fiery red hair and a confident demeanor.",
        inGameDescription:
          "A dragon rider with a fierce spirit and a heart of gold.",
        deathQuote: "I won't let you down... not now.",
      },
    ],
    boss: {
      name: "Thorne",
      gender: "male",
      personality: "Cunning and manipulative, with a hidden agenda.",
      age: "mature adult",
      backstory:
        "Thorne is a high-ranking member of the Veil, posing as a dragon rider to infiltrate Drakthar. He seeks to awaken the slumbering god to gain ultimate power, using the trials as a distraction to further his plans. His mastery of deception makes him a dangerous adversary.",
      firstSeenAs: "boss",
      physicalDescription:
        "A charismatic man with sharp features and a sly smile, often dressed in dragon rider attire.",
      inGameDescription:
        "A dragon rider with a hidden agenda, seeking to awaken the slumbering god.",
      deathQuote: "You may have won this battle, but the war is far from over.",
    },
    preChapterScene:
      "Elara and Kira arrive at the Dragon's Roost, where they are greeted by Ronan and the other dragon riders. To gain their trust, they must complete a series of trials that test their strength and resolve. However, unbeknownst to them, Thorne is watching their every move, plotting to sabotage their efforts.",
    battleOverview:
      "The chapter takes place in the Dragon's Roost, where Elara, Kira, and Ronan must complete various trials while fending off Thorne's minions. The objective is to defeat Thorne and prove their worth to the dragon riders.",
    postChapterScene:
      "After defeating Thorne, Elara and her allies earn the trust of the dragon riders, who agree to aid them in their quest. Ronan joins their party, bringing his dragon Ember along for the journey. With newfound allies, they set their sights on the Veil's stronghold, determined to stop the awakening of the slumbering god.",
  };

  const mapData: MapData = {
    name: "KnightsVillagersBandits1201000203",
    description:
      "A mixed terrain map featuring a village, cliffs, and a fort, with various points of interest like houses and vendors.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01000203.png" width="512" height="512"/>\n </tileset>\n <layer name="Main" width="15" height="17">\n  <properties>\n   <property name="Main" value=""/>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="MapChangesID" value="KnightsVillagersBandits1201000203_Changes"/>\n   <property name="MapID" value="KnightsVillagersBandits1201000203_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x02"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxdk01LlFEUx++dh/BlkYISpG4lFRyl2pS2UsFxVuFHmBF1dCN+hGmMSEL7CukYgq8Lv4JBoBmUfQMXiePGkmjh73D+wzy4+HGfe8495/zPufeZDiE8gWnYhrNMCJuss7As32vYTULYg32o6twa6w4MwyKMQS/+POtbKMl+gu0UvsEb9p9Uq6LvCdlPYSGVz2pc4avBNXzF1hHd15a4/4zvSWz56PsHpi/jWqyPdfgOLfhfQVH2caufuP2K7xWDuGPW5uh1DoLnr3LuVnrKOmv2A+UxLf+VP83H4OtI9P76ONcPA3AhXef4jmKjRhfffxVn+z9QsB7x52Aqaei4SdXqhvPg60t4BDfSNgfzUEp8Lqv4/sVGjceq/0v1fsILbBvq8xA62T+MPs8jxdr5Uem1PD+0Nx1F1bZZXSiHzWsQ/7OUbsvRoxjbP4/+huyN1d/RJNRgRndQS+V5Cn2QjT4Ti2mHXPD3OaT5WR/vo99X+d5dVKX1nd78Z9iCrOxF9fBFd5++i4rek9XZQdsH2M14zg39D/UZWnz6Lupa63HN9h6hNXGNY+rXNOfQPqE3mVd/TaY104g3nVa7IN0FafgNl5rhkv5p+//uAB6ufEQ=\n  </data>\n </layer>\n <layer name="Left Village Destroyed" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgF9AIdzAwMnUDcxUy63hVAPSuBeBUZek8A9ZwE4lNk6B0FwxcAANNMBg0=\n  </data>\n </layer>\n <layer name="Left Village Visited" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFIwEoDrQDRsGgAwBIkAAi\n  </data>\n </layer>\n <layer name="Right Village Destroyed" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DkgQ5mBoZOIO5iJl3vCqCelUC8igy9J4B6TgLxKTL0UhsAAHg1Bg0=\n  </data>\n </layer>\n <layer name="Right Village Visited" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0BMoDrQDoAAAFYQAIg==\n  </data>\n </layer>\n</map>\n',
    height: 17,
    width: 15,
    terrainGrid: [
      [
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Castle Wall",
        "Castle Wall",
        "Castle Wall",
        "Plains",
        "Forest",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "House",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Castle Wall",
        "Castle Wall",
        "Castle Wall",
        "Plains",
        "Plains",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Vendor",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Castle Wall",
        "Fort Gate",
        "Castle Wall",
        "Plains",
        "Plains",
      ],
      [
        "Plains",
        "Forest",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Cliff",
        "Cliff",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Sand",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Armory",
        "Plains",
        "Plains",
        "Plains",
        "Cliff",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Fort",
        "Sand",
      ],
      [
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Cliff",
        "Sand",
        "Sand",
        "Sand",
        "Sand",
        "Plains",
        "Sand",
        "Sea",
      ],
      [
        "Plains",
        "Village Wall",
        "Village Wall",
        "Village Wall",
        "Plains",
        "Plains",
        "Cliff",
        "Plains",
        "Fort",
        "Sand",
        "Sea",
        "Sand",
        "Sand",
        "Sand",
        "Sea",
      ],
      [
        "Plains",
        "Village Wall",
        "Village Wall",
        "Village Wall",
        "Forest",
        "Plains",
        "Cliff",
        "Sand",
        "Sand",
        "Sea",
        "Sand",
        "Sea",
        "Sea",
        "Sea",
        "Sea",
      ],
      [
        "Forest",
        "Village Wall",
        "Village Entrance",
        "Village Wall",
        "Plains",
        "Plains",
        "Cliff",
        "Sand",
        "Sand",
        "Sea",
        "Fort",
        "Sand",
        "Sea",
        "Sea",
        "Sea",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Sand",
        "Sand",
        "Sea",
        "Sand",
        "Sand",
        "Sea",
        "Sea",
        "Sand",
      ],
      [
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Sand",
        "Sand",
        "Sand",
        "Sea",
        "Sand",
        "Sand",
        "Plains",
      ],
      [
        "House",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Village Wall",
        "Village Wall",
        "Village Wall",
        "Plains",
        "Forest",
      ],
      [
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Village Wall",
        "Village Wall",
        "Village Wall",
        "Plains",
        "Plains",
      ],
      [
        "Plains",
        "Hill",
        "Hill",
        "Hill",
        "Plains",
        "Plains",
        "House",
        "Plains",
        "Plains",
        "Plains",
        "Village Wall",
        "Village Entrance",
        "Village Wall",
        "Plains",
        "Plains",
      ],
      [
        "Hill",
        "Hill",
        "Peak",
        "Peak",
        "Plains",
        "Plains",
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
      ],
      [
        "Peak",
        "Hill",
        "Hill",
        "Plains",
        "Hill",
        "Plains",
        "Forest",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
        "Plains",
      ],
    ],
    pointsOfInterest: [
      {
        x: 5,
        y: 1,
        type: "House",
      },
      {
        x: 3,
        y: 2,
        type: "Vendor",
      },
      {
        x: 11,
        y: 2,
        type: "Fort Gate",
      },
      {
        x: 3,
        y: 4,
        type: "Armory",
      },
      {
        x: 13,
        y: 4,
        type: "Fort",
      },
      {
        x: 8,
        y: 6,
        type: "Fort",
      },
      {
        x: 2,
        y: 8,
        type: "Village Entrance",
      },
      {
        x: 10,
        y: 8,
        type: "Fort",
      },
      {
        x: 0,
        y: 11,
        type: "House",
      },
      {
        x: 6,
        y: 14,
        type: "House",
      },
      {
        x: 11,
        y: 14,
        type: "Village Entrance",
      },
    ],
    interactableTiles: [
      {
        x: 5,
        y: 1,
        type: "House",
      },
      {
        x: 3,
        y: 2,
        type: "Vendor",
      },
      {
        x: 3,
        y: 4,
        type: "Armory",
      },
      {
        x: 2,
        y: 8,
        type: "Village Entrance",
      },
      {
        x: 0,
        y: 11,
        type: "House",
      },
      {
        x: 6,
        y: 14,
        type: "House",
      },
      {
        x: 11,
        y: 14,
        type: "Village Entrance",
      },
    ],
    areas: [
      {
        name: "Northern Plains and Castle Wall",
        description:
          "This area features open plains with a castle wall to the south, providing a defensive position. It includes a vendor and a fort gate.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 14,
            y: 2,
          },
        },
      },
      {
        name: "Central Cliffs and Forest",
        description:
          "A rugged area with cliffs and forests, offering strategic high ground and cover. It includes an armory and a fort.",
        coordinateArea: {
          from: {
            x: 0,
            y: 3,
          },
          to: {
            x: 14,
            y: 5,
          },
        },
      },
      {
        name: "Western Village",
        description:
          "A small village area enclosed by walls, featuring a village entrance and a house. It provides a safe haven and strategic point.",
        coordinateArea: {
          from: {
            x: 0,
            y: 6,
          },
          to: {
            x: 4,
            y: 8,
          },
        },
      },
      {
        name: "Eastern Fort and Sea",
        description:
          "This area includes a fort near the sea, providing a strong defensive position. It features sandy terrain and a fort.",
        coordinateArea: {
          from: {
            x: 8,
            y: 6,
          },
          to: {
            x: 14,
            y: 9,
          },
        },
      },
      {
        name: "Southern Hills and Village",
        description:
          "A hilly region with a village entrance and houses, offering a mix of elevation and residential areas.",
        coordinateArea: {
          from: {
            x: 0,
            y: 10,
          },
          to: {
            x: 14,
            y: 14,
          },
        },
      },
      {
        name: "Southwestern Peaks",
        description:
          "A mountainous area with peaks and hills, providing high ground and a natural barrier.",
        coordinateArea: {
          from: {
            x: 0,
            y: 15,
          },
          to: {
            x: 4,
            y: 16,
          },
        },
      },
    ],
  };

  const result = await reDoBattleOverviewWithMap({ chapterIdea, mapData });
  console.log("result :>> ", result);
}

