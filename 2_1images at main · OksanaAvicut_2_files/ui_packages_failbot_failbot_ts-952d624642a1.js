"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_failbot_failbot_ts"],{56176:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function a(){return r?.locale??"en-US"}function i(){return!!o().login}n.d(t,{JK:()=>a,M3:()=>i,_$:()=>o}),!function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},75028:(e,t,n)=>{n.d(t,{G:()=>o,K:()=>a});var r=n(47584);let o=r.XC?.readyState==="interactive"||r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.XC?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.XC?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.cg?.addEventListener("load",e)})},42445:(e,t,n)=>{n.d(t,{N7:()=>v});var r=n(36301),o=n(25339),a=n(24212);function i(e){return(0,a.q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}function c(e){return{type:e.name,value:e.message,stacktrace:i(e),catalogService:e.catalogService}}function u(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}var l=n(9080),s=n(47584),f=n(75632),d=n(95505);let m=!1,p=0,h=Date.now(),y=new Set(["AbortError","AuthSessionExpiredError","TypeError"]),g=new Set(["Failed to fetch","NetworkError when attempting to fetch resource.","Unable to perform this operation. Please try again later."]);function S(e){return!!e.name&&!!("AbortError"===e.name||y.has(e.name)&&g.has(e.message)||e.name.startsWith("ApiError")&&g.has(e.message))}function v(e,t={}){if((0,f.G7)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(O.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);w(E({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:i(n),catalogService:void 0},t));return}S(e)||w(E(c(e),t))}else S(e)||w(E(c(e),t))}async function w(e){if(!(!A&&!m&&p<10&&(0,o.TT)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>b.test(e.filename)||b.test(e.function))){m=!0;return}p++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function E(e,t={}){return Object.assign({error:e,sanitizedUrl:`${window.location.protocol}//${window.location.host}${function(){let e=u("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=u("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=u("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`||window.location.href,readyState:document.readyState,referrer:(0,d.dR)(),timeSinceLoad:Math.round(Date.now()-h),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.y)();return`anonymous-${t}`}()||void 0,actorId:document.head?.querySelector('meta[name="octolytics-actor-id"]')?.content,bundler:l.v,ui:!!document.querySelector('meta[name="ui"]'),release:document.head?.querySelector('meta[name="release"]')?.content},t)}let b=/(chrome|moz|safari)-extension:\/\//,A=!1;s.cg?.addEventListener("pageshow",()=>A=!1),s.cg?.addEventListener("pagehide",()=>A=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{v(e.data.error)});let O=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},75632:(e,t,n)=>{n.d(t,{G7:()=>u,XY:()=>l,fQ:()=>c});var r=n(5225),o=n(56176);function a(){return new Set((0,o._$)().featureFlags.map(e=>e.toLowerCase()))}let i=n(47584).X3||function(){try{return process?.env?.STORYBOOK==="true"}catch{return!1}}()?a:(0,r.A)(a);function c(){return Array.from(i())}function u(e){return i().has(e.toLowerCase())}let l={isFeatureEnabled:u}},9080:(e,t,n)=>{n.d(t,{k:()=>i,v:()=>c});var r=n(5225),o=n(47584);let a=(0,r.A)(function(){return o.XC?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),i=(0,r.A)(function(){return"enterprise"===a()}),c="webpack"},80688:(e,t,n)=>{n.d(t,{A:()=>i,D:()=>c});var r=n(47584),o=n(57516);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.cg,c=e=>e,u=e=>e){let l;try{if(!n)throw Error();l=n[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:s}=t;function f(e){t.sendCacheStats&&(0,o.i)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch{}}return{getItem:function(e,t=Date.now()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),f("SAFE_STORAGE_VALUE_EXPIRED"),null;return f("SAFE_STORAGE_VALUE_WITHIN_TTL"),c(n)}catch{return null}},setItem:function(e,n,r=Date.now()){try{if(l.setItem(e,u(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(s&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function c(e){return i(e,{throwQuotaErrorsOnSet:!1},r.cg,JSON.parse,JSON.stringify)}},32329:(e,t,n)=>{n.d(t,{Ai:()=>a,Gq:()=>r,SO:()=>o});let{getItem:r,setItem:o,removeItem:a}=(0,n(80688).A)("sessionStorage")},95505:(e,t,n)=>{n.d(t,{BW:()=>o,Ff:()=>m,HK:()=>v,JA:()=>C,LM:()=>p,Pv:()=>b,Vy:()=>d,ZW:()=>E,dR:()=>w,di:()=>h,fX:()=>A,gc:()=>O,k9:()=>S,my:()=>g,r7:()=>q,wG:()=>y,xT:()=>f});var r=n(32329);let o="reload",a="soft-nav:fail",i="soft-nav:fail-referrer",c="soft-nav:referrer",u="soft-nav:marker",l="soft-nav:react-app-name",s="soft-nav:latest-mechanism";function f(){(0,r.SO)(u,"0"),(0,r.Ai)(c),(0,r.Ai)(a),(0,r.Ai)(i),(0,r.Ai)(l),(0,r.Ai)(s)}function d(e){(0,r.SO)(u,e)}function m(){(0,r.SO)(u,"0")}function p(){let e=(0,r.Gq)(u);return e&&"0"!==e}function h(){return(0,r.Gq)(u)}function y(){return!!g()}function g(){return(0,r.Gq)(a)}function S(e){(0,r.SO)(a,e||o),(0,r.SO)(i,window.location.href)}function v(){(0,r.SO)(c,window.location.href)}function w(){return(0,r.Gq)(c)||document.referrer}function E(){let e=A();e?(0,r.SO)(l,e):(0,r.Ai)(l)}function b(){return(0,r.Gq)(l)}function A(){return document.querySelector('react-partial[partial-name="repos-overview"]')?"repos-overview":document.querySelector("react-app")?.getAttribute("app-name")}function O(){return!!document.querySelector("react-app")?.getAttribute("app-name")}function C(e){(0,r.SO)(s,e)}function q(){return(0,r.Gq)(s)}},47584:(e,t,n)=>{n.d(t,{KJ:()=>r.KJ,Kn:()=>o.Kn,X3:()=>r.X3,XC:()=>o.XC,cg:()=>o.cg,fV:()=>o.fV,g5:()=>r.g5});var r=n(25992),o=n(39833)},39833:(e,t,n)=>{n.d(t,{Kn:()=>i,XC:()=>o,cg:()=>a,fV:()=>c});let r="undefined"!=typeof FORCE_SERVER_ENV&&FORCE_SERVER_ENV,o="undefined"==typeof document||r?void 0:document,a="undefined"==typeof window||r?void 0:window,i="undefined"==typeof history||r?void 0:history,c="undefined"==typeof location||r?{pathname:"",origin:"",search:"",hash:"",href:""}:location},25992:(e,t,n)=>{n.d(t,{KJ:()=>a,X3:()=>o,g5:()=>i});var r=n(39833);let o=void 0===r.XC,a=!o;function i(){return!!o||!r.XC||!!(r.XC.querySelector('react-app[data-ssr="true"]')||r.XC.querySelector('react-partial[data-ssr="true"][partial-name="repos-overview"]'))}},57516:(e,t,n)=>{n.d(t,{X:()=>p,i:()=>s});var r=n(47584),o=n(75028),a=n(9080),i=n(75632),c=n(56176),u=n(70170);let l=[];function s(e,t=!1,n=.5){if(!r.X3&&!0!==(0,i.G7)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=Date.now()),e.loggedIn=(0,c.M3)(),e.staff=p(),e.bundler=a.v,Math.random()<n&&l.push(e),t?m():d()}}let f=null,d=(0,u.n)(async function(){await o.K,null==f&&(f=window.requestIdleCallback(m))},5e3);function m(){if(f=null,!l.length)return;let e=r.XC?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(l))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);l=[]}}function p(){return!!r.XC?.head?.querySelector('meta[name="user-staff"]')?.content}r.XC?.addEventListener("pagehide",m),r.XC?.addEventListener("visibilitychange",m)}}]);
//# sourceMappingURL=ui_packages_failbot_failbot_ts-44d59ff5bf39.js.map