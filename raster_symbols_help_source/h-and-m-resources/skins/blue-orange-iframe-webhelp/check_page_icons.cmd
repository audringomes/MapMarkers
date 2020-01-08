@ECHO ON
REM Delete unused icons from published content
REM 1 <OUTPUTFILEPATH>
REM 2 <LOGO_NAME>
REM 3 <FAVICONNAME>
REM 4 <PAGE_ICON>
IF NOT "%2"=="logo_name.png" del %1logo_name.png
IF NOT "%3"=="page_icon.ico" del %1page_icon.ico
IF NOT "%4"=="page_icon.png" del %1page_icon.png


