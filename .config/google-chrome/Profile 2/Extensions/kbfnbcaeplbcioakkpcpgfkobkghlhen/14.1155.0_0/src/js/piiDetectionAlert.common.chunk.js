(self.webpackChunk=self.webpackChunk||[]).push([[9209],{8446:(e,t,i)=>{i.r(t),i.d(t,{PiiDetectionAlert:()=>r.PiiDetectionAlert,PiiDetectionAlertHighlights:()=>m,PiiDetectionCard:()=>g.PiiDetectionCard,PiiDetectionCardController:()=>u.x,PiiDetectionCardModel:()=>v.PiiDetectionCardModel,PiiDetectionCardModelImpl:()=>v.H,PiiDetectionFeatureImpl:()=>a.r,PiiDetectionFeatureModel:()=>l.PiiDetectionFeatureModel,PiiDetectionFeatureModelImpl:()=>l.x,PiiDetectionServiceClient:()=>n.PiiDetectionServiceClient,PiiDetectionServiceClientImpl:()=>n.j,userHasPiiDetectionFeature:()=>h.z});var r={};i.r(r);var a=i(35835),l=i(77347),n=i(5068),s=i(27378),c=i(32883),o=i(9525),d=i(8338);const m=({highlights:e,highlightHeightOffset:t,getAlertById:i,getHoverState:r,highlightsFilter:a})=>s.createElement(c.J,{highlights:e.view((e=>Array.from(e.values()).filter((e=>{const t=i(e.meta.alertId);return!!t&&a(t)})))),highlightHeightOffset:t,getHoverState:r,getAlertById:i,highlightRenderer:(e,t,i)=>s.createElement(o.eZ,{key:e.meta.highlightId,color:{kind:"preset",color:d.al.gray},rects:e.rects||[],hoverState:t,heightOffset:i,baseKey:e.meta.highlightId,displayFormat:d.jk.underlineAndBackground,disappearOnHoverDelay:null,liveliness:e.meta.highlightLiveliness})});var h=i(74344),g=i(87970),u=i(14412),v=i(61587)},87970:(e,t,i)=>{i.r(t),i.d(t,{PiiDetectionCard:()=>o});var r=i(27378),a=i(24264),l=i(89872),n=i(62369),s=i(48015),c=i(51775);const o=({model:e})=>r.createElement(a.Z,{kind:"inline"},r.createElement("div",{className:c.piiDetectionCard},r.createElement("div",{className:c.header},r.createElement("div",{className:c.grammarlyIcon}),r.createElement("h1",{className:c.title},"Grammarly Guard"),r.createElement(l.C,{className:c.badge,title:"BETA",kind:"success"})),r.createElement("p",{className:c.text},"This text may include ",(({patternType:e})=>"creditCardNumber"===e?"credit card numbers":"phoneNumber"===e?"personal phone numbers":"usSSN"===e?"social security numbers":void(0,s.vE)(e))(e.alert)," that are sensitive and personally identifiable information. You may want to consider removing these details."),r.createElement("div",{className:c.footer},r.createElement(n.z,{className:c.dismissBtn,dataGrammarlyPart:"piiDetectionDismissButton",kind:"transparent-hoverable",onClick:e.dismissAlert},"Dismiss"))))},51775:e=>{e.exports={piiDetectionCard:"ElK1b",grammarlyIcon:"NsIG2",header:"i4oVu",title:"qkbMx",badge:"SRBm3",text:"y4171",dismissBtn:"wIU56"}}}]);