import { MapMetadata } from "@/types/MapMetadata.ts";

export const allMapOptions: MapMetadata[] = [
  {
    name: "Knights10",
    rawTmx: `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="18" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">
  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="20" height="18">
  <properties>
   <property name="Main" value=""/>
   <property name="Anims" value="_3CAnims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="MapChangesID" value="Knights10_Changes"/>
   <property name="MapID" value="Knights10_Map"/>
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
`,
    description: `Description:
This map is set in an abandoned fortress that appears weathered and slightly overgrown. The structures are built from sturdy stone with fortified walls, giving a sense of age and endurance.
	1.	Central Hallway & Throne Room: The upper central area is a grand hall with a prominent red carpet, possibly a throne room or a gathering place for a high-ranking individual. The carpet leads to the back of the fortress, giving it an air of authority and significance. This room is flanked by tall, thick walls with narrow doors for entry, creating natural chokepoints.
	2.	Corridors & Chambers: Both sides of the central hallway have small rooms or chambers, likely used for storing supplies or as guard posts. These rooms are heavily fortified, with tall columns framing each entrance and small windows that offer limited visibility, likely for defense purposes.
	3.	Courtyard: The middle of the map features an open courtyard with patches of grass and scattered shrubbery, showing signs of nature reclaiming parts of the fortress. There’s a narrow path winding through the grass and bushes, leading from the central hallway down to a southern exit. This open space gives defenders a clear line of sight but also exposes anyone crossing to potential attacks.
	4.	Fortified Entrances: The lower part of the map has two larger fortified structures with similar architectural designs as the central fortress, possibly the entrance points or side buildings. These areas are more open than the main hallway, with broad, accessible entrances and slightly worn walls, suggesting that they might have been breached or frequently used.
	5.	Environmental Details: The map features rugged patches of green with natural growths, like small bushes scattered around the fortress grounds. This adds a sense of neglect or abandonment, as though the place has not been actively maintained or inhabited for some time.

Potential Gameplay Mechanics:
	•	Chokepoints: The narrow corridors and the throne room with limited access points provide opportunities for defensive strategies.
	•	Open Courtyard: This central area is risky for crossing due to its openness, making it suitable for ambushes or ranged attacks.
	•	Fortified Areas: Side chambers could serve as places to defend or retreat into during intense combat.`,
  },
  {
    name: "Knights12",
    rawTmx: `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">
  <image source="Tilesets/01000203.png" width="512" height="512"/>
 </tileset>
 <layer name="Main" width="15" height="17">
  <properties>
   <property name="Anims" value="_01Anims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="Main" value=""/>
   <property name="MapChangesID" value="Knights12_Changes"/>
   <property name="MapID" value="Knights12_Map"/>
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
`,
    description: `Description:
This map represents a sprawling overworld landscape with various settlements and natural terrain, giving it the look of a strategic world map.
	1.	Central Pathway: A main sandy road winds across the map from the lower left to the upper right, serving as the primary connection between multiple locations. It passes by several settlements and key areas, providing a structured path that players or armies might follow for travel or trade.
	2.	Villages and Fortifications: Throughout the map, small clusters of buildings represent villages, each with distinctive stone walls and red roofs, indicating they might be fortified outposts or simple villages. The buildings vary in size, some with individual houses, while others seem more densely packed, suggesting more developed areas.
	3.	Castle: In the upper-right corner of the map, a large stone castle sits near a mountainous ridge and overlooks a sizable lake. This castle, with its prominent red-roofed towers, appears to be a main stronghold or capital, likely serving as a defensive structure or a ruler’s residence.
	4.	Mountain Range and Hills: The upper left and lower-left corners feature mountainous and hilly terrain, acting as natural barriers. The mountains seem rugged, with steep ridges, while the hills are gentler, adding visual variation and influencing movement around them.
	5.	Water Features: A large, dark blue lake occupies the center-right side, creating a natural barrier that segments the map. A river or stream might feed into this lake, giving the land a sense of realism. The lake could provide defensive advantages, as it limits ground movement across it.
	6.	Forested Areas: There are scattered clusters of trees along the main pathway, near villages and around the mountainous regions. These forests add both aesthetic appeal and tactical options, such as ambush spots or cover.

Potential Gameplay Mechanics:
	•	Strategic Pathways: The main pathway directs movement between key points, suitable for convoy missions or protecting supply lines.
	•	Castle Defense: The castle could serve as a stronghold that needs to be defended or attacked, depending on the scenario.
	•	Natural Obstacles: The mountains and lake provide natural barriers, forcing characters to plan their routes carefully and consider alternative paths around these obstacles.
	•	Forest Ambushes: The wooded areas offer opportunities for surprise attacks or hiding units for tactical advantage.`,
  },
];

