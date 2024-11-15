import { assertEquals } from "@std/assert/equals";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";

Deno.test(
  "getMapNameFromTmxUrl - should extract and sanitize map name correctly",
  () => {
    const testCases = [
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2010%20(3C%2000%20CE%203E).tmx",
        expected: "KnightsVillagersBandits103C00CE3E",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2012%20(01%2000%2002%2003).tmx",
        expected: "KnightsVillagersBandits1201000203",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Nobles%20%7BAura%20Wolf%7D%20(11)/Nobles%20Evil%20Doers%201%20(18%2000%2019%201A).tmx",
        expected: "NoblesEvilDoers11800191A",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Nobles%20%7BAura%20Wolf%7D%20(11)/Nobles%20Evil%20Doers%202%20(01%2000%204C%2003).tmx",
        expected: "NoblesEvilDoers201004C03",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Mages%20%7BAura%20Wolf%7D%20(4)/Mages%20Mercenaries%203%20(42%2000%2043%2044).tmx",
        expected: "MagesMercenaries342004344",
      },
    ];

    for (const { tmxUrl, expected } of testCases) {
      assertEquals(getMapNameFromTmxUrl(tmxUrl), expected);
    }
  }
);
