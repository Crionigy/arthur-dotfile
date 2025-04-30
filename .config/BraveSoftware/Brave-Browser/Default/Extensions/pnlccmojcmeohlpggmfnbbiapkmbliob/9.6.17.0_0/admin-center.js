// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[474],{55695:function(){},99583:function(a,b,c){"use strict"
;var d=c(28376),e=c(18101),f=(c(55695),c(60954)),g=c(18540),h=c(53707),i=c(52965),j=c(5197),k=c(78440),l=c(4153);c(13117);(0,
k.uT)(async function(){const a=(0,g.Me)(),b=(0,h.G5)(),c=(0,h.i0)();try{await a.Init(null);const g=await(0,f.y)(a),h=await(0,
e.c)(a,g.options),k=a.storage,m=a.storage,n=(0,d.G)(g.data,g.service,(0,l.TT)(g.rfo),(0,
l.TT)(g.enterprise),g.sharing,g.backups,g.commands,g.options,g.settings,g.securityWarningsManager,g.usageInfo,g.policies,a,null,null,null,await b.GetPlatformOS(),c,k,m,(0,
i.c)(),(0,j.T)(),h.IsStandalone(),!1,!1),o=await n.Create();document.body.appendChild(o),n.OnAfterShow(),n.Focus()}catch(k){}
}(),"admin-center:Initialize")},49245:function(a,b,c){"use strict";c.d(b,{y:function(){return u}})
;var d=c(84117),e=c(55819),f=c(85557),g=c(87965),h=c(53166),i=c(24532),j=c(99196),k=c(31173),l=c(63956),m=c(97490),n=c(32105),o=c(78440),p=c(4153),q=c(69893),r=c(95399),s=c(73863),t=(c(13117),
c(91764)._);function u(a,b,c,u,v,w,x,y,z,A){const B=a,C=b,D=c,E=u,F=v,G=w,H=x,I=y,J=A,K=A.LocalizeString;let L=!1,M=null
;const N={};let O;const[P,Q]=(0,m.Uw)(1),[R,S]=(0,m.Uw)(null),T=(0,o.tG)()
;let U=!1,V=0,W=0,X=0,Y=0,Z=0,aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0;const[ah,ai]=(0,m.Uw)(null),[aj,ak]=(0,m.Uw)(null),al=(0,
o.tG)();let am=0,an=0,ao=0,ap=0,aq=0,ar=0,as=0,at=0,au=0,av=0;const[aw,ax]=(0,m.Uw)(null),[ay,az]=(0,m.Uw)(null),aA=(0,o.tG)()
;let aB=!1,aC=0,aD=0,aE=0,aF=0,aG=0;const[aH,aI]=(0,m.Uw)(!0),[aJ,aK]=(0,m.Uw)(null),aL=(0,o.tG)(),[aM,aN]=(0,
m.Uw)(null),[aO,aP]=(0,m.Uw)(null),[aQ,aR]=(0,m.Uw)(0),aS=(0,o.tG)(),[aT,aU]=(0,m.Uw)(!0),aV=(0,o.tG)(),aW=(0,o.tG)()
;let aX=null,aY=!0;return{Create:async function(){return O=t(n.J2,{always_visible:!1,
class_name:"tab-view-dashboard tab-view hidden"},t("div",{className:"dashboard"},t("div",{className:"cards-list"
},a0(),a2(),a4(),z.IsCurrentUserAdmin(null)&&a6(),z.IsCurrentUserAdmin(null)&&a7(),z.IsCurrentUserAdmin(null)&&a8()))),O},
OnAfterShow:function(){L||(aZ(!1,!1,!1,!1),G.onEvent.Add(bd),H.onDataChanged.Add(be),O.Init())},OnBeforeHide:function(){
M&&(M.Hide(0),M=null)},Focus:function(){},Dispose:function(){aW.Cancel(),T.Cancel(),al.Cancel(),aA.Cancel(),aL.Cancel(),
aS.Cancel(),aV.Cancel(),G.onEvent.Remove(bd),H.onDataChanged.Remove(be),O.UnInit()}};function aZ(a,b,c,e){const g=a||b||c
;if(!L||g||e)try{z.IsCurrentUserAdmin(null)&&(function(a){aV.Start((async b=>{await async function(a,b){
if(L&&!a||!z.IsCurrentUserAdmin(null))return;aX=null;const c=await z.GetCompanyLicenseInfo(!1,b);if(!c.company)return
;let d="no-license";if(c.status)switch(d=c.status,d){case"active":if(c.expirationTime){const a=(0,
r.t2)(),b=Math.floor((c.expirationTime-a)/60/60/24);aX=b>=30?"buymore":"renew"}else aX="renew";break;case"expired":
case"trial-expired":case"trial":case"no-license":aX="buy"}}(a,b),aU(!1)}))}(a),function(a){aL.Start((async b=>{
await async function(a,b){var c,d;if(L&&!a||!z.IsCurrentUserAdmin(null))return;aK(null)
;const e=await z.GetAccountInfo(!1,b),f=null!==(c=e.accountId)&&void 0!==c?c:"";if(!e.emailVerified)return;try{
const a=(await D.GetCompanyIntegrationSettings(f,b)).providers;if(!a||!a.length)return
;const c=null!==(d=a.find((a=>a.active)))&&void 0!==d?d:null;aK(c)}catch(g){(0,q.au)(g)}}(a,b),aI(!1)}))}(e),function(a){
aS.Start((async b=>{try{await async function(a,b){if(L&&!a||!z.IsCurrentUserAdmin(null))return;b.ThrowIfShouldStop()
;const c=await async function(a,b){var c,e,g,h;let i=0,j=0,k=0,l=0;const m=await B.GetCompanyMembers(a,b);for(const f of m){
const a=await(0,d.V1)(f.status,f.securityStats);a&&a.m_score&&(i+=null!==(c=a.m_logins)&&void 0!==c?c:0,
j+=a.m_score*(null!==(e=a.m_logins)&&void 0!==e?e:0))}const n=await C.GetCompanyGroups(a,b);for(const d of n){const a=await(0,
f.Mv)(d.securityStats);a&&a.m_score&&(k+=null!==(g=null==a?void 0:a.m_logins)&&void 0!==g?g:0,
l+=(null==a?void 0:a.m_score)*(null!==(h=null==a?void 0:a.m_logins)&&void 0!==h?h:0))}
const o=i+k,p=j+l,q=0!==o?Math.round(p/o):0;return q}(!1,b);aR(c)}(a,b)}catch(c){(0,q.au)(c)}}))}(g)),function(a){
T.Start((async b=>{try{await async function(a,b){var c;if(L&&!a)return;let e=[],f=[];const g=await z.GetAccountInfo(!1,b);if(I){
let a=await I.GetValue("ac-dashboard-cached-info",{});a.userEmail&&a.userEmail===g.email||(a={},
await I.SetValue("ac-dashboard-cached-info",{}));const b=a.companyUsersCount||1;Q(b),aY=b<=d.jA,V=a.companyUsersBlocked||0,
W=a.companyUsersInactive||0,X=a.companyUsersInvited||0,Y=a.companyUsersSuspended||0,Z=a.companyUsersNotComplete||0,
aa=a.companyUsersScoreLow||0,ab=a.companyUsersCompromised||0,ac=a.companyUsers2FA||0,ad=a.companyUsersScoreAverage||0,
ae=a.companyUsersAdmins||0,af=a.companyUsersScoreGood||0,ag=a.companyUsersScoreExcellent||0,await m(V),await n(Z),await o(X),
await p(W),1===ae&&await q(ae,!0),await r(aa),await s(ab),await t(ac),ae>1&&await q(ae,!1),await u(Y),await v(ad),await w(af),
await x(ag),e.length>0&&S(e),f.length>0&&aN(f)}e=[],f=[];let h=await B.GetCompanyMembers(a,b),i=[];const k=new Set
;if(aY=h.length<=d.jA,V=0,W=0,X=0,Y=0,Z=0,aa=0,ab=0,ac=0,ad=0,ae=0,af=0,ag=0,!z.IsCurrentUserAdmin(null)){
i=(await C.GetCompanyGroups(a,b)).map((a=>a.id));for(const a of i){const c=(await E.GetSharedAccountRecipients2(a,!0,{
fields:"-mp,-sender,-status,-current,-serverOnly,-name,-isAdmin,-isManager,-accepted,-company,-accountInfo,-policies,-recipientEmail,-isNotComplete,-recipientName,-recipientAccessDate"
},b)).map((a=>a.accountId));if(h.filter((a=>c.includes(a.id))).forEach((a=>k.add(a.id))),!h.length)break}
h=h.filter((a=>k.has(a.id)||a.id===g.accountId))}Q(h.length);for(const y of h){const a=(0,d.VK)(y);switch((0,d.lW)(a)){case 1:
V++;break;case 4:Z++;break;case 5:Y++;break;case 3:W++;break;case 2:X++}const b=await(0,d.sm)(a);if(b){switch((0,d.K$)(b)){
case 0:aa++;break;case 1:ad++;break;case 2:af++;break;case 3:ag++}}const e=await(0,
j.gP)(null!==(c=a.m_security_stats_blob_str)&&void 0!==c?c:"");e.cl&&e.cl>0&&ab++,a.m_isAdmin&&ae++}await m(V),await n(Z),
await o(X),await p(W),1===ae&&await q(ae,!0);await r(aa),await s(ab);const l=await z.GetCompanyPolicyValue("EnforceOTP",b)
;if(!l&&aY){for(const a of h){const c=(0,d.VK)(a),e=(0,d.lW)(c);if(2===e||4===e)continue
;1===(await B.GetAltAuthValue(c.m_id,e,b)).m_status&&ac++}await t(ac)}ae>1&&await q(ae,!1);async function m(a){a>0&&e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_BlockedUsers_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersBlocked_Text"),m_value:a,m_onclick:()=>a1({m_status:[1],m_groups:i})})}
async function n(a){a>0&&e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_NotCompleted_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersNotComplete_Text"),m_value:a,m_onclick:()=>a1({m_status:[4],m_groups:i})})}
async function o(a){a>0&&e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_Invited_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersInvited_Text"),m_value:a,m_onclick:()=>a1({m_status:[2],m_groups:i})})}
async function p(a){a>0&&(e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_Inactive_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersInactiveHint_Text"),m_value:a,m_onclick:()=>a1({m_status:[3],m_groups:i})}),
f.push({m_get_name:()=>K("AdminCenter_DashboardTabView_UsersInactive_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersInactiveHint_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_status:[3]},null)}))}async function q(a,b){
!z.IsCurrentUserAdmin(null)||a<1||!b&&1===a||e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_CompanyAdmins_Text"),
m_get_text:b?()=>K("AdminCenter_DashboardTabView_UsersAdmin_Text"):()=>K("AdminCenter_DashboardTabView_UsersAdmins_Text"),
m_value:a,m_onclick:()=>a1({m_role:[0],m_groups:i})})}async function r(a){a>0&&(e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_LowScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,m_onclick:()=>a1({m_score:[0],m_groups:i})
}),f.push({m_get_name:()=>K("AdminCenter_DashboardTabView_UsersLowScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_score:[0]},null)}))}async function s(a){a>0&&(e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_Compromissed_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersCompromised_Text"),m_value:a,m_onclick:()=>a1({m_compromised:!0,m_groups:i})
}),f.push({m_get_name:()=>K("AdminCenter_DashboardTabView_UsersWithCompromissed_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersCompromised_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_compromised:!0},null)}))}async function t(a){a>0&&(e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_2StepVerification_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_Users2FA_Text"),m_value:a,m_onclick:()=>a1({m_2fa:[1]})}),f.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_Users2StepVerification_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_Users2FA_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_2fa:[1]},null)}))}async function u(a){a>0&&e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_SuspendedUsers_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersSuspended_Text"),m_value:a,m_onclick:()=>a1({m_status:[5],m_groups:i})})}
async function v(a){a>0&&(e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_AverageScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,m_onclick:()=>a1({m_score:[1],m_groups:i
})}),f.push({m_get_name:()=>K("AdminCenter_DashboardTabView_UsersAverageScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("users",{m_score:[1]},null)}))}async function w(a){a>0&&e.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_GoodScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsGoodScore_Text"),m_value:a,m_onclick:()=>a1({m_score:[2],m_groups:i})
})}async function x(a){a>0&&e.push({m_get_name:()=>K("AdminCenter_DashboardTabView_ExcellentScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersExcellentScore_Text"),m_value:a,m_onclick:()=>a1({m_score:[3],m_groups:i})})
}await u(Y),await v(ad),await w(af),await x(ag),S(e),aN(f),N.userEmail=g.email,N.companyUsersCount=h.length,
N.companyUsersBlocked=V,N.companyUsersInactive=W,N.companyUsersInvited=X,N.companyUsersSuspended=Y,N.companyUsersNotComplete=Z,
N.companyUsersScoreLow=aa,N.companyUsersCompromised=ab,N.companyUsers2FA=ac,N.companyUsersScoreAverage=ad,
N.companyUsersAdmins=ae,N.companyUsersScoreGood=af,N.companyUsersScoreExcellent=ag}(a,b)}catch(c){(0,q.au)(c),R(null)||(S([]),
aN([]))}finally{null!==aj(null)&&null!==ay(null)&&(L=!0,I&&await I.SetValue("ac-dashboard-cached-info",N))}}))}(a),function(a){
al.Start((async b=>{try{await async function(a,b){var c,d,e,g,h,i,k,l,m,n,o,p,r;if(L&&!a)return;let s=[],t=[]
;const u=await z.GetAccountInfo(!1,b);if(I){let a=await I.GetValue("ac-dashboard-cached-info",{})
;a.userEmail&&a.userEmail===u.email||(a={},await I.SetValue("ac-dashboard-cached-info",{}))
;const b=null!==(c=a.companyGroupsCount)&&void 0!==c?c:0;0!==b&&ai(b),am=null!==(d=a.companyGroupsWithoutUser)&&void 0!==d?d:0,
an=null!==(e=a.companyGroupsWithoutData)&&void 0!==e?e:0,ao=null!==(g=a.companyGroupsScoreLow)&&void 0!==g?g:0,
ap=null!==(h=a.companyGroupsCompromised)&&void 0!==h?h:0,aq=null!==(i=a.companyGroupsWithRegularPermissions)&&void 0!==i?i:0,
ar=null!==(k=a.companyGroupsWithSyncStorage)&&void 0!==k?k:0,as=null!==(l=a.companyGroupsWithoutManager)&&void 0!==l?l:0,
at=null!==(m=a.companyGroupsScoreAverage)&&void 0!==m?m:0,au=null!==(n=a.companyGroupsScoreGood)&&void 0!==n?n:0,
av=null!==(o=a.companyGroupsScoreExcellent)&&void 0!==o?o:0,await w(ao),await x(ap),await y(am),await A(an),await B(aq),
await D(ar),await E(as),await F(at),await G(au),await H(av),s.length>0&&ak(s),t.length>0&&aP(t)}
const v=await C.GetCompanyGroups(a,b);ai(v.length),am=0,an=0,ao=0,ap=0,aq=0,ar=0,as=0,at=0,au=0,av=0,s=[],t=[]
;for(const C of v){C.membersCount||am++,C.serverOnly||ar++,C.readOnly||aq++,C.managersCount||as++;const a=await(0,
j.gP)(null!==(p=C.securityStats)&&void 0!==p?p:"");let c=null;if(void 0!==a.sp){
0===(a.loginsCount||0)+(a.bookmarksCount||0)+(a.contactsCount||0)+(a.identitiesCount||0)+(a.safenotesCount||0)&&an++,
c=a.sp||null;(null!==(r=a.cl)&&void 0!==r?r:0)>0&&ap++}else try{const a=await z.GetGroupSecurityReport(`/${C.name}`,b)
;a.statistics.bookmarksCount||a.statistics.loginsCount||a.statistics.safenotesCount||a.statistics.contactsCount||a.statistics.identitiesCount||an++,
a.compromised.length>0&&ap++,c=a.statistics.sp||null}catch(J){(0,q.au)(J)}if(c){switch((0,f.a_)(c)){case 0:ao++;break;case 1:
at++;break;case 2:au++;break;case 3:av++}}b.ThrowIfShouldStop()}async function w(a){a>0&&(s.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_LowScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,m_onclick:()=>a3({m_score:[0]})}),t.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_GroupsLowScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsLowScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("groups",null,{m_score:[0]})}))}async function x(a){a>0&&s.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_Compromissed_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsCompromised_Text"),m_value:a,m_onclick:()=>a3({m_compromised:!0})})}
async function y(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_WithoutUsers_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsWithoutUsers_Text"),m_value:a,m_onclick:()=>a3({m_without_users:!0})})}
async function A(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_WithoutData_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsWithoutData_Text"),m_value:a,m_onclick:()=>a3({m_without_data:!0})})}
async function B(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_RegularPermission_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsPermissions_Text"),m_value:a,m_onclick:()=>a3({m_permissions:[0]})})}
async function D(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_SyncStorageType_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsStorageSync_Text"),m_value:a,m_onclick:()=>a3({m_storage:[1]})})}
async function E(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_WithoutGroupManager_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsWithoutManager_Text"),m_value:a,m_onclick:()=>a3({m_without_manager:!0})})}
async function F(a){a>0&&(s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_AverageScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,m_onclick:()=>a3({m_score:[1]})}),
t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_GroupsAverageScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsAverageScore_Text"),m_value:a,
m_onclick:()=>z.OpenReportsTabAndNavigateToSection("groups",null,{m_score:[1]})}))}async function G(a){a>0&&s.push({
m_get_name:()=>K("AdminCenter_DashboardTabView_GoodScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_UsersGroupsGoodScore_Text"),m_value:a,m_onclick:()=>a3({m_score:[2]})})}
async function H(a){a>0&&s.push({m_get_name:()=>K("AdminCenter_DashboardTabView_ExcellentScore_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_GroupsExcellentScore_Text"),m_value:a,m_onclick:()=>a3({m_score:[3]})})}
await w(ao),await x(ap),await y(am),await A(an),await B(aq),await D(ar),await E(as),await F(at),await G(au),await H(av),ak(s),
aP(t),N.userEmail=u.email,N.companyGroupsWithoutUser=am,N.companyGroupsWithoutData=an,N.companyGroupsScoreLow=ao,
N.companyGroupsCompromised=ap,N.companyGroupsWithRegularPermissions=aq,N.companyGroupsWithSyncStorage=ar,
N.companyGroupsWithoutManager=as,N.companyGroupsScoreAverage=at,N.companyGroupsScoreGood=au,N.companyGroupsScoreExcellent=av
}(a,b)}catch(c){(0,q.au)(c),aj(null)||(ak([]),aP([]))}finally{null!==R(null)&&null!==ay(null)&&(L=!0,
I&&await I.SetValue("ac-dashboard-cached-info",N))}}))}(b),function(a){aA.Start((async b=>{try{await async function(a,b){
var c,d,e,f,g,h,i,j,k,l,m,n,o,p,r,s;if(L&&!a)return;b.ThrowIfShouldStop();let t=[];const u=await z.GetAccountInfo(!1,b);if(I){
let a=await I.GetValue("ac-dashboard-cached-info",{});a.userEmail&&a.userEmail===u.email||(a={},
await I.SetValue("ac-dashboard-cached-info",{}));const b=null!==(c=a.companyFilesCount)&&void 0!==c?c:0;0!==b&&ax(b),
aC=null!==(d=a.companyLoginsWithCompromisedPwd)&&void 0!==d?d:0,aD=null!==(e=a.companyLoginsWithReusedPwd)&&void 0!==e?e:0,
aE=null!==(f=a.companyLoginsWithDuplicatedPwd)&&void 0!==f?f:0,aF=null!==(g=a.companyLoginsWeakPwd)&&void 0!==g?g:0,
aG=null!==(h=a.companyLoginsMediumPwd)&&void 0!==h?h:0,await w(aC),await x(aD),await y(aF),await A(aG),await B(aE),
t.length>0&&az(t)}aC=0,aD=0,aE=0,aF=0,aG=0,t=[];let v=0;try{const a=await z.GetSecurityReport("",!0,b)
;v=(null!==(i=a.statistics.loginsCount)&&void 0!==i?i:0)+(null!==(j=a.statistics.bookmarksCount)&&void 0!==j?j:0)+(null!==(k=a.statistics.safenotesCount)&&void 0!==k?k:0)+(null!==(l=a.statistics.contactsCount)&&void 0!==l?l:0)+(null!==(m=a.statistics.identitiesCount)&&void 0!==m?m:0),
aC=null!==(n=a.statistics.cl)&&void 0!==n?n:0,aD=null!==(o=a.statistics.reused)&&void 0!==o?o:0,
aE=null!==(p=a.statistics.duplicates)&&void 0!==p?p:0,aF=null!==(r=a.statistics.weak)&&void 0!==r?r:0,
aG=null!==(s=a.statistics.medium)&&void 0!==s?s:0}catch(C){(0,q.au)(C)}if(ax(v),0===v)return void az([]);async function w(a){
a>0&&t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_Compromissed_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_DataCompromised_Text"),m_value:a,m_onclick:()=>a5({m_compromised:!0})})}
async function x(a){a>0&&t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_Reused_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_DataReused_Text"),m_value:a,m_onclick:()=>a5({m_reused:!0})})}
async function y(a){a>0&&t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_WeakPwdStrength_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_DataWeakStrength_Text"),m_value:a,m_onclick:()=>a5({m_pwd_strength:[0]})})}
async function A(a){a>0&&t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_MediumPwdStrength_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_DataMediumStrength_Text"),m_value:a,m_onclick:()=>a5({m_pwd_strength:[1]})})}
async function B(a){a>0&&t.push({m_get_name:()=>K("AdminCenter_DashboardTabView_Duplicated_Text"),
m_get_text:()=>K("AdminCenter_DashboardTabView_DataDuplicate_Text"),m_value:a,m_onclick:()=>a5({m_duplicated:!0})})}await w(aC),
await x(aD),await y(aF),await A(aG),await B(aE),az(t),N.userEmail=u.email,N.companyFilesCount=v,
N.companyLoginsWithCompromisedPwd=aC,N.companyLoginsWithReusedPwd=aD,N.companyLoginsWithDuplicatedPwd=aE,
N.companyLoginsWeakPwd=aF,N.companyLoginsMediumPwd=aG}(a,b)}catch(c){(0,q.au)(c),ay(null)||az([])}finally{
null!==R(null)&&null!==aj(null)&&(L=!0,I&&await I.SetValue("ac-dashboard-cached-info",N))}}))}(c)}catch(h){(0,q.au)(h)}}
function a0(){return async d=>{const e=z.GetLanguageTag(d),f=P(d),g=R(d),h=null===g,i=z.IsCurrentUserAdmin(d);return t(a9,{
disabled:h,class_name:"card-users",show_loading_view:h},t(ba,{name:await K("AdminCenter_Users_Text"),
button_text:await K("AdminCenter_DashboardTabView_AddUser_Text"),on_title_click:a,on_button_click:b,on_button_mousedown:c,
show_button:i,disabled:h},t("span",{className:"card-value"},(0,s.Df)(f,e))),t(bb,{insights:g}))};function a(){
z.IsCurrentUserAdmin(null)?z.ShowUsersView(null):(0,l.D$)((async()=>{const a=(await C.GetCompanyGroups(!1,null)).map((a=>a.id))
;z.ShowUsersView({m_groups:a})}),(()=>()=>{}),null,null)}function b(a,b){b.stopPropagation(),0===b.button&&(U?(bf(),(0,
h.dq)(a)):function(a){bf();const b=a.getBoundingClientRect(),c=new DOMRect(b.left,b.bottom,0,0);function d(){(0,h.cT)(a),U=!0}
function e(){(0,h.dq)(a),U=!1}M=(0,g.Lj)(c,(()=>z.GetAddUserDropdownCommands()),{className:"with-triangle create-menu",onShow:d,
onHide:e},(function(b,c){return(0,p.TT)(O).style.width=(0,k.Md)(b),(0,p.TT)(O).style.height=(0,k.Md)(c),
a.getBoundingClientRect()}),((a,b)=>(0,o.fI)(a(b,(0,o.f4)(null,null,null)))))}(a))}function c(a){U&&a.stopPropagation()}}
function a1(a){z.ShowUsersView(a)}function a2(){return async c=>{
const d=z.GetLanguageTag(c),e=ah(c),f=aj(c),g=null===f,h=z.IsCurrentUserAdmin(c);return t(a9,{disabled:g,
class_name:"card-groups",show_loading_view:g},t(ba,{name:await K("AdminCenter_Groups_Text"),
button_text:await K("AdminCenter_DashboardTabView_AddGroup_Text"),on_title_click:a,on_button_click:b,show_button:h,disabled:g
},t("div",{className:"card-row"},e?t("span",{className:"card-value"},(0,s.Df)(e,d)):f?t("span",{className:"no-data"
},K("AdminCenter_DashboardTabView_NoGroupsAdded_Text")):null)),t(bb,{insights:f}))};function a(){z.ShowGroupsView(null)}
function b(a,b){b.stopPropagation(),0===b.button&&z.ShowCreateGroupDialog()}}function a3(a){z.ShowGroupsView(a)}function a4(){
return async d=>{const e=z.GetLanguageTag(d),f=aw(d),g=ay(d),h=null===g;return t(a9,{disabled:h,class_name:"card-data",
show_loading_view:h},t(ba,{name:await K("AdminCenter_Data_Tab_Button_Text"),
button_text:await K("AdminCenter_DashboardTabView_AddData_Text"),on_title_click:a,on_button_click:b,on_button_mousedown:c,
show_button:!0,disabled:h},t("div",{className:"card-row"},f?t("span",{className:"card-value"},(0,s.Df)(f,e)):g?t("span",{
className:"no-data"},K("AdminCenter_DashboardTabView_NoDataAdded_Text")):null)),t(bb,{insights:g}))};function a(){
z.ShowDataView(null)}function b(a,b){b.stopPropagation(),0===b.button&&(aB?(bf(),(0,h.dq)(a)):function(a){bf()
;const b=a.getBoundingClientRect(),c=new DOMRect(b.left,b.bottom,0,0);function d(){(0,h.cT)(a),aB=!0}function e(){(0,h.dq)(a),
aB=!1}M=(0,g.Lj)(c,(()=>z.GetAddDataDropdownCommands(!1,null)),{className:"with-triangle create-menu",onShow:d,onHide:e
},(function(b,c){return(0,p.TT)(O).style.width=(0,k.Md)(b),(0,p.TT)(O).style.height=(0,k.Md)(c),a.getBoundingClientRect()
}),((a,b)=>(0,o.fI)(a(b,(0,o.f4)(null,null,null)))))}(a))}function c(a){aB&&a.stopPropagation()}}function a5(a){
z.ShowDataView(a)}function a6(){return async b=>{var c,d;z.GetLanguageTag(b);const f=aH(b),g=aJ(b)
;return z.IsCurrentUserAdmin(b)?t(a9,{disabled:f,class_name:"card-integration",show_loading_view:f},t(ba,{
name:await K("AdminCenter_Integration_Tab_Button_Text"),button_text:await K("AdminCenter_DashboardTabView_AddIntegration_Text"),
button_title:await K("AdminCenter_Integration_Tab_Button_Tip"),on_title_click:a,on_button_click:a,show_button:!g&&!f,disabled:f
},t("div",{className:"card-row"},g&&!f&&t("div",{className:"card-value value-with-image"},t("div",{
className:`provider-logo ${(0,e.pq)(null!==(c=g.type)&&void 0!==c?c:"")}`}),t("div",{className:"provider-name"},(0,
e.n)(null!==(d=g.type)&&void 0!==d?d:""))),!g&&!f&&t("span",{className:"no-data"
},K("AdminCenter_DashboardTabView_ProviderNotSet_Text")),t("div",{className:"flex-cell"}))),!f&&g&&t(bc,{
title:await K("AdminCenter_DashboardTabView_SetupDetails_Text")},t("li",{className:"data-item not-clickable"},t("div",{
className:"name-and-value"},t("span",{className:"text"},K("AdminCenter_IntegrationView_Provisioning_Title_Text")),t("span",{
className:"value"
},g.provisioning&&g.provisioning.enable?K("AdminCenter_DashboardTabView_ActiveStatus_Text"):K("AdminCenter_DashboardTabView_ProviderNotSet_Text"))),t("div",{
className:"name-and-value"},t("span",{className:"text"},K("AdminCenter_DashboardTabView_LastSyncTime_Text")),t("span",{
className:"value"},async function(a){var b,c,d,e,f;let g=await K("AdminCenter_DashboardTabView_NA_Text");if(a.provisioning){
const h=null!==(b=await J.GetLanguageTag(null))&&void 0!==b?b:"en"
;"scim"===a.provisioning.type&&(null===(d=null===(c=a.provisioning.scim)||void 0===c?void 0:c.stats)||void 0===d?void 0:d.lastSyncedTime)?g=(0,
r.il)(a.provisioning.scim.stats.lastSyncedTime,h):"google"===a.provisioning.type&&(null===(f=null===(e=a.provisioning.google)||void 0===e?void 0:e.stats)||void 0===f?void 0:f.lastSyncedTime)&&(g=(0,
r.il)(a.provisioning.google.stats.lastSyncedTime,h))}return g}(g)))),t("li",{className:"data-item not-clickable"},t("div",{
className:"name-and-value"},t("span",{className:"text"},await K("AdminCenter_DashboardTabView_SSOIntegration_Text")),t("span",{
className:"value"
},g.sso&&g.sso.enable?K("AdminCenter_DashboardTabView_ActiveStatus_Text"):K("AdminCenter_DashboardTabView_ProviderNotSet_Text"))),t("div",{
className:"name-and-value"},t("span",{className:"text"},await K("AdminCenter_DashboardTabView_SSOAppliedTo_Text")),t("span",{
className:"value"},async function(a){var b;let c=await K("AdminCenter_DashboardTabView_NA_Text");if(a.sso&&a.sso.enable){
c=await K("AdminCenter_IntegrationView_SSO_Service_Active_For_No_One")
;if(await z.GetCompanyPolicyValue("UseSSOLogin",null))c=await K("AdminCenter_IntegrationView_SSO_Service_For_All_Label");else{
const a=await C.GetCompanyGroups(!1,null);for(const d of a){
if(""!==await z.GetGroupPolicyValue(null!==(b=d.policies)&&void 0!==b?b:"","UseSSOLogin")){
c=await K("AdminCenter_IntegrationView_SSO_Service_For_Select_Label");break}}}}return c}(g)))))):[]};function a(){
z.AddIntegration()}}function a7(){return async b=>{z.GetLanguageTag(b);const c=aQ(b),d=aM(b),e=aO(b),f=[];d&&f.push(...d),
e&&f.push(...e);const g=!d&&!e;return z.IsCurrentUserAdmin(b)?t(a9,{disabled:g,class_name:"card-reports",show_loading_view:g
},t(ba,{name:await K("AdminCenter_Reports_Tab_Button_Text"),button_text:await K("AdminCenter_DashboardTabView_AddData_Text"),
on_title_click:a,show_button:!1,disabled:g},null!==c&&!g&&t("div",{className:"score-chart"},t("div",{className:"values"
},t("span",{className:"text"},K("AdminCenter_ReportsTabView_CompanySecurityScore_Text")),t("span",{className:"value"
},c?async function(a){switch((0,i._W)(a)){case 3:return(0,s.bt)(await K("PassAud_GoodSafetyLevel_Tittle")," • ",(0,p.bf)(a))
;case 2:return(0,s.bt)(await K("PassAud_MediumSafetyLevel_Tittle")," • ",(0,p.bf)(a));case 1:return(0,
s.bt)(await K("PassAud_AverageSafetyLevel_Tittle")," • ",(0,p.bf)(a));case 0:return(0,
s.bt)(await K("PassAud_BadSafetyLevel_Tittle")," • ",(0,p.bf)(a))}}(c):"")),t("div",{className:"score-bar"},t("div",{
className:"bar"},c&&t("div",{className:"company-score",style:{left:`${(0,p.bf)(c)}%`}})),t("ul",{className:"delimeters-list"
},t("li",{className:"delimeter",title:await K("PassAud_BadSafetyLevel_Tittle")}),t("li",{className:"delimeter",
title:await K("PassAud_AverageSafetyLevel_Tittle")}),t("li",{className:"delimeter",
title:await K("PassAud_MediumSafetyLevel_Tittle")}),t("li",{className:"delimeter",
title:await K("PassAud_GoodSafetyLevel_Tittle")})))),null===c&&!g&&t("div",{className:"card-row"},t("span",{className:"no-data"
},K("AdminCenter_DashboardTabView_NoReportsYet_Text")))),t(bb,{insights:f})):[]};function a(){z.ShowReportsView(!0,null)}}
function a8(){return async e=>{z.GetLanguageTag(e);const f=aT(e),g=z.GetLicenseInfo(e);return z.IsCurrentUserAdmin(e)?t(a9,{
disabled:f,class_name:"card-licenses",show_loading_view:f},t(ba,{name:await K("AdminCenter_DashboardTabView_Licenses_Text"),
button_text:await c(g),on_title_click:a,on_button_click:b,show_button:!f,disabled:f},!f&&t("div",{className:"score-chart"
},t("div",{className:"values"},t("span",{className:"text"},K("AdminCenter_SettingsView_LicensesUsed_Text")),t("span",{
className:"value"},function(a){var b,c,d,e
;const f=(0,s.Df)(null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,z.GetLanguageTag(null)),g=(0,
s.Df)(null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:30,z.GetLanguageTag(null))
;return(0,s.bt)(f,"/",g)}(g))),t("div",{className:"score-bar"},t("div",{className:"bar"},t("div",{className:"licenses-bar",
style:{width:d(g)}}))))),g&&!f&&t(bc,{title:await K("AdminCenter_DashboardTabView_Details_Text")},t("li",{
className:"data-item not-clickable"},t("div",{className:"name-and-value"},t("span",{className:"text"
},K("AdminCenter_DashboardTabView_LicenseType_Text")),t("span",{className:"value"
},K("Options_LicenseType_Business_Text"))),t("div",{className:"name-and-value"},t("span",{className:"text"
},K("AdminCenter_DashboardTabView_Subscription_Text")),t("span",{className:"value"},async function(a){
if(!a||!a.status)return K("AdminCenter_DashboardTabView_NA_Text");switch(a.status){case"active":
return K("AdminCenter_DashboardTabView_ActiveStatus_Text");case"expired":
return K("AdminCenter_DashboardTabView_ExpiredStatus_Text");case"trial-expired":
return K("Options_LicenseStatus_ExpiredTrial_Text");case"trial":return K("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return K("Options_LicenseStatus_NoLicense_Text")}}(g)))),t("li",{className:"data-item not-clickable"
},t("div",{className:"name-and-value"},t("span",{className:"text"
},K("AdminCenter_DashboardTabView_ExpirationDate_Text")),t("span",{className:"value"},async function(a){var b,c
;let d=await K("AdminCenter_DashboardTabView_NA_Text");if(a&&a.expirationTime){
const e=null!==(b=a.expirationTime)&&void 0!==b?b:0,f=null!==(c=await J.GetLanguageTag(null))&&void 0!==c?c:"en";d=(0,r.fQ)(e,f)
}return d}(g))),t("div",{className:"name-and-value"},t("span",{className:"text"
},K("AdminCenter_DashboardTabView_LicensesAutoRenewal_Text")),t("span",{className:"value"
},g.autopay?K("AdminCenter_On_Text"):K("AdminCenter_Off_Text")))))):[]};function a(){(0,
o.fI)(z.ShowCompanySettingsView("license"))}function b(a,b){b.stopPropagation(),aX&&aW.Start((async a=>{
await F.OpenPaymentPage({action:(0,p.TT)(aX)},a)}))}async function c(a){if(!a||!a.status)return K("AdminCenter_BuyNow_Text")
;switch(a.status){case"active":if(a.expirationTime){const b=(0,r.t2)(),c=Math.floor((a.expirationTime-b)/60/60/24)
;return K(c>=30?"AdminCenter_SettingsView_BuyMore_Text":"AdminCenter_SettingsView_RenewNow_Text")}
return K("AdminCenter_SettingsView_RenewNow_Text");case"expired":case"trial-expired":case"trial":case"no-license":
return K("AdminCenter_BuyNow_Text")}}function d(a){var b,c,d,e;if(!a)return"0"
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:30,h=Math.floor(f/g*100)||1
;return`${(0,p.bf)(h)}%`}}function a9(a,b){const c=a.class_name?`card ${a.class_name}`:"card";return t("div",{
className:a.disabled?`${c} disabled`:c},b,a.show_loading_view&&t("div",{className:"loading-view"},t("div",{
className:"action-progress-overlay-circle size48"})))}function ba(a,b){var c;let d;return t("div",{
className:"title-with-button",onclick:a.disabled?null:a.on_title_click},t("div",{className:"card-row"},t("div",{
className:"card-name"},a.name),t("div",{className:"flex-cell"}),a.show_button?d=t("button",{className:"card-button",
onclick:b=>function(b,c){if(a.disabled||!a.on_button_click)return;a.on_button_click(b,c)}(d,b),
onmousedown:a.disabled||!a.on_button_mousedown?null:a.on_button_mousedown,
title:null!==(c=a.button_title)&&void 0!==c?c:a.button_text},a.button_text):t("div",{className:"empty-cell"})),b)}
function bb(a){const b=a.insights;return t(n.J2,{always_visible:!1,view_initialized:null!==b},t("div",{className:"list"
},t("div",{className:b&&b.length>0?"list-info":"list-info hidden"},t("span",{className:"title"
},K("AdminCenter_DashboardTabView_UsefulInsights_Text")),b&&t("ul",{className:"list-items"},b.map((function(a){return t("li",{
className:"data-item",onclick:a.m_onclick},t("div",{className:"name-and-description"},t("span",{className:"text name"
},a.m_get_name()),t("span",{className:"text description"},a.m_get_text())),t("div",{className:"value"},t("span",{
className:"text"},(0,s.Df)(a.m_value,z.GetLanguageTag(null))),t("div",{className:"arrow-icon"})))}))))))}function bc(a,b){
return t("div",{className:"list-info"},t("span",{className:"title"},a.title),t("ul",{className:"list-items"},b))}function bd(a){
let b=!1,c=!1,d=!1,e=!1;for(const f of a)switch(f.event){case 0:case 2:case 1:b=!0,c=!0;break;case 3:case 4:c=!0;break;case 6:
case 7:case 8:c=!0,d=!0;break;case 9:e=!0}(b||c||d||e)&&aZ(b,c,d,e)}function be(a){let b=!1,c=!1
;for(const d of a)switch(d.event){case 5:case 8:case 7:case 6:b=!0,c=!0;break;case 10:L=!1,aW.Cancel(),T.Cancel(),al.Cancel(),
aA.Cancel(),aL.Cancel(),aS.Cancel(),aV.Cancel(),G.onEvent.Remove(bd),H.onDataChanged.Remove(be)}(b||c)&&aZ(!1,b,c,!1)}
function bf(){M&&(M.Hide(),M=null)}}},38136:function(a,b,c){"use strict";c.d(b,{H:function(){return m}})
;var d=c(85557),e=c(4234),f=c(32130),g=c(60026),h=c(71644),i=c(54811),j=c(78440),k=c(69893),l=c(73863);c(13117)
;function m(a,b,c,m,n){const o=a,p=b,q=c,r=m,s=n;let t="",u="",v=!1,w=null,x=null;const y=(0,j.h1)(),z=(0,j.h1)();return{
Init:function(a,b,c){t=a,u=b,v=c},Clear:function(){y.Cancel(),z.Cancel(),w=null,x=null},GetCompanyGroups:A,
GetSortedAndFilteredGroupsList:async function(a,b,c){var e,f,g;let i=[...a];const j=new Map;if(b.m_search&&b.m_search.m_query){
const a=b.m_search;i=i.filter((b=>{const c=(0,h.zR)(a.m_query,b.name,!1,!1,!1,!1,!1,!1)
;return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),j.set(b.id,c.rank),!0)}))}
b.m_without_users&&(i=i.filter((a=>!(a.membersCount&&a.membersCount>0))))
;b.m_without_manager&&(i=i.filter((a=>!(a.managersCount&&a.managersCount>0))));if(b.m_created){const a=b.m_created
;i=i.filter((b=>b.createdTime&&(0,d.qS)(b.createdTime,a)))}
if(b.m_storage&&b.m_storage.length&&(!b.m_storage.includes(0)||!b.m_storage.includes(1))){const a=b.m_storage
;i=i.filter((b=>a.includes(0)?!0===b.serverOnly:!b.serverOnly))}
if(b.m_permissions&&b.m_permissions.length&&(!b.m_permissions.includes(0)||!b.m_permissions.includes(1))){
const a=b.m_permissions;i=i.filter((b=>a.includes(0)?!b.readOnly:!0===b.readOnly))}if(b.m_score&&b.m_score.length){
const a=b.m_score;for(let b=i.length-1;b>=0;b--){const c=await(0,d.g4)(i[b].securityStats)
;null!==c?c<=d.L7?a.includes(0)||i.splice(b,1):c<=d._3?a.includes(1)||i.splice(b,1):c<=d.ee?a.includes(2)||i.splice(b,1):a.includes(3)||i.splice(b,1):i.splice(b,1)
}}if(b.m_without_data)for(let h=i.length-1;h>=0;h--){await(0,d.NH)(i[h])>0&&i.splice(h,1)}
if(b.m_compromised)for(let h=i.length-1;h>=0;h--){const a=i[h],b=await(0,d.m8)(a.securityStats)
;(null==b?void 0:b.m_compromised)||i.splice(h,1)}if(b.m_sort){const a=b.m_sort
;if(0===a.m_sort_by)i.sort(((b,c)=>a.m_asc?b.name.localeCompare(c.name):c.name.localeCompare(b.name)));else if(4===a.m_sort_by)i.sort(((b,c)=>a.m_asc?(c.membersCount||0)-(b.membersCount||0):(b.membersCount||0)-(c.membersCount||0)));else if(5===a.m_sort_by){
const b=new Map;for(const a of i){const c=await(0,d.NH)(a);b.set(a.id,c)}i.sort(((c,d)=>{var e,f
;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0;return a.m_asc?h-g:g-h}))
}else if(2===a.m_sort_by)i.sort(((b,c)=>{const d=b.serverOnly?1:0,e=c.serverOnly?1:0;return a.m_asc?e-d:d-e
}));else if(3===a.m_sort_by)i.sort(((b,c)=>{const d=b.readOnly?1:0,e=c.readOnly?1:0;return a.m_asc?e-d:d-e
}));else if(6===a.m_sort_by){const b=new Map;for(const a of i){const c=null!==(f=await(0,
d.g4)(null!==(e=a.securityStats)&&void 0!==e?e:""))&&void 0!==f?f:0;b.set(a.id,c)}i.sort(((c,d)=>{var e,f
;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0;return a.m_asc?h-g:g-h}))
}else j.size>0&&(null===(g=b.m_search)||void 0===g?void 0:g.m_query)?i.sort(((a,b)=>{var c,d
;const e=null!==(c=j.get(a.id))&&void 0!==c?c:0;return(null!==(d=j.get(b.id))&&void 0!==d?d:0)-e
})):i.sort(((b,c)=>a.m_asc?b.name.localeCompare(c.name):c.name.localeCompare(b.name)))
}else i.sort(((a,b)=>a.name.localeCompare(b.name)));return i},GetReceivedAccounts:B,UpdateReceivedAccounts:async function(a){
await B(!0,a)},GetGroupDataItemsListWithoutFolders:async function(a,b){
const c=(await p.ListOwnedAndManagedReceivedAccounts(b)).find((b=>b.accountInfo.accountId===a));let d=""
;if(c)d="/"+c.accountInfo.name;else{const c=(await A(!1,b)).find((b=>b.id===a));c&&(d="/"+c.name)}if(""===d)return[];const h=[]
;return await(0,i.s_)(q,(async a=>{if(8!==a.type&&(!(0,e.Rf)(a.type)||4===a.type))return;if(8===a.type)return;let c;try{
c=await q.GetFile(a.path,"utf16",b)}catch(n){return void(0,k.au)(n)}if(!c)return;let d=null;try{d=JSON.parse(c)}catch(n){
return void(0,k.au)(n)}if(!d)return;const i=(0,e.hF)(a.path),j=(0,f.m6)(d,i);if(!j)return;a.path=(0,l.$b)(a.path,g.ZD)||a.path
;const m={m_item_info:a,m_item:j};h.push(m)}),{path:d,parts:103,deep:!0},b),h},GetGroupInfoFromPath:async function(a){
const b=(await A(!1,null)).find((b=>b.name===(0,e.em)(a)));if(!b)throw(0,k.ZU)(k.V2,"Shared folder is not found")
;const c=await(0,d.NH)(b);return(0,d.wj)(b,c)},RenameGroup:async function(a,b,c){try{
const d=(await B(!1,c)).find((b=>b.accountInfo.accountId===a));if(!d)throw(0,k.ZU)(k.V2,"Shared folder is not found")
;const e="/"+d.title;if(""===d.title)throw(0,k.ZU)(k.V2,"Shared folder is not found");await r.RenameSharedFolder(e,b,c),(0,
j.fI)(s.SyncInBackground(c))}catch(d){(0,k.au)(d)}},GetGroupsMapFromGroupsList:C,
GetSelectedUsersCommonGroupsToAdd:async function(a,b){let c=[],d=!0;const e=await A(!1,b);for(const f of a){
null==b||b.ThrowIfShouldStop();let a=await o.GetMemberGroups(f.m_id,null,b);if(a=a.filter((a=>!a.disabled)),
e.length===a.length){c=[];break}if(d)c=e.filter((b=>!a.some((a=>a.accountId===b.id)))),
d=!1;else if(c=c.filter((b=>!a.some((a=>a.accountId===b.id)))),!c.length)break}return c},
GetSelectedUsersCommonGroupsToDelete:async function(a,b){const c=[],d=C(await A(!1,b),"id");for(const e of a){
if(null==b||b.ThrowIfShouldStop(),!v&&(e.m_isAdmin||e.m_id===u))return[];const a=await o.GetMemberGroups(e.m_id,null,b)
;if("number"==typeof a)throw(0,k.ZU)(k.V2,"The return value shouldn't be a number");for(const b of a){if(b.disabled)continue
;const a=d.get(b.accountId);a&&!c.some((a=>a.id===b.accountId))&&c.push(a)}}return c}};async function A(a,b){if(!t)throw(0,
k.ZU)(k.VH,"AdminCenterGroupsData is not initialized, provide Company ID");return w&&!a||(w=await y.Execute({action:async a=>{
let b=await o.GetCompanyGroups(t,a);return b=b.filter((a=>a.name.toLowerCase()!==d.DC.toLowerCase()&&(!!v||a.isManager))),[...b]
}},b)),w}async function B(a,b){return x&&!a||(x=await z.Execute({
action:async a=>[...await p.ListOwnedAndManagedReceivedAccounts(a)]},b)),x}function C(a,b){const c=new Map
;for(const d of a)c.set("id"===b?d.id:d.name,d);return c}}},33094:function(a,b,c){"use strict";c.d(b,{W9:function(){return n},
lY:function(){return m},zs:function(){return o}})
;var d=c(46721),e=c(4153),f=c(40868),g=c(32105),h=c(63956),i=c(78440),j=c(69893),k=(c(13117),c(97490)),l=c(91764)._
;function m(a,b,c,m){const n=m.LocalizeString,o=b,p=c;let q=null;return{Create:async function(b,c){const[m,r]=(0,
k.Uw)(null),[s,t]=(0,k.Uw)(!0),[u,v]=(0,k.Uw)("");let w,x=null,y=null;return l("div",{className:"content"},l("div",{
className:"select-file-section"},l("span",{className:"title"
},await n("AdminCenter_UsersTabView_ImportUsers_CSV_File")),l("div",{className:"file-browse"},l("button",{className:"button",
onclick:function(){(0,h.PQ)((async()=>{if(x=await(0,h.tf)([".csv"]),!x)return void v("");const c=y?y.GetValue():"",g=await(0,
f.At)((0,e.TT)(x)),i=await(0,d.Ib)(g,c,p)
;v(x.name),i.users.length>a?B(await n("AdminCenter_UsersTabView_ImportUsers_No_Licenses_Text",[i.users.length.toString()]),{
action:()=>{b(null)},text:await n("AdminCenter_SettingsView_BuyMore_Text")}):B("",null)}),C,0,null,(a=>{(0,j.au)(a),(0,
j.r5)(a,j.kd)||B((0,j.EB)(a),null)}))}},await n("AdminCenter_UsersTabView_ImportUsers_SelectFile")),(a=>{const b=u(a)
;return b?l("span",{className:"selected-file-name loaded"},b):l("span",{className:"selected-file-name"
},n("AdminCenter_UsersTabView_ImportUsers_FileNotSelected"))}))),l("div",{className:"error-text large"},(a=>{const b=m(a);if(b){
const{text:a,link:c}=b,d=[l("fragment",null,a)];return c&&d.push(l("span",{className:"error-action",onclick:c.action},c.text)),d
}return[]})),l("div",{className:"instructions"},l("p",{className:"text"
},await n("AdminCenter_UsersTabView_ImportUsers_DescrCharsColOrder")),l("ul",{className:"columns-order-list"},l("li",{
className:"item"},l("span",{className:"title"
},await n("AdminCenter_UsersTabView_ImportUsers_OperType_Title")),` ${await n("AdminCenter_UsersTabView_ImportUsers_OperType_Text")}`),l("li",{
className:"item"},l("span",{className:"title"
},await n("AdminCenter_UsersTabView_ImportUsers_UserName_Title")),` ${await n("AdminCenter_UsersTabView_ImportUsers_UserName_Text")}`),l("li",{
className:"item"},l("span",{className:"title"
},await n("AdminCenter_Email_Title")),` ${await n("AdminCenter_UsersTabView_ImportUsers_Email_Text")}`),l("li",{className:"item"
},l("span",{className:"title"
},await n("AdminCenter_UsersTabView_ImportUsers_GroupName_Title")),` ${await n("AdminCenter_UsersTabView_ImportUsers_GroupName_Text")}`)),l("p",{
className:"text description"},await n("AdminCenter_UsersTabView_ImportUsers_DescrDelimeter")),l("p",{className:"example"
},l("span",{className:"title"},await n("AdminCenter_UsersTabView_ImportUsers_Example_Title")),l("span",{className:"text"
},`${await n("AdminCenter_UsersTabView_ImportUsers_Example1_Text")}`,l("br",null),`${await n("AdminCenter_UsersTabView_ImportUsers_Example2_Text")}`,l("br",null),`${await n("AdminCenter_UsersTabView_ImportUsers_Example3_Text")}`))),l("div",{
className:"send-email-section"},w=l(g.b_,{className:"send-email-checkbox",
text:await n("AdminCenter_UsersTabView_ImportUsers_SendInstructions"),checked:!0}),l("span",{className:"uncheck-text"
},await n("AdminCenter_UsersTabView_ImportUsers_UnckeckInstructions"))),o&&l("div",{className:"set-password"},y=(0,g.ap)({
title:await n("AdminCenter_UsersTabView_ImportUsers_Pwd_Placeholder"),maxLength:80}),l("span",{className:"note-text"
},await n("AdminCenter_UsersTabView_ImportUsers_Pwd_Text"))),l("div",{className:"buttons-bar"},l("button",{className:"button",
onclick:()=>c((0,j.JS)())},await n("Cmd_Cancel_Flat")),(a=>{const b=s(a),c=!u(a),d=m(a),e=b||c||d;return l("button",{
className:e?"button default-button disabled":"button default-button",onclick:e?null:z},n("AdminCenter_DialogButton_Import"))})))
;function z(){s(null)||(q=(0,i.YZ)({action:A}),(0,h.PQ)((async()=>{await(null==q?void 0:q.Execute(null))}),C,0,null,(a=>{(0,
j.au)(a),(0,j.r5)(a,j.kd)||B((0,j.EB)(a),null)})))}async function A(a){const c=y?y.GetValue():"",g=await(0,f.At)((0,
e.TT)(x)),h=await(0,d.Ib)(g,c,p);null==a||a.ThrowIfShouldStop();const i=[...h.groups];h.users.forEach((a=>{
a.groups&&a.groups.forEach((a=>{i.some((b=>b.name.toLowerCase()===a.name.toLowerCase()))||i.push({name:a.name})}))}))
;const j=w.GetChecked();b({m_users:h.users,m_groups:i,m_options:{sendNotifyEmail:j},m_csv_errors:h.errors})}function B(a,b){
r(a?{text:a,link:b}:null)}function C(){return t(!0),()=>t(!1)}},OnAfterShow:function(){},OnBeforeHide:function(){},
Focus:function(){},Dispose:function(){null==q||q.Cancel()}}}function n(a,b,c,d,e){const f=d.LocalizeString,j=c;let k=null
;const m={Create:async function(c,d){let m,n,o,p;let q=!0;const r=l("div",{className:"content"},m=l("div",{className:"wait-text"
},await f("AdminCenter_UsersTabView_ImportUsers_Progress_Text")),n=l("div",{className:"import-failed-text hidden"
},await f("AdminCenter_UsersTabView_ImportUsers_Failed_Text")),o=l(g.Zq,{gradient:!0}),l("div",{className:"buttons-bar"
},p=l("div",{className:"button default-button hidden disabled",onclick:function(){if(q)return;c(null)}
},await f("Cmd_Close_Flat"))));return function(){0===a.m_users.length?t():s()}(),r;function s(){(0,h.SE)(n),(0,h.SE)(p),(0,
h.aZ)(p),q=!0,(0,h.l5)(m),(0,h.l5)(o),k=(0,i.YZ)({action:async d=>{await async function(d){
const e=0!==a.m_groups.length?await j.ImportCompanyGroups(b,a.m_groups,!0,d):[];null==d||d.ThrowIfShouldStop()
;const f=[...a.m_users];f.map((a=>(a.groups&&a.groups.map((a=>{var b,c
;for(const d of e)if(a.name.toLowerCase()===d.name.toLowerCase()){a.name=d.name,
a.password=null!==(b=d.password)&&void 0!==b?b:"",a.id=null!==(c=d.id)&&void 0!==c?c:"";break}return a})),a)))
;const g=await j.ImportCompanyMembers(b,f,a.m_options,d);null==d||d.ThrowIfShouldStop()
;const h=g.filter((a=>a.existsBefore||a.joinedBefore||a.error)),i=g.filter((a=>!a.existsBefore&&!a.joinedBefore&&!a.error)),k=e.filter((a=>!(a.existsBefore||a.error))),l=e.filter((a=>void 0!==a.error))
;if(0===i.length&&0===k.length)return void t();c({m_users_created:i,m_users_failed:h,m_groups_created:k,m_groups_failed:l,
m_csv_errors:a.m_csv_errors})}(d)}}),(0,i.fI)(k.Execute(e))}function t(){(0,h.SE)(m),(0,h.SE)(o),(0,h.l5)(n),(0,h.r9)(p),(0,
h.l5)(p),q=!1}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){null==k||k.Cancel()}}
;return m}function o(a,b){const c=b.LocalizeString;return{Create:async function(b,d){
const f=await c("AdminCenter_UsersTabView_ImportUsers_UsersAdded_Text",[(0,
e.bf)(a.m_users_created.length)]),g=a.m_users_failed.length+a.m_csv_errors.filter((a=>1===a.type)).length,h=a.m_groups_failed.length+a.m_csv_errors.filter((a=>2===a.type)).length,i=await c("AdminCenter_UsersTabView_ImportUsers_UsersError_Text",[(0,
e.bf)(g)]),j=await c("AdminCenter_UsersTabView_ImportUsers_GroupsCreated_Text",[(0,
e.bf)(a.m_groups_created.length)]),k=await c("AdminCenter_UsersTabView_ImportUsers_GroupsError_Text",[(0,e.bf)(h)])
;return l("div",{className:"content"},l("span",{className:"title"
},await c("AdminCenter_UsersTabView_ImportUsers_Success_Title")),l("ul",{className:"info-list"
},0!==a.m_users_created.length?l("li",{className:"info"},l("div",{className:"ok-icon"}),l("div",{className:"text"
}," ",f," ")):null,0!==g?l("li",{className:"info"},l("div",{className:"fail-icon"}),l("div",{className:"text"
}," ",i," ")):null,0!==a.m_groups_created.length?l("li",{className:"info"},l("div",{className:"ok-icon"}),l("div",{
className:"text"}," ",j," ")):null,0!==h?l("li",{className:"info"},l("div",{className:"fail-icon"}),l("div",{className:"text"
}," ",k," ")):null),l("div",{className:"buttons-bar"},l("button",{className:"button default-button",onclick:()=>b()
},await c("Cmd_Close_Flat"))))},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){}}}},
54019:function(a,b,c){"use strict";c.d(b,{y:function(){return i}});var d=c(55819),e=c(4153),f=c(73863),g=c(63956),h=c(91764)._
;async function i({localization:a,provider:b,ad_connector:c,on_disable:i,on_go_back:j}){var k,l,m,n,o,p;const q=a.LocalizeString
;let r,s,t=await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period_Manual");if(null==c?void 0:c.adSyncSettings){
const a=c.adSyncSettings;if(a.periodicSyncEnabled&&a.syncPeriod){
const b=await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period_Unit");t=`${a.syncPeriod} ${b}`}}const u=h("div",{
className:"provider-view"},h("div",{className:"back-section ad-connector"},h("div",null,h("div",{
className:b.active?"icon icon-back hidden":"icon icon-back",onclick:j}),h("div",{className:(0,f.bt)("icon"," ",(0,d.pq)((0,
e.TT)(b.type)))}),h("div",{className:"text"},(0,d.n)((0,e.TT)(b.type))," "),h("div",{className:"icon icon-info hidden",
title:await q("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")})),h("a",{className:"button default-button",
href:"https://www.roboform.com/tools/RoboFormADConnectorSetup.zip"
},await q("AdminCenter_IntegrationView_AD_Connector_Download_Button"))),h("div",{className:"tab-views"},h("div",{
className:"tab-view-scim tab-view"},r=h("div",{className:"status-section-wrapper hidden"},h("div",{className:"info-message"
},h("div",{className:"icon"}),b.active?h((function(){return h("div",{className:"description"
},q("AdminCenter_IntegrationView_AD_Connector_Description_Text"))}),null):h((function(){return h("div",{className:"description"
},q("AdminCenter_IntegrationView_AD_Connector_Setup_Text")," ",h("a",{className:"link",target:"_blank",
href:"https://help.roboform.com/hc/en-us/articles/115003728831-Active-Directory-Integration"
},q("AdminCenter_IntegrationView_AD_Connector_Setup_Link")),".")}),null)),h("div",{className:"status-section"},h("div",{
className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status"),":"),h("div",{className:"icon-text"},h("div",{
className:"icon status-not-complete"}),h("div",{className:"text status"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Not_Connected")))))),s=h("div",{
className:"status-section-wrapper hidden"},h("div",{className:"info-message"},h("div",{className:"icon"}),h("div",{
className:"description"},await q("AdminCenter_IntegrationView_AD_Connector_Description_Text"))),h("div",{
className:"status-section"},h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status"),":"),h("div",{className:"icon-text"},h("div",{
className:"icon status-complete"}),h("div",{className:"text status"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Connected"))),h("div",{className:"text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Last"),":"),h("button",{
className:"button warning-button aligned-right",onclick:()=>i(b)
},await q("AdminCenter_IntegrationView_AD_Connector_Disable_Button"))),h("div",{className:"status-row"},h("div",{
className:"title"},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Client"),":"),h("div",{className:"text"
},null==c?void 0:c.accountName)),h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Location"),":"),h("div",{className:"text"
},null==c?void 0:c.computer)),h("div",{className:"status-row"},h("div",{className:"title"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_CDomain"),":"),h("div",{className:"text"
},null===(k=null==c?void 0:c.adSyncSettings)||void 0===k?void 0:k.adDomain)),h("div",{className:"status-row"},h("div",{
className:"title"},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Period"),":"),h("div",{className:"text"
},t))),h("div",{className:"devider"}),h("div",{className:"sync-section"},h("div",{className:"sync-text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Groups")),h("ul",null,null===(m=null===(l=null==c?void 0:c.adSyncSettings)||void 0===l?void 0:l.filters)||void 0===m?void 0:m.map((a=>h("li",null,a))))),h("div",{
className:"devider"}),h("div",{className:"sync-section"},h("div",{className:"sync-text"
},await q("AdminCenter_IntegrationView_AD_Connector_Sync_Status_Rules")),h("ul",null,null===(o=null===(n=null==c?void 0:c.adSyncSettings)||void 0===n?void 0:n.syncRules)||void 0===o?void 0:o.map((({name:a,value:b})=>h("li",null,h("div",null,a,h("span",null,b)))))))))))
;return(null===(p=b.provisioning)||void 0===p?void 0:p.enable)?((0,g.SE)(r),(0,g.l5)(s)):((0,g.SE)(s),(0,g.l5)(r)),u}},
55819:function(a,b,c){"use strict";c.d(b,{n:function(){return y},pq:function(){return x},ug:function(){return w}})
;var d=c(54019),e=c(78220),f=c(30045),g=c(30651),h=c(98266),i=c(89369),j=c(94652),k=c(12131),l=c(97490),m=c(32105),n=c(63956),o=c(73863),p=c(40868),q=c(4153),r=c(13113),s=c(69893),t=c(78440),u=(c(13117),
c(95399)),v=c(91764)._;function w(a,b,c,w,z,A,B,C){const D=a,E=b,F=c,G=w,H=z,I=B,J=B.LocalizeString;let K=!0;const L=A,M=(0,
t.tG)(),N=12e4;let O="",P=null;const[Q,R]=(0,l.Uw)(!1),[S,T]=(0,l.Uw)("");let U;const[V,W]=(0,l.Uw)(null),[X,Y]=(0,
l.Uw)([]),[Z,aa]=(0,l.Uw)(null),[ab,ac]=(0,l.Uw)([]),[ad,ae]=(0,l.Uw)(!1),[af,ag]=(0,l.Uw)(!1),ah=(0,t.tG)(),ai=(0,
t.tG)(),aj=(0,i.fA)();let ak=new Map,al="",am="",an="",ao="",ap="",aq="",ar="",as="";const at={Create:async function(){
return await(0,l.Mj)((async a=>{C.GetLanguageTag(a),am=await J("AdminCenter_Email_Empty_Error"),
al=await J("AdminCenter_IntegrationView_ADConnector_Warning"),
an=await J("AdminCenter_IntegrationView_SSO_ApplicationID_Azure_Text"),
ao=await J("AdminCenter_IntegrationView_SSO_OIDC_Azure_URL_Text"),ap=await J("AdminCenter_IntegrationView_SSO_ClientID_Text"),
aq=await J("AdminCenter_IntegrationView_SSO_OIDC_URL_Text"),ar=await J("AdminCenter_IntegrationView_SSO_ApplicationID_Text"),
as=await J("AdminCenter_IntegrationView_SSO_OIDC_PingOne_URL_Text"),ak=new Map([["azure",{app_id:an,oidc:ao,
scim_help_link:"https://help.roboform.com/hc/en-us/articles/19684686751373-SCIM-provisioning-integration-with-Azure-AD",
sso_help_link:"https://help.roboform.com/hc/en-us/articles/24498839018125-SSO-integration-with-Azure-Entra"}],["okta",{
app_id:ap,oidc:aq,
scim_help_link:"https://help.roboform.com/hc/en-us/articles/19678853231373-SCIM-provisioning-integration-with-Okta",
sso_help_link:"https://help.roboform.com/hc/en-us/articles/24498914651533-SSO-integration-with-Okta"}],["google-workspace",{
app_id:await J("AdminCenter_IntegrationView_Google_SSO_Client_Id_Web_App"),oidc:aq,
scim_help_link:"https://help.roboform.com/hc/en-us/articles/35834047952397-SCIM-provisioning-integration-with-Google-Workspace",
sso_help_link:"https://help.roboform.com/hc/en-us/articles/35939547606541-SSO-Integration-with-Google-Workspace"}],["pingone",{
app_id:ap,oidc:as,
scim_help_link:"https://help.roboform.com/hc/en-us/articles/28265182933005-SCIM-provisioning-integration-with-Ping-Identity",
sso_help_link:"https://help.roboform.com/hc/en-us/articles/24498944458637-SSO-integration-with-Ping-Identity"}],["onelogin",{
app_id:ar,oidc:aq,
scim_help_link:"https://help.roboform.com/hc/en-us/articles/19712942735885-SCIM-provisioning-integration-with-OneLogin",
sso_help_link:"https://help.roboform.com/hc/en-us/articles/24498999502989-SSO-integration-with-Onelogin"}],["custom",{app_id:ar,
oidc:aq}]])})),P=v(m.J2,{always_visible:!1,class_name:"tab-view-integration tab-view hidden"},v("div",{
className:"integration-container"},(a=>{const b=a.GetProgress();return v("div",null,(a=>{const c=Q(a),f=af(a);return c?v("div",{
className:"loading-view"},v("div",{className:"action-progress-overlay-circle size48"})):f?async function(a){
if(C.GetLanguageTag(a),!X(a).length)return v(av,null);const b=function(a){const b=X(a).find((a=>a.active));if(b)return b
;if(Z(a))return Z(a);return null}(a);if(b)return async function(a){switch(a.type){case"google-workspace":
return async function(a){var b;let c;const d=a.provisioning&&!a.provisioning.hidden,f=a.sso&&!a.sso.hidden;let g=0
;(!d||!a.provisioning.enable&&(null===(b=a.sso)||void 0===b?void 0:b.enable))&&(g=1);const[i,u]=(0,l.Uw)(g),w=v("div",{
className:"provider-view"},v("div",{className:"back-section"},v("button",{
className:(null==a?void 0:a.active)?"icon icon-back hidden":"icon icon-back",onclick:aC}),v("div",{className:(0,
o.bt)("icon"," ",x("google-workspace"))}),v("div",{className:"text"},y("google-workspace")," "),v("div",{
className:"icon icon-info hidden",title:await J("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")
})),(async a=>v("div",{className:"tab-selector"},d&&v(aG,{
label:J("AdminCenter_IntegrationView_Automated_Provisioning_Title_Text"),selected:0===i(a),onClick:()=>u(0)}),f&&v(aG,{
label:J("AdminCenter_IntegrationView_SSO_Title_Text"),selected:1===i(a),onClick:()=>u(1)}))),v("div",{className:"tab-views"
},(b=>0===i(b)?v(z,null):1===i(b)?v(aA,{isGoogleWorkspace:!0,provider:a}):v("div",null))));return w;async function z(){var b,d
;const[f,g]=(0,l.Uw)((null===(b=a.provisioning)||void 0===b?void 0:b.enable)?0:1);let i=null!==(d=a.id)&&void 0!==d?d:null
;const o=(0,t.h1)();return v("div",{className:"tab-view-scim tab-view"},(a=>{switch(f(a)){case 0:return v(w,null);case 1:
return v(u,null);case 2:return v(x,null);case 3:return v(z,null)}}));function u(){const[b,d]=(0,l.Uw)(!0),[e,f]=(0,
l.Uw)(!1),[h,k]=(0,l.Uw)(""),[o,q]=(0,l.Uw)(null);return v("div",{className:"setup-section"},v("div",{className:"title"
},J("AdminCenter_IntegrationView_Google_Provisioning_Step_1")),v("div",{className:"info-message"},v("div",{className:"icon"
}),v("div",{className:"description"},J("AdminCenter_IntegrationView_Google_Provisioning_Info_Text")," ",v("a",{className:"link",
target:"_blank",
href:"https://help.roboform.com/hc/en-us/articles/35834047952397-SCIM-provisioning-integration-with-Google-Workspace"
},J("AdminCenter_IntegrationView_Google_Provisioning_Info_Link")),".")),v("div",{className:"server-section"},v("div",{
className:"input-title"},J("AdminCenter_IntegrationView_Google_Admin_Email_Text")),v("div",{className:"input-copy-section"
},c=v("input",{type:"text",disabled:!1,value:"",autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1,
oninput:w})),(a=>h(a)?v("div",{className:"error-text"},h(a)):[])),v("div",{className:"token-section"},v("div",{
className:"input-title"},J("AdminCenter_IntegrationView_Google_Account_Key_Text")),v("div",{className:"button-with-info"
},v("button",{className:"button",onclick:x},J("AdminCenter_IntegrationView_Google_Upload_JSON_Text")),v("div",{
className:"question"},v("div",{className:"popup"
},J("AdminCenter_IntegrationView_Google_Upload_JSON_Tooltip")))),(a=>o(a)?v("textarea",{className:"credentials-area",readOnly:!0
}," ",o(a)):[])),v("div",{className:"remark"},J("AdminCenter_IntegrationView_Google_Provisioning_Step_1_Remark")),(a=>{
const c=b(a),d=e(a);return v("div",{className:"tab-action-bar"},v("div",{
className:"button-with-progress"+(d?" show-progress":"")},v("button",{className:"button default-button"+(c?" disabled":""),
onclick:c?null:()=>z()},J("AdminCenter_Next_Text")),v(m.Zq,{gradient:!0})))}));function u(){const a=c.value.trim(),b=o(null)
;return a.length>0&&null!==b}function w(){k(""),d(!u())}function x(){(0,t.fI)((async()=>{await y(),d(!u())})())}
async function y(){const a=await(0,n.tf)([".json"]);if(!a)return;const b=await(0,p.wv)(a);try{JSON.parse(b),q(b),k("")}catch(c){
k((0,s.EB)(c))}}function z(){k("");const b=c.value;if(!b)return k(am),void d(!0);const e=(0,r.MA)(b)
;if(!e.ok)return k(e.description||"Invalid Email"),void d(!0);const h=o(null);if(!h)return k("Credentials are missing"),
void d(!0);const l=JSON.parse(h);if(!l||!(0,j.IQ)(l))return k("Invalid service account credentials"),void d(!0);(0,
n.PQ)((async()=>{var c,d;const e=(0,t.f4)(null,null,null),f={active:!0,provisioning:{type:"google",enable:!0,google:{email:b,
credentials:l,scope:"none"}}};(null==a?void 0:a.id)?f.id=null==a?void 0:a.id:f.idpId=null==a?void 0:a.idpId
;const h=null===(c=(await D.UpdateCompanyIntegrationSettings(H,[f],e)).providers)||void 0===c?void 0:c.find((a=>!0===a.active))
;h?(i=null!==(d=h.id)&&void 0!==d?d:null,g(2)):k("Setup Google provisioning failed")}),(()=>(f(!0),()=>{f(!1)
})),0,null,(a=>k((0,s.EB)(a))))}}function w(){var b,c;const[d,e]=(0,l.Uw)([]),[f,h]=(0,l.Uw)(""),[j,o]=(0,l.Uw)(!1),[p,q]=(0,
l.Uw)(!1),r=(0,t.h1)(),u=null===(c=null===(b=a.provisioning)||void 0===b?void 0:b.google)||void 0===c?void 0:c.scope
;return"only-selected-groups"===u&&(0,t.fI)((async()=>{try{o(!0),e(await B(null))}catch(a){if((0,
k.tM)(a,7))return void h(await J("AdminCenter_IntegrationView_Google_Provisioning_Must_Update"));throw a}finally{o(!1)}})()),
v("div",{className:"remove-section"},v("div",{className:"status-section"},v("div",{className:"text status"
},J("AdminCenter_IntegrationView_Provisioning_Status_Text")),v("div",{className:"icon-text"},v("div",{
className:"icon status-complete"}),v("div",{className:"text status"
},J("AdminCenter_UsersTabView_UserStatus_Active_Text"))),v("div",{className:"flex-cell"}),v("div",{className:"text"
},aH(a)),v("div",{className:"flex-cell"}),(a=>v("div",{className:"button-with-progress sync-now"+(p(a)?" show-progress":"")
},v("button",{className:"button default-button",onclick:w
},J("AdminCenter_IntegrationView_Sync_Now_Provisioning_Button")),v(m.Zq,{gradient:!0}))),v("button",{
className:"button warning-button",onclick:E},J("AdminCenter_IntegrationView_Remove_Provisioning_Button"))),aJ(),v("div",{
className:"info-message"},v("div",{className:"icon"}),v("div",{className:"description"
},J("AdminCenter_IntegrationView_Remove_Provisioning_Text"))),(a=>f(a)?v("div",{className:"error-text"},f(a)):[]),v("div",{
className:"groups-title"},J("AdminCenter_IntegrationView_Google_Provisioning_For"),"none"===u&&[v("div",{className:"title"
}," ",J("AdminCenter_IntegrationView_Google_Provisioning_Scope_No_One")," "),v("div",{className:"remark"
}," ",J("AdminCenter_IntegrationView_Google_Provisioning_Scope_No_One_Remark")," ")],"all"===u&&[v("div",{className:"title"
}," ",J("AdminCenter_IntegrationView_Google_Provisioning_Scope_All")," "),v("div",{className:"remark"
}," ",J("AdminCenter_IntegrationView_Google_Provisioning_Scope_All_Remark")," ")]),v("div",{className:"groups-selector"},(a=>{
if("only-selected-groups"===u){const b=d(a);return j(a)?v("div",{className:"loading-view"},v("div",{
className:"action-progress-overlay-circle size48"})):v("div",{className:"groups-list"},b.map((a=>{
if(a.shouldBeProvisioned)return v("div",{className:"group-list-item"},a.groupName)})))}}),v("button",{
className:"change-assigment-button",onclick:()=>g(3)},J("AdminCenter_IntegrationView_Google_Provisioning_Change_Assignment"))))
;function w(){(0,n.PQ)((async()=>{var b,c,d,e,f;const g=(0,t.f4)(null,null,null),h={id:i||a.id,active:!0,provisioning:{
type:"google",enable:!0}
},j=null===(b=(await D.UpdateCompanyIntegrationSettings(H,[h],g)).providers)||void 0===b?void 0:b.find((a=>a.active));if(j){
const a=await J("AdminCenter_IntegrationView_Google_Provisioning_Sync_now_Notification",[y(null!==(c=j.type)&&void 0!==c?c:"")])
;C.ShowNotification(a,null,null)
;const b=null===(f=null===(e=null===(d=j.provisioning)||void 0===d?void 0:d.google)||void 0===e?void 0:e.stats)||void 0===f?void 0:f.lastSyncedTime
;await r.Execute({action:async a=>{for(var c,d,e,f;;){await(0,t.Gu)(3e4,a)
;const g=null===(c=(await D.GetCompanyIntegrationSettings(H,a)).providers)||void 0===c?void 0:c.find((a=>a.active))
;if((null===(f=null===(e=null===(d=null==g?void 0:g.provisioning)||void 0===d?void 0:d.google)||void 0===e?void 0:e.stats)||void 0===f?void 0:f.lastSyncedTime)!==b)break
}}},g);const h={event:9};G.onEvent.CallAllSync([h]),await ax(!1,g)}}),(()=>(q(!0),()=>{q(!1)})),0,null,(a=>h((0,s.EB)(a))))}}
function x(){return v("div",{className:"setup-section"},v("div",{className:"title"
},J("AdminCenter_IntegrationView_Google_Provisioning_Step_2")),v("div",{className:"info-message"},v("div",{className:"icon"
}),v("div",{className:"description"},J("AdminCenter_IntegrationView_Google_Provisioning_Step_2_Description"))),v(A,{
onBackButtonClicked:()=>g(1),isInitialSetup:!0}))}function z(){return v("div",{className:"setup-section"},v("div",{
className:"title"},J("AdminCenter_IntegrationView_Google_Provisioning_Sync_Settings")),v(A,{onBackButtonClicked:()=>g(0),
isInitialSetup:!1}))}function A(b){var c,d,f
;const[g,j]=(0,l.Uw)(null!==(f=null===(d=null===(c=a.provisioning)||void 0===c?void 0:c.google)||void 0===d?void 0:d.scope)&&void 0!==f?f:"none"),[o,p]=(0,
l.Uw)([]),[r,u]=(0,l.Uw)([]),[w,x]=(0,l.Uw)(""),[z,A]=(0,l.Uw)(!1),[E,F]=(0,l.Uw)(!1),[K,L]=(0,l.Uw)(!1);return(0,t.fI)((0,
l.Mj)((async a=>{if("only-selected-groups"===g(a))try{F(!0),L(!0),p(await B(a.GetProgress())),L(!1)}catch(b){if((0,
k.tM)(b,7))return void x(await J("AdminCenter_IntegrationView_Google_Provisioning_Must_Update"));throw b}finally{F(!1)
}else p([]),F(!1),L(!1)}))),v("div",{className:"scope-selector"},v("div",{className:"remark"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_Remark")),(a=>w(a)?v("div",{className:"error-text"},w(a)):[]),(a=>{
const c=a.GetProgress();return v("div",{className:"scope-radio"},v("div",{
className:"scope-radio-option"+("none"===g(a)?" active":""),onclick:()=>j("none")},v("div",{
className:"scope-radio-option-text-content"},v("div",{className:"scope-radio-option-title"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_No_One")),v("div",{className:"scope-radio-option-remark"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_No_One_Remark")))),v("div",{
className:"scope-radio-option"+("all"===g(a)?" active":""),onclick:()=>j("all")},v("div",{
className:"scope-radio-option-text-content"},v("div",{className:"scope-radio-option-title"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_All")),v("div",{className:"scope-radio-option-remark"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_All_Remark")))),v("div",{
className:"scope-radio-option"+("only-selected-groups"===g(a)?" active":""),onclick:()=>j("only-selected-groups")},v("div",{
className:"scope-radio-option-text-content"},v("div",{className:"scope-radio-option-title"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_Selected")),v("div",{className:"scope-radio-option-remark"
},J("AdminCenter_IntegrationView_Google_Provisioning_Scope_Selected_Remark")))),(a=>{const b=g(a),d=o(a),e=r(a),f=E(a)
;return v("div",{className:"groups-selector"},"only-selected-groups"===b&&d.map((a=>{
const b=e.find((b=>b.googleWorkspaceId===a.googleWorkspaceId&&void 0!==b.shouldBeProvisioned));if(b){
if(b.shouldBeProvisioned)return v("div",{className:"group-list-item"},a.groupName)
}else if(a.shouldBeProvisioned)return v("div",{className:"group-list-item"},a.groupName);return v("fragment",null)
})),"only-selected-groups"===b&&(f?v("div",{className:"loading-view"},v("div",{className:"action-progress-overlay-circle size48"
})):d.length>0?v("button",{className:"select-groups",onclick:()=>(0,t.fI)(N())
},J("AdminCenter_IntegrationView_Google_Select_Groups")):v("div",{className:"no-groups-found"},v("div",{
className:"no-groups-found-text"},J("AdminCenter_IntegrationView_Google_Provisioning_No_Groups_Found")),v("button",{
className:"reload-groups",onclick:()=>(0,t.fI)((async()=>{F(!0),p(await B(c)),F(!1)})())
},J("AdminCenter_IntegrationView_Google_Provisioning_No_Groups_Found_Refresh")))))}),v("div",{
className:"buttons-row tab-action-bar"},v("button",{className:"back-button",onclick:b.onBackButtonClicked
},J("AdminCenter_Back_Text")),(a=>{const d=K(a),e=z(a);return v("div",{className:"button-with-progress"+(e?" show-progress":"")
},v("button",{className:"button default-button"+(d?" disabled":""),onclick:d?null:()=>M(c)
},b.isInitialSetup?J("AdminCenter_IntegrationView_Google_Activate_Integration"):J("AdminCenter_EditorButton_Apply")),v(m.Zq,{
gradient:!0}))})))}));function M(b){(0,n.PQ)((async()=>{var c,d;const e=g(null),f={active:!0,provisioning:{type:"google",
enable:!0,google:{scope:e}}};i||a.id?f.id=i||a.id:f.idpId=null==a?void 0:a.idpId
;const h=await D.UpdateCompanyIntegrationSettings(H,[f],b);if("only-selected-groups"===e)try{
await D.SetCompanyGoogleWorkspaceGroupStates({groups:r(null)},b)}catch(l){if((0,
k.tM)(l,7))return void x(await J("AdminCenter_IntegrationView_Google_Provisioning_Must_Update"));throw l}
const j=null===(c=h.providers)||void 0===c?void 0:c.find((a=>a.active));if(j){
const a=await J("AdminCenter_IntegrationView_UpdateProvisioning_Notification",[y(null!==(d=j.type)&&void 0!==d?d:"")])
;C.ShowNotification(a,null,null);const c={event:9};G.onEvent.CallAllSync([c]),await ax(!1,b)
}else x("Setup Google provisioning failed")}),(()=>(A(!0),()=>{A(!1)})),0,null,(a=>x((0,s.EB)(a))))}async function N(){
const a=await J("AdminCenter_EditorButton_Apply"),b=await J("AdminCenter_Group_Name_Text"),c=await J("Cmd_Cancel_Flat"),d=await J("AdminCenter_IntegrationView_Google_Provisioning_Search_Placeholder"),f=await J("AdminCenter_IntegrationView_Google_Provisioning_Search_Text"),g=o(null),i=r(null),j=[]
;for(const e of g){const a=i.find((a=>a.googleWorkspaceId===e.googleWorkspaceId))
;a?a.shouldBeProvisioned&&j.push(e):e.shouldBeProvisioned&&j.push(e)}const k=(0,h.Sw)((0,q.TT)(P),(0,h.p)((0,
h.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await J("AdminCenter_IntegrationView_Google_Select_Groups"),null),(()=>(0,
e.F)((()=>o(null)),j,{fields:[{key:"groupName",label:b}],translations:{ok_btn:a,cancel_btn:c,search_placeholder:d,text:f},
on_ok_callback:m},I)))),l=(0,t.f4)(null,null,null);function m(a){
const b=o(null).filter((a=>void 0!==a.googleWorkspaceId)).map((b=>({googleWorkspaceId:(0,q.TT)(b.googleWorkspaceId),
shouldBeProvisioned:a.includes(b)})));u(b),L(!1)}await k.Execute(l)}}async function B(a){return o.Execute({action:async a=>{
const b=(await D.GetCompanyGoogleWorkspaceGroupStates({},a)).groups
;return b?b.sort(((a,b)=>a.groupName&&b.groupName?a.groupName.toLowerCase()<b.groupName.toLowerCase()?-1:a.groupName.toLowerCase()>b.groupName.toLowerCase()?1:0:0)):[]
}},a)}function E(){(0,n.PQ)((async()=>{var b;if(await aD()){const c=(0,t.f4)(null,null,null),d={active:!1,
id:null==a?void 0:a.id,provisioning:{type:"google",enable:!1}};a.sso&&a.sso.enable&&(d.active=!0),
await D.UpdateCompanyIntegrationSettings(H,[d],c)
;const e=await J("AdminCenter_IntegrationView_RemoveProvisioning_Notification",[y(null!==(b=a.type)&&void 0!==b?b:"")])
;C.ShowNotification(e,null,null);const f={event:9};G.onEvent.CallAllSync([f]),await ax(!1,c)}}),(()=>()=>{}),0,null,(a=>aM((0,
s.EB)(a))))}}}(a);case"ad-connector":return(0,d.y)({localization:I,provider:a,ad_connector:U,on_disable:az,on_go_back:aC})
;default:return async function(a){var b;const c=a.type||"";let d,e
;const f=a.provisioning&&!a.provisioning.hidden,g=a.sso&&!a.sso.hidden;let h=0
;(!f||!a.provisioning.enable&&(null===(b=a.sso)||void 0===b?void 0:b.enable))&&(h=1);const[i,j]=(0,l.Uw)(h),k=!1,[m,p]=(0,
l.Uw)(""),q=v("div",{className:"provider-view"},v("div",{className:"back-section"},d=v("button",{
className:(null==a?void 0:a.active)?"icon icon-back hidden":"icon icon-back",onclick:aC}),v("div",{className:(0,
o.bt)("icon"," ",x(c))}),v("div",{className:"text"},y(c)," "),e=v("div",{className:"icon icon-info hidden",
title:await J("AdminCenter_IntegrationView_Remove_Provisioning_Tooltip")})),(async a=>v("div",{className:"tab-selector"
},f&&v(aG,{label:J("AdminCenter_IntegrationView_SCIM_Title_Text"),selected:0===i(a),onClick:()=>j(0)}),g&&v(aG,{
label:J("AdminCenter_IntegrationView_SSO_Title_Text"),selected:1===i(a),onClick:()=>j(1)}))),v("div",{className:"tab-views"
},(b=>1===i(b)?v(aA,{isGoogleWorkspace:!1,provider:a}):v(r,null))));function r(){var b;return v("div",{
className:"tab-view-scim tab-view"},(null===(b=a.provisioning)||void 0===b?void 0:b.enable)?v(w,null):v(u,null))}function u(){
var b,c;const d=(null===(c=null===(b=a.provisioning)||void 0===b?void 0:b.scim)||void 0===c?void 0:c.serverUrl)||""
;return v("div",{className:"setup-section"},v("div",{className:"info-message"},v("div",{className:"icon"}),v("div",{
className:"description"},J("AdminCenter_IntegrationView_SCIM_Info_Description_Text2"),aI(a,"scim"))),v("div",{
className:"server-section"},v("div",{className:"input-title"},J("AdminCenter_IntegrationView_SCIM_ServerUrl_Text")),v("div",{
className:"input-copy-section"},v("input",{type:"text",disabled:!0,value:d,autocomplete:"off",autocorrect:"off",
autocapitalize:"off",spellcheck:!1}),v("button",{className:"button",disabled:!d,onclick:()=>z(d)
},J("Editor_Cmd_Copy_Flat")))),v("div",{className:"token-section"},v("div",{className:"input-title"
},J("AdminCenter_IntegrationView_SCIM_Token_Text")),v("div",{className:"input-copy-section"},(async a=>[v("input",{type:"text",
disabled:!0,placeholder:"Generate New Token",value:m(a),autocomplete:"off",autocorrect:"off",autocapitalize:"off",spellcheck:!1
}),v("button",{className:"button "+(m(a)?"":"disabled"),onclick:A},J("Editor_Cmd_Copy_Flat"))])),v("button",{
className:"button default-button",onclick:F
},J("AdminCenter_IntegrationView_SCIM_Token_Generate_Text"))),(async a=>m(a)?v("div",{className:"info-message"},v("div",{
className:"icon"}),v("div",{className:"description"},J("AdminCenter_IntegrationView_After_Token_Generated_Text"))):[]))}
function w(){return v("div",{className:"remove-section"},v("div",{className:"status-section"},v("div",{className:"text status"
},J("AdminCenter_IntegrationView_Provisioning_Status_Text")),v("div",{className:"icon-text"},v("div",{
className:"icon status-complete"}),v("div",{className:"text status"
},J("AdminCenter_UsersTabView_UserStatus_Active_Text"))),v("div",{className:"flex-cell"}),v("div",{className:"text"
},aH(a)),v("div",{className:"flex-cell"}),v("button",{className:"button warning-button",onclick:I
},J("AdminCenter_IntegrationView_Remove_Provisioning_Button"))),aJ(),v("div",{className:"info-message"},v("div",{
className:"icon"}),v("div",{className:"description"},J("AdminCenter_IntegrationView_Remove_Provisioning_Text"))))}return q
;function z(a){k||(0,t.fI)(L.WriteText(a))}function A(){m(null)&&(0,t.fI)(B(m(null),N))}async function B(a,b){
await L.WriteText(a),O=a,b&&E(b)}function E(a){M.Start((async b=>{await(0,t.Gu)(a,b);let c="";try{c=await L.ReadText()
}catch(d){}if(O===c||!c)try{await L.WriteText(" "),O=""}catch(d){}}))}function F(){(0,n.PQ)((async()=>{var b,c,f,g;const h=(0,
t.f4)(null,null,null),i={active:!0,provisioning:{type:"scim",enable:!0,scim:{generateNewToken:!0}}}
;(null==a?void 0:a.id)?i.id=null==a?void 0:a.id:i.idpId=null==a?void 0:a.idpId
;const j=null===(b=(await D.UpdateCompanyIntegrationSettings(H,[i],h)).providers)||void 0===b?void 0:b.find((a=>a.active))
;if(j){const a=(null===(f=null===(c=j.provisioning)||void 0===c?void 0:c.scim)||void 0===f?void 0:f.token)||"";(0,n.SE)(d),(0,
n.l5)(e),p(a)
;const b=await J("AdminCenter_IntegrationView_AddProvisioning_Notification",[y(null!==(g=j.type)&&void 0!==g?g:"")])
;C.ShowNotification(b,null,null);const h={event:9};G.onEvent.CallAllSync([h])}else aM("Generate token failed")
}),(()=>()=>{}),0,null,(a=>aM((0,s.EB)(a))))}function I(){(0,n.PQ)((async()=>{var b;if(await aD()){const c=(0,
t.f4)(null,null,null),d={active:!1,id:null==a?void 0:a.id,provisioning:{type:"scim",enable:!1}}
;a.sso&&a.sso.enable&&(d.active=!0),await D.UpdateCompanyIntegrationSettings(H,[d],c)
;const e=await J("AdminCenter_IntegrationView_RemoveProvisioning_Notification",[y(null!==(b=a.type)&&void 0!==b?b:"")])
;C.ShowNotification(e,null,null);const f={event:9};G.onEvent.CallAllSync([f]),await ax(!1,c)}}),(()=>()=>{}),0,null,(a=>aM((0,
s.EB)(a))))}}(a)}}(b);return v(aw,null)}(a):v(au,{progress:b})}),(a=>{const b=S(a);return b?v("div",{className:"error-text"
},b):[]}))}))),P},OnAfterShow:function(){K?(K=!1,ah.Start((async a=>{await ax(!0,a)})),null==P||P.Init()):ai.Start((async a=>{
await aE(a)}))},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){ah.Cancel(),null==P||P.UnInit()}};return(0,
t.fI)((0,l.Mj)((async a=>{const b=V(a);Y(b?function(a){if(!a||!a.providers||0===a.providers.length)return[]
;const b=a.providers,c=[];for(const d of b){if(!d.type||!ay(d.type))continue;if(d.hidden)continue
;const a=d.provisioning&&!d.provisioning.hidden,b=d.sso&&!d.sso.hidden;(a||b)&&c.push(d)}return c}(b):[])}))),at;function au(a){
const[b,c]=(0,l.Uw)(!1);return v("div",{className:"verify-email-section"},v("div",{className:"text"
},J("AdminCenter_IntegrationView_Verify_Email_Error")),(d=>{const e=b(d);return v("button",{
className:e?"button default-button disabled":"button default-button",onclick:e?null:()=>{return b=a.progress,void(0,
n.PQ)((async()=>{const a=(await E.GetRoboFormAccountInfo(b)).email||"";if(!a)return aK(),
void C.ShowNotification("Account email is empty",null,2);await F.SendVerificationCode("","email",a,b),await async function(a){
const b=(0,h.Sw)((0,q.TT)(P),(0,h.p)((0,h.dK)("dialog-modal verify-account-data verify-account-email","",null),(()=>(0,
g.z7)(a,I,{VerifyCode:async(b,c)=>{await F.UpdateAccountInfo({email:a,verificationCode:b},c)}}))))
;return C.ShowModalDialog(b,null)}(a),await ax(!0,b)}),(()=>(c(!0),()=>c(!1))),0,null,(a=>{(0,s.au)(a),C.ShowNotification((0,
s.EB)(a),null,2)}));var b}},J("AdminCenter_IntegrationView_Verify_Email_Text"))}))}function av(){return v("div",{
className:"no-providers-view hidden"},J("AdminCenter_IntegrationView_Empty_Providers_list"))}function aw(){return v("div",{
className:"main-view"},v("div",{className:"choose-section"},v("div",{className:"icon"}),v("div",{className:"text"
},J("AdminCenter_IntegrationView_ChooseProvider_Text"))),v("div",{className:"provider-selector"
},(async a=>X(a).map((a=>function(a){const b=a.type||"";return v("div",{className:"provider-button",onclick:()=>aa(a)},v("div",{
className:(0,o.bt)("icon"," ",x(b))}),v("div",{className:"flex-cell"}),v("div",{className:"text"},y(b)))}(a))))))}
async function ax(a,b){var c,d;if(aL(),W(null),!H)return aK(),void aM(await J("AdminCenter_Company_ID_Undefined"))
;const e=null!==(c=(await C.GetAccountInfo(a,b)).emailVerified)&&void 0!==c&&c;if(ag(e),e)try{
const a=await D.GetCompanyIntegrationSettings(H,b),c=await async function(a){const b={id:999,type:"ad-connector",provisioning:{
enable:!1}};try{const c=await D.GetADConnectorData(a);if(U=JSON.parse(c),U.reset)return b;b.provisioning={enable:!0},b.active=!0
}catch(c){(0,s.au)(c)}return b}(b);W(Object.assign(Object.assign({},a),{providers:[...null!==(d=a.providers)&&void 0!==d?d:[],c]
})),aK()}catch(f){aK(),aM((0,s.EB)(f))}finally{await aE(b)}else aK()}function ay(a){switch(a){case"azure":case"okta":
case"google-workspace":case"pingone":case"onelogin":case"custom":case"ad-connector":return!0;default:return!1}}function az(a){
(0,n.PQ)((async()=>{var b;if(await async function(){const a=U.computer||"",b=U.accountName||"",c=(0,h.Sw)((0,q.TT)(P),(0,
h.p)((0,h.dK)("dialog-modal",await J("AdminCenter_IntegrationView_Disable_ADConnector_Dialog_Title"),null),(()=>(0,
f._3)((async(c,d)=>v("div",{className:"content"},v("div",{className:"confirmation-text"
},await J("AdminCenter_IntegrationView_Disable_ADConnector_Dialog_Body",[a,b])),v("div",{className:"buttons-bar"},v("button",{
className:"button",onclick:()=>{d((0,s.JS)())}},await J("Cmd_Cancel_Flat")),v("button",{className:"button warning-button",
onclick:()=>c(!0)},await J("Options_Devices_DisableDevice_DisableButton_Text")))))))));return C.ShowModalDialog(c,null)}()){
const c=(0,t.f4)(null,null,null);aL();try{const d=Object.assign(Object.assign({},U),{reset:!0}),e=JSON.stringify(d)
;await D.PutADConnectorData(e,c)
;const f=await J("AdminCenter_IntegrationView_RemoveProvisioning_Notification",[y(null!==(b=a.type)&&void 0!==b?b:"")])
;C.ShowNotification(f,null,null),G.onEvent.CallAllSync([{event:9}])}finally{await ax(!1,c)}}}),(()=>()=>{}),0,null,(a=>aM((0,
s.EB)(a))))}function aA(a){var b
;const c=a.provider,[d,e]=(0,l.Uw)([]),g=J("AdminCenter_IntegrationView_SSO_Service_For_No_One_Label"),i=J("AdminCenter_IntegrationView_SSO_Service_For_No_One_Text"),j=J("AdminCenter_IntegrationView_SSO_Service_For_All_Label"),k=J("AdminCenter_IntegrationView_SSO_Service_For_All_Text"),o=J("AdminCenter_IntegrationView_SSO_Service_For_Select_Label"),p=J("AdminCenter_IntegrationView_SSO_Service_For_Select_Text"),u=J("AdminCenter_IntegrationView_SSO_Group_Select_Dialog_Text"),w=J("AdminCenter_IntegrationView_SSO_Group_Select_Search_Placeholder"),x=[{
value:0,label:g,description:i},{value:1,label:j,description:k},{value:2,label:o,description:p}],z=new Map;return(0,t.fI)((0,
l.Mj)((async a=>{const b=[];for(const c of ab(a)){const a=(await N(c.policies)).find((a=>"UseSSOLogin"===a.m_name))
;"1"===(null==a?void 0:a.m_value)&&b.push(c)}e(b)}))),v("div",{className:"tab-view-sso"
},(null===(b=c.sso)||void 0===b?void 0:b.enable)?v((function(){var a,b,e,f,g,h,i,j,k,m,n,o,p,q,r;const[s,t]=(0,
l.Uw)(0),u=null===(e=null===(b=null===(a=c.sso)||void 0===a?void 0:a.oidc)||void 0===b?void 0:b.clientId)||void 0===e?void 0:e.default,w=null===(h=null===(g=null===(f=c.sso)||void 0===f?void 0:f.oidc)||void 0===g?void 0:g.clientId)||void 0===h?void 0:h.web,x=null===(k=null===(j=null===(i=c.sso)||void 0===i?void 0:i.oidc)||void 0===j?void 0:j.clientId)||void 0===k?void 0:k.desktop,y=null===(o=null===(n=null===(m=c.sso)||void 0===m?void 0:m.oidc)||void 0===n?void 0:n.clientId)||void 0===o?void 0:o.android,z=null===(r=null===(q=null===(p=c.sso)||void 0===p?void 0:p.oidc)||void 0===q?void 0:q.clientId)||void 0===r?void 0:r.ios
;return v("div",null,(async a=>{if(0===s(a)){const a=await async function(){var a,b,e;return v("div",{
className:"tab-view status-section-wrapper"},v("div",{className:"info-message"},v("div",{className:"icon"}),v("div",{
className:"description"},await J("AdminCenter_IntegrationView_SSO_Description_Text"))),v("div",{className:"status-section"
},v("div",{className:"status-row"},v("div",{className:"title"
},await J("AdminCenter_IntegrationView_SSO_Status_Text"),":"),v("div",{className:"icon-text"},v("div",{
className:"icon status-complete"}),v("div",{className:"text status"
},await J("AdminCenter_UsersTabView_UserStatus_Active_Text"))),v("div",null),v("button",{
className:"button warning-button aligned-right",onclick:A
},await J("AdminCenter_IntegrationView_AD_Connector_Disable_Button"))),u&&v("div",{className:"status-row"},v("div",{
className:"title"},await J("AdminCenter_IntegrationView_SSO_ApplicationID_Text"),":"),v("div",{className:"text span-full"
},u)),w&&v("div",{className:"status-row"},v("div",{className:"title"
},await J("AdminCenter_IntegrationView_SSO_Web_ApplicationID_Text"),":"),v("div",{className:"text span-full"},w)),x&&v("div",{
className:"status-row"},v("div",{className:"title"
},await J("AdminCenter_IntegrationView_SSO_Desktop_ApplicationID_Text"),":"),v("div",{className:"text span-full"
},x)),y&&v("div",{className:"status-row"},v("div",{className:"title"
},await J("AdminCenter_IntegrationView_SSO_Android_ApplicationID_Text"),":"),v("div",{className:"text span-full"
},y)),z&&v("div",{className:"status-row"},v("div",{className:"title"
},await J("AdminCenter_IntegrationView_SSO_iOS_ApplicationID_Text"),":"),v("div",{className:"text span-full"},z)),v("div",{
className:"status-row"},v("div",{className:"title"},await J("AdminCenter_IntegrationView_SSO_OIDC_URL_Text"),":"),v("div",{
className:"text span-full"
},null===(e=null===(b=null===(a=c.sso)||void 0===a?void 0:a.oidc)||void 0===b?void 0:b.config)||void 0===e?void 0:e.url))),v("div",{
className:"select-groups-wrapper"},(async a=>{
if(d(a).length>0&&!ad(a))return[v("p",null,await J("AdminCenter_IntegrationView_SSO_Service_Active_For_Groups"),":"),v("ul",{
className:0===d(a).length?"hidden":""},d(a).map((a=>v("li",null,a.name))))]
;let b=await J("AdminCenter_IntegrationView_SSO_Service_Active_For_No_One")
;return ad(a)&&(b=await J("AdminCenter_IntegrationView_SSO_Service_Active_For_All")),
[v("p",null,await J("AdminCenter_IntegrationView_SSO_Service_Active_For"),": ",v("strong",null,b))]}),v("button",{
onclick:()=>t(1)},await J("AdminCenter_IntegrationView_SSO_Change_Service_Assigment"))))}();return[a]}
const b=await async function(){const[a,b]=(0,l.Uw)(null),c=d(null);return v("div",{className:"tab-view sso-setup-view"
},v("div",{className:"tab-title"},await J("AdminCenter_IntegrationView_SSO_Sync_Settings_View_Title")),v("p",{
className:"sso-groups-text"},await J("AdminCenter_IntegrationView_SSO_Service_Active_For_Text"),":"),v(E,{
onGroupSelectionChange:b,selected_placeholder_groups:c,initialy_selected_group_selector_type:B()}),v("div",{
className:"tab-action-bar"},(async b=>{const c=e(a(b),d(b));return[v("button",{
className:"button default-button "+(c?"":"disabled"),onclick:g},await J("AdminCenter_IntegrationView_SSO_Activate_SSO_button"))]
})));function e(a,b){if(null===a)return!1;const c=B();return 0===c?ad(null)||b.length>0:1===c?!ad(null):!f(a,b)}function f(a,b){
return a===b||null!==a&&null!==b&&(a.length===b.length&&a.every((a=>b.includes(a))))}function g(){const b=B();F((async()=>{
await I(b,a(null));const c=await J("AdminCenter_IntegrationView_SSO_Updated_Notification");C.ShowNotification(c,null,null),t(0)
}))}}();return[b]}))}),null):v((function(){var a,b,d,e,f,g;const[h,i]=(0,l.Uw)(0),[j,k]=(0,
l.Uw)((null===(d=null===(b=null===(a=c.sso)||void 0===a?void 0:a.oidc)||void 0===b?void 0:b.clientId)||void 0===d?void 0:d.default)||""),[m,n]=(0,
l.Uw)((null===(g=null===(f=null===(e=c.sso)||void 0===e?void 0:e.oidc)||void 0===f?void 0:f.config)||void 0===g?void 0:g.url)||"")
;return v("div",{className:"tab-view"},(async a=>{if(0===h(a)){const a=await async function(){var a,b,d,e,f,g;const[h,o]=(0,
l.Uw)("");(0,t.fI)((0,l.Mj)((async a=>{m(a),o("")})));const p=await J("AdminCenter_IntegrationView_SSO_OIDC_URL_Error_Text")
;function q(){const a=(0,r.vN)(m(null));a&&a.m_host?i(1):o(p)}const s=null!==(a=c.type)&&void 0!==a?a:"custom",u=ak.get(s)
;return v("div",{className:"sso-setup-view"},v("div",{className:"tab-title"
},J("AdminCenter_IntegrationView_SSO_Setup_First_Step_View_Title",[y(null!==(b=c.type)&&void 0!==b?b:"")])),v("div",{
className:"info-message"},v("div",{className:"icon"}),v("div",{className:"description"
},J("AdminCenter_IntegrationView_SSO_Setup_Info_Description_Text2"),aI(c,"sso"))),v("div",{className:"sso-setup-inputs"
},v("div",{className:"appid-section"},v("div",{className:"input-title"
},null!==(d=null==u?void 0:u.app_id)&&void 0!==d?d:ar),v("div",{className:"input-sso"},v("input",{type:"text",value:j(null),
placeholder:null!==(e=null==u?void 0:u.app_id)&&void 0!==e?e:ar,autocomplete:"off",autocorrect:"off",autocapitalize:"off",
spellcheck:!1,onkeyup:a=>aB(a,k)}))),v("div",{className:"oidc-section"},v("div",{className:"input-title"
},null!==(f=null==u?void 0:u.oidc)&&void 0!==f?f:aq),v("div",{className:"input-sso"},v("input",{type:"text",value:m(null),
placeholder:null!==(g=null==u?void 0:u.oidc)&&void 0!==g?g:aq,autocomplete:"off",autocorrect:"off",autocapitalize:"off",
spellcheck:!1,disabled:"google-workspace"===s,onkeyup:a=>aB(a,n)}),(a=>{const b=h(a);return b?[v("p",{
className:"input-error-message"},b)]:[]})))),v("div",{className:"tab-action-bar"},(async a=>{const b=Boolean(j(a)&&m(a))
;return v("button",{className:"button default-button "+(b?"":"disabled"),disabled:!b,onclick:b?q:null
},await J("AdminCenter_Next_Text"))})))}();return[a]}const b=await async function(){const[a,b]=(0,l.Uw)(null);return v("div",{
className:"sso-setup-view"},v("div",{className:"tab-title"
},await J("AdminCenter_IntegrationView_SSO_Setup_Second_Step_View_Title")),v("div",{className:"info-message"},v("div",{
className:"icon"}),v("div",{className:"description"
},await J("AdminCenter_IntegrationView_SSO_Second_Step_Description_Text"))),v("p",{className:"sso-groups-text"
},await J("AdminCenter_IntegrationView_SSO_Service_Active_For_Text"),":"),v(E,{onGroupSelectionChange:b}),v("div",{
className:"tab-action-bar"},v("button",{className:"button",onclick:()=>i(0)
},await J("AdminCenter_Back_Text")),(async b=>[v("button",{className:"button default-button "+(null===a(b)?"disabled":""),
disabled:null===a(b),onclick:d},await J("AdminCenter_IntegrationView_SSO_Activate_SSO_button"))])));function d(){F((async()=>{
var b;const d=B();await async function(a,b){const d={active:!0,sso:{enable:!0,type:"oidc",oidc:{clientId:{default:a},config:{
url:b}}}};(null==c?void 0:c.id)?d.id=null==c?void 0:c.id:d.idpId=null==c?void 0:c.idpId
;await D.UpdateCompanyIntegrationSettings(H,[d],null),G.onEvent.CallAllSync([{event:9}])}(j(null),m(null)),await I(d,a(null))
;const e=await J("AdminCenter_IntegrationView_AddSSO_Notification",[y(null!==(b=c.type)&&void 0!==b?b:"")])
;C.ShowNotification(e,null,null);const f=(0,t.f4)(null,null,null);await ax(!1,f)}))}}();return[b]}))}),null));function A(){(0,
n.PQ)((async()=>{var a;const b=(0,t.f4)(null,null,null);if(!await async function(){const a=(0,h.Sw)((0,q.TT)(P),(0,h.p)((0,
h.dK)("dialog-modal",await J("AdminCenter_IntegrationView_SSO_Remove_SSO_Title"),null),(()=>(0,f._3)((async(a,b)=>v("div",{
className:"content"},v("div",{className:"confirmation-text"
},await J("AdminCenter_IntegrationView_SSO_Remove_SSO_Description_Text")),v("div",{className:"buttons-bar"},v("button",{
className:"button",onclick:()=>{b((0,s.JS)())}},await J("Cmd_Cancel_Flat")),v("button",{className:"button warning-button",
onclick:()=>a(!0)},await J("AdminCenter_IntegrationView_SSO_Remove_SSO_button")))))))));return C.ShowModalDialog(a,null)
}())return;const d={active:(null===(a=c.provisioning)||void 0===a?void 0:a.enable)||!1,sso:{enable:!1}}
;(null==c?void 0:c.id)?d.id=null==c?void 0:c.id:d.idpId=null==c?void 0:c.idpId,
await D.UpdateCompanyIntegrationSettings(H,[d],null);const e=await J("AdminCenter_IntegrationView_RemoveSSO_Notification")
;C.ShowNotification(e,null,null);G.onEvent.CallAllSync([{event:9}]),await ax(!1,b)}),(()=>()=>{}),0,null,(a=>aM((0,s.EB)(a))))}
function B(){for(const[a,b]of z)if(b.IsChecked())return a;return d(null).length>0&&!ad(null)?2:ad(null)?1:0}
function E({selected_placeholder_groups:a,initialy_selected_group_selector_type:b,onGroupSelectionChange:c}){const[d,e]=(0,
l.Uw)(b||0),[f,g]=(0,l.Uw)(a||[]);return(0,t.fI)((0,l.Mj)((async a=>{
if(2===d(a))return 0===f(a).length?void c(null):void c(f(a));1!==d(a)?c([]):c(ab(a))}))),v("div",null,function(a,b,c){
return z.clear(),v("div",{className:"radio-wrapper"},a.map((a=>{let c;const e=v("div",{className:"radio-option"},c=v(m.a,{
text:a.label,checked:a.value===b,onchange:()=>d(a.value)}),v("span",{className:"description"},a.description))
;return z.set(a.value,c),e})));function d(a){const b=z.get(a);b&&!(null==b?void 0:b.IsChecked())&&(z.forEach((a=>{
a.SetChecked(!1)})),b.SetChecked(!0),c(a))}}(x,d(null),e),(async a=>{if(2===d(a)){const b=f(a).length>0;return[v("div",{
className:"select-groups-wrapper margin-left"},b&&v("ul",null,f(a).map((a=>v("li",null,a.name)))),v("button",{onclick:h
},await J("AdminCenter_IntegrationView_SSO_Service_Select_Groups")))]}return[]}));function h(){(0,n.D$)((async()=>{let b=f(null)
;0===b.length&&a&&(b=a),await C.ShowSelectGroupsForSSO(ab(null),b,{fields:[{key:"name",label:await J("AdminCenter_Name_Text"),
sortable:!0}],translations:{text:u,search_placeholder:await w,cancel_btn:await J("Cmd_Cancel_Flat"),
ok_btn:await J("AdminCenter_EditorButton_Apply")},on_ok_callback:function(a){g(a)}},null)}),(()=>()=>{}),0,null)}}function F(a){
(0,n.PQ)((async()=>{if(await async function(){const a=(0,h.Sw)((0,q.TT)(P),(0,h.p)((0,
h.dK)("dialog-modal",await J("AdminCenter_IntegrationView_SSO_Activate_SSO_button"),null),(()=>(0,f._3)((async(a,b)=>v("div",{
className:"content"},v("div",{className:"confirmation-text"
},await J("AdminCenter_IntegrationView_SSO_Activate_SSO_Dialog_Text")),v("div",{className:"buttons-bar"},v("button",{
className:"button",onclick:()=>{b((0,s.JS)())}},await J("Cmd_Cancel_Flat")),v("button",{className:"button default-button",
onclick:()=>a(!0)},await J("AdminCenter_IntegrationView_SSO_Activate_SSO_button")))))))));return C.ShowModalDialog(a,null)
}())try{aL(),await a()}finally{aK()}}),(()=>()=>{}),0,null,(a=>aM((0,s.EB)(a))))}async function I(a,b){0===a&&(await K([]),
await M(!1)),1===a&&(await M(!0),await K([])),2===a&&(await M(!1),b&&await K(b))}async function K(a){
const b=new Set(a.map((a=>a.id))),c=[],d=ab(null);for(let f=0;f<d.length;f+=50)c.push(d.slice(f,f+50))
;for(const f of c)await Promise.all(f.map((async a=>{const c=b.has(a.id);await L(a,c)})))
;const e=await C.GetCompanyGroups(!0,null);ac([...e]),G.onEvent.CallAllSync([{event:9}])}async function L(a,b){
const c=await N(a.policies),d=c.find((a=>"UseSSOLogin"===a.m_name)),e="1"===(null==d?void 0:d.m_value);if(!b&&!d)return
;if(b===e)return;const f=c.filter((a=>"UseSSOLogin"!==a.m_name));b&&f.push({m_name:"UseSSOLogin",m_section:"[CONFIG]",
m_value:"1"});const g=await aj.Save(f);await C.UploadGroupPolicies(a.id,g,null)}async function M(a){
const b=(await C.GetCompanyInfo(!1,null)).policies||"";let c=await aj.Parse(b);const d=c.length
;if(c=c.filter((a=>"UseSSOLogin"!==a.m_name)),a&&c.push({m_name:"UseSSOLogin",m_section:"[CONFIG]",m_value:"1"}),d!==c.length){
const a=await aj.Save(c);await C.UploadCompanyPolicies(a,null)}await aF()}async function N(a){return a?aj.Parse(a):[]}}
function aB(a,b){if(a.target){b(a.target.value)}}function aC(){aa(null)}async function aD(){const a=(0,h.Sw)((0,q.TT)(P),(0,
h.p)((0,h.dK)("dialog-modal",await J("AdminCenter_IntegrationView_Remove_Provisioning_Button"),null),(()=>(0,
f._3)((async(a,b)=>v("div",{className:"content"},v("div",{className:"confirmation-text"
},await J("AdminCenter_IntegrationView_Remove_Provisioning_Text")),v("div",{className:"buttons-bar"},v("button",{
className:"button",onclick:()=>{b((0,s.JS)())}},await J("Cmd_Cancel_Flat")),v("button",{className:"button default-button",
onclick:()=>a(!0)},await J("Options_Devices_RemoveDevice_RemoveButton_Text")))))))));return C.ShowModalDialog(a,null)}
async function aE(a){const b=await C.GetCompanyGroups(!1,a);ac([...b]),await aF()}async function aF(){
const a=(await C.GetCompanyInfo(!1,null)).policies||"",b=(await aj.Parse(a)).find((a=>"UseSSOLogin"===a.m_name))
;ae("1"===(null==b?void 0:b.m_value)||!1)}function aG({label:a,onClick:b,selected:c}){return v("button",{
className:"tab-button "+(c?"selected":""),onclick:()=>b()},v("span",{className:"text"},a))}async function aH(a){var b,c,d,e,f
;let g=await J("AdminCenter_DashboardTabView_NA_Text");if(a.provisioning){
const h=null!==(b=await I.GetLanguageTag(null))&&void 0!==b?b:"en"
;"scim"===a.provisioning.type&&(null===(d=null===(c=a.provisioning.scim)||void 0===c?void 0:c.stats)||void 0===d?void 0:d.lastSyncedTime)?g=(0,
u.il)(a.provisioning.scim.stats.lastSyncedTime,h):"google"===a.provisioning.type&&(null===(f=null===(e=a.provisioning.google)||void 0===e?void 0:e.stats)||void 0===f?void 0:f.lastSyncedTime)&&(g=(0,
u.il)(a.provisioning.google.stats.lastSyncedTime,h))}return J("AdminCenter_DashboardTabView_LastSyncTimeWithValue_Text",[g])}
function aI(a,b){var c;const d=null!==(c=a.type)&&void 0!==c?c:"custom",e=ak.get(d);if(e){
const a="sso"===b?e.sso_help_link:e.scim_help_link;return v("span",null," ",v("a",{className:"link",target:"_blank",href:a
},J("AdminCenter_IntegrationView_Description_HelpCenter_Link")),".")}return v("fragment",null)}function aJ(){return async a=>{
const b=V(a);let c="";return(null==b?void 0:b.warnings)&&b.warnings.length>0&&b.warnings.forEach((a=>{
c="ad-connector-active"===a.code?al:a.message||""})),c?v("div",{className:"info-message warning"},v("div",{className:"icon"
}),v("div",{className:"description"},c)):[]}}function aK(){R(!1)}function aL(){R(!0),T("")}function aM(a){T(a)}}function x(a){
switch(a){case"azure":return"icon-azure";case"okta":return"icon-okta";case"google-workspace":return"icon-google";case"pingone":
return"icon-ping";case"onelogin":return"icon-onelogin";case"custom":default:return"icon-custom";case"ad-connector":
return"icon-activedir"}}function y(a){switch(a){case"azure":return"Microsoft Entra ID";case"okta":return"Okta"
;case"google-workspace":return"Google Workspace / G Suite";case"pingone":return"Ping Identity";case"onelogin":return"OneLogin"
;case"custom":return"Custom";case"ad-connector":return"On-prem Active Directory";default:return"Unknown provider"}}},
29526:function(a,b,c){"use strict";c.d(b,{M:function(){return m}})
;var d=c(32105),e=c(63956),f=c(97490),g=c(78440),h=c(95399),i=c(69893),j=c(88262),k=c(4153),l=(c(13117),c(91764)._)
;function m(a,b,c,m,n){const o=a,p=b,q=c,r=n.LocalizeString,s=m.IsCurrentUserAdmin(null),[t,u]=(0,f.Uw)(!1);let v;return{
Create:async function(){return v=l(d.J2,{always_visible:!1,class_name:"no-license-view"},l("div",{className:"no-license"
},s?w():x(),(a=>l("div",{className:t(a)?"loading-view":"loading-view hidden"},l("div",{
className:"action-progress-overlay-circle size48"}))))),v},OnAfterShow:function(){v.Init()},OnBeforeHide:function(){},
Focus:function(){},Dispose:function(){v.UnInit()}};function w(){const[a,b]=(0,f.Uw)(!0),[c,s]=(0,f.Uw)("");let t,v
;return async f=>{const y=m.GetLicenseInfo(f),z=!!y&&"trial-expired"===y.status,A=f.GetProgress();return l("div",{
className:"sheet-container"},l("div",{className:"info"},l("div",{className:"icon"}),l("span",{className:"text"
},r("AdminCenter_NoLicense_Admin_Text"))),l("ul",{className:"license-info"},l("li",{className:"info"},l("span",{
className:"title"},r("AdminCenter_SettingsView_LicenseType_Text")),l("span",{className:"value"
},r("Options_LicenseType_Business_Text"))),l("li",{className:"info"},l("div",{className:"licenses-count-wrapper"},l("div",{
className:"licenses-count"},l("span",{className:"licenses-count-value"},function(a){var b,c,d,e;if(!a)return""
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:0
;return`${(0,k.bf)(f)}/${(0,k.bf)(g)}`}(y)),l("span",{className:"licenses-count-text"
},r("AdminCenter_SettingsView_LicensesUsed_Text"))),l("div",{className:"licenses-count-bar"},l("div",{
className:"licenses-count-active-bar",style:{width:`${(0,k.bf)(w(y))}%`}})))),l("li",{className:"info"},l("span",{
className:"title"},r("AdminCenter_SettingsView_LicenseStatus_Text")),l("span",{className:"value"},function(a){if(!a)return""
;switch(a.status){case"active":return r("Options_LicenseStatus_ActiveSubscription_Text");case"expired":
return r("Options_LicenseStatus_ExpiredSubscription_Text");case"trial-expired":default:
return r("Options_LicenseStatus_ExpiredTrial_Text");case"trial":return r("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return r("Options_LicenseStatus_NoLicense_Text")}}(y))),l("li",{className:"info"},l("span",{className:"title"
},r("AdminCenter_SettingsView_ExpirationDate_Text")),l("div",{className:"flex-cell"}),l("span",{
className:"value expiration-date"},async function(a){var b,c;if(!a)return""
;const d=null!==(b=a.expirationTime)&&void 0!==b?b:0,e=null!==(c=await n.GetLanguageTag(null))&&void 0!==c?c:"en";return(0,
h.fQ)(d,e)}(y)),l("button",{className:z?"button default-button":"button",onclick:()=>{return a=z,b=A,void(0,
g.fI)(o.OpenPaymentPage({action:a?"buy":"renew"},b));var a,b}
},r(z?"AdminCenter_BuyNow_Text":"AdminCenter_SettingsView_RenewNow_Text"))),function(a){if(!a)return!1;switch(a.status){
case"expired":case"trial-expired":return!0;default:return!1}}(y)&&l("li",{className:"info activate-account"},l("span",{
className:"title"},r("AdminCenter_NoLicense_ActivateAccount_Text")),l("div",{className:"form"},t=l(d.ap,{className:"order-id",
title:await r("AdminCenter_NoLicense_OrderId_Text"),oninput:x}),v=l(d.ap,{className:"order-name",
title:await r("AdminCenter_NoLicense_OrderName_Text"),oninput:x}),(c=>{const d=a(c),f=c.GetProgress();return l("button",{
className:d?"button disabled":"button",onclick:d?null:()=>{return a=f,void(0,e.PQ)((async()=>{
const b=t.GetValue().trim(),c=v.GetValue().trim();if(b.replace(/[^0-9]/g,"").length!==b.length||10!==b.length)throw(0,
i.ZU)(i.V2,await r("AdminCenter_NoLicense_ActivateAccount_Error",[b]));await p.ActivateRFBusinessLicense({orderId:b,orderName:c
},a),m.ShowNotification(await r("AdminCenter_SettingsView_LicenseActivation_Notification"),null,null),q.onEvent.CallAllSync([{
event:11}])}),(()=>(b(!0),t.Enable(!1),v.Enable(!1),()=>{b(!1),t.Enable(!0),v.Enable(!0)})),300,(()=>(u(!0),()=>{u(!1)})),(a=>{
var b,c;if((0,i.au)(a),(0,j.dW)(a)){
const d=null===(c=null===(b=a.httpResponse)||void 0===b?void 0:b.bodyAsValue)||void 0===c?void 0:c.errorMessage
;s("string"==typeof d?d:(0,i.EB)(a))}else s((0,i.EB)(a))}));var a},disabled:d},r("AdminCenter_NoLicense_Submit_Text"))})),(a=>{
const b=c(a);return l("div",{className:""!==b?"error-text":"error-text hidden"},b)}))))};function w(a){var b,c,d,e
;if(!a)return 0
;const f=null!==(c=null===(b=null==a?void 0:a.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0,g=null!==(e=null===(d=null==a?void 0:a.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:0
;return g?Math.floor(f/g*100)||1:0}function x(){const a=t.GetValue().trim(),d=v.GetValue().trim();b(""===a||""===d),
""!==c(null)&&s("")}}function x(){return l("div",{className:"sheet-container"},l("div",{className:"info"},l("div",{
className:"icon"}),l("span",{className:"text"},r("AdminCenter_NoLicense_GroupManager_Text"))))}}},67310:function(a,b,c){
"use strict";c.d(b,{N:function(){return G}})
;var d=c(84117),e=c(53166),f=c(98266),g=c(12072),h=c(30651),i=c(37694),j=c(3566),k=c(30045),l=c(47333),m=c(63306),n=c(83382),o=c(54811),p=c(94652),q=c(12131),r=c(31173),s=c(65852),t=c(63956),u=c(32105),v=c(97490),w=c(40868),x=c(78440),y=c(69893),z=c(4153),A=c(95399),B=c(73863),C=c(13113),D=c(88262),E=(c(13117),
c(84224)),F=c(91764)._;function G(a,b,c,G,J,K,L,M,N,O,P,Q,R,S,T){
const U=a,V=b,W=c,X=G,Y=J,Z=K,aa=L,ab=M,ac=N,ad=O,ae=T,af=P,ag=Q,ah=R,ai=ae.LocalizeString;let aj,ak,al=null
;const am=ad.GetSettingsTab(null),[an,ao]=(0,v.Uw)(am),[ap,aq]=(0,v.Q_)(null,"",(async function(){
return await Z.GetValue("LocalizationFile","")})),[ar,as]=(0,v.Uw)(!1),[at,au]=(0,v.Uw)(!1),[av,aw]=(0,v.Uw)(!1);let ax=null
;const ay=(0,x.tG)(),az=(0,x.tG)(),aA=5e5;let aB;return{Create:async function(){return await(0,v.Mj)((async a=>{
const b=ad.GetSettingsTab(a);b!==an(null)&&ao(b)})),ak=F("div",{className:"settings-view"},F(aD,null),aj=F("div",{
className:"settings-inner-view"},F(aE,null),F(aF,null)),(a=>av(a)?F("div",{className:"loading-view"},F("div",{
className:"action-progress-overlay-circle size48"})):[])),(0,x.C)(aC),ak},OnAfterShow:aC,OnBeforeHide:function(){},
Focus:function(){},Dispose:function(){ay.Cancel(),az.Cancel(),null==al||al.UnInit()}};function aC(){ar(null)||(as(!0),
null==al||al.Init())}function aD(){return F("div",{className:"navigation settings-navigation"},(async b=>{ap(b);const c=an(b)
;return F("div",{className:"tab-selector settings-tab-selector"},F("span",{className:"settings-title"
},ai("AdminCenter_Settings_Text")),F(e.Dg,{iconClass:"icon-settings-general",isActive:"general"===c,onClick:()=>a("general")
},await ai("AdminCenter_Settings_Tab_General_Text")),F(e.Dg,{iconClass:"icon-settings-account",isActive:"account"===c,
onClick:()=>a("account")},await ai("AdminCenter_Settings_Tab_Account_Text")),F(e.Dg,{iconClass:"icon-settings-license",
isActive:"license"===c,onClick:()=>a("license")},await ai("AdminCenter_Settings_Tab_LicenseBilling_Text")))}));function a(a){
at(null)||a===an(null)||ad.SetState({m_view:"settings",m_tab:a},!0,!1)}}function aE(){return F("div",{
className:"buttons-bar button-with-title"},(async b=>{ap(b);const c=an(b);return[F("span",{className:"settings-subtitle"
},"general"===c?await ai("AdminCenter_Settings_Tab_General_Text"):"account"===c?await ai("AdminCenter_Settings_Tab_Account_Text"):await ai("AdminCenter_Settings_Tab_LicenseBilling_Text")),F(e.$n,{
type:"primary",onClick:a},ai("Cmd_Done_Flat"))]}));function a(){S.CloseCompanySettingsView()}}function aF(){return al=F(u.J2,{
always_visible:!1},F("div",{className:"sheets-container"},F(aG,null),F(aO,null),F(aT,null)))}function aG(){
return F("fragment",null,(a=>{S.GetLanguageTag(a);const b=an(a),c=S.IsCurrentUserAdmin(a);return"general"!==b?[]:F("div",{
className:"sheet"},F(aH,{is_admin:c}),c&&F(aI,null),F(aJ,null),F(aK,null),F(aL,null),F(aM,null),F(aN,null))}))}function aH(a){
const[b,c]=(0,v.Uw)(!1),[d,e]=(0,v.Uw)(""),f=a.is_admin;let g=!1,h=null,i=!0;return F("div",{className:"setting"},F("span",{
className:"setting-title"},ai("AdminCenter_SettingsView_CompanyName_Title")),(async a=>{var c;if(b(a))return[]
;const d=S.GetCompanyInfo(a),e=null!==(c=null==d?void 0:d.name)&&void 0!==c?c:await ai("AdminCenter_DashboardTabView_NA_Text")
;return F("div",{className:"setting-value settings-name"},d&&F("span",{className:"name"},e),f&&F("button",{
className:"edit-icon",title:await ai("Cmd_Edit_Flat"),onclick:d?j:null}))}),(async a=>{var c;const e=b(a);if(!e||!f)return[]
;const j=S.GetCompanyInfo(a),o=null!==(c=null==j?void 0:j.name)&&void 0!==c?c:await ai("AdminCenter_DashboardTabView_NA_Text")
;return e&&!g&&(0,x.C)((()=>{null==h||h.Focus()})),F("div",{className:"name-edit-pane"},F("div",{className:"name-edit-row"
},h=(0,u.ap)({title:await ai("AdminCenter_SettingsView_CompanyName_Title"),className:"company-name-edit-box",value:o,oninput:l,
onfocus:m,onblur:()=>function(a){if(!h||d(null))return void k();setTimeout((()=>{i&&n(a)}),100)}(j),onkeypress:a=>function(a,b){
a.key===E.U.Enter&&(!h||d(null)?k():n(b));a.key===E.U.Escape&&k()}(a,j)}),F("div",{className:"accept-button",tabIndex:0,
onmousedown:()=>n(j)}),F("div",{className:"cancel-button",tabIndex:0,onmousedown:k})),(a=>F("div",{className:"error-text"
},d(a))))}));function j(){g||(i=!0,c(!0))}function k(){i=!1,e(""),c(!1)}function l(){e(""),null==h||h.RemoveErrorState()}
function m(){i=!0}function n(a){var b;if(i=!1,!a)return
;const c=(0,z.TT)(h).GetValue().trim(),d=null!==(b=a.name)&&void 0!==b?b:"";d!==c?(0,t.PQ)((async()=>{
const a=await async function(a){if(a.length>60){
return await ai("AdminCenter_SettingsView_Name_TooLongError_Text",[await ai("AdminCenter_SettingsView_CompanyName_Title"),(0,
z.bf)(60)])}if(a.length<2){
return await ai("AdminCenter_SettingsView_Name_TooShortError_Text",[await ai("AdminCenter_SettingsView_CompanyName_Title"),(0,
z.bf)(2)])}if(/[\u0000-\u001f]/g.test(a)){
return await ai("AdminCenter_SettingsView_Name_Invalid_Text",[await ai("AdminCenter_SettingsView_CompanyName_Title")])}
if(/[*?"<>|\\/]/g.test(a)){
return await ai("AdminCenter_SettingsView_Name_InvalidChars_Text",[await ai("AdminCenter_SettingsView_CompanyName_Title"),'*?"<>|\\/'])
}return null}(c);if(a)return null==h||h.SetErrorState(),null==h||h.Focus(),i=!0,void e(a)
;if(await S.ShowConfirmationDialog(await ai("AdminCenter_SaveChanges_Text"),await ai("AdminCenter_SettingsView_CompanyNameChange_Warning",[d,c]),await ai("AdminCenter_ConfirmationDialog_DontSave"),await ai("AdminCenter_SaveChanges_Text"))){
k();const a=(0,x.f4)(null,null,null);try{await V.UpdateCompanyProperties(ag,{name:c},a)}catch(b){throw b}
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null),await S.UpdateCompanyInfo(a)}else k()
}),(()=>(g=!0,()=>{g=!1})),0,null,(a=>{(0,y.au)(a),S.ShowNotification((0,y.EB)(a),null,2)})):k()}}function aI(){const[a,b]=(0,
v.Uw)(""),[c,d]=(0,v.Uw)(!1),[f,g]=(0,v.Uw)("");return F("div",{className:"setting"},F("span",{className:"setting-title"
},ai("AdminCenter_SettingsView_CompanyLogo_Title")),(async b=>{
const d=S.GetCompanyInfo(b),g=a(b),i=f(b),j=await async function(a){var b
;const c=null!==(b=null==a?void 0:a.logo)&&void 0!==b?b:"";if(c){const a=(0,w.fI)(c);return await(0,w.Z$)(a)}return""
}(d),k=function(a){if(""===a)return null;const b=function(a){var b;if(""===a)return"";const c=a.replace(/[<>]/g,"")
;let d=c.split(" ");if(d.length<2)return"";d=d.slice(1);for(const e of d){const a=e.split("=");if("src"===a[0]){
let c=null!==(b=a[1])&&void 0!==b?b:"";return""===c?"":(c=c.replace(/"/g,"").trim(),c)}}return""}(a);if(""===b)return null
;const c=new Image;return c.src=b,c}(j);return F("div",{className:"setting-value settings-logo"},F("div",{
className:j?"company-logo has-logo":"company-logo"
},null!=k?k:await ai("AdminCenter_SettingsView_CompanyLogo_Title")),(async a=>{const b=c(a)||!d;return""!==j?F("button",{
className:b?"edit-icon disabled":"edit-icon",onclick:b?null:()=>h(d),title:await ai("AdminCenter_SettingsView_EditLogo_Tip")
}):F(e.$n,{type:"secondary",disabled:b,onClick:()=>h((0,z.TT)(d)),tooltip:await ai("AdminCenter_SettingsView_ChooseFile_Tip")
},await ai("AdminCenter_SettingsView_ChooseFile_Title"))}),""===j&&F("span",{className:"file-description"
},await ai("AdminCenter_SettingsView_MaxSize_Title")),""!==i?F("span",{className:"file-load-result error"},i):""!==g?F("span",{
className:"file-load-result"},g):null)}));function h(a){ay.Start((async c=>{await async function(a,c){var e;d(!0);try{
if(ax=await(0,t.tf)([".jpeg",".jpg",".png"]),!ax)return void g("");if(ax.size>=aA){
const a=await ai("AdminCenter_SettingsView_LoadLogoError_Text");throw(0,y.ZU)(y.V2,a)}g("");const d=await async function(a){
const b=await(0,w.At)((0,z.TT)(a)),c=await(0,w.n1)(b),d=new Image;return d.src=`data:${a.type};base64,${c}`,d.outerHTML}((0,
z.TT)(ax));await async function(a,b,c){const d=await(0,w.zN)(a),e=await(0,w.n1)(d);if(b===e)return
;await V.UpdateCompanyProperties(ag,{logo:e},c)}(d,null!==(e=a.logo)&&void 0!==e?e:"",c),b(ax.name),
await S.UpdateCompanyInfo(c),S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)}catch(f){(0,
y.r5)(f,y.kd)||g((0,y.EB)(f))}finally{d(!1)}}(a,c)}))}}function aJ(){return F("div",{className:"setting setting-with-toggle"
},F("span",{className:"setting-title"},ai("AdminCenter_SettingsView_DarkTheme_Title")),(a=>F(u.Ig,{
checked:"dark"===S.GetColorTheme(a),onchange:S.UpdateColorTheme})))}function aK(){const[a,b]=(0,v.Q_)(null,2,(async function(){
return Z.GetValue("UserAvatarColorType",2)})),[c,d]=(0,v.Q_)(null,"#2979FF",(async function(){
return await Z.GetValue("UserAvatarHexColorType","#2979FF")}));return F("div",{className:"setting"},F("span",{
className:"setting-title"},ai("AdminCenter_SettingsView_UserAvatarColor_Title")),(async b=>{const f=a(b),g=c(b);return F("div",{
className:"radio-group"},F(u.a,{text:await ai("AdminCenter_SettingsView_Color_AccountStatusColors_Text"),
title:await ai("AdminCenter_SettingsView_Color_AccountStatusColors_Text"),checked:1===f,onchange:()=>e(1)}),F(u.a,{
text:await ai("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),
title:await ai("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),checked:2===f,onchange:()=>e(2)}),F(u.a,{
text:await ai("AdminCenter_SettingsView_Color_UserInitials_Text"),
title:await ai("AdminCenter_SettingsView_Color_UserInitials_Text"),checked:3===f,onchange:()=>e(3)}),F("div",{
className:"radio-button-with-color-change"},F(u.a,{text:await ai("AdminCenter_SettingsView_Color_OneForAll_Text"),
title:await ai("AdminCenter_SettingsView_Color_OneForAll_Text"),checked:4===f,onchange:()=>e(4)}),F("div",{
className:4===f?"colors-buttons-bar":"colors-buttons-bar disabled"
},["#2979FF","#31A629","#838789","#F0483F","#FFC509","#9AC73A","#7869C7","#00A2E8"].map((b=>F("div",{
className:b===g?"color-btn active":"color-btn",style:{backgroundColor:`${b}`},onclick:()=>function(b){
if(c(null)===b||4!==a(null))return;d(b),(0,x.fI)((async()=>{await Y.SetValue("UserAvatarHexColorType",b),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)})())}(b)}))))))}));function e(c){
a(null)!==c&&(b(c),(0,x.fI)((async()=>{await Y.SetValue("UserAvatarColorType",c),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)})()))}}function aL(){const[a,b]=(0,
v.Q_)(null,1,(async function(){return Z.GetValue("GroupAvatarColorType",1)})),[c,d]=(0,v.Q_)(null,"#2979FF",(async function(){
return await Z.GetValue("GroupAvatarHexColorType","#2979FF")}));return F("div",{className:"setting"},F("span",{
className:"setting-title"},ai("AdminCenter_SettingsView_GroupAvatarColor_Title")),(async b=>{const f=a(b),g=c(b)
;return F("div",{className:"radio-group"},F(u.a,{text:await ai("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),
title:await ai("AdminCenter_SettingsView_Color_SecurityScoreColors_Text"),checked:1===f,onchange:()=>e(1)}),F(u.a,{
text:await ai("AdminCenter_SettingsView_Color_GroupNameInitials_Text"),
title:await ai("AdminCenter_SettingsView_Color_GroupNameInitials_Text"),checked:2===f,onchange:()=>e(2)}),F("div",{
className:"radio-button-with-color-change"},F(u.a,{text:await ai("AdminCenter_SettingsView_Color_OneForAll_Text"),
title:await ai("AdminCenter_SettingsView_Color_OneForAll_Text"),checked:3===f,onchange:()=>e(3)}),F("div",{
className:3===f?"colors-buttons-bar":"colors-buttons-bar disabled"
},["#2979FF","#31A629","#838789","#F0483F","#FFC509","#9AC73A","#7869C7","#00A2E8"].map((b=>F("div",{
className:b===g?"color-btn active":"color-btn",style:{backgroundColor:`${b}`},onclick:()=>function(b){
if(c(null)===b||3!==a(null))return;d(b),(0,x.fI)((async()=>{await Y.SetValue("GroupAvatarHexColorType",b),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)})())}(b)}))))))}));function e(c){
a(null)!==c&&(b(c),(0,x.fI)((async()=>{await Y.SetValue("GroupAvatarColorType",c),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)})()))}}function aM(){const[a,b]=(0,v.Uw)(!0)
;return F("div",{className:"setting"},(async b=>{const e=ap(b),f=a(b);return F("div",{className:"title-with-select"},F("span",{
className:"setting-title"},ai("AdminCenter_SettingsView_Language_Title")),(0,u.l6)(e,f,await async function(){
return aB=new Map([["",await ai("Options_Language_DefaultOption",[await c()])],...H]),aB}(),d,{
ariaLabel:ai("AdminCenter_SettingsView_Language_Title"),seamlessDropdown:!0}))}),F("span",{className:"select-description"
},ai("AdminCenter_SettingsView_LanguageSelect_Text")));async function c(){var a,b;const c=(0,r.Jy)(),d=(0,n.YW)(c)
;return null!==(b=null===(a=H.find((a=>(0,n.p3)(a[0])===d)))||void 0===a?void 0:a[1])&&void 0!==b?b:""}function d(a){(0,
t.PQ)((async()=>{var c,d;const e=ap(null),f=null!==(c=aB.get(e))&&void 0!==c?c:"",g=null!==(d=aB.get(a))&&void 0!==d?d:""
;if(f===g)return;const h=(await ai("InterfaceLanguage_Warning",[f,g])).split("\n").map((a=>F("span",{className:"text-part"},a)))
;if(await S.ShowConfirmationDialog(await ai("AdminCenter_SaveChanges_Text"),F("div",{className:"confirmation-text"
},h),await ai("AdminCenter_ConfirmationDialog_DontSave"),await ai("AdminCenter_SaveChanges_Text"))){const b=(0,
x.f4)(null,null,null);await ae.SetLanguageTag((0,n.p3)(null!=a?a:"en"),b),await Y.SetValue("LocalizationFile",null!=a?a:"en"),
aq(a),S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)}else b(!0)}),(()=>(b(!1),()=>{b(!0)
})),0,null,(a=>{(0,y.au)(a),S.ShowNotification((0,y.EB)(a),null,2)}))}}function aN(){const[a,b]=(0,v.Uw)(-1*(0,A.M1)())
;return(0,x.fI)((0,v.Mj)((async a=>{if(ar(a)){const a=await async function(){return Z.GetValue("TimeZone",-1*(0,A.M1)())}();b(a)
}}))),F("div",{className:"setting"},(b=>{const e=a(b);return F("div",{className:"title-with-select"},F("span",{
className:"setting-title"},ai("AdminCenter_SettingsView_TimeZone_Title")),(0,u.l6)(e,!0,function(){const a=[]
;for(const b of I)a.push([b,c(b)]);return new Map(a)}(),d,{ariaLabel:ai("AdminCenter_SettingsView_TimeZone_Title"),
seamlessDropdown:!0}))}));function c(a){if(0===a)return"GMT";let b,c,d;return a>=0?(b="+",c=(0,z.bf)((0,z.Qj)(a/60)),d=(0,
z.bf)(a%60)):(b="-",c=(0,z.bf)(-1*(0,z.Qj)(a/60)),d=(0,z.bf)(a%60*-1)),1===c.length&&(c="0"+c),1===d.length&&(d="0"+d),
`GMT${b}${(0,z.bf)(c)}:${d}`}function d(c){a(null)!==c&&(b(c),(0,x.fI)((async()=>{await Y.SetValue("TimeZone",c),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)})()))}}function aO(){
return F("fragment",null,(async a=>{S.GetLanguageTag(a);if("account"!==an(a))return[]
;const b=S.GetAccountInfo(a),c=S.IsCurrentUserAdmin(a),d=function(a,b){
return!!(b&&a&&a.company&&a.company.canRevertToConsumer&&void 0!==a.company.numberOfUsers&&a.company.numberOfUsers<=1)
}(S.GetLicenseInfo(a),c);return F("div",{className:"sheet"},F(aP,{account_info:b,is_admin:c}),F(aQ,{account_info:b,is_admin:c
}),F(aR,null),d&&F(aS,null))}))}function aP(a){const[b,c]=(0,v.Uw)(!1),[f,g]=(0,v.Uw)(""),h=a.account_info,i=a.is_admin
;let k=!1,l=null,m=!0;return F("div",{className:"setting"},F("span",{className:"setting-title"
},ai("AdminCenter_SettingsView_FirstAndLastName_Text")),(async a=>{var c
;const g=null!==(c=null==h?void 0:h.name)&&void 0!==c?c:"",j=b(a);j&&!k&&(0,x.C)((()=>{null==l||l.Focus()}));const m=(0,
d.QT)(g)||"NA";return F("div",{className:"first-last-name-container"},F("div",{className:D(g)},F("span",{
className:"name-icon-text"},m)),!j&&F("div",{className:"setting-value settings-name"},F("span",{className:"name"
},g),i&&F("button",{className:"edit-icon",title:await ai("Cmd_Edit_Flat"),onclick:n})),i&&j&&F("div",{
className:"first-lastname-edit-pane"},F("div",{className:"first-lastname-edit-row"},l=(0,u.ap)({
title:await ai("AdminCenter_SettingsView_FirstAndLastName_Text"),className:"first-lastname-name-edit-box",value:g,oninput:p,
onblur:r,onfocus:s,onkeypress:q}),F("div",{className:"accept-button",tabIndex:0,onmousedown:w}),F("div",{
className:"cancel-button",tabIndex:0,onmousedown:o})),(a=>F("div",{className:"error-text"},f(a)))),F(e.$n,{type:"secondary",
onClick:C,className:"settings-button"},await ai("Cmd_Logoff_Flat")))}));function n(){k||(m=!0,c(!0))}function o(){m=!1,g(""),
c(!1)}function p(){g(""),null==l||l.RemoveErrorState()}function q(a){a.key===E.U.Enter&&(!l||f(null)?o():w()),
a.key===E.U.Escape&&o()}function r(){l?setTimeout((()=>{if(m){const a=(0,B.Gt)((0,z.TT)(l).GetValue().trim())
;a&&h&&h.name!==a?(0,t.D$)((async()=>{const b=await A(a);if(null!==b)return null==l||l.SetErrorState(),null==l||l.Focus(),
void g(b)
;await S.ShowConfirmationDialog(await ai("AdminCenter_SaveChanges_Text"),await ai("Options_SaveChanges_Text",[await ai("AdminCenter_SettingsView_FirstAndLastName_Text")]),await ai("AdminCenter_ConfirmationDialog_DontSave"),await ai("AdminCenter_SaveChanges_Text"))?w():o()
}),(()=>(au(!0),()=>{au(!1)})),0,null):o()}}),100):o()}function s(){m=!0}function w(){if(m=!1,!h)return;let a=(0,
z.TT)(l).GetValue().trim();h.name!==a?(0,t.PQ)((async()=>{var b;const c=(0,x.f4)(null,null,null);if(a=(0,B.Gt)(a),
!a)return null==l||l.SetErrorState(),null==l||l.Focus(),m=!0,void g(await ai("AdminCenter_FullName_Empty_Error"))
;const d=await A(a);if(d)return null==l||l.SetErrorState(),null==l||l.Focus(),m=!0,void g(d);o(),await U.UpdateAccountInfo({
accountId:h.accountId,name:a},c),aa.onEvent.CallAllSync([{event:1,id:[null!==(b=h.accountId)&&void 0!==b?b:""]}]),
S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null)}),(()=>(k=!0,()=>{k=!1})),0,null,(a=>{(0,
y.au)(a),S.ShowNotification((0,y.EB)(a),null,2)})):o()}async function A(a){if(a.length>39){
return await ai("AdminCenter_SettingsView_Name_TooLongError_Text",[await ai("AdminCenter_SettingsView_FirstAndLastName_Text"),(0,
z.bf)(39)])}if(a.length<2){
return await ai("AdminCenter_SettingsView_Name_TooShortError_Text",[await ai("AdminCenter_SettingsView_FirstAndLastName_Text"),(0,
z.bf)(2)])}if(/[*?"<>|\\/]/g.test(a)){
return await ai("AdminCenter_SettingsView_Name_InvalidChars_Text",[await ai("AdminCenter_Name_Text"),'*?"<>|\\/'])}return null}
function C(){S.LogoutAction()}function D(a){return""===a?"first-last-name-icon":`first-last-name-icon ${(0,j.dy)(a)}`}}
function aQ(a){const[b,c]=(0,v.Uw)(!1),d=a.account_info,g=a.is_admin;return F("div",{className:"setting"},F("span",{
className:"setting-title"},ai("AdminCenter_Email_Title")),(async a=>{var c,e
;const f=null!==(c=null==d?void 0:d.email)&&void 0!==c?c:"",h=null!==(e=null==d?void 0:d.emailVerified)&&void 0!==e&&e,k=b(a)
;return F("div",{className:"email-container"},F("div",{className:"setting-value settings-email"},F("span",{className:"name"
},f),g&&F("button",{className:"edit-icon",title:await ai("Cmd_Edit_Flat"),onclick:k?null:i})),f&&!h&&d&&F("div",{
className:"account-email-not-verified"},F("div",{className:"account-email-not-verified-button",onclick:k?null:j},F("div",{
className:"info-icon"}),F("div",{className:"account-email-not-verified-text"
},await ai("Options_Account_VerifyEmail_Button_Text"))),F("div",{className:"tooltip-section"
},await ai("Options_Account_VerifyEmailTooltip_Text"))))}));function i(){d&&(0,t.PQ)((async()=>{var a,b;const c=(0,
x.f4)(null,null,null),g=await async function(a,b){let c;const d=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal ask-new-account-email",ai("AdminCenter_SettingsView_ChangeEmail_Text"),null),(()=>({Create:async(d,f)=>{
const[g,h]=(0,v.Uw)(!0),[i,j]=(0,v.Uw)(""),k=await ai("RFOError_EmailSendingFailed");return F("div",{className:"content"
},F("span",{className:"enter-email-text"},await ai("AdminCenter_SettingsView_EnterValidEmail_Text")),F("div",{
className:"email-edit-pane"},c=(0,u.ap)({title:await ai("AdminCenter_Email_Title"),className:"company-email-edit-box",value:a,
oninput:l,onkeypress:a=>m(a)}),(a=>F("div",{className:"error-text"},i(a)))),F("div",{className:"buttons-bar"},F(e.$n,{
type:"secondary",onClick:()=>f(y.kd)},await ai("Cmd_Cancel_Flat")),(a=>F(e.$n,{type:"primary",onClick:n,disabled:g(a)
},ai("Cmd_Next_Flat")))));function l(){const b=c.GetValue().trim();(0,z.RA)(a,b)||!b?h(!0):h(!1),c.RemoveErrorState(),
""!==i(null)&&j("")}function m(a){a.stopPropagation(),a.key===E.U.Enter&&n(),a.key===E.U.Escape&&c.Blur()}function n(){(0,
t.PQ)((async()=>{const a=c.GetValue().trim(),e=await o(a);if(e)throw(0,y.ZU)(y.V2,e)
;await U.SendVerificationCode("","email",a,b),d(a)}),(()=>(h(!0),()=>{h(!1)})),0,null,(a=>{(0,y.au)(a),c.SetErrorState(),
c.Focus(),(0,p.vr)(a)?j(k):j((0,y.EB)(a))}))}async function o(a){var b;if(!a)return ai("AdminCenter_Email_Empty_Error")
;const c=(0,C.MA)(a);return c.ok?null:null!==(b=c.description)&&void 0!==b?b:"Error"}},OnAfterShow:()=>{},OnBeforeHide:()=>{},
Focus:()=>{null==c||c.Focus()},Dispose:()=>{}}))));return S.ShowModalDialog(d,b)}(null!==(a=d.email)&&void 0!==a?a:"",c)
;await k(g,(async(a,b)=>{await U.UpdateAccountInfo({email:g,verificationCode:a},b)})),aa.onEvent.CallAllSync([{event:1,
id:[null!==(b=d.accountId)&&void 0!==b?b:""]
}]),S.ShowNotification(await ai("AdminCenter_SettingsView_EmailChanged_Text"),null,null)}),(()=>(c(!0),()=>{c(!1)
})),0,null,(a=>{(0,y.au)(a),(0,y.r5)(a,y.kd)}))}function j(){d&&(0,t.PQ)((async()=>{var a,b
;const c=null!==(a=d.email)&&void 0!==a?a:"",e=(0,x.f4)(null,null,null);await U.SendVerificationCode("","email",c,e),
await k(c,(async(a,b)=>{await U.UpdateAccountInfo({email:c,verificationCode:a},b)})),aa.onEvent.CallAllSync([{event:1,
id:[null!==(b=d.accountId)&&void 0!==b?b:""]
}]),S.ShowNotification(await ai("Options_Account_AccountDataIsVerifiedDialog_Email_Text"),null,null)}),(()=>(c(!0),()=>{c(!1)
})),0,null,(a=>{(0,y.r5)(a,y.kd)||((0,y.au)(a),S.ShowNotification((0,y.EB)(a),null,2))}))}async function k(a,b){const c=(0,
f.Sw)(ak,(0,f.p)((0,f.dK)("dialog-modal verify-account-data verify-account-email","",null),(()=>(0,h.z7)(a,ae,{VerifyCode:b}))))
;return S.ShowModalDialog(c,null)}}function aR(){const[a]=(0,v.Q_)(null,!1,(async function(){var a
;const b=S.GetAccountInfo(null),c=await ac.Parse(null!==(a=null==b?void 0:b.policies)&&void 0!==a?a:"")
;return!!c.find((a=>"DisableChangeMasterPassword"===a.m_name))})),[b,d]=(0,v.Uw)(!1);return F("div",{className:"setting"
},(async c=>{const d=b(c),f=a(c),g=d||f;return[F("div",{className:"setting-title-with-description"},F("div",{
className:"setting-title"},F("span",{className:f?"title disabled":"title"
},ai("AdminCenter_SettingsView_ChangeMP_Text")),f&&F("div",{className:"blocked-icon",
title:await ai("Options_ManagedByPolicy_Text")})),F("p",{className:f?"setting-description disabled":"setting-description"
},ai("AdminCenter_SettingsView_ChangeMP_Description"))),F(e.$n,{type:"secondary",className:"settings-button change-mp-button",
onClick:h,disabled:g},ai("AdminCenter_SettingsView_ChangePassword_Text"))]}));function h(){(0,t.PQ)((async()=>{const a=(0,
x.f4)(null,null,null);if(ah){const b=await async function(a){const b=await W.GetRFOnlineUserId(),d=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal change-mp-dialog enter-old-mp",ai("MasterPass_Title3"),null),(()=>(0,
i.cx)("login-dialog content",!1,null,!1,{GetAccountDisplayInfo:async()=>({userId:b.userId,serverTitle:b.serverUrl&&(0,
l.sU)(b.serverUrl)||""}),OnLogin:async(a,b)=>{if(!await c.IsMasterPassword(a,b))throw(0,
q.rb)(1,await ai("MasterPassword_Error2"));return a},onForgotPassword:null,onChangeAccount:null},T,af))))
;return S.ShowModalDialog(d,a)}(a),d=await async function(a,b){const c=await async function(a){const b=(0,
o.q6)(),c=await S.GetCompanyPoliciesValues(["MasterPasswordMinLength","MasterPasswordMinNonNumChars","MasterPasswordMinUpperCaseChars","MasterPasswordMinLowerCaseChars","MasterPasswordMinDigitChars"],a),d={
minLength:(0,z.fB)(c.MasterPasswordMinLength||b.minLength),maxLength:b.maxLength,minNonNumChars:(0,
z.fB)(c.MasterPasswordMinNonNumChars||b.minNonNumChars),
minUpperCaseChars:(0,z.fB)(c.MasterPasswordMinUpperCaseChars||b.minUpperCaseChars),minLowerCaseChars:(0,
z.fB)(c.MasterPasswordMinLowerCaseChars||b.minLowerCaseChars),
minDigitChars:(0,z.fB)(c.MasterPasswordMinDigitChars||b.minDigitChars)};return d}(b),d=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal change-mp-dialog enter-new-mp",ai("MasterPass_Title3"),null),(()=>(0,
g.rm)("change-master-password-dialog",ae,a,c,{IsPasswordCompromised:async(a,b)=>{if(!ab)return!1
;const c=await ab.GetUpdateUserDataBreaches({password:a},null,b);return!(!c||0===c.m_breaches.length)},
WasNewMasterPasswordAlreadyUsed:async(a,b,c)=>{const d=Number(await S.GetCompanyPolicyValue("EnforceMPHistory",c))
;if(!d)return!1;try{return await W.WasNewMasterPasswordAlreadyUsed(a,b,d,c)}catch(e){if((0,q.tM)(e,9)||(0,q.tM)(e,7))return!1
;throw e}},OnChangeMasterPassword:async(a,b,c,d)=>{await U.ChangeAccountPassword(a,b,c),S.CloseCompanySettingsView(),d(a)}}))))
;return S.ShowModalDialog(d,b)}(b,a);await async function(a,b){const c=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal change-master-password-successfull-modal-dialog change-mp-dialog",ai("MasterPass_Title3"),null),(()=>(0,
g.Dn)("change-master-password-successfull-dialog content",ae,a,{OnDone:async(a,b)=>{b()}}))));return S.ShowModalDialog(c,b)
}(d,a)}else await G.OpenChangeMasterPasswordDialog()}),(()=>(d(!0),()=>{d(!1)})),0,null,(a=>{(0,y.au)(a),(0,
y.r5)(a,y.kd)||S.ShowNotification((0,y.EB)(a),null,2)}))}}function aS(){const[a,b]=(0,v.Uw)(!1);return F("div",{
className:"setting"},(b=>F(e.$n,{type:"secondary",className:"revert-button",onClick:c,disabled:a(b)
},ai("AdminCenter_SettingsView_DeleteBusinessTrial_Text"))));function c(){(0,t.PQ)((async()=>{
await S.ShowConfirmationDialog(await ai("Options_RevertToConsumer_Text"),await ai("Options_RevertToConsumer_Warning_Text"),await ai("Options_No"),await ai("Options_Yes"))&&(await V.DeleteCompany(ag,null),
(0,x.fI)((async()=>{await G.OpenStartPage({startPage:(0,s.vj)()}),window.close()})()))}),(()=>(au(!0),b(!0),(0,t.aZ)(aj),()=>{
au(!1),b(!1),(0,t.r9)(aj)})),300,(()=>(aw(!0),()=>{aw(!1)})),(a=>{(0,y.au)(a),(0,y.r5)(a,y.kd)||S.ShowNotification((0,
y.EB)(a),null,2)}))}}function aT(){return F("fragment",null,(async a=>{S.GetLanguageTag(a)
;const b=an(a),c=S.GetLicenseInfo(a),d=S.IsCurrentUserAdmin(a);if("license"!==b)return[]
;const e=(null==c?void 0:c.status)?c.status:"no-license";return F("div",{className:"sheet"},F(aU,null),d&&c&&F(aV,{
license_info:c}),c&&F(aW,{license_status:e}),d&&c&&F(aX,{license_info:c
}),d&&c&&("trial"===e||"trial-expired"===e)&&F(aY,null),d&&c&&((null==c?void 0:c.autopay)||(null==c?void 0:c.canEnableAutopay))&&F(aZ,{
license_info:c}),d&&(null==c?void 0:c.autopay)&&F(a0,{license_info:c}))}))}function aU(){return F("div",{
className:"setting single-row-setting"},F("span",{className:"setting-title"
},ai("AdminCenter_SettingsView_LicenseType_Text")),F("span",{className:"setting-value"
},ai("Options_LicenseType_Business_Text")))}function aV(a){var b,c,d,f;const[g,h]=(0,
v.Uw)(!1),i=a.license_info,j=null!==(c=null===(b=null==i?void 0:i.company)||void 0===b?void 0:b.numberOfLicenses)&&void 0!==c?c:0,k=null!==(f=null===(d=null==i?void 0:i.company)||void 0===d?void 0:d.numberOfUsers)&&void 0!==f?f:0,l=(null==i?void 0:i.status)?i.status:"no-license",m=(0,
B.bt)((0,B.Df)(k,S.GetLanguageTag(null)),"/",(0,B.Df)(j,S.GetLanguageTag(null))),n=j?Math.floor(k/j*100)||1:0;return F("div",{
className:"setting single-row-setting"},F("div",{className:"licenses-count-wrapper"},F("div",{className:"licenses-count"
},F("span",{className:"licenses-count-value"},m),F("span",{className:"licenses-count-text"
},ai("AdminCenter_SettingsView_LicensesUsed_Text"))),F("div",{className:"licenses-count-bar"},F("div",{
className:"licenses-count-active-bar",style:{width:`${(0,z.bf)(n)}%`}}))),(a=>F(e.$n,{type:"special",onClick:()=>function(a){(0,
t.D$)((async()=>{const b=function(a){switch(a){case"active":case"expired":return"buymore";default:return"buy"}}(a)
;await X.OpenPaymentPage({action:b},(0,x.f4)(null,null,null))}),(()=>(h(!0),()=>{h(!1)})),0,null)}(l),disabled:g(a)
},function(a){switch(a){case"active":case"expired":return ai("AdminCenter_SettingsView_BuyMore_Text");default:
return ai("AdminCenter_BuyNow_Text")}}(l))))}function aW(a){const b=a.license_status;return F("div",{
className:"setting single-row-setting"},F("span",{className:"setting-title"
},ai("AdminCenter_SettingsView_LicenseStatus_Text")),F("span",{className:"setting-value"},function(a){switch(a){case"active":
return ai("Options_LicenseStatus_ActiveSubscription_Text");case"expired":
return ai("Options_LicenseStatus_ExpiredSubscription_Text");case"trial-expired":
return ai("Options_LicenseStatus_ExpiredTrial_Text");case"trial":default:return ai("Options_LicenseStatus_FreeTrial_Text")
;case"no-license":return ai("Options_LicenseStatus_NoLicense_Text")}}(b)))}function aX(a){const[b,c]=(0,
v.Uw)(!1),d=a.license_info,f=(null==d?void 0:d.status)?d.status:"no-license",g="trial"!==f&&"trial-expired"!==f;return F("div",{
className:"setting single-row-setting"},F("span",{className:"setting-title"
},ai("AdminCenter_SettingsView_ExpirationDate_Text")),F("div",{className:"flex-cell"}),F("span",{
className:"setting-value expiration-date"},function(a){if(!a)return"";return(0,A.fQ)(a,S.GetLanguageTag(null))
}(d.expirationTime)),g&&(a=>F(e.$n,{type:"secondary",className:"settings-renew-button",onClick:h,disabled:b(a)
},ai("AdminCenter_SettingsView_RenewNow_Text"))));function h(){(0,t.D$)((async()=>{await X.OpenPaymentPage({action:"renew"},(0,
x.f4)(null,null,null))}),(()=>(c(!0),()=>{c(!1)})),null,null)}}function aY(){const[a,b]=(0,v.Uw)(!0),[c,d]=(0,v.Uw)("");let f,g
;return F("div",{className:"setting activate-account"},F("span",{className:"title"
},ai("AdminCenter_NoLicense_ActivateAccount_Text")),F("div",{className:"form"},f=F(u.ap,{className:"order-id",
title:ai("AdminCenter_NoLicense_OrderId_Text"),oninput:h}),g=F(u.ap,{className:"order-name",
title:ai("AdminCenter_NoLicense_OrderName_Text"),oninput:h}),(b=>F(e.$n,{type:"secondary",onClick:i,disabled:a(b)
},ai("AdminCenter_NoLicense_Submit_Text")))),(a=>{const b=c(a);return b?F("div",{className:"error-text"},b):[]}));function h(){
const a=f.GetValue().trim(),e=g.GetValue().trim();b(""===a||""===e),""!==c(null)&&d("")}function i(){(0,t.PQ)((async()=>{
const a=(0,x.f4)(null,null,null),b=f.GetValue().trim(),c=g.GetValue().trim()
;if(b.replace(/[^0-9]/g,"").length!==b.length||10!==b.length)throw(0,
y.ZU)(y.V2,await ai("AdminCenter_NoLicense_ActivateAccount_Error",[b]));await U.ActivateRFBusinessLicense({orderId:b,orderName:c
},a);S.ShowNotification(await ai("AdminCenter_SettingsView_LicenseActivation_Notification"),null,null),
await S.UpdateLicenseInfo(a),aa.onEvent.CallAllSync([{event:11}])}),(()=>(au(!0),b(!0),f.Enable(!1),g.Enable(!1),()=>{au(!1),
b(!1),f.Enable(!0),g.Enable(!0)})),300,(()=>(aw(!0),()=>{aw(!1)})),(a=>{var b,c;if((0,y.au)(a),(0,D.dW)(a)){
const e=null===(c=null===(b=a.httpResponse)||void 0===b?void 0:b.bodyAsValue)||void 0===c?void 0:c.errorMessage
;d("string"==typeof e?e:(0,y.EB)(a))}else d((0,y.EB)(a))}))}}async function aZ(b){var c,d,g;const h=b.license_info;let i
;const l=!!h.autopay,m=null===(c=h.autopay)||void 0===c?void 0:c.lastErrorMessage,n=h.autopay?"iTunes"!==h.autopay.type:!m,o=null===(d=h.autopay)||void 0===d?void 0:d.nextPaymentDate,p=null===(g=h.autopay)||void 0===g?void 0:g.nextPaymentAmount,q=o?(0,
A.fQ)(o,S.GetLanguageTag(null)):null,r=p?p.replace(/&euro;/g,"€").replace(/&pound;/g,"£").replace(/&yen;/g,"¥"):null
;return F("div",{className:"setting setting-with-button auto-renewal"},F("div",{className:"title-and-text"},F("span",{
className:"setting-title"},ai("Options_AutoRenew_Text")),l&&F("div",{className:"text-wrapper"},q&&F("div",{className:"text"},(0,
j.ND)(await ai("Options_AutoRenewStatus_BillingDate_Text"),[()=>F("span",{className:"text-bold"
},q)],(a=>F("span",null,a)))),r&&F("div",{className:"text"
},(0,j.ND)(await ai("Options_AutoRenewStatus_BillingAmount_Text"),[()=>F("span",{className:"text-bold"
},r)],(a=>F("span",null,a))))),!l&&m&&F("div",{className:"text error"},m)),i=F(u.Ig,{checked:l,enable:n,onchange:function(){
az.Start((async b=>{try{const d=await async function(b){const[c,d]=(0,v.Uw)(!1),g=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal autorenew-confirmation",ai("Options_AutoRenew_SwitchConfirmation_Title"),null),(()=>(0,k._3)((async(f,g)=>{
const h=i.IsChecked(),k=!h,l=k?await ai("Options_AutoRenew_SwitchConfirmation_Off_Question_Text",["%1"]):await ai("Options_AutoRenew_SwitchConfirmation_On_Question_Text",["%1"]),m=await ai("Options_AutoRenew_SwitchConfirmation_BusinessLicense_Text")
;return F("div",{className:"content"},F("div",{className:"text"},(0,j.ND)(l,[()=>F("span",{className:"text-bold"
},m)],(a=>F("span",null,a)))),k&&F("div",{className:"warning"},F("div",{className:"warning-icon"}),F("div",{
className:"switch-warning-text"},await ai("Options_AutoRenew_SwitchConfirmation_TurnOff_RefundWarning_Text"))),F("div",{
className:"buttons-bar"},F(e.$n,{type:"secondary",onClick:()=>g((0,y.JS)())
},k?await ai("Options_AutoRenew_SwitchConfirmation_KeepOn_Text"):await ai("Options_AutoRenew_SwitchConfirmation_KeepOff_Text")),(a=>F(e.$n,{
type:"primary",onClick:n,disabled:c(a)
},ai(k?"Options_AutoRenew_SwitchConfirmation_TurnOff_Text":"Options_AutoRenew_SwitchConfirmation_TurnOn_Text")))));function n(){
(0,t.PQ)((async()=>{await a.UpdateLicenseAutoRenew(h,b),f(!0)}),(()=>(d(!0),()=>{d(!1)})),0,null,g)}})))))
;return S.ShowModalDialog(g,b)}(b);if(d){S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null);try{
await S.UpdateLicenseInfo(b)}catch(c){(0,y.au)(c),S.ShowNotification((0,y.EB)(c),null,2)}}}catch(c){(0,y.r5)(c,y.kd)||((0,
y.au)(c),S.ShowNotification((0,y.EB)(c),null,2));const a=i.IsChecked();i.SetChecked(!a)}}))}}))}function a0(a){
const b=a.license_info,c=(0,z.TT)(b.autopay),[d,g]=(0,v.Uw)(!1);return F("div",{className:"setting payment-info"},F("div",{
className:"title-and-text"},F("span",{className:"setting-title"},ai("Options_PaymentInfo_Text")),F("div",{
className:"text-wrapper"},c.cardNumberTail&&F("div",{className:"card-info"},c.cardType&&"unknown"!==c.cardType?F("div",{
className:`card-logo ${c.cardType}`}):null,F("span",{className:"card-number"},"****"+c.cardNumberTail)))),(a=>{const b=d(a)
;return"Stripe"!==c.type?[]:F(e.$n,{type:"secondary",onClick:h,disabled:b},ai("Options_PaymentInfo_UpdateBillingInfo_Text"))}))
;function h(){(0,t.PQ)((async()=>{const a=(0,x.f4)(null,null,null);await async function(a){const b=(0,f.Sw)(ak,(0,f.p)((0,
f.dK)("dialog-modal billing-info-dialog",ai("Options_PaymentInfo_UpdateBillingInfo_Text"),null),(a=>(0,m.W)(U,ae,a))))
;return S.ShowModalDialog(b,a)}(a),S.ShowNotification(await ai("Notification_SettingsChanges_Saved_Text"),null,null),
await S.UpdateLicenseInfo(a)}),(()=>(g(!0),()=>{g(!1)})),0,null,(a=>{(0,y.au)(a),(0,y.r5)(a,y.kd)||S.ShowNotification((0,
y.EB)(a),null,2)}))}}}
const H=[["en-english","English"],["id-Indonesian","Bahasa Indonesia (Indonesian)"],["cz-Czech","Česky (Czech)"],["dk-Danish","Dansk (Danish)"],["de-German","Deutsch (German)"],["at-German","Deutsch - Österreich (Austrian German)"],["es-Spanish","Español (Spanish)"],["fr-French","Français (French)"],["hr-Croatian","Hrvatski (Croatian)"],["it-Italian","Italiano (Italian)"],["lt-Lithuanian","Lietuvių (Lithuanian)"],["hu-Hungarian","Magyar (Hungarian)"],["nl-Dutch","Nederlands (Dutch)"],["no-Norwegian","Norsk (Norwegian)"],["pl-Polish","Polski (Polish)"],["br-Brasilian","Português Brasileiro (Portuguese-BR)"],["pt-Portuguese","Português Portugal (Portuguese-PT)"],["sk-Slovak","Slovenčina (Slovak)"],["sb-Serbian","Srpski (Serbian-Latin)"],["fi-Finnish","Suomi (Finnish)"],["se-Swedish","Svenska (Swedish)"],["tr-Turkish","Türkçe (Turkish)"],["el-Greek","Ελληνικά (Greek)"],["ru-Russian","Русский (Russian)"],["sc-Serbian","Српски (Serbian-Cyrillic)"],["ua-Ukrainian","Українська (Ukrainian)"],["hy-Armenian","Հայերեն (Armenian)"],["he-Hebrew","עברית (Hebrew)"],["ar-Arabic","العربية (Arabic)"],["fa-Persian","فارسي (Persian)"],["hi-Hindi","हिंदी (Hindi)"],["kr-Korean","한국어 (Korean)"],["jp-Japanese","日本語 (Japanese)"],["zh-Chinese","正體中文 (Traditional Chinese)"],["cn-Chinese","简体中文 (Simplified Chinese)"]],I=[-720,-660,-600,-540,-480,-420,-360,-300,-270,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,510,540,570,600,660,720,780,840]
},29224:function(a,b,c){"use strict";c.d(b,{F:function(){return g}});var d=c(97490),e=c(13113),f=c(4153);function g(a){const b=a
;let c=null,g=null;const[h,i]=(0,d.Uw)("dashboard"),[j,k]=(0,d.Uw)("dashboard"),[l,m]=(0,d.Uw)(v(null)),[n,o]=(0,d.Uw)(w(null))
;return{Init:function(){c=t(),i(c.m_view),p(c.m_view)},UnInit:function(){window.removeEventListener("hashchange",s)},
AddOnHashChangeListener:function(a){g=a,window.addEventListener("hashchange",s)},GetState:r,SetState:function(a,d,g){if((0,
f.XM)(c,a))return;if(i(a.m_view,u),p(a.m_view),q(a),c=Object.assign({},a),d){const d={};b&&(d[b]=!0),d["ac-view"]=a.m_view,
c.m_id&&(d.id=c.m_id),c.m_query&&(d.query=c.m_query),c.m_tab&&(d.tab=c.m_tab);const f=(0,e.HT)(d)
;g?window.history.replaceState(c,`RoboForm Admin Center - ${a.m_view}`,`#${f}`):window.history.pushState(c,`RoboForm Admin Center - ${a.m_view}`,`#${f}`)
}},GetActiveView:h,GetActiveTab:j,GetUserTab:function(){const a=r();switch(a.m_tab){case"groups":case"files":case"security":
case"devices":case"activity":case"account":case"policies":return a.m_tab;default:return"groups"}},GetGroupTab:function(){
const a=r();switch(a.m_tab){case"details":case"users":case"files":case"security":case"backups":case"policies":return a.m_tab
;default:return"users"}},GetReportsTab:function(a){const b=r();switch(b.m_tab){case"company":case"users":case"groups":
return b.m_tab;default:return a?"company":"users"}},GetSettingsTab:l,GetPoliciesTab:n};function p(a){switch(a){case"dashboard":
case"users":case"groups":case"data":case"policies":case"integration":case"reports":k(a);break;case"user-details":k("users")
;break;case"group-details":k("groups")}}function q(a){switch(a.m_view){case"settings":m(v(a),b);break;case"policies":o(w(a),b)}
function b(a,b){return a===b}}function r(){return c||t()}function s(){const a=t();g&&g(a)}function t(){const a=(0,e._V)((0,
e.R2)(location.hash)),b=function(a){switch(a){case"dashboard":case"users":case"groups":case"data":case"policies":
case"integration":case"reports":case"settings":case"user-details":case"group-details":case"search":return a;default:
return"dashboard"}}((0,e.h0)(a,"ac-view")),c=(0,e.h0)(a,"id"),d=(0,e.h0)(a,"tab"),f=(0,e.h0)(a,"query"),g={m_view:b}
;return""!==c&&(g.m_id=c),""!==d&&(g.m_tab=d),""!==f&&(g.m_query=f),g}function u(a,b){return a===b}function v(a){
const b=null!=a?a:r();switch(b.m_tab){case"account":case"general":case"license":return b.m_tab;default:return"general"}}
function w(a){const b=null!=a?a:r();switch(b.m_tab){case"security-and-access":case"roboform-data":case"user-settings":
return b.m_tab;default:return"security-and-access"}}}},83768:function(a,b,c){"use strict";c.d(b,{H:function(){return h}})
;var d=c(84117),e=c(71644),f=c(78440),g=c(69893);c(13117);function h(a,b,c,h){const i=a,j=b,k=c,l=h.LocalizeString
;let m="",n=null;const o=new Map,p=(0,f.h1)();return{Init:function(a){m=a},Clear:function(){p.Cancel(),n=null,o.clear()},
GetCompanyMembers:async function(a,b){if(!m)throw(0,g.ZU)(g.VH,"AdminCenterUsersData is not initialized, provide Company ID")
;n&&!a||(n=await p.Execute({action:async a=>{o.clear();let b=await i.GetCompanyMembers(m,{doPost:!0,
fields:"+accessDate, +securityStats, +isManager, +created"},a);if("number"==typeof b)throw(0,
g.ZU)(g.V2,"Wrong users list format: returned value is number");return b=b.filter((a=>{var b
;return(null===(b=a.name)||void 0===b?void 0:b.toLowerCase())!==d.Ho.toLowerCase()})),[...b]}},b));return n},
GetSortedAndFilteredUsersList:async function(a,b,c){var f;let g=[...a];const h=new Map;if(b.m_search&&b.m_search.m_query){
const a=b.m_search;g=g.filter((b=>{var c;if(0===a.m_target){const c=(0,e.zR)(a.m_query,b.name||b.email,!1,!1,!1,!1,!1,!1)
;return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),h.set(b.id,c.rank),!0)}if(1===a.m_target){const c=(0,
e.zR)(a.m_query,b.email,!1,!1,!1,!1,!1,!1);return!!c.matches.length&&(a.m_results_map.set(b.id,c.matches),h.set(b.id,c.rank),!0)
}{const d=(0,e.zR)(a.m_query,`${null!==(c=b.name)&&void 0!==c?c:b.email} ${b.email}`,!1,!1,!1,!1,!1,!1)
;return!!d.matches.length&&(a.m_results_map.set(b.id,d.matches),h.set(b.id,d.rank),!0)}}))}if(b.m_role&&b.m_role.length){
const a=b.m_role;g=g.filter((b=>b.isAdmin?a.includes(0):b.isManager?a.includes(1):a.includes(2)))}
if(b.m_status&&b.m_status.length){const a=b.m_status;g=g.filter((b=>{if(b.disabled)return a.includes(1)
;if(b.suspended)return a.includes(5);if(2===b.status&&b.isNotComplete)return a.includes(4)
;if(0===b.status&&b.isNotComplete)return a.includes(2);if(1===b.status){if(a.includes(6))return!0
;if(a.includes(0)&&b.accessDate&&(0,d.e0)(b.accessDate,d.g1))return!0;if(a.includes(3)&&b.accessDate&&!(0,
d.e0)(b.accessDate,d.g1))return!0}
return!!(a.includes(0)&&b.accessDate&&(0,d.e0)(b.accessDate,d.g1))||!(!a.includes(3)||!b.accessDate||(0,
d.e0)(b.accessDate,d.g1))}))}if(b.m_inactive){const a=b.m_inactive;g=g.filter((b=>b.accessDate&&!(0,d.e0)(b.accessDate,a)))}
if(b.m_added){const a=b.m_added;g=g.filter((b=>b.created&&(0,d.IW)(b.created,a)))}if(b.m_score&&b.m_score.length){
const a=b.m_score;for(let b=g.length-1;b>=0;b--){const c=g[b],e=await(0,d.sm)((0,d.VK)(c))
;e?e<=d.jo?a.includes(0)||g.splice(b,1):e<=d.EZ?a.includes(1)||g.splice(b,1):e<=d._j?a.includes(2)||g.splice(b,1):a.includes(3)||g.splice(b,1):g.splice(b,1)
}}if(b.m_compromised)for(let e=g.length-1;e>=0;e--){const a=g[e],b=await(0,d.ud)(a.securityStats)
;(null==b?void 0:b.m_compromised)||g.splice(e,1)}if(b.m_2fa&&b.m_2fa.length){const a=b.m_2fa;for(let b=g.length-1;b>=0;b--){
const e=g[b],f=(0,d.VK)(e),h=(0,d.lW)(f);if(2===h||4===h){a.includes(2)||g.splice(b,1);continue}const i=await q(f.m_id,h,c)
;a.includes(i.m_status)||g.splice(b,1)}}if(b.m_groups&&b.m_groups.length){const a=new Set,d=b.m_groups;for(const b of d){
(await k.GetSharedAccountRecipients2(b,!0,{
fields:"-mp,-sender,-status,-current,-serverOnly,-name,-isAdmin,-isManager,-accepted,-company,-accountInfo,-policies,-recipientEmail,-isNotComplete,-recipientName,-recipientAccessDate"
},c)).forEach((b=>a.add(b.accountId)))}g=g.filter((b=>a.has(b.id)))}if(b.m_sort){const a=b.m_sort
;if(0===a.m_sort_by)g.sort(((b,c)=>{const d=b.name||b.email,e=c.name||c.email
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)
}));else if(3===a.m_sort_by)g.sort(((b,c)=>a.m_asc?b.email.localeCompare(c.email):c.email.localeCompare(b.email)));else if(4===a.m_sort_by)g.sort(((b,c)=>{
const e=(0,d.lW)((0,d.VK)(b)),f=(0,d.lW)((0,d.VK)(c));return a.m_asc?e-f:f-e}));else if(5===a.m_sort_by)g.sort(((b,c)=>{
var d,e,f,g
;return a.m_asc?(null!==(d=c.created)&&void 0!==d?d:0)-(null!==(e=b.created)&&void 0!==e?e:0):(null!==(f=b.created)&&void 0!==f?f:0)-(null!==(g=c.created)&&void 0!==g?g:0)
}));else if(6===a.m_sort_by){const b=new Map;for(const a of g){const c=await(0,d.sm)((0,d.VK)(a));b.set(a.id,null!=c?c:0)}
g.sort(((c,d)=>{var e,f;const g=null!==(e=b.get(c.id))&&void 0!==e?e:0,h=null!==(f=b.get(d.id))&&void 0!==f?f:0
;return a.m_asc?h-g:g-h}))}else 1===a.m_sort_by?g.sort(((b,c)=>{
const d=parseInt(b.accessDate||"0"),e=parseInt(c.accessDate||"0");return a.m_asc?e-d:d-e
})):h.size>0&&(null===(f=b.m_search)||void 0===f?void 0:f.m_query)?g.sort(((a,b)=>{var c,d
;const e=null!==(c=h.get(a.id))&&void 0!==c?c:0;return(null!==(d=h.get(b.id))&&void 0!==d?d:0)-e})):g.sort(((b,c)=>{
const d=b.name||b.email,e=c.name||c.email;return a.m_asc?d.localeCompare(e):e.localeCompare(d)}))}else g.sort(((a,b)=>{
const c=a.name||a.email,d=b.name||b.email;return c.localeCompare(d)}));return g},GetMemberGroupsCount:async function(a,b){
const c=await i.GetMemberGroups(a,null,b)
;if("number"==typeof c)throw(0,g.ZU)(g.V2,"The return value should be a number. Other type returned.")
;return c.filter((a=>a.company&&!a.disabled)).length},GetAltAuthValue:q,AddUsersToGroups:async function(a,b,c,d){
await i.AddMemberToGroup(a,b,c,d)},RemoveUsersFromGroups:async function(a,b,c){await i.RemoveMemberFromGroup(a,b,c)}}
;async function q(a,b,c){let d=o.get(a);if(d)return d;if(2===b||4===b)return d={m_status:2,
m_text:await l("AdminCenter_UsersTabView_AltAuth_Email_Text"),m_tooltip:await l("AdminCenter_UsersTabView_AltAuth_Email_Tip")},
o.set(a,d),d;try{switch((await j.GetAccountInfo(a,c)).altAuth){case"email":d={m_status:2,
m_text:await l("AdminCenter_UsersTabView_AltAuth_Email_Text"),m_tooltip:await l("AdminCenter_UsersTabView_AltAuth_Email_Tip")}
;break;case"sms":d={m_status:4,m_text:await l("AdminCenter_UsersTabView_AltAuth_Sms_Text"),
m_tooltip:await l("AdminCenter_UsersTabView_AltAuth_Sms_Tip")};break;case"totp":d={m_status:3,
m_text:await l("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Text"),
m_tooltip:await l("AdminCenter_UsersTabView_AltAuth_GoogleAuth_Tip")};break;default:d={m_status:1,
m_text:await l("AdminCenter_UsersTabView_AltAuth_Off_Text"),m_tooltip:""}}return o.set(a,d),d}catch(e){return{m_status:1,
m_text:await l("AdminCenter_UsersTabView_AltAuth_Off_Text"),m_tooltip:""}}}}},28376:function(a,b,c){"use strict";c.d(b,{
G:function(){return an}})
;var d=c(1151),e=c(29224),f=c(6998),g=c(84117),h=c(85557),i=c(33094),j=c(73549),k=c(60215),l=c(90655),m=c(78749),n=c(67310),o=c(55819),p=c(24532),q=c(49245),r=c(45655),s=c(78220),t=c(29526),u=c(53166),v=c(83768),w=c(38136),x=c(30045),y=c(98266),z=c(47333),A=c(87965),B=c(3566),C=c(93075),D=c(38221),E=c(19365),F=c(83645),G=c(4234),H=c(89369),I=c(71644),J=c(54811),K=c(12131),L=c(78949),M=c(71796),N=c(88579),O=c(25807),P=c(99196),Q=c(21253),R=c(70346),S=c(79997),T=c(79999),U=c(84479),V=c(31173),W=c(66423),X=c(97490),Y=c(63956),Z=c(32105),aa=c(97514),ab=c(88262),ac=c(40371),ad=c(40868),ae=c(73863),af=c(78440),ag=c(13113),ah=c(4153),ai=c(95399),aj=c(70026),ak=c(69893),al=(c(13117),
c(84224)),am=c(91764)._;function an(a,b,c,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI){
const aJ=aw,aK=aJ.LocalizeString,aL=aE,aM=aF,aN=c,aO=aq,aP=aw,aQ=az,aR=ar,aS=as,aT=at,aU=au,aV=av,aW=ap,aX=an,aY=ao,aZ=b,a0=aC,a1=aG,a2=aH,a3=aI,a4=a
;a4.onDataChanged.Add(fP);const a5=function(){const a={onEvent:(0,ac.dU)(),onUsersViewShown:(0,ac.dU)(),onGroupsViewShown:(0,
ac.dU)(),onDataViewShown:(0,ac.dU)(),onReportsViewShown:(0,ac.dU)(),onPoliciesViewShown:(0,ac.dU)(),onUserDeviceShown:(0,
ac.dU)(),onInitSearchPane:(0,ac.dU)(),onClearSearchResults:(0,ac.dU)(),onUpdateSearchResults:(0,ac.dU)(),
onSearchResultsNavigation:(0,ac.dU)()};return a}();a5.onEvent.Add(fO);const[a6,a7]=(0,X.Uw)(!1),[a8,a9]=(0,
X.Uw)("light"),[ba,bb]=(0,X.Uw)("en"),bc=aD,bd=(0,aj.t)(),be=(0,M.P4)({GetServerTemplates:async function(a){var b;const c={}
;return null!==(b=await bd.GetData("templates",{maxAgeSec:86400,default:c,onGetData:async a=>{try{
return await aN.GetTemplates(a)}catch(b){if((0,K.tM)(b,7)){const b=`${await(0,z.AT)(aZ)}/templates`;return await(0,ab.$)(b,a,aM)
}throw b}}},a))&&void 0!==b?b:c},GetEnterpriseTemplates:fJ,GetCustomTemplates:fL,GetDisableCommonTemplates:async function(){
const a=await d0(!1,null),b=(await bj.Parse(a.policies||"")).find((a=>"DisableCommonTemplates"===a.m_name));return!!b}}),bf=(0,
M.EV)({GetEnabledTemplates:fJ,GetCustomTemplates:fL,SaveCustomTemplates:async function(a,b,c){var d,e,f,g;const h=await d0(!1,c)
;if(null===a&&null===b)return;let i=await bj.Parse(h.policies||"");null!==a&&(i=i.filter((a=>"AllRfTemplates"!==a.m_name)),
a&&i.push({m_name:"AllRfTemplates",
m_section:null!==(e=null===(d=H.gX.AllRfTemplates)||void 0===d?void 0:d.m_section)&&void 0!==e?e:"[CONFIG]",m_value:a}))
;null!==b&&(i=i.filter((a=>"RfTemplates"!==a.m_name)),b&&i.push({m_name:"RfTemplates",
m_section:null!==(g=null===(f=H.gX.RfTemplates)||void 0===f?void 0:f.m_section)&&void 0!==g?g:"[CONFIG]",m_value:b}))
;const j=await bj.Save(i);await aX.UploadCompanyPolicies(bw,j,c),await d0(!0,c)}},aJ);let bg=ay,bh=ax;const bi=(0,
C._)(aZ,aM),bj=(0,H.fA)(),bk=(0,e.F)(aQ);bk.Init();let bl=null;const[bm,bn]=(0,X.Uw)(null),[bo,bp]=(0,X.Uw)(null),[bq,br]=(0,
X.Q_)(null,null,(()=>e1(!1,(0,af.f4)(null,null,null)))),[bs,bt]=(0,X.Q_)(null,null,e3),[bu,bv]=(0,X.Uw)(!1);(0,af.fI)((0,
X.Mj)((async a=>{const b=bq(a)?"buymore":await e3(null);bt(b)})));let bw,bx,by=!1;const bz=(0,af.h1)(),bA=(0,af.h1)(),bB=(0,
af.h1)(),bC=(0,af.E5)(),bD=(0,af.tG)(),bE=(0,af.tG)(),bF=(0,af.tG)(),bG=(0,af.tG)(),bH=(0,W.S)(),bI=(0,af.tG)(),bJ=12e4
;let bK="";const bL=(0,T.AZ)(aM),bM=(0,J.I9)(a4,aZ,aN,aB,aJ);let bN,bO,bP=null;const[bQ,bR]=(0,X.Uw)(!0),[bS,bT]=(0,
X.Uw)(null),[bU,bV]=(0,X.Uw)(null),[bW,bX]=(0,X.Uw)(!1),[bY,bZ]=(0,X.Uw)(!1);let b0=null,b1=null,b2=null;const[b3,b4]=(0,
X.Uw)(!1);let b5=!1,b6=null;const b7=new Map,b8=new Map;let b9,ca;const cb=(0,v.H)(aX,aN,aY,aJ);let cc,cd;const ce=(0,
w.H)(aX,aW,a4,aY,aO);let cf,cg;const[ch,ci]=(0,X.Uw)(null);let cj,ck;const cl=(0,ah.kA)();let cm,cn=null;const co=(0,af.h1)()
;let cp,cq,cr,cs,ct,cu,cv=null;const cw=(0,af.tG)();let cx,cy,cz,cA=null;const cB=(0,af.tG)(),cC=(0,af.tG)();let cD,cE,cF=null
;const cG=(0,af.tG)();let cH,cI,cJ,cK=null,cL=0,cM=null,cN=!1,cO=!1,cP=null,cQ=null,cR=null,cS=null
;const cT=1170,cU=500,cV=630,cW=5;let cX,cY,cZ,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,da,db,dc,dd,de=null
;window.addEventListener("resize",(()=>{fy()}),!0);return{Create:async function(){var a
;a9(await bc.GetValue("StartPage.Theme",(0,
D.Cj)())),await(0,z.sJ)(aR,aJ,!0),bb(null!==(a=await aJ.GetLanguageTag(null))&&void 0!==a?a:"en"),await e7((0,
af.f4)(null,null,null)),await dg(),await dh(),cb.Init(bw),ce.Init(bw,bx,bu(null)),await(0,X.Mj)((async a=>{ba(a),
cZ=await aK("PassAud_PwdStrengthWeak"),c0=await aK("PassAud_PwdStrengthMedium"),c1=await aK("PassAud_PwdStrengthGood"),
c2=await aK("PassAud_PwdStrengthStrong"),c3=await aK("PassAud_GoodSafetyLevel_Tittle"),
c4=await aK("PassAud_MediumSafetyLevel_Tittle"),c5=await aK("PassAud_AverageSafetyLevel_Tittle"),
c6=await aK("PassAud_BadSafetyLevel_Tittle"),c7=await aK("AdminCenter_UserTabView_NotAvailable_Text"),
c8=await aK("AdminCenter_UsersTabView_UserStatus_Active_Text"),c9=await aK("AdminCenter_UsersTabView_UserStatus_Blocked_Text"),
da=await aK("AdminCenter_UsersTabView_UserStatus_Invited_Text"),
db=await aK("AdminCenter_UsersTabView_UserStatus_NotComplete_Text"),
dc=await aK("AdminCenter_UsersTabView_UserStatus_Suspended_Text"),
dd=await aK("AdminCenter_UsersTabView_UserStatus_Inactive_Text"),cY=await aK("Cmd_Delete_Flat"),cX=await aK("HomeFolder")})),
b9=await dn(),cc=await ds(),cf=await dW(),cj=await ej(),cp=await eU(),ct=await eX(),bu(null)&&(cr=await async function(){
return cs=(0,o.ug)(aX,aZ,aN,a5,bw,bH,aJ,{GetCompanyInfo:d0,GetAccountInfo:dl,GetCompanyGroups:ce.GetCompanyGroups,
GetGroupPolicyValue:fM,GetLanguageTag:ba,ShowModalDialog:fA,ShowNotification:fE,ShowSelectGroupsForSSO:dQ,
UploadCompanyPolicies:dY,UploadGroupPolicies:dZ}),cs.Create()}());const b=bk.GetActiveView(null);bP=am("div",{
className:"dark"===a8(null)?"admin-center-view dark-theme":"admin-center-view light-theme",onclick:fx},bN=am("div",{
className:"settings"===b?"main-view settings-shown hidden":"main-view hidden"},b2=am(di,null),b1=am("main",{
className:"main-section"},am(dj,null),b6=am("div",{className:"tab-views",oncontextmenu:a=>a.preventDefault()
},b9,cc,cf,cj,cp,bu(null)&&cr,ct,cy=am("section",{className:"tab-view-search tab-view hidden"}),dk(),cD=am("section",{
className:"tab-view tab-view-details hidden"}),cH=am("section",{className:"tab-view tab-view-details hidden"}),cx=am("section",{
className:"tab-view tab-view-no-license hidden"})))),(a=>bQ(a)?am("div",{className:"loading-view"},am("div",{
className:"action-progress-overlay-circle size64"})):[]),cM=am("div",{className:"edit-pane closed"},am("div",{
className:"resize-handle",onmousedown:fe})),cR=am(B.Eg,null),bO=am("div",{className:"logout-view hidden"
},await aK("AdminCenter_LoginToRoboForm_Text"))),b7.set("dashboard",b9),b7.set("users",cc),b7.set("groups",cf),
b7.set("data",cj),b7.set("policies",cp),b7.set("reports",ct),b7.set("search",cy),b7.set("user-details",cD),
b7.set("group-details",cH),b7.set("license-expired",cx),b8.set("dashboard",ca),b8.set("users",cd),b8.set("groups",cg),
b8.set("data",ck),b8.set("policies",cq),b8.set("reports",cu),bu(null)&&(b7.set("integration",cr),b8.set("integration",cs))
;return bP},OnAfterShow:function(){var a;df(),(0,af.fI)(async function(){if(!bu(null))return
;if(!a0||!await a0.GetValue("ShowCompanyOnboarding",!1))return;const a=await d0(!1,null);if(!a.trial)return;try{
await async function(){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal onboarding-dialog","",null),(()=>(0,
x._3)((async(a,b)=>{
const c="https://help.roboform.com/hc/en-us/articles/28270326572941-New-User-Onboarding",d="https://help.roboform.com/hc/en-us/articles/115002550891-Group-Management",e="https://help.roboform.com/hc/en-us/articles/115004516567-Assigning-RoboForm-Files-to-Groups-Sharing",f="https://help.roboform.com/hc/en-us/articles/28270326572941-New-User-Onboarding#h_01JAGF2GMMEND7E6PZESK30BKY",g="https://help.roboform.com/hc/categories/8261143060493-Getting-Started"
;return am("div",{className:"content"},am("span",{className:"title"},await aK("AdminCenter_Onboarding_Title")),a2&&am("span",{
className:"text"},(0,B.ND)(await aK("AdminCenter_Onboarding_Install_Text"),[()=>am("a",{href:"#",className:"link",onclick:i
},aK("AdminCenter_Onboarding_Install_Link"))],(a=>am("span",null,a)))),am("span",{className:"text bold-text"
},await aK("AdminCenter_Onboarding_Text")),am("ul",{className:"links-list"},am("li",{className:"item"},am("a",{href:c,
className:"link",target:"_blank"},await aK("AdminCenter_Onboarding_AddUsers_Text"))),am("li",{className:"item"},am("a",{href:d,
className:"link",target:"_blank"},await aK("AdminCenter_Onboarding_AddGroups_Text"))),am("li",{className:"item"},am("a",{href:f,
className:"link",target:"_blank"},await aK("AdminCenter_Onboarding_Integration_Text"))),am("li",{className:"item"},am("a",{
href:e,className:"link",target:"_blank"},await aK("AdminCenter_Onboarding_AddData_Text")))),am("span",{className:"text"},(0,
B.ND)(await aK("AdminCenter_Onboarding_More_Text"),[()=>am("a",{href:g,className:"link",target:"_blank"
},aK("AdminCenter_Onboarding_More_Link"))],(a=>am("span",null,a)))),am("span",{className:"text"},(0,
B.ND)(await aK("AdminCenter_Onboarding_Support_Text"),[()=>am("span",{className:"link",onclick:h
},aK("AdminCenter_Onboarding_Support_Link"))],(a=>am("span",null,a)))),am("span",{className:"text"
},await aK("AdminCenter_Onboarding_Signature_Text")));function h(){(0,af.fI)(aO.ContactSupport({reportType:"ContactSupport"
},null))}function i(){const a=(0,V.m)(),b=`${window.location.origin+window.location.pathname}#instruction-browser=${a}`
;window.location.replace(b),window.location.reload()}}))))),null)}()}catch(b){(0,
ak.r5)(b,ak.kd)&&a0&&await a0.SetValue("ShowCompanyOnboarding",!1)}}()),bk.AddOnHashChangeListener(dm),
null===(a=aZ.onSyncSucceeded)||void 0===a||a.Add(fQ),aJ.onLanguageTagChange.Add(fR)},OnBeforeHide:function(){fb(),
null==cR||cR.Hide()},Focus:function(){},Dispose:function(){var a;cb.Clear(),ce.Clear(),null==cS||cS.Cancel(),cS=null,
cC.Cancel(),cG.Cancel(),cB.Cancel(),bI.Cancel(),bz.Cancel(),bA.Cancel(),bB.Cancel(),co.Cancel(),bD.Cancel(),bE.Cancel(),
bG.Cancel(),
bC.Cancel(),a5.onEvent.Remove(fO),a4.onDataChanged.Remove(fP),null===(a=aZ.onSyncSucceeded)||void 0===a||a.Remove(fQ),
aJ.onLanguageTagChange.Remove(fR),bk.UnInit()}};function df(){by=!0,bR(!1),(0,Y.SE)(bO),(0,Y.l5)(bN),
document.body.classList.remove("dark-theme"),a6(null)&&bk.SetState({m_view:"license-expired"},!0,!0),dm(bk.GetState()),e9(),
fy(),by?((0,Y.SE)(bO),(0,Y.l5)(bN)):(0,af.fI)((async()=>{await fd(),fh(),(0,Y.SE)(bN),(0,Y.l5)(bO),bR(!1),e4(),
await aO.ShowLoginUI(null)})())}async function dg(){if(!bg)try{const a=(0,R.v)(aw);await a.Init();const b=(0,Q.o)()
;await b.Init(a,a4),bg=b}catch(a){(0,ak.au)(a)}}async function dh(){if(!bh){const a=(0,S.N)(aw);await a.Init(),bh=a}}
function di(){return am("header",{className:"page-header"},function(){return async b=>{const c=a6(b);return am("a",{
className:c?"header-logo disabled":"header-logo",onclick:b=>a(b,c),href:"#",title:"RoboForm"})};function a(a,b){
a.preventDefault(),b||("settings"===bk.GetActiveView(null)&&e0(),dp("dashboard"))}}(),function(){let a;return am("div",{
className:"search-query"},(async g=>{ba(g);const h=bS(g),i=a6(g);return null!==h&&(0,af.C)((()=>null==a?void 0:a.focus())),
am("div",{className:"search-box dropdown-handler"},a=am("input",{type:"text",id:"main-search-input",
className:"main-search-input",placeholder:await aK("AdminCenter_Search_Placeholder"),value:null!=h?h:"",disabled:i,
spellcheck:!1,onfocus:i?null:b,oninput:i?null:c,onkeydown:i?null:d,onblur:i?null:e}),am("div",{className:"search-loop-icon"
}),h&&(a=>am("div",{className:"search-results-counter"},(0,ah.bf)(bU(a)))),h&&am("div",{className:"search-clear-query-icon",
onclick:f}))}));function b(){e4()}function c(){cB.Start((async b=>{await(0,af.Gu)(500,b,!1);const c=(0,ah.TT)(a).value.trim()
;if(!c)return bT(""),void fq();c!==bS(null)&&(bT(c),await fo(c,!0))}))}function d(a){switch(a.key){case al.U.ArrowUp:
case al.U.ArrowDown:case al.U.Enter:a.preventDefault(),a5.onSearchResultsNavigation.CallAllSync(a);break;case al.U.Escape:fq()}}
function e(){const a=bS(null);""===a&&null!==a&&bT(null)}function f(){fq()}}(),am("div",{className:"flex-cell"}),function(){
let a,b;return b0=am("div",{className:"fade-in-screen"}),async b=>{var e;const f=a6(b),j=bm(b),k=bo(b),l=c(bs(b));bW(b)&&l?(0,
Y.l5)(l):l&&(0,Y.SE)(l);let m=(null==j?void 0:j.name)||"Company",n="account-email",o=null;if(j&&j.logo){const a=(0,
ad.fI)(j.logo);o=await(0,ad.Z$)(a),m="",n=(0,ae.bt)(n," ","has-logo")}const p=(0,
g.QT)((null==k?void 0:k.name)||(null==j?void 0:j.name)||""),q=k?`initials round ${(0,
B.dy)(k.name||(null==j?void 0:j.name)||"")}`:"initials bg-color-default-blue";return am("div",{className:"account-view noselect"
},a=am("button",{className:f?"account-box dropdown-handler disabled":"account-box dropdown-handler",onclick:f?null:d,disabled:f
},am("div",{className:n,title:j?m:""},null!==(e=i(o))&&void 0!==e?e:m),am("div",{className:q},p)),l,h(),b0)};function c(a){
let c=bu(null);c&&"buy"!==a&&(c=!1);let d=!1;return am("div",{className:"account-menu dropdown-menu popup-menu hidden"
},(a=>am("div",{className:"item",onclick:e},am("div",{className:"icon icon-theme"}),am("span",{className:"text"
},aK("StartPage_DarkMode")),am("div",{className:"submenu-flexy-space"}),am(Z.Ig,{checked:"dark"===a8(a),onchange:()=>e
}))),am("div",{className:"item",onclick:g},am("div",{className:"icon icon-startpage"}),am("span",{className:"text"
},aK("AdminCenter_OpenStartPage"))),am("div",{className:"item",onclick:h},am("div",{className:"icon icon-settings"}),am("span",{
className:"text"},aK("Cmd_Settings_Flat"))),am("hr",{className:"separator"}),c&&am("div",{className:"item",onclick:i},am("div",{
className:"icon icon-upgrade"}),am("span",{className:"text highlight text-bold"},aK("AdminCenter_BuyNow_Text"))),b=am("div",{
className:"item submenu-item",onclick:j},am("div",{className:"icon icon-left icon-help"}),am("span",{className:"text"
},aK("Cmd_Help_Flat")),am("div",{className:"submenu-flexy-space"}),am("div",{className:"submenu-icon"})),am("hr",{
className:"separator"}),am("div",{className:"item",onclick:f},am("div",{className:"icon icon-logout"}),am("span",{
className:"text"},aK("Cmd_Logoff_Flat"))));function e(a){a.stopPropagation(),e6()}function g(){e4(),(0,
af.fI)(aO.OpenStartPage(null))}function h(){e4(),"settings"!==bk.GetActiveView(null)&&(0,af.fI)(eZ("general"))}function i(){
d||(e4(),(0,Y.D$)((async()=>{await aO.OpenPaymentPage({action:"buy"},null)}),(()=>(d=!0,()=>{d=!1})),null,null))}function j(a){
a.stopPropagation(),bY(null)?bZ(!1):k()}function k(){bZ(!0)}}function d(a){bW(null)?e4():e(),a.stopPropagation()}function e(){
null==b0||b0.classList.add("fade-in"),bX(!0)}function f(){e4(),e5()}function h(){return a=>{const b=bY(a),g=b?f():"0px"
;return am("div",{className:"account-menu help-submenu dropdown-menu popup-menu "+(b?"":"hidden"),style:{top:g}},am("div",{
className:"item",onclick:c},am("span",{className:"text"},aK("Cmd_Help_HelpCenter_Key"))),am("div",{className:"item",onclick:d
},am("span",{className:"text"},aK("Cmd_Help_ContactSupport_Key"))),am("hr",{className:"separator"}),am("div",{className:"item",
onclick:e},am("span",{className:"text"},aK("AdminCenter_About_Text"))))};function c(){(0,af.fI)(aP.OpenUrl({url:z.RS,newTab:!0,
reuseExisting:!1},null)),e4()}function d(){(0,af.fI)(aO.ContactSupport({reportType:"ContactSupport"},null)),e4()}function e(){
e4(),(0,af.fI)(g())}function f(){const c=b.getBoundingClientRect(),d=a.getBoundingClientRect();return(0,
V.Md)(c.y-d.y+c.height-4)}async function g(){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal about-dialog",await aK("AboutPage_Title"),null),(()=>(0,x._3)((async(a,b)=>{
const c="Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.",d=(0,E.U)(),e=await aK("About_Version2"),f=(0,aa.KZ)()
;return am("div",{className:"content"},am("div",{className:"text"},e),am("div",{className:"text hint selectable"},d),am("div",{
className:"text hint selectable"},f),am("div",{className:"link-section"},am("a",{className:"roboform-link",href:z.l$,
target:"_blank"},"www.roboform.com"),am("span",{className:"hint-text copyright-text"},c)),am("div",{className:"buttons-bar"
},am("button",{className:"button default-button",onclick:()=>a()},await aK("Cmd_Ok_Flat"))))}))))),null)}}function i(a){
if(!a)return null;let b=a;b.startsWith("<")&&(b=b.substring(1)),b.endsWith(">")&&(b=b.substring(0,b.length-1));const c=new Map
;b.split(" ").forEach((a=>{const[b,d]=a.split("=");c.set(b,d)}));const d=c.get("src");if(!d)return null;const e=new Image
;return e.src=d.replace(/"/g,""),e}}())}function dj(){return am("aside",{className:"navigation",onmouseenter:a,
onmouseleave:function(){if(!b5)return;null==bP||bP.classList.remove("navigation-hovered")},onclick:a},function(){let a
;return async d=>{ba(d);const e=b3(d),f=a6(d);let g="button default-button";return f&&(g=(0,ae.bt)(g," ","disabled")),e&&(g=(0,
ae.bt)(g," ","selected")),am("div",{className:"create-container"},a=am("button",{className:g,title:await aK("Cmd_New_Flat"),
onclick:f?null:a=>b(a,e),onmousedown:f?null:a=>c(a,e),disabled:f},am("div",{className:"create-plus-icon"}),am("span",{
className:"text"},await aK("Cmd_New_Flat"))))};function b(b,c){if(c)fb(),b4(!1);else{
const b=a.getBoundingClientRect(),c=new DOMRect(b.left,b.bottom,0,0);d(a,c)}}function c(a,b){b&&a.stopPropagation()}
function d(a,b){function c(){b4(!0)}function d(){b4(!1)}fb(),de=(0,A.Lj)(b,bu(null)?()=>e(null):()=>f(null),{
className:"with-triangle create-menu",onShow:c,onHide:d},(function(b,c){return(0,ah.TT)(bP).style.width=(0,V.Md)(b),(0,
ah.TT)(bP).style.height=(0,V.Md)(c),a.getBoundingClientRect()}),((a,b)=>(0,af.fI)(a(b,(0,af.f4)(null,null,null)))))}
async function e(a){const b=[];return b.push({title:await aK("AdminCenter_Role_User_Text"),imageClass:"cmd-user-icon",
type:"submenu",submenu:await dy()}),b.push({title:await aK("AdminCenter_Group_Text"),imageClass:"cmd-group-icon",
onCommand:async(a,b)=>{d9()}}),b.push({title:await aK("AdminCenter_Data_Tab_Button_Text"),imageClass:"cmd-data-icon",
type:"submenu",submenu:await et(!1,a)}),b}async function f(a){return et(!1,a)}}(),function(){return async d=>{ba(d)
;const e=bk.GetActiveTab(d),f=a6(d),g=bu(d);return am("nav",{className:"tab-selector unselectable",
oncontextmenu:a=>a.preventDefault()
},["dashboard","users","groups","data","policies","integration","reports"].map((async d=>g||"integration"!==d?am(u.Dg,{
iconClass:a(d),isActive:e===d,onClick:()=>dp(d),tooltip:await c(d),disabled:f},b(d)):am("fragment",null))),am("div",{
className:"flex-cell"}))};function a(a){switch(a){case"dashboard":return"icon-dashboard";case"users":return"icon-users"
;case"groups":return"icon-groups";case"data":return"icon-data";case"policies":return"icon-policies";case"integration":
return"icon-integration";case"reports":return"icon-reports";default:return""}}async function b(a){switch(a){case"dashboard":
return aK("AdminCenter_Dashboard_Text");case"users":return aK("AdminCenter_Users_Text");case"groups":
return aK("AdminCenter_Groups_Text");case"data":return aK("AdminCenter_Data_Tab_Button_Text");case"policies":
return aK("AdminCenter_Policies_Tab_Button_Text");case"integration":return aK("AdminCenter_Integration_Tab_Button_Text")
;case"reports":return aK("AdminCenter_Reports_Tab_Button_Text");default:return""}}async function c(a){switch(a){case"dashboard":
return aK("AdminCenter_Dashboard_Tab_Button_Tip");case"users":return aK("AdminCenter_Users_Tab_Button_Tip");case"groups":
return aK("AdminCenter_Groups_Tab_Button_Tip");case"data":return aK("AdminCenter_Data_Tab_Button_Tip");case"policies":
return aK("AdminCenter_Policies_Tab_Button_Tip");case"integration":return aK("AdminCenter_Integration_Tab_Button_Tip")
;case"reports":return aK("AdminCenter_Reports_Tab_Button_Tip");default:return""}}}(),function(){return async c=>{ba(c)
;if(!bu(c))return[];const d=a6(c),e=bq(c),f=e?await e3(null):"buymore";return"buymore"===f||d?[]:am("div",{
className:"upgrade-message flex-row"},am("div",{className:"content flex-cell"},am("div",{className:"message"},am("div",{
className:"icon"}),am("span",null,(0,ae.SI)(await aK("UpgradeMessage_RoboFormEnterpriseTrialExpires"),"%1").before),am("span",{
className:"date"},(0,ai.Io)((null==e?void 0:e.expirationTime)||0,ba(c))),am("span",null,(0,
ae.SI)(await aK("UpgradeMessage_RoboFormEnterpriseTrialExpires"),"%1").after)),am("div",{className:"links-row flex-row"
},am("a",{className:"learn-more link",href:"#",onclick:a},await aK("UpgradeMessage_LearnMore")),am("div",{
className:"links-separator"}),am("a",{className:"upgrade link",href:"#",onclick:a=>b(a,f)
},"expired"===(null==e?void 0:e.status)?await aK("AdminCenter_SettingsView_RenewNow_Text"):await aK("AdminCenter_BuyNow_Text")))))
};function a(a){a.preventDefault(),(0,Y.PQ)((async()=>{await aP.OpenUrl({url:z.Nd,newTab:!0,reuseExisting:!0},null)
}),(()=>()=>{}),0,null,(a=>{(0,ak.au)(a),(0,ak.r5)(a,ak.kd)||fE((0,z.Qo)(a),null,2)}))}function b(a,b){a.preventDefault(),(0,
Y.PQ)((async()=>{const a=(0,af.f4)(null,null,null);await aq.OpenPaymentPage({action:b},a)}),(()=>()=>{}),0,null,(a=>{(0,
ak.au)(a),(0,ak.r5)(a,ak.kd)||fE((0,z.Qo)(a),5,2)}))}}(),function(){
const a="https://www.roboform.com/license",b="https://www.roboform.com/privacy-policy",c="https://help.roboform.com/hc/categories/203879687-RoboForm-for-Business"
;return am("div",{className:"copyright"},(d=>(ba(d),[am("span",{className:"text"},aK("AdminCenter_CopyrightYear_Text",[(0,
ah.bf)((0,ai.eb)())])),am("div",{className:"links"},am("a",{href:a,target:"_blank",className:"link"
},aK("AdminCenter_LicenseAgreement_Text")),am("span",null," - "),am("a",{href:b,target:"_blank",className:"link"
},aK("AdminCenter_PrivacyPolicy_Text")),am("span",null," - "),am("a",{href:c,target:"_blank",className:"link"
},aK("Cmd_Help_HelpCenter_Flat")))])))}());function a(){b5&&(null==bP||bP.classList.add("navigation-hovered"))}}function dk(){
return async a=>"settings"!==bk.GetActiveView(a)?(cv&&(null==bN||bN.classList.remove("settings-shown"),null==cv||cv.Dispose(),
cv=null),[]):(cv=(0,n.N)(aN,aX,aZ,aO,aS,aR,a5,bg,bj,bk,bH,bw,a1,{GetAccountInfo:bo,GetCompanyInfo:bm,GetLicenseInfo:bq,
CloseCompanySettingsView:e0,GetCompanyPolicyValue:fH,GetCompanyPoliciesValues:fI,GetColorTheme:a8,GetLanguageTag:ba,
IsCurrentUserAdmin:bu,LogoutAction:e5,ShowNotification:fE,ShowModalDialog:fA,ShowConfirmationDialog:eh,UpdateCompanyInfo:e8,
UpdateColorTheme:e6,UpdateLicenseInfo:e2},aJ),by&&bN.classList.add("settings-shown"),am("section",{
className:"tab-view tab-view-settings"},cv.Create()))}async function dl(a,b){return bl&&!a||(bl=await bA.Execute({
action:async a=>{var b;let c=null;return bx||(c=await aZ.GetRoboFormAccountInfo(a),bx=null!==(b=c.accountId)&&void 0!==b?b:""),
c=await aN.GetAccountInfo(bx,a),c}},b),bp(bl)),bl}function dm(a){if(a6(null))return bk.SetState({m_view:"license-expired"
},!0,!0),void dr();"settings"===bk.GetActiveView(null)&&"settings"!==a.m_view&&e0(),
"search"===bk.GetActiveView(null)&&"search"!==a.m_view&&fq(),(0,af.fI)((async()=>{switch(a.m_view){case"dashboard":dq(!1);break
;case"users":dt(!1);break;case"groups":dX(!1);break;case"data":ek(!1);break;case"policies":{let b=null
;"security-and-access"!==a.m_tab&&"roboform-data"!==a.m_tab&&"user-settings"!==a.m_tab||(b=a.m_tab),eV(!1,b);break}
case"integration":eW(!1);break;case"reports":{let b=null
;"company"!==a.m_tab&&"users"!==a.m_tab&&"groups"!==a.m_tab||(b=a.m_tab),bu(null)||"company"!==b||(b="groups"),eY(!1,b||null)
;break}case"settings":{let b=a6(null)?"license":"general"
;"license"!==a.m_tab&&"general"!==a.m_tab&&"account"!==a.m_tab||(b=a.m_tab),await eZ(b);break}case"user-details":if(a.m_id){
const b=(await cb.GetCompanyMembers(!1,(0,af.f4)(null,null,null))).find((b=>b.id===a.m_id));if(b){let c="groups"
;"groups"!==a.m_tab&&"files"!==a.m_tab&&"security"!==a.m_tab&&"devices"!==a.m_tab&&"activity"!==a.m_tab&&"account"!==a.m_tab&&"policies"!==a.m_tab||(c=a.m_tab),
dU((0,g.VK)(b),c)}else dt(!0)}else dt(!0);break;case"group-details":if(a.m_id){const b=(await ce.GetCompanyGroups(!1,(0,
af.f4)(null,null,null))).find((b=>b.id===a.m_id));if(b){let c="users"
;"users"!==a.m_tab&&"details"!==a.m_tab&&"files"!==a.m_tab&&"backups"!==a.m_tab&&"security"!==a.m_tab&&"policies"!==a.m_tab||(c=a.m_tab),
ee((0,h.wj)(b,await(0,h.NH)(b)),c)}else dX(!0)}else dX(!0);break;case"search":a.m_query?(bT(a.m_query),
await fo(a.m_query,!1)):dq(!1);break;case"license-expired":a6(null)?dr():dq(!1)}})())}async function dn(){return ca=(0,
q.y)(cb,ce,aX,aY,aO,a5,a4,a0,{AddIntegration:()=>dp("integration"),GetAccountInfo:dl,GetSecurityReport:eS,
GetAddDataDropdownCommands:et,GetAddUserDropdownCommands:dy,GetCompanyPolicyValue:fH,GetCompanyLicenseInfo:e1,GetLanguageTag:ba,
GetLicenseInfo:bq,GetGroupPolicyValue:fM,GetGroupSecurityReport:eR,IsCurrentUserAdmin:bu,OpenReportsTabAndNavigateToSection:fw,
ShowUsersView:fs,ShowGroupsView:ft,ShowDataView:fu,ShowReportsView:eY,ShowCreateGroupDialog:d9,ShowCompanySettingsView:eZ},aJ),
ca.Create()}function dp(a){if(by&&bk.GetActiveView(null)!==a)switch(a){case"dashboard":dq(!0);break;case"users":dt(!0);break
;case"groups":dX(!0);break;case"data":ek(!0);break;case"policies":eV(!0,null);break;case"integration":eW(!0);break
;case"reports":eY(!0,null)}}function dq(a){"dashboard"!==bk.GetActiveView(null)&&(bk.SetState({m_view:"dashboard"},a,!1),
ca.OnAfterShow(),e9())}function dr(){cA||cw.Start((async()=>{cA=(0,t.M)(aO,aN,a5,{GetLicenseInfo:bq,IsCurrentUserAdmin:bu,
ShowNotification:fE},aJ);const a=await cA.Create();cx.appendChild(a),cA.OnAfterShow()}))}async function ds(){return cd=(0,
l.q$)(cb,ce,aR,aS,aZ,a5,bx,{CreateUserDialog:dG,GetListOfCommandsForUser:dz,GetLanguageTag:ba,IsCurrentUserAdmin:bu,
IsRemoveFromGroupShown:dE,ShowUserMainView:dU,ShowModalDialog:fA,ShowNotification:fE,ShowAddUsersToGroupsDialog:dO,
ShowRemoveUsersFromGroupsDialog:dN,ShowDeleteUserDialog:dH,ShowSuspendUserDialog:dI,ShowRestoreUserDialog:dJ,
ShowResendToUserSetupInstructionsDialog:dF},aJ),cd.Create()}function dt(a){"users"!==bk.GetActiveView(null)&&(bk.SetState({
m_view:"users"},a,!1),cd.OnAfterShow(),e9())}function du(a,b){switch(a){case 0:return c8;case 1:return c9;case 2:return da
;case 4:return db;case 5:return dc;case 3:return b?dd:c8;default:return"unknown user status"}}function dv(a){
return a>g._j?c3:a>g.EZ?c4:a>g.jo?c5:c6}function dw(a){switch((0,L.AY)(a)){case 4:return c2;case 3:return c1;case 2:return c0
;case 1:case 0:return cZ;default:return c7}}function dx(a){return bx===a}async function dy(){const a=[];return a.push({
title:await aK("AdminCenter_UsersTabView_CreateUser_Title_Text"),imageClass:"cmd-create-user-icon",onCommand:async(a,b)=>{
await dG(b)}}),a.push("separator"),a.push({title:await aK("AdminCenter_UsersTabView_ImportUsers_Title_Text"),
imageClass:"cmd-import-users-icon",onCommand:async(a,b)=>{var c,d,e,f
;const g=await e1(!1,b),h=null!==(d=null===(c=null==g?void 0:g.company)||void 0===c?void 0:c.numberOfUsers)&&void 0!==d?d:0,j=(null!==(f=null===(e=null==g?void 0:g.company)||void 0===e?void 0:e.numberOfLicenses)&&void 0!==f?f:30)-h
;if(await fN(b))return void await eg(b);const k=await async function(a,b){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal import-users-dialog",await aK("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(()=>(0,
i.lY)(a,a3,aL,aJ)))),b)}(j,b);if(null!==k){if(k){const a=await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal users-import-progress-dialog",await aK("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(b=>(0,
i.W9)(a,bw,aX,aJ,b))));return fA(c,b)}(k,b);if(a){const b=[];if(a.m_users_created.length>0){
const c=a.m_users_created.filter((a=>a.accountId)).map((a=>(0,ah.TT)(a.accountId)));b.push({event:0,id:c})}
if(a.m_groups_created.length>0){const c=a.m_groups_created.filter((a=>a.id)).map((a=>(0,ah.TT)(a.id)));b.push({event:6,id:c})}
b.length&&a5.onEvent.CallAllSync(b),await async function(a){const b=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal users-import-report-dialog",await aK("AdminCenter_UsersTabView_ImportUsers_Title_Text"),null),(()=>(0,
i.zs)(a,aJ))));return fA(b,null)}(a)}}}else await aO.OpenPaymentPage({action:"buymore"},b)}}),a.push({
title:await aK("AdminCenter_Integration_Tab_Button_Text"),imageClass:"cmd-integration-icon",onCommand:async(a,b)=>{eW(!0)}}),
a.push({title:await aK("AdminCenter_UsersTabView_JoinUser_Title_Text"),imageClass:"cmd-join-user-icon",onCommand:async(a,b)=>{
if(await fN(b))return void await eg(b);const c=await async function(a){const b=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal join-user-dialog",await aK("AdminCenter_UsersTabView_JoinUser_Title_Text"),null),(a=>(0,g.JJ)(bw,aX,aJ,a))))
;return fA(b,a)}(b);c&&(a5.onEvent.CallAllSync([{event:0}]),fE(await aK("Notification_User_Invited_Text",[c]),null,null))}}),a}
async function dz(a){const b=[],c=(0,af.f4)(null,null,null),d=bu(null);let e=!1
;const f=await aX.GetMemberGroups(a.m_id,1,c),h="number"==typeof f?f:f.length,i=await async function(a,b){
const c=await ce.GetCompanyGroups(!1,b);if(c.length===a)return!1;return!0}(h,c),j=dD(h),k=j&&(d||a.m_id!==bx&&!a.m_isAdmin)
;return await dB(a,b),(d||i||k)&&b.push("separator"),i&&(await async function(a,b){b.push({
title:await aK("AdminCenter_AddToGroups_Text"),imageClass:"cmd-add-user-to-group-icon",onCommand:async(b,c)=>{await dP(a,c)}})
}(a,b),e=!!d),k&&(await async function(a,b){b.push({title:await aK("AdminCenter_UsersTabView_RemoveFromGroups_Button_Text"),
imageClass:"cmd-remove-user-from-group-icon",onCommand:async(b,c)=>{await async function(a,b){const c=await async function(a,b){
const c=await aK("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aK("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aK("AdminCenter_Role_Admin_Text"),f=await aK("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aK("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aK("AdminCenter_UsersTabView_AddUserToGroup_SingleUser_Text",[a.m_name||a.m_email]),
search_placeholder:await aK("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aK("Cmd_Cancel_Flat"),
ok_btn:await aK("AdminCenter_Remove_Text")},fields:[{key:"name",label:await aK("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aK("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aK("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function i(a){
return a.serverOnly?f:g}function j(b){return a.m_isAdmin?e:b.readOnly?d:c}return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aK("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),null),(()=>(0,
s.F)(k,[],h,aJ)))),b);async function k(){
const c=await ce.GetCompanyGroups(!1,b),d=(await aX.GetMemberGroups(a.m_id,null,b)).filter((a=>!a.disabled))
;return c.filter((a=>d.some((b=>b.accountId===a.id))))}async function l(c){const d=c.map((a=>a.id))
;await cb.RemoveUsersFromGroups([a.m_id],d,b)}}(a,b);if(c.length>0)return a5.onEvent.CallAllSync([{event:4,
id:[a.m_id,...c.map((a=>a.id))]}]),fE(await aK("Notification_Users_Delete_From_Groups_Text"),null,null),!0;return!1}(a,c)}})
}(a,b),e=!0,e=!!d),d||j?(e&&b.push("separator"),e=!1,d&&(0,g.FG)(a)&&(await async function(a,b){b.push({
title:await aK("AdminCenter_UsersTabView_ResendInvitation_Text"),imageClass:"cmd-resend-instructions-icon",
onCommand:async(b,c)=>{await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_UsersTabView_ResendInvitation_Text"),null),(b=>(0,g.LF)(a,bw,aX,aJ,b))))
;return fA(c,b)}(a,c)}})}(a,b),e=!0),d&&(0,g.fH)(a)&&(await async function(a,b){b.push({
title:await aK("AdminCenter_ResendUserInstructions_Text"),imageClass:"cmd-resend-instructions-icon",onCommand:async(b,c)=>{
await dF([a],c)}})}(a,b),e=!0),d&&(0,g.AX)(a)&&(a.m_suspended?await async function(a,b){b.push({
title:await aK("AdminCenter_SuspendUser_Restore_Text"),imageClass:"cmd-user-restore-icon",onCommand:async(b,c)=>{await dJ([a],c)
}})}(a,b):await async function(a,b){b.push({title:await aK("AdminCenter_SuspendUser_Suspend_Text"),
imageClass:"cmd-user-suspend-icon",onCommand:async(b,c)=>{await dI([a])}})}(a,b),e=!0),(0,
g.Kn)(a)&&d&&(await async function(a,b){b.push({title:await aK("AdminCenter_UnblockUser_Unblock_Text"),
imageClass:"cmd-user-unblock-icon",onCommand:async(b,c)=>{await dK(a,c)}})}(a,b),e=!0),
a.m_is_not_complete||dx(a.m_id)||!bu(null)||(await async function(a,b){b.push({
title:await aK("AdminCenter_UsersTabView_ResetMasterPassword_Text"),imageClass:"cmd-reset-password-icon",onCommand:async(b,c)=>{
if(!await eh(await aK("AdminCenter_UsersTabView_ResetMasterPassword_Text"),await aK("AdminCenter_UserTabView_ResetMPConfirmation_Text"),await aK("Cmd_Cancel_Flat"),await aK("AdminCenter_UserTabView_ResetPassword_Button_Text")))return
;const d=await aX.SendResetMasterPasswordEmail(a.m_id,c);if(d.success){
fE(await aK("AdminCenter_UserTabView_SuccessfulResetMPLinkSent_Text",[a.m_email]),null,null)
}else fE(d.errorMessage||await aK("AdminCenter_UserTabView_ErrorResetMPLinkSent_Text"),null,2)}})}(a,b),e=!0),
!d||a.m_is_not_complete||dx(a.m_id)||(await async function(a,b){b.push({title:await aK("AdminCenter_ConvertToPersonal_Text"),
imageClass:"cmd-convert-to-personal-icon",onCommand:async(b,c)=>{await dM(a,c)}})}(a,b),e=!0),
d&&!(a.m_is_not_complete||a.m_suspended||dx(a.m_id))&&(await async function(a,b){b.push({
title:a.m_isAdmin?await aK("AdminCenter_MakeAsAdmin_RevokeAdmin_Text"):await aK("AdminCenter_MakeAsAdmin_MakeAdmin_Text"),
imageClass:"cmd-make-admin-icon",onCommand:async(b,c)=>{await dL(a,c)}})}(a,b),e=!0),d&&!dx(a.m_id)&&(e&&b.push("separator"),
b.push({title:cY,imageClass:"cmd-delete-icon",onCommand:async(b,c)=>{await dH([a],c)}})),b):b}async function dA(a,b,c){
const d=[];return await dC(a,b,d),d.push("separator"),c&&(await d8(b,a,c,d),d.push("separator")),await dB(a,d),d}
async function dB(a,b){b.push({title:await aK("AdminCenter_UsersTabView_UserDetails_Text"),imageClass:"cmd-user-details",
onCommand:async()=>{dU(a,"groups")}})}async function dC(a,b,c){c.push({
title:await aK("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),imageClass:"cmd-remove-user-from-group-icon",
onCommand:async(c,d)=>{await dR(a,[b],d)}})}function dD(a){return a>0}async function dE(a,b){for(const c of a){
if(null==b||b.ThrowIfShouldStop(),!bu(null)&&(c.m_isAdmin||c.m_id===bx))return!1;let a=await aX.GetMemberGroups(c.m_id,null,b)
;if("number"==typeof a)throw(0,ak.ZU)(ak.V2,"The return value shouldn't be a number");if(a=a.filter((a=>!a.disabled)),
a.length>0)return!0}return!1}async function dF(a,b){if(await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_ResendUserInstructions_Text"),null),(b=>(0,g.lK)(a,aX,aJ,aL,b))));return fA(c,b)
}(a,b)){
return fE(1===a.length?await aK("Notification_User_ResendInstructions_Text",[a[0].m_name||a[0].m_email]):await aK("Notification_Users_ResendInstructions_Text",[a.length.toString()]),null,null),
!0}return!1}async function dG(a){if(await fN(a))return void await eg(a);const b=await async function(a){const b=(0,y.Sw)((0,
ah.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal create-user-dialog",await aK("AdminCenter_UsersTabView_CreateUser_Title_Text"),null),(a=>(0,
g.R9)(bw,aX,aJ,aL,a))));return fA(b,a)}(a);if(b){a5.onEvent.CallAllSync([{event:0}]),
fE(await aK("Notification_User_Created_Text",[b]),null,null);const c=await aX.GetCompanyMembers(bw,{doPost:!0,filter:b,
fields:"+accessDate, +securityStats, +isManager"},a);if("number"!=typeof c&&c[0]){dU((0,g.VK)(c[0]),"groups")}}}
async function dH(a,b){const c=await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal delete-user-dialog",await aK("Cmd_Delete_Flat"),null),(b=>(0,g.Mh)(a,bw,aX,aJ,b))));return fA(c,b)}(a,b)
;if(c){a5.onEvent.CallAllSync([{event:2}])
;fE(1===a.length?await aK("Notification_User_Deleted_Text",[a[0].m_name||a[0].m_email]):await aK("Notification_Users_Deleted_Text",[a.length.toString()]),null,null)
}return c}async function dI(a){if(await async function(a){const b=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal suspend-user-dialog",await aK("AdminCenter_SuspendUser_Suspend_Text"),null),(b=>(0,g.pw)(a,aX,aJ,b))))
;return fA(b,null)}(a)){a5.onEvent.CallAllSync([{event:1,id:a.map((a=>a.m_id))}])
;return fE(1===a.length?await aK("Notification_User_AccountSuspend_Text",[a[0].m_name||a[0].m_email]):await aK("Notification_Users_AccountSuspend_Text",[a.length.toString()]),null,null),
!0}return!1}async function dJ(a,b){if(await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_SuspendUser_Restore_Text"),null),(b=>(0,g.Po)(a,aX,aJ,b))));return fA(c,b)}(a,b)){
a5.onEvent.CallAllSync([{event:1,id:a.map((a=>a.m_id))}])
;return fE(1===a.length?await aK("Notification_User_AccountRestore_Text",[a[0].m_name||a[0].m_email]):await aK("Notification_Users_AccountRestore_Text",[a.length.toString()]),null,null),
!0}return!1}async function dK(a,b){return!!await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_UnblockUser_Unblock_Text"),null),(b=>(0,g.$$)(a,aX,aJ,b))));return fA(c,b)
}(a,b)&&(a5.onEvent.CallAllSync([{event:1,id:[a.m_id]
}]),fE(await aK("Notification_User_AccountUnblock_Text",[a.m_name||a.m_email]),null,null),!0)}async function dL(a,b){
return!!await async function(a,b){
const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal make-user-admin-dialog",a.m_isAdmin?aK("AdminCenter_MakeAsAdmin_RevokeAdmin_Text"):aK("AdminCenter_MakeAsAdmin_MakeAdmin_Text"),null),(b=>(0,
g.dv)(a,bw,aX,aJ,b))));return fA(c,b)}(a,b)&&(a5.onEvent.CallAllSync([{event:1,id:[a.m_id]}]),!0)}async function dM(a,b){
return!!await async function(a,b){
const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal convert-to-personal-dialog",await aK("AdminCenter_ConvertToPersonal_Text"),null),(b=>(0,
g.n8)(a,bw,aX,aJ,b))));return fA(c,b)}(a,b)&&(a5.onEvent.CallAllSync([{event:2}]),
fE(await aK("Notification_User_ConvertToPersonal_Text",[a.m_name||a.m_email]),null,null),!0)}async function dN(a,b){
const c=await async function(a,b){
const c=await aK("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aK("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aK("AdminCenter_GroupsTabView_StorageType_Server_Text"),f=await aK("AdminCenter_GroupsTabView_StorageType_Synced_Text"),g={
translations:{text:await aK("AdminCenter_UsersTabView_RemoveUsersFromGroups_Warning",[a.length.toString()]),
search_placeholder:await aK("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aK("Cmd_Cancel_Flat"),
ok_btn:await aK("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text")},fields:[{label:await aK("AdminCenter_Group_Name_Text"),
sortable:!0,key:h,width_multiplier:2},{label:await aK("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aK("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function h(a){
return a.name}function i(a){return a.serverOnly?e:f}function j(a){return a.readOnly?d:c}const k=(0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aK("AdminCenter_UsersTabView_RemoveUsersFromGroups_Title_Text"),null),(()=>(0,
s.F)(b,[],g,aJ))));return fA(k,null);async function l(b){const c=a.map((a=>a.m_id)),d=b.map((a=>a.id))
;await cb.RemoveUsersFromGroups(c,d,null)}}(a,b);return c.length>0&&(a5.onEvent.CallAllSync([{event:4,
id:[...a.map((a=>a.m_id)),...c.map((a=>a.id))]}]),fE(await aK("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}
async function dO(a,b,c){return!!await async function(a,b,c){
const d=await aK("AdminCenter_GroupsTabView_Permissions_Regular_Text"),e=await aK("AdminCenter_GroupsTabView_Permissions_Limited_Text"),f=await aK("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aK("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aK("AdminCenter_UsersTabView_AddUsersToGroups_Warning",[a.length.toString()]),
search_placeholder:await aK("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aK("Cmd_Cancel_Flat"),
ok_btn:await aK("AdminCenter_AddToGroup_Text")},fields:[{key:"name",label:await aK("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aK("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aK("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:l};function i(a){
return a.serverOnly?f:g}function j(a){return a.readOnly?e:d}const k=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aK("AdminCenter_AddUsersToGroups_Text"),null),(()=>(0,
s.F)((()=>b),[],h,aJ))));return fA(k,c);async function l(b){const d=a.map((a=>a.m_id)),e=b.map((a=>a.id))
;await cb.AddUsersToGroups(d,e,{serverOnly:null,readOnly:null,showPasswords:null,manager:!1},c)}
}(a,b,c)&&(a5.onEvent.CallAllSync([{event:3,id:[...a.map((a=>a.m_id)),...b.map((a=>a.id))]}]),
fE(await aK("Notification_Users_Added_To_Groups_Text"),null,null),!0)}async function dP(a,b){const c=await async function(a,b){
const c=await aK("AdminCenter_GroupsTabView_Permissions_Regular_Text"),d=await aK("AdminCenter_GroupsTabView_Permissions_Limited_Text"),e=await aK("AdminCenter_Role_Admin_Text"),f=await aK("AdminCenter_GroupsTabView_StorageType_Server_Text"),g=await aK("AdminCenter_GroupsTabView_StorageType_Synced_Text"),h={
translations:{text:await aK("AdminCenter_UsersTabView_AddUserToGroup_SingleUser_Text",[a.m_name||a.m_email]),
search_placeholder:await aK("AdminCenter_Search_By_Name_Placeholder"),cancel_btn:await aK("Cmd_Cancel_Flat"),
ok_btn:await aK("AdminCenter_Add_Button_Text")},fields:[{key:"name",label:await aK("AdminCenter_Group_Name_Text"),sortable:!0,
width_multiplier:2},{label:await aK("AdminCenter_GroupsTabView_Storage_Text"),key:i,muted:!0},{
label:await aK("AdminCenter_GroupsTabView_Permissions_Text"),key:j,muted:!0}],allow_initial:!0,on_ok_callback:k};function i(a){
return a.serverOnly?f:g}function j(b){return a.m_isAdmin?e:b.readOnly?d:c}return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aK("AdminCenter_AddToGroup_Text"),null),(()=>(0,
s.F)(l,[],h,aJ)))),b);async function k(c){const d=c.map((a=>a.id));await cb.AddUsersToGroups([a.m_id],d,{serverOnly:null,
readOnly:null,showPasswords:null,manager:!1},b)}async function l(){
const c=await ce.GetCompanyGroups(!1,b),d=(await aX.GetMemberGroups(a.m_id,null,b)).filter((a=>!a.disabled))
;return c.filter((a=>!d.some((b=>b.accountId===a.id))))}}(a,b);return!!c.length&&(a5.onEvent.CallAllSync([{event:3,
id:[a.m_id,...c.map((a=>a.id))]}]),fE(await aK("Notification_Users_Added_To_Groups_Text"),null,null),!0)}
async function dQ(a,b,c,d){return async function(a,b,c,d){const e=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal user-add-remove-groups-dialog dialog-with-list",await aK("AdminCenter_IntegrationView_SSO_Group_Select_Dialog_Title"),null),(()=>(0,
s.F)((()=>a),b,c,aJ))));return fA(e,d)}(a,b,c,d)}async function dR(a,b,c){return!!await async function(a,b,c){
const d=b.length>1?await aK("AdminCenter_UsersTabView_RemoveFromGroups_Button_Text"):await aK("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),e=(0,
y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal exclude-single-user-modal",d,null),(c=>(0,g.v_)(a,b,aJ,{
RemoveUsersFromGroups:cb.RemoveUsersFromGroups},c))));return fA(e,c)}(a,b,c)&&(a5.onEvent.CallAllSync([{event:4,
id:[a.m_id,...b.map((a=>a.m_id))]}]),fE(await aK("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}
async function dS(a,b,c){return!!await async function(a,b,c){const d=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_UsersTabView_RemoveFromGroup_Button_Text"),null),(c=>(0,h.jA)(b,a,aJ,{
RemoveUsersFromGroups:cb.RemoveUsersFromGroups},c))));return fA(d,c)}(a,b,c)&&(a5.onEvent.CallAllSync([{event:4,
id:[b.m_id,...a.map((a=>a.m_id))]}]),fE(await aK("Notification_Users_Delete_From_Groups_Text"),null,null),!0)}
async function dT(a,c){
const d=aJ.LocalizeString,e=(0,G.em)(a.path),f=a.sharedGroup||!1,g=a.received||!1,h=await aR.GetValue("AccountCompanyAdmin",!1),i=await aR.GetValue("AccountEnterprise",!1),j=h&&!g,k=function(a,b,c,d,e,f){
let g=null,h=[],i=null
;return(0,F.Tu)(!a.sharedFolder,b.is_admin,b.is_group,b.disable_outside_sharing,b.converting_to_group,b.is_enterprise_user,b.logged_in_user_id,f,e,(0,
ah.TT)(bP),{GetItemInfo:()=>a,GetSharedAccountInfo:()=>g,GetSharedAccountRecipients:()=>h,GetSharedAccountCreator:()=>i,
GetKnownRecipients:async()=>b.is_group||b.disable_outside_sharing?j():c.GetKnownRecipients(null),OnLoad:async()=>{
a.sharedFolder&&await k()},OnChangeRecipientPermission:async(b,d)=>{async function e(b,d){const f={manager:4===d,readOnly:2===d,
showPasswords:2!==d};try{await c.GrantSharedFolder(a.path,b,f,null)}catch(g){if((0,ak.r5)(g,ak.m))return void await e(b,d)
;throw g}}await e(b,d)},OnAddRecipient:async(b,d,e)=>{const f={manager:4===d,readOnly:2===d,showPasswords:2!==d,
inviteIfDoesntExist:e};await c.GrantSharedFolder(a.path,b,f,null),await k()},OnRemoveRecipient:async b=>{
await c.RevokeSharedFolder(a.path,b,null),await k()},OnShareExistingFolder:async d=>{await c.ShareExistingFolder((0,
G.XE)(d,!0),null),a=Object.assign(Object.assign({},a),{granted:!0,sharedFolder:!0,sharedGroup:b.converting_to_group})},
OnStopSharingForAll:async()=>{await c.StopSharingFolder(a.path,null)},OnReject:async b=>{
await c.RejectSharedFolder(a.path,null),b()},OnDelete:async b=>{await c.DeleteSharedFolder(a.path,null),b()},
GetSharingStatusDescription:m});async function j(){
const a=await c.GetKnownRecipients(null),b=(await e.GetRoboFormAccountInfo(null)).companies,f=b&&b.length>0?b[0]:null
;if(!f||!f.companyId)return a;const g=await d.GetCompanyMembers(f.companyId,{doPost:!0},null);if(!g||!(0,ah.QS)(g))return a
;return a.filter((a=>g.find((b=>b.id===a.accountId))))}async function k(){try{await l()}catch(a){if((0,
ak.r5)(a,ak.m))return void await k();throw a}}async function l(){
const b=await c.GetSharedFolderInfoAndRecipients(a.path,!0,null);g=b.info,h=b.recipients;const d=h.findIndex((a=>a.current))
;if(d>0){const a=h.splice(d,1)[0];h.unshift(a)}for(const a of h)if(a.isCreator){i=a;break}}async function m(a){
const b=f.LocalizeString,c=await n(a),d=await b("SharedFolderSettings_Folder");switch(c){case 4:
return b("SharedFolderSettings_Consumer_Creator_Description",[d]);case 5:
return b("SharedFolderSettings_Consumer_FullControl_Description",[d]);case 6:
return b("SharedFolderSettings_Consumer_ReadWrite_Description",[d]);case 7:
return b("SharedFolderSettings_Consumer_LoginOnly_Description",[d])}return Promise.resolve("")}async function n(a){
if(a.sharedFolder){const b=await o(a),c=await aZ.GetRFOnlineUserId(),d=null!==b&&null!==c&&b===c.userId;if(a.granted&&d)return 4
;if(a.granted)return 5;if(a.readOnly)return 7;if(a.received)return 6}return 11}async function o(a){const b=a.path,d=(0,G.hF)(b)
;let e=null;try{if(8===d){const a=await c.GetSharedFolderRecipients(b,!0,null)
;for(const b of a)if(b.isCreator&&b.recipientEmail){e=b.recipientEmail;break}}}catch(f){}return e}}(a,{converting_to_group:j,
disable_outside_sharing:await aV.GetValue("DisableSharingOutsideCompany",!1),is_admin:h,is_enterprise_user:i,is_group:f,
logged_in_user_id:(await b.GetRFOnlineUserId()).userId,m_view_element:(0,ah.TT)(bP)
},aY,aX,aZ,aJ),l=f||j?d("SharedFolderSettings_Group_WindowTitle",[e]):a.sharedFolder?d("StartPage_Sharing_SharedFolder_Dialog_Title",[e]):d("StartPage_Sharing_ShareFolder_Dialog_Title",[e])
;return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("rf-sharing-dialog rf-sharing-folder rf-modal-dialog",l,null),(()=>k))),c)}
function dU(a,b){if(a.m_id===cE&&"user-details"===bk.GetActiveView(null)&&bk.GetState().m_id===a.m_id&&cF)return bk.SetState({
m_view:"user-details",m_id:cE,m_tab:b},!1,!1),void cF.OnAfterShow();cC.Start((async c=>{
const d=await aX.GetMemberGroups(a.m_id,1,c)
;if(!bu(null)&&!dD(d))return void fE(await aK("AdminCenter_UserTabView_NotGroupMember_Text",[a.m_name||a.m_email]),null,0);(0,
Y.rK)(cD),dV(),cE=a.m_id,"search"===bk.GetActiveView(null)&&fp(),bk.SetState({m_view:"user-details",m_id:cE,m_tab:b},!0,!1),
cF=(0,g.eH)(a,bw,bx,cb,ce,aX,aN,a4,bg,aZ,a5,aR,bk,aJ,{GetAccountInfo:dl,GetCompanyInfo:d0,GetTextByPasswordStrength:dw,
GetTextByUserStatusValue:du,GetDataItemPasswordStrength:eQ,GetListOfCommandsForRfItem:ez,GetListOfCommandsForGroup:d1,
GetSortedAndFilteredDataList:el,IsCurrentUserAdmin:bu,ShowUsersTab:dt,ShowCreateGroupDialog:d9,
ShowAddSingleUserToGroupsDialog:dP,ShowExcludeUserFromGroupsConfirmation:dR,ShowGroupMainView:ee,
ShowDataViewModeInDetailsPane:fj,ShowRightDetailsPanel:fc,HideViewInRightPanel:fg,ShowDeleteRfItemDialog:eq,
ShowMoveCloneRfItemDialog:ep,ShowMakeRevokeAsAdminDialog:dL,ShowSuspendUserDialog:dI,ShowRestoreUserDialog:dJ,
ShowConvertToPersonalUserDialog:dM,ShowDeleteUserDialog:dH,ShowResendInstructionslUserDialog:dF,
ShowUnblockUserDialogAndUpdateView:dK,SetLoginLogoImageBackgroundUrl:fC,ShowNotification:fE,ShowModalDialog:fA,ShowSetPolicy:fv,
ShowConfirmationDialog:eh});const e=await cF.Create();cD.appendChild(e),cF.OnAfterShow(),fa()}))}function dV(){cE="",
cF&&(cF.Dispose(),cF=null)}async function dW(){return cg=(0,d.Md)(ce,aR,aS,a4,aZ,a5,{GetCompanyPoliciesValues:fI,
GetListOfCommandsForGroup:d1,GetLanguageTag:ba,IsCurrentUserAdmin:bu,ShowAddGroupDialog:ec,ShowGroupMainView:ee,
ShowDeleteGroupDialog:ea,ShowNotification:fE,ShowModalDialog:fA},aJ),cg.Create()}function dX(a){
"groups"!==bk.GetActiveView(null)&&(bk.SetState({m_view:"groups"},a,!1),cg.OnAfterShow(),e9())}async function dY(a,b){
await aX.UploadCompanyPolicies(bw,a,b),await d0(!0,b)}async function dZ(a,b,c){await aX.UploadGroupPolicies(a,b,c)}
async function d0(a,b){let c=bm(null);return c&&!a||(c=await bz.Execute({action:async a=>aX.GetCompanyInfo(a)},b),bn(c)),c}
async function d1(a,b,c){const d=[],e=bu(null);return await d2(a,d),d.push("separator"),await async function(a,b){b.push({
title:await aK("AdminCenter_AddUsers_Text"),imageClass:"cmd-add-to-group",onCommand:async(b,c)=>{await eb(a,c)}})}(a,d),
d.push("separator"),b&&c&&(await d8(a,b,c,d),d.push("separator")),e&&!b&&(await d6(a,d),d.push("separator")),
b?await dC(b,a,d):await d3(a,d),e&&!b&&(d.push("separator"),await d7(a,d)),d}async function d2(a,b){b.push({
title:await aK("AdminCenter_GroupsTabView_GroupDetails_Text"),imageClass:"cmd-open-file-location-icon",onCommand:async(b,c)=>{
ee(a,"users")}})}async function d3(a,b){b.push({title:await aK("AdminCenter_GroupsTabView_Group_Settings_Text"),
imageClass:"cmd-group-settings-icon",onCommand:async(b,c)=>{ee(a,"details")}})}async function d4(a,b){b.push({
title:await aK("Cmd_NewFolder_Title"),imageClass:"cmd-folder-icon",onCommand:async(b,c)=>{const d=await ev(a,c)
;d&&fE(await aK("StartPage_Editor_ItemCreated",[d]),cW,null)}})}async function d5(a,b){b.push({
title:await aK("StartPage_Cmd_SharingSettings"),imageClass:"cmd-sharing-settings-icon",onCommand:async(b,c)=>{await dT(a,c)}})}
async function d6(a,b){b.push({title:await aK("Cmd_Rename_Flat"),imageClass:"cmd-rename-icon",onCommand:async()=>{
await async function(a){const b=await ed(a);b&&(a5.onEvent.CallAllSync([{event:8,id:[a.m_id]}]),
fE(await aK("Notification_Item_Renamed_Text",[a.m_name,b]),null,null))}(a)}})}async function d7(a,b){b.push({title:cY,
imageClass:"cmd-delete-icon",onCommand:async()=>{await ea([a])}})}async function d8(a,b,c,d){d.push({
title:await aK("AdminCenter_UsersTabView_UserPermissions_Text"),imageClass:"cmd-edit-permissions-icon",onCommand:async(d,e)=>{
await async function(a,b,c,d){
const e=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal edit-permissions",await aK("AdminCenter_UsersTabView_EditPermissions_Text"),null),(d=>(0,
g.HX)(b,a,c,aX,aJ,d))));return fA(e,d)}(a,b,c,e)&&a5.onEvent.CallAllSync([{event:1,id:[b.m_id,a.m_id]}])}})}function d9(){(0,
Y.PQ)((async()=>{const a=await ec();a&&(ee(a,"users"),fE(await aK("Notification_Group_Created_Text",[a.m_name]),cW,null),
a5.onEvent.CallAllSync([{event:6}]))}),(()=>((0,Y.aZ)((0,ah.TT)(b6)),()=>{(0,Y.r9)((0,ah.TT)(b6))})),0,null,(a=>()=>{}))}
async function ea(a){const b=await async function(a){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_DeleteFile_Text",[""]),null),(b=>(0,h.ER)(a,aX,aJ,b)))),null)}(a);if(b){(0,
af.fI)(aO.SyncInBackground(null)),a5.onEvent.CallAllSync([{event:7,id:[...a.map((a=>a.m_id))]}])
;fE(1===a.length?await aK("Notification_Group_Deleted_Text",[a[0].m_name]):await aK("Notification_Groups_Deleted_Text",[(0,
ah.bf)(a.length)]),null,null)}return b}async function eb(a,b){const c=await async function(a,b){const c={fields:[{key:"name",
label:await aK("Options_Account_Name_Text"),sortable:!0},{key:"email",label:await aK("Options_Account_Email_Text"),muted:!0}],
translations:{text:await aK("AdminCenter_UsersTabView_AddUsersToGroup_SingleUser_Text",[a.m_name]),
search_placeholder:await aK("AdminCenter_Search_By_NameEmail_Placeholder"),cancel_btn:await aK("Cmd_Cancel_Flat"),
ok_btn:await aK("AdminCenter_Add_Button_Text")},on_ok_callback:d};async function d(c){const d=c.map((a=>a.id))
;await cb.AddUsersToGroups(d,[a.m_id],{serverOnly:null,readOnly:null,showPasswords:null,manager:!1},b)}async function e(){
const c=(await aY.GetSharedAccountRecipients2(a.m_id,!1,{fields:"-mp,-sender,-company,-accountInfo,-policies"
},b)).filter((a=>!a.disabled));return(await cb.GetCompanyMembers(!1,b)).filter((a=>!c.some((b=>b.accountId===a.id))))}
return fA((0,
y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal group-add-users-dialog dialog-with-list",await aK("AdminCenter_AddUsersToSingleGroup_Text"),null),(()=>(0,
s.F)(e,[],c,aJ)))),b)}(a,b);return c.length>0&&(a5.onEvent.CallAllSync([{event:3,id:[a.m_id,...c.map((a=>a.id))]}]),
fE(await aK("Notification_Users_Added_To_Groups_Text"),null,null),!0)}async function ec(){return fA((0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal create-group-dialog",aK("AdminCenter_GroupsTabView_CreateGroup_Title_Text"),null),(a=>(0,
h.xq)(bw,aX,aO,aJ,{GetCompanyGroups:ce.GetCompanyGroups,GetCompanyPoliciesValues:fI},a)))),null)}async function ed(a){
return fA((0,
y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal rename-group-dialog",await aK("AdminCenter_RenameTo_Text"),null),(b=>(0,
h.DI)(a,aO,aJ,{RenameGroup:ce.RenameGroup},b)))),null)}function ee(a,b){
if(a.m_id===cI&&"group-details"===bk.GetActiveView(null)&&bk.GetState().m_id===a.m_id&&cK)return bk.SetState({
m_view:"group-details",m_id:cI,m_tab:b},!1,!1),void cK.OnAfterShow();cG.Start((async()=>{(0,Y.rK)(cH),ef(),cI=a.m_id,
"search"===bk.GetActiveView(null)&&fp(),bk.SetState({m_view:"group-details",m_id:cI,m_tab:b},!0,!1),cK=(0,
h.m4)(a,ce,cb,aX,aY,aW,a4,bg,aT,a5,aR,bk,bw,bx,{GetAccountInfo:dl,GetListOfCommandsForUser:dA,GetListOfCommandsForRfItem:ez,
GetCompanyInfo:d0,GetCompanyPoliciesValues:fI,GetGroupPolicyValue:fM,GetDataItemPasswordStrength:eQ,GetGroupSecurityReport:eR,
GetTextByPasswordStrength:dw,GetSortedAndFilteredDataList:el,GetAddDataDropdownCommands:et,GetLanguageTag:ba,
IsCurrentUserAdmin:bu,OpenDataTabFolder:eM,SetLoginLogoImageBackgroundUrl:fC,ShowGroupsTab:dX,ShowUserMainView:dU,
ShowExcludeUsersFromGroupConfirmation:dS,ShowAddUsersToSingleGroupDialog:eb,ShowDataViewModeInDetailsPane:fj,
ShowDeleteRfItemDialog:eq,ShowMoveCloneRfItemDialog:ep,ShowDeleteGroupDialog:ea,ShowModalDialog:fA,ShowNotification:fE,
ShowSetPolicy:fv,ShowRenameGroupDialog:ed},aJ);const c=await cK.Create();cH.appendChild(c),cK.OnAfterShow(),fa()}))}
function ef(){cI="",cK&&(cK.Dispose(),cK=null)}async function eg(a){
const b=await aK("AdminCenter_UsersTabView_BuyLicenses_Dialog_Text"),c=await aK("Options_LicenseCompanyInfo_UpgradeBusinessLicense_Button_Text"),d=(0,
y.Sw)((0,
ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal but-licenses-dialog",await aK("AdminCenter_UsersTabView_BuyLicenses_Dialog_Title"),null),(()=>(0,
x._3)((async(a,d)=>am("div",{className:"content"},am("div",{className:"confirmation-text"},am("span",{className:"text-part"
},b)),am("div",{className:"buttons-bar"},am("div",{className:"button default-button",onclick:()=>a(!0)},c))))))))
;await fA(d,a)&&await aO.OpenPaymentPage({action:"buymore"},a)}async function eh(a,b,c,d){return fA((0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal",a,{onCancel:(a,b)=>a(!1),onEscape:(a,b)=>a(!1),onClickOutside:null}),(()=>(0,
x._3)((async(a,e)=>am("div",{className:"content"},"string"==typeof b?am("div",{className:"confirmation-text"},b):b,am("div",{
className:"buttons-bar"},am("button",{className:"button",onclick:()=>a(!1),title:c,type:"button"},c),am("button",{
className:"button default-button",onclick:()=>a(!0),title:d,type:"button"},d)))))))),null)}async function ei(a){
const b=await aK("AdminCenter_ErrorDialog_Title"),c=await aK("StartPage_DialogButton_Ok");return fA((0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal",b,null),(()=>(0,x._3)((async(b,d)=>am("div",{className:"content"},am("div",{
className:"confirmation-text"},a),am("div",{className:"buttons-bar"},am("button",{className:"button default-button",
onclick:()=>b()},c)))))))),null)}async function ej(){return ck=(0,r.S2)(a4,aV,aP,bg,aR,aS,aU,aA,a5,{GetDataItemsList:eo,
GetSortedAndFilteredDataList:el,GetAddDataDropdownCommands:et,GetCompanyGroups:ce.GetCompanyGroups,GetDataListCurrentFolder:ch,
GetListOfCommandsForRfItem:ez,GetDataItemPasswordStrength:eQ,GetTextByPasswordStrength:dw,GetLanguageTag:ba,
GetSecurityReportByPath:eS,IncludeItemToFilterResult:em,SetDataListCurrentFolder:ci,ShowCreateLoginDialog:eu,
ShowDataViewModeInDetailsPane:fj,ShowAddMoveCloneRfItemDialog:ep,ShowDeleteRfItemDialog:eq,SetLoginLogoImageBackgroundUrl:fC,
ShowNotification:fE,ShowModalDialog:fA},aJ),ck.Create()}function ek(a){"data"!==bk.GetActiveView(null)&&(bk.SetState({
m_view:"data"},a,!1),ck.OnAfterShow(),e9())}async function el(a,b,c){var d,e;const f=[];let g=[],h=[]
;if(b.m_reused||b.m_duplicated){const a=await eS("",!1,c);if(g=a.reused.map((a=>a.items.map((a=>a.itemInfo.path)))).flat(1),
h=a.duplicates.map((a=>a.items.map((a=>a.itemInfo.path)))).flat(1),b.m_reused&&!g.length)return[]
;if(b.m_duplicated&&!h.length)return[]}for(const i of a){await em(i,b,g,h,c)&&f.push(i)}if(b.m_sort){const a=b.m_sort
;0===a.m_sort_by?a.m_without_folders?f.sort(((b,c)=>{const d=(0,G.em)(b.path),e=(0,G.em)(c.path)
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)
})):f.sort(((b,c)=>(0,m.cj)(b,c,a.m_asc))):(null===(d=b.m_search)||void 0===d?void 0:d.m_results_map)&&b.m_search.m_results_map.size>0&&(null===(e=b.m_search)||void 0===e?void 0:e.m_query)?f.sort(((a,c)=>{
var d,e,f,g,h,i
;const j=null!==(f=null===(e=null===(d=b.m_search)||void 0===d?void 0:d.m_results_map.get(a.path))||void 0===e?void 0:e.rank)&&void 0!==f?f:0
;return(null!==(i=null===(h=null===(g=b.m_search)||void 0===g?void 0:g.m_results_map.get(c.path))||void 0===h?void 0:h.rank)&&void 0!==i?i:0)-j
})):a.m_without_folders?f.sort(((b,c)=>{const d=(0,G.em)(b.path),e=(0,G.em)(c.path)
;return a.m_asc?d.localeCompare(e):e.localeCompare(d)})):f.sort(((b,c)=>(0,m.cj)(b,c,a.m_asc)))}else f.sort(((a,b)=>(0,
m.cj)(a,b,!0)));return f}async function em(a,b,c,d,e){if(b.m_reused&&!c.length||b.m_duplicated&&!d.length)return!1
;if(b.m_search&&b.m_search.m_query){if(9===a.type)return!1;const c=(0,G.em)(a.path),d=(0,
I.zR)(b.m_search.m_query,c,!1,!0,!1,!1,!1,!1);if(!d.matches.length)return!1;b.m_search.m_results_map.set(a.path,{
matches:d.matches,rank:d.rank})}if(b.m_shared&&b.m_shared.length>0&&!ch(null)){const c=b.m_shared,d=await async function(a,b){
return cn&&!a||(cn=await co.Execute({action:async a=>await aN.GetReceivedItems(bx,a)},b)),cn}(!1,e);let f=[...d.accounts]
;if(c.includes(0)&&!c.includes(1)&&(f=f.filter((a=>a.sender===bx))),
c.includes(1)&&!c.includes(0)&&(f=f.filter((a=>a.sender!==bx))),8===a.type){if(!f.some((b=>`/${b.name}`===a.path)))return!1
}else{const b=c.includes(1);if(b&&(!a.sharedFile||!a.received))return!1;if(!(b||a.sharedFile&&a.granted))return!1}}
if(b.m_group&&b.m_group.length>0){if(b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_file_type&&b.m_file_type.length>0)return!1
;const c=b.m_group,d=await ce.GetCompanyGroups(!1,e),f=ce.GetGroupsMapFromGroupsList(d,"name")
;if(!a.sharedFolder||!a.sharedGroup)return!1;const g=(0,G.em)(a.path),h=f.get(g);if(!h||!c.includes(h.id))return!1}
if(b.m_pwd_strength&&b.m_pwd_strength.length>0){if(!a.sharedGroup&&a.readOnly&&a.sharedFolder)return!1}
if(b.m_file_type&&b.m_file_type.length>0||b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_compromised||b.m_reused||b.m_duplicated||b.m_created||b.m_modified)if(8!==a.type){
if(b.m_pwd_strength&&b.m_pwd_strength.length>0){if(1!==a.type)return!1;const c=await eO(a);if(null===c)return!1
;if(!b.m_pwd_strength.includes((0,u.MB)(c)))return!1}
if(b.m_file_type&&b.m_file_type.length>0&&!b.m_file_type.includes(a.type))return!1;if(b.m_compromised&&bg){
if(1!==a.type)return!1;const b=await a4.GetDataItem(a.path,4,null,e);if(!await(0,m.e7)({m_item:b,m_item_info:a},bg,e))return!1}
if(b.m_reused){if(1!==a.type)return!1;if(!c.includes(a.path))return!1}if(b.m_duplicated){if(1!==a.type||!d.length)return!1
;if(!d.includes(a.path))return!1}if(b.m_created){const c=24*b.m_created*60*60,d=(0,ai.t2)();if(!a.cre||d-a.cre>c)return!1}
if(b.m_modified){const c=24*b.m_modified*60*60,d=(0,ai.t2)();if(!a.mod||d-a.mod>c)return!1}}else try{
if(!await en(a,b,c,d,e))return!1}catch(f){return(0,ak.au)(f),!1}return!0}async function en(a,b,c,d,e){var f,g;try{
const h=await eo(a,63,e);if(!h.length)return!1
;const i=h.filter((a=>b.m_pwd_strength&&b.m_pwd_strength.length>0||b.m_compromised||b.m_reused||b.m_duplicated?1===a.type:!!(b.m_file_type&&b.m_file_type.length>0||b.m_created||b.m_modified)&&8!==a.type)),j=h.filter((a=>8===a.type))
;if(!i.length&&!j.length)return!1
;let k=!(b.m_pwd_strength&&b.m_pwd_strength.length>0),l=!(b.m_file_type&&b.m_file_type.length>0),n=!b.m_compromised;bg||(n=!1)
;let o=!b.m_reused,p=!b.m_duplicated,q=!b.m_created,r=!b.m_modified;for(let s=0;s<i.length;s++){const h=i[s]
;if(b.m_reused&&!o&&c.includes(h.path)&&(o=!0),b.m_duplicated&&!p&&d.includes(h.path)&&(p=!0),
b.m_pwd_strength&&b.m_pwd_strength.length>0&&!k){const a=await eO(h);if(null===a)continue;b.m_pwd_strength.includes((0,
u.MB)(a))&&(k=!0)}if(b.m_created&&!q){const a=24*b.m_created*60*60;(0,ai.t2)()-(null!==(f=h.cre)&&void 0!==f?f:0)<=a&&(q=!0)}
if(b.m_modified&&!r){const a=24*b.m_modified*60*60;(0,ai.t2)()-(null!==(g=h.mod)&&void 0!==g?g:0)<=a&&(r=!0)}
if(b.m_compromised&&!n&&bg){const b=await a4.GetDataItem(h.path,4,null,e);await(0,m.e7)({m_item:b,m_item_info:a},bg,e)&&(n=!0)}
if(b.m_file_type&&b.m_file_type.length>0&&!l&&b.m_file_type.includes(h.type)&&(l=!0),k&&n&&l&&o&&p&&q&&r)return!0}
for(let a=0;a<j.length;a++){const f=j[a];if(await en(f,b,c,d,e))return!0}return!1}catch(h){return(0,ak.au)(h),!1}}
async function eo(a,b,c){var d;let e=await a4.List(null!==(d=null==a?void 0:a.path)&&void 0!==d?d:"",b,c)
;return a||(e=e.filter((a=>(0,G.em)(a.path).toLowerCase()!==h.DC.toLowerCase()))),e}async function ep(a,b,c){
const d=await async function(a,b,c){
const d=1===b?await aK("AdminCenter_MoveTo_Text"):2===b?await aK("AdminCenter_CloneTo_Text"):await aK("AdminCenter_AddToGroup_Text"),e=(0,
y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal move-clone-file-dialog",d,null),(c=>(0,m.bM)(a,b,d,a4,{ShowNotification:fE,
ShowConfirmationDialog:eh},aJ,c))));return fA(e,c)}(a,b,c);if(d.m_all_succeded)return await er(d,b),!0
;const e=d.m_result.filter((a=>!0===a.m_succeded));return await es(d,b),e.length>0}async function eq(a){
const b=await async function(a){
return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal",await aK("AdminCenter_DeleteFile_Text",[""]),null),(b=>(0,
m.kh)(a,a4,aJ,b)))),null)}(a);if(b.m_all_succeded)return await er(b,0),!0;const c=b.m_result.filter((a=>!0===a.m_succeded))
;return await es(b,0),c.length>0}async function er(a,b){var c;const d=(0,G.em)(null!==(c=a.m_target_path)&&void 0!==c?c:"")
;if(1===a.m_result.length){const c=a.m_result[0],e=(0,G.em)(c.m_item_info.path)
;fE(0===b?await aK("Notification_File_Deleted_Text",[e]):2===b?await aK("Notification_File_Cloned_Text",[e]):1===b?await aK("Notification_File_Moved_Text",[e]):await aK("Notification_File_Added_Text",[e,d]),cW,null)
}else{
fE(0===b?await aK("Notification_Items_Deleted_Text",[(0,ah.bf)(a.m_result.length)]):2===b?await aK("Notification_Items_Cloned_Text",[(0,
ah.bf)(a.m_result.length)]):1===b?await aK("Notification_Items_Moved_Text",[(0,
ah.bf)(a.m_result.length)]):await aK("Notification_Items_Added_Text",[(0,ah.bf)(a.m_result.length),d]),cW,null)}}
async function es(a,b){const c=a.m_result.filter((a=>!0===a.m_succeded)),d=a.m_result.filter((a=>!1===a.m_succeded))
;return fA((0,
y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal report-dialog",await aK("AdminCenter_Action_Report_Text"),null),(()=>({
Create:async(e,f)=>{const g=0===b?await aK("StartPage_Delete_Multiselect_Notification",[(0,
ah.bf)(c.length)]):1===b?await aK("StartPage_Move_Multiselect_Notificaton",[(0,
ah.bf)(c.length),a.m_target_path||cX]):await aK("StartPage_Clone_Multiselect_Notificaton",[(0,
ah.bf)(c.length),a.m_target_path||cX]),h=0===b?await aK("StartPage_Delete_Multiselect_Error",[(0,
ah.bf)(d.length)]):1===b?await aK("StartPage_Move_Multiselect_Error",[(0,
ah.bf)(d.length)]):await aK("StartPage_Clone_Multiselect_Error",[(0,ah.bf)(d.length)]);return am("div",{className:"content"
},am("div",{className:"succeded-text"},g),am("div",{className:"failed-text-main"},h),am("div",{className:"failed-details-list"
},d.map((a=>am("div",{className:"failed-text-detail"},a.m_error||"Error")))),am("div",{className:"buttons-bar"},am("div",{
className:"button default-button",onclick:()=>{e()}},await aK("Cmd_Ok_Flat"))))},OnAfterShow:()=>{},OnBeforeHide:()=>{},
Focus:()=>{},Dispose:()=>{}})))),null)}async function et(a,b){const c=[],d=bu(null);let e=null;if(!d){const a=await dl(!1,null)
;e=await bj.Parse(a.policies||"")}a||(c.push({title:await aK("RoboformType_Folder"),imageClass:"cmd-create-folder-icon",
onCommand:async(a,b)=>{const c=await ev(null,b);c&&fE(await aK("StartPage_Editor_ItemCreated",[c]),cW,null)}}),
c.push("separator"));let g=!0;if(!d&&e){
const a=e.find((a=>"DisableCreateLogins"===a.m_name)),b=e.find((a=>"DisableCreateAppLogins"===a.m_name));g=!a||!b}g&&c.push({
title:await aK("RoboformType_Login"),imageClass:"cmd-create-login-icon",onCommand:async(a,c)=>{eu(b)}});let h=!0;if(!d&&e){
h=!e.find((a=>"DisableCreateBookmarks"===a.m_name))}h&&c.push({title:await aK("RoboformType_Bookmark"),
imageClass:"cmd-create-bookmark-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=(0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,
y.dK)("dialog-modal create-bookmark-dialog",await aK("AdminCenter_GroupsTabView_CreateNewBookmark_Title_Text"),null),(()=>(0,
m.ag)(a||ch(null)||{path:"",type:8},a4,aJ,{ShowItemRewriteConfirmationDialog:ex,GetImageAndSetToDialogHeader:fB,
GetMatchingPasscards:eN}))));return fA(b,null)}(b);d&&fE(await aK("StartPage_Editor_ItemCreated",[d]),cW,null)}});let i=!0
;if(!d&&e){i=!e.find((a=>"DisableCreateSafenotes"===a.m_name))}i&&c.push({title:await aK("RoboformType_Safenote"),
imageClass:"cmd-create-safenote-icon",onCommand:async(a,c)=>{const d=null!=b?b:{path:"",type:8};await fj(d,{},!0)}});let j=!0
;if(!d&&e){j=!e.find((a=>"DisableCreateIdentities"===a.m_name))}j&&c.push({title:await aK("RoboformType_Identity"),
imageClass:"cmd-create-identity-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=await(0,f.ow)(),c=(0,
y.Sw)((0,
ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal create-identity-contact-dialog",await aK("AdminCenter_GroupsTabView_CreateNewIdentity_Title_Text"),null),(()=>{
let c=a?Object.assign({},a):null;return c||(c="data"===bk.GetActiveView(null)&&ch(null)||{path:"",type:8}),
b.CreateIdentityView(c,a4,bL,!0,aJ)})));return fA(c,null)}(b);await fn(d.m_item_info,d.m_item)}});let k=!0;if(!d&&e){
k=!e.find((a=>"DisableCreateContacts"===a.m_name))}return k&&c.push({title:await aK("RoboformType_Contact"),
imageClass:"cmd-create-contact-icon",onCommand:async(a,c)=>{const d=await async function(a){const b=await(0,f.ow)(),c=(0,
y.Sw)((0,
ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal create-identity-contact-dialog",await aK("AdminCenter_GroupsTabView_CreateNewContact_Title_Text"),null),(()=>{
let c=a?Object.assign({},a):null;return c||(c="data"===bk.GetActiveView(null)&&ch(null)||{path:"",type:8}),
b.CreateContactView(c,a4,bL,!0,aJ)})));return fA(c,null)}(b);await fn(d.m_item_info,d.m_item)}}),c}function eu(a){(0,
af.fI)((async()=>{const b=await async function(){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal login-templates-dialog",await aK("AdminCenter_GroupsTabView_CreateNewLogin_Title_Text"),null),(()=>(0,
m.eo)(bi,{GetLoginTemplates:ey},aJ)))),null)}();if(b){const c=await async function(a,b){const c=(0,y.Sw)((0,ah.TT)(bP),(0,
y.p)((0,y.dK)("dialog-modal create-login-dialog",await aK("AdminCenter_GroupsTabView_CreateNewLogin_Title_Text"),null),(()=>(0,
m.ns)(a,b||ch(null)||{path:"",type:8},a4,aJ,{ShowItemRewriteConfirmationDialog:ex,GetImageAndSetToDialogHeader:fB,
GetMatchingPasscards:eN}))));return fA(c,null)}(b,a);c?fE(await aK("StartPage_Editor_ItemCreated",[c]),cW,null):eu(a)}})())}
async function ev(a,b){const c=a||ch(null);return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal create-folder-dialog",aK("AdminCenter_GroupsTabView_CreateNewFolder_Title_Text"),null),(()=>{
const a="data"===bk.GetActiveView(null)&&c||{path:"",type:8};return(0,m.kD)(a,a4,aJ,b)}))),null)}async function ew(a){
const b=a?await aK("AdminCenter_PoliciesTabView_EditLoginTemplate"):await aK("AdminCenter_PoliciesTabView_CreateLoginTemplate")
;return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal create-login-template-dialog",b,null),(b=>(0,m.zF)(bf,a,aJ,{
GetImageAndSetToDialogHeader:fB},b)))),null)}async function ex(a){return fA((0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,
y.dK)("dialog-modal",await aK("AdminCenter_Confirm_Overwrite_Text"),null),(()=>(0,x._3)((async(b,c)=>am("div",{
className:"content"},am("div",{className:"confirmation-text"},a),am("div",{className:"buttons-bar"},am("div",{
className:"button",onclick:()=>b(!1)},await aK("Options_No")),am("div",{className:"button default-button",onclick:()=>b(!0)
},await aK("Options_Yes"))))))))),null)}async function ey(a){
return cm||(cm=await be.GetListOfKnownLoginsThatCanBeCreated("v8",bw,a),cm)}async function ez(a){switch(a.type){case 3:case 4:
case 1:return async function(a,b){const c=[],d=a.error&&(0,K.tM)(a.error,4),e=!a.sharedGroup&&a.readOnly&&a.sharedFolder
;let f=a.gotoUrl;if(!f){f=(await a4.GetDataItem(a.path,1,null,null)).m_goto_url}const g=!!f&&!(0,N.HB)(f||""),h=f&&(0,V.oK)(f)
;let i=!1;e||!g||b||h||(aH||(await async function(a,b){b.push({title:await aK("Cmd_Login_Flat"),imageClass:"cmd-login-icon",
onCommand:async(b,c)=>{await aO.GoFillSubmit({navigate:!0,path:a.path,submit:!0,newTab:!0},null)}})}(a,c),
await async function(a,b){b.push({title:await aK("Cmd_GoFill_Flat"),imageClass:"cmd-gofill-icon",onCommand:async(b,c)=>{
await aO.GoFillSubmit({navigate:!0,path:a.path,submit:!1,newTab:!0},null)}})}(a,c)),await async function(a,b){b.push({
title:await aK("Cmd_Goto_Flat"),imageClass:"cmd-goto-icon",onCommand:async(b,c)=>{await aO.GoTo(a.path,{newTab:!0})}})}(a,c),
i=!0);let j=!1;if(d||4===a.type);else if(!e&&!b){const b=await a4.GetDataItem(a.path,4,null,null);if(b){const a=(0,
m.iK)(b,U.Df),d=(0,m.iK)(b,U.Aq);(a||d)&&i&&c.push("separator"),a&&(c.push({title:await aK("AdminCenter_CopyUsername_Text"),
imageClass:"cmd-copy-icon",onCommand:async(b,c)=>{await fD(a,bJ),fE(await aK("Notification_Username_Copied_Text"),null,null)}}),
j=!0),d&&(c.push({title:await aK("AdminCenter_CopyPassword_Text"),imageClass:"cmd-copy-icon",disabled:!1,onCommand:async(a,b)=>{
await fD(d,bJ),fE(await aK("Notification_Password_Copied_Text"),null,null)}}),j=!0)}}e||(j&&c.push("separator"),await eE(a,c),
j&&c.push("separator"),b||d||await eF(a,c),a.readOnly||b||d||await eG(a,c),b||await eH(a,c),await eI(a,c),await eJ(a,c),
await eK(a,c));return c}(a,!1);case 2:return async function(a,b){const c=[],d=a.error&&(0,
K.tM)(a.error,4),e=!a.sharedGroup&&a.readOnly&&a.sharedFolder;let f=a.gotoUrl;if(!f){
const b=await a4.GetDataItem(a.path,1,null,null);f=b.m_goto_url}const g=!!f&&!(0,N.HB)(f||""),h=f&&(0,V.oK)(f);g&&!b&&(c.push({
title:await aK("Cmd_Goto_Flat"),imageClass:"cmd-goto-icon",onCommand:async(b,c)=>{d?fE((0,
z.Qo)(a.error),5,2):h?fE(await aK("CannotOpenUrlForSecurityReasons"),5,2):(0,af.fI)(aP.OpenUrl({url:f,newTab:!0},null))}}),
e||c.push("separator"));!f||e||b||(c.push({title:await aK("Cmd_Copy_URL_Flat"),imageClass:"cmd-copy-icon",
onCommand:async(a,b)=>{await fD(f,bJ);fE(await aK("Notification_URL_Copied_Text"),null,null)}}),c.push("separator"),
await eE(a,c),c.push("separator"));e||(b||d||await eF(a,c),a.readOnly||b||d||await eG(a,c),b||await eH(a,c),await eI(a,c),
await eJ(a,c),await eK(a,c));return c}(a,!1);case 5:case 6:return async function(a,b){
const c=[],d=!a.sharedGroup&&a.readOnly&&a.sharedFolder;d||(await eE(a,c),c.push("separator"),b||(await eF(a,c),await eH(a,c)),
await eI(a,c),await eJ(a,c),5===a.type&&await eL(a,c),await eK(a,c));return c}(a,!1);case 7:return async function(a,b){
const c=!a.sharedGroup&&a.readOnly&&a.sharedFolder,d=[];c||(await eE(a,d),d.push("separator"));b||await eF(a,d)
;c||(b||await eH(a,d),await eI(a,d),await eJ(a,d),await eK(a,d));return d}(a,!1);case 8:{
const b=a.path.split("/").filter((a=>""!==a)).length>1;if(a.sharedFolder&&a.sharedGroup&&!b){
return d1(await ce.GetGroupInfoFromPath(a.path),null,null)}return async function(a){
const b=[],c=a.readOnly&&a.sharedFolder,d=a.sharedGroup||!1,e=a.sharedFolder||!1,f=(0,ag.Y0)(a.path),g=""===f;if(d){if(g){
const c=await ce.GetGroupInfoFromPath(a.path);await d2(c,b),b.push("separator"),await d4(a,b),await d6(c,b),await d7(c,b),
b.push("separator"),await d3(c,b)}else await d4(a,b),await eH(a,b),await eK(a,b);return b}if(e)return c?g?(await eH(a,b),
await d5(a,b),b):b:(await d4(a,b),await eH(a,b),g||await eK(a,b),b.push("separator"),await d5(a,b),b);return await d4(a,b),
await eH(a,b),await eK(a,b),b}(a)}default:throw(0,ak.Lh)()}}async function eA(a,b){const c=[];return c.push({
title:await aK("Cmd_Rename_Flat"),imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await eI(a,c),
await eJ(a,c),await eK(a,c),c}async function eB(a,b){const c=[];return c.push({title:await aK("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await eI(a,c),await eJ(a,c),await eK(a,c),c}
async function eC(a,b){const c=[];return c.push({title:await aK("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>b()}),await eI(a,c),await eJ(a,c),5===a.type&&await eL(a,c),
await eK(a,c),c}async function eD(a,b,c){const d=[];return d.push({title:await aK("Cmd_Rename_Flat"),
imageClass:"admin-center-view cmd-rename-icon",onCommand:async()=>c()}),b||(await eI(a,d),await eJ(a,d),await eK(a,d)),d}
async function eE(a,b){b.push({title:await aK("AdminCenter_AddToGroup_Text"),imageClass:"cmd-add-icon",onCommand:async(b,c)=>{
await ep([a],3,c)}})}async function eF(a,b){b.push({title:await aK("Cmd_View_Flat"),imageClass:"cmd-view-icon",disabled:!1,
onCommand:async(b,c)=>{if(7===a.type||2===a.type||1===a.type||5===a.type||6===a.type){
const b=await a4.GetDataItem(a.path,4,null,c);await fj(a,b,!1)}}})}async function eG(a,b){b.push({
title:await aK("Cmd_Edit_Flat"),imageClass:"cmd-edit-icon",disabled:2!==a.type&&1!==a.type,onCommand:async(b,c)=>{
if(2===a.type||1===a.type){const b=await a4.GetDataItem(a.path,4,null,c);await fl(a,b,!0)}}})}async function eH(a,b){b.push({
title:await aK("Cmd_Rename_Flat"),imageClass:"cmd-rename-icon",onCommand:async(b,c)=>{const d=await async function(a,b){
const c=(0,y.Sw)((0,ah.TT)(bP),(0,y.p)((0,y.dK)("dialog-modal",await aK("AdminCenter_RenameTo_Text"),null),(()=>(0,
m.ps)(a,a4,aY,aJ,b))));return fA(c,null)}(a,c);d&&fE(await aK("Notification_Item_Renamed_Text",[(0,G.em)(a.path),d]),cW,null)}})
}async function eI(a,b){b.push({title:await aK("Cmd_Move_Flat"),imageClass:"cmd-move-icon",onCommand:async(b,c)=>{
await ep([a],1,c)}})}async function eJ(a,b){b.push({title:await aK("Cmd_Clone_Flat"),imageClass:"cmd-clone-icon",
onCommand:async(b,c)=>{await ep([a],2,c)}})}async function eK(a,b){b.push({title:cY,imageClass:"cmd-delete-icon",
onCommand:async(b,c)=>{await eq([a])}})}async function eL(a,b){b.push({title:await aK("AdminCenter_CopyAllFields_Text"),
imageClass:"cmd-copy-icon",onCommand:async(b,c)=>{const d=await a4.GetDataItem(a.path,4,null,c);try{const a=await(0,
G._1)(d,bL,aJ);await fD(a,bJ);fE(await aK("Notification_Identity_Fields_Copyied_Text"),null,null)}catch(e){fE((0,z.Qo)(e),5,2)}}
})}function eM(a){ci(a),ek(!1)}async function eN(a,b,c,d){
const e=Array.isArray(a)?a:[a],f=void 0===(c=c||{}).matchLevelMin?0:c.matchLevelMin,g=void 0===c.matchLevelMax?21:c.matchLevelMax,h=await aZ.GetDomainMatch(d),i=(0,
O.x3)();for(const[k,l]of e.entries()){const a=(0,N.dy)(l);if(!a)continue;const c=(0,N.WW)(l),e=(0,ag.MI)(c);if(!e)continue
;const m=c.m_host||"",n=await j(e,b,d),o=0===k;for(const b of n)switch(b.type){case 3:case 2:if(b.gotoUrl){const c=(0,
N.dy)(b.gotoUrl);if(c){const d=(0,O.QM)(c,a,m,h);d>=f&&d<=g&&i.AddMatch({path:b.path,level:d,isMainFrame:o})}}break;default:
if(b.matchUrl){const c=(0,N.dy)(b.matchUrl);if(c){const d=(0,O.QM)(c,a,m,h);if(d>=f&&d<=g){i.AddMatch({path:b.path,level:d,
isMainFrame:o});continue}}}}}return i.GetUnsortedMatches();async function j(a,b,c){const d=await bC.Execute({action:async c=>{
try{const d=await aZ.GetDomainMatch(c);let e=await async function(a,b,c,d){const e=[],f=bu(null)?66:2;return await(0,
J.s_)(a4,(async f=>{if(d&&await d.YieldToUI(50),0!==b&&b!==f.type)return;let g;switch(f.type){case 3:case 2:g=f.gotoUrl;break
;default:g=f.matchUrl}g&&(0,O.xv)(g,a,c)&&e.push(f)}),{path:"",parts:f,deep:!0},d),e}(a,0,d,c)
;return 0!==b&&(e=e.filter((a=>a.type===b))),e}catch(d){return(0,ak.au)(d),[]}}},c);return d}}async function eO(a){
return eQ(await a4.GetDataItem(a.path,3,null,null))}async function eP(a){try{return(await(0,
ah.TT)(bh).GetUpdatePasswordStrengthInfo(a,null)).strength}catch(b){return null}}async function eQ(a){const b=(0,m.iK)(a,U.Aq)
;return b?eP(b):null}async function eR(a,b){const c=await eT(b)
;return await(0,P.bG)(a,a4,c,aT.GetAllDataItemsWhereSecurityWarningIsDisabled,bg,!1,b)}async function eS(a,b,c){
const d=await eT(c);return await(0,P.ME)(a,a4,d,aT.GetAllDataItemsWhereSecurityWarningIsDisabled,bg,!1,bu(null),b,c)}
async function eT(a){return cl.GetOnce((async()=>(0,L.v5)(await(0,ab.$)("pwd-dict.json",a,aM))))}async function eU(){
return cq=(0,k.iX)(bw,bf,a0,a5,bk,{GetAccountInfo:dl,GetCompanyInfo:d0,GetCompanyGroups:ce.GetCompanyGroups,
GetCustomTemplates:fK,GetLanguage:ba,IsCurrentUserAdmin:bu,ShowNotification:fE,ShowCreateOrChangeLoginTemplateDialog:ew,
SetLoginLogoImageBackgroundUrl:fC,ShowModalDialog:fA,UploadCompanyPolicies:dY,UploadGroupPolicies:dZ,ShowConfirmationDialog:eh
},aJ),cq.Create()}function eV(a,b){"policies"===bk.GetActiveView(null)&&bk.GetState().m_tab===b||(bk.SetState({
m_view:"policies",m_tab:b||"security-and-access"},a,!1),cq.OnAfterShow(),e9())}function eW(a){
bu(null)&&"integration"!==bk.GetActiveView(null)&&(bk.SetState({m_view:"integration"},a,!1),e9())}async function eX(){
return cu=(0,p.n5)(cb,ce,aY,aO,bg,a5,aR,aS,bk,{GetAccountInfo:dl,GetTextBySecurityScoreValue:dv,GetTextByUserStatusValue:du,
GetLicenseInfo:e1,GetListOfCommandsForGroup:d1,GetListOfCommandsForUser:dz,GetCompanyPolicyValue:fH,GetLanguageTag:ba,
IsCurrentUserAdmin:bu,IsRemoveFromGroupShown:dE,ShowDeleteUserDialog:dH,ShowSuspendUserDialog:dI,ShowRestoreUserDialog:dJ,
ShowRemoveUsersFromGroupsDialog:dN,ShowAddUsersToGroupsDialog:dO,ShowDeleteGroupDialog:ea,
ShowResendToUserSetupInstructionsDialog:dF,ShowModalDialog:fA,ShowUserMainView:dU,ShowGroupMainView:ee,ShowNotification:fE},aJ),
cu.Create()}function eY(a,b){"reports"===bk.GetActiveView(null)&&bk.GetState().m_tab===b||(bk.SetState({m_view:"reports",
m_tab:b||(bu(null)?"company":"groups")},a,!1),cu.OnAfterShow(),e9())}async function eZ(a){cO&&(await fd(),fh()),bk.SetState({
m_view:"settings",m_tab:a},null===cv,!1),e9()}function e0(){const a=bk.GetActiveTab(null);bk.SetState({m_view:a},!0,!1),e9()}
async function e1(a,b){if(!bq(null)||a){const a=await bB.Execute({action:async a=>aN.GetLicenseInfo(a)},b);br(a)}return(0,
ah.TT)(bq(null))}async function e2(a){await e1(!0,a)}async function e3(a){const b=await e1(!1,a)
;return"trial"===b.status||"trial-expired"===b.status?"buy":"expired"===b.status?"renew":"buymore"}function e4(){
null==b0||b0.classList.remove("fade-in"),bZ(!1),bX(!1)}function e5(){(0,af.fI)(aZ.Logoff(null))}function e6(){
const a="light"===a8(null)?"dark":"light";"dark"===a?(null==bP||bP.classList.add("dark-theme"),
null==bP||bP.classList.remove("light-theme")):(null==bP||bP.classList.add("light-theme"),
null==bP||bP.classList.remove("dark-theme")),a9(a),(0,af.fI)(bc.SetValue("StartPage.Theme",a))}async function e7(a){var b;try{
await d0(!0,a);const c=await dl(!0,a),d=c.companies&&c.companies[0];if(!d)throw(0,
ak.ZU)(ak.V2,"Unexpected: there is no company for current Admin");bw=d.companyId||"",bx=c.accountId||"",
a7(!!c.enterpriseLicenseExpired),bv(null!==(b=d.isAdmin)&&void 0!==b&&b),d.isAdmin||function(){if(bu(null))return
;bG.Start((async a=>{try{const b=await aX.GetMemberGroups(bx,null,a);if(!Array.isArray(b))throw(0,
ak.ZU)(ak.V2,"Wrong data format");if(!b.some((a=>a.isManager&&a.company)))throw(0,
ak.ZU)(ak.V2,"User is not manager of any Group")}catch(b){(0,ak.au)(b),await aO.OpenStartPage(null),aQ||window.close()}}))}()
}catch(c){(0,ak.au)(c),await aO.OpenStartPage(null),aQ||window.close()}}async function e8(a){const b=await d0(!0,a);bn(b)}
function e9(){"search"!==bk.GetActiveView(null)&&fp(),dV(),ef(),fa()}function fa(){b7.forEach(Y.SE)
;const a=bk.GetActiveView(null),b=b7.get(a);b&&(0,Y.l5)(b);const c=b8.get(a);c&&c.OnAfterShow()}function fb(){de&&(de.Hide(),
de=null)}function fc(a){fi(),(0,ah.TT)(cM).classList.add("visible"),(0,ah.TT)(cM).classList.remove("closed"),cN=!0,fy(),(0,
ah.TT)(bP).classList.add("edit-pane-shown"),cM&&(cP=am("div",null,a),cM.appendChild(cP),cO=!0,cP.focus())}async function fd(){
cN&&(cJ="",(0,ah.TT)(cM).classList.add("closed"),(0,ah.TT)(bP).classList.remove("edit-pane-shown"),(0,
ah.TT)(b2).style.removeProperty("width"),(0,ah.TT)(b1).style.removeProperty("width"),(0,
ah.TT)(cM).style.removeProperty("width"),(0,Y.l5)((0,ah.TT)(b1)),(0,Y.l5)((0,ah.TT)(b2)),(0,Y.l5)((0,ah.TT)(bN)),cN=!1,fy(),
await(0,af.Gu)(cU,null),(0,ah.TT)(cM).classList.remove("visible"))}function fe(a){function b(a){a.preventDefault()
;const b=function(a){let b=Math.max(cV,a);return b=Math.min(b,window.innerWidth-800),b=Math.max(b,cV),b
}(window.innerWidth-a.clientX);(0,ah.TT)(cM).style.width=(0,V.Md)(b),fy()}cN&&(a.preventDefault(),
document.body.style.cursor="e-resize",document.addEventListener("mousemove",b),document.addEventListener("mouseup",(()=>{
document.body.style.cursor="",document.removeEventListener("mousemove",b)})))}async function ff(a,b){cL=b,
cN&&cQ&&(cQ.OnBeforeHide(),cQ.Dispose()),cQ=a,fc(await cQ.Create((function(){(0,af.fI)((async()=>{await fd(),fh()})())
}),(function(a){(0,ak.r5)(a,ak.kd)?(0,af.fI)((async()=>{await fd(),fh()})()):fE((0,ak.EB)(a),null,2)}))),cQ.OnAfterShow(),
await(0,af.Gu)(cU,null),cQ.Focus()}function fg(){fi(),(0,af.fI)(fd())}function fh(){cN||(cO&&cQ&&(cQ.OnBeforeHide(),
cQ.Dispose(),cQ=null),fi(),cL=0)}function fi(){cP?cM&&cP&&(cM.removeChild(cP),cO=!1,cP=null):cO=!1}async function fj(a,b,c){
if(c||7===a.type||1===a.type||2===a.type||5===a.type||6===a.type)if(cJ=a.path,7===a.type||c){const d=(await(0,
f.fH)()).SafenoteEditorView(c?null:a,c?null:b,c?a:null,a4,au,aO,a,!0,!0,!1,aJ,{ShowNotification:fE,ShowConfirmationDialog:eh,
ShowErrorDialog:ei,ShowModalDialog:fA,GetSafenoteCommands:eD,CopyTextToClipboard:fD,OnCreate:async a=>{
const b=await a4.GetDataItem(a.path,4,null,null);await fj(a,b,!1)}});await ff(d,5)
}else if(1!==a.type)if(2!==a.type)5!==a.type&&6!==a.type||await fk(a,b,"","");else{const c=(await(0,
f.Aj)()).BookmarkViewerView(a,b,bi,a4,au,aO,!0,a1,!1,aJ,bH,{ShowNotification:fE,ShowConfirmationDialog:eh,ShowErrorDialog:ei,
GetBookmarkCommands:eB,ShowDataEditModeInDetailsPane:fl});await ff(c,2)}else{const c=(await(0,
f.Rj)()).LoginViewerView(a,b,bi,aP,a4,au,aO,(0,ah.TT)(bh),aT,bg,!0,a1,a2,!1,!0,aJ,bH,{ShowNotification:fE,
ShowConfirmationDialog:eh,ShowErrorDialog:ei,GetLoginCommands:eA,GetDataLoginPasswordStrength:eP,GetTextByPasswordStrength:dw,
ShowDataEditModeInDetailsPane:fl,CopyTextToClipboardWithAutoClear:fD,OpenSecurityCenter:fF,OpenDataBreachMonitoring:fG})
;await ff(c,1)}}async function fk(a,b,c,d){const e=(await(0,f.ow)()).IdentityViewerView(a,b,c,d,a4,au,bL,bM,bg,aT,aO,!1,!1,aJ,{
ShowNotification:fE,ShowConfirmationDialog:eh,ShowErrorDialog:ei,GetIdentityCommands:eC,ShowDataEditModeInDetailsPane:fm,
CopyTextToClipboardWithAutoClear:fD,OnRename:()=>{},OnViewInNewTab:()=>{},OpenDataBreachMonitoring:fG}),g=5===a.type?4:3
;await ff(e,g)}async function fl(a,b,c){if(2===a.type||1===a.type)if(cJ=a.path,2!==a.type){if(1===a.type){const d=(await(0,
f.Rj)()).LoginEditorView(a,b,c,bi,a4,au,aP,!1,aJ,bH,{ShowNotification:fE,ShowConfirmationDialog:eh,ShowErrorDialog:ei,
ShowDataViewModeInDetailsPane:fj});await ff(d,1)}}else{const d=(await(0,f.Aj)()).BookmarkEditorView(a,b,c,bi,a4,au,!1,{
ShowNotification:fE,ShowConfirmationDialog:eh,ShowErrorDialog:ei,ShowDataViewModeInDetailsPane:fj},aJ);await ff(d,2)}}
async function fm(a,b,c,d){const e=(await(0,f.ow)()).IdentityEditorView(a,b,c,d,!1,a4,au,bL,bM,!1,aJ,{ShowNotification:fE,
ShowConfirmationDialog:eh,ShowErrorDialog:ei,ShowDataViewModeInDetailsPane:fk,OnRename:()=>{}});await ff(e,4)}
async function fn(a,b){cJ=a.path;let c="",d="";if(b.m_groups.length&&b.m_groups[0]){const a=b.m_groups[0];c=a.m_name,
a.m_instances.length&&a.m_instances[0]&&(d=a.m_instances[0].m_name)}const e=(await(0,
f.ow)()).IdentityEditorView(a,b,c||"Person",d||"Main",!0,a4,au,bL,bM,!1,aJ,{ShowNotification:fE,ShowConfirmationDialog:eh,
ShowErrorDialog:ei,ShowDataViewModeInDetailsPane:fk,OnRename:()=>{}}),g=5===a.type?4:3;await ff(e,g)}async function fo(a,b){
"search"!==bk.GetActiveView(null)?bk.SetState({m_view:"search",m_query:a},b,!1):bk.SetState({m_view:"search",m_query:a},b,!0),
e9(),await async function(){null==cz||cz.Dispose(),(0,Y.rK)(cy),dV(),ef(),cz=(0,j.k)(cb,ce,aR,a5,a4,bx,{
GetListOfCommandsForRfItem:ez,GetListOfCommandsForGroup:d1,GetListOfCommandsForUser:dz,GetDataLoginPasswordStrength:eO,
GetSortedAndFilteredDataList:el,GetLanguageTag:ba,IsCurrentUserAdmin:bu,IsRemoveFromGroupShown:dE,
SetLoginLogoImageBackgroundUrl:fC,ShowDeleteRfItemDialog:eq,ShowMoveCloneRfItemDialog:ep,ShowRemoveUsersFromGroupsDialog:dN,
ShowAddUsersToGroupsDialog:dO,ShowSuspendUserDialog:dI,ShowRestoreUserDialog:dJ,ShowResendToUserSetupInstructionsDialog:dF,
ShowDeleteUserDialog:dH,ShowDeleteGroupDialog:ea,ShowGroupMainView:ee,ShowUserMainView:dU,ShowDataViewModeInDetailsPane:fj,
ShowSearchedPolicy:fv,UpdateSearchInputResultsCounter:fr},aJ);const a=await cz.Create();cy.appendChild(a),cz.OnAfterShow()}(),
a5.onInitSearchPane.CallAllSync(),a5.onUpdateSearchResults.CallAllSync(a)}function fp(){bT(null),bV(null),
a5.onClearSearchResults.CallAllSync(),cB.Cancel()}function fq(){bT(null);const a=bk.GetActiveTab(null);bk.SetState({m_view:a
},!0,!1),e9()}function fr(a){bV(a)}function fs(a){dt(!0),a5.onUsersViewShown.CallAllSync(a)}function ft(a){dX(!0),
a5.onGroupsViewShown.CallAllSync(a)}function fu(a){ek(!0),a5.onDataViewShown.CallAllSync(a)}function fv(a,b,c){eV(!0,b),
a5.onPoliciesViewShown.CallAllSync(a,b,c)}function fw(a,b,c){eY(!0,a),a5.onReportsViewShown.CallAllSync(a,b,c)}function fx(a){
(function(a){if(fz(a,".dropdown-handler")||fz(a,".dropdown-menu"))return!0;return!1})(a.target)||e4()}function fy(){let a=0
;cN&&(a=(0,V.i7)((0,ah.TT)(cM).style.width),a||(a=cV)),function(a){if(0===a)(0,Y.l5)((0,ah.TT)(bN)),(0,
ah.TT)(cM).style.removeProperty("width")}(a);const b=window.innerWidth-a<=cT
;b!==b5&&(b?(null==bP||bP.classList.add("left-collapsed"),b5=!0):(null==bP||bP.classList.remove("left-collapsed"),
null==bP||bP.classList.remove("navigation-hovered"),b5=!1))}function fz(a,b){return a.matches(b)?a:function(a,b){
let c=a.parentElement;for(;c;){if(c.matches(b))return c;c=c.parentElement}return null}(a,b)}async function fA(a,b){cS=a;try{
return await a.Execute(b)}finally{cS=null}}async function fB(a,b){let c=bi.GetImagesByUrl(a);if(!c)try{
await bi.LoadImagesByUrl(a,"","imgLogo"),c=bi.GetImagesByUrl(a)}catch(e){}function d(a,b){const c=(0,
ah.TT)(bP).querySelector(`.${a}`);if(!c)return;const d=(0,ah.TT)(c).querySelector(".header"),e=d.querySelector(".logo")
;if(e&&d.removeChild(e),d.classList.remove("doc-image"),d.classList.remove("has-own-background"),b&&b.url){const a=am("div",{
className:"logo"});let c="rgba(41, 121, 255, 0.04)";if(b.background){
(0,Y.Un)(b.background)?d.classList.add("has-own-background","dark"):d.classList.add("has-own-background"),c=b.background}
d.classList.add("doc-image"),a.style.backgroundImage=`url("${b.url}")`,d.style.background=`${c}`,d.appendChild(a)
}else d.style.background=""}d(b,c?c.imgLogo:null)}async function fC(a,b){if(!a)return;const c=await async function(a){
if(!a)return null;let b=bi.GetImagesByUrl(a);if(b){if(!b.img16)try{await bi.LoadImagesByUrl(a,"","img16"),b=bi.GetImagesByUrl(a)
}catch(c){}}else try{await bi.LoadImagesByUrl(a,"","img16"),b=bi.GetImagesByUrl(a)}catch(c){}if(b){const a=b.img16
;if(a&&a.url)return`url("${a.url}")`}return null}(a);c&&(b.className="icon",b.style.backgroundImage=c)}async function fD(a,b){
await bH.WriteText(a),bK=a,b&&function(a){bI.Start((async b=>{await(0,af.Gu)(a,b);let c="";try{c=await bH.ReadText()}catch(d){}
if(bK===c||!c)try{await bH.WriteText(" "),bK=""}catch(d){}}))}(b)}function fE(a,b,c){(0,ah.TT)(cR).Show(a,b,c)}function fF(){(0,
af.fI)(aq.OpenSecurityCenter({startPage:!0,view:"compromised"}))}function fG(){(0,af.fI)(aq.OpenSecurityCenter({startPage:!0,
view:"dark-web-monitor"}))}async function fH(a,b){
const c=await d0(!1,b),d=(await bj.Parse(c.policies||"")).find((b=>b.m_name===a));return d?d.m_value:""}async function fI(a,b){
const c=await d0(!1,b),d=await bj.Parse(c.policies||""),e={};return a.forEach((a=>{
const b=d.find((b=>b.m_name===a)),c=b?b.m_value:"";e[a]=c})),e}async function fJ(){
const a=await d0(!1,null),b=(await bj.Parse(a.policies||"")).find((a=>"RfTemplates"===a.m_name)),c=b?b.m_value:"";return(0,
M.mG)(c)}async function fK(){const a=await d0(!1,null),b=(await bj.Parse(a.policies||"")).find((a=>"AllRfTemplates"===a.m_name))
;return b?b.m_value:""}async function fL(){const a=await fK();return(0,M.mG)(a)}async function fM(a,b){if(!a)return""
;const c=(await bj.Parse(a)).find((a=>a.m_name===b));return c?c.m_value:""}async function fN(a){var b,c,d,e
;const f=await e1(!1,a)
;return(null!==(c=null===(b=null==f?void 0:f.company)||void 0===b?void 0:b.numberOfUsers)&&void 0!==c?c:0)>=(null!==(e=null===(d=null==f?void 0:f.company)||void 0===d?void 0:d.numberOfLicenses)&&void 0!==e?e:30)
}function fO(a){let b=!1,c=!1,d=!1,e=!1,f=!1,g=!1,h=!1,i=!1,j=!1;for(const k of a)switch(k.event){case 11:(0,af.fI)((async()=>{
i=!0,bk.SetState({m_view:"settings",m_tab:"license"},!0,!0),df()})());break;case 0:b=!0,c=!0,i=!0;break;case 2:c=!0,e=!0,f=!0,
i=!0;break;case 3:case 4:e=!0;break;case 1:c=!0,e=!0,k.id&&k.id.includes(bx)&&(j=!0);break;case 6:case 8:e=!0,d=!0;break;case 7:
e=!0,g=!0,d=!0;break;case 10:h=!0}bD.Start((async a=>{if(await dl(j,a),await cb.GetCompanyMembers(c,a),
c&&b&&"user-details"!==bk.GetActiveView(null)&&dp("users"),await ce.GetCompanyGroups(e,a),f&&cF&&cE){
(await cb.GetCompanyMembers(!1,a)).some((a=>a.id===cE))||(bk.SetState({m_view:"users"},!0,!0),e9())}if(g&&cK&&cI){
(await ce.GetCompanyGroups(!1,a)).some((a=>a.id===cI))||(bk.SetState({m_view:"groups"},!0,!0),e9())}
d&&await ce.UpdateReceivedAccounts(a),h&&await async function(a){await dl(!0,a)}(a),i&&await e2(a)}))}function fP(a){var b,c,d
;let e=!1,f=!1,g=!1,h=!1;for(const i of a){switch(i.event){case 5:e=!0,8!==i.type&&i.path&&(f=!0),8===i.type&&i.path&&(f=!0)
;break;case 7:e=!0,8===i.type&&i.path?((0,G.QC)(i.path,(null===(b=ch(null))||void 0===b?void 0:b.path)||"")&&ci({type:8,path:""
}),cJ&&(0,G.QC)(i.path,cJ)&&(g=!0),f=!0):cJ&&cJ===i.path&&(g=!0);break;case 8:e=!0,8===i.type&&i.path?((0,
G.QC)(i.path,(null===(c=ch(null))||void 0===c?void 0:c.path)||"")&&ci({type:8,path:""}),cJ&&(0,
G.QC)(i.path,cJ)&&(i.to&&i.to.path?cJ=cJ.replace(i.path,i.to.path):g=!0)):cJ&&cJ===i.path&&!(null===(d=i.to)||void 0===d?void 0:d.path)&&(i.to&&i.to.path?cJ=i.to.path:g=!0)
;break;case 3:(0,af.fI)((async()=>{bv(await aR.GetValue("AccountCompanyAdmin",!1)),df()})());break;case 10:aQ?(0,af.fI)(j()):(0,
af.fI)(k());break;case 1:case 11:h=!0}async function j(){const a=await d0(!1,null),b={command:"open-admin-center",options:{
view:bk.GetActiveView(null),companyCreatedTime:a.createdTime}},c=JSON.stringify(b),d=await(0,ad.zN)(c),e=await(0,
ad.n1)(d),f=`${window.location.origin+window.location.pathname}#init-data=${encodeURIComponent(e)}`;window.location.replace(f),
window.location.reload()}async function k(){await aO.ShowLoginUI(null),window.close()}}(f||e||g||h)&&bE.Start((async a=>{var b
;if(h&&await ce.UpdateReceivedAccounts(a),f&&await ce.GetCompanyGroups(!0,a),"search"===bk.GetActiveView(null)&&!h){
const a=null!==(b=bS(null))&&void 0!==b?b:"";""!==a&&a5.onUpdateSearchResults.CallAllSync(a)}
!g||1!==cL&&2!==cL&&5!==cL&&4!==cL&&3!==cL||(await fd(),fh(),cL=0)}))}function fQ(a){
const b=a.syncParts.some((a=>a.localChanges.some((a=>1===a.type))||a.serverChanges.some((a=>1===a.type)))),c=b||a.syncParts.some((a=>a.localChanges.length>0||a.serverChanges.length>0))
;if(b||c){const a=bk.GetActiveView(null);bF.Start((async d=>{"groups"!==a&&await ce.GetCompanyGroups(c,d),
"users"!==a&&await cb.GetCompanyMembers(b,d)}))}}function fR(){(0,af.fI)((async()=>{var a
;bb(null!==(a=await aJ.GetLanguageTag(null))&&void 0!==a?a:"en")})())}}},89808:function(a,b,c){"use strict";c.d(b,{A:function(){
return d}});const d={version:"9.6.17.0"}},44974:function(){},49701:function(){},29165:function(){}},function(a){
a.O(0,[612],(function(){return b=99583,a(a.s=b);var b}));a.O()}]);