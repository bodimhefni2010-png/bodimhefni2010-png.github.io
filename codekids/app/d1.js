TRACKS.push(
{id:'pre',t:'ما قبل البرمجة',e:'🧭',c:'#a78bfa',d:'الأساس اللي لازم تفهمه قبل أول سطر كود',lang:null,
v:[V('كورس أساسيات مهمة لكل مبرمج','Programming Advices','PL3X--QIIK-OHgMV2yBz3GLfM5d_5BxOSj'),V('ما قبل تعلم البرمجة','Elzero Web School','PLDoPjvoNmBAx8xKvAXpb6f0Urj98Xo7zg')],
L:[
L('ما هي البرمجة؟','البرمجة هي كتابة تعليمات دقيقة ومرتبة ينفذها الكمبيوتر بالحرف. الكمبيوتر سريع جدا لكنه لا يفهم النية ولا يخمّن.',[
['التعليمات والبرنامج','البرنامج هو مجموعة تعليمات (instructions). كل تعليمة تطلب من الجهاز فعل شيء صغير: اجمع رقمين، اعرض نص، احفظ ملف. من تجميع آلاف التعليمات الصغيرة تتكون التطبيقات الكبيرة.','print("Hello")\nprint("I am learning to code")'],
['لغات البرمجة','الجهاز يفهم أصفارا وواحدات فقط، ولغات البرمجة (Python, JavaScript, C++ ...) تجعل الكتابة أسهل للإنسان، ثم يترجمها مترجم (compiler) أو مفسر (interpreter) للغة الجهاز.'],
['أين نستخدم البرمجة؟','المواقع، تطبيقات الموبايل، الألعاب، الذكاء الاصطناعي، السيارات، والأجهزة المنزلية. كل شيء ذكي حولك يحتوي كودا.']],
'لا تحفظ الأكواد. افهم الفكرة ثم اكتبها بنفسك مرارا.',
[['أفضل وصف للبرمجة؟',['تعليمات مرتبة ينفذها الجهاز','رسم صور فقط','تشغيل التطبيقات'],0],['ما الذي يفهمه الجهاز في النهاية؟',['العربية','الإنجليزية','أصفار وواحدات'],2],['المترجم (compiler) وظيفته؟',['تحويل الكود للغة الجهاز','تصميم الشاشة','حذف الأخطاء'],0]],
'اكتب 5 خطوات مرتبة لتحضير كوب شاي كأنك تكتب لجهاز لا يفهم شيئا.'),
L('كيف ينفذ الجهاز الكود؟','الكود يُقرأ من أعلى إلى أسفل، سطرا بعد سطر. فهم هذا الترتيب يحل نصف مشاكل المبتدئين.',[
['التنفيذ المتسلسل','ينفذ الجهاز السطر الأول ثم الثاني وهكذا. لو غيرت الترتيب تتغير النتيجة.','x = 5\nx = x + 2\nprint(x)  # 7'],
['أنواع الأخطاء','خطأ كتابي (syntax error) يمنع التشغيل مثل نسيان قوس. خطأ منطقي (logic error) يعمل البرنامج لكن النتيجة خاطئة. خطأ وقت التشغيل (runtime) مثل القسمة على صفر.','print(10 / 0)  # runtime error'],
['التصحيح (Debugging)','اطبع قيم المتغيرات بعد كل خطوة لترى أين انحرف البرنامج. الخطأ ليس فشلا، بل معلومة تدلك على المكان.']],
'اقرأ رسالة الخطأ كاملة. غالبا تقول لك رقم السطر ونوع المشكلة.',
[['الكود ينفذ من؟',['تحت لفوق','فوق لتحت','عشوائيا'],1],['قسمة على صفر تسبب خطأ من نوع؟',['runtime','syntax','منطقي فقط'],0],['أفضل أداة للتفحص؟',['طباعة القيم','إعادة تثبيت الويندوز','حذف الكود'],0]],
'اكتب برنامجا صغيرا فيه خطأ متعمد ثم اقرأ رسالة الخطأ وأصلحه.'),
L('الخوارزمية والتفكير المنطقي','الخوارزمية هي خطوات واضحة ومحدودة لحل مشكلة. قبل كتابة الكود فكّر في الخطوات بالعربي أو على الورق.',[
['مثال: أكبر رقم','نبدأ بأول رقم على أنه الأكبر، ثم نقارنه بالباقي، وكلما وجدنا أكبر نحدّث.','max = numbers[0]\nfor n in numbers:\n    if n > max:\n        max = n'],
['التقسيم','قسّم المشكلة الكبيرة لمشاكل صغيرة. تطبيق توصيل مثلا: تسجيل دخول، قائمة مطاعم، سلة، دفع.'],
['الرسم التخطيطي (Flowchart)','مستطيل للعملية، معين للقرار، وأسهم للاتجاه. يساعدك على رؤية المنطق قبل الكود.']],
'جرّب الخوارزمية بأرقام صغيرة على الورق قبل كتابتها.',
[['الخوارزمية هي؟',['خطوات مرتبة لحل مشكلة','لغة برمجة','نوع جهاز'],0],['المعين في الرسم التخطيطي يمثل؟',['قرار','بداية','طباعة'],0],['أول خطوة قبل الكود؟',['فهم المشكلة والتخطيط','الاستعجال','نسخ حل'],0]],
'اكتب خوارزمية لحساب متوسط 3 درجات ثم نفذها بأرقام من اختيارك.'),
L('أدواتك: المحرر والطرفية','تحتاج محرر أكواد (مثل VS Code) وطرفية (Terminal) لتشغيل البرامج. التجهيز مرة واحدة ثم تنطلق.',[
['المحرر','VS Code مجاني ويلوّن الكود ويكمل الكلمات. على الموبايل يمكنك استخدام تطبيقات تشغيل أكواد أو مواقع مثل replit وprogramiz.'],
['الطرفية','تكتب فيها أوامر نصية. أهم أوامر: الانتقال للمجلد وعرض الملفات وتشغيل البرنامج.','cd projects\nls\npython main.py'],
['تنظيم المشاريع','لكل مشروع مجلد، وأسماء ملفات واضحة بحروف إنجليزية بدون مسافات.']],
'اعتد على الاختصارات: حفظ Ctrl+S، تعليق سطر Ctrl+/.',
[['محرر أكواد مجاني شهير؟',['VS Code','Word','Paint'],0],['أمر الانتقال لمجلد؟',['cd','run','go'],0],['أسماء الملفات الأفضل؟',['إنجليزية بلا مسافات','عشوائية','طويلة جدا'],0]],
'ثبّت محررا (أو افتح محررا أونلاين) وشغّل برنامج print("Hello").')
]},
{id:'html',t:'HTML',e:'🌐',c:'#f472b6',d:'هيكل صفحات الويب',lang:'html',
v:[V('تعلم HTML و CSS كامل','Abdelrahman Gamal','PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA'),V('Learn HTML In Arabic','Elzero Web School','PLDoPjvoNmBAwClZ1PDcjWilxp9YERUbNt')],
L:[
L('هيكل الصفحة والوسوم','HTML هي لغة هيكلة المحتوى: عنوان، فقرة، صورة، رابط. كل عنصر يُكتب بوسم (tag) له بداية ونهاية.',[
['الهيكل الأساسي','كل صفحة تبدأ بـ doctype ثم html وبداخله head للمعلومات وbody للمحتوى الظاهر.','<!DOCTYPE html>\n<html lang="ar" dir="rtl">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>'],
['العناوين والفقرات','h1 إلى h6 للعناوين (h1 الأهم)، وp للفقرة، وbr لسطر جديد، وhr لخط فاصل.','<h1>Title</h1>\n<p>This is a paragraph.</p>'],
['الخصائص (Attributes)','تُكتب داخل وسم البداية وتعطي معلومات إضافية مثل id وclass وlang.','<p id="intro" class="big">Hi</p>']],
'استخدم h1 مرة واحدة فقط في الصفحة، فهو عنوانها الرئيسي.',
[['أين يوضع محتوى الصفحة الظاهر؟',['body','head','title'],0],['العنوان الأهم؟',['h1','h6','p'],0],['dir="rtl" معناها؟',['اتجاه من اليمين لليسار','لون','حجم'],0]],
'اعمل صفحة تعريف بنفسك: عنوان، فقرتان، وخط فاصل.'),
L('النصوص والروابط','النص يُنسّق بوسوم مثل strong وem، والروابط تربط الصفحات ببعضها.',[
['تنسيق النص','strong للنص المهم (عريض)، em للتأكيد (مائل)، mark للتظليل، code للكود.','<p>This is <strong>important</strong> and <em>emphasized</em>.</p>'],
['الروابط','الوسم a مع href. target="_blank" يفتح في تبويب جديد.','<a href="https://example.com" target="_blank">Visit</a>'],
['الروابط الداخلية','اربط أجزاء الصفحة بـ id ثم #.','<a href="#about">About</a>\n<h2 id="about">About</h2>']],
'اكتب نص الرابط واضحا مثل "تحميل الملف" وليس "اضغط هنا".',
[['وسم الرابط؟',['a','link','url'],0],['الخاصية التي تحدد الوجهة؟',['href','src','alt'],0],['strong يعطي؟',['نص مهم','صورة','جدول'],0]],
'اعمل صفحة فيها 3 روابط لمواقعك المفضلة ورابط داخلي لأسفل الصفحة.'),
L('الصور والوسائط','الصور والفيديو والصوت تجعل الصفحة حية. المهم حجم الملف والنص البديل.',[
['الصور','img وسم بدون نهاية. src المسار وalt وصف للصورة لمن لا يراها.','<img src="cat.jpg" alt="A cute cat" width="300">'],
['الفيديو والصوت','video وaudio مع controls لإظهار أزرار التشغيل.','<video src="clip.mp4" controls width="320"></video>\n<audio src="song.mp3" controls></audio>'],
['تضمين يوتيوب','استخدم iframe مع رابط embed الرسمي فقط.','<iframe src="https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID" allowfullscreen></iframe>']],
'اكتب alt لكل صورة: يفيد القارئ الصوتي ومحركات البحث.',
[['الخاصية التي تضع وصف الصورة؟',['alt','src','title2'],0],['لتشغيل أزرار الفيديو نضيف؟',['controls','play','buttons'],0],['img له وسم نهاية؟',['لا','نعم دائما','أحيانا'],0]],
'ضع صورة وفيديو (رابط embed رسمي) في صفحتك.'),
L('القوائم والجداول','القوائم ترتب العناصر، والجداول تعرض بيانات منظمة في صفوف وأعمدة.',[
['القوائم','ul نقطية، ol مرقمة، وli لكل عنصر.','<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<ol>\n  <li>Learn</li>\n  <li>Practice</li>\n</ol>'],
['الجداول','table ثم tr للصف وth لعنوان العمود وtd للخلية.','<table border="1">\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>Sara</td><td>10</td></tr>\n</table>'],
['دمج الخلايا','colspan لدمج أعمدة وrowspan لدمج صفوف.','<td colspan="2">Total</td>']],
'الجداول للبيانات فقط، لا تستخدمها لتصميم الصفحة.',
[['القائمة المرقمة؟',['ol','ul','li'],0],['عنوان العمود؟',['th','td','tr'],0],['لدمج أعمدة؟',['colspan','rowspan','merge'],0]],
'اعمل جدول مواعيد دراسة أسبوعي بسيط.'),
L('النماذج (Forms)','النماذج تجمع بيانات من المستخدم: تسجيل، بحث، رسائل.',[
['الحقول','input له أنواع: text, email, password, number, checkbox, radio.','<form>\n  <label for="n">Name</label>\n  <input id="n" type="text" required>\n  <input type="email" placeholder="Email">\n  <button type="submit">Send</button>\n</form>'],
['القوائم المنسدلة','select وoption، وtextarea للنص الطويل.','<select>\n  <option>Egypt</option>\n  <option>KSA</option>\n</select>'],
['التحقق','required وminlength وpattern تتحقق من الإدخال قبل الإرسال.']],
'اربط label بالحقل بـ for وid ليصبح أسهل في اللمس على الموبايل.',
[['وسم زر الإرسال؟',['button type="submit"','send','go'],0],['خاصية الحقل الإجباري؟',['required','must','need'],0],['حقل كلمة المرور type؟',['password','secret','hidden'],0]],
'اعمل نموذج تسجيل: اسم، بريد، كلمة مرور، وزر.')
]},
{id:'css',t:'CSS',e:'🎨',c:'#fb923c',d:'التلوين والتخطيط والحركة',lang:'html',
v:[V('دورة CSS كاملة','Coder Shiyar','PLMTdZ61eBnyoxjc9Prw0uhwgp6YZ2-_sg'),V('Learn CSS In Arabic','Elzero Web School','PLDoPjvoNmBAzAeIcXA3_JsmSkPKOs9W-Y')],
L:[
L('المحددات والألوان','CSS يحدد شكل العناصر. تكتب محددا (selector) ثم خصائص بين أقواس.',[
['المحددات','اسم الوسم، class بنقطة، id بعلامة #.','<style>\n  h1 { color: tomato; }\n  .card { background: #fff3c4; }\n  #main { font-size: 20px; }\n</style>'],
['الألوان','أسماء، hex مثل #ff0000، rgb، وhsl. استخدم opacity للشفافية.','p { color: rgb(30,60,200); background: hsl(200 80% 90%); }'],
['الخطوط','font-family وfont-size وfont-weight وline-height.','body { font-family: Arial, sans-serif; line-height: 1.7; }']],
'استخدم class أكثر من id، لأنه يتكرر ويسهل التعديل.',
[['محدد class يبدأ بـ؟',['.','#','*'],0],['لون الخلفية؟',['background','color','bg'],0],['font-weight للتحكم في؟',['سمك الخط','لونه','اتجاهه'],0]],
'صمم بطاقة تعريف بألوانك المفضلة.'),
L('الصندوق Box Model','كل عنصر هو صندوق: المحتوى ثم padding ثم border ثم margin.',[
['المسافات','padding داخل الحدود وmargin خارجها.','.box { padding: 16px; margin: 12px; border: 3px solid navy; border-radius: 16px; }'],
['الحجم','width وheight. استخدم box-sizing: border-box لتسهيل الحساب.','* { box-sizing: border-box; }'],
['الظل','box-shadow يعطي عمقا.','.card { box-shadow: 0 6px 16px rgba(0,0,0,.2); }']],
'ضع box-sizing: border-box في أول ملفك دائما.',
[['المسافة داخل الحدود؟',['padding','margin','gap'],0],['الحواف الدائرية؟',['border-radius','round','corner'],0],['box-sizing: border-box يجعل width تشمل؟',['padding و border','margin فقط','لا شيء'],0]],
'اعمل ثلاث بطاقات بحدود وظلال مختلفة.'),
L('Flexbox','Flexbox يرتب العناصر في صف أو عمود ويوزع المسافات بسهولة.',[
['التفعيل','display: flex على الحاوية. flex-direction للاتجاه.','.row { display: flex; gap: 12px; }'],
['المحاذاة','justify-content أفقيا وalign-items رأسيا.','.row { justify-content: space-between; align-items: center; }'],
['الالتفاف','flex-wrap: wrap ينزل العناصر لسطر جديد عند ضيق المساحة.']],
'justify للمحور الرئيسي وalign للمحور المتعامد.',
[['لتفعيل Flexbox؟',['display:flex','flex:on','position:flex'],0],['توسيط رأسي؟',['align-items','justify-items','text-align'],0],['المسافة بين العناصر؟',['gap','space','pad'],0]],
'اعمل شريط تنقل (navbar) بأربعة روابط.'),
L('Grid','Grid يقسم الصفحة لصفوف وأعمدة. ممتاز لشبكات البطاقات والمعارض.',[
['أعمدة','grid-template-columns يحدد الأعمدة. وحدة fr تقسم المساحة.','.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }'],
['تلقائي','auto-fit مع minmax يجعل الشبكة تتأقلم.','.grid { grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); }'],
['مناطق','grid-column وgrid-row لتمديد عنصر.','.wide { grid-column: span 2; }']],
'Flexbox لبعد واحد، وGrid لبعدين.',
[['وحدة fr تعني؟',['جزء من المساحة','بكسل','نسبة مئوية فقط'],0],['خاصية الأعمدة؟',['grid-template-columns','columns-grid','cols'],0],['span 2 تعني؟',['يمتد عمودين','يختفي','يتكرر'],0]],
'اعمل معرض 6 بطاقات بشبكة متجاوبة.'),
L('التجاوب والحركة','الموقع يجب أن يعمل على الموبايل والكمبيوتر. وCSS يضيف حركة ناعمة.',[
['Media Queries','تغيّر الأنماط حسب عرض الشاشة.','@media (max-width: 600px) {\n  .grid { grid-template-columns: 1fr; }\n}'],
['Transition','انتقال ناعم عند التغيير.','button { transition: transform .2s; }\nbutton:hover { transform: scale(1.1); }'],
['Animation','keyframes لحركات مخصصة.','@keyframes pulse { 50% { transform: scale(1.1); } }\n.dot { animation: pulse 1s infinite; }']],
'صمم للموبايل أولا ثم وسّع للشاشات الكبيرة.',
[['media query للموبايل؟',['max-width','color','float'],0],['الحركة الناعمة؟',['transition','border','margin'],0],['keyframes تعرّف؟',['خطوات الحركة','لون','خط'],0]],
'اجعل صفحتك تتغير من 3 أعمدة إلى عمود واحد على الموبايل مع حركة hover.')
]},
{id:'js',t:'JavaScript',e:'⚡',c:'#fbbf24',d:'اجعل الصفحة تتفاعل',lang:'js',
v:[V('كورس جافا سكريبت كامل','Abdelrahman Gamal','PLknwEmKsW8OuTqUDaFRBiAViDZ5uI3VcE'),V('كورس جافا سكريبت شامل','أكاديمية ترميز','PLYyqC4bNbCIeLEjcSPO61bsGPKEvYceb0'),V('Learn JavaScript In Arabic','Elzero Web School','PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv')],
L:[
L('المتغيرات والأنواع','المتغير اسم نحفظ فيه قيمة. في JavaScript نستخدم let للقيمة المتغيرة وconst للثابتة.',[
['التعريف','تجنب var القديمة. اختر const افتراضيا وlet عند التغيير.','const name = "Sara";\nlet age = 10;\nage = 11;\nconsole.log(name, age);'],
['الأنواع','string نص، number رقم، boolean صح/خطأ، undefined، null.','console.log(typeof "hi");\nconsole.log(typeof 42);\nconsole.log(typeof true);'],
['دمج النصوص','Template literals بعلامة ` تدخل المتغيرات داخل النص.','const msg = `Hi ${name}, you are ${age}`;\nconsole.log(msg);']],
'أسماء المتغيرات بصيغة camelCase مثل userName.',
[['للقيمة الثابتة؟',['const','let','var2'],0],['typeof "5" يعطي؟',['string','number','boolean'],0],['دمج النص مع متغير؟',['`${x}`','[x]','<x>'],0]],
'خزّن اسمك وعمرك وبلدك واطبعهم في جملة.'),
L('العمليات والشروط','الشروط تجعل البرنامج يقرر. العمليات تحسب وتقارن.',[
['العمليات','+ - * / % للباقي و ** للأس.','console.log(10 % 3);  // 1\nconsole.log(2 ** 3);  // 8'],
['المقارنة','استخدم === لأنها تقارن النوع والقيمة. && و|| و! للربط.','console.log(5 === "5");  // false'],
['if / else','if ثم else if ثم else.','const score = 85;\nif (score >= 90) console.log("A");\nelse if (score >= 50) console.log("Pass");\nelse console.log("Try again");']],
'تجنب == واستخدم === دائما.',
[['5 === "5" ؟',['false','true','error'],0],['10 % 3 يساوي؟',['1','3','0'],0],['الربط "و"؟',['&&','||','!'],0]],
'اكتب برنامجا يحدد هل العمر 18 أو أكثر.'),
L('الحلقات','الحلقات تكرر الكود. for للعدد المعروف وwhile للشرط.',[
['for','ثلاثة أجزاء: البداية والشرط والزيادة.','for (let i = 1; i <= 5; i++) {\n  console.log("Number " + i);\n}'],
['while','تستمر ما دام الشرط صحيحا. احذر الحلقة اللانهائية.','let n = 3;\nwhile (n > 0) {\n  console.log(n);\n  n--;\n}'],
['break و continue','break توقف الحلقة وcontinue تتخطى الدورة الحالية.','for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  console.log(i);\n}']],
'تأكد أن الحلقة لها نهاية، وإلا سيتجمد البرنامج.',
[['حلقة لعدد محدد؟',['for','if','let'],0],['continue تفعل؟',['تتخطى الدورة','توقف الحلقة','تحذف'],0],['كم مرة تعمل for(i=0;i<3;i++)؟',['3','2','4'],0]],
'اطبع جدول ضرب الرقم 7.'),
L('الدوال','الدالة كود له اسم تستدعيه كلما احتجت. تقلل التكرار وتنظم البرنامج.',[
['التعريف','function ثم الاسم والمدخلات (parameters).','function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));'],
['Arrow functions','صيغة أقصر.','const double = x => x * 2;\nconsole.log(double(4));'],
['النطاق (Scope)','متغير داخل الدالة لا يُرى خارجها.','function f() { let x = 1; }\n// console.log(x) -> error']],
'اجعل كل دالة تقوم بشيء واحد فقط.',
[['الكلمة لإرجاع قيمة؟',['return','print','back'],0],['arrow function تكتب؟',['x => x*2','function => x','x -> x'],0],['المتغير داخل الدالة؟',['محلي','عام دائما','ثابت'],0]],
'اكتب دالة تحسب مساحة المستطيل ودالة تحسب مساحة الدائرة.'),
L('المصفوفات والكائنات','المصفوفة قائمة مرتبة، والكائن مجموعة خصائص باسم ومفتاح.',[
['المصفوفة','تبدأ من الفهرس 0. من أدواتها push وlength وmap وfilter.','const nums = [1, 2, 3];\nnums.push(4);\nconsole.log(nums.map(n => n * 2));\nconsole.log(nums.filter(n => n % 2 === 0));'],
['الكائن','مفاتيح وقيم.','const user = { name: "Sara", age: 10 };\nuser.city = "Cairo";\nconsole.log(user.name, user.city);'],
['التكرار','for...of للمصفوفات وObject.keys للكائنات.','for (const n of [5, 6]) console.log(n);']],
'map تنتج مصفوفة جديدة ولا تغير الأصلية.',
[['أول عنصر في المصفوفة فهرسه؟',['0','1','-1'],0],['map تعيد؟',['مصفوفة جديدة','رقما','لا شيء'],0],['الوصول لخاصية كائن؟',['user.name','user[0]x','user->name'],0]],
'اعمل مصفوفة بأسماء 5 أصدقاء واطبعها بحرف كبير في أول كل اسم.'),
L('DOM والأحداث','JavaScript في المتصفح يغير الصفحة: يقرأ العناصر ويستجيب لضغطات المستخدم.',[
['اختيار العناصر','querySelector يرجع أول عنصر مطابق.','const btn = document.querySelector("#btn");'],
['الأحداث','addEventListener يربط دالة بحدث مثل click.','btn.addEventListener("click", () => {\n  alert("Hello!");\n});'],
['تغيير المحتوى','textContent وstyle وclassList.','const h = document.querySelector("h1");\nh.textContent = "Changed";\nh.style.color = "tomato";']],
'ضع سكربت JS في آخر body أو استخدم defer.',
[['لاختيار عنصر؟',['querySelector','getIt','pick'],0],['لربط حدث؟',['addEventListener','onGo','bind'],0],['لتغيير نص عنصر؟',['textContent','text.set','html'],0]],
'اعمل زرا يغير لون الخلفية عند كل ضغطة.')
]},
{id:'ts',t:'TypeScript',e:'🧩',c:'#38bdf8',d:'جافاسكريبت بأنواع',lang:null,
v:[V('Typescript Course For Javascript Developer','Index Academy','PLDQ11FgmbqQNDkXDd5SScLPqJM5w4Kgjc'),V('Learn Typescript 2022','Elzero Web School','PLDoPjvoNmBAy532K9M_fjiAmrJ0gkCyLJ')],
L:[
L('الأنواع الأساسية','TypeScript يضيف أنواعا لجافاسكريبت فيكتشف الأخطاء قبل التشغيل.',[
['تعريف الأنواع','ضع النوع بعد اسم المتغير.','let name: string = "Sara";\nlet age: number = 10;\nlet done: boolean = false;'],
['المصفوفات والمجموعات','نوع المصفوفة وtuple.','let nums: number[] = [1, 2];\nlet pair: [string, number] = ["a", 1];'],
['الاستدلال','TypeScript يخمّن النوع من القيمة أحيانا.','let x = 5; // number']],
'تجنب any لأنه يلغي الحماية.',
[['فائدة TypeScript؟',['اكتشاف أخطاء مبكرا','تغيير اللون','سرعة النت'],0],['نوع النص؟',['string','text','char'],0],['نوع يلغي الفحص؟',['any','number','void'],0]],
'عرّف متغيرات بأنواعها لاسمك وعمرك وهواياتك.'),
L('الدوال والواجهات','نحدد أنواع المدخلات والمخرجات، ونصف شكل الكائنات بـ interface.',[
['دالة بأنواع','','function add(a: number, b: number): number {\n  return a + b;\n}'],
['Interface','تصف شكل الكائن. علامة ? تجعل الخاصية اختيارية.','interface User {\n  name: string;\n  age: number;\n  email?: string;\n}\nconst u: User = { name: "Sara", age: 10 };'],
['Union','نوع من عدة أنواع.','let id: string | number = 5;']],
'استخدم interface لوصف الكائنات المتكررة.',
[['الخاصية الاختيارية بعلامة؟',['?','!','#'],0],['string | number تسمى؟',['union','tuple','enum'],0],['نوع إرجاع الدالة يكتب؟',['بعد الأقواس','قبل function','في آخر الملف'],0]],
'اعمل interface لكتاب (عنوان، مؤلف، صفحات) ودالة تعرضه.'),
L('Generics','الـ Generics تجعل الدالة تعمل مع أي نوع مع الحفاظ على الأمان.',[
['الفكرة','T هو متغير نوع.','function first<T>(arr: T[]): T {\n  return arr[0];\n}\nfirst<number>([1, 2]);'],
['في الواجهات','','interface Box<T> { value: T }\nconst b: Box<string> = { value: "hi" };'],
['Utility types','Partial وReadonly وPick جاهزة.','type P = Partial<{ a: number; b: string }>;']],
'ابدأ بدوال بسيطة ثم تقدم، Generics تحتاج تكرارا.',
[['T في generics؟',['نوع متغير','رقم','نص'],0],['Partial تجعل الخصائص؟',['اختيارية','ثابتة','محذوفة'],0],['فائدة generics؟',['إعادة استخدام آمنة','سرعة الجهاز','تلوين الكود'],0]],
'اكتب دالة generic تعيد آخر عنصر في مصفوفة.')
]}
);
