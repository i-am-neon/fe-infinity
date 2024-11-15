import writeFileToRomBuilder from "@/fileIO/write-file-to-rom-builder.ts";
import type { ChapterMap } from "@/types/ChapterMap.ts";
import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";
import getMapIdFromMapName from "@/lib/get-map-id-from-map-name.ts";
import getMapChangesFromMapName from "@/lib/get-map-changes-from-map-name.ts";

export default async function writeChapterMap({
  chapterMap,
}: {
  chapterMap: ChapterMap;
}): Promise<void> {
  await writeFileToRomBuilder(
    `Maps/data/${chapterMap.name}.tmx`,
    chapterMap.tmx
  );
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Definitions/Maps.s",
    content: getMapIdFromMapName(chapterMap.name),
    isOnNewLine: true,
  });
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Definitions/Maps.s",
    content: getMapChangesFromMapName(chapterMap.name),
    isOnNewLine: true,
  });
}

if (import.meta.main) {
  const chapterMap: ChapterMap = {
    tmx: `<?xml version="1.0" encoding="UTF-8"?>
<map version="1.0" orientation="orthogonal" renderorder="right-down" width="15" height="10" tilewidth="16" tileheight="16" nextobjectid="1">
 <tileset firstgid="1" name="Snowy Tileset Indoor" tilewidth="16" tileheight="16">
  <image source="Tilesets/Snowy Tileset Indoor.png" width="512" height="512"/>
 </tileset>
 <layer name="Tile Layer 1" width="15" height="10">
  <properties>
   <property name="Anims" value="0"/>
   <property name="ChapterID" value="PrologueChapter"/>
   <property name="Main" value=""/>
   <property name="MapID" value="AltianDungeonCutsceneMap"/>
   <property name="ObjectType" value="IndoorSnowyObjectSet"/>
   <property name="PaletteID" value="IndoorSnowyPalette"/>
   <property name="TileConfig" value="IndoorSnowyTileConfig"/>
  </properties>
  <data encoding="base64" compression="zlib">
   eJwTZ2RgCGFiYPjOwMAgzgjBxPK/MkDYP6BsUvnk6jVhQuAvTKTx7zMgsCkjaXyY/8nBXxnIx7Aw0GNG9QsuDFIH02MGtNsciO2A7AYGVP9g49sh6UHWe58IjKwXALA4VV0=
  </data>
 </layer>
</map>
`,
    name: "AltianDungeonCutsceneMap",
    description: "...",
  };

  await writeChapterMap({
    chapterMap,
  });
}

