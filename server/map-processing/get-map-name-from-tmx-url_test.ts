import { assertEquals } from "@std/assert/equals";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";

Deno.test(
  "getMapNameFromTmxUrl - should extract and sanitize map name correctly",
  () => {
    const testCases = [
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2010%20(3C%2000%20CE%203E).tmx",
        expected: "Knights-Villagers-Bandits-10-3C-00-CE-3E",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Knights%20%7BAura%20Wolf%7D%20(13)/Knights%20Villagers%20Bandits%2012%20(01%2000%2002%2003).tmx",
        expected: "Knights-Villagers-Bandits-12-01-00-02-03",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Nobles%20%7BAura%20Wolf%7D%20(11)/Nobles%20Evil%20Doers%201%20(18%2000%2019%201A).tmx",
        expected: "Nobles-Evil-Doers-1-18-00-19-1A",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Nobles%20%7BAura%20Wolf%7D%20(11)/Nobles%20Evil%20Doers%202%20(01%2000%204C%2003).tmx",
        expected: "Nobles-Evil-Doers-2-01-00-4C-03",
      },
      {
        tmxUrl:
          "https://github.com/Klokinator/FE-Repo/blob/main/Maps/Map%20Pack%20Mages%20%7BAura%20Wolf%7D%20(4)/Mages%20Mercenaries%203%20(42%2000%2043%2044).tmx",
        expected: "Mages-Mercenaries-3-42-00-43-44",
      },
    ];

    for (const { tmxUrl, expected } of testCases) {
      assertEquals(getMapNameFromTmxUrl(tmxUrl), expected);
    }
  }
);
