@echo off

setlocal enabledelayedexpansion

rem s2ea.exe: Calls s2ea.exe for all .s files in folder & subfolders
rem does not call s2ea for files where the existing .event file is newer than the .s file

set FILE_MATCH=*.s
set s2ea=s2ea.exe

if not exist "MusicTest/cache" ( mkdir "MusicTest/cache" )

for /R "%~dp0MusicTest" %%F in (%FILE_MATCH%) do (
    set SHOULD_COMPILE=0
    set "EVENT_FILE=%%~dF%%~pFcache\%%~nF.event"
    if exist "!EVENT_FILE!" (
        set NEWER=%%F
        xcopy /DYLR "%%F" "!EVENT_FILE!" | findstr /BC:"0" >nul && set NEWER=!EVENT_FILE!
        if "!NEWER!" == "%%F" (
            set SHOULD_COMPILE=1
        )
    ) else (
        set SHOULD_COMPILE=1
    )
    if /I "!SHOULD_COMPILE!" EQU "1" (
        echo Assembling "%%~nxF"...
        cd "%%~dpF"
        s2ea "%%~nxF"
        rem Move the new event file to the cache.
        move "%%~dF%%~pF%%~nF.event" "!EVENT_FILE!"
    )
)

if /I not [%2]==[noRefs] (
    cd "%~dp0MusicTest"
    python "MusicRef.py" "../Events" "../CSV/Tables/ChapterData/ChapterDataTable.csv" "../ASM/PersonalMusic/PersonalMusic.event" "OtherRefs.txt" "../Definitions/Music.s" "MusicRefs.txt"
)

if /I not [%1]==[noPause] (
    pause
)