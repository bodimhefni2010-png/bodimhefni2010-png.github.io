TRACKS.push(
{id:'php',t:'PHP',e:'🐘',c:'#818cf8',d:'برمجة السيرفر والمواقع الديناميكية',lang:null,
v:[V('Learn PHP 5 In Arabic','Elzero Web School','PLDoPjvoNmBAzH72MTPuAAaYfReraNlQgM'),V('PHP and MYSQL (OOP)','TheNewBaghdad','PLF8OvnCBlEY1bFcTW9JKKO7WJn_Bf9LZ1')],
L:[
L('أساسيات PHP','PHP تعمل على السيرفر وتولّد صفحات HTML. الكود يُكتب بين وسمي php.',[
['البداية','','<?php\n$name = "Sara";\necho "Hello $name";\n?>'],
['المتغيرات','كل متغير يبدأ بعلامة $.','$age = 10;\n$price = 9.5;\necho $age + $price;'],
['دمج النصوص','النقطة . تدمج النصوص.','echo "Hi " . $name;']],
'ملفات PHP تحتاج سيرفر محلي مثل XAMPP أو php -S.',
[['المتغير يبدأ بـ؟',['$','@','#'],0],['للطباعة؟',['echo','print()x','say'],0],['دمج النصوص؟',['.','+','&'],0]],
'اعمل صفحة تطبع اسمك وعمرك.'),
L('الشروط والحلقات والدوال','نفس المنطق مع صيغة PHP.',[
['if','','if ($age >= 18) {\n  echo "Adult";\n} else {\n  echo "Minor";\n}'],
['foreach','','$fruits = ["a", "b"];\nforeach ($fruits as $f) {\n  echo $f;\n}'],
['function','','function add($a, $b) {\n  return $a + $b;\n}\necho add(1, 2);']],
'المصفوفات المرتبطة array("k"=>"v") مهمة جدا في PHP.',
[['حلقة المصفوفة؟',['foreach','each','loopall'],0],['تعريف دالة؟',['function','def','fn'],0],['المصفوفة؟',['[]','{}x','<>'],0]],
'اكتب دالة تحسب متوسط مصفوفة.'),
L('النماذج وقواعد البيانات','نستقبل بيانات النموذج بـ $_POST ونخزنها في MySQL بـ PDO.',[
['استقبال البيانات','','<?php\n$name = $_POST["name"] ?? "";\necho htmlspecialchars($name);'],
['الاتصال','','$pdo = new PDO("mysql:host=localhost;dbname=app", "user", "pass");'],
['الأمان','استخدم prepared statements دائما لمنع SQL Injection.','$st = $pdo->prepare("SELECT * FROM users WHERE id = ?");\n$st->execute([$id]);']],
'لا تدمج مدخلات المستخدم مباشرة في استعلام SQL.',
[['استقبال POST؟',['$_POST','$POST','post()'],0],['لمنع الحقن؟',['prepared statements','echo','die'],0],['htmlspecialchars تفيد في؟',['حماية XSS','السرعة','الحفظ'],0]],
'اعمل نموذج يطبع الاسم بأمان.')
]},
{id:'sql',t:'SQL',e:'🗄️',c:'#2dd4bf',d:'قواعد البيانات والاستعلامات',lang:null,
v:[V('Learn SQL In Arabic','Mohamed El Desouki','PL85D9FC9DFD6B9484'),V('Advanced SQL','Mobarmg','PLzCpl3aBwaY7gmtzsQSn0bry1LDSKuJkj')],
L:[
L('الجداول والاستعلام SELECT','قاعدة البيانات تخزن البيانات في جداول (صفوف وأعمدة). SQL لغة التعامل معها.',[
['SELECT','','SELECT name, age FROM students;\nSELECT * FROM students;'],
['WHERE','تصفية الصفوف.','SELECT * FROM students WHERE age >= 10 AND city = \'Cairo\';'],
['ORDER و LIMIT','','SELECT * FROM students ORDER BY age DESC LIMIT 5;']],
'اكتب الكلمات المحجوزة بحروف كبيرة لتسهل القراءة.',
[['لاختيار أعمدة؟',['SELECT','GET','PICK'],0],['للتصفية؟',['WHERE','FILTER','IF'],0],['ترتيب تنازلي؟',['DESC','DOWN','LOW'],0]],
'اكتب استعلاما يعرض أكبر 3 طلاب درجات.'),
L('إضافة وتعديل وحذف','عمليات CRUD: إنشاء وقراءة وتحديث وحذف.',[
['INSERT','','INSERT INTO students (name, age) VALUES (\'Sara\', 10);'],
['UPDATE','لا تنس WHERE وإلا تغيرت كل الصفوف!','UPDATE students SET age = 11 WHERE name = \'Sara\';'],
['DELETE','','DELETE FROM students WHERE id = 3;']],
'جرّب UPDATE/DELETE أولا بـ SELECT نفس الشرط.',
[['لإضافة صف؟',['INSERT','ADD','PUT'],0],['UPDATE بدون WHERE؟',['يغير كل الصفوف','لا شيء','خطأ'],0],['للحذف؟',['DELETE','DROP ROW','REMOVE'],0]],
'أنشئ جدول كتب وأدخل 3 كتب ثم عدّل واحدا.'),
L('JOIN والتجميع','JOIN يربط الجداول، وGROUP BY يجمع النتائج.',[
['JOIN','','SELECT s.name, c.title\nFROM students s\nJOIN courses c ON s.course_id = c.id;'],
['التجميع','COUNT وSUM وAVG وMAX وMIN.','SELECT city, COUNT(*) FROM students GROUP BY city;'],
['HAVING','تصفية بعد التجميع.','SELECT city, COUNT(*) c FROM students GROUP BY city HAVING c > 2;']],
'ابدأ بمثال جدولين صغيرين وارسم العلاقة.',
[['لربط جدولين؟',['JOIN','MERGE','LINK'],0],['لعد الصفوف؟',['COUNT','NUM','SUMX'],0],['تصفية بعد التجميع؟',['HAVING','WHERE','FILTER'],0]],
'اعرض عدد الطلاب في كل مدينة.')
]},
{id:'git',t:'Git و GitHub',e:'🌿',c:'#fb7185',d:'احفظ مشاريعك وتعاون مع غيرك',lang:null,
v:[V('Git/Github Tutorial (إنجليزي)','codebasics','PLeo1K3hjS3usJuxZZUBdjAcilgfQHkRzW','en'),V('Git and GitHub Crash Course (إنجليزي)','Software Testing Mentor','PLL34mf651faO4IjVNu8LRoN6QOxYM6VlZ','en')],
L:[
L('ما هو Git؟','Git يحفظ تاريخ مشروعك. تستطيع الرجوع لأي نسخة سابقة والعمل مع فريق بأمان.',[
['البداية','','git init\ngit status'],
['الحفظ','add يجهز الملفات وcommit يحفظ لقطة.','git add .\ngit commit -m "First version"'],
['السجل','','git log --oneline']],
'اكتب رسائل commit واضحة تصف ما تغيّر.',
[['لحفظ لقطة؟',['commit','save','push'],0],['لتجهيز الملفات؟',['add','stage now','put'],0],['git init يفعل؟',['ينشئ مستودعا','يحذف','يرفع'],0]],
'أنشئ مجلدا وملف نص واعمل له commit.'),
L('الفروع Branches','الفرع نسخة موازية لتجرب فيها دون إفساد الأساس.',[
['إنشاء فرع','','git branch feature\ngit switch feature'],
['الدمج','','git switch main\ngit merge feature'],
['التعارض','عند تعديل نفس السطر ستحل التعارض يدويا ثم تعمل commit.']],
'اعمل فرعا لكل ميزة جديدة.',
[['لإنشاء فرع؟',['git branch','git fork','git new'],0],['للدمج؟',['merge','join','combine'],0],['التعارض يحدث عند؟',['تعديل نفس السطر','حذف ملف','تسمية فرع'],0]],
'اعمل فرعا وغيّر ملفا ثم ادمجه.'),
L('GitHub والمشاركة','GitHub موقع يستضيف مستودعاتك على الإنترنت.',[
['الربط','','git remote add origin https://github.com/user/repo.git\ngit push -u origin main'],
['التحديث','','git pull'],
['Pull Request','طلب لدمج تعديلاتك في مشروع، ويراجعه الآخرون.']],
'لا ترفع كلمات المرور أو المفاتيح للمستودع أبدا.',
[['لرفع التعديلات؟',['push','pull','fetchup'],0],['لجلب التحديثات؟',['pull','push','send'],0],['PR هو؟',['طلب دمج','حذف','نسخة'],0]],
'ارفع مشروعك الصغير على GitHub.')
]},
{id:'react',t:'React',e:'⚛️',c:'#22d3ee',d:'واجهات تفاعلية حديثة',lang:null,
v:[V('دورة React كاملة','Coder Shiyar','PLMTdZ61eBnypHk2R8xBGwk3Xwy8Ra5qjA'),V('أساسيات React','Yehia Tech','PL8q8h6vqfkSVeuw14BwrtJRIg3tAwq0ds'),V('Learn React JS','Unique Coderz Academy','PLtFbQRDJ11kEjXWZmwkOV-vfXmrEEsuEW')],
L:[
L('المكونات و JSX','React تبني الواجهة من مكونات (components) صغيرة قابلة لإعادة الاستخدام.',[
['المكون','دالة ترجع JSX.','function Hello() {\n  return <h1>Hello React</h1>;\n}'],
['Props','بيانات تمرر للمكون.','function Card({ title }) {\n  return <div>{title}</div>;\n}\n<Card title="Hi" />'],
['القوائم','map لعرض قائمة، وkey لكل عنصر.','{items.map(i => <li key={i.id}>{i.name}</li>)}']],
'اسم المكون يبدأ بحرف كبير.',
[['المكون هو؟',['دالة ترجع JSX','ملف CSS','قاعدة بيانات'],0],['Props؟',['بيانات للمكون','حالة داخلية','حدث'],0],['key في القوائم؟',['لتمييز العناصر','لتشفير','للون'],0]],
'اعمل مكون بطاقة يعرض اسما وصورة.'),
L('الحالة State والأحداث','الحالة بيانات تتغير فتعيد React رسم الواجهة تلقائيا.',[
['useState','','import { useState } from "react";\nfunction Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}'],
['الأحداث','onClick وonChange.','<input onChange={e => setText(e.target.value)} />'],
['القاعدة','لا تغيّر الحالة مباشرة، استخدم دالة التحديث.']],
'عند اعتماد الحالة الجديدة على القديمة استخدم setN(p => p + 1).',
[['لتخزين حالة؟',['useState','useData','state()'],0],['حدث الضغط؟',['onClick','click()','press'],0],['تغيير الحالة؟',['بدالة setN','n = 5','n++'],0]],
'اعمل عدادا بزرين زيادة ونقصان.'),
L('useEffect والبيانات','useEffect ينفذ كودا بعد الرسم، مثل جلب بيانات.',[
['الأساس','','import { useEffect } from "react";\nuseEffect(() => {\n  console.log("mounted");\n}, []);'],
['جلب بيانات','','useEffect(() => {\n  fetch("https://api.example.com/items")\n    .then(r => r.json())\n    .then(setItems);\n}, []);'],
['المصفوفة','المصفوفة الفارغة تعني مرة واحدة فقط.']],
'اكتب حالة تحميل (loading) وحالة خطأ لتجربة أفضل.',
[['useEffect لـ؟',['تنفيذ كود بعد الرسم','تلوين','حذف'],0],['[] تعني؟',['مرة واحدة','كل مرة','أبدا'],0],['لجلب بيانات؟',['fetch','get()','take'],0]],
'اجلب قائمة من API مجاني واعرضها.')
]},
{id:'dart',t:'Dart و Flutter',e:'📱',c:'#4ade80',d:'تطبيقات موبايل من كود واحد',lang:null,
v:[V('Dart بالعربي','Asem Saafan','PLMDrOnfT8EAj6Yjdki9OCLSwqdBs4xhQz'),V('أفضل دورة فلاتر للمبتدئين','Tharwat Samy','PLGVaNq6mHinjCPki-3xraQdGWKVz7PhgI'),V('كورس فلاتر كامل','Ammar Alkhatib','PLw6Y5u47CYq47oDw63bMqkq06fjuoK_GJ')],
L:[
L('أساسيات Dart','Dart لغة جوجل. نفس أفكار اللغات الأخرى بصيغة نظيفة.',[
['البداية','','void main() {\n  print("Hello Dart");\n}'],
['المتغيرات','','var name = "Sara";\nint age = 10;\nfinal pi = 3.14;'],
['الدوال','','int add(int a, int b) => a + b;']],
'null safety: النوع مع ? يقبل null مثل String?.',
[['نقطة البداية؟',['main','start','run'],0],['للقيمة الثابتة؟',['final','let','fix'],0],['=> تعني؟',['دالة مختصرة','مقارنة','مؤشر'],0]],
'اكتب دالة تحسب مساحة مستطيل.'),
L('Widgets في Flutter','في Flutter كل شيء Widget: نص، زر، عمود، شاشة.',[
['أول تطبيق','','import \'package:flutter/material.dart\';\nvoid main() => runApp(MaterialApp(\n  home: Scaffold(body: Center(child: Text("Hello"))),\n));'],
['التخطيط','Column وRow وContainer وPadding.','Column(children: [Text("A"), Text("B")])'],
['الأزرار','','ElevatedButton(onPressed: () {}, child: Text("Go"))']],
'ابنِ الواجهة من widgets صغيرة داخل widgets.',
[['كل شيء في Flutter؟',['Widget','Class XML','Activity'],0],['ترتيب رأسي؟',['Column','Row','Stack'],0],['زر مرتفع؟',['ElevatedButton','Tap','BigBtn'],0]],
'اعمل شاشة فيها عنوان وزر.'),
L('الحالة State','StatefulWidget يتغير شكله عند تغير بياناته.',[
['setState','','class Counter extends StatefulWidget {\n  @override\n  State<Counter> createState() => _CounterState();\n}\nclass _CounterState extends State<Counter> {\n  int n = 0;\n  @override\n  Widget build(BuildContext c) => ElevatedButton(\n    onPressed: () => setState(() => n++),\n    child: Text("$n"),\n  );\n}'],
['StatelessWidget','لا يتغير.'],
['الحزم','pub.dev فيه آلاف الحزم الجاهزة.']],
'ابدأ ب StatelessWidget وحوله لـ Stateful عند الحاجة.',
[['لتحديث الشاشة؟',['setState','refresh','update'],0],['موقع الحزم؟',['pub.dev','npmjs','nuget'],0],['Stateless؟',['لا يتغير','يتغير','قاعدة بيانات'],0]],
'اعمل عدادا بسيطا.')
]},
{id:'go',t:'Go',e:'🐹',c:'#67e8f9',d:'سيرفرات سريعة وبسيطة',lang:null,
v:[V('GoLang Programming in Arabic','Learn With ElAmir','PLD0Vy7NjzXS63cTV76LPnqDttqcIIPrpM')],
L:[
L('أساسيات Go','Go لغة من جوجل: بسيطة وسريعة وممتازة للسيرفرات.',[
['البرنامج','','package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello")\n}'],
['المتغيرات','','var age int = 10\nname := "Sara"'],
['الدوال','','func add(a, b int) int {\n    return a + b\n}']],
'الرمز := يعرّف متغيرا بنوع مستنتج داخل الدوال.',
[['للطباعة؟',['fmt.Println','print','echo'],0],['تعريف سريع؟',[':=','=>','<-'],0],['نقطة البداية؟',['main','start','init only'],0]],
'اكتب دالة تجمع رقمين وتطبع الناتج.'),
L('الحلقات والشرائح','Go فيها حلقة واحدة هي for. والشريحة (slice) قائمة مرنة.',[
['for','','for i := 0; i < 3; i++ {\n    fmt.Println(i)\n}'],
['slice','','nums := []int{1, 2}\nnums = append(nums, 3)'],
['map','','m := map[string]int{"a": 1}']],
'Go لا تقبل متغيرا غير مستخدم، وهذا يعلمك النظافة.',
[['الحلقة الوحيدة؟',['for','while','loop'],0],['إضافة لـ slice؟',['append','push','add'],0],['map تخزن؟',['مفتاح وقيمة','رقما','نصا فقط'],0]],
'اطبع مربعات الأرقام من 1 إلى 5.'),
L('الـ struct والتزامن','struct تجمع بيانات. وgoroutines تشغل دوال بالتوازي بسهولة.',[
['struct','','type User struct {\n    Name string\n    Age  int\n}\nu := User{"Sara", 10}'],
['goroutine','','go fmt.Println("async")'],
['الأخطاء','Go ترجع error كقيمة.','v, err := strconv.Atoi("12")\nif err != nil { }']],
'تعامل مع الأخطاء مباشرة بعد كل استدعاء.',
[['goroutine تبدأ بـ؟',['go','async','thread'],0],['struct؟',['تجمع بيانات','حلقة','دالة'],0],['الأخطاء في Go؟',['قيمة تُرجع','exceptions','لا توجد'],0]],
'اعمل struct لكتاب واطبعه.')
]},
{id:'rust',t:'Rust',e:'🦀',c:'#fdba74',d:'أمان الذاكرة وأداء عال',lang:null,
v:[V('شرح الكتاب الرسمي للغة Rust','superlinux','PLsAEIIjTPIo_YEKRP33BUSMYl05BVnkf0')],
L:[
L('أساسيات Rust','Rust تمنع أخطاء الذاكرة وقت الترجمة. المتغيرات ثابتة افتراضيا.',[
['البرنامج','','fn main() {\n    println!("Hello");\n}'],
['المتغيرات','mut تجعل المتغير قابلا للتغيير.','let x = 5;\nlet mut y = 6;\ny += 1;'],
['الأنواع','','let a: i32 = 10;\nlet s: &str = "hi";']],
'المترجم في Rust صارم لكنه يشرح الخطأ بوضوح.',
[['المتغير قابل للتعديل بكلمة؟',['mut','var','let2'],0],['println! فيها؟',['علامة تعجب (macro)','شيء','أمر'],0],['افتراضيا المتغيرات؟',['ثابتة','متغيرة','محذوفة'],0]],
'اطبع اسمك وعمرك بمتغيرات.'),
L('الملكية Ownership','أهم فكرة: لكل قيمة مالك واحد، وعند خروجه تُحرّر القيمة.',[
['النقل','','let a = String::from("hi");\nlet b = a; // moved\n// println!("{}", a); error'],
['الاستعارة','& لاستعارة دون نقل.','fn len(s: &String) -> usize { s.len() }'],
['النسخ','clone ينسخ البيانات.','let c = b.clone();']],
'اقرأ رسائل المترجم، هي المعلم الأفضل لك.',
[['لكل قيمة؟',['مالك واحد','مالكان','لا مالك'],0],['& تعني؟',['استعارة','نسخ','حذف'],0],['clone؟',['ينسخ','ينقل','يحذف'],0]],
'اكتب دالة تستعير نصا وتعيد طوله.'),
L('الهياكل والتعداد','struct وenum وmatch أدوات قوية للنمذجة.',[
['struct','','struct User { name: String, age: u8 }'],
['enum و match','','enum Dir { Up, Down }\nmatch d {\n    Dir::Up => println!("up"),\n    Dir::Down => println!("down"),\n}'],
['Option','بديل null.','let x: Option<i32> = Some(5);']],
'match يجب أن يغطي كل الحالات.',
[['بديل null؟',['Option','Maybe','Nil'],0],['match تغطي؟',['كل الحالات','واحدة','لا شيء'],0],['struct؟',['تجمع بيانات','حلقة','مكتبة'],0]],
'اعمل enum لإشارة مرور واطبع رسالة لكل لون.')
]},
{id:'kt',t:'Kotlin',e:'🤖',c:'#e879f9',d:'تطبيقات أندرويد الحديثة',lang:null,
v:[V('شرح الأندرويد باستخدام Kotlin','Ahmed Tawfik','PLsfs9DojDVqO5a2I_7tXYxqZ_6k94Op4r')],
L:[
L('أساسيات Kotlin','Kotlin اللغة الرسمية لأندرويد. مختصرة وآمنة.',[
['البرنامج','','fun main() {\n    println("Hello")\n}'],
['المتغيرات','val ثابت وvar متغير.','val name = "Sara"\nvar age = 10\nage++'],
['الدوال','','fun add(a: Int, b: Int) = a + b']],
'استخدم val دائما إلا إذا احتجت التغيير.',
[['ثابت؟',['val','var','let'],0],['دالة؟',['fun','def','function'],0],['للطباعة؟',['println','print()x','echo'],0]],
'اكتب دالة ترحب باسم.'),
L('Null Safety والتحكم','Kotlin تمنع أخطاء null: النوع مع ? يقبل null.',[
['Null Safety','','var s: String? = null\nprintln(s?.length)'],
['when','بديل switch قوي.','when (x) {\n  1 -> println("one")\n  else -> println("other")\n}'],
['الحلقات','','for (i in 1..5) println(i)']],
'?. آمنة و!! خطرة، تجنب !! قدر الإمكان.',
[['String? تعني؟',['تقبل null','ثابتة','رقم'],0],['when بديل؟',['switch','for','try'],0],['1..5 تعني؟',['من 1 إلى 5','1 و5','1 فقط'],0]],
'اكتب when تحدد اسم اليوم من رقمه.'),
L('الكلاسات والقوائم','data class مختصرة للبيانات. والقوائم لها دوال تحويل غنية.',[
['data class','','data class User(val name: String, val age: Int)\nval u = User("Sara", 10)'],
['القوائم','','val nums = listOf(1, 2, 3)\nprintln(nums.map { it * 2 })'],
['filter','','println(nums.filter { it > 1 })']],
'it اسم المعامل الافتراضي داخل lambda.',
[['كلاس البيانات؟',['data class','struct','record'],0],['تحويل كل عنصر؟',['map','each','trans'],0],['listOf تنتج؟',['قائمة ثابتة','قابلة للتعديل','نصا'],0]],
'اعمل قائمة مستخدمين وصفّ من عمره أكبر من 10.')
]}
);
