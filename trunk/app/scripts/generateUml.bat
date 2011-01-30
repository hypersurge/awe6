:: This utlity requires haxelib haxeumlgen (https://github.com/ianxm/haxeumlgen), which requires Graphviz (http://www.graphviz.org/)

cd ..
haxe -cp src -swf9 bin/awe6.swf -swf-version 10 -xml scripts/chxdoc/output.xml --no-output awe6.Types
if not exist docs mkdir docs
rmdir docs\uml /s /q
haxelib run haxeumlgen -c -o %CD%\docs\all_uml\ %CD%\scripts\chxdoc\output.xml
if not exist docs\uml mkdir docs\uml
move /Y docs\all_uml\Root.* docs\uml\
move /Y docs\all_uml\Root.* docs\uml\
move /Y docs\all_uml\awe6.core.html docs\uml\
move /Y docs\all_uml\awe6.core.png docs\uml\
move /Y docs\all_uml\awe6.interfaces.html docs\uml\
move /Y docs\all_uml\awe6.interfaces.png docs\uml\
rmdir docs\all_uml /s /q
del scripts\chxdoc\output.xml  /q /f
