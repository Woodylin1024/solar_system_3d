(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const wo="182",fn={ROTATE:0,DOLLY:1,PAN:2},Oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Au=0,el=1,wu=2,sr=1,Ru=2,us=3,Jn=0,Nt=1,Ht=2,Fn=0,Bi=1,sn=2,tl=3,nl=4,Cu=5,hi=100,Pu=101,Du=102,Lu=103,Iu=104,Uu=200,Nu=201,Fu=202,Ou=203,wa=204,Ra=205,Bu=206,zu=207,ku=208,Vu=209,Hu=210,Gu=211,Wu=212,Xu=213,qu=214,Ca=0,Pa=1,Da=2,Hi=3,La=4,Ia=5,Ua=6,Na=7,Sc=0,Yu=1,ju=2,Mn=0,yc=1,Ec=2,bc=3,Ro=4,Tc=5,Ac=6,wc=7,Rc=300,pi=301,Gi=302,Fa=303,Oa=304,Cr=306,Nn=1e3,_n=1001,Ba=1002,Dt=1003,Zu=1004,Ds=1005,Mt=1006,zr=1007,Zn=1008,Qt=1009,Cc=1010,Pc=1011,xs=1012,Co=1013,yn=1014,xn=1015,zn=1016,Po=1017,Do=1018,vs=1020,Dc=35902,Lc=35899,Ic=1021,Uc=1022,hn=1023,kn=1026,fi=1027,Nc=1028,Lo=1029,Wi=1030,Io=1031,Uo=1033,rr=33776,ar=33777,or=33778,lr=33779,za=35840,ka=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,ja=37490,Za=37491,Ka=37808,$a=37809,Ja=37810,Qa=37811,eo=37812,to=37813,no=37814,io=37815,so=37816,ro=37817,ao=37818,oo=37819,lo=37820,co=37821,uo=36492,ho=36494,fo=36495,po=36283,mo=36284,go=36285,_o=36286,Ku=3200,Fc=0,$u=1,jn="",qt="srgb",Xi="srgb-linear",yr="linear",Je="srgb",Mi=7680,il=519,Ju=512,Qu=513,eh=514,No=515,th=516,nh=517,Fo=518,ih=519,sl=35044,rl="300 es",vn=2e3,Er=2001;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sh(){const i=Ms("canvas");return i.style.display="block",i}const al={};function ol(...i){const e="THREE."+i.shift();console.log(e,...i)}function we(...i){const e="THREE."+i.shift();console.warn(e,...i)}function We(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ss(...i){const e=i.join(" ");e in al||(al[e]=!0,we(...i))}function rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const ds=Math.PI/180,qi=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function Ne(i,e,t){return Math.max(e,Math.min(t,i))}function Oo(i,e){return(i%e+e)%e}function ah(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function oh(i,e,t){return i!==e?(t-i)/(e-i):0}function fs(i,e,t){return(1-t)*i+t*e}function lh(i,e,t,n){return fs(i,e,1-Math.exp(-t*n))}function ch(i,e=1){return e-Math.abs(Oo(i,e*2)-e)}function uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fh(i,e){return i+Math.random()*(e-i)}function ph(i){return i*(.5-Math.random())}function mh(i){i!==void 0&&(ll=i);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gh(i){return i*ds}function _h(i){return i*qi}function xh(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),h=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*u,o*l);break;case"XZX":i.set(o*u,c*_,c*h,o*l);break;case"YXY":i.set(c*h,o*u,c*_,o*l);break;case"ZYZ":i.set(c*_,c*h,o*u,o*l);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:ds,RAD2DEG:qi,generateUUID:Ki,clamp:Ne,euclideanModulo:Oo,mapLinear:ah,inverseLerp:oh,lerp:fs,damp:lh,pingpong:ch,smoothstep:uh,smootherstep:hh,randInt:dh,randFloat:fh,randFloatSpread:ph,seededRandom:mh,degToRad:gh,radToDeg:_h,isPowerOfTwo:xh,ceilPowerOfTwo:vh,floorPowerOfTwo:Mh,setQuaternionFromProperEuler:Sh,normalize:Ot,denormalize:Fi};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],h=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==f||l!==h||u!==_){let p=c*f+l*h+u*_+d*g;p<0&&(f=-f,h=-h,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const E=Math.acos(p),T=Math.sin(E);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T,c=c*m+f*o,l=l*m+h*o,u=u*m+_*o,d=d*m+g*o}else{c=c*m+f*o,l=l*m+h*o,u=u*m+_*o,d=d*m+g*o;const E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],f=r[a+1],h=r[a+2],_=r[a+3];return e[t]=o*_+u*d+c*h-l*f,e[t+1]=c*_+u*f+l*d-o*h,e[t+2]=l*_+u*h+o*f-c*d,e[t+3]=u*_-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),f=c(n/2),h=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=f*u*d+l*h*_,this._y=l*h*d-f*u*_,this._z=l*u*_+f*h*d,this._w=l*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+l*h*_,this._y=l*h*d-f*u*_,this._z=l*u*_-f*h*d,this._w=l*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-l*h*_,this._y=l*h*d+f*u*_,this._z=l*u*_+f*h*d,this._w=l*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-l*h*_,this._y=l*h*d+f*u*_,this._z=l*u*_-f*h*d,this._w=l*u*d+f*h*_;break;case"YZX":this._x=f*u*d+l*h*_,this._y=l*h*d+f*u*_,this._z=l*u*_-f*h*d,this._w=l*u*d-f*h*_;break;case"XZY":this._x=f*u*d-l*h*_,this._y=l*h*d-f*u*_,this._z=l*u*_+f*h*d,this._w=l*u*d+f*h*_;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(r-l)*h,this._z=(a-s)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(r-l)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-s)/h,this._x=(r+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ne(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kr.copy(this).projectOnVector(e),this.sub(kr)}reflect(e){return this.sub(kr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ne(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kr=new D,cl=new mi;class Ie{constructor(e,t,n,s,r,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],g=s[0],p=s[3],m=s[6],E=s[1],T=s[4],y=s[7],b=s[2],w=s[5],R=s[8];return r[0]=a*g+o*E+c*b,r[3]=a*p+o*T+c*w,r[6]=a*m+o*y+c*R,r[1]=l*g+u*E+d*b,r[4]=l*p+u*T+d*w,r[7]=l*m+u*y+d*R,r[2]=f*g+h*E+_*b,r[5]=f*p+h*T+_*w,r[8]=f*m+h*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*r,h=l*r-a*c,_=t*d+n*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*l-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=h*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Ie,ul=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yh(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:ul,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}const Xe=yh();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class Eh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Ms("canvas")),Si.width=e.width,Si.height=e.height;const s=Si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bh=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hr(s[a].image)):r.push(Hr(s[a]))}else r=Hr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Hr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let Th=0;const Gr=new D;class Lt extends _i{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=_n,s=_n,r=Mt,a=Zn,o=hn,c=Qt,l=Lt.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ki(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gr).x}get height(){return this.source.getSize(Gr).y}get depth(){return this.source.getSize(Gr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case Ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case Ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Rc;Lt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],_=c[9],g=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,y=(h+1)/2,b=(m+1)/2,w=(u+f)/4,R=(d+g)/4,L=(_+p)/4;return T>y&&T>b?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=R/n):y>b?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=L/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=L/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-_)/E,this.y=(d-g)/E,this.z=(f-u)/E,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ne(this.x,e.x,t.x),this.y=Ne(this.y,e.y,t.y),this.z=Ne(this.z,e.z,t.z),this.w=Ne(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ne(this.x,e,t),this.y=Ne(this.y,e,t),this.z=Ne(this.z,e,t),this.w=Ne(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ne(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bc extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),Is.subVectors(this.max,is),yi.subVectors(e.a,is),Ei.subVectors(e.b,is),bi.subVectors(e.c,is),Hn.subVectors(Ei,yi),Gn.subVectors(bi,Ei),si.subVectors(yi,bi);let t=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!Wr(t,yi,Ei,bi,Is)||(t=[1,0,0,0,1,0,0,0,1],!Wr(t,yi,Ei,bi,Is))?!1:(Us.crossVectors(Hn,Gn),t=[Us.x,Us.y,Us.z],Wr(t,yi,Ei,bi,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,Ls=new ws,yi=new D,Ei=new D,bi=new D,Hn=new D,Gn=new D,si=new D,is=new D,Is=new D,Us=new D,ri=new D;function Wr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Rh=new ws,ss=new D,Xr=new D;class $i{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ss,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(Xr)),this.expandByPoint(ss.copy(e.center).sub(Xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new D,qr=new D,Ns=new D,Wn=new D,Yr=new D,Fs=new D,jr=new D;class Rs{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qr.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(qr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Wn.dot(this.direction),c=-Wn.dot(Ns),l=Wn.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*c-o,f=a*o-c,_=r*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,h=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qr).addScaledVector(Ns,f),h}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),s=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,s,r){Yr.subVectors(t,e),Fs.subVectors(n,e),jr.crossVectors(Yr,Fs);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,e);const c=o*this.direction.dot(Fs.crossVectors(Wn,Fs));if(c<0)return null;const l=o*this.direction.dot(Yr.cross(Wn));if(l<0||c+l>a)return null;const u=-o*Wn.dot(jr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,c,l,u,d,f,h,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,f,h,_,g,p)}set(e,t,n,s,r,a,o,c,l,u,d,f,h,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ti.setFromMatrixColumn(e,0).length(),r=1/Ti.setFromMatrixColumn(e,1).length(),a=1/Ti.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+_*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=_+h*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,_=l*u,g=l*d;t[0]=f+g*o,t[4]=_*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=g+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,_=l*u,g=l*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,g=o*d;t[0]=c*u,t[4]=_*l-h,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=h*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=g-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*c,h=a*l,_=o*c,g=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+g,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ch,e,Ph)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Xn.crossVectors(n,Kt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Xn.crossVectors(n,Kt)),Xn.normalize(),Os.crossVectors(Kt,Xn),s[0]=Xn.x,s[4]=Os.x,s[8]=Kt.x,s[1]=Xn.y,s[5]=Os.y,s[9]=Kt.y,s[2]=Xn.z,s[6]=Os.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],g=n[6],p=n[10],m=n[14],E=n[3],T=n[7],y=n[11],b=n[15],w=s[0],R=s[4],L=s[8],v=s[12],M=s[1],C=s[5],N=s[9],O=s[13],W=s[2],k=s[6],H=s[10],z=s[14],j=s[3],ie=s[7],J=s[11],ne=s[15];return r[0]=a*w+o*M+c*W+l*j,r[4]=a*R+o*C+c*k+l*ie,r[8]=a*L+o*N+c*H+l*J,r[12]=a*v+o*O+c*z+l*ne,r[1]=u*w+d*M+f*W+h*j,r[5]=u*R+d*C+f*k+h*ie,r[9]=u*L+d*N+f*H+h*J,r[13]=u*v+d*O+f*z+h*ne,r[2]=_*w+g*M+p*W+m*j,r[6]=_*R+g*C+p*k+m*ie,r[10]=_*L+g*N+p*H+m*J,r[14]=_*v+g*O+p*z+m*ne,r[3]=E*w+T*M+y*W+b*j,r[7]=E*R+T*C+y*k+b*ie,r[11]=E*L+T*N+y*H+b*J,r[15]=E*v+T*O+y*z+b*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],g=e[7],p=e[11],m=e[15],E=c*h-l*f,T=o*h-l*d,y=o*f-c*d,b=a*h-l*u,w=a*f-c*u,R=a*d-o*u;return t*(g*E-p*T+m*y)-n*(_*E-p*b+m*w)+s*(_*T-g*b+m*R)-r*(_*y-g*w+p*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],g=e[13],p=e[14],m=e[15],E=d*p*l-g*f*l+g*c*h-o*p*h-d*c*m+o*f*m,T=_*f*l-u*p*l-_*c*h+a*p*h+u*c*m-a*f*m,y=u*g*l-_*d*l+_*o*h-a*g*h-u*o*m+a*d*m,b=_*d*c-u*g*c-_*o*f+a*g*f+u*o*p-a*d*p,w=t*E+n*T+s*y+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=E*R,e[1]=(g*f*r-d*p*r-g*s*h+n*p*h+d*s*m-n*f*m)*R,e[2]=(o*p*r-g*c*r+g*s*l-n*p*l-o*s*m+n*c*m)*R,e[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*h-n*c*h)*R,e[4]=T*R,e[5]=(u*p*r-_*f*r+_*s*h-t*p*h-u*s*m+t*f*m)*R,e[6]=(_*c*r-a*p*r-_*s*l+t*p*l+a*s*m-t*c*m)*R,e[7]=(a*f*r-u*c*r+u*s*l-t*f*l-a*s*h+t*c*h)*R,e[8]=y*R,e[9]=(_*d*r-u*g*r-_*n*h+t*g*h+u*n*m-t*d*m)*R,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*m+t*o*m)*R,e[11]=(u*o*r-a*d*r-u*n*l+t*d*l+a*n*h-t*o*h)*R,e[12]=b*R,e[13]=(u*g*s-_*d*s+_*n*f-t*g*f-u*n*p+t*d*p)*R,e[14]=(_*o*s-a*g*s-_*n*c+t*g*c+a*n*p-t*o*p)*R,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*f+t*o*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,f=r*l,h=r*u,_=r*d,g=a*u,p=a*d,m=o*d,E=c*l,T=c*u,y=c*d,b=n.x,w=n.y,R=n.z;return s[0]=(1-(g+m))*b,s[1]=(h+y)*b,s[2]=(_-T)*b,s[3]=0,s[4]=(h-y)*w,s[5]=(1-(f+m))*w,s[6]=(p+E)*w,s[7]=0,s[8]=(_+T)*R,s[9]=(p-E)*R,s[10]=(1-(f+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ti.set(s[0],s[1],s[2]).length();const a=Ti.set(s[4],s[5],s[6]).length(),o=Ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),on.copy(this);const l=1/r,u=1/a,d=1/o;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=vn,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let _,g;if(c)_=r/(a-r),g=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Er)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s);let _,g;if(c)_=1/(a-r),g=a/(a-r);else if(o===vn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Er)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ti=new D,on=new lt,Ch=new D(0,0,0),Ph=new D(1,1,1),Xn=new D,Os=new D,Kt=new D,dl=new lt,fl=new mi;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dh=0;const pl=new D,Ai=new mi,Pn=new lt,Bs=new D,rs=new D,Lh=new D,Ih=new mi,ml=new D(1,0,0),gl=new D(0,1,0),_l=new D(0,0,1),xl={type:"added"},Uh={type:"removed"},wi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class yt extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new D,t=new En,n=new mi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ie}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(e,t){return Ai.setFromAxisAngle(e,t),this.quaternion.premultiply(Ai),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(rs,Bs,this.up):Pn.lookAt(Bs,rs,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(Pn),this.quaternion.premultiply(Ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),wi.child=e,this.dispatchEvent(wi),wi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uh),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),wi.child=e,this.dispatchEvent(wi),wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Ih,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new D(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new D,Dn=new D,Kr=new D,Ln=new D,Ri=new D,Ci=new D,vl=new D,$r=new D,Jr=new D,Qr=new D,ea=new pt,ta=new pt,na=new pt;class cn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Dn.subVectors(n,t),Kr.subVectors(e,t);const a=ln.dot(ln),o=ln.dot(Dn),c=ln.dot(Kr),l=Dn.dot(Dn),u=Dn.dot(Kr),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(l*c-o*u)*f,_=(a*u-o*c)*f;return r.set(1-h-_,_,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(a,Ln.y),c.addScaledVector(o,Ln.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,n),na.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ea,r.x),a.addScaledVector(ta,r.y),a.addScaledVector(na,r.z),a}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Dn.subVectors(e,t),ln.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),ln.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return cn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),$r.subVectors(e,n);const c=Ri.dot($r),l=Ci.dot($r);if(c<=0&&l<=0)return t.copy(n);Jr.subVectors(e,s);const u=Ri.dot(Jr),d=Ci.dot(Jr);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ri,a);Qr.subVectors(e,r);const h=Ri.dot(Qr),_=Ci.dot(Qr);if(_>=0&&h<=_)return t.copy(r);const g=h*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ci,o);const p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return vl.subVectors(r,s),o=(d-u)/(d-u+(h-_)),t.copy(s).addScaledVector(vl,o);const m=1/(p+g+f);return a=g*m,o=f*m,t.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function ia(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Oo(e,1),t=Ne(t,0,1),n=Ne(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ia(a,r,e+1/3),this.g=ia(a,r,e),this.b=ia(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return Xe.workingToColorSpace(Ut.copy(this),e),Math.round(Ne(Ut.r*255,0,255))*65536+Math.round(Ne(Ut.g*255,0,255))*256+Math.round(Ne(Ut.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,s=Ut.g,r=Ut.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=qt){Xe.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,s=Ut.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(zs);const n=fs(qn.h,zs.h,t),s=fs(qn.s,zs.s,t),r=fs(qn.l,zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new ke;ke.NAMES=zc;let Nh=0;class xi extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Bi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ra,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $n extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new D,ks=new Ce;let Fh=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class kc extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vc extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oh=0;const nn=new lt,sa=new yt,Pi=new D,$t=new ws,as=new ws,wt=new D;class ot extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?Vc:kc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];as.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors($t.min,as.min),$t.expandByPoint(wt),wt.addVectors($t.max,as.max),$t.expandByPoint(wt)):($t.expandByPoint(as.min),$t.expandByPoint(as.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)wt.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(e,l),wt.add(Pi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;const l=new D,u=new D,d=new D,f=new Ce,h=new Ce,_=new Ce,g=new D,p=new D;function m(L,v,M){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,L),h.fromBufferAttribute(r,v),_.fromBufferAttribute(r,M),u.sub(l),d.sub(l),h.sub(f),_.sub(f);const C=1/(h.x*_.y-_.x*h.y);isFinite(C)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(C),p.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(C),o[L].add(g),o[v].add(g),o[M].add(g),c[L].add(p),c[v].add(p),c[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,v=E.length;L<v;++L){const M=E[L],C=M.start,N=M.count;for(let O=C,W=C+N;O<W;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const T=new D,y=new D,b=new D,w=new D;function R(L){b.fromBufferAttribute(s,L),w.copy(b);const v=o[L];T.copy(v),T.sub(b.multiplyScalar(b.dot(v))).normalize(),y.crossVectors(w,v);const C=y.dot(c[L])<0?-1:1;a.setXYZW(L,T.x,T.y,T.z,C)}for(let L=0,v=E.length;L<v;++L){const M=E[L],C=M.start,N=M.count;for(let O=C,W=C+N;O<W;O+=3)R(e.getX(O+0)),R(e.getX(O+1)),R(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let h=0,_=0;for(let g=0,p=c.length;g<p;g++){o.isInterleavedBufferAttribute?h=c[g]*o.data.stride+o.offset:h=c[g]*u;for(let m=0;m<u;m++)f[_++]=l[h++]}return new St(f,u,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ot,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ml=new lt,ai=new Rs,Vs=new $i,Sl=new D,Hs=new D,Gs=new D,Ws=new D,ra=new D,Xs=new D,yl=new D,qs=new D;class ze extends yt{constructor(e=new ot,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(ra.fromBufferAttribute(d,e),a?Xs.addScaledVector(ra,u):Xs.addScaledVector(ra.sub(t),u))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ai.copy(e.ray).recast(e.near),!(Vs.containsPoint(ai.origin)===!1&&(ai.intersectSphere(Vs,Sl)===null||ai.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),ai.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],E=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let y=E,b=T;y<b;y+=3){const w=o.getX(y),R=o.getX(y+1),L=o.getX(y+2);s=Ys(this,m,e,n,l,u,d,w,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const E=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=Ys(this,a,e,n,l,u,d,E,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],m=a[p.materialIndex],E=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let y=E,b=T;y<b;y+=3){const w=y,R=y+1,L=y+2;s=Ys(this,m,e,n,l,u,d,w,R,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const E=p,T=p+1,y=p+2;s=Ys(this,a,e,n,l,u,d,E,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Bh(i,e,t,n,s,r,a,o){let c;if(e.side===Nt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Jn,o),c===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:i}}function Ys(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Hs),i.getVertexPosition(c,Gs),i.getVertexPosition(l,Ws);const u=Bh(i,e,t,n,Hs,Gs,Ws,yl);if(u){const d=new D;cn.getBarycoord(yl,Hs,Gs,Ws,d),s&&(u.uv=cn.getInterpolatedAttribute(s,o,c,l,d,new Ce)),r&&(u.uv1=cn.getInterpolatedAttribute(r,o,c,l,d,new Ce)),a&&(u.normal=cn.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};cn.getNormal(Hs,Gs,Ws,f.normal),u.face=f,u.barycoord=d}return u}class Vt extends ot{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function _(g,p,m,E,T,y,b,w,R,L,v){const M=y/R,C=b/L,N=y/2,O=b/2,W=w/2,k=R+1,H=L+1;let z=0,j=0;const ie=new D;for(let J=0;J<H;J++){const ne=J*C-O;for(let Te=0;Te<k;Te++){const Pe=Te*M-N;ie[g]=Pe*E,ie[p]=ne*T,ie[m]=W,l.push(ie.x,ie.y,ie.z),ie[g]=0,ie[p]=0,ie[m]=w>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Te/R),d.push(1-J/L),z+=1}}for(let J=0;J<L;J++)for(let ne=0;ne<R;ne++){const Te=f+ne+k*J,Pe=f+ne+k*(J+1),tt=f+(ne+1)+k*(J+1),je=f+(ne+1)+k*J;c.push(Te,Pe,je),c.push(Pe,tt,je),j+=6}o.addGroup(h,j,v),h+=j,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Yi(i[t]);for(const s in n)e[s]=n[s]}return e}function zh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const kh={clone:Yi,merge:Bt};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gc extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,El=new Ce,bl=new Ce;class Yt extends Gc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,El,bl),t.subVectors(bl,El)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Li=1;class Gh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Di,Li,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Di,Li,e,t);r.layers=this.layers,this.add(r);const a=new Yt(Di,Li,e,t);a.layers=this.layers,this.add(a);const o=new Yt(Di,Li,e,t);o.layers=this.layers,this.add(o);const c=new Yt(Di,Li,e,t);c.layers=this.layers,this.add(c);const l=new Yt(Di,Li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wc extends Lt{constructor(e=[],t=pi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xc extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Wc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Fn});r.uniforms.tEquirect.value=t;const a=new ze(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Mt),new Gh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class dn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wh={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(l,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;l.inputState.pinching&&f>h+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wh)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xh extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qh extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Dt,u=Dt,d,f){super(null,a,o,c,l,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oa=new D,Yh=new D,jh=new Ie;class Un{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oa.subVectors(n,t).cross(Yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jh.getNormalMatrix(e),s=this.coplanarPoint(oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new $i,Zh=new Ce(.5,.5),js=new D;class ko{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],h=r[7],_=r[8],g=r[9],p=r[10],m=r[11],E=r[12],T=r[13],y=r[14],b=r[15];if(s[0].setComponents(l-a,h-u,m-_,b-E).normalize(),s[1].setComponents(l+a,h+u,m+_,b+E).normalize(),s[2].setComponents(l+o,h+d,m+g,b+T).normalize(),s[3].setComponents(l-o,h-d,m-g,b-T).normalize(),n)s[4].setComponents(c,f,p,y).normalize(),s[5].setComponents(l-c,h-f,m-p,b-y).normalize();else if(s[4].setComponents(l-c,h-f,m-p,b-y).normalize(),t===vn)s[5].setComponents(l+c,h+f,m+p,b+y).normalize();else if(t===Er)s[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(e){oi.center.set(0,0,0);const t=Zh.distanceTo(e.center);return oi.radius=.7071067811865476+t,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ys extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const br=new D,Tr=new D,Tl=new lt,os=new Rs,Zs=new $i,la=new D,Al=new D;class qc extends yt{constructor(e=new ot,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)br.fromBufferAttribute(t,s-1),Tr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=br.distanceTo(Tr);e.setAttribute("lineDistance",new mt(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;Tl.copy(s).invert(),os.copy(e.ray).applyMatrix4(Tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=l){const m=u.getX(g),E=u.getX(g+1),T=Ks(this,e,os,c,m,E,g);T&&t.push(T)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(h),m=Ks(this,e,os,c,g,p,_-1);m&&t.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=l){const m=Ks(this,e,os,c,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Ks(this,e,os,c,_-1,h,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ks(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(br.fromBufferAttribute(o,s),Tr.fromBufferAttribute(o,r),t.distanceSqToSegment(br,Tr,la,Al)>n)return;la.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(la);if(!(l<e.near||l>e.far))return{distance:l,point:Al.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class cr extends qc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gi extends xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wl=new lt,xo=new Rs,$s=new $i,Js=new D;class ji extends yt{constructor(e=new ot,t=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;wl.copy(s).invert(),xo.copy(e.ray).applyMatrix4(wl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let _=f,g=h;_<g;_++){const p=l.getX(_);Js.fromBufferAttribute(d,p),Rl(Js,p,c,s,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let _=f,g=h;_<g;_++)Js.fromBufferAttribute(d,_),Rl(Js,_,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rl(i,e,t,n,s,r,a){const o=xo.distanceSqToPoint(i);if(o<t){const c=new D;xo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Kh extends Lt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Lt{constructor(e,t,n=yn,s,r,a,o=Dt,c=Dt,l,u=kn,d=1){if(u!==kn&&u!==fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $h extends Es{constructor(e,t=yn,n=pi,s,r,a=Dt,o=Dt,c,l=kn){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yc extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class un extends ot{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],h=[];let _=0;const g=[],p=n/2;let m=0;E(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(f,3)),this.setAttribute("uv",new mt(h,2));function E(){const y=new D,b=new D;let w=0;const R=(t-e)/n;for(let L=0;L<=r;L++){const v=[],M=L/r,C=M*(t-e)+e;for(let N=0;N<=s;N++){const O=N/s,W=O*c+o,k=Math.sin(W),H=Math.cos(W);b.x=C*k,b.y=-M*n+p,b.z=C*H,d.push(b.x,b.y,b.z),y.set(k,R,H).normalize(),f.push(y.x,y.y,y.z),h.push(O,1-M),v.push(_++)}g.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){const M=g[v][L],C=g[v+1][L],N=g[v+1][L+1],O=g[v][L+1];(e>0||v!==0)&&(u.push(M,C,O),w+=3),(t>0||v!==r-1)&&(u.push(C,N,O),w+=3)}l.addGroup(m,w,0),m+=w}function T(y){const b=_,w=new Ce,R=new D;let L=0;const v=y===!0?e:t,M=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,p*M,0),f.push(0,M,0),h.push(.5,.5),_++;const C=_;for(let N=0;N<=s;N++){const W=N/s*c+o,k=Math.cos(W),H=Math.sin(W);R.x=v*H,R.y=p*M,R.z=v*k,d.push(R.x,R.y,R.z),f.push(0,M,0),w.x=k*.5+.5,w.y=H*.5*M+.5,h.push(w.x,w.y),_++}for(let N=0;N<s;N++){const O=b+N,W=C+N;y===!0?u.push(W,W+1,O):u.push(W+1,W,O),L+=3}l.addGroup(m,L,y===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends un{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Pr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vo{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){we("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],f=n[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Ce:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,c=new lt;for(let h=0;h<=e;h++){const _=h/e;s[h]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ne(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(c.makeRotationAxis(o,_))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Ne(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],h*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qs extends Vo{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,h=l-this.aY;c=f*u-h*d+this.aX,l=f*d+h*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Ho(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,h=(o-a)/u-(c-a)/(u+d)+(c-o)/d;f*=u,h*=u,s(a,o,f,h)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const er=new D,ca=new Ho,ua=new Ho,ha=new Ho;class Cl extends Vo{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),l=er);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=er),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),h),g=Math.pow(d.distanceToSquared(f),h),p=Math.pow(f.distanceToSquared(u),h);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),ca.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,_,g,p),ua.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,_,g,p),ha.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),ua.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),ha.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return n.set(ca.calc(c),ua.calc(c),ha.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Jh(i,e){const t=1-i;return t*t*e}function Qh(i,e){return 2*(1-i)*i*e}function ed(i,e){return i*i*e}function da(i,e,t,n){return Jh(i,e)+Qh(i,t)+ed(i,n)}class td extends Vo{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(da(e,s.x,r.x,a.x),da(e,s.y,r.y,a.y),da(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dr extends ot{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,f=t/c,h=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const E=m*f-a;for(let T=0;T<l;T++){const y=T*d-r;_.push(y,-E,0),g.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let E=0;E<o;E++){const T=E+l*m,y=E+l*(m+1),b=E+1+l*(m+1),w=E+1+l*m;h.push(T,y,w),h.push(y,b,w)}this.setIndex(h),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ar extends ot{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=e;const f=(t-e)/s,h=new D,_=new Ce;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){const m=r+p/n*a;h.x=d*Math.cos(m),h.y=d*Math.sin(m),c.push(h.x,h.y,h.z),l.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let g=0;g<s;g++){const p=g*(n+1);for(let m=0;m<n;m++){const E=m+p,T=E,y=E+n+1,b=E+n+2,w=E+1;o.push(T,y,w),o.push(y,b,w)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bn extends ot{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new D,f=new D,h=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const E=[],T=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&c===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const w=b/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+T*o),d.y=e*Math.cos(a+T*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+T*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(w+y,1-T),E.push(l++)}u.push(E)}for(let m=0;m<n;m++)for(let E=0;E<t;E++){const T=u[m][E+1],y=u[m][E],b=u[m+1][E],w=u[m+1][E+1];(m!==0||a>0)&&h.push(T,y,w),(m!==n-1||c<Math.PI)&&h.push(y,b,w)}this.setIndex(h),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nd extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class id extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sd extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rd extends ys{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const fa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class jc{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const h=l[d],_=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ad=new jc;class Go{constructor(e){this.manager=e!==void 0?e:ad,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Go.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii=new WeakMap;class od extends Go{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=fa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ii.get(a);d===void 0&&(d=[],Ii.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ms("img");function c(){u(),t&&t(this);const d=Ii.get(this)||[];for(let f=0;f<d.length;f++){const h=d[f];h.onLoad&&h.onLoad(this)}Ii.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),fa.remove(`image:${e}`);const f=Ii.get(this)||[];for(let h=0;h<f.length;h++){const _=f[h];_.onError&&_.onError(d)}Ii.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Zi extends Go{constructor(e){super(e)}load(e,t,n,s){const r=new Lt,a=new od(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Lr extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ld extends Lr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const pa=new lt,Pl=new D,Dl=new D;class Zc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),pa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cd extends Zc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ud extends Lr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new cd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class hd extends Zc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}}class Kc extends Lr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $c extends Gc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class dd extends Lr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fd extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pd{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ll=new lt;class md{constructor(e,t,n=0,s=1/0){this.ray=new Rs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ll.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ll),this}intersectObject(e,t=!0,n=[]){return vo(e,this,n,t),n.sort(Il),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)vo(e[s],this,n,t);return n.sort(Il),n}}function Il(i,e){return i.distance-e.distance}function vo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)vo(r[a],e,t,!0)}}class Ul{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ne(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gd extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Nl(i,e,t,n){const s=_d(n);switch(t){case Ic:return i*e;case Nc:return i*e/s.components*s.byteLength;case Lo:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case Io:return i*e*2/s.components*s.byteLength;case Uc:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Uo:return i*e*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ha:return Math.max(i,16)*Math.max(e,8)/4;case za:case Va:return Math.max(i,8)*Math.max(e,8)/2;case Ga:case Wa:case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xa:case ja:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case uo:case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case po:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case go:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _d(i){switch(i){case Qt:case Cc:return{byteLength:1,components:1};case xs:case Pc:case zn:return{byteLength:2,components:1};case Po:case Do:return{byteLength:2,components:4};case yn:case Co:case xn:return{byteLength:4,components:1};case Dc:case Lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function Jc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xd(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],g=d[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const g=d[h];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Md=`#ifdef USE_ALPHAHASH
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
#endif`,Sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Td=`#ifdef USE_AOMAP
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
#endif`,Ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Id=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Hd=`#define PI 3.141592653589793
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
} // validated`,Gd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$d=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,ef=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tf=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,af=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,of=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hf=`uniform bool receiveShadow;
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
#endif`,df=`#ifdef USE_ENVMAP
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
#endif`,ff=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_f=`PhysicalMaterial material;
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
#endif`,xf=`uniform sampler2D dfgLUT;
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
}`,vf=`
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cf=`#if defined( USE_POINTS_UV )
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
#endif`,Pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,If=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,Ap=`#if DEPTH_PACKING == 3200
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
}`,wp=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,jp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:vd,alphahash_pars_fragment:Md,alphamap_fragment:Sd,alphamap_pars_fragment:yd,alphatest_fragment:Ed,alphatest_pars_fragment:bd,aomap_fragment:Td,aomap_pars_fragment:Ad,batching_pars_vertex:wd,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Dd,iridescence_fragment:Ld,bumpmap_pars_fragment:Id,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Fd,clipping_planes_vertex:Od,color_fragment:Bd,color_pars_fragment:zd,color_pars_vertex:kd,color_vertex:Vd,common:Hd,cube_uv_reflection_fragment:Gd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Xd,displacementmap_vertex:qd,emissivemap_fragment:Yd,emissivemap_pars_fragment:jd,colorspace_fragment:Zd,colorspace_pars_fragment:Kd,envmap_fragment:$d,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Qd,envmap_pars_vertex:ef,envmap_physical_pars_fragment:df,envmap_vertex:tf,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:af,gradientmap_pars_fragment:of,lightmap_pars_fragment:lf,lights_lambert_fragment:cf,lights_lambert_pars_fragment:uf,lights_pars_begin:hf,lights_toon_fragment:ff,lights_toon_pars_fragment:pf,lights_phong_fragment:mf,lights_phong_pars_fragment:gf,lights_physical_fragment:_f,lights_physical_pars_fragment:xf,lights_fragment_begin:vf,lights_fragment_maps:Mf,lights_fragment_end:Sf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:Ef,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:Tf,map_fragment:Af,map_pars_fragment:wf,map_particle_fragment:Rf,map_particle_pars_fragment:Cf,metalnessmap_fragment:Pf,metalnessmap_pars_fragment:Df,morphinstance_vertex:Lf,morphcolor_vertex:If,morphnormal_vertex:Uf,morphtarget_pars_vertex:Nf,morphtarget_vertex:Ff,normal_fragment_begin:Of,normal_fragment_maps:Bf,normal_pars_fragment:zf,normal_pars_vertex:kf,normal_vertex:Vf,normalmap_pars_fragment:Hf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:jf,premultiplied_alpha_fragment:Zf,project_vertex:Kf,dithering_fragment:$f,dithering_pars_fragment:Jf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:hp,tonemapping_pars_fragment:dp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:xp,background_vert:vp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:yp,cube_vert:Ep,cube_frag:bp,depth_vert:Tp,depth_frag:Ap,distance_vert:wp,distance_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Dp,linedashed_frag:Lp,meshbasic_vert:Ip,meshbasic_frag:Up,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:kp,meshphong_vert:Vp,meshphong_frag:Hp,meshphysical_vert:Gp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:jp,shadow_vert:Zp,shadow_frag:Kp,sprite_vert:$p,sprite_frag:Jp},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Bt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Bt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Bt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Bt([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Bt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Bt([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Bt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Bt([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Bt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Bt([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:Bt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const tr={r:0,b:0,g:0},li=new En,Qp=new lt;function em(i,e,t,n,s,r,a){const o=new ke(0);let c=r===!0?0:1,l,u,d=null,f=0,h=null;function _(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?t:e).get(y)),y}function g(T){let y=!1;const b=_(T);b===null?m(o,c):b&&b.isColor&&(m(b,1),y=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,y){const b=_(y);b&&(b.isCubeTexture||b.mapping===Cr)?(u===void 0&&(u=new ze(new Vt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Yi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),li.copy(y.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(li)),u.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Je,(d!==b||f!==b.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,h=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ze(new Dr(2,2),new bn({name:"BackgroundMaterial",uniforms:Yi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==Je,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,y){T.getRGB(tr,Hc(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,y,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,m(o,c)},render:g,addToRenderList:p,dispose:E}}function tm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,C,N,O,W){let k=!1;const H=d(O,N,C);r!==H&&(r=H,l(r.object)),k=h(M,O,N,W),k&&_(M,O,N,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(M,C,N,O),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,C,N){const O=N.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let k=W[C.id];k===void 0&&(k={},W[C.id]=k);let H=k[O];return H===void 0&&(H=f(c()),k[O]=H),H}function f(M){const C=[],N=[],O=[];for(let W=0;W<t;W++)C[W]=0,N[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:M,attributes:{},index:null}}function h(M,C,N,O){const W=r.attributes,k=C.attributes;let H=0;const z=N.getAttributes();for(const j in z)if(z[j].location>=0){const J=W[j];let ne=k[j];if(ne===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),J===void 0||J.attribute!==ne||ne&&J.data!==ne.data)return!0;H++}return r.attributesNum!==H||r.index!==O}function _(M,C,N,O){const W={},k=C.attributes;let H=0;const z=N.getAttributes();for(const j in z)if(z[j].location>=0){let J=k[j];J===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const ne={};ne.attribute=J,J&&J.data&&(ne.data=J.data),W[j]=ne,H++}r.attributes=W,r.attributesNum=H,r.index=O}function g(){const M=r.newAttributes;for(let C=0,N=M.length;C<N;C++)M[C]=0}function p(M){m(M,0)}function m(M,C){const N=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;N[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),W[M]!==C&&(i.vertexAttribDivisor(M,C),W[M]=C)}function E(){const M=r.newAttributes,C=r.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==M[N]&&(i.disableVertexAttribArray(N),C[N]=0)}function T(M,C,N,O,W,k,H){H===!0?i.vertexAttribIPointer(M,C,N,W,k):i.vertexAttribPointer(M,C,N,O,W,k)}function y(M,C,N,O){g();const W=O.attributes,k=N.getAttributes(),H=C.defaultAttributeValues;for(const z in k){const j=k[z];if(j.location>=0){let ie=W[z];if(ie===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const J=ie.normalized,ne=ie.itemSize,Te=e.get(ie);if(Te===void 0)continue;const Pe=Te.buffer,tt=Te.type,je=Te.bytesPerElement,Y=tt===i.INT||tt===i.UNSIGNED_INT||ie.gpuType===Co;if(ie.isInterleavedBufferAttribute){const $=ie.data,pe=$.stride,De=ie.offset;if($.isInstancedInterleavedBuffer){for(let me=0;me<j.locationSize;me++)m(j.location+me,$.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let me=0;me<j.locationSize;me++)p(j.location+me);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let me=0;me<j.locationSize;me++)T(j.location+me,ne/j.locationSize,tt,J,pe*je,(De+ne/j.locationSize*me)*je,Y)}else{if(ie.isInstancedBufferAttribute){for(let $=0;$<j.locationSize;$++)m(j.location+$,ie.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $=0;$<j.locationSize;$++)p(j.location+$);i.bindBuffer(i.ARRAY_BUFFER,Pe);for(let $=0;$<j.locationSize;$++)T(j.location+$,ne/j.locationSize,tt,J,ne*je,ne/j.locationSize*$*je,Y)}}else if(H!==void 0){const J=H[z];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(j.location,J);break;case 3:i.vertexAttrib3fv(j.location,J);break;case 4:i.vertexAttrib4fv(j.location,J);break;default:i.vertexAttrib1fv(j.location,J)}}}}E()}function b(){L();for(const M in n){const C=n[M];for(const N in C){const O=C[N];for(const W in O)u(O[W].object),delete O[W];delete C[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const N in C){const O=C[N];for(const W in O)u(O[W].object),delete O[W];delete C[N]}delete n[M.id]}function R(M){for(const C in n){const N=n[C];if(N[M.id]===void 0)continue;const O=N[M.id];for(const W in O)u(O[W].object),delete O[W];delete N[M.id]}}function L(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function nm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];t.update(h,n,1)}function c(l,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<l.length;_++)a(l[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Qt&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(we("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,maxSamples:b,samples:w}}function sm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Un,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?u(null):l();else{const E=r?0:n,T=E*4;let y=m.clippingState||null;c.value=y,y=u(_,f,T,h);for(let b=0;b!==T;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const m=h+g*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,y=h;T!==g;++T,y+=4)a.copy(d[T]).applyMatrix4(E,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function rm(i){let e=new WeakMap;function t(a,o){return o===Fa?a.mapping=pi:o===Oa&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fa||o===Oa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Xc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Kn=4,Fl=[.125,.215,.35,.446,.526,.582],di=20,am=256,ls=new $c,Ol=new ke;let ma=null,ga=0,_a=0,xa=!1;const om=new D;class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=om}=r;ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ma,ga,_a),this._renderer.xr.enabled=xa,e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ma=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),_a=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:zn,format:hn,colorSpace:Xi,depthBuffer:!1},s=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lm(r)),this._blurMaterial=um(r,e,t),this._ggxMaterial=cm(r,e,t)}return s}_compileMaterial(e){const t=new ze(new ot,e);this._renderer.compile(t,ls)}_sceneToCubeUV(e,t,n,s,r){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Ol),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Vt,new $n({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,m=!0):(p.color.copy(Ol),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const b=this._cubeSize;Ui(s,y*b,T>2?b:0,b,b),d.setRenderTarget(s),m&&d.render(g,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===pi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ui(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ls)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Kn?n-_+Kn:0),m=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=_-t,Ui(r,p,m,3*g,2*g),s.setRenderTarget(r),s.render(o,ls),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Ui(e,p,m,3*g,2*g),s.setRenderTarget(e),s.render(o,ls)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&We("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,h=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*di-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):di;p>di&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);const m=[];let E=0;for(let R=0;R<di;++R){const L=R/g,v=Math.exp(-L*L/2);m.push(v),R===0?E+=v:R<p&&(E+=2*v)}for(let R=0;R<m.length;R++)m[R]=m[R]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const y=this._sizeLods[s],b=3*y*(s>T-Kn?s-T+Kn:0),w=4*(this._cubeSize-y);Ui(t,b,w,3*y,2*y),c.setRenderTarget(t),c.render(d,ls)}}function lm(i){const e=[],t=[],n=[];let s=i;const r=i-Kn+1+Fl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Kn?c=Fl[a-i+Kn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,g=3,p=2,m=1,E=new Float32Array(g*_*h),T=new Float32Array(p*_*h),y=new Float32Array(m*_*h);for(let w=0;w<h;w++){const R=w%3*2/3-1,L=w>2?0:-1,v=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(v,g*_*w),T.set(f,p*_*w);const M=[w,w,w,w,w,w];y.set(M,m*_*w)}const b=new ot;b.setAttribute("position",new St(E,g)),b.setAttribute("uv",new St(T,p)),b.setAttribute("faceIndex",new St(y,m)),n.push(new ze(b,null)),s>Kn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zl(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cm(i,e,t){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function um(i,e,t){const n=new Float32Array(di),s=new D(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function kl(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ir(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Vl(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ir(){return`

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
	`}function hm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fa||c===Oa,u=c===pi||c===Gi;if(l||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Bl(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&s(h)?(t===null&&(t=new Bl(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function dm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function fm(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(d){const f=[],h=d.index,_=d.attributes.position;let g=0;if(h!==null){const E=h.array;g=h.version;for(let T=0,y=E.length;T<y;T+=3){const b=E[T+0],w=E[T+1],R=E[T+2];f.push(b,w,w,R,R,b)}}else if(_!==void 0){const E=_.array;g=_.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const b=T+0,w=T+1,R=T+2;f.push(b,w,w,R,R,b)}}else return;const p=new(Oc(f)?Vc:kc)(f,1);p.version=g;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function pm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,_){_!==0&&(i.drawElementsInstanced(n,h,r,f*a,_),t.update(h,n,_))}function u(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=h[m];t.update(p,n,1)}function d(f,h,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/a,h[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,g,0,_);let m=0;for(let E=0;E<_;E++)m+=h[E]*g[E];t.update(m,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function mm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gm(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let b=o.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*w*4*d),L=new Bc(R,b,w,d);L.type=xn,L.needsUpdate=!0;const v=y*4;for(let C=0;C<d;C++){const N=m[C],O=E[C],W=T[C],k=b*w*4*C;for(let H=0;H<N.count;H++){const z=H*v;_===!0&&(s.fromBufferAttribute(N,H),R[k+z+0]=s.x,R[k+z+1]=s.y,R[k+z+2]=s.z,R[k+z+3]=0),g===!0&&(s.fromBufferAttribute(O,H),R[k+z+4]=s.x,R[k+z+5]=s.y,R[k+z+6]=s.z,R[k+z+7]=0),p===!0&&(s.fromBufferAttribute(W,H),R[k+z+8]=s.x,R[k+z+9]=s.y,R[k+z+10]=s.z,R[k+z+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new Ce(b,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _m(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const xm={[yc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Ro]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[wc]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function vm(i,e,t,n,s){const r=new Sn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Sn(e,t,{type:zn,depthBuffer:!1,stencilBuffer:!1}),o=new ot;o.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new mt([0,2,0,0,2,0],2));const c=new nd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new ze(o,c),u=new $c(-1,1,1,-1,0,1);let d=null,f=null,h=!1,_,g=null,p=[],m=!1;this.setSize=function(E,T){r.setSize(E,T),a.setSize(E,T);for(let y=0;y<p.length;y++){const b=p[y];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){p=E,m=p.length>0&&p[0].isRenderPass===!0;const T=r.width,y=r.height;for(let b=0;b<p.length;b++){const w=p[b];w.setSize&&w.setSize(T,y)}},this.begin=function(E,T){if(h||E.toneMapping===Mn&&p.length===0)return!1;if(g=T,T!==null){const y=T.width,b=T.height;(r.width!==y||r.height!==b)&&this.setSize(y,b)}return m===!1&&E.setRenderTarget(r),_=E.toneMapping,E.toneMapping=Mn,!0},this.hasRenderPass=function(){return m},this.end=function(E,T){E.toneMapping=_,h=!0;let y=r,b=a;for(let w=0;w<p.length;w++){const R=p[w];if(R.enabled!==!1&&(R.render(E,b,y,T),R.needsSwap!==!1)){const L=y;y=b,b=L}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,c.defines={},Xe.getTransfer(d)===Je&&(c.defines.SRGB_TRANSFER="");const w=xm[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(g),E.render(l,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Qc=new Lt,Mo=new Es(1,1),eu=new Bc,tu=new wh,nu=new Wc,Hl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function Ji(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ur(i,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function bm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Tt(t,n)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Xl.set(n),i.uniformMatrix3fv(this.addr,!1,Xl),Tt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Tt(t,n)}}function wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Nm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mo.compareFunction=t.isReversedDepthBuffer()?Fo:No,r=Mo):r=Qc,t.setTexture2D(e||r,s)}function Fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tu,s)}function Om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nu,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||eu,s)}function zm(i){switch(i){case 5126:return Mm;case 35664:return Sm;case 35665:return ym;case 35666:return Em;case 35674:return bm;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return wm;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Lm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function km(i,e){i.uniform1fv(this.addr,e)}function Vm(i,e){const t=Ji(e,this.size,2);i.uniform2fv(this.addr,t)}function Hm(i,e){const t=Ji(e,this.size,3);i.uniform3fv(this.addr,t)}function Gm(i,e){const t=Ji(e,this.size,4);i.uniform4fv(this.addr,t)}function Wm(i,e){const t=Ji(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xm(i,e){const t=Ji(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qm(i,e){const t=Ji(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ym(i,e){i.uniform1iv(this.addr,e)}function jm(i,e){i.uniform2iv(this.addr,e)}function Zm(i,e){i.uniform3iv(this.addr,e)}function Km(i,e){i.uniform4iv(this.addr,e)}function $m(i,e){i.uniform1uiv(this.addr,e)}function Jm(i,e){i.uniform2uiv(this.addr,e)}function Qm(i,e){i.uniform3uiv(this.addr,e)}function e0(i,e){i.uniform4uiv(this.addr,e)}function t0(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mo:a=Qc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function n0(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||tu,r[a])}function i0(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||nu,r[a])}function s0(i,e,t){const n=this.cache,s=e.length,r=Ur(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||eu,r[a])}function r0(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Hm;case 35666:return Gm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return jm;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return $m;case 36294:return Jm;case 36295:return Qm;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}class a0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zm(t.type)}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=r0(t.type)}}class l0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Yl(i,e){i.seq.push(e),i.map[e.id]=e}function c0(i,e,t){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),a=va.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yl(t,l===void 0?new a0(o,i,e):new o0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new l0(o),Yl(t,d)),t=d}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);c0(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const u0=37297;let h0=0;function d0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zl=new Ie;function f0(i){Xe._getMatrix(Zl,Xe.workingColorSpace,i);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case yr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+d0(i.getShaderSource(e),o)}else return r}function p0(i,e){const t=f0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const m0={[yc]:"Linear",[Ec]:"Reinhard",[bc]:"Cineon",[Ro]:"ACESFilmic",[Ac]:"AgX",[wc]:"Neutral",[Tc]:"Custom"};function g0(i,e){const t=m0[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new D;function _0(){Xe.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function v0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function hs(i){return i!==""}function $l(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(S0,E0)}const y0=new Map;function E0(i,e){let t=Ue[e];if(t===void 0){const n=y0.get(e);if(n!==void 0)t=Ue[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return So(t)}const b0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(b0,T0)}function T0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ec(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const A0={[sr]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function w0(i){return A0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[pi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE_UV"};function C0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const P0={[Gi]:"ENVMAP_MODE_REFRACTION"};function D0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L0={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[Yu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L0[i.combine]||"ENVMAP_BLENDING_NONE"}function U0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=w0(t),l=C0(t),u=D0(t),d=I0(t),f=U0(t),h=x0(t),_=v0(r),g=s.createProgram();let p,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(p=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Mn?g0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,p0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=So(a),a=$l(a,t),a=Jl(a,t),o=So(o),o=$l(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=E+p+a,y=E+m+o,b=jl(s,s.VERTEX_SHADER,T),w=jl(s,s.FRAGMENT_SHADER,y);s.attachShader(g,b),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(C){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(b)||"",W=s.getShaderInfoLog(w)||"",k=N.trim(),H=O.trim(),z=W.trim();let j=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,w);else{const J=Kl(s,b,"vertex"),ne=Kl(s,w,"fragment");We("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+J+`
`+ne)}else k!==""?we("WebGLProgram: Program Info Log:",k):(H===""||z==="")&&(ie=!1);ie&&(C.diagnostics={runnable:j,programLog:k,vertexShader:{log:H,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(b),s.deleteShader(w),L=new ur(s,g),v=M0(s,g)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,u0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let F0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B0(e),t.set(e,n)),n}}class B0{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}}function z0(i,e,t,n,s,r,a){const o=new zo,c=new O0,l=new Set,u=[],d=new Map,f=s.logarithmicDepthBuffer;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,M,C,N,O){const W=N.fog,k=O.geometry,H=v.isMeshStandardMaterial?N.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||H),j=z&&z.mapping===Cr?z.image.height:null,ie=_[v.type];v.precision!==null&&(h=s.getMaxPrecision(v.precision),h!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=J!==void 0?J.length:0;let Te=0;k.morphAttributes.position!==void 0&&(Te=1),k.morphAttributes.normal!==void 0&&(Te=2),k.morphAttributes.color!==void 0&&(Te=3);let Pe,tt,je,Y;if(ie){const Ke=gn[ie];Pe=Ke.vertexShader,tt=Ke.fragmentShader}else Pe=v.vertexShader,tt=v.fragmentShader,c.update(v),je=c.getVertexShaderID(v),Y=c.getFragmentShaderID(v);const $=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),De=O.isInstancedMesh===!0,me=O.isBatchedMesh===!0,Ve=!!v.map,At=!!v.matcap,He=!!z,Ze=!!v.aoMap,nt=!!v.lightMap,Fe=!!v.bumpMap,gt=!!v.normalMap,P=!!v.displacementMap,_t=!!v.emissiveMap,Ye=!!v.metalnessMap,st=!!v.roughnessMap,ve=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,q=v.sheen>0,K=v.transmission>0,X=ve&&!!v.anisotropyMap,Se=A&&!!v.clearcoatMap,re=A&&!!v.clearcoatNormalMap,xe=A&&!!v.clearcoatRoughnessMap,Re=U&&!!v.iridescenceMap,ee=U&&!!v.iridescenceThicknessMap,oe=q&&!!v.sheenColorMap,_e=q&&!!v.sheenRoughnessMap,Me=!!v.specularMap,ae=!!v.specularColorMap,Oe=!!v.specularIntensityMap,I=K&&!!v.transmissionMap,he=K&&!!v.thicknessMap,te=!!v.gradientMap,de=!!v.alphaMap,Q=v.alphaTest>0,Z=!!v.alphaHash,se=!!v.extensions;let Le=Mn;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Le=i.toneMapping);const rt={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:tt,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:me,batchingColor:me&&O._colorsTexture!==null,instancing:De,instancingColor:De&&O.instanceColor!==null,instancingMorph:De&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Xi,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:At,envMap:He,envMapMode:He&&z.mapping,envMapCubeUVHeight:j,aoMap:Ze,lightMap:nt,bumpMap:Fe,normalMap:gt,displacementMap:P,emissiveMap:_t,normalMapObjectSpace:gt&&v.normalMapType===$u,normalMapTangentSpace:gt&&v.normalMapType===Fc,metalnessMap:Ye,roughnessMap:st,anisotropy:ve,anisotropyMap:X,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:x,iridescence:U,iridescenceMap:Re,iridescenceThicknessMap:ee,sheen:q,sheenColorMap:oe,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:ae,specularIntensityMap:Oe,transmission:K,transmissionMap:I,thicknessMap:he,gradientMap:te,opaque:v.transparent===!1&&v.blending===Bi&&v.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:Z,combine:v.combine,mapUv:Ve&&g(v.map.channel),aoMapUv:Ze&&g(v.aoMap.channel),lightMapUv:nt&&g(v.lightMap.channel),bumpMapUv:Fe&&g(v.bumpMap.channel),normalMapUv:gt&&g(v.normalMap.channel),displacementMapUv:P&&g(v.displacementMap.channel),emissiveMapUv:_t&&g(v.emissiveMap.channel),metalnessMapUv:Ye&&g(v.metalnessMap.channel),roughnessMapUv:st&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:Se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(v.sheenRoughnessMap.channel),specularMapUv:Me&&g(v.specularMap.channel),specularColorMapUv:ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:he&&g(v.thicknessMap.channel),alphaMapUv:de&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(gt||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Ve||de),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:pe,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===Je,decodeVideoTextureEmissive:_t&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===Je,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ht,flipSided:v.side===Nt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(E(M,v),T(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function E(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function T(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function y(v){const M=_[v.type];let C;if(M){const N=gn[M];C=kh.clone(N.uniforms)}else C=v.uniforms;return C}function b(v,M){let C=d.get(M);return C!==void 0?++C.usedTimes:(C=new N0(i,M,v,r),u.push(C),d.set(M,C)),C}function w(v){if(--v.usedTimes===0){const M=u.indexOf(v);u[M]=u[u.length-1],u.pop(),d.delete(v.cacheKey),v.destroy()}}function R(v){c.remove(v)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function k0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,h,_,g,p){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=h,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),e++,m}function o(d,f,h,_,g,p){const m=a(d,f,h,_,g,p);h.transmission>0?n.push(m):h.transparent===!0?s.push(m):t.push(m)}function c(d,f,h,_,g,p){const m=a(d,f,h,_,g,p);h.transmission>0?n.unshift(m):h.transparent===!0?s.unshift(m):t.unshift(m)}function l(d,f){t.length>1&&t.sort(d||V0),n.length>1&&n.sort(f||tc),s.length>1&&s.sort(f||tc)}function u(){for(let d=e,f=i.length;d<f;d++){const h=i[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function H0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new nc,i.set(n,[a])):s>=r.length?(a=new nc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function G0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ke};break;case"SpotLight":t={position:new D,direction:new D,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function W0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X0=0;function q0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Y0(i){const e=new G0,t=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new lt,a=new lt;function o(l){let u=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let h=0,_=0,g=0,p=0,m=0,E=0,T=0,y=0,b=0,w=0,R=0;l.sort(q0);for(let v=0,M=l.length;v<M;v++){const C=l[v],N=C.color,O=C.intensity,W=C.distance;let k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Wi?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=N.r*O,d+=N.g*O,f+=N.b*O;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],O);R++}else if(C.isDirectionalLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const z=C.shadow,j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=k,n.directionalShadowMatrix[h]=C.shadow.matrix,E++}n.directional[h]=H,h++}else if(C.isSpotLight){const H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(N).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[g]=H;const z=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[g]=z.matrix,C.castShadow){const j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=k,y++}g++}else if(C.isRectAreaLight){const H=e.get(C);H.color.copy(N).multiplyScalar(O),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=H,p++}else if(C.isPointLight){const H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const z=C.shadow,j=t.get(C);j.shadowIntensity=z.intensity,j.shadowBias=z.bias,j.shadowNormalBias=z.normalBias,j.shadowRadius=z.radius,j.shadowMapSize=z.mapSize,j.shadowCameraNear=z.camera.near,j.shadowCameraFar=z.camera.far,n.pointShadow[_]=j,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=C.shadow.matrix,T++}n.point[_]=H,_++}else if(C.isHemisphereLight){const H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(O),H.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==h||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==y||L.numSpotMaps!==b||L.numLightProbes!==R)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=h,L.pointLength=_,L.spotLength=g,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=y,L.numSpotMaps=b,L.numLightProbes=R,n.version=X0++)}function c(l,u){let d=0,f=0,h=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,E=l.length;m<E;m++){const T=l[m];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(T.isSpotLight){const y=n.spot[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(T.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const y=n.hemi[g];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function ic(i){const e=new Y0(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function j0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ic(i),e.set(s,[o])):r>=a.length?(o=new ic(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`,$0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],J0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],sc=new lt,cs=new D,Ma=new D;function Q0(i,e,t){let n=new ko;const s=new Ce,r=new Ce,a=new pt,o=new id,c=new sd,l={},u=t.maxTextureSize,d={[Jn]:Nt,[Nt]:Jn,[Ht]:Ht},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Z0,fragmentShader:K0}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new ot;_.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ze(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let m=this.type;this.render=function(w,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===Ru&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=sr);const v=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Fn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==this.type;O&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(k=>k.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,k=w.length;W<k;W++){const H=w[W],z=H.shadow;if(z===void 0){we("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const j=z.getFrameExtents();if(s.multiply(j),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,z.mapSize.y=r.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===us){if(H.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Sn(s.x,s.y,{format:Wi,type:zn,minFilter:Mt,magFilter:Mt,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new Es(s.x,s.y,xn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=kn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt}else{H.isPointLight?(z.map=new Xc(s.x),z.map.depthTexture=new $h(s.x,yn)):(z.map=new Sn(s.x,s.y),z.map.depthTexture=new Es(s.x,s.y,yn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=kn;const J=i.state.buffers.depth.getReversed();this.type===sr?(z.map.depthTexture.compareFunction=J?Fo:No,z.map.depthTexture.minFilter=Mt,z.map.depthTexture.magFilter=Mt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Dt,z.map.depthTexture.magFilter=Dt)}z.camera.updateProjectionMatrix()}const ie=z.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<ie;J++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,J),i.clear();else{J===0&&(i.setRenderTarget(z.map),i.clear());const ne=z.getViewport(J);a.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),N.viewport(a)}if(H.isPointLight){const ne=z.camera,Te=z.matrix,Pe=H.distance||ne.far;Pe!==ne.far&&(ne.far=Pe,ne.updateProjectionMatrix()),cs.setFromMatrixPosition(H.matrixWorld),ne.position.copy(cs),Ma.copy(ne.position),Ma.add($0[J]),ne.up.copy(J0[J]),ne.lookAt(Ma),ne.updateMatrixWorld(),Te.makeTranslation(-cs.x,-cs.y,-cs.z),sc.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),z._frustum.setFromProjectionMatrix(sc,ne.coordinateSystem,ne.reversedDepth)}else z.updateMatrices(H);n=z.getFrustum(),y(R,L,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===us&&E(z,L),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(v,M,C)};function E(w,R){const L=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Sn(s.x,s.y,{format:Wi,type:zn})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,L,h,g,null)}function T(w,R,L,v){let M=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)M=C;else if(M=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=M.uuid,O=R.uuid;let W=l[N];W===void 0&&(W={},l[N]=W);let k=W[O];k===void 0&&(k=M.clone(),W[O]=k,R.addEventListener("dispose",b)),M=k}if(M.visible=R.visible,M.wireframe=R.wireframe,v===us?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=i.properties.get(M);N.light=L}return M}function y(w,R,L,v,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===us)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const O=e.update(w),W=w.material;if(Array.isArray(W)){const k=O.groups;for(let H=0,z=k.length;H<z;H++){const j=k[H],ie=W[j.materialIndex];if(ie&&ie.visible){const J=T(w,ie,v,M);w.onBeforeShadow(i,w,R,L,O,J,j),i.renderBufferDirect(L,null,O,J,w,j),w.onAfterShadow(i,w,R,L,O,J,j)}}}else if(W.visible){const k=T(w,W,v,M);w.onBeforeShadow(i,w,R,L,O,k,null),i.renderBufferDirect(L,null,O,k,w,null),w.onAfterShadow(i,w,R,L,O,k,null)}}const N=w.children;for(let O=0,W=N.length;O<W;O++)y(N[O],R,L,v,M)}function b(w){w.target.removeEventListener("dispose",b);for(const L in l){const v=l[L],M=w.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const eg={[Ca]:Pa,[Da]:Ua,[La]:Na,[Hi]:Ia,[Pa]:Ca,[Ua]:Da,[Na]:La,[Ia]:Hi};function tg(i,e){function t(){let I=!1;const he=new pt;let te=null;const de=new pt(0,0,0,0);return{setMask:function(Q){te!==Q&&!I&&(i.colorMask(Q,Q,Q,Q),te=Q)},setLocked:function(Q){I=Q},setClear:function(Q,Z,se,Le,rt){rt===!0&&(Q*=Le,Z*=Le,se*=Le),he.set(Q,Z,se,Le),de.equals(he)===!1&&(i.clearColor(Q,Z,se,Le),de.copy(he))},reset:function(){I=!1,te=null,de.set(-1,0,0,0)}}}function n(){let I=!1,he=!1,te=null,de=null,Q=null;return{setReversed:function(Z){if(he!==Z){const se=e.get("EXT_clip_control");Z?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),he=Z;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(Z){Z?$(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(Z){te!==Z&&!I&&(i.depthMask(Z),te=Z)},setFunc:function(Z){if(he&&(Z=eg[Z]),de!==Z){switch(Z){case Ca:i.depthFunc(i.NEVER);break;case Pa:i.depthFunc(i.ALWAYS);break;case Da:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Z}},setLocked:function(Z){I=Z},setClear:function(Z){Q!==Z&&(he&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){I=!1,te=null,de=null,Q=null,he=!1}}}function s(){let I=!1,he=null,te=null,de=null,Q=null,Z=null,se=null,Le=null,rt=null;return{setTest:function(Ke){I||(Ke?$(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Ke){he!==Ke&&!I&&(i.stencilMask(Ke),he=Ke)},setFunc:function(Ke,pn,wn){(te!==Ke||de!==pn||Q!==wn)&&(i.stencilFunc(Ke,pn,wn),te=Ke,de=pn,Q=wn)},setOp:function(Ke,pn,wn){(Z!==Ke||se!==pn||Le!==wn)&&(i.stencilOp(Ke,pn,wn),Z=Ke,se=pn,Le=wn)},setLocked:function(Ke){I=Ke},setClear:function(Ke){rt!==Ke&&(i.clearStencil(Ke),rt=Ke)},reset:function(){I=!1,he=null,te=null,de=null,Q=null,Z=null,se=null,Le=null,rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,E=null,T=null,y=null,b=null,w=null,R=new ke(0,0,0),L=0,v=!1,M=null,C=null,N=null,O=null,W=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=z>=1):j.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=z>=2);let ie=null,J={};const ne=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Pe=new pt().fromArray(ne),tt=new pt().fromArray(Te);function je(I,he,te,de){const Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<te;se++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(he+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}const Y={};Y[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Hi),Fe(!1),gt(el),$(i.CULL_FACE),Ze(Fn);function $(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function pe(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function De(I,he){return d[I]!==he?(i.bindFramebuffer(I,he),d[I]=he,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function me(I,he){let te=h,de=!1;if(I){te=f.get(he),te===void 0&&(te=[],f.set(he,te));const Q=I.textures;if(te.length!==Q.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,se=Q.length;Z<se;Z++)te[Z]=i.COLOR_ATTACHMENT0+Z;te.length=Q.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function Ve(I){return _!==I?(i.useProgram(I),_=I,!0):!1}const At={[hi]:i.FUNC_ADD,[Pu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};At[Lu]=i.MIN,At[Iu]=i.MAX;const He={[Uu]:i.ZERO,[Nu]:i.ONE,[Fu]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[Hu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Bu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[zu]:i.ONE_MINUS_DST_ALPHA,[Gu]:i.CONSTANT_COLOR,[Wu]:i.ONE_MINUS_CONSTANT_COLOR,[Xu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,he,te,de,Q,Z,se,Le,rt,Ke){if(I===Fn){g===!0&&(pe(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),I!==Cu){if(I!==p||Ke!==v){if((m!==hi||y!==hi)&&(i.blendEquation(i.FUNC_ADD),m=hi,y=hi),Ke)switch(I){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:We("WebGLState: Invalid blending: ",I);break}else switch(I){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",I);break}E=null,T=null,b=null,w=null,R.set(0,0,0),L=0,p=I,v=Ke}return}Q=Q||he,Z=Z||te,se=se||de,(he!==m||Q!==y)&&(i.blendEquationSeparate(At[he],At[Q]),m=he,y=Q),(te!==E||de!==T||Z!==b||se!==w)&&(i.blendFuncSeparate(He[te],He[de],He[Z],He[se]),E=te,T=de,b=Z,w=se),(Le.equals(R)===!1||rt!==L)&&(i.blendColor(Le.r,Le.g,Le.b,rt),R.copy(Le),L=rt),p=I,v=!1}function nt(I,he){I.side===Ht?pe(i.CULL_FACE):$(i.CULL_FACE);let te=I.side===Nt;he&&(te=!te),Fe(te),I.blending===Bi&&I.transparent===!1?Ze(Fn):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_t(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function gt(I){I!==Au?($(i.CULL_FACE),I!==C&&(I===el?i.cullFace(i.BACK):I===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),C=I}function P(I){I!==N&&(H&&i.lineWidth(I),N=I)}function _t(I,he,te){I?($(i.POLYGON_OFFSET_FILL),(O!==he||W!==te)&&(i.polygonOffset(he,te),O=he,W=te)):pe(i.POLYGON_OFFSET_FILL)}function Ye(I){I?$(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function st(I){I===void 0&&(I=i.TEXTURE0+k-1),ie!==I&&(i.activeTexture(I),ie=I)}function ve(I,he,te){te===void 0&&(ie===null?te=i.TEXTURE0+k-1:te=ie);let de=J[te];de===void 0&&(de={type:void 0,texture:void 0},J[te]=de),(de.type!==I||de.texture!==he)&&(ie!==te&&(i.activeTexture(te),ie=te),i.bindTexture(I,he||Y[I]),de.type=I,de.texture=he)}function A(){const I=J[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function re(){try{i.texStorage2D(...arguments)}catch(I){We("WebGLState:",I)}}function xe(){try{i.texStorage3D(...arguments)}catch(I){We("WebGLState:",I)}}function Re(){try{i.texImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function ee(){try{i.texImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function oe(I){Pe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Pe.copy(I))}function _e(I){tt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Me(I,he){let te=l.get(he);te===void 0&&(te=new WeakMap,l.set(he,te));let de=te.get(I);de===void 0&&(de=i.getUniformBlockIndex(he,I.name),te.set(I,de))}function ae(I,he){const de=l.get(he).get(I);c.get(he)!==de&&(i.uniformBlockBinding(he,de,I.__bindingPointIndex),c.set(he,de))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,J={},d={},f=new WeakMap,h=[],_=null,g=!1,p=null,m=null,E=null,T=null,y=null,b=null,w=null,R=new ke(0,0,0),L=0,v=!1,M=null,C=null,N=null,O=null,W=null,Pe.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:pe,bindFramebuffer:De,drawBuffers:me,useProgram:Ve,setBlending:Ze,setMaterial:nt,setFlipSided:Fe,setCullFace:gt,setLineWidth:P,setPolygonOffset:_t,setScissorTest:Ye,activeTexture:st,bindTexture:ve,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Re,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:xe,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:oe,viewport:_e,reset:Oe}}function ng(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ce,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return h?new OffscreenCanvas(A,x):Ms("canvas")}function g(A,x,U){let q=1;const K=ve(A);if((K.width>U||K.height>U)&&(q=U/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*K.width),Se=Math.floor(q*K.height);d===void 0&&(d=_(X,Se));const re=x?_(X,Se):d;return re.width=X,re.height=Se,re.getContext("2d").drawImage(A,0,0,X,Se),we("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+Se+")."),re}else return"data"in A&&we("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function m(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,x,U,q,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),x===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const Se=K?yr:Xe.getTransfer(q);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=Se===Je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(A,x){let U;return A?x===null||x===yn||x===vs?U=i.DEPTH24_STENCIL8:x===xn?U=i.DEPTH32F_STENCIL8:x===xs&&(U=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yn||x===vs?U=i.DEPTH_COMPONENT24:x===xn?U=i.DEPTH_COMPONENT32F:x===xs&&(U=i.DEPTH_COMPONENT16),U}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Mt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&u.delete(x)}function R(A){const x=A.target;x.removeEventListener("dispose",R),M(x)}function L(A){const x=n.get(A);if(x.__webglInit===void 0)return;const U=A.source,q=f.get(U);if(q){const K=q[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&v(A),Object.keys(q).length===0&&f.delete(U)}n.remove(A)}function v(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const U=A.source,q=f.get(U);delete q[x.__cacheKey],a.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let K=0;K<x.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(x.__webglFramebuffer[q][K]);else i.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)i.deleteFramebuffer(x.__webglFramebuffer[q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let q=0,K=U.length;q<K;q++){const X=n.get(U[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(U[q])}n.remove(A)}let C=0;function N(){C=0}function O(){const A=C;return A>=s.maxTextures&&we("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function W(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function k(A,x){const U=n.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const q=A.image;if(q===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function H(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function z(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function j(A,x){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){$(U,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const ie={[Nn]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},J={[Dt]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[Mt]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},ne={[Ju]:i.NEVER,[ih]:i.ALWAYS,[Qu]:i.LESS,[No]:i.LEQUAL,[eh]:i.EQUAL,[Fo]:i.GEQUAL,[th]:i.GREATER,[nh]:i.NOTEQUAL};function Te(A,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Mt||x.magFilter===zr||x.magFilter===Ds||x.magFilter===Zn||x.minFilter===Mt||x.minFilter===zr||x.minFilter===Ds||x.minFilter===Zn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ie[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Dt||x.minFilter!==Ds&&x.minFilter!==Zn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Pe(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const q=x.source;let K=f.get(q);K===void 0&&(K={},f.set(q,K));const X=W(x);if(X!==A.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),K[X].usedTimes++;const Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&v(x)),A.__cacheKey=X,A.__webglTexture=K[X].texture}return U}function tt(A,x,U){return Math.floor(Math.floor(A/U)/x)}function je(A,x,U,q){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,q,x.data);else{X.sort((ee,oe)=>ee.start-oe.start);let Se=0;for(let ee=1;ee<X.length;ee++){const oe=X[Se],_e=X[ee],Me=oe.start+oe.count,ae=tt(_e.start,x.width,4),Oe=tt(oe.start,x.width,4);_e.start<=Me+1&&ae===Oe&&tt(_e.start+_e.count-1,x.width,4)===ae?oe.count=Math.max(oe.count,_e.start+_e.count-oe.start):(++Se,X[Se]=_e)}X.length=Se+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ee=0,oe=X.length;ee<oe;ee++){const _e=X[ee],Me=Math.floor(_e.start/4),ae=Math.ceil(_e.count/4),Oe=Me%x.width,I=Math.floor(Me/x.width),he=ae,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Oe,I,he,te,U,q,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Y(A,x,U){let q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=i.TEXTURE_3D);const K=Pe(A,x),X=x.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+U);const Se=n.get(X);if(X.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+U);const re=Xe.getPrimaries(Xe.workingColorSpace),xe=x.colorSpace===jn?null:Xe.getPrimaries(x.colorSpace),Re=x.colorSpace===jn||re===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ee=g(x.image,!1,s.maxTextureSize);ee=st(x,ee);const oe=r.convert(x.format,x.colorSpace),_e=r.convert(x.type);let Me=T(x.internalFormat,oe,_e,x.colorSpace,x.isVideoTexture);Te(q,x);let ae;const Oe=x.mipmaps,I=x.isVideoTexture!==!0,he=Se.__version===void 0||K===!0,te=X.dataReady,de=b(x,ee);if(x.isDepthTexture)Me=y(x.format===fi,x.type),he&&(I?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,oe,_e,null));else if(x.isDataTexture)if(Oe.length>0){I&&he&&t.texStorage2D(i.TEXTURE_2D,de,Me,Oe[0].width,Oe[0].height);for(let Q=0,Z=Oe.length;Q<Z;Q++)ae=Oe[Q],I?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,oe,_e,ae.data);x.generateMipmaps=!1}else I?(he&&t.texStorage2D(i.TEXTURE_2D,de,Me,ee.width,ee.height),te&&je(x,ee,oe,_e)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,oe,_e,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){I&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,Oe[0].width,Oe[0].height,ee.depth);for(let Q=0,Z=Oe.length;Q<Z;Q++)if(ae=Oe[Q],x.format!==hn)if(oe!==null)if(I){if(te)if(x.layerUpdates.size>0){const se=Nl(ae.width,ae.height,x.format,x.type);for(const Le of x.layerUpdates){const rt=ae.data.subarray(Le*se/ae.data.BYTES_PER_ELEMENT,(Le+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Le,ae.width,ae.height,1,oe,rt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,oe,_e,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ae.width,ae.height,ee.depth,0,oe,_e,ae.data)}else{I&&he&&t.texStorage2D(i.TEXTURE_2D,de,Me,Oe[0].width,Oe[0].height);for(let Q=0,Z=Oe.length;Q<Z;Q++)ae=Oe[Q],x.format!==hn?oe!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,ae.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,oe,_e,ae.data)}else if(x.isDataArrayTexture)if(I){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,ee.width,ee.height,ee.depth),te)if(x.layerUpdates.size>0){const Q=Nl(ee.width,ee.height,x.format,x.type);for(const Z of x.layerUpdates){const se=ee.data.subarray(Z*Q/ee.data.BYTES_PER_ELEMENT,(Z+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,oe,_e,se)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(x.isData3DTexture)I?(he&&t.texStorage3D(i.TEXTURE_3D,de,Me,ee.width,ee.height,ee.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(x.isFramebufferTexture){if(he)if(I)t.texStorage2D(i.TEXTURE_2D,de,Me,ee.width,ee.height);else{let Q=ee.width,Z=ee.height;for(let se=0;se<de;se++)t.texImage2D(i.TEXTURE_2D,se,Me,Q,Z,0,oe,_e,null),Q>>=1,Z>>=1}}else if(Oe.length>0){if(I&&he){const Q=ve(Oe[0]);t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height)}for(let Q=0,Z=Oe.length;Q<Z;Q++)ae=Oe[Q],I?te&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe,_e,ae):t.texImage2D(i.TEXTURE_2D,Q,Me,oe,_e,ae);x.generateMipmaps=!1}else if(I){if(he){const Q=ve(ee);t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,oe,_e,ee);p(x)&&m(q),Se.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,U){if(x.image.length!==6)return;const q=Pe(A,x),K=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const X=n.get(K);if(K.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+U);const Se=Xe.getPrimaries(Xe.workingColorSpace),re=x.colorSpace===jn?null:Xe.getPrimaries(x.colorSpace),xe=x.colorSpace===jn||Se===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let Z=0;Z<6;Z++)!Re&&!ee?oe[Z]=g(x.image[Z],!0,s.maxCubemapSize):oe[Z]=ee?x.image[Z].image:x.image[Z],oe[Z]=st(x,oe[Z]);const _e=oe[0],Me=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),Oe=T(x.internalFormat,Me,ae,x.colorSpace),I=x.isVideoTexture!==!0,he=X.__version===void 0||q===!0,te=K.dataReady;let de=b(x,_e);Te(i.TEXTURE_CUBE_MAP,x);let Q;if(Re){I&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,_e.width,_e.height);for(let Z=0;Z<6;Z++){Q=oe[Z].mipmaps;for(let se=0;se<Q.length;se++){const Le=Q[se];x.format!==hn?Me!==null?I?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Oe,Le.width,Le.height,0,Le.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,0,0,Le.width,Le.height,Me,ae,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se,Oe,Le.width,Le.height,0,Me,ae,Le.data)}}}else{if(Q=x.mipmaps,I&&he){Q.length>0&&de++;const Z=ve(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,oe[Z].width,oe[Z].height,Me,ae,oe[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,oe[Z].width,oe[Z].height,0,Me,ae,oe[Z].data);for(let se=0;se<Q.length;se++){const rt=Q[se].image[Z].image;I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,rt.width,rt.height,Me,ae,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Oe,rt.width,rt.height,0,Me,ae,rt.data)}}else{I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,ae,oe[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Me,ae,oe[Z]);for(let se=0;se<Q.length;se++){const Le=Q[se];I?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,0,0,Me,ae,Le.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,se+1,Oe,Me,ae,Le.image[Z])}}}p(x)&&m(i.TEXTURE_CUBE_MAP),X.__version=K.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function pe(A,x,U,q,K,X){const Se=r.convert(U.format,U.colorSpace),re=r.convert(U.type),xe=T(U.internalFormat,Se,re,U.colorSpace),Re=n.get(x),ee=n.get(U);if(ee.__renderTarget=x,!Re.__hasExternalTextures){const oe=Math.max(1,x.width>>X),_e=Math.max(1,x.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,X,xe,oe,_e,x.depth,0,Se,re,null):t.texImage2D(K,X,xe,oe,_e,0,Se,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,ee.__webglTexture,0,P(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,ee.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=y(x.stencilBuffer,K),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),X,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const q=x.textures;for(let K=0;K<q.length;K++){const X=q[K],Se=r.convert(X.format,X.colorSpace),re=r.convert(X.type),xe=T(X.internalFormat,Se,re,X.colorSpace);_t(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(x),xe,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(x),xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(A,x,U){const q=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Te(i.TEXTURE_CUBE_MAP,x.depthTexture);const Re=r.convert(x.depthTexture.format),ee=r.convert(x.depthTexture.type);let oe;x.depthTexture.format===kn?oe=i.DEPTH_COMPONENT24:x.depthTexture.format===fi&&(oe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,x.width,x.height,0,Re,ee,null)}}else k(x.depthTexture,0);const X=K.__webglTexture,Se=P(x),re=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,xe=x.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,re,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,re,X,0);else if(x.depthTexture.format===fi)_t(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,re,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,re,X,0);else throw new Error("Unknown depthTexture format")}function Ve(A){const x=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let q=0;q<6;q++)me(x.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?me(x.__webglFramebuffer[0],A,0):me(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=i.createRenderbuffer(),De(x.__webglDepthbuffer[q],A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,x,U){const q=n.get(A);x!==void 0&&pe(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ve(A)}function He(A){const x=A.texture,U=n.get(A),q=n.get(x);A.addEventListener("dispose",R);const K=A.textures,X=A.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=x.version,a.memory.textures++),X){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let xe=0;xe<x.mipmaps.length;xe++)U.__webglFramebuffer[re][xe]=i.createFramebuffer()}else U.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)U.__webglFramebuffer[re]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Se)for(let re=0,xe=K.length;re<xe;re++){const Re=n.get(K[re]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&_t(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const xe=K[re];U.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const Re=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),oe=T(xe.internalFormat,Re,ee,xe.colorSpace,A.isXRRenderTarget===!0),_e=P(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,U.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),De(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Te(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(U.__webglFramebuffer[re][xe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else pe(U.__webglFramebuffer[re],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(x)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,xe=K.length;re<xe;re++){const Re=K[re],ee=n.get(Re);let oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),Te(oe,Re),pe(U.__webglFramebuffer,A,Re,i.COLOR_ATTACHMENT0+re,oe,0),p(Re)&&m(oe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Te(re,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)pe(U.__webglFramebuffer[xe],A,x,i.COLOR_ATTACHMENT0,re,xe);else pe(U.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,re,0);p(x)&&m(re),t.unbindTexture()}A.depthBuffer&&Ve(A)}function Ze(A){const x=A.textures;for(let U=0,q=x.length;U<q;U++){const K=x[U];if(p(K)){const X=E(A),Se=n.get(K).__webglTexture;t.bindTexture(X,Se),m(X),t.unbindTexture()}}}const nt=[],Fe=[];function gt(A){if(A.samples>0){if(_t(A)===!1){const x=A.textures,U=A.width,q=A.height;let K=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),re=x.length>1;if(re)for(let Re=0;Re<x.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Re=0;Re<x.length;Re++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);const ee=n.get(x[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,q,0,0,U,q,K,i.NEAREST),c===!0&&(nt.length=0,Fe.length=0,nt.push(i.COLOR_ATTACHMENT0+Re),A.depthBuffer&&A.resolveDepthBuffer===!1&&(nt.push(X),Fe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Re=0;Re<x.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Re]);const ee=n.get(x[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function P(A){return Math.min(s.maxSamples,A.samples)}function _t(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function st(A,x){const U=A.colorSpace,q=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Xi&&U!==jn&&(Xe.getTransfer(U)===Je?(q!==hn||K!==Qt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",U)),x}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ig(i,e){function t(n,s=jn){let r;const a=Xe.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===Po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Do)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Pc)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Co)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Uc)return i.RGB;if(n===hn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Lo)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===za||n===ka||n===Va||n===Ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===za)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ga||n===Wa)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ka||n===$a||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===to)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===no)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===io)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===so)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===uo||n===ho||n===fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===uo)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends _i{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",p=new ag,m={},E=t.getContextAttributes();let T=null,y=null;const b=[],w=[],R=new Ce;let L=null;const v=new Yt;v.viewport=new pt;const M=new Yt;M.viewport=new pt;const C=[v,M],N=new fd;let O=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=b[Y];return $===void 0&&($=new aa,b[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=b[Y];return $===void 0&&($=new aa,b[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=b[Y];return $===void 0&&($=new aa,b[Y]=$),$.getHandSpace()};function k(Y){const $=w.indexOf(Y.inputSource);if($===-1)return;const pe=b[$];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||a),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<b.length;Y++){const $=w[Y];$!==null&&(w[Y]=null,b[Y].disconnect($))}O=null,W=null,p.reset();for(const Y in m)delete m[Y];e.setRenderTarget(T),h=null,f=null,d=null,s=null,y=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",z),E.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,De=null,me=null;E.depth&&(me=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=E.stencil?fi:kn,De=E.stencil?vs:yn);const Ve={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Sn(f.textureWidth,f.textureHeight,{format:hn,type:Qt,depthTexture:new Es(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const pe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Sn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(Y){for(let $=0;$<Y.removed.length;$++){const pe=Y.removed[$],De=w.indexOf(pe);De>=0&&(w[De]=null,b[De].disconnect(pe))}for(let $=0;$<Y.added.length;$++){const pe=Y.added[$];let De=w.indexOf(pe);if(De===-1){for(let Ve=0;Ve<b.length;Ve++)if(Ve>=w.length){w.push(pe),De=Ve;break}else if(w[Ve]===null){w[Ve]=pe,De=Ve;break}if(De===-1)break}const me=b[De];me&&me.connect(pe)}}const j=new D,ie=new D;function J(Y,$,pe){j.setFromMatrixPosition($.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const De=j.distanceTo(ie),me=$.projectionMatrix.elements,Ve=pe.projectionMatrix.elements,At=me[14]/(me[10]-1),He=me[14]/(me[10]+1),Ze=(me[9]+1)/me[5],nt=(me[9]-1)/me[5],Fe=(me[8]-1)/me[0],gt=(Ve[8]+1)/Ve[0],P=At*Fe,_t=At*gt,Ye=De/(-Fe+gt),st=Ye*-Fe;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(st),Y.translateZ(Ye),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),me[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ve=At+Ye,A=He+Ye,x=P-st,U=_t+(De-st),q=Ze*He/A*ve,K=nt*He/A*ve;Y.projectionMatrix.makePerspective(x,U,q,K,ve,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,pe=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),N.near=M.near=v.near=$,N.far=M.far=v.far=pe,(O!==N.near||W!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,W=N.far),N.layers.mask=Y.layers.mask|6,v.layers.mask=N.layers.mask&3,M.layers.mask=N.layers.mask&5;const De=Y.parent,me=N.cameras;ne(N,De);for(let Ve=0;Ve<me.length;Ve++)ne(me[Ve],De);me.length===2?J(N,v,M):N.projectionMatrix.copy(v.projectionMatrix),Te(Y,N,De)};function Te(Y,$,pe){pe===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(Y){return m[Y]};let Pe=null;function tt(Y,$){if(u=$.getViewerPose(l||a),_=$,u!==null){const pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let De=!1;pe.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let He=0;He<pe.length;He++){const Ze=pe[He];let nt=null;if(h!==null)nt=h.getViewport(Ze);else{const gt=d.getViewSubImage(f,Ze);nt=gt.viewport,He===0&&(e.setRenderTargetTextures(y,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(y))}let Fe=C[He];Fe===void 0&&(Fe=new Yt,Fe.layers.enable(He),Fe.viewport=new pt,C[He]=Fe),Fe.matrix.fromArray(Ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(nt.x,nt.y,nt.width,nt.height),He===0&&(N.matrix.copy(Fe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Fe)}const me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const He=d.getDepthInformation(pe[0]);He&&He.isValid&&He.texture&&p.init(He,s.renderState)}if(me&&me.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<pe.length;He++){const Ze=pe[He].camera;if(Ze){let nt=m[Ze];nt||(nt=new Yc,m[Ze]=nt);const Fe=d.getCameraImage(Ze);nt.sourceTexture=Fe}}}}for(let pe=0;pe<b.length;pe++){const De=w[pe],me=b[pe];De!==null&&me!==void 0&&me.update(De,$,l||a)}Pe&&Pe(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const je=new Jc;je.setAnimationLoop(tt),this.setAnimationLoop=function(Y){Pe=Y},this.dispose=function(){}}}const ci=new En,lg=new lt;function cg(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Hc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,E,T,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,E,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=e.get(m),T=E.envMap,y=E.envMapRotation;T&&(p.envMap.value=T,ci.copy(y),ci.x*=-1,ci.y*=-1,ci.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(ci)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,E,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const E=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ug(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const y=T.program;n.uniformBlockBinding(E,y)}function l(E,T){let y=s[E.id];y===void 0&&(_(E),y=u(E),s[E.id]=y,E.addEventListener("dispose",p));const b=T.program;n.updateUBOMapping(E,b);const w=e.render.frame;r[E.id]!==w&&(f(E),r[E.id]=w)}function u(E){const T=d();E.__bindingPointIndex=T;const y=i.createBuffer(),b=E.__size,w=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,b,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=s[E.id],y=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,R=y.length;w<R;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,M=L.length;v<M;v++){const C=L[v];if(h(C,w,v,b)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let k=0;k<O.length;k++){const H=O[k],z=g(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,N+W,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(E,T,y,b){const w=E.value,R=T+"_"+y;if(b[R]===void 0)return typeof w=="number"||typeof w=="boolean"?b[R]=w:b[R]=w.clone(),!0;{const L=b[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return b[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(E){const T=E.uniforms;let y=0;const b=16;for(let R=0,L=T.length;R<L;R++){const v=Array.isArray(T[R])?T[R]:[T[R]];for(let M=0,C=v.length;M<C;M++){const N=v[M],O=Array.isArray(N.value)?N.value:[N.value];for(let W=0,k=O.length;W<k;W++){const H=O[W],z=g(H),j=y%b,ie=j%z.boundary,J=j+ie;y+=ie,J!==0&&b-J<z.storage&&(y+=b-J),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=z.storage}}}const w=y%b;return w>0&&(y+=b-w),E.__size=y,E.__cache={},this}function g(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",E),T}function p(E){const T=E.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}const hg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function dg(){return mn===null&&(mn=new qh(hg,16,16,Wi,zn),mn.name="DFG_LUT",mn.minFilter=Mt,mn.magFilter=Mt,mn.wrapS=_n,mn.wrapT=_n,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class fg{constructor(e={}){const{canvas:t=sh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Qt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=h,p=new Set([Uo,Io,Lo]),m=new Set([Qt,yn,xs,vs,Po,Do]),E=new Uint32Array(4),T=new Int32Array(4);let y=null,b=null;const w=[],R=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=qt;let C=0,N=0,O=null,W=-1,k=null;const H=new pt,z=new pt;let j=null;const ie=new ke(0);let J=0,ne=t.width,Te=t.height,Pe=1,tt=null,je=null;const Y=new pt(0,0,ne,Te),$=new pt(0,0,ne,Te);let pe=!1;const De=new ko;let me=!1,Ve=!1;const At=new lt,He=new D,Ze=new pt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function gt(){return O===null?Pe:1}let P=n;function _t(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),P===null){const F="webgl2";if(P=_t(F,S),P===null)throw _t(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw We("WebGLRenderer: "+S.message),S}let Ye,st,ve,A,x,U,q,K,X,Se,re,xe,Re,ee,oe,_e,Me,ae,Oe,I,he,te,de,Q;function Z(){Ye=new dm(P),Ye.init(),te=new ig(P,Ye),st=new im(P,Ye,e,te),ve=new tg(P,Ye),st.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),A=new mm(P),x=new k0,U=new ng(P,Ye,ve,x,st,te,A),q=new rm(v),K=new hm(v),X=new xd(P),de=new tm(P,X),Se=new fm(P,X,A,de),re=new _m(P,Se,X,A),Oe=new gm(P,st,U),_e=new sm(x),xe=new z0(v,q,K,Ye,st,de,_e),Re=new cg(v,x),ee=new H0,oe=new j0(Ye),ae=new em(v,q,K,ve,re,_,c),Me=new Q0(v,re,st),Q=new ug(P,A,st,ve),I=new nm(P,Ye,A),he=new pm(P,Ye,A),A.programs=xe.programs,v.capabilities=st,v.extensions=Ye,v.properties=x,v.renderLists=ee,v.shadowMap=Me,v.state=ve,v.info=A}Z(),g!==Qt&&(L=new vm(g,t.width,t.height,s,r));const se=new og(v,P);this.xr=se,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=Ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(S){S!==void 0&&(Pe=S,this.setSize(ne,Te,!1))},this.getSize=function(S){return S.set(ne,Te)},this.setSize=function(S,F,G=!0){if(se.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=S,Te=F,t.width=Math.floor(S*Pe),t.height=Math.floor(F*Pe),G===!0&&(t.style.width=S+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ne*Pe,Te*Pe).floor()},this.setDrawingBufferSize=function(S,F,G){ne=S,Te=F,Pe=G,t.width=Math.floor(S*G),t.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(g===Qt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(H)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,F,G,V){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,F,G,V),ve.viewport(H.copy(Y).multiplyScalar(Pe).round())},this.getScissor=function(S){return S.copy($)},this.setScissor=function(S,F,G,V){S.isVector4?$.set(S.x,S.y,S.z,S.w):$.set(S,F,G,V),ve.scissor(z.copy($).multiplyScalar(Pe).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(S){ve.setScissorTest(pe=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){je=S},this.getClearColor=function(S){return S.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,G=!0){let V=0;if(S){let B=!1;if(O!==null){const le=O.texture.format;B=p.has(le)}if(B){const le=O.texture.type,fe=m.has(le),ue=ae.getClearColor(),ge=ae.getClearAlpha(),ye=ue.r,Ae=ue.g,Ee=ue.b;fe?(E[0]=ye,E[1]=Ae,E[2]=Ee,E[3]=ge,P.clearBufferuiv(P.COLOR,0,E)):(T[0]=ye,T[1]=Ae,T[2]=Ee,T[3]=ge,P.clearBufferiv(P.COLOR,0,T))}else V|=P.COLOR_BUFFER_BIT}F&&(V|=P.DEPTH_BUFFER_BIT),G&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ae.dispose(),ee.dispose(),oe.dispose(),x.dispose(),q.dispose(),K.dispose(),re.dispose(),de.dispose(),Q.dispose(),xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Yo),se.removeEventListener("sessionend",jo),ni.stop()};function Le(S){S.preventDefault(),ol("WebGLRenderer: Context Lost."),M=!0}function rt(){ol("WebGLRenderer: Context Restored."),M=!1;const S=A.autoReset,F=Me.enabled,G=Me.autoUpdate,V=Me.needsUpdate,B=Me.type;Z(),A.autoReset=S,Me.enabled=F,Me.autoUpdate=G,Me.needsUpdate=V,Me.type=B}function Ke(S){We("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pn(S){const F=S.target;F.removeEventListener("dispose",pn),wn(F)}function wn(S){xu(S),x.remove(S)}function xu(S){const F=x.get(S).programs;F!==void 0&&(F.forEach(function(G){xe.releaseProgram(G)}),S.isShaderMaterial&&xe.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,V,B,le){F===null&&(F=nt);const fe=B.isMesh&&B.matrixWorld.determinant()<0,ue=Mu(S,F,G,V,B);ve.setMaterial(V,fe);let ge=G.index,ye=1;if(V.wireframe===!0){if(ge=Se.getWireframeAttribute(G),ge===void 0)return;ye=2}const Ae=G.drawRange,Ee=G.attributes.position;let Be=Ae.start*ye,Qe=(Ae.start+Ae.count)*ye;le!==null&&(Be=Math.max(Be,le.start*ye),Qe=Math.min(Qe,(le.start+le.count)*ye)),ge!==null?(Be=Math.max(Be,0),Qe=Math.min(Qe,ge.count)):Ee!=null&&(Be=Math.max(Be,0),Qe=Math.min(Qe,Ee.count));const ut=Qe-Be;if(ut<0||ut===1/0)return;de.setup(B,V,ue,G,ge);let ht,it=I;if(ge!==null&&(ht=X.get(ge),it=he,it.setIndex(ht)),B.isMesh)V.wireframe===!0?(ve.setLineWidth(V.wireframeLinewidth*gt()),it.setMode(P.LINES)):it.setMode(P.TRIANGLES);else if(B.isLine){let be=V.linewidth;be===void 0&&(be=1),ve.setLineWidth(be*gt()),B.isLineSegments?it.setMode(P.LINES):B.isLineLoop?it.setMode(P.LINE_LOOP):it.setMode(P.LINE_STRIP)}else B.isPoints?it.setMode(P.POINTS):B.isSprite&&it.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ss("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const be=B._multiDrawStarts,$e=B._multiDrawCounts,qe=B._multiDrawCount,jt=ge?X.get(ge).bytesPerElement:1,vi=x.get(V).currentProgram.getUniforms();for(let Zt=0;Zt<qe;Zt++)vi.setValue(P,"_gl_DrawID",Zt),it.render(be[Zt]/jt,$e[Zt])}else if(B.isInstancedMesh)it.renderInstances(Be,ut,B.count);else if(G.isInstancedBufferGeometry){const be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,$e=Math.min(G.instanceCount,be);it.renderInstances(Be,ut,$e)}else it.render(Be,ut)};function qo(S,F,G){S.transparent===!0&&S.side===Ht&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,Ps(S,F,G),S.side=Jn,S.needsUpdate=!0,Ps(S,F,G),S.side=Ht):Ps(S,F,G)}this.compile=function(S,F,G=null){G===null&&(G=S),b=oe.get(G),b.init(F),R.push(b),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),S!==G&&S.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(b.pushLight(B),B.castShadow&&b.pushShadow(B))}),b.setupLights();const V=new Set;return S.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let fe=0;fe<le.length;fe++){const ue=le[fe];qo(ue,G,B),V.add(ue)}else qo(le,G,B),V.add(le)}),b=R.pop(),V},this.compileAsync=function(S,F,G=null){const V=this.compile(S,F,G);return new Promise(B=>{function le(){if(V.forEach(function(fe){x.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){B(S);return}setTimeout(le,10)}Ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Fr=null;function vu(S){Fr&&Fr(S)}function Yo(){ni.stop()}function jo(){ni.start()}const ni=new Jc;ni.setAnimationLoop(vu),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(S){Fr=S,se.setAnimationLoop(S),S===null?ni.stop():ni.start()},se.addEventListener("sessionstart",Yo),se.addEventListener("sessionend",jo),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const G=se.enabled===!0&&se.isPresenting===!0,V=L!==null&&(O===null||G)&&L.begin(v,O);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,O),b=oe.get(S,R.length),b.init(F),R.push(b),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),De.setFromProjectionMatrix(At,vn,F.reversedDepth),Ve=this.localClippingEnabled,me=_e.init(this.clippingPlanes,Ve),y=ee.get(S,w.length),y.init(),w.push(y),se.enabled===!0&&se.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Or(fe,F,-1/0,v.sortObjects)}Or(S,F,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(tt,je),Fe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Fe&&ae.addToRenderList(y,S),this.info.render.frame++,me===!0&&_e.beginShadows();const B=b.state.shadowsArray;if(Me.render(B,S,F),me===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&L.hasRenderPass())===!1){const fe=y.opaque,ue=y.transmissive;if(b.setupLights(),F.isArrayCamera){const ge=F.cameras;if(ue.length>0)for(let ye=0,Ae=ge.length;ye<Ae;ye++){const Ee=ge[ye];Ko(fe,ue,S,Ee)}Fe&&ae.render(S);for(let ye=0,Ae=ge.length;ye<Ae;ye++){const Ee=ge[ye];Zo(y,S,Ee,Ee.viewport)}}else ue.length>0&&Ko(fe,ue,S,F),Fe&&ae.render(S),Zo(y,S,F)}O!==null&&N===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),V&&L.end(v),S.isScene===!0&&S.onAfterRender(v,S,F),de.resetDefaultState(),W=-1,k=null,R.pop(),R.length>0?(b=R[R.length-1],me===!0&&_e.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function Or(S,F,G,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||De.intersectsSprite(S)){V&&Ze.setFromMatrixPosition(S.matrixWorld).applyMatrix4(At);const fe=re.update(S),ue=S.material;ue.visible&&y.push(S,fe,ue,G,Ze.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||De.intersectsObject(S))){const fe=re.update(S),ue=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ze.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ze.copy(fe.boundingSphere.center)),Ze.applyMatrix4(S.matrixWorld).applyMatrix4(At)),Array.isArray(ue)){const ge=fe.groups;for(let ye=0,Ae=ge.length;ye<Ae;ye++){const Ee=ge[ye],Be=ue[Ee.materialIndex];Be&&Be.visible&&y.push(S,fe,Be,G,Ze.z,Ee)}}else ue.visible&&y.push(S,fe,ue,G,Ze.z,null)}}const le=S.children;for(let fe=0,ue=le.length;fe<ue;fe++)Or(le[fe],F,G,V)}function Zo(S,F,G,V){const{opaque:B,transmissive:le,transparent:fe}=S;b.setupLightsView(G),me===!0&&_e.setGlobalState(v.clippingPlanes,G),V&&ve.viewport(H.copy(V)),B.length>0&&Cs(B,F,G),le.length>0&&Cs(le,F,G),fe.length>0&&Cs(fe,F,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ko(S,F,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const Be=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Sn(1,1,{generateMipmaps:!0,type:Be?zn:Qt,minFilter:Zn,samples:st.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const le=b.state.transmissionRenderTarget[V.id],fe=V.viewport||H;le.setSize(fe.z*v.transmissionResolutionScale,fe.w*v.transmissionResolutionScale);const ue=v.getRenderTarget(),ge=v.getActiveCubeFace(),ye=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ie),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&ae.render(G);const Ae=v.toneMapping;v.toneMapping=Mn;const Ee=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),me===!0&&_e.setGlobalState(v.clippingPlanes,V),Cs(S,G,V),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Qe=0,ut=F.length;Qe<ut;Qe++){const ht=F[Qe],{object:it,geometry:be,material:$e,group:qe}=ht;if($e.side===Ht&&it.layers.test(V.layers)){const jt=$e.side;$e.side=Nt,$e.needsUpdate=!0,$o(it,G,V,be,$e,qe),$e.side=jt,$e.needsUpdate=!0,Be=!0}}Be===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}v.setRenderTarget(ue,ge,ye),v.setClearColor(ie,J),Ee!==void 0&&(V.viewport=Ee),v.toneMapping=Ae}function Cs(S,F,G){const V=F.isScene===!0?F.overrideMaterial:null;for(let B=0,le=S.length;B<le;B++){const fe=S[B],{object:ue,geometry:ge,group:ye}=fe;let Ae=fe.material;Ae.allowOverride===!0&&V!==null&&(Ae=V),ue.layers.test(G.layers)&&$o(ue,F,G,ge,Ae,ye)}}function $o(S,F,G,V,B,le){S.onBeforeRender(v,F,G,V,B,le),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(v,F,G,V,S,le),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,v.renderBufferDirect(G,F,V,B,S,le),B.side=Jn,B.needsUpdate=!0,v.renderBufferDirect(G,F,V,B,S,le),B.side=Ht):v.renderBufferDirect(G,F,V,B,S,le),S.onAfterRender(v,F,G,V,B,le)}function Ps(S,F,G){F.isScene!==!0&&(F=nt);const V=x.get(S),B=b.state.lights,le=b.state.shadowsArray,fe=B.state.version,ue=xe.getParameters(S,B.state,le,F,G),ge=xe.getProgramCacheKey(ue);let ye=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?K:q).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,ye===void 0&&(S.addEventListener("dispose",pn),ye=new Map,V.programs=ye);let Ae=ye.get(ge);if(Ae!==void 0){if(V.currentProgram===Ae&&V.lightsStateVersion===fe)return Qo(S,ue),Ae}else ue.uniforms=xe.getUniforms(S),S.onBeforeCompile(ue,v),Ae=xe.acquireProgram(ue,ge),ye.set(ge,Ae),V.uniforms=ue.uniforms;const Ee=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ee.clippingPlanes=_e.uniform),Qo(S,ue),V.needsLights=yu(S),V.lightsStateVersion=fe,V.needsLights&&(Ee.ambientLightColor.value=B.state.ambient,Ee.lightProbe.value=B.state.probe,Ee.directionalLights.value=B.state.directional,Ee.directionalLightShadows.value=B.state.directionalShadow,Ee.spotLights.value=B.state.spot,Ee.spotLightShadows.value=B.state.spotShadow,Ee.rectAreaLights.value=B.state.rectArea,Ee.ltc_1.value=B.state.rectAreaLTC1,Ee.ltc_2.value=B.state.rectAreaLTC2,Ee.pointLights.value=B.state.point,Ee.pointLightShadows.value=B.state.pointShadow,Ee.hemisphereLights.value=B.state.hemi,Ee.directionalShadowMap.value=B.state.directionalShadowMap,Ee.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ee.spotShadowMap.value=B.state.spotShadowMap,Ee.spotLightMatrix.value=B.state.spotLightMatrix,Ee.spotLightMap.value=B.state.spotLightMap,Ee.pointShadowMap.value=B.state.pointShadowMap,Ee.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ae,V.uniformsList=null,Ae}function Jo(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=ur.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Qo(S,F){const G=x.get(S);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Mu(S,F,G,V,B){F.isScene!==!0&&(F=nt),U.resetTextureUnits();const le=F.fog,fe=V.isMeshStandardMaterial?F.environment:null,ue=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Xi,ge=(V.isMeshStandardMaterial?K:q).get(V.envMap||fe),ye=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!G.morphAttributes.position,Be=!!G.morphAttributes.normal,Qe=!!G.morphAttributes.color;let ut=Mn;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ht=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=ht!==void 0?ht.length:0,be=x.get(V),$e=b.state.lights;if(me===!0&&(Ve===!0||S!==k)){const Ft=S===k&&V.id===W;_e.setState(V,S,Ft)}let qe=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==$e.state.version||be.outputColorSpace!==ue||B.isBatchedMesh&&be.batching===!1||!B.isBatchedMesh&&be.batching===!0||B.isBatchedMesh&&be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&be.instancing===!1||!B.isInstancedMesh&&be.instancing===!0||B.isSkinnedMesh&&be.skinning===!1||!B.isSkinnedMesh&&be.skinning===!0||B.isInstancedMesh&&be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&be.instancingMorph===!1&&B.morphTexture!==null||be.envMap!==ge||V.fog===!0&&be.fog!==le||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==_e.numPlanes||be.numIntersection!==_e.numIntersection)||be.vertexAlphas!==ye||be.vertexTangents!==Ae||be.morphTargets!==Ee||be.morphNormals!==Be||be.morphColors!==Qe||be.toneMapping!==ut||be.morphTargetsCount!==it)&&(qe=!0):(qe=!0,be.__version=V.version);let jt=be.currentProgram;qe===!0&&(jt=Ps(V,F,B));let vi=!1,Zt=!1,ns=!1;const at=jt.getUniforms(),Gt=be.uniforms;if(ve.useProgram(jt.program)&&(vi=!0,Zt=!0,ns=!0),V.id!==W&&(W=V.id,Zt=!0),vi||k!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),at.setValue(P,"projectionMatrix",S.projectionMatrix),at.setValue(P,"viewMatrix",S.matrixWorldInverse);const Wt=at.map.cameraPosition;Wt!==void 0&&Wt.setValue(P,He.setFromMatrixPosition(S.matrixWorld)),st.logarithmicDepthBuffer&&at.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&at.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),k!==S&&(k=S,Zt=!0,ns=!0)}if(be.needsLights&&($e.state.directionalShadowMap.length>0&&at.setValue(P,"directionalShadowMap",$e.state.directionalShadowMap,U),$e.state.spotShadowMap.length>0&&at.setValue(P,"spotShadowMap",$e.state.spotShadowMap,U),$e.state.pointShadowMap.length>0&&at.setValue(P,"pointShadowMap",$e.state.pointShadowMap,U)),B.isSkinnedMesh){at.setOptional(P,B,"bindMatrix"),at.setOptional(P,B,"bindMatrixInverse");const Ft=B.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),at.setValue(P,"boneTexture",Ft.boneTexture,U))}B.isBatchedMesh&&(at.setOptional(P,B,"batchingTexture"),at.setValue(P,"batchingTexture",B._matricesTexture,U),at.setOptional(P,B,"batchingIdTexture"),at.setValue(P,"batchingIdTexture",B._indirectTexture,U),at.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&at.setValue(P,"batchingColorTexture",B._colorsTexture,U));const tn=G.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Oe.update(B,G,jt),(Zt||be.receiveShadow!==B.receiveShadow)&&(be.receiveShadow=B.receiveShadow,at.setValue(P,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Gt.envMap.value=ge,Gt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(Gt.envMapIntensity.value=F.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=dg()),Zt&&(at.setValue(P,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Su(Gt,ns),le&&V.fog===!0&&Re.refreshFogUniforms(Gt,le),Re.refreshMaterialUniforms(Gt,V,Pe,Te,b.state.transmissionRenderTarget[S.id]),ur.upload(P,Jo(be),Gt,U)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ur.upload(P,Jo(be),Gt,U),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&at.setValue(P,"center",B.center),at.setValue(P,"modelViewMatrix",B.modelViewMatrix),at.setValue(P,"normalMatrix",B.normalMatrix),at.setValue(P,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ft=V.uniformsGroups;for(let Wt=0,Br=Ft.length;Wt<Br;Wt++){const ii=Ft[Wt];Q.update(ii,jt),Q.bind(ii,jt)}}return jt}function Su(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function yu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,F,G){const V=x.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),x.get(S.texture).__webglTexture=F,x.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){const G=x.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Eu=P.createFramebuffer();this.setRenderTarget=function(S,F=0,G=0){O=S,C=F,N=G;let V=null,B=!1,le=!1;if(S){const ue=x.get(S);if(ue.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(P.FRAMEBUFFER,ue.__webglFramebuffer),H.copy(S.viewport),z.copy(S.scissor),j=S.scissorTest,ve.viewport(H),ve.scissor(z),ve.setScissorTest(j),W=-1;return}else if(ue.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(ue.__hasExternalTextures)U.rebindTextures(S,x.get(S.texture).__webglTexture,x.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(ue.__boundDepthTexture!==Ae){if(Ae!==null&&x.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}const ge=S.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(le=!0);const ye=x.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ye[F])?V=ye[F][G]:V=ye[F],B=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?V=x.get(S).__webglMultisampledFramebuffer:Array.isArray(ye)?V=ye[G]:V=ye,H.copy(S.viewport),z.copy(S.scissor),j=S.scissorTest}else H.copy(Y).multiplyScalar(Pe).floor(),z.copy($).multiplyScalar(Pe).floor(),j=pe;if(G!==0&&(V=Eu),ve.bindFramebuffer(P.FRAMEBUFFER,V)&&ve.drawBuffers(S,V),ve.viewport(H),ve.scissor(z),ve.setScissorTest(j),B){const ue=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,ue.__webglTexture,G)}else if(le){const ue=F;for(let ge=0;ge<S.textures.length;ge++){const ye=x.get(S.textures[ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ge,ye.__webglTexture,G,ue)}}else if(S!==null&&G!==0){const ue=x.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(S,F,G,V,B,le,fe,ue=0){if(!(S&&S.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){ve.bindFramebuffer(P.FRAMEBUFFER,ge);try{const ye=S.textures[ue],Ae=ye.format,Ee=ye.type;if(!st.textureFormatReadable(Ae)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ee)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&G>=0&&G<=S.height-B&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(F,G,V,B,te.convert(Ae),te.convert(Ee),le))}finally{const ye=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(S,F,G,V,B,le,fe,ue=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge)if(F>=0&&F<=S.width-V&&G>=0&&G<=S.height-B){ve.bindFramebuffer(P.FRAMEBUFFER,ge);const ye=S.textures[ue],Ae=ye.format,Ee=ye.type;if(!st.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.bufferData(P.PIXEL_PACK_BUFFER,le.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ue),P.readPixels(F,G,V,B,te.convert(Ae),te.convert(Ee),0);const Qe=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(P.FRAMEBUFFER,Qe);const ut=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rh(P,ut,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,le),P.deleteBuffer(Be),P.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,G=0){const V=Math.pow(2,-G),B=Math.floor(S.image.width*V),le=Math.floor(S.image.height*V),fe=F!==null?F.x:0,ue=F!==null?F.y:0;U.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,fe,ue,B,le),ve.unbindTexture()};const bu=P.createFramebuffer(),Tu=P.createFramebuffer();this.copyTextureToTexture=function(S,F,G=null,V=null,B=0,le=null){le===null&&(B!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=B,B=0):le=0);let fe,ue,ge,ye,Ae,Ee,Be,Qe,ut;const ht=S.isCompressedTexture?S.mipmaps[le]:S.image;if(G!==null)fe=G.max.x-G.min.x,ue=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,ye=G.min.x,Ae=G.min.y,Ee=G.isBox3?G.min.z:0;else{const tn=Math.pow(2,-B);fe=Math.floor(ht.width*tn),ue=Math.floor(ht.height*tn),S.isDataArrayTexture?ge=ht.depth:S.isData3DTexture?ge=Math.floor(ht.depth*tn):ge=1,ye=0,Ae=0,Ee=0}V!==null?(Be=V.x,Qe=V.y,ut=V.z):(Be=0,Qe=0,ut=0);const it=te.convert(F.format),be=te.convert(F.type);let $e;F.isData3DTexture?(U.setTexture3D(F,0),$e=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),$e=P.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),$e=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);const qe=P.getParameter(P.UNPACK_ROW_LENGTH),jt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),vi=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),ns=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee);const at=S.isDataArrayTexture||S.isData3DTexture,Gt=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){const tn=x.get(S),Ft=x.get(F),Wt=x.get(tn.__renderTarget),Br=x.get(Ft.__renderTarget);ve.bindFramebuffer(P.READ_FRAMEBUFFER,Wt.__webglFramebuffer),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let ii=0;ii<ge;ii++)at&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(S).__webglTexture,B,Ee+ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(F).__webglTexture,le,ut+ii)),P.blitFramebuffer(ye,Ae,fe,ue,Be,Qe,fe,ue,P.DEPTH_BUFFER_BIT,P.NEAREST);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||S.isRenderTargetTexture||x.has(S)){const tn=x.get(S),Ft=x.get(F);ve.bindFramebuffer(P.READ_FRAMEBUFFER,bu),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,Tu);for(let Wt=0;Wt<ge;Wt++)at?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,tn.__webglTexture,B,Ee+Wt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,tn.__webglTexture,B),Gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,le,ut+Wt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,le),B!==0?P.blitFramebuffer(ye,Ae,fe,ue,Be,Qe,fe,ue,P.COLOR_BUFFER_BIT,P.NEAREST):Gt?P.copyTexSubImage3D($e,le,Be,Qe,ut+Wt,ye,Ae,fe,ue):P.copyTexSubImage2D($e,le,Be,Qe,ye,Ae,fe,ue);ve.bindFramebuffer(P.READ_FRAMEBUFFER,null),ve.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Gt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D($e,le,Be,Qe,ut,fe,ue,ge,it,be,ht.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D($e,le,Be,Qe,ut,fe,ue,ge,it,ht.data):P.texSubImage3D($e,le,Be,Qe,ut,fe,ue,ge,it,be,ht):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,le,Be,Qe,fe,ue,it,be,ht.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,le,Be,Qe,ht.width,ht.height,it,ht.data):P.texSubImage2D(P.TEXTURE_2D,le,Be,Qe,fe,ue,it,be,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,qe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ns),le===0&&F.generateMipmaps&&P.generateMipmap($e),ve.unbindTexture()},this.initRenderTarget=function(S){x.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){C=0,N=0,O=null,ve.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const rc={type:"change"},Wo={type:"start"},iu={type:"end"},ir=new Rs,ac=new Un,pg=Math.cos(70*vt.DEG2RAD),Et=new D,Xt=2*Math.PI,et={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sa=1e-6;class mg extends gd{constructor(e,t=null){super(e,t),this.state=et.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:Oi.ROTATE,TWO:Oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new mi,this._lastTargetPosition=new D,this._quat=new mi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ul,this._sphericalDelta=new Ul,this._scale=1,this._panOffset=new D,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new D,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_g.bind(this),this._onPointerDown=gg.bind(this),this._onPointerUp=xg.bind(this),this._onContextMenu=Tg.bind(this),this._onMouseWheel=Sg.bind(this),this._onKeyDown=yg.bind(this),this._onTouchStart=Eg.bind(this),this._onTouchMove=bg.bind(this),this._onMouseDown=vg.bind(this),this._onMouseMove=Mg.bind(this),this._interceptControlDown=Ag.bind(this),this._interceptControlUp=wg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rc),this.update(),this.state=et.NONE}update(e=null){const t=this.object.position;Et.copy(t).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===et.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),s<-Math.PI?s+=Xt:s>Math.PI&&(s-=Xt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),t.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Et.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ir.origin.copy(this.object.position),ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ir.direction))<pg?this.object.lookAt(this.target):(ac.setFromNormalAndCoplanarPoint(this.object.up,this.target),ir.intersectPlane(ac,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sa||this._lastTargetPosition.distanceToSquared(this.target)>Sa?(this.dispatchEvent(rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Et.setFromMatrixColumn(t,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,t){this.screenSpacePanning===!0?Et.setFromMatrixColumn(t,1):(Et.setFromMatrixColumn(t,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Et.copy(s).sub(this.target);let r=Et.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function gg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function _g(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function xg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iu),this.state=et.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function vg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=et.DOLLY;break;case fn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}break;case fn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=et.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=et.PAN}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wo)}function Mg(i){switch(this.state){case et.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case et.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case et.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Sg(i){this.enabled===!1||this.enableZoom===!1||this.state!==et.NONE||(i.preventDefault(),this.dispatchEvent(Wo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(iu))}function yg(i){this.enabled!==!1&&this._handleKeyDown(i)}function Eg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Oi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=et.TOUCH_ROTATE;break;case Oi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=et.TOUCH_PAN;break;default:this.state=et.NONE}break;case 2:switch(this.touches.TWO){case Oi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=et.TOUCH_DOLLY_PAN;break;case Oi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=et.TOUCH_DOLLY_ROTATE;break;default:this.state=et.NONE}break;default:this.state=et.NONE}this.state!==et.NONE&&this.dispatchEvent(Wo)}function bg(i){switch(this._trackPointer(i),this.state){case et.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case et.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case et.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case et.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=et.NONE}}function Tg(i){this.enabled!==!1&&i.preventDefault()}function Ag(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const su=[{name:"Sun",nameCH:"太陽",type:"star",radius:5,realScaleRadius:40,color:16776960,texture:"sun.jpg",distance:0,realScaleDistance:0,speed:0,description:"太陽系的中心恆星，佔據了太陽系 99.8% 的質量。它是一顆黃矮星，透過核融合產生巨大的能量，支持地球上的生命。",details:{質量:"1.989 × 10³⁰ kg",體積:"1.412 × 10¹⁸ km³",直徑:"1,392,700 km",光度:"3.828 × 10²⁶ W",核心溫度:"15,000,000 °C",表面溫度:"5,500 °C",光譜類型:"G2V"},obliquity:7.25},{name:"Mercury",nameCH:"水星",type:"planet",radius:.5,realScaleRadius:.38,color:11184810,texture:"mercury.jpg",distance:15,realScaleDistance:60,speed:.02,inclination:7,obliquity:.03,description:"最靠近太陽的行星。它沒有大氣層來調節溫度，導致晝夜溫差極大。其表面佈滿了數十億年來遭受撞擊留下的隕石坑。",details:{質量:"3.301 × 10²³ kg",體積:"6.083 × 10¹⁰ km³",直徑:"4,879 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 427°C"}},{name:"Venus",nameCH:"金星",type:"planet",radius:.9,realScaleRadius:.95,color:16763904,texture:"venus_surface.jpg",distance:25,realScaleDistance:90,speed:.015,inclination:3.39,obliquity:177.36,description:"被稱為地球的姊妹星，但極端惡劣。它擁有濃厚二氧化碳大氣層產生的劇烈溫室效應，使其成為太陽系中最熱的行星。",details:{質量:"4.867 × 10²⁴ kg",體積:"9.284 × 10¹¹ km³",直徑:"12,104 km",光度:"N/A",核心溫度:"N/A",表面溫度:"462 °C"}},{name:"Earth",nameCH:"地球",type:"planet",radius:1,realScaleRadius:1,color:2241535,texture:"earth.jpg",distance:40,realScaleDistance:130,speed:.01,inclination:0,obliquity:23.44,description:"人類唯一的家園，是目前唯一已知存在生命的天體。地表約 71% 被海洋覆蓋。",details:{質量:"5.972 × 10²⁴ kg",體積:"1.083 × 10¹² km³",直徑:"12,742 km",光度:"N/A",核心溫度:"6,000 °C",表面溫度:"-88°C 到 58°C"},satellites:[{name:"ISS",nameCH:"國際太空站",type:"space_station",radius:.0125,realScaleRadius:.00125,color:13421772,distance:1.25,realScaleDistance:1.06,speed:.15,inclination:51.6,description:"目前在軌運行的最大的空間站，由多國航天機構共同建造並運行。它是人類在太空進行長期科研的重要平台。",details:{質量:"450,000 kg",長度:"109 m",寬度:"73 m",乘員:"通常 7 人",發射時間:"1998年 (首模塊)",軌道高度:"約 408 km"}},{name:"CSS",nameCH:"天宮空間站",type:"space_station",radius:.01,realScaleRadius:.001,color:16777215,distance:1.4,realScaleDistance:1.06,speed:.12,inclination:41.5,description:"中國自主研發並建造的空間站，由天和核心艙、問天實驗艙、夢天實驗艙組成。它是中國載人航天工程的重要成果。",details:{質量:"約 100,000 kg",構成:"三艙 L 型",乘員:"通常 3 人",發射時間:"2021年 (核心艙)",軌道高度:"約 390 km"}},{name:"Moon",nameCH:"月球",type:"satellite",radius:.27,realScaleRadius:.27,color:8947848,texture:"moon.jpg",distance:2.2,realScaleDistance:3,speed:.05,inclination:5.14,obliquity:6.68,orbitRelativeToEquator:!1,description:"地球唯一的天然衛星。它對地球的潮汐和自轉穩定起著關鍵作用，是人類唯一親自登陸過的地外天體。",details:{質量:"7.342 × 10²² kg",體積:"2.195 × 10¹⁰ km³",直徑:"3,474 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 127°C"}}]},{name:"Apophis",nameCH:"毀神星",type:"asteroid",radius:.15,realScaleRadius:.005,isIrregular:!0,geometryScale:[2.5,1.2,1.2],color:6710886,texture:"apophis.jpg",distance:36,realScaleDistance:120,speed:.012,inclination:3.3,obliquity:0,description:"一顆近地小行星，曾因極高的撞擊風險評估而聞名。它於 2029 年將在極近距離內掠過地球，提供絕佳的科學觀測機會。",details:{質量:"6.1 × 10¹⁰ kg",直徑:"370 m",表面溫度:"N/A"}},{name:"1221 Amor",nameCH:"阿莫爾",type:"asteroid",radius:.1,realScaleRadius:.002,isIrregular:!0,geometryScale:[1.8,1.2,1.2],color:13808780,texture:"amor.jpg",distance:48,realScaleDistance:220,speed:.01,inclination:11.9,obliquity:0,description:"阿莫爾型小行星的代表天體，其軌道會跨越火星軌道並接近地球，但通常不會與地球軌道相交。",details:{直徑:"1.0 km",光譜類型:"S-type"}},{name:"Mars",nameCH:"火星",type:"planet",radius:.53,realScaleRadius:.53,color:16724736,texture:"mars.jpg",distance:55,realScaleDistance:180,speed:.008,inclination:1.85,obliquity:25.19,description:"被稱為紅色星球，其顏色源於表面的氧化鐵。它擁有太陽系最高大的山脈（奧林帕斯山）和巨大的峽谷系統。",details:{質量:"6.39 × 10²³ kg",體積:"1.631 × 10¹¹ km³",直徑:"6,779 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-125°C 到 20°C"},satellites:[{name:"Phobos",nameCH:"火衛一 (福波斯)",radius:.15,realScaleRadius:.08,color:8947848,texture:"phobos.png",distance:2,realScaleDistance:2.5,speed:.08,inclination:1.09,description:"火星最大的衛星，外型不規則且佈滿隕石坑。它離火星非常近，正緩慢地向火星靠近，預計在數千萬年後將會撞向火星或解體。",details:{質量:"1.066 × 10¹⁶ kg",直徑:"22.2 km",表面溫度:"-112 °C 到 -4 °C"}},{name:"Deimos",nameCH:"火衛二 (戴摩斯)",radius:.12,realScaleRadius:.05,color:10066329,texture:"deimos.png",distance:3.5,realScaleDistance:6,speed:.045,inclination:.93,description:"火星較小且較遠的衛星，表面覆蓋著厚厚的塵埃層，使其看起來比火衛一更平滑。",details:{質量:"1.476 × 10¹⁵ kg",直徑:"12.4 km",表面溫度:"-112 °C 到 -4 °C"}}]},{name:"433 Eros",nameCH:"愛神星",type:"asteroid",radius:.28,realScaleRadius:.01,isIrregular:!0,geometryScale:[3.2,1.1,1.1],color:12756621,texture:"eros.jpg",distance:68,realScaleDistance:190,speed:.009,inclination:10.8,obliquity:0,description:"人類首顆近距離探測並登陸的小行星（由會合-舒梅克號完成）。它是一顆 S-型小行星，具有獨特的長條橢圓外型。",details:{質量:"6.68 × 10¹⁵ kg",直徑:"16.8 km",表面溫度:"-150 °C 到 100 °C"}},{name:"887 Alinda",nameCH:"艾琳達",type:"asteroid",radius:.12,realScaleRadius:.008,isIrregular:!0,geometryScale:[1.2,1.1,1.05],color:10128499,texture:"alinda.jpg",distance:72,realScaleDistance:280,speed:.007,inclination:9.3,obliquity:0,description:"一顆極具代表性的近地小行星，與木星具有 1:3 的平均運動共振，這也是艾琳達家族小行星的命名來源。",details:{直徑:"4.2 km",光譜類型:"S-type"}},{name:"4 Vesta",nameCH:"灶神星",type:"asteroid",radius:.32,realScaleRadius:.05,isIrregular:!0,geometryScale:[1.15,.95,1.15],color:12632256,texture:"vesta.jpg",distance:77,realScaleDistance:275,speed:.0068,inclination:7.1,obliquity:27,description:"小行星帶中質量第二大的天體，被譽為「原行星」，擁有類似地球的分層結構和巨大的撞擊坑（雷亞希爾維亞坑）。",details:{質量:"2.59 × 10²⁰ kg",直徑:"525.4 km",表面溫度:"-190 °C 到 -60 °C"}},{name:"Ceres",nameCH:"穀神星",type:"dwarf_planet",radius:.4,realScaleRadius:.075,color:10066329,texture:"ceres.jpg",distance:88,realScaleDistance:315,speed:.006,inclination:10.6,obliquity:4,description:"位於小行星帶中最大的天體，也是太陽系內側唯一的一顆矮行星。它主要由冰和岩石組成，表面可能存在含鹽的水冰。",details:{質量:"8.96 × 10²⁰ kg",體積:"4.21 × 10⁸ km³",直徑:"950 km",表面溫度:"-106 °C"}},{name:"Pallas",nameCH:"智神星",type:"asteroid",radius:.25,realScaleRadius:.04,color:10066329,texture:"pallas.jpg",distance:93,realScaleDistance:310,speed:.0055,inclination:34.8,obliquity:0,description:"小行星帶中第二大的天體，僅次於穀神星。它以極大傾角的軌道運行，表面成分與含碳球粒隕石相似。",details:{質量:"2.04 × 10²⁰ kg",直徑:"512 km",表面溫度:"-100 °C"}},{name:"10 Hygeia",nameCH:"健神星",type:"dwarf_planet",radius:.22,realScaleRadius:.035,isIrregular:!1,geometryScale:[1.05,1,1.02],color:4473924,texture:"hygeia.jpg",distance:98,realScaleDistance:330,speed:.0052,inclination:3.8,obliquity:0,description:"小行星帶中第四大的天體。儘管位於小行星帶，但其極其接近球形的外觀使其成為矮行星的候選者。其表面非常黑暗，屬於 C-型小行星。",details:{質量:"8.67 × 10¹⁸ kg",直徑:"434 km",表面溫度:"-110 °C"}},{name:"Juno",nameCH:"婚神星",type:"asteroid",radius:.22,realScaleRadius:.02,color:8947848,texture:"juno.jpg",distance:82,realScaleDistance:290,speed:.0065,inclination:12.9,obliquity:0,description:"小行星帶中的主要天體之一，也是首批被發現的四顆小行星中體積最小的一顆。其表面可能含有豐富的橄欖石。",details:{質量:"2.7 × 10¹⁹ kg",直徑:"233 km",表面溫度:"-110 °C"}},{name:"16 Psyche",nameCH:"靈神星",type:"asteroid",radius:.22,realScaleRadius:.04,isIrregular:!1,geometryScale:[1.45,1.25,1],color:5592405,texture:"psyche.jpg",distance:104,realScaleDistance:340,speed:.005,inclination:3.1,obliquity:0,description:"太陽系中最重金屬的小行星之一，被認為是早期行星暴露在外的鎳鐵核心。它接近規則的橢球體，表面呈現獨特的金屬光澤。",details:{質量:"2.29 × 10¹⁹ kg",直徑:"220 km",成分:"鐵、鎳 (M-type)"}},{name:"Jupiter",nameCH:"木星",type:"planet",radius:3,realScaleRadius:11,color:14462614,texture:"jupiter_natural.png",distance:120,realScaleDistance:450,speed:.005,inclination:1.3,obliquity:3.13,description:"太陽系最大的行星，體積可容納 1,300 個地球。它是一個巨大的氣態巨行星，最著名的特徵是持續了數百年的大紅斑風暴。",details:{質量:"1.898 × 10²⁷ kg",體積:"1.431 × 10¹⁵ km³",直徑:"139,820 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-110 °C"},satellites:[{name:"Io",nameCH:"木衛一 (伊娥)",radius:.28,realScaleRadius:.285,color:16773120,texture:"io_fixed.jpg",distance:5,realScaleDistance:13,speed:.04,inclination:.05,description:"太陽系中最活躍的火山天體。",details:{質量:"8.932 × 10²² kg",體積:"2.531 × 10¹⁰ km³",直徑:"3,643 km",表面溫度:"-143 °C"}},{name:"Europa",nameCH:"木衛二 (歐羅巴)",radius:.24,realScaleRadius:.245,color:14737632,texture:"europa.png",distance:6,realScaleDistance:21,speed:.03,inclination:.47,description:"表面被冰層覆蓋，下方可能隱藏著液態海洋。",details:{質量:"4.80 × 10²² kg",體積:"1.593 × 10¹⁰ km³",直徑:"3,122 km",表面溫度:"-160 °C"}},{name:"Ganymede",nameCH:"木衛三 (蓋尼米德)",radius:.41,realScaleRadius:.413,color:10526880,texture:"ganymede.png",distance:7.5,realScaleDistance:33,speed:.02,inclination:.2,description:"太陽系中最大的衛星，甚至比水星還要大。",details:{質量:"1.482 × 10²³ kg",體積:"7.66 × 10¹⁰ km³",直徑:"5,268 km",表面溫度:"-163 °C"}},{name:"Callisto",nameCH:"木衛四 (卡利斯托)",radius:.38,realScaleRadius:.378,color:6316128,texture:"callisto.png",distance:9,realScaleDistance:50,speed:.012,inclination:.2,description:"太陽系中隕石坑最密集的天體之一。",details:{質量:"1.076 × 10²³ kg",體積:"5.88 × 10¹⁰ km³",直徑:"4,821 km",表面溫度:"-139 °C"}}]},{name:"Saturn",nameCH:"土星",type:"planet",radius:2.5,realScaleRadius:9.5,color:16044095,texture:"saturn_ai.png",distance:170,realScaleDistance:800,speed:.004,inclination:2.48,obliquity:26.73,ring:{innerRadius:3,outerRadius:5,realInner:11,realOuter:18},description:"以其壯麗的環系統聞名，這些環主要由冰晶與塵埃組成。它是太陽系中密度最低的行星，如果把它放在水中，它會浮起來。",details:{質量:"5.683 × 10²⁶ kg",體積:"8.271 × 10¹⁴ km³",直徑:"116,460 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-140 °C"},satellites:[{name:"Mimas",nameCH:"土衛一 (米瑪斯)",radius:.15,realScaleRadius:.156,color:10066329,texture:"mimas.png",distance:6,realScaleDistance:25,speed:.045,inclination:1.5,description:"以其巨大的赫歇爾撞擊坑聞名，使其外觀極其神似星際大戰中的「死星」。",details:{質量:"3.75 × 10¹⁹ kg",直徑:"396 km",表面溫度:"-209 °C"}},{name:"Enceladus",nameCH:"土衛二 (恩克拉多斯)",radius:.18,realScaleRadius:.198,color:16777215,texture:"enceladus.png",distance:7.5,realScaleDistance:35,speed:.035,inclination:0,description:"太陽系中最亮的天體之一，表面覆蓋著潔淨的冰層。其南極地區噴發出的水冰間歇泉證明了地下海洋的存在。",details:{質量:"1.08 × 10²⁰ kg",直徑:"504 km",表面溫度:"-201 °C"}},{name:"Tethys",nameCH:"土衛三 (特提斯)",radius:.22,realScaleRadius:.41,color:13421772,texture:"tethys.png",distance:9,realScaleDistance:45,speed:.028,inclination:1.1,description:"一個冰冷的衛星，表面有巨大的奧德修斯撞擊坑以及貫穿半個星球的伊薩卡峽谷。",details:{質量:"6.17 × 10²⁰ kg",直徑:"1,062 km",表面溫度:"-187 °C"}},{name:"Dione",nameCH:"土衛四 (狄俄涅)",radius:.24,realScaleRadius:.44,color:11184810,texture:"dione.png",distance:10.5,realScaleDistance:55,speed:.022,inclination:0,description:"表面佈滿隕石坑，其後隨半球擁有明亮的絲狀冰崖特徵。",details:{質量:"1.10 × 10²¹ kg",直徑:"1,122 km",表面溫度:"-186 °C"}},{name:"Rhea",nameCH:"土衛五 (瑞亞)",radius:.32,realScaleRadius:.6,color:14540253,texture:"rhea.png",distance:12.5,realScaleDistance:70,speed:.018,inclination:.3,description:"土星第二大的衛星，表面佈滿了古老的隕石坑，是一個典型的冰凍天體。",details:{質量:"2.31 × 10²¹ kg",直徑:"1,528 km",表面溫度:"-174 °C"}},{name:"Titan",nameCH:"土衛六 (泰坦)",radius:.65,realScaleRadius:2,color:16753920,texture:"titan.png",distance:16,realScaleDistance:100,speed:.012,inclination:.3,description:"太陽系唯一擁有濃厚大氣層的衛星。其表面存在液態甲烷湖泊，是除了地球以外唯一已知表面有液態河流、湖泊的天體。",details:{質量:"1.345 × 10²³ kg",直徑:"5,150 km",表面溫度:"-179 °C"}},{name:"Hyperion",nameCH:"土衛七 (海柏利昂)",radius:.12,realScaleRadius:.1,color:9127187,texture:"hyperion.png",distance:18.5,realScaleDistance:130,speed:.01,inclination:.5,description:"外觀極其獨特的衛星，表面佈滿了深邃且邊緣銳利的隕石坑，使其看起來像是一塊巨大的「海綿」。",details:{質量:"5.6 × 10¹⁸ kg",直徑:"270 km",表面溫度:"-180 °C"}},{name:"Iapetus",nameCH:"土衛八 (伊阿珀托斯)",radius:.28,realScaleRadius:.57,color:16777215,texture:"iapetus.png",distance:22,realScaleDistance:180,speed:.008,inclination:7.5,description:"著名的「陰陽衛星」，擁有黑白分明的雙色半球。它還有一條沿著赤道環繞的神祕山脈（赤道脊）。",details:{質量:"1.8 × 10²¹ kg",直徑:"1,469 km",表面溫度:"-143 °C 到 -173 °C"}},{name:"Phoebe",nameCH:"土衛九 (福柏)",radius:.1,realScaleRadius:.08,color:3355443,texture:"phoebe.png",distance:26,realScaleDistance:250,speed:.005,inclination:175,description:"一顆極其黑暗的大型衛星，被認為是來自柯伊伯帶的捕獲天體。它以逆行軌道繞土星運行。",details:{質量:"8.29 × 10¹⁸ kg",直徑:"213 km",表面溫度:"-198 °C"}}]},{name:"Uranus",nameCH:"天王星",type:"planet",radius:1.5,realScaleRadius:4,color:7587510,texture:"uranus.jpg",distance:230,realScaleDistance:1500,speed:.003,inclination:.77,obliquity:97.77,description:"一顆冰巨行星，大氣中含有甲烷使其呈現青藍色。它的自轉軸極度傾斜（約 98 度），看起來像是「躺著」繞太陽公轉。",details:{質量:"8.681 × 10²⁵ kg",體積:"6.833 × 10¹³ km³",直徑:"50,724 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-195 °C"},satellites:[{name:"Ariel",nameCH:"天衛一 (艾瑞爾)",radius:.22,realScaleRadius:.091,color:13421772,texture:"ariel.png",distance:5,realScaleDistance:14,speed:.025,inclination:.26,description:"天王星最亮的衛星，表面佈滿了巨大的峽谷和山脊，顯示出過去劇烈的地質活動。",details:{質量:"1.27 × 10²¹ kg",直徑:"1,158 km",表面溫度:"-189 °C"}},{name:"Umbriel",nameCH:"天衛二 (昂布里厄爾)",radius:.22,realScaleRadius:.092,color:6710886,texture:"umbriel.png",distance:7.5,realScaleDistance:20,speed:.015,inclination:.13,description:"天王星最黑暗、隕石坑最密集的衛星。它最醒目的特徵是一個被稱為「旺達」的明亮環狀坑。",details:{質量:"1.29 × 10²¹ kg",直徑:"1,169 km",表面溫度:"-198 °C"}},{name:"Titania",nameCH:"天衛三 (泰坦妮亞)",radius:.32,realScaleRadius:.124,color:14540253,texture:"titania.png",distance:10.5,realScaleDistance:32,speed:.012,inclination:.34,description:"天王星最大的衛星，表面佈滿了巨大的斷層崖與峽谷，顯示其內部曾發生過嚴酷的地質膨脹。",details:{質量:"3.49 × 10²¹ kg",直徑:"1,578 km",表面溫度:"-203 °C"}},{name:"Oberon",nameCH:"天衛四 (奧伯隆)",radius:.3,realScaleRadius:.12,color:12303291,texture:"oberon.png",distance:13.5,realScaleDistance:42,speed:.008,inclination:.1,description:"天王星最外層的主大衛星，表面極其古老且佈滿隕石坑，其大型撞擊坑底部常覆蓋著神祕的深色物質。",details:{質量:"3.01 × 10²¹ kg",直徑:"1,323 km",表面溫度:"-198 °C"}},{name:"Miranda",nameCH:"天衛五 (米蘭達)",radius:.18,realScaleRadius:.037,color:15658734,texture:"miranda.png",distance:3.5,realScaleDistance:9,speed:.04,inclination:4.34,description:"太陽系中最神祕、地質最為破碎且多樣的衛星之一。它擁有巨大的電路板狀地形（日冕）以及深達 20 公里的垂直斷崖。",details:{質量:"6.59 × 10¹⁹ kg",直徑:"471 km",表面溫度:"-187 °C 到 -213 °C"}}]},{name:"Neptune",nameCH:"海王星",type:"planet",radius:1.5,realScaleRadius:3.9,color:3049153,texture:"neptune_ai_v3.png",distance:300,realScaleDistance:2500,speed:.002,inclination:1.77,obliquity:28.32,description:"離太陽最遠的行星，風速高達每小時 2,100 公里，是太陽系中風速最高的天體。它呈現深藍色，同樣也是一顆冰巨行星。",details:{質量:"1.024 × 10²⁶ kg",體積:"6.254 × 10¹³ km³",直徑:"49,244 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-201 °C"},satellites:[{name:"Triton",nameCH:"海衛一 (崔頓)",radius:.45,realScaleRadius:.21,color:16770273,texture:"triton.png",distance:5,realScaleDistance:13,speed:.015,inclination:157,description:"海王星最大的衛星，也是太陽系中唯一逆行繞行行星的大衛星。表面有著名的「哈密瓜皮」地形，並噴發著氮氣間歇泉。",details:{質量:"2.14 × 10²² kg",直徑:"2,706 km",表面溫度:"-235 °C"}},{name:"Proteus",nameCH:"海衛八 (普羅透斯)",radius:.18,realScaleRadius:.033,color:3355443,texture:"proteus.png",distance:2.5,realScaleDistance:6,speed:.035,inclination:.55,description:"海王星第二大的衛星，也是太陽系中已知不規則形狀衛星中最大的一個。表面極其黑暗且佈滿密集的隕石坑。",details:{質量:"4.4 × 10¹⁹ kg",直徑:"418 km",表面溫度:"-222 °C"}}]},{name:"Pluto",nameCH:"冥王星",type:"dwarf_planet",radius:.7,realScaleRadius:.186,color:15386274,texture:"pluto.jpg",distance:380,realScaleDistance:3800,speed:.0015,inclination:17.16,obliquity:122.5,description:"太陽系中最著名的矮行星，曾被視為第九大行星。它與其衛星凱倫構成了一個雙星系統，其表面最顯眼的特徵是巨大的氮冰之心（湯博區）。",details:{質量:"1.303 × 10²² kg",體積:"7.057 × 10⁹ km³",直徑:"2,376 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-229 °C"},satellites:[{name:"Charon",nameCH:"冥衛一 (凱倫)",radius:.35,realScaleRadius:.095,color:10066329,texture:"charon.jpg",distance:4,realScaleDistance:10,speed:.02,inclination:0,description:"冥王星最大的衛星，直徑超過冥王星的一半。兩者互相潮汐鎖定，始終以同一面朝向彼此。",details:{質量:"1.586 × 10²¹ kg",直徑:"1,212 km",表面溫度:"-220 °C"}}]},{name:"Haumea",nameCH:"妊神星",type:"dwarf_planet",radius:.55,realScaleRadius:.136,geometryScale:[1,.75,.5],color:15658734,texture:"haumea.jpg",distance:460,realScaleDistance:4310,speed:.0013,inclination:28.2,obliquity:126,description:"柯伊伯帶中形狀最奇特的矮行星，其形狀像一顆橄欖球（長橢球體）。這是因為它自轉極快（僅需不到四小時），其表面覆蓋著結晶水冰。",details:{質量:"4 × 10²¹ kg",直徑:"~1,600 km (橢球形平均)",表面溫度:"-223 °C"}},{name:"Makemake",nameCH:"鳥神星",type:"dwarf_planet",radius:.5,realScaleRadius:.112,color:13467442,texture:"makemake.jpg",distance:600,realScaleDistance:4550,speed:.0012,inclination:29,obliquity:0,description:"柯伊伯帶中較大、且表面顏色偏紅的矮行星。它是發現最晚、也是太陽系中最亮的幾個天體之一，表面覆蓋甲烷冰。",details:{質量:"3 × 10²¹ kg",直徑:"1,430 km",表面溫度:"-243 °C"}},{name:"Eris",nameCH:"鬩神星",type:"dwarf_planet",radius:.72,realScaleRadius:.183,color:16777215,texture:"eris.jpg",distance:720,realScaleDistance:6800,speed:.001,inclination:44.2,obliquity:78,description:"目前已知太陽系中最巨大的矮行星之一，位於離太陽極遠的散射盤。它的發現直接導致了冥王星被重新定義為矮行星。表面反照率極高，覆蓋著甲烷冰。",details:{質量:"1.66 × 10²² kg",直徑:"2,326 km",表面溫度:"-243 °C"}},{name:"Halley",nameCH:"哈雷彗星",type:"comet",isComet:!0,radius:.3,realScaleRadius:.008,color:8978380,texture:"asteroid.jpg",distance:280,realScaleDistance:2600,speed:.003,inclination:18,description:"哈雷彗星是目前已知最著名的週期性彗星。基於其逆行且高傾角的特殊軌道軌跡、長達數千年的活動史，以及沿途釋出的厚實碎屑雲帶，地球每年會兩度穿越這條由其留下的「塵埃河流」：5月時形成了寶瓶座η流星雨，而10月則迎來著名的獵戶座流星雨。",details:{週期:"約 76 年",核心大小:"約 15 × 8 km",最後回歸:"1986 年",下次預測:"2061 年"}},{name:"Swift-Tuttle",nameCH:"斯威夫特-塔特爾彗星 (109P)",type:"comet",isComet:!0,radius:.35,realScaleRadius:.013,color:11206604,texture:"asteroid.jpg",distance:350,realScaleDistance:5e3,speed:.002,inclination:113.5,description:"斯威夫特-塔特爾彗星是一顆極其龐大且具有潛在威脅的週期性彗星，其核心直徑達 26 公里。它是每年 8 月盛大的「英仙座流星雨」的高峰期來源。當地球穿過它在漫長軌跡上留下的塵埃帶時，這些顆粒進入大氣層即形成了壯麗的流星現象。",details:{週期:"約 133 年",核心直徑:"約 26 km",最後回歸:"1992 年",下次預測:"2126 年"}},{name:"Tempel-Tuttle",nameCH:"坦普爾-塔特爾彗星 (55P)",type:"comet",isComet:!0,radius:.28,realScaleRadius:.002,color:13434879,texture:"asteroid.jpg",distance:240,realScaleDistance:1500,speed:.004,inclination:162.5,description:"坦普爾-塔特爾彗星是一顆週期約 33 年的週期性彗星，它是著名的「獅子座流星雨」的母彗星。由於其軌道碎屑雲帶的密度分佈非常集中，當地球穿過其留下的密集塵埃帶時，獅子座流星雨偶爾會在 11 月爆發成每小時數千顆以上的「流星暴」，是天文史上最具威力的流星現象之一。",details:{週期:"約 33 年",核心直徑:"約 3.6 km",最後回歸:"1998 年",下次預測:"2031 年"}},{name:"Hale-Bopp",nameCH:"海爾-博普彗星 (C/1995 O1)",type:"comet",isComet:!0,radius:.6,realScaleRadius:.04,color:16777215,texture:"asteroid.jpg",speed:1e-4,isClosed:!0,pathPoints:[[0,10,0],[15,-20,10],[100,-500,30],[180,-1800,40],[100,-3200,30],[0,-3700,0],[-100,-3200,-30],[-180,-1800,-40],[-100,-500,-30],[-15,-20,-10]],description:"20 世紀最壯觀的彗星之一，擁有巨大的彗核（直徑約 60 公里）。它以極高的軌道傾角與極長的週期（約 2,500 年）著稱。其標誌性的雙彗尾（藍色的離子尾與白色的塵埃尾）在 1997 年回歸時在北半球肉眼清晰可見長達 18 個月。",details:{週期:"約 2,533 年",核心直徑:"約 60 km",近日點:"0.914 AU",遠日點:"約 370 AU",軌道傾角:"89.4° (近垂直)"}},{name:"3200 Phaethon",nameCH:"法厄同 (3200 Phaethon)",type:"asteroid",radius:.25,realScaleRadius:.003,color:10066329,texture:"asteroid.jpg",distance:140,realScaleDistance:130,speed:.012,inclination:22.2,description:"3200 Phaethon 是一顆軌道極其特殊的阿波羅型小行星，具有「岩石彗星」的特徵。它是每年 12 月「雙子座流星雨」的母體，這在流星雨起源中相當罕見（大多數流星雨源自彗星）。它在近日點時會極度接近太陽，表面溫度高達 750°C，導致其岩石表面因熱脹冷縮碎裂，並釋放出構成流星雨的塵埃粒子。",details:{週期:"約 1.43 年",直徑:"約 5.1 km",分類:"阿波羅型小行星 / 岩石彗星",近日點:"0.14 AU (極接近太陽)"}},{name:"Gonggong",nameCH:"共工星",type:"dwarf_planet_candidate",radius:.5,realScaleRadius:.1,color:13386786,texture:"gonggong.jpg",distance:650,realScaleDistance:6700,speed:9e-4,inclination:30.7,obliquity:0,description:"柯伊伯帶中繞行太陽的大型天體，具有顯著的紅色表面。它是目前太陽系中已知最大的未命名天體之一（在正式命名前曾被稱為 2007 OR10）。",details:{質量:"~1.75 × 10²¹ kg",直徑:"1,230 km",表面溫度:"-244 °C"}},{name:"Quaoar",nameCH:"創神星",type:"dwarf_planet_candidate",radius:.45,realScaleRadius:.086,color:8930338,texture:"quaoar.jpg",distance:510,realScaleDistance:4370,speed:.0013,inclination:8,obliquity:0,description:"柯伊伯帶中的大型傳統天體，曾被描述為具有結晶水冰的表面。最近發現它擁有一圈位於羅里不規則極限外的行星環。",details:{質量:"1.4 × 10²¹ kg",直徑:"1,110 km",表面溫度:"-230 °C"}},{name:"Sedna",nameCH:"賽德娜",type:"dwarf_planet_candidate",radius:.42,realScaleRadius:.08,color:16729344,texture:"sedna.jpg",distance:850,realScaleDistance:8500,speed:5e-4,inclination:11.9,obliquity:0,description:"太陽系中最遙遠且最神祕的天體之一。它的軌道極端扁平，遠日點距離太陽約 937 AU。其驚人的紅色表面可能來自長期的宇宙射線照射。",details:{質量:"約 1.0 × 10²¹ kg",直徑:"約 1,000 km",表面溫度:"-240 °C"}},{name:"Orcus",nameCH:"亡神星",type:"dwarf_planet_candidate",radius:.4,realScaleRadius:.075,color:11184810,texture:"orcus.jpg",distance:420,realScaleDistance:3940,speed:.0016,inclination:20.5,obliquity:0,description:"有時被稱為「反冥王星」，因為它的軌道與冥王星非常相似，但相位相反。它與冥王星一樣與海王星具有 2:3 的共振軌道。",details:{質量:"6.4 × 10²⁰ kg",直徑:"910 km",表面溫度:"-230 °C"}},{name:"Salacia",nameCH:"薩拉客亞",type:"dwarf_planet_candidate",radius:.38,realScaleRadius:.07,color:4469538,texture:"salacia.jpg",distance:480,realScaleDistance:4220,speed:.0014,inclination:23.9,obliquity:0,description:"大型柯伊伯帶天體，具有極低的反照率，表面極其黑暗。目前尚未觀察到其表面存在顯著的冰層覆蓋。",details:{質量:"4.5 × 10²⁰ kg",直徑:"850 km",表面溫度:"-230 °C"}},{name:"Varuna",nameCH:"伐樓拿",type:"asteroid",radius:.4,realScaleRadius:.07,geometryScale:[1.5,1,.6],color:13386786,texture:"varuna.jpg",distance:530,realScaleDistance:4300,speed:.0013,inclination:17.2,obliquity:0,description:"柯伊伯帶中大型的天體，也是首批被發現的偏遠天體之一。它以極快的自轉與長橢球體的造型著稱，表面覆蓋著豐富的水冰與托林。",details:{質量:"3.7 × 10²⁰ kg",直徑:"約 700 - 800 km",表面溫度:"-230 °C"}},{name:"Máni",nameCH:"瑪尼 (2002 MS4)",type:"dwarf_planet_candidate",radius:.35,realScaleRadius:.065,color:5592405,texture:"mani.jpg",distance:550,realScaleDistance:4170,speed:.0014,inclination:17.7,obliquity:0,description:"大型柯伊伯帶天體，也是目前已知未命名（近期正式獲名為 Máni）的天體中最大的一個。它的直徑約為 800 公里，表面極其黑暗，主要由水冰和乾冰組成。",details:{質量:"未知",直徑:"約 800 km",表面溫度:"-230 °C"}},{name:"Oumuamua",nameCH:"斥候星 (1I/ʻOumuamua)",type:"interstellar",radius:.3,realScaleRadius:.05,geometryScale:[2.5,.4,.4],color:8930372,texture:"oumuamua.jpg",distance:0,speed:.002,pathPoints:[[-1200,800,-1200],[-400,280,-400],[-50,40,-50],[10,5,0],[60,-10,80],[500,-150,700],[1500,-500,2e3]],description:"人類觀察到的首個太陽系外星際天體。它的形狀極端，呈現雪茄狀或盤狀，並在離開太陽系時表現出非引力加速度。",details:{質量:"未知",長度:"約 100-1,000 m",最高速度:"87.7 km/s"}},{name:"2I/Borisov",nameCH:"鮑里索夫彗星",type:"interstellar",isComet:!0,radius:.8,realScaleRadius:.6,color:8965375,texture:"borisov.jpg",distance:0,speed:15e-5,pathPoints:[[1500,1e3,500],[600,450,250],[100,80,50],[40,30,0],[100,-40,-200],[700,-300,-1e3],[1800,-800,-2500]],description:"史上發現的第二個星際天體，也是第一顆星際彗星。它來自太陽系外，攜帶著異星系的冰與塵。當它接近太陽時，展現出了與太陽系彗星相似的噴發特徵。",details:{發現時間:"2019年8月30日",發現者:"珍納迪·鮑里索夫",偏心率:"3.35 (極高雙曲線)",核心直徑:"約 0.5 - 1 km",主要成分:"富含一氧化碳與水冰",特性:"典型的星際訪客"}},{name:"ATLAS",nameCH:"3I/亞特拉斯 (C/2019 Y4)",type:"interstellar",radius:.35,realScaleRadius:.07,color:5605546,texture:"atlas.jpg",isComet:!0,distance:0,speed:.0018,pathPoints:[[-2e3,200,800],[-800,100,300],[-150,10,40],[-10,5,0],[100,30,-150],[900,300,-1500],[2500,800,-3500]],description:"一顆在接近太陽時碎裂的彗星，曾被預期將成為極亮的天體。它的軌道與 1844 年大彗星非常相似。",details:{質量:"未知",碎片數:"多個",近日點:"0.25 AU"}}];function Rg(i,e){const t=[],n=e?new Zi(e):new Zi;let s=!1;const r=new D,a=new D,c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768?2:1;su.forEach(u=>{const d=new Bn(1,128,128);if(u.isIrregular){const g=d.attributes.position,p=new D;for(let m=0;m<g.count;m++){p.fromBufferAttribute(g,m);const E=Math.sin(p.x*2.5+p.y*1.8)*.35+Math.cos(p.z*2.2+p.x*1.5)*.25+Math.sin(p.y*4+p.z*2.5)*.2,T=.7+Math.pow(p.x,2)*.8,y=Math.cos(p.x*1.4)*.3,b=Math.sin(p.x*1.6)*.25;p.y+=y,p.z+=b;const w=1+Math.sin(Math.atan2(p.y,p.z)*3)*.15;let R=0;const L=Math.sqrt(Math.pow(p.x+.6,2)+Math.pow(p.z-.5,2));L<.8&&(R=(1-Math.pow(L/.8,2))*.45),p.multiplyScalar(1+E*.7-R),p.y*=T*w,p.z*=T*(w*.9),g.setXYZ(m,p.x,p.y,p.z)}d.computeVertexNormals()}let f;if(u.name==="Sun"){const g=n.load(`textures/${u.texture}?v=25.5`);g.wrapS=Nn,g.wrapT=Nn,g.generateMipmaps=!1,g.minFilter=Mt,g.magFilter=Mt,f=new $n({map:g,transparent:!1})}else if(u.texture){const g=n.load(`textures/${u.texture}?v=27.4`);g.wrapS=Nn,g.wrapT=_n,g.colorSpace=qt,g.anisotropy=16,g.minFilter=Zn,g.generateMipmaps=!0,f=new Jt({map:g,emissive:u.isComet||u.type==="comet"?4491519:u.type==="star"?16777215:2236962,emissiveMap:u.type==="star"||u.isComet||u.type==="comet"?g:null,emissiveIntensity:u.isComet||u.type==="comet"?.8:u.type==="star"?1:.05,roughness:1,metalness:0})}else f=new Jt({color:u.color,emissive:u.type==="star"?u.color:0,emissiveIntensity:u.type==="star"?1:0});const h=new ze(d,f);h.userData=u,h.name=u.name,h.rotation.z=vt.degToRad(u.obliquity||0),u.geometryScale?h.scale.set(u.radius*u.geometryScale[0],u.radius*u.geometryScale[1],u.radius*u.geometryScale[2]):h.scale.setScalar(u.radius);const _={name:u.name,data:u,mesh:h,distance:u.distance,speed:u.speed,angle:Math.random()*Math.PI*2,rotationSpeed:u.rotationSpeed||.005,satellites:[],orbitLine:null,ringMesh:null,obliquity:vt.degToRad(u.obliquity||0),isSunShader:u.name==="Sun"};if(u.name!=="Sun"){let g,p=54015;u.type==="dwarf_planet"?p=16755200:u.type==="dwarf_planet_candidate"?p=13395711:u.type==="interstellar"?p=8978431:u.type==="comet"||u.isComet?p=16724787:u.type==="asteroid"&&(p=8716032);const m=new ys({color:p,transparent:!0,opacity:.35,blending:sn,linewidth:c});if(u.pathPoints){const E=u.pathPoints.map(R=>new D(R[0],R[1],R[2])),T=!!u.isClosed,y=new Cl(E,T);_.orbitCurve=y,_.progress=Math.random();const b=y.getPoints(T?1e3:400),w=new ot().setFromPoints(b);g=T?new cr(w,m):new qc(w,m)}else{const T=new Qs(0,0,u.distance,u.distance,0,2*Math.PI,!1,0).getPoints(256),y=new ot().setFromPoints(T);g=new cr(y,m),g.rotation.x=Math.PI/2+vt.degToRad(u.inclination||0)}i.add(g),_.orbitLine=g}if(u.ring){const g=new Ar(u.ring.innerRadius/u.radius,u.ring.outerRadius/u.radius,128),p=g.attributes.position,m=g.attributes.uv;for(let b=0;b<p.count;b++){const w=p.getX(b),R=p.getY(b),L=Math.sqrt(w*w+R*R),v=u.ring.innerRadius/u.radius,M=u.ring.outerRadius/u.radius,C=(L-v)/(M-v);m.setXY(b,.5,C)}const E=n.load("textures/saturn_ring_v3.png?v=23.4"),T=new Jt({map:E,side:Ht,transparent:!0,opacity:.85}),y=new ze(g,T);y.rotation.x=Math.PI/2,h.add(y),_.ringMesh=y}if(u.satellites&&u.satellites.forEach(g=>{let p;if(g.type==="space_station"){const M=new dn,C=new Jt({color:14540253,metalness:.5,roughness:.4}),N=new Jt({color:1981023,metalness:.8,roughness:.2,emissive:4386,emissiveIntensity:.2,side:Ht}),O=new Jt({color:16755200,metalness:.9,roughness:.1,emissive:4465152,emissiveIntensity:.2,side:Ht});if(g.name==="ISS"){const W=new ze(new Vt(10,.15,.15),C);M.add(W);const k=new dn,H=new ze(new un(.4,.4,1.8,12),C);H.rotation.z=Math.PI/2,k.add(H);const z=new ze(new un(.3,.3,1.2,12),C);z.position.set(0,.6,.1),k.add(z),M.add(k),[-4.6,-3.8,3.8,4.6].forEach(ne=>{const Te=new ze(new Vt(.04,4,1.3),O);Te.position.set(ne,2.2,0),M.add(Te);const Pe=new ze(new Vt(.04,4,1.3),O);Pe.position.set(ne,-2.2,0),M.add(Pe)});const ie=new Jt({color:16777215,metalness:.2,roughness:.8}),J=new ze(new Vt(.02,1.5,2),ie);J.position.set(-1,-.8,0),M.add(J)}else if(g.name==="CSS"){const W=new ze(new un(.5,.5,3.2,16),C);W.rotation.z=Math.PI/2,M.add(W);const k=new ze(new un(.45,.45,2.8,16),C);k.position.set(.6,1.4,0),M.add(k);const H=new ze(new un(.45,.45,2.8,16),C);H.position.set(.6,-1.4,0),M.add(H);const z=new Vt(.03,1.5,7),j=new ze(z,N);j.position.set(.6,3.2,0),M.add(j);const ie=new ze(z,N);ie.position.set(.6,-3.2,0),M.add(ie);const J=new ze(new Vt(.03,5,.8),N);J.position.set(-2,0,0),M.add(J)}p=M}else{const M=new Bn(1,64,64);let C;if(g.texture){const N=n.load(`textures/${g.texture}?v=25.1`);N.wrapS=Nn,N.wrapT=Nn,N.colorSpace=qt,N.anisotropy=8,C=new Jt({map:N,emissive:2236962,emissiveIntensity:.05})}else C=new Jt({color:g.color});p=new ze(M,C)}p.scale.setScalar(g.radius),p.userData=g,p.name=g.name,i.add(p);const E=new Qs(0,0,g.distance,g.distance,0,2*Math.PI,!1,0).getPoints(128),T=new ot().setFromPoints(E);let y;g.type==="space_station"?y=new rd({color:16777215,transparent:!0,opacity:.3,blending:sn,dashSize:.5,gapSize:.3,linewidth:c}):y=new ys({color:16777215,transparent:!0,opacity:.15,blending:sn,linewidth:c});const b=new cr(T,y);g.type==="space_station"&&b.computeLineDistances();const w={mesh:p,data:g,angle:Math.random()*Math.PI*2,orbitLine:b,distance:g.distance,orbitRelativeToEquator:g.orbitRelativeToEquator!==!1};_.satellites.push(w);const R=_.obliquity,L=vt.degToRad(g.inclination||0),v=w.orbitRelativeToEquator?R+L:L;b.rotation.x=Math.PI/2+v,i.add(b)}),u.isComet||u.type==="comet"){const g=new Bn(1.8,32,32),p=new $n({color:8978380,transparent:!0,opacity:.15,blending:sn,side:Nt}),m=new ze(g,p);h.add(m);const E=new Pr(1.2,25,32,1,!0);E.translate(0,12.5,0),E.rotateX(Math.PI/2);const T=new $n({color:6737151,transparent:!0,opacity:.2,blending:sn,side:Ht}),y=new ze(E,T);i.add(y),_.tailMesh=y}t.push(_),i.add(h)});let l=1;return{setSpeedMultiplier:u=>{l=u},setViewMode:u=>{s=u,t.forEach(d=>{const f=d.data,h=s?f.realScaleRadius:f.radius,_=s?f.realScaleDistance:f.distance;if(f.geometryScale?d.mesh.scale.set(h*f.geometryScale[0],h*f.geometryScale[1],h*f.geometryScale[2]):d.mesh.scale.setScalar(h),d.mesh.updateMatrix(),d.distance=_,d.orbitLine)if(f.pathPoints){const g=y=>s?y<=60?2.5:y<=160?2.5+(y-60)/100*2.3600000000000003:y<=200?4.86+(y-160)/40*2.2699999999999996:y<=300?7.13+(y-200)/100*1.2000000000000002:8.35:1,p=f.pathPoints.map(y=>{const b=new D(y[0],y[1],y[2]),w=b.length();return w<.001?b:b.multiplyScalar(g(w))}),E=new Cl(p,!!f.isClosed).getPoints(f.isClosed?1e3:800);d.orbitLine.geometry.dispose();const T=new ot().setFromPoints(E);d.orbitLine.geometry=T}else{const p=new Qs(0,0,_,_,0,2*Math.PI,!1,0).getPoints(256);d.orbitLine.geometry.dispose();const m=new ot().setFromPoints(p);d.orbitLine.geometry=m}if(d.ringMesh){const g=d.data.ring,p=s?g.realInner:g.innerRadius,m=s?g.realOuter:g.outerRadius;d.ringMesh.geometry.dispose(),d.ringMesh.geometry=new Ar(p/h,m/h,128);const E=d.ringMesh.geometry.attributes.position,T=d.ringMesh.geometry.attributes.uv,y=p/h,b=m/h;for(let w=0;w<E.count;w++){const R=Math.sqrt(E.getX(w)**2+E.getY(w)**2);T.setXY(w,.5,(R-y)/(b-y))}}d.satellites.forEach(g=>{const p=g.data,m=s&&p.realScaleRadius||p.radius,E=s&&p.realScaleDistance||p.distance;if(g.mesh.scale.setScalar(m),g.mesh.updateMatrix(),g.distance=E,g.orbitLine){const T=new Qs(0,0,E,E,0,2*Math.PI,!1,0);g.orbitLine.geometry.setFromPoints(T.getPoints(128)),p.type==="space_station"&&g.orbitLine.computeLineDistances()}})})},isRealScale:()=>s,setOrbitsVisibleByType:(u,d)=>{t.forEach(f=>{f.data.type===u&&f.orbitLine&&(f.orbitLine.visible=d)})},setSatOrbitsVisibleByType:(u,d)=>{t.forEach(f=>{f.satellites.forEach(h=>{(h.data.type||"satellite")===u&&h.orbitLine&&(h.orbitLine.visible=d)})})},getBodies:()=>t,update:u=>{const d=u*60;t.forEach(f=>{if(f.orbitCurve&&f.data.pathPoints)f.progress+=f.speed*l*d,f.progress>1&&(f.progress=0),f.orbitCurve.getPoint(f.progress,r),f.mesh.position.copy(r);else if(f.distance>0){f.angle+=f.speed*l*d;const h=vt.degToRad(f.data.inclination||0),_=Math.cos(f.angle)*f.distance,g=Math.sin(f.angle)*f.distance;f.mesh.position.set(_,g*-Math.sin(h),g*Math.cos(h))}if(f.isSunShader&&f.mesh.material.userData.sunShader&&(f.mesh.material.userData.sunShader.uniforms.uTime.value+=u*l),f.mesh.rotateY(f.rotationSpeed*l*d),f.satellites.forEach(h=>{const _=h.distance||h.data.distance,g=f.obliquity,p=vt.degToRad(h.data.inclination||0),m=h.orbitRelativeToEquator?g+p:p;h.angle+=h.data.speed*l*d;const E=Math.cos(h.angle)*_,T=Math.sin(h.angle)*_;h.mesh.position.set(f.mesh.position.x+E,f.mesh.position.y+T*-Math.sin(m),f.mesh.position.z+T*Math.cos(m)),h.mesh.rotateY(.01*l*d),h.orbitLine&&h.orbitLine.position.copy(f.mesh.position)}),f.tailMesh){f.tailMesh.position.copy(f.mesh.position),r.copy(f.mesh.position).normalize(),a.addVectors(f.mesh.position,r),f.tailMesh.lookAt(a);const h=f.mesh.position.length(),_=s?5e3:600;f.tailMesh.material.opacity=Math.max(.1,.6-h/_)}})}}}function Cg(i,e,t=2e3){const n=new dn,s=(u,d,f)=>{const h=new ot,_=[],g=[],p=new ke;for(let E=0;E<u;E++){const y=Math.random()*Math.PI*2,b=Math.acos(2*Math.random()-1),w=4e4*Math.sin(b)*Math.cos(y),R=4e4*Math.sin(b)*Math.sin(y),L=4e4*Math.cos(b);_.push(w,R,L);const M=.15+Math.pow(Math.random(),4)*.85;p.setHSL(0,0,M),g.push(p.r,p.g,p.b)}h.setAttribute("position",new mt(_,3)),h.setAttribute("color",new mt(g,3));const m=new gi({size:d,vertexColors:!0,transparent:!0,opacity:f,sizeAttenuation:!1});return new ji(h,m)};n.add(s(t,.5,.6));const a=(e?new Zi(e):new Zi).load("textures/starmap_8k.jpg?v=23.0",u=>{u.wrapS=Nn,u.minFilter=Mt,u.magFilter=Mt,u.anisotropy=16,u.generateMipmaps=!1}),o=new Bn(2e6,64,64),c=new $n({map:a,side:Nt,depthWrite:!1,transparent:!0,opacity:.25,color:8947848}),l=new ze(o,c);return l.rotation.x=vt.degToRad(-63),l.rotation.z=vt.degToRad(45),n.add(l),i.add(n),{starGroup:n,skySphere:l,update:u=>{n.position.copy(u)}}}function Pg(i){const e=new dn,t=new Jt({color:16777215,metalness:.3,roughness:.5}),n=new Jt({color:8947848,metalness:.6,roughness:.3}),s=new Jt({color:16755200,emissive:16733440,emissiveIntensity:2}),r=new $n({color:16746496,transparent:!0,opacity:.8}),a=new Pr(1,4,4),o=new ze(a,t);o.rotation.x=Math.PI/2,o.scale.set(1.5,1,.4),e.add(o);const c=new Vt(2.5,.1,1.5),l=new ze(c,t);l.position.set(0,0,-.5),e.add(l);const u=new Vt(.4,.3,1.2),d=new ze(u,n);d.position.set(0,.2,-.2),e.add(d);const f=new Vt(.1,.1,.1);for(let v=0;v<40;v++){const M=Math.random()>.5?1:-1,C=(Math.random()-.5)*3,N=(Math.random()*.8+.2)*M,O=(Math.random()-.5)*.15,W=Math.random()>.4,k=new ze(f,W?s:n);k.position.set(N,O,C),k.scale.set(Math.random()*.5+.5,Math.random()*.5+.5,Math.random()*2),e.add(k)}const h=new Vt(.8,.3,.5),_=new ze(h,n);_.position.set(0,0,-2),e.add(_);const g=new un(.15,.1,.3,8),p=[];[{x:-.25,y:0},{x:.25,y:0},{x:0,y:.1}].forEach(v=>{const M=new ze(g,n);M.rotation.x=Math.PI/2,M.position.set(v.x,v.y,-2.2),e.add(M);const C=new ze(new Bn(.2,8,8),r);C.position.set(v.x,v.y,-2.3),e.add(C),p.push(C)});const E=new un(.01,.01,1,8),T=new ze(E,n);T.rotation.x=Math.PI/2,T.position.set(0,0,2),e.add(T);const y=new Kc(16755200,15,50);y.position.set(0,2,0),e.add(y);const b=new ud(16777215,40,300,Math.PI/8,.5);b.position.set(0,0,2),b.target.position.set(0,0,10),e.add(b),e.add(b.target),e.scale.set(4,4,4),e.name="AdvancedExplorer",i.add(e);const w=new D,R=.08,L=.98;return{mesh:e,velocity:w,thrust:R,friction:L,update:()=>{e.position.add(w),w.multiplyScalar(L);const v=w.length();p.forEach(M=>{const C=.8+Math.random()*.4+v*4;M.scale.set(C,C,C),M.material.opacity=.6+Math.min(v*3,.4)})}}}function Dg(i){const t=new ot,n=new Float32Array(8e3*3),s=new Float32Array(8e3),r=[],a=72,o=105;for(let d=0;d<8e3;d++){const f=vt.lerp(a,o,Math.random()),h=Math.random()*Math.PI*2,_=(Math.random()-.5)*4;n[d*3]=Math.cos(h)*f,n[d*3+1]=_,n[d*3+2]=Math.sin(h)*f,s[d]=Math.random()*.15+.05;const g=.01/Math.sqrt(f)*(Math.random()*.5+.75);r.push({radius:f,angle:h,y:_,speed:g})}t.setAttribute("position",new St(n,3)),t.setAttribute("size",new St(s,1));const c=new gi({color:8947848,size:.1,transparent:!0,opacity:.8,sizeAttenuation:!0}),l=new ji(t,c);i.add(l);let u=!1;return{mesh:l,update:(d,f)=>{const h=l.geometry.attributes.position;for(let _=0;_<8e3;_++){const g=r[_];g.angle+=g.speed*d*f,h.setXYZ(_,Math.cos(g.angle)*g.radius,g.y,Math.sin(g.angle)*g.radius)}h.needsUpdate=!0},setViewMode:d=>{u=d;const f=u?220:72,h=u?420:105,_=u?10:1;for(let g=0;g<8e3;g++){const p=r[g];(p.radius-(u?60:220))/(u?25:200),p.ratio===void 0&&(p.ratio=(p.radius-72)/33,p.yBase=p.y),p.radius=vt.lerp(f,h,p.ratio),p.y=p.yBase*_,p.speed=(u?.005:.01)/Math.sqrt(p.radius)*(.75+Math.random()*.5)}},setVisible:d=>{l.visible=d}}}function Lg(i){const t=new ot,n=new Float32Array(12e3*3),s=new Float32Array(12e3),r=[],a=450,o=800;for(let u=0;u<12e3;u++){const d=vt.lerp(a,o,Math.pow(Math.random(),.8)),f=Math.random()*Math.PI*2,h=(Math.random()-.5)*(d*.1);n[u*3]=Math.cos(f)*d,n[u*3+1]=h,n[u*3+2]=Math.sin(f)*d,s[u]=Math.random()*.12+.03;const _=.002/Math.sqrt(d)*(Math.random()*.5+.75);r.push({radius:d,angle:f,y:h,yBase:h,speed:_,ratio:(d-a)/(o-a)})}t.setAttribute("position",new St(n,3)),t.setAttribute("size",new St(s,1));const c=new gi({color:8965375,size:.12,transparent:!0,opacity:.5,sizeAttenuation:!0,blending:sn}),l=new ji(t,c);return i.add(l),{mesh:l,update:(u,d)=>{const f=l.geometry.attributes.position;for(let h=0;h<12e3;h++){const _=r[h];_.angle+=_.speed*u*d,f.setXYZ(h,Math.cos(_.angle)*_.radius,_.y,Math.sin(_.angle)*_.radius)}f.needsUpdate=!0},setViewMode:u=>{const d=u?5e3:450,f=u?15e3:800,h=u?15:1;for(let _=0;_<12e3;_++){const g=r[_];g.radius=vt.lerp(d,f,g.ratio),g.y=g.yBase*h,g.speed=.002/Math.sqrt(g.radius)*(.75+Math.random()*.5)}},setVisible:u=>{l.visible=u}}}function Ig(i){const t=new ot,n=new Float32Array(2e4*3),s=new Float32Array(2e4*3);let r=15e3,a=35e3;const o=[];for(let f=0;f<2e4;f++){const h=vt.lerp(r,a,Math.random()),_=Math.random(),g=Math.random(),p=2*Math.PI*_,m=Math.acos(2*g-1),E=h*Math.sin(m)*Math.cos(p),T=h*Math.sin(m)*Math.sin(p),y=h*Math.cos(m);n[f*3]=E,n[f*3+1]=T,n[f*3+2]=y;const b=.5+Math.random()*.5;s[f*3]=.8*b,s[f*3+1]=.9*b,s[f*3+2]=b,o.push({initialRadius:h,theta:p,phi:m,u:_,v:g,speed:(Math.random()-.5)*1e-4})}t.setAttribute("position",new St(n,3)),t.setAttribute("color",new St(s,3));const c=new gi({size:8,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,blending:sn,depthWrite:!1}),l=new ji(t,c);i.add(l),l.visible=!0;let u=r,d=a;return{mesh:l,update:(f,h)=>{if(!l.visible)return;const _=l.geometry.attributes.position;for(let g=0;g<2e4;g++){const p=o[g];p.theta+=p.speed*f*h;const m=p.currentRadius||p.initialRadius;_.setXYZ(g,m*Math.sin(p.phi)*Math.cos(p.theta),m*Math.sin(p.phi)*Math.sin(p.theta),m*Math.cos(p.phi))}_.needsUpdate=!0},setViewMode:f=>{const h=f?6:1;u=15e3*h,d=35e3*h;for(let _=0;_<2e4;_++){const g=o[_],p=(g.initialRadius-15e3)/2e4;g.currentRadius=vt.lerp(u,d,p)}c.size=f?25:8,c.opacity=f?.25:.4},setVisible:f=>{l.visible=f}}}const Ug=[{name:"Alpha Centauri",nameCH:"半人馬座 α",distanceFromSun:276e3,position:{x:-103e3,y:-241e3,z:-86e3},stars:[{name:"Alpha Centauri A",nameCH:"南門二 A",type:"star",radius:1.1,color:16774369,texture:"alphacentauri_a.png",emissiveIntensity:1.5,position:{x:0,y:0,z:0},description:"半人馬座 α A（南門二 A）是系統中的主星，其光譜類型 G2V 與太陽極其相似，是全天第四亮的恆星。",details:{質量:"1.100 太陽質量",表面溫度:"5,790 K",距離:"4.37 光年"},planets:[{name:"Alpha Centauri B",nameCH:"南門二 B",type:"star",radius:.86,color:16765601,texture:"alphacentauri_b.png",orbit:{radius:1265,inclination:15,speed:.1},description:"半人馬座 α B（南門二 B）是系統中的第二顆恆星。",details:{質量:"0.907 太陽質量",表面溫度:"5,260 K"}}]}]},{name:"Sirius",nameCH:"天狼星系",distanceFromSun:543873,position:{x:-102e3,y:-156e3,z:51e4},stars:[{name:"Sirius A",nameCH:"天狼星 A",type:"star",radius:1.711,color:12307711,texture:"sirius_a.png",emissiveIntensity:2,position:{x:0,y:0,z:0},description:"全天最亮的恆星。",details:{質量:"2.06 太陽質量",表面溫度:"9,940 K",光譜類型:"A1V"},planets:[{name:"Sirius B",nameCH:"天狼星 B",type:"star",radius:.1,color:16777215,texture:"sirius_b.png",orbit:{radius:1100,inclination:20,speed:.05},description:"著名的白矮星伴星。",details:{質量:"1.02 太陽質量",表面溫度:"25,200 K"}}]}]},{name:"Castor",nameCH:"北河二 (雙子座 α)",distanceFromSun:3225291,position:{x:15e5,y:12e5,z:-25e5},stars:[{name:"Castor Total Barycenter",nameCH:"北河二總系質心",type:"star",radius:0,position:{x:0,y:0,z:0},planets:[{name:"Castor AB Barycenter",nameCH:"北河二 AB 共同體",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:0},planets:[{name:"Castor A Barycenter",nameCH:"北河二 A 質心",type:"star",radius:0,orbit:{radius:15e3,speed:.05,inclination:5,startAngle:0},planets:[{name:"Castor A1 (Aa)",nameCH:"北河二 A1",type:"star",radius:2.3,color:16777215,texture:"castor_a.png",orbit:{radius:800,speed:.3,inclination:0,startAngle:0},description:"A1V 型藍白主序星。",details:{質量:"2.76 太陽質量"}},{name:"Castor A2 (Ab)",nameCH:"北河二 A2",type:"star",radius:.5,color:16729344,texture:"castor_c.png",orbit:{radius:800,speed:.3,inclination:0,startAngle:Math.PI},description:"紅矮星伴星，週期 9.2 天。"}]}]},{name:"Castor C Barycenter",nameCH:"北河二 C 質心",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:Math.PI},planets:[{name:"Castor C1 (Ca)",nameCH:"北河二 C1",type:"star",radius:.62,color:16729344,texture:"castor_c.png",orbit:{radius:800,speed:.8,inclination:0,startAngle:0},description:"YY Gem 紅矮星。"}]}]}]},{name:"Scorpius X-1",nameCH:"天蠍座 X-1",distanceFromSun:569e6,position:{x:2e5,y:-45e4,z:25e4},stars:[{name:"Scorpius X-1 (Neutron Star)",nameCH:"天蠍座 X-1 (中子星)",type:"star",radius:.1,color:14745599,hasAccretionDisk:!0,diskColor:52479,diskRadius:667,hasRelativisticJets:!0,jetColor:52479,position:{x:0,y:0,z:0},description:"由中子星吸取伴星物質形成吸積盤。",details:{核心天體:"中子星",距離:"9,000 光年"},planets:[{name:"V818 Scorpii",nameCH:"天蠍座 V818",type:"star",radius:1.2,color:4286945,isDistorted:!0,distortionAxes:{x:1,y:1,z:2.2},hasGasStream:!0,orbit:{radius:1500,speed:1.5,inclination:30,startAngle:0},description:"已被潮汐力拉伸成明顯的淚滴狀，並向中子星輸送物質。",details:{公轉週期:"18.9 小時",系統類型:"低質量 X 射線聯星 (LMXB)"}}]}]}];function Ng(i,e){const t=new dn,n=[],s=[],r=[],a=[],o=[],c=[],l=e?new Zi(e):new Zi,d=(()=>{const _=document.createElement("canvas");_.width=512,_.height=512;const g=_.getContext("2d");g.clearRect(0,0,512,512);const p=g.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);return p.addColorStop(0,"rgba(255, 255, 255, 1)"),p.addColorStop(.1,"rgba(255, 255, 255, 1)"),p.addColorStop(.35,"rgba(255, 242, 190, 0.5)"),p.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=p,g.fillRect(0,0,512,512),new Kh(_)})(),f=(h,_,g,p=0,m)=>{let E;const T=h.radius??1,y=h.type==="star"?50:40,b=T*y;if(T>0){const R=h.isDistorted?new Bn(1,64,64):new Bn(1,48,48),L=new Jt({color:h.color||16777215,emissive:h.color||16777215,emissiveIntensity:8,side:Ht,transparent:!1,depthWrite:!0});h.texture&&(L.map=l.load(`textures/${h.texture}`)),E=new ze(R,L),h.isDistorted&&h.distortionAxes?E.scale.set(b*(h.distortionAxes.x||1),b*(h.distortionAxes.y||1),b*(h.distortionAxes.z||1.8)):E.scale.setScalar(b),s.push(E)}else E=new yt;const w=h.distortionAxes?Math.max(h.distortionAxes.x||1,h.distortionAxes.y||1,h.distortionAxes.z||1.8):1;if(E.userData={...h,isInterstellar:!0,name:h.name,visualScale:b,maxVisualRadius:b*w,parentName:_,depth:p,angle:h.orbit?.startAngle??Math.random()*Math.PI*2},g.add(E),n.push(E),h.hasRelativisticJets){const R=new dn,L=b*1100,v=new un(b*.1,b*5.5,L,32,1,!0),M=new $n({color:13432575,map:d,transparent:!0,opacity:.7,blending:sn,side:Ht,depthWrite:!1}),C=new ze(v,M);C.position.y=L/2;const N=new ze(v,M.clone());N.position.y=-L/2,N.rotation.z=Math.PI,R.add(C,N),g.add(R),c.push({group:R,parentName:h.name})}if(h.hasAccretionDisk){const L=h.diskRadius||b*25,v=new ot,M=new Float32Array(225e3*3),C=new Float32Array(225e3*3),N=new ke(16774604);for(let k=0;k<225e3;k++){const H=Math.pow(Math.random(),.6)*L+b*.45,z=Math.random()*Math.PI*2;M[k*3]=Math.cos(z)*H;const j=H/L,ie=L*(.12+j*.48),J=.85+.3*(Math.sin(z*3.1)*Math.cos(z*5.7)+Math.sin(z*11.3)*.2),ne=(Math.random()+Math.random()-1)*(Math.random()>.85?1.4:1);M[k*3+1]=ne*ie*J,M[k*3+2]=Math.sin(z)*H;const Te=.92+Math.random()*.08;C[k*3]=N.r*Te,C[k*3+1]=N.g*Te,C[k*3+2]=N.b*Te}v.setAttribute("position",new St(M,3)),v.setAttribute("color",new St(C,3));const O=new gi({size:b*1.8,map:d,transparent:!0,opacity:1,vertexColors:!0,blending:sn,depthWrite:!1,sizeAttenuation:!0}),W=new ji(v,O);g.add(W),a.push({points:W,parentName:h.name,outerRadius:L})}if(h.hasGasStream){const L=new ot,v=new Float32Array(12e3*3),M=new Float32Array(12e3*3);L.setAttribute("position",new St(v,3)),L.setAttribute("color",new St(M,3));const C=new gi({size:1,map:d,transparent:!0,opacity:1,vertexColors:!0,blending:sn,depthWrite:!1,sizeAttenuation:!0}),N=new ji(L,C);N.frustumCulled=!1,L.boundingSphere=new $i(new D,1e5);const O=new Float32Array(12e3),W=new Float32Array(12e3);for(let k=0;k<12e3;k++)O[k]=Math.random(),W[k]=Math.random();N.userData={tArray:O,seedArray:W,count:12e3},g.add(N),o.push({points:N,source:h.name,target:_})}if(h.orbit){const R=[];for(let v=0;v<=128;v++){const M=v/128*Math.PI*2;R.push(new D(Math.cos(M)*h.orbit.radius,0,Math.sin(M)*h.orbit.radius))}const L=new cr(new ot().setFromPoints(R),new ys({color:16724736,transparent:!0,opacity:.18}));h.orbit.inclination&&(L.rotation.x=vt.degToRad(h.orbit.inclination)),L.userData={parentName:_},g.add(L),r.push(L)}h.planets&&h.planets.forEach(R=>f(R,h.name,g,p+1))};return Ug.forEach(h=>{const _=new dn;_.position.set(h.position.x,h.position.y,h.position.z),h.stars.forEach(g=>f(g,null,_,0,h.name)),t.add(_)}),i.add(t),n.sort((h,_)=>h.userData.depth-_.userData.depth),{group:t,allSelectable:s,update:(h,_)=>{n.forEach(g=>{const p=g.userData;if(!p.orbit)return;const m=p.parentName?n.find(b=>b.userData.name===p.parentName):null;if(!m)return;p.angle+=(p.orbit.speed||.1)*h*_*.1;const E=p.orbit.radius,T=Math.cos(p.angle)*E,y=Math.sin(p.angle)*E;if(p.orbit.inclination){const b=vt.degToRad(p.orbit.inclination);g.position.set(m.position.x+T,m.position.y-y*Math.sin(b),m.position.z+y*Math.cos(b))}else g.position.set(m.position.x+T,m.position.y,m.position.z+y);p.isDistorted&&g.lookAt(m.position)}),a.forEach(g=>{const p=n.find(m=>m.userData.name===g.parentName);if(p){g.points.position.copy(p.position),g.points.rotation.y+=.6*h*_;const m=g.points.geometry.attributes.position;for(let E=0;E<m.count;E++)if(Math.random()>.98){let T=m.getY(E);T+=(Math.random()-.5)*g.outerRadius*.04*h*_,m.setY(E,T)}m.needsUpdate=!0}}),o.forEach(g=>{const p=n.find(T=>T.userData.name===g.source),m=n.find(T=>T.userData.name===g.target),E=a.find(T=>T.parentName===g.target);if(p&&m&&E){const T=new D().subVectors(m.position,p.position),y=T.length(),b=T.clone().normalize(),w=new D(-b.z,0,b.x).normalize(),R=p.userData.visualScale*(p.userData.distortionAxes?.z||1.8),L=p.position.clone().add(b.clone().multiplyScalar(R*.68)),v=m.position.clone().add(w.clone().multiplyScalar(E.outerRadius*.95)),M=v.clone().sub(b.clone().multiplyScalar(y*.6)),C=new td(L,M,v),{points:N}=g,{tArray:O,seedArray:W,count:k}=N.userData,H=N.geometry.attributes.position,z=N.geometry.attributes.color,j=new ke(16746530),ie=new ke(16774604);for(let J=0;J<k;J++){O[J]=(O[J]+.35*_*h*(.85+W[J]*.15))%1;const ne=O[J],Te=W[J],Pe=C.getPoint(ne),tt=p.userData.visualScale*.48,je=(.2+Te*1.5)*(1.1-ne*.75),Y=tt*je*Math.sin(Te*20)*Math.cos(Te*40),$=tt*je*Math.sin(Te*30)*(1+ne*3.5),pe=tt*je*Math.cos(Te*50);H.setXYZ(J,Pe.x+Y,Pe.y+$,Pe.z+pe);const De=j.clone().lerp(ie,Math.pow(ne,1.3));let me=15;ne>.9&&(me*=1-(ne-.9)*10);const Ve=.82+Math.random()*.48;z.setXYZ(J,De.r*me*Ve,De.g*me*Ve,De.b*me*Ve)}H.needsUpdate=!0,z.needsUpdate=!0,N.material.size=p.userData.visualScale*1.8}}),r.forEach(g=>{const p=n.find(m=>m.userData.name===g.userData.parentName);p&&g.position.copy(p.position)}),c.forEach(g=>{const p=n.find(m=>m.userData.name===g.parentName);p&&(g.group.position.copy(p.position),g.group.children.forEach(m=>m.material.map.offset.y-=7*h*_))})},getStarMeshes:()=>s,setVisible:(h,_,g,p)=>{r.forEach(m=>m.visible=g)}}}const rn=new Xh,Ct=new Yt(45,window.innerWidth/window.innerHeight,.5,1e9),Tn=new fg({antialias:!0,logarithmicDepthBuffer:!0});Tn.setSize(window.innerWidth,window.innerHeight);Tn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("app").appendChild(Tn.domElement);Tn.toneMapping=Ro;Tn.toneMappingExposure=.8;Ct.position.set(0,60,450);Ct.lookAt(0,0,0);const Fg=document.getElementById("loading-screen"),Og=document.getElementById("loading-bar"),ru=document.getElementById("loading-status"),au={"starmap_8k.jpg":"深空背景","saturn_ring_v3.png":"土星環"},ou=i=>{i.forEach(e=>{e.texture&&(au[e.texture]=e.nameCH||e.name),e.satellites&&ou(e.satellites)})};ou(su);const Qi=new jc;Qi.onProgress=(i,e,t)=>{const n=e/t*100;Og.style.width=n+"%";const s=i.split("/").pop().split("?")[0],r=au[s]||s;ru.innerText=`正在探索 ${r}`};Qi.onLoad=()=>{setTimeout(()=>{Fg.classList.add("fade-out")},500)};Qi.onError=i=>{console.error("There was an error loading "+i),ru.innerText="部分資源讀取失敗，正在嘗試繼續..."};const ya=Cg(rn,Qi),lu=Pg(rn);lu.mesh.visible=!1;const Rt=new mg(Ct,Tn.domElement);Rt.enableDamping=!0;Rt.target.set(0,0,0);const bs=()=>{const i=window.innerWidth,e=window.innerHeight;Ct.aspect=i/e,Ct.updateProjectionMatrix(),Tn.setSize(i,e)};window.addEventListener("resize",bs);window.addEventListener("orientationchange",()=>setTimeout(bs,200));bs();Rt.update();Rt.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN};Rt.maxDistance=1e6;const Bg=new dd(16777215,.15);rn.add(Bg);const cu=new Kc(16777215,300,15e3,1.2);cu.position.set(0,0,0);rn.add(cu);const zg=new ld(16777215,0,.2);rn.add(zg);let dt=.1;const uu=document.getElementById("speed-display"),ft=Rg(rn,Qi);ft.setSpeedMultiplier(dt);uu.innerText=`${dt.toFixed(1)}x`;const Qn=Dg(rn),ei=Lg(rn),ti=Ig(rn),ct=Ng(rn,Qi);ct&&ct.group&&(ct.group.rotation.x=vt.degToRad(-63),ct.group.rotation.z=vt.degToRad(45));let ki=!0,hr=!1,dr=!1,fr=!1,pr=!1,mr=!1,gr=!0,_r=!1,xr=!1,ps=!0,ms=!0,vr=!0;const en=()=>{ft&&(ft.setOrbitsVisibleByType("planet",ki),ft.setOrbitsVisibleByType("star",ki),ft.setOrbitsVisibleByType("dwarf_planet",fr),ft.setOrbitsVisibleByType("dwarf_planet_candidate",pr),ft.setOrbitsVisibleByType("interstellar",mr),ft.setOrbitsVisibleByType("asteroid",_r),ft.setOrbitsVisibleByType("comet",xr),ft.setSatOrbitsVisibleByType("satellite",hr),ft.setSatOrbitsVisibleByType("space_station",dr)),ct&&ct.setVisible(gr,ki,ps,ms),Qn&&Qn.setVisible(ps),ei&&ei.setVisible(ms),ti&&ti.setVisible(vr)};en();const Ea=new md,ba=new Ce;let Ge=null;const Ts=document.getElementById("info-panel"),kg=document.getElementById("info-title"),Vg=document.getElementById("info-description"),oc=document.getElementById("info-details"),Hg=document.getElementById("close-info"),Gg=document.getElementById("reset-view");let yo=!1,Eo={x:0,y:0},wr=!1,Vn=!1,bo=new D;window.addEventListener("pointerdown",i=>{yo=!0,Eo={x:i.clientX,y:i.clientY}});window.addEventListener("pointerup",i=>{if(!yo)return;yo=!1;const e=Math.abs(i.clientX-Eo.x),t=Math.abs(i.clientY-Eo.y),n=window.innerWidth<=1100?15:5;e>n||t>n||i.pointerType==="mouse"&&i.button!==0&&i.button!==2||Wg(i.clientX,i.clientY,i.target)});function Wg(i,e,t){if(t.closest("#controls")||t.closest("#sub-menu")||t.closest("#info-panel")||t.closest(".search-result-item")||t.tagName==="BUTTON"||t.tagName==="INPUT"||t.tagName==="A"||Rr)return;const s=Tn.domElement.getBoundingClientRect();ba.x=(i-s.left)/s.width*2-1,ba.y=-((e-s.top)/s.height)*2+1,Ea.setFromCamera(ba,Ct);const r=ft.getBodies(),a=[];r.forEach(c=>{a.push(c.mesh),c.satellites.forEach(l=>a.push(l.mesh))}),ct&&a.push(...ct.getStarMeshes());const o=Ea.intersectObjects(a,!0);if(o.length>0){let c=null,l=null;for(let u=0;u<o.length;u++){let d=o[u].object;for(;d;){if(d.userData&&d.userData.description){c=d,l=d.userData;break}d=d.parent}if(c)break}l&&zt(c)}else if(!Ts.classList.contains("hidden"))hu();else{Ge=null;const c=new D;Ct.getWorldDirection(c).negate();const l=new Un().setFromNormalAndCoplanarPoint(c,Rt.target),u=new D;Ea.ray.intersectPlane(l,u),u&&Rt.target.copy(u)}}Rt.addEventListener("start",()=>{wr=!0,Vn=!1});window.addEventListener("wheel",()=>{Vn=!1},{passive:!0});Rt.addEventListener("end",()=>{wr=!1});window.addEventListener("contextmenu",i=>{i.pointerType==="mouse"&&!document.getElementById("controls").contains(i.target)&&!document.getElementById("search-results").contains(i.target)&&i.preventDefault()});function hu(){Ts.classList.add("hidden")}Hg.addEventListener("click",()=>{hu()});Gg.addEventListener("click",i=>{i.stopPropagation(),Ge&&(Vn=!0)});function Xg(i){kg.innerText=`${i.name}   ${i.nameCH||""}`,Vg.innerText=i.description||"暫無介紹。",oc.innerHTML="",["質量","體積","直徑","光度","核心溫度","表面溫度","光譜類型"].forEach(t=>{const n=i.details&&i.details[t]?i.details[t]:"N/A",s=document.createElement("div");s.className="info-detail-item",s.innerHTML=`
      <span class="info-detail-label">${t}</span>
      <span class="info-detail-value">${n}</span>
    `,oc.appendChild(s)}),Ts.classList.remove("hidden")}let du=null,fu=null;const Nr=i=>{An();const e=()=>{i?dt<.1?dt=.1:dt<.5?dt=.5:dt+=.5:dt>.5?dt-=.5:dt>.1?dt=.1:dt=0,mu()};e(),du=setTimeout(()=>{fu=setInterval(e,100)},2e3)},An=()=>{clearTimeout(du),clearInterval(fu)},es=document.getElementById("slow"),ts=document.getElementById("fast");es.addEventListener("mousedown",()=>Nr(!1));ts.addEventListener("mousedown",()=>Nr(!0));es.addEventListener("mouseup",An);ts.addEventListener("mouseup",An);window.addEventListener("mouseup",An);es.addEventListener("mouseleave",An);ts.addEventListener("mouseleave",An);es.addEventListener("touchstart",i=>{i.preventDefault(),Nr(!1)});ts.addEventListener("touchstart",i=>{i.preventDefault(),Nr(!0)});es.addEventListener("touchend",An);ts.addEventListener("touchend",An);es.addEventListener("touchcancel",An);ts.addEventListener("touchcancel",An);let gs=!1,Ta=.1;const qg=document.getElementById("pause"),To=document.getElementById("pause-icon"),pu='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18V8M15 18V8"/></svg>',Yg='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>';qg.addEventListener("click",()=>{gs?(dt=Ta===0?.1:Ta,gs=!1,To.innerHTML=pu):(Ta=dt,dt=0,gs=!0,To.innerHTML=Yg),mu()});function mu(){ft.setSpeedMultiplier(dt),uu.innerText=`${dt.toFixed(1)}x`,dt>0&&gs&&(gs=!1,To.innerHTML=pu)}const Xo=document.getElementById("menu-toggle"),_s=document.getElementById("sub-menu"),Mr=document.getElementById("mode-artistic"),Sr=document.getElementById("mode-real");document.getElementById("toggle-orbits");const gu=i=>{i.stopPropagation(),_s.classList.toggle("hidden")};Xo.addEventListener("click",gu);Xo.addEventListener("touchstart",i=>{i.preventDefault(),gu(i)},{passive:!1});window.addEventListener("click",i=>{!_s.classList.contains("hidden")&&!_s.contains(i.target)&&i.target!==Xo&&_s.classList.add("hidden")});const lc=document.getElementById("toggle-manmade-orbit"),cc=document.getElementById("toggle-planet-orbit"),uc=document.getElementById("toggle-sat-orbit"),hc=document.getElementById("toggle-dwarf-orbit"),dc=document.getElementById("toggle-candidate-orbit"),fc=document.getElementById("toggle-interstellar-orbit"),pc=document.getElementById("toggle-asteroid-orbit"),mc=document.getElementById("toggle-comet-orbit"),gc=document.getElementById("toggle-belt"),_c=document.getElementById("toggle-kuiper"),xc=document.getElementById("toggle-oort"),vc=document.getElementById("toggle-star-orbit");lc.addEventListener("click",()=>{dr=!dr,lc.classList.toggle("active",dr),en()});cc.addEventListener("click",()=>{ki=!ki,cc.classList.toggle("active",ki),en()});uc.addEventListener("click",()=>{hr=!hr,uc.classList.toggle("active",hr),en()});hc.addEventListener("click",()=>{fr=!fr,hc.classList.toggle("active",fr),en()});dc.addEventListener("click",()=>{pr=!pr,dc.classList.toggle("active",pr),en()});fc.addEventListener("click",()=>{mr=!mr,fc.classList.toggle("active",mr),en()});vc.addEventListener("click",()=>{gr=!gr,vc.classList.toggle("active",gr),en()});pc.addEventListener("click",()=>{_r=!_r,pc.classList.toggle("active",_r),en()});gc.addEventListener("click",()=>{ps=!ps,gc.classList.toggle("active",ps),en()});_c.addEventListener("click",()=>{ms=!ms,_c.classList.toggle("active",ms),en()});mc.addEventListener("click",()=>{xr=!xr,mc.classList.toggle("active",xr),en()});xc.addEventListener("click",()=>{vr=!vr,xc.classList.toggle("active",vr),en()});Mr.addEventListener("click",()=>{Mr.classList.contains("active")||(Mr.classList.add("active"),Sr.classList.remove("active"),ft.setViewMode(!1),Qn&&Qn.setViewMode(!1),ei&&ei.setViewMode(!1),ti&&ti.setViewMode(!1),Ge?Vn=!0:(Ct.position.set(0,150,250),Ct.lookAt(0,0,0)))});Sr.addEventListener("click",()=>{Sr.classList.contains("active")||(Sr.classList.add("active"),Mr.classList.remove("active"),ft.setViewMode(!0),Qn&&Qn.setViewMode(!0),ei&&ei.setViewMode(!0),ti&&ti.setViewMode(!0),Ge&&(Vn=!0))});const Vi=document.getElementById("planet-search"),kt=document.getElementById("search-results"),As=document.getElementById("clear-search"),Ao=document.getElementById("reset-to-sun");let Rr=!1;const jg={planet:"行星",star:"恆星",dwarf_planet:"矮行星",dwarf_planet_candidate:"候選/TNO",asteroid:"小行星",interstellar:"星際天體",satellite:"衛星",comet:"彗星",space_station:"人造物體"};function zt(i,e=!1){Ge=i;const t=i.userData;Vn=!0,Xg(t),Ge.updateMatrixWorld(!0),Ge.getWorldPosition(bo),e?(Vi.blur(),setTimeout(()=>{Ge===i&&(Vn=!0,bs())},450)):(!Ge||Ge!==i)&&(bs(),kt.classList.add("hidden"),kt.innerHTML="",Vi.value="",As.classList.add("hidden"))}Vi.addEventListener("input",()=>{const i=Vi.value.trim().toLowerCase();if(As.classList.toggle("hidden",i===""),i.length<1){kt.innerHTML="",kt.classList.add("hidden");return}const e=ft.getBodies(),t=[];e.forEach(s=>{t.push({mesh:s.mesh,data:s.data,type:s.data.type}),s.satellites.forEach(r=>{t.push({mesh:r.mesh,data:r.data,type:"satellite"})})}),ct&&ct.getStarMeshes().forEach(r=>{t.push({mesh:r,data:r.userData,type:"star"})});const n=t.filter(s=>s.data.name.toLowerCase().includes(i)||s.data.nameCH&&s.data.nameCH.includes(i));n.length>0?(kt.innerHTML=n.map(s=>`
      <div class="search-result-item" data-id="${s.data.name}">
        <div class="result-name">${s.data.nameCH||s.data.name}</div>
        <div class="result-type">${jg[s.type]||s.type}</div>
      </div>
    `).join(""),kt.classList.remove("hidden"),kt.querySelectorAll(".search-result-item").forEach(s=>{const r=a=>{a.stopPropagation(),a.preventDefault(),Rr=!0;const o=s.getAttribute("data-id"),c=t.find(l=>l.data.name===o);c&&zt(c.mesh,!0),setTimeout(()=>{kt.classList.add("hidden"),kt.innerHTML="",Vi.value="",As.classList.add("hidden"),Rr=!1},800)};s.addEventListener("mousedown",r),s.addEventListener("touchstart",r,{passive:!1})})):(kt.innerHTML='<div class="search-result-item">無符合天體</div>',kt.classList.remove("hidden"))});As.addEventListener("click",i=>{i.stopPropagation(),Vi.value="",As.classList.add("hidden"),kt.innerHTML="",kt.classList.add("hidden")});const Pt=document.getElementById("system-menu");Ao.addEventListener("click",i=>{i.stopPropagation(),Pt.classList.toggle("hidden"),_s.classList.add("hidden"),kt.classList.add("hidden")});Pt.querySelectorAll(".system-menu-item").forEach(i=>{i.addEventListener("click",e=>{e.stopPropagation();const t=i.getAttribute("data-id");if(t==="solar"){const s=ft.getBodies().find(r=>r.data.name==="Sun");s&&zt(s.mesh),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="alpha-centauri"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Alpha Centauri A");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="barnards"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Barnard's Star");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="wolf359"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Wolf 359");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="lalande"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Lalande 21185");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="sirius"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Sirius A");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="luyten"){const s=ct.getStarMeshes().find(r=>r.userData.name==="BL Ceti");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="ross154"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Ross 154");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="ross248"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Ross 248");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="epsilon"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Epsilon Eridani");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="lacaille"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Lacaille 9352");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}else if(t==="castor"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Castor A1 (Aa)");s&&zt(s)}else if(t==="scorpius"){const s=ct.getStarMeshes().find(r=>r.userData.name==="Scorpius X-1 (Neutron Star)");s&&zt(s),Pt.querySelectorAll(".system-menu-item").forEach(r=>r.classList.remove("active")),i.classList.add("active")}Pt.classList.add("hidden")})});window.addEventListener("mousedown",i=>{document.getElementById("search-container").contains(i.target)||kt.classList.add("hidden"),!Pt.contains(i.target)&&i.target!==Ao&&!Ao.contains(i.target)&&Pt.classList.add("hidden")});window.addEventListener("resize",()=>{Ct.aspect=window.innerWidth/window.innerHeight,Ct.updateProjectionMatrix(),Tn.setSize(window.innerWidth,window.innerHeight)});const Zg=["controls","sub-menu","info-panel","system-menu"];Zg.forEach(i=>{const e=document.getElementById(i);if(!e)return;const t=n=>n.stopPropagation();["mousedown","mouseup","click","dblclick","wheel","touchstart","touchend","touchmove"].forEach(n=>{e.addEventListener(n,t)})});const Kg=new pd,In=new D,ui=new D,Ni=new D,Aa=new D,Mc=new D;function _u(){requestAnimationFrame(_u);const i=Kg.getDelta(),e=Math.min(i,.1);ft&&ft.update(e),Qn&&Qn.update(dt,e),ei&&ei.update(dt,e),ti&&ti.update(dt,e),ct&&ct.update(dt,e),ya&&ya.update&&ya.update(Ct.position,e);const t=Ts&&!Ts.classList.contains("hidden");if(t?(Rt.enablePan=!1,Rt.mouseButtons.RIGHT=fn.ROTATE):(Rt.enablePan=!0,Rt.mouseButtons.RIGHT=fn.PAN),Ge){if(Ge.updateMatrixWorld(!0),Ge.getWorldPosition(In),Vn){const s=ft.isRealScale(),r=Ge.userData.isInterstellar;let a=s&&Ge.userData.realScaleRadius||Ge.userData.radius;r&&(a=Ge.userData.maxVisualRadius||Ge.userData.visualScale,Ge.userData.hasAccretionDisk&&Ge.userData.diskRadius&&(a=Math.max(a,Ge.userData.diskRadius*.45)));const o=r?45:window.innerWidth<=480?18:window.innerWidth<=1100?12:6,c=a*o,l=Ct.position.distanceTo(In),u=vt.lerp(l,c,.05);ui.subVectors(Ct.position,In).normalize(),Ni.copy(In).add(ui.multiplyScalar(u)),Ct.position.copy(Ni),Math.abs(l-c)<a*.1&&(Vn=!1)}if(t){if(ui.subVectors(In,bo),Ct.position.add(ui),Ni.copy(In),window.innerWidth<=1100){const s=window.innerWidth<=480,r=window.innerWidth>window.innerHeight;ui.subVectors(Ct.position,In).normalize(),Aa.set(0,1,0).cross(ui).normalize(),Mc.crossVectors(ui,Aa).normalize();const a=ft.isRealScale(),o=Ge.userData.isInterstellar;let c=a&&Ge.userData.realScaleRadius||Ge.userData.radius;o&&(c=Ge.userData.maxVisualRadius||Ge.userData.visualScale,Ge.userData.hasAccretionDisk&&Ge.userData.diskRadius&&(c=Math.max(c,Ge.userData.diskRadius*.5)));const u=c*(o?60:s?25:15);if(r)Ni.add(Aa.multiplyScalar(u*.18));else{const d=s?-.12:-.08;Ni.add(Mc.multiplyScalar(u*d))}}Rt.target.copy(Ni)}else!wr&&Ge&&Rt.target.lerp(In,.1);bo.copy(In)}const n=Rt.target.clone();Rt.update(),!t&&wr&&Rt.target.distanceTo(n)>.01&&(Ge=null),Tn.render(rn,Ct)}_u();window.scene=rn;window.ship=lu;window.solarSystem=ft;
