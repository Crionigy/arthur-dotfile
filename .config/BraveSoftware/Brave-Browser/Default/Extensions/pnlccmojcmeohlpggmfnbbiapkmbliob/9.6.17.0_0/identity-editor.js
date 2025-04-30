// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[297],{94177:function(a,b,c){c.r(b),c.d(b,{
CreateContactView:function(){return I},CreateIdentityView:function(){return H},IdentityEditorView:function(){return F},
IdentityViewerView:function(){return E}})
;var d=c(87965),e=c(47333),f=c(30045),g=c(53166),h=c(98266),i=c(41107),j=c(4601),k=c(23684),l=c(65852),m=c(4234),n=c(54811),o=c(1975),p=c(79999),q=c(42136),r=c(59283),s=c(31173),t=c(32105),u=c(97490),v=c(63956),w=c(13113),x=c(37495),y=c(73863),z=c(4153),A=c(78440),B=c(69893),C=(c(13117),
c(84224)),D=c(91764)._;function E(a,b,c,g,k,o,x,E,F,H,I,J,K,L,M){const N=k,O=x,P=E,Q=F,R=H,S=L.LocalizeString;let T=a,U=b
;const V=c,W=g;let X=T.path===m.xG,Y=[],Z=null,aa=null,ab=null;const ac=(0,e.au)(N,L)
;let ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap=null,aq=null,ar=!1,as=null,at=!1;const[au,av]=(0,
u.Uw)(!1),aw=window.ResizeObserver?new ResizeObserver((()=>aN())):null;return{Create:async function(b,c){return ad=D("div",{
className:"editor-view editor-inline editor-identity view-mode"},D("div",{className:"editor-content"},D("div",{
className:"content-header"},af=D("div",{className:"header-image"}),ah=D("div",{className:"header-title"},ai=D("span",{
className:"title-name",onclick:()=>(0,A.fI)(aJ())})),aj=(0,t.nM)("hidden",aM,aK,aL),D("div",{
className:"editor-cmdbar cmdbar-main"},J&&!K?D("div",{className:"editor-cmd editor-cmd-view-in-new-tab",
title:await S("StartPage_EditorInSeparateTab"),onclick:()=>M.OnViewInNewTab(T)}):null,ae=D("div",{
className:"editor-cmd editor-cmd-more",title:await S("StartPage_MoreActions_Tip"),onmousedown:aF,onclick:aG}),K?null:D("div",{
className:"editor-cmd editor-cmd-close",title:await S("Cmd_Close_Flat"),onclick:()=>c((0,B.JS)())})),K?D("div",{
className:"editor-cmdbar cmdbar-navigation"},D("div",{className:"editor-cmd editor-cmd-home",
title:await S("StartPage_Cmd_Home"),onclick:()=>{const a={startPage:(0,l.vj)()};(0,A.fI)(I.OpenStartPage(a))}})):null),D("div",{
className:"content-body"},ak=D("div",{className:"groups-pane"},al=D("div",{className:"groups-list noselect"})),K?D("div",{
className:"instance-content tab-view"},ag=D("div",{className:"instance-header"},D("div",{className:"identity-group-logo"
},ai=D("div",null)),am=D("div",{className:"editor-cmdbar cmdbar-instance"})),(async b=>{var c,d;if(!au(b))return D("div",{
className:"security-warning hidden"})
;const f=null===(c=U.m_groups.find((a=>"Person"===a.m_name)))||void 0===c?void 0:c.m_instances,g=[];if(f)for(const a of f){
const b=null===(d=a.m_fields.find((a=>"Email"===a.m_name)))||void 0===d?void 0:d.m_value;b&&g.push(b)}let h="";if(X){
const a=await P.GetInitialIdentity(null);h=await(0,e.D5)(a,{},L)}else h=await ac.GetDisplayNameByPath(a.path,null)
;return D("div",{className:"security-warning"},D("div",{className:"security-warning-pane"},D("div",{className:"title"},D("div",{
className:"icon"}),await S("IdentityIsCompromised_Notification_Title")),D("div",{className:"message"
},S("IdentityIsCompromised_Notification_Message",[h])),D("br",null),D("button",{className:"button cta-btn",
onclick:()=>M.OpenDataBreachMonitoring(g)},S("EmailBreach_ViewReport"))))}),an=D("div",{className:"instance-fields-list"
}),ao=D("div",{className:"instance-no-fields hidden"})):D("div",{className:"instance-pane"},am=D("div",{
className:"editor-cmdbar cmdbar-instance"}),D("div",{className:"instance-content"},(async b=>{var c,d;if(!au(b))return D("div",{
className:"security-warning hidden"})
;const f=null===(c=U.m_groups.find((a=>"Person"===a.m_name)))||void 0===c?void 0:c.m_instances,g=[];if(f)for(const a of f){
const b=null===(d=a.m_fields.find((a=>"Email"===a.m_name)))||void 0===d?void 0:d.m_value;b&&g.push(b)}let h="";if(X){
const a=await P.GetInitialIdentity(null);h=await(0,e.D5)(a,{},L)}else h=await ac.GetDisplayNameByPath(a.path,null)
;return D("div",{className:"security-warning"},D("div",{className:"security-warning-pane"},D("div",{className:"title"},D("div",{
className:"icon"}),await S("IdentityIsCompromised_Notification_Title")),D("div",{className:"message"
},S("IdentityIsCompromised_Notification_Message",[h])),D("br",null),D("button",{className:"button cta-btn",
onclick:()=>M.OpenDataBreachMonitoring(g)},S("EmailBreach_ViewReport"))))}),an=D("div",{className:"instance-fields-list"
}),ao=D("div",{className:"instance-no-fields hidden"})))))),(0,A.C)((()=>{ax(T,U,!1),null==aw||aw.observe(ad)})),ad},
OnAfterShow:function(){N.onDataChanged.Add(aO)},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){
null==aw||aw.disconnect(),N.onDataChanged.Remove(aO)}};function ax(b,c,f){if(X=b.path===m.xG,X)(0,A.fI)((async()=>{
const a=await P.GetInitialIdentity(null),b=await(0,e.D5)(a,{},L);(0,j.EI)(b,"",af,af),(0,i.BC)(b,ai)})());else{0===(0,
m.Wi)(b.path).type?((0,j.EI)(b.path,b.path,af,af),(0,i.BC)((0,m.em)(b.path),ai)):(0,A.fI)((async()=>{
const a=await ac.GetDisplayNameByPath(b.path,null);(0,j.EI)(a,b.path,af,af),(0,i.BC)(a,ai)})())}let g=null
;null!==Z&&Y[Z]&&(g=Y[Z]),(0,A.fI)((async()=>{await async function(b){const c=(0,p.md)(b.m_options),e=await O.Load(),f=(0,
p.h0)(e,c.fullPerson),g=new Map;for(const a of b.m_groups){const b=a.m_name;for(const d of a.m_instances){const a=(0,
p.t_)(e,c.country,b),f=d.m_fields;if((0,p.mZ)(a,f)){const a=g.get(b)||[];a.push({m_group_name:b,m_instance:d,
m_instance_name:d.m_name,m_text_to_copy:""}),g.set(b,a)}}}const h=[],i=Y,j=Z;let k=null;for(const a of f){const b=g.get(a)
;if(b)for(const a of b)a.m_display_name=await aE(c.country,a.m_group_name,a.m_instance_name||"",a.m_instance,b.length<2),
h.push(a);else h.push({m_group_name:a,m_instance:null,m_text_to_copy:""})}if(null!==j){
const a=i[j],b=a.m_group_name,c=a.m_instance_name;for(let d=0;d<h.length;d++){const a=h[d]
;if(b===a.m_group_name&&c===a.m_instance_name&&null!==a.m_instance){k=d;break}}if(null===k){let a=null
;if(j<i.length-1&&(a=i[j+1],a.m_group_name!==b&&(a=null)),j>0&&(a=i[j-1],a.m_group_name!==b&&(a=null)),
a)for(let b=0;b<h.length;b++){const c=h[b]
;if(a.m_group_name===c.m_group_name&&a.m_instance_name===c.m_instance_name&&null!==c.m_instance){k=b;break}}}
if(null===k)for(let d=0;d<h.length;d++){const a=h[d];if(b===a.m_group_name&&null!==a.m_instance){k=d;break}}}else if(V){let a=!1
;for(let b=0;b<h.length;b++){const c=h[b];if(V===c.m_group_name&&(a||(a=!0,k=b),W===c.m_instance_name)){k=b;break}}}
if(null===k||k>=h.length){for(let a=0;a<h.length;a++)if(null!==h[a].m_instance){k=a;break}k=k||0}Y=h,Z=k;let l=!1
;if(h.length!==i.length)l=!0;else for(let a=0;a<h.length;a++)if(i[a].m_display_name!==h[a].m_display_name){l=!0;break}
const m=new Map
;if(l)await n(h,k);else for(const a of i)for(const b of h)if(a.m_group_name===b.m_group_name&&a.m_instance_name===b.m_instance_name){
b.m_text_to_copy=a.m_text_to_copy,b.m_group_instance_elem=a.m_group_instance_elem;break}return;async function n(b,c){
const d=new Map;for(const a of b){const b=a.m_group_name,c=(d.get(b)||0)+1;d.set(b,c)}(0,v.rK)(al);let e="",f=null
;const g=new Set;let h=null;b.sort(C);for(let a=0;a<b.length;a++){const i=b[a];if(!i.m_instance)continue;g.add(i.m_group_name),
i.m_group_name!==e&&(e=i.m_group_name,f=null);const j=a===c,k=q(i,a,j);j&&(h=k);const l=d.get(e)||0
;l>1?(null===f&&(al.appendChild(await o(i.m_group_name,l)),f=D("div",{className:"instance-group-section section-shown"}),
al.appendChild(f)),f.appendChild(k)):al.appendChild(k),i.m_group_instance_elem=k}for(let i=0;i<b.length;i++){
const c=b[i].m_group_name;if(g.has(c))continue;g.add(c);const d=await(0,r.hq)(c,L),e=D("div",{
className:"instance-group-item no-information "+B(c),title:await S("StartPage_Identity_AddGroupInstance_Tip",[d]),onclick:()=>{
a.readOnly?(0,A.fI)((async()=>{
const b=await S("StartPage_Editor_AccessRightsError",[5===a.type?await S("RoboformType_Identity"):await S("RoboformType_Contact")])
;return M.ShowErrorDialog(b)})()):(0,A.fI)(az(c))}},D("div",{className:"instance-group-image"}),D("div",{
className:"instance-group-title"},await S("StartPage_Identity_AddGroupInstance",[d])));al.appendChild(e)}
h&&h.offsetTop>al.offsetHeight&&h.scrollIntoView()}async function o(a,b){const c=!T.readOnly;let d;const e=await(0,
r.hq)(a,L),f=D("div",{className:"instance-group-item instance-group-section-title section-shown "+B(a),title:e,onclick:()=>{
const a=f.classList.contains("section-shown");f.classList.toggle("section-shown"),f.classList.contains("section-shown")?(0,
v.SE)(d):(0,v.l5)(d);const b=f.nextElementSibling;if(b&&b.classList.contains("instance-group-section")){
b.classList.toggle("section-shown")
;null!==b.querySelector(".instance-group-current")&&a?f.classList.add("instance-group-current"):f.classList.remove("instance-group-current")
}}},D("div",{className:"instance-group-dropdown-image"}),D("div",{className:"instance-group-image"}),D("div",{
className:"instance-group-title"},e),d=D("div",{className:"instance-group-count hidden"},(0,z.bf)(b)),c?D("div",{
className:"instance-group-menu",onclick:b=>{b.stopPropagation(),(0,A.fI)(az(a))}}):null);return m.set(a,f),f}function q(a,b,c){
const d=a.m_group_name,e=a.m_display_name||"",f=!T.readOnly&&a.m_instance;let g=null;const h=D("div",{
className:"instance-group-item "+B(d),title:e,onclick:()=>{(0,A.fI)(x(d,h,b))},oncontextmenu:b=>{b.preventDefault(),
f&&u(b,a,null)}},D("div",{className:"instance-group-image"}),D("div",{className:"instance-group-title"},e),g=f?D("div",{
className:"instance-group-menu",onmousedown:s,onclick:b=>{t(b,a,(0,z.TT)(g))}}):null)
;return c&&(h.classList.add("instance-group-current"),ab=h,y(d)),h}function s(a){a.stopPropagation()}function t(a,b,c){
a.stopPropagation(),null===as||as!==c?u(a,b,c):w()}function u(a,b,c){let e;if(aH(),w(),as=c,c){
const a=null==c?void 0:c.getBoundingClientRect();e=new DOMRect(a.right+10,a.top,0,0)}else e=new DOMRect(a.clientX,a.clientY,0,0)
;function f(){const a=(0,d.NI)(c);return a.onHide=h,a.onShow=g,a}function g(){as=c}function h(){as=null}aq=(0,
d.Lj)(e,(()=>async function(a){const b=a.m_group_name,c=await(0,r.hq)(b,L),d=!!a.m_instance;let e=0;Y.forEach((a=>{
a.m_group_name===b&&a.m_instance&&e++}))
;const f=!T.readOnly,g=!T.readOnly&&d,h=!T.readOnly&&d&&e>1,i=d&&a.m_text_to_copy,j=!T.readOnly&&d,k=[];f&&k.push({
title:await S("StartPage_Identity_AddNewInstanceButton",[c]),imageClass:"admin-center-view cmd-add-new-icon",
onCommand:async(a,c)=>{await az(b)}});g&&k.push({title:await S("StartPage_Identity_EditInstance",[c]),
imageClass:"admin-center-view cmd-edit-icon",onCommand:async(c,d)=>{aA(b,a.m_instance_name||"")}});h&&k.push({
title:await S("StartPage_Identity_RenameInstance",[c]),imageClass:"admin-center-view cmd-rename-icon",onCommand:async(b,c)=>{
aB(a)}});i&&k.push({title:await S("StartPage_Identity_CopyInstance",[c]),imageClass:"admin-center-view cmd-copy-icon",
onCommand:async(b,d)=>{await aC(a.m_text_to_copy,c)}});j&&k.push({title:await S("StartPage_Identity_DeleteGroupInstance",[c]),
imageClass:"admin-center-view cmd-delete-icon",onCommand:async(b,c)=>{await aD(a,e)}});return k}(b)),f(),(function(){
return ae.getBoundingClientRect()}),((a,b)=>(0,A.fI)(a(b,(0,A.f4)(null,null,null)))))}function w(){aq&&(aq.Hide(),aq=null)}
async function x(a,b,c){ab&&ab.classList.remove("instance-group-current"),b.classList.add("instance-group-current"),y(a),Z=c,
ab=b,await ay(null,!0)}function y(a){if(aa&&(aa.classList.remove("instance-group-section-title-current"),aa=null),m.has(a)){
const b=(0,z.TT)(m.get(a));b.classList.add("instance-group-section-title-current"),aa=b}}function B(a){switch(a){case"Person":
return"instance-group-person";case"Business":return"instance-group-business";case"Passport":return"instance-group-passport"
;case"Location":return"instance-group-address";case"Credit Card":return"instance-group-creditcard";case"Bank Account":
return"instance-group-bank";case"Car":return"instance-group-car"}return""}function C(a,b){
if("Credit Card"===a.m_group_name&&"Credit Card"===b.m_group_name){const c=a.m_display_name,d=b.m_display_name
;return c&&d?c.localeCompare(d):0}return 0}}(c),await ay(g,f),await async function(a){if(av(!1),
5!==a.type||a.readOnly||!R||!Q)return;try{const b=(0,A.f4)(null,null,null)
;if(!await R.GetSecurityWarningEnabledForDataItem(a.path,[0],b))return;const c=await Q.GetUpdateUserDataItemBreaches(a.path,b)
;c&&c.m_breaches.length>0&&av(!0)}catch(b){return}}(a),aN()})()),T=b,U=c}async function ay(a,b){if(null===Z||!Y[Z])return
;const c=Y[(0,z.TT)(Z)],d=(0,p.md)(U.m_options),e=await O.Load();K&&function(a){if(!ag)return
;const b=["group-logo-person","group-logo-business","group-logo-passport","group-logo-address","group-logo-creditcard","group-logo-bankaccount","group-logo-car"]
;ag.classList.remove(...b),ag.classList.add(G(a))}(c.m_group_name);const f=c.m_group_name,g=(0,
p.t_)(e,d.country,f),h=c.m_instance,i=h?h.m_fields:[];if(!(b||!a||a.m_group_name!==f||!h||!(0,
z.XM)(a.m_instance,h)||a.m_display_name!==c.m_display_name))return;const j=await(0,r.hq)(f,L),k=(0,p.mZ)(g,i);if(k){
const a=new Map;let b="";for(const c of i){const d=c.m_name||"";if((0,m.pi)(d))b=c.m_value||"";else{const b=c.m_value
;b&&a.set(d,b)}}const e=await async function(a,b,c,d,e,f){switch((0,v.rK)(an),a){case"Person":{const{el:a,copy_text:b}=await i()
;return d.appendChild(a),b}case"Location":{const{el:a,copy_text:b}=await j();return d.appendChild(a),b}case"Credit Card":{
const{el:a,copy_text:b}=await k();return d.appendChild(a),b}case"Bank Account":{const{el:a,copy_text:b}=await l()
;return d.appendChild(a),b}case"Business":{const{el:a,copy_text:b}=await m();return d.appendChild(a),b}case"Passport":{
const{el:a,copy_text:b}=await n();return d.appendChild(a),b}case"Car":{const{el:a,copy_text:b}=await o()
;return d.appendChild(a),b}}return"";async function g(a){const c=b.find((b=>b.name===a));if(!c)return S((0,r.pb)(a),null,a)
;const d=(null==c?void 0:c.caption)||(null==c?void 0:c.name)||a;let e=S((0,r.pb)(d),null,d);switch(c.lower_caption&&(e=S((0,
r.pb)(c.lower_caption),null,c.lower_caption)),c.name){case"First Name":e=S("StartPage_IdentityEditor_First_Name");break
;case"Middle Initial":e=S("StartPage_IdentityEditor_Middle_Initial");break;case"Last Name":
e=S("StartPage_IdentityEditor_Last_Name");break;case"Last Name 2":e=S("StartPage_IdentityEditor_Last_Name_2");break
;case"Roman First Name":e=S("StartPage_IdentityEditor_Roman_First_Name");break;case"Roman Last Name":
e=S("StartPage_IdentityEditor_Roman_Last_Name");break;case"Alphabet First Name":
e=S("StartPage_IdentityEditor_Alphabet_First_Name");break;case"Alphabet Last Name":
e=S("StartPage_IdentityEditor_Alphabet_Last_Name");break;case"Social Security Number":
c.caption||(e=S("StartPage_IdentityEditor_Social_Security_Number"));break;case"Driver License State":
e=S("StartPage_IdentityEditor_Driver_License_State");break;case"Driver License Number":
e=S("StartPage_IdentityEditor_Driver_License_Number");break;case"Address Line 1":e=S("StartPage_IdentityEditor_Address_Line_1")
;break;case"Address Line 2":e=S("StartPage_IdentityEditor_Address_Line_2");break;case"Alphabet Address Line 1":
e=S("StartPage_IdentityEditor_Alphabet_Address_Line_1");break;case"Alphabet Address Line 2":
e=S("StartPage_IdentityEditor_Alphabet_Address_Line_2");break;case"Alphabet City":e=S("StartPage_IdentityEditor_Alphabet_City")
;break;case"Card Validation Code":e=S("StartPage_IdentityEditor_Card_Validation_Code_2");break;case"Card User Name":
e=S("StartPage_IdentityEditor_Card_Holder_Name");break;case"Alphabet CardHolder Name":
e=S("StartPage_IdentityEditor_Alphabet_CardHolder_Name");break;case"Card PIN Number":
e=S("StartPage_IdentityEditor_Card_PIN_Number");break;case"Bank PIN Code":e=S("StartPage_IdentityEditor_Bank_PIN_Code");break
;case"Bank Routing Number":"United Kingdom"!==f&&(e=S("StartPage_IdentityEditor_Bank_Routing_Number"));break
;case"Bank Account Owner Last":e=S("StartPage_IdentityEditor_Bank_Account_Owner_Last");break
;case"Alphabet Bank Account Owner First":e=S("StartPage_IdentityEditor_Alphabet_Bank_Account_Owner_First");break
;case"Toll Free Phone":e=S("StartPage_IdentityEditor_Business_Toll_Free_Phone");break;case"Web Site":
e=S("StartPage_IdentityEditor_Business_Web_Site");break;case"Alphabet Company":
e=S("StartPage_IdentityEditor_Business_Alphabet_Company");break;case"Roman Company":
e=S("StartPage_IdentityEditor_Business_Roman_Company");break;case"Passport Issue Date":
e=S("StartPage_IdentityEditor_Passport_Issue_Date");break;case"Passport Expiration Date":
e=S("StartPage_IdentityEditor_Passport_Expiration_Date");break;case"Passport Issue Place":
e=S("StartPage_IdentityEditor_Passport_Issue_Place");break;case"Car Plate Number":
e=S("StartPage_IdentityEditor_Car_Plate_Number")}return e}async function h(a,b,c){return c.LocalizeString((0,r.ql)(a,b),null,b)}
async function i(){const a=[];return{el:D("div",{className:"rf-identity-person-fields"},(0,
z.dO)(f,(()=>[d(["Title",["First Name","Middle Initial","Last Name"]],a)]),[["Andorra","Argentina","Bolivia","Brazil","Chile","Colombia","Costa Rica","Mexico","Panama","Paraguay","Peru","Portugal","Spain","Venezuela"],()=>[d(["Title",["First Name","Last Name","Last Name 2"]],a)]],[["Afghanistan","Denmark","Egypt","Finland","France","Germany","Hungary","Iran","Iraq","Italy","Morocco","Norway","Pakistan","Philippines","Poland","Qatar","Russia","Saudi Arabia","Sweden","Switzerland"],()=>[d(["Title",["First Name","Middle Initial","Last Name"]],a)]],[["Australia","Canada","Ireland","New Zealand","United Kingdom","United States"],()=>[d(["Title",["First Name","Middle Initial","Last Name","Name Suffix"]],a)]],[["China","Hong Kong","Singapore","Taiwan"],()=>[d([["Last Name","First Name"],"Title"],a)]],["Netherlands",()=>[d(["Title",["First Name","Middle Initial","Name Insertion","Last Name"]],a)]],["Thailand",()=>[u("Name",[c.get("First Name"),c.get("Last Name")],a)]],[["Japan","Korea"],()=>[u("Name",[c.get("Last Name"),c.get("First Name")],a)]]),"Japan"===f?u("Alphabet Name",[c.get("Alphabet Last Name"),c.get("Alphabet First Name")],a):null,(0,
z.XL)(f,[["China","Hong Kong","Singapore","Taiwan","Japan"],()=>[u("Roman Name",[c.get("Roman Last Name"),c.get("Roman First Name")],a)]],["Thailand",()=>[u("Roman Name",[c.get("Roman First Name"),c.get("Roman Last Name")],a)]]),(0,
z.dO)(f,(()=>B("Birth Date",[c.get("Birth Day"),c.get("Birth Month"),c.get("Birth Year")],a)),[["Afghanistan","China","Egypt","Hong Kong","Hungary","Iran","Iraq","Japan","Korea","Morocco","Pakistan","Qatar","Saudi Arabia","Singapore","Taiwan"],()=>B("Birth Date",[c.get("Birth Year"),c.get("Birth Month"),c.get("Birth Day")],a)],[["Canada","Philippines","United States"],()=>B("Birth Date",[c.get("Birth Month"),c.get("Birth Day"),c.get("Birth Year")],a)]),p("Age",c.get("Age"),a),p("Position",c.get("Position"),a),h(a),p("Email",c.get("Email"),a),w("Sex","Sex",a),p("Birth Place",c.get("Birth Place"),a),p("Skype ID",c.get("Skype ID"),a),(0,
z.dO)(f,(()=>[p("Tax ID",c.get("Tax ID"),a),p("Personal ID",c.get("Personal ID"),a)]),[["Canada","Denmark","Finland","Korea","Netherlands","Norway","Sweden","United States"],()=>[i(a)]],[["Germany","Hong Kong","Singapore","Switzerland","Taiwan"],()=>[p("Tax ID",c.get("Tax ID"),a)]],[["Andorra","Portugal","Spain"],()=>[i(a),p("Fiscal Code",c.get("Fiscal Code"),a)]],["Thailand",()=>[p("Personal ID",c.get("Personal ID"),a)]],["Brazil",()=>[p("Person Cadastre",c.get("Person Cadastre"),a),p("General Register",c.get("General Register"),a),p("Dispatching Agency",c.get("Dispatching Agency"),a)]],["Poland",()=>[p("Personal ID",c.get("Personal ID"),a),p("Tax ID",c.get("Tax ID"),a)]],["China",()=>[p("ID Card Type",c.get("ID Card Type"),a),p("ID Card Number",c.get("ID Card Number"),a)]],["Russia",()=>[p("Tax ID",c.get("Tax ID"),a),i(a)]],["France",()=>[i(a),p("Tax ID",c.get("Tax ID"),a)]],["United Kingdom",()=>[i(a),p("National Health Service Number",c.get("National Health Service Number"),a)]],["Italy",()=>[p("ID Card Number",c.get("ID Card Number"),a),p("Fiscal Code",c.get("Fiscal Code"),a)]]),p("Income",c.get("Income"),a),"United States"===f?p("Driver License State",c.get("Driver License State"),a):null,p("Driver License Number",c.get("Driver License Number"),a),(0,
z.dO)(f,(()=>B("Driver License Expires",[c.get("Driver License Expires Day"),c.get("Driver License Expires Month"),c.get("Driver License Expires Year")],a)),[["Afghanistan","China","Egypt","Hong Kong","Hungary","Iran","Iraq","Japan","Korea","Morocco","Pakistan","Qatar","Saudi Arabia","Singapore","Taiwan"],()=>B("Driver License Expires",[c.get("Driver License Expires Year"),c.get("Driver License Expires Month"),c.get("Driver License Expires Day")],a)],[["Canada","Philippines","United States"],()=>B("Driver License Expires",[c.get("Driver License Expires Month"),c.get("Driver License Expires Day"),c.get("Driver License Expires Year")],a)]),e?E(e,a):null),
copy_text:(await Promise.all(a)).join("\n")};function d(a,b){const d=[],e=[],f=[];for(const h of a)if((0,z.QS)(h)){
for(const e of h){const a=c.get(e);a&&(d.push(a),f.push(D("div",{className:"rf-field-content-item"},a)))}if(!f.length)continue
;const a=D("div",{className:"rf-group-fields"},f),b=D("div",{className:"rf-row-field"},D("div",{className:"rf-field-caption"
},g("Name")),D("div",{className:"rf-field-value"},a));if(!b)continue;e.push(b)}else{const a=c.get(h);if(!a)continue;d.push(a)
;const b=D("div",{className:"rf-row-field"},D("div",{className:"rf-field-caption"},g(h)),D("div",{className:"rf-field-value"
},a));if(!b)continue;e.push(b)}return e.length>0?D("div",{className:"rf-row-fields"
},e,C(d.join(" "),g(f.length?"Name":"Title"),b)):null}function h(a){var d
;const e=["Phone","Home Phone","Work Phone","Cell Phone","Fax Phone"],g=[];let h=c.get("Country Code");if(!h){const a=(0,
q.LO)(f);void 0!==a&&(h=`${a}`)}
const i=(null===(d=b.find((a=>a.phone&&a.sectional)))||void 0===d?void 0:d.sectional)||"@@@-@@@-@@@@| x@@@@@";for(const b of e){
const d=c.get(b);if(!d)continue;if("Other"===f){const c=p(b,d,a);c&&g.push(c);continue}const e=[];let j=0
;for(const a of i.split("")){if(j===d.length)break
;"@"!==a?["-"," ","x","*",".","/","(",")"].includes(a)&&e.push(a):(" "!==d[j]&&e.push(d[j]),j++)}h&&e.unshift(`+${h} `)
;const k=(0,y.v$)(e.filter((a=>!["-","*",".","/","(",")"].includes(a))).join("")),l=p(b,e.join(""),a,k);l&&g.push(l)}return g}
function i(a){var d;let e=c.get("Social Security Number");if(!e)return null
;const f=null===(d=b.find((a=>"Social Security Number"===a.name)))||void 0===d?void 0:d.sectional;if(f){
const b=f.split(/[!-. ]/),c=[],d=[];for(const[a,f]of b.entries()){const b=e.slice(0,f.length);if(!b)break;e=e.slice(f.length)
;const g=D("div",{className:"rf-field-content-item"},b);0!==a&&(c.push(D("div",{className:"rf-field-content-item-caption"
},"-")),d.push("-")),d.push(b),c.push(g)}const h=s("Social Security Number");return D("div",{className:"rf-field"},D("div",{
className:"rf-field-caption"},g(h)),D("div",{className:"rf-group-fields"},c),C(d.join(" "),h,a))}
return p("Social Security Number",e,a)}}async function j(){const a=await S("RI_State"),b=await S("RI_State_Zip"),d=[];return{
el:D("div",{className:"rf-identity-location-fields"
},(0,z.dO)(f,(()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p(s("City"),c.get("City"),d),p(s("State Or Province"),c.get("State Or Province"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d)]),[["Andorra","Bulgaria","Croatia","Cyprus","Denmark","Estonia","Finland","Hungary","Iceland","Latvia","Liechtenstein","Lithuania","Luxembourg","Moldova","Monaco","Montenegro","San Marino","Serbia","Slovakia","Slovenia"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d),p(s("City"),c.get("City"),d)]],[["Afghanistan","Colombia","Gabon","Haiti","Iran","Iraq","Jamaica","Morocco","Panama","Paraguay","Peru","Qatar"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("City",c.get("City"),d)]],[["Namibia","Nigeria","Vietnam"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("City",c.get("City"),d),w(s("State Or Province"),"State Or Province",d)]],[["Austria","Argentina","Belgium","Czech Republic","Costa Rica","France","Germany","Greece","Italy","Netherlands","Norway","Poland","Portugal","Spain","Sweden","Switzerland"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d),p(s("City"),c.get("City"),d),w(s("State Or Province"),"State Or Province",d)]],[["Bosnia And Herzegovina","Bolivia","Egypt","Greenland","Israel","Macedonia","Malta","Romania","Venezuela"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d),p(s("City"),c.get("City"),d)]],[["Gibraltar","Hong Kong"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d)]],["United Kingdom",()=>[p(s("Apt Number"),c.get("Apt Number"),d),p(s("House Number"),c.get("House Number"),d),p(s("Street Name"),c.get("Street Name"),d),p("Address Line 3",c.get("Address Line 3"),d),p("City",c.get("City"),d),w(s("State Or Province"),"State Or Province",d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d)]],["Ireland",()=>[p(s("Apt Number"),c.get("Apt Number"),d),p(s("House Number"),c.get("House Number"),d),p(s("Street Name"),c.get("Street Name"),d),p("Address Line 3",c.get("Address Line 3"),d),p("City",c.get("City"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d),w(s("State Or Province"),"State Or Province",d)]],["Mexico",()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("Municipality",c.get("Municipality"),d),p("Colony",c.get("Colony"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d),p(s("City"),c.get("City"),d),w(s("State Or Province"),"State Or Province",d)]],["United States",()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("City",c.get("City"),d),w(a,"State Or Province",d),p(b,c.get("Zip Or PostCode"),d),p("County",c.get("County"),d)]],["Brazil",()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("District",c.get("District"),d),p(s("Zip Or PostCode"),c.get("Zip Or PostCode"),d),p("City",c.get("City"),d),w(s("State Or Province"),"State Or Province",d)]],["Singapore",()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("Zip Or PostCode",c.get("Zip Or PostCode"),d)]],["Japan",()=>[p("Zip Or PostCode",c.get("Zip Or PostCode"),d),w(s("State Or Province"),"State Or Province",d),p("City",c.get("City"),d),p(s("Alphabet City"),c.get("Alphabet City"),d),p("Address Line 1",c.get("Address Line 1"),d),p(s("Alphabet Address Line 1"),c.get("Alphabet Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p(s("Alphabet Address Line 2"),c.get("Alphabet Address Line 2"),d),p("Station",c.get("Station"),d)]],["Korea",()=>[p("Zip Or PostCode",c.get("Zip Or PostCode"),d),p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d)]],[["China","Turkey"],()=>[p("Address Line 1",c.get("Address Line 1"),d),p("Address Line 2",c.get("Address Line 2"),d),p("City",c.get("City"),d),w("Zip Or PostCode","Zip Or PostCode",d),p(s("State Or Province"),c.get("State Or Province"),d)]]),h(f,d),e?E(e,d):null),
copy_text:(await Promise.all(d)).join("\n")};function h(a,b){const c=g("Country"),d=L.LocalizeString((0,
r.eR)(a),null,a),e=a.split(" ").map((a=>a.toLowerCase())).join("-");return D("div",{className:"rf-field rf-field-country"
},D("div",{className:"rf-field-caption"},c),D("div",{className:"rf-field-content"},"Other"===a?null:D("div",{
className:"rf-country-image",style:{backgroundImage:(0,v.ry)(`flag-${e}.svg`)}}),D("div",{
className:"rf-field-content-item-value"},d)),C(a,c,b))}}async function k(){const a=[];return{el:D("div",{
className:"rf-identity-card-fields"
},[p("Card Type",c.get("Card Type"),a),b(a),p("Card Validation Code",c.get("Card Validation Code"),a),u("Card Expires",[c.get("Card Expires Month"),["/"],c.get("Card Expires Year")],a,S("StartPage_IdentityEditor_Card_Exp_Date")),u("Card ValidFrom",[c.get("Card ValidFrom Month"),["/"],c.get("Card ValidFrom Year")],a),p("Card User Name",c.get("Card User Name"),a),"Japan"===f?p("Alphabet Name",c.get("Alphabet CardHolder Name"),a):null,p("Card Issuing Bank",c.get("Card Issuing Bank"),a),p("Card PIN Number",c.get("Card PIN Number"),a),e?E(e,a):null]),
copy_text:(await Promise.all(a)).join("\n")};function b(a){const b=c.get("Card Number")
;return b?p("Card Number",b.replace(/(\d{4})/g,"$1 "),a,b):null}}async function l(){const a=[];return{el:D("div",{
className:"rf-identity-bank-fields"
},(0,z.dO)(f,(()=>[p("Bank Name",c.get("Bank Name"),a),p("Bank Account Number",c.get("Bank Account Number"),a),w("Bank Account Type","Bank Account Type",a),p("Bank Routing Number",c.get("Bank Routing Number"),a),p("Bank Address",c.get("Bank Address"),a),p("Bank Swift Code",c.get("Bank Swift Code"),a),p("Bank Account Owner",c.get("Bank Account Owner"),a),p("Bank PIN Code",c.get("Bank PIN Code"),a)]),[["Andorra","Austria","Belgium","Bosnia And Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Gibraltar","Greece","Greenland","Hungary","Iceland","Ireland","Israel","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","United Kingdom"],()=>[p("Bank Name",c.get("Bank Name"),a),p("Bank Account Number",c.get("Bank Account Number"),a),p("Int Bank Account Number",c.get("Int Bank Account Number"),a),w("Bank Account Type","Bank Account Type",a),p("Bank Routing Number",c.get("Bank Routing Number"),a),p("Bank Address",c.get("Bank Address"),a),p("Bank Swift Code",c.get("Bank Swift Code"),a),p("Bank Account Owner",c.get("Bank Account Owner"),a),p("Bank PIN Code",c.get("Bank PIN Code"),a)]],["Russia",()=>[p("Bank Name",c.get("Bank Name"),a),p("Bank Account Number",c.get("Bank Account Number"),a),p("Bank Corr Account",c.get("Bank Corr Account"),a),w("Bank Account Type","Bank Account Type",a),p("Bank Address",c.get("Bank Address"),a),p("Bank Swift Code",c.get("Bank Swift Code"),a),p("Bank Account Owner",c.get("Bank Account Owner"),a),p("Bank PIN Code",c.get("Bank PIN Code"),a)]],["Italy",()=>[p("Bank Name",c.get("Bank Name"),a),p("Bank Account Number",c.get("Bank Account Number"),a),p("Int Bank Account Number",c.get("Int Bank Account Number"),a),w("Bank Account Type","Bank Account Type",a),u(s("Bank Routing Number"),[c.get("CIN"),c.get("ABI"),c.get("CAB")],a),p("Bank Address",c.get("Bank Address"),a),p("Bank Swift Code",c.get("Bank Swift Code"),a),p("Bank Account Owner",c.get("Bank Account Owner"),a),p("Bank PIN Code",c.get("Bank PIN Code"),a)]],["Japan",()=>[p("Bank Name",c.get("Bank Name"),a),p("Bank Account Number",c.get("Bank Account Number"),a),w("Bank Account Type","Bank Account Type",a),p("Bank Address",c.get("Bank Address"),a),p("Bank Swift Code",c.get("Bank Swift Code"),a),u("Bank Account Owner",[c.get("Bank Account Owner Last"),c.get("Bank Account Owner First")],a),u(s("Alphabet Bank Account Owner Last"),[c.get("Alphabet Bank Account Owner Last"),c.get("Alphabet Bank Account Owner First")],a),p("Bank PIN Code",c.get("Bank PIN Code"),a)]]),e?E(e,a):null),
copy_text:(await Promise.all(a)).join("\n")}}async function m(){const a=[];return{el:D("div",{
className:"rf-identity-buisness-fields"
},(0,z.dO)(f,(()=>[p("Company",c.get("Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Type Of Business",c.get("Type Of Business"),a),p("Employer Identitification Number",c.get("Employer Identitification Number"),a)]),[["Afghanistan","Andorra","Argentina","Armenia","Belarus","Bolivia","Bosnia And Herzegovina","Bulgaria","Chile","Colombia","Costa Rica","Egypt","Gabon","Gibraltar","Haiti","Iceland","India","Indonesia","Iran","Iraq","Israel","Jamaica","Kazakhstan","Liechtenstein","Macedonia","Malaysia","Mexico","Moldova","Monaco","Montenegro","Morocco","Namibia","Nigeria","Norway","Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Qatar","Romania","San Marino","Saudi Arabia","Serbia","South Africa","Switzerland","Turkey","Ukraine","Venezuela","Vietnam"],()=>[p("Company",c.get("Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a)]],[["Austria","Belgium","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Greenland","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Portugal","Slovakia","Slovenia","Spain","Sweden"],()=>[p("Company",c.get("Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p("Company Registration Place",c.get("Company Registration Place"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a),p(s("Company VAT Number"),c.get("Company VAT Number"),a)]],[["China","Hong Kong","Singapore","Taiwan"],()=>[p("Company",c.get("Company"),a),p("Roman Company",c.get("Roman Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a)]],["Australia",()=>[p("Company",c.get("Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Type Of Business",c.get("Type Of Business"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a),p(s("Company Registration Number"),c.get("Company Registration Number"),a)]],["Brazil",()=>[p("Company",c.get("Company"),a),p("Brand Name",c.get("Brand Name"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p("Company Registration Place",c.get("Company Registration Place"),a)]],["Russia",()=>[p("Company",c.get("Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p("Code OKPO",c.get("Code OKPO"),a),p("Code OKVED",c.get("Code OKVED"),a),p("Company Registration Place",c.get("Company Registration Place"),a)]],["Thailand",()=>[p("Company",c.get("Company"),a),p(s("Roman Company"),c.get("Roman Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Type Of Business",c.get("Type Of Business"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a)]],["United Kingdom",()=>[p("Company Department",c.get("Company Department"),a),p("Company",c.get("Company"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Type Of Business",c.get("Type Of Business"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p("Company Registration Place",c.get("Company Registration Place"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a),p("Company VAT Number",c.get("Company VAT Number"),a)]],["Japan",()=>[p("Company",c.get("Company"),a),p(s("Alphabet Company"),c.get("Alphabet Company"),a),p("Company Department",c.get("Company Department"),a),p("Toll Free Phone",c.get("Toll Free Phone"),a),p("Web Site",c.get("Web Site"),a),p("Type Of Business",c.get("Type Of Business"),a),p("Company Registration Number",c.get("Company Registration Number"),a),p(s("Employer Identitification Number"),c.get("Employer Identitification Number"),a)]]),e?E(e,a):null),
copy_text:(await Promise.all(a)).join("\n")}}async function n(){const a=[];return{el:D("div",{
className:"rf-identity-passport-fields"
},(0,z.dO)(f,(()=>[w("Passport Type","Passport Type",a),p("Passport Number",c.get("Passport Number"),a),p("Passport Issue Place",c.get("Passport Issue Place"),a)]),[["United States","Australia","Canada"],()=>[p("Passport Number",c.get("Passport Number"),a)]],["Russia",()=>[w("Passport Type","Passport Type",a),u(s("Passport Series"),[c.get("Passport Series"),c.get("Passport Number Only")],a),p("Passport Issue Place",c.get("Passport Issue Place"),a)]]),[p("Passport Issue Date",c.get("Passport Issue Date"),a),p("Passport Expiration Date",c.get("Passport Expiration Date"),a),e?E(e,a):null]),
copy_text:(await Promise.all(a)).join("\n")}}async function o(){const a=[];return{el:D("div",{className:"rf-identity-car-fields"
},"United States"===f?u(s("Car Plate Number"),[c.get("Car Plate Number"),c.get("Car Plate State")],a):p("Car Plate Number",c.get("Car Plate Number"),a),[p("Car Make",c.get("Car Make"),a),p("Car Model",c.get("Car Model"),a),p("Car Year",c.get("Car Year"),a),p("Vehicle Identification Number",c.get("Vehicle Identification Number"),a)],e?E(e,a):null),
copy_text:(await Promise.all(a)).join("\n")}}function p(a,b,c,d){if(!b)return null;const e=g(a);return D("div",{
className:"rf-field"},D("div",{className:"rf-field-caption"},e),D("div",{className:"rf-field-value"},b),C(d||b,e,c))}
function s(a){var c;return(null===(c=b.find((b=>b.name===a)))||void 0===c?void 0:c.caption)||a}function u(a,b,c,d){
if(0===b.length)return null;const e=[];let f=null;const h=b.reduce(((a,b)=>{if(!b)return a;if((0,z.QS)(b))return f=b[0],a;if(f){
const c=[...a,D("div",{className:"rf-field-content-item-caption"},f),D("div",{className:"rf-field-content-item"},b)]
;return e.push(f,b),f=null,c}return e.push(b),[...a,D("div",{className:"rf-field-content-item"},(async()=>b))]}),[])
;if(0===h.length)return null;const i=D("div",{className:"rf-group-fields"
},h),j="field-id-"+a.toLowerCase().split(" ").join("-"),k=d||g(a);return D("div",{className:`rf-field ${j}`},D("div",{
className:"rf-field-caption"},k),i,C(e.join(" "),k,c))}function w(a,b,d){const e=c.get(b);if(!e)return null
;return p(a,h(b,e,L),d)}function x(){
return["Armenia","Austria","Belarus","Bosnia And Herzegovina","Bulgaria","Croatia","Czech Republic","Estonia","Finland","Germany","Iceland","Kazakhstan","Latvia","Liechtenstein","Luxembourg","Macedonia","Montenegro","Norway","Romania","Russia","Serbia","Slovakia","Slovenia","Sweden","Switzerland","Turkey","Ukraine"].includes(f)?".":["Chile","Denmark","Greenland","India","Netherlands","Poland","Portugal"].includes(f)?"-":"/"
}function B(a,b,c){const d=[],e=x(),f=[];for(const g of b)g&&(0===f.length?(f.push(D("div",{className:"rf-date-field"},D("div",{
className:"rf-date-field-value"},g))),d.push(g)):(f.push(D("div",{className:"rf-date-field"},D("div",{
className:"rf-field-content-item-caption"},e),D("div",{className:"rf-date-field-value"},g))),d.push(e,g)))
;if(0===f.length)return null;const h="field-id-"+a.split(" ").join("-"),i=g(a);return D("div",{
className:`rf-field rf-date-fields ${h}`},D("div",{className:"rf-field-caption"},i),D("div",{className:"rf-fields-container"
},f),C(d.join(" "),i,c))}async function C(a,b,c){return c.push(F(b,a)),D("div",{className:"inline-onhover-buttons-pane",
title:await S("StartPage_Editor_CopyTip")},D("div",{className:"onhover-button onhover-button-copy",onclick:()=>{(0,
A.fI)((async()=>{
await M.CopyTextToClipboardWithAutoClear(await a,null),M.ShowNotification(await S("StartPage_Editor_CopiedToClipboard",[await b]),null,null)
})())}}))}function E(a,b){let c;const d=D("div",{className:"rf-field rf-note"},D("div",{className:"rf-field-caption"
},S("PassCards_Note")),c=D("div",{className:"rf-field-value"}),C(a,S("PassCards_Note"),b));return c.appendChild((0,t.cC)(a)),d}
async function F(a,b){return`${await a} : ${await b}`}}(f,g,a,an,b,d.country);c.m_text_to_copy=e,(0,v.l5)(an),(0,v.SE)(ao)
}else(0,v.rK)(ao),ao.appendChild(D("div",{className:"text"},await S("StartPage_Identity_NoFieldsTitle",[j]))),
T.readOnly||ao.appendChild(D("div",{className:"button default-button",onclick:()=>(0,A.fI)(az(f))
},await S("StartPage_Identity_AddNewInstanceButton",[j]))),(0,v.l5)(ao),(0,v.SE)(an);await async function(a,b){
if(!b)return void(0,v.rK)(am);const c=a.m_group_name,d=await(0,r.hq)(c,L),e=!!a.m_instance;let f=0;Y.forEach((a=>{
a.m_group_name===c&&a.m_instance&&f++}))
;const g=!T.readOnly,h=!T.readOnly&&e,i=!T.readOnly&&e&&f>1,j=e&&a.m_text_to_copy,k=!T.readOnly&&e,l=D("div",{
className:"editor-cmdbar cmdbar-instance"},g&&D("div",{className:"editor-cmd editor-cmd-add-new",
title:await S("StartPage_Identity_AddNewInstanceButton",[d]),onclick:()=>(0,A.fI)(az(c))}),h&&D("div",{
className:"editor-cmd editor-cmd-edit",title:await S("StartPage_Identity_EditInstance",[d]),
onclick:()=>aA(c,a.m_instance_name||"")}),i&&D("div",{className:"editor-cmd editor-cmd-rename",
title:await S("StartPage_Identity_RenameInstance",[d]),onclick:()=>aB(a)}),j&&D("div",{className:"editor-cmd editor-cmd-copy",
title:await S("StartPage_Identity_CopyInstance",[d]),onclick:()=>(0,A.fI)(aC(a.m_text_to_copy,d))}),k&&D("div",{
className:"editor-cmd editor-cmd-delete",title:await S("StartPage_Identity_DeleteGroupInstance",[d]),onclick:()=>(0,
A.fI)(aD(a,f))}));am.replaceWith(l),am=l}(c,k)}async function az(a){const b=(0,p.md)(U.m_options),c=await O.Load(),d=(0,
p.t_)(c,b.country,a);let e="";a:for(const f of U.m_groups)if(a===f.m_name)for(const a of f.m_instances){if(!(0,
p.mZ)(d,a.m_fields)){e=a.m_name;break a}}(0,v.D$)((async()=>{const b=(0,A.f4)(null,null,null)
;await M.ShowDataEditModeInDetailsPane(T,U,a,e,b)}),(()=>()=>{}),0,null)}function aA(a,b){(0,v.D$)((async()=>{const c=(0,
A.f4)(null,null,null);await M.ShowDataEditModeInDetailsPane(T,U,a,b,c)}),(()=>()=>{}),0,null)}function aB(a){
if(!a||!a.m_instance||!a.m_group_instance_elem)return;const b=(0,z.TT)(a.m_group_instance_elem),c=a.m_display_name&&(0,
m.vF)(a.m_display_name)?a.m_display_name:"",d=(0,t.ap)({className:"editor-field",inputType:"text",title:"",value:c,
onkeypress:a=>{a.key===C.U.Enter?i(d.GetValue(),!0):a.key===C.U.Escape&&g()}}),f=(0,A.tG)()
;return b.classList.add("instance-group-title-rename-shown"),b.appendChild(d),d.Focus(),
void document.addEventListener("mousedown",h);function g(){d.remove(),b.classList.remove("instance-group-title-rename-shown"),
document.removeEventListener("mousedown",h)}function h(){i(d.GetValue(),!1)}function i(b,c){
f.IsExecuting()||f.Start((()=>async function(b,c){const f=a.m_group_name,h=await(0,
r.hq)(f,L),i=a.m_display_name||"",j=a.m_instance_name||"",k=b.trim();if(""===k||k===j)return g();if(!(0,
m.vF)(k))return void(c?(await M.ShowErrorDialog(await S("Identities_InstanceNameInvalidCharacter")),d.Focus()):g())
;const l=[...U.m_groups],n=Object.assign(Object.assign({},U),{m_groups:l});let o=!1
;for(const[a,d]of l.entries())if(d.m_name===f){const b=[...d.m_instances];for(const[a,c]of b.entries())c.m_name===j&&(o=!0,
b[a]=Object.assign(Object.assign({},c),{m_name:k}));l[a]=Object.assign(Object.assign({},d),{m_instances:b});break}
if(!o)return void g();try{await N.PutDataItem(T.path,n,null);const a=(T.type,await N.GetDataItem(T.path,4,null,null))
;ax(T,a,!1),M.ShowNotification(await S("StartPage_Identity_RenameInstanceNotification",[h,i,k]),null,null)}catch(p){
c&&await M.ShowErrorDialog(await S("StartPage_Identity_RenameInstanceError",[h,(0,e.Qo)(p)]))}}(b,c)))}}async function aC(a,b){
await M.CopyTextToClipboardWithAutoClear(a,null),M.ShowNotification(await S("StartPage_Editor_CopiedToClipboard",[b]),null,null)
}async function aD(a,b){const c=a.m_display_name||a.m_instance_name||"",d=a.m_group_name,f=await(0,
r.hq)(d,L),g=await S("Cmd_Delete_Flat"),h=b>1?await S("StartPage_Identity_NotSingleInstance_DeleteConfirm",[f,c]):await S("StartPage_Identity_SingleInstance_DeleteConfirm",[f])
;if(await M.ShowConfirmationDialog(g,h,await S("Options_No"),await S("Options_Yes")))try{const[b]=(0,
e.ye)(U,d,a.m_instance_name||"");await N.PutDataItem(T.path,b,null),await o.SetUsageInfo(T.path,0,!0,null);const c=(T.type,
await N.GetDataItem(T.path,4,null,null));ax(T,c,!1),M.ShowNotification(await S("StartPage_Editor_ItemDeleted",[f]),null,null)
}catch(i){await M.ShowErrorDialog(await S("StartPage_Identity_DeleteError",[f,(0,e.Qo)(i)]))}}async function aE(a,b,c,d,e){
if(e)return(0,r.hq)(b,L);const f=(0,m.oT)(c);if(!1===f&&""!==c)return c;const g=(0,m.Pi)(d&&d.m_fields||[]);let h=await(0,
r.s)(a,b,g,L);if(h)return h;h=c,"number"==typeof f&&(h="#"+(0,z.bf)(f));return`${await(0,r.hq)(b,L)} - ${h}`}function aF(a){
ar&&a.stopPropagation()}function aG(){ar?aH():function(){ar=!0
;const a=null==ae?void 0:ae.getBoundingClientRect(),b=new DOMRect(a.left+20,a.bottom-10,0,0);async function c(){
return await M.GetIdentityCommands(T,aJ,aI)}function e(){const a=(0,d.NI)(ae);return a.onHide=g,a.onShow=f,a}function f(){ar=!0}
function g(){ar=!1}ap=(0,d.Lj)(b,(()=>c()),e(),(function(){return ae.getBoundingClientRect()}),((a,b)=>(0,A.fI)(a(b,(0,
A.f4)(null,null,null)))))}()}function aH(){ap&&(ap.Hide(),ap=null)}async function aI(){const b=(0,h.Sw)((0,z.TT)(ad),(0,h.p)((0,
h.dK)("dialog-modal change-country-dialog",S("Identities_ChangeCountry_Title"),null),(()=>(0,f._3)((async a=>{const b=(0,
p.md)(U.m_options),c=await O.Load(),d=(0,p.av)(c),e=[];for(const h in d){const a={name:h,localized_name:await S((0,
r.eR)(h),null,h),code:d[h].m_country_code||""};e.push(a)}const f=D("select",{className:"rf-input",onchange:()=>{const a=f.value
;b.country===a?(g.disabled=!0,g.classList.add("disabled")):(g.disabled=!1,g.classList.remove("disabled"))}
},e.map((a=>D("option",{value:a.name,text:a.localized_name,selected:b.country===a.name})))),g=D("button",{
className:"button default-button disabled",disabled:!0,onclick:()=>{(0,A.fI)((async()=>{a(f.value)})())}
},S("StartPage_DialogButton_Save"));return D("div",{className:"rf-body"},f,D("div",{className:"rf-buttons-bar"},g))
}))))),c=await b.Execute(null),d=Object.assign(Object.assign({},U),{m_options:Object.assign(Object.assign({},U.m_options),{
"World Regions":c})});X?await(0,n.Oe)(null,d,N,null):(await N.PutDataItem(a.path,d,null),
await o.SetUsageInfo(T.path,0,!0,null)),(0,A.C)((()=>{ax(T,d,!0)}))}async function aJ(){ad.classList.add("inplace-rename"),(0,
v.SE)(ah);let a=(0,m.em)(T.path);if(X){const b=await P.GetInitialIdentity(null);a=await(0,e.D5)(b,{},L),a=(0,
m.Au)(a,"_",200)||await S("IdentityType_MyIdentity")}aj.SetValue(a),aj.Show(),at=!0}function aK(){
ad.classList.remove("inplace-rename"),aj.Hide(),(0,v.l5)(ah),at=!1}function aL(){
const a=aj.GetValue().trim().toLowerCase(),b=(0,w.HE)((0,w._p)(T.path));(0,z.RA)(a,b)?aK():(0,A.fI)((async()=>{
const a=await S("AdminCenter_IdentityRenameConfirmation_Text")
;await M.ShowConfirmationDialog(await S("AdminCenter_SaveChanges_Text"),a,await S("AdminCenter_ConfirmationDialog_DontSave"),await S("AdminCenter_ConfirmationDialog_Save"))?aM():aK()
})())}function aM(){(0,v.PQ)((async()=>{const a=aj.GetValue().trim(),b=(0,m.KF)(a,null)
;if(!b)return await M.ShowErrorDialog(await S("NameInvalidCharacter_Error2")),void aj.Focus()
;if(b.length>251)return await M.ShowErrorDialog(await S("WrongNameLenght_Error",[(0,z.bf)(251)])),void aj.Focus()
;const c=T.path,d=(0,m.kd)(T.type),f=X?`/${a}${(0,m.kd)(5)}`:(0,w.fA)(c)+"/"+b+d;if((0,z.RA)(c,f))at&&aK();else{let c=null;try{
c=await N.GetInfo(f,1,null)}catch(g){if(!(0,B.r5)(g,B.Y$))return void(0,B.au)(g)}if(c){
const b=await S("AlreadyExists_Error2",["Item",a]);return await M.ShowErrorDialog(await S("Cmd_Rename_Error",["Item",a,b])),
void aj.Focus()}{let a=(0,m.em)(T.path),c=(0,z.HP)(U);if(X){const b=await P.GetInitialIdentity(null);a=await(0,e.D5)(b,{},L),
c=(0,e.eQ)(b,{}),await(0,n.Oe)(f,c,N,null),M.OnRename(f,5),X=!1}else await N.MoveFile(T.path,f,null);at&&aK()
;ax(await N.GetInfo(f,63,null),c,!1);const d=await S("Notification_Item_Renamed_Text",[a,b]);M.ShowNotification(d,null,null)}}
}),(()=>(aj.Enable(!1),()=>{aj.Enable(!0)})),0,null,(a=>{(0,A.fI)((async()=>{(0,B.r5)(a,B.kd)||await M.ShowErrorDialog((0,
e.Qo)(a))})())}))}function aN(){const a=Math.min(420,ad.offsetWidth-630+200);ak.style.width=K?"244px":(0,s.Md)(a)}
function aO(a){for(const b of a)switch(b.event){case 8:if(8===b.type&&b.path&&(0,m.QC)(b.path,T.path)&&b.to&&b.to.path){
const a=T.path.replace(b.path,b.to.path);T=Object.assign(Object.assign({},T),{path:a})}
if(b.type===T.type&&b.path===T.path&&b.to&&b.to.path){T=Object.assign(Object.assign({},T),{path:b.to.path});const a=(0,
m.em)(b.to.path);ai.textContent=a,ai.title=a,aj.SetValue(a)}break;case 12:(0,A.fI)((async()=>{
const a=await N.GetInfo(T.path,63,null);a.favorite!==T.favorite&&(T=Object.assign(Object.assign({},T),{favorite:a.favorite}))
})())}}}function F(a,b,c,d,f,g,h,l,q,C,E,F){const H=g,I=l,J=q,K=E.LocalizeString,L=(0,e.au)(H,E);let M=a,N=b;const O=c
;let P=d,Q=M.path===m.xG,R=null,S=null;const T=[];let U=null,V=!1;const W=f,X=""===P;let Y=!1,Z=!1;let aa,ab,ac,ad,ae,af,ag
;return{Create:async function(a,b){const d=await(0,r.hq)(O,E);return aa=D("div",{
className:"editor-view editor-inline editor-identity edit-mode"},D("div",{className:"editor-content"},C?D("div",{
className:`content-header ${G(c)}`},D("div",{className:"identity-group-logo"
},K(W||X?"StartPage_Editor_AddItemHeader":"StartPage_Editor_EditItemHeader",[d]))):D("div",{className:"content-header"
},ab=D("div",{className:"header-image"}),ac=D("div",{className:"header-title"},ad=D("span",{className:"title-name",
onclick:()=>(0,A.fI)(async function(){aa.classList.add("inplace-rename"),(0,v.SE)(ac);let a=(0,m.em)(M.path);if(Q){
const b=await J.GetInitialIdentity(null);a=await(0,e.D5)(b,{},E),a=(0,m.Au)(a,"_",200)||await K("IdentityType_MyIdentity")}
ae.SetValue(a),ae.Show(),Y=!0}())})),ae=(0,t.nM)("hidden",ao,am,an),D("div",{className:"editor-cmdbar cmdbar-main"},D("div",{
className:"editor-cmd editor-cmd-close",title:await K("Cmd_Close_Flat"),onclick:()=>(0,A.fI)(async function(){if(W){
const a=await K("StartPage_Editor_CancelCreatingConfirm",[5===M.type?await K("RoboformType_Identity"):await K("RoboformType_Contact")])
;await F.ShowConfirmationDialog(await K("CL_Confirmation"),a,await K("Options_No"),await K("Options_Yes"))&&b((0,B.JS)())}else{
if(ar()){
const a=X?await K("StartPage_SaveEntry_Confirmation"):await K("StartPage_Editor_CloseChangesConfirm",[await K("RoboformType_Identity")])
;await F.ShowConfirmationDialog(await K("AdminCenter_SaveChanges_Text"),a,await K("AdminCenter_ConfirmationDialog_DontSave"),await K("AdminCenter_ConfirmationDialog_Save"))&&ak(!1)
}b((0,B.JS)())}}())}))),C?D("div",{className:"actions-pane tab-view"},D("div",{className:"buttons-bar"},D("div",{
className:"button",onclick:()=>(0,A.fI)(f())},await K("Cmd_Cancel_Flat")),ag=D("div",{
className:"button default-button disabled",onclick:()=>ak(!0)},await K("Cmd_ApplyChanges_Flat")))):D("div",{
className:"actions-pane"},D("div",{className:"group-icon group-icon-"+O.replace(" ","").toLowerCase()}),D("div",{
className:"group-title"
},W||X?await K("StartPage_Editor_AddItemHeader",[d]):await K("StartPage_Editor_EditItemHeader",[d])),D("div",{
className:"buttons-bar"},D("div",{className:"button",onclick:()=>(0,A.fI)(f())},await K("Cmd_Cancel_Flat")),ag=D("div",{
className:"button default-button disabled",onclick:()=>ak(!0)},await K("Cmd_ApplyChanges_Flat")))),af=D("div",{
className:"fields-list"}))),(0,A.C)((()=>(0,A.fI)(ah(M,N)))),aa;async function f(){if(W){
const a=await K("StartPage_Editor_CancelCreatingConfirm",[5===M.type?await K("RoboformType_Identity"):await K("RoboformType_Contact")])
;await F.ShowConfirmationDialog(await K("CL_Confirmation"),a,await K("Options_No"),await K("Options_Yes"))&&b((0,B.JS)())
}else if(ar()){
const a=X?await K("StartPage_SaveEntry_Confirmation"):await K("StartPage_Editor_CloseChangesConfirm",[await K("RoboformType_Identity")])
;await F.ShowConfirmationDialog(await K("AdminCenter_SaveChanges_Text"),a,await K("AdminCenter_ConfirmationDialog_DontSave"),await K("AdminCenter_ConfirmationDialog_Save"))?ak(!0):(0,
v.D$)((async()=>{await al()}),(()=>()=>{}),0,null)}else(0,v.D$)((async()=>{await al()}),(()=>()=>{}),0,null)}},
OnAfterShow:function(){f||H.onDataChanged.Add(au);aa.addEventListener("keydown",aj),window.addEventListener("beforeunload",ai)},
OnBeforeHide:function(){},Focus:function(){},Dispose:function(){f||H.onDataChanged.Remove(au)
;aa.removeEventListener("keydown",aj),window.removeEventListener("beforeunload",ai)}};async function ah(a,b){if(!V){
if(Q=a.path===m.xG,Q)(0,A.fI)((async()=>{const a=await J.GetInitialIdentity(null),b=await(0,e.D5)(a,{},E);(0,j.EI)(b,"",ab,ab),
(0,i.BC)(b,ad)})());else{if(0===(0,m.Wi)(a.path).type)(0,j.EI)(a.path,a.path,ab,ab),(0,i.BC)((0,m.em)(a.path),ad);else{
const b=await L.GetDisplayNameByPath(a.path,null);(0,j.EI)(b,a.path,ab,ab),(0,i.BC)(b,ad)}}if(X&&""===P){
const a=Object.assign({},b),c=(0,p.md)(N.m_options),d=await I.Load(),e=(0,p.t_)(d,c.country,O),f=(0,p.GZ)(e);let g=-1,h=null
;const i=[];for(const[b,m]of a.m_groups.entries())if(O===m.m_name){h=m,g=b;for(const a of m.m_instances)i.push(a.m_name);break}
let j="",k=null,l=1;for(;!k;){if(j=(0,m.lV)(l),!i.includes(j)){k={m_name:j,m_fields:f||[]};break}l++}if(h&&g>=0){
const b=[...a.m_groups];b[g]=Object.assign(Object.assign({},h),{m_instances:[...h.m_instances,k]}),a.m_groups=b
}else a.m_groups=[...a.m_groups,{m_name:O,m_instances:[k]}];P=j,N=a,b=a}S=function(a){
for(const b of a.m_groups)if(O===b.m_name)for(const a of b.m_instances)if(a&&a.m_name===P)return a;return null}(b),
S&&(await async function(){if(null===S)return;const a=await I.Load(),b=(0,p.md)(N.m_options).country,c=(0,p.t_)(a,b,O),d={}
;S.m_fields.forEach((a=>{d[(0,z.TT)(a.m_name)]=(0,z.TT)(a.m_value)})),c.forEach((a=>{Q(a.name)||T.push({field:a,value:d[a.name],
GetEnteredValue:()=>null})}));let e=D("div",{className:"fields-list"});switch(O){case"Person":e=f(b);break;case"Location":e=g(b)
;break;case"Credit Card":e=h();break;case"Bank Account":e=i(b);break;case"Business":e=j(b);break;case"Passport":e=l(b);break
;case"Car":e=n(b)}e.appendChild(await P()),C&&e.classList.add("tab-view");return af.replaceWith(e),af=e,void at();function f(a){
const b=T.filter((a=>a.field.phone));return D("div",{className:"fields-list fields-person"
},["Andorra","Argentina","Bolivia","Brazil","Chile","Colombia","Costa Rica","Mexico","Panama","Paraguay","Peru","Portugal","Spain","Venezuela"].includes(a)?[q("Title"),D("div",{
className:"field-group"
},q("First Name"),q("Last Name")),q("Last Name 2")]:["Afghanistan","Denmark","Egypt","Finland","France","Germany","Hungary","Iran","Iraq","Italy","Morocco","Norway","Pakistan","Philippines","Poland","Qatar","Russia","Saudi Arabia","Sweden","Switzerland"].includes(a)?[q("Title"),D("div",{
className:"field-group"
},q("First Name"),q("Middle Initial")),q("Last Name")]:["Australia","Canada","Ireland","New Zealand","United Kingdom","United States"].includes(a)?[q("Title"),D("div",{
className:"field-group"},q("First Name"),q("Middle Initial")),D("div",{className:"field-group"
},q("Last Name"),q("Name Suffix"))]:["China","Hong Kong","Singapore","Taiwan"].includes(a)?[D("div",{className:"field-group"
},q("Last Name"),q("First Name"),q("Title")),D("div",{className:"field-group"
},q("Roman Last Name"),q("Roman First Name"))]:"Netherlands"===a?[q("Title"),D("div",{className:"field-group"
},q("First Name"),q("Middle Initial")),D("div",{className:"field-group"
},q("Name Insertion"),q("Last Name"))]:"Thailand"===a?[D("div",{className:"field-group"
},q("First Name"),q("Last Name")),D("div",{className:"field-group"
},q("Roman First Name"),q("Roman Last Name"))]:"Japan"===a?[D("div",{className:"field-group"
},q("Last Name"),q("First Name")),D("div",{className:"field-group"},q("Alphabet Last Name"),q("Alphabet First Name")),D("div",{
className:"field-group"},q("Roman Last Name"),q("Roman First Name"))]:"Korea"===a?[D("div",{className:"field-group"
},q("Last Name"),q("First Name"))]:[q("Title"),D("div",{className:"field-group"
},q("First Name"),q("Middle Initial")),q("Last Name")],q("Position"),D("div",{className:"field-section-separator"
}),F(b),q("Email"),w("Skype ID"),D("div",{className:"field-section-separator"
}),["Afghanistan","China","Egypt","Hong Kong","Hungary","Iran","Iraq","Japan","Korea","Morocco","Pakistan","Qatar","Saudi Arabia","Singapore","Taiwan"].includes(a)?D("div",{
className:"field-group"
},H(["Birth Year","Birth Month","Birth Day"]),q("Birth Place"),q("Sex")):["Canada","Philippines","United States"].includes(a)?D("div",{
className:"field-group"},H(["Birth Month","Birth Day","Birth Year"]),q("Birth Place"),q("Sex")):D("div",{className:"field-group"
},H(["Birth Day","Birth Month","Birth Year"]),q("Birth Place"),q("Sex")),w("Age"),["Canada","Denmark","Finland","Korea","Netherlands","Norway","Sweden","United States"].includes(a)?[G()]:["Germany","Hong Kong","Singapore","Switzerland","Taiwan"].includes(a)?[q("Tax ID")]:["Andorra","Portugal","Spain"].includes(a)?[G(),q("Fiscal Code")]:"Thailand"===a?[q("Personal ID")]:"Brazil"===a?[q("Person Cadastre"),q("General Register"),q("Dispatching Agency")]:"Poland"===a?[q("Personal ID"),q("Tax ID")]:"China"===a?[q("ID Card Type"),q("ID Card Number")]:"Russia"===a?[q("Tax ID"),G()]:"France"===a?[G(),q("Tax ID")]:"United Kingdom"===a?[G(),q("National Health Service Number")]:"Italy"===a?[q("ID Card Number"),q("Fiscal Code")]:[q("Tax ID"),q("Personal ID")],w("Income"),["Afghanistan","China","Egypt","Hong Kong","Hungary","Iran","Iraq","Japan","Korea","Morocco","Pakistan","Qatar","Saudi Arabia","Singapore","Taiwan"].includes(a)?D("div",{
className:"field-group"
},q("Driver License Number"),H(["Driver License Expires Year","Driver License Expires Month","Driver License Expires Day"])):["Canada","Philippines"].includes(a)?D("div",{
className:"field-group"
},q("Driver License Number"),H(["Driver License Expires Month","Driver License Expires Day","Driver License Expires Year"])):"United States"===a?D("div",{
className:"field-group"
},q("Driver License State"),q("Driver License Number"),H(["Driver License Expires Month","Driver License Expires Day","Driver License Expires Year"])):D("div",{
className:"field-group"
},q("Driver License Number"),H(["Driver License Expires Day","Driver License Expires Month","Driver License Expires Year"])))}
function g(a){return D("div",{className:"fields-list fields-location"
},["Andorra","Bulgaria","Croatia","Cyprus","Denmark","Estonia","Finland","Hungary","Iceland","Latvia","Liechtenstein","Lithuania","Luxembourg","Moldova","Monaco","Montenegro","San Marino","Serbia","Slovakia","Slovenia"].includes(a)?[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"
},q("Country Abbreviation"),L(a))]:["Afghanistan","Colombia","Gabon","Haiti","Iran","Iraq","Jamaica","Morocco","Panama","Paraguay","Peru","Qatar"].includes(a)?[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"
},q("City"),L(a))]:["Namibia","Nigeria","Vietnam"].includes(a)?[q("Address Line 1"),q("Address Line 2"),q("City"),D("div",{
className:"field-group"
},q("State Or Province"),L(a))]:["Austria","Belgium","Czech Republic","France","Germany","Greece","Italy","Netherlands","Norway","Poland","Portugal","Spain","Sweden","Switzerland"].includes(a)?[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"
},q("Country Abbreviation"),q("State Or Province"),L(a))]:["Bosnia And Herzegovina","Bolivia","Egypt","Greenland","Israel","Macedonia","Malta","Romania","Venezuela"].includes(a)?[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"
},q("Zip Or PostCode"),q("City")),L(a)]:["Gibraltar","Hong Kong"].includes(a)?[q("Address Line 1"),q("Address Line 2"),L(a)]:["United Kingdom","Ireland"].includes(a)?[D("div",{
className:"field-group"},q("Apt Number"),q("House Number")),q("Street Name"),q("Address Line 3"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"
},q("State Or Province"),L(a))]:"Mexico"===a?[q("Address Line 1"),q("Address Line 2"),D("div",{className:"field-group"
},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"},q("Municipality"),q("Colony")),D("div",{
className:"field-group"},q("State Or Province"),L(a))]:"United States"===a?[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"
},q("County"),q("State Or Province"),L(a))]:"Brazil"===a?[q("Address Line 1"),q("Address Line 2"),q("District"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"
},q("State Or Province"),L(a))]:"Singapore"===a?[q("Address Line 1"),q("Address Line 2"),D("div",{className:"field-group"
},q("Zip Or PostCode"),L(a))]:"Japan"===a?[D("div",{className:"field-group"
},q("State Or Province"),L(a)),q("Zip Or PostCode"),q("City"),q("Alphabet City"),q("Address Line 1"),q("Alphabet Address Line 1"),q("Address Line 2"),q("Alphabet Address Line 2"),q("Station")]:"Korea"===a?[q("Zip Or PostCode"),D("div",{
className:"field-group"
},q("State Or Province"),q("City"),q("District")),q("Address Line 2"),L(a)]:[q("Address Line 1"),q("Address Line 2"),D("div",{
className:"field-group"},q("Zip Or PostCode"),q("City")),D("div",{className:"field-group"},q("State Or Province"),L(a))])}
function h(){return D("div",{className:"fields-list fields-credit-card"
},q("Card User Name"),B("Alphabet CardHolder Name"),J(),B("Card Issue Number"),B("Card Password"),D("div",{
className:"field-group"},D("div",{className:"card-exp-container"
},H(["Card Expires Month","Card Expires Year"],K("StartPage_IdentityEditor_Card_Exp_Date"))),q("Card Validation Code"),q("Card PIN Number")),D("div",{
className:"card-information-title"},K("StartPage_IdentityEditor_Card_Additional_Details")),q("Card Issuing Bank"),D("div",{
className:"field-group card-valid-from-container"
},H(["Card ValidFrom Month","Card ValidFrom Year"])),w("Card Customer Service Phone"),w("International Card Customer Service Phone"),w("Card Credit Limit"),w("Card Interest Rate"))
}function i(a){return D("div",{className:"fields-list fields-bank-account"
},["Andorra","Austria","Belgium","Bosnia And Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Gibraltar","Greece","Greenland","Hungary","Iceland","Ireland","Israel","Latvia","Liechtenstein","Lithuania","Luxembourg","Macedonia","Malta","Monaco","Montenegro","Netherlands","Norway","Poland","Portugal","Romania","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","United Kingdom"].includes(a)?[q("Bank Name"),q("Bank Account Number"),q("Int Bank Account Number"),D("div",{
className:"field-group"},q("Bank Account Type"),q("Bank PIN Code")),D("div",{className:"field-group"
},q("Bank Routing Number"),q("Bank Swift Code"))]:"Russia"===a?[q("Bank Name"),q("Bank Account Number"),q("Bank Corr Account"),D("div",{
className:"field-group"
},q("Bank Account Type"),q("Bank PIN Code")),q("Bank Swift Code")]:"Italy"===a?[q("Bank Name"),q("Bank Account Number"),q("Int Bank Account Number"),D("div",{
className:"field-group"},q("Bank Account Type"),q("Bank PIN Code")),D("div",{className:"field-group"
},q("CIN"),q("ABI"),q("CAB")),q("Bank Swift Code")]:"Japan"===a?[q("Bank Name"),D("div",{className:"field-group"
},q("Bank Account Number"),q("Bank Type")),D("div",{className:"field-group"
},q("Bank Account Type"),q("Bank PIN Code")),q("Bank Swift Code")]:"Korea"===a?[q("Bank Name"),q("Bank Account Number"),D("div",{
className:"field-group"
},q("Bank Account Type"),q("Bank PIN Code")),q("Bank Swift Code")]:[q("Bank Name"),q("Bank Account Number"),D("div",{
className:"field-group"},q("Bank Account Type"),q("Bank PIN Code")),D("div",{className:"field-group"
},q("Bank Routing Number"),q("Bank Swift Code"))],q("Bank Address"),D("div",{className:"field-section-separator"
}),"Japan"===a?[D("div",{className:"field-group"},q("Bank Account Owner Last"),q("Bank Account Owner First")),D("div",{
className:"field-group"
},q("Alphabet Bank Account Owner Last"),q("Alphabet Bank Account Owner First"))]:q("Bank Account Owner"),"Japan"===a?D("div",{
className:"field-group"},w("Bank Branch Name"),w("Bank Branch Type")):w("Bank Branch"),w("Bank Phone"),w("Bank Interest Rate"))}
function j(a){return D("div",{className:"fields-list fields-business"
},["Afghanistan","Andorra","Argentina","Armenia","Belarus","Bolivia","Bosnia And Herzegovina","Bulgaria","Chile","Colombia","Costa Rica","Egypt","Gabon","Gibraltar","Haiti","Iceland","India","Indonesia","Iran","Iraq","Israel","Jamaica","Kazakhstan","Liechtenstein","Macedonia","Malaysia","Mexico","Moldova","Monaco","Montenegro","Morocco","Namibia","Nigeria","Norway","Pakistan","Panama","Paraguay","Peru","Philippines","Poland","Qatar","Romania","San Marino","Saudi Arabia","Serbia","South Africa","Switzerland","Turkey","Ukraine","Venezuela","Vietnam"].includes(a)?[q("Company"),q("Employer Identitification Number"),q("Company Registration Number")]:["Austria","Belgium","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Greenland","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands","Portugal","Slovakia","Slovenia","Spain","Sweden"].includes(a)?[q("Company"),q("Company Department"),q("Employer Identitification Number"),q("Company Registration Number"),q("Company Registration Place"),q("Company VAT Number")]:["China","Hong Kong","Singapore","Taiwan"].includes(a)?[q("Company"),q("Roman Company"),q("Company Department"),D("div",{
className:"field-group"
},q("Company Registration Number"),q("Employer Identitification Number"))]:"Australia"===a?[q("Company"),q("Company Department"),D("div",{
className:"field-group"
},q("Type Of Business"),q("Employer Identitification Number")),q("Company Registration Number")]:"Brazil"===a?[q("Company"),q("Brand Name"),q("Company Department"),q("Company Registration Number"),q("Company Registration Place")]:"Russia"===a?[q("Company"),q("Company Department"),D("div",{
className:"field-group"},q("Employer Identitification Number"),q("Company Registration Number")),D("div",{
className:"field-group"
},q("Code OKPO"),q("Code OKVED")),q("Company Registration Place")]:"Thailand"===a?[q("Company"),q("Roman Company"),q("Company Department"),D("div",{
className:"field-group"
},q("Type Of Business"),q("Employer Identitification Number")),q("Company Registration Number")]:"United Kingdom"===a?[q("Company"),q("Company Department"),D("div",{
className:"field-group"},q("Type Of Business"),q("Employer Identitification Number")),D("div",{
className:"field-section-separator"
}),q("Company Registration Number"),q("Company Registration Place"),q("Company VAT Number")]:"Japan"===a?[q("Company"),q("Alphabet Company"),q("Company Department"),D("div",{
className:"field-group"
},q("Type Of Business"),q("Employer Identitification Number")),q("Company Registration Number")]:[q("Company"),q("Company Department"),D("div",{
className:"field-group"},q("Type Of Business"),q("Employer Identitification Number"))],D("div",{
className:"field-section-separator"}),q("Toll Free Phone"),q("Web Site"),w("Stock Symbol"))}function l(a){return D("div",{
className:"fields-list fields-passport"
},["United States","Australia","Canada"].includes(a)?q("Passport Number"):"Russia"===a?[q("Passport Type"),D("div",{
className:"field-group"
},q("Passport Series"),q("Passport Number Only")),q("Passport Issue Place")]:[q("Passport Type"),q("Passport Number"),q("Passport Issue Place")],D("div",{
className:"field-group"},q("Passport Issue Date"),q("Passport Expiration Date")))}function n(a){return D("div",{
className:"fields-list fields-car"},"United States"===a?D("div",{className:"field-group"
},q("Car Plate Number"),q("Car Plate State")):q("Car Plate Number"),D("div",{className:"field-group"
},q("Car Make"),q("Car Model")),D("div",{className:"field-group"},q("Car Year"),q("Vehicle Identification Number")))}
function q(a){const c="field-id-"+a.toLowerCase().split(" ").join("-"),d=Q(a);if(!d)return D("div",{
className:`rf-field ${c} hidden`});const e=d.field;let f=d.value
;if("Norway"===b&&"Location"===O&&"State Or Province"===e.name&&(f=(0,o.P9)(f)),
e.computable||e.constant||e.info)return D("div",{className:`rf-field ${c} hidden`});const g=(0,p.$E)(e);let h=K((0,
r.pb)(g),null,g);switch(e.lower_caption&&(h=K((0,r.pb)(e.lower_caption),null,e.lower_caption)),e.name){case"First Name":
h=K("StartPage_IdentityEditor_First_Name");break;case"Middle Initial":h=K("StartPage_IdentityEditor_Middle_Initial");break
;case"Last Name":h=K("StartPage_IdentityEditor_Last_Name");break;case"Last Name 2":h=K("StartPage_IdentityEditor_Last_Name_2")
;break;case"Roman First Name":h=K("StartPage_IdentityEditor_Roman_First_Name");break;case"Roman Last Name":
h=K("StartPage_IdentityEditor_Roman_Last_Name");break;case"Alphabet First Name":
h=K("StartPage_IdentityEditor_Alphabet_First_Name");break;case"Alphabet Last Name":
h=K("StartPage_IdentityEditor_Alphabet_Last_Name");break;case"Social Security Number":
e.caption||(h=K("StartPage_IdentityEditor_Social_Security_Number"));break;case"Driver License State":
h=K("StartPage_IdentityEditor_Driver_License_State");break;case"Driver License Number":
h=K("StartPage_IdentityEditor_Driver_License_Number");break;case"Address Line 1":h=K("StartPage_IdentityEditor_Address_Line_1")
;break;case"Address Line 2":h=K("StartPage_IdentityEditor_Address_Line_2");break;case"Alphabet Address Line 1":
h=K("StartPage_IdentityEditor_Alphabet_Address_Line_1");break;case"Alphabet Address Line 2":
h=K("StartPage_IdentityEditor_Alphabet_Address_Line_2");break;case"Alphabet City":h=K("StartPage_IdentityEditor_Alphabet_City")
;break;case"Card Validation Code":h=K("StartPage_IdentityEditor_Card_Validation_Code_2");break;case"Card User Name":
h=K("StartPage_IdentityEditor_Card_Holder_Name");break;case"Alphabet CardHolder Name":
h=K("StartPage_IdentityEditor_Alphabet_CardHolder_Name");break;case"Card PIN Number":
h=K("StartPage_IdentityEditor_Card_PIN_Number");break;case"Bank PIN Code":h=K("StartPage_IdentityEditor_Bank_PIN_Code");break
;case"Bank Routing Number":"United Kingdom"!==b&&(h=K("StartPage_IdentityEditor_Bank_Routing_Number"));break
;case"Bank Account Owner Last":h=K("StartPage_IdentityEditor_Bank_Account_Owner_Last");break
;case"Alphabet Bank Account Owner First":h=K("StartPage_IdentityEditor_Alphabet_Bank_Account_Owner_First");break
;case"Toll Free Phone":h=K("StartPage_IdentityEditor_Business_Toll_Free_Phone");break;case"Web Site":
h=K("StartPage_IdentityEditor_Business_Web_Site");break;case"Alphabet Company":
h=K("StartPage_IdentityEditor_Business_Alphabet_Company");break;case"Roman Company":
h=K("StartPage_IdentityEditor_Business_Roman_Company");break;case"Passport Issue Date":
h=K("StartPage_IdentityEditor_Passport_Issue_Date");break;case"Passport Expiration Date":
h=K("StartPage_IdentityEditor_Passport_Expiration_Date");break;case"Passport Issue Place":
h=K("StartPage_IdentityEditor_Passport_Issue_Place");break;case"Car Plate Number":
h=K("StartPage_IdentityEditor_Car_Plate_Number")}if(e.select){const a=e.select.options;let b;const g=D("div",{
className:"editor-field field-select field-with-title field-border "+c},D("div",{className:"icon-arrow-down"}),b=D("select",{
className:"input-field"+(f?"":" empty-value"),onchange:()=>{
b.value?b.classList.remove("empty-value"):b.classList.add("empty-value"),ap()}},D("option",null),a&&a.map((a=>{const b=K((0,
r.ql)(e.name,a),null,a);return D("option",{value:a},[b,""])}))),D("div",{className:"title"},[h,""]));if(a){let c=0
;for(let b=0;b<a.length;b++)a[b]===f&&(c=b+1);0===c&&f&&b.appendChild(D("option",null,f)),b.value=f}
return d.GetEnteredValue=()=>b.value,(0,A.fI)(R(g,h)),g}{const a=(0,t.ap)({className:`editor-field ${c}`,title:h,value:f,
oninput:ap});return d.GetEnteredValue=a.GetValue,a}}function w(a){const b=Q(a);return b&&b.value?q(a):null}function B(a){
return Q(a)?q(a):null}function F(a){let b="";const c=Q("Country Code");c&&(b=c.value||c.field.value||"")
;const d=new Map,e=new Map,f=new Map;let g=a.filter((a=>!a.value));const h=[];let i=null;for(let k=0;k<a.length;++k){
const b=a[k];if(b.value){const a=l(b,b.value,!1);h.push(a),i=a}}if(!i&&g.length){const b=l(a[0],"",!1);h.push(b),i=b}m(),n()
;const j=D("div",{className:"add-new-field-button"});return j.addEventListener("click",(()=>{if(i&&g.length){
const a=l(g[0],"",!0);i.after(a),i=a,m(),n(),g.length?a.appendChild(j):j.remove()}})),i&&g.length&&i.appendChild(j),h
;function l(a,c,g){const h=a.field;let i,j;const l=D("div",{className:"editor-field field-phone"},j=D("select",{
className:"phone-select",onchange:()=>{o(h.name,j.value)}}),i=D(k.PI,{value:c,format:(0,z.TT)(h.sectional),country_code:b}))
;g&&(0,A.C)((()=>i.Focus()));const m=i.GetValueElem();return m.onchange=ap,a.GetEnteredValue=()=>m.value,d.set(h.name,l),
e.set(h.name,i),f.set(h.name,j),l}function m(){g=[],a.forEach((a=>{d.has(a.field.name)||(a.GetEnteredValue=()=>"",g.push(a))}))}
function n(){f.forEach(((a,b)=>{const c=Q(b);if(!c)return;const d=(0,p.$E)(c.field),f=[{value:c.field.name,text:K((0,
r.pb)(d),null,d)}];g.forEach((a=>{if(a.field.name!==c.field.name){const b=(0,p.$E)(a.field);f.push({value:a.field.name,
text:K((0,r.pb)(b),null,b)})}})),(0,v.rK)(a),f.forEach((b=>{a.appendChild(D("option",{value:b.value},[b.text,""]))})),
0===g.length&&(a.classList.add("disabled"),a.addEventListener("mousedown",(a=>{var c;null===(c=e.get(b))||void 0===c||c.Focus(),
a.preventDefault()})),a.addEventListener("focus",(()=>{var a;null===(a=e.get(b))||void 0===a||a.Focus()})))}))}function o(a,b){
if(a===b)return;const c=Q(a),e=Q(b);if(!c||!e)return;const f=d.get(c.field.name);if(!f)return;const h=l(e,(0,
y.v$)(c.GetEnteredValue()||""),!0);f.replaceWith(h),d.delete(c.field.name),f===i&&g.length&&(h.appendChild(j),i=h),m(),n(),at()}
}function G(){const a=Q("Social Security Number");if(!a)return null;let b=a.value||""
;const c="field-id-social-security-number-formmated",d=a.field.sectional;if(!d)return q("Social Security Number")
;const e=D("input",{type:"hidden",value:b}),f=d.split(/[!-. ]/),g=[],h=[];for(const[l,m]of f.entries()){
const a=b.slice(0,m.length);b=b.slice(m.length);const c=D("input",{
className:`rf-field-value-input rf-field-sectional section${l}`,size:m.length,value:a.replace(/\s/g,""),maxLength:m.length,
onmousedown:a=>{a.stopPropagation()},oninput:()=>{e.value=k().trim();const a=g[l+1];c.size===c.value.length&&a&&a.focus(),ap()}
});g.push(c),h.push(c),l<f.length-1&&h.push(D("span",null,"-"))}const i=D("div",{className:"rf-field-sectional-input"},e,h)
;i.addEventListener("mousedown",(()=>{for(const[a,b]of g.entries()){if(b.size!==b.value.length)return void(0,A.C)((()=>{
b.focus()}));a===g.length-1&&(0,A.C)((()=>{g[0].focus()}))}}));const j=D("div",{className:`editor-field ${c}`},D("div",{
className:"title"},a.field.caption?async function(a,b){return b.LocalizeString((0,r.pb)(a),null,a)}((0,
p.$E)(a.field),E):K("StartPage_IdentityEditor_Social_Security_Number")),i);return a.GetEnteredValue=()=>e.value,j;function k(){
return g.reduce(((a,b)=>{if(b instanceof HTMLInputElement){if(b.value.length<b.maxLength){const c=b.maxLength-b.value.length
;return a.concat(b.value+" ".repeat(c))}return a.concat(b.value)}return a}),"")}}function H(a,b){let c=[]
;for(let l=0;l<T.length;++l)if(a.includes(T[l].field.name)){c=T.slice(l,l+a.length).filter((b=>a.includes(b.field.name)));break}
if(0===c.length)return null;const d=c[1]&&c[1].field.caption||"/",e=(0,p.$E)(c[0].field),f=b||K((0,r.pb)(e),null,e);let g
;const h=D("div",{className:"editor-field field-date",onmousedown:j},g=D("div",{className:"input-section"}),D("div",{
className:"title"},[f,""]));(0,A.fI)(R(h,f));const i=[];return c.forEach(((a,b)=>{
const e=a.field.lower_caption||"",f=D("input",{type:"text",value:a.value||"",size:e.length,maxLength:e.length,oninput:()=>{
b<i.length-1&&f.value.length===f.size&&document.activeElement===f&&i[b+1].focus(),k(),ap()}});(0,A.fI)((async()=>{
f.placeholder=await K((0,r.pb)(e),null,e)})()),g.appendChild(f),b<c.length-1&&g.appendChild(D("span",null,d)),i.push(f),
a.GetEnteredValue=()=>f.value})),k(),h;function j(a){const b=a.target;let c=!1,d=!1;for(let e=0;e<i.length;++e)i[e]===b&&(c=!0)
;for(let e=0;e<i.length;++e)i[e]===document.activeElement&&(d=!0);if(!c||!d)return c&&!d?(a.preventDefault(),
void i[0].focus()):void(c||!d?(a.preventDefault(),i[0].focus()):a.preventDefault())}function k(){let a=!1;i.forEach((b=>{
b.value&&(a=!0)})),a?h.classList.add("contains-value"):h.classList.remove("contains-value")}}function J(){const[a,b]=(0,
u.Uw)(M()),c=Q("Card Number"),d=Q("Card Type");if(!c)return null;const e=c.value||"",f=(0,p.$E)(c.field),g=K((0,
r.pb)(f),null,f),h="field-id-"+"Card Number".toLowerCase().split(" ").join("-"),i=(0,t.OD)(`editor-field ${h}`,g,e,a,{OnChange:k
}),j=D("div",{className:"card-number-group"},i.view_element);return c.GetEnteredValue=()=>i.value_element.value,
d&&(d.GetEnteredValue=()=>a(null)||""),j;function k(){ap();const c=i.input_element.value,d=(0,x.kh)(c)
;if(null===d)return void b(null);const e=(0,x.Ni)(d);e!==a(null)&&b(e)}}function L(b){if("Other"===b){let b;const c=D("div",{
className:"editor-field field-select field-with-title field-border field-id-country "},D("div",{className:"icon-arrow-down"
}),b=D("select",{className:"select-field input-field"}),D("div",{className:"title"},[K("CL_Country"),""]));return(0,
A.fI)((async()=>{const c=(0,p.av)(a);(await(0,p.F$)(c,E)).forEach((a=>{b.appendChild(D("option",{value:a.name
},a.localized_name)),b.value="Other"})),b.addEventListener("change",(()=>{U!==b.value&&(U=b.value,ap())}))})()),c}{let a
;const c=D("div",{className:"editor-field field-country"},D("div",{className:"country-content"},a=D("div",{
className:"country-image"}),D("div",{className:"country-text"
},[K((0,r.eR)(b),null,b),""]))),d=b.split(" ").map((a=>a.toLowerCase())).join("-");return a.style.backgroundImage=(0,
v.ry)(`flag-${d}.svg`),c}}function M(){const a=Q("Card Type");return a&&a.value||null}async function P(){const a=Q((0,m.ph)(O))
;if(!a)return D("div",{className:"editor-field field-id-note hidden"});let b,c;const d=D("div",{
className:"editor-field field-id-note"},b=D("div",{className:"show-note"+(a.value?" hidden":""),onclick:()=>{(0,v.SE)(b),(0,
v.l5)(c),c.Focus()}},D("div",{className:"image-plus"}),D("div",{className:"text"},[K("StartPage_Login_AddNote"),""])),c=(0,
t.fs)({className:a.value?"":"hidden",title:await K((0,r.pb)("Note"),null,"Note"),value:a.value,oninput:ap,resizable_heigth:!0,
max_height:300}));return a.GetEnteredValue=c.GetValue,(0,A.C)((()=>c.Resize())),d}function Q(a){
for(let b=0;b<T.length;++b)if(T[b].field.name===a)return T[b];return null}async function R(a,b){const c=D("div",{
className:"title"},await b);c.style.position="static",c.style.color="transparent",a.appendChild(c),(0,A.C)((()=>{
a.style.minWidth=(0,s.Md)(a.offsetWidth),c.remove()}))}}(),V=!0)}}function ai(a){if(ar()){
const b="RoboForm file was changed. Do you want to save changes?";return(a||window.event).returnValue=b,b}}function aj(a){
a.ctrlKey&&"KeyS"===a.code&&(a.preventDefault(),a.stopPropagation(),ak(!1))}function ak(a){if(Z)return;if(null===S)return
;const b=aq(),c={};S.m_fields.forEach((a=>{c[(0,z.TT)(a.m_name)]=(0,z.TT)(a.m_value)}));let d=!1,f=!0;const g=[]
;for(const e in b){const a=b[e];if(void 0===a)continue;const h=c[e];(0,v.o3)(h,a)&&(d=!0),a&&(f=!1,g.push({m_name:e,m_value:a}))
}if(as()&&(d=!0),d||W){const b=Object.assign({},N.m_options),c=[...N.m_groups],d=Object.assign(Object.assign({},N),{m_groups:c,
m_options:b});as()&&(b["World Regions"]=(0,z.TT)(U),U=null);const i=c.findIndex((a=>a.m_name===O));if(i<0)return
;const j=Object.assign({},c[i]),k=[...j.m_instances],l=j.m_instances.findIndex((a=>a.m_name===P));if(l<0)return
;const m=Object.assign(Object.assign({},j.m_instances[l]),{m_fields:g});k[l]=m,j.m_instances=k,c[i]=j,S=m,(0,v.D$)((async()=>{
try{if(Q){Q=!1;const a=await(0,n.Oe)(null,d,H,null);R=a}else await H.PutDataItem(R||M.path,d,null),
await h.SetUsageInfo(M.path,0,!0,null);let b=""
;if(b=W?await K("StartPage_Editor_ItemCreated",[5===M.type?await K("RoboformType_Identity"):await K("RoboformType_Contact")]):X?await K("StartPage_Editor_ItemCreated",[O]):await K("StartPage_Editor_ChangesSaved"),
F.ShowNotification(b,null,null),f){at();const a=await K("StartPage_Identity_NoDataToSaveConfirm")
;await F.ShowConfirmationDialog(await K("CL_Confirmation"),a,await K("Options_No"),await K("Options_Yes"))||await al()
}else a?await al():at()}catch(b){(0,B.r5)((0,B.JS)())||await F.ShowErrorDialog(await K("StartPage_Editor_SaveChangesError",[(0,
e.Qo)(b)]))}}),(()=>()=>{}),300,null)}}async function al(){const a=(0,A.f4)(null,null,null)
;if(Q)await F.ShowDataViewModeInDetailsPane(M,N,O,P,a);else{
const b=await H.GetInfo(R||M.path,63,null),c=await H.GetDataItem(R||M.path,4,null,null)
;await F.ShowDataViewModeInDetailsPane(b,c,O,P,a)}}function am(){aa.classList.remove("inplace-rename"),ae.Hide(),(0,v.l5)(ac),
Y=!1}function an(){const a=ae.GetValue().trim().toLowerCase(),b=(0,w.HE)((0,w._p)(M.path));(0,z.RA)(a,b)?am():(0,
A.fI)((async()=>{const a=await K("AdminCenter_IdentityRenameConfirmation_Text")
;await F.ShowConfirmationDialog(await K("AdminCenter_SaveChanges_Text"),a,await K("AdminCenter_ConfirmationDialog_DontSave"),await K("AdminCenter_ConfirmationDialog_Save"))?ao():am()
})())}function ao(){(0,v.PQ)((async()=>{const a=ae.GetValue().trim(),b=(0,m.KF)(a,null)
;if(!b)return await F.ShowErrorDialog(await K("NameInvalidCharacter_Error2")),void ae.Focus()
;if(b.length>251)return await F.ShowErrorDialog(await K("WrongNameLenght_Error",[(0,z.bf)(251)])),void ae.Focus()
;const c=M.path,d=(0,m.kd)(M.type),f=Q?`/${a}${(0,m.kd)(5)}`:(0,w.fA)(c)+"/"+b+d;if((0,z.RA)(c,f))Y&&am();else{let c=null;try{
c=await H.GetInfo(f,1,null)}catch(g){if(!(0,B.r5)(g,B.Y$))return void(0,B.au)(g)}if(c){
const b=await K("AlreadyExists_Error2",["Item",a]);return await F.ShowErrorDialog(await K("Cmd_Rename_Error",["Item",a,b])),
void ae.Focus()}{let a=(0,m.em)(M.path),c=(0,z.HP)(N);if(Q){const b=await J.GetInitialIdentity(null);a=await(0,e.D5)(b,{},E),
c=(0,e.eQ)(b,{}),await(0,n.Oe)(f,c,H,null),F.OnRename(f,5),Q=!1}else await H.MoveFile(M.path,f,null);Y&&am()
;const d=await H.GetInfo(f,63,null);await ah(d,N);const g=await K("Notification_Item_Renamed_Text",[a,b])
;F.ShowNotification(g,null,null)}}}),(()=>(ae.Enable(!1),()=>{ae.Enable(!0)})),0,null,(a=>{(0,A.fI)((async()=>{(0,
B.r5)(a,B.kd)||await F.ShowErrorDialog((0,e.Qo)(a))})())}))}function ap(){at()}function aq(){const a={};return T.forEach((b=>{
const c=b.field.name,d=b.GetEnteredValue();null!==d&&(a[c]=d)})),a}function ar(){if(null===S)return!1;if(as())return!0
;const a=aq(),b={};S.m_fields.forEach((a=>{b[(0,z.TT)(a.m_name)]=(0,z.TT)(a.m_value)}));for(const c in a)if((0,
v.o3)(b[c],a[c]))return!0;return!1}function as(){return null!==U&&""!==U}function at(){let a=!1;a=!!W||ar(),a?(Z=!1,(0,
v.r9)(ag)):(Z=!0,(0,v.aZ)(ag))}function au(a){for(const b of a)if(8===b.event){if(8===b.type&&b.path&&(0,
m.QC)(b.path,M.path)&&b.to&&b.to.path){const a=M.path.replace(b.path,b.to.path);M=Object.assign(Object.assign({},M),{path:a})}
if(b.type===M.type&&b.path===M.path&&b.to&&b.to.path){M=Object.assign(Object.assign({},M),{path:b.to.path});const a=(0,
m.em)(b.to.path);ad.textContent=a,ad.title=a,ae.SetValue(a)}}}}function G(a){switch(a){case"Person":return"group-logo-person"
;case"Business":return"group-logo-business";case"Passport":return"group-logo-passport";case"Location":return"group-logo-address"
;case"Credit Card":return"group-logo-creditcard";case"Bank Account":return"group-logo-bankaccount";case"Car":
return"group-logo-car"}return""}function H(a,b,c,d,e){const f=e.LocalizeString,h=c,i=a.path;let j=a;const k=b;let l;return{
Create:async function(a,b){let c,d,n,o,q,r,s,u,w,x={},y=!1,C=!1,E=!1
;const F=await f("NameInvalidCharacter_Error2"),G=await f("WrongNameLenght_Error",[(0,
z.bf)(g.RC)]),H=await f("HomeFolder"),I=D("div",{className:"content"},l=(0,t.ap)({title:await f("AdminCenter_Name_Text"),
oninput:function(){(0,g.eX)(s,""),O()},onkeypress:function(a){if(!O())return;if("Enter"!==a.key)return;(0,A.fI)(L())}
}),s=D("div",{className:"error-text"}),c=D("div",{className:"country-dropdown"},D("div",{className:"selected-country",
onclick:function(){y?N():((0,v.l5)(n),c.classList.add("opened"),y=!0,C&&(C=!1))}},d=D("span",{className:"text"}),D("div",{
className:"arrow-icon"})),D("span",{className:"title"},await f("AdminCenter_Country_Text")),n=D("div",{
className:"country-list hidden"},o=D("div",{className:"list"}))),(0,g.qi)({OnFolderClick:function(a){if(i===a.path)return;j=a},
data_storage:k,home_folder_text:H,localization:e,default_selected:j,show_groups:!0}),D("div",{className:"buttons-bar"},D("div",{
className:"button",onclick:()=>b((0,B.JS)())},await f("Cmd_Cancel_Flat")),r=D("div",{className:"button default-button disabled",
onclick:()=>(0,A.fI)(L())},await f("AdminCenter_Next_Text"))),u=D("div",{className:"progress-overlay hidden"}))
;return function(){(0,v.D$)((async()=>{x=(0,p.av)(await h.Load());(await(0,p.F$)(x,e)).forEach(((a,b)=>{const c=D("div",{
className:0===b?"country-option selected":"country-option",onclick:()=>K(a,c)},a.localized_name);o.appendChild(c),0===b&&(q=c,
w=a,M())}))}),S,g.Ds,Q)}(),I;function K(a,b){N(),a!==w&&(w=a,(0,g.dq)(q),q=b,(0,g.cT)(q),M())}async function L(){if(!w||E)return
;const b=l.GetValue(),c=(0,m.KF)(b,null);if(!c)return void P(F);if(c.length>g.RC)return void P(G);const d=j.path+"/"+c+(0,
m.kd)(5);if(await J(d,k)){return void P(await f("StartPage_AlreadyExists_Error",[(0,m.XE)(d,!1)]))}const e={path:d,type:5,
disabled:j.disabled},h={m_options:{[m.lb]:(null==w?void 0:w.name)||"",[m.V6]:"+",[m.nJ]:w?(0,
z.bf)(x[w.name].m_phone_prefix_mode):""},m_groups:[{m_name:"Person",m_instances:[{m_name:"Main",m_is_default:!0,
m_fields:function(a){const b=[],c=a.split(/\s+/);c[0]&&b.push({m_name:"First Name",m_value:c[0]});c[1]&&c[2]&&b.push({
m_name:"Middle Initial",m_value:c[1]});(c[2]||c[1]&&!c[2])&&b.push({m_name:"Last Name",m_value:c[2]?c.slice(2).join(" "):c[1]})
;return b}(c)}]}]};return void a({m_item_info:e,m_item:h})}function M(){d.textContent=w.localized_name}function N(){(0,v.SE)(n),
c.classList.remove("opened"),y=!1}function O(){return l.GetValue()&&w?((0,v.r9)(r),E=!1,!0):((0,v.aZ)(r),E=!0,!1)}function P(a){
(0,g.eX)(s,a),l.SetErrorState(),l.Focus()}function Q(){return(0,v.l5)(u),R}function R(){(0,v.SE)(u)}function S(){return(0,
v.aZ)(r),E=!0,T}function T(){(0,v.r9)(r),E=!1}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){
null==l||l.Focus()},Dispose:function(){}}}function I(a,b,c,d,e){const f=e.LocalizeString,h=c,i=a.path;let j=a;const k=b;let l
;return{Create:async function(a,b){let c,d,n,o,q,r,s,u,w,x={},y=!1,C=!1,E=!1
;const F=await f("NameInvalidCharacter_Error2"),G=await f("WrongNameLenght_Error",[(0,
z.bf)(g.RC)]),H=await f("HomeFolder"),I=D("div",{className:"content"},l=(0,t.ap)({title:await f("AdminCenter_Name_Text"),
oninput:function(){(0,g.eX)(s,""),O()},onkeypress:function(a){if(!O())return;if("Enter"!==a.key)return;(0,A.fI)(L())}
}),s=D("div",{className:"error-text"}),c=D("div",{className:"country-dropdown"},D("div",{className:"selected-country",
onclick:function(){y?N():((0,v.l5)(n),c.classList.add("opened"),y=!0,C&&(C=!1))}},d=D("span",{className:"text"}),D("div",{
className:"arrow-icon"})),D("span",{className:"title"},await f("AdminCenter_Country_Text")),n=D("div",{
className:"country-list hidden"},o=D("div",{className:"list"}))),(0,g.qi)({OnFolderClick:function(a){if(i===a.path)return;j=a},
data_storage:k,home_folder_text:H,localization:e,default_selected:j,show_groups:!0}),D("div",{className:"buttons-bar"},D("div",{
className:"button",onclick:()=>b((0,B.JS)())},await f("Cmd_Cancel_Flat")),r=D("div",{className:"button default-button disabled",
onclick:()=>(0,A.fI)(L())},await f("AdminCenter_Next_Text"))),u=D("div",{className:"progress-overlay hidden"}))
;return function(){(0,v.D$)((async()=>{x=(0,p.av)(await h.Load());(await(0,p.F$)(x,e)).forEach(((a,b)=>{const c=D("div",{
className:0===b?"country-option selected":"country-option",onclick:()=>K(a,c)},a.localized_name);o.appendChild(c),0===b&&(q=c,
w=a,M())}))}),S,g.Ds,Q)}(),I;function K(a,b){N(),a!==w&&(w=a,(0,g.dq)(q),q=b,(0,g.cT)(q),M())}async function L(){if(!w||E)return
;const b=l.GetValue(),c=(0,m.KF)(b,null);if(!c)return void P(F);if(c.length>g.RC)return void P(G);const d=j.path+"/"+c+(0,
m.kd)(6);if(await J(d,k)){return void P(await f("StartPage_AlreadyExists_Error",[(0,m.XE)(d,!1)]))}const e={path:d,type:6,
disabled:j.disabled},h={m_options:{[m.lb]:(null==w?void 0:w.name)||"",[m.V6]:"",[m.nJ]:w?(0,
z.bf)(x[w.name].m_phone_prefix_mode):""},m_groups:[{m_name:"Person",m_instances:[{m_name:"Main",m_is_default:!0,
m_fields:function(a){const b=[],c=a.split(/\s+/);c[0]&&b.push({m_name:"First Name",m_value:c[0]});c[1]&&c[2]&&b.push({
m_name:"Middle Initial",m_value:c[1]});(c[2]||c[1]&&!c[2])&&b.push({m_name:"Last Name",m_value:c[2]?c.slice(2).join(" "):c[1]})
;return b}(c)}]}]};return void a({m_item_info:e,m_item:h})}function M(){d.textContent=w.localized_name}function N(){(0,v.SE)(n),
c.classList.remove("opened"),y=!1}function O(){return l.GetValue()&&w?((0,v.r9)(r),E=!1,!0):((0,v.aZ)(r),E=!0,!1)}function P(a){
(0,g.eX)(s,a),l.SetErrorState(),l.Focus()}function Q(){return(0,v.l5)(u),R}function R(){(0,v.SE)(u)}function S(){return(0,
v.aZ)(r),E=!0,T}function T(){(0,v.r9)(r),E=!1}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){
null==l||l.Focus()},Dispose:function(){}}}async function J(a,b){try{return await b.GetInfo(a,1,null),!0}catch(c){if((0,
B.r5)(c,B.Y$))return!1;throw c}}}}]);