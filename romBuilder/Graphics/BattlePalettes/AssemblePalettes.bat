@echo off

setlocal enabledelayedexpansion

rem png2dmp.exe: Processes all .png files in folder & subfolders
rem Skips processing if the existing .dmp file is newer than the .png file

set "FILE_MATCH=*.png"
set "png2dmp=%~dp0png2dmp.exe"
set "paletteCondenser=%~dp0PaletteCondenser.exe"
set "compress=%~dp0compress.exe"

rem Adjust the path to your actual Graphics\BattlePalettes directory
set "BASE_DIR=%~dp0"

for /R "%BASE_DIR%" %%F in (%FILE_MATCH%) do (
    set "SHOULD_COMPILE=0"
    set "CACHE_DIR=%%~dpFcache"

    rem Create the cache directory if it doesn't exist
    if not exist "!CACHE_DIR!" (
        mkdir "!CACHE_DIR!"
    )

    rem Set the path for the output .dmp file in the cache directory
    set "DUMP_FILE=!CACHE_DIR!\%%~nF.dmp"

    if exist "!DUMP_FILE!" (
        xcopy /D /L /Y /R "%%F" "!DUMP_FILE!" >nul
        if errorlevel 1 (
            set "SHOULD_COMPILE=1"
        )
    ) else (
        set "SHOULD_COMPILE=1"
    )

    if "!SHOULD_COMPILE!"=="1" (
        echo Assembling "%%~nxF"...

        rem Change to the directory of the .png file
        cd "%%~dpF"

        rem Run png2dmp to generate temp.dmp
        "%png2dmp%" "%%~nxF" -po "temp.dmp"

        rem Run PaletteCondenser on temp.dmp
        "%paletteCondenser%" "temp.dmp" "temp.dmp"

        rem Compress temp.dmp to create the final .dmp file
        "%compress%" "temp.dmp" "%%~nF.dmp"

        rem Move the final .dmp file to the cache directory
        move "%%~nF.dmp" "!DUMP_FILE!"

        rem Delete temp.dmp
        del "temp.dmp"
    ) else (
				echo "%%~nxF" is up to date.
		)
)

echo Done!
if /I not "%1"=="noPause" (
    pause
)