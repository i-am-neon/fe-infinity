import prepareTmx from "@/map-processing/prepare-tmx.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("prepareTmx - Knights10 (has <properties> tag)", () => {
  const rawTmx = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">
  <image source="../../Tilesets/FE8/3C00CE3E.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="20" height="18">
  <properties>
   <property name="Main" value=""/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=
  </data>
 </layer>
 <layer name="Wall" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="0"/>
   <property name="Width" value="2"/>
   <property name="X" value="3"/>
   <property name="Y" value="0"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYEAAYWYGhk9MDKNgFIyCUTAKBgEAAM3eAQs=
  </data>
 </layer>
 <layer name="Left Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="1"/>
   <property name="Y" value="1"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYKA+cKKBmaNgFIyCUTDSAABjRwBD
  </data>
 </layer>
 <layer name="Right Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="2"/>
   <property name="Width" value="1"/>
   <property name="X" value="19"/>
   <property name="Y" value="10"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0AM4DbQDRsGQAwCXCABD
  </data>
 </layer>
 <layer name="Door" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="2"/>
   <property name="ID" value="3"/>
   <property name="Width" value="2"/>
   <property name="X" value="18"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AUjHSwjpGBQZCZeuZZAs0yo6J5IxUAANEhATk=
  </data>
 </layer>
</map>
`;

  const actual = prepareTmx({
    tmx: rawTmx,
    mapName: "Knights10",
    tileset: "3C00CE3E",
  });

  const expected = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">
  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="20" height="18">
  <properties>
   <property name="Main" value=""/>
   <property name="Anims" value="_3CAnims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="MapChangesID" value="Knights10Changes"/>
   <property name="MapID" value="Knights10Map"/>
   <property name="ObjectType" value="0x3C"/>
   <property name="PaletteID" value="0xCE"/>
   <property name="TileConfig" value="0x3E"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJx1lMFLVFEUxs97jzCLBGtW+QckaRBaqW0NMkQj0H9AR4KUrKi/oBQEEWzZNhujGNFZuosZUqioBqJNW1G0shFXtun7uN/l3l60+HHmnnfOd885994pZGZnxKnUrAHq4AAsghHwVGvv/xTFlRKzj2bWD2qgFTpjsu/w7bPiaUfBA/BIud7/CxxKexs5X2ALsO+lw9pOS68Rxcd6B5G/HtVLvW3ofMXvn7Cvk8AJ7e9j18BDUIk0lhDXnIacFTAMnRuqrwPfTqbOliPdRq4OWq9Djc4o7y50mpkHpi2Q193SPGkrOZ0mxL8EK2ADrMPXhpkNIKYFXIOvnNM9BmqJs76Pe5FOTVojiBmHrYI9cA7rOmxRMWXFf7Bwdi3qZT5xeRPgJjiLmnZ0X+jjrIalMy6NTTCrmZwHF0A3eJa6c+TeQ+AVeGx/nw/vyCp8z1XvD82CuZfw7bv8/M57wRkN8jzBLdVAjYLuXXymrJOxC2BfOv2aw4RyWc99cAdMmZs79fy7uJq5O+XrnOM8wYDyZ8BbsCVN7jEpraK+ez3Wx7d5JQt6t6Pz87Mvap5V5bOmpdzcyJvEvaUe9e17rupceBZP1CP7Ltm/b4O9sce+zNmK3nlvVGNJZ8v3+MLCjL1GbxY02FtPzl4Eo2AvcW9nQ/fud+rqO56G/b0Ga7gcafh17G/H7yOwa+6+UfMbWE7C/j7e15Bfe8t4/vfwzl03N0fet67E6eV7+d/6D92xtrA=
  </data>
 </layer>
 <layer name="Broken_Wall" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="0"/>
   <property name="Width" value="2"/>
   <property name="X" value="3"/>
   <property name="Y" value="0"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYEAAYWYGhk9MDKNgFIyCUTAKBgEAAM3eAQs=
  </data>
 </layer>
 <layer name="Left Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="1"/>
   <property name="Y" value="1"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYKA+cKKBmaNgFIyCUTDSAABjRwBD
  </data>
 </layer>
 <layer name="Right Chest" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="2"/>
   <property name="Width" value="1"/>
   <property name="X" value="19"/>
   <property name="Y" value="10"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0AM4DbQDRsGQAwCXCABD
  </data>
 </layer>
 <layer name="Door" width="20" height="18" visible="0">
  <properties>
   <property name="Height" value="2"/>
   <property name="ID" value="3"/>
   <property name="Width" value="2"/>
   <property name="X" value="18"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AUjHSwjpGBQZCZeuZZAs0yo6J5IxUAANEhATk=
  </data>
 </layer>
</map>
`;

  assertEquals(actual, expected);
});

