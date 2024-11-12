import appendToFileInRomBuilderSync from "@/fileIO/append-to-file-in-rom-builder-sync.ts";

export default function finalizeFiles(): void {
  // Finalize Chapter data files
  appendToFileInRomBuilderSync({
    pathWithinRomBuilder: "Events/build/MasterEventInstaller.event",
    content: `EndMainPointer:
END_MAIN`,
    isOnNewLine: true,
  });
}
