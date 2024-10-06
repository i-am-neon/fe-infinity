@echo off
setlocal enabledelayedexpansion

echo ---------------------------

set "currDir=%~dp0"

copy "%currDir%WithAnimations.gba" "%currDir%hack.gba"

echo ---------------------------
echo Assembling ROM. Please wait...
echo ---------------------------

"%currDir%EA\ColorzCore.exe" A FE8 "-output:%currDir%hack.gba" "-input:%currDir%Ultrafile.event" "--nocash-sym"

"%currDir%sym\SymCombo.exe" "%currDir%hack.sym" "%currDir%hack.sym" "%currDir%Clean.sym"
@REM TODO: fix. For some reason the act of making the UPS patch causes the ROM to be corrupted.
@REM "%currDir%ups\ups.exe" diff -b "%currDir%Clean.gba" -m "%currDir%hack.gba" -o "%currDir%hack.ups"
