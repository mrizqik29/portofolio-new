(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yh(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const At={},bo=[],er=()=>{},Sv=()=>!1,$c=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),$h=i=>i.startsWith("onUpdate:"),Hn=Object.assign,jh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Mv=Object.prototype.hasOwnProperty,xt=(i,e)=>Mv.call(i,e),Ze=Array.isArray,Eo=i=>jc(i)==="[object Map]",n_=i=>jc(i)==="[object Set]",tt=i=>typeof i=="function",en=i=>typeof i=="string",ls=i=>typeof i=="symbol",zt=i=>i!==null&&typeof i=="object",i_=i=>(zt(i)||tt(i))&&tt(i.then)&&tt(i.catch),r_=Object.prototype.toString,jc=i=>r_.call(i),yv=i=>jc(i).slice(8,-1),s_=i=>jc(i)==="[object Object]",Kh=i=>en(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ta=Yh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},bv=/-(\w)/g,es=Kc(i=>i.replace(bv,(e,t)=>t?t.toUpperCase():"")),Ev=/\B([A-Z])/g,$s=Kc(i=>i.replace(Ev,"-$1").toLowerCase()),o_=Kc(i=>i.charAt(0).toUpperCase()+i.slice(1)),pu=Kc(i=>i?`on${o_(i)}`:""),Yr=(i,e)=>!Object.is(i,e),mu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Mf=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},Tv=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let jd;const Zc=()=>jd||(jd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zh(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=en(n)?Rv(n):Zh(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(en(i)||zt(i))return i}const Av=/;(?![^(]*\))/g,wv=/:([^]+)/,Cv=/\/\*[^]*?\*\//g;function Rv(i){const e={};return i.replace(Cv,"").split(Av).forEach(t=>{if(t){const n=t.split(wv);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jc(i){let e="";if(en(i))e=i;else if(Ze(i))for(let t=0;t<i.length;t++){const n=Jc(i[t]);n&&(e+=n+" ")}else if(zt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Pv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dv=Yh(Pv);function a_(i){return!!i||i===""}const l_=i=>!!(i&&i.__v_isRef===!0),To=i=>en(i)?i:i==null?"":Ze(i)||zt(i)&&(i.toString===r_||!tt(i.toString))?l_(i)?To(i.value):JSON.stringify(i,c_,2):String(i),c_=(i,e)=>l_(e)?c_(i,e.value):Eo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[_u(n,s)+" =>"]=r,t),{})}:n_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_u(t))}:ls(e)?_u(e):zt(e)&&!Ze(e)&&!s_(e)?String(e):e,_u=(i,e="")=>{var t;return ls(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xn;class Lv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xn,!e&&Xn&&(this.index=(Xn.scopes||(Xn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xn;try{return Xn=this,e()}finally{Xn=t}}}on(){++this._on===1&&(this.prevScope=Xn,Xn=this)}off(){this._on>0&&--this._on===0&&(Xn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Iv(){return Xn}let Ct;const gu=new WeakSet;class u_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xn&&Xn.active&&Xn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gu.has(this)&&(gu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||h_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kd(this),d_(this);const e=Ct,t=ki;Ct=this,ki=!0;try{return this.fn()}finally{p_(this),Ct=e,ki=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ed(e);this.deps=this.depsTail=void 0,Kd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yf(this)&&this.run()}get dirty(){return yf(this)}}let f_=0,Aa,wa;function h_(i,e=!1){if(i.flags|=8,e){i.next=wa,wa=i;return}i.next=Aa,Aa=i}function Jh(){f_++}function Qh(){if(--f_>0)return;if(wa){let e=wa;for(wa=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Aa;){let e=Aa;for(Aa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function d_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function p_(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),ed(n),Uv(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function yf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(m_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function m_(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Wa)||(i.globalVersion=Wa,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!yf(i))))return;i.flags|=2;const e=i.dep,t=Ct,n=ki;Ct=i,ki=!0;try{d_(i);const r=i.fn(i._value);(e.version===0||Yr(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ct=t,ki=n,p_(i),i.flags&=-3}}function ed(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ed(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Uv(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ki=!0;const __=[];function wr(){__.push(ki),ki=!1}function Cr(){const i=__.pop();ki=i===void 0?!0:i}function Kd(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Wa=0;class Fv{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class td{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!ki||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new Fv(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,g_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=n)}return t}trigger(e){this.version++,Wa++,this.notify(e)}notify(e){Jh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Qh()}}}function g_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)g_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const bf=new WeakMap,Us=Symbol(""),Ef=Symbol(""),Xa=Symbol("");function Mn(i,e,t){if(ki&&Ct){let n=bf.get(i);n||bf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new td),r.map=n,r.key=t),r.track()}}function vr(i,e,t,n,r,s){const o=bf.get(i);if(!o){Wa++;return}const a=l=>{l&&l.trigger()};if(Jh(),e==="clear")o.forEach(a);else{const l=Ze(i),c=l&&Kh(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Xa||!ls(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Xa)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Us)),Eo(i)&&a(o.get(Ef)));break;case"delete":l||(a(o.get(Us)),Eo(i)&&a(o.get(Ef)));break;case"set":Eo(i)&&a(o.get(Us));break}}Qh()}function Zs(i){const e=vt(i);return e===i?e:(Mn(e,"iterate",Xa),Ri(i)?e:e.map(dn))}function Qc(i){return Mn(i=vt(i),"iterate",Xa),i}const Nv={__proto__:null,[Symbol.iterator](){return vu(this,Symbol.iterator,dn)},concat(...i){return Zs(this).concat(...i.map(e=>Ze(e)?Zs(e):e))},entries(){return vu(this,"entries",i=>(i[1]=dn(i[1]),i))},every(i,e){return lr(this,"every",i,e,void 0,arguments)},filter(i,e){return lr(this,"filter",i,e,t=>t.map(dn),arguments)},find(i,e){return lr(this,"find",i,e,dn,arguments)},findIndex(i,e){return lr(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return lr(this,"findLast",i,e,dn,arguments)},findLastIndex(i,e){return lr(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return lr(this,"forEach",i,e,void 0,arguments)},includes(...i){return xu(this,"includes",i)},indexOf(...i){return xu(this,"indexOf",i)},join(i){return Zs(this).join(i)},lastIndexOf(...i){return xu(this,"lastIndexOf",i)},map(i,e){return lr(this,"map",i,e,void 0,arguments)},pop(){return sa(this,"pop")},push(...i){return sa(this,"push",i)},reduce(i,...e){return Zd(this,"reduce",i,e)},reduceRight(i,...e){return Zd(this,"reduceRight",i,e)},shift(){return sa(this,"shift")},some(i,e){return lr(this,"some",i,e,void 0,arguments)},splice(...i){return sa(this,"splice",i)},toReversed(){return Zs(this).toReversed()},toSorted(i){return Zs(this).toSorted(i)},toSpliced(...i){return Zs(this).toSpliced(...i)},unshift(...i){return sa(this,"unshift",i)},values(){return vu(this,"values",dn)}};function vu(i,e,t){const n=Qc(i),r=n[e]();return n!==i&&!Ri(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Ov=Array.prototype;function lr(i,e,t,n,r,s){const o=Qc(i),a=o!==i&&!Ri(i),l=o[e];if(l!==Ov[e]){const f=l.apply(i,s);return a?dn(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,dn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Zd(i,e,t,n){const r=Qc(i);let s=t;return r!==i&&(Ri(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,dn(a),l,i)}),r[e](s,...n)}function xu(i,e,t){const n=vt(i);Mn(n,"iterate",Xa);const r=n[e](...t);return(r===-1||r===!1)&&sd(t[0])?(t[0]=vt(t[0]),n[e](...t)):r}function sa(i,e,t=[]){wr(),Jh();const n=vt(i)[e].apply(i,t);return Qh(),Cr(),n}const kv=Yh("__proto__,__v_isRef,__isVue"),v_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ls));function Bv(i){ls(i)||(i=String(i));const e=vt(this);return Mn(e,"has",i),e.hasOwnProperty(i)}class x_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?jv:b_:s?y_:M_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ze(e);if(!r){let l;if(o&&(l=Nv[t]))return l;if(t==="hasOwnProperty")return Bv}const a=Reflect.get(e,t,An(e)?e:n);return(ls(t)?v_.has(t):kv(t))||(r||Mn(e,"get",t),s)?a:An(a)?o&&Kh(t)?a:a.value:zt(a)?r?E_(a):id(a):a}}class S_ extends x_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=ts(s);if(!Ri(n)&&!ts(n)&&(s=vt(s),n=vt(n)),!Ze(e)&&An(s)&&!An(n))return l?!1:(s.value=n,!0)}const o=Ze(e)&&Kh(t)?Number(t)<e.length:xt(e,t),a=Reflect.set(e,t,n,An(e)?e:r);return e===vt(r)&&(o?Yr(n,s)&&vr(e,"set",t,n):vr(e,"add",t,n)),a}deleteProperty(e,t){const n=xt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&vr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!ls(t)||!v_.has(t))&&Mn(e,"has",t),n}ownKeys(e){return Mn(e,"iterate",Ze(e)?"length":Us),Reflect.ownKeys(e)}}class zv extends x_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Vv=new S_,Hv=new zv,Gv=new S_(!0);const Tf=i=>i,vl=i=>Reflect.getPrototypeOf(i);function Wv(i,e,t){return function(...n){const r=this.__v_raw,s=vt(r),o=Eo(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Tf:e?Tc:dn;return!e&&Mn(s,"iterate",l?Ef:Us),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Xv(i,e){const t={get(r){const s=this.__v_raw,o=vt(s),a=vt(r);i||(Yr(r,a)&&Mn(o,"get",r),Mn(o,"get",a));const{has:l}=vl(o),c=e?Tf:i?Tc:dn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&Mn(vt(r),"iterate",Us),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=vt(s),a=vt(r);return i||(Yr(r,a)&&Mn(o,"has",r),Mn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=vt(a),c=e?Tf:i?Tc:dn;return!i&&Mn(l,"iterate",Us),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Hn(t,i?{add:xl("add"),set:xl("set"),delete:xl("delete"),clear:xl("clear")}:{add(r){!e&&!Ri(r)&&!ts(r)&&(r=vt(r));const s=vt(this);return vl(s).has.call(s,r)||(s.add(r),vr(s,"add",r,r)),this},set(r,s){!e&&!Ri(s)&&!ts(s)&&(s=vt(s));const o=vt(this),{has:a,get:l}=vl(o);let c=a.call(o,r);c||(r=vt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Yr(s,u)&&vr(o,"set",r,s):vr(o,"add",r,s),this},delete(r){const s=vt(this),{has:o,get:a}=vl(s);let l=o.call(s,r);l||(r=vt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&vr(s,"delete",r,void 0),c},clear(){const r=vt(this),s=r.size!==0,o=r.clear();return s&&vr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wv(r,i,e)}),t}function nd(i,e){const t=Xv(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(xt(t,r)&&r in n?t:n,r,s)}const qv={get:nd(!1,!1)},Yv={get:nd(!1,!0)},$v={get:nd(!0,!1)};const M_=new WeakMap,y_=new WeakMap,b_=new WeakMap,jv=new WeakMap;function Kv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zv(i){return i.__v_skip||!Object.isExtensible(i)?0:Kv(yv(i))}function id(i){return ts(i)?i:rd(i,!1,Vv,qv,M_)}function Jv(i){return rd(i,!1,Gv,Yv,y_)}function E_(i){return rd(i,!0,Hv,$v,b_)}function rd(i,e,t,n,r){if(!zt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=Zv(i);if(s===0)return i;const o=r.get(i);if(o)return o;const a=new Proxy(i,s===2?n:t);return r.set(i,a),a}function Ao(i){return ts(i)?Ao(i.__v_raw):!!(i&&i.__v_isReactive)}function ts(i){return!!(i&&i.__v_isReadonly)}function Ri(i){return!!(i&&i.__v_isShallow)}function sd(i){return i?!!i.__v_raw:!1}function vt(i){const e=i&&i.__v_raw;return e?vt(e):i}function Qv(i){return!xt(i,"__v_skip")&&Object.isExtensible(i)&&Mf(i,"__v_skip",!0),i}const dn=i=>zt(i)?id(i):i,Tc=i=>zt(i)?E_(i):i;function An(i){return i?i.__v_isRef===!0:!1}function un(i){return ex(i,!1)}function ex(i,e){return An(i)?i:new tx(i,e)}class tx{constructor(e,t){this.dep=new td,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:vt(e),this._value=t?e:dn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Ri(e)||ts(e);e=n?e:vt(e),Yr(e,t)&&(this._rawValue=e,this._value=n?e:dn(e),this.dep.trigger())}}function T_(i){return An(i)?i.value:i}const nx={get:(i,e,t)=>e==="__v_raw"?i:T_(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return An(r)&&!An(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function A_(i){return Ao(i)?i:new Proxy(i,nx)}class ix{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new td(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return h_(this,!0),!0}get value(){const e=this.dep.track();return m_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rx(i,e,t=!1){let n,r;return tt(i)?n=i:(n=i.get,r=i.set),new ix(n,r,t)}const Sl={},Ac=new WeakMap;let ys;function sx(i,e=!1,t=ys){if(t){let n=Ac.get(t);n||Ac.set(t,n=[]),n.push(i)}}function ox(i,e,t=At){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Ri(v)||r===!1||r===0?xr(v,1):xr(v);let u,f,h,d,g=!1,_=!1;if(An(i)?(f=()=>i.value,g=Ri(i)):Ao(i)?(f=()=>c(i),g=!0):Ze(i)?(_=!0,g=i.some(v=>Ao(v)||Ri(v)),f=()=>i.map(v=>{if(An(v))return v.value;if(Ao(v))return c(v);if(tt(v))return l?l(v,2):v()})):tt(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){wr();try{h()}finally{Cr()}}const v=ys;ys=u;try{return l?l(i,3,[d]):i(d)}finally{ys=v}}:f=er,e&&r){const v=f,C=r===!0?1/0:r;f=()=>xr(v(),C)}const m=Iv(),p=()=>{u.stop(),m&&m.active&&jh(m.effects,u)};if(s&&e){const v=e;e=(...C)=>{v(...C),p()}}let E=_?new Array(i.length).fill(Sl):Sl;const b=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(r||g||(_?C.some((R,w)=>Yr(R,E[w])):Yr(C,E))){h&&h();const R=ys;ys=u;try{const w=[C,E===Sl?void 0:_&&E[0]===Sl?[]:E,d];E=C,l?l(e,3,w):e(...w)}finally{ys=R}}}else u.run()};return a&&a(b),u=new u_(f),u.scheduler=o?()=>o(b,!1):b,d=v=>sx(v,!1,u),h=u.onStop=()=>{const v=Ac.get(u);if(v){if(l)l(v,4);else for(const C of v)C();Ac.delete(u)}},e?n?b(!0):E=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function xr(i,e=1/0,t){if(e<=0||!zt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,An(i))xr(i.value,e,t);else if(Ze(i))for(let n=0;n<i.length;n++)xr(i[n],e,t);else if(n_(i)||Eo(i))i.forEach(n=>{xr(n,e,t)});else if(s_(i)){for(const n in i)xr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&xr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ul(i,e,t,n){try{return n?i(...n):i()}catch(r){eu(r,e,t)}}function ir(i,e,t,n){if(tt(i)){const r=ul(i,e,t,n);return r&&i_(r)&&r.catch(s=>{eu(s,e,t)}),r}if(Ze(i)){const r=[];for(let s=0;s<i.length;s++)r.push(ir(i[s],e,t,n));return r}}function eu(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||At;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){wr(),ul(s,null,10,[i,l,c]),Cr();return}}ax(i,t,r,n,o)}function ax(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const On=[];let Hi=-1;const wo=[];let Br=null,_o=0;const w_=Promise.resolve();let wc=null;function Bo(i){const e=wc||w_;return i?e.then(this?i.bind(this):i):e}function lx(i){let e=Hi+1,t=On.length;for(;e<t;){const n=e+t>>>1,r=On[n],s=qa(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function od(i){if(!(i.flags&1)){const e=qa(i),t=On[On.length-1];!t||!(i.flags&2)&&e>=qa(t)?On.push(i):On.splice(lx(e),0,i),i.flags|=1,C_()}}function C_(){wc||(wc=w_.then(P_))}function cx(i){Ze(i)?wo.push(...i):Br&&i.id===-1?Br.splice(_o+1,0,i):i.flags&1||(wo.push(i),i.flags|=1),C_()}function Jd(i,e,t=Hi+1){for(;t<On.length;t++){const n=On[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;On.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function R_(i){if(wo.length){const e=[...new Set(wo)].sort((t,n)=>qa(t)-qa(n));if(wo.length=0,Br){Br.push(...e);return}for(Br=e,_o=0;_o<Br.length;_o++){const t=Br[_o];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Br=null,_o=0}}const qa=i=>i.id==null?i.flags&2?-1:1/0:i.id;function P_(i){try{for(Hi=0;Hi<On.length;Hi++){const e=On[Hi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ul(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hi<On.length;Hi++){const e=On[Hi];e&&(e.flags&=-2)}Hi=-1,On.length=0,R_(),wc=null,(On.length||wo.length)&&P_()}}let Ti=null,D_=null;function Cc(i){const e=Ti;return Ti=i,D_=i&&i.type.__scopeId||null,e}function ux(i,e=Ti,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&ap(-1);const s=Cc(e);let o;try{o=i(...r)}finally{Cc(s),n._d&&ap(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function fx(i,e){if(Ti===null)return i;const t=ru(Ti),n=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=At]=e[r];s&&(tt(s)&&(s={mounted:s,updated:s}),s.deep&&xr(o),n.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function hs(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(wr(),ir(l,t,8,[i.el,a,i,e]),Cr())}}const hx=Symbol("_vte"),dx=i=>i.__isTeleport;function ad(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ad(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function L_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Ca(i,e,t,n,r=!1){if(Ze(i)){i.forEach((g,_)=>Ca(g,e&&(Ze(e)?e[_]:e),t,n,r));return}if(Ra(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ca(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?ru(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===At?a.refs={}:a.refs,f=a.setupState,h=vt(f),d=f===At?()=>!1:g=>xt(h,g);if(c!=null&&c!==l&&(en(c)?(u[c]=null,d(c)&&(f[c]=null)):An(c)&&(c.value=null)),tt(l))ul(l,a,12,[o,u]);else{const g=en(l),_=An(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Ze(p)&&jh(p,s):Ze(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,ri(m,t)):m()}}}Zc().requestIdleCallback;Zc().cancelIdleCallback;const Ra=i=>!!i.type.__asyncLoader,I_=i=>i.type.__isKeepAlive;function px(i,e){U_(i,"a",e)}function mx(i,e){U_(i,"da",e)}function U_(i,e,t=kn){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(tu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)I_(r.parent.vnode)&&_x(n,e,t,r),r=r.parent}}function _x(i,e,t,n){const r=tu(e,i,n,!0);F_(()=>{jh(n[e],r)},t)}function tu(i,e,t=kn,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{wr();const a=fl(t),l=ir(e,t,i,o);return a(),Cr(),l});return n?r.unshift(s):r.push(s),s}}const Dr=i=>(e,t=kn)=>{(!$a||i==="sp")&&tu(i,(...n)=>e(...n),t)},gx=Dr("bm"),cs=Dr("m"),vx=Dr("bu"),xx=Dr("u"),Sx=Dr("bum"),F_=Dr("um"),Mx=Dr("sp"),yx=Dr("rtg"),bx=Dr("rtc");function Ex(i,e=kn){tu("ec",i,e)}const Tx=Symbol.for("v-ndc");function zo(i,e,t,n){let r;const s=t,o=Ze(i);if(o||en(i)){const a=o&&Ao(i);let l=!1,c=!1;a&&(l=!Ri(i),c=ts(i),i=Qc(i)),r=new Array(i.length);for(let u=0,f=i.length;u<f;u++)r[u]=e(l?c?Tc(dn(i[u])):dn(i[u]):i[u],u,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(zt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const Af=i=>i?ig(i)?ru(i):Af(i.parent):null,Pa=Hn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Af(i.parent),$root:i=>Af(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>O_(i),$forceUpdate:i=>i.f||(i.f=()=>{od(i.update)}),$nextTick:i=>i.n||(i.n=Bo.bind(i.proxy)),$watch:i=>Yx.bind(i)}),Su=(i,e)=>i!==At&&!i.__isScriptSetup&&xt(i,e),Ax={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Su(n,e))return o[e]=1,n[e];if(r!==At&&xt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&xt(c,e))return o[e]=3,s[e];if(t!==At&&xt(t,e))return o[e]=4,t[e];wf&&(o[e]=0)}}const u=Pa[e];let f,h;if(u)return e==="$attrs"&&Mn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==At&&xt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,xt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Su(r,e)?(r[e]=t,!0):n!==At&&xt(n,e)?(n[e]=t,!0):xt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==At&&xt(i,o)||Su(e,o)||(a=s[0])&&xt(a,o)||xt(n,o)||xt(Pa,o)||xt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:xt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function Qd(i){return Ze(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let wf=!0;function wx(i){const e=O_(i),t=i.proxy,n=i.ctx;wf=!1,e.beforeCreate&&ep(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:b,unmounted:v,render:C,renderTracked:R,renderTriggered:w,errorCaptured:I,serverPrefetch:M,expose:y,inheritAttrs:L,components:O,directives:G,filters:$}=e;if(c&&Cx(c,n,null),o)for(const H in o){const B=o[H];tt(B)&&(n[H]=B.bind(t))}if(r){const H=r.call(t,t);zt(H)&&(i.data=id(H))}if(wf=!0,s)for(const H in s){const B=s[H],le=tt(B)?B.bind(t,t):tt(B.get)?B.get.bind(t,t):er,U=!tt(B)&&tt(B.set)?B.set.bind(t):er,me=mS({get:le,set:U});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>me.value,set:Le=>me.value=Le})}if(a)for(const H in a)N_(a[H],n,t,H);if(l){const H=tt(l)?l.call(t):l;Reflect.ownKeys(H).forEach(B=>{Ux(B,H[B])})}u&&ep(u,i,"c");function W(H,B){Ze(B)?B.forEach(le=>H(le.bind(t))):B&&H(B.bind(t))}if(W(gx,f),W(cs,h),W(vx,d),W(xx,g),W(px,_),W(mx,m),W(Ex,I),W(bx,R),W(yx,w),W(Sx,E),W(F_,v),W(Mx,M),Ze(y))if(y.length){const H=i.exposed||(i.exposed={});y.forEach(B=>{Object.defineProperty(H,B,{get:()=>t[B],set:le=>t[B]=le,enumerable:!0})})}else i.exposed||(i.exposed={});C&&i.render===er&&(i.render=C),L!=null&&(i.inheritAttrs=L),O&&(i.components=O),G&&(i.directives=G),M&&L_(i)}function Cx(i,e,t=er){Ze(i)&&(i=Cf(i));for(const n in i){const r=i[n];let s;zt(r)?"default"in r?s=sc(r.from||n,r.default,!0):s=sc(r.from||n):s=sc(r),An(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function ep(i,e,t){ir(Ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function N_(i,e,t,n){let r=n.includes(".")?K_(t,n):()=>t[n];if(en(i)){const s=e[i];tt(s)&&yu(r,s)}else if(tt(i))yu(r,i.bind(t));else if(zt(i))if(Ze(i))i.forEach(s=>N_(s,e,t,n));else{const s=tt(i.handler)?i.handler.bind(t):e[i.handler];tt(s)&&yu(r,s,i)}}function O_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Rc(l,c,o,!0)),Rc(l,e,o)),zt(e)&&s.set(e,l),l}function Rc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Rc(i,s,t,!0),r&&r.forEach(o=>Rc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Rx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Rx={data:tp,props:np,emits:np,methods:_a,computed:_a,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:_a,directives:_a,watch:Dx,provide:tp,inject:Px};function tp(i,e){return e?i?function(){return Hn(tt(i)?i.call(this,this):i,tt(e)?e.call(this,this):e)}:e:i}function Px(i,e){return _a(Cf(i),Cf(e))}function Cf(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Dn(i,e){return i?[...new Set([].concat(i,e))]:e}function _a(i,e){return i?Hn(Object.create(null),i,e):e}function np(i,e){return i?Ze(i)&&Ze(e)?[...new Set([...i,...e])]:Hn(Object.create(null),Qd(i),Qd(e??{})):e}function Dx(i,e){if(!i)return e;if(!e)return i;const t=Hn(Object.create(null),i);for(const n in e)t[n]=Dn(i[n],e[n]);return t}function k_(){return{app:null,config:{isNativeTag:Sv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lx=0;function Ix(i,e){return function(n,r=null){tt(n)||(n=Hn({},n)),r!=null&&!zt(r)&&(r=null);const s=k_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Lx++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:_S,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...f)):tt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||hn(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ru(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ir(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Co;Co=c;try{return u()}finally{Co=f}}};return c}}let Co=null;function Ux(i,e){if(kn){let t=kn.provides;const n=kn.parent&&kn.parent.provides;n===t&&(t=kn.provides=Object.create(n)),t[i]=e}}function sc(i,e,t=!1){const n=cS();if(n||Co){let r=Co?Co._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&tt(e)?e.call(n&&n.proxy):e}}const B_={},z_=()=>Object.create(B_),V_=i=>Object.getPrototypeOf(i)===B_;function Fx(i,e,t,n=!1){const r={},s=z_();i.propsDefaults=Object.create(null),H_(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Jv(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Nx(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=vt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(nu(i.emitsOptions,h))continue;const d=e[h];if(l)if(xt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=es(h);r[g]=Rf(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{H_(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!xt(e,f)&&((u=$s(f))===f||!xt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Rf(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!xt(e,f))&&(delete s[f],c=!0)}c&&vr(i.attrs,"set","")}function H_(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ta(l))continue;const c=e[l];let u;r&&xt(r,u=es(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:nu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=vt(t),c=a||At;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Rf(r,l,f,c[f],i,!xt(c,f))}}return o}function Rf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=xt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=fl(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===$s(t))&&(n=!0))}return n}const Ox=new WeakMap;function G_(i,e,t=!1){const n=t?Ox:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!tt(i)){const u=f=>{l=!0;const[h,d]=G_(f,e,!0);Hn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return zt(i)&&n.set(i,bo),bo;if(Ze(s))for(let u=0;u<s.length;u++){const f=es(s[u]);ip(f)&&(o[f]=At)}else if(s)for(const u in s){const f=es(u);if(ip(f)){const h=s[u],d=o[f]=Ze(h)||tt(h)?{type:h}:Hn({},h),g=d.type;let _=!1,m=!0;if(Ze(g))for(let p=0;p<g.length;++p){const E=g[p],b=tt(E)&&E.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(m=!1)}else _=tt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||xt(d,"default"))&&a.push(f)}}const c=[o,a];return zt(i)&&n.set(i,c),c}function ip(i){return i[0]!=="$"&&!Ta(i)}const ld=i=>i==="_"||i==="__"||i==="_ctx"||i==="$stable",cd=i=>Ze(i)?i.map(Xi):[Xi(i)],kx=(i,e,t)=>{if(e._n)return e;const n=ux((...r)=>cd(e(...r)),t);return n._c=!1,n},W_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ld(r))continue;const s=i[r];if(tt(s))e[r]=kx(r,s,n);else if(s!=null){const o=cd(s);e[r]=()=>o}}},X_=(i,e)=>{const t=cd(e);i.slots.default=()=>t},q_=(i,e,t)=>{for(const n in e)(t||!ld(n))&&(i[n]=e[n])},Bx=(i,e,t)=>{const n=i.slots=z_();if(i.vnode.shapeFlag&32){const r=e.__;r&&Mf(n,"__",r,!0);const s=e._;s?(q_(n,e,t),t&&Mf(n,"_",s,!0)):W_(e,n)}else e&&X_(i,e)},zx=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=At;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:q_(r,e,t):(s=!e.$stable,W_(e,r)),o=e}else e&&(X_(i,e),o={default:1});if(s)for(const a in r)!ld(a)&&o[a]==null&&delete r[a]},ri=eS;function Vx(i){return Hx(i)}function Hx(i,e){const t=Zc();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=er,insertStaticContent:g}=i,_=(D,x,V,Y=null,Z=null,P=null,ae=void 0,j=null,re=!!x.dynamicChildren)=>{if(D===x)return;D&&!oa(D,x)&&(Y=oe(D),Le(D,Z,P,!0),D=null),x.patchFlag===-2&&(re=!1,x.dynamicChildren=null);const{type:ie,ref:ve,shapeFlag:A}=x;switch(ie){case iu:m(D,x,V,Y);break;case ns:p(D,x,V,Y);break;case oc:D==null&&E(x,V,Y,ae);break;case yn:O(D,x,V,Y,Z,P,ae,j,re);break;default:A&1?C(D,x,V,Y,Z,P,ae,j,re):A&6?G(D,x,V,Y,Z,P,ae,j,re):(A&64||A&128)&&ie.process(D,x,V,Y,Z,P,ae,j,re,Pe)}ve!=null&&Z?Ca(ve,D&&D.ref,P,x||D,!x):ve==null&&D&&D.ref!=null&&Ca(D.ref,null,P,D,!0)},m=(D,x,V,Y)=>{if(D==null)n(x.el=a(x.children),V,Y);else{const Z=x.el=D.el;x.children!==D.children&&c(Z,x.children)}},p=(D,x,V,Y)=>{D==null?n(x.el=l(x.children||""),V,Y):x.el=D.el},E=(D,x,V,Y)=>{[D.el,D.anchor]=g(D.children,x,V,Y,D.el,D.anchor)},b=({el:D,anchor:x},V,Y)=>{let Z;for(;D&&D!==x;)Z=h(D),n(D,V,Y),D=Z;n(x,V,Y)},v=({el:D,anchor:x})=>{let V;for(;D&&D!==x;)V=h(D),r(D),D=V;r(x)},C=(D,x,V,Y,Z,P,ae,j,re)=>{x.type==="svg"?ae="svg":x.type==="math"&&(ae="mathml"),D==null?R(x,V,Y,Z,P,ae,j,re):M(D,x,Z,P,ae,j,re)},R=(D,x,V,Y,Z,P,ae,j)=>{let re,ie;const{props:ve,shapeFlag:A,transition:S,dirs:N}=D;if(re=D.el=o(D.type,P,ve&&ve.is,ve),A&8?u(re,D.children):A&16&&I(D.children,re,null,Y,Z,Mu(D,P),ae,j),N&&hs(D,null,Y,"created"),w(re,D,D.scopeId,ae,Y),ve){for(const J in ve)J!=="value"&&!Ta(J)&&s(re,J,null,ve[J],P,Y);"value"in ve&&s(re,"value",null,ve.value,P),(ie=ve.onVnodeBeforeMount)&&zi(ie,Y,D)}N&&hs(D,null,Y,"beforeMount");const q=Gx(Z,S);q&&S.beforeEnter(re),n(re,x,V),((ie=ve&&ve.onVnodeMounted)||q||N)&&ri(()=>{ie&&zi(ie,Y,D),q&&S.enter(re),N&&hs(D,null,Y,"mounted")},Z)},w=(D,x,V,Y,Z)=>{if(V&&d(D,V),Y)for(let P=0;P<Y.length;P++)d(D,Y[P]);if(Z){let P=Z.subTree;if(x===P||J_(P.type)&&(P.ssContent===x||P.ssFallback===x)){const ae=Z.vnode;w(D,ae,ae.scopeId,ae.slotScopeIds,Z.parent)}}},I=(D,x,V,Y,Z,P,ae,j,re=0)=>{for(let ie=re;ie<D.length;ie++){const ve=D[ie]=j?zr(D[ie]):Xi(D[ie]);_(null,ve,x,V,Y,Z,P,ae,j)}},M=(D,x,V,Y,Z,P,ae)=>{const j=x.el=D.el;let{patchFlag:re,dynamicChildren:ie,dirs:ve}=x;re|=D.patchFlag&16;const A=D.props||At,S=x.props||At;let N;if(V&&ds(V,!1),(N=S.onVnodeBeforeUpdate)&&zi(N,V,x,D),ve&&hs(x,D,V,"beforeUpdate"),V&&ds(V,!0),(A.innerHTML&&S.innerHTML==null||A.textContent&&S.textContent==null)&&u(j,""),ie?y(D.dynamicChildren,ie,j,V,Y,Mu(x,Z),P):ae||B(D,x,j,null,V,Y,Mu(x,Z),P,!1),re>0){if(re&16)L(j,A,S,V,Z);else if(re&2&&A.class!==S.class&&s(j,"class",null,S.class,Z),re&4&&s(j,"style",A.style,S.style,Z),re&8){const q=x.dynamicProps;for(let J=0;J<q.length;J++){const X=q[J],Se=A[X],ue=S[X];(ue!==Se||X==="value")&&s(j,X,Se,ue,Z,V)}}re&1&&D.children!==x.children&&u(j,x.children)}else!ae&&ie==null&&L(j,A,S,V,Z);((N=S.onVnodeUpdated)||ve)&&ri(()=>{N&&zi(N,V,x,D),ve&&hs(x,D,V,"updated")},Y)},y=(D,x,V,Y,Z,P,ae)=>{for(let j=0;j<x.length;j++){const re=D[j],ie=x[j],ve=re.el&&(re.type===yn||!oa(re,ie)||re.shapeFlag&198)?f(re.el):V;_(re,ie,ve,null,Y,Z,P,ae,!0)}},L=(D,x,V,Y,Z)=>{if(x!==V){if(x!==At)for(const P in x)!Ta(P)&&!(P in V)&&s(D,P,x[P],null,Z,Y);for(const P in V){if(Ta(P))continue;const ae=V[P],j=x[P];ae!==j&&P!=="value"&&s(D,P,j,ae,Z,Y)}"value"in V&&s(D,"value",x.value,V.value,Z)}},O=(D,x,V,Y,Z,P,ae,j,re)=>{const ie=x.el=D?D.el:a(""),ve=x.anchor=D?D.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:N}=x;N&&(j=j?j.concat(N):N),D==null?(n(ie,V,Y),n(ve,V,Y),I(x.children||[],V,ve,Z,P,ae,j,re)):A>0&&A&64&&S&&D.dynamicChildren?(y(D.dynamicChildren,S,V,Z,P,ae,j),(x.key!=null||Z&&x===Z.subTree)&&Y_(D,x,!0)):B(D,x,V,ve,Z,P,ae,j,re)},G=(D,x,V,Y,Z,P,ae,j,re)=>{x.slotScopeIds=j,D==null?x.shapeFlag&512?Z.ctx.activate(x,V,Y,ae,re):$(x,V,Y,Z,P,ae,re):te(D,x,re)},$=(D,x,V,Y,Z,P,ae)=>{const j=D.component=lS(D,Y,Z);if(I_(D)&&(j.ctx.renderer=Pe),uS(j,!1,ae),j.asyncDep){if(Z&&Z.registerDep(j,W,ae),!D.el){const re=j.subTree=hn(ns);p(null,re,x,V),D.placeholder=re.el}}else W(j,D,x,V,Z,P,ae)},te=(D,x,V)=>{const Y=x.component=D.component;if(Jx(D,x,V))if(Y.asyncDep&&!Y.asyncResolved){H(Y,x,V);return}else Y.next=x,Y.update();else x.el=D.el,Y.vnode=x},W=(D,x,V,Y,Z,P,ae)=>{const j=()=>{if(D.isMounted){let{next:A,bu:S,u:N,parent:q,vnode:J}=D;{const ge=$_(D);if(ge){A&&(A.el=J.el,H(D,A,ae)),ge.asyncDep.then(()=>{D.isUnmounted||j()});return}}let X=A,Se;ds(D,!1),A?(A.el=J.el,H(D,A,ae)):A=J,S&&mu(S),(Se=A.props&&A.props.onVnodeBeforeUpdate)&&zi(Se,q,A,J),ds(D,!0);const ue=sp(D),Ae=D.subTree;D.subTree=ue,_(Ae,ue,f(Ae.el),oe(Ae),D,Z,P),A.el=ue.el,X===null&&Qx(D,ue.el),N&&ri(N,Z),(Se=A.props&&A.props.onVnodeUpdated)&&ri(()=>zi(Se,q,A,J),Z)}else{let A;const{el:S,props:N}=x,{bm:q,m:J,parent:X,root:Se,type:ue}=D,Ae=Ra(x);ds(D,!1),q&&mu(q),!Ae&&(A=N&&N.onVnodeBeforeMount)&&zi(A,X,x),ds(D,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(ue);const ge=D.subTree=sp(D);_(null,ge,V,Y,D,Z,P),x.el=ge.el}if(J&&ri(J,Z),!Ae&&(A=N&&N.onVnodeMounted)){const ge=x;ri(()=>zi(A,X,ge),Z)}(x.shapeFlag&256||X&&Ra(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&ri(D.a,Z),D.isMounted=!0,x=V=Y=null}};D.scope.on();const re=D.effect=new u_(j);D.scope.off();const ie=D.update=re.run.bind(re),ve=D.job=re.runIfDirty.bind(re);ve.i=D,ve.id=D.uid,re.scheduler=()=>od(ve),ds(D,!0),ie()},H=(D,x,V)=>{x.component=D;const Y=D.vnode.props;D.vnode=x,D.next=null,Nx(D,x.props,Y,V),zx(D,x.children,V),wr(),Jd(D),Cr()},B=(D,x,V,Y,Z,P,ae,j,re=!1)=>{const ie=D&&D.children,ve=D?D.shapeFlag:0,A=x.children,{patchFlag:S,shapeFlag:N}=x;if(S>0){if(S&128){U(ie,A,V,Y,Z,P,ae,j,re);return}else if(S&256){le(ie,A,V,Y,Z,P,ae,j,re);return}}N&8?(ve&16&&he(ie,Z,P),A!==ie&&u(V,A)):ve&16?N&16?U(ie,A,V,Y,Z,P,ae,j,re):he(ie,Z,P,!0):(ve&8&&u(V,""),N&16&&I(A,V,Y,Z,P,ae,j,re))},le=(D,x,V,Y,Z,P,ae,j,re)=>{D=D||bo,x=x||bo;const ie=D.length,ve=x.length,A=Math.min(ie,ve);let S;for(S=0;S<A;S++){const N=x[S]=re?zr(x[S]):Xi(x[S]);_(D[S],N,V,null,Z,P,ae,j,re)}ie>ve?he(D,Z,P,!0,!1,A):I(x,V,Y,Z,P,ae,j,re,A)},U=(D,x,V,Y,Z,P,ae,j,re)=>{let ie=0;const ve=x.length;let A=D.length-1,S=ve-1;for(;ie<=A&&ie<=S;){const N=D[ie],q=x[ie]=re?zr(x[ie]):Xi(x[ie]);if(oa(N,q))_(N,q,V,null,Z,P,ae,j,re);else break;ie++}for(;ie<=A&&ie<=S;){const N=D[A],q=x[S]=re?zr(x[S]):Xi(x[S]);if(oa(N,q))_(N,q,V,null,Z,P,ae,j,re);else break;A--,S--}if(ie>A){if(ie<=S){const N=S+1,q=N<ve?x[N].el:Y;for(;ie<=S;)_(null,x[ie]=re?zr(x[ie]):Xi(x[ie]),V,q,Z,P,ae,j,re),ie++}}else if(ie>S)for(;ie<=A;)Le(D[ie],Z,P,!0),ie++;else{const N=ie,q=ie,J=new Map;for(ie=q;ie<=S;ie++){const Ie=x[ie]=re?zr(x[ie]):Xi(x[ie]);Ie.key!=null&&J.set(Ie.key,ie)}let X,Se=0;const ue=S-q+1;let Ae=!1,ge=0;const de=new Array(ue);for(ie=0;ie<ue;ie++)de[ie]=0;for(ie=N;ie<=A;ie++){const Ie=D[ie];if(Se>=ue){Le(Ie,Z,P,!0);continue}let we;if(Ie.key!=null)we=J.get(Ie.key);else for(X=q;X<=S;X++)if(de[X-q]===0&&oa(Ie,x[X])){we=X;break}we===void 0?Le(Ie,Z,P,!0):(de[we-q]=ie+1,we>=ge?ge=we:Ae=!0,_(Ie,x[we],V,null,Z,P,ae,j,re),Se++)}const Me=Ae?Wx(de):bo;for(X=Me.length-1,ie=ue-1;ie>=0;ie--){const Ie=q+ie,we=x[Ie],xe=x[Ie+1],Xe=Ie+1<ve?xe.el||xe.placeholder:Y;de[ie]===0?_(null,we,V,Xe,Z,P,ae,j,re):Ae&&(X<0||ie!==Me[X]?me(we,V,Xe,2):X--)}}},me=(D,x,V,Y,Z=null)=>{const{el:P,type:ae,transition:j,children:re,shapeFlag:ie}=D;if(ie&6){me(D.component.subTree,x,V,Y);return}if(ie&128){D.suspense.move(x,V,Y);return}if(ie&64){ae.move(D,x,V,Pe);return}if(ae===yn){n(P,x,V);for(let A=0;A<re.length;A++)me(re[A],x,V,Y);n(D.anchor,x,V);return}if(ae===oc){b(D,x,V);return}if(Y!==2&&ie&1&&j)if(Y===0)j.beforeEnter(P),n(P,x,V),ri(()=>j.enter(P),Z);else{const{leave:A,delayLeave:S,afterLeave:N}=j,q=()=>{D.ctx.isUnmounted?r(P):n(P,x,V)},J=()=>{A(P,()=>{q(),N&&N()})};S?S(P,q,J):J()}else n(P,x,V)},Le=(D,x,V,Y=!1,Z=!1)=>{const{type:P,props:ae,ref:j,children:re,dynamicChildren:ie,shapeFlag:ve,patchFlag:A,dirs:S,cacheIndex:N}=D;if(A===-2&&(Z=!1),j!=null&&(wr(),Ca(j,null,V,D,!0),Cr()),N!=null&&(x.renderCache[N]=void 0),ve&256){x.ctx.deactivate(D);return}const q=ve&1&&S,J=!Ra(D);let X;if(J&&(X=ae&&ae.onVnodeBeforeUnmount)&&zi(X,x,D),ve&6)ne(D.component,V,Y);else{if(ve&128){D.suspense.unmount(V,Y);return}q&&hs(D,null,x,"beforeUnmount"),ve&64?D.type.remove(D,x,V,Pe,Y):ie&&!ie.hasOnce&&(P!==yn||A>0&&A&64)?he(ie,x,V,!1,!0):(P===yn&&A&384||!Z&&ve&16)&&he(re,x,V),Y&&Ke(D)}(J&&(X=ae&&ae.onVnodeUnmounted)||q)&&ri(()=>{X&&zi(X,x,D),q&&hs(D,null,x,"unmounted")},V)},Ke=D=>{const{type:x,el:V,anchor:Y,transition:Z}=D;if(x===yn){Ve(V,Y);return}if(x===oc){v(D);return}const P=()=>{r(V),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:ae,delayLeave:j}=Z,re=()=>ae(V,P);j?j(D.el,P,re):re()}else P()},Ve=(D,x)=>{let V;for(;D!==x;)V=h(D),r(D),D=V;r(x)},ne=(D,x,V)=>{const{bum:Y,scope:Z,job:P,subTree:ae,um:j,m:re,a:ie,parent:ve,slots:{__:A}}=D;rp(re),rp(ie),Y&&mu(Y),ve&&Ze(A)&&A.forEach(S=>{ve.renderCache[S]=void 0}),Z.stop(),P&&(P.flags|=8,Le(ae,D,x,V)),j&&ri(j,x),ri(()=>{D.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},he=(D,x,V,Y=!1,Z=!1,P=0)=>{for(let ae=P;ae<D.length;ae++)Le(D[ae],x,V,Y,Z)},oe=D=>{if(D.shapeFlag&6)return oe(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const x=h(D.anchor||D.el),V=x&&x[hx];return V?h(V):x};let Ee=!1;const Te=(D,x,V)=>{D==null?x._vnode&&Le(x._vnode,null,null,!0):_(x._vnode||null,D,x,null,null,null,V),x._vnode=D,Ee||(Ee=!0,Jd(),R_(),Ee=!1)},Pe={p:_,um:Le,m:me,r:Ke,mt:$,mc:I,pc:B,pbc:y,n:oe,o:i};return{render:Te,hydrate:void 0,createApp:Ix(Te)}}function Mu({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ds({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Gx(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function Y_(i,e,t=!1){const n=i.children,r=e.children;if(Ze(n)&&Ze(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Y_(o,a)),a.type===iu&&(a.el=o.el),a.type===ns&&!a.el&&(a.el=o.el)}}function Wx(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function $_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$_(e)}function rp(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Xx=Symbol.for("v-scx"),qx=()=>sc(Xx);function yu(i,e,t){return j_(i,e,t)}function j_(i,e,t=At){const{immediate:n,deep:r,flush:s,once:o}=t,a=Hn({},t),l=e&&n||!e&&s!=="post";let c;if($a){if(s==="sync"){const d=qx();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=er,d.resume=er,d.pause=er,d}}const u=kn;a.call=(d,g,_)=>ir(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{ri(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():od(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=ox(i,e,a);return $a&&(c?c.push(h):l&&h()),h}function Yx(i,e,t){const n=this.proxy,r=en(i)?i.includes(".")?K_(n,i):()=>n[i]:i.bind(n,n);let s;tt(e)?s=e:(s=e.handler,t=e);const o=fl(this),a=j_(r,s.bind(n),t);return o(),a}function K_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const $x=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${es(e)}Modifiers`]||i[`${$s(e)}Modifiers`];function jx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||At;let r=t;const s=e.startsWith("update:"),o=s&&$x(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>en(u)?u.trim():u)),o.number&&(r=t.map(Tv)));let a,l=n[a=pu(e)]||n[a=pu(es(e))];!l&&s&&(l=n[a=pu($s(e))]),l&&ir(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ir(c,i,6,r)}}function Z_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!tt(i)){const l=c=>{const u=Z_(c,e,!0);u&&(a=!0,Hn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(zt(i)&&n.set(i,null),null):(Ze(s)?s.forEach(l=>o[l]=null):Hn(o,s),zt(i)&&n.set(i,o),o)}function nu(i,e){return!i||!$c(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(i,e[0].toLowerCase()+e.slice(1))||xt(i,$s(e))||xt(i,e))}function sp(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=Cc(i);let p,E;try{if(t.shapeFlag&4){const v=r||n,C=v;p=Xi(c.call(C,v,u,f,d,h,g)),E=a}else{const v=e;p=Xi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),E=e.props?a:Kx(a)}}catch(v){Da.length=0,eu(v,i,1),p=hn(ns)}let b=p;if(E&&_!==!1){const v=Object.keys(E),{shapeFlag:C}=b;v.length&&C&7&&(s&&v.some($h)&&(E=Zx(E,s)),b=Vo(b,E,!1,!0))}return t.dirs&&(b=Vo(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&ad(b,t.transition),p=b,Cc(m),p}const Kx=i=>{let e;for(const t in i)(t==="class"||t==="style"||$c(t))&&((e||(e={}))[t]=i[t]);return e},Zx=(i,e)=>{const t={};for(const n in i)(!$h(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Jx(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?op(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!nu(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?op(n,o,c):!0:!!o;return!1}function op(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!nu(t,s))return!0}return!1}function Qx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const J_=i=>i.__isSuspense;function eS(i,e){e&&e.pendingBranch?Ze(i)?e.effects.push(...i):e.effects.push(i):cx(i)}const yn=Symbol.for("v-fgt"),iu=Symbol.for("v-txt"),ns=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),Da=[];let hi=null;function Lt(i=!1){Da.push(hi=i?null:[])}function tS(){Da.pop(),hi=Da[Da.length-1]||null}let Ya=1;function ap(i,e=!1){Ya+=i,i<0&&hi&&e&&(hi.hasOnce=!0)}function Q_(i){return i.dynamicChildren=Ya>0?hi||bo:null,tS(),Ya>0&&hi&&hi.push(i),i}function Ut(i,e,t,n,r,s){return Q_($e(i,e,t,n,r,s,!0))}function nS(i,e,t,n,r){return Q_(hn(i,e,t,n,r,!0))}function eg(i){return i?i.__v_isVNode===!0:!1}function oa(i,e){return i.type===e.type&&i.key===e.key}const tg=({key:i})=>i??null,ac=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?en(i)||An(i)||tt(i)?{i:Ti,r:i,k:e,f:!!t}:i:null);function $e(i,e=null,t=null,n=0,r=null,s=i===yn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&tg(e),ref:e&&ac(e),scopeId:D_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ti};return a?(ud(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=en(t)?8:16),Ya>0&&!o&&hi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hi.push(l),l}const hn=iS;function iS(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Tx)&&(i=ns),eg(i)){const a=Vo(i,e,!0);return t&&ud(a,t),Ya>0&&!s&&hi&&(a.shapeFlag&6?hi[hi.indexOf(i)]=a:hi.push(a)),a.patchFlag=-2,a}if(pS(i)&&(i=i.__vccOpts),e){e=rS(e);let{class:a,style:l}=e;a&&!en(a)&&(e.class=Jc(a)),zt(l)&&(sd(l)&&!Ze(l)&&(l=Hn({},l)),e.style=Zh(l))}const o=en(i)?1:J_(i)?128:dx(i)?64:zt(i)?4:tt(i)?2:0;return $e(i,e,t,n,r,o,s,!0)}function rS(i){return i?sd(i)||V_(i)?Hn({},i):i:null}function Vo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?sS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&tg(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(ac(e)):[s,ac(e)]:ac(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==yn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Vo(i.ssContent),ssFallback:i.ssFallback&&Vo(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&ad(u,l.clone(u)),u}function ng(i=" ",e=0){return hn(iu,null,i,e)}function lc(i,e){const t=hn(oc,null,i);return t.staticCount=e,t}function Pc(i="",e=!1){return e?(Lt(),nS(ns,null,i)):hn(ns,null,i)}function Xi(i){return i==null||typeof i=="boolean"?hn(ns):Ze(i)?hn(yn,null,i.slice()):eg(i)?zr(i):hn(iu,null,String(i))}function zr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Vo(i)}function ud(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),ud(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!V_(e)?e._ctx=Ti:r===3&&Ti&&(Ti.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Ti},t=32):(e=String(e),n&64?(t=16,e=[ng(e)]):t=8);i.children=e,i.shapeFlag|=t}function sS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Jc([e.class,n.class]));else if(r==="style")e.style=Zh([e.style,n.style]);else if($c(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function zi(i,e,t,n=null){ir(i,e,7,[t,n])}const oS=k_();let aS=0;function lS(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||oS,s={uid:aS++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:G_(n,r),emitsOptions:Z_(n,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:n.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=jx.bind(null,s),i.ce&&i.ce(s),s}let kn=null;const cS=()=>kn||Ti;let Dc,Pf;{const i=Zc(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Dc=e("__VUE_INSTANCE_SETTERS__",t=>kn=t),Pf=e("__VUE_SSR_SETTERS__",t=>$a=t)}const fl=i=>{const e=kn;return Dc(i),i.scope.on(),()=>{i.scope.off(),Dc(e)}},lp=()=>{kn&&kn.scope.off(),Dc(null)};function ig(i){return i.vnode.shapeFlag&4}let $a=!1;function uS(i,e=!1,t=!1){e&&Pf(e);const{props:n,children:r}=i.vnode,s=ig(i);Fx(i,n,s,e),Bx(i,r,t||e);const o=s?fS(i,e):void 0;return e&&Pf(!1),o}function fS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ax);const{setup:n}=t;if(n){wr();const r=i.setupContext=n.length>1?dS(i):null,s=fl(i),o=ul(n,i,0,[i.props,r]),a=i_(o);if(Cr(),s(),(a||i.sp)&&!Ra(i)&&L_(i),a){if(o.then(lp,lp),e)return o.then(l=>{cp(i,l)}).catch(l=>{eu(l,i,0)});i.asyncDep=o}else cp(i,o)}else rg(i)}function cp(i,e,t){tt(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:zt(e)&&(i.setupState=A_(e)),rg(i)}function rg(i,e,t){const n=i.type;i.render||(i.render=n.render||er);{const r=fl(i);wr();try{wx(i)}finally{Cr(),r()}}}const hS={get(i,e){return Mn(i,"get",""),i[e]}};function dS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,hS),slots:i.slots,emit:i.emit,expose:e}}function ru(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(A_(Qv(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pa)return Pa[t](i)},has(e,t){return t in e||t in Pa}})):i.proxy}function pS(i){return tt(i)&&"__vccOpts"in i}const mS=(i,e)=>rx(i,e,$a),_S="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Df;const up=typeof window<"u"&&window.trustedTypes;if(up)try{Df=up.createPolicy("vue",{createHTML:i=>i})}catch{}const sg=Df?i=>Df.createHTML(i):i=>i,gS="http://www.w3.org/2000/svg",vS="http://www.w3.org/1998/Math/MathML",mr=typeof document<"u"?document:null,fp=mr&&mr.createElement("template"),xS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?mr.createElementNS(gS,i):e==="mathml"?mr.createElementNS(vS,i):t?mr.createElement(i,{is:t}):mr.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>mr.createTextNode(i),createComment:i=>mr.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>mr.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{fp.innerHTML=sg(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=fp.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},SS=Symbol("_vtc");function MS(i,e,t){const n=i[SS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Lc=Symbol("_vod"),og=Symbol("_vsh"),yS={beforeMount(i,{value:e},{transition:t}){i[Lc]=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):aa(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),aa(i,!0),n.enter(i)):n.leave(i,()=>{aa(i,!1)}):aa(i,e))},beforeUnmount(i,{value:e}){aa(i,e)}};function aa(i,e){i.style.display=e?i[Lc]:"none",i[og]=!e}const bS=Symbol(""),ES=/(^|;)\s*display\s*:/;function TS(i,e,t){const n=i.style,r=en(t);let s=!1;if(t&&!r){if(e)if(en(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&cc(n,a,"")}else for(const o in e)t[o]==null&&cc(n,o,"");for(const o in t)o==="display"&&(s=!0),cc(n,o,t[o])}else if(r){if(e!==t){const o=n[bS];o&&(t+=";"+o),n.cssText=t,s=ES.test(t)}}else e&&i.removeAttribute("style");Lc in i&&(i[Lc]=s?n.display:"",i[og]&&(n.display="none"))}const hp=/\s*!important$/;function cc(i,e,t){if(Ze(t))t.forEach(n=>cc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=AS(i,e);hp.test(t)?i.setProperty($s(n),t.replace(hp,""),"important"):i[n]=t}}const dp=["Webkit","Moz","ms"],bu={};function AS(i,e){const t=bu[e];if(t)return t;let n=es(e);if(n!=="filter"&&n in i)return bu[e]=n;n=o_(n);for(let r=0;r<dp.length;r++){const s=dp[r]+n;if(s in i)return bu[e]=s}return e}const pp="http://www.w3.org/1999/xlink";function mp(i,e,t,n,r,s=Dv(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(pp,e.slice(6,e.length)):i.setAttributeNS(pp,e,t):t==null||s&&!a_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":ls(t)?String(t):t)}function _p(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?sg(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=a_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function wS(i,e,t,n){i.addEventListener(e,t,n)}function CS(i,e,t,n){i.removeEventListener(e,t,n)}const gp=Symbol("_vei");function RS(i,e,t,n,r=null){const s=i[gp]||(i[gp]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=PS(e);if(n){const c=s[e]=IS(n,r);wS(i,a,c,l)}else o&&(CS(i,a,o,l),s[e]=void 0)}}const vp=/(?:Once|Passive|Capture)$/;function PS(i){let e;if(vp.test(i)){e={};let n;for(;n=i.match(vp);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):$s(i.slice(2)),e]}let Eu=0;const DS=Promise.resolve(),LS=()=>Eu||(DS.then(()=>Eu=0),Eu=Date.now());function IS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ir(US(n,t.value),e,5,[n])};return t.value=i,t.attached=LS(),t}function US(i,e){if(Ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const xp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,FS=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?MS(i,n,o):e==="style"?TS(i,t,n):$c(e)?$h(e)||RS(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):NS(i,e,n,o))?(_p(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mp(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!en(n))?_p(i,es(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),mp(i,e,n,o))};function NS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&xp(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return xp(e)&&en(t)?!1:e in i}const OS=Hn({patchProp:FS},xS);let Sp;function kS(){return Sp||(Sp=Vx(OS))}const BS=(...i)=>{const e=kS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=VS(n);if(!r)return;const s=e._component;!tt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,zS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function zS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function VS(i){return en(i)?document.querySelector(i):i}function _r(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function ag(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},fd,mn,Ft,Ai=1e8,Tt=1/Ai,Lf=Math.PI*2,HS=Lf/4,GS=0,lg=Math.sqrt,WS=Math.cos,XS=Math.sin,fn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Rr=function(e){return typeof e=="number"},hd=function(e){return typeof e>"u"},rr=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},dd=function(){return typeof window<"u"},Ml=function(e){return Gt(e)||fn(e)},cg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wn=Array.isArray,If=/(?:-?\.?\d|\.)+/gi,ug=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fg=/[+-]=-?[.\d]+/,hg=/[^,'"\[\]\s]+/gi,qS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Gi,Uf,pd,mi={},Ic={},dg,pg=function(e){return(Ic=Go(e,mi))&&Jn},md=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ja=function(e,t){return!t&&console.warn(e)},mg=function(e,t){return e&&(mi[e]=t)&&Ic&&(Ic[e]=t)||mi},Ka=function(){return 0},YS={suppressEvents:!0,isStart:!0,kill:!1},uc={suppressEvents:!0,kill:!1},$S={suppressEvents:!0},_d={},$r=[],Ff={},_g,ai={},Au={},Mp=30,fc=[],gd="",vd=function(e){var t=e[0],n,r;if(rr(t)||Gt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=fc.length;r--&&!fc[r].targetTest(t););n=fc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zg(e[r],n)))||e.splice(r,1);return e},Fs=function(e){return e._gsap||vd(wi(e))[0]._gsap},gg=function(e,t,n){return(n=e[t])&&Gt(n)?e[t]():hd(n)&&e.getAttribute&&e.getAttribute(t)||n},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Jt=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},jS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Uc=function(){var e=$r.length,t=$r.slice(0),n,r;for(Ff={},$r.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xd=function(e){return!!(e._initted||e._startAt||e.add)},vg=function(e,t,n,r){$r.length&&!mn&&Uc(),e.render(t,n,!!(mn&&t<0&&xd(e))),$r.length&&!mn&&Uc()},xg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hg).length<2?t:fn(e)?e.trim():e},Sg=function(e){return e},_i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},KS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Go=function(e,t){for(var n in t)e[n]=t[n];return e},yp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=rr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Fc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},La=function(e){var t=e.parent||kt,n=e.keyframes?KS(wn(e.keyframes)):_i;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},ZS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Mg=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},su=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},is=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ns=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},JS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nf=function(e,t,n,r){return e._startAt&&(mn?e._startAt.revert(uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},QS=function i(e){return!e||e._ts&&i(e.parent)},bp=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var n=Math.floor(e=Jt(e/t));return e&&n===e?n-1:n},Nc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ou=function(e){return e._end=Jt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},au=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Jt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ou(e),n._dirty||Ns(n,e)),e},yg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nc(e.rawTime(),t),(!t._dur||hl(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Ns(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Yi=function(e,t,n,r){return t.parent&&is(t),t._start=Jt((Rr(n)?n:n||e!==kt?Mi(e,n,t):e._time)+t._delay),t._end=Jt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mg(e,t,"_first","_last",e._sort?"_start":0),Of(t)||(e._recent=t),r||yg(e,t),e._ts<0&&au(e,e._tTime),e},bg=function(e,t){return(mi.ScrollTrigger||md("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},Eg=function(e,t,n,r,s){if(Md(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_g!==ui.frame)return $r.push(e),e._lazy=[s,r],1},eM=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Of=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tM=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&eM(e)&&!(!e._initted&&Of(e))||(e._ts<0||e._dp._ts<0)&&!Of(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=hl(0,e._tDur,t),u=Wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||mn||r||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Eg(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Nf(e,t,n,!0),e._onUpdate&&!n&&di(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&is(e,1),!n&&!mn&&(di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nM=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Xo=function(e,t,n,r){var s=e._repeat,o=Jt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Jt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&au(e,e._tTime=e._tDur*a),e.parent&&ou(e),n||Ns(e.parent,e),e},Ep=function(e){return e instanceof Bn?Ns(e):Xo(e,e._dur)},iM={_start:0,endTime:Ka,totalDuration:Ka},Mi=function i(e,t,n){var r=e.labels,s=e._recent||iM,o=e.duration()>=Ai?s.endTime(!1):e._dur,a,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(wn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Ia=function(e,t,n){var r=Rr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},us=function(e,t){return e||e===0?t(e):t},hl=function(e,t,n){return n<e?e:n>t?t:n},bn=function(e,t){return!fn(e)||!(t=qS.exec(e))?"":t[1]},rM=function(e,t,n){return us(n,function(r){return hl(e,t,r)})},kf=[].slice,Tg=function(e,t){return e&&rr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&rr(e[0]))&&!e.nodeType&&e!==Gi},sM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return fn(r)&&!t||Tg(r,1)?(s=n).push.apply(s,wi(r)):n.push(r)})||n},wi=function(e,t,n){return Ft&&!t&&Ft.selector?Ft.selector(e):fn(e)&&!n&&(Uf||!qo())?kf.call((t||pd).querySelectorAll(e),0):wn(e)?sM(e,n):Tg(e)?kf.call(e,0):e?[e]:[]},Bf=function(e){return e=wi(e)[0]||ja("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?ja("Invalid scope")||pd.createElement("div"):e)}},Ag=function(e){return e.sort(function(){return .5-Math.random()})},wg=function(e){if(Gt(e))return e;var t=rr(e)?e:{each:e},n=Os(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return fn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,E,b,v,C,R,w,I,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!M){for(w=-Ai;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:r%M,E=M===Ai?0:l?_*f/M-.5:r/M|0,w=0,I=Ai,R=0;R<_;R++)b=R%M-p,v=E-(R/M|0),m[R]=C=c?Math.abs(c==="y"?v:b):lg(b*b+v*v),C>w&&(w=C),C<I&&(I=C);r==="random"&&Ag(m),m.max=w-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(t.amount||t.each)||0,n=n&&_<0?Og(n):n}return _=(m[h]-m.min)/m.max||0,Jt(m.b+(n?n(_):_)*m.v)+m.u}},zf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Jt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Rr(n)?0:bn(n))}},Cg=function(e,t){var n=wn(e),r,s;return!n&&rr(e)&&(r=n=e.radius||Ai,e.values?(e=wi(e.values),(s=!Rr(e[0]))&&(r*=r)):e=zf(e.increment)),us(t,n?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ai,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Rr(o)?u:u+bn(o)}:zf(e))},Rg=function(e,t,n,r){return us(wn(e)?!t:n===!0?!!(n=0):!r,function(){return wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},oM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},aM=function(e,t){return function(n){return e(parseFloat(n))+(t||bn(n))}},lM=function(e,t,n){return Dg(e,t,0,1,n)},Pg=function(e,t,n){return us(n,function(r){return e[~~t(r)]})},cM=function i(e,t,n){var r=t-e;return wn(e)?Pg(e,i(0,e.length),t):us(n,function(s){return(r+(s-e)%r)%r+e})},uM=function i(e,t,n){var r=t-e,s=r*2;return wn(e)?Pg(e,i(0,e.length-1),t):us(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Za=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?hg:If),n+=e.substr(t,r-t)+Rg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dg=function(e,t,n,r,s){var o=t-e,a=r-n;return us(s,function(l){return n+((l-e)/o*a||0)})},fM=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=fn(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(wn(e)&&!wn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Go(wn(e)?[]:{},e));if(!u){for(l in t)Sd.call(a,e,l,"get",t[l]);s=function(g){return Ed(g,a)||(o?e.p:e)}}}return us(n,s)},Tp=function(e,t,n){var r=e.labels,s=Ai,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},di=function(e,t,n){var r=e.vars,s=r[t],o=Ft,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&$r.length&&Uc(),a&&(Ft=a),u=l?s.apply(c,l):s.call(c),Ft=o,u},ga=function(e){return is(e),e.scrollTrigger&&e.scrollTrigger.kill(!!mn),e.progress()<1&&di(e,"onInterrupt"),e},So,Lg=[],Ig=function(e){if(e)if(e=!e.name&&e.default||e,dd()||e.headless){var t=e.name,n=Gt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ka,render:Ed,add:Sd,kill:wM,modifier:AM,rawVars:0},o={targetTest:0,get:0,getSetter:bd,aliases:{},register:0};if(qo(),e!==r){if(ai[t])return;_i(r,_i(Fc(e,s),o)),Go(r.prototype,Go(s,Fc(e,o))),ai[r.prop=t]=r,e.targetTest&&(fc.push(r),_d[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mg(t,r),e.register&&e.register(Jn,r,jn)}else Lg.push(e)},Et=255,va={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Et+.5|0},Ug=function(e,t,n){var r=e?Rr(e)?[e>>16,e>>8&Et,e&Et]:0:va.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),va[e])r=va[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Et,r&Et,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Et,e&Et]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(If),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=wu(l+1/3,s,o),r[1]=wu(l,s,o),r[2]=wu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(ug),n&&r.length<4&&(r[3]=1),r}else r=e.match(If)||va.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/Et,o=r[1]/Et,a=r[2]/Et,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Fg=function(e){var t=[],n=[],r=-1;return e.split(jr).forEach(function(s){var o=s.match(xo)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ap=function(e,t,n){var r="",s=(e+r).match(jr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Ug(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Fg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(jr,"1").split(xo),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(jr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},jr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in va)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),hM=/hsl[a]?\(/,Ng=function(e){var t=e.join(" "),n;if(jr.lastIndex=0,jr.test(t))return n=hM.test(t),e[1]=Ap(e[1],n),e[0]=Ap(e[0],n,Fg(e[1])),!0},Ja,ui=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,E=m===!0,b,v,C,R;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,b=C-o,(b>0||E)&&(R=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=b+(b>=s?4:s-b),v=1),E||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](C,h,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){dg&&(!Uf&&dd()&&(Gi=Uf=window,pd=Gi.document||{},mi.gsap=Jn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Jn.version),pg(Ic||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),Lg.forEach(Ig)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ja=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ja=0,c=Ka},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,E){var b=p?function(v,C,R,w){m(v,C,R,w),f.remove(b)}:m;return f.remove(m),a[E?"unshift":"push"](b),qo(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),qo=function(){return!Ja&&ui.wake()},ht={},dM=/^[\d.\-M][\d.\-,\s]/,pM=/["']/g,mM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(pM,"").trim():+c,r=l.substr(a+1).trim();return t},_M=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},gM=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[mM(t[1])]:_M(e).split(",").map(xg)):ht._CE&&dM.test(e)?ht._CE("",e):n},Og=function(e){return function(t){return 1-e(1-t)}},kg=function i(e,t){for(var n=e._first,r;n;)n instanceof Bn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Os=function(e,t){return e&&(Gt(e)?e:ht[e]||gM(e))||t},js=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return $n(e,function(a){ht[a]=mi[a]=s,ht[o=a.toLowerCase()]=n;for(var l in s)ht[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[a+"."+l]=s[l]}),s},Bg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Lf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*XS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bg(a);return s=Lf/s,l.config=function(c,u){return i(e,c,u)},l},Ru=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bg(n);return r.config=function(s){return i(e,s)},r};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;js(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;js("Elastic",Cu("in"),Cu("out"),Cu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};js("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);js("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});js("Circ",function(i){return-(lg(1-i*i)-1)});js("Sine",function(i){return i===1?1:-WS(i*HS)+1});js("Back",Ru("in"),Ru("out"),Ru());ht.SteppedEase=ht.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((r*hl(0,o,a)|0)+s)*n}}};Ho.ease=ht["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return gd+=i+","+i+"Params,"});var zg=function(e,t){this.id=GS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gg,this.set=t?t.getSetter:bd},Qa=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Ft&&(this._ctx=Ft,Ft.data.push(this)),Ja||ui.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(au(this,n),!s._dp||s.parent||yg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),vg(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ou(this),JS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$S);var r=mn;return mn=n,xd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),mn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ep(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ep(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Mi(this,n),Yn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Yn(r)),this._dur||(this._zTime=-Tt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Gt(n)?n:Sg,a=function(){var c=r.then;r.then=null,Gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ga(this)},i})();_i(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Bn=(function(i){ag(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),kt&&Yi(n.parent||kt,_r(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&bg(_r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ia(0,arguments,this),this},t.from=function(r,s,o){return Ia(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ia(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Mi(this,o),1),this},t.call=function(r,s,o){return Yi(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Zt(r,o,Mi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,La(o).immediateRender=Yn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,La(a).immediateRender=Yn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Jt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,E,b,v,C,R,w;if(this!==kt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,b=this._ts,p=!b,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Jt(u%m),u===l?(_=this._repeat,h=c):(C=Jt(u/m),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=Wo(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),R&&_&1&&(h=c-h,w=1),_!==C&&!this._lock){var I=R&&C&1,M=I===(R&&_&1);if(_<C&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Jt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;kg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=nM(this,Jt(a),Jt(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!C&&(di(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-Tt);break}}d=g}else{d=this._last;for(var y=r<0?r:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&E!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||mn&&xd(d)),h!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=y?-Tt:Tt);break}}d=g}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-Tt)._zTime=h>=a?1:-1,this._ts))return this._start=v,ou(this),this.render(r,s,o);this._onUpdate&&!s&&di(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&is(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(di(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Rr(s)||(s=Mi(this,s,r)),!(r instanceof Qa)){if(wn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(fn(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?Yi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Zt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return fn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&su(this,r),r===this._recent&&(this._recent=this._last),Ns(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(ui.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Mi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Ka,o);return a.data="isPause",this._hasPause=1,Yi(this,a,Mi(this,r))},t.removePause=function(r){var s=this._first;for(r=Mi(this,r);s;)s._start===r&&s.data==="isPause"&&is(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Hr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=wi(r),l=this._first,c=Rr(s),u;l;)l instanceof Zt?jS(l._targets,a)&&(c?(!Hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Mi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Zt.to(o,_i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Xo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,_i({startAt:{time:Mi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Tp(this,Mi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Tp(this,Mi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Ns(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ns(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ai,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(vg(kt,Nc(r,kt)),_g=ui.frame),ui.frame>=Mp){Mp+=pi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&pi.autoSleep&&ui._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ui.sleep()}}},e})(Qa);_i(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var vM=function(e,t,n,r,s,o,a){var l=new jn(this._pt,e,t,0,1,qg,null,s),c=0,u=0,f,h,d,g,_,m,p,E;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Za(r)),o&&(E=[n,r],o(E,e,t),n=E[0],r=E[1]),h=n.match(Tu)||[];f=Tu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ro(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Tu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(fg.test(r)||p)&&(l.e=0),this._pt=l,l},Sd=function(e,t,n,r,s,o,a,l,c,u){Gt(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Gt(f)?c?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Gt(f)?c?bM:Wg:yd,g;if(fn(r)&&(~r.indexOf("random(")&&(r=Za(r)),r.charAt(1)==="="&&(g=Ro(h,r)+(bn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Vf)return!isNaN(h*r)&&r!==""?(g=new jn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?TM:Xg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&md(t,r),vM.call(this,e,t,h,r,d,l||pi.stringFilter,c))},xM=function(e,t,n,r,s){if(Gt(e)&&(e=Ua(e,s,t,n,r)),!rr(e)||e.style&&e.nodeType||wn(e)||cg(e))return fn(e)?Ua(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ua(e[a],s,t,n,r);return o},Vg=function(e,t,n,r,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:xM(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==So))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Hr,Vf,Md=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!fd,v=e.timeline,C,R,w,I,M,y,L,O,G,$,te,W,H;if(v&&(!h||!s)&&(s="none"),e._ease=Os(s,Ho.ease),e._yEase=f?Og(Os(f===!0?s:f,Ho.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(O=m[0]?Fs(m[0]).harness:0,W=O&&r[O.prop],C=Fc(r,_d),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?uc:YS),_._lazy=0),o){if(is(e._startAt=Zt.set(m,_i({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn||!a&&!d)&&e._startAt.revert(uc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=_i({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:p},C),W&&(w[O.prop]=W),is(e._startAt=Zt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(mn?e._startAt.revert(uc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Yn(l)||l&&!g,R=0;R<m.length;R++){if(M=m[R],L=M._gsap||vd(m)[R]._gsap,e._ptLookup[R]=$={},Ff[L.id]&&$r.length&&Uc(),te=E===m?R:E.indexOf(M),O&&(G=new O).init(M,W||C,e,te,E)!==!1&&(e._pt=I=new jn(e._pt,M,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){$[B]=I}),G.priority&&(y=1)),!O||W)for(w in C)ai[w]&&(G=Vg(w,C,e,te,M,E))?G.priority&&(y=1):$[w]=I=Sd.call(e,M,w,"get",C[w],te,E,0,r.stringFilter);e._op&&e._op[R]&&e.kill(M,e._op[R]),b&&e._pt&&(Hr=e,kt.killTweensOf(M,$,e.globalTime(t)),H=!e.parent,Hr=0),e._pt&&l&&(Ff[L.id]=1)}y&&Yg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,h&&t<=0&&v.render(Ai,!0,!0)},SM=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vf=1,e.vars[t]="+=0",Md(e,a),Vf=0,l?ja(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Yt(n)+bn(f.e)),f.b&&(f.b=u.s+bn(f.b))},MM=function(e,t){var n=e[0]?Fs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Go({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},yM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(wn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ua=function(e,t,n,r,s){return Gt(e)?e.call(t,n,r,s):fn(e)&&~e.indexOf("random(")?Za(e):e},Hg=gd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gg={};$n(Hg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Gg[i]=1});var Zt=(function(i){ag(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:La(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=r.parent||kt,b=(wn(n)||cg(n)?Rr(n[0]):"length"in r)?[n]:wi(n),v,C,R,w,I,M,y,L;if(a._targets=b.length?vd(b):ja("GSAP target "+n+" not found. https://gsap.com",!pi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Ml(c)||Ml(u)){if(r=a.vars,v=a.timeline=new Bn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:b}),v.kill(),v.parent=v._dp=_r(a),v._start=0,h||Ml(c)||Ml(u)){if(w=b.length,y=h&&wg(h),rr(h))for(I in h)~Hg.indexOf(I)&&(L||(L={}),L[I]=h[I]);for(C=0;C<w;C++)R=Fc(r,Gg),R.stagger=0,p&&(R.yoyoEase=p),L&&Go(R,L),M=b[C],R.duration=+Ua(c,_r(a),C,M,b),R.delay=(+Ua(u,_r(a),C,M,b)||0)-a._delay,!h&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(M,R,y?y(C,M,b):0),v._ease=ht.none;v.duration()?c=u=0:a.timeline=0}else if(g){La(_i(v.vars.defaults,{ease:"none"})),v._ease=Os(g.ease||r.ease||"none");var O=0,G,$,te;if(wn(g))g.forEach(function(W){return v.to(b,W,">")}),v.duration();else{R={};for(I in g)I==="ease"||I==="easeEach"||yM(I,g[I],R,g.easeEach);for(I in R)for(G=R[I].sort(function(W,H){return W.t-H.t}),O=0,C=0;C<G.length;C++)$=G[C],te={ease:$.e,duration:($.t-(C?G[C-1].t:0))/100*c},te[I]=$.v,v.to(b,te,O),O+=te.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!fd&&(Hr=_r(a),kt.killTweensOf(b),Hr=0),Yi(E,_r(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Jt(E._time)&&Yn(f)&&QS(_r(a))&&E.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&bg(_r(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Tt&&!u?l:r<Tt?0:r,h,d,g,_,m,p,E,b,v;if(!c)tM(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Jt(f%_),f===l?(g=this._repeat,h=c):(m=Jt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=Wo(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(b&&this._yEase&&kg(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Jt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Eg(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(v||this._ease)(h/c),this._from&&(this.ratio=E=1-E),!a&&f&&!s&&!m&&(di(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(E,d.d),d=d._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Nf(this,r,s,o),di(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&di(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Nf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&is(this,1),!s&&!(u&&!a)&&(f||a||p)&&(di(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ja||ui.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Md(this,c),u=this._ease(c/this._dur),SM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(au(this,0),this.parent||Mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Hr&&Hr.vars.overwrite!==!0)._first||ga(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?wi(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&ZS(a,l))return s==="all"&&(this._pt=0),ga(this);for(f=this._op=this._op||[],s!=="all"&&(fn(s)&&(_={},$n(s,function(E){return _[E]=1}),s=_),s=MM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&su(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ga(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ia(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ia(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e})(Qa);_i(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(i){Zt[i]=function(){var e=new Bn,t=kf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var yd=function(e,t,n){return e[t]=n},Wg=function(e,t,n){return e[t](n)},bM=function(e,t,n,r){return e[t](r.fp,n)},EM=function(e,t,n){return e.setAttribute(t,n)},bd=function(e,t){return Gt(e[t])?Wg:hd(e[t])&&e.setAttribute?EM:yd},Xg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},TM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},AM=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},wM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?su(this,t,"_pt"):t.dep||(n=1),t=r;return!n},CM=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Yg=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},jn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Xg,this.d=l||this,this.set=c||yd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=CM,this.m=n,this.mt=s,this.tween=r},i})();$n(gd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return _d[i]=1});mi.TweenMax=mi.TweenLite=Zt;mi.TimelineLite=mi.TimelineMax=Bn;kt=new Bn({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pi.stringFilter=Ng;var ks=[],hc={},RM=[],wp=0,PM=0,Pu=function(e){return(hc[e]||RM).map(function(t){return t()})},Hf=function(){var e=Date.now(),t=[];e-wp>2&&(Pu("matchMediaInit"),ks.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Gi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),wp=e,Pu("matchMedia"))},$g=(function(){function i(t,n){this.selector=n&&Bf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=PM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Gt(n)&&(s=r,r=n,n=Gt);var o=this,a=function(){var c=Ft,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Bf(s)),Ft=o,f=r.apply(o,arguments),Gt(f)&&o._r.push(f),Ft=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Gt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ft;Ft=null,n(this),Ft=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Zt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ks.length;o--;)ks[o].id===this.id&&ks.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),DM=(function(){function i(t){this.contexts=[],this.scope=t,Ft&&Ft.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){rr(n)||(n={matches:n});var o=new $g(0,s||this.scope),a=o.conditions={},l,c,u;Ft&&!o.selector&&(o.selector=Ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Gi.matchMedia(n[c]),l&&(ks.indexOf(o)<0&&ks.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hf):l.addEventListener("change",Hf)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Ig(r)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,n,r){fn(e)&&(e=wi(e)[0]);var s=Fs(e||{}).get,o=n?Sg:xg;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,r)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var r=e.map(function(u){return Jn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=ai[t],a=Fs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;So._pt=0,f.init(e,n?u+n:u,So,0,[e]),f.render(1,f),So._pt&&Ed(1,So)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Jn.to(e,_i((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,Ho.ease)),yp(Ho,e||{})},config:function(e){return yp(pi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ai[a]&&!mi[a]&&ja(t+" effect requires "+a+" plugin.")}),Au[t]=function(a,l,c){return n(wi(a),_i(l||{},s),c)},o&&(Bn.prototype[t]=function(a,l,c){return this.add(Au[t](a,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):ht},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bn(e),r,s;for(n.smoothChildTiming=Yn(e.smoothChildTiming),kt.remove(n),n._dp=0,n._time=n._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&Yi(n,r,r._start-r._delay),r=s;return Yi(kt,n,0),n},context:function(e,t){return e?new $g(e,t):Ft},matchMedia:function(e){return new DM(e)},matchMediaRefresh:function(){return ks.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Hf()},addEventListener:function(e,t){var n=hc[e]||(hc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:cM,wrapYoyo:uM,distribute:wg,random:Rg,snap:Cg,normalize:lM,getUnit:bn,clamp:rM,splitColor:Ug,toArray:wi,selector:Bf,mapRange:Dg,pipe:oM,unitize:aM,interpolate:fM,shuffle:Ag},install:pg,effects:Au,ticker:ui,updateRoot:Bn.updateRoot,plugins:ai,globalTimeline:kt,core:{PropTween:jn,globals:mg,Tween:Zt,Timeline:Bn,Animation:Qa,getCache:Fs,_removeLinkedListItem:su,reverting:function(){return mn},context:function(e){return e&&Ft&&(Ft.data.push(e),e._ctx=Ft),Ft},suppressOverwrites:function(e){return fd=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Oc[i]=Zt[i]});ui.add(Bn.updateRoot);So=Oc.to({},{duration:0});var LM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},IM=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=LM(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},$n(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}IM(a,s)}}}},Jn=Oc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",zf),Du("modifiers"),Du("snap",Cg))||Oc;Zt.version=Bn.version=Jn.version="3.13.0";dg=1;dd()&&qo();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Cp,Gr,Po,Td,Ps,Rp,Ad,UM=function(){return typeof window<"u"},Pr={},bs=180/Math.PI,Do=Math.PI/180,Js=Math.atan2,Pp=1e8,wd=/([A-Z])/g,FM=/(left|right|width|margin|padding|x)/i,NM=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},OM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},jg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zM=function(e,t,n){return e.style[t]=n},VM=function(e,t,n){return e.style.setProperty(t,n)},HM=function(e,t,n){return e._gsap[t]=n},GM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WM=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},XM=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Kn=Bt+"Origin",qM=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=gr(r,a)}):this.tfm[e]=o.x?o[e]:gr(r,e),e===Kn&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},Zg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},YM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(wd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ad(),(!s||!s.isStart)&&!n[Bt]&&(Zg(n),r.zOrigin&&n[Kn]&&(n[Kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jg=function(e,t){var n={target:e,props:[],revert:YM,save:qM};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Qg,Wf=function(e,t){var n=Gr.createElementNS?Gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gr.createElement(e);return n&&n.style?n:Gr.createElement(e)},Ci=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(wd,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Yo(t)||t,1)||""},Dp="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,n){var r=t||Ps,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dp[o]:"")+e},Xf=function(){UM()&&window.document&&(Cp=window,Gr=Cp.document,Po=Gr.documentElement,Ps=Wf("div")||{style:{}},Wf("div"),Bt=Yo(Bt),Kn=Bt+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qg=!!Yo("perspective"),Ad=Jn.core.reverting,Td=1)},Lp=function(e){var t=e.ownerSVGElement,n=Wf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Po.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Po.removeChild(n),s},Ip=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},e0=function(e){var t,n;try{t=e.getBBox()}catch{t=Lp(e),n=1}return t&&(t.width||t.height)||n||(t=Lp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ip(e,["x","cx","x1"])||0,y:+Ip(e,["y","cy","y1"])||0,width:0,height:0}:t},t0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&e0(e))},Hs=function(e,t){if(t){var n=e.style,r;t in Pr&&t!==Kn&&(t=Bt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(wd,"-$1").toLowerCase())):n.removeAttribute(t)}},Wr=function(e,t,n,r,s,o){var a=new jn(e._pt,t,n,0,1,o?Kg:jg);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Up={deg:1,rad:1,turn:1},$M={grid:1,flex:1},rs=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ps.style,l=FM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Up[r]||Up[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&t0(e),(d||o==="%")&&(Pr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Yt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Gr||!_.appendChild)&&(_=Gr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ui.time&&!m.uncache)return Yt(s/m.width*f);if(d&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+r,g=e[u],E?e.style[t]=E:Hs(e,t)}else(d||o==="%")&&!$M[Ci(_,"display")]&&(a.position=Ci(e,"position")),_===e&&(a.position="static"),_.appendChild(Ps),g=Ps[u],_.removeChild(Ps),a.position="absolute";return l&&d&&(m=Fs(_),m.time=ui.time,m.width=_[u]),Yt(h?g*s/f:g&&s?f/g*s:0)},gr=function(e,t,n,r){var s;return Td||Xf(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),Pr[t]&&t!=="transform"?(s=tl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bc(Ci(e,Kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=kc[t]&&kc[t](e,t,n)||Ci(e,t)||gg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?rs(e,t,s,n)+n:s},jM=function(e,t,n,r){if(!n||n==="none"){var s=Yo(t,e,1),o=s&&Ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ci(e,"borderTopColor"))}var a=new jn(this._pt,e.style,t,0,1,qg),l=0,c=0,u,f,h,d,g,_,m,p,E,b,v,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ci(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ci(e,t)||r,_?e.style[t]=_:Hs(e,t)),u=[n,r],Ng(u),n=u[0],r=u[1],h=n.match(xo)||[],C=r.match(xo)||[],C.length){for(;f=xo.exec(r);)m=f[0],E=r.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ro(d,m)+v),p=parseFloat(m),b=m.substr((p+"").length),l=xo.lastIndex-b.length,b||(b=b||pi.units[t]||v,l===r.length&&(r+=b,a.e+=b)),v!==b&&(d=rs(e,t,_,b)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Kg:jg;return fg.test(r)&&(a.e=0),this._pt=a,a},Fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Fp[n]||n,t[1]=Fp[r]||r,t.join(" ")},ZM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Pr[a]&&(l=1,a=a==="transformOrigin"?Kn:Bt),Hs(n,a);l&&(Hs(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",tl(n,1),o.uncache=1,Zg(r)))}},kc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new jn(e._pt,t,n,0,0,ZM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},el=[1,0,0,1,0,0],n0={},i0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Np=function(e){var t=Ci(e,Bt);return i0(t)?el:t.substr(7).match(ug).map(Yt)},Cd=function(e,t){var n=e._gsap||Fs(e),r=e.style,s=Np(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?el:s):(s===el&&!e.offsetParent&&e!==Po&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Po.appendChild(e)),s=Np(e),l?r.display=l:Hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qf=function(e,t,n,r,s,o){var a=e._gsap,l=s||Cd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],b=t.split(" "),v=parseFloat(b[0])||0,C=parseFloat(b[1])||0,R,w,I,M;n?l!==el&&(w=d*m-g*_)&&(I=v*(m/w)+C*(-_/w)+(_*E-m*p)/w,M=v*(-g/w)+C*(d/w)-(d*E-g*p)/w,v=I,C=M):(R=e0(e),v=R.x+(~b[0].indexOf("%")?v/100*R.width:v),C=R.y+(~(b[1]||b[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&a.smooth?(p=v-c,E=C-u,a.xOffset=f+(p*d+E*_)-p,a.yOffset=h+(p*g+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Kn]="0px 0px",o&&(Wr(o,a,"xOrigin",c,v),Wr(o,a,"yOrigin",u,C),Wr(o,a,"xOffset",f,a.xOffset),Wr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+C)},tl=function(e,t){var n=e._gsap||new zg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,Kn)||"0",u,f,h,d,g,_,m,p,E,b,v,C,R,w,I,M,y,L,O,G,$,te,W,H,B,le,U,me,Le,Ke,Ve,ne;return u=f=h=_=m=p=E=b=v=0,d=g=1,n.svg=!!(e.getCTM&&t0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),w=Cd(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),qf(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,R=n.yOrigin||0,w!==el&&(L=w[0],O=w[1],G=w[2],$=w[3],u=te=w[4],f=W=w[5],w.length===6?(d=Math.sqrt(L*L+O*O),g=Math.sqrt($*$+G*G),_=L||O?Js(O,L)*bs:0,E=G||$?Js(G,$)*bs+_:0,E&&(g*=Math.abs(Math.cos(E*Do))),n.svg&&(u-=C-(C*L+R*G),f-=R-(C*O+R*$))):(ne=w[6],Ke=w[7],U=w[8],me=w[9],Le=w[10],Ve=w[11],u=w[12],f=w[13],h=w[14],I=Js(ne,Le),m=I*bs,I&&(M=Math.cos(-I),y=Math.sin(-I),H=te*M+U*y,B=W*M+me*y,le=ne*M+Le*y,U=te*-y+U*M,me=W*-y+me*M,Le=ne*-y+Le*M,Ve=Ke*-y+Ve*M,te=H,W=B,ne=le),I=Js(-G,Le),p=I*bs,I&&(M=Math.cos(-I),y=Math.sin(-I),H=L*M-U*y,B=O*M-me*y,le=G*M-Le*y,Ve=$*y+Ve*M,L=H,O=B,G=le),I=Js(O,L),_=I*bs,I&&(M=Math.cos(I),y=Math.sin(I),H=L*M+O*y,B=te*M+W*y,O=O*M-L*y,W=W*M-te*y,L=H,te=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Yt(Math.sqrt(L*L+O*O+G*G)),g=Yt(Math.sqrt(W*W+ne*ne)),I=Js(te,W),E=Math.abs(I)>2e-4?I*bs:0,v=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!i0(Ci(e,Bt)),H&&e.setAttribute("transform",H))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(d*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Yt(d),n.scaleY=Yt(g),n.rotation=Yt(_)+a,n.rotationX=Yt(m)+a,n.rotationY=Yt(p)+a,n.skewX=E+a,n.skewY=b+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Kn]=Bc(c)),n.xOffset=n.yOffset=0,n.force3D=pi.force3D,n.renderTransform=n.svg?QM:Qg?r0:JM,n.uncache=0,n},Bc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lu=function(e,t,n){var r=bn(t);return Yt(parseFloat(t)+parseFloat(rs(e,"x",n+"px",r)))+r},JM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,r0(e,t)},ps="0deg",la="0px",ms=") ",r0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,b=n.zOrigin,v="",C=p==="auto"&&e&&e!==1||p===!0;if(b&&(f!==ps||u!==ps)){var R=parseFloat(u)*Do,w=Math.sin(R),I=Math.cos(R),M;R=parseFloat(f)*Do,M=Math.cos(R),o=Lu(E,o,w*M*-b),a=Lu(E,a,-Math.sin(R)*-b),l=Lu(E,l,I*M*-b+b)}m!==la&&(v+="perspective("+m+ms),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(C||o!==la||a!==la||l!==la)&&(v+=l!==la||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ms),c!==ps&&(v+="rotate("+c+ms),u!==ps&&(v+="rotateY("+u+ms),f!==ps&&(v+="rotateX("+f+ms),(h!==ps||d!==ps)&&(v+="skew("+h+", "+d+ms),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ms),E.style[Bt]=v||"translate(0, 0)"},QM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,b=parseFloat(o),v=parseFloat(a),C,R,w,I,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Do,c*=Do,C=Math.cos(l)*f,R=Math.sin(l)*f,w=Math.sin(l-c)*-h,I=Math.cos(l-c)*h,c&&(u*=Do,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,I*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,R*=M)),C=Yt(C),R=Yt(R),w=Yt(w),I=Yt(I)):(C=f,I=h,R=w=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=rs(d,"x",o,"px"),v=rs(d,"y",a,"px")),(g||_||m||p)&&(b=Yt(b+g-(g*C+_*w)+m),v=Yt(v+_-(g*R+_*I)+p)),(r||s)&&(M=d.getBBox(),b=Yt(b+r/100*M.width),v=Yt(v+s/100*M.height)),M="matrix("+C+","+R+","+w+","+I+","+b+","+v+")",d.setAttribute("transform",M),E&&(d.style[Bt]=M)},ey=function(e,t,n,r,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?bs:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Pp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Pp)%o-~~(c/o)*o)),e._pt=h=new jn(e._pt,t,n,r,c,OM),h.e=u,h.u="deg",e._props.push(n),h},Op=function(e,t){for(var n in t)e[n]=t[n];return e},ty=function(e,t,n){var r=Op({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=tl(n,1),Hs(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=tl(n,1),o[Bt]=c);for(l in Pr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=bn(c),g=bn(u),f=d!==g?rs(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new jn(e._pt,a,l,f,h-f,Gf),e._pt.u=g||0,e._props.push(l));Op(a,r)};$n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});kc[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return gr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var s0={name:"css",register:Xf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,E,b,v,C,R,w,I;Td||Xf(),this.styles=this.styles||Jg(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&Vg(_,t,n,r,e,s)))){if(d=typeof u,g=kc[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Za(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",jr.lastIndex=0,jr.test(c)||(m=bn(c),p=bn(u)),p?m!==p&&(c=rs(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],fn(c)&&~c.indexOf("random(")&&(c=Za(c)),bn(c+"")||c==="auto"||(c+=pi.units[_]||bn(gr(e,_))||""),(c+"").charAt(1)==="="&&(c=gr(e,_))):c=gr(e,_),h=parseFloat(c),E=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in $i&&(_==="autoAlpha"&&(h===1&&gr(e,"visibility")==="hidden"&&f&&(h=0),I.push("visibility",0,a.visibility),Wr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=$i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Pr,b){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ci(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(C=e._gsap,C.renderTransform&&!t.parseTransform||tl(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,v=this._pt=new jn(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new jn(this._pt,C,"scaleY",C.scaleY,(E?Ro(C.scaleY,E+f):f)-C.scaleY||0,Gf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Kn,0,a[Kn]),u=KM(u),C.svg?qf(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Wr(this,C,"zOrigin",C.zOrigin,p),Wr(this,a,_,Bc(c),Bc(u)));continue}else if(_==="svgOrigin"){qf(e,u,1,R,0,this);continue}else if(_ in n0){ey(this,C,_,h,E?Ro(h,E+u):u);continue}else if(_==="smoothOrigin"){Wr(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){ty(this,u,e);continue}}else _ in a||(_=Yo(_)||_);if(b||(f||f===0)&&(h||h===0)&&!NM.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=bn(u)||(_ in pi.units?pi.units[_]:m),m!==p&&(h=rs(e,_,c,p)),this._pt=new jn(this._pt,b?C:a,_,h,(E?Ro(h,E+f):f)-h,!b&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?BM:Gf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=kM);else if(_ in a)jM.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,r,s);else if(_!=="parseTransform"){md(_,u);continue}b||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}w&&Yg(this)},render:function(e,t){if(t.tween._time||!Ad())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gr,aliases:$i,getSetter:function(e,t,n){var r=$i[t];return r&&r.indexOf(",")<0&&(t=r),t in Pr&&t!==Kn&&(e._gsap.x||gr(e,"x"))?n&&Rp===n?t==="scale"?GM:HM:(Rp=n||{})&&(t==="scale"?WM:XM):e.style&&!hd(e.style[t])?zM:~t.indexOf("-")?VM:bd(e,t)},core:{_removeProperty:Hs,_getMatrix:Cd}};Jn.utils.checkPrefix=Yo;Jn.core.getStyleSaver=Jg;(function(i,e,t,n){var r=$n(i+","+e+","+t,function(s){Pr[s]=1});$n(e,function(s){pi.units[s]="deg",n0[s]=1}),$i[r[13]]=i+","+e,$n(n,function(s){var o=s.split(":");$i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){pi.units[i]="px"});Jn.registerPlugin(s0);var Qt=Jn.registerPlugin(s0)||Jn;Qt.core.Tween;const ny="/assets/profile-AvdsdmVk.jpg",iy={class:"hero",id:"home"},ry={class:"hero-wrapper"},sy={class:"hero-content"},oy=["src"],ay={class:"text-content"},ly={__name:"Home",setup(i){const e=un(null),t=un(null),n=un(null),r=un(null);return cs(async()=>{await Bo(),Qt.timeline({defaults:{duration:.8,ease:"power2.out"}}).from(e.value,{x:-100,opacity:0}).from([t.value,n.value,r.value],{x:50,opacity:0,stagger:.2},"-=0.5")}),(s,o)=>(Lt(),Ut("section",iy,[$e("div",ry,[$e("div",sy,[$e("div",{class:"hero-image",ref_key:"heroImage",ref:e},[$e("img",{src:T_(ny),alt:"Profile"},null,8,oy)],512),$e("div",ay,[$e("h1",{ref_key:"title",ref:t},o[0]||(o[0]=[ng("Halo, Saya ",-1),$e("span",null,"Muhammad Rizqi Kurniawan",-1)]),512),$e("p",{ref_key:"role",ref:n},"Seorang Website Developer",512),$e("p",{ref_key:"description",ref:r},o[1]||(o[1]=[lc(" Saya membangun antarmuka web modern, responsif, dan interaktif menggunakan teknologi seperti <strong>Vue.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, dan <strong>JavaScript</strong> untuk <strong>Front-end</strong>. Selain itu, saya menggunakan <strong>PHP Laravel</strong> untuk <strong>Back-end</strong> dan database menggunakan <strong>MySQL</strong> dan <strong>PostgreSQL</strong>",18)]),512)])])])]))}};function cy(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function uy(i,e,t){return e&&cy(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pn,dc,fi,Xr,qr,Lo,o0,Es,Fa,a0,yr,Fi,l0,c0=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},u0=1,Mo=[],lt=[],tr=[],Na=Date.now,Yf=function(e,t){return t},fy=function(){var e=Fa.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,lt),r.push.apply(r,tr),lt=n,tr=r,Yf=function(o,a){return t[o](a)}},Kr=function(e,t){return~tr.indexOf(e)&&tr[tr.indexOf(e)+1][t]},Oa=function(e){return!!~a0.indexOf(e)},Ln=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Pn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},yl="scrollLeft",bl="scrollTop",$f=function(){return yr&&yr.isPressed||lt.cache++},zc=function(e,t){var n=function r(s){if(s||s===0){u0&&(fi.history.scrollRestoration="manual");var o=yr&&yr.isPressed;s=r.v=Math.round(s)||(yr&&yr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&Yf("ss",s)}else(t||lt.cache!==r.cacheID||Yf("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},zn={s:yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zc(function(i){return arguments.length?fi.scrollTo(i,rn.sc()):fi.pageXOffset||Xr[yl]||qr[yl]||Lo[yl]||0})},rn={s:bl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:zn,sc:zc(function(i){return arguments.length?fi.scrollTo(zn.sc(),i):fi.pageYOffset||Xr[bl]||qr[bl]||Lo[bl]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||pn.utils.toArray)(e)[0]||(typeof e=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},hy=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ss=function(e,t){var n=t.s,r=t.sc;Oa(e)&&(e=Xr.scrollingElement||qr);var s=lt.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Ln(e,"scroll",$f);var a=lt[s+o],l=a||(lt[s+o]=zc(Kr(e,n),!0)||(Oa(e)?r:zc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=pn.getProperty(e,"scrollBehavior")==="smooth"),l},jf=function(e,t,n){var r=e,s=e,o=Na(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Na();_||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(g){var _=a,m=s,p=Na();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ca=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},f0=function(){Fa=pn.core.globals().ScrollTrigger,Fa&&Fa.core&&fy()},h0=function(e){return pn=e||c0(),!dc&&pn&&typeof document<"u"&&document.body&&(fi=window,Xr=document,qr=Xr.documentElement,Lo=Xr.body,a0=[fi,Xr,qr,Lo],pn.utils.clamp,l0=pn.core.context||function(){},Es="onpointerenter"in Lo?"pointer":"mouse",o0=$t.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=$t.eventTypes=("ontouchstart"in qr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in qr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return u0=0},500),f0(),dc=1),dc};zn.op=rn;lt.cache=0;var $t=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){dc||h0(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Fa||f0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,b=n.onPress,v=n.onRelease,C=n.onRight,R=n.onLeft,w=n.onUp,I=n.onDown,M=n.onChangeX,y=n.onChangeY,L=n.onChange,O=n.onToggleX,G=n.onToggleY,$=n.onHover,te=n.onHoverEnd,W=n.onMove,H=n.ignoreCheck,B=n.isNormalizer,le=n.onGestureStart,U=n.onGestureEnd,me=n.onWheel,Le=n.onEnable,Ke=n.onDisable,Ve=n.onClick,ne=n.scrollSpeed,he=n.capture,oe=n.allowClicks,Ee=n.lockAxis,Te=n.onLockAxis;this.target=a=qn(a)||qr,this.vars=n,d&&(d=pn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(Lo).lineHeight)||22);var Pe,ot,D,x,V,Y,Z,P=this,ae=0,j=0,re=n.passive||!u&&n.passive!==!1,ie=ss(a,zn),ve=ss(a,rn),A=ie(),S=ve(),N=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",q=Oa(a),J=a.ownerDocument||Xr,X=[0,0,0],Se=[0,0,0],ue=0,Ae=function(){return ue=Na()},ge=function(ke,Je){return(P.event=ke)&&d&&hy(ke.target,d)||Je&&N&&ke.pointerType!=="touch"||H&&H(ke,Je)},de=function(){P._vx.reset(),P._vy.reset(),ot.pause(),f&&f(P)},Me=function(){var ke=P.deltaX=kp(X),Je=P.deltaY=kp(Se),be=Math.abs(ke)>=r,qe=Math.abs(Je)>=r;L&&(be||qe)&&L(P,ke,Je,X,Se),be&&(C&&P.deltaX>0&&C(P),R&&P.deltaX<0&&R(P),M&&M(P),O&&P.deltaX<0!=ae<0&&O(P),ae=P.deltaX,X[0]=X[1]=X[2]=0),qe&&(I&&P.deltaY>0&&I(P),w&&P.deltaY<0&&w(P),y&&y(P),G&&P.deltaY<0!=j<0&&G(P),j=P.deltaY,Se[0]=Se[1]=Se[2]=0),(x||D)&&(W&&W(P),D&&(m&&D===1&&m(P),E&&E(P),D=0),x=!1),Y&&!(Y=!1)&&Te&&Te(P),V&&(me(P),V=!1),Pe=0},Ie=function(ke,Je,be){X[be]+=ke,Se[be]+=Je,P._vx.update(ke),P._vy.update(Je),c?Pe||(Pe=requestAnimationFrame(Me)):Me()},we=function(ke,Je){Ee&&!Z&&(P.axis=Z=Math.abs(ke)>Math.abs(Je)?"x":"y",Y=!0),Z!=="y"&&(X[2]+=ke,P._vx.update(ke,!0)),Z!=="x"&&(Se[2]+=Je,P._vy.update(Je,!0)),c?Pe||(Pe=requestAnimationFrame(Me)):Me()},xe=function(ke){if(!ge(ke,1)){ke=ca(ke,u);var Je=ke.clientX,be=ke.clientY,qe=Je-P.x,He=be-P.y,je=P.isDragging;P.x=Je,P.y=be,(je||(qe||He)&&(Math.abs(P.startX-Je)>=s||Math.abs(P.startY-be)>=s))&&(D=je?2:1,je||(P.isDragging=!0),we(qe,He))}},Xe=P.onPress=function(De){ge(De,1)||De&&De.button||(P.axis=Z=null,ot.pause(),P.isPressed=!0,De=ca(De),ae=j=0,P.startX=P.x=De.clientX,P.startY=P.y=De.clientY,P._vx.reset(),P._vy.reset(),Ln(B?a:J,Fi[1],xe,re,!0),P.deltaX=P.deltaY=0,b&&b(P))},F=P.onRelease=function(De){if(!ge(De,1)){Pn(B?a:J,Fi[1],xe,!0);var ke=!isNaN(P.y-P.startY),Je=P.isDragging,be=Je&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),qe=ca(De);!be&&ke&&(P._vx.reset(),P._vy.reset(),u&&oe&&pn.delayedCall(.08,function(){if(Na()-ue>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(J.createEvent){var He=J.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,fi,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(He)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&Je&&!B&&ot.restart(!0),D&&Me(),p&&Je&&p(P),v&&v(P,be)}},pe=function(ke){return ke.touches&&ke.touches.length>1&&(P.isGesturing=!0)&&le(ke,P.isDragging)},_e=function(){return(P.isGesturing=!1)||U(P)},Ce=function(ke){if(!ge(ke)){var Je=ie(),be=ve();Ie((Je-A)*ne,(be-S)*ne,1),A=Je,S=be,f&&ot.restart(!0)}},fe=function(ke){if(!ge(ke)){ke=ca(ke,u),me&&(V=!0);var Je=(ke.deltaMode===1?l:ke.deltaMode===2?fi.innerHeight:1)*g;Ie(ke.deltaX*Je,ke.deltaY*Je,0),f&&!B&&ot.restart(!0)}},se=function(ke){if(!ge(ke)){var Je=ke.clientX,be=ke.clientY,qe=Je-P.x,He=be-P.y;P.x=Je,P.y=be,x=!0,f&&ot.restart(!0),(qe||He)&&we(qe,He)}},Fe=function(ke){P.event=ke,$(P)},We=function(ke){P.event=ke,te(P)},dt=function(ke){return ge(ke)||ca(ke,u)&&Ve(P)};ot=P._dc=pn.delayedCall(h||.25,de).pause(),P.deltaX=P.deltaY=0,P._vx=jf(0,50,!0),P._vy=jf(0,50,!0),P.scrollX=ie,P.scrollY=ve,P.isDragging=P.isGesturing=P.isPressed=!1,l0(this),P.enable=function(De){return P.isEnabled||(Ln(q?J:a,"scroll",$f),o.indexOf("scroll")>=0&&Ln(q?J:a,"scroll",Ce,re,he),o.indexOf("wheel")>=0&&Ln(a,"wheel",fe,re,he),(o.indexOf("touch")>=0&&o0||o.indexOf("pointer")>=0)&&(Ln(a,Fi[0],Xe,re,he),Ln(J,Fi[2],F),Ln(J,Fi[3],F),oe&&Ln(a,"click",Ae,!0,!0),Ve&&Ln(a,"click",dt),le&&Ln(J,"gesturestart",pe),U&&Ln(J,"gestureend",_e),$&&Ln(a,Es+"enter",Fe),te&&Ln(a,Es+"leave",We),W&&Ln(a,Es+"move",se)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=x=D=!1,P._vx.reset(),P._vy.reset(),A=ie(),S=ve(),De&&De.type&&Xe(De),Le&&Le(P)),P},P.disable=function(){P.isEnabled&&(Mo.filter(function(De){return De!==P&&Oa(De.target)}).length||Pn(q?J:a,"scroll",$f),P.isPressed&&(P._vx.reset(),P._vy.reset(),Pn(B?a:J,Fi[1],xe,!0)),Pn(q?J:a,"scroll",Ce,he),Pn(a,"wheel",fe,he),Pn(a,Fi[0],Xe,he),Pn(J,Fi[2],F),Pn(J,Fi[3],F),Pn(a,"click",Ae,!0),Pn(a,"click",dt),Pn(J,"gesturestart",pe),Pn(J,"gestureend",_e),Pn(a,Es+"enter",Fe),Pn(a,Es+"leave",We),Pn(a,Es+"move",se),P.isEnabled=P.isPressed=P.isDragging=!1,Ke&&Ke(P))},P.kill=P.revert=function(){P.disable();var De=Mo.indexOf(P);De>=0&&Mo.splice(De,1),yr===P&&(yr=0)},Mo.push(P),B&&Oa(a)&&(yr=P),P.enable(_)},uy(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();$t.version="3.13.0";$t.create=function(i){return new $t(i)};$t.register=h0;$t.getAll=function(){return Mo.slice()};$t.getById=function(i){return Mo.filter(function(e){return e.vars.id===i})[0]};c0()&&pn.registerPlugin($t);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,go,at,wt,li,gt,Rd,Vc,nl,ka,xa,El,xn,lu,Kf,Fn,Bp,zp,vo,d0,Iu,p0,Un,Zf,m0,_0,kr,Jf,Pd,Io,Dd,Hc,Qf,Uu,Tl=1,Sn=Date.now,Fu=Sn(),Pi=0,Sa=0,Vp=function(e,t,n){var r=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Hp=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},dy=function i(){return Sa&&requestAnimationFrame(i)},Gp=function(){return lu=1},Wp=function(){return lu=0},Wi=function(e){return e},Ma=function(e){return Math.round(e*1e5)/1e5||0},g0=function(){return typeof window<"u"},v0=function(){return Oe||g0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Gs=function(e){return!!~Rd.indexOf(e)},x0=function(e){return(e==="Height"?Dd:at["inner"+e])||li["client"+e]||gt["client"+e]},S0=function(e){return Kr(e,"getBoundingClientRect")||(Gs(e)?function(){return vc.width=at.innerWidth,vc.height=Dd,vc}:function(){return Sr(e)})},py=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Kr(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?x0(s):e["client"+s])||0}},my=function(e,t){return!t||~tr.indexOf(e)?S0(e):function(){return vc}},ji=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Kr(e,n))?o()-S0(e)()[s]:Gs(e)?(li[n]||gt[n])-x0(r):e[n]-e["offset"+r])},Al=function(e,t){for(var n=0;n<vo.length;n+=3)(!t||~t.indexOf(vo[n+1]))&&e(vo[n],vo[n+1],vo[n+2])},oi=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},ya=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},ua=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Nu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qs=Math.abs,M0="left",y0="top",Ld="right",Id="bottom",Bs="width",zs="height",Ba="Right",za="Left",Va="Top",Ha="Bottom",Kt="padding",bi="margin",$o="Width",Ud="Height",nn="px",Ei=function(e){return at.getComputedStyle(e)},_y=function(e){var t=Ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Sr=function(e,t){var n=t&&Ei(e)[Kf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Gc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},b0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},gy=function(e){return function(t){return Oe.utils.snap(b0(e),t)}},Fd=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},vy=function(e){return function(t,n){return Fd(b0(e))(t,n.direction)}},wl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},ln=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Cl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rl={toggleActions:"play",anticipatePin:0},Wc={top:0,left:0,center:.5,bottom:1,right:1},pc=function(e,t){if(oi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Wc?Wc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=wt.createElement("div"),_=Gs(n)||Kr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?gt:n,E=e.indexOf("start")!==-1,b=E?c:u,v="border-color:"+b+";font-size:"+f+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===rn?Ld:Id)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],mc(g,0,r,E),g},mc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+$o]=1,s["border"+a+$o]=0,s[n.p]=t+"px",Oe.set(e,s)},st=[],eh={},il,Yp=function(){return Sn()-Pi>34&&(il||(il=requestAnimationFrame(Er)))},eo=function(){(!Un||!Un.isPressed||Un.startX>gt.clientWidth)&&(lt.cache++,Un?il||(il=requestAnimationFrame(Er)):Er(),Pi||Xs("scrollStart"),Pi=Sn())},Ou=function(){_0=at.innerWidth,m0=at.innerHeight},ba=function(e){lt.cache++,(e===!0||!xn&&!p0&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!Zf||_0!==at.innerWidth||Math.abs(at.innerHeight-m0)>at.innerHeight*.25))&&Vc.restart(!0)},Ws={},xy=[],E0=function i(){return ln(nt,"scrollEnd",i)||Ds(!0)},Xs=function(e){return Ws[e]&&Ws[e].map(function(t){return t()})||xy},si=[],T0=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},Nd=function(e,t){var n;for(Fn=0;Fn<st.length;Fn++)n=st[Fn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Hc=!0,t&&T0(t),t||Xs("revert")},A0=function(e,t){lt.cache++,(t||!Nn)&&lt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(at.history.scrollRestoration=Pd=e)},Nn,Vs=0,$p,Sy=function(){if($p!==Vs){var e=$p=Vs;requestAnimationFrame(function(){return e===Vs&&Ds(!0)})}},w0=function(){gt.appendChild(Io),Dd=!Un&&Io.offsetHeight||at.innerHeight,gt.removeChild(Io)},jp=function(e){return nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ds=function(e,t){if(li=wt.documentElement,gt=wt.body,Rd=[at,wt,li,gt],Pi&&!e&&!Hc){cn(nt,"scrollEnd",E0);return}w0(),Nn=nt.isRefreshing=!0,lt.forEach(function(r){return En(r)&&++r.cacheID&&(r.rec=r())});var n=Xs("refreshInit");d0&&nt.sort(),t||Nd(),lt.forEach(function(r){En(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),Hc=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Qf=1,jp(!0),st.forEach(function(r){var s=ji(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),jp(!1),Qf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){En(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),A0(Pd,1),Vc.pause(),Vs++,Nn=2,Er(2),st.forEach(function(r){return En(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Nn=nt.isRefreshing=!1,Xs("refresh")},th=0,_c=1,Ga,Er=function(e){if(e===2||!Nn&&!Hc){nt.isUpdating=!0,Ga&&Ga.update(0);var t=st.length,n=Sn(),r=n-Fu>=50,s=t&&st[0].scroll();if(_c=th>s?-1:1,Nn||(th=s),r&&(Pi&&!lu&&n-Pi>200&&(Pi=0,Xs("scrollEnd")),xa=Fu,Fu=n),_c<0){for(Fn=t;Fn-- >0;)st[Fn]&&st[Fn].update(0,r);_c=1}else for(Fn=0;Fn<t;Fn++)st[Fn]&&st[Fn].update(0,r);nt.isUpdating=!1}il=0},nh=[M0,y0,Id,Ld,bi+Ha,bi+Ba,bi+Va,bi+za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gc=nh.concat([Bs,zs,"boxSizing","max"+$o,"max"+Ud,"position",bi,Kt,Kt+Va,Kt+Ba,Kt+Ha,Kt+za]),My=function(e,t,n){Uo(n);var r=e._gsap;if(r.spacerIsNative)Uo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ku=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=nh.length,o=t.style,a=e.style,l;s--;)l=nh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Id]=a[Ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Bs]=Gc(e,zn)+nn,o[zs]=Gc(e,rn)+nn,o[Kt]=a[bi]=a[y0]=a[M0]="0",Uo(r),a[Bs]=a["max"+$o]=n[Bs],a[zs]=a["max"+Ud]=n[zs],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yy=/([A-Z])/g,Uo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yy,"-$1").toLowerCase())}},Dl=function(e){for(var t=gc.length,n=e.style,r=[],s=0;s<t;s++)r.push(gc[s],n[gc[s]]);return r.t=e,r},by=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},vc={left:0,top:0},Kp=function(e,t,n,r,s,o,a,l,c,u,f,h,d,g){En(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?pc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,E;if(d&&d.seek(0),isNaN(e)||(e=+e),ya(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&mc(a,n,r,!0);else{En(t)&&(t=t(l));var b=(e||"0").split(" "),v,C,R,w;E=qn(t,l)||gt,v=Sr(E)||{},(!v||!v.left&&!v.top)&&Ei(E).display==="none"&&(w=E.style.display,E.style.display="block",v=Sr(E),w?E.style.display=w:E.style.removeProperty("display")),C=pc(b[0],v[r.d]),R=pc(b[1]||"0",n),e=v[r.p]-c[r.p]-u+C+s-R,a&&mc(a,R,r,n-R<20||a._isStart&&R>20),n-=n-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,M=o._isStart;m="scroll"+r.d2,mc(o,I,r,M&&I>20||!M&&(f?Math.max(gt[m],li[m]):o.parentNode[m])<=I+1),f&&(c=Sr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+nn))}return d&&E&&(m=Sr(E),d.seek(h),p=Sr(E),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},Ey=/(webkit|moz|length|cssText|inset)/i,Zp=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===gt){e._stOrig=s.cssText,a=Ei(e);for(o in a)!+o&&!Ey.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},C0=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Ll=function(e,t,n){var r={};r[t.p]="+="+n,Oe.set(e,r)},Jp=function(e,t){var n=ss(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=C0(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Er()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Oe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),nt.isTouch&&cn(e,"touchmove",n.wheelHandler),s},nt=(function(){function i(t,n){go||i.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sa){this.update=this.refresh=this.kill=Wi;return}n=Xp(oi(n)||ya(n)||n.nodeType?{trigger:n}:n,Rl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,b=s.once,v=s.snap,C=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?zn:rn,L=!f&&f!==0,O=qn(n.scroller||at),G=Oe.core.getCache(O),$=Gs(O),te=("pinType"in n?n.pinType:Kr(O,"pinType")||$&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=L&&n.toggleActions.split(" "),B="markers"in n?n.markers:Rl.markers,le=$?0:parseFloat(Ei(O)["border"+y.p2+$o])||0,U=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Le=py(O,$,y),Ke=my(O,$),Ve=0,ne=0,he=0,oe=ss(O,y),Ee,Te,Pe,ot,D,x,V,Y,Z,P,ae,j,re,ie,ve,A,S,N,q,J,X,Se,ue,Ae,ge,de,Me,Ie,we,xe,Xe,F,pe,_e,Ce,fe,se,Fe,We;if(U._startClamp=U._endClamp=!1,U._dir=y,m*=45,U.scroller=O,U.scroll=w?w.time.bind(w):oe,ot=oe(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(d0=1,n.refreshPriority===-9999&&(Ga=U)),G.tweenScroll=G.tweenScroll||{top:Jp(O,rn),left:Jp(O,zn)},U.tweenTo=Ee=G.tweenScroll[y.p],U.scrubDuration=function(be){pe=ya(be)&&be,pe?F?F.duration(be):F=Oe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pe,paused:!0,onComplete:function(){return p&&p(U)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(f),xe=0,l||(l=r.vars.id)),v&&((!Ts(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in gt.style&&Oe.set($?[gt,li]:O,{scrollBehavior:"auto"}),lt.forEach(function(be){return En(be)&&be.target===($?wt.scrollingElement||li:O)&&(be.smooth=!1)}),Pe=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?gy(r):v.snapTo==="labelsDirectional"?vy(r):v.directional!==!1?function(be,qe){return Fd(v.snapTo)(be,Sn()-ne<500?0:qe.direction)}:Oe.utils.snap(v.snapTo),_e=v.duration||{min:.1,max:2},_e=Ts(_e)?ka(_e.min,_e.max):ka(_e,_e),Ce=Oe.delayedCall(v.delay||pe/2||.1,function(){var be=oe(),qe=Sn()-ne<500,He=Ee.tween;if((qe||Math.abs(U.getVelocity())<10)&&!He&&!lu&&Ve!==be){var je=(be-x)/ie,Xt=r&&!L?r.totalProgress():je,it=qe?0:(Xt-Xe)/(Sn()-xa)*1e3||0,It=Oe.utils.clamp(-je,1-je,Qs(it/2)*it/.185),qt=je+(v.inertia===!1?0:It),Rt,yt,St=v,Qn=St.onStart,Pt=St.onInterrupt,Cn=St.onComplete;if(Rt=Pe(qt,U),ya(Rt)||(Rt=qt),yt=Math.max(0,Math.round(x+Rt*ie)),be<=V&&be>=x&&yt!==be){if(He&&!He._initted&&He.data<=Qs(yt-be))return;v.inertia===!1&&(It=Rt-je),Ee(yt,{duration:_e(Qs(Math.max(Qs(qt-Xt),Qs(Rt-Xt))*.185/it/.05||0)),ease:v.ease||"power3",data:Qs(yt-be),onInterrupt:function(){return Ce.restart(!0)&&Pt&&Pt(U)},onComplete:function(){U.update(),Ve=oe(),r&&!L&&(F?F.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),xe=Xe=r&&!L?r.totalProgress():U.progress,E&&E(U),Cn&&Cn(U)}},be,It*ie,yt-be-It*ie),Qn&&Qn(U,Ee.tween)}}else U.isActive&&Ve!==be&&Ce.restart(!0)}).pause()),l&&(eh[l]=U),h=U.trigger=qn(h||d!==!0&&d),We=h&&h._gsap&&h._gsap.stRevert,We&&(We=We(U)),d=d===!0?h:qn(d),oi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===bi||(g=!g&&d.parentNode&&d.parentNode.style&&Ei(d.parentNode).display==="flex"?!1:Kt),U.pin=d,Te=Oe.core.getCache(d),Te.spacer?ve=Te.pinState:(R&&(R=qn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Te.spacerIsNative=!!R,R&&(Te.spacerState=Dl(R))),Te.spacer=N=R||wt.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Te.pinState=ve=Dl(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),U.spacer=N=Te.spacer,we=Ei(d),Ae=we[g+y.os2],J=Oe.getProperty(d),X=Oe.quickSetter(d,y.a,nn),ku(d,N,we),S=Dl(d)),B){j=Ts(B)?Xp(B,qp):qp,P=Pl("scroller-start",l,O,y,j,0),ae=Pl("scroller-end",l,O,y,j,0,P),q=P["offset"+y.op.d2];var dt=qn(Kr(O,"content")||O);Y=this.markerStart=Pl("start",l,dt,y,j,q,0,w),Z=this.markerEnd=Pl("end",l,dt,y,j,q,0,w),w&&(Fe=Oe.quickSetter([Y,Z],y.a,nn)),!te&&!(tr.length&&Kr(O,"fixedMarkers")===!0)&&(_y($?gt:O),Oe.set([P,ae],{force3D:!0}),de=Oe.quickSetter(P,y.a,nn),Ie=Oe.quickSetter(ae,y.a,nn))}if(w){var De=w.vars.onUpdate,ke=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){U.update(0,0,1),De&&De.apply(w,ke||[])})}if(U.previous=function(){return st[st.indexOf(U)-1]},U.next=function(){return st[st.indexOf(U)+1]},U.revert=function(be,qe){if(!qe)return U.kill(!0);var He=be!==!1||!U.enabled,je=xn;He!==U.isReverted&&(He&&(fe=Math.max(oe(),U.scroll.rec||0),he=U.progress,se=r&&r.progress()),Y&&[Y,Z,P,ae].forEach(function(Xt){return Xt.style.display=He?"none":"block"}),He&&(xn=U,U.update(He)),d&&(!C||!U.isActive)&&(He?My(d,N,ve):ku(d,N,Ei(d),ge)),He||U.update(He),xn=je,U.isReverted=He)},U.refresh=function(be,qe,He,je){if(!((xn||!U.enabled)&&!qe)){if(d&&be&&Pi){cn(i,"scrollEnd",E0);return}!Nn&&me&&me(U),xn=U,Ee.tween&&!He&&(Ee.tween.kill(),Ee.tween=0),F&&F.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Xt=Le(),it=Ke(),It=w?w.duration():ji(O,y),qt=ie<=.01||!ie,Rt=0,yt=je||0,St=Ts(He)?He.end:n.end,Qn=n.endTrigger||h,Pt=Ts(He)?He.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Cn=U.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,U),gi=h&&Math.max(0,st.indexOf(U))||0,tn=gi,T,k,K,Q,z,ce,ye,Ne,Ue,Ge,ze,Be,Qe;for(B&&Ts(He)&&(Be=Oe.getProperty(P,y.p),Qe=Oe.getProperty(ae,y.p));tn-- >0;)ce=st[tn],ce.end||ce.refresh(0,1)||(xn=U),ye=ce.pin,ye&&(ye===h||ye===d||ye===Cn)&&!ce.isReverted&&(Ge||(Ge=[]),Ge.unshift(ce),ce.revert(!0,!0)),ce!==st[tn]&&(gi--,tn--);for(En(Pt)&&(Pt=Pt(U)),Pt=Vp(Pt,"start",U),x=Kp(Pt,h,Xt,y,oe(),Y,P,U,it,le,te,It,w,U._startClamp&&"_startClamp")||(d?-.001:0),En(St)&&(St=St(U)),oi(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(oi(Pt)?Pt.split(" ")[0]:"")+St:(Rt=pc(St.substr(2),Xt),St=oi(Pt)?Pt:(w?Oe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,x):x)+Rt,Qn=h)),St=Vp(St,"end",U),V=Math.max(x,Kp(St||(Qn?"100% 0":It),Qn,Xt,y,oe()+Rt,Z,ae,U,it,le,te,It,w,U._endClamp&&"_endClamp"))||-.001,Rt=0,tn=gi;tn--;)ce=st[tn],ye=ce.pin,ye&&ce.start-ce._pinPush<=x&&!w&&ce.end>0&&(T=ce.end-(U._startClamp?Math.max(0,ce.start):ce.start),(ye===h&&ce.start-ce._pinPush<x||ye===Cn)&&isNaN(Pt)&&(Rt+=T*(1-ce.progress)),ye===d&&(yt+=T));if(x+=Rt,V+=Rt,U._startClamp&&(U._startClamp+=Rt),U._endClamp&&!Nn&&(U._endClamp=V||-.001,V=Math.min(V,ji(O,y))),ie=V-x||(x-=.01)&&.001,qt&&(he=Oe.utils.clamp(0,1,Oe.utils.normalize(x,V,fe))),U._pinPush=yt,Y&&Rt&&(T={},T[y.a]="+="+Rt,Cn&&(T[y.p]="-="+oe()),Oe.set([Y,Z],T)),d&&!(Qf&&U.end>=ji(O,y)))T=Ei(d),Q=y===rn,K=oe(),Se=parseFloat(J(y.a))+yt,!It&&V>1&&(ze=($?wt.scrollingElement||li:O).style,ze={style:ze,value:ze["overflow"+y.a.toUpperCase()]},$&&Ei(gt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ze.style["overflow"+y.a.toUpperCase()]="scroll")),ku(d,N,T),S=Dl(d),k=Sr(d,!0),Ne=te&&ss(O,Q?zn:rn)(),g?(ge=[g+y.os2,ie+yt+nn],ge.t=N,tn=g===Kt?Gc(d,y)+ie+yt:0,tn&&(ge.push(y.d,tn+nn),N.style.flexBasis!=="auto"&&(N.style.flexBasis=tn+nn)),Uo(ge),Cn&&st.forEach(function(ct){ct.pin===Cn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),te&&oe(fe)):(tn=Gc(d,y),tn&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=tn+nn)),te&&(z={top:k.top+(Q?K-x:Ne)+nn,left:k.left+(Q?Ne:K-x)+nn,boxSizing:"border-box",position:"fixed"},z[Bs]=z["max"+$o]=Math.ceil(k.width)+nn,z[zs]=z["max"+Ud]=Math.ceil(k.height)+nn,z[bi]=z[bi+Va]=z[bi+Ba]=z[bi+Ha]=z[bi+za]="0",z[Kt]=T[Kt],z[Kt+Va]=T[Kt+Va],z[Kt+Ba]=T[Kt+Ba],z[Kt+Ha]=T[Kt+Ha],z[Kt+za]=T[Kt+za],A=by(ve,z,C),Nn&&oe(0)),r?(Ue=r._initted,Iu(1),r.render(r.duration(),!0,!0),ue=J(y.a)-Se+ie+yt,Me=Math.abs(ie-ue)>1,te&&Me&&A.splice(A.length-2,2),r.render(0,!0,!0),Ue||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Iu(0)):ue=ie,ze&&(ze.value?ze.style["overflow"+y.a.toUpperCase()]=ze.value:ze.style.removeProperty("overflow-"+y.a));else if(h&&oe()&&!w)for(k=h.parentNode;k&&k!==gt;)k._pinOffset&&(x-=k._pinOffset,V-=k._pinOffset),k=k.parentNode;Ge&&Ge.forEach(function(ct){return ct.revert(!1,!0)}),U.start=x,U.end=V,ot=D=Nn?fe:oe(),!w&&!Nn&&(ot<fe&&oe(fe),U.scroll.rec=0),U.revert(!1,!0),ne=Sn(),Ce&&(Ve=-1,Ce.restart(!0)),xn=0,r&&L&&(r._initted||se)&&r.progress()!==se&&r.progress(se||0,!0).render(r.time(),!0,!0),(qt||he!==U.progress||w||_||r&&!r._initted)&&(r&&!L&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(w&&x<-.001&&!he?Oe.utils.normalize(x,V,0):he,!0),U.progress=qt||(ot-x)/ie===he?0:he),d&&g&&(N._pinOffset=Math.round(U.progress*ue)),F&&F.invalidate(),isNaN(Be)||(Be-=Oe.getProperty(P,y.p),Qe-=Oe.getProperty(ae,y.p),Ll(P,y,Be),Ll(Y,y,Be-(je||0)),Ll(ae,y,Qe),Ll(Z,y,Qe-(je||0))),qt&&!Nn&&U.update(),u&&!Nn&&!re&&(re=!0,u(U),re=!1)}},U.getVelocity=function(){return(oe()-D)/(Sn()-xa)*1e3||0},U.endAnimation=function(){ua(U.callbackAnimation),r&&(F?F.progress(1):r.paused()?L||ua(r,U.direction<0,1):ua(r,r.reversed()))},U.labelToScroll=function(be){return r&&r.labels&&(x||U.refresh()||x)+r.labels[be]/r.duration()*ie||0},U.getTrailing=function(be){var qe=st.indexOf(U),He=U.direction>0?st.slice(0,qe).reverse():st.slice(qe+1);return(oi(be)?He.filter(function(je){return je.vars.preventOverlaps===be}):He).filter(function(je){return U.direction>0?je.end<=x:je.start>=V})},U.update=function(be,qe,He){if(!(w&&!He&&!be)){var je=Nn===!0?fe:U.scroll(),Xt=be?0:(je-x)/ie,it=Xt<0?0:Xt>1?1:Xt||0,It=U.progress,qt,Rt,yt,St,Qn,Pt,Cn,gi;if(qe&&(D=ot,ot=w?oe():je,v&&(Xe=xe,xe=r&&!L?r.totalProgress():it)),m&&d&&!xn&&!Tl&&Pi&&(!it&&x<je+(je-D)/(Sn()-xa)*m?it=1e-4:it===1&&V>je+(je-D)/(Sn()-xa)*m&&(it=.9999)),it!==It&&U.enabled){if(qt=U.isActive=!!it&&it<1,Rt=!!It&&It<1,Pt=qt!==Rt,Qn=Pt||!!it!=!!It,U.direction=it>It?1:-1,U.progress=it,Qn&&!xn&&(yt=it&&!It?0:it===1?1:It===1?2:3,L&&(St=!Pt&&H[yt+1]!=="none"&&H[yt+1]||H[yt],gi=r&&(St==="complete"||St==="reset"||St in r))),M&&(Pt||gi)&&(gi||f||!r)&&(En(M)?M(U):U.getTrailing(M).forEach(function(K){return K.endAnimation()})),L||(F&&!xn&&!Tl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",it,r._tTime/r._tDur):(F.vars.totalProgress=it,F.invalidate().restart())):r&&r.totalProgress(it,!!(xn&&(ne||be)))),d){if(be&&g&&(N.style[g+y.os2]=Ae),!te)X(Ma(Se+ue*it));else if(Qn){if(Cn=!be&&it>It&&V+1>je&&je+1>=ji(O,y),C)if(!be&&(qt||Cn)){var tn=Sr(d,!0),T=je-x;Zp(d,gt,tn.top+(y===rn?T:0)+nn,tn.left+(y===rn?0:T)+nn)}else Zp(d,N);Uo(qt||Cn?A:S),Me&&it<1&&qt||X(Se+(it===1&&!Cn?ue:0))}}v&&!Ee.tween&&!xn&&!Tl&&Ce.restart(!0),a&&(Pt||b&&it&&(it<1||!Uu))&&nl(a.targets).forEach(function(K){return K.classList[qt||b?"add":"remove"](a.className)}),o&&!L&&!be&&o(U),Qn&&!xn?(L&&(gi&&(St==="complete"?r.pause().totalProgress(1):St==="reset"?r.restart(!0).pause():St==="restart"?r.restart(!0):r[St]()),o&&o(U)),(Pt||!Uu)&&(c&&Pt&&Nu(U,c),W[yt]&&Nu(U,W[yt]),b&&(it===1?U.kill(!1,1):W[yt]=0),Pt||(yt=it===1?1:3,W[yt]&&Nu(U,W[yt]))),I&&!qt&&Math.abs(U.getVelocity())>(ya(I)?I:2500)&&(ua(U.callbackAnimation),F?F.progress(1):ua(r,St==="reverse"?1:!it,1))):L&&o&&!xn&&o(U)}if(Ie){var k=w?je/w.duration()*(w._caScrollDist||0):je;de(k+(P._isFlipped?1:0)),Ie(k)}Fe&&Fe(-je/w.duration()*(w._caScrollDist||0))}},U.enable=function(be,qe){U.enabled||(U.enabled=!0,cn(O,"resize",ba),$||cn(O,"scroll",eo),me&&cn(i,"refreshInit",me),be!==!1&&(U.progress=he=0,ot=D=Ve=oe()),qe!==!1&&U.refresh())},U.getTween=function(be){return be&&Ee?Ee.tween:F},U.setPositions=function(be,qe,He,je){if(w){var Xt=w.scrollTrigger,it=w.duration(),It=Xt.end-Xt.start;be=Xt.start+It*be/it,qe=Xt.start+It*qe/it}U.refresh(!1,!1,{start:Hp(be,He&&!!U._startClamp),end:Hp(qe,He&&!!U._endClamp)},je),U.update()},U.adjustPinSpacing=function(be){if(ge&&be){var qe=ge.indexOf(y.d)+1;ge[qe]=parseFloat(ge[qe])+be+nn,ge[1]=parseFloat(ge[1])+be+nn,Uo(ge)}},U.disable=function(be,qe){if(U.enabled&&(be!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,qe||F&&F.pause(),fe=0,Te&&(Te.uncache=1),me&&ln(i,"refreshInit",me),Ce&&(Ce.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!$)){for(var He=st.length;He--;)if(st[He].scroller===O&&st[He]!==U)return;ln(O,"resize",ba),$||ln(O,"scroll",eo)}},U.kill=function(be,qe){U.disable(be,qe),F&&!qe&&F.kill(),l&&delete eh[l];var He=st.indexOf(U);He>=0&&st.splice(He,1),He===Fn&&_c>0&&Fn--,He=0,st.forEach(function(je){return je.scroller===U.scroller&&(He=1)}),He||Nn||(U.scroll.rec=0),r&&(r.scrollTrigger=null,be&&r.revert({kill:!1}),qe||r.kill()),Y&&[Y,Z,P,ae].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Ga===U&&(Ga=0),d&&(Te&&(Te.uncache=1),He=0,st.forEach(function(je){return je.pin===d&&He++}),He||(Te.spacer=0)),n.onKill&&n.onKill(U)},st.push(U),U.enable(!1,!1),We&&We(U),r&&r.add&&!ie){var Je=U.update;U.update=function(){U.update=Je,lt.cache++,x||V||U.refresh()},Oe.delayedCall(.01,U.update),ie=.01,x=V=0}else U.refresh();d&&Sy()},i.register=function(n){return go||(Oe=n||v0(),g0()&&window.document&&i.enable(),go=Sa),go},i.defaults=function(n){if(n)for(var r in n)Rl[r]=n[r];return Rl},i.disable=function(n,r){Sa=0,st.forEach(function(o){return o[r?"kill":"disable"](n)}),ln(at,"wheel",eo),ln(wt,"scroll",eo),clearInterval(El),ln(wt,"touchcancel",Wi),ln(gt,"touchstart",Wi),wl(ln,wt,"pointerdown,touchstart,mousedown",Gp),wl(ln,wt,"pointerup,touchend,mouseup",Wp),Vc.kill(),Al(ln);for(var s=0;s<lt.length;s+=3)Cl(ln,lt[s],lt[s+1]),Cl(ln,lt[s],lt[s+2])},i.enable=function(){if(at=window,wt=document,li=wt.documentElement,gt=wt.body,Oe&&(nl=Oe.utils.toArray,ka=Oe.utils.clamp,Jf=Oe.core.context||Wi,Iu=Oe.core.suppressOverwrites||Wi,Pd=at.history.scrollRestoration||"auto",th=at.pageYOffset||0,Oe.core.globals("ScrollTrigger",i),gt)){Sa=1,Io=document.createElement("div"),Io.style.height="100vh",Io.style.position="absolute",w0(),dy(),$t.register(Oe),i.isTouch=$t.isTouch,kr=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zf=$t.isTouch===1,cn(at,"wheel",eo),Rd=[at,wt,li,gt],Oe.matchMedia?(i.matchMedia=function(c){var u=Oe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Oe.addEventListener("matchMediaInit",function(){return Nd()}),Oe.addEventListener("matchMediaRevert",function(){return T0()}),Oe.addEventListener("matchMedia",function(){Ds(0,1),Xs("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return Ou(),Ou})):console.warn("Requires GSAP 3.11.0 or later"),Ou(),cn(wt,"scroll",eo);var n=gt.hasAttribute("style"),r=gt.style,s=r.borderTopStyle,o=Oe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Sr(gt),rn.m=Math.round(a.top+rn.sc())||0,zn.m=Math.round(a.left+zn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),El=setInterval(Yp,250),Oe.delayedCall(.5,function(){return Tl=0}),cn(wt,"touchcancel",Wi),cn(gt,"touchstart",Wi),wl(cn,wt,"pointerdown,touchstart,mousedown",Gp),wl(cn,wt,"pointerup,touchend,mouseup",Wp),Kf=Oe.utils.checkPrefix("transform"),gc.push(Kf),go=Sn(),Vc=Oe.delayedCall(.2,Ds).pause(),vo=[wt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;wt.hidden?(Bp=c,zp=u):(Bp!==c||zp!==u)&&ba()},wt,"DOMContentLoaded",Ds,at,"load",Ds,at,"resize",ba],Al(cn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Cl(ln,lt[l],lt[l+1]),Cl(ln,lt[l],lt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Uu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(El)||(El=r)&&setInterval(Yp,r),"ignoreMobileResize"in n&&(Zf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Al(ln)||Al(cn,n.autoRefreshEvents||"none"),p0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=qn(n),o=lt.indexOf(s),a=Gs(s);~o&&lt.splice(o,a?6:2),r&&(a?tr.unshift(at,r,gt,r,li,r):tr.unshift(s,r))},i.clearMatchMedia=function(n){st.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(oi(n)?qn(n):n).getBoundingClientRect(),a=o[s?Bs:zs]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},i.positionInViewport=function(n,r,s){oi(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[s?Bs:zs],l=r==null?a/2:r in Wc?Wc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},i.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ws.killAll||[];Ws={},r.forEach(function(s){return s()})}},i})();nt.version="3.13.0";nt.saveStyles=function(i){return i?nl(i).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Jf())}}):si};nt.revert=function(i,e){return Nd(!i,e)};nt.create=function(i,e){return new nt(i,e)};nt.refresh=function(i){return i?ba(!0):(go||nt.register())&&Ds(!0)};nt.update=function(i){return++lt.cache&&Er(i===!0?2:0)};nt.clearScrollMemory=A0;nt.maxScroll=function(i,e){return ji(i,e?zn:rn)};nt.getScrollFunc=function(i,e){return ss(qn(i),e?zn:rn)};nt.getById=function(i){return eh[i]};nt.getAll=function(){return st.filter(function(i){return i.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Pi};nt.snapDirectional=Fd;nt.addEventListener=function(i,e){var t=Ws[i]||(Ws[i]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(i,e){var t=Ws[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Oe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),cn(nt,"refresh",function(){return s=e.batchMax()})),nl(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var Qp=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Bu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===li&&i(gt,t)},Il={auto:1,scroll:1},Ty=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Il[(l=Ei(s)).overflowY]||Il[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gs(s)&&(Il[(l=Ei(s)).overflowY]||Il[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},R0=function(e,t,n,r){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Ty,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(wt,$t.eventTypes[0],tm,!1,!0)},onDisable:function(){return ln(wt,$t.eventTypes[0],tm,!0)}})},Ay=/(input|label|select|textarea)/i,em,tm=function(e){var t=Ay.test(e.target.tagName);(t||em)&&(e._gsapAllow=!0,em=t)},wy=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||li,u=Oe.core.globals().ScrollSmoother,f=u&&u.get(),h=kr&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=ss(c,rn),g=ss(c,zn),_=1,m=($t.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,E=En(r)?function(){return r(a)}:function(){return r||2.8},b,v,C=R0(c,e.type,!0,s),R=function(){return v=!1},w=Wi,I=Wi,M=function(){l=ji(c,rn),I=ka(kr?1:0,l),n&&(w=ka(0,ji(c,zn))),b=Vs},y=function(){h._gsap.y=Ma(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(R);var B=Ma(a.deltaY/2),le=I(d.v-B);if(h&&le!==d.v+d.offset){d.offset=le-d.v;var U=Ma((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px",d.cacheID=lt.cache,Er()}return!0}d.offset&&y(),v=!0},O,G,$,te,W=function(){M(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return kr&&H.type==="touchmove"&&L()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){v=!1;var H=_;_=Ma((at.visualViewport&&at.visualViewport.scale||1)/m),O.pause(),H!==_&&Bu(c,_>1.01?!0:n?!1:"x"),G=g(),$=d(),M(),b=Vs},e.onRelease=e.onGestureStart=function(H,B){if(d.offset&&y(),!B)te.restart(!0);else{lt.cache++;var le=E(),U,me;n&&(U=g(),me=U+le*.05*-H.velocityX/.227,le*=Qp(g,U,me,ji(c,zn)),O.vars.scrollX=w(me)),U=d(),me=U+le*.05*-H.velocityY/.227,le*=Qp(d,U,me,ji(c,rn)),O.vars.scrollY=I(me),O.invalidate().duration(le).play(.01),(kr&&O.vars.scrollY>=l||U>=l-1)&&Oe.to({},{onUpdate:W,duration:le})}o&&o(H)},e.onWheel=function(){O._ts&&O.pause(),Sn()-p>1e3&&(b=0,p=Sn())},e.onChange=function(H,B,le,U,me){if(Vs!==b&&M(),B&&n&&g(w(U[2]===B?G+(H.startX-H.x):g()+B-U[1])),le){d.offset&&y();var Le=me[2]===le,Ke=Le?$+H.startY-H.y:d()+le-me[1],Ve=I(Ke);Le&&Ke!==Ve&&($+=Ve-Ke),d(Ve)}(le||B)&&Er()},e.onEnable=function(){Bu(c,n?!1:"x"),nt.addEventListener("refresh",W),cn(at,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Bu(c,!0),ln(at,"resize",W),nt.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new $t(e),a.iOS=kr,kr&&!d()&&d(1),kr&&Oe.ticker.add(Wi),te=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:C0(d,d(),function(){return O.pause()})},onUpdate:Er,onComplete:te.vars.onComplete}),a};nt.sort=function(i){if(En(i))return st.sort(i);var e=at.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(i){return new $t(i)};nt.normalizeScroll=function(i){if(typeof i>"u")return Un;if(i===!0&&Un)return Un.enable();if(i===!1){Un&&Un.kill(),Un=i;return}var e=i instanceof $t?i:wy(i);return Un&&Un.target===e.target&&Un.kill(),Gs(e.target)&&(Un=e),e};nt.core={_getVelocityProp:jf,_inputObserver:R0,_scrollers:lt,_proxies:tr,bridge:{ss:function(){Pi||Xs("scrollStart"),Pi=Sn()},ref:function(){return xn}}};v0()&&Oe.registerPlugin(nt);const Cy="/assets/logo1-DvzqMviy.png",Ry="/assets/logo2--6AzuqwK.png",Py="/assets/logo3-DSY_MYYz.png",Dy="/assets/logo4-DZubB_ou.png",Ly="/assets/logo5-ClxAYN_R.png",Iy="/assets/logo6-CMVGadOG.png",Uy="/assets/logo7-CV2xO7mx.png",Fy={class:"skill",id:"skill"},Ny={class:"skill-content"},Oy=["src","alt"],ky={class:"skill-content"},By=["src","alt"],zy={__name:"Skill",setup(i){Qt.registerPlugin(nt);const e=un(null),t=un(null);un(null);const n=un([{name:"Laravel",logo:Dy},{name:"Vue.js",logo:Ly},{name:"HTML",logo:Iy},{name:"CSS",logo:Uy}]),r=un([{name:"After Effect",logo:Cy},{name:"Adobe Illustrator",logo:Ry},{name:"Premiere Pro",logo:Py}]);function s(l){return[...l.slice(1),l[0]]}function o(l,c){const u=l.value.querySelectorAll(".skill-item");Qt.to(u,{rotateY:90,opacity:0,duration:.4,stagger:.05,ease:"power1.in",onComplete:()=>{c.value=s(c.value),Bo(()=>{const f=l.value.querySelectorAll(".skill-item");Qt.fromTo(f,{rotateY:-90,opacity:0},{rotateY:0,opacity:1,duration:.4,stagger:.05,ease:"power1.out"})})}})}function a(l,c,u=8e3){const f=()=>{o(l,c),setTimeout(f,u)};setTimeout(f,u)}return cs(()=>{Bo(()=>{const l=c=>{const u=c.value.querySelectorAll(".skill-item");Qt.from(c.value.querySelector("h1"),{y:-20,opacity:0,duration:.4,ease:"power2.out",scrollTrigger:{trigger:c.value,start:"top 85%",toggleActions:"play none none none"}}),Qt.from(u,{y:10,opacity:0,scale:.95,duration:.5,stagger:.05,ease:"back.out(1.1)",scrollTrigger:{trigger:c.value,start:"top 85%",toggleActions:"play none none none"}})};e.value&&l(e),t.value&&l(t),e.value&&a(e,n,5e3),t.value&&a(t,r,5e3)})}),(l,c)=>(Lt(),Ut("section",Fy,[$e("div",{class:"skill-wrapper",ref_key:"webSkills",ref:e},[c[0]||(c[0]=$e("h1",null,"Web Developer",-1)),$e("div",Ny,[(Lt(!0),Ut(yn,null,zo(n.value,(u,f)=>(Lt(),Ut("div",{class:"skill-item",key:f},[$e("img",{src:u.logo,alt:u.name,loading:"lazy"},null,8,Oy),$e("p",null,To(u.name),1)]))),128))])],512),$e("div",{class:"skill-wrapper",ref_key:"creativeSkills",ref:t},[c[1]||(c[1]=$e("h1",null,"Design & Creative Tools",-1)),$e("div",ky,[(Lt(!0),Ut(yn,null,zo(r.value,(u,f)=>(Lt(),Ut("div",{class:"skill-item",key:f},[$e("img",{src:u.logo,alt:u.name,loading:"lazy"},null,8,By),$e("p",null,To(u.name),1)]))),128))])],512)]))}},Vy="/assets/2-C63z_wXN.jpg",Hy="/assets/3-CiytTz2C.png",Gy="/assets/4-tRWgu72C.png",Wy="/assets/5-B0jMog8d.jpg",Xy="/assets/6-B8kFe6SM.png",qy="/assets/7-BfrJzdMg.png",Yy="/assets/8-BDspBybI.jpg",$y={class:"task-group-wrapper"},jy={class:"task-group-container row row-top"},Ky={key:0,class:"desain"},Zy=["src","alt"],Jy={class:"task-group-container row row-bottom"},Qy={key:0,class:"desain"},eb=["src","alt"],tb={__name:"Project",setup(i){Qt.registerPlugin(nt);const e=[{title:"Desain Poster",image:Xy},{title:"Desain Vector",image:Vy},{title:"Desain WPAP",image:Hy},{title:"Desain Vector",image:Gy},{title:"Desain Logo",image:Wy},{title:"Desain Logo",image:qy},{title:"Desain Logo",image:Yy}],t=un(null);return cs(()=>{Bo(()=>{const n=t.value.querySelectorAll(".row-top .task-card"),r=t.value.querySelectorAll(".row-bottom .task-card");Qt.set(n,{opacity:0,y:150,rotationX:-60,transformOrigin:"center bottom"}),Qt.set(r,{opacity:0,y:150,rotationX:60,transformOrigin:"center top"}),Qt.set(".gallery-title",{opacity:0,y:-50,scale:.8}),Qt.timeline({scrollTrigger:{trigger:t.value,start:"top center",end:"bottom center",toggleActions:"play reverse play reverse"}}).to(n,{opacity:1,y:0,rotationX:0,duration:1,ease:"back.out(1.7)",stagger:.15}).to(r,{opacity:1,y:0,rotationX:0,duration:1,ease:"back.out(1.7)",stagger:.15},"-=0.5").to(".gallery-title",{opacity:1,y:0,scale:1,duration:1,ease:"power3.out"},"-=0.5")})}),(n,r)=>(Lt(),Ut("section",{class:"experience gallery-section",id:"gallery",ref_key:"gallerySection",ref:t},[$e("div",$y,[r[0]||(r[0]=$e("h2",{class:"gallery-title"},"Gallery",-1)),$e("div",jy,[(Lt(!0),Ut(yn,null,zo(e.slice(0,4),s=>(Lt(),Ut("div",{class:"task-card",key:s.title},[s.image?(Lt(),Ut("div",Ky,[$e("img",{src:s.image,alt:s.title,loading:"lazy"},null,8,Zy)])):Pc("",!0)]))),128))]),$e("div",Jy,[(Lt(!0),Ut(yn,null,zo(e.slice(4),s=>(Lt(),Ut("div",{class:"task-card",key:s.title},[s.image?(Lt(),Ut("div",Qy,[$e("img",{src:s.image,alt:s.title,loading:"lazy"},null,8,eb)])):Pc("",!0)]))),128))])])],512))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="179",nb=0,nm=1,ib=2,P0=1,rb=2,pr=3,os=0,Zn=1,Mr=2,Zr=0,Fo=1,ih=2,im=3,rm=4,sb=5,Cs=100,ob=101,ab=102,lb=103,cb=104,ub=200,fb=201,hb=202,db=203,rh=204,sh=205,pb=206,mb=207,_b=208,gb=209,vb=210,xb=211,Sb=212,Mb=213,yb=214,oh=0,ah=1,lh=2,jo=3,ch=4,uh=5,fh=6,hh=7,kd=0,bb=1,Eb=2,Jr=0,Tb=1,Ab=2,wb=3,Cb=4,Rb=5,Pb=6,Db=7,D0=300,Ko=301,Zo=302,dh=303,ph=304,cu=306,mh=1e3,Ls=1001,_h=1002,Bi=1003,Lb=1004,Ul=1005,Ki=1006,zu=1007,Is=1008,sr=1009,L0=1010,I0=1011,rl=1012,Bd=1013,qs=1014,br=1015,dl=1016,zd=1017,Vd=1018,sl=1020,U0=35902,F0=1021,N0=1022,Oi=1023,ol=1026,al=1027,O0=1028,Hd=1029,k0=1030,Gd=1031,Wd=1033,xc=33776,Sc=33777,Mc=33778,yc=33779,gh=35840,vh=35841,xh=35842,Sh=35843,Mh=36196,yh=37492,bh=37496,Eh=37808,Th=37809,Ah=37810,wh=37811,Ch=37812,Rh=37813,Ph=37814,Dh=37815,Lh=37816,Ih=37817,Uh=37818,Fh=37819,Nh=37820,Oh=37821,bc=36492,kh=36494,Bh=36495,B0=36283,zh=36284,Vh=36285,Hh=36286,Ib=3200,Ub=3201,z0=0,Fb=1,Vr="",yi="srgb",Jo="srgb-linear",Xc="linear",Mt="srgb",to=7680,sm=519,Nb=512,Ob=513,kb=514,V0=515,Bb=516,zb=517,Vb=518,Hb=519,om=35044,am="300 es",Zi=2e3,qc=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Gh=180/Math.PI;function pl(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Gb(i,e){return(i%e+e)%e}function Hu(i,e,t){return(1-t)*i+t*e}function fa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ml{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),R=Math.atan2(C,p*E);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*E;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new ee,lm=new ml;class et{constructor(e,t,n,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],E=r[1],b=r[4],v=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*_+a*E+l*C,s[3]=o*m+a*b+l*R,s[6]=o*p+a*v+l*w,s[1]=c*_+u*E+f*C,s[4]=c*m+u*b+f*R,s[7]=c*p+u*v+f*w,s[2]=h*_+d*E+g*C,s[5]=h*m+d*b+g*R,s[8]=h*p+d*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new et;function H0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wb(){const i=Yc("canvas");return i.style.display="block",i}const cm={};function No(i){i in cm||(cm[i]=!0,console.warn(i))}function Xb(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const um=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qb(){const i={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Mt&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=Oo(r.r),r.g=Oo(r.g),r.b=Oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vr?Xc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jo]:{primaries:e,whitePoint:n,transfer:Xc,toXYZ:um,fromXYZ:fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:um,fromXYZ:fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),i}const mt=qb();function Tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let no;class Yb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{no===void 0&&(no=Yc("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=no}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tr(t[n]/255)*255):t[n]=Tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $b=0;class Xd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$b++}),this.uuid=pl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jb=0;const qu=new ee;class Vn extends ea{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,n=Ls,r=Ls,s=Ki,o=Is,a=Oi,l=sr,c=Vn.DEFAULT_ANISOTROPY,u=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=pl(),this.name="",this.source=new Xd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case Ls:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case Ls:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=D0;Vn.DEFAULT_ANISOTROPY=1;class Ht{constructor(e=0,t=0,n=0,r=1){Ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(d+1)/2,C=(p+1)/2,R=(u+h)/4,w=(f+_)/4,I=(g+m)/4;return b>v&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=w/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=I/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kb extends ea{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Vn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ys extends Kb{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class G0 extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zb extends Vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _l{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fl.copy(n.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Nl.subVectors(this.max,ha),io.subVectors(e.a,ha),ro.subVectors(e.b,ha),so.subVectors(e.c,ha),Lr.subVectors(ro,io),Ir.subVectors(so,ro),_s.subVectors(io,so);let t=[0,-Lr.z,Lr.y,0,-Ir.z,Ir.y,0,-_s.z,_s.y,Lr.z,0,-Lr.x,Ir.z,0,-Ir.x,_s.z,0,-_s.x,-Lr.y,Lr.x,0,-Ir.y,Ir.x,0,-_s.y,_s.x,0];return!Yu(t,io,ro,so,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,io,ro,so,Nl))?!1:(Ol.crossVectors(Lr,Ir),t=[Ol.x,Ol.y,Ol.z],Yu(t,io,ro,so,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Li=new ee,Fl=new _l,io=new ee,ro=new ee,so=new ee,Lr=new ee,Ir=new ee,_s=new ee,ha=new ee,Nl=new ee,Ol=new ee,gs=new ee;function Yu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gs.fromArray(i,s);const a=r.x*Math.abs(gs.x)+r.y*Math.abs(gs.y)+r.z*Math.abs(gs.z),l=e.dot(gs),c=t.dot(gs),u=n.dot(gs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Jb=new _l,da=new ee,$u=new ee;class uu{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jb.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(da,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add($u)),this.expandByPoint(da.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ur=new ee,ju=new ee,kl=new ee,Ur=new ee,Ku=new ee,Bl=new ee,Zu=new ee;class W0{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ju.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(ju);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=Ur.dot(this.direction),l=-Ur.dot(kl),c=Ur.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ju).addScaledVector(kl,h),d}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const n=ur.dot(this.direction),r=ur.dot(ur)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,r,s){Ku.subVectors(t,e),Bl.subVectors(n,e),Zu.crossVectors(Ku,Bl);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ur.subVectors(this.origin,e);const l=a*this.direction.dot(Bl.crossVectors(Ur,Bl));if(l<0)return null;const c=a*this.direction.dot(Ku.cross(Ur));if(c<0||l+c>o)return null;const u=-a*Ur.dot(Zu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qb,e,eE)}lookAt(e,t,n){const r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Fr.crossVectors(n,ni),Fr.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Fr.crossVectors(n,ni)),Fr.normalize(),zl.crossVectors(ni,Fr),r[0]=Fr.x,r[4]=zl.x,r[8]=ni.x,r[1]=Fr.y,r[5]=zl.y,r[9]=ni.y,r[2]=Fr.z,r[6]=zl.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],b=n[7],v=n[11],C=n[15],R=r[0],w=r[4],I=r[8],M=r[12],y=r[1],L=r[5],O=r[9],G=r[13],$=r[2],te=r[6],W=r[10],H=r[14],B=r[3],le=r[7],U=r[11],me=r[15];return s[0]=o*R+a*y+l*$+c*B,s[4]=o*w+a*L+l*te+c*le,s[8]=o*I+a*O+l*W+c*U,s[12]=o*M+a*G+l*H+c*me,s[1]=u*R+f*y+h*$+d*B,s[5]=u*w+f*L+h*te+d*le,s[9]=u*I+f*O+h*W+d*U,s[13]=u*M+f*G+h*H+d*me,s[2]=g*R+_*y+m*$+p*B,s[6]=g*w+_*L+m*te+p*le,s[10]=g*I+_*O+m*W+p*U,s[14]=g*M+_*G+m*H+p*me,s[3]=E*R+b*y+v*$+C*B,s[7]=E*w+b*L+v*te+C*le,s[11]=E*I+b*O+v*W+C*U,s[15]=E*M+b*G+v*H+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,b=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*E+n*b+r*v+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*w,e[4]=b*w,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=v*w,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*w,e[12]=C*w,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,E=l*c,b=l*u,v=l*f,C=n.x,R=n.y,w=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+v)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(d-v)*R,r[5]=(1-(h+p))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+b)*w,r[9]=(m-E)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ii.copy(this);const c=1/s,u=1/o,f=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,t.setFromRotationMatrix(Ii),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Zi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Zi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===qc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oo=new ee,Ii=new Wt,Qb=new ee(0,0,0),eE=new ee(1,1,1),Fr=new ee,zl=new ee,ni=new ee,hm=new Wt,dm=new ml;class or{constructor(e=0,t=0,n=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class X0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tE=0;const pm=new ee,ao=new ml,fr=new Wt,Vl=new ee,pa=new ee,nE=new ee,iE=new ml,mm=new ee(1,0,0),_m=new ee(0,1,0),gm=new ee(0,0,1),vm={type:"added"},rE={type:"removed"},lo={type:"childadded",child:null},Ju={type:"childremoved",child:null};class _n extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tE++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new ee,t=new or,n=new ml,r=new ee(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new et}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(mm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(gm,e)}translateOnAxis(e,t){return pm.copy(e).applyQuaternion(this.quaternion),this.position.add(pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vl.copy(e):Vl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(pa,Vl,this.up):fr.lookAt(Vl,pa,this.up),this.quaternion.setFromRotationMatrix(fr),r&&(fr.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(fr),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vm),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rE),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vm),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,nE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,iE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}_n.DEFAULT_UP=new ee(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ee,hr=new ee,Qu=new ee,dr=new ee,co=new ee,uo=new ee,xm=new ee,ef=new ee,tf=new ee,nf=new ee,rf=new Ht,sf=new Ht,of=new Ht;class Ni{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ui.subVectors(e,t),r.cross(Ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ui.subVectors(r,t),hr.subVectors(n,t),Qu.subVectors(e,t);const o=Ui.dot(Ui),a=Ui.dot(hr),l=Ui.dot(Qu),c=hr.dot(hr),u=hr.dot(Qu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,n),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,t,n,r){return Ui.subVectors(n,t),hr.subVectors(e,t),Ui.cross(hr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ui.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,n),uo.subVectors(s,n),ef.subVectors(e,n);const l=co.dot(ef),c=uo.dot(ef);if(l<=0&&c<=0)return t.copy(n);tf.subVectors(e,r);const u=co.dot(tf),f=uo.dot(tf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(co,o);nf.subVectors(e,s);const d=co.dot(nf),g=uo.dot(nf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(uo,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return xm.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(xm,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function af(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=Gb(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=yi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const n=q0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return mt.workingToColorSpace(vn.copy(this),e),Math.round(ft(vn.r*255,0,255))*65536+Math.round(ft(vn.g*255,0,255))*256+Math.round(ft(vn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(vn.copy(this),t);const n=vn.r,r=vn.g,s=vn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=yi){mt.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,r=vn.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Nr),this.setHSL(Nr.h+e,Nr.s+t,Nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Nr),e.getHSL(Hl);const n=Hu(Nr.h,Hl.h,t),r=Hu(Nr.s,Hl.s,t),s=Hu(Nr.l,Hl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new ut;ut.NAMES=q0;let sE=0;class ta extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=Fo,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=sh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rh&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Y0 extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ee,Gl=new _t;let oE=0;class Di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=om,this.updateRanges=[],this.gpuType=br,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class $0 extends Di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class j0 extends Di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nr extends Di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let aE=0;const Si=new Wt,lf=new _n,fo=new ee,ii=new _l,ma=new _l,an=new ee;class ar extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H0(e)?j0:$0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nr(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ma.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(ii.min,ma.min),ii.expandByPoint(an),an.addVectors(ii.max,ma.max),ii.expandByPoint(an)):(ii.expandByPoint(ma.min),ii.expandByPoint(ma.max))}ii.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),an.add(fo)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new ee,l[I]=new ee;const c=new ee,u=new ee,f=new ee,h=new _t,d=new _t,g=new _t,_=new ee,m=new ee;function p(I,M,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,y),h.fromBufferAttribute(s,I),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[I].add(_),a[M].add(_),a[y].add(_),l[I].add(m),l[M].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,M=E.length;I<M;++I){const y=E[I],L=y.start,O=y.count;for(let G=L,$=L+O;G<$;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new ee,v=new ee,C=new ee,R=new ee;function w(I){C.fromBufferAttribute(r,I),R.copy(C);const M=a[I];b.copy(M),b.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(R,M);const L=v.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,M=E.length;I<M;++I){const y=E[I],L=y.start,O=y.count;for(let G=L,$=L+O;G<$;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new ee,s=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Di(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sm=new Wt,vs=new W0,Wl=new uu,Mm=new ee,Xl=new ee,ql=new ee,Yl=new ee,cf=new ee,$l=new ee,ym=new ee,jl=new ee;class Ji extends _n{constructor(e=new ar,t=new Y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cf.fromBufferAttribute(f,e),o?$l.addScaledVector(cf,u):$l.addScaledVector(cf.sub(t),u))}t.add($l)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),vs.copy(e.ray).recast(e.near),!(Wl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Wl,Mm)===null||vs.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(s).invert(),vs.copy(e.ray).applyMatrix4(Sm),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,C=b;v<C;v+=3){const R=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);r=Kl(this,p,e,n,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);r=Kl(this,o,e,n,c,u,f,E,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,C=b;v<C;v+=3){const R=v,w=v+1,I=v+2;r=Kl(this,p,e,n,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const E=m,b=m+1,v=m+2;r=Kl(this,o,e,n,c,u,f,E,b,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function lE(i,e,t,n,r,s,o,a){let l;if(e.side===Zn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===os,a),l===null)return null;jl.copy(a),jl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jl);return c<t.near||c>t.far?null:{distance:c,point:jl.clone(),object:i}}function Kl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xl),i.getVertexPosition(l,ql),i.getVertexPosition(c,Yl);const u=lE(i,e,t,n,Xl,ql,Yl,ym);if(u){const f=new ee;Ni.getBarycoord(ym,Xl,ql,Yl,f),r&&(u.uv=Ni.getInterpolatedAttribute(r,a,l,c,f,new _t)),s&&(u.uv1=Ni.getInterpolatedAttribute(s,a,l,c,f,new _t)),o&&(u.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new ee),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ee,materialIndex:0};Ni.getNormal(Xl,ql,Yl,h.normal),u.face=h,u.barycoord=f}return u}class gl extends ar{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new nr(c,3)),this.setAttribute("normal",new nr(u,3)),this.setAttribute("uv",new nr(f,2));function g(_,m,p,E,b,v,C,R,w,I,M){const y=v/w,L=C/I,O=v/2,G=C/2,$=R/2,te=w+1,W=I+1;let H=0,B=0;const le=new ee;for(let U=0;U<W;U++){const me=U*L-G;for(let Le=0;Le<te;Le++){const Ke=Le*y-O;le[_]=Ke*E,le[m]=me*b,le[p]=$,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(Le/w),f.push(1-U/I),H+=1}}for(let U=0;U<I;U++)for(let me=0;me<w;me++){const Le=h+me+te*U,Ke=h+me+te*(U+1),Ve=h+(me+1)+te*(U+1),ne=h+(me+1)+te*U;l.push(Le,Ke,ne),l.push(Ke,Ve,ne),B+=6}a.addGroup(d,B,M),d+=B,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=Qo(i[t]);for(const r in n)e[r]=n[r]}return e}function cE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function K0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const uE={clone:Qo,merge:In};var fE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class as extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fE,this.fragmentShader=hE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=cE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Z0 extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Or=new ee,bm=new _t,Em=new _t;class ci extends Z0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,bm,Em),t.subVectors(Em,bm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,po=1;class dE extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ci(ho,po,e,t);r.layers=this.layers,this.add(r);const s=new ci(ho,po,e,t);s.layers=this.layers,this.add(s);const o=new ci(ho,po,e,t);o.layers=this.layers,this.add(o);const a=new ci(ho,po,e,t);a.layers=this.layers,this.add(a);const l=new ci(ho,po,e,t);l.layers=this.layers,this.add(l);const c=new ci(ho,po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class J0 extends Vn{constructor(e=[],t=Ko,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pE extends Ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new J0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gl(5,5,5),s=new as({name:"CubemapFromEquirect",uniforms:Qo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Zr});s.uniforms.tEquirect.value=t;const o=new Ji(r,s),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=Ki),new dE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Zl extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mE={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Q0 extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ff=new ee,_E=new ee,gE=new et;class As{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ff.subVectors(n,t).cross(_E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ff),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gE.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new uu,vE=new _t(.5,.5),Jl=new ee;class qd{constructor(e=new As,t=new As,n=new As,r=new As,s=new As,o=new As){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],b=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,d-u,p-g,C-E).normalize(),r[1].setComponents(c+o,d+u,p+g,C+E).normalize(),r[2].setComponents(c+a,d+f,p+_,C+b).normalize(),r[3].setComponents(c-a,d-f,p-_,C-b).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,C-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,C-v).normalize(),t===Zi)r[5].setComponents(c+l,d+h,p+m,C+v).normalize();else if(t===qc)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=vE.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Jl.x=r.normal.x>0?e.max.x:e.min.x,Jl.y=r.normal.y>0?e.max.y:e.min.y,Jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ev extends ta{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tm=new Wt,Wh=new W0,Ql=new uu,ec=new ee;class xE extends _n{constructor(e=new ar,t=new ev){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Tm.copy(r).invert(),Wh.copy(e.ray).applyMatrix4(Tm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ec.fromBufferAttribute(f,m),Am(ec,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ec.fromBufferAttribute(f,g),Am(ec,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Am(i,e,t,n,r,s,o){const a=Wh.distanceSqToPoint(i);if(a<t){const l=new ee;Wh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tv extends Vn{constructor(e,t,n=qs,r,s,o,a=Bi,l=Bi,c,u=ol,f=1){if(u!==ol&&u!==al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fu extends ar{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*h-o;for(let b=0;b<c;b++){const v=b*f-s;g.push(v,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const b=E+c*p,v=E+c*(p+1),C=E+1+c*(p+1),R=E+1+c*p;d.push(b,v,R),d.push(v,C,R)}this.setIndex(d),this.setAttribute("position",new nr(g,3)),this.setAttribute("normal",new nr(_,3)),this.setAttribute("uv",new nr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yd extends ar{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new ee,h=new ee,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],b=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){const R=C/t;f.x=-e*Math.cos(r+R*s)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(r+R*s)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(R+v,1-b),E.push(c++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const b=u[p][E+1],v=u[p][E],C=u[p+1][E],R=u[p+1][E+1];(p!==0||o>0)&&d.push(b,v,R),(p!==n-1||l<Math.PI)&&d.push(v,C,R)}this.setIndex(d),this.setAttribute("position",new nr(g,3)),this.setAttribute("normal",new nr(_,3)),this.setAttribute("uv",new nr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class SE extends ta{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=z0,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ME extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yE extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nv extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hf=new Wt,wm=new ee,Cm=new ee;class bE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=sr,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qd,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(wm),Cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cm),t.updateMatrixWorld(),hf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iv extends Z0{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EE extends bE{constructor(){super(new iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class TE extends nv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new EE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rv extends nv{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class AE extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Rm(i,e,t,n){const r=wE(n);switch(t){case F0:return i*e;case O0:return i*e/r.components*r.byteLength;case Hd:return i*e/r.components*r.byteLength;case k0:return i*e*2/r.components*r.byteLength;case Gd:return i*e*2/r.components*r.byteLength;case N0:return i*e*3/r.components*r.byteLength;case Oi:return i*e*4/r.components*r.byteLength;case Wd:return i*e*4/r.components*r.byteLength;case xc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vh:case Sh:return Math.max(i,16)*Math.max(e,8)/4;case gh:case xh:return Math.max(i,8)*Math.max(e,8)/2;case Mh:case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bc:case kh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case B0:case zh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vh:case Hh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wE(i){switch(i){case sr:case L0:return{byteLength:1,components:1};case rl:case I0:case dl:return{byteLength:2,components:1};case zd:case Vd:return{byteLength:2,components:4};case qs:case Bd:case br:return{byteLength:4,components:1};case U0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sv(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function CE(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var RE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PE=`#ifdef USE_ALPHAHASH
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
#endif`,DE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FE=`#ifdef USE_AOMAP
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
#endif`,NE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OE=`#ifdef USE_BATCHING
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
#endif`,kE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HE=`#ifdef USE_IRIDESCENCE
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
#endif`,GE=`#ifdef USE_BUMPMAP
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JE=`#define PI 3.141592653589793
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
} // validated`,QE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eT=`vec3 transformedNormal = objectNormal;
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
#endif`,tT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_T=`#ifdef USE_GRADIENTMAP
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
}`,gT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ST=`uniform bool receiveShadow;
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
#endif`,MT=`#ifdef USE_ENVMAP
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
#endif`,yT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ET=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AT=`PhysicalMaterial material;
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
#endif`,wT=`struct PhysicalMaterial {
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
}`,CT=`
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
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
#endif`,PT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kT=`#if defined( USE_POINTS_UV )
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
#endif`,BT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
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
#endif`,XT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
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
#endif`,JT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
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
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dA=`float getShadowMask() {
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
}`,pA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mA=`#ifdef USE_SKINNING
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
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gA=`#ifdef USE_SKINNING
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
#endif`,vA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yA=`#ifdef USE_TRANSMISSION
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
#endif`,bA=`#ifdef USE_TRANSMISSION
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,FA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,NA=`#define DISTANCE
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
}`,OA=`#define DISTANCE
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
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zA=`uniform float scale;
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
}`,VA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 diffuse;
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
}`,WA=`#define LAMBERT
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
}`,XA=`#define LAMBERT
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
}`,qA=`#define MATCAP
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
}`,YA=`#define MATCAP
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
}`,$A=`#define NORMAL
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
}`,jA=`#define NORMAL
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
}`,KA=`#define PHONG
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
}`,ZA=`#define PHONG
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
}`,JA=`#define STANDARD
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
}`,QA=`#define STANDARD
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
}`,e1=`#define TOON
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
}`,t1=`#define TOON
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
}`,n1=`uniform float size;
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,s1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,a1=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:RE,alphahash_pars_fragment:PE,alphamap_fragment:DE,alphamap_pars_fragment:LE,alphatest_fragment:IE,alphatest_pars_fragment:UE,aomap_fragment:FE,aomap_pars_fragment:NE,batching_pars_vertex:OE,batching_vertex:kE,begin_vertex:BE,beginnormal_vertex:zE,bsdfs:VE,iridescence_fragment:HE,bumpmap_pars_fragment:GE,clipping_planes_fragment:WE,clipping_planes_pars_fragment:XE,clipping_planes_pars_vertex:qE,clipping_planes_vertex:YE,color_fragment:$E,color_pars_fragment:jE,color_pars_vertex:KE,color_vertex:ZE,common:JE,cube_uv_reflection_fragment:QE,defaultnormal_vertex:eT,displacementmap_pars_vertex:tT,displacementmap_vertex:nT,emissivemap_fragment:iT,emissivemap_pars_fragment:rT,colorspace_fragment:sT,colorspace_pars_fragment:oT,envmap_fragment:aT,envmap_common_pars_fragment:lT,envmap_pars_fragment:cT,envmap_pars_vertex:uT,envmap_physical_pars_fragment:MT,envmap_vertex:fT,fog_vertex:hT,fog_pars_vertex:dT,fog_fragment:pT,fog_pars_fragment:mT,gradientmap_pars_fragment:_T,lightmap_pars_fragment:gT,lights_lambert_fragment:vT,lights_lambert_pars_fragment:xT,lights_pars_begin:ST,lights_toon_fragment:yT,lights_toon_pars_fragment:bT,lights_phong_fragment:ET,lights_phong_pars_fragment:TT,lights_physical_fragment:AT,lights_physical_pars_fragment:wT,lights_fragment_begin:CT,lights_fragment_maps:RT,lights_fragment_end:PT,logdepthbuf_fragment:DT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:IT,logdepthbuf_vertex:UT,map_fragment:FT,map_pars_fragment:NT,map_particle_fragment:OT,map_particle_pars_fragment:kT,metalnessmap_fragment:BT,metalnessmap_pars_fragment:zT,morphinstance_vertex:VT,morphcolor_vertex:HT,morphnormal_vertex:GT,morphtarget_pars_vertex:WT,morphtarget_vertex:XT,normal_fragment_begin:qT,normal_fragment_maps:YT,normal_pars_fragment:$T,normal_pars_vertex:jT,normal_vertex:KT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:JT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:eA,iridescence_pars_fragment:tA,opaque_fragment:nA,packing:iA,premultiplied_alpha_fragment:rA,project_vertex:sA,dithering_fragment:oA,dithering_pars_fragment:aA,roughnessmap_fragment:lA,roughnessmap_pars_fragment:cA,shadowmap_pars_fragment:uA,shadowmap_pars_vertex:fA,shadowmap_vertex:hA,shadowmask_pars_fragment:dA,skinbase_vertex:pA,skinning_pars_vertex:mA,skinning_vertex:_A,skinnormal_vertex:gA,specularmap_fragment:vA,specularmap_pars_fragment:xA,tonemapping_fragment:SA,tonemapping_pars_fragment:MA,transmission_fragment:yA,transmission_pars_fragment:bA,uv_pars_fragment:EA,uv_pars_vertex:TA,uv_vertex:AA,worldpos_vertex:wA,background_vert:CA,background_frag:RA,backgroundCube_vert:PA,backgroundCube_frag:DA,cube_vert:LA,cube_frag:IA,depth_vert:UA,depth_frag:FA,distanceRGBA_vert:NA,distanceRGBA_frag:OA,equirect_vert:kA,equirect_frag:BA,linedashed_vert:zA,linedashed_frag:VA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:WA,meshlambert_frag:XA,meshmatcap_vert:qA,meshmatcap_frag:YA,meshnormal_vert:$A,meshnormal_frag:jA,meshphong_vert:KA,meshphong_frag:ZA,meshphysical_vert:JA,meshphysical_frag:QA,meshtoon_vert:e1,meshtoon_frag:t1,points_vert:n1,points_frag:i1,shadow_vert:r1,shadow_frag:s1,sprite_vert:o1,sprite_frag:a1},Re={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},qi={basic:{uniforms:In([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:In([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:In([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:In([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:In([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:In([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:In([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:In([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:In([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:In([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:In([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:In([Re.common,Re.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:In([Re.lights,Re.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};qi.physical={uniforms:In([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const tc={r:0,b:0,g:0},Ss=new or,l1=new Wt;function c1(i,e,t,n,r,s,o){const a=new ut(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function _(b){let v=!1;const C=g(b);C===null?p(a,l):C&&C.isColor&&(p(C,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===cu)?(u===void 0&&(u=new Ji(new gl(1,1,1),new as({name:"BackgroundCubeMaterial",uniforms:Qo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ss.copy(v.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(l1.makeRotationFromEuler(Ss)),u.material.toneMapped=mt.getTransfer(C.colorSpace)!==Mt,(f!==C||h!==C.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ji(new fu(2,2),new as({name:"BackgroundMaterial",uniforms:Qo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(C.colorSpace)!==Mt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(tc,K0(i)),n.buffers.color.setClear(tc.r,tc.g,tc.b,v,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,v=1){a.set(b),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m,dispose:E}}function u1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(y,L,O,G,$){let te=!1;const W=f(G,O,L);s!==W&&(s=W,c(s.object)),te=d(y,G,O,$),te&&g(y,G,O,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,v(y,L,O,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,L,O){const G=O.wireframe===!0;let $=n[y.id];$===void 0&&($={},n[y.id]=$);let te=$[L.id];te===void 0&&(te={},$[L.id]=te);let W=te[G];return W===void 0&&(W=h(l()),te[G]=W),W}function h(y){const L=[],O=[],G=[];for(let $=0;$<t;$++)L[$]=0,O[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,L,O,G){const $=s.attributes,te=L.attributes;let W=0;const H=O.getAttributes();for(const B in H)if(H[B].location>=0){const U=$[B];let me=te[B];if(me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),U===void 0||U.attribute!==me||me&&U.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(y,L,O,G){const $={},te=L.attributes;let W=0;const H=O.getAttributes();for(const B in H)if(H[B].location>=0){let U=te[B];U===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));const me={};me.attribute=U,U&&U.data&&(me.data=U.data),$[B]=me,W++}s.attributes=$,s.attributesNum=W,s.index=G}function _(){const y=s.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const O=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;O[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),$[y]!==L&&(i.vertexAttribDivisor(y,L),$[y]=L)}function E(){const y=s.newAttributes,L=s.enabledAttributes;for(let O=0,G=L.length;O<G;O++)L[O]!==y[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function b(y,L,O,G,$,te,W){W===!0?i.vertexAttribIPointer(y,L,O,$,te):i.vertexAttribPointer(y,L,O,G,$,te)}function v(y,L,O,G){_();const $=G.attributes,te=O.getAttributes(),W=L.defaultAttributeValues;for(const H in te){const B=te[H];if(B.location>=0){let le=$[H];if(le===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const U=le.normalized,me=le.itemSize,Le=e.get(le);if(Le===void 0)continue;const Ke=Le.buffer,Ve=Le.type,ne=Le.bytesPerElement,he=Ve===i.INT||Ve===i.UNSIGNED_INT||le.gpuType===Bd;if(le.isInterleavedBufferAttribute){const oe=le.data,Ee=oe.stride,Te=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)p(B.location+Pe,oe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)m(B.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Pe=0;Pe<B.locationSize;Pe++)b(B.location+Pe,me/B.locationSize,Ve,U,Ee*ne,(Te+me/B.locationSize*Pe)*ne,he)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)p(B.location+oe,le.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let oe=0;oe<B.locationSize;oe++)b(B.location+oe,me/B.locationSize,Ve,U,me*ne,me/B.locationSize*oe*ne,he)}}else if(W!==void 0){const U=W[H];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(B.location,U);break;case 3:i.vertexAttrib3fv(B.location,U);break;case 4:i.vertexAttrib4fv(B.location,U);break;default:i.vertexAttrib1fv(B.location,U)}}}}E()}function C(){I();for(const y in n){const L=n[y];for(const O in L){const G=L[O];for(const $ in G)u(G[$].object),delete G[$];delete L[O]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const G=L[O];for(const $ in G)u(G[$].object),delete G[$];delete L[O]}delete n[y.id]}function w(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const G=O[y.id];for(const $ in G)u(G[$].object),delete G[$];delete O[y.id]}}function I(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function f1(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Oi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===dl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==sr&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==br&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function d1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new As,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,b=E*4;let v=p.clippingState||null;l.value=v,v=u(g,h,b,d);for(let C=0;C!==b;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(f[b]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function p1(i){let e=new WeakMap;function t(o,a){return a===dh?o.mapping=Ko:a===ph&&(o.mapping=Zo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===dh||a===ph)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pE(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const yo=4,Pm=[.125,.215,.35,.446,.526,.582],Rs=20,df=new iv,Dm=new ut;let pf=null,mf=0,_f=0,gf=!1;const ws=(1+Math.sqrt(5))/2,mo=1/ws,Lm=[new ee(-ws,mo,0),new ee(ws,mo,0),new ee(-mo,0,ws),new ee(mo,0,ws),new ee(0,ws,-mo),new ee(0,ws,mo),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)],m1=new ee;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=m1}=s;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,_f),this._renderer.xr.enabled=gf,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:dl,format:Oi,colorSpace:Jo,depthBuffer:!1},r=Um(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Um(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_1(s)),this._blurMaterial=g1(s,e,t)}return r}_compileMaterial(e){const t=new Ji(this._lodPlanes[0],e);this._renderer.compile(t,df)}_sceneToCubeUV(e,t,n,r,s){const l=new ci(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Dm),f.toneMapping=Jr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new Y0({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),m=new Ji(new gl,_);let p=!1;const E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(Dm),p=!0);for(let b=0;b<6;b++){const v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;nc(r,v*C,b>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ji(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,df)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lm[(r-s-1)%Lm.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ji(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Rs-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Rs;m>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const p=[];let E=0;for(let w=0;w<Rs;++w){const I=w/_,M=Math.exp(-I*I/2);p.push(M),w===0?E+=M:w<m&&(E+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;const v=this._sizeLods[r],C=3*v*(r>b-yo?r-b+yo:0),R=4*(this._cubeSize-v);nc(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(f,df)}}function _1(i){const e=[],t=[],n=[];let r=i;const s=i-yo+1+Pm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-yo?l=Pm[o-i+yo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){const w=R%3*2/3-1,I=R>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];E.set(M,_*g*R),b.set(h,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const C=new ar;C.setAttribute("position",new Di(E,_)),C.setAttribute("uv",new Di(b,m)),C.setAttribute("faceIndex",new Di(v,p)),e.push(C),r>yo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Um(i,e,t){const n=new Ys(i,e,t);return n.texture.mapping=cu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function g1(i,e,t){const n=new Float32Array(Rs),r=new ee(0,1,0);return new as({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Fm(){return new as({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function Nm(){return new as({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function v1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dh||l===ph,u=l===Ko||l===Zo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Im(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Im(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function x1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&No("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function S1(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const E=d.array;_=d.version;for(let b=0,v=E.length;b<v;b+=3){const C=E[b+0],R=E[b+1],w=E[b+2];h.push(C,R,R,w,w,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){const C=b+0,R=b+1,w=b+2;h.push(C,R,R,w,w,C)}}else return;const m=new(H0(h)?j0:$0)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function M1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function y1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function b1(i,e,t){const n=new WeakMap,r=new Ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*f),I=new G0(w,C,R,f);I.type=br,I.needsUpdate=!0;const M=v*4;for(let L=0;L<f;L++){const O=p[L],G=E[L],$=b[L],te=C*R*4*L;for(let W=0;W<O.count;W++){const H=W*M;g===!0&&(r.fromBufferAttribute(O,W),w[te+H+0]=r.x,w[te+H+1]=r.y,w[te+H+2]=r.z,w[te+H+3]=0),_===!0&&(r.fromBufferAttribute(G,W),w[te+H+4]=r.x,w[te+H+5]=r.y,w[te+H+6]=r.z,w[te+H+7]=0),m===!0&&(r.fromBufferAttribute($,W),w[te+H+8]=r.x,w[te+H+9]=r.y,w[te+H+10]=r.z,w[te+H+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new _t(C,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function E1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ov=new Vn,Om=new tv(1,1),av=new G0,lv=new Zb,cv=new J0,km=[],Bm=[],zm=new Float32Array(16),Vm=new Float32Array(9),Hm=new Float32Array(4);function na(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=km[r];if(s===void 0&&(s=new Float32Array(r),km[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hu(i,e){let t=Bm[e];t===void 0&&(t=new Int32Array(e),Bm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function R1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Hm.set(n),i.uniformMatrix2fv(this.addr,!1,Hm),on(t,n)}}function P1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Vm.set(n),i.uniformMatrix3fv(this.addr,!1,Vm),on(t,n)}}function D1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;zm.set(n),i.uniformMatrix4fv(this.addr,!1,zm),on(t,n)}}function L1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function I1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function U1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function F1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function N1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function O1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function k1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function B1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function z1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Om.compareFunction=V0,s=Om):s=ov,t.setTexture2D(e||s,r)}function V1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||lv,r)}function H1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||cv,r)}function G1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||av,r)}function W1(i){switch(i){case 5126:return T1;case 35664:return A1;case 35665:return w1;case 35666:return C1;case 35674:return R1;case 35675:return P1;case 35676:return D1;case 5124:case 35670:return L1;case 35667:case 35671:return I1;case 35668:case 35672:return U1;case 35669:case 35673:return F1;case 5125:return N1;case 36294:return O1;case 36295:return k1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function X1(i,e){i.uniform1fv(this.addr,e)}function q1(i,e){const t=na(e,this.size,2);i.uniform2fv(this.addr,t)}function Y1(i,e){const t=na(e,this.size,3);i.uniform3fv(this.addr,t)}function $1(i,e){const t=na(e,this.size,4);i.uniform4fv(this.addr,t)}function j1(i,e){const t=na(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function K1(i,e){const t=na(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Z1(i,e){const t=na(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function J1(i,e){i.uniform1iv(this.addr,e)}function Q1(i,e){i.uniform2iv(this.addr,e)}function ew(i,e){i.uniform3iv(this.addr,e)}function tw(i,e){i.uniform4iv(this.addr,e)}function nw(i,e){i.uniform1uiv(this.addr,e)}function iw(i,e){i.uniform2uiv(this.addr,e)}function rw(i,e){i.uniform3uiv(this.addr,e)}function sw(i,e){i.uniform4uiv(this.addr,e)}function ow(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ov,s[o])}function aw(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||lv,s[o])}function lw(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||cv,s[o])}function cw(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||av,s[o])}function uw(i){switch(i){case 5126:return X1;case 35664:return q1;case 35665:return Y1;case 35666:return $1;case 35674:return j1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return Q1;case 35668:case 35672:return ew;case 35669:case 35673:return tw;case 5125:return nw;case 36294:return iw;case 36295:return rw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return cw}}class fw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=W1(t.type)}}class hw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uw(t.type)}}class dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Gm(i,e){i.seq.push(e),i.map[e.id]=e}function pw(i,e,t){const n=i.name,r=n.length;for(vf.lastIndex=0;;){const s=vf.exec(n),o=vf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gm(t,c===void 0?new fw(a,i,e):new hw(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new dw(a),Gm(t,f)),t=f}}}class Ec{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pw(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const mw=37297;let _w=0;function gw(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Xm=new et;function vw(i){mt._getMatrix(Xm,mt.workingColorSpace,i);const e=`mat3( ${Xm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Xc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+gw(i.getShaderSource(e),a)}else return s}function xw(i,e){const t=vw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sw(i,e){let t;switch(e){case Tb:t="Linear";break;case Ab:t="Reinhard";break;case wb:t="Cineon";break;case Cb:t="ACESFilmic";break;case Pb:t="AgX";break;case Db:t="Neutral";break;case Rb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new ee;function Mw(){mt.getLuminanceCoefficients(ic);const i=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function bw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ew(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ea(i){return i!==""}function Ym(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $m(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(i){return i.replace(Tw,ww)}const Aw=new Map;function ww(i,e){let t=rt[e];if(t===void 0){const n=Aw.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}const Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(i){return i.replace(Cw,Rw)}function Rw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Pw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pr&&(e="SHADOWMAP_TYPE_VSM"),e}function Dw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function Iw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case bb:e="ENVMAP_BLENDING_MIX";break;case Eb:e="ENVMAP_BLENDING_ADD";break}return e}function Uw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Pw(t),c=Dw(t),u=Lw(t),f=Iw(t),h=Uw(t),d=yw(t),g=bw(s),_=r.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[Km(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jr?"#define TONE_MAPPING":"",t.toneMapping!==Jr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Jr?Sw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,xw("linearToOutputTexel",t.outputColorSpace),Mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Xh(o),o=Ym(o,t),o=$m(o,t),a=Xh(a),a=Ym(a,t),a=$m(a,t),o=jm(o),a=jm(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+o,v=E+p+a,C=Wm(r,r.VERTEX_SHADER,b),R=Wm(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(C)||"",$=r.getShaderInfoLog(R)||"",te=O.trim(),W=G.trim(),H=$.trim();let B=!0,le=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,R);else{const U=qm(r,C,"vertex"),me=qm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+U+`
`+me)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(W===""||H==="")&&(le=!1);le&&(L.diagnostics={runnable:B,programLog:te,vertexShader:{log:W,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(R),I=new Ec(r,_),M=Ew(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,mw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_w++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let Nw=0;class Ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kw(e),t.set(e,n)),n}}class kw{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Bw(i,e,t,n,r,s,o){const a=new X0,l=new Ow,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,O,G){const $=O.fog,te=G.geometry,W=M.isMeshStandardMaterial?O.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),B=H&&H.mapping===cu?H.image.height:null,le=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const U=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,me=U!==void 0?U.length:0;let Le=0;te.morphAttributes.position!==void 0&&(Le=1),te.morphAttributes.normal!==void 0&&(Le=2),te.morphAttributes.color!==void 0&&(Le=3);let Ke,Ve,ne,he;if(le){const De=qi[le];Ke=De.vertexShader,Ve=De.fragmentShader}else Ke=M.vertexShader,Ve=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const oe=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Te=G.isInstancedMesh===!0,Pe=G.isBatchedMesh===!0,ot=!!M.map,D=!!M.matcap,x=!!H,V=!!M.aoMap,Y=!!M.lightMap,Z=!!M.bumpMap,P=!!M.normalMap,ae=!!M.displacementMap,j=!!M.emissiveMap,re=!!M.metalnessMap,ie=!!M.roughnessMap,ve=M.anisotropy>0,A=M.clearcoat>0,S=M.dispersion>0,N=M.iridescence>0,q=M.sheen>0,J=M.transmission>0,X=ve&&!!M.anisotropyMap,Se=A&&!!M.clearcoatMap,ue=A&&!!M.clearcoatNormalMap,Ae=A&&!!M.clearcoatRoughnessMap,ge=N&&!!M.iridescenceMap,de=N&&!!M.iridescenceThicknessMap,Me=q&&!!M.sheenColorMap,Ie=q&&!!M.sheenRoughnessMap,we=!!M.specularMap,xe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,F=J&&!!M.transmissionMap,pe=J&&!!M.thicknessMap,_e=!!M.gradientMap,Ce=!!M.alphaMap,fe=M.alphaTest>0,se=!!M.alphaHash,Fe=!!M.extensions;let We=Jr;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(We=i.toneMapping);const dt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Ve,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&G._colorsTexture!==null,instancing:Te,instancingColor:Te&&G.instanceColor!==null,instancingMorph:Te&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Jo,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:D,envMap:x,envMapMode:x&&H.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Y,bumpMap:Z,normalMap:P,displacementMap:h&&ae,emissiveMap:j,normalMapObjectSpace:P&&M.normalMapType===Fb,normalMapTangentSpace:P&&M.normalMapType===z0,metalnessMap:re,roughnessMap:ie,anisotropy:ve,anisotropyMap:X,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:N,iridescenceMap:ge,iridescenceThicknessMap:de,sheen:q,sheenColorMap:Me,sheenRoughnessMap:Ie,specularMap:we,specularColorMap:xe,specularIntensityMap:Xe,transmission:J,transmissionMap:F,thicknessMap:pe,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Fo&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:se,combine:M.combine,mapUv:ot&&_(M.map.channel),aoMapUv:V&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:P&&_(M.normalMap.channel),displacementMapUv:ae&&_(M.displacementMap.channel),emissiveMapUv:j&&_(M.emissiveMap.channel),metalnessMapUv:re&&_(M.metalnessMap.channel),roughnessMapUv:ie&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:pe&&_(M.thicknessMap.channel),alphaMapUv:Ce&&_(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(P||ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!te.attributes.uv&&(ot||Ce),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Mr,flipSided:M.side===Zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let L;if(y){const O=qi[y];L=uE.clone(O.uniforms)}else L=M.uniforms;return L}function C(M,y){let L;for(let O=0,G=u.length;O<G;O++){const $=u[O];if($.cacheKey===y){L=$,++L.usedTimes;break}}return L===void 0&&(L=new Fw(i,y,M,s),u.push(L)),L}function R(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:I}}function zw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Vw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Vw),n.length>1&&n.sort(h||Zm),r.length>1&&r.sort(h||Zm)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Hw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Jm,i.set(n,[o])):r>=s.length?(o=new Jm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new ut};break;case"SpotLight":t={position:new ee,direction:new ee,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function Ww(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Xw=0;function qw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yw(i){const e=new Gw,t=Ww(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new ee);const r=new ee,s=new Wt,o=new Wt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,b=0,v=0,C=0,R=0,w=0;c.sort(qw);for(let M=0,y=c.length;M<y;M++){const L=c[M],O=L.color,G=L.intensity,$=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*G,f+=O.g*G,h+=O.b*G;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],G);w++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=te,n.directionalShadowMatrix[d]=L.shadow.matrix,E++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(G),W.distance=$,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const H=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=H.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=te,v++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=L.shadow.matrix,b++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G),W.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=w,n.version=Xw++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(b.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Qm(i){const e=new Yw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $w(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Qm(i),e.set(r,[a])):s>=o.length?(a=new Qm(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`;function Zw(i,e,t){let n=new qd;const r=new _t,s=new _t,o=new Ht,a=new ME({depthPacking:Ub}),l=new yE,c={},u=t.maxTextureSize,f={[os]:Zn,[Zn]:os,[Mr]:Mr},h=new as({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:jw,fragmentShader:Kw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ar;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ji(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=P0;let p=this.type;this.render=function(R,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Zr),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==pr&&this.type===pr,$=p===pr&&this.type!==pr;for(let te=0,W=R.length;te<W;te++){const H=R[te],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const le=B.getFrameExtents();if(r.multiply(le),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,B.mapSize.y=s.y)),B.map===null||G===!0||$===!0){const me=this.type!==pr?{minFilter:Bi,magFilter:Bi}:{};B.map!==null&&B.map.dispose(),B.map=new Ys(r.x,r.y,me),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const U=B.getViewportCount();for(let me=0;me<U;me++){const Le=B.getViewport(me);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),O.viewport(o),B.updateMatrices(H,me),n=B.getFrustum(),v(w,I,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===pr&&E(B,I),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,L)};function E(R,w){const I=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ys(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,I,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,I,d,_,null)}function b(R,w,I,M){let y=null;const L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=y.uuid,G=w.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let te=$[G];te===void 0&&(te=y.clone(),$[G]=te,w.addEventListener("dispose",C)),y=te}if(y.visible=w.visible,y.wireframe=w.wireframe,M===pr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=I}return y}function v(R,w,I,M,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===pr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const G=e.update(R),$=R.material;if(Array.isArray($)){const te=G.groups;for(let W=0,H=te.length;W<H;W++){const B=te[W],le=$[B.materialIndex];if(le&&le.visible){const U=b(R,le,M,y);R.onBeforeShadow(i,R,w,I,G,U,B),i.renderBufferDirect(I,null,G,U,R,B),R.onAfterShadow(i,R,w,I,G,U,B)}}}else if($.visible){const te=b(R,$,M,y);R.onBeforeShadow(i,R,w,I,G,te,null),i.renderBufferDirect(I,null,G,te,R,null),R.onAfterShadow(i,R,w,I,G,te,null)}}const O=R.children;for(let G=0,$=O.length;G<$;G++)v(O[G],w,I,M,y)}function C(R){R.target.removeEventListener("dispose",C);for(const I in c){const M=c[I],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Jw={[oh]:ah,[lh]:fh,[ch]:hh,[jo]:uh,[ah]:oh,[fh]:lh,[hh]:ch,[uh]:jo};function Qw(i,e){function t(){let F=!1;const pe=new Ht;let _e=null;const Ce=new Ht(0,0,0,0);return{setMask:function(fe){_e!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){F=fe},setClear:function(fe,se,Fe,We,dt){dt===!0&&(fe*=We,se*=We,Fe*=We),pe.set(fe,se,Fe,We),Ce.equals(pe)===!1&&(i.clearColor(fe,se,Fe,We),Ce.copy(pe))},reset:function(){F=!1,_e=null,Ce.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,_e=null,Ce=null,fe=null;return{setReversed:function(se){if(pe!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const We=fe;fe=null,this.setClear(We)}},getReversed:function(){return pe},setTest:function(se){se?oe(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(se){_e!==se&&!F&&(i.depthMask(se),_e=se)},setFunc:function(se){if(pe&&(se=Jw[se]),Ce!==se){switch(se){case oh:i.depthFunc(i.NEVER);break;case ah:i.depthFunc(i.ALWAYS);break;case lh:i.depthFunc(i.LESS);break;case jo:i.depthFunc(i.LEQUAL);break;case ch:i.depthFunc(i.EQUAL);break;case uh:i.depthFunc(i.GEQUAL);break;case fh:i.depthFunc(i.GREATER);break;case hh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=se}},setLocked:function(se){F=se},setClear:function(se){fe!==se&&(pe&&(se=1-se),i.clearDepth(se),fe=se)},reset:function(){F=!1,_e=null,Ce=null,fe=null,pe=!1}}}function r(){let F=!1,pe=null,_e=null,Ce=null,fe=null,se=null,Fe=null,We=null,dt=null;return{setTest:function(De){F||(De?oe(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(De){pe!==De&&!F&&(i.stencilMask(De),pe=De)},setFunc:function(De,ke,Je){(_e!==De||Ce!==ke||fe!==Je)&&(i.stencilFunc(De,ke,Je),_e=De,Ce=ke,fe=Je)},setOp:function(De,ke,Je){(se!==De||Fe!==ke||We!==Je)&&(i.stencilOp(De,ke,Je),se=De,Fe=ke,We=Je)},setLocked:function(De){F=De},setClear:function(De){dt!==De&&(i.clearStencil(De),dt=De)},reset:function(){F=!1,pe=null,_e=null,Ce=null,fe=null,se=null,Fe=null,We=null,dt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,C=null,R=null,w=new ut(0,0,0),I=0,M=!1,y=null,L=null,O=null,G=null,$=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=H>=2);let le=null,U={};const me=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ke=new Ht().fromArray(me),Ve=new Ht().fromArray(Le);function ne(F,pe,_e,Ce){const fe=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<_e;Fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return se}const he={};he[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(jo),Z(!1),P(nm),oe(i.CULL_FACE),V(Zr);function oe(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Ee(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Te(F,pe){return f[F]!==pe?(i.bindFramebuffer(F,pe),f[F]=pe,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(F,pe){let _e=d,Ce=!1;if(F){_e=h.get(pe),_e===void 0&&(_e=[],h.set(pe,_e));const fe=F.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Fe=fe.length;se<Fe;se++)_e[se]=i.COLOR_ATTACHMENT0+se;_e.length=fe.length,Ce=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(_e)}function ot(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const D={[Cs]:i.FUNC_ADD,[ob]:i.FUNC_SUBTRACT,[ab]:i.FUNC_REVERSE_SUBTRACT};D[lb]=i.MIN,D[cb]=i.MAX;const x={[ub]:i.ZERO,[fb]:i.ONE,[hb]:i.SRC_COLOR,[rh]:i.SRC_ALPHA,[vb]:i.SRC_ALPHA_SATURATE,[_b]:i.DST_COLOR,[pb]:i.DST_ALPHA,[db]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[gb]:i.ONE_MINUS_DST_COLOR,[mb]:i.ONE_MINUS_DST_ALPHA,[xb]:i.CONSTANT_COLOR,[Sb]:i.ONE_MINUS_CONSTANT_COLOR,[Mb]:i.CONSTANT_ALPHA,[yb]:i.ONE_MINUS_CONSTANT_ALPHA};function V(F,pe,_e,Ce,fe,se,Fe,We,dt,De){if(F===Zr){_===!0&&(Ee(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),F!==sb){if(F!==m||De!==M){if((p!==Cs||v!==Cs)&&(i.blendEquation(i.FUNC_ADD),p=Cs,v=Cs),De)switch(F){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFunc(i.ONE,i.ONE);break;case im:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rm:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ih:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case im:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,b=null,C=null,R=null,w.set(0,0,0),I=0,m=F,M=De}return}fe=fe||pe,se=se||_e,Fe=Fe||Ce,(pe!==p||fe!==v)&&(i.blendEquationSeparate(D[pe],D[fe]),p=pe,v=fe),(_e!==E||Ce!==b||se!==C||Fe!==R)&&(i.blendFuncSeparate(x[_e],x[Ce],x[se],x[Fe]),E=_e,b=Ce,C=se,R=Fe),(We.equals(w)===!1||dt!==I)&&(i.blendColor(We.r,We.g,We.b,dt),w.copy(We),I=dt),m=F,M=!1}function Y(F,pe){F.side===Mr?Ee(i.CULL_FACE):oe(i.CULL_FACE);let _e=F.side===Zn;pe&&(_e=!_e),Z(_e),F.blending===Fo&&F.transparent===!1?V(Zr):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ce=F.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),j(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function P(F){F!==nb?(oe(i.CULL_FACE),F!==L&&(F===nm?i.cullFace(i.BACK):F===ib?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),L=F}function ae(F){F!==O&&(W&&i.lineWidth(F),O=F)}function j(F,pe,_e){F?(oe(i.POLYGON_OFFSET_FILL),(G!==pe||$!==_e)&&(i.polygonOffset(pe,_e),G=pe,$=_e)):Ee(i.POLYGON_OFFSET_FILL)}function re(F){F?oe(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function ie(F){F===void 0&&(F=i.TEXTURE0+te-1),le!==F&&(i.activeTexture(F),le=F)}function ve(F,pe,_e){_e===void 0&&(le===null?_e=i.TEXTURE0+te-1:_e=le);let Ce=U[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[_e]=Ce),(Ce.type!==F||Ce.texture!==pe)&&(le!==_e&&(i.activeTexture(_e),le=_e),i.bindTexture(F,pe||he[F]),Ce.type=F,Ce.texture=pe)}function A(){const F=U[le];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(F){Ke.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function Ie(F){Ve.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function we(F,pe){let _e=c.get(pe);_e===void 0&&(_e=new WeakMap,c.set(pe,_e));let Ce=_e.get(F);Ce===void 0&&(Ce=i.getUniformBlockIndex(pe,F.name),_e.set(F,Ce))}function xe(F,pe){const Ce=c.get(pe).get(F);l.get(pe)!==Ce&&(i.uniformBlockBinding(pe,Ce,F.__bindingPointIndex),l.set(pe,Ce))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,U={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,b=null,v=null,C=null,R=null,w=new ut(0,0,0),I=0,M=!1,y=null,L=null,O=null,G=null,$=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Ee,bindFramebuffer:Te,drawBuffers:Pe,useProgram:ot,setBlending:V,setMaterial:Y,setFlipSided:Z,setCullFace:P,setLineWidth:ae,setPolygonOffset:j,setScissorTest:re,activeTexture:ie,bindTexture:ve,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:ge,texImage3D:de,updateUBOMapping:we,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:Me,viewport:Ie,reset:Xe}}function eC(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Yc("canvas")}function _(A,S,N){let q=1;const J=ve(A);if((J.width>N||J.height>N)&&(q=N/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*J.width),Se=Math.floor(q*J.height);f===void 0&&(f=g(X,Se));const ue=S?g(X,Se):f;return ue.width=X,ue.height=Se,ue.getContext("2d").drawImage(A,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(A,S,N,q,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),S===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),S===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),S===i.RGBA){const Se=J?Xc:mt.getTransfer(q);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=Se===Mt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(A,S){let N;return A?S===null||S===qs||S===sl?N=i.DEPTH24_STENCIL8:S===br?N=i.DEPTH32F_STENCIL8:S===rl&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qs||S===sl?N=i.DEPTH_COMPONENT24:S===br?N=i.DEPTH_COMPONENT32F:S===rl&&(N=i.DEPTH_COMPONENT16),N}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bi&&A.minFilter!==Ki?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),I(S),S.isVideoTexture&&u.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),y(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,q=h.get(N);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(q).length===0&&h.delete(N)}n.remove(A)}function M(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const N=A.source,q=h.get(N);delete q[S.__cacheKey],o.memory.textures--}function y(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[q][J]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=A.textures;for(let q=0,J=N.length;q<J;q++){const X=n.get(N[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[q])}n.remove(A)}let L=0;function O(){L=0}function G(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function te(A,S){const N=n.get(A);if(A.isVideoTexture&&re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,A,S);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+S)}function W(A,S){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){he(N,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+S)}function H(A,S){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){he(N,A,S);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+S)}function B(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){oe(N,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+S)}const le={[mh]:i.REPEAT,[Ls]:i.CLAMP_TO_EDGE,[_h]:i.MIRRORED_REPEAT},U={[Bi]:i.NEAREST,[Lb]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Ki]:i.LINEAR,[zu]:i.LINEAR_MIPMAP_NEAREST,[Is]:i.LINEAR_MIPMAP_LINEAR},me={[Nb]:i.NEVER,[Hb]:i.ALWAYS,[Ob]:i.LESS,[V0]:i.LEQUAL,[kb]:i.EQUAL,[Vb]:i.GEQUAL,[Bb]:i.GREATER,[zb]:i.NOTEQUAL};function Le(A,S){if(S.type===br&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ki||S.magFilter===zu||S.magFilter===Ul||S.magFilter===Is||S.minFilter===Ki||S.minFilter===zu||S.minFilter===Ul||S.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,le[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,U[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,U[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bi||S.minFilter!==Ul&&S.minFilter!==Is||S.type===br&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const q=S.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const X=$(S);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;const Se=J[A.__cacheKey];Se!==void 0&&(J[A.__cacheKey].usedTimes--,Se.usedTimes===0&&M(S)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return N}function Ve(A,S,N){return Math.floor(Math.floor(A/N)/S)}function ne(A,S,N,q){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,N,q,S.data);else{X.sort((de,Me)=>de.start-Me.start);let Se=0;for(let de=1;de<X.length;de++){const Me=X[Se],Ie=X[de],we=Me.start+Me.count,xe=Ve(Ie.start,S.width,4),Xe=Ve(Me.start,S.width,4);Ie.start<=we+1&&xe===Xe&&Ve(Ie.start+Ie.count-1,S.width,4)===xe?Me.count=Math.max(Me.count,Ie.start+Ie.count-Me.start):(++Se,X[Se]=Ie)}X.length=Se+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let de=0,Me=X.length;de<Me;de++){const Ie=X[de],we=Math.floor(Ie.start/4),xe=Math.ceil(Ie.count/4),Xe=we%S.width,F=Math.floor(we/S.width),pe=xe,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Xe,F,pe,_e,N,q,S.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function he(A,S,N){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const J=Ke(A,S),X=S.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+N);const Se=n.get(X);if(X.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const ue=mt.getPrimaries(mt.workingColorSpace),Ae=S.colorSpace===Vr?null:mt.getPrimaries(S.colorSpace),ge=S.colorSpace===Vr||ue===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let de=_(S.image,!1,r.maxTextureSize);de=ie(S,de);const Me=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let we=b(S.internalFormat,Me,Ie,S.colorSpace,S.isVideoTexture);Le(q,S);let xe;const Xe=S.mipmaps,F=S.isVideoTexture!==!0,pe=Se.__version===void 0||J===!0,_e=X.dataReady,Ce=C(S,de);if(S.isDepthTexture)we=v(S.format===al,S.type),pe&&(F?t.texStorage2D(i.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,Me,Ie,null));else if(S.isDataTexture)if(Xe.length>0){F&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,Xe[0].width,Xe[0].height);for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,Me,Ie,xe.data);S.generateMipmaps=!1}else F?(pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,de.width,de.height),_e&&ne(S,de,Me,Ie)):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,Me,Ie,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,we,Xe[0].width,Xe[0].height,de.depth);for(let fe=0,se=Xe.length;fe<se;fe++)if(xe=Xe[fe],S.format!==Oi)if(Me!==null)if(F){if(_e)if(S.layerUpdates.size>0){const Fe=Rm(xe.width,xe.height,S.format,S.type);for(const We of S.layerUpdates){const dt=xe.data.subarray(We*Fe/xe.data.BYTES_PER_ELEMENT,(We+1)*Fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,We,xe.width,xe.height,1,Me,dt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,we,xe.width,xe.height,de.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,Ie,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,we,xe.width,xe.height,de.depth,0,Me,Ie,xe.data)}else{F&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,Xe[0].width,Xe[0].height);for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],S.format!==Oi?Me!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,Me,Ie,xe.data)}else if(S.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,we,de.width,de.height,de.depth),_e)if(S.layerUpdates.size>0){const fe=Rm(de.width,de.height,S.format,S.type);for(const se of S.layerUpdates){const Fe=de.data.subarray(se*fe/de.data.BYTES_PER_ELEMENT,(se+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,de.width,de.height,1,Me,Ie,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Ie,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,Me,Ie,de.data);else if(S.isData3DTexture)F?(pe&&t.texStorage3D(i.TEXTURE_3D,Ce,we,de.width,de.height,de.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Ie,de.data)):t.texImage3D(i.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,Me,Ie,de.data);else if(S.isFramebufferTexture){if(pe)if(F)t.texStorage2D(i.TEXTURE_2D,Ce,we,de.width,de.height);else{let fe=de.width,se=de.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,we,fe,se,0,Me,Ie,null),fe>>=1,se>>=1}}else if(Xe.length>0){if(F&&pe){const fe=ve(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Ce,we,fe.width,fe.height)}for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me,Ie,xe):t.texImage2D(i.TEXTURE_2D,fe,we,Me,Ie,xe);S.generateMipmaps=!1}else if(F){if(pe){const fe=ve(de);t.texStorage2D(i.TEXTURE_2D,Ce,we,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ie,de)}else t.texImage2D(i.TEXTURE_2D,0,we,Me,Ie,de);m(S)&&p(q),Se.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,N){if(S.image.length!==6)return;const q=Ke(A,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const X=n.get(J);if(J.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+N);const Se=mt.getPrimaries(mt.workingColorSpace),ue=S.colorSpace===Vr?null:mt.getPrimaries(S.colorSpace),Ae=S.colorSpace===Vr||Se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!ge&&!de?Me[se]=_(S.image[se],!0,r.maxCubemapSize):Me[se]=de?S.image[se].image:S.image[se],Me[se]=ie(S,Me[se]);const Ie=Me[0],we=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Xe=b(S.internalFormat,we,xe,S.colorSpace),F=S.isVideoTexture!==!0,pe=X.__version===void 0||q===!0,_e=J.dataReady;let Ce=C(S,Ie);Le(i.TEXTURE_CUBE_MAP,S);let fe;if(ge){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,Ie.width,Ie.height);for(let se=0;se<6;se++){fe=Me[se].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const We=fe[Fe];S.format!==Oi?we!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,We.width,We.height,we,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,We.width,We.height,we,xe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Xe,We.width,We.height,0,we,xe,We.data)}}}else{if(fe=S.mipmaps,F&&pe){fe.length>0&&Ce++;const se=ve(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(de){F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,we,xe,Me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Me[se].width,Me[se].height,0,we,xe,Me[se].data);for(let Fe=0;Fe<fe.length;Fe++){const dt=fe[Fe].image[se].image;F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,dt.width,dt.height,we,xe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Xe,dt.width,dt.height,0,we,xe,dt.data)}}else{F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,xe,Me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,we,xe,Me[se]);for(let Fe=0;Fe<fe.length;Fe++){const We=fe[Fe];F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,we,xe,We.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Xe,we,xe,We.image[se])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ee(A,S,N,q,J,X){const Se=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),Ae=b(N.internalFormat,Se,ue,N.colorSpace),ge=n.get(S),de=n.get(N);if(de.__renderTarget=S,!ge.__hasExternalTextures){const Me=Math.max(1,S.width>>X),Ie=Math.max(1,S.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Ae,Me,Ie,S.depth,0,Se,ue,null):t.texImage2D(J,X,Ae,Me,Ie,0,Se,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,de.__webglTexture,0,ae(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,de.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(A,S,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=v(S.stencilBuffer,J),Se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=ae(S);j(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,S.width,S.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const q=S.textures;for(let J=0;J<q.length;J++){const X=q[J],Se=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),Ae=b(X.internalFormat,Se,ue,X.colorSpace),ge=ae(S);N&&j(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Ae,S.width,S.height):j(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te(S.depthTexture,0);const J=q.__webglTexture,X=ae(S);if(S.depthTexture.format===ol)j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===al)j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ot(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Pe(S.__webglFramebuffer[0],A):Pe(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(A,S,N){const q=n.get(A);S!==void 0&&Ee(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ot(A)}function x(A){const S=A.texture,N=n.get(A),q=n.get(S);A.addEventListener("dispose",w);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)N.__webglFramebuffer[ue][Ae]=i.createFramebuffer()}else N.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)N.__webglFramebuffer[ue]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ue=0,Ae=J.length;ue<Ae;ue++){const ge=n.get(J[ue]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&j(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const Ae=J[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const ge=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),Me=b(Ae.internalFormat,ge,de,Ae.colorSpace,A.isXRRenderTarget===!0),Ie=ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(N.__webglFramebuffer[ue][Ae],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else Ee(N.__webglFramebuffer[ue],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,Ae=J.length;ue<Ae;ue++){const ge=J[ue],de=n.get(ge);let Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,de.__webglTexture),Le(Me,ge),Ee(N.__webglFramebuffer,A,ge,i.COLOR_ATTACHMENT0+ue,Me,0),m(ge)&&p(Me)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,q.__webglTexture),Le(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)Ee(N.__webglFramebuffer[Ae],A,S,i.COLOR_ATTACHMENT0,ue,Ae);else Ee(N.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}A.depthBuffer&&ot(A)}function V(A){const S=A.textures;for(let N=0,q=S.length;N<q;N++){const J=S[N];if(m(J)){const X=E(A),Se=n.get(J).__webglTexture;t.bindTexture(X,Se),p(X),t.unbindTexture()}}}const Y=[],Z=[];function P(A){if(A.samples>0){if(j(A)===!1){const S=A.textures,N=A.width,q=A.height;let J=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ue=S.length>1;if(ue)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const de=n.get(S[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,J,i.NEAREST),l===!0&&(Y.length=0,Z.length=0,Y.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Y.push(X),Z.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const de=n.get(S[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ae(A){return Math.min(r.maxSamples,A.samples)}function j(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ie(A,S){const N=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Jo&&N!==Vr&&(mt.getTransfer(N)===Mt?(q!==Oi||J!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=te,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=D,this.setupRenderTarget=x,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=j}function tC(i,e){function t(n,r=Vr){let s;const o=mt.getTransfer(r);if(n===sr)return i.UNSIGNED_BYTE;if(n===zd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===U0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===L0)return i.BYTE;if(n===I0)return i.SHORT;if(n===rl)return i.UNSIGNED_SHORT;if(n===Bd)return i.INT;if(n===qs)return i.UNSIGNED_INT;if(n===br)return i.FLOAT;if(n===dl)return i.HALF_FLOAT;if(n===F0)return i.ALPHA;if(n===N0)return i.RGB;if(n===Oi)return i.RGBA;if(n===ol)return i.DEPTH_COMPONENT;if(n===al)return i.DEPTH_STENCIL;if(n===O0)return i.RED;if(n===Hd)return i.RED_INTEGER;if(n===k0)return i.RG;if(n===Gd)return i.RG_INTEGER;if(n===Wd)return i.RGBA_INTEGER;if(n===xc||n===Sc||n===Mc||n===yc)if(o===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gh||n===vh||n===xh||n===Sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===yh||n===bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mh||n===yh)return o===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eh||n===Th||n===Ah||n===wh||n===Ch||n===Rh||n===Ph||n===Dh||n===Lh||n===Ih||n===Uh||n===Fh||n===Nh||n===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Th)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ah)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ph)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ih)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===kh||n===Bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===bc)return o===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===B0||n===zh||n===Vh||n===Hh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class uv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new as({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ji(new fu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends ea{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new rC,m={},p=t.getContextAttributes();let E=null,b=null;const v=[],C=[],R=new _t;let w=null;const I=new ci;I.viewport=new Ht;const M=new ci;M.viewport=new Ht;const y=[I,M],L=new AE;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=v[ne];return he===void 0&&(he=new uf,v[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=v[ne];return he===void 0&&(he=new uf,v[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=v[ne];return he===void 0&&(he=new uf,v[ne]=he),he.getHandSpace()};function $(ne){const he=C.indexOf(ne.inputSource);if(he===-1)return;const oe=v[he];oe!==void 0&&(oe.update(ne.inputSource,ne.frame,c||o),oe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",W);for(let ne=0;ne<v.length;ne++){const he=C[ne];he!==null&&(C[ne]=null,v[ne].disconnect(he))}O=null,G=null,_.reset();for(const ne in m)delete m[ne];e.setRenderTarget(E),d=null,h=null,f=null,r=null,b=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",te),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ee=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?al:ol,Ee=p.stencil?sl:qs);const Pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Ys(h.textureWidth,h.textureHeight,{format:Oi,type:sr,depthTexture:new tv(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Ys(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(ne){for(let he=0;he<ne.removed.length;he++){const oe=ne.removed[he],Ee=C.indexOf(oe);Ee>=0&&(C[Ee]=null,v[Ee].disconnect(oe))}for(let he=0;he<ne.added.length;he++){const oe=ne.added[he];let Ee=C.indexOf(oe);if(Ee===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=C.length){C.push(oe),Ee=Pe;break}else if(C[Pe]===null){C[Pe]=oe,Ee=Pe;break}if(Ee===-1)break}const Te=v[Ee];Te&&Te.connect(oe)}}const H=new ee,B=new ee;function le(ne,he,oe){H.setFromMatrixPosition(he.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const Ee=H.distanceTo(B),Te=he.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,ot=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),x=(Te[9]+1)/Te[5],V=(Te[9]-1)/Te[5],Y=(Te[8]-1)/Te[0],Z=(Pe[8]+1)/Pe[0],P=ot*Y,ae=ot*Z,j=Ee/(-Y+Z),re=j*-Y;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(j),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Te[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ie=ot+j,ve=D+j,A=P-re,S=ae+(Ee-re),N=x*D/ve*ie,q=V*D/ve*ie;ne.projectionMatrix.makePerspective(A,S,N,q,ie,ve),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let he=ne.near,oe=ne.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),L.near=M.near=I.near=he,L.far=M.far=I.far=oe,(O!==L.near||G!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,G=L.far),L.layers.mask=ne.layers.mask|6,I.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const Ee=ne.parent,Te=L.cameras;U(L,Ee);for(let Pe=0;Pe<Te.length;Pe++)U(Te[Pe],Ee);Te.length===2?le(L,I,M):L.projectionMatrix.copy(I.projectionMatrix),me(ne,L,Ee)};function me(ne,he,oe){oe===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(oe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Gh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(ne){return m[ne]};let Le=null;function Ke(ne,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ee=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Ee=!0);for(let D=0;D<oe.length;D++){const x=oe[D];let V=null;if(d!==null)V=d.getViewport(x);else{const Z=f.getViewSubImage(h,x);V=Z.viewport,D===0&&(e.setRenderTargetTextures(b,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(b))}let Y=y[D];Y===void 0&&(Y=new ci,Y.layers.enable(D),Y.viewport=new Ht,y[D]=Y),Y.matrix.fromArray(x.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(x.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(V.x,V.y,V.width,V.height),D===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ee===!0&&L.cameras.push(Y)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const D=f.getDepthInformation(oe[0]);D&&D.isValid&&D.texture&&_.init(D,r.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),f))for(let D=0;D<oe.length;D++){const x=oe[D].camera;if(x){let V=m[x];V||(V=new uv,m[x]=V);const Y=f.getCameraImage(x);V.sourceTexture=Y}}}for(let oe=0;oe<v.length;oe++){const Ee=C[oe],Te=v[oe];Ee!==null&&Te!==void 0&&Te.update(Ee,he,c||o)}Le&&Le(ne,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ve=new sv;Ve.setAnimationLoop(Ke),this.setAnimationLoop=function(ne){Le=ne},this.dispose=function(){}}}const Ms=new or,oC=new Wt;function aC(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,K0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,Ms.copy(v),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(oC.makeRotationFromEuler(Ms)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lC(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const v=b.program;n.uniformBlockBinding(E,v)}function c(E,b){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(E,C);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function u(E){const b=f();E.__bindingPointIndex=b;const v=i.createBuffer(),C=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const b=r[E.id],v=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,w=v.length;R<w;R++){const I=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,y=I.length;M<y;M++){const L=I[M];if(d(L,R,M,C)===!0){const O=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let te=0;te<G.length;te++){const W=G[te],H=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+$,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,b,v,C){const R=E.value,w=b+"_"+v;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const I=C[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return C[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(E){const b=E.uniforms;let v=0;const C=16;for(let w=0,I=b.length;w<I;w++){const M=Array.isArray(b[w])?b[w]:[b[w]];for(let y=0,L=M.length;y<L;y++){const O=M[y],G=Array.isArray(O.value)?O.value:[O.value];for(let $=0,te=G.length;$<te;$++){const W=G[$],H=_(W),B=v%C,le=B%H.boundary,U=B+le;v+=le,U!==0&&C-U<H.storage&&(v+=C-U),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=H.storage}}}const R=v%C;return R>0&&(v+=C-R),E.__size=v,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const v=o.indexOf(b.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class fv{constructor(e={}){const{canvas:t=Wb(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=yi;let R=0,w=0,I=null,M=-1,y=null;const L=new Ht,O=new Ht;let G=null;const $=new ut(0);let te=0,W=t.width,H=t.height,B=1,le=null,U=null;const me=new Ht(0,0,W,H),Le=new Ht(0,0,W,H);let Ke=!1;const Ve=new qd;let ne=!1,he=!1;const oe=new Wt,Ee=new ee,Te=new Ht,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function D(){return I===null?B:1}let x=n;function V(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Od}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),x===null){const k="webgl2";if(x=V(k,T),x===null)throw V(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,Z,P,ae,j,re,ie,ve,A,S,N,q,J,X,Se,ue,Ae,ge,de,Me,Ie,we,xe,Xe;function F(){Y=new x1(x),Y.init(),we=new tC(x,Y),Z=new h1(x,Y,e,we),P=new Qw(x,Y),Z.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),ae=new y1(x),j=new zw,re=new eC(x,Y,P,j,Z,we,ae),ie=new p1(v),ve=new v1(v),A=new CE(x),xe=new u1(x,A),S=new S1(x,A,ae,xe),N=new E1(x,S,A,ae),de=new b1(x,Z,re),ue=new d1(j),q=new Bw(v,ie,ve,Y,Z,xe,ue),J=new aC(v,j),X=new Hw,Se=new $w(Y),ge=new c1(v,ie,ve,P,N,d,l),Ae=new Zw(v,N,Z),Xe=new lC(x,ae,Z,P),Me=new f1(x,Y,ae),Ie=new M1(x,Y,ae),ae.programs=q.programs,v.capabilities=Z,v.extensions=Y,v.properties=j,v.renderLists=X,v.shadowMap=Ae,v.state=P,v.info=ae}F();const pe=new sC(v,x);this.xr=pe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(W,H,!1))},this.getSize=function(T){return T.set(W,H)},this.setSize=function(T,k,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,H=k,t.width=Math.floor(T*B),t.height=Math.floor(k*B),K===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(W*B,H*B).floor()},this.setDrawingBufferSize=function(T,k,K){W=T,H=k,B=K,t.width=Math.floor(T*K),t.height=Math.floor(k*K),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,k,K,Q){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,k,K,Q),P.viewport(L.copy(me).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,k,K,Q){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,k,K,Q),P.scissor(O.copy(Le).multiplyScalar(B).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){P.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,K=!0){let Q=0;if(T){let z=!1;if(I!==null){const ce=I.texture.format;z=ce===Wd||ce===Gd||ce===Hd}if(z){const ce=I.texture.type,ye=ce===sr||ce===qs||ce===rl||ce===sl||ce===zd||ce===Vd,Ne=ge.getClearColor(),Ue=ge.getClearAlpha(),Ge=Ne.r,ze=Ne.g,Be=Ne.b;ye?(g[0]=Ge,g[1]=ze,g[2]=Be,g[3]=Ue,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Ge,_[1]=ze,_[2]=Be,_[3]=Ue,x.clearBufferiv(x.COLOR,0,_))}else Q|=x.COLOR_BUFFER_BIT}k&&(Q|=x.DEPTH_BUFFER_BIT),K&&(Q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ge.dispose(),X.dispose(),Se.dispose(),j.dispose(),ie.dispose(),ve.dispose(),N.dispose(),xe.dispose(),Xe.dispose(),q.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Je),pe.removeEventListener("sessionend",be),qe.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ae.autoReset,k=Ae.enabled,K=Ae.autoUpdate,Q=Ae.needsUpdate,z=Ae.type;F(),ae.autoReset=T,Ae.enabled=k,Ae.autoUpdate=K,Ae.needsUpdate=Q,Ae.type=z}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const k=T.target;k.removeEventListener("dispose",se),Fe(k)}function Fe(T){We(T),j.remove(T)}function We(T){const k=j.get(T).programs;k!==void 0&&(k.forEach(function(K){q.releaseProgram(K)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,K,Q,z,ce){k===null&&(k=Pe);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Ne=St(T,k,K,Q,z);P.setMaterial(Q,ye);let Ue=K.index,Ge=1;if(Q.wireframe===!0){if(Ue=S.getWireframeAttribute(K),Ue===void 0)return;Ge=2}const ze=K.drawRange,Be=K.attributes.position;let Qe=ze.start*Ge,ct=(ze.start+ze.count)*Ge;ce!==null&&(Qe=Math.max(Qe,ce.start*Ge),ct=Math.min(ct,(ce.start+ce.count)*Ge)),Ue!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ue.count)):Be!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Be.count));const Vt=ct-Qe;if(Vt<0||Vt===1/0)return;xe.setup(z,Q,Ne,K,Ue);let Dt,bt=Me;if(Ue!==null&&(Dt=A.get(Ue),bt=Ie,bt.setIndex(Dt)),z.isMesh)Q.wireframe===!0?(P.setLineWidth(Q.wireframeLinewidth*D()),bt.setMode(x.LINES)):bt.setMode(x.TRIANGLES);else if(z.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),P.setLineWidth(Ye*D()),z.isLineSegments?bt.setMode(x.LINES):z.isLineLoop?bt.setMode(x.LINE_LOOP):bt.setMode(x.LINE_STRIP)}else z.isPoints?bt.setMode(x.POINTS):z.isSprite&&bt.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))bt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ye=z._multiDrawStarts,Nt=z._multiDrawCounts,pt=z._multiDrawCount,ei=Ue?A.get(Ue).bytesPerElement:1,Ks=j.get(Q).currentProgram.getUniforms();for(let ti=0;ti<pt;ti++)Ks.setValue(x,"_gl_DrawID",ti),bt.render(Ye[ti]/ei,Nt[ti])}else if(z.isInstancedMesh)bt.renderInstances(Qe,Vt,z.count);else if(K.isInstancedBufferGeometry){const Ye=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Nt=Math.min(K.instanceCount,Ye);bt.renderInstances(Qe,Vt,Nt)}else bt.render(Qe,Vt)};function dt(T,k,K){T.transparent===!0&&T.side===Mr&&T.forceSinglePass===!1?(T.side=Zn,T.needsUpdate=!0,qt(T,k,K),T.side=os,T.needsUpdate=!0,qt(T,k,K),T.side=Mr):qt(T,k,K)}this.compile=function(T,k,K=null){K===null&&(K=T),p=Se.get(K),p.init(k),b.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==K&&T.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ce=z.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Ne=ce[ye];dt(Ne,K,z),Q.add(Ne)}else dt(ce,K,z),Q.add(ce)}),p=b.pop(),Q},this.compileAsync=function(T,k,K=null){const Q=this.compile(T,k,K);return new Promise(z=>{function ce(){if(Q.forEach(function(ye){j.get(ye).currentProgram.isReady()&&Q.delete(ye)}),Q.size===0){z(T);return}setTimeout(ce,10)}Y.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let De=null;function ke(T){De&&De(T)}function Je(){qe.stop()}function be(){qe.start()}const qe=new sv;qe.setAnimationLoop(ke),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){De=T,pe.setAnimationLoop(T),T===null?qe.stop():qe.start()},pe.addEventListener("sessionstart",Je),pe.addEventListener("sessionend",be),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,I),p=Se.get(T,b.length),p.init(k),b.push(p),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ve.setFromProjectionMatrix(oe,Zi,k.reversedDepth),he=this.localClippingEnabled,ne=ue.init(this.clippingPlanes,he),m=X.get(T,E.length),m.init(),E.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&He(ce,k,-1/0,v.sortObjects)}He(T,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,U),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&ge.addToRenderList(m,T),this.info.render.frame++,ne===!0&&ue.beginShadows();const K=p.state.shadowsArray;Ae.render(K,T,k),ne===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ce=k.cameras;if(z.length>0)for(let ye=0,Ne=ce.length;ye<Ne;ye++){const Ue=ce[ye];Xt(Q,z,T,Ue)}ot&&ge.render(T);for(let ye=0,Ne=ce.length;ye<Ne;ye++){const Ue=ce[ye];je(m,T,Ue,Ue.viewport)}}else z.length>0&&Xt(Q,z,T,k),ot&&ge.render(T),je(m,T,k);I!==null&&w===0&&(re.updateMultisampleRenderTarget(I),re.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,k),xe.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(p=b[b.length-1],ne===!0&&ue.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function He(T,k,K,Q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){Q&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const ye=N.update(T),Ne=T.material;Ne.visible&&m.push(T,ye,Ne,K,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const ye=N.update(T),Ne=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Te.copy(ye.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(Ne)){const Ue=ye.groups;for(let Ge=0,ze=Ue.length;Ge<ze;Ge++){const Be=Ue[Ge],Qe=Ne[Be.materialIndex];Qe&&Qe.visible&&m.push(T,ye,Qe,K,Te.z,Be)}}else Ne.visible&&m.push(T,ye,Ne,K,Te.z,null)}}const ce=T.children;for(let ye=0,Ne=ce.length;ye<Ne;ye++)He(ce[ye],k,K,Q)}function je(T,k,K,Q){const z=T.opaque,ce=T.transmissive,ye=T.transparent;p.setupLightsView(K),ne===!0&&ue.setGlobalState(v.clippingPlanes,K),Q&&P.viewport(L.copy(Q)),z.length>0&&it(z,k,K),ce.length>0&&it(ce,k,K),ye.length>0&&it(ye,k,K),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Xt(T,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new Ys(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?dl:sr,minFilter:Is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[Q.id],ye=Q.viewport||L;ce.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget(),Ue=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor($),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),ot&&ge.render(K);const ze=v.toneMapping;v.toneMapping=Jr;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ne===!0&&ue.setGlobalState(v.clippingPlanes,Q),it(T,K,Q),re.updateMultisampleRenderTarget(ce),re.updateRenderTargetMipmap(ce),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,Vt=k.length;ct<Vt;ct++){const Dt=k[ct],bt=Dt.object,Ye=Dt.geometry,Nt=Dt.material,pt=Dt.group;if(Nt.side===Mr&&bt.layers.test(Q.layers)){const ei=Nt.side;Nt.side=Zn,Nt.needsUpdate=!0,It(bt,K,Q,Ye,Nt,pt),Nt.side=ei,Nt.needsUpdate=!0,Qe=!0}}Qe===!0&&(re.updateMultisampleRenderTarget(ce),re.updateRenderTargetMipmap(ce))}v.setRenderTarget(Ne,Ue,Ge),v.setClearColor($,te),Be!==void 0&&(Q.viewport=Be),v.toneMapping=ze}function it(T,k,K){const Q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ce=T.length;z<ce;z++){const ye=T[z],Ne=ye.object,Ue=ye.geometry,Ge=ye.group;let ze=ye.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ne.layers.test(K.layers)&&It(Ne,k,K,Ue,ze,Ge)}}function It(T,k,K,Q,z,ce){T.onBeforeRender(v,k,K,Q,z,ce),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,k,K,Q,T,ce),z.transparent===!0&&z.side===Mr&&z.forceSinglePass===!1?(z.side=Zn,z.needsUpdate=!0,v.renderBufferDirect(K,k,Q,z,T,ce),z.side=os,z.needsUpdate=!0,v.renderBufferDirect(K,k,Q,z,T,ce),z.side=Mr):v.renderBufferDirect(K,k,Q,z,T,ce),T.onAfterRender(v,k,K,Q,z,ce)}function qt(T,k,K){k.isScene!==!0&&(k=Pe);const Q=j.get(T),z=p.state.lights,ce=p.state.shadowsArray,ye=z.state.version,Ne=q.getParameters(T,z.state,ce,k,K),Ue=q.getProgramCacheKey(Ne);let Ge=Q.programs;Q.environment=T.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(T.isMeshStandardMaterial?ve:ie).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",se),Ge=new Map,Q.programs=Ge);let ze=Ge.get(Ue);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===ye)return yt(T,Ne),ze}else Ne.uniforms=q.getUniforms(T),T.onBeforeCompile(Ne,v),ze=q.acquireProgram(Ne,Ue),Ge.set(Ue,ze),Q.uniforms=Ne.uniforms;const Be=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ue.uniform),yt(T,Ne),Q.needsLights=Pt(T),Q.lightsStateVersion=ye,Q.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Rt(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function yt(T,k){const K=j.get(T);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function St(T,k,K,Q,z){k.isScene!==!0&&(k=Pe),re.resetTextureUnits();const ce=k.fog,ye=Q.isMeshStandardMaterial?k.environment:null,Ne=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jo,Ue=(Q.isMeshStandardMaterial?ve:ie).get(Q.envMap||ye),Ge=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let Vt=Jr;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const Dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=Dt!==void 0?Dt.length:0,Ye=j.get(Q),Nt=p.state.lights;if(ne===!0&&(he===!0||T!==y)){const Rn=T===y&&Q.id===M;ue.setState(Q,T,Rn)}let pt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Nt.state.version||Ye.outputColorSpace!==Ne||z.isBatchedMesh&&Ye.batching===!1||!z.isBatchedMesh&&Ye.batching===!0||z.isBatchedMesh&&Ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ye.instancing===!1||!z.isInstancedMesh&&Ye.instancing===!0||z.isSkinnedMesh&&Ye.skinning===!1||!z.isSkinnedMesh&&Ye.skinning===!0||z.isInstancedMesh&&Ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ye.instancingMorph===!1&&z.morphTexture!==null||Ye.envMap!==Ue||Q.fog===!0&&Ye.fog!==ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==ze||Ye.morphTargets!==Be||Ye.morphNormals!==Qe||Ye.morphColors!==ct||Ye.toneMapping!==Vt||Ye.morphTargetsCount!==bt)&&(pt=!0):(pt=!0,Ye.__version=Q.version);let ei=Ye.currentProgram;pt===!0&&(ei=qt(Q,k,z));let Ks=!1,ti=!1,ra=!1;const Ot=ei.getUniforms(),vi=Ye.uniforms;if(P.useProgram(ei.program)&&(Ks=!0,ti=!0,ra=!0),Q.id!==M&&(M=Q.id,ti=!0),Ks||y!==T){P.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ot.setValue(x,"projectionMatrix",T.projectionMatrix),Ot.setValue(x,"viewMatrix",T.matrixWorldInverse);const Gn=Ot.map.cameraPosition;Gn!==void 0&&Gn.setValue(x,Ee.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Ot.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ot.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ti=!0,ra=!0)}if(z.isSkinnedMesh){Ot.setOptional(x,z,"bindMatrix"),Ot.setOptional(x,z,"bindMatrixInverse");const Rn=z.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Ot.setValue(x,"boneTexture",Rn.boneTexture,re))}z.isBatchedMesh&&(Ot.setOptional(x,z,"batchingTexture"),Ot.setValue(x,"batchingTexture",z._matricesTexture,re),Ot.setOptional(x,z,"batchingIdTexture"),Ot.setValue(x,"batchingIdTexture",z._indirectTexture,re),Ot.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&Ot.setValue(x,"batchingColorTexture",z._colorsTexture,re));const xi=K.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&de.update(z,K,ei),(ti||Ye.receiveShadow!==z.receiveShadow)&&(Ye.receiveShadow=z.receiveShadow,Ot.setValue(x,"receiveShadow",z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(vi.envMap.value=Ue,vi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(vi.envMapIntensity.value=k.environmentIntensity),ti&&(Ot.setValue(x,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Qn(vi,ra),ce&&Q.fog===!0&&J.refreshFogUniforms(vi,ce),J.refreshMaterialUniforms(vi,Q,B,H,p.state.transmissionRenderTarget[T.id]),Ec.upload(x,Rt(Ye),vi,re)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ec.upload(x,Rt(Ye),vi,re),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ot.setValue(x,"center",z.center),Ot.setValue(x,"modelViewMatrix",z.modelViewMatrix),Ot.setValue(x,"normalMatrix",z.normalMatrix),Ot.setValue(x,"modelMatrix",z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Rn=Q.uniformsGroups;for(let Gn=0,du=Rn.length;Gn<du;Gn++){const fs=Rn[Gn];Xe.update(fs,ei),Xe.bind(fs,ei)}}return ei}function Qn(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Pt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,k,K){const Q=j.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=k,j.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const K=j.get(T);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const Cn=x.createFramebuffer();this.setRenderTarget=function(T,k=0,K=0){I=T,R=k,w=K;let Q=!0,z=null,ce=!1,ye=!1;if(T){const Ue=j.get(T);if(Ue.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(x.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)re.setupRenderTarget(T);else if(Ue.__hasExternalTextures)re.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Ue.__boundDepthTexture!==Be){if(Be!==null&&j.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);const ze=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?z=ze[k][K]:z=ze[k],ce=!0):T.samples>0&&re.useMultisampledRTT(T)===!1?z=j.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[K]:z=ze,L.copy(T.viewport),O.copy(T.scissor),G=T.scissorTest}else L.copy(me).multiplyScalar(B).floor(),O.copy(Le).multiplyScalar(B).floor(),G=Ke;if(K!==0&&(z=Cn),P.bindFramebuffer(x.FRAMEBUFFER,z)&&Q&&P.drawBuffers(T,z),P.viewport(L),P.scissor(O),P.setScissorTest(G),ce){const Ue=j.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,K)}else if(ye){const Ue=k;for(let Ge=0;Ge<T.textures.length;Ge++){const ze=j.get(T.textures[Ge]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Ge,ze.__webglTexture,K,Ue)}}else if(T!==null&&K!==0){const Ue=j.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ue.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(T,k,K,Q,z,ce,ye,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ue=Ue[ye]),Ue){P.bindFramebuffer(x.FRAMEBUFFER,Ue);try{const Ge=T.textures[Ne],ze=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Q&&K>=0&&K<=T.height-z&&(T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(k,K,Q,z,we.convert(ze),we.convert(Be),ce))}finally{const Ge=I!==null?j.get(I).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,k,K,Q,z,ce,ye,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ue=Ue[ye]),Ue)if(k>=0&&k<=T.width-Q&&K>=0&&K<=T.height-z){P.bindFramebuffer(x.FRAMEBUFFER,Ue);const Ge=T.textures[Ne],ze=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Qe),x.bufferData(x.PIXEL_PACK_BUFFER,ce.byteLength,x.STREAM_READ),T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(k,K,Q,z,we.convert(ze),we.convert(Be),0);const ct=I!==null?j.get(I).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,ct);const Vt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Xb(x,Vt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Qe),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,ce),x.deleteBuffer(Qe),x.deleteSync(Vt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,K=0){const Q=Math.pow(2,-K),z=Math.floor(T.image.width*Q),ce=Math.floor(T.image.height*Q),ye=k!==null?k.x:0,Ne=k!==null?k.y:0;re.setTexture2D(T,0),x.copyTexSubImage2D(x.TEXTURE_2D,K,0,0,ye,Ne,z,ce),P.unbindTexture()};const gi=x.createFramebuffer(),tn=x.createFramebuffer();this.copyTextureToTexture=function(T,k,K=null,Q=null,z=0,ce=null){ce===null&&(z!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=z,z=0):ce=0);let ye,Ne,Ue,Ge,ze,Be,Qe,ct,Vt;const Dt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(K!==null)ye=K.max.x-K.min.x,Ne=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,ze=K.min.y,Be=K.isBox3?K.min.z:0;else{const xi=Math.pow(2,-z);ye=Math.floor(Dt.width*xi),Ne=Math.floor(Dt.height*xi),T.isDataArrayTexture?Ue=Dt.depth:T.isData3DTexture?Ue=Math.floor(Dt.depth*xi):Ue=1,Ge=0,ze=0,Be=0}Q!==null?(Qe=Q.x,ct=Q.y,Vt=Q.z):(Qe=0,ct=0,Vt=0);const bt=we.convert(k.format),Ye=we.convert(k.type);let Nt;k.isData3DTexture?(re.setTexture3D(k,0),Nt=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),Nt=x.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),Nt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const pt=x.getParameter(x.UNPACK_ROW_LENGTH),ei=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ks=x.getParameter(x.UNPACK_SKIP_PIXELS),ti=x.getParameter(x.UNPACK_SKIP_ROWS),ra=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Dt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Dt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ge),x.pixelStorei(x.UNPACK_SKIP_ROWS,ze),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Be);const Ot=T.isDataArrayTexture||T.isData3DTexture,vi=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const xi=j.get(T),Rn=j.get(k),Gn=j.get(xi.__renderTarget),du=j.get(Rn.__renderTarget);P.bindFramebuffer(x.READ_FRAMEBUFFER,Gn.__webglFramebuffer),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,du.__webglFramebuffer);for(let fs=0;fs<Ue;fs++)Ot&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(T).__webglTexture,z,Be+fs),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(k).__webglTexture,ce,Vt+fs)),x.blitFramebuffer(Ge,ze,ye,Ne,Qe,ct,ye,Ne,x.DEPTH_BUFFER_BIT,x.NEAREST);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||j.has(T)){const xi=j.get(T),Rn=j.get(k);P.bindFramebuffer(x.READ_FRAMEBUFFER,gi),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,tn);for(let Gn=0;Gn<Ue;Gn++)Ot?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,xi.__webglTexture,z,Be+Gn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,xi.__webglTexture,z),vi?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Rn.__webglTexture,ce,Vt+Gn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Rn.__webglTexture,ce),z!==0?x.blitFramebuffer(Ge,ze,ye,Ne,Qe,ct,ye,Ne,x.COLOR_BUFFER_BIT,x.NEAREST):vi?x.copyTexSubImage3D(Nt,ce,Qe,ct,Vt+Gn,Ge,ze,ye,Ne):x.copyTexSubImage2D(Nt,ce,Qe,ct,Ge,ze,ye,Ne);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else vi?T.isDataTexture||T.isData3DTexture?x.texSubImage3D(Nt,ce,Qe,ct,Vt,ye,Ne,Ue,bt,Ye,Dt.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Nt,ce,Qe,ct,Vt,ye,Ne,Ue,bt,Dt.data):x.texSubImage3D(Nt,ce,Qe,ct,Vt,ye,Ne,Ue,bt,Ye,Dt):T.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ce,Qe,ct,ye,Ne,bt,Ye,Dt.data):T.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ce,Qe,ct,Dt.width,Dt.height,bt,Dt.data):x.texSubImage2D(x.TEXTURE_2D,ce,Qe,ct,ye,Ne,bt,Ye,Dt);x.pixelStorei(x.UNPACK_ROW_LENGTH,pt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ei),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ks),x.pixelStorei(x.UNPACK_SKIP_ROWS,ti),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ra),ce===0&&k.generateMipmaps&&x.generateMipmap(Nt),P.unbindTexture()},this.copyTextureToTexture3D=function(T,k,K=null,Q=null,z=0){return No('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,K,Q,z)},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?re.setTextureCube(T,0):T.isData3DTexture?re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?re.setTexture2DArray(T,0):re.setTexture2D(T,0),P.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,P.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const cC=1/3,Vi=1/6,xf=i=>Math.floor(i)|0,Sf=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function hv(i=Math.random){const e=uC(i),t=new Float64Array(e).map(s=>Sf[s%12*3]),n=new Float64Array(e).map(s=>Sf[s%12*3+1]),r=new Float64Array(e).map(s=>Sf[s%12*3+2]);return function(o,a,l){let c,u,f,h;const d=(o+a+l)*cC,g=xf(o+d),_=xf(a+d),m=xf(l+d),p=(g+_+m)*Vi,E=g-p,b=_-p,v=m-p,C=o-E,R=a-b,w=l-v;let I,M,y,L,O,G;C>=R?R>=w?(I=1,M=0,y=0,L=1,O=1,G=0):C>=w?(I=1,M=0,y=0,L=1,O=0,G=1):(I=0,M=0,y=1,L=1,O=0,G=1):R<w?(I=0,M=0,y=1,L=0,O=1,G=1):C<w?(I=0,M=1,y=0,L=0,O=1,G=1):(I=0,M=1,y=0,L=1,O=1,G=0);const $=C-I+Vi,te=R-M+Vi,W=w-y+Vi,H=C-L+2*Vi,B=R-O+2*Vi,le=w-G+2*Vi,U=C-1+3*Vi,me=R-1+3*Vi,Le=w-1+3*Vi,Ke=g&255,Ve=_&255,ne=m&255;let he=.6-C*C-R*R-w*w;if(he<0)c=0;else{const Pe=Ke+e[Ve+e[ne]];he*=he,c=he*he*(t[Pe]*C+n[Pe]*R+r[Pe]*w)}let oe=.6-$*$-te*te-W*W;if(oe<0)u=0;else{const Pe=Ke+I+e[Ve+M+e[ne+y]];oe*=oe,u=oe*oe*(t[Pe]*$+n[Pe]*te+r[Pe]*W)}let Ee=.6-H*H-B*B-le*le;if(Ee<0)f=0;else{const Pe=Ke+L+e[Ve+O+e[ne+G]];Ee*=Ee,f=Ee*Ee*(t[Pe]*H+n[Pe]*B+r[Pe]*le)}let Te=.6-U*U-me*me-Le*Le;if(Te<0)h=0;else{const Pe=Ke+1+e[Ve+1+e[ne+1]];Te*=Te,h=Te*Te*(t[Pe]*U+n[Pe]*me+r[Pe]*Le)}return 32*(c+u+f+h)}}function uC(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=t[n];t[n]=t[r],t[r]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const dv=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},fC={__name:"Background",setup(i){const e=un(null);function t(n=32){const r=document.createElement("canvas");r.width=r.height=n;const s=r.getContext("2d"),o=s.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.3)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,n,n);const a=new Vn(r);return a.needsUpdate=!0,a}return cs(()=>{const n=new Q0,r=new ci(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=6;const s=new fv({antialias:!1,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(s.domElement);const o=1500,a=new ar,l=new Float32Array(o*3),c=new Float32Array(o*3),u=hv(),f=[new ut(10040319),new ut(43775),new ut(16737996)];let h=0;for(let m=0;m<o;m++){const p=(Math.random()-.5)*20,E=(Math.random()-.5)*20,b=(Math.random()-.5)*20,v=u(p*.15,E*.15,b*.15);if(v>0){l.set([p,E,b],h*3);const C=(v+1)/2,R=f[Math.floor(C*f.length)];c.set([R.r,R.g,R.b],h*3),h++}}a.setAttribute("position",new Di(l.slice(0,h*3),3)),a.setAttribute("color",new Di(c.slice(0,h*3),3));const d=new ev({size:.11,vertexColors:!0,transparent:!0,opacity:.6,blending:ih,depthWrite:!1,map:t(),alphaTest:.01}),g=new xE(a,d);n.add(g),n.add(new rv(16777215,.15));function _(){g.rotation.y+=1e-4,g.rotation.x+=1e-4,s.render(n,r),requestAnimationFrame(_)}_(),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(n,r)=>(Lt(),Ut("div",{ref_key:"container",ref:e,class:"nebula-canvas"},null,512))}},hC=dv(fC,[["__scopeId","data-v-bcacff47"]]);/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn,pv,Ar,Qi,Qr,mv,ko,rc,_v=function(){return typeof window<"u"},gv=function(){return Tn||_v()&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},vv=function(e){return typeof e=="string"},e_=function(e){return typeof e=="function"},ll=function(e,t){var n=t==="x"?"Width":"Height",r="scroll"+n,s="client"+n;return e===Ar||e===Qi||e===Qr?Math.max(Qi[r],Qr[r])-(Ar["inner"+n]||Qi[s]||Qr[s]):e[r]-e["offset"+n]},cl=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===Ar&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Qi[n]!=null?Qi:Qr),function(){return e[n]}},dC=function(e,t,n,r){if(e_(e)&&(e=e(t,n,r)),typeof e!="object")return vv(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&e_(e[o])?e[o](t,n,r):e[o];return s},xv=function(e,t){if(e=mv(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),r=!t||t===Ar||t===Qr,s=r?{top:Qi.clientTop-(Ar.pageYOffset||Qi.scrollTop||Qr.scrollTop||0),left:Qi.clientLeft-(Ar.pageXOffset||Qi.scrollLeft||Qr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!r&&t&&(o.x+=cl(t,"x")(),o.y+=cl(t,"y")()),o},t_=function(e,t,n,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:vv(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?ll(t,n)-s:Math.min(ll(t,n),xv(e,t)[n]-s)},qh=function(){Tn=gv(),_v()&&Tn&&typeof document<"u"&&document.body&&(Ar=window,Qr=document.body,Qi=document.documentElement,mv=Tn.utils.toArray,Tn.config({autoKillThreshold:7}),ko=Tn.config(),pv=1)},ia={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){Tn=e,qh()},init:function(e,t,n,r,s){pv||qh();var o=this,a=Tn.getProperty(e,"scrollSnapType");o.isWin=e===Ar,o.target=e,o.tween=n,t=dC(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:ko).autoKill,o.getX=cl(e,"x"),o.getY=cl(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),rc||(rc=Tn.core.globals().ScrollTrigger),Tn.getProperty(e,"scrollBehavior")==="smooth"&&Tn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,t_(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,t_(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,f=t.snapInline,h,d,g,_,m;n;)n.r(e,n.d),n=n._next;h=c||!t.skipX?t.getX():a,d=c||!t.skipY?t.getY():l,g=d-l,_=h-a,m=ko.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&h<ll(r,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&d<ll(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?Ar.scrollTo(t.skipX?h:t.x,t.skipY?d:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=r.scrollTop,h=r.scrollLeft,f?r.style.scrollSnapType=f:r.style.removeProperty("scroll-snap-type"),r.scrollTop=d+1,r.scrollLeft=h+1,r.scrollTop=d,r.scrollLeft=h),t.xPrev=t.x,t.yPrev=t.y,rc&&rc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};ia.max=ll;ia.getOffset=xv;ia.buildGetter=cl;ia.config=function(i){ko||qh()||(ko=Tn.config());for(var e in i)ko[e]=i[e]};gv()&&Tn.registerPlugin(ia);const pC={class:"header"},mC={class:"header-container"},_C="rizqikurni29@gmail.com",gC="Mas, Ganteng banget mas",vC="",xC={__name:"Header",setup(i){const e=`https://mail.google.com/mail/?view=cm&fs=1&to=${_C}&su=${encodeURIComponent(gC)}&body=${encodeURIComponent(vC)}`,t=un(!1),n=()=>{t.value=!t.value,t.value?Qt.fromTo(s.value,{y:-50,opacity:0},{y:0,opacity:1,duration:.5,ease:"power2.out"}):Qt.to(s.value,{y:-50,opacity:0,duration:.4,ease:"power2.in"})},r=()=>t.value=!1,s=un(null);Qt.registerPlugin(ia,nt);const o=un(null),a=["Ryizanova","MRizqiK","MrK"];return cs(()=>{let l=0;const c=o.value,u=Qt.timeline({repeat:-1});a.forEach(()=>{u.to(c,{duration:.6,rotateX:90,opacity:0,ease:"power2.in",onComplete:()=>{l=(l+1)%a.length,c.textContent=a[l]}}).to(c,{duration:.6,rotateX:0,opacity:1,ease:"power2.out"}).to({},{duration:1.4})}),document.querySelectorAll('a[href^="#"]').forEach(E=>{E.addEventListener("click",b=>{const v=E.getAttribute("href");v&&v.startsWith("#")&&(b.preventDefault(),Qt.to(window,{duration:1.2,scrollTo:{y:v,offsetY:80},ease:"power2.inOut"}),r())})});const f=document.querySelectorAll("section[id]"),h=document.querySelectorAll(".nav-desktop a"),d=document.querySelectorAll(".nav-mobile a");f.forEach(E=>{nt.create({trigger:E,start:"top 100",end:"bottom 100",onEnter:()=>g(E.id),onEnterBack:()=>g(E.id)})});function g(E){h.forEach(b=>{b.classList.toggle("active-nav",b.getAttribute("href")===`#${E}`)}),d.forEach(b=>{b.classList.toggle("active-nav",b.getAttribute("href")===`#${E}`)})}const _=document.querySelectorAll(".social-desktop a i"),m=["#0A66C2","#E1306C","#1877F2","#000000","#0A66C2"],p=Qt.timeline({repeat:-1,yoyo:!0});_.forEach((E,b)=>{p.to(E,{color:m[b],duration:.5,ease:"power1.inOut"},b*.2)})}),(l,c)=>(Lt(),Ut("header",pC,[$e("div",mC,[$e("p",{class:"judul",ref_key:"judulRef",ref:o},"Ryizanova",512),c[3]||(c[3]=lc('<nav class="nav-desktop"><a href="#home">Home</a><a href="#skill">Skill</a><a href="#website">Website</a><a href="#gallery">Gallery</a></nav>',1)),$e("div",{class:"social-desktop"},[$e("a",{href:e,target:"_blank"},c[0]||(c[0]=[$e("i",{class:"fab fa-google"},null,-1)])),c[1]||(c[1]=lc('<a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a><a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>',4))]),$e("button",{class:"menu-btn",onClick:n},c[2]||(c[2]=[$e("i",{class:"fas fa-bars"},null,-1)]))]),fx($e("div",{class:"nav-mobile",ref_key:"navMobile",ref:s},[$e("nav",null,[$e("a",{href:"#home",onClick:r},"Home"),$e("a",{href:"#skill",onClick:r},"Skill"),$e("a",{href:"#website",onClick:r},"Website"),$e("a",{href:"#gallery",onClick:r},"Gallery")]),$e("div",{class:"social-mobile"},[$e("a",{href:e,target:"_blank"},c[4]||(c[4]=[$e("i",{class:"fab fa-google"},null,-1)])),c[5]||(c[5]=lc('<a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a><a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>',4))])],512),[[yS,t.value]])]))}},SC="/assets/web-DyuqBmB0.png",MC="/assets/web2-zFgR8v1X.jpeg",yC="/assets/web3-Dl92_9VJ.jpeg",bC="/assets/web4-BfNhJ7T5.jpeg",EC="/assets/web5-DE5BbLQH.jpeg",TC="/assets/web6-Bfh63amY.jpeg",AC="/assets/web7-CtPHsQHS.jpeg",wC="/assets/web8-CbKLze6k.jpeg",CC="/assets/web9-CQ2GwiL_.jpeg",RC="/assets/web10-C3QfLwCf.jpeg",PC="/assets/web11-CI5nDHuF.jpeg",DC="/assets/web12-CZwjSito.jpeg",LC={class:"website-content"},IC=["src","alt"],UC={class:"website-text",style:{"will-change":"transform, opacity"}},FC={class:"title"},NC={class:"equipment"},OC={class:"description"},kC=["href"],BC={key:1,class:"github-buttons",style:{"margin-top":"8px"}},zC=["href"],VC=["href"],HC={__name:"Website",setup(i){Qt.registerPlugin(nt);const e=un(null);un(null);const t=un([{items:[{image:SC,title:"Website Undangan",equipment:"Equipment : Vue.js (Vite), CSS",description:"Website ini digunakan untuk menyampaikan informasi undangan secara online dengan tampilan yang menarik dan mudah diakses. Menggunakan Vue.js (Vite) untuk interaktivitas dan CSS untuk desain responsif, website ini memudahkan pengguna melihat detail acara, lokasi, dan informasi penting lainnya dengan nyaman di berbagai perangkat.",website:"https://mrizqik29.github.io/undanganv2/",size:"large"}]},{items:[{image:DC,title:"Website Landing Page",equipment:"Equipment: VS Code, GitHub, Vue.js, GSAP, HTML, SCSS",description:"Website ini adalah landing page interaktif yang dirancang untuk memberikan pengalaman pengguna yang menarik dan responsif. Animasi GSAP, termasuk ScrollTrigger, digunakan untuk efek gerakan yang halus saat pengguna menggulir halaman. SCSS diterapkan dengan animasi neon bergerak untuk tampilan yang modern dan dinamis. Ikon-ikon menggunakan Lucide untuk kesan visual yang konsisten. Seluruh desain dioptimalkan agar tampil dengan baik di berbagai perangkat, membuat website ini menarik dan mudah digunakan.",website:"https://mrizqik29.github.io/landingpage/"}]},{items:[{image:MC,title:"Login (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, JWT, Hash, XAMPP, VS Code, GSAP, Adobe Illustrator",description:"Fitur login pada website inventori ini dirancang dengan keamanan tinggi menggunakan token JWT dan hash untuk melindungi data pengguna. Menggunakan Vue.js (Vite) untuk interaktivitas frontend, Laravel dan MySQL untuk backend dan database, serta GSAP untuk animasi UI yang halus. Desain dibuat responsif dan mudah digunakan, memastikan pengalaman pengguna yang aman dan nyaman.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:yC,title:"Dashboard (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code",description:"Dashboard ini menampilkan ringkasan data inventori secara interaktif, termasuk barang terlaris serta laporan pembelian dan penjualan selama setahun terakhir. Menggunakan Vue.js (Vite) untuk frontend, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau performa inventori dan membuat keputusan bisnis lebih mudah dan cepat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:bC,title:"Add Data (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code",description:"Fitur ini memungkinkan pengguna menambahkan data inventori baru, termasuk barang, jenis, satuan, ruangan, dan departemen. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk desain responsif. Fitur ini membantu pengelolaan inventori menjadi lebih terstruktur dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:EC,title:"Laporan Penjualan (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur laporan penjualan ini menampilkan data secara detail berdasarkan transaksi, barang, dan kasir. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna menganalisis penjualan dengan cepat dan akurat, mendukung pengambilan keputusan bisnis.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:TC,title:"Laporan Stock (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Laporan Stock ini menampilkan data inventori lengkap dari semua ruangan dan barang, termasuk laporan stock rendah. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau ketersediaan barang secara real-time dan mengambil keputusan pengelolaan inventori dengan lebih cepat dan akurat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:AC,title:"Log Data (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Log Data ini mencatat semua pergerakan barang, termasuk penerimaan, penjualan, dan pemesanan antar ruangan. Pengguna juga dapat mengekspor data ke format Excel untuk analisis lebih lanjut. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini memudahkan pemantauan inventori secara lengkap dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:wC,title:"Kirim Barang (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Kirim Barang memungkinkan pengguna memindahkan barang dari satu ruangan ke ruangan lain dengan mudah. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan keluar terlebih dahulu dari tabel stok. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini membantu pengelolaan inventori lebih terstruktur dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:CC,title:"Penerimaan Barang (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Penerimaan Barang digunakan untuk mencatat barang yang diterima dari distributor dan menambahkan stok ke gudang. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memastikan pencatatan stok gudang akurat dan memudahkan pengelolaan inventori secara efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:RC,title:"Penjualan (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Penjualan digunakan untuk menjual barang kepada pelanggan dengan pengelolaan stok yang efisien. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan dijual terlebih dahulu, dan harga tertinggi dari barang yang dijual diambil secara otomatis. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memudahkan proses penjualan dan memastikan pengelolaan inventori tetap akurat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:PC,title:"Order (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:'Fitur Order Barang memungkinkan perpindahan barang antar ruangan dengan efisien. Terdapat dua tab: "List" untuk menampilkan ruangan yang mengajukan permintaan, dan "Request" untuk melihat ruangan tujuan pengiriman. Backend menggunakan metode FIFO (First In, First Out) untuk memastikan barang yang masuk lebih dulu akan dipindahkan terlebih dahulu. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend, serta CSS untuk tampilan responsif, fitur ini memudahkan pengelolaan inventori antar ruangan secara terstruktur dan akurat.',githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]}]);return cs(()=>{Bo(()=>{const n=e.value.querySelectorAll(".website-item");Qt.from(n,{y:20,opacity:0,scale:.97,duration:.7,stagger:.08,ease:"power1.out",scrollTrigger:{trigger:e.value,start:"top 90%",toggleActions:"play none none none",once:!0}})})}),(n,r)=>(Lt(),Ut("section",{class:"website",ref_key:"websiteSection",ref:e,id:"website"},[(Lt(!0),Ut(yn,null,zo(t.value,(s,o)=>(Lt(),Ut("div",{class:"website-wrapper",key:o},[$e("div",LC,[(Lt(!0),Ut(yn,null,zo(s.items,(a,l)=>(Lt(),Ut("div",{class:"website-item",key:l},[$e("img",{src:a.image,alt:a.title,class:Jc(["website-image",a.size]),loading:"eager",style:{"will-change":"transform, opacity"}},null,10,IC),$e("div",UC,[$e("h2",FC,To(a.title),1),$e("p",NC,To(a.equipment),1),$e("p",OC,To(a.description),1),a.website?(Lt(),Ut("a",{key:0,href:a.website,target:"_blank",class:"btn"}," Kunjungi Website ",8,kC)):Pc("",!0),a.title.includes("Website Inventori")?(Lt(),Ut("div",BC,[$e("a",{href:a.githubFrontend,target:"_blank",class:"btn",style:{"margin-right":"5px"}}," Code Front-end ",8,zC),$e("a",{href:a.githubBackend,target:"_blank",class:"btn"}," Code Back-end ",8,VC)])):Pc("",!0)])]))),128))])]))),128))],512))}},GC={__name:"Asteroid",props:{color:{type:String,default:"#666666"},scale:{type:Number,default:1},pos:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(i){const e=i,t=un(null);return cs(()=>{const n=new Q0,r=new ci(60,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=5;const s=new fv({antialias:!0,alpha:!0});s.setClearColor(0,0),s.setSize(window.innerWidth,window.innerHeight),t.value.appendChild(s.domElement);const o=new Yd(1,64,64),a=hv(),l=o.attributes.position,c=l.array;for(let g=0;g<c.length;g+=3){const _=c[g],m=c[g+1],p=c[g+2],E=_*.6,b=m*.6,v=p*.6,C=a(E*.5,b*.5,v*.5)*.3,R=a(E*2,b*2,v*2)*.1,w=1+C+R;c[g]=_*w,c[g+1]=m*w*1.1,c[g+2]=p*w}l.needsUpdate=!0,o.computeVertexNormals();const u=new SE({color:new ut(e.color),flatShading:!0}),f=new Ji(o,u);f.position.set(e.pos.x,e.pos.y,e.pos.z),f.scale.set(e.scale,e.scale,e.scale),n.add(f);const h=new TE(16777215,1.2);h.position.set(5,3,5),n.add(h),n.add(new rv(4210752,.4));function d(){requestAnimationFrame(d),f.rotation.y+=.004,f.rotation.x+=.002,s.render(n,r)}d(),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(n,r)=>(Lt(),Ut("div",{ref_key:"container",ref:t,class:"asteroid-container"},null,512))}},WC=dv(GC,[["__scopeId","data-v-35725980"]]),XC={__name:"App",setup(i){return(e,t)=>(Lt(),Ut(yn,null,[hn(hC),hn(xC),hn(WC,{pos:{x:-.5,y:2,z:1},scale:2}),hn(ly),hn(zy),hn(HC),hn(tb)],64))}};BS(XC).mount("#app");
