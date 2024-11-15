import convertToRawUrl from "@/map-processing/convert-to-raw-url.ts";

export type MapUrl = {
  image: string;
  tmx: string;
};

const getMapUrls = async (): Promise<MapUrl[]> => {
  // Get the directory of the current script
  const thisScriptDir = new URL(".", import.meta.url).pathname;
  const urlsPath = thisScriptDir + "urls.json";

  // Read and parse the JSON file
  const rawData = await Deno.readTextFile(urlsPath);
  const data = JSON.parse(rawData) as MapUrl[];

  // Convert each tmx URL to its raw version
  const updatedData = data.map((mapUrl) => ({
    ...mapUrl,
    tmx: convertToRawUrl(mapUrl.tmx),
  }));

  return updatedData;
};

export default getMapUrls;

if (import.meta.main) {
  const mapUrls = await getMapUrls();
  console.log(mapUrls);
}
