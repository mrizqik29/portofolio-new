(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qh(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const At={},Eo=[],Qi=()=>{},lv=()=>!1,$c=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Yh=i=>i.startsWith("onUpdate:"),Hn=Object.assign,$h=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},cv=Object.prototype.hasOwnProperty,vt=(i,e)=>cv.call(i,e),Ze=Array.isArray,bo=i=>jc(i)==="[object Map]",Km=i=>jc(i)==="[object Set]",tt=i=>typeof i=="function",en=i=>typeof i=="string",as=i=>typeof i=="symbol",zt=i=>i!==null&&typeof i=="object",Zm=i=>(zt(i)||tt(i))&&tt(i.then)&&tt(i.catch),Jm=Object.prototype.toString,jc=i=>Jm.call(i),uv=i=>jc(i).slice(8,-1),Qm=i=>jc(i)==="[object Object]",jh=i=>en(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ba=qh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},fv=/-(\w)/g,Qr=Kc(i=>i.replace(fv,(e,t)=>t?t.toUpperCase():"")),hv=/\B([A-Z])/g,Ys=Kc(i=>i.replace(hv,"-$1").toLowerCase()),e_=Kc(i=>i.charAt(0).toUpperCase()+i.slice(1)),pu=Kc(i=>i?`on${e_(i)}`:""),qr=(i,e)=>!Object.is(i,e),mu=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Sf=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},dv=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Xd;const Zc=()=>Xd||(Xd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kh(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=en(n)?gv(n):Kh(n);if(r)for(const s in r)e[s]=r[s]}return e}else if(en(i)||zt(i))return i}const pv=/;(?![^(]*\))/g,mv=/:([^]+)/,_v=/\/\*[^]*?\*\//g;function gv(i){const e={};return i.replace(_v,"").split(pv).forEach(t=>{if(t){const n=t.split(mv);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Jc(i){let e="";if(en(i))e=i;else if(Ze(i))for(let t=0;t<i.length;t++){const n=Jc(i[t]);n&&(e+=n+" ")}else if(zt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const vv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xv=qh(vv);function t_(i){return!!i||i===""}const n_=i=>!!(i&&i.__v_isRef===!0),To=i=>en(i)?i:i==null?"":Ze(i)||zt(i)&&(i.toString===Jm||!tt(i.toString))?n_(i)?To(i.value):JSON.stringify(i,i_,2):String(i),i_=(i,e)=>n_(e)?i_(i,e.value):bo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r],s)=>(t[_u(n,s)+" =>"]=r,t),{})}:Km(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>_u(t))}:as(e)?_u(e):zt(e)&&!Ze(e)&&!Qm(e)?String(e):e,_u=(i,e="")=>{var t;return as(i)?`Symbol(${(t=i.description)!=null?t:e})`:i};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xn;class Sv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xn,!e&&Xn&&(this.index=(Xn.scopes||(Xn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xn;try{return Xn=this,e()}finally{Xn=t}}}on(){++this._on===1&&(this.prevScope=Xn,Xn=this)}off(){this._on>0&&--this._on===0&&(Xn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Mv(){return Xn}let Ct;const gu=new WeakSet;class r_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xn&&Xn.active&&Xn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gu.has(this)&&(gu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||o_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qd(this),a_(this);const e=Ct,t=ki;Ct=this,ki=!0;try{return this.fn()}finally{l_(this),Ct=e,ki=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qh(e);this.deps=this.depsTail=void 0,qd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mf(this)&&this.run()}get dirty(){return Mf(this)}}let s_=0,Ta,Aa;function o_(i,e=!1){if(i.flags|=8,e){i.next=Aa,Aa=i;return}i.next=Ta,Ta=i}function Zh(){s_++}function Jh(){if(--s_>0)return;if(Aa){let e=Aa;for(Aa=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;Ta;){let e=Ta;for(Ta=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){i||(i=n)}e=t}}if(i)throw i}function a_(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function l_(i){let e,t=i.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Qh(n),yv(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}i.deps=e,i.depsTail=t}function Mf(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(c_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function c_(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Ga)||(i.globalVersion=Ga,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Mf(i))))return;i.flags|=2;const e=i.dep,t=Ct,n=ki;Ct=i,ki=!0;try{a_(i);const r=i.fn(i._value);(e.version===0||qr(r,i._value))&&(i.flags|=128,i._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ct=t,ki=n,l_(i),i.flags&=-3}}function Qh(i,e=!1){const{dep:t,prevSub:n,nextSub:r}=i;if(n&&(n.nextSub=r,i.prevSub=void 0),r&&(r.prevSub=n,i.nextSub=void 0),t.subs===i&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Qh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function yv(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let ki=!0;const u_=[];function Er(){u_.push(ki),ki=!1}function br(){const i=u_.pop();ki=i===void 0?!0:i}function qd(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=Ct;Ct=void 0;try{e()}finally{Ct=t}}}let Ga=0;class Ev{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ed{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ct||!ki||Ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ct)t=this.activeLink=new Ev(Ct,this),Ct.deps?(t.prevDep=Ct.depsTail,Ct.depsTail.nextDep=t,Ct.depsTail=t):Ct.deps=Ct.depsTail=t,f_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Ct.depsTail,t.nextDep=void 0,Ct.depsTail.nextDep=t,Ct.depsTail=t,Ct.deps===t&&(Ct.deps=n)}return t}trigger(e){this.version++,Ga++,this.notify(e)}notify(e){Zh();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jh()}}}function f_(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)f_(n)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const yf=new WeakMap,Ls=Symbol(""),Ef=Symbol(""),Wa=Symbol("");function xn(i,e,t){if(ki&&Ct){let n=yf.get(i);n||yf.set(i,n=new Map);let r=n.get(t);r||(n.set(t,r=new ed),r.map=n,r.key=t),r.track()}}function dr(i,e,t,n,r,s){const o=yf.get(i);if(!o){Ga++;return}const a=l=>{l&&l.trigger()};if(Zh(),e==="clear")o.forEach(a);else{const l=Ze(i),c=l&&jh(t);if(l&&t==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Wa||!as(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Wa)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ls)),bo(i)&&a(o.get(Ef)));break;case"delete":l||(a(o.get(Ls)),bo(i)&&a(o.get(Ef)));break;case"set":bo(i)&&a(o.get(Ls));break}}Jh()}function Zs(i){const e=gt(i);return e===i?e:(xn(e,"iterate",Wa),Ri(i)?e:e.map(fn))}function Qc(i){return xn(i=gt(i),"iterate",Wa),i}const bv={__proto__:null,[Symbol.iterator](){return vu(this,Symbol.iterator,fn)},concat(...i){return Zs(this).concat(...i.map(e=>Ze(e)?Zs(e):e))},entries(){return vu(this,"entries",i=>(i[1]=fn(i[1]),i))},every(i,e){return ir(this,"every",i,e,void 0,arguments)},filter(i,e){return ir(this,"filter",i,e,t=>t.map(fn),arguments)},find(i,e){return ir(this,"find",i,e,fn,arguments)},findIndex(i,e){return ir(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return ir(this,"findLast",i,e,fn,arguments)},findLastIndex(i,e){return ir(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return ir(this,"forEach",i,e,void 0,arguments)},includes(...i){return xu(this,"includes",i)},indexOf(...i){return xu(this,"indexOf",i)},join(i){return Zs(this).join(i)},lastIndexOf(...i){return xu(this,"lastIndexOf",i)},map(i,e){return ir(this,"map",i,e,void 0,arguments)},pop(){return ra(this,"pop")},push(...i){return ra(this,"push",i)},reduce(i,...e){return Yd(this,"reduce",i,e)},reduceRight(i,...e){return Yd(this,"reduceRight",i,e)},shift(){return ra(this,"shift")},some(i,e){return ir(this,"some",i,e,void 0,arguments)},splice(...i){return ra(this,"splice",i)},toReversed(){return Zs(this).toReversed()},toSorted(i){return Zs(this).toSorted(i)},toSpliced(...i){return Zs(this).toSpliced(...i)},unshift(...i){return ra(this,"unshift",i)},values(){return vu(this,"values",fn)}};function vu(i,e,t){const n=Qc(i),r=n[e]();return n!==i&&!Ri(i)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Tv=Array.prototype;function ir(i,e,t,n,r,s){const o=Qc(i),a=o!==i&&!Ri(i),l=o[e];if(l!==Tv[e]){const f=l.apply(i,s);return a?fn(f):f}let c=t;o!==i&&(a?c=function(f,h){return t.call(this,fn(f),h,i)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&r?r(u):u}function Yd(i,e,t,n){const r=Qc(i);let s=t;return r!==i&&(Ri(i)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,i)}):s=function(o,a,l){return t.call(this,o,fn(a),l,i)}),r[e](s,...n)}function xu(i,e,t){const n=gt(i);xn(n,"iterate",Wa);const r=n[e](...t);return(r===-1||r===!1)&&rd(t[0])?(t[0]=gt(t[0]),n[e](...t)):r}function ra(i,e,t=[]){Er(),Zh();const n=gt(i)[e].apply(i,t);return Jh(),br(),n}const Av=qh("__proto__,__v_isRef,__isVue"),h_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(as));function wv(i){as(i)||(i=String(i));const e=gt(this);return xn(e,"has",i),e.hasOwnProperty(i)}class d_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return n===(r?s?Ov:g_:s?__:m_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=Ze(e);if(!r){let l;if(o&&(l=bv[t]))return l;if(t==="hasOwnProperty")return wv}const a=Reflect.get(e,t,Tn(e)?e:n);return(as(t)?h_.has(t):Av(t))||(r||xn(e,"get",t),s)?a:Tn(a)?o&&jh(t)?a:a.value:zt(a)?r?v_(a):nd(a):a}}class p_ extends d_{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const l=es(s);if(!Ri(n)&&!es(n)&&(s=gt(s),n=gt(n)),!Ze(e)&&Tn(s)&&!Tn(n))return l?!1:(s.value=n,!0)}const o=Ze(e)&&jh(t)?Number(t)<e.length:vt(e,t),a=Reflect.set(e,t,n,Tn(e)?e:r);return e===gt(r)&&(o?qr(n,s)&&dr(e,"set",t,n):dr(e,"add",t,n)),a}deleteProperty(e,t){const n=vt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&dr(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return(!as(t)||!h_.has(t))&&xn(e,"has",t),n}ownKeys(e){return xn(e,"iterate",Ze(e)?"length":Ls),Reflect.ownKeys(e)}}class Cv extends d_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rv=new p_,Pv=new Cv,Dv=new p_(!0);const bf=i=>i,vl=i=>Reflect.getPrototypeOf(i);function Lv(i,e,t){return function(...n){const r=this.__v_raw,s=gt(r),o=bo(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?bf:e?Tc:fn;return!e&&xn(s,"iterate",l?Ef:Ls),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xl(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Iv(i,e){const t={get(r){const s=this.__v_raw,o=gt(s),a=gt(r);i||(qr(r,a)&&xn(o,"get",r),xn(o,"get",a));const{has:l}=vl(o),c=e?bf:i?Tc:fn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!i&&xn(gt(r),"iterate",Ls),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=gt(s),a=gt(r);return i||(qr(r,a)&&xn(o,"has",r),xn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=gt(a),c=e?bf:i?Tc:fn;return!i&&xn(l,"iterate",Ls),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Hn(t,i?{add:xl("add"),set:xl("set"),delete:xl("delete"),clear:xl("clear")}:{add(r){!e&&!Ri(r)&&!es(r)&&(r=gt(r));const s=gt(this);return vl(s).has.call(s,r)||(s.add(r),dr(s,"add",r,r)),this},set(r,s){!e&&!Ri(s)&&!es(s)&&(s=gt(s));const o=gt(this),{has:a,get:l}=vl(o);let c=a.call(o,r);c||(r=gt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?qr(s,u)&&dr(o,"set",r,s):dr(o,"add",r,s),this},delete(r){const s=gt(this),{has:o,get:a}=vl(s);let l=o.call(s,r);l||(r=gt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&dr(s,"delete",r,void 0),c},clear(){const r=gt(this),s=r.size!==0,o=r.clear();return s&&dr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Lv(r,i,e)}),t}function td(i,e){const t=Iv(i,e);return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(vt(t,r)&&r in n?t:n,r,s)}const Uv={get:td(!1,!1)},Fv={get:td(!1,!0)},Nv={get:td(!0,!1)};const m_=new WeakMap,__=new WeakMap,g_=new WeakMap,Ov=new WeakMap;function kv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bv(i){return i.__v_skip||!Object.isExtensible(i)?0:kv(uv(i))}function nd(i){return es(i)?i:id(i,!1,Rv,Uv,m_)}function zv(i){return id(i,!1,Dv,Fv,__)}function v_(i){return id(i,!0,Pv,Nv,g_)}function id(i,e,t,n,r){if(!zt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=Bv(i);if(s===0)return i;const o=r.get(i);if(o)return o;const a=new Proxy(i,s===2?n:t);return r.set(i,a),a}function Ao(i){return es(i)?Ao(i.__v_raw):!!(i&&i.__v_isReactive)}function es(i){return!!(i&&i.__v_isReadonly)}function Ri(i){return!!(i&&i.__v_isShallow)}function rd(i){return i?!!i.__v_raw:!1}function gt(i){const e=i&&i.__v_raw;return e?gt(e):i}function Vv(i){return!vt(i,"__v_skip")&&Object.isExtensible(i)&&Sf(i,"__v_skip",!0),i}const fn=i=>zt(i)?nd(i):i,Tc=i=>zt(i)?v_(i):i;function Tn(i){return i?i.__v_isRef===!0:!1}function hn(i){return Hv(i,!1)}function Hv(i,e){return Tn(i)?i:new Gv(i,e)}class Gv{constructor(e,t){this.dep=new ed,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:gt(e),this._value=t?e:fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||Ri(e)||es(e);e=n?e:gt(e),qr(e,t)&&(this._rawValue=e,this._value=n?e:fn(e),this.dep.trigger())}}function x_(i){return Tn(i)?i.value:i}const Wv={get:(i,e,t)=>e==="__v_raw"?i:x_(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return Tn(r)&&!Tn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function S_(i){return Ao(i)?i:new Proxy(i,Wv)}class Xv{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ed(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ga-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Ct!==this)return o_(this,!0),!0}get value(){const e=this.dep.track();return c_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qv(i,e,t=!1){let n,r;return tt(i)?n=i:(n=i.get,r=i.set),new Xv(n,r,t)}const Sl={},Ac=new WeakMap;let Ss;function Yv(i,e=!1,t=Ss){if(t){let n=Ac.get(t);n||Ac.set(t,n=[]),n.push(i)}}function $v(i,e,t=At){const{immediate:n,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=v=>r?v:Ri(v)||r===!1||r===0?pr(v,1):pr(v);let u,f,h,d,g=!1,_=!1;if(Tn(i)?(f=()=>i.value,g=Ri(i)):Ao(i)?(f=()=>c(i),g=!0):Ze(i)?(_=!0,g=i.some(v=>Ao(v)||Ri(v)),f=()=>i.map(v=>{if(Tn(v))return v.value;if(Ao(v))return c(v);if(tt(v))return l?l(v,2):v()})):tt(i)?e?f=l?()=>l(i,2):i:f=()=>{if(h){Er();try{h()}finally{br()}}const v=Ss;Ss=u;try{return l?l(i,3,[d]):i(d)}finally{Ss=v}}:f=Qi,e&&r){const v=f,C=r===!0?1/0:r;f=()=>pr(v(),C)}const m=Mv(),p=()=>{u.stop(),m&&m.active&&$h(m.effects,u)};if(s&&e){const v=e;e=(...C)=>{v(...C),p()}}let b=_?new Array(i.length).fill(Sl):Sl;const E=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const C=u.run();if(r||g||(_?C.some((R,w)=>qr(R,b[w])):qr(C,b))){h&&h();const R=Ss;Ss=u;try{const w=[C,b===Sl?void 0:_&&b[0]===Sl?[]:b,d];b=C,l?l(e,3,w):e(...w)}finally{Ss=R}}}else u.run()};return a&&a(E),u=new r_(f),u.scheduler=o?()=>o(E,!1):E,d=v=>Yv(v,!1,u),h=u.onStop=()=>{const v=Ac.get(u);if(v){if(l)l(v,4);else for(const C of v)C();Ac.delete(u)}},e?n?E(!0):b=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function pr(i,e=1/0,t){if(e<=0||!zt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Tn(i))pr(i.value,e,t);else if(Ze(i))for(let n=0;n<i.length;n++)pr(i[n],e,t);else if(Km(i)||bo(i))i.forEach(n=>{pr(n,e,t)});else if(Qm(i)){for(const n in i)pr(i[n],e,t);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&pr(i[n],e,t)}return i}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cl(i,e,t,n){try{return n?i(...n):i()}catch(r){eu(r,e,t)}}function tr(i,e,t,n){if(tt(i)){const r=cl(i,e,t,n);return r&&Zm(r)&&r.catch(s=>{eu(s,e,t)}),r}if(Ze(i)){const r=[];for(let s=0;s<i.length;s++)r.push(tr(i[s],e,t,n));return r}}function eu(i,e,t,n=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||At;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(s){Er(),cl(s,null,10,[i,l,c]),br();return}}jv(i,t,r,n,o)}function jv(i,e,t,n=!0,r=!1){if(r)throw i;console.error(i)}const Nn=[];let Hi=-1;const wo=[];let kr=null,_o=0;const M_=Promise.resolve();let wc=null;function Bo(i){const e=wc||M_;return i?e.then(this?i.bind(this):i):e}function Kv(i){let e=Hi+1,t=Nn.length;for(;e<t;){const n=e+t>>>1,r=Nn[n],s=Xa(r);s<i||s===i&&r.flags&2?e=n+1:t=n}return e}function sd(i){if(!(i.flags&1)){const e=Xa(i),t=Nn[Nn.length-1];!t||!(i.flags&2)&&e>=Xa(t)?Nn.push(i):Nn.splice(Kv(e),0,i),i.flags|=1,y_()}}function y_(){wc||(wc=M_.then(b_))}function Zv(i){Ze(i)?wo.push(...i):kr&&i.id===-1?kr.splice(_o+1,0,i):i.flags&1||(wo.push(i),i.flags|=1),y_()}function $d(i,e,t=Hi+1){for(;t<Nn.length;t++){const n=Nn[t];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;Nn.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function E_(i){if(wo.length){const e=[...new Set(wo)].sort((t,n)=>Xa(t)-Xa(n));if(wo.length=0,kr){kr.push(...e);return}for(kr=e,_o=0;_o<kr.length;_o++){const t=kr[_o];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}kr=null,_o=0}}const Xa=i=>i.id==null?i.flags&2?-1:1/0:i.id;function b_(i){try{for(Hi=0;Hi<Nn.length;Hi++){const e=Nn[Hi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),cl(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hi<Nn.length;Hi++){const e=Nn[Hi];e&&(e.flags&=-2)}Hi=-1,Nn.length=0,E_(),wc=null,(Nn.length||wo.length)&&b_()}}let Ti=null,T_=null;function Cc(i){const e=Ti;return Ti=i,T_=i&&i.type.__scopeId||null,e}function Jv(i,e=Ti,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&ip(-1);const s=Cc(e);let o;try{o=i(...r)}finally{Cc(s),n._d&&ip(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Qv(i,e){if(Ti===null)return i;const t=ru(Ti),n=i.dirs||(i.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=At]=e[r];s&&(tt(s)&&(s={mounted:s,updated:s}),s.deep&&pr(o),n.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function us(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Er(),tr(l,t,8,[i.el,a,i,e]),br())}}const ex=Symbol("_vte"),tx=i=>i.__isTeleport;function od(i,e){i.shapeFlag&6&&i.component?(i.transition=e,od(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function A_(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function wa(i,e,t,n,r=!1){if(Ze(i)){i.forEach((g,_)=>wa(g,e&&(Ze(e)?e[_]:e),t,n,r));return}if(Ca(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&wa(i,e,t,n.component.subTree);return}const s=n.shapeFlag&4?ru(n.component):n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===At?a.refs={}:a.refs,f=a.setupState,h=gt(f),d=f===At?()=>!1:g=>vt(h,g);if(c!=null&&c!==l&&(en(c)?(u[c]=null,d(c)&&(f[c]=null)):Tn(c)&&(c.value=null)),tt(l))cl(l,a,12,[o,u]);else{const g=en(l),_=Tn(l);if(g||_){const m=()=>{if(i.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Ze(p)&&$h(p,s):Ze(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};o?(m.id=-1,ri(m,t)):m()}}}Zc().requestIdleCallback;Zc().cancelIdleCallback;const Ca=i=>!!i.type.__asyncLoader,w_=i=>i.type.__isKeepAlive;function nx(i,e){C_(i,"a",e)}function ix(i,e){C_(i,"da",e)}function C_(i,e,t=On){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(tu(e,n,t),t){let r=t.parent;for(;r&&r.parent;)w_(r.parent.vnode)&&rx(n,e,t,r),r=r.parent}}function rx(i,e,t,n){const r=tu(e,i,n,!0);R_(()=>{$h(n[e],r)},t)}function tu(i,e,t=On,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{Er();const a=ul(t),l=tr(e,t,i,o);return a(),br(),l});return n?r.unshift(s):r.push(s),s}}const Rr=i=>(e,t=On)=>{(!Ya||i==="sp")&&tu(i,(...n)=>e(...n),t)},sx=Rr("bm"),$s=Rr("m"),ox=Rr("bu"),ax=Rr("u"),lx=Rr("bum"),R_=Rr("um"),cx=Rr("sp"),ux=Rr("rtg"),fx=Rr("rtc");function hx(i,e=On){tu("ec",i,e)}const dx=Symbol.for("v-ndc");function zo(i,e,t,n){let r;const s=t,o=Ze(i);if(o||en(i)){const a=o&&Ao(i);let l=!1,c=!1;a&&(l=!Ri(i),c=es(i),i=Qc(i)),r=new Array(i.length);for(let u=0,f=i.length;u<f;u++)r[u]=e(l?c?Tc(fn(i[u])):fn(i[u]):i[u],u,void 0,s)}else if(typeof i=="number"){r=new Array(i);for(let a=0;a<i;a++)r[a]=e(a+1,a,void 0,s)}else if(zt(i))if(i[Symbol.iterator])r=Array.from(i,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(i);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(i[u],u,l,s)}}else r=[];return r}const Tf=i=>i?Z_(i)?ru(i):Tf(i.parent):null,Ra=Hn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Tf(i.parent),$root:i=>Tf(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>D_(i),$forceUpdate:i=>i.f||(i.f=()=>{sd(i.update)}),$nextTick:i=>i.n||(i.n=Bo.bind(i.proxy)),$watch:i=>Fx.bind(i)}),Su=(i,e)=>i!==At&&!i.__isScriptSetup&&vt(i,e),px={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Su(n,e))return o[e]=1,n[e];if(r!==At&&vt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&vt(c,e))return o[e]=3,s[e];if(t!==At&&vt(t,e))return o[e]=4,t[e];Af&&(o[e]=0)}}const u=Ra[e];let f,h;if(u)return e==="$attrs"&&xn(i.attrs,"get",""),u(i);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==At&&vt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,vt(h,e))return h[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Su(r,e)?(r[e]=t,!0):n!==At&&vt(n,e)?(n[e]=t,!0):vt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==At&&vt(i,o)||Su(e,o)||(a=s[0])&&vt(a,o)||vt(n,o)||vt(Ra,o)||vt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:vt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function jd(i){return Ze(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let Af=!0;function mx(i){const e=D_(i),t=i.proxy,n=i.ctx;Af=!1,e.beforeCreate&&Kd(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:E,unmounted:v,render:C,renderTracked:R,renderTriggered:w,errorCaptured:I,serverPrefetch:M,expose:y,inheritAttrs:L,components:O,directives:G,filters:$}=e;if(c&&_x(c,n,null),o)for(const H in o){const B=o[H];tt(B)&&(n[H]=B.bind(t))}if(r){const H=r.call(t,t);zt(H)&&(i.data=nd(H))}if(Af=!0,s)for(const H in s){const B=s[H],le=tt(B)?B.bind(t,t):tt(B.get)?B.get.bind(t,t):Qi,U=!tt(B)&&tt(B.set)?B.set.bind(t):Qi,me=iS({get:le,set:U});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>me.value,set:Le=>me.value=Le})}if(a)for(const H in a)P_(a[H],n,t,H);if(l){const H=tt(l)?l.call(t):l;Reflect.ownKeys(H).forEach(B=>{yx(B,H[B])})}u&&Kd(u,i,"c");function W(H,B){Ze(B)?B.forEach(le=>H(le.bind(t))):B&&H(B.bind(t))}if(W(sx,f),W($s,h),W(ox,d),W(ax,g),W(nx,_),W(ix,m),W(hx,I),W(fx,R),W(ux,w),W(lx,b),W(R_,v),W(cx,M),Ze(y))if(y.length){const H=i.exposed||(i.exposed={});y.forEach(B=>{Object.defineProperty(H,B,{get:()=>t[B],set:le=>t[B]=le,enumerable:!0})})}else i.exposed||(i.exposed={});C&&i.render===Qi&&(i.render=C),L!=null&&(i.inheritAttrs=L),O&&(i.components=O),G&&(i.directives=G),M&&A_(i)}function _x(i,e,t=Qi){Ze(i)&&(i=wf(i));for(const n in i){const r=i[n];let s;zt(r)?"default"in r?s=sc(r.from||n,r.default,!0):s=sc(r.from||n):s=sc(r),Tn(s)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[n]=s}}function Kd(i,e,t){tr(Ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function P_(i,e,t,n){let r=n.includes(".")?W_(t,n):()=>t[n];if(en(i)){const s=e[i];tt(s)&&yu(r,s)}else if(tt(i))yu(r,i.bind(t));else if(zt(i))if(Ze(i))i.forEach(s=>P_(s,e,t,n));else{const s=tt(i.handler)?i.handler.bind(t):e[i.handler];tt(s)&&yu(r,s,i)}}function D_(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>Rc(l,c,o,!0)),Rc(l,e,o)),zt(e)&&s.set(e,l),l}function Rc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&Rc(i,s,t,!0),r&&r.forEach(o=>Rc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=gx[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const gx={data:Zd,props:Jd,emits:Jd,methods:ma,computed:ma,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:ma,directives:ma,watch:xx,provide:Zd,inject:vx};function Zd(i,e){return e?i?function(){return Hn(tt(i)?i.call(this,this):i,tt(e)?e.call(this,this):e)}:e:i}function vx(i,e){return ma(wf(i),wf(e))}function wf(i){if(Ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Pn(i,e){return i?[...new Set([].concat(i,e))]:e}function ma(i,e){return i?Hn(Object.create(null),i,e):e}function Jd(i,e){return i?Ze(i)&&Ze(e)?[...new Set([...i,...e])]:Hn(Object.create(null),jd(i),jd(e??{})):e}function xx(i,e){if(!i)return e;if(!e)return i;const t=Hn(Object.create(null),i);for(const n in e)t[n]=Pn(i[n],e[n]);return t}function L_(){return{app:null,config:{isNativeTag:lv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sx=0;function Mx(i,e){return function(n,r=null){tt(n)||(n=Hn({},n)),r!=null&&!zt(r)&&(r=null);const s=L_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Sx++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:rS,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...f)):tt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Mn(n,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ru(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(tr(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Co;Co=c;try{return u()}finally{Co=f}}};return c}}let Co=null;function yx(i,e){if(On){let t=On.provides;const n=On.parent&&On.parent.provides;n===t&&(t=On.provides=Object.create(n)),t[i]=e}}function sc(i,e,t=!1){const n=Zx();if(n||Co){let r=Co?Co._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&i in r)return r[i];if(arguments.length>1)return t&&tt(e)?e.call(n&&n.proxy):e}}const I_={},U_=()=>Object.create(I_),F_=i=>Object.getPrototypeOf(i)===I_;function Ex(i,e,t,n=!1){const r={},s=U_();i.propsDefaults=Object.create(null),N_(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:zv(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function bx(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=gt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(nu(i.emitsOptions,h))continue;const d=e[h];if(l)if(vt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Qr(h);r[g]=Cf(l,a,g,d,i,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{N_(i,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!vt(e,f)&&((u=Ys(f))===f||!vt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Cf(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!vt(e,f))&&(delete s[f],c=!0)}c&&dr(i.attrs,"set","")}function N_(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(ba(l))continue;const c=e[l];let u;r&&vt(r,u=Qr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:nu(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=gt(t),c=a||At;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Cf(r,l,f,c[f],i,!vt(c,f))}}return o}function Cf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=vt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=r;if(t in c)n=c[t];else{const u=ul(r);n=c[t]=l.call(null,e),u()}}else n=l;r.ce&&r.ce._setProp(t,n)}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Ys(t))&&(n=!0))}return n}const Tx=new WeakMap;function O_(i,e,t=!1){const n=t?Tx:e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!tt(i)){const u=f=>{l=!0;const[h,d]=O_(f,e,!0);Hn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return zt(i)&&n.set(i,Eo),Eo;if(Ze(s))for(let u=0;u<s.length;u++){const f=Qr(s[u]);Qd(f)&&(o[f]=At)}else if(s)for(const u in s){const f=Qr(u);if(Qd(f)){const h=s[u],d=o[f]=Ze(h)||tt(h)?{type:h}:Hn({},h),g=d.type;let _=!1,m=!0;if(Ze(g))for(let p=0;p<g.length;++p){const b=g[p],E=tt(b)&&b.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=tt(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||vt(d,"default"))&&a.push(f)}}const c=[o,a];return zt(i)&&n.set(i,c),c}function Qd(i){return i[0]!=="$"&&!ba(i)}const ad=i=>i==="_"||i==="__"||i==="_ctx"||i==="$stable",ld=i=>Ze(i)?i.map(Xi):[Xi(i)],Ax=(i,e,t)=>{if(e._n)return e;const n=Jv((...r)=>ld(e(...r)),t);return n._c=!1,n},k_=(i,e,t)=>{const n=i._ctx;for(const r in i){if(ad(r))continue;const s=i[r];if(tt(s))e[r]=Ax(r,s,n);else if(s!=null){const o=ld(s);e[r]=()=>o}}},B_=(i,e)=>{const t=ld(e);i.slots.default=()=>t},z_=(i,e,t)=>{for(const n in e)(t||!ad(n))&&(i[n]=e[n])},wx=(i,e,t)=>{const n=i.slots=U_();if(i.vnode.shapeFlag&32){const r=e.__;r&&Sf(n,"__",r,!0);const s=e._;s?(z_(n,e,t),t&&Sf(n,"_",s,!0)):k_(e,n)}else e&&B_(i,e)},Cx=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=At;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:z_(r,e,t):(s=!e.$stable,k_(e,r)),o=e}else e&&(B_(i,e),o={default:1});if(s)for(const a in r)!ad(a)&&o[a]==null&&delete r[a]},ri=Hx;function Rx(i){return Px(i)}function Px(i,e){const t=Zc();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Qi,insertStaticContent:g}=i,_=(D,x,V,Y=null,Z=null,P=null,ae=void 0,j=null,re=!!x.dynamicChildren)=>{if(D===x)return;D&&!sa(D,x)&&(Y=oe(D),Le(D,Z,P,!0),D=null),x.patchFlag===-2&&(re=!1,x.dynamicChildren=null);const{type:ie,ref:ve,shapeFlag:A}=x;switch(ie){case iu:m(D,x,V,Y);break;case ts:p(D,x,V,Y);break;case oc:D==null&&b(x,V,Y,ae);break;case Sn:O(D,x,V,Y,Z,P,ae,j,re);break;default:A&1?C(D,x,V,Y,Z,P,ae,j,re):A&6?G(D,x,V,Y,Z,P,ae,j,re):(A&64||A&128)&&ie.process(D,x,V,Y,Z,P,ae,j,re,Pe)}ve!=null&&Z?wa(ve,D&&D.ref,P,x||D,!x):ve==null&&D&&D.ref!=null&&wa(D.ref,null,P,D,!0)},m=(D,x,V,Y)=>{if(D==null)n(x.el=a(x.children),V,Y);else{const Z=x.el=D.el;x.children!==D.children&&c(Z,x.children)}},p=(D,x,V,Y)=>{D==null?n(x.el=l(x.children||""),V,Y):x.el=D.el},b=(D,x,V,Y)=>{[D.el,D.anchor]=g(D.children,x,V,Y,D.el,D.anchor)},E=({el:D,anchor:x},V,Y)=>{let Z;for(;D&&D!==x;)Z=h(D),n(D,V,Y),D=Z;n(x,V,Y)},v=({el:D,anchor:x})=>{let V;for(;D&&D!==x;)V=h(D),r(D),D=V;r(x)},C=(D,x,V,Y,Z,P,ae,j,re)=>{x.type==="svg"?ae="svg":x.type==="math"&&(ae="mathml"),D==null?R(x,V,Y,Z,P,ae,j,re):M(D,x,Z,P,ae,j,re)},R=(D,x,V,Y,Z,P,ae,j)=>{let re,ie;const{props:ve,shapeFlag:A,transition:S,dirs:N}=D;if(re=D.el=o(D.type,P,ve&&ve.is,ve),A&8?u(re,D.children):A&16&&I(D.children,re,null,Y,Z,Mu(D,P),ae,j),N&&us(D,null,Y,"created"),w(re,D,D.scopeId,ae,Y),ve){for(const J in ve)J!=="value"&&!ba(J)&&s(re,J,null,ve[J],P,Y);"value"in ve&&s(re,"value",null,ve.value,P),(ie=ve.onVnodeBeforeMount)&&zi(ie,Y,D)}N&&us(D,null,Y,"beforeMount");const q=Dx(Z,S);q&&S.beforeEnter(re),n(re,x,V),((ie=ve&&ve.onVnodeMounted)||q||N)&&ri(()=>{ie&&zi(ie,Y,D),q&&S.enter(re),N&&us(D,null,Y,"mounted")},Z)},w=(D,x,V,Y,Z)=>{if(V&&d(D,V),Y)for(let P=0;P<Y.length;P++)d(D,Y[P]);if(Z){let P=Z.subTree;if(x===P||q_(P.type)&&(P.ssContent===x||P.ssFallback===x)){const ae=Z.vnode;w(D,ae,ae.scopeId,ae.slotScopeIds,Z.parent)}}},I=(D,x,V,Y,Z,P,ae,j,re=0)=>{for(let ie=re;ie<D.length;ie++){const ve=D[ie]=j?Br(D[ie]):Xi(D[ie]);_(null,ve,x,V,Y,Z,P,ae,j)}},M=(D,x,V,Y,Z,P,ae)=>{const j=x.el=D.el;let{patchFlag:re,dynamicChildren:ie,dirs:ve}=x;re|=D.patchFlag&16;const A=D.props||At,S=x.props||At;let N;if(V&&fs(V,!1),(N=S.onVnodeBeforeUpdate)&&zi(N,V,x,D),ve&&us(x,D,V,"beforeUpdate"),V&&fs(V,!0),(A.innerHTML&&S.innerHTML==null||A.textContent&&S.textContent==null)&&u(j,""),ie?y(D.dynamicChildren,ie,j,V,Y,Mu(x,Z),P):ae||B(D,x,j,null,V,Y,Mu(x,Z),P,!1),re>0){if(re&16)L(j,A,S,V,Z);else if(re&2&&A.class!==S.class&&s(j,"class",null,S.class,Z),re&4&&s(j,"style",A.style,S.style,Z),re&8){const q=x.dynamicProps;for(let J=0;J<q.length;J++){const X=q[J],Se=A[X],ue=S[X];(ue!==Se||X==="value")&&s(j,X,Se,ue,Z,V)}}re&1&&D.children!==x.children&&u(j,x.children)}else!ae&&ie==null&&L(j,A,S,V,Z);((N=S.onVnodeUpdated)||ve)&&ri(()=>{N&&zi(N,V,x,D),ve&&us(x,D,V,"updated")},Y)},y=(D,x,V,Y,Z,P,ae)=>{for(let j=0;j<x.length;j++){const re=D[j],ie=x[j],ve=re.el&&(re.type===Sn||!sa(re,ie)||re.shapeFlag&198)?f(re.el):V;_(re,ie,ve,null,Y,Z,P,ae,!0)}},L=(D,x,V,Y,Z)=>{if(x!==V){if(x!==At)for(const P in x)!ba(P)&&!(P in V)&&s(D,P,x[P],null,Z,Y);for(const P in V){if(ba(P))continue;const ae=V[P],j=x[P];ae!==j&&P!=="value"&&s(D,P,j,ae,Z,Y)}"value"in V&&s(D,"value",x.value,V.value,Z)}},O=(D,x,V,Y,Z,P,ae,j,re)=>{const ie=x.el=D?D.el:a(""),ve=x.anchor=D?D.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:N}=x;N&&(j=j?j.concat(N):N),D==null?(n(ie,V,Y),n(ve,V,Y),I(x.children||[],V,ve,Z,P,ae,j,re)):A>0&&A&64&&S&&D.dynamicChildren?(y(D.dynamicChildren,S,V,Z,P,ae,j),(x.key!=null||Z&&x===Z.subTree)&&V_(D,x,!0)):B(D,x,V,ve,Z,P,ae,j,re)},G=(D,x,V,Y,Z,P,ae,j,re)=>{x.slotScopeIds=j,D==null?x.shapeFlag&512?Z.ctx.activate(x,V,Y,ae,re):$(x,V,Y,Z,P,ae,re):ee(D,x,re)},$=(D,x,V,Y,Z,P,ae)=>{const j=D.component=Kx(D,Y,Z);if(w_(D)&&(j.ctx.renderer=Pe),Jx(j,!1,ae),j.asyncDep){if(Z&&Z.registerDep(j,W,ae),!D.el){const re=j.subTree=Mn(ts);p(null,re,x,V),D.placeholder=re.el}}else W(j,D,x,V,Z,P,ae)},ee=(D,x,V)=>{const Y=x.component=D.component;if(zx(D,x,V))if(Y.asyncDep&&!Y.asyncResolved){H(Y,x,V);return}else Y.next=x,Y.update();else x.el=D.el,Y.vnode=x},W=(D,x,V,Y,Z,P,ae)=>{const j=()=>{if(D.isMounted){let{next:A,bu:S,u:N,parent:q,vnode:J}=D;{const ge=H_(D);if(ge){A&&(A.el=J.el,H(D,A,ae)),ge.asyncDep.then(()=>{D.isUnmounted||j()});return}}let X=A,Se;fs(D,!1),A?(A.el=J.el,H(D,A,ae)):A=J,S&&mu(S),(Se=A.props&&A.props.onVnodeBeforeUpdate)&&zi(Se,q,A,J),fs(D,!0);const ue=tp(D),Ae=D.subTree;D.subTree=ue,_(Ae,ue,f(Ae.el),oe(Ae),D,Z,P),A.el=ue.el,X===null&&Vx(D,ue.el),N&&ri(N,Z),(Se=A.props&&A.props.onVnodeUpdated)&&ri(()=>zi(Se,q,A,J),Z)}else{let A;const{el:S,props:N}=x,{bm:q,m:J,parent:X,root:Se,type:ue}=D,Ae=Ca(x);fs(D,!1),q&&mu(q),!Ae&&(A=N&&N.onVnodeBeforeMount)&&zi(A,X,x),fs(D,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(ue);const ge=D.subTree=tp(D);_(null,ge,V,Y,D,Z,P),x.el=ge.el}if(J&&ri(J,Z),!Ae&&(A=N&&N.onVnodeMounted)){const ge=x;ri(()=>zi(A,X,ge),Z)}(x.shapeFlag&256||X&&Ca(X.vnode)&&X.vnode.shapeFlag&256)&&D.a&&ri(D.a,Z),D.isMounted=!0,x=V=Y=null}};D.scope.on();const re=D.effect=new r_(j);D.scope.off();const ie=D.update=re.run.bind(re),ve=D.job=re.runIfDirty.bind(re);ve.i=D,ve.id=D.uid,re.scheduler=()=>sd(ve),fs(D,!0),ie()},H=(D,x,V)=>{x.component=D;const Y=D.vnode.props;D.vnode=x,D.next=null,bx(D,x.props,Y,V),Cx(D,x.children,V),Er(),$d(D),br()},B=(D,x,V,Y,Z,P,ae,j,re=!1)=>{const ie=D&&D.children,ve=D?D.shapeFlag:0,A=x.children,{patchFlag:S,shapeFlag:N}=x;if(S>0){if(S&128){U(ie,A,V,Y,Z,P,ae,j,re);return}else if(S&256){le(ie,A,V,Y,Z,P,ae,j,re);return}}N&8?(ve&16&&he(ie,Z,P),A!==ie&&u(V,A)):ve&16?N&16?U(ie,A,V,Y,Z,P,ae,j,re):he(ie,Z,P,!0):(ve&8&&u(V,""),N&16&&I(A,V,Y,Z,P,ae,j,re))},le=(D,x,V,Y,Z,P,ae,j,re)=>{D=D||Eo,x=x||Eo;const ie=D.length,ve=x.length,A=Math.min(ie,ve);let S;for(S=0;S<A;S++){const N=x[S]=re?Br(x[S]):Xi(x[S]);_(D[S],N,V,null,Z,P,ae,j,re)}ie>ve?he(D,Z,P,!0,!1,A):I(x,V,Y,Z,P,ae,j,re,A)},U=(D,x,V,Y,Z,P,ae,j,re)=>{let ie=0;const ve=x.length;let A=D.length-1,S=ve-1;for(;ie<=A&&ie<=S;){const N=D[ie],q=x[ie]=re?Br(x[ie]):Xi(x[ie]);if(sa(N,q))_(N,q,V,null,Z,P,ae,j,re);else break;ie++}for(;ie<=A&&ie<=S;){const N=D[A],q=x[S]=re?Br(x[S]):Xi(x[S]);if(sa(N,q))_(N,q,V,null,Z,P,ae,j,re);else break;A--,S--}if(ie>A){if(ie<=S){const N=S+1,q=N<ve?x[N].el:Y;for(;ie<=S;)_(null,x[ie]=re?Br(x[ie]):Xi(x[ie]),V,q,Z,P,ae,j,re),ie++}}else if(ie>S)for(;ie<=A;)Le(D[ie],Z,P,!0),ie++;else{const N=ie,q=ie,J=new Map;for(ie=q;ie<=S;ie++){const Ie=x[ie]=re?Br(x[ie]):Xi(x[ie]);Ie.key!=null&&J.set(Ie.key,ie)}let X,Se=0;const ue=S-q+1;let Ae=!1,ge=0;const de=new Array(ue);for(ie=0;ie<ue;ie++)de[ie]=0;for(ie=N;ie<=A;ie++){const Ie=D[ie];if(Se>=ue){Le(Ie,Z,P,!0);continue}let we;if(Ie.key!=null)we=J.get(Ie.key);else for(X=q;X<=S;X++)if(de[X-q]===0&&sa(Ie,x[X])){we=X;break}we===void 0?Le(Ie,Z,P,!0):(de[we-q]=ie+1,we>=ge?ge=we:Ae=!0,_(Ie,x[we],V,null,Z,P,ae,j,re),Se++)}const Me=Ae?Lx(de):Eo;for(X=Me.length-1,ie=ue-1;ie>=0;ie--){const Ie=q+ie,we=x[Ie],xe=x[Ie+1],Xe=Ie+1<ve?xe.el||xe.placeholder:Y;de[ie]===0?_(null,we,V,Xe,Z,P,ae,j,re):Ae&&(X<0||ie!==Me[X]?me(we,V,Xe,2):X--)}}},me=(D,x,V,Y,Z=null)=>{const{el:P,type:ae,transition:j,children:re,shapeFlag:ie}=D;if(ie&6){me(D.component.subTree,x,V,Y);return}if(ie&128){D.suspense.move(x,V,Y);return}if(ie&64){ae.move(D,x,V,Pe);return}if(ae===Sn){n(P,x,V);for(let A=0;A<re.length;A++)me(re[A],x,V,Y);n(D.anchor,x,V);return}if(ae===oc){E(D,x,V);return}if(Y!==2&&ie&1&&j)if(Y===0)j.beforeEnter(P),n(P,x,V),ri(()=>j.enter(P),Z);else{const{leave:A,delayLeave:S,afterLeave:N}=j,q=()=>{D.ctx.isUnmounted?r(P):n(P,x,V)},J=()=>{A(P,()=>{q(),N&&N()})};S?S(P,q,J):J()}else n(P,x,V)},Le=(D,x,V,Y=!1,Z=!1)=>{const{type:P,props:ae,ref:j,children:re,dynamicChildren:ie,shapeFlag:ve,patchFlag:A,dirs:S,cacheIndex:N}=D;if(A===-2&&(Z=!1),j!=null&&(Er(),wa(j,null,V,D,!0),br()),N!=null&&(x.renderCache[N]=void 0),ve&256){x.ctx.deactivate(D);return}const q=ve&1&&S,J=!Ca(D);let X;if(J&&(X=ae&&ae.onVnodeBeforeUnmount)&&zi(X,x,D),ve&6)te(D.component,V,Y);else{if(ve&128){D.suspense.unmount(V,Y);return}q&&us(D,null,x,"beforeUnmount"),ve&64?D.type.remove(D,x,V,Pe,Y):ie&&!ie.hasOnce&&(P!==Sn||A>0&&A&64)?he(ie,x,V,!1,!0):(P===Sn&&A&384||!Z&&ve&16)&&he(re,x,V),Y&&Ke(D)}(J&&(X=ae&&ae.onVnodeUnmounted)||q)&&ri(()=>{X&&zi(X,x,D),q&&us(D,null,x,"unmounted")},V)},Ke=D=>{const{type:x,el:V,anchor:Y,transition:Z}=D;if(x===Sn){Ve(V,Y);return}if(x===oc){v(D);return}const P=()=>{r(V),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:ae,delayLeave:j}=Z,re=()=>ae(V,P);j?j(D.el,P,re):re()}else P()},Ve=(D,x)=>{let V;for(;D!==x;)V=h(D),r(D),D=V;r(x)},te=(D,x,V)=>{const{bum:Y,scope:Z,job:P,subTree:ae,um:j,m:re,a:ie,parent:ve,slots:{__:A}}=D;ep(re),ep(ie),Y&&mu(Y),ve&&Ze(A)&&A.forEach(S=>{ve.renderCache[S]=void 0}),Z.stop(),P&&(P.flags|=8,Le(ae,D,x,V)),j&&ri(j,x),ri(()=>{D.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},he=(D,x,V,Y=!1,Z=!1,P=0)=>{for(let ae=P;ae<D.length;ae++)Le(D[ae],x,V,Y,Z)},oe=D=>{if(D.shapeFlag&6)return oe(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const x=h(D.anchor||D.el),V=x&&x[ex];return V?h(V):x};let be=!1;const Te=(D,x,V)=>{D==null?x._vnode&&Le(x._vnode,null,null,!0):_(x._vnode||null,D,x,null,null,null,V),x._vnode=D,be||(be=!0,$d(),E_(),be=!1)},Pe={p:_,um:Le,m:me,r:Ke,mt:$,mc:I,pc:B,pbc:y,n:oe,o:i};return{render:Te,hydrate:void 0,createApp:Mx(Te)}}function Mu({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fs({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Dx(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function V_(i,e,t=!1){const n=i.children,r=e.children;if(Ze(n)&&Ze(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Br(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&V_(o,a)),a.type===iu&&(a.el=o.el),a.type===ts&&!a.el&&(a.el=o.el)}}function Lx(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function H_(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:H_(e)}function ep(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Ix=Symbol.for("v-scx"),Ux=()=>sc(Ix);function yu(i,e,t){return G_(i,e,t)}function G_(i,e,t=At){const{immediate:n,deep:r,flush:s,once:o}=t,a=Hn({},t),l=e&&n||!e&&s!=="post";let c;if(Ya){if(s==="sync"){const d=Ux();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qi,d.resume=Qi,d.pause=Qi,d}}const u=On;a.call=(d,g,_)=>tr(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{ri(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():sd(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=$v(i,e,a);return Ya&&(c?c.push(h):l&&h()),h}function Fx(i,e,t){const n=this.proxy,r=en(i)?i.includes(".")?W_(n,i):()=>n[i]:i.bind(n,n);let s;tt(e)?s=e:(s=e.handler,t=e);const o=ul(this),a=G_(r,s.bind(n),t);return o(),a}function W_(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const Nx=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${Qr(e)}Modifiers`]||i[`${Ys(e)}Modifiers`];function Ox(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||At;let r=t;const s=e.startsWith("update:"),o=s&&Nx(n,e.slice(7));o&&(o.trim&&(r=t.map(u=>en(u)?u.trim():u)),o.number&&(r=t.map(dv)));let a,l=n[a=pu(e)]||n[a=pu(Qr(e))];!l&&s&&(l=n[a=pu(Ys(e))]),l&&tr(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,tr(c,i,6,r)}}function X_(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!tt(i)){const l=c=>{const u=X_(c,e,!0);u&&(a=!0,Hn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(zt(i)&&n.set(i,null),null):(Ze(s)?s.forEach(l=>o[l]=null):Hn(o,s),zt(i)&&n.set(i,o),o)}function nu(i,e){return!i||!$c(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(i,e[0].toLowerCase()+e.slice(1))||vt(i,Ys(e))||vt(i,e))}function tp(i){const{type:e,vnode:t,proxy:n,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=i,m=Cc(i);let p,b;try{if(t.shapeFlag&4){const v=r||n,C=v;p=Xi(c.call(C,v,u,f,d,h,g)),b=a}else{const v=e;p=Xi(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),b=e.props?a:kx(a)}}catch(v){Pa.length=0,eu(v,i,1),p=Mn(ts)}let E=p;if(b&&_!==!1){const v=Object.keys(b),{shapeFlag:C}=E;v.length&&C&7&&(s&&v.some(Yh)&&(b=Bx(b,s)),E=Vo(E,b,!1,!0))}return t.dirs&&(E=Vo(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&od(E,t.transition),p=E,Cc(m),p}const kx=i=>{let e;for(const t in i)(t==="class"||t==="style"||$c(t))&&((e||(e={}))[t]=i[t]);return e},Bx=(i,e)=>{const t={};for(const n in i)(!Yh(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function zx(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?np(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!nu(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?np(n,o,c):!0:!!o;return!1}function np(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!nu(t,s))return!0}return!1}function Vx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const q_=i=>i.__isSuspense;function Hx(i,e){e&&e.pendingBranch?Ze(i)?e.effects.push(...i):e.effects.push(i):Zv(i)}const Sn=Symbol.for("v-fgt"),iu=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),oc=Symbol.for("v-stc"),Pa=[];let fi=null;function It(i=!1){Pa.push(fi=i?null:[])}function Gx(){Pa.pop(),fi=Pa[Pa.length-1]||null}let qa=1;function ip(i,e=!1){qa+=i,i<0&&fi&&e&&(fi.hasOnce=!0)}function Y_(i){return i.dynamicChildren=qa>0?fi||Eo:null,Gx(),qa>0&&fi&&fi.push(i),i}function kt(i,e,t,n,r,s){return Y_($e(i,e,t,n,r,s,!0))}function Wx(i,e,t,n,r){return Y_(Mn(i,e,t,n,r,!0))}function $_(i){return i?i.__v_isVNode===!0:!1}function sa(i,e){return i.type===e.type&&i.key===e.key}const j_=({key:i})=>i??null,ac=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?en(i)||Tn(i)||tt(i)?{i:Ti,r:i,k:e,f:!!t}:i:null);function $e(i,e=null,t=null,n=0,r=null,s=i===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&j_(e),ref:e&&ac(e),scopeId:T_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ti};return a?(cd(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=en(t)?8:16),qa>0&&!o&&fi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fi.push(l),l}const Mn=Xx;function Xx(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===dx)&&(i=ts),$_(i)){const a=Vo(i,e,!0);return t&&cd(a,t),qa>0&&!s&&fi&&(a.shapeFlag&6?fi[fi.indexOf(i)]=a:fi.push(a)),a.patchFlag=-2,a}if(nS(i)&&(i=i.__vccOpts),e){e=qx(e);let{class:a,style:l}=e;a&&!en(a)&&(e.class=Jc(a)),zt(l)&&(rd(l)&&!Ze(l)&&(l=Hn({},l)),e.style=Kh(l))}const o=en(i)?1:q_(i)?128:tx(i)?64:zt(i)?4:tt(i)?2:0;return $e(i,e,t,n,r,o,s,!0)}function qx(i){return i?rd(i)||F_(i)?Hn({},i):i:null}function Vo(i,e,t=!1,n=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=i,c=e?Yx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&j_(c),ref:e&&e.ref?t&&s?Ze(s)?s.concat(ac(e)):[s,ac(e)]:ac(e):s,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sn?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Vo(i.ssContent),ssFallback:i.ssFallback&&Vo(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&od(u,l.clone(u)),u}function K_(i=" ",e=0){return Mn(iu,null,i,e)}function lc(i,e){const t=Mn(oc,null,i);return t.staticCount=e,t}function Pc(i="",e=!1){return e?(It(),Wx(ts,null,i)):Mn(ts,null,i)}function Xi(i){return i==null||typeof i=="boolean"?Mn(ts):Ze(i)?Mn(Sn,null,i.slice()):$_(i)?Br(i):Mn(iu,null,String(i))}function Br(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Vo(i)}function cd(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ze(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),cd(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!F_(e)?e._ctx=Ti:r===3&&Ti&&(Ti.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Ti},t=32):(e=String(e),n&64?(t=16,e=[K_(e)]):t=8);i.children=e,i.shapeFlag|=t}function Yx(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Jc([e.class,n.class]));else if(r==="style")e.style=Kh([e.style,n.style]);else if($c(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function zi(i,e,t,n=null){tr(i,e,7,[t,n])}const $x=L_();let jx=0;function Kx(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||$x,s={uid:jx++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:O_(n,r),emitsOptions:X_(n,r),emit:null,emitted:null,propsDefaults:At,inheritAttrs:n.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ox.bind(null,s),i.ce&&i.ce(s),s}let On=null;const Zx=()=>On||Ti;let Dc,Rf;{const i=Zc(),e=(t,n)=>{let r;return(r=i[t])||(r=i[t]=[]),r.push(n),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Dc=e("__VUE_INSTANCE_SETTERS__",t=>On=t),Rf=e("__VUE_SSR_SETTERS__",t=>Ya=t)}const ul=i=>{const e=On;return Dc(i),i.scope.on(),()=>{i.scope.off(),Dc(e)}},rp=()=>{On&&On.scope.off(),Dc(null)};function Z_(i){return i.vnode.shapeFlag&4}let Ya=!1;function Jx(i,e=!1,t=!1){e&&Rf(e);const{props:n,children:r}=i.vnode,s=Z_(i);Ex(i,n,s,e),wx(i,r,t||e);const o=s?Qx(i,e):void 0;return e&&Rf(!1),o}function Qx(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,px);const{setup:n}=t;if(n){Er();const r=i.setupContext=n.length>1?tS(i):null,s=ul(i),o=cl(n,i,0,[i.props,r]),a=Zm(o);if(br(),s(),(a||i.sp)&&!Ca(i)&&A_(i),a){if(o.then(rp,rp),e)return o.then(l=>{sp(i,l)}).catch(l=>{eu(l,i,0)});i.asyncDep=o}else sp(i,o)}else J_(i)}function sp(i,e,t){tt(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:zt(e)&&(i.setupState=S_(e)),J_(i)}function J_(i,e,t){const n=i.type;i.render||(i.render=n.render||Qi);{const r=ul(i);Er();try{mx(i)}finally{br(),r()}}}const eS={get(i,e){return xn(i,"get",""),i[e]}};function tS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,eS),slots:i.slots,emit:i.emit,expose:e}}function ru(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(S_(Vv(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ra)return Ra[t](i)},has(e,t){return t in e||t in Ra}})):i.proxy}function nS(i){return tt(i)&&"__vccOpts"in i}const iS=(i,e)=>qv(i,e,Ya),rS="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pf;const op=typeof window<"u"&&window.trustedTypes;if(op)try{Pf=op.createPolicy("vue",{createHTML:i=>i})}catch{}const Q_=Pf?i=>Pf.createHTML(i):i=>i,sS="http://www.w3.org/2000/svg",oS="http://www.w3.org/1998/Math/MathML",ur=typeof document<"u"?document:null,ap=ur&&ur.createElement("template"),aS={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e==="svg"?ur.createElementNS(sS,i):e==="mathml"?ur.createElementNS(oS,i):t?ur.createElement(i,{is:t}):ur.createElement(i);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>ur.createTextNode(i),createComment:i=>ur.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>ur.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ap.innerHTML=Q_(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=ap.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},lS=Symbol("_vtc");function cS(i,e,t){const n=i[lS];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Lc=Symbol("_vod"),eg=Symbol("_vsh"),uS={beforeMount(i,{value:e},{transition:t}){i[Lc]=i.style.display==="none"?"":i.style.display,t&&e?t.beforeEnter(i):oa(i,e)},mounted(i,{value:e},{transition:t}){t&&e&&t.enter(i)},updated(i,{value:e,oldValue:t},{transition:n}){!e!=!t&&(n?e?(n.beforeEnter(i),oa(i,!0),n.enter(i)):n.leave(i,()=>{oa(i,!1)}):oa(i,e))},beforeUnmount(i,{value:e}){oa(i,e)}};function oa(i,e){i.style.display=e?i[Lc]:"none",i[eg]=!e}const fS=Symbol(""),hS=/(^|;)\s*display\s*:/;function dS(i,e,t){const n=i.style,r=en(t);let s=!1;if(t&&!r){if(e)if(en(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&cc(n,a,"")}else for(const o in e)t[o]==null&&cc(n,o,"");for(const o in t)o==="display"&&(s=!0),cc(n,o,t[o])}else if(r){if(e!==t){const o=n[fS];o&&(t+=";"+o),n.cssText=t,s=hS.test(t)}}else e&&i.removeAttribute("style");Lc in i&&(i[Lc]=s?n.display:"",i[eg]&&(n.display="none"))}const lp=/\s*!important$/;function cc(i,e,t){if(Ze(t))t.forEach(n=>cc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=pS(i,e);lp.test(t)?i.setProperty(Ys(n),t.replace(lp,""),"important"):i[n]=t}}const cp=["Webkit","Moz","ms"],Eu={};function pS(i,e){const t=Eu[e];if(t)return t;let n=Qr(e);if(n!=="filter"&&n in i)return Eu[e]=n;n=e_(n);for(let r=0;r<cp.length;r++){const s=cp[r]+n;if(s in i)return Eu[e]=s}return e}const up="http://www.w3.org/1999/xlink";function fp(i,e,t,n,r,s=xv(e)){n&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(up,e.slice(6,e.length)):i.setAttributeNS(up,e,t):t==null||s&&!t_(t)?i.removeAttribute(e):i.setAttribute(e,s?"":as(t)?String(t):t)}function hp(i,e,t,n,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Q_(t):t);return}const s=i.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let o=!1;if(t===""||t==null){const a=typeof i[e];a==="boolean"?t=t_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{i[e]=t}catch{}o&&i.removeAttribute(r||e)}function mS(i,e,t,n){i.addEventListener(e,t,n)}function _S(i,e,t,n){i.removeEventListener(e,t,n)}const dp=Symbol("_vei");function gS(i,e,t,n,r=null){const s=i[dp]||(i[dp]={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=vS(e);if(n){const c=s[e]=MS(n,r);mS(i,a,c,l)}else o&&(_S(i,a,o,l),s[e]=void 0)}}const pp=/(?:Once|Passive|Capture)$/;function vS(i){let e;if(pp.test(i)){e={};let n;for(;n=i.match(pp);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Ys(i.slice(2)),e]}let bu=0;const xS=Promise.resolve(),SS=()=>bu||(xS.then(()=>bu=0),bu=Date.now());function MS(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;tr(yS(n,t.value),e,5,[n])};return t.value=i,t.attached=SS(),t}function yS(i,e){if(Ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const mp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,ES=(i,e,t,n,r,s)=>{const o=r==="svg";e==="class"?cS(i,n,o):e==="style"?dS(i,t,n):$c(e)?Yh(e)||gS(i,e,t,n,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bS(i,e,n,o))?(hp(i,e,n),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fp(i,e,n,o,s,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!en(n))?hp(i,Qr(e),n,s,e):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),fp(i,e,n,o))};function bS(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&mp(e)&&tt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=i.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return mp(e)&&en(t)?!1:e in i}const TS=Hn({patchProp:ES},aS);let _p;function AS(){return _p||(_p=Rx(TS))}const wS=(...i)=>{const e=AS().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=RS(n);if(!r)return;const s=e._component;!tt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,CS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function CS(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function RS(i){return en(i)?document.querySelector(i):i}function fr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function tg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},ud,pn,Ut,Ai=1e8,Tt=1/Ai,Df=Math.PI*2,PS=Df/4,DS=0,ng=Math.sqrt,LS=Math.cos,IS=Math.sin,un=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},Tr=function(e){return typeof e=="number"},fd=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},hd=function(){return typeof window<"u"},Ml=function(e){return Ht(e)||un(e)},ig=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,Lf=/(?:-?\.?\d|\.)+/gi,rg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,sg=/[+-]=-?[.\d]+/,og=/[^,'"\[\]\s]+/gi,US=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ot,Gi,If,dd,pi={},Ic={},ag,lg=function(e){return(Ic=Go(e,pi))&&Jn},pd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},$a=function(e,t){return!t&&console.warn(e)},cg=function(e,t){return e&&(pi[e]=t)&&Ic&&(Ic[e]=t)||pi},ja=function(){return 0},FS={suppressEvents:!0,isStart:!0,kill:!1},uc={suppressEvents:!0,kill:!1},NS={suppressEvents:!0},md={},Yr=[],Uf={},ug,ai={},Au={},gp=30,fc=[],_d="",gd=function(e){var t=e[0],n,r;if(nr(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=fc.length;r--&&!fc[r].targetTest(t););n=fc[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Ug(e[r],n)))||e.splice(r,1);return e},Is=function(e){return e._gsap||gd(wi(e))[0]._gsap},fg=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():fd(n)&&e.getAttribute&&e.getAttribute(t)||n},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},Ro=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},OS=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Uc=function(){var e=Yr.length,t=Yr.slice(0),n,r;for(Uf={},Yr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},vd=function(e){return!!(e._initted||e._startAt||e.add)},hg=function(e,t,n,r){Yr.length&&!pn&&Uc(),e.render(t,n,!!(pn&&t<0&&vd(e))),Yr.length&&!pn&&Uc()},dg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(og).length<2?t:un(e)?e.trim():e},pg=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},kS=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Go=function(e,t){for(var n in t)e[n]=t[n];return e},vp=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Fc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Da=function(e){var t=e.parent||Ot,n=e.keyframes?kS(An(e.keyframes)):mi;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},BS=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},mg=function(e,t,n,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},su=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ff=function(e,t,n,r){return e._startAt&&(pn?e._startAt.revert(uc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},VS=function i(e){return!e||e._ts&&i(e.parent)},xp=function(e){return e._repeat?Wo(e._tTime,e=e.duration()+e._rDelay)*e:0},Wo=function(e,t){var n=Math.floor(e=Zt(e/t));return e&&n===e?n-1:n},Nc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ou=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},au=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ou(e),n._dirty||Us(n,e)),e},_g=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nc(e.rawTime(),t),(!t._dur||fl(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Yi=function(e,t,n,r){return t.parent&&ns(t),t._start=Zt((Tr(n)?n:n||e!==Ot?Si(e,n,t):e._time)+t._delay),t._end=Zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),mg(e,t,"_first","_last",e._sort?"_start":0),Nf(t)||(e._recent=t),r||_g(e,t),e._ts<0&&au(e,e._tTime),e},gg=function(e,t){return(pi.ScrollTrigger||pd("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},vg=function(e,t,n,r,s){if(Sd(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ug!==ci.frame)return Yr.push(e),e._lazy=[s,r],1},HS=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Nf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},GS=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&HS(e)&&!(!e._initted&&Nf(e))||(e._ts<0||e._dp._ts<0)&&!Nf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=fl(0,e._tDur,t),u=Wo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||pn||r||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&vg(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ff(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&ns(e,1),!n&&!pn&&(hi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},WS=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Xo=function(e,t,n,r){var s=e._repeat,o=Zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&au(e,e._tTime=e._tDur*a),e.parent&&ou(e),n||Us(e.parent,e),e},Sp=function(e){return e instanceof kn?Us(e):Xo(e,e._dur)},XS={_start:0,endTime:ja,totalDuration:ja},Si=function i(e,t,n){var r=e.labels,s=e._recent||XS,o=e.duration()>=Ai?s.endTime(!1):e._dur,a,l,c;return un(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},La=function(e,t,n){var r=Tr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yn(l.vars.inherit)&&l.parent;o.immediateRender=Yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Kt(t[0],o,t[s+1])},ls=function(e,t){return e||e===0?t(e):t},fl=function(e,t,n){return n<e?e:n>t?t:n},yn=function(e,t){return!un(e)||!(t=US.exec(e))?"":t[1]},qS=function(e,t,n){return ls(n,function(r){return fl(e,t,r)})},Of=[].slice,xg=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==Gi},YS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return un(r)&&!t||xg(r,1)?(s=n).push.apply(s,wi(r)):n.push(r)})||n},wi=function(e,t,n){return Ut&&!t&&Ut.selector?Ut.selector(e):un(e)&&!n&&(If||!qo())?Of.call((t||dd).querySelectorAll(e),0):An(e)?YS(e,n):xg(e)?Of.call(e,0):e?[e]:[]},kf=function(e){return e=wi(e)[0]||$a("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return wi(t,n.querySelectorAll?n:n===e?$a("Invalid scope")||dd.createElement("div"):e)}},Sg=function(e){return e.sort(function(){return .5-Math.random()})},Mg=function(e){if(Ht(e))return e;var t=nr(e)?e:{each:e},n=Fs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return un(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,b,E,v,C,R,w,I,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!M){for(w=-Ai;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*u-.5:r%M,b=M===Ai?0:l?_*f/M-.5:r/M|0,w=0,I=Ai,R=0;R<_;R++)E=R%M-p,v=b-(R/M|0),m[R]=C=c?Math.abs(c==="y"?v:E):ng(E*E+v*v),C>w&&(w=C),C<I&&(I=C);r==="random"&&Sg(m),m.max=w-I,m.min=I,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=yn(t.amount||t.each)||0,n=n&&_<0?Dg(n):n}return _=(m[h]-m.min)/m.max||0,Zt(m.b+(n?n(_):_)*m.v)+m.u}},Bf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Tr(n)?0:yn(n))}},yg=function(e,t){var n=An(e),r,s;return!n&&nr(e)&&(r=n=e.radius||Ai,e.values?(e=wi(e.values),(s=!Tr(e[0]))&&(r*=r)):e=Bf(e.increment)),ls(t,n?Ht(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ai,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Tr(o)?u:u+yn(o)}:Bf(e))},Eg=function(e,t,n,r){return ls(An(e)?!t:n===!0?!!(n=0):!r,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},$S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},jS=function(e,t){return function(n){return e(parseFloat(n))+(t||yn(n))}},KS=function(e,t,n){return Tg(e,t,0,1,n)},bg=function(e,t,n){return ls(n,function(r){return e[~~t(r)]})},ZS=function i(e,t,n){var r=t-e;return An(e)?bg(e,i(0,e.length),t):ls(n,function(s){return(r+(s-e)%r)%r+e})},JS=function i(e,t,n){var r=t-e,s=r*2;return An(e)?bg(e,i(0,e.length-1),t):ls(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ka=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?og:Lf),n+=e.substr(t,r-t)+Eg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Tg=function(e,t,n,r,s){var o=t-e,a=r-n;return ls(s,function(l){return n+((l-e)/o*a||0)})},QS=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=un(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Go(An(e)?[]:{},e));if(!u){for(l in t)xd.call(a,e,l,"get",t[l]);s=function(g){return Ed(g,a)||(o?e.p:e)}}}return ls(n,s)},Mp=function(e,t,n){var r=e.labels,s=Ai,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(e,t,n){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Yr.length&&Uc(),a&&(Ut=a),u=l?s.apply(c,l):s.call(c),Ut=o,u},_a=function(e){return ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&hi(e,"onInterrupt"),e},So,Ag=[],wg=function(e){if(e)if(e=!e.name&&e.default||e,hd()||e.headless){var t=e.name,n=Ht(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ja,render:Ed,add:xd,kill:mM,modifier:pM,rawVars:0},o={targetTest:0,get:0,getSetter:yd,aliases:{},register:0};if(qo(),e!==r){if(ai[t])return;mi(r,mi(Fc(e,s),o)),Go(r.prototype,Go(s,Fc(e,o))),ai[r.prop=t]=r,e.targetTest&&(fc.push(r),md[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}cg(t,r),e.register&&e.register(Jn,r,jn)}else Ag.push(e)},bt=255,ga={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},wu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Cg=function(e,t,n){var r=e?Tr(e)?[e>>16,e>>8&bt,e&bt]:0:ga.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ga[e])r=ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&bt,r&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Lf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=wu(l+1/3,s,o),r[1]=wu(l,s,o),r[2]=wu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(rg),n&&r.length<4&&(r[3]=1),r}else r=e.match(Lf)||ga.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/bt,o=r[1]/bt,a=r[2]/bt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Rg=function(e){var t=[],n=[],r=-1;return e.split($r).forEach(function(s){var o=s.match(xo)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},yp=function(e,t,n){var r="",s=(e+r).match($r),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Cg(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Rg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace($r,"1").split(xo),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($r),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},$r=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ga)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),eM=/hsl[a]?\(/,Pg=function(e){var t=e.join(" "),n;if($r.lastIndex=0,$r.test(t))return n=eM.test(t),e[1]=yp(e[1],n),e[0]=yp(e[0],n,Rg(e[1])),!0},Za,ci=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=i()-r,b=m===!0,E,v,C,R;if((p>e||p<0)&&(n+=p-t),r+=p,C=r-n,E=C-o,(E>0||b)&&(R=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,o+=E+(E>=s?4:s-E),v=1),b||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](C,h,R,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ag&&(!If&&hd()&&(Gi=If=window,dd=Gi.document||{},pi.gsap=Jn,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(Jn.version),lg(Ic||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),Ag.forEach(wg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Za=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Za=0,c=ja},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var E=p?function(v,C,R,w){m(v,C,R,w),f.remove(E)}:m;return f.remove(m),a[b?"unshift":"push"](E),qo(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f})(),qo=function(){return!Za&&ci.wake()},ft={},tM=/^[\d.\-M][\d.\-,\s]/,nM=/["']/g,iM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(nM,"").trim():+c,r=l.substr(a+1).trim();return t},rM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},sM=function(e){var t=(e+"").split("("),n=ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iM(t[1])]:rM(e).split(",").map(dg)):ft._CE&&tM.test(e)?ft._CE("",e):n},Dg=function(e){return function(t){return 1-e(1-t)}},Lg=function i(e,t){for(var n=e._first,r;n;)n instanceof kn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Fs=function(e,t){return e&&(Ht(e)?e:ft[e]||sM(e))||t},js=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return $n(e,function(a){ft[a]=pi[a]=s,ft[o=a.toLowerCase()]=n;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},Ig=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Df*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*IS((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Ig(a);return s=Df/s,l.config=function(c,u){return i(e,c,u)},l},Ru=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ig(n);return r.config=function(s){return i(e,s)},r};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;js(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;js("Elastic",Cu("in"),Cu("out"),Cu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};js("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);js("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});js("Circ",function(i){return-(ng(1-i*i)-1)});js("Sine",function(i){return i===1?1:-LS(i*PS)+1});js("Back",Ru("in"),Ru("out"),Ru());ft.SteppedEase=ft.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((r*fl(0,o,a)|0)+s)*n}}};Ho.ease=ft["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return _d+=i+","+i+"Params,"});var Ug=function(e,t){this.id=DS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:fg,this.set=t?t.getSetter:yd},Ja=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xo(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Za||ci.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(qo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(au(this,n),!s._dp||s.parent||_g(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hg(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xp(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xp(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Wo(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(fl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ou(this),zS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nc(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=NS);var r=pn;return pn=n,vd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Sp(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Si(this,n),Yn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Yn(r)),this._dur||(this._zTime=-Tt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Ht(n)?n:pg,a=function(){var c=r.then;r.then=null,Ht(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){_a(this)},i})();mi(Ja.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var kn=(function(i){tg(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yn(n.sortChildren),Ot&&Yi(n.parent||Ot,fr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gg(fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return La(0,arguments,this),this},t.from=function(r,s,o){return La(1,arguments,this),this},t.fromTo=function(r,s,o,a){return La(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(r,s,Si(this,o),1),this},t.call=function(r,s,o){return Yi(this,Kt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Kt(r,o,Si(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Da(o).immediateRender=Yn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Da(a).immediateRender=Yn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Zt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,b,E,v,C,R,w;if(this!==Ot&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,v=this._start,E=this._ts,p=!E,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Zt(u%m),u===l?(_=this._repeat,h=c):(C=Zt(u/m),_=~~C,_&&_===C&&(h=c,_--),h>c&&(h=c)),C=Wo(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),R&&_&1&&(h=c-h,w=1),_!==C&&!this._lock){var I=R&&C&1,M=I===(R&&_&1);if(_<C&&(I=!I),a=I?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Zt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Lg(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=WS(this,Zt(a),Zt(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&!s&&!C&&(hi(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=-Tt);break}}d=g}else{d=this._last;for(var y=r<0?r:h;d;){if(g=d._prev,(d._act||y<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,s,o||pn&&vd(d)),h!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=y?-Tt:Tt);break}}d=g}}if(b&&!s&&(this.pause(),b.render(h>=a?0:-Tt)._zTime=h>=a?1:-1,this._ts))return this._start=v,ou(this),this.render(r,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ns(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(hi(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Tr(s)||(s=Si(this,s,r)),!(r instanceof Ja)){if(An(r))return r.forEach(function(a){return o.add(a,s)}),this;if(un(r))return this.addLabel(r,s);if(Ht(r))r=Kt.delayedCall(0,r);else return this}return this!==r?Yi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Kt?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return un(r)?this.removeLabel(r):Ht(r)?this.killTweensOf(r):(r.parent===this&&su(this,r),r===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(ci.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Si(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Kt.delayedCall(0,s||ja,o);return a.data="isPause",this._hasPause=1,Yi(this,a,Si(this,r))},t.removePause=function(r){var s=this._first;for(r=Si(this,r);s;)s._start===r&&s.data==="isPause"&&ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Vr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=wi(r),l=this._first,c=Tr(s),u;l;)l instanceof Kt?OS(l._targets,a)&&(c?(!Vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Si(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Kt.to(o,mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Xo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,mi({startAt:{time:Si(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Mp(this,Si(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Mp(this,Si(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return Us(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Us(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ai,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Xo(o,o===Ot&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ot._ts&&(hg(Ot,Nc(r,Ot)),ug=ci.frame),ci.frame>=gp){gp+=di.autoSleep||120;var s=Ot._first;if((!s||!s._ts)&&di.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e})(Ja);mi(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var oM=function(e,t,n,r,s,o,a){var l=new jn(this._pt,e,t,0,1,zg,null,s),c=0,u=0,f,h,d,g,_,m,p,b;for(l.b=n,l.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Ka(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),h=n.match(Tu)||[];f=Tu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ro(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Tu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(sg.test(r)||p)&&(l.e=0),this._pt=l,l},xd=function(e,t,n,r,s,o,a,l,c,u){Ht(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Ht(f)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Ht(f)?c?fM:kg:Md,g;if(un(r)&&(~r.indexOf("random(")&&(r=Ka(r)),r.charAt(1)==="="&&(g=Ro(h,r)+(yn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||zf)return!isNaN(h*r)&&r!==""?(g=new jn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?dM:Bg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&pd(t,r),oM.call(this,e,t,h,r,d,l||di.stringFilter,c))},aM=function(e,t,n,r,s){if(Ht(e)&&(e=Ia(e,s,t,n,r)),!nr(e)||e.style&&e.nodeType||An(e)||ig(e))return un(e)?Ia(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ia(e[a],s,t,n,r);return o},Fg=function(e,t,n,r,s,o){var a,l,c,u;if(ai[e]&&(a=new ai[e]).init(s,a.rawVars?t[e]:aM(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new jn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==So))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Vr,zf,Sd=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,b=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!ud,v=e.timeline,C,R,w,I,M,y,L,O,G,$,ee,W,H;if(v&&(!h||!s)&&(s="none"),e._ease=Fs(s,Ho.ease),e._yEase=f?Dg(Fs(f===!0?s:f,Ho.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(O=m[0]?Is(m[0]).harness:0,W=O&&r[O.prop],C=Fc(r,md),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?uc:FS),_._lazy=0),o){if(ns(e._startAt=Kt.set(m,mi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Yn(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!a&&!d)&&e._startAt.revert(uc),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=mi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yn(l),immediateRender:a,stagger:0,parent:p},C),W&&(w[O.prop]=W),ns(e._startAt=Kt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(uc):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Yn(l)||l&&!g,R=0;R<m.length;R++){if(M=m[R],L=M._gsap||gd(m)[R]._gsap,e._ptLookup[R]=$={},Uf[L.id]&&Yr.length&&Uc(),ee=b===m?R:b.indexOf(M),O&&(G=new O).init(M,W||C,e,ee,b)!==!1&&(e._pt=I=new jn(e._pt,M,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(B){$[B]=I}),G.priority&&(y=1)),!O||W)for(w in C)ai[w]&&(G=Fg(w,C,e,ee,M,b))?G.priority&&(y=1):$[w]=I=xd.call(e,M,w,"get",C[w],ee,b,0,r.stringFilter);e._op&&e._op[R]&&e.kill(M,e._op[R]),E&&e._pt&&(Vr=e,Ot.killTweensOf(M,$,e.globalTime(t)),H=!e.parent,Vr=0),e._pt&&l&&(Uf[L.id]=1)}y&&Vg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!H,h&&t<=0&&v.render(Ai,!0,!0)},lM=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zf=1,e.vars[t]="+=0",Sd(e,a),zf=0,l?$a(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Xt(n)+yn(f.e)),f.b&&(f.b=u.s+yn(f.b))},cM=function(e,t){var n=e[0]?Is(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Go({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},uM=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ia=function(e,t,n,r,s){return Ht(e)?e.call(t,n,r,s):un(e)&&~e.indexOf("random(")?Ka(e):e},Ng=_d+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Og={};$n(Ng+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Og[i]=1});var Kt=(function(i){tg(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Da(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=r.parent||Ot,E=(An(n)||ig(n)?Tr(n[0]):"length"in r)?[n]:wi(n),v,C,R,w,I,M,y,L;if(a._targets=E.length?gd(E):$a("GSAP target "+n+" not found. https://gsap.com",!di.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Ml(c)||Ml(u)){if(r=a.vars,v=a.timeline=new kn({data:"nested",defaults:_||{},targets:b&&b.data==="nested"?b.vars.targets:E}),v.kill(),v.parent=v._dp=fr(a),v._start=0,h||Ml(c)||Ml(u)){if(w=E.length,y=h&&Mg(h),nr(h))for(I in h)~Ng.indexOf(I)&&(L||(L={}),L[I]=h[I]);for(C=0;C<w;C++)R=Fc(r,Og),R.stagger=0,p&&(R.yoyoEase=p),L&&Go(R,L),M=E[C],R.duration=+Ia(c,fr(a),C,M,E),R.delay=(+Ia(u,fr(a),C,M,E)||0)-a._delay,!h&&w===1&&R.delay&&(a._delay=u=R.delay,a._start+=u,R.delay=0),v.to(M,R,y?y(C,M,E):0),v._ease=ft.none;v.duration()?c=u=0:a.timeline=0}else if(g){Da(mi(v.vars.defaults,{ease:"none"})),v._ease=Fs(g.ease||r.ease||"none");var O=0,G,$,ee;if(An(g))g.forEach(function(W){return v.to(E,W,">")}),v.duration();else{R={};for(I in g)I==="ease"||I==="easeEach"||uM(I,g[I],R,g.easeEach);for(I in R)for(G=R[I].sort(function(W,H){return W.t-H.t}),O=0,C=0;C<G.length;C++)$=G[C],ee={ease:$.e,duration:($.t-(C?G[C-1].t:0))/100*c},ee[I]=$.v,v.to(E,ee,O),O+=ee.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!ud&&(Vr=fr(a),Ot.killTweensOf(E),Vr=0),Yi(b,fr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Zt(b._time)&&Yn(f)&&VS(fr(a))&&b.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&gg(fr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Tt&&!u?l:r<Tt?0:r,h,d,g,_,m,p,b,E,v;if(!c)GS(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Zt(f%_),f===l?(g=this._repeat,h=c):(m=Zt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(v=this._yEase,h=c-h),m=Wo(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(E&&this._yEase&&Lg(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Zt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(vg(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(h/c),this._from&&(this.ratio=b=1-b),!a&&f&&!s&&!m&&(hi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;E&&E.render(r<0?r:E._dur*E._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Ff(this,r,s,o),hi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ff(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ns(this,1),!s&&!(u&&!a)&&(f||a||p)&&(hi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Za||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sd(this,c),u=this._ease(c/this._dur),lM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(au(this,0),this.parent||mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Vr&&Vr.vars.overwrite!==!0)._first||_a(this),this.parent&&o!==this.timeline.totalDuration()&&Xo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?wi(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&BS(a,l))return s==="all"&&(this._pt=0),_a(this);for(f=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},$n(s,function(b){return _[b]=1}),s=_),s=cM(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&su(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&_a(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return La(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return La(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ot.killTweensOf(r,s,o)},e})(Ja);mi(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(i){Kt[i]=function(){var e=new kn,t=Of.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Md=function(e,t,n){return e[t]=n},kg=function(e,t,n){return e[t](n)},fM=function(e,t,n,r){return e[t](r.fp,n)},hM=function(e,t,n){return e.setAttribute(t,n)},yd=function(e,t){return Ht(e[t])?kg:fd(e[t])&&e.setAttribute?hM:Md},Bg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pM=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},mM=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?su(this,t,"_pt"):t.dep||(n=1),t=r;return!n},_M=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Vg=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},jn=(function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Bg,this.d=l||this,this.set=c||Md,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=_M,this.m=n,this.mt=s,this.tween=r},i})();$n(_d+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return md[i]=1});pi.TweenMax=pi.TweenLite=Kt;pi.TimelineLite=pi.TimelineMax=kn;Ot=new kn({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=Pg;var Ns=[],hc={},gM=[],Ep=0,vM=0,Pu=function(e){return(hc[e]||gM).map(function(t){return t()})},Vf=function(){var e=Date.now(),t=[];e-Ep>2&&(Pu("matchMediaInit"),Ns.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Gi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ep=e,Pu("matchMedia"))},Hg=(function(){function i(t,n){this.selector=n&&kf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=vM++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ht(n)&&(s=r,r=n,n=Ht);var o=this,a=function(){var c=Ut,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=kf(s)),Ut=o,f=r.apply(o,arguments),Ht(f)&&o._r.push(f),Ut=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Ut;Ut=null,n(this),Ut=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Kt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ns.length;o--;)Ns[o].id===this.id&&Ns.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),xM=(function(){function i(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){nr(n)||(n={matches:n});var o=new Hg(0,s||this.scope),a=o.conditions={},l,c,u;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Gi.matchMedia(n[c]),l&&(Ns.indexOf(o)<0&&Ns.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Vf):l.addEventListener("change",Vf)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Oc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return wg(r)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Ot.getTweensOf(e,t)},getProperty:function(e,t,n,r){un(e)&&(e=wi(e)[0]);var s=Is(e||{}).get,o=n?pg:dg;return n==="native"&&(n=""),e&&(t?o((ai[t]&&ai[t].get||s)(e,t,n,r)):function(a,l,c){return o((ai[a]&&ai[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=wi(e),e.length>1){var r=e.map(function(u){return Jn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=ai[t],a=Is(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;So._pt=0,f.init(e,n?u+n:u,So,0,[e]),f.render(1,f),So._pt&&Ed(1,So)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Jn.to(e,mi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Ot.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fs(e.ease,Ho.ease)),vp(Ho,e||{})},config:function(e){return vp(di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ai[a]&&!pi[a]&&$a(t+" effect requires "+a+" plugin.")}),Au[t]=function(a,l,c){return n(wi(a),mi(l||{},s),c)},o&&(kn.prototype[t]=function(a,l,c){return this.add(Au[t](a,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ft[e]=Fs(t)},parseEase:function(e,t){return arguments.length?Fs(e,t):ft},getById:function(e){return Ot.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kn(e),r,s;for(n.smoothChildTiming=Yn(e.smoothChildTiming),Ot.remove(n),n._dp=0,n._time=n._tTime=Ot._time,r=Ot._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Kt&&r.vars.onComplete===r._targets[0]))&&Yi(n,r,r._start-r._delay),r=s;return Yi(Ot,n,0),n},context:function(e,t){return e?new Hg(e,t):Ut},matchMedia:function(e){return new xM(e)},matchMediaRefresh:function(){return Ns.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Vf()},addEventListener:function(e,t){var n=hc[e]||(hc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hc[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:ZS,wrapYoyo:JS,distribute:Mg,random:Eg,snap:yg,normalize:KS,getUnit:yn,clamp:qS,splitColor:Cg,toArray:wi,selector:kf,mapRange:Tg,pipe:$S,unitize:jS,interpolate:QS,shuffle:Sg},install:lg,effects:Au,ticker:ci,updateRoot:kn.updateRoot,plugins:ai,globalTimeline:Ot,core:{PropTween:jn,globals:cg,Tween:Kt,Timeline:kn,Animation:Ja,getCache:Is,_removeLinkedListItem:su,reverting:function(){return pn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return ud=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Oc[i]=Kt[i]});ci.add(kn.updateRoot);So=Oc.to({},{duration:0});var SM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},MM=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=SM(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(un(s)&&(l={},$n(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}MM(a,s)}}}},Jn=Oc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",Bf),Du("modifiers"),Du("snap",yg))||Oc;Kt.version=kn.version=Jn.version="3.13.0";ag=1;hd()&&qo();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bp,Hr,Po,bd,Cs,Tp,Td,yM=function(){return typeof window<"u"},Ar={},Ms=180/Math.PI,Do=Math.PI/180,Js=Math.atan2,Ap=1e8,Ad=/([A-Z])/g,EM=/(left|right|width|margin|padding|x)/i,bM=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},wM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Wg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CM=function(e,t,n){return e.style[t]=n},RM=function(e,t,n){return e.style.setProperty(t,n)},PM=function(e,t,n){return e._gsap[t]=n},DM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},LM=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},IM=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Bt="transform",Kn=Bt+"Origin",UM=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ar&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hr(r,a)}):this.tfm[e]=o.x?o[e]:hr(r,e),e===Kn&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Kn,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},Xg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},FM=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Td(),(!s||!s.isStart)&&!n[Bt]&&(Xg(n),r.zOrigin&&n[Kn]&&(n[Kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qg=function(e,t){var n={target:e,props:[],revert:FM,save:UM};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},Yg,Gf=function(e,t){var n=Hr.createElementNS?Hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Hr.createElement(e);return n&&n.style?n:Hr.createElement(e)},Ci=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Yo(t)||t,1)||""},wp="O,Moz,ms,Ms,Webkit".split(","),Yo=function(e,t,n){var r=t||Cs,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(wp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?wp[o]:"")+e},Wf=function(){yM()&&window.document&&(bp=window,Hr=bp.document,Po=Hr.documentElement,Cs=Gf("div")||{style:{}},Gf("div"),Bt=Yo(Bt),Kn=Bt+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Yg=!!Yo("perspective"),Td=Jn.core.reverting,bd=1)},Cp=function(e){var t=e.ownerSVGElement,n=Gf("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Po.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Po.removeChild(n),s},Rp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},$g=function(e){var t,n;try{t=e.getBBox()}catch{t=Cp(e),n=1}return t&&(t.width||t.height)||n||(t=Cp(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rp(e,["x","cx","x1"])||0,y:+Rp(e,["y","cy","y1"])||0,width:0,height:0}:t},jg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&$g(e))},Vs=function(e,t){if(t){var n=e.style,r;t in Ar&&t!==Kn&&(t=Bt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Ad,"-$1").toLowerCase())):n.removeAttribute(t)}},Gr=function(e,t,n,r,s,o){var a=new jn(e._pt,t,n,0,1,o?Wg:Gg);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Pp={deg:1,rad:1,turn:1},NM={grid:1,flex:1},is=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Cs.style,l=EM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||Pp[r]||Pp[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&jg(e),(d||o==="%")&&(Ar[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Xt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Hr||!_.appendChild)&&(_=Hr.body),m=_._gsap,m&&d&&m.width&&l&&m.time===ci.time&&!m.uncache)return Xt(s/m.width*f);if(d&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=f+r,g=e[u],b?e.style[t]=b:Vs(e,t)}else(d||o==="%")&&!NM[Ci(_,"display")]&&(a.position=Ci(e,"position")),_===e&&(a.position="static"),_.appendChild(Cs),g=Cs[u],_.removeChild(Cs),a.position="absolute";return l&&d&&(m=Is(_),m.time=ci.time,m.width=_[u]),Xt(h?g*s/f:g&&s?f/g*s:0)},hr=function(e,t,n,r){var s;return bd||Wf(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ar[t]&&t!=="transform"?(s=el(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bc(Ci(e,Kn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=kc[t]&&kc[t](e,t,n)||Ci(e,t)||fg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?is(e,t,s,n)+n:s},OM=function(e,t,n,r){if(!n||n==="none"){var s=Yo(t,e,1),o=s&&Ci(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ci(e,"borderTopColor"))}var a=new jn(this._pt,e.style,t,0,1,zg),l=0,c=0,u,f,h,d,g,_,m,p,b,E,v,C;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ci(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ci(e,t)||r,_?e.style[t]=_:Vs(e,t)),u=[n,r],Pg(u),n=u[0],r=u[1],h=n.match(xo)||[],C=r.match(xo)||[],C.length){for(;f=xo.exec(r);)m=f[0],b=r.substring(l,f.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ro(d,m)+v),p=parseFloat(m),E=m.substr((p+"").length),l=xo.lastIndex-E.length,E||(E=E||di.units[t]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(d=is(e,t,_,E)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Wg:Gg;return sg.test(r)&&(a.e=0),this._pt=a,a},Dp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kM=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Dp[n]||n,t[1]=Dp[r]||r,t.join(" ")},BM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ar[a]&&(l=1,a=a==="transformOrigin"?Kn:Bt),Vs(n,a);l&&(Vs(n,Bt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",el(n,1),o.uncache=1,Xg(r)))}},kc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new jn(e._pt,t,n,0,0,BM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Qa=[1,0,0,1,0,0],Kg={},Zg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Lp=function(e){var t=Ci(e,Bt);return Zg(t)?Qa:t.substr(7).match(rg).map(Xt)},wd=function(e,t){var n=e._gsap||Is(e),r=e.style,s=Lp(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Qa:s):(s===Qa&&!e.offsetParent&&e!==Po&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Po.appendChild(e)),s=Lp(e),l?r.display=l:Vs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xf=function(e,t,n,r,s,o){var a=e._gsap,l=s||wd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],b=l[5],E=t.split(" "),v=parseFloat(E[0])||0,C=parseFloat(E[1])||0,R,w,I,M;n?l!==Qa&&(w=d*m-g*_)&&(I=v*(m/w)+C*(-_/w)+(_*b-m*p)/w,M=v*(-g/w)+C*(d/w)-(d*b-g*p)/w,v=I,C=M):(R=$g(e),v=R.x+(~E[0].indexOf("%")?v/100*R.width:v),C=R.y+(~(E[1]||E[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&a.smooth?(p=v-c,b=C-u,a.xOffset=f+(p*d+b*_)-p,a.yOffset=h+(p*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Kn]="0px 0px",o&&(Gr(o,a,"xOrigin",c,v),Gr(o,a,"yOrigin",u,C),Gr(o,a,"xOffset",f,a.xOffset),Gr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+C)},el=function(e,t){var n=e._gsap||new Ug(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ci(e,Kn)||"0",u,f,h,d,g,_,m,p,b,E,v,C,R,w,I,M,y,L,O,G,$,ee,W,H,B,le,U,me,Le,Ke,Ve,te;return u=f=h=_=m=p=b=E=v=0,d=g=1,n.svg=!!(e.getCTM&&jg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),w=wd(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Xf(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,R=n.yOrigin||0,w!==Qa&&(L=w[0],O=w[1],G=w[2],$=w[3],u=ee=w[4],f=W=w[5],w.length===6?(d=Math.sqrt(L*L+O*O),g=Math.sqrt($*$+G*G),_=L||O?Js(O,L)*Ms:0,b=G||$?Js(G,$)*Ms+_:0,b&&(g*=Math.abs(Math.cos(b*Do))),n.svg&&(u-=C-(C*L+R*G),f-=R-(C*O+R*$))):(te=w[6],Ke=w[7],U=w[8],me=w[9],Le=w[10],Ve=w[11],u=w[12],f=w[13],h=w[14],I=Js(te,Le),m=I*Ms,I&&(M=Math.cos(-I),y=Math.sin(-I),H=ee*M+U*y,B=W*M+me*y,le=te*M+Le*y,U=ee*-y+U*M,me=W*-y+me*M,Le=te*-y+Le*M,Ve=Ke*-y+Ve*M,ee=H,W=B,te=le),I=Js(-G,Le),p=I*Ms,I&&(M=Math.cos(-I),y=Math.sin(-I),H=L*M-U*y,B=O*M-me*y,le=G*M-Le*y,Ve=$*y+Ve*M,L=H,O=B,G=le),I=Js(O,L),_=I*Ms,I&&(M=Math.cos(I),y=Math.sin(I),H=L*M+O*y,B=ee*M+W*y,O=O*M-L*y,W=W*M-ee*y,L=H,ee=B),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Xt(Math.sqrt(L*L+O*O+G*G)),g=Xt(Math.sqrt(W*W+te*te)),I=Js(ee,W),b=Math.abs(I)>2e-4?I*Ms:0,v=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zg(Ci(e,Bt)),H&&e.setAttribute("transform",H))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Xt(d),n.scaleY=Xt(g),n.rotation=Xt(_)+a,n.rotationX=Xt(m)+a,n.rotationY=Xt(p)+a,n.skewX=b+a,n.skewY=E+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Kn]=Bc(c)),n.xOffset=n.yOffset=0,n.force3D=di.force3D,n.renderTransform=n.svg?VM:Yg?Jg:zM,n.uncache=0,n},Bc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lu=function(e,t,n){var r=yn(t);return Xt(parseFloat(t)+parseFloat(is(e,"x",n+"px",r)))+r},zM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jg(e,t)},hs="0deg",aa="0px",ds=") ",Jg=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,E=n.zOrigin,v="",C=p==="auto"&&e&&e!==1||p===!0;if(E&&(f!==hs||u!==hs)){var R=parseFloat(u)*Do,w=Math.sin(R),I=Math.cos(R),M;R=parseFloat(f)*Do,M=Math.cos(R),o=Lu(b,o,w*M*-E),a=Lu(b,a,-Math.sin(R)*-E),l=Lu(b,l,I*M*-E+E)}m!==aa&&(v+="perspective("+m+ds),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(C||o!==aa||a!==aa||l!==aa)&&(v+=l!==aa||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ds),c!==hs&&(v+="rotate("+c+ds),u!==hs&&(v+="rotateY("+u+ds),f!==hs&&(v+="rotateX("+f+ds),(h!==hs||d!==hs)&&(v+="skew("+h+", "+d+ds),(g!==1||_!==1)&&(v+="scale("+g+", "+_+ds),b.style[Bt]=v||"translate(0, 0)"},VM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,E=parseFloat(o),v=parseFloat(a),C,R,w,I,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Do,c*=Do,C=Math.cos(l)*f,R=Math.sin(l)*f,w=Math.sin(l-c)*-h,I=Math.cos(l-c)*h,c&&(u*=Do,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,I*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,R*=M)),C=Xt(C),R=Xt(R),w=Xt(w),I=Xt(I)):(C=f,I=h,R=w=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=is(d,"x",o,"px"),v=is(d,"y",a,"px")),(g||_||m||p)&&(E=Xt(E+g-(g*C+_*w)+m),v=Xt(v+_-(g*R+_*I)+p)),(r||s)&&(M=d.getBBox(),E=Xt(E+r/100*M.width),v=Xt(v+s/100*M.height)),M="matrix("+C+","+R+","+w+","+I+","+E+","+v+")",d.setAttribute("transform",M),b&&(d.style[Bt]=M)},HM=function(e,t,n,r,s){var o=360,a=un(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ms:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ap)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ap)%o-~~(c/o)*o)),e._pt=h=new jn(e._pt,t,n,r,c,TM),h.e=u,h.u="deg",e._props.push(n),h},Ip=function(e,t){for(var n in t)e[n]=t[n];return e},GM=function(e,t,n){var r=Ip({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Bt]=t,a=el(n,1),Vs(n,Bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Bt],o[Bt]=t,a=el(n,1),o[Bt]=c);for(l in Ar)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=yn(c),g=yn(u),f=d!==g?is(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new jn(e._pt,a,l,f,h-f,Hf),e._pt.u=g||0,e._props.push(l));Ip(a,r)};$n("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});kc[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return hr(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var Qg={name:"css",register:Wf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,b,E,v,C,R,w,I;bd||Wf(),this.styles=this.styles||qg(e),I=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(ai[_]&&Fg(_,t,n,r,e,s)))){if(d=typeof u,g=kc[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ka(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$r.lastIndex=0,$r.test(c)||(m=yn(c),p=yn(u)),p?m!==p&&(c=is(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),I.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],un(c)&&~c.indexOf("random(")&&(c=Ka(c)),yn(c+"")||c==="auto"||(c+=di.units[_]||yn(hr(e,_))||""),(c+"").charAt(1)==="="&&(c=hr(e,_))):c=hr(e,_),h=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),_ in $i&&(_==="autoAlpha"&&(h===1&&hr(e,"visibility")==="hidden"&&f&&(h=0),I.push("visibility",0,a.visibility),Gr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=$i[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ar,E){if(this.styles.save(_),d==="string"&&u.substring(0,6)==="var(--"&&(u=Ci(e,u.substring(4,u.indexOf(")"))),f=parseFloat(u)),v||(C=e._gsap,C.renderTransform&&!t.parseTransform||el(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,v=this._pt=new jn(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),v.dep=1),_==="scale")this._pt=new jn(this._pt,C,"scaleY",C.scaleY,(b?Ro(C.scaleY,b+f):f)-C.scaleY||0,Hf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){I.push(Kn,0,a[Kn]),u=kM(u),C.svg?Xf(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&Gr(this,C,"zOrigin",C.zOrigin,p),Gr(this,a,_,Bc(c),Bc(u)));continue}else if(_==="svgOrigin"){Xf(e,u,1,R,0,this);continue}else if(_ in Kg){HM(this,C,_,h,b?Ro(h,b+u):u);continue}else if(_==="smoothOrigin"){Gr(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){GM(this,u,e);continue}}else _ in a||(_=Yo(_)||_);if(E||(f||f===0)&&(h||h===0)&&!bM.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=yn(u)||(_ in di.units?di.units[_]:m),m!==p&&(h=is(e,_,c,p)),this._pt=new jn(this._pt,E?C:a,_,h,(b?Ro(h,b+f):f)-h,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?wM:Hf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=AM);else if(_ in a)OM.call(this,e,_,c,b?b+u:u);else if(_ in e)this.add(e,_,c||e[_],b?b+u:u,r,s);else if(_!=="parseTransform"){pd(_,u);continue}E||(_ in a?I.push(_,0,a[_]):typeof e[_]=="function"?I.push(_,2,e[_]()):I.push(_,1,c||e[_])),o.push(_)}}w&&Vg(this)},render:function(e,t){if(t.tween._time||!Td())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hr,aliases:$i,getSetter:function(e,t,n){var r=$i[t];return r&&r.indexOf(",")<0&&(t=r),t in Ar&&t!==Kn&&(e._gsap.x||hr(e,"x"))?n&&Tp===n?t==="scale"?DM:PM:(Tp=n||{})&&(t==="scale"?LM:IM):e.style&&!fd(e.style[t])?CM:~t.indexOf("-")?RM:yd(e,t)},core:{_removeProperty:Vs,_getMatrix:wd}};Jn.utils.checkPrefix=Yo;Jn.core.getStyleSaver=qg;(function(i,e,t,n){var r=$n(i+","+e+","+t,function(s){Ar[s]=1});$n(e,function(s){di.units[s]="deg",Kg[s]=1}),$i[r[13]]=i+","+e,$n(n,function(s){var o=s.split(":");$i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){di.units[i]="px"});Jn.registerPlugin(Qg);var Jt=Jn.registerPlugin(Qg)||Jn;Jt.core.Tween;const WM="/assets/profile-AvdsdmVk.jpg",XM={class:"hero",id:"home"},qM={class:"hero-wrapper"},YM={class:"hero-content"},$M=["src"],jM={class:"text-content"},KM={__name:"Home",setup(i){const e=hn(null),t=hn(null),n=hn(null),r=hn(null);return $s(async()=>{await Bo(),Jt.timeline({defaults:{duration:.8,ease:"power2.out"}}).from(e.value,{x:-100,opacity:0}).from([t.value,n.value,r.value],{x:50,opacity:0,stagger:.2},"-=0.5")}),(s,o)=>(It(),kt("section",XM,[$e("div",qM,[$e("div",YM,[$e("div",{class:"hero-image",ref_key:"heroImage",ref:e},[$e("img",{src:x_(WM),alt:"Profile"},null,8,$M)],512),$e("div",jM,[$e("h1",{ref_key:"title",ref:t},o[0]||(o[0]=[K_("Halo, Saya ",-1),$e("span",null,"Muhammad Rizqi Kurniawan",-1)]),512),$e("p",{ref_key:"role",ref:n},"Seorang Website Developer",512),$e("p",{ref_key:"description",ref:r},o[1]||(o[1]=[lc(" Saya membangun antarmuka web modern, responsif, dan interaktif menggunakan teknologi seperti <strong>Vue.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, dan <strong>JavaScript</strong> untuk <strong>Front-end</strong>. Selain itu, saya menggunakan <strong>PHP Laravel</strong> untuk <strong>Back-end</strong> dan database menggunakan <strong>MySQL</strong> dan <strong>PostgreSQL</strong>",18)]),512)])])])]))}};function ZM(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function JM(i,e,t){return e&&ZM(i.prototype,e),i}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var dn,dc,ui,Wr,Xr,Lo,e0,ys,Ua,t0,gr,Fi,n0,i0=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},r0=1,Mo=[],lt=[],er=[],Fa=Date.now,qf=function(e,t){return t},QM=function(){var e=Ua.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,lt),r.push.apply(r,er),lt=n,er=r,qf=function(o,a){return t[o](a)}},jr=function(e,t){return~er.indexOf(e)&&er[er.indexOf(e)+1][t]},Na=function(e){return!!~t0.indexOf(e)},Dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Rn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},yl="scrollLeft",El="scrollTop",Yf=function(){return gr&&gr.isPressed||lt.cache++},zc=function(e,t){var n=function r(s){if(s||s===0){r0&&(ui.history.scrollRestoration="manual");var o=gr&&gr.isPressed;s=r.v=Math.round(s)||(gr&&gr.iOS?1:0),e(s),r.cacheID=lt.cache,o&&qf("ss",s)}else(t||lt.cache!==r.cacheID||qf("ref"))&&(r.cacheID=lt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Bn={s:yl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:zc(function(i){return arguments.length?ui.scrollTo(i,rn.sc()):ui.pageXOffset||Wr[yl]||Xr[yl]||Lo[yl]||0})},rn={s:El,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:zc(function(i){return arguments.length?ui.scrollTo(Bn.sc(),i):ui.pageYOffset||Wr[El]||Xr[El]||Lo[El]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||dn.utils.toArray)(e)[0]||(typeof e=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ey=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},rs=function(e,t){var n=t.s,r=t.sc;Na(e)&&(e=Wr.scrollingElement||Xr);var s=lt.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+o]||Dn(e,"scroll",Yf);var a=lt[s+o],l=a||(lt[s+o]=zc(jr(e,n),!0)||(Na(e)?r:zc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=dn.getProperty(e,"scrollBehavior")==="smooth"),l},$f=function(e,t,n){var r=e,s=e,o=Fa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=Fa();_||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(g){var _=a,m=s,p=Fa();return(g||g===0)&&g!==r&&u(g),o===a||p-a>c?0:(r+(n?m:-m))/((n?p:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},la=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Up=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},s0=function(){Ua=dn.core.globals().ScrollTrigger,Ua&&Ua.core&&QM()},o0=function(e){return dn=e||i0(),!dc&&dn&&typeof document<"u"&&document.body&&(ui=window,Wr=document,Xr=Wr.documentElement,Lo=Wr.body,t0=[ui,Wr,Xr,Lo],dn.utils.clamp,n0=dn.core.context||function(){},ys="onpointerenter"in Lo?"pointer":"mouse",e0=Yt.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Yt.eventTypes=("ontouchstart"in Xr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Xr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return r0=0},500),s0(),dc=1),dc};Bn.op=rn;lt.cache=0;var Yt=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){dc||o0(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||s0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,E=n.onPress,v=n.onRelease,C=n.onRight,R=n.onLeft,w=n.onUp,I=n.onDown,M=n.onChangeX,y=n.onChangeY,L=n.onChange,O=n.onToggleX,G=n.onToggleY,$=n.onHover,ee=n.onHoverEnd,W=n.onMove,H=n.ignoreCheck,B=n.isNormalizer,le=n.onGestureStart,U=n.onGestureEnd,me=n.onWheel,Le=n.onEnable,Ke=n.onDisable,Ve=n.onClick,te=n.scrollSpeed,he=n.capture,oe=n.allowClicks,be=n.lockAxis,Te=n.onLockAxis;this.target=a=qn(a)||Xr,this.vars=n,d&&(d=dn.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,te=te||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(Lo).lineHeight)||22);var Pe,ot,D,x,V,Y,Z,P=this,ae=0,j=0,re=n.passive||!u&&n.passive!==!1,ie=rs(a,Bn),ve=rs(a,rn),A=ie(),S=ve(),N=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",q=Na(a),J=a.ownerDocument||Wr,X=[0,0,0],Se=[0,0,0],ue=0,Ae=function(){return ue=Fa()},ge=function(ke,Je){return(P.event=ke)&&d&&ey(ke.target,d)||Je&&N&&ke.pointerType!=="touch"||H&&H(ke,Je)},de=function(){P._vx.reset(),P._vy.reset(),ot.pause(),f&&f(P)},Me=function(){var ke=P.deltaX=Up(X),Je=P.deltaY=Up(Se),Ee=Math.abs(ke)>=r,qe=Math.abs(Je)>=r;L&&(Ee||qe)&&L(P,ke,Je,X,Se),Ee&&(C&&P.deltaX>0&&C(P),R&&P.deltaX<0&&R(P),M&&M(P),O&&P.deltaX<0!=ae<0&&O(P),ae=P.deltaX,X[0]=X[1]=X[2]=0),qe&&(I&&P.deltaY>0&&I(P),w&&P.deltaY<0&&w(P),y&&y(P),G&&P.deltaY<0!=j<0&&G(P),j=P.deltaY,Se[0]=Se[1]=Se[2]=0),(x||D)&&(W&&W(P),D&&(m&&D===1&&m(P),b&&b(P),D=0),x=!1),Y&&!(Y=!1)&&Te&&Te(P),V&&(me(P),V=!1),Pe=0},Ie=function(ke,Je,Ee){X[Ee]+=ke,Se[Ee]+=Je,P._vx.update(ke),P._vy.update(Je),c?Pe||(Pe=requestAnimationFrame(Me)):Me()},we=function(ke,Je){be&&!Z&&(P.axis=Z=Math.abs(ke)>Math.abs(Je)?"x":"y",Y=!0),Z!=="y"&&(X[2]+=ke,P._vx.update(ke,!0)),Z!=="x"&&(Se[2]+=Je,P._vy.update(Je,!0)),c?Pe||(Pe=requestAnimationFrame(Me)):Me()},xe=function(ke){if(!ge(ke,1)){ke=la(ke,u);var Je=ke.clientX,Ee=ke.clientY,qe=Je-P.x,He=Ee-P.y,je=P.isDragging;P.x=Je,P.y=Ee,(je||(qe||He)&&(Math.abs(P.startX-Je)>=s||Math.abs(P.startY-Ee)>=s))&&(D=je?2:1,je||(P.isDragging=!0),we(qe,He))}},Xe=P.onPress=function(De){ge(De,1)||De&&De.button||(P.axis=Z=null,ot.pause(),P.isPressed=!0,De=la(De),ae=j=0,P.startX=P.x=De.clientX,P.startY=P.y=De.clientY,P._vx.reset(),P._vy.reset(),Dn(B?a:J,Fi[1],xe,re,!0),P.deltaX=P.deltaY=0,E&&E(P))},F=P.onRelease=function(De){if(!ge(De,1)){Rn(B?a:J,Fi[1],xe,!0);var ke=!isNaN(P.y-P.startY),Je=P.isDragging,Ee=Je&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),qe=la(De);!Ee&&ke&&(P._vx.reset(),P._vy.reset(),u&&oe&&dn.delayedCall(.08,function(){if(Fa()-ue>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(J.createEvent){var He=J.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,ui,1,qe.screenX,qe.screenY,qe.clientX,qe.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(He)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,f&&Je&&!B&&ot.restart(!0),D&&Me(),p&&Je&&p(P),v&&v(P,Ee)}},pe=function(ke){return ke.touches&&ke.touches.length>1&&(P.isGesturing=!0)&&le(ke,P.isDragging)},_e=function(){return(P.isGesturing=!1)||U(P)},Ce=function(ke){if(!ge(ke)){var Je=ie(),Ee=ve();Ie((Je-A)*te,(Ee-S)*te,1),A=Je,S=Ee,f&&ot.restart(!0)}},fe=function(ke){if(!ge(ke)){ke=la(ke,u),me&&(V=!0);var Je=(ke.deltaMode===1?l:ke.deltaMode===2?ui.innerHeight:1)*g;Ie(ke.deltaX*Je,ke.deltaY*Je,0),f&&!B&&ot.restart(!0)}},se=function(ke){if(!ge(ke)){var Je=ke.clientX,Ee=ke.clientY,qe=Je-P.x,He=Ee-P.y;P.x=Je,P.y=Ee,x=!0,f&&ot.restart(!0),(qe||He)&&we(qe,He)}},Fe=function(ke){P.event=ke,$(P)},We=function(ke){P.event=ke,ee(P)},dt=function(ke){return ge(ke)||la(ke,u)&&Ve(P)};ot=P._dc=dn.delayedCall(h||.25,de).pause(),P.deltaX=P.deltaY=0,P._vx=$f(0,50,!0),P._vy=$f(0,50,!0),P.scrollX=ie,P.scrollY=ve,P.isDragging=P.isGesturing=P.isPressed=!1,n0(this),P.enable=function(De){return P.isEnabled||(Dn(q?J:a,"scroll",Yf),o.indexOf("scroll")>=0&&Dn(q?J:a,"scroll",Ce,re,he),o.indexOf("wheel")>=0&&Dn(a,"wheel",fe,re,he),(o.indexOf("touch")>=0&&e0||o.indexOf("pointer")>=0)&&(Dn(a,Fi[0],Xe,re,he),Dn(J,Fi[2],F),Dn(J,Fi[3],F),oe&&Dn(a,"click",Ae,!0,!0),Ve&&Dn(a,"click",dt),le&&Dn(J,"gesturestart",pe),U&&Dn(J,"gestureend",_e),$&&Dn(a,ys+"enter",Fe),ee&&Dn(a,ys+"leave",We),W&&Dn(a,ys+"move",se)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=x=D=!1,P._vx.reset(),P._vy.reset(),A=ie(),S=ve(),De&&De.type&&Xe(De),Le&&Le(P)),P},P.disable=function(){P.isEnabled&&(Mo.filter(function(De){return De!==P&&Na(De.target)}).length||Rn(q?J:a,"scroll",Yf),P.isPressed&&(P._vx.reset(),P._vy.reset(),Rn(B?a:J,Fi[1],xe,!0)),Rn(q?J:a,"scroll",Ce,he),Rn(a,"wheel",fe,he),Rn(a,Fi[0],Xe,he),Rn(J,Fi[2],F),Rn(J,Fi[3],F),Rn(a,"click",Ae,!0),Rn(a,"click",dt),Rn(J,"gesturestart",pe),Rn(J,"gestureend",_e),Rn(a,ys+"enter",Fe),Rn(a,ys+"leave",We),Rn(a,ys+"move",se),P.isEnabled=P.isPressed=P.isDragging=!1,Ke&&Ke(P))},P.kill=P.revert=function(){P.disable();var De=Mo.indexOf(P);De>=0&&Mo.splice(De,1),gr===P&&(gr=0)},Mo.push(P),B&&Na(a)&&(gr=P),P.enable(_)},JM(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();Yt.version="3.13.0";Yt.create=function(i){return new Yt(i)};Yt.register=o0;Yt.getAll=function(){return Mo.slice()};Yt.getById=function(i){return Mo.filter(function(e){return e.vars.id===i})[0]};i0()&&dn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,go,at,wt,li,_t,Cd,Vc,tl,Oa,va,bl,gn,lu,jf,Un,Fp,Np,vo,a0,Iu,l0,In,Kf,c0,u0,Or,Zf,Rd,Io,Pd,Hc,Jf,Uu,Tl=1,vn=Date.now,Fu=vn(),Pi=0,xa=0,Op=function(e,t,n){var r=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},kp=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},ty=function i(){return xa&&requestAnimationFrame(i)},Bp=function(){return lu=1},zp=function(){return lu=0},Wi=function(e){return e},Sa=function(e){return Math.round(e*1e5)/1e5||0},f0=function(){return typeof window<"u"},h0=function(){return Oe||f0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Hs=function(e){return!!~Cd.indexOf(e)},d0=function(e){return(e==="Height"?Pd:at["inner"+e])||li["client"+e]||_t["client"+e]},p0=function(e){return jr(e,"getBoundingClientRect")||(Hs(e)?function(){return vc.width=at.innerWidth,vc.height=Pd,vc}:function(){return mr(e)})},ny=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=jr(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?d0(s):e["client"+s])||0}},iy=function(e,t){return!t||~er.indexOf(e)?p0(e):function(){return vc}},ji=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=jr(e,n))?o()-p0(e)()[s]:Hs(e)?(li[n]||_t[n])-d0(r):e[n]-e["offset"+r])},Al=function(e,t){for(var n=0;n<vo.length;n+=3)(!t||~t.indexOf(vo[n+1]))&&e(vo[n],vo[n+1],vo[n+2])},oi=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Ma=function(e){return typeof e=="number"},Es=function(e){return typeof e=="object"},ca=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Nu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Qs=Math.abs,m0="left",_0="top",Dd="right",Ld="bottom",Os="width",ks="height",ka="Right",Ba="Left",za="Top",Va="Bottom",jt="padding",yi="margin",$o="Width",Id="Height",nn="px",Ei=function(e){return at.getComputedStyle(e)},ry=function(e){var t=Ei(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Vp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mr=function(e,t){var n=t&&Ei(e)[jf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Gc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},g0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},sy=function(e){return function(t){return Oe.utils.snap(g0(e),t)}},Ud=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},oy=function(e){return function(t,n){return Ud(g0(e))(t,n.direction)}},wl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},ln=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Cl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Hp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rl={toggleActions:"play",anticipatePin:0},Wc={top:0,left:0,center:.5,bottom:1,right:1},pc=function(e,t){if(oi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Wc?Wc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Pl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=wt.createElement("div"),_=Hs(n)||jr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?_t:n,b=e.indexOf("start")!==-1,E=b?c:u,v="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(r===rn?Dd:Ld)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+r.op.d2],mc(g,0,r,b),g},mc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+$o]=1,s["border"+a+$o]=0,s[n.p]=t+"px",Oe.set(e,s)},st=[],Qf={},nl,Gp=function(){return vn()-Pi>34&&(nl||(nl=requestAnimationFrame(Sr)))},eo=function(){(!In||!In.isPressed||In.startX>_t.clientWidth)&&(lt.cache++,In?nl||(nl=requestAnimationFrame(Sr)):Sr(),Pi||Ws("scrollStart"),Pi=vn())},Ou=function(){u0=at.innerWidth,c0=at.innerHeight},ya=function(e){lt.cache++,(e===!0||!gn&&!l0&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!Kf||u0!==at.innerWidth||Math.abs(at.innerHeight-c0)>at.innerHeight*.25))&&Vc.restart(!0)},Gs={},ay=[],v0=function i(){return ln(nt,"scrollEnd",i)||Rs(!0)},Ws=function(e){return Gs[e]&&Gs[e].map(function(t){return t()})||ay},si=[],x0=function(e){for(var t=0;t<si.length;t+=5)(!e||si[t+4]&&si[t+4].query===e)&&(si[t].style.cssText=si[t+1],si[t].getBBox&&si[t].setAttribute("transform",si[t+2]||""),si[t+3].uncache=1)},Fd=function(e,t){var n;for(Un=0;Un<st.length;Un++)n=st[Un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Hc=!0,t&&x0(t),t||Ws("revert")},S0=function(e,t){lt.cache++,(t||!Fn)&&lt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(at.history.scrollRestoration=Rd=e)},Fn,Bs=0,Wp,ly=function(){if(Wp!==Bs){var e=Wp=Bs;requestAnimationFrame(function(){return e===Bs&&Rs(!0)})}},M0=function(){_t.appendChild(Io),Pd=!In&&Io.offsetHeight||at.innerHeight,_t.removeChild(Io)},Xp=function(e){return tl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Rs=function(e,t){if(li=wt.documentElement,_t=wt.body,Cd=[at,wt,li,_t],Pi&&!e&&!Hc){cn(nt,"scrollEnd",v0);return}M0(),Fn=nt.isRefreshing=!0,lt.forEach(function(r){return En(r)&&++r.cacheID&&(r.rec=r())});var n=Ws("refreshInit");a0&&nt.sort(),t||Fd(),lt.forEach(function(r){En(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),st.slice(0).forEach(function(r){return r.refresh()}),Hc=!1,st.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Jf=1,Xp(!0),st.forEach(function(r){var s=ji(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Xp(!1),Jf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),lt.forEach(function(r){En(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),S0(Rd,1),Vc.pause(),Bs++,Fn=2,Sr(2),st.forEach(function(r){return En(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Fn=nt.isRefreshing=!1,Ws("refresh")},eh=0,_c=1,Ha,Sr=function(e){if(e===2||!Fn&&!Hc){nt.isUpdating=!0,Ha&&Ha.update(0);var t=st.length,n=vn(),r=n-Fu>=50,s=t&&st[0].scroll();if(_c=eh>s?-1:1,Fn||(eh=s),r&&(Pi&&!lu&&n-Pi>200&&(Pi=0,Ws("scrollEnd")),va=Fu,Fu=n),_c<0){for(Un=t;Un-- >0;)st[Un]&&st[Un].update(0,r);_c=1}else for(Un=0;Un<t;Un++)st[Un]&&st[Un].update(0,r);nt.isUpdating=!1}nl=0},th=[m0,_0,Ld,Dd,yi+Va,yi+ka,yi+za,yi+Ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gc=th.concat([Os,ks,"boxSizing","max"+$o,"max"+Id,"position",yi,jt,jt+za,jt+ka,jt+Va,jt+Ba]),cy=function(e,t,n){Uo(n);var r=e._gsap;if(r.spacerIsNative)Uo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ku=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=th.length,o=t.style,a=e.style,l;s--;)l=th[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ld]=a[Dd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Os]=Gc(e,Bn)+nn,o[ks]=Gc(e,rn)+nn,o[jt]=a[yi]=a[_0]=a[m0]="0",Uo(r),a[Os]=a["max"+$o]=n[Os],a[ks]=a["max"+Id]=n[ks],a[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},uy=/([A-Z])/g,Uo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(uy,"-$1").toLowerCase())}},Dl=function(e){for(var t=gc.length,n=e.style,r=[],s=0;s<t;s++)r.push(gc[s],n[gc[s]]);return r.t=e,r},fy=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},vc={left:0,top:0},qp=function(e,t,n,r,s,o,a,l,c,u,f,h,d,g){En(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?pc("0"+e.substr(3),n):0));var _=d?d.time():0,m,p,b;if(d&&d.seek(0),isNaN(e)||(e=+e),Ma(e))d&&(e=Oe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&mc(a,n,r,!0);else{En(t)&&(t=t(l));var E=(e||"0").split(" "),v,C,R,w;b=qn(t,l)||_t,v=mr(b)||{},(!v||!v.left&&!v.top)&&Ei(b).display==="none"&&(w=b.style.display,b.style.display="block",v=mr(b),w?b.style.display=w:b.style.removeProperty("display")),C=pc(E[0],v[r.d]),R=pc(E[1]||"0",n),e=v[r.p]-c[r.p]-u+C+s-R,a&&mc(a,R,r,n-R<20||a._isStart&&R>20),n-=n-R}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var I=e+n,M=o._isStart;m="scroll"+r.d2,mc(o,I,r,M&&I>20||!M&&(f?Math.max(_t[m],li[m]):o.parentNode[m])<=I+1),f&&(c=mr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+nn))}return d&&b&&(m=mr(b),d.seek(h),p=mr(b),d._caScrollDist=m[r.p]-p[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},hy=/(webkit|moz|length|cssText|inset)/i,Yp=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Ei(e);for(o in a)!+o&&!hy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},y0=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Ll=function(e,t,n){var r={};r[t.p]="+="+n,Oe.set(e,r)},$p=function(e,t){var n=rs(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=y0(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,o.tween&&Sr()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=Oe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),nt.isTouch&&cn(e,"touchmove",n.wheelHandler),s},nt=(function(){function i(t,n){go||i.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Zf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!xa){this.update=this.refresh=this.kill=Wi;return}n=Vp(oi(n)||Ma(n)||n.nodeType?{trigger:n}:n,Rl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,E=s.once,v=s.snap,C=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,I=s.fastScrollEnd,M=s.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Bn:rn,L=!f&&f!==0,O=qn(n.scroller||at),G=Oe.core.getCache(O),$=Hs(O),ee=("pinType"in n?n.pinType:jr(O,"pinType")||$&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=L&&n.toggleActions.split(" "),B="markers"in n?n.markers:Rl.markers,le=$?0:parseFloat(Ei(O)["border"+y.p2+$o])||0,U=this,me=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Le=ny(O,$,y),Ke=iy(O,$),Ve=0,te=0,he=0,oe=rs(O,y),be,Te,Pe,ot,D,x,V,Y,Z,P,ae,j,re,ie,ve,A,S,N,q,J,X,Se,ue,Ae,ge,de,Me,Ie,we,xe,Xe,F,pe,_e,Ce,fe,se,Fe,We;if(U._startClamp=U._endClamp=!1,U._dir=y,m*=45,U.scroller=O,U.scroll=w?w.time.bind(w):oe,ot=oe(),U.vars=n,r=r||n.animation,"refreshPriority"in n&&(a0=1,n.refreshPriority===-9999&&(Ha=U)),G.tweenScroll=G.tweenScroll||{top:$p(O,rn),left:$p(O,Bn)},U.tweenTo=be=G.tweenScroll[y.p],U.scrubDuration=function(Ee){pe=Ma(Ee)&&Ee,pe?F?F.duration(Ee):F=Oe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:pe,paused:!0,onComplete:function(){return p&&p(U)}}):(F&&F.progress(1).kill(),F=0)},r&&(r.vars.lazy=!1,r._initted&&!U.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),U.animation=r.pause(),r.scrollTrigger=U,U.scrubDuration(f),xe=0,l||(l=r.vars.id)),v&&((!Es(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in _t.style&&Oe.set($?[_t,li]:O,{scrollBehavior:"auto"}),lt.forEach(function(Ee){return En(Ee)&&Ee.target===($?wt.scrollingElement||li:O)&&(Ee.smooth=!1)}),Pe=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?sy(r):v.snapTo==="labelsDirectional"?oy(r):v.directional!==!1?function(Ee,qe){return Ud(v.snapTo)(Ee,vn()-te<500?0:qe.direction)}:Oe.utils.snap(v.snapTo),_e=v.duration||{min:.1,max:2},_e=Es(_e)?Oa(_e.min,_e.max):Oa(_e,_e),Ce=Oe.delayedCall(v.delay||pe/2||.1,function(){var Ee=oe(),qe=vn()-te<500,He=be.tween;if((qe||Math.abs(U.getVelocity())<10)&&!He&&!lu&&Ve!==Ee){var je=(Ee-x)/ie,Gt=r&&!L?r.totalProgress():je,it=qe?0:(Gt-Xe)/(vn()-va)*1e3||0,Lt=Oe.utils.clamp(-je,1-je,Qs(it/2)*it/.185),Wt=je+(v.inertia===!1?0:Lt),Rt,yt,xt=v,Qn=xt.onStart,Pt=xt.onInterrupt,wn=xt.onComplete;if(Rt=Pe(Wt,U),Ma(Rt)||(Rt=Wt),yt=Math.max(0,Math.round(x+Rt*ie)),Ee<=V&&Ee>=x&&yt!==Ee){if(He&&!He._initted&&He.data<=Qs(yt-Ee))return;v.inertia===!1&&(Lt=Rt-je),be(yt,{duration:_e(Qs(Math.max(Qs(Wt-Gt),Qs(Rt-Gt))*.185/it/.05||0)),ease:v.ease||"power3",data:Qs(yt-Ee),onInterrupt:function(){return Ce.restart(!0)&&Pt&&Pt(U)},onComplete:function(){U.update(),Ve=oe(),r&&!L&&(F?F.resetTo("totalProgress",Rt,r._tTime/r._tDur):r.progress(Rt)),xe=Xe=r&&!L?r.totalProgress():U.progress,b&&b(U),wn&&wn(U)}},Ee,Lt*ie,yt-Ee-Lt*ie),Qn&&Qn(U,be.tween)}}else U.isActive&&Ve!==Ee&&Ce.restart(!0)}).pause()),l&&(Qf[l]=U),h=U.trigger=qn(h||d!==!0&&d),We=h&&h._gsap&&h._gsap.stRevert,We&&(We=We(U)),d=d===!0?h:qn(d),oi(a)&&(a={targets:h,className:a}),d&&(g===!1||g===yi||(g=!g&&d.parentNode&&d.parentNode.style&&Ei(d.parentNode).display==="flex"?!1:jt),U.pin=d,Te=Oe.core.getCache(d),Te.spacer?ve=Te.pinState:(R&&(R=qn(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Te.spacerIsNative=!!R,R&&(Te.spacerState=Dl(R))),Te.spacer=N=R||wt.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Te.pinState=ve=Dl(d)),n.force3D!==!1&&Oe.set(d,{force3D:!0}),U.spacer=N=Te.spacer,we=Ei(d),Ae=we[g+y.os2],J=Oe.getProperty(d),X=Oe.quickSetter(d,y.a,nn),ku(d,N,we),S=Dl(d)),B){j=Es(B)?Vp(B,Hp):Hp,P=Pl("scroller-start",l,O,y,j,0),ae=Pl("scroller-end",l,O,y,j,0,P),q=P["offset"+y.op.d2];var dt=qn(jr(O,"content")||O);Y=this.markerStart=Pl("start",l,dt,y,j,q,0,w),Z=this.markerEnd=Pl("end",l,dt,y,j,q,0,w),w&&(Fe=Oe.quickSetter([Y,Z],y.a,nn)),!ee&&!(er.length&&jr(O,"fixedMarkers")===!0)&&(ry($?_t:O),Oe.set([P,ae],{force3D:!0}),de=Oe.quickSetter(P,y.a,nn),Ie=Oe.quickSetter(ae,y.a,nn))}if(w){var De=w.vars.onUpdate,ke=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){U.update(0,0,1),De&&De.apply(w,ke||[])})}if(U.previous=function(){return st[st.indexOf(U)-1]},U.next=function(){return st[st.indexOf(U)+1]},U.revert=function(Ee,qe){if(!qe)return U.kill(!0);var He=Ee!==!1||!U.enabled,je=gn;He!==U.isReverted&&(He&&(fe=Math.max(oe(),U.scroll.rec||0),he=U.progress,se=r&&r.progress()),Y&&[Y,Z,P,ae].forEach(function(Gt){return Gt.style.display=He?"none":"block"}),He&&(gn=U,U.update(He)),d&&(!C||!U.isActive)&&(He?cy(d,N,ve):ku(d,N,Ei(d),ge)),He||U.update(He),gn=je,U.isReverted=He)},U.refresh=function(Ee,qe,He,je){if(!((gn||!U.enabled)&&!qe)){if(d&&Ee&&Pi){cn(i,"scrollEnd",v0);return}!Fn&&me&&me(U),gn=U,be.tween&&!He&&(be.tween.kill(),be.tween=0),F&&F.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(ct){return ct.vars.immediateRender&&ct.render(0,!0,!0)})),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Gt=Le(),it=Ke(),Lt=w?w.duration():ji(O,y),Wt=ie<=.01||!ie,Rt=0,yt=je||0,xt=Es(He)?He.end:n.end,Qn=n.endTrigger||h,Pt=Es(He)?He.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),wn=U.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,U),_i=h&&Math.max(0,st.indexOf(U))||0,tn=_i,T,k,K,Q,z,ce,ye,Ne,Ue,Ge,ze,Be,Qe;for(B&&Es(He)&&(Be=Oe.getProperty(P,y.p),Qe=Oe.getProperty(ae,y.p));tn-- >0;)ce=st[tn],ce.end||ce.refresh(0,1)||(gn=U),ye=ce.pin,ye&&(ye===h||ye===d||ye===wn)&&!ce.isReverted&&(Ge||(Ge=[]),Ge.unshift(ce),ce.revert(!0,!0)),ce!==st[tn]&&(_i--,tn--);for(En(Pt)&&(Pt=Pt(U)),Pt=Op(Pt,"start",U),x=qp(Pt,h,Gt,y,oe(),Y,P,U,it,le,ee,Lt,w,U._startClamp&&"_startClamp")||(d?-.001:0),En(xt)&&(xt=xt(U)),oi(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(oi(Pt)?Pt.split(" ")[0]:"")+xt:(Rt=pc(xt.substr(2),Gt),xt=oi(Pt)?Pt:(w?Oe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,x):x)+Rt,Qn=h)),xt=Op(xt,"end",U),V=Math.max(x,qp(xt||(Qn?"100% 0":Lt),Qn,Gt,y,oe()+Rt,Z,ae,U,it,le,ee,Lt,w,U._endClamp&&"_endClamp"))||-.001,Rt=0,tn=_i;tn--;)ce=st[tn],ye=ce.pin,ye&&ce.start-ce._pinPush<=x&&!w&&ce.end>0&&(T=ce.end-(U._startClamp?Math.max(0,ce.start):ce.start),(ye===h&&ce.start-ce._pinPush<x||ye===wn)&&isNaN(Pt)&&(Rt+=T*(1-ce.progress)),ye===d&&(yt+=T));if(x+=Rt,V+=Rt,U._startClamp&&(U._startClamp+=Rt),U._endClamp&&!Fn&&(U._endClamp=V||-.001,V=Math.min(V,ji(O,y))),ie=V-x||(x-=.01)&&.001,Wt&&(he=Oe.utils.clamp(0,1,Oe.utils.normalize(x,V,fe))),U._pinPush=yt,Y&&Rt&&(T={},T[y.a]="+="+Rt,wn&&(T[y.p]="-="+oe()),Oe.set([Y,Z],T)),d&&!(Jf&&U.end>=ji(O,y)))T=Ei(d),Q=y===rn,K=oe(),Se=parseFloat(J(y.a))+yt,!Lt&&V>1&&(ze=($?wt.scrollingElement||li:O).style,ze={style:ze,value:ze["overflow"+y.a.toUpperCase()]},$&&Ei(_t)["overflow"+y.a.toUpperCase()]!=="scroll"&&(ze.style["overflow"+y.a.toUpperCase()]="scroll")),ku(d,N,T),S=Dl(d),k=mr(d,!0),Ne=ee&&rs(O,Q?Bn:rn)(),g?(ge=[g+y.os2,ie+yt+nn],ge.t=N,tn=g===jt?Gc(d,y)+ie+yt:0,tn&&(ge.push(y.d,tn+nn),N.style.flexBasis!=="auto"&&(N.style.flexBasis=tn+nn)),Uo(ge),wn&&st.forEach(function(ct){ct.pin===wn&&ct.vars.pinSpacing!==!1&&(ct._subPinOffset=!0)}),ee&&oe(fe)):(tn=Gc(d,y),tn&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=tn+nn)),ee&&(z={top:k.top+(Q?K-x:Ne)+nn,left:k.left+(Q?Ne:K-x)+nn,boxSizing:"border-box",position:"fixed"},z[Os]=z["max"+$o]=Math.ceil(k.width)+nn,z[ks]=z["max"+Id]=Math.ceil(k.height)+nn,z[yi]=z[yi+za]=z[yi+ka]=z[yi+Va]=z[yi+Ba]="0",z[jt]=T[jt],z[jt+za]=T[jt+za],z[jt+ka]=T[jt+ka],z[jt+Va]=T[jt+Va],z[jt+Ba]=T[jt+Ba],A=fy(ve,z,C),Fn&&oe(0)),r?(Ue=r._initted,Iu(1),r.render(r.duration(),!0,!0),ue=J(y.a)-Se+ie+yt,Me=Math.abs(ie-ue)>1,ee&&Me&&A.splice(A.length-2,2),r.render(0,!0,!0),Ue||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Iu(0)):ue=ie,ze&&(ze.value?ze.style["overflow"+y.a.toUpperCase()]=ze.value:ze.style.removeProperty("overflow-"+y.a));else if(h&&oe()&&!w)for(k=h.parentNode;k&&k!==_t;)k._pinOffset&&(x-=k._pinOffset,V-=k._pinOffset),k=k.parentNode;Ge&&Ge.forEach(function(ct){return ct.revert(!1,!0)}),U.start=x,U.end=V,ot=D=Fn?fe:oe(),!w&&!Fn&&(ot<fe&&oe(fe),U.scroll.rec=0),U.revert(!1,!0),te=vn(),Ce&&(Ve=-1,Ce.restart(!0)),gn=0,r&&L&&(r._initted||se)&&r.progress()!==se&&r.progress(se||0,!0).render(r.time(),!0,!0),(Wt||he!==U.progress||w||_||r&&!r._initted)&&(r&&!L&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(w&&x<-.001&&!he?Oe.utils.normalize(x,V,0):he,!0),U.progress=Wt||(ot-x)/ie===he?0:he),d&&g&&(N._pinOffset=Math.round(U.progress*ue)),F&&F.invalidate(),isNaN(Be)||(Be-=Oe.getProperty(P,y.p),Qe-=Oe.getProperty(ae,y.p),Ll(P,y,Be),Ll(Y,y,Be-(je||0)),Ll(ae,y,Qe),Ll(Z,y,Qe-(je||0))),Wt&&!Fn&&U.update(),u&&!Fn&&!re&&(re=!0,u(U),re=!1)}},U.getVelocity=function(){return(oe()-D)/(vn()-va)*1e3||0},U.endAnimation=function(){ca(U.callbackAnimation),r&&(F?F.progress(1):r.paused()?L||ca(r,U.direction<0,1):ca(r,r.reversed()))},U.labelToScroll=function(Ee){return r&&r.labels&&(x||U.refresh()||x)+r.labels[Ee]/r.duration()*ie||0},U.getTrailing=function(Ee){var qe=st.indexOf(U),He=U.direction>0?st.slice(0,qe).reverse():st.slice(qe+1);return(oi(Ee)?He.filter(function(je){return je.vars.preventOverlaps===Ee}):He).filter(function(je){return U.direction>0?je.end<=x:je.start>=V})},U.update=function(Ee,qe,He){if(!(w&&!He&&!Ee)){var je=Fn===!0?fe:U.scroll(),Gt=Ee?0:(je-x)/ie,it=Gt<0?0:Gt>1?1:Gt||0,Lt=U.progress,Wt,Rt,yt,xt,Qn,Pt,wn,_i;if(qe&&(D=ot,ot=w?oe():je,v&&(Xe=xe,xe=r&&!L?r.totalProgress():it)),m&&d&&!gn&&!Tl&&Pi&&(!it&&x<je+(je-D)/(vn()-va)*m?it=1e-4:it===1&&V>je+(je-D)/(vn()-va)*m&&(it=.9999)),it!==Lt&&U.enabled){if(Wt=U.isActive=!!it&&it<1,Rt=!!Lt&&Lt<1,Pt=Wt!==Rt,Qn=Pt||!!it!=!!Lt,U.direction=it>Lt?1:-1,U.progress=it,Qn&&!gn&&(yt=it&&!Lt?0:it===1?1:Lt===1?2:3,L&&(xt=!Pt&&H[yt+1]!=="none"&&H[yt+1]||H[yt],_i=r&&(xt==="complete"||xt==="reset"||xt in r))),M&&(Pt||_i)&&(_i||f||!r)&&(En(M)?M(U):U.getTrailing(M).forEach(function(K){return K.endAnimation()})),L||(F&&!gn&&!Tl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",it,r._tTime/r._tDur):(F.vars.totalProgress=it,F.invalidate().restart())):r&&r.totalProgress(it,!!(gn&&(te||Ee)))),d){if(Ee&&g&&(N.style[g+y.os2]=Ae),!ee)X(Sa(Se+ue*it));else if(Qn){if(wn=!Ee&&it>Lt&&V+1>je&&je+1>=ji(O,y),C)if(!Ee&&(Wt||wn)){var tn=mr(d,!0),T=je-x;Yp(d,_t,tn.top+(y===rn?T:0)+nn,tn.left+(y===rn?0:T)+nn)}else Yp(d,N);Uo(Wt||wn?A:S),Me&&it<1&&Wt||X(Se+(it===1&&!wn?ue:0))}}v&&!be.tween&&!gn&&!Tl&&Ce.restart(!0),a&&(Pt||E&&it&&(it<1||!Uu))&&tl(a.targets).forEach(function(K){return K.classList[Wt||E?"add":"remove"](a.className)}),o&&!L&&!Ee&&o(U),Qn&&!gn?(L&&(_i&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(U)),(Pt||!Uu)&&(c&&Pt&&Nu(U,c),W[yt]&&Nu(U,W[yt]),E&&(it===1?U.kill(!1,1):W[yt]=0),Pt||(yt=it===1?1:3,W[yt]&&Nu(U,W[yt]))),I&&!Wt&&Math.abs(U.getVelocity())>(Ma(I)?I:2500)&&(ca(U.callbackAnimation),F?F.progress(1):ca(r,xt==="reverse"?1:!it,1))):L&&o&&!gn&&o(U)}if(Ie){var k=w?je/w.duration()*(w._caScrollDist||0):je;de(k+(P._isFlipped?1:0)),Ie(k)}Fe&&Fe(-je/w.duration()*(w._caScrollDist||0))}},U.enable=function(Ee,qe){U.enabled||(U.enabled=!0,cn(O,"resize",ya),$||cn(O,"scroll",eo),me&&cn(i,"refreshInit",me),Ee!==!1&&(U.progress=he=0,ot=D=Ve=oe()),qe!==!1&&U.refresh())},U.getTween=function(Ee){return Ee&&be?be.tween:F},U.setPositions=function(Ee,qe,He,je){if(w){var Gt=w.scrollTrigger,it=w.duration(),Lt=Gt.end-Gt.start;Ee=Gt.start+Lt*Ee/it,qe=Gt.start+Lt*qe/it}U.refresh(!1,!1,{start:kp(Ee,He&&!!U._startClamp),end:kp(qe,He&&!!U._endClamp)},je),U.update()},U.adjustPinSpacing=function(Ee){if(ge&&Ee){var qe=ge.indexOf(y.d)+1;ge[qe]=parseFloat(ge[qe])+Ee+nn,ge[1]=parseFloat(ge[1])+Ee+nn,Uo(ge)}},U.disable=function(Ee,qe){if(U.enabled&&(Ee!==!1&&U.revert(!0,!0),U.enabled=U.isActive=!1,qe||F&&F.pause(),fe=0,Te&&(Te.uncache=1),me&&ln(i,"refreshInit",me),Ce&&(Ce.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!$)){for(var He=st.length;He--;)if(st[He].scroller===O&&st[He]!==U)return;ln(O,"resize",ya),$||ln(O,"scroll",eo)}},U.kill=function(Ee,qe){U.disable(Ee,qe),F&&!qe&&F.kill(),l&&delete Qf[l];var He=st.indexOf(U);He>=0&&st.splice(He,1),He===Un&&_c>0&&Un--,He=0,st.forEach(function(je){return je.scroller===U.scroller&&(He=1)}),He||Fn||(U.scroll.rec=0),r&&(r.scrollTrigger=null,Ee&&r.revert({kill:!1}),qe||r.kill()),Y&&[Y,Z,P,ae].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),Ha===U&&(Ha=0),d&&(Te&&(Te.uncache=1),He=0,st.forEach(function(je){return je.pin===d&&He++}),He||(Te.spacer=0)),n.onKill&&n.onKill(U)},st.push(U),U.enable(!1,!1),We&&We(U),r&&r.add&&!ie){var Je=U.update;U.update=function(){U.update=Je,lt.cache++,x||V||U.refresh()},Oe.delayedCall(.01,U.update),ie=.01,x=V=0}else U.refresh();d&&ly()},i.register=function(n){return go||(Oe=n||h0(),f0()&&window.document&&i.enable(),go=xa),go},i.defaults=function(n){if(n)for(var r in n)Rl[r]=n[r];return Rl},i.disable=function(n,r){xa=0,st.forEach(function(o){return o[r?"kill":"disable"](n)}),ln(at,"wheel",eo),ln(wt,"scroll",eo),clearInterval(bl),ln(wt,"touchcancel",Wi),ln(_t,"touchstart",Wi),wl(ln,wt,"pointerdown,touchstart,mousedown",Bp),wl(ln,wt,"pointerup,touchend,mouseup",zp),Vc.kill(),Al(ln);for(var s=0;s<lt.length;s+=3)Cl(ln,lt[s],lt[s+1]),Cl(ln,lt[s],lt[s+2])},i.enable=function(){if(at=window,wt=document,li=wt.documentElement,_t=wt.body,Oe&&(tl=Oe.utils.toArray,Oa=Oe.utils.clamp,Zf=Oe.core.context||Wi,Iu=Oe.core.suppressOverwrites||Wi,Rd=at.history.scrollRestoration||"auto",eh=at.pageYOffset||0,Oe.core.globals("ScrollTrigger",i),_t)){xa=1,Io=document.createElement("div"),Io.style.height="100vh",Io.style.position="absolute",M0(),ty(),Yt.register(Oe),i.isTouch=Yt.isTouch,Or=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Kf=Yt.isTouch===1,cn(at,"wheel",eo),Cd=[at,wt,li,_t],Oe.matchMedia?(i.matchMedia=function(c){var u=Oe.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Oe.addEventListener("matchMediaInit",function(){return Fd()}),Oe.addEventListener("matchMediaRevert",function(){return x0()}),Oe.addEventListener("matchMedia",function(){Rs(0,1),Ws("matchMedia")}),Oe.matchMedia().add("(orientation: portrait)",function(){return Ou(),Ou})):console.warn("Requires GSAP 3.11.0 or later"),Ou(),cn(wt,"scroll",eo);var n=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Oe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=mr(_t),rn.m=Math.round(a.top+rn.sc())||0,Bn.m=Math.round(a.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(_t.setAttribute("style",""),_t.removeAttribute("style")),bl=setInterval(Gp,250),Oe.delayedCall(.5,function(){return Tl=0}),cn(wt,"touchcancel",Wi),cn(_t,"touchstart",Wi),wl(cn,wt,"pointerdown,touchstart,mousedown",Bp),wl(cn,wt,"pointerup,touchend,mouseup",zp),jf=Oe.utils.checkPrefix("transform"),gc.push(jf),go=vn(),Vc=Oe.delayedCall(.2,Rs).pause(),vo=[wt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;wt.hidden?(Fp=c,Np=u):(Fp!==c||Np!==u)&&ya()},wt,"DOMContentLoaded",Rs,at,"load",Rs,at,"resize",ya],Al(cn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<lt.length;l+=3)Cl(ln,lt[l],lt[l+1]),Cl(ln,lt[l],lt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Uu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(bl)||(bl=r)&&setInterval(Gp,r),"ignoreMobileResize"in n&&(Kf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Al(ln)||Al(cn,n.autoRefreshEvents||"none"),l0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=qn(n),o=lt.indexOf(s),a=Hs(s);~o&&lt.splice(o,a?6:2),r&&(a?er.unshift(at,r,_t,r,li,r):er.unshift(s,r))},i.clearMatchMedia=function(n){st.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(oi(n)?qn(n):n).getBoundingClientRect(),a=o[s?Os:ks]*r||0;return s?o.right-a>0&&o.left+a<at.innerWidth:o.bottom-a>0&&o.top+a<at.innerHeight},i.positionInViewport=function(n,r,s){oi(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[s?Os:ks],l=r==null?a/2:r in Wc?Wc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/at.innerWidth:(o.top+l)/at.innerHeight},i.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Gs.killAll||[];Gs={},r.forEach(function(s){return s()})}},i})();nt.version="3.13.0";nt.saveStyles=function(i){return i?tl(i).forEach(function(e){if(e&&e.style){var t=si.indexOf(e);t>=0&&si.splice(t,5),si.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Zf())}}):si};nt.revert=function(i,e){return Fd(!i,e)};nt.create=function(i,e){return new nt(i,e)};nt.refresh=function(i){return i?ya(!0):(go||nt.register())&&Rs(!0)};nt.update=function(i){return++lt.cache&&Sr(i===!0?2:0)};nt.clearScrollMemory=S0;nt.maxScroll=function(i,e){return ji(i,e?Bn:rn)};nt.getScrollFunc=function(i,e){return rs(qn(i),e?Bn:rn)};nt.getById=function(i){return Qf[i]};nt.getAll=function(){return st.filter(function(i){return i.vars.id!=="ScrollSmoother"})};nt.isScrolling=function(){return!!Pi};nt.snapDirectional=Ud;nt.addEventListener=function(i,e){var t=Gs[i]||(Gs[i]=[]);~t.indexOf(e)||t.push(e)};nt.removeEventListener=function(i,e){var t=Gs[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};nt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=Oe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),cn(nt,"refresh",function(){return s=e.batchMax()})),tl(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(nt.create(c))}),t};var jp=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Bu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===li&&i(_t,t)},Il={auto:1,scroll:1},dy=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=vn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Il[(l=Ei(s)).overflowY]||Il[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Hs(s)&&(Il[(l=Ei(s)).overflowY]||Il[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},E0=function(e,t,n,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&dy,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(wt,Yt.eventTypes[0],Zp,!1,!0)},onDisable:function(){return ln(wt,Yt.eventTypes[0],Zp,!0)}})},py=/(input|label|select|textarea)/i,Kp,Zp=function(e){var t=py.test(e.target.tagName);(t||Kp)&&(e._gsapAllow=!0,Kp=t)},my=function(e){Es(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=qn(e.target)||li,u=Oe.core.globals().ScrollSmoother,f=u&&u.get(),h=Or&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=rs(c,rn),g=rs(c,Bn),_=1,m=(Yt.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,p=0,b=En(r)?function(){return r(a)}:function(){return r||2.8},E,v,C=E0(c,e.type,!0,s),R=function(){return v=!1},w=Wi,I=Wi,M=function(){l=ji(c,rn),I=Oa(Or?1:0,l),n&&(w=Oa(0,ji(c,Bn))),E=Bs},y=function(){h._gsap.y=Sa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(R);var B=Sa(a.deltaY/2),le=I(d.v-B);if(h&&le!==d.v+d.offset){d.offset=le-d.v;var U=Sa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",h._gsap.y=U+"px",d.cacheID=lt.cache,Sr()}return!0}d.offset&&y(),v=!0},O,G,$,ee,W=function(){M(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return h&&Oe.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return Or&&H.type==="touchmove"&&L()||_>1.05&&H.type!=="touchstart"||a.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){v=!1;var H=_;_=Sa((at.visualViewport&&at.visualViewport.scale||1)/m),O.pause(),H!==_&&Bu(c,_>1.01?!0:n?!1:"x"),G=g(),$=d(),M(),E=Bs},e.onRelease=e.onGestureStart=function(H,B){if(d.offset&&y(),!B)ee.restart(!0);else{lt.cache++;var le=b(),U,me;n&&(U=g(),me=U+le*.05*-H.velocityX/.227,le*=jp(g,U,me,ji(c,Bn)),O.vars.scrollX=w(me)),U=d(),me=U+le*.05*-H.velocityY/.227,le*=jp(d,U,me,ji(c,rn)),O.vars.scrollY=I(me),O.invalidate().duration(le).play(.01),(Or&&O.vars.scrollY>=l||U>=l-1)&&Oe.to({},{onUpdate:W,duration:le})}o&&o(H)},e.onWheel=function(){O._ts&&O.pause(),vn()-p>1e3&&(E=0,p=vn())},e.onChange=function(H,B,le,U,me){if(Bs!==E&&M(),B&&n&&g(w(U[2]===B?G+(H.startX-H.x):g()+B-U[1])),le){d.offset&&y();var Le=me[2]===le,Ke=Le?$+H.startY-H.y:d()+le-me[1],Ve=I(Ke);Le&&Ke!==Ve&&($+=Ve-Ke),d(Ve)}(le||B)&&Sr()},e.onEnable=function(){Bu(c,n?!1:"x"),nt.addEventListener("refresh",W),cn(at,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Bu(c,!0),ln(at,"resize",W),nt.removeEventListener("refresh",W),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=Or,Or&&!d()&&d(1),Or&&Oe.ticker.add(Wi),ee=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y0(d,d(),function(){return O.pause()})},onUpdate:Sr,onComplete:ee.vars.onComplete}),a};nt.sort=function(i){if(En(i))return st.sort(i);var e=at.pageYOffset||0;return nt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),st.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};nt.observe=function(i){return new Yt(i)};nt.normalizeScroll=function(i){if(typeof i>"u")return In;if(i===!0&&In)return In.enable();if(i===!1){In&&In.kill(),In=i;return}var e=i instanceof Yt?i:my(i);return In&&In.target===e.target&&In.kill(),Hs(e.target)&&(In=e),e};nt.core={_getVelocityProp:$f,_inputObserver:E0,_scrollers:lt,_proxies:er,bridge:{ss:function(){Pi||Ws("scrollStart"),Pi=vn()},ref:function(){return gn}}};h0()&&Oe.registerPlugin(nt);const _y="/assets/logo1-DvzqMviy.png",gy="/assets/logo2--6AzuqwK.png",vy="/assets/logo3-DSY_MYYz.png",xy="/assets/logo4-DZubB_ou.png",Sy="/assets/logo5-ClxAYN_R.png",My="/assets/logo6-CMVGadOG.png",yy="/assets/logo7-CV2xO7mx.png",Ey={class:"skill",id:"skill"},by={class:"skill-content"},Ty=["src","alt"],Ay={class:"skill-content"},wy=["src","alt"],Cy={__name:"Skill",setup(i){Jt.registerPlugin(nt);const e=hn(null),t=hn(null);hn(null);const n=hn([{name:"Laravel",logo:xy},{name:"Vue.js",logo:Sy},{name:"HTML",logo:My},{name:"CSS",logo:yy}]),r=hn([{name:"After Effect",logo:_y},{name:"Adobe Illustrator",logo:gy},{name:"Premiere Pro",logo:vy}]);function s(l){return[...l.slice(1),l[0]]}function o(l,c){const u=l.value.querySelectorAll(".skill-item");Jt.to(u,{rotateY:90,opacity:0,duration:.4,stagger:.05,ease:"power1.in",onComplete:()=>{c.value=s(c.value),Bo(()=>{const f=l.value.querySelectorAll(".skill-item");Jt.fromTo(f,{rotateY:-90,opacity:0},{rotateY:0,opacity:1,duration:.4,stagger:.05,ease:"power1.out"})})}})}function a(l,c,u=8e3){const f=()=>{o(l,c),setTimeout(f,u)};setTimeout(f,u)}return $s(()=>{Bo(()=>{const l=c=>{const u=c.value.querySelectorAll(".skill-item");Jt.from(c.value.querySelector("h1"),{y:-20,opacity:0,duration:.4,ease:"power2.out",scrollTrigger:{trigger:c.value,start:"top 85%",toggleActions:"play none none none"}}),Jt.from(u,{y:10,opacity:0,scale:.95,duration:.5,stagger:.05,ease:"back.out(1.1)",scrollTrigger:{trigger:c.value,start:"top 85%",toggleActions:"play none none none"}})};e.value&&l(e),t.value&&l(t),e.value&&a(e,n,5e3),t.value&&a(t,r,5e3)})}),(l,c)=>(It(),kt("section",Ey,[$e("div",{class:"skill-wrapper",ref_key:"webSkills",ref:e},[c[0]||(c[0]=$e("h1",null,"Web Developer",-1)),$e("div",by,[(It(!0),kt(Sn,null,zo(n.value,(u,f)=>(It(),kt("div",{class:"skill-item",key:f},[$e("img",{src:u.logo,alt:u.name,loading:"lazy"},null,8,Ty),$e("p",null,To(u.name),1)]))),128))])],512),$e("div",{class:"skill-wrapper",ref_key:"creativeSkills",ref:t},[c[1]||(c[1]=$e("h1",null,"Design & Creative Tools",-1)),$e("div",Ay,[(It(!0),kt(Sn,null,zo(r.value,(u,f)=>(It(),kt("div",{class:"skill-item",key:f},[$e("img",{src:u.logo,alt:u.name,loading:"lazy"},null,8,wy),$e("p",null,To(u.name),1)]))),128))])],512)]))}},Ry="/assets/2-C63z_wXN.jpg",Py="/assets/3-CiytTz2C.png",Dy="/assets/4-tRWgu72C.png",Ly="/assets/5-B0jMog8d.jpg",Iy="/assets/6-B8kFe6SM.png",Uy="/assets/7-BfrJzdMg.png",Fy="/assets/8-BDspBybI.jpg",Ny={class:"task-group-wrapper"},Oy={class:"task-group-container row row-top"},ky={key:0,class:"desain"},By=["src","alt"],zy={class:"task-group-container row row-bottom"},Vy={key:0,class:"desain"},Hy=["src","alt"],Gy={__name:"Project",setup(i){Jt.registerPlugin(nt);const e=[{title:"Desain Poster",image:Iy},{title:"Desain Vector",image:Ry},{title:"Desain WPAP",image:Py},{title:"Desain Vector",image:Dy},{title:"Desain Logo",image:Ly},{title:"Desain Logo",image:Uy},{title:"Desain Logo",image:Fy}],t=hn(null);return $s(()=>{Bo(()=>{const n=t.value.querySelectorAll(".row-top .task-card"),r=t.value.querySelectorAll(".row-bottom .task-card");Jt.set(n,{opacity:0,y:150,rotationX:-60,transformOrigin:"center bottom"}),Jt.set(r,{opacity:0,y:150,rotationX:60,transformOrigin:"center top"}),Jt.set(".gallery-title",{opacity:0,y:-50,scale:.8}),Jt.timeline({scrollTrigger:{trigger:t.value,start:"top center",end:"bottom center",toggleActions:"play reverse play reverse"}}).to(n,{opacity:1,y:0,rotationX:0,duration:1,ease:"back.out(1.7)",stagger:.15}).to(r,{opacity:1,y:0,rotationX:0,duration:1,ease:"back.out(1.7)",stagger:.15},"-=0.5").to(".gallery-title",{opacity:1,y:0,scale:1,duration:1,ease:"power3.out"},"-=0.5")})}),(n,r)=>(It(),kt("section",{class:"experience gallery-section",id:"gallery",ref_key:"gallerySection",ref:t},[$e("div",Ny,[r[0]||(r[0]=$e("h2",{class:"gallery-title"},"Gallery",-1)),$e("div",Oy,[(It(!0),kt(Sn,null,zo(e.slice(0,4),s=>(It(),kt("div",{class:"task-card",key:s.title},[s.image?(It(),kt("div",ky,[$e("img",{src:s.image,alt:s.title,loading:"lazy"},null,8,By)])):Pc("",!0)]))),128))]),$e("div",zy,[(It(!0),kt(Sn,null,zo(e.slice(4),s=>(It(),kt("div",{class:"task-card",key:s.title},[s.image?(It(),kt("div",Vy,[$e("img",{src:s.image,alt:s.title,loading:"lazy"},null,8,Hy)])):Pc("",!0)]))),128))])])],512))}};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nd="179",Wy=0,Jp=1,Xy=2,b0=1,qy=2,cr=3,ss=0,Zn=1,_r=2,Kr=0,Fo=1,nh=2,Qp=3,em=4,Yy=5,As=100,$y=101,jy=102,Ky=103,Zy=104,Jy=200,Qy=201,eE=202,tE=203,ih=204,rh=205,nE=206,iE=207,rE=208,sE=209,oE=210,aE=211,lE=212,cE=213,uE=214,sh=0,oh=1,ah=2,jo=3,lh=4,ch=5,uh=6,fh=7,T0=0,fE=1,hE=2,Zr=0,dE=1,pE=2,mE=3,_E=4,gE=5,vE=6,xE=7,A0=300,Ko=301,Zo=302,hh=303,dh=304,cu=306,ph=1e3,Ps=1001,mh=1002,Bi=1003,SE=1004,Ul=1005,Ki=1006,zu=1007,Ds=1008,wr=1009,w0=1010,C0=1011,il=1012,Od=1013,Xs=1014,vr=1015,hl=1016,kd=1017,Bd=1018,rl=1020,R0=35902,P0=1021,D0=1022,Oi=1023,sl=1026,ol=1027,L0=1028,zd=1029,I0=1030,Vd=1031,Hd=1033,xc=33776,Sc=33777,Mc=33778,yc=33779,_h=35840,gh=35841,vh=35842,xh=35843,Sh=36196,Mh=37492,yh=37496,Eh=37808,bh=37809,Th=37810,Ah=37811,wh=37812,Ch=37813,Rh=37814,Ph=37815,Dh=37816,Lh=37817,Ih=37818,Uh=37819,Fh=37820,Nh=37821,Ec=36492,Oh=36494,kh=36495,U0=36283,Bh=36284,zh=36285,Vh=36286,ME=3200,yE=3201,EE=0,bE=1,zr="",Mi="srgb",Jo="srgb-linear",Xc="linear",St="srgb",to=7680,tm=519,TE=512,AE=513,wE=514,F0=515,CE=516,RE=517,PE=518,DE=519,nm=35044,im="300 es",Zi=2e3,qc=2001;class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Hh=180/Math.PI;function dl(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function LE(i,e){return(i%e+e)%e}function Hu(i,e,t){return(1-t)*i+t*e}function ua(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(e=0,t=0){Mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),R=Math.atan2(C,p*b);m=Math.sin(m*R)/C,a=Math.sin(a*R)/C}const v=a*b;if(l=l*m+h*v,c=c*m+d*v,u=u*m+g*v,f=f*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gu=new ne,rm=new pl;class et{constructor(e,t,n,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],b=r[1],E=r[4],v=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*_+a*b+l*C,s[3]=o*m+a*E+l*R,s[6]=o*p+a*v+l*w,s[1]=c*_+u*b+f*C,s[4]=c*m+u*E+f*R,s[7]=c*p+u*v+f*w,s[2]=h*_+d*b+g*C,s[5]=h*m+d*E+g*R,s[8]=h*p+d*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new et;function N0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function IE(){const i=Yc("canvas");return i.style.display="block",i}const sm={};function No(i){i in sm||(sm[i]=!0,console.warn(i))}function UE(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const om=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),am=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FE(){const i={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===St&&(r.r=Mr(r.r),r.g=Mr(r.g),r.b=Mr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(r.r=Oo(r.r),r.g=Oo(r.g),r.b=Oo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zr?Xc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jo]:{primaries:e,whitePoint:n,transfer:Xc,toXYZ:om,fromXYZ:am,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:n,transfer:St,toXYZ:om,fromXYZ:am,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),i}const mt=FE();function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let no;class NE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{no===void 0&&(no=Yc("canvas")),no.width=e.width,no.height=e.height;const r=no.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=no}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mr(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OE=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Xu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?NE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kE=0;const qu=new ne;class zn extends ea{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=Ps,r=Ps,s=Ki,o=Ds,a=Oi,l=wr,c=zn.DEFAULT_ANISOTROPY,u=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=dl(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case Ps:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case Ps:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=A0;zn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,n=0,r=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(d+1)/2,C=(p+1)/2,R=(u+h)/4,w=(f+_)/4,I=(g+m)/4;return E>v&&E>C?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=w/n):v>C?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=R/r,s=I/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=I/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends ea{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new zn(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qs extends BE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class O0 extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zE extends zn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ml{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Li):Li.fromBufferAttribute(s,o),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fl.copy(n.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Nl.subVectors(this.max,fa),io.subVectors(e.a,fa),ro.subVectors(e.b,fa),so.subVectors(e.c,fa),Dr.subVectors(ro,io),Lr.subVectors(so,ro),ps.subVectors(io,so);let t=[0,-Dr.z,Dr.y,0,-Lr.z,Lr.y,0,-ps.z,ps.y,Dr.z,0,-Dr.x,Lr.z,0,-Lr.x,ps.z,0,-ps.x,-Dr.y,Dr.x,0,-Lr.y,Lr.x,0,-ps.y,ps.x,0];return!Yu(t,io,ro,so,Nl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,io,ro,so,Nl))?!1:(Ol.crossVectors(Dr,Lr),t=[Ol.x,Ol.y,Ol.z],Yu(t,io,ro,so,Nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Li=new ne,Fl=new ml,io=new ne,ro=new ne,so=new ne,Dr=new ne,Lr=new ne,ps=new ne,fa=new ne,Nl=new ne,Ol=new ne,ms=new ne;function Yu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ms.fromArray(i,s);const a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VE=new ml,ha=new ne,$u=new ne;class uu{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):VE.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const t=ha.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add($u)),this.expandByPoint(ha.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const sr=new ne,ju=new ne,kl=new ne,Ir=new ne,Ku=new ne,Bl=new ne,Zu=new ne;class k0{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ju.copy(e).add(t).multiplyScalar(.5),kl.copy(t).sub(e).normalize(),Ir.copy(this.origin).sub(ju);const s=e.distanceTo(t)*.5,o=-this.direction.dot(kl),a=Ir.dot(this.direction),l=-Ir.dot(kl),c=Ir.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ju).addScaledVector(kl,h),d}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),r=sr.dot(sr)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,r,s){Ku.subVectors(t,e),Bl.subVectors(n,e),Zu.crossVectors(Ku,Bl);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ir.subVectors(this.origin,e);const l=a*this.direction.dot(Bl.crossVectors(Ir,Bl));if(l<0)return null;const c=a*this.direction.dot(Ku.cross(Ir));if(c<0||l+c>o)return null;const u=-a*Ir.dot(Zu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HE,e,GE)}lookAt(e,t,n){const r=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ur.crossVectors(n,ni),Ur.lengthSq()===0&&(Math.abs(n.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ur.crossVectors(n,ni)),Ur.normalize(),zl.crossVectors(ni,Ur),r[0]=Ur.x,r[4]=zl.x,r[8]=ni.x,r[1]=Ur.y,r[5]=zl.y,r[9]=ni.y,r[2]=Ur.z,r[6]=zl.z,r[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],v=n[11],C=n[15],R=r[0],w=r[4],I=r[8],M=r[12],y=r[1],L=r[5],O=r[9],G=r[13],$=r[2],ee=r[6],W=r[10],H=r[14],B=r[3],le=r[7],U=r[11],me=r[15];return s[0]=o*R+a*y+l*$+c*B,s[4]=o*w+a*L+l*ee+c*le,s[8]=o*I+a*O+l*W+c*U,s[12]=o*M+a*G+l*H+c*me,s[1]=u*R+f*y+h*$+d*B,s[5]=u*w+f*L+h*ee+d*le,s[9]=u*I+f*O+h*W+d*U,s[13]=u*M+f*G+h*H+d*me,s[2]=g*R+_*y+m*$+p*B,s[6]=g*w+_*L+m*ee+p*le,s[10]=g*I+_*O+m*W+p*U,s[14]=g*M+_*G+m*H+p*me,s[3]=b*R+E*y+v*$+C*B,s[7]=b*w+E*L+v*ee+C*le,s[11]=b*I+E*O+v*W+C*U,s[15]=b*M+E*G+v*H+C*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,E=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,v=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,R=t*b+n*E+r*v+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=b*w,e[1]=(_*h*s-f*m*s-_*r*d+n*m*d+f*r*p-n*h*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*p+n*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*w,e[4]=E*w,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=v*w,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*w,e[12]=C*w,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,b=l*c,E=l*u,v=l*f,C=n.x,R=n.y,w=n.z;return r[0]=(1-(_+p))*C,r[1]=(d+v)*C,r[2]=(g-E)*C,r[3]=0,r[4]=(d-v)*R,r[5]=(1-(h+p))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(g+E)*w,r[9]=(m-b)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ii.copy(this);const c=1/s,u=1/o,f=1/a;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=f,Ii.elements[9]*=f,Ii.elements[10]*=f,t.setFromRotationMatrix(Ii),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Zi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Zi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Zi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),d=-(n+r)/(n-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Zi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===qc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oo=new ne,Ii=new Qt,HE=new ne(0,0,0),GE=new ne(1,1,1),Ur=new ne,zl=new ne,ni=new ne,lm=new Qt,cm=new pl;class Cr{constructor(e=0,t=0,n=0,r=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cm.setFromEuler(this),this.setFromQuaternion(cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WE=0;const um=new ne,ao=new pl,or=new Qt,Vl=new ne,da=new ne,XE=new ne,qE=new pl,fm=new ne(1,0,0),hm=new ne(0,1,0),dm=new ne(0,0,1),pm={type:"added"},YE={type:"removed"},lo={type:"childadded",child:null},Ju={type:"childremoved",child:null};class Vn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ne,t=new Cr,n=new pl,r=new ne(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new et}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(fm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,t){return um.copy(e).applyQuaternion(this.quaternion),this.position.add(um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vl.copy(e):Vl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(da,Vl,this.up):or.lookAt(Vl,da,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(or),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pm),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(YE),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pm),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,XE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,qE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new ne(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new ne,ar=new ne,Qu=new ne,lr=new ne,co=new ne,uo=new ne,mm=new ne,ef=new ne,tf=new ne,nf=new ne,rf=new qt,sf=new qt,of=new qt;class Ni{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ui.subVectors(e,t),r.cross(Ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Ui.subVectors(r,t),ar.subVectors(n,t),Qu.subVectors(e,t);const o=Ui.dot(Ui),a=Ui.dot(ar),l=Ui.dot(Qu),c=ar.dot(ar),u=ar.dot(Qu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return rf.setScalar(0),sf.setScalar(0),of.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,n),of.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rf,s.x),o.addScaledVector(sf,s.y),o.addScaledVector(of,s.z),o}static isFrontFacing(e,t,n,r){return Ui.subVectors(n,t),ar.subVectors(e,t),Ui.cross(ar).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ui.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ni.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,n),uo.subVectors(s,n),ef.subVectors(e,n);const l=co.dot(ef),c=uo.dot(ef);if(l<=0&&c<=0)return t.copy(n);tf.subVectors(e,r);const u=co.dot(tf),f=uo.dot(tf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(co,o);nf.subVectors(e,s);const d=co.dot(nf),g=uo.dot(nf);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(uo,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return mm.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(mm,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function af(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=LE(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=af(o,s,e+1/3),this.g=af(o,s,e),this.b=af(o,s,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const n=z0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return mt.workingToColorSpace(_n.copy(this),e),Math.round(ut(_n.r*255,0,255))*65536+Math.round(ut(_n.g*255,0,255))*256+Math.round(ut(_n.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(_n.copy(this),t);const n=_n.r,r=_n.g,s=_n.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Mi){mt.workingToColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,r=_n.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Hl);const n=Hu(Fr.h,Hl.h,t),r=Hu(Fr.s,Hl.s,t),s=Hu(Fr.l,Hl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new ht;ht.NAMES=z0;let $E=0;class _l extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Fo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(n.blending=this.blending),this.side!==ss&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==rh&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(n.stencilFail=this.stencilFail),this.stencilZFail!==to&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class V0 extends _l{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=T0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new ne,Gl=new Mt;let jE=0;class Di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nm,this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ua(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),n=Wn(n,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nm&&(e.usage=this.usage),e}}class H0 extends Di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class G0 extends Di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zs extends Di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let KE=0;const xi=new Qt,lf=new Vn,fo=new ne,ii=new ml,pa=new ml,an=new ne;class Pr extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?G0:H0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return lf.lookAt(e),lf.updateMatrix(),this.applyMatrix4(lf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zs(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];ii.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];pa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(ii.min,pa.min),ii.expandByPoint(an),an.addVectors(ii.max,pa.max),ii.expandByPoint(an)):(ii.expandByPoint(pa.min),ii.expandByPoint(pa.max))}ii.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),an.add(fo)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new ne,l[I]=new ne;const c=new ne,u=new ne,f=new ne,h=new Mt,d=new Mt,g=new Mt,_=new ne,m=new ne;function p(I,M,y){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,y),h.fromBufferAttribute(s,I),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(L),a[I].add(_),a[M].add(_),a[y].add(_),l[I].add(m),l[M].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,M=b.length;I<M;++I){const y=b[I],L=y.start,O=y.count;for(let G=L,$=L+O;G<$;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new ne,v=new ne,C=new ne,R=new ne;function w(I){C.fromBufferAttribute(r,I),R.copy(C);const M=a[I];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(R,M);const L=v.dot(l[I])<0?-1:1;o.setXYZW(I,E.x,E.y,E.z,L)}for(let I=0,M=b.length;I<M;++I){const y=b[I],L=y.start,O=y.count;for(let G=L,$=L+O;G<$;G+=3)w(e.getX(G+0)),w(e.getX(G+1)),w(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new ne,s=new ne,o=new ne,a=new ne,l=new ne,c=new ne,u=new ne,f=new ne;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Di(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _m=new Qt,_s=new k0,Wl=new uu,gm=new ne,Xl=new ne,ql=new ne,Yl=new ne,cf=new ne,$l=new ne,vm=new ne,jl=new ne;class xr extends Vn{constructor(e=new Pr,t=new V0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){$l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(cf.fromBufferAttribute(f,e),o?$l.addScaledVector(cf,u):$l.addScaledVector(cf.sub(t),u))}t.add($l)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(Wl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Wl,gm)===null||_s.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(_m.copy(s).invert(),_s.copy(e.ray).applyMatrix4(_m),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,C=E;v<C;v+=3){const R=a.getX(v),w=a.getX(v+1),I=a.getX(v+2);r=Kl(this,p,e,n,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);r=Kl(this,o,e,n,c,u,f,b,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,C=E;v<C;v+=3){const R=v,w=v+1,I=v+2;r=Kl(this,p,e,n,c,u,f,R,w,I),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,v=m+2;r=Kl(this,o,e,n,c,u,f,b,E,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function ZE(i,e,t,n,r,s,o,a){let l;if(e.side===Zn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ss,a),l===null)return null;jl.copy(a),jl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(jl);return c<t.near||c>t.far?null:{distance:c,point:jl.clone(),object:i}}function Kl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xl),i.getVertexPosition(l,ql),i.getVertexPosition(c,Yl);const u=ZE(i,e,t,n,Xl,ql,Yl,vm);if(u){const f=new ne;Ni.getBarycoord(vm,Xl,ql,Yl,f),r&&(u.uv=Ni.getInterpolatedAttribute(r,a,l,c,f,new Mt)),s&&(u.uv1=Ni.getInterpolatedAttribute(s,a,l,c,f,new Mt)),o&&(u.normal=Ni.getInterpolatedAttribute(o,a,l,c,f,new ne),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new ne,materialIndex:0};Ni.getNormal(Xl,ql,Yl,h.normal),u.face=h,u.barycoord=f}return u}class gl extends Pr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zs(c,3)),this.setAttribute("normal",new zs(u,3)),this.setAttribute("uv",new zs(f,2));function g(_,m,p,b,E,v,C,R,w,I,M){const y=v/w,L=C/I,O=v/2,G=C/2,$=R/2,ee=w+1,W=I+1;let H=0,B=0;const le=new ne;for(let U=0;U<W;U++){const me=U*L-G;for(let Le=0;Le<ee;Le++){const Ke=Le*y-O;le[_]=Ke*b,le[m]=me*E,le[p]=$,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=R>0?1:-1,u.push(le.x,le.y,le.z),f.push(Le/w),f.push(1-U/I),H+=1}}for(let U=0;U<I;U++)for(let me=0;me<w;me++){const Le=h+me+ee*U,Ke=h+me+ee*(U+1),Ve=h+(me+1)+ee*(U+1),te=h+(me+1)+ee*U;l.push(Le,Ke,te),l.push(Ke,Ve,te),B+=6}a.addGroup(d,B,M),d+=B,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ln(i){const e={};for(let t=0;t<i.length;t++){const n=Qo(i[t]);for(const r in n)e[r]=n[r]}return e}function JE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function W0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const QE={clone:Qo,merge:Ln};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class os extends _l{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=JE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class X0 extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new ne,xm=new Mt,Sm=new Mt;class bi extends X0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,xm,Sm),t.subVectors(Sm,xm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ho=-90,po=1;class nb extends Vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bi(ho,po,e,t);r.layers=this.layers,this.add(r);const s=new bi(ho,po,e,t);s.layers=this.layers,this.add(s);const o=new bi(ho,po,e,t);o.layers=this.layers,this.add(o);const a=new bi(ho,po,e,t);a.layers=this.layers,this.add(a);const l=new bi(ho,po,e,t);l.layers=this.layers,this.add(l);const c=new bi(ho,po,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class q0 extends zn{constructor(e=[],t=Ko,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends qs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new q0(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gl(5,5,5),s=new os({name:"CubemapFromEquirect",uniforms:Qo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Kr});s.uniforms.tEquirect.value=t;const o=new xr(r,s),a=t.minFilter;return t.minFilter===Ds&&(t.minFilter=Ki),new nb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Zl extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sb extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ff=new ne,ob=new ne,ab=new et;class bs{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ff.subVectors(n,t).cross(ob.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ff),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ab.getNormalMatrix(e),r=this.coplanarPoint(ff).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new uu,lb=new Mt(.5,.5),Jl=new ne;class Y0{constructor(e=new bs,t=new bs,n=new bs,r=new bs,s=new bs,o=new bs){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],b=s[12],E=s[13],v=s[14],C=s[15];if(r[0].setComponents(c-o,d-u,p-g,C-b).normalize(),r[1].setComponents(c+o,d+u,p+g,C+b).normalize(),r[2].setComponents(c+a,d+f,p+_,C+E).normalize(),r[3].setComponents(c-a,d-f,p-_,C-E).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,C-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,C-v).normalize(),t===Zi)r[5].setComponents(c+l,d+h,p+m,C+v).normalize();else if(t===qc)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=lb.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Jl.x=r.normal.x>0?e.max.x:e.min.x,Jl.y=r.normal.y>0?e.max.y:e.min.y,Jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $0 extends _l{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mm=new Qt,Gh=new k0,Ql=new uu,ec=new ne;class cb extends Vn{constructor(e=new Pr,t=new $0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(r),Ql.radius+=s,e.ray.intersectsSphere(Ql)===!1)return;Mm.copy(r).invert(),Gh.copy(e.ray).applyMatrix4(Mm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);ec.fromBufferAttribute(f,m),ym(ec,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)ec.fromBufferAttribute(f,g),ym(ec,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ym(i,e,t,n,r,s,o){const a=Gh.distanceSqToPoint(i);if(a<t){const l=new ne;Gh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class j0 extends zn{constructor(e,t,n=Xs,r,s,o,a=Bi,l=Bi,c,u=sl,f=1){if(u!==sl&&u!==ol)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class fu extends Pr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let E=0;E<c;E++){const v=E*f-s;g.push(v,-b,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const E=b+c*p,v=b+c*(p+1),C=b+1+c*(p+1),R=b+1+c*p;d.push(E,v,R),d.push(v,C,R)}this.setIndex(d),this.setAttribute("position",new zs(g,3)),this.setAttribute("normal",new zs(_,3)),this.setAttribute("uv",new zs(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}class ub extends _l{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ME,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends _l{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hb extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class db extends X0{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pb extends hb{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mb extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Em(i,e,t,n){const r=_b(n);switch(t){case P0:return i*e;case L0:return i*e/r.components*r.byteLength;case zd:return i*e/r.components*r.byteLength;case I0:return i*e*2/r.components*r.byteLength;case Vd:return i*e*2/r.components*r.byteLength;case D0:return i*e*3/r.components*r.byteLength;case Oi:return i*e*4/r.components*r.byteLength;case Hd:return i*e*4/r.components*r.byteLength;case xc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gh:case xh:return Math.max(i,16)*Math.max(e,8)/4;case _h:case vh:return Math.max(i,8)*Math.max(e,8)/2;case Sh:case Mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Th:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ec:case Oh:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case U0:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zh:case Vh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _b(i){switch(i){case wr:case w0:return{byteLength:1,components:1};case il:case C0:case hl:return{byteLength:2,components:1};case kd:case Bd:return{byteLength:2,components:4};case Xs:case Od:case vr:return{byteLength:4,components:1};case R0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function K0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function gb(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xb=`#ifdef USE_ALPHAHASH
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
#endif`,Sb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ab=`#ifdef USE_BATCHING
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
#endif`,wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Db=`#ifdef USE_IRIDESCENCE
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
#endif`,Lb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,Hb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",jb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sT=`#ifdef USE_GRADIENTMAP
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
}`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cT=`uniform bool receiveShadow;
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
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mT=`PhysicalMaterial material;
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
#endif`,_T=`struct PhysicalMaterial {
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
}`,gT=`
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
#endif`,vT=`#if defined( RE_IndirectDiffuse )
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ST=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ET=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wT=`#if defined( USE_POINTS_UV )
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
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IT=`#ifdef USE_MORPHTARGETS
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
#endif`,UT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zT=`#ifdef USE_NORMALMAP
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
#endif`,VT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nA=`float getShadowMask() {
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
}`,iA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rA=`#ifdef USE_SKINNING
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
#endif`,sA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oA=`#ifdef USE_SKINNING
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
#endif`,aA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fA=`#ifdef USE_TRANSMISSION
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
#endif`,hA=`#ifdef USE_TRANSMISSION
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
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_A=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vA=`uniform sampler2D t2D;
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
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`#include <common>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
}`,TA=`#define DISTANCE
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
}`,AA=`#define DISTANCE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`uniform float scale;
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
}`,PA=`uniform vec3 diffuse;
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
}`,DA=`#include <common>
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
}`,LA=`uniform vec3 diffuse;
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
}`,IA=`#define LAMBERT
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
}`,UA=`#define LAMBERT
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
}`,FA=`#define MATCAP
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
}`,NA=`#define MATCAP
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
}`,OA=`#define NORMAL
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
}`,kA=`#define NORMAL
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
}`,BA=`#define PHONG
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
}`,zA=`#define PHONG
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
}`,VA=`#define STANDARD
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
}`,HA=`#define STANDARD
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
}`,GA=`#define TOON
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
}`,WA=`#define TOON
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
}`,XA=`uniform float size;
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
}`,qA=`uniform vec3 diffuse;
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
}`,YA=`#include <common>
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
}`,$A=`uniform vec3 color;
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
}`,jA=`uniform float rotation;
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
}`,KA=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:vb,alphahash_pars_fragment:xb,alphamap_fragment:Sb,alphamap_pars_fragment:Mb,alphatest_fragment:yb,alphatest_pars_fragment:Eb,aomap_fragment:bb,aomap_pars_fragment:Tb,batching_pars_vertex:Ab,batching_vertex:wb,begin_vertex:Cb,beginnormal_vertex:Rb,bsdfs:Pb,iridescence_fragment:Db,bumpmap_pars_fragment:Lb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Ub,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Nb,color_fragment:Ob,color_pars_fragment:kb,color_pars_vertex:Bb,color_vertex:zb,common:Vb,cube_uv_reflection_fragment:Hb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Wb,displacementmap_vertex:Xb,emissivemap_fragment:qb,emissivemap_pars_fragment:Yb,colorspace_fragment:$b,colorspace_pars_fragment:jb,envmap_fragment:Kb,envmap_common_pars_fragment:Zb,envmap_pars_fragment:Jb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:uT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:rT,gradientmap_pars_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:lT,lights_pars_begin:cT,lights_toon_fragment:fT,lights_toon_pars_fragment:hT,lights_phong_fragment:dT,lights_phong_pars_fragment:pT,lights_physical_fragment:mT,lights_physical_pars_fragment:_T,lights_fragment_begin:gT,lights_fragment_maps:vT,lights_fragment_end:xT,logdepthbuf_fragment:ST,logdepthbuf_pars_fragment:MT,logdepthbuf_pars_vertex:yT,logdepthbuf_vertex:ET,map_fragment:bT,map_pars_fragment:TT,map_particle_fragment:AT,map_particle_pars_fragment:wT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:RT,morphinstance_vertex:PT,morphcolor_vertex:DT,morphnormal_vertex:LT,morphtarget_pars_vertex:IT,morphtarget_vertex:UT,normal_fragment_begin:FT,normal_fragment_maps:NT,normal_pars_fragment:OT,normal_pars_vertex:kT,normal_vertex:BT,normalmap_pars_fragment:zT,clearcoat_normal_fragment_begin:VT,clearcoat_normal_fragment_maps:HT,clearcoat_pars_fragment:GT,iridescence_pars_fragment:WT,opaque_fragment:XT,packing:qT,premultiplied_alpha_fragment:YT,project_vertex:$T,dithering_fragment:jT,dithering_pars_fragment:KT,roughnessmap_fragment:ZT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:QT,shadowmap_pars_vertex:eA,shadowmap_vertex:tA,shadowmask_pars_fragment:nA,skinbase_vertex:iA,skinning_pars_vertex:rA,skinning_vertex:sA,skinnormal_vertex:oA,specularmap_fragment:aA,specularmap_pars_fragment:lA,tonemapping_fragment:cA,tonemapping_pars_fragment:uA,transmission_fragment:fA,transmission_pars_fragment:hA,uv_pars_fragment:dA,uv_pars_vertex:pA,uv_vertex:mA,worldpos_vertex:_A,background_vert:gA,background_frag:vA,backgroundCube_vert:xA,backgroundCube_frag:SA,cube_vert:MA,cube_frag:yA,depth_vert:EA,depth_frag:bA,distanceRGBA_vert:TA,distanceRGBA_frag:AA,equirect_vert:wA,equirect_frag:CA,linedashed_vert:RA,linedashed_frag:PA,meshbasic_vert:DA,meshbasic_frag:LA,meshlambert_vert:IA,meshlambert_frag:UA,meshmatcap_vert:FA,meshmatcap_frag:NA,meshnormal_vert:OA,meshnormal_frag:kA,meshphong_vert:BA,meshphong_frag:zA,meshphysical_vert:VA,meshphysical_frag:HA,meshtoon_vert:GA,meshtoon_frag:WA,points_vert:XA,points_frag:qA,shadow_vert:YA,shadow_frag:$A,sprite_vert:jA,sprite_frag:KA},Re={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},qi={basic:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ht(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Ln([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Ln([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new ht(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Ln([Re.points,Re.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Ln([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Ln([Re.common,Re.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Ln([Re.sprite,Re.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Ln([Re.common,Re.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Ln([Re.lights,Re.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};qi.physical={uniforms:Ln([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const tc={r:0,b:0,g:0},vs=new Cr,ZA=new Qt;function JA(i,e,t,n,r,s,o){const a=new ht(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function _(E){let v=!1;const C=g(E);C===null?p(a,l):C&&C.isColor&&(p(C,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===cu)?(u===void 0&&(u=new xr(new gl(1,1,1),new os({name:"BackgroundCubeMaterial",uniforms:Qo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZA.makeRotationFromEuler(vs)),u.material.toneMapped=mt.getTransfer(C.colorSpace)!==St,(f!==C||h!==C.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new xr(new fu(2,2),new os({name:"BackgroundMaterial",uniforms:Qo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=mt.getTransfer(C.colorSpace)!==St,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,d=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,v){E.getRGB(tc,W0(i)),n.buffers.color.setClear(tc.r,tc.g,tc.b,v,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:b}}function QA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(y,L,O,G,$){let ee=!1;const W=f(G,O,L);s!==W&&(s=W,c(s.object)),ee=d(y,G,O,$),ee&&g(y,G,O,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,v(y,L,O,G),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function f(y,L,O){const G=O.wireframe===!0;let $=n[y.id];$===void 0&&($={},n[y.id]=$);let ee=$[L.id];ee===void 0&&(ee={},$[L.id]=ee);let W=ee[G];return W===void 0&&(W=h(l()),ee[G]=W),W}function h(y){const L=[],O=[],G=[];for(let $=0;$<t;$++)L[$]=0,O[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:G,object:y,attributes:{},index:null}}function d(y,L,O,G){const $=s.attributes,ee=L.attributes;let W=0;const H=O.getAttributes();for(const B in H)if(H[B].location>=0){const U=$[B];let me=ee[B];if(me===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),U===void 0||U.attribute!==me||me&&U.data!==me.data)return!0;W++}return s.attributesNum!==W||s.index!==G}function g(y,L,O,G){const $={},ee=L.attributes;let W=0;const H=O.getAttributes();for(const B in H)if(H[B].location>=0){let U=ee[B];U===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));const me={};me.attribute=U,U&&U.data&&(me.data=U.data),$[B]=me,W++}s.attributes=$,s.attributesNum=W,s.index=G}function _(){const y=s.newAttributes;for(let L=0,O=y.length;L<O;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const O=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;O[y]=1,G[y]===0&&(i.enableVertexAttribArray(y),G[y]=1),$[y]!==L&&(i.vertexAttribDivisor(y,L),$[y]=L)}function b(){const y=s.newAttributes,L=s.enabledAttributes;for(let O=0,G=L.length;O<G;O++)L[O]!==y[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function E(y,L,O,G,$,ee,W){W===!0?i.vertexAttribIPointer(y,L,O,$,ee):i.vertexAttribPointer(y,L,O,G,$,ee)}function v(y,L,O,G){_();const $=G.attributes,ee=O.getAttributes(),W=L.defaultAttributeValues;for(const H in ee){const B=ee[H];if(B.location>=0){let le=$[H];if(le===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const U=le.normalized,me=le.itemSize,Le=e.get(le);if(Le===void 0)continue;const Ke=Le.buffer,Ve=Le.type,te=Le.bytesPerElement,he=Ve===i.INT||Ve===i.UNSIGNED_INT||le.gpuType===Od;if(le.isInterleavedBufferAttribute){const oe=le.data,be=oe.stride,Te=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<B.locationSize;Pe++)p(B.location+Pe,oe.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Pe=0;Pe<B.locationSize;Pe++)m(B.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Pe=0;Pe<B.locationSize;Pe++)E(B.location+Pe,me/B.locationSize,Ve,U,be*te,(Te+me/B.locationSize*Pe)*te,he)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<B.locationSize;oe++)p(B.location+oe,le.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<B.locationSize;oe++)m(B.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let oe=0;oe<B.locationSize;oe++)E(B.location+oe,me/B.locationSize,Ve,U,me*te,me/B.locationSize*oe*te,he)}}else if(W!==void 0){const U=W[H];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(B.location,U);break;case 3:i.vertexAttrib3fv(B.location,U);break;case 4:i.vertexAttrib4fv(B.location,U);break;default:i.vertexAttrib1fv(B.location,U)}}}}b()}function C(){I();for(const y in n){const L=n[y];for(const O in L){const G=L[O];for(const $ in G)u(G[$].object),delete G[$];delete L[O]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const O in L){const G=L[O];for(const $ in G)u(G[$].object),delete G[$];delete L[O]}delete n[y.id]}function w(y){for(const L in n){const O=n[L];if(O[y.id]===void 0)continue;const G=O[y.id];for(const $ in G)u(G[$].object),delete G[$];delete O[y.id]}}function I(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function e1(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function t1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Oi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const I=w===hl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==wr&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vr&&!I)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:C,maxSamples:R}}function n1(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new bs,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,E=b*4;let v=p.clippingState||null;l.value=v,v=u(g,h,E,d);for(let C=0;C!==E;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=d;E!==_;++E,v+=4)o.copy(f[E]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function i1(i){let e=new WeakMap;function t(o,a){return a===hh?o.mapping=Ko:a===dh&&(o.mapping=Zo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===hh||a===dh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ib(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const yo=4,bm=[.125,.215,.35,.446,.526,.582],ws=20,hf=new db,Tm=new ht;let df=null,pf=0,mf=0,_f=!1;const Ts=(1+Math.sqrt(5))/2,mo=1/Ts,Am=[new ne(-Ts,mo,0),new ne(Ts,mo,0),new ne(-mo,0,Ts),new ne(mo,0,Ts),new ne(0,Ts,-mo),new ne(0,Ts,mo),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)],r1=new ne;class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=r1}=s;df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(df,pf,mf),this._renderer.xr.enabled=_f,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ko||e.mapping===Zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),df=this._renderer.getRenderTarget(),pf=this._renderer.getActiveCubeFace(),mf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:hl,format:Oi,colorSpace:Jo,depthBuffer:!1},r=Cm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cm(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s1(s)),this._blurMaterial=o1(s,e,t)}return r}_compileMaterial(e){const t=new xr(this._lodPlanes[0],e);this._renderer.compile(t,hf)}_sceneToCubeUV(e,t,n,r,s){const l=new bi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Tm),f.toneMapping=Zr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new V0({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),m=new xr(new gl,_);let p=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(Tm),p=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const C=this._cubeSize;nc(r,v*C,E>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ko||e.mapping===Zo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;nc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,hf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Am[(r-s-1)%Am.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xr(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*ws-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ws;m>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const p=[];let b=0;for(let w=0;w<ws;++w){const I=w/_,M=Math.exp(-I*I/2);p.push(M),w===0?b+=M:w<m&&(b+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-n;const v=this._sizeLods[r],C=3*v*(r>E-yo?r-E+yo:0),R=4*(this._cubeSize-v);nc(t,C,R,3*v,2*v),l.setRenderTarget(t),l.render(f,hf)}}function s1(i){const e=[],t=[],n=[];let r=i;const s=i-yo+1+bm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-yo?l=bm[o-i+yo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),E=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let R=0;R<d;R++){const w=R%3*2/3-1,I=R>2?0:-1,M=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];b.set(M,_*g*R),E.set(h,m*g*R);const y=[R,R,R,R,R,R];v.set(y,p*g*R)}const C=new Pr;C.setAttribute("position",new Di(b,_)),C.setAttribute("uv",new Di(E,m)),C.setAttribute("faceIndex",new Di(v,p)),e.push(C),r>yo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cm(i,e,t){const n=new qs(i,e,t);return n.texture.mapping=cu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function o1(i,e,t){const n=new Float32Array(ws),r=new ne(0,1,0);return new os({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Rm(){return new os({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Pm(){return new os({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function a1(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hh||l===dh,u=l===Ko||l===Zo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new wm(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new wm(i)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function l1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&No("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function c1(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let E=0,v=b.length;E<v;E+=3){const C=b[E+0],R=b[E+1],w=b[E+2];h.push(C,R,R,w,w,C)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const C=E+0,R=E+1,w=E+2;h.push(C,R,R,w,w,C)}}else return;const m=new(N0(h)?G0:H0)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function u1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,s,h*o),t.update(d,n,1)}function c(h,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,h*o,g),t.update(d,n,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,h,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function f1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function h1(i,e,t){const n=new WeakMap,r=new qt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*R*4*f),I=new O0(w,C,R,f);I.type=vr,I.needsUpdate=!0;const M=v*4;for(let L=0;L<f;L++){const O=p[L],G=b[L],$=E[L],ee=C*R*4*L;for(let W=0;W<O.count;W++){const H=W*M;g===!0&&(r.fromBufferAttribute(O,W),w[ee+H+0]=r.x,w[ee+H+1]=r.y,w[ee+H+2]=r.z,w[ee+H+3]=0),_===!0&&(r.fromBufferAttribute(G,W),w[ee+H+4]=r.x,w[ee+H+5]=r.y,w[ee+H+6]=r.z,w[ee+H+7]=0),m===!0&&(r.fromBufferAttribute($,W),w[ee+H+8]=r.x,w[ee+H+9]=r.y,w[ee+H+10]=r.z,w[ee+H+11]=$.itemSize===4?r.w:1)}}h={count:f,texture:I,size:new Mt(C,R)},n.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function d1(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Z0=new zn,Dm=new j0(1,1),J0=new O0,Q0=new zE,ev=new q0,Lm=[],Im=[],Um=new Float32Array(16),Fm=new Float32Array(9),Nm=new Float32Array(4);function ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hu(i,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function m1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function _1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function g1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function v1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Nm.set(n),i.uniformMatrix2fv(this.addr,!1,Nm),on(t,n)}}function x1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Fm.set(n),i.uniformMatrix3fv(this.addr,!1,Fm),on(t,n)}}function S1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,n))return;Um.set(n),i.uniformMatrix4fv(this.addr,!1,Um),on(t,n)}}function M1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function y1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function E1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function b1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function T1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function A1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function w1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function C1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function R1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Dm.compareFunction=F0,s=Dm):s=Z0,t.setTexture2D(e||s,r)}function P1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Q0,r)}function D1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ev,r)}function L1(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||J0,r)}function I1(i){switch(i){case 5126:return p1;case 35664:return m1;case 35665:return _1;case 35666:return g1;case 35674:return v1;case 35675:return x1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return y1;case 35668:case 35672:return E1;case 35669:case 35673:return b1;case 5125:return T1;case 36294:return A1;case 36295:return w1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return L1}}function U1(i,e){i.uniform1fv(this.addr,e)}function F1(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function N1(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function O1(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function k1(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B1(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function z1(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V1(i,e){i.uniform1iv(this.addr,e)}function H1(i,e){i.uniform2iv(this.addr,e)}function G1(i,e){i.uniform3iv(this.addr,e)}function W1(i,e){i.uniform4iv(this.addr,e)}function X1(i,e){i.uniform1uiv(this.addr,e)}function q1(i,e){i.uniform2uiv(this.addr,e)}function Y1(i,e){i.uniform3uiv(this.addr,e)}function $1(i,e){i.uniform4uiv(this.addr,e)}function j1(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Z0,s[o])}function K1(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Q0,s[o])}function Z1(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ev,s[o])}function J1(i,e,t){const n=this.cache,r=e.length,s=hu(t,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||J0,s[o])}function Q1(i){switch(i){case 5126:return U1;case 35664:return F1;case 35665:return N1;case 35666:return O1;case 35674:return k1;case 35675:return B1;case 35676:return z1;case 5124:case 35670:return V1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return W1;case 5125:return X1;case 36294:return q1;case 36295:return Y1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return K1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return J1}}class ew{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=I1(t.type)}}class tw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q1(t.type)}}class nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Om(i,e){i.seq.push(e),i.map[e.id]=e}function iw(i,e,t){const n=i.name,r=n.length;for(gf.lastIndex=0;;){const s=gf.exec(n),o=gf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Om(t,c===void 0?new ew(a,i,e):new tw(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new nw(a),Om(t,f)),t=f}}}class bc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iw(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function km(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rw=37297;let sw=0;function ow(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Bm=new et;function aw(i){mt._getMatrix(Bm,mt.workingColorSpace,i);const e=`mat3( ${Bm.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Xc:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zm(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ow(i.getShaderSource(e),a)}else return s}function lw(i,e){const t=aw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cw(i,e){let t;switch(e){case dE:t="Linear";break;case pE:t="Reinhard";break;case mE:t="Cineon";break;case _E:t="ACESFilmic";break;case vE:t="AgX";break;case xE:t="Neutral";break;case gE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new ne;function uw(){mt.getLuminanceCoefficients(ic);const i=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function hw(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dw(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ea(i){return i!==""}function Vm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(i){return i.replace(pw,_w)}const mw=new Map;function _w(i,e){let t=rt[e];if(t===void 0){const n=mw.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wh(t)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gm(i){return i.replace(gw,vw)}function vw(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function xw(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qy?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cr&&(e="SHADOWMAP_TYPE_VSM"),e}function Sw(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ko:case Zo:e="ENVMAP_TYPE_CUBE";break;case cu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mw(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Zo:e="ENVMAP_MODE_REFRACTION";break}return e}function yw(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case T0:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function Ew(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bw(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=xw(t),c=Sw(t),u=Mw(t),f=yw(t),h=Ew(t),d=fw(t),g=hw(s),_=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[Wm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zr?"#define TONE_MAPPING":"",t.toneMapping!==Zr?rt.tonemapping_pars_fragment:"",t.toneMapping!==Zr?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,lw("linearToOutputTexel",t.outputColorSpace),uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),o=Wh(o),o=Vm(o,t),o=Hm(o,t),a=Wh(a),a=Vm(a,t),a=Hm(a,t),o=Gm(o),a=Gm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+o,v=b+p+a,C=km(r,r.VERTEX_SHADER,E),R=km(r,r.FRAGMENT_SHADER,v);r.attachShader(_,C),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(C)||"",$=r.getShaderInfoLog(R)||"",ee=O.trim(),W=G.trim(),H=$.trim();let B=!0,le=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,C,R);else{const U=zm(r,C,"vertex"),me=zm(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+ee+`
`+U+`
`+me)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(W===""||H==="")&&(le=!1);le&&(L.diagnostics={runnable:B,programLog:ee,vertexShader:{log:W,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(R),I=new bc(r,_),M=dw(r,_)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,rw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=R,this}let Tw=0;class Aw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ww(e),t.set(e,n)),n}}class ww{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Cw(i,e,t,n,r,s,o){const a=new B0,l=new Aw,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,O,G){const $=O.fog,ee=G.geometry,W=M.isMeshStandardMaterial?O.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),B=H&&H.mapping===cu?H.image.height:null,le=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const U=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,me=U!==void 0?U.length:0;let Le=0;ee.morphAttributes.position!==void 0&&(Le=1),ee.morphAttributes.normal!==void 0&&(Le=2),ee.morphAttributes.color!==void 0&&(Le=3);let Ke,Ve,te,he;if(le){const De=qi[le];Ke=De.vertexShader,Ve=De.fragmentShader}else Ke=M.vertexShader,Ve=M.fragmentShader,l.update(M),te=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const oe=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Te=G.isInstancedMesh===!0,Pe=G.isBatchedMesh===!0,ot=!!M.map,D=!!M.matcap,x=!!H,V=!!M.aoMap,Y=!!M.lightMap,Z=!!M.bumpMap,P=!!M.normalMap,ae=!!M.displacementMap,j=!!M.emissiveMap,re=!!M.metalnessMap,ie=!!M.roughnessMap,ve=M.anisotropy>0,A=M.clearcoat>0,S=M.dispersion>0,N=M.iridescence>0,q=M.sheen>0,J=M.transmission>0,X=ve&&!!M.anisotropyMap,Se=A&&!!M.clearcoatMap,ue=A&&!!M.clearcoatNormalMap,Ae=A&&!!M.clearcoatRoughnessMap,ge=N&&!!M.iridescenceMap,de=N&&!!M.iridescenceThicknessMap,Me=q&&!!M.sheenColorMap,Ie=q&&!!M.sheenRoughnessMap,we=!!M.specularMap,xe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,F=J&&!!M.transmissionMap,pe=J&&!!M.thicknessMap,_e=!!M.gradientMap,Ce=!!M.alphaMap,fe=M.alphaTest>0,se=!!M.alphaHash,Fe=!!M.extensions;let We=Zr;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(We=i.toneMapping);const dt={shaderID:le,shaderType:M.type,shaderName:M.name,vertexShader:Ke,fragmentShader:Ve,defines:M.defines,customVertexShaderID:te,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&G._colorsTexture!==null,instancing:Te,instancingColor:Te&&G.instanceColor!==null,instancingMorph:Te&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Jo,alphaToCoverage:!!M.alphaToCoverage,map:ot,matcap:D,envMap:x,envMapMode:x&&H.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Y,bumpMap:Z,normalMap:P,displacementMap:h&&ae,emissiveMap:j,normalMapObjectSpace:P&&M.normalMapType===bE,normalMapTangentSpace:P&&M.normalMapType===EE,metalnessMap:re,roughnessMap:ie,anisotropy:ve,anisotropyMap:X,clearcoat:A,clearcoatMap:Se,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:N,iridescenceMap:ge,iridescenceThicknessMap:de,sheen:q,sheenColorMap:Me,sheenRoughnessMap:Ie,specularMap:we,specularColorMap:xe,specularIntensityMap:Xe,transmission:J,transmissionMap:F,thicknessMap:pe,gradientMap:_e,opaque:M.transparent===!1&&M.blending===Fo&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:fe,alphaHash:se,combine:M.combine,mapUv:ot&&_(M.map.channel),aoMapUv:V&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:P&&_(M.normalMap.channel),displacementMapUv:ae&&_(M.displacementMap.channel),emissiveMapUv:j&&_(M.emissiveMap.channel),metalnessMapUv:re&&_(M.metalnessMap.channel),roughnessMapUv:ie&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Se&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:xe&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:F&&_(M.transmissionMap.channel),thicknessMapUv:pe&&_(M.thicknessMap.channel),alphaMapUv:Ce&&_(M.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(P||ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(ot||Ce),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:ot&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_r,flipSided:M.side===Zn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&M.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(b(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const y=g[M.type];let L;if(y){const O=qi[y];L=QE.clone(O.uniforms)}else L=M.uniforms;return L}function C(M,y){let L;for(let O=0,G=u.length;O<G;O++){const $=u[O];if($.cacheKey===y){L=$,++L.usedTimes;break}}return L===void 0&&(L=new bw(i,y,M,s),u.push(L)),L}function R(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:R,releaseShaderCache:w,programs:u,dispose:I}}function Rw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Pw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||Pw),n.length>1&&n.sort(h||Xm),r.length>1&&r.sort(h||Xm)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Dw(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new qm,i.set(n,[o])):r>=s.length?(o=new qm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new ht};break;case"SpotLight":t={position:new ne,direction:new ne,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function Iw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Uw=0;function Fw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Nw(i){const e=new Lw,t=Iw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new ne);const r=new ne,s=new Qt,o=new Qt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,E=0,v=0,C=0,R=0,w=0;c.sort(Fw);for(let M=0,y=c.length;M<y;M++){const L=c[M],O=L.color,G=L.intensity,$=L.distance,ee=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*G,f+=O.g*G,h+=O.b*G;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],G);w++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=ee,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=W,d++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(G),W.distance=$,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[_]=W;const H=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,H.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[_]=H.matrix,L.castShadow){const B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=ee,v++}_++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(O).multiplyScalar(G),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=W,m++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const H=L.shadow,B=t.get(L);B.shadowIntensity=H.intensity,B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=L.shadow.matrix,E++}n.point[g]=W,g++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(G),W.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==E||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+C-R,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=w,I.directionalLength=d,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=E,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=w,n.version=Uw++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),f++}else if(E.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ym(i){const e=new Nw(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ow(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ym(i),e.set(r,[a])):s>=o.length?(a=new Ym(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const kw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`;function zw(i,e,t){let n=new Y0;const r=new Mt,s=new Mt,o=new qt,a=new ub({depthPacking:yE}),l=new fb,c={},u=t.maxTextureSize,f={[ss]:Zn,[Zn]:ss,[_r]:_r},h=new os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:kw,fragmentShader:Bw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Pr;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xr(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b0;let p=this.type;this.render=function(R,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Kr),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==cr&&this.type===cr,$=p===cr&&this.type!==cr;for(let ee=0,W=R.length;ee<W;ee++){const H=R[ee],B=H.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const le=B.getFrameExtents();if(r.multiply(le),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,B.mapSize.y=s.y)),B.map===null||G===!0||$===!0){const me=this.type!==cr?{minFilter:Bi,magFilter:Bi}:{};B.map!==null&&B.map.dispose(),B.map=new qs(r.x,r.y,me),B.map.texture.name=H.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const U=B.getViewportCount();for(let me=0;me<U;me++){const Le=B.getViewport(me);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),O.viewport(o),B.updateMatrices(H,me),n=B.getFrustum(),v(w,I,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===cr&&b(B,I),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,L)};function b(R,w){const I=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qs(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,I,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,I,d,_,null)}function E(R,w,I,M){let y=null;const L=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=y.uuid,G=w.uuid;let $=c[O];$===void 0&&($={},c[O]=$);let ee=$[G];ee===void 0&&(ee=y.clone(),$[G]=ee,w.addEventListener("dispose",C)),y=ee}if(y.visible=w.visible,y.wireframe=w.wireframe,M===cr?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=I}return y}function v(R,w,I,M,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===cr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const G=e.update(R),$=R.material;if(Array.isArray($)){const ee=G.groups;for(let W=0,H=ee.length;W<H;W++){const B=ee[W],le=$[B.materialIndex];if(le&&le.visible){const U=E(R,le,M,y);R.onBeforeShadow(i,R,w,I,G,U,B),i.renderBufferDirect(I,null,G,U,R,B),R.onAfterShadow(i,R,w,I,G,U,B)}}}else if($.visible){const ee=E(R,$,M,y);R.onBeforeShadow(i,R,w,I,G,ee,null),i.renderBufferDirect(I,null,G,ee,R,null),R.onAfterShadow(i,R,w,I,G,ee,null)}}const O=R.children;for(let G=0,$=O.length;G<$;G++)v(O[G],w,I,M,y)}function C(R){R.target.removeEventListener("dispose",C);for(const I in c){const M=c[I],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Vw={[sh]:oh,[ah]:uh,[lh]:fh,[jo]:ch,[oh]:sh,[uh]:ah,[fh]:lh,[ch]:jo};function Hw(i,e){function t(){let F=!1;const pe=new qt;let _e=null;const Ce=new qt(0,0,0,0);return{setMask:function(fe){_e!==fe&&!F&&(i.colorMask(fe,fe,fe,fe),_e=fe)},setLocked:function(fe){F=fe},setClear:function(fe,se,Fe,We,dt){dt===!0&&(fe*=We,se*=We,Fe*=We),pe.set(fe,se,Fe,We),Ce.equals(pe)===!1&&(i.clearColor(fe,se,Fe,We),Ce.copy(pe))},reset:function(){F=!1,_e=null,Ce.set(-1,0,0,0)}}}function n(){let F=!1,pe=!1,_e=null,Ce=null,fe=null;return{setReversed:function(se){if(pe!==se){const Fe=e.get("EXT_clip_control");se?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const We=fe;fe=null,this.setClear(We)}},getReversed:function(){return pe},setTest:function(se){se?oe(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(se){_e!==se&&!F&&(i.depthMask(se),_e=se)},setFunc:function(se){if(pe&&(se=Vw[se]),Ce!==se){switch(se){case sh:i.depthFunc(i.NEVER);break;case oh:i.depthFunc(i.ALWAYS);break;case ah:i.depthFunc(i.LESS);break;case jo:i.depthFunc(i.LEQUAL);break;case lh:i.depthFunc(i.EQUAL);break;case ch:i.depthFunc(i.GEQUAL);break;case uh:i.depthFunc(i.GREATER);break;case fh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=se}},setLocked:function(se){F=se},setClear:function(se){fe!==se&&(pe&&(se=1-se),i.clearDepth(se),fe=se)},reset:function(){F=!1,_e=null,Ce=null,fe=null,pe=!1}}}function r(){let F=!1,pe=null,_e=null,Ce=null,fe=null,se=null,Fe=null,We=null,dt=null;return{setTest:function(De){F||(De?oe(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(De){pe!==De&&!F&&(i.stencilMask(De),pe=De)},setFunc:function(De,ke,Je){(_e!==De||Ce!==ke||fe!==Je)&&(i.stencilFunc(De,ke,Je),_e=De,Ce=ke,fe=Je)},setOp:function(De,ke,Je){(se!==De||Fe!==ke||We!==Je)&&(i.stencilOp(De,ke,Je),se=De,Fe=ke,We=Je)},setLocked:function(De){F=De},setClear:function(De){dt!==De&&(i.clearStencil(De),dt=De)},reset:function(){F=!1,pe=null,_e=null,Ce=null,fe=null,se=null,Fe=null,We=null,dt=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,C=null,R=null,w=new ht(0,0,0),I=0,M=!1,y=null,L=null,O=null,G=null,$=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,H=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=H>=1):B.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=H>=2);let le=null,U={};const me=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ke=new qt().fromArray(me),Ve=new qt().fromArray(Le);function te(F,pe,_e,Ce){const fe=new Uint8Array(4),se=i.createTexture();i.bindTexture(F,se),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<_e;Fe++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(pe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return se}const he={};he[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(jo),Z(!1),P(Jp),oe(i.CULL_FACE),V(Kr);function oe(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function be(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Te(F,pe){return f[F]!==pe?(i.bindFramebuffer(F,pe),f[F]=pe,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Pe(F,pe){let _e=d,Ce=!1;if(F){_e=h.get(pe),_e===void 0&&(_e=[],h.set(pe,_e));const fe=F.textures;if(_e.length!==fe.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Fe=fe.length;se<Fe;se++)_e[se]=i.COLOR_ATTACHMENT0+se;_e.length=fe.length,Ce=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(_e)}function ot(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const D={[As]:i.FUNC_ADD,[$y]:i.FUNC_SUBTRACT,[jy]:i.FUNC_REVERSE_SUBTRACT};D[Ky]=i.MIN,D[Zy]=i.MAX;const x={[Jy]:i.ZERO,[Qy]:i.ONE,[eE]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[oE]:i.SRC_ALPHA_SATURATE,[rE]:i.DST_COLOR,[nE]:i.DST_ALPHA,[tE]:i.ONE_MINUS_SRC_COLOR,[rh]:i.ONE_MINUS_SRC_ALPHA,[sE]:i.ONE_MINUS_DST_COLOR,[iE]:i.ONE_MINUS_DST_ALPHA,[aE]:i.CONSTANT_COLOR,[lE]:i.ONE_MINUS_CONSTANT_COLOR,[cE]:i.CONSTANT_ALPHA,[uE]:i.ONE_MINUS_CONSTANT_ALPHA};function V(F,pe,_e,Ce,fe,se,Fe,We,dt,De){if(F===Kr){_===!0&&(be(i.BLEND),_=!1);return}if(_===!1&&(oe(i.BLEND),_=!0),F!==Yy){if(F!==m||De!==M){if((p!==As||v!==As)&&(i.blendEquation(i.FUNC_ADD),p=As,v=As),De)switch(F){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.ONE,i.ONE);break;case Qp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case em:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case em:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,E=null,C=null,R=null,w.set(0,0,0),I=0,m=F,M=De}return}fe=fe||pe,se=se||_e,Fe=Fe||Ce,(pe!==p||fe!==v)&&(i.blendEquationSeparate(D[pe],D[fe]),p=pe,v=fe),(_e!==b||Ce!==E||se!==C||Fe!==R)&&(i.blendFuncSeparate(x[_e],x[Ce],x[se],x[Fe]),b=_e,E=Ce,C=se,R=Fe),(We.equals(w)===!1||dt!==I)&&(i.blendColor(We.r,We.g,We.b,dt),w.copy(We),I=dt),m=F,M=!1}function Y(F,pe){F.side===_r?be(i.CULL_FACE):oe(i.CULL_FACE);let _e=F.side===Zn;pe&&(_e=!_e),Z(_e),F.blending===Fo&&F.transparent===!1?V(Kr):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ce=F.stencilWrite;a.setTest(Ce),Ce&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),j(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function P(F){F!==Wy?(oe(i.CULL_FACE),F!==L&&(F===Jp?i.cullFace(i.BACK):F===Xy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),L=F}function ae(F){F!==O&&(W&&i.lineWidth(F),O=F)}function j(F,pe,_e){F?(oe(i.POLYGON_OFFSET_FILL),(G!==pe||$!==_e)&&(i.polygonOffset(pe,_e),G=pe,$=_e)):be(i.POLYGON_OFFSET_FILL)}function re(F){F?oe(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function ie(F){F===void 0&&(F=i.TEXTURE0+ee-1),le!==F&&(i.activeTexture(F),le=F)}function ve(F,pe,_e){_e===void 0&&(le===null?_e=i.TEXTURE0+ee-1:_e=le);let Ce=U[_e];Ce===void 0&&(Ce={type:void 0,texture:void 0},U[_e]=Ce),(Ce.type!==F||Ce.texture!==pe)&&(le!==_e&&(i.activeTexture(_e),le=_e),i.bindTexture(F,pe||he[F]),Ce.type=F,Ce.texture=pe)}function A(){const F=U[le];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(F){Ke.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ke.copy(F))}function Ie(F){Ve.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function we(F,pe){let _e=c.get(pe);_e===void 0&&(_e=new WeakMap,c.set(pe,_e));let Ce=_e.get(F);Ce===void 0&&(Ce=i.getUniformBlockIndex(pe,F.name),_e.set(F,Ce))}function xe(F,pe){const Ce=c.get(pe).get(F);l.get(pe)!==Ce&&(i.uniformBlockBinding(pe,Ce,F.__bindingPointIndex),l.set(pe,Ce))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,U={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,v=null,C=null,R=null,w=new ht(0,0,0),I=0,M=!1,y=null,L=null,O=null,G=null,$=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:be,bindFramebuffer:Te,drawBuffers:Pe,useProgram:ot,setBlending:V,setMaterial:Y,setFlipSided:Z,setCullFace:P,setLineWidth:ae,setPolygonOffset:j,setScissorTest:re,activeTexture:ie,bindTexture:ve,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:ge,texImage3D:de,updateUBOMapping:we,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:Ae,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Se,scissor:Me,viewport:Ie,reset:Xe}}function Gw(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Yc("canvas")}function _(A,S,N){let q=1;const J=ve(A);if((J.width>N||J.height>N)&&(q=N/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*J.width),Se=Math.floor(q*J.height);f===void 0&&(f=g(X,Se));const ue=S?g(X,Se):f;return ue.width=X,ue.height=Se,ue.getContext("2d").drawImage(A,0,0,X,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(A,S,N,q,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),S===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),S===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),S===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),S===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),S===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),S===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),S===i.RGBA){const Se=J?Xc:mt.getTransfer(q);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=Se===St?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(A,S){let N;return A?S===null||S===Xs||S===rl?N=i.DEPTH24_STENCIL8:S===vr?N=i.DEPTH32F_STENCIL8:S===il&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xs||S===rl?N=i.DEPTH_COMPONENT24:S===vr?N=i.DEPTH_COMPONENT32F:S===il&&(N=i.DEPTH_COMPONENT16),N}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bi&&A.minFilter!==Ki?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),I(S),S.isVideoTexture&&u.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),y(S)}function I(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,q=h.get(N);if(q){const J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(A),Object.keys(q).length===0&&h.delete(N)}n.remove(A)}function M(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const N=A.source,q=h.get(N);delete q[S.__cacheKey],o.memory.textures--}function y(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[q][J]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=A.textures;for(let q=0,J=N.length;q<J;q++){const X=n.get(N[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[q])}n.remove(A)}let L=0;function O(){L=0}function G(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function $(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ee(A,S){const N=n.get(A);if(A.isVideoTexture&&re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,A,S);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+S)}function W(A,S){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){he(N,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+S)}function H(A,S){const N=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){he(N,A,S);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+S)}function B(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){oe(N,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+S)}const le={[ph]:i.REPEAT,[Ps]:i.CLAMP_TO_EDGE,[mh]:i.MIRRORED_REPEAT},U={[Bi]:i.NEAREST,[SE]:i.NEAREST_MIPMAP_NEAREST,[Ul]:i.NEAREST_MIPMAP_LINEAR,[Ki]:i.LINEAR,[zu]:i.LINEAR_MIPMAP_NEAREST,[Ds]:i.LINEAR_MIPMAP_LINEAR},me={[TE]:i.NEVER,[DE]:i.ALWAYS,[AE]:i.LESS,[F0]:i.LEQUAL,[wE]:i.EQUAL,[PE]:i.GEQUAL,[CE]:i.GREATER,[RE]:i.NOTEQUAL};function Le(A,S){if(S.type===vr&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ki||S.magFilter===zu||S.magFilter===Ul||S.magFilter===Ds||S.minFilter===Ki||S.minFilter===zu||S.minFilter===Ul||S.minFilter===Ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,le[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,U[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,U[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bi||S.minFilter!==Ul&&S.minFilter!==Ds||S.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const q=S.source;let J=h.get(q);J===void 0&&(J={},h.set(q,J));const X=$(S);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),J[X].usedTimes++;const Se=J[A.__cacheKey];Se!==void 0&&(J[A.__cacheKey].usedTimes--,Se.usedTimes===0&&M(S)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return N}function Ve(A,S,N){return Math.floor(Math.floor(A/N)/S)}function te(A,S,N,q){const X=A.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,N,q,S.data);else{X.sort((de,Me)=>de.start-Me.start);let Se=0;for(let de=1;de<X.length;de++){const Me=X[Se],Ie=X[de],we=Me.start+Me.count,xe=Ve(Ie.start,S.width,4),Xe=Ve(Me.start,S.width,4);Ie.start<=we+1&&xe===Xe&&Ve(Ie.start+Ie.count-1,S.width,4)===xe?Me.count=Math.max(Me.count,Ie.start+Ie.count-Me.start):(++Se,X[Se]=Ie)}X.length=Se+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),ge=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let de=0,Me=X.length;de<Me;de++){const Ie=X[de],we=Math.floor(Ie.start/4),xe=Math.ceil(Ie.count/4),Xe=we%S.width,F=Math.floor(we/S.width),pe=xe,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Xe,F,pe,_e,N,q,S.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,ge)}}function he(A,S,N){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);const J=Ke(A,S),X=S.source;t.bindTexture(q,A.__webglTexture,i.TEXTURE0+N);const Se=n.get(X);if(X.version!==Se.__version||J===!0){t.activeTexture(i.TEXTURE0+N);const ue=mt.getPrimaries(mt.workingColorSpace),Ae=S.colorSpace===zr?null:mt.getPrimaries(S.colorSpace),ge=S.colorSpace===zr||ue===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let de=_(S.image,!1,r.maxTextureSize);de=ie(S,de);const Me=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let we=E(S.internalFormat,Me,Ie,S.colorSpace,S.isVideoTexture);Le(q,S);let xe;const Xe=S.mipmaps,F=S.isVideoTexture!==!0,pe=Se.__version===void 0||J===!0,_e=X.dataReady,Ce=C(S,de);if(S.isDepthTexture)we=v(S.format===ol,S.type),pe&&(F?t.texStorage2D(i.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,Me,Ie,null));else if(S.isDataTexture)if(Xe.length>0){F&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,Xe[0].width,Xe[0].height);for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,Me,Ie,xe.data);S.generateMipmaps=!1}else F?(pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,de.width,de.height),_e&&te(S,de,Me,Ie)):t.texImage2D(i.TEXTURE_2D,0,we,de.width,de.height,0,Me,Ie,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,we,Xe[0].width,Xe[0].height,de.depth);for(let fe=0,se=Xe.length;fe<se;fe++)if(xe=Xe[fe],S.format!==Oi)if(Me!==null)if(F){if(_e)if(S.layerUpdates.size>0){const Fe=Em(xe.width,xe.height,S.format,S.type);for(const We of S.layerUpdates){const dt=xe.data.subarray(We*Fe/xe.data.BYTES_PER_ELEMENT,(We+1)*Fe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,We,xe.width,xe.height,1,Me,dt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,we,xe.width,xe.height,de.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,xe.width,xe.height,de.depth,Me,Ie,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,we,xe.width,xe.height,de.depth,0,Me,Ie,xe.data)}else{F&&pe&&t.texStorage2D(i.TEXTURE_2D,Ce,we,Xe[0].width,Xe[0].height);for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],S.format!==Oi?Me!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,xe.width,xe.height,Me,Ie,xe.data):t.texImage2D(i.TEXTURE_2D,fe,we,xe.width,xe.height,0,Me,Ie,xe.data)}else if(S.isDataArrayTexture)if(F){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,we,de.width,de.height,de.depth),_e)if(S.layerUpdates.size>0){const fe=Em(de.width,de.height,S.format,S.type);for(const se of S.layerUpdates){const Fe=de.data.subarray(se*fe/de.data.BYTES_PER_ELEMENT,(se+1)*fe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,de.width,de.height,1,Me,Ie,Fe)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Me,Ie,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,Me,Ie,de.data);else if(S.isData3DTexture)F?(pe&&t.texStorage3D(i.TEXTURE_3D,Ce,we,de.width,de.height,de.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Me,Ie,de.data)):t.texImage3D(i.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,Me,Ie,de.data);else if(S.isFramebufferTexture){if(pe)if(F)t.texStorage2D(i.TEXTURE_2D,Ce,we,de.width,de.height);else{let fe=de.width,se=de.height;for(let Fe=0;Fe<Ce;Fe++)t.texImage2D(i.TEXTURE_2D,Fe,we,fe,se,0,Me,Ie,null),fe>>=1,se>>=1}}else if(Xe.length>0){if(F&&pe){const fe=ve(Xe[0]);t.texStorage2D(i.TEXTURE_2D,Ce,we,fe.width,fe.height)}for(let fe=0,se=Xe.length;fe<se;fe++)xe=Xe[fe],F?_e&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Me,Ie,xe):t.texImage2D(i.TEXTURE_2D,fe,we,Me,Ie,xe);S.generateMipmaps=!1}else if(F){if(pe){const fe=ve(de);t.texStorage2D(i.TEXTURE_2D,Ce,we,fe.width,fe.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Ie,de)}else t.texImage2D(i.TEXTURE_2D,0,we,Me,Ie,de);m(S)&&p(q),Se.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function oe(A,S,N){if(S.image.length!==6)return;const q=Ke(A,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const X=n.get(J);if(J.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+N);const Se=mt.getPrimaries(mt.workingColorSpace),ue=S.colorSpace===zr?null:mt.getPrimaries(S.colorSpace),Ae=S.colorSpace===zr||Se===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ge=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let se=0;se<6;se++)!ge&&!de?Me[se]=_(S.image[se],!0,r.maxCubemapSize):Me[se]=de?S.image[se].image:S.image[se],Me[se]=ie(S,Me[se]);const Ie=Me[0],we=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Xe=E(S.internalFormat,we,xe,S.colorSpace),F=S.isVideoTexture!==!0,pe=X.__version===void 0||q===!0,_e=J.dataReady;let Ce=C(S,Ie);Le(i.TEXTURE_CUBE_MAP,S);let fe;if(ge){F&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,Ie.width,Ie.height);for(let se=0;se<6;se++){fe=Me[se].mipmaps;for(let Fe=0;Fe<fe.length;Fe++){const We=fe[Fe];S.format!==Oi?we!==null?F?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,We.width,We.height,we,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,0,0,We.width,We.height,we,xe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe,Xe,We.width,We.height,0,we,xe,We.data)}}}else{if(fe=S.mipmaps,F&&pe){fe.length>0&&Ce++;const se=ve(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,Xe,se.width,se.height)}for(let se=0;se<6;se++)if(de){F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Me[se].width,Me[se].height,we,xe,Me[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,Me[se].width,Me[se].height,0,we,xe,Me[se].data);for(let Fe=0;Fe<fe.length;Fe++){const dt=fe[Fe].image[se].image;F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,dt.width,dt.height,we,xe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Xe,dt.width,dt.height,0,we,xe,dt.data)}}else{F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,we,xe,Me[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Xe,we,xe,Me[se]);for(let Fe=0;Fe<fe.length;Fe++){const We=fe[Fe];F?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,0,0,we,xe,We.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Fe+1,Xe,we,xe,We.image[se])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),X.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function be(A,S,N,q,J,X){const Se=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),Ae=E(N.internalFormat,Se,ue,N.colorSpace),ge=n.get(S),de=n.get(N);if(de.__renderTarget=S,!ge.__hasExternalTextures){const Me=Math.max(1,S.width>>X),Ie=Math.max(1,S.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Ae,Me,Ie,S.depth,0,Se,ue,null):t.texImage2D(J,X,Ae,Me,Ie,0,Se,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,de.__webglTexture,0,ae(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,de.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(A,S,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=v(S.stencilBuffer,J),Se=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=ae(S);j(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,S.width,S.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,X,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const q=S.textures;for(let J=0;J<q.length;J++){const X=q[J],Se=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),Ae=E(X.internalFormat,Se,ue,X.colorSpace),ge=ae(S);N&&j(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,Ae,S.width,S.height):j(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,Ae,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const J=q.__webglTexture,X=ae(S);if(S.depthTexture.format===sl)j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===ol)j(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ot(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const q=A.texture.mipmaps;q&&q.length>0?Pe(S.__webglFramebuffer[0],A):Pe(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Te(S.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Te(S.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function D(A,S,N){const q=n.get(A);S!==void 0&&be(q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&ot(A)}function x(A){const S=A.texture,N=n.get(A),q=n.get(S);A.addEventListener("dispose",w);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Se=J.length>1;if(Se||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)N.__webglFramebuffer[ue][Ae]=i.createFramebuffer()}else N.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)N.__webglFramebuffer[ue]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(Se)for(let ue=0,Ae=J.length;ue<Ae;ue++){const ge=n.get(J[ue]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&j(A)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const Ae=J[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const ge=s.convert(Ae.format,Ae.colorSpace),de=s.convert(Ae.type),Me=E(Ae.internalFormat,ge,de,Ae.colorSpace,A.isXRRenderTarget===!0),Ie=ae(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Me,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(N.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)be(N.__webglFramebuffer[ue][Ae],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ae);else be(N.__webglFramebuffer[ue],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,Ae=J.length;ue<Ae;ue++){const ge=J[ue],de=n.get(ge);let Me=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,de.__webglTexture),Le(Me,ge),be(N.__webglFramebuffer,A,ge,i.COLOR_ATTACHMENT0+ue,Me,0),m(ge)&&p(Me)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,q.__webglTexture),Le(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)be(N.__webglFramebuffer[Ae],A,S,i.COLOR_ATTACHMENT0,ue,Ae);else be(N.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}A.depthBuffer&&ot(A)}function V(A){const S=A.textures;for(let N=0,q=S.length;N<q;N++){const J=S[N];if(m(J)){const X=b(A),Se=n.get(J).__webglTexture;t.bindTexture(X,Se),p(X),t.unbindTexture()}}}const Y=[],Z=[];function P(A){if(A.samples>0){if(j(A)===!1){const S=A.textures,N=A.width,q=A.height;let J=i.COLOR_BUFFER_BIT;const X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),ue=S.length>1;if(ue)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ae=A.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const de=n.get(S[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,N,q,0,0,N,q,J,i.NEAREST),l===!0&&(Y.length=0,Z.length=0,Y.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Y.push(X),Z.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Y))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);const de=n.get(S[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ae(A){return Math.min(r.maxSamples,A.samples)}function j(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ie(A,S){const N=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Jo&&N!==zr&&(mt.getTransfer(N)===St?(q!==Oi||J!==wr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function ve(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=W,this.setTexture3D=H,this.setTextureCube=B,this.rebindTextures=D,this.setupRenderTarget=x,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=be,this.useMultisampledRTT=j}function Ww(i,e){function t(n,r=zr){let s;const o=mt.getTransfer(r);if(n===wr)return i.UNSIGNED_BYTE;if(n===kd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===R0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===w0)return i.BYTE;if(n===C0)return i.SHORT;if(n===il)return i.UNSIGNED_SHORT;if(n===Od)return i.INT;if(n===Xs)return i.UNSIGNED_INT;if(n===vr)return i.FLOAT;if(n===hl)return i.HALF_FLOAT;if(n===P0)return i.ALPHA;if(n===D0)return i.RGB;if(n===Oi)return i.RGBA;if(n===sl)return i.DEPTH_COMPONENT;if(n===ol)return i.DEPTH_STENCIL;if(n===L0)return i.RED;if(n===zd)return i.RED_INTEGER;if(n===I0)return i.RG;if(n===Vd)return i.RG_INTEGER;if(n===Hd)return i.RGBA_INTEGER;if(n===xc||n===Sc||n===Mc||n===yc)if(o===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===gh||n===vh||n===xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===Mh||n===yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===Mh)return o===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eh||n===bh||n===Th||n===Ah||n===wh||n===Ch||n===Rh||n===Ph||n===Dh||n===Lh||n===Ih||n===Uh||n===Fh||n===Nh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Eh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Th)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ch)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ph)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return o===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Oh||n===kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ec)return o===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===U0||n===Bh||n===zh||n===Vh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ec)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rl?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class tv extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Xw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qw=`
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

}`;class Yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new tv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new os({vertexShader:Xw,fragmentShader:qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xr(new fu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends ea{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new Yw,m={},p=t.getContextAttributes();let b=null,E=null;const v=[],C=[],R=new Mt;let w=null;const I=new bi;I.viewport=new qt;const M=new bi;M.viewport=new qt;const y=[I,M],L=new mb;let O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=v[te];return he===void 0&&(he=new uf,v[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=v[te];return he===void 0&&(he=new uf,v[te]=he),he.getGripSpace()},this.getHand=function(te){let he=v[te];return he===void 0&&(he=new uf,v[te]=he),he.getHandSpace()};function $(te){const he=C.indexOf(te.inputSource);if(he===-1)return;const oe=v[he];oe!==void 0&&(oe.update(te.inputSource,te.frame,c||o),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",W);for(let te=0;te<v.length;te++){const he=C[te];he!==null&&(C[te]=null,v[te].disconnect(he))}O=null,G=null,_.reset();for(const te in m)delete m[te];e.setRenderTarget(b),d=null,h=null,f=null,r=null,E=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,t)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,be=null,Te=null;p.depth&&(Te=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?ol:sl,be=p.stencil?rl:Xs);const Pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new qs(h.textureWidth,h.textureHeight,{format:Oi,type:wr,depthTexture:new j0(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new qs(d.framebufferWidth,d.framebufferHeight,{format:Oi,type:wr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(te){for(let he=0;he<te.removed.length;he++){const oe=te.removed[he],be=C.indexOf(oe);be>=0&&(C[be]=null,v[be].disconnect(oe))}for(let he=0;he<te.added.length;he++){const oe=te.added[he];let be=C.indexOf(oe);if(be===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=C.length){C.push(oe),be=Pe;break}else if(C[Pe]===null){C[Pe]=oe,be=Pe;break}if(be===-1)break}const Te=v[be];Te&&Te.connect(oe)}}const H=new ne,B=new ne;function le(te,he,oe){H.setFromMatrixPosition(he.matrixWorld),B.setFromMatrixPosition(oe.matrixWorld);const be=H.distanceTo(B),Te=he.projectionMatrix.elements,Pe=oe.projectionMatrix.elements,ot=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),x=(Te[9]+1)/Te[5],V=(Te[9]-1)/Te[5],Y=(Te[8]-1)/Te[0],Z=(Pe[8]+1)/Pe[0],P=ot*Y,ae=ot*Z,j=be/(-Y+Z),re=j*-Y;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(re),te.translateZ(j),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Te[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const ie=ot+j,ve=D+j,A=P-re,S=ae+(be-re),N=x*D/ve*ie,q=V*D/ve*ie;te.projectionMatrix.makePerspective(A,S,N,q,ie,ve),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let he=te.near,oe=te.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),L.near=M.near=I.near=he,L.far=M.far=I.far=oe,(O!==L.near||G!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,G=L.far),L.layers.mask=te.layers.mask|6,I.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const be=te.parent,Te=L.cameras;U(L,be);for(let Pe=0;Pe<Te.length;Pe++)U(Te[Pe],be);Te.length===2?le(L,I,M):L.projectionMatrix.copy(I.projectionMatrix),me(te,L,be)};function me(te,he,oe){oe===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Hh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(L)},this.getCameraTexture=function(te){return m[te]};let Le=null;function Ke(te,he){if(u=he.getViewerPose(c||o),g=he,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let be=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,be=!0);for(let D=0;D<oe.length;D++){const x=oe[D];let V=null;if(d!==null)V=d.getViewport(x);else{const Z=f.getViewSubImage(h,x);V=Z.viewport,D===0&&(e.setRenderTargetTextures(E,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(E))}let Y=y[D];Y===void 0&&(Y=new bi,Y.layers.enable(D),Y.viewport=new qt,y[D]=Y),Y.matrix.fromArray(x.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(x.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(V.x,V.y,V.width,V.height),D===0&&(L.matrix.copy(Y.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),be===!0&&L.cameras.push(Y)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const D=f.getDepthInformation(oe[0]);D&&D.isValid&&D.texture&&_.init(D,r.renderState)}if(Te&&Te.includes("camera-access")&&(e.state.unbindTexture(),f))for(let D=0;D<oe.length;D++){const x=oe[D].camera;if(x){let V=m[x];V||(V=new tv,m[x]=V);const Y=f.getCameraImage(x);V.sourceTexture=Y}}}for(let oe=0;oe<v.length;oe++){const be=C[oe],Te=v[oe];be!==null&&Te!==void 0&&Te.update(be,he,c||o)}Le&&Le(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ve=new K0;Ve.setAnimationLoop(Ke),this.setAnimationLoop=function(te){Le=te},this.dispose=function(){}}}const xs=new Cr,jw=new Qt;function Kw(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,W0(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(xs)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Zw(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=r[b.id];v===void 0&&(g(b),v=u(b),r[b.id]=v,b.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(b,C);const R=e.render.frame;s[b.id]!==R&&(h(b),s[b.id]=R)}function u(b){const E=f();b.__bindingPointIndex=E;const v=i.createBuffer(),C=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const E=r[b.id],v=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,w=v.length;R<w;R++){const I=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,y=I.length;M<y;M++){const L=I[M];if(d(L,R,M,C)===!0){const O=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let ee=0;ee<G.length;ee++){const W=G[ee],H=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+$,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,$),$+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,v,C){const R=b.value,w=E+"_"+v;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const I=C[w];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return C[w]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(b){const E=b.uniforms;let v=0;const C=16;for(let w=0,I=E.length;w<I;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,L=M.length;y<L;y++){const O=M[y],G=Array.isArray(O.value)?O.value:[O.value];for(let $=0,ee=G.length;$<ee;$++){const W=G[$],H=_(W),B=v%C,le=B%H.boundary,U=B+le;v+=le,U!==0&&C-U<H.storage&&(v+=C-U),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=H.storage}}}const R=v%C;return R>0&&(v+=C-R),b.__size=v,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Jw{constructor(e={}){const{canvas:t=IE(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Mi;let R=0,w=0,I=null,M=-1,y=null;const L=new qt,O=new qt;let G=null;const $=new ht(0);let ee=0,W=t.width,H=t.height,B=1,le=null,U=null;const me=new qt(0,0,W,H),Le=new qt(0,0,W,H);let Ke=!1;const Ve=new Y0;let te=!1,he=!1;const oe=new Qt,be=new ne,Te=new qt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function D(){return I===null?B:1}let x=n;function V(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nd}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),x===null){const k="webgl2";if(x=V(k,T),x===null)throw V(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,Z,P,ae,j,re,ie,ve,A,S,N,q,J,X,Se,ue,Ae,ge,de,Me,Ie,we,xe,Xe;function F(){Y=new l1(x),Y.init(),we=new Ww(x,Y),Z=new t1(x,Y,e,we),P=new Hw(x,Y),Z.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),ae=new f1(x),j=new Rw,re=new Gw(x,Y,P,j,Z,we,ae),ie=new i1(v),ve=new a1(v),A=new gb(x),xe=new QA(x,A),S=new c1(x,A,ae,xe),N=new d1(x,S,A,ae),de=new h1(x,Z,re),ue=new n1(j),q=new Cw(v,ie,ve,Y,Z,xe,ue),J=new Kw(v,j),X=new Dw,Se=new Ow(Y),ge=new JA(v,ie,ve,P,N,d,l),Ae=new zw(v,N,Z),Xe=new Zw(x,ae,Z,P),Me=new e1(x,Y,ae),Ie=new u1(x,Y,ae),ae.programs=q.programs,v.capabilities=Z,v.extensions=Y,v.properties=j,v.renderLists=X,v.shadowMap=Ae,v.state=P,v.info=ae}F();const pe=new $w(v,x);this.xr=pe,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(W,H,!1))},this.getSize=function(T){return T.set(W,H)},this.setSize=function(T,k,K=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,H=k,t.width=Math.floor(T*B),t.height=Math.floor(k*B),K===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(W*B,H*B).floor()},this.setDrawingBufferSize=function(T,k,K){W=T,H=k,B=K,t.width=Math.floor(T*K),t.height=Math.floor(k*K),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,k,K,Q){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,k,K,Q),P.viewport(L.copy(me).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Le)},this.setScissor=function(T,k,K,Q){T.isVector4?Le.set(T.x,T.y,T.z,T.w):Le.set(T,k,K,Q),P.scissor(O.copy(Le).multiplyScalar(B).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){P.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){U=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,K=!0){let Q=0;if(T){let z=!1;if(I!==null){const ce=I.texture.format;z=ce===Hd||ce===Vd||ce===zd}if(z){const ce=I.texture.type,ye=ce===wr||ce===Xs||ce===il||ce===rl||ce===kd||ce===Bd,Ne=ge.getClearColor(),Ue=ge.getClearAlpha(),Ge=Ne.r,ze=Ne.g,Be=Ne.b;ye?(g[0]=Ge,g[1]=ze,g[2]=Be,g[3]=Ue,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Ge,_[1]=ze,_[2]=Be,_[3]=Ue,x.clearBufferiv(x.COLOR,0,_))}else Q|=x.COLOR_BUFFER_BIT}k&&(Q|=x.DEPTH_BUFFER_BIT),K&&(Q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),ge.dispose(),X.dispose(),Se.dispose(),j.dispose(),ie.dispose(),ve.dispose(),N.dispose(),xe.dispose(),Xe.dispose(),q.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Je),pe.removeEventListener("sessionend",Ee),qe.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=ae.autoReset,k=Ae.enabled,K=Ae.autoUpdate,Q=Ae.needsUpdate,z=Ae.type;F(),ae.autoReset=T,Ae.enabled=k,Ae.autoUpdate=K,Ae.needsUpdate=Q,Ae.type=z}function fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const k=T.target;k.removeEventListener("dispose",se),Fe(k)}function Fe(T){We(T),j.remove(T)}function We(T){const k=j.get(T).programs;k!==void 0&&(k.forEach(function(K){q.releaseProgram(K)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,K,Q,z,ce){k===null&&(k=Pe);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Ne=xt(T,k,K,Q,z);P.setMaterial(Q,ye);let Ue=K.index,Ge=1;if(Q.wireframe===!0){if(Ue=S.getWireframeAttribute(K),Ue===void 0)return;Ge=2}const ze=K.drawRange,Be=K.attributes.position;let Qe=ze.start*Ge,ct=(ze.start+ze.count)*Ge;ce!==null&&(Qe=Math.max(Qe,ce.start*Ge),ct=Math.min(ct,(ce.start+ce.count)*Ge)),Ue!==null?(Qe=Math.max(Qe,0),ct=Math.min(ct,Ue.count)):Be!=null&&(Qe=Math.max(Qe,0),ct=Math.min(ct,Be.count));const Vt=ct-Qe;if(Vt<0||Vt===1/0)return;xe.setup(z,Q,Ne,K,Ue);let Dt,Et=Me;if(Ue!==null&&(Dt=A.get(Ue),Et=Ie,Et.setIndex(Dt)),z.isMesh)Q.wireframe===!0?(P.setLineWidth(Q.wireframeLinewidth*D()),Et.setMode(x.LINES)):Et.setMode(x.TRIANGLES);else if(z.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),P.setLineWidth(Ye*D()),z.isLineSegments?Et.setMode(x.LINES):z.isLineLoop?Et.setMode(x.LINE_LOOP):Et.setMode(x.LINE_STRIP)}else z.isPoints?Et.setMode(x.POINTS):z.isSprite&&Et.setMode(x.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)No("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))Et.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ye=z._multiDrawStarts,Ft=z._multiDrawCounts,pt=z._multiDrawCount,ei=Ue?A.get(Ue).bytesPerElement:1,Ks=j.get(Q).currentProgram.getUniforms();for(let ti=0;ti<pt;ti++)Ks.setValue(x,"_gl_DrawID",ti),Et.render(Ye[ti]/ei,Ft[ti])}else if(z.isInstancedMesh)Et.renderInstances(Qe,Vt,z.count);else if(K.isInstancedBufferGeometry){const Ye=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ft=Math.min(K.instanceCount,Ye);Et.renderInstances(Qe,Vt,Ft)}else Et.render(Qe,Vt)};function dt(T,k,K){T.transparent===!0&&T.side===_r&&T.forceSinglePass===!1?(T.side=Zn,T.needsUpdate=!0,Wt(T,k,K),T.side=ss,T.needsUpdate=!0,Wt(T,k,K),T.side=_r):Wt(T,k,K)}this.compile=function(T,k,K=null){K===null&&(K=T),p=Se.get(K),p.init(k),E.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==K&&T.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Q=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ce=z.material;if(ce)if(Array.isArray(ce))for(let ye=0;ye<ce.length;ye++){const Ne=ce[ye];dt(Ne,K,z),Q.add(Ne)}else dt(ce,K,z),Q.add(ce)}),p=E.pop(),Q},this.compileAsync=function(T,k,K=null){const Q=this.compile(T,k,K);return new Promise(z=>{function ce(){if(Q.forEach(function(ye){j.get(ye).currentProgram.isReady()&&Q.delete(ye)}),Q.size===0){z(T);return}setTimeout(ce,10)}Y.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let De=null;function ke(T){De&&De(T)}function Je(){qe.stop()}function Ee(){qe.start()}const qe=new K0;qe.setAnimationLoop(ke),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){De=T,pe.setAnimationLoop(T),T===null?qe.stop():qe.start()},pe.addEventListener("sessionstart",Je),pe.addEventListener("sessionend",Ee),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(k),k=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,I),p=Se.get(T,E.length),p.init(k),E.push(p),oe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ve.setFromProjectionMatrix(oe,Zi,k.reversedDepth),he=this.localClippingEnabled,te=ue.init(this.clippingPlanes,he),m=X.get(T,b.length),m.init(),b.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&He(ce,k,-1/0,v.sortObjects)}He(T,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(le,U),ot=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ot&&ge.addToRenderList(m,T),this.info.render.frame++,te===!0&&ue.beginShadows();const K=p.state.shadowsArray;Ae.render(K,T,k),te===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ce=k.cameras;if(z.length>0)for(let ye=0,Ne=ce.length;ye<Ne;ye++){const Ue=ce[ye];Gt(Q,z,T,Ue)}ot&&ge.render(T);for(let ye=0,Ne=ce.length;ye<Ne;ye++){const Ue=ce[ye];je(m,T,Ue,Ue.viewport)}}else z.length>0&&Gt(Q,z,T,k),ot&&ge.render(T),je(m,T,k);I!==null&&w===0&&(re.updateMultisampleRenderTarget(I),re.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(v,T,k),xe.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(p=E[E.length-1],te===!0&&ue.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function He(T,k,K,Q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){Q&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const ye=N.update(T),Ne=T.material;Ne.visible&&m.push(T,ye,Ne,K,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const ye=N.update(T),Ne=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Te.copy(ye.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(Ne)){const Ue=ye.groups;for(let Ge=0,ze=Ue.length;Ge<ze;Ge++){const Be=Ue[Ge],Qe=Ne[Be.materialIndex];Qe&&Qe.visible&&m.push(T,ye,Qe,K,Te.z,Be)}}else Ne.visible&&m.push(T,ye,Ne,K,Te.z,null)}}const ce=T.children;for(let ye=0,Ne=ce.length;ye<Ne;ye++)He(ce[ye],k,K,Q)}function je(T,k,K,Q){const z=T.opaque,ce=T.transmissive,ye=T.transparent;p.setupLightsView(K),te===!0&&ue.setGlobalState(v.clippingPlanes,K),Q&&P.viewport(L.copy(Q)),z.length>0&&it(z,k,K),ce.length>0&&it(ce,k,K),ye.length>0&&it(ye,k,K),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Gt(T,k,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new qs(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?hl:wr,minFilter:Ds,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const ce=p.state.transmissionRenderTarget[Q.id],ye=Q.viewport||L;ce.setSize(ye.z*v.transmissionResolutionScale,ye.w*v.transmissionResolutionScale);const Ne=v.getRenderTarget(),Ue=v.getActiveCubeFace(),Ge=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor($),ee=v.getClearAlpha(),ee<1&&v.setClearColor(16777215,.5),v.clear(),ot&&ge.render(K);const ze=v.toneMapping;v.toneMapping=Zr;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),te===!0&&ue.setGlobalState(v.clippingPlanes,Q),it(T,K,Q),re.updateMultisampleRenderTarget(ce),re.updateRenderTargetMipmap(ce),Y.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ct=0,Vt=k.length;ct<Vt;ct++){const Dt=k[ct],Et=Dt.object,Ye=Dt.geometry,Ft=Dt.material,pt=Dt.group;if(Ft.side===_r&&Et.layers.test(Q.layers)){const ei=Ft.side;Ft.side=Zn,Ft.needsUpdate=!0,Lt(Et,K,Q,Ye,Ft,pt),Ft.side=ei,Ft.needsUpdate=!0,Qe=!0}}Qe===!0&&(re.updateMultisampleRenderTarget(ce),re.updateRenderTargetMipmap(ce))}v.setRenderTarget(Ne,Ue,Ge),v.setClearColor($,ee),Be!==void 0&&(Q.viewport=Be),v.toneMapping=ze}function it(T,k,K){const Q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ce=T.length;z<ce;z++){const ye=T[z],Ne=ye.object,Ue=ye.geometry,Ge=ye.group;let ze=ye.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Ne.layers.test(K.layers)&&Lt(Ne,k,K,Ue,ze,Ge)}}function Lt(T,k,K,Q,z,ce){T.onBeforeRender(v,k,K,Q,z,ce),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(v,k,K,Q,T,ce),z.transparent===!0&&z.side===_r&&z.forceSinglePass===!1?(z.side=Zn,z.needsUpdate=!0,v.renderBufferDirect(K,k,Q,z,T,ce),z.side=ss,z.needsUpdate=!0,v.renderBufferDirect(K,k,Q,z,T,ce),z.side=_r):v.renderBufferDirect(K,k,Q,z,T,ce),T.onAfterRender(v,k,K,Q,z,ce)}function Wt(T,k,K){k.isScene!==!0&&(k=Pe);const Q=j.get(T),z=p.state.lights,ce=p.state.shadowsArray,ye=z.state.version,Ne=q.getParameters(T,z.state,ce,k,K),Ue=q.getProgramCacheKey(Ne);let Ge=Q.programs;Q.environment=T.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(T.isMeshStandardMaterial?ve:ie).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",se),Ge=new Map,Q.programs=Ge);let ze=Ge.get(Ue);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===ye)return yt(T,Ne),ze}else Ne.uniforms=q.getUniforms(T),T.onBeforeCompile(Ne,v),ze=q.acquireProgram(Ne,Ue),Ge.set(Ue,ze),Q.uniforms=Ne.uniforms;const Be=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ue.uniform),yt(T,Ne),Q.needsLights=Pt(T),Q.lightsStateVersion=ye,Q.needsLights&&(Be.ambientLightColor.value=z.state.ambient,Be.lightProbe.value=z.state.probe,Be.directionalLights.value=z.state.directional,Be.directionalLightShadows.value=z.state.directionalShadow,Be.spotLights.value=z.state.spot,Be.spotLightShadows.value=z.state.spotShadow,Be.rectAreaLights.value=z.state.rectArea,Be.ltc_1.value=z.state.rectAreaLTC1,Be.ltc_2.value=z.state.rectAreaLTC2,Be.pointLights.value=z.state.point,Be.pointLightShadows.value=z.state.pointShadow,Be.hemisphereLights.value=z.state.hemi,Be.directionalShadowMap.value=z.state.directionalShadowMap,Be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Be.spotShadowMap.value=z.state.spotShadowMap,Be.spotLightMatrix.value=z.state.spotLightMatrix,Be.spotLightMap.value=z.state.spotLightMap,Be.pointShadowMap.value=z.state.pointShadowMap,Be.pointShadowMatrix.value=z.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Rt(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=bc.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function yt(T,k){const K=j.get(T);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function xt(T,k,K,Q,z){k.isScene!==!0&&(k=Pe),re.resetTextureUnits();const ce=k.fog,ye=Q.isMeshStandardMaterial?k.environment:null,Ne=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jo,Ue=(Q.isMeshStandardMaterial?ve:ie).get(Q.envMap||ye),Ge=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!K.morphAttributes.position,Qe=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let Vt=Zr;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Vt=v.toneMapping);const Dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=Dt!==void 0?Dt.length:0,Ye=j.get(Q),Ft=p.state.lights;if(te===!0&&(he===!0||T!==y)){const Cn=T===y&&Q.id===M;ue.setState(Q,T,Cn)}let pt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Ft.state.version||Ye.outputColorSpace!==Ne||z.isBatchedMesh&&Ye.batching===!1||!z.isBatchedMesh&&Ye.batching===!0||z.isBatchedMesh&&Ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ye.instancing===!1||!z.isInstancedMesh&&Ye.instancing===!0||z.isSkinnedMesh&&Ye.skinning===!1||!z.isSkinnedMesh&&Ye.skinning===!0||z.isInstancedMesh&&Ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ye.instancingMorph===!1&&z.morphTexture!==null||Ye.envMap!==Ue||Q.fog===!0&&Ye.fog!==ce||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ue.numPlanes||Ye.numIntersection!==ue.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==ze||Ye.morphTargets!==Be||Ye.morphNormals!==Qe||Ye.morphColors!==ct||Ye.toneMapping!==Vt||Ye.morphTargetsCount!==Et)&&(pt=!0):(pt=!0,Ye.__version=Q.version);let ei=Ye.currentProgram;pt===!0&&(ei=Wt(Q,k,z));let Ks=!1,ti=!1,ia=!1;const Nt=ei.getUniforms(),gi=Ye.uniforms;if(P.useProgram(ei.program)&&(Ks=!0,ti=!0,ia=!0),Q.id!==M&&(M=Q.id,ti=!0),Ks||y!==T){P.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(x,"projectionMatrix",T.projectionMatrix),Nt.setValue(x,"viewMatrix",T.matrixWorldInverse);const Gn=Nt.map.cameraPosition;Gn!==void 0&&Gn.setValue(x,be.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Nt.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Nt.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,ti=!0,ia=!0)}if(z.isSkinnedMesh){Nt.setOptional(x,z,"bindMatrix"),Nt.setOptional(x,z,"bindMatrixInverse");const Cn=z.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Nt.setValue(x,"boneTexture",Cn.boneTexture,re))}z.isBatchedMesh&&(Nt.setOptional(x,z,"batchingTexture"),Nt.setValue(x,"batchingTexture",z._matricesTexture,re),Nt.setOptional(x,z,"batchingIdTexture"),Nt.setValue(x,"batchingIdTexture",z._indirectTexture,re),Nt.setOptional(x,z,"batchingColorTexture"),z._colorsTexture!==null&&Nt.setValue(x,"batchingColorTexture",z._colorsTexture,re));const vi=K.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&de.update(z,K,ei),(ti||Ye.receiveShadow!==z.receiveShadow)&&(Ye.receiveShadow=z.receiveShadow,Nt.setValue(x,"receiveShadow",z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(gi.envMap.value=Ue,gi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&k.environment!==null&&(gi.envMapIntensity.value=k.environmentIntensity),ti&&(Nt.setValue(x,"toneMappingExposure",v.toneMappingExposure),Ye.needsLights&&Qn(gi,ia),ce&&Q.fog===!0&&J.refreshFogUniforms(gi,ce),J.refreshMaterialUniforms(gi,Q,B,H,p.state.transmissionRenderTarget[T.id]),bc.upload(x,Rt(Ye),gi,re)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(bc.upload(x,Rt(Ye),gi,re),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Nt.setValue(x,"center",z.center),Nt.setValue(x,"modelViewMatrix",z.modelViewMatrix),Nt.setValue(x,"normalMatrix",z.normalMatrix),Nt.setValue(x,"modelMatrix",z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Cn=Q.uniformsGroups;for(let Gn=0,du=Cn.length;Gn<du;Gn++){const cs=Cn[Gn];Xe.update(cs,ei),Xe.bind(cs,ei)}}return ei}function Qn(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Pt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,k,K){const Q=j.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),j.get(T.texture).__webglTexture=k,j.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const K=j.get(T);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const wn=x.createFramebuffer();this.setRenderTarget=function(T,k=0,K=0){I=T,R=k,w=K;let Q=!0,z=null,ce=!1,ye=!1;if(T){const Ue=j.get(T);if(Ue.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(x.FRAMEBUFFER,null),Q=!1;else if(Ue.__webglFramebuffer===void 0)re.setupRenderTarget(T);else if(Ue.__hasExternalTextures)re.rebindTextures(T,j.get(T.texture).__webglTexture,j.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Ue.__boundDepthTexture!==Be){if(Be!==null&&j.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ye=!0);const ze=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?z=ze[k][K]:z=ze[k],ce=!0):T.samples>0&&re.useMultisampledRTT(T)===!1?z=j.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[K]:z=ze,L.copy(T.viewport),O.copy(T.scissor),G=T.scissorTest}else L.copy(me).multiplyScalar(B).floor(),O.copy(Le).multiplyScalar(B).floor(),G=Ke;if(K!==0&&(z=wn),P.bindFramebuffer(x.FRAMEBUFFER,z)&&Q&&P.drawBuffers(T,z),P.viewport(L),P.scissor(O),P.setScissorTest(G),ce){const Ue=j.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,K)}else if(ye){const Ue=k;for(let Ge=0;Ge<T.textures.length;Ge++){const ze=j.get(T.textures[Ge]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Ge,ze.__webglTexture,K,Ue)}}else if(T!==null&&K!==0){const Ue=j.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ue.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(T,k,K,Q,z,ce,ye,Ne=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ue=Ue[ye]),Ue){P.bindFramebuffer(x.FRAMEBUFFER,Ue);try{const Ge=T.textures[Ne],ze=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Q&&K>=0&&K<=T.height-z&&(T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(k,K,Q,z,we.convert(ze),we.convert(Be),ce))}finally{const Ge=I!==null?j.get(I).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,k,K,Q,z,ce,ye,Ne=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ue=Ue[ye]),Ue)if(k>=0&&k<=T.width-Q&&K>=0&&K<=T.height-z){P.bindFramebuffer(x.FRAMEBUFFER,Ue);const Ge=T.textures[Ne],ze=Ge.format,Be=Ge.type;if(!Z.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Qe),x.bufferData(x.PIXEL_PACK_BUFFER,ce.byteLength,x.STREAM_READ),T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Ne),x.readPixels(k,K,Q,z,we.convert(ze),we.convert(Be),0);const ct=I!==null?j.get(I).__webglFramebuffer:null;P.bindFramebuffer(x.FRAMEBUFFER,ct);const Vt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await UE(x,Vt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Qe),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,ce),x.deleteBuffer(Qe),x.deleteSync(Vt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,K=0){const Q=Math.pow(2,-K),z=Math.floor(T.image.width*Q),ce=Math.floor(T.image.height*Q),ye=k!==null?k.x:0,Ne=k!==null?k.y:0;re.setTexture2D(T,0),x.copyTexSubImage2D(x.TEXTURE_2D,K,0,0,ye,Ne,z,ce),P.unbindTexture()};const _i=x.createFramebuffer(),tn=x.createFramebuffer();this.copyTextureToTexture=function(T,k,K=null,Q=null,z=0,ce=null){ce===null&&(z!==0?(No("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=z,z=0):ce=0);let ye,Ne,Ue,Ge,ze,Be,Qe,ct,Vt;const Dt=T.isCompressedTexture?T.mipmaps[ce]:T.image;if(K!==null)ye=K.max.x-K.min.x,Ne=K.max.y-K.min.y,Ue=K.isBox3?K.max.z-K.min.z:1,Ge=K.min.x,ze=K.min.y,Be=K.isBox3?K.min.z:0;else{const vi=Math.pow(2,-z);ye=Math.floor(Dt.width*vi),Ne=Math.floor(Dt.height*vi),T.isDataArrayTexture?Ue=Dt.depth:T.isData3DTexture?Ue=Math.floor(Dt.depth*vi):Ue=1,Ge=0,ze=0,Be=0}Q!==null?(Qe=Q.x,ct=Q.y,Vt=Q.z):(Qe=0,ct=0,Vt=0);const Et=we.convert(k.format),Ye=we.convert(k.type);let Ft;k.isData3DTexture?(re.setTexture3D(k,0),Ft=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(re.setTexture2DArray(k,0),Ft=x.TEXTURE_2D_ARRAY):(re.setTexture2D(k,0),Ft=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const pt=x.getParameter(x.UNPACK_ROW_LENGTH),ei=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Ks=x.getParameter(x.UNPACK_SKIP_PIXELS),ti=x.getParameter(x.UNPACK_SKIP_ROWS),ia=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Dt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Dt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ge),x.pixelStorei(x.UNPACK_SKIP_ROWS,ze),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Be);const Nt=T.isDataArrayTexture||T.isData3DTexture,gi=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const vi=j.get(T),Cn=j.get(k),Gn=j.get(vi.__renderTarget),du=j.get(Cn.__renderTarget);P.bindFramebuffer(x.READ_FRAMEBUFFER,Gn.__webglFramebuffer),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,du.__webglFramebuffer);for(let cs=0;cs<Ue;cs++)Nt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(T).__webglTexture,z,Be+cs),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,j.get(k).__webglTexture,ce,Vt+cs)),x.blitFramebuffer(Ge,ze,ye,Ne,Qe,ct,ye,Ne,x.DEPTH_BUFFER_BIT,x.NEAREST);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||j.has(T)){const vi=j.get(T),Cn=j.get(k);P.bindFramebuffer(x.READ_FRAMEBUFFER,_i),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,tn);for(let Gn=0;Gn<Ue;Gn++)Nt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,vi.__webglTexture,z,Be+Gn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,vi.__webglTexture,z),gi?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Cn.__webglTexture,ce,Vt+Gn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Cn.__webglTexture,ce),z!==0?x.blitFramebuffer(Ge,ze,ye,Ne,Qe,ct,ye,Ne,x.COLOR_BUFFER_BIT,x.NEAREST):gi?x.copyTexSubImage3D(Ft,ce,Qe,ct,Vt+Gn,Ge,ze,ye,Ne):x.copyTexSubImage2D(Ft,ce,Qe,ct,Ge,ze,ye,Ne);P.bindFramebuffer(x.READ_FRAMEBUFFER,null),P.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else gi?T.isDataTexture||T.isData3DTexture?x.texSubImage3D(Ft,ce,Qe,ct,Vt,ye,Ne,Ue,Et,Ye,Dt.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Ft,ce,Qe,ct,Vt,ye,Ne,Ue,Et,Dt.data):x.texSubImage3D(Ft,ce,Qe,ct,Vt,ye,Ne,Ue,Et,Ye,Dt):T.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,ce,Qe,ct,ye,Ne,Et,Ye,Dt.data):T.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,ce,Qe,ct,Dt.width,Dt.height,Et,Dt.data):x.texSubImage2D(x.TEXTURE_2D,ce,Qe,ct,ye,Ne,Et,Ye,Dt);x.pixelStorei(x.UNPACK_ROW_LENGTH,pt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ei),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ks),x.pixelStorei(x.UNPACK_SKIP_ROWS,ti),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ia),ce===0&&k.generateMipmaps&&x.generateMipmap(Ft),P.unbindTexture()},this.copyTextureToTexture3D=function(T,k,K=null,Q=null,z=0){return No('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,K,Q,z)},this.initRenderTarget=function(T){j.get(T).__webglFramebuffer===void 0&&re.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?re.setTextureCube(T,0):T.isData3DTexture?re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?re.setTexture2DArray(T,0):re.setTexture2D(T,0),P.unbindTexture()},this.resetState=function(){R=0,w=0,I=null,P.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Qw=1/3,Vi=1/6,vf=i=>Math.floor(i)|0,xf=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function eC(i=Math.random){const e=tC(i),t=new Float64Array(e).map(s=>xf[s%12*3]),n=new Float64Array(e).map(s=>xf[s%12*3+1]),r=new Float64Array(e).map(s=>xf[s%12*3+2]);return function(o,a,l){let c,u,f,h;const d=(o+a+l)*Qw,g=vf(o+d),_=vf(a+d),m=vf(l+d),p=(g+_+m)*Vi,b=g-p,E=_-p,v=m-p,C=o-b,R=a-E,w=l-v;let I,M,y,L,O,G;C>=R?R>=w?(I=1,M=0,y=0,L=1,O=1,G=0):C>=w?(I=1,M=0,y=0,L=1,O=0,G=1):(I=0,M=0,y=1,L=1,O=0,G=1):R<w?(I=0,M=0,y=1,L=0,O=1,G=1):C<w?(I=0,M=1,y=0,L=0,O=1,G=1):(I=0,M=1,y=0,L=1,O=1,G=0);const $=C-I+Vi,ee=R-M+Vi,W=w-y+Vi,H=C-L+2*Vi,B=R-O+2*Vi,le=w-G+2*Vi,U=C-1+3*Vi,me=R-1+3*Vi,Le=w-1+3*Vi,Ke=g&255,Ve=_&255,te=m&255;let he=.6-C*C-R*R-w*w;if(he<0)c=0;else{const Pe=Ke+e[Ve+e[te]];he*=he,c=he*he*(t[Pe]*C+n[Pe]*R+r[Pe]*w)}let oe=.6-$*$-ee*ee-W*W;if(oe<0)u=0;else{const Pe=Ke+I+e[Ve+M+e[te+y]];oe*=oe,u=oe*oe*(t[Pe]*$+n[Pe]*ee+r[Pe]*W)}let be=.6-H*H-B*B-le*le;if(be<0)f=0;else{const Pe=Ke+L+e[Ve+O+e[te+G]];be*=be,f=be*be*(t[Pe]*H+n[Pe]*B+r[Pe]*le)}let Te=.6-U*U-me*me-Le*Le;if(Te<0)h=0;else{const Pe=Ke+1+e[Ve+1+e[te+1]];Te*=Te,h=Te*Te*(t[Pe]*U+n[Pe]*me+r[Pe]*Le)}return 32*(c+u+f+h)}}function tC(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(i()*(256-n)),s=t[n];t[n]=t[r],t[r]=s}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const nC=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},iC={__name:"Background",setup(i){const e=hn(null);function t(n=32){const r=document.createElement("canvas");r.width=r.height=n;const s=r.getContext("2d"),o=s.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(.4,"rgba(255,255,255,0.3)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,n,n);const a=new zn(r);return a.needsUpdate=!0,a}return $s(()=>{const n=new sb,r=new bi(75,window.innerWidth/window.innerHeight,.1,1e3);r.position.z=6;const s=new Jw({antialias:!1,alpha:!0});s.setSize(window.innerWidth,window.innerHeight),e.value.appendChild(s.domElement);const o=1500,a=new Pr,l=new Float32Array(o*3),c=new Float32Array(o*3),u=eC(),f=[new ht(10040319),new ht(43775),new ht(16737996)];let h=0;for(let m=0;m<o;m++){const p=(Math.random()-.5)*20,b=(Math.random()-.5)*20,E=(Math.random()-.5)*20,v=u(p*.15,b*.15,E*.15);if(v>0){l.set([p,b,E],h*3);const C=(v+1)/2,R=f[Math.floor(C*f.length)];c.set([R.r,R.g,R.b],h*3),h++}}a.setAttribute("position",new Di(l.slice(0,h*3),3)),a.setAttribute("color",new Di(c.slice(0,h*3),3));const d=new $0({size:.11,vertexColors:!0,transparent:!0,opacity:.6,blending:nh,depthWrite:!1,map:t(),alphaTest:.01}),g=new cb(a,d);n.add(g),n.add(new pb(16777215,.15));function _(){g.rotation.y+=1e-4,g.rotation.x+=1e-4,s.render(n,r),requestAnimationFrame(_)}_(),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)})}),(n,r)=>(It(),kt("div",{ref_key:"container",ref:e,class:"nebula-canvas"},null,512))}},rC=nC(iC,[["__scopeId","data-v-bcacff47"]]);/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bn,nv,yr,Ji,Jr,iv,ko,rc,rv=function(){return typeof window<"u"},sv=function(){return bn||rv()&&(bn=window.gsap)&&bn.registerPlugin&&bn},ov=function(e){return typeof e=="string"},$m=function(e){return typeof e=="function"},al=function(e,t){var n=t==="x"?"Width":"Height",r="scroll"+n,s="client"+n;return e===yr||e===Ji||e===Jr?Math.max(Ji[r],Jr[r])-(yr["inner"+n]||Ji[s]||Jr[s]):e[r]-e["offset"+n]},ll=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===yr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Ji[n]!=null?Ji:Jr),function(){return e[n]}},sC=function(e,t,n,r){if($m(e)&&(e=e(t,n,r)),typeof e!="object")return ov(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&$m(e[o])?e[o](t,n,r):e[o];return s},av=function(e,t){if(e=iv(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),r=!t||t===yr||t===Jr,s=r?{top:Ji.clientTop-(yr.pageYOffset||Ji.scrollTop||Jr.scrollTop||0),left:Ji.clientLeft-(yr.pageXOffset||Ji.scrollLeft||Jr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!r&&t&&(o.x+=ll(t,"x")(),o.y+=ll(t,"y")()),o},jm=function(e,t,n,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:ov(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?al(t,n)-s:Math.min(al(t,n),av(e,t)[n]-s)},Xh=function(){bn=sv(),rv()&&bn&&typeof document<"u"&&document.body&&(yr=window,Jr=document.body,Ji=document.documentElement,iv=bn.utils.toArray,bn.config({autoKillThreshold:7}),ko=bn.config(),nv=1)},na={version:"3.13.0",name:"scrollTo",rawVars:1,register:function(e){bn=e,Xh()},init:function(e,t,n,r,s){nv||Xh();var o=this,a=bn.getProperty(e,"scrollSnapType");o.isWin=e===yr,o.target=e,o.tween=n,t=sC(t,r,e,s),o.vars=t,o.autoKill=!!("autoKill"in t?t:ko).autoKill,o.getX=ll(e,"x"),o.getY=ll(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),rc||(rc=bn.core.globals().ScrollTrigger),bn.getProperty(e,"scrollBehavior")==="smooth"&&bn.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,jm(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,jm(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,f=t.snapInline,h,d,g,_,m;n;)n.r(e,n.d),n=n._next;h=c||!t.skipX?t.getX():a,d=c||!t.skipY?t.getY():l,g=d-l,_=h-a,m=ko.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(_>m||_<-m)&&h<al(r,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&d<al(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?yr.scrollTo(t.skipX?h:t.x,t.skipY?d:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(d=r.scrollTop,h=r.scrollLeft,f?r.style.scrollSnapType=f:r.style.removeProperty("scroll-snap-type"),r.scrollTop=d+1,r.scrollLeft=h+1,r.scrollTop=d,r.scrollLeft=h),t.xPrev=t.x,t.yPrev=t.y,rc&&rc.update()},kill:function(e){var t=e==="scrollTo",n=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),n>-1&&this._props.splice(n,1),!this._props.length}};na.max=al;na.getOffset=av;na.buildGetter=ll;na.config=function(i){ko||Xh()||(ko=bn.config());for(var e in i)ko[e]=i[e]};sv()&&bn.registerPlugin(na);const oC={class:"header"},aC={class:"header-container"},lC="rizqikurni29@gmail.com",cC="Mas, Ganteng banget mas",uC="",fC={__name:"Header",setup(i){const e=`https://mail.google.com/mail/?view=cm&fs=1&to=${lC}&su=${encodeURIComponent(cC)}&body=${encodeURIComponent(uC)}`,t=hn(!1),n=()=>{t.value=!t.value,t.value?Jt.fromTo(s.value,{y:-50,opacity:0},{y:0,opacity:1,duration:.5,ease:"power2.out"}):Jt.to(s.value,{y:-50,opacity:0,duration:.4,ease:"power2.in"})},r=()=>t.value=!1,s=hn(null);Jt.registerPlugin(na,nt);const o=hn(null),a=["Ryizanova","MRizqiK","MrK"];return $s(()=>{let l=0;const c=o.value,u=Jt.timeline({repeat:-1});a.forEach(()=>{u.to(c,{duration:.6,rotateX:90,opacity:0,ease:"power2.in",onComplete:()=>{l=(l+1)%a.length,c.textContent=a[l]}}).to(c,{duration:.6,rotateX:0,opacity:1,ease:"power2.out"}).to({},{duration:1.4})}),document.querySelectorAll('a[href^="#"]').forEach(b=>{b.addEventListener("click",E=>{const v=b.getAttribute("href");v&&v.startsWith("#")&&(E.preventDefault(),Jt.to(window,{duration:1.2,scrollTo:{y:v,offsetY:80},ease:"power2.inOut"}),r())})});const f=document.querySelectorAll("section[id]"),h=document.querySelectorAll(".nav-desktop a"),d=document.querySelectorAll(".nav-mobile a");f.forEach(b=>{nt.create({trigger:b,start:"top 100",end:"bottom 100",onEnter:()=>g(b.id),onEnterBack:()=>g(b.id)})});function g(b){h.forEach(E=>{E.classList.toggle("active-nav",E.getAttribute("href")===`#${b}`)}),d.forEach(E=>{E.classList.toggle("active-nav",E.getAttribute("href")===`#${b}`)})}const _=document.querySelectorAll(".social-desktop a i"),m=["#0A66C2","#E1306C","#1877F2","#000000","#0A66C2"],p=Jt.timeline({repeat:-1,yoyo:!0});_.forEach((b,E)=>{p.to(b,{color:m[E],duration:.5,ease:"power1.inOut"},E*.2)})}),(l,c)=>(It(),kt("header",oC,[$e("div",aC,[$e("p",{class:"judul",ref_key:"judulRef",ref:o},"Ryizanova",512),c[3]||(c[3]=lc('<nav class="nav-desktop"><a href="#home">Home</a><a href="#skill">Skill</a><a href="#website">Website</a><a href="#gallery">Gallery</a></nav>',1)),$e("div",{class:"social-desktop"},[$e("a",{href:e,target:"_blank"},c[0]||(c[0]=[$e("i",{class:"fab fa-google"},null,-1)])),c[1]||(c[1]=lc('<a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a><a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>',4))]),$e("button",{class:"menu-btn",onClick:n},c[2]||(c[2]=[$e("i",{class:"fas fa-bars"},null,-1)]))]),Qv($e("div",{class:"nav-mobile",ref_key:"navMobile",ref:s},[$e("nav",null,[$e("a",{href:"#home",onClick:r},"Home"),$e("a",{href:"#skill",onClick:r},"Skill"),$e("a",{href:"#website",onClick:r},"Website"),$e("a",{href:"#gallery",onClick:r},"Gallery")]),$e("div",{class:"social-mobile"},[$e("a",{href:e,target:"_blank"},c[4]||(c[4]=[$e("i",{class:"fab fa-google"},null,-1)])),c[5]||(c[5]=lc('<a href="https://www.instagram.com/mrizqik29/" target="_blank"><i class="fab fa-instagram"></i></a><a href="https://www.facebook.com/muhammadrizky.kurniawan.3" target="_blank"><i class="fab fa-facebook"></i></a><a href="https://github.com/mrizqik29" target="_blank"><i class="fab fa-github"></i></a><a href="www.linkedin.com/in/muhammad-rizqi-kurniawan-328195254" target="_blank"><i class="fab fa-linkedin"></i></a>',4))])],512),[[uS,t.value]])]))}},hC="/assets/web-DyuqBmB0.png",dC="/assets/web2-zFgR8v1X.jpeg",pC="/assets/web3-Dl92_9VJ.jpeg",mC="/assets/web4-BfNhJ7T5.jpeg",_C="/assets/web5-DE5BbLQH.jpeg",gC="/assets/web6-Bfh63amY.jpeg",vC="/assets/web7-CtPHsQHS.jpeg",xC="/assets/web8-CbKLze6k.jpeg",SC="/assets/web9-CQ2GwiL_.jpeg",MC="/assets/web10-C3QfLwCf.jpeg",yC="/assets/web11-CI5nDHuF.jpeg",EC="/assets/web12-CZwjSito.jpeg",bC={class:"website-content"},TC=["src","alt"],AC={class:"website-text",style:{"will-change":"transform, opacity"}},wC={class:"title"},CC={class:"equipment"},RC={class:"description"},PC=["href"],DC={key:1,class:"github-buttons",style:{"margin-top":"8px"}},LC=["href"],IC=["href"],UC={__name:"Website",setup(i){Jt.registerPlugin(nt);const e=hn(null);hn(null);const t=hn([{items:[{image:hC,title:"Website Undangan",equipment:"Equipment : Vue.js (Vite), CSS",description:"Website ini digunakan untuk menyampaikan informasi undangan secara online dengan tampilan yang menarik dan mudah diakses. Menggunakan Vue.js (Vite) untuk interaktivitas dan CSS untuk desain responsif, website ini memudahkan pengguna melihat detail acara, lokasi, dan informasi penting lainnya dengan nyaman di berbagai perangkat.",website:"https://mrizqik29.github.io/undanganv2/",size:"large"}]},{items:[{image:EC,title:"Website Landing Page",equipment:"Equipment: VS Code, GitHub, Vue.js, GSAP, HTML, SCSS",description:"Website ini adalah landing page interaktif yang dirancang untuk memberikan pengalaman pengguna yang menarik dan responsif. Animasi GSAP, termasuk ScrollTrigger, digunakan untuk efek gerakan yang halus saat pengguna menggulir halaman. SCSS diterapkan dengan animasi neon bergerak untuk tampilan yang modern dan dinamis. Ikon-ikon menggunakan Lucide untuk kesan visual yang konsisten. Seluruh desain dioptimalkan agar tampil dengan baik di berbagai perangkat, membuat website ini menarik dan mudah digunakan.",website:"https://mrizqik29.github.io/landingpage/"}]},{items:[{image:dC,title:"Login (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, JWT, Hash, XAMPP, VS Code, GSAP, Adobe Illustrator",description:"Fitur login pada website inventori ini dirancang dengan keamanan tinggi menggunakan token JWT dan hash untuk melindungi data pengguna. Menggunakan Vue.js (Vite) untuk interaktivitas frontend, Laravel dan MySQL untuk backend dan database, serta GSAP untuk animasi UI yang halus. Desain dibuat responsif dan mudah digunakan, memastikan pengalaman pengguna yang aman dan nyaman.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:pC,title:"Dashboard (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code",description:"Dashboard ini menampilkan ringkasan data inventori secara interaktif, termasuk barang terlaris serta laporan pembelian dan penjualan selama setahun terakhir. Menggunakan Vue.js (Vite) untuk frontend, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau performa inventori dan membuat keputusan bisnis lebih mudah dan cepat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:mC,title:"Add Data (Website Inventori)",equipment:"Equipment: Vue.js (Vite), Laravel, MySQL, CSS, XAMPP, VS Code",description:"Fitur ini memungkinkan pengguna menambahkan data inventori baru, termasuk barang, jenis, satuan, ruangan, dan departemen. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk desain responsif. Fitur ini membantu pengelolaan inventori menjadi lebih terstruktur dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:_C,title:"Laporan Penjualan (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur laporan penjualan ini menampilkan data secara detail berdasarkan transaksi, barang, dan kasir. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna menganalisis penjualan dengan cepat dan akurat, mendukung pengambilan keputusan bisnis.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:gC,title:"Laporan Stock (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Laporan Stock ini menampilkan data inventori lengkap dari semua ruangan dan barang, termasuk laporan stock rendah. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini membantu pengguna memantau ketersediaan barang secara real-time dan mengambil keputusan pengelolaan inventori dengan lebih cepat dan akurat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:vC,title:"Log Data (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Log Data ini mencatat semua pergerakan barang, termasuk penerimaan, penjualan, dan pemesanan antar ruangan. Pengguna juga dapat mengekspor data ke format Excel untuk analisis lebih lanjut. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan yang responsif. Fitur ini memudahkan pemantauan inventori secara lengkap dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:xC,title:"Kirim Barang (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Kirim Barang memungkinkan pengguna memindahkan barang dari satu ruangan ke ruangan lain dengan mudah. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan keluar terlebih dahulu dari tabel stok. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini membantu pengelolaan inventori lebih terstruktur dan efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:SC,title:"Penerimaan Barang (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Penerimaan Barang digunakan untuk mencatat barang yang diterima dari distributor dan menambahkan stok ke gudang. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memastikan pencatatan stok gudang akurat dan memudahkan pengelolaan inventori secara efisien.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:MC,title:"Penjualan (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:"Fitur Penjualan digunakan untuk menjual barang kepada pelanggan dengan pengelolaan stok yang efisien. Backend menggunakan metode FIFO (First In, First Out) sehingga barang yang masuk lebih dulu akan dijual terlebih dahulu, dan harga tertinggi dari barang yang dijual diambil secara otomatis. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend dan database, serta CSS untuk tampilan responsif. Fitur ini memudahkan proses penjualan dan memastikan pengelolaan inventori tetap akurat.",githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]},{items:[{image:yC,title:"Order (Website Inventori)",equipment:"Equipment: Vue.js (Vite), CSS, Laravel, MySQL, XAMPP, VS Code",description:'Fitur Order Barang memungkinkan perpindahan barang antar ruangan dengan efisien. Terdapat dua tab: "List" untuk menampilkan ruangan yang mengajukan permintaan, dan "Request" untuk melihat ruangan tujuan pengiriman. Backend menggunakan metode FIFO (First In, First Out) untuk memastikan barang yang masuk lebih dulu akan dipindahkan terlebih dahulu. Menggunakan Vue.js (Vite) untuk frontend interaktif, Laravel dan MySQL untuk backend, serta CSS untuk tampilan responsif, fitur ini memudahkan pengelolaan inventori antar ruangan secara terstruktur dan akurat.',githubFrontend:"https://github.com/mrizqik29/inventori",githubBackend:"https://github.com/mrizqik29/backend"}]}]);return $s(()=>{Bo(()=>{const n=e.value.querySelectorAll(".website-item");Jt.from(n,{y:20,opacity:0,scale:.97,duration:.7,stagger:.08,ease:"power1.out",scrollTrigger:{trigger:e.value,start:"top 90%",toggleActions:"play none none none",once:!0}})})}),(n,r)=>(It(),kt("section",{class:"website",ref_key:"websiteSection",ref:e,id:"website"},[(It(!0),kt(Sn,null,zo(t.value,(s,o)=>(It(),kt("div",{class:"website-wrapper",key:o},[$e("div",bC,[(It(!0),kt(Sn,null,zo(s.items,(a,l)=>(It(),kt("div",{class:"website-item",key:l},[$e("img",{src:a.image,alt:a.title,class:Jc(["website-image",a.size]),loading:"eager",style:{"will-change":"transform, opacity"}},null,10,TC),$e("div",AC,[$e("h2",wC,To(a.title),1),$e("p",CC,To(a.equipment),1),$e("p",RC,To(a.description),1),a.website?(It(),kt("a",{key:0,href:a.website,target:"_blank",class:"btn"}," Kunjungi Website ",8,PC)):Pc("",!0),a.title.includes("Website Inventori")?(It(),kt("div",DC,[$e("a",{href:a.githubFrontend,target:"_blank",class:"btn",style:{"margin-right":"5px"}}," Code Front-end ",8,LC),$e("a",{href:a.githubBackend,target:"_blank",class:"btn"}," Code Back-end ",8,IC)])):Pc("",!0)])]))),128))])]))),128))],512))}},FC={__name:"App",setup(i){return(e,t)=>(It(),kt(Sn,null,[Mn(rC),Mn(fC),Mn(KM),Mn(Cy),Mn(UC),Mn(Gy)],64))}};wS(FC).mount("#app");
