// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[471],{260:function(){},63212:function(a,b,c){"use strict"
;var d=c(43246),e=(c(260),c(18540)),f=c(53707),g=c(66423),h=c(52965),i=c(5197),j=c(78440),k=c(13117);(0,j.fI)((async()=>{try{
await(0,d.r)((0,e.Me)(),(0,f.G5)(),(0,f.i0)(),(0,g.k)(),(0,h.c)(),(0,i.T)())}catch(a){(0,k.Rm)("!!! StartPage load error",a)}
})())},43246:function(a,b,c){"use strict";c.d(b,{r:function(){return q}})
;var d=c(47333),e=c(401),f=c(76259),g=c(95239),h=c(94061),i=c(70346),j=c(79997),k=c(21253),l=c(60954),m=c(78440),n=c(13113),o=c(69893),p=c(13117)
;async function q(a,b,c,q,r,s){const t=a,u=await t.Init(null),v=c,w=await(0,l.y)(t),x={initialized:!1,type:"local",
mode:"extension-v9",extensionMode:"use-native",status:"initial",rfVersion:[],platformOs:await b.GetPlatformOS(),
browserType:await b.GetBrowserType(),staging:!1,testRoboFormSetup:!1,showUsageInfo:!1,isBreachMonSupported:!1,
isPasswordAuditSupported:!1,isAccountSetupSupported:!1,isDesktopAppSetupWithAccountInfoFromExtensionSupported:!1,
isPasswordDetailsSupported:!1,isPassgenOnStartPageSupported:!1,isInAppPaymentDisabled:!1,isPaymentPageSupported:!0,
isSSOLoginSupported:!1,isUpdatePaymentPageAvailable:!0};t.onNotificationFromBackgroundScript.Add((function(a,...b){
"BackgroundReloaded"===a&&(0,m.fI)(z(null))}));let y=!1;return void await z(u);async function z(a){if(!y)try{y=!0;let c=0
;const d=10;for(;;){if(c++,x.initialized)return;let e,f=2;c>=3&&(f=5);try{e=await t.CallBackgroundScript("start-page-loaded",{
timeoutSec:f},null)}catch(b){if(c>=d)throw(0,p.Rm)(`!!! DoStartLocalStartPage: 'start-page-loaded' error, tried ${c} times`,b),b
;let a=500;(0,o.n4)(b)&&b.message.indexOf("Receiving end does not exist")>=0&&(a=500),(0,o.r5)(b,o.ut)&&(c=0,a=0),(0,
o.r5)(b,o.Un)&&(a=0),await(0,m.xy)(a);continue}return void await A(e,a)}}finally{y=!1}}async function A(b,c){var l,m,o,u,y,z,A,B
;if(x.initialized)return;if("object"==typeof b);else{if("string"!=typeof b)return void(0,
p.Rm)("!!! RF Start Page initialization failed: wrong params");b=JSON.parse(b)}x.initialized=!0,x.mode="extension-v9",
x.extensionMode=b.extensionMode,x.isBreachMonSupported=null!==(l=b.isBreachMonSupported)&&void 0!==l&&l,
x.isPasswordAuditSupported=null!==(m=b.isPasswordAuditSupported)&&void 0!==m&&m,
x.isAccountSetupSupported=null!==(o=b.isAccountSetupSupported)&&void 0!==o&&o,
x.isDesktopAppSetupWithAccountInfoFromExtensionSupported=null!==(u=b.isDesktopAppSetupSupported)&&void 0!==u&&u,
x.isPasswordDetailsSupported=null!==(y=b.isPasswordDetailsSupported)&&void 0!==y&&y,
x.isPassgenOnStartPageSupported=null!==(z=b.isPassgenOnStartPageSupported)&&void 0!==z&&z,
x.isInAppPaymentDisabled=null!==(A=b.isInAppPaymentDisabled)&&void 0!==A&&A,
x.isSSOLoginSupported=null!==(B=b.isSSOLoginSupported)&&void 0!==B&&B,x.isUpdatePaymentPageAvailable;let C=null,D=null
;if(x.isBreachMonSupported){const b=(0,i.v)(a);await b.Init();const c=(0,k.o)();await c.Init(b,w.data),C=c}
x.isPasswordAuditSupported&&(D=(0,j.N)(a),await D.Init());let E=()=>null;let F=()=>null;x.isSSOLoginSupported&&(E=()=>(0,
g.BO)(a),F=()=>(0,h.O9)(a));const G=t.storage,H=t.storage,I=(0,n._V)((0,n.R2)(location.hash)),J=!(0,n.a8)(I,"admin-center")
;await(0,e.O)(x,a,w,w.commands,C,D,E,(()=>null),F,(()=>null),null!=c?c:null,J,H,G,f.g,(async()=>{
const{StartPageUrl:b}=await a.storage.Get({StartPageUrl:d.xC});return null!=b?b:""}),null,null,v,q,r,s)}}},
57724:function(a,b,c){"use strict";c(87450),c(31173);var d=c(79441),e=(c(18540),c(40371)),f=(c(69893),c(4153)),g=(c(78440),
c(73863),c(13117));let h="",i="",j=1;!function(){try{Object.defineProperty(window,d.ti,{configurable:!1,enumerable:!1,
writable:!1,value:function(a){h=a.secret,i=a.domEventName,j=a.version?a.version:1}})}catch(a){(0,
g.Rm)("!!! Cannot create WebPage connection function"),Object.defineProperty(window,d.K2,{configurable:!1,enumerable:!1,
writable:!1,value:!0})}}();(0,f.y8)(),(0,e.C1)(),(0,e.C1)()},20855:function(a,b,c){"use strict";c.d(b,{EE:function(){return r},
gI:function(){return s},kq:function(){return q}})
;var d=c(54811),e=c(4234),f=c(45638),g=c(12131),h=c(85877),i=c(88262),j=c(78440),k=c(40371),l=c(95399),m=c(69893),n=c(40868),o=c(4153),p=c(13113)
;c(13117);function q(a){const b=a;let c=null,h=null,i=null,n=null,q=null,r=!1,s=!0,t=!1,u={dbTimeUtcSecs:null,
lastUpdatedTimeUtcSecs:null,userDataBreachesCount:null,inProcess:!1};const v=new Map;let w=new Set;const x=(0,j.tG)(),y=(0,
j.Jb)((async function(a){if(c)try{const b=await c.GetBreachMonitoringEmails(a),d=[]
;for(const a of b)"verified"===a.status&&a.email&&d.push(a.email);const e=new Set(d);(0,o.cD)(w,e)||(w=e,
z.onMonitoredEmailsUpdated.CallAllSync())}catch(b){if((0,m.au)(b),(0,m.r5)(b,m.rS))throw b}}),864e5,864e5),z={
Init:async function(a,b,d,e,f){await A(),h=a,c=b,i=d,n=e,q=f,r=!0,s=!0},UnInit:A,SetEnabled:function(a,b,c){a?s&&!c||(s=!0,
x.Start(G)):s&&(s=!1,x.Cancel());b?t&&!c||(t=!0,y.Start(200)):t&&(t=!1,y.Cancel())},
GetCachedUserDataItemBreaches:async function(a,b){if(!n||!s)return null;const c=await n.GetDataItem(a,4,null,b),d=(0,
e.hF)(a),f=I(c,d);if((0,o.T4)(f))return null;return async function(a,b,c){let d=[],e=!0;for(const f of a){const a=await B(f,b,c)
;a&&(e=!1,d=[...d,...a])}if(e)return null;return d}(f,a,b)},GetCachedUserDataBreaches:B,
GetAllCachedUserDataItemsBreaches:async function(a){if(!s)return[];const b=new Map
;for(const d of v.values())for(const[a,c]of d){const d=b.get(a);d?d.splice(d.length,0,...c):b.set(a,[...c])}const c=[]
;for(const[d,e]of b)c.push({m_path:d,m_info:e});return c},GetUpdateUserDataItemBreaches:C,GetUpdateUserDataBreaches:D,
StartUpdate:function(){if(!s)return;x.Start(G),t&&y.Start(200)},StopUpdate:async function(){await x.Stop(),await y.Stop()},
GetUserDataBreachesStatus:async function(){return u},onUserDataBreachesUpdated:(0,k.dU)(),onMonitoredEmailsUpdated:(0,k.dU)()}
;return z;async function A(){r&&(await x.Stop((0,m.ZU)(m.kd,"UnInit")),await y.Stop((0,m.ZU)(m.kd,"UnInit")),r=!1,q=null,h=null,
c=null,i=null,n=null,s=!0,t=!1,u={dbTimeUtcSecs:null,lastUpdatedTimeUtcSecs:null,userDataBreachesCount:null,inProcess:!1},
v.clear(),w.clear())}async function B(a,b,c){if(!i||!s)return null;const d=await i.GetUserDataBreaches(a,c);if(!d)return null
;const e=await E(d,a,c);return b&&await J(a,b,e),e}async function C(a,b){if(!n||!i||!h)return null;if(!s)return null
;const c=I(await n.GetDataItem(a,4,null,b),(0,e.hF)(a));return c?async function(a,b,c){let d=!1,e=[],f=!0;for(const g of a){
const a=await D(g,b,c);a&&(f=!1,a.m_updated&&(d=!0),e=[...e,...a.m_breaches])}if(f)return null;return{m_updated:d,m_breaches:e}
}(c,a,b):null}async function D(a,b,c){if(!n||!i||!h)return null;if(!s)return null;let d=null
;const e=a.forceUpdate?null:await i.GetUserDataBreaches(a,c);if(e){const f=await E(e,a,c);if(!h.IsInitialized())return{
m_updated:!1,m_breaches:f};if(d=await h.GetDataBaseTimeUtcSecs(c),!d)return b&&await J(a,b,f),{m_updated:!1,m_breaches:f}
;if(!e.some((a=>a.m_db_time_utc_secs!==d)))return b&&await J(a,b,f),{m_updated:!1,m_breaches:f}}
const f=await h.GetUserDataBreaches(a,c);if(null===f)return null;const g=await E(f,a,c)
;return d||(d=await h.GetDataBaseTimeUtcSecs(c),d)?(await i.SetUserDataBreachesInfo(a,f,d,c),b&&await J(a,b,g),{m_updated:!0,
m_breaches:g}):{m_updated:!0,m_breaches:g}}async function E(a,b,c){const d=[]
;for(const e of a)if(0!==e.m_type)if(b.email&&b.webSiteUrl&&1===e.m_source){if(q){const a=await q.GetDomainMatch(c)
;F(b.webSiteUrl,e.m_domain,a)&&d.push(e)}}else d.push(e);return d}function F(a,b,c){if(!b)return!1;for(const d of a){
if(!d)continue;const a=(0,p.c9)(d),e=c.IsMatch(a,b);if(e)return e}return!1}async function G(a){for(await(0,
j.Jc)(60*(5+b.GenerateRandomUInt(15)),a);;){try{await H(a)}catch(c){if((0,m.r5)(c,m.kd))break}await(0,j.Jc)(86400,a)}}
async function H(a){if(!n)return;u=Object.assign(Object.assign({},u),{inProcess:!0});let b=0,c=0;const e=new Set;try{await(0,
d.s_)(n,(async d=>{if(!(1===d.type&&!(d.readOnly||d.hidePasswords))&&5!==d.type)return;let f;try{f=await C(d.path,a)}catch(h){
if((0,g.tM)(h,10)||(0,m.r5)(h,m.Un)||(0,m.r5)(h,m.kd))throw h;return!1}if(!f)return!0;0!==f.m_breaches.length&&(e.add(d.path),
b++),f.m_updated&&(c++,c%10==0&&await(0,j.Jc)(30,a)),a&&await a.YieldToUI(30)}),{deep:!0,parts:1},a);const f=new Set
;for(const[a,b]of v){for(const a of b.keys())e.has(a)||(b.delete(a),f.has(a)||(f.add(a),
z.onUserDataBreachesUpdated.CallAllSync(a,[])));0===b.size&&v.delete(a)}u=Object.assign(Object.assign({},u),{
lastUpdatedTimeUtcSecs:(0,l.t2)()})}finally{u=Object.assign(Object.assign({},u),{inProcess:!1,userDataBreachesCount:b})}}
function I(a,b){switch(b){case 1:{const b=a,c=(0,f.G)(b);let d=null;return c.password&&(d={password:c.password}),
c.login&&w.has(c.login)&&t&&(d=Object.assign(Object.assign({},d),{email:c.login}),
b.m_goto_url&&(d=Object.assign(Object.assign({},d),{webSiteUrl:[b.m_goto_url]})),
b.m_match_url&&(d=Object.assign(Object.assign({},d),{webSiteUrl:d.webSiteUrl?[...d.webSiteUrl,b.m_match_url]:[b.m_match_url]
}))),d?[d]:null}case 5:{if(!t)return null;const b=function(a){var b,c
;const d=null===(b=a.m_groups.find((a=>"Person"===a.m_name)))||void 0===b?void 0:b.m_instances;if(!d)return null;const e=[]
;for(const f of d){const a=null===(c=f.m_fields.find((a=>"Email"===a.m_name)))||void 0===c?void 0:c.m_value;a&&e.push(a)}
if(e.length>0)return e;return null}(a);if(!b)return null;const c=[];for(const a of b)w.has(a)&&c.push({email:a})
;return 0===c.length?null:c}default:return null}}async function J(a,b,c){let d=!0;const e=function(a){const b=[]
;return a.password&&b.push(a.password),a.email&&b.push(a.email),b}(a);for(const g of e){const a=v.get(g);if(a)if(a.has(b)){
const e=a.get(b);e&&f(e,c)&&(d=!1),a.set(b,c)}else a.set(b,c);else v.set(g,new Map([[b,c]]))}
return void(d&&(z.onUserDataBreachesUpdated.HaveHandlers(),z.onUserDataBreachesUpdated.CallAllSync(b,c)));function f(a,b){
if(a.length!==b.length)return!1;for(let c=0;c<a.length;c++){const d=a[c],e=b[c]
;if(d.m_type!==e.m_type||d.m_source!==e.m_source||d.m_domain!==e.m_domain)return!1}return!0}}}function r(){let a=null,b=!1
;const c="appdata:///bm/hibp/";let d=!1;return{Init:async function(c){await e(),a=c,b=!0},UnInit:e,
GetUserDataBreaches:async function(b,c){if(!a)return null;const d=[];try{if(b.password){
const e=await f(b.password),g=await a.GetFile(e,"utf16",c),h=JSON.parse(g);if(h.c&&h.d){const a={m_db_time_utc_secs:h.d,
m_checked_time_utc_secs:h.c,m_type:h.b?1:0,m_source:0};d.push(a)}}if(b.email){
const e=await g(b.email),f=await a.GetFile(e,"utf16",c),h=JSON.parse(f);for(const a of h)if(a.c&&a.d){1===a.b&&(a.b=14)
;const b={m_db_time_utc_secs:a.d,m_checked_time_utc_secs:a.c,m_type:a.b?i(a.b):0,m_source:1,m_domain:a.w};d.push(b)}}return d
}catch(e){return null}},SetUserDataBreachesInfo:async function(b,e,h,i){if(!a)return;if(!d){try{
b.password&&await a.DeleteFolder("appdata:///bm/hipb",i)}catch(j){if(!(0,m.r5)(j,m.Y$))throw j}d=!0}if(b.password){let d=!1
;if(0!==e.length){for(const c of e)if(0===c.m_source)switch(c.m_type){case 0:case 1:{const e={d:c.m_db_time_utc_secs,
c:c.m_checked_time_utc_secs};1===c.m_type&&(e.b=1);const g=JSON.stringify(e),h=await f(b.password);await a.PutFile(h,g,i),d=!0}}
}else{const c={d:h,c:(0,l.t2)()},e=JSON.stringify(c),g=await f(b.password);await a.PutFile(g,e,i),d=!0}
d&&await a.PutFile(c+"time",`${h}`,i)}if(b.email)if(0!==e.length){const c=[];for(const a of e)if(1===a.m_source){const b={
d:a.m_db_time_utc_secs,c:a.m_checked_time_utc_secs};0!==a.m_type&&(b.b=a.m_type),a.m_domain&&(b.w=a.m_domain),c.push(b)}
const d=await g(b.email);await a.PutFile(d,JSON.stringify(c),i)}else{const c={d:h,c:(0,l.t2)()
},d=JSON.stringify(c),e=await g(b.email);await a.PutFile(e,d,i)}}};async function e(){b&&(b=!1,a=null)}async function f(a){
const b=await(0,n.zN)(a),d=await(0,h.uu)(b),e=await(0,n.n1)(d,!0);return c+e}async function g(a){const b=await(0,
n.zN)(a),c=await(0,h.uu)(b);return"appdata:///bm/hibp/emails/"+(0,n.iN)(c,!0)}function i(a){switch(a){case 0:return 0;case 1:
return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 8;case 9:
return 9;case 10:return 10;case 11:return 11;case 12:return 12;case 13:return 13;default:return 14}}}function s(a,b){
const c=b,d=new Map;let e=null,f=null,g=null,k=null,p=null,q=null,r=null;return{Init:s,SetServerAddress:async function(a){
if(a===e)return;s(),e=a},IsInitialized:function(){return!!e},GetDataBaseTimeUtcSecs:u,GetUserDataBreaches:async function(b,d){
var e,f,g,k;const o=await u(d);if(!o)return null;const p=(0,l.t2)(),q=[],r=await v(d)
;if(!(null==r?void 0:r.breachMonUrl))return null;const s=b.password;if(s)try{const a=await(0,n.zN)(s),b=await(0,
h.R)(a),e=b.substr(0,5),f=await(0,j.Bn)((a=>c.SendHttpRequest({url:r.breachMonUrl+"?p="+e,method:"GET",sendHeaders:{accept:"*/*"
},sendCookies:!1,receiveBodyType:"arraybuffer"},a)),(a=>(0,i.dW)(a)&&503===a.httpResponse.status),2e3,2,3,d);if(!f.ok)throw(0,
m.ZU)(m.FN,`Cannot get password breaches: ${f.status||0}, ${f.statusText||""}`);const g=await async function(a){
if("arraybuffer"!==a.bodyAsValueType)throw(0,m.ZU)(m.FN,"Cannot parse server response: not a binary data");const b=a.bodyAsValue
;if(!b)throw(0,m.ZU)(m.FN,"Cannot parse server response: not a binary data");return new Uint8Array(b)}(f),k=(0,
n.Rz)(b.substr(4)),l=k.length,t=g.length-l;for(let c=0;c<=t;c+=l)if(!(15&(k[0]^g[c]))&&k.every(((a,b)=>0===b||a===g[c+b]))){
q.push({m_type:1,m_source:0,m_db_time_utc_secs:o,m_checked_time_utc_secs:p});break}0===q.length&&q.push({m_type:0,m_source:0,
m_db_time_utc_secs:o,m_checked_time_utc_secs:p})}catch(y){(0,m.au)(y)}if(b.email)try{const a=b.email,c=await(0,
j.Bn)((b=>w(a,b)),(a=>(0,i.dW)(a)&&(503===a.httpResponse.status||401===a.httpResponse.status)),2e3,2,3,d)
;if(0===c.length)q.push({m_type:0,m_source:1,m_db_time_utc_secs:o,m_checked_time_utc_secs:p});else{
const b=await async function(a,b,c){return(0,j._G)({actions:b.filter((a=>{var b,c
;return(null===(b=a.breachId)||void 0===b?void 0:b.name)&&(null===(c=a.breachId)||void 0===c?void 0:c.source)})).map((b=>c=>{
var e,f,g,h;return d({name:null!==(f=null===(e=b.breachId)||void 0===e?void 0:e.name)&&void 0!==f?f:"",
source:null!==(h=null===(g=b.breachId)||void 0===g?void 0:g.source)&&void 0!==h?h:"",email:a},c)}))},c);async function d(a,b){
return(0,j.Bn)((b=>x(a,b)),(a=>(0,i.dW)(a)&&(503===a.httpResponse.status||401===a.httpResponse.status)),2e3,2,3,b)}}(a,c,d)
;for(const a of b){const b=null===(f=null===(e=c.find((b=>{var c,d
;return(null===(c=b.breachId)||void 0===c?void 0:c.name)===(null===(d=a.breachId)||void 0===d?void 0:d.name)
})))||void 0===e?void 0:e.options)||void 0===f?void 0:f.isResolved,d=null===(g=a.categorizedLeaks)||void 0===g?void 0:g.find((a=>"critical"===a.category))
;null===(k=null==d?void 0:d.leaks)||void 0===k||k.forEach((c=>{const d=t.get(c);if(d){const c={m_db_time_utc_secs:o,
m_checked_time_utc_secs:p,m_source:1,m_type:b?0:d,m_domain:a.domain};q.push(c)}}))}}}catch(y){(0,
i.dW)(y)&&404===y.httpResponse.status&&a&&await a.DisableEmailBreachMonService(),(0,m.au)(y)}return q},GetEtcJson:v,
GetBreachList:w,GetBreach:x,SetBreachOptions:async function(a,c,e){try{const d=await v(e)
;if(!(null==d?void 0:d.breachMonUrl))throw(0,m.ZU)(m.FN,"Cannot get breach service url")
;const f=await y(c,e),g=await b.SendHttpRequest({url:`${d.breachMonUrl}/set-breach-options`,method:"POST",sendHeaders:{
Authorization:`Bearer ${null==f?void 0:f.token}`},sendBody:JSON.stringify(a),sendCookies:!1},e);if(!g.ok)throw(0,
m.ZU)(m.FN,`Cannot set monitoring email breach options: ${g.status||0}, ${g.statusText||""}`)}catch(f){throw(0,
i.dW)(f)&&401===f.httpResponse.status&&d.delete(c),f}}};function s(){e=null,f=null,g=null,p=null,q=null,k&&(k.Cancel(),k=null),
r&&(r.Cancel(),r=null)}async function u(a){
if(!e)throw(0,m.ZU)(m.V2,"Cannot connect to RFO server: no server address is specified");if(q&&(0,l.t2)()<q)return p
;const b=await v(a);if(!(null==b?void 0:b.breachMonUrl))return null;if(!r){const a=b.breachMonUrl;r=(0,j.YZ)({
action:b=>async function(a,b){const d=await c.SendHttpRequest({url:a+"?time=",method:"GET",sendHeaders:{accept:"*/*"},
sendCookies:!1,receiveBodyType:"text"},b)
;if(!d.ok)throw(0,m.ZU)(m.FN,`Cannot get breaches database timestamp: ${d.status||0}, ${d.statusText||""}`)
;if("text"!==d.bodyAsValueType||void 0===d.bodyAsText)throw(0,m.ZU)(m.FN,"Cannot parse server response: not a text")
;const e=parseInt(d.bodyAsText)
;if(!d.bodyAsText||isNaN(e))throw(0,m.ZU)(m.FN,"Cannot get breaches database timestamp: cannot parse server response");return e
}(a,b)})}const d=r;let f=null,g=180;try{f=await d.Execute(a),g=3600}finally{r===d&&(p=f,q=(0,l.t2)()+g,r=null)}return f}
async function v(a){if(!e)throw(0,m.ZU)(m.V2,"Cannot connect to RFO server: no server address is specified");if(g&&(0,
l.t2)()<g)return f;const b=f;if(!k){const a=e;k=(0,j.YZ)({action:b=>async function(a,b){var d,e
;const f=await c.SendHttpRequest({url:a+"/etc",method:"GET",sendHeaders:{accept:"*/*"},sendCookies:!1,receiveBodyType:"json"},b)
;if(!f.ok)throw(0,
m.ZU)(m.FN,`Cannot get breaches database address: ${null!==(d=f.status)&&void 0!==d?d:0}, ${null!==(e=f.statusText)&&void 0!==e?e:""}`)
;if("json"!==f.bodyAsValueType||"object"!=typeof f.bodyAsValue)throw(0,
m.ZU)(m.FN,"Cannot get breaches database address: cannot parse server response");return f.bodyAsValue}(a,b)})}const d=k
;let h=null,i=180;try{h=await d.Execute(a),i=3600}finally{k===d&&(f=h,g=(0,l.t2)()+i,(0,o.XM)(h,b)||(p=null,q=null,r=null),
k=null)}return h}async function w(a,c){try{const d=await v(c);if(!(null==d?void 0:d.breachMonUrl))throw(0,
m.ZU)(m.FN,"Cannot get breach service url");const e=await y(a,c);let f
;if(f=(null==e?void 0:e.breachListUrl)?await b.SendHttpRequest({url:`${e.breachListUrl}`,method:"GET",receiveBodyType:"json",
sendHeaders:{Authorization:`Bearer ${null==e?void 0:e.token}`},sendCookies:!1},c):await b.SendHttpRequest({
url:`${d.breachMonUrl}/get-breach-list?t=${null==e?void 0:e.token}`,method:"GET",receiveBodyType:"json",sendCookies:!1},c),
!f.ok)throw(0,m.ZU)(m.FN,`Cannot get monitoring email breach list: ${f.status||0}, ${f.statusText||""}`)
;if("json"!==f.bodyAsValueType)throw(0,m.ZU)(m.FN,`Cannot parse server response: wrong content type [${f.bodyAsValueType||""}]`)
;return f.bodyAsValue.breachIds||[]}catch(e){throw(0,i.dW)(e)&&401===e.httpResponse.status&&d.delete(a),e}}
async function x(a,c){try{const d=await v(c);if(!(null==d?void 0:d.breachMonUrl))throw(0,
m.ZU)(m.FN,"Cannot get breach service url");const e=d.breachMonUrl,f=await y(a.email,c),g=await b.SendHttpRequest({
url:`${e}/get-breach?s=${a.source}&n=${a.name}`,method:"GET",sendHeaders:{Authorization:`Bearer ${null==f?void 0:f.token}`},
receiveBodyType:"json",sendCookies:!1},c)
;if(!g.ok)throw(0,m.ZU)(m.FN,`Cannot get email breach: ${g.status||0}, ${g.statusText||""}`)
;if("json"!==g.bodyAsValueType)throw(0,m.ZU)(m.FN,`Cannot parse server response: wrong content type [${g.bodyAsValueType||""}]`)
;return g.bodyAsValue}catch(e){throw(0,i.dW)(e)&&401===e.httpResponse.status&&d.delete(a.email),e}}async function y(b,c){
if(!a)return null;let e=d.get(b);if(e)return e;try{e=await a.GetBreachMonitoringEmailAccessToken(b,c)}catch(f){
return d.delete(b),null}return d.set(b,e),e}}
const t=new Map([["Passwords",14],["Password hints",2],["Historical passwords",3],["Social security numbers",7],["Credit card CVV",8],["Credit cards",8],["Bank account numbers",10],["Auth tokens",11],["PINs",12],["Security questions and answers",13]])
},60759:function(a,b,c){"use strict";c.d(b,{r:function(){return f}});var d=c(20855),e=c(67793);function f(a){const b=new Set
;return{IsPasswordCompromised:async function(c,f){if(b.has(c))return!0;const g=(0,d.gI)(null,a),h=e.s8
;await g.SetServerAddress(h);const i=await g.GetUserDataBreaches({password:c},f);let j=!1
;i&&i.length>0&&(j=i.some((a=>1===a.m_type)));j&&b.add(c);return j}}}},85e3:function(a,b,c){"use strict";c.d(b,{v:function(){
return v}})
;var d=c(65852),e=c(11834),f=c(41107),g=c(63956),h=c(32105),i=c(30045),j=c(55674),k=c(78949),l=c(62806),m=c(98266),n=c(21176),o=c(78440),p=c(88262),q=c(95399),r=c(4153),s=c(69893),t=(c(13117),
c(97514)),u=c(91764)._;function v(a,b){
const c=b,v=b.passwordGenerator,w=a.m_rf_api,x=a.m_localization,y=a.m_rf_manager,z=w.settings,A=w.options,B=w.passwordsHistory,C=a.m_http,D=a.m_rng,E=a.m_view_api,F=a.m_clipboard_cleaner,G=x.LocalizeString
;let H=null,I=null,J=null,K=null,L=null,M=null,N=null,O=null,P=null,Q=null,R=null;const S=new Map;let T=null,U=null;const V=1e3
;let W=!1,X=!1,Y=!0,Z=null,aa=null,ab=null;const ac=(0,o.tG)();let ad,ae="",af="",ag="",ah=""
;["password-generator-random-password","password-generator-passphrase"].forEach((a=>{S.set(a,function(a){switch(a){
case"password-generator-random-password":{const a=u("div",{className:"selector-item",onclick:ak},u("span",{className:"title"
},(0,g.LX)(G("PassGen_RandomPass"),"")));return v.orderSelector.appendChild(a),a}case"password-generator-passphrase":{
const a=u("div",{className:"selector-item",onclick:al},u("span",{className:"title"},(0,g.LX)(G("PassGen_Passphrase"),"")))
;return v.orderSelector.appendChild(a),a}}}(a))}));return{Activate:function(){if(W)return;W=!0,(0,g.l5)(c.files),(0,
g.l5)(v.main),az(),T||(I=(0,o.YZ)({action:aj}),(0,o.fI)(I.Execute(null)))},Deactivate:function(){if(!W)return;W=!1,T=null,(0,
g.SE)(v.main),Q&&R&&(v.main.removeChild(Q),v.main.removeChild(R))},UpdateView:function(a){a&&(X=!1);if(!W)return
;if(y.IsEditorShown())return;if(y.IsSearchResultShown())return;if(X)return;X=!0},Invalidate:function(){X=!1},
IsStillActual:function(){return W},GetIsStillActual:function(){return function(){return W}}};async function ai(){Q=function(){
const a=u("div",{className:"separator rf-progress"},u("div",{className:"rf-progress-runner hidden"}));return ad=(0,d.ZP)(a),a
}(),R=await async function(){ae=await G("PassAud_PwdStrengthStrong"),af=await G("PassAud_PwdStrengthGood"),
ag=await G("PassAud_PwdStrengthMedium"),ah=await G("PassAud_PwdStrengthWeak");const a=u("section",{
className:"rf-password-generator-container"},K=u("div",{className:"rf-password-view-and-actions","data-score":"none"},u("div",{
className:"rf-password-view-and-generate"},L=u("span",{className:"rf-generated-password"}),M=u("div",{
className:"rf-generate-password-button",onclick:an,title:await G("PassGen_Generate_Tip")})),u("div",{
className:"rf-password-view-and-actions-separator"}),u("div",{className:"rf-password-score-and-copy"},u("div",{
className:"rf-password-score"},u("div",{className:"rf-password-score-image"}),N=u("span",{className:"rf-password-score-value"
})),O=u("div",{className:"rf-copy-password-button",onclick:ap,title:await G("PassGen_Copy_Tip")
},await G("StartPage_Cmd_CopyContent")))),P=u("div",{className:"rf-password-generator-settings"}));return a}(),
v.main.append(Q,R),ad.StartIfNotStarted()}async function aj(a){await ai(),Z=await async function(){Z||(Z=(0,k.v5)(await(0,
p.$)(`pwd-dict.json?vvv=${(0,t.RD)()}`,null,C)));return Z}(),aa=await async function(){if(aa)return aa;return aa=await(0,
p.$)(`pwd-gen-words.json?vvv=${(0,t.RD)()}`,null,C),aa}();const b=[...await B.GetHistory(a)]
;Y=b.length>0?0===b[0].m_generator_type:await z.GetValue("PassGenIsWord",!0),await z.SetValue("PassGenIsWord",Y),Y?ak():al()}
function ak(){
Y&&T||(T="password-generator-random-password",(0,g.D$)((()=>am("password-generator-random-password")),az,V,(()=>ad.StartIfNotStarted)))
}function al(){
!Y&&T||(T="password-generator-passphrase",(0,g.D$)((()=>am("password-generator-passphrase")),az,V,(()=>ad.StartIfNotStarted)))}
async function am(a){const b=S.get(a);S.forEach((a=>a.classList.remove("active"))),(0,r.TT)(b).classList.add("active"),
Y="password-generator-random-password"===a,(0,g.rK)((0,r.TT)(P)),U=function(a,b,c,d,k,p,t,v){
const w=a,x=d,y=k,z=p,A=t,B=v,C=b.LocalizeString
;let D=c?(0,l.H5)():(0,l.CZ)(),E=null,F=null,G=null,H=null,I=null,J=null,K=null,L=null,M=null,N=null,O="";const P={Create:Q,
OnAfterShow:R,OnBeforeHide:S,Focus:T,Dispose:U,SetValues:V,GetValues:W,CorrectInputValues:X};return P;async function Q(){
const a="chars-number-input-startpage",b="chars-number-label-startpage";O=await C("PassGen_BitStrength");const d=c?u("div",{
className:"password-generator-settings-container"},u("div",{className:"password-generator-settings-list"},u("div",{
className:"chars-number"},u("label",{className:"setting-name-text setting-name-text-chars",
title:await C("PassGen_CharNumber_Tip"),id:b,htmlFor:a},await C("PassGen_CharNumber_Text")),E=u(h.x8,{className:"number-input",
min:1,max:512,step:1,value:D.m_length,onchange:Y,id:a,labeledById:b})),u("div",{className:"toggle-option"},u("span",{
className:"setting-name-text"},await C("PassGen_Number_Text")),F=u(h.Ig,{checked:D.m_include_digits,onchange:Z})),u("div",{
className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_Upper_Text")),G=u(h.Ig,{
checked:D.m_include_upper_case_chars,onchange:aa})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"
},await C("PassGen_Lower_Text")),H=u(h.Ig,{checked:D.m_include_lower_case_chars,onchange:ab})),u("div",{
className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_UseHexChars")),K=u(h.Ig,{
checked:D.m_hex_digits_only,onchange:ai})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"
},await C("PassGen_ExcludeSimilar_Text")),L=u(h.Ig,{checked:D.m_exclude_similar_chars,onchange:ah})),u("div",{
className:"toggle-option toggle-option-with-input",title:await C("PassGen_UseSpecial_Tip")},u("div",{className:"input-wrapper"
},u("span",{className:"setting-name-text"},await C("PassGen_Special_Text")),J=u("input",{type:"text",maxLength:30,
className:"input chars-input-identity",value:D.m_specific_chars||j.OZ,oninput:ad,onpaste:ae})),I=u(h.Ig,{
checked:D.m_include_specific_chars,onchange:ac}))),u("div",{className:"password-generator-restore-and-history"},u("a",{
className:"restore-link flat-link",onclick:aj},await C("PassGen_RestoreDefaults_Text")),M=u("div",{
className:"password-generator-history-button disabled",onclick:an},await C("PassGen_ShowHistory"))),N=u("div",{
className:"password-generator-bitstrength"})):u("div",{className:"password-generator-settings-container"},u("div",{
className:"password-generator-settings-list"},u("div",{className:"chars-number"},u("label",{
className:"setting-name-text setting-name-text-chars",title:await C("PassGen_WordsNumber_Tip"),id:b,htmlFor:a
},await C("PassGen_WordsNumber_Text")),E=u(h.x8,{className:"number-input",min:2,max:8,step:1,value:D.m_length,onchange:Y,id:a,
labeledById:b})),u("div",{className:"toggle-option toggle-option-with-input",title:await C("PassGen_UseDelim_Tip")},u("div",{
className:"input-wrapper"},u("span",{className:"setting-name-text"},await C("PassGen_WordSeparator")),J=u("input",{type:"text",
maxLength:1,className:"input chars-input-identity",value:D.m_specific_chars||j.lt,onpaste:ae,onfocus:af,onkeydown:ag
})),I=u(h.Ig,{checked:D.m_include_specific_chars,onchange:ac})),u("div",{className:"toggle-option"},u("span",{
className:"setting-name-text"},await C("PassGen_Capitalize_Text")),G=u(h.Ig,{checked:D.m_include_upper_case_chars,onchange:aa
})),u("div",{className:"toggle-option"},u("span",{className:"setting-name-text"},await C("PassGen_AddNumber")),F=u(h.Ig,{
checked:D.m_include_digits,onchange:Z}))),u("div",{className:"password-generator-restore-and-history"},u("a",{
className:"restore-link flat-link",onclick:aj},await C("PassGen_RestoreDefaults_Text")),M=u("div",{
className:"password-generator-history-button disabled",onclick:an},await C("PassGen_ShowHistory"))));return ak(),am(),d}
function R(){}function S(){}function T(){}function U(){}function V(a){const b=c?j.OZ:j.lt;(0,r.TT)(E).SetValue(a.m_length),(0,
r.TT)(F).SetChecked(a.m_include_digits),(0,r.TT)(G).SetChecked(a.m_include_upper_case_chars),(0,
r.TT)(I).SetChecked(!!a.m_specific_chars),(0,r.TT)(J).value=a.m_specific_chars||b,c&&((0,
r.TT)(H).SetChecked(a.m_include_lower_case_chars),(0,r.TT)(K).SetChecked(a.m_hex_digits_only),(0,
r.TT)(L).SetChecked(a.m_exclude_similar_chars)),D=a,am(),ak()}function W(){return D}function X(){D.m_length<1?D.m_length=c?(0,
l.H5)().m_length:(0,l.CZ)().m_length:D.m_length>j.wd&&(D.m_length=j.wd),(0,r.TT)(E).SetValue(D.m_length)}function Y(){
const a=c?(0,l.H5)().m_length:(0,l.CZ)().m_length;D.m_length=(0,r.TT)(E).GetValue()||a;try{am(),z(D,c)}catch(b){}}function Z(){
D.m_include_digits=(0,r.TT)(F).IsChecked(),am(),z(D,c)}function aa(){D.m_include_upper_case_chars=(0,r.TT)(G).IsChecked(),am(),
z(D,c)}function ab(){D.m_include_lower_case_chars=(0,r.TT)(H).IsChecked(),am(),z(D,c)}function ac(){const a=(0,
r.TT)(I).IsChecked();a?((0,r.TT)(J).removeAttribute("disabled"),(0,r.TT)(J).removeAttribute("readonly")):((0,
r.TT)(J).setAttribute("disabled","true"),(0,r.TT)(J).setAttribute("readonly","true")),D.m_include_specific_chars=a,
D.m_specific_chars=(0,r.TT)(J).value,z(D,c)}function ad(){D.m_specific_chars=(0,r.TT)(J).value,al(),am(),z(D,c)}function ae(){
setTimeout((function(){D.m_specific_chars=(0,r.TT)(J).value,c&&(al(),am()),z(D,c)}),0)}function af(){(0,r.TT)(J).select()}
function ag(a){const b=(0,r.TT)(J).value,d=a.key;b!==d&&1===d.length&&((0,r.TT)(J).value=d,D.m_specific_chars=d,z(D,c))}
function ah(){D.m_exclude_similar_chars=(0,r.TT)(L).IsChecked(),am(),z(D,c)}function ai(){D.m_hex_digits_only=(0,
r.TT)(K).IsChecked(),ak(),am(),z(D,c)}function aj(){A(c)}function ak(){(0,r.TT)(G).SetChecked(D.m_include_upper_case_chars),(0,
r.TT)(F).SetChecked(D.m_include_digits),(0,r.TT)(I).SetChecked(D.m_include_specific_chars),D.m_include_specific_chars?((0,
r.TT)(J).removeAttribute("disabled"),(0,r.TT)(J).removeAttribute("readonly")):((0,r.TT)(J).setAttribute("disabled","true"),(0,
r.TT)(J).setAttribute("readonly","true")),c&&(0,r.TT)(H).SetChecked(D.m_include_lower_case_chars),D.m_hex_digits_only?((0,
r.TT)(J).setAttribute("disabled","true"),(0,r.TT)(G).Enable(!1),(0,r.TT)(F).Enable(!1),(0,r.TT)(I).Enable(!1),c&&(0,
r.TT)(H).Enable(!1)):(D.m_include_specific_chars&&(0,r.TT)(J).removeAttribute("disabled"),(0,r.TT)(G).Enable(!0),(0,
r.TT)(F).Enable(!0),(0,r.TT)(I).Enable(!0),c&&(0,r.TT)(H).Enable(!0))}function al(){const a=(0,
l.gp)(D.m_specific_chars),b=new Set;let c="";for(const d of a)b.has(d)||(b.add(d),c+=d)
;c!==D.m_specific_chars&&(D.m_specific_chars=c,(0,r.TT)(J).value=D.m_specific_chars)}function am(){if(!c)return;let a=D.m_length
;a<1&&(a=1),a>512&&(a=512);const b=(0,n.uQ)(a,D);(0,r.TT)(N).textContent=`${O}${b.toString()}`}function an(){(0,
r.TT)(M).classList.contains("disabled")||(0,g.D$)((()=>ao()),(()=>()=>{}),0,null)}async function ao(){var a
;const b=null!==(a=C("ContextMenuAndShortcuts_RunPassHistory_Text"))&&void 0!==a?a:"",c=(0,e.BG)((0,m.p)((0,
e.IW)("rf-passwords-history-dialog",b,null),(()=>(0,i._3)((async(a,b)=>{let c,d=null;const e=new Map,h=u("div",{
className:"rf-passwords-history-wrapper"},u("span",{className:"history-clears-caution"
},await C("PassGen_PassHistory_Clears_Text")),c=u("div",{className:"passwords-history-list"}),u("div",{
className:"passwords-history-footer"},u("div",{className:"passwords-history-clear-btn",onclick:k
},await C("PassGen_ClearHistory")))),i=[...await x.GetHistory(null)];i.sort(((a,b)=>{var c,d,e,f,g,h
;const i=Math.max(a.m_time_generated_utc_secs,null!==(c=a.m_time_last_copied_utc_secs)&&void 0!==c?c:0,null!==(e=a.m_fill_history&&(null===(d=a.m_fill_history[0])||void 0===d?void 0:d.m_time_utc_secs))&&void 0!==e?e:0),j=Math.max(b.m_time_generated_utc_secs,null!==(f=b.m_time_last_copied_utc_secs)&&void 0!==f?f:0,null!==(h=b.m_fill_history&&(null===(g=b.m_fill_history[0])||void 0===g?void 0:g.m_time_utc_secs))&&void 0!==h?h:0)
;return j>i?1:j<i?-1:0}));for(const f of i){const a=u("div",{className:"passwords-history-item",onclick:()=>(0,o.fI)(j(f))
},u("span",{className:"passwords-history-item-value"},f.m_password),d=u("div",{className:"passwords-history-item-actions"
}),u("div",{className:"passwords-history-item-copy-icon"}))
;if(e.set(f,d),f.m_fill_history&&f.m_fill_history.length>0)for(const b of f.m_fill_history){m(await(0,
l.nY)(w,b.m_time_utc_secs,"fill",b.m_domain),d)}if(f.m_time_last_copied_utc_secs){m(await(0,
l.nY)(w,f.m_time_last_copied_utc_secs,"copy",null),d)}
if(!(f.m_fill_history&&0!==f.m_fill_history.length||f.m_time_last_copied_utc_secs)){m(await(0,
l.nY)(w,f.m_time_generated_utc_secs,"generate",null),d)}c.appendChild(a)}return h;async function j(a){
const b=Object.assign({},a);b.m_time_last_copied_utc_secs=(0,q.t2)(),await x.UpdatePasswordData(b,null)
;for(const c of e)if(b.m_password===c[0].m_password){const a=c[1];if((0,g.rK)((0,r.TT)(a)),
b.m_fill_history)for(const c of b.m_fill_history){m(await(0,l.nY)(w,c.m_time_utc_secs,"fill",c.m_domain),a)}m(await(0,
l.nY)(w,b.m_time_last_copied_utc_secs,"copy",null),a);break}
(0,o.fI)((0,f.sZ)(b.m_password||"",C("StartPage_PasswordCopy_Notification"),f.jG,y))}function k(){i&&0!==i.length&&(B(),(0,
g.rK)((0,r.TT)(c)),b((0,s.JS)()))}function m(a,b){if(!b)return;const c=u("span",{className:"history-action-text"},a);(0,
r.TT)(b).appendChild(c)}})))));await c.Execute(null)}}(E,x,Y,B,F,ar,as,aw),H=(0,o.YZ)({action:aq}),(0,
r.TT)(P).appendChild(await U.Create()),(0,o.fI)(H.Execute(null));const c=[...await B.GetHistory(null)];let d=!1
;if(c.length>0)for(const e of c)if(Y&&0===e.m_generator_type||!Y&&1===e.m_generator_type){d=!0,ab=e;break}
if(d)ab&&ax(ab);else try{await au(null)}catch(k){await at(),await au(null)}ay()}function an(){(0,
r.TT)(M).classList.contains("disabled")||(J=(0,o.YZ)({action:ao}),(0,g.D$)((()=>(0,
r.TT)(J).Execute(null)),az,V,(()=>ad.StartIfNotStarted)))}async function ao(a){await au(a)}function ap(){const a=(0,
r.TT)(L).textContent,b=(0,r.TT)(O).classList.contains("disabled");a&&!b&&(0,g.D$)((()=>async function(){if(!ab)return
;ab.m_time_last_copied_utc_secs=(0,
q.t2)(),(0,o.fI)((0,f.sZ)(ab.m_password||"",G("StartPage_PasswordCopy_Notification"),f.jG,F)),
await B.UpdatePasswordData(ab,null)}()),(()=>()=>{}),0,null)}async function aq(a){if(Y){const b=(0,l.H5)(),c=await A.Get({
PassGenCharNumber:b.m_length,PassGenExcludeSimilar:b.m_exclude_similar_chars,PassGenUseHexChars:b.m_hex_digits_only,
PassGenCheckUpper:b.m_include_upper_case_chars,PassGenCheckLower:b.m_include_lower_case_chars,
PassGenCheckNumber:b.m_include_digits,PassGenCheckSpecial:b.m_include_specific_chars,PassGenCharSet:b.m_specific_chars})
;a.ThrowIfShouldStop();const d={m_length:c.PassGenCharNumber,m_include_digits:c.PassGenCheckNumber,
m_include_upper_case_chars:c.PassGenCheckUpper,m_include_lower_case_chars:c.PassGenCheckLower,
m_include_specific_chars:c.PassGenCheckSpecial,m_specific_chars:c.PassGenCharSet,m_min_digits:-1,
m_hex_digits_only:c.PassGenUseHexChars,m_exclude_similar_chars:c.PassGenExcludeSimilar};(0,r.TT)(U).SetValues(d)}else{
const b=(0,l.CZ)(),c=await A.Get({PassphraseGenCharNumber:b.m_length,PassphraseGenExcludeSimilar:b.m_exclude_similar_chars,
PassphraseGenUseHexChars:b.m_hex_digits_only,PassphraseGenCheckUpper:b.m_include_upper_case_chars,
PassphraseGenCheckLower:b.m_include_lower_case_chars,PassphraseGenCheckNumber:b.m_include_digits,
PassphraseGenCheckSpecial:b.m_include_specific_chars,PassphraseGenCharSet:b.m_specific_chars});a.ThrowIfShouldStop();const d={
m_length:c.PassphraseGenCharNumber,m_include_digits:c.PassphraseGenCheckNumber,
m_include_upper_case_chars:c.PassphraseGenCheckUpper,m_include_lower_case_chars:c.PassphraseGenCheckLower,
m_include_specific_chars:c.PassphraseGenCheckSpecial,m_specific_chars:c.PassphraseGenCharSet,m_min_digits:-1,
m_hex_digits_only:c.PassphraseGenUseHexChars,m_exclude_similar_chars:c.PassphraseGenExcludeSimilar};(0,r.TT)(U).SetValues(d)}
ay()}function ar(a,b){ac.Start((async c=>{b?await z.Set({PassGenCharNumber:a.m_length,
PassGenExcludeSimilar:a.m_exclude_similar_chars,PassGenUseHexChars:a.m_hex_digits_only,
PassGenCheckUpper:a.m_include_upper_case_chars,PassGenCheckLower:a.m_include_lower_case_chars,
PassGenCheckNumber:a.m_include_digits,PassGenCheckSpecial:a.m_include_specific_chars,PassGenCharSet:a.m_specific_chars
}):await z.Set({PassphraseGenCharNumber:a.m_length,PassphraseGenExcludeSimilar:a.m_exclude_similar_chars,
PassphraseGenUseHexChars:a.m_hex_digits_only,PassphraseGenCheckUpper:a.m_include_upper_case_chars,
PassphraseGenCheckLower:a.m_include_lower_case_chars,PassphraseGenCheckNumber:a.m_include_digits,
PassphraseGenCheckSpecial:a.m_include_specific_chars,PassphraseGenCharSet:a.m_specific_chars}),c.ThrowIfShouldStop()})),ay()}
function as(){(0,g.D$)((()=>at()),az,V,(()=>ad.StartIfNotStarted))}async function at(){
Y?(await z.Remove(["PassGenCharNumber","PassGenExcludeSimilar","PassGenUseHexChars","PassGenCheckUpper","PassGenCheckLower","PassGenCheckNumber","PassGenCheckSpecial","PassGenCharSet"]),
(0,
r.TT)(U).SetValues((0,l.H5)())):(await z.Remove(["PassphraseGenCharNumber","PassphraseGenExcludeSimilar","PassphraseGenUseHexChars","PassphraseGenCheckUpper","PassphraseGenCheckLower","PassphraseGenCheckNumber","PassphraseGenCheckSpecial","PassphraseGenCharSet"]),
(0,r.TT)(U).SetValues((0,l.CZ)())),ay()}async function au(a){ab=Y?function(){(0,r.TT)(U).CorrectInputValues();const a=(0,
r.TT)(U).GetValues();return{m_password:(0,n.Zf)(a.m_length,a,D),m_generator_type:0,m_time_generated_utc_secs:(0,q.t2)()}
}():function(){(0,r.TT)(U).CorrectInputValues();const a=(0,r.TT)(U).GetValues(),b=(0,r.TT)(aa).words;return{m_password:(0,
n.e3)(a.m_length,a,b),m_generator_type:1,m_time_generated_utc_secs:(0,q.t2)()}}(),ax(ab),await B.AddPassword(ab,a)}
function av(a){if(!a)return(0,r.TT)(N).textContent="",void((0,r.TT)(K).dataset.score="none");const b=(0,k.im)(a,[],null,Z);let c
;b>75?((0,r.TT)(N).textContent=ae,c="strong"):b>50?((0,r.TT)(N).textContent=af,c="good"):b>25?((0,r.TT)(N).textContent=ag,
c="medium"):((0,r.TT)(N).textContent=ah,c="weak"),(0,r.TT)(K).dataset.score=c}function aw(){(0,g.D$)((()=>async function(){
ab=null,(0,r.TT)(L).textContent="",av(""),ay(),await B.Clear(null)}()),(()=>()=>{}),0,null)}function ax(a){(0,
r.TT)(L).textContent=a.m_password,av(a.m_password),ay()}function ay(){const a=(0,
r.TT)(L).textContent,b=document.querySelector(".password-generator-history-button");a?((0,r.TT)(O).classList.remove("disabled"),
(0,r.TT)(b).classList.remove("disabled")):((0,r.TT)(O).classList.add("disabled"),(0,r.TT)(b).classList.add("disabled"))
;const c=(0,r.TT)(U).GetValues()
;c.m_hex_digits_only||c.m_include_upper_case_chars||c.m_include_lower_case_chars||c.m_include_digits||c.m_specific_chars?(0,
r.TT)(M).classList.remove("disabled"):(0,r.TT)(M).classList.add("disabled")}function az(){
return window.addEventListener("mousedown",aB,!0),aA}function aA(){window.removeEventListener("mousedown",aB,!0),(0,
r.TT)(O).classList.remove("disabled"),(0,r.TT)(M).classList.remove("disabled"),ad.Stop()}function aB(a){a.preventDefault(),
a.stopPropagation(),(0,r.TT)(O).classList.add("disabled"),(0,r.TT)(M).classList.add("disabled")}}},37156:function(a,b,c){
"use strict";c.d(b,{X:function(){return f}});c(60954),c(57724),c(22188),c(78440);var d=c(13113),e=c(4153);c(69893),c(13117)
;function f(a){var b,c;const f=a.type?{"payment-page":a.action,"product-type":a.type}:{"payment-page":a.action
},g=a.urlParams?(0,d.HT)(a.urlParams):"",h=`${window.location.origin+window.location.pathname}${g?`?${g}`:""}#${(0,
d.HT)(f)}`,i=(0,d.vN)(window.location.href),j=(0,d._V)((0,d.TG)(null!==(b=null==i?void 0:i.m_extra)&&void 0!==b?b:"")),k=(0,
e.XM)(null!==(c=a.urlParams)&&void 0!==c?c:{},j);window.location.replace(h),k&&window.location.reload()}},76259:function(a,b,c){
"use strict";c.d(b,{g:function(){return d}})
;const d=["login-page-bg-1.jpg","login-page-bg-2.jpg","login-page-bg-3.jpg","login-page-bg-4.jpg","login-page-bg-5.jpg","login-page-bg-6.jpg","login-page-bg-7.jpg","login-page-bg-8.jpg","login-page-bg-9.jpg","login-page-bg-10.jpg","login-page-bg-11.jpg","login-page-bg-12.jpg","login-page-bg-13.jpg","login-page-bg-14.jpg"]
},63452:function(a,b,c){"use strict";c(58863),c(25116),c(21217),c(2346),c(15482),c(6353),c(36029),c(3846),c(76853),c(30526),
c(14755),c(41808),c(42244),c(43503),c(24713),c(26781),c(74072),c(47974),c(38664),c(42609),c(51796),c(20958),c(1597),c(41656),
c(85122),c(14497),c(31586),c(59212),c(15422),c(775),c(89257),c(30588),c(57837),c(81465),c(73627),c(90942),c(21625),c(90292),
c(67857),c(4181),c(31733),c(82755),c(7299),c(40260),c(78143),c(48017),c(27641),c(19865),c(36205),c(44760),c(68741),c(58496),
c(88502),c(54730),c(15153),c(25507),c(22744),c(85726),c(34732),c(89398),c(53306),c(48374),c(19921),c(18927),c(78920),c(87492),
c(31913),c(23870),c(54369),c(61817),c(24034),c(23869),c(70712),c(83374),c(41388),c(86379),c(53022),c(14816),c(18735),c(27402),
c(5540),c(28737),c(13083),c(65012),c(25921),c(37604),c(25148),c(80275),c(98550),c(2672),c(91505),c(77353),c(41836),c(58004),
c(54640),c(77079),c(49788),c(20796),c(38456),c(36915),c(85163),c(1191),c(53867),c(91953),c(64085),c(18144),c(44119),c(96779),
c(21491),c(40216),c(15272),c(48486),c(8818),c(99007),c(19135),c(39971),c(77534),c(64293),c(16670),c(61633),c(12711),c(28486),
c(24995),c(88132),c(1052),c(65496),c(83033),c(65180),c(90969),c(21421),c(51367),c(81753),c(99925),c(7842),c(54498),c(54564),
c(40912),c(15943),c(87108),c(38870),c(35441),c(71523),c(89476),c(10562),c(51043),c(82060),c(83712),c(81518),c(36914),c(47264),
c(32816),c(73806),c(85683),c(67644),c(79119),c(28469),c(24478),c(16337),c(82759),c(20349),c(36980),c(64192),c(12049),c(3329),
c(54715),c(38162),c(18267),c(53957),c(12454),c(27113),c(90957),c(45691),c(96601),c(6825),c(9269),c(8578),c(66043),c(4473),
c(38779),c(11422),c(50471),c(1982),c(24382),c(7863),c(18516),c(45788),c(56907),c(76768),c(47808),c(10659),c(20589),c(60734),
c(90185),c(3364),c(91986),c(15096),c(9335),c(17037),c(24403),c(9403),c(89993),c(84166),c(10529),c(40944),c(41104),c(54011),
c(66069),c(58262),c(77467),c(22275),c(8251),c(31750),c(91424),c(50750),c(57188),c(43667),c(11),c(97226),c(82288),c(64891),
c(5085),c(49651),c(90579),c(41955),c(72757),c(52663),c(66721),c(71577),c(59748),c(54163),c(39545),c(38538),c(48771),c(25385),
c(48762),c(29491),c(77324),c(99635),c(87400),c(412),c(57214),c(10119),c(13018),c(62703),c(2882),c(19548),c(18796),c(15712),
c(80323),c(11677),c(84676),c(28144),c(3626),c(75576),c(6247),c(53848),c(68809),c(96886),c(68409),c(90886),c(57034),c(59108),
c(36724),c(38715),c(5848),c(20271),c(26009),c(21621),c(85994),c(14172),c(21009),c(16276),c(59051),c(69492),c(3409),c(36462),
c(65421),c(21813),c(6399),c(65864),c(94782),c(61410),c(99457),c(58322),c(73374),c(25019),c(36078),c(21736),c(51350),c(45919),
c(53484),c(18370),c(45337)},42160:function(a,b,c){"use strict";c.d(b,{r:function(){return o}})
;var d=c(41107),e=c(11834),f=c(65852),g=c(38221),h=c(19365),i=c(47333),j=c(12131),k=c(32105),l=c(78440),m=c(97514),n=c(91764)._
;function o(a,b,c,o,p,q,r,s,t,u,v){const w=v.LocalizeString,x=s;let y=p().AccountEnterprise;const z=q().SelfHostedServer;(0,
l.fI)((0,d.zK)(a.rfo,a.service,a.enterprise||null,a.options,v,x.account));const A=(0,d.Kw)();A.AddCommand({cmdCommand:"manual",
cmdCaption:w("Cmd_Help_Manual_Key"),cmdCssClass:"rf-account-manual-item",cmdShowImage:!1,cmdAction:()=>{const a=(0,
i.nF)("manual",t.platformOs);(0,l.fI)(u.OpenUrl({url:a,newTab:!0,reuseExisting:!1},null))}}),A.AddCommand({cmdCommand:"faq",
cmdCaption:w("Cmd_Help_FaqAll_Key"),cmdCssClass:"rf-account-faq-item",cmdShowImage:!1,cmdAction:()=>{(0,l.fI)(u.OpenUrl({
url:i.qP,newTab:!0,reuseExisting:!1},null))}}),A.AddCommand({cmdCommand:"help-center",cmdCaption:w("Cmd_Help_HelpCenter_Key"),
cmdCssClass:"rf-account-help-center-item",cmdShowImage:!1,cmdAction:()=>{(0,l.fI)(u.OpenUrl({url:i.f6,newTab:!0,reuseExisting:!1
},null))}}),z||(A.AddSeparator(null),A.AddCommand({cmdCommand:"contact-support",cmdCaption:w("Cmd_Help_ContactSupport_Key"),
cmdCssClass:"rf-account-contact-support-item",cmdShowImage:!1,cmdAction:()=>{(0,l.fI)(b.ContactSupport({
reportType:"ContactSupport"},null))}})),A.AddSeparator(null),A.AddCommand({cmdCommand:"about",cmdCaption:w("StartPage_About"),
cmdCssClass:"rf-account-about-item",cmdShowImage:!1,cmdAction:()=>{
const a="extension-legacy"===t.mode?"":t.mode,b=[`${t.staging?`${(0,h.U)()}, built ${(0,m.RD)()}`:`${(0,
h.U)()}`}${a?", "+a:""}`];(0,l.fI)((0,e.qR)(w("StartPage_Version",b),w("StartPage_Tutorial"),w("StartPage_DialogButton_Ok")))}})
;const B=(0,d.Kw)();let C;B.AddCommand({cmdCommand:"dark-theme",cmdCaption:w("StartPage_DarkMode"),
cmdCssClass:"rf-account-theme-item",cmdShowImage:!0,cmdDoNotHideOnAction:!0,cmdAddElem:a=>{(0,l.fI)((async()=>{
const b=await r.GetValue("StartPage.Theme",(0,g.Cj)()),c=x.main;let d=!1;"dark"===b?d=!0:"light"===b&&(d=!1),
d?(c.classList.remove("light-theme"),c.classList.add("dark-theme")):(c.classList.remove("dark-theme"),
c.classList.add("light-theme")),C=n(k.Ig,{checked:d}),a.appendChild(C)})())},cmdAction:a=>{const b=a.target,c=null!==(0,
g.LP)(b,".toggle");let d=C.IsChecked();c||(d=!d,C.SetChecked(d));const e=x.main;let f;d?(e.classList.add("dark-theme"),
e.classList.remove("light-theme"),f="dark"):(e.classList.add("light-theme"),e.classList.remove("dark-theme"),f="light"),(0,
l.fI)(r.SetValue("StartPage.Theme",f))},order:10}),B.AddCommand({cmdCommand:"settings",cmdCaption:w("StartPage_Settings"),
cmdCssClass:"rf-account-settings-item",cmdShowImage:!0,cmdAction:()=>{
"extension-legacy"!==t.mode?o.OnSelectCategory("category-settings"):(0,l.fI)(b.ShowDesktopOptionsDialog(0))},order:20}),
B.AddCommand({cmdCommand:"import",cmdCaption:w("Cmd_RunImport_Flat"),cmdCssClass:"rf-import-item",cmdShowImage:!0,
cmdAction:()=>{(0,l.fI)(c.Import())},order:40}),B.AddSeparator(50),B.AddCommand({cmdCommand:"help",
cmdCaption:w("Cmd_Help_Flat"),cmdCssClass:"rf-account-help-item",cmdShowImage:!0,cmdSubmenu:A,order:80}),B.AddSeparator(90),
B.AddCommand({cmdCommand:"logout",cmdCssClass:"rf-account-logout-item rf-command-logout",cmdShowImage:!0,
cmdCaption:w("StartPage_LogOut"),cmdAction:()=>{(0,l.fI)(c.RoboFormLogout())},order:1e3}),(0,d.O8)({
dropdownHandlerEl:x.account.box,dropdownPopupEl:x.account.menu,dropdownModalScreenEl:x.account.modalScreen,commands:B,
onShow:async()=>{y=p().AccountEnterprise,B.ShowCommand("dark-theme",!0),B.ShowCommand("settings",!0),(0,d.DP)(!1)
;const c=q().DisableLogoff;B.ShowCommand("logout",!c);const e=await o.ShouldShowUpgradePromo();B.ShowCommand("upgrade",e)
;const g=y&&(p().AccountCompanyAdmin||p().AccountGroupManager)||!1;g&&B.AddCommand({cmdCommand:"admin-center",
cmdCaption:w("Cmd_Sync_OpenAdminCenter"),cmdCssClass:"rf-account-admin-center-item",cmdShowImage:!0,cmdAction:()=>{(0,
l.fI)((async()=>{const c=await a.service.GetRoboFormAccountInfo(null);await b.OpenAdminCenter({startPage:(0,f.vj)(),
companyCreatedTime:null==c?void 0:c.createdTime},null)})())},order:30}),B.ShowCommand("admin-center",g),
y||z||t.isInAppPaymentDisabled?(B.ShowCommand("referral",!1),B.ShowCommand("upgrade",!1)):((0,l.fI)((async()=>{try{
await a.rfo.IsReferralsDataAvailable(null)?(B.AddCommand({cmdCommand:"referral",cmdCaption:w("Cmd_RenewalRewards_Flat"),
cmdCssClass:"rf-account-referral-item",cmdShowImage:!0,order:60,cmdAction:()=>{(0,l.fI)(b.OpenSettingsPage(null,10,null))}}),
B.ShowCommand("referral",!0)):B.ShowCommand("referral",!1)}catch(c){if(!(0,j.tM)(c,7))throw c}})()),e&&B.AddCommand({
cmdCommand:"upgrade",cmdCaption:w("Cmd_License_BuyNow"),cmdCssClass:"rf-account-upgrade-item rf-command-upgrade",
cmdShowImage:!0,cmdAction:()=>{(0,l.fI)(o.OnUpgrade())},order:60}),B.ShowCommand("upgrade",e))}})}},47048:function(a,b,c){
"use strict";c.d(b,{B:function(){return s}})
;var d=c(37367),e=c(48658),f=c(36786),g=c(4601),h=c(41107),i=c(38221),j=c(47333),k=c(54811),l=c(4234),m=c(63956),n=c(4153),o=c(13113),p=c(69893),q=c(78440),r=c(13117)
;function s(a,b,c){const s=c,t=s.LocalizeString;let u=!1,v=!1
;const w=a,x=a.m_rf_manager,y=w.m_rf_api.policies,z=a.m_rf_data_popular,A=a.m_data_item_display_name_provider,B=a.m_initial_identity_provider,C=a.m_rf_cached_data_info,D=a.m_rf_page_status,E=b,F=[E.createItem,E.actualItem,E.categoryItem]
;let G=[],H=null,I=null;const J=(0,q.E5)(),K=(0,e.nj)("actual-identity",L);if(F.forEach((a=>{a.addEventListener("click",(a=>{
const b=a.target,c=b.classList.contains("rf-actual-identity")||null!==(0,i.Yw)(b,".rf-actual-identity");if(I){
if(b.classList.contains("rf-item-menu"))return;const c={path:l.xG,type:5};x.OnOpenEditor(c,!1,!1,(0,g.l7)(a))
}else if(0===G.length)(0,q.fI)((async()=>{try{const a=await N();await w.OnNew(a)}catch(a){}})());else if(null!==H&&c){
if(b.classList.contains("rf-item-menu"))return;x.OnOpenEditor(H,!1,!1,(0,g.l7)(a))
}else x.OnSelectItemTypeFilter("item-type-filter-identities")}))})),(0,i.sj)(E.actualItem,(a=>{const b=a.target
;H&&!b.classList.contains("rf-item-menu")&&x.OnOpenEditor(H,!1,!1,!0)
})),(0,h.YC)("#v8 .identity-select.rf-create-identity .select-title",t("StartPage_Create_Identity_Tip")),D.staging){
const a=["KeyI","KeyI","KeyI"];let b=[];document.addEventListener("keydown",(c=>{
if(c.code===a[b.length]&&c.altKey&&c.shiftKey&&c.ctrlKey){if(b.push(a[b.length]),(0,n.Fu)(b,a)){if(b=[],!u)return;if(I)return
;H&&(0,q.fI)((0,d.DR)(H,w.m_ui_commands,x,s))}}else b.length>0&&(b=[])}))}return{Activate:function(){if(u)return;u=!0},
Deactivate:function(){if(!u)return;u=!1},UpdateView:function(){if(!u)return;return void(0,q.fI)(async function(){try{
const a=await async function(a){let b=[],c=!1;try{await a.UpdateData((async(a,d,e)=>{
if(d&&0!==d.length&&(b=b.concat(d.filter((a=>5===a.type))),b.length>1))throw c=!0,(0,p.JS)()}),null)}catch(d){if(!c)throw d}
return b}(K),b=await async function(a){if(0===a.length)return null;const b=a[0];if(1===a.length)return d(b);try{
await z.Update("get-my-identity",null,null)}catch(e){return d(b)}const c=z.GetData()||[]
;for(const f of c)if(5===f.type)return d(f);return d(b);async function d(a){return C.FetchDataInfo(a.path,!0)}}(a);if(G=a,b)H=b,
I=null;else{if(await(0,k.h$)(y)){const a=await B.GetInitialIdentity(null);H=null,I=a}else H=null,I=null}v=!0,
G.length<2&&"category-folders"===x.GetCategory()&&"item-type-filter-identities"===x.GetItemTypeFilter()&&x.OnSelectItemTypeFilter("item-type-filter-all"),
F.forEach((a=>{(0,m.SE)(a)})),I?(P(),await O()):0===G.length?await M():1===G.length?(P(),H&&await O()):(P(),H&&await O(),(0,
m.l5)(E.categoryItem)),x.GetController(1).UpdateScrollMode()}catch(a){(0,p.r5)(a,p.ut)?x.ScheduleUpdateViewsAfterError():(0,
r.Rm)("!!! Actual Identity View: cannot get identities",a)}}())},Invalidate:()=>{v=!1},IsStillActual:L,
GetIsStillActual:function(){return L},UpdateCreateIdentity:M};function L(){return u}async function M(){if(a())try{
if(await J.Execute({action:N},null),!a())return;P(),(0,m.l5)(E.createItem)}catch(b){if((0,p.r5)(b,p.kd))return;if(!a())return
;!function(){const a=E.section;(0,m.SE)(a)}()}else;function a(){return u&&v&&0===G.length&&!I}}async function N(){try{
return await(0,f.YO)("new-identity","",c),""}catch(a){const b="category-folders"===x.GetCategory()&&x.GetFolder()||""
;if(""!==b){let a=(0,o.Y0)(b);return a=""===a?b:a,await(0,f.YO)("new-identity",a,c),a}throw a}}async function O(){
const a=E.actualItem;if(I){(0,m.l5)(a);const b=I,c=await(0,j.D5)(b,{},s);E.actualItemName.textContent=c
;const d=E.actualItemImage;(0,g.EI)(c,"",d,d),E.actualItemSharing&&(E.actualItemSharing.remove(),E.actualItemSharing=null)}else{
if(!H)return;{(0,m.l5)(a);const b=H;if(0===(0,l.Wi)(b.path).type){(0,h.YC)(a,t("StartPage_Category_Tip_Identity",[(0,
l.em)(b.path)])),E.actualItemName.textContent=(0,l.em)(b.path);const c=E.actualItemImage;(0,g.EI)(b.path,b.path,c,c)}else{
const a=await A.GetDisplayNameByPath(b.path,null);E.actualItemName.textContent=a;const c=E.actualItemImage;(0,
g.EI)(a,b.path,c,c)}E.actualItemSharing?(0,g.bv)(a,b):(E.actualItemSharing=(0,g.sj)(b,!0),a.appendChild(E.actualItemSharing))}}
if(null===E.actualItemMenu){const b=document.createElement("div");(0,h.YC)(b,t("StartPage_MoreActions_Tip")),
b.classList.add("rf-item-menu","rf-cmdbutton","auto-hide"),b.addEventListener("click",(()=>{if(I){const c=(0,i.VC)(b);(0,
q.fI)((0,g.KR)(I,a,{clientX:c.left,clientY:c.top+b.offsetHeight}))}else if(H){const c=(0,i.VC)(b);(0,q.fI)((0,g.j1)(H,a,{
clientX:c.left,clientY:c.top+b.offsetHeight}))}})),a.addEventListener("contextmenu",(b=>(I?(0,q.fI)((0,g.KR)(I,a,(0,
h.Eo)(b))):H&&(0,q.fI)((0,g.j1)(H,a,(0,h.Eo)(b))),b.preventDefault(),!1))),E.actualItemMenu=b,a.appendChild(b)}}function P(){
const a=E.section;(0,h.YC)(a,t("StartPage_Category_Tip_Identities")),(0,m.l5)(a),(0,
q.C)((()=>x.GetController(1).UpdateScrollMode()))}}},46708:function(a,b,c){"use strict";c.d(b,{B:function(){return D}})
;var d=c(11834),e=c(41107),f=c(53166),g=c(87965),h=c(3566),i=c(98266),j=c(47333),k=c(20855),l=c(54811),m=c(94652),n=c(12131),o=c(84479),p=c(31173),q=c(32105),r=c(97490),s=c(63956),t=c(78440),u=c(21499),v=c(95399),w=c(13113),x=c(88262),y=c(69893),z=c(4153),A=(c(13117),
c(91764)._);const B=new Map,C=new Map;function D(a,b,c,D,E,F,G,H){const I=a,J=b,K=c,L=D,M=E,N=F,O=H,P=O.LocalizeString
;let Q=null,R=null,S="en";const T=(0,k.gI)({GetBreachMonitoringEmailAccessToken:async(b,c)=>{try{
return await a.rfo.GetBreachMonitoringEmailAccessToken2(b,c)}catch(d){if((0,n.tM)(d,7)){return{
token:await a.rfo.GetBreachMonitoringEmailAccessToken(b,c)}}throw d}},DisableEmailBreachMonService:async()=>{
await(null==F?void 0:F.SetValue("CanUseEmailMonitoringOnServers",[]))}},K),U=(0,t.tG)(),V=(0,t.tG)(),W=(0,t.tG)();let X=null
;const[Y,Z]=(0,r.Uw)(!1),[aa,ab]=(0,r.Uw)(null),[ac,ad]=(0,r.Uw)(null),[ae,af]=(0,r.Uw)(null),[ag,ah]=(0,
r.Uw)(!1),ai=new Map,aj=new Map,ak=new Map,al=new Map([["em",!1],["p",!0],["span",!0],["a",!1]])
;let am=null,an=null,ao="",ap=null;const aq={Create:async function(){const a=await(0,j.AT)(I.service);T.Init(),
await T.SetServerAddress(a);if(await az())return A("div",{className:"data-breach-monitoring-upgrade"},A("div",{
className:"monitoring-features"},A("div",{className:"monitoring-card"},A("div",{
className:"monitoring-illustration illustration-1"
}),A("div",null,P("StartPage_SecurityCenter_DataBreach_FeatureText_1"))),A("div",{className:"monitoring-card"},A("div",{
className:"monitoring-illustration illustration-2"
}),A("div",null,P("StartPage_SecurityCenter_DataBreach_FeatureText_2"))),A("div",{className:"monitoring-card"},A("div",{
className:"monitoring-illustration illustration-3"
}),A("div",null,P("StartPage_SecurityCenter_DataBreach_FeatureText_3")))),A("div",{className:"monitoring-cta-section"},A("div",{
className:"monitoring-"},P("StartPage_SecurityCenter_DataBreach_Upgrade_Text")),A("button",{
className:"rf-button default-button",onclick:()=>(0,t.fI)(J.OnUpgrade())
},P("StartPage_SecurityCenter_DataBreach_Upgrade_BtnText2"))));return A("div",null,(async a=>null===aa(a)||ag(a)?A("div",{
className:"loading-view"},A("div",{className:"action-progress-overlay-circle size64"
})):A("div",null,(async a=>await(null==N?void 0:N.GetValue("ShowDataBreachMonitoringNotificationMsg",!0))?A("div",{
className:"notification-message"},A("div",{className:"notification-icon"}),A("span",null,(0,
e.R1)(await P("StartPage_SecurityCenter_DataBreach_Notification_InfoBar_Text"),[A("a",{
href:"https://help.roboform.com/hc/articles/34698895326093-What-is-Data-Breach-Monitoring",target:"_blank",rel:"noopener",
className:"link"},P("StartPage_SecurityCenter_DataBreach_Notification_InfoBar_Link"))])),A("div",{className:"close-btn",
onclick:()=>{(0,t.fI)((async()=>{await(null==N?void 0:N.SetValue("ShowDataBreachMonitoringNotificationMsg",!1)),
await a.Execute()})())}})):[]),A("div",{className:"list-header"},A("div",{className:"column column-email"},A("span",{
className:"text"},P("StartPage_SecurityCenter_DataBreach_Table_Header_Email_Title"))),A("div",{
className:"column column-critical-data"},A("span",{className:"text"
},P("StartPage_SecurityCenter_DataBreach_Table_Header_Compromised_Title2"))),A("div",{
className:"column column-non-critical-data"},A("span",{className:"text"
},P("StartPage_SecurityCenter_DataBreach_Table_Header_NonCompromised_Title2"))),A("div",{className:"column column-monitoring"
},A("span",{className:"text"},P("StartPage_SecurityCenter_DataBreach_Table_Header_Monitoring_Title"))),A("div",{
className:"column column-commands"})),A("div",{className:"list"},(async a=>{const b=a.GetProgress(),c=aa(a)||[]
;return ak.clear(),c.forEach((a=>{a.email&&ak.set(a.email,a)})),aj.clear(),(0,f.L9)(aa(a)||[],at,(()=>A("div",{
className:"loading-view"},A("div",{className:"action-progress-overlay-circle size24"}))),null,(()=>{(0,t.fI)((async()=>{
for(const[a,c]of ai.entries())aw(a,c.SetBreachList,c.GetBreachList,c.SetIsScanning,b);ai.clear()})())}),50,"emails-list",b)
})),A("div",{className:"new-item-add",onclick:()=>(0,t.fI)(async function(){const a=(0,t.f4)(null,null,null),b=(0,d.BG)((0,
i.p)((0,
i.dK)("dialog-modal add-email-dialog",await P("StartPage_SecurityCenter_DataBreach_AddEmail_DialogTitle"),null),(a=>function(a){
let b;const[c]=(0,r.Q_)(null,null,(()=>async function(a){const b=new Set;if(null==ap?void 0:ap.size)return ap;return await(0,
l.s_)(I.data,(async c=>{var d,e;try{if(5===c.type){
null===(d=(await I.data.GetDataItem(c.path,4,null,a)).m_groups.find((a=>"Person"===a.m_name)))||void 0===d||d.m_instances.forEach((a=>{
var c;const d=null===(c=a.m_fields.find((a=>"Email"===a.m_name)))||void 0===c?void 0:c.m_value;d&&(0,w.xE)(d)&&b.add(d)}))}
if(1===c.type){
const d=null===(e=(await I.data.GetDataItem(c.path,4,null,a)).m_fields.find((a=>a.m_name===o.Df)))||void 0===e?void 0:e.m_value
;d&&(0,w.xE)(d)&&b.add(d)}}catch(f){}}),{deep:!0},a),ap=b,b}(a))),[e,f]=(0,r.Uw)(null),[g,i]=(0,r.Uw)(!0),j={Create:k,
OnAfterShow:n,OnBeforeHide:p,Focus:u,Dispose:v};async function k(j){let k;const l=A("div",{className:"content"},(async a=>{
const d=c(a),f=d?A("div",null,b=(0,q.Rv)({autoCompleteData:Array.from(d),CreateListItemEl:v,OnTextInput:a=>a,
placeholder:await P("AdminCenter_Email_Title"),ShouldShowItem:z,OnBlur:B,OnChange:C}),(async a=>e(a)?A("div",{
className:"error-text"},e(a)):[]),A("div",{className:"buttons-bar"},A("button",{className:"button",onclick:()=>j(null)
},P("Cmd_Cancel_Flat")),(async a=>A("button",{className:"button default-button "+(g(a)?"disabled":""),disabled:g(a),
onclick:()=>(0,t.fI)(n(b.GetValue().trim()))},P("StartPage_SecurityCenter_DataBreach_AddEmail"))))):A("div",{
className:"loading-view"},A("div",{className:"action-progress-overlay-circle size32"}));return b&&(0,t.C)((()=>{b.Focus(),
b.HideListEl()})),f}),k=A("div",{className:"progress-overlay hidden"}));return l;async function n(b){
const c=await async function(a,b){return(0,d.BG)((0,h.u9)({
message:P("StartPage_SecurityCenter_DataBreach_EmailVerification_Text",[a]),
ok_button:P("StartPage_SecurityCenter_DataBreach_SendVerification"),no_button:P("Cmd_Cancel_Flat"),
title:P("StartPage_SecurityCenter_DataBreach_EmailVerification"),css_class:"email-verification-dialog"})).Execute(b)}(b,a)
;c&&(0,s.D$)((()=>o(b)),(()=>p()),200,r)}async function o(c){try{await I.rfo.AddEmailToBreachMonitoring(c,a),j(c)}catch(d){
if((0,x.dW)(d)&&404===d.httpResponse.status)return await aC(),void j(null);if((0,y.r5)(d,y.kd))return;const a=(0,m.JU)(d)
;if(a)return f(a.error.message||null),void b.SetErrorState()}}function p(){return f(null),b.RemoveErrorState(),b.Enable(!0),
()=>{b.Enable(!0)}}function r(){return(0,s.l5)(k),u}function u(){(0,s.SE)(k)}function v(a){const b=(0,h.dy)(a);return A("div",{
className:"mail-suggestion"},A("div",{className:`mail-suggestion-icon ${b}`},(0,h.KG)(a)),A("div",{
className:"mail-suggestion-text"},a))}function z(a,b){return null==a?void 0:a.toLowerCase().includes(b.toLowerCase())}
function B(){const a=b.GetValue().trim();b.SetValue(a),""!==a&&((0,w.xE)(a)||(b.SetErrorState(),
f(P("StartPage_Sharing_SendingFile_Error_Text"))))}function C(){(0,w.xE)(b.GetValue().trim())?i(!1):i(!0),e(null)&&(f(null),
b.RemoveErrorState())}}function n(){}function p(){}function u(){}function v(){}return j}(a)))),c=await b.Execute(a);c&&(ar(!0),
await ay(c,a))}())},A("div",{className:"column column-add"},A("div",{className:"icon-text"},A("div",{className:"icon-add"
}),A("div",{className:"text"},P("StartPage_SecurityCenter_DataBreach_AddEmail"))))))))},OnAfterShow:function(){ac(null)||ax()
;ar(!1),I.data.onDataChanged.Add(aD)},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){ai.clear(),Q=null,
U.Cancel((0,y.ZU)(y.kd,"Dispose")),null==X||X.Cancel(),ab(null),I.data.onDataChanged.Remove(aD)},
OpenFirstCriticalBreachEmail:function(a,b){if(0===a.length)return;if(b)for(const c of a){const a=B.get(c);if(!a)continue
;if(!a.some((a=>{var b,c
;return!(null===(b=a.breachOption)||void 0===b?void 0:b.isResolved)&&(null===(c=a.categorizedLeaks)||void 0===c?void 0:c.some((a=>"critical"===a.category)))
})))continue;const b=aj.get(c);b&&b()}else R=a}};return aq;function ar(a){U.Start((async b=>{
if(a||null===aa(null))for(let a=0;a<3;a++)try{if(await az())return;const a=await I.rfo.GetBreachMonitoringEmails(b)
;ab(a.sort(as));break}catch(c){if((0,y.r5)(c,y.kd));else{if((0,y.r5)(c,y.rS))continue;(0,
x.dW)(c)&&404===c.httpResponse.status?(await aC(),
U.Cancel()):await(0,d.nn)(P("StartPage_SecurityCenter_DataBreach_GetEmails_Error",[(0,y.EB)(c)]))}}}))}function as(a,b){
return"pending"===a.status&&"verified"===b.status?1:"pending"===b.status&&"verified"===a.status?-1:a.email&&b.email?a.email.localeCompare(b.email):0
}async function at(a,c){var f;let k;S=null!==(f=await O.GetLanguageTag(c))&&void 0!==f?f:"en";const[l,m]=(0,
r.Uw)(null),[n,o]=(0,r.Uw)(!1);a.email&&C.set(a.email,{GetBreachList:l,SetBreachList:m});const u=(0,t.tG)()
;if("verified"===a.status&&a.email){const c=B.get(a.email);if(c){if(aj.set(a.email,(()=>{aA(a)})),m(c),R){
if(R.includes(a.email)){const b=c.some((a=>{var b,c
;return!(null===(b=a.breachOption)||void 0===b?void 0:b.isResolved)&&(null===(c=a.categorizedLeaks)||void 0===c?void 0:c.some((a=>"critical"===a.category)))
}));b&&(aA(a),Q=a.email,R=null)}}else if(!Q){const d=c.some((a=>{var b,c
;return!(null===(b=a.breachOption)||void 0===b?void 0:b.isResolved)&&(null===(c=a.categorizedLeaks)||void 0===c?void 0:c.some((a=>"critical"===a.category)))
}));d&&(b.IsInlineEditorShown()||(aA(a),Q=a.email))}}else ai.set(a,{GetBreachList:l,SetBreachList:m,SetIsScanning:o})}
return A("fragment",null,(async b=>{
const c=l(b),f="pending"!==a.status&&(null==c?void 0:c.length),g=null==c?void 0:c.reduce(((a,b)=>{var c,d
;return!(null===(c=b.breachOption)||void 0===c?void 0:c.isResolved)&&(null===(d=b.categorizedLeaks)||void 0===d?void 0:d.some((a=>"critical"===a.category)))?Object.assign(Object.assign({},a),{
critical:[...a.critical,b]}):Object.assign(Object.assign({},a),{nonCritical:[...a.nonCritical,b]})}),{critical:[],nonCritical:[]
}),h=ae(b);return k=A("div",{className:`list-row ${f?"":"not-clickable"} ${h===a?"selected":""}`,onclick:()=>function(a){
if("verified"===a.status){const b=l(null);(null==b?void 0:b.length)?aA(a):ao&&aB()}}(a),oncontextmenu:b=>{b.preventDefault(),
function(a,b,c){if(2!==a.button)return;a.stopPropagation(),a.preventDefault()
;const d=b.getBoundingClientRect(),e=new DOMRect(a.clientX,d.top,0,d.height);w(b,c,e)}(b,k,a)}},A("div",{
className:"column column-email"},A("div",{className:"email-icon"}),A("div",{className:"email-text"
},a.email),(null==g?void 0:g.critical.length)&&A("div",{className:"compromised-icon"})),(async b=>{const c=l(b)
;if(n(b))return[A("div",{className:"column column-critical-data column-scanning"},A("span",{className:"text"
},P("StartPage_SecurityCenter_DataBreach_Scanning_Text2"))),A("div",{className:"column column-non-critical-data"},A("span",{
className:"text"})),A("div",{className:"column column-monitoring"},A("span",{className:"text"}))]
;if("pending"===a.status&&!1===a.verified){const c=Y(b);return A("div",{className:"column column-verify"
},A("div",null,c?P("StartPage_SecurityCenter_DataBreach_Scanning_Text2"):(0,
e.R1)(await P("StartPage_SecurityCenter_DataBreach_VerifyEmail_Text"),[A("span",{className:"verify-email-text",onclick:()=>{
V.Start((async b=>{a.email&&await async function(a,b){const c=(0,d.BG)((0,i.p)((0,
i.dK)("dialog-modal email-verify-dialog",P("Options_Account_VerifyEmail_Button_Text"),null),(b=>function(a,b,c){let f
;const g=60,[h,i]=(0,r.Uw)(g);let k,l;const m=(0,t.Jb)((async()=>{const a=h(null);l.textContent=(0,z.bf)(a);const b=a-1;i(b),
-1===b&&(m.Cancel(),(0,s.SE)(l))}),1e3,1e3),n={Create:o,OnAfterShow:p,OnBeforeHide:u,Focus:v,Dispose:w};return n
;async function o(d,n){const[o,p]=(0,r.Uw)(null),t=A("div",{className:"modal-dialog-content"},A("div",{className:"close-button",
onclick:()=>{n(y.JS)}}),A("div",{className:"code-sent-text"
},await P("Options_Account_VerifyAccountData_EmailCodeSent_Text")),A("div",{className:"user-email"},a),A("div",{
className:"enter-code"},await P("Options_Account_VerifyAccountData_EnterEmailCode_Text2")),f=A(q.ze,{length:6,
className:"verification-code",onSubmit:v,onInput:u}),(async a=>o(a)?A("div",{className:"code-error"},o(a)):[]),A("div",{
className:"resend-container"},(async a=>{const b=h(a)>-1;return A("fragment",null,A("button",{
className:"resend-btn "+(b?"btn-disabled":""),disabled:b,onclick:()=>z()
},P("StartPage_SecurityCenter_DataBreach_EmailVerification_Resend")))}),l=A("span",{className:"resend-counter"})),k=A("div",{
className:"progress-overlay hidden"}));return t;function u(){p(null)}function v(){(0,s.D$)((()=>w()),B,500,D)}
async function w(){try{const g=f.GetValue()
;await b.VerifyEmail(g,c),(0,e.Fp)(P("StartPage_SecurityCenter_DataBreach_EmailVerification_Notification2",[a])),d()}catch(g){
if((0,y.r5)(g,y.kd))return;if((0,x.dW)(g)&&403===g.httpResponse.status){
if("wrong-code"===g.httpResponse.headers["x-sib-reason"])return p(await P("Options_Account_VerifyAccountData_WrongCode_Error")),
void f.Clear()
;if("expired-code"===g.httpResponse.headers["x-sib-reason"])return void p(await P("Options_Account_VerifyAccountData_CodeExpired_Error"))
}p((0,j.Qo)(g))}}function z(){async function b(){try{await I.rfo.SendVerificationCode("","email",a,c),i(g),p(null),m.Start(100),
(0,s.l5)(l)}catch(b){if((0,y.r5)(b,y.kd))return;p((0,j.Qo)(b))}}(0,s.D$)((()=>b()),B,200,D)}function B(){return f.Enable(!1),C}
function C(){f.Enable(!0),f.Focus()}function D(){return(0,s.l5)(k),E}function E(){(0,s.SE)(k)}}function p(){(0,s.l5)(k),(0,
t.fI)((async()=>{try{await I.rfo.SendVerificationCode("","email",a,c),(0,t.C)((()=>{null==f||f.Focus()})),m.Start(100)}catch(b){
return void await(0,d.nn)(P("StartPage_SecurityCenter_DataBreach_AccountEmailVerification_Error",[(0,y.EB)(b)]))}finally{(0,
s.SE)(k)}})())}function u(){}function v(){}function w(){m.Cancel()}}(a,{VerifyEmail:async(b,c)=>{var d
;await I.rfo.UpdateAccountInfo({email:a,verificationCode:b},c),null==D||D.StartUpdate(),Z(!0),d=a,X=(0,t.Jb)((async a=>{try{
const b=await I.rfo.GetBreachMonitoringEmails(a),c=b.find((a=>a.email===d));if("pending"===(null==c?void 0:c.status))return
;ab(b.sort(as)),await(null==X?void 0:X.Stop())}catch(b){if((0,x.dW)(b)&&404===b.httpResponse.status)return void await aC();(0,
y.au)(b),await(null==X?void 0:X.Stop())}}),2e3,1e4),X.Start(500)}},b))));try{await c.Execute(b)}catch(f){if((0,
y.r5)(f,y.kd))return}}(a.email,b)}))}},P("StartPage_SecurityCenter_DataBreach_VerifyEmail_Text2"))])))}
if("pending"===a.status&&!a.verified)return A("div",{className:"column column-verify"},A("div",null,(0,
e.R1)(await P("StartPage_SecurityCenter_DataBreach_VerifyEmail_Text"),[A("span",{className:"verify-email-text",onclick:b=>{
b.stopPropagation();const c=(0,t.f4)(null,null,null);a.email&&(0,t.fI)(ay(a.email,c))}
},P("StartPage_SecurityCenter_DataBreach_VerifyEmail_Text2"))])));if("pending"===a.status&&a.verified)return[A("div",{
className:"column column-critical-data column-scanning"},A("span",{className:"text"
},P("StartPage_SecurityCenter_DataBreach_Scanning_Text2"))),A("div",{className:"column column-non-critical-data"},A("span",{
className:"text"})),A("div",{className:"column column-monitoring"},A("span",{className:"text"}))]
;if(0===(null==c?void 0:c.length))return[A("div",{className:"column column-no-breach"
},A("div",null,P("StartPage_SecurityCenter_DataBreach_NoBreach_Text2"))),A("div",{className:"column column-monitoring"
},A("span",{className:"text"},(0,v.fQ)(a.verifiedTime||0,S)))];const f=Y(b);return[A("div",{
className:"column column-critical-data \n                                                        "+(!c&&f?"column-scanning":"")
},c?A("span",{className:"text"
},(null==g?void 0:g.critical.length)?(0,z.bf)(null==g?void 0:g.critical.length):"—"):A("span",null,f?P("StartPage_SecurityCenter_DataBreach_Scanning_Text2"):"")),A("div",{
className:"column column-non-critical-data"},c?A("span",{className:"text"},(null==g?void 0:g.nonCritical.length)?(0,
z.bf)(null==g?void 0:g.nonCritical.length):"—"):null),A("div",{className:"column column-monitoring"},A("span",{className:"text"
},c?(0,v.fQ)(a.verifiedTime||0,S):null))]}),A("div",{className:"column column-commands"},(async b=>{var c
;return(null===(c=l(b))||void 0===c?void 0:c.length)&&"verified"===a.status?A("div",{className:"command-bar command-default"
},A("div",{className:"command command-view"})):[]}),A("div",{className:"command-bar"},A("div",{className:"command command-menu",
role:"button",ariaHasPopup:"true",title:await P("StartPage_MoreActions_Tip"),onclick:b=>function(a,b,c){if(0!==a.button)return
;if(a.stopPropagation(),an===c.email)return void E();if(!an||an!==c.email){w(b,c,a.target.getBoundingClientRect())}}(b,k,a)
})))),
f?k.title=await P("Item_ClickToView_Tip"):"pending"!==a.status&&0===(null==c?void 0:c.length)&&(k.title=await P("StartPage_SecurityCenter_DataBreach_NoBreach_Text2")),
k}));function w(a,b,c){E(),am=(0,g.Lj)(c,(()=>async function(a){var b;const c=[],e=ac(null)
;return"pending"===a.status&&void 0===a.verified?c.push({title:P("StartPage_SecurityCenter_DataBreach_Command_Verify"),
imageClass:"cmd-verify",onCommand:async b=>{const c=(0,t.f4)(null,null,null);a.email&&(0,t.fI)(ay(a.email,c))}
}):(null===(b=l(null))||void 0===b?void 0:b.length)&&c.push({title:P("StartPage_Cmd_View"),imageClass:"cmd-view-icon",
onCommand:async b=>{aA(a)}}),a.email!==e&&c.push({title:P("AdminCenter_Remove_Text"),imageClass:"cmd-delete-icon",
onCommand:async b=>{u.Start((async b=>{await(0,d.BG)((0,h.u9)({
message:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Text",[a.email||""]),
ok_button:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Btn2"),no_button:P("Cmd_Cancel_Flat"),
title:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Title2"),css_class:"email-verification-dialog"
})).Execute(b)&&a.email&&await au(a.email,b)}))}}),c.push({
title:P("StartPage_SecurityCenter_DataBreach_Command_Notification_Settings"),imageClass:"cmd-settings-icon",onCommand:async a=>{
J.OpenSettingsAndScrollTo(3,"EmailBreachNotifications")}}),c}(b)),{className:"breach-popup-menu",onShow(){
a.classList.add("highlighted"),an=b.email||null},onHide(){a.classList.remove("highlighted"),b.email===an&&(an=null)}
},(function(b,c){return G.style.width=(0,p.Md)(b),G.style.height=(0,p.Md)(c),a.getBoundingClientRect()}),((a,b)=>(0,
t.fI)(a(b,(0,t.f4)(null,null,null)))))}function E(){am&&(am.Hide(),am=null)}}async function au(a,b){try{ah(!0),
await I.rfo.RemoveBreachMonitoringEmail(a,b);const c=aa(null);c&&(ab(c.filter((b=>b.email!==a))),(0,
e.Fp)(P("StartPage_SecurityCenter_DataBreach_Delete_Email_Notifaction2",[a]))),ao===a&&(aB(),ao=""),null==L||L.StartUpdate()
}catch(c){(0,x.dW)(c)&&404===c.httpResponse.status?await aC():(0,y.r5)(c)&&(0,t.fI)((0,d.nn)(c.description))}finally{ah(!1)}}
function av(a,b){const[c,f]=(0,r.Uw)(null),[i,j]=(0,r.Uw)(!1);let k;return a.email&&(ao=a.email),async function(q){
const v=a.email&&C.get(a.email);if(!v)return[];const z=v.GetBreachList(q),E=ac(q);if(i(q)||!z||!z.length)return A("div",{
className:"loading-view"},A("div",{className:"action-progress-overlay-circle size64"}));const F=z.reduce(((a,b)=>{var c,d
;return!(null===(c=b.breachOption)||void 0===c?void 0:c.isResolved)&&(null===(d=b.categorizedLeaks)||void 0===d?void 0:d.some((a=>"critical"===a.category)))?Object.assign(Object.assign({},a),{
critical:[...a.critical,b]}):Object.assign(Object.assign({},a),{nonCritical:[...a.nonCritical,b]})}),{critical:[],nonCritical:[]
});return c(null)||f(F.critical[0]||F.nonCritical[0]),A("div",{className:"email-details-view"},A("div",{
className:"email-info-header"},A("div",{className:"email-icon"}),A("div",{className:"email-title"},a.email),A("div",{
className:"email-cmdbar"},(async b=>{if(a.email===E)return;const c=aa(b),e=null==c?void 0:c.find((b=>b.email===a.email))
;return e?(k=A("div",{className:"email-command-more",title:await P("StartPage_MoreActions_Tip"),onclick:()=>function(a,b){
const c=a.getBoundingClientRect(),e=new DOMRect(c.left+20,c.bottom-10,0,0);(0,g.Lj)(e,(()=>async function(a){const b=[]
;return b.push({title:P("AdminCenter_Remove_Text"),imageClass:"cmd-delete-icon",onCommand:async b=>{const c=(0,
t.f4)(null,null,null);await(0,d.BG)((0,h.u9)({message:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Text",[a.email||""]),
ok_button:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Btn2"),no_button:P("Cmd_Cancel_Flat"),
title:P("StartPage_SecurityCenter_DataBreach_RemoveEmail_Title2"),css_class:"email-verification-dialog"
})).Execute(c)&&a.email&&await au(a.email,c)}}),b}(b)),{className:"breach-popup"},(function(){return a.getBoundingClientRect()
}),((a,b)=>(0,t.fI)(a(b,(0,t.f4)(null,null,null)))))}(k,e)}),k):void 0}),A("div",{className:"email-command-close",
title:await P("Cmd_Close_Flat"),onclick:aB}))),A("div",{className:"email-info-sidebar"
},F.critical.length?A("fragment",null,A("div",{className:"email-info-breach-title"
},P("StartPage_SecurityCenter_DataBreach_CriticalBreaches_Title")),F.critical.map((a=>p(a,!0)))):null,F.nonCritical.length?A("fragment",null,A("div",{
className:"email-info-breach-title"
},P("StartPage_SecurityCenter_DataBreach_NonCriticalBreaches_Title")),F.nonCritical.map((a=>p(a,!1)))):null),function(){
return async i=>{var k,p,q,t,v,z,E;const F=i.GetProgress(),G=c(i);if(!G)return[];const H=!G.domain,[J]=(0,
r.Q_)(null,null,(()=>m(G.domain?(0,
w.OZ)(G.domain,!1):void 0))),K=null===(k=G.breachOption)||void 0===k?void 0:k.isResolved,M=!(null===(p=G.categorizedLeaks)||void 0===p?void 0:p.some((a=>"critical"===a.category))),N=null===(t=null===(q=G.categorizedLeaks)||void 0===q?void 0:q.find((a=>"critical"===a.category)))||void 0===t?void 0:t.leaks,O=null===(z=null===(v=G.categorizedLeaks)||void 0===v?void 0:v.find((a=>"normal"===a.category)))||void 0===z?void 0:z.leaks
;return A("div",{className:"breach-info"},A("div",{className:"breach-info-header"},(async a=>A("div",{
className:"breach-info-header-icon",style:H?{}:J(a)?{backgroundImage:`url(${J(a)})`}:{backgroundImage:`url(${G.iconUrl})`}
})),A("div",{className:"breach-info-header-title",title:G.title},G.title),M?null:A("div",{className:"button",onclick:()=>{(0,
s.D$)((()=>async function(b,c){var g;const i=null===(g=b.breachOption)||void 0===g?void 0:g.isResolved;try{if(!i){
if(!await async function(){return(0,d.BG)((0,h.u9)({message:P("StartPage_SecurityCenter_DataBreach_ResolveBreachDialog_Text"),
ok_button:P("StartPage_SecurityCenter_DataBreach_ResolveBreach"),no_button:P("Cmd_Cancel_Flat"),
title:P("StartPage_SecurityCenter_DataBreach_ResolveBreachDialog_Title"),css_class:"resolve-confirm-dialog"})).Execute(null)
}())return}j(!0);const g=a.email&&C.get(a.email);if(!g)return;const k=g.GetBreachList(null);if(!a.email||!k)return
;await T.SetBreachOptions({breachId:b.breachId,options:Object.assign(Object.assign({},b.breachOption),{isResolved:!i})
},a.email,c),await async function(a,b,c){if(!b||!L)return;await(0,l.s_)(I.data,(async d=>{var e,f,g;try{if(1===d.type){
const f=await I.data.GetDataItem(d.path,4,null,c),g=null===(e=f.m_fields.find((a=>a.m_name===o.Df)))||void 0===e?void 0:e.m_value,h=(0,
w.c9)(f.m_goto_url),i=(0,w.c9)(f.m_match_url);if(g!==a)return;const j=await I.service.GetDomainMatch(c)
;(j.IsMatch(h,b)||j.IsMatch(i,b))&&await D.GetUpdateUserDataBreaches({email:a,webSiteUrl:[f.m_goto_url,f.m_match_url],
forceUpdate:!0},d.path,c)}else if(5===d.type){
const b=null===(f=(await I.data.GetDataItem(d.path,4,null,c)).m_groups.find((a=>"Person"===a.m_name)))||void 0===f?void 0:f.m_instances
;if(!b)return;let e=!1;for(const c of b){
if((null===(g=c.m_fields.find((a=>"Email"===a.m_name)))||void 0===g?void 0:g.m_value)===a){e=!0;break}}
e&&await D.GetUpdateUserDataBreaches({email:a,forceUpdate:!0},d.path,c)}}catch(h){(0,y.au)(h)}}),{deep:!0},c)
}(a.email,b.domain,c);const m=Object.assign(Object.assign({},b),{breachOption:Object.assign(Object.assign({},b.breachOption),{
isResolved:!i})}),n=k.map((a=>a===b?m:a));g.SetBreachList(n),B.set(a.email,n),f(m),(0,
e.Fp)(P(i?"StartPage_SecurityCenter_DataBreach_Breach_Unresolved_Notifaction":"StartPage_SecurityCenter_DataBreach_Breach_Resolved_Notifaction",[b.title||""]))
}catch(k){(0,x.dW)(k)&&404===k.httpResponse.status&&await aC()}finally{j(!1)}}(G,F)),(()=>()=>{}),200,null)}
},P((null===(E=G.breachOption)||void 0===E?void 0:E.isResolved)?"StartPage_SecurityCenter_DataBreach_UnresolveBreach":"StartPage_SecurityCenter_DataBreach_ResolveBreach"))),A("div",{
className:"breach-info-content"},A("div",{className:"email-info-main-content-section"},A("div",{
className:"email-info-main-content-section-title"
},P("StartPage_SecurityCenter_DataBreach_BreachDate"),g(await P("StartPage_SecurityCenter_DataBreach_BreachDate_Tooltip"))),A("div",{
className:"email-info-main-content-section-text"},(()=>{if(G.breachDate){return new Date(G.breachDate).toLocaleDateString(b,{
year:"numeric",month:"long",day:"numeric"})}return""}))),A("div",{className:"email-info-main-content-section"},A("div",{
className:"email-info-main-content-section-title"
},P("StartPage_SecurityCenter_DataBreach_BreachDescription"),g(await P("StartPage_SecurityCenter_DataBreach_BreachDescription_Tooltip2"))),A("div",{
className:"email-info-main-content-section-text"},G.description&&function(a){const b=(0,
u.Nt)(a,al,(a=>document.createElement(a)),((a,b)=>a.appendChild(b)),(a=>document.createTextNode(a))),c=b.map((a=>a.textContent)).join(" ").slice(0,500),[d,e]=(0,
r.Uw)(c.length<500),f=A("div",null,(async a=>{const f=d(a);return A("div",null,A("span",null,f?b:c),!f&&"...",!f&&A("button",{
className:"show-more-btn",onclick:()=>{const a=d(null);e(!a)}
},P(f?"StartPage_SecurityCenter_ShowLess":"StartPage_SecurityCenter_ShowMore")))}));return f
}(G.description)),(null==N?void 0:N.length)&&A("div",{className:"compromised-data-section"},A("div",{
className:"compromised-data-section-title"},P("StartPage_SecurityCenter_DataBreach_Critical_CompromisedData_Title"),K?A("div",{
className:"resolved-critical-breaches"},A("div",{className:"checkmark-icon"
}),A("span",null,P("StartPage_SecurityCenter_DataBreach_Resolved"))):g(await P("StartPage_SecurityCenter_DataBreach_Critical_CompromisedData_Tooltip"))),A("div",{
className:"critical-compromised-data-list"},N.map((a=>function(a,b){let c;switch(a){case"Passwords":
c=A("div",null,b?async()=>A("div",null,(0,e.R1)(await P("StartPage_DataBreach_Action_CompromisedData_Password"),[A("a",{
target:"_blank",href:(0,w.OZ)(b||"",!1),className:"action-link"
},P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn"))])):async()=>P("StartPage_DataBreach_Action_CompromisedData_Password",[await P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn")]))
;break;case"Password hints":
c=A("div",null,b?async()=>A("div",null,(0,e.R1)(await P("StartPage_DataBreach_Action_CompromisedData_PasswordHints"),[A("a",{
target:"_blank",href:(0,w.OZ)(b||"",!1),className:"action-link"
},P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn"))])):async()=>P("StartPage_DataBreach_Action_CompromisedData_PasswordHints",[await P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn")]))
;break;case"Historical passwords":
c=A("div",null,b?async()=>A("div",null,(0,e.R1)(await P("StartPage_DataBreach_Action_CompromisedData_HistoricalPassword"),[A("a",{
target:"_blank",href:(0,w.OZ)(b||"",!1),className:"action-link"
},P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn"))])):async()=>P("StartPage_DataBreach_Action_CompromisedData_HistoricalPassword",[await P("StartPage_DataBreach_Action_CompromisedData_Password_LogIn")]))
;break;case"Social security numbers":c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_SSN"));break
;case"Credit card CVV":case"Credit cards":c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_CreditCards"));break
;case"Bank account numbers":c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_BankAccountNumbers"));break
;case"Auth tokens":c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_AuthTokens"));break;case"PINs":
c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_PINs"));break;case"Security questions and answers":
c=A("div",null,P("StartPage_DataBreach_Action_CompromisedData_SecurityQuestion"));break;default:c=A("div",null)}return A("div",{
className:"critical-compromised-data-item"},A("div",{className:"compromised_data_title"},a),c)
}(a,G.domain))))),(null==O?void 0:O.length)&&A("div",{className:"compromised-data-section"},A("div",{
className:"compromised-data-section-title"
},P("StartPage_SecurityCenter_DataBreach_NonCritical_CompromisedData_Title"),g(await P("StartPage_SecurityCenter_DataBreach_NonCritical_CompromisedData_Tooltip2"))),A("div",{
className:"non-critical-compromised-data-list"},O.map(n))))))};function g(a){const b=A("div",{className:"section-info"})
;return(0,e.M_)(b,A("div",null,a)),b}}())};async function m(a){if(!a)return null;let b=M.GetImagesByUrl(a);if(b){
if(!b.img32)try{await M.LoadImagesByUrl(a,"","img32"),b=M.GetImagesByUrl(a)}catch(c){}}else try{
await M.LoadImagesByUrl(a,"","img32"),b=M.GetImagesByUrl(a)}catch(c){}if(b){const a=b.img32;if(a&&a.url)return a.url}return null
}function n(a){return A("div",{className:"compromised_data_title"},a)}function p(a,b){const d=!a.domain,[e]=(0,
r.Q_)(null,null,(()=>m(a.domain?(0,w.OZ)(a.domain,!1):void 0)));return A("fragment",null,(async g=>A("div",{
className:"breach-item "+(c(g)===a?"selected":""),title:await P("Item_ClickToView_Tip"),onclick:()=>f(a)},A("div",{
className:"breach-icon",style:d?{}:e(g)?{backgroundImage:`url(${e(g)})`}:{backgroundImage:`url(${a.iconUrl})`}}),A("div",{
className:"breach-item-name"},a.title),b?A("div",{className:"critical-breach-icon"}):null)))}}function aw(a,c,d,e,f){let g=!0
;const h=(0,t.Jb)((async()=>{try{if(!a.email)return void await h.Stop();const i=await T.GetBreachList(a.email,f);e(!1),
i.length?(i.forEach((e=>{if(!a.email)return;const h=function(e,f,h){let i=2;const j=(0,t.Jb)((async()=>{var k,l,m,n;try{
const i=null===(k=e.breachId)||void 0===k?void 0:k.name,o=null===(l=e.breachId)||void 0===l?void 0:l.source;if(!i||!o)return
;const p=await T.GetBreach({name:i,source:o,email:f},h);if(p){
const h=!(null===(m=e.options)||void 0===m?void 0:m.isResolved)&&(null===(n=p.categorizedLeaks)||void 0===n?void 0:n.some((a=>"critical"===a.category))),i=d(null)
;i?(g&&B.set(f,[...i,Object.assign(Object.assign({},p),{breachOption:e.options})]),Z(!1),
c([...i,Object.assign(Object.assign({},p),{breachOption:e.options})]),!Q&&h&&(Q=f,
aA(a))):(g&&B.set(f,[Object.assign(Object.assign({},p),{breachOption:e.options})]),Z(!1),c([Object.assign(Object.assign({},p),{
breachOption:e.options})]),R?R.includes(f)&&h&&(Q=f,R=null,aA(a)):h&&!Q&&(b.IsInlineEditorShown()||(Q=f,aA(a)))),await j.Stop()}
}catch(o){if((0,x.dW)(o)&&404===o.httpResponse.status)await aC();else if((0,x.dW)(o)&&503===o.httpResponse.status);else{
if(!(i>0))throw B.delete(f),g=!1,await j.Stop(),o;i--}}}),2e3,1e4);return j}(e,a.email,f);h.Start(100)})),
await h.Stop()):(B.set(a.email,[]),Z(!1),c([]),await h.Stop())}catch(i){
if((0,x.dW)(i)&&404===i.httpResponse.status)await aC();else{if(!(0,x.dW)(i)||503!==i.httpResponse.status)throw i;e(!0)}}
}),2e3,6e4);h.Start(100)}function ax(){W.Start((async a=>{const b=await I.service.GetRoboFormAccountInfo(a);b.email&&ad(b.email)
;const c=(await I.service.GetRFOnlineUserId()).userId;ad(c)}))}async function ay(a,b){const c=(0,d.BG)((0,i.p)((0,
i.dK)("dialog-modal email-verify-dialog monitored-email-verify",P("Options_Account_VerifyEmail_Button_Text"),null),(b=>function(a,b,c){
let d;const f={Create:g,OnAfterShow:h,OnBeforeHide:i,Focus:j,Dispose:k};return f;async function g(f,g){const[h,i]=(0,r.Uw)(null)
;let j;return A("div",{className:"modal-dialog-content"},A("div",{className:"close-button",onclick:()=>{g(y.JS)}}),A("div",{
className:"code-sent-text"},await P("Options_Account_VerifyAccountData_EmailCodeSent_Text")),A("div",{className:"user-email"
},a),A("div",{className:"enter-code"},await P("Options_Account_VerifyAccountData_EnterEmailCode_Text2")),d=A(q.ze,{length:6,
className:"verification-code",onSubmit:l,onInput:k}),(async a=>h(a)?A("div",{className:"code-error"},h(a)):[]),A("button",{
className:"resend-btn",onclick:()=>o()},P("StartPage_SecurityCenter_DataBreach_EmailVerification_Resend")),j=A("div",{
className:"progress-overlay hidden"}));function k(){i(null)}function l(){(0,s.D$)((()=>n()),p,500,u)}async function n(){try{
const g=d.GetValue()
;await b.VerifyCode(g,c),(0,e.Fp)(P("StartPage_SecurityCenter_DataBreach_EmailVerification_Notification2",[a])),ar(!0),f()
}catch(h){if((0,x.dW)(h)&&404===h.httpResponse.status)return await aC(),void f();if((0,y.r5)(h,y.kd))return;const a=(0,m.JU)(h)
;if(!a)return void g(h);b.OnVerifyError(a,d,i,g)}}function o(){async function b(){try{
await I.rfo.ResendBreachMonitoringEmailOTP(a,c),i(null)}catch(b){
if((0,x.dW)(b)&&404===b.httpResponse.status)return void await aC();if((0,y.r5)(b,y.kd))return;const a=(0,m.JU)(b)
;if(a)return i(a.error.message||null),void(0,z.TT)(d).Clear()}}(0,s.D$)((()=>b()),p,200,u)}function p(){return d.Enable(!1),t}
function t(){d.Enable(!0),d.Focus()}function u(){return(0,s.l5)(j),v}function v(){(0,s.SE)(j)}}function h(){(0,t.C)((()=>{
null==d||d.Focus()}))}function i(){}function j(){}function k(){}}(a,{async VerifyCode(b,c){
await I.rfo.VerifyBreachMonitoringEmail(a,b,c),null==L||L.StartUpdate()},OnVerifyError(b,c,e,f){
if("otp-too-many-attempts"!==b.error.code)return"wrong-otp"===b.error.code?(e(P("Options_Devices_DeviceActivity_AuthRejected_WrongOTP_Text")),
void c.Clear()):(e(b.error.message||null),void c.Clear());{const c=aa(null);c&&ab(c.filter((b=>b.email!==a))),(0,
t.fI)(async function(){await(0,d.BG)((0,h.cF)({message:P("StartPage_SecurityCenter_DataBreach_EmailVerification_Error"),
ok_button:P("StartPage_DialogButton_Ok"),title:P("StartPage_SecurityCenter_DataBreach_EmailVerification")})).Execute(null)}()),
f(b)}}},b))));try{await c.Execute(b)}catch(f){if((0,y.r5)(f,y.kd))return}}async function az(){
return!await I.options.GetValue("AccountLicenseActive",!1)}function aA(a){J.ShowViewInRightPanel(av(a,S),{
width:window.innerWidth/2}),af(a)}function aB(){J.CloseEditor(),af(null)}async function aC(){
N&&(await N.SetValue("CanUseEmailMonitoringOnServers",[]),
b.CloseEditor(),b.OnSelectCategoryAndOrder("category-security-center","security-center-all"))}function aD(a){
for(const b of a)switch(b.event){case 12:console.log(b);break;case 10:ai.clear(),U.IsExecuting()&&U.Cancel((0,
y.ZU)(y.kd,"Dispose")),null==X||X.Cancel(),ap=new Set,ab(null),ad(null);break;case 3:ar(!0),ax()}}}},1871:function(a,b,c){
"use strict";c.d(b,{Z:function(){return n},i:function(){return o}})
;var d=c(4601),e=c(41107),f=c(38221),g=c(65852),h=c(31173),i=c(63956),j=c(78440),k=c(69893),l=c(4153);c(13117);function m(a){
return"section-title"===a.type}function n(a){
const b=a.m_get_is_still_actual,c=a.m_items_list,e=a.m_data_item_display_name_provider,k=(0,
g.ZP)(a.m_progress_indicator),n=a.m_rf_cached_data_info,o=a.m_on_finish_update,p=a.m_show_all_items;let q,r,s=0;const t=new Map
;let u=[],v=-1,w=-1;const x=(0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items")),y=(0,
l.TT)(document.querySelector("#v8 .rf-data-view .rf-data"));if(y.addEventListener("scroll",(()=>A(c,!1))),
window.addEventListener("resize",(()=>A(c,!1))),window.ResizeObserver){new ResizeObserver((()=>A(c,!1))).observe(c)}const z={
StartUpdate:function(a){const b=q!==a.m_view_id;q=a.m_view_id,r=a.m_data_item_appearence_rules,b&&D()
;const d=c.querySelector(".rf-add-new-item");null!==d&&d.remove();(0,i.SE)(x),s=y.scrollTop,t.forEach((a=>{a.invalidated=!0})),
u=[],v=-1,w=-1,k.StartIfNotStarted()},UpdateItems:function(a){const b=a.m_items_in_folders_count||{};if(q!==a.m_view_id)return
;u=[];for(const c of a.m_items){const a=c.path;if(m(c))continue;const d=n.GetDataInfo(a)||c;let e=t.get(a);e?(e.uptodate=!1,
e.invalidated=!1,e.item_info=d,e.items_in_folder_count=b[a]):(e={path:a,item_info:d,items_in_folder_count:b[a],elem:null,
uptodate:!1,invalidated:!1},t.set(a,e)),u.push(e)}A(c,!0),a.m_preserve_scroll_position&&s?y.scrollTop=s:y.scrollTop=0
;k.ScheduleStop(500)},FinishUpdate:function(a){if(q!==a.m_view_id)return;E(),(0,j.fI)((0,
d.XV)(c,(async a=>e.GetDisplayNameByPath(a,null)),(()=>q===a.m_view_id))),(0,j.fI)(b()),
a.m_not_final?k.ScheduleStop(500):k.Stop();return;async function b(){const b=u.length,e=a.m_total_shown_items_number||b
;if(0===e&&!0!==a.m_not_final){const b=await(0,d.w8)();if(q!==a.m_view_id)return;if(b)return(0,i.l5)(x),void await(0,
d.y4)(c,y.offsetHeight,!0)}if(e>0&&(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-data-view-header"))),
!0!==a.m_not_final&&((0,i.SE)(x),await(0,d.y4)(c,y.offsetHeight,!1)),a.m_select_item){const b=a.m_select_item.path;(0,
j.C)((()=>function(a){let b=-1;for(let c=0;c<u.length;++c)if(u[c].path===a){b=c;break}if(-1===b)return
;const d=C(c),e=Math.floor(b/d.items_per_line)*d.item_height;y.scrollTop=e,A(c,!1);const f=u[b].elem
;null!==f&&(f.classList.add("selected"),setTimeout((()=>{f.classList.remove("selected")}),3e3))}(b)))}o&&o(b)}},
RemoveAllElements:D};return z;function A(a,b){if(0===a.clientWidth)return;if(p||r.fixed_items_per_line)return v=0,w=u.length-1,
void(b&&B());const c=C(a);let d=a.querySelector(".virtual-list-scroller");null===d&&(d=document.createElement("div"),
d.classList.add("virtual-list-scroller"),
a.appendChild(d)),d.style.height=(0,h.Md)(c.item_height*Math.ceil(u.length/c.items_per_line))
;const e=Math.floor(y.scrollTop/c.item_height),f=Math.floor((y.scrollTop+c.viewport_height)/c.item_height),g=e*c.items_per_line,i=Math.min(u.length-1,(f+1)*c.items_per_line-1),j=i-g+1,k=Math.max(0,g-j),l=Math.min(u.length-1,i+j)
;(b||v!==k||w!==l)&&(v=k,w=l,B())}function B(){for(let e=0;e<u.length;++e){const h=u[e]
;e<=w?(null===h.elem?h.elem=(a=h.item_info,
g=h.items_in_folder_count,(0,d.ef)(a,r.image_size,b(),g)):h.uptodate||H(h.elem,h.item_info,h.items_in_folder_count),
h.uptodate=!0,G(h),(0,f.k)(c,h.elem,e)):F(h)}var a,g;(0,j.fI)((0,d.XV)(c,(async a=>e.GetDisplayNameByPath(a,null)),b()))}
function C(a){const b=a.clientWidth,c=Math.floor((0,f.VC)(y).top),d=window.innerHeight-c-38;let e=r.default_item_outer_width
;r.fixed_items_per_line&&(e=Math.floor(b/r.fixed_items_per_line));const g=r.default_item_outer_height
;let h=Math.max(1,Math.floor(b/e));return r.fixed_items_per_line&&(h=r.fixed_items_per_line),{viewport_width:b,
viewport_height:d,item_width:e,item_height:g,items_per_line:h}}function D(){(0,f.Nt)(c),t.clear(),u=[]}function E(){
t.forEach((a=>{var b;a.invalidated&&(F(a),null===(b=a.elem)||void 0===b||b.setAttribute("data-invalidated","true"))}))}
function F(a){var b;null!==a.elem&&((0,i.SE)(a.elem),null===(b=a.elem)||void 0===b||b.removeAttribute("data-invalidated"))}
function G(a){var b;null!==a.elem&&((0,i.l5)(a.elem),null===(b=a.elem)||void 0===b||b.removeAttribute("data-invalidated"))}
function H(a,c,e){(0,d.Td)(a,c,r.image_size,b(),e)}}function o(a){
const b=a.m_get_is_still_actual,c=a.m_data_item_display_name_provider,f=a.m_items_list,h=(0,
g.ZP)(a.m_progress_indicator),n=a.m_on_finish_update;let o;const p=(0,e.wj)({elem:f,itemHeight:50,itemsListTopPadding:50,
alwaysSelectFirstItem:!1,onScrollEvent:()=>{(0,e.DN)(f)&&(0,e.b2)(!1)},onViewportItemsUpdated:function(){
const a=f.querySelector(".rf-add-new-item");if(null!==a){const b=a.nextElementSibling
;b&&b.classList.contains("rf-list-item-row")&&(a.remove(),(0,l.TT)(f.querySelector(".rf-virt-list-viewport")).appendChild(a))}}
});let q=[],r=0;const s={StartUpdate:function(a){const b=o!==a.m_view_id;o=a.m_view_id,b&&t();(0,i.SE)((0,
l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items")));const c=f.querySelector(".rf-add-new-item")
;null!==c&&c.remove();(0,d.RN)(f),r=f.scrollTop,h.StartIfNotStarted()},UpdateItems:function(a){
const c=a.m_items,g=a.m_items_in_folders_count||{};if(o!==a.m_view_id)return;const h=c.map((a=>a.path))
;q=q.filter((a=>h.includes(a.path)));let i=l("");for(let b=0;b<c.length;b++){const a=c[b];i++;const d=l(a.path)
;-1===d?q.splice(i,0,a):d!==i&&(q.splice(d,1),d<i&&i--,q.splice(i,0,a))}p.UpdateItems({items:q.map((a=>a.path)),
CreateItem:function(a){let c=null;const f=j(a);if(f&&(c=function(a,c){let f=null;!function(a){return!m(a)
}(a)?m(a)&&"section-title"===a.type&&(f=document.createElement("div"),f.classList.add("rf-section-title"),(0,
e.$9)(f,a.title)):f=(0,d.Ip)(a,"img32",(()=>b()()&&p.IsItemReal(a.path)),c,!0);if(!f)return null;return f}(f,g[a])),!c)throw(0,
k.ZU)(k.V2,"Cannot create item element");return c},UpdateItem:function(a,c){const e=j(a);e&&function(a,c,e){if(m(a))return;(0,
d.Td)(c,a,"img32",(()=>b()()&&p.IsItemReal(a.path)),e)}(e,c,g[a])},DeleteItem:function(a){(0,d.Pi)(a)}}),
a.m_preserve_scroll_position&&r&&(f.scrollTop=r);return;function j(a){for(let b=0;b<q.length;++b)if(q[b].path===a)return q[b]
;return null}function l(a){for(let b=0;b<q.length;++b)if(q[b].path===a)return b;return-1}},FinishUpdate:function(a){
if(o!==a.m_view_id)return;(0,j.fI)((0,d.XV)(f,(async a=>c.GetDisplayNameByPath(a,null)),(()=>o===a.m_view_id))),(0,j.fI)(b()),
a.m_not_final?h.ScheduleStop(500):h.Stop();return;async function b(){if(0===q.length&&!0!==a.m_not_final){const b=await(0,
d.w8)();if(o!==a.m_view_id)return;if(b){(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-no-items"))),await(0,
d.y4)((0,l.TT)(f.querySelector(".rf-virt-list-viewport")),f.offsetHeight-50,!0);const a=f.querySelector(".rf-list-item-header")
;return void(a&&a.remove())}}
if(q.length>0&&(0,i.l5)((0,l.TT)(document.querySelector("#v8 .rf-data-view .rf-data-view-header"))),
!0!==a.m_not_final&&(await(0,d.y4)((0,l.TT)(f.querySelector(".rf-virt-list-viewport")),f.offsetHeight-50,!1),(0,d.gt)()),
a.m_select_item){const b=a.m_select_item.path;p.Select(b),setTimeout((()=>{p.Deselect(b)}),3e3)}n(q.length)}},
RemoveAllElements:t};return s;function t(){q=[];const a=f.querySelector(".rf-add-new-item");null!==a&&a.remove()}}},
84428:function(a,b,c){"use strict";c.d(b,{F:function(){return v}})
;var d=c(48658),e=c(83645),f=c(1871),g=c(4601),h=c(11834),i=c(41107),j=c(38221),k=c(98266),l=c(4234),m=c(54811),n=c(31173),o=c(63956),p=c(13113),q=c(4153),r=c(78440),s=c(73863),t=c(69893),u=(c(13117),
c(91764)._);function v(a,b){const c=a.m_localization,e=c.LocalizeString;let p=!1,v=!1
;const y=a,z=a.m_rf_manager,A=a.m_rf_cached_data_info,B=a.m_rf_items_existance,C=a.m_data_item_display_name_provider,D=a.m_start_page_preferences,E=b,F=b.dataItems,G=a.m_rf_api.sharing,H=(0,
r.tG)(),I=(0,r.tG)(),J=(0,r.h1)(),K=(0,r.h1)();let L,M=[],N=[],O="rf-view-large",P="",Q="",R="",S=null;const T=(0,f.Z)({
m_get_is_still_actual:ad,m_items_list:ae("data-items-section-main").items,m_progress_indicator:F.progress,
m_rf_cached_data_info:A,m_data_item_display_name_provider:C,m_on_finish_update:ak,m_show_all_items:!1}),U=(0,f.i)({
m_get_is_still_actual:ad,m_data_item_display_name_provider:C,m_items_list:ae("data-items-section-main-list-view").items,
m_progress_indicator:F.progress,m_on_finish_update:ak}),V=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-shared-folders").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),W=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-groups").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),X=(0,f.Z)({m_get_is_still_actual:ad,
m_items_list:ae("data-items-section-shared-files").items,m_progress_indicator:F.progress,m_rf_cached_data_info:A,
m_data_item_display_name_provider:C,m_show_all_items:!0}),Y=new Map;Y.set("pinned-view",w({m_view_id:"pinned-view",
m_data_items_list:T,m_subfolders:!0,m_get_data:()=>y.m_rf_data_pinned,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("pinned-view")})),
Y.set("popular-view",w({m_view_id:"popular-view",m_data_items_list:T,m_subfolders:!0,m_get_data:()=>y.m_rf_data_popular,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("popular-view")})),
Y.set("popular-list-view",w({m_view_id:"popular-list-view",m_data_items_list:U,m_subfolders:!0,
m_get_data:()=>y.m_rf_data_popular,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("popular-list-view")})),Y.set("recent-view",w({m_view_id:"recent-view",m_data_items_list:T,m_subfolders:!0,
m_get_data:()=>y.m_rf_data_recent,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("recent-view")})),Y.set("recent-list-view",w({m_view_id:"recent-list-view",m_data_items_list:U,
m_subfolders:!0,m_get_data:()=>y.m_rf_data_recent,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("recent-list-view")})),Y.set("one-folder-view",w({m_view_id:"one-folder-view",m_data_items_list:T,
m_subfolders:!0,m_get_data:a=>y.AllItemsPerFolderData(a),m_get_folder_items_count:B.GetItemsCount,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("one-folder-view")})),
Y.set("one-folder-list-view",w({m_view_id:"one-folder-list-view",m_data_items_list:U,m_subfolders:!1,
m_get_data:a=>y.AllItemsPerFolderData(a),m_get_folder_items_count:B.GetItemsCount,
m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,m_is_still_actual:ad("one-folder-list-view")})),
Y.set("authenticator-view",w({m_view_id:"authenticator-view",m_data_items_list:U,m_subfolders:!0,
m_get_data:()=>a.m_rf_data_totp,m_schedule_update_views_after_error:z.ScheduleUpdateViewsAfterError,
m_is_still_actual:ad("authenticator-view")})),Y.set("sharing-center-view",function(a){
const b=a.view_id,c=a.data_collector,d=a.showDataItemsSection,e=a.shared_folders_data_items_list,f=a.shared_files_data_items_list,g=a.groups_data_items_list,h=(0,
q.y8)();let i,j=h.GetNext(),k="sharing-center-shared-with-me",l=[],m=[],n=[];const o={UpdateView:p,
GetAllShownItems:()=>l.concat(m,n)};return o;function p(a){i=a.data_item_appearence_rules||i,k=a.sort_order||k
;const o=j=h.GetNext();l=[],m=[],n=[];const p=b+"--shared-folders--"+k,q=b+"--groups--"+k,r=b+"--shared-files--"+k
;return void c.UpdateData(s,null).then((()=>{u(),d("data-items-section-shared-files",l.length>0)})).catch((a=>{(0,t.r5)(a,t.kd),
o===j&&u()}));async function s(b,c,h,j){const o=""===b;let s=!1;for(let a=0;a<c.length;a++){const b=c[a]
;(o&&b.sharedFolder||b.sharedFile)&&(await x(b,k)&&(b.sharedFile?(l.push(b),
s=!0):o&&(b.sharedGroup?m.push(b):b.sharedFolder&&n.push(b))))}o&&(v(p,"data-items-section-shared-folders",e,n),
v(q,"data-items-section-groups",g,m),f.StartUpdate({m_view_id:r,m_data_item_appearence_rules:i})),
s&&(d("data-items-section-shared-files",l.length>0),f.UpdateItems({m_view_id:r,m_items:l,
m_preserve_scroll_position:a.preserve_scroll_position}))}function u(){f.FinishUpdate({m_view_id:r,
m_total_shown_items_number:l.length+m.length+n.length})}function v(b,c,e,f){d(c,f.length>0),0!==f.length&&(e.StartUpdate({
m_view_id:b,m_data_item_appearence_rules:i}),e.UpdateItems({m_view_id:b,m_items:f,
m_preserve_scroll_position:a.preserve_scroll_position}),e.FinishUpdate({m_view_id:b,m_not_final:!0}))}}}({
view_id:"sharing-center-view",data_collector:(0,d.nj)("sharing-center",ad("sharing-center-view")),showDataItemsSection:af,
shared_folders_data_items_list:V,shared_files_data_items_list:X,groups_data_items_list:W})),
Y.set("sharing-center-list-view",function(a){
const b=a.localization,c=b.LocalizeString,d=a.view_id,e=a.data_items_list,f=a.data_collector,g=a.showDataItemsSection,h=(0,
q.y8)();let i=h.GetNext(),j="sharing-center-shared-with-me",k=[],l=[],m=[];const n={UpdateView:o,
GetAllShownItems:()=>k.concat(l,m)};return n;function o(a){j=a.sort_order||j;const b=i=h.GetNext(),n=d+j;let o=[];return k=[],
l=[],m=[],void f.UpdateData(p,null).then((()=>{q(),g("data-items-section-main-list-view",o.length>0)})).catch((a=>{(0,
t.r5)(a,t.kd),b===i&&(q(),g("data-items-section-main-list-view",o.length>0))}));async function p(b,d,f,g){const h=""===b
;let i=!1;for(let a=0;a<d.length;a++){const b=d[a]
;(h&&b.sharedFolder||b.sharedFile)&&(await x(b,j)&&(h?(b.sharedGroup?l.push(b):b.sharedFolder?m.push(b):b.sharedFile&&k.push(b),
i=!0):b.sharedFile&&(k.length>0?o.push(b):(k.push(b),r("sharing-section-files",c("StartPage_Sharing_SectionFiles"),k)),i=!0)))}
h&&(e.StartUpdate({m_view_id:n,m_data_item_appearence_rules:{}
}),r("sharing-section-folders",c("StartPage_Sharing_SectionFolders"),m),
r("sharing-section-groups",c("StartPage_Sharing_SectionGroups"),l),
r("sharing-section-files",c("StartPage_Sharing_SectionFiles"),k)),i&&e.UpdateItems({m_view_id:n,m_items:o,
m_preserve_scroll_position:a.preserve_scroll_position})}function q(){e.FinishUpdate({m_view_id:n})}function r(a,b,c){
c.length>0&&(o.push({type:"section-title",path:"section-title-"+a,title:b}),o=o.concat(c))}}}({
view_id:"sharing-center-list-view",data_items_list:U,
data_collector:(0,d.nj)("sharing-center-list",ad("sharing-center-list-view")),showDataItemsSection:af,localization:c})),(0,
i.YC)(F.viewStyleLarge,e("StartPage_ViewStyle_Grid")),(0,i.YC)(F.viewStyleCompact,e("StartPage_ViewStyle_Compact")),(0,
i.YC)(F.viewStyleList,e("StartPage_ViewStyle_List")),(0,i.$9)(F.authenticatorTitle,e("StartPage_Category_Authenticator"))
;const Z=F.header;function aa(){window.innerWidth>650?(Z.classList.remove("rf-view-style-popup-shown"),(0,
o.SE)(F.viewStyleSelector)):(0,o.l5)(F.viewStyleSelector)}window.addEventListener("resize",aa),aa(),
F.viewStyleSelector.addEventListener("click",(()=>{
Z.classList.contains("rf-view-style-popup-shown")?Z.classList.remove("rf-view-style-popup-shown"):Z.classList.add("rf-view-style-popup-shown")
})),F.viewStyleLarge.addEventListener("click",(()=>{const a=O;Z.classList.remove("rf-view-style-popup-shown"),
ai("rf-view-large",!0),"rf-view-large"!==a&&ab(!0)})),F.viewStyleList.addEventListener("click",(()=>{const a=O
;Z.classList.remove("rf-view-style-popup-shown"),ai("rf-view-list",!0),"rf-view-list"!==a&&ab(!0)})),
F.viewStyleCompact.addEventListener("click",(()=>{const a=O;Z.classList.remove("rf-view-style-popup-shown"),
ai("rf-view-condensed",!0),"rf-view-condensed"!==a&&ab(!0)})),function(){const a=ae("data-items-section-main").items
;if(a.classList.contains("rf-sortable"))return;let b,c,d,e,f,h,i,k,l=null,m=null,o=[],r=5,s=!1
;return a.classList.add("rf-sortable"),void a.addEventListener("mousedown",(function(d){if(C())return;if(x(),1!==d.which)return
;let e=d.target;for(;e.parentElement&&e.parentElement!==a;)e=e.parentElement;if(l=e&&B(e)?e:null,!l)return;b=d.clientX,
c=d.clientY,document.addEventListener("mousemove",t),document.addEventListener("mouseup",v)}));function t(g){
C()||l&&1===g.which&&(!s&&Math.abs(g.clientX-b)<10&&Math.abs(g.clientY-c)<10||(s||function(b){if(!l)return;s=!0,
document.addEventListener("keydown",w),a.classList.add("rf-dragging-in-process")
;const c=window.getComputedStyle(l),g=l.getBoundingClientRect();f=g.width+parseInt(c.marginLeft)+ +parseInt(c.marginRight),
h=g.height+parseInt(c.marginTop)+ +parseInt(c.marginBottom),r=Math.max(1,Math.floor(a.clientWidth/f));const n=(0,j.VC)(l)
;d=Math.max(3,b.clientX-n.left),e=Math.max(3,b.clientY-n.top),l.style.position="absolute",l.style.zIndex="1000",
o=Array.prototype.slice.call(a.children).filter((a=>B(a))),m=u("li",{className:"rf-sortable-paceholder "+l.className,style:{
visibility:"hidden"}});for(let d=0;d<o.length;++d)if(o[d]===l){k=i=d,a.insertBefore(m,l);break}}(g),function(b){if(!s||!l)return
;const c=(0,j.VC)(a),g=b.clientX-c.left,k=b.clientY-c.top;l.style.left=(0,n.Md)(g-d),l.style.top=(0,n.Md)(k-e)
;const m=Math.max(0,Math.floor(k/h)),p=Math.min(Math.max(Math.floor(g/f),0),r-1),t=Math.min(m*r+p,o.length-1);t!==i&&(A(i,t),
i=t);const u=(0,q.TT)((0,j.Yw)(a,".rf-data"));if(u.offsetHeight<u.scrollHeight||u.offsetWidth<u.scrollWidth){const a=(0,
j.VC)(u),c=b.clientX-a.left,d=b.clientY-a.top;c<14&&(u.scrollLeft-=15),c>u.offsetWidth-24&&(u.scrollLeft+=15),
d<14&&(u.scrollTop-=15),d>u.offsetHeight-24&&(u.scrollTop+=15)}}(g)))}function v(){C()||(x(),i!==k&&function(){if(!p)return
;if("category-pinned"!==z.GetCategory())return;const b=[],c=a.querySelectorAll(".rf-item");for(let a=0;a<c.length;++a){
const d=c[a];if(!B(d))continue;const e=(0,g.Kx)(d);e&&e.path&&(b[a]={path:e.path,type:e.type})}
y.m_rf_api.usageInfo.SetUsageInfoList(0,1,b,null).then((()=>{})).catch((a=>{}))}())}function w(a){
a.which!==j.O5.ESCAPE&&a.keyCode!==j.O5.ESCAPE||(k!==i&&A(i,k),x())}function x(){l&&(l.style.position="",l.style.zIndex="",
l.style.left="",l.style.top="",l=null),m&&(m.remove(),m=null),s=!1,a.classList.remove("rf-dragging-in-process"),
document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",v),document.removeEventListener("keydown",w)}
function A(b,c){if(!l||0===o.length)return;const d=o[o.length-1];o.splice(b,1),o.splice(c,0,l),
c>=o.length-1?null!==d.nextElementSibling?a.insertBefore(l,d.nextElementSibling):a.appendChild(l):a.insertBefore(l,o[c+1]),
m&&a.insertBefore(m,l)}function B(a){return a.classList.contains("rf-item")&&(0,
j.Sd)(a)&&!a.classList.contains("rf-add-new-item")}function C(){
return!a.classList.contains("rf-sortable")||a.classList.contains("rf-sortable-disabled")}}(),function(){const a=u("div",{
className:"selector-item sort-order-popular",onclick:()=>z.OnSelectCategoryOrder("sort-order-popular")},u("div",{
className:"select-title"},(0,o.LX)(e("StartPage_SortOrder_Popular"),"")));F.orderSelectorSortPopular=a,
F.orderSelectorSort.appendChild(a);const b=u("div",{className:"selector-item sort-order-recent",
onclick:()=>z.OnSelectCategoryOrder("sort-order-recent")},u("div",{className:"select-title"},(0,
o.LX)(e("StartPage_SortOrder_Recent"),"")));F.orderSelectorSortRecent=b,F.orderSelectorSort.appendChild(b);const c=u("div",{
className:"selector-item sort-order-alphabet",onclick:()=>z.OnSelectCategoryOrder("sort-order-alphabet")},u("div",{
className:"select-title"},(0,o.LX)(e("StartPage_SortOrder_Alphabetical"),"")));F.orderSelectorSortAlphabet=c,
F.orderSelectorSort.appendChild(c);const d=u("div",{className:"selector-item sharing-center-shared-with-me",
onclick:()=>z.OnSelectCategoryOrder("sharing-center-shared-with-me")},u("div",{className:"select-title"},(0,
o.LX)(e("StartPage_Sharing_SharedWithMe"),"")));F.orderSelectorSharingCenterWithMe=d,F.orderSelectorSharingCenter.appendChild(d)
;const f=u("div",{className:"selector-item sharing-center-shared-by-me",
onclick:()=>z.OnSelectCategoryOrder("sharing-center-shared-by-me")},u("div",{className:"select-title"},(0,
o.LX)(e("StartPage_Sharing_SaredByMe"),"")));F.orderSelectorSharingCenterByMe=f,F.orderSelectorSharingCenter.appendChild(f)}()
;return{Activate:function(){if(p)return;p=!0,(0,o.l5)(E.files),(0,o.l5)(F.main),
"stand-alone"===a.page_status.extensionMode&&(H.Cancel(),I.Cancel(),J.Cancel(),(0,r.fI)(J.Execute({action:ao},null)),
null===(b=a.m_rf_api.service.onSyncSucceeded)||void 0===b||b.Add(am));var b},Deactivate:function(){if(!p)return;(0,
o.SE)(F.main),
p=!1,"stand-alone"===a.page_status.extensionMode&&(null===(b=a.m_rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(am),
H.Cancel(),I.Cancel(),J.Cancel(),N=[],M=[]);var b},UpdateView:ab,Invalidate:()=>{v=!1},IsStillActual:ac,GetIsStillActual:ad,
GetViewStyle:()=>O,SelectViewStyle:ai,SetDataItemFilter:function(a){S=a,ab(!1)},GetAllShownItems:()=>""!==P&&Y.get(P)?(0,
q.TT)(Y.get(P)).GetAllShownItems():[],ScheduleSelectItemAfterUpdate:a=>{L=a}};function ab(b){if(b&&(v=!1),
p&&"category-folders"===z.GetCategory()||(Q=""),!p)return void(R="");if(z.IsEditorShown())return
;if(z.IsSearchResultShown())return;(0,r.fI)(y.m_rf_new_menu.UpdateNewItemButton());if(function(a){
const b=ae("data-items-section-main").items
;b&&b.classList.contains("rf-sortable")&&(a?b.classList.remove("rf-sortable-disabled"):b.classList.add("rf-sortable-disabled"))
}("category-pinned"===z.GetCategory()),v)return void function(){const a=Y.get(P);if(!a)return;const b=z.GetCategory();let c,d=!1
;"category-folders"===b&&(c=z.GetFolder(),"item-type-filter-all"!==z.GetItemTypeFilter()&&(d=!0));const e=al();a.UpdateView({
folder_path:c,sort_order:z.GetSortOrder(),show_only_folders_with_items:d,data_items_filter:aj(b),preserve_scroll_position:e===R,
select_item:L}),L=void 0,R=e}();v=!0;const c=O,d=z.GetCategory(),e=z.GetSortOrder(),f=ae("data-items-section-main").items
;"category-pinned"===d?f.classList.add("rf-items-fixed-num-per-line"):f.classList.remove("rf-items-fixed-num-per-line"),
"category-sharing-center"===d?((0,o.SE)(F.authenticatorTitle),(0,o.SE)(F.orderSelectorSort),(0,o.l5)(F.viewStylePopup),(0,
o.l5)(F.orderSelectorSharingCenter),
af("data-items-section-main",!1),F.data.classList.add("sharing-data-view")):"category-authenticator"===d?((0,
o.SE)(F.orderSelectorSort),(0,o.SE)(F.orderSelectorSharingCenter),(0,o.SE)(F.viewStylePopup),(0,o.l5)(F.authenticatorTitle),
F.data.classList.remove("sharing-data-view")):((0,o.l5)(F.viewStylePopup),(0,o.l5)(F.orderSelectorSort),(0,
o.SE)(F.authenticatorTitle),(0,o.SE)(F.orderSelectorSharingCenter),af("data-items-section-main",!0),
af("data-items-section-shared-folders",!1),af("data-items-section-groups",!1),af("data-items-section-shared-files",!1),
F.data.classList.remove("sharing-data-view")),"rf-view-list"===c?(af("data-items-section-main-list-view",!0),
af("data-items-section-main",!1),af("data-items-section-shared-folders",!1),af("data-items-section-groups",!1),
af("data-items-section-shared-files",!1)):af("data-items-section-main-list-view",!1);const g=F.data;switch(c){
case"rf-view-condensed":g.classList.remove("rf-view-large"),g.classList.remove("rf-view-list"),
g.classList.add("rf-view-condensed");break;case"rf-view-list":g.classList.remove("rf-view-large"),
g.classList.remove("rf-view-condensed"),g.classList.add("rf-view-list");break;case"rf-view-large":
g.classList.remove("rf-view-list"),g.classList.remove("rf-view-condensed"),g.classList.add("rf-view-large")}const h=P
;let i,j,k="",l=!1;switch(d){case"category-pinned":j=[1,2,3,4,5,6,7],k="pinned-view";break;case"category-folders":
switch(j=[8,1,2,3,4,5,6,7],z.GetItemTypeFilter()){case"item-type-filter-logins":j=[1,3];break;case"item-type-filter-bookmarks":
j=[2];break;case"item-type-filter-logins-and-bookmarks":j=[1,3,4,2];break;case"item-type-filter-safenotes":j=[7];break
;case"item-type-filter-identities":j=[5]}switch(i=z.GetFolder(),e){case"sort-order-alphabet":-1===j.indexOf(8)&&j.push(8),
"item-type-filter-all"!==z.GetItemTypeFilter()&&(l=!0),k="rf-view-list"===c?"one-folder-list-view":"one-folder-view";break
;case"sort-order-popular":k="rf-view-list"===c?"popular-list-view":"popular-view";break;case"sort-order-recent":
k="rf-view-list"===c?"recent-list-view":"recent-view";break;default:k="popular-view"}break;case"category-authenticator":j=[1],
k="authenticator-view";break;case"category-sharing-center":
j=[8,1,2,3,4,5,6,7],k="rf-view-list"===c?"sharing-center-list-view":"sharing-center-view";break;default:j=[1,2,3,4,5,6,7],
k="popular-view"}const m=Y.get(k);if(!m)return
;P=k,h!==k&&("sharing-center-view"!==h&&"sharing-center-list-view"!==h&&""!==h&&"stand-alone"===a.page_status.extensionMode&&(N=[],
M=[],J.Cancel(),H.Cancel(),I.Cancel(),(0,r.fI)(J.Execute({action:ao},null))),T.RemoveAllElements(),V.RemoveAllElements(),
W.RemoveAllElements(),X.RemoveAllElements());const n=al();m.UpdateView({folder_path:i,item_types_to_show:j,
data_item_appearence_rules:ag(c,d),sort_order:z.GetSortOrder(),show_only_folders_with_items:l,data_items_filter:aj(d),
preserve_scroll_position:R===n,select_item:L}),L=void 0,R=n}function ac(a){if(!p)return!1;const b=a&&a.imageSize;if(void 0!==b){
if(b!==ah(O))return!1}return!0}function ad(a){const b=a||P;return function(a){return ac(a)&&P===b}}function ae(a){
const b=F.itemsSections.get(a);if(b)return b;let c,d;switch(a){case"data-items-section-shared-folders":c=u("div",{
className:"rf-items-section rf-items-section-shared-folders hidden"},u("div",{className:"rf-section-header"},u("div",{
className:"rf-section-title"},(0,o.LX)(e("StartPage_Sharing_SectionFolders"),""))),d=u("div",{className:"rf-items"}));break
;case"data-items-section-groups":c=u("div",{className:"rf-items-section rf-items-section-groups hidden"},u("div",{
className:"rf-section-header"},u("div",{className:"rf-section-title"
},(0,o.LX)(e("StartPage_Sharing_SectionGroups"),""))),d=u("div",{className:"rf-items"}));break
;case"data-items-section-shared-files":c=u("div",{className:"rf-items-section rf-items-section-shared-files hidden"},u("div",{
className:"rf-section-header"},u("div",{className:"rf-section-title"
},(0,o.LX)(e("StartPage_Sharing_SectionFiles"),""))),d=u("div",{className:"rf-items"}));break
;case"data-items-section-main-list-view":c=u("div",{className:"rf-items-section rf-items-section-main-list-view hidden"
},d=u("div",{className:"rf-items"}));break;default:c=u("div",{className:"rf-items-section rf-items-section-main"},d=u("div",{
className:"rf-items"}))}F.data.appendChild(c);const f={section:c,items:d};return F.itemsSections.set(a,f),f}function af(a,b){
const c=ae(a).section;b?(0,o.l5)(c):(0,o.SE)(c)}function ag(a,b){let c,d;"rf-view-large"===a?(c=229,
d=150):"rf-view-condensed"===a?(c=229,d=90):(c=230,d=150);const e="category-pinned"===b&&5;return{image_size:ah(a),
default_item_outer_width:c,default_item_outer_height:d,fixed_items_per_line:e}}function ah(a){let b="img16";switch(a){
case"rf-view-large":b="imgLogo";break;case"rf-view-list":b="img32";break;case"rf-view-condensed":b="img48"}return b}
function ai(a,b){const c=F.viewStyleLarge,d=F.viewStyleCompact,f=F.viewStyleList,g=F.viewStyleSelector
;switch(g.classList.remove("rf-view-style-large","rf-view-style-condensed","rf-view-style-list"),a){case"rf-view-condensed":
d.classList.add("active"),c.classList.remove("active"),f.classList.remove("active"),g.classList.add("rf-view-style-condensed"),
(0,i.YC)(g,e("StartPage_ViewStyle_Compact")),O="rf-view-condensed";break;case"rf-view-list":f.classList.add("active"),
d.classList.remove("active"),c.classList.remove("active"),g.classList.add("rf-view-style-list"),O="rf-view-list",(0,
i.YC)(g,e("StartPage_ViewStyle_List"));break;default:c.classList.add("active"),d.classList.remove("active"),
f.classList.remove("active"),g.classList.add("rf-view-style-large"),O="rf-view-large",(0,i.YC)(g,e("StartPage_ViewStyle_Grid"))}
if(b){const b="category-pinned"===z.GetCategory()?"StartPage.PinnedViewStyle":"StartPage.NonPinnedViewStyle";(0,
r.fI)(D.SetValue(b,a))}}function aj(a){return"category-pinned"===a?null:S}function ak(a){
0===a&&"category-folders"===z.GetCategory()&&""!==z.GetFolder()&&-1!==["sort-order-popular","sort-order-recent"].indexOf(z.GetLastSortOrder("category-folders"))&&Q!==z.GetFolder()&&z.SetState("state-change-event-folder-sort-order-autochanged",{
category:"category-folders",order:"sort-order-alphabet"}),"category-folders"===z.GetCategory()&&(Q=z.GetFolder())}function al(){
let a=z.GetCategory()+O;return"category-pinned"!==z.GetCategory()&&(a+=z.GetSortOrder()),
"category-folders"===z.GetCategory()&&(a+=z.GetItemTypeFilter()+z.GetFolder()),a}function am(a){an(a.pendingItems)}
function an(a){const b=200;if("category-sharing-center"!==z.GetCategory())return;let c=!1,d=!1;if((0,q.XM)(M,a.accounts)){
if(!(0,q.XM)(N,a.files)){if(K.IsExecuting())return void(N=[]);if(I.IsExecuting())return;d=!0,N=a.files}}else{
if(K.IsExecuting())return void(M=[]);if(c=!0,M=a.accounts,H.IsExecuting()){if(!(a.accounts.length>0))return;N=[],H.Cancel()}}
if(c&&a.accounts.length>0){
const a=(0,h.BG)((0,k.p)((0,h.IW)("rf-pending-dialog",e("StartPage_Category_SharingCenter"),null),(a=>function(a,c,d,f){
const g={Create:j,OnAfterShow:k,OnBeforeHide:m,Focus:n,Dispose:p};return g;async function j(g,j){const k=new Set([]),m=[]
;let n,p,q;for(const b of a){const a=b.name||"",c=(0,l.em)(a),d=`${b.senderName||""} <${b.senderEmail}>`;let e;const f=u("div",{
className:"item-row"},u("div",{className:"checkbox"},u("label",{className:"flex-cell"},u("div",{
className:"icon-section folder-icon"}),u("div",{className:"text-section"},u("div",{className:"normal-text item-name-text"
},c),u("div",{className:"hint-text sender-name-text"},d)),u("div",{className:"item-check"},e=u("input",{type:"checkbox",
checked:!0,onchange:()=>{e.checked?k.add(b):k.delete(b),0===k.size?((0,h.DG)(n),(0,h.DG)(p),n.disabled=!0,p.disabled=!0):((0,
h.aV)(n),(0,h.aV)(p),n.disabled=!1,p.disabled=!1)}}),u("div",{className:"checkbox-check"})))));k.add(b),m.push(f)}
const r=u("div",null,u("div",{className:"rf-body"},u("div",{className:"invitation-text"
},e("SharedFoldersConfirmation_Title")),u("div",{className:"items-container"},m)),u("div",{className:"rf-buttons-bar"
},q=u("button",{className:"rf-button",onclick:g},e("Cmd_Skip_Flat")),p=u("button",{className:"rf-button reject-btn",
onclick:()=>{(0,o.D$)(v,(()=>w()),b,(()=>s.Show()))}},e("SharedFolderSettings_RejectSharedFolder")),n=u("button",{
className:"rf-button default-button",onclick:()=>{(0,o.D$)(t,(()=>w()),b,(()=>s.Show()))}
},e("EmergencyAccess_Accept_Invitation_Text")))),s=(0,i.yd)(r);return r;async function t(){try{await c(Array.from(k),f),g()
}catch(a){j(a)}}async function v(){try{await d(Array.from(k),f),g()}catch(a){j(a)}}function w(){return(0,h.DG)(n),(0,h.DG)(p),
(0,h.DG)(q),n.disabled=!0,p.disabled=!0,q.disabled=!0,()=>{(0,h.aV)(n),(0,h.aV)(p),(0,h.aV)(q),n.disabled=!1,p.disabled=!1,
q.disabled=!1}}}function k(){}function m(){}function n(){}function p(){}}(M,aq,ap,a))));I.Start((async b=>{await a.Execute(b),
(0,r.fI)(J.Execute({action:ao},b))}))}else if(d&&a.files.length>0){const a=(0,h.BG)((0,k.p)((0,
h.IW)("rf-pending-dialog",e("StartPage_Category_SharingCenter"),null),(a=>function(a,c,d,f){const g={Create:j,OnAfterShow:k,
OnBeforeHide:n,Focus:p,Dispose:q};return g;async function j(g,j){const k=new Set([]),n=[];let p,q,r;for(const b of a){
const a=b.name||"",c=(0,l.em)(a);let d=""
;b.grantorName&&b.grantorEmail&&b.grantorName!==b.grantorEmail?d=`${b.grantorName} <${b.grantorEmail}>`:b.grantorName?d=b.grantorName:b.grantorEmail&&(d=b.grantorEmail)
;const e=(0,l.hF)(a);let f;const g=u("div",{className:"item-row"},u("div",{className:"checkbox"},u("label",{
className:"flex-cell"},u("div",{className:(0,s.bt)("icon-section"," ",(0,m._m)(e))}),u("div",{className:"text-section"
},u("div",{className:"normal-text item-name-text"},c),u("div",{className:"hint-text sender-name-text"},d)),u("div",{
className:"item-check"},f=u("input",{type:"checkbox",checked:!0,onchange:()=>{f.checked?k.add(b):k.delete(b),0===k.size?((0,
h.DG)(p),(0,h.DG)(q),p.disabled=!0,q.disabled=!0):((0,h.aV)(p),(0,h.aV)(q),p.disabled=!1,q.disabled=!1)}}),u("div",{
className:"checkbox-check"})))));n.push(g),k.add(b)}const t=u("div",null,u("div",{className:"rf-body"},u("div",{
className:"invitation-text"},e("SharedFilesConfirmation_Title")),u("div",{className:"items-container"},n)),u("div",{
className:"rf-buttons-bar"},r=u("button",{className:"rf-button",onclick:g},e("Cmd_Skip_Flat")),q=u("button",{
className:"rf-button reject-btn",onclick:()=>{(0,o.D$)(x,(()=>y()),b,(()=>v.Show()))}
},e("SharedFolderSettings_RejectSharedFolder")),p=u("button",{className:"rf-button default-button",onclick:()=>{(0,
o.D$)(w,(()=>y()),b,(()=>v.Show()))}},e("EmergencyAccess_Accept_Invitation_Text")))),v=(0,i.yd)(t);return t;async function w(){
try{await c(Array.from(k),f),g()}catch(a){j(a)}}async function x(){try{await d(Array.from(k),f),g()}catch(a){j(a)}}function y(){
return(0,h.DG)(p),(0,h.DG)(q),(0,h.DG)(r),p.disabled=!0,q.disabled=!0,r.disabled=!0,()=>{(0,h.aV)(p),(0,h.aV)(q),(0,h.aV)(r),
p.disabled=!1,q.disabled=!1,r.disabled=!1}}}function k(){}function n(){}function p(){}function q(){}}(N,as,ar,a))))
;H.Start((async b=>{await a.Execute(b),(0,r.fI)(J.Execute({action:ao},b))}))
}else I.IsExecuting()&&0===a.accounts.length&&(I.Cancel(),(0,r.fI)(J.Execute({action:ao},null))),
H.IsExecuting()&&0===a.files.length&&H.Cancel()}async function ao(){const b=await a.m_rf_api.service.GetSyncPendingItems(null)
;b&&an(b)}async function ap(a,b){await K.Execute({action:async()=>{
await Promise.all(a.map((a=>G.RejectSharedAccount(a.accountId,b))))}},b)}async function aq(a,b){await K.Execute({
action:async()=>{await Promise.all(a.map((a=>G.AcceptSharedAccount(a.accountId,b))))}},b)}async function ar(a,b){
await K.Execute({action:async()=>{await Promise.all(a.map((a=>G.RejectSharedFile(a,b))))}},b)}async function as(a,b){
await K.Execute({action:async()=>{await Promise.all(a.map((a=>G.AcceptSharedFile(a,b))))}},b)}}function w(a){
const b="single-data-view",c=a.m_view_id,d=a.m_data_items_list,e=a.m_get_data,f=a.m_get_folder_items_count||null,g=a.m_schedule_update_views_after_error,h=a.m_is_still_actual,i=a.m_subfolders
;let j,k,m,n,o=new Map,s=null,u=[1,2,3,4,5,6,7],v=null;const w=(0,r.tG)(),x={UpdateView:function(a){let i=!1,l="",p=!1
;void 0!==a.folder_path&&(l=a.folder_path,p=!0);l===j&&p===k||(j=l.slice(0),k=p,i=!0);u=a.item_types_to_show||u,
m=a.data_item_appearence_rules||m,v!==(a.data_items_filter||null)&&(v=a.data_items_filter||null,i=!0);const r=new Set(u);n&&(0,
q.cD)(n,r)||(i=!0);return n=r,void w.Start((async k=>{const n=c+j;d.StartUpdate({m_view_id:n,m_data_item_appearence_rules:m})
;try{await async function(g,i,j){const k=e(l),m=!k.IsUptodate();if(m&&(await k.Update(b,l,j),!h()))throw(0,t.JS)()
;const n=k.GetData()||[],p=g||m||null!==s&&s.length!==n.length||n.length>0&&0===o.size;s=n
;const q=!!v,r={},w=[],x=a.show_only_folders_with_items&&null!==f;let A;if(x||q){A=[];for(const a of n)if(8===a.type){if(f){
const b=u.filter((a=>8!==a)),d=await f(b,a.path,"get-folder-items-"+c,j);if(!h())throw(0,t.JS)();if(q||(r[a.path]=d),
d<=0)continue}A.push(a),q&&w.push(a)}else A.push(a)}else A=n;const B=w.length>0;if(await async function(b,c,e,f,g,h){if(b){
const a=new Map,b=o;for(let d=0;d<c.length;d++){const e=c[d];let g;g=8!==e.type?await y(e,h):!!f||b.has(e.path),
g&&a.set(e.path,e)}o=a}d.UpdateItems({m_view_id:g,m_items:c.filter((a=>o.has(a.path))),m_items_in_folders_count:e,
m_preserve_scroll_position:a.preserve_scroll_position})}(p,A,r,!B,i,j),B){for(const a of w){const c=await z(b,a,j)
;if(!h())throw(0,t.JS)();c?o.has(a.path)||o.set(a.path,a):o.delete(a.path)}d.UpdateItems({m_view_id:i,
m_items:A.filter((a=>o.has(a.path))),m_items_in_folders_count:r,m_preserve_scroll_position:a.preserve_scroll_position})}}(i,n,k)
}catch(p){if((0,t.r5)(p,t.ut))return void g();if((0,t.r5)(p,t.kd))return;throw p}d.FinishUpdate({m_view_id:n,
m_select_item:a.select_item})}))},GetAllShownItems:()=>Array.from(o.values())};return x;async function y(a,c){
if(!n.has(a.type))return!1;if(8===a.type)return!0;if(!k)return z(b,a,c);if(i)return(0,l.QC)(j,a.path)&&z(b,a,c);return(0,
p.fA)(a.path)===j&&z(b,a,c)}async function z(a,b,c){return!v||v.DoesItemPathMatchFilter(a,b,c)}}async function x(a,b){
const c=await(0,e.d1)(a),d=0===c||4===c||8===c;return"sharing-center-shared-by-me"===b?d:"sharing-center-shared-with-me"!==b||!d
}},26227:function(a,b,c){"use strict";c.d(b,{Q:function(){return v},g:function(){return u}})
;var d=c(41107),e=c(11834),f=c(38221),g=c(97455),h=c(65852),i=c(4234),j=c(98266),k=c(31173),l=c(63956),m=c(88262),n=c(13113),o=c(32105),p=c(4153),q=c(78440),r=c(69893),s=(c(13117),
c(91764)._);const t=200;function u(a,b,c){const u=a,v=u.rf_api,w=u.rf_manager,x=(0,
p.TT)(v.emergencyAccess),y=b,z=c,A=u.localization,B=A.LocalizeString;let C=!1,D=[],E=[];const F=[],G=(0,q.tG)(),H=(0,
h.ZP)(y.progress);let I;const J=y.newButton;J.addEventListener("click",(()=>(0,q.fI)(Q()))),(0,
d.YC)(J,B("EmergencyAccess_AddContact_Title2")),function(){let a;const b=s("div",{
className:"selector-item emergency-access-my-contacts",onclick:()=>w.OnSelectCategoryOrder("emergency-access-my-contacts")
},s("div",{className:"select-title"},B("EmergencyAccess_Contacts_Title"),a=s("span",{className:"rf-bandge-count"})));let c
;const d=s("div",{className:"selector-item emergency-access-im-contact-for",
onclick:()=>w.OnSelectCategoryOrder("emergency-access-im-contact-for")},s("div",{className:"select-title"
},B("EmergencyAccess_Testators_Title"),c=s("span",{className:"rf-bandge-count"})));y.orderSelectorContacts=b,
y.orderSelectorTestators=d,y.orderSelector.appendChild(b),y.orderSelector.appendChild(d),y.contactsBandge=a,y.testatorsBandge=c
}();return{UpdateView:K,UpdatePendingEAEventsCount:L};async function K(a,b){if(F.forEach((a=>{clearInterval(a)})),a&&C)c();else{
H.StartIfNotStarted();try{
await(0,g.en)(M,v,A),I=new Map([[0,await B("EmergencyAccess_TimeoutImmediately_Text")],[43200,await B("EmergencyAccess_Timeout12hours_Text")],[86400,await B("EmergencyAccess_Timeout24hours_Text")],[172800,await B("EmergencyAccess_Timeout2days_Text")],[259200,await B("EmergencyAccess_Timeout3days_Text")],[604800,await B("EmergencyAccess_Timeout7days_Text")],[1209600,await B("EmergencyAccess_Timeout14days_Text")],[2592e3,await B("EmergencyAccess_Timeout30days_Text")]]),
c()}catch(m){if((0,r.r5)(m,r.m))return void await K(a,b);(0,r.r5)(m,r.kd)||await(0,
e.nn)(B("EmergencyAccess_GetAccounts_Error",[(0,r.EB)(m)]))}finally{H.ScheduleStop(500)}}function c(){N(!0),N(!1),function(a){
const b=a?E:D,c=y.accounts;(0,f.Nt)(c);const n=y.noAccounts;if(0===b.length)return(0,l.l5)(n),(0,f.Nt)(n),
n.appendChild(s("div",{className:"rf-ea-no-accounts-icon"})),n.appendChild(s("div",{className:"rf-ea-no-accounts-text"
},B(a?"EmergencyAccess_TestatorsTabDescription_Text":"EmergencyAccess_Help_Hint"))),void(a||n.appendChild(s("div",{
className:"rf-no-items-btn btn-secondary",onclick:()=>(0,q.fI)(Q())},(async()=>B("EmergencyAccess_AddContact_Title2")))));(0,
l.SE)(n);const o=document.createElement("tr"),C=document.createElement("thead");C.appendChild(o),c.appendChild(C),
o.appendChild(s("td",null,B("EmergencyAccess_Name_Title"))),a||o.appendChild(s("td",{className:"rf-ea-pending-action-mark"}))
;o.appendChild(s("td",{className:"rf-status"},B("EmergencyAccess_Access_Status_Title"))),o.appendChild(s("td",{
className:"rf-timeout"},B("EmergencyAccess_Timeout_Period_Title"))),a&&o.appendChild(s("td",{
className:"rf-ea-pending-action-mark"}));o.appendChild(s("td",{className:"rf-status"
},B("EmergencyAccess_Contact_Status_Title"))),o.appendChild(s("td",{className:"rf-commands"}));const G=s("tbody",null)
;c.appendChild(G),b.forEach((b=>{G.appendChild(function(a,b){let c="invited"
;1===a.status?c="accepted":2===a.status&&(c="rejected");let n=Promise.resolve("—"),o="n-a"
;a.accessStatus&&1===a.accessStatus?(n=B("EmergencyAccess_AccessRequested_Status"),
o="requested"):a.accessStatus&&2===a.accessStatus&&(n=B("EmergencyAccess_AccessGranted_Status"),o="access-granted")
;const y=b?function(a){const b=(0,d.Kw)();0===a.status?b.AddCommand({cmdCommand:"accept-invitation",
cmdCaption:B("EmergencyAccess_Accept_Invitation_Text"),cmdCssClass:"rf-accept-invitation-cmd",cmdShowImage:!0,cmdAction:()=>{
return void(0,q.fI)((async()=>{
2===await(0,e.dD)(B("EmergencyAccess_AcceptInvitation_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.AcceptEmergencyContactInvitation(a.accountId,null)),v,A),await K(!1,!0),
await L(),(0,d.Fp)(B("EmergencyAccess_AcceptInvitation_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_AcceptInvitation_Error",[a.email,(0,r.EB)(m)]))}}}
}):1!==a.status||a.accessStatus&&(1===a.accessStatus||2===a.accessStatus)?a.accessStatus&&1===a.accessStatus?b.AddCommand({
cmdCommand:"revoke-request",cmdCaption:B("EmergencyAccess_RevokeRequest_Text"),cmdCssClass:"rf-revoke-request-cmd",
cmdShowImage:!0,cmdAction:()=>{return void(0,q.fI)((async()=>{
2===await(0,e.dD)(B("EmergencyAccess_RejectPendingAccessTestator_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.RejectEmergencyAccess(a.accountId,null)),v,A),await K(!1,!0),(0,
d.Fp)(B("EmergencyAccess_RejectPendingAccessTestator_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_RejectPendingAccessTestator_Error",[(0,r.EB)(m)]))}}}
}):a.accessStatus&&2===a.accessStatus&&b.AddCommand({cmdCommand:"get-data",cmdCssClass:"rf-get-data-cmd",cmdShowImage:!0,
cmdCaption:B("EmergencyAccess_GetData_Request_Text"),cmdAction:()=>(0,q.fI)(async function(a){const b=await l();let c=[],g=null
;const h=(0,e.BG)((0,j.p)((async(a,b,c)=>{
const d=(0,j.dK)("rf-ea-dialog rf-ea-user-data-dialog rf-modal-dialog",B("EmergencyAccess_Title"),null);return g=await d(a,b,c),
g}),(()=>function(a){let b,c,g,h,j;const l=new Map;let n="",o=null;const p={Create:t,OnAfterShow:u,OnBeforeHide:v,Focus:x,
Dispose:y};return p;async function t(c){return b=await A(),(0,q.fI)((async()=>{const e=(0,d.p8)(b);e.Show(),await a.OnLoad(c),
e.Hide(),C(a.GetDownloadedItemInfos())})()),b}function u(){K()}function v(){L()}function x(){}function y(){}async function A(){
const b=s("div",{className:"rf-body"},s("div",{className:"rf-ea-description"
},await B("EmergencyAccess_GetData_Help_Text2",[a.GetAccountData().name||a.GetAccountData().email,(0,
i.XE)(a.GetBaseTargetPath(),!0)])),s("div",{className:"rf-ea-search-box"},c=s("input",{oninput:G,className:"rf-ea-search",
placeholder:"Search",spellcheck:!1}),g=s("div",{className:"rf-ea-search-icon",onclick:H})),h=s("div",{className:"rf-ea-files"}))
;return s("div",null,b,s("div",{className:"rf-buttons-bar"},j=s("div",{className:"rf-button rf-ea-download-all-button",onclick:J
},B("EmergencyAccess_DownloadAll_Text"))))}function C(a){
0===a.length?j.classList.add("disabled-button"):j.classList.remove("disabled-button"),(0,f.Nt)(h),l.clear(),a.forEach((a=>{
const b=D(a);h.appendChild(b)}))}function D(b){const c=(0,i.em)(b.path),e=(0,i.hF)(b.path),f=b.item;let g;const h=s("div",{
className:"rf-ea-file"},s("div",{className:"rf-ea-file-title"},s("div",{className:"rf-ea-file-icon "+(0,d.Av)({path:"",type:e})
}),s("div",{className:"rf-ea-file-name"},c)),g=s("div",{className:"rf-ea-file-fields"}));if((0,q.fI)((async()=>{
if(await a.IsItemExist(b.path))h.appendChild(F(b));else{const a=E(b);h.appendChild(a),l.set(b.path,a)}})()),
7===e)g.appendChild(s("div",{className:"rf-ea-file-field"},f.m_note));else if(1===e||3===e||4===e){g.appendChild(s("div",{
className:"rf-ea-file-field rf-url"},f.m_goto_url));f.m_fields.forEach((a=>{let b;if(a.m_name===i.Aq||2===a.m_type){
const c=s("span",{className:"rf-password-value"});c.textContent=(0,d.Ss)(),b=s("div",{className:"rf-ea-file-field rf-password",
title:a.m_name},c,s("span",{className:"rf-password-icon",onclick:b=>{const e=b.currentTarget
;e.classList.contains("shown")?(e.classList.remove("shown"),c.textContent=(0,d.Ss)()):(e.classList.add("shown"),
c.textContent=a.m_value||"")}}))}else b=s("div",{className:"rf-ea-file-field",title:a.m_name},a.m_value);g.appendChild(b)}))
}else if(2===e)g.appendChild(s("div",{className:"rf-ea-file-field rf-url"},f.m_goto_url));else if(5===e||6===e){
const a=f.m_groups;if(a&&a.length&&"Person"===a[0].m_name&&a[0].m_instances&&a[0].m_instances.length){
const b=a[0].m_instances[0];for(let a=0;a<b.m_fields.length&&a<4;a++)g.appendChild(s("div",{className:"rf-ea-file-field",
title:b.m_fields[a].m_name},b.m_fields[a].m_value))}}return h}function E(a){return s("div",{
className:"rf-ea-file-download-btn rf-ea-download",onclick:()=>(0,q.fI)(I(a))},B("EmergencyAccess_Download"))}function F(b){
return s("div",{className:"rf-ea-file-download-btn rf-ea-open",onclick:()=>(0,q.fI)(a.OnOpenEditor(b.path))
},B("EmergencyAccess_Open"))}function G(){const b=c.value.trim();if(n===b)return;n=b,
b?g.classList.add("rf-ea-eraser-icon"):g.classList.remove("rf-ea-eraser-icon");const d=[],e=new RegExp(b,"i")
;a.GetDownloadedItemInfos().forEach((a=>{const b=a.path?(0,i.em)(a.path):"";null!==e.exec(b)&&d.push(a)})),C(d)}function H(){
g.classList.contains("rf-ea-eraser-icon")&&(g.classList.remove("rf-ea-eraser-icon"),c.value="",c.focus(),G())}
async function I(b){try{await a.OnDownloadItem(b);const c=l.get(b.path);if(c){const a=F(b);c.replaceWith(a),l.delete(b.path)}
}catch(m){await(0,e.nn)(B("EmergencyAccess_DownloadItem_Error",[(0,r.EB)(m)]))}}function J(){
a.GetDownloadedItemInfos().forEach((a=>{l.get(a.path)&&(0,q.fI)(I(a))}))}function K(){const b=a.GetParentModalScreen()
;function c(){if(z){const a=parseInt(z.style.left)||0;b&&(b.style.paddingRight=0===a?"":(0,k.Md)(window.innerWidth-a))}}
null==b||b.classList.add("ea-modal-screen"),o=new MutationObserver(c),z&&o.observe(z,{attributes:!0,attributeFilter:["style"]}),
w.IsInlineEditorShown()&&c()}function L(){const b=a.GetParentModalScreen();b&&(b.classList.remove("ea-modal-screen"),
b.style.paddingRight=""),null!==o&&o.disconnect()}}({GetAccountData:()=>a,GetBaseTargetPath:()=>b,GetDownloadedItemInfos:()=>c,
async OnLoad(d){try{const d=await x.GetEmergencyContactDataItems(a.accountId,b,null);c=d.items||[]}catch(m){(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_GetData_Error",[a.email,(0,r.EB)(m)])),d()}},async IsItemExist(a){const b=n(a)
;try{return await u.GetDataItemInfo(b),!0}catch(m){return!1}},async OnOpenEditor(a){const b=n(a);try{
const a=await u.GetDataItemInfo(b);u.OnOpenEditor(a,!1,!1,!1)}catch(m){await(0,e.nn)(B("EmergencyAccess_OpenItem_Error",[(0,
i.XE)(b,!1),(0,r.EB)(m)]))}},async OnDownloadItem(a){const b=n(a.path);await u.rf_api.data.PutDataItem(b,a.item,null)},
GetParentModalScreen:()=>g}))));async function l(){const b=a.name?`${a.name}(${a.email})`:a.email;return`/${(0,
i.KF)(await B("EmergencyAccess_FolderName"),null)||"Emergency Access"}/${b}`}function n(a){return b+a}await h.Execute(null)}(a))
}):b.AddCommand({cmdCommand:"request-access",cmdCaption:B("EmergencyAccess_Request_Access_Text"),
cmdCssClass:"rf-request-access-cmd",cmdShowImage:!0,cmdAction:()=>{async function b(){try{await(0,
g.en)((async()=>x.RequestEmergencyAccess(a.accountId,null)),v,A),await K(!1,!0),(0,
d.Fp)(B("EmergencyAccess_RequestAccess_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_RequestAccess_Error2",[(0,r.EB)(m)]))}}(0,q.fI)((async()=>{2===await(0,
e.dD)(B("EmergencyAccess_RequestAccess_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})())}});return b.AddCommand({cmdCommand:"reject-invitation",cmdCaption:B("EmergencyAccess_Remove_Me"),
cmdCssClass:"rf-reject-invitation-cmd",cmdShowImage:!0,cmdAction:()=>{return void(0,q.fI)((async()=>{
const c=a.name?`${a.name} (${a.email})`:a.email
;2===await(0,e.dD)(B("EmergencyAccess_RejectTestator_Question",[c]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.RejectEmergencyContactInvitation(a.accountId,null)),v,A),await K(!1,!0),
await L(),(0,d.Fp)(B("EmergencyAccess_RejectTestator_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_RejectTestator_Error",[(0,r.EB)(m)]))}}}}),b}(a):function(a){const b=(0,d.Kw)()
;a.accessStatus&&1===a.accessStatus&&(b.AddCommand({cmdCommand:"grant-access",cmdCaption:B("EmergencyAccess_GrantAccess_Title"),
cmdCssClass:"rf-grant-access-cmd",cmdShowImage:!0,cmdAction:()=>{return void(0,q.fI)((async()=>{2===await(0,
e.dD)(B("EmergencyAccess_GrantAccess_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.GrantEmergencyAccess(a.accountId,null)),v,A),await K(!1,!1),await L(),(0,
d.Fp)(B("EmergencyAccess_GrantAccess_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_GrantAccess_Error",[a.email,(0,r.EB)(m)]))}}}}),b.AddCommand({
cmdCommand:"deny-access",cmdCaption:B("EmergencyAccess_DenyAccess_Text"),cmdCssClass:"rf-deny-access-cmd",cmdShowImage:!0,
cmdAction:()=>{return void(0,q.fI)((async()=>{
2===await(0,e.dD)(B("EmergencyAccess_DenyAccess_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.RevokeEmergencyAccess(a.accountId,null)),v,A),await K(!1,!1),await L(),
(0,d.Fp)(B("EmergencyAccess_DenyAccess_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_DenyAccess_Error",[a.email,(0,r.EB)(m)]))}}}}))
;a.accessStatus&&2===a.accessStatus&&b.AddCommand({cmdCommand:"revoke-access",cmdCaption:B("EmergencyAccess_RevokeAccess_Text"),
cmdCssClass:"rf-revoke-access-cmd",cmdShowImage:!0,cmdAction:()=>{return void(0,q.fI)((async()=>{2===await(0,
e.dD)(B("EmergencyAccess_RevokeAccess_Question",[a.email]),B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()
})());async function b(){try{await(0,g.en)((async()=>x.RevokeEmergencyAccess(a.accountId,null)),v,A),await K(!1,!1),(0,
d.Fp)(B("EmergencyAccess_RevokeAccess_Notification"))}catch(m){if((0,r.r5)(m,r.m))return void await b();(0,
r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_RevokeAccess_Error",[a.email,(0,r.EB)(m)]))}}}});return b.AddCommand({
cmdCommand:"change-timeout-period",cmdCssClass:"rf-change-time-cmd",cmdShowImage:!0,
cmdCaption:B("EmergencyAccess_ChangeTimeoutPeriod_Text"),cmdAction:()=>(0,q.fI)(async function(a){const b=(0,e.BG)((0,j.p)((0,
e.IW)("rf-ea-dialog rf-ea-change-timeout-dialog",B("EmergencyAccess_EditTimeoutPeriod_Text"),null),(()=>function(a,b){let c,f,g
;const h={Create:i,OnAfterShow:j,OnBeforeHide:k,Focus:n,Dispose:o};return h;async function i(b,e){const h=s("div",null,s("div",{
className:"rf-body"},s("div",{className:"select-wrapper"},c=await P(a,u)),s("div",{className:"rf-buttons-bar"},s("div",{
className:"rf-button rf-cancel-btn",onclick:()=>e((0,r.JS)())},B("StartPage_DialogButton_Cancel")),f=s("div",{
className:"rf-button rf-ok-button default-button disabled-button",onclick:()=>p()},B("StartPage_DialogButton_Ok")))))
;return g=(0,d.yd)(h),h}function j(){u()}function k(){}function n(){}function o(){}function p(){if(!v())return
;const a=c.GetSelectedValue()||0;(0,l.D$)((()=>q(a)),(()=>w()),t,(()=>g.Show()))}async function q(a){try{
await b.OnUpdateTimeout(a),await K(!1,!1),(0,d.Fp)(B("EmergencyAccess_EditTimeoutPeriod_Notification"))}catch(m){if((0,
r.r5)(m,r.m))return void await q(a);(0,r.r5)(m,r.kd)||await(0,e.nn)(B("EmergencyAccess_EditTimeoutPeriod_Error",[(0,r.EB)(m)]))}
}function u(){v()?(0,e.aV)(f):(0,e.DG)(f)}function v(){return c.GetSelectedValue()!==a}function w(){return c.Enable(!1),(0,
e.DG)(f),x}function x(){c.Enable(!0),(0,e.aV)(f)}}((0,p.TT)(a.timeoutSecs),{OnUpdateTimeout:async c=>{await(0,
g.en)((async()=>x.UpdateEmergencyContactInfo(a.accountId,{timeoutSec:c},null)),v,A),b.Cancel()}}))));await b.Execute(null)}(a))
}),b.AddCommand({cmdCommand:"revoke-contact",cmdCssClass:0===a.status?"rf-revoke-contact-cmd":"rf-remove-contact-cmd",
cmdShowImage:!0,cmdCaption:0===a.status?B("EmergencyAccess_RevokeInvitation_Text"):B("EmergencyAccess_RemoveContact_Text"),
cmdAction:()=>{async function b(){try{await(0,g.en)((async()=>x.RevokeEmergencyContact(a.accountId,!1,null)),v,A),
await K(!1,!1),
(0,d.Fp)(0===a.status?B("EmergencyAccess_RevokeContactInvitation_Notification"):B("EmergencyAccess_RemoveContact_Notification"))
}catch(m){if((0,r.r5)(m,r.m))return void await b()
;(0,r.r5)(m,r.kd)||await(0,e.nn)(0===a.status?B("EmergencyAccess_RevokeContactInvitation_Error",[a.email,(0,
r.EB)(m)]):B("EmergencyAccess_RemoveContact_Error",[a.email,(0,r.EB)(m)]))}}(0,q.fI)((async()=>{
const c=0===a.status?B("EmergencyAccess_RevokeContactInvitation_Question2",[a.email]):B("EmergencyAccess_RemoveContact_Question2",[a.email])
;2===await(0,e.dD)(c,B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await b()})())}}),b}(a);let C,D,E
;const G=s("td",{className:"rf-ea-pending-action-mark"});let H;const J=s("tr",{
className:"rf-ea-account rf-item "+(b?"rf-ea-contact":"rf-ea-testator")},s("td",{className:"rf-title"},s("div",{
className:"rf-name"},a.name),s("div",{className:"rf-email"},a.email)),b?null:G,C=s("td",{
className:"rf-status rf-access-status "+o},n),D=s("td",{className:"rf-timeout"},I.get((0,
p.TT)(a.timeoutSecs))),b?G:null,E=s("td",{className:"rf-status rf-contact-status "+c},M()),s("td",{className:"rf-commands"
},H=s("div",{className:"rf-item-menu rf-cmdbutton auto-hide",onclick:()=>{const a=(0,f.VC)(H),b={clientX:a.left,
clientY:a.top+H.offsetHeight};(0,q.fI)((0,d.Wz)({dropdownHandlerEl:J,position:b,commands:y,isContextMenu:!0,
cssClass:"commands-menu"}))}})));!b&&a.accessStatus&&1===a.accessStatus&&(D.style.fontWeight="bold",O(D,a),
F.push(setInterval((()=>{O(D,a)}),1e3)),R(C,G,a,b));b&&0===a.status&&R(E,G,a,b);return J;function M(){
const c=a.name||"",e=a.email,f=(0,h.rR)((0,p.TT)(a.statusChangedTime));let g=Promise.resolve(""),i=Promise.resolve("")
;b?0===a.status?(g=B("EmergencyAccess_Status_TestatorInvited_Tip",[c,e,f]),
i=B("EmergencyAccess_ContactInvited_Status")):1===a.status&&(g=B("EmergencyAccess_Status_TestatorAccepted_Tip",[c,e,f]),
i=B("EmergencyAccess_ContactAccepted_Status")):0===a.status?(g=B("EmergencyAccess_Status_ContactIvited_Tip",[c,e,f]),
i=B("EmergencyAccess_ContactInvited_Status")):1===a.status?(g=B("EmergencyAccess_Status_ContactAccepted_Tip",[c,e,f]),
i=B("EmergencyAccess_ContactAccepted_Status")):2===a.status&&(g=B("EmergencyAccess_Status_ContactRejected_Tip",[c,e,f]),
i=B("EmergencyAccess_ContactRejected_Status"));const j=s("div",{className:"rf-status-content"},s("div",{
className:"rf-status-icon"}),s("div",{className:"rf-status-text"},i));return(0,d.YC)(j,g),j}}(b,a))}))}(b)}}async function L(){}
async function M(){const a=await Promise.all([x.GetEmergencyContacts(null),x.GetTestators(null)])
;D=a[0].map((a=>void 0===a.status?Object.assign(Object.assign({},a),{status:0}):a)),
E=a[1].map((a=>void 0===a.status?Object.assign(Object.assign({},a),{status:0}):a)).filter((a=>2!==a.status)),C=!0}function N(a){
const b=a?y.testatorsBandge:y.contactsBandge
;null!==b&&(a&&E.length?b.textContent=`(${E.length})`:!a&&D.length?b.textContent=`(${D.length})`:(0,l.SE)(b))}function O(a,b){
let c=(0,p.TT)(b.timeoutSecs)-(Math.floor(Date.now()/1e3)-(0,p.TT)(b.accessRequestedTime));c=Math.max(0,c);let d=""
;const e=Math.floor(c/3600);c-=3600*e,d+=(e<10?"0":"")+(0,p.bf)(e)+":";const f=Math.floor(c/60);c-=60*f,d+=("00"+(0,
p.bf)(f)).slice(-2)+":",d+=("00"+(0,p.bf)(c)).slice(-2),a.textContent=d}async function P(a,b){return(0,o.l6)(a,!0,I,b,{
CustomTitleRender:(a,b,c,d)=>s("div",{className:"select-title unselectable",onclick:()=>{c&&d.ToggleDropdown()}},s("span",{
className:"title"},B("EmergencyAccess_AddContact_Timeout_Caption")),s("div",{className:"select-option selected"},b)),
seamlessDropdown:!0,fixedDropdownDirection:1})}async function Q(){const a=(0,e.BG)((0,j.p)((0,
e.IW)("rf-ea-dialog rf-ea-new-contact-dialog",B("EmergencyAccess_AddContact_Title2"),null),(()=>function(a){let b,c,f,g,h,i,j=!1
;const k=80,o={Create:p,OnAfterShow:u,OnBeforeHide:v,Focus:w,Dispose:x};return o;async function p(a,e){
const j=s("div",null,s("div",{className:"rf-body"},s("div",{className:"rf-ea-description"
},await B("EmergencyAccess_ContactsTabDescription_Text")),i=s("div",{className:"field-with-title field-border"},b=s("input",{
className:"input-field",oninput:y,onblur:z,spellcheck:!1,required:!0}),s("div",{className:"title"
},await B("EmergencyAccess_AddContact_Email_Caption"))),c=s("div",{className:"rf-field-error"}),s("div",{
className:"select-wrapper"},f=await P(172800,(()=>{}))),s("div",{className:"rf-buttons-bar"},s("div",{
className:"rf-button rf-cancel-btn",onclick:()=>e((0,r.JS)())},B("StartPage_DialogButton_Cancel")),g=s("div",{
className:"rf-button rf-ok-button default-button disabled-button",onclick:()=>A()},B("StartPage_EmergencyAccess_Invite")))))
;return h=(0,d.yd)(j),j}function u(){F()}function v(){}function w(){b.focus()}function x(){}function y(){L(),I()?D():E()}
function z(){if(!b.value)return;if(b.value.length>k)return void J(B("EmailMaxLength_Error",[k.toString()]));(0,
n.MA)(b.value).ok||J(B("EmailIncorrect_Error"))}function A(){if(!H())return;if(!I())return
;const a=b.value.trim(),c=f.GetSelectedValue()||0;(0,l.D$)((()=>C(a,c)),(()=>(L(),M())),t,(()=>h.Show()))}async function C(b,c){
try{await a.OnInvite(b,c),await K(!1,!1),(0,d.Fp)(B("EmergencyAccess_AddContact_Success_Prompt"))}catch(f){let a="";if((0,
m.dW)(f)){a=(f.httpResponse.headers||{})["x-sib-reason"]||""}(0,r.r5)(f,r.m)?await C(b,c):(0,r.r5)(f,r.Y$)||(0,
r.r5)(f,r.FN)&&"user-not-found"===a?await(0,e.nn)(B("EmergencyAccess_AddContact_NonExistingUser_Message",[b])):(0,
r.r5)(f,r.kd)||await(0,e.nn)(B("EmergencyAccess_AddContact_Error",[b,(0,r.EB)(f)]))}}function D(){G.Start((async a=>{await(0,
q.Gu)(200,a,!1),(0,e.aV)(g)}))}function E(){G.Start((async a=>{await(0,q.Gu)(200,a,!1),(0,e.DG)(g)}))}function F(){H()?(0,
e.aV)(g):(0,e.DG)(g)}function H(){return!j&&""!==b.value.trim()}function I(){const a=b.value;if(a.length>k)return!1;return!!(0,
n.MA)(a).ok}function J(a){c.classList.add("shown"),i.classList.add("error"),(0,d.$9)(c,a)}function L(){
c.classList.remove("shown"),i.classList.remove("error"),c.textContent=""}function M(){return j=!0,b.disabled=!0,f.Enable(!1),(0,
e.DG)(g),N}function N(){j=!1,b.disabled=!1,f.Enable(!0),(0,e.aV)(g)}}({OnInvite:async(b,c)=>{await(0,
g.en)((async()=>x.InviteEmergencyContact(b,!1,{timeoutSec:c},null)),v,A),a.Cancel()}}))));await a.Execute(null)}
function R(a,b,c,g){const h=c.email,i=c.name?`${c.name} (${c.email})`:c.email,j=s("div",{className:"rf-ea-pending-action"
},g?s("fragment",null,s("div",{className:"rf-ea-pending-action-desc"
},B("EmergencyAccess_Pending_InvitationReceived_Title")),k("accept",B("EmergencyAccess_Accept_Invitation_Text"),B("EmergencyAccess_AcceptInvitation_Question",[h]),B("EmergencyAccess_AcceptInvitation_Notification"),(a=>B("EmergencyAccess_AcceptInvitation_Error",[h,a])),(()=>x.AcceptEmergencyContactInvitation(c.accountId,null))),k("reject",B("EmergencyAccess_Remove_Me"),B("EmergencyAccess_RejectTestator_Question",[i]),B("EmergencyAccess_RejectTestator_Notification"),(a=>B("EmergencyAccess_RejectTestator_Error",[a])),(()=>x.RejectEmergencyContactInvitation(c.accountId,null)))):s("fragment",null,s("div",{
className:"rf-ea-pending-action-desc"
},B("EmergencyAccess_Pending_AccessRequested_Title")),k("grant",B("EmergencyAccess_GrantAccess_Title"),B("EmergencyAccess_GrantAccess_Question",[h]),B("EmergencyAccess_GrantAccess_Notification"),(a=>B("EmergencyAccess_GrantAccess_Error",[h,a])),(()=>x.GrantEmergencyAccess(c.accountId,null))),k("deny",B("EmergencyAccess_DenyAccess_Text"),B("EmergencyAccess_DenyAccess_Question",[h]),B("EmergencyAccess_DenyAccess_Notification"),(a=>B("EmergencyAccess_DenyAccess_Error",[h,a])),(()=>x.RevokeEmergencyAccess(c.accountId,null)))))
;function k(a,b,c,f,g,h){const i=s("div",{className:"rf-ea-pending-action-btn rf-ea-pending-action-"+a,role:"button",tabIndex:0,
onclick:()=>{(0,q.fI)((async()=>{
2===await(0,e.dD)(c,B("StartPage_DialogButton_Yes"),B("StartPage_DialogButton_No"))&&await l(f,g,h)})())}});return(0,d.YC)(i,b),
i}
return(0,f.Nt)(a),a.appendChild(j),b.classList.add("rf-shown"),void b.appendChild(s("div",null,B("EmergencyAccess_Pending_Action")))
;async function l(a,b,c){try{await c(),await K(!1,g),await L(),(0,d.Fp)(a)}catch(f){if((0,
r.r5)(f,r.m))return void await l(a,b,c);(0,r.r5)(f,r.kd)||await(0,e.nn)(b((0,r.EB)(f)))}}}}function v(a,b){let c=!1,f=!1
;const g=a,h=b,i=(0,p.TT)(g.rf_api.emergencyAccess),k=(0,q.tG)(),m=(0,q.tG)(),n=(0,q.h1)(),r=(0,q.h1)();let u=[],v=[]
;const w=a.localization.LocalizeString;return{Activate:function(){if(c)return;c=!0,(0,l.l5)(h.files),(0,
l.l5)(h.emergencyAccess.main),"stand-alone"===a.page_status.extensionMode&&((0,q.fI)(n.Execute({action:x},null)),
null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Add(y));var b},Deactivate:function(){if(!c)return;c=!1,(0,
l.SE)(h.emergencyAccess.main),"stand-alone"===a.page_status.extensionMode&&(u=[],v=[],
null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(y),k.Cancel(),m.Cancel());var b},UpdateView:function(a){
const b=g.rf_manager.GetController(1);if(g.GetPolicies().DisableEmergencyAccess)return b.ShowSelector(10,!1,null),
void(c&&g.rf_manager.OnSelectCategory("category-folders"));b.ShowSelector(10,!0,null);a&&(f=!1);if(!c)return
;if(g.rf_manager.IsEditorShown())return;if(g.rf_manager.IsSearchResultShown())return;(0,
q.fI)(g.GetEmergencyAccess().UpdateView(f,"emergency-access-im-contact-for"===g.rf_manager.GetSortOrder())),f=!0},
Invalidate:()=>{f=!1},IsStillActual:()=>c,GetIsStillActual:function(){return function(){return c}}};async function x(){
const b=await a.rf_api.service.GetSyncPendingItems(null);b&&z(b)}function y(a){z(a.pendingItems)}function z(a){
if(a.emergencyAccess.length>0){let b=!1,c=!1;const f=[],g=[]
;for(const d of a.emergencyAccess)1===d.status&&1===d.accessStatus?g.push(d):f.push(d);if((0,p.XM)(v,g)){if(!(0,p.XM)(u,f)){
if(r.IsExecuting())return void(u=[]);if(m.IsExecuting())return;b=!0,u=f}}else{if(r.IsExecuting())return void(v=[]);if(c=!0,v=g,
k.IsExecuting()){if(!(g.length>0))return;u=[],k.Cancel()}}if(c&&g.length>0){const a=(0,e.BG)((0,j.p)((0,
e.IW)("rf-pending-dialog rf-ea-request-pending",w("StartPage_Category_EmergencyAccess"),null),(a=>function(a,b,c,f){const g={
Create:h,OnAfterShow:i,OnBeforeHide:j,Focus:k,Dispose:m};return g;async function h(g,h){const i=new Set,j=[];let k,m,n
;for(const b of a){let a;const c=s("div",{className:"item-row"},a=s(o.b_,{text:`${b.name||""} (${b.email})`,checked:!0,
onchange:()=>{a.GetChecked()?i.add(b):i.delete(b),0===i.size?((0,e.DG)(k),(0,e.DG)(m),k.disabled=!0,m.disabled=!0):((0,e.aV)(k),
(0,e.aV)(m),k.disabled=!1,m.disabled=!1)}}));j.push(c),i.add(b)}const p=s("div",null,s("div",{className:"rf-body"},s("div",{
className:"invitation-text"},w("EmergencyAccessDataAccessConfirmationDescription_Text")),s("div",{className:"items-container"
},j)),s("div",{className:"rf-buttons-bar"},n=s("button",{className:"rf-button",onclick:g},w("Cmd_Later_Flat")),m=s("button",{
className:"rf-button reject-btn",onclick:()=>{(0,l.D$)(u,(()=>v()),t,(()=>q.Show()))}
},w("EmergencyAccess_DenyAccess_Text")),k=s("button",{className:"rf-button default-button",onclick:()=>{(0,
l.D$)(r,(()=>v()),t,(()=>q.Show()))}},w("EmergencyAccess_GrantAccess_Title")))),q=(0,d.yd)(p);return p;async function r(){try{
await b(Array.from(i),f),g()}catch(a){h(a)}}async function u(){try{await c(Array.from(i),f),g()}catch(a){h(a)}}function v(){
return(0,e.DG)(k),(0,e.DG)(m),(0,e.DG)(n),k.disabled=!0,m.disabled=!0,n.disabled=!0,()=>{(0,e.aV)(k),(0,e.aV)(m),(0,e.aV)(n),
k.disabled=!1,m.disabled=!1,n.disabled=!1}}}function i(){}function j(){}function k(){}function m(){}}(g,A,B,a))))
;m.Start((async b=>{await a.Execute(b),(0,q.fI)(n.Execute({action:x},b))}))}else if(b&&f.length>0){const a=(0,e.BG)((0,j.p)((0,
e.IW)("rf-pending-dialog",w("StartPage_Category_EmergencyAccess"),null),(a=>function(a,b,c,f){const g={Create:h,OnAfterShow:i,
OnBeforeHide:j,Focus:k,Dispose:m};return g;async function h(g,h){const i=new Set,j=[];let k,m,n;for(const b of a){let a
;const c=s("div",{className:"item-row"},a=s(o.b_,{text:`${b.name||""} (${b.email})`,checked:!0,onchange:()=>{
a.GetChecked()?i.add(b):i.delete(b),0===i.size?((0,e.DG)(k),(0,e.DG)(m),k.disabled=!0,m.disabled=!0):((0,e.aV)(k),(0,e.aV)(m),
k.disabled=!1,m.disabled=!1)}}));j.push(c),i.add(b)}const p=s("div",null,s("div",{className:"rf-body"},s("div",{
className:"invitation-text"},await w("EmergencyAccessContactConfirmationDescription_Text")),s("div",{className:"items-container"
},j)),s("div",{className:"rf-buttons-bar"},n=s("button",{className:"rf-button",onclick:g},w("Cmd_Later_Flat")),m=s("button",{
className:"rf-button reject-btn",onclick:()=>{(0,l.D$)(u,(()=>v()),t,(()=>q.Show()))}
},w("EmergencyAccess_Reject_Invitation_Text2")),k=s("button",{className:"rf-button default-button",onclick:()=>{(0,
l.D$)(r,(()=>v()),t,(()=>q.Show()))}},w("EmergencyAccess_Accept_Invitation_Text")))),q=(0,d.yd)(p);return p;async function r(){
try{await b(Array.from(i),f),g()}catch(a){h(a)}}async function u(){try{await c(Array.from(i),f),g()}catch(a){h(a)}}function v(){
return(0,e.DG)(k),(0,e.DG)(m),(0,e.DG)(n),k.disabled=!0,m.disabled=!0,n.disabled=!0,()=>{(0,e.aV)(k),(0,e.aV)(m),(0,e.aV)(n),
k.disabled=!1,m.disabled=!1,n.disabled=!1}}}function i(){}function j(){}function k(){}function m(){}}(f,C,D,a))))
;k.Start((async b=>{await a.Execute(b),(0,q.fI)(n.Execute({action:x},b))}))}else m.IsExecuting()&&0===g.length&&(m.Cancel(),(0,
q.fI)(n.Execute({action:x},null))),k.IsExecuting()&&0===f.length&&k.Cancel()}else m.Cancel(),k.Cancel()}async function A(a,b){
await r.Execute({action:async()=>{await Promise.all(a.map((a=>i.GrantEmergencyAccess(a.email,b))))}},b)}async function B(a,b){
await r.Execute({action:async()=>{await Promise.all(a.map((a=>i.RevokeEmergencyAccess(a.accountId,b))))}},b)}
async function C(a,b){await r.Execute({action:async()=>{
await Promise.all(a.map((a=>i.AcceptEmergencyContactInvitation(a.email,b))))}},b)}async function D(a,b){await r.Execute({
action:async()=>{await Promise.all(a.map((a=>i.RejectEmergencyContactInvitation(a.email,b))))}},b)}}},37042:function(a,b,c){
"use strict";c.d(b,{b:function(){return f}});var d=c(48658),e=c(55195);function f(a){const b=a,c=(0,d.Xe)(""),f={};return{
GetItemsCount:g,HasItems:async function(a,b,c,d){return await g([a],b,c,d)>0},HasFolders:async function(a,b){
const c=await h(a,b);for(const d of c)if(8===d.type)return!0;return!1},HasNonSharedFolders:async function(a){
const b=await h("has-non-shared-folders",a);for(const c of b)if(8===c.type&&!c.sharedFolder)return!0;return!1}}
;async function g(a,c,d,g){const h=function(a){let c=f[a];if(c)return c;return c=(0,e.Xp)({UpdateData:async(a,c)=>{
const d=await b.data.GetCounts(a,c),e=new Map;for(const b of d)e.set(b.type,b.count);return e},
onDataChanged:b.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>{switch(b.event){case 1:case 2:case 3:case 5:case 7:case 8:
case 10:return!0}return!1}}),f[a]=c,c}(c);h.IsUptodate()||await h.Update(d,c,g);const i=h.GetData()
;return i?a.reduce(((a,b)=>a+=i.get(b)||0),0):0}async function h(a,b){return c.IsUptodate()||await c.Update(a,"",b),
c.GetData()||[]}}},25057:function(a,b,c){"use strict";c.d(b,{I:function(){return s}})
;var d=c(13064),e=c(37367),f=c(83645),g=c(48141),h=c(4601),i=c(11834),j=c(41107),k=c(38221),l=c(4234),m=c(31173),n=c(63956),o=c(78440),p=c(69893),q=c(4153),r=c(91764)._
;function s(a,b,c,s,v,w){const x=v.LocalizeString,y=w;let z=null,A=null,B=!1,C=!1,D=!1;const E=new Set;let F=null,G=null,H=!1
;const I=new Set;let J=null;document.body.addEventListener("mousedown",(b=>{if(!C)return;const c=b.target,d=t(a)
;if(d&&c.classList.contains("rf-items")||!d&&c.classList.contains("rf-data")){const a=(0,k.VC)(c)
;if(b.clientX>c.clientWidth+a.left)return;if(b.clientY>c.clientHeight+a.top)return}(0,
k.LP)(c,"#v8 .rf-multiselect-in-process .rf-item-folder")||a.IsInlineEditorShown()&&c.classList.contains("rf-command-close-editor")||(null===(0,
k.LP)(c,"#v8 .modal-dialog-screen")||c.classList.contains("default-button"))&&(null!==(0,
k.LP)(c,"#v8 .rf-items.rf-multiselect-in-process")||null!==(0,k.LP)(c,"#v8 .context-menu-popup")||null!==(0,
k.LP)(c,"#v8 .rf-multiselect-cmdbar")?"category-security-center"!==a.GetCategory()?(0,
k.LP)(c,"#v8 .rf-items.rf-multiselect-in-process")&&null===(0,k.LP)(c,"#v8 .rf-list-item-row")&&null===(0,
k.LP)(c,"#v8 .rf-list-item-header")&&null===(0,k.LP)(c,"#v8 .rf-item")&&null===(0,
k.LP)(c,"#v8 .rf-add-new-item")&&(u(b.clientX,b.clientY-18,d)||u(b.clientX-18,b.clientY,d)||u(b.clientX-18,b.clientY-18,d)||S()):H&&(0,
k.LP)(c,".rf-security-center-item")&&b.preventDefault():S())})),document.body.addEventListener("mousemove",(b=>{if(F&&!T()){
const c=b.target;G=t(a)?(0,k.LP)(c,"#v8 .rf-list-item-row"):"category-security-center"===a.GetCategory()?(0,
k.LP)(c,".rf-security-center-item"):(0,k.LP)(c,"#v8 .rf-data-view .rf-item"),H?V():U()}})),
document.body.addEventListener("keydown",(a=>{if(I.add(a.which),C)return I.size>1?(H&&U(),
void(H=!1)):void(H||a.which!==k.O5.SHIFT||a.altKey||a.ctrlKey||a.metaKey||(H=!0,F&&!T()&&V()))})),
document.body.addEventListener("keyup",(a=>{I.delete(a.which),C&&(H&&U(),H=!1)})),window.addEventListener("blur",(()=>{H=!1,
I.clear()})),window.addEventListener("focus",(()=>{H=!1,I.clear()}));const K={SelectItem:async function(b){
b.classList.contains("rf-item")&&t(a)&&(b=(0,q.TT)((0,k.LP)(b,".rf-list-item-row")))
;"category-security-center"!==a.GetCategory()||a.IsSearchResultShown()||(b=(0,q.TT)((0,k.LP)(b,".rf-security-center-item")))
;const c=(0,q.TT)((0,k.Yw)(b,".rf-items"));if(H&&F&&F!==b){try{const a=await W(F,b);Y(a).forEach((a=>{
a.classList.remove("rf-multiselect-hovered"),a.classList.add("rf-multiselect-selected"),E.add((0,j.eK)(a))})),a.forEach((a=>{
E.add(a)}))}catch(d){return}b.classList.add("rf-multiselect-hovered")}else b.classList.toggle("rf-multiselect-selected")
;b.classList.contains("rf-multiselect-selected")?(F=b,E.add((0,j.eK)(b))):(F=null,E.delete((0,j.eK)(b)));E.size>0?(L(c),
await M()):S()},InitListView:function(a,b){if(z===a)return;z=a,A=b,a.removeEventListener("click",ab),
a.addEventListener("click",ab),A.removeEventListener("mousemove",ac),A.addEventListener("mousemove",ac),
A.removeEventListener("mouseleave",ad),A.addEventListener("mouseleave",ad)},UpdateItemSelection:function(a,b){
if(E.has(a)&&(b.classList.add("rf-multiselect-selected"),F)){a===(0,j.eK)(F)&&(F=b)}},IsItemSelected:function(a){
return a.classList.contains("rf-multiselect-selected")},GetSelectedItemPaths:()=>[...E],GetMenuCommands:P,Clear:S,
IsInProcess:()=>C,IsDraggingAllowed:function(){const b=a.GetCategory(),c=a.GetSortOrder()
;return C&&!H&&!a.IsSearchResultShown()&&("category-sharing-center"===b||"category-folders"===b&&"sort-order-alphabet"===c)}}
;return K;function L(c){C=!0,D=!1,y.main.classList.add("rf-multiselect-in-process"),
c.classList.add("rf-multiselect-in-process"),
(0,o.fI)(Q(E.size)),a.IsSearchResultShown()||"category-security-center"===a.GetCategory()||function(a,b,c,d){
if(a.classList.contains("rf-multiselect-draggable-initialized"))return;const e=10;let g,i,j=null,l=null;const n=60,p=15;let s=!1
;return a.addEventListener("mousedown",v),void a.classList.add("rf-multiselect-draggable-initialized");function v(a){
if(!d.IsDraggingAllowed())return;if(y(),1!==a.which)return;let b=(0,k.LP)(a.target,".rf-list-item-row");b||(b=(0,
k.LP)(a.target,".rf-item")),b&&d.IsItemSelected(b)&&(g=a.clientX,i=a.clientY,document.addEventListener("mousemove",w),
document.addEventListener("mouseup",x))}function w(b){
if(d.IsDraggingAllowed()&&1===b.which&&!(!s&&Math.abs(b.clientX-g)<e&&Math.abs(b.clientY-i)<e))return s||o(),void v(b)
;function o(){const b=window.getSelection();b&&b.removeAllRanges(),j||(j=r("div",{className:"rf-multiselect-drag-item"}),
a.appendChild(j)),j.textContent=`${d.GetSelectedItemPaths().length} files`,s=!0,a.classList.add("rf-dragging-in-process")}
function v(b){if(!s||!j)return
;const d=t(c),e=(0,k.VC)(a),g=b.clientX-e.left+(d?a.scrollLeft:0),i=b.clientY-e.top+(d?a.scrollTop:0);j.style.left=(0,
m.Md)(g-n),j.style.top=(0,m.Md)(i-p);const o=u(b.clientX,b.clientY,d)
;if(l&&l!==o&&(l.classList.remove("rf-multiselect-can-drop"),l=null),o&&o!==l){const a=(0,h.Kx)(o);a&&8===a.type?(0,
f.Xl)(a)?j.style.cursor="no-drop":(o.classList.add("rf-multiselect-can-drop"),l=o,j.style.cursor="pointer"):j.style.cursor=""}
o||(j.style.cursor="");const r=d?a:(0,q.TT)((0,k.Yw)(a,".rf-data"))
;if(r.offsetHeight<r.scrollHeight||r.offsetWidth<r.scrollWidth){const a=(0,k.VC)(r),c=b.clientX-a.left,e=b.clientY-a.top
;c<14&&(r.scrollLeft-=15),c>r.offsetWidth-24&&(r.scrollLeft+=15),e<(d?64:14)&&(r.scrollTop-=15),
e>r.offsetHeight-24&&(r.scrollTop+=15)}}}function x(){if(d.IsDraggingAllowed()){if(l){const a=(0,h.Kx)(l);a&&8===a.type&&!(0,
f.Xl)(a)&&(0,o.fI)(b.MoveOrCloneMultiselectItems(!0,d.GetSelectedItemPaths(),a.path)),d.Clear()}y()}else y()}function y(){
j&&(j.remove(),j=null),l&&(l.classList.remove("rf-multiselect-can-drop"),l=null),s=!1,
a.classList.remove("rf-dragging-in-process"),document.removeEventListener("mousemove",w),
document.removeEventListener("mouseup",x)}}(c,b,a,K);const d=R();"category-authenticator"!==a.GetCategory()&&(0,n.l5)(d),
window.ResizeObserver&&null===J&&(J=new ResizeObserver(aa),J.observe(d),aa())}async function M(){if(z)if(C){
await O()?z.classList.add("checked"):z.classList.remove("checked")}else z.classList.remove("checked")}async function N(){try{
(await X()).forEach((a=>E.add(a)))}catch(a){return}Z().forEach((a=>{
if(a.classList.contains("rf-item-folder")||a.classList.contains("rf-add-new-item")||!(0,
k.Sd)(a)&&a.getAttribute("data-invalidated")||null!==a.querySelector(".rf-item-folder"))return;const b=(0,j.eK)(a)
;b&&(a.classList.add("rf-multiselect-selected"),E.add(b))})),await M(),(0,o.fI)(Q(E.size))}async function O(){if(!C)return!1
;try{const a=await X();for(const b of a)if(!E.has(b))return!1}catch(a){return!1}return!0}async function P(){const f=(0,
j.Kw)(),g=function(){const a=[];return E.forEach((b=>{const d=c.GetDataInfo(b);d&&a.push(d)})),a}();(0,
d.Cr)(a,null)&&(f.AddCommand({cmdCommand:"multiselect-disable-user-data-breach-warning",
cmdCaption:x("Cmd_ExcludeFromSecurityScore"),cmdCssClass:"rf-menu-cmd-disable-user-data-breach-warning",cmdShowImage:!0,
cmdAction:()=>(0,o.fI)((async()=>{D=!1;const a=[...E];if(0===a.length)return void await(0,
i.nn)(v.LocalizeString("StartPage_NoSelectedItems_Error"));const c=1===a.length?`'${(0,
l.XE)(a[0],!1)}'`:await x("StartPage_SelectedItems",[(0,q.bf)(a.length),await x((0,
l.Y5)(1,!0))]),d=x("StartPage_ExcludeFromSecurityScore_Confirmation",[c]);2===await(0,
i.dD)(d,x("StartPage_DialogButton_Yes"),x("StartPage_DialogButton_No"))&&(await b.DisableSecurityWarningForMultiselectItems(!0,a),
S())})())}),f.AddSeparator(null)),(0,d.Jh)(a)&&(f.AddCommand({cmdCommand:"multiselect-enable-user-data-breach-warning",
cmdCaption:x("Cmd_IncludeToSecurityScore"),cmdCssClass:"rf-menu-cmd-enable-user-data-breach-warning",cmdShowImage:!0,
cmdAction:()=>{D=!1,(0,o.fI)((async()=>{await b.DisableSecurityWarningForMultiselectItems(!1,[...E]),S()})())}}),
f.AddSeparator(null));if(g.filter((a=>1===a.type||2===a.type)).length===g.length){const a={cmdCommand:"multiselect-batch-login",
cmdCaption:x("StartPage_Cmd_BatchLogIn"),cmdCssClass:"rf-menu-cmd-login",cmdShowImage:!0,hidden:!0};(0,h.$R)(a,g,!0,(()=>{D=!1
}))&&(f.AddCommand(a),f.AddSeparator(null))}f.AddCommand({cmdCommand:"multiselect-move",cmdCaption:x("Cmd_Move_Flat"),
cmdCssClass:"rf-menu-cmd-move",cmdShowImage:!0,cmdAction:()=>{D=!1,(0,o.fI)((0,e.ng)([...E],!0,b,v))}}),f.AddCommand({
cmdCommand:"multiselect-clone",cmdCaption:x("Cmd_Clone_Flat"),cmdCssClass:"rf-menu-cmd-clone",cmdShowImage:!0,cmdAction:()=>{
D=!1,(0,o.fI)((0,e.ng)([...E],!1,b,v))}}),f.AddCommand({cmdCommand:"multiselect-unpin",
cmdCaption:x("StartPage_Cmd_RemoveFromPinned"),cmdCssClass:"rf-menu-cmd-unpin",cmdShowImage:!0,
hidden:"category-pinned"!==a.GetCategory(),cmdAction:()=>{D=!1,(0,o.fI)((async()=>{await b.PinMultiselectItems(!1,[...E]),S()
})())}}),f.AddCommand({cmdCommand:"multiselect-delete",cmdCaption:x("Cmd_Delete_Flat"),cmdCssClass:"rf-menu-cmd-delete",
cmdShowImage:!0,cmdAction:()=>{D=!1,(0,o.fI)((0,e.TH)([...E],b,a,v))}})
;return await s.HasFolders("has-folders-multiselect-context-menu",null)||(f.ShowCommand("multiselect-move",!1),
f.ShowCommand("multiselect-clone",!1)),f}async function Q(b){const c=await P();if(!C)return;const d=c.GetSortedCommands(),e=R()
;(0,k.Nt)(e);for(const a of d){if(a.hidden)continue;if(a.separator)continue
;"multiselect-disable-user-data-breach-warning"===a.cmdCommand&&(a.cmdCaption=x("Cmd_ExcludeFromSecurityScore")),
"multiselect-enable-user-data-breach-warning"===a.cmdCommand&&(a.cmdCaption=x("Cmd_IncludeToSecurityScore"))
;l(a,!1).classList.add("cmd-framed")}e.appendChild(r("div",{className:"rf-flex-gap"}));const f={
cmdCommand:"multiselect-select-all",cmdCaption:x("StartPage_Cmd_SelectAll"),cmdCssClass:"rf-menu-cmd-select-all",
cmdShowImage:!0,cmdAction:()=>{(0,o.fI)((async()=>{const a=f.cmdElement
;a&&!a.classList.contains("rf-cmd-processing")&&(a.classList.add("rf-cmd-processing"),await N(),
a.classList.remove("rf-cmd-processing"))})())}},h={cmdCommand:"multiselect-deselect",cmdCaption:x("StartPage_Cmd_Deselect",[(0,
q.bf)(b)]),cmdCssClass:"rf-menu-cmd-deselect",cmdShowImage:!0,cmdAction:S},i=l(f,!1);return l(h,!0),
void(a.IsSearchResultShown()&&((0,n.SE)(i),(0,o.fI)((async()=>{const a=await(0,g.x3)()
;C&&i.parentElement===e&&(null===a?await(0,o.xy)(100):a.length<200&&(0,n.l5)(i))})())));function l(a,b){let c;const d=r("div",{
className:"rf-multiselect-cmd-item-image"}),f=r("div",{className:"rf-multiselect-cmd-item "+(a.cmdCssClass||"")
},b?null:d,c=r("div",{className:"rf-multiselect-cmd-item-text"}),b?d:null);return a.cmdCaption&&((0,j.$9)(c,a.cmdCaption),(0,
j.YC)(f,a.cmdCaption)),f.addEventListener("click",(b=>{a.cmdAction&&a.cmdAction(b)})),a.cmdElement=f,e.appendChild(f),f}}
function R(){let b=y.dataItems.multiselectCmdbar
;return a.IsSearchResultShown()?b=y.searchResults.multiselectCmdbar:"category-security-center"===a.GetCategory()&&(b=y.securityCenter.multiselectCmdbar),
b}function S(){C=!1,D=!1,E.clear(),F=null,G=null,H=!1,I.clear(),y.main.classList.remove("rf-multiselect-in-process"),
Z().forEach((a=>{a.classList.remove("rf-multiselect-selected","rf-multiselect-hovered")})),
document.querySelectorAll("#v8 .rf-items").forEach((a=>{a.classList.remove("rf-multiselect-in-process")})),J&&(J.disconnect(),
J=null),(0,n.SE)(R()),(0,o.fI)(M()),B&&(B=!1,z&&(0,n.SE)(z))}function T(){if(F){const a=(0,k.Yw)(F,".rf-items")
;return a&&a.classList.contains("rf-dragging-in-process")||!1}return!1}function U(){Z().forEach((a=>{
a.classList.remove("rf-multiselect-hovered")}))}function V(){G&&F&&(U(),(0,o.fI)((async()=>{try{Y(await W(F,G)).forEach((a=>{
a.classList.add("rf-multiselect-hovered")}))}catch(a){return}})()))}async function W(a,b){const c=await X(),d=(0,j.eK)(a),e=(0,
j.eK)(b);let f=c.indexOf(d),g=c.indexOf(e);return f>g&&([f,g]=[g,f]),f>=0&&g>=0&&g<c.length?c.slice(f,g+1):[]}
async function X(){let b=[];if(a.IsSearchResultShown())for(D=!0;;){const a=await(0,g.x3)();if(!C||!D)throw(0,p.JS)()
;if(null!==a){b=a;break}await(0,o.xy)(50)
}else if("category-security-center"===a.GetCategory())b=a.GetController(9).GetAllItemPaths();else{
a.GetController(3).GetAllShownItems().forEach((a=>{8!==a.type&&b.push(a.path)}))}return D=!1,b}function Y(a){const b=Z(),c=[]
;return b.forEach((b=>{const d=(0,j.eK)(b);-1!==a.indexOf(d)&&c.push(b)})),c}function Z(){
return t(a)?a.IsSearchResultShown()?Array.from(document.querySelectorAll("#v8 .rf-search-result-view .rf-items .rf-list-item-row")):Array.from(document.querySelectorAll("#v8 .rf-data-view .rf-items .rf-list-item-row")):"category-security-center"===a.GetCategory()?Array.from(document.querySelectorAll("#v8 .rf-security-center .rf-items.rf-multiselect-in-process .rf-security-center-item")):Array.from(document.querySelectorAll("#v8 .rf-data-view .rf-items-section-main .rf-items .rf-item"))
}function aa(){const b=R(),c=b.offsetWidth;let d=850,e=730;"category-pinned"===a.GetCategory()?(d=980,
e=820):"category-security-center"===a.GetCategory()&&("security-center-compromised"===a.GetSortOrder()||"security-center-excluded"===a.GetSortOrder()?(d=1100,
e=830):(d=810,e=710)),b.classList.remove("medium","compact"),c<=e?b.classList.add("compact"):c<=d&&b.classList.add("medium")}
function ab(){(0,o.fI)((async()=>{await O()?S():(!C&&A&&L(A),await N())})())}function ac(b){if(!A||!z)return;if(C)return void(0,
n.l5)(z);const c=b.target;t(a)?(0,k.LP)(c,".rf-list-item-header")||(0,k.LP)(c,".rf-list-item-row:not(.rf-item-folder)")?(0,
n.l5)(z):(0,n.SE)(z):"category-security-center"===a.GetCategory()&&((0,k.LP)(c,".table-items")?(0,n.l5)(z):(0,n.SE)(z))}
function ad(){C?B=!0:A&&z&&(0,n.SE)(z)}}function t(a){
return a.IsSearchResultShown()||-1!==["category-folders","category-sharing-center","category-authenticator"].indexOf(a.GetCategory())&&"rf-view-list"===a.GetItemsViewStyle()
}function u(a,b,c){let d=[];var e
;document.elementsFromPoint?d=document.elementsFromPoint(a,b):(e=document)&&void 0!==e.msElementsFromPoint&&(d=Array.from(document.msElementsFromPoint(a,b)))
;for(const f of d){const a=c?"rf-list-item-row":"rf-item";if(f.classList.contains(a)&&f.matches("#v8 .rf-items ."+a))return f}
return null}},3342:function(a,b,c){"use strict";c.d(b,{C:function(){return F}})
;var d=c(41107),e=c(11834),f=c(63744),g=c(37367),h=c(89090),i=c(65852),j=c(30045),k=c(97184),l=c(12072),m=c(65239),n=c(37694),o=c(18939),p=c(47333),q=c(10637),r=c(95697),s=c(4234),t=c(73529),u=c(54811),v=c(67793),w=c(94652),x=c(12131),y=c(83382),z=c(63956),A=c(13113),B=c(78440),C=c(69893),D=c(4153),E=(c(13117),
c(91764)._);function F(a,b,c,f,q,F,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){
const Y=a,Z=b,aa=b.rfo,ab=c,ac=f,ad=q,ae=F,af=J,ag=K,ah=L,ai=M,aj=N,ak=O,al=ak.login,am=U,an=V,ao=X,ap=W
;let aq,ar=null,as=!1,at=!1;const au=Q,av=P;let aw=null;const ax=function(a,b,c,d){const f=a,g=b,h=(0,B.tG)();let i=null
;const j={Show:k,Hide:l};return j;function k(){(0,B.fI)((async()=>{if(!c.WatchForLoginStatus()){const a=await c.GetAccountInfo()
;if(2===(0,r.z)(a)){if(1===i)return;return i=1,void h.Start((async b=>G(f,a,c,d,b)))}}0!==i&&(i=0,h.Start((async a=>{
await H(f,(()=>(0,n.Qo)("setup-page",g,{OnLogin:async a=>{try{await c.OnLogin()}catch(b){(0,C.r5)(b,C.kd)||await(0,
e.nn)(`Cannot Log In: ${(0,C.EB)(b)}`)}},GetAccountDisplayInfo:c.GetAccountDisplayInfo},d)),!1,a)})))})())}function l(){
h.Cancel(),i=null}}(al,au,Object.assign(Object.assign({},(0,g.HK)(ab,Z.rfo,Y,ap)),{WatchForLoginStatus:()=>(at=!0,aq=aM(),aq),
GetAccountInfo:aL,GetAccountDisplayInfo:aK,OnLogin:async()=>null==ar?void 0:ar(null)}),ap),ay=function(a,b,c,d,f){
const g=a,h=(0,B.tG)(),i=(0,o.n)(),k={Show:l,Hide:m};return k;function l(){i.Init(g,null,[]),h.Start((async a=>{let h;try{
h=await c.ShouldShowLoadingBeforeLogin()}catch(l){if((0,C.r5)(l,C.kd))h=!1;else{if((0,C.bf)(l))return void await(0,
e.nn)(`Cannot log in: ${(0,C.EB)(l)}`);h=!1}}if(h){let b=null;if(await H(g,(()=>((0,B.fI)((async()=>{try{await c.OnLoading(a)
}finally{b&&b()}})()),(0,j._3)((async a=>(b=a,E("div",{className:"rf-loading"})))))),!1,a),b=null,a.ShouldStop())return}
if(!c.StartWatchForLoginStatus()){const b=await c.GetAccountInfo();if(2===(0,r.z)(b))return void await G(g,b,c,d,a)}
const i=await c.GetAccountDisplayInfo();let k=!1;try{k=await c.ShouldUseSSOLogin(i.userId,a)}catch(l){if((0,C.r5)(l,C.kd))return
;if((0,C.bf)(l))return void await(0,e.nn)(`Cannot log in: ${(0,C.EB)(l)}`)}if(k)try{await H(g,(()=>(0,
n.C8)("setup-page",d,i.userId,i.serverTitle,"Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.",{
ChangeAccount:c.OnChangeAccount,async SSOLogin(a){const b=(0,B.f4)(null,null,null),d=await c.GetLoginMethod(a,b)
;return await c.LoginViaSSO(a,(0,D.TT)(d.loginMethod.sso),!1,{oidcConfig:d.oidcConfig,returnUrlAdditionalFragmentParams:(0,
A.XG)(location.hash)},b),""}})),!0,a)}catch(l){(0,x.tM)(l,15)?await G(g,await c.GetAccountInfo(),c,d,a):(0,
C.r5)(l,C.kd)||await(0,e.nn)("SSO error: "+(0,C.EB)(l))}else{let h;!function(a){a[a.LoggenIn=0]="LoggenIn",
a[a.NotAllowedByLicense=1]="NotAllowedByLicense",a[a.ChangeAccount=2]="ChangeAccount"}(h||(h={}));try{await H(g,(()=>(0,
n.cx)("setup-page",!0,null,b,{GetAccountDisplayInfo:c.GetAccountDisplayInfo,OnLogin:async(a,b)=>{c.StopWhatchForLoginStatus()
;try{await c.OnLogin(a,b)}catch(l){if((0,x.tM)(l,15))return h.NotAllowedByLicense;throw c.StartWatchForLoginStatus(),l}
return 2===(0,r.z)(await c.GetAccountInfo())?h.NotAllowedByLicense:h.LoggenIn},onForgotPassword:c.OnForgotPassword,
onChangeAccount:async()=>(await c.OnChangeAccount(),h.ChangeAccount)
},d,f)),!0,a)===h.NotAllowedByLicense&&(c.StartWatchForLoginStatus(),await G(g,await c.GetAccountInfo(),c,d,a))}catch(l){(0,
C.r5)(l,C.kd)||await(0,e.nn)("Login error: "+(0,C.EB)(l))}}}))}function m(){h.Cancel(),i.UnInit()}
}(al,au,Object.assign(Object.assign({},(0,g.HK)(ab,Z.rfo,Y,ap)),{async ShouldShowLoadingBeforeLogin(){
if("stand-alone"===ah.extensionMode){if(!(1===await Z.options.GetValue("AuthenticationMethod",1)))return!1
;return!!(await Z.service.GetRfoConnectionInfo(!0)).password}return!1},StartWatchForLoginStatus:()=>(at=!0,aq=aM(),aq),
StopWhatchForLoginStatus(){at=!1,aq=null},GetAccountInfo:aL,GetAccountDisplayInfo:aK,async OnLoading(a){for(let c=0;c<10;c++){
const c=Z.service.GetGlobalStatus();if(!c.m_connected_to_server||c.m_storage_connected)return ai.UpdatePage(!0),void await(0,
B.Gu)(5e3,a);await(0,B.Gu)(1e3,a);try{await Z.data.GetInfo("",0,a)}catch(b){if((0,C.r5)(b,C.kd))return;if((0,x.tM)(b,10))return}
}},async OnLogin(a,b){await aP({password:a},b)},async OnChangeAccount(){ai.StartAccountSetup(await aJ())},
async OnForgotPassword(){throw await Y.OpenUrl({url:p.i0,newTab:!0,reuseExisting:!0},null),(0,C.JS)()},
async ShouldUseSSOLogin(a,b){if(!await Z.options.GetValue("AccountEnterprise",!0))return!1
;return"sso"===(await aQ(a,b)).loginMethod.type},GetLoginMethod:async(a,b)=>aQ(a,b),LoginViaSSO:aR,
async ContinueSSOLoginAfterRedirect(a,b){await aS(a,b)},async ContinueSwitchToSSOAfterRedirect(a,b){await aT(a,b)}
}),ap,ao),az=function(a,b,c,f,g,h){let i={rfoServer:null,screen:"choose"};const j=a,l=b;let m,o=null;!function(a){
a[a.LoginWithCredentials=0]="LoginWithCredentials",a[a.CreateAccount=1]="CreateAccount",
a[a.SignUpEnterprise=2]="SignUpEnterprise"}(m||(m={}));const q={Show:r,Hide:s,SetSetupDialogInfo:t};return q;function r(){
o||(o=(0,B.YZ)({action:u})),(0,B.uT)(o.Execute(null),"SetupPane:Show")}function s(){o&&(o.Cancel(),o=null)}function t(a){i=a}
async function u(a){const b="new-account"===i.screen,c=await f.ShouldCompleteAppInstallation(a);if(c)try{
if(await y(c,a))return void await f.AccountSetupFinished(b)}catch(j){(0,C.r5)(j,C.kd)||(0,x.tM)(j,10)||(0,
d.Fp)(`Cannot configure RoboForm Desktop: ${(0,C.EB)(j)}`)}const g=f.ShouldRequireInstallatonWhenSignUp()
;let h=g||"existing-account"===i.screen?m.LoginWithCredentials:"new-account"===i.screen?m.CreateAccount:await z(a);for(;;){
switch(h){case m.LoginWithCredentials:{const b=await E(a);if("create-account"===b){h=m.CreateAccount;continue}
if("not-allowsed-by-license"===b)break;if("sso-login-for-company-user"===b){try{await F(a)}catch(j){(0,C.r5)(j,C.kd)||await(0,
e.nn)((0,C.EB)(j)),h=m.LoginWithCredentials;continue}break}}break;case m.CreateAccount:{
if(g)return f.OpenInstallationInstructions(a);if(l)try{let a=await f.GetServerStartPageUrl()
;if(a)return a+="?init=setup-account-new",void location.replace(a)}catch(j){}const b=await G(a)
;if("login-with-credentials"===b){h=m.LoginWithCredentials;continue}if("logged-in"===b)break
;if("not-allowsed-by-license"===b)break;try{await J(b,a)}catch(j){(0,C.r5)(j,C.kd)||await(0,e.nn)(`Cannot log in: ${(0,
C.EB)(j)}`),h=await z(a);continue}}break;case m.SignUpEnterprise:await f.OpenSignUpEnterprise({userType:"new"},a)}break}
await f.AccountSetupFinished(b)}async function y(a,b){const e=(0,B.YZ)({action:a=>H(j,(()=>(0,d.ES)()),!1,a)});(0,
B.fI)(e.Execute(b));try{return await f.CompleteAccountTransition(null,b),!0}catch(i){if(!(0,x.tM)(i,1))throw i}finally{
e.Cancel()}if(a.userId&&await f.ShouldUseSSOLogin(a.userId,b))return await H(j,(()=>(0,
n.C8)("setup-page",g,a.userId||"",I(a.serverUrl||v.s8),"Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.",{
ChangeAccount:null,async SSOLogin(a){const c=await f.GetLoginMethod(a,b);return await f.LoginViaSSO(a,(0,
D.TT)(c.loginMethod.sso),!0,{oidcConfig:c.oidcConfig,returnUrlAdditionalFragmentParams:(0,A.XG)(location.hash)},b),""}})),!0,b),
!0;return await H(j,(()=>(0,n.cx)("setup-page",!1,null,c,{GetAccountDisplayInfo:async()=>({userId:a.userId||"",
serverTitle:I(a.serverUrl||v.s8)}),OnLogin:async(a,b)=>(await f.CompleteAccountTransition(a,b),!0),onForgotPassword:async()=>{
f.OnOpenUrl(p.i0)},onChangeAccount:async()=>!1},g,h)),!0,b)}async function z(a){return H(j,(()=>(0,k.iz)("setup-page",g,K(),c,{
OnCreateNewAccount:a=>a(m.CreateAccount),OnSignUpEnterprise:a=>a(m.SignUpEnterprise),
OnLoginWithExistingAccount:a=>a(m.LoginWithCredentials)})),!1,a)}async function E(a){return H(j,(()=>(0,
k.JR)("setup-page",g,K(),c,{OnLogin:async(a,b,c)=>{try{await f.Login(i.rfoServer||"",a,b,c)}catch(d){if((0,
x.tM)(d,15))return"not-allowsed-by-license";throw d}return 0},OnSSOLoginForCompanyUser:()=>"sso-login-for-company-user",
OnCreateNewAccount:()=>"create-account",OnSignUpEnterprise:()=>f.OpenSignUpEnterprise({userType:"new"},a),
OnForgotPassword:()=>f.OnOpenUrl(p.i0)})),!0,a)}async function F(a){let b,c,e,k=null;for(;;){b=await H(j,(()=>(0,
n.B0)(g,b,K(),e)),!0,a);try{k=await m(),c=await f.GetLoginMethod(b,a);break}catch(o){e=(0,
C.r5)(o)?o.description:await g.LocalizeString("Passw_InvalidMail")}finally{null==k||k(),k=null}}e=void 0
;const l=await g.LocalizeString("Passw_Generic_Header");switch(c.loginMethod.type){case"mp":await H(j,(()=>(0,
n.kg)("setup-page login-dialog",l,{async OnOk(a,c){await f.Login(i.rfoServer||"",b,a,c)}},g,h)),!0,a);break;case"sso":
if(void 0===c.loginMethod.sso)throw(0,C.ZU)(C.V2,"Incorrect login method");k=await m();try{
await f.LoginViaSSO(b,c.loginMethod.sso,!0,{oidcConfig:c.oidcConfig,returnUrlAdditionalFragmentParams:(0,A.XG)(location.hash)
},a)}finally{null==k||k(),k=null}break;default:throw(0,C.ZU)(C.V2,`Unknown login method to set: ${c.loginMethod.type}`)}
async function m(){const b=(0,B.YZ)({action:a=>H(j,(()=>(0,d.ES)()),!1,a)});return(0,B.fI)(b.Execute(a)),()=>{b.Cancel()}}}
async function G(a){let b=!0;return H(j,(()=>{return(0,k.tw)("setup-page",g,K(),{IsPasswordBreached:f.IsPasswordCompromised,
OnCreateNewAccount:a,OnHaveAccount:a=>a("login-with-credentials"),OnOpenTerms:()=>f.OnOpenUrl(p.$j),
OnOpenPrivacyPolicy:()=>f.OnOpenUrl(p.Bz)});async function a(a,c,d,e){try{await f.CreateAccount(a,c,d,e)}catch(g){if((0,
w.fZ)(g)&&(0,w.UX)(g)&&b){b=!1;try{return await f.Login("",a,c,e),"logged-in"}catch(h){if((0,
x.tM)(h,15))return"not-allowsed-by-license"}}throw g}return{userId:a,password:c,email:a,fullName:d,phone:""}}}),!1,a)}
async function J(a,b){return H(j,(()=>(0,k.x4)("setup-page",g,a.userId,a.password,(async b=>{
await f.Login("",a.userId,a.password,b);try{await f.SetSuitableAuthenticationMethodAfterAccountCreation(a.password,b)}catch(c){
(0,C.r5)(c,C.kd)||await(0,e.nn)(`Cannot set account settings: ${(0,C.EB)(c)}`)}try{
await f.CreateInitialIdentity(a.fullName,a.email,a.phone,b)}catch(c){(0,C.r5)(c,C.kd)||await(0,
e.nn)(`Cannot create Initial Identity: ${(0,C.EB)(c)}`)}}))),!1,b)}function K(){return I(i.rfoServer||v.s8)}
}(al,"local"===ah.type,au,{async CreateAccount(a,b,c,d){if(ah.testRoboFormSetup){await(0,B.Gu)(5e3,d);try{
await(null==am?void 0:am.AccountCreated(a,d))}catch(h){}return}const e={},f=await ap.GetLanguageTag(d);f&&(e.language=(0,
y.YW)(f)),c&&(e.name=c);const g=(0,i.gV)();if(g)e.affId=g;else{const{AffId:a}=await Z.options.Get({AffId:""});a&&(e.affId=a)}
await(0,D.TT)(Z.rfo).CreateAccount(a,b,e,d);try{await(null==am?void 0:am.AccountCreated(a,d))}catch(h){}},
IsPasswordCompromised:av.IsPasswordCompromised,async Login(a,b,c,d){await aP({server:a,email:b,password:c},d)},
async ShouldUseSSOLogin(a,b){if(!await Z.options.GetValue("AccountEnterprise",!0))return!1
;return"sso"===(await aQ(a,b)).loginMethod.type},GetLoginMethod:aQ,LoginViaSSO:aR,ContinueSSOLoginAfterRedirect:aS,
async ContinueSwitchToSSOAfterRedirect(a,b){await aT(a,b)},async SetSuitableAuthenticationMethodAfterAccountCreation(a,b){
if("use-native"===ah.extensionMode){
await Z.options.GetValue("AccountEnterprise",!1)||(await Z.settings.SetValue("AuthenticationMethod",1),await(0,
p.qj)(Z.settings,1),await Z.service.StorePasswordInSystemProtectedStorage(a,b))}},async CreateInitialIdentity(a,b,c,d){
if(!await(0,u.h$)(Z.policies))return;const e=await(0,u.lb)(an,ap,d),f=(0,u.Pq)(a,b,c,e),g=(0,p.eQ)(f,{}),h="/"+(0,s.wE)(5,0)
;await(0,u.Oe)(h,g,Z.data,d)},async ShouldCompleteAppInstallation(a){if("stand-alone"===ah.mode)return null
;if(!ah.isDesktopAppSetupWithAccountInfoFromExtensionSupported)return null;try{
if((await Z.service.GetRFOnlineUserId()).userId)return null}catch(b){if(!(0,C.r5)(b,C.Y$))return null}try{
return await Y.CallBackgroundScript("GetAccountConnectionInfoStoredInExtension",null,a)}catch(b){return(0,C.r5)(b,C.kd)||(0,
d.Fp)(`Cannot get connection info: ${(0,C.EB)(b)}`),null}},async CompleteAccountTransition(a,b){
await Y.CallBackgroundScript("SetupDesktopAppWithAccountInfoFromExtension",null,b,a)},OnOpenUrl(a){(0,B.fI)(Y.OpenUrl({url:a,
newTab:!0},null))},GetServerStartPageUrl:async()=>S(),async AccountSetupFinished(b){let c=!1
;if(ag&&b&&"local"!==ah.type&&await(0,p.Bt)(ag,(()=>(c=!0,"")),null),c)try{
await a.CallBackgroundScript("ReloadBrowserTabWithLocalWebPage",null,null,"start-page","")}catch(d){}ai.OnAccountSetupFinished()
},OpenSignUpEnterprise:async(a,b)=>ab.OpenSignUpEnterprise(a,b),
ShouldRequireInstallatonWhenSignUp:()=>null!==T&&"rfo"===L.type&&"stand-alone"===L.mode,OpenInstallationInstructions(){
if(null===T)throw(0,x.rb)(9,"Cannot open installation instruction page: Not Implemented");return T()}},ap,ao),aA={
GetCurrentPassword:()=>aw,GetMasterPasswordRestrictons:async()=>(0,u.dt)(Z.policies),
IsPasswordCompromised:av.IsPasswordCompromised,async WasNewMasterPasswordAlreadyUsed(a,b,c){
if(!await Z.options.GetValue("AccountEnterprise",!1))return!1;const d=await Z.policies.GetValue("EnforceMPHistory",0)
;if(0===d)return!1;try{return await Z.service.WasNewMasterPasswordAlreadyUsed(a,b,d,c)}catch(e){if((0,x.tM)(e,9)||(0,
x.tM)(e,7))return!1;throw e}},async ChangeMasterPassword(a,b,c){await(0,D.TT)(Z.rfo).ChangeAccountPassword(a,b,c)},
async Login(a,b){await aP({password:a},b)}},aB={GetCurrentLoginMethod:aQ,GetCurrentPassword:()=>aw,
IsMasterPassword:(a,b)=>Z.service.IsMasterPassword(a,b),SSOLoginAndGetAccountLoginData(a,b,c,d,e){const f=ac();if(!f)throw x.lU
;return f.SSOLoginAndGetAccountLoginData(a,b,c,d,e)},GetAccountInfo:async a=>Z.service.GetRoboFormAccountInfo(a),
GetMasterPasswordRestrictons:async()=>(0,u.dt)(Z.policies),IsPasswordCompromised:av.IsPasswordCompromised,
async WasNewMasterPasswordAlreadyUsed(a,b,c){if(!await Z.options.GetValue("AccountEnterprise",!1))return!1
;const d=await Z.policies.GetValue("EnforceMPHistory",0);if(0===d)return!1;try{
return await Z.service.WasNewMasterPasswordAlreadyUsed(a,b,d,c)}catch(e){if((0,x.tM)(e,9)||(0,x.tM)(e,7))return!1;throw e}},
async ChangeLoginMethodToMasterPassword(a,b,c,d,e){var f;if(!ae)throw x.lU
;await(null===(f=ae())||void 0===f?void 0:f.ChangeLoginMethodToMasterPassword(a,c,d,b,e))},
SkipLoginMethodSwitching:aa.SkipLoginMethodSwitching,async ChangeLoginMethodToSSO(a,b,c,d,e){const f=ae();if(!f)throw(0,
x.rb)(9,"Login Method switching is not implemented. Please update or try different client")
;return f.ChangeLoginMethodToSSO(a,b,c,d,e)},async Login(a,b){await aP({password:a},b)},SyncInBackground:ab.SyncInBackground
},aC={FallbackOnLoginPage(){(0,h.$)(ay,aH)},IsMasterPassword:(a,b)=>Z.service.IsMasterPassword(a,b),
ContinueSSOLoginAndGetAccountLoginData(a,b){const c=ad();if(!c)throw x.lU;return c.ContinueSSOAndGetAccountLoginData(a,b)},
GetMasterPasswordRestrictons:async()=>(0,u.dt)(Z.policies),IsPasswordCompromised:av.IsPasswordCompromised,
async WasNewMasterPasswordAlreadyUsed(a,b,c){if(!await Z.options.GetValue("AccountEnterprise",!1))return!1
;const d=await Z.policies.GetValue("EnforceMPHistory",0);if(0===d)return!1;try{
return await Z.service.WasNewMasterPasswordAlreadyUsed(a,b,d,c)}catch(e){if((0,x.tM)(e,9)||(0,x.tM)(e,7))return!1;throw e}},
async ChangeLoginMethodToMasterPassword(a,b,c,d,e){var f;if(!ae)throw x.lU
;await(null===(f=ae())||void 0===f?void 0:f.ChangeLoginMethodToMasterPassword(a,c,d,b,e))},
async ChangeLoginMethodToSSO(a,b,c,d,e){const f=ae()
;if(!f)throw(0,x.rb)(9,"Login Method switching is not implemented. Please update or try different client")
;return f.ChangeLoginMethodToSSO(a,b,c,d,e)},async Login(a,b,c){await aP({email:a,password:b},c)},
ContinueSwitchToSSOAfterRedirect:aT},aD=function(a,b,c){const d=a,e=c,f=(0,o.n)();let g=null;const h={Show:i,Hide:j};return h
;function i(){f.Init(d,null,[]),g||(g=(0,B.YZ)({action:k})),(0,B.uT)(g.Execute(null),"ChangeMasterPasswordPane:Show")}
function j(){f.UnInit(),g&&(g.Cancel(),g=null)}async function k(a){await f.ShowViewAndWaitResult((0,
l.qz)(b.GetCurrentPassword(),await b.GetMasterPasswordRestrictons(),"setup-page",{IsPasswordCompromised:b.IsPasswordCompromised,
WasNewMasterPasswordAlreadyUsed:b.WasNewMasterPasswordAlreadyUsed,ChangeMasterPassword:b.ChangeMasterPassword,Login:b.Login
},e,a),!1,a),f.UnInit()}}(al,aA,ap),aE=function(a,b,c,d){const f=a,g=c,h=d,i=(0,o.n)();let j=null;const k={Show:l,Hide:n}
;return k;function l(){i.Init(f,null,[]),j||(j=(0,B.YZ)({action:p})),(0,B.uT)(j.Execute(null),"ChangeLoginMethodPane:Show")}
function n(){i.UnInit(),j&&(j.Cancel(),j=null)}async function p(a){try{
const c=b.GetCurrentPassword(),d=await b.GetAccountInfo(a);if(!d.email||!d.loginMethodToSwitch)throw(0,
C.ZU)(C.V2,"Unexpected error: cannot get information about account. Please try again or contact support if error is persistent")
;const e=await b.GetCurrentLoginMethod(d.email,a),f={loginMethodToSwitch:d.loginMethodToSwitch,oidcConfig:d.oidcConfig}
;await i.ShowViewAndWaitResult((0,
m.b)(d.email,c,await b.GetMasterPasswordRestrictons(),e.loginMethod,e.oidcConfig||null,d.loginMethodToSwitch,d.oidcConfig||null,d.canSkipLoginMethodToSwitch||!1,(0,
A.XG)(location.hash),f,"setup-page",b,g,h,a),!1,a)}catch(c){(0,C.au)(c),await(0,e.nn)((0,C.EB)(c)),await p(a)}}
}(al,aB,ap,ao),aF=function(a,b,c){const f=a,g=c,h=(0,o.n)();let i=null;const j={Show:k,Hide:m};return j;function k(){
h.Init(f,null,[]),i||(i=(0,B.YZ)({action:n})),(0,B.uT)(i.Execute(null),"HandleSSORedirectPane:Show")}function m(){h.UnInit(),
i&&(i.Cancel(),i=null)}async function n(a){const i=(0,B.YZ)({action:a=>H(f,(()=>(0,d.ES)()),!1,a)});try{(0,B.fI)(i.Execute(a))
;const d=(0,t.nn)(location.href),e=location.href;switch(location.hash=(0,t.Lq)(location.hash),d){case t.pM.Login:{
const d=await b.ContinueSSOLoginAndGetAccountLoginData(e,a);let f=null;if(d.clientData&&(f=JSON.parse(d.clientData)),
!d.email||!d.password)throw(0,C.ZU)(C.rS,"Incorect login data. Please try again.");if(f&&f.loginMethodToSwitch){
const e=f.loginMethodToSwitch;switch(f.loginMethodToSwitch.type){case"mp":{i.Cancel();const f=await h.ShowViewAndWaitResult((0,
l.rm)("setup-page",g,d.password,await b.GetMasterPasswordRestrictons(),{IsPasswordCompromised:b.IsPasswordCompromised,
WasNewMasterPasswordAlreadyUsed:b.WasNewMasterPasswordAlreadyUsed,OnChangeMasterPassword:async(a,c,f,g)=>{
await b.ChangeLoginMethodToMasterPassword(d.email||"",a,c,e,f),g(a)}}),!1,a);await h.ShowViewAndWaitResult((0,
l.Dn)("setup-page",c,f,{OnDone:async(a,c)=>{await b.Login(d.email||"",f,a),c()}}),!1,a);break}case"sso":
await b.ChangeLoginMethodToSSO(d.email,d.password,f.loginMethodToSwitch,{oidcConfig:f.oidcConfig,
returnUrlAdditionalFragmentParams:(0,A.XG)(location.hash)},a)}}else await b.Login(d.email,d.password,a);break}
case t.pM.Switching:await b.ContinueSwitchToSSOAfterRedirect(e,a);break;default:throw(0,
C.ZU)(C.rS,"Incorrect redirect url. Please try again")}}catch(j){(0,C.r5)(j,C.kd)||(await(0,e.nn)("SSO Error: "+(0,C.EB)(j)),
b.FallbackOnLoginPage())}finally{i.Cancel()}}}(al,aC,ap);let aG=null;const aH=[ax,ay,az,aD,aE,aF],aI=(0,d.Ou)(ak.main,R,S)
;return{Activate:function(){if(as)return;as=!0,aw=null,(0,z.SE)((0,D.TT)(ak.navigator).main),(0,z.SE)(ak.files),(0,
z.SE)(ak.header),(0,z.l5)(ak.login),(0,z.l5)(ak.loginCopyright),at=!1,aq=null,Z.data.onDataChanged.Add(aU),aG=aO(),(0,
h.$)(aG,aH),ak.main.classList.add("rf-login-page-shown");const a=aG!==az;aI.Show(a),aj.Empty(),(0,e.DN)(),(0,d.DP)(!0)},
Deactivate:function(){if(!as)return;at=!1,aq=null,Z.data.onDataChanged.Remove(aU),aG&&aG.Hide(),as=!1,aw=null,aI.Reset(),(0,
z.SE)(ak.login),(0,z.SE)(ak.loginCopyright),(0,D.TT)(ak.main).classList.remove("rf-login-page-shown"),(0,
D.TT)(ak.main).style.backgroundImage="",(0,z.l5)(ak.header)},UpdateView:function(){if(!as)return;const a=aO();aG!==a&&(aG=a,(0,
h.$)(aG,aH))},Invalidate:()=>{},IsStillActual:()=>as,GetIsStillActual:function(){return function(){return as}},
async SetAccountSetupDialogInfo(a){a||(a=await aJ()),az.SetSetupDialogInfo(a)},SetShowNativeLoginDialog(a){ar=a}}
;async function aJ(){return{rfoServer:await aN(),screen:"choose"}}async function aK(){try{
const a=await Z.service.GetRFOnlineUserId();return{userId:a.userId,serverTitle:I(a.serverUrl)}}catch(a){return{userId:"",
serverTitle:I(await aN()||v.s8)}}}async function aL(){return Z.options.Get({AccountEnterprise:!1,AccountCompanyAdmin:!1,
AccountLicenseTrial:!1,AccountClientReadOnly:!1,AccountClientBlocked:!1,AccountOneFreeDevice:!1,AccountCanSwitchToFreeMode:!1,
AccountCanSetFreeDevice:!1,AccountFreeDeviceSwitchesLeft:0,AccountInitialFreeDeviceSwitch:!1,AccountOneFreeDeviceId:"",
AccountOneFreeDeviceName:"",AccountCanSetReadonlyDevice:!1,AccountReadOnlyDevicesLimitReached:!1})}function aM(){
const a=Z.service.GetGlobalStatus();if("stand-alone"===ah.extensionMode){if(!a.m_connected_to_server||!a.m_logged_in)return!0
}else{if(!a.m_connected_to_server)return!1;if(a.m_one_file){if(!a.m_storage_connected)return!0;if(!a.m_logged_in)return!0}}
return!1}async function aN(){try{return(await Z.service.GetRfoConnectionInfo(!1)).serverUrl}catch(a){return(0,x.tM)(a,9)||(0,
x.tM)(a,7)||(0,C.r5)(a,C.V2)&&a.description.toLowerCase().indexOf("not implemented")>=0||(0,C.r5)(a,C.kd)||(0,
d.Fp)(`Cannot get server URL: ${(0,C.EB)(a)}`),null}}function aO(){
return ah.testRoboFormSetup?az:"stand-alone"===ah.extensionMode?"setup-account"===ah.status?az:"change-login-method"===ah.status?aE:"change-password"===ah.status?aD:"handle-sso-redirect"===ah.status?aF:ay:ah.isAccountSetupSupported&&"setup-account"===ah.status?az:ax
}async function aP(a,b){var c;aw=null;try{await ai.RoboFormLogIn(a,b)}catch(d){throw(0,x.u7)(d)?(0,
x.rb)(9,await W.LocalizeString("SwitchLoginMethod_NewSP_LegacyBG_Error")):d}aw=null!==(c=a.password)&&void 0!==c?c:null}
async function aQ(a,b){try{try{return await aa.GetLoginMethod2(a,b)}catch(c){if((0,x.tM)(c,9)||(0,x.tM)(c,7)||(0,C.o)(c)){
return{loginMethod:await aa.GetLoginMethod(a,b)}}throw c}}catch(c){if((0,x.tM)(c,9)||(0,x.tM)(c,7)||(0,C.o)(c)){return{
loginMethod:{type:"mp"}}}throw c}}async function aR(a,b,c,d,e){try{aw=null,await ai.RoboFormLogInViaSSO(a,b,c,d,e)}catch(f){
throw(0,x.u7)(f)?(0,x.rb)(9,await W.LocalizeString("SwitchLoginMethod_NewSP_LegacyBG_Error")):f}}async function aS(a,b){aw=null
;const c=ad();if(!c)throw(0,x.rb)(9,"SSO redirect handler is not implemented");try{
const d=await c.ContinueSSOAndGetAccountLoginData(a,b);await ai.RoboFormLogIn({email:d.email,password:d.password,
usedLoginMethodType:d.usedLoginMethodType},b)}catch(d){
throw(0,x.u7)(d)?(0,x.rb)(9,await W.LocalizeString("SwitchLoginMethod_NewSP_LegacyBG_Error")):d}}async function aT(a,b){var c
;const d=await(null===(c=af())||void 0===c?void 0:c.ContinueChangeLoginMethodToSSO(a,b));await ai.RoboFormLogIn({
email:null==d?void 0:d.email,password:null==d?void 0:d.password,usedLoginMethodType:"sso"},b)}function aU(a){if(!as)return
;let b=!1;for(const c of a)switch(c.event){case 3:case 2:case 10:case 11:case 9:b=!0}if(b&&aG&&at&&null!==aq){
aM()!==aq&&aG.Show()}}}async function G(a,b,c,d,e){if(b.AccountEnterprise&&!b.AccountCompanyAdmin)await H(a,(()=>(0,
f.Rv)(d)),!1,e);else try{a.classList.add("show-upgrade-ui"),await H(a,(()=>(0,q.J_)(!1,!1,b,d,c)),!1,e)}finally{
a.classList.remove("show-upgrade-ui")}}function H(a,b,c,d){let e=!1;return(0,B.W0)((async(d,f,g)=>{g.onTaskCancel.Add((()=>{
k((0,C.JS)())}));const h=(0,j.BQ)((async(a,b,c)=>E("div",{className:"dialog-view"
},await a.Create(b,c))),b(g)),i=await h.Create((function(a){d(a),l()}),k)
;if(!g.ShouldStop())return c&&document.addEventListener("visibilitychange",m),a.appendChild(i),e=!0,i.focus(),h.OnAfterShow(),
void h.Focus();function k(a){try{f(a)}finally{l()}}function l(){c&&document.removeEventListener("visibilitychange",m),
e&&h.OnBeforeHide(),h.Dispose(),e&&a.removeChild(i),e=!1}function m(){document.hidden||e&&h.Focus()}}),d)}function I(a){
const b=(0,A.GG)(a)?a:"https://"+a;return(0,p.sU)(b)||""}},95890:function(a,b,c){"use strict";c.d(b,{E:function(){return n},
x:function(){return o}});var d=c(48658),e=c(41107),f=c(38221),g=c(31173),h=c(63956),i=c(40371),j=c(78440),k=c(4153),l=(c(13117),
c(91764)._);const m="upgrade-stars-anim.svg";function n(a,b){let c,d,n,o=!1,p=!1
;const q=a,r=a.rf_manager,s=a.rf_items_existance,t=b,u=(0,k.TT)(b.navigator),v=(0,j.SI)(300);let w=!1
;const x=new Set,y=t.main,z=u.main;!function(){const a=t.contextMenuPopup;function b(){y.classList.add("rf-navigator-hovered"),
d()||(0,e.b2)(!1),u.upgradeSelect&&(u.upgradeSelect.style.backgroundImage="")}function c(){
y.classList.remove("rf-navigator-hovered"),d()&&(0,e.b2)(!1),u.upgradeSelect&&(0,h.hX)(m,u.upgradeSelect)}function d(){return(0,
e.DN)(z)}z.addEventListener("scroll",(()=>{d()&&(0,e.b2)(!1)})),z.addEventListener("mouseenter",(()=>{w&&b()})),
z.addEventListener("mouseleave",(a=>{if(w){if(L()){const b=a.target
;null===(0,f.LP)(b,".more-categories-select")&&z.classList.remove("rf-more-categories-shown")}
const b=a.relatedTarget&&null!==(0,f.LP)(a.relatedTarget,".context-menu-popup");d()&&b||c()}})),
a.addEventListener("mouseenter",(()=>{w&&d()&&b()})),a.addEventListener("mouseleave",(a=>{const b=a.relatedTarget&&null!==(0,
f.LP)(a.relatedTarget,".rf-navigator");w&&d()&&!b&&c()}))}();const A=(0,k.TT)(u.foldersPane);let B=!1;const C=(0,
k.TT)(u.dataFilterInput);C.addEventListener("keydown",(function(a){if(a.which===f.O5.ESCAPE)P(),a.preventDefault(),
a.stopPropagation()})),(0,h.uA)(C,(function(){C.value?(0,h.l5)(D):(0,h.SE)(D);G.onFilterChanged.CallAllSync(C.value)}),!1)
;const D=(0,k.TT)(u.dataFilterEraser);D.addEventListener("click",(function(){P()})),(0,h.SE)(D);const E=(0,k.TT)(u.foldersTree)
;E.addEventListener("scroll",(function(){(0,e.DN)(E)&&(0,e.b2)(!1)}));const F=r.GetController(2).GetFoldersTreeView()
;window.addEventListener("resize",(()=>{M(),H(null)}));const G={Activate:function(){var b;if(o)return;o=!0,(0,h.l5)(z),H(null),
R(),"stand-alone"===a.page_status.extensionMode&&(null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Add(S))},
Deactivate:function(){var b
;(0,h.SE)(z),o=!1,"stand-alone"===a.page_status.extensionMode&&(null===(b=a.rf_api.service.onSyncSucceeded)||void 0===b||b.Remove(S))
},UpdateView:function(a){a&&(p=!1);if(!o)return;if(r.IsEditorShown())return;if((0,j.fI)(N()),(0,j.fI)(O()),p)return;p=!0,J(),(0,
j.fI)(q.GetEmergencyAccess().UpdatePendingEAEventsCount()),(0,j.fI)(async function(){
const a=await r.ShouldShowUpgradePromo(),b=u.sectionUpgrade;if(a){const a=await c();u.upgradeSelect=a,(0,f.Nt)(b),
b.appendChild(a),(0,h.l5)(b)}else(0,h.SE)(b);return;async function c(){const a=q.localization.LocalizeString;return l("div",{
className:"upgrade-select"},await d(),l("div",{className:"buttons-bar"},l("div",{className:"button learn-more-btn",onclick:()=>{
(0,j.fI)(r.ShowUpgradePromo())}},await a("StartPage_Upgrade_Button_LearnMore")),l("div",{className:"separator"}),l("div",{
className:"button upgrade-btn",onclick:()=>{(0,j.fI)(r.OnUpgrade())}},await a("Cmd_License_BuyNow"))))}async function d(){
const a=q.localization,b=a.LocalizeString,c=await q.rf_api.options.Get({AccountLicenseActive:!1,AccountLicenseExpirationTime:0,
AccountClientReadOnly:!1});if(c.AccountClientReadOnly){return l("div",{className:"text"},(0,
e.R1)(await b("StartPage_Upgrade_ReadOnlyMode_Text"),[]))}if(c.AccountLicenseActive&&c.AccountLicenseExpirationTime>0){
const d=new Date(1e3*c.AccountLicenseExpirationTime).toLocaleDateString(await a.GetLanguageTag(null),{day:"numeric",
month:"short"});return l("div",{className:"text"},(0,e.R1)(await b("StartPage_Upgrade_TrialMode_Text"),[l("span",null,d)]))}
return l("div",{className:"text"},(0,e.R1)(await b("StartPage_Upgrade_FreeMode_Text"),[]))}}())},Invalidate:()=>{p=!1},
IsStillActual:()=>o,GetIsStillActual:function(){return function(){return o}},ShowSelector:I,UpdateCategoryAndOrderSelectors:J,
Collapse:H,ToggleMoreCategories:function(){
L()?z.classList.contains("rf-more-categories-shown")?z.classList.remove("rf-more-categories-shown"):z.classList.add("rf-more-categories-shown"):z.classList.remove("rf-more-categories-shown")
},UpdateScrollMode:M,UpdateNarrowStyle:function(){let a=0;F.GetAllFoldersElements().forEach((b=>{(0,
f.Sd)(b)&&(a=Math.max(a,parseInt(b.getAttribute("data-level")||"")||0))
})),a<3?E.classList.add("narrow"):E.classList.remove("narrow")},ShowFoldersTree:function(a){if(a&&B||!a&&!B)return;M(a),a?(B=!0,
z.classList.add("rf-folders-pane-shown")):(B=!1,z.classList.remove("rf-folders-pane-shown"))
;a?u.foldersDropdownHandler.classList.add("shown-popup-menu"):(u.foldersDropdownHandler.classList.remove("shown-popup-menu"),
P());(0,e.b2)(!1),I(1,a,{slideIn:!0,slideOut:!0,onAnimationEnd:()=>{M(a)}})},SetFilterValue:function(a){C.value=a,a?(0,
h.l5)(D):(0,h.SE)(D)},onFilterChanged:(0,i.dU)()};return G;function H(a){const b=window.innerWidth,c=w;let d=c
;if(r.IsInlineEditorShown()){if(null===a)return;d=b<=920+a}else d=b<=1170
;w=d,d?y.classList.add("rf-navigator-collapsed"):(y.classList.remove("rf-navigator-collapsed"),
y.classList.remove("rf-navigator-hovered")),d!==c&&(r.GetController(2).UpdateView(!1),u.upgradeSelect&&(d?(0,
h.hX)(m,u.upgradeSelect):u.upgradeSelect.style.backgroundImage=""))}function I(a,b,c){let d=null;switch(a){case 0:case 1:
d=u.sectionFolders;break;case 2:d=u.sectionPinned;break;case 3:case 4:case 5:d=u.sectionCategories;break;case 6:
d=u.sectionWhyRoboForm;break;case 10:d=u.sectionMoreCategories}let g=null;switch(a){case 0:g=u.categoryFolders;break;case 1:
g=u.foldersPane;break;case 2:g=u.categoryPinned;break;case 3:g=u.categoryLogins;break;case 4:g=u.categoryLoginsAndBookmarks
;break;case 5:g=u.categoryBookmarks;break;case 6:g=u.categoryWhyRoboForm;break;case 10:g=u.categoryEmergencyAccess}
if(null!==d&&null!==g)if(b)(0,h.l5)(d),(0,h.l5)(g),c&&c.slideIn&&((0,e.wz)(g,300,null),c.onAnimationEnd()),x.delete(a);else{
c&&c.slideOut?(0,e.bV)(g,300,(()=>{(0,h.SE)((0,k.TT)(g)),c.onAnimationEnd()})):(0,h.SE)(g);let b=!0
;d.querySelectorAll(".selector-item").forEach((a=>{(0,f.Sd)(a)&&(b=!1)})),b&&(0,h.SE)(d),x.add(a)}}function J(){
const a=r.GetCategory(),b=r.GetSortOrder();switch(F.GetAllFoldersElements().forEach((a=>{a.classList.remove("active")})),
[u.categoryFolders,u.categoryPinned,u.categoryAll,u.categoryLogins,u.categoryBookmarks,u.categoryLoginsAndBookmarks,u.categorySafenotes,u.identity.categoryItem,u.categoryWhyRoboForm,u.categorySecurityCenter,u.categorySharingCenter,u.categoryAuthenticator,u.categoryEmergencyAccess,u.categoryMoreCategories,u.categoryPasswordGenerator].forEach((a=>{
a.classList.remove("active")})),a){case"category-pinned":u.categoryPinned.classList.add("active");break;case"category-folders":{
const a=r.GetFolder(),b=""===a?u.categoryFolders:F.GetFolderElement(a);b&&B&&b.classList.add("active")}
switch(r.GetItemTypeFilter()){case"item-type-filter-logins":u.categoryLogins.classList.add("active");break
;case"item-type-filter-bookmarks":u.categoryBookmarks.classList.add("active");break;case"item-type-filter-logins-and-bookmarks":
u.categoryLoginsAndBookmarks.classList.add("active");break;case"item-type-filter-safenotes":
u.categorySafenotes.classList.add("active");break;case"item-type-filter-identities":
u.identity.categoryItem.classList.add("active");break;default:u.categoryAll.classList.add("active")}break
;case"category-why-roboform":u.categoryWhyRoboForm.classList.add("active");break;case"category-authenticator":
u.categoryAuthenticator.classList.add("active"),u.categoryMoreCategories.classList.add("active");break
;case"category-password-generator":u.categoryPasswordGenerator.classList.add("active"),
u.categoryMoreCategories.classList.add("active");break;case"category-emergency-access":
u.categoryEmergencyAccess.classList.add("active"),u.categoryMoreCategories.classList.add("active");break
;case"category-sharing-center":u.categorySharingCenter.classList.add("active"),u.categoryMoreCategories.classList.add("active")
;break;case"category-security-center":u.categorySecurityCenter.classList.add("active"),
u.categoryMoreCategories.classList.add("active")}const c=u.categoryMoreCategories
;switch(c.classList.remove("more-categories-authenticator","more-categories-password-generator","more-categories-emergency-access","more-categories-sharing-center","more-categories-security-center"),
a){case"category-authenticator":c.classList.add("more-categories-authenticator");break;case"category-password-generator":
c.classList.add("more-categories-password-generator");break;case"category-emergency-access":
c.classList.add("more-categories-emergency-access");break;case"category-sharing-center":
c.classList.add("more-categories-sharing-center");break;case"category-security-center":
c.classList.add("more-categories-security-center")}
if("category-folders"===a?E.classList.add("active"):E.classList.remove("active"),"category-emergency-access"===a){if((0,
h.l5)(t.emergencyAccess.orderSelector),
null!==t.emergencyAccess.orderSelectorContacts&&null!==t.emergencyAccess.orderSelectorTestators)switch(t.emergencyAccess.orderSelectorContacts.classList.remove("active"),
t.emergencyAccess.orderSelectorTestators.classList.remove("active"),b){case"emergency-access-my-contacts":(0,
h.l5)(t.emergencyAccess.newButton),t.emergencyAccess.orderSelectorContacts.classList.add("active");break
;case"emergency-access-im-contact-for":
(0,h.SE)(t.emergencyAccess.newButton),t.emergencyAccess.orderSelectorTestators.classList.add("active")}
}else if("category-password-generator"===a)(0,h.l5)(t.passwordGenerator.orderSelector);else if("category-sharing-center"===a){
if((0,
h.l5)(t.dataItems.orderSelectorSharingCenter),null!==t.dataItems.orderSelectorSharingCenterWithMe&&null!==t.dataItems.orderSelectorSharingCenterByMe)switch(t.dataItems.orderSelectorSharingCenterWithMe.classList.remove("active"),
t.dataItems.orderSelectorSharingCenterByMe.classList.remove("active"),b){case"sharing-center-shared-with-me":
t.dataItems.orderSelectorSharingCenterWithMe.classList.add("active");break;case"sharing-center-shared-by-me":
t.dataItems.orderSelectorSharingCenterByMe.classList.add("active")}
}else if(("category-folders"===a||"category-pinned"===a)&&((0,h.l5)(t.dataItems.orderSelectorSort),
null!==t.dataItems.orderSelectorSortPopular&&null!==t.dataItems.orderSelectorSortRecent&&null!==t.dataItems.orderSelectorSortAlphabet&&(t.dataItems.orderSelectorSortPopular.classList.remove("active"),
t.dataItems.orderSelectorSortRecent.classList.remove("active"),t.dataItems.orderSelectorSortAlphabet.classList.remove("active"),
"category-folders"===a)))switch(b){case"sort-order-popular":t.dataItems.orderSelectorSortPopular.classList.add("active");break
;case"sort-order-recent":t.dataItems.orderSelectorSortRecent.classList.add("active");break;case"sort-order-alphabet":
t.dataItems.orderSelectorSortAlphabet.classList.add("active")}}function K(a){const b=u.flexyGap.clientHeight-10;let c=0
;[7,9,8,10].forEach((a=>{x.has(a)||c++
})),!L()&&c<=1?z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown"):a?z.classList.add("rf-more-categories-collapsed"):L()?b>50*(c-1)?z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown"):z.classList.add("rf-more-categories-collapsed"):b<=0?z.classList.add("rf-more-categories-collapsed"):z.classList.remove("rf-more-categories-collapsed","rf-more-categories-shown")
}function L(){return z.classList.contains("rf-more-categories-collapsed")}function M(a){v.Start((async()=>{
z.offsetHeight<z.scrollHeight?z.classList.add("has-vertical-scroll"):z.classList.remove("has-vertical-scroll")}))
;const b=u.flexyGap.clientHeight-10;let c=a||!1;if(void 0===a&&(c=B),!c)return A.style.maxHeight="",void K(!1)
;const d=240,e=A.clientHeight;let f=E.scrollHeight;const h=(()=>{const a=E.cloneNode(!0);a.style.position="absolute",
a.style.top="0",a.style.left="-10px",a.style.width="1px",a.style.height="auto",a.style.maxHeight="none",a.style.display="block",
z.appendChild(a);const b=a.clientHeight;return a.remove(),b})();(0===f||h<f)&&(f=h),E.offsetWidth<E.scrollWidth&&(f+=16)
;let i=e+b
;i<f+40&&(K(!0),i=e+b,i<f+40&&i<d&&(i=d)),z.clientHeight<z.scrollHeight&&i>d&&(i=Math.max(d,i-(z.scrollHeight-z.clientHeight-10))),
A.style.maxHeight=(0,g.Md)(i);const j=Math.min(f,i-40);E.style.height=(0,g.Md)(j)}async function N(){
const a=await s.HasItems(2,"","has-bookmarks-from-navigator",null),b=r.GetItemTypeFilter(),e=q.GetOptions().ShowBookmarksAndLoginsTogether&&a
;let f=!1
;if(e!==d?f=!0:(!e||"item-type-filter-logins"!==b&&"item-type-filter-bookmarks"!==b)&&(e||"item-type-filter-logins-and-bookmarks"!==b)||(f=!0),
f){let c=b;d=e,e?("item-type-filter-logins"!==b&&"item-type-filter-bookmarks"!==b||(c="item-type-filter-logins-and-bookmarks"),
I(3,!1,null),I(5,!1,null),I(4,!0,null)):("item-type-filter-logins-and-bookmarks"===b&&(c="item-type-filter-logins"),
I(3,!0,null),I(5,a,null),I(4,!1,null)),"category-folders"===r.GetCategory()&&c!==b&&r.OnSelectItemTypeFilter(c)}c!==a&&(c=a,
d||I(5,a,null),a||"item-type-filter-bookmarks"!==r.GetItemTypeFilter()||r.OnSelectItemTypeFilter("item-type-filter-logins"))}
async function O(){const b=a.rf_data_pinned;b.IsUptodate()||await b.Update("pinned-items-visibility","",null)
;const c=b.GetData(),d=c&&0!==c.length||"category-pinned"===r.GetCategory();d!==n&&(n=d,I(2,d,null))}function P(){C.value="",(0,
h.SE)(D),G.onFilterChanged.CallAllSync(C.value)}function Q(a){
a&&(a.accounts.length>0||a.files.length>0?(u.sharingBadge.textContent=`${a.accounts.length+a.files.length}`,(0,
h.l5)(u.sharingBadge),u.categorySharingCenter.classList.add("badge-shown")):((0,h.SE)(u.sharingBadge),
u.categorySharingCenter.classList.remove("badge-shown")),
a.emergencyAccess.length>0?(u.emergencyAccessBadge.textContent=`${a.emergencyAccess.length}`,(0,h.l5)(u.emergencyAccessBadge),
u.categoryEmergencyAccess.classList.add("badge-shown")):((0,h.SE)(u.emergencyAccessBadge),
u.categoryEmergencyAccess.classList.remove("badge-shown")))}function R(){"stand-alone"===a.page_status.extensionMode&&(0,
j.fI)((async()=>{const b=await a.rf_api.service.GetSyncPendingItems(null);b&&Q(b)})())}function S(a){Q(a.pendingItems)}}
function o(a,b,c,f){const g=b.LocalizeString;let i,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q
;const R=l("div",{className:"rf-navigator noselect hidden"},n=l("div",{
className:"navigator-section-folders navigator-section navigator-section-with-separator hidden"},A=l("div",{
className:"selector-item rf-folders selector-with-dropdown",onclick:()=>a.OnSelectFoldersView(!1)},z=l("div",{
className:"dropdown-handler select-ext",role:"button",tabIndex:0,onclick:b=>{
if("category-folders"===a.GetCategory())a.OnSelectFoldersView(!0);else{const b=a.GetController(2),c=b.ShowFolders()
;b.ShowFolders(!c),b.UpdateView(!1)}(0,d.OZ)(c.dataItems),b&&(b.preventDefault(),b.stopPropagation())}}),l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_HomeFolder"),""))),i=l("div",{
className:"rf-folders-pane navigator-flexy-item narrow rf-dark hidden"},l("div",{className:"rf-data-filter rf-input-box"
},l("div",{className:"rf-filter"}),j=l("input",{type:"text",placeholder:"Filter"}),k=l("div",{className:"rf-eraser"
})),m=l("div",{className:"rf-folders-tree"}))),o=l("div",{
className:"navigator-section-pinned navigator-section navigator-section-with-separator hidden"},B=l("div",{
className:"selector-item category-pinned",onclick:()=>a.OnSelectCategory("category-pinned")},l("div",{className:"select-image"
}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_Pinned"),"")))),p=l("div",{
className:"categories-selector navigator-section navigator-section-with-separator"},C=l("div",{
className:"selector-item category-all",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-all")},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_All"),""))),D=l("div",{
className:"selector-item category-logins",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-logins")},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_Logins"),""))),E=l("div",{
className:"selector-item category-bookmarks",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-bookmarks")},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_Bookmarks"),""))),F=l("div",{
className:"selector-item category-logins-and-bookmarks hidden",
onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-logins-and-bookmarks")},l("div",{className:"select-image"}),l("div",{
className:"select-title"},(0,h.LX)(g("StartPage_Category_LoginsAndBookmarks"),""))),G=l("div",{
className:"selector-item category-safenotes",onclick:()=>a.OnSelectItemTypeFilter("item-type-filter-safenotes")},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_Safenotes"),"")))),t=l("div",{
className:"rf-identities navigator-section navigator-section-with-separator hidden"},u=l("div",{
className:"identity-select selector-item rf-create-identity hidden"},l("div",{className:"select-image"}),l("div",{
className:"select-title action-handler"},(0,h.LX)(g("StartPage_Create_Identity"),"")),l("div",{
className:"plus-image action-handler"})),v=l("div",{className:"identity-select selector-item rf-actual-identity hidden"
},y=l("div",{className:"select-image"}),l("div",{className:"select-title"},x=l("div",{className:"rf-actual-identity-name"},(0,
h.LX)(g("IdentityType_MyIdentity"),"")))),w=l("div",{className:"identity-select selector-item rf-category-identity hidden"
},l("div",{className:"select-image"}),l("div",{className:"select-title"},l("div",{className:"rf-actual-identity-title"},(0,
h.LX)(g("StartPage_Category_Identities"),""))))),Q=l("div",{className:"navigator-flexy-gap navigator-flexy navigator-section"
}),q=l("div",{className:"navigator-section-why-roboform navigator-section hidden"},H=l("div",{
className:"selector-item category-why-roboform hidden",onclick:()=>a.OnSelectCategory("category-why-roboform")},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_WhyRoboForm"),"")))),r=l("div",{
className:"rf-more-categories navigator-section navigator-section-with-separator separator-top"},l("div",{
className:"rf-more-categories-popup"},J=l("div",{className:"selector-item password-generator-select",onclick:()=>{
R.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-password-generator")}},l("div",{
className:"select-image"}),l("div",{className:"select-title"
},(0,h.LX)(g("StartPage_Category_PasswordGenerator"),""))),I=l("div",{className:"selector-item authenticator-select",
onclick:()=>{R.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-authenticator")}},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_Authenticator"),""))),K=l("div",{
className:"selector-item security-center-select",onclick:()=>{R.classList.remove("rf-more-categories-shown"),
a.OnSelectCategory("category-security-center")}},l("div",{className:"select-image"}),l("div",{className:"select-title"},(0,
h.LX)(g("StartPage_Category_SecurityCenter"),""))),L=l("div",{className:"selector-item sharing-center-select",onclick:()=>{
R.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-sharing-center")}},l("div",{className:"select-image"
}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_SharingCenter"),"")),M=l("div",{
className:"category-badge hidden"})),N=l("div",{className:"selector-item emergency-access-select",onclick:()=>{
R.classList.remove("rf-more-categories-shown"),a.OnSelectCategory("category-emergency-access")}},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_EmergencyAccess"),"")),l("div",{
className:"rf-events-count select-ext hidden"}),O=l("div",{className:"category-badge hidden"}))),P=l("div",{
className:"selector-item more-categories-select",onclick:()=>a.GetController(1).ToggleMoreCategories()},l("div",{
className:"select-image"}),l("div",{className:"select-title"},(0,h.LX)(g("StartPage_Category_MoreCategories"),"")))),s=l("div",{
className:"navigator-section-upgrade navigator-section hidden"}));(0,e.YC)(z,g("StartPage_ShowAllFolders_Tip")),(0,
e.YC)(B,g("StartPage_Category_Tip_Pinned")),(0,e.YC)(C,g("StartPage_Category_Tip_All")),(0,
e.YC)(D,g("StartPage_Category_Tip_Logins")),(0,e.YC)(E,g("StartPage_Category_Tip_Bookmarks")),(0,
e.YC)(F,g("StartPage_Category_Tip_LoginsAndBookmarks")),(0,e.YC)(G,g("StartPage_Category_Tip_Safenotes")),(0,
e.YC)(H,g("StartPage_Category_WhyRoboForm")),(0,e.YC)(J,g("StartPage_Category_PasswordGenerator")),(0,
e.YC)(I,g("StartPage_Category_Authenticator")),(0,e.YC)(K,g("StartPage_Category_SecurityCenter")),(0,
e.YC)(L,g("StartPage_Category_SharingCenter")),(0,e.YC)(N,g("StartPage_Category_EmergencyAccess")),(0,
e.YC)(P,g("StartPage_Category_Tip_MoreCategories")),f.isPassgenOnStartPageSupported||(0,h.SE)(J);const S={main:R,foldersPane:i,
dataFilterInput:j,dataFilterEraser:k,foldersTree:m,foldersDropdownHandler:z,identity:{section:t,createItem:u,actualItem:v,
categoryItem:w,actualItemName:x,actualItemImage:y,actualItemSharing:null,actualItemMenu:null},sectionFolders:n,sectionPinned:o,
sectionCategories:p,sectionWhyRoboForm:q,sectionMoreCategories:r,sectionUpgrade:s,categoryFolders:A,categoryPinned:B,
categoryAll:C,categoryLogins:D,categoryBookmarks:E,categoryLoginsAndBookmarks:F,categorySafenotes:G,categoryWhyRoboForm:H,
categoryAuthenticator:I,categoryPasswordGenerator:J,categorySecurityCenter:K,categorySharingCenter:L,sharingBadge:M,
categoryEmergencyAccess:N,emergencyAccessBadge:O,categoryMoreCategories:P,flexyGap:Q,upgradeSelect:null}
;return c.mainFrame.insertBefore(R,c.navigatorStub),c.navigatorStub.remove(),c.navigator=S,S}},64737:function(a,b,c){
"use strict";c.d(b,{$:function(){return y},I:function(){return x}})
;var d=c(48658),e=c(4601),f=c(46708),g=c(41107),h=c(3566),i=c(47333),j=c(4234),k=c(99196),l=c(78949),m=c(88579),n=c(12131),o=c(88262),p=c(63956),q=c(13113),r=c(97490),s=c(95399),t=c(4153),u=c(78440),v=c(69893),w=(c(13117),
c(91764)._);function x(a,b,c){const d=a.m_localization.LocalizeString;let k=!1,l=!1
;const s=a,x=a.m_rf_api,y=a.m_rf_manager,z=a.m_breach_mon_service,A=a.m_page_preferences,B=s.m_rf_items_multiselect,C=b,D=c,E=(0,
u.tG)(),F=(0,u.tG)(),[G,H]=(0,r.Uw)(0);let I=null,J=null,K=null,L=!1,M=!1,N=!1,O=!1,P=null,Q=null,R=null,S=null
;const T=new Map,U=new Map,V=new Map,W=new Map,X=new Map,Y=new Map,Z=C.main
;["security-center-compromised","security-center-weak","security-center-reused","security-center-all","security-center-duplicates","security-center-excluded"].forEach((c=>{
T.set(c,function(a){let b,c=Promise.resolve(""),e=Promise.resolve("");switch(a){case"security-center-compromised":
c=d("PassAud_TabCompromised_Title"),e=d("PassAud_TabCompromised_Description_Part1");break;case"security-center-weak":
c=d("PassAud_TabWeak_Title"),e=d("PassAud_TabWeak_Description_Part1");break;case"security-center-reused":
c=d("PassAud_TabReusedkPasswords_Title"),e=d("PassAud_TabReusedPasswords_Description_Part1");break;case"security-center-all":
c=d("PassAud_TabAllPasswords_Title");break;case"security-center-duplicates":c=d("PassAud_TabCompleteDuplicates_Title"),
e=d("PassAud_TabCompleteDuplicates_Description_Part1");break;case"security-center-excluded":c=d("PassAud_TabExcluded_Title"),
e=d("PassAud_TabExcluded_Description_Part1")}const f=w("div",{className:"selector-item"},w("span",{className:"title"
},c),b=w("span",{className:"badge"}));return(0,g.YC)(f,e),U.set(a,b),f.addEventListener("click",(()=>ak(a))),
C.orderSelector.appendChild(f),f}(c));const f=function(a){const b=w("div",{className:"rf-items "+a});return b}(c);V.set(c,f)
;const h=function(c){const f=(0,g.kZ)({itemHeight:50,parentElWithScroll:b.main,CreateHeaderFields:()=>function(a){let b=[]
;switch(a){case"security-center-compromised":case"security-center-excluded":
b=[c("name"),c("password"),c("strength"),c("commands")];break;case"security-center-weak":case"security-center-all":
b=[c("name"),c("password"),c("strength"),c("age"),c("commands")];break;case"security-center-reused":
b=[c("name"),c("url"),c("password"),c("strength"),c("age"),c("commands")];break;case"security-center-duplicates":
b=[c("name"),c("folder"),c("username"),c("password"),c("strength"),c("commands")]}return b;function c(b){let c,e,f="";switch(b){
case"name":f=d("PassAud_ItemName_Title");break;case"password":f=d("PassAud_ItemPassword_Title");break;case"strength":
f=d("PassAud_ItemPasswordStrength_Title");break;case"age":f=d("PassAud_ItemAge_Title2");break;case"breaches-age":
f=d("PassAud_ItemBreachesDetectionAge_Title");break;case"url":f=d("PassAud_ItemUrl_Title");break;case"folder":f=d("CL_Folder")
;break;case"username":f=d("StartPage_CL_Username");break;case"commands":f=""}if("commands"===b)e=w("td",{
className:"commands-header-column"},c=w("div",{className:"real-fixed-header-content"}));else if("password"===b){let d;e=w("td",{
className:b+"-header-column header-sort"},c=w("div",{className:"real-fixed-header-content"},w("span",{className:"text"
},f),d=w("span",{className:"toggle-pwd toggle-pwd-hide"}),w("span",{className:"sort-arrow"}))),d.addEventListener("click",(b=>{
var c;b.preventDefault(),b.stopPropagation(),d.classList.toggle("toggle-pwd-show"),d.classList.toggle("toggle-pwd-hide"),
X.set(a,d.classList.contains("toggle-pwd-show")),null===(c=W.get(a))||void 0===c||c.UpdateItems(null)}))}else e=w("td",{
className:b+"-header-column header-sort"},c=w("div",{className:"real-fixed-header-content"},w("span",{className:"text"
},f),w("span",{className:"sort-arrow"})));if((0,g.YC)(c,f),"name"===b){const b=w("div",{
className:"multiselect-cmd-select-all hidden"});c.appendChild(b),Y.set(a,b)}return{name:b,elem:e,contentEl:c,
sortable:"commands"!==b}}}(c),CreateItem:b=>b.is_group_title?function(a,b){let c=w("tr",null),e=null
;"security-center-reused"===a?c=w("tr",{className:"_row_group"},w("td",{colSpan:6,className:"data_column group"},w("div",{
className:"data_column_outer"},w("div",{className:"data_column_inner"},w("span",{
className:"icon-expand "+(b.collapsed?"icon-expand-hidden":"icon-expand-shown")
}),w("span",null,d("PassAud_ReusedGroup_Title2")))))):"security-center-duplicates"===a&&(c=w("tr",{className:"_row_group"
},w("td",{colSpan:6,className:"data_column group"},w("div",{className:"data_column_outer"},w("div",{
className:"data_column_inner"},w("span",{className:"icon-expand "+(b.collapsed?"icon-expand-hidden":"icon-expand-shown")
}),e=w("span",{className:"group_url"}))))));null!==e&&(e.textContent=(0,m.pK)(b.gotoUrl||""),e.title=b.gotoUrl||"")
;return c.addEventListener("click",(()=>{var c
;as(!b.collapsed,b.group_id,a),null===(c=W.get(a))||void 0===c||c.UpdateItems(null)})),c}(c,b):function(b,c){
const f=s.m_ui_commands,h=s.m_rf_cache,i=x.securityWarningsManager,k=c.itemInfo;let l=w("tr",null);const n=w("td",{
className:"c_name"});let o=null,p=null,r=null;const v=null;let z=null,A=null,C=null;const D=w("td",{className:"c_commands"})
;"security-center-compromised"===b?l=w("tr",{className:"_row rf-security-center-item"},n,w("td",null,o=w("div",{
className:"c_password"})),p=w("td",{className:"c_strength"}),D):"security-center-weak"===b?l=w("tr",{
className:"_row rf-security-center-item"},n,w("td",null,o=w("div",{className:"c_password"})),p=w("td",{className:"c_strength"
}),r=w("td",{className:"c_age"}),D):"security-center-reused"===b?l=w("tr",{className:"_row rf-security-center-item"
},n,w("td",null,z=w("div",{className:"c_url"})),w("td",null,o=w("div",{className:"c_password"})),p=w("td",{
className:"c_strength"}),r=w("td",{className:"c_age"}),D):"security-center-all"===b?l=w("tr",{
className:"_row rf-security-center-item"},n,w("td",null,o=w("div",{className:"c_password"})),p=w("td",{className:"c_strength"
}),r=w("td",{className:"c_age"}),D):"security-center-duplicates"===b?l=w("tr",{className:"_row rf-security-center-item"
},n,w("td",null,A=w("div",{className:"c_location"})),w("td",null,C=w("div",{className:"c_username"})),w("td",null,o=w("div",{
className:"c_password"})),p=w("td",{className:"c_strength"}),D):"security-center-excluded"===b&&(l=w("tr",{
className:"_row rf-security-center-item"},n,w("td",null,o=w("div",{className:"c_password"})),p=w("td",{className:"c_strength"
}),D));const E=(0,e.gU)(b,k,"img32",y.GetController(9).GetIsStillActual());n.appendChild(E);const F=(0,
m.pK)(c.gotoUrl).toLowerCase();null!==z&&(z.textContent=F,z.title=c.gotoUrl)
;null!==o&&(!0===X.get(b)?o.textContent=c.password||"—":o.textContent=(0,g.Ss)());null!==p&&(0,u.fI)((async()=>{
p.appendChild(await(0,g.kS)(c.strength,!1,a.m_localization))})());if(null!==A){const a=(0,j.XE)((0,q.fA)(k.path),!0);if(""===a){
const a=d("StartPage_HomeFolder");(0,g.$9)(A,a),(0,g.YC)(A,a)}else A.textContent=A.title=a}null!==C&&(0,u.fI)((async()=>{
const a=await h.FetchDataItem(k.path);(0,e.O1)(C,k,a)})());null!==r&&(0,g.$9)(r,c.timeNotModified?(0,
t.bf)(Math.floor(c.timeNotModified/86400)):d("PassAud_ItemAge_NotAvaliable"));if(null!==v){const a=at(c);(0,g.$9)(v,a?(0,
t.bf)(a):"")}if(null!==D){let a=null;a="security-center-excluded"===b?(0,e.gR)({cmdCommand:"include-to-security-score",
cmdTip:d("Cmd_IncludeToSecurityScore"),cmdCssClass:"rf-item-include-to-security-score",cmdAction:()=>{(0,
u.fI)(i.DisableSecurityWarningForDataItem(k.path,[0],!1,null))}
}):"security-center-all"===b||"security-center-duplicates"===b?null:c.breaches&&c.breaches.length>0?(0,e.gR)({
cmdCommand:"login",cmdTip:d("LoginIsCompromised_Notification_Login_Hint",[F]),cmdCssClass:"rf-item-log-in",cmdAction:()=>(0,
u.fI)(f.GoFillSubmit(k,!0))}):(0,e.gR)({cmdCommand:"login",cmdTip:d("Cmd_Login_Flat"),cmdCssClass:"rf-item-log-in",
cmdAction:()=>(0,u.fI)(f.GoFillSubmit(k,!0))});const g=w("div",{className:"rf-item-cmdbar"},(0,e.gR)({cmdCommand:"view",
cmdTip:d("StartPage_Cmd_View"),cmdCssClass:"rf-item-view hover-action-cmd",cmdAction:()=>{y.OnOpenEditor(k,!1,!1,!1)}}),a,(0,
e.WF)(l,k.path));D.appendChild(g),(0,e.Gu)(D,g,l)}return l.addEventListener("contextmenu",(a=>{a.preventDefault();const b=(0,
g.Eo)(a);B.IsInProcess()?B.IsItemSelected(l)&&(0,u.fI)((0,e.bL)(E,b)):(0,u.fI)((0,e.j1)(k,l,b))})),(0,e.SA)(l,(a=>{
if(B.IsInProcess())(0,u.fI)(B.SelectItem(l));else{const b=a.event.target
;if(b.classList.contains("rf-item-multiselect")||b.classList.contains("rf-sec-warning-button")||b.classList.contains("rf-buttons-bar")||B.IsInProcess())return
;y.OnOpenEditor(k,!1,!1,!1)}}),null),(0,g.eY)(l,k),B.UpdateItemSelection(k.path,l),l}(c,b),CompareItems:aq,onScrollEvent:a=>{(0,
g.DN)(a)&&(0,g.b2)(!1)}});return f}(c);W.set(c,h),f.appendChild(h.GetTopElement()),C.data.appendChild(f)}))
;let aa=!1,ab=null,ac=null,ad=null;(0,u.fI)((async()=>{
af(window.innerHeight<600||""!==await A.GetValue("StartPage.SecurityCenterHeaderCollapsed",""))})()),(0,
g.YC)(C.newLogin,(async()=>d("StartPage_New_ButtonTip",[await d("StartPage_New_Login")]))),
C.newLogin.addEventListener("click",(()=>{(0,u.fI)(s.m_rf_new_menu.CreateNew("new-login","",!0))}));let ae=window.innerHeight
;window.addEventListener("resize",(()=>{ag(0),window.innerHeight<600&&ae>window.innerHeight&&!aa&&af(!0),ae=window.innerHeight
}));return{Activate:function(){if(k)return;k=!0,(0,p.l5)(D),(0,p.l5)(Z),(0,u.C)(ar),y.IsInlineEditorShown()&&af(!0)
;1!==G(null)&&l&&null===S&&null===Q&&(0,u.C)(al)},Deactivate:function(){if(!k)return;if(k=!1,S){const a=W.get(S)
;null==a||a.DeactivateParentScrollHandler()}I&&(I.OnBeforeHide(),I.Dispose(),O=!1);S=null,(0,u.fI)(async function(){
if(!J||L)return;L=!0;try{await J.Stop()}catch(a){}J=null,L=!1}()),(0,p.SE)(Z)},UpdateView:function(c){c&&(l=!1);if(!k)return
;if(y.IsEditorShown())return;if(y.IsSearchResultShown())return;if(l)return void(Q&&am())
;"security-center-tab-data-breach-monitoring"===y.GetSortOrder()?function(){(0,p.SE)(b.securityOverview),(0,
p.l5)(b.dataBreachMonitoring),H(1),O?P&&I&&(I.OpenFirstCriticalBreachEmail(P,!0),P=null):(I=(0,
f.B)(a.m_rf_api,a.m_rf_manager,a.m_http,a.m_breach_mon_service,a.m_data_item_images,a.m_extension_storage,b.dataBreachMonitoring,a.m_localization),
P&&(I.OpenFirstCriticalBreachEmail(P,!1),P=null),(0,p.rK)(b.dataBreachMonitoring),
b.dataBreachMonitoring.appendChild(w("fragment",null,I.Create())),O=!0);I&&I.OnAfterShow()}():ah();l=!0,(0,
u.fI)(async function(){if(J)return;F.Start(au);const a=null!==z,b=x.securityWarningsManager,c=new Set;J=(0,u.YZ)({
action:async d=>{if(function(a){const b=["security-center-compromised","security-center-excluded"];for(const c of b){
const b=T.get(c);a?b&&(0,p.l5)(b):b&&(0,p.SE)(b)}}(a),z){const a=await b.GetAllDataItemsWhereSecurityWarningIsDisabled([0],d)
;for(const b of a)c.add(b.path)}return s.m_password_audit_service.GetUpdateAuditResult(!0,d)}}),function(){if(N&&!M)return;M=!1,
ai({all:[],duplicates:[],reused:[],compromised:[],statistics:{score:0}},!0,""),(0,p.SE)(C.data),T.forEach((a=>{
a.classList.remove("active"),a.classList.add("disabled")})),U.forEach((a=>(0,p.SE)(a))),
Z.classList.remove("low","average","good","excellent","nodata"),Z.classList.add("processing")}();try{K=await J.Execute(null),
J=null,function(a,b){var c,d,f
;const g=null!==(d=null!==(c=b.statistics.sa)&&void 0!==c?c:b.statistics.score)&&void 0!==d?d:0,h=aj(b),i=C.noItems
;if(0===g&&!h)return C.noItemsText||(C.noItemsText=w("div",{className:"rf-no-items-text"}),i.appendChild(w("div",{
className:"rf-no-items-icon"})),i.appendChild(C.noItemsText)),(0,u.fI)((async()=>{i.replaceChild(await(0,e.RX)(),(0,
t.TT)(C.noItemsText))})()),Z.classList.add("rf-no-items-shown"),(0,p.l5)(i),(0,p.SE)(C.data),void(0,p.SE)(C.summaryPane)
;ai(b,!1,""),Z.classList.remove("rf-no-items-shown"),(0,p.l5)(C.data),(0,p.SE)(i);let j=null
;const k=a?["security-center-compromised","security-center-weak","security-center-reused","security-center-all","security-center-duplicates","security-center-excluded"]:["security-center-weak","security-center-reused","security-center-all","security-center-duplicates"]
;k.forEach((a=>{var c,d,e,f;if(!W.has(a))return;N=!0;let g=0,h=null;switch(a){case"security-center-all":{const a=b.all||[]
;g=a.length,h=an(a)}break;case"security-center-weak":{const a=b.all.filter((a=>a.strength<=1&&!a.excludedFromScore));g=a.length,
h=an(a)}break;case"security-center-reused":{const a=b.reused||[];g=a.reduce(((a,b)=>a+b.items.length),0),h=function(a){
const b=[];for(let c=0;c<a.length;c++){const d=a[c],e=2*c;b.push(ao(d.items[0],e,!0)),ap(d.items)
;for(let a=0;a<d.items.length;a++)b.push(ao(d.items[a],e))}return b}(a)}break;case"security-center-duplicates":{
const a=b.duplicates||[];g=a.length,h=function(a){const b=[];a.sort(((a,b)=>{
const c=(a.gotoUrl||"").toLowerCase(),d=(b.gotoUrl||"").toLowerCase();return c>d?1:c<d?-1:0}));for(let c=0;c<a.length;c++){
const d=a[c],e=2*c;b.push(ao(d.items[0],e,!0)),ap(d.items);for(let a=0;a<d.items.length;a++)b.push(ao(d.items[a],e))}return b
}(a)}break;case"security-center-compromised":if(z){
const a=null!==(d=null!==(c=b.compromised)&&void 0!==c?c:b.all.filter((a=>null!==a.breaches&&0!==a.breaches.length&&!a.excludedFromScore)))&&void 0!==d?d:[]
;g=a.length,h=an(a)}break;case"security-center-excluded":if(z){const a=b.all.filter((a=>a.excludedFromScore));g=a.length,h=an(a)
}}
null!==h&&W.has(a)&&(null===(e=W.get(a))||void 0===e||e.UpdateItems(h)),null===(f=W.get(a))||void 0===f||f.SortByField(null,!1,null)
;const i=(0,t.TT)(T.get(a)),k=(0,t.TT)(U.get(a));g?(j||(j=a),i.classList.remove("disabled"),k.textContent=`(${g})`,(0,
p.l5)(k)):(-1!==["security-center-compromised","security-center-weak","security-center-reused"].indexOf(a)?i.classList.remove("disabled"):i.classList.add("disabled"),
(0,p.SE)(k))})),null!==S&&(null===(f=W.get(S))||void 0===f?void 0:f.GetItems().length)||(S=j||"security-center-all")
;Q?am():ak(S)}(a,K)}catch(f){J=null,await async function(a){if((0,v.r5)(a,v.kd))return;M=!0;const b=(0,
v.EB)(a),c=await d("PassAud_Error_NotFound"),e=(0,v.r5)(a,v.Y$)?c+" "+b:b;ai({all:[],duplicates:[],reused:[],compromised:[],
statistics:{score:0}},!1,e),(0,p.SE)(C.data),U.forEach((a=>(0,p.SE)(a))),Z.classList.remove("processing"),af(!1)}(f)}return}())
},Invalidate:function(){l=!1},IsStillActual:function(){return k},GetIsStillActual:function(){return function(){return k}},
OnChanges:function(a){for(const b of a){if(14===b.event){l=!1;break}if(void 0!==b.type&&1===b.type){l=!1;break}
10===b.event&&(O=!1)}},CollapseSummaryPane:af,AdjustTabHeaderColumnWidths:ag,GetAllItemPaths:function(){
const a=[],b=y.GetLastSortOrder("category-security-center"),c=W.get(b);c&&c.GetItems().forEach((b=>{
b.itemInfo&&a.push(b.itemInfo.path)}));return a},GetLoginAge:function(a){let b=""
;if(K)for(const c of K.all)if(c.itemInfo.path===a){
b=c.timeNotModified?(0,t.bf)(Math.floor(c.timeNotModified/86400)):d("PassAud_ItemAge_NotAvaliable");break}return b},
ScheduleScrollToLoginAfterUpdate:function(a,b){Q=b,R=a},FindAndOpenCriticalBreachEmail:function(a){if(!a||0===a.length)return
;P=a},OpenSecurityOverview:ah};function af(a){a?(Z.classList.add("summary-pane-collapsed"),ab&&ac&&ad&&((0,p.SE)(ab),(0,
p.SE)(ac),
(0,g.$9)(ad,d("StartPage_SecurityCenter_ShowMore"))),aa=!0,(0,u.fI)(A.SetValue("StartPage.SecurityCenterHeaderCollapsed","true"))):(Z.classList.remove("summary-pane-collapsed"),
ab&&ac&&ad&&((0,p.l5)(ab),(0,p.l5)(ac),(0,g.$9)(ad,d("StartPage_SecurityCenter_ShowLess"))),aa=!1,(0,
u.fI)(A.SetValue("StartPage.SecurityCenterHeaderCollapsed","")))}function ag(a){E.Start((async()=>{await(0,u.Gu)(a,null),
function(){var a;if(!k)return;null!==S&&(null===(a=W.get(S))||void 0===a||a.AdjustTableFixedHeaderFieldsSize())}()}))}
function ah(){(0,p.l5)(b.securityOverview),(0,p.SE)(b.dataBreachMonitoring);const a=1===G(null);H(0),a&&I&&(I.OnBeforeHide(),
I.Dispose())}function ai(a,b,c){var e,f;let i=null,j=null,k=null,l=null,m=null
;const n=aj(a),o=null!==(f=null!==(e=a.statistics.sa)&&void 0!==e?e:a.statistics.score)&&void 0!==f?f:0
;let p=Promise.resolve(""),q=Promise.resolve(""),r="";o>90?(p=d("PassAud_GoodSafetyLevel_Tittle"),
q=d("PassAud_GoodSafetyLevel_Text"),r="excellent",m="Excellent"):o>60?(p=d("PassAud_MediumSafetyLevel_Tittle"),
q=d("PassAud_MediumSafetyLevel_Text"),r="good",m="Good"):o>30?(p=d("PassAud_AverageSafetyLevel_Tittle"),
q=d("PassAud_AverageSafetyLevel_Text"),r="average",m="Average"):o>0&&(p=d("PassAud_BadSafetyLevel_Tittle"),
q=d("PassAud_BadSafetyLevel_Text"),
r="low",m="Low"),Z.classList.remove("processing","low","average","good","excellent","nodata"),
n?Z.classList.add("nodata"):Z.classList.add(r||"nodata")
;const s=a.all.filter((a=>!a.excludedFromScore)).length,u=a.all.filter((a=>null!==a.breaches&&0!==a.breaches.length&&!a.excludedFromScore)).length,v=a.all.filter((a=>a.strength<=1&&!a.excludedFromScore)).length-u,y=a.statistics.medium||0,z=a.statistics.good||0,A=a.statistics.excellent||0,B=(a.reused||[]).reduce(((a,b)=>a+b.items.length),0),D=s-B,E=[]
;E.push({type:0,number:A,percent:J(A),title:d("PassAud_PwdStrengthStrong"),css_class:"strong"}),E.push({type:1,number:z,
percent:J(z),title:d("PassAud_PwdStrengthGood"),css_class:"good"}),E.push({type:2,number:y,percent:J(y),
title:d("PassAud_PwdStrengthMedium"),css_class:"medium"}),E.push({type:3,number:v,percent:J(v),
title:d("PassAud_PwdStrengthWeak"),css_class:"weak"}),E.push({type:4,number:u,percent:J(u),
title:d("PassAud_PwdStrengthCompromised"),css_class:"compromised"});const F=[],G=n?0:J(B);F.push({type:5,number:D,
percent:n?0:100-G,title:d("PassAud_PwdStrengthUnique"),css_class:"unique"}),F.push({type:6,number:B,percent:G,
title:d("PassAud_PwdStrengthReused"),css_class:"reused"});const H=E.reduce(((a,b)=>a+b.percent),0);if(H>100){
let a=E[0].percent,b=E[0];E.forEach((c=>{a<c.percent&&(a=c.percent,b=c)})),b.percent-=H-100
}else if(H<100&&s>0)for(let d=E.length-1;d>=0;--d)if(E[d].number>0){E[d].percent+=100-H;break}const I=w("div",{
className:"summary-pane"},ab=b||n?w("div",{className:"chart-pane"+(aa?" hidden":"")},w("div",{className:"chart"},w("div",{
className:"chart-title"},K()))):w("div",{className:"chart-pane"+(aa?" hidden":"")},function(a,b){const c=w("div",{
className:"chart"});f(a,c,!1);const d=w("div",{className:"reused-chart"});f(b,d,!0),c.appendChild(d);const e=w("div",{
className:"chart-title"});return c.appendChild(e),(0,g.$9)(e,K()),c;function f(a,b,c){let d=0;[...a].reverse().forEach((a=>{
const e=a.percent/100*360,f=function(a,b){const c=50*(1-h(1)),d=w("div",{
className:"chart-chunk chart-gap "+(b?"inner-chart-gap":""),style:{clipPath:`polygon(50% 50%, 50% 0, ${c}% 0, ${c}% 50%)`,
transform:`rotate(-${a}deg)`}});return d}(d,c);b.appendChild(f);const i=function(a,b,c){let d=""
;if(0===b)d="polygon(50% 50%, 50% 0, 50% 0)";else if(b<=45){d=`polygon(50% 50%, 50% 0, ${50*(1-h(b))}% 0)`}else if(b<=90){
d=`polygon(50% 50%, 50% 0, 0 0, 0 ${50*(1-h(b=90-b))}%)`}else if(b<=135){d=`polygon(50% 50%, 50% 0, 0 0, 0 ${50*h(b-=90)+50}%)`
}else if(b<=180){d=`polygon(50% 50%, 50% 0, 0 0, 0 100%, ${50*(1-h(b=180-b))}% 100%)`}else if(b<=225){
d=`polygon(50% 50%, 50% 0, 0 0, 0 100%, ${50*h(b-=180)+50}% 100%)`}else if(b<=270){
d=`polygon(50% 50%, 50% 0, 0 0, 0 100%, 100% 100%, 100% ${50*h(b=270-b)+50}%)`}else if(b<=315){
d=`polygon(50% 50%, 50% 0, 0 0, 0 100%, 100% 100%, 100% ${50*(1-h(b=45-(315-b)))}%)`}else if(b<360){
d=`polygon(50% 50%, 50% 0, 0 0, 0 100%, 100% 100%, 100% 0, ${50*h(b=360-b)+50}% 0)`}else 360===b&&(d="");const e=w("div",{
className:"chart-chunk "+a.css_class,style:{clipPath:d,transform:`rotate(-${c}deg)`}});return(0,g.M_)(e,(async()=>(0,
t.bf)(a.percent)+"% "+await a.title)),e}(a,e,d);i.addEventListener("click",(()=>{var b;switch(a.type){case 4:
ak("security-center-compromised");break;case 3:ak("security-center-weak");break;case 6:ak("security-center-reused");break
;default:ak("security-center-all"),null===(b=W.get("security-center-all"))||void 0===b||b.SortByField("strength",!1,-1)}})),
b.appendChild(i),d+=e}))}function h(a){return 0===a?0:45===a?1:Math.tan(a*Math.PI/180)}}(E,F),w("div",{className:"legend"
},[...E].filter((a=>a.percent>0)).map((a=>w("div",{className:"legend-item "+a.css_class},w("div",{className:"icon"}),w("div",{
className:"value"},w("div",{className:"text"},a.title),w("div",{className:"percent"},(0,t.bf)(a.percent)+"%"))))),w("div",{
className:"reused-legend"},[...F].filter((a=>a.percent>0)).map((a=>w("div",{className:"legend-item "+a.css_class},w("div",{
className:"icon"}),w("div",{className:"value"},w("div",{className:"text"},a.title),w("div",{className:"percent"},(0,
t.bf)(a.percent)+"%")))))))),M&&c?w("div",{className:"score-column"},w("div",{className:"score-pane error"},w("div",{
className:"score-result"},w("div",{className:"title"},d("PassAud_Error"),":"),w("div",{className:"score-value"
},c)))):b?w("div",{className:"score-column"},w("div",{className:"score-pane processing"},w("div",{className:"score-result"
},w("div",{className:"title"},d("PassAud_SummaryScore"),":"),w("div",{className:"score-value"},w("div",{className:"value"
},d("PassAud_Calculating_Title"))))),ac=w("div",{className:"recomendation"+(aa?" hidden":"")},w("div",{className:"text"
},d("PassAud_Calculating_Desc")))):n?w("div",{className:"score-column"},w("div",{className:"score-pane nodata"},w("div",{
className:"score-result"},w("div",{className:"title"},d("PassAud_SummaryScore"),":"),w("div",{className:"score-value"},w("div",{
className:"value"},"N/A"),w("div",{className:"text"},d("PassAud_ItemAge_NotAvaliable")))),w("div",{className:"progressbar"
},i=w("div",{className:"progressbar-overlay weak-overlay"}),w("div",{className:"separator separator-one"}),j=w("div",{
className:"progressbar-overlay average-overlay"}),w("div",{className:"separator separator-two"}),k=w("div",{
className:"progressbar-overlay medium-overlay"}),w("div",{className:"separator separator-three"}),l=w("div",{
className:"progressbar-overlay good-overlay"}))),ac=w("div",{className:"recomendation"+(aa?" hidden":"")},w("div",{
className:"text"},d("StartPage_SecurityCenter_ExcludedOnly_Text2")))):w("div",{className:"score-column"},w("div",{
className:"score-pane "+r},w("div",{className:"score-result"},w("div",{className:"title"
},d("PassAud_SummaryScore"),":"),w("div",{className:"score-value"},w("div",{className:"value"},(0,t.bf)(o)),w("div",{
className:"text"},p))),w("div",{className:"progressbar"},i=w("div",{className:"progressbar-overlay weak-overlay"}),w("div",{
className:"separator separator-one"}),j=w("div",{className:"progressbar-overlay average-overlay"}),w("div",{
className:"separator separator-two"}),k=w("div",{className:"progressbar-overlay medium-overlay"}),w("div",{
className:"separator separator-three"}),l=w("div",{className:"progressbar-overlay good-overlay"}),w("div",{className:"score",
style:{left:`${o}%`}}))),ac=w("div",{className:"recomendation"+(aa?" hidden":"")},w("div",{className:"title"
},d("StartPage_SecurityCenter_Recomendation")),w("div",{className:"text"},q))),ad=w("div",{className:"show-less",onclick:()=>{
I.classList.contains("animating")||(I.classList.add("animating"),
(0,g.dR)("security-center-summary-pane",I,"height",I.offsetHeight,aa?360:90,230,(()=>{af(!aa),I.classList.remove("animating"),
I.style.height=""})))}},d(aa?"StartPage_SecurityCenter_ShowMore":"StartPage_SecurityCenter_ShowLess")));return i&&("Low"===m?(0,
g.M_)(i,w("div",null,(async()=>w("fragment",null,(0,
g.R1)(await d("PassAud_BadSafetyLevel_Tooltip_Owner_Text"),[w("b",null,d("PassAud_BadSafetyLevel_OwnerScore_Title"))]))))):(0,
g.M_)(i,w("div",null,(async()=>w("fragment",null,(0,
g.R1)(await d("PassAud_BadSafetyLevel_Tooltip_Text"),[w("b",null,d("PassAud_BadSafetyLevel_Tittle"))])))))),
j&&("Average"===m?(0,
g.M_)(j,w("div",null,(async()=>w("fragment",null,(0,g.R1)(await d("PassAud_AverageSafetyLevel_Tooltip_Owner_Text"),[w("b",null,d("PassAud_AverageSafetyLevel_OwnerScore_Title"))]))))):(0,
g.M_)(j,w("div",null,(async()=>w("fragment",null,(0,
g.R1)(await d("PassAud_AverageSafetyLevel_Tooltip_Text"),[w("b",null,d("PassAud_AverageSafetyLevel_Tittle"))])))))),
k&&("Good"===m?(0,
g.M_)(k,w("div",null,(async()=>w("fragment",null,(0,g.R1)(await d("PassAud_MediumSafetyLevel_Tooltip_Owner_Text"),[w("b",null,d("PassAud_MediumSafetyLevel_OwnerScore_Title"))]))))):(0,
g.M_)(k,w("div",null,(async()=>w("fragment",null,(0,
g.R1)(await d("PassAud_MediumSafetyLevel_Tooltip_Text"),[w("b",null,d("PassAud_MediumSafetyLevel_Tittle"))])))))),
l&&("Excellent"===m?(0,
g.M_)(l,w("div",null,(async()=>w("fragment",null,(0,g.R1)(await d("PassAud_GoodSafetyLevel_Tooltip_Owner_Text"),[w("b",null,d("PassAud_GoodSafetyLevel_OwnerScore_Title"))]))))):(0,
g.M_)(l,w("div",null,(async()=>w("fragment",null,(0,
g.R1)(await d("PassAud_GoodSafetyLevel_Tooltip_Text"),[w("b",null,d("PassAud_GoodSafetyLevel_Tittle"))])))))),
C.summaryPane.replaceWith(I),void(C.summaryPane=I);function J(a){if(0===s)return 0;const b=Math.round(a/s*100)
;return a>0?Math.max(1,b):0}async function K(){var a
;const b=null!==(a=(await x.service.GetRoboFormAccountInfo(null)).name)&&void 0!==a?a:"";return(0,h.KG)(b)}}function aj(a){
const b=z?a.all.filter((a=>a.excludedFromScore)):[];return b.length>0&&b.length===a.all.length}function ak(a){const b=T.get(a)
;if(!b)return;if(b.classList.contains("disabled"))return;W.forEach((a=>a.DeactivateParentScrollHandler())),
T.forEach((a=>a.classList.remove("active"))),b.classList.add("active"),V.forEach((a=>(0,p.SE)(a)))
;const c=V.get(a),e=C.noItemsTab,f=W.get(a);if(f&&f.GetItems().length&&c)C.data.classList.remove("rf-no-items-shown"),
f.ActivateParentScrollHandler(),(0,p.SE)(e),(0,p.l5)(c);else{C.noItemsText||(C.noItemsText=w("div",{className:"rf-no-items-text"
}),e.appendChild(w("div",{className:"rf-no-items-icon"})),e.appendChild(C.noItemsText));let b=Promise.resolve("");switch(a){
case"security-center-compromised":b=d("StartPage_SecurityCenter_NoResults_Compromised");break;case"security-center-weak":
b=d("StartPage_SecurityCenter_NoResults_Weak");break;case"security-center-reused":
b=d("StartPage_SecurityCenter_NoResults_Reused")}(0,g.$9)((0,t.TT)(C.noItemsText),b),(0,p.l5)(C.data),
C.data.classList.add("rf-no-items-shown"),(0,p.l5)(e)}
"security-center-tab-data-breach-monitoring"!==y.GetSortOrder()&&y.OnSelectCategoryOrder(a),S=a,Y.has(a)&&B.InitListView((0,
t.TT)(Y.get(a)),(0,t.TT)(V.get(a))),(0,u.C)(ar)}function al(){
for(const a of["security-center-compromised","security-center-weak","security-center-reused","security-center-all","security-center-duplicates","security-center-excluded"]){
const b=W.get(a);if(b&&b.GetItems().length){ak(a);break}}}function am(){var a;if(!Q||!R||null===K)return;let b=R;const c=Q
;if("security-center-all"!==b&&"security-center-compromised"!==b){let a=!1,d=!1;K.reused.forEach((b=>{a||b.items.forEach((b=>{
b.itemInfo.path===c&&(a=!0)}))})),a||K.duplicates.forEach((a=>{d||a.items.forEach((a=>{a.itemInfo.path===c&&(d=!0)}))})),
b=a?"security-center-reused":d?"security-center-duplicates":"security-center-all"}ak(b);const d=W.get(b);if(d){
const e=d.GetItems(),f=e.findIndex((a=>a.itemInfo.path===c));if(-1!==f){const g=e[f];g.hidden&&(as(!1,g.group_id,b),
null===(a=W.get(b))||void 0===a||a.UpdateItems(null))
;const h=d.GetVisibleItems().findIndex((a=>!a.is_group_title&&a.itemInfo.path===c));-1!==h&&d.ScrollToVisibleItem(h)}}Q=null,
R=null}function an(a){const b=[];return a.forEach((a=>b.push(ao(a)))),ap(b),b}function ao(a,b,c){return{password:a.password,
login:a.login,strength:a.strength,timeNotModified:a.timeNotModified,itemInfo:a.itemInfo,gotoUrl:a.gotoUrl,breaches:a.breaches,
excludedFromScore:a.excludedFromScore,hasPasskey:a.hasPasskey,item_name:(0,j.em)(a.itemInfo.path).toLowerCase(),group_id:b,
is_group_title:c}}function ap(a){a.sort(((a,b)=>(a.item_name=a.item_name||(0,j.em)(a.itemInfo.path).toLowerCase(),
b.item_name=b.item_name||(0,j.em)(b.itemInfo.path).toLowerCase(),a.item_name>b.item_name?1:a.item_name<b.item_name?-1:0)))}
function aq(a,b,c){if(b.is_group_title||c.is_group_title)return 0;if(b.group_id!==c.group_id)return 0
;let d="alpha",e="",f="",g=0,h=0
;switch("name"===a?(e=b.item_name||"",f=c.item_name||""):"password"===a?(e=b.password.toLowerCase(),
f=c.password.toLowerCase()):"strength"===a?(d="number",g=b.strength,h=c.strength):"age"===a?(d="number",g=b.timeNotModified||1,
h=c.timeNotModified||1):"breaches-age"===a?(d="number",g=at(b),h=at(c)):"url"===a?(e=(0,m.pK)(b.gotoUrl),f=(0,
m.pK)(c.gotoUrl)):"folder"===a&&(e=(0,j.XE)((0,q.fA)(b.itemInfo.path),!0).toLowerCase(),f=(0,j.XE)((0,
q.fA)(c.itemInfo.path),!0).toLowerCase()),d){case"alpha":return e>f?1:e<f?-1:0;case"number":return g-h}return 0}function ar(){
var a,b
;null!==S&&(null===(a=W.get(S))||void 0===a||a.ResetScroll(),null===(b=W.get(S))||void 0===b||b.AdjustTableFixedHeaderFieldsSize())
}function as(a,b,c){var d;void 0!==b&&(null===(d=W.get(c))||void 0===d||d.GetItems().forEach((c=>{
c.group_id===b&&(c.is_group_title?c.collapsed=a:c.hidden=a)})))}function at(a){if(!a.breaches)return 0
;const b=Math.round((new Date).getTime()/1e3),c=a.breaches.reduce(((a,b)=>b.m_checked_time_utc_secs<a?b.m_checked_time_utc_secs:a),a.breaches[0].m_checked_time_utc_secs)
;return Math.floor((b-c)/86400)}async function au(c){let e;if(a.m_extension_storage){const b=a.m_extension_storage;e=await(0,
u.Bn)((async c=>{
const d=await(0,i.AT)(a.m_rf_api.service),e=await b.GetValue("EnableEmailBreachMonitoring",!0),f=await a.m_rf_api.options.GetValue("AccountEnterpriseLicenseActive",!1)
;if(!e||f)return!1;const g=await b.GetValue("CanUseEmailMonitoringOnServers",[]);if(g.indexOf(d)>=0)return!0;try{
const a=await x.rfo.CanUseEmailBreachesMonitoringAPI(c);return a&&await b.SetValue("CanUseEmailMonitoringOnServers",[...g,d]),a
}catch(h){if((0,n.tM)(h,9)||(0,n.tM)(h,7)||(0,o.dW)(h)&&404===h.httpResponse.status)return!1;throw h}}),(a=>(0,
v.r5)(a,v.rS)),200,2,3,c)}else e=!1;(0,p.rK)(b.header),e?[0,1].forEach((c=>function(c){switch(c){case 0:{
const c=w("fragment",null,(async b=>w("div",{className:"selector-item "+(0===G(b)?"active":""),onclick:()=>{
a.m_rf_manager.OnSelectCategoryOrder("security-center-all")}},w("span",{className:"title"
},d("StartPage_SecurityCenter_Tab_SecurityOverview")))));b.header.appendChild(c);break}case 1:{
const c=w("fragment",null,(async b=>w("div",{className:"selector-item "+(1===G(b)?"active":""),onclick:()=>{
a.m_rf_manager.OnSelectCategoryOrder("security-center-tab-data-breach-monitoring")}},w("span",{className:"title"
},d("StartPage_SecurityCenter_Tab_DataBreachMonitoring")))));b.header.appendChild(c)}}}(c))):1===G(null)&&ah()}}
function y(a,b,c,e,f,g){const h=a,i=b,j=c,m=e,n=(0,k.Je)();let p=null,q=!1,r=null,t=null;return{
GetCachedPasswordStrengthInfo:async function(a,b){return w(a,b)},GetUpdatePasswordStrengthInfo:async function(a,b){return w(a,b)
},GetCachedPasswordStrengthLevel:async function(a,b){return x(a,b)},GetUpdatePasswordStrengthLevel:async function(a,b){
return x(a,b)},GetUpdateAuditResult:async function(a,b){return await y(b),n.GetSecurityReportForAddedItems()},
GetLastUpdateTime:async function(a){return t}};async function v(a,b){var c;q||await z(b)
;const d=null!==(c=e&&await e.GetCachedUserDataBreaches({password:a},null,b))&&void 0!==c?c:null;let f=0
;return d&&d.find((a=>1===a.m_type))||(f=Math.floor((0,l.im)(a,[],null,r)+.5),f>100&&(f=100)),f}async function w(a,b){
const c=await v(a,b);return{strength:c,complexity:c}}async function x(a,b){const c=await v(a,b);return(0,l.AY)(c)}
async function y(a){if(!f)return;await z(a),p||(p=(0,d.nj)("security-center",f().GetController(9).GetIsStillActual()))
;const b=new Set;if(m&&j){const c=await j.GetAllDataItemsWhereSecurityWarningIsDisabled([0],a);for(const a of c)b.add(a.path)}
a&&a.ThrowIfShouldStop();const c=[],g=[];await p.UpdateData((async function(d,f,j){const l=f;for(const a of l)(0,
k.pp)(a,h)&&g.push((async function(d){var f;d.ThrowIfShouldStop()
;const g=await i.GetDataItem(a.path,3,null,null),h=b.has(a.path),j=null!==(f=e&&await e.GetCachedUserDataItemBreaches(a.path,d))&&void 0!==f?f:null
;c.push({info:a,data:g,breaches:j,excludedFromScore:h,includeToPersonalStats:!0})}));a&&a.ThrowIfShouldStop()}),a);try{await(0,
u._G)({actions:g},a)}catch(l){throw l}for(const d of c)a&&await a.YieldToUI(30),n.AddItem(d);t=(0,s.t2)()}async function z(a){
try{r||(r=(0,l.v5)(await(0,o.$)("pwd-dict.json",a,g))),n.Init(r),n.SetLegacyStrengthCalculation(!0),q=!0}catch(b){throw b}}}},
401:function(a,b,c){"use strict";c.d(b,{O:function(){return Z}});c(63452)
;var d=c(34842),e=c(13064),f=c(3342),g=c(95890),h=c(48658),i=c(83645),j=c(47048),k=c(84428),l=c(42160),m=c(37042),n=c(36786),o=c(41107),p=c(26227),q=c(64737),r=c(48141),s=c(16494),t=c(34560),u=c(58860),v=c(25057),w=c(55195),x=c(4601),y=c(37367),z=c(37156),A=c(60759),B=c(85e3),C=c(93075),D=c(38221),E=c(74435),F=c(47333),G=c(83382),H=c(4234),I=c(61211),J=c(54811),K=c(12131),L=c(71796),M=c(79999),N=c(87450),O=c(98539),P=c(31173),Q=c(88262),R=c(13113),S=c(78440),T=c(4153),U=c(70026),V=c(95399),W=c(69893),X=c(13117)
;const Y="rf-editor.css";async function Z(a,b,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){
const at=a,au=b,av=Z,aw="use-native"===a.extensionMode?Object.assign(Object.assign({},aa),{ShowLoginUI:async function(a){
a1.GetController(0).SetShowNativeLoginDialog(aa.ShowLoginUI),a1.ActivateControllers([0]),a1.UpdateViews(!0)},
OpenPaymentPage:async(a,b)=>a6(a,aa,b),OpenAdminCenter:a7,OpenSignUpEnterprise:async a=>a8(a),OpenRFOPage:a9
}):Object.assign(Object.assign({},aa),{ShowLoginUI:async function(a){a1.ActivateControllers([0]),a1.UpdateViews(!0)},
ShowSharedFolderDialog:async function(a){const b=await av.data.GetInfo(a,1,null);await(0,i.Ng)(b)},
ShowSharedFileSettings:async function(a){const b=await av.data.GetInfo(a,1,null);await(0,i.Gl)(b)},
ShowSendFileDialog:async function(a){if(0===a.length)return;const b=await av.data.GetInfo(a[0],1,null);await(0,i.wJ)(b,null)},
ShowCreateSharedFolderDialog:async function(){const a=await(0,i.sJ)(!1);if(null!==a){const b=(0,R.fA)(a);(0,
h.Xe)(b).Invalidate(),a1.SetState("state-change-event-folder-or-group-created",{category:"category-folders",folder:a})}},
ShowCreateGroupDialog:async function(){const a=await(0,i.sJ)(!0);if(null!==a){const b=(0,R.fA)(a);(0,h.Xe)(b).Invalidate(),
a1.SetState("state-change-event-folder-or-group-created",{category:"category-folders",folder:a})}},
ShowRenameSharedFolderDialog:async function(a){try{const b=await av.data.GetInfo(a.path,1,null),c=await(0,
y.gk)(b,aV,av.data,av.sharing,aA);if("category-folders"===a1.GetCategory()&&a1.GetFolder()===b.path){
a1.SetState("state-change-event-selected-folder-renamed",{category:"category-folders",folder:c});const a=(0,R.fA)(c);(0,
h.Xe)(a).Invalidate()}}catch(b){}},OpenPaymentPage:async(a,b)=>a6(a,aa,b),OpenAdminCenter:a7,
OpenSignUpEnterprise:async a=>a8(a),OpenRFOPage:a9}),ax=ab,ay=ak,az=ao,aA=b,aB=aq,aC=ar,aD=ap;let aE=null
;const aF=null!=ac?ac:(0,q.$)({receivedFiles:!1,groups:!0,regularSharedFolders:!0,onlyLogins:!0
},av.data,av.securityWarningsManager,ax,(()=>a1),as),aG=(0,U.t)();av.rfTemplates=(0,L.P4)({GetServerTemplates:async function(a){
var b;const c={};return null!==(b=await aG.GetData("templates",{maxAgeSec:86400,default:c,onGetData:async a=>{try{
return await av.rfo.GetTemplates(a)}catch(b){if((0,K.tM)(b,7)){const b=`${await(0,F.AT)(av.service)}/templates`;return await(0,
Q.$)(b,a,as)}throw b}}},a))&&void 0!==b?b:c},GetEnterpriseTemplates:async function(){const a=a4.RfTemplates||"";return(0,
L.mG)(a)},GetCustomTemplates:async function(){if(!at.staging)return{};return window.RfCustomTemplates||{}},
GetDisableCommonTemplates:async function(){return a4.DisableCommonTemplates||!1}});const aH=ad,aI=ae,aJ=af,aK=ag,aL=(0,
C._)(av.service,as),aM=(0,w.NF)(av),aN=(0,w.ZK)(av),aO=(0,S.SI)(300),aP=(0,S.tG)(),aQ=(0,S.SI)(300),aR=(0,S.tG)(),aS=(0,
o.rH)(at.browserType,au),aT=(0,F.au)(av.data,aA);aT.Init();const aU=(0,J.I9)(av.data,av.service,av.rfo,aD,aA);aU.Init()
;const aV=function(){const a=(0,y.v9)(av,aw,au,at,aT,aA),b=a.Share;return a.Share=async function(a){try{
const c=await async function(a){if(!a.received&&!a.granted)return a;const b=a.path,c=(0,R.Y0)(b);if(!c)return a;const d=await(0,
h.VO)(c);if(d)return d;return a}(a);return b(c)}catch(c){}},a}();let aW=null,aX=!1,aY=null,aZ=ah?(0,e.Nt)(ah):null;await be()
;const a0=await(0,d.V)(aA,at),a1=(0,e.fN)({m_rf_api:av,m_extension_storage:aj,m_rf_commands:aw,m_ui_commands:aV,
m_rf_page_status:at,m_rf_cached_data_info:aM,m_initial_identity_provider:aU,m_page_preferences:ay,GetNewMenu:()=>bs,
m_view_api:b,m_get_rf_sso_login:aH,m_get_rf_sso_login_callback_handler:aI,m_get_rf_login_method:aJ,
m_get_rf_login_method_callback_handler:aK,m_browser_language_info:aD,m_localization:aA,m_rng:aC,m_http:as
},a0,aZ&&aZ.setup||null,aZ&&aZ.view||null,aZ&&aZ.editor||null,aZ&&aZ.settings||null,aZ&&aZ.sharing||null);aZ=aZ&&aZ.new?{
new:aZ.new}:aZ&&aZ.import?{import:aZ.import}:aZ&&aZ.paymentPage?{paymentPage:aZ.paymentPage}:aZ&&aZ.adminCenter?{
adminCenter:aZ.adminCenter}:aZ&&aZ.signupEnterprise?{signupEnterprise:aZ.signupEnterprise}:null,
a1.onPageStatusChanged.Add((async function(){const b=av.service.GetGlobalStatus();b.m_connected_to_server&&!a2&&(a2=!0,
await bc());b.m_storage_connected&&at.showUsageInfo&&!aY&&await bd();if(b.m_storage_connected&&b.m_logged_in){if(!aZ){
if(ai)return;const b=await Z.options.Get({AccountEnterprise:!1,AccountCompanyAdmin:!1,AccountGroupManager:!1})
;return b.AccountEnterprise&&(b.AccountCompanyAdmin||b.AccountGroupManager)?void("local"===a.type?window.location.replace(`${window.location.origin}/admin-center.html`):(window.location.replace(`${window.location.origin+window.location.pathname}#admin-center`),
window.location.reload())):void 0}const b=aZ;aZ=null,bB(b,!1)}}));let a2=!1,a3={},a4={};await async function(){
a1.UpdatePage(!0),av.data.onDataChanged.Add(ba),av.options.AddOnChangeListener(bb),av.policies.AddOnChangeListener(bb)}(),
au.onNotificationFromBackgroundScript.Add((function(a,...b){if("DataFromBackground"===a){{const a=b[0],c=b[1];(0,
S.uT)(bf(a,c,!1),"_OnNotificationFromBackgroundScript:DataFromBackground")}return}}));const a5=await(0,N.Z)(au,null)
;async function a6(a,b,c){if("local"!==at.type&&!at.isInAppPaymentDisabled){const b=av.service.GetGlobalStatus()
;if(b.m_storage_connected){if(b.m_logged_in)return(0,z.X)(a);throw K.SP}return(0,z.X)(a)}await b.OpenPaymentPage(a,c)}
async function a7(b,c){var d;if("stand-alone"===a.mode)await e();else{
0===(null!==(d=await(null==aj?void 0:aj.GetValue("AdminCenterPage",1)))&&void 0!==d?d:1)?await aw.OpenRFOPage(null,F.q2,{
newTab:!0},null):"local"===a.type?await aa.OpenAdminCenter(b,c):await e()}async function e(){
const c=av.service.GetGlobalStatus();if(!c.m_storage_connected)throw(0,W.ZU)(W.yI,"Disconnected");if(!c.m_logged_in)throw K.SP;{
const c=b&&b.view?`#admin-center&ac-view=${b.view}`:"#admin-center&ac-view=dashboard"
;if("stand-alone"===a.mode)window.location.assign(c),window.location.reload();else{
const a=`${window.location.origin+window.location.pathname}${c}`,b=window.open(a,"_admincenter")
;null==b||b.window.location.reload()}}}}async function a8(a){var b
;const c=null!==(b=null==a?void 0:a.userType)&&void 0!==b?b:"new",d=av.service.GetGlobalStatus()
;if(!d.m_storage_connected)throw window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=new`),
window.location.reload(),(0,W.ZU)(W.yI,"Disconnected")
;if(!d.m_logged_in)throw window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=new`),
window.location.reload(),K.SP
;window.location.replace(`${window.location.origin+window.location.pathname}#signup-enterprise&business-user=${c}`),
window.location.reload()}async function a9(b,c,d,e){if("stand-alone"!==a.mode)await aa.OpenRFOPage(b,c,d,e);else{
const b=a.staging?`https://online-test.roboform.com/site/account/manage?type=${c||"dashboard"}`:`https://online.roboform.com/site/account/manage?type=${c||"dashboard"}`
;window.open(b,"_blank")}}function ba(a){let b=!1,c=!1;for(let d=0;d<a.length;d++){switch(a[d].event){case 2:b=!0;break;case 10:
case 11:a1.OnLogOut(),b=!0;break;case 14:c=!0}}if(at.showUsageInfo){let b=!1;for(let c=0;c<a.length;c++){switch(a[c].event){
case 2:case 3:case 12:b=!0}}b&&aP.Start((async a=>{await(0,S.Gu)(100,a);await bd()&&a1.UpdatePage(!0)}))}aN.OnChanges(a),
a1.GetController(5).OnChanges(a),a1.GetController(9).OnChanges(a),b?a1.UpdatePage(!0):aO.Start((async()=>{a1.UpdatePage(!1)})),
c&&aQ.Start((async()=>{(0,x.kI)()}))}function bb(){aR.Start((async a=>{await(0,S.Gu)(300,a),await bc(),a1.UpdatePage(!0)}))}
async function bc(){var a;const b={ShowBookmarksAndLoginsTogether:!1,SyncIsOn:!1,AccountCompanyAdmin:!1,AccountGroupManager:!1,
AccountEnterprise:!1,LocalizationFile:"",DontShowCompromisedDataIcons:!1},c={SelfHostedServer:!1,DisableCreateLogins:!1,
NoPasscards:!1,DisableCreateBookmarks:!1,NoBookmarks:!1,DisableCreateIdentities:!1,NoIdentities:!1,DisableCreateContacts:!1,
NoContacts:!1,DisableCreateSafenotes:!1,NoSafenotes:!1,DisableNonGroupData:!1,DisableSharing:!1,DisableEmergencyAccess:!1,
ShowPasswordsAsStarsInEditor:!1,DisableLogoff:!1,RfTemplates:"",DisableCommonTemplates:!1};try{a3=await av.options.Get(b),
a4=await av.policies.Get(c),a2=!0}catch(e){a3=b,a4=c}await be()
;const d=null!==(a=a3.DontShowCompromisedDataIcons)&&void 0!==a&&a;aX!==d&&(aX=d,aQ.Start((async()=>{(0,x.kI)()}))),
aE&&aE.UpdateEditorContext({m_rf_options:a3,m_rf_policies:a4})}async function bd(){aY=aY||new Map;const a={mru:{},mruExt:{},
mruExt2:{}};try{const b=await av.data.GetFile(I.dc,"utf16",null);a.mru=JSON.parse(b)||{}}catch(c){a.mru={}}try{
const b=await av.data.GetFile(I.LN,"utf16",null);a.mruExt=JSON.parse(b)||{}}catch(c){a.mruExt={}}try{
const b=await av.data.GetFile(I.l$,"utf16",null);a.mruExt2=JSON.parse(b)||{}}catch(c){a.mruExt2={}}let b=!1;try{const c=aY,d=(0,
I.uI)();d.Load(a);const e=d.GetItemsUsageInfoDetails(null),f=new Set(c.keys());if(e.forEach((a=>{const d=a.path,e=c.get(d)
;e&&(0,T.XM)(e,a)||(b=!0,c.set(d,a),f.delete(d))})),f.size>0){b=!0;for(const a of f)c.delete(a)}}catch(c){(0,
X.Rm)("!!! UpdateItemsUsageDetails failed",c),aY.clear(),b=!0}return b}async function be(){
const a=await av.options.GetValue("LocalizationFile","");if(aW!==a){aW=a;const b=(0,G.p3)(aW)||"";let c=(0,G.Mi)(b)
;c||(c="extension-legacy"===at.mode||"extension-v9"===at.mode&&"use-native"===at.extensionMode?"en":(0,P.Jy)()),
await aA.SetLanguageTag(c,null),await(0,O.oz)(document.body,aA)}}async function bf(a,b,c){if((b||!a)&&!(a=await(0,
N.Z)(au,null)))return;const d=(0,e.Nt)(a);if(d)if(d.view)a1.RestoreState(d.view),
a1.UpdateViews(!1);else if(d.setup)a1.StartAccountSetup(d.setup);else{const a=av.service.GetGlobalStatus()
;a.m_storage_connected&&a.m_logged_in&&(aZ=null,bB(d,c))}}a5&&await bf(a5,!1,!0),
window.addEventListener("visibilitychange",(()=>{a1.OnPageVisibilityChanged(document.visibilityState)}))
;const bg=39,bh=[1,2,3,5,6,7],bi=(0,w.Xp)({UpdateData:async(a,b)=>{const c=await av.usageInfo.GetUsageInfoList(0,1,b)
;for(let d=0;d<c.length;d++)c[d]=aM.GetDataInfo(c[d].path)||c[d],c[d].favorite=!0;return(0,w.lX)(aM,c,bh,32)},
onDataChanged:av.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,w.yJ)(b,bh)});function bj(a){return(0,w.Xp)({
UpdateData:async(b,c)=>(bi.IsUptodate()||await bi.Update(a,b,c),bi.GetData()||[]),onDataChanged:av.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,w.yJ)(b,bh)})}const bk=(0,w.Xp)({UpdateData:async(a,b)=>{
const c=await av.usageInfo.GetUsageInfoList(0,3,b);return(0,w.lX)(aM,c,null,32)},onDataChanged:av.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,w.yJ)(b,null)}),bl=(0,w.Xp)({UpdateData:async(a,b)=>{const c=[];await(0,
J.s_)(av.data,(async a=>{if(1===a.type)try{const d=await av.data.GetDataItem(a.path,4,null,b);(0,H.JG)(d)&&c.push(a)}catch(d){
(0,W.au)(d)}}),{deep:!0,parts:bg},b);return(0,w.lX)(aM,c,[1],bg).sort(((a,b)=>(0,R.Gx)((0,R._p)(a.path),(0,R._p)(b.path))))},
onDataChanged:av.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,w.yJ)(b,[1])}),bm=(0,w.Xp)({UpdateData:async(a,b)=>{
const c=await av.usageInfo.GetUsageInfoList(0,0,b);return(0,w.lX)(aM,c,null,32)},onDataChanged:av.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,w.yJ)(b,null)}),bn=(0,w.Xp)({UpdateData:async(a,b)=>{if(a===H.xG){return{path:H.xG,type:5}}
const c=await av.data.GetInfo(a,bg,b);return aM.UpdateDataInfo(c,bg),c},onDataChanged:av.data.onDataChanged,
ShouldChangeCauseUpdate:(a,b)=>(0,w.Ie)(b,a)}),bo=(0,w.Xp)({UpdateData:async(a,b)=>{if(a===H.xG){
const a=await aU.GetInitialIdentity(null);return(0,F.eQ)(a,{})}return await av.data.GetDataItem(a,4,null,b)},
onDataChanged:av.data.onDataChanged,ShouldChangeCauseUpdate:(a,b)=>(0,w.Ie)(b,a)}),bp=(0,M.AZ)(as);(0,o.AV)({
mainViewHtmlElements:a0,HideSearchDropdown:r.sx}),(0,y.g_)({m_rf_cached_data_info:aM,m_localization:aA}),(0,i.wP)({m_rf_api:av,
m_rf_cache:aN,m_rf_cached_data_info:aM,GetOptions:()=>a3,m_modal_parent_el:a0.commonDialogsParent,m_localization:aA}),(0,h.CE)({
m_rf_api:av,m_ui_commands:aV,m_rf_manager:a1,m_rf_cached_data_info:aM,m_rf_cache:aN,GetOptions:function(){return a3},
GetPolicies:function(){return a4},m_rf_data_item_info_parts:bg,m_localization:aA});const bq=(0,m.b)(av),br=(0,
v.I)(a1,aV,aM,bq,aA,a0),bs=(0,n.IB)({m_rf_api:av,m_rf_commands:aw,m_rf_page_status:at,m_ui_commands:aV,m_rf_manager:a1,
m_rf_items_existance:bq,GetOptions:function(){return a3},GetPolicies:function(){return a4},m_identity_view_structure_loader:bp,
m_initial_identity_provider:aU,m_localization:aA},a0.newMenu);(0,x.C3)({m_rf_api:av,m_rf_commands:aw,m_rf_page_status:at,
m_ui_commands:aV,m_rf_manager:a1,m_rf_items_existance:bq,m_data_item_display_name_provider:aT,m_rf_cached_data_info:aM,
m_rf_cache:aN,GetOptions:()=>a3,GetPolicies:()=>a4,m_rf_cached_data_images:aL,m_rf_new_menu:bs,m_rf_pinned_items_types:bh,
AllItemsPerFolderData:h.Xe,m_items_usage_details:at.showUsageInfo?aY:null,m_rf_items_multiselect:br,m_breach_mon_service:ax,
m_rf_password_audit_service:aF,m_clipboard_cleaner:aS,m_clipboard:aB,m_identity_view_structure_loader:bp,m_localization:aA,
m_main_view_html_elements:a0}),(0,n.zd)({rf_page_status:at,rf_cached_data_info:aM,GetOptions:function(){return a3},
GetPolicies:function(){return a4}});const bt=(0,A.r)(as)
;a1.AddController(0,(0,f.C)(au,av,aw,aH,aI,aJ,aK,aj,at,a1,aM,a0,bt,aZ&&void 0!==aZ.signupEnterprise||!1,al,am,an,az,aD,aA,aB)),
(0,g.x)(a1,aA,a0,at),a1.AddController(2,(0,h.Ue)({m_ui_commands:aV,m_rf_manager:a1,m_rf_new_menu:bs,m_rf_cached_data_info:aM,
m_localization:aA},a0)),a1.AddController(1,(0,g.E)({rf_api:av,rf_manager:a1,page_status:at,
rf_data_pinned:bj("navigator-pinned-items"),rf_items_existance:bq,GetOptions:()=>a3,GetEmergencyAccess:()=>by,localization:aA
},a0)),a1.AddController(3,(0,k.F)({m_rf_api:av,m_ui_commands:aV,m_rf_manager:a1,page_status:at,m_rf_new_menu:bs,
m_rf_items_existance:bq,m_data_item_display_name_provider:aT,m_rf_cached_data_info:aM,AllItemsPerFolderData:h.Xe,
m_rf_data_pinned:bj("data-list-pinned-items"),m_rf_data_popular:bk,m_rf_data_recent:bm,m_rf_data_totp:bl,
m_start_page_preferences:ay,m_localization:aA},a0));let bu="",bv=null;async function bw(a,b,c,d){if(8===b.type){const e=(0,
h.Xe)(b.path);e.IsUptodate()||await e.Update(a,b.path,d);const f=e.GetData()||[]
;for(const a of f)if(8!==a.type&&bx(a.path,c))return!0;for(const b of f)if(8===b.type){if(await bw(a,b,c,d))return!0}return!1}
return bx(b.path,c)}function bx(a,b){const c=(0,H.em)(a);return b.test(c)}a1.GetController(1).onFilterChanged.Add((a=>{
if(bu!==a){if(bu=a,a){const b=new RegExp(a,"i");bv={DoesItemPathMatchFilter:async(a,c,d)=>bw(a,c,b,d),GetDisplayText:()=>a}
}else bv=null;a1.GetController(3).SetDataItemFilter(bv),a1.GetController(2).SetDataItemFilter(bv),(0,h.NL)(bu,a0.dataItems)}})),
a1.AddController(4,(0,j.B)({m_rf_api:av,m_ui_commands:aV,m_rf_manager:a1,m_rf_data_popular:bk,
m_data_item_display_name_provider:aT,m_initial_identity_provider:aU,m_rf_cached_data_info:aM,m_rf_page_status:at,
OnNew:async a=>bs.CreateNew("new-identity",a,!0)},(0,T.TT)(a0.navigator).identity,aA)),a1.AddController(5,function(d,f,g){
let h=null,i=null,j=null,k=null,l=!1,m=null
;const n=(0,e.fy)((async e=>(aE=aE||await Promise.all([c.e(612),c.e(103)]).then(c.bind(c,80794)),await(0,o.D4)(Y),
aE.InitEditorContext({m_rf_page_status:at,m_rf_api:av,m_rf_commands:aw,m_ui_commands:aV,m_rf_manager:a1,
m_rf_cached_data_info:aM,m_rf_items_existance:bq,m_data_item_display_name_provider:aT,m_initial_identity_provider:aU,
m_rf_options:a3,m_rf_policies:a4,m_page_preferences:ay,m_breach_mon_service:ax,password_audit_service:aF,
m_rf_data_item_images:aL,IsStillActual:()=>a1.GetController(5).IsStillActual(),m_clipboard_cleaner:aS,m_clipboard:aB,
m_view_api:b,m_localization:aA,m_main_view_html_elements:a0,m_enable_password_strength_details:a.isPasswordDetailsSupported}),
h=aE.EditorController(d,f,g),i&&(h.InitEditor(i.itemInfo,i.itemData,i.edit,i.create,i.viewItemHistory),i=null),
j&&(h.InitEditorWithCustomView(j),j=null),m&&(h.SetEditorSize(m),m=null),h)));return Object.assign(Object.assign({},n),{
InitEditor(a,b,c,d,e){if(h)return h.InitEditor(a,b,c,d,e);{let f;return i={itemInfo:a,itemData:b,edit:c,create:d,
viewItemHistory:e},f=e?"item history":d?"create":c?"edit":"view",k={m_item_info:a,m_mode:f,m_in_separate_tab:(0,
E.P7)().editorInSeparateTab},l=!0,!0}},InitEditorWithCustomView(a){h?h.InitEditorWithCustomView(a):j=a},UninitEditor(){
h?h.UninitEditor():(i=null,j=null,k=null,l=!1)},IsEditorInitialized:()=>h?h.IsEditorInitialized():l,ItemRenamed(a){
null==h||h.ItemRenamed(a)},ItemCreated(a,b){null==h||h.ItemCreated(a,b)},OnChanges(a){null==h||h.OnChanges(a)},
GetState:()=>h?h.GetState():k,SetEditorSize(a){h?h.SetEditorSize(a):m=a}})}({m_ui_commands:aV,m_rf_manager:a1,
m_rf_service:av.service,m_rf_data_editor_info:bn,m_rf_data_editor_data:bo,m_identity_view_structure_loader:bp,m_localization:aA,
m_rf_cache:aN,m_sharing_api:Z.sharing,m_clipboard:aB},a0.main,a0.editorScreen)),(0,s.ph)({m_view_messaging:au,
m_browser_type:at.browserType,m_rf_api:av,m_rf_manager:a1,m_ui_commands:aV,m_rf_items_existance:bq,m_cached_data_images:aL,
m_localization:aA}),a1.AddController(6,(0,r.gY)()),a1.AddController(7,(0,r.DB)()),a1.AddController(8,(0,p.Q)({rf_api:av,
rf_manager:a1,GetPolicies:function(){return a4},GetEmergencyAccess:function(){return by},page_status:at,localization:aA},a0))
;const by=(0,p.g)({rf_api:av,rf_commands:aw,rf_manager:a1,page_status:at,OnOpenEditor:a1.OnOpenEditor,
GetDataItemInfo:aM.FetchDataInfo,localization:aA},a0.emergencyAccess,a0.editor);a1.AddController(13,(0,B.v)({m_rf_api:av,
m_rf_manager:a1,m_ui_commands:aV,m_localization:aA,m_http:as,m_rng:aC,m_view_api:b,m_page_status:at,m_clipboard_cleaner:aS
},a0)),a1.AddController(9,(0,q.I)({m_rf_api:av,m_breach_mon_service:ax,m_data_item_images:aL,m_password_audit_service:aF,
m_rf_manager:a1,m_ui_commands:aV,m_rf_cache:aN,m_http:as,m_rf_items_multiselect:br,m_rf_new_menu:bs,m_extension_storage:aj,
GetOptions:async()=>a3,GetPolicies:async()=>a4,m_page_preferences:ay,m_localization:aA},a0.securityCenter,a0.files)),
a0.loginCopyright.textContent="Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.",
document.body.addEventListener("mousedown",(a=>{document.querySelectorAll("#v8 .rf-data-view .rf-items .selected").forEach((a=>{
a.classList.remove("selected")}));const b=a.target
;(0,o.ve)()&&null!==(0,D.Yw)(b,".rf-data-view .rf-view-style-item,.rf-data-view-header .selector-item, .rf-items .rf-item,.rf-search-list .rf-item,.rf-search,.rf-account,.rf-new-menu,.rf-navigator .selector-item,.rf-navigator .rf-item-folder,.rf-button,.rf-cmdbutton")&&(0,
o.C1)(),
null===(0,D.LP)(b,"#v8 .rf-view-style-popup")&&null===(0,D.LP)(b,"#v8 .rf-view-style-selector")&&a0.dataItems.header.classList.remove("rf-view-style-popup-shown"),
null===(0,D.LP)(b,"#v8 .rf-more-categories-popup")&&null===(0,D.LP)(b,"#v8 .more-categories-select")&&(0,
T.TT)(a0.navigator).main.classList.remove("rf-more-categories-shown"),(0,D.LP)(b,".dropdown-handler")||(0,
D.LP)(b,".dropdown-popup")||0===a.button&&(0,
D.Yw)(b,".shown-popup-menu")&&b.matches(".rf-item-menu")||0===a.button&&b.matches(".rf-command-more-commands")||(0,o.b2)(!1)}))
;const bz=[{key:"F",auxKeys:["ctrlKey"],action:()=>((0,r.o5)(!0),!0)},{key:"S",auxKeys:["ctrlKey"],action:()=>!0}]
;document.addEventListener("keydown",(a=>{for(let b=0;b<bz.length;b++){const c=bz[b];if(c.keyCode){
if(a.which===c.keyCode)return a.preventDefault(),!c.action()}else if(c.key){if(a.keyCode!==c.key.charCodeAt(0))continue
;const b=c.auxKeys;if(!b)return a.preventDefault(),!c.action();for(let d=0;d<b.length;d++)if(a[b[d]])return a.preventDefault(),
!c.action()}}return!0})),(0,l.r)(av,aw,aV,a1,(()=>a3),(()=>a4),ay,a0,at,b,aA),a1.AddController(10,(0,
e.m_)(av,aw,aH,aJ,a1,at,bt,ax,aj,aD,b,aA,aB,a0));const bA="use-native"===at.extensionMode?()=>aw.ShowImportDialog(!0):null
;function bB(a,b){if(a.settings)a1.OpenSettings(a.settings.section);else if(a.editor)(0,
S.fI)(a1.OpenEditorFromBrowserExtension(a.editor));else if(a.sharing)(0,
S.fI)(a1.OpenSharingDialogFromBrowserExtension(a.sharing,b));else if(a.new){const b=a.new;(0,
S.fI)(a1.CreateNewItemFromBrowserExtension(b.item,b.folderPath||"",b.url))}else a.paymentPage?(0,
S.fI)(aw.OpenPaymentPage(a.paymentPage,null)):a.adminCenter?(0,S.fI)(aw.OpenAdminCenter({view:a.adminCenter.view,
companyCreatedTime:a.adminCenter.companyCreatedTime},null)):a.signupEnterprise?(0,S.fI)(aw.OpenSignUpEnterprise({
userType:a.signupEnterprise},null)):a.import&&(0,S.fI)(a1.OpenImportFromBrowserExtension())}if(a1.AddController(11,(0,t.q)({
rf_api:av,rf_new_menu:bs,parentFrame:a0.mainFrame,localization:aA},{on_show_native_import_dialog:bA,OnStart:()=>{const a=(0,
V.t2)();(0,S.fI)(ay.SetValue("StartPage.StepByStepGuideShownTimestamp",(0,T.bf)(a)))},OnShowPinExtensionStep:()=>{const a=(0,
V.t2)();(0,S.fI)(ay.SetValue("StartPage.PinExtensionShownTimestamp",(0,T.bf)(a)))}})),a1.AddController(12,(0,u.n)({rf_api:av,
rf_manager:a1,localization:aA},a0.files,a0.whyRoboForm)),a0.dataItems.data.addEventListener("scroll",(()=>{(0,
o.DN)(a0.dataItems.data)&&(0,o.b2)(!1)})),a0.dataItems.data.addEventListener("contextmenu",(a=>{
if("category-folders"!==a1.GetCategory())return a.preventDefault(),!1;const b=(0,o.Eo)(a),c=a1.GetFolder()||""
;if(!c)return a.preventDefault(),!1;const d=a.target;return!d||null===(0,D.LP)(d,".rf-item")&&null===(0,
D.LP)(d,".rf-list-item-row")?((0,S.fI)((async()=>{const a=await aM.FetchDataInfo(c);await(0,x.mC)(a,a0.dataItems.data,b)})()),
a.preventDefault(),!1):(a.preventDefault(),!1)})),(0,r.xp)({m_ui_commands:aV,m_rf_api:av,m_rf_manager:a1,m_items_multiselect:br,
m_data_collector:(0,h.nj)("search",a1.GetController(6).GetIsStillActual()),m_data_item_display_name_provider:aT,
m_data_item_info_parts:bg,m_main_view_html_elements:a0,m_search_pane_view_components:a0.searchPane,
m_search_results_view_components:a0.searchResults,ShowSearchResults:function(){
a1.IsSearchResultShown()||(a1.ActivateControllers([6,7],[3,8,9]),setTimeout((()=>{a1.UpdateViews(!1)}),0))},
HideSearchResults:function(){a1.ActivateControllers([a1.GetActiveDataControllerId(a1.GetCategory())],[7]),a1.UpdateViews(!0)},
localization:aA}),window.ResizeObserver){new ResizeObserver((()=>(0,x.gt)())).observe(a0.files)
}else window.addEventListener("resize",x.gt)}},34842:function(a,b,c){"use strict";c.d(b,{V:function(){return i}})
;var d=c(11834),e=c(41107),f=c(31173),g=(c(13117),c(91764)._);const h="start-page-v8.css";async function i(a,b){var c,i;await(0,
f.eA)(),await(0,e.D4)(h);const aB=await async function(a){const b=a.LocalizeString
;let c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay
;const az=g("div",{id:"v8",className:"light-theme"},c=g("div",{className:"rf-main-header hidden"},g("a",{
className:"rf-header-logo",title:"RoboForm",onclick:()=>{
window.location.replace(`${window.location.origin+window.location.pathname}#start-page`),window.location.reload()}}),r=g("div",{
className:"rf-search"},s=g("div",{className:"rf-search-box"},g("div",{className:"rf-search-box-header"}),t=g("div",{
className:"rf-search-box-edit"},u=g("input",{type:"text",placeholder:"Search RoboForm"})),v=g("div",{
className:"rf-search-box-count"}),w=g("div",{className:"rf-search-box-eraser"}),x=g("div",{className:"rf-search-box-arrow",
role:"button",tabIndex:0})),y=g("div",{className:"rf-search-dropdown"}),z=g("div",{className:"rf-progress"},g("div",{
className:"rf-progress-runner hidden"}))),g("div",{className:"rf-flex-gap"}),n=g("div",{className:"rf-start-guide rf-cmdbutton"
}),E=g("div",{className:"rf-account noselect"},F=g("div",{className:"rf-account-box selector-with-dropdown",role:"button",
tabIndex:0,ariaLabel:await b("StartPage_AccountMenu_Label")},H=g("div",{className:"selector-image"}),G=g("div",{
className:"selector-title"}),I=g("div",{className:"dropdown-image"})),J=g("div",{
className:"rf-account-menu rf-fade-in rf-fade-out hidden"}),K=g("div",{
className:"rf-modal-screen rf-account-dropdown-screen rf-fade-in rf-fade-out hidden"}))),d=g("div",{className:"main-frame"
},f=g("div",{className:"rf-login hidden"}),h=g("div",{className:"rf-login-page-copyright hidden"}),e=g("div",{
className:"rf-navigator noselect hidden"}),i=g("div",{className:"rf-view-frame hidden"},A=g("div",{
className:"rf-search-result-view rf-view-list hidden"},D=g("div",{className:"rf-multiselect-cmdbar hidden"}),B=g("div",{
className:"rf-search-list rf-items"}),C=g("div",{className:"rf-no-items rf-no-items-search hidden"})),L=g("div",{
className:"rf-data-view hidden"},Q=g("div",{className:"rf-folder-breadcrumbs"},R=g("div",{className:"container"})),M=g("div",{
className:"rf-data-view-header"},N=g("div",{className:"sort-order-selector order-selector noselect"}),O=g("div",{
className:"sharing-center-order-selector order-selector noselect"}),P=g("div",{className:"authenticator-title"}),S=g("div",{
className:"rf-multiselect-cmdbar noselect hidden"}),g("div",{className:"rf-flex-gap"}),T=g("div",{
className:"rf-view-style-selector rf-view-style-item active hidden"}),U=g("div",{className:"rf-view-style-popup"},V=g("div",{
className:"rf-view-style-item rf-view-style-large",role:"button",tabIndex:0}),W=g("div",{
className:"rf-view-style-item rf-view-style-condensed",role:"button",tabIndex:0}),X=g("div",{
className:"rf-view-style-item rf-view-style-list",role:"button",tabIndex:0}))),Y=g("div",{className:"separator rf-progress"
},g("div",{className:"rf-progress-runner hidden"})),Z=g("div",{className:"rf-data"},aa=g("div",{
className:"rf-items-section rf-items-section-main"},ab=g("div",{className:"rf-items"})),g("div",{className:"rf-no-items hidden"
},g("div",{className:"rf-no-items-icon"}),g("div",{className:"rf-no-items-text"}))),av=g("div",{className:"rf-new-menu"
},aw=g("div",{className:"rf-new-button plus-image",role:"button",tabIndex:0}),ax=g("div",{
className:"rf-new-dropdown rf-fade-out hidden"}),ay=g("div",{
className:"rf-modal-screen rf-new-dropdown-screen rf-fade-in rf-fade-out hidden"}))),ac=g("div",{
className:"rf-password-generator hidden"},g("div",{className:"rf-data-view-header"},ad=g("div",{
className:"password-generator-order-selector order-selector noselect"}))),ae=g("div",{className:"rf-emergency-access hidden"
},g("div",{className:"rf-data-view-header"},af=g("div",{className:"emergency-access-order-selector order-selector noselect"
})),ag=g("div",{className:"separator rf-progress"},g("div",{className:"rf-progress-runner hidden"})),g("div",{
className:"rf-ea-data"},ah=g("table",{className:"rf-ea-accounts"}),ai=g("div",{className:"rf-ea-no-accounts hidden"
})),aj=g("div",{className:"rf-ea-new-contact"},g("div",{className:"rf-new-button plus-image"}))),ak=g("div",{
className:"rf-security-center hidden"},g("div",{className:"rf-section-data-view-header"},al=g("div",{
className:"security-center-tab-order-selector order-selector noselect"})),am=g("div",{
className:"rf-security-center-security-overview"},ao=g("div",{className:"summary-pane"}),g("div",{
className:"rf-data-view-header"},at=g("div",{className:"security-center-order-selector order-selector noselect"}),au=g("div",{
className:"rf-multiselect-cmdbar hidden"})),aq=g("div",{className:"rf-data"},as=g("div",{
className:"rf-no-items rf-no-items-security-center-tab hidden"})),ar=g("div",{
className:"rf-no-items rf-no-items-security-center hidden"}),ap=g("div",{className:"rf-security-center-new-login"},g("div",{
className:"rf-new-button plus-image"}))),an=g("div",{className:"rf-security-center-dark-web-monitoring hidden"})),j=g("div",{
className:"rf-settings hidden"},g("div",{className:"rf-progress"})),k=g("div",{className:"rf-why-roboform hidden"})),p=g("div",{
className:"rf-notification rf-common-notification"},g("div",{className:"rf-notification-msg"}),g("div",{className:"rf-close-btn"
})),l=g("div",{className:"rf-editor-screen rf-modal-screen hidden"}),o=g("div",{
className:"rf-notification rf-editor-notification"},g("div",{className:"rf-notification-msg"}),g("div",{className:"rf-close-btn"
}))),q=g("div",{className:"rf-tooltip"}),m=g("div",{className:"dropdown-popup context-menu-popup hidden"})),aA=new Map
;return aA.set("data-items-section-main",{section:aa,items:ab}),{main:az,commonDialogsParent:d,header:c,startGuideButton:n,
account:{main:E,box:F,title:G,image:H,dropdown:I,menu:J,modalScreen:K},mainFrame:d,login:f,loginCopyright:h,navigator:null,
navigatorStub:e,files:i,dataItems:{main:L,header:M,orderSelectorSort:N,orderSelectorSortPopular:null,
orderSelectorSortRecent:null,orderSelectorSortAlphabet:null,orderSelectorSharingCenter:O,orderSelectorSharingCenterWithMe:null,
orderSelectorSharingCenterByMe:null,authenticatorTitle:P,folderBreadcrumbs:{main:Q,container:R,filterTag:null,filterTagText:null
},multiselectCmdbar:S,viewStyleSelector:T,viewStylePopup:U,viewStyleLarge:V,viewStyleCompact:W,viewStyleList:X,progress:Y,
data:Z,itemsSections:aA},newMenu:{main:av,button:aw,dropdown:ax,modalScreen:ay},passwordGenerator:{main:ac,orderSelector:ad},
emergencyAccess:{main:ae,orderSelector:af,orderSelectorContacts:null,orderSelectorTestators:null,contactsBandge:null,
testatorsBandge:null,progress:ag,accounts:ah,noAccounts:ai,newButton:aj},securityCenter:{main:ak,header:al,securityOverview:am,
dataBreachMonitoring:an,summaryPane:ao,newLogin:ap,data:aq,noItems:ar,noItemsTab:as,noItemsText:null,orderSelector:at,
multiselectCmdbar:au},settings:j,whyRoboForm:k,editorScreen:l,searchPane:{main:r,options:y,box:s,boxEdit:t,boxInput:u,
boxCount:v,boxEraser:w,boxArrow:x,progress:z},searchResults:{main:A,list:B,noItems:C,noItemsText:null,multiselectCmdbar:D},
editor:null,editorNotification:o,commonNotification:p,tooltip:q,contextMenuPopup:m,shownDropdownMenuHandler:null,
shownDropdownMenuPopup:null,shownDropdownMenuModalScreen:null}}(a);"msie"===b.browserType&&aB.main.classList.add("msie"),(0,
e.Qn)([j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O]),
(0,e.Qn)([P,Q,R,S,T,U,V,W,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA])
;const aC=document.querySelector("#v8")
;return aC&&aC.remove(),null===(c=document.querySelector("#rf-start-page-not-loaded"))||void 0===c||c.remove(),
null===(i=document.querySelector("#rf-loading-screen"))||void 0===i||i.remove(),document.body.classList.add("body-v8"),
document.body.appendChild(aB.main),(0,d.Ic)(aB.commonDialogsParent,a),aB}
const j="navigator-all-black87.svg",k="navigator-all-white87.svg",l="navigator-login-black87.svg",m="navigator-login-white87.svg",n="navigator-bookmark-black87.svg",o="navigator-bookmark-white87.svg",p="navigator-safenote-black87.svg",q="navigator-safenote-white87.svg",r="navigator-identity-black87.svg",s="navigator-identity-white87.svg",t="navigator-sharing-center-black87.svg",u="navigator-sharing-center-white87.svg",v="navigator-security-center-black87.svg",w="navigator-security-center-white87.svg",x="navigator-emergency-access-black87.svg",y="navigator-emergency-access-white87.svg",z="navigator-authenticator-black87.svg",A="navigator-authenticator-white87.svg",B="navigator-password-generator-black87.svg",C="navigator-password-generator-white87.svg",D="view-style-grid-black40.svg",E="view-style-grid-white40.svg",F="view-style-grid-active-black87.svg",G="view-style-grid-active-white87.svg",H="view-style-compact-black40.svg",I="view-style-compact-white40.svg",J="view-style-compact-active-black87.svg",K="view-style-compact-active-white87.svg",L="view-style-list-black40.svg",M="view-style-list-white40.svg",N="view-style-list-active-black87.svg",O="view-style-list-active-white87.svg"
;const P="cmd-log-in.svg",Q="cmd-log-in-dark.svg",R="cmd-go-fill-black87.svg",S="cmd-go-fill-hover-dark.svg",T="cmd-go-to-black87.svg",U="cmd-go-to-hover-dark.svg",V="cmd-copy-black87.svg",W="cmd-copy-hover-dark.svg",X="cmd-view-black87.svg",Y="cmd-view-hover-dark.svg",Z="cmd-edit-black87.svg",aa="cmd-edit-hover-dark.svg",ab="cmd-rename-black87.svg",ac="cmd-rename-hover-dark.svg",ad="cmd-move-black87.svg",ae="cmd-move-hover-dark.svg",af="cmd-clone-black87.svg",ag="cmd-clone-hover-dark.svg",ah="cmd-delete-black87.svg",ai="cmd-delete-white87.svg",aj="menu-view-backup-history-hover.svg",ak="menu-view-backup-history-hover-dark.svg",al="cmd-pin-black87.svg",am="cmd-pin-hover-dark.svg",an="cmd-unpin-black87.svg",ao="cmd-unpin-hover-dark.svg",ap="cmd-share-black87.svg",aq="cmd-share-hover-dark.svg",ar="cmd-send-black87.svg",as="cmd-send-hover-dark.svg",at="cmd-print.svg",au="cmd-print-dark.svg",av="cmd-folder-black87.svg",aw="cmd-folder-hover-dark.svg",ax="cmd-exclude-from-security-score.svg",ay="cmd-exclude-from-security-score-dark.svg",az="cmd-include-to-security-score.svg",aA="cmd-include-to-security-score-dark.svg"
},89090:function(a,b,c){"use strict";function d(a,b){for(const c of b)c!==a&&c.Hide();a.Show()}c.d(b,{$:function(){return d}})},
89808:function(a,b,c){"use strict";c.d(b,{A:function(){return d}});const d={version:"9.6.17.0"}},59212:function(a,b,c){
"use strict";a.exports=c.p+"progress-circle.svg"},775:function(a,b,c){"use strict";a.exports=c.p+"search-dark.svg"},
15422:function(a,b,c){"use strict";a.exports=c.p+"search.svg"},85122:function(a,b,c){"use strict";a.exports=c.p+"clear-text.svg"
},20958:function(a,b,c){"use strict";a.exports=c.p+"clone.svg"},47974:function(a,b,c){"use strict";a.exports=c.p+"delete.svg"},
25116:function(a,b,c){"use strict";a.exports=c.p+"editor-close-light.svg"},58863:function(a,b,c){"use strict"
;a.exports=c.p+"editor-close.svg"},6353:function(a,b,c){"use strict";a.exports=c.p+"editor-copy-light.svg"},
15482:function(a,b,c){"use strict";a.exports=c.p+"editor-copy.svg"},2346:function(a,b,c){"use strict"
;a.exports=c.p+"editor-edit-light.svg"},21217:function(a,b,c){"use strict";a.exports=c.p+"editor-edit.svg"},
3846:function(a,b,c){"use strict";a.exports=c.p+"editor-favorite-light.svg"},36029:function(a,b,c){"use strict"
;a.exports=c.p+"editor-favorite.svg"},43503:function(a,b,c){"use strict";a.exports=c.p+"editor-home-light.svg"},
42244:function(a,b,c){"use strict";a.exports=c.p+"editor-home.svg"},41808:function(a,b,c){"use strict"
;a.exports=c.p+"editor-non-favorite-light.svg"},14755:function(a,b,c){"use strict";a.exports=c.p+"editor-non-favorite.svg"},
30526:function(a,b,c){"use strict";a.exports=c.p+"editor-view-in-new-tab-light.svg"},76853:function(a,b,c){"use strict"
;a.exports=c.p+"editor-view-in-new-tab.svg"},89257:function(a,b,c){"use strict";a.exports=c.p+"flag-abkhazia.svg"},
30588:function(a,b,c){"use strict";a.exports=c.p+"flag-afganistan.svg"},57837:function(a,b,c){"use strict"
;a.exports=c.p+"flag-aland-islands.svg"},81465:function(a,b,c){"use strict";a.exports=c.p+"flag-albania.svg"},
73627:function(a,b,c){"use strict";a.exports=c.p+"flag-algeria.svg"},90942:function(a,b,c){"use strict"
;a.exports=c.p+"flag-american-samoa.svg"},21625:function(a,b,c){"use strict";a.exports=c.p+"flag-andorra.svg"},
90292:function(a,b,c){"use strict";a.exports=c.p+"flag-angola.svg"},67857:function(a,b,c){"use strict"
;a.exports=c.p+"flag-anguilla.svg"},4181:function(a,b,c){"use strict";a.exports=c.p+"flag-antigua-and-barbuda.svg"},
31733:function(a,b,c){"use strict";a.exports=c.p+"flag-argentina.svg"},82755:function(a,b,c){"use strict"
;a.exports=c.p+"flag-armenia.svg"},7299:function(a,b,c){"use strict";a.exports=c.p+"flag-aruba.svg"},40260:function(a,b,c){
"use strict";a.exports=c.p+"flag-australia.svg"},78143:function(a,b,c){"use strict";a.exports=c.p+"flag-austria.svg"},
48017:function(a,b,c){"use strict";a.exports=c.p+"flag-azerbaijan.svg"},27641:function(a,b,c){"use strict"
;a.exports=c.p+"flag-azores-islands.svg"},19865:function(a,b,c){"use strict";a.exports=c.p+"flag-bahamas.svg"},
36205:function(a,b,c){"use strict";a.exports=c.p+"flag-bahrain.svg"},44760:function(a,b,c){"use strict"
;a.exports=c.p+"flag-balearic-islands.svg"},68741:function(a,b,c){"use strict";a.exports=c.p+"flag-bangladesh.svg"},
58496:function(a,b,c){"use strict";a.exports=c.p+"flag-barbados.svg"},88502:function(a,b,c){"use strict"
;a.exports=c.p+"flag-basque-country.svg"},54730:function(a,b,c){"use strict";a.exports=c.p+"flag-belarus.svg"},
15153:function(a,b,c){"use strict";a.exports=c.p+"flag-belgium.svg"},25507:function(a,b,c){"use strict"
;a.exports=c.p+"flag-belize.svg"},22744:function(a,b,c){"use strict";a.exports=c.p+"flag-benin.svg"},85726:function(a,b,c){
"use strict";a.exports=c.p+"flag-bermuda.svg"},34732:function(a,b,c){"use strict";a.exports=c.p+"flag-bhutan-1.svg"},
89398:function(a,b,c){"use strict";a.exports=c.p+"flag-bhutan.svg"},53306:function(a,b,c){"use strict"
;a.exports=c.p+"flag-bolivia.svg"},48374:function(a,b,c){"use strict";a.exports=c.p+"flag-bonaire.svg"},19921:function(a,b,c){
"use strict";a.exports=c.p+"flag-bosnia-and-herzegovina.svg"},18927:function(a,b,c){"use strict"
;a.exports=c.p+"flag-botswana.svg"},78920:function(a,b,c){"use strict";a.exports=c.p+"flag-brazil.svg"},87492:function(a,b,c){
"use strict";a.exports=c.p+"flag-british-columbia.svg"},31913:function(a,b,c){"use strict"
;a.exports=c.p+"flag-british-indian-ocean-territory.svg"},23870:function(a,b,c){"use strict"
;a.exports=c.p+"flag-british-virgin-islands.svg"},54369:function(a,b,c){"use strict";a.exports=c.p+"flag-brunei.svg"},
61817:function(a,b,c){"use strict";a.exports=c.p+"flag-bulgaria.svg"},24034:function(a,b,c){"use strict"
;a.exports=c.p+"flag-burkina-faso.svg"},23869:function(a,b,c){"use strict";a.exports=c.p+"flag-burundi.svg"},
70712:function(a,b,c){"use strict";a.exports=c.p+"flag-cambodia.svg"},83374:function(a,b,c){"use strict"
;a.exports=c.p+"flag-cameroon.svg"},41388:function(a,b,c){"use strict";a.exports=c.p+"flag-canada.svg"},86379:function(a,b,c){
"use strict";a.exports=c.p+"flag-canary-islands.svg"},53022:function(a,b,c){"use strict";a.exports=c.p+"flag-cape-verde.svg"},
14816:function(a,b,c){"use strict";a.exports=c.p+"flag-cayman-islands.svg"},18735:function(a,b,c){"use strict"
;a.exports=c.p+"flag-central-african-republic.svg"},27402:function(a,b,c){"use strict";a.exports=c.p+"flag-ceuta.svg"},
5540:function(a,b,c){"use strict";a.exports=c.p+"flag-chad.svg"},28737:function(a,b,c){"use strict"
;a.exports=c.p+"flag-chile.svg"},13083:function(a,b,c){"use strict";a.exports=c.p+"flag-china.svg"},65012:function(a,b,c){
"use strict";a.exports=c.p+"flag-christmas-island.svg"},25921:function(a,b,c){"use strict";a.exports=c.p+"flag-cocos-island.svg"
},37604:function(a,b,c){"use strict";a.exports=c.p+"flag-colombia.svg"},25148:function(a,b,c){"use strict"
;a.exports=c.p+"flag-comoros.svg"},80275:function(a,b,c){"use strict";a.exports=c.p+"flag-cook-islands.svg"},
98550:function(a,b,c){"use strict";a.exports=c.p+"flag-corsica.svg"},2672:function(a,b,c){"use strict"
;a.exports=c.p+"flag-costa-rica.svg"},91505:function(a,b,c){"use strict";a.exports=c.p+"flag-croatia.svg"},
77353:function(a,b,c){"use strict";a.exports=c.p+"flag-cuba.svg"},41836:function(a,b,c){"use strict"
;a.exports=c.p+"flag-curacao.svg"},58004:function(a,b,c){"use strict";a.exports=c.p+"flag-cyprus.svg"},54640:function(a,b,c){
"use strict";a.exports=c.p+"flag-czech-republic.svg"},77079:function(a,b,c){"use strict"
;a.exports=c.p+"flag-democratic-republic-of-congo.svg"},49788:function(a,b,c){"use strict";a.exports=c.p+"flag-denmark.svg"},
20796:function(a,b,c){"use strict";a.exports=c.p+"flag-djibouti.svg"},38456:function(a,b,c){"use strict"
;a.exports=c.p+"flag-dominica.svg"},36915:function(a,b,c){"use strict";a.exports=c.p+"flag-dominican-republic.svg"},
85163:function(a,b,c){"use strict";a.exports=c.p+"flag-east-timor.svg"},1191:function(a,b,c){"use strict"
;a.exports=c.p+"flag-ecuador.svg"},53867:function(a,b,c){"use strict";a.exports=c.p+"flag-egypt.svg"},91953:function(a,b,c){
"use strict";a.exports=c.p+"flag-england.svg"},64085:function(a,b,c){"use strict";a.exports=c.p+"flag-equatorial-guinea.svg"},
18144:function(a,b,c){"use strict";a.exports=c.p+"flag-eritrea.svg"},44119:function(a,b,c){"use strict"
;a.exports=c.p+"flag-estonia.svg"},96779:function(a,b,c){"use strict";a.exports=c.p+"flag-ethiopia.svg"},21491:function(a,b,c){
"use strict";a.exports=c.p+"flag-european-union.svg"},40216:function(a,b,c){"use strict"
;a.exports=c.p+"flag-falkland-islands.svg"},15272:function(a,b,c){"use strict";a.exports=c.p+"flag-faroe-islands.svg"},
48486:function(a,b,c){"use strict";a.exports=c.p+"flag-fiji.svg"},8818:function(a,b,c){"use strict"
;a.exports=c.p+"flag-finland.svg"},99007:function(a,b,c){"use strict";a.exports=c.p+"flag-france.svg"},19135:function(a,b,c){
"use strict";a.exports=c.p+"flag-french-polynesia.svg"},39971:function(a,b,c){"use strict";a.exports=c.p+"flag-gabon.svg"},
77534:function(a,b,c){"use strict";a.exports=c.p+"flag-galapagos-islands.svg"},64293:function(a,b,c){"use strict"
;a.exports=c.p+"flag-gambia.svg"},16670:function(a,b,c){"use strict";a.exports=c.p+"flag-georgia.svg"},61633:function(a,b,c){
"use strict";a.exports=c.p+"flag-germany.svg"},12711:function(a,b,c){"use strict";a.exports=c.p+"flag-ghana.svg"},
28486:function(a,b,c){"use strict";a.exports=c.p+"flag-gibraltar.svg"},24995:function(a,b,c){"use strict"
;a.exports=c.p+"flag-greece.svg"},88132:function(a,b,c){"use strict";a.exports=c.p+"flag-greenland.svg"},1052:function(a,b,c){
"use strict";a.exports=c.p+"flag-grenada.svg"},65496:function(a,b,c){"use strict";a.exports=c.p+"flag-guam.svg"},
83033:function(a,b,c){"use strict";a.exports=c.p+"flag-guatemala.svg"},65180:function(a,b,c){"use strict"
;a.exports=c.p+"flag-guernsey.svg"},90969:function(a,b,c){"use strict";a.exports=c.p+"flag-guinea-bissau.svg"},
21421:function(a,b,c){"use strict";a.exports=c.p+"flag-guinea.svg"},51367:function(a,b,c){"use strict"
;a.exports=c.p+"flag-guyana.svg"},81753:function(a,b,c){"use strict";a.exports=c.p+"flag-haiti.svg"},99925:function(a,b,c){
"use strict";a.exports=c.p+"flag-hawaii.svg"},7842:function(a,b,c){"use strict";a.exports=c.p+"flag-honduras.svg"},
54498:function(a,b,c){"use strict";a.exports=c.p+"flag-hong-kong.svg"},54564:function(a,b,c){"use strict"
;a.exports=c.p+"flag-hungary.svg"},40912:function(a,b,c){"use strict";a.exports=c.p+"flag-iceland.svg"},15943:function(a,b,c){
"use strict";a.exports=c.p+"flag-india.svg"},87108:function(a,b,c){"use strict";a.exports=c.p+"flag-indonesia.svg"},
38870:function(a,b,c){"use strict";a.exports=c.p+"flag-iran.svg"},35441:function(a,b,c){"use strict"
;a.exports=c.p+"flag-iraq.svg"},71523:function(a,b,c){"use strict";a.exports=c.p+"flag-ireland.svg"},89476:function(a,b,c){
"use strict";a.exports=c.p+"flag-isle-of-man.svg"},10562:function(a,b,c){"use strict";a.exports=c.p+"flag-israel.svg"},
51043:function(a,b,c){"use strict";a.exports=c.p+"flag-italy.svg"},82060:function(a,b,c){"use strict"
;a.exports=c.p+"flag-ivory-coast.svg"},83712:function(a,b,c){"use strict";a.exports=c.p+"flag-jamaica.svg"},
81518:function(a,b,c){"use strict";a.exports=c.p+"flag-japan.svg"},36914:function(a,b,c){"use strict"
;a.exports=c.p+"flag-jersey.svg"},47264:function(a,b,c){"use strict";a.exports=c.p+"flag-jordan.svg"},32816:function(a,b,c){
"use strict";a.exports=c.p+"flag-kazakhstan.svg"},73806:function(a,b,c){"use strict";a.exports=c.p+"flag-kenya.svg"},
85683:function(a,b,c){"use strict";a.exports=c.p+"flag-kiribati.svg"},67644:function(a,b,c){"use strict"
;a.exports=c.p+"flag-korea.svg"},79119:function(a,b,c){"use strict";a.exports=c.p+"flag-kosovo.svg"},28469:function(a,b,c){
"use strict";a.exports=c.p+"flag-kuwait.svg"},24478:function(a,b,c){"use strict";a.exports=c.p+"flag-kyrgyzstan.svg"},
16337:function(a,b,c){"use strict";a.exports=c.p+"flag-laos.svg"},82759:function(a,b,c){"use strict"
;a.exports=c.p+"flag-latvia.svg"},20349:function(a,b,c){"use strict";a.exports=c.p+"flag-lebanon.svg"},36980:function(a,b,c){
"use strict";a.exports=c.p+"flag-lesotho.svg"},64192:function(a,b,c){"use strict";a.exports=c.p+"flag-liberia.svg"},
12049:function(a,b,c){"use strict";a.exports=c.p+"flag-libya.svg"},3329:function(a,b,c){"use strict"
;a.exports=c.p+"flag-liechtenstein.svg"},54715:function(a,b,c){"use strict";a.exports=c.p+"flag-lithuania.svg"},
38162:function(a,b,c){"use strict";a.exports=c.p+"flag-luxembourg.svg"},18267:function(a,b,c){"use strict"
;a.exports=c.p+"flag-macao.svg"},53957:function(a,b,c){"use strict";a.exports=c.p+"flag-macedonia.svg"},12454:function(a,b,c){
"use strict";a.exports=c.p+"flag-madagascar.svg"},27113:function(a,b,c){"use strict";a.exports=c.p+"flag-madeira.svg"},
90957:function(a,b,c){"use strict";a.exports=c.p+"flag-malawi.svg"},45691:function(a,b,c){"use strict"
;a.exports=c.p+"flag-malaysia.svg"},96601:function(a,b,c){"use strict";a.exports=c.p+"flag-maldives.svg"},6825:function(a,b,c){
"use strict";a.exports=c.p+"flag-mali.svg"},9269:function(a,b,c){"use strict";a.exports=c.p+"flag-malta.svg"},
8578:function(a,b,c){"use strict";a.exports=c.p+"flag-marshall-island.svg"},66043:function(a,b,c){"use strict"
;a.exports=c.p+"flag-martinique.svg"},4473:function(a,b,c){"use strict";a.exports=c.p+"flag-mauritania.svg"},
38779:function(a,b,c){"use strict";a.exports=c.p+"flag-mauritius.svg"},11422:function(a,b,c){"use strict"
;a.exports=c.p+"flag-melilla.svg"},50471:function(a,b,c){"use strict";a.exports=c.p+"flag-mexico.svg"},1982:function(a,b,c){
"use strict";a.exports=c.p+"flag-micronesia.svg"},24382:function(a,b,c){"use strict";a.exports=c.p+"flag-moldova.svg"},
7863:function(a,b,c){"use strict";a.exports=c.p+"flag-monaco.svg"},18516:function(a,b,c){"use strict"
;a.exports=c.p+"flag-mongolia.svg"},45788:function(a,b,c){"use strict";a.exports=c.p+"flag-montenegro.svg"},
56907:function(a,b,c){"use strict";a.exports=c.p+"flag-montserrat.svg"},76768:function(a,b,c){"use strict"
;a.exports=c.p+"flag-morocco.svg"},47808:function(a,b,c){"use strict";a.exports=c.p+"flag-mozambique.svg"},
10659:function(a,b,c){"use strict";a.exports=c.p+"flag-myanmar.svg"},20589:function(a,b,c){"use strict"
;a.exports=c.p+"flag-namibia.svg"},60734:function(a,b,c){"use strict";a.exports=c.p+"flag-nato.svg"},90185:function(a,b,c){
"use strict";a.exports=c.p+"flag-nauru.svg"},3364:function(a,b,c){"use strict";a.exports=c.p+"flag-nepal.svg"},
91986:function(a,b,c){"use strict";a.exports=c.p+"flag-netherlands.svg"},15096:function(a,b,c){"use strict"
;a.exports=c.p+"flag-new-zealand.svg"},9335:function(a,b,c){"use strict";a.exports=c.p+"flag-nicaragua.svg"},
17037:function(a,b,c){"use strict";a.exports=c.p+"flag-niger.svg"},24403:function(a,b,c){"use strict"
;a.exports=c.p+"flag-nigeria.svg"},9403:function(a,b,c){"use strict";a.exports=c.p+"flag-niue.svg"},89993:function(a,b,c){
"use strict";a.exports=c.p+"flag-norfolk-island.svg"},84166:function(a,b,c){"use strict";a.exports=c.p+"flag-north-korea.svg"},
10529:function(a,b,c){"use strict";a.exports=c.p+"flag-northen-cyprus.svg"},40944:function(a,b,c){"use strict"
;a.exports=c.p+"flag-northern-marianas-islands.svg"},41104:function(a,b,c){"use strict";a.exports=c.p+"flag-norway.svg"},
54011:function(a,b,c){"use strict";a.exports=c.p+"flag-oman.svg"},66069:function(a,b,c){"use strict"
;a.exports=c.p+"flag-orkney-islands.svg"},58262:function(a,b,c){"use strict";a.exports=c.p+"flag-ossetia.svg"},
77467:function(a,b,c){"use strict";a.exports=c.p+"flag-pakistan.svg"},22275:function(a,b,c){"use strict"
;a.exports=c.p+"flag-palau.svg"},8251:function(a,b,c){"use strict";a.exports=c.p+"flag-palestine.svg"},31750:function(a,b,c){
"use strict";a.exports=c.p+"flag-panama.svg"},91424:function(a,b,c){"use strict";a.exports=c.p+"flag-papua-new-guinea.svg"},
50750:function(a,b,c){"use strict";a.exports=c.p+"flag-paraguay.svg"},57188:function(a,b,c){"use strict"
;a.exports=c.p+"flag-peru.svg"},43667:function(a,b,c){"use strict";a.exports=c.p+"flag-philippines.svg"},11:function(a,b,c){
"use strict";a.exports=c.p+"flag-pitcairn-islands.svg"},97226:function(a,b,c){"use strict";a.exports=c.p+"flag-poland.svg"},
82288:function(a,b,c){"use strict";a.exports=c.p+"flag-portugal.svg"},64891:function(a,b,c){"use strict"
;a.exports=c.p+"flag-puerto-rico.svg"},5085:function(a,b,c){"use strict";a.exports=c.p+"flag-qatar.svg"},49651:function(a,b,c){
"use strict";a.exports=c.p+"flag-rapa-nui.svg"},90579:function(a,b,c){"use strict"
;a.exports=c.p+"flag-republic-of-the-congo.svg"},41955:function(a,b,c){"use strict";a.exports=c.p+"flag-romania.svg"},
72757:function(a,b,c){"use strict";a.exports=c.p+"flag-russia.svg"},52663:function(a,b,c){"use strict"
;a.exports=c.p+"flag-rwanda.svg"},66721:function(a,b,c){"use strict";a.exports=c.p+"flag-saba-island.svg"},
71577:function(a,b,c){"use strict";a.exports=c.p+"flag-saint-kitts-and-nevis.svg"},59748:function(a,b,c){"use strict"
;a.exports=c.p+"flag-salvador.svg"},54163:function(a,b,c){"use strict";a.exports=c.p+"flag-samoa.svg"},39545:function(a,b,c){
"use strict";a.exports=c.p+"flag-san-marino.svg"},38538:function(a,b,c){"use strict"
;a.exports=c.p+"flag-sao-tome-and-principe.svg"},48771:function(a,b,c){"use strict";a.exports=c.p+"flag-sardinia.svg"},
25385:function(a,b,c){"use strict";a.exports=c.p+"flag-saudi-arabia.svg"},48762:function(a,b,c){"use strict"
;a.exports=c.p+"flag-scotland.svg"},29491:function(a,b,c){"use strict";a.exports=c.p+"flag-senegal.svg"},77324:function(a,b,c){
"use strict";a.exports=c.p+"flag-serbia.svg"},99635:function(a,b,c){"use strict";a.exports=c.p+"flag-seychelles.svg"},
87400:function(a,b,c){"use strict";a.exports=c.p+"flag-sierra-leone.svg"},412:function(a,b,c){"use strict"
;a.exports=c.p+"flag-singapore.svg"},57214:function(a,b,c){"use strict";a.exports=c.p+"flag-sint-eustatius.svg"},
10119:function(a,b,c){"use strict";a.exports=c.p+"flag-sint-maarten.svg"},13018:function(a,b,c){"use strict"
;a.exports=c.p+"flag-slovakia.svg"},62703:function(a,b,c){"use strict";a.exports=c.p+"flag-slovenia.svg"},2882:function(a,b,c){
"use strict";a.exports=c.p+"flag-solomon-islands.svg"},19548:function(a,b,c){"use strict";a.exports=c.p+"flag-somalia.svg"},
18796:function(a,b,c){"use strict";a.exports=c.p+"flag-somaliland.svg"},15712:function(a,b,c){"use strict"
;a.exports=c.p+"flag-south-africa.svg"},80323:function(a,b,c){"use strict";a.exports=c.p+"flag-south-sudan.svg"},
11677:function(a,b,c){"use strict";a.exports=c.p+"flag-spain.svg"},84676:function(a,b,c){"use strict"
;a.exports=c.p+"flag-sri-lanka.svg"},28144:function(a,b,c){"use strict";a.exports=c.p+"flag-st-barts.svg"},3626:function(a,b,c){
"use strict";a.exports=c.p+"flag-st-lucia.svg"},75576:function(a,b,c){"use strict"
;a.exports=c.p+"flag-st-vincent-and-the-grenadines.svg"},6247:function(a,b,c){"use strict";a.exports=c.p+"flag-sudan.svg"},
53848:function(a,b,c){"use strict";a.exports=c.p+"flag-suriname.svg"},68809:function(a,b,c){"use strict"
;a.exports=c.p+"flag-swaziland.svg"},96886:function(a,b,c){"use strict";a.exports=c.p+"flag-sweden.svg"},68409:function(a,b,c){
"use strict";a.exports=c.p+"flag-switzerland.svg"},90886:function(a,b,c){"use strict";a.exports=c.p+"flag-syria.svg"},
57034:function(a,b,c){"use strict";a.exports=c.p+"flag-taiwan.svg"},59108:function(a,b,c){"use strict"
;a.exports=c.p+"flag-tajikistan.svg"},36724:function(a,b,c){"use strict";a.exports=c.p+"flag-tanzania.svg"},
38715:function(a,b,c){"use strict";a.exports=c.p+"flag-thailand.svg"},5848:function(a,b,c){"use strict"
;a.exports=c.p+"flag-tibet.svg"},20271:function(a,b,c){"use strict";a.exports=c.p+"flag-togo.svg"},26009:function(a,b,c){
"use strict";a.exports=c.p+"flag-tokelau.svg"},21621:function(a,b,c){"use strict";a.exports=c.p+"flag-tonga.svg"},
85994:function(a,b,c){"use strict";a.exports=c.p+"flag-transnistria.svg"},14172:function(a,b,c){"use strict"
;a.exports=c.p+"flag-trinidad-and-tobago.svg"},21009:function(a,b,c){"use strict";a.exports=c.p+"flag-tunisia.svg"},
16276:function(a,b,c){"use strict";a.exports=c.p+"flag-turkey.svg"},59051:function(a,b,c){"use strict"
;a.exports=c.p+"flag-turkmenistan.svg"},69492:function(a,b,c){"use strict";a.exports=c.p+"flag-turks-and-caicos.svg"},
3409:function(a,b,c){"use strict";a.exports=c.p+"flag-tuvalu.svg"},36462:function(a,b,c){"use strict"
;a.exports=c.p+"flag-uganda.svg"},65421:function(a,b,c){"use strict";a.exports=c.p+"flag-ukraine.svg"},21813:function(a,b,c){
"use strict";a.exports=c.p+"flag-united-arab-emirates.svg"},6399:function(a,b,c){"use strict"
;a.exports=c.p+"flag-united-kingdom.svg"},65864:function(a,b,c){"use strict";a.exports=c.p+"flag-united-nations.svg"},
94782:function(a,b,c){"use strict";a.exports=c.p+"flag-united-states.svg"},61410:function(a,b,c){"use strict"
;a.exports=c.p+"flag-uruguay.svg"},99457:function(a,b,c){"use strict";a.exports=c.p+"flag-uzbekistn.svg"},58322:function(a,b,c){
"use strict";a.exports=c.p+"flag-vanuatu.svg"},73374:function(a,b,c){"use strict";a.exports=c.p+"flag-vatican-city.svg"},
25019:function(a,b,c){"use strict";a.exports=c.p+"flag-venezuela.svg"},36078:function(a,b,c){"use strict"
;a.exports=c.p+"flag-vietnam.svg"},21736:function(a,b,c){"use strict";a.exports=c.p+"flag-virgin-islands.svg"},
51350:function(a,b,c){"use strict";a.exports=c.p+"flag-wales.svg"},45919:function(a,b,c){"use strict"
;a.exports=c.p+"flag-western-sahara.svg"},53484:function(a,b,c){"use strict";a.exports=c.p+"flag-yemen.svg"},
18370:function(a,b,c){"use strict";a.exports=c.p+"flag-zambia.svg"},45337:function(a,b,c){"use strict"
;a.exports=c.p+"flag-zimbabwe.svg"},14497:function(a,b,c){"use strict";a.exports=c.p+"folder-black.svg"},26781:function(a,b,c){
"use strict";a.exports=c.p+"go-fill.svg"},24713:function(a,b,c){"use strict";a.exports=c.p+"log-in.svg"},51796:function(a,b,c){
"use strict";a.exports=c.p+"move.svg"},38664:function(a,b,c){"use strict";a.exports=c.p+"print.svg"},31586:function(a,b,c){
"use strict";a.exports=c.p+"rename-dark.svg"},42609:function(a,b,c){"use strict";a.exports=c.p+"rename.svg"},
1597:function(a,b,c){"use strict";a.exports=c.p+"send.svg"},41656:function(a,b,c){"use strict";a.exports=c.p+"share.svg"},
74072:function(a,b,c){"use strict";a.exports=c.p+"view.svg"},44974:function(){},49701:function(){},29165:function(){}
},function(a){a.O(0,[612],(function(){return b=63212,a(a.s=b);var b}));a.O()}]);