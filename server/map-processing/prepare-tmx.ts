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
  const objectType = tileset.slice(0, 2);
  const paletteID = tileset.slice(4, 6);
  const tileConfig = tileset.slice(6, 8);

  // Update the image source path
  let updatedTmx = tmx.replace(
    /<image source="[^"]+"/,
    `<image source="Tilesets/${tileset}.png"`
  );

  // Define the additional properties for the Main layer
  const additionalProperties = `
   <property name="Anims" value="_${objectType}Anims"/>
   <property name="ChapterID" value="<CHAPTERID>"/>
   <property name="MapChangesID" value="${mapName}Changes"/>
   <property name="MapID" value="${mapName}Map"/>
   <property name="ObjectType" value="0x${objectType}"/>
   <property name="PaletteID" value="0x${paletteID}"/>
   <property name="TileConfig" value="0x${tileConfig}"/>`;

  // Process the Main layer
  updatedTmx = updatedTmx.replace(
    /(<layer name="Main"[\s\S]*?)(<\/layer>)/,
    (_, p1, p2) => {
      // Check if there's a <properties> tag in the Main layer
      if (/<properties>[\s\S]*?<\/properties>/.test(p1)) {
        // Main layer has properties
        if (/<property name="Main"[\s\S]*?\/>/.test(p1)) {
          // <property name="Main"> exists, insert additional properties after it
          return (
            p1.replace(
              /(<property name="Main"[^>]*\/>)/,
              `$1${additionalProperties}`
            ) + p2
          );
        } else {
          // <property name="Main"> doesn't exist, add it and additional properties
          return (
            p1.replace(
              /(<properties>)/,
              `$1\n   <property name="Main" value=""/>${additionalProperties}`
            ) + p2
          );
        }
      } else {
        // No properties tag, add one after the layer opening tag and before <data>
        return (
          p1.replace(
            /(<layer name="Main"[^>]*>)/,
            `$1\n  <properties>\n   <property name="Main" value=""/>${additionalProperties}\n  </properties>`
          ) + p2
        );
      }
    }
  );

  // Rename the "Wall" layer to "Broken_Wall"
  updatedTmx = updatedTmx.replace(
    /<layer name="Wall"/,
    `<layer name="Broken_Wall"`
  );

  return updatedTmx;
}

