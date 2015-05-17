:: This utlity requires chxdoc (http://code.google.com/p/caffeine-hx/wiki/ChxDoc) which is provided in Windows compiled format for convenience

cd ..
rmdir docs /s /q
haxe -cp src --no-output -xml scripts/chxdoc/output.xml awe6.Types
cd scripts/chxdoc
chxdoc -o ../../docs --tmpDir=_tmp --installTemplate=true --templateDir=template --generateTodoFile=true --showTodoTags=true --includeOnly=awe6.core.,awe6.interfaces.,Array,Bool,Class,Enum,Float,Hash,Int,List,Dynamic,String,Type,UInt,Void --title="awe6" --subtitle="Inverted Game Framework" --ignoreRoot=false output.xml
rmdir _tmp /s /q
del output.xml /q /f
cd ..
start ../docs/index.html

