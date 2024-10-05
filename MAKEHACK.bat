@echo off
setlocal enabledelayedexpansion

echo ---------------------------

set "currDir=%~dp0"

copy "%currDir%WithAnimations.gba" "%currDir%Avenir.gba"

echo "Copied WithAnimations.gba to Avenir.gba"
echo "File size of Avenir.gba before assembly:"
dir /b /os "%currDir%Avenir.gba"

echo ---------------------------
echo Assembling ROM. Please wait...
echo ---------------------------

"%currDir%EA\ColorzCore.exe" A FE8 "-output:%currDir%Avenir.gba" "-input:%currDir%Ultrafile.event" "--nocash-sym"

echo "ColorzCore command completed."
echo "File size of Avenir.gba after assembly:"
dir /b /os "%currDir%Avenir.gba"

pause

"%currDir%sym\SymCombo.exe" "%currDir%Avenir.sym" "%currDir%Avenir.sym" "%currDir%Clean.sym"

"%currDir%ups\ups.exe" diff -b "%currDir%Clean.gba" -m "%currDir%Avenir.gba" -o "%currDir%Avenir.ups"

if /I not [%1]==[noPause] (
    pause
)