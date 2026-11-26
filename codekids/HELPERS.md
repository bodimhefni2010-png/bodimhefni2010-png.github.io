# Code Kids lesson file rules
Each language lives in its own file: codekids/content/<id>.json  ({"id":"<id>","L":[lessons]}).
Ids: html css js ts cpp java cs php sql git react dart go rust kt py. Only write your own file.
Lesson: {"t":title,"intro":text,"s":[{"h":heading,"p":Arabic explanation,"c":English code}],"tip":text,"q":[{"q":question,"o":[options],"a":correctIndex}],"hw":homework}
Validate: node validate.js content/<id>.json
