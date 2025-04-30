// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[290],{32806:function(a,b,c){c.r(b),c.d(b,{
CreateSafenoteView:function(){return t},SafenoteEditorView:function(){return s}})
;var d=c(87965),e=c(47333),f=c(98266),g=c(53166),h=c(41107),i=c(65852),j=c(4234),k=c(31173),l=c(32105),m=c(63956),n=c(13113),o=c(69893),p=c(4153),q=c(78440),r=(c(13117),
c(91764)._);function s(a,b,c,g,s,v,w,x,y,z,A,B){const C=A.LocalizeString,D=g,E=w,F=x;let G={path:"",type:7},H={}
;a&&(G=Object.assign({},a)),b&&(H=Object.assign({},b));const I=null!==c
;let J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ab,ac,ad=null,ae=!1;const af=(0,q.SI)(200),ag=(0,q.SI)(200)
;let ah=!1,ai="",aj="",ak=!1,al=!1,am=!1,an=[];const ao=new Map;let ap=0,aq=null,ar=!0,as=null,at=!1,au=!1,av=!1;return{
Create:async function(a,b){J=r("div",{className:"editor-view editor-inline editor-safenote edit-mode"},r("div",{
className:"editor-content"},r("div",{className:"content-header"},r("div",{className:"title-pane"},z?r("div",{
className:"editor-cmdbar cmdbar-navigation"},r("div",{className:"editor-cmd editor-cmd-home",
title:await C("StartPage_MoreActions_Tip"),onclick:()=>{const a={startPage:(0,i.vj)()};(0,q.fI)(v.OpenStartPage(a))}
})):null,r("div",{className:"header-image"}),K=r("div",{className:"header-title"},L=r("span",{onclick:aB})),ac=(0,
l.nM)("hidden",aI,aC,aH),P=r("div",{className:"editor-cmdbar cmdbar-main"},Q=r("div",{className:"editor-cmd editor-cmd-more",
title:await C("StartPage_MoreActions_Tip"),onmousedown:az,onclick:aA}),z?null:r("div",{className:"editor-cmd editor-cmd-close",
title:await C("Cmd_Close_Flat"),onclick:()=>(0,q.fI)(async function(){const a=function(){if(I){return(0,j.KF)(a2(),null)||""}
if(!au)return"";const a=(0,j.em)(G.path),b=ac.GetValue().trim();if(!b||a===b)return"";return b}(),c=a5();if(I){
if(!a)return void b((0,o.JS)())
;const c=await C("CL_Confirmation"),d=await C("AdminCenter_SafenoteCancelCreatingConfirmation_Text")
;await B.ShowConfirmationDialog(c,d,await C("Options_No"),await C("Options_Yes"))&&b((0,o.JS)())}else if(c){
const a=await C("AdminCenter_SafenoteChangeConfirmation_Text");try{
await B.ShowConfirmationDialog(await C("AdminCenter_SaveChanges_Text"),a,await C("AdminCenter_ConfirmationDialog_DontSave"),await C("AdminCenter_ConfirmationDialog_Save"))?await d():b((0,
o.JS)())}catch(e){b((0,o.JS)())}}else b((0,o.JS)())}())}))),r("div",{className:"actions-pane"},O=r("div",{
className:"cmdbar cmdbar-actions"},r("div",{className:"editor-cmd editor-cmd-search",title:await C("Cmd_RunSearch_Flat"),
onclick:()=>{ae?aL():aK()}}),r("div",{className:"editor-cmd editor-cmd-copy",title:await C("StartPage_Cmd_CopyContent"),
onclick:()=>{(0,q.fI)((async()=>{H.m_note&&(await B.CopyTextToClipboard(H.m_note,null),
B.ShowNotification(await C("StartPage_SafenoteCopy_Notification"),null,null))})())}})),R=r("div",{className:"search-pane hidden"
},r("div",{className:"search-pane-input-pane"},r("div",{className:"search-pane-button search-pane-cancel",onclick:aL}),r("div",{
className:"search-pane-search-box"},r("div",{className:"search-pane-search-icon"}),S=r("input",{type:"text",size:5,
className:"search-pane-search-input",placeholder:await C("SafeNotes_SearchEdit_Cuebanner")}),T=r("div",{
className:"search-pane-search-count"}),U=r("div",{className:"search-pane-search-eraser",onclick:()=>{aP(),S.focus()}
})),V=r("div",{className:"search-pane-button search-pane-prev"}),W=r("div",{className:"search-pane-button search-pane-next"
}),X=r("div",{className:"search-pane-button search-pane-filter"})),Y=r("div",{className:"search-pane-filter-pane hidden"
},Z=r(l.b_,{text:await C("SafeNotes_WholeWord_Text"),checked:!1,onchange:aT}),aa=r(l.b_,{
text:await C("SafeNotes_MatchCase_Text"),checked:!1,onchange:aT}))),G.readOnly?null:ad=r("div",{
className:"buttons-bar hidden noselect"},r("div",{className:"editor-button cancel-button",onclick:()=>(0,q.fI)(async function(){
if(av)return;const a=a5();if(I){
const a=await C("CL_Confirmation"),c=await C("AdminCenter_SafenoteCancelCreatingConfirmation_Text")
;await B.ShowConfirmationDialog(a,c,await C("Options_No"),await C("Options_Yes"))&&b((0,o.JS)())}else if(a){
const a=await C("AdminCenter_SafenoteChangeConfirmation_Text");try{
await B.ShowConfirmationDialog(await C("AdminCenter_SaveChanges_Text"),a,await C("AdminCenter_ConfirmationDialog_DontSave"),await C("AdminCenter_ConfirmationDialog_Save"))?await d():b((0,
o.JS)())}catch(c){b((0,o.JS)())}}else b((0,o.JS)())}())},await C("StartPage_EditorButton_Cancel")),N=r("div",{
className:"editor-button default-button save-button",onclick:aY},await C("StartPage_EditorButton_Save"))))),r("div",{
className:"safenote-text"},M=r("textarea",{className:"safenote-textarea",oninput:function(){aM(),c.Start((async()=>{if(await(0,
q.XR)(30),I){const a=function(a){const b=a.split("\n");for(const c of b){const a=c.replace(u,""),b=(0,j.Au)(a,"_",200)
;if(b)return b}return""}(a4());(0,h.BC)(a,L),a3(!0)}else{a3(a5())}}))},onkeyup:aM}),ab=r("div",{
className:"search-selection-background hidden"}))));const c=(0,q.SI)(200);return(0,q.C)((()=>{!function(){
S.addEventListener("cut",aS),S.addEventListener("paste",aS),S.addEventListener("drop",aS),S.addEventListener("keyup",aS),
S.addEventListener("keydown",(a=>{const b=(0,k.m)();"Enter"===a.key?(a.preventDefault(),"safari"===b&&a.stopPropagation(),
a.shiftKey?aR():aQ(),"msie"!==b&&"safari"!==b||(S.focus(),(0,q.C)((()=>aV(ap,!1))))):"Escape"===a.key&&(a.preventDefault(),aL())
}));let a=null;function b(b,c){b.addEventListener("mousedown",(()=>{a=document.activeElement})),
b.addEventListener("click",(()=>{b.classList.contains("disabled")||(c?aQ():aR(),a===S?S.focus():M.focus(),a=null)}))}b(V,!1),
b(W,!0),X.addEventListener("click",(()=>{am?(am=!1,(0,m.SE)(Y)):(am=!0,(0,m.l5)(Y))}))}(),aw(G,H)})),J;async function d(){try{
await a0(),b((0,o.JS)())}catch(a){(0,o.au)(a);const b=(0,j.XE)(G.path,!1)
;await B.ShowErrorDialog(await C("StartPage_Save_Error",[b,(0,e.Qo)(a)]))}}},OnAfterShow:function(){I||D.onDataChanged.Add(a6)
;document.addEventListener("keydown",ax),window.addEventListener("beforeunload",ay)},OnBeforeHide:function(){},Focus:function(){
M.focus(),M.selectionStart=M.value.length},Dispose:function(){af.Cancel(),ag.Cancel(),I||D.onDataChanged.Add(a6)
;document.removeEventListener("keydown",ax),window.removeEventListener("beforeunload",ay)}};function aw(a,b){
G=Object.assign({},a);const c=G.readOnly||!1;M.readOnly=c,(0,h.BC)((0,j.em)(G.path),L),H=Object.assign({},b)
;const d=H.m_note||"";M.value!==d&&(M.value=d),ar&&(ar=!1,G.readOnly||(M.setSelectionRange(0,0),M.scrollTop=0)),a3(!1)}
function ax(a){a.ctrlKey&&("KeyF"===a.code&&(a.preventDefault(),a.stopPropagation(),aK()),"KeyS"===a.code&&(a.preventDefault(),
a.stopPropagation(),aY()))}function ay(a){if(a5()){const b="RoboForm file was changed. Do you want to save changes?"
;return(a||window.event).returnValue=b,b}}function az(a){at&&a.stopPropagation()}function aA(){at?as&&(as.Hide(),
as=null):function(){at=!0;const a=null==Q?void 0:Q.getBoundingClientRect(),b=new DOMRect(a.left+20,a.bottom-10,0,0)
;async function e(){return await B.GetSafenoteCommands(G||c,I,aB,aZ)}function f(){const a=(0,d.NI)(Q);return a.onHide=h,
a.onShow=g,a}function g(){at=!0}function h(){at=!1}as=(0,d.Lj)(b,(()=>e()),f(),(function(){return Q.getBoundingClientRect()
}),((a,b)=>(0,q.fI)(a(b,(0,q.f4)(null,null,null)))))}()}function aB(){(0,m.SE)(K),(0,m.SE)(P),ac.SetValue((0,j.em)(G.path)),
ac.Show(),au=!0}function aC(){ac.Hide(),(0,m.l5)(K),(0,m.l5)(P),au=!1}function aD(){return ac.Enable(!1),aE}function aE(){
ac.Enable(!0)}function aF(){return(0,m.aZ)(N),av=!0,aG}function aG(){(0,m.r9)(N),av=!1}function aH(){!function(){const a=(0,
j.em)(G.path),b=ac.GetValue().trim();return(0,m.o3)(a,b)}()?aC():(0,m.PQ)((async()=>{
const a=await C("CL_Confirmation"),b=await C("AdminCenter_SafenoteRenameConfirmation_Text")
;await B.ShowConfirmationDialog(a,b,await C("Options_No"),await C("Options_Yes"))?await aJ():aC()}),aD,0,null,(a=>()=>{}))}
function aI(){(0,m.PQ)((async()=>{await aJ()}),aD,0,null,(a=>()=>{}))}async function aJ(){if(I){try{await a0()}catch(g){(0,
o.au)(g);const a=(0,j.XE)(G.path,!1);await B.ShowErrorDialog(await C("StartPage_Save_Error",[a,(0,e.Qo)(g)]))}return}
const a=ac.GetValue().trim(),b=(0,j.KF)(a,null);if(!b)return await B.ShowErrorDialog(await C("NameInvalidCharacter_Error2")),
void ac.Focus();if(b.length>251)return await B.ShowErrorDialog(await C("WrongNameLenght_Error",[(0,p.bf)(251)])),void ac.Focus()
;const c=G.path,d=(0,j.kd)(G.type),f=(0,n.fA)(c)+"/"+b+d;if((0,p.RA)(c,f))au&&aC();else{let c=null;try{
c=await D.GetInfo(f,1,null)}catch(g){if((0,o.au)(g),!(0,o.r5)(g,o.Y$))return void await B.ShowErrorDialog((0,e.Qo)(g))}if(c){
const b=await C("AlreadyExists_Error2",["Item",a]);return await B.ShowErrorDialog(await C("Cmd_Rename_Error",["Item",a,b])),
void ac.Focus()}try{const a=(0,j.em)(G.path);await D.MoveFile(G.path,f,null),au&&aC();aw(await D.GetInfo(f,63,null),H)
;const c=await C("Notification_Item_Renamed_Text",[a,b]);B.ShowNotification(c,null,null)}catch(g){(0,o.au)(g),
await B.ShowErrorDialog((0,e.Qo)(g))}}}function aK(){function a(){ap=M.selectionStart||0}function b(){ab.scrollTop=M.scrollTop}
ae||(ae=!0,J.classList.add("search-pane-shown"),(0,m.l5)(R),(0,m.l5)(ab),aP(),a(),b(),ah||(ah=!0,M.addEventListener("focus",aX),
M.addEventListener("mousedown",aX),M.addEventListener("blur",a),M.addEventListener("scroll",b))),S.focus(),O&&(0,m.SE)(O)}
function aL(){ae=!1,J.classList.remove("search-pane-shown"),(0,m.SE)(R),(0,m.SE)(ab),M.focus(),ag.Cancel(),O&&(0,m.l5)(O)}
function aM(){function a(){aO(),aU()}ae&&!aN()&&(Math.abs(M.scrollHeight-ab.scrollHeight)>2?a():ag.Start((async()=>{a()})))}
function aN(){return ah&&ai===S.value&&ak===aa.GetChecked()&&al===Z.GetChecked()&&aj===a4()}function aO(){if(!ae)return
;if(ai=S.value,aj=a4(),!ai)return void aP();an=[],ak=aa.GetChecked(),al=Z.GetChecked()
;const a="_|-|\\.|\\,|\\!|\\?|\\&|\\@|\\#|\\:|\\;|\\'|\\\"|\\=|\\+|\\$|\\\\|\\*|\\(|\\)|\\`|\\~|\\%|\\^|\\[|\\]|\\{|\\}|\\s",b=al?"(?:^|"+a+")":"",c=al?"(?:$|"+a+")":"",d=ai.replace(/([\\.+*?[^\]$(){}=!<>|:])/g,"\\$1"),e=new RegExp(`${b}${d}${c}`,ak?"":"i")
;let f=aj,g=-1,h=null;for(;null!==(h=e.exec(f))&&void 0!==h.index;)g=g+1+h.index+(al&&h.index>0?1:0),an.push(g),f=aj.slice(g+1)
;0===an.length?((0,m.aZ)(V),(0,m.aZ)(W)):((0,m.r9)(V),(0,m.r9)(W)),(0,m.l5)(T),(0,m.l5)(U),T.textContent=(0,p.bf)(an.length)}
function aP(){S.value="",ai="",an=[],(0,m.SE)(T),(0,m.SE)(U),(0,m.aZ)(V),(0,m.aZ)(W),aW()}function aQ(){if(0===an.length)return
;let a=an[0];for(const b of an)if(b>ap){a=b;break}aV(a,!0)}function aR(){if(0===an.length)return;let a=an[an.length-1]
;for(let b=an.length-1;b>=0;--b)if(an[b]<ap){a=an[b];break}aV(a,!0)}function aS(){af.Start((async()=>{ae&&!aN()&&(aO(),aU(),
function(){let a=an[0];for(const b of an)if(b>=ap){a=b;break}aV(a,!0)}(),"msie"===(0,k.m)()&&(S.focus(),(0,
q.C)((()=>aV(ap,!1)))))}))}function aT(){ah&&""===ai&&""===S.value||aS()}function aU(){if(0===an.length)return void aW()
;const a=aj;aq=null,ao.clear(),ab.textContent="";let b=0,c=0;for(const e of an)e>c&&(c>b&&d(),
ab.appendChild(document.createTextNode(a.slice(c,e))),b=e),c=e+ai.length;function d(){const d=r("span",null,a.slice(b,c))
;ab.appendChild(d),ao.set(b,d)}d(),ab.appendChild(document.createTextNode(a.slice(c,a.length))),
ab.scrollHeight<M.scrollHeight&&(ab.appendChild(r("br",null)),ab.appendChild(r("br",null))),ab.scrollTop=M.scrollTop}
function aV(a,b){aX();const c=a+ai.length;for(let e=an.length-1;e>=0;--e){const b=an[e],d=ao.get(b);if(b<=a&&d){
const e=d.textContent||"";d.textContent="",d.appendChild(document.createTextNode(e.slice(0,a-b))),
aq=document.createElement("i"),aq.textContent=e.slice(a-b,c-b),d.appendChild(aq),
d.appendChild(document.createTextNode(e.slice(c-b,e.length)));break}}if(ap=a,b&&(M.setSelectionRange(a,c),S.focus()),!aq)return
;let d=ab.scrollTop
;aq.offsetTop+aq.offsetHeight+5>ab.scrollTop+ab.offsetHeight?d=aq.offsetTop-ab.offsetHeight+aq.offsetHeight+50:aq.offsetTop-5<ab.scrollTop&&(d=aq.offsetTop-50),
ab.scrollTop=d,M.scrollTop=d}function aW(){ab.textContent=a4(),ao.clear(),aq=null}function aX(){if(aq){
const a=aq.parentElement,b=a.textContent;a.textContent=b}aq=null}function aY(){av||(0,m.PQ)((async()=>{await a0(),a3(!1)
}),aF,0,null,(a=>{const b=(0,j.XE)(G.path,!1);(0,q.fI)((async()=>{await B.ShowErrorDialog(await C("StartPage_Save_Error",[b,(0,
e.Qo)(a)]))})())}))}async function aZ(){if(I){return await a1()}return null}async function a0(){if(I)return void await a1();aC()
;const a=a4();if(void 0===a)return;const b=H.m_note;if(!(0,m.o3)(b,a))return;const c={m_note:a};try{
await D.PutDataItem(G.path,c,null),await s.SetUsageInfo(G.path,0,!0,null),H=c;const a=await C("StartPage_Editor_ChangesSaved")
;B.ShowNotification(a,null,null)}catch(d){(0,o.au)(d);const a=await C("StartPage_Save_Error",[(0,j.XE)(G.path,!1),(0,e.Qo)(d)])
;await B.ShowErrorDialog(a)}}async function a1(){const a=a2().trim(),b=a4();aC();try{(0,j.Hy)(a)}catch(k){
throw await B.ShowErrorDialog(await C("StartPage_Create_Error",[await(0,h.en)(7,A),(0,e.Qo)(k)])),(0,o.JS)()}const c=(0,
j.KF)(a,null);if(!c)throw await B.ShowErrorDialog(await C("NameInvalidCharacter_Error2")),(0,o.JS)();const d=(0,
q.f4)(null,null,null),i=await async function(a,b,c){const d=E||{path:"",type:8},e=(0,f.Sw)(J,(0,f.p)((0,
f.dK)("dialog-modal create-safenote-dialog",C("SaveDlg_NewSafenote_Title2"),null),(()=>t(F&&d||{path:"",type:8},g,A,a,b,y,c))))
;return B.ShowModalDialog(e,null)}(c,b,d);if(i){
const a=await C("StartPage_Editor_ItemCreated",[await C("RoboformType_Safenote")]);B.ShowNotification(a,null,null),
await s.SetUsageInfo(i.path,0,!0,null)}return(0,q.fI)(B.OnCreate(i)),i}function a2(){return au?ac.GetValue():L.textContent||""}
function a3(a){null!==ad&&(a?(0,m.l5)(ad):(0,m.SE)(ad),O&&(a?(aL(),(0,m.SE)(O)):ae||(0,m.l5)(O)))}function a4(){return M.value}
function a5(){const a=H&&H.m_note,b=a4();return(0,m.o3)(a,b)}function a6(a){for(const b of a)switch(b.event){case 8:
if(8===b.type&&b.path&&(0,j.QC)(b.path,G.path)&&!I&&b.to&&b.to.path&&(G.path=G.path.replace(b.path,b.to.path)),
7===b.type&&b.path===G.path&&!I&&b.to&&b.to.path){G.path=b.to.path;const a=(0,j.em)(b.to.path);L.textContent=a,L.title=a,
ac.SetValue(a)}break;case 12:(0,q.fI)((async()=>{const a=await D.GetInfo(G.path,63,null)
;a.favorite!==G.favorite&&(G=Object.assign(Object.assign({},G),{favorite:a.favorite}))})())}}}function t(a,b,c,d,f,h,i){
const k=c.LocalizeString,n=b,q=a.path,s=d,t=f;let u,v=a;const w={Create:async function(a,b){let d,f,h;let w=!1
;const x=await k("NameInvalidCharacter_Error2"),y=await k("WrongNameLenght_Error",[(0,p.bf)(g.RC)]),z=await k("HomeFolder")
;return r("div",{className:"content"},u=(0,l.ap)({title:await k("AdminCenter_Name_Text"),value:s,oninput:function(){D(),B()},
onkeypress:function(a){if(!B())return;if("Enter"!==a.key)return;A()}}),d=r("div",{className:"error-text"}),(0,g.qi)({
OnFolderClick:function(a){if(q===a.path)return;v=a},data_storage:n,home_folder_text:z,localization:c,default_selected:v,
show_groups:!0}),r("div",{className:"buttons-bar"},r("div",{className:"button",onclick:()=>{b((0,o.JS)())}
},await k("Cmd_Cancel_Flat")),h=r("div",{className:s?"button default-button":"button default-button disabled",onclick:A
},await k("Cmd_ApplyChanges_Flat"))),f=r("div",{className:"progress-overlay hidden"}));function A(){if(w)return;D()
;const b=u.GetValue(),c=(0,j.KF)(b,null);c?c.length>g.RC?C(y):(0,m.D$)((async()=>{const b=await async function(a,b){
const c=`${v.path}/${a}.rfn`;let d=null;try{d=await n.GetInfo(c,1,b)}catch(f){(0,o.r5)(f,o.Y$)}
if(d)return C(await k("AlreadyExists_Error2",[await k("RoboformType_Safenote"),a])),null;try{const a={m_note:t}
;await n.PutDataItem(c,a,null);return await n.GetInfo(c,63,null)}catch(f){return C((0,e.Qo)(f)),null}}(c,i);if(b)return a(b)
}),(()=>(D(),w=!0,(0,m.aZ)(h),()=>{w=!1,(0,m.r9)(h)})),g.Ds,E):C(x)}function B(){return u.GetValue()?((0,m.r9)(h),w=!1,!0):((0,
m.aZ)(h),w=!0,!1)}function C(a){(0,g.eX)(d,a),u.SetErrorState(),u.Focus()}function D(){(0,g.eX)(d,""),u.RemoveErrorState()}
function E(){return(0,m.l5)(f),F}function F(){(0,m.SE)(f)}},OnAfterShow:function(){},OnBeforeHide:function(){},Focus:function(){
u.Focus()},Dispose:function(){}};return w}
const u=/^[\s\\/:*?"<>|\r\n\t!@\-^$%~#{}&;+=.]+|[\s\\/:*?"<>|\r\n\t!@\-^$%~#{}&;+=.]+$/g}}]);