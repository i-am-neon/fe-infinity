import getInfoFromTmx from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";
import getMapUrls from "@/map-processing/get-map-urls.ts";
import prepareTmx from "@/map-processing/prepare-tmx.ts";
import { MapDataPreAI } from "@/map-processing/types/MapDataPreAI.ts";
import defineMapAreas from "@/map-processing/ai/define-map-areas.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import writeMapData from "@/map-processing/fileIO/write-map-data.ts";
import writeMapImage from "@/map-processing/fileIO/write-map-image.ts";
import getPathWithinAssetsDir from "@/fileIO/get-path-within-assets-dir.ts";

export default async function analyzeAllMaps(): Promise<void> {
  let mapUrls = await getMapUrls();
  mapUrls = mapUrls.slice(0, 1);

  for (const mapUrl of mapUrls) {
    const rawTmx = await fetch(mapUrl.tmx).then((res) => res.text());
    if (rawTmx.includes("<!DOCTYPE html>")) {
      throw new Error(
        "You must first run `convertToRawUrl` to convert the tmx urls to raw text"
      );
    }
    const { tileset, height, width, terrainGrid, pointsOfInterest } =
      getInfoFromTmx(rawTmx);
    const mapName = getMapNameFromTmxUrl(mapUrl.tmx);

    const finalTmx = prepareTmx({
      mapName,
      tmx: rawTmx,
      tileset: tileset,
    });

    const mapDataPreAI: MapDataPreAI = {
      width: width,
      height: height,
      terrainGrid: terrainGrid,
      pointsOfInterest: pointsOfInterest,
      mapName,
      tmx: finalTmx,
    };

    const { description, areas } = await defineMapAreas(mapDataPreAI);

    const mapData: MapData = {
      name: mapName,
      description,
      tmx: finalTmx,
      height,
      width,
      terrainGrid,
      pointsOfInterest,
      areas,
    };

    writeMapData(mapData);
    writeMapImage({ mapName, imageUrl: mapUrl.image });
    // I don't think I need the tmx, since they're in the yaml
    // Deno.writeTextFile(
    //   getPathWithinAssetsDir("maps/" + mapName + ".tmx"),
    //   finalTmx
    // );
  }
}

if (import.meta.main) {
  await analyzeAllMaps();
}

