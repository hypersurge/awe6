:: This utlity requires chxdoc (http://code.google.com/p/caffeine-hx/wiki/ChxDoc) which is provided in Windows compiled format for convenience

cd ..
rmdir docs /s /q
haxe -cp src -swf9 bin/awe6.swf -swf-version 10 -xml scripts/chxdoc/output.xml --no-output awe6.Types
cd scripts/chxdoc
chxdoc -o ../../docs --tmpDir=_tmp --installTemplate=true --templateDir=template --generateTodoFile=true --showTodoTags=true --includeOnly=awe6.core.,awe6.interfaces. --title="awe6" --subtitle="Inverted Game Framework" --ignoreRoot=true output.xml
rmdir _tmp /s /q
del output.xml /q /f
cd ..
start ../docs/index.html

