@ECHO ON
REM Expect outputpath as 1 and CSH_KEY as 2
IF "%2" == "contextid" EXIT
:replace
ECHO Replacing CSH KEY...
powershell -Command "(gc %1) -replace '""contextid"', '""%2"' | Out-File %1"

