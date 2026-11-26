TRACKS.push(
{id:'cpp',t:'C++',e:'🚀',c:'#60a5fa',d:'سرعة وقوة وأساس المسابقات',lang:null,
v:[V('Learn C++ From Scratch','Adel Nasim','PLCInYL3l2AajFAiw4s1U4QbGszcQ-rAb3'),V('Fundamentals Of Programming With C++','Elzero Web School','PLDoPjvoNmBAwy-rS6WKudwVeb_x63EzgS'),V('C++ OOP Level 2','Adel Nasim','PLCInYL3l2Aaiq1oLvi9TlWtArJyAuCVow')],
L:[
L('أول برنامج والإدخال والإخراج','كل برنامج C++ يبدأ من الدالة main، وينتهي كل أمر بفاصلة منقوطة.',[
['البرنامج الأول','','#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello World" << endl;\n    return 0;\n}'],
['الإدخال','cin تقرأ قيما من المستخدم.','int a;\ncin >> a;\ncout << a * 2;'],
['التعليقات','// سطر واحد و /* */ متعدد.']],
'#include يجلب المكتبات وcout للإخراج وcin للإدخال.',
[['بداية البرنامج؟',['main','start','begin'],0],['أمر الإخراج؟',['cout','print','echo'],0],['نهاية الأمر؟',[';','.',':'],0]],
'اطبع اسمك وبلدك في سطرين.'),
L('المتغيرات والأنواع','يجب تحديد نوع المتغير في C++ وهذا يجعله أسرع وأوضح.',[
['الأنواع','int صحيح، double عشري، char حرف، bool منطقي، string نص.','int age = 10;\ndouble price = 9.5;\nchar grade = \'A\';\nbool ok = true;\nstring name = "Sara";'],
['العمليات','+ - * / % مع الانتباه لقسمة الأعداد الصحيحة.','cout << 7 / 2;   // 3\ncout << 7 / 2.0; // 3.5'],
['الثوابت','const تمنع التغيير.','const double PI = 3.14159;']],
'قسمة int على int تعطي int وتحذف الكسر.',
[['نوع الأعداد العشرية؟',['double','int','char'],0],['7/2 في int؟',['3','3.5','4'],0],['لمنع التغيير؟',['const','fixed','lock'],0]],
'اكتب برنامجا يحسب مساحة دائرة من نصف القطر.'),
L('الشروط والحلقات','if وswitch للقرارات، وfor وwhile وdo-while للتكرار.',[
['if','','int n = 8;\nif (n % 2 == 0) cout << "even";\nelse cout << "odd";'],
['for','','for (int i = 1; i <= 5; i++) {\n    cout << i << " ";\n}'],
['switch','','switch (day) {\n  case 1: cout << "Sat"; break;\n  default: cout << "?";\n}']],
'لا تنس break داخل switch.',
[['علامة الباقي؟',['%','/','&'],0],['حلقة العد؟',['for','if','case'],0],['break في switch؟',['تمنع الاستمرار للحالة التالية','تحذف','تطبع'],0]],
'اطبع مضروب رقم يدخله المستخدم.'),
L('الدوال والمصفوفات','الدالة تقسم البرنامج، والمصفوفة تخزن عناصر من نفس النوع.',[
['الدوال','','int add(int a, int b) {\n    return a + b;\n}\nint main() {\n    cout << add(2, 3);\n}'],
['المصفوفات','','int arr[3] = {5, 6, 7};\nfor (int i = 0; i < 3; i++) cout << arr[i];'],
['vector','مصفوفة ديناميكية من STL.','#include <vector>\nvector<int> v = {1, 2};\nv.push_back(3);\ncout << v.size();']],
'استخدم vector بدل المصفوفات العادية غالبا.',
[['نوع دالة بلا قيمة؟',['void','empty','null'],0],['حجم vector؟',['size()','len()','count()'],0],['أول فهرس؟',['0','1','-1'],0]],
'اكتب دالة تجد أكبر عنصر في مصفوفة.'),
L('المؤشرات والكلاسات','المؤشر يخزن عنوان متغير في الذاكرة. والكلاس يجمع بيانات ودوال.',[
['المؤشر','& لعنوان المتغير و* للوصول للقيمة.','int x = 5;\nint* p = &x;\ncout << *p; // 5'],
['class','','class Car {\npublic:\n    string name;\n    void honk() { cout << name << " beep"; }\n};\nCar c; c.name = "Fiat"; c.honk();'],
['الحذف','ما تنشئه بـ new احذفه بـ delete.','int* a = new int(3);\ndelete a;']],
'المؤشرات صعبة في البداية، ارسم الذاكرة على ورقة.',
[['& تعطي؟',['العنوان','القيمة','الحجم'],0],['* على مؤشر؟',['القيمة المخزنة','العنوان','حذف'],0],['public تعني؟',['متاح من الخارج','مخفي','ثابت'],0]],
'اعمل class لطالب فيه الاسم والدرجة ودالة تعرضه.')
]},
{id:'java',t:'Java',e:'☕',c:'#f87171',d:'تطبيقات الشركات وأندرويد القديم',lang:null,
v:[V('Learn JAVA From Scratch','Adel Nasim','PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN'),V('OOP in JAVA','Adel Nasim','PLCInYL3l2AagY7fFlhCrjpLiIFybW3yQv')],
L:[
L('هيكل برنامج Java','كل شيء في Java داخل class. نقطة البداية هي main.',[
['البرنامج الأول','','public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello");\n    }\n}'],
['الأنواع','int وdouble وboolean وchar وString.','int age = 10;\nString name = "Sara";\ndouble price = 9.5;'],
['الإدخال','Scanner لقراءة المدخلات.','import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nint n = sc.nextInt();']],
'اسم الملف لازم يطابق اسم الـ class العام.',
[['نقطة البداية؟',['main','start','run'],0],['نوع النص؟',['String','string','text'],0],['للطباعة؟',['System.out.println','print','echo'],0]],
'اكتب برنامجا يسأل عن اسمك ويرحب بك.'),
L('الشروط والحلقات','if وswitch وfor وwhile بصيغة مشابهة لـ C++.',[
['if','','if (age >= 18) {\n    System.out.println("Adult");\n} else {\n    System.out.println("Minor");\n}'],
['for','','for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}'],
['مقارنة النصوص','استخدم equals وليس ==.','if (name.equals("Sara")) { }']],
'مقارنة String تكون بـ equals دائما.',
[['مقارنة نصين؟',['equals','==','same'],0],['حلقة عدد محدد؟',['for','if','try'],0],['else تنفذ عندما؟',['الشرط خاطئ','الشرط صحيح','دائما'],0]],
'اطبع جدول ضرب رقم يدخله المستخدم.'),
L('الدوال (Methods) والمصفوفات','الدالة داخل class تسمى method. المصفوفة بحجم ثابت وArrayList مرنة.',[
['Method','','static int add(int a, int b) {\n    return a + b;\n}'],
['Array','','int[] nums = {1, 2, 3};\nSystem.out.println(nums.length);'],
['ArrayList','','import java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();\nlist.add("a");\nSystem.out.println(list.size());']],
'ArrayList أسهل من المصفوفة عندما يتغير العدد.',
[['حجم المصفوفة؟',['length','size()','count'],0],['ArrayList إضافة؟',['add','push','append'],0],['static تعني؟',['تتبع الكلاس','متغيرة','مخفية'],0]],
'اكتب method تحسب مجموع عناصر مصفوفة.'),
L('البرمجة الكائنية OOP','الكلاس قالب والكائن نسخة منه. أعمدة OOP: التغليف، الوراثة، تعدد الأشكال.',[
['class وobject','','class Person {\n    String name;\n    Person(String name) { this.name = name; }\n    void hi() { System.out.println("Hi " + name); }\n}\nnew Person("Sara").hi();'],
['الوراثة','','class Student extends Person {\n    Student(String n) { super(n); }\n}'],
['التغليف','private مع getters وsetters.','private int age;\npublic int getAge() { return age; }']],
'ابدأ بالتفكير: ما الأشياء (classes) في برنامجي؟',
[['الوراثة بكلمة؟',['extends','inherits','from'],0],['private تعني؟',['داخل الكلاس فقط','للجميع','ثابت'],0],['Constructor اسمه؟',['اسم الكلاس','init','new'],0]],
'اعمل class حيوان وclass قطة يرثه.')
]},
{id:'cs',t:'C#',e:'🎯',c:'#c084fc',d:'ويندوز وألعاب Unity',lang:null,
v:[V('C# Programming Course Level 1','Mohamed Shoshan','PLnzqK5HvcpwQLsXXXxx_mX3WvUEgGM0iA')],
L:[
L('أساسيات C#','لغة حديثة من مايكروسوفت تُستخدم في تطبيقات ويندوز والويب وألعاب Unity.',[
['البرنامج','','using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello");\n    }\n}'],
['المتغيرات','','int age = 10;\nstring name = "Sara";\nvar price = 9.5;'],
['الإدخال','','string s = Console.ReadLine();\nint n = int.Parse(s);']],
'var يستنتج النوع تلقائيا لكنه يبقى قوي النوع.',
[['للطباعة؟',['Console.WriteLine','print','echo'],0],['تحويل نص لرقم؟',['int.Parse','toInt','num()'],0],['var يعني؟',['النوع يُستنتج','بلا نوع','ثابت'],0]],
'اكتب برنامج يرحب بالمستخدم باسمه.'),
L('الشروط والحلقات','نفس منطق اللغات الأخرى مع foreach ممتازة للقوائم.',[
['if','','if (n > 0) Console.WriteLine("Positive");\nelse Console.WriteLine("Not positive");'],
['for وforeach','','for (int i = 0; i < 3; i++) Console.WriteLine(i);\nforeach (var x in new[] {1, 2}) Console.WriteLine(x);'],
['switch','','switch (n) {\n  case 1: Console.WriteLine("One"); break;\n  default: break;\n}']],
'foreach أنسب عندما لا تحتاج الفهرس.',
[['حلقة على قائمة؟',['foreach','each','loop'],0],['switch تنتهي بـ؟',['break','end','stop'],0],['علامة الاختلاف؟',['!=','<>','=/='],0]],
'اطبع الأرقام الفردية حتى 15.'),
L('الدوال والقوائم','Methods وList<T> من أهم أدوات C#.',[
['Method','','static int Add(int a, int b) => a + b;'],
['List','','using System.Collections.Generic;\nvar l = new List<string>();\nl.Add("a");\nConsole.WriteLine(l.Count);'],
['LINQ','استعلامات على القوائم.','using System.Linq;\nvar even = new[] {1,2,3,4}.Where(x => x % 2 == 0);']],
'LINQ تختصر حلقات كثيرة، جرّبها بعد أن تتقن الحلقات.',
[['عدد عناصر List؟',['Count','Length','Size'],0],['Where في LINQ؟',['تصفية','ترتيب','حذف'],0],['=> تسمى؟',['lambda','pointer','arrow class'],0]],
'اكتب دالة تعيد الأرقام الأكبر من 10 من قائمة.'),
L('الكلاسات','C# كائنية بالكامل. الخصائص (properties) تغني عن getters وsetters.',[
['class','','class Person {\n    public string Name { get; set; }\n    public void Hi() => Console.WriteLine("Hi " + Name);\n}\nnew Person { Name = "Sara" }.Hi();'],
['الوراثة','','class Student : Person { }'],
['interface','تعاقد يلزم الكلاس بدوال.','interface IShape { double Area(); }']],
'الوراثة بالنقطتين : في C#.',
[['الخاصية تكتب؟',['{ get; set; }','get()','prop'],0],['الوراثة بعلامة؟',[':','extends','->'],0],['interface تبدأ بحرف؟',['I (عرفا)','Z','B'],0]],
'اعمل class لمنتج فيه اسم وسعر ودالة لعرض بيانه.')
]}
);
