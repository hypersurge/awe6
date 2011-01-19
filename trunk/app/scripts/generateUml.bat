:: This utlity requires haxelib haxeumlgen (https://github.com/ianxm/haxeumlgen), which requires Graphviz (http://www.graphviz.org/)

cd ..
haxe -cp src -swf9 bin/awe6.swf -swf-version 10 -xml scripts/chxdoc/output.xml --no-output awe6.Types
if not exist %CD%\docs mkdir %CD%\docs
haxelib run haxeumlgen -c -o %CD%\docs\uml\ %CD%\scripts\chxdoc\output.xml
del scripts\chxdoc\output.xml  /q /f
