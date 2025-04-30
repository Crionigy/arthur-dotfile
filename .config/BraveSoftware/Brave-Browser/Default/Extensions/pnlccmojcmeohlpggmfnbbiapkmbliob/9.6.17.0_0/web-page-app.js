// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[671],{60830:function(a,b,c){c.d(b,{N:function(){return f}})
;var d=c(13113),e=c(73863);function f(){return{OpenUrl:async function(a,b){a.tabId||a.windowId;let c,f=""
;a.newWindow?(c="_blank",f=""):a.newTab?c="_blank":(c="_self",f="");"popup"===a.type&&(f=(0,e.bt)(f,",","popup"))
;void 0!==a.left&&(f=(0,e.bt)(f,",",`left=${a.left}`));void 0!==a.top&&(f=(0,e.bt)(f,",",`top=${a.top}`))
;void 0!==a.width&&(f=(0,e.bt)(f,",",`width=${a.width}`));void 0!==a.height&&(f=(0,e.bt)(f,",",`height=${a.height}`))
;null==b||b.ThrowIfShouldStop();let g=!1;if(a.url&&!a.newTab&&!a.newWindow&&"popup"!==a.type){const b=(0,
d.vN)(window.location.href),c=(0,d.vN)(a.url);let e=(null==b?void 0:b.m_extra)||"";{const a=e.indexOf("#")
;a>-1&&(e=e.slice(0,a))}let f=(null==c?void 0:c.m_extra)||"";{const a=f.indexOf("#");a>-1&&(f=f.slice(0,a))}
e===f&&(null==b?void 0:b.m_host)===(null==c?void 0:c.m_host)&&(null==b?void 0:b.m_port)===(null==c?void 0:c.m_port)&&(null==b?void 0:b.m_schema)===(null==c?void 0:c.m_schema)&&(g=!0)
}window.open(a.url,c,f),g&&window.location.reload();return""}}}},13835:function(a,b,c){c.d(b,{f:function(){return f}})
;var d=c(40371),e=c(4153);function f(a){const b=[],c=a;return{Get:f,GetValue:async function(a,b){const c=await f(a)
;return void 0!==c[a]?c[a]:b},Set:g,SetValue:async function(a,b){const c={};return c[a]=b,g(c)},Remove:async function(a){
const b={};let d=!1;if("string"==typeof a){const e=i(a);e&&(c.removeItem(a),b[a]={oldValue:e},d=!0)
}else if(Array.isArray(a))for(const e of a){const a=i(e);a&&(c.removeItem(e),b[e]={oldValue:a},d=!0)}d&&await h(b)},
Clear:async function(){const a={};let b=!1;for(let d=0;d<c.length;d++){const e=c.key(d);e&&(a[e]={oldValue:i(e)},b=!0)}
c.clear(),b&&await h(a)},AddOnChangeListener:function(a){b.push(a)},RemoveOnChangeListener:function(a){const c=b.indexOf(a)
;c>0&&b.splice(c,1)}};async function f(a){const b={};if(null==a){a=[];for(let b=0;b<c.length;b++)a.push(c.key(b))}
if("string"==typeof a){const c=i(a);void 0!==c&&(b[a]=c)}else if(Array.isArray(a))for(const c of a){const a=i(c)
;void 0!==a&&(b[c]=a)}else for(const c in a){const d=i(c);b[c]=void 0===d?a[c]:d}return b}async function g(a){const b={}
;let c=!1;for(const d in a){if(!Object.prototype.hasOwnProperty.call(a,d))continue;const f=(0,e.TT)(a[d]),g=i(d);j(d,f),b[d]={
oldValue:g,newValue:f},c=!0}c&&await h(b)}async function h(a){await(0,d.SY)(b,a)}function i(a){const b=c.getItem(a)
;return null===b?void 0:b?JSON.parse(b).value:b}function j(a,b){c.setItem(a,JSON.stringify({value:b}))}}},20240:function(a,b,c){
c(45546),c(50607),c(50984),c(69893),c(78440),c(11050),c(13117),c(56580)},97973:function(a,b,c){c.d(b,{Nc:function(){return g},
Op:function(){return h}});c(20240);var d=c(85877),e=c(40868),f=c(4153);c(13117);function g(a,b){const c=a,d=b;return{
PBKDF2_HMAC:async function(a,b,e,f,g,h){if(e<4e3)return i();{const c=await d.Get(a,b,e,f,g,h);if(c)return c;const j=await i()
;return await d.Set(a,b,e,f,g,j,h),j}function i(){return c.PBKDF2_HMAC(a,b,e,f,g,h)}}}}function h(a,b){const c=a,g=b;let h=null
;const i=(0,f.y8)();i.Init();const j=new Set;c.AddOnChangeListener((async function(a){const b=a[g];if(b)if(b.newValue){
const a=b.newValue;a.i&&j.has(a.i)||(h=null)}else h=null}));return{async Init(){h=null},async Get(a,b,c,d,f,g){h||(h=await k())
;const i=await l(a,b,c,d,f),j=h.get(i);return j?(0,e.fI)(j):null},async Set(a,b,d,f,m,n,o){h||(h=await k())
;const p=await l(a,b,d,f,m),q=await(0,e.n1)(n),r=h.get(p);if(!r||r!==q){h.delete(p),h.set(p,q);const a=100
;h.size>a&&(h=new Map([...h.entries()].slice(h.size-a))),await async function(){if(!h)return;const a=i.GetNext();j.add(a);try{
await c.SetValue(g,{v:1,i:a,p:[...h.entries()]})}finally{j.delete(a)}}()}},async Clear(){h&&(await c.Remove(g),h=null)}}
;async function k(){const a=await c.GetValue(g,null);if(1===(null==a?void 0:a.v)&&(null==a?void 0:a.i)){
const c=null==a?void 0:a.p;if(c&&Array.isArray(c)&&0!==c.length&&Array.isArray(c[0])&&2===c[0].length)try{return new Map(c)
}catch(b){}}return new Map}async function l(a,b,c,f,g){const h="string"==typeof a?await(0,e.zN)(a):a,i=await(0,
d.aD)(h),j=new Uint8Array(i.length+b.length+1+4+1+1);let k=0;return j.set(i,0),k+=i.length,j.set(b,k),k+=b.length,
j.set([0],k++),j.set((0,e.uH)(c,4),k),k+=4,j.set([f],k++),j.set([g],k++),(0,e.n1)(await(0,d.aD)(j))}}},17108:function(a,b,c){
c.d(b,{w:function(){return n}})
;var d=c(12442),e=c(94652),f=c(12131),g=c(4234),h=c(46764),i=c(88262),j=c(40868),k=c(21176),l=c(69893),m=c(95399);c(13117)
;function n(a,b,c,n,o){const p=a,q=b,r=n,s=c;return{CreateCompany:async function(a,b,c){
return u((await t()).CreateCompany(a,b,c))},DeleteCompany:async function(a,b){return u((await t()).DeleteCompany(a,b))},
GetCompanyInvitations:async function(a,b){const c=await t(),d=await u(c.GetReceivedItems(a,b));return d.companyInvitations||[]},
GetAllCompanies:async function(a,b){return u((await t()).GetAllCompanies(a,b))},GetCompanyInfo:async function(a){
return u((await t()).GetCompanyInfo(a))},GetCompanyLogoDataUrl:async function(a){return u((await t()).GetCompanyLogoDataUrl(a))
},UpdateCompanyProperties:async function(a,b,c){return u((await t()).UpdateCompanyProperties(a,b,c))},
GetUserCompanies:async function(a){return u((await t()).GetUserCompanies(a))},GetCompanyMembers:async function(a,b,c){
return u((await t()).GetCompanyMembers(a,b,c))},GetCompanyGroups:async function(a,b){return u((await t()).GetCompanyGroups(a,b))
},CreateCompanyMember:async function(a,b){const c=await t();return(await u(c.CreateCompanyMember(a,null,b))).accountId},
RemoveCompanyMember:async function(a,b,c){return u((await t()).RemoveCompanyMember(a,b,c))},
AddExistingUserToCompany:async function(a,b,c,d){return u((await t()).AddExistingUserToCompany(a,b,c,d))},
ConvertCompanyMemberToPersonal:async function(a,b,c){return u((await t()).ConvertCompanyMemberToPersonal(a,b,c))},
SetCompanyAdmin:async function(a,b,c,d){return u((await t()).SetCompanyAdmin(a,b,c,d))},
RecoverCompanyMemberPassword:async function(a,b){return u((await t()).RecoverCompanyMemberPassword(a,b))},
UploadGroupPolicies:async function(a,b,c){return u((await t()).UploadGroupPolicies(a,b,c))},
UploadCompanyPolicies:async function(a,b,c){return u((await t()).UploadCompanyPolicies(a,b,c))},
RemoveMemberFromGroup:async function(a,b,c){const d=await t()
;for(const e of a)for(const a of b)await d.RevokeSharedAccount(e,a,c)},SetTemporaryPassword:async function(a,b,c){
return u((await t()).SetTemporaryPassword(a,b,null,c))},BlockAccount:async function(a,b,c){
return u((await t()).BlockAccount(a,b,c))},SuspendAccount:async function(a,b,c){return u((await t()).SuspendAccount(a,b,c))},
UpdateUserPermissionsForGroup:async function(a,b,c){return u((await t()).UpdateSharedAccountInfo(a,b,c))},
GetMemberGroups:async function(a,b,c){return u((await t()).GetReceivedSharedAccounts(a,b,c))},
GetADConnectorData:async function(a){return u((await t()).GetADConnectorData(a))},PutADConnectorData:async function(a,b){
return u((await t()).PutADConnectorData(a,b))},LeaveCompany:async function(a,b){return u((await t()).LeaveCompany(a,b))},
AddCompanyGroup:async function(a,b,c,d){var i,m;if(!(0,g.Js)(a))throw(0,f.rb)(6,"Invalid group: "+a);if(a.length>60)throw(0,
l.ZU)(l.V2,"Name length must be 1-60 symbols");const n=await t();if(!b){
if(!(b=(null===(i=(await u(n.GetUserCompanies(d))).find((a=>a.isAdmin&&a.companyId)))||void 0===i?void 0:i.companyId)||""))throw(0,
f.rb)(2,"You have no permissions to create a group. Only company admin can create groups.")}
const p=void 0!==(c=c||{}).readOnly?c.readOnly:null,q=void 0!==c.showPasswords?c.showPasswords:null,s=await o.GetConnectionInfo(!0,!0),x=(0,
k.Zf)(e.Rh,(0,k.eG)(),r),y=await u(n.DownloadPubKey(s.accountId||"",void 0,d)),z=await(0,h.A$)(x,y,r);let A;try{
A=await n.CreateSharedAccount(a,x,await(0,j.n1)(z),{readOnly:p,showPasswords:q,
serverOnly:null!==(m=c.serverOnly)&&void 0!==m?m:void 0,companyId:b,disabled:!0,policies:c.policies},d)}catch(C){
throw await v(C),w(C),C}const B=A.accountId||"";return await u(n.UpdateGroupKeyForCompanyAdmins(b,B,x,d)),B},
ImportCompanyMembers:async function(a,b,c,d){return u((await t()).ImportCompanyMembers(a,b,c,s,d))},
ImportCompanyGroups:async function(a,b,c,d){const e=await t();return await u(e.ImportCompanyGroups(a,b,c,d))},
DeleteCompanyGroups:async function(a,b){const c=a;await x(1,b);const d=await t();await x(10,b);const e=80/c.length
;for(let g=0;g<c.length;g++){await x(10+e*g,b);const a=c[g];try{const c=await d.GetSharedAccountRecipients(a,!1,null,b)
;for(const e of c)e.current||await d.RevokeSharedAccount(e.accountId,a,b);await d.DeleteSharedAccount(a,b);continue}catch(f){
if(!(0,l.r5)(f,l.FN))throw f;await d.DeleteSharedAccount(a,b);continue}}await x(100,b)},
AddMemberToGroup:async function(a,b,c,d){const e=await t(),f=await o.GetConnectionInfo(!0,!0);let g;for(const k of a){let a;try{
a=await e.DownloadPubKey(k,void 0,d)}catch(i){(0,l.au)(i)}for(const m of b){
const b=await e.GetSharedAccountRecipientKey(m,f.accountId,void 0,null);let n,p,q=await o.DecryptRemotePassword(b)
;if(q||(g||(g=await e.DownloadPrivateKey(f.accountId,f.password,d)),q=await(0,h.oF)((0,j.fI)(b),g)),!q)throw(0,
l.ZU)(l.V2,"Cannot decrypt shared folder key");try{n=await e.GetSharedAccountRecipientKey(m,void 0,k,d)}catch(i){if(await v(i),
!(0,l.r5)(i,l.Y$))throw i}!n&&a&&(p=await(0,j.n1)(await(0,h.A$)(q,a,r)));try{await e.GrantSharedAccount(m,k,{
manager:null==c?void 0:c.manager,readOnly:null==c?void 0:c.readOnly,showPasswords:null==c?void 0:c.showPasswords,
serverOnly:null==c?void 0:c.serverOnly,inviteIfDoesntExist:null==c?void 0:c.inviteIfDoesntExist,mp:n?void 0:p||void 0,
disabled:!1},d)}catch(i){throw await v(i),w(i),i}}}},GetCompanyIntegrationSettings:async function(a,b){
return u((await t()).GetCompanyIntegrationSettings(a,b))},UpdateCompanyIntegrationSettings:async function(a,b,c){
return u((await t()).UpdateCompanyIntegrationSettings(a,b,c))},GetCompanyGoogleWorkspaceGroupStates:async function(a,b){
return u((await t()).GetCompanyGoogleWorkspaceGroupStates(a,b))},SetCompanyGoogleWorkspaceGroupStates:async function(a,b){
return u((await t()).SetCompanyGoogleWorkspaceGroupStates(a,b))},SendResetMasterPasswordEmail:async function(a,b){
const c=await t();return await c.CreateRFOSession({timezone:(0,m.Kl)((0,m.M1)())},b),u(c.SendResetMasterPasswordEmail(a,b))},
JoinCompany:async function(...a){throw f.lU}};async function t(){const a=(0,e.Bc)(p,q,r),b=await o.GetConnectionInfo(!0,!0)
;return a.Connect(b.clientInfo,b.deviceId,b.serverUrl,b.loginToken,b.password,{useSessionCookies:b.useSessionCookies,
deviceDescription:b.deviceDescr}),a}async function u(a){try{return await a}catch(b){throw(0,d.WZ)(b)&&await o.LogoffOnError(),b}
}async function v(a){if((0,d.WZ)(a))throw await o.LogoffOnError(),a}function w(a){if((0,
i.dW)(a)&&a.sibError===l.FN&&403===a.httpResponse.status){const b=a.httpResponse.headers["x-sib-reason"]||""
;if("trial-expired"===b||"license-expired"===b)throw f.JF}}async function x(a,b){b&&await b.Progress({percents:a})}}},
52090:function(a,b,c){c.d(b,{V:function(){return l}})
;var d=c(99196),e=c(4234),f=c(78949),g=c(54811),h=c(12131),i=c(95399),j=c(78440),k=c(69893);c(13117);function l(){const a=(0,
d.Je)();let b,c=null,l=null,m=null;const n={receivedFiles:!1,groups:!0,regularSharedFolders:!0,onlyLogins:!0};let o=!1,p=null
;const q=(0,j.nu)();let r=!1;const s=new Set;let t=null,u=!1;return{Init:async function(a,d,e,f){await v(),c=a,b=d,l=e,m=f,
c.onDataChanged.Add(B),m&&m.onUserDataBreachesUpdated.Add(C)},UnInit:v,GetCachedPasswordStrengthInfo:async function(a,b){
if(o)return D(a);return null},GetUpdatePasswordStrengthInfo:async function(a,b){if(!o&&(await x(null!=b?b:(0,
j.f4)(null,null,null)),!o))throw(0,k.ZU)(k.V2,"cannot get password strength - data update is aborted");return D(a)},
GetCachedPasswordStrengthLevel:async function(b,c){if(o)return a.GetPasswordStrengthLevel(b);return null},
GetUpdatePasswordStrengthLevel:async function(b,c){if(!o&&(await x(null!=c?c:(0,j.f4)(null,null,null)),!o))throw(0,
k.ZU)(k.V2,"cannot get password strength - data update is aborted");return a.GetPasswordStrengthLevel(b)},
GetUpdateAuditResult:async function(b,c){if(!o||b){b&&(r=!0);try{await x(null!=c?c:(0,j.f4)(null,null,null))}catch(d){(0,
k.au)(d)}if(!o)throw(0,k.ZU)(k.V2,"cannot get audit result - data update is aborted")}return a.GetSecurityReportForAddedItems()
},GetLastUpdateTime:async function(a){return p}};async function v(){await w(),t=null,m&&m.onUserDataBreachesUpdated.Remove(C),
c&&c.onDataChanged.Remove(B),m=null,l=null,c=null}async function w(){await async function(){q.IsExecuting()&&await q.Stop()}(),
a.Clear(),o=!1,r=!1,s.clear()}async function x(d){if(!o||r||s.size){if(!c)throw(0,k.ZU)(k.V2,"service is not initialized")
;await async function(d){await q.Execute({action:async d=>{u||await async function(c){if(u)return
;const d=await async function(a){if(!b)throw(0,k.ZU)(k.V2,"Unexpected internal error");if(!t)try{t=await b(a)}catch(c){throw(0,
k.ZU)(k.V2,"Load password dictionary failed")}return t}(c);o=!1,a.Init(d),u=!0}(d);let f=!1;o&&!r||(f=!0,r=!1);const g=[...s]
;s.clear(),await async function(a,b,d){if(!c)throw(0,k.ZU)(k.V2,"data storage is null");if(!b&&!a.length)return;const f=new Set
;if(m&&l){(await l.GetAllDataItemsWhereSecurityWarningIsDisabled([0],d)).forEach((a=>f.add(a.path)))}
if(b)await y("",f,d);else for(const c of a)d&&await d.YieldToUI(30),8===(0,e.hF)(c)?await y(c,f,d):await z(c,f,d)}(g,f,d)
;const h=(0,i.t2)();p=h,f&&(o=!0)}},d)}(d)}}async function y(b,f,h){if(!c)throw(0,k.ZU)(k.V2,"data storage is null")
;const i=new Set;a.ListItems().forEach((a=>{(0,e.QC)(b,a)&&i.add(a)}));let j=!0;if(""!==b)try{await c.GetInfo(b,0,h)}catch(l){
if((0,k.au)(l),!(0,k.r5)(l,k.Y$))throw l;j=!1}j&&await(0,g.s_)(c,(async a=>{h&&await h.YieldToUI(30),(0,
d.pp)(a,n)&&(i.delete(a.path),await A(a,f.has(a.path),h))}),{path:b,deep:!0,parts:1},h),i.forEach((b=>a.RemoveItem(b)))}
async function z(b,d,e){if(!c)throw(0,k.ZU)(k.V2,"data storage is null");try{const a=await c.GetInfo(b,1,e)
;await A(a,d.has(a.path),e)}catch(f){if(a.RemoveItem(b),(0,k.au)(f),!(0,k.r5)(f,k.Y$)&&!(0,h.tM)(f,4))throw f}}
async function A(b,d,e){if(!c)throw(0,k.ZU)(k.V2,"data storage is null");try{const g=await c.GetDataItem(b.path,4,null,e)
;let h=null;try{h=m?await m.GetCachedUserDataItemBreaches(b.path,e):null}catch(f){(0,k.au)(f)}a.AddItem({info:b,data:g,
breaches:h,excludedFromScore:d,includeToPersonalStats:!0})}catch(f){(0,k.au)(f);let d=!1;if((0,h.tM)(f,4)||(0,
h.tM)(f,2))d=!0;else try{await c.GetInfo(b.path,0,e),(0,h.tM)(f,1)&&(d=!0)}catch(g){(0,k.au)(g),(0,h.tM)(g,4)&&(d=!0)}
if(!d)throw f;a.RemoveItem(b.path)}}function B(a){if(!o)return;let b=0,c="",d="";for(const e of a)switch(e.event){case 10:
case 3:case 2:return void(0,j.fI)(w());case 5:case 6:case 7:case 8:1===e.type&&e.path?(s.add(e.path),c=e.path,b++,
8===e.event&&e.to&&e.to.path&&(d=e.to.path,s.add(e.to.path))):8===e.type&&e.path&&8===e.event&&e.to&&e.to.path&&(c=e.path,
s.add(e.path),d=e.to.path,s.add(e.to.path),b++)}b&&(0,j.uT)(async function(){await x((0,j.f4)(null,null,null))
}(),"RfPasswordAuditService:_OnDataChanged")}function C(a,b){o&&1===(0,e.hF)(a)&&(s.add(a),(0,j.uT)(async function(){await x((0,
j.f4)(null,null,null))}(),"RfPasswordAuditService:_OnUserDataBreachesUpdated"))}function D(b){const c=a.GetPasswordStrength(b)
;let d=Math.floor((0,f.im)(b,[],null,t)+.5);return d>100&&(d=100),{strength:c,complexity:d}}}},11719:function(a,b,c){c.d(b,{
VA:function(){return B}})
;var d=c(55674),e=c(12442),f=c(17108),g=c(99196),h=c(66927),i=c(94652),j=c(50421),k=c(42058),l=c(60026),m=c(4234),n=c(32130),o=c(62376),p=c(54811),q=c(12131),r=c(46764),s=c(21176),t=c(88262),u=c(13113),v=c(78440),w=c(40371),x=c(69893),y=c(4153),z=c(40868),A=c(73863)
;c(13117);function B(a,b,c,B,E,F,G,H,I,J,K,L,M,N,O){const P=function(a,b,c,B,E,F,G,H,I,J,K,L,M,N,O){const P=L,Q=M,R=J,S=O,T=N
;let U=!1;const V=a,W=E,X=F,Y=G,Z=B,aa=K;let ab=b;const ac=c;let ad={},ae=!1,af=!1,ag=[];const ah=(0,h.o)(V,(a=>aL(a)),(0,
i.Bc)(P,Q,S),W,Q,T,S,P);let ai=0,aj=null;const ak=1e3,al=6e4,am=(0,v.h1)();let an=null,ao=15;const ap=(0,v.tG)(),aq=(0,
e.wp)(P,Q,S,{GetConnectionInfo:aL,DecryptRemotePassword:bg,LogoffOnError:a5}),ar=(0,f.w)(P,Q,T,S,{GetConnectionInfo:aL,
DecryptRemotePassword:bg,LogoffOnError:a5}),as=(0,w.dU)(),at=(0,w.dU)(),au=(0,w.dU)(),av=(0,w.dU)(),aw={Init:ax,Connect:ay,
Disconnect:az,GetServerUrl:aG,SetServerUrl:aH,GetDeviceId:aI,GetClientAppInfo:aJ,GetCredentials:aK,
StorePasswordInStoredCredentials:aN,DeletePasswordFromStoredCreadentials:aO,SetSessionMode:aQ,SyncNow:aS,LogoffOnError:a5,
rfo:Object.assign(Object.assign({},aq),{CreateAccount:bz,DeleteAccount:bA,ChangeAccountPassword:bB,ResetAccountPassword:bC}),
service:{GetGlobalStatus:a7,Login:aD,Logoff:aE,GetRFOnlineUserId:a8,IsMasterPassword:a9,WasNewMasterPasswordAlreadyUsed:ba,
GetRfoConnectionInfo:aL,GetRoboFormAccountInfo:V.GetRoboFormAccountInfo,GetDomainMatch:bb,GetMatchingPasscards:bq,
FindInPathNames:bc,GetUserDataItemsCount:bf,GetSyncPendingItems:aT,GetAvailableAuthenticationMethods:aM,
StorePasswordInSystemProtectedStorage:aN,DeletePasswordFromSystemProtectedStorage:aO,
GetDataEncryptionSettings:V.GetDataEncryptionSettings,UpdateDataEncryptionSettings:aP,onLogInStarted:as,onLogInFinished:at,
onSyncStarted:au,onSyncSucceeded:av},data:{List:bj,CreateFolder:br,CopyFile:bs,CopyFolder:bt,DeleteFile:bu,DeleteFolder:bv,
MoveFile:bw,MoveFolder:bx,GetInfo:bk,GetDataItem:bl,PutDataItem:by,GetCounts:bm,GetFile:bn,PutFile:bo,LogFileAccess:bp,
onDataChanged:(0,w.dU)()},usageInfo:{GetUsageInfoList:cR,SetUsageInfoList:cT,SetUsageInfo:cU,GetSearchHistoryList:cS,
AddItemToSearchHistory:cV,SetSearchHistoryList:cW},policies:V.policies,settings:{Get:V.settings.Get,
GetValue:V.settings.GetValue,Set:cN,SetValue:cO,Remove:cP,Clear:cQ,AddOnChangeListener:V.settings.AddOnChangeListener,
RemoveOnChangeListener:V.settings.RemoveOnChangeListener},options:V.options,emergencyAccess:{GetEmergencyInvitations:co,
GetEmergencyContacts:cp,GetTestators:cq,InviteEmergencyContact:cr,RevokeEmergencyContact:cs,AcceptEmergencyContactInvitation:ct,
AcceptEmergencyContactInvitationByCode:cu,RejectEmergencyContactInvitation:cv,UpdateEmergencyContactInfo:cw,
RequestEmergencyAccess:cx,RejectEmergencyAccess:cy,GrantEmergencyAccess:cz,RevokeEmergencyAccess:cA,
GetEmergencyContactDataItems:cB},enterprise:Object.assign(Object.assign({},ar),{JoinCompany:cC,LeaveCompany:cD,
DeleteCompanyGroups:cE,ImportCompanyGroups:cF,AddMemberToGroup:cI,RemoveMemberFromGroup:cG,GetCompanyGroups:cH}),sharing:{
AcceptSharedAccount:bL,AcceptSharedAccountByCode:bM,RejectSharedAccount:bN,GrantSharedAccount:b5,UpdateSharedAccountInfo:bO,
GetReceivedAccounts:bP,GetKnownRecipients:bQ,GetKnownRecipients2:bR,GetSharedAccountRecipients:bS,
GetSharedAccountRecipients2:bT,GetSharedAccountInfo:bU,GetSharedFolderRecipients:bV,GetSharedFolderInfo:bW,
GetSharedFolderInfoAndRecipients:bX,GrantSharedFolder:b6,RejectSharedFolder:bY,RevokeSharedFolder:bZ,
CreateSharedFolderOrGroup:b8,CreateSharedFolderOrGroup2:b9,DeleteSharedFolder:ca,RenameSharedFolder:b1,StopSharingFolder:b2,
UpdateSharedFolderInfo:b0,ShareExistingFolder:b3,ShareExistingFolder2:b4,AcceptSharedFile:cf,AcceptSharedFileByCode:cg,
RejectSharedFile:ch,GrantSharedFile:cm,RevokeSharedFile:cl,SendFiles:cn,GetSharedFileUsersInfo:cj,GetSharedFileInfo:ck,
GetReceivedFiles:ci},passwordsHistory:{GetHistory:cJ,AddPassword:cK,UpdatePasswordData:cM,Clear:cL},securityWarningsManager:{
GetSecurityWarningEnabledForDataItem:c1,DisableSecurityWarningForDataItem:c2,GetAllDataItemsWhereSecurityWarningIsDisabled:c3,
EnableSecurityWarningForAllDataItems:c4},securityStats:{GetGroupSecurityStatistics:bd,GetUserSecurityStatistics:be},backups:{
AreBackupsSupported:bD,GetLocalBackups:D,GetServerBackups:bE,GetItemsToRestoreFromLocalBackup:D,
GetItemsToRestoreFromServerBackup:bI,RestoreItemsFromLocalBackup:D,RestoreItemsFromServerBackup:bJ,DeleteLocalBackup:D,
DeleteServerBackup:bG,CreateLocalBackup:D,CreateServerBackup:bF,ChangeServerBackupStatus:bH,CreateLocalRecoveryBackup:D,
ListOwnedAndManagedReceivedAccounts:cb}};return aw;function ax(){ad={},ae=!1,af=!1,ag=[],U=!1}async function ay(a){
if(await az(),U)return;const b=await async function(a,b,c){const d=await a.GetValue("_rfoAccount","{}");let e;try{
e=JSON.parse(d)}catch(f){throw(0,x.ZU)(x.V2,`Bad stored credentials JSON: ${(0,x.EB)(f)}`)}if(e.accountId&&e.password){
const a=await(0,k.lr)(e.password,e.accountId,b,c);return Object.assign(Object.assign({},e),{password:a})}return e}(X,Q,a)
;if(ad=b,ae=!0,b.accountId&&await V.LoadOptionsFromCache(b.accountId),!b.loginToken)throw q.SP;await aA(),U=!0}
async function az(){U&&(await aB(),ax())}async function aA(){V.IsConnected()||(await V.Connect(),V.onDataChanged.Add(aC))}
async function aB(){V.IsConnected()&&(V.onDataChanged.Remove(aC),await V.Disconnect())}function aC(a){
V.IsLoggedIn()&&aw.data.onDataChanged.CallAllSync(a)}async function aD(a,b){as.CallAllSync();try{await c()}finally{
at.CallAllSync(void 0!==a.password,V.GetGlobalStatus().m_logged_in)}async function c(){var d,e,f,g,h,j;const k=ad
;if(!(a.email||k.loginToken||k.userId))throw q.SP;const l=a.password||k.password;if(!l)throw q.SP;const m=(0,i.Bc)(P,Q,S)
;let n,o=(a.email?a.server:k.serverUrl)||ab;a:for(;;){try{
a.email?n=await m.ConnectAndLoginWithCredentials(ac,Z,o,a.email,void 0,l,"interactive",{sessionTimeout:a.sessionTimeout,
deviceDescription:a.deviceDescription,useSessionCookies:af
},b):a.password?n=await m.ConnectAndLoginWithCredentials(ac,Z,o,void 0,null!==(e=null!==(d=k.loginToken)&&void 0!==d?d:k.userId)&&void 0!==e?e:"",a.password,"interactive",{
sessionTimeout:a.sessionTimeout,deviceDescription:a.deviceDescription,useSessionCookies:af
},b):(m.Connect(ac,Z,o,null!==(f=k.loginToken)&&void 0!==f?f:"",null!==(g=k.password)&&void 0!==g?g:"",{
sessionTimeout:a.sessionTimeout,deviceDescription:a.deviceDescription,useSessionCookies:af}),
n=af?await m.LoginWithSession("stored",b):await m.LoginNoSession("stored",b))}catch(p){if(a3(p)){
o=p.httpResponse.headers.location;continue a}if((0,x.r5)(p,x.JI)){let b;b=a.email?{userId:a.email,password:l,serverUrl:o}:{
loginToken:k.loginToken,userId:k.userId,accountId:k.accountId,password:l,serverUrl:o,enterprise:k.enterprise},ad=b,
void 0!==a.password&&(ae=!1)}else if((0,x.r5)(p,x.rS)&&k.password){const a=Object.assign(Object.assign({},k),{password:""})
;ad=a,await aR(b)}else if((0,x.r5)(p,x.Y$)&&!a.email&&a.password&&k.loginToken&&k.userId){a=Object.assign(Object.assign({},a),{
email:k.userId});try{return void await c()}catch(r){if((0,x.bf)(r))throw r;if(!(0,x.r5)(r,x.rS))throw r}}else if((0,
x.r5)(p,x.Un)){const a=await a0(o,b);if(a){o=a;continue a}}throw p}break a}if(n.loginMethodToSwitch){let c;if(c=a.email?{
userId:a.email,password:l,serverUrl:ab}:{loginToken:k.loginToken,userId:k.userId,accountId:k.accountId,password:l,serverUrl:ab,
enterprise:k.enterprise},ad=c,void 0!==a.password&&(ae=!1),await aR(b),!c.userId)throw(0,
x.ZU)(x.V2,"There is no user email in login credentials and options")}if(!n.oneFile)throw(0,
x.ZU)(x.V2,"Cannot access account created by older versions of RoboForm");if(ab=o,V.SetOneFileAccount(!0),
n.accountId&&k.accountId!==n.accountId&&await V.LoadOptionsFromCache(n.accountId),await V.UpdateAccountInfo(n),
await Y.SetPassword(null!==(j=null!==(h=n.clientKey)&&void 0!==h?h:n.accountId)&&void 0!==j?j:null),ad={loginToken:n.login,
userId:n.email,accountId:n.accountId,password:l,serverUrl:ab,enterprise:n.enterprise},void 0!==a.password&&(ae=!1),ae){
if(!1===await V.policies.GetValue("StoreMPInSystemProtectedStorage",null))throw ad=Object.assign(Object.assign({},ad),{
password:void 0}),await aR(b),q.SP}await aA(),U=!0,await bh(l,b),ao=n.syncIntervalMins||15;try{await aU(!1,b)}catch(p){throw(0,
q.tM)(p,15)&&await aR(b),p}await aR(b)}}async function aE(a){const b=V.GetGlobalStatus();try{
am.IsExecuting()?await am.Wait(a):(b.m_have_local_changes||3===ai)&&await aU(!0,a),await aV();const c=cZ();await c.Logoff(a)
}catch(c){if((0,x.bf)(c))throw c}finally{await aF()}}async function aF(){an=null,ai=0,ad=Object.assign(Object.assign({},ad),{
password:""}),await aR(null),await bi(null),ag=[]}function aG(){return ab}function aH(a){ab=a}function aI(){return Z}
function aJ(){return ac}function aK(){return ad}async function aL(a){var b,c,d;const e=ad;return{clientInfo:ac,
serverUrl:ad.serverUrl||ab,useSessionCookies:af,deviceId:Z,deviceDescr:"",
accountId:a&&null!==(b=e.accountId||e.userId)&&void 0!==b?b:"",loginToken:a&&null!==(c=e.loginToken||e.userId)&&void 0!==c?c:"",
password:a&&null!==(d=e.password)&&void 0!==d?d:""}}async function aM(a){return{masterPassword:!0,
cacheBetweenBrowserSessions:!0,systemProtectedStorage:!0}}async function aN(a,b){const c=ad;if(c.password!==a)throw(0,
q.rb)(1,"Wrong password");return C(F,c,Q,S,b)}async function aO(a){const b=Object.assign(Object.assign({},ad),{password:""})
;return C(F,b,Q,S,a)}async function aP(a,b){
if(a.m_enc_algorithm<0||a.m_enc_algorithm>=5||a.m_pbkdf_sha_iterations<100||a.m_pbkdf_sha_iterations>8388608)throw(0,
q.rb)(5,"bad encryption settings");await V.settings.SetValue("EncryptionAlgorithmIterations",a.m_pbkdf_sha_iterations),
await V.UpdateDataEncryptionSettings(a,b),await aS(b)}function aQ(a){af=a}async function aR(a){var b,c
;const d=ad,e=await V.GetRoboFormAccountInfo(a),f=(0,
o.yD)(!1,null!==(b=d.enterprise)&&void 0!==b&&b,null!==(c=e.createdTime)&&void 0!==c?c:null)
;if(1===await V.options.GetValue("AuthenticationMethod",f))return C(F,d,Q,S,a);{const b=Object.assign(Object.assign({},d),{
password:""});return C(F,b,Q,S,a)}}async function aS(a){return await aU(!1,a)}async function aT(a){
return an?an.pendingItems:null}async function aU(a,b){try{await ap.Stop();const c=await am.Execute({action:b=>aZ(a,b)},b)
;return c.forceMasterPasswordChange||await aW(1),c}catch(c){throw await a6(c),await aW(1),c}}async function aV(){
await am.Stop(),await ap.Stop()}async function aW(a){switch(a){case 3:
ai=3,ah.IsSyncRunning()?ah.SetPendingSyncRequest():await aX(ak);break;case 2:ai<2&&(ai=a,await aX(al));break;case 1:ai<1&&(ai=a,
ap.IsExecuting()||await aX(60*ao*1e3))}}async function aX(a){aj=a,ap.Start(aY)}async function aY(a){null!==aj&&await(0,
v.Gu)(aj,a);a:for(;;){null==a||a.ThrowIfShouldStop();try{await am.Execute({action:a=>aZ(!1,a)},a)}catch(b){if((0,
x.r5)(b))switch(b.sibError){case x.kd:throw b;case x.m:continue a;case x.rS:case x.JI:throw await am.Stop(),await aF(),b
;case x.FN:if((0,e.xB)(b))throw await am.Stop(),await aF(),b}}await(0,v.Gu)(60*ao*1e3,a)}}async function aZ(a,b){an=null,
au.CallAllSync();let c,d=!1;try{const e=ad;c=await ah.AnalyzeAndSync(ac,Z,{useSessionCookies:af},e,e.password||"",!1,!1,a,(a=>{
ad=a,d=!0}),aw.securityStats,aa,b),an=c}catch(e){if((0,q.tM)(e,15))d&&await aR(b);else if((0,x.r5)(e,x.Un)){
const c=await a0(ad.serverUrl||"",b);c&&(await a1(c,b),await aZ(a,b))}else if(a3(e)){const c=e.httpResponse.headers.location
;await a1(c,b),await aZ(a,b)}throw e}return d&&await aR(b),av.CallAllSync(c),c}async function a0(a,b){const c=(0,u.$0)(a);let d
;if("accounts.roboform.eu"===c)d="https://online.roboform.com";else{if("accounts-stage.roboform.eu"!==c)return null
;d="https://online-test.roboform.com"}const e=(0,i.Bc)(P,Q,S);let f;e.Connect(ac,Z,d,"","",{useSessionCookies:af});try{
f=await e.GetAllServers(null,b)}catch(h){return null}const g=f.servers;if(!g||0===g.length)return null
;return-1!==g.findIndex((a=>a.address===c))?null:d}async function a1(a,b){let c=a;a:for(let d=0;!(d>=10);d++){
const a=await a2(c);if(!a)break a;c=a}ad=Object.assign(Object.assign({},ad),{serverUrl:c}),await aR(b)}async function a2(a){
var b,c;const d=(0,i.Bc)(P,Q,S)
;d.Connect(ac,Z,a,null!==(b=ad.loginToken)&&void 0!==b?b:"",null!==(c=ad.password)&&void 0!==c?c:"",{sessionTimeout:void 0,
deviceDescription:void 0,useSessionCookies:af});try{
af?await d.LoginWithSession("stored",null):await d.LoginNoSession("stored",null)}catch(e){if(a3(e)){
return e.httpResponse.headers.location}throw e}return null}function a3(a){return(0,
t.dW)(a)&&a.sibError===x.FN&&403===a.httpResponse.status&&a.httpResponse.headers&&"redirect"===a.httpResponse.headers["x-sib-reason"]
}async function a4(a){try{return await a}catch(b){throw(0,e.WZ)(b)&&await a5(),b}}async function a5(){await aV(),await aF()}
async function a6(a){if((0,e.WZ)(a))throw await a5(),a}function a7(){return V.GetGlobalStatus()}async function a8(){return{
userId:ad.userId||"",serverUrl:ad.serverUrl||""}}async function a9(a,b){const c=ad.password;if(!U||!c)throw q.SP;return a===c}
async function ba(a,b,c,d){let e;try{if(V.IsLoggedIn())e=await V.GetServiceFile(l.tY);else{
const a=ad.loginToken||ad.userId||"",c=(0,i.Bc)(P,Q,S);c.Connect(ac,Z,ad.serverUrl||ab,a,b,{useSessionCookies:af}),
await c.LoginNoSession("sync",d),e=await c.GetServiceUserDataFile(l.tY,d)}}catch(f){if(!(0,x.r5)(f,x.Y$))throw f;return!1}
return null!==await(0,l.bo)(a,e,c,d)}async function bb(a){return V.GetDomainMatch(a)}async function bc(a,b,c,d,e,f){
if(!U)throw q.SP;return V.FindInPathNames(a,b,c,d,e,f)}async function bd(a,b){if(!U)throw q.SP;if(!a)throw(0,q.GJ)("group_id")
;const c=await I(b);if(!c)throw(0,x.ZU)(x.V2,"Cannot load password dictionary");if(!V)throw(0,
x.ZU)(x.V2,"Cannot load password dictionary");const d=V.GetSharedAccountMountPathByAccountId(a);if(!d)return{all:[],
duplicates:[],reused:[],compromised:[],statistics:{}};return await(0,g.bG)(d,V,c,c3,H,!1,b)}async function be(a){
if(!U)throw q.SP;const b=await I(a);if(!b)throw(0,x.ZU)(x.V2,"Cannot load password dictionary");if(!V)throw(0,
x.ZU)(x.V2,"Cannot load password dictionary");return await(0,g.HV)(V,b,c3,H,!1,!0,a)}async function bf(a){if(!U)throw q.SP
;return V.GetUserDataItemsCount(a)}async function bg(a){return V.DecryptRemotePassword(a)}async function bh(a,b){await V.Login({
password:a},b);const c={event:3};aw.data.onDataChanged.CallAllSync([c])}async function bi(a){if(V.IsLoggedIn()){
await V.Logoff(a),await Y.SetPassword(null),await R.Init();const b={event:10};aw.data.onDataChanged.CallAllSync([b])}}
async function bj(a,b,c){if(!U)throw q.SP;return V.List(a,b,c)}async function bk(a,b,c){if(!U)throw q.SP;return V.GetInfo(a,b,c)
}async function bl(a,b,c,d){if(!U)throw q.SP;return V.GetDataItem(a,b,c,d)}async function bm(a,b){if(!U)throw q.SP
;return V.GetCounts(a,b)}async function bn(a,b,c){if(!U)throw q.SP;return V.GetFile(a,b,c)}async function bo(a,b,c){
if(!U)throw q.SP;return V.PutFile(a,b,c)}async function bp(a,b){}async function bq(a,b,c,d){if(!U)throw q.SP
;return V.GetMatchingPasscards(a,b,c,d)}async function br(a,b){if(!U)throw q.SP;await V.CreateFolder(a,b),await aW(3)}
async function bs(a,b,c){if(!U)throw q.SP;await V.CopyFile(a,b,c),await aW(3)}async function bt(a,b,c){if(!U)throw q.SP
;await V.CopyFolder(a,b,c),await aW(3)}async function bu(a,b){if(!U)throw q.SP;await V.DeleteFile(a,b),await aW(3)}
async function bv(a,b){if(!U)throw q.SP;await V.DeleteFolder(a,b),await aW(3)}async function bw(a,b,c){if(!U)throw q.SP
;await V.MoveFile(a,b,c),await aW(3)}async function bx(a,b,c){if(!U)throw q.SP;await V.MoveFolder(a,b,c),await aW(3)}
async function by(a,b,c){if(!U)throw q.SP;await V.PutDataItem(a,b,c),await aW(3)}async function bz(a,b,c,d){
const e=await T.GenerateRSAKeyPair(2048),f=cY(),g=await f.CreateOneFileAccount(a,b,c,e,d);return await az(),g.accountId||""}
async function bA(a,b){await aq.DeleteAccount(a,b);const c=ad.accountId;c&&await V.ClearCacheableOptions(c),await aE(b),
await az()}async function bB(a,b,c){if(!(ad.loginToken||ad.userId))throw q.SP;let d=!1
;ad.password||(ad=Object.assign(Object.assign({},ad),{password:b}),d=!0);try{const d=cZ();await d.LoginNoSession("sync",c)
;const e=d.GetSecuritySettingsFromAuthSettings();if(!e)throw(0,x.ZU)(x.V2,"Cannot get account security settings")
;await a4(d.ChangeOneFilePasswords(a,a,b,e,c))}finally{d&&(ad=Object.assign(Object.assign({},ad),{password:""})),ae=!1}
ad=Object.assign(Object.assign({},ad),{password:a}),await aR(c)}async function bC(a,b,c){
const d=cY(),e=await T.GenerateRSAKeyPair(2048);await d.ResetAccountPassword(a,b,!0,e,c);V&&await aE(c)}async function bD(a){
return!0}async function bE(a,b){return a4(cZ().GetAccountDataBackups(a,b))}async function bF(a,b){
return a4(cZ().CreateServerDataBackup(a,b))}async function bG(a,b,c){return a4(cZ().DeleteServerDataBackup(a,b,c))}
async function bH(a,b,c,d){return a4(cZ().ChangeServerDataBackupStatus(a,b,c,d))}async function bI(a,b,c){var d
;const e=ad,f=(b=b||{}).accountId||e.accountId;if(!f)throw(0,q.GJ)("restored account ID");const g=f===e.accountId||f===e.userId
;let h;const i=cZ();let k;if(g){let a;try{a=await V.GetServiceFile(l.tY)}catch(s){if(!(0,x.r5)(s,x.Y$))throw s;a=void 0}if(h=[],
ad.password&&h.push(ad.password),a){h=null!==(d=JSON.parse(a).passwords)&&void 0!==d?d:[]}b&&b.password&&h.push(b.password),k=""
}else{if(!await V.LoadPrivateKey())throw(0,x.ZU)(x.V2,"Cannot get user private key");const a=b&&b.accountId||"";if(!a)throw(0,
x.ZU)(x.V2,"Internal error: shared folder ID is not specified");let c=null;const d=V.GetSharedAccountsInfo()
;for(const b of d)if(b.accountId===a){c=b;break}if(!c)throw(0,x.ZU)(x.V2,"Shared folder is not found")
;if(!c.isManager&&!c.isAdmin)throw(0,x.ZU)(x.V2,"Cannot restore shared folder data: permission denied, folder ID: "+a)
;const e=await V.DecryptRemotePassword(c.mp);if(!e)throw(0,x.ZU)(x.V2,"Cannot decrypt key for shared folder ID: "+a);h=[],
h.push(e);const f=ce(c);c.isManager||f&&c.isAdmin;k=c.name}const n=[],o=await a4(i.ConnectAccountDataBackup(f,a,h,c))
;if(!o)throw(0,q.rb)(1,"Cannot decrypt backup data, password is unknown: backup ID: "+f);const r=(0,j.IW)(o);return r.Connect(),
await(0,p.s_)(r,(async a=>{if(!(0,m.Rf)(a.type))return;const b=a.path;let d;try{d=await r.GetFile(b,"utf16",c)}catch(s){if((0,
x.bf)(s))throw s;d=""}if(!d)return;const e=b.substr(l.ZD.length);let h=null,i=0,j=!0,o=!0,p=!1;let t=0;if(g&&a.received)return
;const u=g?e:"/"+k+e;try{h=await V.GetInfo(u,1,c)}catch(s){if((0,x.bf)(s))throw s;if((0,x.r5)(s,x.Y$))j=!1;else{if(!(0,
q.tM)(s,4))return;o=!1}}let v;if(j&&o&&h&&h.granted&&(p=!0),j){if(!o)return;try{v=await V.GetFile(u,"utf16",c)}catch(s){if((0,
x.bf)(s))throw s;v=""}if(!v)return;if(d===v)return;i=1,t=h&&h.mod||0}else i=2;const w={accountId:f,path:e,targetPath:u,
content:d,currentModTime:t,backupModTime:a.mod||0,granted:p,status:i};n.push(w)}),{path:l.ZD,parts:1,deep:!0},c),n}
async function bJ(a,b,c,d){let e=0;const f=[];for(const h of b)try{await bK(h,d),e++}catch(g){f.push({path:h.path,error:(0,
x.r5)(g)||(0,q.tM)(g)?g:(0,x.ZU)(x.V2,(0,x.EB)(g))})}return{restored:e,errors:f}}async function bK(a,b){
let c=!0,d=!1,e=null,f=!0;try{e=await V.GetInfo(a.path,0,b)}catch(l){if((0,x.r5)(l,x.Y$))c=!1;else{if(!(0,q.tM)(l,4))throw l
;f=!0}}if(e){if(a.currentContent)try{if(await V.GetFile(a.path,"utf16",b)!==a.currentContent)throw(0,
x.ZU)(x.m,"This file was changed recently. Please, confirm restoration.");f=!0}catch(l){f=!1}else f=!0
;e.sharedFolder?d=!0:e.received&&!e.granted&&(f=!1)}const g=100;let h="";const i=(0,
u.Ng)(a.path),j=a.path.substr(0,a.path.length-i.length);let k="";for(let m=2;m<=g;m++){k=j+"["+m.toString()+"]"+i;let c=null
;try{c=await V.GetInfo(k,0,b)}catch(l){if(!(0,q.tM)(l,4)){if((0,x.r5)(l,x.Y$))break;throw l}}if(!c)break;if(m>=g)throw(0,
x.ZU)(x.V2,`Cannot create file "${a.path}": too many files with the same name`)}if(h=k,await V.PutFile(h,a.content,b),c&&f){
if(!d){const b=V.GetPersonalDataFSForSync(),c=b.GetSharingInfo(a.path);b.SetSharingInfo(h,c)}await V.DeleteFile(a.path,b)}
!f&&c||await V.MoveFile(h,a.path,b),await aW(3)}async function bL(a,b){const c=cZ();await a4(c.AcceptSharedAccount(a,b)),
await aU(!1,b)}async function bM(a,b){return a4(cZ().AcceptSharedAccountByCode(a,b))}async function bN(a,b){const c=cZ()
;await a4(c.RejectSharedAccount(a,b)),await aU(!1,b)}async function bO(a,b,c){return a4(cZ().UpdateSharedAccountInfo(a,b,c))}
async function bP(a,b){const c=cZ();return(await a4(c.GetReceivedItems(a,b))).accounts||[]}async function bQ(a){
return a4(cZ().GetKnownRecipients(null,a))}async function bR(a,b){return a4(cZ().GetKnownRecipients(a,b))}
async function bS(a,b,c){return a4(cZ().GetSharedAccountRecipients(a,b,null,c))}async function bT(a,b,c,d){
return a4(cZ().GetSharedAccountRecipients(a,b,c,d))}async function bU(a,b){return a4(cZ().GetSharedAccountInfo(a,b))}
async function bV(a,b,c){const d=V.GetSharedAccountInfoByMountPath(a)
;return a4(cZ().GetSharedAccountRecipients(d.accountId,b,null,c))}async function bW(a,b){
return V.GetSharedAccountInfoByMountPath(a)}async function bX(a,b,c){const d=await bV(a,b,c);return{info:await bW(a,c),
recipients:d}}async function bY(a,b){const c=V.GetSharedAccountInfoByMountPath(a),d=cZ()
;await a4(d.RejectSharedAccount(c.accountId,b)),await aV();const e=(0,h.o)(V,(a=>aL(a)),d,W,Q,T,S,P)
;await a4(e.SyncSharedAccountsList(null,b)),await aU(!1,b)}async function bZ(a,b,c){
const d=V.GetSharedAccountInfoByMountPath(a),e=cZ();await a4(e.RevokeSharedAccount(b,d.accountId,c)),await aV();const f=(0,
h.o)(V,(a=>aL(a)),e,W,Q,T,S,P);await a4(f.SyncSharedAccountsList(null,c)),await aU(!1,c)}async function b0(a,b,c,d){
const e=V.GetSharedAccountInfoByMountPath(a),f=cZ();for(let g=0;g<b.length;g++){const a=b[g],h=c[g]
;await a4(f.UpdateSharedAccountRecipientInfo(e.accountId,a.accountId,a,h,d))}
if(ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=(0,h.o)(V,(a=>aL(a)),f,W,Q,T,S,P)
;await a4(a.SyncSharedAccountsList(null,d))}}async function b1(a,b,c){if(b.length>i.cb)throw(0,
x.ZU)(x.V2,await E.LocalizeString("Editor_SharedFolderTooLongName_Error",[(0,y.bf)(i.cb)]));const d=(0,m.KF)(b,null)
;if(!d)throw(0,x.ZU)(x.V2,await E.LocalizeString("NameInvalidCharacter_Error2"));try{await V.GetInfo("/"+d,1,c);throw(0,
x.ZU)(x.V2,await E.LocalizeString("Editor_SharedFolderOrGroupExists_Error",[d]))}catch(g){if(!(0,x.r5)(g,x.Y$))throw g}
const e=V.GetSharedAccountInfoByMountPath(a).accountId,f=cZ();if(await a4(f.RenameSharedAccount(e,d,c)),
ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=(0,h.o)(V,(a=>aL(a)),f,W,Q,T,S,P)
;await a4(a.SyncSharedAccountsList(null,c)),await aW(3)}}async function b2(a,b){
const c=V.GetSharedAccountInfoByMountPath(a),d=c.accountId,e=cZ(),f=await a4(e.GetSharedAccountInfo(d,b)),g=await V.GetRoboFormAccountInfo(b)
;if(!f.isManager||g.accountId!==c.sender)throw(0,x.ZU)(x.V2,await E.LocalizeString("StopSharingFolder_NotFolderOwner_Error"))
;const h=f.name,i=V.GetPersonalDataFSForSync(),k=500;let l="",m="";for(let j=0;j<=k;j++){m="/"+h+(0===j?"":j.toString())
;let a=null;try{a=i.GetInfo(m)}catch(s){if((0,x.r5)(s,x.Y$))break;throw s}if(!a)break;if(j>=k)throw(0,
x.ZU)(x.V2,`Cannot choose local name for shared folder "${h}", too many similar names`)}l=m,null==b||b.ThrowIfShouldStop()
;const n=V.GetSharedAccountFSForSync(d),o=(0,j.IW)(n);o.Connect();const q=[];await(0,p.s_)(o,(async a=>{if(8===a.type)q.push({
info:a});else{const b=await o.GetFile(a.path,"utf16",null);q.push({info:a,content:b})}}),{path:"",parts:1,deep:!0},b)
;const r=await a4(e.GetSharedAccountRecipients(d,!1,null,b));await a4(cc(d,r,e,b));try{V.DeleteSharedAccount(d)}catch(s){
throw(0,x.ZU)(x.V2,await E.LocalizeString("StopSharingFolder_DataInFolder_Error",[m]))}await V.CreateFolder(l,b)
;for(const j of q)8===j.info.type?await V.CreateFolder(l+j.info.path,b):await V.PutFile(l+j.info.path,j.content||"",b);try{
await a4(e.DeleteSharedAccount(d,b))}catch(s){
throw(0,x.ZU)(x.V2,await E.LocalizeString("StopSharingFolder_DataInFolder_RemoveShared_Error"))}await aU(!1,b)}
async function b3(a,b){await b4(a,b)}async function b4(a,b){const c="/"+a;if(a.length>i.cb)throw(0,
x.ZU)(x.V2,await E.LocalizeString("ShareExistingFolder_TooLongName_Error",[a,i.cb.toString()]));if(!(0,m.Js)(a))throw(0,
q.rb)(6,"Invalid folder name: "+a);let d=null;try{d=await V.GetInfo(c,2,b)}catch(u){throw(0,
x.ZU)(x.V2,"Cannot access folder: "+c)}if(d.granted||d.received)throw(0,x.ZU)(x.V2,"Folder is already shared")
;null==b||b.ThrowIfShouldStop();const e=cZ(),f=await a4(e.GetUserCompanies(b));let g
;for(const i of f)if(i.isAdmin&&i.companyId){g=i.companyId||"";break}
const h=(await V.policies.Get("DisableSharing")).DisableSharing||!1;if(!g&&h)throw(0,
q.rb)(2,await E.LocalizeString("Policy_CommandDisabled_Message"));const k=ad,n=(0,s.Zf)(i.Rh,(0,
s.eG)(),S),o=await a4(e.DownloadPubKey(k.accountId||"",void 0,b)),p=await(0,r.A$)(n,o,S);let t;null==b||b.ThrowIfShouldStop()
;try{t=(await e.CreateSharedAccount(a,n,await(0,z.n1)(p),{readOnly:!1,showPasswords:!0,serverOnly:!1,companyId:g
},b)).accountId||""}catch(u){throw await a6(u),c0(u),u}try{const a=V.GetPersonalDataFSForSync(),d=(0,j.IW)(a);d.Connect()
;const f=(0,l.EH)(Q,S),h=(0,j.IW)(f);h.Connect(),await(0,j.O7)(c,d,l.ZD,h,!1,b);const i=await e.CheckoutFile(l.vy,{accountId:t
},b),k=await f.SaveToBytes(n,null,(0,l.c0)(),b);await e.CommitFile(l.vy,k,{accountId:t,eTag:i.eTag},b),
g&&await e.UpdateGroupKeyForCompanyAdmins(g,t,n,b)}catch(u){throw await a6(u),await a4(e.DeleteSharedAccount(t,b)),u}
return await aV(),await V.DeleteFolder(c,b),await aU(!1,b),t}async function b5(a,b,c,d){
const e=V.GetSharedAccountInfoByAccountId(a);return await b7(e,b,c,d)}async function b6(a,b,c,d){
const e=V.GetSharedAccountInfoByMountPath(a);return await b7(e,b,c,d)}async function b7(a,b,c,d){const e=ce(a)
;if(e&&!a.isAdmin&&!a.isManager){if((await V.policies.Get("DisableSharing")).DisableSharing||!1)throw(0,
q.rb)(2,await E.LocalizeString("Policy_CommandDisabled_Message"))}const f=a.accountId,g=await V.DecryptRemotePassword(a.mp)
;if(!g)throw(0,x.ZU)(x.V2,"Cannot decrypt shared folder key");const i=cZ();if(ad.enterprise&&!e){
if((await V.policies.Get("DisableSharingOutsideCompany")).DisableSharingOutsideCompany||!1){if(!await cd(b,i,d))throw(0,
q.rb)(2,await E.LocalizeString("SharedFolderSettings_CompanyMembersOnlySharing_Error"))}}let j,k,l;try{
j=await i.GetSharedAccountRecipientKey(f,void 0,b,d)}catch(m){if(await a6(m),!(0,x.r5)(m,x.Y$))throw m}if(!j)try{
const a=await i.DownloadPubKey(void 0,b,d);k=await(0,z.n1)(await(0,r.A$)(g,a,S))}catch(m){await a6(m)}try{
l=await i.GrantSharedAccount(f,b,{manager:null==c?void 0:c.manager,readOnly:null==c?void 0:c.readOnly,
showPasswords:null==c?void 0:c.showPasswords,serverOnly:null==c?void 0:c.serverOnly,
inviteIfDoesntExist:null==c?void 0:c.inviteIfDoesntExist,mp:j?void 0:k||void 0,disabled:!1},d)}catch(m){throw await a6(m),c0(m),
m}if(ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=(0,h.o)(V,(a=>aL(a)),i,W,Q,T,S,P)
;await a4(a.SyncSharedAccountsList(null,d)),await aW(3)}return l}async function b8(a,b,c,d){await b9(a,b,{serverOnly:c},d)}
async function b9(a,b,c,d){var e,f;const g=b,j=(await V.policies.Get("DisableSharing")).DisableSharing||!1;if(!g&&j)throw(0,
q.rb)(2,await E.LocalizeString("Policy_CommandDisabled_Message"));if(!(0,m.Js)(a))throw(0,q.rb)(6,"Invalid folder name: "+a)
;if(a.length>i.cb)throw(0,x.ZU)(x.V2,await E.LocalizeString("Editor_SharedFolderTooLongName_Error",[i.cb.toString()]))
;const k=cZ();let l;if(g){
if(l=null===(e=(await a4(k.GetUserCompanies(d))).find((a=>a.isAdmin&&a.companyId)))||void 0===e?void 0:e.companyId,!l)throw(0,
q.rb)(2,await E.LocalizeString("NewGroup_NoPermissions_Error"))}
const n=void 0!==(c=c||{}).readOnly?c.readOnly:!!g,o=void 0!==c.showPasswords?c.showPasswords:!g;let p;try{
p=await V.GetInfo("/"+a,1,d)}catch(C){if(!(0,x.r5)(C,x.Y$))throw C}if(p)throw(0,x.ZU)(x.Ag,"Folder already exists")
;const t=ad,u=(0,s.Zf)(i.Rh,(0,s.eG)(),S),v=await a4(k.DownloadPubKey(t.accountId||"",void 0,d)),w=await(0,r.A$)(u,v,S);let y
;try{y=await k.CreateSharedAccount(a,u,await(0,z.n1)(w),{readOnly:null!=n?n:void 0,showPasswords:null!=o?o:void 0,
serverOnly:null!==(f=c.serverOnly)&&void 0!==f?f:void 0,companyId:b?l:"",disabled:c.disabled,policies:c.policies},d)}catch(C){
throw await a6(C),c0(C),C}const A=y.accountId||"";l&&await a4(k.UpdateGroupKeyForCompanyAdmins(l,A,u,d));const B=(0,
h.o)(V,(a=>aL(a)),k,W,Q,T,S,P);return await a4(B.SyncSharedAccountsList(null,d)),await aW(3),A}async function ca(a,b){
const c=V.GetSharedAccountInfoByMountPath(a),d=c.accountId,e=cZ(),f=await a4(e.GetSharedAccountInfo(d,b));if(ce(c)){
if(!f.isAdmin)throw(0,x.ZU)(x.V2,await E.LocalizeString("DeleteSharedFolder_Permissions_Error",[a.substring(1)]))}else{
const d=await V.GetRoboFormAccountInfo(b);if(!f.isManager||d.accountId!==c.sender)throw(0,
x.ZU)(x.V2,await E.LocalizeString("DeleteSharedFolder_Permissions_Error",[a.substring(1)]))}
if(await a4(e.DeleteSharedAccount(d,b)),ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=(0,
h.o)(V,(a=>aL(a)),e,W,Q,T,S,P);await a4(a.SyncSharedAccountsList(null,b)),await aW(3)}}async function cb(a){
const b=new Map,c=V.GetMountedSharedAccountsInfo()
;for(const[e,f]of c)(f.isManager||f.isAdmin)&&f.name!==i.Kh&&b.set(e.substring(1),f);const d=[];for(const[e,f]of b)d.push({
title:e,accountInfo:f});return d}async function cc(a,b,c,d){
if(0!==b.length)for(const e of b)e.current||await c.RevokeSharedAccount(e.accountId,a,d)}async function cd(a,b,c){
const d=await a4(b.GetUserCompanies(c));let e=!1;for(const f of d){if(!f.companyId)continue
;const d=await a4(b.GetCompanyMembers(f.companyId,{doPost:!0},c));if("number"!=typeof d){for(const b of d)if(b.email===a){e=!0
;break}if(e)break}}return e}function ce(a){return""!==(a.company||"")}async function cf(a,b){const c=cZ()
;await a4(c.AcceptSharedFile(a,b)),await aU(!1,b)}async function cg(a,b){const c=cZ();await a4(c.AcceptSharedFileByCode(a,b)),
await aU(!1,b)}async function ch(a,b){const c=cZ();await a4(c.RejectSharedFile(a,b)),await aU(!1,b)}async function ci(a,b){
const c=cZ();return(await a4(c.GetReceivedItems(a,b))).receivedFiles||[]}async function cj(a,b){const c=V.GetSharedFileInfo(a)
;if(!c.m_shared_id)throw(0,x.ZU)(x.V2,"Not a shared file: "+a);return a4(cZ().GetSharedFileUsersInfo(c.m_shared_id,b))}
async function ck(a,b){null==b||b.ThrowIfShouldStop();const c=V.GetSharedFileInfo(a);if(!c.m_shared_id)throw(0,
x.ZU)(x.V2,"Not a shared file: "+a);let d=null;const e=V.GetSharedFilesList()
;if(e.received)for(const f of e.received)if(c.m_shared_id===f.id){d=f;break}
if(e.granted)for(const f of e.granted)if(c.m_shared_id===f.id){d=f;break}if(!d)throw(0,x.ZU)(x.V2,"Not a shared file: "+a)
;return d}async function cl(a,b,c){const d=V.GetPersonalDataFSForSync(),e=d.GetSharingInfo(a);if(!e.m_shared_id)throw(0,
x.ZU)(x.V2,"Not a shared file: "+a);const f=cZ();for(const h of b){const a={id:e.m_shared_id,recipient:h,name:""}
;await a4(f.RevokeSharedFile(a,c))}const g=await a4(f.GetSharedFileUsersInfo(e.m_shared_id,c))
;g.granted&&0!==g.granted.length||d.RemoveSharingInfo(a),await aU(!1,c)}async function cm(a,b,c,d){
const e=await V.policies.Get(["DisableSharing","DisableSharingOutsideCompany"]);if(e.DisableSharing||!1)throw(0,
q.rb)(2,await E.LocalizeString("Policy_CommandDisabled_Message"));const f=cZ();if(ad.enterprise){
if(e.DisableSharingOutsideCompany||!1){
if(!await cd(b,f,d))throw(0,q.rb)(2,await E.LocalizeString("SharedFileSettings_CompanyMembersOnlySharing_Error"))}}const g=(0,
h.o)(V,(a=>aL(a)),f,W,Q,T,S,P);await a4(g.ShareFile(a,b,c,d));await cX(a,!0,!1,d),await aU(!1,d)}async function cn(a,b,c,d){
const e=await V.policies.Get(["DisableSharing","DisableSharingOutsideCompany"]);if(e.DisableSharing||!1)throw(0,
q.rb)(2,await E.LocalizeString("Policy_CommandDisabled_Message"));const f=cZ();if(ad.enterprise){
if(e.DisableSharingOutsideCompany||!1){
if(!await cd(b,f,d))throw(0,q.rb)(2,await E.LocalizeString("SharedFileSettings_CompanyMembersOnlySending_Error"))}}const g=(0,
h.o)(V,(a=>aL(a)),f,W,Q,T,S,P);for(const h of a){await a4(g.SendFile(h,b,c,d));await cX(h,!0,!1,d)}await aU(!1,d)}
async function co(a,b){const c=cZ();return(await a4(c.GetReceivedItems(a,b))).emergencyAccess||[]}async function cp(a){
return a4(cZ().GetEmergencyContacts(a))}async function cq(a){return a4(cZ().GetTestators(a))}async function cr(a,b,c,d){
return a4(cZ().InviteEmergencyContact(a,b,c,d))}async function cs(a,b,c){return a4(cZ().RevokeEmergencyContact(a,b,c))}
async function ct(a,b){const c=cZ();await a4(c.AcceptEmergencyContactInvitation(a,b)),await aU(!1,b)}async function cu(a,b){
const c=cZ();await a4(c.AcceptEmergencyContactInvitationByCode(a,b)),await aU(!1,b)}async function cv(a,b){const c=cZ()
;await a4(c.RejectEmergencyContactInvitation(a,b)),await aU(!1,b)}async function cw(a,b,c){
return a4(cZ().UpdateEmergencyContactInfo(a,b,c))}async function cx(a,b){return a4(cZ().RequestEmergencyAccess(a,b))}
async function cy(a,b){return a4(cZ().RejectEmergencyAccess(a,b))}async function cz(a,b){const c=cZ()
;await a4(c.GrantEmergencyAccess(a,b)),await aU(!1,b)}async function cA(a,b){const c=cZ()
;await a4(c.RevokeEmergencyAccess(a,b)),await aU(!1,b)}async function cB(a,b,c){
const d=b,e=await V.LoadPrivateKey(),f=cZ(),g=await a4(f.DownloadUserData(a,e,c)),h=(0,j.IW)(g);h.Connect();const i=[],k=[]
;return await(0,p.s_)(h,(async a=>{if(8!==a.type&&(!(0,m.Rf)(a.type)||4===a.type))return;const b=(0,
A.$b)(a.path,l.ZD)||a.path,e=d+b;if(8===a.type)return void i.push(e);let f;try{f=await h.GetFile(a.path,"utf16",null)}catch(q){
return}if(!f)return;let g=null;try{g=JSON.parse(f)}catch(q){return}if(!g)return;const j=(0,m.hF)(a.path),o=(0,n.m6)(g,j)
;if(!o)return;const p={item:o,path:b,exists:!1,existingPath:""};try{await V.GetInfo(e,0,c)
;const a=await V.GetDataItem(e,4,null,c);(0,y.XM)(a,o)&&(p.exists=!0,p.existingPath=e)}catch(q){}k.push(p)}),{path:l.ZD,parts:1,
deep:!0},c),{items:k,emptyFolders:i}}async function cC(a,b){const c=cZ();await a4(c.JoinCompany(a,b)),
ad=Object.assign(Object.assign({},ad),{enterprise:!0}),await aU(!1,b)}async function cD(a,b){const c=cZ()
;await a4(c.LeaveCompany(a,b)),ad=Object.assign(Object.assign({},ad),{enterprise:!1}),await aU(!1,b)}async function cE(a,b){
await ar.DeleteCompanyGroups(a,b),await aU(!1,b)}async function cF(a,b,c,d){const e=await ar.ImportCompanyGroups(a,b,c,d)
;return V.IsConnectedToStorage()&&await aU(!1,d),e}async function cG(a,b,c){await ar.RemoveMemberFromGroup(a,b,c)
;if(a.filter((a=>ad.accountId===a)).length>0)if(ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=cZ(),b=(0,
h.o)(V,(a=>aL(a)),a,W,Q,T,S,P);await a4(b.SyncSharedAccountsList(null,c)),await aW(3)}}async function cH(a,b){var c
;const d=await ar.GetCompanyGroups(a,b)
;for(const e of d)V.UpdateSecurityStatsByAccountId(e.id,null!==(c=e.securityStats)&&void 0!==c?c:"");return d}
async function cI(a,b,c,d){await ar.AddMemberToGroup(a,b,c,d)
;if(a.filter((a=>ad.accountId===a)).length>0)if(ah.IsSyncRunning())ah.SetPendingSyncRequest();else{const a=cZ(),b=(0,
h.o)(V,(a=>aL(a)),a,W,Q,T,S,P);await a4(b.SyncSharedAccountsList(null,d)),await aW(3)}}async function cJ(a){return ag}
async function cK(a,b){ag=[a,...ag.filter((b=>b.m_password!==a.m_password))],ag.length>d.Pj&&ag.splice(d.Pj,ag.length-d.Pj)}
async function cL(a){ag=[]}async function cM(a,b){
0===ag.length&&ag.push(a),ag=[a,...ag.filter((b=>b.m_password!==a.m_password))]}async function cN(a){if(await V.settings.Set(a),
!U)return;let b=!1;for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c)){
if("PopularityCalculationMode"===c||"PopularityCalculationFactor"===c){
const a=await V.options.GetValue("PopularityCalculationMode",0),b=await V.options.GetValue("PopularityCalculationFactor",0)
;await V.UpdatePopularityCalculationMode(a,b)}if((0,o.NX)(c)){b=!0;break}}b&&await aW(3)}async function cO(a,b){
await V.settings.SetValue(a,b),U&&(0,o.NX)(a)&&await aW(3)}async function cP(a){if(await V.settings.Remove(a),!U)return
;const b=new Set;if("string"==typeof a)b.add(a);else if(Array.isArray(a))for(const d of a)b.add(d);let c=!1
;for(const d of b)if((0,o.NX)(d)){c=!0;break}c&&await aW(3)}async function cQ(){await V.settings.Clear(),U&&await aW(3)}
async function cR(a,b,c){return V.IsLoggedIn()&&V.IsConnectedToStorage()?V.GetUsageInfoList(a,b,c):[]}async function cS(a,b){
return V.GetSearchHistoryList(a,b)}async function cT(a,b,c,d){await V.SetUsageInfoList(a,b,c,d),await aW(3)}
async function cU(a,b,c,d){await V.SetUsageInfo(a,b,c,d),await aW(3)}async function cV(a,b){await V.AddItemToSearchHistory(a,b),
await aW(1)}async function cW(a,b,c){await V.SetSearchHistoryList(a,b,c),await aW(1)}async function cX(a,b,c,d){
b&&await cU(a,0,!0,d),c&&await cU(a,2,!0,d)}function cY(){const a=(0,i.Bc)(P,Q,S);return a.Connect(ac,Z,ad.serverUrl||ab,"","",{
useSessionCookies:af}),a}function cZ(){const a=(0,i.Bc)(P,Q,S)
;return a.Connect(ac,Z,ad.serverUrl||ab,ad.loginToken||ad.userId||"",ad.password||"",{useSessionCookies:af}),a}function c0(a){
if((0,t.dW)(a)&&a.sibError===x.FN&&403===a.httpResponse.status){const b=a.httpResponse.headers["x-sib-reason"]||""
;if("trial-expired"===b||"license-expired"===b)throw q.JF}}async function c1(a,b,c){
return V.GetSecurityWarningEnabledForDataItem(a,b,c)}async function c2(a,b,c,d){
await V.DisableSecurityWarningForDataItem(a,b,c,d),await aW(3)}async function c3(a,b){
return V.GetAllDataItemsWhereSecurityWarningIsDisabled(a,b)}async function c4(a,b){
await V.EnableSecurityWarningForAllDataItems(a,b),await aW(3)}}(a,H,I,J,b,c,B,E,F,G,K,L,M,N,O);return P.Init(),P}
async function C(a,b,c,d,e){if(!b.password)return a.SetValue("_rfoAccount",JSON.stringify(b));let f
;f=b.password&&b.accountId?await(0,k.tx)(b.password,b.accountId,c,d,e):"";const g=Object.assign(Object.assign({},b),{password:f
});return a.SetValue("_rfoAccount",JSON.stringify(g))}async function D(...a){throw q.lU}},42592:function(a,b,c){c.d(b,{
A:function(){return l},v:function(){return m}})
;var d=c(4234),e=c(61211),f=c(12131),g=c(88579),h=c(40371),i=c(13113),j=c(4153),k=c(69893);c(13117);function l(a){const b=a,c=[]
;let d=!1;const e={Init:function(){g(),c.length=0,d=!1},Connect:function(){g();for(const a of c)a.Connect()
;b.onDataChanged.Add(i),d=!0},Disconnect:g,AddCacheLayer:function(a){c.push(a)},Login:async function(a,b){throw(0,k.Lh)()},
Logoff:async function(a){for(const b of c)b.Clear()},List:async function(a,d,e){for(const b of c)try{return await b.List(a,d,e)
}catch(g){if((0,k.r5)(g,k.kd))throw g}const f=await b.List(a,d,e);for(const b of c)try{b.SetList(a,f,d)}catch(g){}return f},
GetInfo:async function(a,d,e){for(const b of c)try{const c=await b.GetInfo(a,d,e);if(c)return c}catch(g){if((0,
k.r5)(g,k.kd))throw g}const f=await b.GetInfo(a,d,e);for(const b of c)try{b.SetInfo(f,d)}catch(g){}return f},
GetCounts:async function(a,b){throw(0,k.Lh)()},DeleteFile:async function(a,c){return b.DeleteFile(a,c)},
DeleteFolder:async function(a,c){return b.DeleteFolder(a,c)},MoveFile:async function(a,c,d){return b.MoveFile(a,c,d)},
MoveFolder:async function(a,c,d){return b.MoveFolder(a,c,d)},CopyFile:async function(a,c,d){return b.CopyFile(a,c,d)},
CopyFolder:async function(a,c,d){return b.CopyFolder(a,c,d)},CreateFolder:async function(a,c){return b.CreateFolder(a,c)},
GetDataItem:async function(a,d,e,f){for(const b of c)try{const c=await b.GetDataItem(a,d,e,f);if(c)return c}catch(h){if((0,
k.r5)(h,k.kd))throw h}const g=await b.GetDataItem(a,d,e,f);for(const b of c)try{b.SetItem(a,g,d,e)}catch(h){}return g},
PutDataItem:async function(a,d,e){await b.PutDataItem(a,d,e);for(const b of c)try{b.SetItem(a,d,4,null)}catch(f){}},
GetFile:async function(a,b,c){throw(0,k.Lh)()},PutFile:async function(a,b,c){throw(0,k.Lh)()},LogFileAccess:async()=>{throw f.lU
},onDataChanged:(0,h.dU)(),GetUsageInfoList:async function(a,d,e){for(const b of c)try{const c=await b.GetUsageInfoList(a,d,e)
;if(c)return c}catch(g){if((0,k.r5)(g,k.kd))throw g}const f=await b.GetUsageInfoList(a,d,e);for(const b of c)try{
await b.SetUsageInfoList(a,d,f,e)}catch(g){}return f},SetUsageInfoList:async function(a,d,e,f){await b.SetUsageInfoList(a,d,e,f)
;for(const b of c)try{await b.SetUsageInfoList(a,d,e,f)}catch(g){}},SetUsageInfo:async function(a,d,e,f){
await b.SetUsageInfo(a,d,e,f);for(const b of c)try{await b.SetUsageInfo(a,d,e,f)}catch(g){}},
GetSearchHistoryList:async function(a,d){for(const b of c)try{const c=await b.GetSearchHistoryList(a,d);if(c)return c}catch(f){
if((0,k.r5)(f,k.kd))throw f}const e=await b.GetSearchHistoryList(a,d);for(const b of c)try{await b.SetSearchHistoryList(a,e,d)
}catch(f){}return e},AddItemToSearchHistory:async function(a,d){await b.AddItemToSearchHistory(a,d);for(const b of c)try{
await b.AddItemToSearchHistory(a,d)}catch(e){}},SetSearchHistoryList:async function(a,d,e){await b.SetSearchHistoryList(a,d,e)
;for(const b of c)try{await b.SetSearchHistoryList(a,d,e)}catch(f){}},GetCachedMatchesForDomain:function(a,b){
for(const e of c)try{return e.GetCachedMatchesForDomain(a,b)}catch(d){if((0,k.r5)(d,k.kd))throw d}throw(0,k.wu)()},
SetCachedMatchesForDomain:function(a,b,d){for(const f of c)try{f.SetCachedMatchesForDomain(a,b,d)}catch(e){}},
ClearCachedDomainMatches:function(){for(const b of c)try{b.ClearCachedDomainMatches()}catch(a){}}};return e;function g(){if(d){
d=!1;for(const a of c)a.Disconnect();b.onDataChanged.Remove(i)}}function i(a){for(const b of c)b.DataChanged(a)
;e.onDataChanged.CallAllSync(a)}}function m(){const a=new Map;let b=null,c=!1;const l=new Map,m=new Map,n=new Map,o=new Map
;return{Connect:function(){r()},Disconnect:function(){r()},SetList:function(b,d,e){const f=C(b),g=a.get(f),h=[]
;for(const a of d){const b={m_info:(0,j.HP)(a),m_parts:e};h.push(b)}const i={m_items:h,m_index_map:null,m_listed:!0};if(y(i),
g)for(const a of g.m_items){const b=C(a.m_info.path),c=(0,j.TT)(i.m_index_map).get(b);if(void 0!==c){const b=i.m_items[c]
;z(a.m_info,a.m_parts,b,!0)}}a.set(f,i),b||(c=!!(64&e))},SetInfo:p,SetItem:q,GetCachedMatchesForDomain:function(a,b){if(0===b){
const b=c(0,a);if(b)return b}else{const d=c(b,a);if(d)return d;const e=c(0,a);if(e)return e.filter((a=>a.type===b))}throw(0,
k.wu)();function c(a,b){const c=o.get(a);if(!c)return null;const d=c.get(b);return d?(0,j.HP)(d):null}},
SetCachedMatchesForDomain:function(a,b,c){let d=o.get(b);d||(d=new Map,o.set(b,d));d.set(a,(0,j.QN)((0,j.HP)(c)))},
ClearCachedDomainMatches:function(){o.clear()},Clear:r,DataChanged:function(a){for(const b of a)switch(b.event){case 1:case 10:
case 9:case 2:case 11:return void r();case 5:if(b.path&&((0,d.Rf)((0,j.TT)(b.type))||8===(0,j.TT)(b.type))){p({path:b.path,
type:(0,j.TT)(b.type)},0)}break;case 6:if(b.path)if((0,d.Rf)((0,j.TT)(b.type))||8===(0,j.TT)(b.type)){p({path:b.path,type:(0,
j.TT)(b.type)},0)}else D(b.path,(0,j.TT)(b.type));break;case 7:b.path&&(8===b.type?E(b.path):D(b.path,(0,j.TT)(b.type)));break
;case 8:b.path&&b.to&&b.to.path&&(8===b.type?G(b.path,b.to.path):F(b.path,b.to.path,(0,j.TT)(b.type)));break;case 12:t()}},
List:async function(b,d,e){const f=a.get(C(b));if(!f||!f.m_listed)throw(0,k.wu)();const g=!!(64&d);if(!b&&g&&!c)throw(0,k.wu)()
;const h=[];for(const a of f.m_items)if(b||g||!a.m_info.disabled){if(!A(a,d))throw(0,k.wu)();h.push((0,j.HP)(a.m_info))}return h
},GetInfo:async function(c,d,e){if(!c){if(!b)throw(0,k.wu)();return b}const f=C((0,i.fA)(c)),g=a.get(f);if(!g)throw(0,k.wu)()
;const h=B(g,c);if(!h)throw(0,k.wu)();if(!A(h,d))throw(0,k.wu)();return(0,j.HP)(h.m_info)},GetCounts:async function(a,b){
throw(0,k.Lh)()},DeleteFile:async function(a,b){D(a,(0,d.hF)(a))},DeleteFolder:async function(a,b){E(a)},
MoveFile:async function(a,b,c){F(a,b,(0,d.hF)(a))},MoveFolder:async function(a,b,c){G(a,b)},CopyFile:async function(a,b,c){
H(b,(0,d.hF)(b))},CopyFolder:async function(a,b,c){H(b,8)},CreateFolder:async function(a,b){H(a,8)},
GetDataItem:async function(a,b,c,d){const e=l.get(C(a));if(!e||e.m_presence_level<b)throw(0,k.wu)()
;if(c&&e.m_alt_password!==c)throw(0,f.rb)(1,"Wrong password");return(0,j.HP)(e.m_item)},PutDataItem:async function(a,b,c){
q(a,b,4,null)},GetFile:async function(a,b,c){throw(0,k.Lh)()},PutFile:async function(a,b,c){throw(0,k.Lh)()},
LogFileAccess:async()=>{throw f.lU},onDataChanged:(0,h.dU)(),GetUsageInfoList:async function(a,b,c){const d=n.get(b)
;if(!d)throw(0,k.wu)();const e=d.get(a);if(!e)throw(0,k.wu)();return(0,j.HP)(e)},SetUsageInfoList:async function(a,b,c,d){
for(const e of c)s(e.path);if(3===b){const b=n.get(3);b&&b.delete(a)}else{let d=n.get(b);d||(d=new Map,n.set(b,d)),d.set(a,c),
0!==a&&d.delete(0)}},SetUsageInfo:async function(a,b,c,e){f=(0,d.hF)(a),n.forEach((function(a){a.delete(f)})),s(a);var f},
GetSearchHistoryList:async function(a,b){const c=m.get(a);if(!c)throw(0,k.wu)();return(0,j.HP)(c)},
AddItemToSearchHistory:async function(a,b){m.clear()},SetSearchHistoryList:async function(a,b,c){m.set(a,(0,j.HP)(b))}}
;function p(c,d){if(c.path){x(c,d);const b=C((0,i.fA)(c.path)),e=a.get(b);if(e){const a=B(e,c.path)
;if(a)if(a.m_info.size===c.size&&a.m_info.mod===c.mod&&a.m_info.cre===c.cre)z(c,d,a,!1),x(a.m_info,a.m_parts);else{
x(a.m_info,a.m_parts);const b=a.m_info.path;a.m_info=(0,j.HP)(c),a.m_info.path=b,a.m_parts=d,l.delete(C(c.path))
}else e.m_items.push({m_info:(0,j.HP)(c),m_parts:d}),e.m_index_map=null,e.m_listed=!1}else I(c,d,!0)}else b=(0,j.HP)(c)}
function q(a,b,c,d){l.set(C(a),{m_presence_level:c,m_item:b,m_alt_password:d})}function r(){a.clear(),c=!1,b=null,l.clear(),
m.clear(),n.clear(),o.clear()}function s(b){const c=C((0,i.fA)(b)),d=a.get(c);if(d){const a=B(d,b)
;a&&32&a.m_parts&&(a.m_parts=-33&a.m_parts,delete a.m_info.favorite,delete a.m_info.usageCounter,delete a.m_info.lastUsedTime)}}
function t(){n.size,n.clear(),m.size,m.clear();for(const b of a.values())for(const a of b.m_items)a.m_parts=-33&a.m_parts,
delete a.m_info.favorite,delete a.m_info.usageCounter,delete a.m_info.lastUsedTime}function u(c,d){if(!c)return void(b=null)
;const e=C(c);l.delete(e);const f=C((0,i.fA)(c)),g=a.get(f);if(g)for(let a=0;a<g.m_items.length;a++){const b=g.m_items[a]
;if(C(b.m_info.path)===e)return 8!==d&&x(b.m_info,b.m_parts),g.m_items.splice(a,1),void(g.m_index_map=null)}8!==d&&w(d)}
function v(b){const c=C(b),d=a.get(c);if(d){
for(const a of d.m_items)8===a.m_info.type?v(a.m_info.path):(l.delete(C(a.m_info.path)),x(a.m_info,a.m_parts));a.delete(c)}}
function w(a){o.delete(a),o.delete(0)}function x(a,b){var c,d,e,f;if(o.has(a.type)||o.has(0))switch(a.type){case 1:case 4:
if(4&b){const b=(0,g.cg)(a.matchUrl||"");return null===(c=o.get(a.type))||void 0===c||c.delete(b),
void(null===(d=o.get(0))||void 0===d||d.delete(b))}w(a.type);break;case 2:case 3:if(4&b){const b=(0,g.cg)(a.gotoUrl||"")
;return null===(e=o.get(a.type))||void 0===e||e.delete(b),void(null===(f=o.get(0))||void 0===f||f.delete(b))}w(a.type)}}
function y(a){if(!a.m_index_map){a.m_index_map=new Map;for(let b=0;b<a.m_items.length;b++){const c=C(a.m_items[b].m_info.path)
;a.m_index_map.set(c,b)}}}function z(a,b,c,d){const e=c.m_info;!(1&b)||d&&1&c.m_parts||(void 0!==a.size&&(e.size=a.size),
void 0!==a.cre&&(e.cre=a.cre),void 0!==a.mod&&(e.mod=a.mod),void 0!==a.error&&(e.error=a.error),c.m_parts|=1),
!(2&b)||d&&2&c.m_parts||(void 0!==a.isDefault&&(e.isDefault=a.isDefault),c.m_parts|=2),
!(4&b)||d&&4&c.m_parts||(void 0!==a.gotoUrl&&(e.gotoUrl=a.gotoUrl),void 0!==a.matchUrl&&(e.matchUrl=a.matchUrl),c.m_parts|=4),
!(32&b)||d&&32&c.m_parts||(void 0!==a.favorite&&(e.favorite=a.favorite),
void 0!==a.lastUsedTime&&(e.lastUsedTime=a.lastUsedTime),void 0!==a.usageCounter&&(e.usageCounter=a.usageCounter),c.m_parts|=32)
}function A(a,b){if(0===b)return!0;switch(a.m_info.type){case 1:case 2:case 3:case 4:{const c=b&63;return(c&a.m_parts)===c}
case 5:case 6:case 7:{const c=b&35;return(c&a.m_parts)===c}case 8:{const c=b&1;return(c&a.m_parts)===c}case 9:{const c=b&1
;return(c&a.m_parts)===c}default:return!0}}function B(a,b){a.m_index_map||y(a);const c=(0,j.TT)(a.m_index_map).get(C(b))
;return void 0===c?void 0:a.m_items[c]}function C(a){return a.toLowerCase()}function D(a,b){u(a,b),
a!==e.dc&&a!==e.LN&&a!==e.l$||t()}function E(a){u(a,8),v(a)}function F(a,b,c){u(a,c),H(b,c)}function G(a,b){u(a,8),v(a),H(b,8)}
function H(a,b){u(a,b),8===b?v(a):a!==e.dc&&a!==e.LN&&a!==e.l$||t();I({path:a,type:b},0,!0)}function I(b,c,d){const e=(0,
i.fA)(b.path),f=C(e);let g=a.get(f);if(g||(g={m_items:[],m_listed:!1,m_index_map:null},a.set(f,g)),!function(a,b,c,d){
const e=C(a.path);for(const g of c.m_items){if(C(g.m_info.path)===e){if(d){const c=(0,j.HP)(a);c.path=g.m_info.path,g.m_info=c,
g.m_parts=b}return!1}}const f={m_info:a,m_parts:b};return c.m_items.push(f),c.m_listed=!1,c.m_index_map=null,!0}(b,c,g,d))return
;if(!e)return;I({path:e,type:8},0,!1)}}},50421:function(a,b,c){c.d(b,{IW:function(){return l},LD:function(){return m},
O7:function(){return o}});var d=c(4234),e=c(60026),f=c(12131),g=c(13113),h=c(78440),i=c(4153),j=c(40371),k=c(69893);c(13117)
;function l(a){let b=!1;const c=a,h={Connect:l,Disconnect:m,Login:async function(a,b){return void l()},Logoff:async function(a){
m()},List:async function(a,e,g){if(!b)throw f.SP;const h=c.List(a);let i=[];for(let b=0;b<h.length;b++){
const c=h[b],e=a+"/"+c.m_name;let f=null;if(c.m_folder)f={path:e,type:8,cre:c.m_time_created,mod:c.m_time_modified,size:0};else{
let a=(0,d.hF)(e);8===a&&(a=9),f={path:e,type:a,cre:c.m_time_created,mod:c.m_time_modified,size:c.m_size},o(f,e)}i.push(f)}
return i=i.sort(d.wl),i},GetInfo:n,GetCounts:async function(a,b){throw f.lU},DeleteFile:async function(a,e){if(!b)throw f.SP
;if(c.GetInfo(a).m_folder)throw(0,f.rb)(8,"File vs Folder conflict: "+a);c.DeleteFile(a);const g=[{event:7,path:a,type:(0,
d.hF)(a)}];h.onDataChanged.CallAllSync(g)},DeleteFolder:async function(a,d){if(!b)throw f.SP;let e;try{e=await n(a,0,d)
}catch(i){if((0,k.r5)(i,k.Y$))return;throw i}if(8!==e.type)throw(0,f.rb)(8,"Folder vs File conflict: "+a);const g=[{event:7,
path:a,type:8}];h.onDataChanged.CallAllSync(g);try{c.DeleteFolder(a)}catch(i){const b=[{event:2,path:a}]
;h.onDataChanged.CallAllSync(b)}},MoveFile:async function(a,e,g){if(!b)throw f.SP;if(c.GetInfo(a).m_folder)throw(0,
f.rb)(8,"Source File vs Folder conflict: "+a);let i=null;try{i=c.GetInfo(e)}catch(n){if(!(0,k.r5)(n,k.Y$))throw n}
if(i&&i.m_folder)throw(0,f.rb)(8,"Destination File vs Folder conflict: "+e);const j=(0,d.hF)(a),l=(0,d.hF)(e);if(j!==l)throw(0,
f.rb)(5,`Wrong data type: ${l} != ${j}`);c.MoveFile(a,e);const m=[{event:8,path:a,type:j,to:{path:e}}]
;h.onDataChanged.CallAllSync(m)},MoveFolder:async function(a,e,g){if(!b)throw f.SP;if(!c.GetInfo(a).m_folder)throw(0,
f.rb)(8,"Source Folder vs File conflict: "+a);let j=null;try{j=c.GetInfo(e)}catch(m){if(!(0,k.r5)(m,k.Y$))throw m}
if(j&&!j.m_folder)throw(0,f.rb)(8,"Destination Folder vs File conflict: "+e);if((0,i.RA)(a,e));else if((0,d.QC)(a,e))throw(0,
k.ZU)(k.V2,"Destination folder is inside source folder");c.MoveFolder(a,e);const l=[{event:8,path:a,type:8,to:{path:e}}]
;h.onDataChanged.CallAllSync(l)},CopyFile:async function(a,e,g){if(!b)throw f.SP;if(c.GetInfo(a).m_folder)throw(0,
f.rb)(8,"Source File vs Folder conflict: "+a);let i=null;try{i=c.GetInfo(e)}catch(n){if(!(0,k.r5)(n,k.Y$))throw n}
if(i&&i.m_folder)throw(0,f.rb)(8,"Destination File vs Folder conflict: "+e);const j=(0,d.hF)(a),l=(0,d.hF)(e);if(j!==l)throw(0,
f.rb)(5,`Wrong data type: ${l} != ${j}`);c.CopyFile(a,e);const m=[{event:i?6:5,path:e,type:j}];h.onDataChanged.CallAllSync(m)},
CopyFolder:async function(a,d,e){if(!b)throw f.SP;if(!c.GetInfo(a).m_folder)throw(0,
f.rb)(8,"Source Folder vs File conflict: "+a);const g=await p(a,d,!0,e);h.onDataChanged.CallAllSync(g)},
CreateFolder:async function(a,d){if(!b)throw f.SP;if(!a)return;let e=null;try{e=c.GetInfo(a)}catch(i){if(!(0,
k.r5)(i,k.Y$))throw i}if(e){if(!e.m_folder)throw(0,f.rb)(8,"Folder vs File conflict: "+a);return}c.CreateFolder(a);const g=[{
event:5,path:a,type:8}];h.onDataChanged.CallAllSync(g)},GetFile:async function(a,d,e){if(!b)throw f.SP;return c.GetFile(a,d)},
PutFile:async function(a,e,g){if(!b)throw f.SP;let i=!0;try{c.GetInfo(a)}catch(l){if(!(0,k.r5)(l,k.Y$))throw l;i=!1}
await c.PutFile(a,e);const j=[{event:i?6:5,path:a,type:(0,d.hF)(a)}];h.onDataChanged.CallAllSync(j)},
GetDataItem:async function(a,b,c,d){throw f.lU},PutDataItem:async function(a,b,c){throw f.lU},LogFileAccess:async()=>{throw f.lU
},onDataChanged:(0,j.dU)(),GetFSForSync:q};return h;function l(){b||(b=!0)}function m(){b&&(q().Disconnect(),b=!1)}
async function n(a,e,h){if(!b)throw f.SP;const i=c.GetInfo(a);let j,k=a;return k&&i.m_name&&!k.endsWith(i.m_name)&&(k=(0,
g.fA)(a)+"/"+i.m_name),i.m_folder?j={path:k,type:8,cre:i.m_time_created,mod:i.m_time_modified,size:0}:(j={path:k,type:(0,
d.hF)(k),cre:i.m_time_created,mod:i.m_time_modified,size:i.m_size},o(j,a)),j}function o(a,b){const d=c.GetSharingInfo(b)
;d.m_shared_id&&(a.sharedFile=!0,d.m_granted?a.granted=!0:(a.received=!0,a.readOnly=!0))}async function p(a,b,e,g){if((0,
d.QC)(a,b))throw(0,k.ZU)(k.V2,"Destination folder is inside source folder");const h=[];let i=null;try{i=c.GetInfo(b)}catch(l){
if(!(0,k.r5)(l,k.Y$))throw l}if(i){if(!i.m_folder)throw(0,f.rb)(8,"Destination Folder vs File conflict: "+b)
}else c.CreateFolder(b),e&&(h.push({event:5,path:b,type:8}),e=!1);const j=c.List(a);for(const f of j){
const i=a+"/"+f.m_name,j=b+"/"+f.m_name;if(f.m_folder){const a=await p(i,j,e,g);a.length>0&&a.forEach((function(a){h.push(a)}))
}else{let a=!0;if(e)try{c.GetInfo(j)}catch(l){(0,k.r5)(l,k.Y$)&&(a=!1)}if(c.CopyFile(i,j),e){const b=a?6:5;h.push({event:b,
path:j,type:(0,d.hF)(j)})}}}return h}function q(){const a=(0,e.xH)(c);return a.onDataChanged.Add((a=>{
h.onDataChanged.CallAllSync(a)})),a}}function m(){let a=!1;const b=[];let c=null;const g={Connect:function(){l(),a=!0},
Disconnect:l,Mount:function(a,d,e,f,h){const j=b.find((b=>b.m_storage===a));if(j)j.m_show_in_list=f,j.m_paths.push(d);else{
const e={m_storage:a,m_paths:[],m_show_in_list:f,m_load_data_action:h,m_load_data_task:null};b.push(e),
f&&(e.m_on_storage_data_changed_handler=a=>function(a,b){const d=[];for(const e of b)switch(e.event){case 3:case 10:case 4:break
;case 1:{const b={event:1,path:a.m_paths[0].m_mount_at_path};d.push(b)}break;case 11:a.m_storage===c&&d.push(e);break;case 5:
case 6:case 7:case 8:{const b=(0,i.HP)(e);if(e.path){const c=r(a,e.path);b.path=c,8===e.event&&e.to&&e.to.path&&(b.to={
path:r(a,e.to.path)})}d.push(b)}break;default:d.push(e)}d.length>0&&g.onDataChanged.CallAllSync(d)}(e,a),
a.onDataChanged.Add(e.m_on_storage_data_changed_handler)),e.m_paths.push(d)}e&&(c=a)},Unmount:function(a,c){let d=!1
;const e=!!c,f=!!a;for(let g=b.length-1;g>=0;g--){const h=b[g],i=h.m_storage===c
;if(!e||i)if(f)for(let c=h.m_paths.length-1;c>=0;c--){if(h.m_paths[c].m_mount_at_path===a){h.m_paths.splice(c,1),
0===h.m_paths.length&&(m(h),b.splice(g,1)),d=!0;break}}else if(i){m(h),b.splice(g,1),d=!0;break}}return d},
UnmountAll:function(){c=null;for(const a of b)m(a);b.length=0},CheckPermissions:function(a,b,c){t(p(a).m_path_info,b,c)},
DataChanged:function(a){g.onDataChanged.CallAllSync(a)},Login:async function(a,d){c&&await c.Login(a,d)
;for(const e of b)e.m_storage!==c&&await e.m_storage.Login(a,d)},Logoff:async function(a){
for(const c of b)await c.m_storage.Logoff(a)},List:async function(a,e,f){const g=p(a)
;if(!g.m_storage_info.m_show_in_list)throw(0,k.ZU)(k.Y$,"Path not found: "+a);const h=q(g,!0);h&&await h.Execute(f)
;const i=(await g.m_storage_info.m_storage.List(g.m_target_path,e,f)).map((a=>Object.assign({},a)));for(const b of i){
const a=s(b.path,g.m_path_info.m_add_target_base_path,g.m_path_info.m_mount_at_path);a&&(b.path=a),
(c!==g.m_storage_info.m_storage||g.m_path_info.m_mount_at_path)&&u(b,g.m_path_info)}
if(!a)for(const c of b)if(c.m_show_in_list)for(const a of c.m_paths){if(!a.m_mount_at_path)continue
;if(!(64&e)&&a.m_disabled)continue;const b={path:a.m_mount_at_path,type:8};u(b,a),i.push(b)}return i.sort(d.wl),i},
GetInfo:async function(a,b,d){const e=p(a),f=q(e,!1);f&&await f.Execute(d)
;const g=Object.assign({},await e.m_storage_info.m_storage.GetInfo(e.m_target_path,b,d)),h=s(g.path,e.m_path_info.m_add_target_base_path,e.m_path_info.m_mount_at_path)
;null!==h&&(g.path=h);(c!==e.m_storage_info.m_storage||e.m_path_info.m_mount_at_path)&&u(g,e.m_path_info);return g},
GetCounts:async function(a,b){throw f.lU},DeleteFile:async function(a,b){const c=p(a),d=q(c,!1);d&&await d.Execute(b)
;if(t(c.m_path_info,!0,!1),a===c.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"File can not be deleted")
;return c.m_storage_info.m_storage.DeleteFile(c.m_target_path,b)},DeleteFolder:async function(a,b){const c=p(a),d=q(c,!1)
;d&&await d.Execute(b);if(t(c.m_path_info,!0,!1),a===c.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"Folder can not be deleted")
;return c.m_storage_info.m_storage.DeleteFolder(c.m_target_path,b)},MoveFile:async function(a,b,c){const d=p(a);{const a=q(d,!1)
;a&&await a.Execute(c)}const e=p(b);{const a=q(e,!1);a&&await a.Execute(c)}if(a===d.m_path_info.m_mount_at_path)throw(0,
f.rb)(2,"File can not be renamed or moved");if(t(d.m_path_info,!0,!1),b===e.m_path_info.m_mount_at_path)throw(0,
f.rb)(2,"File already exists")
;if(t(e.m_path_info,!0,!1),!d.m_path_info.m_show_passwords&&e.m_path_info.m_show_passwords)throw(0,
f.rb)(2,"No permissions to move protected data")
;return d.m_storage_info.m_storage===e.m_storage_info.m_storage?e.m_storage_info.m_storage.MoveFile(d.m_target_path,e.m_target_path,c):n(d.m_target_path,d.m_storage_info.m_storage,e.m_target_path,e.m_storage_info.m_storage,!0,c)
},MoveFolder:async function(a,b,c){const d=p(a);{const a=q(d,!1);a&&await a.Execute(c)}const e=p(b);{const a=q(e,!1)
;a&&await a.Execute(c)}if(a===d.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"Folder can not be renamed or moved")
;if(t(d.m_path_info,!0,!1),b===e.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"Folder already exists");if(t(e.m_path_info,!0,!1),
!d.m_path_info.m_show_passwords&&e.m_path_info.m_show_passwords)throw(0,f.rb)(2,"No permissions to move protected data")
;return d.m_storage_info.m_storage===e.m_storage_info.m_storage?e.m_storage_info.m_storage.MoveFolder(d.m_target_path,e.m_target_path,c):o(d.m_target_path,d.m_storage_info.m_storage,e.m_target_path,e.m_storage_info.m_storage,!0,c)
},CopyFile:async function(a,b,c){const d=p(a);{const a=q(d,!1);a&&await a.Execute(c)}const e=p(b);{const a=q(e,!1)
;a&&await a.Execute(c)}if(t(e.m_path_info,!0,!1),b===e.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"File already exists")
;if(!d.m_path_info.m_show_passwords&&e.m_path_info.m_show_passwords)throw(0,f.rb)(2,"No permissions to copy protected data")
;return d.m_storage_info.m_storage===e.m_storage_info.m_storage?e.m_storage_info.m_storage.CopyFile(d.m_target_path,e.m_target_path,c):n(d.m_target_path,d.m_storage_info.m_storage,e.m_target_path,e.m_storage_info.m_storage,!1,c)
},CopyFolder:async function(a,b,c){const d=p(a);{const a=q(d,!1);a&&await a.Execute(c)}const e=p(b);{const a=q(e,!1)
;a&&await a.Execute(c)}if(t(e.m_path_info,!0,!1),b===e.m_path_info.m_mount_at_path)throw(0,f.rb)(2,"Folder already exists")
;if(!d.m_path_info.m_show_passwords&&e.m_path_info.m_show_passwords)throw(0,f.rb)(2,"No permissions to copy protected data")
;return d.m_storage_info.m_storage===e.m_storage_info.m_storage?e.m_storage_info.m_storage.CopyFolder(d.m_target_path,e.m_target_path,c):o(d.m_target_path,d.m_storage_info.m_storage,e.m_target_path,e.m_storage_info.m_storage,!1,c)
},CreateFolder:async function(a,b){const c=p(a),d=q(c,!1);d&&await d.Execute(b);return t(c.m_path_info,!0,!1),
c.m_storage_info.m_storage.CreateFolder(c.m_target_path,b)},GetFile:async function(a,b,c){const d=p(a),e=q(d,!1)
;e&&await e.Execute(c);return d.m_storage_info.m_storage.GetFile(d.m_target_path,b,c)},PutFile:async function(a,b,c){
const d=p(a),e=q(d,!1);e&&await e.Execute(c)
;return t(d.m_path_info,!0,!1),d.m_storage_info.m_storage.PutFile(d.m_target_path,b,c)},GetDataItem:async function(a,b,c,d){
throw f.lU},PutDataItem:async function(a,b,c){throw f.lU},LogFileAccess:async()=>{throw f.lU},onDataChanged:(0,j.dU)()};return g
;function l(){a&&(a=!1)}function m(a){var b
;c===a.m_storage&&(c=null),a.m_on_storage_data_changed_handler&&(a.m_storage.onDataChanged.Remove(a.m_on_storage_data_changed_handler),
delete a.m_on_storage_data_changed_handler),null===(b=a.m_load_data_task)||void 0===b||b.Cancel(),a.m_load_data_task=null,
a.m_load_data_action=null}function p(a){for(let c=b.length-1;c>=0;c--){const d=b[c];for(let b=d.m_paths.length-1;b>=0;b--){
const c=d.m_paths[b],e=s(a,c.m_mount_at_path,c.m_add_target_base_path);if(null!==e)return{m_storage_info:d,m_path_info:c,
m_target_path:e}}}throw(0,k.ZU)(k.Y$,"Path not found: "+a)}function q(a,b){
if(a.m_storage_info.m_load_data_action&&(b||a.m_target_path!==e.ZD)&&(0,d.QC)(e.ZD,a.m_target_path)){
let b=a.m_storage_info.m_load_data_task;return b||(b=a.m_storage_info.m_load_data_task=(0,h.YZ)({async action(b){var c,d
;await(null===(d=(c=a.m_storage_info).m_load_data_action)||void 0===d?void 0:d.call(c,b)),
a.m_storage_info.m_load_data_task=null,a.m_storage_info.m_load_data_action=null}})),(0,h.BM)(b)}return null}function r(a,b){
for(let c=a.m_paths.length-1;c>=0;c--){const d=a.m_paths[c],e=b.substring(d.m_add_target_base_path.length)
;return d.m_mount_at_path+e}throw(0,k.ZU)(k.Y$,"Path not found: "+b)}function s(a,b,c){if(b){if(!(0,d.QC)(b,a))return null
}else if(a&&!(0,i.LL)(a,"/"))return null;return c+a.substring(b.length)}function t(a,b,c){if(b&&a.m_read_only)throw(0,
f.rb)(2,"Data is read-only");if(c&&!a.m_show_passwords)throw(0,f.rb)(2,"No permissions to view protected data")}function u(a,b){
a.received=!0,a.sharedFolder=!0,b.m_shared_group&&(a.sharedGroup=!0),b.m_read_only&&(a.readOnly=!0),
b.m_disabled&&(a.disabled=!0),b.m_show_passwords&&!b.m_read_only||(a.hidePasswords=!0),
(b.m_is_manager||b.m_is_admin)&&(a.granted=!0)}}async function n(a,b,c,d,e,f){const g=await b.GetFile(a,"utf16",f)
;await d.PutFile(c,g,f),e&&await b.DeleteFile(a,f)}async function o(a,b,c,d,e,f){const h=await b.List(a,0,f)
;await d.CreateFolder(c,f);for(const i of h){const a=c+"/"+(0,g._p)(i.path)
;8===i.type?await o(i.path,b,a,d,e,f):await n(i.path,b,a,d,e,f),null==f||f.ThrowIfShouldStop()}e&&await b.DeleteFolder(a,f)}},
42058:function(a,b,c){c.d(b,{Ls:function(){return l},ie:function(){return t},lr:function(){return r},t5:function(){return m},
tx:function(){return p}});var d=c(46764),e=c(85877),f=c(49615),g=c(40868),h=c(4153),i=c(69893),j=(c(13117),c(9331)),k=c.n(j)
;async function l(a,b,c,j,l){if(!a)throw(0,i.ZU)(i.V2,"Missing required parameter: input stream");if(!b)throw(0,
i.ZU)(i.V2,"Missing required parameter: RSA key");const m=a.length;return m<=117?await async function(){const c=await(0,
d.is)(a,b,j);if(0===c.length)throw(0,i.ZU)(i.V2,"Cannot encrypt: bad RSA key or data")
;const e=c.length,k=new Uint8Array([115,114,115,49]),l=(0,g.uH)(e,2),m=(0,h.We)(k,l,c),n=(0,f.g)(m,m.length),o=(0,g.uH)(n,4)
;return(0,h.We)(m,o)}():await async function(){
const m=j.GenerateRandomBytes(40),n=await c.PBKDF2_HMAC(m.slice(0,32),m.slice(32,40),1,0,64,l),o=await(0,d.is)(m,b,j),p=o.length
;if(0===p)throw(0,i.ZU)(i.V2,"Cannot encrypt: bad key or data");const q=new Uint8Array([115,114,115,50]),r=(0,g.uH)(p,2),s=(0,
e.$5)(n,0,32),t={iv:(0,e.$5)(n,32,16),mode:k().mode.CBC,padding:k().pad.Pkcs7},u=k().algo.AES.createEncryptor(s,t)
;let v=u.process((0,e.$5)(a,null,null));const w=u.finalize();w.sigBytes>=0&&(v=v.concat(w));const x=(0,e.t_)(v),y=(0,
h.We)(q,r,o,x),z=(0,f.g)(y,y.length),A=(0,g.uH)(z,4),B=(0,h.We)(y,A);return B}()}async function m(a,b,c,j,l,m){
if(!a||!a.length)throw(0,i.ZU)(i.V2,"Missing required parameter: input stream");if(!b)throw(0,
i.ZU)(i.V2,"Missing required parameter: RSA key");const n=a.length;if(n<10)throw(0,i.ZU)(i.V2,"Cannot decrypt: bad data format")
;const o=a.slice(0,4);if((0,h.Fu)(o,[115,114,115,49]));else if(!(0,h.Fu)(o,[115,114,115,50]))throw(0,
i.ZU)(i.V2,"Cannot decrypt: unknown data format");if((0,f.g)(a,n-4)!==(0,g.mo)(a,n-4,4))throw(0,
i.ZU)(i.V2,"Cannot decrypt: data CRC error");const p=(0,g.mo)(a,4,2),q=a.slice(6,6+p);if(p<=0||p>n-10)throw(0,
i.ZU)(i.V2,"Cannot decrypt: bad RSA data block");const r=n-(6+p+4),s=a.slice(6+p,6+p+r),t=c?await(0,d.H9)(q,b):await(0,
d.is)(q,b,l);if(!r)return t;if(40!==t.length)throw(0,i.ZU)(i.V2,"Cannot decrypt: bad RSA data block")
;const u=await j.PBKDF2_HMAC(t.slice(0,32),t.slice(32,40),1,0,64,m),v=(0,e.$5)(u,0,32),w={iv:(0,e.$5)(u,32,16),
mode:k().mode.CBC,padding:k().pad.Pkcs7},x=k().algo.AES.createDecryptor(v,w);let y=x.process((0,e.$5)(s,null,null))
;const z=x.finalize();z.sigBytes>=0&&(y=y.concat(z));return(0,e.t_)(y)}const n=16,o=100;async function p(a,b,c,d,e){return(0,
g.n1)(await q(await(0,g.zN)(a),b,c,d,e))}async function q(a,b,c,d,f){
const g=d.GenerateRandomBytes(n),i=await c.PBKDF2_HMAC(b,g,o,0,64,f),j=(0,e.$5)(i,0,32),l={iv:(0,e.$5)(i,32,16),
mode:k().mode.CBC,padding:k().pad.Pkcs7},m=k().algo.AES.createEncryptor(j,l);let p=m.process((0,e.$5)(a,null,null))
;const q=m.finalize();q.sigBytes>=0&&(p=p.concat(q));const r=(0,e.t_)(p);return(0,h.We)(g,r)}async function r(a,b,c,d){return(0,
g.Z$)(await s((0,g.fI)(a),b,c,d))}async function s(a,b,c,d){
const f=a.slice(0,n),g=a.slice(f.length),h=await c.PBKDF2_HMAC(b,f,o,0,64,d),i=(0,e.$5)(h,0,32),j={iv:(0,e.$5)(h,32,16),
mode:k().mode.CBC,padding:k().pad.Pkcs7},l=k().algo.AES.createDecryptor(i,j);let m=l.process((0,e.$5)(g,null,null))
;const p=l.finalize();return p.sigBytes>=0&&(m=m.concat(p)),(0,e.t_)(m)}function t(a,b){const c=a,d=b;return{
Decrypt:(a,b,d)=>s(a,b,c,d),Encrypt:(a,b,e)=>q(a,b,c,d,e)}}},81871:function(a,b,c){c.d(b,{R:function(){return x}})
;var d=c(4234),e=c(50421),f=c(32130),g=c(60026),h=c(61211),i=c(42592),j=c(62376),k=c(71644),l=c(88579),m=c(25807),n=c(54811),o=c(12131),p=c(46764),q=c(40868),r=c(45637),s=c(13113),t=c(95399),u=c(4153),v=c(40371),w=c(69893)
;c(13117);function x(a,b,c){const x=a,y=b,z=c;let A=!1,B="",C={},D=null,E=null,F=null,G=(0,r.XG)(),H=[],I={},J="",K=(0,
r.XG)(),L=[],M=(0,r.XG)(),N=[],O=!1;const P=new Map;let Q=new Map;const R=new Map
;let S=new Set,T={},U=null,V=null,W=null,X=null,Y=new Map,Z=null;const aa={m_storage_connected:!1,m_connected_to_server:!1,
m_logged_in:!1,m_have_cached_passwords:!1,m_one_file:!1,m_have_local_changes:!1,m_have_remote_changes:!1,m_last_sync:0,
m_force_master_password_change:!1},ab=(0,k.lr)(),ac=(0,v.dU)(),ad=(0,v.dU)(),ae={Init:af,IsConnected:function(){return A},
Connect:async function(){await ag();const a=(0,g.EH)(y,z);E=(0,e.IW)(a),E.Connect();const b=(0,g.EH)(y,z);F=(0,e.IW)(b),
F.Connect(),D=(0,e.LD)(),D.Mount(E,{m_mount_at_path:"",m_add_target_base_path:g.ZD,m_is_manager:!1,m_is_admin:!1,m_read_only:!1,
m_show_passwords:!0,m_shared_group:!1,m_disabled:!1},!0,!0,null),D.Mount(F,{m_mount_at_path:h.dc,m_add_target_base_path:h.dc,
m_is_manager:!1,m_is_admin:!1,m_read_only:!1,m_show_passwords:!0,m_shared_group:!1,m_disabled:!1},!1,!1,null),D.Mount(F,{
m_mount_at_path:h.LN,m_add_target_base_path:h.LN,m_is_manager:!1,m_is_admin:!1,m_read_only:!1,m_show_passwords:!0,
m_shared_group:!1,m_disabled:!1},!1,!1,null),D.Mount(F,{m_mount_at_path:h.l$,m_add_target_base_path:h.l$,m_is_manager:!1,
m_is_admin:!1,m_read_only:!1,m_show_passwords:!0,m_shared_group:!1,m_disabled:!1},!1,!1,null),D.Mount(F,{
m_mount_at_path:"appdata://",m_add_target_base_path:"",m_is_manager:!1,m_is_admin:!1,m_read_only:!1,m_show_passwords:!0,
m_shared_group:!1,m_disabled:!1},!1,!1,null),D.Connect(),U=(0,f.Am)(D,D),U.Init(),U.Connect();const c=(0,i.v)();V=(0,i.A)(U),
V.Init(),V.AddCacheLayer(c),V.onDataChanged.Add(am),V.Connect(),aa.m_connected_to_server=!0,aa.m_have_local_changes=!1,
aa.m_have_remote_changes=!1,aa.m_last_sync=(0,t.t2)(),await ab.Init(ae),A=!0},Disconnect:ag,IsLoggedIn:function(){
return aa.m_logged_in},IsConnectedToStorage:ah,SetOneFileAccount:function(a){aa.m_one_file=a},HaveLocalChanges:function(){
return aa.m_have_local_changes},HaveRemoteChanges:function(){return aa.m_have_remote_changes},SetHaveLocalChanges:ai,
SetHaveRemoteChanges:function(a){if(aa.m_have_remote_changes!==a){aa.m_have_remote_changes=a;const b=[{event:13}]
;ae.onDataChanged.CallAllSync(b)}},GetLastSyncedTime:function(){return aa.m_last_sync},SetLastSyncedTime:function(a){
if(aa.m_last_sync!==a){aa.m_last_sync=a;const b=[{event:13}];ae.onDataChanged.CallAllSync(b)}},
SetForceMasterPasswordChange:function(a){if(aa.m_force_master_password_change!==a){aa.m_force_master_password_change=a
;const b=[{event:13}];ae.onDataChanged.CallAllSync(b)}},UpdateAccountInfo:async function(a){if((0,u.XM)(C,a))return
;const b={},c=(0,n.v4)(a.companies||[]);b.AccountCompanyAdmin=c,b.AccountHaveLicense=a.haveLicense||!1,
b.AccountHaveLicenseInfo=a.haveLicenseInfo||!1,b.AccountLicenseActive=a.licenseActive||!1,
b.AccountLicenseTrial=a.licenseTrial||!1,b.AccountLicenseExpired=a.licenseExpired||!1,
b.AccountLicenseExpirationTime=a.licenseExpirationTime||0,b.AccountLicenseExpiresInDays=a.licenseExpiresInDays||0,
b.AccountLicenseData=(0,
n.OB)(a)||"",b.AccountEnterprise=a.enterprise||!1,b.AccountEnterpriseLicenseActive=a.enterpriseLicenseActive||!1,
b.AccountCompanyTitle=(0,n.iM)(a.companies||[]),b.AccountSyncAllowed=a.syncAllowed||!1,
b.AccountClientReadOnly=a.clientReadOnly||!1,b.AccountClientBlocked=a.clientBlocked||!1,
b.AccountOneFreeDevice=a.oneFreeDevice||!1,b.AccountCanSwitchToFreeMode=a.canSwitchToFreeMode||!1,
b.AccountCanSetFreeDevice=a.canSetFreeDevice||!1,b.AccountFreeDeviceSwitchesLeft=a.freeDeviceSwitchesLeft||0,
b.AccountInitialFreeDeviceSwitch=a.initialFreeDeviceSwitch||!1,b.AccountOneFreeDeviceId=a.oneFreeDeviceId||"",
b.AccountOneFreeDeviceName=a.oneFreeDeviceName||"",b.AccountCanSetReadonlyDevice=a.canSetReadOnlyDevice||!1,
b.AccountReadOnlyDevicesLimitReached=a.readOnlyDevicesLimitReached||!1,b.AccountCreatedTime=a.createdTime,b.SyncIsOn=!0,
await K.Set(b),C.policies!==a.policies&&await async function(a,b){const c=await G.Get(null);if(await G.Clear(),
!a)return ao(c,{});const d=(0,q.fI)(a),e=await(0,q.Z$)(d),f={};let g=null,h=null,i=null,k=!1;const l=e.split("\r\n");let m=null
;for(const n of l){if(!n)continue;if(n.length>2&&"["===n[0]&&"]"===n[n.length-1]){m=n;continue}const a=n.split("=")
;if(!Array.isArray(a)||a.length<2)continue;if("[DOMAINS EQUIV]"===m){
if("DomEqVer"===a[0])g=parseInt(a[1]);else if("DomEqCount"===a[0])h=parseInt(a[1]);else{if(!h)continue;i||(i=[]),
i.push(n.slice(a[0].length+1))}continue}const b=a[0];if("[OPTIONS]"===m&&b in f)continue;const c=a[1],d=(0,j.uC)(b,c);f[b]=d}
1===g&&i&&(k=!0,f.DomainEquivalencesLines=i);b&&(f.EnableDataExport=!0,f.EnablePrintList=!0,delete f.DisableCreateLogins,
delete f.DisableCreateBookmarks,delete f.DisableCreateAppLogins,delete f.DisableCreateIdentities,delete f.DisableCreateContacts,
delete f.DisableCreateSafenotes,delete f.DisableNonGroupData,delete f.ShowPasswordsAsStarsInEditor,delete f.NoPrintingDataFiles,
delete f.DisableChangeMasterPassword);await G.Set(f),await ao(c,f),k&&(W=null)}(a.policies||"",c);C=a
;ae.onDataChanged.CallAllSync([{event:9}])},GetGlobalStatus:function(){return aa},GetRFOnlineUserId:async function(){throw o.lU
},Login:async function(a,b){var c;const d=null!==(c=a.password)&&void 0!==c?c:"";if(aa.m_logged_in&&B===d)return;B=d,
ac.CallAllSync();try{await(0,u.TT)(U).Login(B,b),aa.m_logged_in=!0}finally{ad.CallAllSync(void 0!==a.password,aa.m_logged_in)}},
Logoff:aj,IsMasterPassword:async function(a,b){throw o.lU},WasNewMasterPasswordAlreadyUsed:async function(a,b,c,d){throw o.lU},
GetRfoConnectionInfo:async()=>{throw o.lU},GetRoboFormAccountInfo:async function(a){return C},GetDomainMatch:ak,
FindInPathNames:async function(a,b,c,d,e,f){return ab.FindInPathNames(a,b,c,d,e,f)},GetUserDataItemsCount:async function(a){
let b=0,c=0,d=0,e=0,f=0;E&&await(0,n.s_)(E,(async g=>{if(await(null==a?void 0:a.YieldToUI(30)),
!g.sharedFolder&&!g.sharedGroup)switch(g.type){case 2:c++;break;case 6:e++;break;case 5:d++;break;case 7:f++;break;case 1:b++}
}),{parts:1,deep:!0},a);return{loginsCount:b,bookmarksCount:c,safenotesCount:f,identitiesCount:d,contactsCount:e}},
GetSyncPendingItems:async()=>{throw o.lU},GetAvailableAuthenticationMethods:async()=>{throw o.lU},
StorePasswordInSystemProtectedStorage:async()=>{throw o.lU},DeletePasswordFromSystemProtectedStorage:async()=>{throw o.lU},
GetDataEncryptionSettings:async function(a){var b
;return null!==(b=null==E?void 0:E.GetFSForSync().GetEncryptionSettings())&&void 0!==b?b:(0,g.nG)()},
UpdateDataEncryptionSettings:async function(a,b){(0,u.TT)(E).GetFSForSync().UpdateEncryptionSettings(a),(0,
u.TT)(F).GetFSForSync().UpdateEncryptionSettings(a)},onLogInStarted:ac,onLogInFinished:ad,List:async function(a,b,c){return(0,
u.TT)(V).List(a,b,c)},GetInfo:async function(a,b,c){return(0,u.TT)(V).GetInfo(a,b,c)},GetCounts:async function(a,b){
const c=new Map;await(0,n.s_)((0,u.TT)(V),(a=>{var b;const d=null!==(b=c.get(a.type))&&void 0!==b?b:0;c.set(a.type,d+1)}),{
path:a,parts:0,deep:!0},b);const d=[];for(const[e,f]of c)d.push({type:e,count:f});return d},DeleteFile:async function(a,b){
return(0,u.TT)(V).DeleteFile(a,b)},DeleteFolder:async function(a,b){return(0,u.TT)(V).DeleteFolder(a,b)},
MoveFile:async function(a,b,c){return(0,u.TT)(V).MoveFile(a,b,c)},MoveFolder:async function(a,b,c){return(0,
u.TT)(V).MoveFolder(a,b,c)},CopyFile:async function(a,b,c){return(0,u.TT)(V).CopyFile(a,b,c)},CopyFolder:async function(a,b,c){
return(0,u.TT)(V).CopyFolder(a,b,c)},CreateFolder:async function(a,b){return(0,u.TT)(V).CreateFolder(a,b)},
GetDataItem:async function(a,b,c,d){return await(0,u.TT)(V).GetDataItem(a,b,c,d)},PutDataItem:async function(a,b,c){return(0,
u.TT)(V).PutDataItem(a,b,c)},GetFile:async function(a,b,c){return(0,u.TT)(D).GetFile(a,b,c)},PutFile:async function(a,b,c){
return(0,u.TT)(D).PutFile(a,b,c)},GetMatchingPasscards:async function(a,b,c,d){if(!ah())throw o.SP
;const e=Array.isArray(a)?a:[a],f=void 0===(c=c||{}).matchLevelMin?0:c.matchLevelMin,g=void 0===c.matchLevelMax?21:c.matchLevelMax,h=await ak(d),i=(0,
m.x3)();for(const[j,k]of e.entries()){const a=(0,l.dy)(k);if(!a)continue;const c=(0,l.WW)(k),e=(0,s.MI)(c);if(!e)continue
;const n=c.m_host||"",o=await ay(e,b,d),p=0===j;for(const b of o)switch(b.type){case 3:case 2:if(b.gotoUrl){const c=(0,
l.dy)(b.gotoUrl);if(c){const d=(0,m.QM)(c,a,n,h);d>=f&&d<=g&&i.AddMatch({path:b.path,level:d,isMainFrame:p})}}break;default:
if(b.matchUrl){const c=(0,l.dy)(b.matchUrl);if(c){const d=(0,m.QM)(c,a,n,h);if(d>=f&&d<=g){i.AddMatch({path:b.path,level:d,
isMainFrame:p});continue}}}}}return i.GetUnsortedMatches()},LogFileAccess:async()=>{throw o.lU},onDataChanged:(0,v.dU)(),
GetUsageInfoList:async function(a,b,c){return(0,u.TT)(V).GetUsageInfoList(a,b,c)},SetUsageInfoList:async function(a,b,c,d){
return(0,u.TT)(V).SetUsageInfoList(a,b,c,d)},SetUsageInfo:async function(a,b,c,d){return(0,u.TT)(V).SetUsageInfo(a,b,c,d)},
GetSearchHistoryList:async function(a,b){return(0,u.TT)(V).GetSearchHistoryList(a,b)},
AddItemToSearchHistory:async function(a,b){return(0,u.TT)(V).AddItemToSearchHistory(a,b)},
SetSearchHistoryList:async function(a,b,c){return(0,u.TT)(V).SetSearchHistoryList(a,b,c)},InvalidateUsageInfo:function(){(0,
u.TT)(U).InvalidateUsageInfo()},MergeUsageInfo:async function(a){return(0,u.TT)(U).MergeUsageInfo(a)},
CleanupUsageInfo:async function(a){return(0,u.TT)(U).CleanupUsageInfo(a)},UpdatePopularityCalculationMode:async function(a,b){
return(0,u.TT)(U).UpdatePopularityCalculationMode(a,b)},GetSecurityWarningEnabledForDataItem:async function(a,b,c){return(0,
u.TT)(U).GetSecurityWarningEnabledForDataItem(a,b,c)},DisableSecurityWarningForDataItem:async function(a,b,c,d){return(0,
u.TT)(U).DisableSecurityWarningForDataItem(a,b,c,d)},GetAllDataItemsWhereSecurityWarningIsDisabled:async function(a,b){return(0,
u.TT)(U).GetAllDataItemsWhereSecurityWarningIsDisabled(a,b)},EnableSecurityWarningForAllDataItems:async function(a,b){return(0,
u.TT)(U).EnableSecurityWarningForAllDataItems(a,b)},policies:{Get:async function(a){return G.Get(a)},
GetValue:async function(a,b){return G.GetValue(a,b)},AddOnChangeListener:function(a){H.push(a),G.AddOnChangeListener(a)},
RemoveOnChangeListener:function(a){const b=H.indexOf(a);b>=0&&(G.RemoveOnChangeListener(a),H.splice(b,1))}},settings:{
Get:async function(a){return M.Get(a)},GetValue:async function(a,b){return M.GetValue(a,b)},Set:ap,SetValue:async function(a,b){
const c={};return c[a]=b,ap(c)},Remove:async function(a){return M.Remove(a)},Clear:async function(){return M.Clear()},
AddOnChangeListener:function(a){N.push(a),M.AddOnChangeListener(a)},RemoveOnChangeListener:function(a){const b=N.indexOf(a)
;b>=0&&(M.RemoveOnChangeListener(a),N.splice(b,1))}},options:{Get:async function(a){return K.Get(a)},
GetValue:async function(a,b){return K.GetValue(a,b)},AddOnChangeListener:function(a){L.push(a),K.AddOnChangeListener(a)},
RemoveOnChangeListener:function(a){const b=L.indexOf(a);b>=0&&L.splice(b,1)}},GetSharedFilesList:function(){return T},
SetSharedFilesList:function(a){T=a},GetSharedFileInfo:function(a){return(0,u.TT)(E).GetFSForSync().GetSharingInfo(g.ZD+a)},
GetSharedAccountsInfo:function(){const a=[];for(const b of Q.values())a.push(b.m_account);return a},
GetMountedSharedAccountsInfo:function(){const a=new Map;for(const b of Q.values()){const c=b.m_mounted_at_path
;null!==c&&a.set(c,b.m_account)}return a},GetSharedAccountInfoByAccountId:function(a){const b=Q.get(a);if(!b)throw(0,
w.ZU)(w.V2,"Shared folder is not found");const c=R.get(a);return Object.assign(Object.assign({},b.m_account),{securityStats:c})
},GetSharedAccountInfoByMountPath:function(a){for(const b of Q.values())if(b.m_mounted_at_path===a)return b.m_account;throw(0,
w.ZU)(w.V2,"Shared folder is not found")},GetSharedAccountMountPathByAccountId:function(a){const b=Q.get(a);if(!b)throw(0,
w.ZU)(w.V2,"Shared folder is not found");return b.m_mounted_at_path},GetSharedAccountFSForSync:function(a){const b=Q.get(a)
;if(!b)throw(0,w.ZU)(w.V2,"Shared folder is not found");const c=(0,u.TT)(b.m_storage).GetFSForSync();return c.SetRootDir(g.ZD),c
},UpdateReceivedAccountsList:async function(a,b){const c=new Map(a.map((a=>[a.accountId,a]))),d=new Set
;for(const[f,g]of P)g&&!c.has(f)&&d.add(f);for(const f of d)av(f),P.delete(f),Y.delete(f);for(const[f,g]of c){const a=P.get(f)
;if(!a||!(0,u.XM)(g,a)){if(!g.accepted||g.disabled&&!g.isAdmin||g.disableLocalData||!g.mp)av(g.accountId);else{
const b=Q.get(g.accountId);if(a&&b){const a={m_mounted_at_path:b.m_mounted_at_path,m_account:g,m_storage:null}
;Q.set(g.accountId,a)}else{const a={m_mounted_at_path:null,m_account:g,m_storage:null};Q.set(g.accountId,a)}}P.set(f,g)}}
const e=await x.GetValue("NeedUpdateGroupsDataStats",[]);return S=new Set((0,u.EY)(e)?e.filter((a=>P.has(a))):[]),!0},
DeleteSharedAccount:function(a){if(!Q.get(a))return;av(a),P.delete(a)},DecryptRemotePassword:async function(a){
const b=await ax();return await(0,p.oF)((0,q.fI)(a),b)},UnMountSharedAccount:av,
UpdateReceivedSharedAccountsMounting:async function(a,b){const c=new Set,f=new Set,h=new Set,i=new Set,j=[];for(const[e,m]of Q){
const a=P.get(e);if(!a){c.add(e);continue}let k=(0,d.KF)(a.name,200);k||(k=(0,d.KF)(a.recipientEmail,200),k||(k="Folder"))
;const o=m.m_mounted_at_path,p=!!o,q="/"+k,r=g.ZD+q;let s,t=!f.has(r);if(t)try{(0,u.TT)(E).GetFSForSync().GetInfo(r),t=!1
}catch(l){if(!(0,w.r5)(l,w.Y$))throw l;t=!0}if(t)s=q,f.add(g.ZD+s);else{const a=await(0,n.Ty)((0,u.TT)(E),r,8," [%d]",f,b)
;f.add(a),s=a.substring(g.ZD.length)}let v=!1;p?s===o?(0,u.XM)(a,m.m_account)&&m.m_storage||(i.add(e),v=!0):(c.add(e),h.add(e),
v=!0):(h.add(e),v=!0),v&&j.push({m_account:a,m_storage:m.m_storage,m_mounted_at_path:s})}const k=[];for(const d of c){
const a=Q.get(d);if(!a)continue;const b=a.m_mounted_at_path;if(null===b)continue;const c=(0,u.TT)(D).Unmount(b,a.m_storage)
;h.has(d)||(Q.delete(d),c&&k.push({event:7,path:b,type:8}))}for(const d of j){let b,c=!1;const f=Q.get(d.m_account.accountId)
;if(f)if(d.m_storage)c=f.m_mounted_at_path===d.m_mounted_at_path,b=d.m_storage;else{const a=(0,g.EH)(y,z);b=d.m_storage=(0,
e.IW)(a),b.Connect(),i.has(d.m_account.accountId)&&null!==d.m_mounted_at_path&&((0,
u.TT)(D).Unmount(f.m_mounted_at_path,f.m_storage),c=!0)}else{const a=(0,g.EH)(y,z);b=d.m_storage=(0,e.IW)(a),b.Connect()}
null!==d.m_mounted_at_path&&((0,u.TT)(D).Mount(b,{m_mount_at_path:d.m_mounted_at_path,m_add_target_base_path:g.ZD,
m_is_manager:d.m_account.isManager||!1,m_is_admin:d.m_account.isAdmin||!1,m_read_only:d.m_account.readOnly||!1,
m_show_passwords:d.m_account.showPasswords||!1,m_shared_group:!!d.m_account.company,m_disabled:!!d.m_account.disabled
},!1,!0,d.m_account.disabled?async b=>{await(null==a?void 0:a(d.m_account.accountId,b))}:null),Q.set(d.m_account.accountId,d),
c?k.push({event:6,path:d.m_mounted_at_path,type:8}):k.push({event:5,path:d.m_mounted_at_path,type:8}))}0!==k.length&&(0,
u.TT)(D).DataChanged(k);return!0},UpdateSecurityStatsByAccountId:function(a,b){R.set(a,b)},
GetUnchangedAccountDataForSync:function(a){var b;return null!==(b=Y.get(a))&&void 0!==b?b:null},
SetUnchangedAccountDataForSync:function(a,b){Y.set(a,b)},SetNeedUpdateUserDataStats:async function(a){
await x.SetValue("NeedUpdateUserDataStats",a)},GetNeedUpdateUserDataStats:async function(){
return await x.GetValue("NeedUpdateUserDataStats",!0)},SetNeedUpdateGroupDataStats:async function(a,b){const c=S.has(a)
;b!==c&&(b?S.add(a):S.delete(a),await x.SetValue("NeedUpdateGroupsDataStats",[...S]))},GetNeedUpdateGroupDataStats:function(a){
return S.has(a)},GetPersonalDataFSForSync:function(){const a=(0,u.TT)(E).GetFSForSync();return a.SetRootDir(g.ZD),a},
GetAppDataFileSys:function(){return(0,u.TT)(F).GetFSForSync()},LoadPrivateKey:ax,StorePrivateKey:async function(a){
await async function(a,b){const c=(0,u.TT)(E).GetFSForSync();c.SetRootDir(""),await c.PutFile(a,b)}(g.n4,a)},
GetUserSelectedEncryptionIterations:async function(){const a=await M.Get({EncryptionAlgorithmIterations:void 0})
;if(!("EncryptionAlgorithmIterations"in a))return;return a.EncryptionAlgorithmIterations},
GetStoreDataLocalOnly:async function(){const a=await(0,u.TT)(G).Get({StoreDataLocalOnly:void 0})
;if(!("StoreDataLocalOnly"in a))return null;return a.StoreDataLocalOnly},GetServiceFile:aw,
CheckItemDuplicates:async function(a){const b=[];if(!a.changeEvent.path)return b;const c=(0,s._p)(a.changeEvent.path),e=await(0,
q.zN)(a.oldItemBody);return await(0,n.s_)((0,u.TT)(V),(async f=>{if(!(0,d.Rf)(f.type))return;if(f.readOnly)return
;if(f.path===a.changeEvent.path)return;if(a.changeEvent.type&&a.changeEvent.type!==f.type)return;if((0,
s._p)(f.path).toLowerCase()!==c.toLowerCase())return;if(f.size&&e.length!==f.size)return;const g=await(0,
u.TT)(D).GetFile(f.path,"utf16",null);a.oldItemBody===g&&b.push(f)}),{path:"",parts:1,deep:!0},a.progress),b},
SetServerTemplates:function(a){X=a,W=null},LoadOptionsFromPreferencesJson:async function(){as(),J="";try{const a=await(0,
u.TT)(F).GetFile(g.Qy,"utf16",null);J=a;const b=JSON.parse(a);await at(b)}catch(a){}},LoadOptionsFromCache:async function(a){
O=!1,M.RemoveOnChangeListener(aq),await M.Clear(),await K.Clear();try{const b=await async function(a,b){
const c=await a.GetValue("_user_preferences",{}),d=c[b]||null;if(!d)return{};const e=(0,q.fI)(d),f=await(0,
q.Z$)(e),g=JSON.parse(f);return g}(x,a);(0,u.f7)(b)||await M.Set(b)}catch(b){return void await x.Remove("_user_preferences")}
await an(),as()},StoreCacheableOptions:ar,ClearCacheableOptions:async function(a){
const b=await x.GetValue("_user_preferences",{});if(!(a in b))return;delete b[a],await x.SetValue("_user_preferences",b)},
AddSettingsStorageListener:as,MergeSyncableOptions:async function(a){let b=!1;const c=new Map,d=JSON.parse(a).options;i(d,2,c)
;try{const a=await(0,u.TT)(F).GetFile(g.Qy,"utf16",null),b=JSON.parse(a);i(b.options,1,c)}catch(j){if(!(0,w.r5)(j,w.Y$))throw j}
const e=JSON.parse(J);i(e.options,0,c);for(const g of c.keys()){const a=c.get(g);if(a){
if(null===a.base&&null!==a.local&&null===a.remote&&(d.push(a.local),
b=!0),null===a.base&&null!==a.local&&null!==a.remote&&a.local.timestamp>a.remote.timestamp&&(h(a.local),b=!0),
null===a.base&&null===a.local&&a.remote,null!==a.base&&null===a.local&&a.remote,null!==a.base&&null===a.local&&null!==a.remote){
for(let b=0;b<d.length;b++)if(d[b].section===a.base.section&&d[b].name===a.base.name){d.splice(b,1);break}b=!0}
null!==a.base&&null!==a.local&&a.remote,
null!==a.base&&null!==a.local&&null!==a.remote&&a.local.timestamp!==a.remote.timestamp&&(a.base.timestamp===a.local.timestamp||(a.base.timestamp===a.remote.timestamp||a.local.timestamp>a.remote.timestamp)&&(h(a.local),
b=!0))}}const f={options:d};return J=JSON.stringify(f),await at(f),b;function h(a){
for(let b=0;b<d.length;b++)if(d[b].section===a.section&&d[b].name===a.name)return d[b].timestamp=a.timestamp,
void(d[b].value=a.value)}function i(a,b,c){if(a)for(let d=0;d<a.length;d++){const e=a[d],f=e.section+"_"+e.name;let g=c.get(f)
;g?0===b?g.base=e:1===b?g.local=e:2===b&&(g.remote=e):g={base:0===b?e:null,local:1===b?e:null,remote:2===b?e:null},c.set(f,g)}}}
};return ae;function af(){B="",C={},D=null,E=null,F=null,U=null,V=null,H=[],G=(0,r.XG)(),I={},J="",L=[],K=(0,r.XG)(),N=[],M=(0,
r.XG)(),O=!1,W=null,X=null,Y=new Map,aa.m_connected_to_server=!1,aa.m_storage_connected=!1,aa.m_logged_in=!1,aa.m_one_file=!1,
aa.m_have_cached_passwords=!1,A=!1}async function ag(){if(A){await aj(null),await ab.UnInit(),null==V||V.Disconnect(),
null==V||V.onDataChanged.Remove(am),null==U||U.Disconnect(),null==D||D.Disconnect(),null==E||E.Disconnect(),
null==F||F.Disconnect();for(const a of H)G.RemoveOnChangeListener(a);for(const a of L)K.RemoveOnChangeListener(a)
;for(const a of N)M.RemoveOnChangeListener(a);af()}}function ah(){return aa.m_storage_connected}function ai(a){
if(aa.m_have_local_changes!==a){aa.m_have_local_changes=a;const b=[{event:13}];ae.onDataChanged.CallAllSync(b)}}
async function aj(a){aa.m_logged_in=!1,aa.m_have_cached_passwords=!1,I={},J="",Y=new Map,B="",C={},O=!1,
M.RemoveOnChangeListener(aq),await async function(){const a=[],b=[],c=await M.Get(null),d=await G.Get(null);for(const e in c)(0,
j.Qf)(e)||a.push(e);for(const e in d)(0,j.Qf)(e)||b.push(e);a.length>0&&(await M.Remove(a),await K.Remove(a))
;b.length>0&&await G.Remove(b)}(),W=null,function(){for(const[a,b]of Q)(0,u.TT)(D).Unmount(b.m_mounted_at_path,b.m_storage),
Q.delete(a);Q=new Map,P.clear(),S.clear(),R.clear(),T={}}(),await(null==V?void 0:V.Logoff(a)),await(null==U?void 0:U.Logoff(a)),
await(null==D?void 0:D.Logoff(a))}async function ak(a){if(W)return W;X?W=await X.GetDomainEquivalenceGroups(a):(W=(0,s.KF)(),
W.AddEquivalences((0,s.bz)()));const{DomainEquivalencesLines:b}=await K.Get({DomainEquivalencesLines:[]})
;if(b)for(const c of b){const a=(0,s.jk)(c);W.AddEquivalences(a)}return W}function al(a){switch(a.event){case 1:
a.path||(aa.m_storage_connected=!0);break;case 11:aa.m_storage_connected=!1}}function am(a){for(const b of a)switch(al(b),
b.event){case 5:case 7:case 8:case 6:{const a=b.path||"",c=b.type||0;if((0,d.yL)(a)&&((0,d.Rf)(c)||8===c&&a)){let b=!0
;if(8===c)for(const c of Q.values())if(c.m_mounted_at_path===a){b=!1;break}b&&ai(b)}break}}ae.onDataChanged.CallAllSync(a)}
async function an(){const a=await M.Get(null),b=await G.Get(null);(0,j.ki)(b,b,a),await K.Set(a);(0,j.f7)(b,a)&&await M.Set(a)}
async function ao(a,b){const c=await K.Get(null);(0,j.ki)(a,b,c)&&(await K.Clear(),await K.Set(c));const d=await M.Get(null);(0,
j.f7)(b,d)&&await M.Set(d)}async function ap(a){await M.Set(a),await an()}async function aq(a){let b=!1,c=!1
;const d={},e=new Set,f=(0,t.Mv)(),h=(0,u.Qj)(f/1e3);for(const g in a)switch(g){case"SetupNeeded":case"EnterpriseInstallation":
case"SyncIsOn":case"AccountCompanyAdmin":case"AccountHaveLicense":case"AccountHaveLicenseInfo":case"AccountLicenseActive":
case"AccountLicenseTrial":case"AccountLicenseExpired":case"AccountLicenseExpirationTime":case"AccountLicenseExpiresInDays":
case"AccountLicenseData":case"AccountEnterprise":case"AccountEnterpriseLicenseActive":case"AccountCompanyTitle":
case"AccountCreatedTime":case"AffId":break;case"SearchEngines":if(void 0===a[g].newValue)delete I["SEARCH ENGINES"],e.add(g),
c=!0;else{"SEARCH ENGINES"in I||(I["SEARCH ENGINES"]={Ver:{section:"SEARCH ENGINES",name:"Ver",value:"3",timestamp:h}})
;const b=a[g].newValue;I["SEARCH ENGINES"].Count={section:"SEARCH ENGINES",name:"Count",value:b.length.toString(),timestamp:h}
;for(let a=0;a<b.length;a++)I["SEARCH ENGINES"][a.toString()]={section:"SEARCH ENGINES",name:a.toString(),value:(0,j.sY)(b[a]),
timestamp:h};d[g]=a[g].newValue,c=!0}break;case"DomainEquivalencesLines":if(b=!0,
void 0===a[g].newValue)delete I["DOMAINS EQUIV"],e.add(g),c=!0;else{"DOMAINS EQUIV"in I||(I["DOMAINS EQUIV"]={})
;const b=a[g].newValue;I["DOMAINS EQUIV"].DomEqCount={section:"DOMAINS EQUIV",name:"DomEqCount",value:b.length.toString(),
timestamp:h};for(let a=0;a<b.length;a++)I["DOMAINS EQUIV"][a.toString()]={section:"DOMAINS EQUIV",name:a.toString(),value:b[a],
timestamp:h};d[g]=a[g].newValue,c=!0}break;case"KeyboardShortcutsState":if(void 0===a[g].newValue)delete I.SHORTCUTS,e.add(g),
c=!0;else{const b=a[g].newValue,e=new Map;b.forEach((function(a){e.set(a.m_id,a.m_enabled)}));const f=(0,j.ux)(),i={}
;f.forEach((function(a,b){if(e.has(b)){const c=e.get(b);i[a]={section:"SHORTCUTS",name:a,value:c?"1":"0",timestamp:h}
}else i[a]={section:"SHORTCUTS",name:a,value:"1",timestamp:h}})),I.SHORTCUTS=i,d[g]=a[g].newValue,c=!0}break;default:{
const b=(0,j.Tb)(g);if(!b)continue;const f=b.m_section;if(void 0===a[g].newValue){if(!I[f]){e.add(g);break}delete I[f][g],
e.add(g),c=!0}else{I[f]||(I[f]={});const b=I[f],e=(0,j.NY)(g,a[g].newValue);b[g]={section:f,name:g,value:e,timestamp:h},
d[g]=a[g].newValue,((0,j.NX)(g)||"SEARCH ENGINES"===f||"DOMAINS EQUIV"===f)&&(c=!0)}break}}if(await K.Remove([...e.keys()]),
await K.Set(d),c&&await async function(){const a={options:[]};for(const b in I){const c=I[b]
;for(const d in c)au(d,b)&&a.options.push(c[d])}await(0,u.TT)(F).PutFile(g.Qy,JSON.stringify(a),null)}(),C.accountId)try{
await ar(C.accountId)}catch(i){}b&&(W=null,null==V||V.ClearCachedDomainMatches())}async function ar(a){
const b=await M.Get(null),c={};for(const i in b)(0,j.Qf)(i)&&(c[i]=b[i]);const d=JSON.stringify(c),e=await(0,q.zN)(d),f=await(0,
q.n1)(e),g=await x.GetValue("_user_preferences",{}),h=Object.assign({},g);h[a]=f,await x.SetValue("_user_preferences",h)}
function as(){O||(M.AddOnChangeListener(aq),O=!0)}async function at(a){const b={};I={};let c=!1;const d=a.options
;if(d)for(let k=0;k<d.length;k++){const a=d[k];if(I[a.section]=I[a.section]||{},I[a.section][a.name]=a,
"SEARCH ENGINES"!==a.section&&"DOMAINS EQUIV"!==a.section&&"SHORTCUTS"!==a.section&&(0,j.Tb)(a.name)){const c=(0,
j.P7)(a.name,a.value);b[a.name]=c}}if("SEARCH ENGINES"in I){const a=I["SEARCH ENGINES"]
;if("Ver"in a&&"3"===a.Ver.value&&"Count"in a){const c=parseInt(a.Count.value),d=[];for(let b=0;b<c;b++){
const c=a[b.toString()].value,e=(0,j.Ym)(c);e&&d.push(e)}b.SearchEngines=d}}if("DOMAINS EQUIV"in I){const a=I["DOMAINS EQUIV"]
;if("DomEqCount"in a){const d=parseInt(a.DomEqCount.value),e=[];try{for(let b=0;b<d;b++){const c=a[b.toString()].value
;void 0!==c&&e.push(c)}}catch(i){}b.DomainEquivalencesLines=e,c=!0}}const e=(0,j.ux)(),f=[];e.forEach((function(a,b){
if("SHORTCUTS"in I&&a in I.SHORTCUTS){const c="1"===I.SHORTCUTS[a].value;f.push({m_id:b,m_enabled:c})}else f.push({m_id:b,
m_enabled:!0})})),b.KeyboardShortcutsState=f,c&&(W=null);const g=await M.Get(null),h=[];for(const k in g)if(!(k in b)){
if(!Object.prototype.hasOwnProperty.call(g,k))continue;!(k in b)&&(0,j.NX)(k)&&h.push(k)}h.length>0&&await M.Remove(h),
await M.Set(b),await an()}function au(a,b){if("SEARCH ENGINES"===b||"DOMAINS EQUIV"===b||"WIN32 BLACK LIST"===b)return!0
;if("SHORTCUTS"===b)return!1;switch(a){case"SetupNeeded":case"EnterpriseInstallation":case"SyncIsOn":case"AccountCompanyAdmin":
case"AccountHaveLicense":case"AccountHaveLicenseInfo":case"AccountLicenseActive":case"AccountLicenseTrial":
case"AccountLicenseExpired":case"AccountLicenseExpirationTime":case"AccountLicenseExpiresInDays":case"AccountLicenseData":
case"AccountEnterprise":case"AccountEnterpriseLicenseActive":case"AccountCompanyTitle":case"AccountCreatedTime":
case"AccountPasswordIsStoredExternally":case"AffId":return!1;default:return(0,j.NX)(a)}}function av(a){const b=Q.get(a)
;if(!b)return;const c=b.m_mounted_at_path,d=!!c&&(0,u.TT)(D).Unmount(c,b.m_storage);if(Q.delete(a),d&&c){const a=[{event:7,
path:c,type:8}];(0,u.TT)(D).DataChanged(a)}}async function aw(a){const b=(0,u.TT)(E).GetFSForSync();b.SetRootDir("")
;return await b.GetFile(a,"utf16")}async function ax(){return await aw(g.n4)}async function ay(a,b,c){if(Z){try{await Z
}catch(d){}Z=null}Z=async function(a,b,c){const e=(0,u.TT)(V);try{if(W)try{return e.GetCachedMatchesForDomain(a,b)}catch(d){
if(!(0,w.r5)(d,w.r8))throw d}const f=await ak(c);let g=await(0,n.dy)(e,a,0,f,c);return e.SetCachedMatchesForDomain(a,0,g),
0!==b&&(g=g.filter((a=>a.type===b))),g}catch(d){throw d}finally{Z=null}}(a,b,c);return await Z}}},66927:function(a,b,c){c.d(b,{
o:function(){return v}})
;var d=c(4234),e=c(99196),f=c(94652),g=c(60026),h=c(50421),i=c(54811),j=c(61211),k=c(42058),l=c(12131),m=c(46764),n=c(88262),o=c(13113),p=c(40868),q=c(95399),r=c(4153),s=c(78440),t=c(69893),u=c(11050)
;c(13117);function v(a,b,c,v,x,y,z,A){const B=a,C=b,D=v,E=c,F=x,G=z,H=A;let I=!1,J=!1;return{
AnalyzeAndSync:async function(a,b,c,d,f,g,h,i,j,k,m,n){var o,p,r;const v=Object.assign({},d)
;if(!(v.loginToken||v.userId))throw(0,t.ZU)(t.V2,"Cannot sync: user ID is empty");const x=v.serverUrl;if(!x)throw(0,
t.ZU)(t.V2,"Cannot sync: server URL is empty");const y=v.password;if(!y)throw(0,t.ZU)(t.V2,"Cannot sync: password is empty")
;let z;await ai(0,await D.LocalizeString("RfSyncProgress_Connecting"),n),v.loginToken?(E.Connect(a,b,x,v.loginToken,y,c),
z=(null==c?void 0:c.useSessionCookies)?await E.LoginWithSession("sync",n):await E.LoginNoSession("sync",n)):z=await E.ConnectAndLoginWithCredentials(a,b,x,null!==(o=v.userId)&&void 0!==o?o:"",void 0,y,"sync",{},n)
;v.enterprise=z.enterprise,await ai(5,await D.LocalizeString("RfSyncProgress_RequestingAccountInfo"),n),
(z.email!==v.userId||z.login!==v.loginToken)&&(v.userId=z.email||"",v.loginToken=z.login||"",v.accountId=z.accountId||"",j(v))
;y!==f&&(await E.ChangeOneFilePasswords(f,f,y,null,n),v.accountId=z.accountId||"",v.loginToken=z.login||"",v.userId=z.email||"",
v.password=f,
j(v),v.loginToken?(E.Connect(a,b,x,v.loginToken,f,c),z=(null==c?void 0:c.useSessionCookies)?await E.LoginWithSession("sync",n):await E.LoginNoSession("sync",n)):z=await E.ConnectAndLoginWithCredentials(a,b,x,null!==(p=v.userId)&&void 0!==p?p:"",void 0,f,"sync",{},n),
z.email===v.userId&&z.login===v.loginToken||(v.userId=z.email||"",v.loginToken=z.login||"",v.accountId=z.accountId||"",
v.password=f,j(v)));let A=!1;z.loginMethodToSwitch||(A=z.forcePasswordChange||!1,
z.passwordExpired&&void 0===z.forcePasswordChange&&(A=!0));if(B.SetForceMasterPasswordChange(A),await B.UpdateAccountInfo(z),
A)return{pendingItems:{accounts:[],companyInvitations:[],emergencyAccess:[],files:[]},forceMasterPasswordChange:!0,syncParts:[]}
;if(await w(m,!1,null!==(r=z.accountId)&&void 0!==r?r:"",b,E,n),z.syncAllowed);else if(!z.clientReadOnly)throw(0,
l.rb)(15,"License is not active");await ai(10,await D.LocalizeString("RfSyncProgress_RequestingAccountInfo"),n)
;let C=await E.GetReceivedItems(null,n);const F=C.accounts.some((a=>a.isManager&&a.company))
;await B.settings.SetValue("AccountGroupManager",F);const G={accounts:C.accounts.filter((a=>!a.accepted)),
companyInvitations:[...C.companyInvitations],emergencyAccess:[...C.emergencyAccess],
files:C.receivedFiles.filter((a=>!a.accepted))};if(g&&ag(G))throw(0,l.rb)(14,"There are pending received item(s)");u.F.now()
;const H=await async function(a,b,c,d){const e=10,f={syncStatus:0,main:!0,localChanges:[],serverChanges:[]};try{I=!0;a:for(;;){
J=!1;const h=a?100:90;for(;;){try{await L(f,a,b,c,(0,s.w2)(d,0,h))}catch(g){if((0,t.r5)(g,t.m))continue a;throw g}
if(J)continue a;1===f.syncStatus?ah([f])&&B.SetHaveRemoteChanges(!0):f.syncStatus;break}if(!a){
await ai(100-e,await D.LocalizeString("RfSyncProgress_SyncingUsageInfo"),d);try{await ac(b,c,d)}catch(g){if((0,t.bf)(g))throw g}
if(J)continue a;if(!await Y(c,d))break;if(J)continue a}break}}finally{I=!1}return f}(h,v.accountId||"",f,(0,s.w2)(n,15,50))
;let K,N;if(z.securityStats)try{N=await(0,e.gP)(z.securityStats),K=void 0===N.sp}catch(R){K=!0}else K=!0;u.F.now()
;C=await M(C,n),await ai(55,await D.LocalizeString("RfSyncProgress_Syncing"),n);const P=await O(h,i,K,k,(0,s.w2)(n,55,95))
;const Q=[H,...P];if(!h&&2===H.syncStatus){
const a=await B.GetNeedUpdateUserDataStats(),b=Q.some((a=>a.localChanges.length>0)),c=Q.some((a=>a.serverChanges.length>0))
;if(!z.securityStats||b||c||K||a){u.F.now();a||await B.SetNeedUpdateUserDataStats(!0)
;const b=z.enterprise?(await k.GetUserSecurityStatistics(n)).statistics:await B.GetUserDataItemsCount(n);if((0,e.Rp)(N,b)){
const a=(0,e.U_)(N,b),c=await(0,e.n1)(Object.assign(Object.assign({},a),{version:1}));await E.UpdateSecurityStatistics(c,n)}
a&&await B.SetNeedUpdateUserDataStats(!1)}}await ai(100,await D.LocalizeString("RfSyncProgress_RequestingAccountInfo"),n),
h||Q.every((a=>2===a.syncStatus))&&(B.SetHaveLocalChanges(!1),B.SetHaveRemoteChanges(!1),B.SetLastSyncedTime((0,q.t2)()))
;return await ai(100,await D.LocalizeString("RfSyncProgress_Done"),n),{pendingItems:G,forceMasterPasswordChange:A,syncParts:Q}},
IsSyncRunning:function(){return I},SetPendingSyncRequest:function(){J=!0},SyncAfterAnalyze:async function(a,b,c,d,f){J=!1
;let h=!1;await ai(0,await D.LocalizeString("RfSyncProgress_Syncing"),f);let i=0;const j=Math.round(90/a.length)
;for(const[e,g]of a.entries())if(2!==g.syncStatus){if(1===g.syncStatus){try{0===e?await k(g,b,c,(0,
s.w2)(f,0,j)):(await ai(j*e,await D.LocalizeString("RfSyncProgress_SyncingSharedFolders"),f),await l(g,f))}catch(m){if((0,
t.r5)(m,t.m)){h=!0;break}throw m}if(J){h=!0;break}i++}}else i++;!h&&J&&(h=!0);if(h){if(!await O(!1,!1,!1,d,f))return!1}
await ai(90,await D.LocalizeString("RfSyncProgress_SyncingUsageInfo"),f);try{await ac(b,c,f)}catch(m){return!1}
if(!await Y(c,f))return!1;i>=a.length&&(B.SetHaveLocalChanges(!1),B.SetHaveRemoteChanges(!1),B.SetLastSyncedTime((0,q.t2)()))
;return!0;async function k(a,b,c,d){const e=B.GetPersonalDataFSForSync();for(;;){
await ai(0,await D.LocalizeString("RfSyncProgress_Syncing"),d),await Q(a,e,b,c,d),a.syncStatus=2,
await ai(75,await D.LocalizeString("RfSyncProgress_SyncingSharedFiles"),d);if(!await ae(d))break}
await ai(100,await D.LocalizeString("RfSyncProgress_Synced"),d)}async function l(a,b){var c;if(!a.accountId)return
;const f=B.GetSharedAccountInfoByAccountId(a.accountId),h=await B.DecryptRemotePassword(f.mp),i=!!f.company,j=f.isAdmin||f.isManager||!1,k=B.GetSharedAccountFSForSync(f.accountId),l=k.IsModified()
;await Q(a,k,f.accountId,h,b),a.syncStatus=2;const m=await(0,e.gP)(null!==(c=f.securityStats)&&void 0!==c?c:"");if(i&&l){
const a=(0,g.xH)(k).GetLogEvents();await aa(f.accountId,a,b)}if(i&&j){const a=await d.GetGroupSecurityStatistics(f.accountId,b)
;await ab(f.accountId,m,a.statistics,b)}}},SyncSharedAccountsList:M,ShareFile:async function(a,b,c,d){return ad(a,b,!1,c,d)},
SendFile:async function(a,b,c,d){return ad(a,b,!0,c,d)},GrantSharedFile:ad,RevokeSharedFile:async function(a,b,c){
const d=B.GetPersonalDataFSForSync(),e=d.GetSharingInfo(a);if(!e.m_shared_id)return;for(const g of b)await E.RevokeSharedFile({
id:e.m_shared_id,recipient:g,name:""},c);const f=await E.GetSharedFileUsersInfo(e.m_shared_id,c)
;f.granted&&0!==f.granted.length||d.RemoveSharingInfo(a)},GetSharedFileUsersInfo:async function(a,b){
const c=B.GetSharedFileInfo(a);if(!c.m_shared_id)throw(0,t.ZU)(t.V2,"Not a shared file: "+a)
;return E.GetSharedFileUsersInfo(c.m_shared_id,b)},SyncSharedFiles:ae};async function K(a,b,c){for(let g=0;g<5;g++)try{
return void await d()}catch(f){
if(!(0,n.dW)(f)||f.sibError!==t.FN||403!==f.httpResponse.status||"public-key-exists"!==f.httpResponse.headers["x-sib-reason"])throw f
;await e()}throw(0,t.ZU)(t.V2,"Cannot sync account keys: too many attempts, try again later");async function d(){let d,g;try{
d=await B.LoadPrivateKey()}catch(f){if(!(0,t.r5)(f,t.Y$))throw f}if(d)try{g=(0,m.fc)(d)}catch(f){}
const h=await B.GetRoboFormAccountInfo(null),i=h.publicKey&&await(0,p.Z$)((0,p.fI)(h.publicKey))||"";if(d&&g&&i&&(0,
m.cf)(i,g))return;const j=await async function(){try{return await E.DownloadPrivateKey(a,b,c)}catch(f){if(!(0,
t.r5)(f,t.Y$))throw f;return}}();if(j){let b;try{b=(0,m.fc)(j)}catch(f){throw(0,
t.ZU)(t.V2,"Cannot sync, try restoring from your data backup on server: bad private key in account on server - corrupted on unknown format: "+(0,
t.EB)(f))}
if(!b)throw(0,t.ZU)(t.V2,"Cannot sync: Try restoring from your data backup on server: bad private key on server - corrupted on unknown format")
;i&&(0,m.cf)(i,b)||(i&&await E.UploadPubKey(a,"",c),await E.UploadPubKey(a,b,c),await e()),d&&g&&(0,
m.GO)(j,d)||await B.StorePrivateKey(j)}else if(d&&g)await E.UploadPrivateKey(a,b,d,c),i&&(0,
m.cf)(i,g)||(i&&await E.UploadPubKey(a,"",c),await E.UploadPubKey(a,g,c),await e());else{
const d=await y.GenerateRSAKeyPair(2048);await E.UploadPrivateKey(a,b,d.privateKeyPEM,c),
await E.UploadPubKey(a,d.publicKeyPEM,c),await e(),await B.StorePrivateKey(d.privateKeyPEM)}}async function e(){
const b=await E.GetAccountInfo(a,c);await B.UpdateAccountInfo(b)}}async function L(a,b,c,d,e){
const f=B.GetPersonalDataFSForSync();a:for(let g=0;;g++){if(g>=3)throw(0,t.ZU)(t.V2,"Cannot sync, try later")
;if(await ai(0,await D.LocalizeString("RfSyncProgress_Syncing"),e),b)await P(a,f,c,d,e),a.syncStatus=1,
await ai(100,await D.LocalizeString("RfSyncProgress_Analyzed"),e);else{await Q(a,f,c,d,e),await K(c,d,e),a.syncStatus=2,
await ai(75,await D.LocalizeString("RfSyncProgress_SyncingSharedFiles"),e);if(await ae(e))continue a}break}
await ai(100,await D.LocalizeString("RfSyncProgress_Synced"),e)}async function M(a,b){a||(a=await E.GetReceivedItems(null,b))
;const c=[];for(const e of a.accounts)if(!e.accepted||e.disabled&&!e.isAdmin)c.push(e);else try{
c.push(await E.EnsureSharedFolderPasswordInitilized(e,b))}catch(d){if(!(0,t.r5)(d,t.FN))throw d;c.push(e)}
if(0!==a.pendingFolders.length){const d=await B.LoadPrivateKey()
;await E.UpdateSharedFoldersPasswordsForPendingRecipients(c,a.pendingFolders,d,b)}
return await B.UpdateReceivedAccountsList(c,b),await B.UpdateReceivedSharedAccountsMounting(N,b),
Object.assign(Object.assign({},a),{accounts:c})}async function N(a,b){const c=B.GetSharedAccountFSForSync(a)
;if(c.IsLoaded())return;const d=B.GetSharedAccountInfoByAccountId(a),e=await B.DecryptRemotePassword(d.mp),h=await C(!0),i=(0,
f.Bc)(H,F,G);i.Connect(h.clientInfo,h.deviceId,h.serverUrl,h.loginToken||h.accountId||"",h.password||"",{useSessionCookies:!1})
;const j=c.GetOneFileETag(),k=await i.CheckoutFile(g.vy,{accountId:a,eTag:j},b),l=k.eTag,m=R(k.body)
;await c.LoadFromBytes(m,e,b),Z(a,c,l,k.lastModified||"",m)}async function O(a,b,c,d,f){let g=[];try{I=!0;a:for(;;){
g=B.GetSharedAccountsInfo().map((a=>({syncStatus:0,main:!1,localChanges:[],serverChanges:[],accountId:a.accountId,
accountName:a.name,readOnly:a.readOnly,senderName:a.senderName,senderEmail:a.senderEmail,company:a.company}))),J=!1,
g=g.filter((a=>{if(!a.accountId)return!1;if(b){return B.GetSharedAccountFSForSync(a.accountId).IsModified()}return!0})),
g.sort(((a,b)=>{const c=B.GetSharedAccountFSForSync((0,r.TT)(a.accountId)),d=B.GetSharedAccountFSForSync((0,
r.TT)(b.accountId)),e=c.IsModified(),f=d.IsModified();return e&&!f?-1:!e&&f?1:0}));const i=Math.round(100/g.length)
;for(const[b,j]of g.entries())if(j.accountId){try{await ai(i*b,await D.LocalizeString("RfSyncProgress_SyncingSharedFolders"),f)
;const g=B.GetSharedAccountInfoByAccountId(j.accountId),k=await B.DecryptRemotePassword(g.mp),l=B.GetSharedAccountFSForSync(g.accountId)
;if(g.disabled&&!l.IsLoaded())continue;const m=l.IsModified(),n=!!g.company,o=g.isAdmin||g.isManager||!1
;if(a)await P(j,l,g.accountId,k,f),j.syncStatus=1;else{const a=B.GetNeedUpdateGroupDataStats(j.accountId);let b
;if(g.securityStats)try{b=await(0,e.gP)(g.securityStats)}catch(h){}const i=!b||void 0===b.sp,p=n&&(m||c||i)&&o
;if(p&&await B.SetNeedUpdateGroupDataStats(g.accountId,!0),await Q(j,l,g.accountId,k,f),j.syncStatus=2,p||a){
const a=l.GetLogEvents();if(await aa(g.accountId,a,f),o){const a=await d.GetGroupSecurityStatistics(g.accountId,f)
;await ab(g.accountId,b,a.statistics,f)}await B.SetNeedUpdateGroupDataStats(g.accountId,!1)}}}catch(h){if((0,
t.r5)(h,t.m))continue a;j.syncStatus=3,j.syncError=h;continue}if(J)continue a
;1===j.syncStatus&&ah(g)&&B.SetHaveRemoteChanges(!0)}break}}finally{I=!1}return g}async function P(a,b,c,d,e){a.localChanges=[],
a.serverChanges=[];if(await S(b,c,e))return;const f=b.GetOneFileETag(),h=await E.CheckoutFile(g.vy,{accountId:c,eTag:f
},e),i=h.eTag,j=B.GetUnchangedAccountDataForSync(c);if(f&&b.IsLoaded()&&j)if(f===i){const c=await T(j,d,e),f=await U(c,b,e)
;a.localChanges=f}else if(b.IsModified()){const c=(0,g.EH)(F,G);await c.LoadFromBytes(R(h.body),d,e);const f=(0,g.EH)(F,G)
;await f.LoadFromBytes(j,d,e);const i=await V(f,b,c,e);a.localChanges=i.localChanges,a.serverChanges=i.serverChanges}else{
const c=await T(R(h.body),d,e),f=await U(b,c,e);a.serverChanges=f}else;}async function Q(a,b,c,d,e){a.localChanges=[],
a.serverChanges=[];if(await S(b,c,e))return;const f=b.GetOneFileETag(),h=await E.CheckoutFile(g.vy,{accountId:c,eTag:f
},e),i=h.eTag,j=B.GetUnchangedAccountDataForSync(c);if(f&&b.IsLoaded()&&j)if(f===i){const f=await T(j,d,e),h=await U(f,b,e)
;a.localChanges=h;const k=await X(b,g.vy,i,c,d,e);Z(c,b,k.eTag,k.lastModified||"",k.body)}else if(b.IsModified()){
const f=R(h.body),k=(0,g.EH)(F,G);await k.LoadFromBytes(f,d,e);const l=(0,g.EH)(F,G);await l.LoadFromBytes(j,d,e)
;const m=await V(l,b,k,e);a.localChanges=m.localChanges,a.serverChanges=m.serverChanges
;const n=m.outputFS,o=await n.SaveToBytes(d,null,null,e),p=(0,r.j3)(o);await b.LoadFromBytes(p,d,e),b.SetOneFileETag(i)
;const q=await X(b,g.vy,i,c,d,e);Z(c,b,q.eTag,q.lastModified||"",p)}else{const f=R(h.body),g=await T(f,d,e),j=await U(b,g,e)
;a.serverChanges=j,await b.LoadFromBytes(f,d,e),Z(c,b,i,h.lastModified||"",f)}else{const a=R(h.body)
;await b.LoadFromBytes(a,d,e),Z(c,b,i,h.lastModified||"",a)}}function R(a){if(!a)throw(0,
t.ZU)(t.V2,"Unexpected error during sync");return a}async function S(a,b,c){const d=a.GetOneFileETag();if(!d)return!1
;if(a.IsModified())return!1;return d===(await E.CheckoutFile(g.vy,{accountId:b,eTag:d,method:"HEAD"},c)).eTag}
async function T(a,b,c){const d=(0,g.EH)(F,G);await d.LoadFromBytes(a,b,c);const e=(0,g.xH)(d);return e.SetRootDir(g.ZD),e}
async function U(a,b,c){const d=new Map,e=new Map,f=(0,h.IW)(a);f.Connect(),await W(f,0,d,e,c);const g=(0,h.IW)(b);g.Connect(),
await W(g,1,d,e,c);const i=[]
;for(const[h,j]of e)j.m_last_synced_local?j.m_local?j.m_last_synced_local.mod!==j.m_local.mod&&i.push(j.m_local):i.push(j.m_last_synced_local):j.m_local&&i.push(j.m_local)
;for(const[h,j]of d)j.m_last_synced_local?j.m_local?j.m_last_synced_local.mod!==j.m_local.mod&&i.push(j.m_local):i.push(j.m_last_synced_local):j.m_local&&i.push(j.m_local)
;return i}async function V(a,b,c,d){const e=new Map,f=new Map;let i,j;{const k=(0,g.xH)(a);k.SetRootDir(g.ZD);const l=(0,
h.IW)(k);l.Connect(),await W(l,0,e,f,d),j=(0,h.IW)(b),j.Connect(),await W(j,1,e,f,d);const m=(0,g.xH)(c);m.SetRootDir(g.ZD),
i=(0,h.IW)(m),i.Connect(),await W(i,2,e,f,d)}const k=[],l=[],m=[],n=[]
;for(const[g,h]of f)h.m_last_synced_local?h.m_local?h.m_server||(h.m_last_synced_local.mod===h.m_local.mod?k.push(h.m_last_synced_local):(k.push(h.m_last_synced_local),
l.push(h.m_local),m.push(g))):h.m_server?h.m_last_synced_local.mod===h.m_server.mod?(l.push(h.m_last_synced_local),
n.push(g)):(k.push(h.m_server),l.push(h.m_last_synced_local)):(l.push(h.m_last_synced_local),
k.push(h.m_last_synced_local)):h.m_local?h.m_server?(l.push(h.m_local),k.push(h.m_server)):(l.push(h.m_local),
m.push(g)):h.m_server&&k.push(h.m_server);const p=[],q=[],r=[]
;for(const[g,h]of e)h.m_last_synced_local?h.m_local?h.m_server?h.m_local.mod===h.m_server.mod||(h.m_last_synced_local.mod===h.m_local.mod?k.push(h.m_server):h.m_last_synced_local.mod===h.m_server.mod?(l.push(h.m_local),
q.push(g)):(k.push(h.m_server),l.push(h.m_local),r.push(g))):h.m_last_synced_local.mod===h.m_local.mod?(k.push({
path:h.m_last_synced_local.path,type:h.m_last_synced_local.type}),k.push(h.m_last_synced_local)):(l.push(h.m_local),
k.push(h.m_last_synced_local),q.push(g)):h.m_server?h.m_last_synced_local.mod===h.m_server.mod?(l.push(h.m_last_synced_local),
p.push(g)):(l.push(h.m_last_synced_local),k.push(h.m_server)):(l.push(h.m_last_synced_local),
k.push(h.m_last_synced_local)):h.m_local?h.m_server?(k.push(h.m_server),l.push(h.m_local),r.push(g)):(l.push(h.m_local),
q.push(g)):h.m_server&&k.push(h.m_server);for(const g of p)await i.DeleteFile(g,d);for(const g of n)await i.DeleteFolder(g,d)
;for(const g of m){const a=await s(i,g,!0,d);a&&await i.CreateFolder(a,d)}for(const g of q){const a=await j.GetFile(g,"utf16",d)
;await i.PutFile(g,a,d)}for(const g of r){const a=await s(i,g,!1,d);if(a){const b=await j.GetFile(g,"utf16",d)
;await i.PutFile(a,b,d)}}return{outputFS:i.GetFSForSync(),serverChanges:k,localChanges:l};async function s(a,b,c,d){try{
await a.GetInfo(b,1,d)}catch(g){if((0,t.r5)(g,t.Y$))return b;throw g}const e=c?"":(0,o.Ng)(b),f=b.substring(0,b.length-e.length)
;for(let h=1;h<=100;h++){const b=`${f}[${h}]${e}`;try{await a.GetInfo(b,1,d)}catch(g){if((0,t.r5)(g,t.Y$))return b;throw g}}
return null}}async function W(a,b,c,e,f){await(0,i.s_)(a,(async a=>{if(8!==a.type&&!(0,d.Rf)(a.type))return
;const f=a.path,g=8===a.type?e:c;let h=g.get(f);h?0===b?h.m_last_synced_local=a:1===b?h.m_local=a:2===b&&(h.m_server=a):h={
m_last_synced_local:0===b?a:null,m_local:1===b?a:null,m_server:2===b?a:null},g.set(f,h)}),{path:"",parts:1,deep:!0},f)}
async function X(a,b,c,d,e,f){const g=await a.SaveToBytes(e,null,null,f);let h;try{h=await E.CommitFile(b,g,{accountId:d,eTag:c
},f)}catch(i){throw(0,t.r5)(i,t.FN)&&(0,n.dW)(i)&&412===i.httpResponse.status?(0,
t.ZU)(t.m,"Data have changed on server since checkout"):i}return a.SetModified(!1),Object.assign(Object.assign({},h),{body:(0,
r.j3)(g)})}async function Y(a,b){const c=E.GetSecuritySettingsFromAuthSettings();if(!c)return!0
;const d=await B.GetUserSelectedEncryptionIterations();if(void 0===d)return!0;if(c.m_pbkdf_sha_iterations===d)return!0
;const e=Object.assign(Object.assign({},c),{m_pbkdf_sha_iterations:d});if(!await E.UpdateAccountSecuritySettings(a,e,b))return!1
;const f=E.ConvertToAccSecuritySettings(e);return await B.UpdateDataEncryptionSettings(f.encryption,b),!0}function Z(a,b,c,d,e){
b.SetOneFileETag(c),b.SetLastModified(d),B.SetUnchangedAccountDataForSync(a,e)}async function aa(a,b,c){if(0===b.length)return
;const d=[];for(const e of b)if(5===e.event||7===e.event||8===e.event||6===e.event)switch(e.event){case 6:d.push({
operationType:"Access",path:e.path||"",operation:"Edit"});break;case 8:{const a={operationType:"Access",path:e.path||"",
operation:"Move"};e.to&&(a.pathTo=e.to.path),d.push(a);break}case 5:8===e.type?d.push({operationType:"Access",path:e.path||"",
operation:"CreateFolder"}):d.push({operationType:"Access",path:e.path||"",operation:"Create"});break;case 7:d.push({
operationType:"Access",path:e.path||"",operation:"Delete"})}0!==d.length&&await E.SendGroupActionsLog(a,d,c)}
async function ab(a,b,c,d){let f=b;if(!f){const b=await E.GetSharedAccountInfo(a,d);if(b.securityStats)try{f=await(0,
e.gP)(b.securityStats)}catch(g){}}if((0,e.Rp)(f,c)){const f=(0,e.U_)(b,c),g=await(0,e.n1)(Object.assign(Object.assign({},f),{
version:1}));B.UpdateSecurityStatsByAccountId(a,g),await E.UpdateGroupSecurityStatistics(a,g,d)}}async function ac(a,b,c){
const d=B.GetAppDataFileSys(),e=await async function(a,b,c,d){var e;const f=a.GetOneFileETag(),h=f&&a.IsLoaded();let i;try{
i=await E.CheckoutFile(g.v9,{accountId:b,eTag:f},d)}catch(o){if(!(0,t.r5)(o,t.Y$))throw o;B.AddSettingsStorageListener()}
const k=!!(null==i?void 0:i.eTag);let l=null!==(e=null==i?void 0:i.eTag)&&void 0!==e?e:"",m=(null==i?void 0:i.lastModified)||""
;if(h){if(k&&i){if(l===f)return a.IsModified()?{needToCommit:!0,lastModified:m,eTag:l}:{needToCommit:!1,lastModified:m,eTag:l}
;if(a.IsModified()){const a=(0,g.EH)(F,G);try{await a.LoadFromBytes(R(i.body),c,d)}catch(o){return{needToCommit:!0,eTag:l,
lastModified:m}}const b=await async function(a,b){null==b||b.ThrowIfShouldStop();const c={mru:{},mruExt:{},mruExt2:{}};let d=!1
;try{const b=await a.GetFile(j.dc,"utf16");c.mru=JSON.parse(b)||{},d=!0}catch(o){c.mru={}}let e=!1;try{
const b=await a.GetFile(j.LN,"utf16");c.mruExt=JSON.parse(b)||{},e=!0}catch(o){c.mruExt={}}let f=!1;try{
const b=await a.GetFile(j.l$,"utf16");c.mruExt2=JSON.parse(b)||{},f=!0}catch(o){c.mruExt2={}}let g=!1;if(d||e||f){const a=(0,
j.uI)();a.Load(c),await B.MergeUsageInfo(a)&&(g=!0)}await B.CleanupUsageInfo(b)&&(g=!0);return g
}(a,d),e=await async function(a,b){null==b||b.ThrowIfShouldStop();let c=!1,d="",e=!1;try{d=await a.GetFile(g.Qy,"utf16"),e=!0
}catch(o){}e&&(c=await B.MergeSyncableOptions(d));return c}(a,d),f=await async function(a,b){const c=B.GetAppDataFileSys()
;let d=!1;await async function(a,b,c,d){var e,f,g,h;const i=new Set;i.add("time");const j=v(b,c,i);let k=await x(b,c)
;null===k&&(k=await y(b,c,j,d));const l=v(a,c,i);let m,n=await x(a,c);null===n&&(n=await y(a,c,l,d));if(n===k){if(!n)return!1
;m=n}else if(n&&k)m=n>k?n:k;else if(n)m=n;else{if(!k)return!1;m=k}a.CreateFolder(c);let p=!1
;const s=new Set([...l.keys(),...j.keys()]);const u=(0,q.t2)()-15552e3;for(const o of s){const i=c+"/"+o
;d&&await d.YieldToUI(50);const k=l.get(o),n=j.get(o);if(27!==o.length){k&&a.DeleteFile(i),n&&(p=!0);continue}
let q=null,r=null,s=null;if(k&&(r=await w(a,i),r)){const a=z(r);a&&(q=null!==(e=a.d)&&void 0!==e?e:null,
s=null!==(f=a.c)&&void 0!==f?f:null)}let t=null,v=null,x=null;if(n&&(v=await w(b,i),v)){const a=z(v)
;a&&(t=null!==(g=a.d)&&void 0!==g?g:null,x=null!==(h=a.c)&&void 0!==h?h:null)}const y=k&&q&&s&&s<u,A=n&&t&&x&&x<u
;!y||n?!A||k?y&&A?(a.DeleteFile(i),p=!0):q===m?q===t?0:(p=!0,n?0:0):t===m?q===t?0:v&&(await a.PutFile(i,v),
k?0:0):(k&&a.DeleteFile(i),n&&(p=!0)):p=!0:a.DeleteFile(i)}return p;function v(a,b,c){const d=new Map;try{const e=a.List(b)
;for(const a of e)a.m_folder||c.has(a.m_name)||d.set(a.m_name,a)}catch(o){if(!(0,t.r5)(o,t.Y$))throw o}return d}
async function w(a,b){try{return await a.GetFile(b,"utf16")}catch(o){if((0,t.r5)(o,t.Y$))return null;throw o}}
async function x(a,b){const c=await w(a,b+"/time");return null===c?null:(0,r.fB)(c)}async function y(a,b,c,d){let e=null
;for(const f of c.values()){d&&await d.YieldToUI(30);const c=await w(a,b+"/"+f.m_name);if(!c)continue;const g=z(c)
;g&&g.d&&((null===e||g.d>e)&&(e=g.d))}return e}function z(a){try{return JSON.parse(a)}catch(o){return null}}
}(c,a,"/bm/hibp",b)&&(d=!0);return d}(a,d);return{needToCommit:b||e||f,eTag:l,lastModified:m}}return n(i)}return{
needToCommit:!0,lastModified:m,eTag:l}}return k?n(i):{needToCommit:!1,lastModified:m,eTag:l};async function n(e){var f,i
;if(!e)throw(0,t.ZU)(t.V2,"Unexpected internal error");let j;if(e.body&&0!==e.body.length)j=Object.assign(Object.assign({},e),{
body:e.body});else try{j=await E.CheckoutFile(g.v9,{accountId:b},d),l=null!==(f=null==e?void 0:e.eTag)&&void 0!==f?f:"",
m=(null==e?void 0:e.lastModified)||""}catch(o){if(!(0,t.r5)(o,t.Y$))throw o;return{needToCommit:!1,lastModified:"",eTag:""}}try{
await a.LoadFromBytes(j.body,c,d)}catch(o){if(h);else{const b=null!==(i=await B.GetDataEncryptionSettings(d))&&void 0!==i?i:(0,
g.nG)(),e=(0,g.EH)(F,G),f=await e.SaveToBytes(c,null,b,d);await a.LoadFromBytes((0,r.j3)(f),c,d),B.InvalidateUsageInfo()}return{
needToCommit:!0,eTag:l,lastModified:m}}return B.InvalidateUsageInfo(),await B.LoadOptionsFromPreferencesJson(),{needToCommit:!1,
eTag:l,lastModified:m}}}(d,a,b,c),f=d.IsModified(),h=e.needToCommit;if(!f&&!h)return d.SetOneFileETag(e.eTag),
void d.SetLastModified(e.lastModified);const i=e.eTag,k=await X(d,g.v9,i,a,b,c);d.SetOneFileETag(k.eTag),
d.SetLastModified(k.lastModified||"")}async function ad(a,b,c,d,e){const f=B.GetPersonalDataFSForSync(),g=f.GetSharingInfo(a)
;if(g.m_shared_id&&!g.m_granted)throw(0,
t.ZU)(t.V2,"Cannot share or send file, that is shared to you by another user. Copy this file to your personal storage, then you can share or send it.")
;let h,i=g.m_shared_id;if(i||(i=await(0,p.n1)(G.GenerateRandomBytes(16))),c&&g.m_shared_id&&g.m_granted){
const a=await E.GetSharedFileUsersInfo(g.m_shared_id,e);if(a.granted)for(const c of a.granted)if((0,
r.RA)(c.recipient,b)&&c.hash)throw(0,t.ZU)(t.V2,"Cannot send file already granted to the same recipient")}try{
h=await E.DownloadPubKey(void 0,b,e)}catch(s){if(!(0,t.r5)(s,t.Y$))throw s;if(!d)throw s;h=""}const j=await f.GetFile(a,"bytes")
;let l;h&&(l=await(0,p.n1)(await(0,k.Ls)(j,h,F,G,e)));let m=(0,o._p)(a);if(m.length>90){const a=(0,o.HE)(m),b=(0,o.Ng)(m)
;m=a.substr(0,90-b.length)+b}const n={id:i,name:m,recipient:b};l&&(n.body=l),c||(n.hash=await f.GetFileMD5CheckSum(a))
;const q=await E.GrantSharedFile(n,d,e);return f.SetSharingInfo(a,{m_shared_id:i,m_granted:!0}),q}async function ae(a){var b
;const c=B.GetSharedFilesList(),d=await E.GetSharedFiles(a),e=await B.LoadPrivateKey(),f=B.GetPersonalDataFSForSync(),g=await async function(a,b){
const c=a.List("").map((a=>Object.assign(Object.assign({},a),{m_path:"/"+a.m_name}))),d={},e={},f=new Set;return await(0,s.i$)({
items:c,func(a){if(a.m_shared_id&&a.m_path){const b=a.m_shared_id.substring(1);b in d?f.add(a.m_path):(d[b]=a.m_path,
e[a.m_path]=b)}},async getChildren(c){var d;null==b||b.ThrowIfShouldStop();const e=null!==(d=c.m_path)&&void 0!==d?d:""
;return a.List(e).map((a=>Object.assign(Object.assign({},a),{m_path:e+"/"+a.m_name})))},canHaveChildren(a){var b
;return null!==(b=a.m_folder)&&void 0!==b&&b}}),{m_shared_file_ids:d,m_shared_file_paths:e,m_delete_shared_file_status:f}}(f,a)
;g.m_delete_shared_file_status.forEach((a=>f.RemoveSharingInfo(a)))
;const h=!await B.GetStoreDataLocalOnly(),i=new Map,j=new Set,l=new Map,m=d.received||[];for(const k of m){if(!k.id)continue
;const a=af(k.grantor,k.id);i.set(a,k),j.add(k.id)}const n=c.received||[];for(const k of n){if(!k.id)continue
;const a=k.accepted&&!k.pending,b=af(k.grantor,k.id);i.has(b)&&a?l.set(b,!0):i.has(b)&&l.set(b,!1)}
const q=new Set,u=d.granted||[];for(const k of u)q.add(k.id);let v=!1;for(const k in g.m_shared_file_paths){
const a=g.m_shared_file_paths[k];if(q.has(a));else if(j.has(a));else{const a=f.GetSharingInfo(k);f.RemoveSharingInfo(k),v=!0,
a.m_granted||f.DeleteFile(k)}}const w=[],x=[],y=new Map;for(const[k,o]of i)if(o.accepted&&o.id)if(o.id in g.m_shared_file_ids){
if(!o.hash)continue;const a=g.m_shared_file_ids[o.id],b=await f.GetFileMD5CheckSum(a);(0,r.RA)(b,o.hash)||(x.push(o),y.set(k,o))
}else l.has(k)&&l.get(k)?await E.RejectSharedFile(o,a):(x.push(o),y.set(k,o));if(0!==x.length){
const b=await E.GetReceivedFileBodies(x,a);for(const c of b){if(!c.body)continue;const b=(0,p.fI)(c.body);let d=null;try{
d=await(0,k.t5)(b,e,!0,F,G,a)}catch(C){continue}if(!d)continue;if(!c.id)continue;const h=af(c.grantor,c.id),i=y.get(h)
;if(!i)continue;const j=i.id&&g.m_shared_file_ids[i.id];if(j)await f.PutFile(j,d),c.hash||(f.RemoveSharingInfo(j),
w.push(i));else{const b=i.grantorName||i.grantorEmail||"";if(!b)continue;if(!i.name)continue;if(!i.id)continue;const e=(0,
o._p)(i.name),g=(0,o.HE)(e),h=(0,o.Ng)(e);let j;j=i.hash?b+"'s "+g:g+" (from "+b+")";let k="/"+j+h;for(let a=1;;a++)try{
f.GetInfo(k),k="/"+j+" - "+a.toString()+h}catch(C){if(!(0,t.r5)(C,t.Y$))throw C;break}await f.PutFile(k,d),
c.hash?f.SetSharingInfo(k,{m_shared_id:i.id,m_granted:!1}):w.push(i),await B.SetUsageInfo(k,0,!0,a)}v=!0}}
const z=new Map,A=new Map;for(const o of u){const c=g.m_shared_file_ids[o.id];if(c){let d,e=!1
;if(o.pending)e=!0;else if(!o.hash)continue;if(d=o.hash?await f.GetFileMD5CheckSum(c):"",e);else if((0,
r.RA)(d,null!==(b=o.hash)&&void 0!==b?b:""))continue;A.has(o.id)||A.set(o.id,await f.GetFile(c,"bytes"))
;let g=z.get(o.recipient);if(!g)try{g=await E.DownloadPubKey(o.recipient,void 0,a),z.set(o.recipient,g)}catch(C){if(!(0,
t.r5)(C,t.Y$))throw C;continue}const h=(0,r.HP)(o);if(g){const b=(0,r.TT)(A.get(o.id));h.hash=d;let c=null;try{c=await(0,
k.Ls)(b,g,F,G,a)}catch(C){continue}if(!c)continue;h.body=await(0,p.n1)(c),await E.GrantSharedFile(h,!1,a)}else h.hash=d,
void 0!==h.body&&delete h.body}else h&&await E.RevokeSharedFile(o,a)}if(B.SetSharedFilesList(d),
0!==w.length)for(const k of w)await E.RejectSharedFile(k,a);return v}function af(a,b){return a+"\n"+b}function ag(a){
return 0!==a.accounts.length||0!==a.files.length||0!==a.companyInvitations.length||0!==a.emergencyAccess.length}function ah(a){
return a.some((a=>0!==a.serverChanges.length))}async function ai(a,b,c){c&&await c.Progress({percents:a,message:b})}}
async function w(a,b,c,d,e,f){if(!a)return!1;let g;try{g=await a.GetFCMDeviceRegistrationToken(f)}catch(i){return!1}
const h=a.GetLastNotificationReceivedTimeUTCSec();if(!b){const b=a.GetLastSyncedState()
;if(c===(null==b?void 0:b.m_account_id)&&g===(null==b?void 0:b.m_token)&&h===(null==b?void 0:b.m_last_notification_received_time_utc_sec))return!0
}try{return await e.UpdateFCMDeviceInfo(d,g,h,f),a.SetLastSyncedState({m_account_id:c,m_token:g,
m_last_notification_received_time_utc_sec:h}),!0}catch(i){if(!(0,t.r5)(i,t.Y$))throw i;return!1}}},12442:function(a,b,c){c.d(b,{
WZ:function(){return j},wp:function(){return i},xB:function(){return k}})
;var d=c(94652),e=c(12131),f=c(88262),g=c(69893),h=c(95399);c(13117);function i(a,b,c,f){const i=a,k=b,l=c;let m=null,n=null,o=0
;return{GetAccountInfo:async function(a,b){return t((await s()).GetAccountInfo(a,b))},UpdateAccountInfo:async function(a,b){
return t((await s()).UpdateAccountInfo(a,b))},GetReceivedItems:async function(a,b){return t((await s()).GetReceivedItems(a,b))},
CreateAccount:u,DeleteAccount:async function(a,b){return t((await s()).DeleteAccount(a,b))},
GetSupportUrlFromServer:async function(a){return t((await s()).GetWebPageURL("support",null,a))},
GetLicensingWebPageUrlFromServer:async function(a,b){return t((await s()).GetWebPageURL(a,null,b))},GetLicenseInfo:p,
UpdateLicenseAutoRenew:async function(a,b){return t((await s()).UpdateLicenseAutoRenew(a,b))},
UpdateLicenseBillingInfo:async function(a,b){return t((await s()).UpdateLicenseBillingInfo(a,b))},
AddUserToFamilyPlan:async function(a,b){return t((await s()).AddUserToFamilyPlan(a,b))},
SendVerificationCode:async function(a,b,c,d){return t((await s()).SendVerificationCode(b,c,d))},
CheckVerificationCode:async function(a,b,c,d,e){return t((await s()).CheckVerificationCode(b,c,d,e))},ChangeAccountPassword:u,
ResetAccountPassword:u,GetUserDevices:async function(a,b){return t((await s()).GetUserDevices(a,b))},
AddUserDevice:async function(a,b){return t((await s()).AddUserDevice(a,b))},UpdateUserDevices:async function(a,b){
return t((await s()).UpdateUserDevices(a,b))},DeleteUserDevices:async function(a,b){return t((await s()).DeleteUserDevices(a,b))
},GetUserActivity:async function(a,b){return t((await s()).GetUserActivity(a,b))},IsGetUserActivitySupported:async function(a){
return t((await s()).IsGetUserActivitySupported(a))},GetLocationByIP:async function(a,b){
return t((await r()).GetLocationByIP(a,b))},DownloadPublicKey:async function(a,b){
return t((await s()).DownloadPubKey(a,void 0,b))},ActivateRFBusinessLicense:async function(a,b){
return t((await s()).ActivateRFBusinessLicense(a,b))},IsReferralsDataAvailable:async function(a){try{
const a=await f.GetConnectionInfo(!0,!0);a.accountId!==m&&(n=null,m=a.accountId)}catch(c){if((0,e.tM)(c,10)||(0,
g.r5)(c,g.rS))return n=null,!1;throw c}const b=(0,h.t2)();o-b>=3600&&(n=null);if(null!==n)return n;try{const c=await p(a)
;return c.family&&!c.family.owner||c.company?(o=b,n=!1,!1):(o=b,n=!0,!0)}catch(c){return(0,g.au)(c),(0,g.r5)(c,g.rS)||(0,
e.tM)(c,10)?n=null:(o=b,n=!1),!1}},GetReferralsData:async function(a){return t((await s()).GetReferralsData(a))},
GetTemplates:async function(a){return(await r()).GetTemplates(a)},RequestOtp:async function(a,b){
return(await s()).RequestOtp(a,b)},SendOtp:async function(a,b,c,d){return(await s()).SendOtp(a,b,c,d)},
GenerateTOTPKey:async function(a){return(await s()).GenerateTOTPKey(a)},UpdateOTPSettings:async function(a,b){
return t((await s()).UpdateOTPSettings(a,b))},EnrollDevice:async function(a,b,c){return t((await s()).EnrollDevice(a,b,c))},
UnenrollAllDevices:async function(a,b,c){return t((await s()).UnenrollAllDevices(a,b,c))},
UnenrollOtherDevices:async function(a,b,c){return t((await s()).UnenrollOtherDevices(a,b,c))},GetAllServers:async function(a,b){
return(await r()).GetAllServers(a,b)},GetBusinessServers:async function(a,b){return(await r()).GetBusinessServers(a,b)},
GetConsumerServers:async function(a,b){return(await r()).GetConsumerServers(a,b)},GetAffiliateServers:async function(a,b){
return(await r()).GetAffiliateServers(a,b)},GetIdProviders:async function(a,b){return(await r()).GetIdProviders(a,b)},
GetLoginMethod:async function(a,b){return(await r()).GetLoginMethod(a,b)},GetLoginMethod2:async function(a,b){
return(await r()).GetLoginMethod2(a,b)},GetLoginMethodToSwitch:async function(a){return(await s()).GetLoginMethodToSwitch(a)},
SkipLoginMethodSwitching:async function(a,b){return(await s()).SkipLoginMethodSwitching(a,b)},
GetProductsForPurchase:async function(a,b,c,d,e,f,g,h){return(await q()).GetProductsForPurchase(a,b,c,d,e,f,g,h)},
GetProductsForPurchase2:async function(a,b){return(await q()).GetProductsForPurchase2(a,b)},
StartPaymentSession:async function(a,b){const c=await q(),d=(await c.StartPaymentSession(a,b)).paymentSessionId;if(!d)throw(0,
g.ZU)(g.V2,"Cannot start payment session: unexpected server response");return d},StartPaymentSession2:async function(a,b){
const c=await q();return await c.StartPaymentSession2(a,b)},CreatePayment:async function(a,b){
return(await q()).CreatePayment(a,b)},GetPaymentStatus:async function(a,b,c){return(await q()).GetPaymentStatus(a,b,c)},
CanUseEmailBreachesMonitoringAPI:async function(a){return(await s()).CanUseEmailBreachesMonitoringAPI(a)},
GetBreachMonitoringEmails:async function(a){return(await s()).GetBreachMonitoringEmails(a)},
AddEmailToBreachMonitoring:async function(a,b){return(await s()).AddEmailToBreachMonitoring(a,b)},
VerifyBreachMonitoringEmail:async function(a,b,c){return(await s()).VerifyBreachMonitoringEmail(a,b,c)},
RemoveBreachMonitoringEmail:async function(a,b){return(await s()).RemoveBreachMonitoringEmail(a,b)},
ResendBreachMonitoringEmailOTP:async function(a,b){return(await s()).ResendBreachMonitoringEmailOTP(a,b)},
SetBreachMonitoringNotificationLevel:async function(a,b){return(await s()).SetBreachMonitoringNotificationLevel(a,b)},
GetBreachMonitoringNotificationLevel:async function(a){return(await s()).GetBreachMonitoringNotificationLevel(a)},
GetBreachMonitoringEmailAccessToken:async function(a,b){return(await s()).GetBreachMonitoringEmailAccessToken(a,b)},
GetBreachMonitoringEmailAccessToken2:async function(a,b){return(await s()).GetBreachMonitoringEmailAccessToken2(a,b)}}
;async function p(a){return t((await s()).GetLicenseInfo(a))}async function q(){try{return s()}catch(a){if((0,
e.tM)(a,10))return r();throw a}}async function r(){const a=(0,d.Bc)(i,k,l),b=await f.GetConnectionInfo(!1,!0)
;return a.Connect(b.clientInfo,b.deviceId,b.serverUrl,"","",{useSessionCookies:b.useSessionCookies,
deviceDescription:b.deviceDescr}),a}async function s(){const a=(0,d.Bc)(i,k,l),b=await f.GetConnectionInfo(!0,!0)
;return a.Connect(b.clientInfo,b.deviceId,b.serverUrl,b.loginToken,b.password,{useSessionCookies:b.useSessionCookies,
deviceDescription:b.deviceDescr}),a}async function t(a){try{return await a}catch(b){throw j(b)&&(n=null,
await f.LogoffOnError()),b}}async function u(...a){throw e.lU}}function j(a){return!(!(0,
g.r5)(a)||!(a.sibError===g.rS||a.sibError===g.JI||a.sibError===g.FN&&k(a)))||!!(0,e.u7)(a)}function k(a){if((0,
f.dW)(a))switch(a.httpResponse.headers["x-sib-reason"]){case"disable-devices-policy":case"disable-mobile-devices-policy":
case"disable-extra-devices-policy":case"need-idp-auth":case"ip-not-allowed":case"account-deleted":case"disabled-account":
case"suspended-account":return!0}return!1}},90237:function(a,b,c){c.r(b),c.d(b,{WebPageApplication:function(){return J}})
;var d=c(19365),e=c(37156),f=c(47333),g=c(11719),h=c(12131),i=c(81871),j=c(20855),k=c(52090),l=c(78949),m=c(54811),n=c(62376),o=c(94652),p=c(88579),q=c(4234),r=c(42058),s=c(62851),t=c(13835),u=c(31173),v=c(60830),w=c(97973),x=c(73863),y=c(13113),z=c(45637),A=c(78440),B=c(40371),C=c(88262),D=c(46764),E=c(4153),F=c(34943),G=c(69893),H=c(40868),I=c(13117)
;function J(a,b,c,J,K,L,M,N,O){const P=a,Q=function(){const a=(0,u.m)(),b={GetBrowserType:c,GetBrowserAppName:d,
GetBrowserVersion:e,GetPlatformOS:f,GetOSName:g,GetOSVersion:i,GetBrowserInformation:j};return b;async function c(){return a}
async function d(){switch(await c()){case"firefox":return"Firefox";case"edge":return"Edge";case"chrome":
if(null===navigator||void 0===navigator?void 0:navigator.userAgent){const a=k(navigator.userAgent);if(a.m_name)return a.m_name}
return"Chrome";case"safari":return"Safari";case"opera":return"Opera";case"msie":return"Internet Explorer";default:
return"Unknown"}}async function e(){switch(await c()){case"firefox":if(navigator&&navigator.userAgent){
const a=navigator.userAgent;if(a.includes(" Firefox/")){const b=/Firefox([0-9.]+)/.exec(a);if(b)return b[1]}}break;case"edge":
if(navigator&&navigator.userAgent){const a=navigator.userAgent;if(a.includes(" Edg/")){const b=/Edg\/([0-9.]+)/.exec(a)
;if(b)return b[1]}}break;case"chrome":case"opera":if(navigator&&navigator.userAgent){const a=k(navigator.userAgent)
;if(a.m_version)return a.m_version}break;case"safari":if(navigator&&navigator.userAgent){const a=navigator.userAgent
;if(a.includes(" Safari/")){const b=/Version\/([0-9.]+) Safari/.exec(a);if(b)return b[1]}}break;default:return""}return""}
async function f(){return(0,u.Cp)(await h())}async function g(){return(0,u.xn)(await h())}async function h(){
const a=/(?:[^;]+;){2}.*?([\w.]+);/g.exec(navigator.userAgent);let b="";return a&&(b=a[1]),b}async function i(){return(0,u.VU)()
}async function j(){return{type:await c(),name:await d(),version:await e(),language:navigator.language,os:await f(),
osName:await g(),osVersion:await i()}}function k(a){let b=null,c=null;return a.includes(" OPR/")?(b="Opera",
c=/OPR\/([0-9.]+)/.exec(a)):a.includes(" YaBrowser/")?(b="YandexBrowser",
c=/YaBrowser\/([0-9.]+)/.exec(a)):a.includes(" Chrome/")&&(b="Chrome",c=/Chrome\/([0-9.]+)/.exec(a)),{m_name:b,
m_version:null!==c?c[1]:null}}}(),R=b,S=L,T=(0,F.b)(),U=Object.assign(Object.assign(Object.assign(Object.assign({
Init:async()=>null,UnInit(){},GetParentTabId(){},CallViewHandler(){throw(0,G.Lh)()},UpdateViewPosition(){throw(0,G.Lh)()},
CloseView(){throw(0,G.Lh)()}},(0,v.N)()),{async CallBackgroundScript(a,b,c,...d){const e=await async function(a){
if("start-page-loaded"===a){return{extension:"extension-v9",extensionMode:"stand-alone",isBreachMonSupported:!0,
isPasswordAuditSupported:!0,isAccountSetupSupported:!1,isViewStorageSupported:!1,isDesktopAppSetupSupported:!1,
isPasswordDetailsSupported:!0,isPassgenOnStartPageSupported:!0,isInAppPaymentDisabled:!1,isPaymentPageSupported:!0,
isSSOLoginSupported:!0,isUpdatePaymentPageAvailable:!0}}throw(0,G.Lh)()}(a,b,c,...d);return e},
onNotificationFromBackgroundScript:(0,B.dU)()}),a),{storage:b,sessionStorage:c}),V=J,W=K,X=M,Y=N,Z=O,aa=(0,z.Wq)(R,"p",(0,
r.ie)(Y,Z));let ab=!1,ac=null,ad=null;const ae=(0,m.PN)({GetDefaultAutoLogoffTimeMins:async()=>120,IsStandalone:()=>!0,
async Logoff(a){if(!ac)throw(0,G.ZU)(G.VH,"Not initialized");await ac.service.Logoff(a)}});let af=null,ag=null,ah=null
;const ai=(0,E.kA)();let aj=null;const ak=(0,u.fy)(!0);ak.onUserActivity.Add((async()=>{ae.ResetInactivityTimer()}));let al=!0
;return{Init:async function(a){await am();const c=(0,w.Op)(aa,"h"),l=(0,w.Nc)(Y,c),m=await U.Init(a);af=(0,j.kq)(Z);const v=(0,
i.R)(R,l,Z);v.Init();const y=(0,D.f$)(),z=(0,g.VA)(v,P,R,aa,af,ar,c,V,{m_client_type:"Site"
},W,null,X,l,y,Z),B=Object.assign(Object.assign({},z.service),{async Login(a,b){const c=z.service,d=await c.Login(a,b);try{
if(!ac)throw(0,G.ZU)(G.VH,"Not initialized");if(al){const a=ac.service,c=ac.options;await async function(a,b,c){var d,e
;const f=await a.GetRoboFormAccountInfo(c);if(!f.clientKey)return!1
;const g=(0,n.yD)(!1,null!==(d=f.enterprise)&&void 0!==d&&d,null!==(e=f.createdTime)&&void 0!==e?e:null),h=await b.GetValue("AuthenticationMethod",g)
;if(1===h)return!1;const i=await a.GetRfoConnectionInfo(!0);if(!i.password)return!1;const j=(0,o.Bc)(X,Y,Z)
;j.Connect(i.clientInfo,i.deviceId,i.serverUrl,i.loginToken,i.password,{useSessionCookies:i.useSessionCookies,
deviceDescription:i.deviceDescr}),await j.LoginWithSession("sync",c);const k=await(0,r.tx)(i.password,f.clientKey,Y,Z,c),l={
source:"self",login:i.loginToken,password:k},m=(0,t.f)(window.sessionStorage)
;return await m.SetValue("rfo-cred",JSON.stringify(l)),!0}(a,c,b)}}catch(e){
(0,I.Rm)("!!! Cannot store info for the next session",(0,G.EB)(e))}return d},async Logoff(a){const b=z.service;await b.Logoff(a)
;try{const a=(0,t.f)(window.sessionStorage);await a.Remove("rfo-cred")}catch(c){(0,
I.Rm)("!!! Cannot cleanup info for the next session",(0,G.EB)(c))}}});return ac=Object.assign(Object.assign({},z),{service:B}),
ad={OpenExtensionSettings(){throw h.lU},async OpenSettingsPage(a,b,c){let d;switch(b){case 1:d="account";break;case 9:
d="advanced";break;case 5:d="autofill";break;case 6:d="autosave";break;case 8:d="domains-equiv";break;case 2:d="license";break
;case 3:d="security";break;case 10:d="referral-rewards";break;default:d="general"}const e={command:"open-settings",options:{
section:d}
},f=JSON.stringify(e),g=await(0,H.zN)(f),h=await(0,H.n1)(g),i=`${window.location.origin+window.location.pathname}#init-data=${encodeURIComponent(h)}`
;await U.OpenUrl(Object.assign(Object.assign({},a),{url:i}),c)},GoFillSubmit(){throw h.lU},async GoTo(a,b){if(!ac)throw(0,
G.ZU)(G.VH,"Not initialized");const c=window.open("about:blank","_blank");if(!c)throw(0,G.ZU)(G.V2,"Cannot open a new window")
;const d=await ac.data.GetInfo(a,4,null),e=(0,s.PH)(d.gotoUrl,d.matchUrl)||"";if(!e)throw c.close(),(0,G.ZU)(G.V2,"Empty URL")
;if((0,u.oK)(e))throw c.close(),(0,G.ZU)(G.V2,await U.LocalizeString("CannotOpenUrlForSecurityReasons"));if((0,
p.HB)(e))throw c.close(),(0,G.ZU)(G.V2,"Cannot open application")
;b&&b.dontAddToRecentlyUsedAndLogs||!1||(await ac.usageInfo.SetUsageInfo(a,0,!0,null),
await ac.usageInfo.SetUsageInfo(a,2,!0,null),await ac.data.LogFileAccess(a,"Use"),d.readOnly||d.hidePasswords||(0,
A.fI)(async function(a,b){af&&1===(0,q.hF)(a)&&await af.GetUpdateUserDataItemBreaches(a,b)}(a,null))),c.location=e},FillForms(){
throw h.lU},FillFieldsWithGeneratedPassword(){throw h.lU},ClearFields(){throw h.lU},ResetFields(){throw h.lU},SetFields(){
throw h.lU},ShowLoginUI(){throw h.lU},ShowSaveFormsDialog(){throw h.lU},BatchLogin(){throw h.lU},CheckItemDuplicates(){
throw h.lU},ShowDuplicatesDialog(){throw h.lU},async OpenRFOPage(a,b,c,d){
const e=`${window.location.origin}/site/account/manage?type=${b||"dashboard"}`;window.location.replace(e)},
async ContactSupport(a,b){const c=await async function(a){const b=(0,d.U)(),c=await Q.GetBrowserInformation(),e={
m_diagnostic_info:await aq(),m_web_page_field_index:a.fieldIndex,m_extension_version:b,m_os:c.osName,m_browser:c.name,
m_browser_version:c.version,m_browser_language:c.language};return{m_info:e,m_active_tab_screenshot_url:void 0,
m_report_message:"",m_report_subject:""}}(a),e="ContactSupport"===a.reportType?0:1;await async function(a,b,c){const e=await(0,
E.TT)(ac).rfo.GetSupportUrlFromServer(c),g=await(0,E.TT)(ac).service.GetRfoConnectionInfo(!1);try{const h=(0,
d.U)(),i=await Q.GetBrowserInformation(),j=await(0,f.O2)(g.deviceId,i,e,h,a.m_report_subject,a.m_report_message,(0,
x.Ex)(a.m_info),a.m_active_tab_screenshot_url,b,X,T,c);j&&await U.OpenUrl({url:j,newTab:!0},c)}catch(h){(0,G.au)(h),
await U.OpenUrl({url:e,newTab:!0},c)}}(c,e,b)},OpenPaymentPage:async(a,b)=>(0,e.X)(a),ShowSharedFolderDialog(){throw h.lU},
ShowSharedFileSettings(){throw h.lU},ShowSendFileDialog(){throw h.lU},OpenStartPage(){throw h.lU},OpenFile(){throw h.lU},
OpenFolder(){throw h.lU},OpenInitialIdentity(){throw h.lU},OpenPinned(){throw h.lU},OpenPasswordGenerator(){throw h.lU},
OpenAuthenticator(){throw h.lU},OpenEmergencyAccess(){throw h.lU},OpenSharingCenter(){throw h.lU},OpenSecurityCenter(){
throw h.lU},OpenAdminCenter(){throw h.lU},OpenSignUpEnterprise(){throw h.lU},CreateNew(){throw h.lU},
ShowCreateSharedFolderDialog(){throw h.lU},ShowCreateGroupDialog(){throw h.lU},ShowRenameSharedFolderDialog(){throw h.lU},
StartSyncWithUI(){throw h.lU},SyncInBackground(a){if(!ac)throw(0,G.ZU)(G.VH,"Not initialized");return ac.SyncNow(a)},
OpenDesktopEditor(){throw h.lU},ShowDesktopOptionsDialog(){throw h.lU},RunProblemStepsRecorder(){throw h.lU},
OpenChangeMasterPasswordDialog(){throw h.lU},ShowBackupRestoreDialog(){throw h.lU},ShowImportDialog(){throw h.lU},
ShowAccountSetupDialog(){throw h.lU},OpenSwitchToDesktopPage(){throw h.lU},QuitRoboForm(){throw h.lU},CheckForUpdate(){
throw h.lU},SelectFolderToCreateBackupIn(){throw h.lU},ScanQRCode(){throw h.lU}},ag=(0,j.gI)({
GetBreachMonitoringEmailAccessToken:async(a,b)=>{try{return await z.rfo.GetBreachMonitoringEmailAccessToken2(a,b)}catch(c){
if((0,h.tM)(c,7)){return{token:await z.rfo.GetBreachMonitoringEmailAccessToken(a,b)}}throw c}},
DisableEmailBreachMonService:async()=>{await b.SetValue("CanUseEmailMonitoringOnServers",[])}},X),await ag.SetServerAddress(V),
ah=(0,j.EE)(),await ah.Init(ac.data),await af.Init(ag,z.rfo,ah,ac.data,ac.service),ac.options.AddOnChangeListener(an),
b.AddOnChangeListener(ao),aj=(0,k.V)(),await aj.Init(ac.data,ar,ac.securityWarningsManager,af),
await ae.Init(ac.service,ac.data,ac.options),ak.Init(window),ab=!0,{viewApi:U,rfApi:ac,rfCommands:ad,userDataBreachesService:af,
passwordAuditService:aj,initData:m}},UnInit:am,Connect:async function(a){if(!ac)throw(0,G.ZU)(G.VH,"Not initialized");try{
await ac.Connect(a)}catch(c){if(!(0,h.tM)(c,10))throw c}const b=ac.service;try{await b.Login({},a)}catch(c){if(S&&(0,
h.tM)(c,10))try{al=!1,await async function(a,b,d){var e;if(!a.login)return!1;let f=await b.GetRfoConnectionInfo(!0)
;if(f.accountId){if(f.serverUrl!==location.origin)return!1}else f=Object.assign(Object.assign({},f),{serverUrl:location.origin})
;if(!f.serverUrl)return!1;if(f.accountId&&(0,o.pC)(a.login)!==f.accountId)return!1;if(f.loginToken&&(0,o.pC)(a.login)!==(0,
o.pC)(f.loginToken))return!1;const g=(0,o.Bc)(X,Y,Z);g.Connect(f.clientInfo,"",f.serverUrl,a.login,"",{useSessionCookies:!0,
deviceDescription:f.deviceDescr});const h=await g.GetAccountInfo(null,d);if(!h.clientKey)return!1
;"self"!==(null==a?void 0:a.source)&&f.deviceId&&await g.AddUserDevice({id:f.deviceId,description:f.deviceDescr||"RFO Web Site",
enroll:!0},d);const i=await(0,r.lr)(a.password,h.clientKey,Y,d);if(!i)return!1
;const j=f.accountId?a.login:null!==(e=h.email)&&void 0!==e?e:"";try{f.loginToken?await b.Login({password:i},d):await b.Login({
server:f.serverUrl,email:j,password:i},d)}catch(c){return!1}return!0}(S,b,a)}catch(c){}finally{al=!0}}},
Disconnect:async function(){await(null==ac?void 0:ac.Disconnect())}};async function am(){ab&&(ak.UnInit(),await ae.UnInit(),
aj&&(await aj.UnInit(),aj=null),af&&(await af.UnInit(),af=null),ah&&(await ah.UnInit(),ah=null),ag&&(ag=null),
ac&&ac.options.RemoveOnChangeListener(an),b.RemoveOnChangeListener(ao),ad=null,ac=null,ab=!1)}async function an(a){let b=!1
;for(const c in a)switch(c){case"AccountLicenseActive":case"AccountEnterprise":b=!0}b&&await ap()}async function ao(a){let b=!1
;for(const c in a)switch(c){case"EnableEmailBreachMonitoring":case"CanUseEmailMonitoringOnServers":b=!0}b&&await ap()}
async function ap(){if(ac&&af){
const a=await b.GetValue("EnableEmailBreachMonitoring",!0),c=await ac.options.GetValue("AccountLicenseActive",!1),d=await ac.options.GetValue("AccountEnterpriseLicenseActive",!1)
;if(a&&c&&!d){const a=await ac.rfo.CanUseEmailBreachesMonitoringAPI(null);if(a)return void af.SetEnabled(!0,a,!1)}
af.SetEnabled(!0,!1,!1)}}async function aq(){const a=window.location.href,b=(0,E.TT)((0,y.vN)(a));let c="normal"
;window.outerHeight===screen.height&&window.outerWidth===screen.width&&(c="maximized");const d={m_app_window:{id:"1",focused:!0,
state:c,width:window.innerWidth,height:window.innerHeight,type:"normal"},m_web_page_data:{m_url:window.location.href,
m_domain:(0,E.TT)(b.m_host),m_title:document.title}};return{m_web_page_data:(0,E.TT)(d.m_web_page_data),
m_app_window:d.m_app_window,m_web_page_url:a,m_web_page_domain:(0,E.TT)(b.m_host),m_history:[]}}async function ar(a){
return ai.GetOnce((async()=>(0,l.v5)(await(0,C.$)("pwd-dict.json",a,X))))}}}}]);