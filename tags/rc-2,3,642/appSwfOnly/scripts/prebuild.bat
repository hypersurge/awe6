:: Run prior to haxe compilation of demo project
exit

@echo off
cd scripts
if exist ..\bin rmdir ..\bin /s /q
call assets.bat
