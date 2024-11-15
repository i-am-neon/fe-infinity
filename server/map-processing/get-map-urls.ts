export type MapUrl = {
  image: string;
  tmx: string;
};

const getMapUrls = async (): Promise<MapUrl[]> => {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;
  const urlsPath = thisScriptDir + "urls.json";

  const rawData = await Deno.readTextFile(urlsPath);
  const data = JSON.parse(rawData) as MapUrl[];
  return data;
};

export default getMapUrls;

if (import.meta.main) {
  await getMapUrls();
}

