(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fl="187",rm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},om={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wf=0,hh=1,Xf=2,am=3,lm=0,Mr=1,qf=2,gr=3,Bi=0,Mn=1,Ue=2,Ui=0,Rs=1,uo=2,uh=3,dh=4,Yf=5,cm=6,ws=100,Zf=101,$f=102,Jf=103,Kf=104,Qf=200,jf=201,tp=202,ep=203,Ih=204,Lh=205,np=206,ip=207,sp=208,rp=209,op=210,ap=211,lp=212,cp=213,hp=214,Xa=0,qa=1,Ya=2,wr=3,Za=4,$a=5,Ja=6,Ka=7,Do=0,up=1,dp=2,hi=0,Dh=1,Nh=2,Uh=3,Fh=4,Oh=5,Bh=6,zh=7,fh="attached",fp="detached",Ol=300,zi=301,Ls=302,to=303,eo=304,fo=1e3,An=1001,Ds=1002,Be=1003,kh=1004,hm=1004,xr=1005,um=1005,Re=1006,no=1007,dm=1007,kn=1008,fm=1008,Dn=1009,Vh=1010,Gh=1011,Tr=1012,Bl=1013,Qn=1014,En=1015,je=1016,zl=1017,kl=1018,Ns=1020,Hh=35902,Wh=35899,Xh=1021,qh=1022,un=1023,ki=1026,Ni=1027,Vl=1028,No=1029,es=1030,Gl=1031,pm=1032,Hl=1033,io=33776,so=33777,ro=33778,oo=33779,Qa=35840,ja=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,ol=37489,po=37490,al=37491,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,xl=37817,vl=37818,_l=37819,yl=37820,Ml=37821,Sl=36492,bl=36494,wl=36495,Tl=36283,Al=36284,mo=36285,El=36286,pp=2200,mp=2201,gp=2202,go=2300,Cl=2301,Ba=2302,ph=2303,Ts=2400,As=2401,xo=2402,Wl=2500,Yh=2501,mm=0,gm=1,xm=2,xp=3200,vp=3201,vm=3202,_m=3203,Vi=0,_p=1,Zn="",yn="srgb",ns="srgb-linear",vo="linear",Ae="srgb",ym="",Mm="rg",Sm="ga",bm=0,za=7680,wm=7681,Tm=7682,Am=7683,Em=34055,Cm=34056,Rm=5386,Pm=512,Im=513,Lm=514,Dm=515,Nm=516,Um=517,Fm=518,yp=519,Mp=512,Sp=513,bp=514,Zh=515,wp=516,Tp=517,$h=518,Jh=519,Xl=35044,Om=35048,Bm=35040,zm=35045,km=35049,Vm=35041,Gm=35046,Hm=35050,Wm=35042,Xm="100",mh="300 es",Vn=2e3,Us=2001,qm={COMPUTE:"compute",RENDER:"render"},Ym={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Zm={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},$m={TEXTURE_COMPARE:"depthTextureCompare"},Jm={NONE:0,SHARED:1,FULL:2};function Km(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const Qm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function vr(s,t){return new Qm[s](t)}function Ap(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _o(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ep(){const s=_o("canvas");return s.style.display="block",s}const Xu={};let is=null;function jm(s){is=s}function tg(){return is}function yo(...s){const t="THREE."+s.shift();is?is("log",t,...s):console.log(t,...s)}function Cp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function bt(...s){s=Cp(s);const t="THREE."+s.shift();if(is)is("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=Cp(s);const t="THREE."+s.shift();if(is)is("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Fi(...s){const t=s.join(" ");t in Xu||(Xu[t]=!0,bt(...s))}function eg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ng={[Xa]:Xa,[Ya]:Ja,[Za]:Za,[wr]:$a,[qa]:qa,[Ja]:Ya,[Ka]:Ka,[$a]:wr};class fi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qu=1234567;const Ps=Math.PI/180,Ar=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[t&255]+gn[t>>8&255]+"-"+gn[t>>16&15|64]+gn[t>>24&255]+"-"+gn[e&63|128]+gn[e>>8&255]+"-"+gn[e>>16&255]+gn[e>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function Kh(s,t){return(s%t+t)%t}function ig(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function sg(s,t,e){return s!==t?(e-s)/(t-s):0}function ao(s,t,e){return(1-e)*s+e*t}function rg(s,t,e,n){return ao(s,t,1-Math.exp(-e*n))}function og(s,t=1){return t-Math.abs(Kh(s,t*2)-t)}function ag(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function lg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function cg(s,t){return s+Math.floor(Math.random()*(t-s+1))}function hg(s,t){return s+Math.random()*(t-s)}function ug(s){return s*(.5-Math.random())}function dg(s){s!==void 0&&(qu=s);let t=qu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fg(s){return s*Ps}function pg(s){return s*Ar}function mg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function gg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ql(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Es(s,t){if(t.constructor===Float32Array)return s;const e=ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function _n(s,t){if(t.constructor===Float32Array)return s;const e=ql(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const hn={DEG2RAD:Ps,RAD2DEG:Ar,generateUUID:jn,clamp:Jt,euclideanModulo:Kh,mapLinear:ig,inverseLerp:sg,lerp:ao,damp:rg,pingpong:og,smoothstep:ag,smootherstep:lg,randInt:cg,randFloat:hg,randFloatSpread:ug,seededRandom:dg,degToRad:fg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:Rp,setQuaternionFromProperEuler:xg,normalize:_n,denormalize:Es},Ru=class Ru{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ru.prototype.isVector2=!0;let Q=Ru;class ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Pu=class Pu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pu.prototype.isVector3=!0;let E=Pu;const bc=new E,Yu=new ln,Iu=class Iu{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],M=i[4],y=i[7],w=i[2],b=i[5],_=i[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*M+l*b,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+d*w,r[4]=c*m+h*M+d*b,r[7]=c*g+h*y+d*_,r[2]=u*x+f*v+p*w,r[5]=u*m+f*M+p*b,r[8]=u*g+f*y+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wc.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wc.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Iu.prototype.isMatrix3=!0;let te=Iu;const wc=new te,Zu=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vg(){const s={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(i.r=Sr(i.r),i.g=Sr(i.g),i.b=Sr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ns]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:n,transfer:Ae,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),s}const ue=vg();function Oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Sr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class Pp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zs===void 0&&(Zs=_o("canvas")),Zs.width=t.width,Zs.height=t.height;const i=Zs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Zs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=_o("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _g=0;class yi{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Tc(i[o].image)):r.push(Tc(i[o]))}else r=Tc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Pp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(bt("Texture: Unable to serialize Texture."),{})}class yg extends yi{constructor(t=null){Fi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let Mg=0;const Ac=new E;class ke extends fi{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=An,i=An,r=Re,o=kn,a=un,l=Dn,c=ke.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=jn(),this.name="",this.source=new yi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case An:t.x=t.x<0?0:1;break;case Ds:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case An:t.y=t.y<0?0:1;break;case Ds:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ol;ke.DEFAULT_ANISOTROPY=1;const Lu=class Lu{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(f+1)/2,w=(g+1)/2,b=(h+u)/4,_=(d+x)/4,S=(p+m)/4;return M>y&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=_/n):y>w?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=b/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=_/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Lu.prototype.isVector4=!0;let Se=Lu;class Qh extends fi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new yi(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends Qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yl extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sg extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Yl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Zl extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class bg extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Zl(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const Ul=class Ul{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ul().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wg,t,Tg)}lookAt(t,e,n){const i=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Yi.crossVectors(n,On),Yi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Yi.crossVectors(n,On)),Yi.normalize(),Xo.crossVectors(On,Yi),i[0]=Yi.x,i[4]=Xo.x,i[8]=On.x,i[1]=Yi.y,i[5]=Xo.y,i[9]=On.y,i[2]=Yi.z,i[6]=Xo.z,i[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],M=n[7],y=n[11],w=n[15],b=i[0],_=i[4],S=i[8],I=i[12],R=i[1],C=i[5],D=i[9],z=i[13],L=i[2],k=i[6],q=i[10],B=i[14],st=i[3],G=i[7],J=i[11],Z=i[15];return r[0]=o*b+a*R+l*L+c*st,r[4]=o*_+a*C+l*k+c*G,r[8]=o*S+a*D+l*q+c*J,r[12]=o*I+a*z+l*B+c*Z,r[1]=h*b+d*R+u*L+f*st,r[5]=h*_+d*C+u*k+f*G,r[9]=h*S+d*D+u*q+f*J,r[13]=h*I+d*z+u*B+f*Z,r[2]=p*b+x*R+m*L+g*st,r[6]=p*_+x*C+m*k+g*G,r[10]=p*S+x*D+m*q+g*J,r[14]=p*I+x*z+m*B+g*Z,r[3]=v*b+M*R+y*L+w*st,r[7]=v*_+M*C+y*k+w*G,r[11]=v*S+M*D+y*q+w*J,r[15]=v*I+M*z+y*B+w*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*u,M=a*f-c*d,y=a*u-l*d,w=o*f-c*h,b=o*u-l*h,_=o*d-a*h;return e*(x*v-m*M+g*y)-n*(p*v-m*w+g*b)+i*(p*M-x*w+g*_)-r*(p*y-x*b+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-n*o,M=e*l-i*o,y=e*c-r*o,w=n*l-i*a,b=n*c-r*a,_=i*c-r*l,S=h*x-d*p,I=h*m-u*p,R=h*g-f*p,C=d*m-u*x,D=d*g-f*x,z=u*g-f*m,L=v*z-M*D+y*C+w*R-b*I+_*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return t[0]=(a*z-l*D+c*C)*k,t[1]=(i*D-n*z-r*C)*k,t[2]=(x*_-m*b+g*w)*k,t[3]=(u*b-d*_-f*w)*k,t[4]=(l*R-o*z-c*I)*k,t[5]=(e*z-i*R+r*I)*k,t[6]=(m*y-p*_-g*M)*k,t[7]=(h*_-u*y+f*M)*k,t[8]=(o*D-a*R+c*S)*k,t[9]=(n*R-e*D-r*S)*k,t[10]=(p*b-x*y+g*v)*k,t[11]=(d*y-h*b-f*v)*k,t[12]=(a*I-o*C-l*S)*k,t[13]=(e*C-n*I+i*S)*k,t[14]=(x*M-p*w-m*v)*k,t[15]=(h*w-d*M+u*v)*k,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,v=l*c,M=l*h,y=l*d,w=n.x,b=n.y,_=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+y)*w,i[2]=(p-M)*w,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+g))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+M)*_,i[9]=(m-v)*_,i[10]=(1-(u+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=$s.set(i[0],i[1],i[2]).length();const a=$s.set(i[4],i[5],i[6]).length(),l=$s.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ni.copy(this);const c=1/o,h=1/a,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,e.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Vn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Vn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Us)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Vn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Vn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Us)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ul.prototype.isMatrix4=!0;let Yt=Ul;const $s=new E,ni=new Yt,wg=new E(0,0,0),Tg=new E(1,1,1),Yi=new E,Xo=new E,On=new E,Ju=new Yt,Ku=new ln;class Xn{constructor(t=0,e=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ju.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ju,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class $l{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ag=0;const Qu=new E,Js=new ln,Ai=new Yt,qo=new E,Br=new E,Eg=new E,Cg=new ln,ju=new E(1,0,0),td=new E(0,1,0),ed=new E(0,0,1),nd={type:"added"},Rg={type:"removed"},Ks={type:"childadded",child:null},Ec={type:"childremoved",child:null};class re extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new E,e=new Xn,n=new ln,i=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new te}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(ju,t)}rotateY(t){return this.rotateOnAxis(td,t)}rotateZ(t){return this.rotateOnAxis(ed,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ju,t)}translateY(t){return this.translateOnAxis(td,t)}translateZ(t){return this.translateOnAxis(ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qo.copy(t):qo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Br,qo,this.up):Ai.lookAt(qo,Br,this.up),this.quaternion.setFromRotationMatrix(Ai),i&&(Ai.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(Ai),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rg),Ec.child=t,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nd),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,Eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Cg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}re.DEFAULT_UP=new E(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gt extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function Cc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Kh(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cc(o,r,t+1/3),this.g=Cc(o,r,t),this.b=Cc(o,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=yn){function n(r){r!==void 0&&parseFloat(r)<1&&bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const n=Ip[t.toLowerCase()];return n!==void 0?this.setHex(n,e):bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return ue.workingToColorSpace(xn.copy(this),t),Math.round(Jt(xn.r*255,0,255))*65536+Math.round(Jt(xn.g*255,0,255))*256+Math.round(Jt(xn.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(xn.copy(this),e);const n=xn.r,i=xn.g,r=xn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=yn){ue.workingToColorSpace(xn.copy(this),t);const e=xn.r,n=xn.g,i=xn.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zi),this.setHSL(Zi.h+t,Zi.s+e,Zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zi),t.getHSL(Yo);const n=ao(Zi.h,Yo.h,e),i=ao(Zi.s,Yo.s,e),r=ao(Zi.l,Yo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new nt;nt.NAMES=Ip;class Jl{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new nt(t),this.density=e}clone(){return new Jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new nt(t),this.near=e,this.far=n}clone(){return new Kl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jh extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ii=new E,Ei=new E,Rc=new E,Ci=new E,Qs=new E,js=new E,id=new E,Pc=new E,Ic=new E,Lc=new E,Dc=new Se,Nc=new Se,Uc=new Se;class Nn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ii.subVectors(i,e),Ei.subVectors(n,e),Rc.subVectors(t,e);const o=ii.dot(ii),a=ii.dot(Ei),l=ii.dot(Rc),c=Ei.dot(Ei),h=Ei.dot(Rc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Dc.setScalar(0),Nc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,e),Nc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Nc,r.y),o.addScaledVector(Uc,r.z),o}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),Ei.subVectors(t,e),ii.cross(Ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ii.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Qs.subVectors(i,n),js.subVectors(r,n),Pc.subVectors(t,n);const l=Qs.dot(Pc),c=js.dot(Pc);if(l<=0&&c<=0)return e.copy(n);Ic.subVectors(t,i);const h=Qs.dot(Ic),d=js.dot(Ic);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(Qs,o);Lc.subVectors(t,r);const f=Qs.dot(Lc),p=js.dot(Lc);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(js,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return id.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(id,a);const g=1/(m+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(Qs,o).addScaledVector(js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Sn{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(t.matrixWorld),this.union(Zo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zr),$o.subVectors(this.max,zr),tr.subVectors(t.a,zr),er.subVectors(t.b,zr),nr.subVectors(t.c,zr),$i.subVectors(er,tr),Ji.subVectors(nr,er),ds.subVectors(tr,nr);let e=[0,-$i.z,$i.y,0,-Ji.z,Ji.y,0,-ds.z,ds.y,$i.z,0,-$i.x,Ji.z,0,-Ji.x,ds.z,0,-ds.x,-$i.y,$i.x,0,-Ji.y,Ji.x,0,-ds.y,ds.x,0];return!Fc(e,tr,er,nr,$o)||(e=[1,0,0,0,1,0,0,0,1],!Fc(e,tr,er,nr,$o))?!1:(Jo.crossVectors($i,Ji),e=[Jo.x,Jo.y,Jo.z],Fc(e,tr,er,nr,$o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ri=[new E,new E,new E,new E,new E,new E,new E,new E],si=new E,Zo=new Sn,tr=new E,er=new E,nr=new E,$i=new E,Ji=new E,ds=new E,zr=new E,$o=new E,Jo=new E,fs=new E;function Fc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){fs.fromArray(s,r);const a=i.x*Math.abs(fs.x)+i.y*Math.abs(fs.y)+i.z*Math.abs(fs.z),l=t.dot(fs),c=e.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Di=Ig();function Ig(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function In(s){Math.abs(s)>65504&&bt("DataUtils.toHalfFloat(): Value out of range."),s=Jt(s,-65504,65504),Di.floatView[0]=s;const t=Di.uint32View[0],e=t>>23&511;return Di.baseTable[e]+((t&8388607)>>Di.shiftTable[e])}function Jr(s){const t=s>>10;return Di.uint32View[0]=Di.mantissaTable[Di.offsetTable[t]+(s&1023)]+Di.exponentTable[t],Di.floatView[0]}class Lg{static toHalfFloat(t){return In(t)}static fromHalfFloat(t){return Jr(t)}}const $e=new E,Ko=new Q;let Dg=0;class de extends fi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xl,this.updateRanges=[],this.gpuType=En,this.version=0,this._normalizationScale=t!==void 0?ql(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ko.fromBufferAttribute(this,e),Ko.applyMatrix3(t),this.setXY(e,Ko.x,Ko.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Es(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):_n(t,this.array)}}class Ng extends de{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Ug extends de{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Fg extends de{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class Og extends de{constructor(t,e,n){super(new Int16Array(t),e,n)}}class tu extends de{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bg extends de{constructor(t,e,n){super(new Int32Array(t),e,n)}}class eu extends de{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class zg extends de{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=Jr(this.array[t*this.itemSize]);return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=In(e),this}getY(t){let e=Jr(this.array[t*this.itemSize+1]);return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=In(e),this}getZ(t){let e=Jr(this.array[t*this.itemSize+2]);return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=In(e),this}getW(t){let e=Jr(this.array[t*this.itemSize+3]);return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=In(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=In(e),this.array[t+1]=In(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array)),this.array[t+0]=In(e),this.array[t+1]=In(n),this.array[t+2]=In(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[t+0]=In(e),this.array[t+1]=In(n),this.array[t+2]=In(i),this.array[t+3]=In(r),this}}class At extends de{constructor(t,e,n){super(new Float32Array(t),e,n)}}const kg=new Sn,kr=new E,Oc=new E;class dn{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const e=kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(Oc)),this.expandByPoint(kr.copy(t.center).sub(Oc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Vg=0;const Yn=new Yt,Bc=new re,ir=new E,Bn=new Sn,Vr=new Sn,on=new E;class Zt extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Km(t)?eu:tu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return Bc.lookAt(t),Bc.updateMatrix(),this.applyMatrix4(Bc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Vr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Bn.min,Vr.min),Bn.expandByPoint(on),on.addVectors(Bn.max,Vr.max),Bn.expandByPoint(on)):(Bn.expandByPoint(Vr.min),Bn.expandByPoint(Vr.max))}Bn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(t,c),on.add(ir)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new de(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new E,l[I]=new E;const h=new E,d=new E,u=new E,f=new Q,p=new Q,x=new Q,m=new E,g=new E;function v(I,R,C){c[I]=c[R]=c[C]=1,h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,C),d.sub(h),u.sub(h),p.sub(f),x.sub(f);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(D),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(D),a[I].add(m),a[R].add(m),a[C].add(m),l[I].add(g),l[R].add(g),l[C].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,R=M.length;I<R;++I){const C=M[I],D=C.start,z=C.count;for(let L=D,k=D+z;L<k;L+=3)v(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new E,w=new E,b=new E,_=new E;function S(I){b.fromBufferAttribute(i,I),_.copy(b);const R=a[I];y.copy(R),y.sub(b.multiplyScalar(b.dot(R))).normalize(),w.crossVectors(_,R);const D=w.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,R=n.count;I<R;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new de(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new E,r=new E,o=new E,a=new E,l=new E,c=new E,h=new E,d=new E;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new de(u,h,d)}if(this.index===null)return bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ql{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Xl,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=sd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=sd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function sd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=jn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const wn=new E;class Fs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?ql(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){yo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new de(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){yo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Es(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):_n(t,this.data.array)}}const zc=new E,Gg=new E,Hg=new te;class _i{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=zc.subVectors(n,e).cross(Gg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hg.getNormalMatrix(t),i=this.coplanarPoint(zc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Wg=0;class fn extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Rs,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Lh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){bt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new _i().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nu extends fn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let sr;const Gr=new E,rr=new E,or=new E,ar=new Q,Hr=new Q,Lp=new Yt,Qo=new E,Wr=new E,jo=new E,rd=new Q,kc=new Q,od=new Q;class Dp extends re{constructor(t=new nu){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new Zt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ql(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new Fs(n,3,0,!1)),sr.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=sr,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Lp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ta(Qo.set(-.5,-.5,0),or,o,rr,i,r),ta(Wr.set(.5,-.5,0),or,o,rr,i,r),ta(jo.set(.5,.5,0),or,o,rr,i,r),rd.set(0,0),kc.set(1,0),od.set(1,1);let a=t.ray.intersectTriangle(Qo,Wr,jo,!1,Gr);if(a===null&&(ta(Wr.set(-.5,.5,0),or,o,rr,i,r),kc.set(0,1),a=t.ray.intersectTriangle(Qo,jo,Wr,!1,Gr),a===null))return;const l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:Nn.getInterpolation(Gr,Qo,Wr,jo,rd,kc,od,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function ta(s,t,e,n,i,r){ar.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Hr.x=r*ar.x-i*ar.y,Hr.y=i*ar.x+r*ar.y):Hr.copy(ar),s.copy(t),s.x+=Hr.x,s.y+=Hr.y,s.applyMatrix4(Lp)}const ea=new E,ad=new E;class Np extends re{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ea.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ea);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ea.setFromMatrixPosition(t.matrixWorld),ad.setFromMatrixPosition(this.matrixWorld);const n=ea.distanceTo(ad)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const Pi=new E,Vc=new E,na=new E,ia=new E;class Lr{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vc.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ia.copy(this.origin).sub(Vc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(na),a=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vc).addScaledVector(na,u),f}intersectSphere(t,e){if(t.radius<0)return null;Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),i=Pi.dot(Pi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,M=n.z-o.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let _,S,I,R,C,D,z,L,k,q,B,st;if(y>=w&&y>=b?(I=l,D=d,k=p,st=g,l>=0?(_=c,S=h,R=u,C=f,z=x,L=m,q=v,B=M):(_=h,S=c,R=f,C=u,z=m,L=x,q=M,B=v)):w>=b?(I=c,D=u,k=x,st=v,c>=0?(_=h,S=l,R=f,C=d,z=m,L=p,q=M,B=g):(_=l,S=h,R=d,C=f,z=p,L=m,q=g,B=M)):(I=h,D=f,k=m,st=M,h>=0?(_=l,S=c,R=d,C=u,z=p,L=x,q=g,B=v):(_=c,S=l,R=u,C=d,z=x,L=p,q=v,B=g)),I===0)return null;const G=_/I,J=S/I,Z=1/I,at=R-G*D,Rt=C-J*D,X=z-G*k,ot=L-J*k,Tt=q-G*st,Pt=B-J*st,xt=Tt*ot-Pt*X,Bt=at*Pt-Rt*Tt,Te=X*Rt-ot*at;if(i){if(xt<0||Bt<0||Te<0)return null}else if((xt<0||Bt<0||Te<0)&&(xt>0||Bt>0||Te>0))return null;const Ht=xt+Bt+Te;if(Ht===0)return null;const jt=Z*(xt*D+Bt*k+Te*st);return(Ht>0?jt<0:jt>0)?null:this.at(jt/Ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kn extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ld=new Yt,ps=new Lr,sa=new dn,cd=new E,ra=new E,oa=new E,aa=new E,Gc=new E,la=new E,hd=new E,ca=new E;class qt extends re{constructor(t=new Zt,e=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Gc.fromBufferAttribute(d,t),o?la.addScaledVector(Gc,h):la.addScaledVector(Gc.sub(e),h))}e.add(la)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),ps.copy(t.ray).recast(t.near),!(sa.containsPoint(ps.origin)===!1&&(ps.intersectSphere(sa,cd)===null||ps.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),ps.copy(t.ray).applyMatrix4(ld),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ps)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=M;y<w;y+=3){const b=a.getX(y),_=a.getX(y+1),S=a.getX(y+2);i=ha(this,g,t,n,c,h,d,b,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);i=ha(this,o,t,n,c,h,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,w=M;y<w;y+=3){const b=y,_=y+1,S=y+2;i=ha(this,g,t,n,c,h,d,b,_,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=m,M=m+1,y=m+2;i=ha(this,o,t,n,c,h,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Xg(s,t,e,n,i,r,o,a){let l;if(t.side===Mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Bi,a),l===null)return null;ca.copy(a),ca.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:s}}function ha(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ra),s.getVertexPosition(l,oa),s.getVertexPosition(c,aa);const h=Xg(s,t,e,n,ra,oa,aa,hd);if(h){const d=new E;Nn.getBarycoord(hd,ra,oa,aa,d),i&&(h.uv=Nn.getInterpolatedAttribute(i,a,l,c,d,new Q)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,l,c,d,new Q)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,d,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new E,materialIndex:0};Nn.getNormal(ra,oa,aa,u.normal),h.face=u,h.barycoord=d}return h}const Xr=new Se,ud=new Se,dd=new Se,qg=new Se,fd=new Yt,ua=new E,Hc=new dn,pd=new Yt,Wc=new Lr;class Up extends qt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ua),this.boundingBox.expandByPoint(ua)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ua),this.boundingSphere.expandByPoint(ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(i),t.ray.intersectsSphere(Hc)!==!1&&(pd.copy(i).invert(),Wc.copy(t.ray).applyMatrix4(pd),!(this.boundingBox!==null&&Wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Wc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():bt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ud.fromBufferAttribute(i.attributes.skinIndex,t),dd.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(Xr.copy(e),e.set(0,0,0,0)):(Xr.set(e.x,e.y,e.z,1),e.set(0,0,0)),Xr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=dd.getComponent(r);if(o!==0){const a=ud.getComponent(r);fd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(qg.copy(Xr).applyMatrix4(fd),o)}}return e.isVector4&&(e.w=Xr.w),e.applyMatrix4(this.bindMatrixInverse)}}class iu extends re{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cn extends ke{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Be,h=Be,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new Yt,Yg=new Yt;class jl{constructor(t=[],e=[]){this.uuid=jn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){bt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Yg;md.multiplyMatrices(a,e[r]),md.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new jl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Cn(e,t,t,un,En);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(bt("Skeleton: No bone found with UUID:",r),o=new iu),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Er extends de{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const lr=new Yt,gd=new Yt,da=[],xd=new Sn,Zg=new Yt,qr=new qt,Yr=new dn;class Gn extends qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),xd.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(xd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),Yr.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,lr),gd.multiplyMatrices(n,lr),qr.matrixWorld=gd,qr.raycast(t,da);for(let o=0,a=da.length;o<a;o++){const l=da[o];l.instanceId=r,l.object=this,e.push(l)}da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cn(new Float32Array(i*this.count),i,this.count,Vl,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ms=new dn,$g=new Q(.5,.5),fa=new E;class Os{constructor(t=new _i,e=new _i,n=new _i,i=new _i,r=new _i,o=new _i){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],M=r[13],y=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-p,w-v).normalize(),i[1].setComponents(c+o,f+h,g+p,w+v).normalize(),i[2].setComponents(c+a,f+d,g+x,w+M).normalize(),i[3].setComponents(c-a,f-d,g-x,w-M).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,g-m,w-y).normalize();else if(i[4].setComponents(c-l,f-u,g-m,w-y).normalize(),e===Vn)i[5].setComponents(c+l,f+u,g+m,w+y).normalize();else if(e===Us)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);const e=$g.distanceTo(t.center);return ms.radius=.7071067811865476+e,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fa.x=i.normal.x>0?t.max.x:t.min.x,fa.y=i.normal.y>0?t.max.y:t.min.y,fa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const vd=new Yt;class Uo{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];vd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Os),n[i].setFromProjectionMatrix(vd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Os),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new Uo().copy(this)}}function Xc(s,t){return s-t}function Jg(s,t){return s.z-t.z}function Kg(s,t){return t.z-s.z}class Qg{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Pn=new Yt,jg=new nt(1,1,1),tx=new Os,ex=new Uo,pa=new Sn,gs=new dn,qc=new E,_d=new E,yd=new E,nx=new E,Yc=new Qg,vn=new qt,ma=[];function ix(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function mi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Fp extends qt{constructor(t,e,n=e*2,i){super(new Zt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new Cn(e,t,t,un,En);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new Cn(e,t,t,No,Qn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new Cn(e,t,t,un,En);n.colorSpace=ue.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new de(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new de(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingBoxAt(r,pa).applyMatrix4(Pn),t.union(pa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Pn),this.getBoundingSphereAt(r,gs).applyMatrix4(Pn),t.union(gs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Xc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Pn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(jg.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Xc),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);ix(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=t-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:x,itemSize:m}=p;x.copyWithin(t*m,h*m,(h+d)*m),p.addUpdateRange(t*m,d*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new Sn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(qc.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new dn;this.getBoundingBoxAt(t,pa),pa.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;o&&(d=o.getX(d)),qc.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(qc))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Xc);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);mi(this._multiDrawCounts,i),mi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;const o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);mi(this._mergedDrawCounts,o),mi(this._mergedDrawStarts,a),mi(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;const c=this._indirectTexture,h=this._matricesTexture,d=this._colorsTexture;c.dispose(),this._initIndirectTexture(),mi(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),mi(h.image.data,this._matricesTexture.image.data),d&&(d.dispose(),this._initColorsTexture(),mi(d.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Zt,this._initializeGeometry(r));const o=this.geometry;r.index&&mi(r.index.array,o.index.array);for(const a in r.attributes)mi(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;vn.material=this.material,vn.geometry.index=o.index,vn.geometry.attributes=o.attributes,vn.geometry.boundingBox===null&&(vn.geometry.boundingBox=new Sn),vn.geometry.boundingSphere===null&&(vn.geometry.boundingSphere=new dn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];vn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,vn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,vn.geometry.boundingBox),this.getBoundingSphereAt(c,vn.geometry.boundingSphere),vn.raycast(t,ma);for(let d=0,u=ma.length;d<u;d++){const f=ma[d];f.object=this,f.batchId=a,e.push(f)}ma.length=0}vn.material=null,vn.geometry.index=null,vn.geometry.attributes={},vn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=e.getIndex();let o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._mergedDrawStarts,u=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,v=t.isArrayCamera?ex:tx;x&&(t.isArrayCamera?v.setFromArrayCamera(t):(Pn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),v.setFromProjectionMatrix(Pn,t.coordinateSystem,t.reversedDepth)));let M=0,y=0;if(this.sortObjects){Pn.copy(this.matrixWorld).invert(),_d.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Pn),yd.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Pn);for(let _=0,S=l.length;_<S;_++)if(l[_].visible&&l[_].active){const I=l[_].geometryIndex;this.getMatrixAt(_,Pn),this.getBoundingSphereAt(I,gs).applyMatrix4(Pn);let R=!1;if(x&&(R=!v.intersectsSphere(gs)),!R){const C=p[I],D=nx.subVectors(gs.center,_d).dot(yd);Yc.push(C.start,C.count,D,_)}}const w=Yc.list,b=this.customSort;b===null?w.sort(n.transparent?Kg:Jg):b.call(this,w,t);for(let _=0,S=w.length;_<S;_++){const I=w[_],R=I.start*o*a,C=I.count*a;i==="merged"?y>0&&d[y-1]===R&&u[y-1]===C?f[y-1]++:(d[y]=R,u[y]=C,f[y]=1,y++):(c[M]=R,h[M]=C),g[M]=I.index,M++}Yc.reset()}else for(let w=0,b=l.length;w<b;w++)if(l[w].visible&&l[w].active){const _=l[w].geometryIndex;let S=!1;if(x&&(this.getMatrixAt(w,Pn),this.getBoundingSphereAt(_,gs).applyMatrix4(Pn),S=!v.intersectsSphere(gs)),!S){const I=p[_],R=I.start*o*a,C=I.count*a;i==="merged"?y>0&&d[y-1]===R&&u[y-1]===C?f[y-1]++:(d[y]=R,u[y]=C,f[y]=1,y++):(c[M]=R,h[M]=C),g[M]=w,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=y,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}}class Rn extends fn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rl=new E,Pl=new E,Md=new Yt,Zr=new Lr,ga=new dn,Zc=new E,Sd=new E;class ss extends re{constructor(t=new Zt,e=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Rl.fromBufferAttribute(e,i-1),Pl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Rl.distanceTo(Pl);t.setAttribute("lineDistance",new At(n,1))}else bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(i),ga.radius+=r,t.ray.intersectsSphere(ga)===!1)return;Md.copy(i).invert(),Zr.copy(t.ray).applyMatrix4(Md);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),v=h.getX(x+1),M=xa(this,t,Zr,l,g,v,x);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=xa(this,t,Zr,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=xa(this,t,Zr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=xa(this,t,Zr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xa(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Rl.fromBufferAttribute(a,i),Pl.fromBufferAttribute(a,r),e.distanceSqToSegment(Rl,Pl,Zc,Sd)>n)return;Zc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Zc);if(!(c<t.near||c>t.far))return{distance:c,point:Sd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const bd=new E,wd=new E;class Si extends ss{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)bd.fromBufferAttribute(e,i),wd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bd.distanceTo(wd);t.setAttribute("lineDistance",new At(n,1))}else bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Op extends ss{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class su extends fn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Td=new Yt,gh=new Lr,va=new dn,_a=new E;class tc extends re{constructor(t=new Zt,e=new su){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Td.copy(i).invert(),gh.copy(t.ray).applyMatrix4(Td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){const m=c.getX(p);_a.fromBufferAttribute(d,m),Ad(_a,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)_a.fromBufferAttribute(d,p),Ad(_a,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ad(s,t,e,n,i,r,o){const a=gh.distanceSqToPoint(s);if(a<e){const l=new E;gh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Bp extends ke{constructor(t,e,n,i,r=Re,o=Re,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class sx extends Bp{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class rx extends ke{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Be,this.minFilter=Be,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new yi(Object.assign({},t.image)),this}}class ec extends ke{constructor(t=[],e,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class ox extends ec{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=An,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ax extends ec{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,zi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Fo extends ke{constructor(t=[],e=zi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nc extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lx extends ke{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Bs extends ke{constructor(t,e,n=Qn,i,r,o,a=Be,l=Be,c,h=ki,d=1){if(h!==ki&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class ru extends Bs{constructor(t,e=Qn,n=zi,i,r,o=Be,a=Be,l,c=ki){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ou extends ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rs extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function p(x,m,g,v,M,y,w,b,_,S,I){const R=y/_,C=w/S,D=y/2,z=w/2,L=b/2,k=_+1,q=S+1;let B=0,st=0;const G=new E;for(let J=0;J<q;J++){const Z=J*C-z;for(let at=0;at<k;at++){const Rt=at*R-D;G[x]=Rt*v,G[m]=Z*M,G[g]=L,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=b>0?1:-1,h.push(G.x,G.y,G.z),d.push(at/_),d.push(1-J/S),B+=1}}for(let J=0;J<S;J++)for(let Z=0;Z<_;Z++){const at=u+Z+k*J,Rt=u+Z+k*(J+1),X=u+(Z+1)+k*(J+1),ot=u+(Z+1)+k*J;l.push(at,Rt,ot),l.push(Rt,X,ot),st+=6}a.addGroup(f,st,I),f+=st,u+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oo extends Zt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=i+1,m=new E,g=new E;for(let v=0;v<=p;v++){let M=0,y=0,w=0,b=0;if(v<=n){const I=v/n,R=I*Math.PI/2;y=-h-t*Math.cos(R),w=t*Math.sin(R),b=-t*Math.cos(R),M=I*d}else if(v<=n+r){const I=(v-n)/r;y=-h+I*e,w=t,b=0,M=d+I*u}else{const I=(v-n-r)/n,R=I*Math.PI/2;y=h+t*Math.sin(R),w=t*Math.cos(R),b=t*Math.sin(R),M=d+u+I*d}const _=Math.max(0,Math.min(1,M/f));let S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let I=0;I<=i;I++){const R=I/i,C=R*Math.PI*2,D=Math.sin(C),z=Math.cos(C);g.x=-w*z,g.y=y,g.z=w*D,a.push(g.x,g.y,g.z),m.set(-w*z,b,w*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+S,_)}if(v>0){const I=(v-1)*x;for(let R=0;R<i;R++){const C=I+R,D=I+R+1,z=v*x+R,L=v*x+R+1;o.push(C,D,z),o.push(D,L,z)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Hs extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new E,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class He extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function v(){const y=new E,w=new E;let b=0;const _=(e-t)/n;for(let S=0;S<=r;S++){const I=[],R=S/r,C=R*(e-t)+t;for(let D=0;D<=i;D++){const z=D/i,L=z*l+a,k=Math.sin(L),q=Math.cos(L);w.x=C*k,w.y=-R*n+m,w.z=C*q,d.push(w.x,w.y,w.z),y.set(k,_,q).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-R),I.push(p++)}x.push(I)}for(let S=0;S<i;S++)for(let I=0;I<r;I++){const R=x[I][S],C=x[I+1][S],D=x[I+1][S+1],z=x[I][S+1];(t>0||I!==0)&&(h.push(R,C,z),b+=3),(e>0||I!==r-1)&&(h.push(C,D,z),b+=3)}c.addGroup(g,b,0),g+=b}function M(y){const w=p,b=new Q,_=new E;let S=0;const I=y===!0?t:e,R=y===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),p++;const C=p;for(let D=0;D<=i;D++){const L=D/i*l+a,k=Math.cos(L),q=Math.sin(L);_.x=I*q,_.y=m*R,_.z=I*k,d.push(_.x,_.y,_.z),u.push(0,R,0),b.x=k*.5+.5,b.y=q*.5*R+.5,f.push(b.x,b.y),p++}for(let D=0;D<i;D++){const z=w+D,L=C+D;y===!0?h.push(L,L+1,z):h.push(L+1,L,z),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class os extends He{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new os(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends Zt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new E,y=new E,w=new E;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],y),f(e[b+2],w),l(M,y,w,v)}function l(v,M,y,w){const b=w+1,_=[];for(let S=0;S<=b;S++){_[S]=[];const I=v.clone().lerp(y,S/b),R=M.clone().lerp(y,S/b),C=b-S;for(let D=0;D<=C;D++)D===0&&S===b?_[S][D]=I:_[S][D]=I.clone().lerp(R,D/C)}for(let S=0;S<b;S++)for(let I=0;I<2*(b-S)-1;I++){const R=Math.floor(I/2);I%2===0?(u(_[S][R+1]),u(_[S+1][R]),u(_[S][R])):(u(_[S][R+1]),u(_[S+1][R+1]),u(_[S+1][R]))}}function c(v){const M=new E;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(v),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){const v=new E;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const y=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;o.push(y,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const M=o[v+0],y=o[v+2],w=o[v+4],b=Math.max(M,y,w),_=Math.min(M,y,w);b>.9&&_<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,M){const y=v*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function p(){const v=new E,M=new E,y=new E,w=new E,b=new Q,_=new Q,S=new Q;for(let I=0,R=0;I<r.length;I+=9,R+=6){v.set(r[I+0],r[I+1],r[I+2]),M.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),b.set(o[R+0],o[R+1]),_.set(o[R+2],o[R+3]),S.set(o[R+4],o[R+5]),w.copy(v).add(M).add(y).divideScalar(3);const C=m(w);x(b,R+0,v,C),x(_,R+2,M,C),x(S,R+4,y,C)}}function x(v,M,y,w){w<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new as(t.vertices,t.indices,t.radius,t.detail)}}class ic extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ic(t.radius,t.detail)}}const ya=new E,Ma=new E,$c=new E,Sa=new Nn;class zp extends Zt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ps*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=Sa;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Sa.getNormal($c),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const M=(v+1)%3,y=d[v],w=d[M],b=Sa[h[v]],_=Sa[h[M]],S=`${y}_${w}`,I=`${w}_${y}`,R=u.get(I);R?($c.dot(R.normal)<=r&&(f.push(b.x,b.y,b.z),f.push(_.x,_.y,_.z)),u.set(I,null)):u.has(S)||u.set(S,{index0:c[v],index1:c[M],normal:$c.clone()})}}for(const p of u.values())if(p){const{index0:x,index1:m}=p;ya.fromBufferAttribute(a,x),Ma.fromBufferAttribute(a,m),f.push(ya.x,ya.y,ya.z),f.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new At(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Q:new E);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,i=[],r=[],o=[],a=new E,l=new Yt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new E)}r[0]=new E,o[0]=new E;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Jt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class sc extends pi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kp extends sc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function au(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ed=new E,Cd=new E,Jc=new au,Kc=new au,Qc=new au;class Vp extends pi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new E){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Cd.subVectors(i[0],i[1]).add(i[0]),c=Cd);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ed.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ed),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Jc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Kc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Qc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Jc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Kc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Qc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jc.calc(l),Kc.calc(l),Qc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new E().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rd(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function cx(s,t){const e=1-s;return e*e*t}function hx(s,t){return 2*(1-s)*s*t}function ux(s,t){return s*s*t}function lo(s,t,e,n){return cx(s,t)+hx(s,e)+ux(s,n)}function dx(s,t){const e=1-s;return e*e*e*t}function fx(s,t){const e=1-s;return 3*e*e*s*t}function px(s,t){return 3*(1-s)*s*s*t}function mx(s,t){return s*s*s*t}function co(s,t,e,n,i){return dx(s,t)+fx(s,e)+px(s,n)+mx(s,i)}class lu extends pi{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(t,i.x,r.x,o.x,a.x),co(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gp extends pi{constructor(t=new E,e=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(t,i.x,r.x,o.x,a.x),co(t,i.y,r.y,o.y,a.y),co(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cu extends pi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hp extends pi{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends pi{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,i.x,r.x,o.x),lo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends pi{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,i.x,r.x,o.x),lo(t,i.y,r.y,o.y),lo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Rd(a,l.x,c.x,h.x,d.x),Rd(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Q().fromArray(i))}return this}}var Il=Object.freeze({__proto__:null,ArcCurve:kp,CatmullRomCurve3:Vp,CubicBezierCurve:lu,CubicBezierCurve3:Gp,EllipseCurve:sc,LineCurve:cu,LineCurve3:Hp,QuadraticBezierCurve:hu,QuadraticBezierCurve3:uu,SplineCurve:du});class Wp extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Il[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Mo extends Wp{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cu(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new hu(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new lu(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new sc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hi extends Mo{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Mo().fromJSON(i))}return this}}function gx(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Xp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Mx(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return So(r,o,e,a,l,c,0),o}function Xp(s,t,e,n,i){let r;if(i===Lx(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Pd(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Pd(o/n|0,s[o],s[o+1],r);return r&&Cr(r,r.next)&&(wo(r),r=r.next),r}function zs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||Oe(e.prev,e,e.next)===0)){if(wo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function So(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Ax(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?vx(s,n,i,r):xx(s)){t.push(l.i,s.i,c.i),wo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=_x(zs(s),t),So(s,t,e,n,i,r,2)):o===2&&yx(s,t,e,n,i,r):So(zs(s),t,e,n,i,r,1);break}}}function xx(s){const t=s.prev,e=s,n=s.next;if(Oe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Kr(i,a,r,l,o,c,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vx(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Oe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=xh(f,p,t,e,n),v=xh(x,m,t,e,n);let M=s.prevZ,y=s.nextZ;for(;M&&M.z>=g&&y&&y.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Kr(a,h,l,d,c,u,M.x,M.y)&&Oe(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Kr(a,h,l,d,c,u,y.x,y.y)&&Oe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&Kr(a,h,l,d,c,u,M.x,M.y)&&Oe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Kr(a,h,l,d,c,u,y.x,y.y)&&Oe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function _x(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Cr(n,i)&&Yp(n,e,e.next,i)&&bo(n,i)&&bo(i,n)&&(t.push(n.i,e.i,i.i),wo(e),wo(e.next),e=s=i),e=e.next}while(e!==s);return zs(e)}function yx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rx(o,a)){let l=Zp(o,a);o=zs(o,o.next),l=zs(l,l.next),So(o,t,e,n,i,r,0),So(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Mx(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Xp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Cx(c))}i.sort(Sx);for(let r=0;r<i.length;r++)e=bx(i[r],e);return e}function Sx(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function bx(s,t){const e=wx(s,t);if(!e)return t;const n=Zp(e,s);return zs(n,n.next),zs(e,e.next)}function wx(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Cr(s,e))return e;do{if(Cr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);bo(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Tx(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Tx(s,t){return Oe(s.prev,s,t.prev)<0&&Oe(t.next,s,s.next)<0}function Ax(s,t,e,n){let i=s;do i.z===0&&(i.z=xh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ex(i)}function Ex(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function xh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Cx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function qp(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Kr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&qp(s,t,e,n,i,r,o,a)}function Rx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Px(s,t)&&(bo(s,t)&&bo(t,s)&&Ix(s,t)&&(Oe(s.prev,s,t.prev)||Oe(s,t.prev,t))||Cr(s,t)&&Oe(s.prev,s,s.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Cr(s,t){return s.x===t.x&&s.y===t.y}function Yp(s,t,e,n){const i=wa(Oe(s,t,e)),r=wa(Oe(s,t,n)),o=wa(Oe(e,n,s)),a=wa(Oe(e,n,t));return!!(i!==r&&o!==a||i===0&&ba(s,e,t)||r===0&&ba(s,n,t)||o===0&&ba(e,s,n)||a===0&&ba(e,t,n))}function ba(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function wa(s){return s>0?1:s<0?-1:0}function Px(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Yp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function bo(s,t){return Oe(s.prev,s,s.next)<0?Oe(s,t,s.next)>=0&&Oe(s,s.prev,t)>=0:Oe(s,t,s.prev)<0||Oe(s,s.next,t)<0}function Ix(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Zp(s,t){const e=vh(s.i,s.x,s.y),n=vh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pd(s,t,e,n){const i=vh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function wo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lx(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Dx{static triangulate(t,e,n=2){return gx(t,e,n)}}class ai{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ai.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Id(t),Ld(n,t);let o=t.length;e.forEach(Id);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ld(n,e[l]);const a=Dx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Id(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ld(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Bo extends Zt{constructor(t=new Hi([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new At(i,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Nx;let M,y=!1,w,b,_,S;if(g){M=g.getSpacedPoints(h),y=!0,u=!1;const it=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,it),b=new E,_=new E,S=new E}u||(m=0,f=0,p=0,x=0);const I=a.extractPoints(c);let R=I.shape;const C=I.holes;if(!ai.isClockWise(R)){R=R.reverse();for(let it=0,pt=C.length;it<pt;it++){const ut=C[it];ai.isClockWise(ut)&&(C[it]=ut.reverse())}}function z(it){const ut=10000000000000001e-36;let It=it[0];for(let St=1;St<=it.length;St++){const ne=St%it.length,zt=it[ne],he=zt.x-It.x,fe=zt.y-It.y,ye=he*he+fe*fe,O=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(It.x),Math.abs(It.y)),Ye=ut*O*O;if(ye<=Ye){it.splice(ne,1),St--;continue}It=zt}}z(R),C.forEach(z);const L=C.length,k=R;for(let it=0;it<L;it++){const pt=C[it];R=R.concat(pt)}function q(it,pt,ut){return pt||kt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(pt,ut)}const B=R.length;function st(it,pt,ut){let It,St,ne;const zt=it.x-pt.x,he=it.y-pt.y,fe=ut.x-it.x,ye=ut.y-it.y,O=zt*zt+he*he,Ye=zt*ye-he*fe;if(Math.abs(Ye)>Number.EPSILON){const ae=Math.sqrt(O),Pe=Math.sqrt(fe*fe+ye*ye),_t=pt.x-he/ae,Ve=pt.y+zt/ae,Xt=ut.x-ye/Pe,Qt=ut.y+fe/Pe,P=((Xt-_t)*ye-(Qt-Ve)*fe)/(zt*ye-he*fe);It=_t+zt*P-it.x,St=Ve+he*P-it.y;const T=It*It+St*St;if(T<=2)return new Q(It,St);ne=Math.sqrt(T/2)}else{let ae=!1;zt>Number.EPSILON?fe>Number.EPSILON&&(ae=!0):zt<-Number.EPSILON?fe<-Number.EPSILON&&(ae=!0):Math.sign(he)===Math.sign(ye)&&(ae=!0),ae?(It=-he,St=zt,ne=Math.sqrt(O)):(It=zt,St=he,ne=Math.sqrt(O/2))}return new Q(It/ne,St/ne)}const G=[];for(let it=0,pt=k.length,ut=pt-1,It=it+1;it<pt;it++,ut++,It++)ut===pt&&(ut=0),It===pt&&(It=0),G[it]=st(k[it],k[ut],k[It]);const J=[];let Z,at=G.concat();for(let it=0,pt=L;it<pt;it++){const ut=C[it];Z=[];for(let It=0,St=ut.length,ne=St-1,zt=It+1;It<St;It++,ne++,zt++)ne===St&&(ne=0),zt===St&&(zt=0),Z[It]=st(ut[It],ut[ne],ut[zt]);J.push(Z),at=at.concat(Z)}let Rt;if(m===0)Rt=ai.triangulateShape(k,C);else{const it=[],pt=[];for(let ut=0;ut<m;ut++){const It=ut/m,St=f*Math.cos(It*Math.PI/2),ne=p*Math.sin(It*Math.PI/2)+x;for(let zt=0,he=k.length;zt<he;zt++){const fe=q(k[zt],G[zt],ne);Bt(fe.x,fe.y,-St),It===0&&it.push(fe)}for(let zt=0,he=L;zt<he;zt++){const fe=C[zt];Z=J[zt];const ye=[];for(let O=0,Ye=fe.length;O<Ye;O++){const ae=q(fe[O],Z[O],ne);Bt(ae.x,ae.y,-St),It===0&&ye.push(ae)}It===0&&pt.push(ye)}}Rt=ai.triangulateShape(it,pt)}const X=Rt.length,ot=p+x;for(let it=0;it<B;it++){const pt=u?q(R[it],at[it],ot):R[it];y?(_.copy(w.normals[0]).multiplyScalar(pt.x),b.copy(w.binormals[0]).multiplyScalar(pt.y),S.copy(M[0]).add(_).add(b),Bt(S.x,S.y,S.z)):Bt(pt.x,pt.y,0)}for(let it=1;it<=h;it++)for(let pt=0;pt<B;pt++){const ut=u?q(R[pt],at[pt],ot):R[pt];y?(_.copy(w.normals[it]).multiplyScalar(ut.x),b.copy(w.binormals[it]).multiplyScalar(ut.y),S.copy(M[it]).add(_).add(b),Bt(S.x,S.y,S.z)):Bt(ut.x,ut.y,d/h*it)}for(let it=m-1;it>=0;it--){const pt=it/m,ut=f*Math.cos(pt*Math.PI/2),It=p*Math.sin(pt*Math.PI/2)+x;for(let St=0,ne=k.length;St<ne;St++){const zt=q(k[St],G[St],It);Bt(zt.x,zt.y,d+ut)}for(let St=0,ne=C.length;St<ne;St++){const zt=C[St];Z=J[St];for(let he=0,fe=zt.length;he<fe;he++){const ye=q(zt[he],Z[he],It);y?Bt(ye.x,ye.y+M[h-1].y,M[h-1].x+ut):Bt(ye.x,ye.y,d+ut)}}}Tt(),Pt();function Tt(){const it=i.length/3;if(u){let pt=0,ut=B*pt;for(let It=0;It<X;It++){const St=Rt[It];Te(St[2]+ut,St[1]+ut,St[0]+ut)}pt=h+m*2,ut=B*pt;for(let It=0;It<X;It++){const St=Rt[It];Te(St[0]+ut,St[1]+ut,St[2]+ut)}}else{for(let pt=0;pt<X;pt++){const ut=Rt[pt];Te(ut[2],ut[1],ut[0])}for(let pt=0;pt<X;pt++){const ut=Rt[pt];Te(ut[0]+B*h,ut[1]+B*h,ut[2]+B*h)}}n.addGroup(it,i.length/3-it,0)}function Pt(){const it=i.length/3;let pt=0;xt(k,pt),pt+=k.length;for(let ut=0,It=C.length;ut<It;ut++){const St=C[ut];xt(St,pt),pt+=St.length}n.addGroup(it,i.length/3-it,1)}function xt(it,pt){let ut=it.length;for(;--ut>=0;){const It=ut;let St=ut-1;St<0&&(St=it.length-1);for(let ne=0,zt=h+m*2;ne<zt;ne++){const he=B*ne,fe=B*(ne+1),ye=pt+It+he,O=pt+St+he,Ye=pt+St+fe,ae=pt+It+fe;Ht(ye,O,Ye,ae)}}}function Bt(it,pt,ut){l.push(it),l.push(pt),l.push(ut)}function Te(it,pt,ut){jt(it),jt(pt),jt(ut);const It=i.length/3,St=v.generateTopUV(n,i,It-3,It-2,It-1);ce(St[0]),ce(St[1]),ce(St[2])}function Ht(it,pt,ut,It){jt(it),jt(pt),jt(It),jt(pt),jt(ut),jt(It);const St=i.length/3,ne=v.generateSideWallUV(n,i,St-6,St-3,St-2,St-1);ce(ne[0]),ce(ne[1]),ce(ne[3]),ce(ne[1]),ce(ne[2]),ce(ne[3])}function jt(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function ce(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ux(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Il[i.type]().fromJSON(i)),new Bo(n,t.options)}}const Nx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-d),new Q(u,1-p),new Q(x,1-g)]:[new Q(a,1-l),new Q(h,1-d),new Q(f,1-p),new Q(m,1-g)]}};function Ux(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zo extends as{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zo(t.radius,t.detail)}}class Dr extends Zt{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Jt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new E,u=new Q,f=new E,p=new E,x=new E;let m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){const M=n+v*h*i,y=Math.sin(M),w=Math.cos(M);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*y,d.y=t[b].y,d.z=t[b].x*w,o.push(d.x,d.y,d.z),u.x=v/e,u.y=b/(t.length-1),a.push(u.x,u.y);const _=l[3*b+0]*y,S=l[3*b+1],I=l[3*b+0]*w;c.push(_,S,I)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const y=M+v*t.length,w=y,b=y+t.length,_=y+t.length+1,S=y+1;r.push(w,b,S),r.push(_,S,b)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(a,2)),this.setAttribute("normal",new At(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.points,t.segments,t.phiStart,t.phiLength)}}class ko extends as{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class bi extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const v=g*u-o;for(let M=0;M<c;M++){const y=M*d-r;p.push(y,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,y=v+c*(g+1),w=v+1+c*(g+1),b=v+1+c*g;f.push(M,y,b),f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.widthSegments,t.heightSegments)}}class rc extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new E,p=new Q;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,y=v+n+1,w=v+n+2,b=v+1;a.push(M,y,b),a.push(y,w,b)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ws extends Zt{constructor(t=new Hi([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new At(i,3)),this.setAttribute("normal",new At(r,3)),this.setAttribute("uv",new At(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];ai.isClockWise(v)===!0&&(p[m]=v.reverse())}const x=ai.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){const v=x[m],M=v[0]+d,y=v[1]+d,w=v[2]+d;n.push(M,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Fx(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Ws(n,t.curveSegments)}}function Fx(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class xe extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new E,u=new E,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n,y=o+M*a,w=t*Math.cos(y),b=Math.sqrt(t*t-w*w);let _=0;g===0&&o===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const I=S/e,R=i+I*r;d.x=-b*Math.cos(R),d.y=w,d.z=b*Math.sin(R),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(I+_,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const M=h[g][v+1],y=h[g][v],w=h[g+1][v],b=h[g+1][v+1];(g!==0||o>0)&&f.push(M,y,b),(g!==n-1||l<Math.PI)&&f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oc extends as{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oc(t.radius,t.detail)}}class Ke extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new E,f=new E,p=new E;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const v=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,y=(i+1)*x+m;l.push(g,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class ac extends Zt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new E,u=new E,f=new E,p=new E,x=new E,m=new E,g=new E;for(let M=0;M<=n;++M){const y=M/n*r*Math.PI*2;v(y,r,o,t,f),v(y+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let w=0;w<=i;++w){const b=w/i*Math.PI*2,_=-e*Math.cos(b),S=e*Math.sin(b);d.x=f.x+(_*g.x+S*x.x),d.y=f.y+(_*g.y+S*x.y),d.z=f.z+(_*g.z+S*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(w/i)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){const w=(i+1)*(M-1)+(y-1),b=(i+1)*M+(y-1),_=(i+1)*M+y,S=(i+1)*(M-1)+y;a.push(w,b,S),a.push(b,_,S)}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2));function v(M,y,w,b,_){const S=Math.cos(M),I=Math.sin(M),R=w/y*M,C=Math.cos(R);_.x=b*(2+C)*.5*S,_.y=b*(2+C)*I*.5,_.z=b*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ac(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class lc extends Zt{constructor(t=new uu(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,l=new E,c=new Q;let h=new E;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),g()}function m(M){h=t.getPointAt(M/e,h);const y=o.normals[M],w=o.binormals[M];for(let b=0;b<=i;b++){const _=b/i*Math.PI*2,S=Math.sin(_),I=-Math.cos(_);l.x=I*y.x+S*w.x,l.y=I*y.y+S*w.y,l.z=I*y.z+S*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let y=1;y<=i;y++){const w=(i+1)*(M-1)+(y-1),b=(i+1)*M+(y-1),_=(i+1)*M+y,S=(i+1)*(M-1)+y;p.push(w,b,S),p.push(b,_,S)}}function v(){for(let M=0;M<=e;M++)for(let y=0;y<=i;y++)c.x=M/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new lc(new Il[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class $p extends Zt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new E,r=new E;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),v=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,v),Dd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),Dd(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Dd(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Nd=Object.freeze({__proto__:null,BoxGeometry:rs,CapsuleGeometry:Oo,CircleGeometry:Hs,ConeGeometry:os,CylinderGeometry:He,DodecahedronGeometry:ic,EdgesGeometry:zp,ExtrudeGeometry:Bo,IcosahedronGeometry:zo,LatheGeometry:Dr,OctahedronGeometry:ko,PlaneGeometry:bi,PolyhedronGeometry:as,RingGeometry:rc,ShapeGeometry:Ws,SphereGeometry:xe,TetrahedronGeometry:oc,TorusGeometry:Ke,TorusKnotGeometry:ac,TubeGeometry:lc,WireframeGeometry:$p});class Jp extends fn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new nt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Rr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Ud(i))i.isRenderTargetTexture?(bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ud(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Tn(s){const t={};for(let e=0;e<s.length;e++){const n=Rr(s[e]);for(const i in n)t[i]=n[i]}return t}function Ud(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ox(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Kp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Pr={clone:Rr,merge:Tn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=Ox(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(i.value);break;case"v3":this.uniforms[n].value=new E().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new te().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class fu extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pu extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qp extends pu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Fi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Fi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class jp extends fn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new nt(16777215),this.specular=new nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class t0 extends fn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class e0 extends fn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class n0 extends fn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Do,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cc extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mu extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class i0 extends fn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new nt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vi,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class s0 extends Rn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ri(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _r(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function r0(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function _h(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function o0(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function kx(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=ri(d,c.times.constructor),c.values=ri(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function Vx(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=a.times.length-1;let x;if(r<=a.times[0]){const g=h,v=d-h;x=a.values.slice(g,v)}else if(r>=a.times[p]){const g=p*d+h,v=g+d-h;x=a.values.slice(g,v)}else{const g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new ln().fromArray(x).normalize().conjugate().toArray(x);const m=c.times.length;for(let g=0;g<m;++g){const v=g*f+u;if(l==="quaternion")ln.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const M=f-u*2;for(let y=0;y<M;++y)c.values[v+y]-=x[y]}}}return s.blendMode=Yh,s}class Gx{static convertArray(t,e){return ri(t,e)}static isTypedArray(t){return Ap(t)}static hasTangents(t){return _r(t)}static getKeyframeOrder(t){return r0(t)}static sortedArray(t,e,n){return _h(t,e,n)}static flattenJSON(t,e,n,i){o0(t,e,n,i)}static subclip(t,e,n,i,r=30){return kx(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return Vx(t,e,n,i)}}class Nr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class a0 extends Nr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ts,endingEnd:Ts}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case As:r=t,a=2*e-n;break;case xo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case As:o=t,l=2*n-e;break;case xo:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+v*o[c+w]+M*o[l+w]+y*o[d+w];return r}}class gu extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}}class l0 extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class c0 extends Nr{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const u=a*2,f=t-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],M=d[g+1],y=t*u+p*2,w=h[y],b=h[y+1],_=Wx(n,e,v,w,i);r[p]=h0(_,x,M,b,m)}return r}}function h0(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Hx(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Wx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=h0(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Hx(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class ti{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ri(e,this.TimeBufferType),this.values=ri(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ri(t.times,Array),values:ri(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),_r(t.settings)&&(n.settings={inTangents:ri(t.settings.inTangents,Array),outTangents:ri(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new l0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new a0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new c0(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case go:e=this.InterpolantFactoryMethodDiscrete;break;case Cl:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break;case ph:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return ph}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;_r(this.settings)&&(Fd(this.settings.inTangents,t),Fd(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;_r(this.settings)&&(Od(this.settings.inTangents,t),Od(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Ap(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ba,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,_r(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Fd(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Od(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ti.prototype.ValueTypeName="";ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Cl;class Xs extends ti{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=go;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class xu extends ti{constructor(t,e,n,i){super(t,e,n,i)}}xu.prototype.ValueTypeName="color";class hc extends ti{constructor(t,e,n,i){super(t,e,n,i)}}hc.prototype.ValueTypeName="number";class u0 extends Nr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}}class uc extends ti{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new u0(this.times,this.values,this.getValueSize(),t)}}uc.prototype.ValueTypeName="quaternion";uc.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends ti{constructor(t,e,n){super(t,e,n)}}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=go;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends ti{constructor(t,e,n,i){super(t,e,n,i)}}vu.prototype.ValueTypeName="vector";class To{constructor(t="",e=-1,n=[],i=Wl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(qx(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(ti.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=r0(l);l=_h(l,1,h),c=_h(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hc(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Xx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hc;case"vector":case"vector2":case"vector3":case"vector4":return vu;case"color":return xu;case"quaternion":return uc;case"bool":case"boolean":return Xs;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Xx(s.type);if(s.times===void 0){const n=[],i=[];o0(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),_r(s.settings)&&(e.settings={inTangents:ri(s.settings.inTangents,Float32Array),outTangents:ri(s.settings.outTangents,Float32Array)}),e}const Mi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Bd(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Bd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Bd(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class _u{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const d0=new _u;class Fn{constructor(t){this.manager=t!==void 0?t:d0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Fn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class Yx extends Error{constructor(t,e){super(t),this.response=e}}class Gi extends Fn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Mi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ii[t]!==void 0){Ii[t].push({onLoad:e,onProgress:n,onError:i});return}Ii[t]=[],Ii[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&bt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ii[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:y})=>{if(M)g.close();else{x+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,_=h.length;b<_;b++){const S=h[b];S.onProgress&&S.onProgress(w)}g.enqueue(y),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new Yx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Mi.add(`file:${t}`,c);const h=Ii[t];delete Ii[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ii[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ii[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Zx extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Gi(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=To.parse(t[n]);e.push(i)}return e}}class $x extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new ec,l=new Gi(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Re),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=Re),a.format=u.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}const cr=new WeakMap;class Ao extends Fn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=cr.get(o);d===void 0&&(d=[],cr.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=_o("img");function l(){h(),e&&e(this);const d=cr.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}cr.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),Mi.remove(`image:${t}`);const u=cr.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}cr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mi.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Jx extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=new Fo;r.colorSpace=yn;const o=new Ao(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Kx extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Cn,a=new Gi(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):kt(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){const e=new Cn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:An,t.wrapT=e.wrapT!==void 0?e.wrapT:An,t.magFilter=e.magFilter!==void 0?e.magFilter:Re,t.minFilter=e.minFilter!==void 0?e.minFilter:Re,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=kn),e.mipmapCount===1&&(t.minFilter=Re),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class Qx extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=new ke,o=new Ao(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ls extends re{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class f0 extends ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const jc=new Yt,zd=new E,kd=new E;class dc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(zd),kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){jc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(jc,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Us||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(jc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ta=new E,Aa=new ln,gi=new E;class fc extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ta,Aa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,gi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ta,Aa,gi),gi.x===1&&gi.y===1&&gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,Aa,gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new E,Vd=new Q,Gd=new Q;class an extends fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,Vd,Gd),e.subVectors(Gd,Vd)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class jx extends dc{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Ar*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class p0 extends ls{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class tv extends dc{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}}class m0 extends ls{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Vo extends fc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ev extends dc{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yu extends ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new ev}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class g0 extends ls{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class x0 extends ls{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Mu{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new E)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class v0 extends ls{constructor(t=new Mu,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Hd={};class pc extends Fn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new Gi(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return pc.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:Jp,SpriteMaterial:nu,RawShaderMaterial:fu,ShaderMaterial:ze,PointsMaterial:su,MeshPhysicalMaterial:Qp,MeshStandardMaterial:pu,MeshPhongMaterial:jp,MeshToonMaterial:t0,MeshNormalMaterial:e0,MeshLambertMaterial:n0,MeshDepthMaterial:cc,MeshDistanceMaterial:mu,MeshBasicMaterial:Kn,MeshMatcapMaterial:i0,LineDashedMaterial:s0,LineBasicMaterial:Rn,Material:fn,...Hd}[t];let i;return n===void 0?(Fi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new fn):i=new n,i}static registerMaterial(t,e){Hd[t]=e}}class yh{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class _0 extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class y0 extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Gi(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),v=vr(m.type,g),M=new Ql(v,m.stride);return M.uuid=m.uuid,m.usage!==void 0&&M.setUsage(m.usage),e[p]=M,M}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=t.isInstancedBufferGeometry?new _0:new Zt,a=t.data.index;if(a!==void 0){const f=vr(a.type,a.array);o.setIndex(new de(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const m=i(t.data,p.data);x=new Fs(m,p.itemSize,p.offset,p.normalized)}else{const m=vr(p.type,p.array),g=p.isInstancedBufferAttribute?Er:de;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),o.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){const v=p[m];let M;if(v.isInterleavedBufferAttribute){const y=i(t.data,v.data);M=new Fs(y,v.itemSize,v.offset,v.normalized)}else{const y=vr(v.type,v.array);M=new de(y,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.gpuType!==void 0&&(M.gpuType=v.gpuType),x.push(M)}o.morphAttributes[f]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];o.addGroup(x.start,x.count,x.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new dn().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const th={};class nv extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?yh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Gi(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),kt("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),kt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?yh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Gi(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e);let a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){th[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Hi().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new jl().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new y0;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Nd?a=Nd[l.type].fromJSON(l,e):l.type in th?a=th[l.type].fromJSON(l,e):bt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new pc;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=To.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:vr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new _u(e);r=new Ao(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new Cn(g.data,g.width,g.height)))}i[d.uuid]=new yi(f)}else{const f=a(d.url);i[d.uuid]=new yi(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:vr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Ao(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Cn(p.data,p.width,p.height)))}n[l.uuid]=new yi(h)}else{const h=await r(l.url);n[l.uuid]=new yi(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(bt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&bt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&bt("ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let h;Array.isArray(c)?(h=new Fo,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Cn:h=new ke,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,iv)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Wd),h.wrapT=n(a.wrap[1],Wd)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Xd)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Xd)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(u){return e[u]===void 0&&bt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p];n[m]===void 0&&bt("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&bt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&bt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":o=new jh,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new nt(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new Kl(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Jl(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new an(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Vo(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new g0(t.color,t.intensity);break;case"DirectionalLight":o=new yu(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new m0(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new x0(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new p0(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new f0(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Mu().fromArray(t.sh);o=new v0(u,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),d=l(t.material),o=new Up(h,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),d=l(t.material),o=new qt(h,d);break;case"InstancedMesh":h=a(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;o=new Gn(h,d,f),o.instanceMatrix=new Er(new Float32Array(p.array),16),x!==void 0&&(o.instanceColor=new Er(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),d=l(t.material),o=new Fp(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,v=null;return m.boundingBox!==void 0&&(g=new Sn().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(v=new dn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:v}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new dn().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Sn().fromJSON(t.boundingBox));break;case"LOD":o=new Np;break;case"Line":o=new ss(a(t.geometry),l(t.material));break;case"LineLoop":o=new Op(a(t.geometry),l(t.material));break;case"LineSegments":o=new Si(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new tc(a(t.geometry),l(t.material));break;case"Sprite":o=new Dp(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new Gt;break;case"Bone":o=new iu;break;default:o=new re}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new E().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?bt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new re}})}}const iv={UVMapping:Ol,CubeReflectionMapping:zi,CubeRefractionMapping:Ls,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:eo},Wd={RepeatWrapping:fo,ClampToEdgeWrapping:An,MirroredRepeatWrapping:Ds},Xd={NearestFilter:Be,NearestMipmapNearestFilter:kh,NearestMipmapLinearFilter:xr,LinearFilter:Re,LinearMipmapNearestFilter:no,LinearMipmapLinearFilter:kn},eh=new WeakMap;class sv extends Fn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&bt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&bt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Mi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{eh.has(o)===!0?(i&&i(eh.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),eh.set(l,c),Mi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Mi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Ea;class Su{static getContext(){return Ea===void 0&&(Ea=new(window.AudioContext||window.webkitAudioContext)),Ea}static setContext(t){Ea=t}}class rv extends Fn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Gi(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Su.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,i);function a(l){i?i(l):kt(l),r.manager.itemError(t)}}}const qd=new Yt,Yd=new Yt,xs=new Yt;class ov{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new an,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new an,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,xs.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Ps*e.fov*.5)/e.zoom;let a,l;Yd.elements[12]=-i,qd.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,xs.elements[0]=2*e.near/(l-a),xs.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(xs),a=-o*e.aspect-r,l=o*e.aspect-r,xs.elements[0]=2*e.near/(l-a),xs.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(xs)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Yd),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(qd),this.cameraR.matrixWorldNeedsUpdate=!0}}const hr=-90,ur=1;class Ll extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new an(hr,ur,t,e);i.layers=this.layers,this.add(i);const r=new an(hr,ur,t,e);r.layers=this.layers,this.add(r);const o=new an(hr,ur,t,e);o.layers=this.layers,this.add(o);const a=new an(hr,ur,t,e);a.layers=this.layers,this.add(a);const l=new an(hr,ur,t,e);l.layers=this.layers,this.add(l);const c=new an(hr,ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class M0 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class bu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=av.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function av(){this._document.hidden===!1&&this.reset()}const vs=new E,nh=new ln,lv=new E,_s=new E,ys=new E;class cv extends re{constructor(){super(),this.type="AudioListener",this.context=Su.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new bu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(vs,nh,lv),_s.set(0,0,-1).applyQuaternion(nh),ys.set(0,1,0).applyQuaternion(nh),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(vs.x,n),e.positionY.linearRampToValueAtTime(vs.y,n),e.positionZ.linearRampToValueAtTime(vs.z,n),e.forwardX.linearRampToValueAtTime(_s.x,n),e.forwardY.linearRampToValueAtTime(_s.y,n),e.forwardZ.linearRampToValueAtTime(_s.z,n),e.upX.linearRampToValueAtTime(ys.x,n),e.upY.linearRampToValueAtTime(ys.y,n),e.upZ.linearRampToValueAtTime(ys.z,n)}else e.setPosition(vs.x,vs.y,vs.z),e.setOrientation(_s.x,_s.y,_s.z,ys.x,ys.y,ys.z)}}class S0 extends re{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){bt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(bt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){bt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(bt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Ms=new E,Zd=new ln,hv=new E,Ss=new E;class uv extends S0{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Ms,Zd,hv),Ss.set(0,0,1).applyQuaternion(Zd);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Ms.x,n),e.positionY.linearRampToValueAtTime(Ms.y,n),e.positionZ.linearRampToValueAtTime(Ms.z,n),e.orientationX.linearRampToValueAtTime(Ss.x,n),e.orientationY.linearRampToValueAtTime(Ss.y,n),e.orientationZ.linearRampToValueAtTime(Ss.z,n)}else e.setPosition(Ms.x,Ms.y,Ms.z),e.setOrientation(Ss.x,Ss.y,Ss.z)}}class dv{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class b0{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ln.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;ln.multiplyQuaternionsFlat(t,o,t,e,t,n),ln.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const wu="\\[\\]\\.:\\/",fv=new RegExp("["+wu+"]","g"),Tu="[^"+wu+"]",pv="[^"+wu.replace("\\.","")+"]",mv=/((?:WC+[\/:])*)/.source.replace("WC",Tu),gv=/(WCOD+)?/.source.replace("WCOD",pv),xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),_v=new RegExp("^"+mv+gv+xv+vv+"$"),yv=["material","materials","bones","map"];class Mv{constructor(t,e,n){const i=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class _e{constructor(t,e,n){this.path=e,this.parsedPath=n||_e.parseTrackName(e),this.node=_e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new _e.Composite(t,e,n):new _e(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fv,"")}static parseTrackName(t){const e=_v.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);yv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=_e.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_e.Composite=Mv;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Sv{constructor(){this.isAnimationObjectGroup=!0,this.uuid=jn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,m=o;x!==m;++x)r[x].push(new _e(u,n[x],i[x]))}else if(p<c){a=t[p];const x=--c,m=t[x];e[m.uuid]=p,t[p]=m,e[f]=x,t[x]=u;for(let g=0,v=o;g!==v;++g){const M=r[g],y=M[x];let w=M[p];M[p]=y,w===void 0&&(w=new _e(u,n[g],i[g])),M[x]=w}}else t[p]!==a&&kt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--o,x=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[x.uuid]=u),t[u]=x,t.pop();for(let m=0,g=i;m!==g;++m){const v=n[m],M=v[u],y=v[p];v[d]=M,v[u]=y,v.pop()}}else{const u=--o,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=i;p!==x;++p){const m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new _e(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class w0{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Ts,endingEnd:Ts};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=mp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Yh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Wl:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===gp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===pp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=As,i.endingEnd=As):(t?i.endingStart=this.zeroSlopeAtStart?As:Ts:i.endingStart=xo,e?i.endingEnd=this.zeroSlopeAtEnd?As:Ts:i.endingEnd=xo)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const bv=new Float32Array(1);class wv extends fi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new b0(_e.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new gu(new Float32Array(2),new Float32Array(2),1,bv),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?To.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Wl),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new w0(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?To.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Tv extends Qh{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){const o=new Zl(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}}class Au{constructor(t){this.value=t}clone(){return new Au(this.value.clone===void 0?this.value:this.value.clone())}}let Av=0;class Ev extends fi{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Av++}),this.name="",this.usage=Xl,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}}class Cv extends Ql{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Rv{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const $d=new Yt;class Pv{constructor(t,e,n=0,i=1/0){this.ray=new Lr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new $l,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(t,e=!0,n=[]){return Mh(t,this,n,e),n.sort(Jd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Mh(t[i],this,n,e);return n.sort(Jd),n}}function Jd(s,t){return s.distance-t.distance}function Mh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Mh(r[o],t,e,!0)}}class T0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,bt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Iv{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lv{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const Du=class Du{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Du.prototype.isMatrix2=!0;let Sh=Du;const Kd=new Q;class A0{constructor(t=new Q(1/0,1/0),e=new Q(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Kd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Kd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qd=new E,Ca=new E,dr=new E,fr=new E,ih=new E,Dv=new E,Nv=new E;class Uv{constructor(t=new E,e=new E){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qd.subVectors(t,this.start),Ca.subVectors(this.end,this.start);const n=Ca.dot(Ca);if(n===0)return 0;let r=Ca.dot(Qd)/n;return e&&(r=Jt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Dv,n=Nv){const i=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,h=t.end;dr.subVectors(c,a),fr.subVectors(h,l),ih.subVectors(a,l);const d=dr.dot(dr),u=fr.dot(fr),f=fr.dot(ih);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(d<=i)r=0,o=f/u,o=Jt(o,0,1);else{const p=dr.dot(ih);if(u<=i)o=0,r=Jt(-p/d,0,1);else{const x=dr.dot(fr),m=d*u-x*x;m!==0?r=Jt((x*f-p*u)/m,0,1):r=0,o=(x*r+f)/u,o<0?(o=0,r=Jt(-p/d,0,1)):o>1&&(o=1,r=Jt((x-p)/d,0,1))}}return e.copy(a).addScaledVector(dr,r),n.copy(l).addScaledVector(fr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const jd=new E;class Fv extends re{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Zt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new At(i,3));const r=new Rn({fog:!1,toneMapped:!1});this.cone=new Si(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),jd.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(jd),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Qi=new E,Ra=new Yt,sh=new Yt;class Ov extends Si{constructor(t){const e=E0(t),n=new Zt,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new At(i,3)),n.setAttribute("color",new At(r,3));const o=new Rn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new nt(255),l=new nt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");sh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Ra.multiplyMatrices(sh,a.matrixWorld),Qi.setFromMatrixPosition(Ra),i.setXYZ(o,Qi.x,Qi.y,Qi.z),Ra.multiplyMatrices(sh,a.parent.matrixWorld),Qi.setFromMatrixPosition(Ra),i.setXYZ(o+1,Qi.x,Qi.y,Qi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function E0(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...E0(s.children[e]));return t}class Bv extends qt{constructor(t,e,n){const i=new xe(e,4,2),r=new Kn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const zv=new E,tf=new nt,ef=new nt;class kv extends re{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new ko(e);i.rotateY(Math.PI*.5),this.material=new Kn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new de(o,3)),this.add(new qt(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");tf.copy(this.light.color),ef.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?tf:ef;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(zv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Vv extends Si{constructor(t=10,e=10,n=4473924,i=8947848){n=new nt(n),i=new nt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=e;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Zt;h.setAttribute("position",new At(l,3)),h.setAttribute("color",new At(c,3));const d=new Rn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Gv extends Si{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new nt(r),o=new nt(o);const a=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;a.push(0,0,0),a.push(f,0,p);const x=d&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const u=d&1?r:o,f=t-t/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new Zt;c.setAttribute("position",new At(a,3)),c.setAttribute("color",new At(l,3));const h=new Rn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const nf=new E,Pa=new E,sf=new E;class Hv extends re{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Zt;i.setAttribute("position",new At([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new Rn({fog:!1,toneMapped:!1});this.lightPlane=new ss(i,r),this.add(this.lightPlane),i=new Zt,i.setAttribute("position",new At([0,0,0,0,0,1],3)),this.targetLine=new ss(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),nf.setFromMatrixPosition(this.light.matrixWorld),Pa.setFromMatrixPosition(this.light.target.matrixWorld),sf.subVectors(Pa,nf),this.lightPlane.lookAt(Pa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Pa),this.targetLine.scale.z=sf.length()}}const Ia=new E,Ge=new fc;class Wv extends Si{constructor(t){const e=new Zt,n=new Rn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new At(i,3)),e.setAttribute("color",new At(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new nt(16755200),h=new nt(16711680),d=new nt(43775),u=new nt(16777215),f=new nt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,o;if(Ge.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Vn)r=-1,o=1;else if(this.camera.coordinateSystem===Us)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);We("c",e,t,Ge,0,0,r),We("t",e,t,Ge,0,0,o),We("n1",e,t,Ge,-n,-i,r),We("n2",e,t,Ge,n,-i,r),We("n3",e,t,Ge,-n,i,r),We("n4",e,t,Ge,n,i,r),We("f1",e,t,Ge,-n,-i,o),We("f2",e,t,Ge,n,-i,o),We("f3",e,t,Ge,-n,i,o),We("f4",e,t,Ge,n,i,o),We("u1",e,t,Ge,n*.7,i*1.1,r),We("u2",e,t,Ge,-n*.7,i*1.1,r),We("u3",e,t,Ge,0,i*2,r),We("cf1",e,t,Ge,-n,0,o),We("cf2",e,t,Ge,n,0,o),We("cf3",e,t,Ge,0,-i,o),We("cf4",e,t,Ge,0,i,o),We("cn1",e,t,Ge,-n,0,r),We("cn2",e,t,Ge,n,0,r),We("cn3",e,t,Ge,0,-i,r),We("cn4",e,t,Ge,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function We(s,t,e,n,i,r,o){Ia.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Ia.x,Ia.y,Ia.z)}}const La=new Sn;class Xv extends Si{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Zt;r.setIndex(new de(n,1)),r.setAttribute("position",new de(i,3)),super(r,new Rn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&La.setFromObject(this.object),La.isEmpty())return;const t=La.min,e=La.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class qv extends Si{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Zt;r.setIndex(new de(n,1)),r.setAttribute("position",new At(i,3)),super(r,new Rn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Yv extends ss{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Zt;o.setAttribute("position",new At(r,3)),o.computeBoundingSphere(),super(o,new Rn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Zt;l.setAttribute("position",new At(a,3)),l.computeBoundingSphere(),this.add(new qt(l,new Kn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const rf=new E;let Da,rh;class Zv extends re{constructor(t=new E(0,0,1),e=new E(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Da===void 0&&(Da=new Zt,Da.setAttribute("position",new At([0,0,0,0,1,0],3)),rh=new os(.5,1,5,1),rh.translate(0,-.5,0)),this.position.copy(e),this.line=new ss(Da,new Rn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new qt(rh,new Kn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{rf.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(rf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $v extends Si{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Zt;i.setAttribute("position",new At(e,3)),i.setAttribute("color",new At(n,3));const r=new Rn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new nt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Jv{constructor(){this.type="ShapePath",this.color=new nt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Mo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new Q);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],m=l[(p+1)%f];if(x.y>d!=m.y>d){const g=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);u.push(g)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(bt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?l=>l!==0:l=>(l&1)!==0,r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=ai.area(c);if(h===0)continue;const d=new A0;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let h=0;for(let d=l-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const o=[],a=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new Hi;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=a.get(l.container);if(!c)continue;const h=new Mo;h.curves=l.subPath.curves,c.holes.push(h)}return o}}class Kv extends fi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function jv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function t_(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function bh(s,t,e,n){const i=e_(n);switch(e){case Xh:return s*t;case Vl:return s*t/i.components*i.byteLength;case No:return s*t/i.components*i.byteLength;case es:return s*t*2/i.components*i.byteLength;case Gl:return s*t*2/i.components*i.byteLength;case qh:return s*t*3/i.components*i.byteLength;case un:return s*t*4/i.components*i.byteLength;case Hl:return s*t*4/i.components*i.byteLength;case io:case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ro:case oo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ja:case el:return Math.max(s,16)*Math.max(t,8)/4;case Qa:case tl:return Math.max(s,8)*Math.max(t,8)/2;case nl:case il:case rl:case ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sl:case po:case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sl:case bl:case wl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Tl:case Al:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mo:case El:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function e_(s){switch(s){case Dn:case Vh:return{byteLength:1,components:1};case Tr:case Gh:case je:return{byteLength:2,components:1};case zl:case kl:return{byteLength:2,components:4};case Qn:case Bl:case En:return{byteLength:4,components:1};case Hh:case Wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class n_{static contain(t,e){return Qv(t,e)}static cover(t,e){return jv(t,e)}static fill(t){return t_(t)}static getByteLength(t,e,n,i){return bh(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fl}}));typeof window<"u"&&(window.__THREE__?bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C0(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function i_(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
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
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h_=`#ifdef USE_AOMAP
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
#endif`,u_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x_=`#ifdef USE_IRIDESCENCE
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
#endif`,v_=`#ifdef USE_BUMPMAP
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
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,A_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,E_=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,C_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",N_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W_=`#ifdef USE_GRADIENTMAP
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
}`,X_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,$_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,J_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ey=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ry=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_y=`#ifdef USE_MORPHTARGETS
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
#endif`,yy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,Ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ny=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Vy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Gy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ky=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,n1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s1=`uniform sampler2D t2D;
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`#include <common>
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
}`,h1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u1=`#define DISTANCE
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
}`,d1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m1=`uniform float scale;
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
}`,g1=`uniform vec3 diffuse;
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
}`,x1=`#include <common>
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
}`,v1=`uniform vec3 diffuse;
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
}`,_1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M1=`#define MATCAP
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
}`,S1=`#define MATCAP
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
}`,b1=`#define NORMAL
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
}`,w1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T1=`#define PHONG
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
}`,A1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,E1=`#define STANDARD
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
}`,C1=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,R1=`#define TOON
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
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,I1=`uniform float size;
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
}`,L1=`uniform vec3 diffuse;
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
}`,D1=`#include <common>
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
}`,N1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,U1=`uniform float rotation;
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
}`,F1=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:l_,alphatest_pars_fragment:c_,aomap_fragment:h_,aomap_pars_fragment:u_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:v_,clipping_planes_fragment:__,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:S_,color_fragment:b_,color_pars_fragment:w_,color_pars_vertex:T_,color_vertex:A_,common:E_,defaultnormal_vertex:C_,displacementmap_pars_vertex:R_,displacementmap_vertex:P_,emissivemap_fragment:I_,emissivemap_pars_fragment:L_,colorspace_fragment:D_,colorspace_pars_fragment:N_,envmap_fragment:U_,envmap_common_pars_fragment:F_,envmap_pars_fragment:O_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:$_,envmap_vertex:z_,fog_vertex:k_,fog_pars_vertex:V_,fog_fragment:G_,fog_pars_fragment:H_,gradientmap_pars_fragment:W_,lightmap_pars_fragment:X_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:Y_,lights_pars_begin:Z_,lights_toon_fragment:J_,lights_toon_pars_fragment:K_,lights_phong_fragment:Q_,lights_phong_pars_fragment:j_,lights_physical_fragment:ty,lights_physical_pars_fragment:ey,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:sy,lightprobes_pars_fragment:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:hy,map_pars_fragment:uy,map_particle_fragment:dy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:xy,morphnormal_vertex:vy,morphtarget_pars_vertex:_y,morphtarget_vertex:yy,normal_fragment_begin:My,normal_fragment_maps:Sy,normal_pars_fragment:by,normal_pars_vertex:wy,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:Ey,clearcoat_normal_fragment_maps:Cy,clearcoat_pars_fragment:Ry,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Ny,dithering_fragment:Uy,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:ky,shadowmap_vertex:Vy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:Zy,tonemapping_fragment:$y,tonemapping_pars_fragment:Jy,transmission_fragment:Ky,transmission_pars_fragment:Qy,uv_pars_fragment:jy,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:n1,background_vert:i1,background_frag:s1,backgroundCube_vert:r1,backgroundCube_frag:o1,cube_vert:a1,cube_frag:l1,depth_vert:c1,depth_frag:h1,distance_vert:u1,distance_frag:d1,equirect_vert:f1,equirect_frag:p1,linedashed_vert:m1,linedashed_frag:g1,meshbasic_vert:x1,meshbasic_frag:v1,meshlambert_vert:_1,meshlambert_frag:y1,meshmatcap_vert:M1,meshmatcap_frag:S1,meshnormal_vert:b1,meshnormal_frag:w1,meshphong_vert:T1,meshphong_frag:A1,meshphysical_vert:E1,meshphysical_frag:C1,meshtoon_vert:R1,meshtoon_frag:P1,points_vert:I1,points_frag:L1,shadow_vert:D1,shadow_frag:N1,sprite_vert:U1,sprite_frag:F1},wt={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},oi={basic:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new nt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Tn([wt.points,wt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Tn([wt.common,wt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Tn([wt.sprite,wt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Tn([wt.common,wt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Tn([wt.lights,wt.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};oi.physical={uniforms:Tn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Na={r:0,b:0,g:0},O1=new Yt,R0=new te;R0.set(-1,0,0,0,1,0,0,0,1);function B1(s,t,e,n,i,r){const o=new nt(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const y=v.backgroundBlurriness>0;M=t.get(M,y)}return M}function p(v){let M=!1;const y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),M=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){const y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new qt(new rs(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Rr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(R0),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ae,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qt(new bi(2,2),new ze({name:"BackgroundMaterial",uniforms:Rr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==Ae,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Na,Kp(s)),e.buffers.color.setClear(Na.r,Na.g,Na.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function z1(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(C,D,z,L,k){let q=!1;const B=d(C,L,z,D);r!==B&&(r=B,c(r.object)),q=f(C,L,z,k),q&&p(C,L,z,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(C,D,z,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(C){return s.bindVertexArray(C)}function h(C){return s.deleteVertexArray(C)}function d(C,D,z,L){const k=L.wireframe===!0;let q=n[D.id];q===void 0&&(q={},n[D.id]=q);const B=C.isInstancedMesh===!0?C.id:0;let st=q[B];st===void 0&&(st={},q[B]=st);let G=st[z.id];G===void 0&&(G={},st[z.id]=G);let J=G[k];return J===void 0&&(J=u(l()),G[k]=J),J}function u(C){const D=[],z=[],L=[];for(let k=0;k<e;k++)D[k]=0,z[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:L,object:C,attributes:{},index:null}}function f(C,D,z,L){const k=r.attributes,q=D.attributes;let B=0;const st=z.getAttributes();for(const G in st)if(st[G].location>=0){const Z=k[G];let at=q[G];if(at===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(at=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(at=C.instanceColor)),Z===void 0||Z.attribute!==at||at&&Z.data!==at.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function p(C,D,z,L){const k={},q=D.attributes;let B=0;const st=z.getAttributes();for(const G in st)if(st[G].location>=0){let Z=q[G];Z===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(Z=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(Z=C.instanceColor));const at={};at.attribute=Z,Z&&Z.data&&(at.data=Z.data),k[G]=at,B++}r.attributes=k,r.attributesNum=B,r.index=L}function x(){const C=r.newAttributes;for(let D=0,z=C.length;D<z;D++)C[D]=0}function m(C){g(C,0)}function g(C,D){const z=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;z[C]=1,L[C]===0&&(s.enableVertexAttribArray(C),L[C]=1),k[C]!==D&&(s.vertexAttribDivisor(C,D),k[C]=D)}function v(){const C=r.newAttributes,D=r.enabledAttributes;for(let z=0,L=D.length;z<L;z++)D[z]!==C[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function M(C,D,z,L,k,q,B){B===!0?s.vertexAttribIPointer(C,D,z,k,q):s.vertexAttribPointer(C,D,z,L,k,q)}function y(C,D,z,L){x();const k=L.attributes,q=z.getAttributes(),B=D.defaultAttributeValues;for(const st in q){const G=q[st];if(G.location>=0){let J=k[st];if(J===void 0&&(st==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),st==="instanceColor"&&C.instanceColor&&(J=C.instanceColor)),J!==void 0){const Z=J.normalized,at=J.itemSize,Rt=t.get(J);if(Rt===void 0)continue;const X=Rt.buffer,ot=Rt.type,Tt=Rt.bytesPerElement,Pt=ot===s.INT||ot===s.UNSIGNED_INT||J.gpuType===Bl;if(J.isInterleavedBufferAttribute){const xt=J.data,Bt=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,Te=J.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Ht=0;Ht<G.locationSize;Ht++)g(G.location+Ht,xt.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ht=0;Ht<G.locationSize;Ht++)M(G.location+Ht,at/G.locationSize,ot,Z,Bt*Tt,(Te+at/G.locationSize*Ht)*Tt,Pt)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<G.locationSize;xt++)g(G.location+xt,J.meshPerAttribute);C.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<G.locationSize;xt++)m(G.location+xt);s.bindBuffer(s.ARRAY_BUFFER,X);for(let xt=0;xt<G.locationSize;xt++)M(G.location+xt,at/G.locationSize,ot,Z,at*Tt,at/G.locationSize*xt*Tt,Pt)}}else if(B!==void 0){const Z=B[st];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(G.location,Z);break;case 3:s.vertexAttrib3fv(G.location,Z);break;case 4:s.vertexAttrib4fv(G.location,Z);break;default:s.vertexAttrib1fv(G.location,Z)}}}}v()}function w(){I();for(const C in n){const D=n[C];for(const z in D){const L=D[z];for(const k in L){const q=L[k];for(const B in q)h(q[B].object),delete q[B];delete L[k]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const D=n[C.id];for(const z in D){const L=D[z];for(const k in L){const q=L[k];for(const B in q)h(q[B].object),delete q[B];delete L[k]}}delete n[C.id]}function _(C){for(const D in n){const z=n[D];for(const L in z){const k=z[L];if(k[C.id]===void 0)continue;const q=k[C.id];for(const B in q)h(q[B].object),delete q[B];delete k[C.id]}}}function S(C){for(const D in n){const z=n[D],L=C.isInstancedMesh===!0?C.id:0,k=z[L];if(k!==void 0){for(const q in k){const B=k[q];for(const st in B)h(B[st].object),delete B[st];delete k[q]}delete z[L],Object.keys(z).length===0&&delete n[D]}}}function I(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function k1(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function V1(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==un&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const S=_===je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Dn&&_!==En&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:w,samples:b}}function G1(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new _i,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,M=v*4;let y=g.clippingState||null;l.value=y,y=h(p,u,M,f);for(let w=0;w!==M;++w)y[w]=e[w];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==x;++M,y+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class mc extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fo(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rs(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Ui});r.uniforms.tEquirect.value=e;const o=new qt(i,r),a=e.minFilter;return e.minFilter===kn&&(e.minFilter=Re),new Ll(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const of=256,H1=3,W1=20,P0=256,I0=16,X1=3,q1=new E,Y1=new nt;class Eo{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ll(1,10,null),this._boxMesh=new qt(new rs(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=q1}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(Y1));const m=new Ll(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(of,Rp(t))}_fromTexture(t,e){t.mapping===zi||t.mapping===Ls?this._setSize(t.image.length===0?of:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=af(t,!1,!1),n=Math.log2(t)-H1;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=af(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===zi||t.mapping===Ls?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=lf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Z1(),this._integrationMaterial=$1());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/I0);for(let o=0;o<=n;o++){const a=Eo.lodToRoughness(o,n);if(o>n-X1)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(P0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=J1());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function af(s,t,e){return new mc(s,{minFilter:kn,generateMipmaps:t,type:je,colorSpace:ns,depthBuffer:e})}function Go(s,t,e){return new ze({name:s,uniforms:t,vertexShader:se.cube_vert,fragmentShader:e,side:Mn,blending:Ui,depthTest:!1,depthWrite:!1})}function Z1(){return Go("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${P0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $1(){return Go("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:I0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function J1(){return Go("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${W1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function lf(){return Go("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function cf(){return Go("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function K1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===to||f===eo)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new mc(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===to||f===eo,x=f===zi||f===Ls;if(p||x){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Eo(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Eo(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===to?u.mapping=zi:f===eo&&(u.mapping=Ls),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Q1(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fi("WebGLRenderer: "+n+" extension not supported."),i}}}function j1(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const v=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?eu:tu,y=new M(Math.ceil(v/3)*6,1),w=y.array;if(x!==null){const _=x.array;g=x.version;for(let S=0,I=0;S<v;S+=3){const R=_[S+0],C=_[S+1],D=_[S+2];w[I++]=R,w[I++]=C,w[I++]=C,w[I++]=D,w[I++]=D,w[I++]=R}}else{g=m.version;for(let _=0,S=0;_<v;_+=3){const I=_+0,R=_+1,C=_+2;w[S++]=I,w[S++]=R,w[S++]=R,w[S++]=C,w[S++]=C,w[S++]=I}}y.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,y)}function u(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function tM(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function eM(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function nM(s,t,e){const n=new WeakMap,i=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let R=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const _=new Float32Array(w*b*4*d),S=new Yl(_,w,b,d);S.type=En,S.needsUpdate=!0;const I=y*4;for(let C=0;C<d;C++){const D=g[C],z=v[C],L=M[C],k=w*b*4*C;for(let q=0;q<D.count;q++){const B=q*I;p===!0&&(i.fromBufferAttribute(D,q),_[k+B+0]=i.x,_[k+B+1]=i.y,_[k+B+2]=i.z,_[k+B+3]=0),x===!0&&(i.fromBufferAttribute(z,q),_[k+B+4]=i.x,_[k+B+5]=i.y,_[k+B+6]=i.z,_[k+B+7]=0),m===!0&&(i.fromBufferAttribute(L,q),_[k+B+8]=i.x,_[k+B+9]=i.y,_[k+B+10]=i.z,_[k+B+11]=L.itemSize===4?i.w:1)}}u={count:d,texture:S,size:new Q(w,b)},n.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function iM(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const sM={[Dh]:"LINEAR_TONE_MAPPING",[Nh]:"REINHARD_TONE_MAPPING",[Uh]:"CINEON_TONE_MAPPING",[Fh]:"ACES_FILMIC_TONE_MAPPING",[Bh]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Oh]:"CUSTOM_TONE_MAPPING"};function rM(s,t,e,n,i,r){const o=new Xe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Zt;h.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new At([0,2,0,0,2,0],2));const d=new fu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qt(h,d),f=new Vo(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,v=null,M=[],y=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),l!==null&&l.setSize(w,b);for(let _=0;_<M.length;_++){const S=M[_];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){M=w,y=M.length>0&&M[0].isRenderPass===!0;const b=o.width,_=o.height;M.length>0&&a===null&&(a=new Xe(b,_,{type:je,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(b,_,{type:je,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&M.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Bs(b,_),r===!0&&(c.format=Ni,c.type=Ns)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<M.length;I++){const R=M[I];R.setSize&&R.setSize(b,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===hi&&M.length===0)return!1;if(v=b,b!==null){const _=b.width,S=b.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return y===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=hi,!0},this.hasRenderPass=function(){return y},this.end=function(w,b){w.toneMapping=g,m=!0;let _=o,S=a;for(let I=0;I<M.length;I++){const R=M[I];R.enabled!==!1&&(R.render(w,S,_,b),R.needsSwap!==!1&&(_=S,S=S===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},ue.getTransfer(p)===Ae&&(d.defines.SRGB_TRANSFER="");const I=sM[x];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(v),w.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const L0=new ke,D0=new Bs(1,1),N0=new ru(1),U0=new Yl,F0=new Zl,O0=new Fo,hf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),pf=new Float32Array(4);function Ur(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=hf[i];if(r===void 0&&(r=new Float32Array(i),hf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function en(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function nn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function gc(s,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function oM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function aM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2fv(this.addr,t),nn(e,t)}}function lM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;s.uniform3fv(this.addr,t),nn(e,t)}}function cM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4fv(this.addr,t),nn(e,t)}}function hM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;pf.set(n),s.uniformMatrix2fv(this.addr,!1,pf),nn(e,n)}}function uM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;ff.set(n),s.uniformMatrix3fv(this.addr,!1,ff),nn(e,n)}}function dM(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;df.set(n),s.uniformMatrix4fv(this.addr,!1,df),nn(e,n)}}function fM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function pM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2iv(this.addr,t),nn(e,t)}}function mM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3iv(this.addr,t),nn(e,t)}}function gM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4iv(this.addr,t),nn(e,t)}}function xM(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function vM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;s.uniform2uiv(this.addr,t),nn(e,t)}}function _M(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;s.uniform3uiv(this.addr,t),nn(e,t)}}function yM(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;s.uniform4uiv(this.addr,t),nn(e,t)}}function xc(s){return s.version===0&&(s.compareFunction=Jh,s.needsUpdate=!0),s}function MM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=xc(D0):r=L0,e.setTexture2D(t||r,i)}function SM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||F0,i)}function bM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=xc(N0):r=O0,e.setTextureCube(t||r,i)}function wM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||U0,i)}function TM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return lM;case 35666:return cM;case 35674:return hM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return vM;case 36295:return _M;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return wM}}function AM(s,t){s.uniform1fv(this.addr,t)}function EM(s,t){const e=Ur(t,this.size,2);s.uniform2fv(this.addr,e)}function CM(s,t){const e=Ur(t,this.size,3);s.uniform3fv(this.addr,e)}function RM(s,t){const e=Ur(t,this.size,4);s.uniform4fv(this.addr,e)}function PM(s,t){const e=Ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function IM(s,t){const e=Ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function LM(s,t){const e=Ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function DM(s,t){s.uniform1iv(this.addr,t)}function NM(s,t){s.uniform2iv(this.addr,t)}function UM(s,t){s.uniform3iv(this.addr,t)}function FM(s,t){s.uniform4iv(this.addr,t)}function OM(s,t){s.uniform1uiv(this.addr,t)}function BM(s,t){s.uniform2uiv(this.addr,t)}function zM(s,t){s.uniform3uiv(this.addr,t)}function kM(s,t){s.uniform4uiv(this.addr,t)}function VM(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=xc(D0):o=L0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function GM(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||F0,r[o])}function HM(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=xc(N0):o=O0;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function WM(s,t,e){const n=this.cache,i=t.length,r=gc(e,i);en(n,r)||(s.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||U0,r[o])}function XM(s){switch(s){case 5126:return AM;case 35664:return EM;case 35665:return CM;case 35666:return RM;case 35674:return PM;case 35675:return IM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return NM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return VM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return WM}}class qM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=TM(e.type)}}class YM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=XM(e.type)}}class ZM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const oh=/(\w+)(\])?(\[|\.)?/g;function mf(s,t){s.seq.push(t),s.map[t.id]=t}function $M(s,t,e){const n=s.name,i=n.length;for(oh.lastIndex=0;;){const r=oh.exec(n),o=oh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){mf(e,c===void 0?new qM(a,s,t):new YM(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new ZM(a),mf(e,d)),e=d}}}class Va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$M(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function gf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const JM=37297;let KM=0;function QM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const xf=new te;function jM(s){ue._getMatrix(xf,ue.workingColorSpace,s);const t=`mat3( ${xf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case vo:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+QM(s.getShaderSource(t),a)}else return r}function tS(s,t){const e=jM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const eS={[Dh]:"Linear",[Nh]:"Reinhard",[Uh]:"Cineon",[Fh]:"ACESFilmic",[Bh]:"AgX",[zh]:"Neutral",[Oh]:"Custom"};function nS(s,t){const e=eS[t];return e===void 0?(bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ua=new E;function iS(){ue.getLuminanceCoefficients(Ua);const s=Ua.x.toFixed(4),t=Ua.y.toFixed(4),e=Ua.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function rS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function oS(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Qr(s){return s!==""}function _f(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function yf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(s){return s.replace(aS,lS)}function lS(s,t){const e=se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return wh(e)}const cS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(s){return s.replace(cS,hS)}function hS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const uS={[Mr]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function dS(s){return uS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fS={[Ls]:"ENVMAP_MODE_REFRACTION"};function pS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":fS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mS={[Do]:"ENVMAP_BLENDING_MULTIPLY",[up]:"ENVMAP_BLENDING_MIX",[dp]:"ENVMAP_BLENDING_ADD"};function gS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mS[s.combine]||"ENVMAP_BLENDING_NONE"}function xS(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dS(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=pS(e),d=gS(e),u=sS(e),f=rS(r),p=i.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(x=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[Sf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?se.tonemapping_pars_fragment:"",e.toneMapping!==hi?nS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,tS("linearToOutputTexel",e.outputColorSpace),iS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=wh(o),o=_f(o,e),o=yf(o,e),a=wh(a),a=_f(a,e),a=yf(a,e),o=Mf(o),a=Mf(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=g+x+o,M=g+m+a,y=gf(i,i.VERTEX_SHADER,v),w=gf(i,i.FRAGMENT_SHADER,M);i.attachShader(p,y),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(R){if(s.debug.checkShaderErrors){const C=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(y)||"",z=i.getShaderInfoLog(w)||"",L=C.trim(),k=D.trim(),q=z.trim();let B=!0,st=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,w);else{const G=vf(i,y,"vertex"),J=vf(i,w,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+G+`
`+J)}else L!==""?bt("WebGLProgram: Program Info Log:",L):(k===""||q==="")&&(st=!1);st&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:k,prefix:x},fragmentShader:{log:q,prefix:m}})}i.deleteShader(y),i.deleteShader(w),_=new Va(i,p),S=oS(i,p)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(p,JM)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KM++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=w,this}let vS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yS(t),e.set(t,n)),n}}class yS{constructor(t){this.id=vS++,this.code=t,this.usedTimes=0}}function MS(s){return s===es||s===po||s===mo}function SS(s,t,e,n,i,r){const o=new $l,a=new _S,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,I,R,C,D){const z=R.fog,L=C.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||k,q),st=u[_.type];let G=n.precision;_.precision!==null&&(G=n.getMaxPrecision(_.precision),G!==_.precision&&bt("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Z=J!==void 0?J.length:0;let at=0;L.morphAttributes.position!==void 0&&(at=1),L.morphAttributes.normal!==void 0&&(at=2),L.morphAttributes.color!==void 0&&(at=3);let Rt,X,ot,Tt;if(st){const Et=oi[st];Rt=Et.vertexShader,X=Et.fragmentShader}else{Rt=_.vertexShader,X=_.fragmentShader;const Et=a.getVertexShaderStage(_),Ee=a.getFragmentShaderStage(_);a.update(_,Et,Ee),ot=Et.id,Tt=Ee.id}const Pt=s.getRenderTarget(),xt=s.state.buffers.depth.getReversed(),Bt=C.isInstancedMesh===!0,Te=C.isBatchedMesh===!0,Ht=!!_.map,jt=!!_.matcap,ce=!!B,it=ce&&B.isPMREMTexture===!0,pt=!!_.aoMap,ut=!!_.lightMap,It=!!_.bumpMap&&_.wireframe===!1,St=!!_.normalMap,ne=!!_.displacementMap,zt=!!_.emissiveMap,he=!!_.metalnessMap,fe=!!_.roughnessMap,ye=_.anisotropy>0,O=_.clearcoat>0,Ye=_.diffuseRoughness>0,ae=_.dispersion>0,Pe=_.retroreflectivity>0,_t=_.iridescence>0,Ve=_.sheen>0,Xt=_.transmission>0,Qt=ye&&!!_.anisotropyMap,P=O&&!!_.clearcoatMap,T=O&&!!_.clearcoatNormalMap,H=O&&!!_.clearcoatRoughnessMap,lt=Ye&&!!_.diffuseRoughnessMap,et=_t&&!!_.iridescenceMap,dt=_t&&!!_.iridescenceThicknessMap,yt=Ve&&!!_.sheenColorMap,K=Ve&&!!_.sheenRoughnessMap,j=!!_.specularMap,mt=!!_.specularColorMap,U=!!_.specularIntensityMap,tt=Xt&&!!_.transmissionMap,$=Xt&&!!_.thicknessMap,gt=!!_.gradientMap,ht=!!_.alphaMap,ft=_.alphaTest>0,Vt=!!_.alphaHash,oe=!!_.extensions;let ct=hi;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(ct=s.toneMapping);const Wt=it?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,ie={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:X,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:Tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:Te,batchingColor:Te&&C._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&C.instanceColor!==null,instancingMorph:Bt&&C.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:jt,envMap:ce,envMapMode:ce&&B.mapping,envMapPMREM:it,envMapMaxLod:it?Wt.length-1:null,envMapSize:it?Wt[0].width:null,aoMap:pt,lightMap:ut,bumpMap:It,normalMap:St,displacementMap:ne,emissiveMap:zt,normalMapObjectSpace:St&&_.normalMapType===_p,normalMapTangentSpace:St&&_.normalMapType===Vi,packedNormalMap:St&&_.normalMapType===Vi&&MS(_.normalMap.format),metalnessMap:he,roughnessMap:fe,anisotropy:ye,anisotropyMap:Qt,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:T,clearcoatRoughnessMap:H,diffuseRoughness:Ye,diffuseRoughnessMap:lt,dispersion:ae,retroreflection:Pe,iridescence:_t,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:Ve,sheenColorMap:yt,sheenRoughnessMap:K,specularMap:j,specularColorMap:mt,specularIntensityMap:U,transmission:Xt,transmissionMap:tt,thicknessMap:$,gradientMap:gt,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Vt,combine:_.combine,mapUv:Ht&&f(_.map.channel),aoMapUv:pt&&f(_.aoMap.channel),lightMapUv:ut&&f(_.lightMap.channel),bumpMapUv:It&&f(_.bumpMap.channel),normalMapUv:St&&f(_.normalMap.channel),displacementMapUv:ne&&f(_.displacementMap.channel),emissiveMapUv:zt&&f(_.emissiveMap.channel),metalnessMapUv:he&&f(_.metalnessMap.channel),roughnessMapUv:fe&&f(_.roughnessMap.channel),anisotropyMapUv:Qt&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:et&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:mt&&f(_.specularColorMap.channel),specularIntensityMapUv:U&&f(_.specularIntensityMap.channel),transmissionMapUv:tt&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:ht&&f(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(St||ye),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!L.attributes.uv&&(Ht||ht),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&St===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:at,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:D.filter(Et=>Et.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===Ae,decodeVideoTextureEmissive:zt&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===Ae,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ue,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||Te)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){const S=u[_.type];let I;if(S){const R=oi[S];I=Pr.clone(R.uniforms)}else I=_.uniforms;return I}function M(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new xS(s,S,_,i),c.push(I),h.set(S,I)),I}function y(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:b}}function bS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function wS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function bf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);const M=a(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(u,f,p,x,m,g){const v=a(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||wS),n.length>1&&n.sort(f||bf),i.length>1&&i.sort(f||bf)}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function TS(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new wf,s.set(n,[o])):i>=r.length?(o=new wf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function AS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new E,color:new nt};break;case"SpotLight":e={position:new E,direction:new E,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":e={color:new nt,position:new E,halfWidth:new E,halfHeight:new E};break}return s[t.id]=e,e}}}function ES(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let CS=0;function RS(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PS(s){const t=new AS,e=ES(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const i=new E,r=new Yt,o=new Yt;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,M=0,y=0,w=0,b=0,_=0,S=0,I=0,R=0;c.sort(RS);for(let D=0,z=c.length;D<z;D++){const L=c[D],k=L.color,q=L.intensity,B=L.distance;let st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===es?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],q);R++}else if(L.isSunLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=st;const at=J.getViewportCount();for(let Rt=0;Rt<at;Rt++)n.sunShadowMatrix[x+Rt]=J.getMatrix(Rt),n.sunShadowCascade[x+Rt]=J._cascadeData[Rt];x+=at,p++}n.sun[f]=G,f++}else if(L.isDirectionalLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=G,m++}else if(L.isSpotLight){const G=t.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(q),G.distance=B,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[v]=G;const J=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,J.updateMatrices(L),L.castShadow&&I++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=st,_++}v++}else if(L.isRectAreaLight){const G=t.get(L);G.color.copy(k).multiplyScalar(q),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=G,M++}else if(L.isPointLight){const G=t.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const J=L.shadow,Z=e.get(L);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=t.get(L);G.skyColor.copy(L.color).multiplyScalar(q),G.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[y]=G,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==M||C.hemiLength!==y||C.numSunShadows!==p||C.numDirectionalShadows!==w||C.numPointShadows!==b||C.numSpotShadows!==_||C.numSpotMaps!==S||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=M,C.hemiLength=y,C.numSunShadows=p,C.numDirectionalShadows=w,C.numPointShadows=b,C.numSpotShadows=_,C.numSpotMaps=S,C.numLightProbes=R,n.version=CS++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const y=c[v];if(y.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),d++}else if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(y.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Tf(s){const t=new PS(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function IS(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Tf(s),t.set(i,[a])):r>=o.length?(a=new Tf(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NS=[new E(1,0,0),new E(-1,0,0),new E(0,1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1)],US=[new E(0,-1,0),new E(0,-1,0),new E(0,0,1),new E(0,0,-1),new E(0,-1,0),new E(0,-1,0)],Af=new Yt,$r=new E,ah=new E;function FS(s,t,e){let n=new Os;const i=new Q,r=new Q,o=new Se,a=new cc,l=new mu,c={},h=e.maxTextureSize,d={[Bi]:Mn,[Mn]:Bi,[Ue]:Ue},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:LS,fragmentShader:DS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Zt;p.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mr;let g=this.type;this.render=function(b,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===qf&&(bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mr);const I=s.getRenderTarget(),R=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ui),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=g!==this.type;z&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=b.length;L<k;L++){const q=b[L],B=q.shadow;if(B===void 0){bt("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const st=B.getFrameExtents();i.multiply(st),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,B.mapSize.y=r.y));const G=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===gr){if(q.isPointLight){bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Xe(i.x,i.y,{format:es,type:je,minFilter:Re,magFilter:Re,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Bs(i.x,i.y,En),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=ki,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be}else q.isPointLight?(B.map=new mc(i.x),B.map.depthTexture=new ru(i.x,Qn)):(B.map=new Xe(i.x,i.y),B.map.depthTexture=new Bs(i.x,i.y,Qn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=ki,this.type===Mr?(B.map.depthTexture.compareFunction=G?$h:Zh,B.map.depthTexture.minFilter=Re,B.map.depthTexture.magFilter=Re):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Be,B.map.depthTexture.magFilter=Be);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);const J=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();q.isPointLight!==!0&&B.updateMatrices(q,S);const Z=B.camera.layers.mask&4294967294?B.camera.layers:S.layers;for(let at=0;at<J;at++){const Rt=B.getCamera(at);if(q.isPointLight){const X=B.camera,ot=B.matrix,Tt=q.distance||X.far;Tt!==X.far&&(X.far=Tt,X.updateProjectionMatrix()),$r.setFromMatrixPosition(q.matrixWorld),X.position.copy($r),ah.copy(X.position),ah.add(NS[at]),X.up.copy(US[at]),X.lookAt(ah),X.updateMatrixWorld(),ot.makeTranslation(-$r.x,-$r.y,-$r.z),Af.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Af,X.coordinateSystem,X.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,at),s.clear();else{at===0&&(s.setRenderTarget(B.map),s.clear());const X=B.getViewport(at);o.set(r.x*X.x,r.y*X.y,r.x*X.z,r.y*X.w),D.viewport(o)}n=B.getFrustum(at),y(_,S,Rt,q,Z,this.type)}B.isPointLightShadow!==!0&&this.type===gr&&v(B,S),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(I,R,C)};function v(b,_){const S=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xe(i.x,i.y,{format:es,type:je}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(_,null,S,f,x,null)}function M(b,_,S,I){let R=null;const C=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)R=C;else if(R=S.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const D=R.uuid,z=_.uuid;let L=c[D];L===void 0&&(L={},c[D]=L);let k=L[z];k===void 0&&(k=R.clone(),L[z]=k,_.addEventListener("dispose",w)),R=k}if(R.visible=_.visible,R.wireframe=_.wireframe,I===gr?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:d[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=s.properties.get(R);D.light=S}return R}function y(b,_,S,I,R,C){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===gr)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const L=t.update(b),k=b.material;if(Array.isArray(k)){const q=L.groups;for(let B=0,st=q.length;B<st;B++){const G=q[B],J=k[G.materialIndex];if(J&&J.visible){const Z=M(b,J,I,C);b.onBeforeShadow(s,b,_,S,L,Z,G),s.renderBufferDirect(S,null,L,Z,b,G),b.onAfterShadow(s,b,_,S,L,Z,G)}}}else if(k.visible){const q=M(b,k,I,C);b.onBeforeShadow(s,b,_,S,L,q,null),s.renderBufferDirect(S,null,L,q,b,null),b.onAfterShadow(s,b,_,S,L,q,null)}}const z=b.children;for(let L=0,k=z.length;L<k;L++)y(z[L],_,S,I,R,C)}function w(b){b.target.removeEventListener("dispose",w);for(const S in c){const I=c[S],R=b.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}function OS(s,t){function e(){let U=!1;const tt=new Se;let $=null;const gt=new Se(0,0,0,0);return{setMask:function(ht){$!==ht&&!U&&(s.colorMask(ht,ht,ht,ht),$=ht)},setLocked:function(ht){U=ht},setClear:function(ht,ft,Vt,oe,ct){ct===!0&&(ht*=oe,ft*=oe,Vt*=oe),tt.set(ht,ft,Vt,oe),gt.equals(tt)===!1&&(s.clearColor(ht,ft,Vt,oe),gt.copy(tt))},reset:function(){U=!1,$=null,gt.set(-1,0,0,0)}}}function n(){let U=!1,tt=!1,$=null,gt=null,ht=null;return{setReversed:function(ft){if(tt!==ft){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),tt=ft;const oe=ht;ht=null,this.setClear(oe)}},getReversed:function(){return tt},setTest:function(ft){ft?xt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(ft){$!==ft&&!U&&(s.depthMask(ft),$=ft)},setFunc:function(ft){if(tt&&(ft=ng[ft]),gt!==ft){switch(ft){case Xa:s.depthFunc(s.NEVER);break;case qa:s.depthFunc(s.ALWAYS);break;case Ya:s.depthFunc(s.LESS);break;case wr:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case $a:s.depthFunc(s.GEQUAL);break;case Ja:s.depthFunc(s.GREATER);break;case Ka:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=ft}},setLocked:function(ft){U=ft},setClear:function(ft){ht!==ft&&(ht=ft,tt&&(ft=1-ft),s.clearDepth(ft))},reset:function(){U=!1,$=null,gt=null,ht=null,tt=!1}}}function i(){let U=!1,tt=null,$=null,gt=null,ht=null,ft=null,Vt=null,oe=null,ct=null;return{setTest:function(Wt){U||(Wt?xt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(Wt){tt!==Wt&&!U&&(s.stencilMask(Wt),tt=Wt)},setFunc:function(Wt,ie,Et){($!==Wt||gt!==ie||ht!==Et)&&(s.stencilFunc(Wt,ie,Et),$=Wt,gt=ie,ht=Et)},setOp:function(Wt,ie,Et){(ft!==Wt||Vt!==ie||oe!==Et)&&(s.stencilOp(Wt,ie,Et),ft=Wt,Vt=ie,oe=Et)},setLocked:function(Wt){U=Wt},setClear:function(Wt){ct!==Wt&&(s.clearStencil(Wt),ct=Wt)},reset:function(){U=!1,tt=null,$=null,gt=null,ht=null,ft=null,Vt=null,oe=null,ct=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,w=null,b=null,_=null,S=new nt(0,0,0),I=0,R=!1,C=null,D=null,z=null,L=null,k=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,st=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=st>=1):G.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=st>=2);let J=null,Z={};const at=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),X=new Se().fromArray(at),ot=new Se().fromArray(Rt);function Tt(U,tt,$,gt){const ht=new Uint8Array(4),ft=s.createTexture();s.bindTexture(U,ft),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<$;Vt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(tt+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ft}const Pt={};Pt[s.TEXTURE_2D]=Tt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=Tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=Tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=Tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xt(s.DEPTH_TEST),o.setFunc(wr),It(!1),St(hh),xt(s.CULL_FACE),pt(Ui);function xt(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Bt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Te(U,tt){return u[U]!==tt?(s.bindFramebuffer(U,tt),u[U]=tt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=tt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function Ht(U,tt){let $=p,gt=!1;if(U){$=f.get(tt),$===void 0&&($=[],f.set(tt,$));const ht=U.textures;if($.length!==ht.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Vt=ht.length;ft<Vt;ft++)$[ft]=s.COLOR_ATTACHMENT0+ft;$.length=ht.length,gt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,gt=!0);gt&&s.drawBuffers($)}function jt(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const ce={[ws]:s.FUNC_ADD,[Zf]:s.FUNC_SUBTRACT,[$f]:s.FUNC_REVERSE_SUBTRACT};ce[Jf]=s.MIN,ce[Kf]=s.MAX;const it={[Qf]:s.ZERO,[jf]:s.ONE,[tp]:s.SRC_COLOR,[Ih]:s.SRC_ALPHA,[op]:s.SRC_ALPHA_SATURATE,[sp]:s.DST_COLOR,[np]:s.DST_ALPHA,[ep]:s.ONE_MINUS_SRC_COLOR,[Lh]:s.ONE_MINUS_SRC_ALPHA,[rp]:s.ONE_MINUS_DST_COLOR,[ip]:s.ONE_MINUS_DST_ALPHA,[ap]:s.CONSTANT_COLOR,[lp]:s.ONE_MINUS_CONSTANT_COLOR,[cp]:s.CONSTANT_ALPHA,[hp]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(U,tt,$,gt,ht,ft,Vt,oe,ct,Wt){if(U===Ui){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(xt(s.BLEND),m=!0),U!==Yf){if(U!==g||Wt!==R){if((v!==ws||w!==ws)&&(s.blendEquation(s.FUNC_ADD),v=ws,w=ws),Wt)switch(U){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uo:s.blendFunc(s.ONE,s.ONE);break;case uh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",U);break}else switch(U){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uh:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dh:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",U);break}M=null,y=null,b=null,_=null,S.set(0,0,0),I=0,g=U,R=Wt}return}ht=ht||tt,ft=ft||$,Vt=Vt||gt,(tt!==v||ht!==w)&&(s.blendEquationSeparate(ce[tt],ce[ht]),v=tt,w=ht),($!==M||gt!==y||ft!==b||Vt!==_)&&(s.blendFuncSeparate(it[$],it[gt],it[ft],it[Vt]),M=$,y=gt,b=ft,_=Vt),(oe.equals(S)===!1||ct!==I)&&(s.blendColor(oe.r,oe.g,oe.b,ct),S.copy(oe),I=ct),g=U,R=!1}function ut(U,tt){U.side===Ue?Bt(s.CULL_FACE):xt(s.CULL_FACE);let $=U.side===Mn;tt&&($=!$),It($),U.blending===Rs&&U.transparent===!1?pt(Ui):pt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const gt=U.stencilWrite;a.setTest(gt),gt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),zt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function It(U){C!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),C=U)}function St(U){U!==Wf?(xt(s.CULL_FACE),U!==D&&(U===hh?s.cullFace(s.BACK):U===Xf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),D=U}function ne(U){U!==z&&(B&&s.lineWidth(U),z=U)}function zt(U,tt,$){U?(xt(s.POLYGON_OFFSET_FILL),(L!==tt||k!==$)&&(L=tt,k=$,o.getReversed()&&(tt=-tt,$=-$),s.polygonOffset(tt,$))):Bt(s.POLYGON_OFFSET_FILL)}function he(U){U?xt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function fe(U){U===void 0&&(U=s.TEXTURE0+q-1),J!==U&&(s.activeTexture(U),J=U)}function ye(U,tt,$){$===void 0&&(J===null?$=s.TEXTURE0+q-1:$=J);let gt=Z[$];gt===void 0&&(gt={type:void 0,texture:void 0},Z[$]=gt),(gt.type!==U||gt.texture!==tt)&&(J!==$&&(s.activeTexture($),J=$),s.bindTexture(U,tt||Pt[U]),gt.type=U,gt.texture=tt)}function O(){const U=Z[J];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ye(){try{s.compressedTexImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function ae(){try{s.compressedTexImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function Pe(){try{s.texSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function _t(){try{s.texSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function Ve(){try{s.compressedTexSubImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function Xt(){try{s.compressedTexSubImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function Qt(){try{s.texStorage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function P(){try{s.texStorage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){kt("WebGLState:",U)}}function H(){try{s.texImage3D(...arguments)}catch(U){kt("WebGLState:",U)}}function lt(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function et(U,tt){d[U]!==tt&&(s.pixelStorei(U,tt),d[U]=tt)}function dt(U){X.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),X.copy(U))}function yt(U){ot.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ot.copy(U))}function K(U,tt){let $=c.get(tt);$===void 0&&($=new WeakMap,c.set(tt,$));let gt=$.get(U);gt===void 0&&(gt=s.getUniformBlockIndex(tt,U.name),s.uniformBlockBinding(tt,gt,gt),$.set(U,gt))}function j(U,tt,$){const ht=c.get(tt).get(U);l[ht]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ht,$),l[ht]=$)}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},J=null,Z={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,y=null,w=null,b=null,_=null,S=new nt(0,0,0),I=0,R=!1,C=null,D=null,z=null,L=null,k=null,X.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xt,disable:Bt,bindFramebuffer:Te,drawBuffers:Ht,useProgram:jt,setBlending:pt,setMaterial:ut,setFlipSided:It,setCullFace:St,setLineWidth:ne,setPolygonOffset:zt,setScissorTest:he,activeTexture:fe,bindTexture:ye,unbindTexture:O,compressedTexImage2D:Ye,compressedTexImage3D:ae,texImage2D:T,texImage3D:H,pixelStorei:et,getParameter:lt,updateUBOMapping:K,uniformBlockBinding:j,texStorage2D:Qt,texStorage3D:P,texSubImage2D:Pe,texSubImage3D:_t,compressedTexSubImage2D:Ve,compressedTexSubImage3D:Xt,scissor:dt,viewport:yt,reset:mt}}function BS(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,d=new Set;let u;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(P=>p.delete(P));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return m?new OffscreenCanvas(P,T):_o("canvas")}function v(P,T,H){let lt=1;const et=Qt(P);if((et.width>H||et.height>H)&&(lt=H/Math.max(et.width,et.height)),lt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(lt*et.width),yt=Math.floor(lt*et.height);u===void 0&&(u=g(dt,yt));const K=T?g(dt,yt):u;return K.width=dt,K.height=yt,K.getContext("2d").drawImage(P,0,0,dt,yt),bt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+dt+"x"+yt+")."),K}else return"data"in P&&bt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function w(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,T,H,lt,et,dt=!1){if(P!==null){if(s[P]!==void 0)return s[P];bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let yt;lt&&(yt=t.get("EXT_texture_norm16"),yt||bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===s.RED&&(H===s.FLOAT&&(K=s.R32F),H===s.HALF_FLOAT&&(K=s.R16F),H===s.UNSIGNED_BYTE&&(K=s.R8),H===s.UNSIGNED_SHORT&&yt&&(K=yt.R16_EXT),H===s.SHORT&&yt&&(K=yt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.R8UI),H===s.UNSIGNED_SHORT&&(K=s.R16UI),H===s.UNSIGNED_INT&&(K=s.R32UI),H===s.BYTE&&(K=s.R8I),H===s.SHORT&&(K=s.R16I),H===s.INT&&(K=s.R32I)),T===s.RG&&(H===s.FLOAT&&(K=s.RG32F),H===s.HALF_FLOAT&&(K=s.RG16F),H===s.UNSIGNED_BYTE&&(K=s.RG8),H===s.UNSIGNED_SHORT&&yt&&(K=yt.RG16_EXT),H===s.SHORT&&yt&&(K=yt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RG8UI),H===s.UNSIGNED_SHORT&&(K=s.RG16UI),H===s.UNSIGNED_INT&&(K=s.RG32UI),H===s.BYTE&&(K=s.RG8I),H===s.SHORT&&(K=s.RG16I),H===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RGB8UI),H===s.UNSIGNED_SHORT&&(K=s.RGB16UI),H===s.UNSIGNED_INT&&(K=s.RGB32UI),H===s.BYTE&&(K=s.RGB8I),H===s.SHORT&&(K=s.RGB16I),H===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),H===s.UNSIGNED_INT&&(K=s.RGBA32UI),H===s.BYTE&&(K=s.RGBA8I),H===s.SHORT&&(K=s.RGBA16I),H===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(H===s.UNSIGNED_SHORT&&yt&&(K=yt.RGB16_EXT),H===s.SHORT&&yt&&(K=yt.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){const j=dt?vo:ue.getTransfer(et);H===s.FLOAT&&(K=s.RGBA32F),H===s.HALF_FLOAT&&(K=s.RGBA16F),H===s.UNSIGNED_BYTE&&(K=j===Ae?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&yt&&(K=yt.RGBA16_EXT),H===s.SHORT&&yt&&(K=yt.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(P,T){let H;return P?T===null||T===Qn||T===Ns?H=s.DEPTH24_STENCIL8:T===En?H=s.DEPTH32F_STENCIL8:T===Tr&&(H=s.DEPTH24_STENCIL8,bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Qn||T===Ns?H=s.DEPTH_COMPONENT24:T===En?H=s.DEPTH_COMPONENT32F:T===Tr&&(H=s.DEPTH_COMPONENT16),H}function S(P,T){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Be&&P.minFilter!==Re?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){const T=new WeakRef(P);n.get(P).__ref=T,p.add(T),x.register(P,T,T)}function R(P){const T=n.get(P).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function C(P){z(P.target)}function D(P){L(P.target)}function z(P){P.removeEventListener("dispose",C),R(P),q(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&d.delete(P)}function L(P){P.removeEventListener("dispose",D),R(P),st(P)}function k(){for(const P of p){const T=P.deref();T!==void 0&&(T.isRenderTarget===!0?L(T):z(T))}p.clear(),d.clear()}function q(P){const T=n.get(P);if(T.__webglInit===void 0)return;const H=P.source,lt=f.get(H);if(lt){const et=lt[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&B(P),Object.keys(lt).length===0&&f.delete(H)}n.remove(P)}function B(P){const T=n.get(P);s.deleteTexture(T.__webglTexture);const H=P.source,lt=f.get(H);delete lt[T.__cacheKey],o.memory.textures--}function st(P){const T=n.get(P);T.__depthDisposeCallback&&T.__depthDisposeCallback();const H=P.depthTexture;if(H&&H.renderTarget===P&&z(H),P.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(T.__webglFramebuffer[et]))for(let dt=0;dt<T.__webglFramebuffer[et].length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[et][dt]);else s.deleteFramebuffer(T.__webglFramebuffer[et]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[et])}else{if(Array.isArray(T.__webglFramebuffer))for(let et=0;et<T.__webglFramebuffer.length;et++)s.deleteFramebuffer(T.__webglFramebuffer[et]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let et=0;et<T.__webglColorRenderbuffer.length;et++)T.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[et]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const lt=P.textures;for(let et=0,dt=lt.length;et<dt;et++){const yt=n.get(lt[et]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(lt[et])}n.remove(P)}let G=0;function J(){G=0}function Z(){return G}function at(P){G=P}function Rt(){const P=G;return P>=i.maxTextures&&bt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,P}function X(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.mipmapsAutoUpdate),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function ot(P,T){const H=n.get(P);if(P.isVideoTexture&&Ve(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&H.__version!==P.version){const lt=P.image;if(lt===null)bt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,P,T);return}}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+T)}function Tt(P,T){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ut(H,P,T);return}else P.isExternalTexture&&(H.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+T)}function Pt(P,T){const H=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){ut(H,P,T);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+T)}function xt(P,T){const H=n.get(P);if(P.version>0&&H.__version!==P.version){It(H,P,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+T)}const Bt={[fo]:s.REPEAT,[An]:s.CLAMP_TO_EDGE,[Ds]:s.MIRRORED_REPEAT},Te={[Be]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[Re]:s.LINEAR,[no]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},Ht={[Mp]:s.NEVER,[Jh]:s.ALWAYS,[Sp]:s.LESS,[Zh]:s.LEQUAL,[bp]:s.EQUAL,[$h]:s.GEQUAL,[wp]:s.GREATER,[Tp]:s.NOTEQUAL};function jt(P,T){if(T.type===En&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Re||T.magFilter===no||T.magFilter===xr||T.magFilter===kn||T.minFilter===Re||T.minFilter===no||T.minFilter===xr||T.minFilter===kn)&&bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Bt[T.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Bt[T.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Bt[T.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Te[T.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Te[T.minFilter]),T.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ht[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Be||T.minFilter!==xr&&T.minFilter!==kn||T.type===En&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ce(P,T){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",C),I(T));const lt=T.source;let et=f.get(lt);et===void 0&&(et={},f.set(lt,et));const dt=X(T);if(dt!==P.__cacheKey){et[dt]===void 0&&(et[dt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),et[dt].usedTimes++;const yt=et[P.__cacheKey];yt!==void 0&&(et[P.__cacheKey].usedTimes--,yt.usedTimes===0&&B(T)),P.__cacheKey=dt,P.__webglTexture=et[dt].texture}return H}function it(P,T,H){return Math.floor(Math.floor(P/H)/T)}function pt(P,T,H,lt){const dt=P.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,H,lt,T.data);else{dt.sort((U,tt)=>U.start-tt.start);let yt=0;for(let U=1;U<dt.length;U++){const tt=dt[yt],$=dt[U],gt=tt.start+tt.count,ht=it($.start,T.width,4),ft=it(tt.start,T.width,4);$.start<=gt+1&&ht===ft&&it($.start+$.count-1,T.width,4)===ht?tt.count=Math.max(tt.count,$.start+$.count-tt.start):(++yt,dt[yt]=$)}dt.length=yt+1;const K=e.getParameter(s.UNPACK_ROW_LENGTH),j=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,tt=dt.length;U<tt;U++){const $=dt[U],gt=Math.floor($.start/4),ht=Math.ceil($.count/4),ft=gt%T.width,Vt=Math.floor(gt/T.width),oe=ht,ct=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(s.UNPACK_SKIP_ROWS,Vt),e.texSubImage2D(s.TEXTURE_2D,0,ft,Vt,oe,ct,H,lt,T.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,j),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function ut(P,T,H){let lt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(lt=s.TEXTURE_3D);const et=ce(P,T),dt=T.source;e.bindTexture(lt,P.__webglTexture,s.TEXTURE0+H);const yt=n.get(dt);if(dt.version!==yt.__version||et===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ct=ue.getPrimaries(ue.workingColorSpace),Wt=T.colorSpace===Zn?null:ue.getPrimaries(T.colorSpace),ie=T.colorSpace===Zn||ct===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let j=v(T.image,!1,i.maxTextureSize);j=Xt(T,j);const mt=r.convert(T.format,T.colorSpace),U=r.convert(T.type);let tt=b(T.internalFormat,mt,U,T.normalized,T.colorSpace,T.isVideoTexture);jt(lt,T);let $;const gt=T.mipmaps,ht=T.isVideoTexture!==!0,ft=yt.__version===void 0||et===!0,Vt=dt.dataReady,oe=S(T,j);if(T.isDepthTexture)tt=_(T.format===Ni,T.type),ft&&(ht?e.texStorage2D(s.TEXTURE_2D,1,tt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,tt,j.width,j.height,0,mt,U,null));else if(T.isDataTexture)if(gt.length>0){ht&&ft&&e.texStorage2D(s.TEXTURE_2D,oe,tt,gt[0].width,gt[0].height);for(let ct=0,Wt=gt.length;ct<Wt;ct++)$=gt[ct],ht?Vt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,$.width,$.height,mt,U,$.data):e.texImage2D(s.TEXTURE_2D,ct,tt,$.width,$.height,0,mt,U,$.data);T.generateMipmaps=!1}else ht?(ft&&e.texStorage2D(s.TEXTURE_2D,oe,tt,j.width,j.height),Vt&&pt(T,j,mt,U)):e.texImage2D(s.TEXTURE_2D,0,tt,j.width,j.height,0,mt,U,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,oe,tt,gt[0].width,gt[0].height,j.depth);for(let ct=0,Wt=gt.length;ct<Wt;ct++)if($=gt[ct],T.format!==un)if(mt!==null)if(ht){if(Vt)if(T.layerUpdates.size>0){const ie=bh($.width,$.height,T.format,T.type);for(const Et of T.layerUpdates){const Ee=$.data.subarray(Et*ie/$.data.BYTES_PER_ELEMENT,(Et+1)*ie/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,Et,$.width,$.height,1,mt,Ee)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,$.width,$.height,j.depth,mt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ct,tt,$.width,$.height,j.depth,0,$.data,0,0);else bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Vt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ct,0,0,0,$.width,$.height,j.depth,mt,U,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ct,tt,$.width,$.height,j.depth,0,mt,U,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ht&&ft&&e.texStorage2D(s.TEXTURE_2D,oe,tt,gt[0].width,gt[0].height);for(let ct=0,Wt=gt.length;ct<Wt;ct++)$=gt[ct],T.format!==un?mt!==null?ht?Vt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ct,0,0,$.width,$.height,mt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,ct,tt,$.width,$.height,0,$.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Vt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,$.width,$.height,mt,U,$.data):e.texImage2D(s.TEXTURE_2D,ct,tt,$.width,$.height,0,mt,U,$.data)}else if(T.isDataArrayTexture)if(ht){if(ft&&e.texStorage3D(s.TEXTURE_2D_ARRAY,oe,tt,j.width,j.height,j.depth),Vt)if(T.layerUpdates.size>0){const ct=bh(j.width,j.height,T.format,T.type);for(const Wt of T.layerUpdates){const ie=j.data.subarray(Wt*ct/j.data.BYTES_PER_ELEMENT,(Wt+1)*ct/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Wt,j.width,j.height,1,mt,U,ie)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,mt,U,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,j.width,j.height,j.depth,0,mt,U,j.data);else if(T.isData3DTexture)ht?(ft&&e.texStorage3D(s.TEXTURE_3D,oe,tt,j.width,j.height,j.depth),Vt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,mt,U,j.data)):e.texImage3D(s.TEXTURE_3D,0,tt,j.width,j.height,j.depth,0,mt,U,j.data);else if(T.isFramebufferTexture){if(ft)if(ht)e.texStorage2D(s.TEXTURE_2D,oe,tt,j.width,j.height);else{let ct=j.width,Wt=j.height;for(let ie=0;ie<oe;ie++)e.texImage2D(s.TEXTURE_2D,ie,tt,ct,Wt,0,mt,U,null),ct>>=1,Wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const ct=s.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),j.parentNode!==ct){ct.appendChild(j),d.add(T),ct.onpaint=Wt=>{const ie=Wt.changedElements;for(const Et of d)ie.includes(Et.image)&&(Et.needsUpdate=!0)},ct.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{const ie=s.RGBA,Et=s.RGBA,Ee=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ie,Et,Ee,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ht&&ft){const ct=Qt(gt[0]);e.texStorage2D(s.TEXTURE_2D,oe,tt,ct.width,ct.height)}for(let ct=0,Wt=gt.length;ct<Wt;ct++)$=gt[ct],ht?Vt&&e.texSubImage2D(s.TEXTURE_2D,ct,0,0,mt,U,$):e.texImage2D(s.TEXTURE_2D,ct,tt,mt,U,$);T.generateMipmaps=!1}else if(ht){if(ft){const ct=Qt(j);e.texStorage2D(s.TEXTURE_2D,oe,tt,ct.width,ct.height)}Vt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,U,j)}else e.texImage2D(s.TEXTURE_2D,0,tt,mt,U,j);M(T)&&T.mipmapsAutoUpdate===!0&&y(lt),yt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function It(P,T,H){if(T.image.length!==6)return;const lt=ce(P,T),et=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+H);const dt=n.get(et);if(et.version!==dt.__version||lt===!0){e.activeTexture(s.TEXTURE0+H);const yt=ue.getPrimaries(ue.workingColorSpace),K=T.colorSpace===Zn?null:ue.getPrimaries(T.colorSpace),j=T.colorSpace===Zn||yt===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const mt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,tt=[];for(let Et=0;Et<6;Et++)!mt&&!U?tt[Et]=v(T.image[Et],!0,i.maxCubemapSize):tt[Et]=U?T.image[Et].image:T.image[Et],tt[Et]=Xt(T,tt[Et]);const $=tt[0],gt=r.convert(T.format,T.colorSpace),ht=r.convert(T.type);let ft=b(T.internalFormat,gt,ht,T.normalized,T.colorSpace);const Vt=T.isVideoTexture!==!0,oe=dt.__version===void 0||lt===!0,ct=et.dataReady;let Wt=S(T,$);jt(s.TEXTURE_CUBE_MAP,T);let ie;if(T.isDepthTexture){if(ft=_(T.format===Ni,T.type),oe)if(Vt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,ft,$.width,$.height);else for(let Et=0;Et<6;Et++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,$.width,$.height,0,gt,ht,null)}else if(mt){Vt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,ft,$.width,$.height);for(let Et=0;Et<6;Et++){ie=tt[Et].mipmaps;for(let Ee=0;Ee<ie.length;Ee++){const sn=ie[Ee];T.format!==un?gt!==null?Vt?ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee,0,0,sn.width,sn.height,gt,sn.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee,ft,sn.width,sn.height,0,sn.data):bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee,0,0,sn.width,sn.height,gt,ht,sn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee,ft,sn.width,sn.height,0,gt,ht,sn.data)}}}else{if(ie=T.mipmaps,Vt&&oe){ie.length>0&&Wt++;const Et=Qt(tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Wt,ft,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(U){Vt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,tt[Et].width,tt[Et].height,gt,ht,tt[Et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,tt[Et].width,tt[Et].height,0,gt,ht,tt[Et].data);for(let Ee=0;Ee<ie.length;Ee++){const Xi=ie[Ee].image[Et].image;Vt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee+1,0,0,Xi.width,Xi.height,gt,ht,Xi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee+1,ft,Xi.width,Xi.height,0,gt,ht,Xi.data)}}else{Vt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,gt,ht,tt[Et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ft,gt,ht,tt[Et]);for(let Ee=0;Ee<ie.length;Ee++){const sn=ie[Ee];Vt?ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee+1,0,0,gt,ht,sn.image[Et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Ee+1,ft,gt,ht,sn.image[Et])}}}M(T)&&T.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),dt.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function St(P,T,H,lt,et,dt){const yt=r.convert(H.format,H.colorSpace),K=r.convert(H.type),j=b(H.internalFormat,yt,K,H.normalized,H.colorSpace),mt=n.get(T),U=n.get(H);if(U.__renderTarget=T,!mt.__hasExternalTextures){const tt=Math.max(1,T.width>>dt),$=Math.max(1,T.height>>dt);et===s.TEXTURE_3D||et===s.TEXTURE_2D_ARRAY?e.texImage3D(et,dt,j,tt,$,T.depth,0,yt,K,null):e.texImage2D(et,dt,j,tt,$,0,yt,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,et,U.__webglTexture,0,Pe(T)):(et===s.TEXTURE_2D||et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,et,U.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ne(P,T,H){if(s.bindRenderbuffer(s.RENDERBUFFER,P),T.depthBuffer){const lt=T.depthTexture,et=lt&&lt.isDepthTexture?lt.type:null,dt=_(T.stencilBuffer,et),yt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(T),dt,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(T),dt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,dt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,P)}else{const lt=T.textures;for(let et=0;et<lt.length;et++){const dt=lt[et],yt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),j=b(dt.internalFormat,yt,K,dt.normalized,dt.colorSpace);_t(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe(T),j,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe(T),j,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,j,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function zt(P,T,H){const lt=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const et=n.get(T.depthTexture);et.__renderTarget=T;const dt=lt?T.depthTexture.image[0]:T.depthTexture.image;(!et.__webglTexture||dt.width!==T.width||dt.height!==T.height)&&(dt.width=T.width,dt.height=T.height,T.depthTexture.needsUpdate=!0),lt?xt(T.depthTexture,0):ot(T.depthTexture,0);const yt=et.__webglTexture,K=Pe(T),j=lt?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,mt=T.depthTexture.format===Ni?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===ki)_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,j,yt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,mt,j,yt,0);else if(T.depthTexture.format===Ni)_t(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,j,yt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,mt,j,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(P){const T=n.get(P),H=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const lt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),lt){const et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,lt.removeEventListener("dispose",et)};lt.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=lt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let lt=0;lt<6;lt++)zt(T.__webglFramebuffer[lt],P,lt);else P.texture.mipmaps.length>0?zt(T.__webglFramebuffer[0],P,0):zt(T.__webglFramebuffer,P,0);else if(H){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]===void 0)T.__webglDepthbuffer[lt]=s.createRenderbuffer(),ne(T.__webglDepthbuffer[lt],P,!1);else{const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,dt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ne(T.__webglDepthbuffer,P,!1);else{const et=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,dt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,T,H){const lt=n.get(P);T!==void 0&&St(lt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&he(P)}function ye(P){const T=P.texture,H=n.get(P),lt=n.get(T);P.addEventListener("dispose",D),I(P);const et=P.textures,dt=P.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=T.version,o.memory.textures++),dt){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let j=0;j<T.mipmaps.length;j++)H.__webglFramebuffer[K][j]=s.createFramebuffer()}else H.__webglFramebuffer[K]=s.createFramebuffer()}else{if(T.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)H.__webglFramebuffer[K]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(yt)for(let K=0,j=et.length;K<j;K++){const mt=n.get(et[K]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&_t(P)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<et.length;K++){const j=et[K];H.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[K]);const mt=r.convert(j.format,j.colorSpace),U=r.convert(j.type),tt=b(j.internalFormat,mt,U,j.normalized,j.colorSpace,P.isXRRenderTarget===!0),$=Pe(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,tt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,H.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ne(H.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),jt(s.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)St(H.__webglFramebuffer[K][j],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else St(H.__webglFramebuffer[K],P,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);M(T)?y(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let K=0,j=et.length;K<j;K++){const mt=et[K],U=n.get(mt);let tt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,U.__webglTexture),jt(tt,mt),St(H.__webglFramebuffer,P,mt,s.COLOR_ATTACHMENT0+K,tt,0),M(mt)&&y(tt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(K=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,lt.__webglTexture),jt(K,T),T.mipmaps.length>0)for(let j=0;j<T.mipmaps.length;j++)St(H.__webglFramebuffer[j],P,T,s.COLOR_ATTACHMENT0,K,j);else St(H.__webglFramebuffer,P,T,s.COLOR_ATTACHMENT0,K,0);M(T)?y(K):T.mipmaps.length>0&&s.texParameteri(K,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&he(P)}function O(P){const T=P.textures;for(let H=0,lt=T.length;H<lt;H++){const et=T[H];if(M(et)&&et.mipmapsAutoUpdate===!0){const dt=w(P),yt=n.get(et).__webglTexture;e.bindTexture(dt,yt),y(dt),e.unbindTexture()}}}const Ye=[];function ae(P){if(P.samples>0){if(_t(P)===!1){const T=P.textures,H=P.width,lt=P.height;let et=s.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(P),K=T.length>1;if(K)for(let mt=0;mt<T.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let mt=0;mt<T.length;mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const U=n.get(T[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,H,lt,0,0,H,lt,et,s.NEAREST),l===!0&&(Ye.length=0,Ye.push(s.COLOR_ATTACHMENT0+mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ye.push(dt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let mt=0;mt<T.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[mt]);const U=n.get(T[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const T=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Pe(P){return Math.min(i.maxSamples,P.samples)}function _t(P){const T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ve(P){const T=o.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Xt(P,T){const H=P.colorSpace,lt=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==ns&&H!==Zn&&(ue.getTransfer(H)===Ae?(lt!==un||et!==Dn)&&bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",H)),T}function Qt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Rt,this.resetTextureUnits=J,this.getTextureUnits=Z,this.setTextureUnits=at,this.setTexture2D=ot,this.setTexture2DArray=Tt,this.setTexture3D=Pt,this.setTextureCube=xt,this.rebindTextures=fe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t,this.dispose=k}function B0(s,t){function e(n,i=Zn){let r;const o=ue.getTransfer(i);if(n===Dn)return s.UNSIGNED_BYTE;if(n===zl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vh)return s.BYTE;if(n===Gh)return s.SHORT;if(n===Tr)return s.UNSIGNED_SHORT;if(n===Bl)return s.INT;if(n===Qn)return s.UNSIGNED_INT;if(n===En)return s.FLOAT;if(n===je)return s.HALF_FLOAT;if(n===Xh)return s.ALPHA;if(n===qh)return s.RGB;if(n===un)return s.RGBA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Ni)return s.DEPTH_STENCIL;if(n===Vl)return s.RED;if(n===No)return s.RED_INTEGER;if(n===es)return s.RG;if(n===Gl)return s.RG_INTEGER;if(n===Hl)return s.RGBA_INTEGER;if(n===io||n===so||n===ro||n===oo)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ja||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===sl||n===rl||n===ol||n===po||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nl||n===il)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===rl)return r.COMPRESSED_R11_EAC;if(n===ol)return r.COMPRESSED_SIGNED_R11_EAC;if(n===po)return r.COMPRESSED_RG11_EAC;if(n===al)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl||n===vl||n===_l||n===yl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===bl||n===wl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tl||n===Al||n===mo||n===El)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Al)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ns?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const zS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kS=`
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

}`;class VS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ou(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ze({vertexShader:zS,fragmentShader:kS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GS extends fi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new VS,g={},v=e.getContextAttributes();let M=null,y=null;const w=[],b=[],_=new Q;let S=null,I=null;const R=new an;R.viewport=new Se;const C=new an;C.viewport=new Se;const D=[R,C],z=new M0;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ot=w[X];return ot===void 0&&(ot=new ka,w[X]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(X){let ot=w[X];return ot===void 0&&(ot=new ka,w[X]=ot),ot.getGripSpace()},this.getHand=function(X){let ot=w[X];return ot===void 0&&(ot=new ka,w[X]=ot),ot.getHandSpace()};function q(X){const ot=b.indexOf(X.inputSource);if(ot===-1)return;const Tt=w[ot];Tt!==void 0&&(Tt.update(X.inputSource,X.frame,c||o),Tt.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",st);for(let X=0;X<w.length;X++){const ot=b[X];ot!==null&&(b[X]=null,w[X].disconnect(ot))}L=null,k=null,m.reset();for(const X in g)delete g[X];if(t.setRenderTarget(M),f=null,u=null,d=null,i=null,y=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),I!==null){const X=I.camera;X.fov=I.fov,X.zoom=I.zoom,X.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",B),i.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Pt=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=v.stencil?Ni:ki,Pt=v.stencil?Ns:Qn);const Bt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Xe(u.textureWidth,u.textureHeight,{format:un,type:Dn,depthTexture:new Bs(u.textureWidth,u.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Tt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xe(f.framebufferWidth,f.framebufferHeight,{format:un,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(X){for(let ot=0;ot<X.removed.length;ot++){const Tt=X.removed[ot],Pt=b.indexOf(Tt);Pt>=0&&(b[Pt]=null,w[Pt].disconnect(Tt))}for(let ot=0;ot<X.added.length;ot++){const Tt=X.added[ot];let Pt=b.indexOf(Tt);if(Pt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=b.length){b.push(Tt),Pt=Bt;break}else if(b[Bt]===null){b[Bt]=Tt,Pt=Bt;break}if(Pt===-1)break}const xt=w[Pt];xt&&xt.connect(Tt)}}function G(X,ot){ot===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ot.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let ot=X.near,Tt=X.far;m.texture!==null&&(m.depthNear>0&&(ot=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),z.near=C.near=R.near=ot,z.far=C.far=R.far=Tt,(L!==z.near||k!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,k=z.far),z.layers.mask=X.layers.mask|6,R.layers.mask=z.layers.mask&-5,C.layers.mask=z.layers.mask&-3;const Pt=X.parent,xt=z.cameras;G(z,Pt);for(let Bt=0;Bt<xt.length;Bt++)G(xt[Bt],Pt);z.projectionMatrix.copy(R.projectionMatrix),z.projectionMatrixInverse.copy(R.projectionMatrixInverse),I===null&&X.isPerspectiveCamera&&(I={camera:X,fov:X.fov,zoom:X.zoom}),J(X,z,Pt)};function J(X,ot,Tt){Tt===null?X.matrix.copy(ot.matrixWorld):(X.matrix.copy(Tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ot.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ot.projectionMatrix),X.projectionMatrixInverse.copy(ot.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ar*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(X){return g[X]};let Z=null;function at(X,ot){if(h=ot.getViewerPose(c||o),p=ot,h!==null){const Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Pt=!1;Tt.length!==z.cameras.length&&(z.cameras.length=0,Pt=!0);for(let Ht=0;Ht<Tt.length;Ht++){const jt=Tt[Ht];let ce=null;if(f!==null)ce=f.getViewport(jt);else{const pt=d.getViewSubImage(u,jt);ce=pt.viewport,Ht===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let it=D[Ht];it===void 0&&(it=new an,it.layers.enable(Ht),it.viewport=new Se,D[Ht]=it),it.matrix.fromArray(jt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(jt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ce.x,ce.y,ce.width,ce.height),Ht===0&&(z.matrix.copy(it.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pt===!0&&z.cameras.push(it)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Ht=d.getDepthInformation(Tt[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,i.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Ht=0;Ht<Tt.length;Ht++){const jt=Tt[Ht].camera;if(jt){let ce=g[jt];ce||(ce=new ou,g[jt]=ce);const it=d.getCameraImage(jt);ce.sourceTexture=it}}}}for(let Tt=0;Tt<w.length;Tt++){const Pt=b[Tt],xt=w[Tt];Pt!==null&&xt!==void 0&&xt.update(Pt,ot,c||o)}Z&&Z(X,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),p=null}const Rt=new C0;Rt.setAnimationLoop(at),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}const HS=new Yt,z0=new te;z0.set(-1,0,0,0,1,0,0,0,1);function WS(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Kp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(HS.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(z0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function XS(s,t,e,n){let i={},r={};function o(v,M){const y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,M){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(v,w);const b=t.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){const M=s.createBuffer(),y=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,y,w),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){const M=i[v.id],y=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,_=y.length;b<_;b++){const S=y[b];if(Array.isArray(S))for(let I=0,R=S.length;I<R;I++)h(S[I],b,I,w);else h(S,b,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,y,w){if(u(v,M,y,w)===!0){const b=v.__offset,_=v.value;if(Array.isArray(_)){let S=0;for(let I=0;I<_.length;I++){const R=_[I],C=x(R,!0);d(R,v.__data,S),S+=C.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,v.__data)}}function d(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function u(v,M,y,w){const b=v.value,_=M+"_"+y;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);const S=w[_];let I=!1;for(let R=0;R<b.length;R++)f(b[R],S,R)===!0&&(I=!0);return I}return f(b,w,_)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{const w=M[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){const M=v.uniforms;let y=0;const w=16;for(let _=0,S=M.length;_<S;_++){const I=Array.isArray(M[_])?M[_]:[M[_]];for(let R=0,C=I.length;R<C;R++){const D=I[R],z=Array.isArray(D.value)?D.value:[D.value],L=Array.isArray(M[_])||Array.isArray(D.value);let k=y;for(let B=0,st=z.length;B<st;B++){const G=z[B],J=x(G,L),Z=y%w,at=Z%J.boundary,Rt=Z+at;y+=at,Rt!==0&&w-Rt<J.storage&&(y+=w-Rt),B===0&&(k=y),y+=J.storage}const q=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new q((y-k)/Float32Array.BYTES_PER_ELEMENT),D.__offset=k}}const b=y%w;return b>0&&(y+=w-b),v.__size=y,v.__cache={},this}function x(v,M){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):bt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){const M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}const qS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function YS(){return xi===null&&(xi=new Cn(qS,16,16,es,je),xi.name="DFG_LUT",xi.minFilter=Re,xi.magFilter=Re,xi.wrapS=An,xi.wrapT=An,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class k0{constructor(t={}){const{canvas:e=Ep(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([Hl,Gl,No]),g=new Set([Dn,Qn,Tr,Ns,zl,kl]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const _=[],S=[];let I=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1,D=null,z=null,L=null,k=null;this._outputColorSpace=yn;let q=0,B=0,st=null,G=-1,J=null;const Z=new Se,at=new Se;let Rt=null;const X=new nt(0);let ot=0,Tt=e.width,Pt=e.height,xt=1,Bt=null,Te=null;const Ht=new Se(0,0,Tt,Pt),jt=new Se(0,0,Tt,Pt);let ce=!1;const it=new Os,pt=new Uo;let ut=!1,It=!1;const St=new Yt,ne=new E,zt=new Se,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ye(){return st===null?xt:1}let O=n;function Ye(A,F){return e.getContext(A,F)}let ae,Pe,_t,Ve,Xt,Qt,P,T,H,lt,et,dt,yt,K,j,mt,U,tt,$,gt,ht,ft,Vt;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fl}`),e.addEventListener("webglcontextlost",Wt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Et,!1),O===null){const F="webgl2";if(O=Ye(F,A),O===null)throw Ye(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(A){throw e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),kt("WebGLRenderer: "+A.message),A}function oe(){ae=new Q1(O),ae.init(),ht=new B0(O,ae),Pe=new V1(O,ae,t,ht),_t=new OS(O,ae),Pe.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),z=O.createFramebuffer(),L=O.createFramebuffer(),k=O.createFramebuffer(),Ve=new eM(O),Xt=new bS,Qt=new BS(O,ae,_t,Xt,Pe,ht,Ve),P=new K1(R),T=new i_(O),ft=new z1(O,T),H=new j1(O,T,Ve,ft),lt=new iM(O,H,T,ft,Ve),tt=new nM(O,Pe,Qt),j=new G1(Xt),et=new SS(R,P,ae,Pe,ft,j),dt=new WS(R,Xt),yt=new TS,K=new IS(ae),U=new B1(R,P,_t,lt,p,l),mt=new FS(R,lt,Pe),Vt=new XS(O,Ve,Pe,_t),$=new k1(O,ae,Ve),gt=new tM(O,ae,Ve),Ve.programs=et.programs,R.capabilities=Pe,R.extensions=ae,R.properties=Xt,R.renderLists=yt,R.shadowMap=mt,R.state=_t,R.info=Ve}x!==Dn&&(I=new rM(x,e.width,e.height,a,i,r));const ct=new GS(R,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(A){A!==void 0&&(xt=A,this.setSize(Tt,Pt,!1))},this.getSize=function(A){return A.set(Tt,Pt)},this.setSize=function(A,F,Y=!0){if(ct.isPresenting){bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=A,Pt=F,e.width=Math.floor(A*xt),e.height=Math.floor(F*xt),Y===!0&&(e.style.width=A+"px",e.style.height=F+"px"),I!==null&&I.setSize(e.width,e.height),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(Tt*xt,Pt*xt).floor()},this.setDrawingBufferSize=function(A,F,Y){Tt=A,Pt=F,xt=Y,e.width=Math.floor(A*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,A,F)},this.setEffects=function(A){if(x===Dn){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let F=0;F<A.length;F++)if(A[F].isOutputPass===!0){bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Ht)},this.setViewport=function(A,F,Y,V){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,F,Y,V),_t.viewport(Z.copy(Ht).multiplyScalar(ye()).round())},this.getScissor=function(A){return A.copy(jt)},this.setScissor=function(A,F,Y,V){A.isVector4?jt.set(A.x,A.y,A.z,A.w):jt.set(A,F,Y,V),_t.scissor(at.copy(jt).multiplyScalar(ye()).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){_t.setScissorTest(ce=A)},this.setOpaqueSort=function(A){Bt=A},this.setTransparentSort=function(A){Te=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,F=!0,Y=!0){let V=0;if(A){let W=!1;if(st!==null){const Mt=st.texture.format;W=m.has(Mt)}if(W){const Mt=st.texture.type,Dt=g.has(Mt),vt=U.getClearColor(),Ct=U.getClearAlpha(),Ot=vt.r,ee=vt.g,pe=vt.b;Dt?(v[0]=Ot,v[1]=ee,v[2]=pe,v[3]=Ct,O.clearBufferuiv(O.COLOR,0,v)):(M[0]=Ot,M[1]=ee,M[2]=pe,M[3]=Ct,O.clearBufferiv(O.COLOR,0,M))}else V|=O.COLOR_BUFFER_BIT}F&&(V|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Wt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),U.dispose(),yt.dispose(),K.dispose(),Qt.dispose(),Xt.dispose(),P.dispose(),lt.dispose(),H.dispose(),ft.dispose(),Vt.dispose(),et.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Uu),ct.removeEventListener("sessionend",Fu),cs.stop()};function Wt(A){A.preventDefault(),yo("WebGLRenderer: Context Lost."),C=!0}function ie(){yo("WebGLRenderer: Context Restored."),C=!1;const A=Ve.autoReset,F=mt.enabled,Y=mt.autoUpdate,V=mt.needsUpdate,W=mt.type;oe(),Ve.autoReset=A,mt.enabled=F,mt.autoUpdate=Y,mt.needsUpdate=V,mt.type=W}function Et(A){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ee(A){const F=A.target;F.removeEventListener("dispose",Ee),sn(F)}function sn(A){Xi(A),Xt.remove(A)}function Xi(A){const F=Xt.get(A).programs;F!==void 0&&(F.forEach(function(Y){et.releaseProgram(Y)}),A.isShaderMaterial&&et.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,Y,V,W,Mt){F===null&&(F=he);const Dt=W.isMesh&&W.matrixWorld.determinantAffine()<0,vt=nm(A,F,Y,V,W);_t.setMaterial(V,Dt);let Ct=Y.index,Ot=1;if(V.wireframe===!0){if(Ct=H.getWireframeAttribute(Y),Ct===void 0)return;Ot=2}const ee=Y.drawRange,pe=Y.attributes.position;let Nt=ee.start*Ot,me=(ee.start+ee.count)*Ot;Mt!==null&&(Nt=Math.max(Nt,Mt.start*Ot),me=Math.min(me,(Mt.start+Mt.count)*Ot)),Ct!==null?(Nt=Math.max(Nt,0),me=Math.min(me,Ct.count)):pe!=null&&(Nt=Math.max(Nt,0),me=Math.min(me,pe.count));const Ze=me-Nt;if(Ze<0||Ze===1/0)return;ft.setup(W,V,vt,Y,Ct);let Ne,Ie=$;if(Ct!==null&&(Ne=T.get(Ct),Ie=gt,Ie.setIndex(Ne)),W.isMesh)V.wireframe===!0?(_t.setLineWidth(V.wireframeLinewidth*ye()),Ie.setMode(O.LINES)):Ie.setMode(O.TRIANGLES);else if(W.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),_t.setLineWidth(pn*ye()),W.isLineSegments?Ie.setMode(O.LINES):W.isLineLoop?Ie.setMode(O.LINE_LOOP):Ie.setMode(O.LINE_STRIP)}else W.isPoints?Ie.setMode(O.POINTS):W.isSprite&&Ie.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const pn=W._multiDrawStarts,Ut=W._multiDrawCounts,bn=W._multiDrawCount,be=Ct?T.get(Ct).bytesPerElement:1,hs=Xt.get(V).currentProgram.getUniforms();for(let mn=0;mn<bn;mn++)hs.setValue(O,"_gl_DrawID",mn),Ie.render(pn[mn]/be,Ut[mn])}else if(W.isInstancedMesh)Ie.renderInstances(Nt,Ze,W.count);else if(Y.isInstancedBufferGeometry){const pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ut=Math.min(Y.instanceCount,pn);Ie.renderInstances(Nt,Ze,Ut)}else Ie.render(Nt,Ze)};function Nu(A,F,Y,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),ut===!0&&j.setState(A,Y,!1),A.transparent===!0&&A.side===Ue&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,Or(A,F,V),A.side=Bi,A.needsUpdate=!0,Or(A,F,V),A.side=Ue):Or(A,F,V)}this.compile=function(A,F,Y=null){Y===null&&(Y=A),D!==null&&D.renderStart(A,F,Y),b=K.get(Y),b.init(F),S.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),It=this.localClippingEnabled,ut=j.init(this.clippingPlanes,It),ut===!0&&j.setGlobalState(this.clippingPlanes,F),D!==null&&mt.render(b.state.shadowsArray,Y,F);const V=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let Dt=0;Dt<Mt.length;Dt++){const vt=Mt[Dt];Nu(vt,Y,F,W),V.add(vt)}else Nu(Mt,Y,F,W),V.add(Mt)}),b=S.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,F,Y=null){const V=this.compile(A,F,Y);return new Promise(W=>{function Mt(){if(V.forEach(function(Dt){const Ct=Xt.get(Dt).currentProgram;(Ct===void 0||Ct.isReady())&&V.delete(Dt)}),V.size===0){W(A);return}setTimeout(Mt,10)}ae.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Mc=null;function tm(A){Mc&&Mc(A)}function Uu(){cs.stop()}function Fu(){cs.start()}const cs=new C0;cs.setAnimationLoop(tm),typeof self<"u"&&cs.setContext(self),this.setAnimationLoop=function(A){Mc=A,ct.setAnimationLoop(A),A===null?cs.stop():cs.start()},ct.addEventListener("sessionstart",Uu),ct.addEventListener("sessionend",Fu),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;D!==null&&D.renderStart(A,F);const Y=ct.enabled===!0&&ct.isPresenting===!0,V=I!==null&&(st===null||Y)&&I.begin(R,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(F),F=ct.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,F,st),b=K.get(A,S.length),b.init(F),b.state.textureUnits=Qt.getTextureUnits(),S.push(b),St.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?pt.setFromArrayCamera(F):it.setFromProjectionMatrix(St,Vn,F.reversedDepth),It=this.localClippingEnabled,ut=j.init(this.clippingPlanes,It),w=yt.get(A,_.length),w.init(),_.push(w),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){const Dt=R.xr.getDepthSensingMesh();Dt!==null&&Sc(Dt,F,-1/0,R.sortObjects)}Sc(A,F,0,R.sortObjects),w.finish(),D!==null&&D.updateLights(b.state.lightsArray),R.sortObjects===!0&&w.sort(Bt,Te),fe=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,fe&&U.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),ut===!0&&j.beginShadows();const W=b.state.shadowsArray;if(mt.render(W,A,F),ut===!0&&j.endShadows(),(V&&I.hasRenderPass())===!1){const Dt=w.opaque,vt=w.transmissive;if(b.setupLights(),F.isArrayCamera){const Ct=F.cameras;if(vt.length>0)for(let Ot=0,ee=Ct.length;Ot<ee;Ot++){const pe=Ct[Ot];Bu(Dt,vt,A,pe)}fe&&U.render(A);for(let Ot=0,ee=Ct.length;Ot<ee;Ot++){const pe=Ct[Ot];Ou(w,A,pe,pe.viewport)}}else vt.length>0&&Bu(Dt,vt,A,F),fe&&U.render(A),Ou(w,A,F)}st!==null&&B===0&&(Qt.updateMultisampleRenderTarget(st),Qt.updateRenderTargetMipmap(st)),V&&I.end(R),A.isScene===!0&&A.onAfterRender(R,A,F),ft.resetDefaultState(),G=-1,J=null,S.pop(),S.length>0?(b=S[S.length-1],Qt.setTextureUnits(b.state.textureUnits),ut===!0&&j.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,D!==null&&D.renderEnd()};function Sc(A,F,Y,V){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){const Dt=F.isArrayCamera?pt:it;if(!A.frustumCulled||A.intersectsFrustum(Dt)){V&&zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(St);const vt=lt.update(A),Ct=A.material;Ct.visible&&w.push(A,vt,Ct,Y,zt.z,null,F)}}else if(A.isMesh||A.isLine||A.isPoints){const Dt=F.isArrayCamera?pt:it;if(!A.frustumCulled||A.intersectsFrustum(Dt)){const vt=lt.update(A),Ct=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),zt.copy(vt.boundingSphere.center)),zt.applyMatrix4(A.matrixWorld).applyMatrix4(St)),Array.isArray(Ct)){const Ot=vt.groups;for(let ee=0,pe=Ot.length;ee<pe;ee++){const Nt=Ot[ee],me=Ct[Nt.materialIndex];me&&me.visible&&w.push(A,vt,me,Y,zt.z,Nt,F)}}else Ct.visible&&w.push(A,vt,Ct,Y,zt.z,null,F)}}}const Mt=A.children;for(let Dt=0,vt=Mt.length;Dt<vt;Dt++)Sc(Mt[Dt],F,Y,V)}function Ou(A,F,Y,V){const{opaque:W,transmissive:Mt,transparent:Dt}=A;b.setupLightsView(Y),ut===!0&&j.setGlobalState(R.clippingPlanes,Y),V&&_t.viewport(Z.copy(V)),W.length>0&&Ho(W,F,Y),Mt.length>0&&Ho(Mt,F,Y),Dt.length>0&&Ho(Dt,F,Y),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Bu(A,F,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Nt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Xe(1,1,{generateMipmaps:!0,type:Nt?je:Dn,minFilter:kn,samples:Math.max(4,Pe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const Mt=b.state.transmissionRenderTarget[V.id],Dt=V.viewport||Z;Mt.setSize(Dt.z*R.transmissionResolutionScale,Dt.w*R.transmissionResolutionScale);const vt=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Ot=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(X),ot=R.getClearAlpha(),ot<1&&R.setClearColor(16777215,.5),R.clear(),fe&&U.render(Y);const ee=R.toneMapping;R.toneMapping=hi;const pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ut===!0&&j.setGlobalState(R.clippingPlanes,V),Ho(A,Y,V),Qt.updateMultisampleRenderTarget(Mt),Qt.updateRenderTargetMipmap(Mt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let me=0,Ze=F.length;me<Ze;me++){const Ne=F[me],{object:Ie,geometry:pn,material:Ut,group:bn}=Ne;if(Ut.side===Ue&&Ie.layers.test(V.layers)){const be=Ut.side;Ut.side=Mn,Ut.needsUpdate=!0,zu(Ie,Y,V,pn,Ut,bn),Ut.side=be,Ut.needsUpdate=!0,Nt=!0}}Nt===!0&&(Qt.updateMultisampleRenderTarget(Mt),Qt.updateRenderTargetMipmap(Mt))}R.setRenderTarget(vt,Ct,Ot),R.setClearColor(X,ot),pe!==void 0&&(V.viewport=pe),R.toneMapping=ee}function Ho(A,F,Y){const V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Mt=A.length;W<Mt;W++){const Dt=A[W],{object:vt,geometry:Ct,group:Ot}=Dt;let ee=Dt.material;ee.allowOverride===!0&&V!==null&&(ee=V),vt.layers.test(Y.layers)&&zu(vt,F,Y,Ct,ee,Ot)}}function zu(A,F,Y,V,W,Mt){D!==null&&W.isNodeMaterial&&D.setObject(A,W),A.onBeforeRender(R,F,Y,V,W,Mt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,F,Y,V,A,Mt),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,R.renderBufferDirect(Y,F,V,W,A,Mt),W.side=Bi,W.needsUpdate=!0,R.renderBufferDirect(Y,F,V,W,A,Mt),W.side=Ue):R.renderBufferDirect(Y,F,V,W,A,Mt),A.onAfterRender(R,F,Y,V,W,Mt)}function ku(A){let F=0;for(const Y of A)Y.texture!==null&&F++;return F}function Or(A,F,Y){F.isScene!==!0&&(F=he);const V=Xt.get(A),W=b.state.lights,Mt=b.state.shadowsArray,Dt=W.state.version,vt=et.getParameters(A,W.state,Mt,F,Y,b.state.lightProbeGridArray),Ct=et.getProgramCacheKey(vt);let Ot=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;const ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=P.get(A.envMap||V.environment,ee),V.envMapRotation=V.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Ot===void 0&&(A.addEventListener("dispose",Ee),Ot=new Map,V.programs=Ot,V.programVariants=new Map);let pe=Ot.get(Ct);if(pe!==void 0){if(V.currentProgram===pe&&V.lightsStateVersion===Dt)return Gu(A,vt),pe}else vt.uniforms=et.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Y,vt),A.onBeforeCompile(vt,R),pe=et.acquireProgram(vt,Ct),Ot.set(Ct,pe),V.uniforms=vt.uniforms;const Nt=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=j.uniform),Gu(A,vt),V.needsLights=sm(A),V.lightsStateVersion=Dt,V.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.sunLights.value=W.state.sun,Nt.sunLightShadows.value=W.state.sunShadow,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.sunShadowMatrix.value=W.state.sunShadowMatrix,Nt.sunShadowCascade.value=W.state.sunShadowCascade,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.numLightProbeGrids=ku(b.state.lightProbeGridArray),V.currentProgram=pe,V.uniformsList=null,pe}function em(A,F,Y,V,W){const Mt=Xt.get(A),Dt=Mt.currentProgram.id+","+V+","+W;let vt=Mt.programVariants.get(Dt);return vt===void 0?(vt=Or(A,F,Y),Mt.programVariants.set(Dt,vt)):(Mt.currentProgram=vt,Mt.uniformsList=null,Mt.outputColorSpace=V,Mt.toneMapping=W),vt}function Vu(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Va.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Gu(A,F){const Y=Xt.get(A);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function nm(A,F,Y,V,W){F.isScene!==!0&&(F=he),Qt.resetTextureUnits();const Mt=F.fog,Dt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,vt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ue.workingColorSpace,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ot=P.get(V.envMap||Dt,Ct),ee=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pe=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Nt=!!Y.morphAttributes.position,me=!!Y.morphAttributes.normal,Ze=!!Y.morphAttributes.color;let Ne=hi;V.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ne=R.toneMapping);const Ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=Ie!==void 0?Ie.length:0,Ut=Xt.get(V),bn=b.state.lights;if(ut===!0&&(It===!0||A!==J)){const Fe=A===J&&V.id===G;j.setState(V,A,Fe)}let be=!1,hs=!1;V.version===Ut.__version?Ut.needsLights&&Ut.lightsStateVersion!==bn.state.version||W.isBatchedMesh&&Ut.batching===!1||!W.isBatchedMesh&&Ut.batching===!0||W.isBatchedMesh&&Ut.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ut.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ut.instancing===!1||!W.isInstancedMesh&&Ut.instancing===!0||W.isSkinnedMesh&&Ut.skinning===!1||!W.isSkinnedMesh&&Ut.skinning===!0||W.isInstancedMesh&&Ut.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ut.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ut.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ut.instancingMorph===!1&&W.morphTexture!==null||Ut.envMap!==Ot||V.fog===!0&&Ut.fog!==Mt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==j.numPlanes||Ut.numIntersection!==j.numIntersection)||Ut.vertexAlphas!==ee||Ut.vertexTangents!==pe||Ut.morphTargets!==Nt||Ut.morphNormals!==me||Ut.morphColors!==Ze||Ut.morphTargetsCount!==pn||Ut.numLightProbeGrids!==ku(b.state.lightProbeGridArray)?be=!0:(Ut.outputColorSpace!==vt||Ut.toneMapping!==Ne)&&(hs=!0):(be=!0,Ut.__version=V.version);let mn=Ut.currentProgram;(be===!0||hs===!0)&&(mn=hs===!0?em(V,F,W,vt,Ne):Or(V,F,W),D&&V.isNodeMaterial&&D.onUpdateProgram(V,mn,Ut));let Wo=!1,qi=!1,us=!1;const ve=mn.getUniforms(),cn=Ut.uniforms;if(_t.useProgram(mn.program)&&(Wo=!0,qi=!0,us=!0),V.id!==G&&(G=V.id,qi=!0),Wo||J!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ve.setValue(O,"projectionMatrix",A.projectionMatrix),ve.setValue(O,"viewMatrix",A.matrixWorldInverse);const rn=ve.map.cameraPosition;rn!==void 0&&rn.setValue(O,ne.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ve.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,qi=!0,us=!0)}if(Ut.needsLights&&(bn.state.sunShadowMap.length>0&&ve.setValue(O,"sunShadowMap",bn.state.sunShadowMap,Qt),bn.state.directionalShadowMap.length>0&&ve.setValue(O,"directionalShadowMap",bn.state.directionalShadowMap,Qt),bn.state.spotShadowMap.length>0&&ve.setValue(O,"spotShadowMap",bn.state.spotShadowMap,Qt),bn.state.pointShadowMap.length>0&&ve.setValue(O,"pointShadowMap",bn.state.pointShadowMap,Qt)),W.isSkinnedMesh){ve.setOptional(O,W,"bindMatrix"),ve.setOptional(O,W,"bindMatrixInverse");const Fe=W.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ve.setValue(O,"boneTexture",Fe.boneTexture,Qt))}W.isBatchedMesh&&(ve.setOptional(O,W,"batchingTexture"),ve.setValue(O,"batchingTexture",W._matricesTexture,Qt),ve.setOptional(O,W,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",W._indirectTexture,Qt),ve.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",W._colorsTexture,Qt));const ei=Y.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&tt.update(W,Y,mn),(qi||Ut.receiveShadow!==W.receiveShadow)&&(Ut.receiveShadow=W.receiveShadow,ve.setValue(O,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=YS()),qi){if(ve.setValue(O,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&im(cn,us),Mt&&V.fog===!0&&dt.refreshFogUniforms(cn,Mt),dt.refreshMaterialUniforms(cn,V,xt,Pt,b.state.transmissionRenderTarget[A.id]),Ut.needsLights&&Ut.numLightProbeGrids>0){const Fe=y;let rn=0;for(const Ti of b.state.lightProbeGridArray)Ti.texture!==null&&(Fe.textures[rn]=Ti.texture,Fe.min[rn]=Ti.boundingBox.min,Fe.max[rn]=Ti.boundingBox.max,Fe.resolution[rn]=Ti.resolution,rn++);for(const Ti in Fe)Fe[Ti].length=rn;cn.probesSH.value=Fe.textures,cn.probesMin.value=Fe.min,cn.probesMax.value=Fe.max,cn.probesResolution.value=Fe.resolution}Va.upload(O,Vu(Ut),cn,Qt)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Va.upload(O,Vu(Ut),cn,Qt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ve.setValue(O,"center",W.center),ve.setValue(O,"modelViewMatrix",W.modelViewMatrix),ve.setValue(O,"normalMatrix",W.normalMatrix),ve.setValue(O,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const Fe=V.uniformsGroups;for(let rn=0,Ti=Fe.length;rn<Ti;rn++){const Wu=Fe[rn];Vt.update(Wu,mn),Vt.bind(Wu,mn)}}return mn}function im(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.sunLights.needsUpdate=F,A.sunLightShadows.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function sm(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,F,Y){const V=Xt.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Xt.get(A.texture).__webglTexture=F,Xt.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,F){const Y=Xt.get(A);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,Y=0){st=A,q=F,B=Y;let V=null,W=!1,Mt=!1;if(A){const vt=Xt.get(A);if(vt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(O.FRAMEBUFFER,vt.__webglFramebuffer),Z.copy(A.viewport),at.copy(A.scissor),Rt=A.scissorTest,_t.viewport(Z),_t.scissor(at),_t.setScissorTest(Rt),G=-1;return}else if(vt.__webglFramebuffer===void 0)Qt.setupRenderTarget(A);else if(vt.__hasExternalTextures)Qt.rebindTextures(A,Xt.get(A.texture).__webglTexture,Xt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(vt.__boundDepthTexture!==ee){if(ee!==null&&Xt.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qt.setupDepthRenderbuffer(A)}}const Ct=A.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);const Ot=Xt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?V=Ot[F][Y]:V=Ot[F],W=!0):A.samples>0&&Qt.useMultisampledRTT(A)===!1?V=Xt.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?V=Ot[Y]:V=Ot,Z.copy(A.viewport),at.copy(A.scissor),Rt=A.scissorTest}else Z.copy(Ht).multiplyScalar(xt).floor(),at.copy(jt).multiplyScalar(xt).floor(),Rt=ce;if(Y!==0&&(V=z),_t.bindFramebuffer(O.FRAMEBUFFER,V)&&_t.drawBuffers(A,V),_t.viewport(Z),_t.scissor(at),_t.setScissorTest(Rt),W){const vt=Xt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,Y)}else if(Mt){const vt=F;for(let Ct=0;Ct<A.textures.length;Ct++){const Ot=Xt.get(A.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,Ot.__webglTexture,Y,vt)}}else if(A!==null&&Y!==0){const vt=Xt.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vt.__webglTexture,Y)}G=-1};function Hu(A){const F=Xt.get(A);return(F.__readFormat!==A.format||F.__readType!==A.type)&&(F.__readFormat=A.format,F.__readType=A.type,F.__formatReadable=Pe.textureFormatReadable(A.format),F.__typeReadable=Pe.textureTypeReadable(A.type)),F}this.readRenderTargetPixels=function(A,F,Y,V,W,Mt,Dt,vt=0){if(!(A&&A.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){_t.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Ot=A.textures[vt],ee=Ot.format,pe=Ot.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);const Nt=Hu(Ot);if(Nt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-W&&O.readPixels(F,Y,V,W,ht.convert(ee),ht.convert(pe),Mt)}finally{const Ot=st!==null?Xt.get(st).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,F,Y,V,W,Mt,Dt,vt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Xt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ct=Ct[Dt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(F>=0&&F<=A.width-V&&Y>=0&&Y<=A.height-W){_t.bindFramebuffer(O.FRAMEBUFFER,Ct);const Ot=A.textures[vt],ee=Ot.format,pe=Ot.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+vt);const Nt=Hu(Ot);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.bufferData(O.PIXEL_PACK_BUFFER,Mt.byteLength,O.STREAM_READ),O.readPixels(F,Y,V,W,ht.convert(ee),ht.convert(pe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ze=st!==null?Xt.get(st).__webglFramebuffer:null;_t.bindFramebuffer(O.FRAMEBUFFER,Ze);const Ne=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await eg(O,Ne,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(me),O.deleteSync(Ne),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,F=null,Y=0){const V=Math.pow(2,-Y),W=Math.floor(A.image.width*V),Mt=Math.floor(A.image.height*V),Dt=F!==null?F.x:0,vt=F!==null?F.y:0;Qt.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Y,0,0,Dt,vt,W,Mt),_t.unbindTexture()},this.copyTextureToTexture=function(A,F,Y=null,V=null,W=0,Mt=0){let Dt,vt,Ct,Ot,ee,pe,Nt,me,Ze;const Ne=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(Y!==null)Dt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,ee=Y.min.y,pe=Y.isBox3?Y.min.z:0;else{const ve=Math.pow(2,-W);Dt=Math.floor(Ne.width*ve),vt=Math.floor(Ne.height*ve),A.isDataArrayTexture?Ct=Ne.depth:A.isData3DTexture?Ct=Math.floor(Ne.depth*ve):Ct=1,Ot=0,ee=0,pe=0}V!==null?(Nt=V.x,me=V.y,Ze=V.z):(Nt=0,me=0,Ze=0);const Ie=ht.convert(F.format),pn=ht.convert(F.type);let Ut;F.isData3DTexture?(Qt.setTexture3D(F,0),Ut=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Qt.setTexture2DArray(F,0),Ut=O.TEXTURE_2D_ARRAY):(Qt.setTexture2D(F,0),Ut=O.TEXTURE_2D),_t.activeTexture(O.TEXTURE0),_t.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),_t.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_t.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const bn=_t.getParameter(O.UNPACK_ROW_LENGTH),be=_t.getParameter(O.UNPACK_IMAGE_HEIGHT),hs=_t.getParameter(O.UNPACK_SKIP_PIXELS),mn=_t.getParameter(O.UNPACK_SKIP_ROWS),Wo=_t.getParameter(O.UNPACK_SKIP_IMAGES);_t.pixelStorei(O.UNPACK_ROW_LENGTH,Ne.width),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ne.height),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,Ot),_t.pixelStorei(O.UNPACK_SKIP_ROWS,ee),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,pe);const qi=A.isDataArrayTexture||A.isData3DTexture,us=F.isDataArrayTexture||F.isData3DTexture;if(A.isDepthTexture){const ve=Xt.get(A),cn=Xt.get(F),ei=Xt.get(ve.__renderTarget),Fe=Xt.get(cn.__renderTarget);_t.bindFramebuffer(O.READ_FRAMEBUFFER,ei.__webglFramebuffer),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let rn=0;rn<Ct;rn++)qi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.get(A).__webglTexture,W,pe+rn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.get(F).__webglTexture,Mt,Ze+rn)),O.blitFramebuffer(Ot,ee,Ot+Dt,ee+vt,Nt,me,Nt+Dt,me+vt,O.DEPTH_BUFFER_BIT,O.NEAREST);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||Xt.has(A)){const ve=Xt.get(A),cn=Xt.get(F);_t.bindFramebuffer(O.READ_FRAMEBUFFER,L),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let ei=0;ei<Ct;ei++)qi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ve.__webglTexture,W,pe+ei):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,W),us?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,Mt,Ze+ei):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,Mt),W!==0?O.blitFramebuffer(Ot,ee,Ot+Dt,ee+vt,Nt,me,Nt+Dt,me+vt,O.COLOR_BUFFER_BIT,O.NEAREST):us?O.copyTexSubImage3D(Ut,Mt,Nt,me,Ze+ei,Ot,ee,Dt,vt):O.copyTexSubImage2D(Ut,Mt,Nt,me,Ot,ee,Dt,vt);_t.bindFramebuffer(O.READ_FRAMEBUFFER,null),_t.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else us?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ut,Mt,Nt,me,Ze,Dt,vt,Ct,Ie,pn,Ne.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Ut,Mt,Nt,me,Ze,Dt,vt,Ct,Ie,Ne.data):O.texSubImage3D(Ut,Mt,Nt,me,Ze,Dt,vt,Ct,Ie,pn,Ne):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Mt,Nt,me,Dt,vt,Ie,pn,Ne.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Mt,Nt,me,Ne.width,Ne.height,Ie,Ne.data):O.texSubImage2D(O.TEXTURE_2D,Mt,Nt,me,Dt,vt,Ie,pn,Ne);_t.pixelStorei(O.UNPACK_ROW_LENGTH,bn),_t.pixelStorei(O.UNPACK_IMAGE_HEIGHT,be),_t.pixelStorei(O.UNPACK_SKIP_PIXELS,hs),_t.pixelStorei(O.UNPACK_SKIP_ROWS,mn),_t.pixelStorei(O.UNPACK_SKIP_IMAGES,Wo),Mt===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Ut),_t.unbindTexture()},this.initRenderTarget=function(A){Xt.get(A).__webglFramebuffer===void 0&&Qt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Qt.setTextureCube(A,0):A.isData3DTexture?Qt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Qt.setTexture2DArray(A,0):Qt.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){q=0,B=0,st=null,_t.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const ZS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Fh,AddEquation:ws,AddOperation:dp,AdditiveAnimationBlendMode:Yh,AdditiveBlending:uo,AgXToneMapping:Bh,AlphaFormat:Xh,AlwaysCompare:Jh,AlwaysDepth:qa,AlwaysStencilFunc:yp,AmbientLight:g0,AnimationAction:w0,AnimationClip:To,AnimationLoader:Zx,AnimationMixer:wv,AnimationObjectGroup:Sv,AnimationUtils:Gx,ArcCurve:kp,ArrayCamera:M0,ArrowHelper:Zv,AttachedBindMode:fh,Audio:S0,AudioAnalyser:dv,AudioContext:Su,AudioListener:cv,AudioLoader:rv,AxesHelper:$v,BackSide:Mn,BasicDepthPacking:xp,BasicShadowMap:lm,BatchedMesh:Fp,BezierInterpolant:c0,Bone:iu,BooleanKeyframeTrack:Xs,Box2:A0,Box3:Sn,Box3Helper:qv,BoxGeometry:rs,BoxHelper:Xv,BufferAttribute:de,BufferGeometry:Zt,BufferGeometryLoader:y0,ByteType:Vh,Cache:Mi,Camera:fc,CameraHelper:Wv,CanvasTexture:nc,CapsuleGeometry:Oo,CatmullRomCurve3:Vp,CineonToneMapping:Uh,CircleGeometry:Hs,ClampToEdgeWrapping:An,Clock:T0,Color:nt,ColorKeyframeTrack:xu,ColorManagement:ue,Compatibility:$m,CompressedArrayTexture:ox,CompressedCubeTexture:ax,CompressedTexture:ec,CompressedTextureLoader:$x,ConeGeometry:os,ConstantAlphaFactor:cp,ConstantColorFactor:ap,Controls:Kv,CubeCamera:Ll,CubeDepthTexture:ru,CubeReflectionMapping:zi,CubeRefractionMapping:Ls,CubeTexture:Fo,CubeTextureLoader:Jx,CubicBezierCurve:lu,CubicBezierCurve3:Gp,CubicInterpolant:a0,CullFaceBack:hh,CullFaceFront:Xf,CullFaceFrontBack:am,CullFaceNone:Wf,Curve:pi,CurvePath:Wp,CustomBlending:Yf,CustomToneMapping:Oh,CylinderGeometry:He,Cylindrical:Lv,Data3DTexture:Zl,DataArrayTexture:Yl,DataTexture:Cn,DataTextureLoader:Kx,DataUtils:Lg,DecrementStencilOp:Am,DecrementWrapStencilOp:Cm,DefaultLoadingManager:d0,DepthFormat:ki,DepthStencilFormat:Ni,DepthTexture:Bs,DetachedBindMode:fp,DirectionalLight:yu,DirectionalLightHelper:Hv,DiscreteInterpolant:l0,DodecahedronGeometry:ic,DoubleSide:Ue,DstAlphaFactor:np,DstColorFactor:sp,DynamicCopyUsage:Hm,DynamicDrawUsage:Om,DynamicReadUsage:km,EdgesGeometry:zp,EllipseCurve:sc,EqualCompare:bp,EqualDepth:Za,EqualStencilFunc:Lm,EquirectangularReflectionMapping:to,EquirectangularRefractionMapping:eo,Euler:Xn,EventDispatcher:fi,ExternalTexture:ou,ExtrudeGeometry:Bo,FileLoader:Gi,Float16BufferAttribute:zg,Float32BufferAttribute:At,FloatType:En,Fog:Kl,FogExp2:Jl,FramebufferTexture:rx,FrontSide:Bi,Frustum:Os,FrustumArray:Uo,GLBufferAttribute:Rv,GLSL1:Xm,GLSL3:mh,GreaterCompare:wp,GreaterDepth:Ja,GreaterEqualCompare:$h,GreaterEqualDepth:$a,GreaterEqualStencilFunc:Fm,GreaterStencilFunc:Nm,GridHelper:Vv,Group:Gt,HTMLTexture:lx,HalfFloatType:je,HemisphereLight:f0,HemisphereLightHelper:kv,IcosahedronGeometry:zo,ImageBitmapLoader:sv,ImageLoader:Ao,ImageUtils:Pp,IncrementStencilOp:Tm,IncrementWrapStencilOp:Em,InstancedBufferAttribute:Er,InstancedBufferGeometry:_0,InstancedInterleavedBuffer:Cv,InstancedMesh:Gn,Int16BufferAttribute:Og,Int32BufferAttribute:Bg,Int8BufferAttribute:Ng,IntType:Bl,InterleavedBuffer:Ql,InterleavedBufferAttribute:Fs,Interpolant:Nr,InterpolateBezier:ph,InterpolateDiscrete:go,InterpolateLinear:Cl,InterpolateSmooth:Ba,InterpolationSamplingMode:Zm,InterpolationSamplingType:Ym,InvertStencilOp:Rm,KeepStencilOp:za,KeyframeTrack:ti,LOD:Np,LatheGeometry:Dr,Layers:$l,LessCompare:Sp,LessDepth:Ya,LessEqualCompare:Zh,LessEqualDepth:wr,LessEqualStencilFunc:Dm,LessStencilFunc:Im,Light:ls,LightProbe:v0,LightShadow:dc,Line:ss,Line3:Uv,LineBasicMaterial:Rn,LineCurve:cu,LineCurve3:Hp,LineDashedMaterial:s0,LineLoop:Op,LineSegments:Si,LinearFilter:Re,LinearInterpolant:gu,LinearMipMapLinearFilter:fm,LinearMipMapNearestFilter:dm,LinearMipmapLinearFilter:kn,LinearMipmapNearestFilter:no,LinearSRGBColorSpace:ns,LinearToneMapping:Dh,LinearTransfer:vo,Loader:Fn,LoaderUtils:yh,LoadingManager:_u,LoopOnce:pp,LoopPingPong:gp,LoopRepeat:mp,MOUSE:rm,Material:fn,MaterialBlending:cm,MaterialLoader:pc,MathUtils:hn,Matrix2:Sh,Matrix3:te,Matrix4:Yt,MaxEquation:Kf,Mesh:qt,MeshBasicMaterial:Kn,MeshDepthMaterial:cc,MeshDistanceMaterial:mu,MeshLambertMaterial:n0,MeshMatcapMaterial:i0,MeshNormalMaterial:e0,MeshPhongMaterial:jp,MeshPhysicalMaterial:Qp,MeshStandardMaterial:pu,MeshToonMaterial:t0,MinEquation:Jf,MirroredRepeatWrapping:Ds,MixOperation:up,MultiplyBlending:dh,MultiplyOperation:Do,NearestFilter:Be,NearestMipMapLinearFilter:um,NearestMipMapNearestFilter:hm,NearestMipmapLinearFilter:xr,NearestMipmapNearestFilter:kh,NeutralToneMapping:zh,NeverCompare:Mp,NeverDepth:Xa,NeverStencilFunc:Pm,NoBlending:Ui,NoColorSpace:Zn,NoNormalPacking:ym,NoToneMapping:hi,NormalAnimationBlendMode:Wl,NormalBlending:Rs,NormalGAPacking:Sm,NormalRGPacking:Mm,NotEqualCompare:Tp,NotEqualDepth:Ka,NotEqualStencilFunc:Um,NumberKeyframeTrack:hc,Object3D:re,ObjectLoader:nv,ObjectSpaceNormalMap:_p,OctahedronGeometry:ko,OneFactor:jf,OneMinusConstantAlphaFactor:hp,OneMinusConstantColorFactor:lp,OneMinusDstAlphaFactor:ip,OneMinusDstColorFactor:rp,OneMinusSrcAlphaFactor:Lh,OneMinusSrcColorFactor:ep,OrthographicCamera:Vo,PCFShadowMap:Mr,PCFSoftShadowMap:qf,PMREMGenerator:Eo,Path:Mo,PerspectiveCamera:an,Plane:_i,PlaneGeometry:bi,PlaneHelper:Yv,PointLight:m0,PointLightHelper:Bv,Points:tc,PointsMaterial:su,PolarGridHelper:Gv,PolyhedronGeometry:as,PositionalAudio:uv,PropertyBinding:_e,PropertyMixer:b0,QuadraticBezierCurve:hu,QuadraticBezierCurve3:uu,Quaternion:ln,QuaternionKeyframeTrack:uc,QuaternionLinearInterpolant:u0,R11_EAC_Format:rl,RED_GREEN_RGTC2_Format:mo,RED_RGTC1_Format:Tl,REVISION:Fl,RG11_EAC_Format:po,RGBADepthPacking:vp,RGBAFormat:un,RGBAIntegerFormat:Hl,RGBA_ASTC_10x10_Format:_l,RGBA_ASTC_10x5_Format:gl,RGBA_ASTC_10x6_Format:xl,RGBA_ASTC_10x8_Format:vl,RGBA_ASTC_12x10_Format:yl,RGBA_ASTC_12x12_Format:Ml,RGBA_ASTC_4x4_Format:ll,RGBA_ASTC_5x4_Format:cl,RGBA_ASTC_5x5_Format:hl,RGBA_ASTC_6x5_Format:ul,RGBA_ASTC_6x6_Format:dl,RGBA_ASTC_8x5_Format:fl,RGBA_ASTC_8x6_Format:pl,RGBA_ASTC_8x8_Format:ml,RGBA_BPTC_Format:Sl,RGBA_ETC2_EAC_Format:sl,RGBA_PVRTC_2BPPV1_Format:el,RGBA_PVRTC_4BPPV1_Format:tl,RGBA_S3TC_DXT1_Format:so,RGBA_S3TC_DXT3_Format:ro,RGBA_S3TC_DXT5_Format:oo,RGBDepthPacking:vm,RGBFormat:qh,RGBIntegerFormat:pm,RGB_BPTC_SIGNED_Format:bl,RGB_BPTC_UNSIGNED_Format:wl,RGB_ETC1_Format:nl,RGB_ETC2_Format:il,RGB_PVRTC_2BPPV1_Format:ja,RGB_PVRTC_4BPPV1_Format:Qa,RGB_S3TC_DXT1_Format:io,RGDepthPacking:_m,RGFormat:es,RGIntegerFormat:Gl,RawShaderMaterial:fu,Ray:Lr,Raycaster:Pv,RectAreaLight:x0,RedFormat:Vl,RedIntegerFormat:No,ReinhardToneMapping:Nh,RenderObjectRefreshType:Jm,RenderTarget:Qh,RenderTarget3D:Tv,RepeatWrapping:fo,ReplaceStencilOp:wm,ReverseSubtractEquation:$f,RingGeometry:rc,SIGNED_R11_EAC_Format:ol,SIGNED_RED_GREEN_RGTC2_Format:El,SIGNED_RED_RGTC1_Format:Al,SIGNED_RG11_EAC_Format:al,SRGBColorSpace:yn,SRGBTransfer:Ae,Scene:jh,ShaderChunk:se,ShaderLib:oi,ShaderMaterial:ze,ShadowMaterial:Jp,Shape:Hi,ShapeGeometry:Ws,ShapePath:Jv,ShapeUtils:ai,ShortType:Gh,Skeleton:jl,SkeletonHelper:Ov,SkinnedMesh:Up,Source:yg,Sphere:dn,SphereGeometry:xe,Spherical:Iv,SphericalHarmonics3:Mu,SplineCurve:du,SpotLight:p0,SpotLightHelper:Fv,Sprite:Dp,SpriteMaterial:nu,SrcAlphaFactor:Ih,SrcAlphaSaturateFactor:op,SrcColorFactor:tp,StaticCopyUsage:Gm,StaticDrawUsage:Xl,StaticReadUsage:zm,StereoCamera:ov,StreamCopyUsage:Wm,StreamDrawUsage:Bm,StreamReadUsage:Vm,StringKeyframeTrack:qs,SubtractEquation:Zf,SubtractiveBlending:uh,TOUCH:om,TangentSpaceNormalMap:Vi,TetrahedronGeometry:oc,Texture:ke,TextureLoader:Qx,TextureSource:yi,TextureUtils:n_,Timer:bu,TimestampQuery:qm,TorusGeometry:Ke,TorusKnotGeometry:ac,Triangle:Nn,TriangleFanDrawMode:xm,TriangleStripDrawMode:gm,TrianglesDrawMode:mm,TubeGeometry:lc,UVMapping:Ol,Uint16BufferAttribute:tu,Uint32BufferAttribute:eu,Uint8BufferAttribute:Ug,Uint8ClampedBufferAttribute:Fg,Uniform:Au,UniformsGroup:Ev,UniformsLib:wt,UniformsUtils:Pr,UnsignedByteType:Dn,UnsignedInt101111Type:Wh,UnsignedInt248Type:Ns,UnsignedInt5999Type:Hh,UnsignedIntType:Qn,UnsignedShort4444Type:zl,UnsignedShort5551Type:kl,UnsignedShortType:Tr,VSMShadowMap:gr,Vector2:Q,Vector3:E,Vector4:Se,VectorKeyframeTrack:vu,VideoFrameTexture:sx,VideoTexture:Bp,WebGL3DRenderTarget:bg,WebGLArrayRenderTarget:Sg,WebGLCoordinateSystem:Vn,WebGLCubeRenderTarget:mc,WebGLRenderTarget:Xe,WebGLRenderer:k0,WebGLUtils:B0,WebGPUCoordinateSystem:Us,WebXRController:ka,WireframeGeometry:$p,WrapAroundEnding:xo,ZeroCurvatureEnding:Ts,ZeroFactor:Qf,ZeroSlopeEnding:As,ZeroStencilOp:bm,createCanvasElement:Ep,error:kt,getConsoleFunction:tg,log:yo,setConsoleFunction:jm,warn:bt,warnOnce:Fi},Symbol.toStringTag,{value:"Module"})),$S=new E(.7,.6,.26).normalize(),Qe={uTime:{value:0},uSunDir:{value:$S.clone()},uSunColor:{value:new nt(1,.94,.8)},uSkyColor:{value:new nt(.66,.8,.94)},uBounceColor:{value:new nt(.62,.62,.36)},uShadowTint:{value:new nt(.54,.58,.7)},uFogColor:{value:new nt(.44,.6,.72)},uFogDensity:{value:.00145},uWindDir:{value:new Q(.86,.51)}};function JS(s){Qe.uTime.value=s}const KS=`
precision highp float;

uniform float uTime;
uniform float uWindAmp;
uniform float uWindSpeed;
uniform vec2  uWindDir;
uniform float uBendH;
uniform float uPhase;
uniform float uBillow;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying vec3 vInst;
varying float vH;

#ifdef USE_VCOL
  attribute vec3 color;
  varying vec3 vVCol;
#endif

#include <shadowmap_pars_vertex>

void main() {
  vUv = uv;
  vec3 p = position;
  vec3 n = normal;
  vInst = vec3(1.0);
  #ifdef USE_VCOL
    vVCol = color;
  #endif

  #ifdef USE_INSTANCING
    p = (instanceMatrix * vec4(p, 1.0)).xyz;
    n = mat3(instanceMatrix) * n;
    #ifdef USE_INSTANCING_COLOR
      vInst = instanceColor;
    #endif
  #endif

  vec4 wp = modelMatrix * vec4(p, 1.0);

  float hh = clamp(p.y / max(uBendH, 0.001), 0.0, 1.6);
  float ph = wp.x * 0.42 + wp.z * 0.33 + uPhase;
  float gust = 0.62 + 0.38 * sin(uTime * 0.31 + wp.x * 0.016 + wp.z * 0.011);
  float sway = (sin(ph + uTime * uWindSpeed) + 0.42 * sin(ph * 2.6 + uTime * uWindSpeed * 1.57 + 1.3)) * gust;
  float bend = sway * uWindAmp * hh * hh;
  wp.x += bend * uWindDir.x;
  wp.z += bend * uWindDir.y;
  wp.y -= abs(bend) * 0.16;
  wp.y += sin(ph * 3.1 + uTime * uWindSpeed * 1.9) * uBillow * hh;

  vWorld = wp.xyz;
  vNormalW = normalize(mat3(modelMatrix) * n);
  vView = cameraPosition - wp.xyz;
  vH = hh;

  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vDirectionalShadowCoord[ 0 ] = directionalShadowMatrix[ 0 ] * vec4( wp.xyz + vNormalW * 0.05, 1.0 );
  #endif

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,QS=`
precision highp float;

uniform sampler2D uMap;
#ifdef USE_NORMALMAP
uniform sampler2D uNormalMap;
uniform float uNormalScale;
#endif
uniform vec3  uColor;
uniform vec3  uColor2;
uniform float uMapMix;
uniform vec2  uUvScale;
uniform float uRim;
uniform vec3  uRimColor;
uniform float uSpec;
uniform float uSpecPower;
uniform float uFresnel;
uniform float uNoiseAmt;
uniform float uNoiseScale;
uniform float uWrap;
uniform float uTrans;
uniform float uAO;
uniform float uEmissive;
uniform float uSaturation;
uniform float uAlphaTest;
uniform float uOpacity;
uniform vec3  uTint;
uniform vec2  uGrime;      // 垂直脏污渐变起止高度（x==y 时不启用）
uniform float uRoughVar;   // 粗糙度扰动强度
uniform float uWet;        // 潮湿程度：压暗 + 提亮高光

uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uBounceColor;
uniform vec3  uShadowTint;
uniform vec3  uFogColor;
uniform float uFogDensity;
uniform float uTime;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying vec3 vInst;
varying float vH;

#ifdef USE_VCOL
  varying vec3 vVCol;
#endif

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i );
  float b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) );
  float d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}

void main() {
  vec3 base = uColor;

  #ifdef USE_MAP
    vec4 t = texture2D( uMap, vUv * uUvScale );
    base = mix( base, t.rgb, uMapMix );
    #ifdef USE_ALPHA_MAP
      if ( t.a < uAlphaTest ) discard;
    #endif
  #endif

  base *= vInst;
  base *= uTint;
  #ifdef USE_VCOL
    base *= vVCol;
  #endif

  // 手绘感的色块扰动
  float pn = fbm2( vWorld.xz * uNoiseScale + vWorld.y * 0.45 );
  base *= 1.0 + ( pn - 0.5 ) * uNoiseAmt;

  float lum = dot( base, vec3( 0.299, 0.587, 0.114 ) );
  base = mix( vec3( lum ), base, uSaturation );

  // 垂直脏污渐变：越靠近地面越脏
  if ( uGrime.y > uGrime.x ) {
    float gy = smoothstep( uGrime.x, uGrime.y, vWorld.y );
    base *= mix( 0.74, 1.0, gy );
    base *= mix( vec3( 0.94, 0.93, 0.88 ), vec3( 1.0 ), gy );
  }
  // 潮湿：整体压暗，稍后给更强高光
  if ( uWet > 0.001 ) {
    base *= mix( 1.0, 0.62, uWet );
  }

  vec3 N = normalize( vNormalW );

  // 法线贴图：用世界坐标导数构建切线基（无需顶点切线）
  #ifdef USE_NORMALMAP
  {
    vec3 q0 = dFdx( vWorld );
    vec3 q1 = dFdy( vWorld );
    vec2 st0 = dFdx( vUv * uUvScale );
    vec2 st1 = dFdy( vUv * uUvScale );
    vec3 q1perp = cross( q1, N );
    vec3 q0perp = cross( N, q0 );
    vec3 T = q1perp * st0.x + q0perp * st1.x;
    vec3 B = q1perp * st0.y + q0perp * st1.y;
    float det = max( dot( T, T ), dot( B, B ) );
    float sc = det > 0.0 ? inversesqrt( det ) : 0.0;
    T *= sc; B *= sc;
    vec3 nt = texture2D( uNormalMap, vUv * uUvScale ).xyz * 2.0 - 1.0;
    nt.xy *= uNormalScale;
    N = normalize( T * nt.x + B * nt.y + N * nt.z );
  }
  #endif

  vec3 V = normalize( vView );
  vec3 L = uSunDir;

  float shadow = getShadowMask();
  float ndl = dot( N, L );
  float diff = clamp( ( ndl + uWrap ) / ( 1.0 + uWrap ), 0.0, 1.0 );

  // 云影
  float cs = fbm2( vWorld.xz * 0.0075 + vec2( uTime * 0.0035, uTime * 0.0018 ) );
  cs = smoothstep( 0.44, 0.60, cs );
  float cloudShade = mix( 0.62, 1.0, cs );

  float term = diff * mix( 0.42, 1.0, shadow ) * cloudShade;

  float lit = smoothstep( 0.08, 0.60, term );
  float hi  = smoothstep( 0.56, 0.98, term );

  vec3 up = vec3( 0.5 + 0.5 * N.y );
  vec3 shadowC = base * uShadowTint * ( 0.66 + 0.30 * up );
  vec3 midC    = base * ( 0.90 + 0.14 * up );
  vec3 litC    = base * uSunColor * ( 0.80 + 0.36 * diff );

  vec3 col = mix( shadowC, midC, lit );
  col = mix( col, litC, hi * 0.92 );

  // 天光 / 地面反弹
  col += base * uSkyColor * 0.125 * ( 0.55 + 0.45 * N.y ) * ( 0.55 + 0.45 * shadow );
  col += base * uBounceColor * 0.098 * ( 0.55 - 0.45 * N.y );

  // 高光
  vec3 H = normalize( L + V );
  // 粗糙度扰动：让高光在同一材质上也有强弱变化
  float rough = 1.0 + ( fbm2( vWorld.xz * 3.1 + vWorld.y * 2.2 ) - 0.5 ) * uRoughVar * 2.0;
  float spec = pow( max( dot( N, H ), 0.0 ), uSpecPower * clamp( rough, 0.45, 2.2 ) );
  float wetSpec = uWet * pow( max( dot( N, H ), 0.0 ), 42.0 ) * 0.9;
  col += uSunColor * ( spec * uSpec + wetSpec ) * mix( 0.25, 1.0, shadow );

  // 菲涅尔天光反射：按反射向量取天空梯度（石头 / 瓦片 / 地面的一层“反光”）
  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 4.0 );
  vec3 R = reflect( -V, N );
  float skyUp = clamp( R.y * 0.5 + 0.5, 0.0, 1.0 );
  vec3 skyRefl = mix( uFogColor * 1.15, uSkyColor * 1.25, skyUp );
  skyRefl += uSunColor * pow( max( dot( R, L ), 0.0 ), 10.0 ) * 0.55;
  col = mix( col, skyRefl, clamp( fres * uFresnel, 0.0, 0.85 ) );

  // 边缘光
  float rim = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 2.6 );
  rim *= smoothstep( -0.25, 0.5, ndl );
  col += uRimColor * rim * uRim * ( 0.35 + 0.65 * shadow );

  // 叶片透光
  col += base * uSunColor * uTrans * pow( max( dot( -N, L ), 0.0 ), 1.4 ) * 0.55;

  col += base * uEmissive;
  col *= uAO;

  // 大气透视
  vec3 vd = normalize( vWorld - cameraPosition );
  float dist = length( vWorld - cameraPosition );
  // 高度雾：越贴近地面越浓，形成谷地薄霭
  float hLow = exp( -max( vWorld.y - 1.5, 0.0 ) * 0.045 );
  float density = 0.55 + 0.45 * hLow;
  float f = 1.0 - exp( -dist * uFogDensity * density );
  // 朝向太阳时雾里带暖光
  float sunAmt = pow( max( dot( vd, L ), 0.0 ), 3.0 );
  vec3 fogC = uFogColor + uSunColor * ( 0.20 + 0.30 * hLow ) * sunAmt;
  // 远处轻微去饱和（空气透视）
  float lum0 = dot( col, vec3( 0.299, 0.587, 0.114 ) );
  col = mix( col, vec3( lum0 ) * 0.9 + col * 0.1, f * 0.22 );
  col = mix( col, fogC, clamp( f, 0.0, 0.94 ) );

  col += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;

  gl_FragColor = vec4( col, uOpacity );
}
`,jS=wt.lights;function Kt(s={}){const t={};s.map&&(t.USE_MAP=""),s.normalMap&&(t.USE_NORMALMAP=""),s.map&&s.alphaMap&&(t.USE_ALPHA_MAP=""),s.vcolor&&(t.USE_VCOL=""),s.defines&&Object.assign(t,s.defines);const e=Object.assign({},jS,Qe,{uMap:{value:s.map||null},uNormalMap:{value:s.normalMap||null},uNormalScale:{value:s.normalScale??1},uColor:{value:new nt(s.color??16777215)},uColor2:{value:new nt(s.color2??16777215)},uMapMix:{value:s.mapMix??1},uUvScale:{value:new Q(...s.uvScale??[1,1])},uRim:{value:s.rim??0},uRimColor:{value:new nt(s.rimColor??16773320)},uSpec:{value:s.spec??0},uSpecPower:{value:s.specPower??24},uFresnel:{value:s.fresnel??0},uNoiseAmt:{value:s.noise??.12},uNoiseScale:{value:s.noiseScale??.35},uWrap:{value:s.wrap??0},uTrans:{value:s.trans??0},uAO:{value:s.ao??1},uEmissive:{value:s.emissive??0},uSaturation:{value:s.saturation??1},uAlphaTest:{value:s.alphaTest??.5},uOpacity:{value:s.opacity??1},uTint:{value:new nt(s.tint??16777215)},uGrime:{value:new Q(...s.grime??[0,0])},uRoughVar:{value:s.roughVar??0},uWet:{value:s.wet??0},uWindAmp:{value:s.windAmp??0},uWindSpeed:{value:s.windSpeed??1.6},uBendH:{value:s.bendH??1},uPhase:{value:s.phase??0},uBillow:{value:s.billow??0}}),n=new ze({vertexShader:KS,fragmentShader:QS,uniforms:e,defines:t,lights:!0,side:s.side??Bi,transparent:s.transparent??!1,depthWrite:s.depthWrite??!0});return n.userData.uniforms=e,n}const tb=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w; // 永远在最远
}
`,eb=`
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform float uTime;
uniform float uCloudCover;
uniform vec3 uZenith;
uniform vec3 uHorizon;

varying vec3 vDir;

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i ), b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) ), d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm6( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 6; i ++ ) { s += a * vnoise( p ); p = p * 2.03 + vec2( 1.7, -3.1 ); a *= 0.5; }
  return s;
}

// 积云密度场
float cloudDensity( vec2 p, float t ) {
  vec2 w = vec2( t * 0.0075, t * 0.0032 );
  float base = fbm6( p * 0.34 + w );
  float det  = fbm6( p * 1.25 - w * 2.1 + 3.7 );
  float d = base * 0.94 + det * 0.50 - 0.20;
  return smoothstep( 0.445, 0.575, d );
}

void main() {
  vec3 d = normalize( vDir );
  vec3 L = uSunDir;

  float h = clamp( d.y, -0.2, 1.0 );

  // ---- 天空渐变 ----
  vec3 col = mix( uHorizon, uSkyColor, smoothstep( -0.02, 0.34, h ) );
  col = mix( col, uZenith, smoothstep( 0.10, 0.95, h ) );

  // ---- 太阳 ----
  float sd = max( dot( d, L ), 0.0 );
  float disc = smoothstep( 0.9993, 0.99985, sd );
  col += uSunColor * disc * 5.0;
  col += uSunColor * pow( sd, 220.0 ) * 1.4;
  col += uSunColor * pow( sd, 14.0 ) * 0.30;
  col += uSunColor * pow( sd, 3.0 ) * 0.10;
  col += vec3( 0.06, 0.09, 0.05 ) * pow( sd, 1.4 );

  // ---- 云 ----
  float above = smoothstep( -0.02, 0.10, h );
  float t = uTime;

  // 低层大积云
  vec2 p = d.xz / max( d.y + 0.14, 0.05 ) * 2.6;
  float dens = cloudDensity( p, t );
  float dens2 = cloudDensity( p * 1.06 + vec2( 0.02 ), t * 1.05 );

  vec2 sunOff = L.xz * 0.55;
  float dSun = cloudDensity( p + sunOff, t );
  float lit = clamp( 0.48 + ( dens - dSun ) * 3.4, 0.0, 1.0 );

  vec3 cShade = vec3( 0.36, 0.46, 0.66 );
  vec3 cMid   = vec3( 0.78, 0.83, 0.91 );
  vec3 cLit   = vec3( 1.26, 1.22, 1.12 );
  vec3 cc = mix( cShade, cMid, smoothstep( 0.0, 0.55, lit ) );
  cc = mix( cc, cLit, smoothstep( 0.55, 1.0, lit ) );

  // 云的边缘透光
  float edge = smoothstep( 0.0, 0.35, dens ) * ( 1.0 - smoothstep( 0.35, 0.85, dens ) );
  cc += uSunColor * edge * pow( max( dot( normalize( vec3( d.x, 0.45, d.z ) ), L ), 0.0 ), 3.0 ) * 0.35;

  float cover = uCloudCover * mix( 0.55, 1.0, smoothstep( 0.0, 0.35, h ) );
  float a = clamp( dens * cover * above, 0.0, 1.0 );
  // 靠近太阳的云被照亮
  cc += uSunColor * pow( sd, 6.0 ) * 0.25 * a;
  col = mix( col, cc, a * 0.96 );

  // 高层卷云
  vec2 q = d.xz / max( d.y + 0.30, 0.12 );
  float cir = fbm6( vec2( q.x * 0.9 + t * 0.004, q.y * 3.4 - t * 0.002 ) + 11.0 );
  cir = smoothstep( 0.55, 0.86, cir ) * smoothstep( 0.02, 0.35, h ) * 0.45;
  col = mix( col, vec3( 1.0, 0.99, 0.97 ), cir * 0.5 );

  // ---- 地平线雾霭 ----
  float haze = smoothstep( 0.16, -0.06, h );
  vec3 hazeCol = mix( vec3( 0.50, 0.66, 0.74 ), uSunColor * 0.92, pow( sd, 2.0 ) * 0.5 );
  col = mix( col, hazeCol, haze * 0.92 );

  // 地平线以下
  col = mix( col, vec3( 0.72, 0.79, 0.74 ), smoothstep( -0.01, -0.14, h ) );

  // 轻微抖动，避免色带
  col += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;

  gl_FragColor = vec4( col, 1.0 );
}
`;function nb(){const s=new xe(1,48,32),t=new ze({vertexShader:tb,fragmentShader:eb,uniforms:{uSunDir:Qe.uSunDir,uSunColor:Qe.uSunColor,uSkyColor:{value:new nt(.115,.335,.66)},uZenith:{value:new nt(.038,.155,.47)},uHorizon:{value:new nt(.4,.58,.71)},uTime:Qe.uTime,uCloudCover:{value:1}},side:Mn,depthWrite:!1,depthTest:!1,fog:!1}),e=new qt(s,t);return e.scale.setScalar(3e3),e.frustumCulled=!1,e.renderOrder=-1e3,e.name="sky",{mesh:e,material:t}}function De(s,t=0,e=1){return s<t?t:s>e?e:s}function Is(s,t,e){return s+(t-s)*e}function ts(s,t,e){const n=De((e-s)/(t-s));return n*n*(3-2*n)}function yr(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function ib(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),l=yr(e,n),c=yr(e+1,n),h=yr(e,n+1),d=yr(e+1,n+1);return Is(Is(l,c,o),Is(h,d,o),a)}function tn(s,t,e=4,n=2.03,i=.5){let r=.5,o=1,a=0,l=0;for(let c=0;c<e;c++)a+=r*ib(s*o,t*o),l+=r,o*=n,r*=i;return a/l}function qe(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ks=420,Li=ks/2,Un=-.55;function Vs(s){return 46.5+5.2*Math.sin(s*.0245+.5)+2.4*Math.sin(s*.0092+2.2)}function Gs(s){return 3.1+.85*Math.sin(s*.043+1.1)+.3*Math.sin(s*.11)}const Ef=[[-1,3.8],[.6,7.2],[2,10.6],[3.4,14.2],[5.2,18],[7.6,21.8],[10.2,24.6],[12.6,27.2],[13.6,31],[14,35.5],[14.2,40],[14.4,44.5]],sb=[[6.2,14],[8.6,12.6],[11.6,11.6],[14.6,11],[17.4,10.4]],Ga=[[-96,33],[-76,31.4],[-56,29.6],[-38,27.6],[-24,26.4],[-11,25.6],[2,25],[9.2,25.2],[12.6,27.2],[16.4,25.4],[25,24.6],[38,24.2],[52,24.8],[66,26.4],[82,29],[100,32]],pr={x:12.6,z:27.2},V0=[{x:0,z:0,r:6.4,f:9.5,y:7.3},{x:-7.8,z:1.4,r:5.4,f:6.5,y:6.96},{x:15.6,z:11.6,r:7.6,f:9,y:5.02},{x:13.2,z:3.4,r:3.6,f:4,y:null},{x:29.5,z:37.5,r:7.2,f:7.5,y:null},{x:-20,z:33,r:5.2,f:5.5,y:null},{x:-15,z:8.5,r:3.4,f:4,y:null},{x:8.2,z:13.8,r:2.2,f:3,y:null}];let Cf=!1;function rb(){if(!Cf){Cf=!0;for(const s of V0)s.y===null&&(s.y=G0(s.x,s.z))}}function G0(s,t){let e=0;e+=2.55*Math.sin(s*.0126+.9)*Math.cos(t*.0108-.5),e+=1.25*Math.sin(s*.029-1.2)*Math.sin(t*.0261+.7),e+=(tn(s*.0112+3.1,t*.0112-2.4,4)-.5)*7.2,e+=(tn(s*.047+7,t*.047+3,3)-.5)*.85;const n=Math.hypot(s,t);e+=8.7*Math.exp(-Math.pow(n/26.5,2)),e+=ts(16,-95,t)*11,e+=ts(-60,-140,t)*16;const i=Vs(s),r=Gs(s),o=Math.abs(t-i),a=Un-.95+.18*Math.sin(s*.07);let l=1-ts(r*.85,r*.85+17,o);return l=l*l*(3-2*l),e=Is(e,a,l*.985),e}function $t(s,t){rb();let e=G0(s,t);for(const n of V0){const i=Math.hypot(s-n.x,t-n.z),r=1-ts(n.r,n.r+n.f,i);e=Is(e,n.y,r*r*(3-2*r))}return e}function H0(s,t,e=.6){const n=$t(s-e,t),i=$t(s+e,t),r=$t(s,t-e),o=$t(s,t+e);return new E(n-i,2*e,r-o).normalize()}function ob(s,t=1.2){const e=[];for(let n=0;n<s.length-1;n++){const[i,r]=s[n],[o,a]=s[n+1],l=Math.hypot(o-i,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++){const d=h/c;e.push([Is(i,o,d),Is(r,a,d)])}}return e.push(s[s.length-1].slice()),e}function qn(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function Wi(s,{srgb:t=!0,repeat:e=[1,1]}={}){const n=new nc(s);return n.wrapS=n.wrapT=Ds,n.repeat.set(e[0],e[1]),n.colorSpace=t?yn:Zn,n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=kn,n}function ab(s=1024){const t=qn(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=o/s,l=r/s,c=tn(a*7,l*7,5),h=tn(a*34+11,l*34+3,3),d=tn(a*2.4+30,l*2.4+7,3);let u=233,f=221,p=194;const x=(c-.5)*26+(h-.5)*12;u+=x,f+=x*.97,p+=x*.86;const m=ts(.48,.8,d);u-=m*14,f-=m*10,p-=m*14;const g=(yr(o*1.7,r*1.7)-.5)*9;u+=g,f+=g,p+=g;const v=(r*s+o)*4;i[v]=De(u,0,255),i[v+1]=De(f,0,255),i[v+2]=De(p,0,255),i[v+3]=255}e.putImageData(n,0,0),e.globalAlpha=.05;for(let r=0;r<60;r++){const o=Math.random()*s,a=1+Math.random()*4,l=Math.random()*s*.6,c=e.createLinearGradient(0,l,0,l+s*(.2+Math.random()*.5));c.addColorStop(0,"rgba(120,118,96,0)"),c.addColorStop(1,"rgba(110,108,88,0.9)"),e.fillStyle=c,e.fillRect(o,l,a,s)}e.globalAlpha=1;for(let r=0;r<260;r++){const o=Math.random()*s,a=Math.random()*s,l=2+Math.random()*11;e.globalAlpha=.03+Math.random()*.06,e.fillStyle=Math.random()>.5?"#a89c80":"#fff6e2",e.beginPath(),e.arc(o,a,l,0,7),e.fill()}e.globalAlpha=.14,e.strokeStyle="#9c9276",e.lineWidth=1;for(let r=0;r<6;r++){let o=Math.random()*s,a=Math.random()*s*.7;e.beginPath(),e.moveTo(o,a);for(let l=0;l<12;l++)o+=(Math.random()-.5)*12,a+=Math.random()*18,e.lineTo(o,a);e.stroke()}return e.globalAlpha=1,Wi(t,{repeat:[1,1]})}function lb(s=2048,t=1024){const e=qn(s,t),n=e.getContext("2d"),i=n.createImageData(s,t),r=i.data;for(let c=0;c<t;c++)for(let h=0;h<s;h++){const d=h/s,u=c/t,f=tn(d*26,u*13,5),p=tn(d*90+11,u*45+3,3),x=tn(d*7+30,u*3.5+7,3);let m=219,g=206,v=178;const M=(f-.5)*38+(p-.5)*16;m+=M,g+=M*.97,v+=M*.86;const y=ts(.46,.82,x);m-=y*34,g-=y*26,v-=y*32;const w=(yr(h*1.7,c*1.7)-.5)*9;m+=w,g+=w,v+=w;const b=(c*s+h)*4;r[b]=De(m,0,255),r[b+1]=De(g,0,255),r[b+2]=De(v,0,255),r[b+3]=255}n.putImageData(i,0,0);const o=c=>c/12.2*26/29*t;for(const c of[2.55,6.3,9.45]){const h=o(c)-3,d=16+Math.random()*8,u=n.createLinearGradient(0,h,0,h+d);u.addColorStop(0,"rgba(92,86,68,0.55)"),u.addColorStop(1,"rgba(96,92,74,0)"),n.fillStyle=u,n.fillRect(0,h,s,d)}n.globalAlpha=.1;for(let c=0;c<130;c++){const h=Math.random()*s,d=Math.random()*t*.18,u=t*(.12+Math.random()*.42),f=n.createLinearGradient(0,d,0,d+u);f.addColorStop(0,"rgba(104,100,82,0.9)"),f.addColorStop(1,"rgba(104,100,82,0)"),n.fillStyle=f,n.fillRect(h,d,1+Math.random()*4,u)}n.globalAlpha=1;const a=n.createLinearGradient(0,t*.8,0,t);a.addColorStop(0,"rgba(96,120,58,0)"),a.addColorStop(1,"rgba(88,112,52,0.55)"),n.fillStyle=a,n.fillRect(0,t*.8,s,t*.2);for(let c=0;c<420;c++){const h=Math.random()*s,d=t*(.84+Math.random()*.16);n.globalAlpha=.04+Math.random()*.12,n.fillStyle=Math.random()>.4?"#7f9a54":"#5d7a42",n.beginPath(),n.arc(h,d,2+Math.random()*14,0,7),n.fill()}n.globalAlpha=1;const l=qe(88);for(let c=0;c<9;c++){const h=l()*s,d=t*(.86+l()*.12),u=26+l()*46;n.save(),n.beginPath();const f=9;for(let p=0;p<=f;p++){const x=p/f*Math.PI*2,m=u*(.6+l()*.55),g=h+Math.cos(x)*m*1.3,v=d+Math.sin(x)*m*.8;p?n.lineTo(g,v):n.moveTo(g,v)}n.closePath(),n.clip(),n.fillStyle="#9d9480",n.fillRect(h-u*2,d-u,u*4,u*2);for(let p=0;p<14;p++)n.fillStyle=`rgba(${140+l()*50},${132+l()*46},${112+l()*40},0.9)`,n.beginPath(),n.ellipse(h+(l()-.5)*u*2,d+(l()-.5)*u*1.2,8+l()*14,5+l()*9,l()*3,0,7),n.fill();n.restore()}n.globalAlpha=.16,n.strokeStyle="#8f866c",n.lineWidth=1.4;for(let c=0;c<10;c++){let h=Math.random()*s,d=Math.random()*t*.6;n.beginPath(),n.moveTo(h,d);for(let u=0;u<18;u++)h+=(Math.random()-.5)*10,d+=Math.random()*26,n.lineTo(h,d);n.stroke()}return n.globalAlpha=1,Wi(e,{repeat:[1,1]})}function cb(s,t=2){const e=s.width,n=s.height,r=s.getContext("2d").getImageData(0,0,e,n).data,o=qn(e,n),a=o.getContext("2d"),l=a.createImageData(e,n),c=l.data,h=(d,u)=>{const f=((u+n)%n*e+(d+e)%e)*4;return(r[f]*.299+r[f+1]*.587+r[f+2]*.114)/255};for(let d=0;d<n;d++)for(let u=0;u<e;u++){const f=(h(u+1,d)-h(u-1,d))*t,p=(h(u,d-1)-h(u,d+1))*t,x=-f,m=-p,g=1,v=Math.hypot(x,m,g),M=(d*e+u)*4;c[M]=(x/v*.5+.5)*255,c[M+1]=(m/v*.5+.5)*255,c[M+2]=(g/v*.5+.5)*255,c[M+3]=255}return a.putImageData(l,0,0),o}function Rf(s=1024,t="warm"){const e=qn(s,s),n=e.getContext("2d"),i=qn(s,s),r=i.getContext("2d");r.fillStyle="#2b2b2b",r.fillRect(0,0,s,s),n.fillStyle=t==="warm"?"#7d7462":"#6c6f66",n.fillRect(0,0,s,s);const o=n.getImageData(0,0,s,s),a=o.data;for(let u=0;u<a.length;u+=4){const f=(Math.random()-.5)*26;a[u]+=f,a[u+1]+=f,a[u+2]+=f}n.putImageData(o,0,0);const l=qe(7),c=12,h=s/c;for(let u=0;u<c;u++){let f=-h*.6*l();for(;f<s;){const p=h*(.75+l()*1.6),x=h*(.7+l()*.22),m=u*h+h*.1+l()*h*.06,g=128+l()*78,v=t==="warm"?1:.55,M=g+16*v,y=g+3,w=g-18*v+4;n.beginPath();const b=7+l()*5;n.moveTo(f+b,m),n.lineTo(f+p-b,m),n.quadraticCurveTo(f+p,m,f+p,m+b),n.lineTo(f+p,m+x-b),n.quadraticCurveTo(f+p,m+x,f+p-b,m+x),n.lineTo(f+b,m+x),n.quadraticCurveTo(f,m+x,f,m+x-b),n.lineTo(f,m+b),n.quadraticCurveTo(f,m,f+b,m),n.closePath();const _=n.createLinearGradient(f,m,f,m+x);_.addColorStop(0,`rgb(${M+14},${y+14},${w+12})`),_.addColorStop(.55,`rgb(${M},${y},${w})`),_.addColorStop(1,`rgb(${M-34},${y-34},${w-30})`),n.fillStyle=_,n.fill();const S=r.createRadialGradient(f+p/2,m+x/2,Math.min(p,x)*.06,f+p/2,m+x/2,Math.max(p,x)*.62),I=.72+l()*.28;S.addColorStop(0,`rgba(255,255,255,${I})`),S.addColorStop(.62,`rgba(210,210,210,${I*.92})`),S.addColorStop(1,"rgba(90,90,90,0.85)"),r.fillStyle=S,r.beginPath(),r.moveTo(f+b,m),r.lineTo(f+p-b,m),r.quadraticCurveTo(f+p,m,f+p,m+b),r.lineTo(f+p,m+x-b),r.quadraticCurveTo(f+p,m+x,f+p-b,m+x),r.lineTo(f+b,m+x),r.quadraticCurveTo(f,m+x,f,m+x-b),r.lineTo(f,m+b),r.quadraticCurveTo(f,m,f+b,m),r.closePath(),r.fill(),n.save(),n.clip();for(let R=0;R<16;R++){n.globalAlpha=.05+l()*.1,n.fillStyle=l()>.5?"#ffffff":"#3a3a30";const C=f+l()*p,D=m+l()*x;n.beginPath(),n.arc(C,D,2+l()*9,0,7),n.fill()}n.restore(),n.globalAlpha=1,f+=p+4+l()*5}}for(let u=0;u<90;u++){n.globalAlpha=.05+Math.random()*.12,n.fillStyle=Math.random()>.5?"#6d8248":"#87955e";const f=Math.random()*s,p=Math.random()*s;n.beginPath(),n.arc(f,p,6+Math.random()*22,0,7),n.fill()}n.globalAlpha=1;const d=Wi(e);return d.userData.height=i,d}function hb(s=1024){const t=qn(s,s),e=t.getContext("2d"),n=qn(s,s),i=n.getContext("2d");i.fillStyle="#3a3a3a",i.fillRect(0,0,s,s),e.fillStyle="#8e3f2a",e.fillRect(0,0,s,s);const r=10,o=10,a=s/r,l=s/o,c=qe(31);for(let d=0;d<r;d++)for(let u=0;u<o;u++){const f=u*l+(d%2?l*.5:0),p=d*a,x=.82+c()*.4,m=De(138*x,0,255),g=De(96*x,0,255),v=De(84*x,0,255),M=e.createLinearGradient(f,0,f+l,0);M.addColorStop(0,`rgb(${m*.78},${g*.78},${v*.78})`),M.addColorStop(.3,`rgb(${m},${g},${v})`),M.addColorStop(.62,`rgb(${m*1.04},${g*1.03},${v*1.02})`),M.addColorStop(1,`rgb(${m*.74},${g*.74},${v*.74})`),e.fillStyle=M,e.beginPath(),e.moveTo(f,p+a*.98),e.quadraticCurveTo(f+l*.5,p+a*.42,f+l,p+a*.98),e.lineTo(f+l,p+a),e.lineTo(f,p+a),e.closePath(),e.fill();const y=i.createLinearGradient(f,0,f+l,0);y.addColorStop(0,"rgba(150,150,150,0.9)"),y.addColorStop(.5,"rgba(255,255,255,0.95)"),y.addColorStop(1,"rgba(150,150,150,0.9)"),i.fillStyle=y,i.beginPath(),i.moveTo(f,p+a*.98),i.quadraticCurveTo(f+l*.5,p+a*.42,f+l,p+a*.98),i.lineTo(f+l,p+a),i.lineTo(f,p+a),i.closePath(),i.fill(),e.strokeStyle="rgba(255,220,190,0.18)",e.lineWidth=1,e.beginPath(),e.moveTo(f+l*.12,p+a*.9),e.quadraticCurveTo(f+l*.5,p+a*.16,f+l*.88,p+a*.9),e.stroke()}for(let d=0;d<120;d++){e.globalAlpha=.04+Math.random()*.1,e.fillStyle=Math.random()>.45?"#6f8450":"#3d3a2c";const u=Math.random()*s,f=Math.random()*s;e.beginPath(),e.arc(u,f,4+Math.random()*26,0,7),e.fill()}e.globalAlpha=1;const h=Wi(t);return h.userData.height=n,h}function Pf(s=512,t=!1){const e=qn(s,s),n=e.getContext("2d"),i=qn(s,s),r=i.getContext("2d");r.fillStyle="#d0d0d0",r.fillRect(0,0,s,s);const o=t?[138,104,70]:[186,146,98];n.fillStyle=`rgb(${o[0]},${o[1]},${o[2]})`,n.fillRect(0,0,s,s);const a=n.getImageData(0,0,s,s),l=a.data;for(let d=0;d<s;d++)for(let u=0;u<s;u++){const f=tn(u/s*26,d/s*3.2,4),p=Math.sin((d/s*22+f*7)*Math.PI*2)*.5+.5,x=(f-.5)*34+(p-.5)*16,m=(d*s+u)*4;l[m]=De(l[m]+x,0,255),l[m+1]=De(l[m+1]+x*.9,0,255),l[m+2]=De(l[m+2]+x*.7,0,255)}n.putImageData(a,0,0);const c=6;for(let d=1;d<c;d++){const u=d/c*s;n.fillStyle="rgba(20,12,6,0.5)",n.fillRect(0,u,s,2),n.fillStyle="rgba(255,230,190,0.08)",n.fillRect(0,u+2,s,1),r.fillStyle="rgba(30,30,30,1)",r.fillRect(0,u-1,s,4),r.fillStyle="rgba(255,255,255,0.6)",r.fillRect(0,u+3,s,2)}for(let d=0;d<5;d++){const u=Math.random()*s,f=Math.random()*s;for(let p=8;p>0;p-=1.6)n.globalAlpha=.1,n.strokeStyle="#2a1a0c",n.lineWidth=1.4,n.beginPath(),n.ellipse(u,f,p*1.5,p,.3,0,7),n.stroke()}n.globalAlpha=1;const h=Wi(e);return h.userData.height=i,h}function ub(s=512){const t=qn(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=tn(o/s*14,r/s*3,5),l=Math.abs(Math.sin(o/s*Math.PI*9+a*8)),c=88+a*46-(1-l)*40,h=(r*s+o)*4;i[h]=De(c*1.02),i[h+1]=De(c*.9),i[h+2]=De(c*.72),i[h+3]=255}return e.putImageData(n,0,0),Wi(t)}function db(s=512){const t=qn(s,s),e=t.getContext("2d"),n=new Float32Array(s*s);for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=a/s*Math.PI*2;let d=0;d+=Math.sin(c*3+h*2+.7)*.5,d+=Math.sin(c*5-h*4+2.1)*.28,d+=Math.sin(c*8+h*7+4.4)*.16,d+=Math.sin(c*13-h*11+1.2)*.09,d+=Math.sin(c*21+h*17+3.3)*.05,n[a*s+l]=d}const i=e.createImageData(s,s),r=i.data,o=2.2;for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=(l-1+s)%s,h=(l+1)%s,d=(a-1+s)%s,u=(a+1)%s,f=(n[a*s+h]-n[a*s+c])*o,p=(n[u*s+l]-n[d*s+l])*o,x=-f,m=-p,g=1,v=Math.hypot(x,m,g),M=(a*s+l)*4;r[M]=(x/v*.5+.5)*255,r[M+1]=(m/v*.5+.5)*255,r[M+2]=(g/v*.5+.5)*255,r[M+3]=255}return e.putImageData(i,0,0),Wi(t,{srgb:!1})}function fb(s=256){const t=qn(s,s),e=t.getContext("2d");e.clearRect(0,0,s,s);const n=qe(4242);for(let i=0;i<150;i++){const r=n()*Math.PI*2,o=Math.pow(n(),.62)*s*.46,a=s/2+Math.cos(r)*o,l=s/2+Math.sin(r)*o*.92,c=8+n()*15,h=5+n()*9,d=190+n()*65;e.fillStyle=`rgba(${d},${d},${d},1)`,e.beginPath(),e.ellipse(a,l,c,h,n()*6.28,0,7),e.fill()}return Wi(t,{srgb:!1})}function W0(s=512){const t=qn(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=tn(o/s*18,r/s*18,4),l=tn(o/s*60+5,r/s*60,3),c=150+a*44+(l-.5)*26,h=(r*s+o)*4;i[h]=De(c*1.02),i[h+1]=De(c*.9),i[h+2]=De(c*.74),i[h+3]=255}return e.putImageData(n,0,0),Wi(t)}const pb=`
uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uBounceColor;
uniform vec3  uShadowTint;
uniform vec3  uFogColor;
uniform float uFogDensity;
uniform float uTime;

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i ), b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) ), d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}
float fbm2l( vec2 p ) {
  return vnoise( p ) * 0.66 + vnoise( p * 2.07 + 5.3 ) * 0.34;
}
`,mb=`
precision highp float;
varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying float vHeight;

#include <shadowmap_pars_vertex>

void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4( position, 1.0 );
  vWorld = wp.xyz;
  vNormalW = normalize( mat3( modelMatrix ) * normal );
  vView = cameraPosition - wp.xyz;
  vHeight = position.y;

  #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    vDirectionalShadowCoord[ 0 ] = directionalShadowMatrix[ 0 ] * vec4( wp.xyz + vNormalW * 0.10, 1.0 );
  #endif

  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,gb=`
precision highp float;

uniform sampler2D uSplat;
uniform sampler2D uDirt;
uniform sampler2D uAO;
uniform vec4 uAORegion;  // cx, cz, size, -
uniform vec3 uGrass1;
uniform vec3 uGrass2;
uniform vec3 uGrass3;
uniform vec3 uDirtCol;
uniform vec3 uRockCol;
uniform float uWaterY;

varying vec3 vWorld;
varying vec3 vNormalW;
varying vec3 vView;
varying vec2 vUv;
varying float vHeight;

${pb}

void main() {
  vec2 sp = vec2( ( vWorld.x + 210.0 ) / 420.0, ( vWorld.z + 210.0 ) / 420.0 );
  vec3 splat = texture2D( uSplat, sp ).rgb;

  vec3 N = normalize( vNormalW );
  vec3 V = normalize( vView );
  vec3 L = uSunDir;

  // 烘焙环境光遮蔽（建筑 / 石墙 / 树根与地面的接触阴影）
  vec2 aoUv = ( vWorld.xz - vec2( uAORegion.x - uAORegion.z * 0.5, uAORegion.y - uAORegion.z * 0.5 ) ) / uAORegion.z;
  float ao = 1.0;
  if ( aoUv.x > 0.0 && aoUv.x < 1.0 && aoUv.y > 0.0 && aoUv.y < 1.0 ) {
    ao = texture2D( uAO, aoUv ).r;
  }

  float slope = 1.0 - clamp( N.y, 0.0, 1.0 );

  float n1 = fbm2( vWorld.xz * 0.055 );
  float n2 = fbm2( vWorld.xz * 0.62 + 13.0 );
  float n3 = fbm2( vWorld.xz * 3.4 + 41.0 );
  float n0 = fbm2( vWorld.xz * 0.0135 + 77.0 );

  // 草色：黄绿 → 深绿，大尺度田块变化
  vec3 grass = mix( uGrass1, uGrass2, smoothstep( 0.30, 0.78, n1 ) );
  grass = mix( grass, uGrass3, smoothstep( 0.40, 0.86, n2 ) * 0.62 );
  grass = mix( grass, uGrass3 * 1.08, smoothstep( 0.45, 0.85, n0 ) * 0.45 );
  grass *= 0.88 + 0.24 * n3;

  vec3 dirt = texture2D( uDirt, vWorld.xz * 0.85 ).rgb;
  dirt = mix( uDirtCol, dirt, 0.55 );
  // 碎石颗粒
  float gravel = smoothstep( 0.66, 0.94, vnoise( vWorld.xz * 7.0 ) );
  dirt = mix( dirt, dirt * 1.35 + 0.03, gravel * 0.5 );
  // 车辙：沿路方向的两道浅槽
  dirt *= 0.88 + 0.12 * smoothstep( 0.2, 0.7, abs( sin( vWorld.z * 1.6 ) ) );

  float dirtMask = clamp( splat.g * 1.25, 0.0, 1.0 );
  dirtMask *= 0.75 + 0.35 * n2;
  vec3 col = mix( grass, dirt, dirtMask );

  // 坡地岩石
  float rockMask = smoothstep( 0.42, 0.80, slope ) * 0.75 + splat.b * 0.16 * ( 1.0 - splat.g );
  rockMask = clamp( rockMask, 0.0, 1.0 );
  vec3 rock = uRockCol * ( 0.78 + 0.42 * n3 );
  col = mix( col, rock, rockMask * 0.9 );

  // 河岸湿土
  float shore = smoothstep( 0.15, 0.85, splat.b ) * ( 1.0 - splat.g * 1.6 );
  shore = clamp( shore, 0.0, 1.0 );
  col = mix( col, uDirtCol * 0.34, shore * 0.50 );

  // 草间的细碎花点（远距离）
  float dist = length( vWorld - cameraPosition );
  float fl = hash21( floor( vWorld.xz * 9.0 ) );
  float fm = step( 0.988, fl ) * smoothstep( 0.5, 0.8, n2 ) * ( 1.0 - dirtMask ) * ( 1.0 - rockMask );
  fm *= smoothstep( 34.0, 12.0, dist );
  col = mix( col, vec3( 1.0, 0.98, 0.82 ) * 1.02, fm * 0.35 );

  // 水下焦散
  float depth = uWaterY - vWorld.y;
  float caustic = 0.0;
  if ( depth > 0.0 ) {
    vec2 cuv = vWorld.xz * 1.1;
    float c1 = fbm2l( cuv + vec2( uTime * 0.13, uTime * 0.07 ) );
    float c2 = fbm2l( cuv * 1.7 - vec2( uTime * 0.09, uTime * 0.16 ) );
    caustic = pow( abs( c1 - c2 ), 1.6 ) * 6.0;
    caustic *= smoothstep( 0.0, 0.35, depth ) * ( 1.0 - smoothstep( 1.2, 3.0, depth ) );
  }
  col += caustic * vec3( 0.55, 0.72, 0.55 ) * 0.55;

  col *= ao;

  float shadow = getShadowMask();
  float ndl = dot( N, L );
  float diff = clamp( ( ndl + 0.15 ) / 1.15, 0.0, 1.0 );
  float cs = fbm2l( vWorld.xz * 0.0075 + vec2( uTime * 0.0035, uTime * 0.0018 ) );
  cs = smoothstep( 0.44, 0.60, cs );
  float term = diff * mix( 0.45, 1.0, shadow ) * mix( 0.62, 1.0, cs );
  float lit = smoothstep( 0.06, 0.62, term );
  float hi = smoothstep( 0.55, 0.99, term );

  vec3 shadowC = col * uShadowTint * 0.88;
  vec3 midC = col * 1.0;
  vec3 litC = col * uSunColor * 1.08;

  vec3 outc = mix( shadowC, midC, lit );
  outc = mix( outc, litC, hi * 0.9 );

  outc += col * uSkyColor * 0.05 * ( 0.5 + 0.5 * N.y ) * ( 0.5 + 0.5 * shadow );
  outc += col * uBounceColor * 0.05;

  // 湿地面反光
  float wet = clamp( shore * 0.9 + caustic * 0.1, 0.0, 1.0 );
  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 4.0 );
  vec3 R = reflect( -V, N );
  vec3 skyRefl = mix( uFogColor * 1.1, uSkyColor * 1.1, clamp( R.y * 0.5 + 0.5, 0.0, 1.0 ) );
  outc = mix( outc, skyRefl, fres * ( 0.05 + wet * 0.28 ) );
  vec3 H = normalize( L + V );
  float spec = pow( max( dot( N, H ), 0.0 ), 26.0 );
  outc += uSunColor * spec * ( 0.02 + wet * 0.16 ) * mix( 0.3, 1.0, shadow );

  // 大气
  vec3 vd = normalize( vWorld - cameraPosition );
  float hLow = exp( -max( vWorld.y - 1.5, 0.0 ) * 0.045 );
  float density = 0.55 + 0.45 * hLow;
  float f = 1.0 - exp( -dist * uFogDensity * density );
  float sunAmt = pow( max( dot( vd, L ), 0.0 ), 3.0 );
  vec3 fogC = uFogColor + uSunColor * ( 0.20 + 0.30 * hLow ) * sunAmt;
  float lum0 = dot( outc, vec3( 0.299, 0.587, 0.114 ) );
  outc = mix( outc, vec3( lum0 ) * 0.9 + outc * 0.1, f * 0.22 );
  outc = mix( outc, fogC, clamp( f, 0.0, 0.95 ) );

  outc += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;
  gl_FragColor = vec4( outc, 1.0 );
}
`;function xb(s=2048){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/ks,i=u=>(u+Li)*n,r=u=>(u+Li)*n;e.fillStyle="rgb(150,0,0)",e.fillRect(0,0,s,s);const o=qe(5);e.globalCompositeOperation="source-over";for(let u=0;u<2600;u++){const f=o()*s,p=o()*s,x=12+o()*90;e.fillStyle=`rgba(${120+o()*135},0,0,${.05+o()*.16})`,e.beginPath(),e.arc(f,p,x,0,7),e.fill()}const a=[];for(let u=-Li;u<=Li;u+=2){const f=Gs(u);a.push([u,Vs(u)-f-1.6])}for(let u=Li;u>=-Li;u-=2){const f=Gs(u);a.push([u,Vs(u)+f+1.6])}e.save(),e.filter="blur(7px)",e.fillStyle="rgb(0,0,225)",e.beginPath(),a.forEach(([u,f],p)=>p?e.lineTo(i(u),r(f)):e.moveTo(i(u),r(f))),e.closePath(),e.fill(),e.restore();const l=(u,f)=>{e.save(),e.filter="blur(4px)",e.strokeStyle="rgb(0,255,0)",e.lineWidth=f*n,e.lineCap="round",e.lineJoin="round",e.beginPath(),u.forEach(([p,x],m)=>m?e.lineTo(i(p),r(x)):e.moveTo(i(p),r(x))),e.stroke(),e.restore()};l(Ef,2.4),l(Ef,2.4),l(sb,1.5);const c=[[13.2,13.6,4.6,2.6],[18.6,13.2,4.2,2.4],[17.2,7.6,5,2.2],[21.4,9.8,2.6,3],[12.4,9,2.4,1.8]];for(const[u,f,p,x]of c)e.save(),e.filter="blur(6px)",e.fillStyle="rgb(0,120,0)",e.beginPath(),e.ellipse(i(u),r(f),p*n,x*n,.2,0,7),e.fill(),e.restore();e.save(),e.filter="blur(6px)",e.fillStyle="rgb(0,235,0)",e.beginPath(),e.ellipse(i(0),r(0),4.5*n,4.5*n,0,0,7),e.fill(),e.beginPath(),e.ellipse(i(-8.3),r(1.5),5*n,4*n,.1,0,7),e.fill(),e.restore(),e.save(),e.filter="blur(8px)",e.fillStyle="rgb(0,150,0)",e.beginPath(),e.ellipse(i(16.4),r(11.4),8.2*n,6.4*n,.1,0,7),e.fill(),e.restore(),e.save(),e.filter="blur(5px)",e.strokeStyle="rgba(0,150,0,0.55)",e.lineWidth=1*n,e.beginPath(),Ga.forEach(([u,f],p)=>p?e.lineTo(i(u),r(f)):e.moveTo(i(u),r(f))),e.stroke(),e.restore();const h=e.getImageData(0,0,s,s),d=new Cn(new Uint8Array(h.data),s,s,un);return d.magFilter=Re,d.minFilter=kn,d.generateMipmaps=!0,d.flipY=!1,d.needsUpdate=!0,{texture:d,canvas:t,data:h.data,size:s}}function vb(s=512){const t=new Uint8Array(s*s*4),e=-8,n=40;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=o/(s-1)*ks-Li,l=r/(s-1)*ks-Li,c=$t(a,l),h=De((c-e)/n,0,1),d=Math.round(h*65535),u=(r*s+o)*4;t[u]=d>>8&255,t[u+1]=d&255,t[u+2]=0,t[u+3]=255}const i=new Cn(t,s,s,un);return i.magFilter=Re,i.minFilter=Re,i.flipY=!1,i.needsUpdate=!0,i.userData={MIN:e,RANGE:n},i}const X0=new Cn(new Uint8Array([255,255,255,255]),1,1);X0.needsUpdate=!0;function _b(s,t){const n=new bi(ks,ks,460,460);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let l=0;l<i.count;l++){const c=i.getX(l),h=i.getZ(l);i.setY(l,$t(c,h))}n.computeVertexNormals(),n.computeBoundingSphere();const r=W0(512);r.repeat.set(1,1);const o=new ze({vertexShader:mb,fragmentShader:gb,uniforms:Object.assign({},wt.lights,Qe,{uSplat:{value:s},uDirt:{value:r},uAO:{value:X0},uAORegion:{value:new Se(2,34,220,0)},uGrass1:{value:new nt(7638080)},uGrass2:{value:new nt(4745264)},uGrass3:{value:new nt(2835746)},uDirtCol:{value:new nt(10257759)},uRockCol:{value:new nt(7170136)},uWaterY:{value:Un}}),lights:!0}),a=new qt(n,o);return a.receiveShadow=!0,a.castShadow=!1,a.name="terrain",{mesh:a,material:o}}function yb(){const s=new Gt,t=[{r0:150,r1:400,h:32,color:7309923,seed:1.3,seg:220},{r0:360,r1:680,h:62,color:8296352,seed:4.7,seg:180},{r0:620,r1:1150,h:96,color:10334904,seed:9.1,seg:150}];for(const e of t){const n=e.seg,i=7,r=new Zt,o=[],a=[],l=[];for(let d=0;d<=i;d++){const u=d/i,f=e.r0+(e.r1-e.r0)*u;for(let p=0;p<=n;p++){const x=p/n*Math.PI*2,m=Math.cos(x)*f,g=Math.sin(x)*f,v=tn(Math.cos(x)*3.2+e.seed,Math.sin(x)*3.2+e.seed,4),M=tn(Math.cos(x)*8+e.seed*2,Math.sin(x)*8,3);let y=(v*.75+M*.35)*e.h*Math.sin(Math.PI*Math.min(1,u*1.15));y*=.55+.45*ts(0,.35,u),y+=12*Math.sin(x*5+e.seed)*u,o.push(m,y-2,g),l.push(p/n,u)}}for(let d=0;d<i;d++)for(let u=0;u<n;u++){const f=d*(n+1)+u,p=f+n+1;a.push(f,p,f+1,p,p+1,f+1)}r.setAttribute("position",new At(o,3)),r.setAttribute("uv",new At(l,2)),r.setIndex(a),r.computeVertexNormals();const c=Kt({color:e.color,rim:.18,spec:0,fresnel:.02,noise:.1,noiseScale:.02,side:Ue,ao:1,saturation:.9});c.uniforms.uFogDensity={value:.0024};const h=new qt(r,c);h.frustumCulled=!1,s.add(h)}return s}const le={},N={};let If=!1;function Mb(){if(If)return;If=!0,le.stucco=ab(1024),le.stuccoTower=lb(2048,1024),le.stone=Rf(1024,"warm"),le.stoneCool=Rf(1024,"cool"),le.roof=hb(1024),le.wood=Pf(512,!1),le.woodDark=Pf(512,!0),le.bark=ub(512),le.dirt=W0(512),le.leafCluster=fb(256);const s=(t,e,n)=>{const i=new nc(cb(t,e));return i.wrapS=i.wrapT=Ds,i.colorSpace=Zn,i.anisotropy=8,i};le.nStone=s(le.stone.userData.height||le.stone.image,2.2),le.nStucco=s(le.stuccoTower.image,1.6),le.nRoof=s(le.roof.userData.height||le.roof.image,2.4),le.nWood=s(le.wood.userData.height||le.wood.image,2),le.nBark=s(le.bark.image,2.4),N.stucco=Kt({map:le.stucco,color:16777215,tint:16774368,mapMix:1,rim:.22,rimColor:16774104,spec:.03,specPower:8,fresnel:.1,noise:.07,noiseScale:.55,saturation:1.02}),N.stuccoTower=Kt({map:le.stuccoTower,normalMap:le.nStucco,normalScale:.75,color:16777215,tint:16774886,mapMix:1,rim:.22,rimColor:16774104,spec:.03,specPower:8,fresnel:.1,noise:.05,noiseScale:.55,saturation:1.02,grime:[7.3,11],roughVar:.45}),N.stone=Kt({map:le.stone,normalMap:le.nStone,normalScale:1,color:16777215,tint:13483937,mapMix:1,rim:.26,rimColor:16773328,spec:.1,specPower:14,fresnel:.13,noise:.1,noiseScale:.7,grime:[6.9,9.6],roughVar:.7}),N.stoneCool=Kt({map:le.stoneCool,color:16777215,tint:13027005,mapMix:1,rim:.3,rimColor:15660287,spec:.16,specPower:18,fresnel:.2,noise:.1,noiseScale:.7}),N.roof=Kt({map:le.roof,normalMap:le.nRoof,normalScale:.28,color:16777215,tint:13218716,mapMix:1,rim:.16,rimColor:16767408,spec:.1,specPower:18,fresnel:.14,noise:.08,noiseScale:.6,saturation:1.05,roughVar:.9}),N.wood=Kt({map:le.wood,normalMap:le.nWood,normalScale:.8,color:16777215,tint:13286822,mapMix:1,rim:.2,rimColor:16769720,spec:.06,specPower:10,fresnel:.07,noise:.1,noiseScale:.8,roughVar:.8}),N.woodDark=Kt({color:6965804,rim:.3,rimColor:16767400,spec:.05,specPower:10,fresnel:.06,noise:.14,noiseScale:1.1,saturation:1.04}),N.woodPlain=Kt({color:9400392,rim:.22,rimColor:15785152,spec:.05,fresnel:.05,noise:.12,noiseScale:.9}),N.woodPale=Kt({color:11569756,rim:.26,rimColor:16772813,spec:.05,fresnel:.05,noise:.14,noiseScale:.9}),N.darkInset=Kt({color:2366484,rim:0,spec:0,fresnel:.02,noise:.05,ao:1}),N.metal=Kt({color:3882810,rim:.35,rimColor:14674158,spec:.55,specPower:40,fresnel:.25,noise:.06}),N.dirt=Kt({color:6047280,rim:.18,rimColor:13215864,spec:.04,fresnel:.04,noise:.22,noiseScale:2.4,saturation:1.02}),N.cabbage=Kt({color:7313989,rim:.42,rimColor:14217384,spec:.06,specPower:12,fresnel:.04,noise:.16,noiseScale:3,wrap:.45,saturation:1.06}),N.slate=Kt({map:le.roof,normalMap:le.nRoof,normalScale:1,color:16777215,tint:9148582,mapMix:1,rim:.26,rimColor:14214384,spec:.22,specPower:24,fresnel:.18,noise:.1,noiseScale:1.2,roughVar:.9,saturation:.9}),N.sailCloth=Kt({color:15327174,rim:.34,rimColor:16774364,spec:.02,fresnel:.05,noise:.1,noiseScale:1.6,side:Ue,wrap:.4}),N.zinc=Kt({color:7041400,rim:.28,rimColor:14213868,spec:.32,specPower:26,fresnel:.3,noise:.1,noiseScale:2,roughVar:.8}),N.terracotta=Kt({color:11886908,rim:.28,rimColor:16765870,spec:.12,specPower:16,fresnel:.1,noise:.14,noiseScale:1.2}),N.straw=Kt({color:13084768,rim:.3,rimColor:16773312,spec:.04,fresnel:.04,noise:.3,noiseScale:2,side:Ue}),N.whiteCloth=Kt({color:15919830,rim:.3,rimColor:16777215,spec:.02,fresnel:.06,noise:.06,side:Ue}),N.bark=Kt({map:le.bark,normalMap:le.nBark,normalScale:1,color:10127990,tint:12628122,mapMix:.85,rim:.3,rimColor:16769200,spec:.05,specPower:8,fresnel:.05,noise:.18,noiseScale:1.6,saturation:1.05}),N.leaf=Kt({color:6060602,rim:.3,rimColor:14478528,spec:.05,specPower:9,fresnel:.03,noise:.2,noiseScale:.7,wrap:.62,trans:.55,saturation:1.06,vcolor:!0}),N.leafCard=Kt({map:le.leafCluster,color:16777215,alphaMap:!0,alphaTest:.45,tint:5469740,rim:.34,rimColor:14478528,spec:.04,fresnel:.02,noise:.18,noiseScale:.9,wrap:.6,trans:.5,side:Ue,vcolor:!0,saturation:1.04}),N.leafDark=Kt({color:4483114,rim:.28,rimColor:13624496,spec:.04,specPower:9,fresnel:.03,noise:.22,noiseScale:.7,wrap:.6,trans:.45}),N.flowerBlue=Kt({color:16777215,rim:.45,rimColor:15266047,spec:.06,specPower:12,fresnel:.05,noise:.08,noiseScale:2.2,wrap:.4,saturation:1.02,vcolor:!0}),N.flowerWhite=Kt({color:15921378,rim:.5,rimColor:16777215,spec:.05,fresnel:.05,noise:.06,noiseScale:2.2,wrap:.5}),N.grassCard=Kt({color:7313978,rim:.5,rimColor:14217376,spec:.04,fresnel:.03,noise:.2,noiseScale:1.2,wrap:.55,trans:.35,side:Ue}),N.lampGlass=Kt({color:16767392,rim:.2,rimColor:16773312,spec:.3,fresnel:.2,noise:.05,emissive:.55}),N.potPlant=Kt({color:16777215,rim:.5,rimColor:15267248,spec:.05,fresnel:.03,noise:.12,noiseScale:2.4,wrap:.55,trans:.35,vcolor:!0})}const Eu=2;function q0(s,t,e){const n=s.attributes.uv;if(!n)return s;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*t,n.getY(i)*e);return n.needsUpdate=!0,s}function rt(s,t,e,n=Eu){const i=new rs(s,t,e),r=i.attributes.uv,o=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++){const[l,c]=o[a],h=Math.max(l/n,.34),d=Math.max(c/n,.34);for(let u=0;u<4;u++){const f=a*4+u;r.setXY(f,r.getX(f)*h,r.getY(f)*d)}}return r.needsUpdate=!0,i}function Ce(s,t,e,n=24,i=Eu,r=!1){const o=new He(s,t,e,n,1,r),a=Math.PI*(s+t);return q0(o,a/i,e/i),o.translate(0,e/2,0),o}function Dl(s,t=64,e=1,n=1){const i=s.map(([o,a])=>new Q(o,a)),r=new Dr(i,t);return q0(r,e,n),r}function Cu(s,t,e,n=.45,i=1.2){const r=s+n*2,o=t+n*2,a=r/2,l=o/2,c=Math.hypot(l,e),h=[],d=[],u=[],f=(_,S,I,R,C)=>(h.push(_,S,I),d.push(R,C),h.length/3-1),p=f(-a,0,-l,0,0),x=f(a,0,-l,r/i,0),m=f(a,e,0,r/i,c/i),g=f(-a,e,0,0,c/i),v=f(-a,0,l,0,0),M=f(a,0,l,r/i,0),y=f(a,e,0,r/i,c/i),w=f(-a,e,0,0,c/i);u.push(p,m,x,p,g,m),u.push(v,M,y,v,y,w);const b=new Zt;return b.setAttribute("position",new At(h,3)),b.setAttribute("uv",new At(d,2)),b.setIndex(u),b.computeVertexNormals(),b}function Sb(s,t,e=.35){const n=new Hi,i=s/2;return n.moveTo(-i,0),n.lineTo(-i,t-i*(e*2)),n.quadraticCurveTo(-i,t,0,t),n.quadraticCurveTo(i,t,i,t-i*(e*2)),n.lineTo(i,0),n.closePath(),n}function Nl(s,t,e=.06){const n=new Bo(Sb(s,t),{depth:e,bevelEnabled:!1,curveSegments:12});return n.translate(0,0,-e/2),n}function di(s){const t=s.map(h=>h.index?h.toNonIndexed():h);let e=0;for(const h of t)e+=h.attributes.position.count;const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*2),o=t.every(h=>h.attributes.color),a=o?new Float32Array(e*3):null;let l=0;for(const h of t){const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;n.set(d.array,l*3),u&&i.set(u.array,l*3),f&&r.set(f.array,l*2),o&&a.set(h.attributes.color.array,l*3),l+=d.count}const c=new Zt;return c.setAttribute("position",new de(n,3)),c.setAttribute("normal",new de(i,3)),c.setAttribute("uv",new de(r,2)),o&&c.setAttribute("color",new de(a,3)),c}function ui(s,t){const e=new nt(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new de(i,3)),s}function Co(s,t=.2,e=1.2,n=0){const i=s.attributes.position,r=new E;for(let o=0;o<i.count;o++){r.fromBufferAttribute(i,o);const a=Math.sin(r.x*e+n)*Math.cos(r.y*e*1.3+n)*Math.sin(r.z*e*.9+n*2),l=Math.sin(r.x*e*2.7+1.1)*Math.cos(r.z*e*2.2+n),c=1+(a*.7+l*.3)*t;i.setXYZ(o,r.x*c,r.y*c,r.z*c)}return i.needsUpdate=!0,s.computeVertexNormals(),s}function ji(s=0,t=1){const e=new zo(1,t);return Co(e,.34,1.7,s),e.scale(1,.72,.92),e.computeVertexNormals(),e}const bb=`
precision highp float;
uniform float uTime;
uniform vec3 uCam;
uniform float uBoxXZ;
uniform float uBoxY;
uniform float uSize;
uniform vec3 uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  vec3 p = position;
  // 缓慢漂移
  float t = uTime;
  p.x += sin( t * 0.21 + aSeed * 6.28 ) * 0.9 + t * 0.22;
  p.z += cos( t * 0.17 + aSeed * 4.71 ) * 0.9 + t * 0.10;
  p.y += sin( t * 0.33 + aSeed * 3.14 ) * 0.55;

  // 以相机为中心环绕包裹
  vec3 rel = p - uCam;
  rel.x = mod( rel.x + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  rel.z = mod( rel.z + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  rel.y = mod( rel.y + uBoxY * 0.5, uBoxY ) - uBoxY * 0.5;
  vec3 wp = uCam + rel;

  vec4 mv = viewMatrix * vec4( wp, 1.0 );
  float dist = -mv.z;

  // 太近 / 太远都淡出
  vAlpha = smoothstep( 0.6, 2.2, dist ) * ( 1.0 - smoothstep( 26.0, 46.0, dist ) );
  // 逆光更亮
  vec3 vd = normalize( wp - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 2.0 );

  gl_PointSize = uSize * aScale * ( 300.0 / max( dist, 0.5 ) );
  gl_Position = projectionMatrix * mv;
}
`,wb=`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.06, d );
  vec3 col = mix( uColor, uSunColor * 1.4, vBack * 0.75 );
  gl_FragColor = vec4( col, a * vAlpha * ( 0.28 + vBack * 0.75 ) );
}
`;function Tb(s=1500,t=5){const e=qe(t),n=new Float32Array(s*3),i=new Float32Array(s),r=new Float32Array(s);for(let c=0;c<s;c++)n[c*3]=(e()-.5)*90,n[c*3+1]=(e()-.5)*26,n[c*3+2]=(e()-.5)*90,i[c]=e(),r[c]=.6+e()*1.1;const o=new Zt;o.setAttribute("position",new de(n,3)),o.setAttribute("aSeed",new de(i,1)),o.setAttribute("aScale",new de(r,1));const a=new ze({vertexShader:bb,fragmentShader:wb,uniforms:{uTime:Qe.uTime,uCam:{value:new E},uBoxXZ:{value:90},uBoxY:{value:26},uSize:{value:.055},uSunDir:Qe.uSunDir,uColor:{value:new nt(16773840)},uSunColor:Qe.uSunColor},transparent:!0,depthWrite:!1,blending:uo}),l=new tc(o,a);return l.frustumCulled=!1,l.renderOrder=20,l.name="pollen",l}function Ab(s,t=7){const e=new Gt;e.name="butterflies";const n=qe(31),i=new Kn({color:16771496,side:Ue,transparent:!0,opacity:.95}),r=new Kn({color:15245902,side:Ue,transparent:!0,opacity:.95});for(let a=0;a<t;a++){const l=s[Math.floor(n()*s.length)],c=new Gt,h=new qt(new Oo(.008,.05,3,6),new Kn({color:3812380}));h.rotation.x=Math.PI/2,c.add(h);const d=(m,g)=>{const v=new bi(.07,.055),M=new qt(v,g);return M.position.set(m*.038,.008,0),M.rotation.y=m*.35,c.add(M),M},u=d(1,i),f=d(-1,r),p=d(1,r),x=d(-1,i);p.scale.set(.7,.7,1),x.scale.set(.7,.7,1),p.position.set(.036,-.012,-.012),x.position.set(-.036,-.012,-.012),c.userData={cx:l.x+(n()-.5)*2.2,cz:l.z+(n()-.5)*2.2,baseY:$t(l.x,l.z)+.55+n()*.7,phase:n()*6.28,speed:.5+n()*.55,radius:.9+n()*1.4,wings:[u,f,p,x]},e.add(c)}let o=0;return e.userData.update=a=>{o+=a;for(const l of e.children){const c=l.userData,h=o*c.speed+c.phase;l.position.set(c.cx+Math.cos(h)*c.radius,c.baseY+Math.sin(h*2.3)*.22,c.cz+Math.sin(h*.83)*c.radius),l.rotation.y=-h+Math.PI/2;const d=Math.sin(o*18+c.phase)*.9;c.wings[0].rotation.z=d,c.wings[1].rotation.z=-d,c.wings[2].rotation.z=d*.8,c.wings[3].rotation.z=-d*.8}},e}function Eb(s=6,t=77){const e=new Gt;e.name="birds";const n=qe(t),i=new Kn({color:3817800,side:Ue,transparent:!0,opacity:.85});for(let o=0;o<s;o++){const a=new Gt,l=new Zt,c=new Float32Array([0,0,.06,-.55,.02,-.18,0,0,-.12,0,0,.06,0,0,-.12,.55,.02,-.18]);l.setAttribute("position",new de(c,3)),l.computeVertexNormals();const h=new qt(l,i);a.add(h),a.userData={cx:6+(n()-.5)*40,cz:20+(n()-.5)*40,y:30+n()*26,radius:26+n()*40,phase:n()*6.28,speed:.055+n()*.05,flap:5+n()*3,mesh:h,scale:1.4+n()*1.2},a.scale.setScalar(a.userData.scale),e.add(a)}let r=0;return e.userData.update=o=>{r+=o;for(const a of e.children){const l=a.userData,c=r*l.speed+l.phase;a.position.set(l.cx+Math.cos(c)*l.radius,l.y+Math.sin(c*1.7)*2.5,l.cz+Math.sin(c)*l.radius),a.rotation.y=-c+Math.PI/2,a.rotation.z=Math.sin(c)*.16;const h=Math.sin(r*l.flap+l.phase)*.55;l.mesh.scale.y=1,l.mesh.rotation.z=0,l.mesh.geometry.attributes.position.array[4]=h*.5,l.mesh.geometry.attributes.position.array[13]=h*.5,l.mesh.geometry.attributes.position.needsUpdate=!0}},e}const Cb=`
precision highp float;
uniform float uTime;
uniform float uRise;
uniform float uSpread;
attribute float aSeed;
varying float vAlpha;

void main() {
  float t = fract( uTime * 0.13 + aSeed );
  vec3 p = position;
  p.y += t * uRise;
  p.x += sin( t * 4.2 + aSeed * 6.28 ) * uSpread * t + t * t * uSpread * 0.9;
  p.z += cos( t * 3.1 + aSeed * 4.71 ) * uSpread * 0.8 * t;

  vec4 mv = modelViewMatrix * vec4( p, 1.0 );
  float dist = -mv.z;
  vAlpha = smoothstep( 0.0, 0.10, t ) * ( 1.0 - smoothstep( 0.45, 1.0, t ) ) * 0.42;
  gl_PointSize = ( 0.22 + t * 1.05 ) * 320.0 / max( dist, 1.0 );
  gl_Position = projectionMatrix * mv;
}
`,Rb=`
precision highp float;
uniform vec3 uColor;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.05, d );
  gl_FragColor = vec4( uColor, a * vAlpha );
}
`;function Y0(s=22,t=3.4,e=.5){const n=qe(404),i=new Float32Array(s*3),r=new Float32Array(s);for(let c=0;c<s;c++)i[c*3]=(n()-.5)*.16,i[c*3+1]=0,i[c*3+2]=(n()-.5)*.16,r[c]=n();const o=new Zt;o.setAttribute("position",new de(i,3)),o.setAttribute("aSeed",new de(r,1));const a=new ze({vertexShader:Cb,fragmentShader:Rb,uniforms:{uTime:Qe.uTime,uRise:{value:t},uSpread:{value:e},uColor:{value:new nt(14210767)}},transparent:!0,depthWrite:!1,blending:Rs}),l=new tc(o,a);return l.frustumCulled=!1,l.renderOrder=18,l}const zn=(s,t,e)=>new E(s,t,e);function Lt(s,t,e,n=0,i=0,r=0){const o=new qt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function bs(s,t,e,n,i=Eu){const r=new E().subVectors(t,s),o=r.length(),a=rt(e,o,e,i),l=new qt(a,n);return l.position.copy(s).add(t).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new E(0,1,0),r.clone().normalize()),l.castShadow=!0,l.receiveShadow=!0,l}function li(s=.85,t=1.15,e={}){const n=new Gt,i=Lt(n,Nl(s+.34,t+.3,.1),N.stone,0,-.06,.05);i.castShadow=!1,Lt(n,Nl(s,t,.06),N.darkInset,0,0,.03).castShadow=!1;const r=.07;if(Lt(n,rt(r,t,.1),N.woodDark,-s/2,t/2,.09),Lt(n,rt(r,t,.1),N.woodDark,s/2,t/2,.09),Lt(n,rt(s+r*2,r,.1),N.woodDark,0,t,.09),Lt(n,rt(s+r*2,r,.1),N.woodDark,0,.02,.09),Lt(n,rt(s,.045,.06),N.woodDark,0,t*.55,.11),Lt(n,rt(.04,t*.9,.05),N.woodDark,0,t*.5,.11),Lt(n,rt(s+.46,.1,.32),N.stone,0,-.08,.14),e.shutters)for(const o of[-1,1]){const a=Lt(n,rt(s*.5,t*.94,.05),N.wood,o*(s*.5+s*.28),t*.5,.14);a.rotation.y=o*.12}return e.box&&Lt(n,rt(s+.3,.24,.3),N.woodDark,0,-.16,.2),n}function vc(s=1.35,t=2.45,e={}){const n=new Gt;Lt(n,Nl(s,t,.06),N.darkInset,0,0,.02).castShadow=!1,Lt(n,Nl(s,t,.1),e.mat||N.woodDark,0,0,.07);const i=5;for(let o=0;o<i;o++){const a=(t-.06)/i;Lt(n,rt(s*.94,a*.92,.04),e.boardMat||N.wood,0,.03+o*a+a*.5,.115)}Lt(n,rt(s*.9,.07,.03),N.metal,0,t*.7,.135),Lt(n,rt(s*.9,.07,.03),N.metal,0,t*.24,.135),Lt(n,new Ke(.075,.017,6,12),N.metal,s*.3,t*.47,.145);const r=.16;return Lt(n,rt(r,t+.12,.24),N.stone,-s/2-r/2,(t+.12)/2,.1),Lt(n,rt(r,t+.12,.24),N.stone,s/2+r/2,(t+.12)/2,.1),Lt(n,rt(s+r*2+.34,.18,.3),N.stone,0,t+.16,.1),Lt(n,rt(s+1,.16,.55),N.stone,0,-.08,.22),n}function Pb(){const s=new Gt;s.position.set(0,7.3,0),s.name="windmill";const t=12.2,e=g=>{const v=De(g/t,0,1);return 3.55-.58*Math.pow(v,.72)},n=[],i=26;for(let g=0;g<=i;g++){const v=g/i;n.push([e(v*t),v*t])}n.push([e(t)*1.02,t+.05]),n.push([e(t)*1.04,t+.22]),n.push([0,t+.22]);const r=Dl(n,80,1,1);{const g=r.attributes.position,v=new E;for(let M=0;M<g.count;M++){if(v.fromBufferAttribute(g,M),Math.hypot(v.x,v.z)<.2)continue;const w=Math.sin(v.x*1.7+v.y*2.3)*Math.cos(v.z*1.9-v.y*1.1),b=1+w*.0085;g.setXYZ(M,v.x*b,v.y+w*.012,v.z*b)}g.needsUpdate=!0,r.computeVertexNormals()}Lt(s,r,N.stuccoTower),Lt(s,Ce(3.68,3.8,1.05,64,2),N.stone,0,0,0),Lt(s,Ce(3.84,3.88,.14,64,2),N.stone,0,1,0);const o=(g,v,M,y)=>Lt(s,Ce(M,M,v,64,2,!0),y,0,g,0);o(2.62,.2,e(2.62)+.05,N.stone),o(6.2,.24,e(6.2)+.06,N.woodDark),o(6.44,.08,e(6.44)+.04,N.woodDark),o(9.62,.2,e(9.62)+.05,N.stone),o(11.86,.34,e(11.86)+.1,N.stone);const l=Dl([[3.5,0],[3.52,.1],[3.44,.42],[3.22,.95],[2.9,1.6],[2.45,2.3],[1.9,3],[1.3,3.6],[.72,4.05],[.46,4.32],[.44,4.52],[0,4.58]],80,Math.PI*2*3.5/3.2,4.58/3.2);Lt(s,l,N.roof,0,12.22,0);for(let g=0;g<14;g++){const v=g/14*Math.PI*2,M=[[3.44,.05],[3.2,.95],[2.75,1.9],[2.15,2.85],[1.25,3.7],[.45,4.42]];for(let y=0;y<M.length-1;y++){const[w,b]=M[y],[_,S]=M[y+1],I=bs(zn(Math.sin(v)*w,b,Math.cos(v)*w),zn(Math.sin(v)*_,S,Math.cos(v)*_),.085,N.roof,1);I.position.y+=12.22,s.add(I)}}for(let g=0;g<32;g++){const v=g/32*Math.PI*2,M=Lt(s,rt(.075,.075,.55),N.woodDark,Math.sin(v)*3.36,12.14,Math.cos(v)*3.36);M.rotation.y=v}Lt(s,new xe(.24,18,12),N.metal,0,16.85,0),Lt(s,Ce(.035,.06,.9,8,1),N.metal,0,17,0),Lt(s,new xe(.1,12,10),N.metal,0,17.86,0);const c=(g,v,M,y=0)=>{const w=e(v)+y;return g.position.set(Math.sin(M)*w,v,Math.cos(M)*w),g.rotation.y=M,s.add(g),g};c(li(.78,1.05),4.55,0,-.03),c(li(.7,.95,{shutters:!0}),7.25,-.62,-.03),c(li(.62,.85),10.15,.3,-.03),c(li(.58,.78),5.65,1.15,-.03),c(vc(1.5,2.5),1.05,0,-.02);{let g=2027;const v=()=>(g=g*16807%2147483647)/2147483647,M=[],y=new Yt;for(let w=0;w<7;w++){const b=v()*Math.PI*2,_=1.1+v()*1.9,S=.45+v()*.55,I=.3+v()*.4,R=e(_)-.02,C=rt(S,I,.07,1.1);y.makeRotationFromEuler(new Xn(0,b,(v()-.5)*.3)),C.applyMatrix4(y),C.translate(Math.sin(b)*R,_,Math.cos(b)*R),M.push(C)}Lt(s,di(M),N.stone)}const h=new Gt,d=-.72,u=1.44,f=new He(3.78,3.78,.14,48,1,!1,d,u),p=new qt(f,N.wood);p.castShadow=p.receiveShadow=!0,h.add(p);const x=[],m=9;for(let g=0;g<=m;g++){const v=d+g/m*u,M=Math.sin(v)*3.72,y=Math.cos(v)*3.72;Lt(h,rt(.075,.92,.075),N.woodDark,M,.52,y),x.push(zn(M,0,y))}for(let g=0;g<m;g++){const v=x[g],M=x[g+1];h.add(bs(zn(v.x,.98,v.z),zn(M.x,.98,M.z),.075,N.woodDark,1)),h.add(bs(zn(v.x,.55,v.z),zn(M.x,.55,M.z),.05,N.woodDark,1));for(let y=1;y<3;y++){const w=y/3,b=v.x+(M.x-v.x)*w,_=v.z+(M.z-v.z)*w;Lt(h,rt(.04,.42,.04),N.woodDark,b,.34,_)}}for(const g of[-.62,0,.62])h.add(bs(zn(Math.sin(g)*3.05,-.1,Math.cos(g)*3.05),zn(Math.sin(g)*3.7,-1.05,Math.cos(g)*3.7),.1,N.woodDark));return h.position.y=9.05,s.add(h),s.add(bs(zn(0,10.55,3),zn(.35,11.3,5),.16,N.woodDark)),s.add(bs(zn(0,9.85,3.05),zn(.3,10.6,4.6),.09,N.woodDark)),Lt(s,Ce(.012,.012,1.5,4,1),N.woodDark,.35,10.6,4.95),Lt(s,new Ke(.11,.025,5,10),N.metal,.35,9.85,4.95),{root:s}}function Ib(){const s=new Gt;s.name="smallWindmill";const t=5.2,e=x=>{const m=De(x/t,0,1);return 1.95-.35*Math.pow(m,.7)};Lt(s,Ce(2.06,2.16,1,40,2.2),N.stone,0,0,0),Lt(s,Ce(2.18,2.22,.12,40,2.2),N.stone,0,.96,0);const n=[];for(let x=0;x<=14;x++){const m=x/14;n.push([e(m*t),m*t])}n.push([0,t]);const i=Dl(n,40,1,1);Lt(s,i,N.stuccoTower),Lt(s,Ce(e(2.6)+.05,e(2.6)+.05,.16,40,2,!0),N.woodDark,0,2.6,0),Lt(s,Ce(e(4.3)+.05,e(4.3)+.05,.14,40,2,!0),N.woodDark,0,4.3,0);const r=new Gt,o=new qt(new He(2.42,2.42,.12,40),N.wood);o.castShadow=o.receiveShadow=!0,r.add(o);for(let x=0;x<16;x++){const m=x/16*Math.PI*2;Lt(r,rt(.07,.72,.07),N.woodDark,Math.sin(m)*2.34,.42,Math.cos(m)*2.34)}const a=new qt(new Ke(2.34,.045,5,44),N.woodDark);a.rotation.x=Math.PI/2,a.position.y=.78,r.add(a),r.position.y=3.35,s.add(r);const c=Dl([[2.02,0],[2.04,.1],[1.86,.55],[1.56,1.15],[1.16,1.72],[.72,2.16],[.34,2.44],[.32,2.6],[0,2.66]],40,Math.PI*2*2/2.4,2.66/2.4);Lt(s,c,N.slate,0,t,0),Lt(s,new xe(.13,12,9),N.metal,0,t+2.78,0),Lt(s,Ce(.02,.035,.5,6,1),N.metal,0,t+2.86,0);const h=vc(.95,1.85);h.position.set(0,.95,e(.95)-.02),s.add(h);const d=li(.55,.72);d.position.set(0,3.9,e(3.9)-.02),s.add(d);const u=new Gt;u.position.set(0,4.75,e(4.75)+.35);const f=Lt(u,Ce(.13,.13,.55,10,1),N.woodDark,0,0,-.28);f.rotation.x=Math.PI/2,Lt(u,new xe(.17,12,9),N.woodDark,0,0,.03);const p=3.35;for(let x=0;x<4;x++){const m=new Gt;m.rotation.z=x*Math.PI/2+.22,Lt(m,rt(.11,p,.085),N.woodDark,0,p/2,0);for(let g=0;g<6;g++){const v=.55+g*.5;Lt(m,rt(.78,.045,.045),N.woodDark,.34,v,.012)}Lt(m,rt(.66,p*.74,.016),N.sailCloth,.37,p*.56,.02),u.add(m)}return s.add(u),{root:s,sails:u}}function Lb(){const s=new Gt;s.position.set(-8.3,6.96,1.5),s.rotation.y=.1;const t=8.4,e=5.9,n=4.25,i=2.85;Lt(s,rt(t,n,e,2.6),N.stone,0,n/2,0),Lt(s,rt(t+.26,.55,e+.26,2.6),N.stone,0,.27,0);const r=Cu(t,e,i,.34,1.8);Lt(s,r,N.roof,0,n,0);for(const u of[-1,1])Lt(s,rt(t+.7,.16,.09),N.woodDark,0,n-.02,u*(e/2+.34));{const u=Math.round((t+.8)/.26);for(const f of[-1,1])for(let p=0;p<u;p++){const x=-4.6000000000000005+(p+.5)*((t+.8)/u),m=new He(.1,.1,.3,8,1,!1,0,Math.PI);m.rotateZ(Math.PI/2),m.rotateY(Math.PI/2);const g=Lt(s,m,N.roof,x,n-.02,f*(e/2+.3));g.rotation.x=f*.52}}for(const u of[-1,1]){const f=new Hi;f.moveTo(-e/2,0),f.lineTo(e/2,0),f.lineTo(0,i),f.closePath();const p=new Ws(f),x=Lt(s,p,N.stone,u*(t/2-.02),n,0);x.rotation.y=u*Math.PI/2}Lt(s,rt(t+1.1,.14,.22,1),N.roof,0,n+i-.03,0);for(const u of[-1,1])for(let f=0;f<9;f++){const p=-t/2+.5+f/8*(t-1);Lt(s,rt(.1,.1,.7),N.woodDark,p,n-.05,u*(e/2+.35))}{const u=[];for(const f of[-1,1])for(const p of[-1,1])for(let x=0;x<8;x++){const m=.3+x*.52,g=x%2===0?.34:.26,v=rt(.1,g,.46,1.2);v.translate(f*(t/2+.02),m,p*(e/2-.25)),u.push(v);const M=rt(.46,g,.1,1.2);M.translate(f*(t/2-.25),m,p*(e/2+.02)),u.push(M)}Lt(s,di(u),N.stone)}{const u=Math.round(t/.26),f=[];for(let p=0;p<u;p++){const x=-t/2+(p+.5)*(t/u),m=new He(.11,.11,t/u*.92,8,1,!1,0,Math.PI);m.rotateZ(Math.PI/2),m.translate(x,n+i+.03,0),f.push(m)}Lt(s,di(f),N.roof)}for(const u of[-1,1]){const f=new He(.045,.045,t+.4,8,1,!0,0,Math.PI);f.rotateZ(Math.PI/2);const p=Lt(s,f,N.zinc,0,n-.05,u*(e/2+.2));p.rotation.z=Math.PI}Lt(s,Ce(.035,.035,n-.3,8,1),N.zinc,t/2-.1,.1,e/2+.24),Lt(s,rt(.62,2.7,.62,2),N.stone,2.6,n+.95,-1.55),Lt(s,rt(.8,.16,.8,2),N.stone,2.6,n+2.3,-1.55);const o=Y0(22,3.6,.5);o.position.set(2.6,n+2.5,-1.55),s.add(o);const a=vc(1.25,2.35);a.position.set(1.5,0,e/2-.02),s.add(a),Lt(s,rt(1.9,.16,.16),N.woodDark,1.5,2.52,e/2+.1);const l=Lt(s,rt(2.4,.14,1.05,1.6),N.wood,1.5,2.72,e/2+.38);l.rotation.x=-.16;for(const u of[-1,1])Lt(s,rt(.1,2.65,.1),N.woodDark,1.5+u*1,1.33,e/2+.75);const c=li(.9,1.1,{shutters:!0,box:!0});c.position.set(-1.7,1.5,e/2-.02),s.add(c);const h=li(.85,1.05,{box:!0});h.position.set(-1.7,1.5,-e/2+.02),h.rotation.y=Math.PI,s.add(h);const d=li(.75,.95);return d.position.set(t/2-.02,1.55,1.3),d.rotation.y=Math.PI/2,s.add(d),Lt(s,Ce(.22,.19,.42,12,1),N.woodDark,3,.21,e/2+.5),{root:s}}const Ha={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Db=new Vo(-1,1,1,-1,0,1);class Nb extends Zt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const Ub=new Nb;class _c{constructor(t){this._mesh=new qt(Ub,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Db)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Z0 extends Ys{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Pr.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new _c(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Lf extends Ys{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Fb extends Ys{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ob{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Z0(Ha),this.copyPass.material.blending=Ui,this.timer=new bu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lf!==void 0&&(o instanceof Lf?n=!0:o instanceof Fb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Bb extends Ys{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new nt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const zb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new nt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ir extends Ys{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new nt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:je,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Xe(r,o,{type:je,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Xe(r,o,{type:je,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=zb;this.highPassUniforms=Pr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pr.clone(Ha.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,premultipliedAlpha:!0,blending:uo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new nt,this._oldClearAlpha=1,this._basic=new Kn,this._fsQuad=new _c(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ir.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ir.BlurDirectionX=new Q(1,0);Ir.BlurDirectionY=new Q(0,1);const Fa={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class kb extends Ys{constructor(t,e,n){super(),this.scene=t,this.camera=e;const i=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new Xe(1,1,{minFilter:Be,magFilter:Be,type:je}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new cc,this._materialDepth.depthPacking=vp,this._materialDepth.blending=Ui;const a=Pr.clone(Fa.uniforms);a.tDepth.value=this._renderTargetDepth.texture,a.focus.value=i,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new ze({defines:Object.assign({},Fa.defines),uniforms:a,vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader}),this.uniforms=a,this._fsQuad=new _c(this.materialBokeh),this._oldClearColor=new nt}render(t,e,n){this.scene.overrideMaterial=this._materialDepth,t.getClearColor(this._oldClearColor);const i=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this._renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this._fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(i),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this._renderTargetDepth.setSize(t,e)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}}const Vb=`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 uSun;
uniform float uDensity;
uniform float uThreshold;
uniform float uIntensity;
uniform vec3 uTint;
varying vec2 vUv;

float hash12( vec2 p ) {
  vec3 p3 = fract( vec3( p.xyx ) * 0.1031 );
  p3 += dot( p3, p3.yzx + 33.33 );
  return fract( ( p3.x + p3.y ) * p3.z );
}

void main() {
  vec2 dir = uSun - vUv;
  float dist = length( dir );
  vec3 sum = vec3( 0.0 );
  float wsum = 0.0;
  const int N = 56;
  // 抖动起点，消除环状条带
  float jitter = hash12( gl_FragCoord.xy ) * 1.4;
  for ( int i = 0; i < N; i ++ ) {
    float t = ( float( i ) + jitter ) / float( N );
    vec2 p = vUv + dir * t * uDensity;
    vec3 c = texture2D( tDiffuse, p ).rgb;
    float l = dot( c, vec3( 0.299, 0.587, 0.114 ) );
    // 只取高亮区（天空 / 被阳光照亮的雾）
    c *= smoothstep( uThreshold, uThreshold * 2.2, l );
    // 按到太阳的屏幕距离加权，让光晕聚在太阳附近而不是整片天空
    float sw = 1.0 - smoothstep( 0.0, 0.55, length( p - uSun ) );
    float w = exp( -t * 2.2 ) * ( 0.12 + 0.88 * sw );
    sum += c * w;
    wsum += w;
  }
  sum /= wsum;
  // 靠近太阳时更强
  float prox = 1.0 - smoothstep( 0.0, 1.05, dist );
  vec3 col = sum * uTint * uIntensity * ( 0.28 + 0.72 * prox );
  gl_FragColor = vec4( col, 1.0 );
}
`;class Gb extends Ys{constructor(){super(),this.needsSwap=!1,this.rt=new Xe(1,1,{type:je,depthBuffer:!1,stencilBuffer:!1,colorSpace:ns}),this.material=new ze({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Vb,uniforms:{tDiffuse:{value:null},uSun:{value:new Q(.5,.5)},uDensity:{value:.55},uThreshold:{value:1.15},uIntensity:{value:.35},uTint:{value:new nt(1,.92,.74)}},depthTest:!1,depthWrite:!1}),this.quad=new _c(this.material),this.sun=new Q(.5,.5),this.enabled=!0}setSize(t,e){this.rt.setSize(Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2)))}render(t,e,n){this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.uSun.value.copy(this.sun),t.setRenderTarget(this.rt),this.quad.render(t),t.setRenderTarget(null)}}const Hb={uniforms:{tDiffuse:{value:null},tRays:{value:null},uExposure:{value:.88},uSat:{value:1.52},uLift:{value:.006},uVignette:{value:.3},uGrain:{value:.02},uTime:{value:0},uRayStrength:{value:.26},uResolution:{value:new Q(1,1)},uWarmth:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D tRays;
uniform float uExposure, uSat, uLift, uVignette, uGrain, uTime, uRayStrength, uWarmth;
uniform vec2 uResolution;
varying vec2 vUv;

vec3 aces( vec3 x ) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp( ( x * ( a * x + b ) ) / ( x * ( c * x + d ) + e ), 0.0, 1.0 );
}

void main() {
  vec2 uv = vUv;
  vec2 dc = uv - 0.5;
  float r2 = dot( dc, dc );
  vec2 off = dc * r2 * 0.0022;

  vec3 col;
  col.r = texture2D( tDiffuse, uv + off ).r;
  col.g = texture2D( tDiffuse, uv ).g;
  col.b = texture2D( tDiffuse, uv - off ).b;

  col *= uExposure;
  col += texture2D( tRays, uv ).rgb * uRayStrength;

  col = aces( col );
  col = pow( col, vec3( 1.0 / 2.2 ) );

  float l = dot( col, vec3( 0.299, 0.587, 0.114 ) );

  // 分离色调：暗部偏青，亮部偏暖金
  vec3 cool = col * vec3( 0.93, 0.995, 1.07 );
  vec3 warm = col * vec3( 1.075, 1.005, 0.915 );
  col = mix( cool, col, smoothstep( 0.02, 0.46, l ) );
  col = mix( col, warm, smoothstep( 0.5, 1.0, l ) * uWarmth );

  // 提亮暗部（吉卜力式的通透感）
  col = mix( col, col * 0.88 + vec3( 0.045, 0.055, 0.062 ), 0.12 );
  col = col * ( 1.0 - uLift ) + uLift;

  // 饱和度
  l = dot( col, vec3( 0.299, 0.587, 0.114 ) );
  col = mix( vec3( l ), col, uSat );

  // 轻微 S 曲线，增加层次
  col = clamp( col, 0.0, 1.0 );
  col = mix( col, col * col * ( 3.0 - 2.0 * col ), 0.26 );
  // 高光轻微柔化
  col = mix( col, smoothstep( 0.0, 1.0, col ), 0.08 );

  // 暗角
  float v = smoothstep( 0.15, 0.95, length( dc ) * 1.35 );
  col *= 1.0 - uVignette * v * v;

  // 颗粒
  float g = fract( sin( dot( uv * uResolution + uTime, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );
  col += ( g - 0.5 ) * uGrain;

  gl_FragColor = vec4( clamp( col, 0.0, 1.0 ), 1.0 );
}
`};function Wb(s,t,e){const n=s.getDrawingBufferSize(new Q),i=new Xe(n.x,n.y,{type:je,format:un,colorSpace:ns,depthBuffer:!0,stencilBuffer:!1,samples:2}),r=new Ob(s,i);r.setPixelRatio(s.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const o=new Bb(t,e),a=new kb(t,e,{focus:30,aperture:.0022,maxblur:.0075});a.enabled=!1;const l=new Ir(new Q(n.x,n.y),.26,.68,1.02),c=new Gb,h=new Z0(Hb);return r.addPass(o),r.addPass(a),r.addPass(l),r.addPass(c),r.addPass(h),{composer:r,bloom:l,rays:c,grade:h,rt:i,bokeh:a}}function Xb(s,t){const e=s.data;return(n,i)=>{const r=De((n+210)/420),o=De((i+210)/420),a=Math.min(t-1,Math.floor(r*t)),c=(Math.min(t-1,Math.floor(o*t))*t+a)*4;return[e[c]/255,e[c+1]/255,e[c+2]/255]}}function qb(s,t,e,n=3){const i=[],r=[],o=[];for(let l=0;l<=n;l++){const c=l/n,h=t*c,d=s*(1-c*.9),u=e*c*c;i.push(-d*.5,h,u,d*.5,h,u),r.push(0,c,1,c)}for(let l=0;l<n;l++){const c=l*2,h=c+1,d=c+2,u=c+3;o.push(c,d,h,h,d,u)}const a=new Zt;return a.setAttribute("position",new At(i,3)),a.setAttribute("uv",new At(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function $0(s=1,t=5,e=.36,n=.11){const i=qe(s),r=[];for(let o=0;o<t;o++){const a=i()*Math.PI*2,l=qb(.014+i()*.012,e*(.6+i()*.6),(i()-.5)*.35,3),c=new Yt().makeRotationY(a).setPosition((i()-.5)*n,0,(i()-.5)*n);l.applyMatrix4(c),r.push(l)}return di(r)}function lh(s,t={}){const{count:e=6e4,cx:n=6,cz:i=30,radius:r=66,height:o=.36,spread:a=.11,blades:l=5,seed:c=3,tall:h=!1,ao:d=null}=t,u=qe(c),f=$0(c,l,o,a),p=Kt({color:16777215,rim:.1,rimColor:15661264,spec:.04,specPower:8,fresnel:.03,noise:.1,noiseScale:1.4,wrap:.6,trans:.42,side:Ue,saturation:1.06,windAmp:h?.17:.095,windSpeed:1.5,bendH:o,billow:.012}),x=new Gn(f,p,e);x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!1;const m=new re,g=new nt;let v=0,M=0;for(;v<e&&M<e*24;){M++;const y=u()*Math.PI*2,w=Math.sqrt(u())*r,b=n+Math.cos(y)*w,_=i+Math.sin(y)*w,S=$t(b,_);if(S<-.35)continue;const I=s(b,_);if(I[1]>.42||I[2]>.55||H0(b,_,1.2).y<.62||Math.hypot(b,_)<4.3||b>-13.5&&b<-3.4&&_>-2.2&&_<5.4||Math.hypot(b-15.6,_-11.6)<3)continue;const D=.52+tn(b*.085+13,_*.085-7,3)*1.05,z=(.65+u()*.85)*D;m.position.set(b,S-.02,_),m.rotation.set((u()-.5)*.12,u()*Math.PI*2,(u()-.5)*.12),m.scale.set(z,z*(.8+u()*.6),z),m.updateMatrix(),x.setMatrixAt(v,m.matrix);const L=tn(b*.09,_*.09,3),k=ts(.66,.88,tn(b*.03+9,_*.03,3));g.setHSL(.238+L*.04-k*.02,.38+u()*.18-k*.08,.135+L*.085+u()*.04),d&&g.multiplyScalar(.3+.7*d(b,_)),x.setColorAt(v,g),v++}return x.count=v,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),x}function Yb(s,t=9e3,e=91,n=null){const i=qe(e),r=[],o=new He(.004,.007,.62,3,1);o.translate(0,.31,0),ui(o,new nt(.3,.36,.16)),r.push(o);const a=new xe(.019,5,4);a.scale(1,3.4,1),a.translate(0,.66,0),ui(a,new nt(.46,.42,.22)),r.push(a);for(const x of[-1,1]){const m=new bi(.035,.22);m.rotateZ(x*.5),m.rotateY(x*1.2),m.translate(x*.03,.14,0),ui(m,new nt(.26,.34,.14)),r.push(m)}const l=di(r),c=Kt({color:16777215,rim:.12,rimColor:15135424,spec:.05,fresnel:.03,noise:.1,noiseScale:1.6,wrap:.6,trans:.45,side:Ue,saturation:1.02,vcolor:!0,windAmp:.17,windSpeed:1.15,bendH:.62,billow:.02}),h=new Gn(l,c,t);h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!1;const d=new re,u=new nt;let f=0,p=0;for(;f<t&&p<t*24;){p++;const x=i()*Math.PI*2,m=Math.sqrt(i())*62,g=6+Math.cos(x)*m,v=30+Math.sin(x)*m,M=$t(g,v);if(M<-.3)continue;const y=s(g,v);if(y[1]>.42||y[2]>.55||H0(g,v,1.2).y<.66||Math.hypot(g,v)<4.4||g>-13.5&&g<-3.4&&v>-2.2&&v<5.4||tn(g*.055+41,v*.055-17,3)<.56&&i()>.12)continue;const _=.72+i()*.62;d.position.set(g,M-.02,v),d.rotation.set((i()-.5)*.1,i()*Math.PI*2,(i()-.5)*.1),d.scale.set(_,_*(.85+i()*.5),_),d.updateMatrix(),h.setMatrixAt(f,d.matrix);const S=.86+i()*.3;u.setRGB(S,S,S),n&&u.multiplyScalar(.35+.65*n(g,v)),h.setColorAt(f,u),f++}return h.count=f,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h}function ch(s,t,e,n,i=6){const r=new E().subVectors(t,s),o=r.length(),a=new He(n,e,o,i,1);a.translate(0,o/2,0);const l=new ln().setFromUnitVectors(new E(0,1,0),r.clone().normalize());return a.applyQuaternion(l),a.translate(s.x,s.y,s.z),a}function Zb(s,t,e,n=120){const i=[],r=new E(0,0,1);for(let o=0;o<n;o++){const a=o/n;let l,c;a<.34?(l=.3+s()*.14,c=.84+s()*.2):a<.7?(l=.18+s()*.1,c=.7+s()*.22):(l=.1+s()*.07,c=.52+s()*.24);const h=s()*2-1,d=s()*Math.PI*2,u=Math.sqrt(Math.max(0,1-h*h)),f=u*Math.cos(d),p=h,x=u*Math.sin(d),m=e*c,g=f*m,v=t+p*e*.8,M=x*m,y=e*l,w=new bi(y,y),b=new ln().setFromUnitVectors(r,new E(f,p*.7+.35,x).normalize()),_=new ln().setFromAxisAngle(new E(f,p,x).normalize(),s()*Math.PI*2);w.applyQuaternion(_),w.applyQuaternion(b),w.translate(g,v,M);const I=(.38+De((v-(t-e*.8))/(e*1.85))*.76)*(l>.28?.9:1),R=w.attributes.position.count,C=new Float32Array(R*3);for(let D=0;D<R;D++)C[D*3]=I*(.94+s()*.12),C[D*3+1]=I,C[D*3+2]=I*.88;w.setAttribute("color",new de(C,3)),i.push(w)}return di(i)}function $b(s=1,t=0){const e=qe(s),n=[{th:4.8,tr:.36,cy:6.4,cr:4,lobes:10},{th:6.6,tr:.3,cy:7.8,cr:3,lobes:8},{th:2.5,tr:.19,cy:3.4,cr:2.1,lobes:7},{th:1.7,tr:.13,cy:2,cr:1.5,lobes:6}][t],{th:i,tr:r,cy:o,cr:a,lobes:l}=n,c=[],h=5;let d=0,u=0;for(let C=0;C<h;C++){const D=C/h,z=(C+1)/h,L=i*D,k=i*z,q=Math.sin(D*2.2+s)*i*.055,B=Math.cos(D*1.7+s)*i*.045;c.push(ch(new E(d,L,u),new E(q,k,B),r*(1-D*.5),r*(1-z*.55),8)),d=q,u=B}const f=C=>{const D=De(C/i,0,1);return new E(Math.sin(D*2.2+s)*i*.055,C,Math.cos(D*1.7+s)*i*.045)},p=t===3||t===2?4:5;for(let C=0;C<p;C++){const D=C/p*Math.PI*2+e()*.8,z=i*(.42+e()*.36),L=f(z),k=a*(.62+e()*.34),q=new E(L.x+Math.cos(D)*k,z+k*(.55+e()*.35),L.z+Math.sin(D)*k);c.push(ch(L,q,r*.4,r*.11,6));for(let B=0;B<2;B++){const st=L.clone().lerp(q,.55+e()*.2),G=D+(e()-.5)*1.6,J=k*(.32+e()*.22),Z=new E(st.x+Math.cos(G)*J,st.y+J*(.6+e()*.4),st.z+Math.sin(G)*J);c.push(ch(st,Z,r*.16,r*.055,5))}}const x=di(c),m=[],g=(C,D,z,L,k,q)=>{const B=new xe(L,14,10);Co(B,.2,1.9,s+C*3.1+z),B.scale(1,k,1),B.translate(C,D,z),ui(B,q),m.push(B)},v=new nt(.4,.5,.32),M=new nt(.78,.86,.6),y=new nt(1.16,1.1,.86);for(let C=0;C<l+4;C++){const D=C/l*Math.PI*2+e()*.6,z=a*(.44+e()*.28);g(Math.cos(D)*z,o-a*(.1+e()*.22),Math.sin(D)*z,a*(.34+e()*.16),.78,v)}for(let C=0;C<l+3;C++){const D=C/l*Math.PI*2+.7+e()*.6,z=a*(.26+e()*.28);g(Math.cos(D)*z,o+a*(.1+e()*.24),Math.sin(D)*z,a*(.3+e()*.15),.88,M)}for(let C=0;C<4;C++){const D=e()*Math.PI*2;g(Math.cos(D)*a*.26,o+a*(.44+e()*.22),Math.sin(D)*a*.26,a*(.28+e()*.14),.92,y)}const w=di(m),b=w.attributes.position,_=w.attributes.color,S=o-a*.8,I=o+a*1.05;for(let C=0;C<b.count;C++){const D=b.getY(C);let z=De((D-S)/(I-S));z=z*z*(3-2*z);const L=.7+z*.56;_.setXYZ(C,_.getX(C)*L,_.getY(C)*L,_.getZ(C)*L)}_.needsUpdate=!0;const R=Zb(e,o,a,t===3?56:150);return{trunk:x,canopy:w,cards:R,height:o+a}}function Jb(s,t){const e=new Gt;e.name="trees";const n=new Map;for(const o of t){const a=o.type??0;n.has(a)||n.set(a,[]),n.get(a).push(o)}const i=new re,r=new nt;for(const[o,a]of n){const l=$b(11+o*7,o),c=new Gn(l.trunk,N.bark,a.length),h=new Gn(l.canopy,N.leaf,a.length),d=new Gn(l.cards,N.leafCard,a.length);c.castShadow=c.receiveShadow=!0,h.castShadow=h.receiveShadow=!0,d.castShadow=!1,d.receiveShadow=!0,c.frustumCulled=h.frustumCulled=d.frustumCulled=!1,a.forEach((u,f)=>{const p=$t(u.x,u.z),x=u.scale??1;i.position.set(u.x,p-.15,u.z),i.rotation.set(0,u.rot??Math.random()*6.28,0),i.scale.set(x,x*(u.stretch??1),x),i.updateMatrix(),c.setMatrixAt(f,i.matrix),h.setMatrixAt(f,i.matrix),d.setMatrixAt(f,i.matrix),r.setHSL(.19+Math.random()*.085,.3+Math.random()*.26,.3+Math.random()*.3),h.setColorAt(f,r),d.setColorAt(f,r)}),c.instanceMatrix.needsUpdate=!0,h.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),d.instanceColor&&(d.instanceColor.needsUpdate=!0),e.add(c,h,d)}return e}function Kb(s=5200,t=55,e=null){const n=qe(t),i=$0(t,7,1.15,.15),r=Kt({color:16777215,rim:.12,rimColor:15135940,spec:.05,fresnel:.03,noise:.1,noiseScale:1.6,wrap:.6,trans:.45,side:Ue,saturation:1.04,windAmp:.16,windSpeed:1.1,bendH:1.15,billow:.02}),o=new Gn(i,r,s);o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!1;const a=new re,l=new nt;let c=0,h=0;for(;c<s&&h<s*20;){h++;const d=-130+n()*260,u=Vs(d),f=Gs(d),p=n()<.5?-1:1,x=f*(.88+n()*.75),m=u+p*x,g=$t(d,m);if(g<Un-.25)continue;const v=.7+n()*.8;a.position.set(d,g-.05,m),a.rotation.set((n()-.5)*.15,n()*6.28,(n()-.5)*.15),a.scale.set(v,v*(.8+n()*.7),v),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHSL(.19+n()*.05,.44+n()*.16,.18+n()*.1),e&&l.multiplyScalar(.45+.55*e(d,m)),o.setColorAt(c,l),c++}return o.count=c,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o}function Qb(s,t=14e3,e=21,n=null){const i=qe(e),r=[],o=new xe(.017,5,4);o.translate(0,.235,0),ui(o,new nt(1,1,1)),r.push(o);const a=new He(.004,.007,.22,3,1);a.translate(0,.11,0),ui(a,new nt(.3,.42,.18)),r.push(a);const l=di(r),c=Kt({color:16777215,rim:.2,rimColor:16777215,spec:.05,noise:.05,wrap:.7,trans:.4,side:Ue,windAmp:.05,windSpeed:1.6,bendH:.25,saturation:1.05,vcolor:!0}),h=new Gn(l,c,t);h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!1;const d=new re,u=new nt,f=[[.13,.3,.9],[.14,.72,.88],[.74,.42,.8],[.02,.46,.88],[.13,.18,.86]];let p=0,x=0;for(;p<t&&x<t*20;){x++;const m=i()*Math.PI*2,g=Math.sqrt(i())*62,v=6+Math.cos(m)*g,M=30+Math.sin(m)*g,y=$t(v,M);if(y<-.3)continue;const w=s(v,M);if(w[1]>.5||w[2]>.5||tn(v*.06+21,M*.06+5,3)<.52&&i()>.15)continue;d.position.set(v,y,M),d.rotation.set(0,i()*6.28,0);const _=.7+i()*.8;d.scale.set(_,_,_),d.updateMatrix(),h.setMatrixAt(p,d.matrix);const S=f[Math.floor(i()*f.length)];u.setHSL(S[0],S[1],S[2]),n&&u.multiplyScalar(.45+.55*n(v,M)),h.setColorAt(p,u),p++}return h.count=p,h.instanceMatrix.needsUpdate=!0,h.instanceColor&&(h.instanceColor.needsUpdate=!0),h}function jb(s=5,t=.66,e=105){const n=qe(s),i=[],r=new xe(t,14,9);Co(r,.24,3.2,s),r.scale(1.22,.82,1.22),r.translate(0,t*.62,0),ui(r,new nt(.26,.4,.16)),i.push(r);for(let o=0;o<e;o++){const a=n()*Math.PI*2,l=Math.acos(1-n()*1.12),c=.94+n()*.14,h=Math.sin(l)*Math.cos(a)*t*1.22*c,d=Math.sin(l)*Math.sin(a)*t*1.22*c,u=t*.62+Math.cos(l)*t*.82*c,f=new xe(.048+n()*.034,6,5);Co(f,.2,3.4,o+s),f.translate(h,u,d);const p=.86+n()*.24;ui(f,new nt(.44*p,.56*p,.92*p)),i.push(f)}for(let o=0;o<7;o++){const a=n()*Math.PI*2,l=new xe(.17+n()*.09,6,4);l.scale(1.5,.28,1),l.rotateY(a),l.rotateZ(.3),l.translate(Math.cos(a)*t*1.05,.14+n()*.3,Math.sin(a)*t*1.05),ui(l,new nt(.3,.45,.18)),i.push(l)}return di(i)}function tw(s){const t=new Gt,e=jb(5),n=new Gn(e,N.flowerBlue,s.length);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;const i=new re,r=new nt;return s.forEach((o,a)=>{const l=$t(o.x,o.z);i.position.set(o.x,l-.05,o.z),i.rotation.set(0,o.rot??Math.random()*6.28,0);const c=o.scale??1;i.scale.set(c,c,c),i.updateMatrix(),n.setMatrixAt(a,i.matrix),r.setHSL(o.hue??.62,.34,.72),n.setColorAt(a,r)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),t.add(n),t}function ew(s){const t=new Gt;t.name="wall";const e=[[-96,33],[-76,31.4],[-56,29.6],[-38,27.6],[-24,26.4],[-11,25.6],[2,25],[9.2,25.2],[10.6,26.1]],n=[[14.6,26.3],[16.4,25.4],[25,24.6],[38,24.2],[52,24.8],[66,26.4],[82,29],[100,32]],i=Kt({color:9143153,rim:.2,rimColor:15788244,spec:.12,specPower:14,fresnel:.16,noise:.22,noiseScale:2.2,saturation:.98}),r=Kt({map:N.stone.map,color:16777215,tint:6972245,mapMix:1,rim:.06,spec:.02,fresnel:.04,noise:.3,noiseScale:2.5}),o=Kt({map:N.stone.map,normalMap:N.stone.uniforms.uNormalMap.value,normalScale:1,color:16777215,tint:9405808,mapMix:1,rim:.2,rimColor:14734524,spec:.1,specPower:14,fresnel:.14,noise:.18,noiseScale:2.4,saturation:.98,grime:[4.6,7.6],roughVar:.7}),a=Kt({color:7178814,rim:.4,rimColor:14215840,spec:.05,fresnel:.03,noise:.3,noiseScale:3,saturation:1.05}),l=[ji(1,1),ji(2,1),ji(3,1),ji(4,1)],c=[[],[],[],[]],h=[],d=M=>{const y=ob(M,.24),w=[],b=[],_=.3;let S=0;for(let D=0;D<y.length;D++){const[z,L]=y[D],k=y[Math.max(0,D-1)],q=y[Math.min(y.length-1,D+1)];let B=q[0]-k[0],st=q[1]-k[1];const G=Math.hypot(B,st)||1;B/=G,st/=G;const J=-st,Z=B,at=$t(z,L),Rt=.82+Math.sin(D*.7)*.06;D>0&&(S+=Math.hypot(z-y[D-1][0],L-y[D-1][1]));const X=w.length/3;if(w.push(z-J*_,at-.1,L-Z*_,z+J*_,at-.1,L+Z*_,z+J*_*.92,at+Rt,L+Z*_*.92,z-J*_*.92,at+Rt,L-Z*_*.92),D>0){const ot=X-4;b.push(ot,X,ot+1,X,X+1,ot+1),b.push(ot+1,X+1,ot+2,X+1,X+2,ot+2),b.push(ot+3,X+3,ot,X,X+3,ot),b.push(ot+2,X+2,ot+3,X+2,X+3,ot+3)}}const I=new Zt;I.setAttribute("position",new At(w,3)),I.setIndex(b),I.computeVertexNormals();const R=new qt(I,r);R.castShadow=R.receiveShadow=!0,t.add(R);const C=qe(77+Math.round(M[0][0]));for(let D=1;D<y.length-1;D++){const[z,L]=y[D],k=y[D-1],q=y[D+1];let B=q[0]-k[0],st=q[1]-k[1];const G=Math.hypot(B,st)||1;B/=G,st/=G;const J=-st,Z=B,at=$t(z,L),Rt=5;for(let X=0;X<Rt;X++){const ot=X/(Rt-1);for(const Tt of[-1,1]){if(C()>.95)continue;const Pt=(.215+C()*.05)*Tt,xt=z+J*Pt+(C()-.5)*.05,Bt=L+Z*Pt+(C()-.5)*.05,Te=at+.08+ot*.66+(C()-.5)*.04,Ht=C(),jt=Ht<.16?.205+C()*.065:Ht<.7?.13+C()*.048:.076+C()*.04;c[Math.floor(C()*4)].push({p:[xt,Te,Bt],s:[jt*(1.1+C()*.6),jt*(.72+C()*.4),jt*(.9+C()*.5)],r:[C()*6.28,C()*6.28,C()*6.28]}),C()>.86&&h.push({p:[xt+J*.02*Tt,Te+.06,Bt+Z*.02*Tt],s:[jt*1,jt*.5,jt*.9],r:[0,C()*6.28,0]})}}D%3===0&&c[Math.floor(C()*4)].push({p:[z+(C()-.5)*.1,at+.9,L+(C()-.5)*.1],s:[.26+C()*.12,.13+C()*.06,.22+C()*.1],r:[(C()-.5)*.3,C()*6.28,(C()-.5)*.3]})}};d(e),d(n);const u=new re;if(c.forEach((M,y)=>{if(!M.length)return;const w=new Gn(l[y],i,M.length);w.castShadow=!0,w.receiveShadow=!0,w.frustumCulled=!1,M.forEach((b,_)=>{u.position.set(...b.p),u.rotation.set(...b.r),u.scale.set(...b.s),u.updateMatrix(),w.setMatrixAt(_,u.matrix)}),w.instanceMatrix.needsUpdate=!0,t.add(w)}),h.length){const M=new Gn(l[0],a,h.length);M.castShadow=!1,M.receiveShadow=!0,M.frustumCulled=!1,h.forEach((y,w)=>{u.position.set(...y.p),u.rotation.set(...y.r),u.scale.set(...y.s),u.updateMatrix(),M.setMatrixAt(w,u.matrix)}),M.instanceMatrix.needsUpdate=!0,t.add(M)}const f=$t(pr.x,pr.z);for(const M of[-1,1]){const y=pr.x+M*2.1,w=pr.z+M*.15,b=$t(y,w),_=new Gt;let S=0;for(let C=0;C<5;C++){const D=.66-C*.025,z=rt(D,.33,D*.92,.9),L=new qt(z,o);L.position.set((Math.random()-.5)*.03,S+.165,(Math.random()-.5)*.03),L.rotation.y=(Math.random()-.5)*.12,L.castShadow=L.receiveShadow=!0,_.add(L),S+=.315}const I=new qt(rt(.78,.16,.72,1.6),N.stone);I.position.y=S+.06,I.castShadow=I.receiveShadow=!0,_.add(I);const R=new qt(new xe(.19,14,10),N.stone);R.position.y=S+.32,R.castShadow=!0,_.add(R),_.position.set(y,b,w),t.add(_)}const p=new Gt,x=1.65,m=1.25,g=new Gt;for(const M of[.12,m-.06]){const y=new qt(rt(x,.1,.07),N.woodDark);y.position.set(x/2,M,0),y.castShadow=!0,g.add(y)}for(let M=0;M<5;M++){const y=new qt(rt(.08,m,.06),N.woodDark);y.position.set(.14+M*(x-.28)/4,m/2,0),y.castShadow=!0,g.add(y)}const v=new qt(rt(.08,Math.hypot(x,m)*.92,.05),N.woodDark);return v.position.set(x/2,m/2,.02),v.rotation.z=Math.atan2(x,m),v.castShadow=!0,g.add(v),g.position.set(0,0,0),p.add(g),p.position.set(pr.x-2,f+.05,pr.z),p.rotation.y=-.55,t.add(p),t}const Wa={cx:2,cz:34,size:220};function nw({trees:s=[],props:t=[],size:e=2048}={}){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,e,e);const r=Wa,o=e/r.size,a=f=>(f-(r.cx-r.size/2))*o,l=f=>(f-(r.cz-r.size/2))*o,c=(f,p,x,m)=>{const g=a(f),v=l(p),M=Math.max(1.5,x*o);if(g<-M||v<-M||g>e+M||v>e+M)return;const y=i.createRadialGradient(g,v,0,g,v,M);y.addColorStop(0,`rgba(0,0,0,${m})`),y.addColorStop(.55,`rgba(0,0,0,${m*.92})`),y.addColorStop(.8,`rgba(0,0,0,${m*.42})`),y.addColorStop(.93,`rgba(0,0,0,${m*.12})`),y.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=y,i.beginPath(),i.arc(g,v,M,0,7),i.fill()};c(0,0,5,.86);for(let f=-1;f<=1;f++)c(-8.3+f*2.5,1.5,4.4,.7);for(let f=0;f<Ga.length-1;f++){const[p,x]=Ga[f],[m,g]=Ga[f+1],v=Math.hypot(m-p,g-x),M=Math.max(1,Math.round(v/.8));for(let y=0;y<M;y++){const w=y/M;c(p+(m-p)*w,x+(g-x)*w,1.5,.3)}}for(const f of s)c(f.x,f.z,1.3*(f.scale??1),.55);for(const f of t)c(f.x,f.z,f.r??.8,f.a??.55);const h=i.getImageData(0,0,e,e).data,d=(f,p)=>{const x=Math.floor((f-(r.cx-r.size/2))*o),m=Math.floor((p-(r.cz-r.size/2))*o);return x<0||m<0||x>=e||m>=e?1:h[(m*e+x)*4]/255},u=new nc(n);return u.wrapS=u.wrapT=An,u.colorSpace=Zn,u.minFilter=Re,u.magFilter=Re,u.generateMipmaps=!1,u.flipY=!1,u.needsUpdate=!0,{texture:u,sample:d,canvas:n}}function Me(s,t,e,n=0,i=0,r=0){const o=new qt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function Th(s=.62,t=10,e=.12){const n=new Gt,i=new qt(new Ke(s,.055,6,30),N.woodDark);i.castShadow=!0,n.add(i);const r=new qt(new Ke(s-.1,.035,5,26),N.woodDark);r.castShadow=!0,n.add(r);for(let a=0;a<t;a++){const l=a/t*Math.PI*2,c=new qt(rt(.062,s*2-.1,.055),N.woodDark);c.rotation.z=l,c.castShadow=!0,n.add(c)}const o=new qt(Ce(.1,.1,e,10,1),N.woodDark);return o.rotation.x=Math.PI/2,o.position.z=-e/2,o.castShadow=!0,n.add(o),n}function iw(){const s=new Gt,t=2.3,e=1.35;for(let o=0;o<6;o++)Me(s,rt(t,.06,e/6-.02),N.wood,0,0,-e/2+(o+.5)*e/6);for(const o of[-1,1]){Me(s,rt(t,.3,.06),N.wood,0,.16,o*e/2);for(let a=0;a<4;a++)Me(s,rt(.06,.34,.09),N.woodDark,-t/2+.2+a*(t-.4)/3,.16,o*e/2)}for(const o of[-1,1])Me(s,rt(t*.96,.1,.12),N.woodDark,0,-.07,o*e*.34);for(const o of[-1,1]){const a=Me(s,rt(2.1,.09,.09),N.woodDark,-t/2-.95,-.02,o*.34);a.rotation.z=.06}Me(s,rt(.5,.09,.9),N.woodDark,-t/2-1.85,.1,0);const n=Me(s,Ce(.055,.055,e+.3,8,1),N.woodDark,-.1,-.12,-1.6500000000000001/2);n.rotation.x=Math.PI/2;const i=Th(.66,10,.14);i.position.set(-.1,-.62,e/2+.12),s.add(i);const r=Th(.66,10,.14);return r.position.set(-.1,-.62,-e/2-.12),s.add(r),s}function Df(){const s=new Gt,t=1.9;for(let e=0;e<3;e++)Me(s,rt(t,.055,.14),N.wood,0,.46,-.18+e*.16);for(let e=0;e<2;e++){const n=Me(s,rt(t,.14,.05),N.wood,0,.72+e*.17,.28);n.rotation.x=-.16}for(const e of[-1,1]){Me(s,rt(.09,.46,.09),N.woodPlain,e*(t/2-.14),.23,-.2),Me(s,rt(.09,.46,.09),N.woodPlain,e*(t/2-.14),.23,.24);const n=Me(s,rt(.07,.62,.07),N.woodPlain,e*(t/2-.14),.72,.28);n.rotation.x=-.16,Me(s,rt(.08,.07,.52),N.woodPlain,e*(t/2-.14),.44,.02)}return s}function sw(){const s=new Gt;Me(s,Ce(.042,.058,2.55,10,1),N.metal,0,0,0),Me(s,Ce(.15,.19,.1,12,1),N.metal,0,.02,0);const t=new Gt,e=.15,n=.3;for(const o of[-1,1])for(const a of[-1,1])Me(t,rt(.022,n,.022),N.metal,o*e,n/2,a*e);const i=Me(t,rt(e*1.9,n*.94,e*1.9),N.lampGlass,0,n/2,0);i.castShadow=!1,Me(t,rt(e*2.3,.03,e*2.3),N.metal,0,.012,0),Me(t,rt(e*2.3,.035,e*2.3),N.metal,0,n,0);const r=Me(t,new os(.2,.15,4),N.metal,0,n+.075,0);return r.rotation.y=Math.PI/4,Me(t,new xe(.026,8,6),N.metal,0,n+.17,0),t.position.y=2.46,s.add(t),s}function rw(s=1,t=!0){const e=new Gt,n=[[0,0],[.17,0],[.185,.03],[.215,.1],[.232,.2],[.238,.28],[.25,.315],[.252,.345],[.235,.352],[.215,.33],[0,.33]].map(([a,l])=>new Q(a,l)),i=new qt(new Dr(n,18),N.terracotta);i.castShadow=i.receiveShadow=!0,e.add(i);const r=new qt(new Ke(.245,.028,6,16),N.terracotta);r.rotation.x=Math.PI/2,r.position.y=.17,r.castShadow=!0,e.add(r);const o=new qt(new Hs(.22,12),N.darkInset);if(o.rotation.x=-Math.PI/2,o.position.y=.16,e.add(o),t){const a=qe(Math.floor(Math.random()*999)),l=[];for(let h=0;h<7;h++){const d=a()*6.28,u=a()*.16,f=new xe(.09+a()*.06,8,6);Co(f,.25,3,h),f.translate(Math.cos(d)*u,.24+a()*.16,Math.sin(d)*u),ui(f,new nt(.22,.36,.14)),l.push(f)}for(let h=0;h<6;h++){const d=a()*6.28,u=a()*.18,f=new xe(.045,6,4);f.translate(Math.cos(d)*u,.36+a()*.14,Math.sin(d)*u),ui(f,new nt(.95,.86,.55)),l.push(f)}const c=new qt(di(l),N.potPlant);c.castShadow=!0,e.add(c)}return e.scale.setScalar(s),e}function ow(s,t=.95){const e=new Gt,n=[];for(let i=0;i<s.length-1;i++){const[r,o]=s[i],[a,l]=s[i+1],c=Math.hypot(a-r,l-o),h=Math.max(1,Math.round(c/1.6));for(let d=0;d<h;d++)n.push([r+(a-r)*(d/h),o+(l-o)*(d/h)])}n.push(s[s.length-1]);for(let i=0;i<n.length;i++){const[r,o]=n[i],a=$t(r,o),l=Me(e,rt(.1,t+.18,.1),N.woodPlain,r,a+(t+.18)/2,o);if(l.rotation.y=Math.random()*.2,i<n.length-1){const[c,h]=n[i+1],d=$t(c,h),u=c-r,f=h-o,p=Math.hypot(u,f),x=Math.atan2(u,f);for(const m of[.35,.78]){const g=Me(e,rt(.055,.09,p+.05),N.woodPlain,r+u/2,(a+d)/2+m,o+f/2);g.rotation.y=x,g.rotation.x=Math.atan2(d-a,p)*0}}}return e}function aw(){const s=new Gt;Me(s,rt(.12,1.8,.12),N.woodDark,0,.9,0),Me(s,rt(.42,.5,.38),N.woodPlain,0,1.9,0);const t=Me(s,new os(.36,.26,4),N.roof,0,2.24,0);t.rotation.y=Math.PI/4;const e=Me(s,new Hs(.075,12),N.darkInset,0,1.94,.2);return e.castShadow=!1,s}function lw(){const s=new Gt;Me(s,Ce(.28,.24,.72,14,1),N.woodDark,0,0,0);for(const t of[.14,.36,.58]){const e=Me(s,new Ke(.275-Math.abs(t-.36)*.1,.022,5,16),N.metal,0,t,0);e.rotation.x=Math.PI/2}return s}function Nf(s=.5){const t=new Gt;Me(t,rt(s,s*.8,s),N.wood,0,s*.4,0);for(const e of[-1,1])for(const n of[-1,1])Me(t,rt(.05,s*.82,.05),N.woodDark,e*s/2,s*.4,n*s/2);return t}function cw(){const s=new Gt,t=Me(s,new He(.75,.85,1.1,14,1),N.straw,0,.55,0);return t.rotation.z=Math.PI/2,s}function hw(s=1100){const t=new Gt,e=[ji(11,1),ji(12,1),ji(13,1),ji(14,0)],n=[[],[],[],[]],i=qe(2024);for(let a=0;a<s;a++){const l=-150+i()*300,c=Vs(l),h=Gs(l),d=i()<.45,u=d?h*(.15+i()*.95):h*(.95+i()*.55),f=i()<.5?-1:1,p=c+f*u,x=$t(l,p),m=d?.22+i()*.55:.16+i()*.42,g=d?Math.max(x,Un-.35):x+m*.15;n[Math.floor(i()*4)].push({p:[l,g,p],s:[m*(.9+i()*.7),m*(.6+i()*.5),m*(.9+i()*.6)],r:[i()*6.28,i()*6.28,i()*6.28]})}const r=Kt({color:9275514,rim:.34,rimColor:15266016,spec:.22,specPower:26,fresnel:.3,noise:.24,noiseScale:2,saturation:.95,wet:.55,roughVar:.9}),o=new re;return n.forEach((a,l)=>{const c=new Gn(e[l],r,a.length);c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,a.forEach((h,d)=>{o.position.set(...h.p),o.rotation.set(...h.r),o.scale.set(...h.s),o.updateMatrix(),c.setMatrixAt(d,o.matrix)}),c.instanceMatrix.needsUpdate=!0,t.add(c)}),t}function uw(s){const t=new Gt;t.name="scenery";const e=iw();e.position.set(21,$t(21,59)+.35,59),e.rotation.set(-.08,.92,.24),t.add(e);const n=Th(.66,10,.14);n.position.set(17.6,$t(17.6,60.4)+.12,60.4),n.rotation.set(-Math.PI/2+.22,.4,.3),t.add(n);const i=Df();i.position.set(13.3,$t(13.3,9.6),9.6),i.rotation.y=-2.15,t.add(i);const r=Df();r.position.set(18.9,$t(18.9,13.4),13.4),r.rotation.y=-2.05,t.add(r);const o=sw();o.position.set(13.6,$t(13.6,19.5),19.5),t.add(o);const a=aw();a.position.set(21.8,$t(21.8,15.4),15.4),t.add(a);const l=ow([[23.2,6.2],[24.6,11.6],[22.6,17.2],[17,18.6],[11.4,16.4]]);t.add(l);const c=[[11.7,13.4,1],[12.35,12.85,.8],[19.9,8.3,1],[20.6,9,.75],[-2.6,4.6,.95],[-1.9,5.4,.7],[-6.2,5.2,.9],[8.6,10.4,.85]];for(const[p,x,m]of c){const g=rw(m);g.position.set(p,$t(p,x),x),g.rotation.y=Math.random()*6.28,t.add(g)}const h=lw();h.position.set(2.9,$t(2.9,5.3),5.3),t.add(h);const d=Nf(.55);d.position.set(3.7,$t(3.7,4.7),4.7),d.rotation.y=.5,t.add(d);const u=Nf(.42);u.position.set(3.5,$t(3.5,4.7)+.44,4.72),u.rotation.y=.9,t.add(u);const f=cw();return f.position.set(-13.2,$t(-13.2,6.5),6.5),f.rotation.y=.4,t.add(f),s.add(t),t}const Uf=(s,t,e)=>new E(s,t,e);function Ft(s,t,e,n=0,i=0,r=0){const o=new qt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function dw(s=9,t=6.2,e=4.2,n=2.45){const i=new Gt;Ft(i,rt(s+.2,1.25,t+.2,3.4),N.stone,0,.62,0),Ft(i,rt(s,e-1.25,t,1.6),N.wood,0,1.25+(e-1.25)/2,0);for(let a=0;a<3;a++)Ft(i,rt(s-.1,.09,.05),N.woodDark,0,1.7+a*1.05,t/2+.015);for(const a of[-1,1])for(const l of[-1,1])Ft(i,rt(.16,e-1.2,.16),N.wood,a*(s/2-.05),1.25+(e-1.25)/2,l*(t/2-.05));const r=Cu(s,t,n,.34,1.7);Ft(i,r,N.roof,0,e,0);for(const a of[-1,1]){const l=new Hi;l.moveTo(-t/2,0),l.lineTo(t/2,0),l.lineTo(0,n),l.closePath();const c=Ft(i,new Ws(l),N.woodDark,a*(s/2-.02),e,0);c.rotation.y=a*Math.PI/2}Ft(i,rt(s+.9,.14,.2,1),N.roof,0,e+n-.02,0);for(const a of[-1,1]){Ft(i,rt(s+.72,.17,.07),N.woodDark,0,e-.06,a*(t/2+.32));for(const l of[-1,1]){const c=Math.hypot(t/2+.34,n),h=Ft(i,rt(.09,.17,c),N.woodDark,l*(s/2+.31),e+n/2-.04,0);h.rotation.x=-Math.atan2(n,t/2+.34)}}Ft(i,rt(3.3,3.15,.1),N.darkInset,0,1.56,t/2+.02);for(const a of[-1,1]){Ft(i,rt(1.42,2.96,.1),N.woodDark,a*.74,1.5,t/2+.06);const l=Ft(i,rt(.075,1.25,.045),N.woodDark,a*.74,1.5,t/2+.11);l.rotation.z=a*.95,Ft(i,rt(.5,.07,.04),N.metal,a*1.15,2.45,t/2+.12),Ft(i,rt(.5,.07,.04),N.metal,a*1.15,.75,t/2+.12)}Ft(i,rt(3.4,.18,.26),N.woodDark,0,3.12,t/2+.05),Ft(i,rt(.16,3.2,.22),N.woodDark,-1.62,1.6,t/2+.05),Ft(i,rt(.16,3.2,.22),N.woodDark,1.62,1.6,t/2+.05),Ft(i,rt(1.42,1.02,.1),N.darkInset,0,3.28,t/2+.03),Ft(i,rt(1.62,.11,.18),N.woodDark,0,3.82,t/2+.07),Ft(i,rt(1.62,.11,.18),N.woodDark,0,2.74,t/2+.07);for(const a of[-1,1])Ft(i,rt(.11,1.14,.18),N.woodDark,a*.76,3.28,t/2+.07);Ft(i,rt(.13,.13,1.35),N.woodDark,0,4.12,t/2+.62),i.add(bs(Uf(0,3.55,t/2+.12),Uf(0,4.1,t/2+.95),.08,N.woodDark)),Ft(i,Ce(.01,.01,.62,4,1),N.woodDark,0,3.8,t/2+1.22),Ft(i,new Ke(.06,.014,5,8),N.metal,0,3.48,t/2+1.22);const o=li(.5,.62);return o.position.set(-s/2+.02,2.1,0),o.rotation.y=-Math.PI/2,i.add(o),i}function fw(s=6.2,t=4.6,e=3,n=1.75){const i=new Gt;Ft(i,rt(s,e,t,3.4),N.stone,0,e/2,0),Ft(i,rt(s+.24,.4,t+.24,3.4),N.stone,0,.2,0);const r=Cu(s,t,n,.38,1.6);Ft(i,r,N.roof,0,e,0);for(const h of[-1,1]){const d=new Hi;d.moveTo(-t/2,0),d.lineTo(t/2,0),d.lineTo(0,n),d.closePath();const u=Ft(i,new Ws(d),N.stone,h*(s/2-.01),e,0);u.rotation.y=h*Math.PI/2}Ft(i,rt(s+.7,.12,.18,1),N.roof,0,e+n-.02,0);for(const h of[-1,1]){Ft(i,rt(s+.56,.14,.06),N.woodDark,0,e-.05,h*(t/2+.26));for(const d of[-1,1]){const u=Math.hypot(t/2+.3,n),f=Ft(i,rt(.08,.14,u),N.woodDark,d*(s/2+.25),e+n/2-.03,0);f.rotation.x=-Math.atan2(n,t/2+.3)}}Ft(i,rt(.5,1.9,.5,1.8),N.stone,s/2-.9,e+n*.55,-.9),Ft(i,rt(.64,.12,.64,1.8),N.stone,s/2-.9,e+n*.55+.98,-.9);const o=vc(1,2,{mat:N.woodDark,boardMat:N.woodDark});o.position.set(-.6,0,t/2-.02),i.add(o);const a=li(.62,.78,{shutters:!0,box:!0});a.position.set(1.5,1.35,t/2-.02),i.add(a);const l=li(.55,.7);l.position.set(s/2-.02,1.4,.6),l.rotation.y=Math.PI/2,i.add(l);const c=Y0(20,3.2,.45);c.position.set(s/2-.9,e+n*.55+1.15,-.9),i.add(c),Ft(i,rt(.7,.08,.28),N.woodPlain,-.6,.42,t/2+.55);for(const h of[-1,1])Ft(i,rt(.07,.42,.07),N.woodPlain,-.6+h*.26,.21,t/2+.55);return i}function pw(s=4.2,t=3.2,e=2.4){const n=new Gt;for(const r of[-1,1])for(const o of[-1,1])Ft(n,rt(.16,e,.16),N.woodDark,r*(s/2-.1),e/2,o*(t/2-.1));for(const r of[-1,1])Ft(n,rt(s,.14,.14),N.woodDark,0,e-.07,r*(t/2-.1));const i=Ft(n,rt(s+.6,.12,t+.7,2.4),N.roof,0,e+.12,0);i.rotation.x=-.13,Ft(n,rt(s-.2,e-.2,.1,1.6),N.woodDark,0,(e-.2)/2,-t/2+.1);for(let r=0;r<6;r++){const o=Ft(n,Ce(.09,.09,1.6,6,1),N.wood,-1.1+r%3*.22,.09+Math.floor(r/3)*.2,.4);o.rotation.z=Math.PI/2}return n}function mw(){const s=new Gt,t=12;for(let o=0;o<t;o++){const a=o/t*Math.PI*2,l=Ft(s,rt(.58,.86,.26,2.6),N.stone,Math.sin(a)*.98,.43,Math.cos(a)*.98);l.rotation.y=a}const e=new qt(new Ke(1.02,.075,6,26),N.stone);e.rotation.x=Math.PI/2,e.position.y=.88,e.castShadow=!0,s.add(e);const n=new qt(new Hs(.9,22),N.darkInset);n.rotation.x=-Math.PI/2,n.position.y=.55,s.add(n);for(const o of[-1,1]){Ft(s,rt(.13,2.05,.13),N.woodDark,o*.92,1.02,0);const a=Ft(s,rt(.07,.5,.07),N.woodDark,o*.92,.9,.16);a.rotation.x=.55}const i=new He(.07,.07,2.2,8);i.rotateZ(Math.PI/2),Ft(s,i,N.woodDark,0,2.02,0);const r=new He(.115,.115,.62,12);r.rotateZ(Math.PI/2),Ft(s,r,N.woodDark,.28,2.02,0),Ft(s,rt(.05,.05,.3),N.woodDark,.62,2.02,.16),Ft(s,rt(.05,.22,.05),N.woodDark,.62,1.92,.3),Ft(s,Ce(.011,.011,.82,4,1),N.woodDark,0,1.6,0),Ft(s,Ce(.155,.125,.26,12,1),N.woodDark,0,1.06,0),Ft(s,new Ke(.15,.016,5,12),N.metal,0,1.16,0).rotation.x=Math.PI/2;for(const o of[-1,1]){const a=Ft(s,rt(1.25,.09,2.35,2.6),N.roof,o*.55,2.2,0);a.rotation.z=-o*.44}return Ft(s,rt(.12,.1,2.4,2.6),N.roof,0,2.46,0),Ft(s,new xe(.06,8,6),N.metal,0,2.55,0),s}function gw(s=4,t=3.2){const e=new Gt,n=qe(303);for(let i=0;i<s;i++){const r=(i-(s-1)/2)*.62;Ft(e,rt(t,.22,.46,1.2),N.dirt,0,-.02,r);const o=Math.floor(t/.42);for(let a=0;a<o;a++){const l=-t/2+.2+a*.42,c=.11+n()*.05,h=new qt(new xe(c,7,5),N.cabbage);h.scale.set(1,.78,1),h.position.set(l+(n()-.5)*.05,.1+c*.5,r),h.castShadow=!0,e.add(h)}}return e}function Ff(s=1.1,t=2){const e=new Gt;return Ft(e,Ce(s,s*1.06,t*.62,14,1),N.straw,0,0,0),Ft(e,new os(s*1.08,t*.5,14),N.straw,0,t*.62,0),Ft(e,Ce(.05,.05,.5,5,1),N.woodDark,0,t*1.05,0),e}function xw(s=3.2,t=.52){const e=new Gt;for(const i of[-1,1])Ft(e,rt(.07,s,.07),N.woodPlain,i*t/2,s/2,0);const n=Math.floor(s/.34);for(let i=0;i<n;i++)Ft(e,rt(t,.05,.05),N.woodPlain,0,.25+i*.34,0);return e}function Of(){const s=new Gt,t=new qt(new xe(.26,10,8),N.straw);return t.scale.set(.82,1.05,.78),t.position.y=.26,t.castShadow=t.receiveShadow=!0,s.add(t),Ft(s,Ce(.1,.14,.16,8,1),N.straw,0,.5,0),Ft(s,new Ke(.105,.018,5,10),N.woodDark,0,.62,0).rotation.x=Math.PI/2,s}function Bf(s=2,t=1){const e=new Gt,n=qe(71),i=Math.floor(t/.2);for(let r=0;r<i;r++){const o=Math.floor(s/.22);for(let a=0;a<o;a++){if(n()>.9)continue;const l=Ft(e,Ce(.085,.09,.5,6,1),N.wood,-s/2+.12+a*.22,.09+r*.19,(n()-.5)*.06);l.rotation.x=Math.PI/2,l.rotation.z=(n()-.5)*.15}}return e}function vw(s){const t=new Gt;t.name="village";const e=(a,l,c,h=0,d=0)=>(a.position.set(l,$t(l,c)+d,c),a.rotation.y=h,t.add(a),a);e(dw(),29.5,37.5,-.42,-.1),e(fw(),-20,33,.52,-.08),e(gw(),-16.4,30.2,.52,-.06),e(pw(),-15,8.5,.25,-.1),e(mw(),8.2,13.8,.3,-.05),e(Ff(1.15,2.2),34,33.5,.6,0),e(Ff(.95,1.8),32.2,35.4,1.4,0);const n=xw(3.4,.55);n.position.set($t(25.2,41),$t(25.2,41)+0,41),n.rotation.set(0,-.42,.16),n.position.y=$t(25.2,41),t.add(n);const i=Bf(2.2,1);i.position.set($t(34.2,40),$t(34.2,40),40),i.rotation.y=-.42,t.add(i);for(const[a,l,c]of[[27.6,43.2,.4],[28.4,43.8,1.2],[26.9,44.1,2.1]]){const h=Of();h.position.set($t(a,l),$t(a,l),l),h.rotation.y=c,t.add(h)}const r=Bf(1.5,.8);r.position.set($t(-16.6,35.6),$t(-16.6,35.6),35.6),r.rotation.y=.52,t.add(r);const o=Of();return o.position.set($t(-22.6,35.2),$t(-22.6,35.2),35.2),o.rotation.y=.8,t.add(o),s.add(t),t}const _w=`
precision highp float;
uniform mat4 uReflectMatrix;
uniform float uTime;
uniform float uWaveAmp;
varying vec3 vWorld;
varying vec2 vUv;
varying vec4 vReflectCoord;

void main() {
  vec3 p = position;
  vec4 wp = modelMatrix * vec4( p, 1.0 );
  // 轻微起伏
  float w = sin( wp.x * 0.9 + uTime * 1.1 ) * 0.02 + sin( wp.z * 1.3 - uTime * 0.9 ) * 0.015;
  wp.y += w * uWaveAmp;
  vWorld = wp.xyz;
  vUv = uv;
  vReflectCoord = uReflectMatrix * wp;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,yw=`
precision highp float;

uniform sampler2D uNormal;
uniform sampler2D uHeight;
uniform sampler2D uReflect;
uniform float uTime;
uniform float uWaterY;
uniform float uDepthScale;
uniform float uFlowSpeed;
uniform float uIsStream;
uniform vec3 uDeepColor;
uniform vec3 uShallowColor;
uniform vec3 uFoamColor;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uReflectStrength;
uniform float uDebug;

varying vec3 vWorld;
varying vec2 vUv;
varying vec4 vReflectCoord;

float hash21( vec2 p ) {
  p = fract( p * vec2( 123.34, 456.21 ) );
  p += dot( p, p + 45.32 );
  return fract( p.x * p.y );
}
float vnoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  float a = hash21( i ), b = hash21( i + vec2( 1.0, 0.0 ) );
  float c = hash21( i + vec2( 0.0, 1.0 ) ), d = hash21( i + vec2( 1.0, 1.0 ) );
  return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
}
float fbm2( vec2 p ) {
  float s = 0.0, a = 0.5;
  for ( int i = 0; i < 4; i ++ ) { s += a * vnoise( p ); p *= 2.03; a *= 0.5; }
  return s;
}

void main() {
  vec3 V = normalize( cameraPosition - vWorld );
  vec3 L = uSunDir;

  // 双层滚动法线
  vec2 uv1 = vUv * vec2( 1.6, 1.0 ) + vec2( 0.0, uTime * 0.055 * uFlowSpeed );
  vec2 uv2 = vUv * vec2( 2.9, 2.1 ) - vec2( 0.0, uTime * 0.032 * uFlowSpeed );
  vec3 n1 = texture2D( uNormal, uv1 ).rgb * 2.0 - 1.0;
  vec3 n2 = texture2D( uNormal, uv2 ).rgb * 2.0 - 1.0;
  vec3 nrm = normalize( n1 + n2 * 0.75 );

  float depth = 0.9;
  if ( uIsStream < 0.5 ) {
    vec2 huv = vec2( ( vWorld.x + 210.0 ) / 420.0, ( vWorld.z + 210.0 ) / 420.0 );
    vec4 hs = texture2D( uHeight, huv );
    float hv = ( hs.r * 255.0 * 256.0 + hs.g * 255.0 ) / 65535.0;
    float bed = hv * 40.0 - 8.0;
    depth = clamp( uWaterY - bed, 0.0, 3.0 );
  } else {
    depth = 0.34;
  }

  vec3 N = normalize( vec3( nrm.x * ( uIsStream > 0.5 ? 0.18 : 0.32 ), 1.0, nrm.z * ( uIsStream > 0.5 ? 0.18 : 0.32 ) ) );

  // ---- 反射 ----
  vec2 ruv = vReflectCoord.xy / max( vReflectCoord.w, 0.0001 );
  ruv += N.xz * 0.075;
  vec3 refl = texture2D( uReflect, clamp( ruv, vec2( 0.001 ), vec2( 0.999 ) ) ).rgb;

  float fres = pow( 1.0 - clamp( dot( N, V ), 0.0, 1.0 ), 3.4 );
  fres = clamp( fres * 1.05 + 0.04, 0.0, 0.78 );

  float dt = smoothstep( 0.0, 0.95, depth );
  vec3 waterCol = mix( uShallowColor, uDeepColor, dt );

  vec3 col = mix( waterCol, refl, fres * uReflectStrength );

  // ---- 水面自身的柔和明暗（模拟天空散射） ----
  col += uSkyColor * 0.05;

  // ---- 泡沫 ----
  float shore = ( 1.0 - smoothstep( 0.02, 0.22, depth ) ) * ( 1.0 - uIsStream );
  float fn = fbm2( vWorld.xz * 2.2 + vec2( uTime * 0.15, -uTime * 0.42 ) );
  float foam = smoothstep( 0.86, 1.14, shore * 1.0 + fn * 0.45 - 0.10 ) * 0.75;
  // 流动的白色条纹
  float streak = smoothstep( 0.66, 0.96, fbm2( vec2( vUv.x * 5.0, vUv.y * 1.6 - uTime * 1.1 ) ) );
  foam = max( foam, streak * uIsStream * 0.14 );
  col = mix( col, uFoamColor, clamp( foam, 0.0, 1.0 ) * 0.85 );

  // ---- 阳光高光 ----
  vec3 H = normalize( L + V );
  float spec = pow( max( dot( N, H ), 0.0 ), 260.0 );
  float spec2 = pow( max( dot( N, H ), 0.0 ), 26.0 ) * 0.16;
  float specMul = uIsStream > 0.5 ? 0.55 : 2.2;
  col += uSunColor * ( spec * specMul + spec2 * ( uIsStream > 0.5 ? 0.4 : 1.0 ) );

  // ---- 大气 ----
  vec3 vd = normalize( vWorld - cameraPosition );
  float dist = length( vWorld - cameraPosition );
  float f = 1.0 - exp( -pow( dist * uFogDensity, 1.45 ) );
  vec3 fogC = uFogColor + uSunColor * 0.25 * pow( max( dot( vd, L ), 0.0 ), 3.0 );
  col = mix( col, fogC, clamp( f, 0.0, 0.9 ) );

  float alpha = mix( 0.52, 0.96, smoothstep( 0.0, 0.55, depth ) ) * ( uIsStream > 0.5 ? 0.72 : 1.0 );
  // 水岸软过渡，避免硬边
  alpha *= smoothstep( 0.0, 0.14, vUv.x ) * smoothstep( 1.0, 0.86, vUv.x );
  alpha = max( alpha, foam * 0.9 );
  alpha = mix( alpha, 1.0, fres * 0.5 );

  if ( uDebug > 0.5 && uDebug < 1.5 ) { gl_FragColor = vec4( vec3( depth * 0.5 ), 1.0 ); return; }
  if ( uDebug > 1.5 && uDebug < 2.5 ) { gl_FragColor = vec4( refl, 1.0 ); return; }
  if ( uDebug > 2.5 && uDebug < 3.5 ) { gl_FragColor = vec4( vec3( foam ), 1.0 ); return; }
  if ( uDebug > 3.5 && uDebug < 4.5 ) { gl_FragColor = vec4( N * 0.5 + 0.5, 1.0 ); return; }
  if ( uDebug > 4.5 ) { gl_FragColor = vec4( vec3( fres ), 1.0 ); return; }

  gl_FragColor = vec4( col, alpha );
}
`;function Mw(s=340,t=10){const e=[],n=[],i=[];for(let o=0;o<=s;o++){const a=-Li+o/s*ks,l=Vs(a),c=Gs(a)*1.12;for(let h=0;h<=t;h++){const d=h/t,u=l+(d*2-1)*c;e.push(a,Un,u),n.push(d,a/7)}}for(let o=0;o<s;o++)for(let a=0;a<t;a++){const l=o*(t+1)+a,c=l+t+1;i.push(l,c,l+1,c,c+1,l+1)}const r=new Zt;return r.setAttribute("position",new At(e,3)),r.setAttribute("uv",new At(n,2)),r.setIndex(i),r.computeVertexNormals(),r}class Sw{constructor(t=1024,e=512){this.rt=new Xe(t,e,{type:je,colorSpace:ns,depthBuffer:!0,stencilBuffer:!1,samples:0}),this.camera=new an,this.matrix=new Yt,this.textureMatrix=new Yt,this._v=new E,this._t=new E,this._rot=new Yt,this._normal=new E(0,1,0),this._plane=new _i,this._clip=new Se,this._q=new Se}update(t,e,n,i){const r=new E().setFromMatrixPosition(n.matrixWorld),o=r.clone();o.y=2*Un-r.y,this.camera.position.copy(o),this.camera.up.set(0,1,0);const a=new E(0,0,-1).applyQuaternion(n.quaternion);a.y=-a.y,this.camera.lookAt(o.clone().add(a)),this.camera.projectionMatrix.copy(n.projectionMatrix),this.camera.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.camera.updateMatrixWorld();const l=this._plane.setFromNormalAndCoplanarPoint(this._normal,new E(0,Un,0));l.applyMatrix4(this.camera.matrixWorldInverse);const c=this._clip.set(l.normal.x,l.normal.y,l.normal.z,l.constant),h=this.camera.projectionMatrix,d=this._q;d.x=(Math.sign(c.x)+h.elements[8])/h.elements[0],d.y=(Math.sign(c.y)+h.elements[9])/h.elements[5],d.z=-1,d.w=(1+h.elements[10])/h.elements[14],c.multiplyScalar(2/c.dot(d)),h.elements[2]=c.x,h.elements[6]=c.y,h.elements[10]=c.z+1-.003,h.elements[14]=c.w,this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.camera.projectionMatrix),this.textureMatrix.multiply(this.camera.matrixWorldInverse);const u=i.map(p=>p.visible);i.forEach(p=>{p.visible=!1});const f=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,this.camera),t.setRenderTarget(f),i.forEach((p,x)=>{p.visible=u[x]})}}function bw(s){const t=db(512),e=new Sw(1024,512),n=r=>new ze({vertexShader:_w,fragmentShader:yw,transparent:!0,depthWrite:!1,side:Ue,uniforms:{uNormal:{value:t},uHeight:{value:s},uReflect:{value:e.rt.texture},uReflectMatrix:{value:e.textureMatrix},uTime:Qe.uTime,uWaterY:{value:Un},uDepthScale:{value:1},uFlowSpeed:{value:.75},uIsStream:{value:0},uDeepColor:{value:new nt(1526870)},uShallowColor:{value:new nt(4161909)},uFoamColor:{value:new nt(15923182)},uSunDir:Qe.uSunDir,uSunColor:Qe.uSunColor,uSkyColor:Qe.uSkyColor,uFogColor:Qe.uFogColor,uFogDensity:Qe.uFogDensity,uReflectStrength:{value:.58},uWaveAmp:{value:1},uDebug:{value:0}}}),i=new qt(Mw(),n());return i.receiveShadow=!1,i.renderOrder=10,i.name="river",{river:i,reflection:e,meshes:[i]}}class ww{constructor(t,e){this.camera=t,this.dom=e,this.yaw=0,this.pitch=0,this.vel=new E,this.keys=new Set,this.enabled=!1,this.speed=7.5,this.sensitivity=.0022,this._dir=new E,this._right=new E,this._euler=new Xn(0,0,0,"YXZ"),this.onLockChange=null,this.descend=null,addEventListener("keydown",n=>{this.keys.add(n.code),n.code==="Space"&&n.preventDefault()}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",n=>{document.pointerLockElement!==this.dom||!this.enabled||(this.yaw-=n.movementX*this.sensitivity,this.pitch-=n.movementY*this.sensitivity,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)))}),document.addEventListener("pointerlockchange",()=>{this.onLockChange&&this.onLockChange(document.pointerLockElement===this.dom)})}lock(){if(document.pointerLockElement!==this.dom){const t=this.dom.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}}unlock(){document.pointerLockElement===this.dom&&document.exitPointerLock()}setFromCamera(){this._euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this.yaw=this._euler.y,this.pitch=this._euler.x}descendTo(t){this.descend=t}update(t){if(!this.enabled)return;if(this.descend!==null){const h=Math.min(1,t*2.2);this.camera.position.y+=(this.descend-this.camera.position.y)*h,this.vel.y=0,Math.abs(this.camera.position.y-this.descend)<.06&&(this.descend=null)}const e=Math.cos(this.pitch);this._dir.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e).normalize(),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize();const n=new E(this._dir.x,0,this._dir.z).normalize(),i=new E,r=this.keys;(r.has("KeyW")||r.has("ArrowUp"))&&i.add(n),(r.has("KeyS")||r.has("ArrowDown"))&&i.sub(n),(r.has("KeyD")||r.has("ArrowRight"))&&i.add(this._right),(r.has("KeyA")||r.has("ArrowLeft"))&&i.sub(this._right),r.has("Space")&&(i.y+=1),(r.has("ControlLeft")||r.has("KeyQ"))&&(i.y-=1);const o=r.has("ShiftLeft")||r.has("ShiftRight")?3.2:1;i.lengthSq()>0&&i.normalize().multiplyScalar(this.speed*o),this.vel.lerp(i,1-Math.pow(.0015,t)),this.camera.position.addScaledVector(this.vel,t);const a=this.camera.position.x,l=this.camera.position.z,c=Math.max($t(a,l),Un)+.55;this.camera.position.y<c&&(this.camera.position.y+=(c-this.camera.position.y)*Math.min(1,t*12),this.vel.y=Math.max(0,this.vel.y)),this.camera.position.x=hn.clamp(this.camera.position.x,-190,190),this.camera.position.z=hn.clamp(this.camera.position.z,-190,190),this._euler.set(this.pitch,this.yaw,0,"YXZ"),this.camera.quaternion.setFromEuler(this._euler)}}const mr=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,zf=s=>1-Math.pow(1-s,3),$n=[{name:"THE HILL",jp:"丘の上",from:[96,46,132],to:[62,20,102],lookFrom:[-6,10,4],lookTo:[0,12,0],fov:32,dur:8.5,ease:mr,drift:.35},{name:"THE MILL",jp:"風車",from:[25,5.6,23],to:[17.5,7.6,18.5],lookFrom:[0,9,0],lookTo:[0,13,0],fov:40,dur:7,ease:zf,drift:.25},{name:"THE WHEEL",jp:"水車",from:[12.2,9,11],to:[9.4,8.2,8.2],lookFrom:[4.2,9,2.4],lookTo:[4.2,9.4,2.4],fov:36,dur:5.5,ease:mr,drift:.12},{name:"THE RIVER",jp:"川",from:[44,2.4,64],to:[14,1.9,59],lookFrom:[18,2.4,52],lookTo:[2,6,44],fov:44,dur:8,ease:mr,drift:.3},{name:"THE CART",jp:"古い荷車",from:[25.5,2.3,64],to:[22.6,1.9,61.6],lookFrom:[20.6,1,58.6],lookTo:[20.4,1,58.4],fov:38,dur:5.5,ease:zf,drift:.15},{name:"THE GATE",jp:"門",from:[21,5,37],to:[15.5,5.4,31.5],lookFrom:[12.6,6,27.2],lookTo:[12.4,7.4,26.6],fov:42,dur:6,ease:mr,drift:.2},{name:"THE GARDEN",jp:"庭",from:[28,7.6,25],to:[21.5,7,19],lookFrom:[14,5.2,11],lookTo:[12,5.8,9.5],fov:42,dur:6.5,ease:mr,drift:.22},{name:"ASCEND",jp:"遥か",from:[6,7.5,40],to:[26,21,84],lookFrom:[0,12,4],lookTo:[0,9,0],fov:40,dur:10,ease:mr,drift:.4}];class Tw{constructor(t){this.camera=t,this.playing=!1,this.shot=0,this.t=0,this.onShotChange=null,this.onEnd=null,this.loop=!1,this.range=[0,$n.length-1],this._p=new E,this._l=new E,this._lookAt=new E}play(t=0,e=$n.length-1){this.range=[t,e],this.shot=t,this.t=0,this.playing=!0,this.onShotChange&&this.onShotChange(this.shot)}stop(){this.playing=!1}jump(t,e=0){this.shot=hn.clamp(t,0,$n.length-1),this.t=e,this.playing=!0,this.apply()}apply(){const t=$n[this.shot],e=t.ease(this.t/t.dur),n=Math.sin(this.t*.9)*t.drift*.01;this._p.set(hn.lerp(t.from[0],t.to[0],e)+n*6,hn.lerp(t.from[1],t.to[1],e)+Math.sin(this.t*1.3)*t.drift*.02,hn.lerp(t.from[2],t.to[2],e)),this._l.set(hn.lerp(t.lookFrom[0],t.lookTo[0],e),hn.lerp(t.lookFrom[1],t.lookTo[1],e),hn.lerp(t.lookFrom[2],t.lookTo[2],e)),this.camera.position.copy(this._p),this.camera.lookAt(this._l),this.camera.fov=t.fov,this.camera.updateProjectionMatrix()}update(t){if(!this.playing)return;this.t+=t;const e=$n[this.shot];if(this.t>=e.dur)if(this.shot<this.range[1])this.shot++,this.t=0,this.onShotChange&&this.onShotChange(this.shot);else if(this.loop)this.shot=this.range[0],this.t=0,this.onShotChange&&this.onShotChange(this.shot);else{this.playing=!1,this.onEnd&&this.onEnd();return}this.apply()}}const Aw=(s,t,e)=>{let n=(t-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*e};class Ew{constructor(t,e,n){this.camera=t,this.dom=e,this.avatar=n,this.yaw=0,this.pitch=.18,this.dist=4.3,this.targetDist=4.3,this.enabled=!1,this.walkSpeed=3.6,this.runMul=2.15,this.sensitivity=.0022,this.vel=new E,this.obstacles=[],this.keys=new Set,this.heading=0,this.smoothCam=new E,this._camInit=!1,this._fwd=new E,this._right=new E,this._move=new E,this._target=new E,this._desired=new E,addEventListener("keydown",i=>{this.keys.add(i.code),i.code==="Space"&&i.preventDefault()}),addEventListener("keyup",i=>this.keys.delete(i.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",i=>{document.pointerLockElement!==this.dom||!this.enabled||(this.yaw-=i.movementX*this.sensitivity,this.pitch+=i.movementY*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.05,this.pitch)))}),addEventListener("wheel",i=>{this.enabled&&(this.targetDist=hn.clamp(this.targetDist+i.deltaY*.0035,1.8,11))},{passive:!0})}placeAt(t,e){const n=Math.max($t(t,e),Un-.12);this.avatar.root.position.set(t,n,e),this.heading=this.yaw+Math.PI,this.avatar.root.rotation.y=this.heading,this._camInit=!1}syncFromCamera(t){const e=new E(0,0,-1).applyQuaternion(t.quaternion);this.yaw=Math.atan2(-e.x,-e.z),this.pitch=.18}update(t){if(!this.enabled)return;const e=this.keys;this._fwd.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize(),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize(),this._move.set(0,0,0),(e.has("KeyW")||e.has("ArrowUp"))&&this._move.add(this._fwd),(e.has("KeyS")||e.has("ArrowDown"))&&this._move.sub(this._fwd),(e.has("KeyD")||e.has("ArrowRight"))&&this._move.add(this._right),(e.has("KeyA")||e.has("ArrowLeft"))&&this._move.sub(this._right);const n=this._move.lengthSq()>1e-4,i=e.has("ShiftLeft")||e.has("ShiftRight"),r=this.walkSpeed*(i?this.runMul:1);n&&(this._move.normalize().multiplyScalar(r),this.heading=Aw(this.heading,Math.atan2(this._move.x,this._move.z),Math.min(1,t*11))),this.vel.lerp(this._move,1-Math.pow(9e-4,t));const o=this.avatar.root;o.position.addScaledVector(this.vel,t),o.position.x=hn.clamp(o.position.x,-190,190),o.position.z=hn.clamp(o.position.z,-190,190);const a=(m,g,v)=>{const M=o.position.x-m,y=o.position.z-g,w=Math.hypot(M,y);w<v&&w>1e-4&&(o.position.x=m+M/w*v,o.position.z=g+y/w*v)};a(0,0,4.05),a(-8.3,1.5,5.6),a(13.2,3.4,2.5),a(29.5,37.5,5.2),a(-20,33,4),a(-15,8.5,2.6),a(8.2,13.8,1.3);for(let m=0;m<this.obstacles.length;m++){const g=this.obstacles[m],v=o.position.x-g.x,M=o.position.z-g.z;if(Math.abs(v)>g.r||Math.abs(M)>g.r)continue;const y=Math.hypot(v,M);y<g.r&&y>1e-4&&(o.position.x=g.x+v/y*g.r,o.position.z=g.z+M/y*g.r)}const l=Math.max($t(o.position.x,o.position.z),Un-.12);o.position.y+=(l-o.position.y)*Math.min(1,t*14),o.rotation.y=this.heading;const c=Math.hypot(this.vel.x,this.vel.z);this.avatar.update(t,c,c>.25),this.dist+=(this.targetDist-this.dist)*Math.min(1,t*8),this._target.copy(o.position),this._target.y+=1.18;const h=Math.cos(this.pitch),d=Math.sin(this.yaw)*h,u=Math.cos(this.yaw)*h,f=Math.sin(this.pitch);let p=this.dist;for(let m=1;m<=7;m++){const g=m/7,v=this._target.x+d*this.dist*g,M=this._target.z+u*this.dist*g,y=this._target.y+f*this.dist*g,w=Math.max($t(v,M),Un)+.45;let b=y<w;if(!b&&y<10)for(let _=0;_<this.obstacles.length;_++){const S=this.obstacles[_],I=S.r+1.15;if(Math.abs(v-S.x)<I&&Math.abs(M-S.z)<I){b=!0;break}}if(b){p=Math.max(1.3,this.dist*(g-.14));break}}if(this._desired.set(this._target.x+d*p,this._target.y+f*p,this._target.z+u*p),!this._camInit)this.smoothCam.copy(this._desired),this._camInit=!0;else{const m=1-Math.pow(15e-7,t);this.smoothCam.lerp(this._desired,m)}const x=Math.max($t(this.smoothCam.x,this.smoothCam.z),Un)+.35;this.smoothCam.y<x&&(this.smoothCam.y=x),this.camera.position.copy(this.smoothCam),this.camera.lookAt(this._target),this.camera.fov=48,this.camera.updateProjectionMatrix()}}function kf(s,t,e,n=.78,i=12){const r=new He(s,t,e,i,1);return r.scale(1,1,n),r.translate(0,e/2,0),r}function Cw(){const s=new Gt;s.name="avatar";const t={skin:Kt({color:15911330,rim:.42,rimColor:16770760,spec:.06,specPower:12,fresnel:.06,noise:.05,saturation:1.02}),shirt:Kt({color:14931898,rim:.4,rimColor:16774364,spec:.03,specPower:8,fresnel:.05,noise:.08,noiseScale:1.6}),vest:Kt({color:8149564,rim:.34,rimColor:16768176,spec:.05,specPower:10,fresnel:.05,noise:.12,noiseScale:1.4}),pants:Kt({color:5069940,rim:.3,rimColor:13623551,spec:.04,specPower:10,fresnel:.05,noise:.1,noiseScale:1.4}),boots:Kt({color:5980464,rim:.26,rimColor:16767144,spec:.08,specPower:14,fresnel:.06,noise:.1,noiseScale:2}),hat:Kt({color:14203e3,rim:.42,rimColor:16773320,spec:.05,specPower:8,fresnel:.05,noise:.14,noiseScale:2.4}),hair:Kt({color:3811870,rim:.3,rimColor:12560780,spec:.1,specPower:18,fresnel:.05,noise:.1,noiseScale:2}),scarf:Kt({color:11552302,rim:.4,rimColor:16763048,spec:.05,specPower:10,fresnel:.05,noise:.1,noiseScale:2}),bag:Kt({color:9071172,rim:.3,rimColor:16768176,spec:.06,specPower:12,fresnel:.05,noise:.12,noiseScale:1.8})},e=(Z,at,Rt,X=0,ot=0,Tt=0)=>{const Pt=new qt(at,Rt);return Pt.position.set(X,ot,Tt),Pt.castShadow=!0,Pt.receiveShadow=!0,Z.add(Pt),Pt},n=.7,i=.425,r=.6,o=Z=>{const at=new Gt;at.position.set(Z*.085,n,0);const Rt=Ce(.072,.055,.6,10,1);Rt.translate(0,-.6,0),e(at,Rt,t.pants,0,0,0);const X=rt(.125,.1,.235,1);e(at,X,t.boots,0,-.645,.045);const ot=new xe(.062,8,6);return ot.scale(1,.8,1.1),e(at,ot,t.boots,0,-.66,.145),s.add(at),at},a=o(1),l=o(-1),c=new Gt;c.position.y=n,s.add(c),e(c,kf(.175,.155,.46,.8),t.shirt,0,0,0);const h=kf(.181,.166,.24,.83);e(c,h,t.vest,0,.02,0);const d=new Ke(.072,.024,6,14);d.rotateX(Math.PI/2),e(c,d,t.shirt,0,.475,.012);const u=new Ke(.163,.022,6,16);u.rotateX(Math.PI/2),u.scale(1,1,.82),e(c,u,t.boots,0,.03,0);const f=Z=>{const at=new Gt;at.position.set(Z*.163,i,0);const Rt=new xe(.056,10,8);e(at,Rt,t.shirt,0,.005,0);const X=Ce(.055,.045,.44,8,1);X.translate(0,-.44,0),e(at,X,t.shirt,0,0,0);const ot=new xe(.058,9,7);return e(at,ot,t.skin,0,-.468,.005),at.rotation.z=Z*.1,c.add(at),at},p=f(1),x=f(-1),m=new Ke(.088,.036,6,14);m.rotateX(Math.PI/2),e(c,m,t.scarf,0,.505,0);const g=rt(.06,.2,.03,1);e(c,g,t.scarf,.07,.41,-.085);const v=Ce(.058,.07,.24,10,1);e(c,v,t.skin,0,.4,0);const M=new Gt;M.position.y=r,c.add(M);const y=new xe(.145,16,12);y.scale(1,1.02,.96),e(M,y,t.skin,0,.115,0);const w=new xe(.152,16,12);w.scale(1.02,.92,1),e(M,w,t.hair,0,.145,-.012);const b=new xe(.15,14,10,0,Math.PI*2,0,Math.PI*.45);e(M,b,t.hair,0,.135,.012);const _=new xe(.017,6,5);e(M,_,t.hair,.055,.115,.132),e(M,_,t.hair,-.055,.115,.132);const S=new xe(.019,7,6);S.scale(.9,.85,1.1),e(M,S,t.skin,0,.098,.142);const I=new Ke(.028,.0065,5,10,Math.PI*.85);I.rotateZ(Math.PI*1.075),e(M,I,t.hair,0,.062,.138);const R=new xe(.026,6,5);R.scale(1,.55,.4);const C=Kt({color:15243910,rim:.2,spec:0,fresnel:.02,noise:.04});e(M,R,C,.088,.072,.118),e(M,R,C,-.088,.072,.118);const D=new Gt,z=new He(.3,.315,.018,20,1);e(D,z,t.hat,0,0,0);const L=new He(.125,.152,.135,16,1);e(D,L,t.hat,0,.075,0);const k=new He(.154,.156,.035,16,1,!0);e(D,k,t.scarf,0,.022,0),D.position.set(0,.235,.005),D.rotation.x=-.06,M.add(D);const q=new xe(.17,14,10);q.scale(.86,.84,.5),e(c,q,t.bag,0,.25,-.155);const B=new xe(.168,14,8,0,Math.PI*2,0,Math.PI*.52);B.scale(.88,.66,.52),e(c,B,t.vest,0,.275,-.15);const st=new He(.048,.048,.3,12,1);st.rotateZ(Math.PI/2),e(c,st,t.hat,0,.385,-.16);for(const Z of[-.09,.09]){const at=new Ke(.05,.008,4,12);at.rotateY(Math.PI/2),e(c,at,t.vest,Z,.385,-.16)}for(const Z of[-1,1]){const at=rt(.035,.3,.02,1),Rt=e(c,at,t.vest,Z*.1,.34,.1);Rt.rotation.x=.1}const G={phase:0,blend:0,lean:0,time:0};function J(Z,at,Rt){G.time+=Z;const X=Rt?1:0;G.blend+=(X-G.blend)*Math.min(1,Z*8);const ot=1.55;G.phase+=at*ot*Z;const Tt=G.phase,Pt=G.blend,xt=Math.sin(Tt)*.62*Pt,Bt=Math.sin(Tt)*.48*Pt;a.rotation.x=xt,l.rotation.x=-xt,p.rotation.x=-Bt,x.rotation.x=Bt,p.rotation.z=.1+Math.sin(G.time*.9)*.015,x.rotation.z=-.1-Math.sin(G.time*.9)*.015;const Te=Math.abs(Math.sin(Tt))*.035*Pt;c.position.y=n+Te,G.lean+=((Rt?.1:0)-G.lean)*Math.min(1,Z*6),c.rotation.x=G.lean,c.rotation.z=Math.sin(Tt)*.035*Pt,M.rotation.z=-Math.sin(Tt)*.05*Pt,M.rotation.x=Math.sin(G.time*.7)*.02-G.lean*.5,Rt||(c.position.y=n+Math.sin(G.time*1.6)*.006)}return{root:s,update:J,state:G}}class Rw{constructor(){this.loader=document.getElementById("loader"),this.bar=document.getElementById("bar"),this.pct=document.getElementById("pct"),this.tip=document.getElementById("tip"),this.titlecard=document.getElementById("titlecard"),this.hud=document.getElementById("hud"),this.modeText=document.getElementById("modeText"),this.modeEl=document.getElementById("mode"),this.shotEl=document.getElementById("shot"),this.shotIdx=document.getElementById("shotIdx"),this.shotName=document.getElementById("shotName"),this.fadeEl=document.getElementById("fade"),this.hintClick=document.getElementById("hintClick"),this._shotTimer=null,this.hidden=!1}progress(t,e){this.bar&&(this.bar.style.width=`${Math.round(t*100)}%`),this.pct&&(this.pct.textContent=Math.round(t*100)),e&&this.tip&&(this.tip.textContent=e)}hideLoader(){this.loader?.classList.add("hide"),setTimeout(()=>this.loader?.remove(),1500)}showTitle(t=4200){this.titlecard?.classList.add("show"),setTimeout(()=>this.titlecard?.classList.remove("show"),t)}setMode(t){if(!this.hud)return;this.hud.classList.toggle("cine",t==="cine"),this.hud.classList.toggle("roaming",t==="roam");const e=t==="cine"?"CINEMATIC":t==="third"?"CHARACTER":"FREE ROAM";this.modeText&&(this.modeText.textContent=e),this.modeEl?.classList.toggle("cine",t==="cine"),this.hud.classList.toggle("third",t==="third")}setShot(t,e,n){this.shotEl&&(this.shotIdx.textContent=`SHOT ${String(t+1).padStart(2,"0")}`,this.shotName.textContent=`${e}`,this.shotEl.classList.add("show"),clearTimeout(this._shotTimer),this._shotTimer=setTimeout(()=>this.shotEl.classList.remove("show"),3200))}fade(t,e=320){this.fadeEl&&(this.fadeEl.style.transition=`opacity ${e}ms ease`,this.fadeEl.style.opacity=String(t))}toggleHud(){this.hidden=!this.hidden,this.hud?.classList.toggle("off",this.hidden)}showHint(t,e){this.hintClick&&(e&&(this.hintClick.innerHTML=e),this.hintClick.classList.toggle("show",t))}}class Pw{constructor(){this.ctx=null,this.enabled=!1,this.nodes={},this._birdTimer=0,this._nextBird=2.5}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const n=e.createGain();n.gain.value=0,n.connect(e.destination),this.nodes.master=n;const i=e.sampleRate*3,r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);let a=0;for(let v=0;v<i;v++){const M=Math.random()*2-1;a=(a+.02*M)/1.02,o[v]=a*3.2}const l=e.createBufferSource();l.buffer=r,l.loop=!0;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=520,c.Q.value=.7;const h=e.createGain();h.gain.value=.3,l.connect(c).connect(h).connect(n),l.start();const d=e.createOscillator();d.frequency.value=.06;const u=e.createGain();u.gain.value=.16,d.connect(u).connect(h.gain),d.start();const f=e.createOscillator();f.frequency.value=.11;const p=e.createGain();p.gain.value=220,f.connect(p).connect(c.frequency),f.start();const x=e.createBufferSource();x.buffer=r,x.loop=!0;const m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=1500,m.Q.value=.8;const g=e.createGain();g.gain.value=0,x.connect(m).connect(g).connect(n),x.start(),this.nodes.water=g,this.nodes.birdBus=e.createGain(),this.nodes.birdBus.gain.value=.12,this.nodes.birdBus.connect(n),n.gain.linearRampToValueAtTime(.55,e.currentTime+3),this.enabled=!0}setWaterLevel(t){!this.ctx||!this.nodes.water||this.nodes.water.gain.setTargetAtTime(Math.min(.5,t),this.ctx.currentTime,.4)}chirp(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=2+Math.floor(Math.random()*4),i=1900+Math.random()*1700;for(let r=0;r<n;r++){const o=e+r*(.055+Math.random()*.05),a=t.createOscillator(),l=t.createGain();a.type="sine",a.frequency.setValueAtTime(i*(.85+Math.random()*.4),o),a.frequency.exponentialRampToValueAtTime(i*(1.25+Math.random()*.5),o+.035),a.frequency.exponentialRampToValueAtTime(i*.9,o+.08),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(.5,o+.012),l.gain.exponentialRampToValueAtTime(.001,o+.1),a.connect(l).connect(this.nodes.birdBus),a.start(o),a.stop(o+.13)}}update(t,e,n){this.ctx&&(this.setWaterLevel(1-Math.min(1,n/26)),this._birdTimer+=t,this._birdTimer>this._nextBird&&(this._birdTimer=0,this._nextBird=2.2+Math.random()*6.5,this.chirp()))}toggle(){if(!this.ctx)return this.start(),!0;this.enabled=!this.enabled;const t=this.ctx.currentTime;return this.nodes.master.gain.cancelScheduledValues(t),this.nodes.master.gain.setTargetAtTime(this.enabled?.55:0,t,.25),this.enabled}}const yc=document.getElementById("scene"),ge=new Rw,ho=new Pw,wi=new k0({canvas:yc,antialias:!0,powerPreference:"high-performance",stencil:!1});wi.setPixelRatio(Math.min(window.devicePixelRatio,1.35));wi.setSize(window.innerWidth,window.innerHeight);wi.outputColorSpace=yn;wi.toneMapping=hi;wi.shadowMap.enabled=!0;wi.shadowMap.type=Mr;const Le=new jh,we=new an(34,window.innerWidth/window.innerHeight,.15,8e3);we.position.set(26,6,74);we.lookAt(0,11,0);const Hn=new ww(we,yc),Wn=new Tw(we);let Je="intro",Ln=null,Ah,Eh,Cs,br,Ro,jr,Ch,Rh,Ph,J0,K0,ci=null,Jn=null,Po=null,Io=null,Lo=null;const vi=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0)));async function Iw(){ge.progress(.04,"正在铺开草甸…"),await vi();const s=new yu(16777215,2),t=new E(6,4,26),e=55;s.position.copy(t).addScaledVector(Qe.uSunDir.value,170),s.target.position.copy(t),s.castShadow=!0,s.shadow.mapSize.set(4096,4096);const n=s.shadow.camera;n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.near=30,n.far=380,n.updateProjectionMatrix(),s.shadow.bias=-22e-5,s.shadow.normalBias=.035,s.shadow.radius=4.5,Le.add(s,s.target),Ro=nb(),Le.add(Ro.mesh),ge.progress(.12,"正在堆积云层…"),await vi();const i=xb(2048);jr=_b(i.texture),Le.add(jr.mesh),Le.add(yb()),ge.progress(.34,"正在筑起风车…"),await vi(),Mb(),Ah=Pb(),Le.add(Ah.root),Eh=Lb(),Le.add(Eh.root),Cs=Ib(),Cs.root.position.set(13.2,$t(13.2,3.4),3.4),Cs.root.rotation.y=.42,Le.add(Cs.root),ge.progress(.46,"正在砌石墙…"),await vi();const r=Xb(i,i.size);Ph=ew(),Le.add(Ph),J0=uw(Le),K0=vw(Le),ge.progress(.58,"正在种下树林…"),await vi(),ge.progress(.66,"正在种树…"),await vi();const o=[{x:-19,z:-9,type:0,scale:1.35,rot:.6},{x:-14,z:-16,type:0,scale:1.12,rot:2.1},{x:-27,z:-2,type:1,scale:1.15,rot:1},{x:9,z:-13,type:1,scale:1.2,rot:3.4},{x:17,z:-7,type:0,scale:1.15,rot:.2},{x:25,z:1,type:1,scale:1,rot:2.6},{x:-25,z:8,type:0,scale:1.2,rot:4.1},{x:-15,z:18,type:2,scale:1.15,rot:1.7},{x:30,z:19,type:0,scale:1.3,rot:5},{x:38,z:31,type:0,scale:1.1,rot:2.2},{x:-30,z:27,type:1,scale:1.05,rot:.9},{x:-40,z:36,type:0,scale:1.25,rot:3},{x:-22,z:40,type:0,scale:1.15,rot:1.4},{x:37,z:28,type:0,scale:1.2,rot:4.6},{x:44,z:40,type:1,scale:1.1,rot:2.9},{x:56,z:46,type:0,scale:1.3,rot:.4},{x:-54,z:54,type:1,scale:1.2,rot:5.4},{x:58,z:74,type:0,scale:1.3,rot:3.9},{x:62,z:24,type:0,scale:1.2,rot:1.1},{x:-46,z:16,type:1,scale:1.1,rot:2.4}];{let c=12345;const h=()=>(c=(c*1664525+1013904223)%4294967296,c/4294967296),d=[[-72,-34,30,26],[46,-62,34,22],[96,34,26,20],[-104,62,34,24],[74,96,30,22],[-44,104,28,18],[128,-18,30,20],[-128,-76,34,22],[-16,-76,26,16],[24,120,30,18],[-96,118,30,18],[140,76,34,22]];for(const[u,f,p,x]of d)for(let m=0;m<x;m++){const g=h()*Math.PI*2,v=Math.pow(h(),.65)*p,M=u+Math.cos(g)*v,y=f+Math.sin(g)*v;Math.abs(M)>195||Math.abs(y)>195||o.push({x:M,z:y,type:h()>.4?0:1,scale:.8+h()*.7,rot:h()*6.28,stretch:.88+h()*.3})}for(let u=0;u<46;u++){const f=h()*Math.PI*2,p=58+h()*118;o.push({x:6+Math.cos(f)*p,z:26+Math.sin(f)*p,type:h()>.5?0:1,scale:.7+h()*.6,rot:h()*6.28,stretch:.9+h()*.3})}}Rh=Jb(r,o),Le.add(Rh);const a=nw({trees:o,props:[{x:13.3,z:9.6,r:1.1},{x:18.9,z:13.4,r:1.1},{x:11.1,z:10.6,r:.7},{x:14.6,z:12.9,r:.6},{x:21,z:59,r:1.8},{x:17.6,z:60.4,r:1},{x:2.9,z:5.3,r:.7},{x:3.7,z:4.7,r:.7},{x:7.42,z:21.2,r:1.7},{x:-13.2,z:6.5,r:1.3},{x:12.6,z:27.2,r:1},{x:10.5,z:27,r:.8},{x:14.7,z:27,r:.8},{x:13.2,z:3.4,r:3},{x:29.5,z:37.5,r:6},{x:-20,z:33,r:4.5},{x:-15,z:8.5,r:3},{x:8.2,z:13.8,r:1.6},{x:34,z:33.5,r:1.8},{x:32.2,z:35.4,r:1.5},{x:11.7,z:13.4,r:.6},{x:19.9,z:8.3,r:.6}]});jr.material.uniforms.uAO.value=a.texture,jr.material.uniforms.uAORegion.value.set(Wa.cx,Wa.cz,Wa.size,0),ge.progress(.74,"正在长草…"),await vi(),Ch=lh(r,{count:62e3,height:.38,blades:6,seed:7,ao:a.sample}),Le.add(Ch),Le.add(lh(r,{count:26e3,radius:150,height:.44,blades:5,seed:19,cx:8,cz:26,ao:a.sample})),Le.add(lh(r,{count:7e3,radius:18,cx:40,cz:62,height:.85,blades:6,seed:33,tall:!0,ao:a.sample})),Le.add(Qb(r,7500,21,a.sample)),Le.add(Yb(r,5e3,91,a.sample)),ge.progress(.86,"正在开花…"),await vi(),Le.add(tw([{x:12,z:13.4,scale:1.1,hue:.63},{x:13.4,z:14.6,scale:.9,hue:.68},{x:18.8,z:13.2,scale:1.05,hue:.6},{x:20.2,z:11.8,scale:.85,hue:.66},{x:17.2,z:8.2,scale:1,hue:.64},{x:15.6,z:7.4,scale:.8,hue:.7},{x:21.6,z:9.6,scale:.95,hue:.58},{x:11.4,z:8.6,scale:.85,hue:.62},{x:-2.2,z:6.2,scale:.9,hue:.65},{x:5.6,z:8.8,scale:.8,hue:.61}])),Le.add(hw(1200)),Le.add(Kb(5200,55,a.sample)),ge.progress(.92,"正在引水入河…"),await vi(),Po=Tb(1500),Le.add(Po),Io=Ab([{x:13,z:13},{x:18,z:12},{x:16,z:9},{x:11.5,z:9.5},{x:20,z:10.5},{x:9,z:12}],8),Le.add(Io),Lo=Eb(6),Le.add(Lo);const l=vb(512);br=bw(l),Le.add(br.river),ci=Cw(),ci.root.visible=!1,Le.add(ci.root),Jn=new Ew(we,yc,ci),Jn.obstacles=o.map(c=>({x:c.x,z:c.z,r:.55*(c.scale??1)})),Ln=Wb(wi,Le,we),ge.progress(1,"完成"),await vi(),ge.hideLoader(),setTimeout(()=>ge.showTitle(4600),400),Lw()}function Lw(){Je="intro",ge.setMode("cine"),ge.showHint(!0,"点击画面跳过 · <b>C</b> 播放完整电影镜头"),Wn.onShotChange=s=>ge.setShot(s,$n[s].name,$n[s].jp),Wn.onEnd=()=>Fr(),Wn.play(0,$n.length-1)}function Fr(){Wn.stop(),ci&&(ci.root.visible=!1),Jn&&(Jn.enabled=!1),Je="roam",ge.setMode("roam"),ge.showHint(!0,"点击画面进入漫游 · <b>V</b> 人物视角 · <b>C</b> 电影镜头"),Hn.setFromCamera(),we.fov=52,we.updateProjectionMatrix();const s=Math.max($t(we.position.x,we.position.z),Un)+1.65;we.position.y>s+1.2&&Hn.descendTo(s),Hn.enabled=!0}function Q0(){if(!Jn||!ci)return;Wn.stop(),Hn.enabled=!1;const s=we.position.clone();ci.root.visible=!0,Jn.syncFromCamera(we),Jn.placeAt(s.x,s.z),Jn.enabled=!0,Je="third",ge.setMode("third"),ge.showHint(!0,"点击画面锁定鼠标 · <b>V</b> 回到第一人称 · <b>C</b> 电影镜头"),document.getElementById("hintClick").classList.add("show")}function Dw(){Je==="third"?Fr():Je==="roam"&&Q0()}function Nw(){Hn.enabled=!1,Jn&&(Jn.enabled=!1),ci&&(ci.root.visible=!1),Hn.unlock(),Je="cine",ge.setMode("cine"),ge.showHint(!1),Wn.onShotChange=s=>ge.setShot(s,$n[s].name,$n[s].jp),Wn.onEnd=()=>Fr(),Wn.play(0,$n.length-1)}yc.addEventListener("pointerdown",()=>{if(ho.start(),Je==="intro"){Fr();return}Je==="roam"&&Hn.lock(),Je==="third"&&Hn.lock()});Hn.onLockChange=s=>{ge.showHint(!s&&Je==="roam")};addEventListener("keydown",s=>{const t=s.key.toLowerCase();t==="c"&&(ho.start(),Je==="cine"||Je==="intro"?Fr():Nw()),t==="v"&&(ho.start(),Dw()),t==="h"&&ge.toggleHud(),t==="m"&&ho.start()});const Vf=new T0,Oa=new E,Gf=new E;let Hf=0;function j0(){requestAnimationFrame(j0);const s=Math.min(Vf.getDelta(),.05),t=Vf.elapsedTime;if(JS(t),Je==="cine"||Je==="intro"?Wn.update(s):Je==="roam"?Hn.update(s):Je==="third"&&Jn.update(s),Cs&&(Cs.sails.rotation.z-=s*.22),Ro&&Ro.mesh.position.copy(we.position),Po&&Po.material.uniforms.uCam.value.copy(we.position),Io&&Io.userData.update(s),Lo&&Lo.userData.update(s),Ln&&br){Oa.copy(we.position).addScaledVector(Qe.uSunDir.value,900),Oa.project(we),we.getWorldDirection(Gf);const e=Gf.dot(Qe.uSunDir.value);Ln.rays.sun.set(hn.clamp(Oa.x*.5+.5,.05,.95),hn.clamp(Oa.y*.5+.5,.05,.95)),Ln.rays.material.uniforms.uIntensity.value=hn.clamp(e*1.6,0,1)*.85,Ln.grade.uniforms.uRayStrength.value=hn.clamp(e*1.6,0,1)*.42;const n=Je==="cine"||Je==="intro";if(Ln.bokeh.enabled=n,n){const r=we.position.distanceTo(Wn._l);Ln.bokeh.uniforms.focus.value=r,Ln.bokeh.uniforms.aperture.value=.0026,Ln.bokeh.uniforms.maxblur.value=.0052}Ln.grade.uniforms.uTime.value=t,Ln.grade.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),br.reflection.update(wi,Le,we,br.meshes),Ln.composer.render();const i=Math.abs(we.position.z-Vs(we.position.x))-Gs(we.position.x);ho.update(s,we.position,Math.max(0,i))}Hf++,Hf===3&&(window.__ready=!0)}addEventListener("resize",()=>{we.aspect=window.innerWidth/window.innerHeight,we.updateProjectionMatrix(),wi.setSize(window.innerWidth,window.innerHeight),Ln?.composer.setSize(window.innerWidth,window.innerHeight)});window.__demo={THREE:ZS,scene:Le,camera:we,renderer:wi,cine:Wn,ui:ge,roam:Hn,SHOTS:$n,get terrain(){return jr},get sky(){return Ro},get water(){return br},get post(){return Ln},get mill(){return Ah},get house(){return Eh},get smallMill(){return Cs},get grass(){return Ch},get trees(){return Rh},get wall(){return Ph},get scenery(){return J0},get village(){return K0},get avatar(){return ci},get third(){return Jn},get pollen(){return Po},get butterflies(){return Io},get birds(){return Lo},enterThird:Q0,enterRoam:Fr,setView(s,t,e=34){Je="debug",ge.titlecard?.classList.remove("show"),ge.titlecard&&(ge.titlecard.style.display="none"),ge.hideLoader(),Hn.enabled=!1,Wn.stop(),we.position.set(s[0],s[1],s[2]),we.lookAt(t[0],t[1],t[2]),we.fov=e,we.updateProjectionMatrix(),ge.setMode("roam"),ge.showHint(!1)},shot(s,t=0){Je="debug",ge.titlecard?.classList.remove("show"),ge.titlecard&&(ge.titlecard.style.display="none"),ge.hideLoader(),Hn.enabled=!1,Wn.jump(s,t)}};Iw().then(()=>j0());
