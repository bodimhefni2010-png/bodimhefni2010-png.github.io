(function(){
if(window.__ckFeat)return;window.__ckFeat=1;
var AR=function(){return typeof LANG==='undefined'||LANG==='ar'||LANG===''};
function T(a,e){return AR()?a:e}
var st=document.createElement('style');st.textContent=
'.fx-seg{display:flex;gap:6px;margin:10px 0}.fx-seg button{flex:1;border:0;border-radius:12px;padding:9px 4px;font-weight:700;font-size:13px;background:#efe6ff;color:#7c4dff;font-family:inherit}.fx-seg button.on{background:#7c4dff;color:#fff}'+
'.fx-cards{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0}.fx-c{background:#fff;border-radius:16px;padding:12px;text-align:center;box-shadow:0 2px 10px #7c4dff14}.fx-c b{display:block;font-size:24px;color:#7c4dff}.fx-c small{color:#7a6fa8;font-weight:700}'+
'.fx-bars{display:flex;align-items:flex-end;gap:6px;height:110px;background:#fff;border-radius:16px;padding:12px 10px 6px;margin:10px 0}.fx-bars div{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;font-size:10px;color:#7a6fa8}.fx-bars i{display:block;width:100%;border-radius:6px 6px 0 0;background:linear-gradient(#7c4dff,#ff5d8f);min-height:3px}'+
'.fx-g{background:#fff;border-radius:16px;padding:12px;margin:8px 0;box-shadow:0 2px 10px #7c4dff14}.fx-g .r{display:flex;justify-content:space-between;align-items:center;gap:8px;font-weight:700}.fx-p{height:8px;border-radius:6px;background:#efe6ff;margin-top:8px;overflow:hidden}.fx-p i{display:block;height:100%;background:linear-gradient(90deg,#22c3a6,#4d8bff)}'+
'.fx-cl{border:0;border-radius:12px;padding:8px 12px;font-weight:700;background:#22c3a6;color:#fff;font-family:inherit}.fx-cl[disabled]{background:#d9d2ee;color:#fff}'+
'.fx-bd{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.fx-b{background:#fff;border-radius:14px;padding:10px 4px;text-align:center;font-size:12px;font-weight:700;color:#3b2f6b}.fx-b span{display:block;font-size:28px}.fx-b.off{opacity:.35;filter:grayscale(1)}'+
'.fx-o{display:block;width:100%;text-align:inherit;margin:6px 0;padding:11px;border:2px solid #efe6ff;border-radius:12px;background:#fff;font-weight:700;font-family:inherit;color:#3b2f6b}.fx-o.ok{border-color:#22c3a6;background:#e7faf5}.fx-o.no{border-color:#ff5d8f;background:#ffe9f0}'+
'.fx-in{width:100%;box-sizing:border-box;border:2px solid #efe6ff;border-radius:12px;padding:11px;font-family:inherit;font-size:15px;background:#fff;color:#3b2f6b;margin:6px 0}';
document.head.appendChild(st);
/* ---------- dates ---------- */
function p2(n){return n<10?'0'+n:''+n}
function dk(d){return d.getFullYear()+'-'+p2(d.getMonth()+1)+'-'+p2(d.getDate())}
function wkStart(d){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-((x.getDay()+1)%7));return x}
function pk(per,d){return per==='d'?dk(d):per==='w'?dk(wkStart(d)):per==='m'?d.getFullYear()+'-'+p2(d.getMonth()+1):''+d.getFullYear()}
/* ---------- log ---------- */
if(!S.log)S.log=[];if(!S.cl)S.cl={};if(!S.chd)S.chd={};if(S.lastDone===undefined)S.lastDone=Object.keys(S.done||{}).length;
var _add=window.add;
window.add=function(n,m){try{if(typeof n==='number'){var dn=Object.keys(S.done||{}).length,ls=dn-(S.lastDone||0);S.lastDone=dn;var k=/واجب/.test(m||'')?'hw':'q';S.log.push({t:Date.now(),n:n,l:Math.max(ls,0),k:k});if(S.log.length>3000)S.log=S.log.slice(-3000)}}catch(e){}return _add.apply(this,arguments)};
function ev(k,n,l){S.log.push({t:Date.now(),n:n||0,l:l||0,k:k});save()}
function agg(per,d){var key=pk(per,d||new Date()),r={xp:0,l:0,c:0,days:{}};S.log.forEach(function(e){var dd=new Date(e.t);if(pk(per,dd)!==key)return;if(e.k!=='bonus')r.xp+=e.n;r.l+=e.l;if(e.k==='ch')r.c++;r.days[dk(dd)]=1});r.dn=Object.keys(r.days).length;return r}
function totals(){var c=0,x=0;S.log.forEach(function(e){if(e.k==='ch')c++;x+=e.n});return {c:c,l:Object.keys(S.done||{}).length,xp:S.xp||0,s:S.streak||0}}
/* ---------- nav ---------- */
var NV=[['home','🏠','الرئيسية','Home'],['les','📚','الدروس','Lessons'],['chal','🎯','التحديات','Challenges'],['ask','💬','اسأل','Ask'],['me','👤','حسابي','Me']];
function buildNav(){var n=document.querySelector('.nav');if(!n)return;n.innerHTML=NV.map(function(x){return '<button id="n_'+x[0]+'" onclick="tab(\''+x[0]+'\')" style="padding:6px 8px"><span>'+x[1]+'</span>'+T(x[2],x[3])+'</button>'}).join('');}
window.nav=function(k){if(k==='prog')k='me';if(k==='lesson'||k==='track')k='les';NV.forEach(function(x){var b=document.getElementById('n_'+x[0]);if(b)b.className=x[0]===k?'on':''})};
var _tab=window.tab;
window.tab=function(k){buildNav();window.nav(k);scrollTo(0,0);if(k==='home')return home();if(k==='les')return lessonsTab();if(k==='chal')return challenges();if(k==='ask')return askTab();return meTab()};
/* ---------- lessons ---------- */
window.lessonsTab=function(){window.nav('les');var nl=nextLesson(),h='<h2>'+T('📚 كل الدروس','📚 All lessons')+'</h2><p class="sec">'+T('اختر لغة وابدأ من أول درس.','Pick a language and start from lesson 1.')+'</p>';
h+='<button class="cta" style="width:100%;margin:6px 0 12px" onclick="lesson(\''+nl[0]+'\','+nl[1]+')">▶ '+(totalDone()?T('كمّل من حيث وقفت','Continue where you stopped'):T('ابدأ الدرس الأول','Start the first lesson'))+'</button>';
h+='<input class="fx-in" id="fxs" placeholder="'+T('🔎 ابحث عن لغة','🔎 Search a language')+'" oninput="fxFilter(this.value)">';
TRACKS.forEach(function(t){var p=Math.round(doneCount(t.id)/Math.max(t.L.length,1)*100);h+='<div class="tr fxt" data-n="'+esc((t.t+' '+t.id).toLowerCase())+'" onclick="track(\''+t.id+'\')"><div class="ic" style="background:'+t.c+'22;border:1px solid '+t.c+'66">'+t.e+'</div><div style="flex:1"><b>'+t.t+'</b><small>'+t.d+' · '+t.L.length+' '+T('دروس','lessons')+' · '+t.v.length+' '+T('فيديو','videos')+'</small><div class="mini"><i style="width:'+p+'%;background:'+t.c+'"></i></div></div></div>'});
ENC.forEach(function(e){if(!TRACKS.some(function(t){return t.id===e.id}))h+='<div class="tr fxt" data-n="'+esc(e.t.toLowerCase())+'" onclick="courseLock(\''+e.id+'\')"><div class="ic" style="background:'+e.c+'22;border:1px solid '+e.c+'66">'+e.e+'</div><div style="flex:1"><b>'+e.t+' 🔒</b><small>'+e.d+' · '+e.lock+'</small></div></div>'});
app.innerHTML=h};
window.fxFilter=function(v){v=(v||'').toLowerCase();document.querySelectorAll('.fxt').forEach(function(e){e.style.display=e.getAttribute('data-n').indexOf(v)>=0?'':'none'})};
/* ---------- challenges ---------- */
var BANK=[
['ماذا تطبع هذه الشيفرة؟\nprint(2 + 3 * 2)',['10','8','7','12'],1],
['أي نوع بيانات هو "Hello" في بايثون؟',['int','str','list','bool'],1],
['أي وسم HTML ينشئ أكبر عنوان؟',['<h6>','<head>','<h1>','<title>'],2],
['أي خاصية CSS تغيّر لون النص؟',['font-color','text-style','color','fill'],2],
['ما نتيجة:\nlen([4, 5, 6])',['2','3','4','6'],1],
['ما الذي يفعله الأمر git commit؟',['يرفع الملفات للإنترنت','يحفظ لقطة من التغييرات محليا','يحذف المشروع','ينسخ مستودعا'],1],
['أي حلقة تكرر الكود طالما الشرط صحيح؟',['if','while','def','import'],1],
['ما نتيجة:\n"ab" * 3',['ababab','ab3','aaabbb','خطأ'],0],
['أي رمز يبدأ تعليقا في بايثون؟',['//','#','<!--','--'],1],
['في JavaScript، أي كلمة تعرّف متغيرا لا يتغير؟',['var','let','const','set'],2],
['ما نتيجة:\n7 // 2',['3.5','3','4','2'],1],
['أي وسم HTML ينشئ رابطا؟',['<a>','<link>','<href>','<url>'],0],
['ما نتيجة:\n[1,2,3][0]',['0','1','2','3'],1],
['ما الدالة التي تقرأ إدخالا من المستخدم في بايثون؟',['read()','scan()','input()','get()'],2],
['ما معنى SQL SELECT؟',['يحذف صفوفا','يقرأ بيانات من جدول','ينشئ قاعدة بيانات','يغلق الاتصال'],1],
['ماذا يعني الرمز == ؟',['إسناد قيمة','مقارنة تساوي','جمع','نسخ'],1],
['كم عنصرا في:\nrange(5)',['4','5','6','0'],1],
['أي بنية بيانات في بايثون لا تقبل التكرار؟',['list','tuple','set','str'],2],
['ما نتيجة:\n"Code".lower()',['CODE','code','Code','خطأ'],1],
['أين تضع شيفرة CSS داخل HTML؟',['<style>','<script>','<css>','<body-style>'],0],
['ما الكلمة التي تعرّف دالة في بايثون؟',['func','function','def','fn'],2],
['ما نتيجة:\nTrue and False',['True','False','None','خطأ'],1],
['لماذا نستخدم الدوال؟',['لتكرار الكود وتنظيمه','لإبطاء البرنامج','لحذف الأخطاء تلقائيا','لا فائدة'],0],
['أي أمر يضيف عنصرا لآخر قائمة في بايثون؟',['push','append','add','insert_end'],1],
['ما نتيجة:\nbool("")',['True','False','None','""'],1],
['ما الفرق بين = و == ؟',['لا فرق','= إسناد و == مقارنة','= مقارنة و == إسناد','كلاهما حلقة'],1],
['كم قيمة تعيد:\nlen("كود")',['1','2','3','4'],2],
['أي وسم يجمع عناصر الصفحة المرئية؟',['<head>','<body>','<meta>','<title>'],1],
['ما الأمر الذي ينسخ مستودعا من GitHub؟',['git push','git clone','git init','git merge'],1],
['ما نتيجة:\nx = 5; x += 2; print(x)',['5','2','7','52'],2]
];
function todayQ(){var n=Math.floor((new Date().getTime()-new Date().getTimezoneOffset()*60000)/864e5);return BANK[n%BANK.length]}
function goal(id,txt,cur,max,per){var key=id+'|'+pk(per,new Date()),done=cur>=max,cl=S.cl[key],rw=per==='d'?10:per==='w'?40:120;
return '<div class="fx-g"><div class="r"><span>'+txt+'</span><span>'+Math.min(cur,max)+'/'+max+'</span></div><div class="fx-p"><i style="width:'+Math.min(100,cur/max*100)+'%"></i></div><div style="margin-top:8px;text-align:end">'+(cl?'✅ '+T('تم الاستلام','Claimed'):'<button class="fx-cl" '+(done?'':'disabled')+' onclick="fxClaim(\''+key+'\','+rw+')">'+(done?'🎁 '+T('استلم','Claim')+' +'+rw:'🔒 +'+rw)+'</button>')+'</div></div>'}
window.fxClaim=function(key,rw){if(S.cl[key])return;S.cl[key]=1;save();ev('bonus',rw,0);_add(rw,'🎁 +'+rw);challenges()};
window.challenges=function(){window.nav('chal');var d=agg('d'),w=agg('w'),m=agg('m'),q=todayQ(),tk=dk(new Date()),done=S.chd[tk];
var h='<h2>🎯 '+T('التحديات','Challenges')+'</h2><p class="sec">'+T('حلّ تحدي اليوم وحقق أهدافك واستلم النقاط.','Solve today\'s challenge, hit your goals and claim points.')+'</p>';
h+='<div class="box"><h3>'+T('⚡ تحدي اليوم','⚡ Today\'s challenge')+'</h3><pre dir="ltr" style="white-space:pre-wrap;text-align:left;background:#f4efff;border-radius:12px;padding:10px;color:#3b2f6b">'+esc(q[0])+'</pre><div id="fxq">';
q[1].forEach(function(o,i){h+='<button class="fx-o" dir="auto" '+(done?'disabled ':'')+'onclick="fxAns('+i+')">'+esc(o)+'</button>'});
h+='</div><p class="small" id="fxm">'+(done?'✅ '+T('حللت تحدي اليوم. عد غدا لتحدٍّ جديد.','Solved. Come back tomorrow.'):T('اختر الإجابة الصحيحة: +15 نقطة','Pick the right answer: +15 points'))+'</p></div>';
h+='<h3 style="margin:16px 0 4px">'+T('🌞 أهداف اليوم','🌞 Daily goals')+'</h3>'+goal('dl',T('أنهِ درسا','Finish a lesson'),d.l,1,'d')+goal('dx',T('اكسب 30 نقطة','Earn 30 points'),d.xp,30,'d')+goal('dc',T('حلّ تحدي اليوم','Solve today\'s challenge'),d.c,1,'d');
h+='<h3 style="margin:16px 0 4px">'+T('📅 أهداف الأسبوع','📅 Weekly goals')+'</h3>'+goal('wl',T('أنهِ 5 دروس','Finish 5 lessons'),w.l,5,'w')+goal('wx',T('اكسب 150 نقطة','Earn 150 points'),w.xp,150,'w')+goal('wd',T('ادرس 5 أيام','Study 5 days'),w.dn,5,'w');
h+='<h3 style="margin:16px 0 4px">'+T('🗓️ أهداف الشهر','🗓️ Monthly goals')+'</h3>'+goal('ml',T('أنهِ 20 درسا','Finish 20 lessons'),m.l,20,'m')+goal('mx',T('اكسب 600 نقطة','Earn 600 points'),m.xp,600,'m')+goal('md',T('ادرس 20 يوما','Study 20 days'),m.dn,20,'m');
h+='<p class="small" style="text-align:center">'+T('الأرقام تُحسب من اليوم على جهازك.','Counting starts from today, on this device.')+'</p>';app.innerHTML=h};
window.fxAns=function(i){var q=todayQ(),tk=dk(new Date());if(S.chd[tk])return;var bs=document.querySelectorAll('#fxq .fx-o');bs.forEach(function(b,j){b.disabled=true;if(j===q[2])b.className='fx-o ok'});
if(i===q[2]){S.chd[tk]=1;save();ev('ch',0,0);_add(15,'+15 '+T('تحدي اليوم','Challenge'));document.getElementById('fxm').textContent='✅ '+T('إجابة صحيحة! +15 نقطة','Correct! +15 points')}
else{bs[i].className='fx-o no';document.getElementById('fxm').textContent=T('إجابة غير صحيحة. الصحيحة باللون الأخضر. جرّب غدا.','Not quite. The right one is green. Try tomorrow.')}};
/* ---------- achievements ---------- */
var PER='d';
function bucket(per,off){var d=new Date();if(per==='d')d.setDate(d.getDate()-off);else if(per==='w')d.setDate(d.getDate()-7*off);else if(per==='m')d.setMonth(d.getMonth()-off,1);else d.setFullYear(d.getFullYear()-off);return d}
function lab(per,d){return per==='d'?String(d.getDate()):per==='w'?p2(d.getDate())+'/'+p2(d.getMonth()+1):per==='m'?p2(d.getMonth()+1):String(d.getFullYear()).slice(2)}
function achHtml(){var n=PER==='d'?7:PER==='w'?8:PER==='m'?12:3,a=agg(PER),bars=[],mx=1,i;for(i=n-1;i>=0;i--){var d=bucket(PER,i),r=agg(PER,d);bars.push([lab(PER,d),r.xp]);mx=Math.max(mx,r.xp)}
var nm={d:T('اليوم','Today'),w:T('الأسبوع','Week'),m:T('الشهر','Month'),y:T('السنة','Year')};
var h='<div class="box" id="fxa"><h3>🏅 '+T('إنجازاتي','My achievements')+'</h3><div class="fx-seg">'+['d','w','m','y'].map(function(p){return '<button class="'+(p===PER?'on':'')+'" onclick="fxPer(\''+p+'\')">'+nm[p]+'</button>'}).join('')+'</div>';
h+='<div class="fx-cards"><div class="fx-c"><b>'+a.xp+'</b><small>⭐ '+T('نقاط','Points')+'</small></div><div class="fx-c"><b>'+a.l+'</b><small>📘 '+T('دروس','Lessons')+'</small></div><div class="fx-c"><b>'+a.c+'</b><small>🎯 '+T('تحديات','Challenges')+'</small></div><div class="fx-c"><b>'+a.dn+'</b><small>📆 '+T('أيام دراسة','Study days')+'</small></div></div>';
h+='<div class="fx-bars" dir="ltr">'+bars.map(function(b){return '<div><i style="height:'+Math.max(3,b[1]/mx*80)+'px"></i>'+b[0]+'</div>'}).join('')+'</div>';
var t=totals(),B=[['🌱',T('أول درس','First lesson'),t.l>=1],['📘',T('10 دروس','10 lessons'),t.l>=10],['📚',T('50 درسا','50 lessons'),t.l>=50],['🎓',T('100 درس','100 lessons'),t.l>=100],['🔥',T('3 أيام متتالية','3-day streak'),t.s>=3],['⚡',T('7 أيام متتالية','7-day streak'),t.s>=7],['👑',T('30 يوما متتاليا','30-day streak'),t.s>=30],['⭐',T('100 نقطة','100 points'),t.xp>=100],['🌟',T('500 نقطة','500 points'),t.xp>=500],['💎',T('2000 نقطة','2000 points'),t.xp>=2000],['🎯',T('أول تحدٍّ','First challenge'),t.c>=1],['🏆',T('10 تحديات','10 challenges'),t.c>=10]];
h+='<h3 style="margin:10px 0 6px">'+T('الأوسمة','Badges')+'</h3><div class="fx-bd">'+B.map(function(b){return '<div class="fx-b '+(b[2]?'':'off')+'"><span>'+b[0]+'</span>'+b[1]+'</div>'}).join('')+'</div></div>';return h}
window.fxPer=function(p){PER=p;var e=document.getElementById('fxa');if(e)e.outerHTML=achHtml()};
window.meTab=function(){window.nav('me');me();var h2=app.querySelector('h2');var x=achHtml();if(h2)h2.insertAdjacentHTML('afterend',x);else app.insertAdjacentHTML('afterbegin',x)};
/* ---------- ask ---------- */
window.askTab=function(){window.nav('ask');var opts=TRACKS.map(function(t){return '<option>'+esc(t.t)+'</option>'}).join('');
app.innerHTML='<h2>💬 '+T('اسأل','Ask')+'</h2><p class="sec">'+T('عندك سؤال في أي درس؟ اكتبه وسيصل لصاحب التطبيق على واتساب.','Got a question about a lesson? Write it and it goes to the app owner on WhatsApp.')+'</p><div class="box"><label class="small">'+T('الموضوع','Topic')+'</label><select class="fx-in" id="fxt">'+opts+'<option>'+T('أخرى','Other')+'</option></select><label class="small">'+T('سؤالك','Your question')+'</label><textarea class="fx-in" id="fxq2" rows="5" placeholder="'+T('اكتب سؤالك هنا بوضوح، ويفضل مع الكود الذي جرّبته','Write your question clearly, ideally with the code you tried')+'"></textarea><button class="btn g" style="width:100%" onclick="fxSend()">📤 '+T('إرسال عبر واتساب','Send on WhatsApp')+'</button><p class="small" id="fxsm">'+T('سيفتح واتساب برسالة جاهزة، اضغط إرسال هناك.','WhatsApp opens with a ready message, press send there.')+'</p></div>'};
window.fxSend=function(){var q=(document.getElementById('fxq2').value||'').trim();if(q.length<3){document.getElementById('fxsm').textContent=T('اكتب سؤالك أولا','Write your question first');return}
var nm=S.user&&S.user.name?S.user.name:'',msg='سؤال من تطبيق كود زون'+(nm?' ('+nm+')':'')+'\nالموضوع: '+document.getElementById('fxt').value+'\nالسؤال: '+q;location.href='https://wa.me/'+WA+'?text='+encodeURIComponent(msg)};
/* ---------- boot ---------- */
buildNav();
if(document.querySelector('#n_home.on')||document.querySelector('.nav button.on')||true){window.nav('home')}
})();
