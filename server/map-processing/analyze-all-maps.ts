import defineMapAreas from "@/map-processing/ai/define-map-areas.ts";
import writeMapData from "@/map-processing/fileIO/write-map-data.ts";
import writeMapImage from "@/map-processing/fileIO/write-map-image.ts";
import getInfoFromTmx from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";
import getMapUrls from "@/map-processing/get-map-urls.ts";
import prepareTmx from "@/map-processing/prepare-tmx.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { MapDataPreAI } from "@/map-processing/types/MapDataPreAI.ts";

export default async function analyzeAllMaps(): Promise<void> {
  const mapUrls = await getMapUrls();

  // Run each map analysis in parallel
  await Promise.all(
    mapUrls.map(async (mapUrl) => {
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
        tileset,
      });

      const mapDataPreAI: MapDataPreAI = {
        width,
        height,
        terrainGrid,
        pointsOfInterest,
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

      // Write map data and image concurrently
      await Promise.all([
        writeMapData(mapData),
        mapUrl.image
          ? writeMapImage({ mapName, imageUrl: mapUrl.image })
          : Promise.resolve(),
      ]);
    })
  );

  console.log("All maps analyzed and written successfully.");
}

if (import.meta.main) {
  await analyzeAllMaps();
}
