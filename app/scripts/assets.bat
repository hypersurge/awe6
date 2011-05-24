:: Copies all needed runtime assets to bin folder (to maintain bin as a scratch space)

if not exist ..\src\assets call generateIntrinsics.bat

:: FOR /F %%i IN ('DIR /B /O:D 
:: "..\src\assets\_readme.txt" 
:: "..\assets\audio.swf"
:: "..\assets\gui.swf"
:: "..\assets\preloader.swf"
:: ') DO SET NEWEST=%%i
:: IF NOT "%NEWEST%" == "..\src\assets\_readme.txt" call generateIntrinsics.bat

xcopy ..\assets\_readme.txt ..\bin\* /Q /Y
xcopy ..\assets\audio.swf ..\bin\* /Q /Y
xcopy ..\assets\config.xml ..\bin\* /Q /Y
xcopy ..\assets\demo.htm ..\bin\* /Q /Y
xcopy ..\assets\jeash.htm ..\bin\* /Q /Y
xcopy ..\assets\gui.swf ..\bin\* /Q /Y
