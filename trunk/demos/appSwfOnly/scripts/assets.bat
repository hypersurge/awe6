:: Copies all needed runtime assets to bin folder (to maintain bin as a scratch space)

:: xcopy ..\assets\_readme.txt ..\bin\* /Q /Y
xcopy ..\assets\config.xml ..\bin\* /Q /Y
xcopy ..\assets\audio.swf ..\bin\* /Q /Y
xcopy ..\assets\gui.swf ..\bin\* /Q /Y

if not exist ..\src\assets call generateIntrinsics.bat
