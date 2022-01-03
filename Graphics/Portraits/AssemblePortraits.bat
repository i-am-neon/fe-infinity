
@echo off

setlocal enabledelayedexpansion

rem portraitformatter.exe: Calls portraitformatter.exe for all .png files in folder & subfolders
rem does not call portraitformatter for files where the existing .dmp file is newer than the .png file

set FILE_MATCH=*.png
set portraitformatter=%~dp0PortraitFormatter.exe

if not exist cache ( mkdir cache )

for /R "%~dp0" %%F in (%FILE_MATCH%) do (
    set SHOULD_COMPILE=0
    set DUMP_FILE=%%~dF%%~pFcache\%%~nF%.dmp
    if exist "!DUMP_FILE!" (
		set NEWER=%%F
		xcopy /DYLR "%%F" "!DUMP_FILE!*" | findstr /BC:"0" >nul && set NEWER=!DUMP_FILE!
		if "!NEWER!" == "%%F" (
			set SHOULD_COMPILE=1
		)
    ) else (
		set SHOULD_COMPILE=1
    )
	if /I "!SHOULD_COMPILE!" EQU "1" (
		echo Assembling "%%~nxF"...
		cd "%%~dpF"
		portraitformatter "%%~nxF" -o "!DUMP_FILE!"
    )
)

echo Done!
if /I not [%1]==[noPause] (
	pause
)
