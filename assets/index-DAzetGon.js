(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ro="182",dn={ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wu=0,il=1,Cu=2,sr=1,Ru=2,cs=3,$n=0,Ut=1,It=2,Fn=0,fi=1,$t=2,sl=3,rl=4,Pu=5,ui=100,Du=101,Lu=102,Iu=103,Uu=104,Nu=200,Fu=201,Ou=202,Bu=203,Ca=204,Ra=205,zu=206,ku=207,Hu=208,Vu=209,Gu=210,Wu=211,Xu=212,qu=213,Yu=214,Pa=0,Da=1,La=2,Vi=3,Ia=4,Ua=5,Na=6,Fa=7,bc=0,ju=1,Ku=2,Mn=0,Tc=1,Ac=2,wc=3,Po=4,Cc=5,Rc=6,Pc=7,Dc=300,gi=301,Gi=302,Oa=303,Ba=304,Pr=306,Nn=1e3,_n=1001,za=1002,Rt=1003,Zu=1004,Ds=1005,yt=1006,kr=1007,jn=1008,Jt=1009,Lc=1010,Ic=1011,xs=1012,Do=1013,En=1014,xn=1015,Bn=1016,Lo=1017,Io=1018,vs=1020,Uc=35902,Nc=35899,Fc=1021,Oc=1022,cn=1023,zn=1026,di=1027,Bc=1028,Uo=1029,Wi=1030,No=1031,Fo=1033,rr=33776,ar=33777,or=33778,lr=33779,ka=35840,Ha=35841,Va=35842,Ga=35843,Wa=36196,Xa=37492,qa=37496,Ya=37488,ja=37489,Ka=37490,Za=37491,$a=37808,Ja=37809,Qa=37810,eo=37811,to=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,uo=37821,ho=36492,fo=36494,po=36495,mo=36283,go=36284,_o=36285,xo=36286,$u=3200,zc=0,Ju=1,Yn="",Gt="srgb",Xi="srgb-linear",yr="linear",et="srgb",Si=7680,al=519,Qu=512,eh=513,th=514,Oo=515,nh=516,ih=517,Bo=518,sh=519,ol=35044,ll="300 es",vn=2e3,Er=2001;function kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rh(){const i=Ms("canvas");return i.style.display="block",i}const cl={};function ul(...i){const e="THREE."+i.shift();console.log(e,...i)}function Re(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ye(...i){const e="THREE."+i.shift();console.error(e,...i)}function Ss(...i){const e=i.join(" ");e in cl||(cl[e]=!0,Re(...i))}function ah(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hl=1234567;const hs=Math.PI/180,qi=180/Math.PI;function Ki(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Fe(i,e,t){return Math.max(e,Math.min(t,i))}function zo(i,e){return(i%e+e)%e}function oh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lh(i,e,t){return i!==e?(t-i)/(e-i):0}function ds(i,e,t){return(1-t)*i+t*e}function ch(i,e,t,n){return ds(i,e,1-Math.exp(-t*n))}function uh(i,e=1){return e-Math.abs(zo(i,e*2)-e)}function hh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ph(i,e){return i+Math.random()*(e-i)}function mh(i){return i*(.5-Math.random())}function gh(i){i!==void 0&&(hl=i);let e=hl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _h(i){return i*hs}function xh(i){return i*qi}function vh(i){return(i&i-1)===0&&i!==0}function Mh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),u=a(t/2),l=r((e+n)/2),c=a((e+n)/2),d=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*c,u*d,u*f,o*l);break;case"YZY":i.set(u*f,o*c,u*d,o*l);break;case"ZXZ":i.set(u*d,u*f,o*c,o*l);break;case"XZX":i.set(o*c,u*_,u*m,o*l);break;case"YXY":i.set(u*m,o*c,u*_,o*l);break;case"ZYZ":i.set(u*_,u*m,o*c,o*l);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ct={DEG2RAD:hs,RAD2DEG:qi,generateUUID:Ki,clamp:Fe,euclideanModulo:zo,mapLinear:oh,inverseLerp:lh,lerp:ds,damp:ch,pingpong:uh,smoothstep:hh,smootherstep:dh,randInt:fh,randFloat:ph,randFloatSpread:mh,seededRandom:gh,degToRad:_h,radToDeg:xh,isPowerOfTwo:vh,ceilPowerOfTwo:Mh,floorPowerOfTwo:Sh,setQuaternionFromProperEuler:yh,normalize:Ft,denormalize:Oi};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let u=n[s+0],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a+0],m=r[a+1],_=r[a+2],g=r[a+3];if(o<=0){e[t+0]=u,e[t+1]=l,e[t+2]=c,e[t+3]=d;return}if(o>=1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||u!==f||l!==m||c!==_){let p=u*f+l*m+c*_+d*g;p<0&&(f=-f,m=-m,_=-_,g=-g,p=-p);let h=1-o;if(p<.9995){const S=Math.acos(p),b=Math.sin(S);h=Math.sin(h*S)/b,o=Math.sin(o*S)/b,u=u*h+f*o,l=l*h+m*o,c=c*h+_*o,d=d*h+g*o}else{u=u*h+f*o,l=l*h+m*o,c=c*h+_*o,d=d*h+g*o;const S=1/Math.sqrt(u*u+l*l+c*c+d*d);u*=S,l*=S,c*=S,d*=S}}e[t]=u,e[t+1]=l,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],u=n[s+1],l=n[s+2],c=n[s+3],d=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+c*d+u*m-l*f,e[t+1]=u*_+c*f+l*d-o*m,e[t+2]=l*_+c*m+o*f-u*d,e[t+3]=c*_-o*d-u*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,u=Math.sin,l=o(n/2),c=o(s/2),d=o(r/2),f=u(n/2),m=u(s/2),_=u(r/2);switch(a){case"XYZ":this._x=f*c*d+l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d-f*m*_;break;case"YXZ":this._x=f*c*d+l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d+f*m*_;break;case"ZXY":this._x=f*c*d-l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d-f*m*_;break;case"ZYX":this._x=f*c*d-l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d+f*m*_;break;case"YZX":this._x=f*c*d+l*m*_,this._y=l*m*d+f*c*_,this._z=l*c*_-f*m*d,this._w=l*c*d-f*m*_;break;case"XZY":this._x=f*c*d-l*m*_,this._y=l*m*d-f*c*_,this._z=l*c*_+f*m*d,this._w=l*c*d+f*m*_;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],u=t[9],l=t[2],c=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-u)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(c-u)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(u+c)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(u+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,u=t._y,l=t._z,c=t._w;return this._x=n*c+a*o+s*l-r*u,this._y=s*c+a*u+r*o-n*l,this._z=r*c+a*l+n*u-s*o,this._w=a*c-n*o-s*u-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let u=1-t;if(o<.9995){const l=Math.acos(o),c=Math.sin(l);u=Math.sin(u*l)/c,t=Math.sin(t*l)/c,this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+a*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,u=e.w,l=2*(a*s-o*n),c=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+u*l+a*d-o*c,this.y=n+u*c+o*l-r*d,this.z=s+u*d+r*c-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,u=t.z;return this.x=s*u-r*o,this.y=r*a-n*u,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hr.copy(this).projectOnVector(e),this.sub(Hr)}reflect(e){return this.sub(Hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hr=new P,dl=new _i;class Ie{constructor(e,t,n,s,r,a,o,u,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l)}set(e,t,n,s,r,a,o,u,l){const c=this.elements;return c[0]=e,c[1]=s,c[2]=o,c[3]=t,c[4]=r,c[5]=u,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],u=n[6],l=n[1],c=n[4],d=n[7],f=n[2],m=n[5],_=n[8],g=s[0],p=s[3],h=s[6],S=s[1],b=s[4],E=s[7],T=s[2],w=s[5],C=s[8];return r[0]=a*g+o*S+u*T,r[3]=a*p+o*b+u*w,r[6]=a*h+o*E+u*C,r[1]=l*g+c*S+d*T,r[4]=l*p+c*b+d*w,r[7]=l*h+c*E+d*C,r[2]=f*g+m*S+_*T,r[5]=f*p+m*b+_*w,r[8]=f*h+m*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8];return t*a*c-t*o*l-n*r*c+n*o*u+s*r*l-s*a*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],d=c*a-o*l,f=o*u-c*r,m=l*r-a*u,_=t*d+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(s*l-c*n)*g,e[2]=(o*n-s*a)*g,e[3]=f*g,e[4]=(c*t-s*u)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(n*u-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const u=Math.cos(r),l=Math.sin(r);return this.set(n*u,n*l,-n*(u*a+l*o)+a+e,-s*l,s*u,-s*(-l*a+u*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Vr.makeScale(e,t)),this}rotate(e){return this.premultiply(Vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Ie,fl=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eh(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=zi(s.r),s.g=zi(s.g),s.b=zi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:fl,fromXYZ:pl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const je=Eh();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let yi;class bh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yi===void 0&&(yi=Ms("canvas")),yi.width=e.width,yi.height=e.height;const s=yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Th=0;class ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gr(s[a].image)):r.push(Gr(s[a]))}else r=Gr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}let Ah=0;const Wr=new P;class Pt extends xi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=_n,s=_n,r=yt,a=jn,o=cn,u=Jt,l=Pt.DEFAULT_ANISOTROPY,c=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Ki(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=u,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wr).x}get height(){return this.source.getSize(Wr).y}get depth(){return this.source.getSize(Wr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nn:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nn:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Dc;Pt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,l=u[0],c=u[4],d=u[8],f=u[1],m=u[5],_=u[9],g=u[2],p=u[6],h=u[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,E=(m+1)/2,T=(h+1)/2,w=(c+f)/4,C=(d+g)/4,F=(_+p)/4;return b>E&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=C/n):E>T?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=F/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=F/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-g)/S,this.z=(f-c)/S,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Fe(this.x,e.x,t.x),this.y=Fe(this.y,e.y,t.y),this.z=Fe(this.z,e.z,t.z),this.w=Fe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Fe(this.x,e,t),this.y=Fe(this.y,e,t),this.z=Fe(this.z,e,t),this.w=Fe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wh extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Pt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ko(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ch extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ls.copy(n.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Is.subVectors(this.max,ns),Ei.subVectors(e.a,ns),bi.subVectors(e.b,ns),Ti.subVectors(e.c,ns),Hn.subVectors(bi,Ei),Vn.subVectors(Ti,bi),ii.subVectors(Ei,Ti);let t=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-ii.z,ii.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,ii.z,0,-ii.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-ii.y,ii.x,0];return!Xr(t,Ei,bi,Ti,Is)||(t=[1,0,0,0,1,0,0,0,1],!Xr(t,Ei,bi,Ti,Is))?!1:(Us.crossVectors(Hn,Vn),t=[Us.x,Us.y,Us.z],Xr(t,Ei,bi,Ti,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cn=[new P,new P,new P,new P,new P,new P,new P,new P],sn=new P,Ls=new ws,Ei=new P,bi=new P,Ti=new P,Hn=new P,Vn=new P,ii=new P,ns=new P,Is=new P,Us=new P,si=new P;function Xr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){si.fromArray(i,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),u=e.dot(si),l=t.dot(si),c=n.dot(si);if(Math.max(-Math.max(u,l,c),Math.min(u,l,c))>o)return!1}return!0}const Rh=new ws,is=new P,qr=new P;class Zi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);const t=is.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(qr)),this.expandByPoint(is.copy(e.center).sub(qr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new P,Yr=new P,Ns=new P,Gn=new P,jr=new P,Fs=new P,Kr=new P;class Cs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yr.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=Gn.dot(this.direction),u=-Gn.dot(Ns),l=Gn.lengthSq(),c=Math.abs(1-a*a);let d,f,m,_;if(c>0)if(d=a*u-o,f=a*o-u,_=r*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,m=d*(d+a*f+2*o)+f*(a*d+f+2*u)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*u)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*u)+l;else f<=-_?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-u),r),m=-d*d+f*(f+2*u)+l):f<=_?(d=0,f=Math.min(Math.max(-r,-u),r),m=f*(f+2*u)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-u),r),m=-d*d+f*(f+2*u)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yr).addScaledVector(Ns,f),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,u=n+a;return u<0?null:o<0?this.at(u,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,u;const l=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),c>=0?(r=(e.min.y-f.y)*c,a=(e.max.y-f.y)*c):(r=(e.max.y-f.y)*c,a=(e.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,u=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,u=(e.min.z-f.z)*d),n>u||o>s)||((o>n||n!==n)&&(n=o),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){jr.subVectors(t,e),Fs.subVectors(n,e),Kr.crossVectors(jr,Fs);let a=this.direction.dot(Kr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,e);const u=o*this.direction.dot(Fs.crossVectors(Gn,Fs));if(u<0)return null;const l=o*this.direction.dot(jr.cross(Gn));if(l<0||u+l>a)return null;const c=-o*Gn.dot(Kr);return c<0?null:this.at(c/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,s,r,a,o,u,l,c,d,f,m,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,u,l,c,d,f,m,_,g,p)}set(e,t,n,s,r,a,o,u,l,c,d,f,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=u,h[2]=l,h[6]=c,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Ai.setFromMatrixColumn(e,0).length(),r=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),u=Math.cos(s),l=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*c,m=a*d,_=o*c,g=o*d;t[0]=u*c,t[4]=-u*d,t[8]=l,t[1]=m+_*l,t[5]=f-g*l,t[9]=-o*u,t[2]=g-f*l,t[6]=_+m*l,t[10]=a*u}else if(e.order==="YXZ"){const f=u*c,m=u*d,_=l*c,g=l*d;t[0]=f+g*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=m*o-_,t[6]=g+f*o,t[10]=a*u}else if(e.order==="ZXY"){const f=u*c,m=u*d,_=l*c,g=l*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*c,t[9]=g-f*o,t[2]=-a*l,t[6]=o,t[10]=a*u}else if(e.order==="ZYX"){const f=a*c,m=a*d,_=o*c,g=o*d;t[0]=u*c,t[4]=_*l-m,t[8]=f*l+g,t[1]=u*d,t[5]=g*l+f,t[9]=m*l-_,t[2]=-l,t[6]=o*u,t[10]=a*u}else if(e.order==="YZX"){const f=a*u,m=a*l,_=o*u,g=o*l;t[0]=u*c,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-l*c,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*u,m=a*l,_=o*u,g=o*l;t[0]=u*c,t[4]=-d,t[8]=l*c,t[1]=f*d+g,t[5]=a*c,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Dh)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Wn.crossVectors(n,jt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Wn.crossVectors(n,jt)),Wn.normalize(),Os.crossVectors(jt,Wn),s[0]=Wn.x,s[4]=Os.x,s[8]=jt.x,s[1]=Wn.y,s[5]=Os.y,s[9]=jt.y,s[2]=Wn.z,s[6]=Os.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],u=n[8],l=n[12],c=n[1],d=n[5],f=n[9],m=n[13],_=n[2],g=n[6],p=n[10],h=n[14],S=n[3],b=n[7],E=n[11],T=n[15],w=s[0],C=s[4],F=s[8],v=s[12],M=s[1],R=s[5],I=s[9],O=s[13],V=s[2],H=s[6],z=s[10],B=s[14],q=s[3],J=s[7],te=s[11],ie=s[15];return r[0]=a*w+o*M+u*V+l*q,r[4]=a*C+o*R+u*H+l*J,r[8]=a*F+o*I+u*z+l*te,r[12]=a*v+o*O+u*B+l*ie,r[1]=c*w+d*M+f*V+m*q,r[5]=c*C+d*R+f*H+m*J,r[9]=c*F+d*I+f*z+m*te,r[13]=c*v+d*O+f*B+m*ie,r[2]=_*w+g*M+p*V+h*q,r[6]=_*C+g*R+p*H+h*J,r[10]=_*F+g*I+p*z+h*te,r[14]=_*v+g*O+p*B+h*ie,r[3]=S*w+b*M+E*V+T*q,r[7]=S*C+b*R+E*H+T*J,r[11]=S*F+b*I+E*z+T*te,r[15]=S*v+b*O+E*B+T*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],u=e[9],l=e[13],c=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15],S=u*m-l*f,b=o*m-l*d,E=o*f-u*d,T=a*m-l*c,w=a*f-u*c,C=a*d-o*c;return t*(g*S-p*b+h*E)-n*(_*S-p*T+h*w)+s*(_*b-g*T+h*C)-r*(_*E-g*w+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],u=e[6],l=e[7],c=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],S=d*p*l-g*f*l+g*u*m-o*p*m-d*u*h+o*f*h,b=_*f*l-c*p*l-_*u*m+a*p*m+c*u*h-a*f*h,E=c*g*l-_*d*l+_*o*m-a*g*m-c*o*h+a*d*h,T=_*d*u-c*g*u-_*o*f+a*g*f+c*o*p-a*d*p,w=t*S+n*b+s*E+r*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(g*f*r-d*p*r-g*s*m+n*p*m+d*s*h-n*f*h)*C,e[2]=(o*p*r-g*u*r+g*s*l-n*p*l-o*s*h+n*u*h)*C,e[3]=(d*u*r-o*f*r-d*s*l+n*f*l+o*s*m-n*u*m)*C,e[4]=b*C,e[5]=(c*p*r-_*f*r+_*s*m-t*p*m-c*s*h+t*f*h)*C,e[6]=(_*u*r-a*p*r-_*s*l+t*p*l+a*s*h-t*u*h)*C,e[7]=(a*f*r-c*u*r+c*s*l-t*f*l-a*s*m+t*u*m)*C,e[8]=E*C,e[9]=(_*d*r-c*g*r-_*n*m+t*g*m+c*n*h-t*d*h)*C,e[10]=(a*g*r-_*o*r+_*n*l-t*g*l-a*n*h+t*o*h)*C,e[11]=(c*o*r-a*d*r-c*n*l+t*d*l+a*n*m-t*o*m)*C,e[12]=T*C,e[13]=(c*g*s-_*d*s+_*n*f-t*g*f-c*n*p+t*d*p)*C,e[14]=(_*o*s-a*g*s-_*n*u+t*g*u+a*n*p-t*o*p)*C,e[15]=(a*d*s-c*o*s+c*n*u-t*d*u-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,u=e.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-s*u,l*u+s*o,0,l*o+s*u,c*o+n,c*u-s*a,0,l*u-s*o,c*u+s*a,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,u=t._w,l=r+r,c=a+a,d=o+o,f=r*l,m=r*c,_=r*d,g=a*c,p=a*d,h=o*d,S=u*l,b=u*c,E=u*d,T=n.x,w=n.y,C=n.z;return s[0]=(1-(g+h))*T,s[1]=(m+E)*T,s[2]=(_-b)*T,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(f+h))*w,s[6]=(p+S)*w,s[7]=0,s[8]=(_+b)*C,s[9]=(p-S)*C,s[10]=(1-(f+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ai.set(s[0],s[1],s[2]).length();const a=Ai.set(s[4],s[5],s[6]).length(),o=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),rn.copy(this);const l=1/r,c=1/a,d=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=c,rn.elements[5]*=c,rn.elements[6]*=c,rn.elements[8]*=d,rn.elements[9]*=d,rn.elements[10]*=d,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=vn,u=!1){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s);let _,g;if(u)_=r/(a-r),g=a*r/(a-r);else if(o===vn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Er)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=vn,u=!1){const l=this.elements,c=2/(t-e),d=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,g;if(u)_=1/(a-r),g=a/(a-r);else if(o===vn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===Er)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new P,rn=new lt,Ph=new P(0,0,0),Dh=new P(1,1,1),Wn=new P,Os=new P,jt=new P,ml=new lt,gl=new _i;class bn{constructor(e=0,t=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],u=s[1],l=s[5],c=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Fe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gl.setFromEuler(this),this.setFromQuaternion(gl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const _l=new P,wi=new _i,Pn=new lt,Bs=new P,ss=new P,Ih=new P,Uh=new _i,xl=new P(1,0,0),vl=new P(0,1,0),Ml=new P(0,0,1),Sl={type:"added"},Nh={type:"removed"},Ci={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Et extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new P,t=new bn,n=new _i,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ie}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ss,Bs,this.up):Pn.lookAt(Bs,ss,this.up),this.quaternion.setFromRotationMatrix(Pn),s&&(Pn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(Pn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nh),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sl),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Uh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,u){return o[u.uuid]===void 0&&(o[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const u=o.shapes;if(Array.isArray(u))for(let l=0,c=u.length;l<c;l++){const d=u[l];r(e.shapes,d)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let u=0,l=this.material.length;u<l;u++)o.push(r(e.materials,this.material[u]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const u=this.animations[o];s.animations.push(r(e.animations,u))}}if(t){const o=a(e.geometries),u=a(e.materials),l=a(e.textures),c=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const u=[];for(const l in o){const c=o[l];delete c.metadata,u.push(c)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new P,Dn=new P,$r=new P,Ln=new P,Ri=new P,Pi=new P,yl=new P,Jr=new P,Qr=new P,ea=new P,ta=new pt,na=new pt,ia=new pt;class on{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Dn.subVectors(n,t),$r.subVectors(e,t);const a=an.dot(an),o=an.dot(Dn),u=an.dot($r),l=Dn.dot(Dn),c=Dn.dot($r),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*u-o*c)*f,_=(a*c-o*u)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,a,o,u){return this.getBarycoord(e,t,n,s,Ln)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Ln.x),u.addScaledVector(a,Ln.y),u.addScaledVector(o,Ln.z),u)}static getInterpolatedAttribute(e,t,n,s,r,a){return ta.setScalar(0),na.setScalar(0),ia.setScalar(0),ta.fromBufferAttribute(e,t),na.fromBufferAttribute(e,n),ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ta,r.x),a.addScaledVector(na,r.y),a.addScaledVector(ia,r.z),a}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Dn.subVectors(e,t),an.cross(Dn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),an.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Ri.subVectors(s,n),Pi.subVectors(r,n),Jr.subVectors(e,n);const u=Ri.dot(Jr),l=Pi.dot(Jr);if(u<=0&&l<=0)return t.copy(n);Qr.subVectors(e,s);const c=Ri.dot(Qr),d=Pi.dot(Qr);if(c>=0&&d<=c)return t.copy(s);const f=u*d-c*l;if(f<=0&&u>=0&&c<=0)return a=u/(u-c),t.copy(n).addScaledVector(Ri,a);ea.subVectors(e,r);const m=Ri.dot(ea),_=Pi.dot(ea);if(_>=0&&m<=_)return t.copy(r);const g=m*l-u*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Pi,o);const p=c*_-m*d;if(p<=0&&d-c>=0&&m-_>=0)return yl.subVectors(r,s),o=(d-c)/(d-c+(m-_)),t.copy(s).addScaledVector(yl,o);const h=1/(p+g+f);return a=g*h,o=f*h,t.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},zs={h:0,s:0,l:0};function sa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=zo(e,1),t=Fe(t,0,1),n=Fe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sa(a,r,e+1/3),this.g=sa(a,r,e),this.b=sa(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return je.workingToColorSpace(Lt.copy(this),e),Math.round(Fe(Lt.r*255,0,255))*65536+Math.round(Fe(Lt.g*255,0,255))*256+Math.round(Fe(Lt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let u,l;const c=(o+a)/2;if(o===a)u=0,l=0;else{const d=a-o;switch(l=c<=.5?d/(a+o):d/(2-a-o),a){case n:u=(s-r)/d+(s<r?6:0);break;case s:u=(r-n)/d+2;break;case r:u=(n-s)/d+4;break}u/=6}return e.h=u,e.s=l,e.l=c,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Gt){je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(zs);const n=ds(Xn.h,zs.h,t),s=ds(Xn.s,zs.s,t),r=ds(Xn.l,zs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new ze;ze.NAMES=Vc;let Fh=0;class vi extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=fi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Ra,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ca&&(n.blendSrc=this.blendSrc),this.blendDst!==Ra&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const u=r[o];delete u.metadata,a.push(u)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new P,ks=new De;let Oh=0;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ol&&(e.usage=this.usage),e}}class Gc extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wc extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bh=0;const nn=new lt,ra=new Et,Di=new P,Kt=new ws,rs=new ws,wt=new P;class st extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kc(e)?Wc:Gc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ie().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Kt.min,rs.min),Kt.expandByPoint(wt),wt.addVectors(Kt.max,rs.max),Kt.expandByPoint(wt)):(Kt.expandByPoint(rs.min),Kt.expandByPoint(rs.max))}Kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],u=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)wt.fromBufferAttribute(o,l),u&&(Di.fromBufferAttribute(e,l),wt.add(Di)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],u=[];for(let F=0;F<n.count;F++)o[F]=new P,u[F]=new P;const l=new P,c=new P,d=new P,f=new De,m=new De,_=new De,g=new P,p=new P;function h(F,v,M){l.fromBufferAttribute(n,F),c.fromBufferAttribute(n,v),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,v),_.fromBufferAttribute(r,M),c.sub(l),d.sub(l),m.sub(f),_.sub(f);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(c,-_.x).multiplyScalar(R),o[F].add(g),o[v].add(g),o[M].add(g),u[F].add(p),u[v].add(p),u[M].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let F=0,v=S.length;F<v;++F){const M=S[F],R=M.start,I=M.count;for(let O=R,V=R+I;O<V;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const b=new P,E=new P,T=new P,w=new P;function C(F){T.fromBufferAttribute(s,F),w.copy(T);const v=o[F];b.copy(v),b.sub(T.multiplyScalar(T.dot(v))).normalize(),E.crossVectors(w,v);const R=E.dot(u[F])<0?-1:1;a.setXYZW(F,b.x,b.y,b.z,R)}for(let F=0,v=S.length;F<v;++F){const M=S[F],R=M.start,I=M.count;for(let O=R,V=R+I;O<V;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,o=new P,u=new P,l=new P,c=new P,d=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),o.fromBufferAttribute(n,_),u.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),o.add(c),u.add(c),l.add(c),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,u.x,u.y,u.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),c.subVectors(a,r),d.subVectors(s,r),c.cross(d),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,u){const l=o.array,c=o.itemSize,d=o.normalized,f=new l.constructor(u.length*c);let m=0,_=0;for(let g=0,p=u.length;g<p;g++){o.isInterleavedBufferAttribute?m=u[g]*o.data.stride+o.offset:m=u[g]*c;for(let h=0;h<c;h++)f[_++]=l[m++]}return new mt(f,c,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new st,n=this.index.array,s=this.attributes;for(const o in s){const u=s[o],l=e(u,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const u=[],l=r[o];for(let c=0,d=l.length;c<d;c++){const f=l[c],m=e(f,n);u.push(m)}t.morphAttributes[o]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,u=a.length;o<u;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const l in u)u[l]!==void 0&&(e[l]=u[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const l=n[u];e.data.attributes[u]=l.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const l=this.morphAttributes[u],c=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];c.push(m.toJSON(e.data))}c.length>0&&(s[u]=c,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(t))}const r=e.morphAttributes;for(const l in r){const c=[],d=r[l];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,c=a.length;l<c;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new lt,ri=new Cs,Hs=new Zi,bl=new P,Vs=new P,Gs=new P,Ws=new P,aa=new P,Xs=new P,Tl=new P,qs=new P;class Ne extends Et{constructor(e=new st,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Xs.set(0,0,0);for(let u=0,l=r.length;u<l;u++){const c=o[u],d=r[u];c!==0&&(aa.fromBufferAttribute(d,e),a?Xs.addScaledVector(aa,c):Xs.addScaledVector(aa.sub(t),c))}t.add(Xs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),ri.copy(e.ray).recast(e.near),!(Hs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Hs,bl)===null||ri.origin.distanceToSquared(bl)>(e.far-e.near)**2))&&(El.copy(r).invert(),ri.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ri)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,u=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,T=b;E<T;E+=3){const w=o.getX(E),C=o.getX(E+1),F=o.getX(E+2);s=Ys(this,h,e,n,l,c,d,w,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=o.getX(p),b=o.getX(p+1),E=o.getX(p+2);s=Ys(this,a,e,n,l,c,d,S,b,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),b=Math.min(u.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,T=b;E<T;E+=3){const w=E,C=E+1,F=E+2;s=Ys(this,h,e,n,l,c,d,w,C,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(u.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=p,b=p+1,E=p+2;s=Ys(this,a,e,n,l,c,d,S,b,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function zh(i,e,t,n,s,r,a,o){let u;if(e.side===Ut?u=n.intersectTriangle(a,r,s,!0,o):u=n.intersectTriangle(s,r,a,e.side===$n,o),u===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:i}}function Ys(i,e,t,n,s,r,a,o,u,l){i.getVertexPosition(o,Vs),i.getVertexPosition(u,Gs),i.getVertexPosition(l,Ws);const c=zh(i,e,t,n,Vs,Gs,Ws,Tl);if(c){const d=new P;on.getBarycoord(Tl,Vs,Gs,Ws,d),s&&(c.uv=on.getInterpolatedAttribute(s,o,u,l,d,new De)),r&&(c.uv1=on.getInterpolatedAttribute(r,o,u,l,d,new De)),a&&(c.normal=on.getInterpolatedAttribute(a,o,u,l,d,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:u,c:l,normal:new P,materialIndex:0};on.getNormal(Vs,Gs,Ws,f.normal),c.face=f,c.barycoord=d}return c}class zt extends st{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const u=[],l=[],c=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(d,2));function _(g,p,h,S,b,E,T,w,C,F,v){const M=E/C,R=T/F,I=E/2,O=T/2,V=w/2,H=C+1,z=F+1;let B=0,q=0;const J=new P;for(let te=0;te<z;te++){const ie=te*R-O;for(let Ee=0;Ee<H;Ee++){const Ae=Ee*M-I;J[g]=Ae*S,J[p]=ie*b,J[h]=V,l.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[h]=w>0?1:-1,c.push(J.x,J.y,J.z),d.push(Ee/C),d.push(1-te/F),B+=1}}for(let te=0;te<F;te++)for(let ie=0;ie<C;ie++){const Ee=f+ie+H*te,Ae=f+ie+H*(te+1),Ve=f+(ie+1)+H*(te+1),Ge=f+(ie+1)+H*te;u.push(Ee,Ae,Ge),u.push(Ae,Ve,Ge),q+=6}o.addGroup(m,q,v),m+=q,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Yi(i[t]);for(const s in n)e[s]=n[s]}return e}function kh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Hh={clone:Yi,merge:Ot};var Vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vh,this.fragmentShader=Gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=kh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new P,Al=new De,wl=new De;class Wt extends qc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qi*2*Math.atan(Math.tan(hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,Al,wl),t.subVectors(wl,Al)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/u,t-=a.offsetY*n/l,s*=a.width/u,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Ii=1;class Wh extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wt(Li,Ii,e,t);s.layers=this.layers,this.add(s);const r=new Wt(Li,Ii,e,t);r.layers=this.layers,this.add(r);const a=new Wt(Li,Ii,e,t);a.layers=this.layers,this.add(a);const o=new Wt(Li,Ii,e,t);o.layers=this.layers,this.add(o);const u=new Wt(Li,Ii,e,t);u.layers=this.layers,this.add(u);const l=new Wt(Li,Ii,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,u]=t;for(const l of t)this.remove(l);if(e===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,u,l,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,u),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,c),e.setRenderTarget(d,f,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yc extends Pt{constructor(e=[],t=gi,n,s,r,a,o,u,l,c){super(e,t,n,s,r,a,o,u,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jc extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Fn});r.uniforms.tEquirect.value=t;const a=new Ne(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=yt),new Wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class un extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xh={type:"move"};class oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,u=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),h=this._getHandJoint(l,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Xh)))}return o!==null&&(o.visible=s!==null),u!==null&&(u.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class qh extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yh extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,u,l=Rt,c=Rt,d,f){super(null,a,o,u,l,c,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const la=new P,jh=new P,Kh=new Ie;class Un{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=la.subVectors(n,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(la),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Kh.getNormalMatrix(e),s=this.coplanarPoint(la).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new Zi,Zh=new De(.5,.5),js=new P;class Vo{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],u=r[2],l=r[3],c=r[4],d=r[5],f=r[6],m=r[7],_=r[8],g=r[9],p=r[10],h=r[11],S=r[12],b=r[13],E=r[14],T=r[15];if(s[0].setComponents(l-a,m-c,h-_,T-S).normalize(),s[1].setComponents(l+a,m+c,h+_,T+S).normalize(),s[2].setComponents(l+o,m+d,h+g,T+b).normalize(),s[3].setComponents(l-o,m-d,h-g,T-b).normalize(),n)s[4].setComponents(u,f,p,E).normalize(),s[5].setComponents(l-u,m-f,h-p,T-E).normalize();else if(s[4].setComponents(l-u,m-f,h-p,T-E).normalize(),t===vn)s[5].setComponents(l+u,m+f,h+p,T+E).normalize();else if(t===Er)s[5].setComponents(u,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=Zh.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(js.x=s.normal.x>0?e.max.x:e.min.x,js.y=s.normal.y>0?e.max.y:e.min.y,js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ys extends vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const br=new P,Tr=new P,Cl=new lt,as=new Cs,Ks=new Zi,ca=new P,Rl=new P;class Kc extends Et{constructor(e=new st,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)br.fromBufferAttribute(t,s-1),Tr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=br.distanceTo(Tr);e.setAttribute("lineDistance",new gt(n,1))}else Re("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;Cl.copy(s).invert(),as.copy(e.ray).applyMatrix4(Cl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const m=Math.max(0,a.start),_=Math.min(c.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=l){const h=c.getX(g),S=c.getX(g+1),b=Zs(this,e,as,u,h,S,g);b&&t.push(b)}if(this.isLineLoop){const g=c.getX(_-1),p=c.getX(m),h=Zs(this,e,as,u,g,p,_-1);h&&t.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=l){const h=Zs(this,e,as,u,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=Zs(this,e,as,u,_-1,m,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(br.fromBufferAttribute(o,s),Tr.fromBufferAttribute(o,r),t.distanceSqToSegment(br,Tr,ca,Rl)>n)return;ca.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ca);if(!(l<e.near||l>e.far))return{distance:l,point:Rl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class cr extends Kc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Zn extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pl=new lt,vo=new Cs,$s=new Zi,Js=new P;class pi extends Et{constructor(e=new st,t=new Zn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;Pl.copy(s).invert(),vo.copy(e.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let _=f,g=m;_<g;_++){const p=l.getX(_);Js.fromBufferAttribute(d,p),Dl(Js,p,u,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m;_<g;_++)Js.fromBufferAttribute(d,_),Dl(Js,_,u,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Dl(i,e,t,n,s,r,a){const o=vo.distanceSqToPoint(i);if(o<t){const u=new P;vo.closestPointToPoint(i,u),u.applyMatrix4(n);const l=s.ray.origin.distanceTo(u);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $h extends Pt{constructor(e,t,n,s,r,a,o,u,l){super(e,t,n,s,r,a,o,u,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Es extends Pt{constructor(e,t,n=En,s,r,a,o=Rt,u=Rt,l,c=zn,d=1){if(c!==zn&&c!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,r,a,o,u,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ko(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Jh extends Es{constructor(e,t=En,n=gi,s,r,a=Rt,o=Rt,u,l=zn){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,t,n,s,r,a,o,u,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zc extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ln extends st{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:u};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],d=[],f=[],m=[];let _=0;const g=[],p=n/2;let h=0;S(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(f,3)),this.setAttribute("uv",new gt(m,2));function S(){const E=new P,T=new P;let w=0;const C=(t-e)/n;for(let F=0;F<=r;F++){const v=[],M=F/r,R=M*(t-e)+e;for(let I=0;I<=s;I++){const O=I/s,V=O*u+o,H=Math.sin(V),z=Math.cos(V);T.x=R*H,T.y=-M*n+p,T.z=R*z,d.push(T.x,T.y,T.z),E.set(H,C,z).normalize(),f.push(E.x,E.y,E.z),m.push(O,1-M),v.push(_++)}g.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){const M=g[v][F],R=g[v+1][F],I=g[v+1][F+1],O=g[v][F+1];(e>0||v!==0)&&(c.push(M,R,O),w+=3),(t>0||v!==r-1)&&(c.push(R,I,O),w+=3)}l.addGroup(h,w,0),h+=w}function b(E){const T=_,w=new De,C=new P;let F=0;const v=E===!0?e:t,M=E===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,p*M,0),f.push(0,M,0),m.push(.5,.5),_++;const R=_;for(let I=0;I<=s;I++){const V=I/s*u+o,H=Math.cos(V),z=Math.sin(V);C.x=v*z,C.y=p*M,C.z=v*H,d.push(C.x,C.y,C.z),f.push(0,M,0),w.x=H*.5+.5,w.y=z*.5*M+.5,m.push(w.x,w.y),_++}for(let I=0;I<s;I++){const O=T+I,V=R+I;E===!0?c.push(V,V+1,O):c.push(V+1,V,O),F+=3}l.addGroup(h,F,E===!0?1:2),h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dr extends ln{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Dr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,u=r-1,l;for(;o<=u;)if(s=Math.floor(o+(u-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)u=s-1;else{u=s;break}if(s=u,n[s]===a)return s/(r-1);const c=n[s],f=n[s+1]-c,m=(a-c)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),u=t||(a.isVector2?new De:new P);return u.copy(o).sub(a).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,u=new lt;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Fe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(u.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Fe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(u.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qs extends Go{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=u}getPoint(e,t=new De){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=u-this.aX,m=l-this.aY;u=f*c-m*d+this.aX,l=f*d+m*c+this.aY}return n.set(u,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}function Wo(){let i=0,e=0,t=0,n=0;function s(r,a,o,u){i=r,e=o,t=-3*r+3*a-2*o-u,n=2*r-2*a+o+u}return{initCatmullRom:function(r,a,o,u,l){s(a,o,l*(o-r),l*(u-a))},initNonuniformCatmullRom:function(r,a,o,u,l,c,d){let f=(a-r)/l-(o-r)/(l+c)+(o-a)/c,m=(o-a)/c-(u-a)/(c+d)+(u-o)/d;f*=c,m*=c,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const er=new P,ua=new Wo,ha=new Wo,da=new Wo;class Ll extends Go{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),u=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:u===0&&o===r-1&&(o=r-2,u=1);let l,c;this.closed||o>0?l=s[(o-1)%r]:(er.subVectors(s[0],s[1]).add(s[0]),l=er);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(er.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=er),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(c),m);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),ua.initNonuniformCatmullRom(l.x,d.x,f.x,c.x,_,g,p),ha.initNonuniformCatmullRom(l.y,d.y,f.y,c.y,_,g,p),da.initNonuniformCatmullRom(l.z,d.z,f.z,c.z,_,g,p)}else this.curveType==="catmullrom"&&(ua.initCatmullRom(l.x,d.x,f.x,c.x,this.tension),ha.initCatmullRom(l.y,d.y,f.y,c.y,this.tension),da.initCatmullRom(l.z,d.z,f.z,c.z,this.tension));return n.set(ua.calc(u),ha.calc(u),da.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Qh(i,e){const t=1-i;return t*t*e}function ed(i,e){return 2*(1-i)*i*e}function td(i,e){return i*i*e}function fa(i,e,t,n){return Qh(i,e)+ed(i,t)+td(i,n)}class nd extends Go{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y),fa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lr extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),u=Math.floor(s),l=o+1,c=u+1,d=e/o,f=t/u,m=[],_=[],g=[],p=[];for(let h=0;h<c;h++){const S=h*f-a;for(let b=0;b<l;b++){const E=b*d-r;_.push(E,-S,0),g.push(0,0,1),p.push(b/o),p.push(1-h/u)}}for(let h=0;h<u;h++)for(let S=0;S<o;S++){const b=S+l*h,E=S+l*(h+1),T=S+1+l*(h+1),w=S+1+l*h;m.push(b,E,w),m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ar extends st{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],u=[],l=[],c=[];let d=e;const f=(t-e)/s,m=new P,_=new De;for(let g=0;g<=s;g++){for(let p=0;p<=n;p++){const h=r+p/n*a;m.x=d*Math.cos(h),m.y=d*Math.sin(h),u.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,c.push(_.x,_.y)}d+=f}for(let g=0;g<s;g++){const p=g*(n+1);for(let h=0;h<n;h++){const S=h+p,b=S,E=S+n+1,T=S+n+2,w=S+1;o.push(b,E,w),o.push(E,T,w)}}this.setIndex(o),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class hn extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+o,Math.PI);let l=0;const c=[],d=new P,f=new P,m=[],_=[],g=[],p=[];for(let h=0;h<=n;h++){const S=[],b=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&u===Math.PI&&(E=-.5/t);for(let T=0;T<=t;T++){const w=T/t;d.x=-e*Math.cos(s+w*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+w*r)*Math.sin(a+b*o),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),p.push(w+E,1-b),S.push(l++)}c.push(S)}for(let h=0;h<n;h++)for(let S=0;S<t;S++){const b=c[h][S+1],E=c[h][S],T=c[h+1][S],w=c[h+1][S+1];(h!==0||a>0)&&m.push(b,E,w),(h!==n-1||u<Math.PI)&&m.push(E,T,w)}this.setIndex(m),this.setAttribute("position",new gt(_,3)),this.setAttribute("normal",new gt(g,3)),this.setAttribute("uv",new gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class id extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zt extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sd extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rd extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ad extends ys{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const pa={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $c{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,u;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return u?u(c):c},this.setURLModifier=function(c){return u=c,this},this.addHandler=function(c,d){return l.push(c,d),this},this.removeHandler=function(c){const d=l.indexOf(c);return d!==-1&&l.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],_=l[d+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const od=new $c;class Xo{constructor(e){this.manager=e!==void 0?e:od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui=new WeakMap;class ld extends Xo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ui.get(a);d===void 0&&(d=[],Ui.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=Ms("img");function u(){c(),t&&t(this);const d=Ui.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onLoad&&m.onLoad(this)}Ui.delete(this),r.manager.itemEnd(e)}function l(d){c(),s&&s(d),pa.remove(`image:${e}`);const f=Ui.get(this)||[];for(let m=0;m<f.length;m++){const _=f[m];_.onError&&_.onError(d)}Ui.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function c(){o.removeEventListener("load",u,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",u,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),pa.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class ji extends Xo{constructor(e){super(e)}load(e,t,n,s){const r=new Pt,a=new ld(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ir extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cd extends Ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ma=new lt,Il=new P,Ul=new P;class Jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Il.setFromMatrixPosition(e.matrixWorld),t.position.copy(Il),Ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ul),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ud extends Jc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=qi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hd extends Ir{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ud}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class dd extends Jc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}}class Qc extends Ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class eu extends qc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,u=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fd extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pd extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class md{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Nl=new lt;class gd{constructor(e,t,n=0,s=1/0){this.ray=new Cs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(e,t=!0,n=[]){return Mo(e,this,n,t),n.sort(Fl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mo(e[s],this,n,t);return n.sort(Fl),n}}function Fl(i,e){return i.distance-e.distance}function Mo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Mo(r[a],e,t,!0)}}class Ol{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Fe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class _d extends xi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Re("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bl(i,e,t,n){const s=xd(n);switch(t){case Fc:return i*e;case Bc:return i*e/s.components*s.byteLength;case Uo:return i*e/s.components*s.byteLength;case Wi:return i*e*2/s.components*s.byteLength;case No:return i*e*2/s.components*s.byteLength;case Oc:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case Fo:return i*e*4/s.components*s.byteLength;case rr:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case or:case lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:case Ga:return Math.max(i,16)*Math.max(e,8)/4;case ka:case Va:return Math.max(i,8)*Math.max(e,8)/2;case Wa:case Xa:case Ya:case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ka:case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ho:case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _o:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xd(i){switch(i){case Jt:case Lc:return{byteLength:1,components:1};case xs:case Ic:case Bn:return{byteLength:2,components:1};case Lo:case Io:return{byteLength:2,components:4};case En:case Do:case xn:return{byteLength:4,components:1};case Uc:case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function tu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vd(i){const e=new WeakMap;function t(o,u){const l=o.array,c=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(u,f),i.bufferData(u,l,c),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,u,l){const c=u.array,d=u.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,c);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],g=d[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const g=d[m];i.bufferSubData(l,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const u=e.get(o);u&&(i.deleteBuffer(u.buffer),e.delete(o))}function a(o,u){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,u));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,u),l.version=o.version}}return{get:s,remove:r,update:a}}var Md=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Pd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Wd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,vf=`uniform sampler2D dfgLUT;
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
}`,Mf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,Df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
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
#endif`,Gf=`#ifdef USE_NORMALMAP
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
#endif`,Wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rp=`float getShadowMask() {
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
}`,ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sp=`uniform sampler2D t2D;
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define TOON
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
}`,Yp=`#define TOON
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
}`,jp=`uniform float size;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,$p=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:Md,alphahash_pars_fragment:Sd,alphamap_fragment:yd,alphamap_pars_fragment:Ed,alphatest_fragment:bd,alphatest_pars_fragment:Td,aomap_fragment:Ad,aomap_pars_fragment:wd,batching_pars_vertex:Cd,batching_vertex:Rd,begin_vertex:Pd,beginnormal_vertex:Dd,bsdfs:Ld,iridescence_fragment:Id,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Nd,clipping_planes_pars_fragment:Fd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Bd,color_fragment:zd,color_pars_fragment:kd,color_pars_vertex:Hd,color_vertex:Vd,common:Gd,cube_uv_reflection_fragment:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:jd,emissivemap_pars_fragment:Kd,colorspace_fragment:Zd,colorspace_pars_fragment:$d,envmap_fragment:Jd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:of,gradientmap_pars_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:uf,lights_lambert_pars_fragment:hf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:_f,lights_physical_fragment:xf,lights_physical_pars_fragment:vf,lights_fragment_begin:Mf,lights_fragment_maps:Sf,lights_fragment_end:yf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:bf,logdepthbuf_pars_vertex:Tf,logdepthbuf_vertex:Af,map_fragment:wf,map_pars_fragment:Cf,map_particle_fragment:Rf,map_particle_pars_fragment:Pf,metalnessmap_fragment:Df,metalnessmap_pars_fragment:Lf,morphinstance_vertex:If,morphcolor_vertex:Uf,morphnormal_vertex:Nf,morphtarget_pars_vertex:Ff,morphtarget_vertex:Of,normal_fragment_begin:Bf,normal_fragment_maps:zf,normal_pars_fragment:kf,normal_pars_vertex:Hf,normal_vertex:Vf,normalmap_pars_fragment:Gf,clearcoat_normal_fragment_begin:Wf,clearcoat_normal_fragment_maps:Xf,clearcoat_pars_fragment:qf,iridescence_pars_fragment:Yf,opaque_fragment:jf,packing:Kf,premultiplied_alpha_fragment:Zf,project_vertex:$f,dithering_fragment:Jf,dithering_pars_fragment:Qf,roughnessmap_fragment:ep,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:np,shadowmap_pars_vertex:ip,shadowmap_vertex:sp,shadowmask_pars_fragment:rp,skinbase_vertex:ap,skinning_pars_vertex:op,skinning_vertex:lp,skinnormal_vertex:cp,specularmap_fragment:up,specularmap_pars_fragment:hp,tonemapping_fragment:dp,tonemapping_pars_fragment:fp,transmission_fragment:pp,transmission_pars_fragment:mp,uv_pars_fragment:gp,uv_pars_vertex:_p,uv_vertex:xp,worldpos_vertex:vp,background_vert:Mp,background_frag:Sp,backgroundCube_vert:yp,backgroundCube_frag:Ep,cube_vert:bp,cube_frag:Tp,depth_vert:Ap,depth_frag:wp,distance_vert:Cp,distance_frag:Rp,equirect_vert:Pp,equirect_frag:Dp,linedashed_vert:Lp,linedashed_frag:Ip,meshbasic_vert:Up,meshbasic_frag:Np,meshlambert_vert:Fp,meshlambert_frag:Op,meshmatcap_vert:Bp,meshmatcap_frag:zp,meshnormal_vert:kp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Gp,meshphysical_vert:Wp,meshphysical_frag:Xp,meshtoon_vert:qp,meshtoon_frag:Yp,points_vert:jp,points_frag:Kp,shadow_vert:Zp,shadow_frag:$p,sprite_vert:Jp,sprite_frag:Qp},ce={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},gn={basic:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ot([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ot([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ot([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ot([ce.points,ce.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ot([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ot([ce.common,ce.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ot([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ot([ce.sprite,ce.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Ot([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Ot([ce.lights,ce.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:Ot([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const tr={r:0,b:0,g:0},oi=new bn,em=new lt;function tm(i,e,t,n,s,r,a){const o=new ze(0);let u=r===!0?0:1,l,c,d=null,f=0,m=null;function _(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function g(b){let E=!1;const T=_(b);T===null?h(o,u):T&&T.isColor&&(h(T,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,E){const T=_(E);T&&(T.isCubeTexture||T.mapping===Pr)?(c===void 0&&(c=new Ne(new zt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Yi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),oi.copy(E.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(oi)),c.material.toneMapped=je.getTransfer(T.colorSpace)!==et,(d!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Ne(new Lr(2,2),new fn({name:"BackgroundMaterial",uniforms:Yi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=je.getTransfer(T.colorSpace)!==et,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function h(b,E){b.getRGB(tr,Xc(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,E,a)}function S(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),u=E,h(o,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,h(o,u)},render:g,addToRenderList:p,dispose:S}}function nm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,R,I,O,V){let H=!1;const z=d(O,I,R);r!==z&&(r=z,l(r.object)),H=m(M,O,I,V),H&&_(M,O,I,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(M,R,I,O),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function u(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function c(M){return i.deleteVertexArray(M)}function d(M,R,I){const O=I.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let H=V[R.id];H===void 0&&(H={},V[R.id]=H);let z=H[O];return z===void 0&&(z=f(u()),H[O]=z),z}function f(M){const R=[],I=[],O=[];for(let V=0;V<t;V++)R[V]=0,I[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,R,I,O){const V=r.attributes,H=R.attributes;let z=0;const B=I.getAttributes();for(const q in B)if(B[q].location>=0){const te=V[q];let ie=H[q];if(ie===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function _(M,R,I,O){const V={},H=R.attributes;let z=0;const B=I.getAttributes();for(const q in B)if(B[q].location>=0){let te=H[q];te===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),V[q]=ie,z++}r.attributes=V,r.attributesNum=z,r.index=O}function g(){const M=r.newAttributes;for(let R=0,I=M.length;R<I;R++)M[R]=0}function p(M){h(M,0)}function h(M,R){const I=r.newAttributes,O=r.enabledAttributes,V=r.attributeDivisors;I[M]=1,O[M]===0&&(i.enableVertexAttribArray(M),O[M]=1),V[M]!==R&&(i.vertexAttribDivisor(M,R),V[M]=R)}function S(){const M=r.newAttributes,R=r.enabledAttributes;for(let I=0,O=R.length;I<O;I++)R[I]!==M[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function b(M,R,I,O,V,H,z){z===!0?i.vertexAttribIPointer(M,R,I,V,H):i.vertexAttribPointer(M,R,I,O,V,H)}function E(M,R,I,O){g();const V=O.attributes,H=I.getAttributes(),z=R.defaultAttributeValues;for(const B in H){const q=H[B];if(q.location>=0){let J=V[B];if(J===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const te=J.normalized,ie=J.itemSize,Ee=e.get(J);if(Ee===void 0)continue;const Ae=Ee.buffer,Ve=Ee.type,Ge=Ee.bytesPerElement,Y=Ve===i.INT||Ve===i.UNSIGNED_INT||J.gpuType===Do;if(J.isInterleavedBufferAttribute){const $=J.data,de=$.stride,we=J.offset;if($.isInstancedInterleavedBuffer){for(let ge=0;ge<q.locationSize;ge++)h(q.location+ge,$.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let ge=0;ge<q.locationSize;ge++)b(q.location+ge,ie/q.locationSize,Ve,te,de*Ge,(we+ie/q.locationSize*ge)*Ge,Y)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)h(q.location+$,J.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<q.locationSize;$++)p(q.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ae);for(let $=0;$<q.locationSize;$++)b(q.location+$,ie/q.locationSize,Ve,te,ie*Ge,ie/q.locationSize*$*Ge,Y)}}else if(z!==void 0){const te=z[B];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(q.location,te);break;case 3:i.vertexAttrib3fv(q.location,te);break;case 4:i.vertexAttrib4fv(q.location,te);break;default:i.vertexAttrib1fv(q.location,te)}}}}S()}function T(){F();for(const M in n){const R=n[M];for(const I in R){const O=R[I];for(const V in O)c(O[V].object),delete O[V];delete R[I]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const I in R){const O=R[I];for(const V in O)c(O[V].object),delete O[V];delete R[I]}delete n[M.id]}function C(M){for(const R in n){const I=n[R];if(I[M.id]===void 0)continue;const O=I[M.id];for(const V in O)c(O[V].object),delete O[V];delete I[M.id]}}function F(){v(),a=!0,r!==s&&(r=s,l(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:v,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function im(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let m=0;for(let _=0;_<d;_++)m+=c[_];t.update(m,n,1)}function u(l,c,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],c[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g]*f[g];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=u}function sm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===Bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Jt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==xn&&!F)}function u(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const c=u(l);c!==l&&(Re("WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:E,maxSamples:T,samples:w}}function rm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Un,o=new Ie,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!p)r?c(null):l();else{const S=r?0:n,b=S*4;let E=h.clippingState||null;u.value=E,E=c(_,f,b,m);for(let T=0;T!==b;++T)E[T]=t[T];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=u.value,_!==!0||p===null){const h=m+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,E=m;b!==g;++b,E+=4)a.copy(d[b]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function am(i){let e=new WeakMap;function t(a,o){return o===Oa?a.mapping=gi:o===Ba&&(a.mapping=Gi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Oa||o===Ba)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const l=new jc(u.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const u=e.get(o);u!==void 0&&(e.delete(o),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Kn=4,zl=[.125,.215,.35,.446,.526,.582],hi=20,om=256,os=new eu,kl=new ze;let ga=null,_a=0,xa=0,va=!1;const lm=new P;class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=lm}=r;ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,s,u,o),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ga,_a,xa),this._renderer.xr.enabled=va,e.scissorTest=!1,Ni(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:Bn,format:cn,colorSpace:Xi,depthBuffer:!1},s=Vl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cm(r)),this._blurMaterial=hm(r,e,t),this._ggxMaterial=um(r,e,t)}return s}_compileMaterial(e){const t=new Ne(new st,e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,s,r){const u=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(kl),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ne(new zt,new yn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let h=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,h=!0):(p.color.copy(kl),h=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(u.up.set(0,l[b],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x+c[b],r.y,r.z)):E===1?(u.up.set(0,0,l[b]),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y+c[b],r.z)):(u.up.set(0,l[b],0),u.position.set(r.x,r.y,r.z),u.lookAt(r.x,r.y,r.z+c[b]));const T=this._cubeSize;Ni(s,E*T,b>2?T:0,T,T),d.setRenderTarget(s),h&&d.render(g,u),d.render(e,u)}d.toneMapping=m,d.autoClear=f,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===gi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const u=this._cubeSize;Ni(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const u=a.uniforms,l=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-c*c),f=0+l*1.25,m=d*f,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Kn?n-_+Kn:0),h=4*(this._cubeSize-g);u.envMap.value=e.texture,u.roughness.value=m,u.mipInt.value=_-t,Ni(r,p,h,3*g,2*g),s.setRenderTarget(r),s.render(o,os),u.envMap.value=r.texture,u.roughness.value=0,u.mipInt.value=_-n,Ni(e,p,h,3*g,2*g),s.setRenderTarget(e),s.render(o,os)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const u=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[s];d.material=l;const f=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),g=r/_,p=isFinite(r)?1+Math.floor(c*g):hi;p>hi&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const h=[];let S=0;for(let C=0;C<hi;++C){const F=C/g,v=Math.exp(-F*F/2);h.push(v),C===0?S+=v:C<p&&(S+=2*v)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=_,f.mipInt.value=b-n;const E=this._sizeLods[s],T=3*E*(s>b-Kn?s-b+Kn:0),w=4*(this._cubeSize-E);Ni(t,T,w,3*E,2*E),u.setRenderTarget(t),u.render(d,os)}}function cm(i){const e=[],t=[],n=[];let s=i;const r=i-Kn+1+zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let u=1/o;a>i-Kn?u=zl[a-i+Kn-1]:a===0&&(u=0),t.push(u);const l=1/(o-2),c=-l,d=1+l,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,_=6,g=3,p=2,h=1,S=new Float32Array(g*_*m),b=new Float32Array(p*_*m),E=new Float32Array(h*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,F=w>2?0:-1,v=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];S.set(v,g*_*w),b.set(f,p*_*w);const M=[w,w,w,w,w,w];E.set(M,h*_*w)}const T=new st;T.setAttribute("position",new mt(S,g)),T.setAttribute("uv",new mt(b,p)),T.setAttribute("faceIndex",new mt(E,h)),n.push(new Ne(T,null)),s>Kn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Vl(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ni(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function um(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:om,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function hm(i,e,t){const n=new Float32Array(hi),s=new P(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Gl(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ur(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Wl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ur(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Ur(){return`

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
	`}function dm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const u=o.mapping,l=u===Oa||u===Ba,c=u===gi||u===Gi;if(l||c){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Hl(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||c&&m&&s(m)?(t===null&&(t=new Hl(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let u=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&u++;return u===l}function r(o){const u=o.target;u.removeEventListener("dispose",r);const l=e.get(u);l!==void 0&&(e.delete(u),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function pm(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function u(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let b=0,E=S.length;b<E;b+=3){const T=S[b+0],w=S[b+1],C=S[b+2];f.push(T,w,w,C,C,T)}}else if(_!==void 0){const S=_.array;g=_.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const T=b+0,w=b+1,C=b+2;f.push(T,w,w,C,C,T)}}else return;const p=new(kc(f)?Wc:Gc)(f,1);p.version=g;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function c(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:u,getWireframeAttribute:c}}function mm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function u(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function l(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),t.update(m,n,_))}function c(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,n,1)}function d(f,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,g,0,_);let h=0;for(let S=0;S<_;S++)h+=m[S]*g[S];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=u,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,e,t){const n=new WeakMap,s=new pt;function r(a,o,u){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),p===!0&&(E=3);let T=o.attributes.position.count*E,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*w*4*d),F=new Hc(C,T,w,d);F.type=xn,F.needsUpdate=!0;const v=E*4;for(let R=0;R<d;R++){const I=h[R],O=S[R],V=b[R],H=T*w*4*R;for(let z=0;z<I.count;z++){const B=z*v;_===!0&&(s.fromBufferAttribute(I,z),C[H+B+0]=s.x,C[H+B+1]=s.y,C[H+B+2]=s.z,C[H+B+3]=0),g===!0&&(s.fromBufferAttribute(O,z),C[H+B+4]=s.x,C[H+B+5]=s.y,C[H+B+6]=s.z,C[H+B+7]=0),p===!0&&(s.fromBufferAttribute(V,z),C[H+B+8]=s.x,C[H+B+9]=s.y,C[H+B+10]=s.z,C[H+B+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new De(T,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];const g=o.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",g),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xm(i,e,t,n){let s=new WeakMap;function r(u){const l=n.render.frame,c=u.geometry,d=e.get(u,c);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",o)===!1&&u.addEventListener("dispose",o),s.get(u)!==l&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,l))),u.isSkinnedMesh){const f=u.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(u){const l=u.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const vm={[Tc]:"LINEAR_TONE_MAPPING",[Ac]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[Rc]:"AGX_TONE_MAPPING",[Pc]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function Mm(i,e,t,n,s){const r=new Sn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Sn(e,t,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),o=new st;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const u=new id({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ne(o,u),c=new eu(-1,1,1,-1,0,1);let d=null,f=null,m=!1,_,g=null,p=[],h=!1;this.setSize=function(S,b){r.setSize(S,b),a.setSize(S,b);for(let E=0;E<p.length;E++){const T=p[E];T.setSize&&T.setSize(S,b)}},this.setEffects=function(S){p=S,h=p.length>0&&p[0].isRenderPass===!0;const b=r.width,E=r.height;for(let T=0;T<p.length;T++){const w=p[T];w.setSize&&w.setSize(b,E)}},this.begin=function(S,b){if(m||S.toneMapping===Mn&&p.length===0)return!1;if(g=b,b!==null){const E=b.width,T=b.height;(r.width!==E||r.height!==T)&&this.setSize(E,T)}return h===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=Mn,!0},this.hasRenderPass=function(){return h},this.end=function(S,b){S.toneMapping=_,m=!0;let E=r,T=a;for(let w=0;w<p.length;w++){const C=p[w];if(C.enabled!==!1&&(C.render(S,T,E,b),C.needsSwap!==!1)){const F=E;E=T,T=F}}if(d!==S.outputColorSpace||f!==S.toneMapping){d=S.outputColorSpace,f=S.toneMapping,u.defines={},je.getTransfer(d)===et&&(u.defines.SRGB_TRANSFER="");const w=vm[f];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(g),S.render(l,c),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),u.dispose()}}const nu=new Pt,So=new Es(1,1),iu=new Hc,su=new Ch,ru=new Yc,Xl=[],ql=[],Yl=new Float32Array(16),jl=new Float32Array(9),Kl=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Xl[s];if(r===void 0&&(r=new Float32Array(s),Xl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nr(i,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Kl.set(n),i.uniformMatrix2fv(this.addr,!1,Kl),At(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),At(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,n))return;Yl.set(n),i.uniformMatrix4fv(this.addr,!1,Yl),At(t,n)}}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Lm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Fm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=t.isReversedDepthBuffer()?Bo:Oo,r=So):r=nu,t.setTexture2D(e||r,s)}function Om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||su,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ru,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||iu,s)}function km(i){switch(i){case 5126:return Sm;case 35664:return ym;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Cm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Lm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Hm(i,e){i.uniform1fv(this.addr,e)}function Vm(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function Gm(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function Wm(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function Xm(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qm(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ym(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jm(i,e){i.uniform1iv(this.addr,e)}function Km(i,e){i.uniform2iv(this.addr,e)}function Zm(i,e){i.uniform3iv(this.addr,e)}function $m(i,e){i.uniform4iv(this.addr,e)}function Jm(i,e){i.uniform1uiv(this.addr,e)}function Qm(i,e){i.uniform2uiv(this.addr,e)}function e0(i,e){i.uniform3uiv(this.addr,e)}function t0(i,e){i.uniform4uiv(this.addr,e)}function n0(i,e,t){const n=this.cache,s=e.length,r=Nr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=So:a=nu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function i0(i,e,t){const n=this.cache,s=e.length,r=Nr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||su,r[a])}function s0(i,e,t){const n=this.cache,s=e.length,r=Nr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ru,r[a])}function r0(i,e,t){const n=this.cache,s=e.length,r=Nr(t,s);Tt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||iu,r[a])}function a0(i){switch(i){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return qm;case 35676:return Ym;case 5124:case 35670:return jm;case 35667:case 35671:return Km;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Jm;case 36294:return Qm;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}class o0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=km(t.type)}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a0(t.type)}}class c0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function u0(i,e,t){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const r=Ma.exec(n),a=Ma.lastIndex;let o=r[1];const u=r[2]==="]",l=r[3];if(u&&(o=o|0),l===void 0||l==="["&&a+2===s){Zl(t,l===void 0?new o0(o,i,e):new l0(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new c0(o),Zl(t,d)),t=d}}}class ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),u=e.getUniformLocation(t,o.name);u0(o,u,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],u=n[o.id];u.needsUpdate!==!1&&o.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function $l(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const h0=37297;let d0=0;function f0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Jl=new Ie;function p0(i){je._getMatrix(Jl,je.workingColorSpace,i);const e=`mat3( ${Jl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case yr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ql(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f0(i.getShaderSource(e),o)}else return r}function m0(i,e){const t=p0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const g0={[Tc]:"Linear",[Ac]:"Reinhard",[wc]:"Cineon",[Po]:"ACESFilmic",[Rc]:"AgX",[Pc]:"Neutral",[Cc]:"Custom"};function _0(i,e){const t=g0[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new P;function x0(){je.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function M0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function us(i){return i!==""}function ec(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(y0,b0)}const E0=new Map;function b0(i,e){let t=Ue[e];if(t===void 0){const n=E0.get(e);if(n!==void 0)t=Ue[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yo(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nc(i){return i.replace(T0,A0)}function A0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ic(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const w0={[sr]:"SHADOWMAP_TYPE_PCF",[cs]:"SHADOWMAP_TYPE_VSM"};function C0(i){return w0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R0={[gi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function P0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const D0={[Gi]:"ENVMAP_MODE_REFRACTION"};function L0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":D0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I0={[bc]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function U0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":I0[i.combine]||"ENVMAP_BLENDING_NONE"}function N0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function F0(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const u=C0(t),l=P0(t),c=L0(t),d=U0(t),f=N0(t),m=v0(t),_=M0(r),g=s.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(us).join(`
`),h.length>0&&(h+=`
`)):(p=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),h=[ic(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Mn?_0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,m0("linearToOutputTexel",t.outputColorSpace),x0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),a=yo(a),a=ec(a,t),a=tc(a,t),o=yo(o),o=ec(o,t),o=tc(o,t),a=nc(a),o=nc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=S+p+a,E=S+h+o,T=$l(s,s.VERTEX_SHADER,b),w=$l(s,s.FRAGMENT_SHADER,E);s.attachShader(g,T),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(T)||"",V=s.getShaderInfoLog(w)||"",H=I.trim(),z=O.trim(),B=V.trim();let q=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,w);else{const te=Ql(s,T,"vertex"),ie=Ql(s,w,"fragment");Ye("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+te+`
`+ie)}else H!==""?Re("WebGLProgram: Program Info Log:",H):(z===""||B==="")&&(J=!1);J&&(R.diagnostics={runnable:q,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:h}})}s.deleteShader(T),s.deleteShader(w),F=new ur(s,g),v=S0(s,g)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,h0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}let O0=0;class B0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z0(e),t.set(e,n)),n}}class z0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function k0(i,e,t,n,s,r,a){const o=new Ho,u=new B0,l=new Set,c=[],d=new Map,f=s.logarithmicDepthBuffer;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,M,R,I,O){const V=I.fog,H=O.geometry,z=v.isMeshStandardMaterial?I.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),q=B&&B.mapping===Pr?B.image.height:null,J=_[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ie=te!==void 0?te.length:0;let Ee=0;H.morphAttributes.position!==void 0&&(Ee=1),H.morphAttributes.normal!==void 0&&(Ee=2),H.morphAttributes.color!==void 0&&(Ee=3);let Ae,Ve,Ge,Y;if(J){const Je=gn[J];Ae=Je.vertexShader,Ve=Je.fragmentShader}else Ae=v.vertexShader,Ve=v.fragmentShader,u.update(v),Ge=u.getVertexShaderID(v),Y=u.getFragmentShaderID(v);const $=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),we=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,We=!!v.map,_t=!!v.matcap,He=!!B,Xe=!!v.aoMap,Ze=!!v.lightMap,Oe=!!v.bumpMap,xt=!!v.normalMap,D=!!v.displacementMap,vt=!!v.emissiveMap,$e=!!v.metalnessMap,rt=!!v.roughnessMap,ve=v.anisotropy>0,A=v.clearcoat>0,x=v.dispersion>0,U=v.iridescence>0,j=v.sheen>0,Z=v.transmission>0,X=ve&&!!v.anisotropyMap,Se=A&&!!v.clearcoatMap,re=A&&!!v.clearcoatNormalMap,xe=A&&!!v.clearcoatRoughnessMap,Pe=U&&!!v.iridescenceMap,ee=U&&!!v.iridescenceThicknessMap,oe=j&&!!v.sheenColorMap,_e=j&&!!v.sheenRoughnessMap,Me=!!v.specularMap,ae=!!v.specularColorMap,Be=!!v.specularIntensityMap,L=Z&&!!v.transmissionMap,he=Z&&!!v.thicknessMap,ne=!!v.gradientMap,fe=!!v.alphaMap,Q=v.alphaTest>0,K=!!v.alphaHash,se=!!v.extensions;let Le=Mn;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Le=i.toneMapping);const at={shaderID:J,shaderType:v.type,shaderName:v.name,vertexShader:Ae,fragmentShader:Ve,defines:v.defines,customVertexShaderID:Ge,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Xi,alphaToCoverage:!!v.alphaToCoverage,map:We,matcap:_t,envMap:He,envMapMode:He&&B.mapping,envMapCubeUVHeight:q,aoMap:Xe,lightMap:Ze,bumpMap:Oe,normalMap:xt,displacementMap:D,emissiveMap:vt,normalMapObjectSpace:xt&&v.normalMapType===Ju,normalMapTangentSpace:xt&&v.normalMapType===zc,metalnessMap:$e,roughnessMap:rt,anisotropy:ve,anisotropyMap:X,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:re,clearcoatRoughnessMap:xe,dispersion:x,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:ee,sheen:j,sheenColorMap:oe,sheenRoughnessMap:_e,specularMap:Me,specularColorMap:ae,specularIntensityMap:Be,transmission:Z,transmissionMap:L,thicknessMap:he,gradientMap:ne,opaque:v.transparent===!1&&v.blending===fi&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:K,combine:v.combine,mapUv:We&&g(v.map.channel),aoMapUv:Xe&&g(v.aoMap.channel),lightMapUv:Ze&&g(v.lightMap.channel),bumpMapUv:Oe&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:D&&g(v.displacementMap.channel),emissiveMapUv:vt&&g(v.emissiveMap.channel),metalnessMapUv:$e&&g(v.metalnessMap.channel),roughnessMapUv:rt&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:Se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(v.sheenRoughnessMap.channel),specularMapUv:Me&&g(v.specularMap.channel),specularColorMapUv:ae&&g(v.specularColorMap.channel),specularIntensityMapUv:Be&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:he&&g(v.thicknessMap.channel),alphaMapUv:fe&&g(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(xt||ve),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(We||fe),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:We&&v.map.isVideoTexture===!0&&je.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:vt&&v.emissiveMap.isVideoTexture===!0&&je.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function h(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(S(M,v),b(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function S(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function b(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function E(v){const M=_[v.type];let R;if(M){const I=gn[M];R=Hh.clone(I.uniforms)}else R=v.uniforms;return R}function T(v,M){let R=d.get(M);return R!==void 0?++R.usedTimes:(R=new F0(i,M,v,r),c.push(R),d.set(M,R)),R}function w(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),d.delete(v.cacheKey),v.destroy()}}function C(v){u.remove(v)}function F(){u.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:T,releaseProgram:w,releaseShaderCache:C,programs:c,dispose:F}}function H0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,u){i.get(a)[o]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,_,g,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function o(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function u(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||V0),n.length>1&&n.sort(f||sc),s.length>1&&s.sort(f||sc)}function c(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:u,finish:c,sort:l}}function G0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new rc,i.set(n,[a])):s>=r.length?(a=new rc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function W0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ze};break;case"SpotLight":t={position:new P,direction:new P,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function X0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let q0=0;function Y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j0(i){const e=new W0,t=X0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const s=new P,r=new lt,a=new lt;function o(l){let c=0,d=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,S=0,b=0,E=0,T=0,w=0,C=0;l.sort(Y0);for(let v=0,M=l.length;v<M;v++){const R=l[v],I=R.color,O=R.intensity,V=R.distance;let H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Wi?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=I.r*O,d+=I.g*O,f+=I.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const B=R.shadow,q=t.get(R);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=H,n.directionalShadowMatrix[m]=R.shadow.matrix,S++}n.directional[m]=z,m++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(I).multiplyScalar(O),z.distance=V,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[g]=z;const B=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,B.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[g]=B.matrix,R.castShadow){const q=t.get(R);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=H,E++}g++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(I).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=z,p++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const B=R.shadow,q=t.get(R);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=H,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=z,_++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[h]=z,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==g||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==S||F.numPointShadows!==b||F.numSpotShadows!==E||F.numSpotMaps!==T||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=E+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,F.directionalLength=m,F.pointLength=_,F.spotLength=g,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=S,F.numPointShadows=b,F.numSpotShadows=E,F.numSpotMaps=T,F.numLightProbes=C,n.version=q0++)}function u(l,c){let d=0,f=0,m=0,_=0,g=0;const p=c.matrixWorldInverse;for(let h=0,S=l.length;h<S;h++){const b=l[h];if(b.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(b.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const E=n.hemi[g];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:o,setupView:u,state:n}}function ac(i){const e=new j0(i),t=[],n=[];function s(c){l.camera=c,t.length=0,n.length=0}function r(c){t.push(c)}function a(c){n.push(c)}function o(){e.setup(t)}function u(c){e.setupView(t,c)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:u,pushLight:r,pushShadow:a}}function K0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new ac(i),e.set(s,[o])):r>=a.length?(o=new ac(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`,J0=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Q0=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],oc=new lt,ls=new P,Sa=new P;function eg(i,e,t){let n=new Vo;const s=new De,r=new De,a=new pt,o=new sd,u=new rd,l={},c=t.maxTextureSize,d={[$n]:Ut,[Ut]:$n,[It]:It},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:Z0,fragmentShader:$0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new st;_.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ne(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sr;let h=this.type;this.render=function(w,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===Ru&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=sr);const v=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const O=h!==this.type;O&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(H=>H.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,H=w.length;V<H;V++){const z=w[V],B=z.shadow;if(B===void 0){Re("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const q=B.getFrameExtents();if(s.multiply(q),r.copy(B.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/q.x),s.x=r.x*q.x,B.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/q.y),s.y=r.y*q.y,B.mapSize.y=r.y)),B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===cs){if(z.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Sn(s.x,s.y,{format:Wi,type:Bn,minFilter:yt,magFilter:yt,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new Es(s.x,s.y,xn),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=zn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt}else{z.isPointLight?(B.map=new jc(s.x),B.map.depthTexture=new Jh(s.x,En)):(B.map=new Sn(s.x,s.y),B.map.depthTexture=new Es(s.x,s.y,En)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=zn;const te=i.state.buffers.depth.getReversed();this.type===sr?(B.map.depthTexture.compareFunction=te?Bo:Oo,B.map.depthTexture.minFilter=yt,B.map.depthTexture.magFilter=yt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rt,B.map.depthTexture.magFilter=Rt)}B.camera.updateProjectionMatrix()}const J=B.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<J;te++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,te),i.clear();else{te===0&&(i.setRenderTarget(B.map),i.clear());const ie=B.getViewport(te);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),I.viewport(a)}if(z.isPointLight){const ie=B.camera,Ee=B.matrix,Ae=z.distance||ie.far;Ae!==ie.far&&(ie.far=Ae,ie.updateProjectionMatrix()),ls.setFromMatrixPosition(z.matrixWorld),ie.position.copy(ls),Sa.copy(ie.position),Sa.add(J0[te]),ie.up.copy(Q0[te]),ie.lookAt(Sa),ie.updateMatrixWorld(),Ee.makeTranslation(-ls.x,-ls.y,-ls.z),oc.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),B._frustum.setFromProjectionMatrix(oc,ie.coordinateSystem,ie.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),E(C,F,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===cs&&S(B,F),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(v,M,R)};function S(w,C){const F=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Sn(s.x,s.y,{format:Wi,type:Bn})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,F,m,g,null)}function b(w,C,F,v){let M=null;const R=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)M=R;else if(M=F.isPointLight===!0?u:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=M.uuid,O=C.uuid;let V=l[I];V===void 0&&(V={},l[I]=V);let H=V[O];H===void 0&&(H=M.clone(),V[O]=H,C.addEventListener("dispose",T)),M=H}if(M.visible=C.visible,M.wireframe=C.wireframe,v===cs?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=F}return M}function E(w,C,F,v,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===cs)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const O=e.update(w),V=w.material;if(Array.isArray(V)){const H=O.groups;for(let z=0,B=H.length;z<B;z++){const q=H[z],J=V[q.materialIndex];if(J&&J.visible){const te=b(w,J,v,M);w.onBeforeShadow(i,w,C,F,O,te,q),i.renderBufferDirect(F,null,O,te,w,q),w.onAfterShadow(i,w,C,F,O,te,q)}}}else if(V.visible){const H=b(w,V,v,M);w.onBeforeShadow(i,w,C,F,O,H,null),i.renderBufferDirect(F,null,O,H,w,null),w.onAfterShadow(i,w,C,F,O,H,null)}}const I=w.children;for(let O=0,V=I.length;O<V;O++)E(I[O],C,F,v,M)}function T(w){w.target.removeEventListener("dispose",T);for(const F in l){const v=l[F],M=w.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const tg={[Pa]:Da,[La]:Na,[Ia]:Fa,[Vi]:Ua,[Da]:Pa,[Na]:La,[Fa]:Ia,[Ua]:Vi};function ng(i,e){function t(){let L=!1;const he=new pt;let ne=null;const fe=new pt(0,0,0,0);return{setMask:function(Q){ne!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),ne=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,se,Le,at){at===!0&&(Q*=Le,K*=Le,se*=Le),he.set(Q,K,se,Le),fe.equals(he)===!1&&(i.clearColor(Q,K,se,Le),fe.copy(he))},reset:function(){L=!1,ne=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,he=!1,ne=null,fe=null,Q=null;return{setReversed:function(K){if(he!==K){const se=e.get("EXT_clip_control");K?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Le=Q;Q=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(K){K?$(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(K){ne!==K&&!L&&(i.depthMask(K),ne=K)},setFunc:function(K){if(he&&(K=tg[K]),fe!==K){switch(K){case Pa:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case La:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case Ua:i.depthFunc(i.GEQUAL);break;case Na:i.depthFunc(i.GREATER);break;case Fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(he&&(K=1-K),i.clearDepth(K),Q=K)},reset:function(){L=!1,ne=null,fe=null,Q=null,he=!1}}}function s(){let L=!1,he=null,ne=null,fe=null,Q=null,K=null,se=null,Le=null,at=null;return{setTest:function(Je){L||(Je?$(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Je){he!==Je&&!L&&(i.stencilMask(Je),he=Je)},setFunc:function(Je,pn,wn){(ne!==Je||fe!==pn||Q!==wn)&&(i.stencilFunc(Je,pn,wn),ne=Je,fe=pn,Q=wn)},setOp:function(Je,pn,wn){(K!==Je||se!==pn||Le!==wn)&&(i.stencilOp(Je,pn,wn),K=Je,se=pn,Le=wn)},setLocked:function(Je){L=Je},setClear:function(Je){at!==Je&&(i.clearStencil(Je),at=Je)},reset:function(){L=!1,he=null,ne=null,fe=null,Q=null,K=null,se=null,Le=null,at=null}}}const r=new t,a=new n,o=new s,u=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,b=null,E=null,T=null,w=null,C=new ze(0,0,0),F=0,v=!1,M=null,R=null,I=null,O=null,V=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=B>=2);let J=null,te={};const ie=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Ae=new pt().fromArray(ie),Ve=new pt().fromArray(Ee);function Ge(L,he,ne,fe){const Q=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ne;se++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(he+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return K}const Y={};Y[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Vi),Oe(!1),xt(il),$(i.CULL_FACE),Xe(Fn);function $(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function de(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function we(L,he){return d[L]!==he?(i.bindFramebuffer(L,he),d[L]=he,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ge(L,he){let ne=m,fe=!1;if(L){ne=f.get(he),ne===void 0&&(ne=[],f.set(he,ne));const Q=L.textures;if(ne.length!==Q.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let K=0,se=Q.length;K<se;K++)ne[K]=i.COLOR_ATTACHMENT0+K;ne.length=Q.length,fe=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,fe=!0);fe&&i.drawBuffers(ne)}function We(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const _t={[ui]:i.FUNC_ADD,[Du]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};_t[Iu]=i.MIN,_t[Uu]=i.MAX;const He={[Nu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[Ca]:i.SRC_ALPHA,[Gu]:i.SRC_ALPHA_SATURATE,[Hu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[Ra]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[Yu]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(L,he,ne,fe,Q,K,se,Le,at,Je){if(L===Fn){g===!0&&(de(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),L!==Pu){if(L!==p||Je!==v){if((h!==ui||E!==ui)&&(i.blendEquation(i.FUNC_ADD),h=ui,E=ui),Je)switch(L){case fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $t:i.blendFunc(i.ONE,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",L);break}else switch(L){case fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $t:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case sl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",L);break}S=null,b=null,T=null,w=null,C.set(0,0,0),F=0,p=L,v=Je}return}Q=Q||he,K=K||ne,se=se||fe,(he!==h||Q!==E)&&(i.blendEquationSeparate(_t[he],_t[Q]),h=he,E=Q),(ne!==S||fe!==b||K!==T||se!==w)&&(i.blendFuncSeparate(He[ne],He[fe],He[K],He[se]),S=ne,b=fe,T=K,w=se),(Le.equals(C)===!1||at!==F)&&(i.blendColor(Le.r,Le.g,Le.b,at),C.copy(Le),F=at),p=L,v=!1}function Ze(L,he){L.side===It?de(i.CULL_FACE):$(i.CULL_FACE);let ne=L.side===Ut;he&&(ne=!ne),Oe(ne),L.blending===fi&&L.transparent===!1?Xe(Fn):Xe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function xt(L){L!==wu?($(i.CULL_FACE),L!==R&&(L===il?i.cullFace(i.BACK):L===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),R=L}function D(L){L!==I&&(z&&i.lineWidth(L),I=L)}function vt(L,he,ne){L?($(i.POLYGON_OFFSET_FILL),(O!==he||V!==ne)&&(i.polygonOffset(he,ne),O=he,V=ne)):de(i.POLYGON_OFFSET_FILL)}function $e(L){L?$(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function rt(L){L===void 0&&(L=i.TEXTURE0+H-1),J!==L&&(i.activeTexture(L),J=L)}function ve(L,he,ne){ne===void 0&&(J===null?ne=i.TEXTURE0+H-1:ne=J);let fe=te[ne];fe===void 0&&(fe={type:void 0,texture:void 0},te[ne]=fe),(fe.type!==L||fe.texture!==he)&&(J!==ne&&(i.activeTexture(ne),J=ne),i.bindTexture(L,he||Y[L]),fe.type=L,fe.texture=he)}function A(){const L=te[J];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function j(){try{i.texSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Z(){try{i.texSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function re(){try{i.texStorage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function xe(){try{i.texStorage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function Pe(){try{i.texImage2D(...arguments)}catch(L){Ye("WebGLState:",L)}}function ee(){try{i.texImage3D(...arguments)}catch(L){Ye("WebGLState:",L)}}function oe(L){Ae.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ae.copy(L))}function _e(L){Ve.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Me(L,he){let ne=l.get(he);ne===void 0&&(ne=new WeakMap,l.set(he,ne));let fe=ne.get(L);fe===void 0&&(fe=i.getUniformBlockIndex(he,L.name),ne.set(L,fe))}function ae(L,he){const fe=l.get(he).get(L);u.get(he)!==fe&&(i.uniformBlockBinding(he,fe,L.__bindingPointIndex),u.set(he,fe))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},J=null,te={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,b=null,E=null,T=null,w=null,C=new ze(0,0,0),F=0,v=!1,M=null,R=null,I=null,O=null,V=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:de,bindFramebuffer:we,drawBuffers:ge,useProgram:We,setBlending:Xe,setMaterial:Ze,setFlipSided:Oe,setCullFace:xt,setLineWidth:D,setPolygonOffset:vt,setScissorTest:$e,activeTexture:rt,bindTexture:ve,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Pe,texImage3D:ee,updateUBOMapping:Me,uniformBlockBinding:ae,texStorage2D:re,texStorage3D:xe,texSubImage2D:j,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:oe,viewport:_e,reset:Be}}function ig(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,c=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Ms("canvas")}function g(A,x,U){let j=1;const Z=ve(A);if((Z.width>U||Z.height>U)&&(j=U/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(j*Z.width),Se=Math.floor(j*Z.height);d===void 0&&(d=_(X,Se));const re=x?_(X,Se):d;return re.width=X,re.height=Se,re.getContext("2d").drawImage(A,0,0,X,Se),Re("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+Se+")."),re}else return"data"in A&&Re("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,x,U,j,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=x;if(x===i.RED&&(U===i.FLOAT&&(X=i.R32F),U===i.HALF_FLOAT&&(X=i.R16F),U===i.UNSIGNED_BYTE&&(X=i.R8)),x===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.R8UI),U===i.UNSIGNED_SHORT&&(X=i.R16UI),U===i.UNSIGNED_INT&&(X=i.R32UI),U===i.BYTE&&(X=i.R8I),U===i.SHORT&&(X=i.R16I),U===i.INT&&(X=i.R32I)),x===i.RG&&(U===i.FLOAT&&(X=i.RG32F),U===i.HALF_FLOAT&&(X=i.RG16F),U===i.UNSIGNED_BYTE&&(X=i.RG8)),x===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RG8UI),U===i.UNSIGNED_SHORT&&(X=i.RG16UI),U===i.UNSIGNED_INT&&(X=i.RG32UI),U===i.BYTE&&(X=i.RG8I),U===i.SHORT&&(X=i.RG16I),U===i.INT&&(X=i.RG32I)),x===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGB8UI),U===i.UNSIGNED_SHORT&&(X=i.RGB16UI),U===i.UNSIGNED_INT&&(X=i.RGB32UI),U===i.BYTE&&(X=i.RGB8I),U===i.SHORT&&(X=i.RGB16I),U===i.INT&&(X=i.RGB32I)),x===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),U===i.UNSIGNED_INT&&(X=i.RGBA32UI),U===i.BYTE&&(X=i.RGBA8I),U===i.SHORT&&(X=i.RGBA16I),U===i.INT&&(X=i.RGBA32I)),x===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),x===i.RGBA){const Se=Z?yr:je.getTransfer(j);U===i.FLOAT&&(X=i.RGBA32F),U===i.HALF_FLOAT&&(X=i.RGBA16F),U===i.UNSIGNED_BYTE&&(X=Se===et?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function E(A,x){let U;return A?x===null||x===En||x===vs?U=i.DEPTH24_STENCIL8:x===xn?U=i.DEPTH32F_STENCIL8:x===xs&&(U=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===En||x===vs?U=i.DEPTH_COMPONENT24:x===xn?U=i.DEPTH_COMPONENT32F:x===xs&&(U=i.DEPTH_COMPONENT16),U}function T(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==yt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),F(x),x.isVideoTexture&&c.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),M(x)}function F(A){const x=n.get(A);if(x.__webglInit===void 0)return;const U=A.source,j=f.get(U);if(j){const Z=j[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&v(A),Object.keys(j).length===0&&f.delete(U)}n.remove(A)}function v(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const U=A.source,j=f.get(U);delete j[x.__cacheKey],a.memory.textures--}function M(A){const x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let Z=0;Z<x.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let j=0,Z=U.length;j<Z;j++){const X=n.get(U[j]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(U[j])}n.remove(A)}let R=0;function I(){R=0}function O(){const A=R;return A>=s.maxTextures&&Re("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function H(A,x){const U=n.get(A);if(A.isVideoTexture&&$e(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const j=A.image;if(j===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+x)}function z(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+x)}function B(A,x){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){Y(U,A,x);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+x)}function q(A,x){const U=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){$(U,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+x)}const J={[Nn]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[za]:i.MIRRORED_REPEAT},te={[Rt]:i.NEAREST,[Zu]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[yt]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ie={[Qu]:i.NEVER,[sh]:i.ALWAYS,[eh]:i.LESS,[Oo]:i.LEQUAL,[th]:i.EQUAL,[Bo]:i.GEQUAL,[nh]:i.GREATER,[ih]:i.NOTEQUAL};function Ee(A,x){if(x.type===xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===yt||x.magFilter===kr||x.magFilter===Ds||x.magFilter===jn||x.minFilter===yt||x.minFilter===kr||x.minFilter===Ds||x.minFilter===jn)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,J[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,J[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,J[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,te[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ie[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Rt||x.minFilter!==Ds&&x.minFilter!==jn||x.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ae(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const j=x.source;let Z=f.get(j);Z===void 0&&(Z={},f.set(j,Z));const X=V(x);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[X].usedTimes++;const Se=Z[A.__cacheKey];Se!==void 0&&(Z[A.__cacheKey].usedTimes--,Se.usedTimes===0&&v(x)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return U}function Ve(A,x,U){return Math.floor(Math.floor(A/U)/x)}function Ge(A,x,U,j){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,U,j,x.data);else{X.sort((ee,oe)=>ee.start-oe.start);let Se=0;for(let ee=1;ee<X.length;ee++){const oe=X[Se],_e=X[ee],Me=oe.start+oe.count,ae=Ve(_e.start,x.width,4),Be=Ve(oe.start,x.width,4);_e.start<=Me+1&&ae===Be&&Ve(_e.start+_e.count-1,x.width,4)===ae?oe.count=Math.max(oe.count,_e.start+_e.count-oe.start):(++Se,X[Se]=_e)}X.length=Se+1;const re=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ee=0,oe=X.length;ee<oe;ee++){const _e=X[ee],Me=Math.floor(_e.start/4),ae=Math.ceil(_e.count/4),Be=Me%x.width,L=Math.floor(Me/x.width),he=ae,ne=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,he,ne,U,j,x.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pe)}}function Y(A,x,U){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const Z=Ae(A,x),X=x.source;t.bindTexture(j,A.__webglTexture,i.TEXTURE0+U);const Se=n.get(X);if(X.version!==Se.__version||Z===!0){t.activeTexture(i.TEXTURE0+U);const re=je.getPrimaries(je.workingColorSpace),xe=x.colorSpace===Yn?null:je.getPrimaries(x.colorSpace),Pe=x.colorSpace===Yn||re===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ee=g(x.image,!1,s.maxTextureSize);ee=rt(x,ee);const oe=r.convert(x.format,x.colorSpace),_e=r.convert(x.type);let Me=b(x.internalFormat,oe,_e,x.colorSpace,x.isVideoTexture);Ee(j,x);let ae;const Be=x.mipmaps,L=x.isVideoTexture!==!0,he=Se.__version===void 0||Z===!0,ne=X.dataReady,fe=T(x,ee);if(x.isDepthTexture)Me=E(x.format===di,x.type),he&&(L?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,oe,_e,null));else if(x.isDataTexture)if(Be.length>0){L&&he&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)ae=Be[Q],L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,oe,_e,ae.data);x.generateMipmaps=!1}else L?(he&&t.texStorage2D(i.TEXTURE_2D,fe,Me,ee.width,ee.height),ne&&Ge(x,ee,oe,_e)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,oe,_e,ee.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,Be[0].width,Be[0].height,ee.depth);for(let Q=0,K=Be.length;Q<K;Q++)if(ae=Be[Q],x.format!==cn)if(oe!==null)if(L){if(ne)if(x.layerUpdates.size>0){const se=Bl(ae.width,ae.height,x.format,x.type);for(const Le of x.layerUpdates){const at=ae.data.subarray(Le*se/ae.data.BYTES_PER_ELEMENT,(Le+1)*se/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Le,ae.width,ae.height,1,oe,at)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ae.width,ae.height,ee.depth,0,ae.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ae.width,ae.height,ee.depth,oe,_e,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,ae.width,ae.height,ee.depth,0,oe,_e,ae.data)}else{L&&he&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)ae=Be[Q],x.format!==cn?oe!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,ae.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae.width,ae.height,oe,_e,ae.data):t.texImage2D(i.TEXTURE_2D,Q,Me,ae.width,ae.height,0,oe,_e,ae.data)}else if(x.isDataArrayTexture)if(L){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,ee.width,ee.height,ee.depth),ne)if(x.layerUpdates.size>0){const Q=Bl(ee.width,ee.height,x.format,x.type);for(const K of x.layerUpdates){const se=ee.data.subarray(K*Q/ee.data.BYTES_PER_ELEMENT,(K+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,oe,_e,se)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(x.isData3DTexture)L?(he&&t.texStorage3D(i.TEXTURE_3D,fe,Me,ee.width,ee.height,ee.depth),ne&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,_e,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,oe,_e,ee.data);else if(x.isFramebufferTexture){if(he)if(L)t.texStorage2D(i.TEXTURE_2D,fe,Me,ee.width,ee.height);else{let Q=ee.width,K=ee.height;for(let se=0;se<fe;se++)t.texImage2D(i.TEXTURE_2D,se,Me,Q,K,0,oe,_e,null),Q>>=1,K>>=1}}else if(Be.length>0){if(L&&he){const Q=ve(Be[0]);t.texStorage2D(i.TEXTURE_2D,fe,Me,Q.width,Q.height)}for(let Q=0,K=Be.length;Q<K;Q++)ae=Be[Q],L?ne&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe,_e,ae):t.texImage2D(i.TEXTURE_2D,Q,Me,oe,_e,ae);x.generateMipmaps=!1}else if(L){if(he){const Q=ve(ee);t.texStorage2D(i.TEXTURE_2D,fe,Me,Q.width,Q.height)}ne&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,_e,ee)}else t.texImage2D(i.TEXTURE_2D,0,Me,oe,_e,ee);p(x)&&h(j),Se.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,U){if(x.image.length!==6)return;const j=Ae(A,x),Z=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const X=n.get(Z);if(Z.version!==X.__version||j===!0){t.activeTexture(i.TEXTURE0+U);const Se=je.getPrimaries(je.workingColorSpace),re=x.colorSpace===Yn?null:je.getPrimaries(x.colorSpace),xe=x.colorSpace===Yn||Se===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!Pe&&!ee?oe[K]=g(x.image[K],!0,s.maxCubemapSize):oe[K]=ee?x.image[K].image:x.image[K],oe[K]=rt(x,oe[K]);const _e=oe[0],Me=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),Be=b(x.internalFormat,Me,ae,x.colorSpace),L=x.isVideoTexture!==!0,he=X.__version===void 0||j===!0,ne=Z.dataReady;let fe=T(x,_e);Ee(i.TEXTURE_CUBE_MAP,x);let Q;if(Pe){L&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Be,_e.width,_e.height);for(let K=0;K<6;K++){Q=oe[K].mipmaps;for(let se=0;se<Q.length;se++){const Le=Q[se];x.format!==cn?Me!==null?L?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Be,Le.width,Le.height,0,Le.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,0,0,Le.width,Le.height,Me,ae,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se,Be,Le.width,Le.height,0,Me,ae,Le.data)}}}else{if(Q=x.mipmaps,L&&he){Q.length>0&&fe++;const K=ve(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Be,K.width,K.height)}for(let K=0;K<6;K++)if(ee){L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,Me,ae,oe[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,oe[K].width,oe[K].height,0,Me,ae,oe[K].data);for(let se=0;se<Q.length;se++){const at=Q[se].image[K].image;L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,at.width,at.height,Me,ae,at.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Be,at.width,at.height,0,Me,ae,at.data)}}else{L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,ae,oe[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Me,ae,oe[K]);for(let se=0;se<Q.length;se++){const Le=Q[se];L?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,0,0,Me,ae,Le.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se+1,Be,Me,ae,Le.image[K])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),X.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function de(A,x,U,j,Z,X){const Se=r.convert(U.format,U.colorSpace),re=r.convert(U.type),xe=b(U.internalFormat,Se,re,U.colorSpace),Pe=n.get(x),ee=n.get(U);if(ee.__renderTarget=x,!Pe.__hasExternalTextures){const oe=Math.max(1,x.width>>X),_e=Math.max(1,x.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,xe,oe,_e,x.depth,0,Se,re,null):t.texImage2D(Z,X,xe,oe,_e,0,Se,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,ee.__webglTexture,0,D(x)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,ee.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(A,x,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const j=x.depthTexture,Z=j&&j.isDepthTexture?j.type:null,X=E(x.stencilBuffer,Z),Se=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(x),X,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(x),X,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,X,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const j=x.textures;for(let Z=0;Z<j.length;Z++){const X=j[Z],Se=r.convert(X.format,X.colorSpace),re=r.convert(X.type),xe=b(X.internalFormat,Se,re,X.colorSpace);vt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,D(x),xe,x.width,x.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,D(x),xe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,xe,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(A,x,U){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=r.convert(x.depthTexture.format),ee=r.convert(x.depthTexture.type);let oe;x.depthTexture.format===zn?oe=i.DEPTH_COMPONENT24:x.depthTexture.format===di&&(oe=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,oe,x.width,x.height,0,Pe,ee,null)}}else H(x.depthTexture,0);const X=Z.__webglTexture,Se=D(x),re=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+U:i.TEXTURE_2D,xe=x.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===zn)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,re,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,re,X,0);else if(x.depthTexture.format===di)vt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,re,X,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,re,X,0);else throw new Error("Unknown depthTexture format")}function We(A){const x=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=j}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let j=0;j<6;j++)ge(x.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?ge(x.__webglFramebuffer[0],A,0):ge(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),we(x.__webglDepthbuffer[j],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),we(x.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(A,x,U){const j=n.get(A);x!==void 0&&de(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&We(A)}function He(A){const x=A.texture,U=n.get(A),j=n.get(x);A.addEventListener("dispose",C);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),X){U.__webglFramebuffer=[];for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[re]=[];for(let xe=0;xe<x.mipmaps.length;xe++)U.__webglFramebuffer[re][xe]=i.createFramebuffer()}else U.__webglFramebuffer[re]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)U.__webglFramebuffer[re]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Se)for(let re=0,xe=Z.length;re<xe;re++){const Pe=n.get(Z[re]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&vt(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const xe=Z[re];U.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[re]);const Pe=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),oe=b(xe.internalFormat,Pe,ee,xe.colorSpace,A.isXRRenderTarget===!0),_e=D(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,oe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,U.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),we(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,x);for(let re=0;re<6;re++)if(x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)de(U.__webglFramebuffer[re][xe],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,xe);else de(U.__webglFramebuffer[re],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(x)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let re=0,xe=Z.length;re<xe;re++){const Pe=Z[re],ee=n.get(Pe);let oe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),Ee(oe,Pe),de(U.__webglFramebuffer,A,Pe,i.COLOR_ATTACHMENT0+re,oe,0),p(Pe)&&h(oe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),Ee(re,x),x.mipmaps&&x.mipmaps.length>0)for(let xe=0;xe<x.mipmaps.length;xe++)de(U.__webglFramebuffer[xe],A,x,i.COLOR_ATTACHMENT0,re,xe);else de(U.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,re,0);p(x)&&h(re),t.unbindTexture()}A.depthBuffer&&We(A)}function Xe(A){const x=A.textures;for(let U=0,j=x.length;U<j;U++){const Z=x[U];if(p(Z)){const X=S(A),Se=n.get(Z).__webglTexture;t.bindTexture(X,Se),h(X),t.unbindTexture()}}}const Ze=[],Oe=[];function xt(A){if(A.samples>0){if(vt(A)===!1){const x=A.textures,U=A.width,j=A.height;let Z=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),re=x.length>1;if(re)for(let Pe=0;Pe<x.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const xe=A.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const ee=n.get(x[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,j,0,0,U,j,Z,i.NEAREST),u===!0&&(Ze.length=0,Oe.length=0,Ze.push(i.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ze.push(X),Oe.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Pe=0;Pe<x.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Pe]);const ee=n.get(x[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&u){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function D(A){return Math.min(s.maxSamples,A.samples)}function vt(A){const x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $e(A){const x=a.render.frame;c.get(A)!==x&&(c.set(A,x),A.update())}function rt(A,x){const U=A.colorSpace,j=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==Xi&&U!==Yn&&(je.getTransfer(U)===et?(j!==cn||Z!==Jt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",U)),x}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=I,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=_t,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function sg(i,e){function t(n,s=Yn){let r;const a=je.getTransfer(s);if(n===Jt)return i.UNSIGNED_BYTE;if(n===Lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Io)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lc)return i.BYTE;if(n===Ic)return i.SHORT;if(n===xs)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Fc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===cn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===Uo)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===No)return i.RG_INTEGER;if(n===Fo)return i.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===lr)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ka||n===Ha||n===Va||n===Ga)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wa||n===Xa)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ya)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ka)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ja||n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===uo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===to)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ho||n===fo||n===po)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ho)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mo||n===go||n===_o||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ag=`
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

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:rg,fragmentShader:ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ne(new Lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lg extends xi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",u=1,l=null,c=null,d=null,f=null,m=null,_=null;const g=typeof XRWebGLBinding<"u",p=new og,h={},S=t.getContextAttributes();let b=null,E=null;const T=[],w=[],C=new De;let F=null;const v=new Wt;v.viewport=new pt;const M=new Wt;M.viewport=new pt;const R=[v,M],I=new pd;let O=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=T[Y];return $===void 0&&($=new oa,T[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=T[Y];return $===void 0&&($=new oa,T[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=T[Y];return $===void 0&&($=new oa,T[Y]=$),$.getHandSpace()};function H(Y){const $=w.indexOf(Y.inputSource);if($===-1)return;const de=T[$];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||a),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<T.length;Y++){const $=w[Y];$!==null&&(w[Y]=null,T[Y].disconnect($))}O=null,V=null,p.reset();for(const Y in h)delete h[Y];e.setRenderTarget(b),m=null,f=null,d=null,s=null,E=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,ge=null;S.depth&&(ge=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?di:zn,we=S.stencil?vs:En);const We={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(We),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new Sn(f.textureWidth,f.textureHeight,{format:cn,type:Jt,depthTexture:new Es(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Sn(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(u),l=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function B(Y){for(let $=0;$<Y.removed.length;$++){const de=Y.removed[$],we=w.indexOf(de);we>=0&&(w[we]=null,T[we].disconnect(de))}for(let $=0;$<Y.added.length;$++){const de=Y.added[$];let we=w.indexOf(de);if(we===-1){for(let We=0;We<T.length;We++)if(We>=w.length){w.push(de),we=We;break}else if(w[We]===null){w[We]=de,we=We;break}if(we===-1)break}const ge=T[we];ge&&ge.connect(de)}}const q=new P,J=new P;function te(Y,$,de){q.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(de.matrixWorld);const we=q.distanceTo(J),ge=$.projectionMatrix.elements,We=de.projectionMatrix.elements,_t=ge[14]/(ge[10]-1),He=ge[14]/(ge[10]+1),Xe=(ge[9]+1)/ge[5],Ze=(ge[9]-1)/ge[5],Oe=(ge[8]-1)/ge[0],xt=(We[8]+1)/We[0],D=_t*Oe,vt=_t*xt,$e=we/(-Oe+xt),rt=$e*-Oe;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(rt),Y.translateZ($e),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ve=_t+$e,A=He+$e,x=D-rt,U=vt+(we-rt),j=Xe*He/A*ve,Z=Ze*He/A*ve;Y.projectionMatrix.makePerspective(x,U,j,Z,ve,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ie(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let $=Y.near,de=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(de=p.depthFar)),I.near=M.near=v.near=$,I.far=M.far=v.far=de,(O!==I.near||V!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),O=I.near,V=I.far),I.layers.mask=Y.layers.mask|6,v.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const we=Y.parent,ge=I.cameras;ie(I,we);for(let We=0;We<ge.length;We++)ie(ge[We],we);ge.length===2?te(I,v,M):I.projectionMatrix.copy(v.projectionMatrix),Ee(Y,I,we)};function Ee(Y,$,de){de===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&m===null))return u},this.setFoveation=function(Y){u=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(Y){return h[Y]};let Ae=null;function Ve(Y,$){if(c=$.getViewerPose(l||a),_=$,c!==null){const de=c.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let we=!1;de.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let He=0;He<de.length;He++){const Xe=de[He];let Ze=null;if(m!==null)Ze=m.getViewport(Xe);else{const xt=d.getViewSubImage(f,Xe);Ze=xt.viewport,He===0&&(e.setRenderTargetTextures(E,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(E))}let Oe=R[He];Oe===void 0&&(Oe=new Wt,Oe.layers.enable(He),Oe.viewport=new pt,R[He]=Oe),Oe.matrix.fromArray(Xe.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Xe.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),He===0&&(I.matrix.copy(Oe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(Oe)}const ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const He=d.getDepthInformation(de[0]);He&&He.isValid&&He.texture&&p.init(He,s.renderState)}if(ge&&ge.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let He=0;He<de.length;He++){const Xe=de[He].camera;if(Xe){let Ze=h[Xe];Ze||(Ze=new Zc,h[Xe]=Ze);const Oe=d.getCameraImage(Xe);Ze.sourceTexture=Oe}}}}for(let de=0;de<T.length;de++){const we=w[de],ge=T[de];we!==null&&ge!==void 0&&ge.update(we,$,l||a)}Ae&&Ae(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const Ge=new tu;Ge.setAnimationLoop(Ve),this.setAnimationLoop=function(Y){Ae=Y},this.dispose=function(){}}}const li=new bn,cg=new lt;function ug(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Xc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,S,b,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,E)):h.isMeshMatcapMaterial?(r(p,h),_(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),g(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?u(p,h,S,b):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Ut&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Ut&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),b=S.envMap,E=S.envMapRotation;b&&(p.envMap.value=b,li.copy(E),li.x*=-1,li.y*=-1,li.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),p.envMapRotation.value.setFromMatrix4(cg.makeRotationFromEuler(li)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function u(p,h,S,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ut&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(S,b){const E=b.program;n.uniformBlockBinding(S,E)}function l(S,b){let E=s[S.id];E===void 0&&(_(S),E=c(S),s[S.id]=E,S.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(S,T);const w=e.render.frame;r[S.id]!==w&&(f(S),r[S.id]=w)}function c(S){const b=d();S.__bindingPointIndex=b;const E=i.createBuffer(),T=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=s[S.id],E=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let w=0,C=E.length;w<C;w++){const F=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,M=F.length;v<M;v++){const R=F[v];if(m(R,w,v,T)===!0){const I=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let H=0;H<O.length;H++){const z=O[H],B=g(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,I+V,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,V),V+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,b,E,T){const w=S.value,C=b+"_"+E;if(T[C]===void 0)return typeof w=="number"||typeof w=="boolean"?T[C]=w:T[C]=w.clone(),!0;{const F=T[C];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return T[C]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function _(S){const b=S.uniforms;let E=0;const T=16;for(let C=0,F=b.length;C<F;C++){const v=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,R=v.length;M<R;M++){const I=v[M],O=Array.isArray(I.value)?I.value:[I.value];for(let V=0,H=O.length;V<H;V++){const z=O[V],B=g(z),q=E%T,J=q%B.boundary,te=q+J;E+=J,te!==0&&T-te<B.storage&&(E+=T-te),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=B.storage}}}const w=E%T;return w>0&&(E+=T-w),S.__size=E,S.__cache={},this}function g(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Re("WebGLRenderer: Unsupported uniform value type.",S),b}function p(S){const b=S.target;b.removeEventListener("dispose",p);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:u,update:l,dispose:h}}const dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function fg(){return mn===null&&(mn=new Yh(dg,16,16,Wi,Bn),mn.name="DFG_LUT",mn.minFilter=yt,mn.magFilter=yt,mn.wrapS=_n,mn.wrapT=_n,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class pg{constructor(e={}){const{canvas:t=rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Jt}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=m,p=new Set([Fo,No,Uo]),h=new Set([Jt,En,xs,vs,Lo,Io]),S=new Uint32Array(4),b=new Int32Array(4);let E=null,T=null;const w=[],C=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=Gt;let R=0,I=0,O=null,V=-1,H=null;const z=new pt,B=new pt;let q=null;const J=new ze(0);let te=0,ie=t.width,Ee=t.height,Ae=1,Ve=null,Ge=null;const Y=new pt(0,0,ie,Ee),$=new pt(0,0,ie,Ee);let de=!1;const we=new Vo;let ge=!1,We=!1;const _t=new lt,He=new P,Xe=new pt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function xt(){return O===null?Ae:1}let D=n;function vt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Je,!1),D===null){const N="webgl2";if(D=vt(N,y),D===null)throw vt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ye("WebGLRenderer: "+y.message),y}let $e,rt,ve,A,x,U,j,Z,X,Se,re,xe,Pe,ee,oe,_e,Me,ae,Be,L,he,ne,fe,Q;function K(){$e=new fm(D),$e.init(),ne=new sg(D,$e),rt=new sm(D,$e,e,ne),ve=new ng(D,$e),rt.reversedDepthBuffer&&f&&ve.buffers.depth.setReversed(!0),A=new gm(D),x=new H0,U=new ig(D,$e,ve,x,rt,ne,A),j=new am(v),Z=new dm(v),X=new vd(D),fe=new nm(D,X),Se=new pm(D,X,A,fe),re=new xm(D,Se,X,A),Be=new _m(D,rt,U),_e=new rm(x),xe=new k0(v,j,Z,$e,rt,fe,_e),Pe=new ug(v,x),ee=new G0,oe=new K0($e),ae=new tm(v,j,Z,ve,re,_,u),Me=new eg(v,re,rt),Q=new hg(D,A,rt,ve),L=new im(D,$e,A),he=new mm(D,$e,A),A.programs=xe.programs,v.capabilities=rt,v.extensions=$e,v.properties=x,v.renderLists=ee,v.shadowMap=Me,v.state=ve,v.info=A}K(),g!==Jt&&(F=new Mm(g,t.width,t.height,s,r));const se=new lg(v,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=$e.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=$e.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(y){y!==void 0&&(Ae=y,this.setSize(ie,Ee,!1))},this.getSize=function(y){return y.set(ie,Ee)},this.setSize=function(y,N,W=!0){if(se.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,Ee=N,t.width=Math.floor(y*Ae),t.height=Math.floor(N*Ae),W===!0&&(t.style.width=y+"px",t.style.height=N+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(ie*Ae,Ee*Ae).floor()},this.setDrawingBufferSize=function(y,N,W){ie=y,Ee=N,Ae=W,t.width=Math.floor(y*W),t.height=Math.floor(N*W),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(g===Jt){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(z)},this.getViewport=function(y){return y.copy(Y)},this.setViewport=function(y,N,W,G){y.isVector4?Y.set(y.x,y.y,y.z,y.w):Y.set(y,N,W,G),ve.viewport(z.copy(Y).multiplyScalar(Ae).round())},this.getScissor=function(y){return y.copy($)},this.setScissor=function(y,N,W,G){y.isVector4?$.set(y.x,y.y,y.z,y.w):$.set(y,N,W,G),ve.scissor(B.copy($).multiplyScalar(Ae).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){ve.setScissorTest(de=y)},this.setOpaqueSort=function(y){Ve=y},this.setTransparentSort=function(y){Ge=y},this.getClearColor=function(y){return y.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,W=!0){let G=0;if(y){let k=!1;if(O!==null){const le=O.texture.format;k=p.has(le)}if(k){const le=O.texture.type,pe=h.has(le),ue=ae.getClearColor(),me=ae.getClearAlpha(),ye=ue.r,Ce=ue.g,be=ue.b;pe?(S[0]=ye,S[1]=Ce,S[2]=be,S[3]=me,D.clearBufferuiv(D.COLOR,0,S)):(b[0]=ye,b[1]=Ce,b[2]=be,b[3]=me,D.clearBufferiv(D.COLOR,0,b))}else G|=D.COLOR_BUFFER_BIT}N&&(G|=D.DEPTH_BUFFER_BIT),W&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),ae.dispose(),ee.dispose(),oe.dispose(),x.dispose(),j.dispose(),Z.dispose(),re.dispose(),fe.dispose(),Q.dispose(),xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Zo),se.removeEventListener("sessionend",$o),ti.stop()};function Le(y){y.preventDefault(),ul("WebGLRenderer: Context Lost."),M=!0}function at(){ul("WebGLRenderer: Context Restored."),M=!1;const y=A.autoReset,N=Me.enabled,W=Me.autoUpdate,G=Me.needsUpdate,k=Me.type;K(),A.autoReset=y,Me.enabled=N,Me.autoUpdate=W,Me.needsUpdate=G,Me.type=k}function Je(y){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function pn(y){const N=y.target;N.removeEventListener("dispose",pn),wn(N)}function wn(y){vu(y),x.remove(y)}function vu(y){const N=x.get(y).programs;N!==void 0&&(N.forEach(function(W){xe.releaseProgram(W)}),y.isShaderMaterial&&xe.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,W,G,k,le){N===null&&(N=Ze);const pe=k.isMesh&&k.matrixWorld.determinant()<0,ue=Su(y,N,W,G,k);ve.setMaterial(G,pe);let me=W.index,ye=1;if(G.wireframe===!0){if(me=Se.getWireframeAttribute(W),me===void 0)return;ye=2}const Ce=W.drawRange,be=W.attributes.position;let ke=Ce.start*ye,tt=(Ce.start+Ce.count)*ye;le!==null&&(ke=Math.max(ke,le.start*ye),tt=Math.min(tt,(le.start+le.count)*ye)),me!==null?(ke=Math.max(ke,0),tt=Math.min(tt,me.count)):be!=null&&(ke=Math.max(ke,0),tt=Math.min(tt,be.count));const ut=tt-ke;if(ut<0||ut===1/0)return;fe.setup(k,G,ue,W,me);let ht,it=L;if(me!==null&&(ht=X.get(me),it=he,it.setIndex(ht)),k.isMesh)G.wireframe===!0?(ve.setLineWidth(G.wireframeLinewidth*xt()),it.setMode(D.LINES)):it.setMode(D.TRIANGLES);else if(k.isLine){let Te=G.linewidth;Te===void 0&&(Te=1),ve.setLineWidth(Te*xt()),k.isLineSegments?it.setMode(D.LINES):k.isLineLoop?it.setMode(D.LINE_LOOP):it.setMode(D.LINE_STRIP)}else k.isPoints?it.setMode(D.POINTS):k.isSprite&&it.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Ss("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Te=k._multiDrawStarts,Qe=k._multiDrawCounts,Ke=k._multiDrawCount,qt=me?X.get(me).bytesPerElement:1,Mi=x.get(G).currentProgram.getUniforms();for(let Yt=0;Yt<Ke;Yt++)Mi.setValue(D,"_gl_DrawID",Yt),it.render(Te[Yt]/qt,Qe[Yt])}else if(k.isInstancedMesh)it.renderInstances(ke,ut,k.count);else if(W.isInstancedBufferGeometry){const Te=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qe=Math.min(W.instanceCount,Te);it.renderInstances(ke,ut,Qe)}else it.render(ke,ut)};function Ko(y,N,W){y.transparent===!0&&y.side===It&&y.forceSinglePass===!1?(y.side=Ut,y.needsUpdate=!0,Ps(y,N,W),y.side=$n,y.needsUpdate=!0,Ps(y,N,W),y.side=It):Ps(y,N,W)}this.compile=function(y,N,W=null){W===null&&(W=y),T=oe.get(W),T.init(N),C.push(T),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(T.pushLight(k),k.castShadow&&T.pushShadow(k))}),T.setupLights();const G=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const le=k.material;if(le)if(Array.isArray(le))for(let pe=0;pe<le.length;pe++){const ue=le[pe];Ko(ue,W,k),G.add(ue)}else Ko(le,W,k),G.add(le)}),T=C.pop(),G},this.compileAsync=function(y,N,W=null){const G=this.compile(y,N,W);return new Promise(k=>{function le(){if(G.forEach(function(pe){x.get(pe).currentProgram.isReady()&&G.delete(pe)}),G.size===0){k(y);return}setTimeout(le,10)}$e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Or=null;function Mu(y){Or&&Or(y)}function Zo(){ti.stop()}function $o(){ti.start()}const ti=new tu;ti.setAnimationLoop(Mu),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(y){Or=y,se.setAnimationLoop(y),y===null?ti.stop():ti.start()},se.addEventListener("sessionstart",Zo),se.addEventListener("sessionend",$o),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const W=se.enabled===!0&&se.isPresenting===!0,G=F!==null&&(O===null||W)&&F.begin(v,O);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),y.isScene===!0&&y.onBeforeRender(v,y,N,O),T=oe.get(y,C.length),T.init(N),C.push(T),_t.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),we.setFromProjectionMatrix(_t,vn,N.reversedDepth),We=this.localClippingEnabled,ge=_e.init(this.clippingPlanes,We),E=ee.get(y,w.length),E.init(),w.push(E),se.enabled===!0&&se.isPresenting===!0){const pe=v.xr.getDepthSensingMesh();pe!==null&&Br(pe,N,-1/0,v.sortObjects)}Br(y,N,0,v.sortObjects),E.finish(),v.sortObjects===!0&&E.sort(Ve,Ge),Oe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Oe&&ae.addToRenderList(E,y),this.info.render.frame++,ge===!0&&_e.beginShadows();const k=T.state.shadowsArray;if(Me.render(k,y,N),ge===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(G&&F.hasRenderPass())===!1){const pe=E.opaque,ue=E.transmissive;if(T.setupLights(),N.isArrayCamera){const me=N.cameras;if(ue.length>0)for(let ye=0,Ce=me.length;ye<Ce;ye++){const be=me[ye];Qo(pe,ue,y,be)}Oe&&ae.render(y);for(let ye=0,Ce=me.length;ye<Ce;ye++){const be=me[ye];Jo(E,y,be,be.viewport)}}else ue.length>0&&Qo(pe,ue,y,N),Oe&&ae.render(y),Jo(E,y,N)}O!==null&&I===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),G&&F.end(v),y.isScene===!0&&y.onAfterRender(v,y,N),fe.resetDefaultState(),V=-1,H=null,C.pop(),C.length>0?(T=C[C.length-1],ge===!0&&_e.setGlobalState(v.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function Br(y,N,W,G){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||we.intersectsSprite(y)){G&&Xe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_t);const pe=re.update(y),ue=y.material;ue.visible&&E.push(y,pe,ue,W,Xe.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||we.intersectsObject(y))){const pe=re.update(y),ue=y.material;if(G&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Xe.copy(y.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Xe.copy(pe.boundingSphere.center)),Xe.applyMatrix4(y.matrixWorld).applyMatrix4(_t)),Array.isArray(ue)){const me=pe.groups;for(let ye=0,Ce=me.length;ye<Ce;ye++){const be=me[ye],ke=ue[be.materialIndex];ke&&ke.visible&&E.push(y,pe,ke,W,Xe.z,be)}}else ue.visible&&E.push(y,pe,ue,W,Xe.z,null)}}const le=y.children;for(let pe=0,ue=le.length;pe<ue;pe++)Br(le[pe],N,W,G)}function Jo(y,N,W,G){const{opaque:k,transmissive:le,transparent:pe}=y;T.setupLightsView(W),ge===!0&&_e.setGlobalState(v.clippingPlanes,W),G&&ve.viewport(z.copy(G)),k.length>0&&Rs(k,N,W),le.length>0&&Rs(le,N,W),pe.length>0&&Rs(pe,N,W),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Qo(y,N,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const ke=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new Sn(1,1,{generateMipmaps:!0,type:ke?Bn:Jt,minFilter:jn,samples:rt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const le=T.state.transmissionRenderTarget[G.id],pe=G.viewport||z;le.setSize(pe.z*v.transmissionResolutionScale,pe.w*v.transmissionResolutionScale);const ue=v.getRenderTarget(),me=v.getActiveCubeFace(),ye=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(J),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&ae.render(W);const Ce=v.toneMapping;v.toneMapping=Mn;const be=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),ge===!0&&_e.setGlobalState(v.clippingPlanes,G),Rs(y,W,G),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let tt=0,ut=N.length;tt<ut;tt++){const ht=N[tt],{object:it,geometry:Te,material:Qe,group:Ke}=ht;if(Qe.side===It&&it.layers.test(G.layers)){const qt=Qe.side;Qe.side=Ut,Qe.needsUpdate=!0,el(it,W,G,Te,Qe,Ke),Qe.side=qt,Qe.needsUpdate=!0,ke=!0}}ke===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}v.setRenderTarget(ue,me,ye),v.setClearColor(J,te),be!==void 0&&(G.viewport=be),v.toneMapping=Ce}function Rs(y,N,W){const G=N.isScene===!0?N.overrideMaterial:null;for(let k=0,le=y.length;k<le;k++){const pe=y[k],{object:ue,geometry:me,group:ye}=pe;let Ce=pe.material;Ce.allowOverride===!0&&G!==null&&(Ce=G),ue.layers.test(W.layers)&&el(ue,N,W,me,Ce,ye)}}function el(y,N,W,G,k,le){y.onBeforeRender(v,N,W,G,k,le),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(v,N,W,G,y,le),k.transparent===!0&&k.side===It&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,v.renderBufferDirect(W,N,G,k,y,le),k.side=$n,k.needsUpdate=!0,v.renderBufferDirect(W,N,G,k,y,le),k.side=It):v.renderBufferDirect(W,N,G,k,y,le),y.onAfterRender(v,N,W,G,k,le)}function Ps(y,N,W){N.isScene!==!0&&(N=Ze);const G=x.get(y),k=T.state.lights,le=T.state.shadowsArray,pe=k.state.version,ue=xe.getParameters(y,k.state,le,N,W),me=xe.getProgramCacheKey(ue);let ye=G.programs;G.environment=y.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(y.isMeshStandardMaterial?Z:j).get(y.envMap||G.environment),G.envMapRotation=G.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,ye===void 0&&(y.addEventListener("dispose",pn),ye=new Map,G.programs=ye);let Ce=ye.get(me);if(Ce!==void 0){if(G.currentProgram===Ce&&G.lightsStateVersion===pe)return nl(y,ue),Ce}else ue.uniforms=xe.getUniforms(y),y.onBeforeCompile(ue,v),Ce=xe.acquireProgram(ue,me),ye.set(me,Ce),G.uniforms=ue.uniforms;const be=G.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(be.clippingPlanes=_e.uniform),nl(y,ue),G.needsLights=Eu(y),G.lightsStateVersion=pe,G.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),G.currentProgram=Ce,G.uniformsList=null,Ce}function tl(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=ur.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function nl(y,N){const W=x.get(y);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Su(y,N,W,G,k){N.isScene!==!0&&(N=Ze),U.resetTextureUnits();const le=N.fog,pe=G.isMeshStandardMaterial?N.environment:null,ue=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Xi,me=(G.isMeshStandardMaterial?Z:j).get(G.envMap||pe),ye=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!W.morphAttributes.position,ke=!!W.morphAttributes.normal,tt=!!W.morphAttributes.color;let ut=Mn;G.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ut=v.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=ht!==void 0?ht.length:0,Te=x.get(G),Qe=T.state.lights;if(ge===!0&&(We===!0||y!==H)){const Nt=y===H&&G.id===V;_e.setState(G,y,Nt)}let Ke=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Qe.state.version||Te.outputColorSpace!==ue||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==me||G.fog===!0&&Te.fog!==le||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==_e.numPlanes||Te.numIntersection!==_e.numIntersection)||Te.vertexAlphas!==ye||Te.vertexTangents!==Ce||Te.morphTargets!==be||Te.morphNormals!==ke||Te.morphColors!==tt||Te.toneMapping!==ut||Te.morphTargetsCount!==it)&&(Ke=!0):(Ke=!0,Te.__version=G.version);let qt=Te.currentProgram;Ke===!0&&(qt=Ps(G,N,k));let Mi=!1,Yt=!1,ts=!1;const ot=qt.getUniforms(),kt=Te.uniforms;if(ve.useProgram(qt.program)&&(Mi=!0,Yt=!0,ts=!0),G.id!==V&&(V=G.id,Yt=!0),Mi||H!==y){ve.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",y.projectionMatrix),ot.setValue(D,"viewMatrix",y.matrixWorldInverse);const Ht=ot.map.cameraPosition;Ht!==void 0&&Ht.setValue(D,He.setFromMatrixPosition(y.matrixWorld)),rt.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),H!==y&&(H=y,Yt=!0,ts=!0)}if(Te.needsLights&&(Qe.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",Qe.state.directionalShadowMap,U),Qe.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",Qe.state.spotShadowMap,U),Qe.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",Qe.state.pointShadowMap,U)),k.isSkinnedMesh){ot.setOptional(D,k,"bindMatrix"),ot.setOptional(D,k,"bindMatrixInverse");const Nt=k.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ot.setValue(D,"boneTexture",Nt.boneTexture,U))}k.isBatchedMesh&&(ot.setOptional(D,k,"batchingTexture"),ot.setValue(D,"batchingTexture",k._matricesTexture,U),ot.setOptional(D,k,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",k._indirectTexture,U),ot.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",k._colorsTexture,U));const tn=W.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Be.update(k,W,qt),(Yt||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,ot.setValue(D,"receiveShadow",k.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kt.envMap.value=me,kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(kt.envMapIntensity.value=N.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=fg()),Yt&&(ot.setValue(D,"toneMappingExposure",v.toneMappingExposure),Te.needsLights&&yu(kt,ts),le&&G.fog===!0&&Pe.refreshFogUniforms(kt,le),Pe.refreshMaterialUniforms(kt,G,Ae,Ee,T.state.transmissionRenderTarget[y.id]),ur.upload(D,tl(Te),kt,U)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ur.upload(D,tl(Te),kt,U),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(D,"center",k.center),ot.setValue(D,"modelViewMatrix",k.modelViewMatrix),ot.setValue(D,"normalMatrix",k.normalMatrix),ot.setValue(D,"modelMatrix",k.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Nt=G.uniformsGroups;for(let Ht=0,zr=Nt.length;Ht<zr;Ht++){const ni=Nt[Ht];Q.update(ni,qt),Q.bind(ni,qt)}}return qt}function yu(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function Eu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(y,N,W){const G=x.get(y);G.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),x.get(y.texture).__webglTexture=N,x.get(y.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const W=x.get(y);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0};const bu=D.createFramebuffer();this.setRenderTarget=function(y,N=0,W=0){O=y,R=N,I=W;let G=null,k=!1,le=!1;if(y){const ue=x.get(y);if(ue.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(D.FRAMEBUFFER,ue.__webglFramebuffer),z.copy(y.viewport),B.copy(y.scissor),q=y.scissorTest,ve.viewport(z),ve.scissor(B),ve.setScissorTest(q),V=-1;return}else if(ue.__webglFramebuffer===void 0)U.setupRenderTarget(y);else if(ue.__hasExternalTextures)U.rebindTextures(y,x.get(y.texture).__webglTexture,x.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ce=y.depthTexture;if(ue.__boundDepthTexture!==Ce){if(Ce!==null&&x.has(Ce)&&(y.width!==Ce.image.width||y.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(y)}}const me=y.texture;(me.isData3DTexture||me.isDataArrayTexture||me.isCompressedArrayTexture)&&(le=!0);const ye=x.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ye[N])?G=ye[N][W]:G=ye[N],k=!0):y.samples>0&&U.useMultisampledRTT(y)===!1?G=x.get(y).__webglMultisampledFramebuffer:Array.isArray(ye)?G=ye[W]:G=ye,z.copy(y.viewport),B.copy(y.scissor),q=y.scissorTest}else z.copy(Y).multiplyScalar(Ae).floor(),B.copy($).multiplyScalar(Ae).floor(),q=de;if(W!==0&&(G=bu),ve.bindFramebuffer(D.FRAMEBUFFER,G)&&ve.drawBuffers(y,G),ve.viewport(z),ve.scissor(B),ve.setScissorTest(q),k){const ue=x.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,W)}else if(le){const ue=N;for(let me=0;me<y.textures.length;me++){const ye=x.get(y.textures[me]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+me,ye.__webglTexture,W,ue)}}else if(y!==null&&W!==0){const ue=x.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,W)}V=-1},this.readRenderTargetPixels=function(y,N,W,G,k,le,pe,ue=0){if(!(y&&y.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me){ve.bindFramebuffer(D.FRAMEBUFFER,me);try{const ye=y.textures[ue],Ce=ye.format,be=ye.type;if(!rt.textureFormatReadable(Ce)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(be)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-G&&W>=0&&W<=y.height-k&&(y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),D.readPixels(N,W,G,k,ne.convert(Ce),ne.convert(be),le))}finally{const ye=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(y,N,W,G,k,le,pe,ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=x.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&pe!==void 0&&(me=me[pe]),me)if(N>=0&&N<=y.width-G&&W>=0&&W<=y.height-k){ve.bindFramebuffer(D.FRAMEBUFFER,me);const ye=y.textures[ue],Ce=ye.format,be=ye.type;if(!rt.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ue),D.readPixels(N,W,G,k,ne.convert(Ce),ne.convert(be),0);const tt=O!==null?x.get(O).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,tt);const ut=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ah(D,ut,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(ke),D.deleteSync(ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,W=0){const G=Math.pow(2,-W),k=Math.floor(y.image.width*G),le=Math.floor(y.image.height*G),pe=N!==null?N.x:0,ue=N!==null?N.y:0;U.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,pe,ue,k,le),ve.unbindTexture()};const Tu=D.createFramebuffer(),Au=D.createFramebuffer();this.copyTextureToTexture=function(y,N,W=null,G=null,k=0,le=null){le===null&&(k!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=k,k=0):le=0);let pe,ue,me,ye,Ce,be,ke,tt,ut;const ht=y.isCompressedTexture?y.mipmaps[le]:y.image;if(W!==null)pe=W.max.x-W.min.x,ue=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,ye=W.min.x,Ce=W.min.y,be=W.isBox3?W.min.z:0;else{const tn=Math.pow(2,-k);pe=Math.floor(ht.width*tn),ue=Math.floor(ht.height*tn),y.isDataArrayTexture?me=ht.depth:y.isData3DTexture?me=Math.floor(ht.depth*tn):me=1,ye=0,Ce=0,be=0}G!==null?(ke=G.x,tt=G.y,ut=G.z):(ke=0,tt=0,ut=0);const it=ne.convert(N.format),Te=ne.convert(N.type);let Qe;N.isData3DTexture?(U.setTexture3D(N,0),Qe=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(U.setTexture2DArray(N,0),Qe=D.TEXTURE_2D_ARRAY):(U.setTexture2D(N,0),Qe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ke=D.getParameter(D.UNPACK_ROW_LENGTH),qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mi=D.getParameter(D.UNPACK_SKIP_PIXELS),Yt=D.getParameter(D.UNPACK_SKIP_ROWS),ts=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);const ot=y.isDataArrayTexture||y.isData3DTexture,kt=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const tn=x.get(y),Nt=x.get(N),Ht=x.get(tn.__renderTarget),zr=x.get(Nt.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let ni=0;ni<me;ni++)ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(y).__webglTexture,k,be+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,x.get(N).__webglTexture,le,ut+ni)),D.blitFramebuffer(ye,Ce,pe,ue,ke,tt,pe,ue,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||x.has(y)){const tn=x.get(y),Nt=x.get(N);ve.bindFramebuffer(D.READ_FRAMEBUFFER,Tu),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Au);for(let Ht=0;Ht<me;Ht++)ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,k,be+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,k),kt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,le,ut+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nt.__webglTexture,le),k!==0?D.blitFramebuffer(ye,Ce,pe,ue,ke,tt,pe,ue,D.COLOR_BUFFER_BIT,D.NEAREST):kt?D.copyTexSubImage3D(Qe,le,ke,tt,ut+Ht,ye,Ce,pe,ue):D.copyTexSubImage2D(Qe,le,ke,tt,ye,Ce,pe,ue);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else kt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Qe,le,ke,tt,ut,pe,ue,me,it,Te,ht.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Qe,le,ke,tt,ut,pe,ue,me,it,ht.data):D.texSubImage3D(Qe,le,ke,tt,ut,pe,ue,me,it,Te,ht):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,ke,tt,pe,ue,it,Te,ht.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,ke,tt,ht.width,ht.height,it,ht.data):D.texSubImage2D(D.TEXTURE_2D,le,ke,tt,pe,ue,it,Te,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mi),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ts),le===0&&N.generateMipmaps&&D.generateMipmap(Qe),ve.unbindTexture()},this.initRenderTarget=function(y){x.get(y).__webglFramebuffer===void 0&&U.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?U.setTextureCube(y,0):y.isData3DTexture?U.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?U.setTexture2DArray(y,0):U.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){R=0,I=0,O=null,ve.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const lc={type:"change"},qo={type:"start"},au={type:"end"},ir=new Cs,cc=new Un,mg=Math.cos(70*ct.DEG2RAD),bt=new P,Vt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ya=1e-6;class gg extends _d{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new _i,this._lastTargetPosition=new P,this._quat=new _i().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ol,this._sphericalDelta=new Ol,this._scale=1,this._panOffset=new P,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new P,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xg.bind(this),this._onPointerDown=_g.bind(this),this._onPointerUp=vg.bind(this),this._onContextMenu=Ag.bind(this),this._onMouseWheel=yg.bind(this),this._onKeyDown=Eg.bind(this),this._onTouchStart=bg.bind(this),this._onTouchMove=Tg.bind(this),this._onMouseDown=Mg.bind(this),this._onMouseMove=Sg.bind(this),this._interceptControlDown=wg.bind(this),this._interceptControlUp=Cg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lc),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),s<-Math.PI?s+=Vt:s>Math.PI&&(s-=Vt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=bt.length();a=this._clampDistance(o*this._scale);const u=o-a;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),r=!!u}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=u!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ir.origin.copy(this.object.position),ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ir.direction))<mg?this.object.lookAt(this.target):(cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ir.intersectPlane(cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ya||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ya||this._lastTargetPosition.distanceToSquared(this.target)>ya?(this.dispatchEvent(lc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function _g(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function xg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function vg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(au),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Mg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case dn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case dn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qo)}function Sg(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yg(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(qo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(au))}function Eg(i){this.enabled!==!1&&this._handleKeyDown(i)}function bg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case Bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case Bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qo)}function Tg(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function Ag(i){this.enabled!==!1&&i.preventDefault()}function wg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Cg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ou=[{name:"Sun",nameCH:"太陽",type:"star",radius:5,realScaleRadius:40,color:16776960,texture:"sun.jpg",distance:0,realScaleDistance:0,speed:0,description:"太陽系的中心恆星，佔據了太陽系 99.8% 的質量。它是一顆黃矮星，透過核融合產生巨大的能量，支持地球上的生命。",details:{類型:"G型主序星",質量:"1.989 × 10³⁰ kg",體積:"1.412 × 10¹⁸ km³",直徑:"1,392,700 km",史瓦西半徑:"3 km",光度:"3.828 × 10²⁶ W",視星等:"−26.74",絕對星等:"+4.83",核心溫度:"15,000,000 °C",表面溫度:"5,500 °C",光譜類型:"G2V"},obliquity:7.25},{name:"Mercury",nameCH:"水星",type:"planet",radius:.5,realScaleRadius:.38,color:11184810,texture:"mercury.jpg",distance:15,realScaleDistance:60,speed:.02,inclination:7,obliquity:.03,description:"最靠近太陽的行星。它沒有大氣層來調節溫度，導致晝夜溫差極大。其表面佈滿了數十億年來遭受撞擊留下的隕石坑。",details:{質量:"3.301 × 10²³ kg",體積:"6.083 × 10¹⁰ km³",直徑:"4,879 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 427°C"}},{name:"Venus",nameCH:"金星",type:"planet",radius:.9,realScaleRadius:.95,color:16763904,texture:"venus_surface.jpg",distance:25,realScaleDistance:90,speed:.015,inclination:3.39,obliquity:177.36,description:"被稱為地球的姊妹星，但極端惡劣。它擁有濃厚二氧化碳大氣層產生的劇烈溫室效應，使其成為太陽系中最熱的行星。",details:{質量:"4.867 × 10²⁴ kg",體積:"9.284 × 10¹¹ km³",直徑:"12,104 km",光度:"N/A",核心溫度:"N/A",表面溫度:"462 °C"}},{name:"Earth",nameCH:"地球",type:"planet",radius:1,realScaleRadius:1,color:2241535,texture:"earth.jpg",distance:40,realScaleDistance:130,speed:.01,inclination:0,obliquity:23.44,description:"人類唯一的家園，是目前唯一已知存在生命的天體。地表約 71% 被海洋覆蓋。",details:{質量:"5.972 × 10²⁴ kg",體積:"1.083 × 10¹² km³",直徑:"12,742 km",光度:"N/A",核心溫度:"6,000 °C",表面溫度:"-88°C 到 58°C"},satellites:[{name:"ISS",nameCH:"國際太空站",type:"space_station",radius:.0125,realScaleRadius:.00125,color:13421772,distance:1.25,realScaleDistance:1.06,speed:.15,inclination:51.6,description:"目前在軌運行的最大的空間站，由多國航天機構共同建造並運行。它是人類在太空進行長期科研的重要平台。",details:{質量:"450,000 kg",長度:"109 m",寬度:"73 m",乘員:"通常 7 人",發射時間:"1998年 (首模塊)",軌道高度:"約 408 km"}},{name:"CSS",nameCH:"天宮空間站",type:"space_station",radius:.01,realScaleRadius:.001,color:16777215,distance:1.4,realScaleDistance:1.06,speed:.12,inclination:41.5,description:"中國自主研發並建造的空間站，由天和核心艙、問天實驗艙、夢天實驗艙組成。它是中國載人航天工程的重要成果。",details:{質量:"約 100,000 kg",構成:"三艙 L 型",乘員:"通常 3 人",發射時間:"2021年 (核心艙)",軌道高度:"約 390 km"}},{name:"Moon",nameCH:"月球",type:"satellite",radius:.27,realScaleRadius:.27,color:8947848,texture:"moon.jpg",distance:2.2,realScaleDistance:3,speed:.05,inclination:5.14,obliquity:6.68,orbitRelativeToEquator:!1,description:"地球唯一的天然衛星。它對地球的潮汐和自轉穩定起著關鍵作用，是人類唯一親自登陸過的地外天體。",details:{質量:"7.342 × 10²² kg",體積:"2.195 × 10¹⁰ km³",直徑:"3,474 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-173°C 到 127°C"}}]},{name:"Apophis",nameCH:"毀神星",type:"asteroid",radius:.15,realScaleRadius:.005,isIrregular:!0,geometryScale:[2.5,1.2,1.2],color:6710886,texture:"apophis.jpg",distance:36,realScaleDistance:120,speed:.012,inclination:3.3,obliquity:0,description:"一顆近地小行星，曾因極高的撞擊風險評估而聞名。它於 2029 年將在極近距離內掠過地球，提供絕佳的科學觀測機會。",details:{質量:"6.1 × 10¹⁰ kg",直徑:"370 m",表面溫度:"N/A"}},{name:"1221 Amor",nameCH:"阿莫爾",type:"asteroid",radius:.1,realScaleRadius:.002,isIrregular:!0,geometryScale:[1.8,1.2,1.2],color:13808780,texture:"amor.jpg",distance:48,realScaleDistance:220,speed:.01,inclination:11.9,obliquity:0,description:"阿莫爾型小行星的代表天體，其軌道會跨越火星軌道並接近地球，但通常不會與地球軌道相交。",details:{直徑:"1.0 km",光譜類型:"S-type"}},{name:"Mars",nameCH:"火星",type:"planet",radius:.53,realScaleRadius:.53,color:16724736,texture:"mars.jpg",distance:55,realScaleDistance:180,speed:.008,inclination:1.85,obliquity:25.19,description:"被稱為紅色星球，其顏色源於表面的氧化鐵。它擁有太陽系最高大的山脈（奧林帕斯山）和巨大的峽谷系統。",details:{質量:"6.39 × 10²³ kg",體積:"1.631 × 10¹¹ km³",直徑:"6,779 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-125°C 到 20°C"},satellites:[{name:"Phobos",nameCH:"火衛一 (福波斯)",radius:.15,realScaleRadius:.08,color:8947848,texture:"phobos.png",distance:2,realScaleDistance:2.5,speed:.08,inclination:1.09,description:"火星最大的衛星，外型不規則且佈滿隕石坑。它離火星非常近，正緩慢地向火星靠近，預計在數千萬年後將會撞向火星或解體。",details:{質量:"1.066 × 10¹⁶ kg",直徑:"22.2 km",表面溫度:"-112 °C 到 -4 °C"}},{name:"Deimos",nameCH:"火衛二 (戴摩斯)",radius:.12,realScaleRadius:.05,color:10066329,texture:"deimos.png",distance:3.5,realScaleDistance:6,speed:.045,inclination:.93,description:"火星較小且較遠的衛星，表面覆蓋著厚厚的塵埃層，使其看起來比火衛一更平滑。",details:{質量:"1.476 × 10¹⁵ kg",直徑:"12.4 km",表面溫度:"-112 °C 到 -4 °C"}}]},{name:"433 Eros",nameCH:"愛神星",type:"asteroid",radius:.28,realScaleRadius:.01,isIrregular:!0,geometryScale:[3.2,1.1,1.1],color:12756621,texture:"eros.jpg",distance:68,realScaleDistance:190,speed:.009,inclination:10.8,obliquity:0,description:"人類首顆近距離探測並登陸的小行星（由會合-舒梅克號完成）。它是一顆 S-型小行星，具有獨特的長條橢圓外型。",details:{質量:"6.68 × 10¹⁵ kg",直徑:"16.8 km",表面溫度:"-150 °C 到 100 °C"}},{name:"887 Alinda",nameCH:"艾琳達",type:"asteroid",radius:.12,realScaleRadius:.008,isIrregular:!0,geometryScale:[1.2,1.1,1.05],color:10128499,texture:"alinda.jpg",distance:72,realScaleDistance:280,speed:.007,inclination:9.3,obliquity:0,description:"一顆極具代表性的近地小行星，與木星具有 1:3 的平均運動共振，這也是艾琳達家族小行星的命名來源。",details:{直徑:"4.2 km",光譜類型:"S-type"}},{name:"4 Vesta",nameCH:"灶神星",type:"asteroid",radius:.32,realScaleRadius:.05,isIrregular:!0,geometryScale:[1.15,.95,1.15],color:12632256,texture:"vesta.jpg",distance:77,realScaleDistance:275,speed:.0068,inclination:7.1,obliquity:27,description:"小行星帶中質量第二大的天體，被譽為「原行星」，擁有類似地球的分層結構和巨大的撞擊坑（雷亞希爾維亞坑）。",details:{質量:"2.59 × 10²⁰ kg",直徑:"525.4 km",表面溫度:"-190 °C 到 -60 °C"}},{name:"Ceres",nameCH:"穀神星",type:"dwarf_planet",radius:.4,realScaleRadius:.075,color:10066329,texture:"ceres.jpg",distance:88,realScaleDistance:315,speed:.006,inclination:10.6,obliquity:4,description:"位於小行星帶中最大的天體，也是太陽系內側唯一的一顆矮行星。它主要由冰和岩石組成，表面可能存在含鹽的水冰。",details:{質量:"8.96 × 10²⁰ kg",體積:"4.21 × 10⁸ km³",直徑:"950 km",表面溫度:"-106 °C"}},{name:"Pallas",nameCH:"智神星",type:"asteroid",radius:.25,realScaleRadius:.04,color:10066329,texture:"pallas.jpg",distance:93,realScaleDistance:310,speed:.0055,inclination:34.8,obliquity:0,description:"小行星帶中第二大的天體，僅次於穀神星。它以極大傾角的軌道運行，表面成分與含碳球粒隕石相似。",details:{質量:"2.04 × 10²⁰ kg",直徑:"512 km",表面溫度:"-100 °C"}},{name:"10 Hygeia",nameCH:"健神星",type:"dwarf_planet",radius:.22,realScaleRadius:.035,isIrregular:!1,geometryScale:[1.05,1,1.02],color:4473924,texture:"hygeia.jpg",distance:98,realScaleDistance:330,speed:.0052,inclination:3.8,obliquity:0,description:"小行星帶中第四大的天體。儘管位於小行星帶，但其極其接近球形的外觀使其成為矮行星的候選者。其表面非常黑暗，屬於 C-型小行星。",details:{質量:"8.67 × 10¹⁸ kg",直徑:"434 km",表面溫度:"-110 °C"}},{name:"Juno",nameCH:"婚神星",type:"asteroid",radius:.22,realScaleRadius:.02,color:8947848,texture:"juno.jpg",distance:82,realScaleDistance:290,speed:.0065,inclination:12.9,obliquity:0,description:"小行星帶中的主要天體之一，也是首批被發現的四顆小行星中體積最小的一顆。其表面可能含有豐富的橄欖石。",details:{質量:"2.7 × 10¹⁹ kg",直徑:"233 km",表面溫度:"-110 °C"}},{name:"16 Psyche",nameCH:"靈神星",type:"asteroid",radius:.22,realScaleRadius:.04,isIrregular:!1,geometryScale:[1.45,1.25,1],color:5592405,texture:"psyche.jpg",distance:104,realScaleDistance:340,speed:.005,inclination:3.1,obliquity:0,description:"太陽系中最重金屬的小行星之一，被認為是早期行星暴露在外的鎳鐵核心。它接近規則的橢球體，表面呈現獨特的金屬光澤。",details:{質量:"2.29 × 10¹⁹ kg",直徑:"220 km",成分:"鐵、鎳 (M-type)"}},{name:"Jupiter",nameCH:"木星",type:"planet",radius:3,realScaleRadius:11,color:14462614,texture:"jupiter_natural.png",distance:120,realScaleDistance:450,speed:.005,inclination:1.3,obliquity:3.13,description:"太陽系最大的行星，體積可容納 1,300 個地球。它是一個巨大的氣態巨行星，最著名的特徵是持續了數百年的大紅斑風暴。",details:{質量:"1.898 × 10²⁷ kg",體積:"1.431 × 10¹⁵ km³",直徑:"139,820 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-110 °C"},satellites:[{name:"Io",nameCH:"木衛一 (伊娥)",radius:.28,realScaleRadius:.285,color:16773120,texture:"io_fixed.jpg",distance:5,realScaleDistance:13,speed:.04,inclination:.05,description:"太陽系中最活躍的火山天體。",details:{質量:"8.932 × 10²² kg",體積:"2.531 × 10¹⁰ km³",直徑:"3,643 km",表面溫度:"-143 °C"}},{name:"Europa",nameCH:"木衛二 (歐羅巴)",radius:.24,realScaleRadius:.245,color:14737632,texture:"europa.png",distance:6,realScaleDistance:21,speed:.03,inclination:.47,description:"表面被冰層覆蓋，下方可能隱藏著液態海洋。",details:{質量:"4.80 × 10²² kg",體積:"1.593 × 10¹⁰ km³",直徑:"3,122 km",表面溫度:"-160 °C"}},{name:"Ganymede",nameCH:"木衛三 (蓋尼米德)",radius:.41,realScaleRadius:.413,color:10526880,texture:"ganymede.png",distance:7.5,realScaleDistance:33,speed:.02,inclination:.2,description:"太陽系中最大的衛星，甚至比水星還要大。",details:{質量:"1.482 × 10²³ kg",體積:"7.66 × 10¹⁰ km³",直徑:"5,268 km",表面溫度:"-163 °C"}},{name:"Callisto",nameCH:"木衛四 (卡利斯托)",radius:.38,realScaleRadius:.378,color:6316128,texture:"callisto.png",distance:9,realScaleDistance:50,speed:.012,inclination:.2,description:"太陽系中隕石坑最密集的天體之一。",details:{質量:"1.076 × 10²³ kg",體積:"5.88 × 10¹⁰ km³",直徑:"4,821 km",表面溫度:"-139 °C"}}]},{name:"Saturn",nameCH:"土星",type:"planet",radius:2.5,realScaleRadius:9.5,color:16044095,texture:"saturn_ai.png",distance:170,realScaleDistance:800,speed:.004,inclination:2.48,obliquity:26.73,ring:{innerRadius:3,outerRadius:5,realInner:11,realOuter:18},description:"以其壯麗的環系統聞名，這些環主要由冰晶與塵埃組成。它是太陽系中密度最低的行星，如果把它放在水中，它會浮起來。",details:{質量:"5.683 × 10²⁶ kg",體積:"8.271 × 10¹⁴ km³",直徑:"116,460 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-140 °C"},satellites:[{name:"Mimas",nameCH:"土衛一 (米瑪斯)",radius:.15,realScaleRadius:.156,color:10066329,texture:"mimas.png",distance:6,realScaleDistance:25,speed:.045,inclination:1.5,description:"以其巨大的赫歇爾撞擊坑聞名，使其外觀極其神似星際大戰中的「死星」。",details:{質量:"3.75 × 10¹⁹ kg",直徑:"396 km",表面溫度:"-209 °C"}},{name:"Enceladus",nameCH:"土衛二 (恩克拉多斯)",radius:.18,realScaleRadius:.198,color:16777215,texture:"enceladus.png",distance:7.5,realScaleDistance:35,speed:.035,inclination:0,description:"太陽系中最亮的天體之一，表面覆蓋著潔淨的冰層。其南極地區噴發出的水冰間歇泉證明了地下海洋的存在。",details:{質量:"1.08 × 10²⁰ kg",直徑:"504 km",表面溫度:"-201 °C"}},{name:"Tethys",nameCH:"土衛三 (特提斯)",radius:.22,realScaleRadius:.41,color:13421772,texture:"tethys.png",distance:9,realScaleDistance:45,speed:.028,inclination:1.1,description:"一個冰冷的衛星，表面有巨大的奧德修斯撞擊坑以及貫穿半個星球的伊薩卡峽谷。",details:{質量:"6.17 × 10²⁰ kg",直徑:"1,062 km",表面溫度:"-187 °C"}},{name:"Dione",nameCH:"土衛四 (狄俄涅)",radius:.24,realScaleRadius:.44,color:11184810,texture:"dione.png",distance:10.5,realScaleDistance:55,speed:.022,inclination:0,description:"表面佈滿隕石坑，其後隨半球擁有明亮的絲狀冰崖特徵。",details:{質量:"1.10 × 10²¹ kg",直徑:"1,122 km",表面溫度:"-186 °C"}},{name:"Rhea",nameCH:"土衛五 (瑞亞)",radius:.32,realScaleRadius:.6,color:14540253,texture:"rhea.png",distance:12.5,realScaleDistance:70,speed:.018,inclination:.3,description:"土星第二大的衛星，表面佈滿了古老的隕石坑，是一個典型的冰凍天體。",details:{質量:"2.31 × 10²¹ kg",直徑:"1,528 km",表面溫度:"-174 °C"}},{name:"Titan",nameCH:"土衛六 (泰坦)",radius:.65,realScaleRadius:2,color:16753920,texture:"titan.png",distance:16,realScaleDistance:100,speed:.012,inclination:.3,description:"太陽系唯一擁有濃厚大氣層的衛星。其表面存在液態甲烷湖泊，是除了地球以外唯一已知表面有液態河流、湖泊的天體。",details:{質量:"1.345 × 10²³ kg",直徑:"5,150 km",表面溫度:"-179 °C"}},{name:"Hyperion",nameCH:"土衛七 (海柏利昂)",radius:.12,realScaleRadius:.1,color:9127187,texture:"hyperion.png",distance:18.5,realScaleDistance:130,speed:.01,inclination:.5,description:"外觀極其獨特的衛星，表面佈滿了深邃且邊緣銳利的隕石坑，使其看起來像是一塊巨大的「海綿」。",details:{質量:"5.6 × 10¹⁸ kg",直徑:"270 km",表面溫度:"-180 °C"}},{name:"Iapetus",nameCH:"土衛八 (伊阿珀托斯)",radius:.28,realScaleRadius:.57,color:16777215,texture:"iapetus.png",distance:22,realScaleDistance:180,speed:.008,inclination:7.5,description:"著名的「陰陽衛星」，擁有黑白分明的雙色半球。它還有一條沿著赤道環繞的神祕山脈（赤道脊）。",details:{質量:"1.8 × 10²¹ kg",直徑:"1,469 km",表面溫度:"-143 °C 到 -173 °C"}},{name:"Phoebe",nameCH:"土衛九 (福柏)",radius:.1,realScaleRadius:.08,color:3355443,texture:"phoebe.png",distance:26,realScaleDistance:250,speed:.005,inclination:175,description:"一顆極其黑暗的大型衛星，被認為是來自柯伊伯帶的捕獲天體。它以逆行軌道繞土星運行。",details:{質量:"8.29 × 10¹⁸ kg",直徑:"213 km",表面溫度:"-198 °C"}}]},{name:"Uranus",nameCH:"天王星",type:"planet",radius:1.5,realScaleRadius:4,color:7587510,texture:"uranus.jpg",distance:230,realScaleDistance:1500,speed:.003,inclination:.77,obliquity:97.77,description:"一顆冰巨行星，大氣中含有甲烷使其呈現青藍色。它的自轉軸極度傾斜（約 98 度），看起來像是「躺著」繞太陽公轉。",details:{質量:"8.681 × 10²⁵ kg",體積:"6.833 × 10¹³ km³",直徑:"50,724 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-195 °C"},satellites:[{name:"Ariel",nameCH:"天衛一 (艾瑞爾)",radius:.22,realScaleRadius:.091,color:13421772,texture:"ariel.png",distance:5,realScaleDistance:14,speed:.025,inclination:.26,description:"天王星最亮的衛星，表面佈滿了巨大的峽谷和山脊，顯示出過去劇烈的地質活動。",details:{質量:"1.27 × 10²¹ kg",直徑:"1,158 km",表面溫度:"-189 °C"}},{name:"Umbriel",nameCH:"天衛二 (昂布里厄爾)",radius:.22,realScaleRadius:.092,color:6710886,texture:"umbriel.png",distance:7.5,realScaleDistance:20,speed:.015,inclination:.13,description:"天王星最黑暗、隕石坑最密集的衛星。它最醒目的特徵是一個被稱為「旺達」的明亮環狀坑。",details:{質量:"1.29 × 10²¹ kg",直徑:"1,169 km",表面溫度:"-198 °C"}},{name:"Titania",nameCH:"天衛三 (泰坦妮亞)",radius:.32,realScaleRadius:.124,color:14540253,texture:"titania.png",distance:10.5,realScaleDistance:32,speed:.012,inclination:.34,description:"天王星最大的衛星，表面佈滿了巨大的斷層崖與峽谷，顯示其內部曾發生過嚴酷的地質膨脹。",details:{質量:"3.49 × 10²¹ kg",直徑:"1,578 km",表面溫度:"-203 °C"}},{name:"Oberon",nameCH:"天衛四 (奧伯隆)",radius:.3,realScaleRadius:.12,color:12303291,texture:"oberon.png",distance:13.5,realScaleDistance:42,speed:.008,inclination:.1,description:"天王星最外層的主大衛星，表面極其古老且佈滿隕石坑，其大型撞擊坑底部常覆蓋著神祕的深色物質。",details:{質量:"3.01 × 10²¹ kg",直徑:"1,323 km",表面溫度:"-198 °C"}},{name:"Miranda",nameCH:"天衛五 (米蘭達)",radius:.18,realScaleRadius:.037,color:15658734,texture:"miranda.png",distance:3.5,realScaleDistance:9,speed:.04,inclination:4.34,description:"太陽系中最神祕、地質最為破碎且多樣的衛星之一。它擁有巨大的電路板狀地形（日冕）以及深達 20 公里的垂直斷崖。",details:{質量:"6.59 × 10¹⁹ kg",直徑:"471 km",表面溫度:"-187 °C 到 -213 °C"}}]},{name:"Neptune",nameCH:"海王星",type:"planet",radius:1.5,realScaleRadius:3.9,color:3049153,texture:"neptune_ai_v3.png",distance:300,realScaleDistance:2500,speed:.002,inclination:1.77,obliquity:28.32,description:"離太陽最遠的行星，風速高達每小時 2,100 公里，是太陽系中風速最高的天體。它呈現深藍色，同樣也是一顆冰巨行星。",details:{質量:"1.024 × 10²⁶ kg",體積:"6.254 × 10¹³ km³",直徑:"49,244 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-201 °C"},satellites:[{name:"Triton",nameCH:"海衛一 (崔頓)",radius:.45,realScaleRadius:.21,color:16770273,texture:"triton.png",distance:5,realScaleDistance:13,speed:.015,inclination:157,description:"海王星最大的衛星，也是太陽系中唯一逆行繞行行星的大衛星。表面有著名的「哈密瓜皮」地形，並噴發著氮氣間歇泉。",details:{質量:"2.14 × 10²² kg",直徑:"2,706 km",表面溫度:"-235 °C"}},{name:"Proteus",nameCH:"海衛八 (普羅透斯)",radius:.18,realScaleRadius:.033,color:3355443,texture:"proteus.png",distance:2.5,realScaleDistance:6,speed:.035,inclination:.55,description:"海王星第二大的衛星，也是太陽系中已知不規則形狀衛星中最大的一個。表面極其黑暗且佈滿密集的隕石坑。",details:{質量:"4.4 × 10¹⁹ kg",直徑:"418 km",表面溫度:"-222 °C"}}]},{name:"Pluto",nameCH:"冥王星",type:"dwarf_planet",radius:.7,realScaleRadius:.186,color:15386274,texture:"pluto.jpg",distance:380,realScaleDistance:3800,speed:.0015,inclination:17.16,obliquity:122.5,description:"太陽系中最著名的矮行星，曾被視為第九大行星。它與其衛星凱倫構成了一個雙星系統，其表面最顯眼的特徵是巨大的氮冰之心（湯博區）。",details:{質量:"1.303 × 10²² kg",體積:"7.057 × 10⁹ km³",直徑:"2,376 km",光度:"N/A",核心溫度:"N/A",表面溫度:"-229 °C"},satellites:[{name:"Charon",nameCH:"冥衛一 (凱倫)",radius:.35,realScaleRadius:.095,color:10066329,texture:"charon.jpg",distance:4,realScaleDistance:10,speed:.02,inclination:0,description:"冥王星最大的衛星，直徑超過冥王星的一半。兩者互相潮汐鎖定，始終以同一面朝向彼此。",details:{質量:"1.586 × 10²¹ kg",直徑:"1,212 km",表面溫度:"-220 °C"}}]},{name:"Haumea",nameCH:"妊神星",type:"dwarf_planet",radius:.55,realScaleRadius:.136,geometryScale:[1,.75,.5],color:15658734,texture:"haumea.jpg",distance:460,realScaleDistance:4310,speed:.0013,inclination:28.2,obliquity:126,description:"柯伊伯帶中形狀最奇特的矮行星，其形狀像一顆橄欖球（長橢球體）。這是因為它自轉極快（僅需不到四小時），其表面覆蓋著結晶水冰。",details:{質量:"4 × 10²¹ kg",直徑:"~1,600 km (橢球形平均)",表面溫度:"-223 °C"}},{name:"Makemake",nameCH:"鳥神星",type:"dwarf_planet",radius:.5,realScaleRadius:.112,color:13467442,texture:"makemake.jpg",distance:600,realScaleDistance:4550,speed:.0012,inclination:29,obliquity:0,description:"柯伊伯帶中較大、且表面顏色偏紅的矮行星。它是發現最晚、也是太陽系中最亮的幾個天體之一，表面覆蓋甲烷冰。",details:{質量:"3 × 10²¹ kg",直徑:"1,430 km",表面溫度:"-243 °C"}},{name:"Eris",nameCH:"鬩神星",type:"dwarf_planet",radius:.72,realScaleRadius:.183,color:16777215,texture:"eris.jpg",distance:720,realScaleDistance:6800,speed:.001,inclination:44.2,obliquity:78,description:"目前已知太陽系中最巨大的矮行星之一，位於離太陽極遠的散射盤。它的發現直接導致了冥王星被重新定義為矮行星。表面反照率極高，覆蓋著甲烷冰。",details:{質量:"1.66 × 10²² kg",直徑:"2,326 km",表面溫度:"-243 °C"}},{name:"Halley",nameCH:"哈雷彗星",type:"comet",isComet:!0,radius:.3,realScaleRadius:.008,color:8978380,texture:"asteroid.jpg",distance:280,realScaleDistance:2600,speed:.003,inclination:18,description:"哈雷彗星是目前已知最著名的週期性彗星。基於其逆行且高傾角的特殊軌道軌跡、長達數千年的活動史，以及沿途釋出的厚實碎屑雲帶，地球每年會兩度穿越這條由其留下的「塵埃河流」：5月時形成了寶瓶座η流星雨，而10月則迎來著名的獵戶座流星雨。",details:{週期:"約 76 年",核心大小:"約 15 × 8 km",最後回歸:"1986 年",下次預測:"2061 年"}},{name:"Swift-Tuttle",nameCH:"斯威夫特-塔特爾彗星 (109P)",type:"comet",isComet:!0,radius:.35,realScaleRadius:.013,color:11206604,texture:"asteroid.jpg",distance:350,realScaleDistance:5e3,speed:.002,inclination:113.5,description:"斯威夫特-塔特爾彗星是一顆極其龐大且具有潛在威脅的週期性彗星，其核心直徑達 26 公里。它是每年 8 月盛大的「英仙座流星雨」的高峰期來源。當地球穿過它在漫長軌跡上留下的塵埃帶時，這些顆粒進入大氣層即形成了壯麗的流星現象。",details:{週期:"約 133 年",核心直徑:"約 26 km",最後回歸:"1992 年",下次預測:"2126 年"}},{name:"Tempel-Tuttle",nameCH:"坦普爾-塔特爾彗星 (55P)",type:"comet",isComet:!0,radius:.28,realScaleRadius:.002,color:13434879,texture:"asteroid.jpg",distance:240,realScaleDistance:1500,speed:.004,inclination:162.5,description:"坦普爾-塔特爾彗星是一顆週期約 33 年的週期性彗星，它是著名的「獅子座流星雨」的母彗星。由於其軌道碎屑雲帶的密度分佈非常集中，當地球穿過其留下的密集塵埃帶時，獅子座流星雨偶爾會在 11 月爆發成每小時數千顆以上的「流星暴」，是天文史上最具威力的流星現象之一。",details:{週期:"約 33 年",核心直徑:"約 3.6 km",最後回歸:"1998 年",下次預測:"2031 年"}},{name:"Hale-Bopp",nameCH:"海爾-博普彗星 (C/1995 O1)",type:"comet",isComet:!0,radius:.6,realScaleRadius:.04,color:16777215,texture:"asteroid.jpg",speed:1e-4,isClosed:!0,pathPoints:[[0,10,0],[15,-20,10],[100,-500,30],[180,-1800,40],[100,-3200,30],[0,-3700,0],[-100,-3200,-30],[-180,-1800,-40],[-100,-500,-30],[-15,-20,-10]],description:"20 世紀最壯觀的彗星之一，擁有巨大的彗核（直徑約 60 公里）。它以極高的軌道傾角與極長的週期（約 2,500 年）著稱。其標誌性的雙彗尾（藍色的離子尾與白色的塵埃尾）在 1997 年回歸時在北半球肉眼清晰可見長達 18 個月。",details:{週期:"約 2,533 年",核心直徑:"約 60 km",近日點:"0.914 AU",遠日點:"約 370 AU",軌道傾角:"89.4° (近垂直)"}},{name:"3200 Phaethon",nameCH:"法厄同 (3200 Phaethon)",type:"asteroid",radius:.25,realScaleRadius:.003,color:10066329,texture:"asteroid.jpg",distance:140,realScaleDistance:130,speed:.012,inclination:22.2,description:"3200 Phaethon 是一顆軌道極其特殊的阿波羅型小行星，具有「岩石彗星」的特徵。它是每年 12 月「雙子座流星雨」的母體，這在流星雨起源中相當罕見（大多數流星雨源自彗星）。它在近日點時會極度接近太陽，表面溫度高達 750°C，導致其岩石表面因熱脹冷縮碎裂，並釋放出構成流星雨的塵埃粒子。",details:{週期:"約 1.43 年",直徑:"約 5.1 km",分類:"阿波羅型小行星 / 岩石彗星",近日點:"0.14 AU (極接近太陽)"}},{name:"Gonggong",nameCH:"共工星",type:"dwarf_planet_candidate",radius:.5,realScaleRadius:.1,color:13386786,texture:"gonggong.jpg",distance:650,realScaleDistance:6700,speed:9e-4,inclination:30.7,obliquity:0,description:"柯伊伯帶中繞行太陽的大型天體，具有顯著的紅色表面。它是目前太陽系中已知最大的未命名天體之一（在正式命名前曾被稱為 2007 OR10）。",details:{質量:"~1.75 × 10²¹ kg",直徑:"1,230 km",表面溫度:"-244 °C"}},{name:"Quaoar",nameCH:"創神星",type:"dwarf_planet_candidate",radius:.45,realScaleRadius:.086,color:8930338,texture:"quaoar.jpg",distance:510,realScaleDistance:4370,speed:.0013,inclination:8,obliquity:0,description:"柯伊伯帶中的大型傳統天體，曾被描述為具有結晶水冰的表面。最近發現它擁有一圈位於羅里不規則極限外的行星環。",details:{質量:"1.4 × 10²¹ kg",直徑:"1,110 km",表面溫度:"-230 °C"}},{name:"Sedna",nameCH:"賽德娜",type:"dwarf_planet_candidate",radius:.42,realScaleRadius:.08,color:16729344,texture:"sedna.jpg",distance:850,realScaleDistance:8500,speed:5e-4,inclination:11.9,obliquity:0,description:"太陽系中最遙遠且最神祕的天體之一。它的軌道極端扁平，遠日點距離太陽約 937 AU。其驚人的紅色表面可能來自長期的宇宙射線照射。",details:{質量:"約 1.0 × 10²¹ kg",直徑:"約 1,000 km",表面溫度:"-240 °C"}},{name:"Orcus",nameCH:"亡神星",type:"dwarf_planet_candidate",radius:.4,realScaleRadius:.075,color:11184810,texture:"orcus.jpg",distance:420,realScaleDistance:3940,speed:.0016,inclination:20.5,obliquity:0,description:"有時被稱為「反冥王星」，因為它的軌道與冥王星非常相似，但相位相反。它與冥王星一樣與海王星具有 2:3 的共振軌道。",details:{質量:"6.4 × 10²⁰ kg",直徑:"910 km",表面溫度:"-230 °C"}},{name:"Salacia",nameCH:"薩拉客亞",type:"dwarf_planet_candidate",radius:.38,realScaleRadius:.07,color:4469538,texture:"salacia.jpg",distance:480,realScaleDistance:4220,speed:.0014,inclination:23.9,obliquity:0,description:"大型柯伊伯帶天體，具有極低的反照率，表面極其黑暗。目前尚未觀察到其表面存在顯著的冰層覆蓋。",details:{質量:"4.5 × 10²⁰ kg",直徑:"850 km",表面溫度:"-230 °C"}},{name:"Varuna",nameCH:"伐樓拿",type:"asteroid",radius:.4,realScaleRadius:.07,geometryScale:[1.5,1,.6],color:13386786,texture:"varuna.jpg",distance:530,realScaleDistance:4300,speed:.0013,inclination:17.2,obliquity:0,description:"柯伊伯帶中大型的天體，也是首批被發現的偏遠天體之一。它以極快的自轉與長橢球體的造型著稱，表面覆蓋著豐富的水冰與托林。",details:{質量:"3.7 × 10²⁰ kg",直徑:"約 700 - 800 km",表面溫度:"-230 °C"}},{name:"Máni",nameCH:"瑪尼 (2002 MS4)",type:"dwarf_planet_candidate",radius:.35,realScaleRadius:.065,color:5592405,texture:"mani.jpg",distance:550,realScaleDistance:4170,speed:.0014,inclination:17.7,obliquity:0,description:"大型柯伊伯帶天體，也是目前已知未命名（近期正式獲名為 Máni）的天體中最大的一個。它的直徑約為 800 公里，表面極其黑暗，主要由水冰和乾冰組成。",details:{質量:"未知",直徑:"約 800 km",表面溫度:"-230 °C"}},{name:"Oumuamua",nameCH:"斥候星 (1I/ʻOumuamua)",type:"interstellar",radius:.3,realScaleRadius:.05,geometryScale:[2.5,.4,.4],color:8930372,texture:"oumuamua.jpg",distance:0,speed:.002,pathPoints:[[-45e3,3e4,-45e3],[-15e3,1e4,-15e3],[-400,280,-400],[-50,40,-50],[10,5,0],[60,-10,80],[500,-150,700],[15e3,-4e3,18e3],[4e4,-12e3,55e3]],description:"人類觀察到的首個太陽系外星際天體。它的形狀極端，呈現雪茄狀或盤狀，並在離開太陽系時表現出非引力加速度。",details:{質量:"未知",長度:"約 100-1,000 m",最高速度:"87.7 km/s"}},{name:"2I/Borisov",nameCH:"鮑里索夫彗星",type:"interstellar",isComet:!0,radius:.8,realScaleRadius:.6,color:8965375,texture:"borisov.jpg",distance:0,speed:15e-5,pathPoints:[[45e3,32e3,18e3],[18e3,12e3,6e3],[600,450,250],[100,80,50],[40,30,0],[100,-40,-200],[700,-300,-1e3],[12e3,-6e3,-2e4],[48e3,-25e3,-75e3]],description:"史上發現的第二個星際天體，也是第一顆星際彗星。它來自太陽系外，攜帶著異星系的冰與塵。當它接近太陽時，展現出了與太陽系彗星相似的噴發特徵。",details:{發現時間:"2019年8月30日",發現者:"珍納迪·鮑里索夫",偏心率:"3.35 (極高雙曲線)",核心直徑:"約 0.5 - 1 km",主要成分:"富含一氧化碳與水冰",特性:"典型的星際訪客"}},{name:"ATLAS",nameCH:"3I/亞特拉斯 (C/2019 Y4)",type:"interstellar",radius:.35,realScaleRadius:.07,color:5605546,texture:"atlas.jpg",isComet:!0,distance:0,speed:.0018,pathPoints:[[-5e4,5e3,2e4],[-18e3,1800,7e3],[-2e3,200,800],[-150,10,40],[-10,5,0],[100,30,-150],[900,300,-1500],[15e3,5e3,-25e3],[55e3,2e4,-8e4]],description:"一顆在接近太陽時碎裂的彗星，曾被預期將成為極亮的天體。它的軌道與 1844 年大彗星非常相似。",details:{質量:"未知",碎片數:"多個",近日點:"0.25 AU"}}];function Rg(i,e){const t=[],n=e?new ji(e):new ji;let s=!1;const r=new P,a=new P,u=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768?2:1;ou.forEach(c=>{const d=new hn(1,128,128);if(c.isIrregular){const g=d.attributes.position,p=new P;for(let h=0;h<g.count;h++){p.fromBufferAttribute(g,h);const S=Math.sin(p.x*2.5+p.y*1.8)*.35+Math.cos(p.z*2.2+p.x*1.5)*.25+Math.sin(p.y*4+p.z*2.5)*.2,b=.7+Math.pow(p.x,2)*.8,E=Math.cos(p.x*1.4)*.3,T=Math.sin(p.x*1.6)*.25;p.y+=E,p.z+=T;const w=1+Math.sin(Math.atan2(p.y,p.z)*3)*.15;let C=0;const F=Math.sqrt(Math.pow(p.x+.6,2)+Math.pow(p.z-.5,2));F<.8&&(C=(1-Math.pow(F/.8,2))*.45),p.multiplyScalar(1+S*.7-C),p.y*=b*w,p.z*=b*(w*.9),g.setXYZ(h,p.x,p.y,p.z)}d.computeVertexNormals()}let f;if(c.name==="Sun"){const g=n.load(`textures/${c.texture}?v=25.5`);g.wrapS=Nn,g.wrapT=Nn,g.generateMipmaps=!1,g.minFilter=yt,g.magFilter=yt,f=new yn({map:g,transparent:!1})}else if(c.texture){const g=n.load(`textures/${c.texture}?v=27.4`);g.wrapS=Nn,g.wrapT=_n,g.colorSpace=Gt,g.anisotropy=16,g.minFilter=jn,g.generateMipmaps=!0,f=new Zt({map:g,emissive:c.isComet||c.type==="comet"?4491519:c.type==="star"?16777215:2236962,emissiveMap:c.type==="star"||c.isComet||c.type==="comet"?g:null,emissiveIntensity:c.isComet||c.type==="comet"?.8:c.type==="star"?1:.05,roughness:1,metalness:0})}else f=new Zt({color:c.color,emissive:c.type==="star"?c.color:0,emissiveIntensity:c.type==="star"?1:0});const m=new Ne(d,f);m.userData=c,m.name=c.name,m.rotation.z=ct.degToRad(c.obliquity||0),c.geometryScale?m.scale.set(c.radius*c.geometryScale[0],c.radius*c.geometryScale[1],c.radius*c.geometryScale[2]):m.scale.setScalar(c.radius);const _={name:c.name,data:c,mesh:m,distance:c.distance,speed:c.speed,angle:Math.random()*Math.PI*2,rotationSpeed:c.rotationSpeed||.005,satellites:[],orbitLine:null,ringMesh:null,obliquity:ct.degToRad(c.obliquity||0),isSunShader:c.name==="Sun"};if(c.name!=="Sun"){let g,p=54015;c.type==="dwarf_planet"?p=16755200:c.type==="dwarf_planet_candidate"?p=13395711:c.type==="interstellar"?p=8978431:c.type==="comet"||c.isComet?p=16724787:c.type==="asteroid"&&(p=8716032);const h=new ys({color:p,transparent:!0,opacity:.35,blending:$t,linewidth:u});if(c.pathPoints){const S=c.pathPoints.map(C=>new P(C[0],C[1],C[2])),b=!!c.isClosed,E=new Ll(S,b);_.orbitCurve=E,_.progress=Math.random();const T=E.getPoints(b?1e3:400),w=new st().setFromPoints(T);g=b?new cr(w,h):new Kc(w,h)}else{const b=new Qs(0,0,c.distance,c.distance,0,2*Math.PI,!1,0).getPoints(256),E=new st().setFromPoints(b);g=new cr(E,h),g.rotation.x=Math.PI/2+ct.degToRad(c.inclination||0)}i.add(g),_.orbitLine=g}if(c.ring){const g=new Ar(c.ring.innerRadius/c.radius,c.ring.outerRadius/c.radius,128),p=g.attributes.position,h=g.attributes.uv;for(let T=0;T<p.count;T++){const w=p.getX(T),C=p.getY(T),F=Math.sqrt(w*w+C*C),v=c.ring.innerRadius/c.radius,M=c.ring.outerRadius/c.radius,R=(F-v)/(M-v);h.setXY(T,.5,R)}const S=n.load("textures/saturn_ring_v3.png?v=23.4"),b=new Zt({map:S,side:It,transparent:!0,opacity:.85}),E=new Ne(g,b);E.rotation.x=Math.PI/2,m.add(E),_.ringMesh=E}if(c.satellites&&c.satellites.forEach(g=>{let p;if(g.type==="space_station"){const M=new un,R=new Zt({color:14540253,metalness:.5,roughness:.4}),I=new Zt({color:1981023,metalness:.8,roughness:.2,emissive:4386,emissiveIntensity:.2,side:It}),O=new Zt({color:16755200,metalness:.9,roughness:.1,emissive:4465152,emissiveIntensity:.2,side:It});if(g.name==="ISS"){const V=new Ne(new zt(10,.15,.15),R);M.add(V);const H=new un,z=new Ne(new ln(.4,.4,1.8,12),R);z.rotation.z=Math.PI/2,H.add(z);const B=new Ne(new ln(.3,.3,1.2,12),R);B.position.set(0,.6,.1),H.add(B),M.add(H),[-4.6,-3.8,3.8,4.6].forEach(ie=>{const Ee=new Ne(new zt(.04,4,1.3),O);Ee.position.set(ie,2.2,0),M.add(Ee);const Ae=new Ne(new zt(.04,4,1.3),O);Ae.position.set(ie,-2.2,0),M.add(Ae)});const J=new Zt({color:16777215,metalness:.2,roughness:.8}),te=new Ne(new zt(.02,1.5,2),J);te.position.set(-1,-.8,0),M.add(te)}else if(g.name==="CSS"){const V=new Ne(new ln(.5,.5,3.2,16),R);V.rotation.z=Math.PI/2,M.add(V);const H=new Ne(new ln(.45,.45,2.8,16),R);H.position.set(.6,1.4,0),M.add(H);const z=new Ne(new ln(.45,.45,2.8,16),R);z.position.set(.6,-1.4,0),M.add(z);const B=new zt(.03,1.5,7),q=new Ne(B,I);q.position.set(.6,3.2,0),M.add(q);const J=new Ne(B,I);J.position.set(.6,-3.2,0),M.add(J);const te=new Ne(new zt(.03,5,.8),I);te.position.set(-2,0,0),M.add(te)}p=M}else{const M=new hn(1,64,64);let R;if(g.texture){const I=n.load(`textures/${g.texture}?v=25.1`);I.wrapS=Nn,I.wrapT=Nn,I.colorSpace=Gt,I.anisotropy=8,R=new Zt({map:I,emissive:2236962,emissiveIntensity:.05})}else R=new Zt({color:g.color});p=new Ne(M,R)}p.scale.setScalar(g.radius),p.userData=g,p.name=g.name,i.add(p);const S=new Qs(0,0,g.distance,g.distance,0,2*Math.PI,!1,0).getPoints(128),b=new st().setFromPoints(S);let E;g.type==="space_station"?E=new ad({color:16777215,transparent:!0,opacity:.3,blending:$t,dashSize:.5,gapSize:.3,linewidth:u}):E=new ys({color:16777215,transparent:!0,opacity:.15,blending:$t,linewidth:u});const T=new cr(b,E);g.type==="space_station"&&T.computeLineDistances();const w={mesh:p,data:g,angle:Math.random()*Math.PI*2,orbitLine:T,distance:g.distance,orbitRelativeToEquator:g.orbitRelativeToEquator!==!1};_.satellites.push(w);const C=_.obliquity,F=ct.degToRad(g.inclination||0),v=w.orbitRelativeToEquator?C+F:F;T.rotation.x=Math.PI/2+v,i.add(T)}),c.isComet||c.type==="comet"){const g=new hn(1.8,32,32),p=new yn({color:8978380,transparent:!0,opacity:.15,blending:$t,side:Ut}),h=new Ne(g,p);m.add(h);const S=new Dr(1.2,25,32,1,!0);S.translate(0,12.5,0),S.rotateX(Math.PI/2);const b=new yn({color:6737151,transparent:!0,opacity:.2,blending:$t,side:It}),E=new Ne(S,b);i.add(E),_.tailMesh=E}t.push(_),i.add(m)});let l=1;return{setSpeedMultiplier:c=>{l=c},setViewMode:c=>{s=c,t.forEach(d=>{const f=d.data,m=s?f.realScaleRadius:f.radius,_=s?f.realScaleDistance:f.distance;if(f.geometryScale?d.mesh.scale.set(m*f.geometryScale[0],m*f.geometryScale[1],m*f.geometryScale[2]):d.mesh.scale.setScalar(m),d.mesh.updateMatrix(),d.distance=_,d.orbitLine)if(f.pathPoints){const g=E=>s?E<=60?2.5:E<=160?2.5+(E-60)/100*2.3600000000000003:E<=200?4.86+(E-160)/40*2.2699999999999996:E<=300?7.13+(E-200)/100*1.2000000000000002:8.35:1,p=f.pathPoints.map(E=>{const T=new P(E[0],E[1],E[2]),w=T.length();return w<.001?T:T.multiplyScalar(g(w))}),S=new Ll(p,!!f.isClosed).getPoints(f.isClosed?1e3:800);d.orbitLine.geometry.dispose();const b=new st().setFromPoints(S);d.orbitLine.geometry=b}else{const p=new Qs(0,0,_,_,0,2*Math.PI,!1,0).getPoints(256);d.orbitLine.geometry.dispose();const h=new st().setFromPoints(p);d.orbitLine.geometry=h}if(d.ringMesh){const g=d.data.ring,p=s?g.realInner:g.innerRadius,h=s?g.realOuter:g.outerRadius;d.ringMesh.geometry.dispose(),d.ringMesh.geometry=new Ar(p/m,h/m,128);const S=d.ringMesh.geometry.attributes.position,b=d.ringMesh.geometry.attributes.uv,E=p/m,T=h/m;for(let w=0;w<S.count;w++){const C=Math.sqrt(S.getX(w)**2+S.getY(w)**2);b.setXY(w,.5,(C-E)/(T-E))}}d.satellites.forEach(g=>{const p=g.data,h=s&&p.realScaleRadius||p.radius,S=s&&p.realScaleDistance||p.distance;if(g.mesh.scale.setScalar(h),g.mesh.updateMatrix(),g.distance=S,g.orbitLine){const b=new Qs(0,0,S,S,0,2*Math.PI,!1,0);g.orbitLine.geometry.setFromPoints(b.getPoints(128)),p.type==="space_station"&&g.orbitLine.computeLineDistances()}})})},isRealScale:()=>s,setOrbitsVisibleByType:(c,d)=>{t.forEach(f=>{f.data.type===c&&f.orbitLine&&(f.orbitLine.visible=d)})},setSatOrbitsVisibleByType:(c,d)=>{t.forEach(f=>{f.satellites.forEach(m=>{(m.data.type||"satellite")===c&&m.orbitLine&&(m.orbitLine.visible=d)})})},getBodies:()=>t,update:c=>{const d=c*60;t.forEach(f=>{if(f.orbitCurve&&f.data.pathPoints)f.progress+=f.speed*l*d,f.progress>1&&(f.progress=0),f.orbitCurve.getPoint(f.progress,r),f.mesh.position.copy(r);else if(f.distance>0){f.angle+=f.speed*l*d;const m=ct.degToRad(f.data.inclination||0),_=Math.cos(f.angle)*f.distance,g=Math.sin(f.angle)*f.distance;f.mesh.position.set(_,g*-Math.sin(m),g*Math.cos(m))}if(f.isSunShader&&f.mesh.material.userData.sunShader&&(f.mesh.material.userData.sunShader.uniforms.uTime.value+=c*l),f.mesh.rotateY(f.rotationSpeed*l*d),f.satellites.forEach(m=>{const _=m.distance||m.data.distance,g=f.obliquity,p=ct.degToRad(m.data.inclination||0),h=m.orbitRelativeToEquator?g+p:p;m.angle+=m.data.speed*l*d;const S=Math.cos(m.angle)*_,b=Math.sin(m.angle)*_;m.mesh.position.set(f.mesh.position.x+S,f.mesh.position.y+b*-Math.sin(h),f.mesh.position.z+b*Math.cos(h)),m.mesh.rotateY(.01*l*d),m.orbitLine&&m.orbitLine.position.copy(f.mesh.position)}),f.tailMesh){f.tailMesh.position.copy(f.mesh.position),r.copy(f.mesh.position).normalize(),a.addVectors(f.mesh.position,r),f.tailMesh.lookAt(a);const m=f.mesh.position.length(),_=s?5e3:600;f.tailMesh.material.opacity=Math.max(.1,.6-m/_)}})}}}function Pg(i,e,t=2e3){const n=new un,s=(c,d,f)=>{const m=new st,_=[],g=[],p=new ze;for(let S=0;S<c;S++){const E=Math.random()*Math.PI*2,T=Math.acos(2*Math.random()-1),w=4e4*Math.sin(T)*Math.cos(E),C=4e4*Math.sin(T)*Math.sin(E),F=4e4*Math.cos(T);_.push(w,C,F);const M=.15+Math.pow(Math.random(),4)*.85;p.setHSL(0,0,M),g.push(p.r,p.g,p.b)}m.setAttribute("position",new gt(_,3)),m.setAttribute("color",new gt(g,3));const h=new Zn({size:d,vertexColors:!0,transparent:!0,opacity:f,sizeAttenuation:!1});return new pi(m,h)};n.add(s(t,.5,.6));const a=(e?new ji(e):new ji).load("textures/starmap_8k.jpg?v=23.0",c=>{c.wrapS=Nn,c.minFilter=yt,c.magFilter=yt,c.anisotropy=16,c.generateMipmaps=!1}),o=new hn(2e6,64,64),u=new yn({map:a,side:Ut,depthWrite:!1,transparent:!0,opacity:.25,color:8947848}),l=new Ne(o,u);return l.rotation.x=ct.degToRad(-63),l.rotation.z=ct.degToRad(45),n.add(l),i.add(n),{starGroup:n,skySphere:l,update:c=>{n.position.copy(c)}}}function Dg(i){const e=new un,t=new Zt({color:16777215,metalness:.3,roughness:.5}),n=new Zt({color:8947848,metalness:.6,roughness:.3}),s=new Zt({color:16755200,emissive:16733440,emissiveIntensity:2}),r=new yn({color:16746496,transparent:!0,opacity:.8}),a=new Dr(1,4,4),o=new Ne(a,t);o.rotation.x=Math.PI/2,o.scale.set(1.5,1,.4),e.add(o);const u=new zt(2.5,.1,1.5),l=new Ne(u,t);l.position.set(0,0,-.5),e.add(l);const c=new zt(.4,.3,1.2),d=new Ne(c,n);d.position.set(0,.2,-.2),e.add(d);const f=new zt(.1,.1,.1);for(let v=0;v<40;v++){const M=Math.random()>.5?1:-1,R=(Math.random()-.5)*3,I=(Math.random()*.8+.2)*M,O=(Math.random()-.5)*.15,V=Math.random()>.4,H=new Ne(f,V?s:n);H.position.set(I,O,R),H.scale.set(Math.random()*.5+.5,Math.random()*.5+.5,Math.random()*2),e.add(H)}const m=new zt(.8,.3,.5),_=new Ne(m,n);_.position.set(0,0,-2),e.add(_);const g=new ln(.15,.1,.3,8),p=[];[{x:-.25,y:0},{x:.25,y:0},{x:0,y:.1}].forEach(v=>{const M=new Ne(g,n);M.rotation.x=Math.PI/2,M.position.set(v.x,v.y,-2.2),e.add(M);const R=new Ne(new hn(.2,8,8),r);R.position.set(v.x,v.y,-2.3),e.add(R),p.push(R)});const S=new ln(.01,.01,1,8),b=new Ne(S,n);b.rotation.x=Math.PI/2,b.position.set(0,0,2),e.add(b);const E=new Qc(16755200,15,50);E.position.set(0,2,0),e.add(E);const T=new hd(16777215,40,300,Math.PI/8,.5);T.position.set(0,0,2),T.target.position.set(0,0,10),e.add(T),e.add(T.target),e.scale.set(4,4,4),e.name="AdvancedExplorer",i.add(e);const w=new P,C=.08,F=.98;return{mesh:e,velocity:w,thrust:C,friction:F,update:()=>{e.position.add(w),w.multiplyScalar(F);const v=w.length();p.forEach(M=>{const R=.8+Math.random()*.4+v*4;M.scale.set(R,R,R),M.material.opacity=.6+Math.min(v*3,.4)})}}}function Lg(i){const t=new st,n=new Float32Array(8e3*3),s=new Float32Array(8e3),r=[],a=72,o=105;for(let d=0;d<8e3;d++){const f=ct.lerp(a,o,Math.random()),m=Math.random()*Math.PI*2,_=(Math.random()-.5)*4;n[d*3]=Math.cos(m)*f,n[d*3+1]=_,n[d*3+2]=Math.sin(m)*f,s[d]=Math.random()*.15+.05;const g=.01/Math.sqrt(f)*(Math.random()*.5+.75);r.push({radius:f,angle:m,y:_,speed:g})}t.setAttribute("position",new mt(n,3)),t.setAttribute("size",new mt(s,1));const u=new Zn({color:8947848,size:.1,transparent:!0,opacity:.8,sizeAttenuation:!0}),l=new pi(t,u);i.add(l);let c=!1;return{mesh:l,update:(d,f)=>{const m=l.geometry.attributes.position;for(let _=0;_<8e3;_++){const g=r[_];g.angle+=g.speed*d*f,m.setXYZ(_,Math.cos(g.angle)*g.radius,g.y,Math.sin(g.angle)*g.radius)}m.needsUpdate=!0},setViewMode:d=>{c=d;const f=c?220:72,m=c?420:105,_=c?10:1;for(let g=0;g<8e3;g++){const p=r[g];(p.radius-(c?60:220))/(c?25:200),p.ratio===void 0&&(p.ratio=(p.radius-72)/33,p.yBase=p.y),p.radius=ct.lerp(f,m,p.ratio),p.y=p.yBase*_,p.speed=(c?.005:.01)/Math.sqrt(p.radius)*(.75+Math.random()*.5)}},setVisible:d=>{l.visible=d}}}function Ig(i){const t=new st,n=new Float32Array(12e3*3),s=new Float32Array(12e3),r=[],a=450,o=800;for(let c=0;c<12e3;c++){const d=ct.lerp(a,o,Math.pow(Math.random(),.8)),f=Math.random()*Math.PI*2,m=(Math.random()-.5)*(d*.1);n[c*3]=Math.cos(f)*d,n[c*3+1]=m,n[c*3+2]=Math.sin(f)*d,s[c]=Math.random()*.12+.03;const _=.002/Math.sqrt(d)*(Math.random()*.5+.75);r.push({radius:d,angle:f,y:m,yBase:m,speed:_,ratio:(d-a)/(o-a)})}t.setAttribute("position",new mt(n,3)),t.setAttribute("size",new mt(s,1));const u=new Zn({color:8965375,size:.12,transparent:!0,opacity:.5,sizeAttenuation:!0,blending:$t}),l=new pi(t,u);return i.add(l),{mesh:l,update:(c,d)=>{const f=l.geometry.attributes.position;for(let m=0;m<12e3;m++){const _=r[m];_.angle+=_.speed*c*d,f.setXYZ(m,Math.cos(_.angle)*_.radius,_.y,Math.sin(_.angle)*_.radius)}f.needsUpdate=!0},setViewMode:c=>{const d=c?5e3:450,f=c?15e3:800,m=c?15:1;for(let _=0;_<12e3;_++){const g=r[_];g.radius=ct.lerp(d,f,g.ratio),g.y=g.yBase*m,g.speed=.002/Math.sqrt(g.radius)*(.75+Math.random()*.5)}},setVisible:c=>{l.visible=c}}}function Ug(i){const t=new st,n=new Float32Array(2e4*3),s=new Float32Array(2e4*3);let r=15e3,a=35e3;const o=[];for(let f=0;f<2e4;f++){const m=ct.lerp(r,a,Math.random()),_=Math.random(),g=Math.random(),p=2*Math.PI*_,h=Math.acos(2*g-1),S=m*Math.sin(h)*Math.cos(p),b=m*Math.sin(h)*Math.sin(p),E=m*Math.cos(h);n[f*3]=S,n[f*3+1]=b,n[f*3+2]=E;const T=.5+Math.random()*.5;s[f*3]=.8*T,s[f*3+1]=.9*T,s[f*3+2]=T,o.push({initialRadius:m,theta:p,phi:h,u:_,v:g,speed:(Math.random()-.5)*1e-4})}t.setAttribute("position",new mt(n,3)),t.setAttribute("color",new mt(s,3));const u=new Zn({size:8,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,blending:$t,depthWrite:!1}),l=new pi(t,u);i.add(l),l.visible=!0;let c=r,d=a;return{mesh:l,update:(f,m)=>{if(!l.visible)return;const _=l.geometry.attributes.position;for(let g=0;g<2e4;g++){const p=o[g];p.theta+=p.speed*f*m;const h=p.currentRadius||p.initialRadius;_.setXYZ(g,h*Math.sin(p.phi)*Math.cos(p.theta),h*Math.sin(p.phi)*Math.sin(p.theta),h*Math.cos(p.phi))}_.needsUpdate=!0},setViewMode:f=>{const m=f?6:1;c=15e3*m,d=35e3*m;for(let _=0;_<2e4;_++){const g=o[_],p=(g.initialRadius-15e3)/2e4;g.currentRadius=ct.lerp(c,d,p)}u.size=f?25:8,u.opacity=f?.25:.4},setVisible:f=>{l.visible=f}}}const Yo=[{name:"Alpha Centauri",nameCH:"半人馬座 α",distanceFromSun:276e3,menuIcon:"textures/alphacentauri_a.png",position:{x:-103e3,y:-241e3,z:-86e3},stars:[{name:"Alpha Centauri A",nameCH:"南門二 A",type:"star",radius:1.227,color:16774369,texture:"alphacentauri_a.png",emissiveIntensity:1.5,position:{x:0,y:0,z:0},description:"半人馬座 α A（南門二 A）是南門二雙星系統中的主星，其光譜類型 G2V 與太陽相似，但體積稍大且更亮。",details:{質量:"1.100 太陽質量",半徑:"1.227 太陽半徑",直徑:"1.227 太陽直徑",光度:"1.519 太陽光度",視星等:"-0.01",絕對星等:"4.38",核心溫度:"5,790 K",光譜類型:"G2V",自轉週期:"22 天"},planets:[{name:"Alpha Centauri B",nameCH:"南門二 B",type:"star",radius:.865,color:16765601,texture:"alphacentauri_b.png",orbit:{radius:1265,inclination:15,speed:.1},description:"半人馬座 α B（南門二 B）是南門二雙星系統中的伴星，是一顆橙色的 K1V 型主序星，體積與亮度均略小於太陽。",details:{質量:"0.907 太陽質量",半徑:"0.865 太陽半徑",直徑:"0.865 太陽直徑",光度:"0.500 太陽光度",視星等:"+1.33",絕對星等:"5.71",核心溫度:"5,260 K",光譜類型:"K1V",自轉週期:"41 天"}},{name:"Proxima Centauri",nameCH:"比鄰星",type:"star",radius:.141,color:16729344,texture:"proxima_real.png",orbit:{radius:6500,inclination:45,speed:.05},description:"距離太陽最近的恆星，是一顆活躍的紅矮星，屬於閃焰星（變星編號為半人馬座 V645），擁有三顆已知行星。",details:{質量:"0.122 太陽質量",半徑:"0.141 太陽半徑",直徑:"0.141 太陽直徑",光度:"0.0017 太陽光度",視星等:"11.13",絕對星等:"15.60",表面溫度:"3,042 K",光譜類型:"M5.5Ve",年齡:"48.5 億年"},planets:[{name:"Proxima Centauri d",nameCH:"比鄰星 d",type:"planet",radius:.1,color:9127187,texture:"proxima_d.png",orbit:{radius:15,speed:1.5,inclination:0},description:"2022年發現的次地球質量行星，其軌道極其接近主星。質量至少是地球質量的四分之一（或火星質量的兩倍），是目前已知質量最輕的系外行星之一。",details:{質量:"≥ 0.26 ± 0.05 地球質量",平均半徑:"≃ 0.81 ± 0.08 地球半徑",半長軸:"0.029 AU (4.3 × 10⁶ km)",表面溫度:"360 K (87 °C)",公轉週期:"5.122 天",發現日期:"2022 年"}},{name:"Proxima Centauri b",nameCH:"比鄰星 b",type:"planet",radius:.22,color:13458524,texture:"proxima_b.png",orbit:{radius:30,speed:.8,inclination:0},description:"位於適居帶內的類地行星，是已知距離太陽系最近的系外行星。其質量下限為 1.27 地球質量，若密度與地球相當，半徑約為 1.1 地球半徑。",details:{質量:"≥ 1.27 地球質量",直徑:"≥ 1.1 地球直徑",表面溫度:"234 K",公轉週期:"11.2 天",發現日期:"2016 年"}},{name:"Proxima Centauri c",nameCH:"比鄰星 c",type:"planet",radius:.5,color:4734347,texture:"proxima_c.png",orbit:{radius:149,speed:.05,inclination:133},description:"一顆超級地球或迷你海王星，被認為是系統中的『海王星』。質量約為地球的 7 倍，距離主星約 1.49 AU，環境極其寒冷。",details:{質量:"7.0 ± 1.0 地球質量",半長軸:"1.489 AU",離心率:"0.04",軌道傾角:"133°",表面溫度:"39 K",公轉週期:"1,928 天 (5.28 年)",發現日期:"2019 年"}}]}]}]},{name:"Barnard's Star",nameCH:"巴納德星",distanceFromSun:376916,menuIcon:"textures/barnard_star.png",position:{x:-3600,y:-375400,z:30800},stars:[{name:"Barnard's Star",nameCH:"巴納德星",type:"star",radius:.196,color:16731904,texture:"barnard_star_real.png",emissiveIntensity:2.2,description:"巴納德星是已知自行運動最快的恆星，也是一顆非常古老的紅矮星，年齡約為 100 億年。",details:{質量:"0.162 太陽質量",半徑:"0.196 太陽半徑",光度:"0.0035 太陽光度",視星等:"9.51",絕對星等:"13.24",核心溫度:"3,223 K",表面溫度:"3,223 K",光譜類型:"M4V"}}]},{name:"Wolf 359",nameCH:"沃夫 359",distanceFromSun:497074,menuIcon:"textures/wolf359.png",position:{x:-264e3,y:154e3,z:-389e3},stars:[{name:"Wolf 359",nameCH:"沃夫 359",type:"star",radius:.16,color:8917248,texture:"wolf359_real.png",emissiveIntensity:1.2,description:"沃夫 359 是一顆極其暗淡且低溫的紅矮星，也是著名的閃焰星（CN Leonis）。",details:{質量:"0.09 太陽質量",半徑:"0.16 太陽半徑",光度:"0.00002 太陽光度",視星等:"13.54",絕對星等:"16.64",核心溫度:"2,800 K",表面溫度:"2,800 K",光譜類型:"M6.5Ve"}}]},{name:"Lalande 21185",nameCH:"拉蘭德 21185",distanceFromSun:525532,menuIcon:"textures/lalande21185.png",position:{x:-84e3,y:512e3,z:98e3},stars:[{name:"Lalande 21185",nameCH:"拉蘭德 21185",type:"star",radius:.393,color:16729088,texture:"lalande21185_real.png",emissiveIntensity:3,description:"拉蘭德 21185 是北天球最接近太陽系的紅矮星系統之一，位於大熊座。",details:{質量:"0.46 太陽質量",半徑:"0.393 太陽半徑",光度:"0.025 太陽光度",視星等:"7.52",絕對星等:"10.48",核心溫度:"3,828 K",表面溫度:"3,828 K",光譜類型:"M2V"}}]},{name:"Sirius",nameCH:"天狼星系",distanceFromSun:543873,menuIcon:"textures/sirius_a.png",position:{x:-102e3,y:-156e3,z:51e4},stars:[{name:"Sirius A",nameCH:"天狼星 A",type:"star",radius:1.711,color:12307711,texture:"sirius_a_real.png",emissiveIntensity:3.5,description:"全天最亮的恆星，是一顆藍白色的主序星。",details:{質量:"2.02 太陽質量",半徑:"1.711 太陽半徑",光度:"25.4 太陽光度",視星等:"-1.47",絕對星等:"1.42",核心溫度:"9,940 K",表面溫度:"9,940 K",光譜類型:"A1V"},planets:[{name:"Sirius B",nameCH:"天狼星 B",type:"star",radius:.05,color:13426175,texture:"sirius_b_real.png",emissiveIntensity:1.5,orbit:{radius:1100,inclination:20,speed:.05},description:"著名的白矮星伴星，密度極高，體積僅與地球相當。",details:{質量:"0.978 太陽質量",體積:"與地球相當",半徑:"0.0084 ± 3% 太陽半徑",光度:"0.026 太陽光度",視星等:"8.30",絕對星等:"11.18",核心溫度:"25,200 K",表面溫度:"25,200 K",光譜類型:"DA2"}}]}]},{name:"Luyten 726-8",nameCH:"魯坦 726-8 (鯨魚座 BL/UV)",distanceFromSun:550196,menuIcon:"textures/luyten726_8b.png",position:{x:52e3,y:-48e4,z:-21e4},stars:[{name:"Luyten 726-8 Barycenter",nameCH:"魯坦 726-8 質心",type:"star",radius:0,planets:[{name:"Luyten 726-8 A (BL Ceti)",nameCH:"魯坦 726-8 A (鯨魚座 BL)",type:"star",radius:.14,color:16731904,texture:"bl_ceti_real.png",orbit:{radius:250,eccentricity:.621,speed:.15,inclination:10,startAngle:0},description:"聯星系統中的 A 星，變星編號為鯨魚座 BL (BL Ceti)。這是一顆典型的 M 型紅矮星，也是一顆閃焰星。",details:{質量:"0.10 太陽質量",半徑:"0.14 太陽半徑",光度:"0.00006 太陽光度",視星等:"12.54",絕對星等:"14.92",核心溫度:"2,670 K",表面溫度:"2,670 K",光譜類型:"M5.5 V"}},{name:"Luyten 726-8 B (UV Ceti)",nameCH:"魯坦 726-8 B (鯨魚座 UV)",type:"star",radius:.14,color:16724736,texture:"uv_ceti_real.png",orbit:{radius:250,eccentricity:.621,speed:.15,inclination:10,startAngle:Math.PI},description:"著名的閃焰星原型（鯨魚座 UV 型變星）。其表面活動極其劇烈，耀斑爆發時亮度可瞬間暴增。",details:{質量:"0.10 太陽質量",半徑:"0.14 太陽半徑",光度:"0.00004 太陽光度",視星等:"12.99",絕對星等:"15.37",核心溫度:"2,670 K",表面溫度:"2,670 K",光譜類型:"M6 V"}}]}]},{name:"Ross 154",nameCH:"羅斯 154",distanceFromSun:612173,menuIcon:"textures/ross154.png",position:{x:58e4,y:-19e4,z:-45e3},stars:[{name:"Ross 154",nameCH:"羅斯 154",type:"star",radius:.24,color:16729088,texture:"ross154.png",description:"著名的閃焰星，光譜類型 M3.5Ve。",details:{距離:"9.68 光年"}}]},{name:"Ross 248",nameCH:"羅斯 248",distanceFromSun:651382,menuIcon:"textures/ross248.png",position:{x:74e3,y:11e4,z:63e4},stars:[{name:"Ross 248",nameCH:"羅斯 248",type:"star",radius:.16,color:16724736,texture:"ross248.png",description:"預計未來將成為距離太陽最近的恆星。",details:{距離:"10.3 光年"}}]},{name:"Epsilon Eridani",nameCH:"波江座 ε (天苑四)",distanceFromSun:664030,menuIcon:"textures/epsilon_eridani.png",position:{x:-34e4,y:-54e4,z:-15e4},stars:[{name:"Epsilon Eridani",nameCH:"波江座 ε",type:"star",radius:.84,color:16767916,texture:"epsilon_eridani.png",description:"一顆年輕的 K2V 型主序星（天龍座 BY 型變星），擁有明顯的岩屑盤與已知行星。其特徵與早期太陽系極其相似，在 30 AU 與 60 AU 處擁有極為濃密的岩屑盤結構。",details:{距離:"10.50 光年",質量:"0.85 太陽質量",半徑:"0.84 太陽半徑",亮度:"0.28 太陽亮度",表面溫度:"5,073 K",光譜類型:"K2V",自轉週期:"11.1 天",年齡:"約 8 億年 (0.5-1.0 Gyr)",變星類型:"天龍座 BY 型變星"},planets:[{name:"Epsilon Eridani b",nameCH:"天苑四 b (HD 22049b)",type:"planet",radius:1.2,color:4620980,texture:"epsilon_eridani_b_real.png",orbit:{radius:600,speed:.15,inclination:30.1,eccentricity:.702,startAngle:.59},description:"行星編號為 HD 22049b，是一顆質量約為木星 1.55 倍的極高離心率氣態巨行星。",details:{質量:"1.55 木星質量",離心率:"0.702",公轉週期:"6.85 年 (2502 天)",發現日期:"2000 年"}}],belts:[{name:"Inner Asteroid Belt",nameCH:"類古柏帶內環 (30 AU)",minRadius:5200,maxRadius:5600,count:2e3,color:8947848,opacity:.6},{name:"Outer Asteroid Belt",nameCH:"類古柏帶外環 (60 AU)",minRadius:10600,maxRadius:11800,count:15e3,color:11193599,opacity:.8}]}]},{name:"Lacaille 9352",nameCH:"拉卡伊 9352",distanceFromSun:676678,menuIcon:"textures/lacaille9352.png",position:{x:42e4,y:-48e4,z:-25e4},stars:[{name:"Lacaille 9352",nameCH:"拉卡伊 9352",type:"star",radius:.46,color:16733440,texture:"lacaille9352.png",description:"南魚座中的紅矮星，具備極高的自行運動。",details:{距離:"10.7 光年",光譜類型:"M0.5V"}}]},{name:"Castor",nameCH:"北河二 (Castor)",distanceFromSun:3225291,menuIcon:"textures/castor_a.png",position:{x:15e5,y:12e5,z:-25e5},stars:[{name:"Castor Total Barycenter",nameCH:"北河二總系質心",type:"star",radius:0,planets:[{name:"Castor AB Barycenter",nameCH:"北河二 AB 質心",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:0},planets:[{name:"Castor A Barycenter",nameCH:"北河二 A 質心",type:"star",radius:0,orbit:{radius:8e3,speed:.05,inclination:5,startAngle:0},planets:[{name:"Castor A1 (Aa)",nameCH:"北河二 A1",type:"star",radius:2.3,color:16777215,texture:"castor_a.png",orbit:{radius:400,speed:.3,inclination:0,startAngle:0},description:"A1V 型藍白主序星 (Aa)。"},{name:"Castor A2 (Ab)",nameCH:"北河二 A2",type:"star",radius:.5,color:16729344,texture:"castor_c.png",orbit:{radius:1200,speed:.3,inclination:0,startAngle:Math.PI},description:"紅矮星伴星 (Ab)。"}]},{name:"Castor B Barycenter",nameCH:"北河二 B 質心",type:"star",radius:0,orbit:{radius:8e3,speed:.05,inclination:5,startAngle:Math.PI},planets:[{name:"Castor B1 (Ba)",nameCH:"北河二 B1",type:"star",radius:1.6,color:16777215,texture:"castor_a.png",orbit:{radius:350,speed:.5,inclination:0,startAngle:0},description:"A2V/A5V 型藍白主序星 (Ba)。"},{name:"Castor B2 (Bb)",nameCH:"北河二 B2",type:"star",radius:.5,color:16729344,texture:"castor_c.png",orbit:{radius:1e3,speed:.5,inclination:0,startAngle:Math.PI},description:"紅矮星伴星 (Bb)。"}]}]},{name:"Castor C Barycenter",nameCH:"北河二 C 質心 (YY Gem)",type:"star",radius:0,orbit:{radius:1e5,speed:.005,inclination:10,startAngle:Math.PI},planets:[{name:"Castor C1 (Ca)",nameCH:"北河二 C1",type:"star",radius:.62,color:16729344,texture:"castor_c.png",orbit:{radius:400,speed:.8,inclination:0,startAngle:0},description:"YY Gem 紅矮星 A。"},{name:"Castor C2 (Cb)",nameCH:"北河二 C2",type:"star",radius:.62,color:16729344,texture:"castor_c.png",orbit:{radius:400,speed:.8,inclination:0,startAngle:Math.PI},description:"YY Gem 紅矮星 B。"}]}]}]},{name:"Beta Lyrae",nameCH:"漸臺二 (Beta Lyrae)",distanceFromSun:606e5,menuIcon:"gradient:beta-lyrae",position:{x:-5e6,y:3e6,z:8e6},stars:[{name:"Beta Lyrae Barycenter",nameCH:"漸臺二質心",type:"star",radius:0,planets:[{name:"Beta Lyrae B (Accretor)",nameCH:"漸臺二 B (伴星)",type:"star",radius:1.4,color:52479,isDistorted:!0,distortionAxes:{x:1.2,y:1.2,z:1.5},hasAccretionDisk:!0,diskColor:16777164,diskRadius:1500,orbit:{radius:800,speed:2.2,inclination:0,startAngle:Math.PI},description:"吸積者 B，直徑約 12-14 太陽半徑。",details:{質量:"~13 太陽質量",光譜類型:"B0.5V"}},{name:"Beta Lyrae A (Donor)",nameCH:"漸臺二 A (主星)",type:"star",radius:3.2,color:13421823,isDistorted:!0,distortionAxes:{x:1.3,y:1.3,z:2.8},hasGasStream:!0,gasStreamTarget:"Beta Lyrae B (Accretor)",orbit:{radius:2400,speed:2.2,inclination:0,startAngle:0},description:"供體星 A，直徑約 30-34 太陽半徑。",details:{質量:"~3 太陽質量",光譜類型:"B7II"}}]}]},{name:"Scorpius X-1",nameCH:"天蠍座 X-1",distanceFromSun:569169e3,menuIcon:"gradient:scorpius",position:{x:2e5,y:-45e4,z:25e4},stars:[{name:"Scorpius X-1 (Neutron Star)",nameCH:"天蠍座 X-1 (中子星)",type:"star",radius:.1,color:14745599,hasAccretionDisk:!0,useProceduralDisk:!0,diskColor:8965375,diskRadius:1200,hasRelativisticJets:!0,jetColor:14745599,description:"由中子星吸取伴星物質形成吸積盤。",planets:[{name:"V818 Scorpii",nameCH:"天蠍座 V818",type:"star",radius:1.2,color:4286945,isDistorted:!0,distortionAxes:{x:1,y:1,z:2.2},hasGasStream:!0,orbit:{radius:3e3,speed:1.5,inclination:30},description:"潮汐畸變的淚滴狀供體星。"}]}]},{name:"Gaia BH1",nameCH:"蓋亞 BH1",distanceFromSun:98656116,menuIcon:"textures/sun.jpg",position:{x:-254e5,y:-953e5,z:0},stars:[{name:"Gaia BH1 Barycenter",nameCH:"蓋亞 BH1 質心",type:"star",radius:0,planets:[{name:"Gaia BH1 Star",nameCH:"蓋亞 BH1 伴星",type:"star",radius:.99,color:16774369,texture:"sun.jpg",orbit:{radius:1200,speed:.25,inclination:0},description:"一顆與太陽極其相似的 G 型主序星，與黑洞以 185.59 天的週期互繞。",details:{類型:"G型主序星",質量:"0.93 太陽質量",半徑:"0.99 太陽半徑",表面溫度:"5,850 K",公轉週期:"185.59 天"}},{name:"Gaia BH1 Black Hole",nameCH:"蓋亞 BH1 黑洞",type:"star",isBlackHole:!0,radius:.15,color:0,texture:null,emissiveIntensity:0,orbit:{radius:1200,speed:.25,inclination:0,startAngle:Math.PI},description:"目前已知距離地球最近的黑洞（約 1,560 光年）。這是一個處於休眠狀態的恆星級黑洞，不具備明顯的吸積盤。",details:{類型:"恆星黑洞",質量:"9.62 太陽質量",史瓦西半徑:"28 km",離心率:"0.45",狀態:"休眠 (Quiescent)"}}]}]},{name:"Sagittarius A*",nameCH:"人馬座 A*",distanceFromSun:1644268600,menuIcon:"gradient:galactic-center",position:{x:5e7,y:-12e7,z:-8e7},stars:[{name:"Sagittarius A*",nameCH:"人馬座 A*",type:"star",isBlackHole:!0,hasAccretionDisk:!0,diskColor:16755251,diskRadius:2e3,radius:17.2,color:0,texture:null,emissiveIntensity:0,description:"位於銀河系中心的超大質量黑洞。它是銀河系的引力核心，所有的恆星都圍繞著它運行。其強大的引力能扭曲時空，使周圍吸積盤的光線發生劇烈彎曲。",details:{類型:"超大質量黑洞",質量:"~410 萬 太陽質量",史瓦西半徑:"1,200 萬 km",距離地球:"約 2.6 萬 光年",位置:"銀河系中心"},planets:[{name:"S0-102",nameCH:"S0-102",type:"star",radius:5,color:12307711,texture:"sirius_a_real.png",emissiveIntensity:3.5,orbit:{radius:25e3,eccentricity:.7209,inclination:150.1,argumentOfPeriapsis:331.5,longitudeOfAscendingNode:325.5,speed:.15},description:"目前已知距離人馬座 A* 最近的恆星之一，軌道週期約為 11.5 年。它是研究黑洞引力與廣義相對論的重要觀測對象。",details:{類型:"B型主序星",質量:"~15 太陽質量",半徑:"~5 太陽半徑",直徑:"~10 太陽直徑",公轉週期:"11.52 年",離心率:"0.7209",軌道傾角:"150.1°",光譜類型:"B0-B3 V",表面溫度:"約 20,000 K",位置:"銀河系中心 (S星團)"}},{name:"S2",nameCH:"S2",type:"star",radius:8,color:11193599,texture:"sirius_a_real.png",emissiveIntensity:4.5,orbit:{radius:38e3,eccentricity:.88466,inclination:133.818,argumentOfPeriapsis:66.13,longitudeOfAscendingNode:227.85,speed:.11},description:"銀河中心最著名的恆星之一，軌道極其靠近人馬座 A*。2018 年觀測到其近日點通過時產生的引力紅移，完美驗證了廣義相對論。",details:{類型:"B型主序星",質量:"~14 太陽質量",半徑:"~8 太陽半徑",直徑:"~16 太陽直徑",公轉週期:"16.05 年",離心率:"0.88466",軌道傾角:"133.8°",光譜類型:"B0-B2.5 V",表面溫度:"25,000 K – 30,000 K",近日點距離:"120 AU (~17 小時光程)",近日點速率:"7650 km/s"}}]}]}];function Ng(i,e){const t=new un,n=[],s=[],r=[],a=[],o=[],u=[],l=[],c=new P,d=e?new ji(e):new ji,m=(()=>{const p=document.createElement("canvas");p.width=512,p.height=512;const h=p.getContext("2d");h.clearRect(0,0,512,512);const S=h.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);return S.addColorStop(0,"rgba(255, 255, 255, 1)"),S.addColorStop(.08,"rgba(255, 252, 240, 0.8)"),S.addColorStop(.25,"rgba(255, 242, 190, 0.35)"),S.addColorStop(.55,"rgba(255, 230, 150, 0.05)"),S.addColorStop(1,"rgba(0, 0, 0, 0)"),h.fillStyle=S,h.fillRect(0,0,512,512),new $h(p)})(),_=(g,p,h,S=0,b)=>{let E;const T=g.radius??1,w=g.type==="star"?50:40,C=T*w;if(T>0){const v=g.isDistorted?new hn(1,64,64):new hn(1,48,48),M=g.type==="star",R=g.isBlackHole;let I;if(R?I=new yn({color:0,transparent:!0,opacity:0,depthWrite:!1}):I=new Zt({color:M?0:g.color||16777215,emissive:g.color||(M?12307711:16777215),emissiveIntensity:g.emissiveIntensity??(M?6:1.2),side:It,transparent:!1,depthWrite:!0}),g.texture){const O=d.load(`textures/${g.texture}?v=${Date.now()}`);I.map=O,R||(I.emissiveMap=O,M&&g.color&&I.emissive.set(g.color))}E=new Ne(v,I),g.isDistorted&&g.distortionAxes?E.scale.set(C*(g.distortionAxes.x||1),C*(g.distortionAxes.y||1),C*(g.distortionAxes.z||1.8)):E.scale.setScalar(C),s.push(E)}else E=new Et;const F=g.distortionAxes?Math.max(g.distortionAxes.x||1,g.distortionAxes.y||1,g.distortionAxes.z||1.8):1;if(E.userData={...g,isInterstellar:!0,name:g.name,visualScale:C,maxVisualRadius:C*F,parentName:p,depth:S,angle:g.orbit?.startAngle??Math.random()*Math.PI*2},h.add(E),n.push(E),g.hasRelativisticJets){const v=new un,M=C*1100,R=new ln(C*.1,C*5.5,M,32,1,!0),I=new yn({color:g.jetColor||13432575,map:m,transparent:!0,opacity:.7,blending:$t,side:It,depthWrite:!1}),O=new Ne(R,I);O.position.y=M/2;const V=new Ne(R,I.clone());V.position.y=-M/2,V.rotation.z=Math.PI,v.add(O,V),h.add(v),u.push({group:v,parentName:g.name})}if(g.hasAccretionDisk){const M=g.diskRadius||C*25,R=new st,I=new Float32Array(225e3*3),O=new Float32Array(225e3*3),V=new ze(g.diskColor||16774604);for(let H=0;H<225e3;H++){const z=(Math.random()*.95+.05)*M+C*.45,B=Math.random()*Math.PI*2,q=Math.random(),J=(1+Math.sqrt(5))/2,te=B*J+z*1.618+q*3.14,ie=1+.22*(Math.sin(te*5.71)*Math.cos(te*11.39)+Math.sin(B*2.13)*.25),Ee=B+z/M*2.8+Math.sin(z*.05)*.45,Ae=z*ie*(.92+Math.random()*.16);I[H*3]=Math.cos(Ee)*Ae,I[H*3+2]=Math.sin(Ee)*Ae;const Ve=z/M,Ge=M*(.15+Ve*.65),$=.85+.45*(Math.sin(B*6.7+z*.015)*Math.cos(B*13.1)+Math.sin(q*62.8)*.4),de=Math.random()+Math.random()+Math.random()+Math.random()-2;I[H*3+1]=de*Ge*$*(1.1-Ve*.4);const we=.85+Math.random()*.3;O[H*3]=V.r*we,O[H*3+1]=V.g*we,O[H*3+2]=V.b*we}if(R.setAttribute("position",new mt(I,3)),R.setAttribute("color",new mt(O,3)),g.isBlackHole||g.useProceduralDisk){const H=new hn(1,64,64),z={uTime:{value:0},uColor:{value:new ze(g.diskColor||16755251)},uHorizonRadius:{value:C},uDiskRadius:{value:M||C*25},uCamPos:{value:new P},uSingularityPos:{value:new P},uLocalCamPos:{value:new P},uDiskScale:{value:1},uIsBlackHole:{value:g.isBlackHole?1:0}},B=new fn({uniforms:z,transparent:!0,side:It,depthWrite:!1,depthTest:!0,blending:fi,vertexShader:`
                        varying vec3 vWorldPos;
                        varying vec3 vLocalPos;
void main() {
    vLocalPos = position;
                            vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,fragmentShader:`
                        uniform float uTime;
                        uniform vec3 uColor;
                        uniform float uHorizonRadius;
                        uniform float uDiskRadius;
                        uniform vec3 uCamPos;
                        uniform vec3 uSingularityPos;
                        uniform vec3 uLocalCamPos;
                        uniform float uDiskScale;
                        uniform float uIsBlackHole;
                        
                        varying vec3 vWorldPos;
                        varying vec3 vLocalPos;

                        // Simplex Noise
                        float hash(float n) { return fract(sin(n) * 43758.5453123); }
                        float noise(vec3 x) {
                            vec3 p = floor(x); vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
                            float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
        mix(mix(hash(n + 113.0), hash(n + 114.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y), f.z);
}

                        float fbm(vec3 p) {
                            float v = 0.0;
                            float a = 0.5;
    for (int i = 0; i < 6; i++) {
        v += a * noise(p);
        p = p * 2.2;
        a *= 0.55;
    }
    return v;
}

void main() {
                            // Corrected Math (v45.15.0):
                            // uLocalCamPos is already in units where 1.0 = Event Horizon
                            vec3 rayOrigin = uLocalCamPos; 
                            float hRelScale = uDiskScale / uHorizonRadius;
                            vec3 localFragPos = vLocalPos * hRelScale; 
                            vec3 rayDir = normalize(localFragPos - rayOrigin);
                            
                            float closestDist = length(cross(rayDir, rayOrigin));

                            // 1. Ultra-Dense Starfield
                            vec3 starField = vec3(pow(noise(rayDir * 250.0), 20.0) * 2.5);

                            // 2. Accretion Disk - Thin Horizontal Plane
                            vec3 diskColor = vec3(0.0);
                            float diskOpacity = 0.0;
                            float dLimit = uDiskRadius / uHorizonRadius;

    // Ray-plane intersection for Y=0
    if (abs(rayDir.y) > 0.0001) {
                                float t = -rayOrigin.y / rayDir.y;
        if (t > 0.0) {
                                    vec3 p = rayOrigin + rayDir * t;
                                    float d = length(p);
            if (d > 1.25 && d < dLimit) {
                                        float shift = uTime * 0.8;
                                        float swirl = atan(p.z, p.x) + (3.0 / d) + shift;
                                        vec3 samplePos = vec3(cos(swirl) * d, 0.0, sin(swirl) * d) * 0.6;
                                        
                                        float n = fbm(samplePos + vec3(0.0, 0.0, uTime * 0.15));
                                        // High-contrast turbulent wisps
                                        float wisp = pow(n, 2.2) * 1.5;

                                        // Gargantua Palette: Burnt Orange, Fiery Amber, Deep Red
                                        vec3 inner = vec3(1.0, 0.7, 0.2); // Amber
                                        vec3 mid = vec3(0.9, 0.35, 0.05);  // Burnt Orange
                                        vec3 outer = vec3(0.6, 0.05, 0.01); // Deep Red
                                        
                                        float grad = smoothstep(1.3, dLimit, d);
                                        vec3 col = mix(inner, mid, grad * 1.5);
                col = mix(col, outer, smoothstep(0.4, 1.0, grad));

                diskColor = col * 12.0 * wisp;
                diskOpacity = smoothstep(dLimit, dLimit * 0.7, d) * smoothstep(1.25, 2.0, d) * 0.95;
            }
        }
    }

                            // 3. Gravitational Lensing (Double-Ring Warp)
                            // We boost the warping for that iconic 'circular' look around the shadow
                            float alignment = dot(normalize(rayOrigin), rayDir);
    if (alignment < -0.1) {
                                float warpStrength = 4.5 / (closestDist + 0.1);
                                float warpFactor = pow(1.0 - abs(alignment), 4.5) * warpStrength;
        if (warpFactor > 0.01) {
                                    vec3 warpCol = vec3(1.0, 0.4, 0.05) * warpFactor * 10.0;
            diskColor += warpCol;
            diskOpacity = max(diskOpacity, warpFactor * 0.8);
        }
    }

    // 4. Final Luminance Assembly
    if (closestDist < 0.98) {
        if (uIsBlackHole > 0.5) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Absolute Singularity Shadow
        } else {
            discard; // Let the underlying neutron star/star mesh show through
        }
    } else {
                                // Sharper Fiery Einstein Ring
                                float ring = pow(smoothstep(1.4, 0.98, closestDist), 12.0);
                                vec3 ringColor = vec3(1.0, 0.6, 0.1) * ring * 25.0;
                                
                                float glow = exp(-3.8 * (closestDist - 1.2));
                                vec3 glowColor = vec3(0.7, 0.2, 0.0) * glow * 6.0;
                                
                                vec3 finalRGB = starField + diskColor + ringColor + glowColor;
                                float finalA = clamp(diskOpacity + ring + glow * 0.5, 0.0, 1.0);
        gl_FragColor = vec4(finalRGB, finalA);
    }
}
`}),q=M||C*25,J=new Ne(H,B);if(J.scale.setScalar(q*1.2/C),J.userData.isBlackHoleProxy=!0,z.uDiskScale.value=q*1.2,E.add(J),g.isBlackHole){const te=new hn(1,32,32),ie=new yn({color:0}),Ee=new Ne(te,ie);Ee.scale.setScalar(1),E.add(Ee)}E.userData.proxy=J,a.push({points:J,isProcedural:!0,parentName:g.name,uniforms:z,outerRadius:q,starMesh:E})}else{const H=new Zn({size:C*2.7,map:m,transparent:!0,opacity:1,vertexColors:!0,blending:$t,depthWrite:!1,sizeAttenuation:!0}),z=new pi(R,H);h.add(z),a.push({points:z,parentName:g.name,outerRadius:M})}}if(g.hasGasStream){const M=new st,R=new Float32Array(12e3*3),I=new Float32Array(12e3*3);M.setAttribute("position",new mt(R,3)),M.setAttribute("color",new mt(I,3));const O=new Zn({size:1,map:m,transparent:!0,opacity:1,vertexColors:!0,blending:$t,depthTest:!1,depthWrite:!1,sizeAttenuation:!0}),V=new pi(M,O);V.frustumCulled=!1,V.renderOrder=100,M.boundingSphere=new Zi(new P,1e6);const H=new Float32Array(12e3),z=new Float32Array(12e3);for(let q=0;q<12e3;q++)H[q]=Math.random(),z[q]=Math.random();V.userData={tArray:H,seedArray:z,count:12e3};const B=g.gasStreamTarget||p;h.add(V),o.push({points:V,source:g.name,target:B})}if(g.orbit){const v=[],M=g.orbit.radius,R=g.orbit.eccentricity||0,I=ct.degToRad(g.orbit.argumentOfPeriapsis||0),O=ct.degToRad(g.orbit.inclination||0),V=ct.degToRad(g.orbit.longitudeOfAscendingNode||0);for(let B=0;B<=256;B++){const q=B/256*Math.PI*2;let J=q;for(let Ae=0;Ae<3;Ae++)J=J-(J-R*Math.sin(J)-q)/(1-R*Math.cos(J));const te=M*(Math.cos(J)-R),ie=M*Math.sqrt(1-R*R)*Math.sin(J),Ee=new P(te,0,ie);Ee.applyAxisAngle(new P(0,1,0),I),Ee.applyAxisAngle(new P(1,0,0),O),Ee.applyAxisAngle(new P(0,1,0),V),v.push(Ee)}const H=g.type==="planet"?54015:16733440,z=new cr(new st().setFromPoints(v),new ys({color:H,transparent:!0,opacity:.25}));z.userData={parentName:p},h.add(z),r.push(z)}g.belts&&g.belts.forEach(v=>{const M=v.count||1e3,R=new st,I=new Float32Array(M*3),O=[];for(let z=0;z<M;z++){const B=ct.lerp(v.minRadius,v.maxRadius,Math.random()),q=Math.random()*Math.PI*2,J=(Math.random()-.5)*(B*.05);I[z*3]=Math.cos(q)*B,I[z*3+1]=J,I[z*3+2]=Math.sin(q)*B,O.push({r:B,angle:q,y:J,speed:.005/Math.sqrt(B)*(.8+Math.random()*.4)})}R.setAttribute("position",new mt(I,3));const V=new Zn({color:v.color||8947848,size:T*3.5,transparent:!0,opacity:v.opacity||.5,sizeAttenuation:!0,blending:$t}),H=new pi(R,V);h.add(H),l.push({mesh:H,orbitData:O,parentName:g.name})}),g.planets&&g.planets.forEach(v=>_(v,g.name,h,S+1))};return Yo.forEach(g=>{const p=new un;p.position.set(g.position.x,g.position.y,g.position.z),g.stars.forEach(h=>_(h,null,p,0,g.name)),t.add(p)}),i.add(t),n.sort((g,p)=>g.userData.depth-p.userData.depth),{group:t,allSelectable:s,update:(g,p)=>{n.forEach(h=>{const S=h.userData;if(!S.orbit)return;const b=S.parentName?n.find(v=>v.userData.name===S.parentName):null;if(!b)return;S.angle+=(S.orbit.speed||.1)*g*p*.1;const E=S.orbit.radius,T=S.orbit.eccentricity||0;let w=S.angle;if(T>0)for(let v=0;v<4;v++)w=w-(w-T*Math.sin(w)-S.angle)/(1-T*Math.cos(w));const C=E*(Math.cos(w)-T),F=E*Math.sqrt(1-T*T)*Math.sin(w);if(c.set(C,0,F),S.orbit.inclination||S.orbit.argumentOfPeriapsis||S.orbit.longitudeOfAscendingNode){const v=ct.degToRad(S.orbit.argumentOfPeriapsis||0),M=ct.degToRad(S.orbit.inclination||0),R=ct.degToRad(S.orbit.longitudeOfAscendingNode||0);c.applyAxisAngle(new P(0,1,0),v),c.applyAxisAngle(new P(1,0,0),M),c.applyAxisAngle(new P(0,1,0),R)}h.position.addVectors(b.position,c),S.isDistorted&&h.lookAt(b.position)}),r.forEach(h=>{const S=n.find(b=>b.userData.name===h.userData.parentName);S&&h.position.copy(S.position)}),a.forEach(h=>{const S=n.find(b=>b.userData.name===h.parentName);S&&(h.isProcedural?h.uniforms&&(h.uniforms.uTime.value+=p*g,h.uniforms.uCamPos.value.copy(i.userData.camera?.position||new P),h.uniforms.uSingularityPos.value.copy(S.position),S.updateMatrixWorld(!0),c.copy(i.userData.camera.position),S.worldToLocal(c),h.uniforms.uLocalCamPos.value.copy(c)):(h.points.position.copy(S.position),h.points.rotation.y+=.6*g*p))}),o.forEach(h=>{const S=n.find(T=>T.userData.name===h.source),b=n.find(T=>T.userData.name===h.target),E=a.find(T=>T.parentName===h.target);if(S&&b&&E){const T=new P().subVectors(b.position,S.position),w=T.length(),C=T.clone().normalize(),F=new P(0,1,0),v=new P().crossVectors(C,F).normalize();v.length()<.1&&v.set(1,0,0);const M=S.userData.visualScale*(S.userData.distortionAxes?.z||1.8),R=S.position.clone().add(C.clone().multiplyScalar(M*1.1)),I=E.outerRadius||(E.uniforms?E.uniforms.uDiskRadius.value:100),O=b.position.clone().add(v.clone().multiplyScalar(I*.95)),V=O.clone().sub(C.clone().multiplyScalar(w*.6)),H=new nd(R,V,O),{points:z}=h,{tArray:B,seedArray:q,count:J}=z.userData,te=z.geometry.attributes.position,ie=z.geometry.attributes.color,Ee=new ze(16746530),Ae=new ze(16774604);for(let Ve=0;Ve<J;Ve++){B[Ve]=(B[Ve]+.35*p*g*(.85+q[Ve]*.15))%1;const Ge=B[Ve],Y=q[Ve],$=H.getPoint(Ge),de=S.userData.visualScale*.48,we=(.2+Y*1.5)*(1.1-Ge*.75),ge=de*we*Math.sin(Y*20)*Math.cos(Y*40),We=de*we*Math.sin(Y*30)*(1+Ge*3.5),_t=de*we*Math.cos(Y*50);te.setXYZ(Ve,$.x+ge,$.y+We,$.z+_t);const He=Ee.clone().lerp(Ae,Math.pow(Ge,1.3));let Xe=15;Ge>.9&&(Xe*=1-(Ge-.9)*10);const Ze=.82+Math.random()*.48;ie.setXYZ(Ve,He.r*Xe*Ze,He.g*Xe*Ze,He.b*Xe*Ze)}te.needsUpdate=!0,ie.needsUpdate=!0,z.material.size=b.userData.visualScale*3.5}}),r.forEach(h=>{const S=n.find(b=>b.userData.name===h.userData.parentName);S&&h.position.copy(S.position)}),u.forEach(h=>{const S=n.find(b=>b.userData.name===h.parentName);S&&(h.group.position.copy(S.position),h.group.children.forEach(b=>b.material.map.offset.y-=7*g*p))}),l.forEach(h=>{const S=n.find(b=>b.userData.name===h.parentName);if(S){h.mesh.position.copy(S.position);const b=h.mesh.geometry.attributes.position;for(let E=0;E<h.orbitData.length;E++){const T=h.orbitData[E];T.angle+=T.speed*g*p*5,b.setXYZ(E,Math.cos(T.angle)*T.r,T.y,Math.sin(T.angle)*T.r)}b.needsUpdate=!0}})},getStarMeshes:()=>s,setVisible:(g,p,h,S)=>{r.forEach(b=>b.visible=h)}}}const Xt=new qh,St=new Wt(45,window.innerWidth/window.innerHeight,.5,1e9),Tn=new pg({antialias:!0,logarithmicDepthBuffer:!0});Tn.setSize(window.innerWidth,window.innerHeight);Tn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("app").appendChild(Tn.domElement);Tn.toneMapping=Po;Tn.toneMappingExposure=.8;St.position.set(0,60,450);St.lookAt(0,0,0);Xt.userData.camera=St;const Fg=document.getElementById("loading-screen"),Og=document.getElementById("loading-bar"),lu=document.getElementById("loading-status"),Eo={"starmap_8k.jpg":"深空背景","saturn_ring_v3.png":"土星環"},fs=i=>{i&&i.forEach(e=>{if(e.texture){const t=e.texture.split("/").pop();Eo[t]=e.nameCH||e.name}if(e.menuIcon){const t=e.menuIcon.split("/").pop();Eo[t]=(e.nameCH||e.name)+" 圖標"}e.satellites&&fs(e.satellites),e.stars&&fs(e.stars),e.planets&&fs(e.planets)})};fs(ou);fs(Yo);const Ji=new $c;Ji.onProgress=(i,e,t)=>{const n=e/t*100;Og.style.width=n+"%";const s=i.split("/").pop().split("?")[0],r=Eo[s]||s;lu.innerText=`正在探索 ${r}`};Ji.onLoad=()=>{setTimeout(()=>{Fg.classList.add("fade-out")},500)};Ji.onError=i=>{console.error("There was an error loading "+i),lu.innerText="部分資源讀取失敗，正在嘗試繼續..."};const Ea=Pg(Xt,Ji),cu=Dg(Xt);cu.mesh.visible=!1;const Ct=new gg(St,Tn.domElement);Ct.enableDamping=!0;Ct.target.set(0,0,0);const bs=()=>{const i=window.innerWidth,e=window.innerHeight;St.aspect=i/e,St.updateProjectionMatrix(),Tn.setSize(i,e)};window.addEventListener("resize",bs);window.addEventListener("orientationchange",()=>setTimeout(bs,200));bs();Ct.update();Ct.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN};Ct.maxDistance=1e6;const Bg=new fd(16777215,.15);Xt.add(Bg);const uu=new Qc(16777215,300,15e3,1.2);uu.position.set(0,0,0);Xt.add(uu);const zg=new cd(16777215,0,.2);Xt.add(zg);let dt=.1;const hu=document.getElementById("speed-display"),ft=Rg(Xt,Ji);ft.setSpeedMultiplier(dt);hu.innerText=`${dt.toFixed(1)}x`;const Jn=Lg(Xt),Qn=Ig(Xt),ei=Ug(Xt),Qt=Ng(Xt,Ji);Qt&&Qt.group&&(Qt.group.rotation.x=ct.degToRad(-63),Qt.group.rotation.z=ct.degToRad(45));let ki=!0,hr=!1,dr=!1,fr=!1,pr=!1,mr=!1,gr=!0,_r=!1,xr=!1,ps=!0,ms=!0,vr=!0;const en=()=>{ft&&(ft.setOrbitsVisibleByType("planet",ki),ft.setOrbitsVisibleByType("star",ki),ft.setOrbitsVisibleByType("dwarf_planet",fr),ft.setOrbitsVisibleByType("dwarf_planet_candidate",pr),ft.setOrbitsVisibleByType("interstellar",mr),ft.setOrbitsVisibleByType("asteroid",_r),ft.setOrbitsVisibleByType("comet",xr),ft.setSatOrbitsVisibleByType("satellite",hr),ft.setSatOrbitsVisibleByType("space_station",dr)),Qt&&Qt.setVisible(gr,ki,ps,ms),Jn&&Jn.setVisible(ps),Qn&&Qn.setVisible(ms),ei&&ei.setVisible(vr)};en();const ba=new gd,Ta=new De;let qe=null;const Ts=document.getElementById("info-panel"),kg=document.getElementById("info-title"),Hg=document.getElementById("info-description"),uc=document.getElementById("info-details"),Vg=document.getElementById("close-info"),Gg=document.getElementById("reset-view");let bo=!1,To={x:0,y:0},wr=!1,kn=!1,Ao=new P;window.addEventListener("pointerdown",i=>{bo=!0,To={x:i.clientX,y:i.clientY}});window.addEventListener("pointerup",i=>{if(!bo)return;bo=!1;const e=Math.abs(i.clientX-To.x),t=Math.abs(i.clientY-To.y),n=window.innerWidth<=1100?15:5;e>n||t>n||i.pointerType==="mouse"&&i.button!==0&&i.button!==2||Wg(i.clientX,i.clientY,i.target)});function Wg(i,e,t){if(t.closest("#controls")||t.closest("#sub-menu")||t.closest("#info-panel")||t.closest(".search-result-item")||t.tagName==="BUTTON"||t.tagName==="INPUT"||t.tagName==="A"||Cr)return;const s=Tn.domElement.getBoundingClientRect();Ta.x=(i-s.left)/s.width*2-1,Ta.y=-((e-s.top)/s.height)*2+1,ba.setFromCamera(Ta,St);const r=ft.getBodies(),a=[];r.forEach(u=>{a.push(u.mesh),u.satellites.forEach(l=>a.push(l.mesh))}),Qt&&a.push(...Qt.getStarMeshes());const o=ba.intersectObjects(a,!0);if(o.length>0){let u=null,l=null;for(let c=0;c<o.length;c++){let d=o[c].object;for(;d;){if(d.userData&&d.userData.description){u=d,l=d.userData;break}d=d.parent}if(u)break}l&&Rr(u)}else if(!Ts.classList.contains("hidden"))du();else{qe=null;const u=new P;St.getWorldDirection(u).negate();const l=new Un().setFromNormalAndCoplanarPoint(u,Ct.target),c=new P;ba.ray.intersectPlane(l,c),c&&Ct.target.copy(c)}}Ct.addEventListener("start",()=>{wr=!0,kn=!1});window.addEventListener("wheel",()=>{kn=!1},{passive:!0});Ct.addEventListener("end",()=>{wr=!1});window.addEventListener("contextmenu",i=>{i.pointerType==="mouse"&&!document.getElementById("controls").contains(i.target)&&!document.getElementById("search-results").contains(i.target)&&i.preventDefault()});function du(){Ts.classList.add("hidden")}Vg.addEventListener("click",()=>{du()});Gg.addEventListener("click",i=>{i.stopPropagation(),qe&&(kn=!0)});function Xg(i){kg.innerText=`${i.name}   ${i.nameCH||""}`,Hg.innerText=i.description||"暫無介紹。",uc.innerHTML="",["類型","質量","體積","直徑","史瓦西半徑","光度","視星等","絕對星等","核心溫度","表面溫度","光譜類型"].forEach(t=>{const n=i.details&&i.details[t]?i.details[t]:"N/A",s=document.createElement("div");s.className="info-detail-item",s.innerHTML=`
      <span class="info-detail-label">${t}</span>
      <span class="info-detail-value">${n}</span>
    `,uc.appendChild(s)}),Ts.classList.remove("hidden")}let fu=null,pu=null;const Fr=i=>{An();const e=()=>{i?dt<.1?dt=.1:dt<.5?dt=.5:dt+=.5:dt>.5?dt-=.5:dt>.1?dt=.1:dt=0,gu()};e(),fu=setTimeout(()=>{pu=setInterval(e,100)},2e3)},An=()=>{clearTimeout(fu),clearInterval(pu)},Qi=document.getElementById("slow"),es=document.getElementById("fast");Qi.addEventListener("mousedown",()=>Fr(!1));es.addEventListener("mousedown",()=>Fr(!0));Qi.addEventListener("mouseup",An);es.addEventListener("mouseup",An);window.addEventListener("mouseup",An);Qi.addEventListener("mouseleave",An);es.addEventListener("mouseleave",An);Qi.addEventListener("touchstart",i=>{i.preventDefault(),Fr(!1)});es.addEventListener("touchstart",i=>{i.preventDefault(),Fr(!0)});Qi.addEventListener("touchend",An);es.addEventListener("touchend",An);Qi.addEventListener("touchcancel",An);es.addEventListener("touchcancel",An);let gs=!1,Aa=.1;const qg=document.getElementById("pause"),wo=document.getElementById("pause-icon"),mu='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none"><path d="M9 18V8M15 18V8"/></svg>',Yg='<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3l14 9-14 9V3z"/></svg>';qg.addEventListener("click",()=>{gs?(dt=Aa===0?.1:Aa,gs=!1,wo.innerHTML=mu):(Aa=dt,dt=0,gs=!0,wo.innerHTML=Yg),gu()});function gu(){ft.setSpeedMultiplier(dt),hu.innerText=`${dt.toFixed(1)}x`,dt>0&&gs&&(gs=!1,wo.innerHTML=mu)}const jo=document.getElementById("menu-toggle"),_s=document.getElementById("sub-menu"),Mr=document.getElementById("mode-artistic"),Sr=document.getElementById("mode-real");document.getElementById("toggle-orbits");const _u=i=>{i.stopPropagation(),_s.classList.toggle("hidden")};jo.addEventListener("click",_u);jo.addEventListener("touchstart",i=>{i.preventDefault(),_u(i)},{passive:!1});window.addEventListener("click",i=>{!_s.classList.contains("hidden")&&!_s.contains(i.target)&&i.target!==jo&&_s.classList.add("hidden")});const hc=document.getElementById("toggle-manmade-orbit"),dc=document.getElementById("toggle-planet-orbit"),fc=document.getElementById("toggle-sat-orbit"),pc=document.getElementById("toggle-dwarf-orbit"),mc=document.getElementById("toggle-candidate-orbit"),gc=document.getElementById("toggle-interstellar-orbit"),_c=document.getElementById("toggle-asteroid-orbit"),xc=document.getElementById("toggle-comet-orbit"),vc=document.getElementById("toggle-belt"),Mc=document.getElementById("toggle-kuiper"),Sc=document.getElementById("toggle-oort"),yc=document.getElementById("toggle-star-orbit");hc.addEventListener("click",()=>{dr=!dr,hc.classList.toggle("active",dr),en()});dc.addEventListener("click",()=>{ki=!ki,dc.classList.toggle("active",ki),en()});fc.addEventListener("click",()=>{hr=!hr,fc.classList.toggle("active",hr),en()});pc.addEventListener("click",()=>{fr=!fr,pc.classList.toggle("active",fr),en()});mc.addEventListener("click",()=>{pr=!pr,mc.classList.toggle("active",pr),en()});gc.addEventListener("click",()=>{mr=!mr,gc.classList.toggle("active",mr),en()});yc.addEventListener("click",()=>{gr=!gr,yc.classList.toggle("active",gr),en()});_c.addEventListener("click",()=>{_r=!_r,_c.classList.toggle("active",_r),en()});vc.addEventListener("click",()=>{ps=!ps,vc.classList.toggle("active",ps),en()});Mc.addEventListener("click",()=>{ms=!ms,Mc.classList.toggle("active",ms),en()});xc.addEventListener("click",()=>{xr=!xr,xc.classList.toggle("active",xr),en()});Sc.addEventListener("click",()=>{vr=!vr,Sc.classList.toggle("active",vr),en()});Mr.addEventListener("click",()=>{Mr.classList.contains("active")||(Mr.classList.add("active"),Sr.classList.remove("active"),ft.setViewMode(!1),Jn&&Jn.setViewMode(!1),Qn&&Qn.setViewMode(!1),ei&&ei.setViewMode(!1),qe?kn=!0:(St.position.set(0,150,250),St.lookAt(0,0,0)))});Sr.addEventListener("click",()=>{Sr.classList.contains("active")||(Sr.classList.add("active"),Mr.classList.remove("active"),ft.setViewMode(!0),Jn&&Jn.setViewMode(!0),Qn&&Qn.setViewMode(!0),ei&&ei.setViewMode(!0),qe&&(kn=!0))});const Hi=document.getElementById("planet-search"),Bt=document.getElementById("search-results"),As=document.getElementById("clear-search"),Co=document.getElementById("reset-to-sun");let Cr=!1;const jg={planet:"行星",star:"恆星",dwarf_planet:"矮行星",dwarf_planet_candidate:"候選/TNO",asteroid:"小行星",interstellar:"星際天體",satellite:"衛星",comet:"彗星",space_station:"人造物體"};function Rr(i,e=!1){qe=i;const t=i.userData;kn=!0,Xg(t),qe.updateMatrixWorld(!0),qe.getWorldPosition(Ao),e?(Hi.blur(),setTimeout(()=>{qe===i&&(kn=!0,bs())},450)):(!qe||qe!==i)&&(bs(),Bt.classList.add("hidden"),Bt.innerHTML="",Hi.value="",As.classList.add("hidden"))}Hi.addEventListener("input",()=>{const i=Hi.value.trim().toLowerCase();if(As.classList.toggle("hidden",i===""),i.length<1){Bt.innerHTML="",Bt.classList.add("hidden");return}const e=ft.getBodies(),t=[];e.forEach(s=>{t.push({mesh:s.mesh,data:s.data,type:s.data.type}),s.satellites.forEach(r=>{t.push({mesh:r.mesh,data:r.data,type:"satellite"})})}),Qt&&Qt.getStarMeshes().forEach(r=>{t.push({mesh:r,data:r.userData,type:"star"})});const n=t.filter(s=>s.data&&s.data.name&&(s.data.name.toLowerCase().includes(i)||s.data.nameCH&&s.data.nameCH.includes(i)));n.length>0?(Bt.innerHTML=n.map(s=>`
      <div class="search-result-item" data-id="${s.data.name}">
        <div class="result-name">${s.data.nameCH||s.data.name}</div>
        <div class="result-type">${jg[s.type]||s.type}</div>
      </div>
    `).join(""),Bt.classList.remove("hidden"),Bt.querySelectorAll(".search-result-item").forEach(s=>{const r=a=>{a.stopPropagation(),a.preventDefault(),Cr=!0;const o=s.getAttribute("data-id"),u=t.find(l=>l.data.name===o);u&&Rr(u.mesh,!0),setTimeout(()=>{Bt.classList.add("hidden"),Bt.innerHTML="",Hi.value="",As.classList.add("hidden"),Cr=!1},800)};s.addEventListener("mousedown",r),s.addEventListener("touchstart",r,{passive:!1})})):(Bt.innerHTML='<div class="search-result-item">無符合天體</div>',Bt.classList.remove("hidden"))});As.addEventListener("click",i=>{i.stopPropagation(),Hi.value="",As.classList.add("hidden"),Bt.innerHTML="",Bt.classList.add("hidden")});const mi=document.getElementById("system-menu"),Kg=()=>{const i=[{id:"solar",name:"Sun",nameCH:"太陽系",distance:0,status:"當前所在",icon:"textures/sun.jpg"},...Yo.map(t=>({id:t.name,name:t.name,nameCH:t.nameCH,distance:t.distanceFromSun,status:`距離 ${(t.distanceFromSun/63241).toFixed(2)} 光年`,icon:t.menuIcon||"textures/star_placeholder.png"}))];i.sort((t,n)=>t.distance-n.distance);const e=i.map(t=>{let n=`<img src="${t.icon}" alt="${t.name}">`;if(t.icon.startsWith("gradient:")){const s=t.icon.split(":")[1];let r,a,o="";s==="scorpius"?(r="#00ccff",a="width: 80%; height: 80%;"):s==="galactic-center"?(r="#ffaa33",a="width: 75%; height: 75%; border: 2.5px solid #ffcc00; box-shadow: 0 0 15px #ff6600, inset 0 0 10px #ff3300;",o='<div style="width: 40%; height: 40%; background: #000; border-radius: 50%; box-shadow: 0 0 5px #000;"></div>'):(r="#88ccff",a="width: 70%; height: 30%; transform: rotate(-20deg);"),n=`<div style="background: radial-gradient(circle, ${r}33, #000); display: flex; align-items: center; justify-content: center; width:100%; height:100%;">
                    <div style="${a} border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative;">
                      ${o}
                    </div>
                  </div>`}return`
      <div class="system-menu-item ${t.id==="solar"?"active":""}" data-id="${t.id}">
        <div class="system-icon">${n}</div>
        <div class="system-info">
          <div class="system-name">${t.nameCH||t.name}</div>
          <div class="system-status">${t.status}</div>
        </div>
      </div>
    `}).join("");mi.innerHTML=`<div class="menu-label">選擇恆星系</div>${e}`};Kg();mi.addEventListener("click",i=>{const e=i.target.closest(".system-menu-item");if(!e)return;const t=e.getAttribute("data-id");if(mi.querySelectorAll(".system-menu-item").forEach(n=>n.classList.remove("active")),e.classList.add("active"),t==="solar"){const n=ft.getBodies().find(s=>s.data.name==="Sun");n&&Rr(n.mesh)}else{const n=Qt.getStarMeshes();let s;t==="Castor"?s=n.find(r=>r.userData.name==="Castor A1 (Aa)"):t==="Scorpius X-1"?s=n.find(r=>r.userData.name==="Scorpius X-1 (Neutron Star)"):t==="Beta Lyrae"?s=n.find(r=>r.userData.name==="Beta Lyrae B (Accretor)"):s=n.find(r=>r.userData.parentSystem===t||r.userData.name.includes(t)),s&&Rr(s)}mi.classList.add("hidden")});Co.addEventListener("click",i=>{i.stopPropagation(),mi.classList.toggle("hidden"),_s.classList.add("hidden"),Bt.classList.add("hidden")});window.addEventListener("mousedown",i=>{document.getElementById("search-container").contains(i.target)||Bt.classList.add("hidden"),!mi.contains(i.target)&&i.target!==Co&&!Co.contains(i.target)&&mi.classList.add("hidden")});window.addEventListener("resize",()=>{St.aspect=window.innerWidth/window.innerHeight,St.updateProjectionMatrix(),Tn.setSize(window.innerWidth,window.innerHeight)});const Zg=["controls","sub-menu","info-panel","system-menu"];Zg.forEach(i=>{const e=document.getElementById(i);if(!e)return;const t=n=>n.stopPropagation();["mousedown","mouseup","click","dblclick","wheel","touchstart","touchend","touchmove"].forEach(n=>{e.addEventListener(n,t)})});const $g=new md,In=new P,ci=new P,Fi=new P,wa=new P,Ec=new P;function xu(){requestAnimationFrame(xu);const i=$g.getDelta(),e=Math.min(i,.1);Xt.userData.camera=St,ft&&ft.update(e),Jn&&Jn.update(dt,e),Qn&&Qn.update(dt,e),ei&&ei.update(dt,e),Qt&&Qt.update(dt,e),Ea&&Ea.update&&Ea.update(St.position,e);const t=Ts&&!Ts.classList.contains("hidden");if(t?(Ct.enablePan=!1,Ct.mouseButtons.RIGHT=dn.ROTATE):(Ct.enablePan=!0,Ct.mouseButtons.RIGHT=dn.PAN),qe){if(qe.updateMatrixWorld(!0),qe.getWorldPosition(In),kn){const s=ft.isRealScale(),r=qe.userData.isInterstellar;let a=s&&qe.userData.realScaleRadius||qe.userData.radius;r&&(a=qe.userData.maxVisualRadius||qe.userData.visualScale,qe.userData.hasAccretionDisk&&qe.userData.diskRadius&&(a=Math.max(a,qe.userData.diskRadius*.45)));const o=r?45:window.innerWidth<=480?18:window.innerWidth<=1100?12:6,u=a*o,l=St.position.distanceTo(In),c=ct.lerp(l,u,.05);ci.subVectors(St.position,In).normalize(),Fi.copy(In).add(ci.multiplyScalar(c)),St.position.copy(Fi),Math.abs(l-u)<a*.1&&(kn=!1)}if(t){if(ci.subVectors(In,Ao),St.position.add(ci),Fi.copy(In),window.innerWidth<=1100){const s=window.innerWidth<=480,r=window.innerWidth>window.innerHeight;ci.subVectors(St.position,In).normalize(),wa.set(0,1,0).cross(ci).normalize(),Ec.crossVectors(ci,wa).normalize();const a=ft.isRealScale(),o=qe.userData.isInterstellar;let u=a&&qe.userData.realScaleRadius||qe.userData.radius;o&&(u=qe.userData.maxVisualRadius||qe.userData.visualScale,qe.userData.hasAccretionDisk&&qe.userData.diskRadius&&(u=Math.max(u,qe.userData.diskRadius*.5)));const c=u*(o?60:s?25:15);if(r)Fi.add(wa.multiplyScalar(c*.18));else{const d=s?-.12:-.08;Fi.add(Ec.multiplyScalar(c*d))}}Ct.target.copy(Fi)}else!wr&&qe&&Ct.target.lerp(In,.1);Ao.copy(In)}const n=Ct.target.clone();Ct.update(),!t&&wr&&Ct.target.distanceTo(n)>.01&&(qe=null),Tn.render(Xt,St)}xu();window.scene=Xt;window.ship=cu;window.solarSystem=ft;
