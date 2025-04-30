// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[39],{44426:function(a,b,c){c.r(b),c.d(b,{
BookmarkEditorView:function(){return v},BookmarkViewerView:function(){return u}})
;var d=c(87965),e=c(47333),f=c(4601),g=c(65852),h=c(4234),i=c(88579),j=c(62851),k=c(31173),l=c(97490),m=c(32105),n=c(4153),o=c(78440),p=c(63956),q=c(13113),r=c(69893),s=(c(13117),
c(84224)),t=c(91764)._;function u(a,b,c,l,u,v,w,x,y,z,A,B){const C=c,D=A,E=l,F=v,G=x,H=z.LocalizeString
;let I=Object.assign({},a),J=Object.assign({},b);let K,L,M,N,O,P,Q,R,S,T,U,V,W,X=null,Y=null,Z=!1,aa=!1,ab=!1,ac=!1;const ad=(0,
o.tG)(),ae=(0,f.zd)({imageSize:"imgLogo",rfDataItemImages:C,OnSetImage:(a,b)=>(0,f.rd)(a,M,N,b),OnResetImage:()=>{(0,f._K)(M,N)}
});return{Create:async function(b,c){return K=t("div",{className:"editor-view editor-inline editor-bookmark view-mode"
},L=t("div",{className:"editor-content"},M=t("div",{className:"content-header"},t("div",{
className:"header-container "+(y?"tab-view":"")},N=t("div",{className:"header-image"}),t("div",{className:"header-title-pane"
},O=t("div",{className:"header-title"},P=t("span",{className:"title-name",onclick:ai}),Q=t("span",{
className:"title-folder hidden"})),W=(0,m.nM)("hidden",ao,aj,ah)),t("div",{className:"header-actionbar "+(w?"":"hidden")
},t("div",{className:"action-button action-goto",title:await H("StartPage_Login_ActionGoToTip"),onclick:ak},t("div",{
className:"icon"}),t("div",{className:"title"},await H("Cmd_Goto_Flat")))),V=t("div",{className:"editor-cmdbar cmdbar-main"
},a.readOnly?null:t("div",{className:"editor-cmd editor-cmd-edit",title:await H("StartPage_Cmd_Edit"),onclick:al}),R=t("div",{
className:"editor-cmd editor-cmd-more",title:await H("StartPage_MoreActions_Tip"),onmousedown:am,onclick:an}),y?null:t("div",{
className:"editor-cmd editor-cmd-close",title:await H("Cmd_Close_Flat"),onclick:()=>c((0,r.JS)())})),y?t("div",{
className:"editor-cmdbar cmdbar-navigation"},t("div",{className:"editor-cmd editor-cmd-home",
title:await H("StartPage_Cmd_Home"),onclick:()=>{const a={startPage:(0,g.vj)()};(0,o.fI)(v.OpenStartPage(a))}
})):null)),S=t("div",{className:"content-data "+(y?"tab-view":"")},T=t("div",{className:"login-field field-url hidden"
}),U=t("div",{className:"login-field field-note hidden"})))),(0,o.C)((()=>af(I,J))),K},OnAfterShow:function(){
E.onDataChanged.Add(as)},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){ad.Cancel(),E.onDataChanged.Remove(as)}
};function af(b,c){var d;const e=!(0,n.XM)(J,c),f=!(0,n.XM)(I,b);if(e||f||!ac){if((0,p.l5)(L),(0,p.l5)(M),f||!ac){const a=(0,
h.em)(b.path);P.textContent=a,P.title=a;const d=c.m_goto_url||"";d?(0,o.fI)(ae.UpdateBySiteUrl((0,
j.g4)(d,b.matchUrl))):N.classList.add("default-image"),(0,o.fI)(async function(a){if(a){const b=(0,q.$0)(a)||a;let c,d,e
;const f=t("div",{className:"login-field field-url"},t("div",{className:"field-caption"
},await H("PassCard_Field_Url")),t("div",{className:"field-value"},t("div",{className:"text"},c=t("span",{className:"text-value"
},b)),t("div",{className:"inline-onhover-buttons-pane"},d=t("div",{
className:"onhover-button onhover-button-expand"+(b===a?" hidden":""),title:await H("StartPage_Login_ShowFullURL"),
onclick:()=>g(!0)}),e=t("div",{className:"onhover-button onhover-button-collapse hidden",
title:await H("StartPage_Login_HideFullURL"),onclick:()=>g(!1)}),t("div",{className:"onhover-button onhover-button-copy",
title:await H("Editor_Cmd_Copy_Flat"),onclick:h}))));function g(g){g?((0,p.SE)(d),(0,p.l5)(e),f.classList.add("full-url-shown"),
c.textContent=a):((0,p.l5)(d),(0,p.SE)(e),f.classList.remove("full-url-shown"),c.textContent=b)}function h(){var a
;const b=null!==(a=c.textContent)&&void 0!==a?a:"";(0,o.fI)((async()=>{await ap(b),
B.ShowNotification(await H("Notification_URL_Copyied_Text"),null,null)})())}S.replaceChild(f,T),T=f}else(0,p.SE)(T)
}(null!=d?d:"")),(0,o.fI)(ag(b.path))}!e&&ac||(0,o.fI)(async function(b){let c,d,e,f=null;b?f=t("div",{
className:"login-field field-note field-note-row"},t("span",{className:"field-caption"
},await H("AdminCenter_Note_Text")),t("div",{className:"field-value"},t("div",{className:"text"},t("span",{
className:"text-value"},b)),t("div",{className:"inline-onhover-buttons-pane"},t("div",{
className:"onhover-button onhover-button-copy",title:await H("Editor_Cmd_Copy_Flat"),onclick:g})))):b||a.readOnly||(f=t("div",{
className:"login-field field-note"},t("div",{className:"login-field field-note"},t("div",{className:"field-header"},t("span",{
className:"field-caption"},await H("AdminCenter_Note_Text")),c=t("div",{className:"field-buttons hidden"},e=t("div",{
className:"field-btn cancel-btn",tabIndex:-1,onclick:k}),d=t("div",{className:"field-btn save-btn",tabIndex:-1,onclick:l
}))),t("div",{className:"login-field field-with-title field-border"},X=t("textarea",{className:"input-field textarea",
placeholder:await H("Editor_Cmd_AddNote_Flat"),oninput:h,onkeydown:i,onblur:j})))));f&&(S.replaceChild(f,U),U=f);function g(){
(0,o.fI)((async()=>{await ap(b),B.ShowNotification(await H("Notification_Note_Copyied_Text"),null,null)})())}function h(){(0,
p.gJ)((0,n.TT)(X),300),ad.Start((async a=>{await(0,o.Gu)(500,a,!1);(0,n.TT)(X).value.trim()?(0,p.l5)(c):(0,p.SE)(c)}))}
function i(a){a.key===s.U.Escape&&(0,n.TT)(X).blur()}function j(a){if(!(0,n.TT)(X).value.trim())return void(0,p.SE)(c)
;const b=a.relatedTarget;b!==d&&b!==e&&(0,o.fI)((async()=>{const a=await H("AdminCenter_NoteChangeConfirmation_Text")
;await B.ShowConfirmationDialog(await H("AdminCenter_SaveChanges_Text"),a,await H("AdminCenter_ConfirmationDialog_DontSave"),await H("AdminCenter_ConfirmationDialog_Save"))?l():k()
})())}function k(){(0,n.TT)(X).value="",(0,n.TT)(X).style.height="auto",(0,p.SE)(c)}function l(){var a;const b=(0,
n.TT)(X).value.trim();if(!b)return void(0,p.SE)(c);const d={m_goto_url:null!==(a=J.m_goto_url)&&void 0!==a?a:"",m_note:b};(0,
p.D$)((async()=>{try{await E.PutDataItem(I.path,d,null),await u.SetUsageInfo(I.path,0,!0,null),af(I,d),(0,p.SE)(c),
B.ShowNotification(await H("Notification_Changes_Saved_Text"),null,null)}catch(a){}}),(()=>((0,p.aZ)((0,n.TT)(X)),()=>{(0,
p.r9)((0,n.TT)(X))})),300,(()=>((0,p.aZ)((0,n.TT)(X)),()=>{(0,p.r9)((0,n.TT)(X))})))}
}(null!==(d=c.m_note)&&void 0!==d?d:"",b.readOnly)),I=Object.assign({},b),J=Object.assign({},c),ac=!0}}async function ag(a){
const b=(0,q.fA)(a);if(""===b)return(0,p.SE)(Q),void O.classList.remove("folder-shown")
;const c=await H("StartPage_HomeFolder")+b;Q.textContent=c,Q.title=c,O.classList.add("folder-shown"),(0,p.l5)(Q)}function ah(){
const a=W.GetValue().trim().toLowerCase(),b=(0,q.HE)((0,q._p)(I.path));(0,n.RA)(a,b)?aj():(0,o.fI)((async()=>{
const a=await H("AdminCenter_BookmarkRenameConfirmation_Text")
;await B.ShowConfirmationDialog(await H("AdminCenter_SaveChanges_Text"),a,await H("AdminCenter_ConfirmationDialog_DontSave"),await H("AdminCenter_ConfirmationDialog_Save"))?ao():aj()
})())}function ai(){(0,p.SE)(O),W.SetValue((0,h.em)(I.path)),W.Show(),aa=!0}function aj(){W.Hide(),(0,p.l5)(O),aa=!1}
function ak(){const a=J.m_goto_url;if(!a)return;if((0,i.HB)(J.m_goto_url)){if(G)return}else{if(a&&(0,k.oK)(a))return void(0,
o.fI)((async()=>{B.ShowNotification(await H("CannotOpenUrlForSecurityReasons"),5,2)})())}(0,o.fI)(F.GoTo(I.path,{newTab:!0,
dontAddToRecentlyUsedAndLogs:4===I.type}))}function al(){Z||(0,p.D$)((async()=>{const a=(0,
o.f4)(null,null,null),b=await E.GetDataItem(I.path,4,null,a);await B.ShowDataEditModeInDetailsPane(I,b,!1,a)
}),(()=>()=>{}),0,null)}function am(a){Z||ab&&a.stopPropagation()}function an(){Z||(ab?Y&&(Y.Hide(),Y=null):function(){ab=!0
;const a=null==R?void 0:R.getBoundingClientRect(),b=new DOMRect(a.left+20,a.bottom-10,0,0);async function c(){
return await B.GetBookmarkCommands(I,ai)}function e(){const a=(0,d.NI)(R);return a.onHide=g,a.onShow=f,a}function f(){ab=!0}
function g(){ab=!1}Y=(0,d.Lj)(b,(()=>c()),e(),(function(){return R.getBoundingClientRect()}),((a,b)=>(0,o.fI)(a(b,(0,
o.f4)(null,null,null)))))}())}function ao(){(0,p.PQ)((async()=>{const a=W.GetValue().trim(),b=(0,h.KF)(a,null)
;if(!b)return await B.ShowErrorDialog(await H("NameInvalidCharacter_Error2")),void W.Focus()
;if(b.length>251)return await B.ShowErrorDialog(await H("WrongNameLenght_Error",[(0,n.bf)(251)])),void W.Focus()
;const c=I.path,d=(0,h.kd)(I.type),f=(0,q.fA)(c)+"/"+b+d;if((0,n.RA)(c,f))aa&&aj();else{let c=null;try{
c=await E.GetInfo(f,1,null)}catch(g){if(!(0,r.r5)(g,r.Y$))return void await B.ShowErrorDialog((0,e.Qo)(g))}if(c){
const b=await H("AlreadyExists_Error2",["Item",a]);return await B.ShowErrorDialog(await H("Cmd_Rename_Error",["Item",a,b])),
void W.Focus()}try{await E.MoveFile(I.path,f,null);const a=(0,h.em)(I.path);aa&&aj();af(await E.GetInfo(f,63,null),J)
;const c=await H("Notification_Item_Renamed_Text",[a,b]);B.ShowNotification(c,null,null)}catch(g){await B.ShowErrorDialog((0,
e.Qo)(g))}}}),aq,0,null,(a=>()=>{}))}async function ap(a){await D.WriteText(a)}function aq(){return(0,p.aZ)(V),Z=!0,
W.Enable(!1),X&&(0,p.aZ)(X),ar}function ar(){(0,p.r9)(V),Z=!1,W.Enable(!0),X&&(0,p.r9)(X)}function as(a){
for(const b of a)switch(b.event){case 8:
if(8===b.type&&b.path&&(0,h.QC)(b.path,I.path)&&b.to&&b.to.path&&(I.path=I.path.replace(b.path,b.to.path),(0,o.fI)(ag(I.path))),
2===b.type&&b.path===I.path&&b.to&&b.to.path){I.path=b.to.path;const a=(0,h.em)(b.to.path);P.textContent=a,P.title=a,
W.SetValue(a),(0,o.fI)(ag(I.path))}break;case 12:(0,o.fI)((async()=>{const a=await E.GetInfo(I.path,63,null)
;a.favorite!==I.favorite&&(I=Object.assign(Object.assign({},I),{favorite:a.favorite}))})())}}}function v(a,b,c,d,g,i,k,s,u){
const v=c,w=d,x=g,y=u.LocalizeString;let z=Object.assign({},a),A=Object.assign({},b);const[B,C]=(0,l.Uw)((0,
h.em)(z.path)),[D,E]=(0,l.Uw)(!1),[F,G]=(0,l.Uw)(!1),[H,I]=(0,l.Uw)(!0),[J,K]=(0,l.Uw)("");let L,M,N,O,P;const Q=(0,o.tG)()
;let R;R=k?(0,f.zd)({imageSize:"imgLogo",rfDataItemImages:w,OnSetImage:(a,b)=>(0,f.rd)(a,L,M,b),OnResetImage:()=>{(0,f._K)(L,M)}
}):(0,f.zd)({imageSize:"img32",imageSizeForBackground:"imgLogo",rfDataItemImages:w,OnSetImage:(a,b)=>{const c={}
;return c.imgLogo={url:b.img32.url,background:b.img32.background,size:b.img32.size},(0,f.rd)("imgLogo",L,M,c)},
OnResetImage:()=>{(0,f._K)(L,M)}});let S="";const T={Create:async function(a,b){var c,d
;return S=await y("WrongUrlFormat_Error"),t("div",{className:"editor-view editor-inline editor-bookmark edit-mode"},t("div",{
className:"editor-content"},L=k?t("div",{className:"content-header seperate-tab"},t("div",{className:"header-container tab-view"
},M=t("div",{className:"header-image"}),t("div",{className:"header-title-pane"},e()))):t("div",{className:"content-header"
},t("div",{className:"header-title-pane"},M=t("div",{className:"header-image"}),e()),(async a=>D(a)?[]:t("div",{
className:"editor-cmdbar cmdbar-main"},t("div",{className:"editor-cmd editor-cmd-close",title:await y("Cmd_ApplyChanges_Flat"),
onclick:g})))),t("div",{className:"buttons-bar"},k?t("div",{className:"buttons-container"},t(f,null)):t(f,null)),t("div",{
className:"fields-list "+(k?"tab-view":"")},O=(0,m.ap)({title:await y("AdminCenter_GoToUrl_Text"),
value:null!==(c=A.m_goto_url)&&void 0!==c?c:"",oninput:ac}),(a=>t("div",{className:"error-text"},J(a))),P=(0,m.fs)({
title:await y("AdminCenter_Note_Text"),value:null!==(d=A.m_note)&&void 0!==d?d:"",oninput:ad,resizable_heigth:!0,max_height:300
})),(a=>F(a)?t("div",{className:"loading-progress"}):[])));function e(){return b=>{const c=B(b),d=D(b);return d&&(0,o.C)((()=>{
N.SetValue(c),N.Focus()})),d?N=(0,m.nM)("",W,aa,X):t("div",{className:"header-title"},t("span",{className:"title-name",title:c,
onclick:a},c))};function a(){L.classList.add("inplace-rename"),E(!0)}}function f(){return t("fragment",null,t("button",{
className:"button",onclick:function(){v&&b((0,r.JS)());(0,p.PQ)((async()=>{if(ah())await Y(!0);else{const a=(0,
o.f4)(null,null,null),b=await x.GetDataItem(z.path,4,null,a);await s.ShowDataViewModeInDetailsPane(z,b,!1,a)}
}),(()=>()=>{}),0,null,(a=>{(0,r.au)(a),(0,r.r5)(a,r.kd)||s.ShowNotification((0,r.EB)(a),null,2)}))}
},y("Cmd_Cancel_Flat")),(a=>{const b=H(a);return t("button",{
className:b?"button default-button disabled":"button default-button",onclick:b?null:()=>Z(!0)},y("Cmd_ApplyChanges_Flat"))}))}
function g(){(0,o.fI)((async()=>{await Y(!1),b((0,r.JS)())})())}},OnAfterShow:function(){x.onDataChanged.Add(ai),
document.addEventListener("keydown",V),window.addEventListener("beforeunload",U)},OnBeforeHide:function(){},Focus:function(){
O.Focus(),P.Resize(),(0,o.fI)(R.UpdateBySiteUrl((0,j.g4)(A.m_goto_url,z.matchUrl)))},Dispose:function(){Q.Cancel(),
x.onDataChanged.Remove(ai),document.removeEventListener("keydown",V),window.removeEventListener("beforeunload",U)}};return T
;function U(a){if(ah()){const b="RoboForm file was changed. Do you want to save changes?";return(a||window.event).returnValue=b,
b}}function V(a){a.ctrlKey&&"KeyS"===a.code&&(a.preventDefault(),a.stopPropagation(),Z(!1))}function W(){(0,p.PQ)((async()=>{
const a=N.GetValue().trim(),b=(0,h.KF)(a,null);if(!b)return await s.ShowErrorDialog(await y("NameInvalidCharacter_Error2")),
void N.Focus();if(b.length>251)return await s.ShowErrorDialog(await y("WrongNameLenght_Error",[(0,n.bf)(251)])),void N.Focus()
;const c=z.path,d=(0,h.kd)(z.type),f=(0,q.fA)(c)+"/"+b+d;if((0,n.RA)(c,f))D(null)&&aa();else{let c=null;try{
c=await x.GetInfo(f,1,null)}catch(g){if(!(0,r.r5)(g,r.Y$))return void await s.ShowErrorDialog((0,e.Qo)(g))}if(c){
const b=await y("AlreadyExists_Error2",["Item",a]);return await s.ShowErrorDialog(await y("Cmd_Rename_Error",["Item",a,b])),
void N.Focus()}try{const a=(0,h.em)(z.path);await x.MoveFile(z.path,f,null),D(null)&&aa();!function(a,b){!(0,n.XM)(z,a)&&(C((0,
h.em)(a.path)),z=Object.assign({},a),A=Object.assign({},b),P.Resize(),(0,o.fI)(R.UpdateBySiteUrl((0,
j.g4)(b.m_goto_url||"",a.matchUrl))))}(await x.GetInfo(f,63,null),A);const c=await y("Notification_Item_Renamed_Text",[a,b])
;s.ShowNotification(c,null,null)}catch(g){throw(0,r.ZU)(r.V2,(0,r.EB)(g))}}}),ae,300,ag,(a=>{(0,r.au)(a),(0,
o.fI)(s.ShowErrorDialog((0,e.Qo)(a)))}))}function X(){const a=N.GetValue().trim().toLowerCase(),b=(0,q.HE)((0,q._p)(z.path));(0,
n.RA)(a,b)?aa():(0,o.fI)((async()=>{const a=await y("AdminCenter_BookmarkRenameConfirmation_Text")
;await s.ShowConfirmationDialog(await y("AdminCenter_SaveChanges_Text"),a,await y("AdminCenter_ConfirmationDialog_DontSave"),await y("AdminCenter_ConfirmationDialog_Save"))?W():aa()
})())}async function Y(a){if(!ah())return
;const b=await y("StartPage_Editor_CloseChangesConfirm",[await y("RoboformType_Bookmark")])
;await s.ShowConfirmationDialog(await y("AdminCenter_SaveChanges_Text"),b,await y("AdminCenter_ConfirmationDialog_DontSave"),await y("AdminCenter_ConfirmationDialog_Save"))&&Z(a)
}function Z(a){const b=P.GetValue(),c=function(){const a=O.GetValue()||"",b=(0,q.OZ)(a,!1)||"";a!==b&&O.SetValue(b);return b}()
;if(!c)return K(S),O.SetErrorState(),void O.Focus();const d={m_goto_url:c,m_note:b};(0,p.PQ)((async()=>{
await x.PutDataItem(z.path,d,null),
await i.SetUsageInfo(z.path,0,!0,null),s.ShowNotification(await y("Notification_Changes_Saved_Text"),null,null);const b=(0,
o.f4)(null,null,null),e=Object.assign({},z);e.gotoUrl=c,a?await s.ShowDataViewModeInDetailsPane(e,d,!1,b):A=Object.assign({},d)
}),ae,300,ag,(a=>{(0,r.au)(a),s.ShowNotification((0,r.EB)(a),null,2)}))}function aa(){L.classList.remove("inplace-rename"),E(!1)
}function ab(){var a;const b=O.GetValue(),c=P.GetValue();I((0,n.RA)(b,A.m_goto_url)&&c===(null!==(a=A.m_note)&&void 0!==a?a:""))
}function ac(){K(""),O.RemoveErrorState(),ab()}function ad(){Q.Start((async a=>{await(0,o.Gu)(500,a,!1),ab()}))}function ae(){
return O.Enable(!1),(0,p.aZ)(P),I(!0),af}function af(){O.Enable(!0),(0,p.r9)(P),ab()}function ag(){return G(!0),()=>G(!1)}
function ah(){return(0,p.o3)(A.m_goto_url,O.GetValue().trim())||(0,p.o3)(A.m_note,P.GetValue().trim())}function ai(a){
for(const b of a)if(8===b.event)8===b.type&&b.path&&(0,
h.QC)(b.path,z.path)&&b.to&&b.to.path&&(z.path=z.path.replace(b.path,b.to.path)),
2===b.type&&b.path===z.path&&b.to&&b.to.path&&(z.path=b.to.path,C((0,h.em)(b.to.path)))}}}}]);