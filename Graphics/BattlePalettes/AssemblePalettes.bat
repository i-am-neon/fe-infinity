@echo off

setlocal enabledelayedexpansion

rem png2dmp.exe: Calls png2dmp.exe for all .png files in folder & subfolders
rem Does not call png2dmp for files where the existing .dmp file is newer than the .png file

set FILE_MATCH=*.png
set png2dmp=%~dp0Png2Dmp.exe

for /R "%~dp0" %%F in (%FILE_MATCH%) do (
    @REM echo ------------------------------------------------------------
    @REM echo Processing file: "%%F"
    set SHOULD_COMPILE=0

    rem Define the cache directory path
    set "CACHE_DIR=%%~dF%%~pFcache"
    @REM echo Cache directory: "!CACHE_DIR!"

    rem Ensure the cache directory exists
    if not exist "!CACHE_DIR!" (
        @REM echo Creating cache directory: "!CACHE_DIR!"
        mkdir "!CACHE_DIR!"
    ) else (
        @REM echo Cache directory already exists.
    )

    rem Define the dump file path
    set "DUMP_FILE=!CACHE_DIR!\%%~nF.dmp"
    @REM echo Dump file path: "!DUMP_FILE!"

    rem Check if the dump file exists and is up to date
    if exist "!DUMP_FILE!" (
        @REM echo Dump file exists. Checking if it is up to date...
        xcopy /DYLR "%%F" "!DUMP_FILE!*" >nul
        if errorlevel 1 (
            @REM echo Source file is newer. Will recompile.
            set SHOULD_COMPILE=1
        ) else (
            @REM echo Dump file is up to date. Skipping compilation.
        )
    ) else (
        @REM echo Dump file does not exist. Will compile.
        set SHOULD_COMPILE=1
    )

    rem Compile if necessary
    if "!SHOULD_COMPILE!"=="1" (
        @REM echo Assembling "%%~nxF"...
        pushd "%%~dpF"
        @REM echo Current directory: "%CD%"
        png2dmp "%%~nxF" -po "temp.dmp"
        if exist "temp.dmp" (
            @REM echo "temp.dmp" created successfully.
        ) else (
            @REM echo ERROR: "temp.dmp" was not created!
            popd
            goto :EOF
        )

        rem Process temp.dmp with PaletteCondenser
        if exist PaletteCondenser.exe (
            PaletteCondenser "temp.dmp" "temp.dmp"
            @REM echo "temp.dmp" processed with PaletteCondenser.
        ) else (
            @REM echo WARNING: PaletteCondenser.exe not found. Skipping this step.
        )

        rem Move temp.dmp to the cache directory
        @REM echo Moving "temp.dmp" to "!DUMP_FILE!"
        move /Y "temp.dmp" "!DUMP_FILE!"
        if exist "!DUMP_FILE!" (
            @REM echo Successfully moved "temp.dmp" to "!DUMP_FILE!"
        ) else (
            @REM echo ERROR: Failed to move "temp.dmp" to "!DUMP_FILE!"
        )

        rem Clean up any leftover dmp file in the current directory
        @REM echo Checking for .dmp files in the current directory...
        if exist "%%~nF.dmp" (
            @REM echo Deleting "%%~nF.dmp" in the current directory...
            del "%%~nF.dmp"
        )

        popd
    )
    echo BattlePalettes: Finished processing "%%~nxF"
)

echo All files processed.
if /I not [%1]==[noPause] (
    pause
)