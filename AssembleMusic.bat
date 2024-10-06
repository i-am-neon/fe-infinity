@echo off

setlocal enabledelayedexpansion

rem s2ea.exe: Calls s2ea.exe for all .s files in folder & subfolders
rem Does not call s2ea for files where the existing .event file is newer than the .s file

set FILE_MATCH=*.s
set s2ea=s2ea.exe

rem Ensure the cache directory exists
if not exist "Music/cache" ( 
    echo Creating Music/cache directory...
    mkdir "Music/cache" 
)

for /R "%~dp0Music" %%F in (%FILE_MATCH%) do (
    @REM echo ------------------------------------------------------------
    @REM echo Processing file: "%%F"
    set SHOULD_COMPILE=0

    rem Define the event file path inside the cache directory
    set "EVENT_FILE=%%~dF%%~pFcache\%%~nF.event"
    @REM echo Event file path: "!EVENT_FILE!"

    rem Check if the event file exists and if it is up to date
    if exist "!EVENT_FILE!" (
        @REM echo Event file exists. Checking if it is up to date...
        xcopy /DYLR "%%F" "!EVENT_FILE!*" >nul
        if errorlevel 1 (
            @REM echo Source file is newer. Will recompile.
            set SHOULD_COMPILE=1
        ) else (
            @REM echo Event file is up to date. Skipping compilation.
        )
    ) else (
        @REM echo Event file does not exist. Will compile.
        set SHOULD_COMPILE=1
    )

    rem Compile if necessary
    if "!SHOULD_COMPILE!"=="1" (
        @REM echo Assembling "%%~nxF"...
        pushd "%%~dpF"
        @REM echo Current directory: "%CD%"
        s2ea "%%~nxF"

        rem Check if the .event file was created
        if exist "%%~nF.event" (
            @REM echo .event file created successfully: "%%~nF.event"
        ) else (
            @REM echo ERROR: .event file was not created!
            popd
            goto :EOF
        )

        rem Move the new .event file to the cache directory
        @REM echo Moving "%%~nF.event" to "!EVENT_FILE!"
        move /Y "%%~nF.event" "!EVENT_FILE!"
        if exist "!EVENT_FILE!" (
            @REM echo Successfully moved "%%~nF.event" to "!EVENT_FILE!"
        ) else (
            @REM echo ERROR: Failed to move "%%~nF.event" to "!EVENT_FILE!"
        )
        popd
    )
    echo Music: Finished processing "%%~nxF"
)

rem Run MusicRef.py if the second argument is not "noRefs"
if /I not [%2]==[noRefs] (
    echo Running MusicRef.py...
    cd "%~dp0Music"
    py "MusicRef.py" "../Events" "../CSV/Tables/ChapterData/ChapterDataTable.csv" "../ASM/PersonalMusic/PersonalMusic.event" "OtherRefs.txt" "../Definitions/Music.s" "MusicRefs.txt"
)

rem Pause if the first argument is not "noPause"
if /I not [%1]==[noPause] (
    pause
)