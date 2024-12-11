import defineMapAreas from "@/map-processing/ai/define-map-areas.ts";
import writeMapData from "@/map-processing/fileIO/write-map-data.ts";
import writeMapImage from "@/map-processing/fileIO/write-map-image.ts";
import getInfoFromTmx from "@/map-processing/get-info-from-tmx/get-info-from-tmx.ts";
import getMapNameFromTmxUrl from "@/map-processing/get-map-name-from-tmx-url.ts";
import prepareTmx from "@/map-processing/prepare-tmx.ts";
import { MapData } from "@/map-processing/types/MapData.ts";
import { MapDataPreAI } from "@/map-processing/types/MapDataPreAI.ts";
import getMapNameToRawTmx from "@/map-processing/avenir-maps/get-map-name-to-raw-tmx.ts";

export default async function analyzeAllAvenirMaps(): Promise<void> {
  const mapNameToRawTmx = await getMapNameToRawTmx();

  // Run each map analysis in parallel
  await Promise.all(
    Object.entries(mapNameToRawTmx).map(async ([mapName, { rawTmx }]) => {
      const {
        tileset,
        height,
        width,
        terrainGrid,
        pointsOfInterest,
        interactableTiles,
      } = getInfoFromTmx(rawTmx);

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
        interactableTiles,
        areas,
      };

      // Write map data and image concurrently
      await Promise.all([
        writeMapData(mapData),
        // mapUrl.image
        //   ? writeMapImage({ mapName, imageUrl: mapUrl.image })
        //   : Promise.resolve(),
      ]);
    })
  );

  console.log("All maps analyzed and written successfully.");
}

if (import.meta.main) {
  await analyzeAllAvenirMaps();
}

