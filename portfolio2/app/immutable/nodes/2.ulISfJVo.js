import{c as Sn,a as yt,f as pn}from"../chunks/Dr6BcVhZ.js";import{f as Og,Q as U,ab as Fg,au as td,c as lr,b as Ah,s as Bg,aG as eu,aO as zg,am as nd,a4 as kg,aP as Vg,aQ as Hg,aR as Gg,h as Fn,K as Wg,_ as Xg,$ as Yg,a0 as id,k as bc,j as wc,e as Ga,C as qg,aI as Zg,a as Ec,aS as bi,r as Qf,p as ep,aT as Tc,i as Kg,aF as Jg,d as jg,g as $g,aU as tp,q as Qg,aV as ev,aW as np,u as Ll,a2 as ip,aM as sp,aX as tv,al as nv,aY as Hn,O as Kt,y as Bt,aN as ct,aZ as Rn,V as Pn,B as kt,W as In,X as lt,aL as Ot,Y as at,a5 as Ze,t as Ul,Z as We,D as Wi,ac as Yn,a1 as iv,a_ as sv,av as sd}from"../chunks/Ps9T_8se.js";import{c as rv,d as rp,s as ai}from"../chunks/CaVQV3zl.js";import{r as br,i as aa,b as Ch,s as tu,p as Pe,a as Rh,d as ap,c as Wt}from"../chunks/Da7Dlve1.js";import{s as ji,r as On,h as av}from"../chunks/wk3QTuXZ.js";import{g as ov,d as nu,a as wr,w as oa,o as op,r as lp}from"../chunks/824HQfqP.js";function cp(i,e){return e}function lv(i,e,t){for(var n=[],s=e.length,r,a=e.length,o=0;o<s;o++){let u=e[o];ep(u,()=>{if(r){if(r.pending.delete(u),r.done.add(u),r.pending.size===0){var d=i.outrogroups;Ph(eu(r.done)),d.delete(r),d.size===0&&(i.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=n.length===0&&t!==null;if(l){var c=t,h=c.parentNode;Jg(h),h.append(c),i.items.clear()}Ph(e,!l)}else r={pending:new Set(e),done:new Set},(i.outrogroups??=new Set).add(r)}function Ph(i,e=!0){for(var t=0;t<i.length;t++)jg(i[t],e)}var rd;function Ho(i,e,t,n,s,r=null){var a=i,o=new Map,l=(e&tp)!==0;if(l){var c=i;a=Fn?bc($g(c)):c.appendChild(Ec())}Fn&&Wg();var h=null,u=Fg(()=>{var p=t();return zg(p)?p:p==null?[]:eu(p)}),d,f=!0;function g(){m.fallback=h,cv(m,d,a,e,n),h!==null&&(d.length===0?(h.f&bi)===0?Qf(h):(h.f^=bi,Xr(h,null,a)):ep(h,()=>{h=null}))}var v=Og(()=>{d=U(u);var p=d.length;let y=!1;if(Fn){var _=Xg(a)===Yg;_!==(p===0)&&(a=id(),bc(a),wc(!1),y=!0)}for(var x=new Set,P=lr,E=Bg(),R=0;R<p;R+=1){Fn&&Ga.nodeType===qg&&Ga.data===Zg&&(a=Ga,y=!0,wc(!1));var I=d[R],b=n(I,R),M=f?null:o.get(b);M?(M.v&&td(M.v,I),M.i&&td(M.i,R),E&&P.skipped_effects.delete(M.e)):(M=hv(o,f?a:rd??=Ec(),I,b,R,s,e,t),f||(M.e.f|=bi),o.set(b,M)),x.add(b)}if(p===0&&r&&!h&&(f?h=Ah(()=>r(a)):(h=Ah(()=>r(rd??=Ec())),h.f|=bi)),Fn&&p>0&&bc(id()),!f)if(E){for(const[D,N]of o)x.has(D)||P.skipped_effects.add(N.e);P.oncommit(g),P.ondiscard(()=>{})}else g();y&&wc(!0),U(u)}),m={effect:v,items:o,outrogroups:null,fallback:h};f=!1,Fn&&(a=Ga)}function cv(i,e,t,n,s){var r=(n&ev)!==0,a=e.length,o=i.items,l=i.effect.first,c,h=null,u,d=[],f=[],g,v,m,p;if(r)for(p=0;p<a;p+=1)g=e[p],v=s(g,p),m=o.get(v).e,(m.f&bi)===0&&(m.nodes?.a?.measure(),(u??=new Set).add(m));for(p=0;p<a;p+=1){if(g=e[p],v=s(g,p),m=o.get(v).e,i.outrogroups!==null)for(const M of i.outrogroups)M.pending.delete(m),M.done.delete(m);if((m.f&bi)!==0)if(m.f^=bi,m===l)Xr(m,null,t);else{var y=h?h.next:l;m===i.effect.last&&(i.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Di(i,h,m),Di(i,m,y),Xr(m,y,t),h=m,d=[],f=[],l=h.next;continue}if((m.f&Tc)!==0&&(Qf(m),r&&(m.nodes?.a?.unfix(),(u??=new Set).delete(m))),m!==l){if(c!==void 0&&c.has(m)){if(d.length<f.length){var _=f[0],x;h=_.prev;var P=d[0],E=d[d.length-1];for(x=0;x<d.length;x+=1)Xr(d[x],_,t);for(x=0;x<f.length;x+=1)c.delete(f[x]);Di(i,P.prev,E.next),Di(i,h,P),Di(i,E,_),l=_,h=E,p-=1,d=[],f=[]}else c.delete(m),Xr(m,l,t),Di(i,m.prev,m.next),Di(i,m,h===null?i.effect.first:h.next),Di(i,h,m),h=m;continue}for(d=[],f=[];l!==null&&l!==m;)(c??=new Set).add(l),f.push(l),l=l.next;if(l===null)continue}(m.f&bi)===0&&d.push(m),h=m,l=m.next}if(i.outrogroups!==null){for(const M of i.outrogroups)M.pending.size===0&&(Ph(eu(M.done)),i.outrogroups?.delete(M));i.outrogroups.size===0&&(i.outrogroups=null)}if(l!==null||c!==void 0){var R=[];if(c!==void 0)for(m of c)(m.f&Tc)===0&&R.push(m);for(;l!==null;)(l.f&Tc)===0&&l!==i.fallback&&R.push(l),l=l.next;var I=R.length;if(I>0){var b=(n&tp)!==0&&a===0?t:null;if(r){for(p=0;p<I;p+=1)R[p].nodes?.a?.measure();for(p=0;p<I;p+=1)R[p].nodes?.a?.fix()}lv(i,R,b)}}r&&Qg(()=>{if(u!==void 0)for(m of u)m.nodes?.a?.apply()})}function hv(i,e,t,n,s,r,a,o){var l=(a&Hg)!==0?(a&Gg)===0?kg(t,!1,!1):nd(t):null,c=(a&Vg)!==0?nd(s):null;return{v:l,i:c,e:Ah(()=>(r(e,l??t,c??s,o),()=>{i.delete(n)}))}}function Xr(i,e,t){if(i.nodes)for(var n=i.nodes.start,s=i.nodes.end,r=e&&(e.f&bi)===0?e.nodes.start:t;n!==null;){var a=Kg(n);if(r.before(n),n===s)return;n=a}}function Di(i,e,t){e===null?i.effect.first=t:e.next=t,t===null?i.effect.last=e:t.prev=e}const ad=[...` 	
\r\f \v\uFEFF`];function uv(i,e,t){var n=i==null?"":""+i;if(t){for(var s in t)if(t[s])n=n?n+" "+s:s;else if(n.length)for(var r=s.length,a=0;(a=n.indexOf(s,a))>=0;){var o=a+r;(a===0||ad.includes(n[a-1]))&&(o===n.length||ad.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function od(i,e=!1){var t=e?" !important;":";",n="";for(var s in i){var r=i[s];r!=null&&r!==""&&(n+=" "+s+": "+r+t)}return n}function Ac(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function dv(i,e){if(e){var t="",n,s;if(Array.isArray(e)?(n=e[0],s=e[1]):n=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var r=!1,a=0,o=!1,l=[];n&&l.push(...Object.keys(n).map(Ac)),s&&l.push(...Object.keys(s).map(Ac));var c=0,h=-1;const v=i.length;for(var u=0;u<v;u++){var d=i[u];if(o?d==="/"&&i[u-1]==="*"&&(o=!1):r?r===d&&(r=!1):d==="/"&&i[u+1]==="*"?o=!0:d==='"'||d==="'"?r=d:d==="("?a++:d===")"&&a--,!o&&r===!1&&a===0){if(d===":"&&h===-1)h=u;else if(d===";"||u===v-1){if(h!==-1){var f=Ac(i.substring(c,h).trim());if(!l.includes(f)){d!==";"&&u++;var g=i.substring(c,u).trim();t+=" "+g+";"}}c=u+1,h=-1}}}}return n&&(t+=od(n)),s&&(t+=od(s,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function Nl(i,e,t,n,s,r){var a=i.__className;if(Fn||a!==t||a===void 0){var o=uv(t,n,r);(!Fn||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):i.className=o),i.__className=t}else if(r&&s!==r)for(var l in r){var c=!!r[l];(s==null||c!==!!s[l])&&i.classList.toggle(l,c)}return r}function Cc(i,e={},t,n){for(var s in t){var r=t[s];e[s]!==r&&(t[s]==null?i.style.removeProperty(s):i.style.setProperty(s,r,n))}}function Ol(i,e,t,n){var s=i.__style;if(Fn||s!==e){var r=dv(e,n);(!Fn||r!==i.getAttribute("style"))&&(r==null?i.removeAttribute("style"):i.style.cssText=r),i.__style=e}else n&&(Array.isArray(n)?(Cc(i,t?.[0],n[0]),Cc(i,t?.[1],n[1],"important")):Cc(i,t,n));return n}function ri(i,e,t=e){var n=new WeakSet;np(i,"input",async s=>{var r=s?i.defaultValue:i.value;if(r=Rc(i)?Pc(r):r,t(r),lr!==null&&n.add(lr),await sp(),r!==(r=e())){var a=i.selectionStart,o=i.selectionEnd,l=i.value.length;if(i.value=r??"",o!==null){var c=i.value.length;a===o&&o===l&&c>l?(i.selectionStart=c,i.selectionEnd=c):(i.selectionStart=a,i.selectionEnd=Math.min(o,c))}}}),(Fn&&i.defaultValue!==i.value||Ll(e)==null&&i.value)&&(t(Rc(i)?Pc(i.value):i.value),lr!==null&&n.add(lr)),ip(()=>{var s=e();if(i===document.activeElement){var r=tv??lr;if(n.has(r))return}Rc(i)&&s===Pc(i.value)||i.type==="date"&&!s&&!i.value||s!==i.value&&(i.value=s??"")})}function hp(i,e,t=e){np(i,"change",n=>{var s=n?i.defaultChecked:i.checked;t(s)}),(Fn&&i.defaultChecked!==i.checked||Ll(e)==null)&&t(i.checked),ip(()=>{var n=e();i.checked=!!n})}function Rc(i){var e=i.type;return e==="number"||e==="range"}function Pc(i){return i===""?null:+i}function Go(i){let e;const t=rv(s=>{let r=!1;const a=i.subscribe(o=>{e=o,r&&s()});return r=!0,a});function n(){return nv()?(t(),e):ov(i)}return"set"in i?{get current(){return n()},set current(s){i.set(s)}}:{get current(){return n()}}}const ld=(i,e)=>{if(i===e)return!0;if(!i||!e)return!1;const t=i.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(i[n]!==e[n])return!1;return!0},fv=()=>{const i=[],n={items:i,remember:(s,r)=>{for(let o=0;o<i.length;o++){const l=i[o];if(ld(r,l.keys)&&l.promise)return l.promise}const a={promise:s(),keys:r};return i.push(a),a.promise},clear:s=>{for(let r=0;r<i.length;r++){const a=i[r];if(ld(s,a.keys)){i.splice(r,1);return}}}};return Hn("threlte-cache",n),n};const Pa="177",As={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ss={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},up=0,Ih=1,dp=2,pv=3,mv=0,iu=1,Kr=2,oi=3,ti=0,Ut=1,un=2,An=0,Cs=1,Dh=2,Lh=3,Uh=4,fp=5,Hi=100,pp=101,mp=102,gp=103,vp=104,_p=200,xp=201,yp=202,Mp=203,Wo=204,Xo=205,Sp=206,bp=207,wp=208,Ep=209,Tp=210,Ap=211,Cp=212,Rp=213,Pp=214,Yo=0,la=1,qo=2,Ps=3,Zo=4,Ko=5,Jo=6,jo=7,Ia=0,Ip=1,Dp=2,Ei=0,Lp=1,Up=2,Np=3,Op=4,Fp=5,$o=6,Bp=7,Nh="attached",zp="detached",Fl=300,Ai=301,qi=302,ca=303,ha=304,Er=306,Is=1e3,kn=1001,ua=1002,nn=1003,su=1004,gv=1004,cr=1005,vv=1005,It=1006,Jr=1007,_v=1007,$n=1008,xv=1008,sn=1009,ru=1010,au=1011,gr=1012,Bl=1013,hi=1014,Mn=1015,Fs=1016,zl=1017,kl=1018,Ds=1020,ou=35902,lu=1021,cu=1022,fn=1023,vr=1026,Ls=1027,Vl=1028,Da=1029,hu=1030,Hl=1031,yv=1032,Gl=1033,jr=33776,$r=33777,Qr=33778,ea=33779,Qo=35840,el=35841,tl=35842,nl=35843,il=36196,sl=37492,rl=37496,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,vl=37819,_l=37820,xl=37821,ta=36492,yl=36494,Ml=36495,uu=36283,Sl=36284,bl=36285,wl=36286,kp=2200,Vp=2201,Hp=2202,da=2300,El=2301,zo=2302,bs=2400,ws=2401,fa=2402,Wl=2500,du=2501,Mv=0,Sv=1,bv=2,Bs=3200,Gp=3201,wv=3202,Ev=3203,$i=0,Wp=1,jn="",gt="srgb",Ci="srgb-linear",pa="linear",xt="srgb",Tv=0,xs=7680,Av=7681,Cv=7682,Rv=7683,Pv=34055,Iv=34056,Dv=5386,Lv=512,Uv=513,Nv=514,Ov=515,Fv=516,Bv=517,zv=518,Oh=519,Xp=512,Yp=513,qp=514,fu=515,Zp=516,Kp=517,Jp=518,jp=519,ma=35044,kv=35048,Vv=35040,Hv=35045,Gv=35049,Wv=35041,Xv=35046,Yv=35050,qv=35042,Zv="100",Fh="300 es",Vn=2e3,ga=2001,Kv={COMPUTE:"compute",RENDER:"render"},Jv={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},jv={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FLAT_FIRST:"flat first",FLAT_EITHER:"flat either"};class Dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cd=1234567;const Rs=Math.PI/180,_r=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function pu(i,e){return(i%e+e)%e}function $v(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qv(i,e,t){return i!==e?(t-i)/(e-i):0}function na(i,e,t){return(1-t)*i+t*e}function e0(i,e,t,n){return na(i,e,1-Math.exp(-t*n))}function t0(i,e=1){return e-Math.abs(pu(i,e*2)-e)}function n0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function i0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function s0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function r0(i,e){return i+Math.random()*(e-i)}function a0(i){return i*(.5-Math.random())}function o0(i){i!==void 0&&(cd=i);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l0(i){return i*Rs}function c0(i){return i*_r}function h0(i){return(i&i-1)===0&&i!==0}function u0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function d0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function f0(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bn={DEG2RAD:Rs,RAD2DEG:_r,generateUUID:Cn,clamp:$e,euclideanModulo:pu,mapLinear:$v,inverseLerp:Qv,lerp:na,damp:e0,pingpong:t0,smoothstep:n0,smootherstep:i0,randInt:s0,randFloat:r0,randFloatSpread:a0,seededRandom:o0,degToRad:l0,radToDeg:c0,isPowerOfTwo:h0,ceilPowerOfTwo:u0,floorPowerOfTwo:d0,setQuaternionFromProperEuler:f0,normalize:nt,denormalize:dn};class Q{constructor(e=0,t=0){Q.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),E=Math.atan2(P,p*y);m=Math.sin(m*E)/P,o=Math.sin(o*E)/P}const x=o*y;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new T,hd=new Xt;class et{constructor(e,t,n,s,r,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],_=s[4],x=s[7],P=s[2],E=s[5],R=s[8];return r[0]=a*v+o*y+l*P,r[3]=a*m+o*_+l*E,r[6]=a*p+o*x+l*R,r[1]=c*v+h*y+u*P,r[4]=c*m+h*_+u*E,r[7]=c*p+h*x+u*R,r[2]=d*v+f*y+g*P,r[5]=d*m+f*_+g*E,r[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dc.makeScale(e,t)),this}rotate(e){return this.premultiply(Dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dc=new et;function $p(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const p0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function hr(i,e){return new p0[i](e)}function va(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qp(){const i=va("canvas");return i.style.display="block",i}const ud={};function pr(i){i in ud||(ud[i]=!0,console.warn(i))}function m0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function g0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _0(){const i={enabled:!0,workingColorSpace:Ci,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?pa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ci]:{primaries:e,whitePoint:n,transfer:pa,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}const ot=_0();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gs;class em{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=va("canvas")),Gs.width=e.width,Gs.height=e.height;const s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x0=0;class Gi{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lc(s[a].image)):r.push(Lc(s[a]))}else r=Lc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?em.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;const Uc=new T;class At extends Dn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=kn,s=kn,r=It,a=$n,o=fn,l=sn,c=At.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Cn(),this.name="",this.source=new Gi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Is:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Is:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Fl;At.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,s=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(f+1)/2,P=(p+1)/2,E=(h+d)/4,R=(u+v)/4,I=(g+m)/4;return _>x&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=E/n,r=R/n):x>P?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mu extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new At(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Gi(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xl extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class M0 extends jt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Xl(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Yl extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S0 extends jt{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Yl(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Vt{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wa.copy(n.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Xa.subVectors(this.max,Dr),Ws.subVectors(e.a,Dr),Xs.subVectors(e.b,Dr),Ys.subVectors(e.c,Dr),Li.subVectors(Xs,Ws),Ui.subVectors(Ys,Xs),ss.subVectors(Ws,Ys);let t=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-ss.z,ss.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,ss.z,0,-ss.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-ss.y,ss.x,0];return!Nc(t,Ws,Xs,Ys,Xa)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Ws,Xs,Ys,Xa))?!1:(Ya.crossVectors(Li,Ui),t=[Ya.x,Ya.y,Ya.z],Nc(t,Ws,Xs,Ys,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new T,new T,new T,new T,new T,new T,new T,new T],qn=new T,Wa=new Vt,Ws=new T,Xs=new T,Ys=new T,Li=new T,Ui=new T,ss=new T,Dr=new T,Xa=new T,Ya=new T,rs=new T;function Nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);const o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=e.dot(rs),c=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const b0=new Vt,Lr=new T,Oc=new T;class Ht{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):b0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Oc)),this.expandByPoint(Lr.copy(e.center).sub(Oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new T,Fc=new T,qa=new T,Ni=new T,Bc=new T,Za=new T,zc=new T;class Pi{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fc.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Fc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(qa),o=Ni.dot(this.direction),l=-Ni.dot(qa),c=Ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fc).addScaledVector(qa,d),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,r){Bc.subVectors(t,e),Za.subVectors(n,e),zc.crossVectors(Bc,Za);let a=this.direction.dot(zc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(Za.crossVectors(Ni,Za));if(l<0)return null;const c=o*this.direction.dot(Bc.cross(Ni));if(c<0||l+c>a)return null;const h=-o*Ni.dot(zc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,E0)}lookAt(e,t,n){const s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Oi.crossVectors(n,En),Oi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Oi.crossVectors(n,En)),Oi.normalize(),Ka.crossVectors(En,Oi),s[0]=Oi.x,s[4]=Ka.x,s[8]=En.x,s[1]=Oi.y,s[5]=Ka.y,s[9]=En.y,s[2]=Oi.z,s[6]=Ka.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],x=n[11],P=n[15],E=s[0],R=s[4],I=s[8],b=s[12],M=s[1],D=s[5],N=s[9],z=s[13],W=s[2],j=s[6],k=s[10],ne=s[14],G=s[3],le=s[7],xe=s[11],ye=s[15];return r[0]=a*E+o*M+l*W+c*G,r[4]=a*R+o*D+l*j+c*le,r[8]=a*I+o*N+l*k+c*xe,r[12]=a*b+o*z+l*ne+c*ye,r[1]=h*E+u*M+d*W+f*G,r[5]=h*R+u*D+d*j+f*le,r[9]=h*I+u*N+d*k+f*xe,r[13]=h*b+u*z+d*ne+f*ye,r[2]=g*E+v*M+m*W+p*G,r[6]=g*R+v*D+m*j+p*le,r[10]=g*I+v*N+m*k+p*xe,r[14]=g*b+v*z+m*ne+p*ye,r[3]=y*E+_*M+x*W+P*G,r[7]=y*R+_*D+x*j+P*le,r[11]=y*I+_*N+x*k+P*xe,r[15]=y*b+_*z+x*ne+P*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*c-v*d*c+v*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*v*c-g*u*c+g*o*f-a*v*f-h*o*p+a*u*p,P=g*u*l-h*v*l-g*o*d+a*v*d+h*o*m-a*u*m,E=t*y+n*_+s*x+r*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=y*R,e[1]=(v*d*r-u*m*r-v*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=x*R,e[9]=(g*u*r-h*v*r-g*n*f+t*v*f+h*n*p-t*u*p)*R,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=P*R,e[13]=(h*v*s-g*u*s+g*n*d-t*v*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=l*c,_=l*h,x=l*u,P=n.x,E=n.y,R=n.z;return s[0]=(1-(v+p))*P,s[1]=(f+x)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+_)*R,s[9]=(m-y)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qs.set(s[0],s[1],s[2]).length();const a=qs.set(s[4],s[5],s[6]).length(),o=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zn.copy(this);const c=1/r,h=1/a,u=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Vn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(o===Vn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ga)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h;let g,v;if(o===Vn)g=(a+r)*u,v=-2*u;else if(o===ga)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qs=new T,Zn=new Fe,w0=new T(0,0,0),E0=new T(1,1,1),Oi=new T,Ka=new T,En=new T,pd=new Fe,md=new Xt;class tn{constructor(e=0,t=0,n=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T0=0;const gd=new T,Zs=new Xt,vi=new Fe,Ja=new T,Ur=new T,A0=new T,C0=new Xt,vd=new T(1,0,0),_d=new T(0,1,0),xd=new T(0,0,1),yd={type:"added"},R0={type:"removed"},Ks={type:"childadded",child:null},kc={type:"childremoved",child:null};class ht extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new T,t=new tn,n=new Xt,s=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Fe},normalMatrix:{value:new et}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(vd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ja.copy(e):Ja.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ur,Ja,this.up):vi.lookAt(Ja,Ur,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(vi),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R0),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,A0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ht.DEFAULT_UP=new T(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new T,_i=new T,Vc=new T,xi=new T,Js=new T,js=new T,Md=new T,Hc=new T,Gc=new T,Wc=new T,Xc=new tt,Yc=new tt,qc=new tt;class yn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),_i.subVectors(n,t),Vc.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(_i),l=Kn.dot(Vc),c=_i.dot(_i),h=_i.dot(Vc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Xc.setScalar(0),Yc.setScalar(0),qc.setScalar(0),Xc.fromBufferAttribute(e,t),Yc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xc,r.x),a.addScaledVector(Yc,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),_i.subVectors(e,t),Kn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Kn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return yn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Js.subVectors(s,n),js.subVectors(r,n),Hc.subVectors(e,n);const l=Js.dot(Hc),c=js.dot(Hc);if(l<=0&&c<=0)return t.copy(n);Gc.subVectors(e,s);const h=Js.dot(Gc),u=js.dot(Gc);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Js,a);Wc.subVectors(e,r);const f=Js.dot(Wc),g=js.dot(Wc);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(js,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Md.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Md,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Js,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Zc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=pu(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zc(a,r,e+1/3),this.g=Zc(a,r,e),this.b=Zc(a,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ot.workingToColorSpace(an.copy(this),e),Math.round($e(an.r*255,0,255))*65536+Math.round($e(an.g*255,0,255))*256+Math.round($e(an.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(an.copy(this),t);const n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=gt){ot.workingToColorSpace(an.copy(this),e);const t=an.r,n=an.g,s=an.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ja);const n=na(Fi.h,ja.h,t),s=na(Fi.s,ja.s,t),r=na(Fi.l,ja.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new _e;_e.NAMES=tm;let P0=0;class Qt extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=Cs,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ui extends Qt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Si=I0();function I0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function xn(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=$e(i,-65504,65504),Si.floatView[0]=i;const e=Si.uint32View[0],t=e>>23&511;return Si.baseTable[t]+((e&8388607)>>Si.shiftTable[t])}function Yr(i){const e=i>>10;return Si.uint32View[0]=Si.mantissaTable[Si.offsetTable[e]+(i&1023)]+Si.exponentTable[e],Si.floatView[0]}class D0{static toHalfFloat(e){return xn(e)}static fromHalfFloat(e){return Yr(e)}}const Ft=new T,$a=new Q;let L0=0;class pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ma,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ma&&(e.usage=this.usage),e}}class U0 extends pt{constructor(e,t,n){super(new Int8Array(e),t,n)}}class N0 extends pt{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class O0 extends pt{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class F0 extends pt{constructor(e,t,n){super(new Int16Array(e),t,n)}}class gu extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class B0 extends pt{constructor(e,t,n){super(new Int32Array(e),t,n)}}class vu extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class z0 extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Yr(this.array[e*this.itemSize]);return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=xn(t),this}getY(e){let t=Yr(this.array[e*this.itemSize+1]);return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=xn(t),this}getZ(e){let t=Yr(this.array[e*this.itemSize+2]);return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=xn(t),this}getW(e){let t=Yr(this.array[e*this.itemSize+3]);return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=xn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=xn(t),this.array[e+1]=xn(n),this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=xn(t),this.array[e+1]=xn(n),this.array[e+2]=xn(s),this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=xn(t),this.array[e+1]=xn(n),this.array[e+2]=xn(s),this.array[e+3]=xn(r),this}}class Le extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let k0=0;const Nn=new Fe,Kc=new ht,$s=new T,Tn=new Vt,Nr=new Vt,Zt=new T;class Je extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($p(e)?vu:gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Tn.min,Nr.min),Tn.expandByPoint(Zt),Zt.addVectors(Tn.max,Nr.max),Tn.expandByPoint(Zt)):(Tn.expandByPoint(Nr.min),Tn.expandByPoint(Nr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),Zt.add($s)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new T,l[I]=new T;const c=new T,h=new T,u=new T,d=new Q,f=new Q,g=new Q,v=new T,m=new T;function p(I,b,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[I].add(v),o[b].add(v),o[M].add(v),l[I].add(m),l[b].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,b=y.length;I<b;++I){const M=y[I],D=M.start,N=M.count;for(let z=D,W=D+N;z<W;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const _=new T,x=new T,P=new T,E=new T;function R(I){P.fromBufferAttribute(s,I),E.copy(P);const b=o[I];_.copy(b),_.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(E,b);const D=x.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,D)}for(let I=0,b=y.length;I<b;++I){const M=y[I],D=M.start,N=M.count;for(let z=D,W=D+N;z<W;z+=3)R(e.getX(z+0)),R(e.getX(z+1)),R(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Je,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new Fe,as=new Pi,Qa=new Ht,bd=new T,eo=new T,to=new T,no=new T,Jc=new T,io=new T,wd=new T,so=new T;class Tt extends ht{constructor(e=new Je,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Jc.fromBufferAttribute(u,e),a?io.addScaledVector(Jc,h):io.addScaledVector(Jc.sub(t),h))}t.add(io)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Qa.containsPoint(as.origin)===!1&&(as.intersectSphere(Qa,bd)===null||as.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),as.copy(e.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=_;x<P;x+=3){const E=o.getX(x),R=o.getX(x+1),I=o.getX(x+2);s=ro(this,p,e,n,c,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=ro(this,a,e,n,c,h,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=y,P=_;x<P;x+=3){const E=x,R=x+1,I=x+2;s=ro(this,p,e,n,c,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,x=m+2;s=ro(this,a,e,n,c,h,u,y,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function V0(i,e,t,n,s,r,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ti,o),l===null)return null;so.copy(o),so.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,eo),i.getVertexPosition(l,to),i.getVertexPosition(c,no);const h=V0(i,e,t,n,eo,to,no,wd);if(h){const u=new T;yn.getBarycoord(wd,eo,to,no,u),s&&(h.uv=yn.getInterpolatedAttribute(s,o,l,c,u,new Q)),r&&(h.uv1=yn.getInterpolatedAttribute(r,o,l,c,u,new Q)),a&&(h.normal=yn.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};yn.getNormal(eo,to,no,d.normal),h.face=d,h.barycoord=u}return h}class Qi extends Je{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(u,2));function g(v,m,p,y,_,x,P,E,R,I,b){const M=x/R,D=P/I,N=x/2,z=P/2,W=E/2,j=R+1,k=I+1;let ne=0,G=0;const le=new T;for(let xe=0;xe<k;xe++){const ye=xe*D-z;for(let Ie=0;Ie<j;Ie++){const ge=Ie*M-N;le[v]=ge*y,le[m]=ye*_,le[p]=W,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[p]=E>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ie/R),u.push(1-xe/I),ne+=1}}for(let xe=0;xe<I;xe++)for(let ye=0;ye<R;ye++){const Ie=d+ye+j*xe,ge=d+ye+j*(xe+1),V=d+(ye+1)+j*(xe+1),ae=d+(ye+1)+j*xe;l.push(Ie,ge,ae),l.push(ge,V,ae),G+=6}o.addGroup(f,G,b),f+=G,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){const e={};for(let t=0;t<i.length;t++){const n=xr(i[t]);for(const s in n)e[s]=n[s]}return e}function H0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nm(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const yr={clone:xr,merge:hn};var G0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Qt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zl extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new T,Ed=new Q,Td=new Q;class zt extends Zl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,Td),t.subVectors(Td,Ed)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class _u extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new zt(Qs,er,e,t);r.layers=this.layers,this.add(r);const a=new zt(Qs,er,e,t);a.layers=this.layers,this.add(a);const o=new zt(Qs,er,e,t);o.layers=this.layers,this.add(o);const l=new zt(Qs,er,e,t);l.layers=this.layers,this.add(l);const c=new zt(Qs,er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class La extends At{constructor(e=[],t=Ai,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xu extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new La(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qi(5,5,5),r=new $t({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:An});r.uniforms.tEquirect.value=t;const a=new Tt(s,r),o=t.minFilter;return t.minFilter===$n&&(t.minFilter=It),new _u(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ur extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Kl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new Kl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new _e(e),this.near=t,this.far=n}clone(){return new Jl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Mr=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class jl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ma,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new T;class Us{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Us(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yu extends Qt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let tr;const Or=new T,nr=new T,ir=new T,sr=new Q,Fr=new Q,im=new Fe,ao=new T,Br=new T,oo=new T,Ad=new Q,jc=new Q,Cd=new Q;class sm extends ht{constructor(e=new yu){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Je;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jl(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Us(n,3,0,!1)),tr.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Q(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;lo(ao.set(-.5,-.5,0),ir,a,nr,s,r),lo(Br.set(.5,-.5,0),ir,a,nr,s,r),lo(oo.set(.5,.5,0),ir,a,nr,s,r),Ad.set(0,0),jc.set(1,0),Cd.set(1,1);let o=e.ray.intersectTriangle(ao,Br,oo,!1,Or);if(o===null&&(lo(Br.set(-.5,.5,0),ir,a,nr,s,r),jc.set(0,1),o=e.ray.intersectTriangle(ao,oo,Br,!1,Or),o===null))return;const l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:yn.getInterpolation(Or,ao,Br,oo,Ad,jc,Cd,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lo(i,e,t,n,s,r){sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fr.x=r*sr.x-s*sr.y,Fr.y=s*sr.x+r*sr.y):Fr.copy(sr),i.copy(e),i.x+=Fr.x,i.y+=Fr.y,i.applyMatrix4(im)}const co=new T,Rd=new T;class rm extends ht{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){co.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(co);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){co.setFromMatrixPosition(e.matrixWorld),Rd.setFromMatrixPosition(this.matrixWorld);const n=co.distanceTo(Rd)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Pd=new T,Id=new tt,Dd=new tt,Y0=new T,Ld=new Fe,ho=new T,$c=new Ht,Ud=new Fe,Qc=new Pi;class am extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Nh,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingBox.expandByPoint(ho)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ht),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ho),this.boundingSphere.expandByPoint(ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$c.copy(this.boundingSphere),$c.applyMatrix4(s),e.ray.intersectsSphere($c)!==!1&&(Ud.copy(s).invert(),Qc.copy(e.ray).applyMatrix4(Ud),!(this.boundingBox!==null&&Qc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Id.fromBufferAttribute(s.attributes.skinIndex,e),Dd.fromBufferAttribute(s.attributes.skinWeight,e),Pd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Dd.getComponent(r);if(a!==0){const o=Id.getComponent(r);Ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Y0.copy(Pd).applyMatrix4(Ld),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Mu extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ci extends At{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,h=nn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nd=new Fe,q0=new Fe;class $l{constructor(e=[],t=[]){this.uuid=Cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:q0;Nd.multiplyMatrices(o,t[r]),Nd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $l(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ci(t,e,e,fn,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Mu),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Zi extends pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const rr=new Fe,Od=new Fe,uo=[],Fd=new Vt,Z0=new Fe,zr=new Tt,kr=new Ht;class _a extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Fd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Fd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ht),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),kr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(n),e.ray.intersectsSphere(kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Od.multiplyMatrices(n,rr),zr.matrixWorld=Od,zr.raycast(e,uo);for(let a=0,o=uo.length;a<o;a++){const l=uo[a];l.instanceId=r,l.object=this,t.push(l)}uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(s*this.count),s,this.count,Vl,Mn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const eh=new T,K0=new T,J0=new et;class li{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=eh.subVectors(n,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||J0.getNormalMatrix(e),s=this.coplanarPoint(eh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Ht,fo=new T;class Tr{constructor(e=new li,t=new li,n=new li,s=new li,r=new li,a=new li){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+g,x+y).normalize(),n[3].setComponents(l-a,d-h,m-g,x-y).normalize(),n[4].setComponents(l-o,d-u,m-v,x-_).normalize(),t===Vn)n[5].setComponents(l+o,d+u,m+v,x+_).normalize();else if(t===ga)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ii=new Fe,si=new Tr;class Ql{constructor(){this.coordinateSystem=Vn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const s=t.cameras[n];if(ii.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),si.setFromProjectionMatrix(ii,this.coordinateSystem),si.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const s=t.cameras[n];if(ii.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),si.setFromProjectionMatrix(ii,this.coordinateSystem),si.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const s=t.cameras[n];if(ii.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),si.setFromProjectionMatrix(ii,this.coordinateSystem),si.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const s=t.cameras[n];if(ii.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),si.setFromProjectionMatrix(ii,this.coordinateSystem),si.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const s=t.cameras[n];if(ii.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),si.setFromProjectionMatrix(ii,this.coordinateSystem),si.containsPoint(e))return!0}return!1}clone(){return new Ql}}function th(i,e){return i-e}function j0(i,e){return i.z-e.z}function $0(i,e){return e.z-i.z}class Q0{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,s){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=s}reset(){this.list.length=0,this.index=0}}const vn=new Fe,e_=new _e(1,1,1),Bd=new Tr,t_=new Ql,po=new Vt,ls=new Ht,Vr=new T,zd=new T,n_=new T,nh=new Q0,on=new Tt,mo=[];function i_(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const s=i.count;for(let r=0;r<s;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,i.getComponent(r,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}function cs(i,e){if(i.constructor!==e.constructor){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)e[n]=i[n]}else{const t=Math.min(i.length,e.length);e.set(new i.constructor(i.buffer,0,t))}}class om extends Tt{constructor(e,t,n=t*2,s){super(new Je,s),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new ci(t,e,e,fn,Mn);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new ci(t,e,e,Da,hi);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new ci(t,e,e,fn,Mn);n.colorSpace=ot.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new pt(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(s):new Uint16Array(s);t.setIndex(new pt(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const s=e.getAttribute(n),r=t.getAttribute(n);if(s.itemSize!==r.itemSize||s.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingBoxAt(r,po).applyMatrix4(vn),e.union(po)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ht);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let n=0,s=t.length;n<s;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingSphereAt(r,ls).applyMatrix4(vn),e.union(ls)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:e};let s=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(th),s=this._availableInstanceIds.shift(),this._instanceInfo[s]=n):(s=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;vn.identity().toArray(r.image.data,s*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(e_.toArray(a.image.data,s*4),a.needsUpdate=!0),this._visibilityChanged=!0,s}addGeometry(e,t=-1,n=-1){this._initializeGeometry(e),this._validateGeometry(e);const s={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;s.vertexStart=this._nextVertexStart,s.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(s.indexStart=this._nextIndexStart,s.reservedIndexCount=n===-1?a.count:n),s.indexStart!==-1&&s.indexStart+s.reservedIndexCount>this._maxIndexCount||s.vertexStart+s.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(th),l=this._availableGeometryIds.shift(),r[l]=s):(l=this._geometryCount,this._geometryCount++,r.push(s)),this.setGeometryAt(l,e),this._nextIndexStart=s.indexStart+s.reservedIndexCount,this._nextVertexStart=s.vertexStart+s.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,s=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(s&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in n.attributes){const u=t.getAttribute(h),d=n.getAttribute(h);i_(u,d,l);const f=u.itemSize;for(let g=u.count,v=c;g<v;g++){const m=l+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(l*f,c*f)}if(s){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let d=0;d<a.count;d++)r.setX(h+d,l+a.getX(d));for(let d=a.count,f=u;d<f;d++)r.setX(h+d,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=s?o.indexStart:o.vertexStart,o.count=s?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const n=this._instanceInfo;for(let s=0,r=n.length;s<r;s++)n[s].active&&n[s].geometryIndex===e&&this.deleteInstance(s);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const n=this._geometryInfo,s=n.map((a,o)=>o).sort((a,o)=>n[a].vertexStart-n[o].vertexStart),r=this.geometry;for(let a=0,o=n.length;a<o;a++){const l=s[a],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:d}=c,f=r.index,g=f.array,v=e-u;for(let m=h;m<h+d;m++)g[m]=g[m]+v;f.array.copyWithin(t,h,h+d),f.addUpdateRange(t,d),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,d=r.attributes;for(const f in d){const g=d[f],{array:v,itemSize:m}=g;v.copyWithin(e*m,h*m,(h+u)*m),g.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingBox===null){const r=new Vt,a=n.index,o=n.attributes.position;for(let l=s.start,c=s.start+s.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(Vr.fromBufferAttribute(o,h))}s.boundingBox=r}return t.copy(s.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this.geometry,s=this._geometryInfo[e];if(s.boundingSphere===null){const r=new Ht;this.getBoundingBoxAt(e,po),po.getCenter(r.center);const a=n.index,o=n.attributes.position;let l=0;for(let c=s.start,h=s.start+s.count;c<h;c++){let u=c;a&&(u=a.getX(u)),Vr.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(Vr))}r.radius=Math.sqrt(l),s.boundingSphere=r}return t.copy(s.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const n=this._matricesTexture,s=this._matricesTexture.image.data;return t.toArray(s,e*16),n.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const n=this._geometryInfo[e];return t.vertexStart=n.vertexStart,t.vertexCount=n.vertexCount,t.reservedVertexCount=n.reservedVertexCount,t.indexStart=n.indexStart,t.indexCount=n.indexCount,t.reservedIndexCount=n.reservedIndexCount,t.start=n.start,t.count=n.count,t}setInstanceCount(e){const t=this._availableInstanceIds,n=this._instanceInfo;for(t.sort(th);t[t.length-1]===n.length;)n.pop(),t.pop();if(e<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const s=new Int32Array(e),r=new Int32Array(e);cs(this._multiDrawCounts,s),cs(this._multiDrawStarts,r),this._multiDrawCounts=s,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),cs(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),cs(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),cs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const n=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...n.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Je,this._initializeGeometry(r));const a=this.geometry;r.index&&cs(r.index.array,a.index.array);for(const o in r.attributes)cs(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const n=this._instanceInfo,s=this._geometryInfo,r=this.matrixWorld,a=this.geometry;on.material=this.material,on.geometry.index=a.index,on.geometry.attributes=a.attributes,on.geometry.boundingBox===null&&(on.geometry.boundingBox=new Vt),on.geometry.boundingSphere===null&&(on.geometry.boundingSphere=new Ht);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=s[c];on.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,on.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,on.geometry.boundingBox),this.getBoundingSphereAt(c,on.geometry.boundingSphere),on.raycast(e,mo);for(let u=0,d=mo.length;u<d;u++){const f=mo[u];f.object=this,f.batchId=o,t.push(f)}mo.length=0}on.material=null,on.geometry.index=null,on.geometry.attributes={},on.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._availableInstanceIds=e._availableInstanceIds.slice(),this._availableGeometryIds=e._availableGeometryIds.slice(),this._nextIndexStart=e._nextIndexStart,this._nextVertexStart=e._nextVertexStart,this._geometryCount=e._geometryCount,this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._indirectTexture=e._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(e,t,n,s,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=s.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data,v=n.isArrayCamera?t_:Bd;d&&!n.isArrayCamera&&(vn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Bd.setFromProjectionMatrix(vn,e.coordinateSystem));let m=0;if(this.sortObjects){vn.copy(this.matrixWorld).invert(),Vr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(vn),zd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(vn);for(let _=0,x=l.length;_<x;_++)if(l[_].visible&&l[_].active){const P=l[_].geometryIndex;this.getMatrixAt(_,vn),this.getBoundingSphereAt(P,ls).applyMatrix4(vn);let E=!1;if(d&&(E=!v.intersectsSphere(ls,n)),!E){const R=u[P],I=n_.subVectors(ls.center,Vr).dot(zd);nh.push(R.start,R.count,I,_)}}const p=nh.list,y=this.customSort;y===null?p.sort(r.transparent?$0:j0):y.call(this,p,n);for(let _=0,x=p.length;_<x;_++){const P=p[_];c[m]=P.start*o,h[m]=P.count,g[m]=P.index,m++}nh.reset()}else for(let p=0,y=l.length;p<y;p++)if(l[p].visible&&l[p].active){const _=l[p].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(p,vn),this.getBoundingSphereAt(_,ls).applyMatrix4(vn),x=!v.intersectsSphere(ls,n)),!x){const P=u[_];c[m]=P.start*o,h[m]=P.count,g[m]=p,m++}}f.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,s,r,a){this.onBeforeRender(e,null,s,r,a)}}class mn extends Qt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tl=new T,Al=new T,kd=new Fe,Hr=new Pi,go=new Ht,ih=new T,Vd=new T;class Ki extends ht{constructor(e=new Je,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tl.fromBufferAttribute(t,s-1),Al.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tl.distanceTo(Al);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;kd.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(kd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),y=h.getX(v+1),_=vo(this,e,Hr,l,p,y,v);_&&t.push(_)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=vo(this,e,Hr,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=vo(this,e,Hr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=vo(this,e,Hr,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function vo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Tl.fromBufferAttribute(o,s),Al.fromBufferAttribute(o,r),t.distanceSqToSegment(Tl,Al,ih,Vd)>n)return;ih.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ih);if(!(c<e.near||c>e.far))return{distance:c,point:Vd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Hd=new T,Gd=new T;class di extends Ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hd.fromBufferAttribute(t,s),Gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hd.distanceTo(Gd);e.setAttribute("lineDistance",new Le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lm extends Ki{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}let Su=class extends Qt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};const Wd=new Fe,Bh=new Pi,_o=new Ht,xo=new T;class cm extends ht{constructor(e=new Je,t=new Su){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,e.ray.intersectsSphere(_o)===!1)return;Wd.copy(s).invert(),Bh.copy(e.ray).applyMatrix4(Wd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);xo.fromBufferAttribute(u,m),Xd(xo,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)xo.fromBufferAttribute(u,g),Xd(xo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xd(i,e,t,n,s,r,a){const o=Bh.distanceSqToPoint(i);if(o<t){const l=new T;Bh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class hm extends At{constructor(e,t,n,s,r=It,a=It,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class s_ extends hm{constructor(e,t,n,s,r,a,o,l){super({},e,t,n,s,r,a,o,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(e){this.image=e,this.needsUpdate=!0}}class r_ extends At{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=nn,this.minFilter=nn,this.generateMipmaps=!1,this.needsUpdate=!0}}class ec extends At{constructor(e,t,n,s,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class a_ extends ec{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=kn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o_ extends ec{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class um extends At{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ua extends At{constructor(e,t,n=hi,s,r,a,o=nn,l=nn,c,h=vr,u=1){if(h!==vr&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class tc extends Je{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,v=s+1,m=new T,p=new T;for(let y=0;y<=g;y++){let _=0,x=0,P=0,E=0;if(y<=n){const b=y/n,M=b*Math.PI/2;x=-h-e*Math.cos(M),P=e*Math.sin(M),E=-e*Math.cos(M),_=b*u}else if(y<=n+r){const b=(y-n)/r;x=-h+b*t,P=e,E=0,_=u+b*d}else{const b=(y-n-r)/n,M=b*Math.PI/2;x=h+e*Math.sin(M),P=e*Math.cos(M),E=e*Math.sin(M),_=u+d+b*u}const R=Math.max(0,Math.min(1,_/f));let I=0;y===0?I=.5/s:y===g&&(I=-.5/s);for(let b=0;b<=s;b++){const M=b/s,D=M*Math.PI*2,N=Math.sin(D),z=Math.cos(D);p.x=-P*z,p.y=x,p.z=P*N,o.push(p.x,p.y,p.z),m.set(-P*z,E,P*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(M+I,R)}if(y>0){const b=(y-1)*v;for(let M=0;M<s;M++){const D=b+M,N=b+M+1,z=y*v+M,W=y*v+M+1;a.push(D,N,z),a.push(N,W,z)}}}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class nc extends Je{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new T,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ii extends Je{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(f,2));function y(){const x=new T,P=new T;let E=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const b=[],M=I/r,D=M*(t-e)+e;for(let N=0;N<=s;N++){const z=N/s,W=z*l+o,j=Math.sin(W),k=Math.cos(W);P.x=D*j,P.y=-M*n+m,P.z=D*k,u.push(P.x,P.y,P.z),x.set(j,R,k).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-M),b.push(g++)}v.push(b)}for(let I=0;I<s;I++)for(let b=0;b<r;b++){const M=v[b][I],D=v[b+1][I],N=v[b+1][I+1],z=v[b][I+1];(e>0||b!==0)&&(h.push(M,D,z),E+=3),(t>0||b!==r-1)&&(h.push(D,N,z),E+=3)}c.addGroup(p,E,0),p+=E}function _(x){const P=g,E=new Q,R=new T;let I=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const W=N/s*l+o,j=Math.cos(W),k=Math.sin(W);R.x=b*k,R.y=m*M,R.z=b*j,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=j*.5+.5,E.y=k*.5*M+.5,f.push(E.x,E.y),g++}for(let N=0;N<s;N++){const z=P+N,W=D+N;x===!0?h.push(W,W+1,z):h.push(W+1,W,z),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ar extends Ii{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ar(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends Je{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new T,x=new T,P=new T;for(let E=0;E<t.length;E+=3)f(t[E+0],_),f(t[E+1],x),f(t[E+2],P),l(_,x,P,y)}function l(y,_,x,P){const E=P+1,R=[];for(let I=0;I<=E;I++){R[I]=[];const b=y.clone().lerp(x,I/E),M=_.clone().lerp(x,I/E),D=E-I;for(let N=0;N<=D;N++)N===0&&I===E?R[I][N]=b:R[I][N]=b.clone().lerp(M,N/D)}for(let I=0;I<E;I++)for(let b=0;b<2*(E-I)-1;b++){const M=Math.floor(b/2);b%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function c(y){const _=new T;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(y),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const y=new T;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const x=m(y)/2/Math.PI+.5,P=p(y)/Math.PI+.5;a.push(x,1-P)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const _=a[y+0],x=a[y+2],P=a[y+4],E=Math.max(_,x,P),R=Math.min(_,x,P);E>.9&&R<.1&&(_<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){const x=y*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function g(){const y=new T,_=new T,x=new T,P=new T,E=new Q,R=new Q,I=new Q;for(let b=0,M=0;b<r.length;b+=9,M+=6){y.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),P.copy(y).add(_).add(x).divideScalar(3);const D=m(P);v(E,M+0,y,D),v(R,M+2,_,D),v(I,M+4,x,D)}}function v(y,_,x,P){P<0&&y.x===1&&(a[_]=y.x-1),x.x===0&&x.z===0&&(a[_]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.vertices,e.indices,e.radius,e.details)}}class ic extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ic(e.radius,e.detail)}}const yo=new T,Mo=new T,sh=new T,So=new yn;class dm extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Rs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=So;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),So.getNormal(sh),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,x=u[y],P=u[_],E=So[h[y]],R=So[h[_]],I=`${x}_${P}`,b=`${P}_${x}`;b in d&&d[b]?(sh.dot(d[b].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),d[b]=null):I in d||(d[I]={index0:c[y],index1:c[_],normal:sh.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];yo.fromBufferAttribute(o,v),Mo.fromBufferAttribute(o,m),f.push(yo.x,yo.y,yo.z),f.push(Mo.x,Mo.y,Mo.z)}this.setAttribute("position",new Le(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Q:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new T,s=[],r=[],a=[],o=new T,l=new Fe;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sc extends ni{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Q){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fm extends sc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const bo=new T,rh=new bu,ah=new bu,oh=new bu;class Cl extends ni{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new T){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(bo.subVectors(s[0],s[1]).add(s[0]),c=bo);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=bo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),rh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),ah.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),oh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ah.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),oh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(rh.calc(l),ah.calc(l),oh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new T().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Yd(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function l_(i,e){const t=1-i;return t*t*e}function c_(i,e){return 2*(1-i)*i*e}function h_(i,e){return i*i*e}function ia(i,e,t,n){return l_(i,e)+c_(i,t)+h_(i,n)}function u_(i,e){const t=1-i;return t*t*t*e}function d_(i,e){const t=1-i;return 3*t*t*i*e}function f_(i,e){return 3*(1-i)*i*i*e}function p_(i,e){return i*i*i*e}function sa(i,e,t,n,s){return u_(i,e)+d_(i,t)+f_(i,n)+p_(i,s)}class wu extends ni{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,s.x,r.x,a.x,o.x),sa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pm extends ni{constructor(e=new T,t=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sa(e,s.x,r.x,a.x,o.x),sa(e,s.y,r.y,a.y,o.y),sa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Eu extends ni{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mm extends ni{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tu extends ni{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Au extends ni{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ia(e,s.x,r.x,a.x),ia(e,s.y,r.y,a.y),ia(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cu extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Yd(o,l.x,c.x,h.x,u.x),Yd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Q().fromArray(s))}return this}}var Rl=Object.freeze({__proto__:null,ArcCurve:fm,CatmullRomCurve3:Cl,CubicBezierCurve:wu,CubicBezierCurve3:pm,EllipseCurve:sc,LineCurve:Eu,LineCurve3:mm,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Au,SplineCurve:Cu});class gm extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Rl[s.type]().fromJSON(s))}return this}}class Pl extends gm{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Eu(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Tu(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new wu(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Cu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new sc(e,t,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Xi extends Pl{constructor(e){super(e),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Pl().fromJSON(s))}return this}}function m_(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=vm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=y_(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){const f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return xa(r,a,t,o,l,c,0),a}function vm(i,e,t,n,s){let r;if(s===I_(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=qd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=qd(a/n|0,i[a],i[a+1],r);return r&&Sr(r,r.next)&&(Ma(r),r=r.next),r}function Ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Sr(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&E_(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?v_(i,n,s,r):g_(i)){e.push(l.i,i.i,c.i),Ma(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=__(Ns(i),e),xa(i,e,t,n,s,r,2)):a===2&&x_(i,e,t,n,s,r):xa(Ns(i),e,t,n,s,r,1);break}}}function g_(i){const e=i.prev,t=i,n=i.next;if(Rt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&qr(s,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v_(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Rt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=zh(f,g,e,t,n),y=zh(v,m,e,t,n);let _=i.prevZ,x=i.nextZ;for(;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&qr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&qr(o,h,l,u,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&qr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&qr(o,h,l,u,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function __(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Sr(n,s)&&xm(n,t,t.next,s)&&ya(n,s)&&ya(s,n)&&(e.push(n.i,t.i,s.i),Ma(t),Ma(t.next),t=i=s),t=t.next}while(t!==i);return Ns(t)}function x_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&C_(a,o)){let l=ym(a,o);a=Ns(a,a.next),l=Ns(l,l.next),xa(a,e,t,n,s,r,0),xa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function y_(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vm(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(A_(c))}s.sort(M_);for(let r=0;r<s.length;r++)t=S_(s[r],t);return t}function M_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function S_(i,e){const t=b_(i,e);if(!t)return e;const n=ym(t,i);return Ns(n,n.next),Ns(t,t.next)}function b_(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Sr(i,t))return t;do{if(Sr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&_m(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const u=Math.abs(s-t.y)/(n-t.x);ya(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&w_(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function w_(i,e){return Rt(i.prev,i,e.prev)<0&&Rt(e.next,i,i.next)<0}function E_(i,e,t,n){let s=i;do s.z===0&&(s.z=zh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,T_(s)}function T_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function zh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function A_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function _m(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function qr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&_m(i,e,t,n,s,r,a,o)}function C_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!R_(i,e)&&(ya(i,e)&&ya(e,i)&&P_(i,e)&&(Rt(i.prev,i,e.prev)||Rt(i,e.prev,e))||Sr(i,e)&&Rt(i.prev,i,i.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Sr(i,e){return i.x===e.x&&i.y===e.y}function xm(i,e,t,n){const s=Eo(Rt(i,e,t)),r=Eo(Rt(i,e,n)),a=Eo(Rt(t,n,i)),o=Eo(Rt(t,n,e));return!!(s!==r&&a!==o||s===0&&wo(i,t,e)||r===0&&wo(i,n,e)||a===0&&wo(t,i,n)||o===0&&wo(t,e,n))}function wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Eo(i){return i>0?1:i<0?-1:0}function R_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ya(i,e){return Rt(i.prev,i,i.next)<0?Rt(i,e,i.next)>=0&&Rt(i,i.prev,e)>=0:Rt(i,e,i.prev)<0||Rt(i,i.next,e)<0}function P_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ym(i,e){const t=kh(i.i,i.x,i.y),n=kh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qd(i,e,t,n){const s=kh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class D_{static triangulate(e,t,n=2){return m_(e,t,n)}}class Qn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Zd(e),Kd(n,e);let a=e.length;t.forEach(Zd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Kd(n,t[l]);const o=D_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Zd(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Na extends Je{constructor(e=new Xi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:L_;let _,x=!1,P,E,R,I;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,P=p.computeFrenetFrames(h,!1),E=new T,R=new T,I=new T),d||(m=0,f=0,g=0,v=0);const b=o.extractPoints(c);let M=b.shape;const D=b.holes;if(!Qn.isClockWise(M)){M=M.reverse();for(let C=0,oe=D.length;C<oe;C++){const te=D[C];Qn.isClockWise(te)&&(D[C]=te.reverse())}}function z(C){const te=10000000000000001e-36;let ce=C[0];for(let $=1;$<=C.length;$++){const me=$%C.length,re=C[me],H=re.x-ce.x,X=re.y-ce.y,w=H*H+X*X,S=Math.max(Math.abs(re.x),Math.abs(re.y),Math.abs(ce.x),Math.abs(ce.y)),O=te*S*S;if(w<=O){C.splice(me,1),$--;continue}ce=re}}z(M),D.forEach(z);const W=D.length,j=M;for(let C=0;C<W;C++){const oe=D[C];M=M.concat(oe)}function k(C,oe,te){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(oe,te)}const ne=M.length;function G(C,oe,te){let ce,$,me;const re=C.x-oe.x,H=C.y-oe.y,X=te.x-C.x,w=te.y-C.y,S=re*re+H*H,O=re*w-H*X;if(Math.abs(O)>Number.EPSILON){const Y=Math.sqrt(S),ee=Math.sqrt(X*X+w*w),q=oe.x-H/Y,Ee=oe.y+re/Y,de=te.x-w/ee,Ae=te.y+X/ee,De=((de-q)*w-(Ae-Ee)*X)/(re*w-H*X);ce=q+re*De-C.x,$=Ee+H*De-C.y;const ie=ce*ce+$*$;if(ie<=2)return new Q(ce,$);me=Math.sqrt(ie/2)}else{let Y=!1;re>Number.EPSILON?X>Number.EPSILON&&(Y=!0):re<-Number.EPSILON?X<-Number.EPSILON&&(Y=!0):Math.sign(H)===Math.sign(w)&&(Y=!0),Y?(ce=-H,$=re,me=Math.sqrt(S)):(ce=re,$=H,me=Math.sqrt(S/2))}return new Q(ce/me,$/me)}const le=[];for(let C=0,oe=j.length,te=oe-1,ce=C+1;C<oe;C++,te++,ce++)te===oe&&(te=0),ce===oe&&(ce=0),le[C]=G(j[C],j[te],j[ce]);const xe=[];let ye,Ie=le.concat();for(let C=0,oe=W;C<oe;C++){const te=D[C];ye=[];for(let ce=0,$=te.length,me=$-1,re=ce+1;ce<$;ce++,me++,re++)me===$&&(me=0),re===$&&(re=0),ye[ce]=G(te[ce],te[me],te[re]);xe.push(ye),Ie=Ie.concat(ye)}let ge;if(m===0)ge=Qn.triangulateShape(j,D);else{const C=[],oe=[];for(let te=0;te<m;te++){const ce=te/m,$=f*Math.cos(ce*Math.PI/2),me=g*Math.sin(ce*Math.PI/2)+v;for(let re=0,H=j.length;re<H;re++){const X=k(j[re],le[re],me);Ue(X.x,X.y,-$),ce===0&&C.push(X)}for(let re=0,H=W;re<H;re++){const X=D[re];ye=xe[re];const w=[];for(let S=0,O=X.length;S<O;S++){const Y=k(X[S],ye[S],me);Ue(Y.x,Y.y,-$),ce===0&&w.push(Y)}ce===0&&oe.push(w)}}ge=Qn.triangulateShape(C,oe)}const V=ge.length,ae=g+v;for(let C=0;C<ne;C++){const oe=d?k(M[C],Ie[C],ae):M[C];x?(R.copy(P.normals[0]).multiplyScalar(oe.x),E.copy(P.binormals[0]).multiplyScalar(oe.y),I.copy(_[0]).add(R).add(E),Ue(I.x,I.y,I.z)):Ue(oe.x,oe.y,0)}for(let C=1;C<=h;C++)for(let oe=0;oe<ne;oe++){const te=d?k(M[oe],Ie[oe],ae):M[oe];x?(R.copy(P.normals[C]).multiplyScalar(te.x),E.copy(P.binormals[C]).multiplyScalar(te.y),I.copy(_[C]).add(R).add(E),Ue(I.x,I.y,I.z)):Ue(te.x,te.y,u/h*C)}for(let C=m-1;C>=0;C--){const oe=C/m,te=f*Math.cos(oe*Math.PI/2),ce=g*Math.sin(oe*Math.PI/2)+v;for(let $=0,me=j.length;$<me;$++){const re=k(j[$],le[$],ce);Ue(re.x,re.y,u+te)}for(let $=0,me=D.length;$<me;$++){const re=D[$];ye=xe[$];for(let H=0,X=re.length;H<X;H++){const w=k(re[H],ye[H],ce);x?Ue(w.x,w.y+_[h-1].y,_[h-1].x+te):Ue(w.x,w.y,u+te)}}}be(),he();function be(){const C=s.length/3;if(d){let oe=0,te=ne*oe;for(let ce=0;ce<V;ce++){const $=ge[ce];Te($[2]+te,$[1]+te,$[0]+te)}oe=h+m*2,te=ne*oe;for(let ce=0;ce<V;ce++){const $=ge[ce];Te($[0]+te,$[1]+te,$[2]+te)}}else{for(let oe=0;oe<V;oe++){const te=ge[oe];Te(te[2],te[1],te[0])}for(let oe=0;oe<V;oe++){const te=ge[oe];Te(te[0]+ne*h,te[1]+ne*h,te[2]+ne*h)}}n.addGroup(C,s.length/3-C,0)}function he(){const C=s.length/3;let oe=0;Se(j,oe),oe+=j.length;for(let te=0,ce=D.length;te<ce;te++){const $=D[te];Se($,oe),oe+=$.length}n.addGroup(C,s.length/3-C,1)}function Se(C,oe){let te=C.length;for(;--te>=0;){const ce=te;let $=te-1;$<0&&($=C.length-1);for(let me=0,re=h+m*2;me<re;me++){const H=ne*me,X=ne*(me+1),w=oe+ce+H,S=oe+$+H,O=oe+$+X,Y=oe+ce+X;it(w,S,O,Y)}}}function Ue(C,oe,te){l.push(C),l.push(oe),l.push(te)}function Te(C,oe,te){ke(C),ke(oe),ke(te);const ce=s.length/3,$=y.generateTopUV(n,s,ce-3,ce-2,ce-1);K($[0]),K($[1]),K($[2])}function it(C,oe,te,ce){ke(C),ke(oe),ke(ce),ke(oe),ke(te),ke(ce);const $=s.length/3,me=y.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);K(me[0]),K(me[1]),K(me[3]),K(me[1]),K(me[2]),K(me[3])}function ke(C){s.push(l[C*3+0]),s.push(l[C*3+1]),s.push(l[C*3+2])}function K(C){r.push(C.x),r.push(C.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return U_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Rl[s.type]().fromJSON(s)),new Na(n,e.options)}}const L_={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-u),new Q(d,1-g),new Q(v,1-p)]:[new Q(o,1-l),new Q(h,1-u),new Q(f,1-g),new Q(m,1-p)]}};function U_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class rc extends es{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}class ac extends Je{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$e(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new Q,f=new T,g=new T,v=new T;let m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let y=0;y<=t;y++){const _=n+y*h*s,x=Math.sin(_),P=Math.cos(_);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*x,u.y=e[E].y,u.z=e[E].x*P,a.push(u.x,u.y,u.z),d.x=y/t,d.y=E/(e.length-1),o.push(d.x,d.y);const R=l[3*E+0]*x,I=l[3*E+1],b=l[3*E+0]*P;c.push(R,I,b)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){const x=_+y*e.length,P=x,E=x+e.length,R=x+e.length+1,I=x+1;r.push(P,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.points,e.segments,e.phiStart,e.phiLength)}}class Oa extends es{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oa(e.radius,e.detail)}}class Ji extends Je{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*d-a;for(let _=0;_<c;_++){const x=_*u-r;g.push(x,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const _=y+c*p,x=y+c*(p+1),P=y+1+c*(p+1),E=y+1+c*p;f.push(_,x,E),f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class oc extends Je{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,f=new T,g=new Q;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,_=y,x=y+n+1,P=y+n+2,E=y+1;o.push(_,x,E),o.push(x,P,E)}}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class lc extends Je{constructor(e=new Xi([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(a,2));function c(h){const u=s.length/3,d=h.extractPoints(t);let f=d.shape;const g=d.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Qn.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Qn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],_=y[0]+u,x=y[1]+u,P=y[2]+u;n.push(_,x,P),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return N_(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new lc(n,e.curveSegments)}}function N_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Fa extends Je{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],_=p/n;let x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let P=0;P<=t;P++){const E=P/t;u.x=-e*Math.cos(s+E*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+x,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){const _=h[p][y+1],x=h[p][y],P=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&f.push(_,x,E),(p!==n-1||l<Math.PI)&&f.push(x,P,E)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cc extends es{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cc(e.radius,e.detail)}}class hc extends Je{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const v=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uc extends Je{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],c=[],h=[],u=new T,d=new T,f=new T,g=new T,v=new T,m=new T,p=new T;for(let _=0;_<=n;++_){const x=_/n*r*Math.PI*2;y(x,r,a,e,f),y(x+.01,r,a,e,g),m.subVectors(g,f),p.addVectors(g,f),v.crossVectors(m,p),p.crossVectors(v,m),v.normalize(),p.normalize();for(let P=0;P<=s;++P){const E=P/s*Math.PI*2,R=-t*Math.cos(E),I=t*Math.sin(E);u.x=f.x+(R*p.x+I*v.x),u.y=f.y+(R*p.y+I*v.y),u.z=f.z+(R*p.z+I*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(P/s)}}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){const P=(s+1)*(_-1)+(x-1),E=(s+1)*_+(x-1),R=(s+1)*_+x,I=(s+1)*(_-1)+x;o.push(P,E,I),o.push(E,R,I)}this.setIndex(o),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(h,2));function y(_,x,P,E,R){const I=Math.cos(_),b=Math.sin(_),M=P/x*_,D=Math.cos(M);R.x=E*(2+D)*.5*I,R.y=E*(2+D)*b*.5,R.z=E*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class dc extends Je{constructor(e=new Au(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new T,l=new T,c=new Q;let h=new T;const u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Le(u,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(f,2));function v(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),y(),p()}function m(_){h=e.getPointAt(_/t,h);const x=a.normals[_],P=a.binormals[_];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,I=Math.sin(R),b=-Math.cos(R);l.x=b*x.x+I*P.x,l.y=b*x.y+I*P.y,l.z=b*x.z+I*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){const P=(s+1)*(_-1)+(x-1),E=(s+1)*_+(x-1),R=(s+1)*_+x,I=(s+1)*(_-1)+x;g.push(P,E,I),g.push(E,R,I)}}function y(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dc(new Rl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Mm extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new T,r=new T;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,f=u.count;for(let g=d,v=d+f;g<v;g+=3)for(let m=0;m<3;m++){const p=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,p),r.fromBufferAttribute(a,y),Jd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Jd(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Le(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Jd(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var jd=Object.freeze({__proto__:null,BoxGeometry:Qi,CapsuleGeometry:tc,CircleGeometry:nc,ConeGeometry:Ar,CylinderGeometry:Ii,DodecahedronGeometry:ic,EdgesGeometry:dm,ExtrudeGeometry:Na,IcosahedronGeometry:rc,LatheGeometry:ac,OctahedronGeometry:Oa,PlaneGeometry:Ji,PolyhedronGeometry:es,RingGeometry:oc,ShapeGeometry:lc,SphereGeometry:Fa,TetrahedronGeometry:cc,TorusGeometry:hc,TorusKnotGeometry:uc,TubeGeometry:dc,WireframeGeometry:Mm});class Sm extends Qt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new _e(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class bm extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sa extends Qt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wm extends Sa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Em extends Qt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _e(16777215),this.specular=new _e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tm extends Qt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new _e(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Am extends Qt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Cm extends Qt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ru extends Qt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pu extends Qt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rm extends Qt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new _e(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$i,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Es(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Im(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dm(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Vh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Iu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}function O_(i,e,t,n,s=30){const r=i.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*s;if(!(g<t||g>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Es(u,c.times.constructor),c.values=Es(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function F_(i,e=0,t=i,n=30){n<=0&&(n=30);const s=t.tracks.length,r=e/n;for(let a=0;a<s;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=o.times.length-1;let v;if(r<=o.times[0]){const p=h,y=u-h;v=o.values.slice(p,y)}else if(r>=o.times[g]){const p=g*u+h,y=p+u-h;v=o.values.slice(p,y)}else{const p=o.createInterpolant(),y=h,_=u-h;p.evaluate(r),v=p.resultBuffer.slice(y,_)}l==="quaternion"&&new Xt().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let p=0;p<m;++p){const y=p*f+d;if(l==="quaternion")Xt.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const _=f-d*2;for(let x=0;x<_;++x)c.values[y+x]-=v[x]}}}return i.blendMode=du,i}class B_{static convertArray(e,t){return Es(e,t)}static isTypedArray(e){return Im(e)}static getKeyframeOrder(e){return Dm(e)}static sortedArray(e,t,n){return Vh(e,t,n)}static flattenJSON(e,t,n,s){Iu(e,t,n,s)}static subclip(e,t,n,s,r=30){return O_(e,t,n,s,r)}static makeClipAdditive(e,t=0,n=e,s=30){return F_(e,t,n,s)}}class Ba{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Lm extends Ba{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bs,endingEnd:bs}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ws:r=e,o=2*t-n;break;case fa:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ws:a=e,l=2*n-t;break;case fa:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,y=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*v+.5*g,x=f*m-f*v;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+y*a[c+P]+_*a[l+P]+x*a[u+P];return r}}class Du extends Ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class Um extends Ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Um(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Lm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case da:t=this.InterpolantFactoryMethodDiscrete;break;case El:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return da;case this.InterpolantFactoryMethodLinear:return El;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Im(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=El;class zs extends Gn{constructor(e,t,n){super(e,t,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=da;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Lu extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}Lu.prototype.ValueTypeName="color";class ba extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}ba.prototype.ValueTypeName="number";class Nm extends Ba{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Xt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class za extends Gn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Nm(this.times,this.values,this.getValueSize(),e)}}za.prototype.ValueTypeName="quaternion";za.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Gn{constructor(e,t,n){super(e,t,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=da;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends Gn{constructor(e,t,n,s){super(e,t,n,s)}}wa.prototype.ValueTypeName="vector";class Ea{constructor(e="",t=-1,n=[],s=Wl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Cn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(k_(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=Dm(l);l=Vh(l,1,h),c=Vh(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ba(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Iu(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];m.push(_.time),p.push(_.morphTarget===v?1:0)}s.push(new ba(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(wa,f+".position",d,"pos",s),n(za,f+".quaternion",d,"rot",s),n(wa,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function z_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ba;case"vector":case"vector2":case"vector3":case"vector4":return wa;case"color":return Lu;case"quaternion":return za;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function k_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=z_(i.type);if(i.times===void 0){const t=[],n=[];Iu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const wi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Uu{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Vs=new Uu;class bn{constructor(e){this.manager=e!==void 0?e:Vs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bn.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class V_ extends Error{constructor(e,t){super(e),this.response=t}}class Ri extends bn{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(yi[e]!==void 0){yi[e].push({onLoad:t,onProgress:n,onError:s});return}yi[e]=[],yi[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,R=h.length;E<R;E++){const I=h[E];I.onProgress&&I.onProgress(P)}p.enqueue(x),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new V_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{wi.add(e,c);const h=yi[e];delete yi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=yi[e];if(h===void 0)throw this.manager.itemError(e),c;delete yi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class H_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ri(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=[];for(let n=0;n<e.length;n++){const s=Ea.parse(e[n]);t.push(s)}return t}}class G_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=[],o=new ec,l=new Ri(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=It),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,s)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let g=0;g<f;g++){a[g]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+v]),a[g].format=d.format,a[g].width=d.width,a[g].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=It),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,s);return o}}class Ta extends bn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=va("img");function l(){h(),wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class W_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=new La;r.colorSpace=gt;const a=new Ta(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,s)}for(let c=0;c<e.length;++c)l(c);return r}}class X_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new ci,o=new Ri(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:kn,a.wrapT=c.wrapT!==void 0?c.wrapT:kn,a.magFilter=c.magFilter!==void 0?c.magFilter:It,a.minFilter=c.minFilter!==void 0?c.minFilter:It,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=$n),c.mipmapCount===1&&(a.minFilter=It),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,s),a}}class Om extends bn{constructor(e){super(e)}load(e,t,n,s){const r=new At,a=new Ta(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ts extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Fm extends ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lh=new Fe,$d=new T,Qd=new T;class Nu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Qd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qd),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Y_ extends Nu{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bm extends ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ef=new Fe,Gr=new T,ch=new T;class q_ extends Nu{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gr),ch.copy(n.position),ch.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ch),n.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class zm extends ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new q_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Cr extends Zl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Z_ extends Nu{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Z_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Vm extends ts{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hm extends ts{constructor(e,t,n=10,s=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=s}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Gm{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*s),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*s)),t.addScaledVector(a[5],1.092548*(s*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*s),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*s),t.addScaledVector(a[5],2*.429043*s*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class Wm extends ts{constructor(e=new Gm,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class fc extends bn{constructor(e){super(e),this.textures={}}load(e,t,n,s){const r=this,a=new Ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const s=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(s.uuid=e.uuid),e.name!==void 0&&(s.name=e.name),e.color!==void 0&&s.color!==void 0&&s.color.setHex(e.color),e.roughness!==void 0&&(s.roughness=e.roughness),e.metalness!==void 0&&(s.metalness=e.metalness),e.sheen!==void 0&&(s.sheen=e.sheen),e.sheenColor!==void 0&&(s.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(s.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&s.emissive!==void 0&&s.emissive.setHex(e.emissive),e.specular!==void 0&&s.specular!==void 0&&s.specular.setHex(e.specular),e.specularIntensity!==void 0&&(s.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&s.specularColor!==void 0&&s.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(s.shininess=e.shininess),e.clearcoat!==void 0&&(s.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(s.dispersion=e.dispersion),e.iridescence!==void 0&&(s.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(s.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(s.transmission=e.transmission),e.thickness!==void 0&&(s.thickness=e.thickness),e.attenuationDistance!==void 0&&(s.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&s.attenuationColor!==void 0&&s.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(s.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(s.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(s.fog=e.fog),e.flatShading!==void 0&&(s.flatShading=e.flatShading),e.blending!==void 0&&(s.blending=e.blending),e.combine!==void 0&&(s.combine=e.combine),e.side!==void 0&&(s.side=e.side),e.shadowSide!==void 0&&(s.shadowSide=e.shadowSide),e.opacity!==void 0&&(s.opacity=e.opacity),e.transparent!==void 0&&(s.transparent=e.transparent),e.alphaTest!==void 0&&(s.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(s.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(s.depthFunc=e.depthFunc),e.depthTest!==void 0&&(s.depthTest=e.depthTest),e.depthWrite!==void 0&&(s.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(s.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(s.blendSrc=e.blendSrc),e.blendDst!==void 0&&(s.blendDst=e.blendDst),e.blendEquation!==void 0&&(s.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(s.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(s.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(s.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&s.blendColor!==void 0&&s.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(s.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(s.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(s.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(s.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(s.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(s.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(s.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(s.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(s.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(s.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(s.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(s.rotation=e.rotation),e.linewidth!==void 0&&(s.linewidth=e.linewidth),e.dashSize!==void 0&&(s.dashSize=e.dashSize),e.gapSize!==void 0&&(s.gapSize=e.gapSize),e.scale!==void 0&&(s.scale=e.scale),e.polygonOffset!==void 0&&(s.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(s.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(s.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(s.dithering=e.dithering),e.alphaToCoverage!==void 0&&(s.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(s.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(s.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(s.visible=e.visible),e.toneMapped!==void 0&&(s.toneMapped=e.toneMapped),e.userData!==void 0&&(s.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?s.vertexColors=e.vertexColors>0:s.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(s.uniforms[r]={},a.type){case"t":s.uniforms[r].value=n(a.value);break;case"c":s.uniforms[r].value=new _e().setHex(a.value);break;case"v2":s.uniforms[r].value=new Q().fromArray(a.value);break;case"v3":s.uniforms[r].value=new T().fromArray(a.value);break;case"v4":s.uniforms[r].value=new tt().fromArray(a.value);break;case"m3":s.uniforms[r].value=new et().fromArray(a.value);break;case"m4":s.uniforms[r].value=new Fe().fromArray(a.value);break;default:s.uniforms[r].value=a.value}}if(e.defines!==void 0&&(s.defines=e.defines),e.vertexShader!==void 0&&(s.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(s.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(s.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)s.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(s.lights=e.lights),e.clipping!==void 0&&(s.clipping=e.clipping),e.size!==void 0&&(s.size=e.size),e.sizeAttenuation!==void 0&&(s.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(s.map=n(e.map)),e.matcap!==void 0&&(s.matcap=n(e.matcap)),e.alphaMap!==void 0&&(s.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(s.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(s.bumpScale=e.bumpScale),e.normalMap!==void 0&&(s.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(s.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),s.normalScale=new Q().fromArray(r)}return e.displacementMap!==void 0&&(s.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(s.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(s.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(s.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(s.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(s.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(s.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(s.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(s.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(s.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(s.envMap=n(e.envMap)),e.envMapRotation!==void 0&&s.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(s.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(s.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(s.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(s.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(s.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(s.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(s.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(s.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(s.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(s.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(s.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(s.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(s.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(s.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(s.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(s.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(s.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(s.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(s.sheenRoughnessMap=n(e.sheenRoughnessMap)),s}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return fc.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:Sm,SpriteMaterial:yu,RawShaderMaterial:bm,ShaderMaterial:$t,PointsMaterial:Su,MeshPhysicalMaterial:wm,MeshStandardMaterial:Sa,MeshPhongMaterial:Em,MeshToonMaterial:Tm,MeshNormalMaterial:Am,MeshLambertMaterial:Cm,MeshDepthMaterial:Ru,MeshDistanceMaterial:Pu,MeshBasicMaterial:ui,MeshMatcapMaterial:Rm,LineDashedMaterial:Pm,LineBasicMaterial:mn,Material:Qt};return new t[e]}}class Hh{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Xm extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Ym extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ri(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t={},n={};function s(f,g){if(t[g]!==void 0)return t[g];const m=f.interleavedBuffers[g],p=r(f,m.buffer),y=hr(m.type,p),_=new jl(y,m.stride);return _.uuid=m.uuid,t[g]=_,_}function r(f,g){if(n[g]!==void 0)return n[g];const m=f.arrayBuffers[g],p=new Uint32Array(m).buffer;return n[g]=p,p}const a=e.isInstancedBufferGeometry?new Xm:new Je,o=e.data.index;if(o!==void 0){const f=hr(o.type,o.array);a.setIndex(new pt(f,1))}const l=e.data.attributes;for(const f in l){const g=l[f];let v;if(g.isInterleavedBufferAttribute){const m=s(e.data,g.data);v=new Us(m,g.itemSize,g.offset,g.normalized)}else{const m=hr(g.type,g.array),p=g.isInstancedBufferAttribute?Zi:pt;v=new p(m,g.itemSize,g.normalized)}g.name!==void 0&&(v.name=g.name),g.usage!==void 0&&v.setUsage(g.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const g=c[f],v=[];for(let m=0,p=g.length;m<p;m++){const y=g[m];let _;if(y.isInterleavedBufferAttribute){const x=s(e.data,y.data);_=new Us(x,y.itemSize,y.offset,y.normalized)}else{const x=hr(y.type,y.array);_=new pt(x,y.itemSize,y.normalized)}y.name!==void 0&&(_.name=y.name),v.push(_)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,g=u.length;f!==g;++f){const v=u[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;return d!==void 0&&(a.boundingSphere=new Ht().fromJSON(d)),e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class K_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=this.path===""?Hh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Ri(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){s!==void 0&&s(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){s!==void 0&&s(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,s)}async loadAsync(e,t){const n=this,s=this.path===""?Hh.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||s;const r=new Ri(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),s=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,s),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,s,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,s=e.length;n<s;n++){const r=new Xi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},s={};if(t.traverse(function(r){r.isBone&&(s[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new $l().fromJSON(e[r],s);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const s=new Ym;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=s.parse(l);break;default:l.type in jd?o=jd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},s={};if(e!==void 0){const r=new fc;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),s[l.uuid]=n[l.uuid]}}return s}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const s=e[n],r=Ea.parse(s);t[r.uuid]=r}return t}parseImages(e,t){const n=this,s={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:hr(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Uu(t);r=new Ta(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],d=u.url;if(Array.isArray(d)){const f=[];for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o(m);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new ci(p.data,p.width,p.height)))}s[u.uuid]=new Gi(f)}else{const f=o(u.url);s[u.uuid]=new Gi(f)}}}return s}async parseImagesAsync(e){const t=this,n={};let s;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await s.loadAsync(l)}else return a.data?{data:hr(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){s=new Ta(this.manager),s.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u],g=await r(f);g!==null&&(g instanceof HTMLImageElement?h.push(g):h.push(new ci(g.data,g.width,g.height)))}n[l.uuid]=new Gi(h)}else{const h=await r(l.url);n[l.uuid]=new Gi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const s={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new La,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new ci:h=new At,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,J_)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],tf),h.wrapT=n(o.wrap[1],tf)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,nf)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,nf)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),s[o.uuid]=h}return s}parseObject(e,t,n,s,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let g=0,v=d.length;g<v;g++){const m=d[g];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return s[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),s[d]}let h,u;switch(e.type){case"Scene":a=new Mr,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new _e(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Jl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Kl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new zt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Cr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Vm(e.color,e.intensity);break;case"DirectionalLight":a=new km(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new zm(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new Hm(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Bm(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new Fm(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Wm().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new am(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Tt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const d=e.count,f=e.instanceMatrix,g=e.instanceColor;a=new _a(h,u,d),a.instanceMatrix=new Zi(new Float32Array(f.array),16),g!==void 0&&(a.instanceColor=new Zi(new Float32Array(g.array),g.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new om(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._geometryInfo=e.geometryInfo.map(v=>{let m=null,p=null;return v.boundingBox!==void 0&&(m=new Vt().fromJSON(v.boundingBox)),v.boundingSphere!==void 0&&(p=new Ht().fromJSON(v.boundingSphere)),{...v,boundingBox:m,boundingSphere:p}}),a._instanceInfo=e.instanceInfo,a._availableInstanceIds=e._availableInstanceIds,a._availableGeometryIds=e._availableGeometryIds,a._nextIndexStart=e.nextIndexStart,a._nextVertexStart=e.nextVertexStart,a._geometryCount=e.geometryCount,a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._matricesTexture=c(e.matricesTexture.uuid),a._indirectTexture=c(e.indirectTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid)),e.boundingSphere!==void 0&&(a.boundingSphere=new Ht().fromJSON(e.boundingSphere)),e.boundingBox!==void 0&&(a.boundingBox=new Vt().fromJSON(e.boundingBox));break;case"LOD":a=new rm;break;case"Line":a=new Ki(o(e.geometry),l(e.material));break;case"LineLoop":a=new lm(o(e.geometry),l(e.material));break;case"LineSegments":a=new di(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new cm(o(e.geometry),l(e.material));break;case"Sprite":a=new sm(l(e.material));break;case"Group":a=new ur;break;case"Bone":a=new Mu;break;default:a=new ht}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,s,r))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const g=d[f];a.animations.push(r[g])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const g=d[f],v=a.getObjectByProperty("uuid",g.object);v!==void 0&&a.addLevel(v,g.distance,g.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const s=t[n.skeleton];s===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(s,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,s=e.getObjectByProperty("uuid",n);s!==void 0?t.target=s:t.target=new ht}})}}const J_={UVMapping:Fl,CubeReflectionMapping:Ai,CubeRefractionMapping:qi,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ha,CubeUVReflectionMapping:Er},tf={RepeatWrapping:Is,ClampToEdgeWrapping:kn,MirroredRepeatWrapping:ua},nf={NearestFilter:nn,NearestMipmapNearestFilter:su,NearestMipmapLinearFilter:cr,LinearFilter:It,LinearMipmapNearestFilter:Jr,LinearMipmapLinearFilter:$n},hh=new WeakMap;class j_ extends bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=wi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(hh.has(a)===!0)s&&s(hh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),hh.set(l,c),wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});wi.add(e,l),r.manager.itemStart(e)}}let To;class Ou{static getContext(){return To===void 0&&(To=new(window.AudioContext||window.webkitAudioContext)),To}static setContext(e){To=e}}class $_ extends bn{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new Ri(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Ou.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,s);function o(l){s?s(l):console.error(l),r.manager.itemError(e)}}}const sf=new Fe,rf=new Fe,hs=new Fe;class Q_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new zt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new zt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,hs.copy(e.projectionMatrix);const s=t.eyeSep/2,r=s*t.near/t.focus,a=t.near*Math.tan(Rs*t.fov*.5)/t.zoom;let o,l;rf.elements[12]=-s,sf.elements[12]=s,o=-a*t.aspect+r,l=a*t.aspect+r,hs.elements[0]=2*t.near/(l-o),hs.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(hs),o=-a*t.aspect-r,l=a*t.aspect-r,hs.elements[0]=2*t.near/(l-o),hs.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(hs)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(rf),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(sf)}}class qm extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=af(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=af();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function af(){return performance.now()}const us=new T,uh=new Xt,ex=new T,ds=new T,fs=new T;class tx extends ht{constructor(){super(),this.type="AudioListener",this.context=Ou.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Zm}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(us,uh,ex),ds.set(0,0,-1).applyQuaternion(uh),fs.set(0,1,0).applyQuaternion(uh),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(us.x,n),t.positionY.linearRampToValueAtTime(us.y,n),t.positionZ.linearRampToValueAtTime(us.z,n),t.forwardX.linearRampToValueAtTime(ds.x,n),t.forwardY.linearRampToValueAtTime(ds.y,n),t.forwardZ.linearRampToValueAtTime(ds.z,n),t.upX.linearRampToValueAtTime(fs.x,n),t.upY.linearRampToValueAtTime(fs.y,n),t.upZ.linearRampToValueAtTime(fs.z,n)}else t.setPosition(us.x,us.y,us.z),t.setOrientation(ds.x,ds.y,ds.z,fs.x,fs.y,fs.z)}}class Km extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const ps=new T,of=new Xt,nx=new T,ms=new T;class ix extends Km{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ps,of,nx),ms.set(0,0,1).applyQuaternion(of);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ps.x,n),t.positionY.linearRampToValueAtTime(ps.y,n),t.positionZ.linearRampToValueAtTime(ps.z,n),t.orientationX.linearRampToValueAtTime(ms.x,n),t.orientationY.linearRampToValueAtTime(ms.y,n),t.orientationZ.linearRampToValueAtTime(ms.z,n)}else t.setPosition(ps.x,ps.y,ps.z),t.setOrientation(ms.x,ms.y,ms.z)}}class sx{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Jm{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Xt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,a,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const Fu="\\[\\]\\.:\\/",rx=new RegExp("["+Fu+"]","g"),Bu="[^"+Fu+"]",ax="[^"+Fu.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",Bu),lx=/(WCOD+)?/.source.replace("WCOD",ax),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bu),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bu),ux=new RegExp("^"+ox+lx+cx+hx+"$"),dx=["material","materials","bones","map"];class fx{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(e){const t=ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);dx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=fx;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class px{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Cn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,s=arguments.length;n!==s;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,s=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let g=t[f];if(g===void 0){g=l++,t[f]=g,e.push(d);for(let v=0,m=a;v!==m;++v)r[v].push(new ut(d,n[v],s[v]))}else if(g<c){o=e[g];const v=--c,m=e[v];t[m.uuid]=g,e[g]=m,t[f]=v,e[v]=d;for(let p=0,y=a;p!==y;++p){const _=r[p],x=_[v];let P=_[g];_[g]=x,P===void 0&&(P=new ut(d,n[p],s[p])),_[v]=P}}else e[g]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,g=s;f!==g;++f){const v=n[f],m=v[u],p=v[h];v[h]=m,v[u]=p}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,s=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],g=--a,v=e[g];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let m=0,p=s;m!==p;++m){const y=n[m],_=y[d],x=y[g];y[u]=_,y[d]=x,y.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let g=0,v=s;g!==v;++g){const m=n[g];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let s=n[e];const r=this._bindings;if(s!==void 0)return r[s];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);s=r.length,n[e]=s,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){const g=l[d];u[d]=new ut(g,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const s=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),s[n]=s[o],s.pop()}}}class jm{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:bs,endingEnd:bs};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case du:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Wl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===Hp;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===kp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=ws,s.endingEnd=ws):(e?s.endingStart=this.zeroSlopeAtStart?ws:bs:s.endingStart=fa,t?s.endingEnd=this.zeroSlopeAtEnd?ws:bs:s.endingEnd=fa)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const mx=new Float32Array(1);class gx extends Dn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new Jm(ut.create(n,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Du(new Float32Array(2),new Float32Array(2),1,mx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Ea.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Wl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new jm(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Ea.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class vx extends mu{constructor(e=1,t=1,n=1,s={}){super(e,t,s),this.isRenderTarget3D=!0,this.depth=n,this.texture=new Yl(null,e,t,n),this._setTextureOptions(s),this.texture.isRenderTargetTexture=!0}}class Mt{constructor(e){this.value=e}clone(){return new Mt(this.value.clone===void 0?this.value:this.value.clone())}}let _x=0;class xx extends Dn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:_x++}),this.name="",this.usage=ma,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,s=t.length;n<s;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class yx extends jl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Mx{constructor(e,t,n,s,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const lf=new Fe;class Sx{constructor(e,t,n=0,s=1/0){this.ray=new Pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ql,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lf),this}intersectObject(e,t=!0,n=[]){return Gh(e,this,n,t),n.sort(cf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Gh(e[s],this,n,t);return n.sort(cf),n}}function cf(i,e){return i.distance-e.distance}function Gh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Gh(r[a],e,t,!0)}}class Wh{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bx{constructor(e=1,t=0,n=0){this.radius=e,this.theta=t,this.y=n}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class zu{constructor(e,t,n,s){zu.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}const hf=new Q;class wx{constructor(e=new Q(1/0,1/0),t=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const uf=new T,Ao=new T;class $m{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){uf.subVectors(e,this.start),Ao.subVectors(this.end,this.start);const n=Ao.dot(Ao);let r=Ao.dot(uf)/n;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const df=new T;class Ex extends ht{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new Je,s=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;s.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Le(s,3));const r=new mn({fog:!1,toneMapped:!1});this.cone=new di(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),df.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(df),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const zi=new T,Co=new Fe,dh=new Fe;class Tx extends di{constructor(e){const t=Qm(e),n=new Je,s=[],r=[],a=new _e(0,0,1),o=new _e(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Le(s,3)),n.setAttribute("color",new Le(r,3));const l=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,s=n.getAttribute("position");dh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(Co.multiplyMatrices(dh,o.matrixWorld),zi.setFromMatrixPosition(Co),s.setXYZ(a,zi.x,zi.y,zi.z),Co.multiplyMatrices(dh,o.parent.matrixWorld),zi.setFromMatrixPosition(Co),s.setXYZ(a+1,zi.x,zi.y,zi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qm(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push(...Qm(i.children[t]));return e}class Ax extends Tt{constructor(e,t,n){const s=new Fa(t,4,2),r=new ui({wireframe:!0,fog:!1,toneMapped:!1});super(s,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Cx=new T,ff=new _e,pf=new _e;class Rx extends ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const s=new Oa(t);s.rotateY(Math.PI*.5),this.material=new ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=s.getAttribute("position"),a=new Float32Array(r.count*3);s.setAttribute("color",new pt(a,3)),this.add(new Tt(s,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");ff.copy(this.light.color),pf.copy(this.light.groundColor);for(let n=0,s=t.count;n<s;n++){const r=n<s/2?ff:pf;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(Cx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Px extends di{constructor(e=10,t=10,n=4473924,s=8947848){n=new _e(n),s=new _e(s);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,g=-o;d<=t;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=d===r?n:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const h=new Je;h.setAttribute("position",new Le(l,3)),h.setAttribute("color",new Le(c,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ix extends di{constructor(e=10,t=16,n=8,s=64,r=4473924,a=8947848){r=new _e(r),a=new _e(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,g=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,g);const v=u&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=e-e/n*u;for(let g=0;g<s;g++){let v=g/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f;o.push(m,0,p),l.push(d.r,d.g,d.b),v=(g+1)/s*(Math.PI*2),m=Math.sin(v)*f,p=Math.cos(v)*f,o.push(m,0,p),l.push(d.r,d.g,d.b)}}const c=new Je;c.setAttribute("position",new Le(o,3)),c.setAttribute("color",new Le(l,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const mf=new T,Ro=new T,gf=new T;class Dx extends ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let s=new Je;s.setAttribute("position",new Le([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new mn({fog:!1,toneMapped:!1});this.lightPlane=new Ki(s,r),this.add(this.lightPlane),s=new Je,s.setAttribute("position",new Le([0,0,0,0,0,1],3)),this.targetLine=new Ki(s,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),mf.setFromMatrixPosition(this.light.matrixWorld),Ro.setFromMatrixPosition(this.light.target.matrixWorld),gf.subVectors(Ro,mf),this.lightPlane.lookAt(Ro),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ro),this.targetLine.scale.z=gf.length()}}const Po=new T,Lt=new Zl;class Lx extends di{constructor(e){const t=new Je,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),s=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,v){l(g),l(v)}function l(g){s.push(0,0,0),r.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(s.length/3-1)}t.setAttribute("position",new Le(s,3)),t.setAttribute("color",new Le(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new _e(16755200),h=new _e(16711680),u=new _e(43775),d=new _e(16777215),f=new _e(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,s,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,s.r,s.g,s.b),o.setXYZ(39,s.r,s.g,s.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,s=1;Lt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);const r=this.camera.coordinateSystem===Vn?-1:0;Nt("c",t,e,Lt,0,0,r),Nt("t",t,e,Lt,0,0,1),Nt("n1",t,e,Lt,-1,-1,r),Nt("n2",t,e,Lt,n,-1,r),Nt("n3",t,e,Lt,-1,s,r),Nt("n4",t,e,Lt,n,s,r),Nt("f1",t,e,Lt,-1,-1,1),Nt("f2",t,e,Lt,n,-1,1),Nt("f3",t,e,Lt,-1,s,1),Nt("f4",t,e,Lt,n,s,1),Nt("u1",t,e,Lt,n*.7,s*1.1,r),Nt("u2",t,e,Lt,-1*.7,s*1.1,r),Nt("u3",t,e,Lt,0,s*2,r),Nt("cf1",t,e,Lt,-1,0,1),Nt("cf2",t,e,Lt,n,0,1),Nt("cf3",t,e,Lt,0,-1,1),Nt("cf4",t,e,Lt,0,s,1),Nt("cn1",t,e,Lt,-1,0,r),Nt("cn2",t,e,Lt,n,0,r),Nt("cn3",t,e,Lt,0,-1,r),Nt("cn4",t,e,Lt,0,s,r),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(i,e,t,n,s,r,a){Po.set(s,r,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Po.x,Po.y,Po.z)}}const Io=new Vt;class Ux extends di{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=new Float32Array(24),r=new Je;r.setIndex(new pt(n,1)),r.setAttribute("position",new pt(s,3)),super(r,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Io.setFromObject(this.object),Io.isEmpty())return;const e=Io.min,t=Io.max,n=this.geometry.attributes.position,s=n.array;s[0]=t.x,s[1]=t.y,s[2]=t.z,s[3]=e.x,s[4]=t.y,s[5]=t.z,s[6]=e.x,s[7]=e.y,s[8]=t.z,s[9]=t.x,s[10]=e.y,s[11]=t.z,s[12]=t.x,s[13]=t.y,s[14]=e.z,s[15]=e.x,s[16]=t.y,s[17]=e.z,s[18]=e.x,s[19]=e.y,s[20]=e.z,s[21]=t.x,s[22]=e.y,s[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Nx extends di{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Je;r.setIndex(new pt(n,1)),r.setAttribute("position",new Le(s,3)),super(r,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ox extends Ki{constructor(e,t=1,n=16776960){const s=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Je;a.setAttribute("position",new Le(r,3)),a.computeBoundingSphere(),super(a,new mn({color:s,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Je;l.setAttribute("position",new Le(o,3)),l.computeBoundingSphere(),this.add(new Tt(l,new ui({color:s,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const vf=new T;let Do,fh;class Fx extends ht{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,s=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Do===void 0&&(Do=new Je,Do.setAttribute("position",new Le([0,0,0,0,1,0],3)),fh=new Ar(.5,1,5,1),fh.translate(0,-.5,0)),this.position.copy(t),this.line=new Ki(Do,new mn({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Tt(fh,new ui({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vf.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(vf,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Bx extends di{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Je;s.setAttribute("position",new Le(t,3)),s.setAttribute("color",new Le(n,3));const r=new mn({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new _e,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class zx{constructor(){this.type="ShapePath",this.color=new _e,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Pl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const y=[];for(let _=0,x=p.length;_<x;_++){const P=p[_],E=new Xi;E.curves=P.curves,y.push(E)}return y}function n(p,y){const _=y.length;let x=!1;for(let P=_-1,E=0;E<_;P=E++){let R=y[P],I=y[E],b=I.x-R.x,M=I.y-R.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(R=y[E],b=-b,I=y[P],M=-M),p.y<R.y||p.y>I.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{const D=M*(p.x-R.x)-b*(p.y-R.y);if(D===0)return!0;if(D<0)continue;x=!x}}else{if(p.y!==R.y)continue;if(I.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=I.x)return!0}}return x}const s=Qn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new Xi,l.curves=o.curves,c.push(l),c;let h=!s(r[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],g=0,v;d[g]=void 0,f[g]=[];for(let p=0,y=r.length;p<y;p++)o=r[p],v=o.getPoints(),a=s(v),a=e?!a:a,a?(!h&&d[g]&&g++,d[g]={s:new Xi,p:v},d[g].s.curves=o.curves,h&&g++,f[g]=[]):f[g].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,y=0;for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){const P=f[_];for(let E=0;E<P.length;E++){const R=P[E];let I=!0;for(let b=0;b<d.length;b++)n(R.p,d[b].p)&&(_!==b&&y++,I?(I=!1,u[b].push(R)):p=!0);I&&u[_].push(R)}}y>0&&p===!1&&(f=u)}let m;for(let p=0,y=d.length;p<y;p++){l=d[p].s,c.push(l),m=f[p];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}}class eg extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kx(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2):(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0),i}function Vx(i,e){const t=i.image&&i.image.width?i.image.width/i.image.height:1;return t>e?(i.repeat.x=e/t,i.repeat.y=1,i.offset.x=(1-i.repeat.x)/2,i.offset.y=0):(i.repeat.x=1,i.repeat.y=t/e,i.offset.x=0,i.offset.y=(1-i.repeat.y)/2),i}function Hx(i){return i.repeat.x=1,i.repeat.y=1,i.offset.x=0,i.offset.y=0,i}function Xh(i,e,t,n){const s=Gx(n);switch(t){case lu:return i*e;case Vl:return i*e/s.components*s.byteLength;case Da:return i*e/s.components*s.byteLength;case hu:return i*e*2/s.components*s.byteLength;case Hl:return i*e*2/s.components*s.byteLength;case cu:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case Gl:return i*e*4/s.components*s.byteLength;case jr:case $r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(i,16)*Math.max(e,8)/4;case Qo:case tl:return Math.max(i,8)*Math.max(e,8)/2;case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ta:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uu:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case bl:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gx(i){switch(i){case sn:case ru:return{byteLength:1,components:1};case gr:case au:case Fs:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case hi:case Bl:case Mn:return{byteLength:4,components:1};case ou:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}class Wx{static contain(e,t){return kx(e,t)}static cover(e,t){return Vx(e,t)}static fill(e){return Hx(e)}static getByteLength(e,t,n,s){return Xh(e,t,n,s)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);function tg(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xx(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,my=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,My=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",by=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ly=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,By=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ky=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ky=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,EM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$M=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_S=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Yx,alphahash_pars_fragment:qx,alphamap_fragment:Zx,alphamap_pars_fragment:Kx,alphatest_fragment:Jx,alphatest_pars_fragment:jx,aomap_fragment:$x,aomap_pars_fragment:Qx,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:sy,iridescence_fragment:ry,bumpmap_pars_fragment:ay,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:hy,color_fragment:uy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:vy,displacementmap_pars_vertex:_y,displacementmap_vertex:xy,emissivemap_fragment:yy,emissivemap_pars_fragment:My,colorspace_fragment:Sy,colorspace_pars_fragment:by,envmap_fragment:wy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:By,envmap_vertex:Cy,fog_vertex:Ry,fog_pars_vertex:Py,fog_fragment:Iy,fog_pars_fragment:Dy,gradientmap_pars_fragment:Ly,lightmap_pars_fragment:Uy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Oy,lights_pars_begin:Fy,lights_toon_fragment:zy,lights_toon_pars_fragment:ky,lights_phong_fragment:Vy,lights_phong_pars_fragment:Hy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:Xy,lights_fragment_maps:Yy,lights_fragment_end:qy,logdepthbuf_fragment:Zy,logdepthbuf_pars_fragment:Ky,logdepthbuf_pars_vertex:Jy,logdepthbuf_vertex:jy,map_fragment:$y,map_pars_fragment:Qy,map_particle_fragment:eM,map_particle_pars_fragment:tM,metalnessmap_fragment:nM,metalnessmap_pars_fragment:iM,morphinstance_vertex:sM,morphcolor_vertex:rM,morphnormal_vertex:aM,morphtarget_pars_vertex:oM,morphtarget_vertex:lM,normal_fragment_begin:cM,normal_fragment_maps:hM,normal_pars_fragment:uM,normal_pars_vertex:dM,normal_vertex:fM,normalmap_pars_fragment:pM,clearcoat_normal_fragment_begin:mM,clearcoat_normal_fragment_maps:gM,clearcoat_pars_fragment:vM,iridescence_pars_fragment:_M,opaque_fragment:xM,packing:yM,premultiplied_alpha_fragment:MM,project_vertex:SM,dithering_fragment:bM,dithering_pars_fragment:wM,roughnessmap_fragment:EM,roughnessmap_pars_fragment:TM,shadowmap_pars_fragment:AM,shadowmap_pars_vertex:CM,shadowmap_vertex:RM,shadowmask_pars_fragment:PM,skinbase_vertex:IM,skinning_pars_vertex:DM,skinning_vertex:LM,skinnormal_vertex:UM,specularmap_fragment:NM,specularmap_pars_fragment:OM,tonemapping_fragment:FM,tonemapping_pars_fragment:BM,transmission_fragment:zM,transmission_pars_fragment:kM,uv_pars_fragment:VM,uv_pars_vertex:HM,uv_vertex:GM,worldpos_vertex:WM,background_vert:XM,background_frag:YM,backgroundCube_vert:qM,backgroundCube_frag:ZM,cube_vert:KM,cube_frag:JM,depth_vert:jM,depth_frag:$M,distanceRGBA_vert:QM,distanceRGBA_frag:eS,equirect_vert:tS,equirect_frag:nS,linedashed_vert:iS,linedashed_frag:sS,meshbasic_vert:rS,meshbasic_frag:aS,meshlambert_vert:oS,meshlambert_frag:lS,meshmatcap_vert:cS,meshmatcap_frag:hS,meshnormal_vert:uS,meshnormal_frag:dS,meshphong_vert:fS,meshphong_frag:pS,meshphysical_vert:mS,meshphysical_frag:gS,meshtoon_vert:vS,meshtoon_frag:_S,points_vert:xS,points_frag:yS,shadow_vert:MS,shadow_frag:SS,sprite_vert:bS,sprite_frag:wS},ve={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},zn={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};zn.physical={uniforms:hn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Lo={r:0,b:0,g:0},gs=new tn,ES=new Fe;function TS(i,e,t,n,s,r,a){const o=new _e(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1;const P=g(_);P===null?p(o,l):P&&P.isColor&&(p(P,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===Er)?(h===void 0&&(h=new Tt(new Qi(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:xr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gs.copy(x.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ES.makeRotationFromEuler(gs)),h.material.toneMapped=ot.getTransfer(P.colorSpace)!==xt,(u!==P||d!==P.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Tt(new Ji(2,2),new $t({name:"BackgroundMaterial",uniforms:xr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(P.colorSpace)!==xt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Lo,nm(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,x,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(o,l)},render:v,addToRenderList:m,dispose:y}}function AS(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,D,N,z,W){let j=!1;const k=u(z,N,D);r!==k&&(r=k,c(r.object)),j=f(M,z,N,W),j&&g(M,z,N,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,D,N,z),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,N){const z=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[D.id];j===void 0&&(j={},W[D.id]=j);let k=j[z];return k===void 0&&(k=d(l()),j[z]=k),k}function d(M){const D=[],N=[],z=[];for(let W=0;W<t;W++)D[W]=0,N[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:z,object:M,attributes:{},index:null}}function f(M,D,N,z){const W=r.attributes,j=D.attributes;let k=0;const ne=N.getAttributes();for(const G in ne)if(ne[G].location>=0){const xe=W[G];let ye=j[G];if(ye===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),xe===void 0||xe.attribute!==ye||ye&&xe.data!==ye.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function g(M,D,N,z){const W={},j=D.attributes;let k=0;const ne=N.getAttributes();for(const G in ne)if(ne[G].location>=0){let xe=j[G];xe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const ye={};ye.attribute=xe,xe&&xe.data&&(ye.data=xe.data),W[G]=ye,k++}r.attributes=W,r.attributesNum=k,r.index=z}function v(){const M=r.newAttributes;for(let D=0,N=M.length;D<N;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const N=r.newAttributes,z=r.enabledAttributes,W=r.attributeDivisors;N[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),W[M]!==D&&(i.vertexAttribDivisor(M,D),W[M]=D)}function y(){const M=r.newAttributes,D=r.enabledAttributes;for(let N=0,z=D.length;N<z;N++)D[N]!==M[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function _(M,D,N,z,W,j,k){k===!0?i.vertexAttribIPointer(M,D,N,W,j):i.vertexAttribPointer(M,D,N,z,W,j)}function x(M,D,N,z){v();const W=z.attributes,j=N.getAttributes(),k=D.defaultAttributeValues;for(const ne in j){const G=j[ne];if(G.location>=0){let le=W[ne];if(le===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const xe=le.normalized,ye=le.itemSize,Ie=e.get(le);if(Ie===void 0)continue;const ge=Ie.buffer,V=Ie.type,ae=Ie.bytesPerElement,be=V===i.INT||V===i.UNSIGNED_INT||le.gpuType===Bl;if(le.isInterleavedBufferAttribute){const he=le.data,Se=he.stride,Ue=le.offset;if(he.isInstancedInterleavedBuffer){for(let Te=0;Te<G.locationSize;Te++)p(G.location+Te,he.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Te=0;Te<G.locationSize;Te++)m(G.location+Te);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let Te=0;Te<G.locationSize;Te++)_(G.location+Te,ye/G.locationSize,V,xe,Se*ae,(Ue+ye/G.locationSize*Te)*ae,be)}else{if(le.isInstancedBufferAttribute){for(let he=0;he<G.locationSize;he++)p(G.location+he,le.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let he=0;he<G.locationSize;he++)m(G.location+he);i.bindBuffer(i.ARRAY_BUFFER,ge);for(let he=0;he<G.locationSize;he++)_(G.location+he,ye/G.locationSize,V,xe,ye*ae,ye/G.locationSize*he*ae,be)}}else if(k!==void 0){const xe=k[ne];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(G.location,xe);break;case 3:i.vertexAttrib3fv(G.location,xe);break;case 4:i.vertexAttrib4fv(G.location,xe);break;default:i.vertexAttrib1fv(G.location,xe)}}}}y()}function P(){I();for(const M in n){const D=n[M];for(const N in D){const z=D[N];for(const W in z)h(z[W].object),delete z[W];delete D[N]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const N in D){const z=D[N];for(const W in z)h(z[W].object),delete z[W];delete D[N]}delete n[M.id]}function R(M){for(const D in n){const N=n[D];if(N[M.id]===void 0)continue;const z=N[M.id];for(const W in z)h(z[W].object),delete z[W];delete N[M.id]}}function I(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function CS(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function RS(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===Fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:P,maxSamples:E}}function PS(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new li,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,_=y*4;let x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let P=0;P!==_;++P)x[P]=t[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==v;++_,x+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function IS(i){let e=new WeakMap;function t(a,o){return o===ca?a.mapping=Ai:o===ha&&(a.mapping=qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ca||o===ha)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new xu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const dr=4,_f=[.125,.215,.35,.446,.526,.582],Ms=20,ph=new Cr,xf=new _e;let mh=null,gh=0,vh=0,_h=!1;const ys=(1+Math.sqrt(5))/2,ar=1/ys,yf=[new T(-ys,ar,0),new T(ys,ar,0),new T(-ar,0,ys),new T(ar,0,ys),new T(0,ys,-ar),new T(0,ys,ar),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],DS=new T;class Yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=DS}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mh,gh,vh),this._renderer.xr.enabled=_h,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Fs,format:fn,colorSpace:Ci,depthBuffer:!1},s=Mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=LS(r)),this._blurMaterial=US(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,ph)}_sceneToCubeUV(e,t,n,s,r){const l=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xf),u.toneMapping=Ei,u.autoClear=!1;const g=new ui({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),v=new Tt(new Qi,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(xf),m=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const x=this._cubeSize;Uo(s,_*x,y>2?x:0,x,x),u.setRenderTarget(s),m&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ai||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Uo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ph)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yf[(s-r-1)%yf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const p=[];let y=0;for(let R=0;R<Ms;++R){const I=R/v,b=Math.exp(-I*I/2);p.push(b),R===0?y+=b:R<m&&(y+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[s],P=3*x*(s>_-dr?s-_+dr:0),E=4*(this._cubeSize-x);Uo(t,P,E,3*x,2*x),l.setRenderTarget(t),l.render(u,ph)}}function LS(i){const e=[],t=[],n=[];let s=i;const r=i-dr+1+_f.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-dr?l=_f[a-i+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,I=E>2?0:-1,b=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(b,v*g*E),_.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const P=new Je;P.setAttribute("position",new pt(y,v)),P.setAttribute("uv",new pt(_,m)),P.setAttribute("faceIndex",new pt(x,p)),e.push(P),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mf(i,e,t){const n=new jt(i,e,t);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Uo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function US(i,e,t){const n=new Float32Array(Ms),s=new T(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function Sf(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function bf(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NS(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ca||l===ha,h=l===Ai||l===qi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Yh(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Yh(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function OS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function FS(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,x=y.length;_<x;_+=3){const P=y[_+0],E=y[_+1],R=y[_+2];d.push(P,E,E,R,R,P)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const P=_+0,E=_+1,R=_+2;d.push(P,E,E,R,R,P)}}else return;const m=new($p(d)?vu:gu)(d,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function BS(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*v[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function zS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kS(i,e,t){const n=new WeakMap,s=new tt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let x=o.attributes.position.count*_,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const E=new Float32Array(x*P*4*u),R=new Xl(E,x,P,u);R.type=Mn,R.needsUpdate=!0;const I=_*4;for(let M=0;M<u;M++){const D=m[M],N=p[M],z=y[M],W=x*P*4*M;for(let j=0;j<D.count;j++){const k=j*I;f===!0&&(s.fromBufferAttribute(D,j),E[W+k+0]=s.x,E[W+k+1]=s.y,E[W+k+2]=s.z,E[W+k+3]=0),g===!0&&(s.fromBufferAttribute(N,j),E[W+k+4]=s.x,E[W+k+5]=s.y,E[W+k+6]=s.z,E[W+k+7]=0),v===!0&&(s.fromBufferAttribute(z,j),E[W+k+8]=s.x,E[W+k+9]=s.y,E[W+k+10]=s.z,E[W+k+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Q(x,P)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function VS(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const ng=new At,wf=new Ua(1,1),ig=new Xl,sg=new Yl,rg=new La,Ef=[],Tf=[],Af=new Float32Array(16),Cf=new Float32Array(9),Rf=new Float32Array(4);function Rr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ef[s];if(r===void 0&&(r=new Float32Array(s),Ef[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pc(i,e){let t=Tf[e];t===void 0&&(t=new Int32Array(e),Tf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function HS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function GS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function WS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function XS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function YS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Rf.set(n),i.uniformMatrix2fv(this.addr,!1,Rf),qt(t,n)}}function qS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),qt(t,n)}}function ZS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Yt(t,n))return;Af.set(n),i.uniformMatrix4fv(this.addr,!1,Af),qt(t,n)}}function KS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function JS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function jS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function $S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function QS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function tb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function ib(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wf.compareFunction=fu,r=wf):r=ng,t.setTexture2D(e||r,s)}function sb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sg,s)}function rb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rg,s)}function ab(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ig,s)}function ob(i){switch(i){case 5126:return HS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return YS;case 35675:return qS;case 35676:return ZS;case 5124:case 35670:return KS;case 35667:case 35671:return JS;case 35668:case 35672:return jS;case 35669:case 35673:return $S;case 5125:return QS;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}function lb(i,e){i.uniform1fv(this.addr,e)}function cb(i,e){const t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function hb(i,e){const t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function ub(i,e){const t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function db(i,e){const t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fb(i,e){const t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pb(i,e){const t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mb(i,e){i.uniform1iv(this.addr,e)}function gb(i,e){i.uniform2iv(this.addr,e)}function vb(i,e){i.uniform3iv(this.addr,e)}function _b(i,e){i.uniform4iv(this.addr,e)}function xb(i,e){i.uniform1uiv(this.addr,e)}function yb(i,e){i.uniform2uiv(this.addr,e)}function Mb(i,e){i.uniform3uiv(this.addr,e)}function Sb(i,e){i.uniform4uiv(this.addr,e)}function bb(i,e,t){const n=this.cache,s=e.length,r=pc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ng,r[a])}function wb(i,e,t){const n=this.cache,s=e.length,r=pc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sg,r[a])}function Eb(i,e,t){const n=this.cache,s=e.length,r=pc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rg,r[a])}function Tb(i,e,t){const n=this.cache,s=e.length,r=pc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),qt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ig,r[a])}function Ab(i){switch(i){case 5126:return lb;case 35664:return cb;case 35665:return hb;case 35666:return ub;case 35674:return db;case 35675:return fb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return vb;case 35669:case 35673:return _b;case 5125:return xb;case 36294:return yb;case 36295:return Mb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Cb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ob(t.type)}}class Rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ab(t.type)}}class Pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function Ib(i,e,t){const n=i.name,s=n.length;for(xh.lastIndex=0;;){const r=xh.exec(n),a=xh.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(t,c===void 0?new Cb(o,i,e):new Rb(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pb(o),Pf(t,u)),t=u}}}class Vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Ib(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function If(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Db=37297;let Lb=0;function Ub(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Df=new et;function Nb(i){ot._getMatrix(Df,ot.workingColorSpace,i);const e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case pa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ub(i.getShaderSource(e),a)}else return s}function Ob(i,e){const t=Nb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fb(i,e){let t;switch(e){case Lp:t="Linear";break;case Up:t="Reinhard";break;case Np:t="Cineon";break;case Op:t="ACESFilmic";break;case $o:t="AgX";break;case Bp:t="Neutral";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const No=new T;function Bb(){ot.getLuminanceCoefficients(No);const i=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zr).join(`
`)}function kb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zr(i){return i!==""}function Uf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function qh(i){return i.replace(Hb,Wb)}const Gb=new Map;function Wb(i,e){let t=Ye[e];if(t===void 0){const n=Gb.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qh(t)}const Xb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(Xb,Yb)}function Yb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kr?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Zb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case qi:e="ENVMAP_TYPE_CUBE";break;case Er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function Jb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ia:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case Dp:e="ENVMAP_BLENDING_ADD";break}return e}function jb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $b(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qb(t),c=Zb(t),h=Kb(t),u=Jb(t),d=jb(t),f=zb(t),g=kb(r),v=s.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Zr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zr).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zr).join(`
`)),a=qh(a),a=Uf(a,t),a=Nf(a,t),o=qh(o),o=Uf(o,t),o=Nf(o,t),a=Of(a),o=Of(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+a,x=y+p+o,P=If(s,s.VERTEX_SHADER,_),E=If(s,s.FRAGMENT_SHADER,x);s.attachShader(v,P),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(P).trim(),W=s.getShaderInfoLog(E).trim();let j=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,E);else{const ne=Lf(s,P,"vertex"),G=Lf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+ne+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||W==="")&&(k=!1);k&&(D.diagnostics={runnable:j,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(P),s.deleteShader(E),I=new Vo(s,v),b=Vb(s,v)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Db)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let Qb=0;class ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tw(e),t.set(e,n)),n}}class tw{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}}function nw(i,e,t,n,s,r,a){const o=new ql,l=new ew,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,N,z){const W=N.fog,j=z.geometry,k=b.isMeshStandardMaterial?N.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),G=ne&&ne.mapping===Er?ne.image.height:null,le=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=xe!==void 0?xe.length:0;let Ie=0;j.morphAttributes.position!==void 0&&(Ie=1),j.morphAttributes.normal!==void 0&&(Ie=2),j.morphAttributes.color!==void 0&&(Ie=3);let ge,V,ae,be;if(le){const vt=zn[le];ge=vt.vertexShader,V=vt.fragmentShader}else ge=b.vertexShader,V=b.fragmentShader,l.update(b),ae=l.getVertexShaderID(b),be=l.getFragmentShaderID(b);const he=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Te=z.isBatchedMesh===!0,it=!!b.map,ke=!!b.matcap,K=!!ne,C=!!b.aoMap,oe=!!b.lightMap,te=!!b.bumpMap,ce=!!b.normalMap,$=!!b.displacementMap,me=!!b.emissiveMap,re=!!b.metalnessMap,H=!!b.roughnessMap,X=b.anisotropy>0,w=b.clearcoat>0,S=b.dispersion>0,O=b.iridescence>0,Y=b.sheen>0,ee=b.transmission>0,q=X&&!!b.anisotropyMap,Ee=w&&!!b.clearcoatMap,de=w&&!!b.clearcoatNormalMap,Ae=w&&!!b.clearcoatRoughnessMap,De=O&&!!b.iridescenceMap,ie=O&&!!b.iridescenceThicknessMap,we=Y&&!!b.sheenColorMap,Ve=Y&&!!b.sheenRoughnessMap,He=!!b.specularMap,Me=!!b.specularColorMap,je=!!b.specularIntensityMap,L=ee&&!!b.transmissionMap,Ce=ee&&!!b.thicknessMap,ue=!!b.gradientMap,Oe=!!b.alphaMap,fe=b.alphaTest>0,se=!!b.alphaHash,Be=!!b.extensions;let Qe=Ei;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Qe=i.toneMapping);const bt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:V,defines:b.defines,customVertexShaderID:ae,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Te,batchingColor:Te&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?i.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:ke,envMap:K,envMapMode:K&&ne.mapping,envMapCubeUVHeight:G,aoMap:C,lightMap:oe,bumpMap:te,normalMap:ce,displacementMap:d&&$,emissiveMap:me,normalMapObjectSpace:ce&&b.normalMapType===Wp,normalMapTangentSpace:ce&&b.normalMapType===$i,metalnessMap:re,roughnessMap:H,anisotropy:X,anisotropyMap:q,clearcoat:w,clearcoatMap:Ee,clearcoatNormalMap:de,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:ie,sheen:Y,sheenColorMap:we,sheenRoughnessMap:Ve,specularMap:He,specularColorMap:Me,specularIntensityMap:je,transmission:ee,transmissionMap:L,thicknessMap:Ce,gradientMap:ue,opaque:b.transparent===!1&&b.blending===Cs&&b.alphaToCoverage===!1,alphaMap:Oe,alphaTest:fe,alphaHash:se,combine:b.combine,mapUv:it&&v(b.map.channel),aoMapUv:C&&v(b.aoMap.channel),lightMapUv:oe&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:ce&&v(b.normalMap.channel),displacementMapUv:$&&v(b.displacementMap.channel),emissiveMapUv:me&&v(b.emissiveMap.channel),metalnessMapUv:re&&v(b.metalnessMap.channel),roughnessMapUv:H&&v(b.roughnessMap.channel),anisotropyMapUv:q&&v(b.anisotropyMap.channel),clearcoatMapUv:Ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:we&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&v(b.sheenRoughnessMap.channel),specularMapUv:He&&v(b.specularMap.channel),specularColorMapUv:Me&&v(b.specularColorMap.channel),specularIntensityMapUv:je&&v(b.specularIntensityMap.channel),transmissionMapUv:L&&v(b.transmissionMap.channel),thicknessMapUv:Ce&&v(b.thicknessMap.channel),alphaMapUv:Oe&&v(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||X),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(it||Oe),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qe,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===un,flipSided:b.side===Ut,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Be&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&b.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(M,b),_(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){const M=g[b.type];let D;if(M){const N=zn[M];D=yr.clone(N.uniforms)}else D=b.uniforms;return D}function P(b,M){let D;for(let N=0,z=h.length;N<z;N++){const W=h[N];if(W.cacheKey===M){D=W,++D.usedTimes;break}}return D===void 0&&(D=new $b(i,M,b,r),h.push(D)),D}function E(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function iw(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function sw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Bf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||sw),n.length>1&&n.sort(d||Bf),s.length>1&&s.sort(d||Bf)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function rw(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new zf,i.set(n,[a])):s>=r.length?(a=new zf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function aw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new _e};break;case"SpotLight":t={position:new T,direction:new T,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new T,halfWidth:new T,halfHeight:new T};break}return i[e.id]=t,t}}}function ow(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lw=0;function cw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hw(i){const e=new aw,t=ow(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new Fe,a=new Fe;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,_=0,x=0,P=0,E=0,R=0;c.sort(cw);for(let b=0,M=c.length;b<M;b++){const D=c[b],N=D.color,z=D.intensity,W=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=N.r*z,u+=N.g*z,d+=N.b*z;else if(D.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(D.sh.coefficients[k],z);R++}else if(D.isDirectionalLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ne=D.shadow,G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=D.shadow.matrix,y++}n.directional[f]=k,f++}else if(D.isSpotLight){const k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(N).multiplyScalar(z),k.distance=W,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,n.spot[v]=k;const ne=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,ne.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=ne.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=j,x++}v++}else if(D.isRectAreaLight){const k=e.get(D);k.color.copy(N).multiplyScalar(z),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=k,m++}else if(D.isPointLight){const k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity),k.distance=D.distance,k.decay=D.decay,D.castShadow){const ne=D.shadow,G=t.get(D);G.shadowIntensity=ne.intensity,G.shadowBias=ne.bias,G.shadowNormalBias=ne.normalBias,G.shadowRadius=ne.radius,G.shadowMapSize=ne.mapSize,G.shadowCameraNear=ne.camera.near,G.shadowCameraFar=ne.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,_++}n.point[g]=k,g++}else if(D.isHemisphereLight){const k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(z),k.groundColor.copy(D.groundColor).multiplyScalar(z),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==_||I.numSpotShadows!==x||I.numSpotMaps!==P||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=_,I.numSpotShadows=x,I.numSpotMaps=P,I.numLightProbes=R,n.version=lw++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const _=c[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function kf(i){const e=new hw(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function uw(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new kf(i),e.set(s,[o])):r>=a.length?(o=new kf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pw(i,e,t){let n=new Tr;const s=new Q,r=new Q,a=new tt,o=new Ru({depthPacking:Gp}),l=new Pu,c={},h=t.maxTextureSize,u={[ti]:Ut,[Ut]:ti,[un]:un},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:dw,fragmentShader:fw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Je;g.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(E,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(An),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==oi&&this.type===oi,W=p===oi&&this.type!==oi;for(let j=0,k=E.length;j<k;j++){const ne=E[j],G=ne.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const le=G.getFrameExtents();if(s.multiply(le),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,G.mapSize.y=r.y)),G.map===null||z===!0||W===!0){const ye=this.type!==oi?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new jt(s.x,s.y,ye),G.map.texture.name=ne.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const xe=G.getViewportCount();for(let ye=0;ye<xe;ye++){const Ie=G.getViewport(ye);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),N.viewport(a),G.updateMatrices(ne,ye),n=G.getFrustum(),x(R,I,G.camera,ne,this.type)}G.isPointLightShadow!==!0&&this.type===oi&&y(G,I),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,D)};function y(E,R){const I=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jt(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,f,v,null)}function _(E,R,I,b){let M=null;const D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,z=R.uuid;let W=c[N];W===void 0&&(W={},c[N]=W);let j=W[z];j===void 0&&(j=M.clone(),W[z]=j,R.addEventListener("dispose",P)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,b===oi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=I}return M}function x(E,R,I,b,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===oi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const z=e.update(E),W=E.material;if(Array.isArray(W)){const j=z.groups;for(let k=0,ne=j.length;k<ne;k++){const G=j[k],le=W[G.materialIndex];if(le&&le.visible){const xe=_(E,le,b,M);E.onBeforeShadow(i,E,R,I,z,xe,G),i.renderBufferDirect(I,null,z,xe,E,G),E.onAfterShadow(i,E,R,I,z,xe,G)}}}else if(W.visible){const j=_(E,W,b,M);E.onBeforeShadow(i,E,R,I,z,j,null),i.renderBufferDirect(I,null,z,j,E,null),E.onAfterShadow(i,E,R,I,z,j,null)}}const N=E.children;for(let z=0,W=N.length;z<W;z++)x(N[z],R,I,b,M)}function P(E){E.target.removeEventListener("dispose",P);for(const I in c){const b=c[I],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const mw={[Yo]:la,[qo]:Jo,[Zo]:jo,[Ps]:Ko,[la]:Yo,[Jo]:qo,[jo]:Zo,[Ko]:Ps};function gw(i,e){function t(){let L=!1;const Ce=new tt;let ue=null;const Oe=new tt(0,0,0,0);return{setMask:function(fe){ue!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),ue=fe)},setLocked:function(fe){L=fe},setClear:function(fe,se,Be,Qe,bt){bt===!0&&(fe*=Qe,se*=Qe,Be*=Qe),Ce.set(fe,se,Be,Qe),Oe.equals(Ce)===!1&&(i.clearColor(fe,se,Be,Qe),Oe.copy(Ce))},reset:function(){L=!1,ue=null,Oe.set(-1,0,0,0)}}}function n(){let L=!1,Ce=!1,ue=null,Oe=null,fe=null;return{setReversed:function(se){if(Ce!==se){const Be=e.get("EXT_clip_control");se?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ce=se;const Qe=fe;fe=null,this.setClear(Qe)}},getReversed:function(){return Ce},setTest:function(se){se?he(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(se){ue!==se&&!L&&(i.depthMask(se),ue=se)},setFunc:function(se){if(Ce&&(se=mw[se]),Oe!==se){switch(se){case Yo:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case qo:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Zo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Oe=se}},setLocked:function(se){L=se},setClear:function(se){fe!==se&&(Ce&&(se=1-se),i.clearDepth(se),fe=se)},reset:function(){L=!1,ue=null,Oe=null,fe=null,Ce=!1}}}function s(){let L=!1,Ce=null,ue=null,Oe=null,fe=null,se=null,Be=null,Qe=null,bt=null;return{setTest:function(vt){L||(vt?he(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(vt){Ce!==vt&&!L&&(i.stencilMask(vt),Ce=vt)},setFunc:function(vt,Wn,pi){(ue!==vt||Oe!==Wn||fe!==pi)&&(i.stencilFunc(vt,Wn,pi),ue=vt,Oe=Wn,fe=pi)},setOp:function(vt,Wn,pi){(se!==vt||Be!==Wn||Qe!==pi)&&(i.stencilOp(vt,Wn,pi),se=vt,Be=Wn,Qe=pi)},setLocked:function(vt){L=vt},setClear:function(vt){bt!==vt&&(i.clearStencil(vt),bt=vt)},reset:function(){L=!1,Ce=null,ue=null,Oe=null,fe=null,se=null,Be=null,Qe=null,bt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,P=null,E=null,R=new _e(0,0,0),I=0,b=!1,M=null,D=null,N=null,z=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=ne>=2);let le=null,xe={};const ye=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),ge=new tt().fromArray(ye),V=new tt().fromArray(Ie);function ae(L,Ce,ue,Oe){const fe=new Uint8Array(4),se=i.createTexture();i.bindTexture(L,se),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<ue;Be++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(Ce,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(Ce+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return se}const be={};be[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(Ps),te(!1),ce(Ih),he(i.CULL_FACE),C(An);function he(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ue(L,Ce){return u[L]!==Ce?(i.bindFramebuffer(L,Ce),u[L]=Ce,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ce),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Te(L,Ce){let ue=f,Oe=!1;if(L){ue=d.get(Ce),ue===void 0&&(ue=[],d.set(Ce,ue));const fe=L.textures;if(ue.length!==fe.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Be=fe.length;se<Be;se++)ue[se]=i.COLOR_ATTACHMENT0+se;ue.length=fe.length,Oe=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Oe=!0);Oe&&i.drawBuffers(ue)}function it(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ke={[Hi]:i.FUNC_ADD,[pp]:i.FUNC_SUBTRACT,[mp]:i.FUNC_REVERSE_SUBTRACT};ke[gp]=i.MIN,ke[vp]=i.MAX;const K={[_p]:i.ZERO,[xp]:i.ONE,[yp]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[wp]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Ep]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[Ap]:i.CONSTANT_COLOR,[Cp]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Pp]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,Ce,ue,Oe,fe,se,Be,Qe,bt,vt){if(L===An){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(he(i.BLEND),v=!0),L!==fp){if(L!==m||vt!==b){if((p!==Hi||x!==Hi)&&(i.blendEquation(i.FUNC_ADD),p=Hi,x=Hi),vt)switch(L){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,_=null,P=null,E=null,R.set(0,0,0),I=0,m=L,b=vt}return}fe=fe||Ce,se=se||ue,Be=Be||Oe,(Ce!==p||fe!==x)&&(i.blendEquationSeparate(ke[Ce],ke[fe]),p=Ce,x=fe),(ue!==y||Oe!==_||se!==P||Be!==E)&&(i.blendFuncSeparate(K[ue],K[Oe],K[se],K[Be]),y=ue,_=Oe,P=se,E=Be),(Qe.equals(R)===!1||bt!==I)&&(i.blendColor(Qe.r,Qe.g,Qe.b,bt),R.copy(Qe),I=bt),m=L,b=!1}function oe(L,Ce){L.side===un?Se(i.CULL_FACE):he(i.CULL_FACE);let ue=L.side===Ut;Ce&&(ue=!ue),te(ue),L.blending===Cs&&L.transparent===!1?C(An):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const Oe=L.stencilWrite;o.setTest(Oe),Oe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function te(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function ce(L){L!==up?(he(i.CULL_FACE),L!==D&&(L===Ih?i.cullFace(i.BACK):L===dp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),D=L}function $(L){L!==N&&(k&&i.lineWidth(L),N=L)}function me(L,Ce,ue){L?(he(i.POLYGON_OFFSET_FILL),(z!==Ce||W!==ue)&&(i.polygonOffset(Ce,ue),z=Ce,W=ue)):Se(i.POLYGON_OFFSET_FILL)}function re(L){L?he(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function H(L){L===void 0&&(L=i.TEXTURE0+j-1),le!==L&&(i.activeTexture(L),le=L)}function X(L,Ce,ue){ue===void 0&&(le===null?ue=i.TEXTURE0+j-1:ue=le);let Oe=xe[ue];Oe===void 0&&(Oe={type:void 0,texture:void 0},xe[ue]=Oe),(Oe.type!==L||Oe.texture!==Ce)&&(le!==ue&&(i.activeTexture(ue),le=ue),i.bindTexture(L,Ce||be[L]),Oe.type=L,Oe.texture=Ce)}function w(){const L=xe[le];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ge.copy(L))}function Ve(L){V.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),V.copy(L))}function He(L,Ce){let ue=c.get(Ce);ue===void 0&&(ue=new WeakMap,c.set(Ce,ue));let Oe=ue.get(L);Oe===void 0&&(Oe=i.getUniformBlockIndex(Ce,L.name),ue.set(L,Oe))}function Me(L,Ce){const Oe=c.get(Ce).get(L);l.get(Ce)!==Oe&&(i.uniformBlockBinding(Ce,Oe,L.__bindingPointIndex),l.set(Ce,Oe))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,xe={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,y=null,_=null,x=null,P=null,E=null,R=new _e(0,0,0),I=0,b=!1,M=null,D=null,N=null,z=null,W=null,ge.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Se,bindFramebuffer:Ue,drawBuffers:Te,useProgram:it,setBlending:C,setMaterial:oe,setFlipSided:te,setCullFace:ce,setLineWidth:$,setPolygonOffset:me,setScissorTest:re,activeTexture:H,bindTexture:X,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:De,texImage3D:ie,updateUBOMapping:He,uniformBlockBinding:Me,texStorage2D:de,texStorage3D:Ae,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:q,compressedTexSubImage3D:Ee,scissor:we,viewport:Ve,reset:je}}function vw(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):va("canvas")}function v(w,S,O){let Y=1;const ee=X(w);if((ee.width>O||ee.height>O)&&(Y=O/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(Y*ee.width),Ee=Math.floor(Y*ee.height);u===void 0&&(u=g(q,Ee));const de=S?g(q,Ee):u;return de.width=q,de.height=Ee,de.getContext("2d").drawImage(w,0,0,q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+q+"x"+Ee+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(w,S,O,Y,ee=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=S;if(S===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),S===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),S===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),S===i.RGBA){const Ee=ee?pa:ot.getTransfer(Y);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Ee===xt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(w,S){let O;return w?S===null||S===hi||S===Ds?O=i.DEPTH24_STENCIL8:S===Mn?O=i.DEPTH32F_STENCIL8:S===gr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===Ds?O=i.DEPTH_COMPONENT24:S===Mn?O=i.DEPTH_COMPONENT32F:S===gr&&(O=i.DEPTH_COMPONENT16),O}function P(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==It?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){const S=w.target;S.removeEventListener("dispose",E),I(S),S.isVideoTexture&&h.delete(S)}function R(w){const S=w.target;S.removeEventListener("dispose",R),M(S)}function I(w){const S=n.get(w);if(S.__webglInit===void 0)return;const O=w.source,Y=d.get(O);if(Y){const ee=Y[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(w),Object.keys(Y).length===0&&d.delete(O)}n.remove(w)}function b(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const O=w.source,Y=d.get(O);delete Y[S.__cacheKey],a.memory.textures--}function M(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let ee=0;ee<S.__webglFramebuffer[Y].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[Y][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)i.deleteFramebuffer(S.__webglFramebuffer[Y]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=w.textures;for(let Y=0,ee=O.length;Y<ee;Y++){const q=n.get(O[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[Y])}n.remove(w)}let D=0;function N(){D=0}function z(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function W(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function j(w,S){const O=n.get(w);if(w.isVideoTexture&&re(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,w,S);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function k(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){be(O,w,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function ne(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){be(O,w,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function G(w,S){const O=n.get(w);if(w.version>0&&O.__version!==w.version){he(O,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const le={[Is]:i.REPEAT,[kn]:i.CLAMP_TO_EDGE,[ua]:i.MIRRORED_REPEAT},xe={[nn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[$n]:i.LINEAR_MIPMAP_LINEAR},ye={[Xp]:i.NEVER,[jp]:i.ALWAYS,[Yp]:i.LESS,[fu]:i.LEQUAL,[qp]:i.EQUAL,[Jp]:i.GEQUAL,[Zp]:i.GREATER,[Kp]:i.NOTEQUAL};function Ie(w,S){if(S.type===Mn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===It||S.magFilter===Jr||S.magFilter===cr||S.magFilter===$n||S.minFilter===It||S.minFilter===Jr||S.minFilter===cr||S.minFilter===$n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,le[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,xe[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==cr&&S.minFilter!==$n||S.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ge(w,S){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",E));const Y=S.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const q=W(S);if(q!==w.__cacheKey){ee[q]===void 0&&(ee[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ee[q].usedTimes++;const Ee=ee[w.__cacheKey];Ee!==void 0&&(ee[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(S)),w.__cacheKey=q,w.__webglTexture=ee[q].texture}return O}function V(w,S,O){return Math.floor(Math.floor(w/O)/S)}function ae(w,S,O,Y){const q=w.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,O,Y,S.data);else{q.sort((ie,we)=>ie.start-we.start);let Ee=0;for(let ie=1;ie<q.length;ie++){const we=q[Ee],Ve=q[ie],He=we.start+we.count,Me=V(Ve.start,S.width,4),je=V(we.start,S.width,4);Ve.start<=He+1&&Me===je&&V(Ve.start+Ve.count-1,S.width,4)===Me?we.count=Math.max(we.count,Ve.start+Ve.count-we.start):(++Ee,q[Ee]=Ve)}q.length=Ee+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ie=0,we=q.length;ie<we;ie++){const Ve=q[ie],He=Math.floor(Ve.start/4),Me=Math.ceil(Ve.count/4),je=He%S.width,L=Math.floor(He/S.width),Ce=Me,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,je,L,Ce,ue,O,Y,S.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function be(w,S,O){let Y=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=i.TEXTURE_3D);const ee=ge(w,S),q=S.source;t.bindTexture(Y,w.__webglTexture,i.TEXTURE0+O);const Ee=n.get(q);if(q.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const de=ot.getPrimaries(ot.workingColorSpace),Ae=S.colorSpace===jn?null:ot.getPrimaries(S.colorSpace),De=S.colorSpace===jn||de===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ie=v(S.image,!1,s.maxTextureSize);ie=H(S,ie);const we=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type);let He=_(S.internalFormat,we,Ve,S.colorSpace,S.isVideoTexture);Ie(Y,S);let Me;const je=S.mipmaps,L=S.isVideoTexture!==!0,Ce=Ee.__version===void 0||ee===!0,ue=q.dataReady,Oe=P(S,ie);if(S.isDepthTexture)He=x(S.format===Ls,S.type),Ce&&(L?t.texStorage2D(i.TEXTURE_2D,1,He,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,He,ie.width,ie.height,0,we,Ve,null));else if(S.isDataTexture)if(je.length>0){L&&Ce&&t.texStorage2D(i.TEXTURE_2D,Oe,He,je[0].width,je[0].height);for(let fe=0,se=je.length;fe<se;fe++)Me=je[fe],L?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,we,Ve,Me.data):t.texImage2D(i.TEXTURE_2D,fe,He,Me.width,Me.height,0,we,Ve,Me.data);S.generateMipmaps=!1}else L?(Ce&&t.texStorage2D(i.TEXTURE_2D,Oe,He,ie.width,ie.height),ue&&ae(S,ie,we,Ve)):t.texImage2D(i.TEXTURE_2D,0,He,ie.width,ie.height,0,we,Ve,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,He,je[0].width,je[0].height,ie.depth);for(let fe=0,se=je.length;fe<se;fe++)if(Me=je[fe],S.format!==fn)if(we!==null)if(L){if(ue)if(S.layerUpdates.size>0){const Be=Xh(Me.width,Me.height,S.format,S.type);for(const Qe of S.layerUpdates){const bt=Me.data.subarray(Qe*Be/Me.data.BYTES_PER_ELEMENT,(Qe+1)*Be/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Qe,Me.width,Me.height,1,we,bt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,ie.depth,we,Me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,He,Me.width,Me.height,ie.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Me.width,Me.height,ie.depth,we,Ve,Me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,He,Me.width,Me.height,ie.depth,0,we,Ve,Me.data)}else{L&&Ce&&t.texStorage2D(i.TEXTURE_2D,Oe,He,je[0].width,je[0].height);for(let fe=0,se=je.length;fe<se;fe++)Me=je[fe],S.format!==fn?we!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,He,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me.width,Me.height,we,Ve,Me.data):t.texImage2D(i.TEXTURE_2D,fe,He,Me.width,Me.height,0,we,Ve,Me.data)}else if(S.isDataArrayTexture)if(L){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,He,ie.width,ie.height,ie.depth),ue)if(S.layerUpdates.size>0){const fe=Xh(ie.width,ie.height,S.format,S.type);for(const se of S.layerUpdates){const Be=ie.data.subarray(se*fe/ie.data.BYTES_PER_ELEMENT,(se+1)*fe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,ie.width,ie.height,1,we,Ve,Be)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,we,Ve,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ie.width,ie.height,ie.depth,0,we,Ve,ie.data);else if(S.isData3DTexture)L?(Ce&&t.texStorage3D(i.TEXTURE_3D,Oe,He,ie.width,ie.height,ie.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,we,Ve,ie.data)):t.texImage3D(i.TEXTURE_3D,0,He,ie.width,ie.height,ie.depth,0,we,Ve,ie.data);else if(S.isFramebufferTexture){if(Ce)if(L)t.texStorage2D(i.TEXTURE_2D,Oe,He,ie.width,ie.height);else{let fe=ie.width,se=ie.height;for(let Be=0;Be<Oe;Be++)t.texImage2D(i.TEXTURE_2D,Be,He,fe,se,0,we,Ve,null),fe>>=1,se>>=1}}else if(je.length>0){if(L&&Ce){const fe=X(je[0]);t.texStorage2D(i.TEXTURE_2D,Oe,He,fe.width,fe.height)}for(let fe=0,se=je.length;fe<se;fe++)Me=je[fe],L?ue&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,we,Ve,Me):t.texImage2D(i.TEXTURE_2D,fe,He,we,Ve,Me);S.generateMipmaps=!1}else if(L){if(Ce){const fe=X(ie);t.texStorage2D(i.TEXTURE_2D,Oe,He,fe.width,fe.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ve,ie)}else t.texImage2D(i.TEXTURE_2D,0,He,we,Ve,ie);m(S)&&p(Y),Ee.__version=q.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function he(w,S,O){if(S.image.length!==6)return;const Y=ge(w,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const q=n.get(ee);if(ee.version!==q.__version||Y===!0){t.activeTexture(i.TEXTURE0+O);const Ee=ot.getPrimaries(ot.workingColorSpace),de=S.colorSpace===jn?null:ot.getPrimaries(S.colorSpace),Ae=S.colorSpace===jn||Ee===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const De=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,we=[];for(let se=0;se<6;se++)!De&&!ie?we[se]=v(S.image[se],!0,s.maxCubemapSize):we[se]=ie?S.image[se].image:S.image[se],we[se]=H(S,we[se]);const Ve=we[0],He=r.convert(S.format,S.colorSpace),Me=r.convert(S.type),je=_(S.internalFormat,He,Me,S.colorSpace),L=S.isVideoTexture!==!0,Ce=q.__version===void 0||Y===!0,ue=ee.dataReady;let Oe=P(S,Ve);Ie(i.TEXTURE_CUBE_MAP,S);let fe;if(De){L&&Ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,je,Ve.width,Ve.height);for(let se=0;se<6;se++){fe=we[se].mipmaps;for(let Be=0;Be<fe.length;Be++){const Qe=fe[Be];S.format!==fn?He!==null?L?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be,0,0,Qe.width,Qe.height,He,Qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be,je,Qe.width,Qe.height,0,Qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be,0,0,Qe.width,Qe.height,He,Me,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be,je,Qe.width,Qe.height,0,He,Me,Qe.data)}}}else{if(fe=S.mipmaps,L&&Ce){fe.length>0&&Oe++;const se=X(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,je,se.width,se.height)}for(let se=0;se<6;se++)if(ie){L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we[se].width,we[se].height,He,Me,we[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,je,we[se].width,we[se].height,0,He,Me,we[se].data);for(let Be=0;Be<fe.length;Be++){const bt=fe[Be].image[se].image;L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be+1,0,0,bt.width,bt.height,He,Me,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be+1,je,bt.width,bt.height,0,He,Me,bt.data)}}else{L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,He,Me,we[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,je,He,Me,we[se]);for(let Be=0;Be<fe.length;Be++){const Qe=fe[Be];L?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be+1,0,0,He,Me,Qe.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Be+1,je,He,Me,Qe.image[se])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),q.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,O,Y,ee,q){const Ee=r.convert(O.format,O.colorSpace),de=r.convert(O.type),Ae=_(O.internalFormat,Ee,de,O.colorSpace),De=n.get(S),ie=n.get(O);if(ie.__renderTarget=S,!De.__hasExternalTextures){const we=Math.max(1,S.width>>q),Ve=Math.max(1,S.height>>q);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,q,Ae,we,Ve,S.depth,0,Ee,de,null):t.texImage2D(ee,q,Ae,we,Ve,0,Ee,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ee,ie.__webglTexture,0,$(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ee,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const Y=S.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,q=x(S.stencilBuffer,ee),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=$(S);me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,q,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,w)}else{const Y=S.textures;for(let ee=0;ee<Y.length;ee++){const q=Y[ee],Ee=r.convert(q.format,q.colorSpace),de=r.convert(q.type),Ae=_(q.internalFormat,Ee,de,q.colorSpace),De=$(S);O&&me(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ae,S.width,S.height):me(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(S.depthTexture);Y.__renderTarget=S,(!Y.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const ee=Y.__webglTexture,q=$(S);if(S.depthTexture.format===vr)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Ls)me(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function it(w){const S=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Y}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const Y=w.texture.mipmaps;Y&&Y.length>0?Te(S.__webglFramebuffer[0],w):Te(S.__webglFramebuffer,w)}else if(O){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[Y],w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}else{const Y=w.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,w,!1);else{const ee=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(w,S,O){const Y=n.get(w);S!==void 0&&Se(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&it(w)}function K(w){const S=w.texture,O=n.get(w),Y=n.get(S);w.addEventListener("dispose",R);const ee=w.textures,q=w.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=S.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)O.__webglFramebuffer[de][Ae]=i.createFramebuffer()}else O.__webglFramebuffer[de]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<S.mipmaps.length;de++)O.__webglFramebuffer[de]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let de=0,Ae=ee.length;de<Ae;de++){const De=n.get(ee[de]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&me(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const Ae=ee[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const De=r.convert(Ae.format,Ae.colorSpace),ie=r.convert(Ae.type),we=_(Ae.internalFormat,De,ie,Ae.colorSpace,w.isXRRenderTarget===!0),Ve=$(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let de=0;de<6;de++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Se(O.__webglFramebuffer[de][Ae],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae);else Se(O.__webglFramebuffer[de],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let de=0,Ae=ee.length;de<Ae;de++){const De=ee[de],ie=n.get(De);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ie(i.TEXTURE_2D,De),Se(O.__webglFramebuffer,w,De,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),m(De)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Y.__webglTexture),Ie(de,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Se(O.__webglFramebuffer[Ae],w,S,i.COLOR_ATTACHMENT0,de,Ae);else Se(O.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,de,0);m(S)&&p(de),t.unbindTexture()}w.depthBuffer&&it(w)}function C(w){const S=w.textures;for(let O=0,Y=S.length;O<Y;O++){const ee=S[O];if(m(ee)){const q=y(w),Ee=n.get(ee).__webglTexture;t.bindTexture(q,Ee),p(q),t.unbindTexture()}}}const oe=[],te=[];function ce(w){if(w.samples>0){if(me(w)===!1){const S=w.textures,O=w.width,Y=w.height;let ee=i.COLOR_BUFFER_BIT;const q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(w),de=S.length>1;if(de)for(let De=0;De<S.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const Ae=w.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let De=0;De<S.length;De++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);const ie=n.get(S[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,O,Y,0,0,O,Y,ee,i.NEAREST),l===!0&&(oe.length=0,te.length=0,oe.push(i.COLOR_ATTACHMENT0+De),w.depthBuffer&&w.resolveDepthBuffer===!1&&(oe.push(q),te.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<S.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[De]);const ie=n.get(S[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function $(w){return Math.min(s.maxSamples,w.samples)}function me(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function H(w,S){const O=w.colorSpace,Y=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Ci&&O!==jn&&(ot.getTransfer(O)===xt?(Y!==fn||ee!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function X(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=ne,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=K,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=me}function ag(i,e){function t(n,s=jn){let r;const a=ot.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ru)return i.BYTE;if(n===au)return i.SHORT;if(n===gr)return i.UNSIGNED_SHORT;if(n===Bl)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Fs)return i.HALF_FLOAT;if(n===lu)return i.ALPHA;if(n===cu)return i.RGB;if(n===fn)return i.RGBA;if(n===vr)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===Vl)return i.RED;if(n===Da)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===Hl)return i.RG_INTEGER;if(n===Gl)return i.RGBA_INTEGER;if(n===jr||n===$r||n===Qr||n===ea)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qo||n===el||n===tl||n===nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===il||n===sl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===vl||n===_l||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ul)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ta||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ta)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===Sl||n===bl||n===wl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $t({vertexShader:_w,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mw extends Dn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new yw,m=t.getContextAttributes();let p=null,y=null;const _=[],x=[],P=new Q;let E=null;const R=new zt;R.viewport=new tt;const I=new zt;I.viewport=new tt;const b=[R,I],M=new qm;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ae=_[V];return ae===void 0&&(ae=new ko,_[V]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(V){let ae=_[V];return ae===void 0&&(ae=new ko,_[V]=ae),ae.getGripSpace()},this.getHand=function(V){let ae=_[V];return ae===void 0&&(ae=new ko,_[V]=ae),ae.getHandSpace()};function z(V){const ae=x.indexOf(V.inputSource);if(ae===-1)return;const be=_[ae];be!==void 0&&(be.update(V.inputSource,V.frame,c||a),be.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let V=0;V<_.length;V++){const ae=x[V];ae!==null&&(x[V]=null,_[V].disconnect(ae))}D=null,N=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,y=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,he=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?Ls:vr,he=m.stencil?Ds:hi);const Ue={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new jt(d.textureWidth,d.textureHeight,{format:fn,type:sn,depthTexture:new Ua(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new jt(f.framebufferWidth,f.framebufferHeight,{format:fn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ge.setContext(s),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(V){for(let ae=0;ae<V.removed.length;ae++){const be=V.removed[ae],he=x.indexOf(be);he>=0&&(x[he]=null,_[he].disconnect(be))}for(let ae=0;ae<V.added.length;ae++){const be=V.added[ae];let he=x.indexOf(be);if(he===-1){for(let Ue=0;Ue<_.length;Ue++)if(Ue>=x.length){x.push(be),he=Ue;break}else if(x[Ue]===null){x[Ue]=be,he=Ue;break}if(he===-1)break}const Se=_[he];Se&&Se.connect(be)}}const k=new T,ne=new T;function G(V,ae,be){k.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(be.matrixWorld);const he=k.distanceTo(ne),Se=ae.projectionMatrix.elements,Ue=be.projectionMatrix.elements,Te=Se[14]/(Se[10]-1),it=Se[14]/(Se[10]+1),ke=(Se[9]+1)/Se[5],K=(Se[9]-1)/Se[5],C=(Se[8]-1)/Se[0],oe=(Ue[8]+1)/Ue[0],te=Te*C,ce=Te*oe,$=he/(-C+oe),me=$*-C;if(ae.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(me),V.translateZ($),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Se[10]===-1)V.projectionMatrix.copy(ae.projectionMatrix),V.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const re=Te+$,H=it+$,X=te-me,w=ce+(he-me),S=ke*it/H*re,O=K*it/H*re;V.projectionMatrix.makePerspective(X,w,S,O,re,H),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function le(V,ae){ae===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ae.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ae=V.near,be=V.far;v.texture!==null&&(v.depthNear>0&&(ae=v.depthNear),v.depthFar>0&&(be=v.depthFar)),M.near=I.near=R.near=ae,M.far=I.far=R.far=be,(D!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,N=M.far),R.layers.mask=V.layers.mask|2,I.layers.mask=V.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const he=V.parent,Se=M.cameras;le(M,he);for(let Ue=0;Ue<Se.length;Ue++)le(Se[Ue],he);Se.length===2?G(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),xe(V,M,he)};function xe(V,ae,be){be===null?V.matrix.copy(ae.matrixWorld):(V.matrix.copy(be.matrixWorld),V.matrix.invert(),V.matrix.multiply(ae.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ae.projectionMatrix),V.projectionMatrixInverse.copy(ae.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=_r*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ye=null;function Ie(V,ae){if(h=ae.getViewerPose(c||a),g=ae,h!==null){const be=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;be.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let Te=0;Te<be.length;Te++){const it=be[Te];let ke=null;if(f!==null)ke=f.getViewport(it);else{const C=u.getViewSubImage(d,it);ke=C.viewport,Te===0&&(e.setRenderTargetTextures(y,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(y))}let K=b[Te];K===void 0&&(K=new zt,K.layers.enable(Te),K.viewport=new tt,b[Te]=K),K.matrix.fromArray(it.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(it.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ke.x,ke.y,ke.width,ke.height),Te===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(K)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Te=u.getDepthInformation(be[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,s.renderState)}}for(let be=0;be<_.length;be++){const he=x[be],Se=_[be];he!==null&&Se!==void 0&&Se.update(he,ae,c||a)}ye&&ye(V,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}const ge=new tg;ge.setAnimationLoop(Ie),this.setAnimationLoop=function(V){ye=V},this.dispose=function(){}}}const vs=new tn,Sw=new Fe;function bw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,nm(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,vs.copy(x),vs.x*=-1,vs.y*=-1,vs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(vs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ww(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=s[y.id];x===void 0&&(g(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const P=_.program;n.updateUBOMapping(y,P);const E=e.render.frame;r[y.id]!==E&&(d(y),r[y.id]=E)}function h(y){const _=u();y.__bindingPointIndex=_;const x=i.createBuffer(),P=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=s[y.id],x=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,R=x.length;E<R;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,M=I.length;b<M;b++){const D=I[b];if(f(D,E,b,P)===!0){const N=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let j=0;j<z.length;j++){const k=z[j],ne=v(k);typeof k=="number"||typeof k=="boolean"?(D.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+W,D.__data)):k.isMatrix3?(D.__data[0]=k.elements[0],D.__data[1]=k.elements[1],D.__data[2]=k.elements[2],D.__data[3]=0,D.__data[4]=k.elements[3],D.__data[5]=k.elements[4],D.__data[6]=k.elements[5],D.__data[7]=0,D.__data[8]=k.elements[6],D.__data[9]=k.elements[7],D.__data[10]=k.elements[8],D.__data[11]=0):(k.toArray(D.__data,W),W+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,x,P){const E=y.value,R=_+"_"+x;if(P[R]===void 0)return typeof E=="number"||typeof E=="boolean"?P[R]=E:P[R]=E.clone(),!0;{const I=P[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return P[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(y){const _=y.uniforms;let x=0;const P=16;for(let R=0,I=_.length;R<I;R++){const b=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,D=b.length;M<D;M++){const N=b[M],z=Array.isArray(N.value)?N.value:[N.value];for(let W=0,j=z.length;W<j;W++){const k=z[W],ne=v(k),G=x%P,le=G%ne.boundary,xe=G+le;x+=le,xe!==0&&P-xe<ne.storage&&(x+=P-xe),N.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=ne.storage}}}const E=x%P;return E>0&&(x+=P-E),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class og{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=gt;let E=0,R=0,I=null,b=-1,M=null;const D=new tt,N=new tt;let z=null;const W=new _e(0);let j=0,k=t.width,ne=t.height,G=1,le=null,xe=null;const ye=new tt(0,0,k,ne),Ie=new tt(0,0,k,ne);let ge=!1;const V=new Tr;let ae=!1,be=!1;const he=new Fe,Se=new Fe,Ue=new T,Te=new tt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function K(){return I===null?G:1}let C=n;function oe(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",se,!1),C===null){const F="webgl2";if(C=oe(F,A),C===null)throw oe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,ce,$,me,re,H,X,w,S,O,Y,ee,q,Ee,de,Ae,De,ie,we,Ve,He,Me,je,L;function Ce(){te=new OS(C),te.init(),Me=new ag(C,te),ce=new RS(C,te,e,Me),$=new gw(C,te),ce.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),me=new zS(C),re=new iw,H=new vw(C,te,$,re,ce,Me,me),X=new IS(x),w=new NS(x),S=new Xx(C),je=new AS(C,S),O=new FS(C,S,me,je),Y=new VS(C,O,S,me),we=new kS(C,ce,H),Ae=new PS(re),ee=new nw(x,X,w,te,ce,je,Ae),q=new bw(x,re),Ee=new rw,de=new uw(te),ie=new TS(x,X,w,$,Y,f,l),De=new pw(x,Y,ce),L=new ww(C,me,ce,$),Ve=new CS(C,te,me),He=new BS(C,te,me),me.programs=ee.programs,x.capabilities=ce,x.extensions=te,x.properties=re,x.renderLists=Ee,x.shadowMap=De,x.state=$,x.info=me}Ce();const ue=new Mw(x,C);this.xr=ue,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(k,ne,!1))},this.getSize=function(A){return A.set(k,ne)},this.setSize=function(A,F,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,ne=F,t.width=Math.floor(A*G),t.height=Math.floor(F*G),Z===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(k*G,ne*G).floor()},this.setDrawingBufferSize=function(A,F,Z){k=A,ne=F,G=Z,t.width=Math.floor(A*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,F,Z,J){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,F,Z,J),$.viewport(D.copy(ye).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Ie)},this.setScissor=function(A,F,Z,J){A.isVector4?Ie.set(A.x,A.y,A.z,A.w):Ie.set(A,F,Z,J),$.scissor(N.copy(Ie).multiplyScalar(G).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){$.setScissorTest(ge=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Z=!0){let J=0;if(A){let B=!1;if(I!==null){const pe=I.texture.format;B=pe===Gl||pe===Hl||pe===Da}if(B){const pe=I.texture.type,Re=pe===sn||pe===hi||pe===gr||pe===Ds||pe===zl||pe===kl,ze=ie.getClearColor(),Ne=ie.getClearAlpha(),qe=ze.r,Ke=ze.g,Ge=ze.b;Re?(g[0]=qe,g[1]=Ke,g[2]=Ge,g[3]=Ne,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=qe,v[1]=Ke,v[2]=Ge,v[3]=Ne,C.clearBufferiv(C.COLOR,0,v))}else J|=C.COLOR_BUFFER_BIT}F&&(J|=C.DEPTH_BUFFER_BIT),Z&&(J|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ie.dispose(),Ee.dispose(),de.dispose(),re.dispose(),X.dispose(),w.dispose(),Y.dispose(),je.dispose(),L.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Zu),ue.removeEventListener("sessionend",Ku),ns.stop()};function Oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=me.autoReset,F=De.enabled,Z=De.autoUpdate,J=De.needsUpdate,B=De.type;Ce(),me.autoReset=A,De.enabled=F,De.autoUpdate=Z,De.needsUpdate=J,De.type=B}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Be(A){const F=A.target;F.removeEventListener("dispose",Be),Qe(F)}function Qe(A){bt(A),re.remove(A)}function bt(A){const F=re.get(A).programs;F!==void 0&&(F.forEach(function(Z){ee.releaseProgram(Z)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Z,J,B,pe){F===null&&(F=it);const Re=B.isMesh&&B.matrixWorld.determinant()<0,ze=Pg(A,F,Z,J,B);$.setMaterial(J,Re);let Ne=Z.index,qe=1;if(J.wireframe===!0){if(Ne=O.getWireframeAttribute(Z),Ne===void 0)return;qe=2}const Ke=Z.drawRange,Ge=Z.attributes.position;let rt=Ke.start*qe,_t=(Ke.start+Ke.count)*qe;pe!==null&&(rt=Math.max(rt,pe.start*qe),_t=Math.min(_t,(pe.start+pe.count)*qe)),Ne!==null?(rt=Math.max(rt,0),_t=Math.min(_t,Ne.count)):Ge!=null&&(rt=Math.max(rt,0),_t=Math.min(_t,Ge.count));const Ct=_t-rt;if(Ct<0||Ct===1/0)return;je.setup(B,J,ze,Z,Ne);let Dt,dt=Ve;if(Ne!==null&&(Dt=S.get(Ne),dt=He,dt.setIndex(Dt)),B.isMesh)J.wireframe===!0?($.setLineWidth(J.wireframeLinewidth*K()),dt.setMode(C.LINES)):dt.setMode(C.TRIANGLES);else if(B.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),$.setLineWidth(Xe*K()),B.isLineSegments?dt.setMode(C.LINES):B.isLineLoop?dt.setMode(C.LINE_LOOP):dt.setMode(C.LINE_STRIP)}else B.isPoints?dt.setMode(C.POINTS):B.isSprite&&dt.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Xe=B._multiDrawStarts,en=B._multiDrawCounts,mt=B._multiDrawCount,Xn=Ne?S.get(Ne).bytesPerElement:1,Hs=re.get(J).currentProgram.getUniforms();for(let wn=0;wn<mt;wn++)Hs.setValue(C,"_gl_DrawID",wn),dt.render(Xe[wn]/Xn,en[wn])}else if(B.isInstancedMesh)dt.renderInstances(rt,Ct,B.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,en=Math.min(Z.instanceCount,Xe);dt.renderInstances(rt,Ct,en)}else dt.render(rt,Ct)};function vt(A,F,Z){A.transparent===!0&&A.side===un&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,Ha(A,F,Z),A.side=ti,A.needsUpdate=!0,Ha(A,F,Z),A.side=un):Ha(A,F,Z)}this.compile=function(A,F,Z=null){Z===null&&(Z=A),p=de.get(Z),p.init(F),_.push(p),Z.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==Z&&A.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const J=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let Re=0;Re<pe.length;Re++){const ze=pe[Re];vt(ze,Z,B),J.add(ze)}else vt(pe,Z,B),J.add(pe)}),p=_.pop(),J},this.compileAsync=function(A,F,Z=null){const J=this.compile(A,F,Z);return new Promise(B=>{function pe(){if(J.forEach(function(Re){re.get(Re).currentProgram.isReady()&&J.delete(Re)}),J.size===0){B(A);return}setTimeout(pe,10)}te.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Wn=null;function pi(A){Wn&&Wn(A)}function Zu(){ns.stop()}function Ku(){ns.start()}const ns=new tg;ns.setAnimationLoop(pi),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(A){Wn=A,ue.setAnimationLoop(A),A===null?ns.stop():ns.start()},ue.addEventListener("sessionstart",Zu),ue.addEventListener("sessionend",Ku),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,I),p=de.get(A,_.length),p.init(F),_.push(p),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),V.setFromProjectionMatrix(Se),be=this.localClippingEnabled,ae=Ae.init(this.clippingPlanes,be),m=Ee.get(A,y.length),m.init(),y.push(m),ue.enabled===!0&&ue.isPresenting===!0){const pe=x.xr.getDepthSensingMesh();pe!==null&&Mc(pe,F,-1/0,x.sortObjects)}Mc(A,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,xe),ke=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,ke&&ie.addToRenderList(m,A),this.info.render.frame++,ae===!0&&Ae.beginShadows();const Z=p.state.shadowsArray;De.render(Z,A,F),ae===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const pe=F.cameras;if(B.length>0)for(let Re=0,ze=pe.length;Re<ze;Re++){const Ne=pe[Re];ju(J,B,A,Ne)}ke&&ie.render(A);for(let Re=0,ze=pe.length;Re<ze;Re++){const Ne=pe[Re];Ju(m,A,Ne,Ne.viewport)}}else B.length>0&&ju(J,B,A,F),ke&&ie.render(A),Ju(m,A,F);I!==null&&R===0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(x,A,F),je.resetDefaultState(),b=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],ae===!0&&Ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Mc(A,F,Z,J){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){J&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Se);const Re=Y.update(A),ze=A.material;ze.visible&&m.push(A,Re,ze,Z,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const Re=Y.update(A),ze=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Te.copy(Re.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(Se)),Array.isArray(ze)){const Ne=Re.groups;for(let qe=0,Ke=Ne.length;qe<Ke;qe++){const Ge=Ne[qe],rt=ze[Ge.materialIndex];rt&&rt.visible&&m.push(A,Re,rt,Z,Te.z,Ge)}}else ze.visible&&m.push(A,Re,ze,Z,Te.z,null)}}const pe=A.children;for(let Re=0,ze=pe.length;Re<ze;Re++)Mc(pe[Re],F,Z,J)}function Ju(A,F,Z,J){const B=A.opaque,pe=A.transmissive,Re=A.transparent;p.setupLightsView(Z),ae===!0&&Ae.setGlobalState(x.clippingPlanes,Z),J&&$.viewport(D.copy(J)),B.length>0&&Va(B,F,Z),pe.length>0&&Va(pe,F,Z),Re.length>0&&Va(Re,F,Z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function ju(A,F,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new jt(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Fs:sn,minFilter:$n,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],Re=J.viewport||D;pe.setSize(Re.z*x.transmissionResolutionScale,Re.w*x.transmissionResolutionScale);const ze=x.getRenderTarget();x.setRenderTarget(pe),x.getClearColor(W),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ke&&ie.render(Z);const Ne=x.toneMapping;x.toneMapping=Ei;const qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ae===!0&&Ae.setGlobalState(x.clippingPlanes,J),Va(A,Z,J),H.updateMultisampleRenderTarget(pe),H.updateRenderTargetMipmap(pe),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ge=0,rt=F.length;Ge<rt;Ge++){const _t=F[Ge],Ct=_t.object,Dt=_t.geometry,dt=_t.material,Xe=_t.group;if(dt.side===un&&Ct.layers.test(J.layers)){const en=dt.side;dt.side=Ut,dt.needsUpdate=!0,$u(Ct,Z,J,Dt,dt,Xe),dt.side=en,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(H.updateMultisampleRenderTarget(pe),H.updateRenderTargetMipmap(pe))}x.setRenderTarget(ze),x.setClearColor(W,j),qe!==void 0&&(J.viewport=qe),x.toneMapping=Ne}function Va(A,F,Z){const J=F.isScene===!0?F.overrideMaterial:null;for(let B=0,pe=A.length;B<pe;B++){const Re=A[B],ze=Re.object,Ne=Re.geometry,qe=Re.group;let Ke=Re.material;Ke.allowOverride===!0&&J!==null&&(Ke=J),ze.layers.test(Z.layers)&&$u(ze,F,Z,Ne,Ke,qe)}}function $u(A,F,Z,J,B,pe){A.onBeforeRender(x,F,Z,J,B,pe),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(x,F,Z,J,A,pe),B.transparent===!0&&B.side===un&&B.forceSinglePass===!1?(B.side=Ut,B.needsUpdate=!0,x.renderBufferDirect(Z,F,J,B,A,pe),B.side=ti,B.needsUpdate=!0,x.renderBufferDirect(Z,F,J,B,A,pe),B.side=un):x.renderBufferDirect(Z,F,J,B,A,pe),A.onAfterRender(x,F,Z,J,B,pe)}function Ha(A,F,Z){F.isScene!==!0&&(F=it);const J=re.get(A),B=p.state.lights,pe=p.state.shadowsArray,Re=B.state.version,ze=ee.getParameters(A,B.state,pe,F,Z),Ne=ee.getProgramCacheKey(ze);let qe=J.programs;J.environment=A.isMeshStandardMaterial?F.environment:null,J.fog=F.fog,J.envMap=(A.isMeshStandardMaterial?w:X).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Be),qe=new Map,J.programs=qe);let Ke=qe.get(Ne);if(Ke!==void 0){if(J.currentProgram===Ke&&J.lightsStateVersion===Re)return ed(A,ze),Ke}else ze.uniforms=ee.getUniforms(A),A.onBeforeCompile(ze,x),Ke=ee.acquireProgram(ze,Ne),qe.set(Ne,Ke),J.uniforms=ze.uniforms;const Ge=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=Ae.uniform),ed(A,ze),J.needsLights=Dg(A),J.lightsStateVersion=Re,J.needsLights&&(Ge.ambientLightColor.value=B.state.ambient,Ge.lightProbe.value=B.state.probe,Ge.directionalLights.value=B.state.directional,Ge.directionalLightShadows.value=B.state.directionalShadow,Ge.spotLights.value=B.state.spot,Ge.spotLightShadows.value=B.state.spotShadow,Ge.rectAreaLights.value=B.state.rectArea,Ge.ltc_1.value=B.state.rectAreaLTC1,Ge.ltc_2.value=B.state.rectAreaLTC2,Ge.pointLights.value=B.state.point,Ge.pointLightShadows.value=B.state.pointShadow,Ge.hemisphereLights.value=B.state.hemi,Ge.directionalShadowMap.value=B.state.directionalShadowMap,Ge.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ge.spotShadowMap.value=B.state.spotShadowMap,Ge.spotLightMatrix.value=B.state.spotLightMatrix,Ge.spotLightMap.value=B.state.spotLightMap,Ge.pointShadowMap.value=B.state.pointShadowMap,Ge.pointShadowMatrix.value=B.state.pointShadowMatrix),J.currentProgram=Ke,J.uniformsList=null,Ke}function Qu(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Vo.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function ed(A,F){const Z=re.get(A);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Pg(A,F,Z,J,B){F.isScene!==!0&&(F=it),H.resetTextureUnits();const pe=F.fog,Re=J.isMeshStandardMaterial?F.environment:null,ze=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ci,Ne=(J.isMeshStandardMaterial?w:X).get(J.envMap||Re),qe=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ke=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,_t=!!Z.morphAttributes.color;let Ct=Ei;J.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ct=x.toneMapping);const Dt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dt=Dt!==void 0?Dt.length:0,Xe=re.get(J),en=p.state.lights;if(ae===!0&&(be===!0||A!==M)){const ln=A===M&&J.id===b;Ae.setState(J,A,ln)}let mt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==en.state.version||Xe.outputColorSpace!==ze||B.isBatchedMesh&&Xe.batching===!1||!B.isBatchedMesh&&Xe.batching===!0||B.isBatchedMesh&&Xe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Xe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Xe.instancing===!1||!B.isInstancedMesh&&Xe.instancing===!0||B.isSkinnedMesh&&Xe.skinning===!1||!B.isSkinnedMesh&&Xe.skinning===!0||B.isInstancedMesh&&Xe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Xe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Xe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Xe.instancingMorph===!1&&B.morphTexture!==null||Xe.envMap!==Ne||J.fog===!0&&Xe.fog!==pe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ae.numPlanes||Xe.numIntersection!==Ae.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ke||Xe.morphTargets!==Ge||Xe.morphNormals!==rt||Xe.morphColors!==_t||Xe.toneMapping!==Ct||Xe.morphTargetsCount!==dt)&&(mt=!0):(mt=!0,Xe.__version=J.version);let Xn=Xe.currentProgram;mt===!0&&(Xn=Ha(J,F,B));let Hs=!1,wn=!1,Ir=!1;const wt=Xn.getUniforms(),Ln=Xe.uniforms;if($.useProgram(Xn.program)&&(Hs=!0,wn=!0,Ir=!0),J.id!==b&&(b=J.id,wn=!0),Hs||M!==A){$.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),g0(he),v0(he),wt.setValue(C,"projectionMatrix",he)):wt.setValue(C,"projectionMatrix",A.projectionMatrix),wt.setValue(C,"viewMatrix",A.matrixWorldInverse);const gn=wt.map.cameraPosition;gn!==void 0&&gn.setValue(C,Ue.setFromMatrixPosition(A.matrixWorld)),ce.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,wn=!0,Ir=!0)}if(B.isSkinnedMesh){wt.setOptional(C,B,"bindMatrix"),wt.setOptional(C,B,"bindMatrixInverse");const ln=B.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),wt.setValue(C,"boneTexture",ln.boneTexture,H))}B.isBatchedMesh&&(wt.setOptional(C,B,"batchingTexture"),wt.setValue(C,"batchingTexture",B._matricesTexture,H),wt.setOptional(C,B,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",B._indirectTexture,H),wt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",B._colorsTexture,H));const Un=Z.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&we.update(B,Z,Xn),(wn||Xe.receiveShadow!==B.receiveShadow)&&(Xe.receiveShadow=B.receiveShadow,wt.setValue(C,"receiveShadow",B.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ln.envMap.value=Ne,Ln.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&F.environment!==null&&(Ln.envMapIntensity.value=F.environmentIntensity),wn&&(wt.setValue(C,"toneMappingExposure",x.toneMappingExposure),Xe.needsLights&&Ig(Ln,Ir),pe&&J.fog===!0&&q.refreshFogUniforms(Ln,pe),q.refreshMaterialUniforms(Ln,J,G,ne,p.state.transmissionRenderTarget[A.id]),Vo.upload(C,Qu(Xe),Ln,H)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vo.upload(C,Qu(Xe),Ln,H),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(C,"center",B.center),wt.setValue(C,"modelViewMatrix",B.modelViewMatrix),wt.setValue(C,"normalMatrix",B.normalMatrix),wt.setValue(C,"modelMatrix",B.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let gn=0,Sc=ln.length;gn<Sc;gn++){const is=ln[gn];L.update(is,Xn),L.bind(is,Xn)}}return Xn}function Ig(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Dg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,F,Z){const J=re.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),re.get(A.texture).__webglTexture=F,re.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const Z=re.get(A);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0};const Lg=C.createFramebuffer();this.setRenderTarget=function(A,F=0,Z=0){I=A,E=F,R=Z;let J=!0,B=null,pe=!1,Re=!1;if(A){const Ne=re.get(A);if(Ne.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(C.FRAMEBUFFER,null),J=!1;else if(Ne.__webglFramebuffer===void 0)H.setupRenderTarget(A);else if(Ne.__hasExternalTextures)H.rebindTextures(A,re.get(A.texture).__webglTexture,re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ge=A.depthTexture;if(Ne.__boundDepthTexture!==Ge){if(Ge!==null&&re.has(Ge)&&(A.width!==Ge.image.width||A.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Re=!0);const Ke=re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ke[F])?B=Ke[F][Z]:B=Ke[F],pe=!0):A.samples>0&&H.useMultisampledRTT(A)===!1?B=re.get(A).__webglMultisampledFramebuffer:Array.isArray(Ke)?B=Ke[Z]:B=Ke,D.copy(A.viewport),N.copy(A.scissor),z=A.scissorTest}else D.copy(ye).multiplyScalar(G).floor(),N.copy(Ie).multiplyScalar(G).floor(),z=ge;if(Z!==0&&(B=Lg),$.bindFramebuffer(C.FRAMEBUFFER,B)&&J&&$.drawBuffers(A,B),$.viewport(D),$.scissor(N),$.setScissorTest(z),pe){const Ne=re.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ne.__webglTexture,Z)}else if(Re){const Ne=re.get(A.texture),qe=F;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,Z,qe)}else if(A!==null&&Z!==0){const Ne=re.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,Z)}b=-1},this.readRenderTargetPixels=function(A,F,Z,J,B,pe,Re,ze=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){$.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const qe=A.textures[ze],Ke=qe.format,Ge=qe.type;if(!ce.textureFormatReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-J&&Z>=0&&Z<=A.height-B&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze),C.readPixels(F,Z,J,B,Me.convert(Ke),Me.convert(Ge),pe))}finally{const qe=I!==null?re.get(I).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,F,Z,J,B,pe,Re,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(F>=0&&F<=A.width-J&&Z>=0&&Z<=A.height-B){$.bindFramebuffer(C.FRAMEBUFFER,Ne);const qe=A.textures[ze],Ke=qe.format,Ge=qe.type;if(!ce.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.bufferData(C.PIXEL_PACK_BUFFER,pe.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ze),C.readPixels(F,Z,J,B,Me.convert(Ke),Me.convert(Ge),0);const _t=I!==null?re.get(I).__webglFramebuffer:null;$.bindFramebuffer(C.FRAMEBUFFER,_t);const Ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await m0(C,Ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pe),C.deleteBuffer(rt),C.deleteSync(Ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Z=0){const J=Math.pow(2,-Z),B=Math.floor(A.image.width*J),pe=Math.floor(A.image.height*J),Re=F!==null?F.x:0,ze=F!==null?F.y:0;H.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,Re,ze,B,pe),$.unbindTexture()};const Ug=C.createFramebuffer(),Ng=C.createFramebuffer();this.copyTextureToTexture=function(A,F,Z=null,J=null,B=0,pe=null){pe===null&&(B!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=B,B=0):pe=0);let Re,ze,Ne,qe,Ke,Ge,rt,_t,Ct;const Dt=A.isCompressedTexture?A.mipmaps[pe]:A.image;if(Z!==null)Re=Z.max.x-Z.min.x,ze=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,Ke=Z.min.y,Ge=Z.isBox3?Z.min.z:0;else{const Un=Math.pow(2,-B);Re=Math.floor(Dt.width*Un),ze=Math.floor(Dt.height*Un),A.isDataArrayTexture?Ne=Dt.depth:A.isData3DTexture?Ne=Math.floor(Dt.depth*Un):Ne=1,qe=0,Ke=0,Ge=0}J!==null?(rt=J.x,_t=J.y,Ct=J.z):(rt=0,_t=0,Ct=0);const dt=Me.convert(F.format),Xe=Me.convert(F.type);let en;F.isData3DTexture?(H.setTexture3D(F,0),en=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(H.setTexture2DArray(F,0),en=C.TEXTURE_2D_ARRAY):(H.setTexture2D(F,0),en=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=C.getParameter(C.UNPACK_ROW_LENGTH),Xn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Hs=C.getParameter(C.UNPACK_SKIP_PIXELS),wn=C.getParameter(C.UNPACK_SKIP_ROWS),Ir=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Dt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Dt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ge);const wt=A.isDataArrayTexture||A.isData3DTexture,Ln=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const Un=re.get(A),ln=re.get(F),gn=re.get(Un.__renderTarget),Sc=re.get(ln.__renderTarget);$.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,Sc.__webglFramebuffer);for(let is=0;is<Ne;is++)wt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,re.get(A).__webglTexture,B,Ge+is),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,re.get(F).__webglTexture,pe,Ct+is)),C.blitFramebuffer(qe,Ke,Re,ze,rt,_t,Re,ze,C.DEPTH_BUFFER_BIT,C.NEAREST);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||A.isRenderTargetTexture||re.has(A)){const Un=re.get(A),ln=re.get(F);$.bindFramebuffer(C.READ_FRAMEBUFFER,Ug),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ng);for(let gn=0;gn<Ne;gn++)wt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Un.__webglTexture,B,Ge+gn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Un.__webglTexture,B),Ln?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ln.__webglTexture,pe,Ct+gn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ln.__webglTexture,pe),B!==0?C.blitFramebuffer(qe,Ke,Re,ze,rt,_t,Re,ze,C.COLOR_BUFFER_BIT,C.NEAREST):Ln?C.copyTexSubImage3D(en,pe,rt,_t,Ct+gn,qe,Ke,Re,ze):C.copyTexSubImage2D(en,pe,rt,_t,qe,Ke,Re,ze);$.bindFramebuffer(C.READ_FRAMEBUFFER,null),$.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Ln?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(en,pe,rt,_t,Ct,Re,ze,Ne,dt,Xe,Dt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(en,pe,rt,_t,Ct,Re,ze,Ne,dt,Dt.data):C.texSubImage3D(en,pe,rt,_t,Ct,Re,ze,Ne,dt,Xe,Dt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,pe,rt,_t,Re,ze,dt,Xe,Dt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,pe,rt,_t,Dt.width,Dt.height,dt,Dt.data):C.texSubImage2D(C.TEXTURE_2D,pe,rt,_t,Re,ze,dt,Xe,Dt);C.pixelStorei(C.UNPACK_ROW_LENGTH,mt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Xn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Hs),C.pixelStorei(C.UNPACK_SKIP_ROWS,wn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ir),pe===0&&F.generateMipmaps&&C.generateMipmap(en),$.unbindTexture()},this.copyTextureToTexture3D=function(A,F,Z=null,J=null,B=0){return pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,F,Z,J,B)},this.initRenderTarget=function(A){re.get(A).__webglFramebuffer===void 0&&H.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?H.setTextureCube(A,0):A.isData3DTexture?H.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?H.setTexture2DArray(A,0):H.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,$.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const Ew=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Op,AddEquation:Hi,AddOperation:Dp,AdditiveAnimationBlendMode:du,AdditiveBlending:Dh,AgXToneMapping:$o,AlphaFormat:lu,AlwaysCompare:jp,AlwaysDepth:la,AlwaysStencilFunc:Oh,AmbientLight:Vm,AnimationAction:jm,AnimationClip:Ea,AnimationLoader:H_,AnimationMixer:gx,AnimationObjectGroup:px,AnimationUtils:B_,ArcCurve:fm,ArrayCamera:qm,ArrowHelper:Fx,AttachedBindMode:Nh,Audio:Km,AudioAnalyser:sx,AudioContext:Ou,AudioListener:tx,AudioLoader:$_,AxesHelper:Bx,BackSide:Ut,BasicDepthPacking:Bs,BasicShadowMap:mv,BatchedMesh:om,Bone:Mu,BooleanKeyframeTrack:zs,Box2:wx,Box3:Vt,Box3Helper:Nx,BoxGeometry:Qi,BoxHelper:Ux,BufferAttribute:pt,BufferGeometry:Je,BufferGeometryLoader:Ym,ByteType:ru,Cache:wi,Camera:Zl,CameraHelper:Lx,CanvasTexture:um,CapsuleGeometry:tc,CatmullRomCurve3:Cl,CineonToneMapping:Np,CircleGeometry:nc,ClampToEdgeWrapping:kn,Clock:Zm,Color:_e,ColorKeyframeTrack:Lu,ColorManagement:ot,CompressedArrayTexture:a_,CompressedCubeTexture:o_,CompressedTexture:ec,CompressedTextureLoader:G_,ConeGeometry:Ar,ConstantAlphaFactor:Rp,ConstantColorFactor:Ap,Controls:eg,CubeCamera:_u,CubeReflectionMapping:Ai,CubeRefractionMapping:qi,CubeTexture:La,CubeTextureLoader:W_,CubeUVReflectionMapping:Er,CubicBezierCurve:wu,CubicBezierCurve3:pm,CubicInterpolant:Lm,CullFaceBack:Ih,CullFaceFront:dp,CullFaceFrontBack:pv,CullFaceNone:up,Curve:ni,CurvePath:gm,CustomBlending:fp,CustomToneMapping:Fp,CylinderGeometry:Ii,Cylindrical:bx,Data3DTexture:Yl,DataArrayTexture:Xl,DataTexture:ci,DataTextureLoader:X_,DataUtils:D0,DecrementStencilOp:Rv,DecrementWrapStencilOp:Iv,DefaultLoadingManager:Vs,DepthFormat:vr,DepthStencilFormat:Ls,DepthTexture:Ua,DetachedBindMode:zp,DirectionalLight:km,DirectionalLightHelper:Dx,DiscreteInterpolant:Um,DodecahedronGeometry:ic,DoubleSide:un,DstAlphaFactor:Sp,DstColorFactor:wp,DynamicCopyUsage:Yv,DynamicDrawUsage:kv,DynamicReadUsage:Gv,EdgesGeometry:dm,EllipseCurve:sc,EqualCompare:qp,EqualDepth:Zo,EqualStencilFunc:Nv,EquirectangularReflectionMapping:ca,EquirectangularRefractionMapping:ha,Euler:tn,EventDispatcher:Dn,ExtrudeGeometry:Na,FileLoader:Ri,Float16BufferAttribute:z0,Float32BufferAttribute:Le,FloatType:Mn,Fog:Jl,FogExp2:Kl,FramebufferTexture:r_,FrontSide:ti,Frustum:Tr,FrustumArray:Ql,GLBufferAttribute:Mx,GLSL1:Zv,GLSL3:Fh,GreaterCompare:Zp,GreaterDepth:Jo,GreaterEqualCompare:Jp,GreaterEqualDepth:Ko,GreaterEqualStencilFunc:zv,GreaterStencilFunc:Fv,GridHelper:Px,Group:ur,HalfFloatType:Fs,HemisphereLight:Fm,HemisphereLightHelper:Rx,IcosahedronGeometry:rc,ImageBitmapLoader:j_,ImageLoader:Ta,ImageUtils:em,IncrementStencilOp:Cv,IncrementWrapStencilOp:Pv,InstancedBufferAttribute:Zi,InstancedBufferGeometry:Xm,InstancedInterleavedBuffer:yx,InstancedMesh:_a,Int16BufferAttribute:F0,Int32BufferAttribute:B0,Int8BufferAttribute:U0,IntType:Bl,InterleavedBuffer:jl,InterleavedBufferAttribute:Us,Interpolant:Ba,InterpolateDiscrete:da,InterpolateLinear:El,InterpolateSmooth:zo,InterpolationSamplingMode:jv,InterpolationSamplingType:Jv,InvertStencilOp:Dv,KeepStencilOp:xs,KeyframeTrack:Gn,LOD:rm,LatheGeometry:ac,Layers:ql,LessCompare:Yp,LessDepth:qo,LessEqualCompare:fu,LessEqualDepth:Ps,LessEqualStencilFunc:Ov,LessStencilFunc:Uv,Light:ts,LightProbe:Wm,Line:Ki,Line3:$m,LineBasicMaterial:mn,LineCurve:Eu,LineCurve3:mm,LineDashedMaterial:Pm,LineLoop:lm,LineSegments:di,LinearFilter:It,LinearInterpolant:Du,LinearMipMapLinearFilter:xv,LinearMipMapNearestFilter:_v,LinearMipmapLinearFilter:$n,LinearMipmapNearestFilter:Jr,LinearSRGBColorSpace:Ci,LinearToneMapping:Lp,LinearTransfer:pa,Loader:bn,LoaderUtils:Hh,LoadingManager:Uu,LoopOnce:kp,LoopPingPong:Hp,LoopRepeat:Vp,MOUSE:As,Material:Qt,MaterialLoader:fc,MathUtils:Bn,Matrix2:zu,Matrix3:et,Matrix4:Fe,MaxEquation:vp,Mesh:Tt,MeshBasicMaterial:ui,MeshDepthMaterial:Ru,MeshDistanceMaterial:Pu,MeshLambertMaterial:Cm,MeshMatcapMaterial:Rm,MeshNormalMaterial:Am,MeshPhongMaterial:Em,MeshPhysicalMaterial:wm,MeshStandardMaterial:Sa,MeshToonMaterial:Tm,MinEquation:gp,MirroredRepeatWrapping:ua,MixOperation:Ip,MultiplyBlending:Uh,MultiplyOperation:Ia,NearestFilter:nn,NearestMipMapLinearFilter:vv,NearestMipMapNearestFilter:gv,NearestMipmapLinearFilter:cr,NearestMipmapNearestFilter:su,NeutralToneMapping:Bp,NeverCompare:Xp,NeverDepth:Yo,NeverStencilFunc:Lv,NoBlending:An,NoColorSpace:jn,NoToneMapping:Ei,NormalAnimationBlendMode:Wl,NormalBlending:Cs,NotEqualCompare:Kp,NotEqualDepth:jo,NotEqualStencilFunc:Bv,NumberKeyframeTrack:ba,Object3D:ht,ObjectLoader:K_,ObjectSpaceNormalMap:Wp,OctahedronGeometry:Oa,OneFactor:xp,OneMinusConstantAlphaFactor:Pp,OneMinusConstantColorFactor:Cp,OneMinusDstAlphaFactor:bp,OneMinusDstColorFactor:Ep,OneMinusSrcAlphaFactor:Xo,OneMinusSrcColorFactor:Mp,OrthographicCamera:Cr,PCFShadowMap:iu,PCFSoftShadowMap:Kr,PMREMGenerator:Yh,Path:Pl,PerspectiveCamera:zt,Plane:li,PlaneGeometry:Ji,PlaneHelper:Ox,PointLight:zm,PointLightHelper:Ax,Points:cm,PointsMaterial:Su,PolarGridHelper:Ix,PolyhedronGeometry:es,PositionalAudio:ix,PropertyBinding:ut,PropertyMixer:Jm,QuadraticBezierCurve:Tu,QuadraticBezierCurve3:Au,Quaternion:Xt,QuaternionKeyframeTrack:za,QuaternionLinearInterpolant:Nm,RED_GREEN_RGTC2_Format:bl,RED_RGTC1_Format:uu,REVISION:Pa,RGBADepthPacking:Gp,RGBAFormat:fn,RGBAIntegerFormat:Gl,RGBA_ASTC_10x10_Format:vl,RGBA_ASTC_10x5_Format:pl,RGBA_ASTC_10x6_Format:ml,RGBA_ASTC_10x8_Format:gl,RGBA_ASTC_12x10_Format:_l,RGBA_ASTC_12x12_Format:xl,RGBA_ASTC_4x4_Format:al,RGBA_ASTC_5x4_Format:ol,RGBA_ASTC_5x5_Format:ll,RGBA_ASTC_6x5_Format:cl,RGBA_ASTC_6x6_Format:hl,RGBA_ASTC_8x5_Format:ul,RGBA_ASTC_8x6_Format:dl,RGBA_ASTC_8x8_Format:fl,RGBA_BPTC_Format:ta,RGBA_ETC2_EAC_Format:rl,RGBA_PVRTC_2BPPV1_Format:nl,RGBA_PVRTC_4BPPV1_Format:tl,RGBA_S3TC_DXT1_Format:$r,RGBA_S3TC_DXT3_Format:Qr,RGBA_S3TC_DXT5_Format:ea,RGBDepthPacking:wv,RGBFormat:cu,RGBIntegerFormat:yv,RGB_BPTC_SIGNED_Format:yl,RGB_BPTC_UNSIGNED_Format:Ml,RGB_ETC1_Format:il,RGB_ETC2_Format:sl,RGB_PVRTC_2BPPV1_Format:el,RGB_PVRTC_4BPPV1_Format:Qo,RGB_S3TC_DXT1_Format:jr,RGDepthPacking:Ev,RGFormat:hu,RGIntegerFormat:Hl,RawShaderMaterial:bm,Ray:Pi,Raycaster:Sx,RectAreaLight:Hm,RedFormat:Vl,RedIntegerFormat:Da,ReinhardToneMapping:Up,RenderTarget:mu,RenderTarget3D:vx,RepeatWrapping:Is,ReplaceStencilOp:Av,ReverseSubtractEquation:mp,RingGeometry:oc,SIGNED_RED_GREEN_RGTC2_Format:wl,SIGNED_RED_RGTC1_Format:Sl,SRGBColorSpace:gt,SRGBTransfer:xt,Scene:Mr,ShaderChunk:Ye,ShaderLib:zn,ShaderMaterial:$t,ShadowMaterial:Sm,Shape:Xi,ShapeGeometry:lc,ShapePath:zx,ShapeUtils:Qn,ShortType:au,Skeleton:$l,SkeletonHelper:Tx,SkinnedMesh:am,Source:Gi,Sphere:Ht,SphereGeometry:Fa,Spherical:Wh,SphericalHarmonics3:Gm,SplineCurve:Cu,SpotLight:Bm,SpotLightHelper:Ex,Sprite:sm,SpriteMaterial:yu,SrcAlphaFactor:Wo,SrcAlphaSaturateFactor:Tp,SrcColorFactor:yp,StaticCopyUsage:Xv,StaticDrawUsage:ma,StaticReadUsage:Hv,StereoCamera:Q_,StreamCopyUsage:qv,StreamDrawUsage:Vv,StreamReadUsage:Wv,StringKeyframeTrack:ks,SubtractEquation:pp,SubtractiveBlending:Lh,TOUCH:Ss,TangentSpaceNormalMap:$i,TetrahedronGeometry:cc,Texture:At,TextureLoader:Om,TextureUtils:Wx,TimestampQuery:Kv,TorusGeometry:hc,TorusKnotGeometry:uc,Triangle:yn,TriangleFanDrawMode:bv,TriangleStripDrawMode:Sv,TrianglesDrawMode:Mv,TubeGeometry:dc,UVMapping:Fl,Uint16BufferAttribute:gu,Uint32BufferAttribute:vu,Uint8BufferAttribute:N0,Uint8ClampedBufferAttribute:O0,Uniform:Mt,UniformsGroup:xx,UniformsLib:ve,UniformsUtils:yr,UnsignedByteType:sn,UnsignedInt248Type:Ds,UnsignedInt5999Type:ou,UnsignedIntType:hi,UnsignedShort4444Type:zl,UnsignedShort5551Type:kl,UnsignedShortType:gr,VSMShadowMap:oi,Vector2:Q,Vector3:T,Vector4:tt,VectorKeyframeTrack:wa,VideoFrameTexture:s_,VideoTexture:hm,WebGL3DRenderTarget:S0,WebGLArrayRenderTarget:M0,WebGLCoordinateSystem:Vn,WebGLCubeRenderTarget:xu,WebGLRenderTarget:jt,WebGLRenderer:og,WebGLUtils:ag,WebGPUCoordinateSystem:ga,WebXRController:ko,WireframeGeometry:Mm,WrapAroundEnding:fa,ZeroCurvatureEnding:bs,ZeroFactor:_p,ZeroSlopeEnding:ws,ZeroStencilOp:Tv,createCanvasElement:Qp},Symbol.toStringTag,{value:"Module"})),Vf=Symbol(),Tw=i=>typeof i?.subscribe=="function",lg=(i,e,t)=>{const n=i().map(a=>Tw(a)?Go(a):Vf),s=ct(()=>i().map((a,o)=>n[o]===Vf?a:n[o].current)),r=()=>{U(s);let a;return Ll(()=>{a=e(U(s))}),a};t?Kt(r):Bt(r)},Aw=(i,e)=>lg(i,e,!1),Cw=(i,e)=>lg(i,e,!0),Rw=Object.assign(Aw,{pre:Cw}),Jn=(i,e)=>i?.[`is${e}`]===!0,Pw=typeof window<"u",Mi=(i,e)=>{const t=nu(i,r=>r);let n;const s=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});wr(()=>{s(),n&&n()})},Jt=i=>{const e=oa(i),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const s=n(t.current);t.current=s,e.set(s)},current:i};return t},Iw=i=>({subscribe:i.subscribe,get current(){return i.current}}),cg=(i,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let s=0;s<t.length;s+=1)i=i[t[s]];return{target:i,key:n}}else return{target:i,key:e}},Dw=i=>{const{dom:e,canvas:t}=i,n=Jt({width:e.offsetWidth,height:e.offsetHeight});op(()=>{const r=new ResizeObserver(()=>{const{offsetWidth:a,offsetHeight:o}=e;(n.current.width!==a||n.current.height!==o)&&n.set({width:a,height:o})});return r.observe(e),()=>{r.disconnect()}});const s={dom:e,canvas:t,size:Iw(n)};return Hn("threlte-dom-context",s),s},Vu=()=>{const i=Rn("threlte-dom-context");if(!i)throw new Error("useDOM can only be used in a child component to <Canvas>.");return i};function Lw(i){return{all:i=i||new Map,on:function(e,t){var n=i.get(e);n?n.push(t):i.set(e,[t])},off:function(e,t){var n=i.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):i.set(e,[]))},emit:function(e,t){var n=i.get(e);n&&n.slice().map(function(s){s(t)}),(n=i.get("*"))&&n.slice().map(function(s){s(e,t)})}}}class Vi{allVertices={};isolatedVertices={};connectedVertices={};sortedConnectedValues=[];needsSort=!1;emitter=Lw();emit=this.emitter.emit.bind(this.emitter);on=this.emitter.on.bind(this.emitter);off=this.emitter.off.bind(this.emitter);get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}getKey=e=>typeof e=="object"?e.key:e;add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let s=this.allVertices[e];s?s.value===void 0&&(s.value=t):(s={value:t,previous:new Set,next:new Set},this.allVertices[e]=s);const r=s.next.size>0||s.previous.size>0;if(!n?.after&&!n?.before&&!r){this.isolatedVertices[e]=s,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=s;if(n?.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{s.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n?.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{s.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const s=this.connectedVertices[t];s&&(s.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),s.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,s)=>{t.push(e(n,s))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const s=this.isolatedVertices[n];s.value!==void 0&&e(s.value,t++)})}getValueByKey(e){return this.allVertices[e]?.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){const e=new Map,t=[],n=[],s=Reflect.ownKeys(this.connectedVertices).filter(a=>this.connectedVertices[a].value!==void 0);for(s.forEach(a=>{e.set(a,0)}),s.forEach(a=>{this.connectedVertices[a].next.forEach(l=>{this.connectedVertices[l]&&e.set(l,(e.get(l)||0)+1)})}),e.forEach((a,o)=>{a===0&&t.push(o)});t.length>0;){const a=t.shift();n.push(a);const o=s.find(l=>l===a);o&&this.connectedVertices[o]?.next.forEach(l=>{const c=(e.get(l)||0)-1;e.set(l,c),c===0&&t.push(l)})}if(n.length!==s.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=a=>a!==void 0;this.sortedConnectedValues=n.map(a=>this.connectedVertices[a].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class Uw{key;stage;callback;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}constructor(e,t,n){this.stage=e,this.key=t,this.callback=n}run(e){this.runTask&&this.callback(e)}}class Nw extends Vi{key;scheduler;runTask=!0;stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}callback=(e,t)=>t();constructor(e,t,n){super(),this.scheduler=e,this.key=t,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}createTask(e,t,n){const s=new Uw(this,e,t);return this.add(e,s,n),s}getTask(e){return this.getValueByKey(e)}removeTask=this.remove.bind(this);run(e){this.runTask&&this.callback(e,t=>{this.forEachNode(n=>{n.run(t??e)})})}runWithTiming(e){if(!this.runTask)return{};const t={};return this.callback(e,n=>{this.forEachNode(s=>{const r=performance.now();s.run(n??e);const a=performance.now()-r;t[s.key]=a})}),t}getSchedule(){return this.mapNodes(e=>e.key.toString())}}class Ow extends Vi{lastTime=performance.now();clampDeltaTo=.1;get stages(){return this.sortedVertices}constructor(e){super(),e?.clampDeltaTo&&(this.clampDeltaTo=e.clampDeltaTo),this.run=this.run.bind(this)}createStage(e,t){const n=new Nw(this,e,t?.callback);return this.add(e,n,{after:t?.after,before:t?.before}),n}getStage(e){return this.getValueByKey(e)}removeStage=this.remove.bind(this);run(e){const t=e-this.lastTime;this.forEachNode(n=>{n.run(Math.min(t/1e3,this.clampDeltaTo))}),this.lastTime=e}runWithTiming(e){const t=e-this.lastTime,n={},s=performance.now();return this.forEachNode(r=>{const a=performance.now(),o=r.runWithTiming(Math.min(t/1e3,this.clampDeltaTo)),l=performance.now()-a;n[r.key.toString()]={duration:l,tasks:o}}),{total:performance.now()-s,stages:n}}getSchedule(e={tasks:!0}){return{stages:this.mapNodes(t=>{if(t===void 0)throw new Error("Stage not found");return{key:t.key.toString(),tasks:e.tasks?t.getSchedule():void 0}})}}dispose(){this.clear()}}const Fw=i=>{const e=new Ow,t=e.createStage(Symbol("threlte-main-stage")),n={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{n.shouldAdvance=!0},autoRender:Jt(i.autoRender??!0),renderMode:Jt(i.renderMode??"on-demand"),invalidate(){n.frameInvalidated=!0},mainStage:t,shouldRender:()=>n.renderMode.current==="always"||n.renderMode.current==="on-demand"&&(n.frameInvalidated||n.autoInvalidations.size>0)||n.renderMode.current==="manual"&&n.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(s,r){n.shouldRender()&&r()}}),resetFrameInvalidation(){n.frameInvalidated=!1,n.shouldAdvance=!1}};return Bt(()=>{n.autoRender.set(i.autoRender??!0)}),Bt(()=>{n.renderMode.set(i.renderMode??"on-demand")}),wr(()=>{n.scheduler.dispose()}),Hn("threlte-scheduler-context",n),n},mc=()=>{const i=Rn("threlte-scheduler-context");if(!i)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return i},Bw=()=>{const{size:i}=Vu(),{invalidate:e}=mc(),t=new zt(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const n=Jt(t);Mi(i,r=>{if(n.current===t){const a=n.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}}),Mi(n,r=>{r===void 0&&n.set(t)});const s={camera:n};return Hn("threlte-camera-context",s),s},hg=()=>{const i=Rn("threlte-camera-context");if(!i)throw new Error("useCamera can only be used in a child component to <Canvas>.");return i},zw=()=>{const i={removeObjectFromDisposal:e=>{i.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=i.disposableObjects.get(e);t?i.disposableObjects.set(e,t+1):i.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=i.disposableObjects.get(e);t&&t>0&&(i.disposableObjects.set(e,t-1),t-1<=0&&(i.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await sp(),!(!i.shouldDispose&&!e)&&(i.disposableObjects.forEach((t,n)=>{(t===0||e)&&(n?.dispose?.(),i.disposableObjects.delete(n))}),i.shouldDispose=!1)}};return wr(()=>{i.dispose(!0)}),Hn("threlte-disposal-context",i),i},ug=()=>{const i=Rn("threlte-disposal-context");if(!i)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return i},dg=Symbol("threlte-parent-context"),fg=i=>{const e=Jt(i);return Hn(dg,e),e},pg=()=>Rn(dg),Il=Symbol("threlte-parent-object3d-context"),kw=i=>{const e=lp(i);return Hn(Il,e),e},Vw=i=>{const e=Rn(Il),t=oa(i),n=nu([t,e],([s,r])=>s??r);return Hn(Il,n),t},Hw=()=>Rn(Il);function ka(i,e,t){if(!Pw)return{task:void 0,start:()=>{},stop:()=>{},started:lp(!1)};let n,s,r;Vi.isKey(i)?(n=i,s=e,r=t):(n=Symbol("useTask"),s=i,r=e);const a=mc();let o=a.mainStage;if(r){if(r.stage)if(Vi.isValue(r.stage))o=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);o=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const f=r.after[d];if(Vi.isValue(f)){o=f.stage;break}}else Vi.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const f=r.before[d];if(Vi.isValue(f)){o=f.stage;break}}else Vi.isValue(r.before)&&(o=r.before.stage)}const l=oa(!1),c=o.createTask(n,s,r),h=()=>{l.set(!0),(r?.autoInvalidate??!0)&&a.autoInvalidations.add(s),c.start()},u=()=>{l.set(!1),(r?.autoInvalidate??!0)&&a.autoInvalidations.delete(s),c.stop()};return r?.autoStart??!0?h():u(),wr(()=>{u(),o.removeTask(n)}),{task:c,start:h,stop:u,started:{subscribe:l.subscribe}}}const Gw=i=>{const e={scene:new Mr};return Hn("threlte-scene-context",e),e},mg=()=>{const i=Rn("threlte-scene-context");if(!i)throw new Error("useScene can only be used in a child component to <Canvas>.");return i},Ww=i=>{const{dispose:e}=ug(),{camera:t}=hg(),{scene:n}=mg(),{invalidate:s,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=mc(),{size:c,canvas:h}=Vu(),u=i.createRenderer?i.createRenderer(h):new og({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),d=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(n,t.current)}),f={renderer:u,colorManagementEnabled:Jt(i.colorManagementEnabled??!0),colorSpace:Jt(i.colorSpace??"srgb"),dpr:Jt(i.dpr??window.devicePixelRatio),shadows:Jt(i.shadows??Kr),toneMapping:Jt(i.toneMapping??$o),autoRenderTask:d};Hn("threlte-renderer-context",f),Mi([f.colorManagementEnabled],([m])=>{ot.enabled=m}),Mi([f.colorSpace],([m])=>{"outputColorSpace"in u&&(u.outputColorSpace=m)}),Mi([f.dpr],([m])=>{"setPixelRatio"in u&&u.setPixelRatio(m)});const{start:g,stop:v}=ka(()=>{!("xr"in u)||u.xr?.isPresenting||(u.setSize(c.current.width,c.current.height),s(),v())},{before:d,autoStart:!1,autoInvalidate:!1});return Mi([c],()=>{g()}),Mi([f.shadows],([m])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!m,m&&m!==!0?u.shadowMap.type=m:m===!0&&(u.shadowMap.type=Kr))}),Mi([f.toneMapping],([m])=>{"toneMapping"in u&&(u.toneMapping=m)}),Mi([a],([m])=>(m?f.autoRenderTask.start():f.autoRenderTask.stop(),()=>{f.autoRenderTask.stop()})),"setAnimationLoop"in f.renderer&&f.renderer.setAnimationLoop(p=>{e(),o.run(p),l()}),wr(()=>{if("dispose"in f.renderer){const m=f.renderer.dispose;m()}}),Kt(()=>{f.colorManagementEnabled.set(i.colorManagementEnabled??!0)}),Kt(()=>{f.colorSpace.set(i.colorSpace??"srgb")}),Kt(()=>{f.toneMapping.set(i.toneMapping??$o)}),Kt(()=>{f.shadows.set(i.shadows??Kr)}),Kt(()=>{f.dpr.set(i.dpr??window.devicePixelRatio)}),f},Xw=()=>{const i=Rn("threlte-renderer-context");if(!i)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return i},Yw=()=>{const i=Jt({});return Hn("threlte-user-context",i),i},qw=()=>{const i=Rn("threlte-user-context");if(!i)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return i},Zw=i=>{const{scene:e}=Gw();return{scene:e,...Dw(i),...fv(),...fg(e),...kw(e),...zw(),...Fw(i),...Bw(),...Ww(i),...Yw()}};function Kw(i,e){Pn(e,!0);let t=br(e,["$$slots","$$events","$$legacy","children"]);Zw(t);var n=Sn(),s=kt(n);ji(s,()=>e.children),yt(i,n),In()}var Jw=pn('<div class="svelte-clyidt"><canvas class="svelte-clyidt"><!></canvas></div>');function jw(i,e){let t=br(e,["$$slots","$$events","$$legacy","children"]),n=Ot(void 0),s=Ot(void 0);var r=Jw(),a=lt(r),o=lt(a);{var l=c=>{Kw(c,tu({get dom(){return U(s)},get canvas(){return U(n)}},()=>t,{children:(h,u)=>{var d=Sn(),f=kt(d);ji(f,()=>e.children??Ul),yt(h,d)},$$slots:{default:!0}}))};aa(o,c=>{U(n)&&U(s)&&c(l)})}at(a),Ch(a,c=>Ze(n,c),()=>U(n)),at(r),Ch(r,c=>Ze(s,c),()=>U(s)),yt(i,r)}const Pr=()=>{const i=mc(),e=Xw(),t=hg(),n=mg(),s=Vu();return{advance:i.advance,autoRender:i.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:i.invalidate,mainStage:i.mainStage,renderer:e.renderer,renderMode:i.renderMode,renderStage:i.renderStage,scheduler:i.scheduler,shadows:e.shadows,shouldRender:i.shouldRender,dom:s.dom,canvas:s.canvas,size:s.size,toneMapping:e.toneMapping,get scene(){return n.scene},set scene(a){n.scene=a}}},$w=i=>typeof i=="object"&&i!==null,Qw=(i,e)=>{const{invalidate:t}=Pr(),n=ct(i),s=ct(e),r=Go(pg()),a=Go(Hw()),o=fg(),l=Vw();Kt(()=>{o.set(U(n)),Jn(U(n),"Object3D")&&l.set(U(n)),t()}),Kt(()=>{t();const c=U(n);if(U(s)===void 0&&Jn(c,"Object3D"))return a.current?.add(c),()=>{t(),a.current?.remove(c)};if(U(s)===void 0&&$w(r.current)){const h=r.current;if(Jn(c,"Material")){const u=h.material;return h.material=c,()=>{t(),h.material=u}}else if(Jn(c,"BufferGeometry")){const u=h.geometry;return h.geometry=c,()=>{t(),h.geometry=u}}}if(U(s)===!1)return()=>{t()};if(typeof U(s)=="function"){const h=U(s)({ref:c,parent:r.current,parentObject3D:a.current});return()=>{t(),h?.()}}if(typeof U(s)=="string"){const{target:h,key:u}=cg(r.current,U(s));if(u in h){const d=h[u];return h[u]=c,()=>{t(),h[u]=d}}else return h[u]=c,()=>{t(),delete h[u]}}if(Jn(U(s),"Object3D")&&Jn(c,"Object3D"))return U(s).add(c),()=>{t(),U(s).remove(c)}})},yh=new Set,eE=(i,e,t)=>{const{invalidate:n,size:s,camera:r}=Pr(),a=ct(i),o=Go(s);Kt(()=>{if(!t())return;const l=U(a);return yh.add(l),r.set(l),n(),()=>{yh.delete(l),yh.size===0&&(r.set(void 0),n())}}),Kt(()=>{if(e())return;const{width:l,height:c}=o.current;Jn(U(a),"PerspectiveCamera")?U(a).aspect=l/c:Jn(U(a),"OrthographicCamera")&&(U(a).left=l/-2,U(a).right=l/2,U(a).top=c/2,U(a).bottom=c/-2),U(a).updateProjectionMatrix(),U(a).updateMatrixWorld(),n()})},Zh=Symbol("threlte-disposable-object-context"),tE=i=>typeof i?.dispose=="function",nE=i=>{const e=Rn(Zh),t=ct(()=>i()??e?.()??!0);Hn(Zh,()=>U(t))},iE=i=>{const e=ct(i),{disposableObjectMounted:t,disposableObjectUnmounted:n,removeObjectFromDisposal:s}=ug(),r=Rn(Zh),a=ct(()=>r?.()??!0);Bt(()=>{if(U(a))return t(U(e)),()=>n(U(e));s(U(e))})},sE=i=>i!==null&&typeof i=="object"&&"addEventListener"in i&&"removeEventListener"in i,rE=(i,e,t)=>{const n=ct(i);for(const s of e){const r=ct(()=>t[s]);s.startsWith("on")&&Kt(()=>{if(typeof U(r)!="function"||!sE(U(n)))return;const a=s.slice(2);return U(n).addEventListener(a,U(r)),()=>U(n).removeEventListener(a,U(r))})}};let Kh;const aE=i=>{Kh=i},oE=()=>{const i=Kh;return Kh=void 0,i},lE="threlte-plugin-context",cE=i=>{const e=Rn(lE);if(!e)return;const t=[],n=Object.values(e);if(n.length>0){const s=i();for(let r=0;r<n.length;r++){const a=n[r],o=a(s);o&&o.pluginProps&&t.push(...o.pluginProps)}}return{pluginsProps:t}},hE=new Set(["$$scope","$$slots","type","args","attach","instance"]),uE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),dE=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean"||typeof i>"u"||i===null,Hf=(i,e,t)=>!Array.isArray(t)&&typeof t=="number"&&typeof i[e]=="object"&&i[e]!==null&&typeof i[e]?.setScalar=="function"&&!i[e]?.isColor?(n,s,r)=>{n[s].setScalar(r)}:typeof i[e]?.set=="function"&&typeof i[e]=="object"&&i[e]!==null?Array.isArray(t)?(n,s,r)=>{n[s].set(...r)}:(n,s,r)=>{n[s].set(r)}:(n,s,r)=>{n[s]=r},fE=()=>{const{invalidate:i}=Pr(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(dE(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=cg(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const d=Hf(h,c,o);t.set(a,d),d(h,c,o)}}else Hf(h,c,o)(h,c,o);l||uE.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,l,c)=>{!hE.has(a)&&!l?.includes(a)&&n(r,a,o,c),i()}}},pE=i=>typeof i=="function"&&Function.prototype.toString.call(i).startsWith("class "),mE=(i,e)=>pE(i)?Array.isArray(e)?new i(...e):new i:i;function Mh(i,e){Pn(e,!0);let t=Pe(e,"is",19,oE),n=Pe(e,"manual",3,!1),s=Pe(e,"makeDefault",3,!1),r=Pe(e,"ref",15),a=br(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]);const o=ct(()=>mE(t(),e.args));Kt(()=>{r()!==U(o)&&r(U(o))});const l=cE(()=>({get ref(){return U(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return n()},get makeDefault(){return s()},get dispose(){return e.dispose},get props(){return a}})),c=Object.keys(a),{updateProp:h}=fE();c.forEach(f=>{const g=ct(()=>a[f]);Kt(()=>{h(U(o),f,U(g),l?.pluginsProps,n())})}),Qw(()=>U(o),()=>e.attach),Kt(()=>{(Jn(U(o),"PerspectiveCamera")||Jn(U(o),"OrthographicCamera"))&&eE(()=>U(o),()=>n(),()=>s())}),nE(()=>e.dispose),Kt(()=>{tE(U(o))&&iE(()=>U(o))}),rE(()=>U(o),c,a),Bt(()=>{U(o);let f;return Ll(()=>{f=e.oncreate?.(U(o))}),f});var u=Sn(),d=kt(u);ji(d,()=>e.children??Ul,()=>({ref:U(o)})),yt(i,u),In()}const gg={},gE=i=>{Object.assign(gg,i)},Et=new Proxy(Mh,{get(i,e){if(typeof e!="string")return Mh;const t=gg[e]||Ew[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return aE(t),Mh}});function vE(i,e,t){const n=qw();if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(s=>{if(i in s)return s;const r=typeof e=="function"?e():e;return s[i]=r,s}),n.current[i]):nu(n,s=>s[i])}const _s=i=>({subscribe:i.subscribe,get current(){return i.current}});let ra=0;const Hu=Jt(!1),gc=Jt(!1),Gu=Jt(void 0),Wu=Jt(0),Xu=Jt(0),vg=Jt([]),Yu=Jt(0),{onStart:_E,onLoad:xE,onError:yE}=Vs;Vs.onStart=(i,e,t)=>{_E?.(i,e,t),gc.set(!0),Gu.set(i),Wu.set(e),Xu.set(t);const n=(e-ra)/(t-ra);Yu.set(n),n===1&&Hu.set(!0)};Vs.onLoad=()=>{xE?.(),gc.set(!1)};Vs.onError=i=>{yE?.(i),vg.update(e=>[...e,i])};Vs.onProgress=(i,e,t)=>{e===t&&(ra=t),gc.set(!0),Gu.set(i),Wu.set(e),Xu.set(t);const n=(e-ra)/(t-ra)||1;Yu.set(n),n===1&&Hu.set(!0)};_s(gc),_s(Gu),_s(Wu),_s(Xu),_s(vg),_s(Yu),_s(Hu);new T;new T;new T;new Ht;new Fe;new Pi;new T;new T;new Fe;new T;new T;new ht;new T;new T;new T;new Q;const ME="Right",SE="Top",bE="Front",wE="Left",EE="Bottom",TE="Back";[ME,SE,bE,wE,EE,TE].map(i=>i.toLocaleLowerCase());new Vt;new T;ve.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Q(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};zn.line={uniforms:yr.merge([ve.common,ve.fog,ve.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new tt;new T;new T;new tt;new tt;new tt;new T;new Fe;new $m;new T;new Vt;new Ht;new tt;const Gf={type:"change"},qu={type:"start"},_g={type:"end"},Oo=new Pi,Wf=new li,AE=Math.cos(70*Bn.DEG2RAD),Gt=new T,_n=2*Math.PI,St={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6;let CE=class extends eg{constructor(e,t=null){super(e,t),this.state=St.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:As.ROTATE,MIDDLE:As.DOLLY,RIGHT:As.PAN},this.touches={ONE:Ss.ROTATE,TWO:Ss.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Xt,this._lastTargetPosition=new T,this._quat=new Xt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wh,this._sphericalDelta=new Wh,this._scale=1,this._panOffset=new T,this._rotateStart=new Q,this._rotateEnd=new Q,this._rotateDelta=new Q,this._panStart=new Q,this._panEnd=new Q,this._panDelta=new Q,this._dollyStart=new Q,this._dollyEnd=new Q,this._dollyDelta=new Q,this._dollyDirection=new T,this._mouse=new Q,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PE.bind(this),this._onPointerDown=RE.bind(this),this._onPointerUp=IE.bind(this),this._onContextMenu=BE.bind(this),this._onMouseWheel=UE.bind(this),this._onKeyDown=NE.bind(this),this._onTouchStart=OE.bind(this),this._onTouchMove=FE.bind(this),this._onMouseDown=DE.bind(this),this._onMouseMove=LE.bind(this),this._interceptControlDown=zE.bind(this),this._interceptControlUp=kE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gf),this.update(),this.state=St.NONE}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===St.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new T(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Oo.origin.copy(this.object.position),Oo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Oo.direction))<AE?this.object.lookAt(this.target):(Wf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Oo.intersectPlane(Wf,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(Gf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?_n/60*this.autoRotateSpeed*e:_n/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Gt.copy(s).sub(this.target);let r=Gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/t.clientHeight),this._rotateUp(_n*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Q,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function RE(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function PE(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function IE(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_g),this.state=St.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function DE(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case As.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=St.DOLLY;break;case As.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}break;case As.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=St.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=St.PAN}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(qu)}function LE(i){switch(this.state){case St.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case St.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case St.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function UE(i){this.enabled===!1||this.enableZoom===!1||this.state!==St.NONE||(i.preventDefault(),this.dispatchEvent(qu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_g))}function NE(i){this.enabled!==!1&&this._handleKeyDown(i)}function OE(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ss.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=St.TOUCH_ROTATE;break;case Ss.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=St.TOUCH_PAN;break;default:this.state=St.NONE}break;case 2:switch(this.touches.TWO){case Ss.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=St.TOUCH_DOLLY_PAN;break;case Ss.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=St.TOUCH_DOLLY_ROTATE;break;default:this.state=St.NONE}break;default:this.state=St.NONE}this.state!==St.NONE&&this.dispatchEvent(qu)}function FE(i){switch(this._trackPointer(i),this.state){case St.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case St.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case St.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case St.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=St.NONE}}function BE(i){this.enabled!==!1&&i.preventDefault()}function zE(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kE(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const VE=()=>vE("threlte-controls",{orbitControls:oa(void 0),trackballControls:oa(void 0)});function HE(i,e){Pn(e,!0);const t=()=>Rh(o,"$parent",n),[n,s]=ap();let r=Pe(e,"ref",15),a=br(e,["$$slots","$$events","$$legacy","ref","children"]);const o=pg(),{dom:l,invalidate:c}=Pr();if(!Jn(t(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const h=new CE(t(),l),{orbitControls:u}=VE(),{start:d,stop:f}=ka(()=>{h.update()},{autoStart:!1,autoInvalidate:!1});Kt(()=>{e.autoRotate||e.enableDamping?d():f()}),Kt(()=>{const g=v=>{c(),e.onchange?.(v)};return u.set(h),h.addEventListener("change",g),()=>{u.set(void 0),h.removeEventListener("change",g)}}),Et(i,tu({get is(){return h}},()=>a,{get ref(){return r()},set ref(g){r(g)},children:(g,v)=>{var m=Sn(),p=kt(m);ji(p,()=>e.children??Ul,()=>({ref:h})),yt(g,m)},$$slots:{default:!0}})),In(),s()}new Fe;new Fe;new Tt;`${Ye.logdepthbuf_pars_vertex}${Ye.fog_pars_vertex}${Ye.logdepthbuf_vertex}${Ye.fog_vertex}`;class vc extends Tt{constructor(){const e=vc.SkyShader,t=new $t({name:e.name,uniforms:yr.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Ut,depthWrite:!1});super(new Qi(1,1,1),t),this.isSky=!0}}vc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new T},up:{value:new T(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function GE(i,e){Pn(e,!0);let t=Pe(e,"scale",3,1e3),n=Pe(e,"turbidity",3,10),s=Pe(e,"rayleigh",3,3),r=Pe(e,"mieCoefficient",3,.005),a=Pe(e,"mieDirectionalG",3,.7),o=Pe(e,"elevation",3,2),l=Pe(e,"azimuth",3,180),c=Pe(e,"setEnvironment",3,!0),h=Pe(e,"cubeMapSize",3,128),u=Pe(e,"webGLRenderTargetOptions",19,()=>({})),d=Pe(e,"ref",15),f=br(e,["$$slots","$$events","$$legacy","scale","turbidity","rayleigh","mieCoefficient","mieDirectionalG","elevation","azimuth","setEnvironment","cubeMapSize","webGLRenderTargetOptions","ref","children"]);const g=new vc,v=new T,{uniforms:m}=g.material,{renderer:p,scene:y,invalidate:_}=Pr();let x=Ot(void 0),P;const E=()=>{Ze(x,new xu(h(),{type:Fs,generateMipmaps:!0,minFilter:$n,...u()}),!0),P=new _u(1,1.1,U(x))},R=y.environment;Kt(()=>{c()&&U(x)?(y.environment=U(x).texture,_()):c()||(y.environment=R,_())});const{start:I,stop:b}=ka(()=>{g.scale.setScalar(t()),m.turbidity.value=n(),m.rayleigh.value=s(),m.mieCoefficient.value=r(),m.mieDirectionalG.value=a();const M=Bn.degToRad(90-o()),D=Bn.degToRad(l());v.setFromSphericalCoords(1,M,D),m.sunPosition.value.copy(v),c()&&((!U(x)||!P)&&E(),P?.update(p,g)),_(),b()},{autoStart:!1,autoInvalidate:!1});Rw.pre(()=>[t(),n(),s(),r(),a(),o(),l()],()=>I()),wr(()=>{g.material.dispose(),y.environment=R;try{U(x)?.dispose()}catch(M){console.warn("Could not dispose renderTarget:",M)}}),Et(i,tu({get is(){return g}},()=>f,{get ref(){return d()},set ref(M){d(M)},children:(M,D)=>{var N=Sn(),z=kt(N);ji(z,()=>e.children??Ul,()=>({ref:g,sunPosition:v,renderTarget:U(x)})),yt(M,N)},$$slots:{default:!0}})),In()}`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;`${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;const WE=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,XE=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,YE=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,qE=YE,ZE=`
	${WE}
	${XE}
`;`${qE}${ZE}${Ye.tonemapping_fragment}${Ye.colorspace_fragment}`;new Vt;typeof window<"u"&&document.createElement("div");for(let i=0;i<256;i++)(i<16?"0":"")+i.toString(16);new Cr(-1,1,1,-1,0,1);class KE extends Je{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}new KE;var xg={exports:{}};xg.exports=_c;xg.exports.default=_c;function _c(i,e,t){t=t||2;var n=e&&e.length,s=n?e[0]*t:i.length,r=yg(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,d,f;if(n&&(r=eT(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(var g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Aa(r,a,t,o,l,f,0),a}function yg(i,e,t,n,s){var r,a;if(s===$h(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Xf(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Xf(r,i[r],i[r+1],a);return a&&xc(a,a.next)&&(Ra(a),a=a.next),a}function Os(i,e){if(!i)return i;e||(e=i);var t=i,n;do if(n=!1,!t.steiner&&(xc(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Ra(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Aa(i,e,t,n,s,r,a){if(i){!a&&r&&rT(i,n,s,r);for(var o=i,l,c;i.prev!==i.next;){if(l=i.prev,c=i.next,r?jE(i,n,s,r):JE(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Ra(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$E(Os(i),e,t),Aa(i,e,t,n,s,r,2)):a===2&&QE(i,e,t,n,s,r):Aa(Os(i),e,t,n,s,r,1);break}}}}function JE(i){var e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;for(var s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fr(s,o,r,l,a,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function jE(i,e,t,n){var s=i.prev,r=i,a=i.next;if(Pt(s,r,a)>=0)return!1;for(var o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=Jh(f,g,e,t,n),y=Jh(v,m,e,t,n),_=i.prevZ,x=i.nextZ;_&&_.z>=p&&x&&x.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&fr(o,h,l,u,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&fr(o,h,l,u,c,d,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&fr(o,h,l,u,c,d,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function $E(i,e,t){var n=i;do{var s=n.prev,r=n.next.next;!xc(s,r)&&Mg(s,n,n.next,r)&&Ca(s,r)&&Ca(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ra(n),Ra(n.next),n=i=r),n=n.next}while(n!==i);return Os(n)}function QE(i,e,t,n,s,r){var a=i;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&lT(a,o)){var l=Sg(a,o);a=Os(a,a.next),l=Os(l,l.next),Aa(a,e,t,n,s,r,0),Aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function eT(i,e,t,n){var s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=yg(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(oT(c));for(s.sort(tT),r=0;r<s.length;r++)t=nT(s[r],t);return t}function tT(i,e){return i.x-e.x}function nT(i,e){var t=iT(i,e);if(!t)return e;var n=Sg(t,i);return Os(n,n.next),Os(t,t.next)}function iT(i,e){var t=e,n=i.x,s=i.y,r=-1/0,a;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var o=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,d;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&fr(s<h?n:r,s,c,h,s<h?r:n,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(n-t.x),Ca(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&sT(a,t)))&&(a=t,u=d)),t=t.next;while(t!==l);return a}function sT(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function rT(i,e,t,n){var s=i;do s.z===0&&(s.z=Jh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,aT(s)}function aT(i){var e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Jh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function oT(i){var e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function fr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function lT(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cT(i,e)&&(Ca(i,e)&&Ca(e,i)&&hT(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||xc(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xc(i,e){return i.x===e.x&&i.y===e.y}function Mg(i,e,t,n){var s=Bo(Pt(i,e,t)),r=Bo(Pt(i,e,n)),a=Bo(Pt(t,n,i)),o=Bo(Pt(t,n,e));return!!(s!==r&&a!==o||s===0&&Fo(i,t,e)||r===0&&Fo(i,n,e)||a===0&&Fo(t,i,n)||o===0&&Fo(t,e,n))}function Fo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bo(i){return i>0?1:i<0?-1:0}function cT(i,e){var t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Mg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ca(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function hT(i,e){var t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sg(i,e){var t=new jh(i.i,i.x,i.y),n=new jh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xf(i,e,t,n){var s=new jh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ra(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}_c.deviation=function(i,e,t,n){var s=e&&e.length,r=s?e[0]*t:i.length,a=Math.abs($h(i,0,r,t));if(s)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:i.length;a-=Math.abs($h(i,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var d=n[o]*t,f=n[o+1]*t,g=n[o+2]*t;u+=Math.abs((i[d]-i[g])*(i[f+1]-i[d+1])-(i[d]-i[f])*(i[g+1]-i[d+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function $h(i,e,t,n){for(var s=0,r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}_c.flatten=function(i){for(var e=i[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,s=0;s<i.length;s++){for(var r=0;r<i[s].length;r++)for(var a=0;a<e;a++)t.vertices.push(i[s][r][a]);s>0&&(n+=i[s-1].length,t.holes.push(n))}return t};new Q;new Q;var Yf;(i=>{function e(s){let r=s.slice();return r.sort(i.POINT_COMPARATOR),i.makeHullPresorted(r)}i.makeHull=e;function t(s){if(s.length<=1)return s.slice();let r=[];for(let o=0;o<s.length;o++){const l=s[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=s.length-1;o>=0;o--){const l=s[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}i.makeHullPresorted=t;function n(s,r){return s.x<r.x?-1:s.x>r.x?1:s.y<r.y?-1:s.y>r.y?1:0}i.POINT_COMPARATOR=n})(Yf||(Yf={}));new ui;new T;new Fe;new Pi;new Ht;new Vt;new T;new T;class uT extends Tt{constructor(e,t={}){super(e),this.isWater=!0;const n=this,s=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new T(.70707,.70707,0),u=new _e(t.sunColor!==void 0?t.sunColor:16777215),d=new _e(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new T(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,v=t.side!==void 0?t.side:ti,m=t.fog!==void 0?t.fog:!1,p=new li,y=new T,_=new T,x=new T,P=new Fe,E=new T(0,0,-1),R=new tt,I=new T,b=new T,M=new tt,D=new Fe,N=new zt,z=new jt(s,r),W={name:"MirrorShader",uniforms:yr.merge([ve.fog,ve.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Fe},sunColor:{value:new _e(8355711)},sunDirection:{value:new T(.70707,.70707,0)},eye:{value:new T},waterColor:{value:new _e(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},j=new $t({name:W.name,uniforms:yr.clone(W.uniforms),vertexShader:W.vertexShader,fragmentShader:W.fragmentShader,lights:!0,side:v,fog:m});j.uniforms.mirrorSampler.value=z.texture,j.uniforms.textureMatrix.value=D,j.uniforms.alpha.value=o,j.uniforms.time.value=l,j.uniforms.normalSampler.value=c,j.uniforms.sunColor.value=u,j.uniforms.waterColor.value=d,j.uniforms.sunDirection.value=h,j.uniforms.distortionScale.value=g,j.uniforms.eye.value=f,n.material=j,n.onBeforeRender=function(k,ne,G){if(_.setFromMatrixPosition(n.matrixWorld),x.setFromMatrixPosition(G.matrixWorld),P.extractRotation(n.matrixWorld),y.set(0,0,1),y.applyMatrix4(P),I.subVectors(_,x),I.dot(y)>0)return;I.reflect(y).negate(),I.add(_),P.extractRotation(G.matrixWorld),E.set(0,0,-1),E.applyMatrix4(P),E.add(x),b.subVectors(_,E),b.reflect(y).negate(),b.add(_),N.position.copy(I),N.up.set(0,1,0),N.up.applyMatrix4(P),N.up.reflect(y),N.lookAt(b),N.far=G.far,N.updateMatrixWorld(),N.projectionMatrix.copy(G.projectionMatrix),D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(N.projectionMatrix),D.multiply(N.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(y,_),p.applyMatrix4(N.matrixWorldInverse),R.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const le=N.projectionMatrix;M.x=(Math.sign(R.x)+le.elements[8])/le.elements[0],M.y=(Math.sign(R.y)+le.elements[9])/le.elements[5],M.z=-1,M.w=(1+le.elements[10])/le.elements[14],R.multiplyScalar(2/R.dot(M)),le.elements[2]=R.x,le.elements[6]=R.y,le.elements[10]=R.z+1-a,le.elements[14]=R.w,f.setFromMatrixPosition(G.matrixWorld);const xe=k.getRenderTarget(),ye=k.xr.enabled,Ie=k.shadowMap.autoUpdate;n.visible=!1,k.xr.enabled=!1,k.shadowMap.autoUpdate=!1,k.setRenderTarget(z),k.state.buffers.depth.setMask(!0),k.autoClear===!1&&k.clear(),k.render(ne,N),n.visible=!0,k.xr.enabled=ye,k.shadowMap.autoUpdate=Ie,k.setRenderTarget(xe);const ge=G.viewport;ge!==void 0&&k.state.viewport(ge)}}}const dT={coordinates:[[[0,70],[12,71],[25,69],[38,65],[48,62],[58,58],[70,55],[82,50],[92,44],[102,38],[112,32],[122,28],[130,25],[135,18],[138,10],[140,2],[140,-15],[138,-22],[134,-30],[128,-36],[120,-42],[110,-50],[98,-55],[85,-60],[70,-63],[55,-65],[40,-65],[25,-64],[10,-63],[-5,-62],[-20,-61],[-40,-60],[-55,-58],[-70,-54],[-85,-50],[-98,-45],[-110,-40],[-118,-32],[-124,-22],[-128,-12],[-130,0],[-128,12],[-124,22],[-118,32],[-110,40],[-100,45],[-88,50],[-75,55],[-62,60],[-48,63],[-40,65],[-28,67],[-14,69],[0,70]]]},fT={geometry:dT};function Dl(i){return function(){let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const qf=new Map;function pT(i=.035,e=5){const t=`${i}-${e}`;let n=qf.get(t);return n||(n=new Ii(i*.3,i,1,e,1,!1),n.rotateZ(-Math.PI/2),n.translate(.5,0,0),qf.set(t,n)),n}const Zf=new Map;function mT(i="fir"){const e=Zf.get(i);if(e)return e;const t=document.createElement("canvas");t.width=512,t.height=1024;const n=t.getContext("2d"),s=t.width,r=t.height;let a=i==="fir"?12345:54321;const o=()=>(a=a*1103515245+12345&2147483647,a/2147483647);if(i==="fir"){n.fillStyle="#1a0f08",n.fillRect(0,0,s,r);for(let u=0;u<25;u++){const d=o()*s;n.strokeStyle=`rgba(0, 0, 0, ${.6+o()*.4})`,n.lineWidth=1+o()*3,n.beginPath(),n.moveTo(d,0);let f=d;for(let g=0;g<r;g+=8)f+=(o()-.5)*4,n.lineTo(f,g);n.stroke()}for(let u=0;u<80;u++){const d=o()*s,f=o()*r,g=15+o()*40,v=30+o()*120,m=25+o()*35;n.fillStyle=`rgb(${m}, ${m*.6}, ${m*.35})`,n.fillRect(d,f,g,v),n.fillStyle=`rgba(${m+30}, ${m*.7+20}, ${m*.4+10}, 0.5)`,n.fillRect(d,f,g,3+o()*4),n.fillStyle=`rgba(0, 0, 0, ${.3+o()*.3})`,n.fillRect(d,f+v-4,g,4)}}else{n.fillStyle="#3d3530",n.fillRect(0,0,s,r);for(let u=0;u<60;u++){const d=o()*s,f=o()*r,g=25+o()*60,v=40+o()*80,m=50+o()*40;n.fillStyle=`rgb(${m}, ${m*.9}, ${m*.85})`,n.fillRect(d,f,g,v),n.fillStyle=`rgba(${m+20}, ${m+15}, ${m+10}, 0.4)`,n.fillRect(d,f,g,4+o()*5),n.fillStyle=`rgba(20, 15, 10, ${.4+o()*.3})`,n.fillRect(d,f+v-5,g,5)}for(let u=0;u<40;u++){const d=o()*s;n.strokeStyle=`rgba(30, 25, 20, ${.5+o()*.4})`,n.lineWidth=1+o()*2,n.beginPath(),n.moveTo(d,0);let f=d;for(let g=0;g<r;g+=10)f+=(o()-.5)*3,n.lineTo(f,g);n.stroke()}}const l=n.getImageData(0,0,s,r),c=l.data;for(let u=0;u<c.length;u+=4){const d=(o()-.5)*20;c[u]=Math.max(0,Math.min(255,c[u]+d)),c[u+1]=Math.max(0,Math.min(255,c[u+1]+d*.8)),c[u+2]=Math.max(0,Math.min(255,c[u+2]+d*.6))}n.putImageData(l,0,0);const h=new um(t);return h.wrapS=h.wrapT=Is,h.repeat.set(1,3),h.anisotropy=16,Zf.set(i,h),h}var gT=pn("<!> <!> <!>",1);function vT(i,e){Pn(e,!0);const t={rootFlareMultiplier:1.75,rootFlareHeight:.008,foliageEnd:1},n={trunk:{segments:8,barkRidgeFreq:8,barkBumpFreq:15},branch:{baseRadius:.035,radialSegments:5},needle:{coneRadius:.04,coneHeight:.4,coneSides:4,perCluster:5,offset:.08},colors:{trunk:new _e(.08,.04,.02),branch:new _e(.06,.03,.02),needleBase:new _e(.002,.008,.002),needleTip:new _e(.004,.015,.004)}},s=mT("fir");let r=Pe(e,"position",19,()=>[0,0,0]),a=Pe(e,"scale",3,1),o=Pe(e,"seed",3,42),l=Pe(e,"trunkHeight",3,8),c=Pe(e,"trunkBaseRadius",3,.2),h=Pe(e,"trunkTopRadius",3,.01),u=Pe(e,"branchTiers",3,40),d=Pe(e,"branchesPerTier",3,7),f=Pe(e,"branchDroop",3,.65),g=Pe(e,"branchLength",3,1.7),v=Pe(e,"needleDensity",3,16),m=Pe(e,"needleSize",3,.8),p=Pe(e,"foliageStart",3,.12);const y={trunkHeight:l(),trunkBaseRadius:c(),trunkTopRadius:h(),rootFlareMultiplier:t.rootFlareMultiplier,rootFlareHeight:t.rootFlareHeight,branchTiers:u(),branchesPerTier:d(),branchDroop:f(),branchLength:g(),needleDensity:v(),needleSize:m(),foliageStart:p(),foliageEnd:t.foliageEnd},_=Dl(o()),x=y.trunkHeight*y.foliageEnd;function P(){const ge=new Ii(y.trunkTopRadius,y.trunkBaseRadius,x,n.trunk.segments,32,!1),V=ge.attributes.position,ae=x/2,be=x*y.rootFlareHeight;for(let he=0;he<V.count;he++){const Se=V.getX(he),Ue=V.getY(he),Te=V.getZ(he);if(Math.sqrt(Se*Se+Te*Te)<.01)continue;const ke=Ue+ae;let K=1;if(ke<be){const $=1-ke/be,me=Math.pow($,2.5);K=1+(y.rootFlareMultiplier-1)*me}const C=Math.atan2(Te,Se),oe=Math.sin(C*n.trunk.barkRidgeFreq)*.02,te=Math.sin(Ue*n.trunk.barkBumpFreq+C*3)*Math.cos(C*7+Ue*2)*.015,ce=K*(1+oe+te);V.setX(he,Se*ce),V.setZ(he,Te*ce)}return ge.computeVertexNormals(),ge}function E(){const ge=new Ar(n.needle.coneRadius,n.needle.coneHeight,n.needle.coneSides,1);return ge.rotateX(Math.PI/2),ge.translate(0,0,n.needle.coneHeight/2),ge}const R=[],I=[];for(let ge=0;ge<y.branchTiers;ge++){const V=ge/(y.branchTiers-1),ae=x*y.foliageStart+V*x*(1-y.foliageStart),be=y.trunkBaseRadius+(y.trunkTopRadius-y.trunkBaseRadius)*V,he=(1-Math.pow(V,1.8))*y.branchLength*(1-V*.4)+.08,Se=1-V*.7,Ue=ge>=y.branchTiers-3?Math.max(4,y.branchesPerTier-(ge-y.branchTiers+4)):y.branchesPerTier,Te=ge*.5+_()*.5;for(let it=0;it<Ue;it++){const ke=it/Ue*Math.PI*2+Te+(_()-.5)*.6,K=he*(.6+_()*.6),C=y.branchDroop*(.4+V*.6)*(.6+_()*.8),oe=new T(Math.cos(ke)*be,ae,Math.sin(ke)*be),te=new T(Math.cos(ke),-C,Math.sin(ke)).normalize(),ce=new Xt;ce.setFromUnitVectors(new T(1,0,0),te);const $=new tn().setFromQuaternion(ce),me=new Fe;me.makeRotationFromQuaternion(ce),me.scale(new T(K,Se,Se)),me.setPosition(oe),R.push(me);for(let re=0;re<y.needleDensity;re++){const H=re/(y.needleDensity-1),X=.1+H*.85,w=K*X,S=-K*X*.2*X,O=new T(w,S,0);O.applyEuler($);const Y=oe.clone().add(O);for(let ee=0;ee<n.needle.perCluster;ee++){const q=ee/n.needle.perCluster*Math.PI*2+_()*.5,Ee=(n.needle.offset+_()*.06)*(1-V*.7),de=new T(0,Math.cos(q)*Ee,Math.sin(q)*Ee);de.applyEuler($);const Ae=Y.clone().add(de),De=new T(Math.cos(ke),-C*.3,Math.sin(ke)).normalize(),ie=new Xt;ie.setFromUnitVectors(new T(0,0,1),De),ie.multiply(new Xt().setFromEuler(new tn(_()*.3,_()*.3,_()*.3)));const we=new tn().setFromQuaternion(ie),Ve=H*.6+_()*.4,He=n.colors.needleBase.clone().lerp(n.colors.needleTip,Ve),Me=y.needleSize*(1-V*.85)*(.8+_()*.3);I.push({position:Ae,rotation:we,scale:Me,color:He})}}}}const b=y.trunkHeight*.02,M=x,D=10;for(let ge=0;ge<D;ge++){const V=ge/(D-1),ae=M+V*b,be=ge*2.4+_()*.3,he=.015*(1-V*.9),Se=new T(Math.cos(be)*he,ae,Math.sin(be)*he),Ue=new tn(-Math.PI/2+V*.2+_()*.1,be,0),Te=y.needleSize*(.3-V*.15);I.push({position:Se,rotation:Ue,scale:Te,color:n.colors.needleTip.clone()})}const N=E(),z=new Sa({color:n.colors.needleBase,roughness:.7,metalness:0}),W=new _a(N,z,I.length),j=new Fe,k=new Float32Array(I.length*3);I.forEach((ge,V)=>{j.makeRotationFromEuler(ge.rotation),j.scale(new T(ge.scale,ge.scale,ge.scale)),j.setPosition(ge.position),W.setMatrixAt(V,j),k[V*3]=ge.color.r,k[V*3+1]=ge.color.g,k[V*3+2]=ge.color.b}),W.instanceMatrix.needsUpdate=!0,W.geometry.setAttribute("color",new Zi(k,3));const ne=pT(n.branch.baseRadius,n.branch.radialSegments),G=new Sa({color:n.colors.branch,map:s,roughness:.9}),le=new _a(ne,G,R.length);R.forEach((ge,V)=>le.setMatrixAt(V,ge)),le.instanceMatrix.needsUpdate=!0;const xe=P();var ye=Sn(),Ie=kt(ye);Wt(Ie,()=>Et.Group,(ge,V)=>{V(ge,{get"position.x"(){return r()[0]},get"position.y"(){return r()[1]},get"position.z"(){return r()[2]},get"scale.x"(){return a()},get"scale.y"(){return a()},get"scale.z"(){return a()},children:(ae,be)=>{var he=gT(),Se=kt(he);{let it=ct(()=>x/2);Wt(Se,()=>Et.Mesh,(ke,K)=>{K(ke,{get geometry(){return xe},get"position.y"(){return U(it)},castShadow:!0,receiveShadow:!0,children:(C,oe)=>{var te=Sn(),ce=kt(te);Wt(ce,()=>Et.MeshStandardMaterial,($,me)=>{me($,{get color(){return n.colors.trunk},get map(){return s},roughness:.95})}),yt(C,te)},$$slots:{default:!0}})})}var Ue=We(Se,2);Et(Ue,{get is(){return le},castShadow:!0});var Te=We(Ue,2);Et(Te,{get is(){return W},castShadow:!0}),yt(ae,he)},$$slots:{default:!0}})}),yt(i,ye),In()}function _T(i,e){Pn(e,!0);let t=Pe(e,"detailLevel",3,1),n=Pe(e,"yPosition",3,0),s=Pe(e,"color",3,"#050a06");function r(){const h=new Ii(e.radius,e.radius,e.height,192,1,!0),u=h.attributes.position;for(let d=0;d<u.count;d++){const f=u.getX(d),g=u.getZ(d),v=Math.atan2(g,f),m=u.getY(d);if(m>0){let p=Math.sin(v*2+e.seed)*8+Math.sin(v*4.5+e.seed*1.3)*5+Math.sin(v*9+e.seed*2.1)*3;t()>1&&(p+=Math.sin(v*17+e.seed*3.7)*2+Math.sin(v*31+e.seed*5.2)*1),t()>2&&(p+=Math.sin(v*53+e.seed*7.1)*.8+Math.sin(v*97+e.seed*11.3)*.4),u.setY(d,m+p)}}return h.computeVertexNormals(),h}const a=r();var o=Sn(),l=kt(o);Wt(l,()=>Et.Mesh,(c,h)=>{h(c,{get geometry(){return a},get"position.y"(){return n()},children:(u,d)=>{var f=Sn(),g=kt(f);Wt(g,()=>Et.MeshBasicMaterial,(v,m)=>{m(v,{get color(){return s()},get side(){return Ut},fog:!0})}),yt(u,f)},$$slots:{default:!0}})}),yt(i,o),In()}function xT(i,e){Pn(e,!0);let t=Pe(e,"baseHeight",3,40),n=Pe(e,"peakHeight",3,180),s=Pe(e,"peakAngle",19,()=>Math.PI*.75),r=Pe(e,"peakSpread",3,.4),a=Pe(e,"yPosition",3,50),o=Pe(e,"color",3,"#030506"),l=Pe(e,"seed",3,12345);const c=Dl(l()),h=20+Math.floor(c()*10),u=[];for(let m=0;m<h;m++){const p=c()*Math.PI*2,y=(.3+c()*.7)*n(),_=(.2+c()*.5)*r();u.push({angle:p,height:y,spread:_})}for(let m=0;m<4;m++){const p=(c()-.5)*1.2;u.push({angle:s()+p,height:(.7+c()*.3)*n(),spread:(.3+c()*.4)*r()})}function d(){const p=new Ii(e.radius,e.radius,t(),256,1,!0),y=p.attributes.position;for(let _=0;_<y.count;_++){const x=y.getX(_),P=y.getZ(_),E=Math.atan2(P,x),R=y.getY(_);if(R>0){let I=0;for(const M of u){const D=Math.abs(Math.atan2(Math.sin(E-M.angle),Math.cos(E-M.angle))),N=Math.max(0,1-D/M.spread)*M.height;I=Math.max(I,N)}const b=Math.sin(E*5+l()*.1)*15+Math.sin(E*11+2.1+l()*.2)*8+Math.sin(E*23+.7+l()*.3)*5+Math.sin(E*47+3.2+l()*.4)*3;y.setY(_,R+I+b)}}return p.computeVertexNormals(),p}const f=d();var g=Sn(),v=kt(g);Wt(v,()=>Et.Mesh,(m,p)=>{p(m,{get geometry(){return f},get"position.y"(){return a()},children:(y,_)=>{var x=Sn(),P=kt(x);Wt(P,()=>Et.MeshBasicMaterial,(E,R)=>{R(E,{get color(){return o()},get side(){return Ut},fog:!0})}),yt(y,x)},$$slots:{default:!0}})}),yt(i,g),In()}var bh=1/1e3,yT=1e3,MT=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*bh}get fixedDelta(){return this._fixedDelta*bh}set fixedDelta(i){this._fixedDelta=i*yT}get elapsed(){return this._elapsed*bh}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},ST=(()=>{const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Je;return t.setAttribute("position",new pt(i,3)),t.setAttribute("uv",new pt(e,2)),t})(),fi=class Qh{static get fullscreenGeometry(){return ST}constructor(e="Pass",t=new Mr,n=new Cr){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Tt(Qh.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Mr),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=Bs){}render(e,t,n,s,r){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof jt||t instanceof Qt||t instanceof At||t instanceof Qh)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},bT=class extends fi{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,s){const r=i.state.buffers.stencil;r.setLocked(!1),r.setTest(!1)}},wT=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,bg="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",wg=class extends $t{constructor(){super({name:"CopyMaterial",defines:{DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Mt(null),depthBuffer:new Mt(null),channelWeights:new Mt(null),opacity:new Mt(1)},blending:An,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:wT,vertexShader:bg}),this.depthFunc=la}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(i){const e=i!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){const e=i!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=i}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(i){i!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=i):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},Eg=class extends fi{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new wg,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new jt(1,1,{minFilter:It,magFilter:It,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,s){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==sn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":i!==null&&i.outputColorSpace===gt&&(this.renderTarget.texture.colorSpace=gt))}},Kf=new _e,Tg=class extends fi{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,s){const r=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=r!==null,c=a>=0;l?(i.getClearColor(Kf),i.setClearColor(r,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Kf,o):c&&i.setClearAlpha(o)}},ET=class extends fi{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new Tg(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,s){const r=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,h=this.inverted?0:1,u=1-h;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.stencil.setFunc(r.ALWAYS,h,4294967295),a.stencil.setClear(u),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(r.EQUAL,1,4294967295),a.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.stencil.setLocked(!0)}},TT=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:s}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,s,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Eg,this.depthTexture=null,this.passes=[],this.timer=new MT,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new Q),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===sn&&i.outputColorSpace===gt&&(this.inputBuffer.texture.colorSpace=gt,this.outputBuffer.texture.colorSpace=gt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const s of this.passes)s.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new Ua;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=Ls,i.type=Ds):i.type=hi,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const s=this.renderer,r=s===null?new Q:s.getDrawingBufferSize(new Q),a={minFilter:It,magFilter:It,stencilBuffer:e,depthBuffer:i,type:t},o=new jt(r.width,r.height,a);return n>0&&(o.samples=n),t===sn&&s!==null&&s.outputColorSpace===gt&&(o.texture.colorSpace=gt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,s=n.getDrawingBufferSize(new Q),r=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(s.width,s.height),i.initialize(n,r,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const r=(o,l)=>o||l.needsDepthTexture;e.reduce(r,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,s=this.outputBuffer,r=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.getDelta());for(const c of this.passes)c.enabled&&(c.render(e,n,s,i,r),c.needsSwap&&(r&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,s,i,r),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=s,s=l),c instanceof ET?r=!0:c instanceof bT&&(r=!1))}setSize(i,e,t){const n=this.renderer,s=n.getSize(new Q);(i===void 0||e===void 0)&&(i=s.width,e=s.height),(s.width!==i||s.height!==e)&&n.setSize(i,e,t);const r=n.getDrawingBufferSize(new Q);this.inputBuffer.setSize(r.width,r.height),this.outputBuffer.setSize(r.width,r.height);for(const a of this.passes)a.setSize(r.width,r.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),fi.fullscreenGeometry.dispose()}},Yi={NONE:0,DEPTH:1,CONVOLUTION:2},ft={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},AT=class{constructor(){this.shaderParts=new Map([[ft.FRAGMENT_HEAD,null],[ft.FRAGMENT_MAIN_UV,null],[ft.FRAGMENT_MAIN_IMAGE,null],[ft.VERTEX_HEAD,null],[ft.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Yi.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Ci}},wh=!1,Jf=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case un:t=this.materialsFlatShadedDoubleSide;break;case Ut:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case un:t=this.materialsDoubleSide;break;case Ut:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof $t))return i.clone();const e=i.uniforms,t=new Map;for(const s in e){const r=e[s].value;r.isRenderTargetTexture&&(e[s].value=null,t.set(s,r))}const n=i.clone();for(const s of t)e[s[0]].value=s[1],n.uniforms[s[0]].value=s[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=ti;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=Ut,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=un,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Ut,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=un,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,wh){const s=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const r of s)r[0].material=r[1];this.meshCount!==s.size&&s.clear()}else{const s=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=s}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return wh}static set workaroundEnabled(i){wh=i}},ki=-1,Ts=class extends Dn{constructor(i,e=ki,t=ki,n=1){super(),this.resizable=i,this.baseSize=new Q(1,1),this.preferredSize=new Q(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new Q,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==ki?t.width=e.width:e.height!==ki?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==ki?t.height=e.height:e.width!==ki?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(ki),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return ki}},st={ADD:0,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},CT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),y.a*opacity);}",RT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),y.a*opacity);}",PT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",IT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),y.a*opacity);}",DT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),y.a*opacity);}",LT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),y.a*opacity);}",UT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),y.a*opacity);}",NT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),y.a*opacity);}",OT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),y.a*opacity);}",FT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),y.a*opacity);}",BT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),y.a*opacity);}",zT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),y.a*opacity);}",kT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),y.a*opacity);}",VT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),y.a*opacity);}",HT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),y.a*opacity);}",GT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",WT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),y.a*opacity);}",XT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),y.a*opacity);}",YT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",qT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),y.a*opacity);}",ZT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),y.a*opacity);}",KT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",JT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",jT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),y.a*opacity);}",$T="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",QT="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),y.a*opacity);}",e1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),y.a*opacity);}",t1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),y.a*opacity);}",n1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",i1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),y.a*opacity);}",s1="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),y.a*opacity);}",r1=new Map([[st.ADD,CT],[st.AVERAGE,RT],[st.COLOR,PT],[st.COLOR_BURN,IT],[st.COLOR_DODGE,DT],[st.DARKEN,LT],[st.DIFFERENCE,UT],[st.DIVIDE,NT],[st.DST,null],[st.EXCLUSION,OT],[st.HARD_LIGHT,FT],[st.HARD_MIX,BT],[st.HUE,zT],[st.INVERT,kT],[st.INVERT_RGB,VT],[st.LIGHTEN,HT],[st.LINEAR_BURN,GT],[st.LINEAR_DODGE,WT],[st.LINEAR_LIGHT,XT],[st.LUMINOSITY,YT],[st.MULTIPLY,qT],[st.NEGATION,ZT],[st.NORMAL,KT],[st.OVERLAY,JT],[st.PIN_LIGHT,jT],[st.REFLECT,$T],[st.SATURATION,QT],[st.SCREEN,e1],[st.SOFT_LIGHT,t1],[st.SRC,n1],[st.SUBTRACT,i1],[st.VIVID_LIGHT,s1]]),a1=class extends Dn{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new Mt(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return r1.get(this.blendFunction)}},o1=class extends Dn{constructor(i,e,{attributes:t=Yi.NONE,blendFunction:n=st.NORMAL,defines:s=new Map,uniforms:r=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=s,this.uniforms=r,this.extensions=a,this.blendMode=new a1(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Ci,this._outputColorSpace=jn}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=Bs){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof jt||e instanceof Qt||e instanceof At||e instanceof fi)&&this[i].dispose()}}},yc={SMALL:1,MEDIUM:2},l1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,c1="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",h1=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],u1=class extends $t{constructor(i=new tt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Mt(null),texelSize:new Mt(new tt),scale:new Mt(1),kernel:new Mt(0)},blending:An,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:l1,vertexShader:c1}),this.setTexelSize(i.x,i.y),this.kernelSize=yc.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return h1[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},d1=class extends fi{constructor({kernelSize:i=yc.MEDIUM,resolutionScale:e=.5,width:t=Ts.AUTO_SIZE,height:n=Ts.AUTO_SIZE,resolutionX:s=t,resolutionY:r=n}={}){super("KawaseBlurPass"),this.renderTargetA=new jt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new Ts(this,s,r,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new u1,this._blurMaterial.kernelSize=i,this.copyMaterial=new wg}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,s){const r=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,h=c.kernelSequence;let u=e;this.fullscreenMaterial=c;for(let d=0,f=h.length;d<f;++d){const g=(d&1)===0?o:l;c.kernel=h[d],c.inputBuffer=u.texture,i.setRenderTarget(g),i.render(r,a),u=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=u.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(r,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,s=t.height;this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==sn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):i!==null&&i.outputColorSpace===gt&&(this.renderTargetA.texture.colorSpace=gt,this.renderTargetB.texture.colorSpace=gt))}static get AUTO_SIZE(){return Ts.AUTO_SIZE}},f1=class extends fi{constructor(i,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=i,this.input=e}setInput(i){this.input=i}render(i,e,t,n,s){const r=this.fullscreenMaterial.uniforms;e!==null&&r!==void 0&&r[this.input]!==void 0&&(r[this.input].value=e.texture),i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}initialize(i,e,t){t!==void 0&&t!==sn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},p1=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform vec2 lightPosition;uniform float exposure;uniform float decay;uniform float density;uniform float weight;uniform float clampMax;varying vec2 vUv;void main(){vec2 coord=vUv;vec2 delta=lightPosition-coord;delta*=1.0/SAMPLES_FLOAT*density;float illuminationDecay=1.0;vec4 color=vec4(0.0);for(int i=0;i<SAMPLES_INT;++i){coord+=delta;vec4 texel=texture2D(inputBuffer,coord);texel*=illuminationDecay*weight;color+=texel;illuminationDecay*=decay;}gl_FragColor=clamp(color*exposure,0.0,clampMax);
#include <dithering_fragment>
}`,m1=class extends $t{constructor(i){super({name:"GodRaysMaterial",defines:{SAMPLES_INT:"60",SAMPLES_FLOAT:"60.0"},uniforms:{inputBuffer:new Mt(null),lightPosition:new Mt(i),density:new Mt(1),decay:new Mt(1),weight:new Mt(1),exposure:new Mt(1),clampMax:new Mt(1)},blending:An,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:p1,vertexShader:bg})}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get lightPosition(){return this.uniforms.lightPosition.value}getLightPosition(){return this.uniforms.lightPosition.value}setLightPosition(i){this.uniforms.lightPosition.value=i}get density(){return this.uniforms.density.value}set density(i){this.uniforms.density.value=i}getDensity(){return this.uniforms.density.value}setDensity(i){this.uniforms.density.value=i}get decay(){return this.uniforms.decay.value}set decay(i){this.uniforms.decay.value=i}getDecay(){return this.uniforms.decay.value}setDecay(i){this.uniforms.decay.value=i}get weight(){return this.uniforms.weight.value}set weight(i){this.uniforms.weight.value=i}getWeight(){return this.uniforms.weight.value}setWeight(i){this.uniforms.weight.value=i}get exposure(){return this.uniforms.exposure.value}set exposure(i){this.uniforms.exposure.value=i}getExposure(){return this.uniforms.exposure.value}setExposure(i){this.uniforms.exposure.value=i}get maxIntensity(){return this.uniforms.clampMax.value}set maxIntensity(i){this.uniforms.clampMax.value=i}getMaxIntensity(){return this.uniforms.clampMax.value}setMaxIntensity(i){this.uniforms.clampMax.value=i}get samples(){return Number(this.defines.SAMPLES_INT)}set samples(i){const e=Math.floor(i);this.defines.SAMPLES_INT=e.toFixed(0),this.defines.SAMPLES_FLOAT=e.toFixed(1),this.needsUpdate=!0}getSamples(){return this.samples}setSamples(i){this.samples=i}},Ag=class extends fi{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new Tg,this.overrideMaterialManager=t===null?null:new Jf(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new Jf(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,s){const r=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=r.background,h=i.shadowMap.autoUpdate,u=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(r.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(u),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,r,a):i.render(r,a),a.layers.mask=l,r.background=c,i.shadowMap.autoUpdate=h}},g1=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv);}`,Eh=new T,jf=new Fe,v1=class extends o1{constructor(i,e,{blendFunction:t=st.SCREEN,samples:n=60,density:s=.96,decay:r=.9,weight:a=.4,exposure:o=.6,clampMax:l=1,blur:c=!0,kernelSize:h=yc.SMALL,resolutionScale:u=.5,width:d=Ts.AUTO_SIZE,height:f=Ts.AUTO_SIZE,resolutionX:g=d,resolutionY:v=f}={}){super("GodRaysEffect",g1,{blendFunction:t,attributes:Yi.DEPTH,uniforms:new Map([["map",new Mt(null)]])}),this.camera=i,this._lightSource=e,this.lightSource=e,this.lightScene=new Mr,this.screenPosition=new Q,this.renderTargetA=new jt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="GodRays.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="GodRays.Target.B",this.uniforms.get("map").value=this.renderTargetB.texture,this.renderTargetLight=new jt(1,1),this.renderTargetLight.texture.name="GodRays.Light",this.renderTargetLight.depthTexture=new Ua,this.renderPassLight=new Ag(this.lightScene,i),this.renderPassLight.clearPass.enabled=!1,this.blurPass=new d1({kernelSize:h}),this.blurPass.enabled=c,this.copyPass=new Eg(this.renderTargetLight),this.copyPass.fullscreenMaterial.channelWeights=new tt(0,0,0,1),this.godRaysPass=new f1(new m1(this.screenPosition));const m=this.godRaysMaterial;m.density=s,m.decay=r,m.weight=a,m.exposure=o,m.maxIntensity=l,m.samples=n;const p=this.resolution=new Ts(this,g,v,u);p.addEventListener("change",y=>this.setSize(p.baseWidth,p.baseHeight))}set mainCamera(i){this.camera=i,this.renderPassLight.mainCamera=i}get lightSource(){return this._lightSource}set lightSource(i){this._lightSource=i,i!==null&&(i.material.depthWrite=!1,i.material.transparent=!0)}getBlurPass(){return this.blurPass}get texture(){return this.renderTargetB.texture}getTexture(){return this.texture}get godRaysMaterial(){return this.godRaysPass.fullscreenMaterial}getGodRaysMaterial(){return this.godRaysMaterial}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.godRaysMaterial.dithering}set dithering(i){const e=this.godRaysMaterial;e.dithering=i,e.needsUpdate=!0}get blur(){return this.blurPass.enabled}set blur(i){this.blurPass.enabled=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}get samples(){return this.godRaysMaterial.samples}set samples(i){this.godRaysMaterial.samples=i}setDepthTexture(i,e=Bs){this.copyPass.fullscreenMaterial.depthBuffer=i,this.copyPass.fullscreenMaterial.depthPacking=e}update(i,e,t){const n=this.lightSource,s=n.parent,r=n.matrixAutoUpdate,a=this.renderTargetA,o=this.renderTargetLight;n.material.depthWrite=!0,n.matrixAutoUpdate=!1,n.updateWorldMatrix(!0,!1),s!==null&&(r||jf.copy(n.matrix),n.matrix.copy(n.matrixWorld)),this.lightScene.add(n),this.copyPass.render(i,e),this.renderPassLight.render(i,o),n.material.depthWrite=!1,n.matrixAutoUpdate=r,s!==null&&(r||n.matrix.copy(jf),s.add(n)),Eh.setFromMatrixPosition(n.matrixWorld).project(this.camera),this.screenPosition.set(Math.min(Math.max((Eh.x+1)*.5,-1),2),Math.min(Math.max((Eh.y+1)*.5,-1),2));let l=o;this.blurPass.enabled&&(this.blurPass.render(i,l,a),l=a),this.godRaysPass.render(i,l,this.renderTargetB)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,s=t.height;this.renderTargetLight.setSize(i,e),this.renderTargetA.setSize(n,s),this.renderTargetB.setSize(n,s),this.blurPass.resolution.copy(t)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.renderPassLight.initialize(i,e,t),this.copyPass.initialize(i,e,t),this.godRaysPass.initialize(i,e,t),t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,this.renderTargetLight.texture.type=t,i!==null&&i.outputColorSpace===gt&&(this.renderTargetA.texture.colorSpace=gt,this.renderTargetB.texture.colorSpace=gt,this.renderTargetLight.texture.colorSpace=gt))}},_1=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,x1="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",y1=class extends $t{constructor(i,e,t,n,s=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Pa.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Mt(null),depthBuffer:new Mt(null),resolution:new Mt(new Q),texelSize:new Mt(new Q),cameraNear:new Mt(.3),cameraFar:new Mt(1e3),aspect:new Mt(1),time:new Mt(0)},blending:An,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:s}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=Bs){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=_1.replace(ft.FRAGMENT_HEAD,i.get(ft.FRAGMENT_HEAD)||"").replace(ft.FRAGMENT_MAIN_UV,i.get(ft.FRAGMENT_MAIN_UV)||"").replace(ft.FRAGMENT_MAIN_IMAGE,i.get(ft.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=x1.replace(ft.VERTEX_HEAD,i.get(ft.VERTEX_HEAD)||"").replace(ft.VERTEX_MAIN_SUPPORT,i.get(ft.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof zt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return ft}};function $f(i,e,t){for(const n of e){const s="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),r=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(r,s))}}function M1(i,e,t){let n=e.getFragmentShader(),s=e.getVertexShader();const r=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&(t.attributes&Yi.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!r&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(ft.FRAGMENT_HEAD)||"",h=l.get(ft.FRAGMENT_MAIN_UV)||"",u=l.get(ft.FRAGMENT_MAIN_IMAGE)||"",d=l.get(ft.VERTEX_HEAD)||"",f=l.get(ft.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(h+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),s!==null&&/mainSupport/.test(s)){const y=/mainSupport *\([\w\s]*?uv\s*?\)/.test(s);f+=`	${i}MainSupport(`,f+=y?`vUv);
`:`);
`;for(const _ of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const x of _[1].split(/\s*,\s*/))t.varyings.add(x),g.add(x),v.add(x);for(const _ of s.matchAll(o))v.add(_[1])}for(const y of n.matchAll(o))v.add(y[1]);for(const y of e.defines.keys())v.add(y.replace(/\([\w\s,]*\)/g,""));for(const y of e.uniforms.keys())v.add(y);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((y,_)=>t.uniforms.set(i+_.charAt(0).toUpperCase()+_.slice(1),y)),e.defines.forEach((y,_)=>t.defines.set(i+_.charAt(0).toUpperCase()+_.slice(1),y));const m=new Map([["fragment",n],["vertex",s]]);$f(i,v,t.defines),$f(i,v,m),n=m.get("fragment"),s=m.get("vertex");const p=e.blendMode;if(t.blendModes.set(p.blendFunction,p),r){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(u+=e.inputColorSpace===gt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==jn?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const y=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;u+=`${i}MainImage(color0, UV, `,(t.attributes&Yi.DEPTH)!==0&&y.test(n)&&(u+="depth, ",t.readDepth=!0),u+=`color1);
	`;const _=i+"BlendOpacity";t.uniforms.set(_,p.opacity),u+=`color0 = blend${p.blendFunction}(color0, color1, ${_});

	`,c+=`uniform float ${_};

`}if(c+=n+`
`,s!==null&&(d+=s+`
`),l.set(ft.FRAGMENT_HEAD,c),l.set(ft.FRAGMENT_MAIN_UV,h),l.set(ft.FRAGMENT_MAIN_IMAGE,u),l.set(ft.VERTEX_HEAD,d),l.set(ft.VERTEX_MAIN_SUPPORT,f),e.extensions!==null)for(const y of e.extensions)t.extensions.add(y)}}var S1=class extends fi{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new y1(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new AT;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===st.DST)i.attributes|=a.getAttributes()&Yi.DEPTH;else{if((i.attributes&a.getAttributes()&Yi.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${a.name})`);M1("e"+e++,a,i)}let t=i.shaderParts.get(ft.FRAGMENT_HEAD),n=i.shaderParts.get(ft.FRAGMENT_MAIN_IMAGE),s=i.shaderParts.get(ft.FRAGMENT_MAIN_UV);const r=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(r,`blend${a.blendFunction}`)+`
`;(i.attributes&Yi.DEPTH)!==0?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===gt&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(s=`vec2 transformedUv = vUv;
`+s,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(ft.FRAGMENT_HEAD,t),i.shaderParts.set(ft.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(ft.FRAGMENT_MAIN_UV,s);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=Bs){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,s){for(const r of this.effects)r.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const r=this.fullscreenMaterial;r.inputBuffer=e.texture,r.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==sn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}},b1=pn("<!> <!>",1);function w1(i,e){Pn(e,!0);const t=()=>Rh(f,"$camera",s),n=()=>Rh(g,"$size",s),[s,r]=ap();let a=Pe(e,"godRaysIntensity",3,1),o=Pe(e,"godRaysDensity",3,.96),l=Pe(e,"godRaysDecay",3,.92),c=Pe(e,"godRaysWeight",3,.3),h=Pe(e,"enabled",3,!0);const{scene:u,renderer:d,camera:f,size:g,renderStage:v,autoRender:m}=Pr();let p,y,_;function x(b,M,D=4e3){const N=Bn.degToRad(90-b),z=Bn.degToRad(M);return new T(D*Math.sin(N)*Math.sin(z),D*Math.cos(N),D*Math.sin(N)*Math.cos(z))}Bt(()=>{if(y){const b=x(e.skyElevation,e.skyAzimuth);y.position.copy(b)}});function P(b){!y||!h()||(p.removeAllPasses(),p.addPass(new Ag(u,b)),_=new v1(b,y,{blendFunction:st.ADD,samples:60,density:o(),decay:l(),weight:c(),exposure:a(),clampMax:1,kernelSize:yc.SMALL}),p.addPass(new S1(b,_)))}op(()=>{p=new TT(d);const b=setInterval(()=>{y&&(clearInterval(b),P(t()))},50),M=m.current;return m.set(!1),()=>{clearInterval(b),m.set(M),p?.dispose()}}),Bt(()=>{p&&y&&t()&&P(t())}),Bt(()=>{p&&p.setSize(n().width,n().height)}),Bt(()=>{_&&(_.godRaysMaterial.density=o(),_.godRaysMaterial.decay=l(),_.godRaysMaterial.weight=c(),_.godRaysMaterial.exposure=a())}),ka(b=>{p&&h()?p.render(b):d&&t()&&d.render(u,t())},{stage:v,autoInvalidate:!1});const E=x(e.skyElevation,e.skyAzimuth);var R=Sn(),I=kt(R);{let b=ct(()=>[E.x,E.y,E.z]);Wt(I,()=>Et.Mesh,(M,D)=>{D(M,{get position(){return U(b)},oncreate:N=>{y=N},children:(N,z)=>{var W=b1(),j=kt(W);Wt(j,()=>Et.SphereGeometry,(ne,G)=>{G(ne,{args:[150,16,16]})});var k=We(j,2);Wt(k,()=>Et.MeshBasicMaterial,(ne,G)=>{G(ne,{color:"#ffdd88",transparent:!0,opacity:.9})}),yt(N,W)},$$slots:{default:!0}})})}yt(i,R),In(),r()}const E1={ambientColor:"#403848",ambientIntensity:.18,directionalIntensity:3,waterColor:"#3f1d1d",skyElevation:0,skyTurbidity:20,fogColor:"#403e41",fogDensity:.0019,godRaysEnabled:!0,godRaysIntensity:1},T1=[10.2,-18.6,.5];function Wr({pos:i,target:e=T1,settings:t={},hold:n=0}){return{camera:{position:i,target:e},settings:{...E1,...t},hold:n}}const ei=[Wr({pos:[141.37,20.77,509.17],settings:{skyElevation:5}}),Wr({pos:[-164.67,20.77,495.85]}),Wr({pos:[-514.67,20.77,21.93],settings:{directionalIntensity:1.7,waterColor:"#3b2b2b",skyElevation:-2,fogDensity:.0021}}),Wr({pos:[-157.69,6.82,-185.44],target:[28.42,-11.36,-29.81],settings:{directionalIntensity:1.2,waterColor:"#3b2b2b",skyElevation:-3,fogDensity:.0026}}),Wr({pos:[-43.63,41.28,-355.49],target:[32.07,-11.45,-32.49],settings:{directionalIntensity:1.9,waterColor:"#3b2b2b",fogDensity:.001,godRaysIntensity:3}})];function Th(i,e,t){const n=new _e(i),s=new _e(e);return n.lerp(s,t),"#"+n.getHexString()}function or(i,e,t){return i+(e-i)*t}function A1(i){return i*i*(3-2*i)}function Cg(i){const e=ei.length-1,t=i*e,n=Math.min(Math.floor(t),e-1),s=t-n,r=ei[n].hold,a=s<=r?0:(s-r)/(1-r),o=A1(a);return{segmentIndex:n,localT:o}}function C1(i){const{segmentIndex:e,localT:t}=Cg(i),n=ei.length-1;return(e+t)/n}function Rg(i){const{segmentIndex:e,localT:t}=Cg(i),n=ei[e].settings,s=ei[e+1].settings;return{ambientColor:Th(n.ambientColor,s.ambientColor,t),ambientIntensity:or(n.ambientIntensity,s.ambientIntensity,t),directionalIntensity:or(n.directionalIntensity,s.directionalIntensity,t),waterColor:Th(n.waterColor,s.waterColor,t),skyElevation:or(n.skyElevation,s.skyElevation,t),skyTurbidity:or(n.skyTurbidity,s.skyTurbidity,t),fogColor:Th(n.fogColor,s.fogColor,t),fogDensity:or(n.fogDensity,s.fogDensity,t),godRaysEnabled:n.godRaysEnabled,godRaysIntensity:or(n.godRaysIntensity,s.godRaysIntensity,t)}}function R1(){const i=window.location.hash;if(!i.startsWith("#cam="))return null;const e=i.slice(5).split(",").map(Number);return e.length!==6||e.some(isNaN)?null:{pos:[e[0],e[1],e[2]],target:[e[3],e[4],e[5]]}}function P1(i,e){return function(){const n=i(),s=e();if(!s||!n)return;const r=n.position,a=s.target,o=c=>Math.round(c*10)/10,l=`#cam=${o(r.x)},${o(r.y)},${o(r.z)},${o(a.x)},${o(a.y)},${o(a.z)}`;history.replaceState(null,"",l)}}function I1(i,e,t){let n=1/0;const s=t.length-1;for(let r=0;r<s;r++){const a=t[r][0],o=t[r][1],l=t[(r+1)%s][0],c=t[(r+1)%s][1],h=l-a,u=c-o,d=h*h+u*u;if(d===0)continue;const f=Math.max(0,Math.min(1,((i-a)*h+(e-o)*u)/d)),g=a+f*h,v=o+f*u,m=Math.sqrt((i-g)**2+(e-v)**2);m<n&&(n=m)}return n}function D1(i,e,t){let n=!1;const s=t.length-1;for(let r=0,a=s-1;r<s;a=r++){const o=t[r][0],l=t[r][1],c=t[a][0],h=t[a][1];if(l>e!=h>e){const d=(c-o)*(e-l)/(h-l)+o;i<d&&(n=!n)}}return n}var L1=pn("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>",1);function U1(i,e){Pn(e,!0),gE({Water:uT});const t=window.matchMedia("(max-width: 768px)").matches;let n,s;const r=P1(()=>s,()=>n),a={sky:{elevation:3,azimuth:180,rayleigh:3,mie:.01,scale:1e4},terrain:{size:6e3,color:"#061008"},water:{textureSize:512,distortionScale:15,animSpeed:.3},camera:{position:[180,35,180],fov:60,minDist:10,maxDist:2e3},light:{color:"#ffcc44",shadowSize:2048}},o=R1(),l=o?.pos??a.camera.position,c=o?.target??[0,8,0];let h=br(e,["$$slots","$$events","$$legacy"]);function u(H,X,w){const S=Math.atan2(H[0],H[2]),O=Math.atan2(X[0],X[2]),Y=Math.sqrt(H[0]**2+H[2]**2),ee=Math.sqrt(X[0]**2+X[2]**2),q=H[1],Ee=X[1],de=[];for(let Ae=0;Ae<=w;Ae++){const De=Ae/w,ie=S+(O-S)*De,we=Y+(ee-Y)*De,Ve=q+(Ee-q)*De;de.push(new T(Math.sin(ie)*we,Ve,Math.cos(ie)*we))}return de}const d=new Cl(ei.slice(0,-1).flatMap((H,X)=>{const w=u(H.camera.position,ei[X+1].camera.position,20);return X===0?w:w.slice(1)}),!1,"chordal"),f=new Cl(ei.map(H=>new T(...H.camera.target)),!1,"chordal");let g=ct(()=>(e.cameraPathProgress??-1)>=0),v=ct(()=>U(g)?Rg(e.cameraPathProgress??0):null),m,p,y;Bt(()=>{if(U(g)&&s&&n&&U(v)){const H=C1(e.cameraPathProgress??0);s.position.copy(d.getPointAt(H)),n.target.copy(f.getPointAt(H)),n.update();const X=U(v);if(m&&(m.color.set(X.ambientColor),m.intensity=X.ambientIntensity),p){p.intensity=X.directionalIntensity;const w=Bn.degToRad(90-X.skyElevation),S=Bn.degToRad(a.sky.azimuth);p.position.set(500*Math.sin(w)*Math.sin(S),500*Math.cos(w),500*Math.sin(w)*Math.cos(S))}ye?.material?.uniforms&&(ye.material.uniforms.waterColor.value=new _e(X.waterColor)),y&&(y.color.set(X.fogColor),y.density=X.fogDensity)}}),Bt(()=>{s&&n&&e.onCameraReady&&e.onCameraReady(()=>({position:[s.position.x,s.position.y,s.position.z],target:[n.target.x,n.target.y,n.target.z]}))}),Bt(()=>{if(e.setCameraState&&s&&n){const{position:H,target:X}=e.setCameraState;s.position.set(...H),n.target.set(...X),n.update()}}),Bt(()=>{m&&(m.color.set(e.ambientColor),m.intensity=h.ambientIntensity)}),Bt(()=>{if(p){p.intensity=h.directionalIntensity;const H=Bn.degToRad(90-e.skyElevation),X=Bn.degToRad(a.sky.azimuth),w=500;p.position.set(w*Math.sin(H)*Math.sin(X),w*Math.cos(H),w*Math.sin(H)*Math.cos(X))}}),Bt(()=>{if(ye?.material?.uniforms){const H=new _e(e.waterColor);ye.material.uniforms.waterColor.value=H}}),Bt(()=>{y&&(y.color.set(e.fogColor),y.density=h.fogDensity)});const _=fT.geometry.coordinates[0],x=(H,X)=>I1(H,X,_),P=(H,X)=>D1(H,X,_);function E(H,X,w){return(Math.sin(H*.03+w)*Math.cos(X*.03+w*1.3)+Math.sin(H*.015+X*.02+w*.7)*.6+Math.sin(H*.06-X*.05+w*2.1)*.4+Math.sin(H*.1+X*.08+w*3.2)*.2)/2.2}function R(H,X){if(!P(H,X))return-10;const w=x(H,X),S=Math.min(1,w/60),O=.55+S*10,Y=(E(H,X,42)*.5+.5)*10*S;return O+Y}function I(){const H=new Xi,X=_;H.moveTo(X[0][0],X[0][1]);for(let S=1;S<X.length-1;S++)H.lineTo(X[S][0],X[S][1]);H.closePath();const w=new Na(H,{depth:1,bevelEnabled:!1});return w.rotateX(-Math.PI/2),w.translate(0,-.45,0),w}function b(){const H=a.terrain.size,X=new Ji(H,H,300,300),w=X.attributes.position;for(let S=0;S<w.count;S++){const O=w.getX(S),Y=w.getY(S);if(P(O,Y)){const ee=x(O,Y),q=Math.min(1,ee/60),Ee=.6+q*10,de=(E(O,Y,42)*.5+.5)*10*q;w.setZ(S,Ee+de)}else w.setZ(S,-10)}return X.computeVertexNormals(),X}const M=I(),D=b(),N=[{radius:1800,height:100,seed:0,detailLevel:1,y:40,color:"#0a1a0f"},{radius:1500,height:110,seed:2.5,detailLevel:2,y:35,color:"#0c2012"},{radius:1200,height:120,seed:5.1,detailLevel:2,y:30,color:"#0e2515"},{radius:900,height:80,seed:8.3,detailLevel:3,y:18,color:"#081408"}],z=new Om().load("https://threejs.org/examples/textures/waternormals.jpg",H=>{H.wrapS=H.wrapT=Is}),W=new Ji(a.terrain.size,a.terrain.size,1,1),j=new T,k=Bn.degToRad(90-a.sky.elevation),ne=Bn.degToRad(a.sky.azimuth);j.setFromSphericalCoords(1,k,ne);const G=500,le=[G*Math.sin(k)*Math.sin(ne),G*Math.cos(k),G*Math.sin(k)*Math.cos(ne)],xe={textureWidth:a.water.textureSize,textureHeight:a.water.textureSize,waterNormals:z,sunDirection:j,sunColor:16763972,waterColor:2568,distortionScale:a.water.distortionScale,fog:!0};let ye;ka(H=>{ye?.material?.uniforms&&(ye.material.uniforms.time.value+=H*a.water.animSpeed)});const Ie=Dl(54321),ge=[],V=t?18:35;for(let H=0;H<80;H++){const X=(Ie()-.5)*280,w=(Ie()-.5)*140,S=4+Ie()*8;if(P(X,-w)&&!(x(X,-w)<S*1.5)&&(ge.push({position:[X,R(X,-w)-S*.3,w],scale:S,seed:H+1,trunkHeight:3+Ie()*6,branchLength:.6+Ie()*1.2,trunkBaseRadius:.12+Ie()*.06,trunkTopRadius:.005+Ie()*.005,branchTiers:t?18+Math.floor(Ie()*8):25+Math.floor(Ie()*12),branchesPerTier:5+Math.floor(Ie()*3),branchDroop:.5+Ie()*.3,needleDensity:t?6+Math.floor(Ie()*3):10+Math.floor(Ie()*5),needleSize:.5+Ie()*.25,foliageStart:.1+Ie()*.1}),ge.length>=V))break}let ae=null;if(!t){let H=function(){const Ee=new Je,de=new Float32Array([-.08,0,0,.08,0,0,0,1.2,0]);return Ee.setAttribute("position",new pt(de,3)),Ee.computeVertexNormals(),Ee};const X=Dl(77777),w=4e4,S=H(),O=new ui({color:"#020a05",side:un});ae=new _a(S,O,w);const Y=new Fe,ee=new Float32Array(w*3);let q=0;for(let Ee=0;Ee<25e4&&q<w;Ee++){const de=(X()-.5)*280,Ae=(X()-.5)*160;if(!P(de,-Ae)||x(de,-Ae)<3)continue;const ie=R(de,-Ae),we=1.1+X()*.6,Ve=X()*Math.PI*2,He=(X()-.5)*.2;Y.makeRotationY(Ve),Y.multiply(new Fe().makeRotationX(He)),Y.scale(new T(we,we*(.6+X()*.4),we)),Y.setPosition(de,ie,Ae),ae.setMatrixAt(q,Y);const Me=X()*.1;ee[q*3]=.008+Me*.008,ee[q*3+1]=.03+Me*.02,ee[q*3+2]=.015+Me*.008,q++}ae.instanceMatrix.needsUpdate=!0,ae.geometry.setAttribute("color",new Zi(ee,3))}var be=L1(),he=kt(be);Wt(he,()=>Et.PerspectiveCamera,(H,X)=>{X(H,{makeDefault:!0,get position(){return l},get fov(){return a.camera.fov},far:1e4,oncreate:w=>{s=w},children:(w,S)=>{{let O=ct(()=>!U(g)),Y=ct(()=>!U(g)),ee=ct(()=>!U(g));HE(w,{enableDamping:!0,get enableZoom(){return U(O)},get enableRotate(){return U(Y)},get enablePan(){return U(ee)},maxPolarAngle:Math.PI/2.1,get minDistance(){return a.camera.minDist},get maxDistance(){return a.camera.maxDist},get target(){return c},oncreate:q=>{n=q},get onend(){return r}})}},$$slots:{default:!0}})});var Se=We(he,2);{let H=ct(()=>U(v)?.skyElevation??e.skyElevation),X=ct(()=>U(v)?.skyTurbidity??e.skyTurbidity);GE(Se,{get elevation(){return U(H)},get azimuth(){return a.sky.azimuth},get turbidity(){return U(X)},get rayleigh(){return a.sky.rayleigh},get mieCoefficient(){return a.sky.mie},mieDirectionalG:.8,get scale(){return a.sky.scale}})}var Ue=We(Se,2);{let H=ct(()=>[e.fogColor,e.fogDensity]);Wt(Ue,()=>Et.FogExp2,(X,w)=>{w(X,{get args(){return U(H)},oncreate:S=>{y=S},attach:"fog"})})}var Te=We(Ue,2);Wt(Te,()=>Et.Mesh,(H,X)=>{X(H,{get geometry(){return D},"rotation.x":-Math.PI/2,receiveShadow:!0,children:(w,S)=>{var O=Sn(),Y=kt(O);Wt(Y,()=>Et.MeshStandardMaterial,(ee,q)=>{q(ee,{get color(){return a.terrain.color},roughness:.9,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})}),yt(w,O)},$$slots:{default:!0}})});var it=We(Te,2);Wt(it,()=>Et.Mesh,(H,X)=>{X(H,{get geometry(){return M},receiveShadow:!0,children:(w,S)=>{var O=Sn(),Y=kt(O);Wt(Y,()=>Et.MeshStandardMaterial,(ee,q)=>{q(ee,{get color(){return a.terrain.color},roughness:.9})}),yt(w,O)},$$slots:{default:!0}})});var ke=We(it,2);{let H=ct(()=>[W,xe]);Wt(ke,()=>Et.Water,(X,w)=>{w(X,{get args(){return U(H)},"rotation.x":-Math.PI/2,"position.y":.05,oncreate:S=>{ye=S}})})}var K=We(ke,2);Wt(K,()=>Et.DirectionalLight,(H,X)=>{X(H,{get position(){return le},get color(){return a.light.color},get intensity(){return e.directionalIntensity},castShadow:!0,get"shadow.mapSize.width"(){return a.light.shadowSize},get"shadow.mapSize.height"(){return a.light.shadowSize},"shadow.camera.far":600,"shadow.camera.left":-200,"shadow.camera.right":200,"shadow.camera.top":200,"shadow.camera.bottom":-200,oncreate:w=>{p=w}})});var C=We(K,2);Wt(C,()=>Et.AmbientLight,(H,X)=>{X(H,{get color(){return e.ambientColor},get intensity(){return e.ambientIntensity},oncreate:w=>{m=w}})});var oe=We(C,2);xT(oe,{radius:5500,baseHeight:60,peakHeight:250,peakAngle:Math.PI*1,peakSpread:.5,yPosition:40,color:"#020304"});var te=We(oe,2);Ho(te,17,()=>N,cp,(H,X)=>{_T(H,{get radius(){return U(X).radius},get height(){return U(X).height},get seed(){return U(X).seed},get detailLevel(){return U(X).detailLevel},get yPosition(){return U(X).y},get color(){return U(X).color}})});var ce=We(te,2);{var $=H=>{Et(H,{get is(){return ae}})};aa(ce,H=>{ae&&H($)})}var me=We(ce,2);Ho(me,17,()=>ge,H=>H.seed,(H,X)=>{vT(H,{get position(){return U(X).position},get scale(){return U(X).scale},get seed(){return U(X).seed},get trunkHeight(){return U(X).trunkHeight},get trunkBaseRadius(){return U(X).trunkBaseRadius},get trunkTopRadius(){return U(X).trunkTopRadius},get branchTiers(){return U(X).branchTiers},get branchesPerTier(){return U(X).branchesPerTier},get branchDroop(){return U(X).branchDroop},get branchLength(){return U(X).branchLength},get needleDensity(){return U(X).needleDensity},get needleSize(){return U(X).needleSize},get foliageStart(){return U(X).foliageStart}})});var re=We(me,2);{let H=ct(()=>e.godRaysIntensity??1),X=ct(()=>e.godRaysEnabled??!0);w1(re,{get skyElevation(){return e.skyElevation},get skyAzimuth(){return a.sky.azimuth},get godRaysIntensity(){return U(H)},get enabled(){return U(X)}})}yt(i,be),In()}var N1=pn('<div class="controls svelte-1r1fr0c"><div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Ambient</span> <input type="color" class="svelte-1r1fr0c"/> <input type="range" min="0" max="0.5" step="0.01" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Dir Light</span> <input type="range" min="0" max="3" step="0.1" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Water</span> <input type="color" class="svelte-1r1fr0c"/></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Sun Height</span> <input type="range" min="-5" max="30" step="1" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Sky Haze</span> <input type="range" min="0" max="20" step="1" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">Fog</span> <input type="color" class="svelte-1r1fr0c"/> <input type="range" min="0" max="0.01" step="0.0001" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <div class="group svelte-1r1fr0c"><span class="lbl svelte-1r1fr0c">God Rays</span> <input type="checkbox"/> <input type="range" min="0" max="3" step="0.1" class="svelte-1r1fr0c"/> <span class="val svelte-1r1fr0c"> </span></div> <button class="copy svelte-1r1fr0c"> </button></div>'),O1=pn('<div><button class="toggle svelte-1r1fr0c"> </button> <!></div>');function F1(i,e){Pn(e,!0);let t=Pe(e,"ambientColor",15),n=Pe(e,"ambientIntensity",15),s=Pe(e,"directionalIntensity",15),r=Pe(e,"waterColor",15),a=Pe(e,"skyElevation",15),o=Pe(e,"skyTurbidity",15),l=Pe(e,"fogColor",15),c=Pe(e,"fogDensity",15),h=Pe(e,"godRaysEnabled",15),u=Pe(e,"godRaysIntensity",15),d=Ot(!1),f=Ot(!1);function g(){const E=`light: { ambient: '${t()}', ambientIntensity: ${n().toFixed(2)} },
directionalIntensity: ${s().toFixed(1)},
water: { color: '${r()}' },
sky: { elevation: ${a()}, turbidity: ${o()} },
fog: { color: '${l()}', density: ${c().toFixed(4)} },
godRays: { enabled: ${h()}, intensity: ${u().toFixed(1)} }`;navigator.clipboard.writeText(E),Ze(f,!0),setTimeout(()=>Ze(f,!1),2e3)}function v(){e.onchange?.()}var m=O1();let p;var y=lt(m);y.__click=()=>Ze(d,!U(d));var _=lt(y);at(y);var x=We(y,2);{var P=E=>{var R=N1(),I=lt(R),b=We(lt(I),2);On(b),b.__change=v;var M=We(b,2);On(M),M.__input=v;var D=We(M,2),N=lt(D,!0);at(D),at(I);var z=We(I,2),W=We(lt(z),2);On(W),W.__input=v;var j=We(W,2),k=lt(j,!0);at(j),at(z);var ne=We(z,2),G=We(lt(ne),2);On(G),G.__change=v,at(ne);var le=We(ne,2),xe=We(lt(le),2);On(xe),xe.__input=v;var ye=We(xe,2),Ie=lt(ye);at(ye),at(le);var ge=We(le,2),V=We(lt(ge),2);On(V),V.__input=v;var ae=We(V,2),be=lt(ae,!0);at(ae),at(ge);var he=We(ge,2),Se=We(lt(he),2);On(Se),Se.__change=v;var Ue=We(Se,2);On(Ue),Ue.__input=v;var Te=We(Ue,2),it=lt(Te,!0);at(Te),at(he);var ke=We(he,2),K=We(lt(ke),2);On(K),K.__change=v;var C=We(K,2);On(C),C.__input=v;var oe=We(C,2),te=lt(oe,!0);at(oe),at(ke);var ce=We(ke,2);ce.__click=g;var $=lt(ce,!0);at(ce),at(R),Wi((me,re,H,X)=>{ai(N,me),ai(k,re),ai(Ie,`${a()??""}°`),ai(be,o()),ai(it,H),C.disabled=!h(),ai(te,X),ai($,U(f)?"Copied!":"Copy Config")},[()=>n().toFixed(2),()=>s().toFixed(1),()=>c().toFixed(4),()=>u().toFixed(1)]),ri(b,t),ri(M,n),ri(W,s),ri(G,r),ri(xe,a),ri(V,o),ri(Se,l),ri(Ue,c),hp(K,h),ri(C,u),yt(E,R)};aa(x,E=>{U(d)||E(P)})}at(m),Wi(()=>{p=Nl(m,1,"tuner svelte-1r1fr0c",null,p,{collapsed:U(d)}),ai(_,`${U(d)?">":"<"} Light`)}),yt(i,m),In()}rp(["click","change","input"]);var B1=pn('<div><div class="shadow svelte-1ubpodc"></div> <div class="glass svelte-1ubpodc"><div class="edge-light svelte-1ubpodc"></div> <div class="content svelte-1ubpodc"><!></div></div></div>');function z1(i,e){Pn(e,!0);let t=Pe(e,"roundness",3,999),n=Pe(e,"paddingX",3,1.5),s=Pe(e,"paddingY",3,.875),r=Pe(e,"blur",3,12),a=Pe(e,"thickness",3,1),o=Pe(e,"tint",3,"#B4F0E6"),l=Pe(e,"tintOpacity",3,.08),c=Pe(e,"interactive",3,!0);function h(y){y=y.replace("#",""),y.length===3&&(y=y.split("").map(x=>x+x).join(""));const _=parseInt(y,16);return{r:_>>16&255,g:_>>8&255,b:_&255}}let u=ct(()=>h(o()));var d=B1();let f,g;var v=We(lt(d),2),m=We(lt(v),2),p=lt(m);ji(p,()=>e.children),at(m),at(v),at(d),Wi(()=>{f=Nl(d,1,"glass-wrap svelte-1ubpodc",null,f,{interactive:c()}),g=Ol(d,"",g,{"--roundness":`${t()??""}px`,"--px":`${n()??""}em`,"--py":`${s()??""}em`,"--blur":`${r()??""}px`,"--thickness":a(),"--tint-r":U(u).r,"--tint-g":U(u).g,"--tint-b":U(u).b,"--tint-opacity":l()})}),yt(i,d),In()}var k1=pn("<div><!></div>");function V1(i,e){Pn(e,!0);let t=Pe(e,"endAt",3,1),n=Pe(e,"revealOffset",3,0),s=Pe(e,"revealDuration",3,800),r=Pe(e,"revealDelay",3,0),a=ct(()=>Math.min(1,e.progress/t()));function o(p){const y=p.match(/^(-?[\d.]+)(.*)$/);return y?{num:parseFloat(y[1]),unit:y[2]||"px"}:{num:0,unit:"px"}}function l(p,y,_){const x=o(p),P=o(y);return x.unit!==P.unit?_<.5?p:y:`${x.num+(P.num-x.num)*_}${x.unit}`}let c=ct(()=>l(e.from.x,e.to.x,U(a))),h=ct(()=>l(e.from.y,e.to.y,U(a))),u=ct(()=>(e.from.anchorX??.5)+((e.to.anchorX??.5)-(e.from.anchorX??.5))*U(a)),d=ct(()=>(e.from.anchorY??.5)+((e.to.anchorY??.5)-(e.from.anchorY??.5))*U(a));var f=k1();let g,v;var m=lt(f);ji(m,()=>e.children),at(f),Wi(()=>{g=Nl(f,1,"scroll-position svelte-1jdotcm",null,g,{reveal:n()>0}),v=Ol(f,"",v,{left:U(c),top:U(h),"--anchor-x":`${-U(u)*100}%`,"--anchor-y":`${-U(d)*100}%`,"--reveal-offset":`${n()??""}px`,"--reveal-duration":`${s()??""}ms`,"--reveal-delay":`${r()??""}ms`})}),yt(i,f),In()}var H1=pn('<div><div class="expand-content svelte-192tb3"><!></div></div>');function G1(i,e){let t=Pe(e,"startAt",3,.8),n=Pe(e,"endAt",3,1),s=Pe(e,"direction",3,"down"),r=Pe(e,"maxSize",3,"500px"),a=ct(()=>e.progress<=t()?0:e.progress>=n()?1:(e.progress-t())/(n()-t())),o=ct(()=>s()==="down"||s()==="up"),l=ct(()=>s()==="up"||s()==="left");var c=H1();let h,u;var d=lt(c),f=lt(d);ji(f,()=>e.children),at(d),at(c),Wi(g=>{h=Nl(c,1,"scroll-expand svelte-192tb3",null,h,{vertical:U(o),horizontal:!U(o),reverse:U(l)}),u=Ol(c,"",u,g)},[()=>({"--size":`calc(${r()??""} * ${U(a)??""})`,"--opacity":Math.min(1,U(a)*2),"--max-size":r()})]),yt(i,c)}var W1=pn('<div class="expanded-info svelte-1uha8ag"><p class="svelte-1uha8ag">Full-stack developer passionate about 3D web experiences</p> <p class="svelte-1uha8ag">Stockholm, Sweden</p></div>'),X1=pn('<div class="glass-content svelte-1uha8ag"><h1 class="svelte-1uha8ag">Frej Sundqvist</h1> <p class="svelte-1uha8ag">Software Developer</p></div> <!>',1),Y1=pn('<div class="marker svelte-1uha8ag"></div>'),q1=pn('<div class="slider-container svelte-1uha8ag"><input type="range" min="0" max="1" step="0.001" class="svelte-1uha8ag"/> <div class="keyframe-markers svelte-1uha8ag"></div> <div class="event-markers svelte-1uha8ag"><div class="event svelte-1uha8ag" style="left: 50%" title="Card arrives"></div> <div class="event expand svelte-1uha8ag" style="left: 55%" title="Expand starts"></div> <div class="event expand svelte-1uha8ag" style="left: 75%" title="Expand ends"></div></div></div> <span class="svelte-1uha8ag"> </span>',1),Z1=pn('<div class="viewpoint svelte-1uha8ag"><button class="load-btn svelte-1uha8ag"> </button> <button class="copy-btn svelte-1uha8ag">⧉</button> <button class="delete-btn svelte-1uha8ag">×</button></div>'),K1=pn('<div class="canvas-container svelte-1uha8ag"><!></div> <!> <div class="desktop-only svelte-1uha8ag"><div class="camera-path svelte-1uha8ag"><label class="svelte-1uha8ag"><input type="checkbox"/> Path</label> <!></div> <div class="viewpoints svelte-1uha8ag"><button class="save-btn svelte-1uha8ag">+ Save View</button> <!></div> <!></div>',1);function rA(i,e){Pn(e,!0);const t=ei[0].settings;let n=Ot(Yn(t.ambientColor)),s=Ot(Yn(t.ambientIntensity)),r=Ot(Yn(t.directionalIntensity)),a=Ot(Yn(t.waterColor)),o=Ot(Yn(t.skyElevation)),l=Ot(Yn(t.skyTurbidity)),c=Ot(Yn(t.fogColor)),h=Ot(Yn(t.fogDensity)),u=Ot(Yn(t.godRaysEnabled)),d=Ot(Yn(t.godRaysIntensity)),f=Ot(!0),g=Ot(0),v=ct(()=>U(f)?U(g):void 0);Bt(()=>{if(U(f)){const K=Rg(U(g));Ze(n,K.ambientColor,!0),Ze(s,K.ambientIntensity,!0),Ze(r,K.directionalIntensity,!0),Ze(a,K.waterColor,!0),Ze(o,K.skyElevation,!0),Ze(l,K.skyTurbidity,!0),Ze(c,K.fogColor,!0),Ze(h,K.fogDensity,!0),Ze(d,K.godRaysIntensity,!0)}});let m,p=Ot(0),y;function _(K){if(!U(f))return;K.preventDefault();const C=K.deltaY*25e-5;Ze(p,Math.max(0,Math.min(1,U(p)+C)),!0)}let x=0;function P(K){x=K.touches[0].clientY}function E(K){if(!U(f))return;K.preventDefault();const C=K.touches[0].clientY,oe=(x-C)*.002;Ze(p,Math.max(0,Math.min(1,U(p)+oe)),!0),x=C}function R(){const K=U(p)-U(g);Math.abs(K)>1e-4?(Ze(g,U(g)+K*.18),y=requestAnimationFrame(R)):(Ze(g,U(p),!0),y=void 0)}Bt(()=>{U(f)&&Math.abs(U(p)-U(g))>1e-4&&!y&&(y=requestAnimationFrame(R))}),Bt(()=>(window.addEventListener("wheel",_,{passive:!1}),m?.addEventListener("touchstart",P,{passive:!0}),m?.addEventListener("touchmove",E,{passive:!1}),()=>{window.removeEventListener("wheel",_),m?.removeEventListener("touchstart",P),m?.removeEventListener("touchmove",E),y&&cancelAnimationFrame(y)}));let I=Ot(Yn([])),b,M=Ot(null),D=Ot(!1);Bt(()=>{{const K=localStorage.getItem("portfolio-viewpoints");if(K)try{Ze(I,JSON.parse(K),!0)}catch{}}});function N(){localStorage.setItem("portfolio-viewpoints",JSON.stringify(U(I)))}function z(){b&&(Ze(I,[...U(I),{id:Date.now().toString(),name:`View ${U(I).length+1}`,camera:b(),settings:{ambientColor:U(n),ambientIntensity:U(s),directionalIntensity:U(r),waterColor:U(a),skyElevation:U(o),skyTurbidity:U(l),fogColor:U(c),fogDensity:U(h),godRaysEnabled:U(u),godRaysIntensity:U(d)}}],!0),N())}function W(K){Ze(n,K.settings.ambientColor,!0),Ze(s,K.settings.ambientIntensity,!0),Ze(r,K.settings.directionalIntensity,!0),Ze(a,K.settings.waterColor,!0),Ze(o,K.settings.skyElevation,!0),Ze(l,K.settings.skyTurbidity,!0),Ze(c,K.settings.fogColor,!0),Ze(h,K.settings.fogDensity,!0),Ze(u,K.settings.godRaysEnabled,!0),Ze(d,K.settings.godRaysIntensity,!0),Ze(M,{...K.camera},!0),setTimeout(()=>Ze(M,null),100)}function j(K){Ze(I,U(I).filter(C=>C.id!==K),!0),N()}function k(K){navigator.clipboard.writeText(JSON.stringify({camera:K.camera,settings:K.settings},null,2))}function ne(K){b=K,Ze(D,!0)}var G=K1();av("1uha8ag",K=>{iv(()=>{sv.title="Portfolio | Frej Sundqvist"})});var le=kt(G),xe=lt(le);jw(xe,{children:(K,C)=>{U1(K,{get ambientColor(){return U(n)},get ambientIntensity(){return U(s)},get directionalIntensity(){return U(r)},get waterColor(){return U(a)},get skyElevation(){return U(o)},get skyTurbidity(){return U(l)},get fogColor(){return U(c)},get fogDensity(){return U(h)},get godRaysEnabled(){return U(u)},get godRaysIntensity(){return U(d)},get cameraPathProgress(){return U(v)},onCameraReady:ne,get setCameraState(){return U(M)}})},$$slots:{default:!0}}),at(le),Ch(le,K=>m=K,()=>m);var ye=We(le,2);{var Ie=K=>{V1(K,{get progress(){return U(g)},from:{x:"50%",y:"70%",anchorX:.5,anchorY:.5},to:{x:"5%",y:"5%",anchorX:0,anchorY:0},endAt:.25,revealOffset:400,revealDuration:1200,revealDelay:300,children:(C,oe)=>{z1(C,{roundness:16,paddingX:1.5,paddingY:1,blur:12,interactive:!1,children:(te,ce)=>{var $=X1(),me=We(kt($),2);G1(me,{get progress(){return U(g)},startAt:.25,endAt:.4,maxSize:"80px",children:(re,H)=>{var X=W1();yt(re,X)},$$slots:{default:!0}}),yt(te,$)},$$slots:{default:!0}})},$$slots:{default:!0}})};aa(ye,K=>{U(D)&&K(Ie)})}var ge=We(ye,2),V=lt(ge),ae=lt(V),be=lt(ae);On(be),sd(),at(ae);var he=We(ae,2);{var Se=K=>{var C=q1(),oe=kt(C),te=lt(oe);On(te);var ce=We(te,2);Ho(ce,21,()=>ei,cp,(re,H,X)=>{var w=Y1();Wi(()=>Ol(w,`left: ${X/(ei.length-1)*100}%`)),yt(re,w)}),at(ce),sd(2),at(oe);var $=We(oe,2),me=lt($);at($),Wi(re=>ai(me,`${re??""}%`),[()=>(U(g)*100).toFixed(0)]),ri(te,()=>U(g),re=>Ze(g,re)),yt(K,C)};aa(he,K=>{U(f)&&K(Se)})}at(V);var Ue=We(V,2),Te=lt(Ue);Te.__click=z;var it=We(Te,2);Ho(it,17,()=>U(I),K=>K.id,(K,C)=>{var oe=Z1(),te=lt(oe);te.__click=()=>W(U(C));var ce=lt(te,!0);at(te);var $=We(te,2);$.__click=()=>k(U(C));var me=We($,2);me.__click=()=>j(U(C).id),at(oe),Wi(()=>ai(ce,U(C).name)),yt(K,oe)}),at(Ue);var ke=We(Ue,2);F1(ke,{onchange:()=>{},get ambientColor(){return U(n)},set ambientColor(K){Ze(n,K,!0)},get ambientIntensity(){return U(s)},set ambientIntensity(K){Ze(s,K,!0)},get directionalIntensity(){return U(r)},set directionalIntensity(K){Ze(r,K,!0)},get waterColor(){return U(a)},set waterColor(K){Ze(a,K,!0)},get skyElevation(){return U(o)},set skyElevation(K){Ze(o,K,!0)},get skyTurbidity(){return U(l)},set skyTurbidity(K){Ze(l,K,!0)},get fogColor(){return U(c)},set fogColor(K){Ze(c,K,!0)},get fogDensity(){return U(h)},set fogDensity(K){Ze(h,K,!0)},get godRaysEnabled(){return U(u)},set godRaysEnabled(K){Ze(u,K,!0)},get godRaysIntensity(){return U(d)},set godRaysIntensity(K){Ze(d,K,!0)}}),at(ge),hp(be,()=>U(f),K=>Ze(f,K)),yt(i,G),In()}rp(["click"]);export{rA as component};
