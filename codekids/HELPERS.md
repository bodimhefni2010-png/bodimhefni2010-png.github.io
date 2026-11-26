# Code Kids lesson file rules
Each language lives in its own file: codekids/content/<id>.json  ({"id":"<id>","L":[lessons]}). The app loads it live, no new APK.
Ids: html css js ts cpp java cs php sql git react dart go rust kt py. Only write your own file.
Lesson: {"t":title,"intro":text,"s":[{"h":heading,"p":Arabic explanation,"c":English code}, ...>=3],"tip":text,
 "q":[{"q":question,"o":[options],"a":correctIndex}, ...>=3],"hw":homework text,
 "ex":[{"p":exercise statement,"hint":hint,"sol":"full English solution code","why":"Arabic explanation of the solution"}, ...>=2],
 "vid":"11-char YouTube id (verified by oEmbed)","vby":"channel name"}
Validate: node validate.js content/<id>.json
