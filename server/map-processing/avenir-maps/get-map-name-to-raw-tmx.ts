export default async function getMapNameToRawTmx(): Promise<{
  [key: string]: { rawTmx: string };
}> {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;
  const dataPath = thisScriptDir + "data";

  // Read all files in the data directory that end in .png
  const mapData: { [key: string]: { rawTmx: string } } = {};
  for await (const dirEntry of Deno.readDir(dataPath)) {
    if (dirEntry.isFile && dirEntry.name.endsWith(".png")) {
      // Remove the .png extension to get the map name
      const mapName = dirEntry.name.replace(".png", "");
      // Read the corresponding .tmx file
      const tmxFilePath = `${dataPath}/${mapName}.tmx`;
      const rawTmx = await Deno.readTextFile(tmxFilePath);
      // Add the map name and rawTmx to the mapData object
      mapData[mapName] = { rawTmx };
    }
  }

  return mapData;
}

if (import.meta.main) {
  const mapData = await getMapNameToRawTmx();
  console.log(mapData);
}

