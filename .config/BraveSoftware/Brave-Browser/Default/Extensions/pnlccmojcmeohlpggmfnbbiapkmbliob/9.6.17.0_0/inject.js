// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";!function(){
if("string"==typeof location.hostname&&location.hostname.endsWith&&(location.hostname.endsWith(".roboform.com")||location.hostname.endsWith(".roboform.eu")))return
;const a="xbQzEXtyFZg1pxGmqhXJvw",b=`${a}-1`,c=`${a}-2`;let d=!1;try{Object.defineProperty(navigator,"credentials",{
value:function(a){const h=null!=a?a:{get:async()=>null,create:async()=>null,preventSilentAccess:async()=>{},store:async()=>{
throw new Error("Not implemented")}},i=new Map;window.addEventListener(b,n);return{get:j,create:k,
preventSilentAccess:h.preventSilentAccess,store:h.store};async function j(a){var b,c;if(!d)return h.get(a);const i=a.publicKey
;if(!i)return h.get(a);const j={options:{mediation:a.mediation,publicKey:{
allowCredentials:null===(b=i.allowCredentials)||void 0===b?void 0:b.map((a=>({id:f(e(a.id)),type:a.type,transports:a.transports
}))),challenge:f(e(i.challenge)),extensions:i.extensions,rpId:i.rpId,timeout:i.timeout,userVerification:i.userVerification}},
origin:window.location.origin},k=await m({call:"get",params:j,callbackId:l()},a.signal);if(!k)return null
;const n=null===(c=k.result)||void 0===c?void 0:c.credential;if(!n)return h.get(a);return{id:n.id,rawId:g(n.rawId),type:n.type,
authenticatorAttachment:n.authenticatorAttachment,response:{clientDataJSON:g(n.response.clientDataJSON),
authenticatorData:g(n.response.authenticatorData),signature:g(n.response.signature),
userHandle:n.response.userHandle?g(n.response.userHandle):null},getClientExtensionResults:()=>n.clientExtensionResults,
isConditionalMediationAvailable:async()=>!0,isUserVerifyingPlatformAuthenticatorAvailable:async()=>!0}}async function k(a){
var b,c;if(!d)return h.create(a);const i=a.publicKey;if(!i)return h.create(a);const j={options:{publicKey:{
attestation:i.attestation,authenticatorSelection:i.authenticatorSelection,challenge:f(e(i.challenge)),
excludeCredentials:null===(b=i.excludeCredentials)||void 0===b?void 0:b.map((a=>({id:f(e(a.id)),transports:a.transports,
type:a.type}))),extensions:i.extensions,pubKeyCredParams:i.pubKeyCredParams.map((a=>({
alg:"string"==typeof a.alg?parseInt(a.alg):a.alg,type:a.type}))),rp:{name:i.rp.name,id:i.rp.id},timeout:i.timeout,user:{
name:i.user.name,displayName:i.user.displayName,id:f(e(i.user.id))}}},origin:window.location.origin},k=await m({call:"create",
params:j,callbackId:l()},a.signal);if(!k)return null;const n=null===(c=k.result)||void 0===c?void 0:c.credential
;if(!n)return h.create(a);return{id:n.id,rawId:g(n.rawId),type:n.type,authenticatorAttachment:n.authenticatorAttachment,
response:{clientDataJSON:g(n.response.clientDataJSON),attestationObject:g(n.response.attestationObject),
getTransports:()=>n.response.transports,getPublicKeyAlgorithm:()=>n.response.publicKeyAlgorithm,
getAuthenticatorData:()=>g(n.response.authenticatorData),
getPublicKey:()=>n.response.publicKeyDER?g(n.response.publicKeyDER):null},
getClientExtensionResults:()=>n.clientExtensionResults,isConditionalMediationAvailable:async()=>!0,
isUserVerifyingPlatformAuthenticatorAvailable:async()=>!0}}function l(){return Date.now().toString()}function m(a,b){
return new Promise(((d,e)=>{if(!a.callbackId)return d(null);const f=a.callbackId;i.set(f,{ok:a=>{h(),d(a)},error:a=>{h(),e(a)}
}),null==b||b.addEventListener("abort",g);try{j(a)}catch(k){return h(),void e(k)}return;function g(){h(),j({callbackId:f}),
e(new DOMException("The user aborted a request.","AbortError"))}function h(){null==b||b.removeEventListener("abort",g),
i.delete(f)}function j(a){window.dispatchEvent(new CustomEvent(c,{detail:JSON.stringify(a)}))}}))}function n(a){var b
;const c=a.detail;if(!c||"string"!=typeof c)return;const e=JSON.parse(c),f=null==e?void 0:e.callbackId;if(f){const a=i.get(f)
;a&&(e.error?a.error(new Error((g=e.error).message||g.description||"Unexpected error")):a.ok(e))
}else e.error?null===(b=e.disconnectIds)||void 0===b||b.reduce(((a,b)=>{const c=i.get(b);return c&&(i.delete(b),a.push(c.ok)),a
}),[]).forEach((a=>{try{a(null)}catch(g){}})):e.disable&&(d=!1);var g}}(navigator.credentials),writable:!0,configurable:!0}),
Object.defineProperty(window,"PublicKeyCredential",{value:()=>{},writable:!0,configurable:!0}),
Object.defineProperty(window.PublicKeyCredential,"isConditionalMediationAvailable",{value:()=>Promise.resolve(!0),writable:!0,
configurable:!0}),Object.defineProperty(window.PublicKeyCredential,"isUserVerifyingPlatformAuthenticatorAvailable",{
value:()=>Promise.resolve(!0),writable:!0,configurable:!0}),d=!0}catch(h){console.warn("RoboForm: cannot use passkeys: ",h)}
return;function e(a){return"buffer"in a?a.buffer:a}function f(a){const b=new Uint8Array(a),c=b.length;let d=""
;for(let e=0;e<c;e++)d+=String.fromCharCode(b[e]);return window.btoa(d).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}
function g(a){const b=(4-(a=a.replace(/-/g,"+").replace(/_/g,"/")).length%4)%4;a=a.padEnd(a.length+b,"=")
;const c=new Uint8Array(256),d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
;for(let n=0;n<64;n++)c[d.charCodeAt(n)]=n;let e=.75*a.length;const f=a.length;let g,h,i,j,k=0;a.endsWith("=")&&(e--,
"="===a[a.length-2]&&e--);const l=new ArrayBuffer(e),m=new Uint8Array(l);for(let n=0;n<f;n+=4)g=c[a.charCodeAt(n)],
h=c[a.charCodeAt(n+1)],i=c[a.charCodeAt(n+2)],j=c[a.charCodeAt(n+3)],m[k++]=g<<2|h>>4,m[k++]=(15&h)<<4|i>>2,m[k++]=(3&i)<<6|63&j
;return l}}(),window.addEventListener("ich0-xbQzEXtyFZg1pxGmqhXJvw",(a=>{const b=a.detail
;(null==b?void 0:b.event)&&window.addEventListener("ich1-xbQzEXtyFZg1pxGmqhXJvw",(a=>{var c,d;const e=a.relatedTarget
;if(e&&"click"===(null===(c=b.event)||void 0===c?void 0:c.type))console.log("=== dispatchEvent(click)"),
e.dispatchEvent(new MouseEvent(b.event.type,{bubbles:!0,cancelable:!0,button:0,
view:null===(d=e.ownerDocument)||void 0===d?void 0:d.defaultView}))}),{once:!0,capture:!0})}),{capture:!0}),function(){
const a=Element.prototype.attachShadow;let b=!1;const c=[];Object.defineProperty(Element.prototype,"attachShadow",{value:e,
configurable:!0,writable:!0}),Object.defineProperty(e,"toString",{value:()=>"{ [native code] }",configurable:!0,writable:!0})
;const d="xbQzEXtyFZg1pxGmqhXJvw-shadow-1";return void window.addEventListener("xbQzEXtyFZg1pxGmqhXJvw-shadow-0",(a=>{b=!0
;for(const b of c)window.dispatchEvent(new MouseEvent(d,{relatedTarget:b}));c.length=0}),{capture:!0,once:!0});function e(e){
const f=a.call(this,e);try{b?window.dispatchEvent(new MouseEvent(d,{relatedTarget:f})):c.push(f)}catch(g){}return f}}();