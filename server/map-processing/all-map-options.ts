import { MapData } from "@/map-processing/types/MapData.ts";

export const allMapOptions: MapData[] = [
  {
    name: "Skirmish",
    description:
      "A diverse outdoor map featuring peaks, forests, and a central river with bridges.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="17" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01005B03" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01005B03.png" width="512" height="512"/>\n  <tile id="162">\n   <properties>\n    <property name="Main" value=""/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="17" height="17">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapID" value="Skirmish_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x5B"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxtk7tKA0EUhmcnhSAYRRCLdKZIYaJoEcR2i4gENRFRbFO4oIgKipUgBhUheHkAm03wUgTMPoCFlY2gPoGdlYpi7z/MOeRk3OJjds6c/9x2Jkoo5Sul3rVSobLfvWSTFMAtqNL+HD7f0FxgPcB+Dt83nlLj+r/WkAMbYB1UwKbQR5Tvy7MxAtgj0A17U1vfMvmEIuYdbC3Ss93EeAQZqqdf23xxPTGv8NvGukP7eWiSYAisgiecl7XNx3XUQJHqMfpJrPfgFzzrzn4+QQm2RqI9P8MpOFHWLvUDwsfUMgNq1IdP8zM5dynGGciDBbBI+pKTK67fPOVME6kYX55bKHpl7SVYIh3XYe5JFoyIGEUnt+x1ENS11QXgClzH1DEt6pH6FMV8Q4xRR1OlOXD9XWCK5r0n9CbmD2IcIkafc0/M3XvRNo6ZexMMgwmwTPWHup2vrjvz81vZonu671lt2vnPYzhrQPugbS++c9YS+h5ttStizqHIV6A+ZYwK+XyQPuvkMO/zGMyCI2XfaqDad45jmPfINazpzrw+/b8MaflN8nvgvakhSTXkwB+lWHgP\n  </data>\n </layer>\n</map>\n',
    height: 17,
    width: 17,
    terrainGrid: [
      {
        terrain: "Forest",
        x: 0,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 15,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 1,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Hill",
        x: 6,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 5,
      },
      {
        terrain: "Fort",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Fort",
        x: 12,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 6,
      },
      {
        terrain: "Hill",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 9,
        y: 7,
      },
      {
        terrain: "Bridge",
        x: 10,
        y: 7,
      },
      {
        terrain: "Bridge",
        x: 11,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 7,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 5,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 6,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 4,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 5,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 11,
      },
      {
        terrain: "Fort",
        x: 2,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 4,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 11,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 1,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Hill",
        x: 13,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 16,
      },
    ],
    pointsOfInterest: [
      {
        x: 6,
        y: 5,
        terrain: "Fort",
      },
      {
        x: 12,
        y: 5,
        terrain: "Fort",
      },
      {
        x: 2,
        y: 11,
        terrain: "Fort",
      },
    ],
    interactableTiles: [],
    areas: [
      {
        name: "Northern Peaks",
        description:
          "A rugged area with peaks providing high ground advantage.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 5,
            y: 5,
          },
        },
      },
      {
        name: "Central River",
        description:
          "A river running through the map with bridges for crossing, flanked by cliffs.",
        coordinateArea: {
          from: {
            x: 6,
            y: 7,
          },
          to: {
            x: 11,
            y: 8,
          },
        },
      },
      {
        name: "Western Fort",
        description:
          "A fortified area offering defensive bonuses, located near the peaks.",
        coordinateArea: {
          from: {
            x: 6,
            y: 5,
          },
          to: {
            x: 6,
            y: 5,
          },
        },
      },
      {
        name: "Eastern Fort",
        description:
          "A fortified area providing strategic defense, located near the cliffs.",
        coordinateArea: {
          from: {
            x: 12,
            y: 5,
          },
          to: {
            x: 12,
            y: 5,
          },
        },
      },
      {
        name: "Southern Plains",
        description:
          "Open plains with scattered forests, ideal for movement and positioning.",
        coordinateArea: {
          from: {
            x: 0,
            y: 9,
          },
          to: {
            x: 16,
            y: 16,
          },
        },
      },
      {
        name: "Eastern Cliffs",
        description:
          "A series of cliffs providing a natural barrier and strategic vantage points.",
        coordinateArea: {
          from: {
            x: 13,
            y: 0,
          },
          to: {
            x: 16,
            y: 5,
          },
        },
      },
    ],
  },
  {
    name: "LotsofRooms",
    description:
      "A complex indoor map with multiple rooms and corridors, featuring chests and stairs.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="21" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="21">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="LotsofRooms_Changes"/>\n   <property name="MapID" value="LotsofRooms_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJytVTsOglAQJFB4DyvCUfAe3kQjVnSewMZQWKkXUAtI9CZcwSWwyTjZ9/FTTIR94xt3582zyJJkKTgK+gl7QSGYBWBxzun7+1qQCx6w/4Aa6rUHsZycelBUjjpCv9sYXK35NFx1xCkdOZ3gSWtaQ42GPhfGrDf0Xk7clcFdG32oLuqHZl3BPszNDQ3frBrHs85KufNkRE8alzSsgfPGZ+Vsjd+5zf7Th3IOgqvgNuE+1VRDveXslFl8H62h0VIflrcxZxc51plQz1x74dndpfbdgb1yDmMyWBn9cc+uc+HKYEzOuYa9qp+c04J4uj7MpgxoDDn45E70ea654qw9svh7M+Q5947e8/9OY3gf8sM1B1zDM9SB17/e7TyjmLsdM6o59WnE5JNnZWnsDR++xQvTjTUe\n  </data>\n </layer>\n <layer name="Layer1" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="14"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="17"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqGD3BnZmA4z0xbOyYAzX9PYzsGIwAA/B4Cog==\n  </data>\n </layer>\n <layer name="Layer3" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="13"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMFSAOzMDw3lm2toxAWj+exrbMQqGJgAA++8Cog==\n  </data>\n </layer>\n <layer name="Layer2" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="12"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="16"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqoC9KYGRjOA3EqM+3sAJn/AYgn0NCOUYAKAGX4A/w=\n  </data>\n </layer>\n <layer name="Layer4" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="11"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAoYGJgG2gGjYNADAAx8AAM=\n  </data>\n </layer>\n <layer name="Layer5" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="10"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBIB00A7YBQMOQAADJwAAw==\n  </data>\n </layer>\n <layer name="Layer6" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="9"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="15"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMNIA00A7YBQMSQAADKQAAw==\n  </data>\n </layer>\n <layer name="Layer7" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="8"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBQA00A7YBSMeAAADTwAAw==\n  </data>\n </layer>\n <layer name="Layer8" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMBCAi5mBYQMQczLTzo4JQLPfM0PoUTAKKAUA++AC5Q==\n  </data>\n </layer>\n <layer name="Layer9" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQAvAxczAsAGIOZlpZ8cEoNnvmSH0KBgFtAYAWG8C5Q==\n  </data>\n </layer>\n <layer name="Layer10" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjALagaXMDAwczLS1YwIzBI+CUTAKaAsAnoIB2g==\n  </data>\n </layer>\n <layer name="Layer11" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="20"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DwA6aBdsAoGAWjYBSMAgYAE0wAAw==\n  </data>\n </layer>\n <layer name="Layer12" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BwA6aBdsAoGAWjYBSMAjAAABNUAAM=\n  </data>\n </layer>\n <layer name="Layer13" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwwWkMTMwbGCmrR0TgOZ/oLEdo2AUjIJRMAoGJwAAR/gCow==\n  </data>\n </layer>\n <layer name="Layer14" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFQxFwMTMwbABiTmba2TEBaPZ7Zgg9CkbBKBgFo2AUAADqpQLl\n  </data>\n </layer>\n <layer name="Layer15" width="25" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBg44M7MwHCembZ2TACa/57GdoyCUTAKRsEoGAUjAQAAtPkCog==\n  </data>\n </layer>\n</map>\n',
    height: 21,
    width: 25,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Pillar",
        x: 17,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 2,
      },
      {
        terrain: "Pillar",
        x: 22,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 4,
      },
      {
        terrain: "Pillar",
        x: 2,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 4,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Pillar",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 6,
      },
      {
        terrain: "Chest",
        x: 19,
        y: 6,
      },
      {
        terrain: "Chest",
        x: 20,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 17,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 22,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Pillar",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 17,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 19,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 20,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 21,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 22,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 17,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 19,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 20,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 21,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 22,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 11,
      },
      {
        terrain: "Pillar",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 11,
      },
      {
        terrain: "Pillar",
        x: 22,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Chest",
        x: 14,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Chest",
        x: 8,
        y: 15,
      },
      {
        terrain: "Chest",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Chest",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 16,
      },
      {
        terrain: "Pillar",
        x: 19,
        y: 16,
      },
      {
        terrain: "Pillar",
        x: 20,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Pillar",
        x: 17,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 17,
      },
      {
        terrain: "Pillar",
        x: 22,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 20,
      },
    ],
    pointsOfInterest: [
      {
        x: 19,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 20,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 19,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 20,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 21,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 19,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 20,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 21,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 14,
        terrain: "Chest",
      },
      {
        x: 8,
        y: 15,
        terrain: "Chest",
      },
      {
        x: 9,
        y: 15,
        terrain: "Chest",
      },
      {
        x: 13,
        y: 15,
        terrain: "Chest",
      },
      {
        x: 1,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 20,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 19,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 20,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 14,
        y: 14,
        terrain: "Chest",
      },
      {
        x: 8,
        y: 15,
        terrain: "Chest",
      },
      {
        x: 9,
        y: 15,
        terrain: "Chest",
      },
      {
        x: 13,
        y: 15,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with stairs leading into the main complex.",
        coordinateArea: {
          from: {
            x: 1,
            y: 19,
          },
          to: {
            x: 5,
            y: 20,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long corridor connecting various rooms, with pillars and braces for cover.",
        coordinateArea: {
          from: {
            x: 7,
            y: 1,
          },
          to: {
            x: 23,
            y: 3,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A room filled with chests, offering valuable loot for those who reach it.",
        coordinateArea: {
          from: {
            x: 8,
            y: 15,
          },
          to: {
            x: 14,
            y: 15,
          },
        },
      },
      {
        name: "Pillar Room",
        description:
          "A room with multiple pillars, providing strategic cover for battles.",
        coordinateArea: {
          from: {
            x: 1,
            y: 4,
          },
          to: {
            x: 5,
            y: 6,
          },
        },
      },
      {
        name: "Stairway Room",
        description:
          "A room with multiple stairways, likely a point for enemy reinforcements.",
        coordinateArea: {
          from: {
            x: 18,
            y: 8,
          },
          to: {
            x: 21,
            y: 9,
          },
        },
      },
      {
        name: "Upper Hallway",
        description:
          "A hallway leading to the upper sections of the map, with strategic braces.",
        coordinateArea: {
          from: {
            x: 16,
            y: 7,
          },
          to: {
            x: 23,
            y: 8,
          },
        },
      },
    ],
  },
  {
    name: "PrisonBreak",
    description:
      "A complex indoor map with multiple rooms, corridors, and a throne room, designed for strategic movement and combat.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="20" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="1800191A" tilewidth="16" tileheight="16">\n  <image source="Tilesets/1800191A.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="20" height="20">\n  <properties>\n   <property name="Anims" value="_18Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="PrisonBreak_Changes"/>\n   <property name="MapID" value="PrisonBreak_Map"/>\n   <property name="ObjectType" value="0x18"/>\n   <property name="PaletteID" value="0x19"/>\n   <property name="TileConfig" value="0x1A"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJydUztOw0AQ9e5WUCCRI9BBRWMZ5wBRLkC1JUXSI+5ACeQYaUhygkQCWUoTuAFWCiQkhMQFmNXOyOOXjWJRPM145u383XNZ9m6zrPdPOSY8kv5EmLBtQ3hLcLvY70nOSM4JCxdtP2T7tbv5u9gH9H1N8oFwR5iaBkOVdwg+xDH5TznHjHBLmBOWhBXhxsVZvBD31UQ92MSPcm3as3jmereM2sZZSLygfyj/Frj76i9dgxGhYAS979p+jXGi5qVtzyMnnlcxvZLaXrj99V9xvjAPjHdkd3cgnBG/O8tiDJE5v61Mo0vMlWny6Zy6zpL5JX9Lvk/mbvheg16rmj3EOz9wT9/MvWSE9yc2zfG8q9S+pJ8q0UuXfnFP2K/m1GDDeLivqfKvE/PDGV3YhhPkF9QfgFw9v9Qde+XvJ3rWXLxd1AuA7kkk3uqhO9Yz0D1J3VJbpW5B9op1YD8l1O4V9H71HWM8sYX/K0/IP0gMsrg=\n  </data>\n </layer>\n <layer name="Chest 5" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="11"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="18"/>\n   <property name="Y" value="19"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqIB0xQGgAGUAAD\n  </data>\n </layer>\n <layer name="Chest 4" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="10"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="19"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAoIAyY0PgAGYAAD\n  </data>\n </layer>\n <layer name="Chest 3" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="9"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="19"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMApwAyYc4gAGcAAD\n  </data>\n </layer>\n <layer name="Cell 6" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="8"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="5"/>\n   <property name="Y" value="17"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQCuwlpGBgZGK5lkyQzC1wGkK3AcADV8B9Q==\n  </data>\n </layer>\n <layer name="Cell 5" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="17"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQE2gxcTAwEhF8yyZGRjMmKln3mlG6rgPAK0zAXA=\n  </data>\n </layer>\n <layer name="Cell 4" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUDAagycTAwEhF8yyZIZha4DQjdd03CoY+AABFQAFy\n  </data>\n </layer>\n <layer name="Cell 3" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0BtoMTEwMFLRPEtmBgZzZuqZd5qRuu4bBcMTAABf9AFx\n  </data>\n </layer>\n <layer name="Cell 2" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BwAk0mBgZGKppnyQzB1AKnGanrvlEwCoYaAACfPwFy\n  </data>\n </layer>\n <layer name="Cell 1" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DgwWtGBgZGKppnyczAYM5MPfNOU9l9o2AUDAcAAIMxAjE=\n  </data>\n </layer>\n <layer name="Chest 2" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="18"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DoA6aBdsAoGAUjEAAADTAAAw==\n  </data>\n </layer>\n <layer name="Chest 1" width="20" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2DoAqaBdsAoGAUjGAAADUAAAw==\n  </data>\n </layer>\n</map>\n',
    height: 20,
    width: 20,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 17,
        y: 1,
      },
      {
        terrain: "Throne",
        x: 18,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 19,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 8,
      },
      {
        terrain: "Chest",
        x: 16,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 8,
      },
      {
        terrain: "Chest",
        x: 18,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Door",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Door",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 10,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 10,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Door",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Door",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 14,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Pillar",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Pillar",
        x: 17,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 16,
      },
      {
        terrain: "Pillar",
        x: 19,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 18,
      },
      {
        terrain: "Door",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "Door",
        x: 5,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 19,
      },
      {
        terrain: "Chest",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Chest",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Chest",
        x: 18,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 19,
      },
    ],
    pointsOfInterest: [
      {
        x: 18,
        y: 1,
        terrain: "Throne",
      },
      {
        x: 4,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 14,
        y: 19,
        terrain: "Chest",
      },
      {
        x: 16,
        y: 19,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 19,
        terrain: "Chest",
      },
    ],
    interactableTiles: [
      {
        x: 16,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 2,
        y: 9,
        terrain: "Door",
      },
      {
        x: 7,
        y: 9,
        terrain: "Door",
      },
      {
        x: 2,
        y: 12,
        terrain: "Door",
      },
      {
        x: 7,
        y: 12,
        terrain: "Door",
      },
      {
        x: 2,
        y: 18,
        terrain: "Door",
      },
      {
        x: 5,
        y: 18,
        terrain: "Door",
      },
      {
        x: 14,
        y: 19,
        terrain: "Chest",
      },
      {
        x: 16,
        y: 19,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 19,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Throne Room",
        description:
          "The central area with a throne, heavily guarded and the main objective of the map.",
        coordinateArea: {
          from: {
            x: 16,
            y: 0,
          },
          to: {
            x: 19,
            y: 2,
          },
        },
      },
      {
        name: "Main Hallway",
        description:
          "A long corridor leading to the throne room, with pillars providing cover.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 15,
            y: 2,
          },
        },
      },
      {
        name: "Stairway Room",
        description:
          "A room with stairs, likely a point for enemy reinforcements.",
        coordinateArea: {
          from: {
            x: 3,
            y: 3,
          },
          to: {
            x: 6,
            y: 5,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A room containing chests, offering valuable items for the player.",
        coordinateArea: {
          from: {
            x: 15,
            y: 8,
          },
          to: {
            x: 19,
            y: 10,
          },
        },
      },
      {
        name: "Prison Cells",
        description:
          "A series of cells, possibly containing allies or enemies to rescue or defeat.",
        coordinateArea: {
          from: {
            x: 2,
            y: 8,
          },
          to: {
            x: 7,
            y: 13,
          },
        },
      },
      {
        name: "Lower Corridor",
        description:
          "A corridor connecting various rooms, with doors and walls for strategic movement.",
        coordinateArea: {
          from: {
            x: 0,
            y: 15,
          },
          to: {
            x: 19,
            y: 19,
          },
        },
      },
    ],
  },
  {
    name: "TrainingFortress",
    description:
      "A mixed indoor and outdoor map with a fortress and surrounding plains and forest.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="15" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E000F10" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E000F10.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="15">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapId" value="TrainingFortress_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x0F"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyNkzEOwjAMRZ1WsCAqOAKVYADUcgeYqETPwMYA4gwM3blYB8QNGJG4A9/CVkyoSoenNGme47huFhFlAVewAi9wbiH0rDv+Q1O8JP64O1CCXGLmZr53RLf4l7u41tFRny8dXKZuyInXu7h8/xGo3OeemvsEcwemRDQD88i/t+4qWONapGDD+YvXC/bYumemVswCrCPvPd23mweurpWyfyljIXHq4DupWznv8fpWzirk7g/ytdFzbH/ZmHzXVOrFHo+2NmVDP9k6q8MxNiZHzU171c65rwbwEtCn75z1XNuXFu6rE/YewBEM4/b/JuQNzaNJNQ==\n  </data>\n </layer>\n</map>\n',
    height: 15,
    width: 15,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Barrel",
        x: 14,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Deck",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 6,
      },
      {
        terrain: "Road",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Road",
        x: 3,
        y: 7,
      },
      {
        terrain: "Road",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Road",
        x: 0,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 8,
      },
      {
        terrain: "Road",
        x: 2,
        y: 8,
      },
      {
        terrain: "Road",
        x: 3,
        y: 8,
      },
      {
        terrain: "Road",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Road",
        x: 0,
        y: 9,
      },
      {
        terrain: "Road",
        x: 1,
        y: 9,
      },
      {
        terrain: "Road",
        x: 2,
        y: 9,
      },
      {
        terrain: "Road",
        x: 3,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Road",
        x: 0,
        y: 10,
      },
      {
        terrain: "Road",
        x: 1,
        y: 10,
      },
      {
        terrain: "Road",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Barrel",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Deck",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 14,
      },
    ],
    pointsOfInterest: [
      {
        x: 11,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 9,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The main entryway of the fortress, featuring a wide open space for initial engagements.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 5,
            y: 1,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long hallway connecting various rooms, with stairs leading to different levels.",
        coordinateArea: {
          from: {
            x: 6,
            y: 0,
          },
          to: {
            x: 14,
            y: 5,
          },
        },
      },
      {
        name: "Training Grounds",
        description:
          "An outdoor area with plains and forest, ideal for training exercises and skirmishes.",
        coordinateArea: {
          from: {
            x: 0,
            y: 6,
          },
          to: {
            x: 4,
            y: 11,
          },
        },
      },
      {
        name: "Inner Chambers",
        description:
          "A series of rooms and corridors within the fortress, providing strategic positions for defense.",
        coordinateArea: {
          from: {
            x: 5,
            y: 6,
          },
          to: {
            x: 14,
            y: 14,
          },
        },
      },
    ],
  },
  {
    name: "ArcanaeCapital",
    description:
      "A complex indoor map with multiple rooms, corridors, and water features.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="23" height="21" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="1800B91A" tilewidth="16" tileheight="16">\n  <image source="Tilesets/1800B91A.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="23" height="21">\n  <properties>\n   <property name="Anims" value="_18Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="ArcanaeCapital_Changes"/>\n   <property name="MapID" value="ArcanaeCapital_Map"/>\n   <property name="ObjectType" value="0x18"/>\n   <property name="PaletteID" value="0xB9"/>\n   <property name="TileConfig" value="0x1A"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJydlTtLA0EQx/eBYPwWSaWCH8IuHIKfQbBIIwqSD+CjsLQRbRXxQRoVfKRXA1bJmWBsxQsELCIIaucMO8vNTfZCsPgzO7N7v+zOzG5qWqka06xR6hMUk2ZMdn5ZrC9bpe5B77DuzTi/a519NsOKmeTctnasBMY9Yu0ppUrGWfR/iB2bsJqgViA+CVqwqSqgA2DekNC/pnhNnHGKmAPQF6gA2od1Vesszq9Y99tNGheYIqYNmN80qf3Q2f2ifwvr7kB163zkrZHmMI65MG7/nH0IsSOT2kSw0X+h+rwyNmcgu2Kc5XGsb8KkIfYA3zdAj9r531Sf3xHsHWJjzvt0hrbog6Jgo79qXH2qJp/dgLku2A6xMYbnP9ZpDuZtNifzxN41WTavZZ2YnQCb99iSdf3hexD9RbDrgi1r6bn8PJ4ta+h7EMeXoAvQ1YichNgl2jvvvT6Mz3P0NAbb56rN+rhFuUD2tBm+V/69CbHLrAd9ruS+B8TG/ckeQp1p952sZai/5b5jxvY9xPsI35MoUMtQf/uzJjns0FsVBXIS6m//jmibzfd/a8nZ/h0p2jTfSaCGo2qZJ/+e8Ps4YdL/Ej/vbc8M30vPkr68jzjegv2d6Ox/AJesZWSzvSfZXKfaaZxzj9IfRNsmVg==\n  </data>\n </layer>\n <layer name="Chest2" width="23" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILBD5gG2gGjYBTQEAAADUwAAw==\n  </data>\n </layer>\n <layer name="Chest1" width="23" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjCTANNAOGAWjYBRgAAAOvAAD\n  </data>\n </layer>\n</map>\n',
    height: 21,
    width: 23,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 20,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 22,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 12,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 1,
      },
      {
        terrain: "Water",
        x: 17,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 1,
      },
      {
        terrain: "Water",
        x: 19,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 20,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 22,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Pillar",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Water",
        x: 17,
        y: 2,
      },
      {
        terrain: "Water",
        x: 18,
        y: 2,
      },
      {
        terrain: "Water",
        x: 19,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 2,
      },
      {
        terrain: "Throne",
        x: 21,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Bridge",
        x: 17,
        y: 3,
      },
      {
        terrain: "Bridge",
        x: 18,
        y: 3,
      },
      {
        terrain: "Bridge",
        x: 19,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Water",
        x: 17,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 4,
      },
      {
        terrain: "Water",
        x: 19,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 5,
      },
      {
        terrain: "Water",
        x: 17,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 5,
      },
      {
        terrain: "Water",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 6,
      },
      {
        terrain: "Water",
        x: 17,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 6,
      },
      {
        terrain: "Water",
        x: 19,
        y: 6,
      },
      {
        terrain: "Water",
        x: 20,
        y: 6,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 6,
      },
      {
        terrain: "Water",
        x: 22,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Throne",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 7,
      },
      {
        terrain: "Water",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Water",
        x: 19,
        y: 7,
      },
      {
        terrain: "Water",
        x: 20,
        y: 7,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 7,
      },
      {
        terrain: "Water",
        x: 22,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 8,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 8,
      },
      {
        terrain: "Water",
        x: 17,
        y: 8,
      },
      {
        terrain: "Water",
        x: 18,
        y: 8,
      },
      {
        terrain: "Water",
        x: 19,
        y: 8,
      },
      {
        terrain: "Water",
        x: 20,
        y: 8,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 8,
      },
      {
        terrain: "Water",
        x: 22,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Pillar",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Water",
        x: 17,
        y: 9,
      },
      {
        terrain: "Water",
        x: 18,
        y: 9,
      },
      {
        terrain: "Water",
        x: 19,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 10,
      },
      {
        terrain: "Water",
        x: 17,
        y: 10,
      },
      {
        terrain: "Water",
        x: 18,
        y: 10,
      },
      {
        terrain: "Water",
        x: 19,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 10,
      },
      {
        terrain: "Chest",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 11,
      },
      {
        terrain: "Water",
        x: 17,
        y: 11,
      },
      {
        terrain: "Water",
        x: 18,
        y: 11,
      },
      {
        terrain: "Water",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 11,
      },
      {
        terrain: "Pillar",
        x: 21,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Water",
        x: 17,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 12,
      },
      {
        terrain: "Water",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 12,
      },
      {
        terrain: "Chest",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 13,
      },
      {
        terrain: "Water",
        x: 17,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 13,
      },
      {
        terrain: "Water",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Water",
        x: 17,
        y: 14,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 14,
      },
      {
        terrain: "Water",
        x: 19,
        y: 14,
      },
      {
        terrain: "Water",
        x: 20,
        y: 14,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 14,
      },
      {
        terrain: "Water",
        x: 22,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Water",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Water",
        x: 19,
        y: 15,
      },
      {
        terrain: "Water",
        x: 20,
        y: 15,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 15,
      },
      {
        terrain: "Water",
        x: 22,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 16,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Water",
        x: 17,
        y: 16,
      },
      {
        terrain: "Water",
        x: 18,
        y: 16,
      },
      {
        terrain: "Water",
        x: 19,
        y: 16,
      },
      {
        terrain: "Water",
        x: 20,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 16,
      },
      {
        terrain: "Water",
        x: 22,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 18,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 18,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 18,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 18,
      },
      {
        terrain: "Pillar",
        x: 19,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 19,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 20,
      },
    ],
    pointsOfInterest: [
      {
        x: 12,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 21,
        y: 2,
        terrain: "Throne",
      },
      {
        x: 5,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 7,
        terrain: "Throne",
      },
      {
        x: 1,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 11,
        terrain: "Chest",
      },
      {
        x: 0,
        y: 13,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 9,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 15,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 20,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 0,
        y: 11,
        terrain: "Chest",
      },
      {
        x: 0,
        y: 13,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with stairs leading to the main sections of the map.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 7,
            y: 8,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long corridor with pillars and stairs, connecting various rooms.",
        coordinateArea: {
          from: {
            x: 8,
            y: 0,
          },
          to: {
            x: 16,
            y: 20,
          },
        },
      },
      {
        name: "Throne Room",
        description: "A room with a throne, likely the main objective area.",
        coordinateArea: {
          from: {
            x: 17,
            y: 0,
          },
          to: {
            x: 22,
            y: 3,
          },
        },
      },
      {
        name: "Waterway",
        description:
          "An area with water and bridges, providing strategic movement challenges.",
        coordinateArea: {
          from: {
            x: 17,
            y: 4,
          },
          to: {
            x: 22,
            y: 16,
          },
        },
      },
      {
        name: "Treasure Room",
        description: "A room containing chests, likely holding valuable items.",
        coordinateArea: {
          from: {
            x: 0,
            y: 11,
          },
          to: {
            x: 4,
            y: 14,
          },
        },
      },
      {
        name: "Lower Hall",
        description:
          "A spacious hall with stairs, leading to the lower sections of the map.",
        coordinateArea: {
          from: {
            x: 0,
            y: 15,
          },
          to: {
            x: 16,
            y: 20,
          },
        },
      },
    ],
  },
  {
    name: "ShizonDefense",
    description:
      "A mixed terrain map featuring a village, roads, forests, and a coastal area.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="18" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E007210" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E007210.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="18" height="17">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="ShizonDefense_Changes"/>\n   <property name="MapID" value="ShizonDefense_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x72"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx9k01OwzAQhW1nUwI3qIQEO9JFD5FuaA7ABWi3SMAFEKQSW+ACbRESx0j5EZReoosiCCCuwBs8owz5YfHJdux5nhm/3DpjQrATGDMBU7CyVeagg3PWer4xP8TZI3AMnrHug13Mt4wxdxhzjiXtCHTAAAwDr3ViqjpL46GcKD5xxZq0+yABKRiBdVfkc4H1Jbhincj5fbondn5N+eS2yE2ge3rgCxyAgfWjxEgP5jyXe3tct/5GvGC+ACOe0/6+qr+ptyHnHHPe9I1qafE+3XWm6tc6b9h7p76BD/DpvO6SdSKlLXnnNf1oQXcNhOAVbATV+lclP/zWjHsW/FZ1HtL3jJXfdL0p6FqPPiPx0uOYfZthbxZ4v9GZc8Q/KA0iU55MXBFbrkf3YhNn28FfHeEGWtuID1inXMs1+QcMQVuo0Xrkfsm76looz3uQkoe0ToMW8aT+HfGj/E+C1tlr0OmWvCrvMwYTMC3n809O2qsJv3GGcQZOa3TqcqJ+i1eTkueEH7RxjP8=\n  </data>\n </layer>\n <layer name="Bottom House" width="18" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUDBagONAOGKIAAC0AACI=\n  </data>\n </layer>\n <layer name="Middle House" width="18" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BoA8WBdsAoGHAAAEdMACI=\n  </data>\n </layer>\n <layer name="Top House" width="18" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBhaQHGgHTAKRsEoGHQAAIvgACI=\n  </data>\n </layer>\n</map>\n',
    height: 17,
    width: 18,
    terrainGrid: [
      {
        terrain: "Village Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Road",
        x: 1,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Road",
        x: 5,
        y: 0,
      },
      {
        terrain: "Road",
        x: 6,
        y: 0,
      },
      {
        terrain: "Road",
        x: 7,
        y: 0,
      },
      {
        terrain: "Road",
        x: 8,
        y: 0,
      },
      {
        terrain: "Road",
        x: 9,
        y: 0,
      },
      {
        terrain: "Road",
        x: 10,
        y: 0,
      },
      {
        terrain: "Road",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 0,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 0,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 1,
      },
      {
        terrain: "Road",
        x: 1,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 1,
      },
      {
        terrain: "Closed Village Entrance",
        x: 3,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 1,
      },
      {
        terrain: "Road",
        x: 5,
        y: 1,
      },
      {
        terrain: "Road",
        x: 6,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 1,
      },
      {
        terrain: "Road",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Road",
        x: 2,
        y: 2,
      },
      {
        terrain: "Road",
        x: 3,
        y: 2,
      },
      {
        terrain: "Road",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Road",
        x: 6,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 2,
      },
      {
        terrain: "Village Entrance",
        x: 8,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 2,
      },
      {
        terrain: "Road",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Road",
        x: 1,
        y: 3,
      },
      {
        terrain: "Road",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 3,
      },
      {
        terrain: "Road",
        x: 5,
        y: 3,
      },
      {
        terrain: "Road",
        x: 6,
        y: 3,
      },
      {
        terrain: "Road",
        x: 7,
        y: 3,
      },
      {
        terrain: "Road",
        x: 8,
        y: 3,
      },
      {
        terrain: "Road",
        x: 9,
        y: 3,
      },
      {
        terrain: "Road",
        x: 10,
        y: 3,
      },
      {
        terrain: "Road",
        x: 11,
        y: 3,
      },
      {
        terrain: "Road",
        x: 12,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Door",
        x: 16,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 3,
      },
      {
        terrain: "Road",
        x: 0,
        y: 4,
      },
      {
        terrain: "Road",
        x: 1,
        y: 4,
      },
      {
        terrain: "Road",
        x: 2,
        y: 4,
      },
      {
        terrain: "Road",
        x: 3,
        y: 4,
      },
      {
        terrain: "Road",
        x: 4,
        y: 4,
      },
      {
        terrain: "Road",
        x: 5,
        y: 4,
      },
      {
        terrain: "Road",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 4,
      },
      {
        terrain: "Road",
        x: 9,
        y: 4,
      },
      {
        terrain: "Road",
        x: 10,
        y: 4,
      },
      {
        terrain: "Road",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 4,
      },
      {
        terrain: "Road",
        x: 0,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Road",
        x: 4,
        y: 5,
      },
      {
        terrain: "Road",
        x: 5,
        y: 5,
      },
      {
        terrain: "Road",
        x: 6,
        y: 5,
      },
      {
        terrain: "Road",
        x: 7,
        y: 5,
      },
      {
        terrain: "Road",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Road",
        x: 10,
        y: 5,
      },
      {
        terrain: "Road",
        x: 11,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Road",
        x: 16,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 5,
      },
      {
        terrain: "Road",
        x: 0,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Road",
        x: 4,
        y: 6,
      },
      {
        terrain: "Road",
        x: 5,
        y: 6,
      },
      {
        terrain: "Road",
        x: 6,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 6,
      },
      {
        terrain: "Road",
        x: 12,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Road",
        x: 15,
        y: 6,
      },
      {
        terrain: "Road",
        x: 16,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 7,
      },
      {
        terrain: "Road",
        x: 1,
        y: 7,
      },
      {
        terrain: "Road",
        x: 2,
        y: 7,
      },
      {
        terrain: "Road",
        x: 3,
        y: 7,
      },
      {
        terrain: "Road",
        x: 4,
        y: 7,
      },
      {
        terrain: "Road",
        x: 5,
        y: 7,
      },
      {
        terrain: "Road",
        x: 6,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "House",
        x: 10,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Road",
        x: 12,
        y: 7,
      },
      {
        terrain: "Road",
        x: 13,
        y: 7,
      },
      {
        terrain: "Road",
        x: 14,
        y: 7,
      },
      {
        terrain: "Road",
        x: 15,
        y: 7,
      },
      {
        terrain: "Road",
        x: 16,
        y: 7,
      },
      {
        terrain: "Road",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Road",
        x: 5,
        y: 8,
      },
      {
        terrain: "Road",
        x: 6,
        y: 8,
      },
      {
        terrain: "Road",
        x: 7,
        y: 8,
      },
      {
        terrain: "Road",
        x: 8,
        y: 8,
      },
      {
        terrain: "Road",
        x: 9,
        y: 8,
      },
      {
        terrain: "Road",
        x: 10,
        y: 8,
      },
      {
        terrain: "Road",
        x: 11,
        y: 8,
      },
      {
        terrain: "Road",
        x: 12,
        y: 8,
      },
      {
        terrain: "Road",
        x: 13,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 8,
      },
      {
        terrain: "Road",
        x: 17,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 9,
      },
      {
        terrain: "Road",
        x: 8,
        y: 9,
      },
      {
        terrain: "Road",
        x: 9,
        y: 9,
      },
      {
        terrain: "Road",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 9,
      },
      {
        terrain: "Road",
        x: 13,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 9,
      },
      {
        terrain: "Village Entrance",
        x: 15,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 9,
      },
      {
        terrain: "Road",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Closed Village Entrance",
        x: 6,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Road",
        x: 8,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 10,
      },
      {
        terrain: "Road",
        x: 10,
        y: 10,
      },
      {
        terrain: "Road",
        x: 11,
        y: 10,
      },
      {
        terrain: "Road",
        x: 12,
        y: 10,
      },
      {
        terrain: "Road",
        x: 13,
        y: 10,
      },
      {
        terrain: "Road",
        x: 14,
        y: 10,
      },
      {
        terrain: "Road",
        x: 15,
        y: 10,
      },
      {
        terrain: "Road",
        x: 16,
        y: 10,
      },
      {
        terrain: "Road",
        x: 17,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 11,
      },
      {
        terrain: "Road",
        x: 10,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Road",
        x: 14,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 0,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 1,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Road",
        x: 10,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Village Entrance",
        x: 12,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Road",
        x: 14,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 12,
      },
      {
        terrain: "Armory",
        x: 16,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 0,
        y: 13,
      },
      {
        terrain: "Sea",
        x: 1,
        y: 13,
      },
      {
        terrain: "Sea",
        x: 2,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Road",
        x: 11,
        y: 13,
      },
      {
        terrain: "Road",
        x: 12,
        y: 13,
      },
      {
        terrain: "Road",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Sea",
        x: 0,
        y: 14,
      },
      {
        terrain: "Sea",
        x: 1,
        y: 14,
      },
      {
        terrain: "Sea",
        x: 2,
        y: 14,
      },
      {
        terrain: "Lake",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 14,
      },
      {
        terrain: "Road",
        x: 13,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 14,
      },
      {
        terrain: "Sea",
        x: 0,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 1,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 2,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 3,
        y: 15,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 15,
      },
      {
        terrain: "Road",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Vendor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 0,
        y: 16,
      },
      {
        terrain: "Sea",
        x: 1,
        y: 16,
      },
      {
        terrain: "Sea",
        x: 2,
        y: 16,
      },
      {
        terrain: "Sea",
        x: 3,
        y: 16,
      },
      {
        terrain: "Lake",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Road",
        x: 10,
        y: 16,
      },
      {
        terrain: "Road",
        x: 11,
        y: 16,
      },
      {
        terrain: "Road",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 16,
      },
    ],
    pointsOfInterest: [
      {
        x: 8,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 7,
        terrain: "House",
      },
      {
        x: 15,
        y: 9,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 12,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 15,
        terrain: "Vendor",
      },
    ],
    interactableTiles: [
      {
        x: 8,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 3,
        terrain: "Door",
      },
      {
        x: 10,
        y: 7,
        terrain: "House",
      },
      {
        x: 15,
        y: 9,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 12,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 15,
        terrain: "Vendor",
      },
    ],
    areas: [
      {
        name: "Northern Village",
        description:
          "A small village area with roads and a closed entrance, surrounded by walls.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 11,
            y: 2,
          },
        },
      },
      {
        name: "Central Roadway",
        description:
          "A main road running through the center of the map, connecting various areas.",
        coordinateArea: {
          from: {
            x: 0,
            y: 3,
          },
          to: {
            x: 17,
            y: 8,
          },
        },
      },
      {
        name: "Eastern Fort",
        description:
          "A fortified area with walls and a house, providing strategic defense points.",
        coordinateArea: {
          from: {
            x: 14,
            y: 0,
          },
          to: {
            x: 17,
            y: 7,
          },
        },
      },
      {
        name: "Southern Coast",
        description:
          "A coastal area with sand and sea, providing a natural barrier.",
        coordinateArea: {
          from: {
            x: 0,
            y: 11,
          },
          to: {
            x: 3,
            y: 16,
          },
        },
      },
      {
        name: "Western Plains",
        description:
          "Open plains with scattered forests, offering mobility and cover.",
        coordinateArea: {
          from: {
            x: 0,
            y: 9,
          },
          to: {
            x: 13,
            y: 16,
          },
        },
      },
      {
        name: "Southern Village",
        description:
          "A village area with an armory and vendor, surrounded by walls.",
        coordinateArea: {
          from: {
            x: 10,
            y: 12,
          },
          to: {
            x: 17,
            y: 16,
          },
        },
      },
    ],
  },
  {
    name: "ClintManor",
    description:
      "Clint Manor is a complex indoor map with multiple rooms and corridors, featuring a throne room and various staircases.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="22" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="3C003D3E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/3C003D3E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="20" height="22">\n  <properties>\n   <property name="Anims" value="_3CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="ClintManor_Changes"/>\n   <property name="MapID" value="ClintManor_Map"/>\n   <property name="ObjectType" value="0x3C"/>\n   <property name="PaletteID" value="0x3D"/>\n   <property name="TileConfig" value="0x3E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyNkz1KQ0EQx3ffK7QSjd5A8AMrEQTLYCEIFqIXUCMoVoIXECKI2Ch4AKNJFElQKy0lfoBpNDcQEixs4tMD+B/fDm+y2dVAfszOvNl/dmdmq1qpJiiB+UCpsvGzWKfBoINpsU6LPLJV7O2DXQSbxh6CO7AElkFG2L/WGaM3DrsluAZvYBtUrHzmXqwrIvZ7vlCpFLgMYktocAw/54DiJx7/A3oP4EnwCEbx7QK2bqyNL14A3/h2IGoXgTPE+8OEEcTGBHnd6neDCeS963j/FTgytauBok7unjJ5XQr/A4pgDRRABuyoJJ/1iEujFQm9lyCuL+VJjWHEV2BXjW/rkQ7tfbX0esGCycubvcQMcvBTdZD1nK8ZxLWMPPclnRyogDmwC/at89G8fBqNkujTLPxznfCs4/Pw+TbAOthT8b2lHt9R9qvHMw8+ymaO+XxUvy8BxQfC1pn5D3lf6gXrnurWd8M9Tlm44nxf2Qtbj3ts67nish88e5H1romG5Zc8dfT1t2ztp/fG75ze9y24ccD3rQXt71HeheZvMkyw3zMj50X21zXPUo/8qbAdX/060ZM+45tPu/6NDufaVVNiyKo/+b4eSH4AB4LgOA==\n  </data>\n </layer>\n <layer name="Door2" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgF9AbrGBkYBJkZGNYyDrRLRsEoGAWjYPgCANIwAXI=\n  </data>\n </layer>\n <layer name="Door1" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFtALrGBkYBJkZGNYyUsc8kDFCzBB6FIyCUTAKRgF+AABsJAGJ\n  </data>\n </layer>\n <layer name="OpenRoom" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="4"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="14"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYMAOOJkYGFYzko5xgdNAORFmBgZhIE5iQLCR+ejiIIzPPEEkPUJAfIEJIiaMQ1yICPOEkLAAEAdD2cI4xEfBKBgFo2AUDE4AADDoEeg=\n  </data>\n </layer>\n <layer name="Chest5" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBiewGmgHTAKRsEoGAWjYEABAJT/AEM=\n  </data>\n </layer>\n <layer name="Chest4" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBjawGmgHTAKRsEoGAWjYFACAJsvAEM=\n  </data>\n </layer>\n <layer name="Chest3" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBg8wGmgHTAKRsEoGAWjYNgAAKiXAEM=\n  </data>\n </layer>\n <layer name="Chest2" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBh44DTQDhgFo2AUjIJRMOwAAKqnAEM=\n  </data>\n </layer>\n <layer name="Chest1" width="20" height="22" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYKA/cBoAO0fBKBgFo2AUjCwAAK7HAEM=\n  </data>\n </layer>\n</map>\n',
    height: 22,
    width: 20,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Throne",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 7,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 8,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 9,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 10,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 11,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 12,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 13,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 14,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 1,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 7,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 8,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 9,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 10,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 11,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 12,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 13,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 14,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 2,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 7,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 8,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 9,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 10,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 11,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 12,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 13,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 14,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 3,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Door",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Door",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Pillar",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Pillar",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 16,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 16,
      },
      {
        terrain: "Stairs",
        x: 13,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 17,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 18,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 18,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 18,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 20,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 20,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 9,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 21,
      },
    ],
    pointsOfInterest: [
      {
        x: 3,
        y: 1,
        terrain: "Throne",
      },
      {
        x: 1,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 16,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 16,
        terrain: "Stairs",
      },
      {
        x: 13,
        y: 16,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 17,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 18,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 18,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 18,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 9,
        y: 21,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 8,
        y: 4,
        terrain: "Door",
      },
      {
        x: 14,
        y: 4,
        terrain: "Door",
      },
    ],
    areas: [
      {
        name: "Throne Room",
        description:
          "The central area with a throne, surrounded by walls and a roof, indicating a place of importance.",
        coordinateArea: {
          from: {
            x: 1,
            y: 0,
          },
          to: {
            x: 5,
            y: 3,
          },
        },
      },
      {
        name: "Main Hallway",
        description:
          "A long hallway with multiple staircases, connecting different parts of the manor.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 19,
            y: 9,
          },
        },
      },
      {
        name: "Outdoor Courtyard",
        description:
          "An open area with plains and a few forest tiles, providing a contrast to the indoor sections.",
        coordinateArea: {
          from: {
            x: 11,
            y: 6,
          },
          to: {
            x: 17,
            y: 10,
          },
        },
      },
      {
        name: "Left Wing",
        description:
          "A section of the manor with several rooms and staircases, leading to the main hallway.",
        coordinateArea: {
          from: {
            x: 0,
            y: 10,
          },
          to: {
            x: 9,
            y: 19,
          },
        },
      },
      {
        name: "Right Wing",
        description:
          "Another section of the manor with rooms and staircases, mirroring the left wing.",
        coordinateArea: {
          from: {
            x: 10,
            y: 10,
          },
          to: {
            x: 19,
            y: 19,
          },
        },
      },
      {
        name: "Basement Entrance",
        description:
          "A small area with stairs leading down, located at the bottom of the map.",
        coordinateArea: {
          from: {
            x: 7,
            y: 20,
          },
          to: {
            x: 9,
            y: 21,
          },
        },
      },
    ],
  },
  {
    name: "HaedricCastleCutscene",
    description:
      "A castle interior with distinct sections divided by walls and stairs.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="10" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="1800191A" tilewidth="16" tileheight="16">\n  <image source="Tilesets/1800191A.png" width="512" height="512"/>\n  <tile id="719">\n   <properties>\n    <property name="Main" value=""/>\n   </properties>\n  </tile>\n  <tile id="751">\n   <properties>\n    <property name="Main" value=""/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="10">\n  <properties>\n   <property name="Anims" value="_18Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="MapID" value="HaedricCastleCutscene_Map"/>\n   <property name="ObjectType" value="0x18"/>\n   <property name="PaletteID" value="0x19"/>\n   <property name="TileConfig" value="0x1A"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJy7xMTAcAkJn2ZkYLiIJoZL/AITRAxGE9KLrP4DEH9BojWBWIsJVT+yGLJ6dPMvQzEhMRBezYiJPdDUeOBQ1wQUb2RCpTOA+ChQ7jgQH2OE8NHVgOhFQLwQjV6BpncFFjUg+gkafgTEJ9D0gviPsai1ZMaOzZAwMWpIxQA98F+U\n  </data>\n </layer>\n</map>\n',
    height: 10,
    width: 15,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Pillar",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
    ],
    pointsOfInterest: [
      {
        x: 6,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 7,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The main entry point of the castle, featuring a wide open space with pillars.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 4,
            y: 3,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long corridor leading deeper into the castle, flanked by walls and pillars.",
        coordinateArea: {
          from: {
            x: 5,
            y: 0,
          },
          to: {
            x: 10,
            y: 3,
          },
        },
      },
      {
        name: "Throne Room",
        description:
          "The grand room at the end of the corridor, likely housing the throne or important figures.",
        coordinateArea: {
          from: {
            x: 11,
            y: 0,
          },
          to: {
            x: 14,
            y: 3,
          },
        },
      },
      {
        name: "Lower Hallway",
        description:
          "A narrow hallway connecting different parts of the castle, with stairs leading to other levels.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 14,
            y: 7,
          },
        },
      },
      {
        name: "Basement",
        description:
          "The lower level of the castle, accessible via stairs, possibly used for storage or secret meetings.",
        coordinateArea: {
          from: {
            x: 0,
            y: 8,
          },
          to: {
            x: 14,
            y: 9,
          },
        },
      },
    ],
  },
  {
    name: "MountainyLake",
    description:
      "A diverse map featuring forests, plains, cliffs, and a large lake surrounded by peaks.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="18" height="20" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01004C03" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01004C03.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="18" height="20">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapID" value="MountainyLake_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x4C"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxtk09LlFEUxu99X6JGMEvQst0UaUa6EIyEdi7mJStMSD+AAxOmhc7GjYK8K3cyfQUhCpJy6BukjpSLjPkI6sr/uPc53Ofwnhlb/Dh37j3nuc85751K7Ny/yLlzUOG6ijjsAkWQgmveuTHQ7cO+7M0irwwmXaiTemE9zjS0PqXeMVg1v4UfrCsznhsPmrcDaqAtDvUb4BkYBE/BENikVrXJg70rB/+3fObtOaiTDh/iEM9WWfMKJNS5Dc12cIB1Bfm7iHtgEVwQ1VsA8/QuM1oG74wX9XbMfqwX60c1f4ICNYqc/xznplripfM/GpYu8JH1qZn/J/PNVO+eu1pv56T1bXH2LWXuv2VWyLvps7O7RuOiyVtq7tXYivNtxAEfqHGOk5x3vUmvbs5TRnm3j0A/fYh2L9Y3wB/29xaMgwnz3d4gd4z5f1149/oeUr6NQ3pr8eEuPStS9455N/q9JW8J+VW88Za4seeH/I/tmjv0v9MDRqlXJCfI/SKzibKeD7AejRr1C6wVSuA6eQ2OUN8aBZ1D0M76+6AAtrF3xt6/gTVqyCzn6Os7e/rlQ/4aOPWZvx2QQGsqyrSG2V+BGlNg2vSU0MPjqNHfCNY5kI+CV52R9vTBBf9PwFfkv0Dc90ErMWvZnwafZd4+m5l4WaE38SI5D3hfQh/WUwnxJdhi3yXuqx+dr+j0gRlqvY9CPz2IvdTTvDxnLzqXvnWnyg==\n  </data>\n </layer>\n</map>\n',
    height: 20,
    width: 18,
    terrainGrid: [
      {
        terrain: "Forest",
        x: 0,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 2,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 4,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 2,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 10,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 10,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 18,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 19,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 19,
      },
    ],
    pointsOfInterest: [],
    interactableTiles: [],
    areas: [
      {
        name: "Northern Forest",
        description:
          "A dense forest area with thickets, providing cover and strategic ambush points.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 5,
            y: 2,
          },
        },
      },
      {
        name: "Central Plains",
        description:
          "Open plains ideal for cavalry movement, connecting various parts of the map.",
        coordinateArea: {
          from: {
            x: 6,
            y: 0,
          },
          to: {
            x: 17,
            y: 4,
          },
        },
      },
      {
        name: "Eastern Cliffs",
        description:
          "A series of cliffs overlooking the sea, offering a defensive advantage.",
        coordinateArea: {
          from: {
            x: 10,
            y: 2,
          },
          to: {
            x: 17,
            y: 4,
          },
        },
      },
      {
        name: "Southern Peaks",
        description:
          "A mountainous region with peaks, challenging for movement but offering high ground.",
        coordinateArea: {
          from: {
            x: 0,
            y: 14,
          },
          to: {
            x: 17,
            y: 19,
          },
        },
      },
      {
        name: "Lake Shore",
        description:
          "A scenic area by the lake, with cliffs and sea tiles, providing a natural barrier.",
        coordinateArea: {
          from: {
            x: 11,
            y: 3,
          },
          to: {
            x: 17,
            y: 9,
          },
        },
      },
      {
        name: "Western Forest",
        description:
          "A smaller forest area with dense trees, suitable for hiding and surprise attacks.",
        coordinateArea: {
          from: {
            x: 0,
            y: 6,
          },
          to: {
            x: 5,
            y: 11,
          },
        },
      },
    ],
  },
  {
    name: "HaedricCity",
    description:
      "HaedricCity is a mixed indoor and outdoor map featuring a central village surrounded by plains and roads.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="19" height="25" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E007210" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E007210.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="19" height="25">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="HaedricCity_Changes"/>\n   <property name="MapID" value="HaedricCity_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x72"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyFlFlKA0EQhqd78MEEBK8QwW3QeIeIZsGcwl1CziBoXHOIcQOXS7iC0RePkBdBT+FfTBVT09NjHj66q6br7+rqmu6GQdAtoA2WLEZQBWv/rCUm7f9UFaPWkt4i70/rF0bsLfhivkBH+TvsG4XEtFWMMal/gv3kqzDG5O1KQUwcBEFf7dFnf80m3/aDxB4GqS7RV2eheczfz2H3TALN9f46L9EmXTdG1pQwH2PK7Jd8KD+JF9t4Yir8TfuJOZvPR2yau/u3rH8PYWCyREqf8iypnGLOW/xbqN82iMAP7FuMM2A29Ou759P5HiFmHLR4fAeroB7mc3aJuKZEE/Nfk1/j+tahuwE2PfpU42twY7P1JI2Gp5YH0DgEvYJcX6lPbHqf0hM1j76GfHfQvAcPrC33Pl9wh2RLjrp/aY8BND7AJ2tRvURH7nIH7IK9MM1zGeOVqknTOV+De0POIXd5Ao7BWZjWlfJ54Zq8ObWUvhgG/l713ZM+o/u/RDbbd0W9UPQv+PpE22W+U6mHfJtWNdT7UZ98qz7Rtu6JkuqpFXDKNaQ1Q9XjBP3fdc+Z3H/O7a0W15p6IMb8Alza9J2qF9Rc8pRYY7Lv2CPGJ/Bsk76RN8OnV1Zr9Jsjb6PoT2HNHyoQjgM=\n  </data>\n </layer>\n <layer name="Close South" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="9"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="21"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMApoBxQH2gGDAAAAKPAAIg==\n  </data>\n </layer>\n <layer name="Close SW" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="8"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="21"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMArIA5zMA+2CoQEAFUkADQ==\n  </data>\n </layer>\n <layer name="Close SE" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="17"/>\n   <property name="Y" value="20"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAqIA63MA+2CoQkArSkAiQ==\n  </data>\n </layer>\n <layer name="Destroy South" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="20"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMAoQ4DETA8MzIH7ORLlZzMwMDGxAzM5MuVlDGQAAr64C0A==\n  </data>\n </layer>\n <layer name="Destroy SW" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="20"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMFLAUyYGhmdA/JyJcrNYmRkY2ICYnZlys4Y7AAAaIQLU\n  </data>\n </layer>\n <layer name="Destroy SE" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="19"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMFzBUyYGhmdA/JyJcrNYmRkY2ICYnZlys0YaAABHUQLU\n  </data>\n </layer>\n <layer name="Close Middle" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="17"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRgAsoDrQDRsGwAABStAAi\n  </data>\n </layer>\n <layer name="Destroy Middle" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="5"/>\n   <property name="Y" value="16"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILhA54wMTA8A+LnTJSbxcLMwMAGxOzMlJs1CkY2AABCygLS\n  </data>\n </layer>\n <layer name="Close North" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0AooDrQDRsEoGAWDAgAAjPgAIg==\n  </data>\n </layer>\n <layer name="Destroy North" width="19" height="25" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUwMBjJgaGZ0D8nIlys5iZGRjYgJidmXKzRsEoGAVDGwAAM60C0A==\n  </data>\n </layer>\n</map>\n',
    height: 25,
    width: 19,
    terrainGrid: [
      {
        terrain: "Fence",
        x: 0,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 3,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 13,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 18,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 1,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 10,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 13,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 18,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 5,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 5,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 6,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 6,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 6,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 7,
      },
      {
        terrain: "Road",
        x: 1,
        y: 7,
      },
      {
        terrain: "Road",
        x: 2,
        y: 7,
      },
      {
        terrain: "Road",
        x: 3,
        y: 7,
      },
      {
        terrain: "Road",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "Road",
        x: 14,
        y: 7,
      },
      {
        terrain: "Road",
        x: 15,
        y: 7,
      },
      {
        terrain: "Road",
        x: 16,
        y: 7,
      },
      {
        terrain: "Road",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 8,
      },
      {
        terrain: "Road",
        x: 1,
        y: 8,
      },
      {
        terrain: "Road",
        x: 2,
        y: 8,
      },
      {
        terrain: "Road",
        x: 3,
        y: 8,
      },
      {
        terrain: "Road",
        x: 4,
        y: 8,
      },
      {
        terrain: "Road",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Road",
        x: 14,
        y: 8,
      },
      {
        terrain: "Road",
        x: 15,
        y: 8,
      },
      {
        terrain: "Road",
        x: 16,
        y: 8,
      },
      {
        terrain: "Road",
        x: 17,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 9,
      },
      {
        terrain: "Road",
        x: 1,
        y: 9,
      },
      {
        terrain: "Road",
        x: 2,
        y: 9,
      },
      {
        terrain: "Road",
        x: 3,
        y: 9,
      },
      {
        terrain: "Road",
        x: 4,
        y: 9,
      },
      {
        terrain: "Road",
        x: 5,
        y: 9,
      },
      {
        terrain: "Road",
        x: 6,
        y: 9,
      },
      {
        terrain: "Road",
        x: 7,
        y: 9,
      },
      {
        terrain: "Road",
        x: 8,
        y: 9,
      },
      {
        terrain: "Road",
        x: 9,
        y: 9,
      },
      {
        terrain: "Road",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 9,
      },
      {
        terrain: "Road",
        x: 14,
        y: 9,
      },
      {
        terrain: "Road",
        x: 15,
        y: 9,
      },
      {
        terrain: "Road",
        x: 16,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 10,
      },
      {
        terrain: "Road",
        x: 1,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Road",
        x: 9,
        y: 10,
      },
      {
        terrain: "Road",
        x: 10,
        y: 10,
      },
      {
        terrain: "Road",
        x: 11,
        y: 10,
      },
      {
        terrain: "Road",
        x: 12,
        y: 10,
      },
      {
        terrain: "Road",
        x: 13,
        y: 10,
      },
      {
        terrain: "Road",
        x: 14,
        y: 10,
      },
      {
        terrain: "Road",
        x: 15,
        y: 10,
      },
      {
        terrain: "Road",
        x: 16,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 11,
      },
      {
        terrain: "Road",
        x: 1,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Village Entrance",
        x: 7,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Road",
        x: 9,
        y: 11,
      },
      {
        terrain: "Road",
        x: 10,
        y: 11,
      },
      {
        terrain: "Road",
        x: 11,
        y: 11,
      },
      {
        terrain: "Road",
        x: 12,
        y: 11,
      },
      {
        terrain: "Road",
        x: 13,
        y: 11,
      },
      {
        terrain: "Road",
        x: 14,
        y: 11,
      },
      {
        terrain: "Road",
        x: 15,
        y: 11,
      },
      {
        terrain: "Road",
        x: 16,
        y: 11,
      },
      {
        terrain: "Road",
        x: 17,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Road",
        x: 1,
        y: 12,
      },
      {
        terrain: "Road",
        x: 2,
        y: 12,
      },
      {
        terrain: "Road",
        x: 3,
        y: 12,
      },
      {
        terrain: "Road",
        x: 4,
        y: 12,
      },
      {
        terrain: "Road",
        x: 5,
        y: 12,
      },
      {
        terrain: "Road",
        x: 6,
        y: 12,
      },
      {
        terrain: "Road",
        x: 7,
        y: 12,
      },
      {
        terrain: "Road",
        x: 8,
        y: 12,
      },
      {
        terrain: "Road",
        x: 9,
        y: 12,
      },
      {
        terrain: "Road",
        x: 10,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Road",
        x: 14,
        y: 12,
      },
      {
        terrain: "Road",
        x: 15,
        y: 12,
      },
      {
        terrain: "Road",
        x: 16,
        y: 12,
      },
      {
        terrain: "Road",
        x: 17,
        y: 12,
      },
      {
        terrain: "Road",
        x: 18,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Road",
        x: 3,
        y: 13,
      },
      {
        terrain: "Road",
        x: 4,
        y: 13,
      },
      {
        terrain: "Road",
        x: 5,
        y: 13,
      },
      {
        terrain: "Road",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Road",
        x: 8,
        y: 13,
      },
      {
        terrain: "Road",
        x: 9,
        y: 13,
      },
      {
        terrain: "Road",
        x: 10,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 13,
      },
      {
        terrain: "Road",
        x: 14,
        y: 13,
      },
      {
        terrain: "Road",
        x: 15,
        y: 13,
      },
      {
        terrain: "Road",
        x: 16,
        y: 13,
      },
      {
        terrain: "Road",
        x: 17,
        y: 13,
      },
      {
        terrain: "Road",
        x: 18,
        y: 13,
      },
      {
        terrain: "Armory",
        x: 0,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 14,
      },
      {
        terrain: "Road",
        x: 3,
        y: 14,
      },
      {
        terrain: "Road",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Road",
        x: 8,
        y: 14,
      },
      {
        terrain: "Road",
        x: 9,
        y: 14,
      },
      {
        terrain: "Road",
        x: 10,
        y: 14,
      },
      {
        terrain: "Road",
        x: 11,
        y: 14,
      },
      {
        terrain: "Road",
        x: 12,
        y: 14,
      },
      {
        terrain: "Road",
        x: 13,
        y: 14,
      },
      {
        terrain: "Road",
        x: 14,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 14,
      },
      {
        terrain: "Road",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Road",
        x: 2,
        y: 15,
      },
      {
        terrain: "Road",
        x: 3,
        y: 15,
      },
      {
        terrain: "Road",
        x: 4,
        y: 15,
      },
      {
        terrain: "Road",
        x: 5,
        y: 15,
      },
      {
        terrain: "Road",
        x: 6,
        y: 15,
      },
      {
        terrain: "Road",
        x: 7,
        y: 15,
      },
      {
        terrain: "Road",
        x: 8,
        y: 15,
      },
      {
        terrain: "Road",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Road",
        x: 14,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Inn",
        x: 16,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 15,
      },
      {
        terrain: "Road",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Road",
        x: 1,
        y: 16,
      },
      {
        terrain: "Road",
        x: 2,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 16,
      },
      {
        terrain: "Road",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 16,
      },
      {
        terrain: "Road",
        x: 14,
        y: 16,
      },
      {
        terrain: "Road",
        x: 15,
        y: 16,
      },
      {
        terrain: "Road",
        x: 16,
        y: 16,
      },
      {
        terrain: "Road",
        x: 17,
        y: 16,
      },
      {
        terrain: "Road",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 17,
      },
      {
        terrain: "Road",
        x: 1,
        y: 17,
      },
      {
        terrain: "Road",
        x: 2,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 17,
      },
      {
        terrain: "Village Entrance",
        x: 6,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 17,
      },
      {
        terrain: "Road",
        x: 8,
        y: 17,
      },
      {
        terrain: "Road",
        x: 9,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Armory",
        x: 12,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 17,
      },
      {
        terrain: "Road",
        x: 15,
        y: 17,
      },
      {
        terrain: "Road",
        x: 16,
        y: 17,
      },
      {
        terrain: "Road",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 18,
      },
      {
        terrain: "Road",
        x: 1,
        y: 18,
      },
      {
        terrain: "Road",
        x: 2,
        y: 18,
      },
      {
        terrain: "Road",
        x: 3,
        y: 18,
      },
      {
        terrain: "Road",
        x: 4,
        y: 18,
      },
      {
        terrain: "Road",
        x: 5,
        y: 18,
      },
      {
        terrain: "Road",
        x: 6,
        y: 18,
      },
      {
        terrain: "Road",
        x: 7,
        y: 18,
      },
      {
        terrain: "Road",
        x: 8,
        y: 18,
      },
      {
        terrain: "Road",
        x: 9,
        y: 18,
      },
      {
        terrain: "Road",
        x: 10,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 18,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 18,
      },
      {
        terrain: "Road",
        x: 15,
        y: 18,
      },
      {
        terrain: "Road",
        x: 16,
        y: 18,
      },
      {
        terrain: "Road",
        x: 17,
        y: 18,
      },
      {
        terrain: "Road",
        x: 18,
        y: 18,
      },
      {
        terrain: "Road",
        x: 0,
        y: 19,
      },
      {
        terrain: "Road",
        x: 1,
        y: 19,
      },
      {
        terrain: "Road",
        x: 2,
        y: 19,
      },
      {
        terrain: "Road",
        x: 3,
        y: 19,
      },
      {
        terrain: "Road",
        x: 4,
        y: 19,
      },
      {
        terrain: "Road",
        x: 5,
        y: 19,
      },
      {
        terrain: "Road",
        x: 6,
        y: 19,
      },
      {
        terrain: "Road",
        x: 7,
        y: 19,
      },
      {
        terrain: "Road",
        x: 8,
        y: 19,
      },
      {
        terrain: "Road",
        x: 9,
        y: 19,
      },
      {
        terrain: "Road",
        x: 10,
        y: 19,
      },
      {
        terrain: "Road",
        x: 11,
        y: 19,
      },
      {
        terrain: "Road",
        x: 12,
        y: 19,
      },
      {
        terrain: "Road",
        x: 13,
        y: 19,
      },
      {
        terrain: "Road",
        x: 14,
        y: 19,
      },
      {
        terrain: "Road",
        x: 15,
        y: 19,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 19,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 19,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 19,
      },
      {
        terrain: "Road",
        x: 0,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 20,
      },
      {
        terrain: "Road",
        x: 4,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 20,
      },
      {
        terrain: "Road",
        x: 6,
        y: 20,
      },
      {
        terrain: "Road",
        x: 7,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 20,
      },
      {
        terrain: "Road",
        x: 13,
        y: 20,
      },
      {
        terrain: "Road",
        x: 14,
        y: 20,
      },
      {
        terrain: "Road",
        x: 15,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 20,
      },
      {
        terrain: "House",
        x: 17,
        y: 20,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Road",
        x: 0,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 21,
      },
      {
        terrain: "House",
        x: 2,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 21,
      },
      {
        terrain: "Road",
        x: 4,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 21,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 21,
      },
      {
        terrain: "Road",
        x: 7,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 21,
      },
      {
        terrain: "Village Entrance",
        x: 11,
        y: 21,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 21,
      },
      {
        terrain: "Road",
        x: 13,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 21,
      },
      {
        terrain: "Road",
        x: 15,
        y: 21,
      },
      {
        terrain: "Road",
        x: 16,
        y: 21,
      },
      {
        terrain: "Road",
        x: 17,
        y: 21,
      },
      {
        terrain: "Road",
        x: 18,
        y: 21,
      },
      {
        terrain: "Road",
        x: 0,
        y: 22,
      },
      {
        terrain: "Road",
        x: 1,
        y: 22,
      },
      {
        terrain: "Road",
        x: 2,
        y: 22,
      },
      {
        terrain: "Road",
        x: 3,
        y: 22,
      },
      {
        terrain: "Road",
        x: 4,
        y: 22,
      },
      {
        terrain: "Road",
        x: 5,
        y: 22,
      },
      {
        terrain: "Road",
        x: 6,
        y: 22,
      },
      {
        terrain: "Road",
        x: 7,
        y: 22,
      },
      {
        terrain: "Road",
        x: 8,
        y: 22,
      },
      {
        terrain: "Road",
        x: 9,
        y: 22,
      },
      {
        terrain: "Road",
        x: 10,
        y: 22,
      },
      {
        terrain: "Road",
        x: 11,
        y: 22,
      },
      {
        terrain: "Road",
        x: 12,
        y: 22,
      },
      {
        terrain: "Road",
        x: 13,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 22,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 22,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 22,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 23,
      },
      {
        terrain: "Road",
        x: 2,
        y: 23,
      },
      {
        terrain: "Road",
        x: 3,
        y: 23,
      },
      {
        terrain: "Road",
        x: 4,
        y: 23,
      },
      {
        terrain: "Road",
        x: 5,
        y: 23,
      },
      {
        terrain: "Road",
        x: 6,
        y: 23,
      },
      {
        terrain: "Road",
        x: 7,
        y: 23,
      },
      {
        terrain: "Road",
        x: 8,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 23,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 23,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 23,
      },
      {
        terrain: "Vendor",
        x: 17,
        y: 23,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 23,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 24,
      },
      {
        terrain: "Road",
        x: 3,
        y: 24,
      },
      {
        terrain: "Road",
        x: 4,
        y: 24,
      },
      {
        terrain: "Road",
        x: 5,
        y: 24,
      },
      {
        terrain: "Road",
        x: 6,
        y: 24,
      },
      {
        terrain: "Road",
        x: 7,
        y: 24,
      },
      {
        terrain: "Road",
        x: 8,
        y: 24,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 24,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 24,
      },
    ],
    pointsOfInterest: [
      {
        x: 2,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 0,
        y: 14,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 15,
        terrain: "Inn",
      },
      {
        x: 6,
        y: 17,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 17,
        terrain: "Armory",
      },
      {
        x: 17,
        y: 20,
        terrain: "House",
      },
      {
        x: 2,
        y: 21,
        terrain: "House",
      },
      {
        x: 11,
        y: 21,
        terrain: "Village Entrance",
      },
      {
        x: 17,
        y: 23,
        terrain: "Vendor",
      },
    ],
    interactableTiles: [
      {
        x: 7,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 0,
        y: 14,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 15,
        terrain: "Inn",
      },
      {
        x: 6,
        y: 17,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 17,
        terrain: "Armory",
      },
      {
        x: 17,
        y: 20,
        terrain: "House",
      },
      {
        x: 2,
        y: 21,
        terrain: "House",
      },
      {
        x: 11,
        y: 21,
        terrain: "Village Entrance",
      },
      {
        x: 17,
        y: 23,
        terrain: "Vendor",
      },
    ],
    areas: [
      {
        name: "Northern Entrance",
        description:
          "The northern part of the map with a fenced area leading to the main village. It includes stairs for potential reinforcements.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 18,
            y: 6,
          },
        },
      },
      {
        name: "Central Village",
        description:
          "A bustling village area with roads, houses, and a village entrance. Key locations include an armory and an inn.",
        coordinateArea: {
          from: {
            x: 0,
            y: 7,
          },
          to: {
            x: 18,
            y: 17,
          },
        },
      },
      {
        name: "Western Plains",
        description:
          "Open plains with scattered forests and roads, providing strategic movement options.",
        coordinateArea: {
          from: {
            x: 0,
            y: 18,
          },
          to: {
            x: 9,
            y: 24,
          },
        },
      },
      {
        name: "Eastern Plains",
        description:
          "Similar to the western plains, this area features open terrain with some forested sections.",
        coordinateArea: {
          from: {
            x: 10,
            y: 18,
          },
          to: {
            x: 18,
            y: 24,
          },
        },
      },
      {
        name: "Southern Village Outskirts",
        description:
          "The southern edge of the village with roads leading to various village entrances and a vendor.",
        coordinateArea: {
          from: {
            x: 0,
            y: 20,
          },
          to: {
            x: 18,
            y: 24,
          },
        },
      },
    ],
  },
  {
    name: "RipBlaine",
    description:
      "A diverse outdoor map featuring forests, peaks, rivers, and strategic forts.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="21" height="18" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01003803" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01003803.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="21" height="18">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapID" value="RipBlaine_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x38"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxdlM9L1UEQwHf3XSItIwgiIigPBkm/oOwHdRHR9PXjFSV1r/QQZGEeJA+9nnhIA/0PzJ7PQ0V0N4qQLImsHp3zYIFppu8P6DPMfNnv6/BhZndnZmdnZ7fZOVeXca4Z+RK5FpwbQ372zr2DWsbjyDz8gYuMH0AR+wmnfsJ8iOM8DKbWJO4rOIjNHDHakL+RX7yuP2WtjD6HXoNsgfcurkmsu5aj6EVbGyZODfNLyBxcgj1Bc/xOjFlsPsAN9EY4I+fxMTfJqZjaZxh53hhxcb/VoPoBfEdhr8WTtX2my/ov7I4g+8xXYk9BA5TgeVIr2IDPkFf//V59c5l4rp9wARZY287cffjmtca3oMti9eBzB7ZCncSx+cR3DUrof23cgJzyWs8d2NXDSRf3lruV+xpLcvEx3iaYZbwMh9FXvY7b7T7Xg8ZdR9+Jz3HLWcaDFlfyzFpMua/NQfssILus1yaD9p3sN2q5JHc2AE2mf8X2TYg9l/Sh5JX0Wa3l3BpiL1eC3n1yR1KHfquB5FrxmresP0rlKjE7LK9G2B10j26LV0j10zGYtlyTe/uB3Vn0czZe8dW9m4WSvbND6C2Z+IZOwGsoW1yp7Tg2i9a7Pfh8Sr2Nx6yNWNwlexMTViexl9oNWLyy9Zf0WZ/VU2ylnzb6+A5EvoA2F22kZr3Io9ZLV4xO2CY2xLsKp+ByUJt620fyyNt+N6ERhuztXTP/itVqPsRayJ33Qj90wjJzW7zONYXYd8mfJLFvp/6jXKquC0FzXHTxT5O85B/qsN59ErSf5W3fs/ct8ZN/rsD6Q5hBb7UzZFP7CR+d/kcr1rcFO8+u/+50xlX/c3LWZ8hJaHfV/9J1+ztk/DboeWX+dOpep+19/wPjnbZp\n  </data>\n </layer>\n</map>\n',
    height: 18,
    width: 21,
    terrainGrid: [
      {
        terrain: "Plains",
        x: 0,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 4,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 1,
      },
      {
        terrain: "Fort",
        x: 12,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Fort",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Hill",
        x: 5,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Fort",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 4,
      },
      {
        terrain: "Hill",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 6,
      },
      {
        terrain: "Bridge",
        x: 2,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 6,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 8,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 10,
      },
      {
        terrain: "Armory",
        x: 1,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 5,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 10,
      },
      {
        terrain: "Vendor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 4,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 5,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 6,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Fort",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Hill",
        x: 15,
        y: 11,
      },
      {
        terrain: "Hill",
        x: 16,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Fort",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 4,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 5,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 12,
      },
      {
        terrain: "River",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 2,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 13,
      },
      {
        terrain: "River",
        x: 8,
        y: 13,
      },
      {
        terrain: "River",
        x: 9,
        y: 13,
      },
      {
        terrain: "River",
        x: 10,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 11,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 12,
        y: 13,
      },
      {
        terrain: "River",
        x: 13,
        y: 13,
      },
      {
        terrain: "Fort",
        x: 14,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 14,
      },
      {
        terrain: "River",
        x: 8,
        y: 14,
      },
      {
        terrain: "River",
        x: 9,
        y: 14,
      },
      {
        terrain: "River",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "River",
        x: 13,
        y: 14,
      },
      {
        terrain: "River",
        x: 14,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Fort",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 16,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 16,
      },
      {
        terrain: "Sea",
        x: 18,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 17,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 17,
      },
      {
        terrain: "Sea",
        x: 18,
        y: 17,
      },
      {
        terrain: "Sea",
        x: 19,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 17,
      },
    ],
    pointsOfInterest: [
      {
        x: 12,
        y: 1,
        terrain: "Fort",
      },
      {
        x: 19,
        y: 1,
        terrain: "Fort",
      },
      {
        x: 3,
        y: 3,
        terrain: "Fort",
      },
      {
        x: 1,
        y: 10,
        terrain: "Armory",
      },
      {
        x: 0,
        y: 11,
        terrain: "Vendor",
      },
      {
        x: 10,
        y: 11,
        terrain: "Fort",
      },
      {
        x: 1,
        y: 12,
        terrain: "Fort",
      },
      {
        x: 14,
        y: 13,
        terrain: "Fort",
      },
      {
        x: 10,
        y: 15,
        terrain: "Fort",
      },
    ],
    interactableTiles: [
      {
        x: 1,
        y: 10,
        terrain: "Armory",
      },
      {
        x: 0,
        y: 11,
        terrain: "Vendor",
      },
    ],
    areas: [
      {
        name: "Northern Peaks",
        description:
          "A rugged area dominated by peaks, providing high ground advantage.",
        coordinateArea: {
          from: {
            x: 6,
            y: 0,
          },
          to: {
            x: 11,
            y: 5,
          },
        },
      },
      {
        name: "Central River Crossing",
        description:
          "A strategic river crossing with multiple bridges and forts, crucial for movement and defense.",
        coordinateArea: {
          from: {
            x: 0,
            y: 10,
          },
          to: {
            x: 20,
            y: 14,
          },
        },
      },
      {
        name: "Western Forests",
        description:
          "Dense forests offering cover and ambush opportunities, with an armory and vendor nearby.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 5,
            y: 11,
          },
        },
      },
      {
        name: "Eastern Plains",
        description:
          "Open plains with scattered forests and hills, ideal for cavalry movement.",
        coordinateArea: {
          from: {
            x: 12,
            y: 0,
          },
          to: {
            x: 20,
            y: 9,
          },
        },
      },
      {
        name: "Southern Cliffs",
        description:
          "A series of cliffs and plains, providing natural barriers and strategic vantage points.",
        coordinateArea: {
          from: {
            x: 0,
            y: 15,
          },
          to: {
            x: 20,
            y: 17,
          },
        },
      },
    ],
  },
  {
    name: "ArcanaeEscape",
    description:
      "A complex indoor map with multiple rooms, corridors, and staircases.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="16" height="15" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="16" height="15">\n  <properties>\n   <property name="Anims" value="_3CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="ArcanaeEscape_Changes"/>\n   <property name="MapID" value="ArcanaeEscape_Map"/>\n   <property name="ObjectType" value="0x3C"/>\n   <property name="PaletteID" value="0xCE"/>\n   <property name="TileConfig" value="0x3E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJylUrsKwjAUTVMXHYTWfoSPwckG+x/+gB/Qz3LxB5wFdejSURwFcQg4180bmounlxQEh0OSm5z7OCdNpFTTgzfhSljFSuUeRux3dD/VSi16UHl+rbt5+PyMWkziMJi/JGygLp/3dP8gJLRPA7DQv4F8vD8QboQT4SJwhvl57gry/cu3P/DHup1x4Gd9QT6nfUHrWniCHrl6WUDP3GuPviCPz0fQdqu6+jk++zD0fTqMIOfd8x03C+iPvmSiR44nPp4G9OdeLfSJns+gL4e5/ua2UL/UrQdO8xLeOG0LsXLNIvCvjXhT667/RsTxX4c8kPcy/gEsUWMf\n  </data>\n </layer>\n <layer name="BottomChest" width="16" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo4D2wGmgHTBMAQBccABD\n  </data>\n </layer>\n <layer name="TopChest" width="16" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo4A44DTQDhgFGAAAa+gAQw==\n  </data>\n </layer>\n <layer name="LeftDoor" width="16" height="15" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwxm8ZmRgYKRAvzAzA4MQM/n6T1No/yjADwAfqQHm\n  </data>\n </layer>\n <layer name="TopDoor" width="16" height="15" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFgx1oMTEwCDIzMGgykaefEYiFmCH0KBheAAAOOQCD\n  </data>\n </layer>\n</map>\n',
    height: 15,
    width: 16,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 0,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 6,
      },
      {
        terrain: "Door",
        x: 10,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 7,
      },
      {
        terrain: "Pillar",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Door",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Chest",
        x: 11,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Chest",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 12,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 12,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Pillar",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
    ],
    pointsOfInterest: [
      {
        x: 0,
        y: 1,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 15,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 3,
        y: 12,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 12,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 10,
        y: 6,
        terrain: "Door",
      },
      {
        x: 8,
        y: 8,
        terrain: "Door",
      },
      {
        x: 11,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 10,
        y: 9,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with stairs leading to the main corridor.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 8,
            y: 2,
          },
        },
      },
      {
        name: "Main Corridor",
        description: "A long corridor with pillars and access to other rooms.",
        coordinateArea: {
          from: {
            x: 9,
            y: 0,
          },
          to: {
            x: 15,
            y: 2,
          },
        },
      },
      {
        name: "Staircase Room",
        description:
          "A room filled with stairs, leading to different parts of the map.",
        coordinateArea: {
          from: {
            x: 0,
            y: 3,
          },
          to: {
            x: 8,
            y: 6,
          },
        },
      },
      {
        name: "Treasure Room",
        description: "A secure room containing chests with valuable items.",
        coordinateArea: {
          from: {
            x: 9,
            y: 8,
          },
          to: {
            x: 11,
            y: 9,
          },
        },
      },
      {
        name: "Lower Corridor",
        description:
          "A corridor connecting the staircase room to the treasure room.",
        coordinateArea: {
          from: {
            x: 0,
            y: 7,
          },
          to: {
            x: 8,
            y: 9,
          },
        },
      },
      {
        name: "Exit Hall",
        description: "The final area with stairs leading to the exit.",
        coordinateArea: {
          from: {
            x: 0,
            y: 12,
          },
          to: {
            x: 15,
            y: 14,
          },
        },
      },
    ],
  },
  {
    name: "KilthelTemple",
    description:
      "Kilthel Temple is a complex indoor map with multiple rooms, corridors, and stairways, leading to an outdoor area with plains and sea.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="20" height="26" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="20" height="26">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="KilthelTemple_Changes"/>\n   <property name="MapID" value="KilthelTemple_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJy9lTFLw1AQx58pxU9QEEchbXBxqvYDCBEcnHRykSJmcVToB1DQgmZyFREES8HJjyAOEXTxc3R2847c4eVyeX1dHH68y+Xun3v3Lsms5dyMmAIv4joGusrHFMK/5ko7UTEfwFeg3kjYOa1aT+PTs9B61yoXr5/IN1WrjNX75ZhE5UyA86XS5l7wmgg9vV8dw9cr0Z+e3hvWt2yg9y9zB6C3FVXPiMHaT4AO3N+MyhrzAD3E6j3r9Imm8wnV60dV/kOPe7wu+tsmrFmadx7Y44zq/KT+xqTHcy1nKTPQ7yTrYc7Y0ONZKgL0RlST7KPW07Ea+X5Y59Kk50N/V6Qe2ji3PeG7oN5fGr55c2Pp9Tw+n96Y7B9Xz23yhdT3beQ2+eSc8oy2BV2KS0Vc6vFNhI+/GbGhdye+W2gfGL57V/2vFA16Hcp9A/udcs9add+hq/5XeEa13iswhNhnIHel/UjrLZABA1fuwzqP2n6BbYg9Jb1dYA+4ATaAB7i/Cuv+AnrHVA/mX+HZkjbWifeOaA+L1Ie5KWkxO/ScIen+AquOOV8=\n  </data>\n </layer>\n <layer name="BottomChest" width="20" height="26" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="17"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFpAKmgXbAKBgFo2AUjIJRQGMAABX4AAM=\n  </data>\n </layer>\n <layer name="TopChest" width="20" height="26" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="17"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYKAcMFHBjFEwCkbBKBgFo2AUDB4AABfYAAM=\n  </data>\n </layer>\n</map>\n',
    height: 26,
    width: 20,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Pillar",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 0,
      },
      {
        terrain: "Chest",
        x: 17,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Chest",
        x: 17,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 4,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 4,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Brace",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 15,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 11,
      },
      {
        terrain: "Pillar",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 14,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 17,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 18,
      },
      {
        terrain: "Sea",
        x: 9,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 18,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 18,
      },
      {
        terrain: "Sea",
        x: 19,
        y: 18,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 19,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 19,
      },
      {
        terrain: "Sea",
        x: 9,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 19,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 19,
      },
      {
        terrain: "Sea",
        x: 19,
        y: 19,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 20,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 20,
      },
      {
        terrain: "Sea",
        x: 9,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 20,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Sea",
        x: 19,
        y: 20,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 21,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 21,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 21,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 22,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 22,
      },
      {
        terrain: "Sea",
        x: 19,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 23,
      },
      {
        terrain: "Armory",
        x: 17,
        y: 23,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 23,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 24,
      },
      {
        terrain: "Vendor",
        x: 18,
        y: 24,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 25,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 25,
      },
    ],
    pointsOfInterest: [
      {
        x: 17,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 17,
        y: 3,
        terrain: "Chest",
      },
      {
        x: 7,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 15,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 12,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 17,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 23,
        terrain: "Armory",
      },
      {
        x: 18,
        y: 24,
        terrain: "Vendor",
      },
    ],
    interactableTiles: [
      {
        x: 17,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 17,
        y: 3,
        terrain: "Chest",
      },
      {
        x: 17,
        y: 23,
        terrain: "Armory",
      },
      {
        x: 18,
        y: 24,
        terrain: "Vendor",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area of the temple with a wide open space and pillars, leading to various rooms.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 6,
            y: 5,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long corridor with multiple stairways, connecting different parts of the temple.",
        coordinateArea: {
          from: {
            x: 7,
            y: 5,
          },
          to: {
            x: 19,
            y: 9,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A small room containing chests, accessible from the central corridor.",
        coordinateArea: {
          from: {
            x: 16,
            y: 0,
          },
          to: {
            x: 19,
            y: 3,
          },
        },
      },
      {
        name: "Inner Sanctum",
        description:
          "A secluded area with walls and braces, possibly housing important objectives.",
        coordinateArea: {
          from: {
            x: 0,
            y: 10,
          },
          to: {
            x: 19,
            y: 13,
          },
        },
      },
      {
        name: "Lower Chambers",
        description:
          "A series of rooms and corridors with stairs, leading to the outdoor area.",
        coordinateArea: {
          from: {
            x: 0,
            y: 14,
          },
          to: {
            x: 19,
            y: 21,
          },
        },
      },
      {
        name: "Outdoor Plains",
        description:
          "An open outdoor area with plains and sea, featuring an armory and vendor.",
        coordinateArea: {
          from: {
            x: 0,
            y: 22,
          },
          to: {
            x: 19,
            y: 25,
          },
        },
      },
    ],
  },
  {
    name: "CesarianCapitalRetreat",
    description:
      "The map is a complex indoor layout with multiple rooms, corridors, and staircases, featuring chests and doors.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="19" height="21" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="79007A7B" tilewidth="16" tileheight="16">\n  <image source="Tilesets/79007A7B.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="19" height="21">\n  <properties>\n   <property name="Anims" value="_79Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="CesarianCapitalRetreat_Changes"/>\n   <property name="MapID" value="CesarianCapitalRetreat_Map"/>\n   <property name="ObjectType" value="0x79"/>\n   <property name="PaletteID" value="0x7A"/>\n   <property name="TileConfig" value="0x7B"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyNlEtOxDAMht1WMzseZ5iR2PG4ElyGxaxAXGDaBY8ueIgLwAV4iAukmrkHv1WbmEzSZPHLdpp8iR03Q0U0iLYJLaEFEb2L5Xgj3+zaIaE9rHHi81rmXGKsk9hF5qV0TN6fQY3R3LDsPFfAjuUdm+cM+zzYX3WUiO35ZtX/82hdukA8foX9rqEb8jH7j9ATjXHIWkuNW7mztYw/w3+BXsnH7H9AnzTGtl7KakWdWB7/wpxv6Id8zP4ddE9jbOu1knNw7heGa/tpG4lVNscerFsa7TJgLWRftqvEvZeyNqY/+qA2ajnfB8l5irWPsQPokDxLa2P7NdaTWrtW/BPoFDozrKn/xqo3d8R+WOtSTow1dY63Gj1e7/aqy7DsnL/7A2eYYKX+5RiraojqZrfvczXNsfROw3cqpnmEpTnm3qmSt0vPVfJG595KZf0CpsoFIw==\n  </data>\n </layer>\n <layer name="Bottom Door" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AU0AM8ZGRgeATFw9WsUTByAADzRAf5\n  </data>\n </layer>\n <layer name="Chest5" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2B4AqaBdsAoGAXDGAAADPwAAw==\n  </data>\n </layer>\n <layer name="Chest4" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2B4AaaBdsAoGAUjAAAADQwAAw==\n  </data>\n </layer>\n <layer name="Chest3" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwx0wDbQDRsEoGAXDDgAADuwAAw==\n  </data>\n </layer>\n <layer name="Top Door" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="5"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFQxU8ZGRgeMQ4+MwaBaNgFAx/AABmhQOL\n  </data>\n </layer>\n <layer name="Chest2" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCANMJGofhSMglEwCkbB8AMAElQAAw==\n  </data>\n </layer>\n <layer name="Chest1" width="19" height="21" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCAOMBGpbhSMglEwCkbB8AcAEmQAAw==\n  </data>\n </layer>\n</map>\n',
    height: 21,
    width: 19,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Chest",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Chest",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 16,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 5,
      },
      {
        terrain: "Door",
        x: 16,
        y: 5,
      },
      {
        terrain: "Door",
        x: 17,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Chest",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 6,
      },
      {
        terrain: "Door",
        x: 16,
        y: 6,
      },
      {
        terrain: "Door",
        x: 17,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 16,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 9,
      },
      {
        terrain: "Chest",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Chest",
        x: 12,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 10,
      },
      {
        terrain: "Pillar",
        x: 17,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Door",
        x: 10,
        y: 11,
      },
      {
        terrain: "Door",
        x: 11,
        y: 11,
      },
      {
        terrain: "Door",
        x: 12,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Door",
        x: 10,
        y: 12,
      },
      {
        terrain: "Door",
        x: 11,
        y: 12,
      },
      {
        terrain: "Door",
        x: 12,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 14,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 15,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 15,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 15,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 16,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 17,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 17,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 20,
      },
      {
        terrain: "Pillar",
        x: 6,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 20,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 20,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 20,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 20,
      },
    ],
    pointsOfInterest: [
      {
        x: 10,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 11,
        y: 1,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 16,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 17,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 4,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 0,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 15,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 15,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 10,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 16,
        y: 5,
        terrain: "Door",
      },
      {
        x: 17,
        y: 5,
        terrain: "Door",
      },
      {
        x: 7,
        y: 6,
        terrain: "Chest",
      },
      {
        x: 16,
        y: 6,
        terrain: "Door",
      },
      {
        x: 17,
        y: 6,
        terrain: "Door",
      },
      {
        x: 10,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 10,
        y: 11,
        terrain: "Door",
      },
      {
        x: 11,
        y: 11,
        terrain: "Door",
      },
      {
        x: 12,
        y: 11,
        terrain: "Door",
      },
      {
        x: 10,
        y: 12,
        terrain: "Door",
      },
      {
        x: 11,
        y: 12,
        terrain: "Door",
      },
      {
        x: 12,
        y: 12,
        terrain: "Door",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with a wide open space and pillars, leading to various rooms.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 18,
            y: 3,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A secure room containing chests, accessible through a narrow corridor.",
        coordinateArea: {
          from: {
            x: 9,
            y: 0,
          },
          to: {
            x: 13,
            y: 1,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long hallway connecting different parts of the map, with multiple staircases.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 18,
            y: 11,
          },
        },
      },
      {
        name: "Upper Chambers",
        description:
          "A series of rooms and corridors with doors and staircases, leading to the roof.",
        coordinateArea: {
          from: {
            x: 0,
            y: 12,
          },
          to: {
            x: 18,
            y: 20,
          },
        },
      },
      {
        name: "Roof Access",
        description:
          "The topmost area with roof tiles, providing access to the outside.",
        coordinateArea: {
          from: {
            x: 17,
            y: 14,
          },
          to: {
            x: 18,
            y: 20,
          },
        },
      },
    ],
  },
  {
    name: "DefenseFort",
    description:
      "A mixed indoor and outdoor map featuring a fort with multiple rooms and surrounding plains.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="21" height="24" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="3C003D3E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/3C003D3E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="21" height="24">\n  <properties>\n   <property name="Anims" value="_3CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="DefenseFort_Changes"/>\n   <property name="MapID" value="DefenseFort_Map"/>\n   <property name="ObjectType" value="0x3C"/>\n   <property name="PaletteID" value="0x3D"/>\n   <property name="TileConfig" value="0x3E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx9lctqVEEQhqtPQI1KHkCXoiGOoJsEZ6mMONmIeHkAMxkVEXXhCyhziIIanyHBGI2ZvcuQxAsiRsWdG2EERXShS1341/RfnDqdM1l89OV0/11VXV1nYkhkYgBvgsj7TOQD0fG0iKyDhsS+0gE557UdpDdIU/e1nJbp546tNEegswSdlRDbgxivUi+ntrKaaL4MkRch2jEOrY0stjquof+IrWJa90LZXtN7BxZoe1sKzcPgPDWP0uY6+Qzd52Av+jm+b6P2LrQnwIEQtVrUNk0fz/EkHn0trF3jvrNYswNcBIdC/LZAG9sVmj+SWCwzrspOxmEM/TM6pp76vOTWdfVeXXxrWTkWi5ibkhgPPV/9vQO+Y+4cNTW+FnvD21lP/H4cijnV/In938Cw5kQoYmKxrzuNjUTbxsNZ2SfVeCvR9yO8m0H5ab6mY8sto+8n5kbBL5dXeuYcmA/l2FbRdTnZok0d9wYsT/W8Y7Dh+NDm2FbRo95dcCrRshqg73UP9D5h/d+sONNsMXvug0lwmlwBV52d67yfjptT3X/QvOn8y6V435fAdvLU1ZE1V4+maatq9pz+fmg2wUgo7LRvy+A6eJbYY/vt3rU/lpXfR415/ErKsfB1skcfGlKuVSfZ6vv4A62PWfE+XjOfbV3Tafu65uucnjnLvr6P367uqp2TYDfzeJZxbDoffezsXL27Udmcg1p31bcH6F/jW3lCzYfOnkaFllGVg/28Ze0y37ytZl8Ha/dV8DWJj/fN8nIG3CCXeT/6fQX7L4CpBK/j/wHm0yLoum++/YL9t8Bth2paTvn7m5Eit21/mn/tLTT/A19A4f8=\n  </data>\n </layer>\n <layer name="Main Door" width="21" height="24" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="4"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUDEawjpGBwZSZgcEMiNcyUsdMkDEwM6lk5CgYBaNgkAIAcl0CQg==\n  </data>\n </layer>\n <layer name="Chest Open" width="21" height="24" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BggNNAO2AUjIJRMAqGMQAAa7cAQw==\n  </data>\n </layer>\n <layer name="Top Door" width="21" height="24" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgeYB0jA8NHJgaGtYwD7ZJRMApGwSgYBaNg4AEAZxACUQ==\n  </data>\n </layer>\n</map>\n',
    height: 24,
    width: 21,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Hill",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 0,
      },
      {
        terrain: "Hill",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 1,
      },
      {
        terrain: "Hill",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 1,
      },
      {
        terrain: "Hill",
        x: 16,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 2,
      },
      {
        terrain: "Door",
        x: 9,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Road",
        x: 12,
        y: 4,
      },
      {
        terrain: "Road",
        x: 13,
        y: 4,
      },
      {
        terrain: "Road",
        x: 14,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Road",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 7,
      },
      {
        terrain: "Chest",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 11,
      },
      {
        terrain: "Door",
        x: 1,
        y: 11,
      },
      {
        terrain: "Door",
        x: 2,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 12,
      },
      {
        terrain: "Door",
        x: 1,
        y: 12,
      },
      {
        terrain: "Door",
        x: 2,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 12,
      },
      {
        terrain: "Hill",
        x: 0,
        y: 13,
      },
      {
        terrain: "Road",
        x: 1,
        y: 13,
      },
      {
        terrain: "Road",
        x: 2,
        y: 13,
      },
      {
        terrain: "Road",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Hill",
        x: 18,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Road",
        x: 2,
        y: 14,
      },
      {
        terrain: "Road",
        x: 3,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 14,
      },
      {
        terrain: "Hill",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Hill",
        x: 13,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 17,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 18,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 19,
      },
      {
        terrain: "Hill",
        x: 5,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 20,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 20,
      },
      {
        terrain: "Hill",
        x: 0,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 21,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 21,
      },
      {
        terrain: "Roof",
        x: 20,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 22,
      },
      {
        terrain: "Roof",
        x: 20,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 23,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 23,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 15,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 16,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 17,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 18,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 19,
        y: 23,
      },
      {
        terrain: "Roof",
        x: 20,
        y: 23,
      },
    ],
    pointsOfInterest: [
      {
        x: 0,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 9,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 7,
        terrain: "Chest",
      },
      {
        x: 11,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 17,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 18,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 9,
        y: 2,
        terrain: "Door",
      },
      {
        x: 12,
        y: 7,
        terrain: "Chest",
      },
      {
        x: 1,
        y: 11,
        terrain: "Door",
      },
      {
        x: 2,
        y: 11,
        terrain: "Door",
      },
      {
        x: 1,
        y: 12,
        terrain: "Door",
      },
      {
        x: 2,
        y: 12,
        terrain: "Door",
      },
    ],
    areas: [
      {
        name: "Main Hallway",
        description:
          "A central hallway with stairs leading to different sections of the fort.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 11,
            y: 3,
          },
        },
      },
      {
        name: "Treasure Room",
        description: "A small room containing a chest, accessible via stairs.",
        coordinateArea: {
          from: {
            x: 11,
            y: 7,
          },
          to: {
            x: 14,
            y: 8,
          },
        },
      },
      {
        name: "Outdoor Plains",
        description:
          "Open plains surrounding the fort, providing space for movement and combat.",
        coordinateArea: {
          from: {
            x: 12,
            y: 0,
          },
          to: {
            x: 20,
            y: 23,
          },
        },
      },
      {
        name: "Lower Fort Entrance",
        description:
          "The entrance area of the fort with doors and walls, leading to the main hallway.",
        coordinateArea: {
          from: {
            x: 0,
            y: 11,
          },
          to: {
            x: 11,
            y: 12,
          },
        },
      },
      {
        name: "Upper Fort Rooms",
        description:
          "A series of rooms connected by walls and doors, part of the fort's interior.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 11,
            y: 10,
          },
        },
      },
      {
        name: "Southern Roof",
        description:
          "A roofed area at the southern end of the map, providing a vantage point.",
        coordinateArea: {
          from: {
            x: 15,
            y: 20,
          },
          to: {
            x: 20,
            y: 23,
          },
        },
      },
    ],
  },
  {
    name: "Deidar",
    description:
      "A village map with a central river and multiple village areas surrounded by forests and plains.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="24" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E000F10" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E000F10.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="24" height="17">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Deidar_Changes"/>\n   <property name="MapID" value="Deidar_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x0F"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyFlMtOVEEQQPsREwUXw1o3bofFLPGxG4gL+QDDUtFIdGH0D64oQ8BEf2GG+EC/YvABMxr1F4gvZiCGvcZ4iq5ONy2ji5Oue7u6qqu6qqw1ZsYZ884Y8wYa9mh+oXPKB/kpehU0kS1Ms9fRf2JLVvmWPVlX1e41zl+HdbgJt3yyfxp5CiaQ22IP5uGzPWyv0vULNPXeLbV/n/MPoAcrsAr7ujeHfFntdzm3AYtwRn0cxILsXLAt/70bnY88D7vwG90LPuToLd8rutdGbxt6yH3915W8wBrcdom76u8bOnsmxSp3GxQ+fmhOJP6PcBGdoUnvID5ej7j3J/aX9P0O8qpxbyKf03dY1nq4gnwV5uFh9ubiQ8581/zuIA9gCLuw54KPaa2HRybV0VT27hXyPViErUw/xvFSzx1n/wSMwTic9CmWvg3I950ilzn7GneV5Vbq9UlW95L7Z/Bc32CM/WMZLXQWYNke/j/uwt1rNuWpaZMv8TGhvSIxSaz1wva/7At9/beV9ULMUz3T6Rdnhzbwv/w0bIol5qfu/rZXxl2ZFHvsY7F1g3UBJn2qiYbeZQCTI+5YIv30XnMo9Rl7oCV1CrNZTexkb3tJ7c4Wd6yh98GE2m0jd2DNh1qaU/s/j8iP1MYwq9FI7Ik452o6Z+Sdu8gb8MqHmpIePu/TLI2Ivivsdop+28zsy/pYcyJ1LXd7YcKc+GpCn50t/Cxl9bKd1U+vmP3x/nF+xxk0k835cublPmL+RfcP3iGn7Q==\n  </data>\n </layer>\n <layer name="Bottom House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQCugONAOGEAAACbcACI=\n  </data>\n </layer>\n <layer name="Right House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIKhCRQH2gGjAC8AADwAACI=\n  </data>\n </layer>\n <layer name="Top House" width="24" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBieQHGgHTAKRsEoGAUjHAAAvOgAIg==\n  </data>\n </layer>\n</map>\n',
    height: 17,
    width: 24,
    terrainGrid: [
      {
        terrain: "Plains",
        x: 0,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 1,
      },
      {
        terrain: "Lake",
        x: 11,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 22,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 2,
      },
      {
        terrain: "Village Entrance",
        x: 6,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 10,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 11,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 2,
      },
      {
        terrain: "Vendor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 21,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 22,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 11,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 21,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 22,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 4,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 13,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 22,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 5,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 6,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 7,
      },
      {
        terrain: "Road",
        x: 9,
        y: 7,
      },
      {
        terrain: "Road",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Road",
        x: 8,
        y: 8,
      },
      {
        terrain: "Road",
        x: 9,
        y: 8,
      },
      {
        terrain: "Road",
        x: 10,
        y: 8,
      },
      {
        terrain: "Road",
        x: 11,
        y: 8,
      },
      {
        terrain: "Bridge",
        x: 12,
        y: 8,
      },
      {
        terrain: "Bridge",
        x: 13,
        y: 8,
      },
      {
        terrain: "Bridge",
        x: 14,
        y: 8,
      },
      {
        terrain: "Road",
        x: 15,
        y: 8,
      },
      {
        terrain: "Road",
        x: 16,
        y: 8,
      },
      {
        terrain: "Road",
        x: 17,
        y: 8,
      },
      {
        terrain: "Road",
        x: 18,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Road",
        x: 7,
        y: 9,
      },
      {
        terrain: "Road",
        x: 8,
        y: 9,
      },
      {
        terrain: "Road",
        x: 9,
        y: 9,
      },
      {
        terrain: "Road",
        x: 10,
        y: 9,
      },
      {
        terrain: "Road",
        x: 11,
        y: 9,
      },
      {
        terrain: "Bridge",
        x: 12,
        y: 9,
      },
      {
        terrain: "Bridge",
        x: 13,
        y: 9,
      },
      {
        terrain: "Bridge",
        x: 14,
        y: 9,
      },
      {
        terrain: "Road",
        x: 15,
        y: 9,
      },
      {
        terrain: "Road",
        x: 16,
        y: 9,
      },
      {
        terrain: "Road",
        x: 17,
        y: 9,
      },
      {
        terrain: "Road",
        x: 18,
        y: 9,
      },
      {
        terrain: "Road",
        x: 19,
        y: 9,
      },
      {
        terrain: "Road",
        x: 20,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 10,
      },
      {
        terrain: "Road",
        x: 2,
        y: 10,
      },
      {
        terrain: "Road",
        x: 3,
        y: 10,
      },
      {
        terrain: "Road",
        x: 4,
        y: 10,
      },
      {
        terrain: "Road",
        x: 5,
        y: 10,
      },
      {
        terrain: "Road",
        x: 6,
        y: 10,
      },
      {
        terrain: "Road",
        x: 7,
        y: 10,
      },
      {
        terrain: "Road",
        x: 8,
        y: 10,
      },
      {
        terrain: "Road",
        x: 9,
        y: 10,
      },
      {
        terrain: "Road",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 10,
      },
      {
        terrain: "Road",
        x: 20,
        y: 10,
      },
      {
        terrain: "Road",
        x: 21,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 10,
      },
      {
        terrain: "Road",
        x: 0,
        y: 11,
      },
      {
        terrain: "Road",
        x: 1,
        y: 11,
      },
      {
        terrain: "Road",
        x: 2,
        y: 11,
      },
      {
        terrain: "Road",
        x: 3,
        y: 11,
      },
      {
        terrain: "Road",
        x: 4,
        y: 11,
      },
      {
        terrain: "Road",
        x: 5,
        y: 11,
      },
      {
        terrain: "Road",
        x: 6,
        y: 11,
      },
      {
        terrain: "Road",
        x: 7,
        y: 11,
      },
      {
        terrain: "Road",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 11,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 19,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 11,
      },
      {
        terrain: "Road",
        x: 21,
        y: 11,
      },
      {
        terrain: "Road",
        x: 22,
        y: 11,
      },
      {
        terrain: "Road",
        x: 23,
        y: 11,
      },
      {
        terrain: "Road",
        x: 0,
        y: 12,
      },
      {
        terrain: "Road",
        x: 1,
        y: 12,
      },
      {
        terrain: "Road",
        x: 2,
        y: 12,
      },
      {
        terrain: "Road",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 12,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 12,
      },
      {
        terrain: "Village Entrance",
        x: 16,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 19,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 12,
      },
      {
        terrain: "Road",
        x: 23,
        y: 12,
      },
      {
        terrain: "Road",
        x: 0,
        y: 13,
      },
      {
        terrain: "Road",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 13,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 21,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 14,
      },
      {
        terrain: "Village Entrance",
        x: 9,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 14,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 15,
      },
      {
        terrain: "Lake",
        x: 15,
        y: 15,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 22,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Sand",
        x: 15,
        y: 16,
      },
      {
        terrain: "Lake",
        x: 16,
        y: 16,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 16,
      },
    ],
    pointsOfInterest: [
      {
        x: 6,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 14,
        y: 2,
        terrain: "Vendor",
      },
      {
        x: 16,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 9,
        y: 14,
        terrain: "Village Entrance",
      },
    ],
    interactableTiles: [
      {
        x: 6,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 14,
        y: 2,
        terrain: "Vendor",
      },
      {
        x: 16,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 9,
        y: 14,
        terrain: "Village Entrance",
      },
    ],
    areas: [
      {
        name: "Northern Village",
        description:
          "A small village area with a vendor, surrounded by village walls and a forest to the north.",
        coordinateArea: {
          from: {
            x: 3,
            y: 1,
          },
          to: {
            x: 7,
            y: 2,
          },
        },
      },
      {
        name: "Central River",
        description:
          "A river running through the center of the map, crossed by a bridge, dividing the map into two halves.",
        coordinateArea: {
          from: {
            x: 11,
            y: 8,
          },
          to: {
            x: 13,
            y: 9,
          },
        },
      },
      {
        name: "Southern Village",
        description:
          "A village area with a village entrance, surrounded by walls and plains, located in the southern part of the map.",
        coordinateArea: {
          from: {
            x: 8,
            y: 13,
          },
          to: {
            x: 10,
            y: 14,
          },
        },
      },
      {
        name: "Western Plains",
        description:
          "Open plains area with scattered forests, providing a path to the northern and southern villages.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 5,
            y: 16,
          },
        },
      },
      {
        name: "Eastern Forest",
        description:
          "Dense forest area on the eastern side, offering cover and strategic positioning.",
        coordinateArea: {
          from: {
            x: 19,
            y: 0,
          },
          to: {
            x: 23,
            y: 16,
          },
        },
      },
      {
        name: "Central Road",
        description:
          "A road running north to south, connecting the northern and southern parts of the map, crossing the bridge.",
        coordinateArea: {
          from: {
            x: 8,
            y: 7,
          },
          to: {
            x: 15,
            y: 12,
          },
        },
      },
    ],
  },
  {
    name: "Mountainy",
    description:
      "A mountainous map with a mix of peaks, plains, and strategic points like forts and a village.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="16" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01004C03" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01004C03.png" width="512" height="512"/>\n  <tile id="32">\n   <properties>\n    <property name="Height" value="1"/>\n    <property name="ID" value="0"/>\n    <property name="Width" value="1"/>\n    <property name="X" value="4"/>\n    <property name="Y" value="12"/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="16">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Mountainy_Changes"/>\n   <property name="MapID" value="Mountainy_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x4C"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxNkj0vRFEQhs+9t/C9rFpDsr6WglplC6xdwUZE1OwSKyGRUCloFCLRKUVEFFbiP4iG6+MnKJD4Wv/AMzuz2Vs8uWfeM++ZM3Nu0XfuwnOuBA8QwgzamHOuAPswTTwAReiE0cC5Fos/zSO8eJqfhBJ7f+YbNKTOt6f+tch5og3xbQ3U+0McI86Yrxi5Y5r1RESTusO+1jvCOwU5X+8n/mzE28M672tt0a6sZ/Hn8a1bv1V/M7yx3+WrfyziDa2Xkvn3zSv3yJlXuLTcgnlX/NqcKzMnnpXenfYvvbdEvFIjZ72swq955I2epT98dTBuc7tHO3XqlZwY3xvph7NTTlkK9K4H5i2YVt0vkz8HSbQBGIR6zol7ep5485H/Y5vcDhgxdmESTway0At90A+hq9WRGvPSB/o1vMCW/A/sHXvKONoEpOELvQmtGXas/xD9EZ7g3M59hzaZOdoKrFpvDWiNcILvTOaF/gtl8yYC1RPkzMIm3BG3yxsbpFRynqHbU1/c5lldtwd6B7n/R6TfBbtzynJvYc/Xt6vWlr1l1oeexjLbRZvTudXeYP/V4n//Xm0L\n  </data>\n </layer>\n <layer name="CloseVillage" width="15" height="16" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="4"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2D4AsWBdgCNAQAgoAAi\n  </data>\n </layer>\n</map>\n',
    height: 16,
    width: 15,
    terrainGrid: [
      {
        terrain: "Peak",
        x: 0,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Hill",
        x: 7,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 3,
      },
      {
        terrain: "Hill",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Hill",
        x: 9,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Fort",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Fort",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 8,
      },
      {
        terrain: "River",
        x: 14,
        y: 8,
      },
      {
        terrain: "Castle Wall",
        x: 0,
        y: 9,
      },
      {
        terrain: "Castle Wall",
        x: 1,
        y: 9,
      },
      {
        terrain: "Castle Wall",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "River",
        x: 10,
        y: 9,
      },
      {
        terrain: "River",
        x: 11,
        y: 9,
      },
      {
        terrain: "River",
        x: 12,
        y: 9,
      },
      {
        terrain: "River",
        x: 13,
        y: 9,
      },
      {
        terrain: "River",
        x: 14,
        y: 9,
      },
      {
        terrain: "Castle Wall",
        x: 0,
        y: 10,
      },
      {
        terrain: "Fort Gate",
        x: 1,
        y: 10,
      },
      {
        terrain: "Castle Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 10,
      },
      {
        terrain: "River",
        x: 9,
        y: 10,
      },
      {
        terrain: "River",
        x: 10,
        y: 10,
      },
      {
        terrain: "Castle Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Castle Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Castle Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "River",
        x: 14,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 4,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 11,
      },
      {
        terrain: "River",
        x: 9,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 11,
      },
      {
        terrain: "Castle Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Castle Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Castle Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 12,
      },
      {
        terrain: "Village Entrance",
        x: 4,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "River",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Castle Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Fort Gate",
        x: 12,
        y: 12,
      },
      {
        terrain: "Castle Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "House",
        x: 0,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "River",
        x: 9,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "House",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Fort",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "River",
        x: 7,
        y: 15,
      },
      {
        terrain: "River",
        x: 8,
        y: 15,
      },
      {
        terrain: "River",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
    ],
    pointsOfInterest: [
      {
        x: 5,
        y: 8,
        terrain: "Fort",
      },
      {
        x: 10,
        y: 8,
        terrain: "Fort",
      },
      {
        x: 1,
        y: 10,
        terrain: "Fort Gate",
      },
      {
        x: 4,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 12,
        terrain: "Fort Gate",
      },
      {
        x: 0,
        y: 13,
        terrain: "House",
      },
      {
        x: 1,
        y: 15,
        terrain: "House",
      },
      {
        x: 4,
        y: 15,
        terrain: "Fort",
      },
    ],
    interactableTiles: [
      {
        x: 4,
        y: 12,
        terrain: "Village Entrance",
      },
      {
        x: 0,
        y: 13,
        terrain: "House",
      },
      {
        x: 1,
        y: 15,
        terrain: "House",
      },
    ],
    areas: [
      {
        name: "Northern Peaks",
        description:
          "A rugged area dominated by peaks, providing high ground and defensive advantages.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 14,
            y: 7,
          },
        },
      },
      {
        name: "Central Plains",
        description:
          "Open plains with a few hills and forests, ideal for movement and skirmishes.",
        coordinateArea: {
          from: {
            x: 0,
            y: 8,
          },
          to: {
            x: 14,
            y: 11,
          },
        },
      },
      {
        name: "Eastern River",
        description:
          "A river running through the eastern side, creating a natural barrier and strategic chokepoint.",
        coordinateArea: {
          from: {
            x: 9,
            y: 8,
          },
          to: {
            x: 14,
            y: 15,
          },
        },
      },
      {
        name: "Southern Village",
        description:
          "A small village area with houses and a fort, offering resources and strategic positions.",
        coordinateArea: {
          from: {
            x: 0,
            y: 12,
          },
          to: {
            x: 8,
            y: 15,
          },
        },
      },
      {
        name: "Western Fort",
        description:
          "A fortified area with a fort gate, providing a strong defensive position.",
        coordinateArea: {
          from: {
            x: 0,
            y: 9,
          },
          to: {
            x: 2,
            y: 12,
          },
        },
      },
    ],
  },
  {
    name: "HaedricCastle",
    description:
      "Haedric Castle is a complex indoor map with multiple rooms, corridors, and strategic points like stairs and chests.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="26" height="20" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="3C00CE3E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/3C00CE3E.png" width="512" height="512"/>\n  <tile id="784">\n   <properties>\n    <property name="Height" value="2"/>\n    <property name="ID" value="0"/>\n    <property name="Width" value="3"/>\n    <property name="X" value="11"/>\n    <property name="Y" value="3"/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="26" height="20">\n  <properties>\n   <property name="Anims" value="_3CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="HaedricCastle_Changes"/>\n   <property name="MapID" value="HaedricCastle_Map"/>\n   <property name="ObjectType" value="0x3C"/>\n   <property name="PaletteID" value="0xCE"/>\n   <property name="TileConfig" value="0x3E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJytlU1KA0EQhXtastCFmJ8LiAiCK4/gEURPoPuAogfwCtELRMWNmoV3UBeChEHcCwYXAcEE91YxXczLS3fMgIuP6qnpntf9qmamvuBcg3jOnKsnrnXc8M7tCW8yvhN2ZNyT+JMV+Y6fXqPjvp+MrDOkNU2ZdyScB73DEM9C/oR0bP2KsAtR5zwIT8Kj0PaTOltyfTyDe9LB9exbSkd9uiXeI7leQmfRl3O+hJbkmoDtoVkBXIN+vIrW2E/XB/ewlPDgL1DnW55xlU33xxDOhz2B+rwH9hfzNwHzlvsi1hPmAfuw6Sexc13LnA3I8/uT0lEPRgHUSdXqMyswPdZpRdZoft8VWhq5rjFMx8B7y1CHF/J9EM40oHs63pb8WmCWDn4f9Dy2Z/S9JnxkRRzCPZ13qucMdKH+hvUN9kE9eMYervsyau2wL7u+ZByBfVZPLoTL4FOqBli7NvVb7staxvpGUU+s32pzvqfcb6NwhnyGjnlj/qT+H33YQ5/2k5NGHtFJwfOsnjxWVqH3qjLvfhTru6ocRHRi/wzjP3X4m4b8AjWCvdU=\n  </data>\n </layer>\n <layer name="Far Left Chest 1" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="14"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRMFSA00A7YBSMGAAAp/gAQw==\n  </data>\n </layer>\n <layer name="West Big Door" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQA8gyMzAIMQ80K4YBaOAOAAAdfYAKg==\n  </data>\n </layer>\n <layer name="Far Left Chest Door" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILhCT4yMTCsZaS9PZ+A9nxmor09o2AU0BMAALv7A4s=\n  </data>\n </layer>\n <layer name="SW Chest" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILBC5wG2gGjYBSMUAAA7hgAQw==\n  </data>\n </layer>\n <layer name="NE Chest" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="18"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjBTgNNAOGAWjYBQMGQAAHI8AQw==\n  </data>\n </layer>\n <layer name="NW Chest" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUDHfgNNAOGAWjYBQMOQAAHp8AQw==\n  </data>\n </layer>\n <layer name="Throne Door" width="26" height="20" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFAwHWMTIwCDIzMKxlpK09wkA7hJgh9CgYBaNgFIyCUUAsAAAwWwGz\n  </data>\n </layer>\n</map>\n',
    height: 20,
    width: 26,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 1,
      },
      {
        terrain: "Throne",
        x: 17,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 8,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 3,
      },
      {
        terrain: "Door",
        x: 17,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Pillar",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 8,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 9,
      },
      {
        terrain: "Chest",
        x: 16,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 9,
      },
      {
        terrain: "Chest",
        x: 18,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Pillar",
        x: 7,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 11,
      },
      {
        terrain: "Chest",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 16,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 17,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 18,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 11,
      },
      {
        terrain: "Roof",
        x: 23,
        y: 11,
      },
      {
        terrain: "Roof",
        x: 24,
        y: 11,
      },
      {
        terrain: "Roof",
        x: 25,
        y: 11,
      },
      {
        terrain: "Door",
        x: 0,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 12,
      },
      {
        terrain: "Roof",
        x: 23,
        y: 12,
      },
      {
        terrain: "Roof",
        x: 24,
        y: 12,
      },
      {
        terrain: "Roof",
        x: 25,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 13,
      },
      {
        terrain: "Door",
        x: 10,
        y: 13,
      },
      {
        terrain: "Door",
        x: 11,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Chest",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 14,
      },
      {
        terrain: "Brace",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 15,
      },
      {
        terrain: "Pillar",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 15,
      },
      {
        terrain: "Pillar",
        x: 22,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 22,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 23,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 24,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 25,
        y: 17,
      },
      {
        terrain: "Roof",
        x: 0,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 1,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 2,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 3,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 4,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 5,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 7,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 8,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 9,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 10,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 11,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 12,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 13,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 14,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 18,
      },
      {
        terrain: "Roof",
        x: 0,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 1,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 2,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 3,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 4,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 5,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 6,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 7,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 8,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 9,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 10,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 11,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 12,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 13,
        y: 19,
      },
      {
        terrain: "Roof",
        x: 14,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 22,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 23,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 24,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 25,
        y: 19,
      },
    ],
    pointsOfInterest: [
      {
        x: 17,
        y: 1,
        terrain: "Throne",
      },
      {
        x: 6,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 8,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 6,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 10,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 8,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 16,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 2,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 11,
        terrain: "Chest",
      },
      {
        x: 17,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 14,
        terrain: "Chest",
      },
      {
        x: 10,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 14,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 17,
        y: 3,
        terrain: "Door",
      },
      {
        x: 16,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 18,
        y: 9,
        terrain: "Chest",
      },
      {
        x: 11,
        y: 11,
        terrain: "Chest",
      },
      {
        x: 0,
        y: 12,
        terrain: "Door",
      },
      {
        x: 10,
        y: 13,
        terrain: "Door",
      },
      {
        x: 11,
        y: 13,
        terrain: "Door",
      },
      {
        x: 1,
        y: 14,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with multiple staircases leading to different parts of the castle.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 8,
            y: 3,
          },
        },
      },
      {
        name: "Throne Room",
        description:
          "A central room with a throne, heavily guarded and a key objective area.",
        coordinateArea: {
          from: {
            x: 16,
            y: 0,
          },
          to: {
            x: 18,
            y: 3,
          },
        },
      },
      {
        name: "Central Corridor",
        description:
          "A long corridor connecting various rooms, featuring multiple staircases and doors.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 25,
            y: 11,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A room containing chests, accessible through a series of doors and stairs.",
        coordinateArea: {
          from: {
            x: 15,
            y: 8,
          },
          to: {
            x: 19,
            y: 11,
          },
        },
      },
      {
        name: "Western Wing",
        description:
          "A section with multiple rooms and a chest, accessible through a door.",
        coordinateArea: {
          from: {
            x: 0,
            y: 12,
          },
          to: {
            x: 11,
            y: 14,
          },
        },
      },
      {
        name: "Southern Hallway",
        description:
          "A wide hallway with pillars, leading to the lower parts of the castle.",
        coordinateArea: {
          from: {
            x: 0,
            y: 15,
          },
          to: {
            x: 25,
            y: 19,
          },
        },
      },
    ],
  },
  {
    name: "Lava",
    description:
      "A complex indoor map with multiple rooms and corridors, featuring lava and a throne room.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="22" height="25" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="50005152" tilewidth="16" tileheight="16">\n  <image source="Tilesets/50005152.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="22" height="25">\n  <properties>\n   <property name="Anims" value="_50Anims"/>\n   <property name="Anims2" value="LavaAnims2"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Lava_Changes"/>\n   <property name="MapID" value="Lava_Map"/>\n   <property name="ObjectType" value="0x50"/>\n   <property name="PaletteID" value="0x51"/>\n   <property name="TileConfig" value="0x52"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyNlT1v1EAQhte7RAKM6I5wZSIO6SCko4DuZFwcKHQIUSapgkQJiDLIElSUFNRbgAQ/gpqPivwDChRQuuSgY0aeV/t67UMUj9Y73n09Ox/rveDcnvFKiELjnFt45w6En4Vz6zKPQuXad5dlzYbwlvYu451wTdgh3W+mG00vuvS8/R/a0JwLk9DuHfIXmsq+rd9cormRaeKs0N0UPon2x6Idla9Fu37+D59vC3dszRnT/G2ayo8iPSurdp5t23NOeDmgi++uhb6mcloYhb7ufuYvYvnC0HfPTbOifKnGOLTx5Tyu2tpL5NORbzVjSHUD3ZjFFX6prq67GJK9shxCuzFw5ujSN+sw7BfqDDUC+xfKIXIdLY7Hwpasu0t5W1AMYqarPmusT7IcnJjWMdkeZfWwIE31ofQp9rDthq6/keIEVO+h9Zn6diGkmOp+gHPeonzthG4f4jwjWlOa3veiHXm/UoW+DXXE58GZkNOzwopvdVd8d39OGbp1BDh/lWlrnUxE75Rvx6nM3wsfhCvCVeut85RnnKMhvcZ15+pjbTHXET4f+tTr2lu/fMozayMHVaY5oVyOzHe1NwNxmJr/ZWafUR3pOCFf0We1fUuf16mnAN9XZaa9az1Zk69jqp3ad3PMI3Iyt2/k/ue9i71VphNdPz+sz/4f+u6/AbpDNEvsylT2fi4S1326GxGHNep1sMz2x6defyLcEJ4K98zOvT2j+xc9OcvmbMNdc1O4Lzwz/aHeVsah/w62iuwHma7y2Hf7juPI9Z3bmgHt18IDi8cb4S+MFAZU\n  </data>\n </layer>\n <layer name="North Door" width="22" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFxIJzjAwM5swMDGcZB9olo2AUjIJRMApGwfAEAKmyAdg=\n  </data>\n </layer>\n <layer name="West Door" width="22" height="25" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFxABPJtqY+41G5r5mpI25o2AUjIJRMApGAS0BAE+EAjA=\n  </data>\n </layer>\n <layer name="Bottom Chest" width="22" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="2"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBh+gGmgHTAKRsEoGAWjYBSMArIAABggAAM=\n  </data>\n </layer>\n <layer name="Top Chest" width="22" height="25" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCAMmIhQMwpGwSgYBaNgFIyCUUApAAAZgAAD\n  </data>\n </layer>\n</map>\n',
    height: 25,
    width: 22,
    terrainGrid: [
      {
        terrain: "--",
        x: 0,
        y: 0,
      },
      {
        terrain: "--",
        x: 1,
        y: 0,
      },
      {
        terrain: "--",
        x: 2,
        y: 0,
      },
      {
        terrain: "--",
        x: 3,
        y: 0,
      },
      {
        terrain: "--",
        x: 4,
        y: 0,
      },
      {
        terrain: "--",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Chest",
        x: 9,
        y: 0,
      },
      {
        terrain: "--",
        x: 10,
        y: 0,
      },
      {
        terrain: "--",
        x: 11,
        y: 0,
      },
      {
        terrain: "--",
        x: 12,
        y: 0,
      },
      {
        terrain: "--",
        x: 13,
        y: 0,
      },
      {
        terrain: "--",
        x: 14,
        y: 0,
      },
      {
        terrain: "--",
        x: 15,
        y: 0,
      },
      {
        terrain: "--",
        x: 16,
        y: 0,
      },
      {
        terrain: "--",
        x: 17,
        y: 0,
      },
      {
        terrain: "--",
        x: 18,
        y: 0,
      },
      {
        terrain: "--",
        x: 19,
        y: 0,
      },
      {
        terrain: "--",
        x: 20,
        y: 0,
      },
      {
        terrain: "--",
        x: 21,
        y: 0,
      },
      {
        terrain: "--",
        x: 0,
        y: 1,
      },
      {
        terrain: "--",
        x: 1,
        y: 1,
      },
      {
        terrain: "--",
        x: 2,
        y: 1,
      },
      {
        terrain: "--",
        x: 3,
        y: 1,
      },
      {
        terrain: "--",
        x: 4,
        y: 1,
      },
      {
        terrain: "--",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "--",
        x: 7,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 1,
      },
      {
        terrain: "--",
        x: 9,
        y: 1,
      },
      {
        terrain: "--",
        x: 10,
        y: 1,
      },
      {
        terrain: "--",
        x: 11,
        y: 1,
      },
      {
        terrain: "--",
        x: 12,
        y: 1,
      },
      {
        terrain: "--",
        x: 13,
        y: 1,
      },
      {
        terrain: "--",
        x: 14,
        y: 1,
      },
      {
        terrain: "--",
        x: 15,
        y: 1,
      },
      {
        terrain: "--",
        x: 16,
        y: 1,
      },
      {
        terrain: "--",
        x: 17,
        y: 1,
      },
      {
        terrain: "--",
        x: 18,
        y: 1,
      },
      {
        terrain: "--",
        x: 19,
        y: 1,
      },
      {
        terrain: "--",
        x: 20,
        y: 1,
      },
      {
        terrain: "--",
        x: 21,
        y: 1,
      },
      {
        terrain: "--",
        x: 0,
        y: 2,
      },
      {
        terrain: "--",
        x: 1,
        y: 2,
      },
      {
        terrain: "--",
        x: 2,
        y: 2,
      },
      {
        terrain: "--",
        x: 3,
        y: 2,
      },
      {
        terrain: "--",
        x: 4,
        y: 2,
      },
      {
        terrain: "--",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 2,
      },
      {
        terrain: "Chest",
        x: 9,
        y: 2,
      },
      {
        terrain: "--",
        x: 10,
        y: 2,
      },
      {
        terrain: "--",
        x: 11,
        y: 2,
      },
      {
        terrain: "--",
        x: 12,
        y: 2,
      },
      {
        terrain: "--",
        x: 13,
        y: 2,
      },
      {
        terrain: "--",
        x: 14,
        y: 2,
      },
      {
        terrain: "--",
        x: 15,
        y: 2,
      },
      {
        terrain: "--",
        x: 16,
        y: 2,
      },
      {
        terrain: "--",
        x: 17,
        y: 2,
      },
      {
        terrain: "--",
        x: 18,
        y: 2,
      },
      {
        terrain: "--",
        x: 19,
        y: 2,
      },
      {
        terrain: "--",
        x: 20,
        y: 2,
      },
      {
        terrain: "--",
        x: 21,
        y: 2,
      },
      {
        terrain: "--",
        x: 0,
        y: 3,
      },
      {
        terrain: "--",
        x: 1,
        y: 3,
      },
      {
        terrain: "--",
        x: 2,
        y: 3,
      },
      {
        terrain: "--",
        x: 3,
        y: 3,
      },
      {
        terrain: "--",
        x: 4,
        y: 3,
      },
      {
        terrain: "--",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 3,
      },
      {
        terrain: "Door",
        x: 10,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "--",
        x: 14,
        y: 3,
      },
      {
        terrain: "--",
        x: 15,
        y: 3,
      },
      {
        terrain: "--",
        x: 16,
        y: 3,
      },
      {
        terrain: "--",
        x: 17,
        y: 3,
      },
      {
        terrain: "--",
        x: 18,
        y: 3,
      },
      {
        terrain: "--",
        x: 19,
        y: 3,
      },
      {
        terrain: "--",
        x: 20,
        y: 3,
      },
      {
        terrain: "--",
        x: 21,
        y: 3,
      },
      {
        terrain: "--",
        x: 0,
        y: 4,
      },
      {
        terrain: "--",
        x: 1,
        y: 4,
      },
      {
        terrain: "--",
        x: 2,
        y: 4,
      },
      {
        terrain: "--",
        x: 3,
        y: 4,
      },
      {
        terrain: "--",
        x: 4,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 4,
      },
      {
        terrain: "Door",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 4,
      },
      {
        terrain: "--",
        x: 13,
        y: 4,
      },
      {
        terrain: "--",
        x: 14,
        y: 4,
      },
      {
        terrain: "--",
        x: 15,
        y: 4,
      },
      {
        terrain: "--",
        x: 16,
        y: 4,
      },
      {
        terrain: "--",
        x: 17,
        y: 4,
      },
      {
        terrain: "--",
        x: 18,
        y: 4,
      },
      {
        terrain: "--",
        x: 19,
        y: 4,
      },
      {
        terrain: "--",
        x: 20,
        y: 4,
      },
      {
        terrain: "--",
        x: 21,
        y: 4,
      },
      {
        terrain: "--",
        x: 0,
        y: 5,
      },
      {
        terrain: "--",
        x: 1,
        y: 5,
      },
      {
        terrain: "--",
        x: 2,
        y: 5,
      },
      {
        terrain: "--",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 5,
      },
      {
        terrain: "--",
        x: 13,
        y: 5,
      },
      {
        terrain: "--",
        x: 14,
        y: 5,
      },
      {
        terrain: "--",
        x: 15,
        y: 5,
      },
      {
        terrain: "--",
        x: 16,
        y: 5,
      },
      {
        terrain: "--",
        x: 17,
        y: 5,
      },
      {
        terrain: "--",
        x: 18,
        y: 5,
      },
      {
        terrain: "--",
        x: 19,
        y: 5,
      },
      {
        terrain: "--",
        x: 20,
        y: 5,
      },
      {
        terrain: "--",
        x: 21,
        y: 5,
      },
      {
        terrain: "--",
        x: 0,
        y: 6,
      },
      {
        terrain: "--",
        x: 1,
        y: 6,
      },
      {
        terrain: "--",
        x: 2,
        y: 6,
      },
      {
        terrain: "--",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "--",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 6,
      },
      {
        terrain: "--",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "--",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "--",
        x: 13,
        y: 6,
      },
      {
        terrain: "--",
        x: 14,
        y: 6,
      },
      {
        terrain: "--",
        x: 15,
        y: 6,
      },
      {
        terrain: "--",
        x: 16,
        y: 6,
      },
      {
        terrain: "--",
        x: 17,
        y: 6,
      },
      {
        terrain: "--",
        x: 18,
        y: 6,
      },
      {
        terrain: "--",
        x: 19,
        y: 6,
      },
      {
        terrain: "--",
        x: 20,
        y: 6,
      },
      {
        terrain: "--",
        x: 21,
        y: 6,
      },
      {
        terrain: "--",
        x: 0,
        y: 7,
      },
      {
        terrain: "--",
        x: 1,
        y: 7,
      },
      {
        terrain: "--",
        x: 2,
        y: 7,
      },
      {
        terrain: "--",
        x: 3,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "--",
        x: 7,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 7,
      },
      {
        terrain: "--",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "--",
        x: 13,
        y: 7,
      },
      {
        terrain: "--",
        x: 14,
        y: 7,
      },
      {
        terrain: "--",
        x: 15,
        y: 7,
      },
      {
        terrain: "--",
        x: 16,
        y: 7,
      },
      {
        terrain: "--",
        x: 17,
        y: 7,
      },
      {
        terrain: "--",
        x: 18,
        y: 7,
      },
      {
        terrain: "--",
        x: 19,
        y: 7,
      },
      {
        terrain: "--",
        x: 20,
        y: 7,
      },
      {
        terrain: "--",
        x: 21,
        y: 7,
      },
      {
        terrain: "--",
        x: 0,
        y: 8,
      },
      {
        terrain: "--",
        x: 1,
        y: 8,
      },
      {
        terrain: "--",
        x: 2,
        y: 8,
      },
      {
        terrain: "--",
        x: 3,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 8,
      },
      {
        terrain: "--",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "--",
        x: 7,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 8,
      },
      {
        terrain: "--",
        x: 9,
        y: 8,
      },
      {
        terrain: "--",
        x: 10,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "--",
        x: 13,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 8,
      },
      {
        terrain: "--",
        x: 17,
        y: 8,
      },
      {
        terrain: "--",
        x: 18,
        y: 8,
      },
      {
        terrain: "--",
        x: 19,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 8,
      },
      {
        terrain: "--",
        x: 0,
        y: 9,
      },
      {
        terrain: "--",
        x: 1,
        y: 9,
      },
      {
        terrain: "--",
        x: 2,
        y: 9,
      },
      {
        terrain: "--",
        x: 3,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "--",
        x: 7,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 9,
      },
      {
        terrain: "--",
        x: 9,
        y: 9,
      },
      {
        terrain: "--",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 9,
      },
      {
        terrain: "--",
        x: 0,
        y: 10,
      },
      {
        terrain: "--",
        x: 1,
        y: 10,
      },
      {
        terrain: "--",
        x: 2,
        y: 10,
      },
      {
        terrain: "--",
        x: 3,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 10,
      },
      {
        terrain: "--",
        x: 6,
        y: 10,
      },
      {
        terrain: "--",
        x: 7,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "--",
        x: 9,
        y: 10,
      },
      {
        terrain: "--",
        x: 10,
        y: 10,
      },
      {
        terrain: "--",
        x: 11,
        y: 10,
      },
      {
        terrain: "--",
        x: 12,
        y: 10,
      },
      {
        terrain: "--",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 10,
      },
      {
        terrain: "--",
        x: 17,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 10,
      },
      {
        terrain: "--",
        x: 0,
        y: 11,
      },
      {
        terrain: "--",
        x: 1,
        y: 11,
      },
      {
        terrain: "--",
        x: 2,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 11,
      },
      {
        terrain: "--",
        x: 6,
        y: 11,
      },
      {
        terrain: "--",
        x: 7,
        y: 11,
      },
      {
        terrain: "--",
        x: 8,
        y: 11,
      },
      {
        terrain: "--",
        x: 9,
        y: 11,
      },
      {
        terrain: "--",
        x: 10,
        y: 11,
      },
      {
        terrain: "--",
        x: 11,
        y: 11,
      },
      {
        terrain: "--",
        x: 12,
        y: 11,
      },
      {
        terrain: "--",
        x: 13,
        y: 11,
      },
      {
        terrain: "--",
        x: 14,
        y: 11,
      },
      {
        terrain: "--",
        x: 15,
        y: 11,
      },
      {
        terrain: "--",
        x: 16,
        y: 11,
      },
      {
        terrain: "--",
        x: 17,
        y: 11,
      },
      {
        terrain: "--",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 11,
      },
      {
        terrain: "--",
        x: 0,
        y: 12,
      },
      {
        terrain: "--",
        x: 1,
        y: 12,
      },
      {
        terrain: "--",
        x: 2,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 12,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 12,
      },
      {
        terrain: "--",
        x: 6,
        y: 12,
      },
      {
        terrain: "--",
        x: 7,
        y: 12,
      },
      {
        terrain: "--",
        x: 8,
        y: 12,
      },
      {
        terrain: "--",
        x: 9,
        y: 12,
      },
      {
        terrain: "--",
        x: 10,
        y: 12,
      },
      {
        terrain: "--",
        x: 11,
        y: 12,
      },
      {
        terrain: "--",
        x: 12,
        y: 12,
      },
      {
        terrain: "--",
        x: 13,
        y: 12,
      },
      {
        terrain: "--",
        x: 14,
        y: 12,
      },
      {
        terrain: "--",
        x: 15,
        y: 12,
      },
      {
        terrain: "--",
        x: 16,
        y: 12,
      },
      {
        terrain: "--",
        x: 17,
        y: 12,
      },
      {
        terrain: "--",
        x: 18,
        y: 12,
      },
      {
        terrain: "--",
        x: 19,
        y: 12,
      },
      {
        terrain: "--",
        x: 20,
        y: 12,
      },
      {
        terrain: "--",
        x: 21,
        y: 12,
      },
      {
        terrain: "--",
        x: 0,
        y: 13,
      },
      {
        terrain: "--",
        x: 1,
        y: 13,
      },
      {
        terrain: "--",
        x: 2,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 13,
      },
      {
        terrain: "--",
        x: 6,
        y: 13,
      },
      {
        terrain: "--",
        x: 7,
        y: 13,
      },
      {
        terrain: "--",
        x: 8,
        y: 13,
      },
      {
        terrain: "--",
        x: 9,
        y: 13,
      },
      {
        terrain: "--",
        x: 10,
        y: 13,
      },
      {
        terrain: "--",
        x: 11,
        y: 13,
      },
      {
        terrain: "--",
        x: 12,
        y: 13,
      },
      {
        terrain: "--",
        x: 13,
        y: 13,
      },
      {
        terrain: "--",
        x: 14,
        y: 13,
      },
      {
        terrain: "--",
        x: 15,
        y: 13,
      },
      {
        terrain: "--",
        x: 16,
        y: 13,
      },
      {
        terrain: "--",
        x: 17,
        y: 13,
      },
      {
        terrain: "--",
        x: 18,
        y: 13,
      },
      {
        terrain: "--",
        x: 19,
        y: 13,
      },
      {
        terrain: "--",
        x: 20,
        y: 13,
      },
      {
        terrain: "--",
        x: 21,
        y: 13,
      },
      {
        terrain: "--",
        x: 0,
        y: 14,
      },
      {
        terrain: "--",
        x: 1,
        y: 14,
      },
      {
        terrain: "--",
        x: 2,
        y: 14,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 14,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 14,
      },
      {
        terrain: "--",
        x: 6,
        y: 14,
      },
      {
        terrain: "--",
        x: 7,
        y: 14,
      },
      {
        terrain: "--",
        x: 8,
        y: 14,
      },
      {
        terrain: "--",
        x: 9,
        y: 14,
      },
      {
        terrain: "--",
        x: 10,
        y: 14,
      },
      {
        terrain: "--",
        x: 11,
        y: 14,
      },
      {
        terrain: "--",
        x: 12,
        y: 14,
      },
      {
        terrain: "--",
        x: 13,
        y: 14,
      },
      {
        terrain: "--",
        x: 14,
        y: 14,
      },
      {
        terrain: "--",
        x: 15,
        y: 14,
      },
      {
        terrain: "--",
        x: 16,
        y: 14,
      },
      {
        terrain: "--",
        x: 17,
        y: 14,
      },
      {
        terrain: "--",
        x: 18,
        y: 14,
      },
      {
        terrain: "--",
        x: 19,
        y: 14,
      },
      {
        terrain: "--",
        x: 20,
        y: 14,
      },
      {
        terrain: "--",
        x: 21,
        y: 14,
      },
      {
        terrain: "--",
        x: 0,
        y: 15,
      },
      {
        terrain: "--",
        x: 1,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 15,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 15,
      },
      {
        terrain: "--",
        x: 7,
        y: 15,
      },
      {
        terrain: "--",
        x: 8,
        y: 15,
      },
      {
        terrain: "--",
        x: 9,
        y: 15,
      },
      {
        terrain: "--",
        x: 10,
        y: 15,
      },
      {
        terrain: "--",
        x: 11,
        y: 15,
      },
      {
        terrain: "--",
        x: 12,
        y: 15,
      },
      {
        terrain: "--",
        x: 13,
        y: 15,
      },
      {
        terrain: "--",
        x: 14,
        y: 15,
      },
      {
        terrain: "--",
        x: 15,
        y: 15,
      },
      {
        terrain: "--",
        x: 16,
        y: 15,
      },
      {
        terrain: "--",
        x: 17,
        y: 15,
      },
      {
        terrain: "--",
        x: 18,
        y: 15,
      },
      {
        terrain: "--",
        x: 19,
        y: 15,
      },
      {
        terrain: "--",
        x: 20,
        y: 15,
      },
      {
        terrain: "--",
        x: 21,
        y: 15,
      },
      {
        terrain: "--",
        x: 0,
        y: 16,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 16,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 16,
      },
      {
        terrain: "Brace",
        x: 7,
        y: 16,
      },
      {
        terrain: "--",
        x: 8,
        y: 16,
      },
      {
        terrain: "--",
        x: 9,
        y: 16,
      },
      {
        terrain: "--",
        x: 10,
        y: 16,
      },
      {
        terrain: "--",
        x: 11,
        y: 16,
      },
      {
        terrain: "--",
        x: 12,
        y: 16,
      },
      {
        terrain: "--",
        x: 13,
        y: 16,
      },
      {
        terrain: "--",
        x: 14,
        y: 16,
      },
      {
        terrain: "--",
        x: 15,
        y: 16,
      },
      {
        terrain: "--",
        x: 16,
        y: 16,
      },
      {
        terrain: "--",
        x: 17,
        y: 16,
      },
      {
        terrain: "--",
        x: 18,
        y: 16,
      },
      {
        terrain: "--",
        x: 19,
        y: 16,
      },
      {
        terrain: "--",
        x: 20,
        y: 16,
      },
      {
        terrain: "--",
        x: 21,
        y: 16,
      },
      {
        terrain: "--",
        x: 0,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "--",
        x: 5,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 17,
      },
      {
        terrain: "Brace",
        x: 7,
        y: 17,
      },
      {
        terrain: "--",
        x: 8,
        y: 17,
      },
      {
        terrain: "--",
        x: 9,
        y: 17,
      },
      {
        terrain: "--",
        x: 10,
        y: 17,
      },
      {
        terrain: "--",
        x: 11,
        y: 17,
      },
      {
        terrain: "--",
        x: 12,
        y: 17,
      },
      {
        terrain: "--",
        x: 13,
        y: 17,
      },
      {
        terrain: "--",
        x: 14,
        y: 17,
      },
      {
        terrain: "--",
        x: 15,
        y: 17,
      },
      {
        terrain: "--",
        x: 16,
        y: 17,
      },
      {
        terrain: "--",
        x: 17,
        y: 17,
      },
      {
        terrain: "--",
        x: 18,
        y: 17,
      },
      {
        terrain: "--",
        x: 19,
        y: 17,
      },
      {
        terrain: "--",
        x: 20,
        y: 17,
      },
      {
        terrain: "--",
        x: 21,
        y: 17,
      },
      {
        terrain: "--",
        x: 0,
        y: 18,
      },
      {
        terrain: "Brace",
        x: 1,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 18,
      },
      {
        terrain: "--",
        x: 5,
        y: 18,
      },
      {
        terrain: "--",
        x: 6,
        y: 18,
      },
      {
        terrain: "Brace",
        x: 7,
        y: 18,
      },
      {
        terrain: "--",
        x: 8,
        y: 18,
      },
      {
        terrain: "--",
        x: 9,
        y: 18,
      },
      {
        terrain: "--",
        x: 10,
        y: 18,
      },
      {
        terrain: "--",
        x: 11,
        y: 18,
      },
      {
        terrain: "--",
        x: 12,
        y: 18,
      },
      {
        terrain: "--",
        x: 13,
        y: 18,
      },
      {
        terrain: "--",
        x: 14,
        y: 18,
      },
      {
        terrain: "--",
        x: 15,
        y: 18,
      },
      {
        terrain: "--",
        x: 16,
        y: 18,
      },
      {
        terrain: "--",
        x: 17,
        y: 18,
      },
      {
        terrain: "--",
        x: 18,
        y: 18,
      },
      {
        terrain: "--",
        x: 19,
        y: 18,
      },
      {
        terrain: "--",
        x: 20,
        y: 18,
      },
      {
        terrain: "--",
        x: 21,
        y: 18,
      },
      {
        terrain: "--",
        x: 0,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 19,
      },
      {
        terrain: "--",
        x: 2,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 19,
      },
      {
        terrain: "--",
        x: 4,
        y: 19,
      },
      {
        terrain: "--",
        x: 5,
        y: 19,
      },
      {
        terrain: "--",
        x: 6,
        y: 19,
      },
      {
        terrain: "--",
        x: 7,
        y: 19,
      },
      {
        terrain: "--",
        x: 8,
        y: 19,
      },
      {
        terrain: "--",
        x: 9,
        y: 19,
      },
      {
        terrain: "--",
        x: 10,
        y: 19,
      },
      {
        terrain: "--",
        x: 11,
        y: 19,
      },
      {
        terrain: "--",
        x: 12,
        y: 19,
      },
      {
        terrain: "--",
        x: 13,
        y: 19,
      },
      {
        terrain: "--",
        x: 14,
        y: 19,
      },
      {
        terrain: "--",
        x: 15,
        y: 19,
      },
      {
        terrain: "--",
        x: 16,
        y: 19,
      },
      {
        terrain: "--",
        x: 17,
        y: 19,
      },
      {
        terrain: "--",
        x: 18,
        y: 19,
      },
      {
        terrain: "--",
        x: 19,
        y: 19,
      },
      {
        terrain: "--",
        x: 20,
        y: 19,
      },
      {
        terrain: "--",
        x: 21,
        y: 19,
      },
      {
        terrain: "--",
        x: 0,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 20,
      },
      {
        terrain: "--",
        x: 4,
        y: 20,
      },
      {
        terrain: "--",
        x: 5,
        y: 20,
      },
      {
        terrain: "--",
        x: 6,
        y: 20,
      },
      {
        terrain: "--",
        x: 7,
        y: 20,
      },
      {
        terrain: "--",
        x: 8,
        y: 20,
      },
      {
        terrain: "--",
        x: 9,
        y: 20,
      },
      {
        terrain: "--",
        x: 10,
        y: 20,
      },
      {
        terrain: "--",
        x: 11,
        y: 20,
      },
      {
        terrain: "--",
        x: 12,
        y: 20,
      },
      {
        terrain: "--",
        x: 13,
        y: 20,
      },
      {
        terrain: "--",
        x: 14,
        y: 20,
      },
      {
        terrain: "--",
        x: 15,
        y: 20,
      },
      {
        terrain: "--",
        x: 16,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 20,
      },
      {
        terrain: "--",
        x: 0,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 21,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 21,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 21,
      },
      {
        terrain: "Pillar",
        x: 14,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 21,
      },
      {
        terrain: "--",
        x: 16,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 21,
      },
      {
        terrain: "Throne",
        x: 21,
        y: 21,
      },
      {
        terrain: "--",
        x: 0,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 22,
      },
      {
        terrain: "--",
        x: 5,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 22,
      },
      {
        terrain: "--",
        x: 0,
        y: 23,
      },
      {
        terrain: "--",
        x: 1,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 23,
      },
      {
        terrain: "--",
        x: 7,
        y: 23,
      },
      {
        terrain: "--",
        x: 8,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 23,
      },
      {
        terrain: "--",
        x: 12,
        y: 23,
      },
      {
        terrain: "--",
        x: 13,
        y: 23,
      },
      {
        terrain: "--",
        x: 14,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 23,
      },
      {
        terrain: "--",
        x: 0,
        y: 24,
      },
      {
        terrain: "--",
        x: 1,
        y: 24,
      },
      {
        terrain: "--",
        x: 2,
        y: 24,
      },
      {
        terrain: "--",
        x: 3,
        y: 24,
      },
      {
        terrain: "--",
        x: 4,
        y: 24,
      },
      {
        terrain: "--",
        x: 5,
        y: 24,
      },
      {
        terrain: "--",
        x: 6,
        y: 24,
      },
      {
        terrain: "--",
        x: 7,
        y: 24,
      },
      {
        terrain: "--",
        x: 8,
        y: 24,
      },
      {
        terrain: "--",
        x: 9,
        y: 24,
      },
      {
        terrain: "--",
        x: 10,
        y: 24,
      },
      {
        terrain: "--",
        x: 11,
        y: 24,
      },
      {
        terrain: "--",
        x: 12,
        y: 24,
      },
      {
        terrain: "--",
        x: 13,
        y: 24,
      },
      {
        terrain: "--",
        x: 14,
        y: 24,
      },
      {
        terrain: "--",
        x: 15,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 24,
      },
    ],
    pointsOfInterest: [
      {
        x: 9,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 9,
        y: 2,
        terrain: "Chest",
      },
      {
        x: 4,
        y: 12,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 21,
        y: 21,
        terrain: "Throne",
      },
    ],
    interactableTiles: [
      {
        x: 9,
        y: 0,
        terrain: "Chest",
      },
      {
        x: 9,
        y: 2,
        terrain: "Chest",
      },
      {
        x: 10,
        y: 3,
        terrain: "Door",
      },
      {
        x: 8,
        y: 4,
        terrain: "Door",
      },
    ],
    areas: [
      {
        name: "Treasure Room",
        description:
          "A small room containing two chests, accessible through a narrow corridor.",
        coordinateArea: {
          from: {
            x: 6,
            y: 0,
          },
          to: {
            x: 9,
            y: 2,
          },
        },
      },
      {
        name: "Main Corridor",
        description:
          "A long corridor with a door leading to the treasure room and stairs leading to the lower levels.",
        coordinateArea: {
          from: {
            x: 4,
            y: 3,
          },
          to: {
            x: 12,
            y: 9,
          },
        },
      },
      {
        name: "Stairway Hall",
        description:
          "A hall with multiple staircases, likely a point for enemy reinforcements.",
        coordinateArea: {
          from: {
            x: 3,
            y: 12,
          },
          to: {
            x: 5,
            y: 14,
          },
        },
      },
      {
        name: "Lower Corridor",
        description:
          "A corridor leading to the throne room, with pillars providing cover.",
        coordinateArea: {
          from: {
            x: 1,
            y: 20,
          },
          to: {
            x: 15,
            y: 23,
          },
        },
      },
      {
        name: "Throne Room",
        description:
          "The final room containing the throne, heavily guarded and fortified.",
        coordinateArea: {
          from: {
            x: 17,
            y: 20,
          },
          to: {
            x: 21,
            y: 24,
          },
        },
      },
    ],
  },
  {
    name: "Plains",
    description:
      "A diverse map featuring a castle, rivers, forests, and various structures like forts and houses.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="15" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="2E003430" tilewidth="16" tileheight="16">\n  <image source="Tilesets/2E003430.png" width="512" height="512"/>\n  <tile id="774">\n   <properties>\n    <property name="Height" value="1"/>\n    <property name="ID" value="0"/>\n    <property name="Width" value="1"/>\n    <property name="X" value="12"/>\n    <property name="Y" value="9"/>\n   </properties>\n  </tile>\n  <tile id="870">\n   <properties>\n    <property name="Height" value="1"/>\n    <property name="ID" value="1"/>\n    <property name="Width" value="1"/>\n    <property name="X" value="12"/>\n    <property name="Y" value="7"/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="15">\n  <properties>\n   <property name="Anims" value="_2EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Plains_Changes"/>\n   <property name="MapID" value="Plains_Map"/>\n   <property name="ObjectType" value="0x2E"/>\n   <property name="PaletteID" value="0x34"/>\n   <property name="PlainsChanges" value=""/>\n   <property name="TileConfig" value="0x30"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxNk00rxFEUh+//3mbYkBRRVooNUZSSJQsZZbLwUrITJclCKC8hyctM8wGUZCjvS9laCGNMKd/AwkbKJ/Cc7pnuLJ7uufd/fvec87szCWNMGoacMUk4Ix6zxkzCNvE+ZwdwCClIO5+7AHd8z0AfZKFX4xXr10tyruAabuDW+TypsQczsEzuktVzvj9Yf88rcQ7eIA/v2ltWa8q6Ru4GTOgdUvfMhLxUZMyp8XNIP5XO19zWGUV7DKswCgXtI4auuUQ7jy4D7c7nSH+L6lHWhJkkvwldPPJnRV/udO6ixxKPWz9vnvhZ6wygS6hW9nEXehcqnO+NxeTgBaoi31MLa6v2vKO6GOuIC3rxQ/q+h07ib/G/pP8pF+bZJOcvCvpfvWNcZ+6CT+iBcxf0j/r9Jwr6gg2/C6m3rtoamZOzLfiyPhZvG1k/0B45vy9AnbyZ6oRuOCl57wTsii/o8lBtfW15j3KohFrV1osXMKgzzUEZvJFzC+/QoXrxSTyWPPG9Dablf6HvndX9rPUzi/4GhlUvnss7N6hXT3ABSejX+v9EQGzl\n  </data>\n </layer>\n <layer name="House2" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo4BysBSI2ZkH2hVDEwAA210AsA==\n  </data>\n </layer>\n <layer name="DHouse4" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo4A6IJ15oF0wNAEAhLEAaw==\n  </data>\n </layer>\n <layer name="House1" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="10"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo4CBYSkQszMPtCtGJgAABywAsA==\n  </data>\n </layer>\n <layer name="DHouse3" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFowAC0pkH2gUjEwAAnzEAaw==\n  </data>\n </layer>\n <layer name="DHouse2" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwxW0Mw+0C0YBMQAA6BEAiw==\n  </data>\n </layer>\n <layer name="DArmory" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFww2kMw+0C0YBKQAAtmEAaw==\n  </data>\n </layer>\n <layer name="DHouse1" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="13"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFgxW0Mw+0C0YBPQAACqAAiw==\n  </data>\n </layer>\n</map>\n',
    height: 15,
    width: 15,
    terrainGrid: [
      {
        terrain: "Plains",
        x: 0,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "River",
        x: 5,
        y: 0,
      },
      {
        terrain: "River",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "River",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 1,
      },
      {
        terrain: "Castle Wall",
        x: 9,
        y: 1,
      },
      {
        terrain: "Castle Gate",
        x: 10,
        y: 1,
      },
      {
        terrain: "Castle Wall",
        x: 11,
        y: 1,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "River",
        x: 2,
        y: 2,
      },
      {
        terrain: "River",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Fort",
        x: 5,
        y: 2,
      },
      {
        terrain: "River",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 2,
      },
      {
        terrain: "Stairs",
        x: 10,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "River",
        x: 2,
        y: 3,
      },
      {
        terrain: "River",
        x: 3,
        y: 3,
      },
      {
        terrain: "River",
        x: 4,
        y: 3,
      },
      {
        terrain: "River",
        x: 5,
        y: 3,
      },
      {
        terrain: "River",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 4,
      },
      {
        terrain: "River",
        x: 2,
        y: 4,
      },
      {
        terrain: "River",
        x: 3,
        y: 4,
      },
      {
        terrain: "River",
        x: 4,
        y: 4,
      },
      {
        terrain: "River",
        x: 5,
        y: 4,
      },
      {
        terrain: "River",
        x: 6,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "River",
        x: 3,
        y: 5,
      },
      {
        terrain: "River",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 6,
      },
      {
        terrain: "River",
        x: 4,
        y: 6,
      },
      {
        terrain: "Fort",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 6,
      },
      {
        terrain: "House",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Bridge",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Armory",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "House",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "River",
        x: 4,
        y: 8,
      },
      {
        terrain: "River",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "House",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "River",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 9,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 9,
      },
      {
        terrain: "Fort",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "House",
        x: 12,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "River",
        x: 5,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 10,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 11,
      },
      {
        terrain: "Lake",
        x: 7,
        y: 11,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 12,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Fort",
        x: 7,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
    ],
    pointsOfInterest: [
      {
        x: 10,
        y: 1,
        terrain: "Castle Gate",
      },
      {
        x: 5,
        y: 2,
        terrain: "Fort",
      },
      {
        x: 10,
        y: 2,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 6,
        terrain: "Fort",
      },
      {
        x: 13,
        y: 6,
        terrain: "House",
      },
      {
        x: 12,
        y: 7,
        terrain: "Armory",
      },
      {
        x: 14,
        y: 7,
        terrain: "House",
      },
      {
        x: 11,
        y: 8,
        terrain: "House",
      },
      {
        x: 10,
        y: 9,
        terrain: "Fort",
      },
      {
        x: 12,
        y: 9,
        terrain: "House",
      },
      {
        x: 7,
        y: 14,
        terrain: "Fort",
      },
    ],
    interactableTiles: [
      {
        x: 13,
        y: 6,
        terrain: "House",
      },
      {
        x: 12,
        y: 7,
        terrain: "Armory",
      },
      {
        x: 14,
        y: 7,
        terrain: "House",
      },
      {
        x: 11,
        y: 8,
        terrain: "House",
      },
      {
        x: 12,
        y: 9,
        terrain: "House",
      },
    ],
    areas: [
      {
        name: "Castle Entrance",
        description:
          "The northern part of the map with a castle gate and walls, serving as a defensive stronghold.",
        coordinateArea: {
          from: {
            x: 9,
            y: 0,
          },
          to: {
            x: 11,
            y: 2,
          },
        },
      },
      {
        name: "Central River",
        description:
          "A river running through the center of the map, with a bridge and surrounding plains and forests.",
        coordinateArea: {
          from: {
            x: 2,
            y: 2,
          },
          to: {
            x: 6,
            y: 7,
          },
        },
      },
      {
        name: "Eastern Village",
        description:
          "A cluster of houses and an armory, providing resources and shelter.",
        coordinateArea: {
          from: {
            x: 11,
            y: 6,
          },
          to: {
            x: 14,
            y: 9,
          },
        },
      },
      {
        name: "Southern Fort",
        description:
          "A fort located at the southern edge, offering strategic advantage and healing.",
        coordinateArea: {
          from: {
            x: 7,
            y: 13,
          },
          to: {
            x: 7,
            y: 14,
          },
        },
      },
      {
        name: "Western Peaks",
        description:
          "Mountainous terrain with peaks and cliffs, creating a natural barrier.",
        coordinateArea: {
          from: {
            x: 0,
            y: 9,
          },
          to: {
            x: 3,
            y: 14,
          },
        },
      },
    ],
  },
  {
    name: "Mayor'sVillage",
    description:
      "A village surrounded by peaks and cliffs with a central river and scattered houses.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="21" height="18" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="01000203" tilewidth="16" tileheight="16">\n  <image source="Tilesets/01000203.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="21" height="18">\n  <properties>\n   <property name="Anims" value="_01Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="MayorsVillage_Changes"/>\n   <property name="MapID" value="MayorsVillage_Map"/>\n   <property name="ObjectType" value="0x01"/>\n   <property name="PaletteID" value="0x02"/>\n   <property name="TileConfig" value="0x03"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx1lMtqU1EUhvfZQRGNWiKKSJ0oVWuSSgJaRWcp9GKENuAFwVGFREVURDNylBYcqfgKwVuhBe0DOHBSQVu84Cs4kFJQ69hvsf/DOUnTwcde+/ZnnbX/lap37nXk3Cp81lhi7VjGuUE4DhXn3IzrXLN53iAuQFFrK1Dg/ivpLUvPNMY4Mw4T0GY+lelcs/sn4DxxFS7AFu4/h6ryXICvUdDrY78BN+Bm6vfTa/dgB+d3wR2owRFowFE03yjHKeIFH/IynXHWslGIBxlzUNb9rXAbFqVlZ2b1W1a/Wz7oWY4Dqfrl2StE4dwv5kO6a6xpP14btXrBW86uqYZxfhXtD+mu6S3CN86dZn4SmvBdWlbnGtSJn+nOObSaytF4kQm1fwAPU5yC97AuzupMU7nVdG8WrfvEVxj7fdAfhsPs7SWPH4z/FK+73hyELz7k1/IhLvukhkWYtPeFfrgIl+DyJnrGNdVhmrHtQ2y+LOvbraZ51aTS5fEDzK9uojusXP9EQXe5S7eu9ylnNvr+OuxT/t25n0m96SGf+L1P/m718HjbbezXtP4j9cqeTPD7vPo8h/6S6j0gb7+DbfCpR7+OyM/2zftd8I95YE56DeYefst3Vh/Lt2i9BtujzrxbLvG/efelT/yzpF4fI876UIuc/G9v9lNxnHdZfRm/8wcf9P6ytlu/FeusSjfufdOd1Nxyt7PTqb60sZQJbxm/wYzqkU3p2Pd/VN4TxDu1V/LJd1rfPoYnLtEaUVxUz9v/55z8NJr6/npKc4VxXrpP4a4ouKT2sa558T/7s6uU\n  </data>\n </layer>\n <layer name="D8" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjALiQAvzQLtgFJADAO3tAIg=\n  </data>\n </layer>\n <layer name="D7" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUDHXQwczA0AnEXczUM3MF0KyVQLyKimaeAJp1EohPUdHMUUAYAACMqwYN\n  </data>\n </layer>\n <layer name="D6" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="7"/>\n   <property name="Y" value="9"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUwEAHMwNDJxB3MVPPzBVAs1YC8SoqmnkCaNZJID5FRTNHwfAFAOWHBg0=\n  </data>\n </layer>\n <layer name="D5" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2BwgxbmgXbBKBgFQxsAAL7QAIg=\n  </data>\n </layer>\n <layer name="D4" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="4"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFtAQtzAPtglEwCkbBSAcAabsAiA==\n  </data>\n </layer>\n <layer name="D3" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="19"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgF1AAtzAPtglEwCkbBKMAOAHZjAIg=\n  </data>\n </layer>\n <layer name="D2" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCAedDAzMHQCcRczCZoIgBVAs1YC8SoqmnkCaNZJID5FRTNHwSgYBaNgqAIAYUUGDQ==\n  </data>\n </layer>\n <layer name="D1" width="21" height="18" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="6"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYMAOOpgZGDqBuIsZhwIywAqgWSuBeBUVzTwBNOskEJ+iopmjYBSMglEwnAAA2jUGDQ==\n  </data>\n </layer>\n</map>\n',
    height: 18,
    width: 21,
    terrainGrid: [
      {
        terrain: "Peak",
        x: 0,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Castle Wall",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 1,
      },
      {
        terrain: "Castle Wall",
        x: 16,
        y: 1,
      },
      {
        terrain: "Fort Gate",
        x: 17,
        y: 1,
      },
      {
        terrain: "Castle Wall",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 2,
      },
      {
        terrain: "Village Entrance",
        x: 7,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 2,
      },
      {
        terrain: "Village Entrance",
        x: 12,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 3,
      },
      {
        terrain: "Hill",
        x: 4,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Armory",
        x: 19,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 4,
      },
      {
        terrain: "House",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 4,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 5,
      },
      {
        terrain: "Hill",
        x: 2,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 5,
      },
      {
        terrain: "River",
        x: 0,
        y: 6,
      },
      {
        terrain: "River",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 6,
      },
      {
        terrain: "Fort",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 7,
      },
      {
        terrain: "River",
        x: 1,
        y: 7,
      },
      {
        terrain: "River",
        x: 2,
        y: 7,
      },
      {
        terrain: "River",
        x: 3,
        y: 7,
      },
      {
        terrain: "River",
        x: 4,
        y: 7,
      },
      {
        terrain: "Bridge",
        x: 5,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 6,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 7,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 8,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 9,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 10,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 7,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 8,
      },
      {
        terrain: "House",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 10,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 11,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Hill",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 9,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 12,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 13,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 14,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 15,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Village Entrance",
        x: 8,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 11,
      },
      {
        terrain: "Thicket",
        x: 20,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "House",
        x: 16,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 12,
      },
      {
        terrain: "River",
        x: 19,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 13,
      },
      {
        terrain: "Village Entrance",
        x: 12,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 13,
      },
      {
        terrain: "River",
        x: 19,
        y: 13,
      },
      {
        terrain: "River",
        x: 20,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Hill",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 17,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 17,
      },
      {
        terrain: "Hill",
        x: 10,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 17,
      },
    ],
    pointsOfInterest: [
      {
        x: 17,
        y: 1,
        terrain: "Fort Gate",
      },
      {
        x: 7,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 19,
        y: 3,
        terrain: "Armory",
      },
      {
        x: 4,
        y: 4,
        terrain: "House",
      },
      {
        x: 4,
        y: 6,
        terrain: "Fort",
      },
      {
        x: 1,
        y: 8,
        terrain: "House",
      },
      {
        x: 8,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 12,
        terrain: "House",
      },
      {
        x: 12,
        y: 13,
        terrain: "Village Entrance",
      },
    ],
    interactableTiles: [
      {
        x: 7,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 2,
        terrain: "Village Entrance",
      },
      {
        x: 19,
        y: 3,
        terrain: "Armory",
      },
      {
        x: 4,
        y: 4,
        terrain: "House",
      },
      {
        x: 1,
        y: 8,
        terrain: "House",
      },
      {
        x: 8,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 12,
        terrain: "House",
      },
      {
        x: 12,
        y: 13,
        terrain: "Village Entrance",
      },
    ],
    areas: [
      {
        name: "Northern Village",
        description:
          "A small village area with walls and entrances, providing a defensive position.",
        coordinateArea: {
          from: {
            x: 6,
            y: 0,
          },
          to: {
            x: 13,
            y: 2,
          },
        },
      },
      {
        name: "Central Plains",
        description:
          "Open plains with scattered forests, ideal for movement and skirmishes.",
        coordinateArea: {
          from: {
            x: 0,
            y: 3,
          },
          to: {
            x: 20,
            y: 5,
          },
        },
      },
      {
        name: "Western River Crossing",
        description:
          "A strategic bridge over the river, connecting the northern and southern parts of the map.",
        coordinateArea: {
          from: {
            x: 0,
            y: 6,
          },
          to: {
            x: 5,
            y: 7,
          },
        },
      },
      {
        name: "Southern Cliffs",
        description:
          "A rugged area with cliffs and a house, providing a defensive advantage.",
        coordinateArea: {
          from: {
            x: 0,
            y: 8,
          },
          to: {
            x: 9,
            y: 10,
          },
        },
      },
      {
        name: "Eastern Armory",
        description:
          "An armory located near the edge of the map, offering supplies and equipment.",
        coordinateArea: {
          from: {
            x: 18,
            y: 3,
          },
          to: {
            x: 20,
            y: 4,
          },
        },
      },
      {
        name: "Central River",
        description:
          "A wide river with cliffs on both sides, limiting movement and providing natural defense.",
        coordinateArea: {
          from: {
            x: 6,
            y: 6,
          },
          to: {
            x: 20,
            y: 8,
          },
        },
      },
    ],
  },
  {
    name: "Mountains",
    description:
      "A mountainous map with scattered houses and peaks, offering strategic challenges.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="15" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="2E003430" tilewidth="16" tileheight="16">\n  <image source="Tilesets/2E003430.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="15">\n  <properties>\n   <property name="Anims" value="_2EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Mountains_Changes"/>\n   <property name="MapID" value="Mountains_Map"/>\n   <property name="ObjectType" value="0x2E"/>\n   <property name="PaletteID" value="0x34"/>\n   <property name="TileConfig" value="0x30"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxdkz1LA0EQhvc2qIhGxcJeQTQBJeQnKGIjmkT0D2gwIIiVhVaaxsZG0Tb4BYlgiijaaCX4RSy0FUuDhTHiL/AZdo47UjzMzey+Ozuzc3ljzCSsQhuMQtQz5glbwSbhS2IRY8axeTi2xtxjW4jlsFv459gH1VSwPdhB1uegAPOq/4RT9h/CHRzBqwnyTLCvgf3AplibhT4b6H3kHguw17Qvr7FfzvuGF+hVvcR93b7qotABb57bcwEJ/C4Ys07/BxniWdiIuO+EakuslTXHAfFbzT2FP2DdWkbvVlCtrxdtA9J8F62r2c9d9YLcckbSBtof/Gn8bVjD76aed12T3Fni/VD33B3qTfor1YxAukkr9y5q7pLaXKi/UuMSmhSc6Ttch2qqak2ilbxDel491CPRr8CMvIH23K9J6lnWO8dtcI706EbfT+al1QvmQPSXEfeuZb1zPPQ20sOi5pb9O56zmzoveZ0pv1dSby3UO1+/jj7G96Nx83ti3SzX4Jn4MLZTidlAL+8v/0o737uq9+dwEf4BBZ5vHA==\n  </data>\n </layer>\n <layer name="Closed House" width="15" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="5"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFxAJ15oF2wSgYjgAAZfEAKw==\n  </data>\n </layer>\n</map>\n',
    height: 15,
    width: 15,
    terrainGrid: [
      {
        terrain: "Plains",
        x: 0,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "House",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "House",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Vendor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 9,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 4,
      },
      {
        terrain: "House",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 10,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 11,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 12,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 13,
      },
      {
        terrain: "Peak",
        x: 0,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 1,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 2,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 3,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 4,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 5,
        y: 14,
      },
      {
        terrain: "Peak",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "House",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
    ],
    pointsOfInterest: [
      {
        x: 0,
        y: 1,
        terrain: "House",
      },
      {
        x: 8,
        y: 1,
        terrain: "House",
      },
      {
        x: 6,
        y: 2,
        terrain: "Vendor",
      },
      {
        x: 0,
        y: 5,
        terrain: "House",
      },
      {
        x: 8,
        y: 14,
        terrain: "House",
      },
    ],
    interactableTiles: [
      {
        x: 0,
        y: 1,
        terrain: "House",
      },
      {
        x: 8,
        y: 1,
        terrain: "House",
      },
      {
        x: 6,
        y: 2,
        terrain: "Vendor",
      },
      {
        x: 0,
        y: 5,
        terrain: "House",
      },
      {
        x: 8,
        y: 14,
        terrain: "House",
      },
    ],
    areas: [
      {
        name: "Northern Plains",
        description:
          "A wide open area with scattered forests, ideal for cavalry movement.",
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
        name: "Central Peaks",
        description:
          "A series of peaks providing high ground advantage, surrounded by plains.",
        coordinateArea: {
          from: {
            x: 3,
            y: 3,
          },
          to: {
            x: 13,
            y: 6,
          },
        },
      },
      {
        name: "Western Cliffs",
        description:
          "A rugged area with cliffs and a house, offering defensive positions.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 2,
            y: 5,
          },
        },
      },
      {
        name: "Eastern Forest",
        description:
          "A small forested area providing cover and ambush opportunities.",
        coordinateArea: {
          from: {
            x: 9,
            y: 10,
          },
          to: {
            x: 10,
            y: 10,
          },
        },
      },
      {
        name: "Southern Plains",
        description:
          "Open plains with a house, suitable for fast movement and flanking.",
        coordinateArea: {
          from: {
            x: 0,
            y: 11,
          },
          to: {
            x: 14,
            y: 14,
          },
        },
      },
      {
        name: "Vendor's Crossroad",
        description:
          "A central location with a vendor, crucial for resupplying units.",
        coordinateArea: {
          from: {
            x: 6,
            y: 2,
          },
          to: {
            x: 6,
            y: 2,
          },
        },
      },
    ],
  },
  {
    name: "RetreatDesert",
    description:
      "A desert map with scattered cliffs, a central lake, and a village.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="15" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="42004344" tilewidth="16" tileheight="16">\n  <image source="Tilesets/42004344.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="15">\n  <properties>\n   <property name="Anims" value="_42Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="RetreatDesert_Changes"/>\n   <property name="MapID" value="RetreatDesert_Map"/>\n   <property name="ObjectType" value="0x42"/>\n   <property name="PaletteID" value="0x43"/>\n   <property name="TileConfig" value="0x44"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx1lD9LXEEUxWf2NdokKoLgN0iKVdOJpBJxUdAgBCTaqyl0EZIoglYiiKjsd9BdLUS2UMtYrK5b+VDULyBqoRAUTem5zBne3XEtfszbeffPOffNbN4akwPbYDpyz0WbrP75C7g1xnST2ZRbP2I/Rl4eawFssFYae+tgAJTw+w6UWS9OuZq+blh7Bu+7wG/2+MTYkq3WV2CftSipl4mqtTeAXvAdtUbAH/AV/AB7iN0HB+DeOB9Z6r1RvTat83GGnHOl3esQ7VJ/QTFH/RfIuwRXYJHxh+y1q2ZzRC+PyHlKVc/+Vs18GPxVsxGekfcC/oNjU63tX1ArXIXP4EzmhNh55I9ibcHah7UHZMS3db2k/kT0dgY55U2/878fjKslNVqN89CpvrmwiL0+xPaD5RpnMOzXHOgoo8YYaiyBcfCLc5pg358yW8TVgyaSC8jU8FbkHP2+z60DjeQD57Nik2/g70I7ag5Fyf3K8c5MgdXgzsm+xJ+qeD3TJpuc03xwF9ZVnyLj0jy3Pt9rauO9meQ93eI59xra1Pm85vksMWY6mFFMH97TSaBJ/Gyo2RY4kzW+889p5algEx+S08HaMfVq76IpH3wzPzOJ3+G8dunTa69Q36CadcyeWeW9Qu+yHlv3P1brLnltJ4G2du5/C85ArTP93nOcevvO/0+VbfK9tI9XTprT5g==\n  </data>\n </layer>\n <layer name="Close Village" width="25" height="15" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="14"/>\n   <property name="Y" value="4"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFwwFMZR5oF4yCUTAKBhMAAHHXAJk=\n  </data>\n </layer>\n</map>\n',
    height: 15,
    width: 25,
    terrainGrid: [
      {
        terrain: "Cliff",
        x: 0,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 6,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 7,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 8,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Lake",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 0,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 0,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 1,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 6,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 7,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 1,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 1,
      },
      {
        terrain: "Lake",
        x: 13,
        y: 1,
      },
      {
        terrain: "Lake",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 22,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 1,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 1,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 2,
      },
      {
        terrain: "Fort",
        x: 2,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 9,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 10,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 11,
        y: 2,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 2,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 23,
        y: 2,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 2,
      },
      {
        terrain: "--",
        x: 0,
        y: 3,
      },
      {
        terrain: "--",
        x: 1,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 7,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 9,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 10,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 11,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 12,
        y: 3,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 3,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 3,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 19,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 22,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 23,
        y: 3,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 3,
      },
      {
        terrain: "--",
        x: 0,
        y: 4,
      },
      {
        terrain: "--",
        x: 1,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Lake",
        x: 7,
        y: 4,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 4,
      },
      {
        terrain: "Lake",
        x: 9,
        y: 4,
      },
      {
        terrain: "Lake",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 4,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Village Entrance",
        x: 14,
        y: 4,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 5,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 11,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Armory",
        x: 16,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 6,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 6,
      },
      {
        terrain: "--",
        x: 0,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 7,
      },
      {
        terrain: "Lake",
        x: 8,
        y: 7,
      },
      {
        terrain: "Lake",
        x: 9,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 15,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 7,
      },
      {
        terrain: "Fort",
        x: 21,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 7,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 17,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 19,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 8,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 8,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 3,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 7,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 15,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 18,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 19,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 9,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 9,
      },
      {
        terrain: "--",
        x: 24,
        y: 9,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 4,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 7,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 19,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 10,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 10,
      },
      {
        terrain: "Desert",
        x: 0,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 5,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 6,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 11,
      },
      {
        terrain: "Fort",
        x: 8,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 11,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 16,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 11,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 11,
      },
      {
        terrain: "Desert",
        x: 0,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 7,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 8,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 12,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 13,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 21,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 12,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 1,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 2,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 3,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 4,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 5,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 6,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 7,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 8,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 13,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 14,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 15,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 17,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 18,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 21,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 13,
      },
      {
        terrain: "Desert",
        x: 23,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 13,
      },
      {
        terrain: "Sand",
        x: 0,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 1,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 2,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 3,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 4,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 5,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 6,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 7,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 8,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 9,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 10,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 11,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 12,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 13,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 14,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 15,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 16,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 20,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 21,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 22,
        y: 14,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 14,
      },
      {
        terrain: "Desert",
        x: 24,
        y: 14,
      },
    ],
    pointsOfInterest: [
      {
        x: 2,
        y: 2,
        terrain: "Fort",
      },
      {
        x: 14,
        y: 4,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 5,
        terrain: "Armory",
      },
      {
        x: 21,
        y: 7,
        terrain: "Fort",
      },
      {
        x: 8,
        y: 11,
        terrain: "Fort",
      },
    ],
    interactableTiles: [
      {
        x: 14,
        y: 4,
        terrain: "Village Entrance",
      },
      {
        x: 16,
        y: 5,
        terrain: "Armory",
      },
    ],
    areas: [
      {
        name: "Western Cliffs",
        description:
          "A series of cliffs providing high ground and defensive positions.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 3,
            y: 2,
          },
        },
      },
      {
        name: "Central Lake",
        description:
          "A large lake surrounded by plains, offering a natural barrier.",
        coordinateArea: {
          from: {
            x: 7,
            y: 2,
          },
          to: {
            x: 12,
            y: 4,
          },
        },
      },
      {
        name: "Village Area",
        description:
          "A fortified village with walls and an entrance, providing shelter and resources.",
        coordinateArea: {
          from: {
            x: 13,
            y: 2,
          },
          to: {
            x: 15,
            y: 4,
          },
        },
      },
      {
        name: "Eastern Desert",
        description:
          "An open desert area with scattered sand and desert tiles, challenging for movement.",
        coordinateArea: {
          from: {
            x: 16,
            y: 0,
          },
          to: {
            x: 24,
            y: 4,
          },
        },
      },
      {
        name: "Southern Plains",
        description:
          "Open plains with scattered sand, offering mobility and strategic positioning.",
        coordinateArea: {
          from: {
            x: 0,
            y: 5,
          },
          to: {
            x: 12,
            y: 8,
          },
        },
      },
      {
        name: "Southwestern Fort",
        description:
          "A fort providing defensive bonuses and a strategic point for reinforcements.",
        coordinateArea: {
          from: {
            x: 21,
            y: 7,
          },
          to: {
            x: 24,
            y: 9,
          },
        },
      },
    ],
  },
  {
    name: "Aegris",
    description:
      "Aegris is a coastal village map with a mix of plains, forests, and a ship docked at the eastern edge.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="23" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="0E000F10" tilewidth="16" tileheight="16">\n  <image source="Tilesets/0E000F10.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="23">\n  <properties>\n   <property name="Anims" value="_0EAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Aegris_Changes"/>\n   <property name="MapID" value="Aegris_Map"/>\n   <property name="ObjectType" value="0x0E"/>\n   <property name="PaletteID" value="0x0F"/>\n   <property name="TileConfig" value="0x10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJx9lstOFEEUhqu6GQhgom6RDSzACOLCFTEuFEQQwbXRmEhQcaEv4ArCNfgSXMSJ8BLDVYGoL+BixoAwXvdDov+f+itdNI2LLzVVfeqcOpc6NV+tMc2RMTFYNcbkwAgogQ9gGxQhsw5exPgOuccYh0ALmAcXwRXreA35GTBl3LwR30oYi5j3g1vgHmgHO6AH38oYm6yzTxt5/B7FOAZ6wCroBX+kczrQT/7aRHeHaDFO3zfJTWpu5UfZOl9oa8+6sR/zrijZ46EPFevOzdg04/dN60bKH2JtT3vaIhc72qCtO5jfFdRf1Bm2UjY6ZeNlnM1g7M5fBx31ytXAf2Q/n+JDRX4PY/4EPAUHig194dlogzL0ZVF+cp1+vUnpzdLvbYxjbQJMgiqsfcLeDdaUvns49/Dcm6AWv8+CH/h9LkN/JThnHjI1mMc2qZE9rO8zF9HxWl0IanVF9X5GfnVm2GD+NjC+Ny7PZcWJ8jnIV4MI1Aa1ugZale8C5J6BXjAL7mfY8Hn1sWDcfX35+snbk7AOmlSDbar5rVNsXILMXBCDetU6z1eQT3XyNZeSbYuS+igqH+lYHRl31kIQA8a4T7bbhc85z1/QHafsEvbPYX0eLOgOhn5Qf2PGffMMBz2pVT0ppxyUVN+kQF/AGljG/Chy+i9Yp/86dTG/YAm02sSWr2fm+bZ6Ur1i4ntBaKuku/7FOBvXpP8RdTHWYFN58DXge5Ef2af69L1b95F9k7W+LruMr7fxAAzJRpfqg7XEsaAchXeP8Wm2iRz3zMpf3sWPxvlXF9h4BcZk4zlrVcTStWqSe8P4TJjkXu+CG+p/7xC/ZbASJz1hCuMImAYPZWOG+bLuHeEZ2eerjfvt703Yz87bpPduY74DdoN6SNsYBlU6P/fVQvcguCrffcyY/331M8ZnU/0sjOeB9vhYNcjGuD3en2tkw/fwjtjZOVTOw9reh9xv8FZ5+SXf0zYYq5XIsQsmrWNHa3yTuK9bNftd94jxKup+My959bnTbFibvBUDehN9v8p6k+jvZdXrgHwN3wPf20MbRd2dXPB/YVHr3p+QtL/09ac5+TY1BPfjH0BADuk=\n  </data>\n </layer>\n <layer name="Destroy South" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="7"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="8"/>\n   <property name="Y" value="12"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjILhAR4zMTA8A+LnTLSzg5mZgYENiNmZaWfHKBgFo4C2AACsBgLQ\n  </data>\n </layer>\n <layer name="Close South" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="6"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="9"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjIJRQApQHGgHjIJRMAooAgCFQAAi\n  </data>\n </layer>\n <layer name="Destroy West" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="5"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="10"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJztzcEJACAMwMBQUfcfUl3D7iB9mYO8A5J+sAJ2dqLu0RuMbLa6hyS9ukAHAtQ=\n  </data>\n </layer>\n <layer name="Close West" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="4"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="2"/>\n   <property name="Y" value="11"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjALqAcWBdsAoGAWjYBQQAACipAAi\n  </data>\n </layer>\n <layer name="Destroy Center" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="3"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="11"/>\n   <property name="Y" value="7"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2D4g8dMDAzPgPg5E+3sYGZmYGADYnZm2tkxCkbBKBgFo4ByAAAG+ALQ\n  </data>\n </layer>\n <layer name="Close Center" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUUAsoDrQDRsEoGAWjYBQQBADEKAAi\n  </data>\n </layer>\n <layer name="Destroy North" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="15"/>\n   <property name="Y" value="0"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYCAfPGZiYHgGxM+ZKDCEAGBmZmBgA2J2ZtrZMQpGwSgYBaNgFIyCkQMAiHUC0A==\n  </data>\n </layer>\n <layer name="Close North" width="25" height="23" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="16"/>\n   <property name="Y" value="1"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBj8QHGgHTAKRsEoGAWjYBSMgmEDABxjACI=\n  </data>\n </layer>\n</map>\n',
    height: 23,
    width: 25,
    terrainGrid: [
      {
        terrain: "Forest",
        x: 0,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 0,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 0,
      },
      {
        terrain: "Road",
        x: 12,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 0,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 0,
      },
      {
        terrain: "Sand",
        x: 24,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 1,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 1,
      },
      {
        terrain: "Road",
        x: 12,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 1,
      },
      {
        terrain: "Village Entrance",
        x: 16,
        y: 1,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 1,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 2,
      },
      {
        terrain: "Road",
        x: 12,
        y: 2,
      },
      {
        terrain: "Road",
        x: 13,
        y: 2,
      },
      {
        terrain: "Road",
        x: 14,
        y: 2,
      },
      {
        terrain: "Road",
        x: 15,
        y: 2,
      },
      {
        terrain: "Road",
        x: 16,
        y: 2,
      },
      {
        terrain: "Road",
        x: 17,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 2,
      },
      {
        terrain: "Sand",
        x: 23,
        y: 2,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Road",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 3,
      },
      {
        terrain: "Road",
        x: 13,
        y: 3,
      },
      {
        terrain: "Road",
        x: 14,
        y: 3,
      },
      {
        terrain: "Road",
        x: 15,
        y: 3,
      },
      {
        terrain: "Road",
        x: 16,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 3,
      },
      {
        terrain: "Lake",
        x: 23,
        y: 3,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 3,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 3,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 4,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Road",
        x: 8,
        y: 4,
      },
      {
        terrain: "Road",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 13,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 14,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 4,
      },
      {
        terrain: "Fence",
        x: 17,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 4,
      },
      {
        terrain: "Sand",
        x: 22,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 4,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 4,
      },
      {
        terrain: "Road",
        x: 0,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Road",
        x: 8,
        y: 5,
      },
      {
        terrain: "Road",
        x: 9,
        y: 5,
      },
      {
        terrain: "Road",
        x: 10,
        y: 5,
      },
      {
        terrain: "Forest",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 5,
      },
      {
        terrain: "Sand",
        x: 21,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 5,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 5,
      },
      {
        terrain: "Road",
        x: 0,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Road",
        x: 7,
        y: 6,
      },
      {
        terrain: "Road",
        x: 8,
        y: 6,
      },
      {
        terrain: "Road",
        x: 9,
        y: 6,
      },
      {
        terrain: "Road",
        x: 10,
        y: 6,
      },
      {
        terrain: "Road",
        x: 11,
        y: 6,
      },
      {
        terrain: "Road",
        x: 12,
        y: 6,
      },
      {
        terrain: "Road",
        x: 13,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 6,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 6,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 6,
      },
      {
        terrain: "Road",
        x: 0,
        y: 7,
      },
      {
        terrain: "Road",
        x: 1,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 7,
      },
      {
        terrain: "Ruins",
        x: 7,
        y: 7,
      },
      {
        terrain: "Ruins",
        x: 8,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 7,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 7,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 7,
      },
      {
        terrain: "Road",
        x: 0,
        y: 8,
      },
      {
        terrain: "Road",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Ruins",
        x: 7,
        y: 8,
      },
      {
        terrain: "Ruins",
        x: 8,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 8,
      },
      {
        terrain: "Village Entrance",
        x: 12,
        y: 8,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 8,
      },
      {
        terrain: "Road",
        x: 14,
        y: 8,
      },
      {
        terrain: "Road",
        x: 15,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 8,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 9,
      },
      {
        terrain: "Road",
        x: 1,
        y: 9,
      },
      {
        terrain: "Road",
        x: 2,
        y: 9,
      },
      {
        terrain: "Road",
        x: 3,
        y: 9,
      },
      {
        terrain: "Road",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Road",
        x: 7,
        y: 9,
      },
      {
        terrain: "Road",
        x: 8,
        y: 9,
      },
      {
        terrain: "Road",
        x: 9,
        y: 9,
      },
      {
        terrain: "Road",
        x: 10,
        y: 9,
      },
      {
        terrain: "Road",
        x: 11,
        y: 9,
      },
      {
        terrain: "Road",
        x: 12,
        y: 9,
      },
      {
        terrain: "Road",
        x: 13,
        y: 9,
      },
      {
        terrain: "Road",
        x: 14,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 9,
      },
      {
        terrain: "Forest",
        x: 16,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 9,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 24,
        y: 9,
      },
      {
        terrain: "Road",
        x: 0,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Road",
        x: 4,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 10,
      },
      {
        terrain: "Road",
        x: 9,
        y: 10,
      },
      {
        terrain: "Road",
        x: 10,
        y: 10,
      },
      {
        terrain: "Road",
        x: 11,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Road",
        x: 15,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 10,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 23,
        y: 10,
      },
      {
        terrain: "Gunnel",
        x: 24,
        y: 10,
      },
      {
        terrain: "Road",
        x: 0,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 11,
      },
      {
        terrain: "Village Entrance",
        x: 2,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Road",
        x: 6,
        y: 11,
      },
      {
        terrain: "Road",
        x: 7,
        y: 11,
      },
      {
        terrain: "Road",
        x: 8,
        y: 11,
      },
      {
        terrain: "Road",
        x: 9,
        y: 11,
      },
      {
        terrain: "Road",
        x: 10,
        y: 11,
      },
      {
        terrain: "Road",
        x: 11,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 11,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 11,
      },
      {
        terrain: "Lake",
        x: 20,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 11,
      },
      {
        terrain: "Sea",
        x: 22,
        y: 11,
      },
      {
        terrain: "Gunnel",
        x: 23,
        y: 11,
      },
      {
        terrain: "Gunnel",
        x: 24,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Road",
        x: 11,
        y: 12,
      },
      {
        terrain: "Road",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 12,
      },
      {
        terrain: "Vendor",
        x: 17,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 18,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 12,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 12,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 12,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 12,
      },
      {
        terrain: "Gunnel",
        x: 23,
        y: 12,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 12,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 1,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 7,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 8,
        y: 13,
      },
      {
        terrain: "Village Entrance",
        x: 9,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 13,
      },
      {
        terrain: "Road",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 13,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 13,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 13,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 13,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 13,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 14,
      },
      {
        terrain: "Armory",
        x: 1,
        y: 14,
      },
      {
        terrain: "Village Wall",
        x: 2,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Road",
        x: 5,
        y: 14,
      },
      {
        terrain: "Road",
        x: 6,
        y: 14,
      },
      {
        terrain: "Road",
        x: 7,
        y: 14,
      },
      {
        terrain: "Road",
        x: 8,
        y: 14,
      },
      {
        terrain: "Road",
        x: 9,
        y: 14,
      },
      {
        terrain: "Road",
        x: 10,
        y: 14,
      },
      {
        terrain: "Road",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Road",
        x: 19,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 14,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 14,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 14,
      },
      {
        terrain: "Barrel",
        x: 23,
        y: 14,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Road",
        x: 5,
        y: 15,
      },
      {
        terrain: "Road",
        x: 6,
        y: 15,
      },
      {
        terrain: "Road",
        x: 7,
        y: 15,
      },
      {
        terrain: "Road",
        x: 8,
        y: 15,
      },
      {
        terrain: "Road",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Road",
        x: 19,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 15,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 15,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 15,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 15,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 15,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 16,
      },
      {
        terrain: "Road",
        x: 6,
        y: 16,
      },
      {
        terrain: "Road",
        x: 7,
        y: 16,
      },
      {
        terrain: "Road",
        x: 8,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 16,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 16,
      },
      {
        terrain: "Road",
        x: 18,
        y: 16,
      },
      {
        terrain: "Road",
        x: 19,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 20,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 16,
      },
      {
        terrain: "Bridge",
        x: 22,
        y: 16,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 16,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 16,
      },
      {
        terrain: "Village Wall",
        x: 0,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 17,
      },
      {
        terrain: "Road",
        x: 7,
        y: 17,
      },
      {
        terrain: "Road",
        x: 8,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 17,
      },
      {
        terrain: "Road",
        x: 14,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 15,
        y: 17,
      },
      {
        terrain: "Inn",
        x: 16,
        y: 17,
      },
      {
        terrain: "Village Wall",
        x: 17,
        y: 17,
      },
      {
        terrain: "Road",
        x: 18,
        y: 17,
      },
      {
        terrain: "Road",
        x: 19,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 20,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 21,
        y: 17,
      },
      {
        terrain: "Bridge",
        x: 22,
        y: 17,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 17,
      },
      {
        terrain: "Mast",
        x: 24,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 0,
        y: 18,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 18,
      },
      {
        terrain: "Road",
        x: 7,
        y: 18,
      },
      {
        terrain: "Road",
        x: 8,
        y: 18,
      },
      {
        terrain: "Village Wall",
        x: 9,
        y: 18,
      },
      {
        terrain: "House",
        x: 10,
        y: 18,
      },
      {
        terrain: "Village Wall",
        x: 11,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 18,
      },
      {
        terrain: "Road",
        x: 15,
        y: 18,
      },
      {
        terrain: "Road",
        x: 16,
        y: 18,
      },
      {
        terrain: "Road",
        x: 17,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 18,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 18,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 18,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 18,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 18,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 19,
      },
      {
        terrain: "Road",
        x: 8,
        y: 19,
      },
      {
        terrain: "Road",
        x: 9,
        y: 19,
      },
      {
        terrain: "Road",
        x: 10,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 19,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 19,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 19,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 19,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 19,
      },
      {
        terrain: "Fence",
        x: 0,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 1,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 2,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 5,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 6,
        y: 20,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 9,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 20,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 20,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 20,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 20,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 20,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 20,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 21,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 10,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 21,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 21,
      },
      {
        terrain: "Sand",
        x: 20,
        y: 21,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 21,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 21,
      },
      {
        terrain: "Deck",
        x: 23,
        y: 21,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 21,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 22,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 7,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 8,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 9,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 10,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 11,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 12,
        y: 22,
      },
      {
        terrain: "Stairs",
        x: 13,
        y: 22,
      },
      {
        terrain: "Stairs",
        x: 14,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 15,
        y: 22,
      },
      {
        terrain: "Fence",
        x: 16,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 22,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 22,
      },
      {
        terrain: "Sand",
        x: 19,
        y: 22,
      },
      {
        terrain: "Sea",
        x: 20,
        y: 22,
      },
      {
        terrain: "Sea",
        x: 21,
        y: 22,
      },
      {
        terrain: "Gunnel",
        x: 22,
        y: 22,
      },
      {
        terrain: "Barrel",
        x: 23,
        y: 22,
      },
      {
        terrain: "Deck",
        x: 24,
        y: 22,
      },
    ],
    pointsOfInterest: [
      {
        x: 16,
        y: 1,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 8,
        terrain: "Village Entrance",
      },
      {
        x: 2,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 17,
        y: 12,
        terrain: "Vendor",
      },
      {
        x: 9,
        y: 13,
        terrain: "Village Entrance",
      },
      {
        x: 1,
        y: 14,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 17,
        terrain: "Inn",
      },
      {
        x: 10,
        y: 18,
        terrain: "House",
      },
      {
        x: 3,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 13,
        y: 22,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 22,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 16,
        y: 1,
        terrain: "Village Entrance",
      },
      {
        x: 12,
        y: 8,
        terrain: "Village Entrance",
      },
      {
        x: 2,
        y: 11,
        terrain: "Village Entrance",
      },
      {
        x: 17,
        y: 12,
        terrain: "Vendor",
      },
      {
        x: 9,
        y: 13,
        terrain: "Village Entrance",
      },
      {
        x: 1,
        y: 14,
        terrain: "Armory",
      },
      {
        x: 16,
        y: 17,
        terrain: "Inn",
      },
      {
        x: 10,
        y: 18,
        terrain: "House",
      },
    ],
    areas: [
      {
        name: "Northern Village",
        description:
          "A small village area with a road leading through it, surrounded by village walls and a vendor.",
        coordinateArea: {
          from: {
            x: 11,
            y: 0,
          },
          to: {
            x: 18,
            y: 2,
          },
        },
      },
      {
        name: "Central Village",
        description:
          "The main part of the village with multiple roads and a village entrance, surrounded by walls.",
        coordinateArea: {
          from: {
            x: 6,
            y: 7,
          },
          to: {
            x: 14,
            y: 11,
          },
        },
      },
      {
        name: "Southern Village",
        description:
          "A quieter part of the village with an inn and a house, surrounded by village walls.",
        coordinateArea: {
          from: {
            x: 9,
            y: 16,
          },
          to: {
            x: 18,
            y: 18,
          },
        },
      },
      {
        name: "Western Plains",
        description:
          "Open plains with scattered forests and a few roads, leading to the village.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 10,
            y: 10,
          },
        },
      },
      {
        name: "Eastern Ship",
        description:
          "A large ship docked at the eastern edge, with a deck and various ship elements.",
        coordinateArea: {
          from: {
            x: 20,
            y: 10,
          },
          to: {
            x: 24,
            y: 22,
          },
        },
      },
      {
        name: "Southern Forest",
        description:
          "Dense forest area with a few clearings, providing cover and strategic positioning.",
        coordinateArea: {
          from: {
            x: 0,
            y: 19,
          },
          to: {
            x: 8,
            y: 22,
          },
        },
      },
    ],
  },
  {
    name: "HaedrcHideout",
    description:
      "A mixed indoor and outdoor map featuring a hideout with multiple rooms and surrounding plains and forests.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="22" height="20" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="22" height="20">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="MapID" value="HaedricHideout_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyVlF9Kw0AQxkP2oeCLx9iX3iKB1oeAhzA2IBUPYX1QanuHILSlFp/UE1il/nnzCEUoQo/gLPmWTIZpTB9+bDKZ+XZmMzutIAhagjFxQuRYHQND34grU7WnWJfMliuaDkt0mZ/Dkt6NKdZU0ZH7eK0LwHNeM/875NsYiskQ63RGTJvnPCXfCZEQ58T3P2RBtd6ecs6ON/J9JfrEgvgixjW4mFhoT4Oyjlx8G0L3gdjW4OvnsWfEQthi7OF0b5muFc9el/dPynS4XebLdR/D4tn1ynNY6lqclRXx0r5GzvIcXJ88hQUHLN9r4gcr19Xssch3rvyvOXRniJ8J3V32e5bvu/K/vG2F+JWI1+wu3w96/2zQDxtT/OcN4hPcB/d+yOyeX/QxP19/x06ZPWI9+kL0MR+Oca/byqzgPS/7W8P79KDZxV4jpr3cEet6NIJ/Aq1U+ERMv409JorWpVLDkDhSfAdmv7nl700HZ2dBjtzlfaibKZyOKWvLsFpxtlFQve9N8LNLzsRI2PbV3QpdX/sfTfzdHA==\n  </data>\n </layer>\n</map>\n',
    height: 20,
    width: 22,
    terrainGrid: [
      {
        terrain: "Plains",
        x: 0,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 0,
      },
      {
        terrain: "Forest",
        x: 18,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 1,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Forest",
        x: 14,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 2,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 3,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 20,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 21,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 18,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Forest",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Pillar",
        x: 15,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 9,
      },
      {
        terrain: "Pillar",
        x: 20,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 10,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 7,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 17,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 18,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 19,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 17,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 18,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 19,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 20,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 21,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Forest",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 12,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 14,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 15,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 17,
      },
      {
        terrain: "Forest",
        x: 1,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 16,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 18,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 15,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 16,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 19,
      },
      {
        terrain: "Forest",
        x: 20,
        y: 19,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 19,
      },
    ],
    pointsOfInterest: [
      {
        x: 11,
        y: 1,
        terrain: "Stairs",
      },
      {
        x: 18,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 9,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 7,
        y: 11,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [],
    areas: [
      {
        name: "Northern Plains",
        description:
          "An open area with plains and scattered forests, providing cover and strategic movement options.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 21,
            y: 3,
          },
        },
      },
      {
        name: "Central Hideout Entrance",
        description:
          "The main entrance to the hideout, featuring walls and a central stairway for reinforcements.",
        coordinateArea: {
          from: {
            x: 10,
            y: 0,
          },
          to: {
            x: 12,
            y: 1,
          },
        },
      },
      {
        name: "Western Plains",
        description:
          "A vast area of plains with some forest patches, ideal for flanking maneuvers.",
        coordinateArea: {
          from: {
            x: 0,
            y: 4,
          },
          to: {
            x: 9,
            y: 19,
          },
        },
      },
      {
        name: "Eastern Hideout Interior",
        description:
          "An indoor area with floors and pillars, providing defensive positions and strategic chokepoints.",
        coordinateArea: {
          from: {
            x: 14,
            y: 4,
          },
          to: {
            x: 21,
            y: 11,
          },
        },
      },
      {
        name: "Southern Hideout Interior",
        description:
          "A large indoor area with floors and walls, leading to the deeper parts of the hideout.",
        coordinateArea: {
          from: {
            x: 5,
            y: 17,
          },
          to: {
            x: 16,
            y: 19,
          },
        },
      },
      {
        name: "Southern Plains",
        description:
          "Open plains with some forest areas, offering a wide approach to the hideout.",
        coordinateArea: {
          from: {
            x: 0,
            y: 16,
          },
          to: {
            x: 21,
            y: 19,
          },
        },
      },
    ],
  },
  {
    name: "PeakRiver",
    description:
      "A mixed indoor and outdoor map featuring a fortress and a river with bridges.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="25" height="18" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="25" height="18">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapID" value="PeakRiver_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyFVE1rFEEQrekxLAh60xhEQSXZPUm8SBQvSdAsIiYeREHwILvJiB/kYi4SLyYqAXX+giIkEZKA/yCKuyh+oOBfyEkQ/4Gv6FdObbPi4THTXd316r2u7oFcZATYAn4Rw5xbEpFJoJ2JBKCRxbnRILIXuA2sYm4D+AL8Bk4jPgR8zar4wH84FI+xbhk453i28L2AHGvMvwl8Bx4gdiqJ9+NoA7vzqOGvFok8zSz+m5YPzP+ZOg4gdt/F1//BUQKDiE+rBqApvb41yKO17sG6oyFqUbwB9lPLKDlqyDebcCjGEK9JBeN55DzztaqOE/i/hzUngYNAifHNEGsuk/z9OEqpzke1FO78leMSvmMYXwX2Mf8E9amOGv33WlaA9YSjS7/0XJ7QL+WZDrGfBoE1/M+w/iZ5ijxiAXve49sBusBH4Bb2rCZ+tZh3PI8c5s0icCOL+e2MtBfq+I6wV3TfXOJ9i/20wVghVe2qR2v/Qeid+IZ8n9wZqU9FiN5q/1ufPgfmHc9ZrcXdC8Vb4B1wmPkXyW059Ix+hphfNWmfmP4p+r5NLuMx/zV+0Wm57jTouOO89O+BjXfoifo/Q8/Mm6e8Jzp3l+NnEu/BNefdkkPb8UyS269Rrk3W5c+ppFb1ss5acuodh84J+vkwVOf5KvT6nHLliO1K+uG1epnH8Tw56vRwmWtfIG+OwMvAHnfnuS29fPbv+2GF/bogsWeHyH+e/rX67J9yvet99FzDfLOPEZeBKxLvnK23+3rczXX5nc0iGq6/OtL75p6R2J9z9KXp1lktd9gjvr4d7j9CDnsbLHdLqjuo7/Uhd/6FVO+9X5d6YTX/ATtBv5M=\n  </data>\n </layer>\n</map>\n',
    height: 18,
    width: 25,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 9,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 10,
        y: 0,
      },
      {
        terrain: "Thicket",
        x: 11,
        y: 0,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 13,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 0,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 0,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 1,
      },
      {
        terrain: "Thicket",
        x: 9,
        y: 1,
      },
      {
        terrain: "Thicket",
        x: 10,
        y: 1,
      },
      {
        terrain: "Thicket",
        x: 11,
        y: 1,
      },
      {
        terrain: "Thicket",
        x: 12,
        y: 1,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 1,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 1,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 2,
      },
      {
        terrain: "Thicket",
        x: 11,
        y: 2,
      },
      {
        terrain: "Thicket",
        x: 12,
        y: 2,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 14,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 2,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 2,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 3,
      },
      {
        terrain: "Thicket",
        x: 12,
        y: 3,
      },
      {
        terrain: "Thicket",
        x: 13,
        y: 3,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 3,
      },
      {
        terrain: "Cliff",
        x: 22,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 3,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 4,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 4,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 4,
      },
      {
        terrain: "Thicket",
        x: 12,
        y: 4,
      },
      {
        terrain: "Thicket",
        x: 13,
        y: 4,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 15,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 4,
      },
      {
        terrain: "Cliff",
        x: 22,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 4,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 6,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 5,
      },
      {
        terrain: "Thicket",
        x: 13,
        y: 5,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 5,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 16,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 18,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 20,
        y: 5,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 5,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 6,
      },
      {
        terrain: "Forest",
        x: 11,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 6,
      },
      {
        terrain: "Thicket",
        x: 13,
        y: 6,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 6,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 17,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 6,
      },
      {
        terrain: "Cliff",
        x: 19,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 21,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 6,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 7,
      },
      {
        terrain: "House",
        x: 14,
        y: 7,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 7,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 7,
      },
      {
        terrain: "Thicket",
        x: 19,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 21,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 7,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 7,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 8,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 8,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 8,
      },
      {
        terrain: "Sea",
        x: 17,
        y: 8,
      },
      {
        terrain: "Cliff",
        x: 18,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 19,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 20,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 21,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 8,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 8,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 8,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 9,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 10,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 13,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 14,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 9,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 9,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 9,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 21,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 22,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 9,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 9,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 10,
      },
      {
        terrain: "Thicket",
        x: 5,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 10,
      },
      {
        terrain: "Thicket",
        x: 9,
        y: 10,
      },
      {
        terrain: "Thicket",
        x: 10,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 10,
      },
      {
        terrain: "Sea",
        x: 16,
        y: 10,
      },
      {
        terrain: "Cliff",
        x: 17,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 10,
      },
      {
        terrain: "Forest",
        x: 19,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 23,
        y: 10,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 10,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 11,
      },
      {
        terrain: "Forest",
        x: 2,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 11,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 11,
      },
      {
        terrain: "Peak",
        x: 24,
        y: 11,
      },
      {
        terrain: "Plains",
        x: 0,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 12,
      },
      {
        terrain: "Forest",
        x: 7,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 12,
      },
      {
        terrain: "Bridge",
        x: 16,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 12,
      },
      {
        terrain: "Thicket",
        x: 18,
        y: 12,
      },
      {
        terrain: "Thicket",
        x: 19,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 12,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 12,
      },
      {
        terrain: "Cliff",
        x: 24,
        y: 12,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 1,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 13,
      },
      {
        terrain: "Thicket",
        x: 7,
        y: 13,
      },
      {
        terrain: "Thicket",
        x: 8,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 13,
      },
      {
        terrain: "Fort",
        x: 13,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 13,
      },
      {
        terrain: "Bridge",
        x: 16,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 13,
      },
      {
        terrain: "Thicket",
        x: 19,
        y: 13,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 21,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 22,
        y: 13,
      },
      {
        terrain: "Cliff",
        x: 23,
        y: 13,
      },
      {
        terrain: "Thicket",
        x: 24,
        y: 13,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 14,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 14,
      },
      {
        terrain: "Thicket",
        x: 3,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 9,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 10,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 14,
      },
      {
        terrain: "Cliff",
        x: 16,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 14,
      },
      {
        terrain: "Plains",
        x: 24,
        y: 14,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 15,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 2,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 15,
      },
      {
        terrain: "Thicket",
        x: 9,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 15,
      },
      {
        terrain: "Bridge",
        x: 11,
        y: 15,
      },
      {
        terrain: "Bridge",
        x: 12,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 13,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 14,
        y: 15,
      },
      {
        terrain: "Cliff",
        x: 15,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 15,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 15,
      },
      {
        terrain: "Plains",
        x: 24,
        y: 15,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 16,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 16,
      },
      {
        terrain: "Thicket",
        x: 2,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 5,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 16,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 15,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 16,
      },
      {
        terrain: "Forest",
        x: 23,
        y: 16,
      },
      {
        terrain: "Plains",
        x: 24,
        y: 16,
      },
      {
        terrain: "Thicket",
        x: 0,
        y: 17,
      },
      {
        terrain: "Thicket",
        x: 1,
        y: 17,
      },
      {
        terrain: "Thicket",
        x: 2,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 3,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 4,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 5,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 6,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 7,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 8,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 9,
        y: 17,
      },
      {
        terrain: "Cliff",
        x: 10,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 11,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 12,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 13,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 14,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 15,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 16,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 17,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 18,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 19,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 20,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 21,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 22,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 23,
        y: 17,
      },
      {
        terrain: "Plains",
        x: 24,
        y: 17,
      },
    ],
    pointsOfInterest: [
      {
        x: 6,
        y: 3,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 4,
        terrain: "Stairs",
      },
      {
        x: 6,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 14,
        y: 7,
        terrain: "House",
      },
      {
        x: 13,
        y: 13,
        terrain: "Fort",
      },
    ],
    interactableTiles: [
      {
        x: 14,
        y: 7,
        terrain: "House",
      },
    ],
    areas: [
      {
        name: "Fortress Interior",
        description:
          "An indoor area with floors and stairs, likely the starting point for players.",
        coordinateArea: {
          from: {
            x: 0,
            y: 0,
          },
          to: {
            x: 6,
            y: 7,
          },
        },
      },
      {
        name: "Northern Plains",
        description:
          "An open outdoor area with plains and thickets, providing space for movement and ambushes.",
        coordinateArea: {
          from: {
            x: 7,
            y: 0,
          },
          to: {
            x: 14,
            y: 7,
          },
        },
      },
      {
        name: "Mountain Peaks",
        description:
          "A rugged area with peaks and cliffs, offering high ground and defensive positions.",
        coordinateArea: {
          from: {
            x: 15,
            y: 0,
          },
          to: {
            x: 24,
            y: 8,
          },
        },
      },
      {
        name: "Central River",
        description:
          "A river running through the map with bridges, creating chokepoints and strategic crossing points.",
        coordinateArea: {
          from: {
            x: 7,
            y: 8,
          },
          to: {
            x: 17,
            y: 13,
          },
        },
      },
      {
        name: "Southern Plains",
        description:
          "A wide open area with plains and thickets, suitable for large-scale battles.",
        coordinateArea: {
          from: {
            x: 0,
            y: 8,
          },
          to: {
            x: 6,
            y: 17,
          },
        },
      },
      {
        name: "Eastern Cliffs",
        description:
          "A series of cliffs and peaks, providing natural barriers and vantage points.",
        coordinateArea: {
          from: {
            x: 18,
            y: 9,
          },
          to: {
            x: 24,
            y: 17,
          },
        },
      },
    ],
  },
  {
    name: "XyliaTemple",
    description:
      "A multi-level temple with various rooms and corridors, featuring a throne and multiple staircases.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="30" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="6C006D6E" tilewidth="16" tileheight="16">\n  <image source="Tilesets/6C006D6E.png" width="512" height="512"/>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="30">\n  <properties>\n   <property name="Anims" value="_6CAnims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="XyliaTemple_Changes"/>\n   <property name="MapID" value="XyliaTemple_Map"/>\n   <property name="ObjectType" value="0x6C"/>\n   <property name="PaletteID" value="0x6D"/>\n   <property name="TileConfig" value="0x6E"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJyllD1OxDAQRq1ECrv0XABpQy4QrkDNIfiRqDgEFKHZS0ARIS0VnAAojMTeJFfgs5gRsx+eRIHiSc4kbzye2K7KECpDDTZgMByBZ/ACTs14jzg37iN4Ah34BGtwbcY5dL4PsAURPFA991SbB+fUmOa6AYsMt5n1KxpvnHU05C5Nb6yr486JD5SXv0nenfHZ9WpO4168Xp6vTI37lIfdKF4089o+5OY9AStxlFriUzWvxe3N3LXM6f13m3NV7tbMe3uZ+e+6b5NbiWfPhb4/KEI4DN+1aH90356V+XOh79vip18N1T92LgZxB8edopWaNzNd2yeFz35u/yTS3XEBLidI/dz+wT0udnsy5nJf2xkuf9NlerKQ+JTbO2tJcb5X7B2RiI4by9+9T/lewRt4n+nGf7iMd9/z3vbQM+c9j6FnzntWvgDjkR2x\n  </data>\n </layer>\n <layer name="South Chest" width="15" height="30">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="16"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUjBTANNAOGAWjYBACAA04AAM=\n  </data>\n </layer>\n <layer name="North Chest" width="15" height="30">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="12"/>\n   <property name="Y" value="13"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFo2AUkAOYBtoBo2AUjAKqAAAOoAAD\n  </data>\n </layer>\n</map>\n',
    height: 30,
    width: 15,
    terrainGrid: [
      {
        terrain: "Wall",
        x: 0,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 0,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 1,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Pillar",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Throne",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Brace",
        x: 9,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 6,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 7,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 7,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 8,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 9,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 10,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 11,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 12,
      },
      {
        terrain: "Brace",
        x: 6,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 1,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 13,
      },
      {
        terrain: "Brace",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 13,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 13,
      },
      {
        terrain: "Chest",
        x: 12,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 16,
      },
      {
        terrain: "Stairs",
        x: 11,
        y: 16,
      },
      {
        terrain: "Chest",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 17,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 17,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 18,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 18,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 19,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 19,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 19,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 20,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 20,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 20,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 21,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 21,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 21,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 22,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 22,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 22,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 22,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 23,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 23,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 23,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 23,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 23,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 24,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 24,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 24,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 24,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 24,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 25,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 25,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 25,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 25,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 25,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 25,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 25,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 25,
      },
      {
        terrain: "Brace",
        x: 0,
        y: 26,
      },
      {
        terrain: "Stairs",
        x: 1,
        y: 26,
      },
      {
        terrain: "Stairs",
        x: 2,
        y: 26,
      },
      {
        terrain: "Stairs",
        x: 3,
        y: 26,
      },
      {
        terrain: "Brace",
        x: 4,
        y: 26,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 26,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 26,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 26,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 26,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 26,
      },
      {
        terrain: "Brace",
        x: 10,
        y: 26,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 26,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 26,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 26,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 26,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 27,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 28,
      },
      {
        terrain: "Pillar",
        x: 5,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 28,
      },
      {
        terrain: "Pillar",
        x: 9,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 28,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 29,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 29,
      },
    ],
    pointsOfInterest: [
      {
        x: 12,
        y: 1,
        terrain: "Throne",
      },
      {
        x: 5,
        y: 7,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 13,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 13,
        terrain: "Chest",
      },
      {
        x: 11,
        y: 14,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 15,
        terrain: "Stairs",
      },
      {
        x: 11,
        y: 16,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 16,
        terrain: "Chest",
      },
      {
        x: 5,
        y: 19,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 20,
        terrain: "Stairs",
      },
      {
        x: 4,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 21,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 25,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 25,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 25,
        terrain: "Stairs",
      },
      {
        x: 1,
        y: 26,
        terrain: "Stairs",
      },
      {
        x: 2,
        y: 26,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 26,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 12,
        y: 13,
        terrain: "Chest",
      },
      {
        x: 12,
        y: 16,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Throne Room",
        description:
          "The central area with a throne, surrounded by walls and pillars, indicating a place of importance.",
        coordinateArea: {
          from: {
            x: 5,
            y: 0,
          },
          to: {
            x: 14,
            y: 2,
          },
        },
      },
      {
        name: "Main Hallway",
        description:
          "A long corridor connecting different parts of the temple, with several braces and stairs.",
        coordinateArea: {
          from: {
            x: 0,
            y: 3,
          },
          to: {
            x: 14,
            y: 8,
          },
        },
      },
      {
        name: "Treasure Room",
        description:
          "A room containing a chest, accessible via stairs, indicating a place of hidden treasures.",
        coordinateArea: {
          from: {
            x: 11,
            y: 13,
          },
          to: {
            x: 14,
            y: 16,
          },
        },
      },
      {
        name: "Lower Chambers",
        description:
          "A series of rooms and corridors with multiple staircases, leading to different sections of the temple.",
        coordinateArea: {
          from: {
            x: 0,
            y: 17,
          },
          to: {
            x: 14,
            y: 21,
          },
        },
      },
      {
        name: "Entrance Hall",
        description:
          "The entrance area of the temple, featuring wide open spaces and pillars, leading into the main structure.",
        coordinateArea: {
          from: {
            x: 0,
            y: 27,
          },
          to: {
            x: 14,
            y: 29,
          },
        },
      },
    ],
  },
  {
    name: "Underground",
    description:
      "The map is an underground dungeon with multiple rooms and corridors, featuring walls, doors, and stairs.",
    tmx: '<?xml version="1.0" encoding="UTF-8"?>\n<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="17" tilewidth="16" tileheight="16" nextobjectid="1">\n <tileset firstgid="1" name="1800191A" tilewidth="16" tileheight="16">\n  <image source="Tilesets/1800191A.png" width="512" height="512"/>\n  <tile id="786">\n   <properties>\n    <property name="Main" value=""/>\n   </properties>\n  </tile>\n </tileset>\n <layer name="Tile Layer 1" width="15" height="17">\n  <properties>\n   <property name="Anims" value="_18Anims"/>\n   <property name="ChapterID" value="<CHAPTERID>"/>\n   <property name="Main" value=""/>\n   <property name="MapChangesID" value="Underground_Changes"/>\n   <property name="MapID" value="Underground_Map"/>\n   <property name="ObjectType" value="0x18"/>\n   <property name="PaletteID" value="0x19"/>\n   <property name="TileConfig" value="0x1A"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJwTYmZgEELCF5gYGATRxPCJI2MBIP7MRLw4uXgNIwPDQkYIjQ9zYXGzMBpOAqp7DFT3BAk/A+I3jIT9ywFUZwGkLdEwNr0gPidQ/WpGCAa5zRQoZoaGcek9DBQXgboZpMYUST2MvZYRYT4Mg/Q+htJKDLj1YgsDQTQz1+HQi+5/EF6KFq7PmLDrRQ4TWLhgM28JI6ZeENsQKgcLF/TwRA9bmF5NNHu1mDDDDl0eX1hhczMyhrkBnxwIX0BLF+h8fFgPiKPx8NExAEVVWXI=\n  </data>\n </layer>\n <layer name="Chest" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="1"/>\n   <property name="ID" value="2"/>\n   <property name="Width" value="1"/>\n   <property name="X" value="3"/>\n   <property name="Y" value="8"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgFIwUwDbQDRsGgAgAIHAAD\n  </data>\n </layer>\n <layer name="Bottom Door" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="3"/>\n   <property name="ID" value="1"/>\n   <property name="Width" value="2"/>\n   <property name="X" value="1"/>\n   <property name="Y" value="6"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBgF9AKaTAwMqxnJ0yvMDMHkgDdAOwXJ1DsKhi8AAKhLAgU=\n  </data>\n </layer>\n <layer name="Top Door" width="15" height="17" visible="0">\n  <properties>\n   <property name="Height" value="2"/>\n   <property name="ID" value="0"/>\n   <property name="Width" value="3"/>\n   <property name="X" value="0"/>\n   <property name="Y" value="3"/>\n  </properties>\n  <data encoding="base64" compression="zlib">\n   eJxjYBh6YB0jA4MgMwPDWkbS9QoD9QkxQ+hRMApGMgAAfkkBsw==\n  </data>\n </layer>\n</map>\n',
    height: 17,
    width: 15,
    terrainGrid: [
      {
        terrain: "Floor",
        x: 0,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 0,
      },
      {
        terrain: "Pillar",
        x: 4,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 0,
      },
      {
        terrain: "Pillar",
        x: 10,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 0,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 1,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 2,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 2,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 3,
      },
      {
        terrain: "Door",
        x: 1,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 3,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 3,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 8,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 9,
        y: 4,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 4,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 5,
      },
      {
        terrain: "Stairs",
        x: 4,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 5,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 5,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 6,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 6,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 7,
      },
      {
        terrain: "Door",
        x: 1,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 7,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 7,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 8,
      },
      {
        terrain: "Chest",
        x: 3,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 8,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 8,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 9,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 9,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 9,
      },
      {
        terrain: "Stairs",
        x: 0,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 10,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 10,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 5,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 11,
      },
      {
        terrain: "Stairs",
        x: 12,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 11,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 11,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 12,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 12,
      },
      {
        terrain: "Wall",
        x: 0,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 1,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 2,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 3,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 4,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 5,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 6,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 7,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 10,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 11,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 12,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 13,
        y: 13,
      },
      {
        terrain: "Wall",
        x: 14,
        y: 13,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 14,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 15,
      },
      {
        terrain: "Pillar",
        x: 3,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 15,
      },
      {
        terrain: "Pillar",
        x: 7,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 15,
      },
      {
        terrain: "Floor",
        x: 0,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 1,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 2,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 3,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 4,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 5,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 6,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 7,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 8,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 9,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 10,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 11,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 12,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 13,
        y: 16,
      },
      {
        terrain: "Floor",
        x: 14,
        y: 16,
      },
    ],
    pointsOfInterest: [
      {
        x: 4,
        y: 5,
        terrain: "Stairs",
      },
      {
        x: 3,
        y: 8,
        terrain: "Chest",
      },
      {
        x: 0,
        y: 10,
        terrain: "Stairs",
      },
      {
        x: 5,
        y: 11,
        terrain: "Stairs",
      },
      {
        x: 12,
        y: 11,
        terrain: "Stairs",
      },
    ],
    interactableTiles: [
      {
        x: 1,
        y: 3,
        terrain: "Door",
      },
      {
        x: 1,
        y: 7,
        terrain: "Door",
      },
      {
        x: 3,
        y: 8,
        terrain: "Chest",
      },
    ],
    areas: [
      {
        name: "Entrance Hall",
        description:
          "The starting area with a wide open space and pillars, leading to the main dungeon.",
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
        name: "Main Corridor",
        description:
          "A long corridor with walls on both sides, connecting various rooms and areas.",
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
        name: "Treasure Room",
        description:
          "A small room containing a chest, accessible through a door.",
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
        name: "Central Chamber",
        description:
          "A large open area with multiple exits and stairs, serving as the central hub of the dungeon.",
        coordinateArea: {
          from: {
            x: 5,
            y: 6,
          },
          to: {
            x: 14,
            y: 11,
          },
        },
      },
      {
        name: "Lower Corridor",
        description:
          "A narrow passage leading to the lower parts of the dungeon, with stairs at the end.",
        coordinateArea: {
          from: {
            x: 0,
            y: 9,
          },
          to: {
            x: 14,
            y: 12,
          },
        },
      },
      {
        name: "Final Room",
        description:
          "The last room in the dungeon, featuring pillars and a wide open space.",
        coordinateArea: {
          from: {
            x: 0,
            y: 13,
          },
          to: {
            x: 14,
            y: 16,
          },
        },
      },
    ],
  },
];

