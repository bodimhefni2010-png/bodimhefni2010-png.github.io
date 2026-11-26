(function(){
if(window.__ckTheme)return;window.__ckTheme=1;
var l=document.createElement('link');l.rel='stylesheet';l.href='https://bodimhefni2010-png.github.io/codekids/theme/theme.css?v=1';document.head.appendChild(l);
var PAL=['#ff7a59','#ff5d8f','#7c4dff','#22c3a6','#4d8bff','#ffb400','#2fa8e0','#e04dd6'];
function col(i){return PAL[i%PAL.length]}
window.home=function(){nav('home');var nl=nextLesson();
var h='<div class="hd"><h1>🚀 '+(LANG==='ar'?'كود زون':'Code Zone')+'</h1><p>'+(LANG==='ar'?'تعلّم البرمجة بالمرح، خطوة بخطوة':'Learn programming with fun, step by step')+'</p><div class="stats"><div class="st"><b>'+S.xp+'</b><small>⭐ نقاط</small></div><div class="st"><b>'+(Math.floor(S.xp/100)+1)+'</b><small>🏆 مستوى</small></div><div class="st"><b>'+S.streak+'</b><small>🔥 أيام متتالية</small></div></div><div class="hbar"><i style="width:'+(totalDone()/Math.max(TOTAL,1)*100)+'%"></i></div></div>';
h+='<button class="cta2" onclick="lesson(\''+nl[0]+'\','+nl[1]+')">▶ '+(totalDone()?'كمّل من حيث وقفت':'ابدأ الدرس الأول')+'</button>';
if(PATHS.length){h+='<h2>اختر مسارك 🧭</h2><p class="sec">كل مسار يجمع اللغات اللازمة لهدفك بترتيب مقترح.</p><div class="grid">';
PATHS.forEach(function(x,i){h+='<div class="tc" style="background:linear-gradient(135deg,'+col(i)+','+col(i)+'bb)" onclick="pathPage(\''+x.id+'\')"><span class="e">'+x.e+'</span><b>'+x.t+'</b><small>'+x.tracks.length+' لغات</small></div>'});h+='</div>'}
h+='<h2>اختر لغتك 💻</h2><p class="sec">كل لغة فيها دروس مفصلة وفيديوهات من أكثر من مدرس.</p><div class="grid">';
TRACKS.forEach(function(t,i){var p=Math.round(doneCount(t.id)/Math.max(t.L.length,1)*100);var c=t.c&&/^#[0-9a-f]{6}$/i.test(t.c)?t.c:col(i);
h+='<div class="tc" style="background:linear-gradient(135deg,'+c+','+c+'bb)" onclick="track(\''+t.id+'\')"><span class="e">'+t.e+'</span><b>'+t.t+'</b><small>'+t.L.length+' دروس · '+t.v.length+' فيديو</small><div class="pb"><i style="width:'+p+'%"></i></div></div>'});
ENC.forEach(function(e){if(!TRACKS.some(function(t){return t.id===e.id})){h+='<div class="tc" style="background:linear-gradient(135deg,#334155,#0f172a);grid-column:1/-1" onclick="courseLock(\''+e.id+'\')"><span class="e">'+e.e+'</span><b>'+e.t+' 🔒</b><small>'+e.d+' · '+e.lock+'</small></div>'}});
h+='</div><p class="small" style="text-align:center;margin-top:20px">'+((CRED&&CRED.foot)||CREDFOOT)+'</p>';
app.innerHTML=h};

var RP=[[/كود كيدز/g,'كود زون'],[/Code Kids/g,'Code Zone']];
function rn(root){try{var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null);var n;while(n=w.nextNode()){var v=n.nodeValue;if(!/كود كيدز|Code Kids/.test(v))continue;if(n.parentNode&&n.parentNode.closest&&n.parentNode.closest('pre,code,textarea'))continue;RP.forEach(function(r){v=v.replace(r[0],r[1])});n.nodeValue=v}}catch(e){}
document.title='كود زون';}
rn(document.body);
new MutationObserver(function(){rn(document.body)}).observe(document.body,{childList:true,subtree:true,characterData:true});
if(document.querySelector('#n_home.on'))try{home()}catch(e){}
})();
