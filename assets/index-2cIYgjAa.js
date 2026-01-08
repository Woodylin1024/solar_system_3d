(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const wo="182",fn={ROTATE:0,DOLLY:1,PAN:2},Fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,Qo=1,Au=2,rr=1,wu=2,os=3,Jn=0,Nt=1,Ut=2,On=0,Oi=1,rn=2,el=3,tl=4,Ru=5,hi=100,Cu=101,Pu=102,Du=103,Lu=104,Iu=200,Uu=201,Nu=202,Fu=203,Aa=204,wa=205,Ou=206,Bu=207,zu=208,ku=209,Vu=210,Hu=211,Gu=212,Wu=213,Xu=214,Ra=0,Ca=1,Pa=2,Vi=3,Da=4,La=5,Ia=6,Ua=7,vc=0,qu=1,Yu=2,Sn=0,Mc=1,Sc=2,yc=3,Ro=4,Ec=5,bc=6,Tc=7,Ac=300,pi=301,Hi=302,Na=303,Fa=304,Cr=306,_n=1e3,xn=1001,Oa=1002,Pt=1003,ju=1004,Ls=1005,Mt=1006,zr=1007,Kn=1008,Qt=1009,wc=1010,Rc=1011,ms=1012,Co=1013,bn=1014,vn=1015,kn=1016,Po=1017,Do=1018,gs=1020,Cc=35902,Pc=35899,Dc=1021,Lc=1022,dn=1023,Vn=1026,fi=1027,Ic=1028,Lo=1029,Gi=1030,Io=1031,Uo=1033,ar=33776,or=33777,lr=33778,cr=33779,Ba=35840,za=35841,ka=35842,Va=35843,Ha=36196,Ga=37492,Wa=37496,Xa=37488,qa=37489,Ya=37490,ja=37491,Za=37808,Ka=37809,$a=37810,Ja=37811,Qa=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,uo=36494,ho=36495,fo=36283,po=36284,mo=36285,go=36286,Zu=3200,Uc=0,Ku=1,Zn="",qt="srgb",Wi="srgb-linear",Er="linear",Ke="srgb",vi=7680,nl=519,$u=512,Ju=513,Qu=514,No=515,eh=516,th=517,Fo=518,nh=519,il=35044,sl="300 es",Mn=2e3,br=2001;function Nc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ih(){const i=_s("canvas");return i.style.display="block",i}const rl={};function al(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ae(...i){const e="THREE."+i.shift();console.warn(e,...i)}function He(...i){const e="THREE."+i.shift();console.error(e,...i)}function xs(...i){const e=i.join(" ");e in rl||(rl[e]=!0,Ae(...i))}function sh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ol=1234567;const cs=Math.PI/180,Xi=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Fe(i,e,t){return Math.max(e,Math.min(t,i))}function Oo(i,e){return(i%e+e)%e}function rh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function ah(i,e,t){return i!==e?(t-i)/(e-i):0}function us(i,e,t){return(1-t)*i+t*e}function oh(i,e,t,n){return us(i,e,1-Math.exp(-t*n))}function lh(i,e=1){return e-Math.abs(Oo(i,e*2)-e)}function ch(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function hh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dh(i,e){return i+Math.random()*(e-i)}function fh(i){return i*(.5-Math.random())}function ph(i){i!==void 0&&(ol=i);let e=ol+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mh(i){return i*cs}function gh(i){return i*Xi}function _h(i){return(i&i-1)===0&&i!==0}function xh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),u=a(t/2),l=r((e+n)/2),c=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*c,u*h,u*d,o*l);break;case"YZY":i.set(u*d,o*c,u*h,o*l);break;case"ZXZ":i.set(u*h,u*d,o*c,o*l);break;case"XZX":i.set(o*c,u*_,u*m,o*l);break;case"YXY":i.set(u*m,o*c,u*_,o*l);break;case"ZYZ":i.set(u*_,u*m,o*c,o*l);break;default:Ae("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:cs,RAD2DEG:Xi,generateUUID:ji,clamp:Fe,euclideanModulo:Oo,mapLinear:rh,inverseLerp:ah,lerp:us,damp:oh,pingpong:lh,smoothstep:ch,smootherstep:uh,randInt:hh,randFloat:dh,randFloatSpread:fh,seededRandom:ph,degToRad:mh,radToDeg:gh,isPowerOfTwo:_h,ceilPowerOfTwo:xh,floorPowerOfTwo:vh,setQuaternionFromProperEuler:Mh,normalize:Bt,denormalize:Ni};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let u=n[s+0],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||u!==d||l!==m||c!==_){let p=u*d+l*m+c*_+h*g;p<0&&(d=-d,m=-m,_=-_,g=-g,p=-p);let f=1-o;if(p<.9995){const E=Math.acos(p),b=Math.sin(E);f=Math.sin(f*E)/b,o=Math.sin(o*E)/b,u=u*f+d*o,l=l*f+m*o,c=c*f+_*o,h=h*f+g*o}else{u=u*f+d*o,l=l*f+m*o,c=c*f+_*o,h=h*f+g*o;const E=1/Math.sqrt(u*u+l*l+c*c+h*h);u*=E,l*=E,c*=E,h*=E}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],u=n[s+1],l=n[s+2],c=n[s+3],h=r[a],d=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+c*h+u*m-l*d,e[t+1]=u*_+c*d+l*h-o*m,e[t+2]=l*_+c*m+o*d-u*h,e[t+3]=c*_-o*h-u*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),c=o(s/2),h=o(r/2),d=u(n/2),m=u(s/2),_=u(r/2);switch(a){case"XYZ":this._x=d*c*h+l*m*_,this._y=l*m*h-d*c*_,this._z=l*c*_+d*m*h,this._w=l*c*h-d*m*_;break;case"YXZ":this._x=d*c*h+l*m*_,this._y=l*m*h-d*c*_,this._z=l*c*_-d*m*h,this._w=l*c*h+d*m*_;break;case"ZXY":this._x=d*c*h-l*m*_,this._y=l*m*h+d*c*_,this._z=l*c*_+d*m*h,this._w=l*c*h-d*m*_;break;case"ZYX":this._x=d*c*h-l*m*_,this._y=l*m*h+d*c*_,this._z=l*c*_-d*m*h,this._w=l*c*h+d*m*_;break;case"YZX":this._x=d*c*h+l*m*_,this._y=l*m*h+d*c*_,this._z=l*c*_-d*m*h,this._w=l*c*h-d*m*_;break;case"XZY":this._x=d*c*h-l*m*_,this._y=l*m*h-d*c*_,this._z=l*c*_+d*m*h,this._w=l*c*h+d*m*_;break;default:Ae("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],u=t[9],l=t[2],c=t[6],h=t[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-u)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-u)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+a*o+s*l-r*u,this._y=s*c+a*u+r*o-n*l,this._z=r*c+a*l+n*u-s*o,this._w=a*c-n*o-s*u-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let u=1-t;if(o<.9995){const l=Math.acos(o),c=Math.sin(l);u=Math.sin(u*l)/c,t=Math.sin(t*l)/c,this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*s-o*n),c=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+u*l+a*h-o*c,this.y=n+u*c+o*l-r*h,this.z=s+u*h+r*c-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,u=t.z;return this.x=s*u-r*o,this.y=r*a-n*u,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new D,ll=new mi;class Ie{constructor(e,t,n,s,r,a,o,u,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l)}set(e,t,n,s,r,a,o,u,l){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=u,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],c=n[4],h=n[7],d=n[2],m=n[5],_=n[8],g=s[0],p=s[3],f=s[6],E=s[1],b=s[4],M=s[7],T=s[2],A=s[5],R=s[8];return r[0]=a*g+o*E+u*T,r[3]=a*p+o*b+u*A,r[6]=a*f+o*M+u*R,r[1]=l*g+c*E+h*T,r[4]=l*p+c*b+h*A,r[7]=l*f+c*M+h*R,r[2]=d*g+m*E+_*T,r[5]=d*p+m*b+_*A,r[8]=d*f+m*M+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8];return t*a*c-t*o*l-n*r*c+n*o*u+s*r*l-s*a*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=c*a-o*l,d=o*u-c*r,m=l*r-a*u,_=t*h+n*d+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*l-c*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(c*t-s*u)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(n*u-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const u=Math.cos(r),l=Math.sin(r);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-s*l,s*u,-s*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Ie,cl=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sh(){const i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ke&&(s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ke&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:e,whitePoint:n,transfer:Er,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Ke,toXYZ:cl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const Ge=Sh();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mi===void 0&&(Mi=_s("canvas")),Mi.width=e.width,Mi.height=e.height;const s=Mi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eh=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ae("Texture: Unable to serialize Texture."),{})}let bh=0;const Gr=new D;class Dt extends gi{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=xn,s=xn,r=Mt,a=Kn,o=dn,u=Qt,l=Dt.DEFAULT_ANISOTROPY,c=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ji(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ae(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Ac;Dt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,l=u[0],c=u[4],h=u[8],d=u[1],m=u[5],_=u[9],g=u[2],p=u[6],f=u[10];if(Math.abs(c-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,M=(m+1)/2,T=(f+1)/2,A=(c+d)/4,R=(h+g)/4,I=(_+p)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=R/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=I/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(h-g)/E,this.z=(d-c)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Dt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Th{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fc extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ah extends Dt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Us.subVectors(this.max,es),Si.subVectors(e.a,es),yi.subVectors(e.b,es),Ei.subVectors(e.c,es),Gn.subVectors(yi,Si),Wn.subVectors(Ei,yi),si.subVectors(Si,Ei);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-si.z,si.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,si.z,0,-si.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-si.y,si.x,0];return!Wr(t,Si,yi,Ei,Us)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,Si,yi,Ei,Us))?!1:(Ns.crossVectors(Gn,Wn),t=[Ns.x,Ns.y,Ns.z],Wr(t,Si,yi,Ei,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],on=new D,Is=new Ts,Si=new D,yi=new D,Ei=new D,Gn=new D,Wn=new D,si=new D,es=new D,Us=new D,Ns=new D,ri=new D;function Wr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),u=e.dot(ri),l=t.dot(ri),c=n.dot(ri);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>o)return!1}return!0}const wh=new Ts,ts=new D,Xr=new D;class As{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Xr)),this.expandByPoint(ts.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Dn=new D,qr=new D,Fs=new D,Xn=new D,Yr=new D,Os=new D,jr=new D;class ws{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qr.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=Xn.dot(this.direction),u=-Xn.dot(Fs),l=Xn.lengthSq(),c=Math.abs(1-a*a);let h,d,m,_;if(c>0)if(h=a*u-o,d=a*o-u,_=r*c,h>=0)if(d>=-_)if(d<=_){const g=1/c;h*=g,d*=g,m=h*(h+a*d+2*o)+d*(a*h+d+2*u)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*u)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*u)+l;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-u),r),m=-h*h+d*(d+2*u)+l):d<=_?(h=0,d=Math.min(Math.max(-r,-u),r),m=d*(d+2*u)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-u),r),m=-h*h+d*(d+2*u)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qr).addScaledVector(Fs,d),m}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,u;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),c>=0?(r=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(r=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,u=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,u=(e.min.z-d.z)*h),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,s,r){Yr.subVectors(t,e),Os.subVectors(n,e),jr.crossVectors(Yr,Os);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,e);const u=o*this.direction.dot(Os.crossVectors(Xn,Os));if(u<0)return null;const l=o*this.direction.dot(Yr.cross(Xn));if(l<0||u+l>a)return null;const c=-o*Xn.dot(jr);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,s,r,a,o,u,l,c,h,d,m,_,g,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l,c,h,d,m,_,g,p)}set(e,t,n,s,r,a,o,u,l,c,h,d,m,_,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=u,f[2]=l,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=_,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(s),l=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*c,m=a*h,_=o*c,g=o*h;t[0]=u*c,t[4]=-u*h,t[8]=l,t[1]=m+_*l,t[5]=d-g*l,t[9]=-o*u,t[2]=g-d*l,t[6]=_+m*l,t[10]=a*u}else if(e.order==="YXZ"){const d=u*c,m=u*h,_=l*c,g=l*h;t[0]=d+g*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=m*o-_,t[6]=g+d*o,t[10]=a*u}else if(e.order==="ZXY"){const d=u*c,m=u*h,_=l*c,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*c,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const d=a*c,m=a*h,_=o*c,g=o*h;t[0]=u*c,t[4]=_*l-m,t[8]=d*l+g,t[1]=u*h,t[5]=g*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const d=a*u,m=a*l,_=o*u,g=o*l;t[0]=u*c,t[4]=g-d*h,t[8]=_*h+m,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-l*c,t[6]=m*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*u,m=a*l,_=o*u,g=o*l;t[0]=u*c,t[4]=-h,t[8]=l*c,t[1]=d*h+g,t[5]=a*c,t[9]=m*h-_,t[2]=_*h-m,t[6]=o*c,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rh,e,Ch)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),qn.crossVectors(n,Kt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),qn.crossVectors(n,Kt)),qn.normalize(),Bs.crossVectors(Kt,qn),s[0]=qn.x,s[4]=Bs.x,s[8]=Kt.x,s[1]=qn.y,s[5]=Bs.y,s[9]=Kt.y,s[2]=qn.z,s[6]=Bs.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],c=n[1],h=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],f=n[14],E=n[3],b=n[7],M=n[11],T=n[15],A=s[0],R=s[4],I=s[8],v=s[12],S=s[1],C=s[5],F=s[9],O=s[13],W=s[2],H=s[6],G=s[10],z=s[14],j=s[3],re=s[7],ee=s[11],ce=s[15];return r[0]=a*A+o*S+u*W+l*j,r[4]=a*R+o*C+u*H+l*re,r[8]=a*I+o*F+u*G+l*ee,r[12]=a*v+o*O+u*z+l*ce,r[1]=c*A+h*S+d*W+m*j,r[5]=c*R+h*C+d*H+m*re,r[9]=c*I+h*F+d*G+m*ee,r[13]=c*v+h*O+d*z+m*ce,r[2]=_*A+g*S+p*W+f*j,r[6]=_*R+g*C+p*H+f*re,r[10]=_*I+g*F+p*G+f*ee,r[14]=_*v+g*O+p*z+f*ce,r[3]=E*A+b*S+M*W+T*j,r[7]=E*R+b*C+M*H+T*re,r[11]=E*I+b*F+M*G+T*ee,r[15]=E*v+b*O+M*z+T*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],u=e[9],l=e[13],c=e[2],h=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],f=e[15],E=u*m-l*d,b=o*m-l*h,M=o*d-u*h,T=a*m-l*c,A=a*d-u*c,R=a*h-o*c;return t*(g*E-p*b+f*M)-n*(_*E-p*T+f*A)+s*(_*b-g*T+f*R)-r*(_*M-g*A+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],h=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],f=e[15],E=h*p*l-g*d*l+g*u*m-o*p*m-h*u*f+o*d*f,b=_*d*l-c*p*l-_*u*m+a*p*m+c*u*f-a*d*f,M=c*g*l-_*h*l+_*o*m-a*g*m-c*o*f+a*h*f,T=_*h*u-c*g*u-_*o*d+a*g*d+c*o*p-a*h*p,A=t*E+n*b+s*M+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=E*R,e[1]=(g*d*r-h*p*r-g*s*m+n*p*m+h*s*f-n*d*f)*R,e[2]=(o*p*r-g*u*r+g*s*l-n*p*l-o*s*f+n*u*f)*R,e[3]=(h*u*r-o*d*r-h*s*l+n*d*l+o*s*m-n*u*m)*R,e[4]=b*R,e[5]=(c*p*r-_*d*r+_*s*m-t*p*m-c*s*f+t*d*f)*R,e[6]=(_*u*r-a*p*r-_*s*l+t*p*l+a*s*f-t*u*f)*R,e[7]=(a*d*r-c*u*r+c*s*l-t*d*l-a*s*m+t*u*m)*R,e[8]=M*R,e[9]=(_*h*r-c*g*r-_*n*m+t*g*m+c*n*f-t*h*f)*R,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*f+t*o*f)*R,e[11]=(c*o*r-a*h*r-c*n*l+t*h*l+a*n*m-t*o*m)*R,e[12]=T*R,e[13]=(c*g*s-_*h*s+_*n*d-t*g*d-c*n*p+t*h*p)*R,e[14]=(_*o*s-a*g*s-_*n*u+t*g*u+a*n*p-t*o*p)*R,e[15]=(a*h*s-c*o*s+c*n*u-t*h*u-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,u=e.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-s*u,l*u+s*o,0,l*o+s*u,c*o+n,c*u-s*a,0,l*u-s*o,c*u+s*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,u=t._w,l=r+r,c=a+a,h=o+o,d=r*l,m=r*c,_=r*h,g=a*c,p=a*h,f=o*h,E=u*l,b=u*c,M=u*h,T=n.x,A=n.y,R=n.z;return s[0]=(1-(g+f))*T,s[1]=(m+M)*T,s[2]=(_-b)*T,s[3]=0,s[4]=(m-M)*A,s[5]=(1-(d+f))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(_+b)*R,s[9]=(p-E)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),ln.copy(this);const l=1/r,c=1/a,h=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=c,ln.elements[5]*=c,ln.elements[6]*=c,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Mn,u=!1){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let _,g;if(u)_=r/(a-r),g=a*r/(a-r);else if(o===Mn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===br)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Mn,u=!1){const l=this.elements,c=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,g;if(u)_=1/(a-r),g=a/(a-r);else if(o===Mn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===br)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new D,ln=new rt,Rh=new D(0,0,0),Ch=new D(1,1,1),qn=new D,Bs=new D,Kt=new D,hl=new rt,dl=new mi;class Tn{constructor(e=0,t=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],u=s[1],l=s[5],c=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:Ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ph=0;const fl=new D,Ti=new mi,Ln=new rt,zs=new D,ns=new D,Dh=new D,Lh=new mi,pl=new D(1,0,0),ml=new D(0,1,0),gl=new D(0,0,1),_l={type:"added"},Ih={type:"removed"},Ai={type:"childadded",child:null},Zr={type:"childremoved",child:null};class St extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new D,t=new Tn,n=new mi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ie}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return fl.copy(e).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zs.copy(e):zs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ns,zs,this.up):Ln.lookAt(zs,ns,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,e,Dh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Lh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const h=u[l];r(e.shapes,h)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(r(e.materials,this.material[u]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];s.animations.push(r(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}St.DEFAULT_UP=new D(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new D,In=new D,Kr=new D,Un=new D,wi=new D,Ri=new D,xl=new D,$r=new D,Jr=new D,Qr=new D,ea=new pt,ta=new pt,na=new pt;class un{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),In.subVectors(n,t),Kr.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(In),u=cn.dot(Kr),l=In.dot(In),c=In.dot(Kr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*u-o*c)*d,_=(a*c-o*u)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,s,r,a,o,u){return this.getBarycoord(e,t,n,s,Un)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Un.x),u.addScaledVector(a,Un.y),u.addScaledVector(o,Un.z),u)}static getInterpolatedAttribute(e,t,n,s,r,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,n),na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ea,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),In.subVectors(e,t),cn.cross(In).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;wi.subVectors(s,n),Ri.subVectors(r,n),$r.subVectors(e,n);const u=wi.dot($r),l=Ri.dot($r);if(u<=0&&l<=0)return t.copy(n);Jr.subVectors(e,s);const c=wi.dot(Jr),h=Ri.dot(Jr);if(c>=0&&h<=c)return t.copy(s);const d=u*h-c*l;if(d<=0&&u>=0&&c<=0)return a=u/(u-c),t.copy(n).addScaledVector(wi,a);Qr.subVectors(e,r);const m=wi.dot(Qr),_=Ri.dot(Qr);if(_>=0&&m<=_)return t.copy(r);const g=m*l-u*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ri,o);const p=c*_-m*h;if(p<=0&&h-c>=0&&m-_>=0)return xl.subVectors(r,s),o=(h-c)/(h-c+(m-_)),t.copy(s).addScaledVector(xl,o);const f=1/(p+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(wi,a).addScaledVector(Ri,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},ks={h:0,s:0,l:0};function ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=Oo(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ia(a,r,e+1/3),this.g=ia(a,r,e),this.b=ia(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&Ae("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ae("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=Oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Ge.workingToColorSpace(It.copy(this),e),Math.round(Fe(It.r*255,0,255))*65536+Math.round(Fe(It.g*255,0,255))*256+Math.round(Fe(It.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let u,l;const c=(o+a)/2;if(o===a)u=0,l=0;else{const h=a-o;switch(l=c<=.5?h/(a+o):h/(2-a-o),a){case n:u=(s-r)/h+(s<r?6:0);break;case s:u=(r-n)/h+2;break;case r:u=(n-s)/h+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=qt){Ge.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(ks);const n=us(Yn.h,ks.h,t),s=us(Yn.s,ks.s,t),r=us(Yn.l,ks.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new ke;ke.NAMES=Oc;let Uh=0;class _i extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Oi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ae(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ae(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const u=r[o];delete u.metadata,a.push(u)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class En extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,Vs=new Re;let Nh=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vs.fromBufferAttribute(this,t),Vs.applyMatrix3(e),this.setXY(t,Vs.x,Vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}}class Bc extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fh=0;const sn=new rt,sa=new St,Ci=new D,$t=new Ts,is=new Ts,At=new D;class lt extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nc(e)?zc:Bc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];is.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors($t.min,is.min),$t.expandByPoint(At),At.addVectors($t.max,is.max),$t.expandByPoint(At)):($t.expandByPoint(is.min),$t.expandByPoint(is.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],u=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)At.fromBufferAttribute(o,l),u&&(Ci.fromBufferAttribute(e,l),At.add(Ci)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let I=0;I<n.count;I++)o[I]=new D,u[I]=new D;const l=new D,c=new D,h=new D,d=new Re,m=new Re,_=new Re,g=new D,p=new D;function f(I,v,S){l.fromBufferAttribute(n,I),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,v),_.fromBufferAttribute(r,S),c.sub(l),h.sub(l),m.sub(d),_.sub(d);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(C),o[I].add(g),o[v].add(g),o[S].add(g),u[I].add(p),u[v].add(p),u[S].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,v=E.length;I<v;++I){const S=E[I],C=S.start,F=S.count;for(let O=C,W=C+F;O<W;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new D,M=new D,T=new D,A=new D;function R(I){T.fromBufferAttribute(s,I),A.copy(T);const v=o[I];b.copy(v),b.sub(T.multiplyScalar(T.dot(v))).normalize(),M.crossVectors(A,v);const C=M.dot(u[I])<0?-1:1;a.setXYZW(I,b.x,b.y,b.z,C)}for(let I=0,v=E.length;I<v;++I){const S=E[I],C=S.start,F=S.count;for(let O=C,W=C+F;O<W;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,u=new D,l=new D,c=new D,h=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),o.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(c),u.add(c),l.add(c),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,r),h.subVectors(s,r),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,u){const l=o.array,c=o.itemSize,h=o.normalized,d=new l.constructor(u.length*c);let m=0,_=0;for(let g=0,p=u.length;g<p;g++){o.isInterleavedBufferAttribute?m=u[g]*o.data.stride+o.offset:m=u[g]*c;for(let f=0;f<c;f++)d[_++]=l[m++]}return new Ft(d,c,h)}if(this.index===null)return Ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,s=this.attributes;for(const o in s){const u=s[o],l=e(u,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const u=[],l=r[o];for(let c=0,h=l.length;c<h;c++){const d=l[c],m=e(d,n);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];c.push(m.toJSON(e.data))}c.length>0&&(s[u]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],h=r[l];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,c=a.length;l<c;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new rt,ai=new ws,Hs=new As,Ml=new D,Gs=new D,Ws=new D,Xs=new D,ra=new D,qs=new D,Sl=new D,Ys=new D;class Ne extends St{constructor(e=new lt,t=new En){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let u=0,l=r.length;u<l;u++){const c=o[u],h=r[u];c!==0&&(ra.fromBufferAttribute(h,e),a?qs.addScaledVector(ra,c):qs.addScaledVector(ra.sub(t),c))}t.add(qs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Hs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Hs,Ml)===null||ai.origin.distanceToSquared(Ml)>(e.far-e.near)**2))&&(vl.copy(r).invert(),ai.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,u=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,T=b;M<T;M+=3){const A=o.getX(M),R=o.getX(M+1),I=o.getX(M+2);s=js(this,f,e,n,l,c,h,A,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const E=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=js(this,a,e,n,l,c,h,E,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],f=a[p.materialIndex],E=Math.max(p.start,m.start),b=Math.min(u.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,T=b;M<T;M+=3){const A=M,R=M+1,I=M+2;s=js(this,f,e,n,l,c,h,A,R,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(u.count,m.start+m.count);for(let p=_,f=g;p<f;p+=3){const E=p,b=p+1,M=p+2;s=js(this,a,e,n,l,c,h,E,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Oh(i,e,t,n,s,r,a,o){let u;if(e.side===Nt?u=n.intersectTriangle(a,r,s,!0,o):u=n.intersectTriangle(s,r,a,e.side===Jn,o),u===null)return null;Ys.copy(o),Ys.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ys);return l<t.near||l>t.far?null:{distance:l,point:Ys.clone(),object:i}}function js(i,e,t,n,s,r,a,o,u,l){i.getVertexPosition(o,Gs),i.getVertexPosition(u,Ws),i.getVertexPosition(l,Xs);const c=Oh(i,e,t,n,Gs,Ws,Xs,Sl);if(c){const h=new D;un.getBarycoord(Sl,Gs,Ws,Xs,h),s&&(c.uv=un.getInterpolatedAttribute(s,o,u,l,h,new Re)),r&&(c.uv1=un.getInterpolatedAttribute(r,o,u,l,h,new Re)),a&&(c.normal=un.getInterpolatedAttribute(a,o,u,l,h,new D),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:u,c:l,normal:new D,materialIndex:0};un.getNormal(Gs,Ws,Xs,d.normal),c.face=d,c.barycoord=h}return c}class Ht extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const u=[],l=[],c=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2));function _(g,p,f,E,b,M,T,A,R,I,v){const S=M/R,C=T/I,F=M/2,O=T/2,W=A/2,H=R+1,G=I+1;let z=0,j=0;const re=new D;for(let ee=0;ee<G;ee++){const ce=ee*C-O;for(let De=0;De<H;De++){const Ce=De*S-F;re[g]=Ce*E,re[p]=ce*b,re[f]=W,l.push(re.x,re.y,re.z),re[g]=0,re[p]=0,re[f]=A>0?1:-1,c.push(re.x,re.y,re.z),h.push(De/R),h.push(1-ee/I),z+=1}}for(let ee=0;ee<I;ee++)for(let ce=0;ce<R;ce++){const De=d+ce+H*ee,Ce=d+ce+H*(ee+1),ct=d+(ce+1)+H*(ee+1),at=d+(ce+1)+H*ee;u.push(De,Ce,at),u.push(Ce,ct,at),j+=6}o.addGroup(m,j,v),m+=j,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const s in n)e[s]=n[s]}return e}function Bh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}const zh={clone:qi,merge:zt};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vc extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new D,yl=new Re,El=new Re;class Yt extends Vc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jn.x,jn.y).multiplyScalar(-e/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-e/jn.z)}getViewSize(e,t){return this.getViewBounds(e,yl,El),t.subVectors(El,yl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/u,t-=a.offsetY*n/l,s*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pi=-90,Di=1;class Hh extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Pi,Di,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Pi,Di,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Pi,Di,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Pi,Di,e,t);o.layers=this.layers,this.add(o);const u=new Yt(Pi,Di,e,t);u.layers=this.layers,this.add(u);const l=new Yt(Pi,Di,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,u]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,u,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,u),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(h,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Hc extends Dt{constructor(e=[],t=pi,n,s,r,a,o,u,l,c){super(e,t,n,s,r,a,o,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gc extends yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Hc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:On});r.uniforms.tEquirect.value=t;const a=new Ne(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=Mt),new Hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class en extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gh={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(l,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gh)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Wh extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xh extends Dt{constructor(e=null,t=1,n=1,s,r,a,o,u,l=Pt,c=Pt,h,d){super(null,a,o,u,l,c,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oa=new D,qh=new D,Yh=new Ie;class Fn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oa.subVectors(n,t).cross(qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yh.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new As,jh=new Re(.5,.5),Zs=new D;class ko{constructor(e=new Fn,t=new Fn,n=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],u=r[2],l=r[3],c=r[4],h=r[5],d=r[6],m=r[7],_=r[8],g=r[9],p=r[10],f=r[11],E=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(l-a,m-c,f-_,T-E).normalize(),s[1].setComponents(l+a,m+c,f+_,T+E).normalize(),s[2].setComponents(l+o,m+h,f+g,T+b).normalize(),s[3].setComponents(l-o,m-h,f-g,T-b).normalize(),n)s[4].setComponents(u,d,p,M).normalize(),s[5].setComponents(l-u,m-d,f-p,T-M).normalize();else if(s[4].setComponents(l-u,m-d,f-p,T-M).normalize(),t===Mn)s[5].setComponents(l+u,m+d,f+p,T+M).normalize();else if(t===br)s[5].setComponents(u,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=jh.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zs.x=s.normal.x>0?e.max.x:e.min.x,Zs.y=s.normal.y>0?e.max.y:e.min.y,Zs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vs extends _i{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Tr=new D,Ar=new D,bl=new rt,ss=new ws,Ks=new As,la=new D,Tl=new D;class Wc extends St{constructor(e=new lt,t=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Tr.fromBufferAttribute(t,s-1),Ar.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Tr.distanceTo(Ar);e.setAttribute("lineDistance",new mt(n,1))}else Ae("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;bl.copy(s).invert(),ss.copy(e.ray).applyMatrix4(bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=l){const f=c.getX(g),E=c.getX(g+1),b=$s(this,e,ss,u,f,E,g);b&&t.push(b)}if(this.isLineLoop){const g=c.getX(_-1),p=c.getX(m),f=$s(this,e,ss,u,g,p,_-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=l){const f=$s(this,e,ss,u,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=$s(this,e,ss,u,_-1,m,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function $s(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Tr.fromBufferAttribute(o,s),Ar.fromBufferAttribute(o,r),t.distanceSqToSegment(Tr,Ar,la,Tl)>n)return;la.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(la);if(!(l<e.near||l>e.far))return{distance:l,point:Tl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class ur extends Wc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rs extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Al=new rt,_o=new ws,Js=new As,Qs=new D;class Pr extends St{constructor(e=new lt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),Js.radius+=r,e.ray.intersectsSphere(Js)===!1)return;Al.copy(s).invert(),_o.copy(e.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=d,g=m;_<g;_++){const p=l.getX(_);Qs.fromBufferAttribute(h,p),wl(Qs,p,u,s,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=d,g=m;_<g;_++)Qs.fromBufferAttribute(h,_),wl(Qs,_,u,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wl(i,e,t,n,s,r,a){const o=_o.distanceSqToPoint(i);if(o<t){const u=new D;_o.closestPointToPoint(i,u),u.applyMatrix4(n);const l=s.ray.origin.distanceTo(u);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zh extends Dt{constructor(e,t,n,s,r,a,o,u,l){super(e,t,n,s,r,a,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends Dt{constructor(e,t,n=bn,s,r,a,o=Pt,u=Pt,l,c=Vn,h=1){if(c!==Vn&&c!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,u,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends Ms{constructor(e,t=bn,n=pi,s,r,a=Pt,o=Pt,u,l=Vn){const c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,o,u,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xc extends Dt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hn extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:u};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],m=[];let _=0;const g=[],p=n/2;let f=0;E(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new mt(h,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(m,2));function E(){const M=new D,T=new D;let A=0;const R=(t-e)/n;for(let I=0;I<=r;I++){const v=[],S=I/r,C=S*(t-e)+e;for(let F=0;F<=s;F++){const O=F/s,W=O*u+o,H=Math.sin(W),G=Math.cos(W);T.x=C*H,T.y=-S*n+p,T.z=C*G,h.push(T.x,T.y,T.z),M.set(H,R,G).normalize(),d.push(M.x,M.y,M.z),m.push(O,1-S),v.push(_++)}g.push(v)}for(let I=0;I<s;I++)for(let v=0;v<r;v++){const S=g[v][I],C=g[v+1][I],F=g[v+1][I+1],O=g[v][I+1];(e>0||v!==0)&&(c.push(S,C,O),A+=3),(t>0||v!==r-1)&&(c.push(C,F,O),A+=3)}l.addGroup(f,A,0),f+=A}function b(M){const T=_,A=new Re,R=new D;let I=0;const v=M===!0?e:t,S=M===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),_++;const C=_;for(let F=0;F<=s;F++){const W=F/s*u+o,H=Math.cos(W),G=Math.sin(W);R.x=v*G,R.y=p*S,R.z=v*H,h.push(R.x,R.y,R.z),d.push(0,S,0),A.x=H*.5+.5,A.y=G*.5*S+.5,m.push(A.x,A.y),_++}for(let F=0;F<s;F++){const O=T+F,W=C+F;M===!0?c.push(W,W+1,O):c.push(W+1,W,O),I+=3}l.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends hn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Dr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qc{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ae("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,u=r-1,l;for(;o<=u;)if(s=Math.floor(o+(u-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(r-1);const c=n[s],d=n[s+1]-c,m=(a-c)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),u=t||(a.isVector2?new Re:new D);return u.copy(o).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,u=new rt;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Fe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(u.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Fe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(u.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class er extends qc{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=u}getPoint(e,t=new Re){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=u-this.aX,m=l-this.aY;u=d*c-m*h+this.aX,l=d*h+m*c+this.aY}return n.set(u,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Vo(){let i=0,e=0,t=0,n=0;function s(r,a,o,u){i=r,e=o,t=-3*r+3*a-2*o-u,n=2*r-2*a+o+u}return{initCatmullRom:function(r,a,o,u,l){s(a,o,l*(o-r),l*(u-a))},initNonuniformCatmullRom:function(r,a,o,u,l,c,h){let d=(a-r)/l-(o-r)/(l+c)+(o-a)/c,m=(o-a)/c-(u-a)/(c+h)+(u-o)/h;d*=c,m*=c,s(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const tr=new D,ca=new Vo,ua=new Vo,ha=new Vo;class xo extends qc{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),u=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:u===0&&o===r-1&&(o=r-2,u=1);let l,c;this.closed||o>0?l=s[(o-1)%r]:(tr.subVectors(s[0],s[1]).add(s[0]),l=tr);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(tr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(h),m),g=Math.pow(h.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(c),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),ca.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,_,g,p),ua.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,_,g,p),ha.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,_,g,p)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),ua.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),ha.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return n.set(ca.calc(u),ua.calc(u),ha.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class Cs extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),u=Math.floor(s),l=o+1,c=u+1,h=e/o,d=t/u,m=[],_=[],g=[],p=[];for(let f=0;f<c;f++){const E=f*d-a;for(let b=0;b<l;b++){const M=b*h-r;_.push(M,-E,0),g.push(0,0,1),p.push(b/o),p.push(1-f/u)}}for(let f=0;f<u;f++)for(let E=0;E<o;E++){const b=E+l*f,M=E+l*(f+1),T=E+1+l*(f+1),A=E+1+l*f;m.push(b,M,A),m.push(M,T,A)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ss extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],u=[],l=[],c=[];let h=e;const d=(t-e)/s,m=new D,_=new Re;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){const f=r+p/n*a;m.x=h*Math.cos(f),m.y=h*Math.sin(f),u.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,c.push(_.x,_.y)}h+=d}for(let g=0;g<s;g++){const p=g*(n+1);for(let f=0;f<n;f++){const E=f+p,b=E,M=E+n+1,T=E+n+2,A=E+1;o.push(b,M,A),o.push(M,T,A)}}this.setIndex(o),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zn extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const c=[],h=new D,d=new D,m=[],_=[],g=[],p=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&u===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+b*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),p.push(A+M,1-b),E.push(l++)}c.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const b=c[f][E+1],M=c[f][E],T=c[f+1][E],A=c[f+1][E+1];(f!==0||a>0)&&m.push(b,M,A),(f!==n-1||u<Math.PI)&&m.push(M,T,A)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $h extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jh extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qh extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ed extends vs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const da={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Yc{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){const h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],_=l[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const td=new Yc;class Ho{constructor(e){this.manager=e!==void 0?e:td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li=new WeakMap;class nd extends Ho{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=da.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Li.get(a);h===void 0&&(h=[],Li.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=_s("img");function u(){c(),t&&t(this);const h=Li.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onLoad&&m.onLoad(this)}Li.delete(this),r.manager.itemEnd(e)}function l(h){c(),s&&s(h),da.remove(`image:${e}`);const d=Li.get(this)||[];for(let m=0;m<d.length;m++){const _=d[m];_.onError&&_.onError(h)}Li.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",u,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),da.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Yi extends Ho{constructor(e){super(e)}load(e,t,n,s){const r=new Dt,a=new nd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Lr extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class id extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const fa=new rt,Rl=new D,Cl=new D;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),fa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class sd extends jc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Xi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class rd extends Lr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new sd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ad extends jc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class Zc extends Lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Kc extends Vc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,u=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class od extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ld extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Pl=new rt;class ud{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):He("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pl),this}intersectObject(e,t=!0,n=[]){return vo(e,this,n,t),n.sort(Dl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vo(e[s],this,n,t);return n.sort(Dl),n}}function Dl(i,e){return i.distance-e.distance}function vo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)vo(r[a],e,t,!0)}}class Ll{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hd extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ae("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Il(i,e,t,n){const s=dd(n);switch(t){case Dc:return i*e;case Ic:return i*e/s.components*s.byteLength;case Lo:return i*e/s.components*s.byteLength;case Gi:return i*e*2/s.components*s.byteLength;case Io:return i*e*2/s.components*s.byteLength;case Lc:return i*e*3/s.components*s.byteLength;case dn:return i*e*4/s.components*s.byteLength;case Uo:return i*e*4/s.components*s.byteLength;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:case Va:return Math.max(i,16)*Math.max(e,8)/4;case Ba:case ka:return Math.max(i,8)*Math.max(e,8)/2;case Ha:case Ga:case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Ya:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case co:case uo:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dd(i){switch(i){case Qt:case wc:return{byteLength:1,components:1};case ms:case Rc:case kn:return{byteLength:2,components:1};case Po:case Do:return{byteLength:2,components:4};case bn:case Co:case vn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?Ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function $c(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fd(i){const e=new WeakMap;function t(o,u){const l=o.array,c=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,l,c),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,u,l){const c=u.array,h=u.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,c);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],g=h[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const g=h[m];i.bufferSubData(l,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,u),l.version=o.version}}return{get:s,remove:r,update:a}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Md=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yd=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Rd=`#ifdef USE_BUMPMAP
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
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zd=`vec3 transformedNormal = objectNormal;
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
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tf=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,af=`uniform bool receiveShadow;
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
#endif`,of=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
#endif`,ff=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,pf=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,Tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,If=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Ep=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Lp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,kp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:xd,alphatest_pars_fragment:vd,aomap_fragment:Md,aomap_pars_fragment:Sd,batching_pars_vertex:yd,batching_vertex:Ed,begin_vertex:bd,beginnormal_vertex:Td,bsdfs:Ad,iridescence_fragment:wd,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ld,color_fragment:Id,color_pars_fragment:Ud,color_pars_vertex:Nd,color_vertex:Fd,common:Od,cube_uv_reflection_fragment:Bd,defaultnormal_vertex:zd,displacementmap_pars_vertex:kd,displacementmap_vertex:Vd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:jd,envmap_pars_vertex:Zd,envmap_physical_pars_fragment:of,envmap_vertex:Kd,fog_vertex:$d,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:ef,gradientmap_pars_fragment:tf,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:rf,lights_pars_begin:af,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:uf,lights_phong_pars_fragment:hf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:_f,logdepthbuf_pars_fragment:xf,logdepthbuf_pars_vertex:vf,logdepthbuf_vertex:Mf,map_fragment:Sf,map_pars_fragment:yf,map_particle_fragment:Ef,map_particle_pars_fragment:bf,metalnessmap_fragment:Tf,metalnessmap_pars_fragment:Af,morphinstance_vertex:wf,morphcolor_vertex:Rf,morphnormal_vertex:Cf,morphtarget_pars_vertex:Pf,morphtarget_vertex:Df,normal_fragment_begin:Lf,normal_fragment_maps:If,normal_pars_fragment:Uf,normal_pars_vertex:Nf,normal_vertex:Ff,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Bf,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:kf,iridescence_pars_fragment:Vf,opaque_fragment:Hf,packing:Gf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Yf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:Zf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:$f,shadowmap_vertex:Jf,shadowmask_pars_fragment:Qf,skinbase_vertex:ep,skinning_pars_vertex:tp,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:up,uv_pars_vertex:hp,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:Mp,depth_frag:Sp,distance_vert:yp,distance_frag:Ep,equirect_vert:bp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:wp,meshbasic_vert:Rp,meshbasic_frag:Cp,meshlambert_vert:Pp,meshlambert_frag:Dp,meshmatcap_vert:Lp,meshmatcap_frag:Ip,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:Op,meshphysical_vert:Bp,meshphysical_frag:zp,meshtoon_vert:kp,meshtoon_frag:Vp,points_vert:Hp,points_frag:Gp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},le={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:zt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const nr={r:0,b:0,g:0},li=new Tn,jp=new rt;function Zp(i,e,t,n,s,r,a){const o=new ke(0);let u=r===!0?0:1,l,c,h=null,d=0,m=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1;const T=_(b);T===null?f(o,u):T&&T.isColor&&(f(T,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,M){const T=_(M);T&&(T.isCubeTexture||T.mapping===Cr)?(c===void 0&&(c=new Ne(new Ht(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:qi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),li.copy(M.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(li)),c.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ke,(h!==T||d!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ne(new Cs(2,2),new An({name:"BackgroundMaterial",uniforms:qi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(T.colorSpace)!==Ke,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(nr,kc(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,M,a)}function E(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),u=M,f(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,f(o,u)},render:g,addToRenderList:p,dispose:E}}function Kp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(S,C,F,O,W){let H=!1;const G=h(O,F,C);r!==G&&(r=G,l(r.object)),H=m(S,O,F,W),H&&_(S,O,F,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,M(S,C,F,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function u(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function c(S){return i.deleteVertexArray(S)}function h(S,C,F){const O=F.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let H=W[C.id];H===void 0&&(H={},W[C.id]=H);let G=H[O];return G===void 0&&(G=d(u()),H[O]=G),G}function d(S){const C=[],F=[],O=[];for(let W=0;W<t;W++)C[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:O,object:S,attributes:{},index:null}}function m(S,C,F,O){const W=r.attributes,H=C.attributes;let G=0;const z=F.getAttributes();for(const j in z)if(z[j].location>=0){const ee=W[j];let ce=H[j];if(ce===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ee===void 0||ee.attribute!==ce||ce&&ee.data!==ce.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function _(S,C,F,O){const W={},H=C.attributes;let G=0;const z=F.getAttributes();for(const j in z)if(z[j].location>=0){let ee=H[j];ee===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor));const ce={};ce.attribute=ee,ee&&ee.data&&(ce.data=ee.data),W[j]=ce,G++}r.attributes=W,r.attributesNum=G,r.index=O}function g(){const S=r.newAttributes;for(let C=0,F=S.length;C<F;C++)S[C]=0}function p(S){f(S,0)}function f(S,C){const F=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;F[S]=1,O[S]===0&&(i.enableVertexAttribArray(S),O[S]=1),W[S]!==C&&(i.vertexAttribDivisor(S,C),W[S]=C)}function E(){const S=r.newAttributes,C=r.enabledAttributes;for(let F=0,O=C.length;F<O;F++)C[F]!==S[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function b(S,C,F,O,W,H,G){G===!0?i.vertexAttribIPointer(S,C,F,W,H):i.vertexAttribPointer(S,C,F,O,W,H)}function M(S,C,F,O){g();const W=O.attributes,H=F.getAttributes(),G=C.defaultAttributeValues;for(const z in H){const j=H[z];if(j.location>=0){let re=W[z];if(re===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const ee=re.normalized,ce=re.itemSize,De=e.get(re);if(De===void 0)continue;const Ce=De.buffer,ct=De.type,at=De.bytesPerElement,Y=ct===i.INT||ct===i.UNSIGNED_INT||re.gpuType===Co;if(re.isInterleavedBufferAttribute){const $=re.data,pe=$.stride,Le=re.offset;if($.isInstancedInterleavedBuffer){for(let _e=0;_e<j.locationSize;_e++)f(j.location+_e,$.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let _e=0;_e<j.locationSize;_e++)p(j.location+_e);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let _e=0;_e<j.locationSize;_e++)b(j.location+_e,ce/j.locationSize,ct,ee,pe*at,(Le+ce/j.locationSize*_e)*at,Y)}else{if(re.isInstancedBufferAttribute){for(let $=0;$<j.locationSize;$++)f(j.location+$,re.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let $=0;$<j.locationSize;$++)p(j.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let $=0;$<j.locationSize;$++)b(j.location+$,ce/j.locationSize,ct,ee,ce*at,ce/j.locationSize*$*at,Y)}}else if(G!==void 0){const ee=G[z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(j.location,ee);break;case 3:i.vertexAttrib3fv(j.location,ee);break;case 4:i.vertexAttrib4fv(j.location,ee);break;default:i.vertexAttrib1fv(j.location,ee)}}}}E()}function T(){I();for(const S in n){const C=n[S];for(const F in C){const O=C[F];for(const W in O)c(O[W].object),delete O[W];delete C[F]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const F in C){const O=C[F];for(const W in O)c(O[W].object),delete O[W];delete C[F]}delete n[S.id]}function R(S){for(const C in n){const F=n[C];if(F[S.id]===void 0)continue;const O=F[S.id];for(const W in O)c(O[W].object),delete O[W];delete F[S.id]}}function I(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function $p(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let m=0;for(let _=0;_<h;_++)m+=c[_];t.update(m,n,1)}function u(l,c,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],c[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,c,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=c[g]*d[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function Jp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const I=R===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!I)}function u(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=u(l);c!==l&&(Ae("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:A}}function Qp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Fn,o=new Ie,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!p)r?c(null):l();else{const E=r?0:n,b=E*4;let M=f.clippingState||null;u.value=M,M=c(_,d,b,m);for(let T=0;T!==b;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(h,d,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=u.value,_!==!0||p===null){const f=m+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let b=0,M=m;b!==g;++b,M+=4)a.copy(h[b]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function em(i){let e=new WeakMap;function t(a,o){return o===Na?a.mapping=pi:o===Fa&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Na||o===Fa)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const l=new Gc(u.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const $n=4,Ul=[.125,.215,.35,.446,.526,.582],di=20,tm=256,rs=new Kc,Nl=new ke;let pa=null,ma=0,ga=0,_a=!1;const nm=new D;class Fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=nm}=r;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,s,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,e.scissorTest=!1,Ii(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:kn,format:dn,colorSpace:Wi,depthBuffer:!1},s=Ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=im(r)),this._blurMaterial=rm(r,e,t),this._ggxMaterial=sm(r,e,t)}return s}_compileMaterial(e){const t=new Ne(new lt,e);this._renderer.compile(t,rs)}_sceneToCubeUV(e,t,n,s,r){const u=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Nl),h.toneMapping=Sn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new Ht,new En({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let f=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,f=!0):(p.color.copy(Nl),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(u.up.set(0,l[b],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+c[b],r.y,r.z)):M===1?(u.up.set(0,0,l[b]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+c[b],r.z)):(u.up.set(0,l[b],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+c[b]));const T=this._cubeSize;Ii(s,M*T,b>2?T:0,T,T),h.setRenderTarget(s),f&&h.render(g,u),h.render(e,u)}h.toneMapping=m,h.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===pi||e.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const u=this._cubeSize;Ii(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,rs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms,l=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=0+l*1.25,m=h*d,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-$n?n-_+$n:0),f=4*(this._cubeSize-g);u.envMap.value=e.texture,u.roughness.value=m,u.mipInt.value=_-t,Ii(r,p,f,3*g,2*g),s.setRenderTarget(r),s.render(o,rs),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=_-n,Ii(e,p,f,3*g,2*g),s.setRenderTarget(e),s.render(o,rs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");const c=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),g=r/_,p=isFinite(r)?1+Math.floor(c*g):di;p>di&&Ae(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const f=[];let E=0;for(let R=0;R<di;++R){const I=R/g,v=Math.exp(-I*I/2);f.push(v),R===0?E+=v:R<p&&(E+=2*v)}for(let R=0;R<f.length;R++)f[R]=f[R]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-n;const M=this._sizeLods[s],T=3*M*(s>b-$n?s-b+$n:0),A=4*(this._cubeSize-M);Ii(t,T,A,3*M,2*M),u.setRenderTarget(t),u.render(h,rs)}}function im(i){const e=[],t=[],n=[];let s=i;const r=i-$n+1+Ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let u=1/o;a>i-$n?u=Ul[a-i+$n-1]:a===0&&(u=0),t.push(u);const l=1/(o-2),c=-l,h=1+l,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,_=6,g=3,p=2,f=1,E=new Float32Array(g*_*m),b=new Float32Array(p*_*m),M=new Float32Array(f*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,I=A>2?0:-1,v=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];E.set(v,g*_*A),b.set(d,p*_*A);const S=[A,A,A,A,A,A];M.set(S,f*_*A)}const T=new lt;T.setAttribute("position",new Ft(E,g)),T.setAttribute("uv",new Ft(b,p)),T.setAttribute("faceIndex",new Ft(M,f)),n.push(new Ne(T,null)),s>$n&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ol(i,e,t){const n=new yn(i,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ii(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function sm(i,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ir(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function rm(i,e,t){const n=new Float32Array(di),s=new D(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Bl(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function zl(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ir(){return`

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
	`}function am(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,l=u===Na||u===Fa,c=u===pi||u===Hi;if(l||c){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fl(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return l&&m&&m.height>0||c&&m&&s(m)?(t===null&&(t=new Fl(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let u=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&u++;return u===l}function r(o){const u=o.target;u.removeEventListener("dispose",r);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function om(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xs("WebGLRenderer: "+n+" extension not supported."),s}}}function lm(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function u(h){const d=h.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(h){const d=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let b=0,M=E.length;b<M;b+=3){const T=E[b+0],A=E[b+1],R=E[b+2];d.push(T,A,A,R,R,T)}}else if(_!==void 0){const E=_.array;g=_.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const T=b+0,A=b+1,R=b+2;d.push(T,A,A,R,R,T)}}else return;const p=new(Nc(d)?zc:Bc)(d,1);p.version=g;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function c(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:u,getWireframeAttribute:c}}function cm(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function u(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function l(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,d*a,_),t.update(m,n,_))}function c(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,_);let p=0;for(let f=0;f<_;f++)p+=m[f];t.update(p,n,1)}function h(d,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,_);let f=0;for(let E=0;E<_;E++)f+=m[E]*g[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hm(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,u){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let S=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let T=o.attributes.position.count*M,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*h),I=new Fc(R,T,A,h);I.type=vn,I.needsUpdate=!0;const v=M*4;for(let C=0;C<h;C++){const F=f[C],O=E[C],W=b[C],H=T*A*4*C;for(let G=0;G<F.count;G++){const z=G*v;_===!0&&(s.fromBufferAttribute(F,G),R[H+z+0]=s.x,R[H+z+1]=s.y,R[H+z+2]=s.z,R[H+z+3]=0),g===!0&&(s.fromBufferAttribute(O,G),R[H+z+4]=s.x,R[H+z+5]=s.y,R[H+z+6]=s.z,R[H+z+7]=0),p===!0&&(s.fromBufferAttribute(W,G),R[H+z+8]=s.x,R[H+z+9]=s.y,R[H+z+10]=s.z,R[H+z+11]=W.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Re(T,A)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function dm(i,e,t,n){let s=new WeakMap;function r(u){const l=n.render.frame,c=u.geometry,h=e.get(u,c);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){const d=u.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(u){const l=u.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const fm={[Mc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[yc]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[bc]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[Ec]:"CUSTOM_TONE_MAPPING"};function pm(i,e,t,n,s){const r=new yn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new yn(e,t,{type:kn,depthBuffer:!1,stencilBuffer:!1}),o=new lt;o.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new $h({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ne(o,u),c=new Kc(-1,1,1,-1,0,1);let h=null,d=null,m=!1,_,g=null,p=[],f=!1;this.setSize=function(E,b){r.setSize(E,b),a.setSize(E,b);for(let M=0;M<p.length;M++){const T=p[M];T.setSize&&T.setSize(E,b)}},this.setEffects=function(E){p=E,f=p.length>0&&p[0].isRenderPass===!0;const b=r.width,M=r.height;for(let T=0;T<p.length;T++){const A=p[T];A.setSize&&A.setSize(b,M)}},this.begin=function(E,b){if(m||E.toneMapping===Sn&&p.length===0)return!1;if(g=b,b!==null){const M=b.width,T=b.height;(r.width!==M||r.height!==T)&&this.setSize(M,T)}return f===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=Sn,!0},this.hasRenderPass=function(){return f},this.end=function(E,b){E.toneMapping=_,m=!0;let M=r,T=a;for(let A=0;A<p.length;A++){const R=p[A];if(R.enabled!==!1&&(R.render(E,T,M,b),R.needsSwap!==!1)){const I=M;M=T,T=I}}if(h!==E.outputColorSpace||d!==E.toneMapping){h=E.outputColorSpace,d=E.toneMapping,u.defines={},Ge.getTransfer(h)===Ke&&(u.defines.SRGB_TRANSFER="");const A=fm[d];A&&(u.defines[A]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(g),E.render(l,c),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),u.dispose()}}const Jc=new Dt,Mo=new Ms(1,1),Qc=new Fc,eu=new Ah,tu=new Hc,kl=[],Vl=[],Hl=new Float32Array(16),Gl=new Float32Array(9),Wl=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=kl[s];if(r===void 0&&(r=new Float32Array(s),kl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ur(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Wl.set(n),i.uniformMatrix2fv(this.addr,!1,Wl),bt(t,n)}}function Mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Gl.set(n),i.uniformMatrix3fv(this.addr,!1,Gl),bt(t,n)}}function Sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),bt(t,n)}}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function Am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function Pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mo.compareFunction=t.isReversedDepthBuffer()?Fo:No,r=Mo):r=Jc,t.setTexture2D(e||r,s)}function Dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||eu,s)}function Lm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tu,s)}function Im(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qc,s)}function Um(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return vm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return ym;case 35667:case 35671:return Em;case 35668:case 35672:return bm;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return wm;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}function Nm(i,e){i.uniform1fv(this.addr,e)}function Fm(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function Om(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function Bm(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function zm(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function km(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vm(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hm(i,e){i.uniform1iv(this.addr,e)}function Gm(i,e){i.uniform2iv(this.addr,e)}function Wm(i,e){i.uniform3iv(this.addr,e)}function Xm(i,e){i.uniform4iv(this.addr,e)}function qm(i,e){i.uniform1uiv(this.addr,e)}function Ym(i,e){i.uniform2uiv(this.addr,e)}function jm(i,e){i.uniform3uiv(this.addr,e)}function Zm(i,e){i.uniform4uiv(this.addr,e)}function Km(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mo:a=Jc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function $m(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||eu,r[a])}function Jm(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tu,r[a])}function Qm(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qc,r[a])}function e0(i){switch(i){case 5126:return Nm;case 35664:return Fm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return km;case 35676:return Vm;case 5124:case 35670:return Hm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return jm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Um(t.type)}}class n0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e0(t.type)}}class i0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Xl(i,e){i.seq.push(e),i.map[e.id]=e}function s0(i,e,t){const n=i.name,s=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const u=r[2]==="]",l=r[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===s){Xl(t,l===void 0?new t0(o,i,e):new n0(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new i0(o),Xl(t,h)),t=h}}}class hr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);s0(o,u,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ql(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const r0=37297;let a0=0;function o0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Yl=new Ie;function l0(i){Ge._getMatrix(Yl,Ge.workingColorSpace,i);const e=`mat3( ${Yl.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case Er:return[e,"LinearTransferOETF"];case Ke:return[e,"sRGBTransferOETF"];default:return Ae("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+o0(i.getShaderSource(e),o)}else return r}function c0(i,e){const t=l0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const u0={[Mc]:"Linear",[Sc]:"Reinhard",[yc]:"Cineon",[Ro]:"ACESFilmic",[bc]:"AgX",[Tc]:"Neutral",[Ec]:"Custom"};function h0(i,e){const t=u0[e];return t===void 0?(Ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ir=new D;function d0(){Ge.getLuminanceCoefficients(ir);const i=ir.x.toFixed(4),e=ir.y.toFixed(4),t=ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function p0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ls(i){return i!==""}function Zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(g0,x0)}const _0=new Map;function x0(i,e){let t=Ue[e];if(t===void 0){const n=_0.get(e);if(n!==void 0)t=Ue[n],Ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(v0,M0)}function M0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const S0={[rr]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function y0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E0={[pi]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE_UV"};function b0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":E0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const T0={[Hi]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w0={[vc]:"ENVMAP_BLENDING_MULTIPLY",[qu]:"ENVMAP_BLENDING_MIX",[Yu]:"ENVMAP_BLENDING_ADD"};function R0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w0[i.combine]||"ENVMAP_BLENDING_NONE"}function C0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function P0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=y0(t),l=b0(t),c=A0(t),h=R0(t),d=C0(t),m=f0(t),_=p0(r),g=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ls).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(p=[Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[Jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Sn?h0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ls).join(`
`)),a=So(a),a=Zl(a,t),a=Kl(a,t),o=So(o),o=Zl(o,t),o=Kl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+p+a,M=E+f+o,T=ql(s,s.VERTEX_SHADER,b),A=ql(s,s.FRAGMENT_SHADER,M);s.attachShader(g,T),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(T)||"",W=s.getShaderInfoLog(A)||"",H=F.trim(),G=O.trim(),z=W.trim();let j=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,A);else{const ee=jl(s,T,"vertex"),ce=jl(s,A,"fragment");He("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ee+`
`+ce)}else H!==""?Ae("WebGLProgram: Program Info Log:",H):(G===""||z==="")&&(re=!1);re&&(C.diagnostics={runnable:j,programLog:H,vertexShader:{log:G,prefix:p},fragmentShader:{log:z,prefix:f}})}s.deleteShader(T),s.deleteShader(A),I=new hr(s,g),v=m0(s,g)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(g,r0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=A,this}let D0=0;class L0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I0(e),t.set(e,n)),n}}class I0{constructor(e){this.id=D0++,this.code=e,this.usedTimes=0}}function U0(i,e,t,n,s,r,a){const o=new zo,u=new L0,l=new Set,c=[],h=new Map,d=s.logarithmicDepthBuffer;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,C,F,O){const W=F.fog,H=O.geometry,G=v.isMeshStandardMaterial?F.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),j=z&&z.mapping===Cr?z.image.height:null,re=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&Ae("WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const ee=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ce=ee!==void 0?ee.length:0;let De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let Ce,ct,at,Y;if(re){const je=gn[re];Ce=je.vertexShader,ct=je.fragmentShader}else Ce=v.vertexShader,ct=v.fragmentShader,u.update(v),at=u.getVertexShaderID(v),Y=u.getFragmentShaderID(v);const $=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,_e=O.isBatchedMesh===!0,We=!!v.map,Tt=!!v.matcap,Ve=!!z,Ye=!!v.aoMap,Qe=!!v.lightMap,Oe=!!v.bumpMap,gt=!!v.normalMap,P=!!v.displacementMap,_t=!!v.emissiveMap,qe=!!v.metalnessMap,nt=!!v.roughnessMap,ve=v.anisotropy>0,w=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,q=v.sheen>0,K=v.transmission>0,X=ve&&!!v.anisotropyMap,Se=w&&!!v.clearcoatMap,ie=w&&!!v.clearcoatNormalMap,xe=w&&!!v.clearcoatRoughnessMap,we=U&&!!v.iridescenceMap,Q=U&&!!v.iridescenceThicknessMap,ae=q&&!!v.sheenColorMap,ge=q&&!!v.sheenRoughnessMap,Me=!!v.specularMap,se=!!v.specularColorMap,Be=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,he=K&&!!v.thicknessMap,te=!!v.gradientMap,de=!!v.alphaMap,J=v.alphaTest>0,Z=!!v.alphaHash,ne=!!v.extensions;let Pe=Sn;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Pe=i.toneMapping);const it={shaderID:re,shaderType:v.type,shaderName:v.name,vertexShader:Ce,fragmentShader:ct,defines:v.defines,customVertexShaderID:at,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:_e,batchingColor:_e&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Wi,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:Tt,envMap:Ve,envMapMode:Ve&&z.mapping,envMapCubeUVHeight:j,aoMap:Ye,lightMap:Qe,bumpMap:Oe,normalMap:gt,displacementMap:P,emissiveMap:_t,normalMapObjectSpace:gt&&v.normalMapType===Ku,normalMapTangentSpace:gt&&v.normalMapType===Uc,metalnessMap:qe,roughnessMap:nt,anisotropy:ve,anisotropyMap:X,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:x,iridescence:U,iridescenceMap:we,iridescenceThicknessMap:Q,sheen:q,sheenColorMap:ae,sheenRoughnessMap:ge,specularMap:Me,specularColorMap:se,specularIntensityMap:Be,transmission:K,transmissionMap:L,thicknessMap:he,gradientMap:te,opaque:v.transparent===!1&&v.blending===Oi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:J,alphaHash:Z,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:Ye&&g(v.aoMap.channel),lightMapUv:Qe&&g(v.lightMap.channel),bumpMapUv:Oe&&g(v.bumpMap.channel),normalMapUv:gt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:_t&&g(v.emissiveMap.channel),metalnessMapUv:qe&&g(v.metalnessMap.channel),roughnessMapUv:nt&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:Se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(v.sheenRoughnessMap.channel),specularMapUv:Me&&g(v.specularMap.channel),specularColorMapUv:se&&g(v.specularColorMap.channel),specularIntensityMapUv:Be&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:he&&g(v.thicknessMap.channel),alphaMapUv:de&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(gt||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(We||de),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:De,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&Ge.getTransfer(v.map.colorSpace)===Ke,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(v.emissiveMap.colorSpace)===Ke,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ut,flipSided:v.side===Nt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||_e)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function f(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(E(S,v),b(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function E(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=_[v.type];let C;if(S){const F=gn[S];C=zh.clone(F.uniforms)}else C=v.uniforms;return C}function T(v,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new P0(i,S,v,r),c.push(C),h.set(S,C)),C}function A(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function R(v){u.remove(v)}function I(){u.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:I}}function N0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,u){i.get(a)[o]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function F0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ql(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ec(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,m,_,g,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=g,f.group=p),e++,f}function o(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function u(h,d,m,_,g,p){const f=a(h,d,m,_,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||F0),n.length>1&&n.sort(d||Ql),s.length>1&&s.sort(d||Ql)}function c(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:c,sort:l}}function O0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ec,i.set(n,[a])):s>=r.length?(a=new ec,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function B0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function z0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function H0(i){const e=new B0,t=z0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new rt,a=new rt;function o(l){let c=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,_=0,g=0,p=0,f=0,E=0,b=0,M=0,T=0,A=0,R=0;l.sort(V0);for(let v=0,S=l.length;v<S;v++){const C=l[v],F=C.color,O=C.intensity,W=C.distance;let H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Gi?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=F.r*O,h+=F.g*O,d+=F.b*O;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],O);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(F).multiplyScalar(O),G.distance=W,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[g]=G;const z=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[g]=z.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=H,M++}g++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(F).multiplyScalar(O),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=G,p++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const z=C.shadow,j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=C.shadow.matrix,b++}n.point[_]=G,_++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(O),G.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==T||I.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=m,I.pointLength=_,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=T,I.numLightProbes=R,n.version=k0++)}function u(l,c){let h=0,d=0,m=0,_=0,g=0;const p=c.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const b=l[f];if(b.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:u,state:n}}function tc(i){const e=new H0(i),t=[],n=[];function s(c){l.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function u(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:u,pushLight:r,pushShadow:a}}function G0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new tc(i),e.set(s,[o])):r>=a.length?(o=new tc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`,q0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Y0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],nc=new rt,as=new D,va=new D;function j0(i,e,t){let n=new ko;const s=new Re,r=new Re,a=new pt,o=new Jh,u=new Qh,l={},c=t.maxTextureSize,h={[Jn]:Nt,[Nt]:Jn,[Ut]:Ut},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new lt;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rr;let f=this.type;this.render=function(A,R,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;A.type===wu&&(Ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=rr);const v=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(On),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==this.type;O&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=A.length;W<H;W++){const G=A[W],z=G.shadow;if(z===void 0){Ae("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===os){if(G.isPointLight){Ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yn(s.x,s.y,{format:Gi,type:kn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Ms(s.x,s.y,vn),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=Vn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt}else{G.isPointLight?(z.map=new Gc(s.x),z.map.depthTexture=new Kh(s.x,bn)):(z.map=new yn(s.x,s.y),z.map.depthTexture=new Ms(s.x,s.y,bn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=Vn;const ee=i.state.buffers.depth.getReversed();this.type===rr?(z.map.depthTexture.compareFunction=ee?Fo:No,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Pt,z.map.depthTexture.magFilter=Pt)}z.camera.updateProjectionMatrix()}const re=z.map.isWebGLCubeRenderTarget?6:1;for(let ee=0;ee<re;ee++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(z.map),i.clear());const ce=z.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),F.viewport(a)}if(G.isPointLight){const ce=z.camera,De=z.matrix,Ce=G.distance||ce.far;Ce!==ce.far&&(ce.far=Ce,ce.updateProjectionMatrix()),as.setFromMatrixPosition(G.matrixWorld),ce.position.copy(as),va.copy(ce.position),va.add(q0[ee]),ce.up.copy(Y0[ee]),ce.lookAt(va),ce.updateMatrixWorld(),De.makeTranslation(-as.x,-as.y,-as.z),nc.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nc,ce.coordinateSystem,ce.reversedDepth)}else z.updateMatrices(G);n=z.getFrustum(),M(R,I,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===os&&E(z,I),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(v,S,C)};function E(A,R){const I=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new yn(s.x,s.y,{format:Gi,type:kn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,m,g,null)}function b(A,R,I,v){let S=null;const C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=I.isPointLight===!0?u:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=S.uuid,O=R.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let H=W[O];H===void 0&&(H=S.clone(),W[O]=H,R.addEventListener("dispose",T)),S=H}if(S.visible=R.visible,S.wireframe=R.wireframe,v===os?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=i.properties.get(S);F.light=I}return S}function M(A,R,I,v,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===os)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const H=O.groups;for(let G=0,z=H.length;G<z;G++){const j=H[G],re=W[j.materialIndex];if(re&&re.visible){const ee=b(A,re,v,S);A.onBeforeShadow(i,A,R,I,O,ee,j),i.renderBufferDirect(I,null,O,ee,A,j),A.onAfterShadow(i,A,R,I,O,ee,j)}}}else if(W.visible){const H=b(A,W,v,S);A.onBeforeShadow(i,A,R,I,O,H,null),i.renderBufferDirect(I,null,O,H,A,null),A.onAfterShadow(i,A,R,I,O,H,null)}}const F=A.children;for(let O=0,W=F.length;O<W;O++)M(F[O],R,I,v,S)}function T(A){A.target.removeEventListener("dispose",T);for(const I in l){const v=l[I],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const Z0={[Ra]:Ca,[Pa]:Ia,[Da]:Ua,[Vi]:La,[Ca]:Ra,[Ia]:Pa,[Ua]:Da,[La]:Vi};function K0(i,e){function t(){let L=!1;const he=new pt;let te=null;const de=new pt(0,0,0,0);return{setMask:function(J){te!==J&&!L&&(i.colorMask(J,J,J,J),te=J)},setLocked:function(J){L=J},setClear:function(J,Z,ne,Pe,it){it===!0&&(J*=Pe,Z*=Pe,ne*=Pe),he.set(J,Z,ne,Pe),de.equals(he)===!1&&(i.clearColor(J,Z,ne,Pe),de.copy(he))},reset:function(){L=!1,te=null,de.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,te=null,de=null,J=null;return{setReversed:function(Z){if(he!==Z){const ne=e.get("EXT_clip_control");Z?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),he=Z;const Pe=J;J=null,this.setClear(Pe)}},getReversed:function(){return he},setTest:function(Z){Z?$(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Z){te!==Z&&!L&&(i.depthMask(Z),te=Z)},setFunc:function(Z){if(he&&(Z=Z0[Z]),de!==Z){switch(Z){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Da:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Ia:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Z}},setLocked:function(Z){L=Z},setClear:function(Z){J!==Z&&(he&&(Z=1-Z),i.clearDepth(Z),J=Z)},reset:function(){L=!1,te=null,de=null,J=null,he=!1}}}function s(){let L=!1,he=null,te=null,de=null,J=null,Z=null,ne=null,Pe=null,it=null;return{setTest:function(je){L||(je?$(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(je){he!==je&&!L&&(i.stencilMask(je),he=je)},setFunc:function(je,pn,Cn){(te!==je||de!==pn||J!==Cn)&&(i.stencilFunc(je,pn,Cn),te=je,de=pn,J=Cn)},setOp:function(je,pn,Cn){(Z!==je||ne!==pn||Pe!==Cn)&&(i.stencilOp(je,pn,Cn),Z=je,ne=pn,Pe=Cn)},setLocked:function(je){L=je},setClear:function(je){it!==je&&(i.clearStencil(je),it=je)},reset:function(){L=!1,he=null,te=null,de=null,J=null,Z=null,ne=null,Pe=null,it=null}}}const r=new t,a=new n,o=new s,u=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,E=null,b=null,M=null,T=null,A=null,R=new ke(0,0,0),I=0,v=!1,S=null,C=null,F=null,O=null,W=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),G=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),G=z>=2);let re=null,ee={};const ce=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Ce=new pt().fromArray(ce),ct=new pt().fromArray(De);function at(L,he,te,de){const J=new Uint8Array(4),Z=i.createTexture();i.bindTexture(L,Z),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<te;ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(he+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return Z}const Y={};Y[i.TEXTURE_2D]=at(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=at(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=at(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=at(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Vi),Oe(!1),gt(Qo),$(i.CULL_FACE),Ye(On);function $(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function pe(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Le(L,he){return h[L]!==he?(i.bindFramebuffer(L,he),h[L]=he,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function _e(L,he){let te=m,de=!1;if(L){te=d.get(he),te===void 0&&(te=[],d.set(he,te));const J=L.textures;if(te.length!==J.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ne=J.length;Z<ne;Z++)te[Z]=i.COLOR_ATTACHMENT0+Z;te.length=J.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function We(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const Tt={[hi]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Pu]:i.FUNC_REVERSE_SUBTRACT};Tt[Du]=i.MIN,Tt[Lu]=i.MAX;const Ve={[Iu]:i.ZERO,[Uu]:i.ONE,[Nu]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Fu]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Wu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ye(L,he,te,de,J,Z,ne,Pe,it,je){if(L===On){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),L!==Ru){if(L!==p||je!==v){if((f!==hi||M!==hi)&&(i.blendEquation(i.FUNC_ADD),f=hi,M=hi),je)switch(L){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFunc(i.ONE,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case tl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:He("WebGLState: Invalid blending: ",L);break}else switch(L){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case el:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",L);break}E=null,b=null,T=null,A=null,R.set(0,0,0),I=0,p=L,v=je}return}J=J||he,Z=Z||te,ne=ne||de,(he!==f||J!==M)&&(i.blendEquationSeparate(Tt[he],Tt[J]),f=he,M=J),(te!==E||de!==b||Z!==T||ne!==A)&&(i.blendFuncSeparate(Ve[te],Ve[de],Ve[Z],Ve[ne]),E=te,b=de,T=Z,A=ne),(Pe.equals(R)===!1||it!==I)&&(i.blendColor(Pe.r,Pe.g,Pe.b,it),R.copy(Pe),I=it),p=L,v=!1}function Qe(L,he){L.side===Ut?pe(i.CULL_FACE):$(i.CULL_FACE);let te=L.side===Nt;he&&(te=!te),Oe(te),L.blending===Oi&&L.transparent===!1?Ye(On):Ye(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function gt(L){L!==Tu?($(i.CULL_FACE),L!==C&&(L===Qo?i.cullFace(i.BACK):L===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),C=L}function P(L){L!==F&&(G&&i.lineWidth(L),F=L)}function _t(L,he,te){L?($(i.POLYGON_OFFSET_FILL),(O!==he||W!==te)&&(i.polygonOffset(he,te),O=he,W=te)):pe(i.POLYGON_OFFSET_FILL)}function qe(L){L?$(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function nt(L){L===void 0&&(L=i.TEXTURE0+H-1),re!==L&&(i.activeTexture(L),re=L)}function ve(L,he,te){te===void 0&&(re===null?te=i.TEXTURE0+H-1:te=re);let de=ee[te];de===void 0&&(de={type:void 0,texture:void 0},ee[te]=de),(de.type!==L||de.texture!==he)&&(re!==te&&(i.activeTexture(te),re=te),i.bindTexture(L,he||Y[L]),de.type=L,de.texture=he)}function w(){const L=ee[re];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function K(){try{i.texSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function ie(){try{i.texStorage2D(...arguments)}catch(L){He("WebGLState:",L)}}function xe(){try{i.texStorage3D(...arguments)}catch(L){He("WebGLState:",L)}}function we(){try{i.texImage2D(...arguments)}catch(L){He("WebGLState:",L)}}function Q(){try{i.texImage3D(...arguments)}catch(L){He("WebGLState:",L)}}function ae(L){Ce.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ce.copy(L))}function ge(L){ct.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ct.copy(L))}function Me(L,he){let te=l.get(he);te===void 0&&(te=new WeakMap,l.set(he,te));let de=te.get(L);de===void 0&&(de=i.getUniformBlockIndex(he,L.name),te.set(L,de))}function se(L,he){const de=l.get(he).get(L);u.get(he)!==de&&(i.uniformBlockBinding(he,de,L.__bindingPointIndex),u.set(he,de))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},re=null,ee={},h={},d=new WeakMap,m=[],_=null,g=!1,p=null,f=null,E=null,b=null,M=null,T=null,A=null,R=new ke(0,0,0),I=0,v=!1,S=null,C=null,F=null,O=null,W=null,Ce.set(0,0,i.canvas.width,i.canvas.height),ct.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:Le,drawBuffers:_e,useProgram:We,setBlending:Ye,setMaterial:Qe,setFlipSided:Oe,setCullFace:gt,setLineWidth:P,setPolygonOffset:_t,setScissorTest:qe,activeTexture:nt,bindTexture:ve,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:we,texImage3D:Q,updateUBOMapping:Me,uniformBlockBinding:se,texStorage2D:ie,texStorage3D:xe,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:ae,viewport:ge,reset:Be}}function $0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,c=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,x){return m?new OffscreenCanvas(w,x):_s("canvas")}function g(w,x,U){let q=1;const K=ve(w);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const X=Math.floor(q*K.width),Se=Math.floor(q*K.height);h===void 0&&(h=_(X,Se));const ie=x?_(X,Se):h;return ie.width=X,ie.height=Se,ie.getContext("2d").drawImage(w,0,0,X,Se),Ae("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Se+")."),ie}else return"data"in w&&Ae("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function p(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,x,U,q,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=x;if(x===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),x===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const Se=K?Er:Ge.getTransfer(q);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=Se===Ke?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(w,x){let U;return w?x===null||x===bn||x===gs?U=i.DEPTH24_STENCIL8:x===vn?U=i.DEPTH32F_STENCIL8:x===ms&&(U=i.DEPTH24_STENCIL8,Ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===bn||x===gs?U=i.DEPTH_COMPONENT24:x===vn?U=i.DEPTH_COMPONENT32F:x===ms&&(U=i.DEPTH_COMPONENT16),U}function T(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pt&&w.minFilter!==Mt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&c.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),S(x)}function I(w){const x=n.get(w);if(x.__webglInit===void 0)return;const U=w.source,q=d.get(U);if(q){const K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(w),Object.keys(q).length===0&&d.delete(U)}n.remove(w)}function v(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const U=w.source,q=d.get(U);delete q[x.__cacheKey],a.memory.textures--}function S(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=w.textures;for(let q=0,K=U.length;q<K;q++){const X=n.get(U[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(U[q])}n.remove(w)}let C=0;function F(){C=0}function O(){const w=C;return w>=s.maxTextures&&Ae("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function W(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function H(w,x){const U=n.get(w);if(w.isVideoTexture&&qe(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const q=w.image;if(q===null)Ae("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ae("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function G(w,x){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Y(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function z(w,x){const U=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){Y(U,w,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function j(w,x){const U=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){$(U,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const re={[_n]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},ee={[Pt]:i.NEAREST,[ju]:i.NEAREST_MIPMAP_NEAREST,[Ls]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},ce={[$u]:i.NEVER,[nh]:i.ALWAYS,[Ju]:i.LESS,[No]:i.LEQUAL,[Qu]:i.EQUAL,[Fo]:i.GEQUAL,[eh]:i.GREATER,[th]:i.NOTEQUAL};function De(w,x){if(x.type===vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Mt||x.magFilter===zr||x.magFilter===Ls||x.magFilter===Kn||x.minFilter===Mt||x.minFilter===zr||x.minFilter===Ls||x.minFilter===Kn)&&Ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,re[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,re[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,re[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ee[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ee[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Pt||x.minFilter!==Ls&&x.minFilter!==Kn||x.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ce(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const q=x.source;let K=d.get(q);K===void 0&&(K={},d.set(q,K));const X=W(x);if(X!==w.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[X].usedTimes++;const Se=K[w.__cacheKey];Se!==void 0&&(K[w.__cacheKey].usedTimes--,Se.usedTimes===0&&v(x)),w.__cacheKey=X,w.__webglTexture=K[X].texture}return U}function ct(w,x,U){return Math.floor(Math.floor(w/U)/x)}function at(w,x,U,q){const X=w.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,q,x.data);else{X.sort((Q,ae)=>Q.start-ae.start);let Se=0;for(let Q=1;Q<X.length;Q++){const ae=X[Se],ge=X[Q],Me=ae.start+ae.count,se=ct(ge.start,x.width,4),Be=ct(ae.start,x.width,4);ge.start<=Me+1&&se===Be&&ct(ge.start+ge.count-1,x.width,4)===se?ae.count=Math.max(ae.count,ge.start+ge.count-ae.start):(++Se,X[Se]=ge)}X.length=Se+1;const ie=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Q=0,ae=X.length;Q<ae;Q++){const ge=X[Q],Me=Math.floor(ge.start/4),se=Math.ceil(ge.count/4),Be=Me%x.width,L=Math.floor(Me/x.width),he=se,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,he,te,U,q,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Y(w,x,U){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const K=Ce(w,x),X=x.source;t.bindTexture(q,w.__webglTexture,i.TEXTURE0+U);const Se=n.get(X);if(X.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const ie=Ge.getPrimaries(Ge.workingColorSpace),xe=x.colorSpace===Zn?null:Ge.getPrimaries(x.colorSpace),we=x.colorSpace===Zn||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Q=g(x.image,!1,s.maxTextureSize);Q=nt(x,Q);const ae=r.convert(x.format,x.colorSpace),ge=r.convert(x.type);let Me=b(x.internalFormat,ae,ge,x.colorSpace,x.isVideoTexture);De(q,x);let se;const Be=x.mipmaps,L=x.isVideoTexture!==!0,he=Se.__version===void 0||K===!0,te=X.dataReady,de=T(x,Q);if(x.isDepthTexture)Me=M(x.format===fi,x.type),he&&(L?t.texStorage2D(i.TEXTURE_2D,1,Me,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,ae,ge,null));else if(x.isDataTexture)if(Be.length>0){L&&he&&t.texStorage2D(i.TEXTURE_2D,de,Me,Be[0].width,Be[0].height);for(let J=0,Z=Be.length;J<Z;J++)se=Be[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,ae,ge,se.data):t.texImage2D(i.TEXTURE_2D,J,Me,se.width,se.height,0,ae,ge,se.data);x.generateMipmaps=!1}else L?(he&&t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height),te&&at(x,Q,ae,ge)):t.texImage2D(i.TEXTURE_2D,0,Me,Q.width,Q.height,0,ae,ge,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,Be[0].width,Be[0].height,Q.depth);for(let J=0,Z=Be.length;J<Z;J++)if(se=Be[J],x.format!==dn)if(ae!==null)if(L){if(te)if(x.layerUpdates.size>0){const ne=Il(se.width,se.height,x.format,x.type);for(const Pe of x.layerUpdates){const it=se.data.subarray(Pe*ne/se.data.BYTES_PER_ELEMENT,(Pe+1)*ne/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Pe,se.width,se.height,1,ae,it)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,Q.depth,ae,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Me,se.width,se.height,Q.depth,0,se.data,0,0);else Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,se.width,se.height,Q.depth,ae,ge,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,Me,se.width,se.height,Q.depth,0,ae,ge,se.data)}else{L&&he&&t.texStorage2D(i.TEXTURE_2D,de,Me,Be[0].width,Be[0].height);for(let J=0,Z=Be.length;J<Z;J++)se=Be[J],x.format!==dn?ae!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(i.TEXTURE_2D,J,Me,se.width,se.height,0,se.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,se.width,se.height,ae,ge,se.data):t.texImage2D(i.TEXTURE_2D,J,Me,se.width,se.height,0,ae,ge,se.data)}else if(x.isDataArrayTexture)if(L){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,Q.width,Q.height,Q.depth),te)if(x.layerUpdates.size>0){const J=Il(Q.width,Q.height,x.format,x.type);for(const Z of x.layerUpdates){const ne=Q.data.subarray(Z*J/Q.data.BYTES_PER_ELEMENT,(Z+1)*J/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,ae,ge,ne)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(x.isData3DTexture)L?(he&&t.texStorage3D(i.TEXTURE_3D,de,Me,Q.width,Q.height,Q.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ae,ge,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Me,Q.width,Q.height,Q.depth,0,ae,ge,Q.data);else if(x.isFramebufferTexture){if(he)if(L)t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height);else{let J=Q.width,Z=Q.height;for(let ne=0;ne<de;ne++)t.texImage2D(i.TEXTURE_2D,ne,Me,J,Z,0,ae,ge,null),J>>=1,Z>>=1}}else if(Be.length>0){if(L&&he){const J=ve(Be[0]);t.texStorage2D(i.TEXTURE_2D,de,Me,J.width,J.height)}for(let J=0,Z=Be.length;J<Z;J++)se=Be[J],L?te&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,ae,ge,se):t.texImage2D(i.TEXTURE_2D,J,Me,ae,ge,se);x.generateMipmaps=!1}else if(L){if(he){const J=ve(Q);t.texStorage2D(i.TEXTURE_2D,de,Me,J.width,J.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,ge,Q)}else t.texImage2D(i.TEXTURE_2D,0,Me,ae,ge,Q);p(x)&&f(q),Se.__version=X.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function $(w,x,U){if(x.image.length!==6)return;const q=Ce(w,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+U);const X=n.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+U);const Se=Ge.getPrimaries(Ge.workingColorSpace),ie=x.colorSpace===Zn?null:Ge.getPrimaries(x.colorSpace),xe=x.colorSpace===Zn||Se===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,Q=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let Z=0;Z<6;Z++)!we&&!Q?ae[Z]=g(x.image[Z],!0,s.maxCubemapSize):ae[Z]=Q?x.image[Z].image:x.image[Z],ae[Z]=nt(x,ae[Z]);const ge=ae[0],Me=r.convert(x.format,x.colorSpace),se=r.convert(x.type),Be=b(x.internalFormat,Me,se,x.colorSpace),L=x.isVideoTexture!==!0,he=X.__version===void 0||q===!0,te=K.dataReady;let de=T(x,ge);De(i.TEXTURE_CUBE_MAP,x);let J;if(we){L&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,ge.width,ge.height);for(let Z=0;Z<6;Z++){J=ae[Z].mipmaps;for(let ne=0;ne<J.length;ne++){const Pe=J[ne];x.format!==dn?Me!==null?L?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,0,0,Pe.width,Pe.height,Me,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,Be,Pe.width,Pe.height,0,Pe.data):Ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,0,0,Pe.width,Pe.height,Me,se,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne,Be,Pe.width,Pe.height,0,Me,se,Pe.data)}}}else{if(J=x.mipmaps,L&&he){J.length>0&&de++;const Z=ve(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ae[Z].width,ae[Z].height,Me,se,ae[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,ae[Z].width,ae[Z].height,0,Me,se,ae[Z].data);for(let ne=0;ne<J.length;ne++){const it=J[ne].image[Z].image;L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,0,0,it.width,it.height,Me,se,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,Be,it.width,it.height,0,Me,se,it.data)}}else{L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,se,ae[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Me,se,ae[Z]);for(let ne=0;ne<J.length;ne++){const Pe=J[ne];L?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,0,0,Me,se,Pe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ne+1,Be,Me,se,Pe.image[Z])}}}p(x)&&f(i.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pe(w,x,U,q,K,X){const Se=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),xe=b(U.internalFormat,Se,ie,U.colorSpace),we=n.get(x),Q=n.get(U);if(Q.__renderTarget=x,!we.__hasExternalTextures){const ae=Math.max(1,x.width>>X),ge=Math.max(1,x.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,xe,ae,ge,x.depth,0,Se,ie,null):t.texImage2D(K,X,xe,ae,ge,0,Se,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,Q.__webglTexture,0,P(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(w,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=M(x.stencilBuffer,K),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),X,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const q=x.textures;for(let K=0;K<q.length;K++){const X=q[K],Se=r.convert(X.format,X.colorSpace),ie=r.convert(X.type),xe=b(X.internalFormat,Se,ie,X.colorSpace);_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),xe,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(w,x,U){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),De(i.TEXTURE_CUBE_MAP,x.depthTexture);const we=r.convert(x.depthTexture.format),Q=r.convert(x.depthTexture.type);let ae;x.depthTexture.format===Vn?ae=i.DEPTH_COMPONENT24:x.depthTexture.format===fi&&(ae=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ae,x.width,x.height,0,we,Q,null)}}else H(x.depthTexture,0);const X=K.__webglTexture,Se=P(x),ie=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,xe=x.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vn)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ie,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ie,X,0);else if(x.depthTexture.format===fi)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ie,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ie,X,0);else throw new Error("Unknown depthTexture format")}function We(w){const x=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const q=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)_e(x.__webglFramebuffer[q],w,q);else{const q=w.texture.mipmaps;q&&q.length>0?_e(x.__webglFramebuffer[0],w,0):_e(x.__webglFramebuffer,w,0)}else if(U){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),Le(x.__webglDepthbuffer[q],w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{const q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Le(x.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(w,x,U){const q=n.get(w);x!==void 0&&pe(q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&We(w)}function Ve(w){const x=w.texture,U=n.get(w),q=n.get(x);w.addEventListener("dispose",R);const K=w.textures,X=w.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),X){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let xe=0;xe<x.mipmaps.length;xe++)U.__webglFramebuffer[ie][xe]=i.createFramebuffer()}else U.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<x.mipmaps.length;ie++)U.__webglFramebuffer[ie]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ie=0,xe=K.length;ie<xe;ie++){const we=n.get(K[ie]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&_t(w)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){const xe=K[ie];U.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);const we=r.convert(xe.format,xe.colorSpace),Q=r.convert(xe.type),ae=b(xe.internalFormat,we,Q,xe.colorSpace,w.isXRRenderTarget===!0),ge=P(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Le(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),De(i.TEXTURE_CUBE_MAP,x);for(let ie=0;ie<6;ie++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(U.__webglFramebuffer[ie][xe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else pe(U.__webglFramebuffer[ie],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ie=0,xe=K.length;ie<xe;ie++){const we=K[ie],Q=n.get(we);let ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,Q.__webglTexture),De(ae,we),pe(U.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+ie,ae,0),p(we)&&f(ae)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),De(ie,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(U.__webglFramebuffer[xe],w,x,i.COLOR_ATTACHMENT0,ie,xe);else pe(U.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ie,0);p(x)&&f(ie),t.unbindTexture()}w.depthBuffer&&We(w)}function Ye(w){const x=w.textures;for(let U=0,q=x.length;U<q;U++){const K=x[U];if(p(K)){const X=E(w),Se=n.get(K).__webglTexture;t.bindTexture(X,Se),f(X),t.unbindTexture()}}}const Qe=[],Oe=[];function gt(w){if(w.samples>0){if(_t(w)===!1){const x=w.textures,U=w.width,q=w.height;let K=i.COLOR_BUFFER_BIT;const X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),ie=x.length>1;if(ie)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=w.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<x.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const Q=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),u===!0&&(Qe.length=0,Oe.length=0,Qe.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Qe.push(X),Oe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);const Q=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&u){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function P(w){return Math.min(s.maxSamples,w.samples)}function _t(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qe(w){const x=a.render.frame;c.get(w)!==x&&(c.set(w,x),w.update())}function nt(w,x){const U=w.colorSpace,q=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==Wi&&U!==Zn&&(Ge.getTransfer(U)===Ke?(q!==dn||K!==Qt)&&Ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),x}function ve(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=Tt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function J0(i,e){function t(n,s=Zn){let r;const a=Ge.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Rc)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===bn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Dc)return i.ALPHA;if(n===Lc)return i.RGB;if(n===dn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===ar||n===or||n===lr||n===cr)if(a===Ke)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===za||n===ka||n===Va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ha||n===Ga)return a===Ke?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xa)return r.COMPRESSED_R11_EAC;if(n===qa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ya)return r.COMPRESSED_RG11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Za||n===Ka||n===$a||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Za)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$a)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ja)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===Ke?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===uo||n===ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===Ke?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eg=`
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

}`;class tg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Q0,fragmentShader:eg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Cs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ng extends gi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",u=1,l=null,c=null,h=null,d=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new tg,f={},E=t.getContextAttributes();let b=null,M=null;const T=[],A=[],R=new Re;let I=null;const v=new Yt;v.viewport=new pt;const S=new Yt;S.viewport=new pt;const C=[v,S],F=new ld;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=T[Y];return $===void 0&&($=new aa,T[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=T[Y];return $===void 0&&($=new aa,T[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=T[Y];return $===void 0&&($=new aa,T[Y]=$),$.getHandSpace()};function H(Y){const $=A.indexOf(Y.inputSource);if($===-1)return;const pe=T[$];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<T.length;Y++){const $=A[Y];$!==null&&(A[Y]=null,T[Y].disconnect($))}O=null,W=null,p.reset();for(const Y in f)delete f[Y];e.setRenderTarget(b),m=null,d=null,h=null,s=null,M=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,_e=null;E.depth&&(_e=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?fi:Vn,Le=E.stencil?gs:bn);const We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new yn(d.textureWidth,d.textureHeight,{format:dn,type:Qt,depthTexture:new Ms(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new yn(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await s.requestReferenceSpace(o),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Y){for(let $=0;$<Y.removed.length;$++){const pe=Y.removed[$],Le=A.indexOf(pe);Le>=0&&(A[Le]=null,T[Le].disconnect(pe))}for(let $=0;$<Y.added.length;$++){const pe=Y.added[$];let Le=A.indexOf(pe);if(Le===-1){for(let We=0;We<T.length;We++)if(We>=A.length){A.push(pe),Le=We;break}else if(A[We]===null){A[We]=pe,Le=We;break}if(Le===-1)break}const _e=T[Le];_e&&_e.connect(pe)}}const j=new D,re=new D;function ee(Y,$,pe){j.setFromMatrixPosition($.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Le=j.distanceTo(re),_e=$.projectionMatrix.elements,We=pe.projectionMatrix.elements,Tt=_e[14]/(_e[10]-1),Ve=_e[14]/(_e[10]+1),Ye=(_e[9]+1)/_e[5],Qe=(_e[9]-1)/_e[5],Oe=(_e[8]-1)/_e[0],gt=(We[8]+1)/We[0],P=Tt*Oe,_t=Tt*gt,qe=Le/(-Oe+gt),nt=qe*-Oe;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(nt),Y.translateZ(qe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),_e[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ve=Tt+qe,w=Ve+qe,x=P-nt,U=_t+(Le-nt),q=Ye*Ve/w*ve,K=Qe*Ve/w*ve;Y.projectionMatrix.makePerspective(x,U,q,K,ve,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,pe=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),F.near=S.near=v.near=$,F.far=S.far=v.far=pe,(O!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),O=F.near,W=F.far),F.layers.mask=Y.layers.mask|6,v.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const Le=Y.parent,_e=F.cameras;ce(F,Le);for(let We=0;We<_e.length;We++)ce(_e[We],Le);_e.length===2?ee(F,v,S):F.projectionMatrix.copy(v.projectionMatrix),De(Y,F,Le)};function De(Y,$,pe){pe===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Xi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&m===null))return u},this.setFoveation=function(Y){u=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let Ce=null;function ct(Y,$){if(c=$.getViewerPose(l||a),_=$,c!==null){const pe=c.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Le=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Le=!0);for(let Ve=0;Ve<pe.length;Ve++){const Ye=pe[Ve];let Qe=null;if(m!==null)Qe=m.getViewport(Ye);else{const gt=h.getViewSubImage(d,Ye);Qe=gt.viewport,Ve===0&&(e.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(M))}let Oe=C[Ve];Oe===void 0&&(Oe=new Yt,Oe.layers.enable(Ve),Oe.viewport=new pt,C[Ve]=Oe),Oe.matrix.fromArray(Ye.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ye.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ve===0&&(F.matrix.copy(Oe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Le===!0&&F.cameras.push(Oe)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Ve=h.getDepthInformation(pe[0]);Ve&&Ve.isValid&&Ve.texture&&p.init(Ve,s.renderState)}if(_e&&_e.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<pe.length;Ve++){const Ye=pe[Ve].camera;if(Ye){let Qe=f[Ye];Qe||(Qe=new Xc,f[Ye]=Qe);const Oe=h.getCameraImage(Ye);Qe.sourceTexture=Oe}}}}for(let pe=0;pe<T.length;pe++){const Le=A[pe],_e=T[pe];Le!==null&&_e!==void 0&&_e.update(Le,$,l||a)}Ce&&Ce(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const at=new $c;at.setAnimationLoop(ct),this.setAnimationLoop=function(Y){Ce=Y},this.dispose=function(){}}}const ci=new Tn,ig=new rt;function sg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,kc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(r(p,f),_(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?u(p,f,E,b):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Nt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Nt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),b=E.envMap,M=E.envMapRotation;b&&(p.envMap.value=b,ci.copy(M),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ci)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function u(p,f,E,b){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=b*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function l(E,b){let M=s[E.id];M===void 0&&(_(E),M=c(E),s[E.id]=M,E.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(E,T);const A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function c(E){const b=h();E.__bindingPointIndex=b;const M=i.createBuffer(),T=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=s[E.id],M=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,R=M.length;A<R;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,S=I.length;v<S;v++){const C=I[v];if(m(C,A,v,T)===!0){const F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let H=0;H<O.length;H++){const G=O[H],z=g(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,F+W,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,b,M,T){const A=E.value,R=b+"_"+M;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const I=T[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return T[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(E){const b=E.uniforms;let M=0;const T=16;for(let R=0,I=b.length;R<I;R++){const v=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,C=v.length;S<C;S++){const F=v[S],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,H=O.length;W<H;W++){const G=O[W],z=g(G),j=M%T,re=j%z.boundary,ee=j+re;M+=re,ee!==0&&T-ee<z.storage&&(M+=T-ee),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=z.storage}}}const A=M%T;return A>0&&(M+=T-A),E.__size=M,E.__cache={},this}function g(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?Ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ae("WebGLRenderer: Unsupported uniform value type.",E),b}function p(E){const b=E.target;b.removeEventListener("dispose",p);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:u,update:l,dispose:f}}const ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function og(){return mn===null&&(mn=new Xh(ag,16,16,Gi,kn),mn.name="DFG_LUT",mn.minFilter=Mt,mn.magFilter=Mt,mn.wrapS=xn,mn.wrapT=xn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class lg{constructor(e={}){const{canvas:t=ih(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=m,p=new Set([Uo,Io,Lo]),f=new Set([Qt,bn,ms,gs,Po,Do]),E=new Uint32Array(4),b=new Int32Array(4);let M=null,T=null;const A=[],R=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=qt;let C=0,F=0,O=null,W=-1,H=null;const G=new pt,z=new pt;let j=null;const re=new ke(0);let ee=0,ce=t.width,De=t.height,Ce=1,ct=null,at=null;const Y=new pt(0,0,ce,De),$=new pt(0,0,ce,De);let pe=!1;const Le=new ko;let _e=!1,We=!1;const Tt=new rt,Ve=new D,Ye=new pt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function gt(){return O===null?Ce:1}let P=n;function _t(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",je,!1),P===null){const N="webgl2";if(P=_t(N,y),P===null)throw _t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw He("WebGLRenderer: "+y.message),y}let qe,nt,ve,w,x,U,q,K,X,Se,ie,xe,we,Q,ae,ge,Me,se,Be,L,he,te,de,J;function Z(){qe=new om(P),qe.init(),te=new J0(P,qe),nt=new Jp(P,qe,e,te),ve=new K0(P,qe),nt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),w=new um(P),x=new N0,U=new $0(P,qe,ve,x,nt,te,w),q=new em(v),K=new am(v),X=new fd(P),de=new Kp(P,X),Se=new lm(P,X,w,de),ie=new dm(P,Se,X,w),Be=new hm(P,nt,U),ge=new Qp(x),xe=new U0(v,q,K,qe,nt,de,ge),we=new sg(v,x),Q=new O0,ae=new G0(qe),se=new Zp(v,q,K,ve,ie,_,u),Me=new j0(v,ie,nt),J=new rg(P,w,nt,ve),L=new $p(P,qe,w),he=new cm(P,qe,w),w.programs=xe.programs,v.capabilities=nt,v.extensions=qe,v.properties=x,v.renderLists=Q,v.shadowMap=Me,v.state=ve,v.info=w}Z(),g!==Qt&&(I=new pm(g,t.width,t.height,s,r));const ne=new ng(v,P);this.xr=ne,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(y){y!==void 0&&(Ce=y,this.setSize(ce,De,!1))},this.getSize=function(y){return y.set(ce,De)},this.setSize=function(y,N,V=!0){if(ne.isPresenting){Ae("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=y,De=N,t.width=Math.floor(y*Ce),t.height=Math.floor(N*Ce),V===!0&&(t.style.width=y+"px",t.style.height=N+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(ce*Ce,De*Ce).floor()},this.setDrawingBufferSize=function(y,N,V){ce=y,De=N,Ce=V,t.width=Math.floor(y*V),t.height=Math.floor(N*V),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(g===Qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(G)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,V,k){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,V,k),ve.viewport(G.copy(Y).multiplyScalar(Ce).round())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,N,V,k){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,N,V,k),ve.scissor(z.copy($).multiplyScalar(Ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(y){ve.setScissorTest(pe=y)},this.setOpaqueSort=function(y){ct=y},this.setTransparentSort=function(y){at=y},this.getClearColor=function(y){return y.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,V=!0){let k=0;if(y){let B=!1;if(O!==null){const oe=O.texture.format;B=p.has(oe)}if(B){const oe=O.texture.type,fe=f.has(oe),ue=se.getClearColor(),me=se.getClearAlpha(),ye=ue.r,Te=ue.g,Ee=ue.b;fe?(E[0]=ye,E[1]=Te,E[2]=Ee,E[3]=me,P.clearBufferuiv(P.COLOR,0,E)):(b[0]=ye,b[1]=Te,b[2]=Ee,b[3]=me,P.clearBufferiv(P.COLOR,0,b))}else k|=P.COLOR_BUFFER_BIT}N&&(k|=P.DEPTH_BUFFER_BIT),V&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",je,!1),se.dispose(),Q.dispose(),ae.dispose(),x.dispose(),q.dispose(),K.dispose(),ie.dispose(),de.dispose(),J.dispose(),xe.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",qo),ne.removeEventListener("sessionend",Yo),ni.stop()};function Pe(y){y.preventDefault(),al("WebGLRenderer: Context Lost."),S=!0}function it(){al("WebGLRenderer: Context Restored."),S=!1;const y=w.autoReset,N=Me.enabled,V=Me.autoUpdate,k=Me.needsUpdate,B=Me.type;Z(),w.autoReset=y,Me.enabled=N,Me.autoUpdate=V,Me.needsUpdate=k,Me.type=B}function je(y){He("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pn(y){const N=y.target;N.removeEventListener("dispose",pn),Cn(N)}function Cn(y){_u(y),x.remove(y)}function _u(y){const N=x.get(y).programs;N!==void 0&&(N.forEach(function(V){xe.releaseProgram(V)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,V,k,B,oe){N===null&&(N=Qe);const fe=B.isMesh&&B.matrixWorld.determinant()<0,ue=vu(y,N,V,k,B);ve.setMaterial(k,fe);let me=V.index,ye=1;if(k.wireframe===!0){if(me=Se.getWireframeAttribute(V),me===void 0)return;ye=2}const Te=V.drawRange,Ee=V.attributes.position;let ze=Te.start*ye,$e=(Te.start+Te.count)*ye;oe!==null&&(ze=Math.max(ze,oe.start*ye),$e=Math.min($e,(oe.start+oe.count)*ye)),me!==null?(ze=Math.max(ze,0),$e=Math.min($e,me.count)):Ee!=null&&(ze=Math.max(ze,0),$e=Math.min($e,Ee.count));const ut=$e-ze;if(ut<0||ut===1/0)return;de.setup(B,k,ue,V,me);let ht,et=L;if(me!==null&&(ht=X.get(me),et=he,et.setIndex(ht)),B.isMesh)k.wireframe===!0?(ve.setLineWidth(k.wireframeLinewidth*gt()),et.setMode(P.LINES)):et.setMode(P.TRIANGLES);else if(B.isLine){let be=k.linewidth;be===void 0&&(be=1),ve.setLineWidth(be*gt()),B.isLineSegments?et.setMode(P.LINES):B.isLineLoop?et.setMode(P.LINE_LOOP):et.setMode(P.LINE_STRIP)}else B.isPoints?et.setMode(P.POINTS):B.isSprite&&et.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)xs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const be=B._multiDrawStarts,Ze=B._multiDrawCounts,Xe=B._multiDrawCount,jt=me?X.get(me).bytesPerElement:1,xi=x.get(k).currentProgram.getUniforms();for(let Zt=0;Zt<Xe;Zt++)xi.setValue(P,"_gl_DrawID",Zt),et.render(be[Zt]/jt,Ze[Zt])}else if(B.isInstancedMesh)et.renderInstances(ze,ut,B.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ze=Math.min(V.instanceCount,be);et.renderInstances(ze,ut,Ze)}else et.render(ze,ut)};function Xo(y,N,V){y.transparent===!0&&y.side===Ut&&y.forceSinglePass===!1?(y.side=Nt,y.needsUpdate=!0,Ds(y,N,V),y.side=Jn,y.needsUpdate=!0,Ds(y,N,V),y.side=Ut):Ds(y,N,V)}this.compile=function(y,N,V=null){V===null&&(V=y),T=ae.get(V),T.init(N),R.push(T),V.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),y!==V&&y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(T.pushLight(B),B.castShadow&&T.pushShadow(B))}),T.setupLights();const k=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const oe=B.material;if(oe)if(Array.isArray(oe))for(let fe=0;fe<oe.length;fe++){const ue=oe[fe];Xo(ue,V,B),k.add(ue)}else Xo(oe,V,B),k.add(oe)}),T=R.pop(),k},this.compileAsync=function(y,N,V=null){const k=this.compile(y,N,V);return new Promise(B=>{function oe(){if(k.forEach(function(fe){x.get(fe).currentProgram.isReady()&&k.delete(fe)}),k.size===0){B(y);return}setTimeout(oe,10)}qe.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Fr=null;function xu(y){Fr&&Fr(y)}function qo(){ni.stop()}function Yo(){ni.start()}const ni=new $c;ni.setAnimationLoop(xu),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(y){Fr=y,ne.setAnimationLoop(y),y===null?ni.stop():ni.start()},ne.addEventListener("sessionstart",qo),ne.addEventListener("sessionend",Yo),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const V=ne.enabled===!0&&ne.isPresenting===!0,k=I!==null&&(O===null||V)&&I.begin(v,O);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,O),T=ae.get(y,R.length),T.init(N),R.push(T),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Le.setFromProjectionMatrix(Tt,Mn,N.reversedDepth),We=this.localClippingEnabled,_e=ge.init(this.clippingPlanes,We),M=Q.get(y,A.length),M.init(),A.push(M),ne.enabled===!0&&ne.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Or(fe,N,-1/0,v.sortObjects)}Or(y,N,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(ct,at),Oe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Oe&&se.addToRenderList(M,y),this.info.render.frame++,_e===!0&&ge.beginShadows();const B=T.state.shadowsArray;if(Me.render(B,y,N),_e===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(k&&I.hasRenderPass())===!1){const fe=M.opaque,ue=M.transmissive;if(T.setupLights(),N.isArrayCamera){const me=N.cameras;if(ue.length>0)for(let ye=0,Te=me.length;ye<Te;ye++){const Ee=me[ye];Zo(fe,ue,y,Ee)}Oe&&se.render(y);for(let ye=0,Te=me.length;ye<Te;ye++){const Ee=me[ye];jo(M,y,Ee,Ee.viewport)}}else ue.length>0&&Zo(fe,ue,y,N),Oe&&se.render(y),jo(M,y,N)}O!==null&&F===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),k&&I.end(v),y.isScene===!0&&y.onAfterRender(v,y,N),de.resetDefaultState(),W=-1,H=null,R.pop(),R.length>0?(T=R[R.length-1],_e===!0&&ge.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Or(y,N,V,k){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Le.intersectsSprite(y)){k&&Ye.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Tt);const fe=ie.update(y),ue=y.material;ue.visible&&M.push(y,fe,ue,V,Ye.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Le.intersectsObject(y))){const fe=ie.update(y),ue=y.material;if(k&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ye.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ye.copy(fe.boundingSphere.center)),Ye.applyMatrix4(y.matrixWorld).applyMatrix4(Tt)),Array.isArray(ue)){const me=fe.groups;for(let ye=0,Te=me.length;ye<Te;ye++){const Ee=me[ye],ze=ue[Ee.materialIndex];ze&&ze.visible&&M.push(y,fe,ze,V,Ye.z,Ee)}}else ue.visible&&M.push(y,fe,ue,V,Ye.z,null)}}const oe=y.children;for(let fe=0,ue=oe.length;fe<ue;fe++)Or(oe[fe],N,V,k)}function jo(y,N,V,k){const{opaque:B,transmissive:oe,transparent:fe}=y;T.setupLightsView(V),_e===!0&&ge.setGlobalState(v.clippingPlanes,V),k&&ve.viewport(G.copy(k)),B.length>0&&Ps(B,N,V),oe.length>0&&Ps(oe,N,V),fe.length>0&&Ps(fe,N,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Zo(y,N,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){const ze=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new yn(1,1,{generateMipmaps:!0,type:ze?kn:Qt,minFilter:Kn,samples:nt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}const oe=T.state.transmissionRenderTarget[k.id],fe=k.viewport||G;oe.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const ue=v.getRenderTarget(),me=v.getActiveCubeFace(),ye=v.getActiveMipmapLevel();v.setRenderTarget(oe),v.getClearColor(re),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&se.render(V);const Te=v.toneMapping;v.toneMapping=Sn;const Ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),_e===!0&&ge.setGlobalState(v.clippingPlanes,k),Ps(y,V,k),U.updateMultisampleRenderTarget(oe),U.updateRenderTargetMipmap(oe),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let $e=0,ut=N.length;$e<ut;$e++){const ht=N[$e],{object:et,geometry:be,material:Ze,group:Xe}=ht;if(Ze.side===Ut&&et.layers.test(k.layers)){const jt=Ze.side;Ze.side=Nt,Ze.needsUpdate=!0,Ko(et,V,k,be,Ze,Xe),Ze.side=jt,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(U.updateMultisampleRenderTarget(oe),U.updateRenderTargetMipmap(oe))}v.setRenderTarget(ue,me,ye),v.setClearColor(re,ee),Ee!==void 0&&(k.viewport=Ee),v.toneMapping=Te}function Ps(y,N,V){const k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,oe=y.length;B<oe;B++){const fe=y[B],{object:ue,geometry:me,group:ye}=fe;let Te=fe.material;Te.allowOverride===!0&&k!==null&&(Te=k),ue.layers.test(V.layers)&&Ko(ue,N,V,me,Te,ye)}}function Ko(y,N,V,k,B,oe){y.onBeforeRender(v,N,V,k,B,oe),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(v,N,V,k,y,oe),B.transparent===!0&&B.side===Ut&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,v.renderBufferDirect(V,N,k,B,y,oe),B.side=Jn,B.needsUpdate=!0,v.renderBufferDirect(V,N,k,B,y,oe),B.side=Ut):v.renderBufferDirect(V,N,k,B,y,oe),y.onAfterRender(v,N,V,k,B,oe)}function Ds(y,N,V){N.isScene!==!0&&(N=Qe);const k=x.get(y),B=T.state.lights,oe=T.state.shadowsArray,fe=B.state.version,ue=xe.getParameters(y,B.state,oe,N,V),me=xe.getProgramCacheKey(ue);let ye=k.programs;k.environment=y.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(y.isMeshStandardMaterial?K:q).get(y.envMap||k.environment),k.envMapRotation=k.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,ye===void 0&&(y.addEventListener("dispose",pn),ye=new Map,k.programs=ye);let Te=ye.get(me);if(Te!==void 0){if(k.currentProgram===Te&&k.lightsStateVersion===fe)return Jo(y,ue),Te}else ue.uniforms=xe.getUniforms(y),y.onBeforeCompile(ue,v),Te=xe.acquireProgram(ue,me),ye.set(me,Te),k.uniforms=ue.uniforms;const Ee=k.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=ge.uniform),Jo(y,ue),k.needsLights=Su(y),k.lightsStateVersion=fe,k.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Te,k.uniformsList=null,Te}function $o(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=hr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Jo(y,N){const V=x.get(y);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function vu(y,N,V,k,B){N.isScene!==!0&&(N=Qe),U.resetTextureUnits();const oe=N.fog,fe=k.isMeshStandardMaterial?N.environment:null,ue=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Wi,me=(k.isMeshStandardMaterial?K:q).get(k.envMap||fe),ye=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Te=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!V.morphAttributes.position,ze=!!V.morphAttributes.normal,$e=!!V.morphAttributes.color;let ut=Sn;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ht=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=ht!==void 0?ht.length:0,be=x.get(k),Ze=T.state.lights;if(_e===!0&&(We===!0||y!==H)){const Ot=y===H&&k.id===W;ge.setState(k,y,Ot)}let Xe=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ze.state.version||be.outputColorSpace!==ue||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==me||k.fog===!0&&be.fog!==oe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ge.numPlanes||be.numIntersection!==ge.numIntersection)||be.vertexAlphas!==ye||be.vertexTangents!==Te||be.morphTargets!==Ee||be.morphNormals!==ze||be.morphColors!==$e||be.toneMapping!==ut||be.morphTargetsCount!==et)&&(Xe=!0):(Xe=!0,be.__version=k.version);let jt=be.currentProgram;Xe===!0&&(jt=Ds(k,N,B));let xi=!1,Zt=!1,Qi=!1;const st=jt.getUniforms(),Gt=be.uniforms;if(ve.useProgram(jt.program)&&(xi=!0,Zt=!0,Qi=!0),k.id!==W&&(W=k.id,Zt=!0),xi||H!==y){ve.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),st.setValue(P,"projectionMatrix",y.projectionMatrix),st.setValue(P,"viewMatrix",y.matrixWorldInverse);const Wt=st.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,Ve.setFromMatrixPosition(y.matrixWorld)),nt.logarithmicDepthBuffer&&st.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&st.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),H!==y&&(H=y,Zt=!0,Qi=!0)}if(be.needsLights&&(Ze.state.directionalShadowMap.length>0&&st.setValue(P,"directionalShadowMap",Ze.state.directionalShadowMap,U),Ze.state.spotShadowMap.length>0&&st.setValue(P,"spotShadowMap",Ze.state.spotShadowMap,U),Ze.state.pointShadowMap.length>0&&st.setValue(P,"pointShadowMap",Ze.state.pointShadowMap,U)),B.isSkinnedMesh){st.setOptional(P,B,"bindMatrix"),st.setOptional(P,B,"bindMatrixInverse");const Ot=B.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),st.setValue(P,"boneTexture",Ot.boneTexture,U))}B.isBatchedMesh&&(st.setOptional(P,B,"batchingTexture"),st.setValue(P,"batchingTexture",B._matricesTexture,U),st.setOptional(P,B,"batchingIdTexture"),st.setValue(P,"batchingIdTexture",B._indirectTexture,U),st.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&st.setValue(P,"batchingColorTexture",B._colorsTexture,U));const nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Be.update(B,V,jt),(Zt||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,st.setValue(P,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Gt.envMap.value=me,Gt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Gt.envMapIntensity.value=N.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=og()),Zt&&(st.setValue(P,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Mu(Gt,Qi),oe&&k.fog===!0&&we.refreshFogUniforms(Gt,oe),we.refreshMaterialUniforms(Gt,k,Ce,De,T.state.transmissionRenderTarget[y.id]),hr.upload(P,$o(be),Gt,U)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(hr.upload(P,$o(be),Gt,U),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&st.setValue(P,"center",B.center),st.setValue(P,"modelViewMatrix",B.modelViewMatrix),st.setValue(P,"normalMatrix",B.normalMatrix),st.setValue(P,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ot=k.uniformsGroups;for(let Wt=0,Br=Ot.length;Wt<Br;Wt++){const ii=Ot[Wt];J.update(ii,jt),J.bind(ii,jt)}}return jt}function Mu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Su(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,N,V){const k=x.get(y);k.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),x.get(y.texture).__webglTexture=N,x.get(y.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:V,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const V=x.get(y);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const yu=P.createFramebuffer();this.setRenderTarget=function(y,N=0,V=0){O=y,C=N,F=V;let k=null,B=!1,oe=!1;if(y){const ue=x.get(y);if(ue.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),G.copy(y.viewport),z.copy(y.scissor),j=y.scissorTest,ve.viewport(G),ve.scissor(z),ve.setScissorTest(j),W=-1;return}else if(ue.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(ue.__hasExternalTextures)U.rebindTextures(y,x.get(y.texture).__webglTexture,x.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&x.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const me=y.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(oe=!0);const ye=x.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ye[N])?k=ye[N][V]:k=ye[N],B=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?k=x.get(y).__webglMultisampledFramebuffer:Array.isArray(ye)?k=ye[V]:k=ye,G.copy(y.viewport),z.copy(y.scissor),j=y.scissorTest}else G.copy(Y).multiplyScalar(Ce).floor(),z.copy($).multiplyScalar(Ce).floor(),j=pe;if(V!==0&&(k=yu),ve.bindFramebuffer(P.FRAMEBUFFER,k)&&ve.drawBuffers(y,k),ve.viewport(G),ve.scissor(z),ve.setScissorTest(j),B){const ue=x.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(oe){const ue=N;for(let me=0;me<y.textures.length;me++){const ye=x.get(y.textures[me]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+me,ye.__webglTexture,V,ue)}}else if(y!==null&&V!==0){const ue=x.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,V)}W=-1},this.readRenderTargetPixels=function(y,N,V,k,B,oe,fe,ue=0){if(!(y&&y.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(P.FRAMEBUFFER,me);try{const ye=y.textures[ue],Te=ye.format,Ee=ye.type;if(!nt.textureFormatReadable(Te)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ee)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-k&&V>=0&&V<=y.height-B&&(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(N,V,k,B,te.convert(Te),te.convert(Ee),oe))}finally{const ye=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(y,N,V,k,B,oe,fe,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(N>=0&&N<=y.width-k&&V>=0&&V<=y.height-B){ve.bindFramebuffer(P.FRAMEBUFFER,me);const ye=y.textures[ue],Te=ye.format,Ee=ye.type;if(!nt.textureFormatReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.bufferData(P.PIXEL_PACK_BUFFER,oe.byteLength,P.STREAM_READ),y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(N,V,k,B,te.convert(Te),te.convert(Ee),0);const $e=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,$e);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await sh(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ze),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,oe),P.deleteBuffer(ze),P.deleteSync(ut),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,V=0){const k=Math.pow(2,-V),B=Math.floor(y.image.width*k),oe=Math.floor(y.image.height*k),fe=N!==null?N.x:0,ue=N!==null?N.y:0;U.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,fe,ue,B,oe),ve.unbindTexture()};const Eu=P.createFramebuffer(),bu=P.createFramebuffer();this.copyTextureToTexture=function(y,N,V=null,k=null,B=0,oe=null){oe===null&&(B!==0?(xs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let fe,ue,me,ye,Te,Ee,ze,$e,ut;const ht=y.isCompressedTexture?y.mipmaps[oe]:y.image;if(V!==null)fe=V.max.x-V.min.x,ue=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,ye=V.min.x,Te=V.min.y,Ee=V.isBox3?V.min.z:0;else{const nn=Math.pow(2,-B);fe=Math.floor(ht.width*nn),ue=Math.floor(ht.height*nn),y.isDataArrayTexture?me=ht.depth:y.isData3DTexture?me=Math.floor(ht.depth*nn):me=1,ye=0,Te=0,Ee=0}k!==null?(ze=k.x,$e=k.y,ut=k.z):(ze=0,$e=0,ut=0);const et=te.convert(N.format),be=te.convert(N.type);let Ze;N.isData3DTexture?(U.setTexture3D(N,0),Ze=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),Ze=P.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),Ze=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Xe=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xi=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),Qi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee);const st=y.isDataArrayTexture||y.isData3DTexture,Gt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const nn=x.get(y),Ot=x.get(N),Wt=x.get(nn.__renderTarget),Br=x.get(Ot.__renderTarget);ve.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let ii=0;ii<me;ii++)st&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(y).__webglTexture,B,Ee+ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(N).__webglTexture,oe,ut+ii)),P.blitFramebuffer(ye,Te,fe,ue,ze,$e,fe,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||x.has(y)){const nn=x.get(y),Ot=x.get(N);ve.bindFramebuffer(P.READ_FRAMEBUFFER,Eu),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,bu);for(let Wt=0;Wt<me;Wt++)st?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,B,Ee+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,B),Gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,oe,ut+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ot.__webglTexture,oe),B!==0?P.blitFramebuffer(ye,Te,fe,ue,ze,$e,fe,ue,P.COLOR_BUFFER_BIT,P.NEAREST):Gt?P.copyTexSubImage3D(Ze,oe,ze,$e,ut+Wt,ye,Te,fe,ue):P.copyTexSubImage2D(Ze,oe,ze,$e,ye,Te,fe,ue);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Gt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Ze,oe,ze,$e,ut,fe,ue,me,et,be,ht.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Ze,oe,ze,$e,ut,fe,ue,me,et,ht.data):P.texSubImage3D(Ze,oe,ze,$e,ut,fe,ue,me,et,be,ht):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,oe,ze,$e,fe,ue,et,be,ht.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,oe,ze,$e,ht.width,ht.height,et,ht.data):P.texSubImage2D(P.TEXTURE_2D,oe,ze,$e,fe,ue,et,be,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Qi),oe===0&&N.generateMipmaps&&P.generateMipmap(Ze),ve.unbindTexture()},this.initRenderTarget=function(y){x.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){C=0,F=0,O=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}}const ic={type:"change"},Go={type:"start"},nu={type:"end"},sr=new ws,sc=new Fn,cg=Math.cos(70*vt.DEG2RAD),yt=new D,Xt=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class ug extends hd{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:Fi.ROTATE,TWO:Fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new mi,this._lastTargetPosition=new D,this._quat=new mi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ll,this._sphericalDelta=new Ll,this._scale=1,this._panOffset=new D,this._rotateStart=new Re,this._rotateEnd=new Re,this._rotateDelta=new Re,this._panStart=new Re,this._panEnd=new Re,this._panDelta=new Re,this._dollyStart=new Re,this._dollyEnd=new Re,this._dollyDelta=new Re,this._dollyDirection=new D,this._mouse=new Re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dg.bind(this),this._onPointerDown=hg.bind(this),this._onPointerUp=fg.bind(this),this._onContextMenu=Mg.bind(this),this._onMouseWheel=gg.bind(this),this._onKeyDown=_g.bind(this),this._onTouchStart=xg.bind(this),this._onTouchMove=vg.bind(this),this._onMouseDown=pg.bind(this),this._onMouseMove=mg.bind(this),this._interceptControlDown=Sg.bind(this),this._interceptControlUp=yg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=Je.NONE}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const u=o-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),r=!!u}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=u!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(sr.origin.copy(this.object.position),sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(sr.direction))<cg?this.object.lookAt(this.target):(sc.setFromNormalAndCoplanarPoint(this.object.up,this.target),sr.intersectPlane(sc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function dg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nu),this.state=Je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Je.DOLLY;break;case fn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}break;case fn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Go)}function mg(i){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(i.preventDefault(),this.dispatchEvent(Go),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(nu))}function _g(i){this.enabled!==!1&&this._handleKeyDown(i)}function xg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Fi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Je.TOUCH_ROTATE;break;case Fi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case Fi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Je.TOUCH_DOLLY_PAN;break;case Fi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Go)}function vg(i){switch(this._trackPointer(i),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Je.NONE}}function Mg(i){this.enabled!==!1&&i.preventDefault()}function Sg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const iu=[{name:"Sun",nameCH:"太陽",type:"star",radius:5,realScaleRadius:40,color:16776960,texture:"sun.jpg",distance:0,realScaleDistance:0,speed:0,description:"太陽系的中心恆星，佔據了太陽系 99.8% 的質量。它是一顆黃矮星，透過核融合產生巨大的能量，支持地球上的生命。",details:{質量:"1.989 × 10³⁰ kg",體積:"1.412 × 10¹⁸ km³",直徑:"1,392,700 km",光度:"3.828 × 10²⁶ W",核心溫度:"15,000,000 °C",表面溫度:"5,500 °C",光譜類型:"G2V"},obliquity:7.25},{name:"Mercury",nameCH:"水星",type:"planet",radius:.5,realScaleRadius:.38,color:11184810,texture:"mercury.jpg",distance:15,realScaleDistance:60,speed:.02,inclination:7,obliquity:.03,description:"最靠近太陽的行星。它沒有大氣層來調節溫度，導致晝夜溫差極大。其表面佈滿了數十億年來遭受撞擊留下的隕石坑。",details:{質量:"3.301 × 10²³ kg",體積:"6.083 × 10¹⁰ km³",直徑:"4,879 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 427°C"}},{name:"Venus",nameCH:"金星",type:"planet",radius:.9,realScaleRadius:.95,color:16763904,texture:"venus_surface.jpg",distance:25,realScaleDistance:90,speed:.015,inclination:3.39,obliquity:177.36,description:"被稱為地球的姊妹星，但極端惡劣。它擁有濃厚二氧化碳大氣層產生的劇烈溫室效應，使其成為太陽系中最熱的行星。",details:{質量:"4.867 × 10²⁴ kg",體積:"9.284 × 10¹¹ km³",直徑:"12,104 km",光度:"N/A",核心溫度:"N/A",表面溫度:"462 °C"}},{name:"Earth",nameCH:"地球",type:"planet",radius:1,realScaleRadius:1,color:2241535,texture:"earth.jpg",distance:40,realScaleDistance:130,speed:.01,inclination:0,obliquity:23.44,description:"人類唯一的家園，是目前唯一已知存在生命的天體。地表約 71% 被海洋覆蓋。",details:{質量:"5.972 × 10²⁴ kg",體積:"1.083 × 10¹² km³",直徑:"12,742 km",光度:"N/A",核心溫度:"6,000 °C",表面溫度:"-88°C 到 58°C"},satellites:[{name:"ISS",nameCH:"國際太空站",type:"space_station",radius:.0125,realScaleRadius:.00125,color:13421772,distance:1.25,realScaleDistance:1.06,speed:.15,inclination:51.6,description:"目前在軌運行的最大的空間站，由多國航天機構共同建造並運行。它是人類在太空進行長期科研的重要平台。",details:{質量:"450,000 kg",長度:"109 m",寬度:"73 m",乘員:"通常 7 人",發射時間:"1998年 (首模塊)",軌道高度:"約 408 km"}},{name:"CSS",nameCH:"天宮空間站",type:"space_station",radius:.01,realScaleRadius:.001,color:16777215,distance:1.4,realScaleDistance:1.06,speed:.12,inclination:41.5,description:"中國自主研發並建造的空間站，由天和核心艙、問天實驗艙、夢天實驗艙組成。它是中國載人航天工程的重要成果。",details:{質量:"約 100,000 kg",構成:"三艙 L 型",乘員:"通常 3 人",發射時間:"2021年 (核心艙)",軌道高度:"約 390 km"}},{name:"Moon",nameCH:"月球",type:"satellite",radius:.27,realScaleRadius:.27,color:8947848,texture:"moon.jpg",distance:2.2,realScaleDistance:3,speed:.05,inclination:5.14,obliquity:6.68,orbitRelativeToEquator:!1,description:"地球唯一的天然衛星。它對地球的潮汐和自轉穩定起著關鍵作用，是人類唯一親自登陸過的地外天體。",details:{質量:"7.342 × 10²² kg",體積:"2.195 × 10¹⁰ km³",直徑:"3,474 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 127°C"}}]},{name:"Apophis",nameCH:"毀神星",type:"asteroid",radius:.15,realScaleRadius:.005,isIrregular:!0,geometryScale:[2.5,1.2,1.2],color:6710886,texture:"apophis.jpg",distance:36,realScaleDistance:120,speed:.012,inclination:3.3,obliquity:0,description:"一顆近地小行星，曾因極高的撞擊風險評估而聞名。它於 2029 年將在極近距離內掠過地球，提供絕佳的科學觀測機會。",details:{質量:"6.1 × 10¹⁰ kg",直徑:"370 m",表面溫度:"N/A"}},{name:"1221 Amor",nameCH:"阿莫爾",type:"asteroid",radius:.1,realScaleRadius:.002,isIrregular:!0,geometryScale:[1.8,1.2,1.2],color:13808780,texture:"amor.jpg",distance:48,realScaleDistance:220,speed:.01,inclination:11.9,obliquity:0,description:"阿莫爾型小行星的代表天體，其軌道會跨越火星軌道並接近地球，但通常不會與地球軌道相交。",details:{直徑:"1.0 km",光譜類型:"S-type"}},{name:"Mars",nameCH:"火星",type:"planet",radius:.53,realScaleRadius:.53,color:16724736,texture:"mars.jpg",distance:55,realScaleDistance:180,speed:.008,inclination:1.85,obliquity:25.19,description:"被稱為紅色星球，其顏色源於表面的氧化鐵。它擁有太陽系最高大的山脈（奧林帕斯山）和巨大的峽谷系統。",details:{質量:"6.39 × 10²³ kg",體積:"1.631 × 10¹¹ km³",直徑:"6,779 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-125°C 到 20°C"},satellites:[{name:"Phobos",nameCH:"火衛一 (福波斯)",radius:.15,realScaleRadius:.08,color:8947848,texture:"phobos.png",distance:2,realScaleDistance:2.5,speed:.08,inclination:1.09,description:"火星最大的衛星，外型不規則且佈滿隕石坑。它離火星非常近，正緩慢地向火星靠近，預計在數千萬年後將會撞向火星或解體。",details:{質量:"1.066 × 10¹⁶ kg",直徑:"22.2 km",表面溫度:"-112 °C 到 -4 °C"}},{name:"Deimos",nameCH:"火衛二 (戴摩斯)",radius:.12,realScaleRadius:.05,color:10066329,texture:"deimos.png",distance:3.5,realScaleDistance:6,speed:.045,inclination:.93,description:"火星較小且較遠的衛星，表面覆蓋著厚厚的塵埃層，使其看起來比火衛一更平滑。",details:{質量:"1.476 × 10¹⁵ kg",直徑:"12.4 km",表面溫度:"-112 °C 到 -4 °C"}}]},{name:"433 Eros",nameCH:"愛神星",type:"asteroid",radius:.28,realScaleRadius:.01,isIrregular:!0,geometryScale:[3.2,1.1,1.1],color:12756621,texture:"eros.jpg",distance:68,realScaleDistance:190,speed:.009,inclination:10.8,obliquity:0,description:"人類首顆近距離探測並登陸的小行星（由會合-舒梅克號完成）。它是一顆 S-型小行星，具有獨特的長條橢圓外型。",details:{質量:"6.68 × 10¹⁵ kg",直徑:"16.8 km",表面溫度:"-150 °C 到 100 °C"}},{name:"887 Alinda",nameCH:"艾琳達",type:"asteroid",radius:.12,realScaleRadius:.008,isIrregular:!0,geometryScale:[1.2,1.1,1.05],color:10128499,texture:"alinda.jpg",distance:72,realScaleDistance:280,speed:.007,inclination:9.3,obliquity:0,description:"一顆極具代表性的近地小行星，與木星具有 1:3 的平均運動共振，這也是艾琳達家族小行星的命名來源。",details:{直徑:"4.2 km",光譜類型:"S-type"}},{name:"4 Vesta",nameCH:"灶神星",type:"asteroid",radius:.32,realScaleRadius:.05,isIrregular:!0,geometryScale:[1.15,.95,1.15],color:12632256,texture:"vesta.jpg",distance:77,realScaleDistance:275,speed:.0068,inclination:7.1,obliquity:27,description:"小行星帶中質量第二大的天體，被譽為「原行星」，擁有類似地球的分層結構和巨大的撞擊坑（雷亞希爾維亞坑）。",details:{質量:"2.59 × 10²⁰ kg",直徑:"525.4 km",表面溫度:"-190 °C 到 -60 °C"}},{name:"Ceres",nameCH:"穀神星",type:"dwarf_planet",radius:.4,realScaleRadius:.075,color:10066329,texture:"ceres.jpg",distance:88,realScaleDistance:315,speed:.006,inclination:10.6,obliquity:4,description:"位於小行星帶中最大的天體，也是太陽系內側唯一的一顆矮行星。它主要由冰和岩石組成，表面可能存在含鹽的水冰。",details:{質量:"8.96 × 10²⁰ kg",體積:"4.21 × 10⁸ km³",直徑:"950 km",表面溫度:"-106 °C"}},{name:"Pallas",nameCH:"智神星",type:"asteroid",radius:.25,realScaleRadius:.04,color:10066329,texture:"pallas.jpg",distance:93,realScaleDistance:310,speed:.0055,inclination:34.8,obliquity:0,description:"小行星帶中第二大的天體，僅次於穀神星。它以極大傾角的軌道運行，表面成分與含碳球粒隕石相似。",details:{質量:"2.04 × 10²⁰ kg",直徑:"512 km",表面溫度:"-100 °C"}},{name:"10 Hygeia",nameCH:"健神星",type:"dwarf_planet",radius:.22,realScaleRadius:.035,isIrregular:!1,geometryScale:[1.05,1,1.02],color:4473924,texture:"hygeia.jpg",distance:98,realScaleDistance:330,speed:.0052,inclination:3.8,obliquity:0,description:"小行星帶中第四大的天體。儘管位於小行星帶，但其極其接近球形的外觀使其成為矮行星的候選者。其表面非常黑暗，屬於 C-型小行星。",details:{質量:"8.67 × 10¹⁸ kg",直徑:"434 km",表面溫度:"-110 °C"}},{name:"Juno",nameCH:"婚神星",type:"asteroid",radius:.22,realScaleRadius:.02,color:8947848,texture:"juno.jpg",distance:82,realScaleDistance:290,speed:.0065,inclination:12.9,obliquity:0,description:"小行星帶中的主要天體之一，也是首批被發現的四顆小行星中體積最小的一顆。其表面可能含有豐富的橄欖石。",details:{質量:"2.7 × 10¹⁹ kg",直徑:"233 km",表面溫度:"-110 °C"}},{name:"16 Psyche",nameCH:"靈神星",type:"asteroid",radius:.22,realScaleRadius:.04,isIrregular:!1,geometryScale:[1.45,1.25,1],color:5592405,texture:"psyche.jpg",distance:104,realScaleDistance:340,speed:.005,inclination:3.1,obliquity:0,description:"太陽系中最重金屬的小行星之一，被認為是早期行星暴露在外的鎳鐵核心。它接近規則的橢球體，表面呈現獨特的金屬光澤。",details:{質量:"2.29 × 10¹⁹ kg",直徑:"220 km",成分:"鐵、鎳 (M-type)"}},{name:"Jupiter",nameCH:"木星",type:"planet",radius:3,realScaleRadius:11,color:14462614,texture:"jupiter_natural.png",distance:120,realScaleDistance:450,speed:.005,inclination:1.3,obliquity:3.13,description:"太陽系最大的行星，體積可容納 1,300 個地球。它是一個巨大的氣態巨行星，最著名的特徵是持續了數百年的大紅斑風暴。",details:{質量:"1.898 × 10²⁷ kg",體積:"1.431 × 10¹⁵ km³",直徑:"139,820 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-110 °C"},satellites:[{name:"Io",nameCH:"木衛一 (伊娥)",radius:.28,realScaleRadius:.285,color:16773120,texture:"io_fixed.jpg",distance:5,realScaleDistance:13,speed:.04,inclination:.05,description:"太陽系中最活躍的火山天體。",details:{質量:"8.932 × 10²² kg",體積:"2.531 × 10¹⁰ km³",直徑:"3,643 km",表面溫度:"-143 °C"}},{name:"Europa",nameCH:"木衛二 (歐羅巴)",radius:.24,realScaleRadius:.245,color:14737632,texture:"europa.png",distance:6,realScaleDistance:21,speed:.03,inclination:.47,description:"表面被冰層覆蓋，下方可能隱藏著液態海洋。",details:{質量:"4.80 × 10²² kg",體積:"1.593 × 10¹⁰ km³",直徑:"3,122 km",表面溫度:"-160 °C"}},{name:"Ganymede",nameCH:"木衛三 (蓋尼米德)",radius:.41,realScaleRadius:.413,color:10526880,texture:"ganymede.png",distance:7.5,realScaleDistance:33,speed:.02,inclination:.2,description:"太陽系中最大的衛星，甚至比水星還要大。",details:{質量:"1.482 × 10²³ kg",體積:"7.66 × 10¹⁰ km³",直徑:"5,268 km",表面溫度:"-163 °C"}},{name:"Callisto",nameCH:"木衛四 (卡利斯托)",radius:.38,realScaleRadius:.378,color:6316128,texture:"callisto.png",distance:9,realScaleDistance:50,speed:.012,inclination:.2,description:"太陽系中隕石坑最密集的天體之一。",details:{質量:"1.076 × 10²³ kg",體積:"5.88 × 10¹⁰ km³",直徑:"4,821 km",表面溫度:"-139 °C"}}]},{name:"Saturn",nameCH:"土星",type:"planet",radius:2.5,realScaleRadius:9.5,color:16044095,texture:"saturn_ai.png",distance:170,realScaleDistance:800,speed:.004,inclination:2.48,obliquity:26.73,ring:{innerRadius:3,outerRadius:5,realInner:11,realOuter:18},description:"以其壯麗的環系統聞名，這些環主要由冰晶與塵埃組成。它是太陽系中密度最低的行星，如果把它放在水中，它會浮起來。",details:{質量:"5.683 × 10²⁶ kg",體積:"8.271 × 10¹⁴ km³",直徑:"116,460 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-140 °C"},satellites:[{name:"Mimas",nameCH:"土衛一 (米瑪斯)",radius:.15,realScaleRadius:.156,color:10066329,texture:"mimas.png",distance:6,realScaleDistance:25,speed:.045,inclination:1.5,description:"以其巨大的赫歇爾撞擊坑聞名，使其外觀極其神似星際大戰中的「死星」。",details:{質量:"3.75 × 10¹⁹ kg",直徑:"396 km",表面溫度:"-209 °C"}},{name:"Enceladus",nameCH:"土衛二 (恩克拉多斯)",radius:.18,realScaleRadius:.198,color:16777215,texture:"enceladus.png",distance:7.5,realScaleDistance:35,speed:.035,inclination:0,description:"太陽系中最亮的天體之一，表面覆蓋著潔淨的冰層。其南極地區噴發出的水冰間歇泉證明了地下海洋的存在。",details:{質量:"1.08 × 10²⁰ kg",直徑:"504 km",表面溫度:"-201 °C"}},{name:"Tethys",nameCH:"土衛三 (特提斯)",radius:.22,realScaleRadius:.41,color:13421772,texture:"tethys.png",distance:9,realScaleDistance:45,speed:.028,inclination:1.1,description:"一個冰冷的衛星，表面有巨大的奧德修斯撞擊坑以及貫穿半個星球的伊薩卡峽谷。",details:{質量:"6.17 × 10²⁰ kg",直徑:"1,062 km",表面溫度:"-187 °C"}},{name:"Dione",nameCH:"土衛四 (狄俄涅)",radius:.24,realScaleRadius:.44,color:11184810,texture:"dione.png",distance:10.5,realScaleDistance:55,speed:.022,inclination:0,description:"表面佈滿隕石坑，其後隨半球擁有明亮的絲狀冰崖特徵。",details:{質量:"1.10 × 10²¹ kg",直徑:"1,122 km",表面溫度:"-186 °C"}},{name:"Rhea",nameCH:"土衛五 (瑞亞)",radius:.32,realScaleRadius:.6,color:14540253,texture:"rhea.png",distance:12.5,realScaleDistance:70,speed:.018,inclination:.3,description:"土星第二大的衛星，表面佈滿了古老的隕石坑，是一個典型的冰凍天體。",details:{質量:"2.31 × 10²¹ kg",直徑:"1,528 km",表面溫度:"-174 °C"}},{name:"Titan",nameCH:"土衛六 (泰坦)",radius:.65,realScaleRadius:2,color:16753920,texture:"titan.png",distance:16,realScaleDistance:100,speed:.012,inclination:.3,description:"太陽系唯一擁有濃厚大氣層的衛星。其表面存在液態甲烷湖泊，是除了地球以外唯一已知表面有液態河流、湖泊的天體。",details:{質量:"1.345 × 10²³ kg",直徑:"5,150 km",表面溫度:"-179 °C"}},{name:"Hyperion",nameCH:"土衛七 (海柏利昂)",radius:.12,realScaleRadius:.1,color:9127187,texture:"hyperion.png",distance:18.5,realScaleDistance:130,speed:.01,inclination:.5,description:"外觀極其獨特的衛星，表面佈滿了深邃且邊緣銳利的隕石坑，使其看起來像是一塊巨大的「海綿」。",details:{質量:"5.6 × 10¹⁸ kg",直徑:"270 km",表面溫度:"-180 °C"}},{name:"Iapetus",nameCH:"土衛八 (伊阿珀托斯)",radius:.28,realScaleRadius:.57,color:16777215,texture:"iapetus.png",distance:22,realScaleDistance:180,speed:.008,inclination:7.5,description:"著名的「陰陽衛星」，擁有黑白分明的雙色半球。它還有一條沿著赤道環繞的神祕山脈（赤道脊）。",details:{質量:"1.8 × 10²¹ kg",直徑:"1,469 km",表面溫度:"-143 °C 到 -173 °C"}},{name:"Phoebe",nameCH:"土衛九 (福柏)",radius:.1,realScaleRadius:.08,color:3355443,texture:"phoebe.png",distance:26,realScaleDistance:250,speed:.005,inclination:175,description:"一顆極其黑暗的大型衛星，被認為是來自柯伊伯帶的捕獲天體。它以逆行軌道繞土星運行。",details:{質量:"8.29 × 10¹⁸ kg",直徑:"213 km",表面溫度:"-198 °C"}}]},{name:"Uranus",nameCH:"天王星",type:"planet",radius:1.5,realScaleRadius:4,color:7587510,texture:"uranus.jpg",distance:230,realScaleDistance:1500,speed:.003,inclination:.77,obliquity:97.77,description:"一顆冰巨行星，大氣中含有甲烷使其呈現青藍色。它的自轉軸極度傾斜（約 98 度），看起來像是「躺著」繞太陽公轉。",details:{質量:"8.681 × 10²⁵ kg",體積:"6.833 × 10¹³ km³",直徑:"50,724 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-195 °C"},satellites:[{name:"Ariel",nameCH:"天衛一 (艾瑞爾)",radius:.22,realScaleRadius:.091,color:13421772,texture:"ariel.png",distance:5,realScaleDistance:14,speed:.025,inclination:.26,description:"天王星最亮的衛星，表面佈滿了巨大的峽谷和山脊，顯示出過去劇烈的地質活動。",details:{質量:"1.27 × 10²¹ kg",直徑:"1,158 km",表面溫度:"-189 °C"}},{name:"Umbriel",nameCH:"天衛二 (昂布里厄爾)",radius:.22,realScaleRadius:.092,color:6710886,texture:"umbriel.png",distance:7.5,realScaleDistance:20,speed:.015,inclination:.13,description:"天王星最黑暗、隕石坑最密集的衛星。它最醒目的特徵是一個被稱為「旺達」的明亮環狀坑。",details:{質量:"1.29 × 10²¹ kg",直徑:"1,169 km",表面溫度:"-198 °C"}},{name:"Titania",nameCH:"天衛三 (泰坦妮亞)",radius:.32,realScaleRadius:.124,color:14540253,texture:"titania.png",distance:10.5,realScaleDistance:32,speed:.012,inclination:.34,description:"天王星最大的衛星，表面佈滿了巨大的斷層崖與峽谷，顯示其內部曾發生過嚴酷的地質膨脹。",details:{質量:"3.49 × 10²¹ kg",直徑:"1,578 km",表面溫度:"-203 °C"}},{name:"Oberon",nameCH:"天衛四 (奧伯隆)",radius:.3,realScaleRadius:.12,color:12303291,texture:"oberon.png",distance:13.5,realScaleDistance:42,speed:.008,inclination:.1,description:"天王星最外層的主大衛星，表面極其古老且佈滿隕石坑，其大型撞擊坑底部常覆蓋著神祕的深色物質。",details:{質量:"3.01 × 10²¹ kg",直徑:"1,323 km",表面溫度:"-198 °C"}},{name:"Miranda",nameCH:"天衛五 (米蘭達)",radius:.18,realScaleRadius:.037,color:15658734,texture:"miranda.png",distance:3.5,realScaleDistance:9,speed:.04,inclination:4.34,description:"太陽系中最神祕、地質最為破碎且多樣的衛星之一。它擁有巨大的電路板狀地形（日冕）以及深達 20 公里的垂直斷崖。",details:{質量:"6.59 × 10¹⁹ kg",直徑:"471 km",表面溫度:"-187 °C 到 -213 °C"}}]},{name:"Neptune",nameCH:"海王星",type:"planet",radius:1.5,realScaleRadius:3.9,color:3049153,texture:"neptune_ai_v3.png",distance:300,realScaleDistance:2500,speed:.002,inclination:1.77,obliquity:28.32,description:"離太陽最遠的行星，風速高達每小時 2,100 公里，是太陽系中風速最高的天體。它呈現深藍色，同樣也是一顆冰巨行星。",details:{質量:"1.024 × 10²⁶ kg",體積:"6.254 × 10¹³ km³",直徑:"49,244 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-201 °C"},satellites:[{name:"Triton",nameCH:"海衛一 (崔頓)",radius:.45,realScaleRadius:.21,color:16770273,texture:"triton.png",distance:5,realScaleDistance:13,speed:.015,inclination:157,description:"海王星最大的衛星，也是太陽系中唯一逆行繞行行星的大衛星。表面有著名的「哈密瓜皮」地形，並噴發著氮氣間歇泉。",details:{質量:"2.14 × 10²² kg",直徑:"2,706 km",表面溫度:"-235 °C"}},{name:"Proteus",nameCH:"海衛八 (普羅透斯)",radius:.18,realScaleRadius:.033,color:3355443,texture:"proteus.png",distance:2.5,realScaleDistance:6,speed:.035,inclination:.55,description:"海王星第二大的衛星，也是太陽系中已知不規則形狀衛星中最大的一個。表面極其黑暗且佈滿密集的隕石坑。",details:{質量:"4.4 × 10¹⁹ kg",直徑:"418 km",表面溫度:"-222 °C"}}]},{name:"Pluto",nameCH:"冥王星",type:"dwarf_planet",radius:.7,realScaleRadius:.186,color:15386274,texture:"pluto.jpg",distance:380,realScaleDistance:3800,speed:.0015,inclination:17.16,obliquity:122.5,description:"太陽系中最著名的矮行星，曾被視為第九大行星。它與其衛星凱倫構成了一個雙星系統，其表面最顯眼的特徵是巨大的氮冰之心（湯博區）。",details:{質量:"1.303 × 10²² kg",體積:"7.057 × 10⁹ km³",直徑:"2,376 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-229 °C"},satellites:[{name:"Charon",nameCH:"冥衛一 (凱倫)",radius:.35,realScaleRadius:.095,color:10066329,texture:"charon.jpg",distance:4,realScaleDistance:10,speed:.02,inclination:0,description:"冥王星最大的衛星，直徑超過冥王星的一半。兩者互相潮汐鎖定，始終以同一面朝向彼此。",details:{質量:"1.586 × 10²¹ kg",直徑:"1,212 km",表面溫度:"-220 °C"}}]},{name:"Haumea",nameCH:"妊神星",type:"dwarf_planet",radius:.55,realScaleRadius:.136,geometryScale:[1,.75,.5],color:15658734,texture:"haumea.jpg",distance:460,realScaleDistance:4310,speed:.0013,inclination:28.2,obliquity:126,description:"柯伊伯帶中形狀最奇特的矮行星，其形狀像一顆橄欖球（長橢球體）。這是因為它自轉極快（僅需不到四小時），其表面覆蓋著結晶水冰。",details:{質量:"4 × 10²¹ kg",直徑:"~1,600 km (橢球形平均)",表面溫度:"-223 °C"}},{name:"Makemake",nameCH:"鳥神星",type:"dwarf_planet",radius:.5,realScaleRadius:.112,color:13467442,texture:"makemake.jpg",distance:600,realScaleDistance:4550,speed:.0012,inclination:29,obliquity:0,description:"柯伊伯帶中較大、且表面顏色偏紅的矮行星。它是發現最晚、也是太陽系中最亮的幾個天體之一，表面覆蓋甲烷冰。",details:{質量:"3 × 10²¹ kg",直徑:"1,430 km",表面溫度:"-243 °C"}},{name:"Eris",nameCH:"鬩神星",type:"dwarf_planet",radius:.72,realScaleRadius:.183,color:16777215,texture:"eris.jpg",distance:720,realScaleDistance:6800,speed:.001,inclination:44.2,obliquity:78,description:"目前已知太陽系中最巨大的矮行星之一，位於離太陽極遠的散射盤。它的發現直接導致了冥王星被重新定義為矮行星。表面反照率極高，覆蓋著甲烷冰。",details:{質量:"1.66 × 10²² kg",直徑:"2,326 km",表面溫度:"-243 °C"}},{name:"Halley",nameCH:"哈雷彗星",type:"comet",isComet:!0,radius:.3,realScaleRadius:.008,color:8978380,texture:"asteroid.jpg",distance:280,realScaleDistance:2600,speed:.003,inclination:18,description:"哈雷彗星是目前已知最著名的週期性彗星。基於其逆行且高傾角的特殊軌道軌跡、長達數千年的活動史，以及沿途釋出的厚實碎屑雲帶，地球每年會兩度穿越這條由其留下的「塵埃河流」：5月時形成了寶瓶座η流星雨，而10月則迎來著名的獵戶座流星雨。",details:{週期:"約 76 年",核心大小:"約 15 × 8 km",最後回歸:"1986 年",下次預測:"2061 年"}},{name:"Swift-Tuttle",nameCH:"斯威夫特-塔特爾彗星 (109P)",type:"comet",isComet:!0,radius:.35,realScaleRadius:.013,color:11206604,texture:"asteroid.jpg",distance:350,realScaleDistance:5e3,speed:.002,inclination:113.5,description:"斯威夫特-塔特爾彗星是一顆極其龐大且具有潛在威脅的週期性彗星，其核心直徑達 26 公里。它是每年 8 月盛大的「英仙座流星雨」的高峰期來源。當地球穿過它在漫長軌跡上留下的塵埃帶時，這些顆粒進入大氣層即形成了壯麗的流星現象。",details:{週期:"約 133 年",核心直徑:"約 26 km",最後回歸:"1992 年",下次預測:"2126 年"}},{name:"Tempel-Tuttle",nameCH:"坦普爾-塔特爾彗星 (55P)",type:"comet",isComet:!0,radius:.28,realScaleRadius:.002,color:13434879,texture:"asteroid.jpg",distance:240,realScaleDistance:1500,speed:.004,inclination:162.5,description:"坦普爾-塔特爾彗星是一顆週期約 33 年的週期性彗星，它是著名的「獅子座流星雨」的母彗星。由於其軌道碎屑雲帶的密度分佈非常集中，當地球穿過其留下的密集塵埃帶時，獅子座流星雨偶爾會在 11 月爆發成每小時數千顆以上的「流星暴」，是天文史上最具威力的流星現象之一。",details:{週期:"約 33 年",核心直徑:"約 3.6 km",最後回歸:"1998 年",下次預測:"2031 年"}},{name:"Hale-Bopp",nameCH:"海爾-博普彗星 (C/1995 O1)",type:"comet",isComet:!0,radius:.6,realScaleRadius:.04,color:16777215,texture:"asteroid.jpg",speed:1e-4,isClosed:!0,pathPoints:[[0,10,0],[15,-20,10],[100,-500,30],[180,-1800,40],[100,-3200,30],[0,-3700,0],[-100,-3200,-30],[-180,-1800,-40],[-100,-500,-30],[-15,-20,-10]],description:"20 世紀最壯觀的彗星之一，擁有巨大的彗核（直徑約 60 公里）。它以極高的軌道傾角與極長的週期（約 2,500 年）著稱。其標誌性的雙彗尾（藍色的離子尾與白色的塵埃尾）在 1997 年回歸時在北半球肉眼清晰可見長達 18 個月。",details:{週期:"約 2,533 年",核心直徑:"約 60 km",近日點:"0.914 AU",遠日點:"約 370 AU",軌道傾角:"89.4° (近垂直)"}},{name:"3200 Phaethon",nameCH:"法厄同 (3200 Phaethon)",type:"asteroid",radius:.25,realScaleRadius:.003,color:10066329,texture:"asteroid.jpg",distance:140,realScaleDistance:130,speed:.012,inclination:22.2,description:"3200 Phaethon 是一顆軌道極其特殊的阿波羅型小行星，具有「岩石彗星」的特徵。它是每年 12 月「雙子座流星雨」的母體，這在流星雨起源中相當罕見（大多數流星雨源自彗星）。它在近日點時會極度接近太陽，表面溫度高達 750°C，導致其岩石表面因熱脹冷縮碎裂，並釋放出構成流星雨的塵埃粒子。",details:{週期:"約 1.43 年",直徑:"約 5.1 km",分類:"阿波羅型小行星 / 岩石彗星",近日點:"0.14 AU (極接近太陽)"}},{name:"Gonggong",nameCH:"共工星",type:"dwarf_planet_candidate",radius:.5,realScaleRadius:.1,color:13386786,texture:"gonggong.jpg",distance:650,realScaleDistance:6700,speed:9e-4,inclination:30.7,obliquity:0,description:"柯伊伯帶中繞行太陽的大型天體，具有顯著的紅色表面。它是目前太陽系中已知最大的未命名天體之一（在正式命名前曾被稱為 2007 OR10）。",details:{質量:"~1.75 × 10²¹ kg",直徑:"1,230 km",表面溫度:"-244 °C"}},{name:"Quaoar",nameCH:"創神星",type:"dwarf_planet_candidate",radius:.45,realScaleRadius:.086,color:8930338,texture:"quaoar.jpg",distance:510,realScaleDistance:4370,speed:.0013,inclination:8,obliquity:0,description:"柯伊伯帶中的大型傳統天體，曾被描述為具有結晶水冰的表面。最近發現它擁有一圈位於羅里不規則極限外的行星環。",details:{質量:"1.4 × 10²¹ kg",直徑:"1,110 km",表面溫度:"-230 °C"}},{name:"Sedna",nameCH:"賽德娜",type:"dwarf_planet_candidate",radius:.42,realScaleRadius:.08,color:16729344,texture:"sedna.jpg",distance:850,realScaleDistance:8500,speed:5e-4,inclination:11.9,obliquity:0,description:"太陽系中最遙遠且最神祕的天體之一。它的軌道極端扁平，遠日點距離太陽約 937 AU。其驚人的紅色表面可能來自長期的宇宙射線照射。",details:{質量:"約 1.0 × 10²¹ kg",直徑:"約 1,000 km",表面溫度:"-240 °C"}},{name:"Orcus",nameCH:"亡神星",type:"dwarf_planet_candidate",radius:.4,realScaleRadius:.075,color:11184810,texture:"orcus.jpg",distance:420,realScaleDistance:3940,speed:.0016,inclination:20.5,obliquity:0,description:"有時被稱為「反冥王星」，因為它的軌道與冥王星非常相似，但相位相反。它與冥王星一樣與海王星具有 2:3 的共振軌道。",details:{質量:"6.4 × 10²⁰ kg",直徑:"910 km",表面溫度:"-230 °C"}},{name:"Salacia",nameCH:"薩拉客亞",type:"dwarf_planet_candidate",radius:.38,realScaleRadius:.07,color:4469538,texture:"salacia.jpg",distance:480,realScaleDistance:4220,speed:.0014,inclination:23.9,obliquity:0,description:"大型柯伊伯帶天體，具有極低的反照率，表面極其黑暗。目前尚未觀察到其表面存在顯著的冰層覆蓋。",details:{質量:"4.5 × 10²⁰ kg",直徑:"850 km",表面溫度:"-230 °C"}},{name:"Varuna",nameCH:"伐樓拿",type:"asteroid",radius:.4,realScaleRadius:.07,geometryScale:[1.5,1,.6],color:13386786,texture:"varuna.jpg",distance:530,realScaleDistance:4300,speed:.0013,inclination:17.2,obliquity:0,description:"柯伊伯帶中大型的天體，也是首批被發現的偏遠天體之一。它以極快的自轉與長橢球體的造型著稱，表面覆蓋著豐富的水冰與托林。",details:{質量:"3.7 × 10²⁰ kg",直徑:"約 700 - 800 km",表面溫度:"-230 °C"}},{name:"Máni",nameCH:"瑪尼 (2002 MS4)",type:"dwarf_planet_candidate",radius:.35,realScaleRadius:.065,color:5592405,texture:"mani.jpg",distance:550,realScaleDistance:4170,speed:.0014,inclination:17.7,obliquity:0,description:"大型柯伊伯帶天體，也是目前已知未命名（近期正式獲名為 Máni）的天體中最大的一個。它的直徑約為 800 公里，表面極其黑暗，主要由水冰和乾冰組成。",details:{質量:"未知",直徑:"約 800 km",表面溫度:"-230 °C"}},{name:"Oumuamua",nameCH:"斥候星 (1I/ʻOumuamua)",type:"interstellar",radius:.3,realScaleRadius:.05,geometryScale:[2.5,.4,.4],color:8930372,texture:"oumuamua.jpg",distance:0,speed:.002,pathPoints:[[-1200,800,-1200],[-400,280,-400],[-50,40,-50],[10,5,0],[60,-10,80],[500,-150,700],[1500,-500,2e3]],description:"人類觀察到的首個太陽系外星際天體。它的形狀極端，呈現雪茄狀或盤狀，並在離開太陽系時表現出非引力加速度。",details:{質量:"未知",長度:"約 100-1,000 m",最高速度:"87.7 km/s"}},{name:"2I/Borisov",nameCH:"鮑里索夫彗星",type:"interstellar",isComet:!0,radius:.8,realScaleRadius:.6,color:8965375,texture:"borisov.jpg",distance:0,speed:15e-5,pathPoints:[[1500,1e3,500],[600,450,250],[100,80,50],[40,30,0],[100,-40,-200],[700,-300,-1e3],[1800,-800,-2500]],description:"史上發現的第二個星際天體，也是第一顆星際彗星。它來自太陽系外，攜帶著異星系的冰與塵。當它接近太陽時，展現出了與太陽系彗星相似的噴發特徵。",details:{發現時間:"2019年8月30日",發現者:"珍納迪·鮑里索夫",偏心率:"3.35 (極高雙曲線)",核心直徑:"約 0.5 - 1 km",主要成分:"富含一氧化碳與水冰",特性:"典型的星際訪客"}},{name:"ATLAS",nameCH:"3I/亞特拉斯 (C/2019 Y4)",type:"interstellar",radius:.35,realScaleRadius:.07,color:5605546,texture:"atlas.jpg",isComet:!0,distance:0,speed:.0018,pathPoints:[[-2e3,200,800],[-800,100,300],[-150,10,40],[-10,5,0],[100,30,-150],[900,300,-1500],[2500,800,-3500]],description:"一顆在接近太陽時碎裂的彗星，曾被預期將成為極亮的天體。它的軌道與 1844 年大彗星非常相似。",details:{質量:"未知",碎片數:"多個",近日點:"0.25 AU"}}];function Eg(i,e){const t=[],n=e?new Yi(e):new Yi;let s=!1;const r=new D,a=new D,u=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768?2:1;iu.forEach(c=>{const h=new zn(1,128,128);if(c.isIrregular){const g=h.attributes.position,p=new D;for(let f=0;f<g.count;f++){p.fromBufferAttribute(g,f);const E=Math.sin(p.x*2.5+p.y*1.8)*.35+Math.cos(p.z*2.2+p.x*1.5)*.25+Math.sin(p.y*4+p.z*2.5)*.2,b=.7+Math.pow(p.x,2)*.8,M=Math.cos(p.x*1.4)*.3,T=Math.sin(p.x*1.6)*.25;p.y+=M,p.z+=T;const A=1+Math.sin(Math.atan2(p.y,p.z)*3)*.15;let R=0;const I=Math.sqrt(Math.pow(p.x+.6,2)+Math.pow(p.z-.5,2));I<.8&&(R=(1-Math.pow(I/.8,2))*.45),p.multiplyScalar(1+E*.7-R),p.y*=b*A,p.z*=b*(A*.9),g.setXYZ(f,p.x,p.y,p.z)}h.computeVertexNormals()}let d;if(c.name==="Sun"){const g=n.load(`textures/${c.texture}?v=25.5`);g.wrapS=_n,g.wrapT=_n,g.generateMipmaps=!1,g.minFilter=Mt,g.magFilter=Mt,d=new En({map:g,transparent:!1})}else if(c.texture){const g=n.load(`textures/${c.texture}?v=27.4`);g.wrapS=_n,g.wrapT=xn,g.colorSpace=qt,g.anisotropy=16,g.minFilter=Kn,g.generateMipmaps=!0,d=new Jt({map:g,emissive:c.isComet||c.type==="comet"?4491519:c.type==="star"?16777215:2236962,emissiveMap:c.type==="star"||c.isComet||c.type==="comet"?g:null,emissiveIntensity:c.isComet||c.type==="comet"?.8:c.type==="star"?1:.05,roughness:1,metalness:0})}else d=new Jt({color:c.color,emissive:c.type==="star"?c.color:0,emissiveIntensity:c.type==="star"?1:0});const m=new Ne(h,d);m.userData=c,m.name=c.name,m.rotation.z=vt.degToRad(c.obliquity||0),c.geometryScale?m.scale.set(c.radius*c.geometryScale[0],c.radius*c.geometryScale[1],c.radius*c.geometryScale[2]):m.scale.setScalar(c.radius);const _={name:c.name,data:c,mesh:m,distance:c.distance,speed:c.speed,angle:Math.random()*Math.PI*2,rotationSpeed:c.rotationSpeed||.005,satellites:[],orbitLine:null,ringMesh:null,obliquity:vt.degToRad(c.obliquity||0),isSunShader:c.name==="Sun"};if(c.name!=="Sun"){let g,p=54015;c.type==="dwarf_planet"?p=16755200:c.type==="dwarf_planet_candidate"?p=13395711:c.type==="interstellar"?p=8978431:c.type==="comet"||c.isComet?p=16724787:c.type==="asteroid"&&(p=8716032);const f=new vs({color:p,transparent:!0,opacity:.35,blending:rn,linewidth:u});if(c.pathPoints){const E=c.pathPoints.map(R=>new D(R[0],R[1],R[2])),b=!!c.isClosed,M=new xo(E,b);_.orbitCurve=M,_.progress=Math.random();const T=M.getPoints(b?1e3:400),A=new lt().setFromPoints(T);g=b?new ur(A,f):new Wc(A,f)}else{const b=new er(0,0,c.distance,c.distance,0,2*Math.PI,!1,0).getPoints(256),M=new lt().setFromPoints(b);g=new ur(M,f),g.rotation.x=Math.PI/2+vt.degToRad(c.inclination||0)}i.add(g),_.orbitLine=g}if(c.ring){const g=new Ss(c.ring.innerRadius/c.radius,c.ring.outerRadius/c.radius,128),p=g.attributes.position,f=g.attributes.uv;for(let T=0;T<p.count;T++){const A=p.getX(T),R=p.getY(T),I=Math.sqrt(A*A+R*R),v=c.ring.innerRadius/c.radius,S=c.ring.outerRadius/c.radius,C=(I-v)/(S-v);f.setXY(T,.5,C)}const E=n.load("textures/saturn_ring_v3.png?v=23.4"),b=new Jt({map:E,side:Ut,transparent:!0,opacity:.85}),M=new Ne(g,b);M.rotation.x=Math.PI/2,m.add(M),_.ringMesh=M}if(c.satellites&&c.satellites.forEach(g=>{let p;if(g.type==="space_station"){const S=new en,C=new Jt({color:14540253,metalness:.5,roughness:.4}),F=new Jt({color:1981023,metalness:.8,roughness:.2,emissive:4386,emissiveIntensity:.2,side:Ut}),O=new Jt({color:16755200,metalness:.9,roughness:.1,emissive:4465152,emissiveIntensity:.2,side:Ut});if(g.name==="ISS"){const W=new Ne(new Ht(10,.15,.15),C);S.add(W);const H=new en,G=new Ne(new hn(.4,.4,1.8,12),C);G.rotation.z=Math.PI/2,H.add(G);const z=new Ne(new hn(.3,.3,1.2,12),C);z.position.set(0,.6,.1),H.add(z),S.add(H),[-4.6,-3.8,3.8,4.6].forEach(ce=>{const De=new Ne(new Ht(.04,4,1.3),O);De.position.set(ce,2.2,0),S.add(De);const Ce=new Ne(new Ht(.04,4,1.3),O);Ce.position.set(ce,-2.2,0),S.add(Ce)});const re=new Jt({color:16777215,metalness:.2,roughness:.8}),ee=new Ne(new Ht(.02,1.5,2),re);ee.position.set(-1,-.8,0),S.add(ee)}else if(g.name==="CSS"){const W=new Ne(new hn(.5,.5,3.2,16),C);W.rotation.z=Math.PI/2,S.add(W);const H=new Ne(new hn(.45,.45,2.8,16),C);H.position.set(.6,1.4,0),S.add(H);const G=new Ne(new hn(.45,.45,2.8,16),C);G.position.set(.6,-1.4,0),S.add(G);const z=new Ht(.03,1.5,7),j=new Ne(z,F);j.position.set(.6,3.2,0),S.add(j);const re=new Ne(z,F);re.position.set(.6,-3.2,0),S.add(re);const ee=new Ne(new Ht(.03,5,.8),F);ee.position.set(-2,0,0),S.add(ee)}p=S}else{const S=new zn(1,64,64);let C;if(g.texture){const F=n.load(`textures/${g.texture}?v=25.1`);F.wrapS=_n,F.wrapT=_n,F.colorSpace=qt,F.anisotropy=8,C=new Jt({map:F,emissive:2236962,emissiveIntensity:.05})}else C=new Jt({color:g.color});p=new Ne(S,C)}p.scale.setScalar(g.radius),p.userData=g,p.name=g.name,i.add(p);const E=new er(0,0,g.distance,g.distance,0,2*Math.PI,!1,0).getPoints(128),b=new lt().setFromPoints(E);let M;g.type==="space_station"?M=new ed({color:16777215,transparent:!0,opacity:.3,blending:rn,dashSize:.5,gapSize:.3,linewidth:u}):M=new vs({color:16777215,transparent:!0,opacity:.15,blending:rn,linewidth:u});const T=new ur(b,M);g.type==="space_station"&&T.computeLineDistances();const A={mesh:p,data:g,angle:Math.random()*Math.PI*2,orbitLine:T,distance:g.distance,orbitRelativeToEquator:g.orbitRelativeToEquator!==!1};_.satellites.push(A);const R=_.obliquity,I=vt.degToRad(g.inclination||0),v=A.orbitRelativeToEquator?R+I:I;T.rotation.x=Math.PI/2+v,i.add(T)}),c.isComet||c.type==="comet"){const g=new zn(1.8,32,32),p=new En({color:8978380,transparent:!0,opacity:.15,blending:rn,side:Nt}),f=new Ne(g,p);m.add(f);const E=new Dr(1.2,25,32,1,!0);E.translate(0,12.5,0),E.rotateX(Math.PI/2);const b=new En({color:6737151,transparent:!0,opacity:.2,blending:rn,side:Ut}),M=new Ne(E,b);i.add(M),_.tailMesh=M}t.push(_),i.add(m)});let l=1;return{setSpeedMultiplier:c=>{l=c},setViewMode:c=>{s=c,t.forEach(h=>{const d=h.data,m=s?d.realScaleRadius:d.radius,_=s?d.realScaleDistance:d.distance;if(d.geometryScale?h.mesh.scale.set(m*d.geometryScale[0],m*d.geometryScale[1],m*d.geometryScale[2]):h.mesh.scale.setScalar(m),h.mesh.updateMatrix(),h.distance=_,h.orbitLine)if(d.pathPoints){const g=M=>s?M<=60?2.5:M<=160?2.5+(M-60)/100*2.3600000000000003:M<=200?4.86+(M-160)/40*2.2699999999999996:M<=300?7.13+(M-200)/100*1.2000000000000002:8.35:1,p=d.pathPoints.map(M=>{const T=new D(M[0],M[1],M[2]),A=T.length();return A<.001?T:T.multiplyScalar(g(A))}),E=new xo(p,!!d.isClosed).getPoints(d.isClosed?1e3:800);h.orbitLine.geometry.dispose();const b=new lt().setFromPoints(E);h.orbitLine.geometry=b}else{const p=new er(0,0,_,_,0,2*Math.PI,!1,0).getPoints(256);h.orbitLine.geometry.dispose();const f=new lt().setFromPoints(p);h.orbitLine.geometry=f}if(h.ringMesh){const g=h.data.ring,p=s?g.realInner:g.innerRadius,f=s?g.realOuter:g.outerRadius;h.ringMesh.geometry.dispose(),h.ringMesh.geometry=new Ss(p/m,f/m,128);const E=h.ringMesh.geometry.attributes.position,b=h.ringMesh.geometry.attributes.uv,M=p/m,T=f/m;for(let A=0;A<E.count;A++){const R=Math.sqrt(E.getX(A)**2+E.getY(A)**2);b.setXY(A,.5,(R-M)/(T-M))}}h.satellites.forEach(g=>{const p=g.data,f=s&&p.realScaleRadius||p.radius,E=s&&p.realScaleDistance||p.distance;if(g.mesh.scale.setScalar(f),g.mesh.updateMatrix(),g.distance=E,g.orbitLine){const b=new er(0,0,E,E,0,2*Math.PI,!1,0);g.orbitLine.geometry.setFromPoints(b.getPoints(128)),p.type==="space_station"&&g.orbitLine.computeLineDistances()}})})},isRealScale:()=>s,setOrbitsVisibleByType:(c,h)=>{t.forEach(d=>{d.data.type===c&&d.orbitLine&&(d.orbitLine.visible=h)})},setSatOrbitsVisibleByType:(c,h)=>{t.forEach(d=>{d.satellites.forEach(m=>{(m.data.type||"satellite")===c&&m.orbitLine&&(m.orbitLine.visible=h)})})},getBodies:()=>t,update:c=>{const h=c*60;t.forEach(d=>{if(d.orbitCurve&&d.data.pathPoints)d.progress+=d.speed*l*h,d.progress>1&&(d.progress=0),d.orbitCurve.getPoint(d.progress,r),d.mesh.position.copy(r);else if(d.distance>0){d.angle+=d.speed*l*h;const m=vt.degToRad(d.data.inclination||0),_=Math.cos(d.angle)*d.distance,g=Math.sin(d.angle)*d.distance;d.mesh.position.set(_,g*-Math.sin(m),g*Math.cos(m))}if(d.isSunShader&&d.mesh.material.userData.sunShader&&(d.mesh.material.userData.sunShader.uniforms.uTime.value+=c*l),d.mesh.rotateY(d.rotationSpeed*l*h),d.satellites.forEach(m=>{const _=m.distance||m.data.distance,g=d.obliquity,p=vt.degToRad(m.data.inclination||0),f=m.orbitRelativeToEquator?g+p:p;m.angle+=m.data.speed*l*h;const E=Math.cos(m.angle)*_,b=Math.sin(m.angle)*_;m.mesh.position.set(d.mesh.position.x+E,d.mesh.position.y+b*-Math.sin(f),d.mesh.position.z+b*Math.cos(f)),m.mesh.rotateY(.01*l*h),m.orbitLine&&m.orbitLine.position.copy(d.mesh.position)}),d.tailMesh){d.tailMesh.position.copy(d.mesh.position),r.copy(d.mesh.position).normalize(),a.addVectors(d.mesh.position,r),d.tailMesh.lookAt(a);const m=d.mesh.position.length(),_=s?5e3:600;d.tailMesh.material.opacity=Math.max(.1,.6-m/_)}})}}}function bg(i,e,t=2e3){const n=new en,s=(c,h,d)=>{const m=new lt,_=[],g=[],p=new ke;for(let E=0;E<c;E++){const M=Math.random()*Math.PI*2,T=Math.acos(2*Math.random()-1),A=4e4*Math.sin(T)*Math.cos(M),R=4e4*Math.sin(T)*Math.sin(M),I=4e4*Math.cos(T);_.push(A,R,I);const S=.15+Math.pow(Math.random(),4)*.85;p.setHSL(0,0,S),g.push(p.r,p.g,p.b)}m.setAttribute("position",new mt(_,3)),m.setAttribute("color",new mt(g,3));const f=new Rs({size:h,vertexColors:!0,transparent:!0,opacity:d,sizeAttenuation:!1});return new Pr(m,f)};n.add(s(t,.5,.6));const a=(e?new Yi(e):new Yi).load("textures/starmap_8k.jpg?v=23.0",c=>{c.wrapS=_n,c.minFilter=Mt,c.magFilter=Mt,c.anisotropy=16,c.generateMipmaps=!1}),o=new zn(2e6,64,64),u=new En({map:a,side:Nt,depthWrite:!1,transparent:!0,opacity:.25,color:8947848}),l=new Ne(o,u);return l.rotation.x=vt.degToRad(-63),l.rotation.z=vt.degToRad(45),n.add(l),i.add(n),{starGroup:n,skySphere:l,update:c=>{n.position.copy(c)}}}function Tg(i){const e=new en,t=new Jt({color:16777215,metalness:.3,roughness:.5}),n=new Jt({color:8947848,metalness:.6,roughness:.3}),s=new Jt({color:16755200,emissive:16733440,emissiveIntensity:2}),r=new En({color:16746496,transparent:!0,opacity:.8}),a=new Dr(1,4,4),o=new Ne(a,t);o.rotation.x=Math.PI/2,o.scale.set(1.5,1,.4),e.add(o);const u=new Ht(2.5,.1,1.5),l=new Ne(u,t);l.position.set(0,0,-.5),e.add(l);const c=new Ht(.4,.3,1.2),h=new Ne(c,n);h.position.set(0,.2,-.2),e.add(h);const d=new Ht(.1,.1,.1);for(let v=0;v<40;v++){const S=Math.random()>.5?1:-1,C=(Math.random()-.5)*3,F=(Math.random()*.8+.2)*S,O=(Math.random()-.5)*.15,W=Math.random()>.4,H=new Ne(d,W?s:n);H.position.set(F,O,C),H.scale.set(Math.random()*.5+.5,Math.random()*.5+.5,Math.random()*2),e.add(H)}const m=new Ht(.8,.3,.5),_=new Ne(m,n);_.position.set(0,0,-2),e.add(_);const g=new hn(.15,.1,.3,8),p=[];[{x:-.25,y:0},{x:.25,y:0},{x:0,y:.1}].forEach(v=>{const S=new Ne(g,n);S.rotation.x=Math.PI/2,S.position.set(v.x,v.y,-2.2),e.add(S);const C=new Ne(new zn(.2,8,8),r);C.position.set(v.x,v.y,-2.3),e.add(C),p.push(C)});const E=new hn(.01,.01,1,8),b=new Ne(E,n);b.rotation.x=Math.PI/2,b.position.set(0,0,2),e.add(b);const M=new Zc(16755200,15,50);M.position.set(0,2,0),e.add(M);const T=new rd(16777215,40,300,Math.PI/8,.5);T.position.set(0,0,2),T.target.position.set(0,0,10),e.add(T),e.add(T.target),e.scale.set(4,4,4),e.name="AdvancedExplorer",i.add(e);const A=new D,R=.08,I=.98;return{mesh:e,velocity:A,thrust:R,friction:I,update:()=>{e.position.add(A),A.multiplyScalar(I);const v=A.length();p.forEach(S=>{const C=.8+Math.random()*.4+v*4;S.scale.set(C,C,C),S.material.opacity=.6+Math.min(v*3,.4)})}}}function Ag(i){const t=new lt,n=new Float32Array(8e3*3),s=new Float32Array(8e3),r=[],a=72,o=105;for(let h=0;h<8e3;h++){const d=vt.lerp(a,o,Math.random()),m=Math.random()*Math.PI*2,_=(Math.random()-.5)*4;n[h*3]=Math.cos(m)*d,n[h*3+1]=_,n[h*3+2]=Math.sin(m)*d,s[h]=Math.random()*.15+.05;const g=.01/Math.sqrt(d)*(Math.random()*.5+.75);r.push({radius:d,angle:m,y:_,speed:g})}t.setAttribute("position",new Ft(n,3)),t.setAttribute("size",new Ft(s,1));const u=new Rs({color:8947848,size:.1,transparent:!0,opacity:.8,sizeAttenuation:!0}),l=new Pr(t,u);i.add(l);let c=!1;return{mesh:l,update:(h,d)=>{const m=l.geometry.attributes.position;for(let _=0;_<8e3;_++){const g=r[_];g.angle+=g.speed*h*d,m.setXYZ(_,Math.cos(g.angle)*g.radius,g.y,Math.sin(g.angle)*g.radius)}m.needsUpdate=!0},setViewMode:h=>{c=h;const d=c?220:72,m=c?420:105,_=c?10:1;for(let g=0;g<8e3;g++){const p=r[g];(p.radius-(c?60:220))/(c?25:200),p.ratio===void 0&&(p.ratio=(p.radius-72)/33,p.yBase=p.y),p.radius=vt.lerp(d,m,p.ratio),p.y=p.yBase*_,p.speed=(c?.005:.01)/Math.sqrt(p.radius)*(.75+Math.random()*.5)}},setVisible:h=>{l.visible=h}}}function wg(i){const t=new lt,n=new Float32Array(12e3*3),s=new Float32Array(12e3),r=[],a=450,o=800;for(let c=0;c<12e3;c++){const h=vt.lerp(a,o,Math.pow(Math.random(),.8)),d=Math.random()*Math.PI*2,m=(Math.random()-.5)*(h*.1);n[c*3]=Math.cos(d)*h,n[c*3+1]=m,n[c*3+2]=Math.sin(d)*h,s[c]=Math.random()*.12+.03;const _=.002/Math.sqrt(h)*(Math.random()*.5+.75);r.push({radius:h,angle:d,y:m,yBase:m,speed:_,ratio:(h-a)/(o-a)})}t.setAttribute("position",new Ft(n,3)),t.setAttribute("size",new Ft(s,1));const u=new Rs({color:8965375,size:.12,transparent:!0,opacity:.5,sizeAttenuation:!0,blending:rn}),l=new Pr(t,u);return i.add(l),{mesh:l,update:(c,h)=>{const d=l.geometry.attributes.position;for(let m=0;m<12e3;m++){const _=r[m];_.angle+=_.speed*c*h,d.setXYZ(m,Math.cos(_.angle)*_.radius,_.y,Math.sin(_.angle)*_.radius)}d.needsUpdate=!0},setViewMode:c=>{const h=c?5e3:450,d=c?15e3:800,m=c?15:1;for(let _=0;_<12e3;_++){const g=r[_];g.radius=vt.lerp(h,d,g.ratio),g.y=g.yBase*m,g.speed=.002/Math.sqrt(g.radius)*(.75+Math.random()*.5)}},setVisible:c=>{l.visible=c}}}function Rg(i){const t=new lt,n=new Float32Array(2e4*3),s=new Float32Array(2e4*3);let r=15e3,a=35e3;const o=[];for(let d=0;d<2e4;d++){const m=vt.lerp(r,a,Math.random()),_=Math.random(),g=Math.random(),p=2*Math.PI*_,f=Math.acos(2*g-1),E=m*Math.sin(f)*Math.cos(p),b=m*Math.sin(f)*Math.sin(p),M=m*Math.cos(f);n[d*3]=E,n[d*3+1]=b,n[d*3+2]=M;const T=.5+Math.random()*.5;s[d*3]=.8*T,s[d*3+1]=.9*T,s[d*3+2]=T,o.push({initialRadius:m,theta:p,phi:f,u:_,v:g,speed:(Math.random()-.5)*1e-4})}t.setAttribute("position",new Ft(n,3)),t.setAttribute("color",new Ft(s,3));const u=new Rs({size:8,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,blending:rn,depthWrite:!1}),l=new Pr(t,u);i.add(l),l.visible=!0;let c=r,h=a;return{mesh:l,update:(d,m)=>{if(!l.visible)return;const _=l.geometry.attributes.position;for(let g=0;g<2e4;g++){const p=o[g];p.theta+=p.speed*d*m;const f=p.currentRadius||p.initialRadius;_.setXYZ(g,f*Math.sin(p.phi)*Math.cos(p.theta),f*Math.sin(p.phi)*Math.sin(p.theta),f*Math.cos(p.phi))}_.needsUpdate=!0},setViewMode:d=>{const m=d?6:1;c=15e3*m,h=35e3*m;for(let _=0;_<2e4;_++){const g=o[_],p=(g.initialRadius-15e3)/2e4;g.currentRadius=vt.lerp(c,h,p)}u.size=d?25:8,u.opacity=d?.25:.4},setVisible:d=>{l.visible=d}}}const Cg=[{name:"Alpha Centauri",nameCH:"半人馬座 α",distanceFromSun:276e3,position:{x:-103e3,y:-241e3,z:-86e3},stars:[{name:"Alpha Centauri A",nameCH:"南門二 A",type:"star",radius:1.1,color:16774369,texture:"alphacentauri_a.png",emissiveIntensity:1.5,position:{x:0,y:0,z:0},description:"半人馬座 α A（南門二 A）是系統中的主星，其光譜類型 G2V 與太陽極其相似，是全天第四亮的恆星。",details:{質量:"1.100 太陽質量",表面溫度:"5,790 K",距離:"4.37 光年"},planets:[{name:"Alpha Centauri B",nameCH:"南門二 B",type:"star",radius:.86,color:16765601,texture:"alphacentauri_b.png",orbit:{radius:1265,inclination:15,speed:.1},description:"半人馬座 α B（南門二 B）是系統中的第二顆恆星。",details:{質量:"0.907 太陽質量",表面溫度:"5,260 K"}}]}]},{name:"Sirius",nameCH:"天狼星系",distanceFromSun:543873,position:{x:-102e3,y:-156e3,z:51e4},stars:[{name:"Sirius A",nameCH:"天狼星 A",type:"star",radius:1.711,color:12307711,texture:"sirius_a.png",emissiveIntensity:2,position:{x:0,y:0,z:0},description:"全天最亮的恆星。",details:{質量:"2.06 太陽質量",表面溫度:"9,940 K",光譜類型:"A1V"},planets:[{name:"Sirius B",nameCH:"天狼星 B",type:"star",radius:.1,color:16777215,texture:"sirius_b.png",orbit:{radius:1100,inclination:20,speed:.05},description:"著名的白矮星伴星。",details:{質量:"1.02 太陽質量",表面溫度:"25,200 K"}}]}]},{name:"Castor",nameCH:"北河二 (雙子座 α)",distanceFromSun:3225291,position:{x:15e5,y:12e5,z:-25e5},stars:[{name:"Castor Total Barycenter",nameCH:"北河二總系質心",type:"star",radius:0,position:{x:0,y:0,z:0},planets:[{name:"Castor AB Barycenter",nameCH:"北河二 AB 共同體",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:0},planets:[{name:"Castor A Barycenter",nameCH:"北河二 A 質心",type:"star",radius:0,orbit:{radius:15e3,speed:.05,inclination:5,startAngle:0},planets:[{name:"Castor A1 (Aa)",nameCH:"北河二 A1",type:"star",radius:2.3,color:16777215,texture:"castor_a.png",orbit:{radius:800,speed:.3,inclination:0,startAngle:0},description:"A1V 型藍白主序星。",details:{質量:"2.76 太陽質量"}},{name:"Castor A2 (Ab)",nameCH:"北河二 A2",type:"star",radius:.5,color:16729344,texture:"castor_c.png",orbit:{radius:800,speed:.3,inclination:0,startAngle:Math.PI},description:"紅矮星伴星，週期 9.2 天。"}]}]},{name:"Castor C Barycenter",nameCH:"北河二 C 質心",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:Math.PI},planets:[{name:"Castor C1 (Ca)",nameCH:"北河二 C1",type:"star",radius:.62,color:16729344,texture:"castor_c.png",orbit:{radius:800,speed:.8,inclination:0,startAngle:0},description:"YY Gem 紅矮星。"}]}]}]},{name:"Scorpius X-1",nameCH:"天蠍座 X-1",distanceFromSun:569e6,position:{x:2e8,y:-45e7,z:25e7},stars:[{name:"Scorpius X-1 (Neutron Star)",nameCH:"天蠍座 X-1 (中子星)",type:"star",radius:.1,color:14745599,hasAccretionDisk:!0,diskColor:52479,diskRadius:800,hasRelativisticJets:!0,jetColor:52479,position:{x:0,y:0,z:0},description:"由中子星吸取伴星物質形成吸積盤。",details:{核心天體:"中子星",距離:"9,000 光年"},planets:[{name:"V818 Scorpii",nameCH:"天蠍座 V818",type:"star",radius:1.2,color:4286945,isDistorted:!0,distortionAxes:{x:1,y:1,z:2.2},hasGasStream:!0,orbit:{radius:1500,speed:1.5,inclination:30,startAngle:0},description:"已被潮汐力拉伸成明顯的淚滴狀，並向中子星輸送物質。",details:{公轉週期:"18.9 小時",系統類型:"低質量 X 射線聯星 (LMXB)"}}]}]}];function Pg(i,e){const t=new en,n=[],s=[],r=[],a=[],o=[],u=[],l=e?new Yi(e):new Yi,c=(g="disk")=>{const f=document.createElement("canvas");f.width=1024,f.height=1024;const E=f.getContext("2d");if(E.clearRect(0,0,1024,1024),g==="disk"){const M=E.createRadialGradient(512,512,0,512,512,512);M.addColorStop(0,"rgba(255, 255, 255, 1)"),M.addColorStop(.1,"rgba(120, 245, 255, 0.95)"),M.addColorStop(.3,"rgba(40, 160, 255, 0.45)"),M.addColorStop(.7,"rgba(0, 30, 100, 0.1)"),M.addColorStop(1,"rgba(0, 0, 0, 0)"),E.fillStyle=M,E.fillRect(0,0,1024,1024),E.globalCompositeOperation="lighter";for(let T=0;T<3e3;T++){const A=Math.random()*Math.PI*2,R=Math.pow(Math.random(),.7)*1024/2;E.fillStyle=`rgba(180, 240, 255, ${Math.random()*.05})`,E.beginPath(),E.arc(1024/2+Math.cos(A)*R,1024/2+Math.sin(A)*R,Math.random()*2+1,0,Math.PI*2),E.fill()}}else{const M=E.createRadialGradient(512,512,0,512,512,512);M.addColorStop(0,"rgba(255, 255, 255, 0.8)"),M.addColorStop(.3,"rgba(255, 255, 255, 0.3)"),M.addColorStop(1,"rgba(255, 255, 255, 0)"),E.fillStyle=M,E.fillRect(0,0,1024,1024),E.globalCompositeOperation="lighter";for(let T=0;T<1e3;T++){const A=Math.random()*1024,R=Math.random()*1024,I=Math.random()*80+20,v=E.createRadialGradient(A,R,0,A,R,I);v.addColorStop(0,`rgba(255, 255, 255, ${Math.random()*.1})`),v.addColorStop(1,"rgba(255, 255, 255, 0)"),E.fillStyle=v,E.fillRect(A-I,R-I,I*2,I*2)}}const b=new Zh(f);return b.wrapS=b.wrapT=_n,b.anisotropy=16,b},h=c("disk"),d=c("plume"),m=(g,p,f,E=0,b)=>{let M;const T=g.radius??1,A=g.type==="star"?50:40,R=T*A;if(T>0){const v=g.isDistorted?new zn(1,64,64):new zn(1,48,48),S=new Jt({color:g.color||16777215,emissive:g.color||16777215,emissiveIntensity:5});g.texture&&(S.map=l.load(`textures/${g.texture}`)),M=new Ne(v,S),g.isDistorted&&g.distortionAxes?M.scale.set(R*(g.distortionAxes.x||1),R*(g.distortionAxes.y||1),R*(g.distortionAxes.z||1.8)):M.scale.setScalar(R),s.push(M)}else M=new St;const I=g.distortionAxes?Math.max(g.distortionAxes.x||1,g.distortionAxes.y||1,g.distortionAxes.z||1.8):1;if(M.userData={...g,name:g.name,visualScale:R,maxVisualRadius:R*I,parentName:p,depth:E,angle:g.orbit?.startAngle??Math.random()*Math.PI*2},f.add(M),n.push(M),g.hasRelativisticJets){const v=new en,S=R*900,C=new hn(R*.1,R*4,S,32,1,!0),F=new En({color:52479,map:h,transparent:!0,opacity:.35,blending:rn,side:Ut}),O=new Ne(C,F);O.position.y=S/2;const W=new Ne(C,F.clone());W.position.y=-S/2,W.rotation.z=Math.PI,v.add(O,W),f.add(v),u.push({group:v,parentName:g.name})}if(g.hasAccretionDisk){const v=g.diskRadius||R*20,S=new en;for(let C=0;C<4;C++){const F=v*(1+C*.15),O=new Ne(new Ss(R*.1,F,128),new En({map:h,transparent:!0,opacity:.8-C*.2,blending:rn,side:Ut,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.y=(C-1.5)*(v*.04),S.add(O)}f.add(S),a.push({group:S,parentName:g.name,outerRadius:v})}if(g.hasGasStream){const S=new en;for(let C=0;C<150;C++){const F=new En({map:d,transparent:!0,opacity:0,blending:rn,side:Ut,depthWrite:!1}),O=new Ne(new Cs(1,1),F);O.userData={t:C/150,seed:Math.random()},S.add(O)}f.add(S),o.push({group:S,source:g.name,target:p})}if(g.orbit){constpts=[];for(let S=0;S<=128;S++){const C=S/128*Math.PI*2;pts.push(new D(Math.cos(C)*g.orbit.radius,0,Math.sin(C)*g.orbit.radius))}const v=new ur(new lt().setFromPoints(pts),new vs({color:16729139,transparent:!0,opacity:.3}));g.orbit.inclination&&(v.rotation.x=vt.degToRad(g.orbit.inclination)),v.userData={parentName:p},f.add(v),r.push(v)}g.planets&&g.planets.forEach(v=>m(v,g.name,f,E+1))};Cg.forEach(g=>{const p=new en;p.position.set(g.position.x,g.position.y,g.position.z),g.stars.forEach(f=>m(f,null,p,0,g.name)),t.add(p)}),i.add(t),n.sort((g,p)=>g.userData.depth-p.userData.depth);const _=new D;return{group:t,allSelectable:s,update:(g,p)=>{const f=Date.now()*.001;n.forEach(E=>{const b=E.userData;if(!b.orbit)return;const M=b.parentName?n.find(I=>I.userData.name===b.parentName):null;if(!M)return;b.angle+=(b.orbit.speed||.1)*g*p*.1;const T=b.orbit.radius,A=Math.cos(b.angle)*T,R=Math.sin(b.angle)*T;if(b.orbit.inclination){const I=vt.degToRad(b.orbit.inclination);E.position.set(M.position.x+A,M.position.y-R*Math.sin(I),M.position.z+R*Math.cos(I))}else E.position.set(M.position.x+A,M.position.y,M.position.z+R);b.isDistorted&&(M.getWorldPosition(_),E.lookAt(_))}),a.forEach(E=>{const b=n.find(M=>M.userData.name===E.parentName);b&&(E.group.position.copy(b.position),E.group.children.forEach((M,T)=>M.rotation.z+=(.04-T*.01)*g))}),u.forEach(E=>{const b=n.find(M=>M.userData.name===E.parentName);b&&(E.group.position.copy(b.position),E.group.children.forEach(M=>M.material.map.offset.y-=3*g*p))}),o.forEach(E=>{const b=n.find(A=>A.userData.name===E.source),M=n.find(A=>A.userData.name===E.target),T=a.find(A=>A.parentName===E.target);if(b&&M&&T){const A=new D().subVectors(M.position,b.position).normalize();if(isNaN(A.x))return;const R=new D(-A.z,0,A.x).normalize(),I=b.position.distanceTo(M.position),v=b.userData.visualScale*(b.userData.distortionAxes?.z||1.8),C=b.position.clone().add(A.clone().multiplyScalar(v)),F=b.position.clone().add(A.clone().multiplyScalar(I*.4)).add(R.clone().multiplyScalar(T.outerRadius*2.2)),O=M.position.clone().add(A.clone().multiplyScalar(-T.outerRadius*1.5)).add(R.clone().multiplyScalar(T.outerRadius*1.5)),W=M.position.clone().add(R.clone().multiplyScalar(T.outerRadius*1)),H=new xo([C,F,O,W],!1,"centripetal",.5),G=new ke(16746530),z=new ke(3390719);E.group.children.forEach((j,re)=>{const ee=j.userData;ee.t=(re/E.group.children.length+f*.1*g)%1;const ce=H.getPoint(ee.t);j.position.copy(ce),j.lookAt(i.parent?i.parent.camera.position:i.position);const De=b.userData.visualScale*(3+Math.sin(f+ee.seed*10)*.5)*(1.5-ee.t);j.scale.setScalar(De),j.rotation.z=ee.seed*Math.PI*2+f*.5;const Ce=G.clone().lerp(z,Math.pow(ee.t,1.2));j.material.color.copy(Ce),j.material.opacity=Math.sin(ee.t*Math.PI)*.45})}}),r.forEach(E=>{const b=n.find(M=>M.userData.name===E.userData.parentName);b&&E.position.copy(b.position)})},getStarMeshes:()=>s,setVisible:(g,p,f,E)=>{r.forEach(b=>b.visible=f)}}}const an=new Wh,Rt=new Yt(45,window.innerWidth/window.innerHeight,.1,1e9),wn=new lg({antialias:!0,logarithmicDepthBuffer:!0});wn.setSize(window.innerWidth,window.innerHeight);wn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("app").appendChild(wn.domElement);wn.toneMapping=Ro;wn.toneMappingExposure=.8;Rt.position.set(0,60,450);Rt.lookAt(0,0,0);const Dg=document.getElementById("loading-screen"),Lg=document.getElementById("loading-bar"),su=document.getElementById("loading-status"),ru={"starmap_8k.jpg":"深空背景","saturn_ring_v3.png":"土星環"},au=i=>{i.forEach(e=>{e.texture&&(ru[e.texture]=e.nameCH||e.name),e.satellites&&au(e.satellites)})};au(iu);const Ki=new Yc;Ki.onProgress=(i,e,t)=>{const n=e/t*100;Lg.style.width=n+"%";const s=i.split("/").pop().split("?")[0],r=ru[s]||s;su.innerText=`正在探索 ${r}`};Ki.onLoad=()=>{setTimeout(()=>{Dg.classList.add("fade-out")},500)};Ki.onError=i=>{console.error("There was an error loading "+i),su.innerText="部分資源讀取失敗，正在嘗試繼續..."};const Sa=bg(an,Ki),ou=Tg(an);ou.mesh.visible=!1;const wt=new ug(Rt,wn.domElement);wt.enableDamping=!0;wt.target.set(0,0,0);const ys=()=>{const i=window.innerWidth,e=window.innerHeight;Rt.aspect=i/e,Rt.updateProjectionMatrix(),wn.setSize(i,e)};window.addEventListener("resize",ys);window.addEventListener("orientationchange",()=>setTimeout(ys,200));ys();wt.update();wt.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN};wt.maxDistance=1e6;const Ig=new od(16777215,.15);an.add(Ig);const lu=new Zc(16777215,300,15e3,1.2);lu.position.set(0,0,0);an.add(lu);const Ug=new id(16777215,0,.2);an.add(Ug);let dt=.1;const cu=document.getElementById("speed-display"),ft=Eg(an,Ki);ft.setSpeedMultiplier(dt);cu.innerText=`${dt.toFixed(1)}x`;const Qn=Ag(an),ei=wg(an),ti=Rg(an),ot=Pg(an,Ki);ot&&ot.group&&(ot.group.rotation.x=vt.degToRad(-63),ot.group.rotation.z=vt.degToRad(45));let zi=!0,dr=!1,fr=!1,pr=!1,mr=!1,gr=!1,_r=!0,xr=!1,vr=!1,hs=!0,ds=!0,Mr=!0;const tn=()=>{ft&&(ft.setOrbitsVisibleByType("planet",zi),ft.setOrbitsVisibleByType("star",zi),ft.setOrbitsVisibleByType("dwarf_planet",pr),ft.setOrbitsVisibleByType("dwarf_planet_candidate",mr),ft.setOrbitsVisibleByType("interstellar",gr),ft.setOrbitsVisibleByType("asteroid",xr),ft.setOrbitsVisibleByType("comet",vr),ft.setSatOrbitsVisibleByType("satellite",dr),ft.setSatOrbitsVisibleByType("space_station",fr)),ot&&ot.setVisible(_r,zi,hs,ds),Qn&&Qn.setVisible(hs),ei&&ei.setVisible(ds),ti&&ti.setVisible(Mr)};tn();const ya=new ud,Ea=new Re;let tt=null;const Es=document.getElementById("info-panel"),Ng=document.getElementById("info-title"),Fg=document.getElementById("info-description"),rc=document.getElementById("info-details"),Og=document.getElementById("close-info"),Bg=document.getElementById("reset-view");let yo=!1,Eo={x:0,y:0},wr=!1,Hn=!1,bo=new D;window.addEventListener("pointerdown",i=>{yo=!0,Eo={x:i.clientX,y:i.clientY}});window.addEventListener("pointerup",i=>{if(!yo)return;yo=!1;const e=Math.abs(i.clientX-Eo.x),t=Math.abs(i.clientY-Eo.y),n=window.innerWidth<=1100?15:5;e>n||t>n||i.pointerType==="mouse"&&i.button!==0&&i.button!==2||zg(i.clientX,i.clientY,i.target)});function zg(i,e,t){if(t.closest("#controls")||t.closest("#sub-menu")||t.closest("#info-panel")||t.closest(".search-result-item")||t.tagName==="BUTTON"||t.tagName==="INPUT"||t.tagName==="A"||Rr)return;const s=wn.domElement.getBoundingClientRect();Ea.x=(i-s.left)/s.width*2-1,Ea.y=-((e-s.top)/s.height)*2+1,ya.setFromCamera(Ea,Rt);const r=ft.getBodies(),a=[];r.forEach(u=>{a.push(u.mesh),u.satellites.forEach(l=>a.push(l.mesh))}),ot&&a.push(...ot.getStarMeshes());const o=ya.intersectObjects(a,!0);if(o.length>0){let u=null,l=null;for(let c=0;c<o.length;c++){let h=o[c].object;for(;h;){if(h.userData&&h.userData.description){u=h,l=h.userData;break}h=h.parent}if(u)break}l&&kt(u)}else if(!Es.classList.contains("hidden"))uu();else{tt=null;const u=new D;Rt.getWorldDirection(u).negate();const l=new Fn().setFromNormalAndCoplanarPoint(u,wt.target),c=new D;ya.ray.intersectPlane(l,c),c&&wt.target.copy(c)}}wt.addEventListener("start",()=>{wr=!0,Hn=!1});window.addEventListener("wheel",()=>{Hn=!1},{passive:!0});wt.addEventListener("end",()=>{wr=!1});window.addEventListener("contextmenu",i=>{i.pointerType==="mouse"&&!document.getElementById("controls").contains(i.target)&&!document.getElementById("search-results").contains(i.target)&&i.preventDefault()});function uu(){Es.classList.add("hidden")}Og.addEventListener("click",()=>{uu()});Bg.addEventListener("click",i=>{i.stopPropagation(),tt&&(Hn=!0)});function kg(i){Ng.innerText=`${i.name}   ${i.nameCH||""}`,Fg.innerText=i.description||"暫無介紹。",rc.innerHTML="",["質量","體積","直徑","光度","核心溫度","表面溫度","光譜類型"].forEach(t=>{const n=i.details&&i.details[t]?i.details[t]:"N/A",s=document.createElement("div");s.className="info-detail-item",s.innerHTML=`
      <span class="info-detail-label">${t}</span>
      <span class="info-detail-value">${n}</span>
    `,rc.appendChild(s)}),Es.classList.remove("hidden")}let hu=null,du=null;const Nr=i=>{Rn();const e=()=>{i?dt<.1?dt=.1:dt<.5?dt=.5:dt+=.5:dt>.5?dt-=.5:dt>.1?dt=.1:dt=0,pu()};e(),hu=setTimeout(()=>{du=setInterval(e,100)},2e3)},Rn=()=>{clearTimeout(hu),clearInterval(du)},$i=document.getElementById("slow"),Ji=document.getElementById("fast");$i.addEventListener("mousedown",()=>Nr(!1));Ji.addEventListener("mousedown",()=>Nr(!0));$i.addEventListener("mouseup",Rn);Ji.addEventListener("mouseup",Rn);window.addEventListener("mouseup",Rn);$i.addEventListener("mouseleave",Rn);Ji.addEventListener("mouseleave",Rn);$i.addEventListener("touchstart",i=>{i.preventDefault(),Nr(!1)});Ji.addEventListener("touchstart",i=>{i.preventDefault(),Nr(!0)});$i.addEventListener("touchend",Rn);Ji.addEventListener("touchend",Rn);$i.addEventListener("touchcancel",Rn);Ji.addEventListener("touchcancel",Rn);let fs=!1,ba=.1;const Vg=document.getElementById("pause"),To=document.getElementById("pause-icon"),fu='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18V8M15 18V8"/></svg>',Hg='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>';Vg.addEventListener("click",()=>{fs?(dt=ba===0?.1:ba,fs=!1,To.innerHTML=fu):(ba=dt,dt=0,fs=!0,To.innerHTML=Hg),pu()});function pu(){ft.setSpeedMultiplier(dt),cu.innerText=`${dt.toFixed(1)}x`,dt>0&&fs&&(fs=!1,To.innerHTML=fu)}const Wo=document.getElementById("menu-toggle"),ps=document.getElementById("sub-menu"),Sr=document.getElementById("mode-artistic"),yr=document.getElementById("mode-real");document.getElementById("toggle-orbits");const mu=i=>{i.stopPropagation(),ps.classList.toggle("hidden")};Wo.addEventListener("click",mu);Wo.addEventListener("touchstart",i=>{i.preventDefault(),mu(i)},{passive:!1});window.addEventListener("click",i=>{!ps.classList.contains("hidden")&&!ps.contains(i.target)&&i.target!==Wo&&ps.classList.add("hidden")});const ac=document.getElementById("toggle-manmade-orbit"),oc=document.getElementById("toggle-planet-orbit"),lc=document.getElementById("toggle-sat-orbit"),cc=document.getElementById("toggle-dwarf-orbit"),uc=document.getElementById("toggle-candidate-orbit"),hc=document.getElementById("toggle-interstellar-orbit"),dc=document.getElementById("toggle-asteroid-orbit"),fc=document.getElementById("toggle-comet-orbit"),pc=document.getElementById("toggle-belt"),mc=document.getElementById("toggle-kuiper"),gc=document.getElementById("toggle-oort"),_c=document.getElementById("toggle-star-orbit");ac.addEventListener("click",()=>{fr=!fr,ac.classList.toggle("active",fr),tn()});oc.addEventListener("click",()=>{zi=!zi,oc.classList.toggle("active",zi),tn()});lc.addEventListener("click",()=>{dr=!dr,lc.classList.toggle("active",dr),tn()});cc.addEventListener("click",()=>{pr=!pr,cc.classList.toggle("active",pr),tn()});uc.addEventListener("click",()=>{mr=!mr,uc.classList.toggle("active",mr),tn()});hc.addEventListener("click",()=>{gr=!gr,hc.classList.toggle("active",gr),tn()});_c.addEventListener("click",()=>{_r=!_r,_c.classList.toggle("active",_r),tn()});dc.addEventListener("click",()=>{xr=!xr,dc.classList.toggle("active",xr),tn()});pc.addEventListener("click",()=>{hs=!hs,pc.classList.toggle("active",hs),tn()});mc.addEventListener("click",()=>{ds=!ds,mc.classList.toggle("active",ds),tn()});fc.addEventListener("click",()=>{vr=!vr,fc.classList.toggle("active",vr),tn()});gc.addEventListener("click",()=>{Mr=!Mr,gc.classList.toggle("active",Mr),tn()});Sr.addEventListener("click",()=>{Sr.classList.contains("active")||(Sr.classList.add("active"),yr.classList.remove("active"),ft.setViewMode(!1),Qn&&Qn.setViewMode(!1),ei&&ei.setViewMode(!1),ti&&ti.setViewMode(!1),tt?Hn=!0:(Rt.position.set(0,150,250),Rt.lookAt(0,0,0)))});yr.addEventListener("click",()=>{yr.classList.contains("active")||(yr.classList.add("active"),Sr.classList.remove("active"),ft.setViewMode(!0),Qn&&Qn.setViewMode(!0),ei&&ei.setViewMode(!0),ti&&ti.setViewMode(!0),tt&&(Hn=!0))});const ki=document.getElementById("planet-search"),Vt=document.getElementById("search-results"),bs=document.getElementById("clear-search"),Ao=document.getElementById("reset-to-sun");let Rr=!1;const Gg={planet:"行星",star:"恆星",dwarf_planet:"矮行星",dwarf_planet_candidate:"候選/TNO",asteroid:"小行星",interstellar:"星際天體",satellite:"衛星",comet:"彗星",space_station:"人造物體"};function kt(i,e=!1){tt=i;const t=i.userData;Hn=!0,kg(t),tt.updateMatrixWorld(!0),tt.getWorldPosition(bo),e?(ki.blur(),setTimeout(()=>{tt===i&&(Hn=!0,ys())},450)):(!tt||tt!==i)&&(ys(),Vt.classList.add("hidden"),Vt.innerHTML="",ki.value="",bs.classList.add("hidden"))}ki.addEventListener("input",()=>{const i=ki.value.trim().toLowerCase();if(bs.classList.toggle("hidden",i===""),i.length<1){Vt.innerHTML="",Vt.classList.add("hidden");return}const e=ft.getBodies(),t=[];e.forEach(s=>{t.push({mesh:s.mesh,data:s.data,type:s.data.type}),s.satellites.forEach(r=>{t.push({mesh:r.mesh,data:r.data,type:"satellite"})})}),ot&&ot.getStarMeshes().forEach(r=>{t.push({mesh:r,data:r.userData,type:"star"})});const n=t.filter(s=>s.data.name.toLowerCase().includes(i)||s.data.nameCH&&s.data.nameCH.includes(i));n.length>0?(Vt.innerHTML=n.map(s=>`
      <div class="search-result-item" data-id="${s.data.name}">
        <div class="result-name">${s.data.nameCH||s.data.name}</div>
        <div class="result-type">${Gg[s.type]||s.type}</div>
      </div>
    `).join(""),Vt.classList.remove("hidden"),Vt.querySelectorAll(".search-result-item").forEach(s=>{const r=a=>{a.stopPropagation(),a.preventDefault(),Rr=!0;const o=s.getAttribute("data-id"),u=t.find(l=>l.data.name===o);u&&kt(u.mesh,!0),setTimeout(()=>{Vt.classList.add("hidden"),Vt.innerHTML="",ki.value="",bs.classList.add("hidden"),Rr=!1},800)};s.addEventListener("mousedown",r),s.addEventListener("touchstart",r,{passive:!1})})):(Vt.innerHTML='<div class="search-result-item">無符合天體</div>',Vt.classList.remove("hidden"))});bs.addEventListener("click",i=>{i.stopPropagation(),ki.value="",bs.classList.add("hidden"),Vt.innerHTML="",Vt.classList.add("hidden")});const Ct=document.getElementById("system-menu");Ao.addEventListener("click",i=>{i.stopPropagation(),Ct.classList.toggle("hidden"),ps.classList.add("hidden"),Vt.classList.add("hidden")});Ct.querySelectorAll(".system-menu-item").forEach(i=>{i.addEventListener("click",e=>{e.stopPropagation();const t=i.getAttribute("data-id");if(t==="solar"){const s=ft.getBodies().find(r=>r.data.name==="Sun");s&&kt(s.mesh),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="alpha-centauri"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Alpha Centauri A");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="barnards"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Barnard's Star");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="wolf359"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Wolf 359");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="lalande"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Lalande 21185");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="sirius"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Sirius A");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="luyten"){const s=ot.getStarMeshes().find(r=>r.userData.name==="BL Ceti");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="ross154"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Ross 154");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="ross248"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Ross 248");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="epsilon"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Epsilon Eridani");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="lacaille"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Lacaille 9352");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="castor"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Castor A1 (Aa)");s&&kt(s)}else if(t==="scorpius"){const s=ot.getStarMeshes().find(r=>r.userData.name==="Scorpius X-1 (Neutron Star)");s&&kt(s),Ct.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}Ct.classList.add("hidden")})});window.addEventListener("mousedown",i=>{document.getElementById("search-container").contains(i.target)||Vt.classList.add("hidden"),!Ct.contains(i.target)&&i.target!==Ao&&!Ao.contains(i.target)&&Ct.classList.add("hidden")});window.addEventListener("resize",()=>{Rt.aspect=window.innerWidth/window.innerHeight,Rt.updateProjectionMatrix(),wn.setSize(window.innerWidth,window.innerHeight)});const Wg=["controls","sub-menu","info-panel","system-menu"];Wg.forEach(i=>{const e=document.getElementById(i);if(!e)return;const t=n=>n.stopPropagation();["mousedown","mouseup","click","dblclick","wheel","touchstart","touchend","touchmove"].forEach(n=>{e.addEventListener(n,t)})});const Xg=new cd,Nn=new D,ui=new D,Ui=new D,Ta=new D,xc=new D;function gu(){requestAnimationFrame(gu);const i=Xg.getDelta(),e=Math.min(i,.1);ft&&ft.update(e),Qn&&Qn.update(dt,e),ei&&ei.update(dt,e),ti&&ti.update(dt,e),ot&&ot.update(dt,e),Sa&&Sa.update&&Sa.update(Rt.position,e);const t=Es&&!Es.classList.contains("hidden");if(t?(wt.enablePan=!1,wt.mouseButtons.RIGHT=fn.ROTATE):(wt.enablePan=!0,wt.mouseButtons.RIGHT=fn.PAN),tt){if(tt.updateMatrixWorld(!0),tt.getWorldPosition(Nn),Hn){const s=ft.isRealScale(),r=tt.userData.isInterstellar;let a=s&&tt.userData.realScaleRadius||tt.userData.radius;r&&(a=tt.userData.maxVisualRadius||tt.userData.visualScale);const o=r?25:window.innerWidth<=480?18:window.innerWidth<=1100?12:6,u=a*o,l=Rt.position.distanceTo(Nn),c=vt.lerp(l,u,.05);ui.subVectors(Rt.position,Nn).normalize(),Ui.copy(Nn).add(ui.multiplyScalar(c)),Rt.position.copy(Ui),Math.abs(l-u)<a*.1&&(Hn=!1)}if(t){if(ui.subVectors(Nn,bo),Rt.position.add(ui),Ui.copy(Nn),window.innerWidth<=1100){const s=window.innerWidth<=480,r=window.innerWidth>window.innerHeight;ui.subVectors(Rt.position,Nn).normalize(),Ta.set(0,1,0).cross(ui).normalize(),xc.crossVectors(ui,Ta).normalize();const a=ft.isRealScale(),o=tt.userData.isInterstellar;let u=a&&tt.userData.realScaleRadius||tt.userData.radius;o&&(u=tt.userData.maxVisualRadius||tt.userData.visualScale);const c=u*(s?25:15);if(r)Ui.add(Ta.multiplyScalar(c*.18));else{const h=s?-.12:-.08;Ui.add(xc.multiplyScalar(c*h))}}wt.target.copy(Ui)}else!wr&&tt&&wt.target.lerp(Nn,.1);bo.copy(Nn)}const n=wt.target.clone();wt.update(),!t&&wr&&wt.target.distanceTo(n)>.01&&(tt=null),wn.render(an,Rt)}gu();window.scene=an;window.ship=ou;window.solarSystem=ft;
