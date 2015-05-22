@echo off
set headers=headers.txt
set revision=revision.txt
git rev-list HEAD > %headers%
set /a count=0
for /f %%a in (%headers%) do (
  set /a count+=1
)
echo %count% > %revision%
for /f %%a in (%headers%) do (
  echo %%a >> %revision%
  goto :myBreak
)
:myBreak
del %headers%
