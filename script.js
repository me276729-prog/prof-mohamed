
(function(){
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var CUR=[['Mohamed','#2dd4bf'],['Design','#a855f7'],['Code','#22c55e'],['Data','#3b82f6']];
/* projects */
var P=[['Real Estate','HTML · CSS · JS · React','#134e4a,#2dd4bf'],['Clothing Store','React · PHP · SQL','#1e1b4b,#6366f1'],['Courses Platform','React · dark theme','#064e3b,#10b981'],['Seafood &amp; Meat Store','React · PHP · SQL','#0c4a6e,#38bdf8'],['Tourism Booking','Laravel · MySQL · Bootstrap','#581c87,#d946ef'],['Cafe Website','HTML · CSS · JS','#0f172a,#64748b']];
var cf=$('#cf'),cur=2;
P.forEach(function(p,i){var d=document.createElement('div');d.className='pj';d.style.background='linear-gradient(160deg,'+p[2].split(',')[0]+','+p[2].split(',')[1]+')';d.innerHTML='<em>'+(i+1)+'</em><h3>'+p[0]+'</h3><p>'+p[1]+'</p>';d.onclick=function(){cur=i;upd()};cf.appendChild(d)});
function upd(){$$('.pj').forEach(function(c,i){var d=i-cur,a=Math.abs(d);c.style.transform='translateX('+d*68+'%) translateZ('+(-a*90)+'px) rotateY('+(-d*14)+'deg) scale('+(1-a*.1)+')';c.style.zIndex=9-a;c.style.opacity=a>2?0:1-a*.3;c.style.pointerEvents=a>2?'none':'auto'});$('#pn').innerHTML=P[cur][0]}
$('#pv').onclick=function(){cur=(cur+P.length-1)%P.length;upd()};$('#nx').onclick=function(){cur=(cur+1)%P.length;upd()};upd();
/* wireframe reveal: blue boxes measured from the real elements, fake multiplayer cursors, then content fades in */
function wire(sec,done){
 var els=$$('[data-wf]',sec);els.forEach(function(e,i){e.style.setProperty('--i',i)});
 if(reduce){sec.classList.add('on');return done&&done()}
 var r0=sec.getBoundingClientRect(),ov=document.createElement('div');ov.className='ov';
 els.forEach(function(e,i){var r=e.getBoundingClientRect(),b=document.createElement('i');b.className='bx';b.style.cssText='left:'+(r.left-r0.left)+'px;top:'+(r.top-r0.top)+'px;width:'+r.width+'px;height:'+r.height+'px;animation-delay:'+i*.08+'s';b.dataset.s=Math.round(r.width)+' × '+Math.round(r.height);ov.appendChild(b)});
 var W=r0.width,H=r0.height,cs=[];
 CUR.forEach(function(c,i){var u=document.createElement('div');u.className='cur';u.style.setProperty('--c',c[1]);u.innerHTML='<b>'+c[0]+'</b>';u.style.transform='translate('+Math.random()*W+'px,'+Math.random()*H+'px)';ov.appendChild(u);cs.push(u)});
 sec.appendChild(ov);
 function mv(){cs.forEach(function(u,i){var b=ov.children[Math.floor(Math.random()*Math.max(1,els.length))];var x=b?parseFloat(b.style.left)+parseFloat(b.style.width)*Math.random():Math.random()*W,y=b?parseFloat(b.style.top)+parseFloat(b.style.height)*Math.random():Math.random()*H;u.style.transform='translate('+x+'px,'+y+'px)'})}
 requestAnimationFrame(function(){requestAnimationFrame(mv)});setTimeout(mv,800);
 setTimeout(function(){sec.classList.add('on');ov.classList.add('out');setTimeout(function(){ov.remove()},700);done&&done()},1500);
}
/* load: grid + lone cursors, then hero wireframe */
var boot=$('#boot');
if(!reduce){CUR.forEach(function(c,i){var u=document.createElement('div');u.className='cur';u.style.setProperty('--c',c[1]);u.innerHTML='<b>'+c[0]+'</b>';u.style.transform='translate('+Math.random()*innerWidth+'px,'+Math.random()*innerHeight+'px)';boot.appendChild(u);setTimeout(function(){u.style.transform='translate('+Math.random()*innerWidth+'px,'+Math.random()*innerHeight+'px)'},60)})}
setTimeout(function(){boot.classList.add('out');wire($('#home'))},reduce?0:900);
var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting&&x.target.id!=='home'&&!x.target._d){x.target._d=1;wire(x.target)}})},{threshold:.25});
$$('.sec').forEach(function(s){if(s.id!=='home')io.observe(s)});
var so=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting)$$('nav ul a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)})})},{threshold:.5});
$$('.sec').forEach(function(s){so.observe(s)});
/* language */
var ar=false;$$('[data-ar]').forEach(function(e){e.dataset.en=e.innerHTML});
$('#lang').onclick=function(){ar=!ar;document.documentElement.dir=ar?'rtl':'ltr';document.documentElement.lang=ar?'ar':'en';$$('[data-ar]').forEach(function(e){e.innerHTML=ar?e.dataset.ar:e.dataset.en});this.textContent=ar?'English':'عربي'};
/* contact form opens the visitor's mail app */
$('#fm').onsubmit=function(ev){ev.preventDefault();location.href='mailto:your@email.com?subject='+encodeURIComponent('Portfolio message from '+$('#n').value)+'&body='+encodeURIComponent($('#m').value+'\n\n'+$('#e').value)};
})();
