// Copyright (C) 1999-2025 Siber Systems Inc. All Rights Reserved.
"use strict";(self.rf_vlu7ce9uien=self.rf_vlu7ce9uien||[]).push([[43],{41326:function(a,b,c){c.r(b),c.d(b,{
SettingsController:function(){return k}});var d=c(11834),e=c(83343),f=c(97490),g=c(63956),h=c(78440),i=c(69893),j=c(4153)
;c(13117);function k(a,b,c,k,l,m,n,o,p,q,r,s,t,u){const v=a,w=b,x=c,y=k,z=l,A=m,B=n,C=o,D=p,E=s,F=t;let G=!1
;const H=u.main,I=u.files,J=u.settings;let K=null,L=0,M=null;return{Activate:function(){if(G)return;G=!0,(0,g.l5)(I),(0,
g.l5)(J),x.IsInlineEditorShown()&&x.CloseEditor();(0,g.PQ)(N,(()=>()=>{}),500,(()=>(J.classList.add("rf-in-proggress"),
O)),(a=>(0,h.fI)((0,d.nn)((0,i.EB)(a)))))},Deactivate:function(){if(!G)return;G=!1,null==K||K.forEach((a=>{
J.contains(a)&&J.removeChild(a)})),K=null,L=0,M=null,H.classList.remove("rf-settings-shown"),(0,g.SE)(J)},
UpdateView:function(a){if(!G)return},Invalidate:()=>{},IsStillActual:()=>G,GetIsStillActual:()=>function(){return G},
SelectSection:function(a){L=a},SelectSectionAndScrollTo:function(a,b){L=a,M=b},GetExtensionStorage:function(){return B}}
;async function N(){const a="stand-alone"===y.mode||"extension-v9"===y.mode&&"stand-alone"===y.extensionMode,b={
onDone:()=>x.CloseSettings(),OnOpenPaymentPage:w.OpenPaymentPage,ShowViewInRightPanel:a=>{x.ShowViewInRightPanel(a,null)},
HideViewInRightPanel:()=>{x.CloseEditor()}},c=(0,e.r)(L,M,"stand-alone"!==y.mode,!a,!y.isInAppPaymentDisabled,!0,D,w,(0,
j.TT)(v.rfo),(0,
j.TT)(v.enterprise),v.service,v.data,v.usageInfo,v.backups,z,A,v.options,v.settings,v.policies,q,r,E,B,null,C,y.platformOs,y.browserType,F,b)
;K=await(0,f.Dn)((0,f.i2)(),c),K.forEach((a=>J.appendChild(a))),H.classList.add("rf-settings-shown")}function O(){
J.classList.remove("rf-in-proggress")}}}}]);