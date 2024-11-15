import getMapUrls from "@/map-processing/get-map-urls.ts";
import getInfoFromTmx, {
  PointOfInterest,
} from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import prepareTmx from "@/map-processing/prepare-tmx.ts";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";

export default async function analyzeAllMaps(): Promise<void> {
  const mapUrls = await getMapUrls();

  const mapDatas: {
    width: number;
    height: number;
    terrainGrid: string[][];
    pointsOfInterest: PointOfInterest[];
    mapName: string;
    tmx: string;
  }[] = [];

  for (const mapUrl of mapUrls) {
    const rawTmx = await fetch(mapUrl.tmx).then((res) => res.text());
    if (rawTmx.includes("<!DOCTYPE html>")) {
      throw new Error(
        "You must first run `convertToRawUrl` to convert the tmx urls to raw text"
      );
    }
    const info = getInfoFromTmx(rawTmx);
    const mapName = getMapNameFromTmxUrl(mapUrl.tmx);

    const finalTmx = prepareTmx({
      mapName,
      tmx: rawTmx,
      tileset: info.tileset,
    });

    mapDatas.push({
      width: info.width,
      height: info.height,
      terrainGrid: info.terrainGrid,
      pointsOfInterest: info.pointsOfInterest,
      mapName,
      tmx: finalTmx,
    });

    console.log("mapDatas", JSON.stringify(mapDatas, null, 2));
  }
}

if (import.meta.main) {
  await analyzeAllMaps();
}

