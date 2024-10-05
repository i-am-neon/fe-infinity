@echo off
setlocal enabledelayedexpansion

echo ---------------------------

set "currDir=%~dp0"

copy "%currDir%WithAnimations.gba" "%currDir%temp.gba"

echo ---------------------------
echo Assembling ROM. Please wait...
echo ---------------------------

"%currDir%EA\ColorzCore.exe" A FE8 "-output:%currDir%temp.gba" "-input:%currDir%Ultrafile.event" "--nocash-sym"

@REM for some reason it needs to be a different name to work...
copy "%currDir%temp.gba" "%currDir%hack.gba"

"%currDir%sym\SymCombo.exe" "%currDir%hack.sym" "%currDir%hack.sym" "%currDir%Clean.sym"
"%currDir%ups\ups.exe" diff -b "%currDir%Clean.gba" -m "%currDir%hack.gba" -o "%currDir%hack.ups"

@REM Delete temp.gba
del "%currDir%temp.gba"