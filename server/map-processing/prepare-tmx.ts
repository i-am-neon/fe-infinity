export default function prepareTmx({
  tmx,
  mapName,
  tileset,
}: {
  tmx: string;
  mapName: string;
  tileset: string;
}): string {
  // Extract ObjectType, PaletteID, and TileConfig from the tileset
  const objectType = `0x${tileset.slice(0, 2)}`;
  const paletteID = `0x${tileset.slice(4, 6)}`;
  const tileConfig = `0x${tileset.slice(6, 8)}`;

  // Update the image source path
  let updatedTmx = tmx.replace(
    /<image source="[^"]+"/,
    `<image source="Tilesets/${tileset}.png"`
  );

  // Define the additional properties for the Main layer
  const mainLayerProperties = `
   <property name="Anims" value="_3CAnims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="MapChangesID" value="${mapName}Changes"/>
   <property name="MapID" value="${mapName}Map"/>
   <property name="ObjectType" value="${objectType}"/>
   <property name="PaletteID" value="${paletteID}"/>
   <property name="TileConfig" value="${tileConfig}"/>`;

  // Insert the additional properties after the <property name="Main" value=""/> line
  updatedTmx = updatedTmx.replace(
    /(<property name="Main" value="[^"]*"\s*\/>)/,
    `$1${mainLayerProperties}`
  );

  // Rename the "Wall" layer to "Broken_Wall"
  updatedTmx = updatedTmx.replace(
    /<layer name="Wall"/,
    `<layer name="Broken_Wall"`
  );

  return updatedTmx;
}

