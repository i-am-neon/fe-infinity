import getMapUrls from "@/map-processing/get-map-urls.ts";
import getInfoFromTmx from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import prepareTmx from "@/map-processing/prepare-tmx.ts";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";

export default async function analyzeAllMaps(): Promise<void> {
  const mapUrls = await getMapUrls();

  for (const mapUrl of mapUrls) {
    const info = getInfoFromTmx(mapUrl.tmx);
    const mapName = getMapNameFromTmxUrl(mapUrl.tmx);

    const finalTmx = prepareTmx({
      mapName,
      tmx: mapUrl.tmx,
      tileset: info.tileset,
    });
  }
}