Deno.test("prepareTmx - Knights12 (does NOT have <properties> tag)", () => {
  const rawTmx = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">
  <image source="../../Tilesets/FE8/01000203.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="15" height="17">
  <data encoding="base64" compression="zlib">
   eJxdk01LlFEUx++dh/BlkYISpG4lFRyl2pS2UsFxVuFHmBF1dCN+hGmMSEL7CukYgq8Lv4JBoBmUfQMXiePGkmjh73D+wzy4+HGfe8495/zPufeZDiE8gWnYhrNMCJuss7As32vYTULYg32o6twa6w4MwyKMQS/+POtbKMl+gu0UvsEb9p9Uq6LvCdlPYSGVz2pc4avBNXzF1hHd15a4/4zvSWz56PsHpi/jWqyPdfgOLfhfQVH2caufuP2K7xWDuGPW5uh1DoLnr3LuVnrKOmv2A+UxLf+VP83H4OtI9P76ONcPA3AhXef4jmKjRhfffxVn+z9QsB7x52Aqaei4SdXqhvPg60t4BDfSNgfzUEp8Lqv4/sVGjceq/0v1fsILbBvq8xA62T+MPs8jxdr5Uem1PD+0Nx1F1bZZXSiHzWsQ/7OUbsvRoxjbP4/+huyN1d/RJNRgRndQS+V5Cn2QjT4Ti2mHXPD3OaT5WR/vo99X+d5dVKX1nd78Z9iCrOxF9fBFd5++i4rek9XZQdsH2M14zg39D/UZWnz6Lupa63HN9h6hNXGNY+rXNOfQPqE3mVd/TaY104g3nVa7IN0FafgNl5rhkv5p+//uAB6ufEQ=
  </data>
 </layer>
 <layer name="Left Village Destroyed" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="3"/>
   <property name="ID" value="0"/>
   <property name="Width" value="3"/>
   <property name="X" value="1"/>
   <property name="Y" value="6"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgF9AIdzAwMnUDcxUy63hVAPSuBeBUZek8A9ZwE4lNk6B0FwxcAANNMBg0=
  </data>
 </layer>
 <layer name="Left Village Visited" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="2"/>
   <property name="Y" value="8"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFIwEoDrQDRsGgAwBIkAAi
  </data>
 </layer>
 <layer name="Right Village Destroyed" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="3"/>
   <property name="ID" value="2"/>
   <property name="Width" value="3"/>
   <property name="X" value="10"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2DkgQ5mBoZOIO5iJl3vCqCelUC8igy9J4B6TgLxKTL0UhsAAHg1Bg0=
  </data>
 </layer>
 <layer name="Right Village Visited" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="3"/>
   <property name="Width" value="1"/>
   <property name="X" value="11"/>
   <property name="Y" value="14"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0BMoDrQDoAAAFYQAIg==
  </data>
 </layer>
</map>
`;

  const actual = prepareTmx({
    tmx: rawTmx,
    mapName: "Knights12",
    tileset: "01000203",
  });

  const expected = `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">
  <image source="Tilesets/01000203.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="15" height="17">
  <properties>
   <property name="Main" value=""/>
   <property name="Anims" value="_01Anims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="MapChangesID" value="Knights12Changes"/>
   <property name="MapID" value="Knights12Map"/>
   <property name="ObjectType" value="0x01"/>
   <property name="PaletteID" value="0x02"/>
   <property name="TileConfig" value="0x03"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxdk01LlFEUx++dh/BlkYISpG4lFRyl2pS2UsFxVuFHmBF1dCN+hGmMSEL7CukYgq8Lv4JBoBmUfQMXiePGkmjh73D+wzy4+HGfe8495/zPufeZDiE8gWnYhrNMCJuss7As32vYTULYg32o6twa6w4MwyKMQS/+POtbKMl+gu0UvsEb9p9Uq6LvCdlPYSGVz2pc4avBNXzF1hHd15a4/4zvSWz56PsHpi/jWqyPdfgOLfhfQVH2caufuP2K7xWDuGPW5uh1DoLnr3LuVnrKOmv2A+UxLf+VP83H4OtI9P76ONcPA3AhXef4jmKjRhfffxVn+z9QsB7x52Aqaei4SdXqhvPg60t4BDfSNgfzUEp8Lqv4/sVGjceq/0v1fsILbBvq8xA62T+MPs8jxdr5Uem1PD+0Nx1F1bZZXSiHzWsQ/7OUbsvRoxjbP4/+huyN1d/RJNRgRndQS+V5Cn2QjT4Ti2mHXPD3OaT5WR/vo99X+d5dVKX1nd78Z9iCrOxF9fBFd5++i4rek9XZQdsH2M14zg39D/UZWnz6Lupa63HN9h6hNXGNY+rXNOfQPqE3mVd/TaY104g3nVa7IN0FafgNl5rhkv5p+//uAB6ufEQ=
  </data>
 </layer>
 <layer name="Left Village Destroyed" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="3"/>
   <property name="ID" value="0"/>
   <property name="Width" value="3"/>
   <property name="X" value="1"/>
   <property name="Y" value="6"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgF9AIdzAwMnUDcxUy63hVAPSuBeBUZek8A9ZwE4lNk6B0FwxcAANNMBg0=
  </data>
 </layer>
 <layer name="Left Village Visited" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="1"/>
   <property name="Width" value="1"/>
   <property name="X" value="2"/>
   <property name="Y" value="8"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFIwEoDrQDRsGgAwBIkAAi
  </data>
 </layer>
 <layer name="Right Village Destroyed" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="3"/>
   <property name="ID" value="2"/>
   <property name="Width" value="3"/>
   <property name="X" value="10"/>
   <property name="Y" value="12"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2DkgQ5mBoZOIO5iJl3vCqCelUC8igy9J4B6TgLxKTL0UhsAAHg1Bg0=
  </data>
 </layer>
 <layer name="Right Village Visited" width="15" height="17" visible="0">
  <properties>
   <property name="Height" value="1"/>
   <property name="ID" value="3"/>
   <property name="Width" value="1"/>
   <property name="X" value="11"/>
   <property name="Y" value="14"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJxjYBgFo2AU0BMoDrQDoAAAFYQAIg==
  </data>
 </layer>
</map>
`;

  assertEquals(actual, expected);
});

