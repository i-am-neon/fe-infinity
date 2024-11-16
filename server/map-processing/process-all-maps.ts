import analyzeAllMaps from "@/map-processing/analyze-all-maps.ts";
import writeAllMapOptions from "@/map-processing/fileIO/write-all-map-options.ts";

export default async function processAllMaps(): Promise<void> {
  await analyzeAllMaps();

  await writeAllMapOptions();
}

if (import.meta.main) {
  await processAllMaps();
  console.log("✅ All maps processed successfully.");
}

