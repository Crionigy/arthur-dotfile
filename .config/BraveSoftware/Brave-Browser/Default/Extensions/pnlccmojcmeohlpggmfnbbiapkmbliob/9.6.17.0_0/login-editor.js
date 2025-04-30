// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[864],{361:function(a,b,c){c.r(b),c.d(b,{
LoginEditorView:function(){return F},LoginViewerView:function(){return E}})
;var d=c(53166),e=c(98266),f=c(87965),g=c(30045),h=c(47333),i=c(19380),j=c(4601),k=c(41107),l=c(65852),m=c(4234),n=c(45638),o=c(88579),p=c(78949),q=c(62851),r=c(55493),s=c(31173),t=c(32105),u=c(63956),v=c(58605),w=c(95399),x=c(13113),y=c(73863),z=c(4153),A=c(78440),B=c(97490),C=c(69893),D=(c(13117),
c(91764)._);function E(a,b,c,e,E,F,J,K,M,N,O,P,Q,R,S,T,U,V){
const W=c,X=U,Y=e,Z=J,aa=K,ab=M,ac=N,ad=E,ae=P,af=Q,ag=T.LocalizeString;let ah=a,ai=b,aj=!1;const ak=ad
;let al,am,an,ao,ap,aq,ar,as,at,au,av=null;const aw=[]
;let ax,ay,az,aA=null,aB=null,aC=null,aD=null,aE=null,aF=null,aG=!1,aH=!1,aI=!1
;const aJ=new Set([1]),aK=new Set([11,10,14,8,9,3,2,12,7,13]),[aL,aM]=(0,B.Uw)(0);let aN=!1,aO=null;const aP=(0,j.zd)({
imageSize:"imgLogo",rfDataItemImages:W,OnSetImage:(a,b)=>(0,j.rd)(a,am,an,b),OnResetImage:()=>{(0,j._K)(am,an)}
}),aQ=window.ResizeObserver?new ResizeObserver((()=>aU())):null;return{Create:async function(c,d){const e=!af&&4!==ah.type
;return al=D("div",{className:"editor-view editor-inline editor-login view-mode"},D("div",{className:"editor-content"
},am=D("div",{className:"content-header"},D("div",{className:"header-container "+(R?"tab-view":"")},an=D("div",{
className:"header-image"}),D("div",{className:"header-title-pane"},ao=D("div",{className:"header-title"},ap=D("div",{
className:"title-name",onclick:aZ}),aq=D("div",{className:"title-folder hidden"})),az=(0,t.nM)("hidden",a2,a0,a1)),D("div",{
className:"header-actionbar "+(O?"":"hidden")},e?D("div",{className:"action-button action-login",
title:await ag("StartPage_Login_ActionLogInTip"),onclick:()=>(0,A.fI)(aV())},D("div",{className:"icon"}),D("div",{
className:"title"},await ag("Cmd_Login_Flat"))):null,e?D("div",{className:"action-button action-gofill",
title:await ag("StartPage_Login_ActionGoFillTip"),onclick:()=>(0,A.fI)(async function(){const a=ai.m_goto_url;if(!a)return
;if((0,o.HB)(ai.m_goto_url)){if(ae)return}else{
if(a&&(0,s.oK)(a))return void V.ShowNotification(await ag("CannotOpenUrlForSecurityReasons"),5,2)}await Z.GoFillSubmit({
navigate:!0,path:ah.path,submit:!1,newTab:!0},null)}())},D("div",{className:"icon"}),D("div",{className:"title"
},await ag("Cmd_GoFill_Flat"))):null,D("div",{className:"action-button action-goto",
title:await ag("StartPage_Login_ActionGoToTip"),onclick:()=>(0,A.fI)(async function(){const a=ai.m_goto_url;if(!a)return;if((0,
o.HB)(ai.m_goto_url)){if(ae)return}else{
if(a&&(0,s.oK)(a))return void V.ShowNotification(await ag("CannotOpenUrlForSecurityReasons"),5,2)}await Z.GoTo(ah.path,{
newTab:!0,dontAddToRecentlyUsedAndLogs:4===ah.type})}())},D("div",{className:"icon"}),D("div",{className:"title"
},await ag("Cmd_Goto_Flat")))),D("div",{className:"editor-cmdbar cmdbar-main"},a.readOnly?null:D("div",{
className:"editor-cmd editor-cmd-edit",title:await ag("StartPage_Cmd_Edit"),onclick:()=>{(0,u.D$)((async()=>{const a=(0,
A.f4)(null,null,null),b=await ak.GetDataItem(ah.path,4,null,a);await V.ShowDataEditModeInDetailsPane(ah,b,!1,a)
}),(()=>()=>{}),0,null)}}),ar=D("div",{className:"editor-cmd editor-cmd-more",title:await ag("StartPage_MoreActions_Tip"),
onmousedown:aW,onclick:aX}),R?null:D("div",{className:"editor-cmd editor-cmd-close",title:await ag("Cmd_Close_Flat"),
onclick:()=>d((0,C.JS)())})),R?D("div",{className:"editor-cmdbar cmdbar-navigation"},D("div",{
className:"editor-cmd editor-cmd-home",title:await ag("StartPage_Cmd_Home"),onclick:()=>{const a={startPage:(0,l.vj)()};(0,
A.fI)(J.OpenStartPage(a))}})):null)),as=D("div",{className:"content-data "+(R?"tab-view":"")},at=D("div",{
className:"login-field field-url hidden"}),au=D("div",{className:"data-fields hidden"}),aD=L()?D("div",{
className:"login-field field-totp-key hidden"}):null,(async c=>{const d=aL(c);return 0===d?D("div",{
className:"security-warning hidden"}):D("div",{className:"security-warning"},D("div",{className:"security-warning-pane"
},D("div",{className:"title"},D("div",{className:"icon"
}),(0,z.XL)(d,[[1,3],()=>ag("LoginIsCompromised_Notification_Title")],[2,()=>ag("LoginIsCompromised_EmailBreach_Title")])),D("div",{
className:"message"},(async()=>{var c
;if(1===d||3===d)return D("fragment",null,await ag("LoginIsCompromised_Notification_Message2")," ",D("a",{
className:"link learn-more",target:"_blank",href:"https://help.roboform.com/hc/articles/360060772192",
title:await ag("PassAud_TabCompromised_Description_Part1")},ag("LearnMore")))
;const e=(null===(c=b.m_fields.find((a=>a.m_name===m.Df)))||void 0===c?void 0:c.m_value)||""
;return ag("LoginIsCompromised_EmailBreach_Message",[(0,m.em)(a.path),e])}),D("br",null),D("br",null),D("div",{
className:"buttons-bar"},(()=>{var a;if(1===d||3===d)return D("fragment",null,D("button",{className:"button cta-btn",
onclick:()=>(0,A.fI)(aV())},ag("LoginToChangePassword_Button")),!S&&D("button",{className:"button secondary-btn",
onclick:V.OpenSecurityCenter},ag("OpenSecurityCenter_Button")))
;const c=(null===(a=b.m_fields.find((a=>a.m_name===m.Df)))||void 0===a?void 0:a.m_value)||"";return D("button",{
className:"button cta-btn",onclick:()=>V.OpenDataBreachMonitoring([c])},ag("EmailBreach_ViewReport"))})))))}),ax=D("div",{
className:"passkey-fields hidden"}),aC=L()?D("div",{className:"login-field field-totp-key add-totp hidden"}):null,ay=D("div",{
className:"login-field field-note hidden"})))),(0,A.C)((()=>{aR(ah,ai),null==aQ||aQ.observe(au)})),al},OnAfterShow:function(){
ak.onDataChanged.Add(a3)},OnBeforeHide:function(){},Focus:function(){},Dispose:function(){null==aQ||aQ.disconnect(),
ak.onDataChanged.Remove(a3)}};function aR(a,b){(0,u.PQ)((async()=>{var c,d;const e=!(0,z.XM)(ai,b),f=!(0,z.XM)(ah,a);(0,
u.l5)(am),(0,k.BC)((0,m.em)(a.path),ap),(0,A.fI)(aP.UpdateBySiteUrl((0,q.g4)(b.m_goto_url||"",b.m_match_url))),
await async function(a){if(a){const b=function(a){if(0!==a.search(/^(.*:\/\/)/))return!1;const b=(0,x.vN)(a)
;if(null===b||!b.m_host)return!1;let c="";c=void 0===b.m_port||80===b.m_port||443===b.m_port?b.m_host:`${b.m_host}:${b.m_port}`
;c.length>2&&'"'===c[0]&&'"'===c[c.length-1]&&(c=c.substring(1,c.length-1));return c}(a)||a;let c,d,e;const f=D("div",{
className:"login-field field-url"},D("div",{className:"field-caption"},ag("PassCard_Field_Url")),av=D("div",{
className:"field-value"},D("div",{className:"text"},c=D("span",{className:"text-value"},b)),D("div",{
className:"inline-onhover-buttons-pane"},d=D("div",{className:"onhover-button onhover-button-expand"+(b===a?" hidden":""),
title:await ag("StartPage_Login_ShowFullURL"),onclick:()=>{(0,u.SE)(d),(0,u.l5)(e),f.classList.add("full-url-shown"),
c.textContent=a}}),e=D("div",{className:"onhover-button onhover-button-collapse hidden",
title:await ag("StartPage_Login_HideFullURL"),onclick:()=>{(0,u.l5)(d),(0,u.SE)(e),f.classList.remove("full-url-shown"),
c.textContent=b}}),D("div",{className:"onhover-button onhover-button-copy",title:await ag("Editor_Cmd_Copy_Flat"),onclick:g}))))
;function g(){var a;const b=null!==(a=c.textContent)&&void 0!==a?a:"";(0,A.fI)((async()=>{await aY(b),
V.ShowNotification(await ag("Notification_URL_Copyied_Text"),null,null)})())}as.replaceChild(f,at),at=f}else(0,u.SE)(at)
}(b.m_goto_url||""),await aS(a.path),(e||f||!aj)&&(await async function(a){if(aM(0),
1!==a.type||a.readOnly||a.hidePasswords||!ab||!ac)return;try{
if(!await ab.GetSecurityWarningEnabledForDataItem(a.path,[0],null))return
;const b=await ac.GetUpdateUserDataItemBreaches(a.path,null);if(b&&b.m_breaches.length>0){let a=!1,c=!1
;for(const d of b.m_breaches)aJ.has(d.m_type)?a=!0:aK.has(d.m_type)&&(c=!0);a?aM(c?3:1):c&&aM(2)}}catch(b){return}}(a),
await async function(a,b){const c=b.m_fields||[];(0,u.rK)(au),(0,u.SE)(au);let d=null,e=!1;for(let g=0;g<c.length;g++){
const f=c[g],h=f.m_type;if(3===h||4===h||5===h)continue;const i=I(a.type,f);if(i.serviceField)continue;const j=f.m_value
;if(!j||j===m.AN)continue;i.userIdField&&(d=j);const k=await aT(g,a,b,f,i);au.appendChild(k),e=!0}const f=(0,m.OG)(b);if(f){
const a=(0,r.cr)(f),b=null==a?void 0:a.p[0],c=null==b?void 0:b.u;c&&!d&&(au.appendChild(D("div",{className:"login-field"
},D("div",{className:"field-caption"},await ag("PassCards_UserId")),D("div",{className:"field-value"},D("div",{className:"text"
},D("span",{className:"text-value"},c)),D("div",{className:"onhover-button onhover-button-copy visible-copy",
title:await ag("Editor_Cmd_Copy_Flat"),onclick:()=>{(0,A.fI)((async()=>{await aY(c),
V.ShowNotification(await ag("PassCards_UserId"),null,null)})())}})))),e=!0)}e&&(0,u.l5)(au)}(a,b),(0,A.C)(aU)),
!e&&aj||(await async function(a,b){if(b){if(aN=!1,!a)return void(0,u.SE)(ay)}else aj||(aN=!a);if(!aN){const b=D("div",{
className:"login-field field-note field-note-row"},D("div",{className:"field-caption"},await ag("PassCards_Note")),aE=D("div",{
className:"field-value"},D("div",{className:"text"},D("span",{className:"text-value"},(0,t.cC)(a))),D("div",{
className:"inline-onhover-buttons-pane"},D("div",{className:"onhover-button onhover-button-copy",
title:await ag("Editor_Cmd_Copy_Flat"),onclick:j}))));return as.replaceChild(b,ay),void(ay=b)}let d,e,f,g,h;const i=D("div",{
className:"login-field field-note"},D("div",{className:"field-header"},D("div",{className:"field-caption"
},await ag("PassCards_Note")),d=D("div",{className:"field-buttons hidden"},f=D("div",{onclick:p,
className:"field-btn cancel-btn",tabIndex:-1}),e=D("div",{onclick:o,className:"field-btn save-btn",tabIndex:-1}))),h=D("div",{
className:"login-field field-with-title field-border"},g=D("textarea",{className:"input-field textarea",value:a,oninput:k,
onblur:a=>(0,A.fI)(n(a)),placeholder:await ag("Editor_Cmd_AddNote_Flat"),required:!0})));as.replaceChild(i,ay),ay=i,a&&(0,
A.C)(l);function j(){(0,A.fI)((async()=>{await aY(a),V.ShowNotification(await ag("Notification_Note_Copyied_Text"),null,null)
})())}function k(){(0,A.C)(l),m()}function l(){const a=g.cloneNode(!0);a.style.position="absolute",a.style.top="-1000px",
a.style.left="-1000px",a.style.height="auto",h.appendChild(a);const b=a.scrollHeight;h.removeChild(a),g.style.height=(0,s.Md)(b)
}function m(){a!==g.value?(0,u.l5)(d):(0,u.SE)(d)}async function n(b){if((0,y.hG)(a)===g.value)return;const d=b.relatedTarget
;if(d===e||d===f)return;const h=await ag("AdminCenter_NoteChangeConfirmation_Text");try{
await V.ShowConfirmationDialog(await ag("AdminCenter_SaveChanges_Text"),h,await ag("AdminCenter_ConfirmationDialog_DontSave"),await ag("AdminCenter_ConfirmationDialog_Save"))?o():p()
}catch(c){g.focus()}}function o(){const a=g.value.trim();if(!a)return void(0,u.SE)(d);const b=Object.assign({},ai);b.m_note=a,
(0,u.D$)((async()=>{try{await ak.PutDataItem(ah.path,b,null),aR(ah,b),await F.SetUsageInfo(ah.path,0,4!==ah.type,null),(0,
u.SE)(d),V.ShowNotification(await ag("Notification_Changes_Saved_Text"),null,null)}catch(a){}}),(()=>((0,u.aZ)(g),()=>{(0,
u.r9)(g)})),300,(()=>((0,u.aZ)(g),()=>{(0,u.r9)(g)})))}function p(){g.value=a||"",(0,u.SE)(d),l()}
window.addEventListener("resize",(()=>{l()}))}(null!==(c=b.m_note)&&void 0!==c?c:"",null!==(d=a.readOnly)&&void 0!==d&&d),
await async function(a){var b,c;(0,u.rK)(ax);const d=(0,m.OG)(a);if(!d)return void(0,u.SE)(ax);const e=(0,
r.cr)(d),f=null!==(b=await T.GetLanguageTag(null))&&void 0!==b?b:"en",g=await ag("Passkey_Title")
;for(const h of null!==(c=null==e?void 0:e.p)&&void 0!==c?c:[null])if(h){const a=h.cr;ax.appendChild(D("div",{
className:"login-field passkey-field"},D("div",{className:"passkey-icon"},D("div",{className:"passkey-icon-content"})),D("div",{
className:"passkey-info"},D("div",{className:"passkey-title"},(null==h?void 0:h.n)||(null==h?void 0:h.d)||g),D("div",{
className:"passkey-text"},a?D("span",null,await ag("Passkey_CreatedAt",[(0,w.BL)(a,f)])):null))))}else ax.appendChild(D("div",{
className:"login-field passkey-field"},D("div",{className:"passkey-icon"},D("div",{className:"passkey-icon-content"})),D("div",{
className:"passkey-info"},D("div",{className:"passkey-title"},await ag("Passkey_Title")),D("div",{className:"passkey-text"
},await ag("Passkey_CannotDecode")))));(0,u.l5)(ax)}(b)),function(a,b){var c;if(!aD||!aC)return;if(1!==a.type)return void f()
;const d=(0,m.JG)(b);if(a.readOnly&&!d)return void f();const e=d?(0,i.Re)({localization:T,totpKey:d,
readonly:null!==(c=a.readOnly)&&void 0!==c&&c,editMode:!1},{GenerateTOTPCode:async a=>(0,v._b)(a),OnRemoveTOTPKey:()=>{},
OnCopyTOTPCode:a=>{(0,A.fI)((async()=>{await aY(a),V.ShowNotification(await ag("Login_OneTimeCode_Copied_Text"),null,null)})())
},OnCopyTOTPSetupKey:()=>{const a=(0,m.JG)(b);a&&(0,A.fI)((async()=>{await aY(a),
V.ShowNotification(await ag("Login_OneTimeCode_SetupKey_Copied_Text"),null,null)})())},OnReplaceTOTPKey:()=>null}):(0,
g._3)((async()=>(0,i.XC)(T,(()=>{(0,A.fI)((async()=>{await(0,i.N6)((0,o.pK)(ai.m_goto_url).toLowerCase(),T,(0,
z.TT)(al),X,(async(a,b)=>{const c=(0,m.O4)(a,ai);await ak.PutDataItem(ah.path,c,null),aR(ah,c),
V.ShowNotification(await ag("Login_OneTimeCode_AuthKeyAdded_Notification",[(0,m.em)(ah.path)]),null,null),b()}))})())}),(()=>{
(0,A.fI)(Y.OpenUrl({url:h.K9,newTab:!0},null))}))));function f(){aD&&((0,u.SE)(aD),(0,u.rK)(aD)),aC&&((0,u.SE)(aC),(0,
u.rK)(aC)),null==aO||aO.OnBeforeHide(),null==aO||aO.Dispose(),aO=null}(0,A.fI)((async()=>{f()
;const a=await e.Create((()=>{}),(()=>{}));d?(aD.appendChild(a),(0,u.l5)(aD)):(aC.appendChild(a),(0,u.l5)(aC)),e.OnAfterShow(),
aO=e})())}(a,b),(0,A.C)(aU),ah=a,ai=b,aj=!0}),(()=>(az.Enable(!1),()=>{az.Enable(!0)})),0,null,(a=>()=>{}))}
async function aS(a){const b=(0,x.fA)(a);if(""===b)return(0,u.SE)(aq),void ao.classList.remove("folder-shown")
;const c=await ag("StartPage_HomeFolder")+b;aq.textContent=c,aq.title=c,ao.classList.add("folder-shown"),(0,u.l5)(aq)}
async function aT(a,b,c,e,f){const g=H(e),h=await G(e,T),i=e.m_value||"";let j,l;if(g){let b,f,g,q,r;j=D("div",{
className:"secret-field"},D("div",{className:"login-field field-id-"+(0,z.bf)(a)},D("div",{className:"field-caption"
},h),l=D("div",{className:"field-value"},D("div",{className:"text"},b=D("span",{className:"text-value"},(0,k.Ss)())),D("div",{
className:"inline-onhover-buttons-pane password-pane-container"},f=D("div",{
className:"onhover-button onhover-button-show-secrete",title:await ag("StartPage_Login_ShowPasswordTip"),onclick:()=>{(0,
u.SE)(f),(0,u.l5)(g),(0,u.rK)(b),b.appendChild((0,t.cC)(i))}}),g=D("div",{
className:"onhover-button onhover-button-hide-secrete hidden",title:await ag("StartPage_Login_HidePasswordTip"),onclick:()=>{(0,
u.SE)(g),(0,u.l5)(f),b.textContent=(0,k.Ss)()}})),D("div",{className:"onhover-button onhover-button-copy visible-copy",
title:await ag("Editor_Cmd_Copy_Flat"),onclick:m})),q=D("div",{className:"security-score"},r=D("div",{
className:"security-password-strength"}),D("div",{className:"security-password-expand-handler"})))),r.classList.add("loading"),
(0,A.fI)((async()=>{const a=await V.GetDataLoginPasswordStrength(i);if(null!==a){
const b=await V.GetTextByPasswordStrength(a),f=(0,d.jp)(a);r.classList.remove("loading"),r.textContent=b,r.classList.add(f)
;const g=aL(null);2===g&&(0,u.SE)(q);const h=1===g||3===g;j.classList.add(h?"compromised":f)
;const l=await ag("CL_Password_Strength");r.title=`${l}: ${b}`,h&&aB&&(aB.remove(),aB=null,aI=!1);const m=(0,n.G)(c)
;function s(){aB&&(j.classList.add("strength-details-shown"),(0,u.l5)(aB),aI||(0,k.wz)(aB,300,null),aI=!0)}function t(){
aB&&(j.classList.remove("strength-details-shown"),aI?(0,k.bV)(aB,300,(()=>{(0,u.SE)((0,z.TT)(aB))})):(0,u.SE)((0,z.TT)(aB)),
aI=!1)}h||null!==aB||m.password!==e.m_value||(j.classList.add("password-details-enabled"),(0,A.fI)((async()=>{var a
;const b=await aa.GetUpdatePasswordStrengthInfo(null!==(a=m.password)&&void 0!==a?a:"",null);aB=await async function(a){
const b=a.strength,c=a.complexity,d=a.complexity-a.strength,e=(0,p.AY)(b),f=D("span",{className:"link",onclick:()=>(0,
A.fI)(aV())},await ag("LoginIsCompromised_Notification_Login_Hint_Login")),g=D("span",{className:"domain"},(0,
o.pK)(ai.m_goto_url||"").toLowerCase());let h;h=e>3?D("div",{className:"password-strength-details strong"},D("div",{
className:"title"},D("div",{className:"text"},await ag("PassDetails_Strong_Title"))),D("div",{className:"description"
},0===d&&await ag("PassDetails_Strong_Description_Result_1"),d>0&&d<50&&await ag("PassDetails_Strong_Description_Result_3"),d>=50&&await ag("PassDetails_Strong_Description_Result_3")," ",(0,
k.R1)(await ag("PassDetails_Strong_Description_Action"),[f,g])),await j(),await i()):e>2?D("div",{
className:"password-strength-details good"},D("div",{className:"title"},D("div",{className:"text"
},await ag("PassDetails_Good_Title"))),D("div",{className:"description"
},0===d&&await ag("PassDetails_Good_Description_Result_1"),d>0&&d<50&&await ag("PassDetails_Good_Description_Result_3_2"),d>=50&&await ag("PassDetails_Good_Description_Result_3_2")," ",(0,
k.R1)(await ag("PassDetails_Description_Action"),[f,g])),await j(),await i()):e>1?D("div",{
className:"password-strength-details medium"},D("div",{className:"title"},D("div",{className:"text"
},await ag("PassDetails_Medium_Title"))),D("div",{className:"description"
},0===d&&await ag("PassDetails_Description_Result_1"),d>0&&d<50&&await ag("PassDetails_Description_Result_3"),d>=50&&await ag("PassDetails_Description_Result_3")," ",(0,
k.R1)(await ag("PassDetails_Description_Action"),[f,g])),await j(),await i()):D("div",{
className:"password-strength-details weak"},D("div",{className:"title"},D("div",{className:"icon"}),D("div",{className:"text"
},await ag("PassDetails_Weak_Title"))),D("div",{className:"description"
},0===d&&await ag("PassDetails_Description_Result_1"),d>0&&d<50&&await ag("PassDetails_Description_Result_3"),d>=50&&await ag("PassDetails_Description_Result_3")," ",(0,
k.R1)(await ag("PassDetails_Description_Action"),[f,g])),await j(),await i());return h;async function i(){return D("div",{
className:"total-score"},D("div",{className:"text"},await ag("PassDetails_TotalScore")),D("div",{className:"bar"},D("div",{
className:"slider",style:{width:(0,z.bf)(b)+"%"}})),D("div",{className:"value"},(0,z.bf)(b)+"/100"))}async function j(){
let a,b,e,f,g,i;const j=D("div",{className:"factors"+(0===d?" zero-uniqueness":"")},D("div",{className:"title"},D("div",{
className:"text"},await ag("PassDetails_Factors")),g=D("div",{className:"tip hidden"},D("span",{className:"bold"
},await ag("PassDetails_Uniqueness3")+":")," ",await ag("PassDetails_Uniqueness_Description"),D("br",null),D("br",null),D("span",{
className:"bold"},await ag("PassDetails_Complexity")+":")," ",await ag("PassDetails_Complexity_Description")),i=D("div",{
className:"icon"})),D("div",{className:"chart"},D("div",{className:"headers"},D("div",{className:"header"
},await ag("PassDetails_Uniqueness3")),D("div",{className:"header"},await ag("PassDetails_Complexity"))),D("div",{
className:"scale"},D("div",{className:"min-value"},"-100"),D("div",{className:"axis-uniqueness"},a=D("div",{
className:"slider-uniqueness"}),e=D("div",{className:"value value-uniqueness"},"-"+(0,z.bf)(d))),D("div",{
className:"value value-zero"},"0"),D("div",{className:"axis-complexity"},b=D("div",{className:"slider-complexity"}),f=D("div",{
className:"value value-complexity"},(0,z.bf)(c))),D("div",{className:"max-value"},"100"))))
;return i.addEventListener("mouseenter",(()=>{(0,u.l5)(g),h.style.overflow="visible",
au.children.length<=3&&(au.style.overflow="visible")})),i.addEventListener("mouseleave",(()=>{(0,u.SE)(g),h.style.overflow="",
au.style.overflow=""})),a.style.width=(0,z.bf)(d)+"%",b.style.width=(0,z.bf)(c)+"%",0===d?((0,u.SE)(a),(0,
u.SE)(e)):d<=13?e.style.right="16px":d>=92?e.style.left="0":e.style.right=`calc(${(0,z.bf)(d)}% - 7px`,0===c?((0,u.SE)(b),(0,
u.SE)(f)):c<=15?f.style.left="18px":c>=95?f.style.right="0":f.style.left=`calc(${(0,z.bf)(c)}% - 7px`,j}}(b),j.appendChild(aB),
q.addEventListener("click",(()=>{aI?t():s()})),aI?s():t()})()))}})())}else j=D("div",{className:"login-field field-id-"+(0,
z.bf)(a)},D("div",{className:"field-caption"},h),l=D("div",{className:"field-value"},D("div",{className:"text"},D("span",{
className:"text-value"},(0,t.cC)(i))),f.userIdField?D("div",{className:"onhover-button onhover-button-copy visible-copy",
title:await ag("Editor_Cmd_Copy_Flat"),onclick:m}):D("div",{className:"inline-onhover-buttons-pane"},D("div",{
className:"onhover-button onhover-button-copy",title:await ag("Editor_Cmd_Copy_Flat"),onclick:m}))));return g?(aA&&aw.push(aA),
aA=l):aw.push(l),j;function m(){(0,A.fI)((async()=>{await V.CopyTextToClipboardWithAutoClear(i,null),
V.ShowNotification(await ag("StartPage_Editor_CopiedToClipboard",[h]),null,null)})())}}function aU(){const a=function(){let a=0
;aA?a=aA.offsetWidth||0:aw.forEach((b=>{a=Math.max(b.offsetWidth||a)}));return a}(),b=(0,s.Md)(a);av&&(av.style.minWidth=b),
aE&&(aE.style.minWidth=b),aw.forEach((a=>{a.style.minWidth=b}))}async function aV(){const a=ai.m_goto_url;if(!a)return;if((0,
o.HB)(ai.m_goto_url)){if(ae)return}else{
if(a&&(0,s.oK)(a))return void V.ShowNotification(await ag("CannotOpenUrlForSecurityReasons"),5,2)}await Z.GoFillSubmit({
navigate:!0,path:ah.path,submit:!0,newTab:!0},null)}function aW(a){aH&&a.stopPropagation()}function aX(){aH?aF&&(aF.Hide(),
aF=null):function(){aH=!0;const a=null==ar?void 0:ar.getBoundingClientRect(),b=new DOMRect(a.left+20,a.bottom-10,0,0)
;async function c(){return await V.GetLoginCommands(ah,aZ)}function d(){const a=(0,f.NI)(ar);return a.onHide=g,a.onShow=e,a}
function e(){aH=!0}function g(){aH=!1}aF=(0,f.Lj)(b,(()=>c()),d(),(function(){return ar.getBoundingClientRect()}),((a,b)=>(0,
A.fI)(a(b,(0,A.f4)(null,null,null)))))}()}async function aY(a){await X.WriteText(a)}function aZ(){(0,u.SE)(ao),az.SetValue((0,
m.em)(ah.path)),az.Show(),aG=!0}function a0(){az.Hide(),(0,u.l5)(ao),aG=!1}function a1(){
const a=az.GetValue().trim().toLowerCase(),b=(0,x.HE)((0,x._p)(ah.path));(0,z.RA)(a,b)?a0():(0,A.fI)((async()=>{
const a=await ag("AdminCenter_LoginRenameConfirmation_Text")
;await V.ShowConfirmationDialog(await ag("AdminCenter_SaveChanges_Text"),a,await ag("AdminCenter_ConfirmationDialog_DontSave"),await ag("AdminCenter_ConfirmationDialog_Save"))?a2():a0()
})())}function a2(){(0,u.PQ)((async()=>{const a=az.GetValue().trim(),b=(0,m.KF)(a,null)
;if(!b)return await V.ShowErrorDialog(await ag("NameInvalidCharacter_Error2")),void az.Focus()
;if(b.length>251)return await V.ShowErrorDialog(await ag("WrongNameLenght_Error",[(0,z.bf)(251)])),void az.Focus()
;const c=ah.path,d=(0,m.kd)(ah.type),e=(0,x.fA)(c)+"/"+b+d;if((0,z.RA)(c,e))aG&&a0();else{let c=null;try{
c=await ak.GetInfo(e,1,null)}catch(f){if(!(0,C.r5)(f,C.Y$))return void(0,C.au)(f)}if(c){
const b=await ag("AlreadyExists_Error2",["Item",a]);return await V.ShowErrorDialog(await ag("Cmd_Rename_Error",["Item",a,b])),
void az.Focus()}{const a=(0,m.em)(ah.path);await ak.MoveFile(ah.path,e,null),aG&&a0();aR(await ak.GetInfo(e,63,null),ai)
;const c=await ag("Notification_Item_Renamed_Text",[a,b]);V.ShowNotification(c,null,null)}}}),(()=>(az.Enable(!1),()=>{
az.Enable(!0)})),0,null,(a=>{(0,A.fI)((async()=>{(0,C.r5)(a,C.kd)||await V.ShowErrorDialog((0,h.Qo)(a))})())}))}function a3(a){
for(const b of a)switch(b.event){case 8:if(8===b.type&&b.path&&(0,m.QC)(b.path,ah.path)&&b.to&&b.to.path){
const a=ah.path.replace(b.path,b.to.path);ah=Object.assign(Object.assign({},ah),{path:a}),(0,A.fI)(aS(ah.path))}
if(1===b.type&&b.path===ah.path&&b.to&&b.to.path){ah=Object.assign(Object.assign({},ah),{path:b.to.path});const a=(0,
m.em)(b.to.path);ap.textContent=a,ap.title=a,az.SetValue(a),(0,A.fI)(aS(ah.path))}break;case 12:(0,A.fI)((async()=>{
const a=await ad.GetInfo(ah.path,63,null);a.favorite!==ah.favorite&&(ah=Object.assign(Object.assign({},ah),{favorite:a.favorite
}))})())}}}function F(a,b,c,k,l,p,y,E,F,H,J){const K=c,M=y,N=k,O=l,P=H,Q=F.LocalizeString;let R=a,S=b,T=b,U=!1,V=!1
;let W,X,Y,Z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj=null,ak=null,al=null,am=!0;const an=(0,A.tG)();let ao;ao=E?(0,j.zd)({
imageSize:"imgLogo",rfDataItemImages:N,OnSetImage:(a,b)=>(0,j.rd)(a,X,Y,b),OnResetImage:()=>{(0,j._K)(X,Y)}}):(0,j.zd)({
imageSize:"img32",imageSizeForBackground:"imgLogo",rfDataItemImages:N,OnSetImage:(a,b)=>{const c={};return c.imgLogo={
url:b.img32.url,background:b.img32.background,size:b.img32.size},(0,j.rd)("imgLogo",X,Y,c)},OnResetImage:()=>{(0,j._K)(X,Y)}})
;const ap={Create:async function(a,b){return W=D("div",{className:"editor-view editor-inline editor-login edit-mode"},D("div",{
className:"editor-content"},X=E?D("div",{className:"content-header seperate-tab"},D("div",{className:"header-container tab-view"
},Y=D("div",{className:"header-image"}),D("div",{className:"header-title-pane"},D("div",{className:"header-title"},Z=D("div",{
className:"title-name",onclick:aw})),af=(0,t.nM)("hidden",ay,ax,az)))):D("div",{className:"content-header"},D("div",{
className:"header-title-pane"},Y=D("div",{className:"header-image"}),D("div",{className:"header-title"},Z=D("span",{
className:"title-name",onclick:aw})),af=(0,t.nM)("hidden",ay,ax,az)),aa=D("div",{className:"editor-cmdbar cmdbar-main"
},D("div",{className:"editor-cmd editor-cmd-close",title:await Q("Cmd_Close_Flat"),onclick:function(){(0,A.fI)((async()=>{
if(aJ()){const a=await Q("StartPage_Editor_CloseChangesConfirm",[await Q("RoboformType_Login")])
;await J.ShowConfirmationDialog(await Q("AdminCenter_SaveChanges_Text"),a,await Q("AdminCenter_ConfirmationDialog_DontSave"),await Q("AdminCenter_ConfirmationDialog_Save"))&&au(!1)
}b((0,C.JS)())})())}}))),E?D("div",{className:"buttons-bar"},D("div",{className:"buttons-container"},D("div",{
className:"button",onclick:c},await Q("Cmd_Cancel_Flat")),ab=D("div",{className:"button default-button disabled",
onclick:()=>au(!0)},await Q("Cmd_ApplyChanges_Flat")))):D("div",{className:"buttons-bar"},D("div",{className:"button",onclick:c
},await Q("Cmd_Cancel_Flat")),ab=D("div",{className:"button default-button disabled",onclick:()=>au(!0)
},await Q("Cmd_ApplyChanges_Flat"))),ae=D("div",{className:"loading-progress hidden"}),ac=D("div",{
className:"fields-list "+(E?"tab-view":"")},ad=D("div",{className:"error-text"})))),(0,A.C)((()=>aq(R,S,!1))),W;function c(){(0,
u.D$)((async()=>{if(aJ()){const a=await Q("StartPage_Editor_CloseChangesConfirm",[await Q("RoboformType_Login")])
;if(await J.ShowConfirmationDialog(await Q("AdminCenter_SaveChanges_Text"),a,await Q("AdminCenter_ConfirmationDialog_DontSave"),await Q("AdminCenter_ConfirmationDialog_Save")))return void au(!0)
}K&&b((0,C.JS)());const a=(0,A.f4)(null,null,null),c=await O.GetDataItem(R.path,4,null,a)
;await J.ShowDataViewModeInDetailsPane(R,c,!1,a)}),(()=>()=>{}),0,null)}},OnAfterShow:function(){O.onDataChanged.Add(aP),
document.addEventListener("keydown",ar),window.addEventListener("beforeunload",as)},OnBeforeHide:function(){},Focus:function(){
null==ag||ag.Focus()},Dispose:function(){an.Cancel(),O.onDataChanged.Remove(aP),document.removeEventListener("keydown",ar),
window.removeEventListener("beforeunload",as)}};return ap;function aq(a,b,c){if(U&&!c)return;const d=(0,m.em)(a.path)
;Z.textContent=d,Z.title=d,(0,A.fI)(ao.UpdateBySiteUrl((0,q.g4)(b.m_goto_url,b.m_match_url))),(0,A.fI)(at(b)),R=a,S=b,T=b,U=!0}
function ar(a){a.ctrlKey&&"KeyS"===a.code&&(a.preventDefault(),a.stopPropagation(),au(!1))}function as(a){if(aJ()){
const b="RoboForm file was changed. Do you want to save changes?";return(a||window.event).returnValue=b,b}}async function at(a){
var b,c,d,j;(0,u.rK)(ac),ag=(0,t.ap)({className:"editor-field field-gotourl",title:await Q("AdminCenter_GoToUrl_Text"),
value:null!==(b=a.m_goto_url)&&void 0!==b?b:"",oninput:aB,onblur:()=>function(){const a=aA(ag.GetValue().trim());ag.SetValue(a),
T=Object.assign(Object.assign({},T),{m_goto_url:a})}()}),ac.appendChild(ag),ah=(0,t.ap)({
className:"editor-field field-matchurl",title:await Q("AdminCenter_MatchUrl_Text"),
value:null!==(c=a.m_match_url)&&void 0!==c?c:"",oninput:aC,onblur:()=>function(){const a=aA(ah.GetValue().trim())
;ah.SetValue(a),T=Object.assign(Object.assign({},T),{m_match_url:a})}()}),ac.appendChild(ah);let k=null;const l=a.m_fields
;for(let p=0;p<l.length;p++){const q=p,x=l[p],y=x.m_type;if(3===y||4===y||5===y)continue;const E=I(R.type,x)
;if(E.serviceField)continue;const H=null!==(d=x.m_value)&&void 0!==d?d:"",K=await G(x,F),N=x.m_order_index?`${K}[${(0,
z.TT)(x.m_order_index)}]`:K;let U;if(E.passwordField){let ae,af;const am=D("div",{className:"inline-onhover-buttons-pane"
},ae=D("div",{className:"onhover-button onhover-button-show-secrete",title:await Q("StartPage_Login_ShowPasswordTip"),
onclick:()=>{(0,u.SE)(ae),(0,u.l5)(af),U.SetInputType("text")}}),af=D("div",{
className:"onhover-button onhover-button-hide-secrete hidden",title:await Q("StartPage_Login_HidePasswordTip"),onclick:()=>{(0,
u.SE)(af),(0,u.l5)(ae),U.SetInputType("password")}}));U=(0,t.ap)({className:`editor-field secret-field field-${q}`,title:N,
value:H,inputType:"password",onhoverButtonsPane:am,oninput:()=>aE(q,U)})}else U=E.infoField||E.userIdField?(0,t.ap)({
className:`editor-field field-${q}`,title:N,value:H,oninput:()=>aE(q,U)}):(0,t.fs)({className:`editor-field field-${q}`,title:N,
value:H,oninput:()=>aE(q,U),resizable_heigth:!0,onresize:a=>{const b=window.getComputedStyle(a),c=parseInt(b.minHeight)||0
;if(a.scrollHeight>c&&(a.style.height=(0,s.Md)(c),a.scrollHeight>a.clientHeight)){a.style.height="auto"
;const b=Math.min(a.scrollHeight+2,300);a.style.height=(0,s.Md)(b)}}});let V,X=!1;const Y=D("div",{
className:"field-with-actions"},U,V=D("div",{className:"cmdbutton cmd-actions",onmousedown:Z,onclick:aa}));function Z(a){
X&&a.stopPropagation()}function aa(){X?ad():ab()}function ab(){X=!0
;const a=null==V?void 0:V.getBoundingClientRect(),b=new DOMRect(a.left-10,a.top,0,0);function c(){X=!0}function d(){X=!1}k=(0,
f.Lj)(b,(()=>async function(){const a=[];E.loginTipField||E.scriptField||E.passwordField||E.userIdField||a.push({
title:await Q("Cmd_Rename_Flat"),imageClass:"admin-center-view cmd-rename-icon",onCommand:async(a,b)=>{await aG(q,K)}})
;return a.push({title:await Q("Cmd_Delete_Flat"),imageClass:"admin-center-view cmd-delete-icon",onCommand:async(a,b)=>{
await aH(q)}}),a}()),function(){const a=(0,f.NI)(V);return a.onHide=d,a.onShow=c,a}(),(function(){
return V.getBoundingClientRect()}),((a,b)=>(0,A.fI)(a(b,(0,A.f4)(null,null,null)))))}function ad(){k&&(k.Hide(),k=null)}
ac.appendChild(Y),"Resize"in U&&U.Resize()}if(1===R.type){const an=D("div",{className:"editor-field add-field-section"
},D("div",{className:"title",onclick:()=>(0,A.fI)(async function(){let a,b=await async function(){let a,b,c;const d=(0,
n.G)(T),[f,h]=(0,
B.Uw)(d.login?d.password?1:0:3),i=new Map([[1,await Q("PassCards_Custom")],[3,await Q("PassCards_UserId")],[0,await Q("PassCards_Password")],[2,await Q("PassCards_Script")]])
;T.m_fields.some((a=>a.m_name===m.jJ))&&i.set(4,await Q("PassCards_LoginTip_Title"));const[j,k]=(0,B.Uw)(!0);return(0,e.Sw)((0,
z.TT)(W),(0,e.p)((0,e.dK)("dialog-modal add-field-dialog",await Q("PassCards_Cmd_AddField_Key"),null),(()=>(0,
g._3)((async(d,e)=>{return D("div",{className:"content"},(0,t.l6)(f(null),!0,i,(a=>{k(!0),h(a)}),{
upperTitle:await Q("PassCards_AddField_Prompt"),ariaLabel:await Q("PassCards_AddField_Prompt"),seamlessDropdown:!0
}),(a=>2===f(a)?D("a",{className:"link",target:"_blank",
href:"https://help.roboform.com/hc/articles/360003796591-How-to-create-a-custom-script"
},Q("AdminCenter_LearnMore_Text")):[]),(d=>{const e=f(d);return(0,A.C)((()=>p(e))),[a=(0,t.ap)({
title:Q("PassCards_Cmd_AddField_Prompt"),value:o(e),className:1!==e?"hidden":void 0,oninput:()=>l(e)}),b=(0,t.ap)({
title:Q("PassCards_AddField_FieldValue_Title"),className:2===e?"hidden":void 0,inputType:0===e?"password":"text",
oninput:()=>l(e)}),c=(0,t.fs)({className:2!==e?"hidden":void 0,title:Q("PassCards_AddField_FieldValue_Title"),oninput:()=>l(e)
})]}),D("div",{className:"buttons-bar"},D("button",{className:"button",onclick:()=>e((0,C.JS)())
},await Q("Cmd_Cancel_Flat")),(a=>{const b=j(a);return D("button",{
className:b?"button default-button disabled":"button default-button",onclick:b?null:g},Q("PassCards_Cmd_Add_Button"))})))
;function g(){const e=a.GetValue().trim(),g=f(null);d({m_name:e,m_type:0===g?2:1,m_value:2===g?c.GetValue():b.GetValue(),
m_order_index:0})}function l(d){switch(d){case 0:case 3:case 4:k(""===b.GetValue().trim(),n);break;case 2:
k(""===c.GetValue().trim(),n);break;case 1:k(""===a.GetValue().trim()||""===b.GetValue().trim(),n)}}function n(a,b){return a===b
}function o(a){switch(a){case 0:return m.Aq;case 2:return m._6;case 3:return m.Df;case 4:return m.jJ;case 1:return""}}
function p(d){switch(d){case 3:case 0:case 4:b.Focus();break;case 2:c.Focus();break;case 1:a.Focus()}}}))))).Execute(null)}()
;for(const c of T.m_fields)b.m_name===c.m_name&&(a=c);a&&void 0!==a.m_order_index&&(b=Object.assign(Object.assign({},b),{
m_order_index:a.m_order_index+1}));T=Object.assign(Object.assign({},T),{m_fields:[...T.m_fields,b]}),await at(T),aI()}())
},D("div",{className:"image-plus"}),D("div",{className:"text"},await Q("PassCards_Cmd_AddField_Title"))));ac.appendChild(an)}
1===R.type&&(aj=D("div",{className:"passkey-fields hidden"}),ac.appendChild((0,z.TT)(aj)),(0,A.fI)(async function(){
T=await async function(a){var b,c;if(!aj)return a;(0,u.rK)(aj);const d=(0,m.OG)(a);if(!d)return(0,u.SE)(aj),a;const e=(0,
r.cr)(d);let g=e?[...e.p]:[];const h=null!==(b=await F.GetLanguageTag(null))&&void 0!==b?b:"en",i=await Q("Passkey_Title")
;let j=null;for(const k of null!==(c=null==e?void 0:e.p)&&void 0!==c?c:[null]){if(!k){aj.appendChild(D("div",{
className:"login-field passkey-field"},D("div",{className:"passkey-icon"},D("div",{className:"passkey-icon-content"})),D("div",{
className:"passkey-info"},D("div",{className:"passkey-title"},await Q("Passkey_Title")),D("div",{className:"passkey-text"
},await Q("Passkey_CannotDecode")))));continue}let l,n,o=!1;const p=k.cr;function q(){if(!k)return;const b=l.GetValue().trim()
;if(g=g.map((a=>a.c===k.c?Object.assign(Object.assign({},a),{n:b}):a)),!g||!e)return;const c=Object.assign(Object.assign({},e),{
p:g}),d=(0,r.uM)(c);a=(0,m.E5)(d,a),aI()}async function s(){if(!k)return;const a=k.u||"",b=k.c,c=(0,
m.em)(R.path),d=await Q("CL_Confirmation"),e=await Q("Passkey_Remove_Confirmation_Text",[c,a])
;if(await J.ShowConfirmationDialog(d,e,await Q("Options_No"),await Q("Options_Yes"))){S=(0,m.kF)(S,b),T=(0,m.kF)(T,b);try{
await O.PutDataItem(R.path,T,null),J.ShowNotification(await Q("Passkey_Removed_Notification",[c]),null,null),await av()
}catch(f){}}}function v(a){o&&a.stopPropagation()}function x(){o?z():y()}function y(){o=!0
;const a=null==n?void 0:n.getBoundingClientRect(),b=new DOMRect(a.left-10,a.top,0,0);async function c(){const a=[]
;return a.push({title:await Q("Cmd_Delete_Flat"),imageClass:"admin-center-view cmd-delete-icon",onCommand:async(a,b)=>{(0,
A.fI)(s())}}),a}function d(){const a=(0,f.NI)(n);return a.onHide=g,a.onShow=e,a}function e(){o=!0}function g(){o=!1}j=(0,
f.Lj)(b,(()=>c()),d(),(function(){return n.getBoundingClientRect()}),((a,b)=>(0,A.fI)(a(b,(0,A.f4)(null,null,null)))))}
function z(){j&&(j.Hide(),j=null)}aj.appendChild(D("div",{className:"login-field passkey-field"},D("div",{
className:"passkey-icon"},D("div",{className:"passkey-icon-content"})),D("div",{className:"passkey-info"},l=(0,t.ap)({
className:"",title:i,value:(null==k?void 0:k.n)||"",oninput:q}),D("div",{className:"passkey-text"
},p?D("span",null,await Q("Passkey_CreatedAt",[(0,w.BL)(p,h)])):null)),n=D("div",{className:"cmdbutton cmd-actions",
onmousedown:v,onclick:x})))}return(0,u.l5)(aj),a}(T)}())),L()&&1===R.type&&(ak=D("div",{
className:"editor-field field-totp-key hidden"}),ac.appendChild(ak),function(a,b){var c;if(!ak)return
;if(1!==a.type)return void f();const d=(0,m.JG)(b);if(a.readOnly&&!d)return void f();const e=d?(0,i.Re)({localization:F,
totpKey:d,readonly:null!==(c=a.readOnly)&&void 0!==c&&c,editMode:!0},{GenerateTOTPCode:async a=>(0,v._b)(a),
OnRemoveTOTPKey:()=>{(0,A.fI)((async()=>{
const a=(0,m.em)(R.path),b=(0,o.pK)(S.m_goto_url||"").toLowerCase(),c=await Q("CL_Confirmation"),d=D("div",{
className:"confirmation-text"
},await Q("Login_OneTimeCode_RemoveAuthKey_Confirmation_Title",[a]),D("ul",null,D("li",null,await Q("Login_OneTimeCode_RemoveAuthKey_Confirmation_Item1",[b])),D("li",null,await Q("Login_OneTimeCode_RemoveAuthKey_Confirmation_Item2",[b])),D("li",null,await Q("Login_OneTimeCode_RemoveAuthKey_Confirmation_Item3",[a]))),await Q("Login_OneTimeCode_RemoveAuthKey_Confirmation_Question",[a]))
;if(await J.ShowConfirmationDialog(c,d,await Q("Options_No"),await Q("Options_Yes"))){const b=!aJ(),c=(0,m.Qt)(T)
;await O.PutDataItem(R.path,c,null),
aq(R,c,!0),aI(),J.ShowNotification(await Q("Login_OneTimeCode_AuthKeyRemoved_Notification",[a]),null,null),b&&(0,A.fI)(av())}
})())},OnCopyTOTPCode:a=>{(0,A.fI)((async()=>{await aF(a),J.ShowNotification(await Q("Login_OneTimeCode_Copied_Text"),null,null)
})())},OnCopyTOTPSetupKey:()=>{const a=(0,m.JG)(b);a&&(0,A.fI)((async()=>{await aF(a),
J.ShowNotification(await Q("Login_OneTimeCode_SetupKey_Copied_Text"),null,null)})())},OnReplaceTOTPKey:()=>{(0,A.fI)((async()=>{
const a=(0,m.JG)(T);if(!a)return;const b=await(0,i.k_)(R,S,P,(0,z.TT)(W),F);if(!b)return
;const c=await F.GetLanguageTag(null)||"en",d=await Q("SaveDlg_Note_TOTPKeyChanged_Text",[(0,w.Sy)((0,w.t2)(),c),a])
;S=Object.assign(Object.assign({},S),{m_note:S.m_note?S.m_note+"\n"+d:d}),T=Object.assign(Object.assign({},T),{
m_note:T.m_note?T.m_note+"\n"+d:d}),S=(0,m.O4)(b,S),T=(0,m.O4)(b,T),await O.PutDataItem(R.path,S,null),aq(R,T,!0),
J.ShowNotification(await Q("Login_OneTimeCode_ReplacedAuthKey_Notification"),null,null)})())}}):(0,g._3)((async()=>(0,
i.XC)(F,(()=>{(0,A.fI)((async()=>{await(0,i.N6)((0,o.pK)(S.m_goto_url).toLowerCase(),F,(0,z.TT)(W),P,(async(a,b)=>{const c=(0,
m.O4)(a,S)
;await O.PutDataItem(R.path,c,null),aq(R,c,!1),J.ShowNotification(await Q("Login_OneTimeCode_AuthKeyAdded_Notification",[(0,
m.em)(R.path)]),null,null),(0,A.fI)(av()),b()}))})())}),(()=>{(0,A.fI)(M.OpenUrl({url:h.K9,newTab:!0},null))}))));function f(){
ak&&((0,u.SE)(ak),null==al||al.OnBeforeHide(),(0,u.rK)(ak),null==al||al.Dispose(),al=null)}(0,A.fI)((async()=>{f()
;const a=await e.Create((()=>{}),(()=>{}));ak.appendChild(a),e.OnAfterShow(),(0,u.l5)(ak),al=e})())}(R,a)),ai=(0,t.fs)({
className:"editor-field field-note",title:await Q("AdminCenter_Note_Text"),value:null!==(j=a.m_note)&&void 0!==j?j:"",
oninput:aD,resizable_heigth:!0,max_height:300}),ac.appendChild(ai),(0,A.fI)((async()=>{await(0,A.Gu)(100,null),ai.Resize()})())}
function au(a){if(am)return;((0,m.fb)(T)?(0,o.dy)(T.m_goto_url):function(){const a=ag.GetValue()||"",b=(0,x.OZ)(a,!0)||""
;a!==b&&ag.SetValue(b);return b}())?(0,u.D$)((async()=>{try{await O.PutDataItem(R.path,T,null),
await p.SetUsageInfo(R.path,0,4!==R.type,null),J.ShowNotification(await Q("Notification_Changes_Saved_Text"),null,null),
a?await av():S=T}catch(b){}}),aL,300,aN):(0,A.fI)(async function(a){(0,d.eX)(ad,await a),ag.SetErrorState(),ag.Focus()
}(Q("NameInvalidCharacter_Error2")))}async function av(){
const a=(0,A.f4)(null,null,null),b=await O.GetInfo(R.path,63,null),c=await O.GetDataItem(R.path,4,null,null)
;await J.ShowDataViewModeInDetailsPane(b,c,!1,a)}function aw(){X.classList.add("inplace-rename"),(0,u.SE)(Z),E||(0,u.SE)(aa),
af.SetValue((0,m.em)(R.path)),af.Show(),V=!0}function ax(){X.classList.remove("inplace-rename"),af.Hide(),(0,u.l5)(Z),E||(0,
u.l5)(aa),V=!1}function ay(){(0,u.PQ)((async()=>{const a=af.GetValue().trim(),b=(0,m.KF)(a,null)
;if(!b)return await J.ShowErrorDialog(await Q("NameInvalidCharacter_Error2")),void af.Focus()
;if(b.length>251)return await J.ShowErrorDialog(await Q("WrongNameLenght_Error",[(0,z.bf)(251)])),void af.Focus()
;const c=R.path,d=(0,m.kd)(R.type),e=(0,x.fA)(c)+"/"+b+d;if((0,z.RA)(c,e))V&&ax();else{let c=null;try{
c=await O.GetInfo(e,1,null)}catch(f){if(!(0,C.r5)(f,C.Y$))return void(0,C.au)(f)}if(c){
const b=await Q("AlreadyExists_Error2",["Item",a]);return await J.ShowErrorDialog(await Q("Cmd_Rename_Error",["Item",a,b])),
void af.Focus()}{const a=(0,m.em)(R.path);await O.MoveFile(R.path,e,null),V&&ax();aq(await O.GetInfo(e,63,null),S,!0)
;const c=await Q("Notification_Item_Renamed_Text",[a,b]);J.ShowNotification(c,null,null)}}}),(()=>(af.Enable(!1),()=>{
af.Enable(!0)})),0,null,(a=>{(0,A.fI)((async()=>{(0,C.r5)(a,C.kd)||await J.ShowErrorDialog((0,h.Qo)(a))})())}))}function az(){
const a=af.GetValue().trim().toLowerCase(),b=(0,x.HE)((0,x._p)(R.path));(0,z.RA)(a,b)?ax():(0,A.fI)((async()=>{
const a=await Q("AdminCenter_LoginRenameConfirmation_Text")
;await J.ShowConfirmationDialog(await Q("AdminCenter_SaveChanges_Text"),a,await Q("AdminCenter_ConfirmationDialog_DontSave"),await Q("AdminCenter_ConfirmationDialog_Save"))?ay():ax()
})())}function aA(a){const b=(0,o.dy)(a);if(!a||!b||!b.m_schema||b.m_schema.length<3){const b="https://"+a;return(0,
o.dy)(b)?b:"https://"}return a}function aB(){aK(),T=Object.assign(Object.assign({},T),{m_goto_url:ag.GetValue().trim()}),aI()}
function aC(){aK(),T=Object.assign(Object.assign({},T),{m_match_url:ah.GetValue().trim()}),aI()}function aD(){
T=Object.assign(Object.assign({},T),{m_note:ai.GetValue().trim()}),aI()}function aE(a,b){
const c=b.GetValue().trim(),d=T.m_fields[a],e=[...T.m_fields];e[a]=Object.assign(Object.assign({},d),{m_value:c}),
T=Object.assign(Object.assign({},T),{m_fields:e}),aI()}async function aF(a){await P.WriteText(a)}async function aG(a,b){
const c=await async function(a){let b
;const c=(0,e.Sw)((0,z.TT)(W),(0,e.p)((0,e.dK)("dialog-modal rename-field-dialog",await Q("PassCards_Cmd_RenameField_Title"),null),(()=>({
Create:async(c,d)=>{return D("div",{className:"content"},b=(0,t.ap)({title:await Q("PassCards_Cmd_AddField_Prompt"),value:a
}),D("div",{className:"buttons-bar"},D("div",{className:"button",onclick:()=>d((0,C.JS)())
},await Q("Cmd_Cancel_Flat")),D("div",{className:"button default-button",onclick:()=>e()},await Q("Cmd_Ok_Flat"))))
;function e(){const a=b.GetValue().trim();c(a)}},OnAfterShow:()=>{null==b||b.Focus()},OnBeforeHide:()=>{},Focus:()=>{},
Dispose:()=>{}}))));return c.Execute(null)}(b),d=T.m_fields[a],f=Object.assign(Object.assign({},d),{m_name:c})
;d.m_caption&&(f.m_caption=c);const g=[...T.m_fields];g[a]=f,T=Object.assign(Object.assign({},T),{m_fields:g}),await at(T),aI()}
async function aH(a){
const b=await G(T.m_fields[a],F),c=await Q("CL_Confirmation"),d=await Q("PassCards_Cmd_DeleteField_Confirm",[b])
;if(await J.ShowConfirmationDialog(c,d,await Q("Options_No"),await Q("Options_Yes"))){const b=[...T.m_fields];b.splice(a,1),
T=Object.assign(Object.assign({},T),{m_fields:b}),await at(T),aI()}}function aI(){aJ()?((0,u.r9)(ab),am=!1):((0,u.aZ)(ab),am=!0)
}function aJ(){if((0,u.o3)(S.m_goto_url,T.m_goto_url))return!0;if((0,u.o3)(S.m_match_url,T.m_match_url))return!0;if((0,
u.o3)(S.m_note,T.m_note))return!0;const a=S.m_fields,b=T.m_fields;if(a.length!==b.length)return!0;for(const[c,d]of b.entries()){
const b=d.m_value;if(void 0===b)continue;const e=a[(0,z.fB)(c)];if(void 0===e)return!0;const f=e.m_value;if((0,
u.o3)(f,b))return!0;if((0,u.o3)(e.m_name,d.m_name))return!0}return!1}function aK(){(0,d.eX)(ad,""),ag.RemoveErrorState()}
function aL(){return(0,u.aZ)(ag),(0,u.aZ)(ai),(0,u.aZ)(ab),am=!0,aM}function aM(){(0,u.r9)(ag),(0,u.r9)(ai),aI()}function aN(){
return(0,u.l5)(ae),(0,u.aZ)(ag),(0,u.aZ)(ai),(0,u.aZ)(ab),am=!0,aO}function aO(){(0,u.SE)(ae),(0,u.r9)(ag),(0,u.r9)(ai),(0,
u.r9)(ab),am=!1}function aP(a){for(const b of a)if(8===b.event)if(8===b.type&&b.path&&(0,
m.QC)(b.path,R.path)&&b.to&&b.to.path&&(R=Object.assign(Object.assign({},R),{path:R.path.replace(b.path,b.to.path)})),
1===b.type&&b.path===R.path&&b.to&&b.to.path){R=Object.assign(Object.assign({},R),{path:b.to.path});const a=(0,m.em)(b.to.path)
;Z.textContent=a,Z.title=a,af.SetValue(a)}}}function G(a,b){const c=b.LocalizeString,d=a.m_name||"";switch(d){case m.Df:
return c("PassCards_UserId");case m.Aq:return c("PassCards_Password");case m.zY:return c("PassCards_Note");case m.jJ:
return c("PassCards_LoginTip_Title");case m.Pf:return c("PassCards_Prompt");case m._6:return c("PassCards_Script")}
let e=(a.m_caption||"").trim();if(!e&&(e=d,e.length>4&&e.search(K)>=0&&(e=e.split("$").pop()||e),e.length>J)){let a
;for(a=e.length-1;a>=0&&"."!==e[a]&&"/"!==e[a]&&":"!==e[a];a--);let b=Math.min(J,e.length-a-1);b<3&&(b=J-2),
b<e.length&&(e="..."+e.slice(e.length-b))}return Promise.resolve(e)}function H(a){return 2===a.m_type||a.m_name===m.Aq}
function I(a,b){const c=(0,z.TT)(b.m_name),d={userIdField:c===m.Df,passwordField:H(b),defaultField:b.m_value_is_default||!1,
promptField:3===a&&c===m.Pf,loginTipField:c===m.jJ,scriptField:c===m._6,noteField:c===m.zY||"$Note$"===c,totpField:c===m.M4,
passKeyField:c===m.I4};return d.serviceField=!d.promptField&&!d.loginTipField&&!d.scriptField&&m.jW.includes(c),d}
const J=20,K=/^(_ctl|ctl00)/;function L(){return"msie"!==(0,s.m)()}}}]);