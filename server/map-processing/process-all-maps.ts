// import analyzeAllUrlMaps from "@/map-processing/analyze-all-url-maps.ts";
import writeAllMapOptions from "@/map-processing/fileIO/write-all-map-options.ts";
import analyzeAllAvenirMaps from "@/map-processing/analyze-all-avenir-maps.ts";

export default async function processAllMaps(): Promise<void> {
  // When using avenir maps, won't use maps from the FE repo, their tiles are glitching for some reason.
  // await analyzeAllUrlMaps();
  await analyzeAllAvenirMaps();

  await writeAllMapOptions();
}

if (import.meta.main) {
  await processAllMaps();
  console.log("✅ All maps processed successfully.");
}

