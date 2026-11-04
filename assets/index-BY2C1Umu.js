(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="187",cg={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hg={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},G0=0,kh=1,H0=2,ug=3,W0=0,So=1,X0=2,Er=3,Ji=0,Rn=1,Fe=2,qi=0,ms=1,Lo=2,Vh=3,Gh=4,q0=5,dg=6,zs=100,Y0=101,Z0=102,$0=103,J0=104,K0=200,Q0=201,j0=202,tp=203,cu=204,hu=205,ep=206,np=207,ip=208,sp=209,rp=210,op=211,ap=212,lp=213,cp=214,vl=0,_l=1,yl=2,Br=3,Ml=4,Sl=5,bl=6,wl=7,jo=0,hp=1,up=2,yi=0,uu=1,du=2,fu=3,pu=4,mu=5,gu=6,xu=7,Hh="attached",dp="detached",hc=300,Ki=301,qs=302,bo=303,wo=304,No=1e3,Un=1001,Ys=1002,He=1003,vu=1004,fg=1004,Cr=1005,pg=1005,Te=1006,To=1007,mg=1007,Qn=1008,gg=1008,Xn=1009,_u=1010,yu=1011,zr=1012,uc=1013,ai=1014,Fn=1015,on=1016,dc=1017,fc=1018,Zs=1020,Mu=35902,Su=35899,bu=1021,wu=1022,rn=1023,Qi=1026,Xi=1027,pc=1028,ta=1029,gs=1030,mc=1031,xg=1032,gc=1033,Ao=33776,Eo=33777,Co=33778,Ro=33779,Tl=35840,Al=35841,El=35842,Cl=35843,Rl=36196,Pl=37492,Il=37496,Dl=37488,Ll=37489,Uo=37490,Nl=37491,Ul=37808,Fl=37809,Ol=37810,Bl=37811,zl=37812,kl=37813,Vl=37814,Gl=37815,Hl=37816,Wl=37817,Xl=37818,ql=37819,Yl=37820,Zl=37821,$l=36492,Jl=36494,Kl=36495,Ql=36283,jl=36284,Fo=36285,tc=36286,fp=2200,pp=2201,mp=2202,Oo=2300,ec=2301,hl=2302,Wh=2303,ks=2400,Vs=2401,Bo=2402,xc=2500,Tu=2501,vg=0,_g=1,yg=2,gp=3200,xp=3201,Mg=3202,Sg=3203,ji=0,vp=1,qn="",En="srgb",ts="srgb-linear",zo="linear",Re="srgb",bg="",wg="rg",Tg="ga",Ag=0,ul=7680,Eg=7681,Cg=7682,Rg=7683,Pg=34055,Ig=34056,Dg=5386,Lg=512,Ng=513,Ug=514,Fg=515,Og=516,Bg=517,zg=518,_p=519,yp=512,Mp=513,Sp=514,Au=515,bp=516,wp=517,Eu=518,Cu=519,vc=35044,Xh=35048,kg=35040,Vg=35045,Gg=35049,Hg=35041,Wg=35046,Xg=35050,qg=35042,Yg="100",qh="300 es",jn=2e3,$s=2001,Zg={COMPUTE:"compute",RENDER:"render"},$g={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},Jg={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},Kg={TEXTURE_COMPARE:"depthTextureCompare"},Qg={NONE:0,SHARED:1,FULL:2};function jg(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const tx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Rr(s,t){return new tx[s](t)}function Tp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ap(){const s=ko("canvas");return s.style.display="block",s}const Rd={};let xs=null;function ex(s){xs=s}function nx(){return xs}function Vo(...s){const t="THREE."+s.shift();xs?xs("log",t,...s):console.log(t,...s)}function Ep(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Tt(...s){s=Ep(s);const t="THREE."+s.shift();if(xs)xs("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Ht(...s){s=Ep(s);const t="THREE."+s.shift();if(xs)xs("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Yi(...s){const t=s.join(" ");t in Rd||(Rd[t]=!0,Tt(...s))}function ix(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sx={[vl]:vl,[yl]:bl,[Ml]:Ml,[Br]:Sl,[_l]:_l,[bl]:yl,[wl]:wl,[Sl]:Br};class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pd=1234567;const Ws=Math.PI/180,kr=180/Math.PI;function li(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function Qt(s,t,e){return Math.max(t,Math.min(e,s))}function Ru(s,t){return(s%t+t)%t}function rx(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ox(s,t,e){return s!==t?(e-s)/(t-s):0}function Po(s,t,e){return(1-e)*s+e*t}function ax(s,t,e,n){return Po(s,t,1-Math.exp(-e*n))}function lx(s,t=1){return t-Math.abs(Ru(s,t*2)-t)}function cx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hx(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ux(s,t){return s+Math.floor(Math.random()*(t-s+1))}function dx(s,t){return s+Math.random()*(t-s)}function fx(s){return s*(.5-Math.random())}function px(s){s!==void 0&&(Pd=s);let t=Pd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mx(s){return s*Ws}function gx(s){return s*kr}function xx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function vx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _x(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _c(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Gs(s,t){if(t.constructor===Float32Array)return s;const e=_c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function An(s,t){if(t.constructor===Float32Array)return s;const e=_c(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const dn={DEG2RAD:Ws,RAD2DEG:kr,generateUUID:li,clamp:Qt,euclideanModulo:Ru,mapLinear:rx,inverseLerp:ox,lerp:Po,damp:ax,pingpong:lx,smoothstep:cx,smootherstep:hx,randInt:ux,randFloat:dx,randFloatSpread:fx,seededRandom:px,degToRad:mx,radToDeg:gx,isPowerOfTwo:xx,ceilPowerOfTwo:vx,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:_x,normalize:An,denormalize:Gs},fd=class fd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fd.prototype.isVector2=!0;let J=fd;class Je{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const v=Math.acos(m),M=Math.sin(v);g=Math.sin(g*v)/M,a=Math.sin(a*v)/M,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+x*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pd=class pd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Id.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Id.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pd.prototype.isVector3=!0;let R=pd;const Qc=new R,Id=new Je,md=class md{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],M=i[4],_=i[7],w=i[2],b=i[5],y=i[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*M+l*b,r[6]=o*g+a*_+l*y,r[1]=c*x+h*v+d*w,r[4]=c*m+h*M+d*b,r[7]=c*g+h*_+d*y,r[2]=u*x+f*v+p*w,r[5]=u*m+f*M+p*b,r[8]=u*g+f*_+p*y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Yi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Yi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Yi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};md.prototype.isMatrix3=!0;let ee=md;const jc=new ee,Dd=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ld=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yx(){const s={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(i.r=Lr(i.r),i.g=Lr(i.g),i.b=Lr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qn?zo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ts]:{primaries:t,whitePoint:n,transfer:zo,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:Re,toXYZ:Dd,fromXYZ:Ld,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),s}const me=yx();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Lr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let sr;class Rp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{sr===void 0&&(sr=ko("canvas")),sr.width=t.width,sr.height=t.height;const i=sr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=sr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ko("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zi(e[n]/255)*255):e[n]=Zi(e[n]);return{data:e,width:t.width,height:t.height}}else return Tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Mx=0;class Ri{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(th(i[o].image)):r.push(th(i[o]))}else r=th(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function th(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Tt("Texture: Unable to serialize Texture."),{})}class Sx extends Ri{constructor(t=null){Yi('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let bx=0;const eh=new R;class We extends Si{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Un,i=Un,r=Te,o=Qn,a=rn,l=Xn,c=We.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=li(),this.name="",this.source=new Ri(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Tt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case No:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case Ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case No:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case Ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=hc;We.DEFAULT_ANISOTROPY=1;const gd=class gd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,_=(f+1)/2,w=(g+1)/2,b=(h+u)/4,y=(d+x)/4,S=(p+m)/4;return M>_&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=b/n,r=y/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=b/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=y/r,i=S/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gd.prototype.isVector4=!0;let Se=gd;class Pu extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new We({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ri(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xe extends Pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yc extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new yc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class Mc extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Tx extends Xe{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Mc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}const lc=class lc{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/rr.setFromMatrixColumn(t,0).length(),r=1/rr.setFromMatrixColumn(t,1).length(),o=1/rr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,p=a*h,x=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ax,t,Ex)}lookAt(t,e,n){const i=this.elements;return $n.subVectors(t,e),$n.lengthSq()===0&&($n.z=1),$n.normalize(),as.crossVectors(n,$n),as.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),as.crossVectors(n,$n)),as.normalize(),fa.crossVectors($n,as),i[0]=as.x,i[4]=fa.x,i[8]=$n.x,i[1]=as.y,i[5]=fa.y,i[9]=$n.y,i[2]=as.z,i[6]=fa.z,i[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],M=n[7],_=n[11],w=n[15],b=i[0],y=i[4],S=i[8],E=i[12],C=i[1],P=i[5],L=i[9],F=i[13],D=i[2],k=i[6],X=i[10],z=i[14],et=i[3],V=i[7],Q=i[11],Z=i[15];return r[0]=o*b+a*C+l*D+c*et,r[4]=o*y+a*P+l*k+c*V,r[8]=o*S+a*L+l*X+c*Q,r[12]=o*E+a*F+l*z+c*Z,r[1]=h*b+d*C+u*D+f*et,r[5]=h*y+d*P+u*k+f*V,r[9]=h*S+d*L+u*X+f*Q,r[13]=h*E+d*F+u*z+f*Z,r[2]=p*b+x*C+m*D+g*et,r[6]=p*y+x*P+m*k+g*V,r[10]=p*S+x*L+m*X+g*Q,r[14]=p*E+x*F+m*z+g*Z,r[3]=v*b+M*C+_*D+w*et,r[7]=v*y+M*P+_*k+w*V,r[11]=v*S+M*L+_*X+w*Q,r[15]=v*E+M*F+_*z+w*Z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*u,M=a*f-c*d,_=a*u-l*d,w=o*f-c*h,b=o*u-l*h,y=o*d-a*h;return e*(x*v-m*M+g*_)-n*(p*v-m*w+g*b)+i*(p*M-x*w+g*y)-r*(p*_-x*b+m*y)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*a-n*o,M=e*l-i*o,_=e*c-r*o,w=n*l-i*a,b=n*c-r*a,y=i*c-r*l,S=h*x-d*p,E=h*m-u*p,C=h*g-f*p,P=d*m-u*x,L=d*g-f*x,F=u*g-f*m,D=v*F-M*L+_*P+w*C-b*E+y*S;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/D;return t[0]=(a*F-l*L+c*P)*k,t[1]=(i*L-n*F-r*P)*k,t[2]=(x*y-m*b+g*w)*k,t[3]=(u*b-d*y-f*w)*k,t[4]=(l*C-o*F-c*E)*k,t[5]=(e*F-i*C+r*E)*k,t[6]=(m*_-p*y-g*M)*k,t[7]=(h*y-u*_+f*M)*k,t[8]=(o*L-a*C+c*S)*k,t[9]=(n*C-e*L-r*S)*k,t[10]=(p*b-x*_+g*v)*k,t[11]=(d*_-h*b-f*v)*k,t[12]=(a*E-o*P-l*S)*k,t[13]=(e*P-n*E+i*S)*k,t[14]=(x*M-p*w-m*v)*k,t[15]=(h*w-d*M+u*v)*k,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,x=o*h,m=o*d,g=a*d,v=l*c,M=l*h,_=l*d,w=n.x,b=n.y,y=n.z;return i[0]=(1-(x+g))*w,i[1]=(f+_)*w,i[2]=(p-M)*w,i[3]=0,i[4]=(f-_)*b,i[5]=(1-(u+g))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(p+M)*y,i[9]=(m-v)*y,i[10]=(1-(u+x))*y,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=rr.set(i[0],i[1],i[2]).length();const a=rr.set(i[4],i[5],i[6]).length(),l=rr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ui.copy(this);const c=1/o,h=1/a,d=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=jn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===jn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===$s)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=jn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===jn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===$s)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};lc.prototype.isMatrix4=!0;let Wt=lc;const rr=new R,ui=new Wt,Ax=new R(0,0,0),Ex=new R(1,1,1),as=new R,fa=new R,$n=new R,Nd=new Wt,Ud=new Je;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cx=0;const Fd=new R,or=new Je,Bi=new Wt,pa=new R,no=new R,Rx=new R,Px=new Je,Od=new R(1,0,0),Bd=new R(0,1,0),zd=new R(0,0,1),kd={type:"added"},Ix={type:"removed"},ar={type:"childadded",child:null},nh={type:"childremoved",child:null};class ae extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new R,e=new zn,n=new Je,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ee}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.multiply(or),this}rotateOnWorldAxis(t,e){return or.setFromAxisAngle(t,e),this.quaternion.premultiply(or),this}rotateX(t){return this.rotateOnAxis(Od,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(zd,t)}translateOnAxis(t,e){return Fd.copy(t).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Od,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(zd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pa.copy(t):pa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(no,pa,this.up):Bi.lookAt(pa,no,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),or.setFromRotationMatrix(Bi),this.quaternion.premultiply(or.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ht("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kd),ar.child=t,this.dispatchEvent(ar),ar.child=null):Ht("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ix),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kd),ar.child=t,this.dispatchEvent(ar),ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,t,Rx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,Px,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ae.DEFAULT_UP=new R(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ot extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dx={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ls={h:0,s:0,l:0},ma={h:0,s:0,l:0};function ih(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class K{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Ru(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&Tt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Tt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Tt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Tt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return me.workingToColorSpace(wn.copy(this),t),Math.round(Qt(wn.r*255,0,255))*65536+Math.round(Qt(wn.g*255,0,255))*256+Math.round(Qt(wn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(wn.copy(this),e);const n=wn.r,i=wn.g,r=wn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=En){me.workingToColorSpace(wn.copy(this),t);const e=wn.r,n=wn.g,i=wn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ls),this.setHSL(ls.h+t,ls.s+e,ls.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ls),t.getHSL(ma);const n=Po(ls.h,ma.h,e),i=Po(ls.s,ma.s,e),r=Po(ls.l,ma.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new K;K.NAMES=Pp;class bc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new K(t),this.near=e,this.far=n}clone(){return new wc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Iu extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const di=new R,zi=new R,sh=new R,ki=new R,lr=new R,cr=new R,Vd=new R,rh=new R,oh=new R,ah=new R,lh=new Se,ch=new Se,hh=new Se;class Yn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),di.subVectors(t,e),i.cross(di);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){di.subVectors(i,e),zi.subVectors(n,e),sh.subVectors(t,e);const o=di.dot(di),a=di.dot(zi),l=di.dot(sh),c=zi.dot(zi),h=zi.dot(sh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(o,ki.y),l.addScaledVector(a,ki.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,n),hh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,n,i){return di.subVectors(n,e),zi.subVectors(t,e),di.cross(zi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Yn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;lr.subVectors(i,n),cr.subVectors(r,n),rh.subVectors(t,n);const l=lr.dot(rh),c=cr.dot(rh);if(l<=0&&c<=0)return e.copy(n);oh.subVectors(t,i);const h=lr.dot(oh),d=cr.dot(oh);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(lr,o);ah.subVectors(t,r);const f=lr.dot(ah),p=cr.dot(ah);if(p>=0&&f<=p)return e.copy(r);const x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(cr,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Vd.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Vd,a);const g=1/(m+x+u);return o=x*g,a=u*g,e.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Pn{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fi):fi.fromBufferAttribute(r,o),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(t.matrixWorld),this.union(ga)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(io),xa.subVectors(this.max,io),hr.subVectors(t.a,io),ur.subVectors(t.b,io),dr.subVectors(t.c,io),cs.subVectors(ur,hr),hs.subVectors(dr,ur),Es.subVectors(hr,dr);let e=[0,-cs.z,cs.y,0,-hs.z,hs.y,0,-Es.z,Es.y,cs.z,0,-cs.x,hs.z,0,-hs.x,Es.z,0,-Es.x,-cs.y,cs.x,0,-hs.y,hs.x,0,-Es.y,Es.x,0];return!uh(e,hr,ur,dr,xa)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,hr,ur,dr,xa))?!1:(va.crossVectors(cs,hs),e=[va.x,va.y,va.z],uh(e,hr,ur,dr,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new R,new R,new R,new R,new R,new R,new R,new R],fi=new R,ga=new Pn,hr=new R,ur=new R,dr=new R,cs=new R,hs=new R,Es=new R,io=new R,xa=new R,va=new R,Cs=new R;function uh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Cs.fromArray(s,r);const a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wi=Lx();function Lx(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Gn(s){Math.abs(s)>65504&&Tt("DataUtils.toHalfFloat(): Value out of range."),s=Qt(s,-65504,65504),Wi.floatView[0]=s;const t=Wi.uint32View[0],e=t>>23&511;return Wi.baseTable[e]+((t&8388607)>>Wi.shiftTable[e])}function vo(s){const t=s>>10;return Wi.uint32View[0]=Wi.mantissaTable[Wi.offsetTable[t]+(s&1023)]+Wi.exponentTable[t],Wi.floatView[0]}class Nx{static toHalfFloat(t){return Gn(t)}static fromHalfFloat(t){return vo(t)}}const en=new R,_a=new J;let Ux=0;class oe extends Si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ux++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?_c(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_a.fromBufferAttribute(this,e),_a.applyMatrix3(t),this.setXY(e,_a.x,_a.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix3(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyMatrix4(t),this.setXYZ(e,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.applyNormalMatrix(t),this.setXYZ(e,en.x,en.y,en.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)en.fromBufferAttribute(this,e),en.transformDirection(t),this.setXYZ(e,en.x,en.y,en.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gs(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):An(t,this.array)}}class Fx extends oe{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Ox extends oe{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class Bx extends oe{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class zx extends oe{constructor(t,e,n){super(new Int16Array(t),e,n)}}class Du extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kx extends oe{constructor(t,e,n){super(new Int32Array(t),e,n)}}class Lu extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Vx extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=vo(this.array[t*this.itemSize]);return this.normalized&&(e=Gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=Gn(e),this}getY(t){let e=vo(this.array[t*this.itemSize+1]);return this.normalized&&(e=Gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=Gn(e),this}getZ(t){let e=vo(this.array[t*this.itemSize+2]);return this.normalized&&(e=Gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=Gn(e),this}getW(t){let e=vo(this.array[t*this.itemSize+3]);return this.normalized&&(e=Gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=Gn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=Gn(e),this.array[t+1]=Gn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array)),this.array[t+0]=Gn(e),this.array[t+1]=Gn(n),this.array[t+2]=Gn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[t+0]=Gn(e),this.array[t+1]=Gn(n),this.array[t+2]=Gn(i),this.array[t+3]=Gn(r),this}}class At extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Gx=new Pn,so=new R,dh=new R;class vn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;so.subVectors(t,this.center);const e=so.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(so.copy(t.center).add(dh)),this.expandByPoint(so.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Hx=0;const ii=new Wt,fh=new ae,fr=new R,Jn=new Pn,ro=new Pn,un=new R;class Jt extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jg(t)?Lu:Du)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new At(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Jn.min,ro.min),Jn.expandByPoint(un),un.addVectors(Jn.max,ro.max),Jn.expandByPoint(un)):(Jn.expandByPoint(ro.min),Jn.expandByPoint(ro.max))}Jn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)un.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(un));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)un.fromBufferAttribute(a,c),l&&(fr.fromBufferAttribute(t,c),un.add(fr)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let E=0;E<n.count;E++)a[E]=new R,l[E]=new R;const h=new R,d=new R,u=new R,f=new J,p=new J,x=new J,m=new R,g=new R;function v(E,C,P){c[E]=c[C]=c[P]=1,h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,P),d.sub(h),u.sub(h),p.sub(f),x.sub(f);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(L),a[E].add(m),a[C].add(m),a[P].add(m),l[E].add(g),l[C].add(g),l[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let E=0,C=M.length;E<C;++E){const P=M[E],L=P.start,F=P.count;for(let D=L,k=L+F;D<k;D+=3)v(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const _=new R,w=new R,b=new R,y=new R;function S(E){b.fromBufferAttribute(i,E),y.copy(b);const C=a[E];_.copy(C),_.sub(b.multiplyScalar(b.dot(C))).normalize(),w.crossVectors(y,C);const L=w.dot(l[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,L)}for(let E=0,C=n.count;E<C;++E)c[E]&&S(E);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new oe(u,h,d)}if(this.index===null)return Tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Jt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tc{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vc,this.updateRanges=[],this.version=0,this.uuid=li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=Gd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function Gd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=li()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const Dn=new R;class Js{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?_c(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyMatrix4(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.applyNormalMatrix(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dn.fromBufferAttribute(this,e),Dn.transformDirection(t),this.setXYZ(e,Dn.x,Dn.y,Dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Js(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Gs(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):An(t,this.data.array)}}const ph=new R,Wx=new R,Xx=new ee;class Ci{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ph.subVectors(n,e).cross(Wx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xx.getNormalMatrix(t),i=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qx=0;class yn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=li(),this.name="",this.type="Material",this.blending=ms,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=hu,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ul,this.stencilZFail=ul,this.stencilZPass=ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Tt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Tt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Nu extends yn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let pr;const oo=new R,mr=new R,gr=new R,xr=new J,ao=new J,Ip=new Wt,ya=new R,lo=new R,Ma=new R,Hd=new J,mh=new J,Wd=new J;class Dp extends ae{constructor(t=new Nu){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Jt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tc(e,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new Js(n,3,0,!1)),pr.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=pr,this.material=t,this.center=new J(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Ip.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Sa(ya.set(-.5,-.5,0),gr,o,mr,i,r),Sa(lo.set(.5,-.5,0),gr,o,mr,i,r),Sa(Ma.set(.5,.5,0),gr,o,mr,i,r),Hd.set(0,0),mh.set(1,0),Wd.set(1,1);let a=t.ray.intersectTriangle(ya,lo,Ma,!1,oo);if(a===null&&(Sa(lo.set(-.5,.5,0),gr,o,mr,i,r),mh.set(0,1),a=t.ray.intersectTriangle(ya,Ma,lo,!1,oo),a===null))return;const l=t.ray.origin.distanceTo(oo);l<t.near||l>t.far||e.push({distance:l,point:oo.clone(),uv:Yn.getInterpolation(oo,ya,lo,Ma,Hd,mh,Wd,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){const e=super.toJSON(t);return e.object.center=this.center.toArray(),e}}function Sa(s,t,e,n,i,r){xr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(ao.x=r*xr.x-i*xr.y,ao.y=i*xr.x+r*xr.y):ao.copy(xr),s.copy(t),s.x+=ao.x,s.y+=ao.y,s.applyMatrix4(Ip)}const ba=new R,Xd=new R;class Lp extends ae{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){ba.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(ba);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){ba.setFromMatrixPosition(t.matrixWorld),Xd.setFromMatrixPosition(this.matrixWorld);const n=ba.distanceTo(Xd)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const Gi=new R,gh=new R,wa=new R,Ta=new R;class qr{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gh.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(gh);const r=t.distanceTo(e)*.5,o=-this.direction.dot(wa),a=Ta.dot(this.direction),l=-Ta.dot(wa),c=Ta.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gh).addScaledVector(wa,u),f}intersectSphere(t,e){if(t.radius<0)return null;Gi.subVectors(t.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,v=n.y-o.y,M=n.z-o.z,_=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let y,S,E,C,P,L,F,D,k,X,z,et;if(_>=w&&_>=b?(E=l,L=d,k=p,et=g,l>=0?(y=c,S=h,C=u,P=f,F=x,D=m,X=v,z=M):(y=h,S=c,C=f,P=u,F=m,D=x,X=M,z=v)):w>=b?(E=c,L=u,k=x,et=v,c>=0?(y=h,S=l,C=f,P=d,F=m,D=p,X=M,z=g):(y=l,S=h,C=d,P=f,F=p,D=m,X=g,z=M)):(E=h,L=f,k=m,et=M,h>=0?(y=l,S=c,C=d,P=u,F=p,D=x,X=g,z=v):(y=c,S=l,C=u,P=d,F=x,D=p,X=v,z=g)),E===0)return null;const V=y/E,Q=S/E,Z=1/E,lt=C-V*L,Dt=P-Q*L,q=F-V*k,at=D-Q*k,Ct=X-V*et,Nt=z-Q*et,_t=Ct*at-Nt*q,Vt=lt*Nt-Dt*Ct,Ce=q*Dt-at*lt;if(i){if(_t<0||Vt<0||Ce<0)return null}else if((_t<0||Vt<0||Ce<0)&&(_t>0||Vt>0||Ce>0))return null;const Yt=_t+Vt+Ce;if(Yt===0)return null;const te=Z*(_t*L+Vt*k+Ce*et);return(Yt>0?te<0:te>0)?null:this.at(te/Yt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ii extends yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const qd=new Wt,Rs=new qr,Aa=new vn,Yd=new R,Ea=new R,Ca=new R,Ra=new R,xh=new R,Pa=new R,Zd=new R,Ia=new R;class Lt extends ae{constructor(t=new Jt,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(xh.fromBufferAttribute(d,t),o?Pa.addScaledVector(xh,h):Pa.addScaledVector(xh.sub(e),h))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Rs.copy(t.ray).recast(t.near),!(Aa.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Aa,Yd)===null||Rs.origin.distanceToSquared(Yd)>(t.far-t.near)**2))&&(qd.copy(r).invert(),Rs.copy(t.ray).applyMatrix4(qd),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,w=M;_<w;_+=3){const b=a.getX(_),y=a.getX(_+1),S=a.getX(_+2);i=Da(this,g,t,n,c,h,d,b,y,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=a.getX(m),M=a.getX(m+1),_=a.getX(m+2);i=Da(this,o,t,n,c,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){const m=u[p],g=o[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,w=M;_<w;_+=3){const b=_,y=_+1,S=_+2;i=Da(this,g,t,n,c,h,d,b,y,S),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){const v=m,M=m+1,_=m+2;i=Da(this,o,t,n,c,h,d,v,M,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Yx(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ji,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ia);return c<e.near||c>e.far?null:{distance:c,point:Ia.clone(),object:s}}function Da(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ea),s.getVertexPosition(l,Ca),s.getVertexPosition(c,Ra);const h=Yx(s,t,e,n,Ea,Ca,Ra,Zd);if(h){const d=new R;Yn.getBarycoord(Zd,Ea,Ca,Ra,d),i&&(h.uv=Yn.getInterpolatedAttribute(i,a,l,c,d,new J)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,l,c,d,new J)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new R,materialIndex:0};Yn.getNormal(Ea,Ca,Ra,u.normal),h.face=u,h.barycoord=d}return h}const co=new Se,$d=new Se,Jd=new Se,Zx=new Se,Kd=new Wt,La=new R,vh=new vn,Qd=new Wt,_h=new qr;class Np extends Lt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hh,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingBox.expandByPoint(La)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,La),this.boundingSphere.expandByPoint(La)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vh.copy(this.boundingSphere),vh.applyMatrix4(i),t.ray.intersectsSphere(vh)!==!1&&(Qd.copy(i).invert(),_h.copy(t.ray).applyMatrix4(Qd),!(this.boundingBox!==null&&_h.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,_h)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;$d.fromBufferAttribute(i.attributes.skinIndex,t),Jd.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(co.copy(e),e.set(0,0,0,0)):(co.set(e.x,e.y,e.z,1),e.set(0,0,0)),co.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Jd.getComponent(r);if(o!==0){const a=$d.getComponent(r);Kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Zx.copy(co).applyMatrix4(Kd),o)}}return e.isVector4&&(e.w=co.w),e.applyMatrix4(this.bindMatrixInverse)}}class Uu extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _n extends We{constructor(t=null,e=1,n=1,i,r,o,a,l,c=He,h=He,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jd=new Wt,$x=new Wt;class Ac{constructor(t=[],e=[]){this.uuid=li(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:$x;jd.multiplyMatrices(a,e[r]),jd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ac(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _n(e,t,t,rn,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Tt("Skeleton: No bone found with UUID:",r),o=new Uu),this.bones.push(o),this.boneInverses.push(new Wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Vr extends oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const vr=new Wt,tf=new Wt,Na=[],ef=new Pn,Jx=new Wt,ho=new Lt,uo=new vn;class Cn extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),ef.copy(t.boundingBox).applyMatrix4(vr),this.boundingBox.union(ef)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vr),uo.copy(t.boundingSphere).applyMatrix4(vr),this.boundingSphere.union(uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),t.ray.intersectsSphere(uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vr),tf.multiplyMatrices(n,vr),ho.matrixWorld=tf,ho.raycast(t,Na);for(let o=0,a=Na.length;o<a;o++){const l=Na[o];l.instanceId=r,l.object=this,e.push(l)}Na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _n(new Float32Array(i*this.count),i,this.count,pc,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ps=new vn,Kx=new J(.5,.5),Ua=new R;class Ks{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],M=r[13],_=r[14],w=r[15];if(i[0].setComponents(c-o,f-h,g-p,w-v).normalize(),i[1].setComponents(c+o,f+h,g+p,w+v).normalize(),i[2].setComponents(c+a,f+d,g+x,w+M).normalize(),i[3].setComponents(c-a,f-d,g-x,w-M).normalize(),n)i[4].setComponents(l,u,m,_).normalize(),i[5].setComponents(c-l,f-u,g-m,w-_).normalize();else if(i[4].setComponents(c-l,f-u,g-m,w-_).normalize(),e===jn)i[5].setComponents(c+l,f+u,g+m,w+_).normalize();else if(e===$s)i[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const e=Kx.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ua.x=i.normal.x>0?t.max.x:t.min.x,Ua.y=i.normal.y>0?t.max.y:t.min.y,Ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const nf=new Wt;class ea{constructor(){this.coordinateSystem=jn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];nf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ks),n[i].setFromProjectionMatrix(nf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ks),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new ea().copy(this)}}function yh(s,t){return s-t}function Qx(s,t){return s.z-t.z}function jx(s,t){return t.z-s.z}class tv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const Vn=new Wt,ev=new K(1,1,1),nv=new Ks,iv=new ea,Fa=new Pn,Is=new vn,Mh=new R,sf=new R,rf=new R,sv=new R,Sh=new tv,Tn=new Lt,Oa=[];function rv(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function wi(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Up extends Lt{constructor(t,e,n=e*2,i){super(new Jt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._mergedDrawCounts=new Int32Array(t),this._mergedDrawStarts=new Int32Array(t),this._mergedDrawInstanceCounts=new Int32Array(t),this._mergedDrawCount=0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._previousMatricesTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new _n(e,t,t,rn,Fn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new _n(e,t,t,ta,ai);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new _n(e,t,t,rn,Fn);n.colorSpace=me.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new oe(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new oe(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error(`THREE.BatchedMesh: Added geometry attribute "${n}" has an inconsistent itemSize or normalized value.`)}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingBoxAt(r,Fa).applyMatrix4(Vn),t.union(Fa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,Vn),this.getBoundingSphereAt(r,Is).applyMatrix4(Vn),t.union(Is)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(yh),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;Vn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(ev.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(yh),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);rv(d,u,l);const f=d.itemSize;for(let p=d.count,x=c;p<x;p++){const m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,x=t-d;for(let m=h;m<h+u;m++)p[m]=p[m]+x;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:x,itemSize:m}=p;x.copyWithin(t*m,h*m,(h+d)*m),p.addUpdateRange(t*m,d*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new Pn,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint(Mh.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new vn;this.getBoundingBoxAt(t,Fa),Fa.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;o&&(d=o.getX(d)),Mh.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared(Mh))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(yh);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);wi(this._multiDrawCounts,i),wi(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r;const o=new Int32Array(t),a=new Int32Array(t),l=new Int32Array(t);wi(this._mergedDrawCounts,o),wi(this._mergedDrawStarts,a),wi(this._mergedDrawInstanceCounts,l),this._mergedDrawCounts=o,this._mergedDrawStarts=a,this._mergedDrawInstanceCounts=l,this._maxInstanceCount=t;const c=this._indirectTexture,h=this._matricesTexture,d=this._colorsTexture;c.dispose(),this._initIndirectTexture(),wi(c.image.data,this._indirectTexture.image.data),h.dispose(),this._initMatricesTexture(),wi(h.image.data,this._matricesTexture.image.data),d&&(d.dispose(),this._initColorsTexture(),wi(d.image.data,this._colorsTexture.image.data)),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new Jt,this._initializeGeometry(r));const o=this.geometry;r.index&&wi(r.index.array,o.index.array);for(const a in r.attributes)wi(r.attributes[a].array,o.attributes[a].array);this._visibilityChanged=!0}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Tn.material=this.material,Tn.geometry.index=o.index,Tn.geometry.attributes=o.attributes,Tn.geometry.boundingBox===null&&(Tn.geometry.boundingBox=new Pn),Tn.geometry.boundingSphere===null&&(Tn.geometry.boundingSphere=new vn);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];Tn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,Tn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,Tn.geometry.boundingBox),this.getBoundingSphereAt(c,Tn.geometry.boundingSphere),Tn.raycast(t,Oa);for(let d=0,u=Oa.length;d<u;d++){const f=Oa[d];f.object=this,f.batchId=a,e.push(f)}Oa.length=0}Tn.material=null,Tn.geometry.index=null,Tn.geometry.attributes={},Tn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._mergedDrawCounts=t._mergedDrawCounts.slice(),this._mergedDrawStarts=t._mergedDrawStarts.slice(),this._mergedDrawInstanceCounts=t._mergedDrawInstanceCounts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),t._colorsTexture!==null?(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()):this._colorsTexture=null,this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this._previousMatricesTexture!==null&&(this._previousMatricesTexture.dispose(),this._previousMatricesTexture=null)}_updateDrawParameters(t,e,n,i="multiDraw"){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const r=e.getIndex();let o=r===null?1:r.array.BYTES_PER_ELEMENT,a=1;n.wireframe&&(a=2,o=e.attributes.position.count>65535?4:2);const l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,d=this._mergedDrawStarts,u=this._mergedDrawCounts,f=this._mergedDrawInstanceCounts,p=this._geometryInfo,x=this.perObjectFrustumCulled,m=this._indirectTexture,g=m.image.data,v=t.isArrayCamera?iv:nv;x&&(t.isArrayCamera?v.setFromArrayCamera(t):(Vn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse).multiply(this.matrixWorld),v.setFromProjectionMatrix(Vn,t.coordinateSystem,t.reversedDepth)));let M=0,_=0;if(this.sortObjects){Vn.copy(this.matrixWorld).invert(),sf.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Vn),rf.set(0,0,-1).transformDirection(t.matrixWorld).transformDirection(Vn);for(let y=0,S=l.length;y<S;y++)if(l[y].visible&&l[y].active){const E=l[y].geometryIndex;this.getMatrixAt(y,Vn),this.getBoundingSphereAt(E,Is).applyMatrix4(Vn);let C=!1;if(x&&(C=!v.intersectsSphere(Is)),!C){const P=p[E],L=sv.subVectors(Is.center,sf).dot(rf);Sh.push(P.start,P.count,L,y)}}const w=Sh.list,b=this.customSort;b===null?w.sort(n.transparent?jx:Qx):b.call(this,w,t);for(let y=0,S=w.length;y<S;y++){const E=w[y],C=E.start*o*a,P=E.count*a;i==="merged"?_>0&&d[_-1]===C&&u[_-1]===P?f[_-1]++:(d[_]=C,u[_]=P,f[_]=1,_++):(c[M]=C,h[M]=P),g[M]=E.index,M++}Sh.reset()}else for(let w=0,b=l.length;w<b;w++)if(l[w].visible&&l[w].active){const y=l[w].geometryIndex;let S=!1;if(x&&(this.getMatrixAt(w,Vn),this.getBoundingSphereAt(y,Is).applyMatrix4(Vn),S=!v.intersectsSphere(Is)),!S){const E=p[y],C=E.start*o*a,P=E.count*a;i==="merged"?_>0&&d[_-1]===C&&u[_-1]===P?f[_-1]++:(d[_]=C,u[_]=P,f[_]=1,_++):(c[M]=C,h[M]=P),g[M]=w,M++}}m.needsUpdate=!0,this._multiDrawCount=M,this._mergedDrawCount=_,this._multiDrawBytesPerElement=o,this._visibilityChanged=!1}onBeforeRender(t,e,n,i,r){t.isWebGPURenderer===!0?(this._visibilityChanged||this.perObjectFrustumCulled||this.sortObjects)&&(this._indirectTexture.needsUpdate=!0):this._updateDrawParameters(n,i,r)}onBeforeShadow(t,e,n,i,r,o){t.isWebGPURenderer!==!0&&this._updateDrawParameters(i,r,o)}}class kn extends yn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nc=new R,ic=new R,of=new Wt,fo=new qr,Ba=new vn,bh=new R,af=new R;class vs extends ae{constructor(t=new Jt,e=new kn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)nc.fromBufferAttribute(e,i-1),ic.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=nc.distanceTo(ic);t.setAttribute("lineDistance",new At(n,1))}else Tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;of.copy(i).invert(),fo.copy(t.ray).applyMatrix4(of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=h.getX(x),v=h.getX(x+1),M=za(this,t,fo,l,g,v,x);M&&e.push(M)}if(this.isLineLoop){const x=h.getX(p-1),m=h.getX(f),g=za(this,t,fo,l,x,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){const g=za(this,t,fo,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){const x=za(this,t,fo,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function za(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(nc.fromBufferAttribute(a,i),ic.fromBufferAttribute(a,r),e.distanceSqToSegment(nc,ic,bh,af)>n)return;bh.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(bh);if(!(c<t.near||c>t.far))return{distance:c,point:af.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const lf=new R,cf=new R;class Di extends vs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+lf.distanceTo(cf);t.setAttribute("lineDistance",new At(n,1))}else Tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fp extends vs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Fu extends yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const hf=new Wt,Yh=new qr,ka=new vn,Va=new R;class na extends ae{constructor(t=new Jt,e=new Fu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(i),ka.radius+=r,t.ray.intersectsSphere(ka)===!1)return;hf.copy(i).invert(),Yh.copy(t.ray).applyMatrix4(hf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,x=f;p<x;p++){const m=c.getX(p);Va.fromBufferAttribute(d,m),uf(Va,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,x=f;p<x;p++)Va.fromBufferAttribute(d,p),uf(Va,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function uf(s,t,e,n,i,r,o){const a=Yh.distanceSqToPoint(s);if(a<e){const l=new R;Yh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Op extends We{constructor(t,e,n,i,r=Te,o=Te,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class ov extends Op{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class av extends We{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=He,this.minFilter=He,this.generateMipmaps=!1,this.needsUpdate=!0}copy(t){return super.copy(t),this.source=new Ri(Object.assign({},t.image)),this}}class Ec extends We{constructor(t=[],e,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class lv extends Ec{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Un,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cv extends Ec{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,Ki),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class ia extends We{constructor(t=[],e=Ki,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cc extends We{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hv extends We{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Qs extends We{constructor(t,e,n=ai,i,r,o,a=He,l=He,c,h=Qi,d=1){if(h!==Qi&&h!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ri(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ou extends Qs{constructor(t,e=ai,n=Ki,i,r,o=He,a=He,l,c=Qi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Bu extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Li extends Jt{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2));function p(x,m,g,v,M,_,w,b,y,S,E){const C=_/y,P=w/S,L=_/2,F=w/2,D=b/2,k=y+1,X=S+1;let z=0,et=0;const V=new R;for(let Q=0;Q<X;Q++){const Z=Q*P-F;for(let lt=0;lt<k;lt++){const Dt=lt*C-L;V[x]=Dt*v,V[m]=Z*M,V[g]=D,c.push(V.x,V.y,V.z),V[x]=0,V[m]=0,V[g]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(lt/y),d.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let Z=0;Z<y;Z++){const lt=u+Z+k*Q,Dt=u+Z+k*(Q+1),q=u+(Z+1)+k*(Q+1),at=u+(Z+1)+k*Q;l.push(lt,Dt,at),l.push(Dt,q,at),et+=6}a.addGroup(f,et,E),f+=et,u+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class sa extends Jt{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,x=i+1,m=new R,g=new R;for(let v=0;v<=p;v++){let M=0,_=0,w=0,b=0;if(v<=n){const E=v/n,C=E*Math.PI/2;_=-h-t*Math.cos(C),w=t*Math.sin(C),b=-t*Math.cos(C),M=E*d}else if(v<=n+r){const E=(v-n)/r;_=-h+E*e,w=t,b=0,M=d+E*u}else{const E=(v-n-r)/n,C=E*Math.PI/2;_=h+t*Math.sin(C),w=t*Math.cos(C),b=t*Math.sin(C),M=d+u+E*d}const y=Math.max(0,Math.min(1,M/f));let S=0;v===0?S=.5/i:v===p&&(S=-.5/i);for(let E=0;E<=i;E++){const C=E/i,P=C*Math.PI*2,L=Math.sin(P),F=Math.cos(P);g.x=-w*F,g.y=_,g.z=w*L,a.push(g.x,g.y,g.z),m.set(-w*F,b,w*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+S,y)}if(v>0){const E=(v-1)*x;for(let C=0;C<i;C++){const P=E+C,L=E+C+1,F=v*x+C,D=v*x+C+1;o.push(P,L,F),o.push(L,D,F)}}}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class _s extends Jt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _s(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oe extends Jt{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const x=[],m=n/2;let g=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function v(){const _=new R,w=new R;let b=0;const y=(e-t)/n;for(let S=0;S<=r;S++){const E=[],C=S/r,P=C*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,D=F*l+a,k=Math.sin(D),X=Math.cos(D);w.x=P*k,w.y=-C*n+m,w.z=P*X,d.push(w.x,w.y,w.z),_.set(k,y,X).normalize(),u.push(_.x,_.y,_.z),f.push(F,1-C),E.push(p++)}x.push(E)}for(let S=0;S<i;S++)for(let E=0;E<r;E++){const C=x[E][S],P=x[E+1][S],L=x[E+1][S+1],F=x[E][S+1];(t>0||E!==0)&&(h.push(C,P,F),b+=3),(e>0||E!==r-1)&&(h.push(P,L,F),b+=3)}c.addGroup(g,b,0),g+=b}function M(_){const w=p,b=new J,y=new R;let S=0;const E=_===!0?t:e,C=_===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;const P=p;for(let L=0;L<=i;L++){const D=L/i*l+a,k=Math.cos(D),X=Math.sin(D);y.x=E*X,y.y=m*C,y.z=E*k,d.push(y.x,y.y,y.z),u.push(0,C,0),b.x=k*.5+.5,b.y=X*.5*C+.5,f.push(b.x,b.y),p++}for(let L=0;L<i;L++){const F=w+L,D=P+L;_===!0?h.push(D,D+1,F):h.push(D+1,D,F),S+=3}c.addGroup(g,S,_===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mn extends Oe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new mn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ys extends Jt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new At(r,3)),this.setAttribute("normal",new At(r.slice(),3)),this.setAttribute("uv",new At(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new R,_=new R,w=new R;for(let b=0;b<e.length;b+=3)f(e[b+0],M),f(e[b+1],_),f(e[b+2],w),l(M,_,w,v)}function l(v,M,_,w){const b=w+1,y=[];for(let S=0;S<=b;S++){y[S]=[];const E=v.clone().lerp(_,S/b),C=M.clone().lerp(_,S/b),P=b-S;for(let L=0;L<=P;L++)L===0&&S===b?y[S][L]=E:y[S][L]=E.clone().lerp(C,L/P)}for(let S=0;S<b;S++)for(let E=0;E<2*(b-S)-1;E++){const C=Math.floor(E/2);E%2===0?(u(y[S][C+1]),u(y[S+1][C]),u(y[S][C])):(u(y[S][C+1]),u(y[S+1][C+1]),u(y[S+1][C]))}}function c(v){const M=new R;for(let _=0;_<r.length;_+=3)M.x=r[_+0],M.y=r[_+1],M.z=r[_+2],M.normalize().multiplyScalar(v),r[_+0]=M.x,r[_+1]=M.y,r[_+2]=M.z}function h(){const v=new R;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const _=m(v)/2/Math.PI+.5,w=g(v)/Math.PI+.5;o.push(_,1-w)}p(),d()}function d(){for(let v=0;v<o.length;v+=6){const M=o[v+0],_=o[v+2],w=o[v+4],b=Math.max(M,_,w),y=Math.min(M,_,w);b>.9&&y<.1&&(M<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,M){const _=v*3;M.x=t[_+0],M.y=t[_+1],M.z=t[_+2]}function p(){const v=new R,M=new R,_=new R,w=new R,b=new J,y=new J,S=new J;for(let E=0,C=0;E<r.length;E+=9,C+=6){v.set(r[E+0],r[E+1],r[E+2]),M.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),b.set(o[C+0],o[C+1]),y.set(o[C+2],o[C+3]),S.set(o[C+4],o[C+5]),w.copy(v).add(M).add(_).divideScalar(3);const P=m(w);x(b,C+0,v,P),x(y,C+2,M,P),x(S,C+4,_,P)}}function x(v,M,_,w){w<0&&v.x===1&&(o[M]=v.x-1),_.x===0&&_.z===0&&(o[M]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.vertices,t.indices,t.radius,t.detail)}}class Rc extends ys{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rc(t.radius,t.detail)}}const Ga=new R,Ha=new R,wh=new R,Wa=new Yn;class Bp extends Jt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ws*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:x,b:m,c:g}=Wa;if(x.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Wa.getNormal(wh),d[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const M=(v+1)%3,_=d[v],w=d[M],b=Wa[h[v]],y=Wa[h[M]],S=`${_}_${w}`,E=`${w}_${_}`,C=u.get(E);C?(wh.dot(C.normal)<=r&&(f.push(b.x,b.y,b.z),f.push(y.x,y.y,y.z)),u.set(E,null)):u.has(S)||u.set(S,{index0:c[v],index1:c[M],normal:wh.clone()})}}for(const p of u.values())if(p){const{index0:x,index1:m}=p;Ga.fromBufferAttribute(a,x),Ha.fromBufferAttribute(a,m),f.push(Ga.x,Ga.y,Ga.z),f.push(Ha.x,Ha.y,Ha.z)}this.setAttribute("position",new At(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Tt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new J:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,i=[],r=[],o=[],a=new R,l=new Wt;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(Qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class Pc extends bi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zp extends Pc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function zu(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const df=new R,ff=new R,Th=new zu,Ah=new zu,Eh=new zu;class kp extends bi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ff.subVectors(i[0],i[1]).add(i[0]),c=ff);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(df.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=df),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Th.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Ah.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Eh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ah.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Eh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Th.calc(l),Ah.calc(l),Eh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function uv(s,t){const e=1-s;return e*e*t}function dv(s,t){return 2*(1-s)*s*t}function fv(s,t){return s*s*t}function Io(s,t,e,n){return uv(s,t)+dv(s,e)+fv(s,n)}function pv(s,t){const e=1-s;return e*e*e*t}function mv(s,t){const e=1-s;return 3*e*e*s*t}function gv(s,t){return 3*(1-s)*s*s*t}function xv(s,t){return s*s*s*t}function Do(s,t,e,n,i){return pv(s,t)+mv(s,e)+gv(s,n)+xv(s,i)}class ku extends bi{constructor(t=new J,e=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new J){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(t,i.x,r.x,o.x,a.x),Do(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vp extends bi{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Do(t,i.x,r.x,o.x,a.x),Do(t,i.y,r.y,o.y,a.y),Do(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends bi{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gp extends bi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gu extends bi{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Io(t,i.x,r.x,o.x),Io(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends bi{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Io(t,i.x,r.x,o.x),Io(t,i.y,r.y,o.y),Io(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends bi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(pf(a,l.x,c.x,h.x,d.x),pf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new J().fromArray(i))}return this}}var sc=Object.freeze({__proto__:null,ArcCurve:zp,CatmullRomCurve3:kp,CubicBezierCurve:ku,CubicBezierCurve3:Vp,EllipseCurve:Pc,LineCurve:Vu,LineCurve3:Gp,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:Hu,SplineCurve:Wu});class Hp extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new sc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}}class Go extends Hp{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vu(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Gu(this.currentPoint.clone(),new J(t,e),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new ku(this.currentPoint.clone(),new J(t,e),new J(n,i),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Pc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ni extends Go{constructor(t){super(t),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Go().fromJSON(i))}return this}}function vv(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Wp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bv(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Ho(r,o,e,a,l,c,0),o}function Wp(s,t,e,n,i){let r;if(i===Nv(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=mf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=mf(o/n|0,s[o],s[o+1],r);return r&&Gr(r,r.next)&&(Xo(r),r=r.next),r}function js(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Xo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ho(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Cv(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?yv(s,n,i,r):_v(s)){t.push(l.i,s.i,c.i),Xo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Mv(js(s),t),Ho(s,t,e,n,i,r,2)):o===2&&Sv(s,t,e,n,i,r):Ho(js(s),t,e,n,i,r,1);break}}}function _v(s){const t=s.prev,e=s,n=s.next;if(Ge(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&_o(i,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yv(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ge(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),g=Zh(f,p,t,e,n),v=Zh(x,m,t,e,n);let M=s.prevZ,_=s.nextZ;for(;M&&M.z>=g&&_&&_.z<=v;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&_o(a,h,l,d,c,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&_o(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=x&&M.y>=p&&M.y<=m&&M!==i&&M!==o&&_o(a,h,l,d,c,u,M.x,M.y)&&Ge(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&_o(a,h,l,d,c,u,_.x,_.y)&&Ge(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Mv(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Gr(n,i)&&qp(n,e,e.next,i)&&Wo(n,i)&&Wo(i,n)&&(t.push(n.i,e.i,i.i),Xo(e),Xo(e.next),e=s=i),e=e.next}while(e!==s);return js(e)}function Sv(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Iv(o,a)){let l=Yp(o,a);o=js(o,o.next),l=js(l,l.next),Ho(o,t,e,n,i,r,0),Ho(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function bv(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Wp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Pv(c))}i.sort(wv);for(let r=0;r<i.length;r++)e=Tv(i[r],e);return e}function wv(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Tv(s,t){const e=Av(s,t);if(!e)return t;const n=Yp(e,s);return js(n,n.next),js(e,e.next)}function Av(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Gr(s,e))return e;do{if(Gr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Xp(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Wo(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Ev(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Ev(s,t){return Ge(s.prev,s,t.prev)<0&&Ge(t.next,s,s.next)<0}function Cv(s,t,e,n){let i=s;do i.z===0&&(i.z=Zh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Rv(i)}function Rv(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Zh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Pv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Xp(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function _o(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Xp(s,t,e,n,i,r,o,a)}function Iv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Dv(s,t)&&(Wo(s,t)&&Wo(t,s)&&Lv(s,t)&&(Ge(s.prev,s,t.prev)||Ge(s,t.prev,t))||Gr(s,t)&&Ge(s.prev,s,s.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Gr(s,t){return s.x===t.x&&s.y===t.y}function qp(s,t,e,n){const i=qa(Ge(s,t,e)),r=qa(Ge(s,t,n)),o=qa(Ge(e,n,s)),a=qa(Ge(e,n,t));return!!(i!==r&&o!==a||i===0&&Xa(s,e,t)||r===0&&Xa(s,n,t)||o===0&&Xa(e,s,n)||a===0&&Xa(e,t,n))}function Xa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function qa(s){return s>0?1:s<0?-1:0}function Dv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&qp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Wo(s,t){return Ge(s.prev,s,s.next)<0?Ge(s,t,s.next)>=0&&Ge(s,s.prev,t)>=0:Ge(s,t,s.prev)<0||Ge(s,s.next,t)<0}function Lv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Yp(s,t){const e=$h(s.i,s.x,s.y),n=$h(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mf(s,t,e,n){const i=$h(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function $h(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nv(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Uv{static triangulate(t,e,n=2){return vv(t,e,n)}}class xi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return xi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];gf(t),xf(n,t);let o=t.length;e.forEach(gf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,xf(n,e[l]);const a=Uv.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function gf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function xf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class ra extends Jt{constructor(t=new Ni([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new At(i,3)),this.setAttribute("uv",new At(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Fv;let M,_=!1,w,b,y,S;if(g){M=g.getSpacedPoints(h),_=!0,u=!1;const rt=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(h,rt),b=new R,y=new R,S=new R}u||(m=0,f=0,p=0,x=0);const E=a.extractPoints(c);let C=E.shape;const P=E.holes;if(!xi.isClockWise(C)){C=C.reverse();for(let rt=0,gt=P.length;rt<gt;rt++){const ft=P[rt];xi.isClockWise(ft)&&(P[rt]=ft.reverse())}}function F(rt){const ft=10000000000000001e-36;let Ut=rt[0];for(let wt=1;wt<=rt.length;wt++){const ie=wt%rt.length,Gt=rt[ie],fe=Gt.x-Ut.x,ge=Gt.y-Ut.y,be=fe*fe+ge*ge,B=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(Ut.x),Math.abs(Ut.y)),je=ft*B*B;if(be<=je){rt.splice(ie,1),wt--;continue}Ut=Gt}}F(C),P.forEach(F);const D=P.length,k=C;for(let rt=0;rt<D;rt++){const gt=P[rt];C=C.concat(gt)}function X(rt,gt,ft){return gt||Ht("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(gt,ft)}const z=C.length;function et(rt,gt,ft){let Ut,wt,ie;const Gt=rt.x-gt.x,fe=rt.y-gt.y,ge=ft.x-rt.x,be=ft.y-rt.y,B=Gt*Gt+fe*fe,je=Gt*be-fe*ge;if(Math.abs(je)>Number.EPSILON){const he=Math.sqrt(B),Ne=Math.sqrt(ge*ge+be*be),Mt=gt.x-fe/he,Ye=gt.y+Gt/he,$t=ft.x-be/Ne,jt=ft.y+ge/Ne,I=(($t-Mt)*be-(jt-Ye)*ge)/(Gt*be-fe*ge);Ut=Mt+Gt*I-rt.x,wt=Ye+fe*I-rt.y;const T=Ut*Ut+wt*wt;if(T<=2)return new J(Ut,wt);ie=Math.sqrt(T/2)}else{let he=!1;Gt>Number.EPSILON?ge>Number.EPSILON&&(he=!0):Gt<-Number.EPSILON?ge<-Number.EPSILON&&(he=!0):Math.sign(fe)===Math.sign(be)&&(he=!0),he?(Ut=-fe,wt=Gt,ie=Math.sqrt(B)):(Ut=Gt,wt=fe,ie=Math.sqrt(B/2))}return new J(Ut/ie,wt/ie)}const V=[];for(let rt=0,gt=k.length,ft=gt-1,Ut=rt+1;rt<gt;rt++,ft++,Ut++)ft===gt&&(ft=0),Ut===gt&&(Ut=0),V[rt]=et(k[rt],k[ft],k[Ut]);const Q=[];let Z,lt=V.concat();for(let rt=0,gt=D;rt<gt;rt++){const ft=P[rt];Z=[];for(let Ut=0,wt=ft.length,ie=wt-1,Gt=Ut+1;Ut<wt;Ut++,ie++,Gt++)ie===wt&&(ie=0),Gt===wt&&(Gt=0),Z[Ut]=et(ft[Ut],ft[ie],ft[Gt]);Q.push(Z),lt=lt.concat(Z)}let Dt;if(m===0)Dt=xi.triangulateShape(k,P);else{const rt=[],gt=[];for(let ft=0;ft<m;ft++){const Ut=ft/m,wt=f*Math.cos(Ut*Math.PI/2),ie=p*Math.sin(Ut*Math.PI/2)+x;for(let Gt=0,fe=k.length;Gt<fe;Gt++){const ge=X(k[Gt],V[Gt],ie);Vt(ge.x,ge.y,-wt),Ut===0&&rt.push(ge)}for(let Gt=0,fe=D;Gt<fe;Gt++){const ge=P[Gt];Z=Q[Gt];const be=[];for(let B=0,je=ge.length;B<je;B++){const he=X(ge[B],Z[B],ie);Vt(he.x,he.y,-wt),Ut===0&&be.push(he)}Ut===0&&gt.push(be)}}Dt=xi.triangulateShape(rt,gt)}const q=Dt.length,at=p+x;for(let rt=0;rt<z;rt++){const gt=u?X(C[rt],lt[rt],at):C[rt];_?(y.copy(w.normals[0]).multiplyScalar(gt.x),b.copy(w.binormals[0]).multiplyScalar(gt.y),S.copy(M[0]).add(y).add(b),Vt(S.x,S.y,S.z)):Vt(gt.x,gt.y,0)}for(let rt=1;rt<=h;rt++)for(let gt=0;gt<z;gt++){const ft=u?X(C[gt],lt[gt],at):C[gt];_?(y.copy(w.normals[rt]).multiplyScalar(ft.x),b.copy(w.binormals[rt]).multiplyScalar(ft.y),S.copy(M[rt]).add(y).add(b),Vt(S.x,S.y,S.z)):Vt(ft.x,ft.y,d/h*rt)}for(let rt=m-1;rt>=0;rt--){const gt=rt/m,ft=f*Math.cos(gt*Math.PI/2),Ut=p*Math.sin(gt*Math.PI/2)+x;for(let wt=0,ie=k.length;wt<ie;wt++){const Gt=X(k[wt],V[wt],Ut);Vt(Gt.x,Gt.y,d+ft)}for(let wt=0,ie=P.length;wt<ie;wt++){const Gt=P[wt];Z=Q[wt];for(let fe=0,ge=Gt.length;fe<ge;fe++){const be=X(Gt[fe],Z[fe],Ut);_?Vt(be.x,be.y+M[h-1].y,M[h-1].x+ft):Vt(be.x,be.y,d+ft)}}}Ct(),Nt();function Ct(){const rt=i.length/3;if(u){let gt=0,ft=z*gt;for(let Ut=0;Ut<q;Ut++){const wt=Dt[Ut];Ce(wt[2]+ft,wt[1]+ft,wt[0]+ft)}gt=h+m*2,ft=z*gt;for(let Ut=0;Ut<q;Ut++){const wt=Dt[Ut];Ce(wt[0]+ft,wt[1]+ft,wt[2]+ft)}}else{for(let gt=0;gt<q;gt++){const ft=Dt[gt];Ce(ft[2],ft[1],ft[0])}for(let gt=0;gt<q;gt++){const ft=Dt[gt];Ce(ft[0]+z*h,ft[1]+z*h,ft[2]+z*h)}}n.addGroup(rt,i.length/3-rt,0)}function Nt(){const rt=i.length/3;let gt=0;_t(k,gt),gt+=k.length;for(let ft=0,Ut=P.length;ft<Ut;ft++){const wt=P[ft];_t(wt,gt),gt+=wt.length}n.addGroup(rt,i.length/3-rt,1)}function _t(rt,gt){let ft=rt.length;for(;--ft>=0;){const Ut=ft;let wt=ft-1;wt<0&&(wt=rt.length-1);for(let ie=0,Gt=h+m*2;ie<Gt;ie++){const fe=z*ie,ge=z*(ie+1),be=gt+Ut+fe,B=gt+wt+fe,je=gt+wt+ge,he=gt+Ut+ge;Yt(be,B,je,he)}}}function Vt(rt,gt,ft){l.push(rt),l.push(gt),l.push(ft)}function Ce(rt,gt,ft){te(rt),te(gt),te(ft);const Ut=i.length/3,wt=v.generateTopUV(n,i,Ut-3,Ut-2,Ut-1);de(wt[0]),de(wt[1]),de(wt[2])}function Yt(rt,gt,ft,Ut){te(rt),te(gt),te(Ut),te(gt),te(ft),te(Ut);const wt=i.length/3,ie=v.generateSideWallUV(n,i,wt-6,wt-3,wt-2,wt-1);de(ie[0]),de(ie[1]),de(ie[3]),de(ie[1]),de(ie[2]),de(ie[3])}function te(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function de(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ov(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new sc[i.type]().fromJSON(i)),new ra(n,t.options)}}const Fv={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new J(r,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-d),new J(u,1-p),new J(x,1-g)]:[new J(a,1-l),new J(h,1-d),new J(f,1-p),new J(m,1-g)]}};function Ov(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Yr extends ys{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yr(t.radius,t.detail)}}class Zr extends Jt{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Qt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new R,u=new J,f=new R,p=new R,x=new R;let m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){const M=n+v*h*i,_=Math.sin(M),w=Math.cos(M);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*_,d.y=t[b].y,d.z=t[b].x*w,o.push(d.x,d.y,d.z),u.x=v/e,u.y=b/(t.length-1),a.push(u.x,u.y);const y=l[3*b+0]*_,S=l[3*b+1],E=l[3*b+0]*w;c.push(y,S,E)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){const _=M+v*t.length,w=_,b=_+t.length,y=_+t.length+1,S=_+1;r.push(w,b,S),r.push(y,S,b)}this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("uv",new At(a,2)),this.setAttribute("normal",new At(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.points,t.segments,t.phiStart,t.phiLength)}}class oa extends ys{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class Ui extends Jt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){const v=g*u-o;for(let M=0;M<c;M++){const _=M*d-r;p.push(_,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const M=v+c*g,_=v+c*(g+1),w=v+1+c*(g+1),b=v+1+c*g;f.push(M,_,b),f.push(_,w,b)}this.setIndex(f),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ic extends Jt{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new R,p=new J;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let g=0;g<n;g++){const v=g+m,M=v,_=v+n+1,w=v+n+2,b=v+1;a.push(M,_,b),a.push(_,w,b)}}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ms extends Jt{constructor(t=new Ni([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new At(i,3)),this.setAttribute("normal",new At(r,3)),this.setAttribute("uv",new At(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;xi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const v=p[m];xi.isClockWise(v)===!0&&(p[m]=v.reverse())}const x=xi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){const v=x[m],M=v[0]+d,_=v[1]+d,w=v[2]+d;n.push(M,_,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bv(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Ms(n,t.curveSegments)}}function Bv(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Kt extends Jt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new R,u=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){const v=[],M=g/n,_=o+M*a,w=t*Math.cos(_),b=Math.sqrt(t*t-w*w);let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let S=0;S<=e;S++){const E=S/e,C=i+E*r;d.x=-b*Math.cos(C),d.y=w,d.z=b*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+y,1-M),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<e;v++){const M=h[g][v+1],_=h[g][v],w=h[g+1][v],b=h[g+1][v+1];(g!==0||o>0)&&f.push(M,_,b),(g!==n-1||l<Math.PI)&&f.push(_,w,b)}this.setIndex(f),this.setAttribute("position",new At(p,3)),this.setAttribute("normal",new At(x,3)),this.setAttribute("uv",new At(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Dc extends ys{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Dc(t.radius,t.detail)}}class $e extends Jt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=n;x++){const m=o+x/n*a;for(let g=0;g<=i;g++){const v=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){const g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,M=(i+1)*(x-1)+m,_=(i+1)*x+m;l.push(g,v,_),l.push(v,M,_)}this.setIndex(l),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(h,3)),this.setAttribute("uv",new At(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Lc extends Jt{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new R,u=new R,f=new R,p=new R,x=new R,m=new R,g=new R;for(let M=0;M<=n;++M){const _=M/n*r*Math.PI*2;v(_,r,o,t,f),v(_+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let w=0;w<=i;++w){const b=w/i*Math.PI*2,y=-e*Math.cos(b),S=e*Math.sin(b);d.x=f.x+(y*g.x+S*x.x),d.y=f.y+(y*g.y+S*x.y),d.z=f.z+(y*g.z+S*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(M/n),h.push(w/i)}}for(let M=1;M<=n;M++)for(let _=1;_<=i;_++){const w=(i+1)*(M-1)+(_-1),b=(i+1)*M+(_-1),y=(i+1)*M+_,S=(i+1)*(M-1)+_;a.push(w,b,S),a.push(b,y,S)}this.setIndex(a),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(h,2));function v(M,_,w,b,y){const S=Math.cos(M),E=Math.sin(M),C=w/_*M,P=Math.cos(C);y.x=b*(2+P)*.5*S,y.y=b*(2+P)*E*.5,y.z=b*Math.sin(C)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Nc extends Jt{constructor(t=new Hu(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new J;let h=new R;const d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new At(d,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(f,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),v(),g()}function m(M){h=t.getPointAt(M/e,h);const _=o.normals[M],w=o.binormals[M];for(let b=0;b<=i;b++){const y=b/i*Math.PI*2,S=Math.sin(y),E=-Math.cos(y);l.x=E*_.x+S*w.x,l.y=E*_.y+S*w.y,l.z=E*_.z+S*w.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let M=1;M<=e;M++)for(let _=1;_<=i;_++){const w=(i+1)*(M-1)+(_-1),b=(i+1)*M+(_-1),y=(i+1)*M+_,S=(i+1)*(M-1)+_;p.push(w,b,S),p.push(b,y,S)}}function v(){for(let M=0;M<=e;M++)for(let _=0;_<=i;_++)c.x=M/e,c.y=_/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Nc(new sc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Zp extends Jt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new R,r=new R;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,x=u+f;p<x;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),v=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,v),vf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),vf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new At(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function vf(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var _f=Object.freeze({__proto__:null,BoxGeometry:Li,CapsuleGeometry:sa,CircleGeometry:_s,ConeGeometry:mn,CylinderGeometry:Oe,DodecahedronGeometry:Rc,EdgesGeometry:Bp,ExtrudeGeometry:ra,IcosahedronGeometry:Yr,LatheGeometry:Zr,OctahedronGeometry:oa,PlaneGeometry:Ui,PolyhedronGeometry:ys,RingGeometry:Ic,ShapeGeometry:Ms,SphereGeometry:Kt,TetrahedronGeometry:Dc,TorusGeometry:$e,TorusKnotGeometry:Lc,TubeGeometry:Nc,WireframeGeometry:Zp});class $p extends yn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new K(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Hr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(yf(i))i.isRenderTargetTexture?(Tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(yf(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Ln(s){const t={};for(let e=0;e<s.length;e++){const n=Hr(s[e]);for(const i in n)t[i]=n[i]}return t}function yf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function zv(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const qo={clone:Hr,merge:Ln};var kv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kv,this.fragmentShader=Vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hr(t.uniforms),this.uniformsGroups=zv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(i.value);break;case"v2":this.uniforms[n].value=new J().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Xu extends ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qu extends yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kp extends qu{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Yi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qp extends yn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new K(16777215),this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jp extends yn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new K(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class tm extends yn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class em extends yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uc extends yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yu extends yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class nm extends yn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new K(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ji,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class im extends kn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function mi(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Pr(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function sm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Jh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function rm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function Gv(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let x=0;x<h;++x)u.push(c.values[f*h+x])}}d.length!==0&&(c.times=mi(d,c.times.constructor),c.values=mi(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function Hv(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=a.times.length-1;let x;if(r<=a.times[0]){const g=h,v=d-h;x=a.values.slice(g,v)}else if(r>=a.times[p]){const g=p*d+h,v=g+d-h;x=a.values.slice(g,v)}else{const g=a.createInterpolant();g.evaluate(r),x=g.resultBuffer.slice()}l==="quaternion"&&new Je().fromArray(x).normalize().conjugate().toArray(x);const m=c.times.length;for(let g=0;g<m;++g){const v=g*f+u;if(l==="quaternion")Je.multiplyQuaternionsFlat(c.values,v,x,0,c.values,v);else{const M=f-u*2;for(let _=0;_<M;++_)c.values[v+_]-=x[_]}}}return s.blendMode=Tu,s}class Wv{static convertArray(t,e){return mi(t,e)}static isTypedArray(t){return Tp(t)}static hasTangents(t){return Pr(t)}static getKeyframeOrder(t){return sm(t)}static sortedArray(t,e,n){return Jh(t,e,n)}static flattenJSON(t,e,n,i){rm(t,e,n,i)}static subclip(t,e,n,i,r=30){return Gv(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return Hv(t,e,n,i)}}class $r{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class om extends $r{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ks,endingEnd:ks}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vs:r=t,a=2*e-n;break;case Bo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vs:o=t,l=2*n-e;break;case Bo:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,M=(-1-f)*m+(1.5+f)*x+.5*p,_=f*m-f*x;for(let w=0;w!==a;++w)r[w]=g*o[h+w]+v*o[c+w]+M*o[l+w]+_*o[d+w];return r}}class Zu extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}}class am extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class lm extends $r{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}const u=a*2,f=t-1;for(let p=0;p!==a;++p){const x=o[c+p],m=o[l+p],g=f*u+p*2,v=d[g],M=d[g+1],_=t*u+p*2,w=h[_],b=h[_+1],y=qv(n,e,v,w,i);r[p]=cm(y,x,M,b,m)}return r}}function cm(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Xv(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function qv(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=cm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Xv(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class ci{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mi(e,this.TimeBufferType),this.values=mi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mi(t.times,Array),values:mi(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Pr(t.settings)&&(n.settings={inTangents:mi(t.settings.inTangents,Array),outTangents:mi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new am(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new om(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new lm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Oo:e=this.InterpolantFactoryMethodDiscrete;break;case ec:e=this.InterpolantFactoryMethodLinear;break;case hl:e=this.InterpolantFactoryMethodSmooth;break;case Wh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Tt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return ec;case this.InterpolantFactoryMethodSmooth:return hl;case this.InterpolantFactoryMethodBezier:return Wh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Pr(this.settings)&&(Mf(this.settings.inTangents,t),Mf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Pr(this.settings)&&(Sf(this.settings.inTangents,t),Sf(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Ht("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Ht("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Ht("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Ht("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Tp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Ht("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hl,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Pr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Mf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Sf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=ec;class tr extends ci{constructor(t,e,n){super(t,e,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Oo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class $u extends ci{constructor(t,e,n,i){super(t,e,n,i)}}$u.prototype.ValueTypeName="color";class Fc extends ci{constructor(t,e,n,i){super(t,e,n,i)}}Fc.prototype.ValueTypeName="number";class hm extends $r{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Je.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Oc extends ci{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new hm(this.times,this.values,this.getValueSize(),t)}}Oc.prototype.ValueTypeName="quaternion";Oc.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends ci{constructor(t,e,n){super(t,e,n)}}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Oo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class Ju extends ci{constructor(t,e,n,i){super(t,e,n,i)}}Ju.prototype.ValueTypeName="vector";class Yo{constructor(t="",e=-1,n=[],i=xc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=li(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Zv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(ci.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=sm(l);l=Jh(l,1,h),c=Jh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fc(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Yv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fc;case"vector":case"vector2":case"vector3":case"vector4":return Ju;case"color":return $u;case"quaternion":return Oc;case"bool":case"boolean":return tr;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Zv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Yv(s.type);if(s.times===void 0){const n=[],i=[];rm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),Pr(s.settings)&&(e.settings={inTangents:mi(s.settings.inTangents,Float32Array),outTangents:mi(s.settings.outTangents,Float32Array)}),e}const Pi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(bf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!bf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function bf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Ku{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const um=new Ku;class Zn{constructor(t){this.manager=t!==void 0?t:um,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Zn.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class $v extends Error{constructor(t,e){super(t),this.response=e}}class es extends Zn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Pi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Hi[t]!==void 0){Hi[t].push({onLoad:e,onProgress:n,onError:i});return}Hi[t]=[],Hi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Hi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let x=0;const m=new ReadableStream({start(g){v();function v(){d.read().then(({done:M,value:_})=>{if(M)g.close();else{x+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let b=0,y=h.length;b<y;b++){const S=h[b];S.onProgress&&S.onProgress(w)}g.enqueue(_),v()}},M=>{g.error(M)})}}});return new Response(m)}else throw new $v(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Pi.add(`file:${t}`,c);const h=Hi[t];delete Hi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Hi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Hi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jv extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new es(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Yo.parse(t[n]);e.push(i)}return e}}class Kv extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new Ec,l=new es(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Te),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<u.mipmapCount;x++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+x]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=Te),a.format=u.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}const _r=new WeakMap;class Zo extends Zn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=_r.get(o);d===void 0&&(d=[],_r.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=ko("img");function l(){h(),e&&e(this);const d=_r.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}_r.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),Pi.remove(`image:${t}`);const u=_r.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}_r.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pi.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Qv extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=new ia;r.colorSpace=En;const o=new Zo(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class jv extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new _n,a=new es(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Ht(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){const e=new _n;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:Un,t.wrapT=e.wrapT!==void 0?e.wrapT:Un,t.magFilter=e.magFilter!==void 0?e.magFilter:Te,t.minFilter=e.minFilter!==void 0?e.minFilter:Te,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Qn),e.mipmapCount===1&&(t.minFilter=Te),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class t_ extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=new We,o=new Zo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ss extends ae{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new K(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class dm extends Ss{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ch=new Wt,wf=new R,Tf=new R;class Bc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ks,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;wf.setFromMatrixPosition(t.matrixWorld),e.position.copy(wf),Tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ch,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===$s||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ya=new R,Za=new Je,Ti=new R;class zc extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ya,Za,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ya,Za,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,Za,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new R,Af=new J,Ef=new J;class fn extends zc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(us.x,us.y).multiplyScalar(-t/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-t/us.z)}getViewSize(t,e){return this.getViewBounds(t,Af,Ef),e.subVectors(Ef,Af)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class e_ extends Bc{constructor(){super(new fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=kr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class fm extends Ss{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new e_}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class n_ extends Bc{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class pm extends Ss{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new n_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class aa extends zc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class i_ extends Bc{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends Ss{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new i_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class mm extends Ss{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gm extends Ss{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class ju{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new R)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class xm extends Ss{constructor(t=new ju,e=1){super(void 0,e),this.isLightProbe=!0,this.type="LightProbe",this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const Cf={};class kc extends Zn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new es(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return kc.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:$p,SpriteMaterial:Nu,RawShaderMaterial:Xu,ShaderMaterial:ze,PointsMaterial:Fu,MeshPhysicalMaterial:Kp,MeshStandardMaterial:qu,MeshPhongMaterial:Qp,MeshToonMaterial:jp,MeshNormalMaterial:tm,MeshLambertMaterial:em,MeshDepthMaterial:Uc,MeshDistanceMaterial:Yu,MeshBasicMaterial:Ii,MeshMatcapMaterial:nm,LineDashedMaterial:im,LineBasicMaterial:kn,Material:yn,...Cf}[t];let i;return n===void 0?(Yi(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new yn):i=new n,i}static registerMaterial(t,e){Cf[t]=e}}class Kh{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class vm extends Jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class _m extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new es(r.manager);o.setPriority(r.priority),o.setCache(r.cache),o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Ht(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),v=Rr(m.type,g),M=new Tc(v,m.stride);return M.uuid=m.uuid,m.usage!==void 0&&M.setUsage(m.usage),e[p]=M,M}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=t.isInstancedBufferGeometry?new vm:new Jt,a=t.data.index;if(a!==void 0){const f=Rr(a.type,a.array);o.setIndex(new oe(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let x;if(p.isInterleavedBufferAttribute){const m=i(t.data,p.data);x=new Js(m,p.itemSize,p.offset,p.normalized)}else{const m=Rr(p.type,p.array),g=p.isInstancedBufferAttribute?Vr:oe;x=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.gpuType!==void 0&&(x.gpuType=p.gpuType),o.setAttribute(f,x)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],x=[];for(let m=0,g=p.length;m<g;m++){const v=p[m];let M;if(v.isInterleavedBufferAttribute){const _=i(t.data,v.data);M=new Js(_,v.itemSize,v.offset,v.normalized)}else{const _=Rr(v.type,v.array);M=new oe(_,v.itemSize,v.normalized)}v.name!==void 0&&(M.name=v.name),v.usage!==void 0&&M.setUsage(v.usage),v.gpuType!==void 0&&(M.gpuType=v.gpuType),x.push(M)}o.morphAttributes[f]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const x=d[f];o.addGroup(x.start,x.count,x.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new vn().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const Rh={};class s_ extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?Kh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new es(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),Ht("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Ht("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Kh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new es(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e);let a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Rh[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Ni().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new Ac().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new _m;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in _f?a=_f[l.type].fromJSON(l,e):l.type in Rh?a=Rh[l.type].fromJSON(l,e):Tt(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new kc;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Yo.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:Rr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Ku(e);r=new Zo(l),r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new _n(g.data,g.width,g.height)))}i[d.uuid]=new Ri(f)}else{const f=a(d.url);i[d.uuid]=new Ri(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:Rr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Zo(this.manager),i.setPriority(this.priority),i.setCache(this.cache),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new _n(p.data,p.width,p.height)))}n[l.uuid]=new Ri(h)}else{const h=await r(l.url);n[l.uuid]=new Ri(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(Tt("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&Tt('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Tt("ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let h;Array.isArray(c)?(h=new ia,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new _n:h=new We,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,r_)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Rf),h.wrapT=n(a.wrap[1],Rf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,Pf)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,Pf)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.mipmapsAutoUpdate!==void 0&&(h.mipmapsAutoUpdate=a.mipmapsAutoUpdate),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(u){return e[u]===void 0&&Tt("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,x=u.length;p<x;p++){const m=u[p];n[m]===void 0&&Tt("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&Tt("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&Tt("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":o=new Iu,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new K(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new wc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new bc(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new fn(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new aa(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new mm(t.color,t.intensity);break;case"DirectionalLight":o=new Qu(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new pm(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new gm(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new fm(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"",t.map!==void 0&&(o.map=c(t.map));break;case"HemisphereLight":o=new dm(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new ju().fromArray(t.sh);o=new xm(u,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),d=l(t.material),o=new Np(h,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),d=l(t.material),o=new Lt(h,d);break;case"InstancedMesh":h=a(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,x=t.instanceColor;o=new Cn(h,d,f),o.instanceMatrix=new Vr(new Float32Array(p.array),16),x!==void 0&&(o.instanceColor=new Vr(new Float32Array(x.array),x.itemSize));break;case"BatchedMesh":h=a(t.geometry),d=l(t.material),o=new Up(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,v=null;return m.boundingBox!==void 0&&(g=new Pn().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(v=new vn().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:v}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t.availableInstanceIds,o._availableGeometryIds=t.availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new vn().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new Pn().fromJSON(t.boundingBox));break;case"LOD":o=new Lp;break;case"Line":o=new vs(a(t.geometry),l(t.material));break;case"LineLoop":o=new Fp(a(t.geometry),l(t.material));break;case"LineSegments":o=new Di(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new na(a(t.geometry),l(t.material));break;case"Sprite":o=new Dp(l(t.material)),t.center!==void 0&&o.center.fromArray(t.center);break;case"Group":o=new ot;break;case"Bone":o=new Uu;break;default:o=new ae}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.pivot!==void 0&&(o.pivot=new R().fromArray(t.pivot)),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&(o.matrix.decompose(o.position,o.quaternion,o.scale),o.pivot!==null&&o.position.copy(o.pivot).applyMatrix4(o.matrix).sub(o.pivot))):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.mapType!==void 0&&(o.shadow.mapType=t.shadow.mapType),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],x=o.getObjectByProperty("uuid",p.object);x!==void 0&&o.addLevel(x,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?Tt("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ae}})}}const r_={UVMapping:hc,CubeReflectionMapping:Ki,CubeRefractionMapping:qs,EquirectangularReflectionMapping:bo,EquirectangularRefractionMapping:wo},Rf={RepeatWrapping:No,ClampToEdgeWrapping:Un,MirroredRepeatWrapping:Ys},Pf={NearestFilter:He,NearestMipmapNearestFilter:vu,NearestMipmapLinearFilter:Cr,LinearFilter:Te,LinearMipmapNearestFilter:To,LinearMipmapLinearFilter:Qn},Ph=new WeakMap;class o_ extends Zn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Pi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Ph.has(o)===!0?(i&&i(Ph.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),Ph.set(l,c),Pi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Pi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let $a;class td{static getContext(){return $a===void 0&&($a=new(window.AudioContext||window.webkitAudioContext)),$a}static setContext(t){$a=t}}class a_ extends Zn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new es(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=td.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Ht(l),r.manager.itemError(t)}}}const If=new Wt,Df=new Wt,Ds=new Wt;class l_{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new fn,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new fn,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Ds.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(Ws*e.fov*.5)/e.zoom;let a,l;Df.elements[12]=-i,If.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,Ds.elements[0]=2*e.near/(l-a),Ds.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(Ds),a=-o*e.aspect-r,l=o*e.aspect-r,Ds.elements[0]=2*e.near/(l-a),Ds.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(Ds)}this.cameraL.matrix.copy(t.matrixWorld).multiply(Df),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(If),this.cameraR.matrixWorldNeedsUpdate=!0}}const yr=-90,Mr=1;class rc extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn(yr,Mr,t,e);i.layers=this.layers,this.add(i);const r=new fn(yr,Mr,t,e);r.layers=this.layers,this.add(r);const o=new fn(yr,Mr,t,e);o.layers=this.layers,this.add(o);const a=new fn(yr,Mr,t,e);a.layers=this.layers,this.add(a);const l=new fn(yr,Mr,t,e);l.layers=this.layers,this.add(l);const c=new fn(yr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ym extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class ed{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=c_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function c_(){this._document.hidden===!1&&this.reset()}const Ls=new R,Ih=new Je,h_=new R,Ns=new R,Us=new R;class u_ extends ae{constructor(){super(),this.type="AudioListener",this.context=td.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new ed}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(Ls,Ih,h_),Ns.set(0,0,-1).applyQuaternion(Ih),Us.set(0,1,0).applyQuaternion(Ih),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ls.x,n),e.positionY.linearRampToValueAtTime(Ls.y,n),e.positionZ.linearRampToValueAtTime(Ls.z,n),e.forwardX.linearRampToValueAtTime(Ns.x,n),e.forwardY.linearRampToValueAtTime(Ns.y,n),e.forwardZ.linearRampToValueAtTime(Ns.z,n),e.upX.linearRampToValueAtTime(Us.x,n),e.upY.linearRampToValueAtTime(Us.y,n),e.upZ.linearRampToValueAtTime(Us.z,n)}else e.setPosition(Ls.x,Ls.y,Ls.z),e.setOrientation(Ns.x,Ns.y,Ns.z,Us.x,Us.y,Us.z)}}class Mm extends ae{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Tt("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Tt("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Tt("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Tt("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const Fs=new R,Lf=new Je,d_=new R,Os=new R;class f_ extends Mm{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Fs,Lf,d_),Os.set(0,0,1).applyQuaternion(Lf);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Fs.x,n),e.positionY.linearRampToValueAtTime(Fs.y,n),e.positionZ.linearRampToValueAtTime(Fs.z,n),e.orientationX.linearRampToValueAtTime(Os.x,n),e.orientationY.linearRampToValueAtTime(Os.y,n),e.orientationZ.linearRampToValueAtTime(Os.z,n)}else e.setPosition(Fs.x,Fs.y,Fs.z),e.setOrientation(Os.x,Os.y,Os.z)}}class p_{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Sm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Je.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Je.multiplyQuaternionsFlat(t,o,t,e,t,n),Je.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const nd="\\[\\]\\.:\\/",m_=new RegExp("["+nd+"]","g"),id="[^"+nd+"]",g_="[^"+nd.replace("\\.","")+"]",x_=/((?:WC+[\/:])*)/.source.replace("WC",id),v_=/(WCOD+)?/.source.replace("WCOD",g_),__=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",id),y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",id),M_=new RegExp("^"+x_+v_+__+y_+"$"),S_=["material","materials","bones","map"];class b_{constructor(t,e,n){const i=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Me{constructor(t,e,n){this.path=e,this.parsedPath=n||Me.parseTrackName(e),this.node=Me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Me.Composite(t,e,n):new Me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(t){const e=M_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);S_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Ht("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Me.Composite=b_;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class w_{constructor(){this.isAnimationObjectGroup=!0,this.uuid=li(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let x=0,m=o;x!==m;++x)r[x].push(new Me(u,n[x],i[x]))}else if(p<c){a=t[p];const x=--c,m=t[x];e[m.uuid]=p,t[p]=m,e[f]=x,t[x]=u;for(let g=0,v=o;g!==v;++g){const M=r[g],_=M[x];let w=M[p];M[p]=_,w===void 0&&(w=new Me(u,n[g],i[g])),M[x]=w}}else t[p]!==a&&Ht("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const x=n[f],m=x[d],g=x[h];x[h]=m,x[d]=g}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--o,x=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[x.uuid]=u),t[u]=x,t.pop();for(let m=0,g=i;m!==g;++m){const v=n[m],M=v[u],_=v[p];v[d]=M,v[u]=_,v.pop()}}else{const u=--o,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,x=i;p!==x;++p){const m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new Me(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class bm{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ks,endingEnd:ks};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=pp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Tu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case xc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===mp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===fp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Vs,i.endingEnd=Vs):(t?i.endingStart=this.zeroSlopeAtStart?Vs:ks:i.endingStart=Bo,e?i.endingEnd=this.zeroSlopeAtEnd?Vs:ks:i.endingEnd=Bo)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const T_=new Float32Array(1);class A_ extends Si{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;p=new Sm(Me.create(n,f,x),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Zu(new Float32Array(2),new Float32Array(2),1,T_),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?Yo.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=xc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new bm(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Yo.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class E_ extends Pu{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){const o=new Mc(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}}class sd{constructor(t){this.value=t}clone(){return new sd(this.value.clone===void 0?this.value:this.value.clone())}}let C_=0;class R_ extends Si{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.usage=vc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=e[n];Array.isArray(r)?this.uniforms.push(r.map(o=>o.clone())):this.uniforms.push(r.clone())}return this}clone(){return new this.constructor().copy(this)}}class P_ extends Tc{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class I_{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Nf=new Wt;class D_{constructor(t,e,n=0,i=1/0){this.ray=new qr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Ht("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,n=[]){return Qh(t,this,n,e),n.sort(Uf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Qh(t[i],this,n,e);return n.sort(Uf),n}}function Uf(s,t){return s.distance-t.distance}function Qh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Qh(r[o],t,e,!0)}}class wm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Tt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class L_{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class N_{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}const xd=class xd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};xd.prototype.isMatrix2=!0;let jh=xd;const Ff=new J;class Tm{constructor(t=new J(1/0,1/0),e=new J(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ff.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ff).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Of=new R,Ja=new R,Sr=new R,br=new R,Dh=new R,U_=new R,F_=new R;class O_{constructor(t=new R,e=new R){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Of.subVectors(t,this.start),Ja.subVectors(this.end,this.start);const n=Ja.dot(Ja);if(n===0)return 0;let r=Ja.dot(Of)/n;return e&&(r=Qt(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=U_,n=F_){const i=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,h=t.end;Sr.subVectors(c,a),br.subVectors(h,l),Dh.subVectors(a,l);const d=Sr.dot(Sr),u=br.dot(br),f=br.dot(Dh);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.distanceToSquared(n);if(d<=i)r=0,o=f/u,o=Qt(o,0,1);else{const p=Sr.dot(Dh);if(u<=i)o=0,r=Qt(-p/d,0,1);else{const x=Sr.dot(br),m=d*u-x*x;m!==0?r=Qt((x*f-p*u)/m,0,1):r=0,o=(x*r+f)/u,o<0?(o=0,r=Qt(-p/d,0,1)):o>1&&(o=1,r=Qt((x-p)/d,0,1))}}return e.copy(a).addScaledVector(Sr,r),n.copy(l).addScaledVector(br,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Bf=new R;class B_ extends ae{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Jt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new At(i,3));const r=new kn({fog:!1,toneMapped:!1});this.cone=new Di(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Bf.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Bf),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const ds=new R,Ka=new Wt,Lh=new Wt;class z_ extends Di{constructor(t){const e=Am(t),n=new Jt,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new At(i,3)),n.setAttribute("color",new At(r,3));const o=new kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new K(255),l=new K(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Lh.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Ka.multiplyMatrices(Lh,a.matrixWorld),ds.setFromMatrixPosition(Ka),i.setXYZ(o,ds.x,ds.y,ds.z),Ka.multiplyMatrices(Lh,a.parent.matrixWorld),ds.setFromMatrixPosition(Ka),i.setXYZ(o+1,ds.x,ds.y,ds.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Am(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Am(s.children[e]));return t}class k_ extends Lt{constructor(t,e,n){const i=new Kt(e,4,2),r=new Ii({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const V_=new R,zf=new K,kf=new K;class G_ extends ae{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new oa(e);i.rotateY(Math.PI*.5),this.material=new Ii({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new oe(o,3)),this.add(new Lt(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");zf.copy(this.light.color),kf.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?zf:kf;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(V_.setFromMatrixPosition(this.light.matrixWorld).negate())}}class H_ extends Di{constructor(t=10,e=10,n=4473924,i=8947848){n=new K(n),i=new K(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=e;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const x=u===r?n:i;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}const h=new Jt;h.setAttribute("position",new At(l,3)),h.setAttribute("color",new At(c,3));const d=new kn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class W_ extends Di{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new K(r),o=new K(o);const a=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;a.push(0,0,0),a.push(f,0,p);const x=d&1?r:o;l.push(x.r,x.g,x.b),l.push(x.r,x.g,x.b)}for(let d=0;d<n;d++){const u=d&1?r:o,f=t-t/n*d;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),x=(p+1)/i*(Math.PI*2),m=Math.sin(x)*f,g=Math.cos(x)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new Jt;c.setAttribute("position",new At(a,3)),c.setAttribute("color",new At(l,3));const h=new kn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Vf=new R,Qa=new R,Gf=new R;class X_ extends ae{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Jt;i.setAttribute("position",new At([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new kn({fog:!1,toneMapped:!1});this.lightPlane=new vs(i,r),this.add(this.lightPlane),i=new Jt,i.setAttribute("position",new At([0,0,0,0,0,1],3)),this.targetLine=new vs(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Vf.setFromMatrixPosition(this.light.matrixWorld),Qa.setFromMatrixPosition(this.light.target.matrixWorld),Gf.subVectors(Qa,Vf),this.lightPlane.lookAt(Qa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Qa),this.targetLine.scale.z=Gf.length()}}const ja=new R,Ze=new zc;class q_ extends Di{constructor(t){const e=new Jt,n=new kn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,x){l(p),l(x)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new At(i,3)),e.setAttribute("color",new At(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new K(16755200),h=new K(16711680),d=new K(43775),u=new K(16777215),f=new K(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,o;if(Ze.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===jn)r=-1,o=1;else if(this.camera.coordinateSystem===$s)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ke("c",e,t,Ze,0,0,r),Ke("t",e,t,Ze,0,0,o),Ke("n1",e,t,Ze,-n,-i,r),Ke("n2",e,t,Ze,n,-i,r),Ke("n3",e,t,Ze,-n,i,r),Ke("n4",e,t,Ze,n,i,r),Ke("f1",e,t,Ze,-n,-i,o),Ke("f2",e,t,Ze,n,-i,o),Ke("f3",e,t,Ze,-n,i,o),Ke("f4",e,t,Ze,n,i,o),Ke("u1",e,t,Ze,n*.7,i*1.1,r),Ke("u2",e,t,Ze,-n*.7,i*1.1,r),Ke("u3",e,t,Ze,0,i*2,r),Ke("cf1",e,t,Ze,-n,0,o),Ke("cf2",e,t,Ze,n,0,o),Ke("cf3",e,t,Ze,0,-i,o),Ke("cf4",e,t,Ze,0,i,o),Ke("cn1",e,t,Ze,-n,0,r),Ke("cn2",e,t,Ze,n,0,r),Ke("cn3",e,t,Ze,0,-i,r),Ke("cn4",e,t,Ze,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Ke(s,t,e,n,i,r,o){ja.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],ja.x,ja.y,ja.z)}}const tl=new Pn;class Y_ extends Di{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Jt;r.setIndex(new oe(n,1)),r.setAttribute("position",new oe(i,3)),super(r,new kn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&tl.setFromObject(this.object),tl.isEmpty())return;const t=tl.min,e=tl.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Z_ extends Di{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Jt;r.setIndex(new oe(n,1)),r.setAttribute("position",new At(i,3)),super(r,new kn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class $_ extends vs{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new Jt;o.setAttribute("position",new At(r,3)),o.computeBoundingSphere(),super(o,new kn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Jt;l.setAttribute("position",new At(a,3)),l.computeBoundingSphere(),this.add(new Lt(l,new Ii({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Hf=new R;let el,Nh;class J_ extends ae{constructor(t=new R(0,0,1),e=new R(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",el===void 0&&(el=new Jt,el.setAttribute("position",new At([0,0,0,0,1,0],3)),Nh=new mn(.5,1,5,1),Nh.translate(0,-.5,0)),this.position.copy(e),this.line=new vs(el,new kn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Lt(Nh,new Ii({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Hf.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Hf,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class K_ extends Di{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Jt;i.setAttribute("position",new At(e,3)),i.setAttribute("color",new At(n,3));const r=new kn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new K,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Q_{constructor(){this.type="ShapePath",this.color=new K,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Go,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],x=c[f];p.y>l.y!=x.y>l.y&&l.x<(x.x-p.x)*(l.y-p.y)/(x.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new J);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const x=l[p],m=l[(p+1)%f];if(x.y>d!=m.y>d){const g=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);u.push(g)}}return u.length>1&&(u.sort((p,x)=>p-x),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Tt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?l=>l!==0:l=>(l&1)!==0,r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=xi.area(c);if(h===0)continue;const d=new Tm;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let h=0;for(let d=l-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const o=[],a=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new Ni;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=a.get(l.container);if(!c)continue;const h=new Go;h.curves=l.subPath.curves,c.holes.push(h)}return o}}class j_ extends Si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function t1(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function e1(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function n1(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function tu(s,t,e,n){const i=i1(n);switch(e){case bu:return s*t;case pc:return s*t/i.components*i.byteLength;case ta:return s*t/i.components*i.byteLength;case gs:return s*t*2/i.components*i.byteLength;case mc:return s*t*2/i.components*i.byteLength;case wu:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case gc:return s*t*4/i.components*i.byteLength;case Ao:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Co:case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(s,16)*Math.max(t,8)/4;case Tl:case El:return Math.max(s,8)*Math.max(t,8)/2;case Rl:case Pl:case Dl:case Ll:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Il:case Uo:case Nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Vl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case $l:case Jl:case Kl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ql:case jl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fo:case tc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function i1(s){switch(s){case Xn:case _u:return{byteLength:1,components:1};case zr:case yu:case on:return{byteLength:2,components:1};case dc:case fc:return{byteLength:2,components:4};case ai:case uc:case Fn:return{byteLength:4,components:1};case Mu:case Su:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class s1{static contain(t,e){return t1(t,e)}static cover(t,e){return e1(t,e)}static fill(t){return n1(t)}static getByteLength(t,e,n,i){return tu(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?Tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Em(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function r1(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var o1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
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
#endif`,l1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,p1=`#ifdef USE_BATCHING
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
#endif`,m1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,g1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,y1=`#ifdef USE_BUMPMAP
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
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,A1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,I1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",F1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O1=`#ifdef USE_ENVMAP
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
#endif`,B1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,W1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q1=`#ifdef USE_GRADIENTMAP
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
}`,Y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,j1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`uniform sampler2D dfgLUT;
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
}`,sy=`
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,oy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ay=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,my=`#if defined( USE_POINTS_UV )
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
#endif`,gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
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
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,By=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wy=`float getShadowMask() {
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
}`,Xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform float backgroundBlurriness;
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,pM=`#define DISTANCE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`uniform float scale;
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
}`,vM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,EM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,PM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,DM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,NM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
}`,OM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:o1,alphahash_pars_fragment:a1,alphamap_fragment:l1,alphamap_pars_fragment:c1,alphatest_fragment:h1,alphatest_pars_fragment:u1,aomap_fragment:d1,aomap_pars_fragment:f1,batching_pars_vertex:p1,batching_vertex:m1,begin_vertex:g1,beginnormal_vertex:x1,bsdfs:v1,iridescence_fragment:_1,bumpmap_pars_fragment:y1,clipping_planes_fragment:M1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:b1,clipping_planes_vertex:w1,color_fragment:T1,color_pars_fragment:A1,color_pars_vertex:E1,color_vertex:C1,common:R1,defaultnormal_vertex:P1,displacementmap_pars_vertex:I1,displacementmap_vertex:D1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:U1,colorspace_pars_fragment:F1,envmap_fragment:O1,envmap_common_pars_fragment:B1,envmap_pars_fragment:z1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:K1,envmap_vertex:V1,fog_vertex:G1,fog_pars_vertex:H1,fog_fragment:W1,fog_pars_fragment:X1,gradientmap_pars_fragment:q1,lightmap_pars_fragment:Y1,lights_lambert_fragment:Z1,lights_lambert_pars_fragment:$1,lights_pars_begin:J1,lights_toon_fragment:Q1,lights_toon_pars_fragment:j1,lights_phong_fragment:ty,lights_phong_pars_fragment:ey,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:sy,lights_fragment_maps:ry,lights_fragment_end:oy,lightprobes_pars_fragment:ay,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:cy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:uy,map_fragment:dy,map_pars_fragment:fy,map_particle_fragment:py,map_particle_pars_fragment:my,metalnessmap_fragment:gy,metalnessmap_pars_fragment:xy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:yy,morphtarget_pars_vertex:My,morphtarget_vertex:Sy,normal_fragment_begin:by,normal_fragment_maps:wy,normal_pars_fragment:Ty,normal_pars_vertex:Ay,normal_vertex:Ey,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Py,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Dy,opaque_fragment:Ly,packing:Ny,premultiplied_alpha_fragment:Uy,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:By,roughnessmap_fragment:zy,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Hy,shadowmask_pars_fragment:Wy,skinbase_vertex:Xy,skinning_pars_vertex:qy,skinning_vertex:Yy,skinnormal_vertex:Zy,specularmap_fragment:$y,specularmap_pars_fragment:Jy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Qy,transmission_fragment:jy,transmission_pars_fragment:tM,uv_pars_fragment:eM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:sM,background_vert:rM,background_frag:oM,backgroundCube_vert:aM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:hM,depth_vert:uM,depth_frag:dM,distance_vert:fM,distance_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:xM,linedashed_frag:vM,meshbasic_vert:_M,meshbasic_frag:yM,meshlambert_vert:MM,meshlambert_frag:SM,meshmatcap_vert:bM,meshmatcap_frag:wM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:EM,meshphong_frag:CM,meshphysical_vert:RM,meshphysical_frag:PM,meshtoon_vert:IM,meshtoon_frag:DM,points_vert:LM,points_frag:NM,shadow_vert:UM,shadow_frag:FM,sprite_vert:OM,sprite_frag:BM},Et={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},gi={basic:{uniforms:Ln([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:Ln([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:Ln([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:Ln([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:Ln([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new K(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:Ln([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:Ln([Et.points,Et.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:Ln([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:Ln([Et.common,Et.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:Ln([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:Ln([Et.sprite,Et.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:Ln([Et.common,Et.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:Ln([Et.lights,Et.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};gi.physical={uniforms:Ln([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const nl={r:0,b:0,g:0},zM=new Wt,Cm=new ee;Cm.set(-1,0,0,0,1,0,0,0,1);function kM(s,t,e,n,i,r){const o=new K(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const _=v.backgroundBlurriness>0;M=t.get(M,_)}return M}function p(v){let M=!1;const _=f(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),M=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,M){const _=f(M);_&&_.isCubeTexture?(c===void 0&&(c=new Lt(new Li(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Hr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(M.backgroundRotation)).transpose(),_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cm),c.material.toneMapped=me.getTransfer(_.colorSpace)!==Re,(h!==_||d!==_.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new Ui(2,2),new ze({name:"BackgroundMaterial",uniforms:Hr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=me.getTransfer(_.colorSpace)!==Re,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(nl,Jp(s)),e.buffers.color.setClear(nl.r,nl.g,nl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,M=1){o.set(v),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function VM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(P,L,F,D,k){let X=!1;const z=d(P,D,F,L);r!==z&&(r=z,c(r.object)),X=f(P,D,F,k),X&&p(P,D,F,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(P,L,F,D),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,L,F,D){const k=D.wireframe===!0;let X=n[L.id];X===void 0&&(X={},n[L.id]=X);const z=P.isInstancedMesh===!0?P.id:0;let et=X[z];et===void 0&&(et={},X[z]=et);let V=et[F.id];V===void 0&&(V={},et[F.id]=V);let Q=V[k];return Q===void 0&&(Q=u(l()),V[k]=Q),Q}function u(P){const L=[],F=[],D=[];for(let k=0;k<e;k++)L[k]=0,F[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,L,F,D){const k=r.attributes,X=L.attributes;let z=0;const et=F.getAttributes();for(const V in et)if(et[V].location>=0){const Z=k[V];let lt=X[V];if(lt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),Z===void 0||Z.attribute!==lt||lt&&Z.data!==lt.data)return!0;z++}return r.attributesNum!==z||r.index!==D}function p(P,L,F,D){const k={},X=L.attributes;let z=0;const et=F.getAttributes();for(const V in et)if(et[V].location>=0){let Z=X[V];Z===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));const lt={};lt.attribute=Z,Z&&Z.data&&(lt.data=Z.data),k[V]=lt,z++}r.attributes=k,r.attributesNum=z,r.index=D}function x(){const P=r.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){const F=r.newAttributes,D=r.enabledAttributes,k=r.attributeDivisors;F[P]=1,D[P]===0&&(s.enableVertexAttribArray(P),D[P]=1),k[P]!==L&&(s.vertexAttribDivisor(P,L),k[P]=L)}function v(){const P=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==P[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function M(P,L,F,D,k,X,z){z===!0?s.vertexAttribIPointer(P,L,F,k,X):s.vertexAttribPointer(P,L,F,D,k,X)}function _(P,L,F,D){x();const k=D.attributes,X=F.getAttributes(),z=L.defaultAttributeValues;for(const et in X){const V=X[et];if(V.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),et==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const Z=Q.normalized,lt=Q.itemSize,Dt=t.get(Q);if(Dt===void 0)continue;const q=Dt.buffer,at=Dt.type,Ct=Dt.bytesPerElement,Nt=at===s.INT||at===s.UNSIGNED_INT||Q.gpuType===uc;if(Q.isInterleavedBufferAttribute){const _t=Q.data,Vt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,Ce=Q.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Yt=0;Yt<V.locationSize;Yt++)g(V.location+Yt,_t.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Yt=0;Yt<V.locationSize;Yt++)m(V.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,q);for(let Yt=0;Yt<V.locationSize;Yt++)M(V.location+Yt,lt/V.locationSize,at,Z,Vt*Ct,(Ce+lt/V.locationSize*Yt)*Ct,Nt)}else{if(Q.isInstancedBufferAttribute){for(let _t=0;_t<V.locationSize;_t++)g(V.location+_t,Q.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let _t=0;_t<V.locationSize;_t++)m(V.location+_t);s.bindBuffer(s.ARRAY_BUFFER,q);for(let _t=0;_t<V.locationSize;_t++)M(V.location+_t,lt/V.locationSize,at,Z,lt*Ct,lt/V.locationSize*_t*Ct,Nt)}}else if(z!==void 0){const Z=z[et];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(V.location,Z);break;case 3:s.vertexAttrib3fv(V.location,Z);break;case 4:s.vertexAttrib4fv(V.location,Z);break;default:s.vertexAttrib1fv(V.location,Z)}}}}v()}function w(){E();for(const P in n){const L=n[P];for(const F in L){const D=L[F];for(const k in D){const X=D[k];for(const z in X)h(X[z].object),delete X[z];delete D[k]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const F in L){const D=L[F];for(const k in D){const X=D[k];for(const z in X)h(X[z].object),delete X[z];delete D[k]}}delete n[P.id]}function y(P){for(const L in n){const F=n[L];for(const D in F){const k=F[D];if(k[P.id]===void 0)continue;const X=k[P.id];for(const z in X)h(X[z].object),delete X[z];delete k[P.id]}}}function S(P){for(const L in n){const F=n[L],D=P.isInstancedMesh===!0?P.id:0,k=F[D];if(k!==void 0){for(const X in k){const z=k[X];for(const et in z)h(z[et].object),delete z[et];delete k[X]}delete F[D],Object.keys(F).length===0&&delete n[L]}}}function E(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function GM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function HM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const y=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(y){return!(y!==rn&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){const S=y===on&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(y!==Xn&&y!==Fn&&!S&&n.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Tt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,maxSamples:w,samples:b}}function WM(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ci,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,M=v*4;let _=g.clippingState||null;l.value=_,_=h(p,u,M,f);for(let w=0;w!==M;++w)_[w]=e[w];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,p!==!0||m===null){const g=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,_=f;M!==x;++M,_+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}class Vc extends Xe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ia(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Li(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:qi});r.uniforms.tEquirect.value=e;const o=new Lt(i,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=Te),new rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Wf=256,XM=3,qM=20,Rm=256,Pm=16,YM=3,ZM=new R,$M=new K;class $o{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new rc(1,10,null),this._boxMesh=new Lt(new Li(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=ZM}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor($M));const m=new rc(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wf,Cp(t))}_fromTexture(t,e){t.mapping===Ki||t.mapping===qs?this._setSize(t.image.length===0?Wf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Xf(t,!1,!1),n=Math.log2(t)-XM;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ki||t.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=JM(),this._integrationMaterial=KM());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Pm);for(let o=0;o<=n;o++){const a=$o.lodToRoughness(o,n);if(o>n-YM)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Rm*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=QM());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function Xf(s,t,e){return new Vc(s,{minFilter:Qn,generateMipmaps:t,type:on,colorSpace:ts,depthBuffer:e})}function la(s,t,e){return new ze({name:s,uniforms:t,vertexShader:re.cube_vert,fragmentShader:e,side:Rn,blending:qi,depthTest:!1,depthWrite:!1})}function JM(){return la("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Rm}u

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
	`)}function KM(){return la("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pm}},`

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
	`)}function QM(){return la("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qM}
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
	`)}function qf(){return la("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Yf(){return la("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jM(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===bo||f===wo)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const x=new Vc(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,p=f===bo||f===wo,x=f===Ki||f===qs;if(p||x){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new $o(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new $o(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===bo?u.mapping=Ki:f===wo&&(u.mapping=qs),u}function l(u){let f=0;const p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function tS(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yi("WebGLRenderer: "+n+" extension not supported."),i}}}function eS(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);const x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){const x=p.attributes;for(const m in x)t.update(x[m],s.ARRAY_BUFFER)}function d(p){const x=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const v=x!==null?x.array.length:m.array.length/3-1,M=m.count>=65535?Lu:Du,_=new M(Math.ceil(v/3)*6,1),w=_.array;if(x!==null){const y=x.array;g=x.version;for(let S=0,E=0;S<v;S+=3){const C=y[S+0],P=y[S+1],L=y[S+2];w[E++]=C,w[E++]=P,w[E++]=P,w[E++]=L,w[E++]=L,w[E++]=C}}else{g=m.version;for(let y=0,S=0;y<v;y+=3){const E=y+0,C=y+1,P=y+2;w[S++]=E,w[S++]=C,w[S++]=C,w[S++]=P,w[S++]=P,w[S++]=E}}_.version=g;const b=r.get(p);b&&t.remove(b),r.set(p,_)}function u(p){const x=r.get(p);if(x){const m=p.index;m!==null&&x.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(const p in i){const x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function nS(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function iS(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Ht("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function sS(s,t,e){const n=new WeakMap,i=new Se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let C=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let w=a.attributes.position.count*_,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const y=new Float32Array(w*b*4*d),S=new yc(y,w,b,d);S.type=Fn,S.needsUpdate=!0;const E=_*4;for(let P=0;P<d;P++){const L=g[P],F=v[P],D=M[P],k=w*b*4*P;for(let X=0;X<L.count;X++){const z=X*E;p===!0&&(i.fromBufferAttribute(L,X),y[k+z+0]=i.x,y[k+z+1]=i.y,y[k+z+2]=i.z,y[k+z+3]=0),x===!0&&(i.fromBufferAttribute(F,X),y[k+z+4]=i.x,y[k+z+5]=i.y,y[k+z+6]=i.z,y[k+z+7]=0),m===!0&&(i.fromBufferAttribute(D,X),y[k+z+8]=i.x,y[k+z+9]=i.y,y[k+z+10]=i.z,y[k+z+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:S,size:new J(w,b)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function rS(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const oS={[uu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[fu]:"CINEON_TONE_MAPPING",[pu]:"ACES_FILMIC_TONE_MAPPING",[gu]:"AGX_TONE_MAPPING",[xu]:"NEUTRAL_TONE_MAPPING",[mu]:"CUSTOM_TONE_MAPPING"};function aS(s,t,e,n,i,r){const o=new Xe(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Jt;h.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new At([0,2,0,0,2,0],2));const d=new Xu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Lt(h,d),f=new aa(-1,1,1,-1,0,1);let p=null,x=null,m=!1,g,v=null,M=[],_=!1;this.setSize=function(w,b){o.setSize(w,b),a!==null&&a.setSize(w,b),l!==null&&l.setSize(w,b);for(let y=0;y<M.length;y++){const S=M[y];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){M=w,_=M.length>0&&M[0].isRenderPass===!0;const b=o.width,y=o.height;M.length>0&&a===null&&(a=new Xe(b,y,{type:on,depthBuffer:!1,stencilBuffer:!1}),l=new Xe(b,y,{type:on,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&M.some(E=>E.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Qs(b,y),r===!0&&(c.format=Xi,c.type=Zs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let E=0;E<M.length;E++){const C=M[E];C.setSize&&C.setSize(b,y),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===yi&&M.length===0)return!1;if(v=b,b!==null){const y=b.width,S=b.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return _===!1&&w.setRenderTarget(o),g=w.toneMapping,w.toneMapping=yi,!0},this.hasRenderPass=function(){return _},this.end=function(w,b){w.toneMapping=g,m=!0;let y=o,S=a;for(let E=0;E<M.length;E++){const C=M[E];C.enabled!==!1&&(C.render(w,S,y,b),C.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(p!==w.outputColorSpace||x!==w.toneMapping){p=w.outputColorSpace,x=w.toneMapping,d.defines={},me.getTransfer(p)===Re&&(d.defines.SRGB_TRANSFER="");const E=oS[x];E&&(d.defines[E]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,w.setRenderTarget(v),w.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const Im=new We,Dm=new Qs(1,1),Lm=new Ou(1),Nm=new yc,Um=new Mc,Fm=new ia,Zf=[],$f=[],Jf=new Float32Array(16),Kf=new Float32Array(9),Qf=new Float32Array(4);function Jr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Zf[i];if(r===void 0&&(r=new Float32Array(i),Zf[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function an(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ln(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gc(s,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function lS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function cS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2fv(this.addr,t),ln(e,t)}}function hS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(an(e,t))return;s.uniform3fv(this.addr,t),ln(e,t)}}function uS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4fv(this.addr,t),ln(e,t)}}function dS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Qf.set(n),s.uniformMatrix2fv(this.addr,!1,Qf),ln(e,n)}}function fS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Kf.set(n),s.uniformMatrix3fv(this.addr,!1,Kf),ln(e,n)}}function pS(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(an(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ln(e,t)}else{if(an(e,n))return;Jf.set(n),s.uniformMatrix4fv(this.addr,!1,Jf),ln(e,n)}}function mS(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function gS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2iv(this.addr,t),ln(e,t)}}function xS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3iv(this.addr,t),ln(e,t)}}function vS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4iv(this.addr,t),ln(e,t)}}function _S(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(an(e,t))return;s.uniform2uiv(this.addr,t),ln(e,t)}}function MS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(an(e,t))return;s.uniform3uiv(this.addr,t),ln(e,t)}}function SS(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(an(e,t))return;s.uniform4uiv(this.addr,t),ln(e,t)}}function Hc(s){return s.version===0&&(s.compareFunction=Cu,s.needsUpdate=!0),s}function bS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Hc(Dm):r=Im,e.setTexture2D(t||r,i)}function wS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Um,i)}function TS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Hc(Lm):r=Fm,e.setTextureCube(t||r,i)}function AS(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nm,i)}function ES(s){switch(s){case 5126:return lS;case 35664:return cS;case 35665:return hS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return xS;case 35669:case 35673:return vS;case 5125:return _S;case 36294:return yS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return AS}}function CS(s,t){s.uniform1fv(this.addr,t)}function RS(s,t){const e=Jr(t,this.size,2);s.uniform2fv(this.addr,e)}function PS(s,t){const e=Jr(t,this.size,3);s.uniform3fv(this.addr,e)}function IS(s,t){const e=Jr(t,this.size,4);s.uniform4fv(this.addr,e)}function DS(s,t){const e=Jr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function LS(s,t){const e=Jr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function NS(s,t){const e=Jr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function US(s,t){s.uniform1iv(this.addr,t)}function FS(s,t){s.uniform2iv(this.addr,t)}function OS(s,t){s.uniform3iv(this.addr,t)}function BS(s,t){s.uniform4iv(this.addr,t)}function zS(s,t){s.uniform1uiv(this.addr,t)}function kS(s,t){s.uniform2uiv(this.addr,t)}function VS(s,t){s.uniform3uiv(this.addr,t)}function GS(s,t){s.uniform4uiv(this.addr,t)}function HS(s,t,e){const n=this.cache,i=t.length,r=Gc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Hc(Dm):o=Im;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function WS(s,t,e){const n=this.cache,i=t.length,r=Gc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Um,r[o])}function XS(s,t,e){const n=this.cache,i=t.length,r=Gc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Hc(Lm):o=Fm;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function qS(s,t,e){const n=this.cache,i=t.length,r=Gc(e,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Nm,r[o])}function YS(s){switch(s){case 5126:return CS;case 35664:return RS;case 35665:return PS;case 35666:return IS;case 35674:return DS;case 35675:return LS;case 35676:return NS;case 5124:case 35670:return US;case 35667:case 35671:return FS;case 35668:case 35672:return OS;case 35669:case 35673:return BS;case 5125:return zS;case 36294:return kS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}class ZS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ES(e.type)}}class $S{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YS(e.type)}}class JS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function jf(s,t){s.seq.push(t),s.map[t.id]=t}function KS(s,t,e){const n=s.name,i=n.length;for(Uh.lastIndex=0;;){const r=Uh.exec(n),o=Uh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){jf(e,c===void 0?new ZS(a,s,t):new $S(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new JS(a),jf(e,d)),e=d}}}class fl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);KS(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function t0(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const QS=37297;let jS=0;function tb(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const e0=new ee;function eb(s){me._getMatrix(e0,me.workingColorSpace,s);const t=`mat3( ${e0.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(s)){case zo:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return Tt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function n0(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+tb(s.getShaderSource(t),a)}else return r}function nb(s,t){const e=eb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ib={[uu]:"Linear",[du]:"Reinhard",[fu]:"Cineon",[pu]:"ACESFilmic",[gu]:"AgX",[xu]:"Neutral",[mu]:"Custom"};function sb(s,t){const e=ib[t];return e===void 0?(Tt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const il=new R;function rb(){me.getLuminanceCoefficients(il);const s=il.x.toFixed(4),t=il.y.toFixed(4),e=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ob(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function ab(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lb(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function yo(s){return s!==""}function i0(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function s0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(s){return s.replace(cb,hb)}function hb(s,t){const e=re[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return eu(e)}const ub=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(s){return s.replace(ub,db)}function db(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function o0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}const fb={[So]:"SHADOWMAP_TYPE_PCF",[Er]:"SHADOWMAP_TYPE_VSM"};function pb(s){return fb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mb={[qs]:"ENVMAP_MODE_REFRACTION"};function gb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xb={[jo]:"ENVMAP_BLENDING_MULTIPLY",[hp]:"ENVMAP_BLENDING_MIX",[up]:"ENVMAP_BLENDING_ADD"};function vb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xb[s.combine]||"ENVMAP_BLENDING_NONE"}function _b(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pb(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=gb(e),d=vb(e),u=ob(e),f=ab(r),p=i.createProgram();let x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yo).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(yo).join(`
`),m.length>0&&(m+=`
`)):(x=[o0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),m=[o0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?re.tonemapping_pars_fragment:"",e.toneMapping!==yi?sb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,nb("linearToOutputTexel",e.outputColorSpace),rb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yo).join(`
`)),o=eu(o),o=i0(o,e),o=s0(o,e),a=eu(a),a=i0(a,e),a=s0(a,e),o=r0(o),a=r0(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=g+x+o,M=g+m+a,_=t0(i,i.VERTEX_SHADER,v),w=t0(i,i.FRAGMENT_SHADER,M);i.attachShader(p,_),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function b(C){if(s.debug.checkShaderErrors){const P=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(_)||"",F=i.getShaderInfoLog(w)||"",D=P.trim(),k=L.trim(),X=F.trim();let z=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,_,w);else{const V=n0(i,_,"vertex"),Q=n0(i,w,"fragment");Ht("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+D+`
`+V+`
`+Q)}else D!==""?Tt("WebGLProgram: Program Info Log:",D):(k===""||X==="")&&(et=!1);et&&(C.diagnostics={runnable:z,programLog:D,vertexShader:{log:k,prefix:x},fragmentShader:{log:X,prefix:m}})}i.deleteShader(_),i.deleteShader(w),y=new fl(i,p),S=lb(i,p)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,QS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jS++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=_,this.fragmentShader=w,this}let yb=0;class Mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sb(t),e.set(t,n)),n}}class Sb{constructor(t){this.id=yb++,this.code=t,this.usedTimes=0}}function bb(s){return s===gs||s===Uo||s===Fo}function wb(s,t,e,n,i,r){const o=new Sc,a=new Mb,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,S,E,C,P,L){const F=C.fog,D=P.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=t.get(y.envMap||k,X),et=u[y.type];let V=n.precision;y.precision!==null&&(V=n.getMaxPrecision(y.precision),V!==y.precision&&Tt("WebGLProgram.getParameters:",y.precision,"not supported, using",V,"instead."));const Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Z=Q!==void 0?Q.length:0;let lt=0;D.morphAttributes.position!==void 0&&(lt=1),D.morphAttributes.normal!==void 0&&(lt=2),D.morphAttributes.color!==void 0&&(lt=3);let Dt,q,at,Ct;if(et){const Rt=gi[et];Dt=Rt.vertexShader,q=Rt.fragmentShader}else{Dt=y.vertexShader,q=y.fragmentShader;const Rt=a.getVertexShaderStage(y),Ie=a.getFragmentShaderStage(y);a.update(y,Rt,Ie),at=Rt.id,Ct=Ie.id}const Nt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Vt=P.isInstancedMesh===!0,Ce=P.isBatchedMesh===!0,Yt=!!y.map,te=!!y.matcap,de=!!z,rt=de&&z.isPMREMTexture===!0,gt=!!y.aoMap,ft=!!y.lightMap,Ut=!!y.bumpMap&&y.wireframe===!1,wt=!!y.normalMap,ie=!!y.displacementMap,Gt=!!y.emissiveMap,fe=!!y.metalnessMap,ge=!!y.roughnessMap,be=y.anisotropy>0,B=y.clearcoat>0,je=y.diffuseRoughness>0,he=y.dispersion>0,Ne=y.retroreflectivity>0,Mt=y.iridescence>0,Ye=y.sheen>0,$t=y.transmission>0,jt=be&&!!y.anisotropyMap,I=B&&!!y.clearcoatMap,T=B&&!!y.clearcoatNormalMap,H=B&&!!y.clearcoatRoughnessMap,ct=je&&!!y.diffuseRoughnessMap,it=Mt&&!!y.iridescenceMap,pt=Mt&&!!y.iridescenceThicknessMap,St=Ye&&!!y.sheenColorMap,j=Ye&&!!y.sheenRoughnessMap,tt=!!y.specularMap,xt=!!y.specularColorMap,U=!!y.specularIntensityMap,nt=$t&&!!y.transmissionMap,$=$t&&!!y.thicknessMap,vt=!!y.gradientMap,dt=!!y.alphaMap,mt=y.alphaTest>0,Xt=!!y.alphaHash,le=!!y.extensions;let ht=yi;y.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Zt=rt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,se={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Dt,fragmentShader:q,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:Ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:V,batching:Ce,batchingColor:Ce&&P._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&P.instanceColor!==null,instancingMorph:Vt&&P.morphTexture!==null,outputColorSpace:Nt===null?s.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:te,envMap:de,envMapMode:de&&z.mapping,envMapPMREM:rt,envMapMaxLod:rt?Zt.length-1:null,envMapSize:rt?Zt[0].width:null,aoMap:gt,lightMap:ft,bumpMap:Ut,normalMap:wt,displacementMap:ie,emissiveMap:Gt,normalMapObjectSpace:wt&&y.normalMapType===vp,normalMapTangentSpace:wt&&y.normalMapType===ji,packedNormalMap:wt&&y.normalMapType===ji&&bb(y.normalMap.format),metalnessMap:fe,roughnessMap:ge,anisotropy:be,anisotropyMap:jt,clearcoat:B,clearcoatMap:I,clearcoatNormalMap:T,clearcoatRoughnessMap:H,diffuseRoughness:je,diffuseRoughnessMap:ct,dispersion:he,retroreflection:Ne,iridescence:Mt,iridescenceMap:it,iridescenceThicknessMap:pt,sheen:Ye,sheenColorMap:St,sheenRoughnessMap:j,specularMap:tt,specularColorMap:xt,specularIntensityMap:U,transmission:$t,transmissionMap:nt,thicknessMap:$,gradientMap:vt,opaque:y.transparent===!1&&y.blending===ms&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Xt,combine:y.combine,mapUv:Yt&&f(y.map.channel),aoMapUv:gt&&f(y.aoMap.channel),lightMapUv:ft&&f(y.lightMap.channel),bumpMapUv:Ut&&f(y.bumpMap.channel),normalMapUv:wt&&f(y.normalMap.channel),displacementMapUv:ie&&f(y.displacementMap.channel),emissiveMapUv:Gt&&f(y.emissiveMap.channel),metalnessMapUv:fe&&f(y.metalnessMap.channel),roughnessMapUv:ge&&f(y.roughnessMap.channel),anisotropyMapUv:jt&&f(y.anisotropyMap.channel),clearcoatMapUv:I&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:T&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:it&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:St&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(y.sheenRoughnessMap.channel),specularMapUv:tt&&f(y.specularMap.channel),specularColorMapUv:xt&&f(y.specularColorMap.channel),specularIntensityMapUv:U&&f(y.specularIntensityMap.channel),transmissionMapUv:nt&&f(y.transmissionMap.channel),thicknessMapUv:$&&f(y.thicknessMap.channel),alphaMapUv:dt&&f(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(wt||be),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(Yt||dt),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&wt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:lt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(Rt=>Rt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Re,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&me.getTransfer(y.emissiveMap.colorSpace)===Re,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Fe,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:le&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&y.extensions.multiDraw===!0||Ce)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function x(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const E in y.defines)S.push(E),S.push(y.defines[E]);return y.isRawShaderMaterial===!1&&(m(S,y),g(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function m(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){const S=u[y.type];let E;if(S){const C=gi[S];E=qo.clone(C.uniforms)}else E=y.uniforms;return E}function M(y,S){let E=h.get(S);return E!==void 0?++E.usedTimes:(E=new _b(s,S,y,i),c.push(E),h.set(S,E)),E}function _(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){a.remove(y)}function b(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:M,releaseProgram:_,releaseShaderCache:w,programs:c,dispose:b}}function Tb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ab(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function a0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function l0(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,x,m,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);const M=a(u,f,p,x,m,g);p.transmission>0?n.push(M):p.transparent===!0?i.push(M):e.push(M)}function c(u,f,p,x,m,g){const v=a(u,f,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Ab),n.length>1&&n.sort(f||a0),i.length>1&&i.sort(f||a0)}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Eb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new l0,s.set(n,[o])):i>=r.length?(o=new l0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Cb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new K};break;case"SpotLight":e={position:new R,direction:new R,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Rb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Pb=0;function Ib(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Db(s){const t=new Cb,e=Rb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new Wt,o=new Wt;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,M=0,_=0,w=0,b=0,y=0,S=0,E=0,C=0;c.sort(Ib);for(let L=0,F=c.length;L<F;L++){const D=c[L],k=D.color,X=D.intensity,z=D.distance;let et=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gs?et=D.shadow.map.texture:et=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=k.r*X,d+=k.g*X,u+=k.b*X;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],X);C++}else if(D.isSunLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=Z,n.sunShadowMap[p]=et;const lt=Q.getViewportCount();for(let Dt=0;Dt<lt;Dt++)n.sunShadowMatrix[x+Dt]=Q.getMatrix(Dt),n.sunShadowCascade[x+Dt]=Q._cascadeData[Dt];x+=lt,p++}n.sun[f]=V,f++}else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=V,m++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(k).multiplyScalar(X),V.distance=z,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[v]=V;const Q=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,Q.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=Q.matrix,D.castShadow){const Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=et,y++}v++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(k).multiplyScalar(X),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[M]=V,M++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Q=D.shadow,Z=e.get(D);Z.shadowIntensity=Q.intensity,Z.shadowBias=Q.bias,Z.shadowNormalBias=Q.normalBias,Z.shadowRadius=Q.radius,Z.shadowMapSize=Q.mapSize,Z.shadowCameraNear=Q.camera.near,Z.shadowCameraFar=Q.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=et,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=V,g++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(X),V.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[_]=V,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==M||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==w||P.numPointShadows!==b||P.numSpotShadows!==y||P.numSpotMaps!==S||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=y,n.spotShadowMap.length=y,n.spotLightMatrix.length=y+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=M,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=w,P.numPointShadows=b,P.numSpotShadows=y,P.numSpotMaps=S,P.numLightProbes=C,n.version=Pb++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0;const g=h.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const _=c[v];if(_.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),d++}else if(_.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),u++}else if(_.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function c0(s){const t=new Db(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Lb(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new c0(s),t.set(i,[a])):r>=o.length?(a=new c0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
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
}`,Fb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Ob=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],h0=new Wt,po=new R,Fh=new R;function Bb(s,t,e){let n=new Ks;const i=new J,r=new J,o=new Se,a=new Uc,l=new Yu,c={},h=e.maxTextureSize,d={[Ji]:Rn,[Rn]:Ji,[Fe]:Fe},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:Nb,fragmentShader:Ub}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new Jt;p.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let g=this.type;this.render=function(b,y,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===X0&&(Tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=So);const E=s.getRenderTarget(),C=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(qi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=g!==this.type;F&&y.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(k=>k.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,k=b.length;D<k;D++){const X=b[D],z=X.shadow;if(z===void 0){Tt("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const et=z.getFrameExtents();i.multiply(et),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,z.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=V,z.map===null||F===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Er){if(X.isPointLight){Tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xe(i.x,i.y,{format:gs,type:on,minFilter:Te,magFilter:Te,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new Qs(i.x,i.y,Fn),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=Qi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He}else X.isPointLight?(z.map=new Vc(i.x),z.map.depthTexture=new Ou(i.x,ai)):(z.map=new Xe(i.x,i.y),z.map.depthTexture=new Qs(i.x,i.y,ai)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=Qi,this.type===So?(z.map.depthTexture.compareFunction=V?Eu:Au,z.map.depthTexture.minFilter=Te,z.map.depthTexture.magFilter=Te):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=He,z.map.depthTexture.magFilter=He);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();X.isPointLight!==!0&&z.updateMatrices(X,S);const Z=z.camera.layers.mask&4294967294?z.camera.layers:S.layers;for(let lt=0;lt<Q;lt++){const Dt=z.getCamera(lt);if(X.isPointLight){const q=z.camera,at=z.matrix,Ct=X.distance||q.far;Ct!==q.far&&(q.far=Ct,q.updateProjectionMatrix()),po.setFromMatrixPosition(X.matrixWorld),q.position.copy(po),Fh.copy(q.position),Fh.add(Fb[lt]),q.up.copy(Ob[lt]),q.lookAt(Fh),q.updateMatrixWorld(),at.makeTranslation(-po.x,-po.y,-po.z),h0.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),z._frustum.setFromProjectionMatrix(h0,q.coordinateSystem,q.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,lt),s.clear();else{lt===0&&(s.setRenderTarget(z.map),s.clear());const q=z.getViewport(lt);o.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(o)}n=z.getFrustum(lt),_(y,S,Dt,X,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Er&&v(z,S),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(E,C,P)};function v(b,y){const S=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xe(i.x,i.y,{format:gs,type:on}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(y,null,S,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(y,null,S,f,x,null)}function M(b,y,S,E){let C=null;const P=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)C=P;else if(C=S.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const L=C.uuid,F=y.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let k=D[F];k===void 0&&(k=C.clone(),D[F]=k,y.addEventListener("dispose",w)),C=k}if(C.visible=y.visible,C.wireframe=y.wireframe,E===Er?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:d[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=s.properties.get(C);L.light=S}return C}function _(b,y,S,E,C,P){if(b.visible===!1)return;if(b.layers.test(C)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Er)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const D=t.update(b),k=b.material;if(Array.isArray(k)){const X=D.groups;for(let z=0,et=X.length;z<et;z++){const V=X[z],Q=k[V.materialIndex];if(Q&&Q.visible){const Z=M(b,Q,E,P);b.onBeforeShadow(s,b,y,S,D,Z,V),s.renderBufferDirect(S,null,D,Z,b,V),b.onAfterShadow(s,b,y,S,D,Z,V)}}}else if(k.visible){const X=M(b,k,E,P);b.onBeforeShadow(s,b,y,S,D,X,null),s.renderBufferDirect(S,null,D,X,b,null),b.onAfterShadow(s,b,y,S,D,X,null)}}const F=b.children;for(let D=0,k=F.length;D<k;D++)_(F[D],y,S,E,C,P)}function w(b){b.target.removeEventListener("dispose",w);for(const S in c){const E=c[S],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function zb(s,t){function e(){let U=!1;const nt=new Se;let $=null;const vt=new Se(0,0,0,0);return{setMask:function(dt){$!==dt&&!U&&(s.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){U=dt},setClear:function(dt,mt,Xt,le,ht){ht===!0&&(dt*=le,mt*=le,Xt*=le),nt.set(dt,mt,Xt,le),vt.equals(nt)===!1&&(s.clearColor(dt,mt,Xt,le),vt.copy(nt))},reset:function(){U=!1,$=null,vt.set(-1,0,0,0)}}}function n(){let U=!1,nt=!1,$=null,vt=null,dt=null;return{setReversed:function(mt){if(nt!==mt){const Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),nt=mt;const le=dt;dt=null,this.setClear(le)}},getReversed:function(){return nt},setTest:function(mt){mt?_t(s.DEPTH_TEST):Vt(s.DEPTH_TEST)},setMask:function(mt){$!==mt&&!U&&(s.depthMask(mt),$=mt)},setFunc:function(mt){if(nt&&(mt=sx[mt]),vt!==mt){switch(mt){case vl:s.depthFunc(s.NEVER);break;case _l:s.depthFunc(s.ALWAYS);break;case yl:s.depthFunc(s.LESS);break;case Br:s.depthFunc(s.LEQUAL);break;case Ml:s.depthFunc(s.EQUAL);break;case Sl:s.depthFunc(s.GEQUAL);break;case bl:s.depthFunc(s.GREATER);break;case wl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=mt}},setLocked:function(mt){U=mt},setClear:function(mt){dt!==mt&&(dt=mt,nt&&(mt=1-mt),s.clearDepth(mt))},reset:function(){U=!1,$=null,vt=null,dt=null,nt=!1}}}function i(){let U=!1,nt=null,$=null,vt=null,dt=null,mt=null,Xt=null,le=null,ht=null;return{setTest:function(Zt){U||(Zt?_t(s.STENCIL_TEST):Vt(s.STENCIL_TEST))},setMask:function(Zt){nt!==Zt&&!U&&(s.stencilMask(Zt),nt=Zt)},setFunc:function(Zt,se,Rt){($!==Zt||vt!==se||dt!==Rt)&&(s.stencilFunc(Zt,se,Rt),$=Zt,vt=se,dt=Rt)},setOp:function(Zt,se,Rt){(mt!==Zt||Xt!==se||le!==Rt)&&(s.stencilOp(Zt,se,Rt),mt=Zt,Xt=se,le=Rt)},setLocked:function(Zt){U=Zt},setClear:function(Zt){ht!==Zt&&(s.clearStencil(Zt),ht=Zt)},reset:function(){U=!1,nt=null,$=null,vt=null,dt=null,mt=null,Xt=null,le=null,ht=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,b=null,y=null,S=new K(0,0,0),E=0,C=!1,P=null,L=null,F=null,D=null,k=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,et=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=et>=2);let Q=null,Z={};const lt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),q=new Se().fromArray(lt),at=new Se().fromArray(Dt);function Ct(U,nt,$,vt){const dt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(U,mt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<$;Xt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(nt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(nt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return mt}const Nt={};Nt[s.TEXTURE_2D]=Ct(s.TEXTURE_2D,s.TEXTURE_2D,1),Nt[s.TEXTURE_CUBE_MAP]=Ct(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[s.TEXTURE_2D_ARRAY]=Ct(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Nt[s.TEXTURE_3D]=Ct(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(s.DEPTH_TEST),o.setFunc(Br),Ut(!1),wt(kh),_t(s.CULL_FACE),gt(qi);function _t(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Vt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function Ce(U,nt){return u[U]!==nt?(s.bindFramebuffer(U,nt),u[U]=nt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=nt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=nt),!0):!1}function Yt(U,nt){let $=p,vt=!1;if(U){$=f.get(nt),$===void 0&&($=[],f.set(nt,$));const dt=U.textures;if($.length!==dt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Xt=dt.length;mt<Xt;mt++)$[mt]=s.COLOR_ATTACHMENT0+mt;$.length=dt.length,vt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,vt=!0);vt&&s.drawBuffers($)}function te(U){return x!==U?(s.useProgram(U),x=U,!0):!1}const de={[zs]:s.FUNC_ADD,[Y0]:s.FUNC_SUBTRACT,[Z0]:s.FUNC_REVERSE_SUBTRACT};de[$0]=s.MIN,de[J0]=s.MAX;const rt={[K0]:s.ZERO,[Q0]:s.ONE,[j0]:s.SRC_COLOR,[cu]:s.SRC_ALPHA,[rp]:s.SRC_ALPHA_SATURATE,[ip]:s.DST_COLOR,[ep]:s.DST_ALPHA,[tp]:s.ONE_MINUS_SRC_COLOR,[hu]:s.ONE_MINUS_SRC_ALPHA,[sp]:s.ONE_MINUS_DST_COLOR,[np]:s.ONE_MINUS_DST_ALPHA,[op]:s.CONSTANT_COLOR,[ap]:s.ONE_MINUS_CONSTANT_COLOR,[lp]:s.CONSTANT_ALPHA,[cp]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(U,nt,$,vt,dt,mt,Xt,le,ht,Zt){if(U===qi){m===!0&&(Vt(s.BLEND),m=!1);return}if(m===!1&&(_t(s.BLEND),m=!0),U!==q0){if(U!==g||Zt!==C){if((v!==zs||w!==zs)&&(s.blendEquation(s.FUNC_ADD),v=zs,w=zs),Zt)switch(U){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFunc(s.ONE,s.ONE);break;case Vh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ht("WebGLState: Invalid blending: ",U);break}else switch(U){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vh:Ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gh:Ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ht("WebGLState: Invalid blending: ",U);break}M=null,_=null,b=null,y=null,S.set(0,0,0),E=0,g=U,C=Zt}return}dt=dt||nt,mt=mt||$,Xt=Xt||vt,(nt!==v||dt!==w)&&(s.blendEquationSeparate(de[nt],de[dt]),v=nt,w=dt),($!==M||vt!==_||mt!==b||Xt!==y)&&(s.blendFuncSeparate(rt[$],rt[vt],rt[mt],rt[Xt]),M=$,_=vt,b=mt,y=Xt),(le.equals(S)===!1||ht!==E)&&(s.blendColor(le.r,le.g,le.b,ht),S.copy(le),E=ht),g=U,C=!1}function ft(U,nt){U.side===Fe?Vt(s.CULL_FACE):_t(s.CULL_FACE);let $=U.side===Rn;nt&&($=!$),Ut($),U.blending===ms&&U.transparent===!1?gt(qi):gt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const vt=U.stencilWrite;a.setTest(vt),vt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Gt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_t(s.SAMPLE_ALPHA_TO_COVERAGE):Vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(U){P!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),P=U)}function wt(U){U!==G0?(_t(s.CULL_FACE),U!==L&&(U===kh?s.cullFace(s.BACK):U===H0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Vt(s.CULL_FACE),L=U}function ie(U){U!==F&&(z&&s.lineWidth(U),F=U)}function Gt(U,nt,$){U?(_t(s.POLYGON_OFFSET_FILL),(D!==nt||k!==$)&&(D=nt,k=$,o.getReversed()&&(nt=-nt,$=-$),s.polygonOffset(nt,$))):Vt(s.POLYGON_OFFSET_FILL)}function fe(U){U?_t(s.SCISSOR_TEST):Vt(s.SCISSOR_TEST)}function ge(U){U===void 0&&(U=s.TEXTURE0+X-1),Q!==U&&(s.activeTexture(U),Q=U)}function be(U,nt,$){$===void 0&&(Q===null?$=s.TEXTURE0+X-1:$=Q);let vt=Z[$];vt===void 0&&(vt={type:void 0,texture:void 0},Z[$]=vt),(vt.type!==U||vt.texture!==nt)&&(Q!==$&&(s.activeTexture($),Q=$),s.bindTexture(U,nt||Nt[U]),vt.type=U,vt.texture=nt)}function B(){const U=Z[Q];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function je(){try{s.compressedTexImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function he(){try{s.compressedTexImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Ne(){try{s.texSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Mt(){try{s.texSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function Ye(){try{s.compressedTexSubImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function $t(){try{s.compressedTexSubImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function jt(){try{s.texStorage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function I(){try{s.texStorage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function T(){try{s.texImage2D(...arguments)}catch(U){Ht("WebGLState:",U)}}function H(){try{s.texImage3D(...arguments)}catch(U){Ht("WebGLState:",U)}}function ct(U){return d[U]!==void 0?d[U]:s.getParameter(U)}function it(U,nt){d[U]!==nt&&(s.pixelStorei(U,nt),d[U]=nt)}function pt(U){q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),q.copy(U))}function St(U){at.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),at.copy(U))}function j(U,nt){let $=c.get(nt);$===void 0&&($=new WeakMap,c.set(nt,$));let vt=$.get(U);vt===void 0&&(vt=s.getUniformBlockIndex(nt,U.name),s.uniformBlockBinding(nt,vt,vt),$.set(U,vt))}function tt(U,nt,$){const dt=c.get(nt).get(U);l[dt]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,dt,$),l[dt]=$)}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,Z={},u={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,M=null,_=null,w=null,b=null,y=null,S=new K(0,0,0),E=0,C=!1,P=null,L=null,F=null,D=null,k=null,q.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:Vt,bindFramebuffer:Ce,drawBuffers:Yt,useProgram:te,setBlending:gt,setMaterial:ft,setFlipSided:Ut,setCullFace:wt,setLineWidth:ie,setPolygonOffset:Gt,setScissorTest:fe,activeTexture:ge,bindTexture:be,unbindTexture:B,compressedTexImage2D:je,compressedTexImage3D:he,texImage2D:T,texImage3D:H,pixelStorei:it,getParameter:ct,updateUBOMapping:j,uniformBlockBinding:tt,texStorage2D:jt,texStorage3D:I,texSubImage2D:Ne,texSubImage3D:Mt,compressedTexSubImage2D:Ye,compressedTexSubImage3D:$t,scissor:pt,viewport:St,reset:xt}}function kb(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,d=new Set;let u;const f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return m?new OffscreenCanvas(I,T):ko("canvas")}function v(I,T,H){let ct=1;const it=jt(I);if((it.width>H||it.height>H)&&(ct=H/Math.max(it.width,it.height)),ct<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pt=Math.floor(ct*it.width),St=Math.floor(ct*it.height);u===void 0&&(u=g(pt,St));const j=T?g(pt,St):u;return j.width=pt,j.height=St,j.getContext("2d").drawImage(I,0,0,pt,St),Tt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+St+")."),j}else return"data"in I&&Tt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),I;return I}function M(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(I,T,H,ct,it,pt=!1){if(I!==null){if(s[I]!==void 0)return s[I];Tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let St;ct&&(St=t.get("EXT_texture_norm16"),St||Tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=T;if(T===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8),H===s.UNSIGNED_SHORT&&St&&(j=St.R16_EXT),H===s.SHORT&&St&&(j=St.R16_SNORM_EXT)),T===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),T===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8),H===s.UNSIGNED_SHORT&&St&&(j=St.RG16_EXT),H===s.SHORT&&St&&(j=St.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),T===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),T===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),T===s.RGB&&(H===s.UNSIGNED_SHORT&&St&&(j=St.RGB16_EXT),H===s.SHORT&&St&&(j=St.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),T===s.RGBA){const tt=pt?zo:me.getTransfer(it);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=tt===Re?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&St&&(j=St.RGBA16_EXT),H===s.SHORT&&St&&(j=St.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(I,T){let H;return I?T===null||T===ai||T===Zs?H=s.DEPTH24_STENCIL8:T===Fn?H=s.DEPTH32F_STENCIL8:T===zr&&(H=s.DEPTH24_STENCIL8,Tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===Zs?H=s.DEPTH_COMPONENT24:T===Fn?H=s.DEPTH_COMPONENT32F:T===zr&&(H=s.DEPTH_COMPONENT16),H}function S(I,T){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==He&&I.minFilter!==Te?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){const T=new WeakRef(I);n.get(I).__ref=T,p.add(T),x.register(I,T,T)}function C(I){const T=n.get(I).__ref;T!==void 0&&(p.delete(T),x.unregister(T))}function P(I){F(I.target)}function L(I){D(I.target)}function F(I){I.removeEventListener("dispose",P),C(I),X(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function D(I){I.removeEventListener("dispose",L),C(I),et(I)}function k(){for(const I of p){const T=I.deref();T!==void 0&&(T.isRenderTarget===!0?D(T):F(T))}p.clear(),d.clear()}function X(I){const T=n.get(I);if(T.__webglInit===void 0)return;const H=I.source,ct=f.get(H);if(ct){const it=ct[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&z(I),Object.keys(ct).length===0&&f.delete(H)}n.remove(I)}function z(I){const T=n.get(I);s.deleteTexture(T.__webglTexture);const H=I.source,ct=f.get(H);delete ct[T.__cacheKey],o.memory.textures--}function et(I){const T=n.get(I);T.__depthDisposeCallback&&T.__depthDisposeCallback();const H=I.depthTexture;if(H&&H.renderTarget===I&&F(H),I.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let pt=0;pt<T.__webglFramebuffer[it].length;pt++)s.deleteFramebuffer(T.__webglFramebuffer[it][pt]);else s.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)s.deleteFramebuffer(T.__webglFramebuffer[it]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ct=I.textures;for(let it=0,pt=ct.length;it<pt;it++){const St=n.get(ct[it]);St.__webglTexture&&(s.deleteTexture(St.__webglTexture),o.memory.textures--),n.remove(ct[it])}n.remove(I)}let V=0;function Q(){V=0}function Z(){return V}function lt(I){V=I}function Dt(){const I=V;return I>=i.maxTextures&&Tt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,I}function q(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.mipmapsAutoUpdate),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function at(I,T){const H=n.get(I);if(I.isVideoTexture&&Ye(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const ct=I.image;if(ct===null)Tt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(H,I,T);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+T)}function Ct(I,T){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ft(H,I,T);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+T)}function Nt(I,T){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){ft(H,I,T);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+T)}function _t(I,T){const H=n.get(I);if(I.version>0&&H.__version!==I.version){Ut(H,I,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+T)}const Vt={[No]:s.REPEAT,[Un]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},Ce={[He]:s.NEAREST,[vu]:s.NEAREST_MIPMAP_NEAREST,[Cr]:s.NEAREST_MIPMAP_LINEAR,[Te]:s.LINEAR,[To]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},Yt={[yp]:s.NEVER,[Cu]:s.ALWAYS,[Mp]:s.LESS,[Au]:s.LEQUAL,[Sp]:s.EQUAL,[Eu]:s.GEQUAL,[bp]:s.GREATER,[wp]:s.NOTEQUAL};function te(I,T){if(T.type===Fn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Te||T.magFilter===To||T.magFilter===Cr||T.magFilter===Qn||T.minFilter===Te||T.minFilter===To||T.minFilter===Cr||T.minFilter===Qn)&&Tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Vt[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Vt[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Vt[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Ce[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Ce[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===He||T.minFilter!==Cr&&T.minFilter!==Qn||T.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function de(I,T){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",P),E(T));const ct=T.source;let it=f.get(ct);it===void 0&&(it={},f.set(ct,it));const pt=q(T);if(pt!==I.__cacheKey){it[pt]===void 0&&(it[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),it[pt].usedTimes++;const St=it[I.__cacheKey];St!==void 0&&(it[I.__cacheKey].usedTimes--,St.usedTimes===0&&z(T)),I.__cacheKey=pt,I.__webglTexture=it[pt].texture}return H}function rt(I,T,H){return Math.floor(Math.floor(I/H)/T)}function gt(I,T,H,ct){const pt=I.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,H,ct,T.data);else{pt.sort((U,nt)=>U.start-nt.start);let St=0;for(let U=1;U<pt.length;U++){const nt=pt[St],$=pt[U],vt=nt.start+nt.count,dt=rt($.start,T.width,4),mt=rt(nt.start,T.width,4);$.start<=vt+1&&dt===mt&&rt($.start+$.count-1,T.width,4)===dt?nt.count=Math.max(nt.count,$.start+$.count-nt.start):(++St,pt[St]=$)}pt.length=St+1;const j=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),xt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let U=0,nt=pt.length;U<nt;U++){const $=pt[U],vt=Math.floor($.start/4),dt=Math.ceil($.count/4),mt=vt%T.width,Xt=Math.floor(vt/T.width),le=dt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Xt),e.texSubImage2D(s.TEXTURE_2D,0,mt,Xt,le,ht,H,ct,T.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function ft(I,T,H){let ct=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ct=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ct=s.TEXTURE_3D);const it=de(I,T),pt=T.source;e.bindTexture(ct,I.__webglTexture,s.TEXTURE0+H);const St=n.get(pt);if(pt.version!==St.__version||it===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const ht=me.getPrimaries(me.workingColorSpace),Zt=T.colorSpace===qn?null:me.getPrimaries(T.colorSpace),se=T.colorSpace===qn||ht===Zt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let tt=v(T.image,!1,i.maxTextureSize);tt=$t(T,tt);const xt=r.convert(T.format,T.colorSpace),U=r.convert(T.type);let nt=b(T.internalFormat,xt,U,T.normalized,T.colorSpace,T.isVideoTexture);te(ct,T);let $;const vt=T.mipmaps,dt=T.isVideoTexture!==!0,mt=St.__version===void 0||it===!0,Xt=pt.dataReady,le=S(T,tt);if(T.isDepthTexture)nt=y(T.format===Xi,T.type),mt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,xt,U,null));else if(T.isDataTexture)if(vt.length>0){dt&&mt&&e.texStorage2D(s.TEXTURE_2D,le,nt,vt[0].width,vt[0].height);for(let ht=0,Zt=vt.length;ht<Zt;ht++)$=vt[ht],dt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,xt,U,$.data):e.texImage2D(s.TEXTURE_2D,ht,nt,$.width,$.height,0,xt,U,$.data);T.generateMipmaps=!1}else dt?(mt&&e.texStorage2D(s.TEXTURE_2D,le,nt,tt.width,tt.height),Xt&&gt(T,tt,xt,U)):e.texImage2D(s.TEXTURE_2D,0,nt,tt.width,tt.height,0,xt,U,tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){dt&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,le,nt,vt[0].width,vt[0].height,tt.depth);for(let ht=0,Zt=vt.length;ht<Zt;ht++)if($=vt[ht],T.format!==rn)if(xt!==null)if(dt){if(Xt)if(T.layerUpdates.size>0){const se=tu($.width,$.height,T.format,T.type);for(const Rt of T.layerUpdates){const Ie=$.data.subarray(Rt*se/$.data.BYTES_PER_ELEMENT,(Rt+1)*se/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,Rt,$.width,$.height,1,xt,Ie)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,tt.depth,xt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,nt,$.width,$.height,tt.depth,0,$.data,0,0);else Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Xt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,tt.depth,xt,U,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,nt,$.width,$.height,tt.depth,0,xt,U,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{dt&&mt&&e.texStorage2D(s.TEXTURE_2D,le,nt,vt[0].width,vt[0].height);for(let ht=0,Zt=vt.length;ht<Zt;ht++)$=vt[ht],T.format!==rn?xt!==null?dt?Xt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,xt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,nt,$.width,$.height,0,$.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,xt,U,$.data):e.texImage2D(s.TEXTURE_2D,ht,nt,$.width,$.height,0,xt,U,$.data)}else if(T.isDataArrayTexture)if(dt){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,le,nt,tt.width,tt.height,tt.depth),Xt)if(T.layerUpdates.size>0){const ht=tu(tt.width,tt.height,T.format,T.type);for(const Zt of T.layerUpdates){const se=tt.data.subarray(Zt*ht/tt.data.BYTES_PER_ELEMENT,(Zt+1)*ht/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Zt,tt.width,tt.height,1,xt,U,se)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,xt,U,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,xt,U,tt.data);else if(T.isData3DTexture)dt?(mt&&e.texStorage3D(s.TEXTURE_3D,le,nt,tt.width,tt.height,tt.depth),Xt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,xt,U,tt.data)):e.texImage3D(s.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,xt,U,tt.data);else if(T.isFramebufferTexture){if(mt)if(dt)e.texStorage2D(s.TEXTURE_2D,le,nt,tt.width,tt.height);else{let ht=tt.width,Zt=tt.height;for(let se=0;se<le;se++)e.texImage2D(s.TEXTURE_2D,se,nt,ht,Zt,0,xt,U,null),ht>>=1,Zt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),tt.parentNode!==ht){ht.appendChild(tt),d.add(T),ht.onpaint=Zt=>{const se=Zt.changedElements;for(const Rt of d)se.includes(Rt.image)&&(Rt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{const se=s.RGBA,Rt=s.RGBA,Ie=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,se,Rt,Ie,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(vt.length>0){if(dt&&mt){const ht=jt(vt[0]);e.texStorage2D(s.TEXTURE_2D,le,nt,ht.width,ht.height)}for(let ht=0,Zt=vt.length;ht<Zt;ht++)$=vt[ht],dt?Xt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,xt,U,$):e.texImage2D(s.TEXTURE_2D,ht,nt,xt,U,$);T.generateMipmaps=!1}else if(dt){if(mt){const ht=jt(tt);e.texStorage2D(s.TEXTURE_2D,le,nt,ht.width,ht.height)}Xt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,U,tt)}else e.texImage2D(s.TEXTURE_2D,0,nt,xt,U,tt);M(T)&&T.mipmapsAutoUpdate===!0&&_(ct),St.__version=pt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Ut(I,T,H){if(T.image.length!==6)return;const ct=de(I,T),it=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+H);const pt=n.get(it);if(it.version!==pt.__version||ct===!0){e.activeTexture(s.TEXTURE0+H);const St=me.getPrimaries(me.workingColorSpace),j=T.colorSpace===qn?null:me.getPrimaries(T.colorSpace),tt=T.colorSpace===qn||St===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);const xt=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,nt=[];for(let Rt=0;Rt<6;Rt++)!xt&&!U?nt[Rt]=v(T.image[Rt],!0,i.maxCubemapSize):nt[Rt]=U?T.image[Rt].image:T.image[Rt],nt[Rt]=$t(T,nt[Rt]);const $=nt[0],vt=r.convert(T.format,T.colorSpace),dt=r.convert(T.type);let mt=b(T.internalFormat,vt,dt,T.normalized,T.colorSpace);const Xt=T.isVideoTexture!==!0,le=pt.__version===void 0||ct===!0,ht=it.dataReady;let Zt=S(T,$);te(s.TEXTURE_CUBE_MAP,T);let se;if(T.isDepthTexture){if(mt=y(T.format===Xi,T.type),le)if(Xt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,$.width,$.height);else for(let Rt=0;Rt<6;Rt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,mt,$.width,$.height,0,vt,dt,null)}else if(xt){Xt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,mt,$.width,$.height);for(let Rt=0;Rt<6;Rt++){se=nt[Rt].mipmaps;for(let Ie=0;Ie<se.length;Ie++){const cn=se[Ie];T.format!==rn?vt!==null?Xt?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie,0,0,cn.width,cn.height,vt,cn.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie,mt,cn.width,cn.height,0,cn.data):Tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie,0,0,cn.width,cn.height,vt,dt,cn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie,mt,cn.width,cn.height,0,vt,dt,cn.data)}}}else{if(se=T.mipmaps,Xt&&le){se.length>0&&Zt++;const Rt=jt(nt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,mt,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(U){Xt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,nt[Rt].width,nt[Rt].height,vt,dt,nt[Rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,mt,nt[Rt].width,nt[Rt].height,0,vt,dt,nt[Rt].data);for(let Ie=0;Ie<se.length;Ie++){const rs=se[Ie].image[Rt].image;Xt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie+1,0,0,rs.width,rs.height,vt,dt,rs.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie+1,mt,rs.width,rs.height,0,vt,dt,rs.data)}}else{Xt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,vt,dt,nt[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,mt,vt,dt,nt[Rt]);for(let Ie=0;Ie<se.length;Ie++){const cn=se[Ie];Xt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie+1,0,0,vt,dt,cn.image[Rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ie+1,mt,vt,dt,cn.image[Rt])}}}M(T)&&T.mipmapsAutoUpdate===!0&&_(s.TEXTURE_CUBE_MAP),pt.__version=it.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function wt(I,T,H,ct,it,pt){const St=r.convert(H.format,H.colorSpace),j=r.convert(H.type),tt=b(H.internalFormat,St,j,H.normalized,H.colorSpace),xt=n.get(T),U=n.get(H);if(U.__renderTarget=T,!xt.__hasExternalTextures){const nt=Math.max(1,T.width>>pt),$=Math.max(1,T.height>>pt);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,pt,tt,nt,$,T.depth,0,St,j,null):e.texImage2D(it,pt,tt,nt,$,0,St,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),Mt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ct,it,U.__webglTexture,0,Ne(T)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ct,it,U.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(I,T,H){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const ct=T.depthTexture,it=ct&&ct.isDepthTexture?ct.type:null,pt=y(T.stencilBuffer,it),St=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Mt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne(T),pt,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne(T),pt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,I)}else{const ct=T.textures;for(let it=0;it<ct.length;it++){const pt=ct[it],St=r.convert(pt.format,pt.colorSpace),j=r.convert(pt.type),tt=b(pt.internalFormat,St,j,pt.normalized,pt.colorSpace);Mt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne(T),tt,T.width,T.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne(T),tt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,tt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(I,T,H){const ct=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const it=n.get(T.depthTexture);it.__renderTarget=T;const pt=ct?T.depthTexture.image[0]:T.depthTexture.image;(!it.__webglTexture||pt.width!==T.width||pt.height!==T.height)&&(pt.width=T.width,pt.height=T.height,T.depthTexture.needsUpdate=!0),ct?_t(T.depthTexture,0):at(T.depthTexture,0);const St=it.__webglTexture,j=Ne(T),tt=ct?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,xt=T.depthTexture.format===Xi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Qi)Mt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,tt,St,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,xt,tt,St,0);else if(T.depthTexture.format===Xi)Mt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,tt,St,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,xt,tt,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(I){const T=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const ct=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ct){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ct.removeEventListener("dispose",it)};ct.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=ct}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(H)for(let ct=0;ct<6;ct++)Gt(T.__webglFramebuffer[ct],I,ct);else I.texture.mipmaps.length>0?Gt(T.__webglFramebuffer[0],I,0):Gt(T.__webglFramebuffer,I,0);else if(H){T.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ct]),T.__webglDepthbuffer[ct]===void 0)T.__webglDepthbuffer[ct]=s.createRenderbuffer(),ie(T.__webglDepthbuffer[ct],I,!1);else{const it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ct];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,pt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ie(T.__webglDepthbuffer,I,!1);else{const it=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,pt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(I,T,H){const ct=n.get(I);T!==void 0&&wt(ct.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&fe(I)}function be(I){const T=I.texture,H=n.get(I),ct=n.get(T);I.addEventListener("dispose",L),E(I);const it=I.textures,pt=I.isWebGLCubeRenderTarget===!0,St=it.length>1;if(St||(ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture()),ct.__version=T.version,o.memory.textures++),pt){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let tt=0;tt<T.mipmaps.length;tt++)H.__webglFramebuffer[j][tt]=s.createFramebuffer()}else H.__webglFramebuffer[j]=s.createFramebuffer()}else{if(T.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)H.__webglFramebuffer[j]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(St)for(let j=0,tt=it.length;j<tt;j++){const xt=n.get(it[j]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Mt(I)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<it.length;j++){const tt=it[j];H.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[j]);const xt=r.convert(tt.format,tt.colorSpace),U=r.convert(tt.type),nt=b(tt.internalFormat,xt,U,tt.normalized,tt.colorSpace,I.isXRRenderTarget===!0),$=Ne(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,nt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,H.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,ct.__webglTexture),te(s.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)wt(H.__webglFramebuffer[j][tt],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else wt(H.__webglFramebuffer[j],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(T)?_(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(St){for(let j=0,tt=it.length;j<tt;j++){const xt=it[j],U=n.get(xt);let nt=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(nt=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,U.__webglTexture),te(nt,xt),wt(H.__webglFramebuffer,I,xt,s.COLOR_ATTACHMENT0+j,nt,0),M(xt)&&_(nt)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(j=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,ct.__webglTexture),te(j,T),T.mipmaps.length>0)for(let tt=0;tt<T.mipmaps.length;tt++)wt(H.__webglFramebuffer[tt],I,T,s.COLOR_ATTACHMENT0,j,tt);else wt(H.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,j,0);M(T)?_(j):T.mipmaps.length>0&&s.texParameteri(j,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&fe(I)}function B(I){const T=I.textures;for(let H=0,ct=T.length;H<ct;H++){const it=T[H];if(M(it)&&it.mipmapsAutoUpdate===!0){const pt=w(I),St=n.get(it).__webglTexture;e.bindTexture(pt,St),_(pt),e.unbindTexture()}}}const je=[];function he(I){if(I.samples>0){if(Mt(I)===!1){const T=I.textures,H=I.width,ct=I.height;let it=s.COLOR_BUFFER_BIT;const pt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(I),j=T.length>1;if(j)for(let xt=0;xt<T.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<T.length;xt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const U=n.get(T[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,U,0)}s.blitFramebuffer(0,0,H,ct,0,0,H,ct,it,s.NEAREST),l===!0&&(je.length=0,je.push(s.COLOR_ATTACHMENT0+xt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&je.push(pt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,je))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let xt=0;xt<T.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const U=n.get(T[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,U,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ne(I){return Math.min(i.maxSamples,I.samples)}function Mt(I){const T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ye(I){const T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function $t(I,T){const H=I.colorSpace,ct=I.format,it=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==ts&&H!==qn&&(me.getTransfer(H)===Re?(ct!==rn||it!==Xn)&&Tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ht("WebGLTextures: Unsupported texture color space:",H)),T}function jt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=Q,this.getTextureUnits=Z,this.setTextureUnits=lt,this.setTexture2D=at,this.setTexture2DArray=Ct,this.setTexture3D=Nt,this.setTextureCube=_t,this.rebindTextures=ge,this.setupRenderTarget=be,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Mt,this.dispose=k}function Om(s,t){function e(n,i=qn){let r;const o=me.getTransfer(i);if(n===Xn)return s.UNSIGNED_BYTE;if(n===dc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Su)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return s.BYTE;if(n===yu)return s.SHORT;if(n===zr)return s.UNSIGNED_SHORT;if(n===uc)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===on)return s.HALF_FLOAT;if(n===bu)return s.ALPHA;if(n===wu)return s.RGB;if(n===rn)return s.RGBA;if(n===Qi)return s.DEPTH_COMPONENT;if(n===Xi)return s.DEPTH_STENCIL;if(n===pc)return s.RED;if(n===ta)return s.RED_INTEGER;if(n===gs)return s.RG;if(n===mc)return s.RG_INTEGER;if(n===gc)return s.RGBA_INTEGER;if(n===Ao||n===Eo||n===Co||n===Ro)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===Al||n===El||n===Cl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Pl||n===Il||n===Dl||n===Ll||n===Uo||n===Nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Pl)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return r.COMPRESSED_R11_EAC;if(n===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ul||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Zl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ul)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Jl||n===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===jl||n===Fo||n===tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ze({vertexShader:Vb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wb extends Si{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const x=typeof XRWebGLBinding<"u",m=new Hb,g={},v=e.getContextAttributes();let M=null,_=null;const w=[],b=[],y=new J;let S=null,E=null;const C=new fn;C.viewport=new Se;const P=new fn;P.viewport=new Se;const L=[C,P],F=new ym;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let at=w[q];return at===void 0&&(at=new dl,w[q]=at),at.getTargetRaySpace()},this.getControllerGrip=function(q){let at=w[q];return at===void 0&&(at=new dl,w[q]=at),at.getGripSpace()},this.getHand=function(q){let at=w[q];return at===void 0&&(at=new dl,w[q]=at),at.getHandSpace()};function X(q){const at=b.indexOf(q.inputSource);if(at===-1)return;const Ct=w[at];Ct!==void 0&&(Ct.update(q.inputSource,q.frame,c||o),Ct.dispatchEvent({type:q.type,data:q.inputSource}))}function z(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",et);for(let q=0;q<w.length;q++){const at=b[q];at!==null&&(b[q]=null,w[q].disconnect(at))}D=null,k=null,m.reset();for(const q in g)delete g[q];if(t.setRenderTarget(M),f=null,u=null,d=null,i=null,_=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(y.width,y.height,!1),E!==null){const q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",z),i.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Nt=null,_t=null;v.depth&&(_t=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=v.stencil?Xi:Qi,Nt=v.stencil?Zs:ai);const Vt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Xe(u.textureWidth,u.textureHeight,{format:rn,type:Xn,depthTexture:new Qs(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Ct={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Ct),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Xe(f.framebufferWidth,f.framebufferHeight,{format:rn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(q){for(let at=0;at<q.removed.length;at++){const Ct=q.removed[at],Nt=b.indexOf(Ct);Nt>=0&&(b[Nt]=null,w[Nt].disconnect(Ct))}for(let at=0;at<q.added.length;at++){const Ct=q.added[at];let Nt=b.indexOf(Ct);if(Nt===-1){for(let Vt=0;Vt<w.length;Vt++)if(Vt>=b.length){b.push(Ct),Nt=Vt;break}else if(b[Vt]===null){b[Vt]=Ct,Nt=Vt;break}if(Nt===-1)break}const _t=w[Nt];_t&&_t.connect(Ct)}}function V(q,at){at===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(at.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let at=q.near,Ct=q.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),F.near=P.near=C.near=at,F.far=P.far=C.far=Ct,(D!==F.near||k!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,k=F.far),F.layers.mask=q.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const Nt=q.parent,_t=F.cameras;V(F,Nt);for(let Vt=0;Vt<_t.length;Vt++)V(_t[Vt],Nt);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,F,Nt)};function Q(q,at,Ct){Ct===null?q.matrix.copy(at.matrixWorld):(q.matrix.copy(Ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(at.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(at.projectionMatrix),q.projectionMatrixInverse.copy(at.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=kr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(q){return g[q]};let Z=null;function lt(q,at){if(h=at.getViewerPose(c||o),p=at,h!==null){const Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let Nt=!1;Ct.length!==F.cameras.length&&(F.cameras.length=0,Nt=!0);for(let Yt=0;Yt<Ct.length;Yt++){const te=Ct[Yt];let de=null;if(f!==null)de=f.getViewport(te);else{const gt=d.getViewSubImage(u,te);de=gt.viewport,Yt===0&&(t.setRenderTargetTextures(_,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(_))}let rt=L[Yt];rt===void 0&&(rt=new fn,rt.layers.enable(Yt),rt.viewport=new Se,L[Yt]=rt),rt.matrix.fromArray(te.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(te.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(de.x,de.y,de.width,de.height),Yt===0&&(F.matrix.copy(rt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Nt===!0&&F.cameras.push(rt)}const _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Yt=d.getDepthInformation(Ct[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,i.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Yt=0;Yt<Ct.length;Yt++){const te=Ct[Yt].camera;if(te){let de=g[te];de||(de=new Bu,g[te]=de);const rt=d.getCameraImage(te);de.sourceTexture=rt}}}}for(let Ct=0;Ct<w.length;Ct++){const Nt=b[Ct],_t=w[Ct];Nt!==null&&_t!==void 0&&_t.update(Nt,at,c||o)}Z&&Z(q,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}const Dt=new Em;Dt.setAnimationLoop(lt),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}}const Xb=new Wt,Bm=new ee;Bm.set(-1,0,0,0,1,0,0,0,1);function qb(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Jp(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,M,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const v=t.get(g),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(_)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Yb(s,t,e,n){let i={},r={};function o(v,M){const _=M.program;n.uniformBlockBinding(v,_,i[v.id])}function a(v,M){let _=i[v.id];_===void 0&&(p(v),_=l(v),i[v.id]=_,v.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(v,w);const b=t.render.frame;r[v.id]!==b&&(c(v),r[v.id]=b)}function l(v){const M=s.createBuffer(),_=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,_,w),s.bindBuffer(s.UNIFORM_BUFFER,null),M}function c(v){const M=i[v.id],_=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let b=0,y=_.length;b<y;b++){const S=_[b];if(Array.isArray(S))for(let E=0,C=S.length;E<C;E++)h(S[E],b,E,w);else h(S,b,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,M,_,w){if(u(v,M,_,w)===!0){const b=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let E=0;E<y.length;E++){const C=y[E],P=x(C,!0);d(C,v.__data,S),S+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,v.__data)}}function d(v,M,_){typeof v=="number"||typeof v=="boolean"?M[_]=v:v.isMatrix3?(M[_]=v.elements[0],M[_+1]=v.elements[1],M[_+2]=v.elements[2],M[_+3]=0,M[_+4]=v.elements[3],M[_+5]=v.elements[4],M[_+6]=v.elements[5],M[_+7]=0,M[_+8]=v.elements[6],M[_+9]=v.elements[7],M[_+10]=v.elements[8],M[_+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-_),_):v.toArray(M,_)}function u(v,M,_,w){const b=v.value,y=M+"_"+_;if(Array.isArray(b)){w[y]===void 0&&(w[y]=[]);const S=w[y];let E=!1;for(let C=0;C<b.length;C++)f(b[C],S,C)===!0&&(E=!0);return E}return f(b,w,y)}function f(v,M,_){if(M[_]===void 0)return typeof v=="number"||typeof v=="boolean"?M[_]=v:ArrayBuffer.isView(v)?M[_]=v.slice():M[_]=v.clone(),!0;{const w=M[_];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return M[_]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){const M=v.uniforms;let _=0;const w=16;for(let y=0,S=M.length;y<S;y++){const E=Array.isArray(M[y])?M[y]:[M[y]];for(let C=0,P=E.length;C<P;C++){const L=E[C],F=Array.isArray(L.value)?L.value:[L.value],D=Array.isArray(M[y])||Array.isArray(L.value);let k=_;for(let z=0,et=F.length;z<et;z++){const V=F[z],Q=x(V,D),Z=_%w,lt=Z%Q.boundary,Dt=Z+lt;_+=lt,Dt!==0&&w-Dt<Q.storage&&(_+=w-Dt),z===0&&(k=_),_+=Q.storage}const X=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new X((_-k)/Float32Array.BYTES_PER_ELEMENT),L.__offset=k}}const b=_%w;return b>0&&(_+=w-b),v.__size=_,v.__cache={},this}function x(v,M){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=16,_.storage=48):v.isMatrix4?(_.boundary=16,_.storage=64):v.isTexture?Tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(_.boundary=16,_.storage=v.byteLength):Tt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(_.boundary=16,_.storage=Math.ceil(_.storage/16)*16),_}function m(v){const M=v.target;M.removeEventListener("dispose",m),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function g(){for(const v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}const Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function $b(){return Ai===null&&(Ai=new _n(Zb,16,16,gs,on),Ai.name="DFG_LUT",Ai.minFilter=Te,Ai.magFilter=Te,Ai.wrapS=Un,Ai.wrapT=Un,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class zm{constructor(t={}){const{canvas:e=Ap(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Xn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const x=f,m=new Set([gc,mc,ta]),g=new Set([Xn,ai,zr,Zs,dc,fc]),v=new Uint32Array(4),M=new Int32Array(4),_={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const y=[],S=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,L=null,F=null,D=null,k=null;this._outputColorSpace=En;let X=0,z=0,et=null,V=-1,Q=null;const Z=new Se,lt=new Se;let Dt=null;const q=new K(0);let at=0,Ct=e.width,Nt=e.height,_t=1,Vt=null,Ce=null;const Yt=new Se(0,0,Ct,Nt),te=new Se(0,0,Ct,Nt);let de=!1;const rt=new Ks,gt=new ea;let ft=!1,Ut=!1;const wt=new Wt,ie=new R,Gt=new Se,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function be(){return et===null?_t:1}let B=n;function je(A,O){return e.getContext(A,O)}let he,Ne,Mt,Ye,$t,jt,I,T,H,ct,it,pt,St,j,tt,xt,U,nt,$,vt,dt,mt,Xt;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),B===null){const O="webgl2";if(B=je(O,A),B===null)throw je(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}le()}catch(A){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Ht("WebGLRenderer: "+A.message),A}function le(){he=new tS(B),he.init(),dt=new Om(B,he),Ne=new HM(B,he,t,dt),Mt=new zb(B,he),Ne.reversedDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),F=B.createFramebuffer(),D=B.createFramebuffer(),k=B.createFramebuffer(),Ye=new iS(B),$t=new Tb,jt=new kb(B,he,Mt,$t,Ne,dt,Ye),I=new jM(C),T=new r1(B),mt=new VM(B,T),H=new eS(B,T,Ye,mt),ct=new rS(B,H,T,mt,Ye),nt=new sS(B,Ne,jt),tt=new WM($t),it=new wb(C,I,he,Ne,mt,tt),pt=new qb(C,$t),St=new Eb,j=new Lb(he),U=new kM(C,I,Mt,ct,p,l),xt=new Bb(C,ct,Ne),Xt=new Yb(B,Ye,Ne,Mt),$=new GM(B,he,Ye),vt=new nS(B,he,Ye),Ye.programs=it.programs,C.capabilities=Ne,C.extensions=he,C.properties=$t,C.renderLists=St,C.shadowMap=xt,C.state=Mt,C.info=Ye}x!==Xn&&(E=new aS(x,e.width,e.height,a,i,r));const ht=new Wb(C,B);this.xr=ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(A){A!==void 0&&(_t=A,this.setSize(Ct,Nt,!1))},this.getSize=function(A){return A.set(Ct,Nt)},this.setSize=function(A,O,Y=!0){if(ht.isPresenting){Tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ct=A,Nt=O,e.width=Math.floor(A*_t),e.height=Math.floor(O*_t),Y===!0&&(e.style.width=A+"px",e.style.height=O+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Ct*_t,Nt*_t).floor()},this.setDrawingBufferSize=function(A,O,Y){Ct=A,Nt=O,_t=Y,e.width=Math.floor(A*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,A,O)},this.setEffects=function(A){if(x===Xn){Ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let O=0;O<A.length;O++)if(A[O].isOutputPass===!0){Tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Yt)},this.setViewport=function(A,O,Y,G){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,O,Y,G),Mt.viewport(Z.copy(Yt).multiplyScalar(be()).round())},this.getScissor=function(A){return A.copy(te)},this.setScissor=function(A,O,Y,G){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,O,Y,G),Mt.scissor(lt.copy(te).multiplyScalar(be()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){Mt.setScissorTest(de=A)},this.setOpaqueSort=function(A){Vt=A},this.setTransparentSort=function(A){Ce=A},this.getClearColor=function(A){return A.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(A=!0,O=!0,Y=!0){let G=0;if(A){let W=!1;if(et!==null){const bt=et.texture.format;W=m.has(bt)}if(W){const bt=et.texture.type,Ft=g.has(bt),yt=U.getClearColor(),Pt=U.getClearAlpha(),kt=yt.r,ne=yt.g,xe=yt.b;Ft?(v[0]=kt,v[1]=ne,v[2]=xe,v[3]=Pt,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=kt,M[1]=ne,M[2]=xe,M[3]=Pt,B.clearBufferiv(B.COLOR,0,M))}else G|=B.COLOR_BUFFER_BIT}O&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),U.dispose(),St.dispose(),j.dispose(),jt.dispose(),$t.dispose(),I.dispose(),ct.dispose(),H.dispose(),mt.dispose(),Xt.dispose(),it.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",_d),ht.removeEventListener("sessionend",yd),ws.stop()};function Zt(A){A.preventDefault(),Vo("WebGLRenderer: Context Lost."),P=!0}function se(){Vo("WebGLRenderer: Context Restored."),P=!1;const A=Ye.autoReset,O=xt.enabled,Y=xt.autoUpdate,G=xt.needsUpdate,W=xt.type;le(),Ye.autoReset=A,xt.enabled=O,xt.autoUpdate=Y,xt.needsUpdate=G,xt.type=W}function Rt(A){Ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ie(A){const O=A.target;O.removeEventListener("dispose",Ie),cn(O)}function cn(A){rs(A),$t.remove(A)}function rs(A){const O=$t.get(A).programs;O!==void 0&&(O.forEach(function(Y){it.releaseProgram(Y)}),A.isShaderMaterial&&it.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,Y,G,W,bt){O===null&&(O=fe);const Ft=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=og(A,O,Y,G,W);Mt.setMaterial(G,Ft);let Pt=Y.index,kt=1;if(G.wireframe===!0){if(Pt=H.getWireframeAttribute(Y),Pt===void 0)return;kt=2}const ne=Y.drawRange,xe=Y.attributes.position;let Ot=ne.start*kt,ve=(ne.start+ne.count)*kt;bt!==null&&(Ot=Math.max(Ot,bt.start*kt),ve=Math.min(ve,(bt.start+bt.count)*kt)),Pt!==null?(Ot=Math.max(Ot,0),ve=Math.min(ve,Pt.count)):xe!=null&&(Ot=Math.max(Ot,0),ve=Math.min(ve,xe.count));const tn=ve-Ot;if(tn<0||tn===1/0)return;mt.setup(W,G,yt,Y,Pt);let Be,Ue=$;if(Pt!==null&&(Be=T.get(Pt),Ue=vt,Ue.setIndex(Be)),W.isMesh)G.wireframe===!0?(Mt.setLineWidth(G.wireframeLinewidth*be()),Ue.setMode(B.LINES)):Ue.setMode(B.TRIANGLES);else if(W.isLine){let Mn=G.linewidth;Mn===void 0&&(Mn=1),Mt.setLineWidth(Mn*be()),W.isLineSegments?Ue.setMode(B.LINES):W.isLineLoop?Ue.setMode(B.LINE_LOOP):Ue.setMode(B.LINE_STRIP)}else W.isPoints?Ue.setMode(B.POINTS):W.isSprite&&Ue.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ue.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Mn=W._multiDrawStarts,Bt=W._multiDrawCounts,In=W._multiDrawCount,Ae=Pt?T.get(Pt).bytesPerElement:1,Ts=$t.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<In;Sn++)Ts.setValue(B,"_gl_DrawID",Sn),Ue.render(Mn[Sn]/Ae,Bt[Sn])}else if(W.isInstancedMesh)Ue.renderInstances(Ot,tn,W.count);else if(Y.isInstancedBufferGeometry){const Mn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Bt=Math.min(Y.instanceCount,Mn);Ue.renderInstances(Ot,tn,Bt)}else Ue.render(Ot,tn)};function vd(A,O,Y,G){L!==null&&A.isNodeMaterial&&L.setObject(G,A),ft===!0&&tt.setState(A,Y,!1),A.transparent===!0&&A.side===Fe&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,eo(A,O,G),A.side=Ji,A.needsUpdate=!0,eo(A,O,G),A.side=Fe):eo(A,O,G)}this.compile=function(A,O,Y=null){Y===null&&(Y=A),L!==null&&L.renderStart(A,O,Y),b=j.get(Y),b.init(O),S.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),Ut=this.localClippingEnabled,ft=tt.init(this.clippingPlanes,Ut),ft===!0&&tt.setGlobalState(this.clippingPlanes,O),L!==null&&xt.render(b.state.shadowsArray,Y,O);const G=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const bt=W.material;if(bt)if(Array.isArray(bt))for(let Ft=0;Ft<bt.length;Ft++){const yt=bt[Ft];vd(yt,Y,O,W),G.add(yt)}else vd(bt,Y,O,W),G.add(bt)}),b=S.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(A,O,Y=null){const G=this.compile(A,O,Y);return new Promise(W=>{function bt(){if(G.forEach(function(Ft){const Pt=$t.get(Ft).currentProgram;(Pt===void 0||Pt.isReady())&&G.delete(Ft)}),G.size===0){W(A);return}setTimeout(bt,10)}he.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Jc=null;function sg(A){Jc&&Jc(A)}function _d(){ws.stop()}function yd(){ws.start()}const ws=new Em;ws.setAnimationLoop(sg),typeof self<"u"&&ws.setContext(self),this.setAnimationLoop=function(A){Jc=A,ht.setAnimationLoop(A),A===null?ws.stop():ws.start()},ht.addEventListener("sessionstart",_d),ht.addEventListener("sessionend",yd),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){Ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(A,O);const Y=ht.enabled===!0&&ht.isPresenting===!0,G=E!==null&&(et===null||Y)&&E.begin(C,et);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,O,et),b=j.get(A,S.length),b.init(O),b.state.textureUnits=jt.getTextureUnits(),S.push(b),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?gt.setFromArrayCamera(O):rt.setFromProjectionMatrix(wt,jn,O.reversedDepth),Ut=this.localClippingEnabled,ft=tt.init(this.clippingPlanes,Ut),w=St.get(A,y.length),w.init(),y.push(w),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&Kc(Ft,O,-1/0,C.sortObjects)}Kc(A,O,0,C.sortObjects),w.finish(),L!==null&&L.updateLights(b.state.lightsArray),C.sortObjects===!0&&w.sort(Vt,Ce),ge=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ge&&U.addToRenderList(w,A),this.info.autoReset===!0&&this.info.reset(),ft===!0&&tt.beginShadows();const W=b.state.shadowsArray;if(xt.render(W,A,O),ft===!0&&tt.endShadows(),(G&&E.hasRenderPass())===!1){const Ft=w.opaque,yt=w.transmissive;if(b.setupLights(),O.isArrayCamera){const Pt=O.cameras;if(yt.length>0)for(let kt=0,ne=Pt.length;kt<ne;kt++){const xe=Pt[kt];Sd(Ft,yt,A,xe)}ge&&U.render(A);for(let kt=0,ne=Pt.length;kt<ne;kt++){const xe=Pt[kt];Md(w,A,xe,xe.viewport)}}else yt.length>0&&Sd(Ft,yt,A,O),ge&&U.render(A),Md(w,A,O)}et!==null&&z===0&&(jt.updateMultisampleRenderTarget(et),jt.updateRenderTargetMipmap(et)),G&&E.end(C),A.isScene===!0&&A.onAfterRender(C,A,O),mt.resetDefaultState(),V=-1,Q=null,S.pop(),S.length>0?(b=S[S.length-1],jt.setTextureUnits(b.state.textureUnits),ft===!0&&tt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,y.pop(),y.length>0?w=y[y.length-1]:w=null,L!==null&&L.renderEnd()};function Kc(A,O,Y,G){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){const Ft=O.isArrayCamera?gt:rt;if(!A.frustumCulled||A.intersectsFrustum(Ft)){G&&Gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(wt);const yt=ct.update(A),Pt=A.material;Pt.visible&&w.push(A,yt,Pt,Y,Gt.z,null,O)}}else if(A.isMesh||A.isLine||A.isPoints){const Ft=O.isArrayCamera?gt:rt;if(!A.frustumCulled||A.intersectsFrustum(Ft)){const yt=ct.update(A),Pt=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Gt.copy(A.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Gt.copy(yt.boundingSphere.center)),Gt.applyMatrix4(A.matrixWorld).applyMatrix4(wt)),Array.isArray(Pt)){const kt=yt.groups;for(let ne=0,xe=kt.length;ne<xe;ne++){const Ot=kt[ne],ve=Pt[Ot.materialIndex];ve&&ve.visible&&w.push(A,yt,ve,Y,Gt.z,Ot,O)}}else Pt.visible&&w.push(A,yt,Pt,Y,Gt.z,null,O)}}}const bt=A.children;for(let Ft=0,yt=bt.length;Ft<yt;Ft++)Kc(bt[Ft],O,Y,G)}function Md(A,O,Y,G){const{opaque:W,transmissive:bt,transparent:Ft}=A;b.setupLightsView(Y),ft===!0&&tt.setGlobalState(C.clippingPlanes,Y),G&&Mt.viewport(Z.copy(G)),W.length>0&&ua(W,O,Y),bt.length>0&&ua(bt,O,Y),Ft.length>0&&ua(Ft,O,Y),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Sd(A,O,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ot=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Xe(1,1,{generateMipmaps:!0,type:Ot?on:Xn,minFilter:Qn,samples:Math.max(4,Ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}const bt=b.state.transmissionRenderTarget[G.id],Ft=G.viewport||Z;bt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const yt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),kt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(q),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),ge&&U.render(Y);const ne=C.toneMapping;C.toneMapping=yi;const xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ft===!0&&tt.setGlobalState(C.clippingPlanes,G),ua(A,Y,G),jt.updateMultisampleRenderTarget(bt),jt.updateRenderTargetMipmap(bt),he.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let ve=0,tn=O.length;ve<tn;ve++){const Be=O[ve],{object:Ue,geometry:Mn,material:Bt,group:In}=Be;if(Bt.side===Fe&&Ue.layers.test(G.layers)){const Ae=Bt.side;Bt.side=Rn,Bt.needsUpdate=!0,bd(Ue,Y,G,Mn,Bt,In),Bt.side=Ae,Bt.needsUpdate=!0,Ot=!0}}Ot===!0&&(jt.updateMultisampleRenderTarget(bt),jt.updateRenderTargetMipmap(bt))}C.setRenderTarget(yt,Pt,kt),C.setClearColor(q,at),xe!==void 0&&(G.viewport=xe),C.toneMapping=ne}function ua(A,O,Y){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,bt=A.length;W<bt;W++){const Ft=A[W],{object:yt,geometry:Pt,group:kt}=Ft;let ne=Ft.material;ne.allowOverride===!0&&G!==null&&(ne=G),yt.layers.test(Y.layers)&&bd(yt,O,Y,Pt,ne,kt)}}function bd(A,O,Y,G,W,bt){L!==null&&W.isNodeMaterial&&L.setObject(A,W),A.onBeforeRender(C,O,Y,G,W,bt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(C,O,Y,G,A,bt),W.transparent===!0&&W.side===Fe&&W.forceSinglePass===!1?(W.side=Rn,W.needsUpdate=!0,C.renderBufferDirect(Y,O,G,W,A,bt),W.side=Ji,W.needsUpdate=!0,C.renderBufferDirect(Y,O,G,W,A,bt),W.side=Fe):C.renderBufferDirect(Y,O,G,W,A,bt),A.onAfterRender(C,O,Y,G,W,bt)}function wd(A){let O=0;for(const Y of A)Y.texture!==null&&O++;return O}function eo(A,O,Y){O.isScene!==!0&&(O=fe);const G=$t.get(A),W=b.state.lights,bt=b.state.shadowsArray,Ft=W.state.version,yt=it.getParameters(A,W.state,bt,O,Y,b.state.lightProbeGridArray),Pt=it.getProgramCacheKey(yt);let kt=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=I.get(A.envMap||G.environment,ne),G.envMapRotation=G.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Ie),kt=new Map,G.programs=kt,G.programVariants=new Map);let xe=kt.get(Pt);if(xe!==void 0){if(G.currentProgram===xe&&G.lightsStateVersion===Ft)return Ad(A,yt),xe}else yt.uniforms=it.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,Y,yt),A.onBeforeCompile(yt,C),xe=it.acquireProgram(yt,Pt),kt.set(Pt,xe),G.uniforms=yt.uniforms;const Ot=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ot.clippingPlanes=tt.uniform),Ad(A,yt),G.needsLights=lg(A),G.lightsStateVersion=Ft,G.needsLights&&(Ot.ambientLightColor.value=W.state.ambient,Ot.lightProbe.value=W.state.probe,Ot.sunLights.value=W.state.sun,Ot.sunLightShadows.value=W.state.sunShadow,Ot.directionalLights.value=W.state.directional,Ot.directionalLightShadows.value=W.state.directionalShadow,Ot.spotLights.value=W.state.spot,Ot.spotLightShadows.value=W.state.spotShadow,Ot.rectAreaLights.value=W.state.rectArea,Ot.ltc_1.value=W.state.rectAreaLTC1,Ot.ltc_2.value=W.state.rectAreaLTC2,Ot.pointLights.value=W.state.point,Ot.pointLightShadows.value=W.state.pointShadow,Ot.hemisphereLights.value=W.state.hemi,Ot.sunShadowMatrix.value=W.state.sunShadowMatrix,Ot.sunShadowCascade.value=W.state.sunShadowCascade,Ot.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ot.spotLightMatrix.value=W.state.spotLightMatrix,Ot.spotLightMap.value=W.state.spotLightMap,Ot.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=wd(b.state.lightProbeGridArray),G.currentProgram=xe,G.uniformsList=null,xe}function rg(A,O,Y,G,W){const bt=$t.get(A),Ft=bt.currentProgram.id+","+G+","+W;let yt=bt.programVariants.get(Ft);return yt===void 0?(yt=eo(A,O,Y),bt.programVariants.set(Ft,yt)):(bt.currentProgram=yt,bt.uniformsList=null,bt.outputColorSpace=G,bt.toneMapping=W),yt}function Td(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=fl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function Ad(A,O){const Y=$t.get(A);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function og(A,O,Y,G,W){O.isScene!==!0&&(O=fe),jt.resetTextureUnits();const bt=O.fog,Ft=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,yt=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:me.workingColorSpace,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,kt=I.get(G.envMap||Ft,Pt),ne=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,xe=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ot=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,tn=!!Y.morphAttributes.color;let Be=yi;G.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Be=C.toneMapping);const Ue=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Mn=Ue!==void 0?Ue.length:0,Bt=$t.get(G),In=b.state.lights;if(ft===!0&&(Ut===!0||A!==Q)){const Ve=A===Q&&G.id===V;tt.setState(G,A,Ve)}let Ae=!1,Ts=!1;G.version===Bt.__version?Bt.needsLights&&Bt.lightsStateVersion!==In.state.version||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==kt||G.fog===!0&&Bt.fog!==bt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==tt.numPlanes||Bt.numIntersection!==tt.numIntersection)||Bt.vertexAlphas!==ne||Bt.vertexTangents!==xe||Bt.morphTargets!==Ot||Bt.morphNormals!==ve||Bt.morphColors!==tn||Bt.morphTargetsCount!==Mn||Bt.numLightProbeGrids!==wd(b.state.lightProbeGridArray)?Ae=!0:(Bt.outputColorSpace!==yt||Bt.toneMapping!==Be)&&(Ts=!0):(Ae=!0,Bt.__version=G.version);let Sn=Bt.currentProgram;(Ae===!0||Ts===!0)&&(Sn=Ts===!0?rg(G,O,W,yt,Be):eo(G,O,W),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Sn,Bt));let da=!1,os=!1,As=!1;const ye=Sn.getUniforms(),gn=Bt.uniforms;if(Mt.useProgram(Sn.program)&&(da=!0,os=!0,As=!0),G.id!==V&&(V=G.id,os=!0),da||Q!==A){Mt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ye.setValue(B,"projectionMatrix",A.projectionMatrix),ye.setValue(B,"viewMatrix",A.matrixWorldInverse);const hn=ye.map.cameraPosition;hn!==void 0&&hn.setValue(B,ie.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&ye.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,os=!0,As=!0)}if(Bt.needsLights&&(In.state.sunShadowMap.length>0&&ye.setValue(B,"sunShadowMap",In.state.sunShadowMap,jt),In.state.directionalShadowMap.length>0&&ye.setValue(B,"directionalShadowMap",In.state.directionalShadowMap,jt),In.state.spotShadowMap.length>0&&ye.setValue(B,"spotShadowMap",In.state.spotShadowMap,jt),In.state.pointShadowMap.length>0&&ye.setValue(B,"pointShadowMap",In.state.pointShadowMap,jt)),W.isSkinnedMesh){ye.setOptional(B,W,"bindMatrix"),ye.setOptional(B,W,"bindMatrixInverse");const Ve=W.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ye.setValue(B,"boneTexture",Ve.boneTexture,jt))}W.isBatchedMesh&&(ye.setOptional(B,W,"batchingTexture"),ye.setValue(B,"batchingTexture",W._matricesTexture,jt),ye.setOptional(B,W,"batchingIdTexture"),ye.setValue(B,"batchingIdTexture",W._indirectTexture,jt),ye.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&ye.setValue(B,"batchingColorTexture",W._colorsTexture,jt));const hi=Y.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&nt.update(W,Y,Sn),(os||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,ye.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(gn.envMapIntensity.value=O.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=$b()),os){if(ye.setValue(B,"toneMappingExposure",C.toneMappingExposure),Bt.needsLights&&ag(gn,As),bt&&G.fog===!0&&pt.refreshFogUniforms(gn,bt),pt.refreshMaterialUniforms(gn,G,_t,Nt,b.state.transmissionRenderTarget[A.id]),Bt.needsLights&&Bt.numLightProbeGrids>0){const Ve=_;let hn=0;for(const Oi of b.state.lightProbeGridArray)Oi.texture!==null&&(Ve.textures[hn]=Oi.texture,Ve.min[hn]=Oi.boundingBox.min,Ve.max[hn]=Oi.boundingBox.max,Ve.resolution[hn]=Oi.resolution,hn++);for(const Oi in Ve)Ve[Oi].length=hn;gn.probesSH.value=Ve.textures,gn.probesMin.value=Ve.min,gn.probesMax.value=Ve.max,gn.probesResolution.value=Ve.resolution}fl.upload(B,Td(Bt),gn,jt)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(fl.upload(B,Td(Bt),gn,jt),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(B,"center",W.center),ye.setValue(B,"modelViewMatrix",W.modelViewMatrix),ye.setValue(B,"normalMatrix",W.normalMatrix),ye.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const Ve=G.uniformsGroups;for(let hn=0,Oi=Ve.length;hn<Oi;hn++){const Cd=Ve[hn];Xt.update(Cd,Sn),Xt.bind(Cd,Sn)}}return Sn}function ag(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.sunLights.needsUpdate=O,A.sunLightShadows.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function lg(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(A,O,Y){const G=$t.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),$t.get(A.texture).__webglTexture=O,$t.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,O){const Y=$t.get(A);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,Y=0){et=A,X=O,z=Y;let G=null,W=!1,bt=!1;if(A){const yt=$t.get(A);if(yt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(B.FRAMEBUFFER,yt.__webglFramebuffer),Z.copy(A.viewport),lt.copy(A.scissor),Dt=A.scissorTest,Mt.viewport(Z),Mt.scissor(lt),Mt.setScissorTest(Dt),V=-1;return}else if(yt.__webglFramebuffer===void 0)jt.setupRenderTarget(A);else if(yt.__hasExternalTextures)jt.rebindTextures(A,$t.get(A.texture).__webglTexture,$t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ne=A.depthTexture;if(yt.__boundDepthTexture!==ne){if(ne!==null&&$t.has(ne)&&(A.width!==ne.image.width||A.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(A)}}const Pt=A.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);const kt=$t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?G=kt[O][Y]:G=kt[O],W=!0):A.samples>0&&jt.useMultisampledRTT(A)===!1?G=$t.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,Z.copy(A.viewport),lt.copy(A.scissor),Dt=A.scissorTest}else Z.copy(Yt).multiplyScalar(_t).floor(),lt.copy(te).multiplyScalar(_t).floor(),Dt=de;if(Y!==0&&(G=F),Mt.bindFramebuffer(B.FRAMEBUFFER,G)&&Mt.drawBuffers(A,G),Mt.viewport(Z),Mt.scissor(lt),Mt.setScissorTest(Dt),W){const yt=$t.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,Y)}else if(bt){const yt=O;for(let Pt=0;Pt<A.textures.length;Pt++){const kt=$t.get(A.textures[Pt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Pt,kt.__webglTexture,Y,yt)}}else if(A!==null&&Y!==0){const yt=$t.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yt.__webglTexture,Y)}V=-1};function Ed(A){const O=$t.get(A);return(O.__readFormat!==A.format||O.__readType!==A.type)&&(O.__readFormat=A.format,O.__readType=A.type,O.__formatReadable=Ne.textureFormatReadable(A.format),O.__typeReadable=Ne.textureTypeReadable(A.type)),O}this.readRenderTargetPixels=function(A,O,Y,G,W,bt,Ft,yt=0){if(!(A&&A.isWebGLRenderTarget)){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Pt=Pt[Ft],Array.isArray(Pt)&&(Pt=Pt[0])),Pt){Mt.bindFramebuffer(B.FRAMEBUFFER,Pt);try{const kt=A.textures[yt],ne=kt.format,xe=kt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const Ot=Ed(kt);if(Ot.__formatReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-G&&Y>=0&&Y<=A.height-W&&B.readPixels(O,Y,G,W,dt.convert(ne),dt.convert(xe),bt)}finally{const kt=et!==null?$t.get(et).__webglFramebuffer:null;Mt.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,O,Y,G,W,bt,Ft,yt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=$t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(Pt=Pt[Ft],Array.isArray(Pt)&&(Pt=Pt[0])),Pt)if(O>=0&&O<=A.width-G&&Y>=0&&Y<=A.height-W){Mt.bindFramebuffer(B.FRAMEBUFFER,Pt);const kt=A.textures[yt],ne=kt.format,xe=kt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+yt);const Ot=Ed(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(O,Y,G,W,dt.convert(ne),dt.convert(xe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const tn=et!==null?$t.get(et).__webglFramebuffer:null;Mt.bindFramebuffer(B.FRAMEBUFFER,tn);const Be=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ix(B,Be,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ve),B.deleteSync(Be),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,O=null,Y=0){const G=Math.pow(2,-Y),W=Math.floor(A.image.width*G),bt=Math.floor(A.image.height*G),Ft=O!==null?O.x:0,yt=O!==null?O.y:0;jt.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,Ft,yt,W,bt),Mt.unbindTexture()},this.copyTextureToTexture=function(A,O,Y=null,G=null,W=0,bt=0){let Ft,yt,Pt,kt,ne,xe,Ot,ve,tn;const Be=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(Y!==null)Ft=Y.max.x-Y.min.x,yt=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,ne=Y.min.y,xe=Y.isBox3?Y.min.z:0;else{const ye=Math.pow(2,-W);Ft=Math.floor(Be.width*ye),yt=Math.floor(Be.height*ye),A.isDataArrayTexture?Pt=Be.depth:A.isData3DTexture?Pt=Math.floor(Be.depth*ye):Pt=1,kt=0,ne=0,xe=0}G!==null?(Ot=G.x,ve=G.y,tn=G.z):(Ot=0,ve=0,tn=0);const Ue=dt.convert(O.format),Mn=dt.convert(O.type);let Bt;O.isData3DTexture?(jt.setTexture3D(O,0),Bt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(jt.setTexture2DArray(O,0),Bt=B.TEXTURE_2D_ARRAY):(jt.setTexture2D(O,0),Bt=B.TEXTURE_2D),Mt.activeTexture(B.TEXTURE0),Mt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),Mt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),Mt.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);const In=Mt.getParameter(B.UNPACK_ROW_LENGTH),Ae=Mt.getParameter(B.UNPACK_IMAGE_HEIGHT),Ts=Mt.getParameter(B.UNPACK_SKIP_PIXELS),Sn=Mt.getParameter(B.UNPACK_SKIP_ROWS),da=Mt.getParameter(B.UNPACK_SKIP_IMAGES);Mt.pixelStorei(B.UNPACK_ROW_LENGTH,Be.width),Mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Be.height),Mt.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),Mt.pixelStorei(B.UNPACK_SKIP_ROWS,ne),Mt.pixelStorei(B.UNPACK_SKIP_IMAGES,xe);const os=A.isDataArrayTexture||A.isData3DTexture,As=O.isDataArrayTexture||O.isData3DTexture;if(A.isDepthTexture){const ye=$t.get(A),gn=$t.get(O),hi=$t.get(ye.__renderTarget),Ve=$t.get(gn.__renderTarget);Mt.bindFramebuffer(B.READ_FRAMEBUFFER,hi.__webglFramebuffer),Mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let hn=0;hn<Pt;hn++)os&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.get(A).__webglTexture,W,xe+hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$t.get(O).__webglTexture,bt,tn+hn)),B.blitFramebuffer(kt,ne,kt+Ft,ne+yt,Ot,ve,Ot+Ft,ve+yt,B.DEPTH_BUFFER_BIT,B.NEAREST);Mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||$t.has(A)){const ye=$t.get(A),gn=$t.get(O);Mt.bindFramebuffer(B.READ_FRAMEBUFFER,D),Mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,k);for(let hi=0;hi<Pt;hi++)os?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ye.__webglTexture,W,xe+hi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ye.__webglTexture,W),As?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,bt,tn+hi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,bt),W!==0?B.blitFramebuffer(kt,ne,kt+Ft,ne+yt,Ot,ve,Ot+Ft,ve+yt,B.COLOR_BUFFER_BIT,B.NEAREST):As?B.copyTexSubImage3D(Bt,bt,Ot,ve,tn+hi,kt,ne,Ft,yt):B.copyTexSubImage2D(Bt,bt,Ot,ve,kt,ne,Ft,yt);Mt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else As?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Bt,bt,Ot,ve,tn,Ft,yt,Pt,Ue,Mn,Be.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Bt,bt,Ot,ve,tn,Ft,yt,Pt,Ue,Be.data):B.texSubImage3D(Bt,bt,Ot,ve,tn,Ft,yt,Pt,Ue,Mn,Be):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,Ot,ve,Ft,yt,Ue,Mn,Be.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,Ot,ve,Be.width,Be.height,Ue,Be.data):B.texSubImage2D(B.TEXTURE_2D,bt,Ot,ve,Ft,yt,Ue,Mn,Be);Mt.pixelStorei(B.UNPACK_ROW_LENGTH,In),Mt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ae),Mt.pixelStorei(B.UNPACK_SKIP_PIXELS,Ts),Mt.pixelStorei(B.UNPACK_SKIP_ROWS,Sn),Mt.pixelStorei(B.UNPACK_SKIP_IMAGES,da),bt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&B.generateMipmap(Bt),Mt.unbindTexture()},this.initRenderTarget=function(A){$t.get(A).__webglFramebuffer===void 0&&jt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?jt.setTextureCube(A,0):A.isData3DTexture?jt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?jt.setTexture2DArray(A,0):jt.setTexture2D(A,0),Mt.unbindTexture()},this.resetState=function(){X=0,z=0,et=null,Mt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}}const Jb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:pu,AddEquation:zs,AddOperation:up,AdditiveAnimationBlendMode:Tu,AdditiveBlending:Lo,AgXToneMapping:gu,AlphaFormat:bu,AlwaysCompare:Cu,AlwaysDepth:_l,AlwaysStencilFunc:_p,AmbientLight:mm,AnimationAction:bm,AnimationClip:Yo,AnimationLoader:Jv,AnimationMixer:A_,AnimationObjectGroup:w_,AnimationUtils:Wv,ArcCurve:zp,ArrayCamera:ym,ArrowHelper:J_,AttachedBindMode:Hh,Audio:Mm,AudioAnalyser:p_,AudioContext:td,AudioListener:u_,AudioLoader:a_,AxesHelper:K_,BackSide:Rn,BasicDepthPacking:gp,BasicShadowMap:W0,BatchedMesh:Up,BezierInterpolant:lm,Bone:Uu,BooleanKeyframeTrack:tr,Box2:Tm,Box3:Pn,Box3Helper:Z_,BoxGeometry:Li,BoxHelper:Y_,BufferAttribute:oe,BufferGeometry:Jt,BufferGeometryLoader:_m,ByteType:_u,Cache:Pi,Camera:zc,CameraHelper:q_,CanvasTexture:Cc,CapsuleGeometry:sa,CatmullRomCurve3:kp,CineonToneMapping:fu,CircleGeometry:_s,ClampToEdgeWrapping:Un,Clock:wm,Color:K,ColorKeyframeTrack:$u,ColorManagement:me,Compatibility:Kg,CompressedArrayTexture:lv,CompressedCubeTexture:cv,CompressedTexture:Ec,CompressedTextureLoader:Kv,ConeGeometry:mn,ConstantAlphaFactor:lp,ConstantColorFactor:op,Controls:j_,CubeCamera:rc,CubeDepthTexture:Ou,CubeReflectionMapping:Ki,CubeRefractionMapping:qs,CubeTexture:ia,CubeTextureLoader:Qv,CubicBezierCurve:ku,CubicBezierCurve3:Vp,CubicInterpolant:om,CullFaceBack:kh,CullFaceFront:H0,CullFaceFrontBack:ug,CullFaceNone:G0,Curve:bi,CurvePath:Hp,CustomBlending:q0,CustomToneMapping:mu,CylinderGeometry:Oe,Cylindrical:N_,Data3DTexture:Mc,DataArrayTexture:yc,DataTexture:_n,DataTextureLoader:jv,DataUtils:Nx,DecrementStencilOp:Rg,DecrementWrapStencilOp:Ig,DefaultLoadingManager:um,DepthFormat:Qi,DepthStencilFormat:Xi,DepthTexture:Qs,DetachedBindMode:dp,DirectionalLight:Qu,DirectionalLightHelper:X_,DiscreteInterpolant:am,DodecahedronGeometry:Rc,DoubleSide:Fe,DstAlphaFactor:ep,DstColorFactor:ip,DynamicCopyUsage:Xg,DynamicDrawUsage:Xh,DynamicReadUsage:Gg,EdgesGeometry:Bp,EllipseCurve:Pc,EqualCompare:Sp,EqualDepth:Ml,EqualStencilFunc:Ug,EquirectangularReflectionMapping:bo,EquirectangularRefractionMapping:wo,Euler:zn,EventDispatcher:Si,ExternalTexture:Bu,ExtrudeGeometry:ra,FileLoader:es,Float16BufferAttribute:Vx,Float32BufferAttribute:At,FloatType:Fn,Fog:wc,FogExp2:bc,FramebufferTexture:av,FrontSide:Ji,Frustum:Ks,FrustumArray:ea,GLBufferAttribute:I_,GLSL1:Yg,GLSL3:qh,GreaterCompare:bp,GreaterDepth:bl,GreaterEqualCompare:Eu,GreaterEqualDepth:Sl,GreaterEqualStencilFunc:zg,GreaterStencilFunc:Og,GridHelper:H_,Group:ot,HTMLTexture:hv,HalfFloatType:on,HemisphereLight:dm,HemisphereLightHelper:G_,IcosahedronGeometry:Yr,ImageBitmapLoader:o_,ImageLoader:Zo,ImageUtils:Rp,IncrementStencilOp:Cg,IncrementWrapStencilOp:Pg,InstancedBufferAttribute:Vr,InstancedBufferGeometry:vm,InstancedInterleavedBuffer:P_,InstancedMesh:Cn,Int16BufferAttribute:zx,Int32BufferAttribute:kx,Int8BufferAttribute:Fx,IntType:uc,InterleavedBuffer:Tc,InterleavedBufferAttribute:Js,Interpolant:$r,InterpolateBezier:Wh,InterpolateDiscrete:Oo,InterpolateLinear:ec,InterpolateSmooth:hl,InterpolationSamplingMode:Jg,InterpolationSamplingType:$g,InvertStencilOp:Dg,KeepStencilOp:ul,KeyframeTrack:ci,LOD:Lp,LatheGeometry:Zr,Layers:Sc,LessCompare:Mp,LessDepth:yl,LessEqualCompare:Au,LessEqualDepth:Br,LessEqualStencilFunc:Fg,LessStencilFunc:Ng,Light:Ss,LightProbe:xm,LightShadow:Bc,Line:vs,Line3:O_,LineBasicMaterial:kn,LineCurve:Vu,LineCurve3:Gp,LineDashedMaterial:im,LineLoop:Fp,LineSegments:Di,LinearFilter:Te,LinearInterpolant:Zu,LinearMipMapLinearFilter:gg,LinearMipMapNearestFilter:mg,LinearMipmapLinearFilter:Qn,LinearMipmapNearestFilter:To,LinearSRGBColorSpace:ts,LinearToneMapping:uu,LinearTransfer:zo,Loader:Zn,LoaderUtils:Kh,LoadingManager:Ku,LoopOnce:fp,LoopPingPong:mp,LoopRepeat:pp,MOUSE:cg,Material:yn,MaterialBlending:dg,MaterialLoader:kc,MathUtils:dn,Matrix2:jh,Matrix3:ee,Matrix4:Wt,MaxEquation:J0,Mesh:Lt,MeshBasicMaterial:Ii,MeshDepthMaterial:Uc,MeshDistanceMaterial:Yu,MeshLambertMaterial:em,MeshMatcapMaterial:nm,MeshNormalMaterial:tm,MeshPhongMaterial:Qp,MeshPhysicalMaterial:Kp,MeshStandardMaterial:qu,MeshToonMaterial:jp,MinEquation:$0,MirroredRepeatWrapping:Ys,MixOperation:hp,MultiplyBlending:Gh,MultiplyOperation:jo,NearestFilter:He,NearestMipMapLinearFilter:pg,NearestMipMapNearestFilter:fg,NearestMipmapLinearFilter:Cr,NearestMipmapNearestFilter:vu,NeutralToneMapping:xu,NeverCompare:yp,NeverDepth:vl,NeverStencilFunc:Lg,NoBlending:qi,NoColorSpace:qn,NoNormalPacking:bg,NoToneMapping:yi,NormalAnimationBlendMode:xc,NormalBlending:ms,NormalGAPacking:Tg,NormalRGPacking:wg,NotEqualCompare:wp,NotEqualDepth:wl,NotEqualStencilFunc:Bg,NumberKeyframeTrack:Fc,Object3D:ae,ObjectLoader:s_,ObjectSpaceNormalMap:vp,OctahedronGeometry:oa,OneFactor:Q0,OneMinusConstantAlphaFactor:cp,OneMinusConstantColorFactor:ap,OneMinusDstAlphaFactor:np,OneMinusDstColorFactor:sp,OneMinusSrcAlphaFactor:hu,OneMinusSrcColorFactor:tp,OrthographicCamera:aa,PCFShadowMap:So,PCFSoftShadowMap:X0,PMREMGenerator:$o,Path:Go,PerspectiveCamera:fn,Plane:Ci,PlaneGeometry:Ui,PlaneHelper:$_,PointLight:pm,PointLightHelper:k_,Points:na,PointsMaterial:Fu,PolarGridHelper:W_,PolyhedronGeometry:ys,PositionalAudio:f_,PropertyBinding:Me,PropertyMixer:Sm,QuadraticBezierCurve:Gu,QuadraticBezierCurve3:Hu,Quaternion:Je,QuaternionKeyframeTrack:Oc,QuaternionLinearInterpolant:hm,R11_EAC_Format:Dl,RED_GREEN_RGTC2_Format:Fo,RED_RGTC1_Format:Ql,REVISION:cc,RG11_EAC_Format:Uo,RGBADepthPacking:xp,RGBAFormat:rn,RGBAIntegerFormat:gc,RGBA_ASTC_10x10_Format:ql,RGBA_ASTC_10x5_Format:Hl,RGBA_ASTC_10x6_Format:Wl,RGBA_ASTC_10x8_Format:Xl,RGBA_ASTC_12x10_Format:Yl,RGBA_ASTC_12x12_Format:Zl,RGBA_ASTC_4x4_Format:Ul,RGBA_ASTC_5x4_Format:Fl,RGBA_ASTC_5x5_Format:Ol,RGBA_ASTC_6x5_Format:Bl,RGBA_ASTC_6x6_Format:zl,RGBA_ASTC_8x5_Format:kl,RGBA_ASTC_8x6_Format:Vl,RGBA_ASTC_8x8_Format:Gl,RGBA_BPTC_Format:$l,RGBA_ETC2_EAC_Format:Il,RGBA_PVRTC_2BPPV1_Format:Cl,RGBA_PVRTC_4BPPV1_Format:El,RGBA_S3TC_DXT1_Format:Eo,RGBA_S3TC_DXT3_Format:Co,RGBA_S3TC_DXT5_Format:Ro,RGBDepthPacking:Mg,RGBFormat:wu,RGBIntegerFormat:xg,RGB_BPTC_SIGNED_Format:Jl,RGB_BPTC_UNSIGNED_Format:Kl,RGB_ETC1_Format:Rl,RGB_ETC2_Format:Pl,RGB_PVRTC_2BPPV1_Format:Al,RGB_PVRTC_4BPPV1_Format:Tl,RGB_S3TC_DXT1_Format:Ao,RGDepthPacking:Sg,RGFormat:gs,RGIntegerFormat:mc,RawShaderMaterial:Xu,Ray:qr,Raycaster:D_,RectAreaLight:gm,RedFormat:pc,RedIntegerFormat:ta,ReinhardToneMapping:du,RenderObjectRefreshType:Qg,RenderTarget:Pu,RenderTarget3D:E_,RepeatWrapping:No,ReplaceStencilOp:Eg,ReverseSubtractEquation:Z0,RingGeometry:Ic,SIGNED_R11_EAC_Format:Ll,SIGNED_RED_GREEN_RGTC2_Format:tc,SIGNED_RED_RGTC1_Format:jl,SIGNED_RG11_EAC_Format:Nl,SRGBColorSpace:En,SRGBTransfer:Re,Scene:Iu,ShaderChunk:re,ShaderLib:gi,ShaderMaterial:ze,ShadowMaterial:$p,Shape:Ni,ShapeGeometry:Ms,ShapePath:Q_,ShapeUtils:xi,ShortType:yu,Skeleton:Ac,SkeletonHelper:z_,SkinnedMesh:Np,Source:Sx,Sphere:vn,SphereGeometry:Kt,Spherical:L_,SphericalHarmonics3:ju,SplineCurve:Wu,SpotLight:fm,SpotLightHelper:B_,Sprite:Dp,SpriteMaterial:Nu,SrcAlphaFactor:cu,SrcAlphaSaturateFactor:rp,SrcColorFactor:j0,StaticCopyUsage:Wg,StaticDrawUsage:vc,StaticReadUsage:Vg,StereoCamera:l_,StreamCopyUsage:qg,StreamDrawUsage:kg,StreamReadUsage:Hg,StringKeyframeTrack:er,SubtractEquation:Y0,SubtractiveBlending:Vh,TOUCH:hg,TangentSpaceNormalMap:ji,TetrahedronGeometry:Dc,Texture:We,TextureLoader:t_,TextureSource:Ri,TextureUtils:s1,Timer:ed,TimestampQuery:Zg,TorusGeometry:$e,TorusKnotGeometry:Lc,Triangle:Yn,TriangleFanDrawMode:yg,TriangleStripDrawMode:_g,TrianglesDrawMode:vg,TubeGeometry:Nc,UVMapping:hc,Uint16BufferAttribute:Du,Uint32BufferAttribute:Lu,Uint8BufferAttribute:Ox,Uint8ClampedBufferAttribute:Bx,Uniform:sd,UniformsGroup:R_,UniformsLib:Et,UniformsUtils:qo,UnsignedByteType:Xn,UnsignedInt101111Type:Su,UnsignedInt248Type:Zs,UnsignedInt5999Type:Mu,UnsignedIntType:ai,UnsignedShort4444Type:dc,UnsignedShort5551Type:fc,UnsignedShortType:zr,VSMShadowMap:Er,Vector2:J,Vector3:R,Vector4:Se,VectorKeyframeTrack:Ju,VideoFrameTexture:ov,VideoTexture:Op,WebGL3DRenderTarget:Tx,WebGLArrayRenderTarget:wx,WebGLCoordinateSystem:jn,WebGLCubeRenderTarget:Vc,WebGLRenderTarget:Xe,WebGLRenderer:zm,WebGLUtils:Om,WebGPUCoordinateSystem:$s,WebXRController:dl,WireframeGeometry:Zp,WrapAroundEnding:Bo,ZeroCurvatureEnding:ks,ZeroFactor:K0,ZeroSlopeEnding:Vs,ZeroStencilOp:Ag,createCanvasElement:Ap,error:Ht,getConsoleFunction:nx,log:Vo,setConsoleFunction:ex,warn:Tt,warnOnce:Yi},Symbol.toStringTag,{value:"Module"})),Kb=new R(.7,.6,.26).normalize(),rd=new _n(new Uint8Array([158,158,92,255]),1,1,rn);rd.colorSpace=qn;rd.needsUpdate=!0;const De={uTime:{value:0},uSunDir:{value:Kb.clone()},uSunColor:{value:new K(1,.94,.8)},uSkyColor:{value:new K(.66,.8,.94)},uBounceColor:{value:new K(.62,.62,.36)},uBounceTint:{value:new K(1,1,1)},uBounceMap:{value:rd},uBounceRegion:{value:new Se(0,0,840,0)},uShadowTint:{value:new K(.54,.58,.7)},uFogColor:{value:new K(.44,.6,.72)},uFogDensity:{value:.00145},uDusk:{value:0},uWindDir:{value:new J(.86,.51)}};function Qb(s){De.uTime.value=s}const km=`
#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0 && defined( SHADOWMAP_TYPE_BASIC )

  const float SHADOW_GOLDEN = 2.39996323;

  float toonShadowMask() {
    if ( ! receiveShadow ) return 1.0;

    vec4 sc = vDirectionalShadowCoord[ 0 ];
    sc.xyz /= sc.w;
    sc.z += directionalLightShadows[ 0 ].shadowBias;

    if ( sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0 || sc.z > 1.0 ) return 1.0;

    vec2 texel = 1.0 / directionalLightShadows[ 0 ].shadowMapSize;

    // 中心采样：拿到最近遮挡物的深度
    float d0 = texture2D( directionalShadowMap[ 0 ], sc.xy ).r;
    float gap = max( sc.z - d0, 0.0 );

    // 0.012 的归一化深度 ≈ 4.2m 间距（近 30 / 远 380，量程 350m）
    float rad = mix( 0.7, 7.5, smoothstep( 0.0, 0.012, gap ) );

    // 交错梯度噪声：逐像素旋转采样盘，8 个样本就能铺出没有条带的软边
    float phi = fract( 52.9829189 * fract( dot( gl_FragCoord.xy, vec2( 0.06711056, 0.00583715 ) ) ) ) * 6.2831853;

    float sum = 0.0;
    for ( int i = 0; i < 8; i ++ ) {
      float fi = float( i ) + 0.5;
      float rr = sqrt( fi * 0.125 );
      float th = fi * SHADOW_GOLDEN + phi;
      vec2 off = vec2( cos( th ), sin( th ) ) * rr * rad * texel;
      sum += step( sc.z, texture2D( directionalShadowMap[ 0 ], sc.xy + off ).r );
    }

    return mix( 1.0, sum * 0.125, directionalLightShadows[ 0 ].shadowIntensity );
  }

#else

  float toonShadowMask() { return 1.0; }

#endif
`,jb=`
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
`,tw=`
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
uniform vec3  uBounceTint;
uniform sampler2D uBounceMap;
uniform vec4  uBounceRegion;
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

${km}

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

  float shadow = toonShadowMask();
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
  // 地面反弹：颜色取自脚下的地表材质（草 / 土 / 湿地）
  vec2 bUv = ( vWorld.xz - uBounceRegion.xy ) / uBounceRegion.z + 0.5;
  vec3 bounceC = texture2D( uBounceMap, clamp( bUv, 0.0, 1.0 ) ).rgb;
  col += base * bounceC * uBounceTint * 0.098 * ( 0.55 - 0.45 * N.y );

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
`,ew=Et.lights;function ut(s={}){const t={};s.map&&(t.USE_MAP=""),s.normalMap&&(t.USE_NORMALMAP=""),s.map&&s.alphaMap&&(t.USE_ALPHA_MAP=""),s.vcolor&&(t.USE_VCOL=""),s.defines&&Object.assign(t,s.defines);const e=Object.assign({},ew,De,{uMap:{value:s.map||null},uNormalMap:{value:s.normalMap||null},uNormalScale:{value:s.normalScale??1},uColor:{value:new K(s.color??16777215)},uColor2:{value:new K(s.color2??16777215)},uMapMix:{value:s.mapMix??1},uUvScale:{value:new J(...s.uvScale??[1,1])},uRim:{value:s.rim??0},uRimColor:{value:new K(s.rimColor??16773320)},uSpec:{value:s.spec??0},uSpecPower:{value:s.specPower??24},uFresnel:{value:s.fresnel??0},uNoiseAmt:{value:s.noise??.12},uNoiseScale:{value:s.noiseScale??.35},uWrap:{value:s.wrap??0},uTrans:{value:s.trans??0},uAO:{value:s.ao??1},uEmissive:{value:s.emissive??0},uSaturation:{value:s.saturation??1},uAlphaTest:{value:s.alphaTest??.5},uOpacity:{value:s.opacity??1},uTint:{value:new K(s.tint??16777215)},uGrime:{value:new J(...s.grime??[0,0])},uRoughVar:{value:s.roughVar??0},uWet:{value:s.wet??0},uWindAmp:{value:s.windAmp??0},uWindSpeed:{value:s.windSpeed??1.6},uBendH:{value:s.bendH??1},uPhase:{value:s.phase??0},uBillow:{value:s.billow??0}}),n=new ze({vertexShader:jb,fragmentShader:tw,uniforms:e,defines:t,lights:!0,side:s.side??Ji,transparent:s.transparent??!1,depthWrite:s.depthWrite??!0});return n.userData.uniforms=e,n}function Pe(s,t=0,e=1){return s<t?t:s>e?e:s}function Xs(s,t,e){return s+(t-s)*e}function $i(s,t,e){const n=Pe((e-s)/(t-s));return n*n*(3-2*n)}function Ir(s,t){const e=Math.sin(s*127.1+t*311.7)*43758.5453123;return e-Math.floor(e)}function nw(s,t){const e=Math.floor(s),n=Math.floor(t),i=s-e,r=t-n,o=i*i*(3-2*i),a=r*r*(3-2*r),l=Ir(e,n),c=Ir(e+1,n),h=Ir(e,n+1),d=Ir(e+1,n+1);return Xs(Xs(l,c,o),Xs(h,d,o),a)}function Qe(s,t,e=4,n=2.03,i=.5){let r=.5,o=1,a=0,l=0;for(let c=0;c<e;c++)a+=r*nw(s*o,t*o),l+=r,o*=n,r*=i;return a/l}function qe(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const iw=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 mv = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mv;
  gl_Position.z = gl_Position.w; // 永远在最远
}
`,sw=`
precision highp float;

uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform float uTime;
uniform float uCloudCover;
uniform float uDusk;       // 0 = 正午，1 = 黄昏：云的受光色、雾霭、地平线整体往暖色偏
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
  col += uSunColor * disc * ( 5.0 + 2.0 * uDusk );
  col += uSunColor * pow( sd, 220.0 ) * ( 1.4 + 0.8 * uDusk );
  col += uSunColor * pow( sd, 14.0 ) * ( 0.30 + 0.30 * uDusk );
  col += uSunColor * pow( sd, 3.0 ) * ( 0.10 + 0.34 * uDusk );
  col += vec3( 0.06, 0.09, 0.05 ) * pow( sd, 1.4 ) * ( 1.0 - uDusk );

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

  vec3 cShade = mix( vec3( 0.36, 0.46, 0.66 ), vec3( 0.20, 0.16, 0.30 ), uDusk );
  vec3 cMid   = mix( vec3( 0.78, 0.83, 0.91 ), vec3( 0.48, 0.33, 0.38 ), uDusk );
  vec3 cLit   = mix( vec3( 1.26, 1.22, 1.12 ), uSunColor * 2.05, uDusk );
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
  col = mix( col, mix( vec3( 1.0, 0.99, 0.97 ), vec3( 1.15, 0.74, 0.56 ), uDusk ), cir * 0.5 );

  // ---- 地平线雾霭 ----
  float haze = smoothstep( 0.16, -0.06, h );
  vec3 hazeBase = mix( vec3( 0.50, 0.66, 0.74 ), vec3( 0.80, 0.47, 0.33 ), uDusk );
  vec3 hazeCol = mix( hazeBase, uSunColor * 0.92, pow( sd, 2.0 ) * ( 0.5 + 0.35 * uDusk ) );
  col = mix( col, hazeCol, haze * 0.92 );

  // 地平线以下
  col = mix( col, mix( vec3( 0.72, 0.79, 0.74 ), vec3( 0.30, 0.23, 0.27 ), uDusk ), smoothstep( -0.01, -0.14, h ) );

  // 轻微抖动，避免色带
  col += ( hash21( gl_FragCoord.xy ) - 0.5 ) * 0.006;

  gl_FragColor = vec4( col, 1.0 );
}
`;function rw(){const s=new Kt(1,48,32),t=new ze({vertexShader:iw,fragmentShader:sw,uniforms:{uSunDir:De.uSunDir,uSunColor:De.uSunColor,uSkyColor:{value:new K(.115,.335,.66)},uZenith:{value:new K(.038,.155,.47)},uHorizon:{value:new K(.4,.58,.71)},uTime:De.uTime,uCloudCover:{value:1},uDusk:De.uDusk},side:Rn,depthWrite:!1,depthTest:!1,fog:!1}),e=new Lt(s,t);return e.scale.setScalar(3e3),e.frustumCulled=!1,e.renderOrder=-1e3,e.name="sky",{mesh:e,material:t}}const Mi=840,Nn=Mi/2,On=-.55;function ns(s){return 46.5+5.2*Math.sin(s*.0245+.5)+2.4*Math.sin(s*.0092+2.2)}function is(s){return 3.1+.85*Math.sin(s*.043+1.1)+.3*Math.sin(s*.11)}const fs=[[4.05,2.2],[4.15,6.2],[4.9,9.4],[6,13.2],[7,17.6],[7.8,22.5],[8.7,28],[9.6,33.5],[10.4,38.6],[11.2,44],[12.1,48.5],[12.7,52.4]],nu=[[-1,3.8],[.6,7.2],[2,10.6],[3.4,14.2],[5.2,18],[7.6,21.8],[10.2,24.6],[12.6,27.2],[13.6,31],[14,35.5],[14.2,40],[14.4,44.5]],Vm=[[6.2,14],[8.6,12.6],[11.6,11.6],[14.6,11],[17.4,10.4]],pl=[[-96,33],[-76,31.4],[-56,29.6],[-38,27.6],[-24,26.4],[-11,25.6],[2,25],[9.2,25.2],[12.6,27.2],[16.4,25.4],[25,24.6],[38,24.2],[52,24.8],[66,26.4],[82,29],[100,32]],wr={x:12.6,z:27.2},od=[[-12,31.6],[-5,30.6],[3,30.4],[10,31.6],[11.4,34.6],[10.9,38.2],[7,40.6],[0,41.2],[-6.5,40.6],[-11.4,38.2],[-12.6,34.6]];function ml(s,t,e=0){const n=od;let i=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){const a=n[r][0],l=n[r][1],c=n[o][0],h=n[o][1];l>t!=h>t&&s<(c-a)*(t-l)/(h-l)+a&&(i=!i)}if(i)return!0;if(e<=0)return!1;for(let r=0,o=n.length-1;r<n.length;o=r++){const a=n[o][0],l=n[o][1],c=n[r][0],h=n[r][1],d=c-a,u=h-l,f=d*d+u*u||1;let p=((s-a)*d+(t-l)*u)/f;if(p=Pe(p,0,1),Math.hypot(s-(a+d*p),t-(l+u*p))<e)return!0}return!1}function ow(s,t){const e=od;let n=1e9;for(let i=0,r=e.length-1;i<e.length;r=i++){const o=e[r][0],a=e[r][1],l=e[i][0],c=e[i][1],h=l-o,d=c-a,u=h*h+d*d||1;let f=((s-o)*h+(t-a)*d)/u;f=Pe(f,0,1);const p=Math.hypot(s-(o+h*f),t-(a+d*f));p<n&&(n=p)}return ml(s,t)?n:-n}const Gm=[{x:0,z:0,r:6.4,f:9.5,y:7.3},{x:-7.8,z:1.4,r:5.4,f:6.5,y:6.96},{x:15.6,z:11.6,r:7.6,f:9,y:5.02},{x:13.2,z:3.4,r:3.6,f:4,y:null},{x:29.5,z:37.5,r:7.2,f:7.5,y:null},{x:-20,z:33,r:5.2,f:5.5,y:null},{x:-15,z:8.5,r:3.4,f:4,y:null},{x:8.2,z:13.8,r:2.2,f:3,y:null}];let u0=!1;function aw(){if(!u0){u0=!0;for(const s of Gm)s.y===null&&(s.y=Hm(s.x,s.z))}}function Hm(s,t){let e=0;e+=2.55*Math.sin(s*.0126+.9)*Math.cos(t*.0108-.5),e+=1.25*Math.sin(s*.029-1.2)*Math.sin(t*.0261+.7),e+=(Qe(s*.0112+3.1,t*.0112-2.4,4)-.5)*7.2,e+=(Qe(s*.047+7,t*.047+3,3)-.5)*.85;const n=Math.hypot(s,t);e+=8.7*Math.exp(-Math.pow(n/26.5,2)),e+=$i(16,-95,t)*11,e+=$i(-60,-140,t)*16;const i=ns(s),r=is(s),o=Math.abs(t-i),a=On-.95+.18*Math.sin(s*.07);let l=1-$i(r*.85,r*.85+17,o);return l=l*l*(3-2*l),e=Xs(e,a,l*.985),e}function qt(s,t){aw();let e=Hm(s,t);for(const n of Gm){const i=Math.hypot(s-n.x,t-n.z),r=1-$i(n.r,n.r+n.f,i);e=Xs(e,n.y,r*r*(3-2*r))}return e}function d0(s,t,e){let n={dist:1e9,t:0,x:0,z:0},i=0,r=0;for(let o=0;o<e.length-1;o++)r+=Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]);for(let o=0;o<e.length-1;o++){const a=e[o][0],l=e[o][1],c=e[o+1][0],h=e[o+1][1],d=c-a,u=h-l,f=d*d+u*u;let p=((s-a)*d+(t-l)*u)/(f||1);p=Pe(p,0,1);const x=a+d*p,m=l+u*p,g=Math.hypot(s-x,t-m);if(g<n.dist){const v=Math.sqrt(f);n={dist:g,t:(i+v*p)/r,x,z:m}}i+=Math.sqrt(f)}return n}function Wm(s,t,e=.6){const n=qt(s-e,t),i=qt(s+e,t),r=qt(s,t-e),o=qt(s,t+e);return new R(n-i,2*e,r-o).normalize()}function Wc(s,t,e=1){return Math.abs(t-ns(s))<is(s)+e}function lw(s,t=1.2){const e=[];for(let n=0;n<s.length-1;n++){const[i,r]=s[n],[o,a]=s[n+1],l=Math.hypot(o-i,a-r),c=Math.max(1,Math.round(l/t));for(let h=0;h<c;h++){const d=h/c;e.push([Xs(i,o,d),Xs(r,a,d)])}}return e.push(s[s.length-1].slice()),e}function ni(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function ss(s,{srgb:t=!0,repeat:e=[1,1]}={}){const n=new Cc(s);return n.wrapS=n.wrapT=Ys,n.repeat.set(e[0],e[1]),n.colorSpace=t?En:qn,n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=Qn,n}function cw(s=1024){const t=ni(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=o/s,l=r/s,c=Qe(a*7,l*7,5),h=Qe(a*34+11,l*34+3,3),d=Qe(a*2.4+30,l*2.4+7,3);let u=233,f=221,p=194;const x=(c-.5)*26+(h-.5)*12;u+=x,f+=x*.97,p+=x*.86;const m=$i(.48,.8,d);u-=m*14,f-=m*10,p-=m*14;const g=(Ir(o*1.7,r*1.7)-.5)*9;u+=g,f+=g,p+=g;const v=(r*s+o)*4;i[v]=Pe(u,0,255),i[v+1]=Pe(f,0,255),i[v+2]=Pe(p,0,255),i[v+3]=255}e.putImageData(n,0,0),e.globalAlpha=.05;for(let r=0;r<60;r++){const o=Math.random()*s,a=1+Math.random()*4,l=Math.random()*s*.6,c=e.createLinearGradient(0,l,0,l+s*(.2+Math.random()*.5));c.addColorStop(0,"rgba(120,118,96,0)"),c.addColorStop(1,"rgba(110,108,88,0.9)"),e.fillStyle=c,e.fillRect(o,l,a,s)}e.globalAlpha=1;for(let r=0;r<260;r++){const o=Math.random()*s,a=Math.random()*s,l=2+Math.random()*11;e.globalAlpha=.03+Math.random()*.06,e.fillStyle=Math.random()>.5?"#a89c80":"#fff6e2",e.beginPath(),e.arc(o,a,l,0,7),e.fill()}e.globalAlpha=.14,e.strokeStyle="#9c9276",e.lineWidth=1;for(let r=0;r<6;r++){let o=Math.random()*s,a=Math.random()*s*.7;e.beginPath(),e.moveTo(o,a);for(let l=0;l<12;l++)o+=(Math.random()-.5)*12,a+=Math.random()*18,e.lineTo(o,a);e.stroke()}return e.globalAlpha=1,ss(t,{repeat:[1,1]})}function hw(s=2048,t=1024){const e=ni(s,t),n=e.getContext("2d"),i=n.createImageData(s,t),r=i.data;for(let c=0;c<t;c++)for(let h=0;h<s;h++){const d=h/s,u=c/t,f=Qe(d*26,u*13,5),p=Qe(d*90+11,u*45+3,3),x=Qe(d*7+30,u*3.5+7,3);let m=219,g=206,v=178;const M=(f-.5)*38+(p-.5)*16;m+=M,g+=M*.97,v+=M*.86;const _=$i(.46,.82,x);m-=_*34,g-=_*26,v-=_*32;const w=(Ir(h*1.7,c*1.7)-.5)*9;m+=w,g+=w,v+=w;const b=(c*s+h)*4;r[b]=Pe(m,0,255),r[b+1]=Pe(g,0,255),r[b+2]=Pe(v,0,255),r[b+3]=255}n.putImageData(i,0,0);const o=c=>c/12.2*26/29*t;for(const c of[2.55,6.3,9.45]){const h=o(c)-3,d=16+Math.random()*8,u=n.createLinearGradient(0,h,0,h+d);u.addColorStop(0,"rgba(92,86,68,0.55)"),u.addColorStop(1,"rgba(96,92,74,0)"),n.fillStyle=u,n.fillRect(0,h,s,d)}n.globalAlpha=.1;for(let c=0;c<130;c++){const h=Math.random()*s,d=Math.random()*t*.18,u=t*(.12+Math.random()*.42),f=n.createLinearGradient(0,d,0,d+u);f.addColorStop(0,"rgba(104,100,82,0.9)"),f.addColorStop(1,"rgba(104,100,82,0)"),n.fillStyle=f,n.fillRect(h,d,1+Math.random()*4,u)}n.globalAlpha=1;const a=n.createLinearGradient(0,t*.8,0,t);a.addColorStop(0,"rgba(96,120,58,0)"),a.addColorStop(1,"rgba(88,112,52,0.55)"),n.fillStyle=a,n.fillRect(0,t*.8,s,t*.2);for(let c=0;c<420;c++){const h=Math.random()*s,d=t*(.84+Math.random()*.16);n.globalAlpha=.04+Math.random()*.12,n.fillStyle=Math.random()>.4?"#7f9a54":"#5d7a42",n.beginPath(),n.arc(h,d,2+Math.random()*14,0,7),n.fill()}n.globalAlpha=1;const l=qe(88);for(let c=0;c<9;c++){const h=l()*s,d=t*(.86+l()*.12),u=26+l()*46;n.save(),n.beginPath();const f=9;for(let p=0;p<=f;p++){const x=p/f*Math.PI*2,m=u*(.6+l()*.55),g=h+Math.cos(x)*m*1.3,v=d+Math.sin(x)*m*.8;p?n.lineTo(g,v):n.moveTo(g,v)}n.closePath(),n.clip(),n.fillStyle="#9d9480",n.fillRect(h-u*2,d-u,u*4,u*2);for(let p=0;p<14;p++)n.fillStyle=`rgba(${140+l()*50},${132+l()*46},${112+l()*40},0.9)`,n.beginPath(),n.ellipse(h+(l()-.5)*u*2,d+(l()-.5)*u*1.2,8+l()*14,5+l()*9,l()*3,0,7),n.fill();n.restore()}n.globalAlpha=.16,n.strokeStyle="#8f866c",n.lineWidth=1.4;for(let c=0;c<10;c++){let h=Math.random()*s,d=Math.random()*t*.6;n.beginPath(),n.moveTo(h,d);for(let u=0;u<18;u++)h+=(Math.random()-.5)*10,d+=Math.random()*26,n.lineTo(h,d);n.stroke()}return n.globalAlpha=1,ss(e,{repeat:[1,1]})}function uw(s,t=2){const e=s.width,n=s.height,r=s.getContext("2d").getImageData(0,0,e,n).data,o=ni(e,n),a=o.getContext("2d"),l=a.createImageData(e,n),c=l.data,h=(d,u)=>{const f=((u+n)%n*e+(d+e)%e)*4;return(r[f]*.299+r[f+1]*.587+r[f+2]*.114)/255};for(let d=0;d<n;d++)for(let u=0;u<e;u++){const f=(h(u+1,d)-h(u-1,d))*t,p=(h(u,d-1)-h(u,d+1))*t,x=-f,m=-p,g=1,v=Math.hypot(x,m,g),M=(d*e+u)*4;c[M]=(x/v*.5+.5)*255,c[M+1]=(m/v*.5+.5)*255,c[M+2]=(g/v*.5+.5)*255,c[M+3]=255}return a.putImageData(l,0,0),o}function f0(s=1024,t="warm"){const e=ni(s,s),n=e.getContext("2d"),i=ni(s,s),r=i.getContext("2d");r.fillStyle="#2b2b2b",r.fillRect(0,0,s,s),n.fillStyle=t==="warm"?"#7d7462":"#6c6f66",n.fillRect(0,0,s,s);const o=n.getImageData(0,0,s,s),a=o.data;for(let u=0;u<a.length;u+=4){const f=(Math.random()-.5)*26;a[u]+=f,a[u+1]+=f,a[u+2]+=f}n.putImageData(o,0,0);const l=qe(7),c=12,h=s/c;for(let u=0;u<c;u++){let f=-h*.6*l();for(;f<s;){const p=h*(.75+l()*1.6),x=h*(.7+l()*.22),m=u*h+h*.1+l()*h*.06,g=128+l()*78,v=t==="warm"?1:.55,M=g+16*v,_=g+3,w=g-18*v+4;n.beginPath();const b=7+l()*5;n.moveTo(f+b,m),n.lineTo(f+p-b,m),n.quadraticCurveTo(f+p,m,f+p,m+b),n.lineTo(f+p,m+x-b),n.quadraticCurveTo(f+p,m+x,f+p-b,m+x),n.lineTo(f+b,m+x),n.quadraticCurveTo(f,m+x,f,m+x-b),n.lineTo(f,m+b),n.quadraticCurveTo(f,m,f+b,m),n.closePath();const y=n.createLinearGradient(f,m,f,m+x);y.addColorStop(0,`rgb(${M+14},${_+14},${w+12})`),y.addColorStop(.55,`rgb(${M},${_},${w})`),y.addColorStop(1,`rgb(${M-34},${_-34},${w-30})`),n.fillStyle=y,n.fill();const S=r.createRadialGradient(f+p/2,m+x/2,Math.min(p,x)*.06,f+p/2,m+x/2,Math.max(p,x)*.62),E=.72+l()*.28;S.addColorStop(0,`rgba(255,255,255,${E})`),S.addColorStop(.62,`rgba(210,210,210,${E*.92})`),S.addColorStop(1,"rgba(90,90,90,0.85)"),r.fillStyle=S,r.beginPath(),r.moveTo(f+b,m),r.lineTo(f+p-b,m),r.quadraticCurveTo(f+p,m,f+p,m+b),r.lineTo(f+p,m+x-b),r.quadraticCurveTo(f+p,m+x,f+p-b,m+x),r.lineTo(f+b,m+x),r.quadraticCurveTo(f,m+x,f,m+x-b),r.lineTo(f,m+b),r.quadraticCurveTo(f,m,f+b,m),r.closePath(),r.fill(),n.save(),n.clip();for(let C=0;C<16;C++){n.globalAlpha=.05+l()*.1,n.fillStyle=l()>.5?"#ffffff":"#3a3a30";const P=f+l()*p,L=m+l()*x;n.beginPath(),n.arc(P,L,2+l()*9,0,7),n.fill()}n.restore(),n.globalAlpha=1,f+=p+4+l()*5}}for(let u=0;u<90;u++){n.globalAlpha=.05+Math.random()*.12,n.fillStyle=Math.random()>.5?"#6d8248":"#87955e";const f=Math.random()*s,p=Math.random()*s;n.beginPath(),n.arc(f,p,6+Math.random()*22,0,7),n.fill()}n.globalAlpha=1;const d=ss(e);return d.userData.height=i,d}function dw(s=1024){const t=ni(s,s),e=t.getContext("2d"),n=ni(s,s),i=n.getContext("2d");i.fillStyle="#3a3a3a",i.fillRect(0,0,s,s),e.fillStyle="#8e3f2a",e.fillRect(0,0,s,s);const r=10,o=10,a=s/r,l=s/o,c=qe(31);for(let d=0;d<r;d++)for(let u=0;u<o;u++){const f=u*l+(d%2?l*.5:0),p=d*a,x=.82+c()*.4,m=Pe(138*x,0,255),g=Pe(96*x,0,255),v=Pe(84*x,0,255),M=e.createLinearGradient(f,0,f+l,0);M.addColorStop(0,`rgb(${m*.78},${g*.78},${v*.78})`),M.addColorStop(.3,`rgb(${m},${g},${v})`),M.addColorStop(.62,`rgb(${m*1.04},${g*1.03},${v*1.02})`),M.addColorStop(1,`rgb(${m*.74},${g*.74},${v*.74})`),e.fillStyle=M,e.beginPath(),e.moveTo(f,p+a*.98),e.quadraticCurveTo(f+l*.5,p+a*.42,f+l,p+a*.98),e.lineTo(f+l,p+a),e.lineTo(f,p+a),e.closePath(),e.fill();const _=i.createLinearGradient(f,0,f+l,0);_.addColorStop(0,"rgba(150,150,150,0.9)"),_.addColorStop(.5,"rgba(255,255,255,0.95)"),_.addColorStop(1,"rgba(150,150,150,0.9)"),i.fillStyle=_,i.beginPath(),i.moveTo(f,p+a*.98),i.quadraticCurveTo(f+l*.5,p+a*.42,f+l,p+a*.98),i.lineTo(f+l,p+a),i.lineTo(f,p+a),i.closePath(),i.fill(),e.strokeStyle="rgba(255,220,190,0.18)",e.lineWidth=1,e.beginPath(),e.moveTo(f+l*.12,p+a*.9),e.quadraticCurveTo(f+l*.5,p+a*.16,f+l*.88,p+a*.9),e.stroke()}for(let d=0;d<120;d++){e.globalAlpha=.04+Math.random()*.1,e.fillStyle=Math.random()>.45?"#6f8450":"#3d3a2c";const u=Math.random()*s,f=Math.random()*s;e.beginPath(),e.arc(u,f,4+Math.random()*26,0,7),e.fill()}e.globalAlpha=1;const h=ss(t);return h.userData.height=n,h}function p0(s=512,t=!1){const e=ni(s,s),n=e.getContext("2d"),i=ni(s,s),r=i.getContext("2d");r.fillStyle="#d0d0d0",r.fillRect(0,0,s,s);const o=t?[138,104,70]:[186,146,98];n.fillStyle=`rgb(${o[0]},${o[1]},${o[2]})`,n.fillRect(0,0,s,s);const a=n.getImageData(0,0,s,s),l=a.data;for(let d=0;d<s;d++)for(let u=0;u<s;u++){const f=Qe(u/s*26,d/s*3.2,4),p=Math.sin((d/s*22+f*7)*Math.PI*2)*.5+.5,x=(f-.5)*34+(p-.5)*16,m=(d*s+u)*4;l[m]=Pe(l[m]+x,0,255),l[m+1]=Pe(l[m+1]+x*.9,0,255),l[m+2]=Pe(l[m+2]+x*.7,0,255)}n.putImageData(a,0,0);const c=6;for(let d=1;d<c;d++){const u=d/c*s;n.fillStyle="rgba(20,12,6,0.5)",n.fillRect(0,u,s,2),n.fillStyle="rgba(255,230,190,0.08)",n.fillRect(0,u+2,s,1),r.fillStyle="rgba(30,30,30,1)",r.fillRect(0,u-1,s,4),r.fillStyle="rgba(255,255,255,0.6)",r.fillRect(0,u+3,s,2)}for(let d=0;d<5;d++){const u=Math.random()*s,f=Math.random()*s;for(let p=8;p>0;p-=1.6)n.globalAlpha=.1,n.strokeStyle="#2a1a0c",n.lineWidth=1.4,n.beginPath(),n.ellipse(u,f,p*1.5,p,.3,0,7),n.stroke()}n.globalAlpha=1;const h=ss(e);return h.userData.height=i,h}function fw(s=512){const t=ni(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=Qe(o/s*14,r/s*3,5),l=Math.abs(Math.sin(o/s*Math.PI*9+a*8)),c=88+a*46-(1-l)*40,h=(r*s+o)*4;i[h]=Pe(c*1.02),i[h+1]=Pe(c*.9),i[h+2]=Pe(c*.72),i[h+3]=255}return e.putImageData(n,0,0),ss(t)}function pw(s=512){const t=ni(s,s),e=t.getContext("2d"),n=new Float32Array(s*s);for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=l/s*Math.PI*2,h=a/s*Math.PI*2;let d=0;d+=Math.sin(c*3+h*2+.7)*.5,d+=Math.sin(c*5-h*4+2.1)*.28,d+=Math.sin(c*8+h*7+4.4)*.16,d+=Math.sin(c*13-h*11+1.2)*.09,d+=Math.sin(c*21+h*17+3.3)*.05,n[a*s+l]=d}const i=e.createImageData(s,s),r=i.data,o=2.2;for(let a=0;a<s;a++)for(let l=0;l<s;l++){const c=(l-1+s)%s,h=(l+1)%s,d=(a-1+s)%s,u=(a+1)%s,f=(n[a*s+h]-n[a*s+c])*o,p=(n[u*s+l]-n[d*s+l])*o,x=-f,m=-p,g=1,v=Math.hypot(x,m,g),M=(a*s+l)*4;r[M]=(x/v*.5+.5)*255,r[M+1]=(m/v*.5+.5)*255,r[M+2]=(g/v*.5+.5)*255,r[M+3]=255}return e.putImageData(i,0,0),ss(t,{srgb:!1})}function mw(s=256){const t=ni(s,s),e=t.getContext("2d");e.clearRect(0,0,s,s);const n=qe(4242);for(let i=0;i<150;i++){const r=n()*Math.PI*2,o=Math.pow(n(),.62)*s*.46,a=s/2+Math.cos(r)*o,l=s/2+Math.sin(r)*o*.92,c=8+n()*15,h=5+n()*9,d=190+n()*65;e.fillStyle=`rgba(${d},${d},${d},1)`,e.beginPath(),e.ellipse(a,l,c,h,n()*6.28,0,7),e.fill()}return ss(t,{srgb:!1})}function Xm(s=512){const t=ni(s,s),e=t.getContext("2d"),n=e.createImageData(s,s),i=n.data;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=Qe(o/s*18,r/s*18,4),l=Qe(o/s*60+5,r/s*60,3),c=150+a*44+(l-.5)*26,h=(r*s+o)*4;i[h]=Pe(c*1.02),i[h+1]=Pe(c*.9),i[h+2]=Pe(c*.74),i[h+3]=255}return e.putImageData(n,0,0),ss(t)}const gw=`
uniform vec3  uSunDir;
uniform vec3  uSunColor;
uniform vec3  uSkyColor;
uniform vec3  uBounceColor;
uniform vec3  uBounceTint;
uniform vec3  uShadowTint;
uniform vec3  uFogColor;
uniform float uFogDensity;
uniform float uTime;

#include <common>
#include <packing>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

${km}

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
`,xw=`
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
`,vw=`
precision highp float;

uniform sampler2D uSplat;
uniform vec2 uWorldMap;   // (半边长, 边长)
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

${gw}

void main() {
  vec2 sp = ( vWorld.xz + uWorldMap.x ) / uWorldMap.y;
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

  float shadow = toonShadowMask();
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
  outc += col * uBounceColor * uBounceTint * 0.05;

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
`;function _w(s=2048){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=s/Mi,i=u=>(u+Nn)*n,r=u=>(u+Nn)*n;e.fillStyle="rgb(150,0,0)",e.fillRect(0,0,s,s);const o=qe(5);e.globalCompositeOperation="source-over";for(let u=0;u<2600;u++){const f=o()*s,p=o()*s,x=12+o()*90;e.fillStyle=`rgba(${120+o()*135},0,0,${.05+o()*.16})`,e.beginPath(),e.arc(f,p,x,0,7),e.fill()}const a=[];for(let u=-Nn;u<=Nn;u+=2){const f=is(u);a.push([u,ns(u)-f-1.6])}for(let u=Nn;u>=-Nn;u-=2){const f=is(u);a.push([u,ns(u)+f+1.6])}e.save(),e.filter="blur(7px)",e.fillStyle="rgb(0,0,225)",e.beginPath(),a.forEach(([u,f],p)=>p?e.lineTo(i(u),r(f)):e.moveTo(i(u),r(f))),e.closePath(),e.fill(),e.restore();const l=(u,f)=>{e.save(),e.filter="blur(4px)",e.strokeStyle="rgb(0,255,0)",e.lineWidth=f*n,e.lineCap="round",e.lineJoin="round",e.beginPath(),u.forEach(([p,x],m)=>m?e.lineTo(i(p),r(x)):e.moveTo(i(p),r(x))),e.stroke(),e.restore()};l(nu,2.4),l(nu,2.4),l(Vm,1.5);const c=[[13.2,13.6,4.6,2.6],[18.6,13.2,4.2,2.4],[17.2,7.6,5,2.2],[21.4,9.8,2.6,3],[12.4,9,2.4,1.8]];for(const[u,f,p,x]of c)e.save(),e.filter="blur(6px)",e.fillStyle="rgb(0,120,0)",e.beginPath(),e.ellipse(i(u),r(f),p*n,x*n,.2,0,7),e.fill(),e.restore();e.save(),e.filter="blur(6px)",e.fillStyle="rgb(0,235,0)",e.beginPath(),e.ellipse(i(0),r(0),4.5*n,4.5*n,0,0,7),e.fill(),e.beginPath(),e.ellipse(i(-8.3),r(1.5),5*n,4*n,.1,0,7),e.fill(),e.restore(),e.save(),e.filter="blur(8px)",e.fillStyle="rgb(0,150,0)",e.beginPath(),e.ellipse(i(16.4),r(11.4),8.2*n,6.4*n,.1,0,7),e.fill(),e.restore(),e.save(),e.filter="blur(5px)",e.strokeStyle="rgba(0,150,0,0.55)",e.lineWidth=1*n,e.beginPath(),pl.forEach(([u,f],p)=>p?e.lineTo(i(u),r(f)):e.moveTo(i(u),r(f))),e.stroke(),e.restore();const h=e.getImageData(0,0,s,s),d=new _n(new Uint8Array(h.data),s,s,rn);return d.magFilter=Te,d.minFilter=Qn,d.generateMipmaps=!0,d.flipY=!1,d.needsUpdate=!0,{texture:d,canvas:t,data:h.data,size:s}}function yw(s=512){const t=new Uint8Array(s*s*4),e=-8,n=40;for(let r=0;r<s;r++)for(let o=0;o<s;o++){const a=o/(s-1)*Mi-Nn,l=r/(s-1)*Mi-Nn,c=qt(a,l),h=Pe((c-e)/n,0,1),d=Math.round(h*65535),u=(r*s+o)*4;t[u]=d>>8&255,t[u+1]=d&255,t[u+2]=0,t[u+3]=255}const i=new _n(t,s,s,rn);return i.magFilter=Te,i.minFilter=Te,i.flipY=!1,i.needsUpdate=!0,i.userData={MIN:e,RANGE:n},i}function Mw(s,t,e=256){const n=[.5,.56,.26],i=[.58,.44,.31],r=[.34,.46,.5],o=new Uint8Array(e*e*4),a=t/e;for(let c=0;c<e;c++)for(let h=0;h<e;h++){let d=0,u=0,f=0,p=0;const x=Math.floor(c*a),m=Math.floor(h*a),g=Math.min(t,Math.floor((c+1)*a)),v=Math.min(t,Math.floor((h+1)*a));for(let E=x;E<g;E+=2)for(let C=m;C<v;C+=2){const P=(E*t+C)*4;d+=s[P],u+=s[P+1],f+=s[P+2],p++}const M=d/Math.max(p,1)/255,_=u/Math.max(p,1)/255,w=f/Math.max(p,1)/255,b=M+_+w;let y;b<.02?y=n:y=[(n[0]*M+i[0]*_+r[0]*w)/b,(n[1]*M+i[1]*_+r[1]*w)/b,(n[2]*M+i[2]*_+r[2]*w)/b];const S=(c*e+h)*4;o[S]=Math.min(255,Math.round(y[0]*255)),o[S+1]=Math.min(255,Math.round(y[1]*255)),o[S+2]=Math.min(255,Math.round(y[2]*255)),o[S+3]=255}const l=new _n(o,e,e,rn);return l.magFilter=Te,l.minFilter=Te,l.colorSpace=qn,l.needsUpdate=!0,l}const qm=new _n(new Uint8Array([255,255,255,255]),1,1);qm.needsUpdate=!0;function Sw(s,t){const n=new Ui(Mi,Mi,720,720);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let l=0;l<i.count;l++){const c=i.getX(l),h=i.getZ(l);i.setY(l,qt(c,h))}n.computeVertexNormals(),n.computeBoundingSphere();const r=Xm(512);r.repeat.set(1,1);const o=new ze({vertexShader:xw,fragmentShader:vw,uniforms:Object.assign({},Et.lights,De,{uSplat:{value:s},uWorldMap:{value:new J(Nn,Mi)},uDirt:{value:r},uAO:{value:qm},uAORegion:{value:new Se(2,34,220,0)},uGrass1:{value:new K(7638080)},uGrass2:{value:new K(4745264)},uGrass3:{value:new K(2835746)},uDirtCol:{value:new K(10257759)},uRockCol:{value:new K(7170136)},uWaterY:{value:On}}),lights:!0}),a=new Lt(n,o);return a.receiveShadow=!0,a.castShadow=!1,a.name="terrain",{mesh:a,material:o}}function bw(){const s=new ot,t=[{r0:400,r1:760,h:42,color:7309923,seed:1.3,seg:220},{r0:720,r1:1120,h:74,color:8296352,seed:4.7,seg:180},{r0:1060,r1:1700,h:118,color:10334904,seed:9.1,seg:150}];for(const e of t){const n=e.seg,i=7,r=new Jt,o=[],a=[],l=[];for(let d=0;d<=i;d++){const u=d/i,f=e.r0+(e.r1-e.r0)*u;for(let p=0;p<=n;p++){const x=p/n*Math.PI*2,m=Math.cos(x)*f,g=Math.sin(x)*f,v=Qe(Math.cos(x)*3.2+e.seed,Math.sin(x)*3.2+e.seed,4),M=Qe(Math.cos(x)*8+e.seed*2,Math.sin(x)*8,3);let _=(v*.75+M*.35)*e.h*Math.sin(Math.PI*Math.min(1,u*1.15));_*=.55+.45*$i(0,.35,u),_+=12*Math.sin(x*5+e.seed)*u,o.push(m,_-2,g),l.push(p/n,u)}}for(let d=0;d<i;d++)for(let u=0;u<n;u++){const f=d*(n+1)+u,p=f+n+1;a.push(f,p,f+1,p,p+1,f+1)}r.setAttribute("position",new At(o,3)),r.setAttribute("uv",new At(l,2)),r.setIndex(a),r.computeVertexNormals();const c=ut({color:e.color,rim:.18,spec:0,fresnel:.02,noise:.1,noiseScale:.02,side:Fe,ao:1,saturation:.9});c.uniforms.uFogDensity={value:.0024};const h=new Lt(r,c);h.frustumCulled=!1,s.add(h)}return s}const ue={},N={};let m0=!1;function ww(){if(m0)return;m0=!0,ue.stucco=cw(1024),ue.stuccoTower=hw(2048,1024),ue.stone=f0(1024,"warm"),ue.stoneCool=f0(1024,"cool"),ue.roof=dw(1024),ue.wood=p0(512,!1),ue.woodDark=p0(512,!0),ue.bark=fw(512),ue.dirt=Xm(512),ue.leafCluster=mw(256);const s=(t,e,n)=>{const i=new Cc(uw(t,e));return i.wrapS=i.wrapT=Ys,i.colorSpace=qn,i.anisotropy=8,i};ue.nStone=s(ue.stone.userData.height||ue.stone.image,2.2),ue.nStucco=s(ue.stuccoTower.image,1.6),ue.nRoof=s(ue.roof.userData.height||ue.roof.image,2.4),ue.nWood=s(ue.wood.userData.height||ue.wood.image,2),ue.nBark=s(ue.bark.image,2.4),N.stucco=ut({map:ue.stucco,color:16777215,tint:16774368,mapMix:1,rim:.22,rimColor:16774104,spec:.03,specPower:8,fresnel:.1,noise:.07,noiseScale:.55,saturation:1.02}),N.stuccoTower=ut({map:ue.stuccoTower,normalMap:ue.nStucco,normalScale:.75,color:16777215,tint:16774886,mapMix:1,rim:.22,rimColor:16774104,spec:.03,specPower:8,fresnel:.1,noise:.05,noiseScale:.55,saturation:1.02,grime:[7.3,11],roughVar:.45}),N.stone=ut({map:ue.stone,normalMap:ue.nStone,normalScale:1,color:16777215,tint:13483937,mapMix:1,rim:.26,rimColor:16773328,spec:.1,specPower:14,fresnel:.13,noise:.1,noiseScale:.7,grime:[6.9,9.6],roughVar:.7}),N.stoneCool=ut({map:ue.stoneCool,color:16777215,tint:13027005,mapMix:1,rim:.3,rimColor:15660287,spec:.16,specPower:18,fresnel:.2,noise:.1,noiseScale:.7}),N.roof=ut({map:ue.roof,normalMap:ue.nRoof,normalScale:.28,color:16777215,tint:13218716,mapMix:1,rim:.16,rimColor:16767408,spec:.1,specPower:18,fresnel:.14,noise:.08,noiseScale:.6,saturation:1.05,roughVar:.9}),N.wood=ut({map:ue.wood,normalMap:ue.nWood,normalScale:.8,color:16777215,tint:13286822,mapMix:1,rim:.2,rimColor:16769720,spec:.06,specPower:10,fresnel:.07,noise:.1,noiseScale:.8,roughVar:.8}),N.woodDark=ut({color:6965804,rim:.3,rimColor:16767400,spec:.05,specPower:10,fresnel:.06,noise:.14,noiseScale:1.1,saturation:1.04}),N.woodPlain=ut({color:9400392,rim:.22,rimColor:15785152,spec:.05,fresnel:.05,noise:.12,noiseScale:.9}),N.woodPale=ut({color:11569756,rim:.26,rimColor:16772813,spec:.05,fresnel:.05,noise:.14,noiseScale:.9}),N.darkInset=ut({color:2366484,rim:0,spec:0,fresnel:.02,noise:.05,ao:1}),N.metal=ut({color:3882810,rim:.35,rimColor:14674158,spec:.55,specPower:40,fresnel:.25,noise:.06}),N.dirt=ut({color:6047280,rim:.18,rimColor:13215864,spec:.04,fresnel:.04,noise:.22,noiseScale:2.4,saturation:1.02}),N.cabbage=ut({color:7313989,rim:.42,rimColor:14217384,spec:.06,specPower:12,fresnel:.04,noise:.16,noiseScale:3,wrap:.45,saturation:1.06}),N.slate=ut({map:ue.roof,normalMap:ue.nRoof,normalScale:1,color:16777215,tint:9148582,mapMix:1,rim:.26,rimColor:14214384,spec:.22,specPower:24,fresnel:.18,noise:.1,noiseScale:1.2,roughVar:.9,saturation:.9}),N.sailCloth=ut({color:15327174,rim:.34,rimColor:16774364,spec:.02,fresnel:.05,noise:.1,noiseScale:1.6,side:Fe,wrap:.4}),N.zinc=ut({color:7041400,rim:.28,rimColor:14213868,spec:.32,specPower:26,fresnel:.3,noise:.1,noiseScale:2,roughVar:.8}),N.terracotta=ut({color:11886908,rim:.28,rimColor:16765870,spec:.12,specPower:16,fresnel:.1,noise:.14,noiseScale:1.2}),N.straw=ut({color:13084768,rim:.3,rimColor:16773312,spec:.04,fresnel:.04,noise:.3,noiseScale:2,side:Fe}),N.whiteCloth=ut({color:15919830,rim:.3,rimColor:16777215,spec:.02,fresnel:.06,noise:.06,side:Fe}),N.bark=ut({map:ue.bark,normalMap:ue.nBark,normalScale:1,color:10127990,tint:12628122,mapMix:.85,rim:.3,rimColor:16769200,spec:.05,specPower:8,fresnel:.05,noise:.18,noiseScale:1.6,saturation:1.05}),N.leaf=ut({color:6060602,rim:.3,rimColor:14478528,spec:.05,specPower:9,fresnel:.03,noise:.2,noiseScale:.7,wrap:.62,trans:.55,saturation:1.06,vcolor:!0}),N.leafCard=ut({map:ue.leafCluster,color:16777215,alphaMap:!0,alphaTest:.45,tint:5469740,rim:.34,rimColor:14478528,spec:.04,fresnel:.02,noise:.18,noiseScale:.9,wrap:.6,trans:.5,side:Fe,vcolor:!0,saturation:1.04}),N.leafDark=ut({color:4483114,rim:.28,rimColor:13624496,spec:.04,specPower:9,fresnel:.03,noise:.22,noiseScale:.7,wrap:.6,trans:.45}),N.flowerBlue=ut({color:16777215,rim:.45,rimColor:15266047,spec:.06,specPower:12,fresnel:.05,noise:.08,noiseScale:2.2,wrap:.4,saturation:1.02,vcolor:!0}),N.flowerWhite=ut({color:15921378,rim:.5,rimColor:16777215,spec:.05,fresnel:.05,noise:.06,noiseScale:2.2,wrap:.5}),N.grassCard=ut({color:7313978,rim:.5,rimColor:14217376,spec:.04,fresnel:.03,noise:.2,noiseScale:1.2,wrap:.55,trans:.35,side:Fe}),N.lampGlass=ut({color:16767392,rim:.2,rimColor:16773312,spec:.3,fresnel:.2,noise:.05,emissive:.55}),N.potPlant=ut({color:16777215,rim:.5,rimColor:15267248,spec:.05,fresnel:.03,noise:.12,noiseScale:2.4,wrap:.55,trans:.35,vcolor:!0})}const ad=2;function Ym(s,t,e){const n=s.attributes.uv;if(!n)return s;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*t,n.getY(i)*e);return n.needsUpdate=!0,s}function st(s,t,e,n=ad){const i=new Li(s,t,e),r=i.attributes.uv,o=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++){const[l,c]=o[a],h=Math.max(l/n,.34),d=Math.max(c/n,.34);for(let u=0;u<4;u++){const f=a*4+u;r.setXY(f,r.getX(f)*h,r.getY(f)*d)}}return r.needsUpdate=!0,i}function Ee(s,t,e,n=24,i=ad,r=!1){const o=new Oe(s,t,e,n,1,r),a=Math.PI*(s+t);return Ym(o,a/i,e/i),o.translate(0,e/2,0),o}function oc(s,t=64,e=1,n=1){const i=s.map(([o,a])=>new J(o,a)),r=new Zr(i,t);return Ym(r,e,n),r}function ld(s,t,e,n=.45,i=1.2){const r=s+n*2,o=t+n*2,a=r/2,l=o/2,c=Math.hypot(l,e),h=[],d=[],u=[],f=(y,S,E,C,P)=>(h.push(y,S,E),d.push(C,P),h.length/3-1),p=f(-a,0,-l,0,0),x=f(a,0,-l,r/i,0),m=f(a,e,0,r/i,c/i),g=f(-a,e,0,0,c/i),v=f(-a,0,l,0,0),M=f(a,0,l,r/i,0),_=f(a,e,0,r/i,c/i),w=f(-a,e,0,0,c/i);u.push(p,m,x,p,g,m),u.push(v,M,_,v,_,w);const b=new Jt;return b.setAttribute("position",new At(h,3)),b.setAttribute("uv",new At(d,2)),b.setIndex(u),b.computeVertexNormals(),b}function Tw(s,t,e=.35){const n=new Ni,i=s/2;return n.moveTo(-i,0),n.lineTo(-i,t-i*(e*2)),n.quadraticCurveTo(-i,t,0,t),n.quadraticCurveTo(i,t,i,t-i*(e*2)),n.lineTo(i,0),n.closePath(),n}function ac(s,t,e=.06){const n=new ra(Tw(s,t),{depth:e,bevelEnabled:!1,curveSegments:12});return n.translate(0,0,-e/2),n}function pn(s){const t=s.map(h=>h.index?h.toNonIndexed():h);let e=0;for(const h of t)e+=h.attributes.position.count;const n=new Float32Array(e*3),i=new Float32Array(e*3),r=new Float32Array(e*2),o=t.every(h=>h.attributes.color),a=o?new Float32Array(e*3):null;let l=0;for(const h of t){const d=h.attributes.position,u=h.attributes.normal,f=h.attributes.uv;n.set(d.array,l*3),u&&i.set(u.array,l*3),f&&r.set(f.array,l*2),o&&a.set(h.attributes.color.array,l*3),l+=d.count}const c=new Jt;return c.setAttribute("position",new oe(n,3)),c.setAttribute("normal",new oe(i,3)),c.setAttribute("uv",new oe(r,2)),o&&c.setAttribute("color",new oe(a,3)),c}function Bn(s,t){const e=new K(t),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=e.r,i[r*3+1]=e.g,i[r*3+2]=e.b;return s.setAttribute("color",new oe(i,3)),s}function Wr(s,t=.2,e=1.2,n=0){const i=s.attributes.position,r=new R;for(let o=0;o<i.count;o++){r.fromBufferAttribute(i,o);const a=Math.sin(r.x*e+n)*Math.cos(r.y*e*1.3+n)*Math.sin(r.z*e*.9+n*2),l=Math.sin(r.x*e*2.7+1.1)*Math.cos(r.z*e*2.2+n),c=1+(a*.7+l*.3)*t;i.setXYZ(o,r.x*c,r.y*c,r.z*c)}return i.needsUpdate=!0,s.computeVertexNormals(),s}function ps(s=0,t=1){const e=new Yr(1,t);return Wr(e,.34,1.7,s),e.scale(1,.72,.92),e.computeVertexNormals(),e}const Aw=`
precision highp float;
uniform float uTime;
uniform vec3  uCam;
uniform float uGround;
uniform float uBoxXZ;
uniform float uYMin;
uniform float uYRange;
uniform float uSize;
uniform float uSway;
uniform vec2  uDrift;
uniform float uAlphaMul;
uniform vec3  uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  float t = uTime;
  float ph = aSeed * 6.2831853;

  // 摆动 + 单向风漂移
  float dx = sin( t * 0.21 + ph ) * uSway + t * uDrift.x;
  float dz = cos( t * 0.17 + ph * 0.75 ) * uSway + t * uDrift.y;
  float dy = sin( t * 0.33 + ph * 0.5 ) * uSway * 0.55;

  // XZ 围着相机循环
  float x = position.x + dx;
  float z = position.z + dz;
  vec3 wp;
  wp.x = uCam.x + mod( x - uCam.x + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  wp.z = uCam.z + mod( z - uCam.z + uBoxXZ * 0.5, uBoxXZ ) - uBoxXZ * 0.5;
  // Y 贴地循环
  wp.y = uGround + uYMin + mod( position.y + dy, uYRange );

  vec4 mv = viewMatrix * vec4( wp, 1.0 );
  float dist = -mv.z;

  // 太近 / 太远都淡出；远边界收在包裹半径内，避免突然弹出
  vAlpha = smoothstep( 1.4, 3.8, dist )
         * ( 1.0 - smoothstep( uBoxXZ * 0.30, uBoxXZ * 0.48, dist ) )
         * uAlphaMul;

  // 逆光更亮
  vec3 vd = normalize( wp - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 2.0 );

  gl_PointSize = min( uSize * aScale * ( 300.0 / max( dist, 0.5 ) ), 70.0 );
  gl_Position = projectionMatrix * mv;
}
`,Ew=`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
uniform float uDusk;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  float a = smoothstep( 0.5, 0.06, d );
  vec3 col = mix( uColor, uSunColor * 1.4, vBack * 0.75 );
  // 黄昏：整体压暗并往暖橘偏
  col = mix( col, col * vec3( 1.22, 0.86, 0.62 ), uDusk * 0.8 );
  gl_FragColor = vec4( col, a * vAlpha * ( 0.28 + vBack * 0.75 ) );
}
`,Cw=[{box:34,count:640,yMin:.1,yRange:3.2,size:.09,sway:.55,drift:[.1,.05],alpha:1.3,color:16774877},{box:72,count:1500,yMin:.35,yRange:9,size:.058,sway:.9,drift:[.22,.1],alpha:.98,color:16773840},{box:132,count:900,yMin:2.8,yRange:17,size:.036,sway:1.3,drift:[.4,.18],alpha:.55,color:16777215}];function Rw(){const s=new ot;s.name="pollen";const t=Cw.map((e,n)=>{const i=qe(5+n*97),r=new Float32Array(e.count*3),o=new Float32Array(e.count),a=new Float32Array(e.count);for(let d=0;d<e.count;d++)r[d*3]=(i()-.5)*e.box,r[d*3+1]=i()*e.yRange,r[d*3+2]=(i()-.5)*e.box,o[d]=i(),a[d]=.55+i()*1.25;const l=new Jt;l.setAttribute("position",new oe(r,3)),l.setAttribute("aSeed",new oe(o,1)),l.setAttribute("aScale",new oe(a,1));const c=new ze({vertexShader:Aw,fragmentShader:Ew,uniforms:{uTime:De.uTime,uCam:{value:new R},uGround:{value:0},uBoxXZ:{value:e.box},uYMin:{value:e.yMin},uYRange:{value:e.yRange},uSize:{value:e.size},uSway:{value:e.sway},uDrift:{value:new J(...e.drift)},uAlphaMul:{value:e.alpha},uSunDir:De.uSunDir,uColor:{value:new K(e.color)},uSunColor:De.uSunColor,uDusk:De.uDusk},transparent:!0,depthWrite:!1,blending:Lo}),h=new na(l,c);return h.frustumCulled=!1,h.renderOrder=20+n,s.add(h),h});return s.userData.update=(e,n)=>{for(const i of t){const r=i.material.uniforms;r.uCam.value.copy(e),r.uGround.value=n}},s.userData.layers=t,s}const Pw=`
precision highp float;
uniform float uTime;
uniform vec3  uCam;
uniform float uSize;
uniform float uAlphaMul;
uniform vec3  uSunDir;
attribute float aSeed;
attribute float aScale;
varying float vAlpha;
varying float vBack;

void main() {
  float t = uTime;
  float ph = aSeed * 6.2831853;

  vec3 p = position;
  // 局部涡流：不产生净位移，所以雾团始终待在河道上方
  p.x += sin( t * 0.085 + ph ) * 2.4 + sin( t * 0.031 + ph * 2.1 ) * 1.3;
  p.z += cos( t * 0.067 + ph * 1.3 ) * 1.7;
  p.y += sin( t * 0.19 + ph * 0.7 ) * 0.28;

  vec4 mv = viewMatrix * vec4( p, 1.0 );
  float dist = -mv.z;

  // 近处不要糊住镜头，远处自然消失
  float fade = smoothstep( 2.0, 12.0, dist ) * ( 1.0 - smoothstep( 55.0, 135.0, dist ) );
  // 每团自己也有呼吸
  float breathe = 0.62 + 0.38 * sin( t * 0.23 + ph * 1.7 );
  vAlpha = fade * breathe * uAlphaMul;

  vec3 vd = normalize( p - uCam );
  vBack = pow( max( dot( vd, uSunDir ), 0.0 ), 3.0 );

  gl_PointSize = uSize * aScale * ( 300.0 / max( dist, 1.0 ) );
  gl_Position = projectionMatrix * mv;
}
`,Iw=`
precision highp float;
uniform vec3 uColor;
uniform vec3 uSunColor;
uniform float uDusk;
varying float vAlpha;
varying float vBack;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length( c );
  if ( d > 0.5 ) discard;
  // 边缘收得很软，避免看出是个圆
  float a = smoothstep( 0.5, 0.0, d );
  a *= a;
  vec3 col = mix( uColor, uSunColor * 1.15, vBack * 0.55 );
  col = mix( col, col * vec3( 1.25, 0.84, 0.62 ), uDusk * 0.85 );
  // 傍晚水汽更重
  gl_FragColor = vec4( col, a * vAlpha * ( 1.0 + 0.55 * uDusk ) );
}
`;function Dw(s=200,t=54){const e=qe(913),n=s+t,i=new Float32Array(n*3),r=new Float32Array(n),o=new Float32Array(n);let a=0;for(let d=0;d<s;d++,a++){const u=-230+d/(s-1)*460+(e()-.5)*7,f=ns(u),p=is(u);i[a*3]=u,i[a*3+1]=On+.18+e()*1.05,i[a*3+2]=f+(e()-.5)*p*2.6,r[a]=e(),o[a]=.55+e()*1.05}for(let d=0;d<t;d++,a++){const u=d/Math.max(1,t-1)*(fs.length-1),f=Math.min(fs.length-2,Math.floor(u)),p=u-f,x=fs[f][0]+(fs[f+1][0]-fs[f][0])*p,m=fs[f][1]+(fs[f+1][1]-fs[f][1])*p;i[a*3]=x+(e()-.5)*1.6,i[a*3+1]=qt(x,m)+.25+e()*.6,i[a*3+2]=m+(e()-.5)*1.6,r[a]=e(),o[a]=.4+e()*.55}const l=new Jt;l.setAttribute("position",new oe(i,3)),l.setAttribute("aSeed",new oe(r,1)),l.setAttribute("aScale",new oe(o,1));const c=new ze({vertexShader:Pw,fragmentShader:Iw,uniforms:{uTime:De.uTime,uCam:{value:new R},uSize:{value:5},uAlphaMul:{value:.28},uSunDir:De.uSunDir,uColor:{value:new K(14674414)},uSunColor:De.uSunColor,uDusk:De.uDusk},transparent:!0,depthWrite:!1,blending:ms}),h=new na(l,c);return h.frustumCulled=!1,h.renderOrder=17,h.name="riverMist",h.userData.update=d=>{c.uniforms.uCam.value.copy(d)},h}const g0=[[16771496,15245902],[16315624,14077883],[16766694,13927338],[12575999,7317720],[16773296,14263361]],Oh=[{side:1,pos:[.044,.008,0],s:1,pal:0,flapK:1},{side:-1,pos:[-.044,.008,0],s:1,pal:1,flapK:1},{side:1,pos:[.042,-.013,-.013],s:.7,pal:1,flapK:.8},{side:-1,pos:[-.042,-.013,-.013],s:.7,pal:0,flapK:.8}];function Lw(s,t=26){const e=new ot;e.name="butterflies";const n=qe(31),i=new Ui(.086,.068),r=new Ii({color:16777215,side:Fe}),o=new sa(.008,.05,3,6);o.rotateX(Math.PI/2);const a=new Ii({color:3812380}),l=new Cn(i,r,t*4),c=new Cn(o,a,t);l.instanceMatrix.setUsage(Xh),c.instanceMatrix.setUsage(Xh),l.frustumCulled=!1,c.frustumCulled=!1,l.renderOrder=6,c.renderOrder=6,e.add(l,c);const h=[],d=new K;for(let b=0;b<t;b++){const y=s[Math.floor(n()*s.length)],S=g0[Math.floor(n()*g0.length)];h.push({cx:y.x+(n()-.5)*3.4,cz:y.z+(n()-.5)*3.4,baseY:qt(y.x,y.z)+.45+n()*1.15,phase:n()*6.28,speed:.42+n()*.75,radius:.8+n()*2.1,flapRate:15+n()*8,bob:.16+n()*.22,sz:.78+n()*.55,pal:S});for(let E=0;E<4;E++)l.setColorAt(b*4+E,d.setHex(Oh[E].pal===0?S[0]:S[1]))}const u=new R,f=new Je,p=new R,x=new R,m=new Je,g=new R,v=new zn,M=new Wt,_=new Wt;let w=0;return e.userData.update=b=>{w+=b;const y=De.uSunColor.value,S=.45+.55*(y.r*.35+y.g*.45+y.b*.2);for(let E=0;E<t;E++){const C=h[E].pal;for(let P=0;P<4;P++)d.setHex(Oh[P].pal===0?C[0]:C[1]).multiplyScalar(S).lerp(y,.22),l.setColorAt(E*4+P,d)}l.instanceColor&&(l.instanceColor.needsUpdate=!0);for(let E=0;E<t;E++){const C=h[E],P=w*C.speed+C.phase;u.set(C.cx+Math.cos(P)*C.radius,C.baseY+Math.sin(P*2.3)*C.bob,C.cz+Math.sin(P*.83)*C.radius),v.set(0,-P+Math.PI/2,0),f.setFromEuler(v),p.setScalar(C.sz),M.compose(u,f,p),c.setMatrixAt(E,M);const L=Math.sin(w*C.flapRate+C.phase)*.9;for(let F=0;F<4;F++){const D=Oh[F];x.set(D.pos[0],D.pos[1],D.pos[2]),v.set(0,D.side*.35,L*D.flapK),m.setFromEuler(v),g.set(D.s,D.s,1),_.compose(x,m,g),_.premultiply(M),l.setMatrixAt(E*4+F,_)}}l.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0},e.userData.count=t,e}const Nw=`
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
`,Uw=`
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
`;function Zm(s=22,t=3.4,e=.5){const n=qe(404),i=new Float32Array(s*3),r=new Float32Array(s);for(let c=0;c<s;c++)i[c*3]=(n()-.5)*.16,i[c*3+1]=0,i[c*3+2]=(n()-.5)*.16,r[c]=n();const o=new Jt;o.setAttribute("position",new oe(i,3)),o.setAttribute("aSeed",new oe(r,1));const a=new ze({vertexShader:Nw,fragmentShader:Uw,uniforms:{uTime:De.uTime,uRise:{value:t},uSpread:{value:e},uColor:{value:new K(14210767)}},transparent:!0,depthWrite:!1,blending:ms}),l=new na(o,a);return l.frustumCulled=!1,l.renderOrder=18,l}const Kn=(s,t,e)=>new R(s,t,e);function It(s,t,e,n=0,i=0,r=0){const o=new Lt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function Bs(s,t,e,n,i=ad){const r=new R().subVectors(t,s),o=r.length(),a=st(e,o,e,i),l=new Lt(a,n);return l.position.copy(s).add(t).multiplyScalar(.5),l.quaternion.setFromUnitVectors(new R(0,1,0),r.clone().normalize()),l.castShadow=!0,l.receiveShadow=!0,l}function vi(s=.85,t=1.15,e={}){const n=new ot,i=It(n,ac(s+.34,t+.3,.1),N.stone,0,-.06,.05);i.castShadow=!1,It(n,ac(s,t,.06),N.darkInset,0,0,.03).castShadow=!1;const r=.07;if(It(n,st(r,t,.1),N.woodDark,-s/2,t/2,.09),It(n,st(r,t,.1),N.woodDark,s/2,t/2,.09),It(n,st(s+r*2,r,.1),N.woodDark,0,t,.09),It(n,st(s+r*2,r,.1),N.woodDark,0,.02,.09),It(n,st(s,.045,.06),N.woodDark,0,t*.55,.11),It(n,st(.04,t*.9,.05),N.woodDark,0,t*.5,.11),It(n,st(s+.46,.1,.32),N.stone,0,-.08,.14),e.shutters)for(const o of[-1,1]){const a=It(n,st(s*.5,t*.94,.05),N.wood,o*(s*.5+s*.28),t*.5,.14);a.rotation.y=o*.12}return e.box&&It(n,st(s+.3,.24,.3),N.woodDark,0,-.16,.2),n}function Xc(s=1.35,t=2.45,e={}){const n=new ot;It(n,ac(s,t,.06),N.darkInset,0,0,.02).castShadow=!1,It(n,ac(s,t,.1),e.mat||N.woodDark,0,0,.07);const i=5;for(let o=0;o<i;o++){const a=(t-.06)/i;It(n,st(s*.94,a*.92,.04),e.boardMat||N.wood,0,.03+o*a+a*.5,.115)}It(n,st(s*.9,.07,.03),N.metal,0,t*.7,.135),It(n,st(s*.9,.07,.03),N.metal,0,t*.24,.135),It(n,new $e(.075,.017,6,12),N.metal,s*.3,t*.47,.145);const r=.16;return It(n,st(r,t+.12,.24),N.stone,-s/2-r/2,(t+.12)/2,.1),It(n,st(r,t+.12,.24),N.stone,s/2+r/2,(t+.12)/2,.1),It(n,st(s+r*2+.34,.18,.3),N.stone,0,t+.16,.1),It(n,st(s+1,.16,.55),N.stone,0,-.08,.22),n}function Fw(s,t,e,n,i=20){const r=[],o=[],a=[];let l=0;const c=(x,m,g,v,M)=>(r.push(x,m,g),o.push(v,M),l++),h=c(0,t,0,0,0),d=[];for(let x=0;x<=i;x++){const m=e+(n-e)*(x/i),g=Math.sin(m)*s,v=Math.cos(m)*s;d.push(c(g,t,v,g/2,v/2))}for(let x=0;x<i;x++)a.push(h,d[x],d[x+1]);const u=[],f=[];for(let x=0;x<=i;x++){const m=e+(n-e)*(x/i),g=Math.sin(m)*s,v=Math.cos(m)*s,M=x/i*(n-e)*s/2;u.push(c(g,t,v,M,t/2)),f.push(c(g,0,v,M,0))}for(let x=0;x<i;x++)a.push(f[x],f[x+1],u[x+1]),a.push(f[x],u[x+1],u[x]);for(const x of[0,i]){const m=e+(n-e)*(x/i),g=Math.sin(m)*s,v=Math.cos(m)*s,M=c(0,0,0,0,0),_=c(g,0,v,s/2,0),w=c(g,t,v,s/2,t/2),b=c(0,t,0,0,t/2);x===0?a.push(M,_,w,M,w,b):a.push(M,w,_,M,b,w)}const p=new Jt;return p.setAttribute("position",new At(r,3)),p.setAttribute("uv",new At(o,2)),p.setIndex(a),p.computeVertexNormals(),p}function $m(s={}){const{r:t=3.9,top:e=1.15,steps:n=4,tread:i=.44,arc:r=.46,mat:o=N.stone}=s,a=new ot,l=e/n;for(let c=0;c<n;c++){const h=t+(n-c)*i,d=l*(c+1),u=Fw(h,d,-r/2,r/2,22),f=new Lt(u,o);f.castShadow=f.receiveShadow=!0,a.add(f)}return a}function Ow(){const s=new ot;s.position.set(0,7.3,0),s.name="windmill";const t=12.2,e=_=>{const w=Pe(_/t,0,1);return 3.55-.58*Math.pow(w,.72)},n=[],i=26;for(let _=0;_<=i;_++){const w=_/i;n.push([e(w*t),w*t])}n.push([e(t)*1.02,t+.05]),n.push([e(t)*1.04,t+.22]),n.push([0,t+.22]);const r=oc(n,80,1,1);{const _=r.attributes.position,w=new R;for(let b=0;b<_.count;b++){if(w.fromBufferAttribute(_,b),Math.hypot(w.x,w.z)<.2)continue;const S=Math.sin(w.x*1.7+w.y*2.3)*Math.cos(w.z*1.9-w.y*1.1),E=1+S*.0085;_.setXYZ(b,w.x*E,w.y+S*.012,w.z*E)}_.needsUpdate=!0,r.computeVertexNormals()}It(s,r,N.stuccoTower),It(s,Ee(3.68,3.8,1.05,64,2),N.stone,0,0,0),It(s,Ee(3.84,3.88,.14,64,2),N.stone,0,1,0);const o=(_,w,b,y)=>It(s,Ee(b,b,w,64,2,!0),y,0,_,0);o(2.62,.2,e(2.62)+.05,N.stone),o(6.2,.24,e(6.2)+.06,N.woodDark),o(6.44,.08,e(6.44)+.04,N.woodDark),o(9.62,.2,e(9.62)+.05,N.stone),o(11.86,.34,e(11.86)+.1,N.stone);const l=oc([[3.5,0],[3.52,.1],[3.44,.42],[3.22,.95],[2.9,1.6],[2.45,2.3],[1.9,3],[1.3,3.6],[.72,4.05],[.46,4.32],[.44,4.52],[0,4.58]],80,Math.PI*2*3.5/3.2,4.58/3.2);It(s,l,N.roof,0,12.22,0);for(let _=0;_<14;_++){const w=_/14*Math.PI*2,b=[[3.44,.05],[3.2,.95],[2.75,1.9],[2.15,2.85],[1.25,3.7],[.45,4.42]];for(let y=0;y<b.length-1;y++){const[S,E]=b[y],[C,P]=b[y+1],L=Bs(Kn(Math.sin(w)*S,E,Math.cos(w)*S),Kn(Math.sin(w)*C,P,Math.cos(w)*C),.085,N.roof,1);L.position.y+=12.22,s.add(L)}}for(let _=0;_<32;_++){const w=_/32*Math.PI*2,b=It(s,st(.075,.075,.55),N.woodDark,Math.sin(w)*3.36,12.14,Math.cos(w)*3.36);b.rotation.y=w}It(s,new Kt(.24,18,12),N.metal,0,16.85,0),It(s,Ee(.035,.06,.9,8,1),N.metal,0,17,0),It(s,new Kt(.1,12,10),N.metal,0,17.86,0);const c=(_,w,b,y=0)=>{const S=e(w)+y;return _.position.set(Math.sin(b)*S,w,Math.cos(b)*S),_.rotation.y=b,s.add(_),_};c(vi(.78,1.05),4.55,0,-.03),c(vi(.7,.95,{shutters:!0}),7.25,-.62,-.03),c(vi(.62,.85),10.15,.3,-.03),c(vi(.58,.78),5.65,1.15,-.03),s.add($m({r:3.88,top:1.14,steps:4,tread:.44,arc:.48})),c(Xc(1.5,2.5),1.05,0,-.02);{let _=2027;const w=()=>(_=_*16807%2147483647)/2147483647,b=[],y=new Wt;for(let S=0;S<7;S++){const E=w()*Math.PI*2,C=1.1+w()*1.9,P=.45+w()*.55,L=.3+w()*.4,F=e(C)-.02,D=st(P,L,.07,1.1);y.makeRotationFromEuler(new zn(0,E,(w()-.5)*.3)),D.applyMatrix4(y),D.translate(Math.sin(E)*F,C,Math.cos(E)*F),b.push(D)}It(s,pn(b),N.stone)}const h=new ot,d=-.72,u=1.44,f=new Oe(3.78,3.78,.14,48,1,!1,d,u),p=new Lt(f,N.wood);p.castShadow=p.receiveShadow=!0,h.add(p);const x=[],m=9;for(let _=0;_<=m;_++){const w=d+_/m*u,b=Math.sin(w)*3.72,y=Math.cos(w)*3.72;It(h,st(.075,.92,.075),N.woodDark,b,.52,y),x.push(Kn(b,0,y))}for(let _=0;_<m;_++){const w=x[_],b=x[_+1];h.add(Bs(Kn(w.x,.98,w.z),Kn(b.x,.98,b.z),.075,N.woodDark,1)),h.add(Bs(Kn(w.x,.55,w.z),Kn(b.x,.55,b.z),.05,N.woodDark,1));for(let y=1;y<3;y++){const S=y/3,E=w.x+(b.x-w.x)*S,C=w.z+(b.z-w.z)*S;It(h,st(.04,.42,.04),N.woodDark,E,.34,C)}}for(const _ of[-.62,0,.62])h.add(Bs(Kn(Math.sin(_)*3.05,-.1,Math.cos(_)*3.05),Kn(Math.sin(_)*3.7,-1.05,Math.cos(_)*3.7),.1,N.woodDark));h.position.y=9.05,s.add(h),s.add(Bs(Kn(0,10.55,3),Kn(.35,11.3,5),.16,N.woodDark)),s.add(Bs(Kn(0,9.85,3.05),Kn(.3,10.6,4.6),.09,N.woodDark)),It(s,Ee(.012,.012,1.5,4,1),N.woodDark,.35,10.6,4.95),It(s,new $e(.11,.025,5,10),N.metal,.35,9.85,4.95);const g=new ot;g.position.set(0,11.45,4.28);const v=It(g,Ee(.19,.19,1.55,12,1),N.woodDark,0,0,-.775);v.rotation.x=Math.PI/2,It(g,new Kt(.24,14,10),N.woodDark,0,0,.04);const M=4.6;for(let _=0;_<4;_++){const w=new ot;w.rotation.z=_*Math.PI/2+.18,It(w,st(.16,M,.12),N.woodDark,0,M/2,0);for(let b=0;b<8;b++)It(w,st(1.02,.06,.06),N.woodDark,.44,.62+b*.52,.015);It(w,st(.92,M*.74,.02),N.sailCloth,.48,M*.56,.03),g.add(w)}return s.add(g),{root:s,sails:g}}function Bw(){const s=new ot;s.name="smallWindmill";const t=5.2,e=x=>{const m=Pe(x/t,0,1);return 1.95-.35*Math.pow(m,.7)};It(s,Ee(2.06,2.16,1,40,2.2),N.stone,0,0,0),It(s,Ee(2.18,2.22,.12,40,2.2),N.stone,0,.96,0);const n=[];for(let x=0;x<=14;x++){const m=x/14;n.push([e(m*t),m*t])}n.push([0,t]);const i=oc(n,40,1,1);It(s,i,N.stuccoTower),It(s,Ee(e(2.6)+.05,e(2.6)+.05,.16,40,2,!0),N.woodDark,0,2.6,0),It(s,Ee(e(4.3)+.05,e(4.3)+.05,.14,40,2,!0),N.woodDark,0,4.3,0);const r=new ot,o=new Lt(new Oe(2.42,2.42,.12,40),N.wood);o.castShadow=o.receiveShadow=!0,r.add(o);for(let x=0;x<16;x++){const m=x/16*Math.PI*2;It(r,st(.07,.72,.07),N.woodDark,Math.sin(m)*2.34,.42,Math.cos(m)*2.34)}const a=new Lt(new $e(2.34,.045,5,44),N.woodDark);a.rotation.x=Math.PI/2,a.position.y=.78,r.add(a),r.position.y=3.35,s.add(r);const c=oc([[2.02,0],[2.04,.1],[1.86,.55],[1.56,1.15],[1.16,1.72],[.72,2.16],[.34,2.44],[.32,2.6],[0,2.66]],40,Math.PI*2*2/2.4,2.66/2.4);It(s,c,N.slate,0,t,0),It(s,new Kt(.13,12,9),N.metal,0,t+2.78,0),It(s,Ee(.02,.035,.5,6,1),N.metal,0,t+2.86,0),s.add($m({r:e(.95),top:.95,steps:3,tread:.34,arc:.55}));const h=Xc(.95,1.85);h.position.set(0,.95,e(.95)-.02),s.add(h);const d=vi(.55,.72);d.position.set(0,3.9,e(3.9)-.02),s.add(d);const u=new ot;u.position.set(0,4.75,e(4.75)+.8);const f=It(u,Ee(.13,.13,1.15,10,1),N.woodDark,0,0,-.575);f.rotation.x=Math.PI/2,It(u,new Kt(.17,12,9),N.woodDark,0,0,.03);const p=3.35;for(let x=0;x<4;x++){const m=new ot;m.rotation.z=x*Math.PI/2+.22,It(m,st(.11,p,.085),N.woodDark,0,p/2,0);for(let g=0;g<6;g++){const v=.55+g*.5;It(m,st(.78,.045,.045),N.woodDark,.34,v,.012)}It(m,st(.66,p*.74,.016),N.sailCloth,.37,p*.56,.02),u.add(m)}return s.add(u),{root:s,sails:u}}function zw(){const s=new ot;s.position.set(-8.3,6.96,1.5),s.rotation.y=.1;const t=8.4,e=5.9,n=4.25,i=2.85;It(s,st(t,n,e,2.6),N.stone,0,n/2,0),It(s,st(t+.26,.55,e+.26,2.6),N.stone,0,.27,0);const r=ld(t,e,i,.34,1.8);It(s,r,N.roof,0,n,0);for(const u of[-1,1])It(s,st(t+.7,.16,.09),N.woodDark,0,n-.02,u*(e/2+.34));{const u=Math.round((t+.8)/.26);for(const f of[-1,1])for(let p=0;p<u;p++){const x=-4.6000000000000005+(p+.5)*((t+.8)/u),m=new Oe(.1,.1,.3,8,1,!1,0,Math.PI);m.rotateZ(Math.PI/2),m.rotateY(Math.PI/2);const g=It(s,m,N.roof,x,n-.02,f*(e/2+.3));g.rotation.x=f*.52}}for(const u of[-1,1]){const f=new Ni;f.moveTo(-e/2,0),f.lineTo(e/2,0),f.lineTo(0,i),f.closePath();const p=new Ms(f),x=It(s,p,N.stone,u*(t/2-.02),n,0);x.rotation.y=u*Math.PI/2}It(s,st(t+1.1,.14,.22,1),N.roof,0,n+i-.03,0);for(const u of[-1,1])for(let f=0;f<9;f++){const p=-t/2+.5+f/8*(t-1);It(s,st(.1,.1,.7),N.woodDark,p,n-.05,u*(e/2+.35))}{const u=[];for(const f of[-1,1])for(const p of[-1,1])for(let x=0;x<8;x++){const m=.3+x*.52,g=x%2===0?.34:.26,v=st(.1,g,.46,1.2);v.translate(f*(t/2+.02),m,p*(e/2-.25)),u.push(v);const M=st(.46,g,.1,1.2);M.translate(f*(t/2-.25),m,p*(e/2+.02)),u.push(M)}It(s,pn(u),N.stone)}{const u=Math.round(t/.26),f=[];for(let p=0;p<u;p++){const x=-t/2+(p+.5)*(t/u),m=new Oe(.11,.11,t/u*.92,8,1,!1,0,Math.PI);m.rotateZ(Math.PI/2),m.translate(x,n+i+.03,0),f.push(m)}It(s,pn(f),N.roof)}for(const u of[-1,1]){const f=new Oe(.045,.045,t+.4,8,1,!0,0,Math.PI);f.rotateZ(Math.PI/2);const p=It(s,f,N.zinc,0,n-.05,u*(e/2+.2));p.rotation.z=Math.PI}It(s,Ee(.035,.035,n-.3,8,1),N.zinc,t/2-.1,.1,e/2+.24),It(s,st(.62,2.7,.62,2),N.stone,2.6,n+.95,-1.55),It(s,st(.8,.16,.8,2),N.stone,2.6,n+2.3,-1.55);const o=Zm(22,3.6,.5);o.position.set(2.6,n+2.5,-1.55),s.add(o);const a=Xc(1.25,2.35);a.position.set(1.5,0,e/2-.02),s.add(a),It(s,st(1.9,.16,.16),N.woodDark,1.5,2.52,e/2+.1);const l=It(s,st(2.4,.14,1.05,1.6),N.wood,1.5,2.72,e/2+.38);l.rotation.x=-.16;for(const u of[-1,1])It(s,st(.1,2.65,.1),N.woodDark,1.5+u*1,1.33,e/2+.75);const c=vi(.9,1.1,{shutters:!0,box:!0});c.position.set(-1.7,1.5,e/2-.02),s.add(c);const h=vi(.85,1.05,{box:!0});h.position.set(-1.7,1.5,-e/2+.02),h.rotation.y=Math.PI,s.add(h);const d=vi(.75,.95);return d.position.set(t/2-.02,1.55,1.3),d.rotation.y=Math.PI/2,s.add(d),It(s,Ee(.22,.19,.42,12,1),N.woodDark,3,.21,e/2+.5),{root:s}}const gl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class nr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const kw=new aa(-1,1,1,-1,0,1);class Vw extends Jt{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const Gw=new Vw;class qc{constructor(t){this._mesh=new Lt(Gw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Jm extends nr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qo.clone(t.uniforms),this.material=new ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new qc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class x0 extends nr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Hw extends nr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ww{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new Xe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:on}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jm(gl),this.copyPass.material.blending=qi,this.timer=new ed}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}x0!==void 0&&(o instanceof x0?n=!0:o instanceof Hw&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Xw extends nr{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const qw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xr extends nr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xe(r,o,{type:on,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Xe(r,o,{type:on,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Xe(r,o,{type:on,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=qw;this.highPassUniforms=qo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ze({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qo.clone(gl.uniforms),this.blendMaterial=new ze({uniforms:this.copyUniforms,vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,premultipliedAlpha:!0,blending:Lo,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new Ii,this._fsQuad=new qc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new ze({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}}Xr.BlurDirectionX=new J(1,0);Xr.BlurDirectionY=new J(0,1);const v0=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }
`,Km=`
#include <packing>

uniform sampler2D tDepth;
uniform float uNear;
uniform float uFar;
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;
uniform float uFarScale;   // 远景虚化打折，避免中景糊成一片

float linearDist( vec2 uv ) {
  float d = unpackRGBAToDepth( texture2D( tDepth, uv ) );
  return -perspectiveDepthToViewZ( d, uNear, uFar );
}

float cocPx( vec2 uv ) {
  float z = linearDist( uv );
  float d = ( z < uFocus )
    ? ( uFocus / max( z, 0.05 ) - 1.0 )
    : ( 1.0 - uFocus / max( z, 0.05 ) ) * uFarScale;
  return clamp( uAperture * d, 0.0, uMaxCoc );
}
`,Yw=`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 uDir;
uniform vec2 uRes;
varying vec2 vUv;
${Km}

void main() {
  float r = cocPx( vUv );
  if ( r < 0.35 ) { gl_FragColor = texture2D( tDiffuse, vUv ); return; }

  vec4 sum = vec4( 0.0 );
  float wsum = 0.0;
  for ( int i = -8; i <= 8; i ++ ) {
    float fi = float( i );
    float w = exp( -fi * fi * 0.062 );
    vec2 off = uDir * ( fi / 8.0 ) * r / uRes;
    sum += texture2D( tDiffuse, vUv + off ) * w;
    wsum += w;
  }
  gl_FragColor = sum / wsum;
}
`,Zw=`
precision highp float;
uniform sampler2D tDiffuse;
uniform sampler2D tBlur;
varying vec2 vUv;
${Km}

void main() {
  vec4 sharp = texture2D( tDiffuse, vUv );
  vec4 soft  = texture2D( tBlur, vUv );
  float k = smoothstep( 0.6, 2.4, cocPx( vUv ) );
  gl_FragColor = mix( sharp, soft, k );
}
`;class $w extends nr{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!0,this.rtDepth=new Xe(1,1,{minFilter:He,magFilter:He,depthBuffer:!0,stencilBuffer:!1});const n={type:on,depthBuffer:!1,stencilBuffer:!1,minFilter:Te,magFilter:Te,colorSpace:ts};this.rtH=new Xe(1,1,n),this.rtV=new Xe(1,1,n),this.depthMat=new Uc,this.depthMat.depthPacking=xp,this.depthMat.blending=qi,this.uniforms={tDepth:{value:this.rtDepth.texture},uNear:{value:e.near},uFar:{value:e.far},uFocus:{value:20},uAperture:{value:10},uMaxCoc:{value:12},uFarScale:{value:.7},uRes:{value:new J(1,1)}},this.blurMat=new ze({vertexShader:v0,fragmentShader:Yw,uniforms:{...this.uniforms,tDiffuse:{value:null},uDir:{value:new J(1,0)}},depthTest:!1,depthWrite:!1}),this.compMat=new ze({vertexShader:v0,fragmentShader:Zw,uniforms:{...this.uniforms,tDiffuse:{value:null},tBlur:{value:null}},depthTest:!1,depthWrite:!1}),this.quad=new qc(this.blurMat),this.enabled=!0}setFocus(t){this.uniforms.uFocus.value=t}setAperture(t){this.uniforms.uAperture.value=t}setSize(t,e){const n=Math.max(1,Math.floor(t)),i=Math.max(1,Math.floor(e));this.rtDepth.setSize(n,i);const r=Math.max(1,Math.ceil(n/2)),o=Math.max(1,Math.ceil(i/2));this.rtH.setSize(r,o),this.rtV.setSize(r,o),this.uniforms.uRes.value.set(r,o)}render(t,e,n){const i=this.scene.background,r=t.shadowMap.autoUpdate;t.shadowMap.autoUpdate=!1,this.scene.overrideMaterial=this.depthMat,t.setRenderTarget(this.rtDepth),t.clear(),t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.shadowMap.autoUpdate=r,this.scene.background=i,this.blurMat.uniforms.tDiffuse.value=n.texture,this.blurMat.uniforms.uDir.value.set(1,0),this.quad.material=this.blurMat,t.setRenderTarget(this.rtH),t.clear(),this.quad.render(t),this.blurMat.uniforms.tDiffuse.value=this.rtH.texture,this.blurMat.uniforms.uDir.value.set(0,1),t.setRenderTarget(this.rtV),t.clear(),this.quad.render(t),this.compMat.uniforms.tDiffuse.value=n.texture,this.compMat.uniforms.tBlur.value=this.rtV.texture,this.quad.material=this.compMat,t.setRenderTarget(this.renderToScreen?null:e),t.clear(),this.quad.render(t)}}const Jw=`
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
`;class Kw extends nr{constructor(){super(),this.needsSwap=!1,this.rt=new Xe(1,1,{type:on,depthBuffer:!1,stencilBuffer:!1,colorSpace:ts}),this.material=new ze({vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:Jw,uniforms:{tDiffuse:{value:null},uSun:{value:new J(.5,.5)},uDensity:{value:.55},uThreshold:{value:1.15},uIntensity:{value:.35},uTint:{value:new K(1,.92,.74)}},depthTest:!1,depthWrite:!1}),this.quad=new qc(this.material),this.sun=new J(.5,.5),this.enabled=!0}setSize(t,e){this.rt.setSize(Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2)))}render(t,e,n){this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.uSun.value.copy(this.sun),t.setRenderTarget(this.rt),this.quad.render(t),t.setRenderTarget(null)}}const Qw={uniforms:{tDiffuse:{value:null},tRays:{value:null},uExposure:{value:.88},uSat:{value:1.52},uLift:{value:.006},uVignette:{value:.3},uGrain:{value:.02},uTime:{value:0},uRayStrength:{value:.26},uResolution:{value:new J(1,1)},uWarmth:{value:.5}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
`};function jw(s,t,e){const n=s.getDrawingBufferSize(new J),i=new Xe(n.x,n.y,{type:on,format:rn,colorSpace:ts,depthBuffer:!0,stencilBuffer:!1,samples:2}),r=new Ww(s,i);r.setPixelRatio(s.getPixelRatio()),r.setSize(window.innerWidth,window.innerHeight);const o=new Xw(t,e),a=new $w(t,e);a.enabled=!1,a.setSize(n.x,n.y);const l=new Xr(new J(n.x,n.y),.26,.68,1.02),c=new Kw,h=new Jm(Qw);return r.addPass(o),r.addPass(a),r.addPass(l),r.addPass(c),r.addPass(h),{composer:r,bloom:l,rays:c,grade:h,rt:i,dof:a}}const cd=["sunDir"],hd=["sunColor","skyFill","zenith","skyMid","horizon","fog","shadowTint","bounce","bounceTint"],ud=["sunIntensity","fogDensity","cloudCover","dusk","bloom","exposure","warmth","sat","vignette","rays"],Tr={day:{label:"白昼",labelEn:"DAY",sunDir:[.731,.626,.271],sunColor:[1,.94,.8],sunIntensity:2,skyFill:[.66,.8,.94],zenith:[.038,.155,.47],skyMid:[.115,.335,.66],horizon:[.4,.58,.71],fog:[.44,.6,.72],fogDensity:.00145,shadowTint:[.54,.58,.7],bounce:[.62,.62,.36],bounceTint:[1,1,1],cloudCover:1,dusk:0,bloom:.26,exposure:.88,warmth:.5,sat:1.52,vignette:.3,rays:1},dusk:{label:"黄昏",labelEn:"DUSK",sunDir:[.919,.199,.341],sunColor:[1,.6,.3],sunIntensity:1.55,skyFill:[.34,.36,.56],zenith:[.045,.07,.235],skyMid:[.185,.175,.4],horizon:[.95,.52,.3],fog:[.6,.44,.42],fogDensity:.00185,shadowTint:[.36,.35,.58],bounce:[.66,.48,.3],bounceTint:[1.1,.88,.72],cloudCover:.88,dusk:1,bloom:.34,exposure:.84,warmth:.82,sat:1.46,vignette:.38,rays:1.25}};function mo(s){const t={vec:{},col:{},num:{}};for(const e of cd)t.vec[e]=new R(...s[e]);for(const e of hd)t.col[e]=new K(...s[e]);for(const e of ud)t.num[e]=s[e];return t}function go(s,t){for(const e of cd)s.vec[e].copy(t.vec[e]);for(const e of hd)s.col[e].copy(t.col[e]);for(const e of ud)s.num[e]=t.num[e]}const t2=55,e2=.6,n2=143;function i2({shared:s,sky:t,sun:e,post:n,shadowCentre:i,sunDistance:r=170}){const o=mo(Tr.day),a=mo(Tr.day),l=mo(Tr.day);let c=1,h=1,d="day";const u=e.shadow.camera,f=new R;function p(){s.uSunDir.value.copy(o.vec.sunDir).normalize(),s.uSunColor.value.copy(o.col.sunColor),s.uSkyColor.value.copy(o.col.skyFill),s.uFogColor.value.copy(o.col.fog),s.uFogDensity.value=o.num.fogDensity,s.uShadowTint.value.copy(o.col.shadowTint),s.uBounceColor.value.copy(o.col.bounce),s.uBounceTint.value.copy(o.col.bounceTint),s.uDusk.value=o.num.dusk;const x=t.material.uniforms;x.uZenith.value.copy(o.col.zenith),x.uSkyColor.value.copy(o.col.skyMid),x.uHorizon.value.copy(o.col.horizon),x.uCloudCover.value=o.num.cloudCover,e.color.copy(o.col.sunColor),e.intensity=o.num.sunIntensity,e.position.copy(i).addScaledVector(s.uSunDir.value,r);const m=Math.max(s.uSunDir.value.y,.1),g=Math.min(n2,t2*Math.max(1,e2/m));Math.abs(u.right-g)>.25&&(u.left=-g,u.right=g,u.top=g,u.bottom=-g,u.updateProjectionMatrix()),n.bloom.strength=o.num.bloom;const v=n.grade.uniforms;v.uExposure.value=o.num.exposure,v.uWarmth.value=o.num.warmth,v.uSat.value=o.num.sat,v.uVignette.value=o.num.vignette}return p(),{get name(){return d},get label(){return Tr[d].label},get labelEn(){return Tr[d].labelEn},get raysMul(){return o.num.rays},get sunElevation(){return f.copy(o.vec.sunDir).normalize(),Math.asin(dn.clamp(f.y,-1,1))*180/Math.PI},get shadowRadius(){return u.right},set(x,m=2.4){const g=Tr[x];return g?(d=x,m<=0?(go(o,mo(g)),go(a,o),go(l,o),c=1,p(),!0):(go(a,o),go(l,mo(g)),c=0,h=Math.max(.02,m),!0)):!1},toggle(x=2.4){return this.set(d==="day"?"dusk":"day",x)},update(x){if(c>=1)return;c=Math.min(1,c+x/h);const m=c*c*(3-2*c);for(const g of cd)o.vec[g].lerpVectors(a.vec[g],l.vec[g],m);for(const g of hd)o.col[g].lerpColors(a.col[g],l.col[g],m);for(const g of ud)o.num[g]=a.num[g]+(l.num[g]-a.num[g])*m;p()}}}function s2(s,t){const e=s.data;return(n,i)=>{const r=Pe((n+Nn)/Mi),o=Pe((i+Nn)/Mi),a=Math.min(t-1,Math.floor(r*t)),c=(Math.min(t-1,Math.floor(o*t))*t+a)*4;return[e[c]/255,e[c+1]/255,e[c+2]/255]}}function r2(s,t,e,n=3){const i=[],r=[],o=[];for(let l=0;l<=n;l++){const c=l/n,h=t*c,d=s*(1-c*.9),u=e*c*c;i.push(-d*.5,h,u,d*.5,h,u),r.push(0,c,1,c)}for(let l=0;l<n;l++){const c=l*2,h=c+1,d=c+2,u=c+3;o.push(c,d,h,h,d,u)}const a=new Jt;return a.setAttribute("position",new At(i,3)),a.setAttribute("uv",new At(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function Qm(s=1,t=5,e=.36,n=.11){const i=qe(s),r=[];for(let o=0;o<t;o++){const a=i()*Math.PI*2,l=r2(.014+i()*.012,e*(.6+i()*.6),(i()-.5)*.35,3),c=new Wt().makeRotationY(a).setPosition((i()-.5)*n,0,(i()-.5)*n);l.applyMatrix4(c),r.push(l)}return pn(r)}function xo(s,t={}){const{count:e=6e4,cx:n=6,cz:i=30,radius:r=66,height:o=.36,spread:a=.11,blades:l=5,seed:c=3,tall:h=!1,ao:d=null}=t,u=qe(c),f=Qm(c,l,o,a),p=ut({color:16777215,rim:.1,rimColor:15661264,spec:.04,specPower:8,fresnel:.03,noise:.1,noiseScale:1.4,wrap:.6,trans:.42,side:Fe,saturation:1.06,windAmp:h?.17:.095,windSpeed:1.5,bendH:o,billow:.012}),x=new Cn(f,p,e);x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!1;const m=new ae,g=new K;let v=0,M=0;for(;v<e&&M<e*24;){M++;const _=u()*Math.PI*2,w=Math.sqrt(u())*r,b=n+Math.cos(_)*w,y=i+Math.sin(_)*w,S=qt(b,y);if(Wc(b,y,1.2))continue;const E=s(b,y);if(E[1]>.42||E[2]>.55||Wm(b,y,1.2).y<.62||Math.hypot(b,y)<4.3||b>-13.5&&b<-3.4&&y>-2.2&&y<5.4||Math.hypot(b-15.6,y-11.6)<3||t.skip&&t.skip(b,y))continue;const L=.52+Qe(b*.085+13,y*.085-7,3)*1.05,F=t.grazeScale?t.grazeScale(b,y):1,D=(.65+u()*.85)*L*F;m.position.set(b,S-.02,y),m.rotation.set((u()-.5)*.12,u()*Math.PI*2,(u()-.5)*.12),m.scale.set(D,D*(.8+u()*.6),D),m.updateMatrix(),x.setMatrixAt(v,m.matrix);const k=Qe(b*.09,y*.09,3),X=$i(.66,.88,Qe(b*.03+9,y*.03,3));g.setHSL(.238+k*.04-X*.02,.38+u()*.18-X*.08,.135+k*.085+u()*.04),d&&g.multiplyScalar(.3+.7*d(b,y)),x.setColorAt(v,g),v++}return x.count=v,x.instanceMatrix.needsUpdate=!0,x.instanceColor&&(x.instanceColor.needsUpdate=!0),x}function o2(s,t=9e3,e=91,n=null,i={}){const r=qe(e),o=[],a=new Oe(.004,.007,.62,3,1);a.translate(0,.31,0),Bn(a,new K(.3,.36,.16)),o.push(a);const l=new Kt(.019,5,4);l.scale(1,3.4,1),l.translate(0,.66,0),Bn(l,new K(.46,.42,.22)),o.push(l);for(const m of[-1,1]){const g=new Ui(.035,.22);g.rotateZ(m*.5),g.rotateY(m*1.2),g.translate(m*.03,.14,0),Bn(g,new K(.26,.34,.14)),o.push(g)}const c=pn(o),h=ut({color:16777215,rim:.12,rimColor:15135424,spec:.05,fresnel:.03,noise:.1,noiseScale:1.6,wrap:.6,trans:.45,side:Fe,saturation:1.02,vcolor:!0,windAmp:.17,windSpeed:1.15,bendH:.62,billow:.02}),d=new Cn(c,h,t);d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;const u=new ae,f=new K;let p=0,x=0;for(;p<t&&x<t*24;){x++;const m=r()*Math.PI*2,g=Math.sqrt(r())*62,v=6+Math.cos(m)*g,M=30+Math.sin(m)*g,_=qt(v,M);if(Wc(v,M,1))continue;const w=s(v,M);if(w[1]>.42||w[2]>.55||Wm(v,M,1.2).y<.66||Math.hypot(v,M)<4.4||v>-13.5&&v<-3.4&&M>-2.2&&M<5.4||i.skip&&i.skip(v,M)||Qe(v*.055+41,M*.055-17,3)<.56&&r()>.12)continue;const S=.72+r()*.62;u.position.set(v,_-.02,M),u.rotation.set((r()-.5)*.1,r()*Math.PI*2,(r()-.5)*.1),u.scale.set(S,S*(.85+r()*.5),S),u.updateMatrix(),d.setMatrixAt(p,u.matrix);const E=.86+r()*.3;f.setRGB(E,E,E),n&&f.multiplyScalar(.35+.65*n(v,M)),d.setColorAt(p,f),p++}return d.count=p,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d}function sl(s,t,e,n,i=6){const r=new R().subVectors(t,s),o=r.length(),a=new Oe(n,e,o,i,1);a.translate(0,o/2,0);const l=new Je().setFromUnitVectors(new R(0,1,0),r.clone().normalize());return a.applyQuaternion(l),a.translate(s.x,s.y,s.z),a}function a2(s,t,e,n=120){const i=[],r=new R(0,0,1);for(let o=0;o<n;o++){const a=o/n;let l,c;a<.34?(l=.3+s()*.14,c=.84+s()*.2):a<.7?(l=.18+s()*.1,c=.7+s()*.22):(l=.1+s()*.07,c=.52+s()*.24);const h=s()*2-1,d=s()*Math.PI*2,u=Math.sqrt(Math.max(0,1-h*h)),f=u*Math.cos(d),p=h,x=u*Math.sin(d),m=e*c,g=f*m,v=t+p*e*.8,M=x*m,_=e*l,w=new Ui(_,_),b=new Je().setFromUnitVectors(r,new R(f,p*.7+.35,x).normalize()),y=new Je().setFromAxisAngle(new R(f,p,x).normalize(),s()*Math.PI*2);w.applyQuaternion(y),w.applyQuaternion(b),w.translate(g,v,M);const E=(.38+Pe((v-(t-e*.8))/(e*1.85))*.76)*(l>.28?.9:1),C=w.attributes.position.count,P=new Float32Array(C*3);for(let L=0;L<C;L++)P[L*3]=E*(.94+s()*.12),P[L*3+1]=E,P[L*3+2]=E*.88;w.setAttribute("color",new oe(P,3)),i.push(w)}return pn(i)}function l2(s=1,t=0,e=0){const n=qe(s),i=[{th:4.8,tr:.36,cy:6.4,cr:4,lobes:10},{th:6.6,tr:.3,cy:7.8,cr:3,lobes:8},{th:2.5,tr:.19,cy:3.4,cr:2.1,lobes:7},{th:1.7,tr:.13,cy:2,cr:1.5,lobes:6}][t],{th:r,tr:o,cy:a,cr:l,lobes:c}=i;if(e>=2){const L=new Oe(o*.9,o*1.15,r*.85,4,1);L.translate(0,r*.42,0),Bn(L,new K(.26,.2,.14));const F=new Yr(l*.92,0);return F.scale(1,.88,1),F.translate(0,a,0),Bn(F,new K(.42,.53,.33)),{trunk:pn([L,F]),canopy:null,cards:null,height:a+l}}if(e>=1){const L=pn([sl(new R(0,0,0),new R(0,r*.78,0),o,o*.55,5)]),F=[],D=new K(.4,.5,.32),k=new K(.74,.83,.58);for(let X=0;X<5;X++){const z=X/5*Math.PI*2+n(),et=l*(.16+n()*.34),V=new Kt(l*(.56+n()*.16),8,6);V.scale(1,.86,1),V.translate(Math.cos(z)*et,a+(n()-.5)*l*.28,Math.sin(z)*et),Bn(V,X%2?k:D),F.push(V)}return{trunk:L,canopy:pn(F),cards:null,height:a+l}}const h=[],d=5;let u=0,f=0;for(let L=0;L<d;L++){const F=L/d,D=(L+1)/d,k=r*F,X=r*D,z=Math.sin(F*2.2+s)*r*.055,et=Math.cos(F*1.7+s)*r*.045;h.push(sl(new R(u,k,f),new R(z,X,et),o*(1-F*.5),o*(1-D*.55),8)),u=z,f=et}const p=L=>{const F=Pe(L/r,0,1);return new R(Math.sin(F*2.2+s)*r*.055,L,Math.cos(F*1.7+s)*r*.045)},x=t===3||t===2?4:5;for(let L=0;L<x;L++){const F=L/x*Math.PI*2+n()*.8,D=r*(.42+n()*.36),k=p(D),X=l*(.62+n()*.34),z=new R(k.x+Math.cos(F)*X,D+X*(.55+n()*.35),k.z+Math.sin(F)*X);h.push(sl(k,z,o*.4,o*.11,6));for(let et=0;et<2;et++){const V=k.clone().lerp(z,.55+n()*.2),Q=F+(n()-.5)*1.6,Z=X*(.32+n()*.22),lt=new R(V.x+Math.cos(Q)*Z,V.y+Z*(.6+n()*.4),V.z+Math.sin(Q)*Z);h.push(sl(V,lt,o*.16,o*.055,5))}}const m=pn(h),g=[],v=(L,F,D,k,X,z)=>{const et=new Kt(k,11,9);Wr(et,.2,1.9,s+L*3.1+D),et.scale(1,X,1),et.translate(L,F,D),Bn(et,z),g.push(et)},M=new K(.4,.5,.32),_=new K(.78,.86,.6),w=new K(1.16,1.1,.86);for(let L=0;L<c+4;L++){const F=L/c*Math.PI*2+n()*.6,D=l*(.44+n()*.28);v(Math.cos(F)*D,a-l*(.1+n()*.22),Math.sin(F)*D,l*(.34+n()*.16),.78,M)}for(let L=0;L<c+3;L++){const F=L/c*Math.PI*2+.7+n()*.6,D=l*(.26+n()*.28);v(Math.cos(F)*D,a+l*(.1+n()*.24),Math.sin(F)*D,l*(.3+n()*.15),.88,_)}for(let L=0;L<4;L++){const F=n()*Math.PI*2;v(Math.cos(F)*l*.26,a+l*(.44+n()*.22),Math.sin(F)*l*.26,l*(.28+n()*.14),.92,w)}const b=pn(g),y=b.attributes.position,S=b.attributes.color,E=a-l*.8,C=a+l*1.05;for(let L=0;L<y.count;L++){const F=y.getY(L);let D=Pe((F-E)/(C-E));D=D*D*(3-2*D);const k=.7+D*.56;S.setXYZ(L,S.getX(L)*k,S.getY(L)*k,S.getZ(L)*k)}S.needsUpdate=!0;const P=a2(n,a,l,t===3?40:90);return{trunk:m,canopy:b,cards:P,height:a+l}}function c2(s,t){const e=new ot;e.name="trees";const n=new Map;for(const o of t){const a=(o.type??0)+(o.lod??0)*10;n.has(a)||n.set(a,[]),n.get(a).push(o)}const i=new ae,r=new K;for(const[o,a]of n){const l=o%10,c=Math.floor(o/10),h=l2(11+l*7,l,c),d=h.canopy?new Cn(h.trunk,N.bark,a.length):new Cn(h.trunk,N.leaf,a.length),u=h.canopy?new Cn(h.canopy,N.leaf,a.length):null,f=h.cards?new Cn(h.cards,N.leafCard,a.length):null;d.castShadow=d.receiveShadow=!0,d.frustumCulled=!1,u&&(u.castShadow=u.receiveShadow=!0,u.frustumCulled=!1),f&&(f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!1),a.forEach((p,x)=>{const m=qt(p.x,p.z),g=p.scale??1;i.position.set(p.x,m-.15,p.z),i.rotation.set(0,p.rot??Math.random()*6.28,0),i.scale.set(g,g*(p.stretch??1),g),i.updateMatrix(),d.setMatrixAt(x,i.matrix),r.setHSL(.19+Math.random()*.085,.3+Math.random()*.26,.3+Math.random()*.3),u?(u.setMatrixAt(x,i.matrix),u.setColorAt(x,r)):d.setColorAt(x,r),f&&(f.setMatrixAt(x,i.matrix),f.setColorAt(x,r))}),d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),u&&(u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0)),f&&(f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0)),e.add(d),u&&e.add(u),f&&e.add(f)}return e}function h2(s=5200,t=55,e=null){const n=qe(t),i=Qm(t,7,1.15,.15),r=ut({color:16777215,rim:.12,rimColor:15135940,spec:.05,fresnel:.03,noise:.1,noiseScale:1.6,wrap:.6,trans:.45,side:Fe,saturation:1.04,windAmp:.16,windSpeed:1.1,bendH:1.15,billow:.02}),o=new Cn(i,r,s);o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!1;const a=new ae,l=new K;let c=0,h=0;for(;c<s&&h<s*20;){h++;const d=-130+n()*260,u=ns(d),f=is(d),p=n()<.5?-1:1,x=f*(.88+n()*.75),m=u+p*x,g=qt(d,m);if(g<On-.25)continue;const v=.7+n()*.8;a.position.set(d,g-.05,m),a.rotation.set((n()-.5)*.15,n()*6.28,(n()-.5)*.15),a.scale.set(v,v*(.8+n()*.7),v),a.updateMatrix(),o.setMatrixAt(c,a.matrix),l.setHSL(.19+n()*.05,.44+n()*.16,.18+n()*.1),e&&l.multiplyScalar(.45+.55*e(d,m)),o.setColorAt(c,l),c++}return o.count=c,o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o}function u2(s,t=14e3,e=21,n=null,i={}){const r=qe(e),o=[],a=new Kt(.017,5,4);a.translate(0,.235,0),Bn(a,new K(1,1,1)),o.push(a);const l=new Oe(.004,.007,.22,3,1);l.translate(0,.11,0),Bn(l,new K(.3,.42,.18)),o.push(l);const c=pn(o),h=ut({color:16777215,rim:.2,rimColor:16777215,spec:.05,noise:.05,wrap:.7,trans:.4,side:Fe,windAmp:.05,windSpeed:1.6,bendH:.25,saturation:1.05,vcolor:!0}),d=new Cn(c,h,t);d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!1;const u=new ae,f=new K,p=[[.13,.3,.9],[.14,.72,.88],[.74,.42,.8],[.02,.46,.88],[.13,.18,.86]];let x=0,m=0;for(;x<t&&m<t*20;){m++;const g=r()*Math.PI*2,v=Math.sqrt(r())*62,M=6+Math.cos(g)*v,_=30+Math.sin(g)*v,w=qt(M,_);if(Wc(M,_,1))continue;const b=s(M,_);if(b[1]>.5||b[2]>.5||i.skip&&i.skip(M,_)||Qe(M*.06+21,_*.06+5,3)<.52&&r()>.15)continue;u.position.set(M,w,_),u.rotation.set(0,r()*6.28,0);const S=.7+r()*.8;u.scale.set(S,S,S),u.updateMatrix(),d.setMatrixAt(x,u.matrix);const E=p[Math.floor(r()*p.length)];f.setHSL(E[0],E[1],E[2]),n&&f.multiplyScalar(.45+.55*n(M,_)),d.setColorAt(x,f),x++}return d.count=x,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d}function d2(s=5,t=.66,e=105){const n=qe(s),i=[],r=new Kt(t,14,9);Wr(r,.24,3.2,s),r.scale(1.22,.82,1.22),r.translate(0,t*.62,0),Bn(r,new K(.26,.4,.16)),i.push(r);for(let o=0;o<e;o++){const a=n()*Math.PI*2,l=Math.acos(1-n()*1.12),c=.94+n()*.14,h=Math.sin(l)*Math.cos(a)*t*1.22*c,d=Math.sin(l)*Math.sin(a)*t*1.22*c,u=t*.62+Math.cos(l)*t*.82*c,f=new Kt(.048+n()*.034,6,5);Wr(f,.2,3.4,o+s),f.translate(h,u,d);const p=.86+n()*.24;Bn(f,new K(.44*p,.56*p,.92*p)),i.push(f)}for(let o=0;o<7;o++){const a=n()*Math.PI*2,l=new Kt(.17+n()*.09,6,4);l.scale(1.5,.28,1),l.rotateY(a),l.rotateZ(.3),l.translate(Math.cos(a)*t*1.05,.14+n()*.3,Math.sin(a)*t*1.05),Bn(l,new K(.3,.45,.18)),i.push(l)}return pn(i)}function f2(s){const t=new ot,e=d2(5),n=new Cn(e,N.flowerBlue,s.length);n.castShadow=!0,n.receiveShadow=!0,n.frustumCulled=!1;const i=new ae,r=new K;return s.forEach((o,a)=>{const l=qt(o.x,o.z);i.position.set(o.x,l-.05,o.z),i.rotation.set(0,o.rot??Math.random()*6.28,0);const c=o.scale??1;i.scale.set(c,c,c),i.updateMatrix(),n.setMatrixAt(a,i.matrix),r.setHSL(o.hue??.62,.34,.72),n.setColorAt(a,r)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),t.add(n),t}function p2(s){const t=new ot;t.name="wall";const e=[[-96,33],[-76,31.4],[-56,29.6],[-38,27.6],[-24,26.4],[-11,25.6],[2,25],[9.2,25.2],[10.6,26.1]],n=[[14.6,26.3],[16.4,25.4],[25,24.6],[38,24.2],[52,24.8],[66,26.4],[82,29],[100,32]],i=ut({color:9143153,rim:.2,rimColor:15788244,spec:.12,specPower:14,fresnel:.16,noise:.22,noiseScale:2.2,saturation:.98}),r=ut({map:N.stone.map,color:16777215,tint:6972245,mapMix:1,rim:.06,spec:.02,fresnel:.04,noise:.3,noiseScale:2.5}),o=ut({map:N.stone.map,normalMap:N.stone.uniforms.uNormalMap.value,normalScale:1,color:16777215,tint:9405808,mapMix:1,rim:.2,rimColor:14734524,spec:.1,specPower:14,fresnel:.14,noise:.18,noiseScale:2.4,saturation:.98,grime:[4.6,7.6],roughVar:.7}),a=ut({color:7178814,rim:.4,rimColor:14215840,spec:.05,fresnel:.03,noise:.3,noiseScale:3,saturation:1.05}),l=[ps(1,1),ps(2,1),ps(3,1),ps(4,1)],c=[[],[],[],[]],h=[],d=M=>{const _=lw(M,.24),w=[],b=[],y=.3;let S=0;for(let L=0;L<_.length;L++){const[F,D]=_[L],k=_[Math.max(0,L-1)],X=_[Math.min(_.length-1,L+1)];let z=X[0]-k[0],et=X[1]-k[1];const V=Math.hypot(z,et)||1;z/=V,et/=V;const Q=-et,Z=z,lt=qt(F,D),Dt=.82+Math.sin(L*.7)*.06;L>0&&(S+=Math.hypot(F-_[L-1][0],D-_[L-1][1]));const q=w.length/3;if(w.push(F-Q*y,lt-.1,D-Z*y,F+Q*y,lt-.1,D+Z*y,F+Q*y*.92,lt+Dt,D+Z*y*.92,F-Q*y*.92,lt+Dt,D-Z*y*.92),L>0){const at=q-4;b.push(at,q,at+1,q,q+1,at+1),b.push(at+1,q+1,at+2,q+1,q+2,at+2),b.push(at+3,q+3,at,q,q+3,at),b.push(at+2,q+2,at+3,q+2,q+3,at+3)}}const E=new Jt;E.setAttribute("position",new At(w,3)),E.setIndex(b),E.computeVertexNormals();const C=new Lt(E,r);C.castShadow=C.receiveShadow=!0,t.add(C);const P=qe(77+Math.round(M[0][0]));for(let L=1;L<_.length-1;L++){const[F,D]=_[L],k=_[L-1],X=_[L+1];let z=X[0]-k[0],et=X[1]-k[1];const V=Math.hypot(z,et)||1;z/=V,et/=V;const Q=-et,Z=z,lt=qt(F,D),Dt=5;for(let q=0;q<Dt;q++){const at=q/(Dt-1);for(const Ct of[-1,1]){if(P()>.95)continue;const Nt=(.215+P()*.05)*Ct,_t=F+Q*Nt+(P()-.5)*.05,Vt=D+Z*Nt+(P()-.5)*.05,Ce=lt+.08+at*.66+(P()-.5)*.04,Yt=P(),te=Yt<.16?.205+P()*.065:Yt<.7?.13+P()*.048:.076+P()*.04;c[Math.floor(P()*4)].push({p:[_t,Ce,Vt],s:[te*(1.1+P()*.6),te*(.72+P()*.4),te*(.9+P()*.5)],r:[P()*6.28,P()*6.28,P()*6.28]}),P()>.86&&h.push({p:[_t+Q*.02*Ct,Ce+.06,Vt+Z*.02*Ct],s:[te*1,te*.5,te*.9],r:[0,P()*6.28,0]})}}L%3===0&&c[Math.floor(P()*4)].push({p:[F+(P()-.5)*.1,lt+.9,D+(P()-.5)*.1],s:[.26+P()*.12,.13+P()*.06,.22+P()*.1],r:[(P()-.5)*.3,P()*6.28,(P()-.5)*.3]})}};d(e),d(n);const u=new ae;if(c.forEach((M,_)=>{if(!M.length)return;const w=new Cn(l[_],i,M.length);w.castShadow=!0,w.receiveShadow=!0,w.frustumCulled=!1,M.forEach((b,y)=>{u.position.set(...b.p),u.rotation.set(...b.r),u.scale.set(...b.s),u.updateMatrix(),w.setMatrixAt(y,u.matrix)}),w.instanceMatrix.needsUpdate=!0,t.add(w)}),h.length){const M=new Cn(l[0],a,h.length);M.castShadow=!1,M.receiveShadow=!0,M.frustumCulled=!1,h.forEach((_,w)=>{u.position.set(..._.p),u.rotation.set(..._.r),u.scale.set(..._.s),u.updateMatrix(),M.setMatrixAt(w,u.matrix)}),M.instanceMatrix.needsUpdate=!0,t.add(M)}const f=qt(wr.x,wr.z);for(const M of[-1,1]){const _=wr.x+M*2.1,w=wr.z+M*.15,b=qt(_,w),y=new ot;let S=0;for(let P=0;P<5;P++){const L=.66-P*.025,F=st(L,.33,L*.92,.9),D=new Lt(F,o);D.position.set((Math.random()-.5)*.03,S+.165,(Math.random()-.5)*.03),D.rotation.y=(Math.random()-.5)*.12,D.castShadow=D.receiveShadow=!0,y.add(D),S+=.315}const E=new Lt(st(.78,.16,.72,1.6),N.stone);E.position.y=S+.06,E.castShadow=E.receiveShadow=!0,y.add(E);const C=new Lt(new Kt(.19,14,10),N.stone);C.position.y=S+.32,C.castShadow=!0,y.add(C),y.position.set(_,b,w),t.add(y)}const p=new ot,x=1.65,m=1.25,g=new ot;for(const M of[.12,m-.06]){const _=new Lt(st(x,.1,.07),N.woodDark);_.position.set(x/2,M,0),_.castShadow=!0,g.add(_)}for(let M=0;M<5;M++){const _=new Lt(st(.08,m,.06),N.woodDark);_.position.set(.14+M*(x-.28)/4,m/2,0),_.castShadow=!0,g.add(_)}const v=new Lt(st(.08,Math.hypot(x,m)*.92,.05),N.woodDark);return v.position.set(x/2,m/2,.02),v.rotation.z=Math.atan2(x,m),v.castShadow=!0,g.add(v),g.position.set(0,0,0),p.add(g),p.position.set(wr.x-2,f+.05,wr.z),p.rotation.y=-.55,t.add(p),t}const xl={cx:2,cz:34,size:220};function m2({trees:s=[],props:t=[],size:e=2048}={}){const n=document.createElement("canvas");n.width=n.height=e;const i=n.getContext("2d");i.fillStyle="#fff",i.fillRect(0,0,e,e);const r=xl,o=e/r.size,a=f=>(f-(r.cx-r.size/2))*o,l=f=>(f-(r.cz-r.size/2))*o,c=(f,p,x,m)=>{const g=a(f),v=l(p),M=Math.max(1.5,x*o);if(g<-M||v<-M||g>e+M||v>e+M)return;const _=i.createRadialGradient(g,v,0,g,v,M);_.addColorStop(0,`rgba(0,0,0,${m})`),_.addColorStop(.55,`rgba(0,0,0,${m*.92})`),_.addColorStop(.8,`rgba(0,0,0,${m*.42})`),_.addColorStop(.93,`rgba(0,0,0,${m*.12})`),_.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=_,i.beginPath(),i.arc(g,v,M,0,7),i.fill()};c(0,0,5,.86);for(let f=-1;f<=1;f++)c(-8.3+f*2.5,1.5,4.4,.7);for(let f=0;f<pl.length-1;f++){const[p,x]=pl[f],[m,g]=pl[f+1],v=Math.hypot(m-p,g-x),M=Math.max(1,Math.round(v/.8));for(let _=0;_<M;_++){const w=_/M;c(p+(m-p)*w,x+(g-x)*w,1.5,.3)}}for(const f of s)c(f.x,f.z,1.3*(f.scale??1),.55);for(const f of t)c(f.x,f.z,f.r??.8,f.a??.55);const h=i.getImageData(0,0,e,e).data,d=(f,p)=>{const x=Math.floor((f-(r.cx-r.size/2))*o),m=Math.floor((p-(r.cz-r.size/2))*o);return x<0||m<0||x>=e||m>=e?1:h[(m*e+x)*4]/255},u=new Cc(n);return u.wrapS=u.wrapT=Un,u.colorSpace=qn,u.minFilter=Te,u.magFilter=Te,u.generateMipmaps=!1,u.flipY=!1,u.needsUpdate=!0,{texture:u,sample:d,canvas:n}}const rl=(s,t,e)=>new R(s,t,e);function bs(s){const t=new Ni;t.moveTo(s[0][0],s[0][1]);for(let n=1;n<s.length;n++)t.lineTo(s[n][0],s[n][1]);t.closePath();const e=new Ms(t,4);return e.rotateX(Math.PI/2),e}function Yc(s,t,e,n){const i=s.attributes.position,r=new K(n),o=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const l=Math.min(1,Math.max(0,(Math.abs(i.getX(a))-t)/(e-t)));o[a*3]=1+(r.r-1)*l,o[a*3+1]=1+(r.g-1)*l,o[a*3+2]=1+(r.b-1)*l}return s.setAttribute("color",new oe(o,3)),s}function Zc(s,t={}){return ut({color:s,rim:.16,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.5,side:Fe,...t})}function _0(s,t,e,n,i=6){const r=new R().subVectors(t,s),o=r.length(),a=new Oe(n,e,o,i,1);a.translate(0,o/2,0);const l=new Je().setFromUnitVectors(new R(0,1,0),r.clone().normalize());return a.applyQuaternion(l),a.translate(s.x,s.y,s.z),a}function ir(s){const t=[],e=(a,l)=>{Bn(a,l),t.push(a)},n=new Kt(1,14,10);n.scale(s.bodyW,s.bodyH,s.bodyL),n.translate(0,0,s.bodyZ||0),e(n,s.body);const i=new Kt(s.headR,12,10);i.scale(1,.92,1.08),i.translate(0,s.headY||.02,s.headZ),e(i,s.head||s.body);const r=new mn(s.beakR,s.beakL,5);if(r.rotateX(Math.PI/2),r.translate(0,(s.headY||0)-.012,s.headZ+s.headR+s.beakL*.42),e(r,s.beak),s.neck){const a=s.neck;e(_0(rl(0,a.y0,a.z0),rl(0,s.headY||0,s.headZ),a.r0,a.r1,6),s.head||s.body)}if(s.legs){const a=s.legs;for(const l of[-1,1])e(_0(rl(l*a.x,a.y0,a.z0),rl(l*a.x1,a.y1,a.z1),a.r,a.r*.6,5),a.color)}return s.tailPts&&e(bs(s.tailPts),s.tail||s.body),new Lt(pn(t),Zc(16777215,{vcolor:!0}))}function y0(){const s=new ot;s.add(ir({body:13488852,head:14474972,beak:14195762,tail:13028043,bodyW:.056,bodyH:.058,bodyL:.235,bodyZ:-.02,headR:.058,headY:.022,headZ:.225,beakR:.015,beakL:.092,tailPts:[[-.055,-.2],[.055,-.2],[.075,-.36],[-.075,-.36]]}));const t=ut({color:12371148,rim:.18,rimColor:16777215,spec:0,fresnel:.02,noise:0,wrap:.5,side:Fe,vcolor:!0}),e=[[0,.155],[.18,.15],[.36,.12],[.54,.055],[.74,-.045],[.7,-.115],[.5,-.135],[.28,-.15],[0,-.145]],n=o=>{const a=e.map(([c,h])=>[c*o,h]),l=Yc(bs(a),.5,.74,3817800);return new Lt(l,t)},i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.55,flapAmp:.52,flapRate:4.2,glideTilt:.1},s.userData.span=1.5,s}function M0(){const s=new ot;s.add(ir({body:2829877,beak:1842722,tail:2829877,bodyW:.058,bodyH:.06,bodyL:.205,bodyZ:-.01,headR:.054,headY:.02,headZ:.195,beakR:.019,beakL:.082,tailPts:[[-.075,-.17],[.075,-.17],[.105,-.4],[-.105,-.4]]}));const t=Zc(3159099),e=[[0,.175],[.16,.17],[.32,.14],[.44,.075],[.52,.01],[.455,.03],[.5,-.045],[.435,-.035],[.475,-.115],[.34,-.16],[.16,-.175],[0,-.17]],n=o=>new Lt(bs(e.map(([a,l])=>[a*o,l])),t),i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.15,flapAmp:.62,flapRate:6.4,glideTilt:.06},s.userData.span=1.04,s}function S0(){const s=new ot;s.add(ir({body:3620943,head:3028548,beak:1842722,tail:3620943,bodyW:.04,bodyH:.042,bodyL:.15,bodyZ:-.005,headR:.042,headY:.014,headZ:.14,beakR:.011,beakL:.052,tailPts:[[-.052,-.12],[.052,-.12],[.095,-.4],[0,-.3],[-.095,-.4]]}));const t=Zc(3357770),e=[[0,.105],[.13,.095],[.27,.03],[.4,-.09],[.48,-.215],[.355,-.15],[.195,-.105],[0,-.085]],n=o=>new Lt(bs(e.map(([a,l])=>[a*o,l])),t),i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.1,flapAmp:.78,flapRate:9,glideTilt:.04},s.userData.span=.96,s}function b0(){const s=new ot;s.add(ir({body:8020548,head:9073232,beak:13149262,tail:9073232,bodyW:.07,bodyH:.068,bodyL:.265,bodyZ:-.01,headR:.064,headY:.022,headZ:.245,beakR:.017,beakL:.076,tailPts:[[-.085,-.21],[.085,-.21],[.115,-.46],[-.115,-.46]]}));const t=ut({color:11112296,rim:.18,rimColor:16773328,spec:0,fresnel:.02,noise:0,wrap:.5,side:Fe,vcolor:!0}),e=[[0,.205],[.2,.2],[.4,.17],[.58,.1],[.7,.015],[.655,-.03],[.735,-.075],[.645,-.105],[.705,-.155],[.56,-.18],[.38,-.205],[.18,-.215],[0,-.205]],n=o=>{const a=e.map(([c,h])=>[c*o,h]),l=Yc(bs(a),.42,.74,7165235);return new Lt(l,t)},i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.82,flapAmp:.34,flapRate:2.6,glideTilt:.14},s.userData.span=1.8,s}function w0(){const s=new ot;s.add(ir({body:10133668,head:2895667,beak:13153400,tail:9278359,bodyW:.082,bodyH:.08,bodyL:.3,bodyZ:-.03,headR:.055,headY:.175,headZ:.6,beakR:.014,beakL:.22,neck:{y0:.035,z0:.16,r0:.04,r1:.026},legs:{x:.03,x1:.042,y0:-.02,y1:-.1,z0:-.14,z1:-.8,r:.013,color:3816768},tailPts:[[-.06,-.26],[.06,-.26],[.08,-.4],[-.08,-.4]]}));const t=ut({color:11054769,rim:.18,rimColor:16777215,spec:0,fresnel:.02,noise:0,wrap:.5,side:Fe,vcolor:!0}),e=[[0,.215],[.24,.205],[.48,.17],[.72,.09],[.96,-.01],[1.16,-.11],[1.1,-.185],[.86,-.2],[.58,-.215],[.3,-.225],[0,-.22]],n=o=>{const a=e.map(([c,h])=>[c*o,h]),l=Yc(bs(a),.62,.98,2764081);return new Lt(l,t)},i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.5,flapAmp:.62,flapRate:2.1,glideTilt:.12},s.userData.span=2.4,s}function T0(){const s=new ot;s.add(ir({body:9073496,head:2054726,beak:14205002,tail:8021064,bodyW:.078,bodyH:.07,bodyL:.215,bodyZ:-.01,headR:.062,headY:.03,headZ:.17,beakR:.022,beakL:.085,tailPts:[[-.055,-.17],[.055,-.17],[.045,-.3],[-.045,-.3]]}));const t=ut({color:9402974,rim:.16,rimColor:16773332,spec:0,fresnel:.02,noise:0,wrap:.5,side:Fe,vcolor:!0}),e=[[0,.135],[.14,.13],[.28,.1],[.4,.04],[.44,-.045],[.36,-.085],[.2,-.115],[0,-.12]],n=o=>{const a=e.map(([c,h])=>[c*o,h]),l=Yc(bs(a),.24,.34,4151976);return new Lt(l,t)},i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:.05,flapAmp:.58,flapRate:8.2,glideTilt:.05},s.userData.span=.86,s}function A0(){const s=new ot;s.add(ir({body:7033916,head:5915952,beak:2762272,tail:5915952,bodyW:.03,bodyH:.03,bodyL:.078,bodyZ:-.004,headR:.027,headY:.012,headZ:.07,beakR:.007,beakL:.024,tailPts:[[-.022,-.07],[.022,-.07],[.03,-.135],[-.03,-.135]]}));const t=Zc(7297344),e=[[0,.052],[.052,.048],[.098,.02],[.128,-.028],[.1,-.052],[.052,-.062],[0,-.06]],n=o=>new Lt(bs(e.map(([a,l])=>[a*o,l])),t),i=new ot;i.add(n(-1));const r=new ot;return r.add(n(1)),s.add(i,r),s.userData.rig={wl:i,wr:r,glide:0,flapAmp:.92,flapRate:16,glideTilt:.03},s.userData.span=.28,s}function g2(s,t={}){const e=s.userData.rig,n=new R(t.x??0,t.y??30,t.z??0),i={pos:n.clone(),yaw:t.yaw??Math.random()*Math.PI*2,pitch:0,bank:0,speed:t.speed??9,turn:t.turn??.55,home:n,range:t.range??55,yMin:t.yMin??(t.y??30)-9,yMax:t.yMax??(t.y??30)+11,mode:"circle",timer:1+Math.random()*6,cx:t.cx??n.x,cz:t.cz??n.z,r:t.circleR??(t.speed??9)/(t.turn??.55),dir:t.dir??(Math.random()>.5?1:-1),target:new R,flapPh:Math.random()*6.28,glide:0,glideT:1.5+Math.random()*3.5,glideW:e.glide??.3};if(t.orbit!==void 0){const l=t.orbit;i.pos.set(i.cx+Math.cos(l)*i.r,n.y,i.cz+Math.sin(l)*i.r),i.yaw=Math.atan2(-Math.sin(l)*i.dir,Math.cos(l)*i.dir)}s.position.copy(i.pos),s.rotation.order="YXZ";const r=new R,o=()=>{const l=Math.random()*Math.PI*2,c=i.range*(.35+Math.random()*.65);i.target.set(i.home.x+Math.cos(l)*c,i.yMin+Math.random()*(i.yMax-i.yMin),i.home.z+Math.sin(l)*c)},a=()=>{const l=t.circleBias??.55;if(i.mode==="circle"){if(Math.random()<l){i.timer=9+Math.random()*12;return}i.mode="wander",o(),i.timer=7+Math.random()*9}else{if(Math.random()<l){i.timer=6+Math.random()*8;return}i.mode="circle";const c=Math.random()*Math.PI*2,h=i.range*.55*Math.random();i.cx=i.home.x+Math.cos(c)*h,i.cz=i.home.z+Math.sin(c)*h,i.dir=Math.random()>.5?1:-1,i.timer=8+Math.random()*12}};return s.userData.st=i,s.userData.update=l=>{i.timer-=l,i.timer<=0&&a();const c=r.set(0,0,0);if(i.mode==="circle"){const w=i.pos.x-i.cx,b=i.pos.z-i.cz,y=Math.hypot(w,b)||.001;c.set(-b/y*i.dir,0,w/y*i.dir);const S=(y-i.r)/Math.max(i.r,1);c.x-=w/y*S*2.2,c.z-=b/y*S*2.2,c.y=Math.sin(i.timer*.35)*.06}else c.subVectors(i.target,i.pos),c.length()<9&&(o(),c.subVectors(i.target,i.pos)),c.normalize();const h=Math.atan2(c.x,c.z),d=Math.asin(Math.max(-.6,Math.min(.6,c.y)));let u=h-i.yaw;u=Math.atan2(Math.sin(u),Math.cos(u));const f=i.turn*l,p=Math.max(-f,Math.min(f,u));i.yaw+=p,i.pitch+=Math.max(-f*.5,Math.min(f*.5,d-i.pitch));const x=-Math.max(-1,Math.min(1,p/Math.max(l,1e-4)/i.turn))*.72;i.bank+=(x-i.bank)*Math.min(1,l*3.2);const m=Math.cos(i.pitch);i.pos.x+=Math.sin(i.yaw)*m*i.speed*l,i.pos.y+=Math.sin(i.pitch)*i.speed*l,i.pos.z+=Math.cos(i.yaw)*m*i.speed*l,i.pos.y<i.yMin&&(i.pos.y=i.yMin,i.pitch=Math.max(i.pitch,.05)),i.pos.y>i.yMax&&(i.pos.y=i.yMax,i.pitch=Math.min(i.pitch,-.02)),s.position.copy(i.pos),s.rotation.set(-i.pitch,i.yaw,i.bank),i.glideT-=l,i.glideT<=0&&(i.glideT=1.5+Math.random()*4,i.glide=i.glide?0:1,i.glide&&(i.glideT*=.6+i.glideW*2.2));const g=i.glide;i.flapPh+=l*e.flapRate*(1-g*.8);const v=Math.sin(i.flapPh)*e.flapAmp*(1-g*.88),M=e.glideTilt*g+.06;e.wr.rotation.z=v+M,e.wl.rotation.z=-v-M;const _=Math.cos(i.flapPh)*.22*(1-g*.88);e.wr.rotation.x=_,e.wl.rotation.x=_,s.children[0].position.y=Math.sin(i.flapPh+1.2)*.012*(1-g)},s}function we(s,t,e,n=0,i=0,r=0){const o=new Lt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function iu(s=.62,t=10,e=.12){const n=new ot,i=new Lt(new $e(s,.055,6,30),N.woodDark);i.castShadow=!0,n.add(i);const r=new Lt(new $e(s-.1,.035,5,26),N.woodDark);r.castShadow=!0,n.add(r);for(let a=0;a<t;a++){const l=a/t*Math.PI*2,c=new Lt(st(.062,s*2-.1,.055),N.woodDark);c.rotation.z=l,c.castShadow=!0,n.add(c)}const o=new Lt(Ee(.1,.1,e,10,1),N.woodDark);return o.rotation.x=Math.PI/2,o.position.z=-e/2,o.castShadow=!0,n.add(o),n}function x2(){const s=new ot,t=2.3,e=1.35;for(let o=0;o<6;o++)we(s,st(t,.06,e/6-.02),N.wood,0,0,-e/2+(o+.5)*e/6);for(const o of[-1,1]){we(s,st(t,.3,.06),N.wood,0,.16,o*e/2);for(let a=0;a<4;a++)we(s,st(.06,.34,.09),N.woodDark,-t/2+.2+a*(t-.4)/3,.16,o*e/2)}for(const o of[-1,1])we(s,st(t*.96,.1,.12),N.woodDark,0,-.07,o*e*.34);for(const o of[-1,1]){const a=we(s,st(2.1,.09,.09),N.woodDark,-t/2-.95,-.02,o*.34);a.rotation.z=.06}we(s,st(.5,.09,.9),N.woodDark,-t/2-1.85,.1,0);const n=we(s,Ee(.055,.055,e+.3,8,1),N.woodDark,-.1,-.12,-1.6500000000000001/2);n.rotation.x=Math.PI/2;const i=iu(.66,10,.14);i.position.set(-.1,-.62,e/2+.12),s.add(i);const r=iu(.66,10,.14);return r.position.set(-.1,-.62,-e/2-.12),s.add(r),s}function E0(){const s=new ot,t=1.9;for(let e=0;e<3;e++)we(s,st(t,.055,.14),N.wood,0,.46,-.18+e*.16);for(let e=0;e<2;e++){const n=we(s,st(t,.14,.05),N.wood,0,.72+e*.17,.28);n.rotation.x=-.16}for(const e of[-1,1]){we(s,st(.09,.46,.09),N.woodPlain,e*(t/2-.14),.23,-.2),we(s,st(.09,.46,.09),N.woodPlain,e*(t/2-.14),.23,.24);const n=we(s,st(.07,.62,.07),N.woodPlain,e*(t/2-.14),.72,.28);n.rotation.x=-.16,we(s,st(.08,.07,.52),N.woodPlain,e*(t/2-.14),.44,.02)}return s}function v2(){const s=new ot;we(s,Ee(.042,.058,2.55,10,1),N.metal,0,0,0),we(s,Ee(.15,.19,.1,12,1),N.metal,0,.02,0);const t=new ot,e=.15,n=.3;for(const o of[-1,1])for(const a of[-1,1])we(t,st(.022,n,.022),N.metal,o*e,n/2,a*e);const i=we(t,st(e*1.9,n*.94,e*1.9),N.lampGlass,0,n/2,0);i.castShadow=!1,we(t,st(e*2.3,.03,e*2.3),N.metal,0,.012,0),we(t,st(e*2.3,.035,e*2.3),N.metal,0,n,0);const r=we(t,new mn(.2,.15,4),N.metal,0,n+.075,0);return r.rotation.y=Math.PI/4,we(t,new Kt(.026,8,6),N.metal,0,n+.17,0),t.position.y=2.46,s.add(t),s}function _2(s=1,t=!0){const e=new ot,n=[[0,0],[.17,0],[.185,.03],[.215,.1],[.232,.2],[.238,.28],[.25,.315],[.252,.345],[.235,.352],[.215,.33],[0,.33]].map(([a,l])=>new J(a,l)),i=new Lt(new Zr(n,18),N.terracotta);i.castShadow=i.receiveShadow=!0,e.add(i);const r=new Lt(new $e(.245,.028,6,16),N.terracotta);r.rotation.x=Math.PI/2,r.position.y=.17,r.castShadow=!0,e.add(r);const o=new Lt(new _s(.22,12),N.darkInset);if(o.rotation.x=-Math.PI/2,o.position.y=.16,e.add(o),t){const a=qe(Math.floor(Math.random()*999)),l=[];for(let h=0;h<7;h++){const d=a()*6.28,u=a()*.16,f=new Kt(.09+a()*.06,8,6);Wr(f,.25,3,h),f.translate(Math.cos(d)*u,.24+a()*.16,Math.sin(d)*u),Bn(f,new K(.22,.36,.14)),l.push(f)}for(let h=0;h<6;h++){const d=a()*6.28,u=a()*.18,f=new Kt(.045,6,4);f.translate(Math.cos(d)*u,.36+a()*.14,Math.sin(d)*u),Bn(f,new K(.95,.86,.55)),l.push(f)}const c=new Lt(pn(l),N.potPlant);c.castShadow=!0,e.add(c)}return e.scale.setScalar(s),e}function y2(s,t=.95){const e=new ot,n=[];for(let i=0;i<s.length-1;i++){const[r,o]=s[i],[a,l]=s[i+1],c=Math.hypot(a-r,l-o),h=Math.max(1,Math.round(c/1.6));for(let d=0;d<h;d++)n.push([r+(a-r)*(d/h),o+(l-o)*(d/h)])}n.push(s[s.length-1]);for(let i=0;i<n.length;i++){const[r,o]=n[i],a=qt(r,o),l=we(e,st(.1,t+.18,.1),N.woodPlain,r,a+(t+.18)/2,o);if(l.rotation.y=Math.random()*.2,i<n.length-1){const[c,h]=n[i+1],d=qt(c,h),u=c-r,f=h-o,p=Math.hypot(u,f),x=Math.atan2(u,f);for(const m of[.35,.78]){const g=we(e,st(.055,.09,p+.05),N.woodPlain,r+u/2,(a+d)/2+m,o+f/2);g.rotation.y=x,g.rotation.x=Math.atan2(d-a,p)*0}}}return e}function M2(){const s=new ot;we(s,st(.12,1.8,.12),N.woodDark,0,.9,0),we(s,st(.42,.5,.38),N.woodPlain,0,1.9,0);const t=we(s,new mn(.36,.26,4),N.roof,0,2.24,0);t.rotation.y=Math.PI/4;const e=we(s,new _s(.075,12),N.darkInset,0,1.94,.2);return e.castShadow=!1,s}function S2(){const s=new ot;we(s,Ee(.28,.24,.72,14,1),N.woodDark,0,0,0);for(const t of[.14,.36,.58]){const e=we(s,new $e(.275-Math.abs(t-.36)*.1,.022,5,16),N.metal,0,t,0);e.rotation.x=Math.PI/2}return s}function C0(s=.5){const t=new ot;we(t,st(s,s*.8,s),N.wood,0,s*.4,0);for(const e of[-1,1])for(const n of[-1,1])we(t,st(.05,s*.82,.05),N.woodDark,e*s/2,s*.4,n*s/2);return t}function b2(){const s=new ot,t=we(s,new Oe(.75,.85,1.1,14,1),N.straw,0,.55,0);return t.rotation.z=Math.PI/2,s}function w2(s=1100){const t=new ot,e=[ps(11,1),ps(12,1),ps(13,1),ps(14,0)],n=[[],[],[],[]],i=qe(2024);for(let a=0;a<s;a++){const l=-150+i()*300,c=ns(l),h=is(l),d=i()<.45,u=d?h*(.15+i()*.95):h*(.95+i()*.55),f=i()<.5?-1:1,p=c+f*u,x=qt(l,p),m=d?.22+i()*.55:.16+i()*.42,g=d?Math.max(x,On-.35):x+m*.15;n[Math.floor(i()*4)].push({p:[l,g,p],s:[m*(.9+i()*.7),m*(.6+i()*.5),m*(.9+i()*.6)],r:[i()*6.28,i()*6.28,i()*6.28]})}const r=ut({color:9275514,rim:.34,rimColor:15266016,spec:.22,specPower:26,fresnel:.3,noise:.24,noiseScale:2,saturation:.95,wet:.55,roughVar:.9}),o=new ae;return n.forEach((a,l)=>{const c=new Cn(e[l],r,a.length);c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,a.forEach((h,d)=>{o.position.set(...h.p),o.rotation.set(...h.r),o.scale.set(...h.s),o.updateMatrix(),c.setMatrixAt(d,o.matrix)}),c.instanceMatrix.needsUpdate=!0,t.add(c)}),t}function T2(s){const t=new ot;t.name="scenery";const e=x2();e.position.set(21,qt(21,59)+.35,59),e.rotation.set(-.08,.92,.24),t.add(e);const n=iu(.66,10,.14);n.position.set(17.6,qt(17.6,60.4)+.12,60.4),n.rotation.set(-Math.PI/2+.22,.4,.3),t.add(n);const i=E0();i.position.set(14.4,qt(14.4,11.2),11.2),i.rotation.y=-2.15,t.add(i);const r=E0();r.position.set(18.9,qt(18.9,15.6),15.6),r.rotation.y=-2.05,t.add(r);const o=v2();o.position.set(13.6,qt(13.6,19.5),19.5),t.add(o);const a=M2();a.position.set(21.8,qt(21.8,15.4),15.4),t.add(a);const l=y2([[23.2,6.2],[24.6,11.6],[22.6,17.2],[17,18.6],[11.4,16.4]]);t.add(l);const c=[[11.7,13.4,1],[12.35,12.85,.8],[19.9,8.3,1],[20.6,9,.75],[-2.6,4.6,.95],[-1.9,5.4,.7],[-6.2,5.2,.9],[8.6,10.4,.85]];for(const[p,x,m]of c){const g=_2(m);g.position.set(p,qt(p,x),x),g.rotation.y=Math.random()*6.28,t.add(g)}const h=S2();h.position.set(2.9,qt(2.9,5.3),5.3),t.add(h);const d=C0(.55);d.position.set(3.7,qt(3.7,4.7),4.7),d.rotation.y=.5,t.add(d);const u=C0(.42);u.position.set(3.5,qt(3.5,4.7)+.44,4.72),u.rotation.y=.9,t.add(u);const f=b2();return f.position.set(-13.2,qt(-13.2,6.5),6.5),f.rotation.y=.4,t.add(f),s.add(t),t}const R0=(s,t,e)=>new R(s,t,e);function zt(s,t,e,n=0,i=0,r=0){const o=new Lt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,s.add(o),o}function A2(s=9,t=6.2,e=4.2,n=2.45){const i=new ot;zt(i,st(s+.2,1.25,t+.2,3.4),N.stone,0,.62,0),zt(i,st(s,e-1.25,t,1.6),N.wood,0,1.25+(e-1.25)/2,0);for(let a=0;a<3;a++)zt(i,st(s-.1,.09,.05),N.woodDark,0,1.7+a*1.05,t/2+.015);for(const a of[-1,1])for(const l of[-1,1])zt(i,st(.16,e-1.2,.16),N.wood,a*(s/2-.05),1.25+(e-1.25)/2,l*(t/2-.05));const r=ld(s,t,n,.34,1.7);zt(i,r,N.roof,0,e,0);for(const a of[-1,1]){const l=new Ni;l.moveTo(-t/2,0),l.lineTo(t/2,0),l.lineTo(0,n),l.closePath();const c=zt(i,new Ms(l),N.woodDark,a*(s/2-.02),e,0);c.rotation.y=a*Math.PI/2}zt(i,st(s+.9,.14,.2,1),N.roof,0,e+n-.02,0);for(const a of[-1,1]){zt(i,st(s+.72,.17,.07),N.woodDark,0,e-.06,a*(t/2+.32));for(const l of[-1,1]){const c=Math.hypot(t/2+.34,n),h=zt(i,st(.09,.17,c),N.woodDark,l*(s/2+.31),e+n/2-.04,0);h.rotation.x=-Math.atan2(n,t/2+.34)}}zt(i,st(3.3,3.15,.1),N.darkInset,0,1.56,t/2+.02);for(const a of[-1,1]){zt(i,st(1.42,2.96,.1),N.woodDark,a*.74,1.5,t/2+.06);const l=zt(i,st(.075,1.25,.045),N.woodDark,a*.74,1.5,t/2+.11);l.rotation.z=a*.95,zt(i,st(.5,.07,.04),N.metal,a*1.15,2.45,t/2+.12),zt(i,st(.5,.07,.04),N.metal,a*1.15,.75,t/2+.12)}zt(i,st(3.4,.18,.26),N.woodDark,0,3.12,t/2+.05),zt(i,st(.16,3.2,.22),N.woodDark,-1.62,1.6,t/2+.05),zt(i,st(.16,3.2,.22),N.woodDark,1.62,1.6,t/2+.05),zt(i,st(1.42,1.02,.1),N.darkInset,0,3.28,t/2+.03),zt(i,st(1.62,.11,.18),N.woodDark,0,3.82,t/2+.07),zt(i,st(1.62,.11,.18),N.woodDark,0,2.74,t/2+.07);for(const a of[-1,1])zt(i,st(.11,1.14,.18),N.woodDark,a*.76,3.28,t/2+.07);zt(i,st(.13,.13,1.35),N.woodDark,0,4.12,t/2+.62),i.add(Bs(R0(0,3.55,t/2+.12),R0(0,4.1,t/2+.95),.08,N.woodDark)),zt(i,Ee(.01,.01,.62,4,1),N.woodDark,0,3.8,t/2+1.22),zt(i,new $e(.06,.014,5,8),N.metal,0,3.48,t/2+1.22);const o=vi(.5,.62);return o.position.set(-s/2+.02,2.1,0),o.rotation.y=-Math.PI/2,i.add(o),i}function E2(s=6.2,t=4.6,e=3,n=1.75){const i=new ot;zt(i,st(s,e,t,3.4),N.stone,0,e/2,0),zt(i,st(s+.24,.4,t+.24,3.4),N.stone,0,.2,0);const r=ld(s,t,n,.38,1.6);zt(i,r,N.roof,0,e,0);for(const h of[-1,1]){const d=new Ni;d.moveTo(-t/2,0),d.lineTo(t/2,0),d.lineTo(0,n),d.closePath();const u=zt(i,new Ms(d),N.stone,h*(s/2-.01),e,0);u.rotation.y=h*Math.PI/2}zt(i,st(s+.7,.12,.18,1),N.roof,0,e+n-.02,0);for(const h of[-1,1]){zt(i,st(s+.56,.14,.06),N.woodDark,0,e-.05,h*(t/2+.26));for(const d of[-1,1]){const u=Math.hypot(t/2+.3,n),f=zt(i,st(.08,.14,u),N.woodDark,d*(s/2+.25),e+n/2-.03,0);f.rotation.x=-Math.atan2(n,t/2+.3)}}zt(i,st(.5,1.9,.5,1.8),N.stone,s/2-.9,e+n*.55,-.9),zt(i,st(.64,.12,.64,1.8),N.stone,s/2-.9,e+n*.55+.98,-.9);const o=Xc(1,2,{mat:N.woodDark,boardMat:N.woodDark});o.position.set(-.6,0,t/2-.02),i.add(o);const a=vi(.62,.78,{shutters:!0,box:!0});a.position.set(1.5,1.35,t/2-.02),i.add(a);const l=vi(.55,.7);l.position.set(s/2-.02,1.4,.6),l.rotation.y=Math.PI/2,i.add(l);const c=Zm(20,3.2,.45);c.position.set(s/2-.9,e+n*.55+1.15,-.9),i.add(c),zt(i,st(.7,.08,.28),N.woodPlain,-.6,.42,t/2+.55);for(const h of[-1,1])zt(i,st(.07,.42,.07),N.woodPlain,-.6+h*.26,.21,t/2+.55);return i}function C2(s=4.2,t=3.2,e=2.4){const n=new ot;for(const r of[-1,1])for(const o of[-1,1])zt(n,st(.16,e,.16),N.woodDark,r*(s/2-.1),e/2,o*(t/2-.1));for(const r of[-1,1])zt(n,st(s,.14,.14),N.woodDark,0,e-.07,r*(t/2-.1));const i=zt(n,st(s+.6,.12,t+.7,2.4),N.roof,0,e+.12,0);i.rotation.x=-.13,zt(n,st(s-.2,e-.2,.1,1.6),N.woodDark,0,(e-.2)/2,-t/2+.1);for(let r=0;r<6;r++){const o=zt(n,Ee(.09,.09,1.6,6,1),N.wood,-1.1+r%3*.22,.09+Math.floor(r/3)*.2,.4);o.rotation.z=Math.PI/2}return n}function R2(){const s=new ot,t=12;for(let o=0;o<t;o++){const a=o/t*Math.PI*2,l=zt(s,st(.58,.86,.26,2.6),N.stone,Math.sin(a)*.98,.43,Math.cos(a)*.98);l.rotation.y=a}const e=new Lt(new $e(1.02,.075,6,26),N.stone);e.rotation.x=Math.PI/2,e.position.y=.88,e.castShadow=!0,s.add(e);const n=new Lt(new _s(.9,22),N.darkInset);n.rotation.x=-Math.PI/2,n.position.y=.55,s.add(n);for(const o of[-1,1]){zt(s,st(.13,2.05,.13),N.woodDark,o*.92,1.02,0);const a=zt(s,st(.07,.5,.07),N.woodDark,o*.92,.9,.16);a.rotation.x=.55}const i=new Oe(.07,.07,2.2,8);i.rotateZ(Math.PI/2),zt(s,i,N.woodDark,0,2.02,0);const r=new Oe(.115,.115,.62,12);r.rotateZ(Math.PI/2),zt(s,r,N.woodDark,.28,2.02,0),zt(s,st(.05,.05,.3),N.woodDark,.62,2.02,.16),zt(s,st(.05,.22,.05),N.woodDark,.62,1.92,.3),zt(s,Ee(.011,.011,.82,4,1),N.woodDark,0,1.6,0),zt(s,Ee(.155,.125,.26,12,1),N.woodDark,0,1.06,0),zt(s,new $e(.15,.016,5,12),N.metal,0,1.16,0).rotation.x=Math.PI/2;for(const o of[-1,1]){const a=zt(s,st(1.25,.09,2.35,2.6),N.roof,o*.55,2.2,0);a.rotation.z=-o*.44}return zt(s,st(.12,.1,2.4,2.6),N.roof,0,2.46,0),zt(s,new Kt(.06,8,6),N.metal,0,2.55,0),s}function P2(s=4,t=3.2){const e=new ot,n=qe(303);for(let i=0;i<s;i++){const r=(i-(s-1)/2)*.62;zt(e,st(t,.22,.46,1.2),N.dirt,0,-.02,r);const o=Math.floor(t/.42);for(let a=0;a<o;a++){const l=-t/2+.2+a*.42,c=.11+n()*.05,h=new Lt(new Kt(c,7,5),N.cabbage);h.scale.set(1,.78,1),h.position.set(l+(n()-.5)*.05,.1+c*.5,r),h.castShadow=!0,e.add(h)}}return e}function P0(s=1.1,t=2){const e=new ot;return zt(e,Ee(s,s*1.06,t*.62,14,1),N.straw,0,0,0),zt(e,new mn(s*1.08,t*.5,14),N.straw,0,t*.62,0),zt(e,Ee(.05,.05,.5,5,1),N.woodDark,0,t*1.05,0),e}function I2(s=3.2,t=.52){const e=new ot;for(const i of[-1,1])zt(e,st(.07,s,.07),N.woodPlain,i*t/2,s/2,0);const n=Math.floor(s/.34);for(let i=0;i<n;i++)zt(e,st(t,.05,.05),N.woodPlain,0,.25+i*.34,0);return e}function I0(){const s=new ot,t=new Lt(new Kt(.26,10,8),N.straw);return t.scale.set(.82,1.05,.78),t.position.y=.26,t.castShadow=t.receiveShadow=!0,s.add(t),zt(s,Ee(.1,.14,.16,8,1),N.straw,0,.5,0),zt(s,new $e(.105,.018,5,10),N.woodDark,0,.62,0).rotation.x=Math.PI/2,s}function D0(s=2,t=1){const e=new ot,n=qe(71),i=Math.floor(t/.2);for(let r=0;r<i;r++){const o=Math.floor(s/.22);for(let a=0;a<o;a++){if(n()>.9)continue;const l=zt(e,Ee(.085,.09,.5,6,1),N.wood,-s/2+.12+a*.22,.09+r*.19,(n()-.5)*.06);l.rotation.x=Math.PI/2,l.rotation.z=(n()-.5)*.15}}return e}function D2(s){const t=new ot;t.name="village";const e=(a,l,c,h=0,d=0)=>(a.position.set(l,qt(l,c)+d,c),a.rotation.y=h,t.add(a),a);e(A2(),29.5,37.5,-.42,-.1),e(E2(),-20,33,.52,-.08),e(P2(),-16.4,30.2,.52,-.06),e(C2(),-15,8.5,.25,-.1),e(R2(),8.2,13.8,.3,-.05),e(P0(1.15,2.2),34,33.5,.6,0),e(P0(.95,1.8),32.2,35.4,1.4,0);const n=I2(3.4,.55);n.position.set(25.2,qt(25.2,41),41),n.rotation.set(0,-.42,.16),n.position.y=qt(25.2,41),t.add(n);const i=D0(2.2,1);i.position.set(34.2,qt(34.2,40),40),i.rotation.y=-.42,t.add(i);for(const[a,l,c]of[[27.6,43.2,.4],[28.4,43.8,1.2],[26.9,44.1,2.1]]){const h=I0();h.position.set(a,qt(a,l),l),h.rotation.y=c,t.add(h)}const r=D0(1.5,.8);r.position.set(-16.6,qt(-16.6,35.6),35.6),r.rotation.y=.52,t.add(r);const o=I0();return o.position.set(-22.6,qt(-22.6,35.2),35.2),o.rotation.y=.8,t.add(o),s.add(t),t}const L2=`
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
`,N2=`
precision highp float;

uniform sampler2D uNormal;
uniform sampler2D uHeight;
uniform vec2 uWorldMap;   // (半边长, 边长)
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
    vec2 huv = ( vWorld.xz + uWorldMap.x ) / uWorldMap.y;
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
`;function U2(s=340,t=10){const e=[],n=[],i=[];for(let o=0;o<=s;o++){const a=-Nn+o/s*Mi,l=ns(a),c=is(a)*1.12;for(let h=0;h<=t;h++){const d=h/t,u=l+(d*2-1)*c;e.push(a,On,u),n.push(d,a/7)}}for(let o=0;o<s;o++)for(let a=0;a<t;a++){const l=o*(t+1)+a,c=l+t+1;i.push(l,c,l+1,c,c+1,l+1)}const r=new Jt;return r.setAttribute("position",new At(e,3)),r.setAttribute("uv",new At(n,2)),r.setIndex(i),r.computeVertexNormals(),r}class F2{constructor(t=1024,e=512){this.rt=new Xe(t,e,{type:on,colorSpace:ts,depthBuffer:!0,stencilBuffer:!1,samples:0}),this.camera=new fn,this.matrix=new Wt,this.textureMatrix=new Wt,this._v=new R,this._t=new R,this._rot=new Wt,this._normal=new R(0,1,0),this._plane=new Ci,this._clip=new Se,this._q=new Se}update(t,e,n,i){const r=new R().setFromMatrixPosition(n.matrixWorld),o=r.clone();o.y=2*On-r.y,this.camera.position.copy(o),this.camera.up.set(0,1,0);const a=new R(0,0,-1).applyQuaternion(n.quaternion);a.y=-a.y,this.camera.lookAt(o.clone().add(a)),this.camera.projectionMatrix.copy(n.projectionMatrix),this.camera.projectionMatrixInverse.copy(n.projectionMatrixInverse),this.camera.updateMatrixWorld();const l=this._plane.setFromNormalAndCoplanarPoint(this._normal,new R(0,On,0));l.applyMatrix4(this.camera.matrixWorldInverse);const c=this._clip.set(l.normal.x,l.normal.y,l.normal.z,l.constant),h=this.camera.projectionMatrix,d=this._q;d.x=(Math.sign(c.x)+h.elements[8])/h.elements[0],d.y=(Math.sign(c.y)+h.elements[9])/h.elements[5],d.z=-1,d.w=(1+h.elements[10])/h.elements[14],c.multiplyScalar(2/c.dot(d)),h.elements[2]=c.x,h.elements[6]=c.y,h.elements[10]=c.z+1-.003,h.elements[14]=c.w,this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.camera.projectionMatrix),this.textureMatrix.multiply(this.camera.matrixWorldInverse);const u=i.map(p=>p.visible);i.forEach(p=>{p.visible=!1});const f=t.getRenderTarget();t.setRenderTarget(this.rt),t.clear(),t.render(e,this.camera),t.setRenderTarget(f),i.forEach((p,x)=>{p.visible=u[x]})}}function O2(s){const t=pw(512),e=new F2(1024,512),n=r=>new ze({vertexShader:L2,fragmentShader:N2,transparent:!0,depthWrite:!1,side:Fe,uniforms:{uNormal:{value:t},uHeight:{value:s},uWorldMap:{value:new J(Nn,Mi)},uReflect:{value:e.rt.texture},uReflectMatrix:{value:e.textureMatrix},uTime:De.uTime,uWaterY:{value:On},uDepthScale:{value:1},uFlowSpeed:{value:.75},uIsStream:{value:0},uDeepColor:{value:new K(1526870)},uShallowColor:{value:new K(4161909)},uFoamColor:{value:new K(15923182)},uSunDir:De.uSunDir,uSunColor:De.uSunColor,uSkyColor:De.uSkyColor,uFogColor:De.uFogColor,uFogDensity:De.uFogDensity,uReflectStrength:{value:.58},uWaveAmp:{value:1},uDebug:{value:0}}}),i=new Lt(U2(),n());return i.receiveShadow=!1,i.renderOrder=10,i.name="river",{river:i,reflection:e,meshes:[i]}}class B2{constructor(t,e){this.camera=t,this.dom=e,this.yaw=0,this.pitch=0,this.vel=new R,this.keys=new Set,this.enabled=!1,this.speed=7.5,this.sensitivity=.0022,this._dir=new R,this._right=new R,this._euler=new zn(0,0,0,"YXZ"),this.onLockChange=null,this.descend=null,addEventListener("keydown",n=>{this.keys.add(n.code),n.code==="Space"&&n.preventDefault()}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",n=>{document.pointerLockElement!==this.dom||!this.enabled||(this.yaw-=n.movementX*this.sensitivity,this.pitch-=n.movementY*this.sensitivity,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch)))}),document.addEventListener("pointerlockchange",()=>{this.onLockChange&&this.onLockChange(document.pointerLockElement===this.dom)})}lock(){if(document.pointerLockElement!==this.dom){const t=this.dom.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}}unlock(){document.pointerLockElement===this.dom&&document.exitPointerLock()}setFromCamera(){this._euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this.yaw=this._euler.y,this.pitch=this._euler.x}descendTo(t){this.descend=t}update(t){if(!this.enabled)return;if(this.descend!==null){const h=Math.min(1,t*2.2);this.camera.position.y+=(this.descend-this.camera.position.y)*h,this.vel.y=0,Math.abs(this.camera.position.y-this.descend)<.06&&(this.descend=null)}const e=Math.cos(this.pitch);this._dir.set(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e).normalize(),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize();const n=new R(this._dir.x,0,this._dir.z).normalize(),i=new R,r=this.keys;(r.has("KeyW")||r.has("ArrowUp"))&&i.add(n),(r.has("KeyS")||r.has("ArrowDown"))&&i.sub(n),(r.has("KeyD")||r.has("ArrowRight"))&&i.add(this._right),(r.has("KeyA")||r.has("ArrowLeft"))&&i.sub(this._right),r.has("Space")&&(i.y+=1),(r.has("ControlLeft")||r.has("KeyQ"))&&(i.y-=1);const o=r.has("ShiftLeft")||r.has("ShiftRight")?3.2:1;i.lengthSq()>0&&i.normalize().multiplyScalar(this.speed*o),this.vel.lerp(i,1-Math.pow(.0015,t)),this.camera.position.addScaledVector(this.vel,t);const a=this.camera.position.x,l=this.camera.position.z,c=Math.max(qt(a,l),On)+.55;this.camera.position.y<c&&(this.camera.position.y+=(c-this.camera.position.y)*Math.min(1,t*12),this.vel.y=Math.max(0,this.vel.y)),this.camera.position.x=dn.clamp(this.camera.position.x,-190,190),this.camera.position.z=dn.clamp(this.camera.position.z,-190,190),this._euler.set(this.pitch,this.yaw,0,"YXZ"),this.camera.quaternion.setFromEuler(this._euler)}}const Ar=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,L0=s=>1-Math.pow(1-s,3),ri=[{name:"THE HILL",jp:"丘の上",from:[96,46,132],to:[62,20,102],lookFrom:[-6,10,4],lookTo:[0,12,0],fov:32,dur:8.5,ease:Ar,drift:.35},{name:"THE MILL",jp:"風車",from:[25,5.6,23],to:[17.5,7.6,18.5],lookFrom:[0,9,0],lookTo:[0,13,0],fov:40,dur:7,ease:L0,drift:.25},{name:"THE WHEEL",jp:"水車",from:[12.2,9,11],to:[9.4,8.2,8.2],lookFrom:[4.2,9,2.4],lookTo:[4.2,9.4,2.4],fov:36,dur:5.5,ease:Ar,drift:.12},{name:"THE RIVER",jp:"川",from:[44,2.4,64],to:[14,1.9,59],lookFrom:[18,2.4,52],lookTo:[2,6,44],fov:44,dur:8,ease:Ar,drift:.3},{name:"THE CART",jp:"古い荷車",from:[25.5,2.3,64],to:[22.6,1.9,61.6],lookFrom:[20.6,1,58.6],lookTo:[20.4,1,58.4],fov:38,dur:5.5,ease:L0,drift:.15},{name:"THE GATE",jp:"門",from:[21,5,37],to:[15.5,5.4,31.5],lookFrom:[12.6,6,27.2],lookTo:[12.4,7.4,26.6],fov:42,dur:6,ease:Ar,drift:.2},{name:"THE GARDEN",jp:"庭",from:[28,7.6,25],to:[21.5,7,19],lookFrom:[14,5.2,11],lookTo:[12,5.8,9.5],fov:42,dur:6.5,ease:Ar,drift:.22},{name:"ASCEND",jp:"遥か",from:[6,7.5,40],to:[26,21,84],lookFrom:[0,12,4],lookTo:[0,9,0],fov:40,dur:10,ease:Ar,drift:.4}];class z2{constructor(t){this.camera=t,this.playing=!1,this.shot=0,this.t=0,this.onShotChange=null,this.onEnd=null,this.loop=!1,this.range=[0,ri.length-1],this._p=new R,this._l=new R,this._lookAt=new R}play(t=0,e=ri.length-1){this.range=[t,e],this.shot=t,this.t=0,this.playing=!0,this.onShotChange&&this.onShotChange(this.shot)}stop(){this.playing=!1}jump(t,e=0){this.shot=dn.clamp(t,0,ri.length-1),this.t=e,this.playing=!0,this.apply()}apply(){const t=ri[this.shot],e=t.ease(this.t/t.dur),n=Math.sin(this.t*.9)*t.drift*.01;this._p.set(dn.lerp(t.from[0],t.to[0],e)+n*6,dn.lerp(t.from[1],t.to[1],e)+Math.sin(this.t*1.3)*t.drift*.02,dn.lerp(t.from[2],t.to[2],e)),this._l.set(dn.lerp(t.lookFrom[0],t.lookTo[0],e),dn.lerp(t.lookFrom[1],t.lookTo[1],e),dn.lerp(t.lookFrom[2],t.lookTo[2],e)),this.camera.position.copy(this._p),this.camera.lookAt(this._l),this.camera.fov=t.fov,this.camera.updateProjectionMatrix()}update(t){if(!this.playing)return;this.t+=t;const e=ri[this.shot];if(this.t>=e.dur)if(this.shot<this.range[1])this.shot++,this.t=0,this.onShotChange&&this.onShotChange(this.shot);else if(this.loop)this.shot=this.range[0],this.t=0,this.onShotChange&&this.onShotChange(this.shot);else{this.playing=!1,this.onEnd&&this.onEnd();return}this.apply()}}const k2=(s,t,e)=>{let n=(t-s)%(Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n<-Math.PI&&(n+=Math.PI*2),s+n*e};class V2{constructor(t,e,n){this.camera=t,this.dom=e,this.avatar=n,this.yaw=0,this.pitch=.18,this.dist=4.3,this.targetDist=4.3,this.enabled=!1,this.walkSpeed=3.6,this.runMul=2.15,this.sensitivity=.0022,this.vel=new R,this.obstacles=[],this.keys=new Set,this.heading=0,this.smoothCam=new R,this._camInit=!1,this._fwd=new R,this._right=new R,this._move=new R,this._target=new R,this._desired=new R,addEventListener("keydown",i=>{this.keys.add(i.code),i.code==="Space"&&i.preventDefault()}),addEventListener("keyup",i=>this.keys.delete(i.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("mousemove",i=>{document.pointerLockElement!==this.dom||!this.enabled||(this.yaw-=i.movementX*this.sensitivity,this.pitch+=i.movementY*this.sensitivity,this.pitch=Math.max(-.55,Math.min(1.05,this.pitch)))}),addEventListener("wheel",i=>{this.enabled&&(this.targetDist=dn.clamp(this.targetDist+i.deltaY*.0035,1.8,11))},{passive:!0})}placeAt(t,e){const n=Math.max(qt(t,e),On-.12);this.avatar.root.position.set(t,n,e),this.heading=this.yaw+Math.PI,this.avatar.root.rotation.y=this.heading,this._camInit=!1}syncFromCamera(t){const e=new R(0,0,-1).applyQuaternion(t.quaternion);this.yaw=Math.atan2(-e.x,-e.z),this.pitch=.18}update(t){if(!this.enabled)return;const e=this.keys;this._fwd.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)).normalize(),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)).normalize(),this._move.set(0,0,0),(e.has("KeyW")||e.has("ArrowUp"))&&this._move.add(this._fwd),(e.has("KeyS")||e.has("ArrowDown"))&&this._move.sub(this._fwd),(e.has("KeyD")||e.has("ArrowRight"))&&this._move.add(this._right),(e.has("KeyA")||e.has("ArrowLeft"))&&this._move.sub(this._right);const n=this._move.lengthSq()>1e-4,i=e.has("ShiftLeft")||e.has("ShiftRight"),r=this.walkSpeed*(i?this.runMul:1);n&&(this._move.normalize().multiplyScalar(r),this.heading=k2(this.heading,Math.atan2(this._move.x,this._move.z),Math.min(1,t*11))),this.vel.lerp(this._move,1-Math.pow(9e-4,t));const o=this.avatar.root;o.position.addScaledVector(this.vel,t),o.position.x=dn.clamp(o.position.x,-190,190),o.position.z=dn.clamp(o.position.z,-190,190);const a=(m,g,v)=>{const M=o.position.x-m,_=o.position.z-g,w=Math.hypot(M,_);w<v&&w>1e-4&&(o.position.x=m+M/w*v,o.position.z=g+_/w*v)};a(0,0,4.05),a(-8.3,1.5,5.6),a(13.2,3.4,2.5),a(29.5,37.5,5.2),a(-20,33,4),a(-15,8.5,2.6),a(8.2,13.8,1.3);for(let m=0;m<this.obstacles.length;m++){const g=this.obstacles[m],v=o.position.x-g.x,M=o.position.z-g.z;if(Math.abs(v)>g.r||Math.abs(M)>g.r)continue;const _=Math.hypot(v,M);_<g.r&&_>1e-4&&(o.position.x=g.x+v/_*g.r,o.position.z=g.z+M/_*g.r)}const l=Math.max(qt(o.position.x,o.position.z),On-.12);o.position.y+=(l-o.position.y)*Math.min(1,t*14),o.rotation.y=this.heading;const c=Math.hypot(this.vel.x,this.vel.z);this.avatar.update(t,c,c>.25),this.dist+=(this.targetDist-this.dist)*Math.min(1,t*8),this._target.copy(o.position),this._target.y+=1.18;const h=Math.cos(this.pitch),d=Math.sin(this.yaw)*h,u=Math.cos(this.yaw)*h,f=Math.sin(this.pitch);let p=this.dist;for(let m=1;m<=7;m++){const g=m/7,v=this._target.x+d*this.dist*g,M=this._target.z+u*this.dist*g,_=this._target.y+f*this.dist*g,w=Math.max(qt(v,M),On)+.45;let b=_<w;if(!b&&_<10)for(let y=0;y<this.obstacles.length;y++){const S=this.obstacles[y],E=S.r+1.15;if(Math.abs(v-S.x)<E&&Math.abs(M-S.z)<E){b=!0;break}}if(b){p=Math.max(1.3,this.dist*(g-.14));break}}if(this._desired.set(this._target.x+d*p,this._target.y+f*p,this._target.z+u*p),!this._camInit)this.smoothCam.copy(this._desired),this._camInit=!0;else{const m=1-Math.pow(15e-7,t);this.smoothCam.lerp(this._desired,m)}const x=Math.max(qt(this.smoothCam.x,this.smoothCam.z),On)+.35;this.smoothCam.y<x&&(this.smoothCam.y=x),this.camera.position.copy(this.smoothCam),this.camera.lookAt(this._target),this.camera.fov=48,this.camera.updateProjectionMatrix()}}function N0(s,t,e,n=.78,i=12){const r=new Oe(s,t,e,i,1);return r.scale(1,1,n),r.translate(0,e/2,0),r}function G2(){const s=new ot;s.name="avatar";const t={skin:ut({color:15911330,rim:.42,rimColor:16770760,spec:.06,specPower:12,fresnel:.06,noise:.05,saturation:1.02}),shirt:ut({color:14931898,rim:.4,rimColor:16774364,spec:.03,specPower:8,fresnel:.05,noise:.08,noiseScale:1.6}),vest:ut({color:8149564,rim:.34,rimColor:16768176,spec:.05,specPower:10,fresnel:.05,noise:.12,noiseScale:1.4}),pants:ut({color:5069940,rim:.3,rimColor:13623551,spec:.04,specPower:10,fresnel:.05,noise:.1,noiseScale:1.4}),boots:ut({color:5980464,rim:.26,rimColor:16767144,spec:.08,specPower:14,fresnel:.06,noise:.1,noiseScale:2}),hat:ut({color:14203e3,rim:.42,rimColor:16773320,spec:.05,specPower:8,fresnel:.05,noise:.14,noiseScale:2.4}),hair:ut({color:3811870,rim:.3,rimColor:12560780,spec:.1,specPower:18,fresnel:.05,noise:.1,noiseScale:2}),scarf:ut({color:11552302,rim:.4,rimColor:16763048,spec:.05,specPower:10,fresnel:.05,noise:.1,noiseScale:2}),bag:ut({color:9071172,rim:.3,rimColor:16768176,spec:.06,specPower:12,fresnel:.05,noise:.12,noiseScale:1.8})},e=(Z,lt,Dt,q=0,at=0,Ct=0)=>{const Nt=new Lt(lt,Dt);return Nt.position.set(q,at,Ct),Nt.castShadow=!0,Nt.receiveShadow=!0,Z.add(Nt),Nt},n=.7,i=.425,r=.6,o=Z=>{const lt=new ot;lt.position.set(Z*.085,n,0);const Dt=Ee(.072,.055,.6,10,1);Dt.translate(0,-.6,0),e(lt,Dt,t.pants,0,0,0);const q=st(.125,.1,.235,1);e(lt,q,t.boots,0,-.645,.045);const at=new Kt(.062,8,6);return at.scale(1,.8,1.1),e(lt,at,t.boots,0,-.66,.145),s.add(lt),lt},a=o(1),l=o(-1),c=new ot;c.position.y=n,s.add(c),e(c,N0(.175,.155,.46,.8),t.shirt,0,0,0);const h=N0(.181,.166,.24,.83);e(c,h,t.vest,0,.02,0);const d=new $e(.072,.024,6,14);d.rotateX(Math.PI/2),e(c,d,t.shirt,0,.475,.012);const u=new $e(.163,.022,6,16);u.rotateX(Math.PI/2),u.scale(1,1,.82),e(c,u,t.boots,0,.03,0);const f=Z=>{const lt=new ot;lt.position.set(Z*.163,i,0);const Dt=new Kt(.056,10,8);e(lt,Dt,t.shirt,0,.005,0);const q=Ee(.055,.045,.44,8,1);q.translate(0,-.44,0),e(lt,q,t.shirt,0,0,0);const at=new Kt(.058,9,7);return e(lt,at,t.skin,0,-.468,.005),lt.rotation.z=Z*.1,c.add(lt),lt},p=f(1),x=f(-1),m=new $e(.088,.036,6,14);m.rotateX(Math.PI/2),e(c,m,t.scarf,0,.505,0);const g=st(.06,.2,.03,1);e(c,g,t.scarf,.07,.41,-.085);const v=Ee(.058,.07,.24,10,1);e(c,v,t.skin,0,.4,0);const M=new ot;M.position.y=r,c.add(M);const _=new Kt(.145,16,12);_.scale(1,1.02,.96),e(M,_,t.skin,0,.115,0);const w=new Kt(.152,16,12);w.scale(1.02,.92,1),e(M,w,t.hair,0,.145,-.012);const b=new Kt(.15,14,10,0,Math.PI*2,0,Math.PI*.45);e(M,b,t.hair,0,.135,.012);const y=new Kt(.017,6,5);e(M,y,t.hair,.055,.115,.132),e(M,y,t.hair,-.055,.115,.132);const S=new Kt(.019,7,6);S.scale(.9,.85,1.1),e(M,S,t.skin,0,.098,.142);const E=new $e(.028,.0065,5,10,Math.PI*.85);E.rotateZ(Math.PI*1.075),e(M,E,t.hair,0,.062,.138);const C=new Kt(.026,6,5);C.scale(1,.55,.4);const P=ut({color:15243910,rim:.2,spec:0,fresnel:.02,noise:.04});e(M,C,P,.088,.072,.118),e(M,C,P,-.088,.072,.118);const L=new ot,F=new Oe(.3,.315,.018,20,1);e(L,F,t.hat,0,0,0);const D=new Oe(.125,.152,.135,16,1);e(L,D,t.hat,0,.075,0);const k=new Oe(.154,.156,.035,16,1,!0);e(L,k,t.scarf,0,.022,0),L.position.set(0,.235,.005),L.rotation.x=-.06,M.add(L);const X=new Kt(.17,14,10);X.scale(.86,.84,.5),e(c,X,t.bag,0,.25,-.155);const z=new Kt(.168,14,8,0,Math.PI*2,0,Math.PI*.52);z.scale(.88,.66,.52),e(c,z,t.vest,0,.275,-.15);const et=new Oe(.048,.048,.3,12,1);et.rotateZ(Math.PI/2),e(c,et,t.hat,0,.385,-.16);for(const Z of[-.09,.09]){const lt=new $e(.05,.008,4,12);lt.rotateY(Math.PI/2),e(c,lt,t.vest,Z,.385,-.16)}for(const Z of[-1,1]){const lt=st(.035,.3,.02,1),Dt=e(c,lt,t.vest,Z*.1,.34,.1);Dt.rotation.x=.1}const V={phase:0,blend:0,lean:0,time:0};function Q(Z,lt,Dt){V.time+=Z;const q=Dt?1:0;V.blend+=(q-V.blend)*Math.min(1,Z*8);const at=1.55;V.phase+=lt*at*Z;const Ct=V.phase,Nt=V.blend,_t=Math.sin(Ct)*.62*Nt,Vt=Math.sin(Ct)*.48*Nt;a.rotation.x=_t,l.rotation.x=-_t,p.rotation.x=-Vt,x.rotation.x=Vt,p.rotation.z=.1+Math.sin(V.time*.9)*.015,x.rotation.z=-.1-Math.sin(V.time*.9)*.015;const Ce=Math.abs(Math.sin(Ct))*.035*Nt;c.position.y=n+Ce,V.lean+=((Dt?.1:0)-V.lean)*Math.min(1,Z*6),c.rotation.x=V.lean,c.rotation.z=Math.sin(Ct)*.035*Nt,M.rotation.z=-Math.sin(Ct)*.05*Nt,M.rotation.x=Math.sin(V.time*.7)*.02-V.lean*.5,Dt||(c.position.y=n+Math.sin(V.time*1.6)*.006)}return{root:s,update:Q,state:V}}const Wn={},ke=(s,t,e,n=0,i=0,r=0,o=!0)=>{const a=new Lt(t,e);return a.position.set(n,i,r),a.castShadow=o,a.receiveShadow=!0,s.add(a),a},ce=(s,t,e,n,i,r,o,a,l,c=!0,h=0)=>{const[d,u]=h===1?[20,16]:h===2?[32,24]:[26,20],f=ke(s,new Kt(e,d,u),t,o,a,l,c);return f.scale.set(n,i,r),f};function ol(s,t,e){const n=s.attributes.position,i=n.count,r=new Float32Array(i*3);for(let o=0;o<i;o++){const a=n.getX(o),l=n.getY(o),c=n.getZ(o);let h=0;for(const d of e){const u=a-d[0],f=l-d[1],p=c-d[2],x=Math.sqrt(u*u+f*f+p*p)/d[3],m=1-Math.min(1,Math.max(0,(x-.88)/.12));m>h&&(h=m)}h=h*h*(3-2*h),r[o*3]=1+(t.r-1)*h,r[o*3+1]=1+(t.g-1)*h,r[o*3+2]=1+(t.b-1)*h}return s.setAttribute("color",new oe(r,3)),s}function H2(s,t){const e=new K(s),n=new K(t);return new K(n.r/e.r,n.g/e.g,n.b/e.b)}function jm(s=.08,t=.42){const e=new Kt(s,20,14),n=e.attributes.position,i=new R;for(let r=0;r<n.count;r++){i.fromBufferAttribute(n,r);const o=Math.min(1,Math.max(0,.5-i.z/(2*s))),a=.52+.48*Math.pow(o,.8);n.setXYZ(r,i.x*t,i.y*a,i.z)}return n.needsUpdate=!0,e.computeVertexNormals(),e}const su=(s,t,e,n=10)=>{const i=new Oe(s,t,e,n,1);return i.translate(0,-e/2,0),i};function ca(s,t,e,n,i,r){const o=new R().subVectors(n,e),a=o.length(),l=new Oe(r,i,a,8,1);l.translate(0,a/2,0);const c=new Lt(l,t);return c.position.copy(e),c.quaternion.setFromUnitVectors(new R(0,1,0),o.normalize()),c.castShadow=!0,c.receiveShadow=!0,s.add(c),c}function ha(s,t){const{x:e,y:n,z:i,ph:r=0,amp:o=.5,bend:a=.5,hipR:l=.08,hipSY:c=.55,rTop:h,rKnee:d,rAnkle:u,upper:f,lower:p,kneeZ:x=.01,mat:m,hipMat:g,hoofMat:v,hoofR:M,hoofSY:_=.6,hoofZ:w=.004,seg:b=10}=t,y=new ot;y.position.set(e,n,i),s.add(y),ce(y,g||m,l,1.12,c,1.42,0,0,0,!0,1),ke(y,su(h,d,f,b),m,0,0,0);const S=new ot;S.position.set(0,-f,x),y.add(S),ce(S,m,d*.99,1,1,1,0,0,0,!1,1),ke(S,su(d,u,p,b),m,0,0,0);const E=new ot;return E.position.y=-p,S.add(E),M>0&&ce(E,v,M,1,_,1.1,0,0,w,!0,1),{g:y,knee:S,foot:E,ph:r,amp:o,bend:a,rest:0}}function dd(s,t,e,n,i,r){const o=e.length-1;for(let a=0;a<o;a++){const l=n+(i-n)*(a/o),c=n+(i-n)*((a+1)/o);ca(s,t,e[a],e[a+1],l,c)}if(r){const a=e[o];ke(s,new Kt(i,10,8),r,a.x,a.y,a.z)}}const sn=(s,t,e)=>new R(s,t,e);function U0(s){return{main:ut({color:s.main,rim:.2,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.3,saturation:1.05}),light:ut({color:s.light,rim:.18,rimColor:16777215,spec:0,fresnel:.02,noise:0,wrap:.3}),dark:ut({color:s.dark,rim:.16,rimColor:16771272,spec:0,fresnel:.02,noise:0,wrap:.3}),eye:ut({color:2104345,rim:0,spec:.55,specPower:70,fresnel:0,noise:0})}}function Kr(){Wn.ready||(Wn.ready=!0,Wn.cat={...U0({main:14264426,light:15918802,dark:11040319}),pink:ut({color:15243930,rim:.1,spec:0,fresnel:.02,noise:0})},Wn.dog={...U0({main:12614212,light:16248024,dark:8145448}),pink:ut({color:14251146,rim:.1,spec:0,fresnel:.02,noise:0}),nose:ut({color:2761504,rim:.05,spec:.4,specPower:40,fresnel:0,noise:0})},Wn.chicken={main:ut({color:16315108,rim:.22,rimColor:16775920,spec:0,fresnel:.02,noise:0,wrap:.34}),light:ut({color:16776178,rim:.2,rimColor:16777215,spec:0,fresnel:.02,noise:0,wrap:.34}),dark:ut({color:14997954,rim:.18,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.34}),wing:ut({color:15129798,rim:.2,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.32}),red:ut({color:13911610,rim:.22,rimColor:16756896,spec:.06,specPower:20,fresnel:.03,noise:0}),beak:ut({color:15246908,rim:.2,rimColor:16767120,spec:.05,specPower:20,fresnel:.03,noise:0}),eye:ut({color:2104345,rim:0,spec:.6,specPower:70,fresnel:0,noise:0})},Wn.cow={base:ut({color:15260349,rim:.2,rimColor:16774882,spec:0,fresnel:.02,noise:0,wrap:.3,vcolor:!0}),plain:ut({color:15260349,rim:.2,rimColor:16774882,spec:0,fresnel:.02,noise:0,wrap:.3}),leg:ut({color:13680541,rim:.18,rimColor:16773852,spec:0,fresnel:.02,noise:0,wrap:.3}),patch:ut({color:10116918,rim:.18,rimColor:15254682,spec:0,fresnel:.02,noise:0,wrap:.3}),muzzle:ut({color:14260882,rim:.16,rimColor:16765128,spec:0,fresnel:.02,noise:0}),horn:ut({color:14207400,rim:.22,rimColor:16774880,spec:.08,specPower:20,fresnel:.04,noise:0}),hoof:ut({color:4864816,rim:.12,rimColor:9073760,spec:.1,specPower:16,fresnel:.02,noise:0}),eye:ut({color:2104345,rim:0,spec:.55,specPower:70,fresnel:0,noise:0})},Wn.sheep={wool:ut({color:16052194,rim:.24,rimColor:16776692,spec:0,fresnel:.02,noise:0,wrap:.36}),face:ut({color:7035984,rim:.18,rimColor:11049612,spec:.04,specPower:14,fresnel:.03,noise:0}),ear:ut({color:14202536,rim:.16,rimColor:16767176,spec:0,fresnel:.02,noise:0}),eye:ut({color:2104345,rim:0,spec:.55,specPower:70,fresnel:0,noise:0}),hoof:ut({color:4864816,rim:.12,rimColor:9073760,spec:.08,specPower:16,fresnel:.02,noise:0})},Wn.duck={main:ut({color:16249834,rim:.22,rimColor:16775920,spec:0,fresnel:.02,noise:0,wrap:.34}),light:ut({color:16776696,rim:.2,rimColor:16777215,spec:0,fresnel:.02,noise:0,wrap:.34}),dark:ut({color:15130059,rim:.18,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.34}),wing:ut({color:15525075,rim:.2,rimColor:16773848,spec:0,fresnel:.02,noise:0,wrap:.32}),bill:ut({color:15243828,rim:.22,rimColor:16765066,spec:.08,specPower:24,fresnel:.03,noise:0}),eye:ut({color:2104345,rim:0,spec:.6,specPower:70,fresnel:0,noise:0})})}function Qr(s,t,e){const{x:n,y:i,z:r,r:o}=e,a=[];for(const l of[-1,1]){const c=new ot;c.position.set(l*n,i,r),s.add(c),ke(c,new Kt(o,14,12),t.eye,0,0,0,!1).scale.set(1,1.12,.7),ke(c,new Kt(o*.33,8,6),t.light,l*o*.27,o*.51,o*.41,!1),a.push(c)}return a}function jr(s,t,e={}){const n=e.speed??.42,i=e.radius??1.3,r=e.turn??3.2,o=e.wander!==!1,a={mode:"idle",timer:.8+Math.random()*2.2,yaw:s.rotation.y,phase:Math.random()*Math.PI*2,gait:0,tx:0,tz:0,blinkIn:2+Math.random()*4,blink:0,extra:0};return s.userData.st=a,s.userData.home||(s.userData.home={x:s.position.x,z:s.position.z}),s.userData.update=(l,c)=>{const h=s.userData.home;if(a.mode==="walk"){const p=a.tx-s.position.x,x=a.tz-s.position.z,m=Math.hypot(p,x);if(m<.09||a.timer<=0)a.mode="idle",a.timer=1.2+Math.random()*2.6;else{let v=Math.atan2(p,x)-a.yaw;v=Math.atan2(Math.sin(v),Math.cos(v)),a.yaw+=v*Math.min(1,l*r),s.rotation.y=a.yaw;const M=n*l*Math.min(1,m*3),_=s.position.x,w=s.position.z;s.position.x+=Math.sin(a.yaw)*M,s.position.z+=Math.cos(a.yaw)*M,s.userData.canStand&&!s.userData.canStand(s.position.x,s.position.z)&&(s.position.x=_,s.position.z=w,a.mode="idle",a.timer=.6+Math.random()*1.2,a.tx=h.x,a.tz=h.z),a.timer-=l}a.gait=Math.min(1,a.gait+l*5),a.phase+=l*(5+n*7)}else if(a.timer-=l,a.gait=Math.max(0,a.gait-l*4),a.timer<=0)if(!o)a.timer=1e9;else{const p=Math.random()*Math.PI*2,x=i*(.3+Math.random()*.7);a.tx=h.x+Math.cos(p)*x,a.tz=h.z+Math.sin(p)*x,a.mode="walk",a.timer=8}s.userData.ground&&(s.position.y=s.userData.ground(s.position.x,s.position.z));const d=a.gait,u=a.phase;for(const p of t.legs){const x=u+p.ph,m=Math.sin(x)*(p.amp??.55)*d;if(p.g.rotation.x=(p.rest||0)+m,p.knee){const g=Math.max(0,-Math.cos(x));p.knee.rotation.x=-g*(p.bend??.5)*d}p.foot&&(p.foot.rotation.x=-m*.45+(p.knee?p.knee.rotation.x*.55:0))}if(t.bob&&(t.bob.position.y=(Math.abs(Math.sin(u))*.85+.15)*.02*d+Math.sin(c*1.7+.4)*.004*(1-d),t.bob.rotation.z=Math.sin(u)*.045*d,t.bob.rotation.x=-Math.sin(u*2)*.012*d),e.graze){a.grazeT=(a.grazeT??2)-l,a.grazeT<=0&&(a.grazeT=2.2+Math.random()*5,a.grazeOn=!a.grazeOn);const p=a.grazeOn?1:0;a.graze=(a.graze??0)+(p-(a.graze??0))*Math.min(1,l*1.5)}const f=a.graze||0;if(t.head){const p=1-d;t.head.rotation.y=(t.headY||0)+Math.sin(c*.37+1.3)*.32*p*(1-f)+Math.sin(u*.5)*.05*d,t.head.rotation.x=(t.headX||0)+Math.sin(c*.29)*.06*p+Math.sin(u*2)*.05*d+f*(t.grazeDip??.85),t.head.rotation.z=Math.sin(c*.23+.7)*.05*p}if(t.tail&&(t.tail.rotation.z=(t.tailZ||0)+Math.sin(c*(2+d*4))*(.09+.2*(1-d)),t.tail.rotation.x=(t.tailX||0)+Math.sin(c*1.3)*.07),t.wings)for(const p of t.wings)p.m.rotation.z=p.rz+Math.sin(c*.9+p.ph)*.05;if(a.blinkIn-=l,a.blinkIn<=0&&(a.blink=1,a.blinkIn=2.4+Math.random()*4.5),a.blink>0){a.blink=Math.max(0,a.blink-l*7.5);const p=1-Math.sin(a.blink*Math.PI)*.93;for(const x of t.eyes)x.scale.y=p}t.idle&&t.idle(l,c,d,a)},s}function F0(s={}){Kr();const t=Wn.cat,e=new ot,n=new ot;e.add(n),ce(n,t.main,.13,1,1.12,.94,0,.155,0,!0,2),ce(n,t.light,.098,.98,1.1,.62,0,.135,.078,!0,2);for(const l of[-1,1])ce(n,t.main,.06,.82,1,1.12,l*.084,.062,-.014,!0,1);for(const l of[-1,1])ke(n,su(.026,.03,.118,8),t.main,l*.052,.128,.07),ce(n,t.light,.033,1,.68,1.15,l*.052,.016,.086,!0,1);const i=new ot;i.position.set(0,.335,.02),n.add(i),ce(i,t.main,.115,1.06,.98,.98,0,0,0,!0,2);for(const l of[-1,1]){const c=ke(i,new mn(.045,.086,8),t.main,l*.066,.094,-.006);c.rotation.z=-l*.26;const h=ke(i,new mn(.025,.054,7),t.pink,l*.066,.091,.006);h.rotation.z=-l*.26}const r=Qr(i,t,{x:.0461,y:.012,z:.099,r:.0265});ke(i,new mn(.0125,.016,3),t.pink,0,-.027,.1155,!1).rotation.x=Math.PI;const o=new ot;o.position.set(0,-.041,.1095),i.add(o);for(const l of[-1,1]){const c=ke(o,new $e(.0108,.0032,5,8,Math.PI*.9),t.eye,l*.0097,.0035,0,!1);c.rotation.z=l>0?Math.PI*.95:Math.PI*1.05}for(const l of[-1,1])for(let c=0;c<2;c++){const h=ke(i,Ee(.0021,.0021,.094,3,1),t.light,l*.07,-.016-c*.015,.088,!1);h.rotation.z=-l*(Math.PI/2-.16),h.rotation.y=l*.3}const a=new ot;return a.position.set(0,.105,-.095),n.add(a),dd(a,t.main,[sn(0,0,0),sn(.035,.062,-.048),sn(.082,.118,-.052),sn(.122,.152,-.012),sn(.142,.16,.04),sn(.14,.148,.088)],.03,.0145,t.dark),e.scale.setScalar(.8),e.userData.height=.38,jr(e,{bob:n,head:i,tail:a,eyes:r,legs:[],headY:0,headX:0,tailZ:0,tailX:0},{speed:.3,radius:.9,wander:s.wander})}function O0(s={}){Kr();const t=Wn.dog,e=new ot,n=new ot;e.add(n),ce(n,t.main,.175,.92,.95,1.34,0,.262,0,!0,2),ce(n,t.main,.162,.95,.98,.95,0,.264,.132,!0,2),ce(n,t.main,.164,.95,.98,.95,0,.262,-.132,!0,2),ce(n,t.light,.135,.86,.78,1.02,0,.185,.02,!0,2),ce(n,t.light,.082,.86,.92,.72,0,.3,.255,!0,1),ca(n,t.main,sn(0,.334,.185),sn(0,.432,.262),.088,.076);const i=new ot;i.position.set(0,.454,.292),n.add(i),ce(i,t.main,.135,1.05,1,1,0,0,0,!0,2);for(const h of[-1,1])ce(i,t.main,.07,1,.92,1,h*.062,-.03,.048,!0,1);ce(i,t.light,.058,1.05,.76,.98,0,-.044,.108,!0,1),ke(i,new Kt(.021,12,9),t.nose,0,-.02,.152,!1).scale.set(1.15,.9,.9);for(const h of[-1,1]){const d=ke(i,new $e(.0115,.003,5,8,Math.PI*.85),t.nose,h*.0105,-.06,.14,!1);d.rotation.z=h>0?Math.PI*.96:Math.PI*1.04}for(const h of[-1,1]){const d=ke(i,new mn(.07,.138,8),t.dark,h*.08,.112,-.012);d.rotation.z=-h*.26,d.rotation.x=-.1;const u=ke(i,new mn(.039,.085,6),t.pink,h*.08,.105,.006);u.rotation.z=-h*.24,u.rotation.x=-.1}const r=Qr(i,t,{x:.054,y:.02,z:.113,r:.0285});for(const h of[-1,1])ce(i,t.light,.017,1.15,.8,.55,h*.052,.074,.108,!1,1);ce(i,t.pink,.019,.95,1.3,.55,.024,-.068,.142,!1,1);const o=[],a=(h,d,u)=>{o.push(ha(e,{x:h,z:d,y:.234,ph:u,amp:.62,bend:.58,hipR:.05,hipSY:.6,rTop:.046,rKnee:.04,rAnkle:.038,upper:.115,lower:.085,kneeZ:.008,mat:t.main,hipMat:t.main,hoofMat:t.light,hoofR:.052,hoofSY:.66,hoofZ:.01,seg:9}))};a(-.095,.18,0),a(.095,.18,Math.PI),a(-.1,-.175,Math.PI),a(.1,-.175,0);const l=new ot;l.position.set(0,.372,-.248),n.add(l);const c=[];for(let h=0;h<=7;h++){const d=-2.28+h*.47;c.push(sn(0,Math.sin(d)*.132+.01,Math.cos(d)*.132+.02))}return dd(l,t.main,c,.05,.03,t.light),e.scale.setScalar(.84),e.userData.height=.54,jr(e,{bob:n,head:i,tail:l,eyes:r,legs:o,headY:0,headX:0,tailZ:0,tailX:0},{speed:.52,radius:1.8,wander:s.wander})}function al(s={}){Kr();const t=Wn.chicken,e=new ot,n=new ot;e.add(n),ce(n,t.main,.115,1,1.02,1.18,0,.196,0,!0,2),ce(n,t.light,.092,.9,.96,.78,0,.176,.078,!0,2);const i=[];for(const d of[-1,1]){const u=new ot;u.position.set(d*.1,.184,-.014),u.rotation.z=-d*.1,n.add(u),ke(u,jm(.074,.42),t.wing,0,0,0),i.push({m:u,rz:-d*.1,ph:d>0?0:1.1})}const r=new ot;r.position.set(0,.258,-.116),n.add(r);for(let d=-2;d<=2;d++){const u=ke(r,new mn(.054,.172,5),t.wing,d*.022,.014,0);u.rotation.x=-.94+Math.abs(d)*.06,u.rotation.z=d*.19,u.scale.set(1,1,.55)}ca(n,t.main,sn(0,.268,.018),sn(0,.344,.052),.048,.038);const o=new ot;o.position.set(0,.356,.055),n.add(o),ce(o,t.main,.072,1,1,1,0,0,0,!0,2);for(let d=0;d<3;d++)ce(o,t.red,d===1?.029:.024,.72,1.2,.55,(d-1)*.027,.064+(d===1?.01:0),.004,!1,1);const a=ke(o,new mn(.021,.052,6),t.beak,0,-.006,.076,!1);a.rotation.x=Math.PI/2,a.scale.set(1,1,.72),ce(o,t.red,.013,.85,1.3,.72,0,-.062,.05,!1,1);const l=Qr(o,t,{x:.043,y:.014,z:.052,r:.0165}),c=[];for(const d of[-1,1]){const u=ha(e,{x:d*.043,z:.006,y:.14,ph:d>0?0:Math.PI,amp:.7,bend:.55,hipR:.0125,hipSY:.7,rTop:.0115,rKnee:.0105,rAnkle:.0105,upper:.078,lower:.062,kneeZ:.004,mat:t.beak,hipMat:t.main,hoofMat:t.beak,hoofR:0,seg:6});for(let f=-1;f<=1;f++){const p=ke(u.foot,new Li(.01,.009,.052),t.beak,0,.002,.02);p.rotation.y=f*.42,p.position.x=Math.sin(f*.42)*.02}c.push(u)}return e.scale.setScalar(.92),e.userData.height=.42,jr(e,{bob:n,head:o,tail:r,eyes:l,legs:c,wings:i,idle:(d,u,f,p)=>{if(p.extra=(p.extra||0)+d,f<.1&&p.extra>4.5&&(p.extra=0,p.peck=1),p.peck>0){p.peck=Math.max(0,p.peck-d*2.6);const x=Math.sin((1-p.peck)*Math.PI);o.rotation.x+=x*1.15}},headY:0,headX:0,tailZ:0,tailX:0},{speed:.34,radius:1.2,wander:s.wander})}function Bh(s={}){Kr();const t=Wn.duck,e=new ot,n=new ot;e.add(n),ce(n,t.main,.115,1,.94,1.36,0,.176,0,!0,2),ce(n,t.light,.098,.88,.86,1.05,0,.13,.02,!0,2);const i=[];for(const c of[-1,1]){const h=new ot;h.position.set(c*.102,.18,-.016),h.rotation.z=-c*.09,n.add(h),ke(h,jm(.078,.4),t.wing,0,0,0),i.push({m:h,rz:-c*.09,ph:c>0?.4:1.5})}const r=new ot;r.position.set(0,.212,-.15),n.add(r);for(let c=-1;c<=1;c++){const h=ke(r,new mn(.056,.152,6),t.main,c*.02,.012,0);h.rotation.x=-1,h.rotation.z=c*.22,h.scale.set(1,1,.55)}ca(n,t.main,sn(0,.232,.048),sn(0,.3,.088),.044,.036);const o=new ot;o.position.set(0,.31,.092),n.add(o),ce(o,t.main,.07,1,1,1,0,0,0,!0,2),ce(o,t.bill,.05,.96,.76,1.2,0,-.018,.06,!1,2);const a=Qr(o,t,{x:.042,y:.016,z:.05,r:.0175}),l=[];for(const c of[-1,1]){const h=ha(e,{x:c*.046,z:.01,y:.108,ph:c>0?0:Math.PI,amp:.55,bend:.45,hipR:.013,hipSY:.7,rTop:.012,rKnee:.011,rAnkle:.011,upper:.056,lower:.052,kneeZ:.003,mat:t.bill,hipMat:t.main,hoofMat:t.bill,hoofR:0,seg:6}),d=ke(h.foot,new Li(.048,.01,.062),t.bill,0,.002,.014);d.rotation.y=-c*.1,l.push(h)}return e.scale.setScalar(.9),e.userData.height=.34,jr(e,{bob:n,head:o,tail:r,eyes:a,legs:l,wings:i,headY:0,headX:0,tailZ:0,tailX:0},{speed:.3,radius:1,wander:s.wander})}function B0(s={}){Kr();const t=Wn.cow,e=new ot,n=new ot;e.add(n);const i=H2(15260349,10116918),r=new Kt(.4,44,30);ol(r,i,[[.14,.18,.16,.25],[-.22,.04,-.18,.26],[.26,-.1,-.06,.21],[-.1,.24,-.26,.19],[.2,.06,.34,.17],[-.18,-.18,.2,.18],[.02,-.27,-.04,.16],[-.06,.14,-.38,.15],[.1,-.16,-.34,.14]]);const o=new Lt(r,t.base);o.scale.set(.9,.9,1.52),o.position.y=.9,o.castShadow=!0,o.receiveShadow=!0,n.add(o);const a=new Kt(.3,32,24);ol(a,i,[[.14,.04,.14,.22],[-.16,-.1,.1,.16]]);const l=new Lt(a,t.base);l.scale.set(1.02,.98,.95),l.position.set(0,.92,.34),l.castShadow=!0,l.receiveShadow=!0,n.add(l);const c=new Kt(.29,32,24);ol(c,i,[[-.08,.1,-.16,.17],[.14,-.12,-.12,.15]]);const h=new Lt(c,t.base);h.scale.set(1.02,.98,.95),h.position.set(0,.9,-.34),h.castShadow=!0,h.receiveShadow=!0,n.add(h),ca(n,t.plain,sn(0,1,.4),sn(0,1.13,.6),.2,.17);const d=new ot;d.position.set(0,1.215,.69),n.add(d);const u=new Kt(.2,36,26);ol(u,i,[[-.15,.06,.11,.17],[.17,.1,-.03,.15]]);const f=new Lt(u,t.base);f.scale.set(.95,1,1.1),f.castShadow=!0,f.receiveShadow=!0,d.add(f),ce(d,t.muzzle,.118,1,.8,.86,0,-.082,.166,!0,2);for(const v of[-1,1])ce(d,t.hoof,.018,1.1,.9,.6,v*.043,-.056,.256,!1,1);const p=Qr(d,t,{x:.098,y:.044,z:.144,r:.044});for(const v of[-1,1]){const M=ce(d,t.plain,.084,1.55,.55,.9,v*.216,.05,-.034,!0,1);M.rotation.z=-v*.38,ce(d,t.muzzle,.046,1.4,.5,.8,v*.228,.044,-.02,!1,1).rotation.z=-v*.38}for(const v of[-1,1]){const M=ke(d,new mn(.042,.155,7),t.horn,v*.108,.196,.01);M.rotation.z=-v*.72,M.rotation.x=-.1}ce(d,t.patch,.064,1.15,.75,1,0,.202,.022,!1,1);const x=[],m=(v,M,_)=>{x.push(ha(e,{x:v,z:M,y:.674,ph:_,amp:.46,bend:.4,hipR:.115,hipSY:.54,rTop:.108,rKnee:.086,rAnkle:.072,upper:.335,lower:.29,kneeZ:.014,mat:t.leg,hipMat:t.plain,hoofMat:t.hoof,hoofR:.082,hoofSY:.6,hoofZ:.004,seg:10}))};m(-.228,.36,0),m(.228,.36,Math.PI),m(-.232,-.35,Math.PI),m(.232,-.35,0);const g=new ot;return g.position.set(0,1.02,-.545),n.add(g),dd(g,t.plain,[sn(0,0,0),sn(0,-.2,-.03),sn(.01,-.4,-.05),sn(.015,-.56,-.05)],.032,.022,null),ce(g,t.patch,.055,.8,1.25,.8,.015,-.6,-.05,!1,1),e.scale.setScalar(1),e.userData.height=1.45,jr(e,{bob:n,head:d,tail:g,eyes:p,legs:x,headY:0,headX:0,tailZ:0,tailX:0,grazeDip:.8},{speed:.3,radius:s.radius??3.4,turn:1.6,graze:!0,wander:s.wander})}function ll(s={}){Kr();const t=Wn.sheep,e=new ot,n=new ot;e.add(n);const i=new Kt(.3,30,22);Wr(i,.16,9,s.seed??3);const r=new Lt(i,t.wool);r.scale.set(1,.95,1.22),r.position.y=.6,r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=qe(s.seed??11);for(let u=0;u<5;u++){const f=u/5*Math.PI*2+.4;ce(n,t.wool,.105,1,.9,1,Math.cos(f)*.2,.6+.2+(o()-.5)*.03,Math.sin(f)*.26,!1,1)}const a=new ot;a.position.set(0,.8,.38),n.add(a),ce(a,t.face,.125,1,1.05,1.15,0,0,0,!0,2),ce(a,t.wool,.098,1.05,.85,.85,0,.075,-.01,!1,1);for(const u of[-1,1]){const f=ce(a,t.face,.058,1.6,.45,.95,u*.135,.02,-.02,!1,1);f.rotation.z=-u*.3}const l=Qr(a,t,{x:.058,y:.028,z:.1,r:.03});ce(a,t.face,.03,1.15,.75,.55,0,-.058,.14,!1,1);const c=[],h=(u,f,p)=>{c.push(ha(e,{x:u,z:f,y:.431,ph:p,amp:.62,bend:.5,hipR:.039,hipSY:.62,rTop:.036,rKnee:.032,rAnkle:.03,upper:.225,lower:.18,kneeZ:.008,mat:t.face,hipMat:t.wool,hoofMat:t.hoof,hoofR:.042,hoofSY:.62,hoofZ:.004,seg:8}))};h(-.15,.2,0),h(.15,.2,Math.PI),h(-.155,-.195,Math.PI),h(.155,-.195,0);const d=new ot;return d.position.set(0,.7,-.35),n.add(d),ce(d,t.wool,.07,1,1,1,0,-.02,-.02,!1,1),e.scale.setScalar(1),e.userData.height=.95,jr(e,{bob:n,head:a,tail:d,eyes:l,legs:c,headY:0,headX:0,tailZ:0,tailX:0,grazeDip:1.05},{speed:.42,radius:s.radius??2.2,turn:2.6,graze:!0,wander:s.wander})}function zh(s,t,e,n){const i=new R().subVectors(t,s),r=i.length(),o=st(e,n,r,1),a=new Je().setFromUnitVectors(new R(0,0,1),i.normalize()),l=new Wt().compose(s.clone().add(t).multiplyScalar(.5),a,new R(1,1,1));return o.applyMatrix4(l),o}function W2(s,t={}){const e=new ot;e.name="pasture";const n=ut({map:N.wood.map,normalMap:N.wood.uniforms.uNormalMap.value,normalScale:.9,color:16777215,tint:9269840,mapMix:1,rim:.24,rimColor:16771268,spec:.05,specPower:12,fresnel:.06,noise:.14,noiseScale:1.4,grime:[0,1.6],roughVar:.8}),i=ut({map:N.wood.map,normalMap:N.wood.uniforms.uNormalMap.value,normalScale:.9,color:16777215,tint:10125148,mapMix:1,rim:.24,rimColor:16771268,spec:.05,specPower:12,fresnel:.06,noise:.14,noiseScale:1.4,grime:[0,1.6],roughVar:.8}),r=[];for(let S=0;S<s.length;S++){const E=s[S],C=s[(S+1)%s.length],P=Math.hypot(C[0]-E[0],C[1]-E[1]),L=Math.max(1,Math.round(P/2.5));for(let F=0;F<L;F++){const D=F/L;r.push([E[0]+(C[0]-E[0])*D,E[1]+(C[1]-E[1])*D])}}const o=r.length,a=qe(t.seed??5),l=t.gapAt??[0,0],c=t.gapW??1.35,h=(S,E)=>Math.hypot(S-l[0],E-l[1])<c,d=[],u=[],f=[],p=[];for(let S=0;S<o;S++){const[E,C]=r[S],P=qt(E,C),L=1.12+(a()-.5)*.1;if(p.push(h(E,C)),f.push({x:E,y:P,z:C,h:L}),p[S])continue;const F=st(.115,L,.115,1);F.translate(E,P+L/2-.06,C);const D=new Wt().makeRotationFromEuler(new zn((a()-.5)*.05,a()*.5,(a()-.5)*.05));F.applyMatrix4(new Wt().makeTranslation(-E,-(P+L/2-.06),-C)),F.applyMatrix4(D),F.applyMatrix4(new Wt().makeTranslation(E,P+L/2-.06,C)),d.push(F)}for(let S=0;S<o;S++){if(p[S]||p[(S+1)%o])continue;const E=f[S],C=f[(S+1)%o],P=C.x-E.x,L=C.z-E.z,D=.05/(Math.hypot(P,L)||1);for(const k of[.46,.88]){const X=new R(E.x+P*D,E.y+k,E.z+L*D),z=new R(C.x-P*D,C.y+k,C.z-L*D);u.push(zh(X,z,.075,.13))}}const x=new Lt(pn(d),n);x.castShadow=!0,x.receiveShadow=!0,e.add(x);const m=new Lt(pn(u),i);m.castShadow=!0,m.receiveShadow=!0,e.add(m);let g=-1,v=-1;for(let S=0;S<o;S++)p[S]||(p[(S+1)%o]&&(g=S),p[(S-1+o)%o]&&(v=S));(g<0||v<0)&&(g=0,v=1);const M=f[g],_=f[v],w=(M.y+_.y)*.5;for(const S of[M,_]){const E=st(.16,1.42,.16,1);E.translate(S.x,S.y+.66,S.z),d.push(E)}const b=[];for(let S=0;S<5;S++){const E=.22+S*.24,C=new R(M.x,M.y+E,M.z),P=new R(_.x,_.y+E,_.z);b.push(zh(C,P,.06,.105))}b.push(zh(new R(M.x,M.y+.22,M.z),new R(_.x,_.y+1.18,_.z),.055,.09));const y=new Lt(pn(b),i);return y.castShadow=!0,y.receiveShadow=!0,e.add(y),e.userData.gate={x:(M.x+_.x)/2,z:(M.z+_.z)/2,y:w},e.userData.center={x:s.reduce((S,E)=>S+E[0],0)/s.length,z:s.reduce((S,E)=>S+E[1],0)/s.length},e}function X2(s,t,e=0){const n=new ot,i=qt(s,t);n.position.set(s,i,t),n.rotation.y=e;const r=ut({color:11047264,rim:.26,rimColor:15521952,spec:.02,fresnel:.03,noise:.26,noiseScale:6.5,saturation:.86,wrap:.4}),o=ut({color:9732175,rim:.24,rimColor:14995604,spec:.02,fresnel:.03,noise:.36,noiseScale:9.5,saturation:.84,wrap:.4}),a=new Oe(.4,.4,.92,18,1);a.rotateZ(Math.PI/2);const l=(c,h,d,u=0)=>{const f=new Lt(a,r);f.position.set(c,.4+u,h),f.rotation.y=d,f.castShadow=!0,f.receiveShadow=!0,n.add(f);for(const p of[-1,1]){const x=new Lt(new _s(.395,18),o);x.position.set(c+Math.cos(d)*p*.462,.4+u,h-Math.sin(d)*p*.462),x.rotation.y=d+(p>0?Math.PI/2:-Math.PI/2),x.castShadow=!1,x.receiveShadow=!0,n.add(x)}};return l(0,0,0),l(.05,.86,.22),l(.98,.4,-.35),n}class q2{constructor(){this.loader=document.getElementById("loader"),this.bar=document.getElementById("bar"),this.pct=document.getElementById("pct"),this.tip=document.getElementById("tip"),this.titlecard=document.getElementById("titlecard"),this.hud=document.getElementById("hud"),this.modeText=document.getElementById("modeText"),this.modeEl=document.getElementById("mode"),this.shotEl=document.getElementById("shot"),this.shotIdx=document.getElementById("shotIdx"),this.shotName=document.getElementById("shotName"),this.fadeEl=document.getElementById("fade"),this.hintClick=document.getElementById("hintClick"),this.todEl=document.getElementById("tod"),this.todLabel=document.getElementById("todLabel"),this.todEn=document.getElementById("todEn"),this._shotTimer=null,this._todTimer=null,this.hidden=!1}progress(t,e){this.bar&&(this.bar.style.width=`${Math.round(t*100)}%`),this.pct&&(this.pct.textContent=Math.round(t*100)),e&&this.tip&&(this.tip.textContent=e)}hideLoader(){this.loader?.classList.add("hide"),setTimeout(()=>this.loader?.remove(),1500)}showTitle(t=4200){this.titlecard?.classList.add("show"),setTimeout(()=>this.titlecard?.classList.remove("show"),t)}setMode(t){if(!this.hud)return;this.hud.classList.toggle("cine",t==="cine"),this.hud.classList.toggle("roaming",t==="roam");const e=t==="cine"?"CINEMATIC":t==="third"?"CHARACTER":"FREE ROAM";this.modeText&&(this.modeText.textContent=e),this.modeEl?.classList.toggle("cine",t==="cine"),this.hud.classList.toggle("third",t==="third")}setShot(t,e,n){this.shotEl&&(this.shotIdx.textContent=`SHOT ${String(t+1).padStart(2,"0")}`,this.shotName.textContent=`${e}`,this.shotEl.classList.add("show"),clearTimeout(this._shotTimer),this._shotTimer=setTimeout(()=>this.shotEl.classList.remove("show"),3200))}flashTime(t,e){this.todEl&&(this.todLabel&&(this.todLabel.textContent=t),this.todEn&&(this.todEn.textContent=e||""),this.todEl.classList.add("show"),clearTimeout(this._todTimer),this._todTimer=setTimeout(()=>this.todEl.classList.remove("show"),1800))}fade(t,e=320){this.fadeEl&&(this.fadeEl.style.transition=`opacity ${e}ms ease`,this.fadeEl.style.opacity=String(t))}toggleHud(){this.hidden=!this.hidden,this.hud?.classList.toggle("off",this.hidden)}showHint(t,e){this.hintClick&&(e&&(this.hintClick.innerHTML=e),this.hintClick.classList.toggle("show",t))}}class Y2{constructor(){this.ctx=null,this.enabled=!1,this.nodes={},this._birdTimer=0,this._nextBird=2.5}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const n=e.createGain();n.gain.value=0,n.connect(e.destination),this.nodes.master=n;const i=e.sampleRate*3,r=e.createBuffer(1,i,e.sampleRate),o=r.getChannelData(0);let a=0;for(let v=0;v<i;v++){const M=Math.random()*2-1;a=(a+.02*M)/1.02,o[v]=a*3.2}const l=e.createBufferSource();l.buffer=r,l.loop=!0;const c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=520,c.Q.value=.7;const h=e.createGain();h.gain.value=.3,l.connect(c).connect(h).connect(n),l.start();const d=e.createOscillator();d.frequency.value=.06;const u=e.createGain();u.gain.value=.16,d.connect(u).connect(h.gain),d.start();const f=e.createOscillator();f.frequency.value=.11;const p=e.createGain();p.gain.value=220,f.connect(p).connect(c.frequency),f.start();const x=e.createBufferSource();x.buffer=r,x.loop=!0;const m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=1500,m.Q.value=.8;const g=e.createGain();g.gain.value=0,x.connect(m).connect(g).connect(n),x.start(),this.nodes.water=g,this.nodes.birdBus=e.createGain(),this.nodes.birdBus.gain.value=.12,this.nodes.birdBus.connect(n),n.gain.linearRampToValueAtTime(.55,e.currentTime+3),this.enabled=!0}setWaterLevel(t){!this.ctx||!this.nodes.water||this.nodes.water.gain.setTargetAtTime(Math.min(.5,t),this.ctx.currentTime,.4)}chirp(){const t=this.ctx;if(!t)return;const e=t.currentTime,n=2+Math.floor(Math.random()*4),i=1900+Math.random()*1700;for(let r=0;r<n;r++){const o=e+r*(.055+Math.random()*.05),a=t.createOscillator(),l=t.createGain();a.type="sine",a.frequency.setValueAtTime(i*(.85+Math.random()*.4),o),a.frequency.exponentialRampToValueAtTime(i*(1.25+Math.random()*.5),o+.035),a.frequency.exponentialRampToValueAtTime(i*.9,o+.08),l.gain.setValueAtTime(0,o),l.gain.linearRampToValueAtTime(.5,o+.012),l.gain.exponentialRampToValueAtTime(.001,o+.1),a.connect(l).connect(this.nodes.birdBus),a.start(o),a.stop(o+.13)}}update(t,e,n){this.ctx&&(this.setWaterLevel(1-Math.min(1,n/26)),this._birdTimer+=t,this._birdTimer>this._nextBird&&(this._birdTimer=0,this._nextBird=2.2+Math.random()*6.5,this.chirp()))}toggle(){if(!this.ctx)return this.start(),!0;this.enabled=!this.enabled;const t=this.ctx.currentTime;return this.nodes.master.gain.cancelScheduledValues(t),this.nodes.master.gain.setTargetAtTime(this.enabled?.55:0,t,.25),this.enabled}}const $c=document.getElementById("scene"),pe=new q2,Dr=new Y2,Fi=new zm({canvas:$c,antialias:!0,powerPreference:"high-performance",stencil:!1});Fi.setPixelRatio(Math.min(window.devicePixelRatio,1.35));Fi.setSize(window.innerWidth,window.innerHeight);Fi.outputColorSpace=En;Fi.toneMapping=yi;Fi.shadowMap.enabled=!0;Fi.shadowMap.type=W0;const Le=new Iu,pi=new ot;Le.add(pi);const _e=new fn(34,window.innerWidth/window.innerHeight,.15,8e3);_e.position.set(26,6,74);_e.lookAt(0,11,0);const ti=new B2(_e,$c),ei=new z2(_e);let nn="intro",Hn=null,xn=null,Nr,ru,Hs,Ur,Fr,Mo,ou,au,lu,tg,eg,_i=null,oi=null,Jo=null,Ko=null,Qo=null,Or=[],si=[];const Ei=()=>new Promise(s=>requestAnimationFrame(()=>setTimeout(s,0))),Z2=[[5.4,1.6],[.6,8.6],[4.8,11.6],[5.8,12.4],[4.6,12.9],[9.8,11.6],[10.4,12.4]];async function $2(){pe.progress(.04,"正在铺开草甸…"),await Ei();const s=new Qu(16777215,2),t=new R(6,4,26),e=55;s.position.copy(t).addScaledVector(De.uSunDir.value,170),s.target.position.copy(t),s.castShadow=!0,s.shadow.mapSize.set(4096,4096);const n=s.shadow.camera;n.left=-e,n.right=e,n.top=e,n.bottom=-e,n.near=30,n.far=380,n.updateProjectionMatrix(),s.shadow.bias=-22e-5,s.shadow.normalBias=.028,Le.add(s,s.target),Fr=rw(),Le.add(Fr.mesh),pe.progress(.12,"正在堆积云层…"),await Ei();const i=_w(2048);De.uBounceMap.value=Mw(i.data,i.size,256),De.uBounceRegion.value.set(0,0,840,0),Mo=Sw(i.texture),Le.add(Mo.mesh),Le.add(bw()),pe.progress(.34,"正在筑起风车…"),await Ei(),ww(),Nr=Ow(),Le.add(Nr.root),ru=zw(),Le.add(ru.root),Hs=Bw(),Hs.root.position.set(13.2,qt(13.2,3.4),3.4),Hs.root.rotation.y=.42,Le.add(Hs.root),pe.progress(.46,"正在砌石墙…"),await Ei();const r=s2(i,i.size);lu=p2(),Le.add(lu),tg=T2(Le),eg=D2(Le),pe.progress(.58,"正在种下树林…"),await Ei(),pe.progress(.66,"正在种树…"),await Ei();const o=[{x:-19,z:-9,type:0,scale:1.35,rot:.6},{x:-14,z:-16,type:0,scale:1.12,rot:2.1},{x:-27,z:-2,type:1,scale:1.15,rot:1},{x:9,z:-13,type:1,scale:1.2,rot:3.4},{x:17,z:-7,type:0,scale:1.15,rot:.2},{x:25,z:1,type:1,scale:1,rot:2.6},{x:-25,z:8,type:0,scale:1.2,rot:4.1},{x:-15,z:18,type:2,scale:1.15,rot:1.7},{x:30,z:19,type:0,scale:1.3,rot:5},{x:38,z:31,type:0,scale:1.1,rot:2.2},{x:-30,z:27,type:1,scale:1.05,rot:.9},{x:-40,z:36,type:0,scale:1.25,rot:3},{x:-22,z:40,type:0,scale:1.15,rot:1.4},{x:37,z:28,type:0,scale:1.2,rot:4.6},{x:44,z:40,type:1,scale:1.1,rot:2.9},{x:56,z:46,type:0,scale:1.3,rot:.4},{x:-54,z:54,type:1,scale:1.2,rot:5.4},{x:58,z:74,type:0,scale:1.3,rot:3.9},{x:62,z:24,type:0,scale:1.2,rot:1.1},{x:-46,z:16,type:1,scale:1.1,rot:2.4}];{let u=12345;const f=()=>(u=(u*1664525+1013904223)%4294967296,u/4294967296),p=(g,v)=>{const M=Qe(g*.004+11.3,v*.004-5.1,4),_=Qe(g*.0165-3.7,v*.0165+7.2,3);return M*.7+_*.3},x=[[0,105,230],[105,160,179],[160,210,171],[210,230,120],[230,280,80],[280,330,187],[330,400,342]],m=(g,v)=>!!(Math.abs(g)>Nn-24||Math.abs(v)>Nn-24||Wc(g,v,1.5)||ml(g,v,2.5)||Math.hypot(g,v)<30||Math.hypot(g+8.3,v-1.5)<11||Math.hypot(g-13.2,v-3.4)<8||Math.hypot(g-15.6,v-11.6)<11||Math.hypot(g+15,v-8.5)<6||d0(g,v,nu).dist<5||d0(g,v,Vm).dist<2.8||Math.hypot(g-26,v-84)<20||Math.hypot(g-12,v-30)<10);for(const[g,v,M]of x){let _=0,w=0;for(;_<M&&w<M*80;){w++;const b=f()*Math.PI*2,y=Math.sqrt(g*g+(v*v-g*g)*f()),S=Math.cos(b)*y,E=Math.sin(b)*y+12;if(m(S,E))continue;const C=.42+.58*$i(.4,.58,p(S,E));if(f()>C)continue;const P=y<85?0:y<200?1:2;o.push({x:S,z:E,type:f()>.4?0:1,scale:(P?.9:.8)+f()*.7,rot:f()*6.28,stretch:.88+f()*.3,lod:P}),_++}}}au=c2(r,o),Le.add(au);const a=m2({trees:o,props:[{x:14.4,z:11.2,r:1.1},{x:18.9,z:15.6,r:1.1},{x:11.1,z:10.6,r:.7},{x:14.6,z:12.9,r:.6},{x:21,z:59,r:1.8},{x:17.6,z:60.4,r:1},{x:2.9,z:5.3,r:.7},{x:3.7,z:4.7,r:.7},{x:7.42,z:21.2,r:1.7},{x:-13.2,z:6.5,r:1.3},{x:12.6,z:27.2,r:1},{x:10.5,z:27,r:.8},{x:14.7,z:27,r:.8},{x:13.2,z:3.4,r:3},{x:29.5,z:37.5,r:6},{x:-20,z:33,r:4.5},{x:-15,z:8.5,r:3},{x:8.2,z:13.8,r:1.6},{x:34,z:33.5,r:1.8},{x:32.2,z:35.4,r:1.5},{x:11.7,z:13.4,r:.6},{x:19.9,z:8.3,r:.6}]});Mo.material.uniforms.uAO.value=a.texture,Mo.material.uniforms.uAORegion.value.set(xl.cx,xl.cz,xl.size,0),pe.progress(.74,"正在长草…"),await Ei();const l=(u,f)=>{if(ml(u,f))return .5;for(const[p,x]of Z2)if(Math.hypot(u-p,f-x)<2.2)return .26;return 1},c=(u,f)=>ml(u,f,.4);ou=xo(r,{count:62e3,height:.38,blades:6,seed:7,ao:a.sample,grazeScale:l}),pi.add(ou),pi.add(xo(r,{count:28e3,radius:150,height:.44,blades:5,seed:19,cx:8,cz:26,ao:a.sample,grazeScale:l})),pi.add(xo(r,{count:38e3,radius:300,height:.46,blades:4,seed:47,cx:0,cz:20,ao:a.sample,grazeScale:l})),pi.add(xo(r,{count:18e3,radius:420,height:.52,blades:3,seed:63,cx:0,cz:10,ao:a.sample,grazeScale:l})),pi.add(xo(r,{count:7e3,radius:18,cx:40,cz:62,height:.85,blades:6,seed:33,tall:!0,ao:a.sample})),pi.add(u2(r,7500,21,a.sample,{skip:c})),pi.add(o2(r,5e3,91,a.sample,{skip:c})),pe.progress(.86,"正在开花…"),await Ei(),pi.add(f2([{x:12,z:13.4,scale:1.1,hue:.63},{x:13.4,z:14.6,scale:.9,hue:.68},{x:18.8,z:13.2,scale:1.05,hue:.6},{x:20.2,z:11.8,scale:.85,hue:.66},{x:17.2,z:8.2,scale:1,hue:.64},{x:15.6,z:7.4,scale:.8,hue:.7},{x:21.6,z:9.6,scale:.95,hue:.58},{x:11.4,z:8.6,scale:.85,hue:.62},{x:-2.2,z:6.2,scale:.9,hue:.65},{x:5.6,z:8.8,scale:.8,hue:.61}])),Le.add(w2(1200)),pi.add(h2(5200,55,a.sample)),pe.progress(.92,"正在引水入河…"),await Ei(),Jo=Rw(),Le.add(Jo),Qo=Dw(),Le.add(Qo),Ko=Lw([{x:13,z:13},{x:18,z:12},{x:16,z:9},{x:11.5,z:9.5},{x:20,z:10.5},{x:9,z:12},{x:7,z:16},{x:22,z:15},{x:15,z:18},{x:2.5,z:26},{x:6,z:33},{x:14,z:31},{x:18,z:42},{x:-6,z:8},{x:-11,z:14}],26),Le.add(Ko);const h=new URLSearchParams(location.search).get("birds")==="1";if(h){const u=[y0,M0,S0,b0,w0,T0,A0],f=["海鸥","乌鸦","燕子","鹰","灰鹤","绿头鸭","麻雀"];u.forEach((p,x)=>{const m=p();m.scale.setScalar(1),m.position.set(-15+x*5,40,-14),m.rotation.y=0,m.userData.rig.wr.rotation.z=.34,m.userData.rig.wl.rotation.z=-.34,m.userData.name=f[x],Le.add(m),Or.push(m)})}if(!h){const u=[{mk:y0,n:3,y:27,cx:0,cz:33,range:45,speed:9,turn:.55,span:1.5,bias:.62},{mk:M0,n:2,y:23,cx:20,cz:15,range:38,speed:8.2,turn:.95,span:1.04,bias:.42},{mk:S0,n:4,y:17,cx:9,cz:34,range:34,speed:12,turn:1.9,span:.96,bias:.3},{mk:b0,n:2,y:39,cx:2,cz:27,range:70,speed:7,turn:.32,span:1.8,bias:.9},{mk:w0,n:3,y:54,cx:2,cz:28,range:120,speed:12,turn:.26,span:2.4,bias:1,orbit:!0},{mk:T0,n:2,y:21,cx:14,cz:31,range:44,speed:14,turn:.6,span:.86,bias:.2},{mk:A0,n:7,y:9,cx:4,cz:25,range:16,speed:7,turn:2.6,span:.28,bias:.3}];for(const f of u)for(let p=0;p<f.n;p++){const x=f.mk(),m=f.span/x.userData.span*(.92+Math.random()*.16);x.scale.setScalar(m),g2(x,{x:f.cx+(f.orbit?0:(Math.random()-.5)*f.range*.8),y:f.y+(f.orbit?0:(Math.random()-.5)*8),z:f.cz+(f.orbit?0:(Math.random()-.5)*f.range*.8),range:f.range,speed:f.speed*(.92+Math.random()*.16),turn:f.turn,circleR:f.speed/f.turn,circleBias:f.bias,yMin:Math.max(4.5,f.y-10),yMax:f.y+12,orbit:f.orbit?p*.105:void 0,cx:f.cx,cz:f.cz,dir:1}),Le.add(x),Or.push(x)}}const d=yw(512);if(Ur=O2(d),Le.add(Ur.river),_i=G2(),_i.root.visible=!1,Le.add(_i.root),oi=new V2(_e,$c,_i),oi.obstacles=o.map(u=>({x:u.x,z:u.z,r:.55*(u.scale??1)})),new URLSearchParams(location.search).get("pets")==="1"){pi.visible=!1;const u=0,f=5.2,p=[["cat",F0,-1.3,.12],["dog",O0,-.44,-.08],["chicken",al,.44,.16],["duck",Bh,1.3,-.14]];for(const[x,m,g,v]of p){const M=m({wander:!1}),_=u+g;M.position.set(_,qt(_,f),f),M.rotation.y=v,M.userData.home={x:_,z:f},M.userData.ground=qt,M.userData.name=x,M.userData.height=M.userData.height||.5,Le.add(M),si.push(M)}}if(new URLSearchParams(location.search).get("farm")!=="0"){Le.add(W2(od,{gapAt:[11.4,33.2],gapW:1.4})),Le.add(X2(-8.6,32.9,.35));const u=(f,p,x,m,g,v)=>{const M=f({radius:v});return M.userData.name=p,M.position.set(x,qt(x,m),m),M.rotation.y=g,M.userData.home={x,z:m},M.userData.ground=qt,M.userData.radius=v,M.userData.canStand=(_,w)=>ow(_,w)>.85,Le.add(M),si.push(M),M};u(B0,"cow-a",-3,33.6,.75,3.4),u(B0,"cow-b",5,36.4,-1.05,3),u(ll,"sheep-a",-8.4,33.4,1.9,1.9),u(ll,"sheep-b",-6.6,34.2,2.4,1.7),u(ll,"sheep-c",-4.8,33.3,1.4,1.8),u(ll,"sheep-d",-7.6,35.4,2.1,1.6)}{const u=(p,x)=>Math.hypot(p,x)>5&&Math.hypot(p+8.3,x-1.5)>5.6&&Math.hypot(p-13.2,x-3.4)>3.4&&Math.hypot(p-8.2,x-13.8)>2.2&&Math.hypot(p+15,x-8.5)>3.2,f=(p,x,m,g,v,M)=>{const _=p({radius:M});return _.userData.name=x,_.position.set(m,qt(m,g),g),_.rotation.y=v,_.userData.home={x:m,z:g},_.userData.ground=qt,_.userData.radius=M,_.userData.canStand=u,Le.add(_),si.push(_),_};f(F0,"cat",5.4,1.6,-2.4,.5),f(O0,"dog",.6,8.6,.9,3.2),f(al,"hen-a",4.8,11.6,1.2,1.7),f(al,"hen-b",5.8,12.4,2.6,1.5),f(al,"hen-c",4.6,12.9,.4,1.6),f(Bh,"duck-a",9.8,11.6,-1.1,1.6),f(Bh,"duck-b",10.4,12.4,1.8,1.5)}Hn=jw(Fi,Le,_e),xn=i2({shared:De,sky:Fr,sun:s,post:Hn,shadowCentre:t}),pe.progress(1,"完成"),await Ei(),pe.hideLoader(),setTimeout(()=>pe.showTitle(4600),400),J2()}function J2(){nn="intro",pe.setMode("cine"),pe.showHint(!0,"点击画面跳过 · <b>C</b> 播放完整电影镜头"),ei.onShotChange=s=>pe.setShot(s,ri[s].name,ri[s].jp),ei.onEnd=()=>to(),ei.play(0,ri.length-1)}function to(){ei.stop(),_i&&(_i.root.visible=!1),oi&&(oi.enabled=!1),nn="roam",pe.setMode("roam"),pe.showHint(!0,"点击画面进入漫游 · <b>V</b> 人物视角 · <b>C</b> 电影镜头"),ti.setFromCamera(),_e.fov=52,_e.updateProjectionMatrix();const s=Math.max(qt(_e.position.x,_e.position.z),On)+1.65;_e.position.y>s+1.2&&ti.descendTo(s),ti.enabled=!0}function ng(){if(!oi||!_i)return;ei.stop(),ti.enabled=!1;const s=_e.position.clone();_i.root.visible=!0,oi.syncFromCamera(_e),oi.placeAt(s.x,s.z),oi.enabled=!0,nn="third",pe.setMode("third"),pe.showHint(!0,"点击画面锁定鼠标 · <b>V</b> 回到第一人称 · <b>C</b> 电影镜头"),document.getElementById("hintClick").classList.add("show")}function K2(){nn==="third"?to():nn==="roam"&&ng()}function Q2(){ti.enabled=!1,oi&&(oi.enabled=!1),_i&&(_i.root.visible=!1),ti.unlock(),nn="cine",pe.setMode("cine"),pe.showHint(!1),ei.onShotChange=s=>pe.setShot(s,ri[s].name,ri[s].jp),ei.onEnd=()=>to(),ei.play(0,ri.length-1)}$c.addEventListener("pointerdown",()=>{if(Dr.start(),nn==="intro"){to();return}nn==="roam"&&ti.lock(),nn==="third"&&ti.lock()});ti.onLockChange=s=>{pe.showHint(!s&&nn==="roam")};addEventListener("keydown",s=>{const t=s.key.toLowerCase();t==="c"&&(Dr.start(),nn==="cine"||nn==="intro"?to():Q2()),t==="v"&&(Dr.start(),K2()),t==="h"&&pe.toggleHud(),t==="m"&&Dr.start(),t==="t"&&xn&&(Dr.start(),xn.toggle(),pe.flashTime(xn.label,xn.labelEn))});const z0=new wm,cl=new R,k0=new R;let V0=0;function ig(){requestAnimationFrame(ig);const s=Math.min(z0.getDelta(),.05),t=z0.elapsedTime;Qb(t),nn==="cine"||nn==="intro"?ei.update(s):nn==="roam"?ti.update(s):nn==="third"&&oi.update(s),Nr&&Nr.sails&&(Nr.sails.rotation.z-=s*.14),Hs&&(Hs.sails.rotation.z-=s*.22),Fr&&Fr.mesh.position.copy(_e.position),xn&&xn.update(s),Jo&&Jo.userData.update(_e.position,qt(_e.position.x,_e.position.z)),Qo&&Qo.userData.update(_e.position),Ko&&Ko.userData.update(s);for(const e of Or)e.userData.update&&e.userData.update(s);for(const e of si)e.userData.update&&e.userData.update(s,t);if(Hn&&Ur){cl.copy(_e.position).addScaledVector(De.uSunDir.value,900),cl.project(_e),_e.getWorldDirection(k0);const e=k0.dot(De.uSunDir.value);Hn.rays.sun.set(dn.clamp(cl.x*.5+.5,.05,.95),dn.clamp(cl.y*.5+.5,.05,.95));const n=xn?xn.raysMul:1;Hn.rays.material.uniforms.uIntensity.value=dn.clamp(e*1.6,0,1)*.85*n,Hn.grade.uniforms.uRayStrength.value=dn.clamp(e*1.6,0,1)*.42*n;const i=window.__dofForce??(nn==="cine"||nn==="intro");Hn.dof.enabled=i,i&&(Hn.dof.setFocus(_e.position.distanceTo(ei._l)),Hn.dof.setAperture(5.2)),Hn.grade.uniforms.uTime.value=t,Hn.grade.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),Ur.reflection.update(Fi,Le,_e,Ur.meshes),Hn.composer.render();const r=Math.abs(_e.position.z-ns(_e.position.x))-is(_e.position.x);Dr.update(s,_e.position,Math.max(0,r))}V0++,V0===3&&(window.__ready=!0)}addEventListener("resize",()=>{_e.aspect=window.innerWidth/window.innerHeight,_e.updateProjectionMatrix(),Fi.setSize(window.innerWidth,window.innerHeight),Hn?.composer.setSize(window.innerWidth,window.innerHeight)});window.__demo={THREE:Jb,scene:Le,camera:_e,renderer:Fi,cine:ei,ui:pe,roam:ti,SHOTS:ri,get terrain(){return Mo},get sky(){return Fr},get water(){return Ur},get post(){return Hn},get mill(){return Nr},get house(){return ru},get smallMill(){return Hs},get grass(){return ou},get trees(){return au},get wall(){return lu},get scenery(){return tg},get village(){return eg},get avatar(){return _i},get third(){return oi},get pollen(){return Jo},get butterflies(){return Ko},get mist(){return Qo},get flock(){return Or},get pets(){return si},get tod(){return xn},terrainHeight:qt,setTimeOfDay(s,t=0){if(!xn)return null;const e=xn.set(s,t);return e&&pe.flashTime(xn.label,xn.labelEn),e?{name:xn.name,elevation:+xn.sunElevation.toFixed(1),shadowR:+xn.shadowRadius.toFixed(0)}:null},enterThird:ng,enterRoam:to,framePet(s,t=1.15,e=.5,n=30){const i=si[s];if(!i)return null;const r=i.userData.height||.5;return this.setView([i.position.x+e,i.position.y+r*.66,i.position.z+t],[i.position.x,i.position.y+r*.48,i.position.z],n),{name:i.userData.name,x:i.position.x,y:i.position.y,z:i.position.z,h:r}},petsLineup(){return si.map(s=>({name:s.userData.name,x:+s.position.x.toFixed(2),y:+s.position.y.toFixed(2),z:+s.position.z.toFixed(2)}))},onlyPet(s){return si.forEach((t,e)=>{t.visible=e===s}),!!si[s]},allPets(){si.forEach(s=>{s.visible=!0})},frameBird(s,t=3.2,e=1.2,n=1,i=34){const r=Or[s];if(!r)return null;const o=r.position;return this.setView([o.x+e,o.y-n,o.z+t],[o.x,o.y,o.z],i),{name:r.userData.name,x:o.x,y:o.y,z:o.z,span:r.userData.span}},birdsLineup(){return Or.map(s=>({name:s.userData.name,span:s.userData.span}))},posePet(s,t){const e=si[s];if(!e)return null;const n=e.userData.st;return n.mode="idle",n.timer=1e9,n.gait=0,n.yaw=t,e.rotation.y=t,t},petWalk(s,t=.9,e=.6){const n=si[s];if(!n)return null;const i=n.userData.st;return i.tx=n.position.x+t,i.tz=n.position.z+e,i.mode="walk",i.timer=9,{tx:i.tx,tz:i.tz}},setView(s,t,e=34){nn="debug",pe.titlecard?.classList.remove("show"),pe.titlecard&&pe.titlecard.style.setProperty("display","none","important"),pe.hideLoader(),ti.enabled=!1,ei.stop(),_e.position.set(s[0],s[1],s[2]),_e.lookAt(t[0],t[1],t[2]),_e.fov=e,_e.updateProjectionMatrix(),pe.setMode("roam"),pe.showHint(!1)},shot(s,t=0){nn="debug",pe.titlecard?.classList.remove("show"),pe.titlecard&&pe.titlecard.style.setProperty("display","none","important"),pe.hideLoader(),ti.enabled=!1,ei.jump(s,t)}};$2().then(()=>ig());
