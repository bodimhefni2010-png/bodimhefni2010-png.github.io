// usage: node validate.js file.json  -> checks {id,L:[lesson...]}
const f=process.argv[2];const x=JSON.parse(require('fs').readFileSync(f,'utf8'));let e=[];
if(!x.id||!Array.isArray(x.L))e.push('need {"id":"...","L":[...]}');
(x.L||[]).forEach((l,i)=>{const w=m=>e.push(`lesson ${i+1} (${l.t||'?'}): ${m}`);
if(!l.t)w('missing t');if(!l.intro||l.intro.length<40)w('intro too short');
if(!Array.isArray(l.s)||l.s.length<3)w('need >=3 sections in s');
(l.s||[]).forEach((s,j)=>{if(!s.h||!s.p||s.p.length<15)w(`section ${j+1} needs h and p (>=30 chars)`);if(s.c!==undefined&&typeof s.c!=='string')w(`section ${j+1} c must be string`)});
if(!(l.s||[]).some(s=>s.c))w('needs at least one code example c');
if(!l.tip)w('missing tip');
if(!Array.isArray(l.q)||l.q.length<3)w('need >=3 quiz items q');
(l.q||[]).forEach((q,j)=>{if(!q.q||!Array.isArray(q.o)||q.o.length<2||!Number.isInteger(q.a)||q.a<0||q.a>=q.o.length)w(`quiz ${j+1} invalid (q, o[], a index)`)});
if(!l.hw)w('missing hw');
if(l.ex!==undefined){if(!Array.isArray(l.ex)||l.ex.length<2)w('ex needs >=2 exercises');else l.ex.forEach((e,j)=>{if(!e.p||!e.sol||!e.hint||e.sol.length<10)w(`exercise ${j+1} needs p, hint, sol`)})}
if(l.vid!==undefined&&!/^[\w-]{11}$/.test(l.vid)&&true)w('vid must be an 11-char YouTube id');
});
const d=new Set();(x.L||[]).forEach(l=>{if(d.has(l.t))e.push('duplicate title '+l.t);d.add(l.t)});
if(e.length){console.log('FAIL\n'+e.join('\n'));process.exit(1)}console.log('OK '+x.L.length+' lessons');
