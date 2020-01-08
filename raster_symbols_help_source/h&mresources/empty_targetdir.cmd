@ECHO ON
REM P1 "%1" contains folder to empty
IF "%1" == "" EXIT
:delete
del /Q %1*.*
